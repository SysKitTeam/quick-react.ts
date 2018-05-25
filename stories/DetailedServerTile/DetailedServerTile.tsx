/* tslint:disable:no-console */

import 'babel-polyfill';
import 'ts-helpers';

import * as React from 'react';

import { storiesOf } from '@storybook/react';
import { DemoServerGroup } from '../MockData/farms';
import { DetailedServerTile } from '../../src/components/DetailedServerTile/DetailedServerTile';

const server = DemoServerGroup.servers[0];

const stories = storiesOf('Detailed Server Tile', module);
stories.add('Showcase', () => (
    <div>
    <DetailedServerTile
        id={'server-123'}
        status={0}
        name={'SP2016-Farm'}
        numberOfUsers={'3432'}
        roles={server.roles}
        memoryUsage={server.memoryUsage}
        processorUsage={server.processorUsage}
        partitionUsages={server.partitionUsages}
        onClose={(id) => console.log('closing with id : ' + id)}
    >
    </DetailedServerTile>
</div>
));
