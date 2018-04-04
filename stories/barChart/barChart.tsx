/* tslint:disable:no-console */
import 'ts-helpers';
import * as React from 'react';

import { storiesOf } from '@storybook/react';
import { withKnobs, number, text } from '@storybook/addon-knobs/react';

import { BarChart } from '../../src/components/BarChart/BarChart';
import { barData } from './barChartData';
import { Index } from '../../examples/src/BarChart';

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
        <Index />
    </div>
    ));
