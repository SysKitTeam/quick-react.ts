import * as React from 'react';
import { PivotItem } from '../Pivot/PivotItem';
import { IPivotItemProps } from '../Pivot/PivotItem.Props';

export enum ActiveDashboard {
    CompactHorizontal = 0,
    CompactVertical = 1,
    Tiles = 2,
    Grid = 3
}

export interface IDashboardHeaderProps {
    title: string;
    filter: string;
    headerClass?: string;
    hasAddFarmButton?: boolean;
    onViewChange: (item?: PivotItem, ev?: React.MouseEvent<any>) => void;
    onSearch?: (newValue: any) => void;
    onChanged?: (newValue: any) => void;
    onAddFarmClick?: () => void;
    pivotItems?: { [id: number]: IPivotItemProps };
    selectedDashboardKey: any;
}
