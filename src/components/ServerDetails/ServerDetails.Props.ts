import * as React from 'react';

export interface IServerDetailsProps {
    serverStatus: string;
    serverId: string;
    serverName: string;
    serverRoles: Array<IServerRole>;
    fqdmServerName: string;
    numberOfUsers?: string;
    headerDiskData: IHeaderDiskData;
    diskData: IDiskData;
    cpuData: ICpuData;
    networkData: INetworkData;
    memoryData: IMemoryData;
    hasCloseButton?: boolean;
    onDismiss?: (serverId: string, ev?: React.MouseEvent<HTMLElement>) => any;
}

export interface IServerRole{
    roleName: string;
    roleIcon: string;
}

export interface IHeaderDiskData {
    status: string;
    disksInfo: Array<string>;
}

export interface ICpuData {
    status: string;
    cpuUtilization: string;
}

export interface IMemoryData {
    status: string;
    memoryUsage: string;
    memoryUsageUnit: string;
    committedMemory: string;
}

export interface IDiskData {
    status: string;
    currentRWSpeed: string;
    rwSpeedUnit: string;
    rwSpeedsPerPartition: Array<string>;
}

export interface INetworkData {
    status: string;
    currentSpeed: string;
    currentSpeedUnit: string;
    speedsPerInterface: Array<string>;
}