import * as React from 'react';

export interface IGridProps<T> {
    rows: Array<any>;
    columns: Array<GridColumn>;
    groupBy: Array<string>;

    sortColumn?: string;
    sortDirection?: string;
}

export interface IGridState {
    rows: Array<any>;
    groupBy: Array<string>;
    expandedRows: any;
    
    sortColumn: string;
    sortDirection: any;
}

export type GridRow = any | GroupRow;

export interface GroupRow {
    type: 'GroupRow';
    columnGroupName: string;
    name: string;
    depth: number;
    isExpanded: boolean;
}

export interface GridColumn {
    valueMember: string;    
    HeaderText: string;
    width: number;
    dataMember?: string;
    cellFormatter?: (cellData) => any;
}

export interface RowState {
    rows: any;
    groupedColumns: any;
    expandedRows: any;
    sortColumn: any;
    sortDirection: any;
}
