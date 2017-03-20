/* tslint:disable:no-console */
import 'babel-polyfill';
import 'ts-helpers';

import * as React from 'react';
import * as ReactDOM from 'react-dom';
import { LineChart } from './components/LineChart/LineChart';
import { data, updatedData, linearData, linearDataUpdated } from './MockData/Data';

export class Index extends React.Component<any, any> {
    constructor() {
        super();
        this.state = {
            data: data,
            linearData: linearData
        };
    }

    public render() {
        return (
            <div>
                <LineChart
                    id={'graf-2'}
                    title={'LINEAR CHART'}
                    data={this.state.linearData}
                    yAxisTicks={7}
                    xAxisTicks={5}
                ></LineChart>
                {/*<LineChart
                    id={'graf-1'}
                    title={'CPU USAGE'}
                    data={this.state.data} 
                ></LineChart>*/}
            </div>);
    };
};

ReactDOM.render(<Index />, document.getElementById('root'));
