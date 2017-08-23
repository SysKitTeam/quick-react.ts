import {ServerStatus} from './ServerStatus';

export enum MeasureType {
    Ram = 0,
    CPU = 1,
    Disk = 2,
    Network = 3
}

export interface IMeasure {
    type: MeasureType;
    time: Date;    
    status?: ServerStatus;
}

export interface Partition {
    name: string;
    fullName?: string;
    used: number;
    capacity: number;
    usageUnit: string;
    id: number;  
    status?: ServerStatus;
}

export interface DiskMeasure extends IMeasure {
    partitions: Array<Partition>;    
    totalDiskIo: number;
    type: MeasureType.Disk;
}

export interface CpuMeasure extends IMeasure {
    type: MeasureType.CPU;
    usage: number;
    speed: number;
    coreCount: number;
    logicalCoreCount: number;
    name: string;
}

export interface RamMeasure extends IMeasure {
    type: MeasureType.Ram;
    used: number;
    capacity: number;
}

export interface NetworkMeasure extends IMeasure {
    kbTotal: number;
    type: MeasureType.Network;
}


