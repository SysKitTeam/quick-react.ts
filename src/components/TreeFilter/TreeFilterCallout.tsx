import * as React from 'react';
import Resizable from 'react-resizable-box';
import * as classNames from 'classnames';
import * as _ from 'lodash';

import { Callout } from '../Callout';
import { DirectionalHint } from '../../utilities/DirectionalHint';
import { Icon } from '../Icon';
import { ITreeFilterProps, ITreeFilterState, TreeItem, CheckStatus, FilterSelectionEnum, IFilterSelection, defaultTreeFilterProps } from './TreeFilter.Props';
import { ItemOperator } from './TreeItemOperators';
import { TreeFilterNew } from './TreeFilterNew';

import './TreeFilter.scss';

const ROW_HEIGHT = 20;

export class TreeFilterCallout extends React.PureComponent<ITreeFilterProps, ITreeFilterState> {
    private _anchor: any;
    private _callout: any;

    // private parentLookup: Readonly<{ [id: string]: TreeItem }>;
    // private itemLookup: Readonly<{ [id: string]: TreeItem }>;

    private allItemIds: ReadonlyArray<string>;

    static defaultProps = defaultTreeFilterProps;

    constructor(props: ITreeFilterProps) {
        super(props);
        this.state = {
            isOpen: false,
            partiallyCheckedItemIds: [],
            searchText: '',
            filteredItems: ItemOperator.filterItems(props.items, '')
        };
        // let lookups = ItemOperator.getLookupTableAndParentLookup(props.items);
        // this.parentLookup = lookups.parentLookup;
        // this.itemLookup = lookups.itemLookup;
        this.allItemIds = ItemOperator.getAllItemIds(props.items);
        this.searchItems = _.debounce(this.searchItems, 100);
    }

    setAnchorRef = (ref) => { this._anchor = ref; };

    setCalloutRef = (ref) => { this._callout = ref; };

    private searchItems = (searchText?: string) => {
        const lowerCaseSearchText = searchText == null ? '' : searchText.toLowerCase();
        let newItems = ItemOperator.filterItems(this.props.items, searchText);
        this.setState(prevState => ({
            ...prevState,
            searchText: searchText,
            filteredItems: newItems
        }));
    }

    toggleOpenState = () => {
        this.setState(prevState => ({ ...prevState, isOpen: !prevState.isOpen }));
        if (this.state.isOpen && this.props.clearSearchOnClose) {
            this.searchItems('');
        }
    }

    onDismiss = () => {
        this.setState(prevState => ({ ...prevState, isOpen: false }));
        // if (this.props.clearSearchOnClose) {
        //     this.searchItems('');
        // }
    }

    // getSelectedText = () => {
    //     if (this.props.filterSelection.type === FilterSelectionEnum.All) {
    //         return '[All]';
    //     }
    //     const checkedItemIds = this.props.filterSelection.selectedIDs;

    //     if (checkedItemIds.length === 0) {
    //         return 'Please select...';
    //     } else if (checkedItemIds.length === 1) {
    //         const itemId = checkedItemIds[0];
    //         return this.itemLookup[itemId].value;  // ItemOperator.findItemInTree(this.props.items, itemId).value;
    //     } else {
    //         const someIds = checkedItemIds.slice(0, 3);
    //         const names = someIds.map((itemID) => { return this.itemLookup[itemID].value; }); //  ItemOperator.findItemInTree(this.props.items, itemID).value; });
    //         return names.join(', ') + '...';
    //     }
    // }

    getBoxSupportElementsHeight = () => {
        let heightDiff = 5; // 5px: paddings
        if (!this.props.isSingleSelect) { heightDiff += 44; } // 25px: SelectAll +  19px: Footer
        if (this.props.hasSearch) { heightDiff += 30; }
        return heightDiff;
    }

    getBoxHeight = (availableHeight) => {
        const supportElementsHeight = this.getBoxSupportElementsHeight();
        const maxListHeight = availableHeight - supportElementsHeight;
        const numberOfItems = this.allItemIds.length;
        const itemsListHeight = numberOfItems * ROW_HEIGHT;
        if (itemsListHeight < maxListHeight) {
            return itemsListHeight + supportElementsHeight;
        } else {
            return availableHeight;
        }
    }

    onCalloutResize = () => { this._callout.UpdatePosition(); };

    render() {
        const { title, hasSearch, isSingleSelect, minWidth, minHeight, maxWidth, maxHeight, defaultSelection } = this.props;
        const { isOpen } = this.state;

        // const allSelected = this.getAllSelectedCheckMark();
        // const filterSelection = this.props.filterSelection;
        // const checkedItemIds = filterSelection.type === FilterSelectionEnum.All ? this.allItemIds : filterSelection.selectedIDs;

        // const numberOfSelectedItems = checkedItemIds.length;

        // const isDefaultSelected =
        //     (defaultSelection === FilterSelectionEnum.None && numberOfSelectedItems === 0) ||
        //     (defaultSelection === FilterSelectionEnum.All && numberOfSelectedItems === this.allItemIds.length);


        return (
            <div>
                <div className="tree-filter-container" ref={this.setAnchorRef}>
                    {/* <span className={classNames({ 'item-selected': !isDefaultSelected })} >{title}: </span>
                    {!isDefaultSelected &&
                        <Icon iconName="icon-delete" className="reset-filter-icon" onClick={this.onFilterReset} />
                    } */}
                    <div className="tree-filter-title" onClick={this.toggleOpenState}>
                        <span>{this.getSelectedText()}</span>
                        {isOpen &&
                            <Icon className="dropdown-icon" iconName={'icon-Arrow_up'} />
                        }
                        {!isOpen &&
                            <Icon className="dropdown-icon" iconName={'icon-arrow_down'} />
                        }
                    </div>
                </div>
                {this.state.isOpen &&
                    <Callout
                        ref={this.setCalloutRef}
                        isBeakVisible={false}
                        className="tree-filter-callout"
                        gapSpace={0}
                        doNotLayer={false}
                        directionalHint={this.props.directionalHint}
                        targetElement={this._anchor}
                        onDismiss={this.onDismiss}
                    >
                        <Resizable
                            width={this.props.width}
                            height={this.getBoxHeight(this.props.height)}
                            style={{ overflow: 'hidden' }}
                            minWidth={minWidth}
                            minHeight={minHeight}
                            maxWidth={maxWidth}
                            maxHeight={maxHeight}
                            onResize={this.onCalloutResize}
                            enable={this.props.enabledResizeHandles}
                        >
                            <div style={{ height: '100%', width: '100%' }}>
                                <TreeFilterNew {...{ ...this.props, title: undefined }} />
                            </div>
                        </Resizable>
                    </Callout>
                }
            </div>
        );
    }
}
