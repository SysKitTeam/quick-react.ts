import * as React from 'react';
import { List, AutoSizer } from 'react-virtualized';
import Resizable from 'react-resizable-box';
import * as classNames from 'classnames';
import * as _ from 'lodash';

import { Callout } from '../Callout';
import { Search } from '../Search';
import { DirectionalHint } from '../../utilities/DirectionalHint';
import { Icon } from '../Icon';
import { ITreeFilterProps, ITreeFilterState, TreeItem, CheckStatus, FilterSelectionEnum, IFilterSelection, defaultTreeFilterProps } from './TreeFilter.Props';
import { TreeFilterCheckBox } from './TreeFilterCheckBox';
import { ItemOperator, LeafsAndBranches, TreeBranch, CheckResult, itemHasChildren } from './TreeItemOperators';

import './TreeFilterNew.scss';

export interface INewTreeFilterState {
    filteredItems: Array<TreeItem>;
    searchText: string;
    partiallyCheckedItemIds: Array<string>;
}

const ROW_HEIGHT = 20;

export interface INewTreeFilterProps {
    title?: string;
    hasSearch?: boolean;
    filterId: string;
    items: Array<TreeItem>;
    filterSelection?: IFilterSelection;
    isSingleSelect?: boolean;
    isGroupSelectableOnSingleSelect?: boolean;
    itemsAreFlatList?: boolean;
    onValuesSelected?: (filterId: string, filterSelection: IFilterSelection) => void;
    defaultSelection?: FilterSelectionEnum;
    rowHeight?: number;
    onCustomSelection?: (customSelection: boolean) => void;
    selectionText?: (selectionText: string) => void;
}

export const defaultNewTreeFilterProps: Partial<INewTreeFilterProps> = {
    filterId: 'treeFilter',
    hasSearch: true,
    isSingleSelect: false,
    itemsAreFlatList: false,
    isGroupSelectableOnSingleSelect: false,
    onValuesSelected: () => { },
    filterSelection: { type: FilterSelectionEnum.None, selectedIDs: [] },
    defaultSelection: FilterSelectionEnum.None,
    rowHeight: 20,
    selectionText: () => { }
};

export interface INewTreeFilterState {
    filteredItems: Array<TreeItem>;
    searchText: string;
    partiallyCheckedItemIds: Array<string>;   // items with selected children - different name?
}

export class TreeFilterNew extends React.PureComponent<INewTreeFilterProps, INewTreeFilterState> {
    private _list: any;
    private parentLookup: Readonly<{ [id: string]: TreeItem }>;
    private itemLookup: Readonly<{ [id: string]: TreeItem }>;
    private allItemIds: ReadonlyArray<string>;

    public static defaultProps = defaultNewTreeFilterProps;

    constructor(props: INewTreeFilterProps) {
        super(props);

        this.state = {
            partiallyCheckedItemIds: [],
            searchText: '',
            filteredItems: ItemOperator.filterItems(props.items, '')
        };

        let lookups = ItemOperator.getLookupTableAndParentLookup(props.items);
        this.parentLookup = lookups.parentLookup;
        this.itemLookup = lookups.itemLookup;
        this.allItemIds = ItemOperator.getAllItemIds(props.items);
        this.searchItems = _.debounce(this.searchItems, 100);
    }

    private updateFilterItems(items: Array<TreeItem>) {
        this.setState(prevState => ({
            ...prevState,
            filteredItems: items
        }));
    }

    public componentWillReceiveProps(nextProps: INewTreeFilterProps) {
        if (nextProps.items === this.props.items) {
            return;
        }

        const filteredItems = ItemOperator.filterItems(nextProps.items, this.state.searchText);
        let lookups = ItemOperator.getLookupTableAndParentLookup(nextProps.items);
        this.parentLookup = lookups.parentLookup;
        this.itemLookup = lookups.itemLookup;
        this.allItemIds = ItemOperator.getAllItemIds(nextProps.items);
        this.setState(prevState => ({ ...prevState, filteredItems: filteredItems }));
    }

