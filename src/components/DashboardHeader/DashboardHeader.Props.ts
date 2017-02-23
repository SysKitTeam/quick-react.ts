import * as React from 'react';
import { PivotItem } from '../Pivot/PivotItem';

export enum ActiveDashboard {
    CompactHorizontal = 0,
    CompactVertival = 1,
    Tiles = 2,
    Grid = 3
}

export interface IDashboardHeaderProps {
    title: string;
    filter: string;
    onViewChange: (item?: any) => void;
    onSearch?: (newValue: any) => void;
    onChanged?: (newValue: any) => void;
}
