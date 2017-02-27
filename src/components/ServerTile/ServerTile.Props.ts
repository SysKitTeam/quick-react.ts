import * as React from 'react';

export interface IServerTileProps {
    serverId: string;
    serverStatusClass: string;
    serverName: string;
    serverFqdn: string;
    numberOfUsers?: string;
    disks: Array<string>;
    hasCloseButton?: boolean;
    onDismiss?: (serverId: string, ev?: React.MouseEvent<HTMLElement>) => any;
    countersData: Array<IServerCountersData>;
}

export interface IServerCountersData {
    status: string;
    title: string;
    currentUsage: string;
    usageUnit: string;
    totalUsage: Array<string>;
}