    public componentDidUpdate(prevProps: ITreeFilterProps, prevState: INewTreeFilterState) {
        if (this.state.filteredItems !== prevState.filteredItems) {
            if (this._list != null) {
                this._list.recomputeRowHeights();
            }
        } else if (this.props.filterSelection.selectedIDs !== prevProps.filterSelection.selectedIDs) {
            if (this._list != null) {
                this._list.forceUpdateGrid();
            }
        }
    }

    public componentWillMount() {
        const { title, hasSearch, isSingleSelect, defaultSelection } = this.props;

        const allSelected = this.getAllSelectedCheckMark();
        const filterSelection = this.props.filterSelection;
        const checkedItemIds = filterSelection.type === FilterSelectionEnum.All ? this.allItemIds : filterSelection.selectedIDs;

        const numberOfSelectedItems = checkedItemIds.length;

        const isDefaultSelected =
            (defaultSelection === FilterSelectionEnum.None && numberOfSelectedItems === 0) ||
            (defaultSelection === FilterSelectionEnum.All && numberOfSelectedItems === this.allItemIds.length);

        if (this.props.onCustomSelection) {
            this.props.onCustomSelection(isDefaultSelected);
        }
    }

    public render() {
        const { title, hasSearch, isSingleSelect, defaultSelection } = this.props;

        const allSelected = this.getAllSelectedCheckMark();
        const filterSelection = this.props.filterSelection;
        const checkedItemIds = filterSelection.type === FilterSelectionEnum.All ? this.allItemIds : filterSelection.selectedIDs;
        const numberOfSelectedItems = checkedItemIds.length;

        return (
            <div className="tree-filter-container" style={{ height: '100%', width: '100%' }}>
                {
                    title && <label className="tree-filter-title">{title}</label>
                }
                {
                    hasSearch && <Search labelText={this.state.searchText} onChange={this.searchItems} className="filter-search" />
                }
                {
                    !isSingleSelect &&
                    <TreeFilterCheckBox
                        text="Select All"
                        itemId="ALL"
                        checked={allSelected}
                        onChange={this.onSelectAllChange}
                    />
                }
                <AutoSizer disableHeight>
                    {({ width, height }) => (
                        <List
                            height={this.getListHeight(height)}
                            width={width}
                            overscanRowCount={10}
                            ref={this.setListReference}
                            rowHeight={this.rowHeight}
                            rowRenderer={this.rowRenderer}
                            rowCount={this.state.filteredItems.length}
                        />
                    )}
                </AutoSizer>
                {
                    !isSingleSelect &&
                    <label className="tree-filter-footer-count">
                        Selected: {numberOfSelectedItems}/{this.allItemIds.length}
                    </label>
                }
            </div>
        );
    }

    private getSelectedText = () => {
        if (this.props.filterSelection.type === FilterSelectionEnum.All) {
            return '[All]';
        }
        const checkedItemIds = this.props.filterSelection.selectedIDs;

        if (checkedItemIds.length === 0) {
            return 'Please select...';
        } else if (checkedItemIds.length === 1) {
            const itemId = checkedItemIds[0];
            return this.itemLookup[itemId].value;  // ItemOperator.findItemInTree(this.props.items, itemId).value;
        } else {
            const someIds = checkedItemIds.slice(0, 3);
            const names = someIds.map((itemID) => { return this.itemLookup[itemID].value; }); //  ItemOperator.findItemInTree(this.props.items, itemID).value; });
            return names.join(', ') + '...';
        }
    }

    private rowRenderer = ({ index, key, parent, style }) => {
        return (
            <div key={key} style={style}>
                {this.renderItem(this.state.filteredItems[index], index)}
            </div>
        );
    }

