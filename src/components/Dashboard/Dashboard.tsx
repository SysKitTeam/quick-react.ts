import * as React from 'react';
import { autobind } from '../../utilities/autobind';
import { IDashboardProps, IDashboardState, DashboardGroupingEnum } from './Dashboard.Props';
import { DashboardHeader } from '../DashboardHeader/DashboardHeader';
import { CompactDashboard } from '../CompactDashboard/CompactDashboard';
import { TileDashboard } from '../TileDashboard/TileDashboard';
import { ServerGridDashboard } from '../ServerGridDashboard/ServerGridDashboard';
import { ICompactDashboardProps } from '../CompactDashboard/CompactDashboard.Props';
import { ActiveDashboard } from '../DashboardHeader/DashboardHeader.Props';
import { PivotItem } from '../Pivot/PivotItem';
import { IGroup, IServer, GroupTypeEnum, ServerStatus } from '../../models';
import { filterServerByName, filterServerByStatus, sortServersByStatusAndName } from '../../utilities/server';
import './Dashboard.scss';

function sortFarms(ob1: { farmName: string }, ob2: { farmName: string }) {
    if (ob1.farmName < ob2.farmName) {
        return -1;
    }
    if (ob1.farmName > ob2.farmName) {
        return 1;
    }
    return 0;
}

export function filterFarms(farms: Array<IGroup>, filter: string): Array<IGroup> {
    let filteredFarms = Array<IGroup>(0);
    filter = filter.toLowerCase();
    if (filter.indexOf('status:') !== -1) {
        farms.forEach(farm => {
            const servers = farm.servers.filter((server) => filterServerByStatus(filter, server.status));
            if (servers.length !== 0) {
                filteredFarms.push({ ...farm, servers: servers });
            }
        });
    } else {
        farms.forEach(farm => {
            const servers = farm.servers.filter((server) => filterServerByName(filter, server.name));
            if (servers.length !== 0) {
                filteredFarms.push({ ...farm, servers: servers });
            }
        });
    }
    return filteredFarms;
}

export class Dashboard extends React.PureComponent<IDashboardProps, IDashboardState> {
    public static defaultProps = {
        editRoles: false
    };
    
    constructor(props?: IDashboardProps) {
        super(props);
        this.state = {
            activeView: props.initialActiveView,
            filter: props.filter,
            groups: props.farms,
            grouping: DashboardGroupingEnum.Smart
        };
    }

    componentWillReceiveProps(nextProps: IDashboardProps) {
        if (this.props.farms !== nextProps.farms) {
            this.setState({ ...this.state, groups: this.getGrouped(nextProps, this.state.grouping) });
        }
    }

    getGrouped(props: IDashboardProps, grouping: DashboardGroupingEnum): Array<IGroup> {
        if (grouping === DashboardGroupingEnum.Smart) {
            return props.farms;
        } else if (grouping === DashboardGroupingEnum.Status) {
            return this.groupStatus(props.farms);
        } else if (grouping === DashboardGroupingEnum.Type) {
            return this.groupType(props.farms);
        } else if (grouping === DashboardGroupingEnum.Disabled) {
            return this.groupNone(props.farms);
        }
    }

    groupNone(groups: Array<IGroup>): Array<IGroup> {
        let allServers: IGroup = {
            id: 'all-servers-group',
            name: 'All Servers',
            type: GroupTypeEnum.Custom,
            servers: new Array<IServer>()
        };

        for (let i = 0; i < groups.length; i++) {
            let group = groups[i];
            for (let j = 0; j < group.servers.length; j++) {
                let server = group.servers[j];
                allServers.servers.push(server);
            }
        }
        allServers.servers = allServers.servers.sort(sortServersByStatusAndName);
        return [allServers];
    }

    groupType(groups: Array<IGroup>): Array<IGroup> {
        let spGroup: IGroup = {
            id: 'sharepoint-group',
            name: 'SharePoint Servers',
            type: GroupTypeEnum.SharePoint,
            servers: new Array<IServer>()
        };
        let sqlGroup: IGroup = {
            id: 'sql-group',
            name: 'SQL Servers',
            type: GroupTypeEnum.Sql,
            servers: new Array<IServer>()
        };
        let sqlAoGroup: IGroup = {
            id: 'sql-ao-group',
            name: 'SQL AlwaysOn Servers',
            type: GroupTypeEnum.SqlAlwaysOn,
            servers: new Array<IServer>()
        };

        let customGroup: IGroup = {
            id: 'custom-group',
            name: 'Other',
            type: GroupTypeEnum.Custom,
            servers: new Array<IServer>()
        };

        for (let i = 0; i < groups.length; i++) {
            let group = groups[i];
            for (let j = 0; j < group.servers.length; j++) {
                let server = group.servers[j];
                switch (group.type) {
                    case GroupTypeEnum.SharePoint:
                        spGroup.servers.push(server);
                        break;
                    case GroupTypeEnum.Sql:
                        sqlGroup.servers.push(server);
                        break;
                    case GroupTypeEnum.SqlAlwaysOn:
                        sqlAoGroup.servers.push(server);
                        break;
                    default:
                        customGroup.servers.push(server);
                        break;
                }
            }
        }

        return [spGroup, sqlGroup, sqlAoGroup, customGroup];
    }

