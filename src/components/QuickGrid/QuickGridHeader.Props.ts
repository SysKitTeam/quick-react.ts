import { GridColumn } from './QuickGrid.Props';

export interface IGridHeaderProps {
    allColumns: Array<GridColumn>;
    headerColumns: Array<GridColumn>;
    groupBy: Array<string>;
    columnWidths: Array<number>;
    onResize: (newColumnWidths) => void;

    sortColumn?: string;
    sortDirection?: 'ASC' | 'DESC';
    onSort: (sortBy: string, sortDirection: string) => void;

    groupBySortColumn?: string;
    groupBySortDirection?: 'ASC' | 'DESC';
    onGroupBySort?: (sortBy: string, sortDirection: string) => void;
    
    className?: string;
    width: number;
    scrollLeft: any;
    displayGroupContainer: boolean;
    onGroupByChanged?: (groupBy: Array<string>) => void;
}



export interface IGridHeaderState {
    columnWidths: Array<number>;
}
