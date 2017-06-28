import * as React from 'react';
import { List, AutoSizer } from 'react-virtualized';
import { Resizable, ResizableBox } from 'react-resizable';
import * as classNames from 'classnames';
import * as _ from 'lodash';

import { Callout } from '../Callout';
import { Icon } from '../Icon';
import { ITreeFilterProps, ITreeFilterState, TreeItem, CheckStatus, FilterSelectionEnum, IFilterSelection } from './TreeFilter.Props';
import { TreeFilterCheckBox } from './TreeFilterCheckBox';
import { ItemOperator } from './TreeItemOperators';

import './TreeFilter.scss';

const ROW_HEIGHT = 20;
export class TreeFilter extends React.PureComponent<ITreeFilterProps, ITreeFilterState> {
    private _list: any;
    private _anchor: any;
    private parentItems: Readonly<{ [id: string]: TreeItem }>;
    private allItemIds: ReadonlyArray<string>;

    static defaultProps: Partial<ITreeFilterProps> = {
        title: 'Title',
        filterId: 'treeFilter',
        hasSearch: true,
        isSingleSelect: false,
        itemsAreFlatList: false,
        isGroupSelectableOnSingleSelect: false,
        onValuesSelected: () => { },
        filterSelection: { type: FilterSelectionEnum.None, selectedIDs: [] },
        width: 300,
        height: 500,
        minWidth: 200,
        minHeight: 300
    };

    constructor(props: ITreeFilterProps) {
        super(props);
        this.state = {
            isOpen: false,
            partiallyCheckedItemIds: [],
            searchText: '',
            filteredItems: ItemOperator.filterItems(props.items, '')
        };
        this.parentItems = ItemOperator.getParentStructure(props.items);
        this.allItemIds = ItemOperator.getAllItemIds(props.items);
        this.searchItems = _.debounce(this.searchItems, 100);

    }
    componentWillReceiveProps(nextProps: ITreeFilterProps) {
        if (nextProps.items !== this.props.items) {
            const filteredItems = ItemOperator.filterItems(nextProps.items, this.state.searchText);
            this.parentItems = ItemOperator.getParentStructure(nextProps.items);
            this.allItemIds = ItemOperator.getAllItemIds(nextProps.items);
            this.setState(prevState => ({ ...prevState, filteredItems: filteredItems }));
        }
    }

    componentDidUpdate(prevProps: ITreeFilterProps, prevState: ITreeFilterState) {
        if (this.state.filteredItems !== prevState.filteredItems) {
            this._list.recomputeRowHeights();
        } else if (this.props.filterSelection.selectedIDs !== prevProps.filterSelection.selectedIDs) {
            if (this._list !== undefined) {
                this._list.forceUpdateGrid();
            }
        }
    }

    isItemChecked(checkedItemIds, treeItem: TreeItem) {
        return checkedItemIds.indexOf(treeItem.id) !== -1;
    }

    checkParentIfAllSiblingsChecked(treeItem: TreeItem, checkedItemIds) {
        const parent = this.parentItems[treeItem.id];
        if (parent == null) { return checkedItemIds; } // root reached
        const allSiblingsChecked = _.every(parent.children, (child) => (this.isItemChecked(checkedItemIds, child)));
        if (allSiblingsChecked) {
            let newChecked = checkedItemIds.concat(parent.id);
            return this.checkParentIfAllSiblingsChecked(parent, newChecked);
        }
        return checkedItemIds;
    }

    unCheckParents(treeItem: TreeItem, checkedItemIds) {
        const parent = this.parentItems[treeItem.id];
        if (parent == null) { return checkedItemIds; } // root reached
        const checkedIndex = checkedItemIds.indexOf(parent.id);
        if (checkedIndex !== -1) {
            let newChecked = checkedItemIds.slice(0);
            newChecked.splice(checkedIndex, 1);
            return this.unCheckParents(parent, newChecked);
        }
        return checkedItemIds;
    }

