import * as React from 'react';

export enum SortDirection {
    Ascending,
    Descending
}
export interface IQuickGridProps {
    rows: Array<any>;
    columns: Array<GridColumn>;
    groupBy: Array<string>;
    gridClassName?: string;
    headerClassName?: string;
    rowHeight: number | ((info: { index: number }) => number); // Number or a function that returns the height of a row given its index
    headerHeight: number;
    overscanRowCount?: number;
    onSelectedRowChanged?: (selectedRowIndex: number) => void;
    onRowDoubleClicked?: (row: any) => void;
    displayGroupContainer?: boolean;

    sortColumn?: string;
    sortDirection?: SortDirection;
    onGroupByChanged?: (groupBy: Array<string>) => void;

    groupBySortColumn?: string;
    groupBySortDirection?: SortDirection;
    onGroupBySort?: (sortBy: string, sortDirection: SortDirection) => void;
}

export interface IQuickGridState {
    sortColumn?: string;
    sortDirection?: SortDirection;
    groupBySortColumn?: string;
    groupBySortDirection?: SortDirection;
    expandedRows: any;
    columnWidths: Array<number>;
    selectedRowIndex?: number;
    columnsToDisplay: Array<GridColumn>;
}

export interface GroupRow {
    type: 'GroupRow';
    columnGroupName: string;
    name: string;
    depth: number;
    groupKey: string;
    isExpanded: boolean;
}

export interface GridColumn {
    headerText: string;
    valueMember: string; // for sort & grouping
    isSortable?: boolean;
    isGroupable?: boolean;
    sortByValueGetter?: (cellData, sortDirection: SortDirection) => any;
    width: number;
    minWidth?: number;
    dataMember?: string;
    cellFormatter?: (cellData) => any;
    cellClassName?: string;
    headerClassName?: string;
}
