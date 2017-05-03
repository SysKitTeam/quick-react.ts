/* tslint:disable:no-console */
import 'babel-polyfill';
import 'ts-helpers';

import * as React from 'react';
import * as ReactDOM from 'react-dom';

import { ServerGridDashboard } from './../../src/components/ServerGridDashboard/ServerGridDashboard';
import { IServerGridDashboardProps } from './../../src/components/ServerGridDashboard/ServerGridDashboard.Props';
import { dummyDashboard } from '../MockData/DashboardDummy';

export class Index extends React.Component<any, any> {
    public constructor() {
        super();
        this.state = {
            farms: dummyDashboard.farms
        };
    }

    public render() {
        return (
            <div>
                <ServerGridDashboard farms={this.state.farms} />
            </div>
        );
    }
}
ReactDOM.render(<Index />, document.getElementById('root'));
