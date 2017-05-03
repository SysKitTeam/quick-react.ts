import * as React from 'react';
import { IServerGridDashboardProps, ServerGridRow } from './ServerGridDashboard.Props';
import { ITiledDashboardFarm } from '../TileDashboard/TileDashboard.Props';
import * as classNames from 'classnames';
import { Icon } from '../Icon/Icon';
import { autobind } from '../../utilities/autobind';
import { ProgressBar } from '../ProgressBar/ProgressBar';
import { QuickGrid } from '../Grid/Grid';
import { IGridProps, GridColumn } from '../Grid/Grid.Props';
import { GetClassForStatus } from '../../utilities/server';

const objectAssign = require('object-assign');

import { sortServersByStatusAndName, filterServerByName, convertNetwork, convertDisk } from '../../utilities/server';
import { IMeasure, MeasureType, IFarm, Partition, DiskMeasure, CpuMeasure, RamMeasure, NetworkMeasure, ServerStatus } from '../../models';

import './ServerGridDashboard.scss';
class ServerGrid extends QuickGrid<ServerGridRow> { }

const getMeasure = (measures, measureType) => {
    return measures.filter((mes) => { return mes.type === measureType; })[0];
};

const gridColumns: Array<GridColumn> = [{
    valueMember: 'FarmName',
    HeaderText: 'Farm',
    width: 20,
    minWidth: 50
}, {
    valueMember: 'ServerName',
    HeaderText: 'Server',
    dataMember: 'ServerData',
    width: 20,
    minWidth: 200,

    cellFormatter: (cellData) => {
        return (
            <div>
                <div className={GetClassForStatus('server-status', cellData.status)}>&nbsp;</div>
                <span>{cellData.name}</span>
            </div>
        );
    }
},
{
    valueMember: 'CPU',
    HeaderText: 'CPU (%)',
    dataMember: 'CPUData',
    width: 20,
    minWidth: 200,
    cellFormatter: (cellData) => { return <div className={GetClassForStatus('', cellData.status)} > {cellData.usage}</div>; }
}, {
    valueMember: 'Memory',
    HeaderText: 'Memory',
    width: 20,
    minWidth: 200,
    dataMember: 'MemoryData',
    cellFormatter: (cellData) => { return <div className={GetClassForStatus('', cellData.status)}> {cellData.used}</div>; }
},
{
    valueMember: 'DiskActivity',
    HeaderText: 'Disk Activity',
    dataMember: 'DiskActivityData',
    width: 20,
    minWidth: 200,
    cellFormatter: (cellData) => { return <div className={GetClassForStatus('', cellData.status)}> {cellData.currentUsage}</div>; }

}, {
    valueMember: 'Network',
    HeaderText: 'Network',
    dataMember: 'NetworkData',
    width: 20,
    minWidth: 200,
    cellFormatter: (cellData) => { return <div className={GetClassForStatus('', cellData.status)}> {cellData.currentUsage}</div>; }
}];

export interface IServerGridDashboardState {
    rows: Array<ServerGridRow>;
    groupBy: Array<string>;
    expandedRows: any;
    sortColumn: string;
    sortDirection: any;
}

export class ServerGridDashboard extends React.Component<IServerGridDashboardProps, IServerGridDashboardState> {
    private grid;
    constructor(props: IServerGridDashboardProps) {
        super(props);
        this.state = {
            rows: this.transformFarmToRows(props.farms),
            expandedRows: {},
            groupBy: ['FarmName'],
            sortColumn: 'ServerName',
            sortDirection: 'DESC'
        };
    }

    private transformFarmToRows(farms: Array<ITiledDashboardFarm>): Array<ServerGridRow> {
        let rows = [];
        farms.forEach(farm => {
            farm.servers.forEach(server => {
                const cpu = getMeasure(server.measures, MeasureType.CPU);
                const mem = getMeasure(server.measures, MeasureType.Ram);
                const disk = getMeasure(server.measures, MeasureType.Disk);
                const net = getMeasure(server.measures, MeasureType.Network);
                rows.push({
                    FarmName: farm.name,
                    UserCount: server.numberOfUsers,
                    ServerName: server.name,
                    ServerData: { name: server.name, status: server.status },
                    CPU: cpu.usage,
                    CPUData: cpu,
                    Memory: mem.used,
                    MemoryData: mem,
                    DiskActivity: disk.totalDiskIo,
                    DiskActivityData: convertDisk(disk),
                    Network: net.kbTotal,
                    NetworkData: convertNetwork(net)
                });
            });
        });
        return rows;
    }

    render() {
        let classname = classNames({ [this.props.className]: this.props.className !== undefined }, 'server-grid-dashboard-container');

        return (
            <div className={classname}>
                <ServerGrid
                    rows={this.state.rows}
                    columns={gridColumns}
                    groupBy={this.state.groupBy}
                    rowHeight={28}
                    headerHeight={28}
                    overscanRowCount={30}
                />
            </div>
        );
    }
}