    areAllChildrenChecked(treeItem: TreeItem, checkedItemIds) {
        const parent = this.parentItems[treeItem.id];
        let itemInOriginalTree = undefined;
        if (parent == null) {
            itemInOriginalTree = _.find(this.props.items, item => (item.id === treeItem.id));
        } else {
            itemInOriginalTree = _.find(parent.children, item => (item.id === treeItem.id));
        }
        const allChildrenChecked = _.every(itemInOriginalTree.children, (child: TreeItem) => this.isItemChecked(checkedItemIds, child));
        return allChildrenChecked;
    }

    rowHeight = ({ index }) => {
        return this.getExpandedItemCount(this.state.filteredItems[index]) * ROW_HEIGHT;
    }

    getExpandedItemCount = (item) => {
        let count = 1;
        if (item.expanded) {
            count += item.children
                .map(this.getExpandedItemCount)
                .reduce(function(total, currentCount) { return total + currentCount; }, 0);
        }
        return count;
    }

    setListReference = (ref) => { this._list = ref; };
    setAnchorRef = (ref) => { this._anchor = ref; };

    onSearchTextChange = (event) => {
        const textFilter = event.target.value;
        const filteredItems = this.searchItems(textFilter);
    }
    searchItems(searchText?: string) {
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
    }
    onDismiss = () => {
        this.setState(prevState => ({ ...prevState, isOpen: false }));
    }
    getSelectedText = () => {
        if (this.props.filterSelection.type === FilterSelectionEnum.All) {
            return '[All]';
        }
        const checkedItemIds = this.props.filterSelection.selectedIDs;

        if (checkedItemIds.length === 0) {
            return 'Please select...';
        } else if (checkedItemIds.length === 1) {
            const itemId = checkedItemIds[0];
            return ItemOperator.findItemInTree(this.props.items, itemId).value;
        } else {
            const someIds = checkedItemIds.slice(0, 3);
            const names = someIds.map((itemID) => { return ItemOperator.findItemInTree(this.props.items, itemID).value; });
            return names.join(', ') + '...';
        }
    }

