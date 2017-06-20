import * as React from 'react';
import * as ReactDOM from 'react-dom';
import { TreeFilter } from '../../src/components/TreeFilter';
import { treeData, flatData } from '../MockData/treeFilterElements';

export class Index extends React.Component<any, any> {
    onValuesSelected = (filterId: string, filterSelection) => {
        // tslint:disable-next-line:no-console
        console.log(filterId, filterSelection);
    }

    public render() {
        return (
            <div>
                <TreeFilter
                    title="Some Tree Filter"
                    filterId={'filID'}
                    items={treeData}
                    onValuesSelected={this.onValuesSelected}
                />
                {/*
                <TreeFilter
                    title="Single Select"
                    filterId={'filID3'}
                    items={treeData}
                    onValuesSelected={this.onValuesSelected}
                    isSingleSelect={true}
                    isGroupSelectableOnSingleSelect={true}
                />

                <TreeFilter
                    title="Flat list"
                    filterId={'fil2'}
                    items={flatData}
                    onValuesSelected={this.onValuesSelected}
                    itemsAreFlatList={true}
                />
                */}
            </div>
        );
    }
}
ReactDOM.render(<Index />, document.getElementById('root'));
