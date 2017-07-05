import * as React from 'react';
import { IServer, ServerStatus, Partition, IRole } from '../../models';

export interface IServerTileProps {
    id: string;
    name: string;
    status: ServerStatus;
    roles: Array<IRole>;
    numberOfUsers?: string;
    diskInformation?: Array<Partition>;
    countersData: Array<ITileData>;
    onRoleEdit?: (serverId: string) => void;
    onClose?: (serverId: string) => void;
    serverOnClick?: (serverId: any) => void;
}

export interface ITileData {
    status: ServerStatus;
    title: string;
    currentUsage: string;
    hoverText: Array<string>;
    usageUnit: string;
}
