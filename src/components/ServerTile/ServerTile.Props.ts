import * as React from 'react';
import { ISharePointServer, ServerStatus, Partition } from '../../models';

export interface IServerTileProps extends ISharePointServer {
    numberOfUsers?: string;
    diskInformation?: Array<Partition>;
    countersData: Array<ITileData>;
    serverOnClick?: (serverId: any) => void;
}

export interface ITileData {
    status: ServerStatus;
    title: string;
    currentUsage: string;
    hoverText: Array<string>;
    usageUnit: string;
}
