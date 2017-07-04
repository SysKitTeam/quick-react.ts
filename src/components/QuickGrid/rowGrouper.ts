import * as _ from 'lodash';
import { GroupRow, IGroupBy } from './QuickGrid.Props';
class RowGrouper {
    groupByColumns: Array<IGroupBy>;
    expandedRows: any;
    constructor(groupByColumns, expandedRows) {
        this.groupByColumns = groupByColumns.slice(0);
        this.expandedRows = expandedRows;
    }

    isRowExpanded(columnName, name) {
        let isExpanded = true;
        let expandedRowGroup = this.expandedRows[columnName];
        if (expandedRowGroup && expandedRowGroup[name]) {
            isExpanded = expandedRowGroup[name].isExpanded;
        }
        return isExpanded;
    }

    groupRowsByColumn(rows, groupByColumnIndex = 0, parentGroupKey = '') {
        let nextColumnIndex = groupByColumnIndex;
        let columnName = this.groupByColumns[groupByColumnIndex].column;
        let groupedRows = _.groupBy(rows, columnName);
        let groupKeys = Object.keys(groupedRows);
        let dataViewRows = [];
        for (let i = 0; i < groupKeys.length; i++) {
            let groupKeyValue = groupKeys[i];
            const groupKey = parentGroupKey + '||' + groupKeyValue;
            let isExpanded = this.isRowExpanded(columnName, groupKey);
            const rowGroupHeader: GroupRow = { type: 'GroupRow', columnGroupName: columnName, name: groupKeyValue, groupKey: groupKey, depth: groupByColumnIndex, isExpanded: isExpanded };
            dataViewRows.push(rowGroupHeader);
            if (isExpanded) {
                nextColumnIndex = groupByColumnIndex + 1;
                if (this.groupByColumns.length > nextColumnIndex) {
                    dataViewRows = dataViewRows.concat(this.groupRowsByColumn(groupedRows[groupKeyValue], nextColumnIndex, groupKey));
                    nextColumnIndex = groupByColumnIndex - 1;
                } else {
                    dataViewRows = dataViewRows.concat(groupedRows[groupKeyValue]);
                }
            }
        }
        return dataViewRows;
    }
}

export const groupRows = (rows, groupedColumns, expandedRows) => {
    if (groupedColumns.length === 0) {
        return rows;
    }
    let rowGrouper = new RowGrouper(groupedColumns, expandedRows);
    return rowGrouper.groupRowsByColumn(rows, 0);
};


