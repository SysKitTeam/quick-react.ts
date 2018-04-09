/* tslint:disable:no-console */
import 'babel-polyfill';
import 'ts-helpers';

import * as React from 'react';
import * as ReactDOM from 'react-dom';

import { compareResultFactory } from '../../src/components/TreeCompare/CompareResultRenderer';
import { CompareResultEnum } from '../../src/components/TreeCompare/CompareResultRenderer';
import { generateTreeData } from '../MockData/compare';

import { TreeCompare } from '../../src/components/TreeCompare/TreeCompare';
import { GridColumn } from '../../src';

const columns: Array<GridColumn> = [
    {
        headerText: 'Name',
        width: 100,
        minWidth: 100,
        valueMember: 'displayName'
    },
    {
        headerText: 'Source Permission',
        width: 100,
        minWidth: 100,
        valueMember: 'sourceValue'
    },
    {
        headerText: 'Status',
        width: 100,
        minWidth: 100,
        valueMember: 'compareResult'
    },
    {
        headerText: 'Target Permission',
        width: 100,
        minWidth: 100,
        valueMember: 'targetValue'
    }
];

export class Index extends React.Component<any, any> {
    constructor(props: any) {
        super(props);

        const data = generateTreeData();

        this.state = { data };

        console.log(data);
    }

    public render() {
        return (
            <div style={{ width: '100%', height: '800px' }}>
                <TreeCompare
                    columns={columns}
                    rows={this.state.data}
                />
            </div>
        );
    }
}
ReactDOM.render(<Index />, document.getElementById('root'));
