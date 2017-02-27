import * as React from 'react';
import {ISharePointServer} from '../../models';

export interface IServerTileProps extends ISharePointServer {
    numberOfUsers?: string;
    /**
     * Disk information that is displayed on icon hover in the header of the component.
     * Each row should display the partition name, as well as the usage of each one. 
     */
    diskInformation: Array<string>;
    hasCloseButton?: boolean;    
    countersData: Array<ITileData>;
}

export interface ITileData {
    status: string;
    title: string;
    currentUsage: string;
    hoverText: Array<string>;
    usageUnit: string;
}
