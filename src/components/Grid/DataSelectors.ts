const createSelector = require('reselect').createSelector;
import { IGridState, IGridProps, GridColumn } from './Grid.Props';
import { groupRows } from './rowGrouper';
import * as _ from 'lodash';

const getInputRows = (state: IGridState, props) => props.rows;
const getGroupBy = (state: IGridState, props) => props.groupBy;
const getExpandedRows = (state: IGridState, props) => state.expandedRows;
const getSortColumn = (state: IGridState, props) => state.sortColumn;
const getSortDirection = (state: IGridState, props) => state.sortDirection;
const getColumns = (state: IGridState, props) => props.columns;

const comparer = (a, b) => {
    if (a > b) {
        return 1;
    } else if (a < b) {
        return -1;
    }
    return 0;
};

const sortRows = (rows: Array<any>, sortColumn: string, sortDirection: string, groupedColumn: Array<string>, columns: Array<GridColumn>) => {

    let getSortValueExpression = (row) => { return row[sortColumn]; };
    let column = columns.filter(x => x.valueMember === sortColumn)[0];
    if (column && column.sortByValueGetter) {
        getSortValueExpression = (row) => column.sortByValueGetter(row, sortDirection);
    }

    let sortedChain = _(rows).chain().sortBy((row) => row[sortColumn]);
    sortedChain = sortedChain
        .sortBy((row) =>
            getSortValueExpression(row)
        );
    if (sortDirection === 'DESC') {
        sortedChain = sortedChain.reverse();
    }
    return sortedChain.sortBy((row) => row[groupedColumn[0]]).value();
};

const getSortedRows = createSelector(getInputRows, getSortColumn, getSortDirection, getGroupBy, getColumns, (rows, sortColumn, sortDirection, groupBy, columns) => {
    if (!sortDirection && !sortColumn) {
        return rows;
    }
    return sortRows(rows, sortColumn, sortDirection, groupBy, columns);
});


export const getRowsSelector = createSelector(getSortedRows, getGroupBy, getExpandedRows, (rows, groupedColumns, expandedRows = {}) => {
    return groupRows(rows, groupedColumns, expandedRows);
});


export const getColumnsSelector = createSelector(getColumns, getGroupBy, (columns, groupBy) => {
    return columns.filter((column) => { return groupBy.indexOf(column.valueMember) === -1; });
});
