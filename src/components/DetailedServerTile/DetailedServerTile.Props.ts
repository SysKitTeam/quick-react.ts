import * as React from 'react';
import {IServer, ServerStatus, IRole } from '../../models';

export interface IDetailedServerProps {
    id: string;
    name: string;
    status: ServerStatus;
    roles: Array<IRole>;
    filter?: string; 
    onRoleEdit?: (serverId: string) => void;
    onClose?: (serverId: string) => void;
    numberOfUsers?: string;
    memoryUsage?: IMemoryUsage;
    partitionUsages?: Array<IPartitionUsage>;
    processorUsage?: IProcessorUsage;
    serverOnClick?: (serverId: any) => void;
    criticalColor?: string;
    warningColor?: string;
    okColor?: string;
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
    className?: string;
    id?: string;
    name: string;
    usageUnit: string;
    capacity: number;
    used: number;
    status: ServerStatus;    
}

export interface IMemoryUsage {
    usageUnit: string;
    capacity: number;
    used: number;
    status: ServerStatus;
}
