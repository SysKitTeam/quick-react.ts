import * as React from 'react';
import {ISharePointServer} from '../../models';

export interface IDetailServerProps extends ISharePointServer {
    numberOfUsers?: string;  

    memoryUsage?: IMemoryUsage;
    partitionUsages?: Array<IPartitionUsage>;
    processorUsage?: Array<IProcessorUsage>;
}

export interface IProcessorUsage {
    time: number;
    usage: number;
}

export interface IPartitionUsage {
    name: string;
    usageUnit: string;
    capactiy: number;
    used: number;
}

export interface IMemoryUsage {
    usageUnit: string;
    capactiy: number;
    used: number;
}
