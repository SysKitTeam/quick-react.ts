import 'babel-polyfill';
import 'ts-helpers';

import * as React from 'react';
import { storiesOf } from '@storybook/react';
import * as CustomDateRange from './CustomDateRangeExample';

const stories = storiesOf('Custom Date Range', module);
stories.add('Showcase', () => (
    <CustomDateRange.Index />
));
