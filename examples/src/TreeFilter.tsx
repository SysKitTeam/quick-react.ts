import 'babel-polyfill';
import 'ts-helpers';

import * as React from 'react';
import * as ReactDOM from 'react-dom';
import { TreeFilter, IFilterSelection, FilterSelectionEnum, TreeFilterNew, TreeFilterCallout } from '../../src/components/TreeFilter';
import { createFlatList, createRandomizedData } from '../MockData/treeFilterElements';

interface DemoState {
    filterStates: { [id: string]: IFilterSelection };
}
const treeData = createRandomizedData(2000, 2);
const deeperTreeData = createRandomizedData(50, 4);
const flatList = createFlatList(4000);
const shortFlatList = createFlatList(6);
export class Index extends React.Component<any, DemoState> {
    constructor(props) {
        super(props);
        this.state = {
            filterStates: {}
        };
    }
    onValuesSelected = (filterId: string, filterSelection) => {
        // tslint:disable-next-line:no-console
        console.log(filterId, filterSelection);
        let newFilters = { ...this.state };
        newFilters.filterStates[filterId] = filterSelection;
        this.setState(newFilters);
    }
    public render() {

        return (
            <div style={{ paddingLeft: 300 }}>
                <TreeFilterCallout
                    title="Tree Filter (max size)"
                    filterId={'f1'}
                    items={treeData}
                    onValuesSelected={this.onValuesSelected}
                    // tslint:disable-next-line:no-string-literal
                    filterSelection={this.state.filterStates['f1']}
                    defaultSelection={FilterSelectionEnum.All}
                    maxWidth={700}
                    maxHeight={500}
                />
                <TreeFilter
                    title="Tree Filter (max size)"
                    filterId={'f10'}
                    items={treeData}
                    onValuesSelected={this.onValuesSelected}
                    // tslint:disable-next-line:no-string-literal
                    filterSelection={this.state.filterStates['f10']}
                    defaultSelection={FilterSelectionEnum.All}
                    maxWidth={700}
                    maxHeight={500}
                />
                <div className="container" style={{ width: '500px', height: '500px' }}>
                    <TreeFilterNew

                        filterId={'f8'}
                        items={treeData}
                        onValuesSelected={this.onValuesSelected}
                        // tslint:disable-next-line:no-string-literal
                        filterSelection={this.state.filterStates['f8']}
                        defaultSelection={FilterSelectionEnum.All}
                        onCustomSelection={(isDefault) => console.log('custom selection!', isDefault)}
                    />
                </div>

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
                {/* <TreeFilter
                    title="Tree Filter - depth 4"
                    filterId={'f2'}
                    items={deeperTreeData}
                    onValuesSelected={this.onValuesSelected}
                    // tslint:disable-next-line:no-string-literal
                    filterSelection={this.state.filterStates['f2']}
                    defaultSelection={FilterSelectionEnum.All}
                /> *}
                {*
                <TreeFilter
                    title="Flat list"
                    filterId={'f4'}
                    items={flatList}
                    onValuesSelected={this.onValuesSelected}
                    itemsAreFlatList={true}
                    // tslint:disable-next-line:no-string-literal
                    filterSelection={this.state.filterStates['f4']}
                />
                <TreeFilter
                    title="Flat list - few elements"
                    filterId={'f5'}
                    items={shortFlatList}
                    onValuesSelected={this.onValuesSelected}
                    itemsAreFlatList={true}
                    defaultSelection={FilterSelectionEnum.All}
                    // tslint:disable-next-line:no-string-literal
                    filterSelection={this.state.filterStates['f5']}
                /> */}
            </div>
        );
    }
}
ReactDOM.render(<Index />, document.getElementById('root'));
