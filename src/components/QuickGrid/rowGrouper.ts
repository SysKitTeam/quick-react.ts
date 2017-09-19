import * as _ from 'lodash';
import { GroupRow, IGroupBy, GridColumn } from './QuickGrid.Props';
class RowGrouper {
    groupByColumns: Array<IGroupBy>;
    columns: Array<GridColumn>;
    expandedRows: any;
        constructor(groupByColumns, expandedRows, columns) {
        this.groupByColumns = groupByColumns.slice(0);
        this.expandedRows = expandedRows;
        this.columns = columns.slice(0);
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
        let groupByColumn = this.groupByColumns[groupByColumnIndex];
        let columnName = groupByColumn.column;
        let displayName =  _.find(this.columns, x => x.valueMember === columnName).dataMember;
        let groupedRows = _.groupBy(rows, columnName);
        let groupKeys = _.uniqWith(rows.map(function(o) {
            return {
                 value : o[columnName],
                 display : o[displayName]
            };
        }), _.isEqual);
        let dataViewRows = [];
        for (let i = 0; i < groupKeys.length; i++) {
            let groupKeyValue = groupKeys[i].value;
            const groupKey = parentGroupKey + '||' + groupKeyValue;
            let isExpanded = this.isRowExpanded(columnName, groupKey);
            const rowGroupHeader: GroupRow = { type: 'GroupRow', columnGroupName: columnName, displayName: groupKeys[i].display, name: groupKeyValue, groupKey: groupKey, depth: groupByColumnIndex, isExpanded: isExpanded };
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

export const groupRows = (rows, groupedColumns, expandedRows, columns) => {
    if (groupedColumns.length === 0) {
        return rows;
    }
    let rowGrouper = new RowGrouper(groupedColumns, expandedRows, columns);
    return rowGrouper.groupRowsByColumn(rows, 0);
};


