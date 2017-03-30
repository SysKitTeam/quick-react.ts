import * as React from 'react';
import {ISharePointServer, ServerStatus } from '../../models';

export interface IDetailedServerProps extends ISharePointServer {
    numberOfUsers?: string;  

    memoryUsage?: IMemoryUsage;
    partitionUsages?: Array<IPartitionUsage>;
    processorUsage?: IProcessorUsage;
}

export interface IProcessorUsage {
    data: Array<IProcessorUsageData>;
    status: ServerStatus;
}

export interface IProcessorUsageData {
    time: Date;
    usage: number;
}

export interface IPartitionUsage {
    name: string;
    usageUnit: string;
    capacity: number;
    used: number;
    status: ServerStatus;    
}

export interface IMemoryUsage {
    usageUnit: string;
    capactiy: number;
    used: number;
    status: ServerStatus;
}
