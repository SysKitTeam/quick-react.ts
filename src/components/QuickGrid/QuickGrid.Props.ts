import * as React from 'react';

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
    sortDirection?: 'ASC' | 'DESC';
    onGroupByChanged?: (groupBy: Array<string>) => void;

    groupBySortColumn?: string;
    groupBySortDirection?: 'ASC' | 'DESC';
    onGroupBySort?: (sortBy: string, sortDirection: string) => void;
}

export interface IQuickGridState {
    sortColumn?: string;
    sortDirection?: 'ASC' | 'DESC';
    groupBySortColumn?: string;
    groupBySortDirection?: 'ASC' | 'DESC';
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
    sortByValueGetter?: (cellData, sortDirection) => any;
    width: number;
    minWidth?: number;
    dataMember?: string;
    cellFormatter?: (cellData) => any;
    cellClassName?: string;
    headerClassName?: string;
}

