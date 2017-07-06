import * as React from 'react';
import { IGroup } from '../../models';
import { IGroupBy } from '../QuickGrid';

export interface IServerGridDashboardProps {
    farms: Array<IGroup>;
    className?: string;
    serverOnClick?: (groupId: any, serverId: any) => void;
    filter: string;
    singleGroupView?: boolean;
}
export interface ServerGridRow {
    type: 'DataRow';
    GroupId: any;
    ServerId: any;
    FarmName: string;
    UserCount: string;
    CPU: number;
    Memory: number;
    Disk: number;
    DiskActivity: number;
    Network: number;
    LastUpdated: number;
}

export interface IServerGridDashboardState {
    rows: Array<ServerGridRow>;
    groupBy: Array<IGroupBy>;
    expandedRows: any;

}
