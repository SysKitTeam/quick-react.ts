/* tslint:disable:no-console */
import 'babel-polyfill';
import 'ts-helpers';

import * as React from 'react';
import * as ReactDOM from 'react-dom';

import { PieChart } from './../../src/components/PieChart/PieChart';
import { IPieChartData } from './../../src/components/PieChart/PieChart.props';
import { pieData, pieUpdatedData } from '../../src/MockData/pieData';

export class Index extends React.Component<any, any> {
   constructor() {
        super();
    }
    public render() {
        return (
            <div>
               <PieChart
                    id={'chart-1'}
                    dimensions={{ width: '100%', height: '300px' }}
                    data={pieUpdatedData}
                    colors={['#344086', '#8bd764', '#f3f986', '#ec1271', '#636363', 'red', 'green', 'purple', 'aquamarine', 'lightgrey']}
                    tipText={(d: IPieChartData) => (d.label + ' : ' + d.value)} 
                    showLegend={false}/>
            </div>
        );
    };
};

ReactDOM.render(<Index />, document.getElementById('root'));
