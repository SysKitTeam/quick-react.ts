/* tslint:disable:no-console */
import 'babel-polyfill';
import 'ts-helpers';

import * as React from 'react';
import * as ReactDOM from 'react-dom';

// import { BarChart } from './../../src/components/BarChart/BarChart';
import { IBarChartData } from './../../src/components/BarChart/BarChart.props';
import { data, updatedData } from './../../src//mockData/barChart';

export class Index extends React.Component<any, any> {
     constructor() {
        super();
        this.state = { data: data };
        // setTimeout(() => this.setState({ data: updatedData }), 2000);
    };
    public render() {
        return (
            <div>
                {/*<BarChart id={'bar-chart-1'} data={this.state.data} dimensions={{width: '100%', height: '300px'}}/>*/}
            </div>
        );
    };
};
ReactDOM.render(<Index />, document.getElementById('root'));
