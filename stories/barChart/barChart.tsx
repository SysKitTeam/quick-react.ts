/* tslint:disable:no-console */
import 'ts-helpers';
import * as React from 'react';

import { storiesOf } from '@storybook/react';
import { withKnobs, number, text } from '@storybook/addon-knobs/react';

import { BarChart } from '../../src/components/BarChart/BarChart';
import { barData } from './barChartData';

const heightOptions = {
    range: true,
    min: 10,
    max: 600,
    step: 1
};

const stories = storiesOf('barChart', module);

stories.addDecorator(withKnobs);
stories.add('bar chart', () => (
    <div>
        <BarChart
            id={'bar-chart-1'}
            data={barData}
            dimensions={{ width: '75%', height: number('width', 300, heightOptions) + 'px'}}
            onClick={data => console.log(data)}
            selectedIndex={4} />
    </div>
    ));
