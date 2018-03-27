/* tslint:disable:no-console */
import 'babel-polyfill';
import 'ts-helpers';

import * as React from 'react';
import * as ReactDOM from 'react-dom';

import { compareResultFactory } from '../../src/components/TreeCompare/CompareResultRenderer';
import { CompareResultEnum } from '../../src/components/TreeCompare/TreeCompare.props';
import { generateTreeData } from '../MockData/compare';

import { TreeCompare } from '../../src/components/TreeCompare/TreeCompare';
import { GridColumn } from '../../src';

const columns: Array<string> = ['Name', 'Source Permission', 'Status', 'Target Permission'];

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