    private renderItem(treeItem: TreeItem, itemKey) {
        const onExpandClick = (event) => {
            event.stopPropagation();
            treeItem.expanded = !treeItem.expanded;
            this._list.recomputeRowHeights();
        };

        const filterSelection = this.props.filterSelection;
        const checkedItemIds = filterSelection.type === FilterSelectionEnum.All ? this.allItemIds : filterSelection.selectedIDs;
        const itemChecked = this.isItemInList(checkedItemIds, treeItem);
        const itemCheckedOrAllFilteredChecked = itemChecked || (this.state.searchText !== '' && this.allFilteredChildrenChecked(treeItem, checkedItemIds));

        const onItemCheckedChange = () => {
            const newCheckedAndPartial = this.getNewCheckedItems(treeItem, checkedItemIds, itemCheckedOrAllFilteredChecked);
            this.setNewSelectedState(false, newCheckedAndPartial.checked, newCheckedAndPartial.partially);
            this.props.selectionText(this.getSelectedText());
        };

        const onSingleSelectItemClick = () => {
            if (this.props.isGroupSelectableOnSingleSelect === false && itemHasChildren(treeItem)) {
                return;
            }
            this.props.onValuesSelected(this.props.filterId, { type: FilterSelectionEnum.Selected, selectedIDs: [treeItem.id] });
        };

        // tslint:disable-next-line:variable-name
        const ItemCheckboxElement = () => {
            if (this.props.isSingleSelect) {
                return (
                    <span className="tree-single-select-item" onClick={onSingleSelectItemClick} >{treeItem.value}</span>
                );
            } else {
                let checked = itemChecked ? CheckStatus.Checked : CheckStatus.NotChecked;
                if (this.isItemInList(this.state.partiallyCheckedItemIds, treeItem)) {
                    checked = CheckStatus.ChildChecked;
                }
                return (
                    <TreeFilterCheckBox
                        itemId={treeItem.id}
                        text={treeItem.value}
                        checked={checked}
                        onChange={onItemCheckedChange}
                    />
                );
            }
        };

        if (treeItem.expanded) {
            return (
                <div key={itemKey} >
                    <div className="item-container expandible-item" style={{ height: this.props.rowHeight }} >
                        <Icon className="tree-expand-icon" iconName={'icon-arrow_down_right'} onClick={onExpandClick} />
                        <ItemCheckboxElement />
                    </div>
                    {itemHasChildren(treeItem) &&
                        <ul>
                            <li>
                                {
                                    treeItem.children.map((child, index) => {
                                        return this.renderItem(child, itemKey + '-' + index);
                                    })
                                }
                            </li>
                        </ul>
                    }
                </div>
            );
        } else if (itemHasChildren(treeItem)) { // expandable
            return (
                <div className="item-container expandible-item" key={itemKey} style={{ height: this.props.rowHeight }} >
                    <Icon className="tree-expand-icon" iconName={'icon-arrow_right'} onClick={onExpandClick} />
                    <ItemCheckboxElement />
                </div>
            );
        } else { // leaf
            const marginLeft = this.props.itemsAreFlatList ? 0 : 21;
            return (
                <div className="item-container" key={itemKey} style={{ height: this.props.rowHeight, marginLeft: marginLeft }}>
                    <ItemCheckboxElement />
                </div>
            );
        }
    }

    private isItemInList(list, treeItem: TreeItem): boolean {
        return list.indexOf(treeItem.id) !== -1;
    }

    private rowHeight = ({ index }) => {
        return this.getExpandedItemCount(this.state.filteredItems[index]) * this.props.rowHeight;
    }

    private getExpandedItemCount = (item) => {
        let count = 1;
        if (item.expanded) {
            count += item.children
                .map(this.getExpandedItemCount)
                .reduce(function (total, currentCount) { return total + currentCount; }, 0);
        }
        return count;
    }

