import * as React from 'react';

export enum ServerStatus{
    OK = 0,
    Warning = 1,
    Critical = 2
}

export interface IClassNames{
    'ok': string,
    'warning': string,
    'critical': string
}

export interface ICompactServerProps{
    serverName: string;
    roleList: Array<{display: string, iconName: string, className?: string}>;
    status: ServerStatus;
    classNameList: IClassNames;
    onClick: () => any;
}