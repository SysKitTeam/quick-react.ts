/* tslint:disable:no-console */

import 'babel-polyfill';
import 'ts-helpers';

import * as React from 'react';
import * as ReactDOM from 'react-dom';
import { storiesOf } from '@storybook/react';
import { withKnobs, selectV2, number } from '@storybook/addon-knobs/react';
import { action } from '@storybook/addon-actions';

import { BarChart } from '../../src/components/BarChart/BarChart';
import { IBarChartData } from './../../src/components/BarChart/BarChart.props';
import { barUpdatedData } from '../MockData/barChart';

const widthOptions = { range: true, min: 1, max: 100, step: 1 };
const heightOptions = { range: true, min: 100, max: 600, step: 10 };
const indexOptions = {
    Ana: 0,
    Marko: 1,
    Ivan: 2,
    Ivana: 3,
    Darko: 4,
    Kreso: 5,
    Josip: 6,
    Tomislav: 7,
    Hrvoje: 8,
    Kristijan: 9
};

const stories = storiesOf('barChart', module);
stories.addDecorator(withKnobs);
stories.add('Showcase', () => (
    <div>
        <BarChart
            id={'bar-chart-1'}
            data={barUpdatedData}
            dimensions={{ width: number('width', 75, widthOptions) + '%', height: number('height', 300, heightOptions) + 'px' }}
            onClick={data => console.log(data)}
            selectedIndex={+selectV2('Selected Index', indexOptions, indexOptions.Darko)} />
    </div>
));
