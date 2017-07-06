import 'babel-polyfill';
import 'ts-helpers';

import * as React from 'react';
import * as ReactDOM from 'react-dom';
import { TreeFilter, IFilterSelection, FilterSelectionEnum } from '../../src/components/TreeFilter';
import { createFlatList, createRandomizedData } from '../MockData/treeFilterElements';

interface DemoState {
    filterStates: { [id: string]: IFilterSelection };
}
const treeData = createRandomizedData(2000);
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
            <div style={{paddingLeft: 300}}>
                <TreeFilter
                    title="Some Tree Filter"
                    filterId={'filID'}
                    items={treeData}
                    onValuesSelected={this.onValuesSelected}
                    // tslint:disable-next-line:no-string-literal
                    filterSelection={this.state.filterStates['filID']}
                    defaultSelection={FilterSelectionEnum.All}
                />
                <TreeFilter
                    title="Single Select"
                    filterId={'filID3'}
                    items={treeData}
                    onValuesSelected={this.onValuesSelected}
                    isSingleSelect={true}
                    isGroupSelectableOnSingleSelect={true}
                      // tslint:disable-next-line:no-string-literal
                    filterSelection={this.state.filterStates['filID3']}
                    defaultSelection={FilterSelectionEnum.All}
                />
                <TreeFilter
                    title="Flat list"
                    filterId={'fil2'}
                    items={flatList}
                    onValuesSelected={this.onValuesSelected}
                    itemsAreFlatList={true}
                      // tslint:disable-next-line:no-string-literal
                    filterSelection={this.state.filterStates['fil2']}
                />
                 <TreeFilter
                    title="Flat list - few elements"
                    filterId={'fil4'}
                    items={shortFlatList}
                    onValuesSelected={this.onValuesSelected}
                    itemsAreFlatList={true}
                    defaultSelection={FilterSelectionEnum.All}
                      // tslint:disable-next-line:no-string-literal
                    filterSelection={this.state.filterStates['fil4']}
                />
            </div>
        );
    }
}
ReactDOM.render(<Index />, document.getElementById('root'));
