import * as React from 'react';
import { IServerGridDashboardProps, ServerGridRow, IServerGridDashboardState } from './ServerGridDashboard.Props';
import * as classNames from 'classnames';
import { Icon } from '../Icon/Icon';
import { ProgressBar } from '../ProgressBar/ProgressBar';
import { QuickGrid, IQuickGridProps, SortDirection, GridColumn, IGroupBy } from '../QuickGrid';
import { GetClassForStatus } from '../../utilities/server';
import { filterFarms } from '../Dashboard/Dashboard';

import { sortServersByStatusAndName, filterServerByName, convertNetwork, convertDisk, convertRam } from '../../utilities/server';
import { IMeasure, MeasureType, IGroup, Partition, DiskMeasure, CpuMeasure, RamMeasure, NetworkMeasure, ServerStatus } from '../../models';

import './ServerGridDashboard.scss';

const GRID_CELL_MIN_WIDTH = 180;

const groupByColumn: GridColumn = {
    valueMember: 'FarmName',
    headerText: 'Farm',
    width: 100,
    minWidth: 50,
    isSortable: true,
    isGroupable: true

};

const gridColumns: Array<GridColumn> = [{
    valueMember: 'ServerName',
    headerText: 'Server',
    dataMember: 'ServerData',
    isGroupable: true,
    width: 100,
    minWidth: GRID_CELL_MIN_WIDTH,
    cellFormatter: (cellData) => {
        return (
            <div className="server-column-cell">
                <div className={GetClassForStatus('server-status', cellData.status)}>&nbsp;</div>
                <span>{cellData.name}</span>
            </div>
        );
    },
    isSortable: true,
    sortByValueGetter: (row, sortDirection) => {
        let modifier = 'a';
        let status: ServerStatus = row.ServerData.status;
        switch (status) {
            case ServerStatus.OK:
                modifier = sortDirection === SortDirection.Ascending ? '2' : 'b';
                break;
            case ServerStatus.Warning:
                modifier = sortDirection === SortDirection.Ascending ? '1' : 'c';
                break;
            case ServerStatus.Critical:
                modifier = sortDirection === SortDirection.Ascending ? '0' : 'd';
                break;
            case ServerStatus.Offline:
                modifier = sortDirection === SortDirection.Ascending ? '3' : 'a';
                break;
        }
        return modifier + row.ServerName;
    }
},
{
    valueMember: 'CPU',
    headerText: 'CPU',
    dataMember: 'CPUData',
    width: 100,
    minWidth: GRID_CELL_MIN_WIDTH,
    cellFormatter: (cellData) => { return <div className={GetClassForStatus('', cellData.status) + ' server-dashboard-grid-cell-content'} > {cellData.usage ? cellData.usage + '%' : '--'}</div>; },
    isSortable: true,
    isGroupable: true
}, {
    valueMember: 'Memory',
    headerText: 'Memory',
    width: 100,
    minWidth: GRID_CELL_MIN_WIDTH,
    dataMember: 'MemoryData',
    cellFormatter: (cellData) => {
        const memory = convertRam(cellData);
        return <div className={GetClassForStatus('', memory.status) + ' server-dashboard-grid-cell-content'}> {memory.usageUnit ? memory.hoverText : '--'}</div>;
    },
    isSortable: true,
    sortByValueGetter: (row, sortDirection) => {
        let key = 'MemoryData';
        let memoryData = row[key];
        return memoryData.used / memoryData.capacity;
    }
},
{
    valueMember: 'DiskActivity',
    headerText: 'Disk Activity',
    dataMember: 'DiskActivityData',
    width: 100,
    minWidth: GRID_CELL_MIN_WIDTH,
    cellFormatter: (cellData) => {
        const disk = convertDisk(cellData);
        return <div className={GetClassForStatus('', disk.status) + ' server-dashboard-grid-cell-content'}> {disk.currentUsage + ' ' + disk.usageUnit}</div>;
    },
    isSortable: true
}, {
    valueMember: 'Network',
    headerText: 'Network',
    dataMember: 'NetworkData',
    width: 100,
    minWidth: GRID_CELL_MIN_WIDTH,
    cellFormatter: (cellData) => {
        const network = convertNetwork(cellData);
        return <div className={GetClassForStatus('', network.status) + ' server-dashboard-grid-cell-content'}> {network.currentUsage + ' ' + network.usageUnit}</div>;
    },
    isSortable: true
}];

export class ServerGridDashboard extends React.PureComponent<IServerGridDashboardProps, IServerGridDashboardState> {
    private grid;
    constructor(props: IServerGridDashboardProps) {
        super(props);
        this.state = {
            rows: this.transformFarmToRows(props.farms, props.filter),
            expandedRows: {},
            groupBy: [{ column: 'FarmName', sortDirection: SortDirection.Ascending }]
        };
    }

    componentWillReceiveProps(nextProps: IServerGridDashboardProps) {
        this.setState((oldState) => {
            return {
                ...oldState,
                rows: this.transformFarmToRows(nextProps.farms, nextProps.filter),
                groupBy: nextProps.singleGroupView ? [] : [{ column: 'FarmName', sortDirection: SortDirection.Ascending }]
            };
        });
    }

    private transformFarmToRows(farms: Array<IGroup>, filter: string): Array<ServerGridRow> {
        const filteredFarms = filterFarms(farms, filter);
        let rows = [];
        const getMeasure = (measures, measureType) => {
            return measures.filter((mes) => { return mes.type === measureType; })[0];
        };
        filteredFarms.forEach(farm => {
            farm.servers.forEach(server => {
                const cpu = getMeasure(server.measures, MeasureType.CPU);
                const mem = getMeasure(server.measures, MeasureType.Ram);
                const disk = getMeasure(server.measures, MeasureType.Disk);
                const net = getMeasure(server.measures, MeasureType.Network);
                rows.push({
                    GroupId: farm.id,
                    ServerId: server.id,
                    FarmName: farm.name,
                    UserCount: server.numberOfUsers,
                    ServerName: server.name,
                    ServerData: { name: server.name, status: server.status },
                    CPU: cpu.usage,
                    CPUData: cpu,
                    Memory: mem.used,
                    MemoryData: mem,
                    DiskActivity: disk.totalDiskIo,
                    DiskActivityData: disk,
                    Network: net.kbTotal,
                    NetworkData: net
                });
            });
        });
        return rows;
    }

    public render(): JSX.Element {
        const className = classNames({ [this.props.className]: this.props.className !== undefined }, 'server-grid-dashboard-container');
        let columns = [...gridColumns];
        if (!this.props.singleGroupView) {
            columns.push(groupByColumn);
        }
        return (
            <div className="quick-grid-container">
                <div className={className}>
                    <QuickGrid
                        rows={this.state.rows}
                        columns={columns}
                        groupBy={this.state.groupBy}
                        overscanRowCount={30}
                        onRowDoubleClicked={this.onRowDoubleClick}
                        sortColumn="ServerName"
                        sortDirection={SortDirection.Ascending}
                        onGroupByChanged={this.groupByChanged}
                        groupRowFormat={this.groupRowFormat}
                    />
                </div>
            </div>
        );
    }

    groupRowFormat = (rowData: any): string => {
        return rowData.name;
    }

    groupByChanged = (groupBy: Array<IGroupBy>) => {
        this.setState((oldState) => {
            return { ...oldState, groupBy: groupBy };
        });
    }

    onRowDoubleClick = (row: ServerGridRow) => {
        const { serverOnClick } = this.props;
        if (serverOnClick) {
            serverOnClick(row.GroupId, row.ServerId);
        }
    }
}

