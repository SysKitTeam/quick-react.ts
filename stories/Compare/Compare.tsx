/* tslint:disable:no-console */

import 'babel-polyfill';
import 'ts-helpers';

import * as React from 'react';
import * as ReactDOM from 'react-dom';
import { storiesOf } from '@storybook/react';
import { dummyDashboard } from './../MockData/DashboardDummy';
import { CompareComponent } from '../../src/components/Compare/CompareComponent';
import * as MockData from '../MockData/CompareData';

const stories = storiesOf('Compare', module);
stories.add('Showcase', () => (
    <div style={{ 'height': '850px', 'width': '100%' }}>
        <CompareComponent
            sourceRows={MockData.sourceRows}
            targetRows={MockData.targetRows}
            columns={MockData.columns}
            differences={MockData.difference}
        />
    </div>
));
