import * as React from 'react';
import {ISharePointServer, ServerStatus} from '../../models';

export interface IServerTileProps extends ISharePointServer {
    numberOfUsers?: string;
    /**
     * Disk information that is displayed on icon hover in the header of the component.
     * Each row should display the partition name, as well as the usage of each one. 
     */
    diskInformation?: Array<string>;
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
