import * as React from 'react';
import { PivotItem } from '../Pivot/PivotItem';
import { IPivotItemProps } from '../Pivot/PivotItem.Props';
import { IDropdownOption } from '../Dropdown/Dropdown.Props';
import { IFilteringOption } from '../FilteringBar/FilteringBar.Props';

export enum ActiveDashboard {
    CompactHorizontal = 0,
    CompactVertical = 1, // deprecated
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
    selectedGrouping: number;
    selectedFilteringOptions: Array<string>;
    onGroupingChange: (groupingKey: number) => void;
    onFilteringOptionsChange: (selectedFilteringOptions: Array<IFilteringOption>) => void;
}

export interface IDashboardHeaderState {
    filterMenuOpen: boolean;
    selectedFilterOptions: Array<string>;
}

export const groupingOptions: Array<IDropdownOption> = [
    {
        key: '0',
        text: 'Smart'
    },
    {
        key: '1',
        text: 'Type'
    },
    {
        key: '2',
        text: 'Status'
    },
    {
        key: '3',
        text: 'None'
    }
];