    onSelectAllChange = () => {
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
        } else {
            if (allSelected) {
                this.setNewSelectedState(false, [], []);
            } else {
                this.setNewSelectedState(true, [], []);
            }
        }
    }

    allFilteredChecked = () => {
        return _.every(this.state.filteredItems, (item) => this.isItemChecked(this.props.filterSelection.selectedIDs, item));
    }

    areAllItemsSelected = (checkedItemIds): CheckStatus => {
        if (_.every(this.props.items, (item) => this.isItemChecked(checkedItemIds, item))) {
            return CheckStatus.Checked;
        }
        if (checkedItemIds.length > 0) {
            return CheckStatus.ChildChecked;
        }
        return CheckStatus.NotChecked;
    }

    getNewCheckedItems(changedTreeItem, checkedItemIds, wasChecked) {
        const children = ItemOperator.getAllChildrenIds(changedTreeItem);
        let newCheckedItems: Array<string> = [];
        if (wasChecked) {
            newCheckedItems = _.without<any>(checkedItemIds, ...children, changedTreeItem.id);
            newCheckedItems = this.unCheckParents(changedTreeItem, newCheckedItems);
        } else {
            newCheckedItems = checkedItemIds.slice(0).concat(children);
            if (this.areAllChildrenChecked(changedTreeItem, newCheckedItems)) {
                newCheckedItems.push(changedTreeItem.id);
            }
            newCheckedItems = this.checkParentIfAllSiblingsChecked(changedTreeItem, newCheckedItems);
            newCheckedItems = _.uniq(newCheckedItems);
        }
        return newCheckedItems;
    }

    getNewPartiallyChecked(changedTreeItem: TreeItem, checkedItemIds, wasChecked) {
        const children = ItemOperator.getAllChildrenIds(changedTreeItem);
        let newPartiallyCheckedItems = _.without<any>(this.state.partiallyCheckedItemIds, ...children, changedTreeItem.id);
        return this.checkParentPartiallyChecked(newPartiallyCheckedItems, changedTreeItem, checkedItemIds, wasChecked);
    }

    checkParentPartiallyChecked(partiallyCheckedItemIds, changedTreeItem: TreeItem, checkedItemIds, wasChecked) {
        const parent = this.parentItems[changedTreeItem.id];
        if (parent == null) { return partiallyCheckedItemIds; } // root reached

        if (wasChecked) {
            const someSiblingChecked = _.some(parent.children, (child) => this.isItemChecked(checkedItemIds, child));
            const someSiblingPartiallyChecked = _.some(parent.children, (child) => this.isItemChecked(partiallyCheckedItemIds, child));
            if (someSiblingChecked || someSiblingPartiallyChecked) {
                if (this.isItemChecked(checkedItemIds, parent)) {
                    return partiallyCheckedItemIds;
                } else {
                    return partiallyCheckedItemIds.concat([parent.id]);
                }
            }
            let newPartiallyChecked = partiallyCheckedItemIds.filter((itemId) => itemId !== parent.id);
            return this.checkParentPartiallyChecked(newPartiallyChecked, parent, checkedItemIds, wasChecked);
        } else {
            if (this.isItemChecked(checkedItemIds, parent)) {
                return partiallyCheckedItemIds.filter((itemId) => itemId !== parent.id);
            }
            if (this.isItemChecked(partiallyCheckedItemIds, parent)) {
                return partiallyCheckedItemIds;
            }
            let newPartiallyChecked = partiallyCheckedItemIds.concat([parent.id]);
            return this.checkParentPartiallyChecked(newPartiallyChecked, parent, checkedItemIds, wasChecked);
        }
    }

    setNewSelectedState(allChecked: boolean, newChecked, newPartiallyChecked) {
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

    getListHeight = (height) => {
        let heightDiff = 5;
        if (!this.props.isSingleSelect) { heightDiff += 25; }
        if (this.props.hasSearch) { heightDiff += 25; }
        return height - heightDiff;
    }

    renderItem(treeItem: TreeItem, itemKey) {
        const onExpandClick = (event) => {
            event.stopPropagation();
            treeItem.expanded = !treeItem.expanded;
            this._list.recomputeRowHeights();
        };

        const filterSelection = this.props.filterSelection;
        const checkedItemIds = filterSelection.type === FilterSelectionEnum.All ? this.allItemIds : filterSelection.selectedIDs;
        const itemChecked = this.isItemChecked(checkedItemIds, treeItem);
        const allFilteredChildrenChecked =
            treeItem.children != null &&
            treeItem.children.length > 0 &&
            _.every(treeItem.children, (child) => this.isItemChecked(checkedItemIds, child));

        const onItemCheckedChange = () => {
            const newChecked = this.getNewCheckedItems(treeItem, checkedItemIds, itemChecked || allFilteredChildrenChecked);
            const partiallyCheckedItemIds = this.getNewPartiallyChecked(treeItem, newChecked, itemChecked);
            this.setNewSelectedState(false, newChecked, partiallyCheckedItemIds);
        };

        const onSingleSelectItemClick = () => {
            if (this.props.isGroupSelectableOnSingleSelect === false && treeItem.children != null && treeItem.children.length > 0) {
                return;
            }
            this.props.onValuesSelected(this.props.filterId, { type: FilterSelectionEnum.Selected, selectedIDs: [treeItem.id] });
            this.setState(prevState => ({ ...prevState, isOpen: false }));
        };

        // tslint:disable-next-line:variable-name
        const ItemCheckboxElement = () => {
            if (this.props.isSingleSelect) {
                return (
                    <span className="tree-single-select-item" onClick={onSingleSelectItemClick} >{treeItem.value}</span>
                );
            } else {
                let checked = itemChecked ? CheckStatus.Checked : CheckStatus.NotChecked;
                if (this.isItemChecked(this.state.partiallyCheckedItemIds, treeItem)) {
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
                    <div style={{ height: ROW_HEIGHT }} >
                        <Icon className="tree-expand-icon" iconName={'icon-arrow_down_right'} onClick={onExpandClick} />
                        <ItemCheckboxElement />
                    </div>
                    {treeItem.children != null && treeItem.children.length &&
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
        } else if (treeItem.children != null && treeItem.children.length) { // expandable
            return (
                <div key={itemKey} style={{ height: ROW_HEIGHT }} >
                    <Icon className="tree-expand-icon" iconName={'icon-arrow_right'} onClick={onExpandClick} />
                    <ItemCheckboxElement />
                </div>
            );
        } else { // leaf
            return (
                <div key={itemKey} style={{ height: ROW_HEIGHT }}>
                    {!this.props.itemsAreFlatList &&
                        <div style={{ width: 21, display: 'inline-block' }} />
                    }
                    <ItemCheckboxElement />
                </div>
            );
        }
    }

    rowRenderer = ({ index, key, parent, style }) => {
        return (
            <div key={key} style={style}>
                {this.renderItem(this.state.filteredItems[index], index)}
            </div>
        );
    }

    getAllSelectedCheckMark = () => {
        let allSelected = CheckStatus.NotChecked;
        if (this.props.filterSelection.type === FilterSelectionEnum.All) {
            allSelected = CheckStatus.Checked;
        } else if (this.props.filterSelection.type === FilterSelectionEnum.Selected) {
            allSelected = CheckStatus.ChildChecked;
        }
        return allSelected;
    }

    render() {
        const { title, hasSearch, isSingleSelect, minWidth, minHeight } = this.props;
        const minResizableBoxSize = [minWidth, minHeight];
        const allSelected = this.getAllSelectedCheckMark();
        return (
            <div>
                <div style={{ height: 50 }} ref={this.setAnchorRef}>
                    <span>{title}: </span>
                    <div className="tree-filter-container" onClick={this.toggleOpenState}>
                        <span>{this.getSelectedText()}</span>
                    </div>
                </div>
                {this.state.isOpen &&
                    <Callout
                        isBeakVisible={false}
                        className="dropdown-callout"
                        gapSpace={0}
                        doNotLayer={false}
                        directionalHint={4}
                        targetElement={this._anchor}
                        onDismiss={this.onDismiss}
                    >
                        <ResizableBox width={this.props.width} height={this.props.height} minConstraints={minResizableBoxSize} >
                            <div style={{ height: '100%', width: '100%' }}>
                                <AutoSizer>
                                    {({ width, height }) => (
                                        <div>
                                            {hasSearch &&
                                                <div style={{ width: width, height: 25 }}>
                                                    <input
                                                        className="tree-filter-input"
                                                        onChange={this.onSearchTextChange}
                                                        value={this.state.searchText}
                                                    />
                                                </div>
                                            }
                                            {!isSingleSelect &&
                                                <div style={{ width, height: 25 }}>
                                                    {(this.props.itemsAreFlatList || this.state.searchText === '') && // filtered select all works only on flat list
                                                        <TreeFilterCheckBox
                                                            text="Select All"
                                                            itemId="ALL"
                                                            checked={allSelected}
                                                            onChange={this.onSelectAllChange}
                                                        />
                                                    }
                                                </div>
                                            }
                                            <List
                                                height={this.getListHeight(height)}
                                                width={width}
                                                overscanRowCount={10}
                                                ref={this.setListReference}
                                                rowHeight={this.rowHeight}
                                                rowRenderer={this.rowRenderer}
                                                rowCount={this.state.filteredItems.length}
                                            />
                                        </div>
                                    )}
                                </AutoSizer>
                            </div>
                        </ResizableBox>
                    </Callout>
                }
            </div>
        );
    }
}
