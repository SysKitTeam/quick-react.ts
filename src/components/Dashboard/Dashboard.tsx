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
import { IFilteringOption } from '../FilteringBar/FilteringBar.Props';
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

export function filterFarms(farms: Array<IGroup>, filter: string, filteringOptions: Array<IFilteringOption>): Array<IGroup> {
    if (!filter && filteringOptions.length === 0) {
        return farms;
    }
    let filteredFarms = Array<IGroup>(0);
    filter = filter.toLowerCase();
    if (filteringOptions.length > 0) {
        farms.forEach(farm => {
            const servers = farm.servers.filter((server) => filterServerByStatus(filteringOptions, server.status) && filterServerByName(filter, server.name));
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
            grouping: DashboardGroupingEnum.Smart,
            filteringOptions: [],
            isSmartGrouping: true
        };
    }

    componentWillReceiveProps(nextProps: IDashboardProps) {
        if (this.props.farms !== nextProps.farms) {
            this.setState({ ...this.state, groups: getGrouped(nextProps.farms, this.state.grouping).filter(group => { return group.servers.length > 0; }) });
        }
    }

    @autobind
    groupChanged(newGroupKey: number) {
        const isSmartGrouping = (newGroupKey as DashboardGroupingEnum) === DashboardGroupingEnum.Smart;
        this.setState(
            {
                ...this.state,
                grouping: newGroupKey,
                groups: getGrouped(this.props.farms, newGroupKey).filter(group => { return group.servers.length > 0; }),
                isSmartGrouping: isSmartGrouping
            });
    }

    @autobind
    onStatusFilteringChange(activeFilters) {
        this.setState({ ...this.state, filteringOptions: activeFilters });
    }

    public render() {
        let { headerClass, hasAddButton, activeFilters } = this.props;
        let { filter, activeView, groups, isSmartGrouping } = this.state;

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
                    onFilteringOptionsChange={this.onStatusFilteringChange}
                    activeFilters={activeFilters}
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
                        farms={groups}
                        singleGroupView={this.state.grouping === DashboardGroupingEnum.Disabled}
                        icons={this.props.icons}
                        onGroupEdit={isSmartGrouping ? this.props.onGroupEdit : undefined}
                        onAddToGroup={isSmartGrouping ? this.props.onAddToGroup : undefined}
                        onGroupDelete={isSmartGrouping ? this.props.onGroupDelete : undefined}
                        groupOnClick={isSmartGrouping ? this.props.groupOnClick : undefined}
                        onServerRoleEdit={this.props.onServerRoleEdit !== undefined ? this._roleEdit : undefined}
                        onServerClose={isSmartGrouping && this.props.onServerClose !== undefined ? this._serverClose : undefined}
                        serverOnClick={this.props.serverOnClick}
                        filteringOptions={this.state.filteringOptions}
                    />
                }
                {
                    (activeView === ActiveDashboard.Tiles) &&
                    <TileDashboard
                        className={'viewport-height'}
                        farms={groups}
                        filter={filter}
                        singleGroupView={this.state.grouping === DashboardGroupingEnum.Disabled}
                        icons={this.props.icons}
                        onGroupEdit={isSmartGrouping ? this.props.onGroupEdit : undefined}
                        onAddToGroup={isSmartGrouping ? this.props.onAddToGroup : undefined}
                        onGroupDelete={isSmartGrouping ? this.props.onGroupDelete : undefined}
                        groupOnClick={isSmartGrouping ? this.props.groupOnClick : undefined}
                        onServerRoleEdit={this.props.onServerRoleEdit !== undefined ? this._roleEdit : undefined}
                        onServerClose={isSmartGrouping && this.props.onServerClose !== undefined ? this._serverClose : undefined}
                        serverOnClick={this.props.serverOnClick}
                        filteringOptions={this.state.filteringOptions}
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
                        filteringOptions={this.state.filteringOptions}
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
    private _roleEdit(id: any, farmId: any, event: any) {
        if (this.props.onServerRoleEdit) {
            this.props.onServerRoleEdit(id, farmId);
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
