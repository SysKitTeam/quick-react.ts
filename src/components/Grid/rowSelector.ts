const createSelector = require('reselect').createSelector;
import { RowSelectorProps } from './Grid.Props';
import { groupRows } from './rowGrouper';
const objectAssign = require('object-assign');

const getInputRows = (state: RowSelectorProps) => state.rows;
const getGroupedColumns = (state: RowSelectorProps) => state.groupedColumns;
const getExpandedRows = (state: RowSelectorProps) => state.expandedRows;
const getSortColumn = (state: RowSelectorProps) => state.sortColumn;
const getSortDirection = (state: RowSelectorProps) => state.sortDirection;

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
