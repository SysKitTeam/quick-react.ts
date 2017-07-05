const createSelector = require('reselect').createSelector;
import { IQuickGridState, IQuickGridProps, GridColumn, SortDirection } from './QuickGrid.Props';
import { groupRows } from './rowGrouper';
import * as _ from 'lodash';

const getInputRows = (state: IQuickGridState, props: IQuickGridProps) => props.rows;
const getGroupBy = (state: IQuickGridState, props: IQuickGridProps) => props.groupBy;
const getExpandedRows = (state: IQuickGridState, props: IQuickGridProps) => state.expandedRows;
const getSortColumn = (state: IQuickGridState, props: IQuickGridProps) => state.sortColumn;
const getSortDirection = (state: IQuickGridState, props: IQuickGridProps) => state.sortDirection;
const getGroupBySortColumn = (state: IQuickGridState, props: IQuickGridProps) => state.groupBySortColumn;
const getGroupBySortDirection = (state: IQuickGridState, props: IQuickGridProps) => state.groupBySortDirection;
const getColumns = (state: IQuickGridState, props: IQuickGridProps) => props.columns;

const sortRows = (rows: Array<any>, sortColumn: string, sortDirection: SortDirection, groupedColumn: Array<string>, columns: Array<GridColumn>, groupBySortColumn: string, groupBySortDirection: SortDirection) => {
    const columnSortDir: string = sortDirection === SortDirection.Descending ? 'desc' : 'asc';
    let sortFunction = (rowData: any, direction: SortDirection) => {
        return rowData[sortColumn];
    };

    let column = columns.filter(x => x.valueMember === sortColumn)[0];
    if (column && column.sortByValueGetter) {
        sortFunction = column.sortByValueGetter;
    }

    if (groupedColumn.length > 0) {
        const groupSortDir: string = groupBySortDirection === SortDirection.Descending ? 'desc' : 'asc';
        const groupSortBy = (groupBySortColumn !== undefined && groupBySortColumn !== '') ? groupBySortColumn : groupedColumn[0];
        if (sortColumn) {
            return _.orderBy(rows, [groupSortBy, function (data) { return sortFunction(data, sortDirection); }], [groupSortDir, columnSortDir]);
        } else {
            return _.orderBy(rows, groupSortBy, groupSortDir);
        }
    } else if (sortColumn) {
        return _.orderBy(rows, function (data) { return sortFunction(data, sortDirection); }, columnSortDir);
    }
    return rows;
};

const getSortedRows = createSelector(getInputRows, getSortColumn, getSortDirection, getGroupBy, getColumns, getGroupBySortColumn, getGroupBySortDirection,
    (rows, sortColumn, sortDirection, groupBy, columns, groupBySortColumn, groupBySortDirection) => {
        return sortRows(rows, sortColumn, sortDirection, groupBy, columns, groupBySortColumn, groupBySortDirection);
    });

export const getRowsSelector = createSelector(getSortedRows, getGroupBy, getExpandedRows, (rows, groupedColumns, expandedRows = {}) => {
    return groupRows(rows, groupedColumns, expandedRows);
});
