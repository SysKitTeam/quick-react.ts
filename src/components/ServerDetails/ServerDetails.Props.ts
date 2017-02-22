export interface IServerDetailsProps {
    serverStatus: string;
    serverName: string;
    serverType: string;
    serverTypeIcon: string;
    serverRoles: Array<IServerRole>;
    fqdmServerName: string;
    numberOfUsers?: string;
    headerDiskData: IHeaderDiskData;
    diskData: IDiskData;
    cpuData: ICpuData;
    networkData: INetworkData;
    memoryData: IMemoryData;
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
    committedMemory: string;
}

export interface IDiskData {
    status: string;
    currentRWSpeed: string;
    rwSpeedsPerPartition: Array<string>;
}

export interface INetworkData {
    status: string;
    currentSpeed: string;
    speedsPerInterface: Array<string>;
}