const createSelector = require('reselect').createSelector;
import { IQuickGridState, IQuickGridProps, GridColumn } from './QuickGrid.Props';
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

const sortRows = (rows: Array<any>, sortColumn: string, sortDirection: string, groupedColumn: Array<string>, columns: Array<GridColumn>, groupBySortColumn: string, groupBySortDirection: string) => {
    let column = columns.filter(x => x.valueMember === sortColumn)[0];
    let sortedChain = _(rows).chain();

    if (sortDirection && sortColumn) {
        if (column && column.sortByValueGetter) {
            sortedChain = sortedChain.sortBy((row) => column.sortByValueGetter(row, sortDirection));
        } else {
            sortedChain = sortedChain.sortBy((row) => row[sortColumn]);
        }
        if (sortDirection === 'DESC') {
            sortedChain = sortedChain.reverse();
        }
    }

    if (groupedColumn.length > 0) {
        if (groupBySortColumn !== undefined && groupBySortColumn !== '') {
            sortedChain.sortBy((row) => row[groupBySortColumn]);
        } else {
            sortedChain.sortBy((row) => row[groupedColumn[0]]);
        }
        if (groupBySortDirection === 'DESC') { // TODO: test
            sortedChain = sortedChain.reverse();
        }
    }
    return sortedChain.value();
};

const getSortedRows = createSelector(getInputRows, getSortColumn, getSortDirection, getGroupBy, getColumns, getGroupBySortColumn, getGroupBySortDirection,
    (rows, sortColumn, sortDirection, groupBy, columns, groupBySortColumn, groupBySortDirection) => {
        return sortRows(rows, sortColumn, sortDirection, groupBy, columns, groupBySortColumn, groupBySortDirection);
    });

export const getRowsSelector = createSelector(getSortedRows, getGroupBy, getExpandedRows, (rows, groupedColumns, expandedRows = {}) => {
    return groupRows(rows, groupedColumns, expandedRows);
});
