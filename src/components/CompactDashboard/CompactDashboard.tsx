import * as React from 'react';
import { ICompactDashboardProps, IFarm } from './CompactDashboard.Props';
import { CompactServer } from '../CompactServer/CompactServer';
import { Group } from '../Group/Group';
import { GroupHeader } from '../GroupHeader/GroupHeader';
import { List, AutoSizer } from 'react-virtualized';
import * as classNames from 'classnames';
import { autobind } from '../../utilities/autobind';
import './CompactDashboard.scss';

function sortFarmServers(ob1: { status: number, serverName: string }, ob2: { status: number, serverName: string }) {
    if (ob1.status > ob2.status) {
        return 1;
    } else if (ob1.status < ob2.status) {
        return -1;
    }

    // Else go to the 2nd item
    if (ob1.serverName < ob2.serverName) {
        return -1;
    } else if (ob1.serverName > ob2.serverName) {
        return 1;
    } else { // nothing to split them
        return 0;
    }
}

function sortFarms(ob1: { farmName: string }, ob2: { farmName: string }) {
    if (ob1.farmName < ob2.farmName) {
        return -1;
    }

    if (ob1.farmName > ob2.farmName) {
        return 1;
    }
    return 0;
}

export class CompactDashboard extends React.Component<ICompactDashboardProps, any> {

    constructor(props?: ICompactDashboardProps) {
        super(props);
    }

    public render() {
        let {title, farms} = this.props;
        let classname = classNames({ [this.props.className]: this.props.className !== undefined });

        return (
            <div className={classname}>
                <div className="compact-dashboard-container">
                    {
                        <AutoSizer disableHeight>
                            {({ width }) => (
                                <List
                                    height={400}
                                    overscanRowCount={1}
                                    rowCount={farms.length}
                                    rowHeight={250}
                                    rowRenderer={this._renderRow}
                                    width={width}
                                    />
                            )}
                        </AutoSizer>

                    }
                </div>
            </div>
        );
    }

    @autobind
    private getRow(index: number): IFarm {
        const {farms} = this.props;
        
        return farms[index];
    }

    @autobind
    private _renderRow({ index, isScrolling, key, style }): JSX.Element {

        const farm = this.getRow(index);

        return (
            <div style={style}>
                <Group filter={this.props.filter} className={'farm-name-inside'} id={farm.farmId} name={farm.farmName} key={farm.farmId}>
                    <GroupHeader sharepointIcon={farm.sharepointVersionIcon} sharepointVersion={farm.sharepointVersion} isCustomFarm={farm.isCustom} configDB={farm.configDB} configDBIcon={farm.confgiDBIcon} />
                    {
                        farm.servers.sort(sortFarmServers).map((server) => (

                            <CompactServer filter={this.props.filter} key={server.serverId} roleList={server.roleList} serverId={server.serverId} classNameList={server.classNameList}
                                status={server.status} onRoleEdit={server.onRoleEdit} onServerClose={server.onServerClose} serverName={server.serverName}
                                />

                        ))
                    }
                </Group>
            </div>
        );
    }
}
