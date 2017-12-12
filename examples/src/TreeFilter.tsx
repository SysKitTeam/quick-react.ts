/* tslint:disable:no-console */
import 'babel-polyfill';
import 'ts-helpers';

import { rebuildTree, updateTree, expandOrCollapseTreeItem } from '../../src/utilities/rebuildTree';
import * as React from 'react';
import * as ReactDOM from 'react-dom';
import { TreeFilter, IFilterSelection, FilterSelectionEnum, VirtualizedTreeView, TreeItem } from '../../src/components/TreeFilter';
import { createFlatList, createRandomizedData, getSelectedIds, createAsyncLoadRandomizedData } from '../MockData/treeFilterElements';
import { Button } from '../../src/components/Button/Button';
import { ILookupTable } from '../../src/components/TreeFilter/TreeItemOperators';

interface DemoState {
    filterStates: { [id: string]: IFilterSelection };
    asynclyLoadableItemIds: string[];
    asyncTreeData: TreeItem[];
}
const treeData = createRandomizedData(2000, 2);
const deeperTreeData = createRandomizedData(50, 4);
const flatList = createFlatList(4000);
const selected = getSelectedIds(4000);
const shortFlatList = createFlatList(6);
export class Index extends React.Component<any, DemoState> {
    constructor(props) {
        super(props);
        const asyncTreeData = createAsyncLoadRandomizedData(2000, 4);
        this.state = {
            filterStates: {},
            asynclyLoadableItemIds: asyncTreeData[1],
            asyncTreeData: asyncTreeData[0]
        };
    }

    onValuesSelected = (filterId: string, filterSelection) => {
        console.log(filterId, filterSelection);
        let newFilters = { ...this.state };
        newFilters.filterStates[filterId] = filterSelection;
        this.setState(newFilters);
    }

    onSave = (filterId: string, filterSelection) => {
        let newFilters = { ...this.state };
        newFilters.filterStates[filterId] = filterSelection;
        this.setState(newFilters);
        console.log('Save clicked!', newFilters);
    }


    onItemExpand = (treeItem: TreeItem, lookupTableGetter) => {

        const index = this.state.asynclyLoadableItemIds.indexOf(treeItem.id);
        const isAsyncLoadItem = index > -1;
        const isNowExpanded = !treeItem.expanded;

        let newAsynclyLoadableItems = [...this.state.asynclyLoadableItemIds];
        if (isAsyncLoadItem) {
            newAsynclyLoadableItems.splice(index, 1);
        }

        this.setState({
            ...this.state,
            asyncTreeData: expandOrCollapseTreeItem(this.state.asyncTreeData, treeItem, lookupTableGetter),
            asynclyLoadableItemIds: newAsynclyLoadableItems
        });

        if (!isAsyncLoadItem || !isNowExpanded) {
            return;
        }
        setTimeout(() => {
            const newTreeItem = {
                ...treeItem,
                expanded: !treeItem.expanded,
                children: [{
                    id: treeItem.id + '-' + '1',
                    value: 'asyncly loaded ' + (Math.random() * 100).toFixed(0),
                    expanded: false
                }, {
                    id: treeItem.id + '-' + '2',
                    value: 'asyncly loaded 2',
                    expanded: false
                }]
            };

            const newTreeData = updateTree(this.state.asyncTreeData, newTreeItem, lookupTableGetter);
            this.setState({
                ...this.state,
                asyncTreeData: newTreeData
            });
        }, 10);
    }

    public render() {

        return (
            <div style={{ paddingLeft: 300 }}>
                <TreeFilter
                    title="Tree Filter (max size)"
                    filterId={'f1'}
                    items={this.state.asyncTreeData}
                    onValuesSelected={this.onValuesSelected}
                    // tslint:disable-next-line:no-string-literal
                    filterSelection={this.state.filterStates['f1']}
                    defaultSelection={FilterSelectionEnum.All}
                    maxWidth={700}
                    maxHeight={500}
                    onItemExpand={this.onItemExpand}
                    // loadingItemIds={this.state.loadingItemIds}
                    onCalloutClose={() => console.log('closing...')}
                />
                <br /><br />

                <TreeFilter
                    title="Tree Filter - depth 4"
                    disabled={true}
                    filterId={'f2'}
                    items={deeperTreeData}
                    onValuesSelected={this.onValuesSelected}
                    // tslint:disable-next-line:no-string-literal
                    filterSelection={this.state.filterStates['f2']}
                    defaultSelection={FilterSelectionEnum.All}
                />
                <br /><br />

                <TreeFilter
                    title="Single Select"
                    filterId={'f3'}
                    items={treeData}
                    onValuesSelected={this.onValuesSelected}
                    isSingleSelect={true}
                    isGroupSelectableOnSingleSelect={true}
                    // tslint:disable-next-line:no-string-literal
                    filterSelection={this.state.filterStates['f3']}
                    defaultSelection={FilterSelectionEnum.All}
                    enabledResizeHandles={{
                        top: false,
                        right: false,
                        bottom: true,
                        left: true,
                        topRight: false,
                        bottomRight: false,
                        bottomLeft: true,
                        topLeft: false
                    }}
                />
                <br /><br />

                <TreeFilter
                    title="Flat list"
                    filterId={'f4'}
                    items={flatList}
                    onValuesSelected={this.onValuesSelected}
                    itemsAreFlatList={true}
                    // tslint:disable-next-line:no-string-literal
                    filterSelection={this.state.filterStates['f4']}
                />
                <br /><br />

                <TreeFilter
                    filterId={'f5'}
                    items={shortFlatList}
                    itemsAreFlatList={true}
                    defaultSelection={FilterSelectionEnum.All}
                    // tslint:disable-next-line:no-string-literal
                    filterSelection={this.state.filterStates['f5']}
                    showButtons={true}
                    onSave={this.onSave}
                />
                <br /><br />

                <TreeFilter
                    filterId={'f5'}
                    items={shortFlatList}
                    itemsAreFlatList={true}
                    defaultSelection={FilterSelectionEnum.All}
                    // tslint:disable-next-line:no-string-literal
                    filterSelection={this.state.filterStates['f5']}
                    hasTitleBorder={true}
                    showButtons={true}
                    onSave={this.onSave}
                />
            </div>
        );
    }
}
ReactDOM.render(<Index />, document.getElementById('root'));
