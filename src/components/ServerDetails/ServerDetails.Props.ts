export interface IServerDetailsProps {
    serverStatus: string;
    networkData: INetworkData;
    diskData: IDiskData;
    memoryData: IMemoryData;
    headerData: IHeaderData;
    cpuData: ICpuData;
}

export interface IHeaderData {
    serverName: string;
    fqdmServerName: string;
    diskData: IHeaderDiskData;
    numberOfUsers?: number;
}

export interface IHeaderDiskData {
    status: string;
    disks: IDiskDetails[];
}

export interface IDiskDetails {
    driveLetter: string;
    sizeInUse: string;
    totalSize: string;
    filledPercentage: string;
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
    rwSpeedsPerPartition: string[];
}

export interface INetworkData {
    status: string;
    currentSpeed: string;
    speedsPerInterface: string[];
}

