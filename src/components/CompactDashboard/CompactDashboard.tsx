import * as React from 'react';
import { ICompactDashboardProps } from './CompactDashboard.Props';
import {CompactServer} from '../CompactServer/CompactServer';
import {Farm} from '../Farm/Farm';
import {FarmHeader} from '../FarmHeader/FarmHeader';
import './CompactDashboard.scss';

function sortFarmServers(ob1: {status: number, serverName: string}, ob2: {status: number, serverName: string}) {
    if (ob1.status > ob2.status) {
        return 1;
    } else if (ob1.status < ob2.status) { 
        return -1;
    }

    // Else go to the 2nd item
    if (ob1.serverName < ob2.serverName) { 
        return -1;
    } else if (ob1.serverName > ob2.serverName) {
        return 1
    } else { // nothing to split them
        return 0;
    }
}

export class CompactDashboard extends React.Component<ICompactDashboardProps, any> {

    constructor(props?: ICompactDashboardProps) {
        super(props);
    }

    public render() { 
        let {title, farms} = this.props;

        return(
            <div>
                <div>{title}</div>
                <div className="compact-dashboard-container vertical">
                    {
                        farms.map((farm) => (
                            <Farm className={'farm-name-inside'} id={farm.farmId} name={farm.farmName} key={farm.farmId}>
                                <FarmHeader sharepointIcon={farm.sharepointVersionIcon} sharepointVersion={farm.sharepointVersion} isCustomFarm={farm.isCustom} configDB={farm.configDB} configDBIcon={farm.confgiDBIcon}/>
                                { 
                                    farm.servers.sort(sortFarmServers).map((server) => (
                                        
                                        <CompactServer  key={server.serverId} roleList={server.roleList} serverId={server.serverId} classNameList={server.classNameList} 
                                        status={server.status} onRoleEdit={server.onRoleEdit} onServerClose={server.onServerClose} serverName={server.serverName}
                                        />
                                        
                                    ))
                                }
                            </Farm>
                        ))
                    }
                </div> 
            </div>
        );
    }
}
