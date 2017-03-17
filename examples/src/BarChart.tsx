/* tslint:disable:no-console */
import 'babel-polyfill';
import 'ts-helpers';

import * as React from 'react';
import * as ReactDOM from 'react-dom';

// import { BarChart } from './../../src/components/BarChart/BarChart';
// import { data, updatedData } from './../../src//mockData/barChart';
// import { IBarChartData } from './../../src/components/BarChart/BarChart.props';

export class Index extends React.Component<any, any> {
    public render() {
        return (
            <div>
                {/*<BarChart id={'bar-chart-1'} data={this.state.data} dimensions={{width: '100%', height: '300px'}}/>*/}
            </div>
        );
    };
};
ReactDOM.render(<Index />, document.getElementById('root'));
