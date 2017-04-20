import * as React from 'react';
import { IServerGridDashboardProps, ServerGridRow } from './ServerGridDashboard.Props';
import { ITiledDashboardFarm } from '../TileDashboard/TileDashboard.Props';
import * as classNames from 'classnames';
import { Icon } from '../Icon/Icon';
import { autobind } from '../../utilities/autobind';
import { ProgressBar } from '../ProgressBar/ProgressBar';

import { Grid } from '../Grid/Grid';
import { IGridProps, GridColumn, RowSelectorProps } from '../Grid/Grid.Props';

const objectAssign = require('object-assign');

import { sortServersByStatusAndName, filterServerByName, convertCPU, convertNetwork, convertDisk, convertRam } from '../../utilities/server';
import { IMeasure, MeasureType, IFarm, Partition, DiskMeasure, CpuMeasure, RamMeasure, NetworkMeasure, ServerStatus } from '../../models';

import './ServerGridDashboard.scss';

class ServerGrid extends Grid<ServerGridRow> { }

const gridColumns: Array<GridColumn> = [{
    valueMember: 'FarmName',
    HeaderText: 'Farm Name',
    width: 120,
    cellFormatter: (cellData) => {
        return cellData; 
    }
},
{
    valueMember: 'ServerName',
    HeaderText: 'Server Name',
    width: 100,
    cellClassName: '',
},
{
    valueMember: 'UserCount',
    HeaderText: 'User Count',
    width: 100,
     cellFormatter: (cellData) => {
        return cellData + ' users'; 
    }
}, {
    valueMember: 'CPU',
    HeaderText: 'CPU',
    width: 120,
     cellFormatter: (cellData) => {
        return cellData + ' %'; 
    }
}, {
    valueMember: 'Memory',
    HeaderText: 'Memory',
    width: 120,
    dataMember: 'MemoryData',
    cellFormatter: (cellData) => {
        return (
            <ProgressBar
                title={'RAM'}
                info={cellData.used + ' of ' + cellData.capacity + ' used'}
                dimensions={{ height: '40px', width: '100%' }}
                data={{ total: cellData.capacity, current: cellData.used }}
                progressColor={getProgressColor(cellData.status)}
                />
        );
    }
}, {
    valueMember: 'DiskSpace',
    HeaderText: 'Disk Space',
    width: 120,
},
{
    valueMember: 'DiskActivity',
    HeaderText: 'Disk Activity',
    width: 120,
}, {
    valueMember: 'Network',
    HeaderText: 'Network',
    width: 80,
}, {
    valueMember: 'LastUpdated',
    HeaderText: 'Last Updated',
    width: 100,
}];

const getProgressColor = (status) => {
    if (status === ServerStatus.Critical) {
        return '#fb6464';
    } else if (status === ServerStatus.Warning) {
        return '#EAC71A';
    } else if (status === ServerStatus.OK) {
        return '#7DC458';
    }
    return undefined;
};

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
            sortDirection: 'DESC',
        };
    }

    private transformFarmToRows(farms: Array<ITiledDashboardFarm>): Array<ServerGridRow> {
        let rows = [];
        farms.forEach(farm => {
            farm.servers.forEach(server => {
                const cpu = this.getConvertedMeasure(server.measures, MeasureType.CPU, convertCPU);
                const mem = this.getConvertedMeasure(server.measures, MeasureType.Ram, convertRam);
                const disk = this.getConvertedMeasure(server.measures, MeasureType.Disk, convertDisk);
                const net = this.getConvertedMeasure(server.measures, MeasureType.Network, convertNetwork);
                rows.push({
                    FarmName: farm.name,
                    ServerName: server.name,
                    UserCount: server.numberOfUsers,
                    CPU: (server.measures.filter((mes) => { return mes.type === MeasureType.CPU; })[0] as CpuMeasure).usage,
                    Memory: (server.measures.filter((mes) => { return mes.type === MeasureType.Ram; })[0] as RamMeasure).used,
                    MemoryData: server.measures.filter((mes) => { return mes.type === MeasureType.Ram; })[0],
                    DiskSpace: 30,
                    DiskActivity: disk,
                    Network: net,
                    LastUpdated: Math.round(Math.random() * 3).toString() + ' sec'
                });
            });
        });
        return rows;
    }

    private getConvertedMeasure(measures, measureType, convertFunction): string {
        const measure = measures.filter((mes) => { return mes.type === measureType; })[0];
        if (measure !== undefined) {
            const converted = convertFunction(measure);
            return converted.currentUsage + ' ' + converted.usageUnit;
        }
        return '-';
    }

    
    render() {        
        return (
            <div className={'grid-container-content'}>
                <ServerGrid
                    rows={this.state.rows}
                    columns={gridColumns}
                    groupBy={this.state.groupBy}
                    rowHeight={150}
                    headerHeight={40}
                    />
            </div>
        );
    }
}
