import * as React from 'react';

export interface IServerDetailsProps {
    serverId: string;
    serverStatusClass: string;
    serverName: string;
    serverFqdm: string;
    numberOfUsers?: string;
    disks: Array<string>
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
