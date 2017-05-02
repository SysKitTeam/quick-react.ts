const createSelector = require('reselect').createSelector;
import { IGridState } from './Grid.Props';
import { groupRows } from './rowGrouper';
const objectAssign = require('object-assign');

const getInputRows = (state: IGridState) => state.rows;
const getGroupBy = (state: IGridState) => state.groupBy;
const getExpandedRows = (state: IGridState) => state.expandedRows;
const getSortColumn = (state: IGridState) => state.sortColumn;
const getSortDirection = (state: IGridState) => state.sortDirection;
const getColumns = (state: IGridState) => state.columns;

const comparer = (a, b) => {
  if (a > b) {
    return 1;
  } else if (a < b) {
    return -1;
  }
  return 0;
};

const sortRows = (rows, sortColumn, sortDirection) => {
    const sortFactor = sortDirection === 'DESC' ? 1 : -1;
    let sorted = rows.slice(0); 
    sorted.sort((a, b) => {
        const firstValue = a[sortColumn];
        const secondValue = b[sortColumn];
        return sortFactor * comparer(firstValue, secondValue);
    });
    return sorted;
};

const getSortedRows = createSelector(getInputRows, getSortColumn, getSortDirection, (rows, sortColumn, sortDirection) => {
    if (!sortDirection && !sortColumn) {
        return rows;
    }
    return  sortRows(rows, sortColumn, sortDirection);
});


export const getRowsSelector = createSelector(getSortedRows, getGroupBy, getExpandedRows, (rows, groupedColumns, expandedRows = {}) => {        
    return groupRows(rows, groupedColumns, expandedRows);
});


export const getColumnsSelector = createSelector(getColumns, getGroupBy, (columns, groupBy) => {     
    return columns.filter((column) => { return groupBy.indexOf(column.valueMember) === -1; });
});
