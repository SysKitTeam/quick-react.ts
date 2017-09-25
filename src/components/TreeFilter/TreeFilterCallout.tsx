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

import { autobind } from '../../utilities/autobind';

import './TreeFilterCallout.scss';

const ROW_HEIGHT = 20;

export class TreeFilterCallout extends React.PureComponent<ITreeFilterProps, any> {
    private _anchor: any;
    private _callout: any;

    private lookups: {
        parentLookup: Readonly<{ [id: string]: TreeItem }>,
        itemLookup: Readonly<{ [id: string]: TreeItem }>
    };

    private allItemIds: ReadonlyArray<string>;

    static defaultProps = defaultTreeFilterProps;

    constructor(props: ITreeFilterProps) {
        super(props);
        this.state = {
            isOpen: false,
            filteredSelection: this.props.filterSelection,
            isDefaultSelected: false,
            selectionText: 'Please select...'
        };
        this.lookups = ItemOperator.getLookupTableAndParentLookup(props.items);
        this.allItemIds = ItemOperator.getAllItemIds(props.items);
    }

    public componentWillReceiveProps(nextProps: ITreeFilterProps) {
        if (nextProps.items === this.props.items) {
            return;
        }

        const filteredItems = ItemOperator.filterItems(nextProps.items, this.state.searchText);
        this.lookups = ItemOperator.getLookupTableAndParentLookup(nextProps.items);
        this.setState(prevState => ({ ...prevState, filteredItems: filteredItems }));
    }

    private setAnchorRef = (ref) => {
        this._anchor = ref;
    }

    private setCalloutRef = (ref) => {
        this._callout = ref;
    }

    private searchItems = (searchText?: string) => {
        const lowerCaseSearchText = searchText == null ? '' : searchText.toLowerCase();
        let newItems = ItemOperator.filterItems(this.props.items, searchText);
        this.setState(prevState => ({
            ...prevState,
            searchText: searchText,
            filteredItems: newItems
        }));
    }

    private toggleOpenState = () => {
        this.setState(prevState => ({ ...prevState, isOpen: !prevState.isOpen }));
        if (this.state.isOpen && this.props.clearSearchOnClose) {
            this.searchItems('');
        }
    }

    private onDismiss = () => {
        this.setState(prevState => ({ ...prevState, isOpen: false }));
        // if (this.props.clearSearchOnClose) {
        //     this.searchItems('');
        // }
    }

    private getBoxSupportElementsHeight = () => {
        let heightDiff = 5; // 5px: paddings
        if (!this.props.isSingleSelect) { heightDiff += 44; } // 25px: SelectAll +  19px: Footer
        if (this.props.hasSearch) { heightDiff += 30; }
        return heightDiff;
    }

    private getBoxHeight = (availableHeight) => {
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

    private onCalloutResize = () => { this._callout.UpdatePosition(); };

    @autobind
    private onFilterItemsChange(items: Array<TreeItem>) {
        this.setState(prevState => (
            { ...prevState, filteredItems: items }
        ));
    }

    @autobind
    private onValuesSelected(filterId: string, filterSelection) {
        this.setState({ filterSelection });
        this.props.onValuesSelected(filterId, filterSelection);
    }

    @autobind
    private onCustomSelection(isDefaultSelected: boolean) {
        this.setState({ isDefaultSelected });
    }

    @autobind
    private onFilterReset() {
        this.setState({
            filterSelection: {
                type: FilterSelectionEnum.All,
                selectedIDs: this.allItemIds
            },
            isDefaultSelected: true
        });
    }

    @autobind
    private onSelectionTextChange(text: string) {
        this.setState({ selectionText: text });
    }

    public render() {
        const { title, hasSearch, isSingleSelect, minWidth, minHeight, maxWidth, maxHeight, defaultSelection } = this.props;
        const { isOpen, isDefaultSelected } = this.state;

        const restOfProps = {
            onCustomSelection: (isDefault) => this.onCustomSelection(isDefault),
            onValuesSelected: this.onValuesSelected
        };

        const treeFilterProps = {
            ...this.props,
            title: undefined,
            onCustomSelection: this.onCustomSelection,
            onValuesSelected: this.onValuesSelected,
            filterSelection: this.state.filterSelection,
            selectionText: this.onSelectionTextChange
        };

        return (
            <div>
                <div className="tree-filter-container" ref={this.setAnchorRef}>
                    <span className={classNames({ 'item-selected': !isDefaultSelected })} >{title}: </span>
                    {
                        !isDefaultSelected &&
                        <Icon iconName="icon-delete" className="reset-filter-icon" onClick={this.onFilterReset} />
                    }
                    <div className="tree-filter-title" onClick={this.toggleOpenState}>
                        <span>{this.state.selectionText}</span>
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
                                <TreeFilterNew
                                    {...treeFilterProps}
                                />
                            </div>
                        </Resizable>
                    </Callout>
                }
            </div>
        );
    }
}
