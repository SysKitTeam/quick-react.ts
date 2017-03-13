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

export interface IHazMeasures {
    measures: Array<IMeasure>;
}

export interface Partition {
    name: string;
    freeMB: number;
    size: number;
    readSpeed: number;
    writeSpeed: number;
}

export interface DiskMeasure extends IMeasure {
    partitions: Array<Partition>;    
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
    kBRecieved: string;
    kbSent: string;
    type: MeasureType.Network;
}


