import * as React from 'react';

export interface IServerDetailsProps {
    serverId: string;
    serverStatusClass: string;
    serverName: string;
    fqdmServerName: string;
    numberOfUsers?: string;
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
