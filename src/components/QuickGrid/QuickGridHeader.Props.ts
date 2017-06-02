import { GridColumn, SortDirection } from './QuickGrid.Props';

export interface IGridHeaderProps {
    allColumns: Array<GridColumn>;
    headerColumns: Array<GridColumn>;
    groupBy: Array<string>;
    columnWidths: Array<number>;
    onResize: (newColumnWidths) => void;

    sortColumn?: string;
    sortDirection?: SortDirection;
    onSort: (sortBy: string, sortDirection: SortDirection) => void;

    groupBySortColumn?: string;
    groupBySortDirection?: SortDirection;
    onGroupBySort?: (sortBy: string, sortDirection: SortDirection) => void;

    className?: string;
    width: number;
    scrollLeft: any;
    displayGroupContainer: boolean;
    onGroupByChanged?: (groupBy: Array<string>) => void;
}

export interface IGridHeaderState {
    columnWidths: Array<number>;
}
