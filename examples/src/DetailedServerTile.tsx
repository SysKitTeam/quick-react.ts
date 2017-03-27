/* tslint:disable:no-console */
import 'babel-polyfill';
import 'ts-helpers';

import * as React from 'react';
import * as ReactDOM from 'react-dom';

import { DetailedServerTile } from './../../src/components/DetailedServerTile/DetailedServerTile';
import { IDetailServerProps } from './../../src/components/DetailedServerTile/DetailedServerTile.Props';
import { linearData } from '../../src/MockData/Data';

export class Index extends React.Component<any, any> {  
    private memoryUsage = {usageUnit: 'MB', capactiy: 1024, used: 300 };
    private processorUsage = [
        {time: 0, usage: 50 },
        {time: 1, usage: 45 },
        {time: 2, usage: 40 },
        {time: 3, usage: 35 },
        {time: 4, usage: 20 },
        {time: 5, usage: 10 },
        {time: 6, usage: 30 },
        {time: 7, usage: 50 },
        {time: 8, usage: 70 },
        {time: 9, usage: 80 },
        {time: 10, usage: 90 },
        {time: 11, usage: 100 },
        {time: 12, usage: 20 },
        {time: 13, usage: 10 },
        {time: 14, usage: 20 },
        {time: 15, usage: 25 },
       ];
    private partitionUsages = [
        { name: 'C', usageUnit: 'GB', capactiy: 60, used: 55 },
        { name: 'D', usageUnit: 'GB', capactiy: 200, used: 10 },
        { name: 'E', usageUnit: 'GB', capactiy: 5, used: 3 },      
    ];
    private roleList = [{ display: 'Web', iconName: 'icon-site2' }, { display: 'SQL', iconName: 'icon-sql_log' }, { display: 'FireWall', iconName: 'icon-logOut' }];
    
    public render() {
        return (
              <div>
                <DetailedServerTile
                    id={{ FQDN: 'server-123' }}
                    status={0}
                    name={'SP2016-Farm'}
                    numberOfUsers={'3432'}
                    roles={this.roleList}
                    memoryUsage={this.memoryUsage}
                    processorUsage={this.processorUsage}
                    partitionUsages={this.partitionUsages}
                    >
                </DetailedServerTile>
             </div>
        );
    };
};
ReactDOM.render(<Index />, document.getElementById('root'));
