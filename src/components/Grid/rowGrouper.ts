const groupBy = require('lodash.groupby');
import { GroupRow } from './Grid.Props';

class RowGrouper {
    columns: any;
    expandedRows: any;
    constructor(columns, expandedRows) {
        this.columns = columns.slice(0); 
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
    
    groupRowsByColumn(rows, columnIndex = 0, parentGroupKey = '') {
        let nextColumnIndex = columnIndex;
        let columnName = this.columns[columnIndex];
        let groupedRows = groupBy(rows, columnName);
        let groupKeys = Object.keys(groupedRows);
        let dataViewRows = []; 
        for (let i = 0; i < groupKeys.length; i++) {
            let groupKeyValue = groupKeys[i];
            const groupKey = parentGroupKey + '||' + groupKeyValue;            
            let isExpanded = this.isRowExpanded(columnName, groupKey);
            const rowGroupHeader : GroupRow = { type: 'GroupRow', columnGroupName: columnName, name: groupKeyValue, groupKey: groupKey, depth: columnIndex, isExpanded: isExpanded };
            dataViewRows.push(rowGroupHeader);

            if (isExpanded) {
                nextColumnIndex = columnIndex + 1;
                if (this.columns.length > nextColumnIndex) {
                    dataViewRows = dataViewRows.concat(this.groupRowsByColumn(groupedRows[groupKeyValue], nextColumnIndex, groupKey));
                    nextColumnIndex = columnIndex - 1;
                } else {
                    dataViewRows = dataViewRows.concat(groupedRows[groupKeyValue]);
                }
            }
        }
        return dataViewRows;
    }   
}

export const groupRows = (rows, groupedColumns, expandedRows) => {
    let rowGrouper = new RowGrouper(groupedColumns, expandedRows);
    return rowGrouper.groupRowsByColumn(rows, 0);
};