    private setListReference = (ref) => {
        this._list = ref;
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

    private onSelectAllChange = () => {
        const checkedItemIds = this.props.filterSelection.selectedIDs;
        const allSelected = this.props.filterSelection.type === FilterSelectionEnum.All;
        if (this.props.itemsAreFlatList) {
            if (allSelected || this.allFilteredChecked()) {
                let newCheckedItems = _.without<any>(checkedItemIds, ...(this.state.filteredItems.map(item => item.id)));
                this.setNewSelectedState(false, newCheckedItems, []);
            } else {
                let newCheckedItems = checkedItemIds.slice(0).concat(this.state.filteredItems.map(item => item.id));
                newCheckedItems = _.uniq(newCheckedItems);
                this.setNewSelectedState(false, newCheckedItems, []);
            }
        } else { // tree structure
            if (this.state.searchText === '') {
                if (allSelected) {
                    this.setNewSelectedState(false, [], []);
                } else {
                    this.setNewSelectedState(true, [], []);
                }
            } else { // filtered
                const filteredItems = this.state.filteredItems;
                const allFilteredChecked =
                    _.every(filteredItems,
                        (filteredItem) =>
                            this.isItemInList(checkedItemIds, filteredItem) ||
                            this.isItemInList(this.state.partiallyCheckedItemIds, filteredItem));

                let itemsToChange = [];
                let branchesToCheck = [];
                for (let item of filteredItems) {
                    const leafsAndBranches = ItemOperator.getAllLeafsAndBranches(item, this.itemLookup[item.id]);
                    itemsToChange = itemsToChange.concat(leafsAndBranches.Leafs);
                    branchesToCheck = branchesToCheck.concat(leafsAndBranches.Branches);
                }

                let newCheckedItems: Array<string> = [];
                if (allFilteredChecked) {
                    newCheckedItems = _.without<any>(checkedItemIds, ...itemsToChange);
                } else {
                    newCheckedItems = checkedItemIds.slice(0).concat(itemsToChange);
                    newCheckedItems = _.uniq(newCheckedItems);
                }
                const newCheckedAndPartial = this.checkBranches(branchesToCheck, newCheckedItems, this.state.partiallyCheckedItemIds);
                this.setNewSelectedState(false, newCheckedAndPartial.checked, newCheckedAndPartial.partially);
            }
        }

        console.log('selected text: ', this.getSelectedText());

        this.props.selectionText(this.getSelectedText());
    }

    private onFilterReset = () => {
        const selectAllDefault = this.props.defaultSelection === FilterSelectionEnum.All;
        this.setNewSelectedState(selectAllDefault, [], []);
        this.searchItems('');
    }

    private allFilteredChecked = () => {
        return _.every(this.state.filteredItems, (item) => this.isItemInList(this.props.filterSelection.selectedIDs, item));
    }

    private areAllItemsSelected = (checkedItemIds): CheckStatus => {
        if (_.every(this.props.items, (item) => this.isItemInList(checkedItemIds, item))) {
            return CheckStatus.Checked;
        }
        if (checkedItemIds.length > 0) {
            return CheckStatus.ChildChecked;
        }
        return CheckStatus.NotChecked;
    }

    private getNewCheckedItems(changedTreeItem: TreeItem, checkedItemIds, wasChecked): CheckResult {
        let itemsToChange = [];
        let branchesToCheck = [];
        if (this.state.searchText === '') {
            itemsToChange = ItemOperator.getAllChildrenIds(changedTreeItem);
            if (itemHasChildren(changedTreeItem)) {
                branchesToCheck.push({ id: changedTreeItem.id, depth: 0 });
            } else {
                itemsToChange.push(changedTreeItem.id);
                const parent = this.parentLookup[changedTreeItem.id];
                if (parent !== undefined) {
                    branchesToCheck.push({ id: parent.id, depth: 0 });
                }
            }
        } else {
            let leafsAndBranches = ItemOperator.getAllLeafsAndBranches(changedTreeItem, this.itemLookup[changedTreeItem.id]);
            itemsToChange = leafsAndBranches.Leafs;
            branchesToCheck = leafsAndBranches.Branches;
            const parent = this.parentLookup[changedTreeItem.id];
            if (branchesToCheck.length === 0 && parent !== undefined) {
                branchesToCheck.push({ id: parent.id, depth: 0 });
            }
        }

        let newCheckedItems: Array<string> = [];
        if (wasChecked) {
            newCheckedItems = _.without<any>(checkedItemIds, ...itemsToChange);
        } else {
            newCheckedItems = checkedItemIds.slice(0).concat(itemsToChange);
            newCheckedItems = _.uniq(newCheckedItems);
        }
        const branchCheckRes = this.checkBranches(branchesToCheck, newCheckedItems, this.state.partiallyCheckedItemIds);
        return branchCheckRes;
    }

    private checkBranches(branches: Array<TreeBranch>, checked: Array<string>, partiallyChecked: Array<string>): CheckResult {
        let newChecked = [...checked];
        let newPartiallyChecked = [...partiallyChecked];

        while (branches.length > 0) {
            const checkItem = this.popMaxDepthBranch(branches);
            let item = this.itemLookup[checkItem.id];
            let isChecked = true;
            let isPartiallyChecked = false;
            for (let child of item.children) {
                let childChecked = this.isItemInList(newChecked, child);
                let childPartial = isPartiallyChecked || this.isItemInList(newPartiallyChecked, child);
                if (!childChecked) {
                    isChecked = false;
                }
                if (childChecked || childPartial) {
                    isPartiallyChecked = true;
                }
                if (!isChecked && isPartiallyChecked) { // no need to check others
                    break;
                }
            }
            isPartiallyChecked = !isChecked && isPartiallyChecked; // item cannot be checked and partial

            // Add/Remove from lists
            this.modifyListForItem(newChecked, item.id, isChecked);
            this.modifyListForItem(newPartiallyChecked, item.id, isPartiallyChecked);

            const parent = this.parentLookup[checkItem.id];
            if (parent !== undefined) {
                branches.push({ id: parent.id, depth: 0 });
            }
        }
        return { checked: newChecked, partially: newPartiallyChecked };
    }

    private modifyListForItem(list: Array<string>, itemId: string, addItem: boolean) {
        const itemIndex = list.indexOf(itemId);
        if (addItem && itemIndex === -1) {
            list.push(itemId);
        } else if (!addItem && itemIndex !== -1) {
            list.splice(itemIndex, 1);
        }
    }

    private popMaxDepthBranch(branches: Array<TreeBranch>) {
        let maxDepth = -1;
        let maxItemIndex = -1;
        for (let index = 0; index < branches.length; index++) {
            let element = branches[index];
            if (element.depth > maxDepth) {
                maxDepth = element.depth;
                maxItemIndex = index;
            }
        }
        let maxBranch = branches.splice(maxItemIndex, 1)[0];
        return maxBranch;
    }

    private setNewSelectedState(allChecked: boolean, newChecked, newPartiallyChecked) {
        const allSelected = allChecked || this.areAllItemsSelected(newChecked) === CheckStatus.Checked;
        if (allSelected) {
            this.props.onValuesSelected(this.props.filterId, { type: FilterSelectionEnum.All, selectedIDs: [] });
        } else if (newChecked.length > 0) {
            this.props.onValuesSelected(this.props.filterId, { type: FilterSelectionEnum.Selected, selectedIDs: newChecked });
        } else {
            this.props.onValuesSelected(this.props.filterId, { type: FilterSelectionEnum.None, selectedIDs: [] });
        }
        this.setState(prevState => ({ ...prevState, partiallyCheckedItemIds: newPartiallyChecked }));
    }

    private getBoxSupportElementsHeight = () => {
        let heightDiff = 5; // 5px: paddings
        if (!this.props.isSingleSelect) { heightDiff += 44; } // 25px: SelectAll +  19px: Footer
        if (this.props.hasSearch) { heightDiff += 30; }
        return heightDiff;
    }

    private getListHeight = (totalHeight) => {
        return totalHeight - this.getBoxSupportElementsHeight();
    }

    private allFilteredChildrenChecked = (treeItem: TreeItem, checkedItemIds) => {
        if (this.props.itemsAreFlatList) { return false; }
        return itemHasChildren(treeItem) &&
            _.every(treeItem.children,
                (child) => this.isItemInList(checkedItemIds, child) || this.isItemInList(this.state.partiallyCheckedItemIds, child));
    }

    private getAllSelectedCheckMark = () => {
        let allSelected = CheckStatus.NotChecked;
        if (this.props.filterSelection.type === FilterSelectionEnum.All) {
            allSelected = CheckStatus.Checked;
        } else if (this.props.filterSelection.type === FilterSelectionEnum.Selected) {
            allSelected = CheckStatus.ChildChecked;
        }
        return allSelected;
    }
}
