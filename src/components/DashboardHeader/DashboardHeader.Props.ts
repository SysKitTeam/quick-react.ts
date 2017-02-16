import * as React from 'react';

export enum ActiveDashboard {
    Compact = 0,
    Tiles = 1,
    Grid = 2
}

export interface IDashboardHeaderProps {
    title: string;
    filter: string;
}
