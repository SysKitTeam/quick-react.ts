const createSelector = require('reselect').createSelector;
import { RowState } from './Grid.Props';
import { groupRows } from './rowGrouper';
const objectAssign = require('object-assign');

const getInputRows = (state: RowState) => state.rows;
const getGroupedColumns = (state: RowState) => state.groupedColumns;
const getExpandedRows = (state: RowState) => state.expandedRows;
const getSortColumn = (state: RowState) => state.sortColumn;
const getSortDirection = (state: RowState) => state.sortDirection;

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

const getSortedRows = createSelector([getInputRows, getSortColumn, getSortDirection], (rows, sortColumn, sortDirection) => {
    if (!sortDirection && !sortColumn) {
        return rows;
    }
    return  sortRows(rows, sortColumn, sortDirection);
});


export const RowsSelector = createSelector([getSortedRows, getGroupedColumns, getExpandedRows], (rows, groupedColumns, expandedRows = {}) => {        
    return groupRows(rows, groupedColumns, expandedRows);
});
