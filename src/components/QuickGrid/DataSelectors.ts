const createSelector = require('reselect').createSelector;
import { IQuickGridState, IQuickGridProps, GridColumn, SortDirection, IGroupBy } from './QuickGrid.Props';
import { groupRows } from './rowGrouper';
import * as _ from 'lodash';

const getInputRows = (state: IQuickGridState, props: IQuickGridProps) => props.rows;
const getGroupBy = (state: IQuickGridState, props: IQuickGridProps) => state.groupBy;
const getExpandedRows = (state: IQuickGridState, props: IQuickGridProps) => state.expandedRows;
const getSortColumn = (state: IQuickGridState, props: IQuickGridProps) => state.sortColumn;
const getSortDirection = (state: IQuickGridState, props: IQuickGridProps) => state.sortDirection;
const getColumns = (state: IQuickGridState, props: IQuickGridProps) => props.columns;

const sortRows = (rows: Array<any>, sortColumn: string, sortDirection: SortDirection, groupedColumn: Array<IGroupBy>, columns: Array<GridColumn>) => {
    const columnSortDir: string = sortDirection === SortDirection.Descending ? 'desc' : 'asc';
    if (groupedColumn.length > 0) {
        let sortColumns = [];
        let sortDirections = [];
        for (let groupColumn of groupedColumn) {
            const groupSortDirection: string = groupColumn.sortDirection === SortDirection.Descending ? 'desc' : 'asc';
            sortColumns.push(groupColumn.column);
            sortDirections.push(groupSortDirection);
        }
        if (sortColumn) {
            sortColumns.push(sortColumn);
            sortDirections.push(columnSortDir);
        }
        return _.orderBy(rows, sortColumns, sortDirections);
    } else if (sortColumn) {
        return _.orderBy(rows, sortColumn, columnSortDir);
    }
    return rows;
};

const getSortedRows = createSelector(getInputRows, getSortColumn, getSortDirection, getGroupBy, getColumns,
    (rows, sortColumn, sortDirection, groupBy, columns) => {
        return sortRows(rows, sortColumn, sortDirection, groupBy, columns);
    });

export const getRowsSelector = createSelector(getSortedRows, getGroupBy, getExpandedRows, (rows, groupedColumns, expandedRows = {}) => {
    return groupRows(rows, groupedColumns, expandedRows);
});
