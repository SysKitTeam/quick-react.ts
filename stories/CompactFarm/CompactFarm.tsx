import 'babel-polyfill';
import 'ts-helpers';

import * as React from 'react';
import * as ReactDOM from 'react-dom';
import { storiesOf } from '@storybook/react';
import { CompactFarm } from '../../src/components/CompactFarm/CompactFarm';
import { dummyDashboard } from './../MockData/DashboardDummy';

const stories = storiesOf('Compact Farm', module);
stories.add('Showcase', () => (
    <div>
        <CompactFarm farm={dummyDashboard.farms[0]} filter={''} />

        <CompactFarm
            farm={dummyDashboard.farms[0]}
            iconName={'icon-alert'}
            filter={''}
            groupOnClick={() => { }}
            onGroupEdit={() => { }}
            onGroupDelete={() => { }}
            onAddToGroup={() => { }} />
    </div>
));
