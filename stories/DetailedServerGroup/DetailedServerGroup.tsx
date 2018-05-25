import 'babel-polyfill';
import 'ts-helpers';

import * as React from 'react';

import { storiesOf } from '@storybook/react';
import { DetailedServerGroup } from '../../src/components/DetailedServerGroup/DetailedServerGroup';
import { DemoServerGroup } from './../MockData/farms';

const stories = storiesOf('Detailed Server Group', module);
stories.add('Showcase', () => (
    <div style={{ height: '900px' }}>
        <DetailedServerGroup id={''} filter={''} name={DemoServerGroup.name} servers={DemoServerGroup.servers} iconName={'icon-group'} iconTitle={'Group'} />
    </div>
));
