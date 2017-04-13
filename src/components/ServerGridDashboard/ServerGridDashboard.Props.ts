import * as React from 'react';
import { ISharePointServer, IHazMeasures, IFarm } from '../../models';
import { ITiledDashboardFarm } from '../TileDashboard/TileDashboard.Props';

export interface IServerGridDashboardProps {
    farms: Array<ITiledDashboardFarm>;
}

export interface DataRow {
    type: 'DataRow';
    FarmName: string;
    UserCount: string;
    CPU: string;
    Memory: string;
    Disk: string;
    DiskActivity: string;
    Network: string;
    LastUpdated: string;
}

export interface GroupRow {
    type: 'GroupRow';
    columnGroupName: string;
    name: string;
    depth: number;
    isExpanded: boolean;
}

export interface GridColumn {
     key: string;
    name: string;
    width: number;
    customRenderer?: ({ cellData, columnData, dataKey, rowData, rowIndex}) => any;
}

export type ServerGridRow = DataRow | GroupRow;
