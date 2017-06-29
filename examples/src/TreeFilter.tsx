import 'babel-polyfill';
import 'ts-helpers';

import * as React from 'react';
import * as ReactDOM from 'react-dom';
import { TreeFilter, IFilterSelection } from '../../src/components/TreeFilter';
import { treeData, flatData } from '../MockData/treeFilterElements';

interface DemoState {
    filterStates: { [id: string]: IFilterSelection } ;
}

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
            <div>
                <TreeFilter
                    title="Some Tree Filter"
                    filterId={'filID'}
                    items={treeData}
                    onValuesSelected={this.onValuesSelected}
                    // tslint:disable-next-line:no-string-literal
                    filterSelection={this.state.filterStates['filID']}
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
                />
                <TreeFilter
                    title="Flat list"
                    filterId={'fil2'}
                    items={flatData}
                    onValuesSelected={this.onValuesSelected}
                    itemsAreFlatList={true}
                      // tslint:disable-next-line:no-string-literal
                    filterSelection={this.state.filterStates['fil2']}
                />
            </div>
        );
    }
}
ReactDOM.render(<Index />, document.getElementById('root'));
