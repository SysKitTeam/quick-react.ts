import * as React from 'react';

export interface IGridProps<T> {
    rows: Array<T | GroupRow>;
    columns: Array<GridColumn>;
    groupBy: Array<string>;
    gridClassName?: string;
    headerClassName?: string;
    sortColumn?: string;
    sortDirection?: 'ASC' | 'DESC';
    rowHeight: number | ((info: { index: number }) => number); // Number or a function that returns the height of a row given its index
    headerHeight: number;
    overscanRowCount?: number;
}

export interface IGridState {
    rows: Array<any>;
    groupBy: Array<string>;
    expandedRows: any;
    columnWidths: Array<number>;
    sortColumn: string;
    sortDirection: 'ASC' | 'DESC';
    columns: Array<GridColumn>;
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
    HeaderText: string;
    valueMember: string; // for sort & grouping
    width: number;
    minWidth?: number;
    dataMember?: string;
    cellFormatter?: (cellData) => any;
    cellClassName?: string;
    disableSort?: boolean;
    headerClassName?: string;
}

