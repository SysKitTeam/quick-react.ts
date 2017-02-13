import * as React from 'react';
import { IDashboardProps } from './Dashboard.Props';
import {CompactServer} from '../CompactServer/CompactServer';
import './Dashboard.scss';

export class Dashboard extends React.Component<IDashboardProps, any>{

    constructor(props?: IDashboardProps){
        super(props);
    }

    public render() { 
        let {title, farms} = this.props;

        return(
            <div className="dashboard-container">
                {title}
                {
                    farms.map((farm) => (
                        <div className={'dashboard-farm'} key={farm.farmId}>
                            <span className="dashboard-farm-name">{farm.farmName}</span>
                            { 
                                farm.servers.map((server) => (
                                    <CompactServer key={server.serverId} roleList={server.roleList} serverId={server.serverId} classNameList={server.classNameList} 
                                    status={server.status} onRoleEdit={server.onRoleEdit} onServerClose={server.onServerClose} serverName={server.serverName}
                                    />
                                ))
                            }
                        </div>
                    ))
                }
            </div> 
        );
    }
}