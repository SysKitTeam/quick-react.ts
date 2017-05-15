import * as React from 'react';
import { IServerGridDashboardProps, ServerGridRow, IServerGridDashboardState } from './ServerGridDashboard.Props';
import { ITiledDashboardFarm } from '../TileDashboard/TileDashboard.Props';
import * as classNames from 'classnames';
import { Icon } from '../Icon/Icon';
import { autobind } from '../../utilities/autobind';
import { ProgressBar } from '../ProgressBar/ProgressBar';
import { QuickGrid } from '../QuickGrid/QuickGrid';
import { IQuickGridProps, GridColumn } from '../QuickGrid/QuickGrid.Props';
import { GetClassForStatus } from '../../utilities/server';
import { filterFarms } from '../Dashboard/Dashboard';

import { sortServersByStatusAndName, filterServerByName, convertNetwork, convertDisk, convertRam } from '../../utilities/server';
import { IMeasure, MeasureType, IFarm, Partition, DiskMeasure, CpuMeasure, RamMeasure, NetworkMeasure, ServerStatus } from '../../models';

import './ServerGridDashboard.scss';

const gridColumns: Array<GridColumn> = [{
    valueMember: 'FarmName',
    headerText: 'Farm',
    width: 20,
    minWidth: 50
}, {
    valueMember: 'ServerName',
    headerText: 'Server',
    dataMember: 'ServerData',
    width: 20,
    minWidth: 200,
    cellFormatter: (cellData) => {
        return (
            <div className="server-column-cell">
                <div className={GetClassForStatus('server-status', cellData.status)}>&nbsp;</div>
                <span>{cellData.name}</span>
            </div>
        );
    },
    cellClassName: 'border-column-cell',
    isSortable: true,
    sortByValueGetter: (row, sortDirection) => {
        let modifier = 'a';
        let status: ServerStatus = row.ServerData.status;
        switch (status) {
            case ServerStatus.OK:
                modifier = sortDirection === 'ASC' ? '2' : 'b';
                break;
            case ServerStatus.Warning:
                modifier = sortDirection === 'ASC' ? '1' : 'c';
                break;
            case ServerStatus.Critical:
                modifier = sortDirection === 'ASC' ? '0' : 'd';
                break;
            case ServerStatus.Offline:
                modifier = sortDirection === 'ASC' ? '3' : 'a';
                break;
        }
        return modifier + row.ServerName;
    }
},
{
    valueMember: 'CPU',
    headerText: 'CPU',
    dataMember: 'CPUData',
    width: 20,
    minWidth: 200,
    cellFormatter: (cellData) => { return <div className={GetClassForStatus('', cellData.status) + ' server-dashboard-grid-cell-content'} > {cellData.usage ? cellData.usage + '%' : '--'}</div>; },
    cellClassName: 'border-column-cell',
    isSortable: true
}, {
    valueMember: 'Memory',
    headerText: 'Memory',
    width: 20,
    minWidth: 200,
    dataMember: 'MemoryData',
    cellFormatter: (cellData) => {
        const memory = convertRam(cellData);
        return <div className={GetClassForStatus('', memory.status) + ' server-dashboard-grid-cell-content'}> {memory.usageUnit ? memory.hoverText : '--'}</div>;
    },
    cellClassName: 'border-column-cell',
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
    width: 20,
    minWidth: 200,
    cellFormatter: (cellData) => {
        const disk = convertDisk(cellData);
        return <div className={GetClassForStatus('', disk.status) + ' server-dashboard-grid-cell-content'}> {disk.currentUsage + ' ' + disk.usageUnit}</div>;
    },
    cellClassName: 'border-column-cell',
    isSortable: true
}, {
    valueMember: 'Network',
    headerText: 'Network',
    dataMember: 'NetworkData',
    width: 20,
    minWidth: 200,
    cellFormatter: (cellData) => {
        const network = convertNetwork(cellData);
        return <div className={GetClassForStatus('', network.status) + ' server-dashboard-grid-cell-content'}> {network.currentUsage + ' ' + network.usageUnit}</div>;
    },
    isSortable: true
}];

export class ServerGridDashboard extends React.Component<IServerGridDashboardProps, IServerGridDashboardState> {
    private grid;
    constructor(props: IServerGridDashboardProps) {
        super(props);
        this.state = {
            rows: this.transformFarmToRows(props.farms, props.filter),
            expandedRows: {},
            groupBy: ['FarmName']
        };
    }

    componentWillReceiveProps(nextProps) {
        this.setState((oldState) => {
            return { ...oldState, rows: this.transformFarmToRows(nextProps.farms, nextProps.filter) };
        });
    }

    private transformFarmToRows(farms: Array<ITiledDashboardFarm>, filter: string): Array<ServerGridRow> {
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
        return (
            <div className={className}>
                <QuickGrid
                    rows={this.state.rows}
                    columns={gridColumns}
                    groupBy={this.state.groupBy}
                    rowHeight={28}
                    headerHeight={28}
                    overscanRowCount={30}
                    onRowDoubleClicked={this.onRowDoubleClick}
                    sortColumn="ServerName"
                    sortDirection="ASC"
                    highlightHoverRow={true}
                />
            </div>
        );
    }

    @autobind
    private onRowDoubleClick(row: ServerGridRow) {
        const { serverOnClick } = this.props;

        if (serverOnClick) {
            serverOnClick(row.GroupId, row.ServerId);
        }
    }
}

