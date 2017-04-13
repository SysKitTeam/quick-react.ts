
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

const sortRows = (rows, sortColumn, sortDirection) => {
    const sortFactor = sortDirection === 'DESC' ? 1 : -1;
    // const sorted = Array<ServerGridRow>(rows).sort((a, b) => {
    //     return a[sortColumn] < b[sortColumn] ? sortFactor : -1 * sortFactor;
    // });
    return rows; // sorted;
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
       //  const sortKey = this.state.sortBy;
        // const sortFactor = this.state.sortDirection === SortDirection.DESC ? 1 : -1; 
        // const sorted = Array<ServerGridRow>(this.state.rows).sort((a, b) => {             
        //         return a[sortKey] < b[sortKey] ? sortFactor : -1 * sortFactor;
        //      });
//         let rows = this.getGroupedRows(this.state.rows, this.state.groupBy, this.state.expandedRows, []);
//         return rows;
// )
