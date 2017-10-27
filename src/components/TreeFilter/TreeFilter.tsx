import * as React from 'react';
import Resizable from 'react-resizable-box';
import * as classNames from 'classnames';
import * as _ from 'lodash';

import { Callout } from '../Callout';
import { DirectionalHint } from '../../utilities/DirectionalHint';
import { Icon } from '../Icon';
import {
    ITreeFilterProps,
    ITreeFilterState,
    FilterSelectionEnum,
    IFilterSelection,
    defaultTreeFilterProps,
    TreeItem
} from './TreeFilter.Props';
import { ItemOperator } from './TreeItemOperators';
import { VirtualizedTreeView } from './VirtualizedTreeView';
import { IVirtualizedTreeViewProps } from './VirtualizedTreeView.Props';

import { autobind } from '../../utilities/autobind';

import './TreeFilter.scss';

export class TreeFilter extends React.PureComponent<ITreeFilterProps, ITreeFilterState> {
    private _anchor: any;
    private _callout: any;
    private allItemIds: ReadonlyArray<string>;
    private lookups: any;

    static defaultProps = defaultTreeFilterProps;

    public constructor(props: ITreeFilterProps) {
        super(props);

        this.allItemIds = ItemOperator.getAllItemIds(props.items);
        this.lookups = ItemOperator.getLookupTableAndParentLookup(props.items);

        this.state = {
            isOpen: false,
            isDefaultSelected: this.checkIfDefaultSelection(props.filterSelection.type, props.filterSelection.selectedIDs),
            selectionText: this.getSelectedText(props, this.lookups.itemLookup),
            query: ''
        };
    }

    getSelectedText = (props: ITreeFilterProps, itemLookup) => {
        if (props.items == null || props.items.length === 0) {
            return 'No items';
        }
        if (props.filterSelection.type === FilterSelectionEnum.All) {
            return '[All]';
        }
        const checkedItemIds = props.filterSelection.selectedIDs;
        if (checkedItemIds.length === 0) {
            return 'Please select...';
        } else if (checkedItemIds.length === 1) {
            const itemId = checkedItemIds[0];
            return itemLookup[itemId].value;
        } else {
            const someIds = checkedItemIds.slice(0, 3);
            const names = someIds.map(itemID => itemLookup[itemID].value);
            return names.join(', ') + '...';
        }
    }

    private checkIfDefaultSelection(filterSelectionType: FilterSelectionEnum, selectedIds: Array<string>): boolean {
        const { defaultSelection } = this.props;
        const checkedItemIds = filterSelectionType === FilterSelectionEnum.All ? this.allItemIds : selectedIds;
        const numberOfSelectedItems = checkedItemIds.length;

        const isDefaultSelected =
            (defaultSelection === FilterSelectionEnum.None && numberOfSelectedItems === 0) ||
            (defaultSelection === FilterSelectionEnum.All && numberOfSelectedItems === this.allItemIds.length);

        return isDefaultSelected;
    }

    public componentWillReceiveProps(nextProps: ITreeFilterProps) {
        if (nextProps.items !== this.props.items) {
            this.lookups = ItemOperator.getLookupTableAndParentLookup(nextProps.items);
            this.allItemIds = ItemOperator.getAllItemIds(nextProps.items);
        }

        this.setState(
            prevState => ({
                ...prevState,
                selectionText: this.getSelectedText(nextProps, this.lookups.itemLookup),
                isDefaultSelected: this.checkIfDefaultSelection(nextProps.filterSelection.type, nextProps.filterSelection.selectedIDs)
            }));
    }

    private setAnchorRef = (ref) => {
        this._anchor = ref;
    }

    private setCalloutRef = (ref) => {
        this._callout = ref;
    }

    private toggleOpenState = () => {
        if (this.props.items == null || this.props.items.length === 0) {
            return;
        }
        this.setState(prevState => ({ ...prevState, isOpen: !prevState.isOpen }));
    }

