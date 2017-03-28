/* tslint:disable:no-console */
import 'babel-polyfill';
import 'ts-helpers';

import * as React from 'react';
import * as ReactDOM from 'react-dom';

import { DetailedServerTile } from './../../src/components/DetailedServerTile/DetailedServerTile';
import { IDetailedServerProps } from './../../src/components/DetailedServerTile/DetailedServerTile.Props';
import { linearData } from '../MockData/Data';
import { processorUsage, partitionUsages, roleList } from '../MockData/farms';

export class Index extends React.Component<any, any> {  
    private memoryUsage = {usageUnit: 'MB', capactiy: 1024, used: 300 };   
    public render() {
        return (
              <div>
                <DetailedServerTile
                    id={{ FQDN: 'server-123' }}
                    status={0}
                    name={'SP2016-Farm'}
                    numberOfUsers={'3432'}
                    roles={roleList}
                    memoryUsage={this.memoryUsage}
                    processorUsage={processorUsage}
                    partitionUsages={partitionUsages}
                    >
                </DetailedServerTile>
             </div>
        );
    };
};
ReactDOM.render(<Index />, document.getElementById('root'));
