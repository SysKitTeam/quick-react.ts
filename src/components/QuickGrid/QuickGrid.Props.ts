import * as React from 'react';

export interface IQuickGridProps {
    rows: Array<any>;
    columns: Array<GridColumn>;
    groupBy: Array<string>;
    gridClassName?: string;
    headerClassName?: string;
    sortColumn?: string;
    sortDirection?: 'ASC' | 'DESC';
    rowHeight: number | ((info: { index: number }) => number); // Number or a function that returns the height of a row given its index
    headerHeight: number;
    overscanRowCount?: number;
    highlightHoverRow?: boolean;
    onSelectedRowChanged?: (selectedRowIndex: number) => void;
    onRowDoubleClicked?: (row: any) => void;
}

export interface IQuickGridState {
    sortColumn?: string;
    sortDirection?: 'ASC' | 'DESC';
    expandedRows: any;
    columnWidths: Array<number>;
    selectedRowIndex?: number;
    hoverRowIndex?: number;
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
    sortByValueGetter?: (cellData, sortDirection) => any;
    width: number;
    minWidth?: number;
    dataMember?: string;
    cellFormatter?: (cellData) => any;
    cellClassName?: string;
    headerClassName?: string;
}

