
const createSelector = require('reselect').createSelector;
import { ServerGridRow } from './ServerGridDashboard.Props';
import { groupRows } from '../../utilities/RowGrouper';


export interface RowState {
    rows: any;
    groupedColumns: any;
    expandedRows: any;
    sortColumn: any;
    sortDirection: any;
}

const getInputRows = state => state.rows;
const getGroupedColumns = (state) => state.groupedColumns;
const getExpandedRows = (state) => state.expandedRows;
const getSortColumn = state => state.sortColumn;
const getSortDirection = state => state.sortDirection;

const comparer = (a, b) => {
  if (a > b) {
    return 1;
  } else if (a < b) {
    return -1;
  }
  return 0;
};

const sortRows = (rows, sortColumn, sortDirection) => {
    const sortFactor = sortDirection === 'ASC' ? 1 : -1;
    const sorted = Array<ServerGridRow>(rows).sort((a, b) => {
        const firstValue = a[sortColumn];
        const secondValue = a[sortColumn];
        return sortFactor * comparer(firstValue, secondValue);
    });
    return sorted;
};

const getSortedRows = createSelector([getInputRows, getSortColumn, getSortDirection], (rows, sortColumn, sortDirection) => {
    if (!sortDirection && !sortColumn) {
        return rows;
    }
    return sortRows(rows, sortColumn, sortDirection);
});


export const RowsSelector = createSelector([getSortedRows, getGroupedColumns, getExpandedRows], (rows, groupedColumns, expandedRows = {}) => {        
    return groupRows(rows, groupedColumns, expandedRows);
});
