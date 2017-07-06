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
import { getGrouped } from '../../utilities/dashboard';

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
            this.setState({ ...this.state, groups: getGrouped(nextProps.farms, this.state.grouping) });
        }
    }    
    
    @autobind
    groupChanged(newGroupKey: number) {
        this.setState({ ...this.state, grouping: newGroupKey, groups: getGrouped(this.props.farms, newGroupKey) });
    }

    public render() {
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
                        showEditRoles={this.state.grouping === DashboardGroupingEnum.Smart ? this.props.showEditRoles : false}
                        farms={groups}
                        singleGroupView={this.state.grouping === DashboardGroupingEnum.Disabled}
                        icons={this.props.icons}
                        groupEditFunc={this.state.grouping === DashboardGroupingEnum.Smart ? this.props.groupEditFunc : undefined}
                        groupAddFunc={this.props.groupEditFunc}
                        groupDeleteFunc={this.props.groupDeleteFunc}
                        groupOnClick={this.state.grouping === DashboardGroupingEnum.Smart ? this.props.groupOnClick : undefined}
                        serverRoleEdit={this._roleEdit}
                        onServerClose={this.state.grouping === DashboardGroupingEnum.Smart && this.props.onServerClose !== undefined ? this._serverClose : undefined}
                        serverOnClick={this.props.serverOnClick}
                    />
                }
                {
                    (activeView === ActiveDashboard.Tiles) &&
                    <TileDashboard
                        className={'viewport-height'}
                        farms={groups}
                        filter={filter}
                        editRoles={this.state.grouping === DashboardGroupingEnum.Smart ? this.props.showEditRoles : false}
                        singleGroupView={this.state.grouping === DashboardGroupingEnum.Disabled}
                        icons={this.props.icons}
                        groupEditFunc={this.state.grouping === DashboardGroupingEnum.Smart ? this.props.groupEditFunc : undefined}
                        groupAddFunc={this.props.groupEditFunc}
                        groupDeleteFunc={this.props.groupDeleteFunc}
                        groupOnClick={this.state.grouping === DashboardGroupingEnum.Smart ? this.props.groupOnClick : undefined}
                        serverRoleEdit={this._roleEdit}
                        onServerClose={this.state.grouping === DashboardGroupingEnum.Smart && this.props.onServerClose !== undefined ? this._serverClose : undefined}
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
    private _serverClose(serverId: any, groupId: any, event: any) {
        this.props.onServerClose(serverId, groupId);
        event.stopPropagation();
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