    onDismiss = () => {
        this.setState(prevState => ({ ...prevState, isOpen: false }));
    }

    private getBoxSupportElementsHeight = () => {
        let heightDiff = 12; // 6px paddings top and bottom
        if (!this.props.isSingleSelect) { heightDiff += 40; } // 21px: SelectAll +  19px: Footer
        if (this.props.hasSearch) { heightDiff += 42; } // 32px + 10px margin bottom
        if (this.props.children) { heightDiff += 42; }
        return heightDiff;
    }

    private getBoxHeight = (availableHeight) => {
        const supportElementsHeight = this.getBoxSupportElementsHeight();
        const maxListHeight = availableHeight - supportElementsHeight;
        const numberOfItems = this.allItemIds.length;
        const itemsListHeight = numberOfItems * this.props.rowHeight;
        if (itemsListHeight < maxListHeight) {
            return itemsListHeight + supportElementsHeight;
        } else {
            return availableHeight;
        }
    }

    private onCalloutResize = () => {
        this._callout.UpdatePosition();
    }

    @autobind
    private onValuesSelected(filterId: string, filterSelection: IFilterSelection) {
        const isDefault = this.checkIfDefaultSelection(filterSelection.type, filterSelection.selectedIDs);
        this.setState({ ...this.state, isDefaultSelected: isDefault });
        this.props.onValuesSelected(filterId, filterSelection);
    }

    @autobind
    private onFilterReset() {
        this.setState(prevState => ({
            ...prevState,
            isDefaultSelected: true
        }));

        this.props.onValuesSelected(this.props.filterId, {
            type: this.props.defaultSelection,
            selectedIDs: []
        });
    }

    @autobind
    private onItemsSearch(query: string) {
        /*
         * no need to manually clear search because
         * on every callout close inner component
         * gets unmounted and its state reseted
        */
        if (this.props.clearSearchOnClose) {
            return;
        }
        this.setState({ ...this.state, query });
    }

    private _getAllItemIds = () => this.allItemIds;
    private _getLookups = () => this.lookups;

    public render() {
        const { isOpen, isDefaultSelected } = this.state;
        const hasItems = this.props.items != null && this.props.items.length !== 0;
        const treeFilterProps = {
            ...this.props,
            treeFilterFooter: this.props.children,
            title: undefined,
            allItemIdsGetter: this._getAllItemIds,
            lookupTableGetter: this._getLookups,
            onValuesSelected: this.onValuesSelected,
            onItemsSearch: this.onItemsSearch,
            searchQuery: this.state.query
        };

        const treeFilterClassName = classNames(
            'tree-filter-container',
            {
                'is-disabled': this.props.disabled
            }
        );

        return (
            <div className={treeFilterClassName} ref={this.setAnchorRef}>
                {
                    this.props.title &&
                    <span className={classNames({ 'item-selected': !isDefaultSelected })} >{this.props.title}: </span>
                }
                {
                    this.props.title && !isDefaultSelected &&
                    <Icon iconName="icon-delete" title="Reset selection" className="reset-filter-icon" onClick={this.onFilterReset} />
                }
                <div className="tree-filter-title" title={this.state.selectionText} onClick={this.toggleOpenState}>
                    <span>{this.state.selectionText}</span>
                    {
                        hasItems && isOpen &&
                        <Icon className="dropdown-icon" iconName={'icon-Arrow_up'} />
                    }
                    {
                        hasItems && !isOpen &&
                        <Icon className="dropdown-icon" iconName={'icon-arrow_down'} />
                    }
                </div>
                {
                    this.state.isOpen &&
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
                            minWidth={this.props.minWidth}
                            minHeight={this.props.minHeight}
                            maxWidth={this.props.maxWidth}
                            maxHeight={this.props.maxHeight}
                            onResize={this.onCalloutResize}
                            enable={this.props.enabledResizeHandles}
                        >
                            <div style={{ height: '100%', width: '100%' }}>
                                <VirtualizedTreeView
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
