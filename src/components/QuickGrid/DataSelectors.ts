const createSelector = require('reselect').createSelector;
import { IQuickGridState, IQuickGridProps, GridColumn, SortDirection, IGroupBy } from './QuickGrid.Props';
import { groupRows } from './rowGrouper';
import * as _ from 'lodash';
import { SortProps, sortArray } from '../../utilities/array';

const getInputRows = (state: IQuickGridState, props: IQuickGridProps) => props.rows;
const getGroupBy = (state: IQuickGridState, props: IQuickGridProps) => state.groupBy;
const getExpandedRows = (state: IQuickGridState, props: IQuickGridProps) => state.expandedRows;
const getSortColumn = (state: IQuickGridState, props: IQuickGridProps) => state.sortColumn;
const getSortDirection = (state: IQuickGridState, props: IQuickGridProps) => state.sortDirection;
const getColumns = (state: IQuickGridState, props: IQuickGridProps) => props.columns;

const getSortFunctionForColumn = (columns: Array<GridColumn>, columnName, sortDirection) => {
    const sortColumn = _.find(columns, column => column.valueMember === columnName);
    if (sortColumn && sortColumn.sortByValueGetter) {
        let sortValueGetter = sortColumn.sortByValueGetter;
        return (row) => sortValueGetter(row, sortDirection); // (row) => return compareValue
    }
    return null;
};

const sortRows = (rows: Array<any>, sortColumn: string, sortDirection: SortDirection, groupedColumn: Array<IGroupBy>, columns: Array<GridColumn>) => {
    const sortModifier = sortDirection === SortDirection.Descending ? -1 : 1;
    if (groupedColumn.length > 0) {
        let sortOptions = [];
        for (let groupColumn of groupedColumn) {
            const groupSortModifier = groupColumn.sortDirection === SortDirection.Descending ? -1 : 1;
            const sortFunction = getSortFunctionForColumn(columns, groupColumn.column, groupColumn.sortDirection);
            sortOptions.push({ sortModifier: groupSortModifier, column: groupColumn.column, sortFunction: sortFunction });
        }
        if (sortColumn) {
            sortOptions.push({ sortModifier: sortModifier, column: sortColumn });
        }
        return sortArray(rows, sortOptions);
    } else if (sortColumn) {
        const sortFunction = getSortFunctionForColumn(columns, sortColumn, sortDirection);
        return sortArray(rows, [{ sortModifier: sortModifier, column: sortColumn, sortFunction: sortFunction }]);
    }
    return rows;
};

const getSortedRows = createSelector(getInputRows, getSortColumn, getSortDirection, getGroupBy, getColumns,
    (rows, sortColumn, sortDirection, groupBy, columns) => {
        return sortRows(rows, sortColumn, sortDirection, groupBy, columns);
    });

export const getRowsSelector = createSelector(getSortedRows, getGroupBy, getExpandedRows, getColumns, (rows, groupedColumns, expandedRows = {}, columns) => {
    return groupRows(rows, groupedColumns, expandedRows, columns);
});
