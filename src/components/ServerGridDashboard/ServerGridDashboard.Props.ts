import * as React from 'react';
import { ISharePointServer, IHazMeasures, IFarm } from '../../models';
import { ITiledDashboardFarm } from '../TileDashboard/TileDashboard.Props';

export interface IServerGridDashboardProps {
    farms: Array<ITiledDashboardFarm>;
    className?: string;
}
export interface ServerGridRow {
    type: 'DataRow';
    FarmName: string;
    UserCount: string;
    CPU: number;
    Memory: number;
    Disk: number;
    DiskActivity: number;
    Network: number;
    LastUpdated: number;
}
