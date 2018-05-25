import 'babel-polyfill';
import 'ts-helpers';

import * as React from 'react';

import { storiesOf } from '@storybook/react';
import * as Dashboard from './DashboardExample';

const stories = storiesOf('Dashboard', module);
stories.add('Showcase', () => (
    <Dashboard.Index/>
));
