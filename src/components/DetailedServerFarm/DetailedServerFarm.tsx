import * as React from 'react';
import { IDetailedFarmProps } from './DetailedServerFarm.Props';
import { DetailedServerTile } from '../DetailedServerTile/DetailedServerTile';
import { Group } from '../Group/Group';
import { GroupHeader } from '../GroupHeader/GroupHeader';
import * as classNames from 'classnames';
import { getServerMeasures, sortServersByStatusAndName, filterServerByName } from '../../utilities/server';

import './DetailedServerFarm.scss';

export class DetailedServerFarm extends React.PureComponent<IDetailedFarmProps, any> {
    public render() { 
        const farm = this.props.farm;
        const servers = farm.servers.filter((server) => { return filterServerByName(this.props.filter, server.name); }).sort(sortServersByStatusAndName);
        return(            
             <div className={'compact-farm'}>
             <Group serverChildrenCount={servers.length} filter={this.props.filter} className={'farm-name-inside'} id={farm.id} name={farm.name} key={farm.id.configDataBaseName + '-' + farm.id.sqlInstance}>
                    {/*<GroupHeader version={farm.version} isCustomFarm={farm.isCustom} farmId={farm.id} />*/}
                    {
                        servers.map((server) => (                           
                                <DetailedServerTile
                                    key={server.id.FQDN}
                                    roles={server.roles}
                                    id={server.id}
                                    status={server.status}
                                    onRoleEdit={server.onRoleEdit}
                                    onClose={server.onClose}
                                    name={server.name}    
                                    memoryUsage={server.memoryUsage}
                                    processorUsage={server.processorUsage}
                                    partitionUsages={server.partitionUsages}
                                />                            
                        ))
                    }                   
                </Group>
            </div>
        );
     }     
}