    groupStatus(groups: Array<IGroup>): Array<IGroup> {
        let criticalGroup: IGroup = {
            id: 'critical-group',
            name: 'Critical',
            type: GroupTypeEnum.Custom,
            servers: new Array<IServer>()
        };
        let warningGroup: IGroup = {
            id: 'warning-group',
            name: 'Warning',
            type: GroupTypeEnum.Custom,
            servers: new Array<IServer>()
        };
        let healthyGroup: IGroup = {
            id: 'healthy-group',
            name: 'Healthy',
            type: GroupTypeEnum.Custom,
            servers: new Array<IServer>()
        };

        let offlineGroup: IGroup = {
            id: 'offline-group',
            name: 'Offline',
            type: GroupTypeEnum.Custom,
            servers: new Array<IServer>()
        };

        for (let i = 0; i < groups.length; i++) {
            let group = groups[i];
            for (let j = 0; j < group.servers.length; j++) {
                let server = group.servers[j];
                switch (server.status) {
                    case ServerStatus.Critical:
                        criticalGroup.servers.push(server);
                        break;
                    case ServerStatus.Warning:
                        warningGroup.servers.push(server);
                        break;
                    case ServerStatus.Offline:
                        offlineGroup.servers.push(server);
                        break;
                    case ServerStatus.OK:
                        healthyGroup.servers.push(server);
                        break;
                }
            }
        }
        return [criticalGroup, warningGroup, healthyGroup, offlineGroup];
    }

    @autobind
    groupChanged(newGroupKey: number) {
        this.setState({ ...this.state, grouping: newGroupKey, groups: this.getGrouped(this.props, newGroupKey) });
    }

    render() {
        let { headerClass, hasAddButton } = this.props;
        let { filter, activeView, groups } = this.state;

        return (
            <div className="dashboard">
                <DashboardHeader
                    onAddFarmClick={this.props.addFarm}
                    headerClass={headerClass}
                    pivotItems={this.props.differentDashboards}
                    hasAddFarmButton={hasAddButton}
                    onChanged={this.changeSearchFilter}
                    filter={filter}
                    title={this.props.title}
                    onViewChange={this.changeView}
                    selectedDashboardKey={activeView}
                    selectedGrouping={this.state.grouping}
                    onGroupingChange={this.groupChanged}
                />
                {
                    groups && groups.length === 0 && this.props.emptyDashboardMessage && <div className="empty-dasboard-message-container">
                        {this.props.emptyDashboardMessage}
                    </div>
                }
                {
                    ((activeView === ActiveDashboard.CompactHorizontal)) &&
                    <CompactDashboard
                        filter={filter}
                        className={'viewport-height'}
                        title={this.props.title}
                        editRoles={this.props.editRoles}
                        farms={groups}
                        singleGroupView={this.state.grouping === DashboardGroupingEnum.Disabled}
                        icons={this.props.icons}
                        groupEditFunc={this.props.groupEditFunc}
                        groupAddFunc={this.props.groupEditFunc}
                        groupDeleteFunc={this.props.groupDeleteFunc}
                        groupOnClick={this.props.groupOnClick}
                        serverRoleEdit={this._roleEdit}
                        serverClose={this.props.serverClose}
                        serverOnClick={this.props.serverOnClick}
                    />
                }
                {
                    (activeView === ActiveDashboard.Tiles) &&
                    <TileDashboard
                        className={'viewport-height'}
                        farms={groups}
                        filter={filter}
                        editRoles={this.props.editRoles}
                        singleGroupView={this.state.grouping === DashboardGroupingEnum.Disabled}
                        icons={this.props.icons}
                        groupEditFunc={this.props.groupEditFunc}
                        groupAddFunc={this.props.groupEditFunc}
                        groupDeleteFunc={this.props.groupDeleteFunc}
                        groupOnClick={this.props.groupOnClick}
                        serverRoleEdit={this._roleEdit}
                        serverClose={this.props.serverClose}
                        serverOnClick={this.props.serverOnClick}
                    />
                }
                {
                    (activeView === ActiveDashboard.Grid) &&
                    <ServerGridDashboard
                        className={'viewport-height'}
                        farms={groups}
                        serverOnClick={this.props.serverOnClick}
                        filter={filter}
                        singleGroupView={this.state.grouping === DashboardGroupingEnum.Disabled}
                    />
                }
            </div>
        );
    }

    @autobind
    private _roleEdit(event: any, id: any, farmId) {
        if (this.props.serverRoleEdit) {
            this.props.serverRoleEdit(id, farmId);
        }
        event.stopPropagation();
    }

    @autobind
    changeView(item?: PivotItem, ev?: React.MouseEvent<any>) {
        let activeView = Number(item.props.itemKey);
        this.setState({ ...this.state, activeView });
        if (this.props.onActiveViewChanged) {
            this.props.onActiveViewChanged(activeView);
        }
    }

    @autobind
    private changeSearchFilter(newValue: string) {
        this.setState({ ...this.state, filter: newValue });
    }
}
