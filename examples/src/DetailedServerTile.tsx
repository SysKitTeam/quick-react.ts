/* tslint:disable:no-console */
import 'babel-polyfill';
import 'ts-helpers';

import * as React from 'react';
import * as ReactDOM from 'react-dom';

import { DetailedServerTile } from './../../src/components/DetailedServerTile/DetailedServerTile';
import { DetailedFarm } from '../MockData/farms';

const server = DetailedFarm.servers[0];
export class Index extends React.Component<any, any> {  
    public render() {
        return (
              <div>
                <DetailedServerTile
                    id={{ FQDN: 'server-123' }}
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
        );
    };
};
ReactDOM.render(<Index />, document.getElementById('root'));
