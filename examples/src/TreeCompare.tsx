/* tslint:disable:no-console */
import 'babel-polyfill';
import 'ts-helpers';

import * as React from 'react';
import * as ReactDOM from 'react-dom';

import { generateTreeData } from '../MockData/compare';

import { TreeCompare } from '../../src/components/TreeCompare/TreeCompare';
import { GridColumn } from '../../src';
import { compareResultFactory } from '../MockData/CompareResultRenderer';

const jsonString = `{
    "children": [
      {
        "children": [],
        "displayName": "Alex Wilber",
        "sourceValue": "Contribute",
        "targetValue": "",
        "compareResult": {
            "compareResult": 6,
            "compareIcon": "icon-performance"
        }
      },
      {
        "children": [],
        "displayName": "Pradeep Gupta",
        "sourceValue": "Contribute",
        "targetValue": "",
        "compareResult": {
            "compareResult": 6,
            "compareIcon": "icon-performance"
        }
      },
      {
        "children": [
          {
            "children": [],
            "displayName": "System Account",
            "sourceValue": "Full Control",
            "targetValue": null,
            "compareResult": {
                "compareResult": 6,
                "compareIcon": "icon-performance"
            }
          },
          {
            "children": [],
            "displayName": "Pradeep Gupta",
            "sourceValue": null,
            "targetValue": "Full Control",
            "compareResult": {
                "compareResult": 5,
                "compareIcon": "icon-analyze"
            }
          }
        ],
        "displayName": "Team Site Owners",
        "sourceValue": "Full Control",
        "targetValue": "Full Control",
        "compareResult": {
            "compareResult": 10,
            "compareIcon": "icon-enable"
        }
      }
    ],
    "displayName": null,
    "sourceValue": null,
    "targetValue": null,
    "compareResult": {
        "compareResult": 10,
        "compareIcon": "icon-enable"
    }
  }`;

const rows = JSON.parse(jsonString);

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
                    // rows={this.state.data}
                    rows={rows}
                    compareResultRenderer={compareResultFactory}
                />
            </div>
        );
    }
}
ReactDOM.render(<Index />, document.getElementById('root'));
