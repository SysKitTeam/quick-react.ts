/* tslint:disable:no-console */
import 'babel-polyfill';
import 'ts-helpers';

import * as React from 'react';
import * as ReactDOM from 'react-dom';

import { ServerTile } from './../../src/components/ServerTile/ServerTile';
import {IFarm , ISharePointServer, ServerStatus} from './../../src/models';

export class Index extends React.Component<any, any> {
    public render() {
        return (
            <div>
                <ServerTile
                    id={{ FQDN: 'server-123' }}
                    status={0}
                    name={'SP2016-Martin-Pisacic'}
                    numberOfUsers={'3432'}
                    onClose={(id: string) => console.log('Go away!', id)}
                    diskInformation={['C: 49 / 259 GB (30%)', 'D: 49 / 259 GB (30 %)']}
                    roles={[]}
                    countersData={[
                        { title: 'CPU', currentUsage: '43', usageUnit: '%', hoverText: [''], status: ServerStatus.OK },
                        { title: 'Memory', currentUsage: '7', usageUnit: 'GB', hoverText: ['7GB/10GB (70%)'], status: ServerStatus.Warning },
                        { title: 'Disk', currentUsage: '0,1', usageUnit: 'Mbps', hoverText: ['4.49 Mbps', '2.63 Mbps', '0.3 Mbps'], status: ServerStatus.OK },
                        { title: 'Network', currentUsage: '0,1', usageUnit: 'MB/s', hoverText: ['50.10 kB/s', '23.47 kB/s'], status: ServerStatus.OK }
                    ]}>
                </ServerTile>
            </div>
        );
    };
};
ReactDOM.render(<Index />, document.getElementById('root'));