import * as React from 'react';
import { IGridProps, IGridState, GridColumn, RowState } from './Grid.Props';
import { customRowRenderer } from './rowRenderer';
import { AutoSizer, Table, Column, ColumnProps } from 'react-virtualized';
import * as classNames from 'classnames';
import { Icon } from '../Icon/Icon';
import { autobind } from '../../utilities/autobind';
const createSelector = require('reselect').createSelector;
const objectAssign = require('object-assign');

import { RowsSelector } from './rowSelector';
import { groupRows } from './rowGrouper';

import './Grid.scss';

export class Grid<T> extends React.Component<IGridProps<T>, IGridState> {
    private grid;
    constructor(props: IGridProps<T>) {
        super(props);
        this.state = {
            rows: props.rows,
            groupBy: props.groupBy,
            expandedRows: {},
            sortColumn: props.sortColumn, // def state
            sortDirection: props.sortDirection  // 'DESC' // def state 
        };
    }

    private getConvertedMeasure(measures, measureType, convertFunction): string {
        const measure = measures.filter((mes) => { return mes.type === measureType; })[0];
        if (measure !== undefined) {
            const converted = convertFunction(measure);
            return converted.currentUsage + ' ' + converted.usageUnit;
        }
        return '-';
    }

    @autobind
    private rowRenderer({ className, columns, index, isScrolling, key, onRowClick, onRowDoubleClick, onRowMouseOver, onRowMouseOut, rowData, style }) {
        return customRowRenderer(this.props.columns, this.onRowExpandToggle.bind(this), { className, columns, index, isScrolling, key, onRowClick, onRowDoubleClick, onRowMouseOver, onRowMouseOut, rowData, style });
    }

    @autobind
    getColumnsToDisplay() {
        // TODO: reselect
        const groupedColumns: Array<string> = this.state.groupBy;
        if (groupedColumns.length === 0) {
            return this.props.columns;
        }
        const nonGroupedColumns = this.props.columns.filter((column) => { return groupedColumns.indexOf(column.valueMember) === -1; });
        return nonGroupedColumns;
    }

    @autobind
    private getRow({ index }): T {
        const rows = this.getRows();
        return rows[index % rows.length];
    }

    private getRows() {
        const rowSortState: RowState = {
            rows: this.state.rows,
            groupedColumns: this.state.groupBy,
            expandedRows: this.state.expandedRows,
            sortColumn: this.state.sortColumn,
            sortDirection: this.state.sortDirection,
        };
        const rows = RowsSelector(rowSortState);
        return rows;
    }

    @autobind
    private getRowCount() {
        return this.getRows().length;
    }

    private onRowExpandToggle(columnGroupName, name, shouldExpand) {
        this.setState((oldState) => {
            let expandedRows = objectAssign({}, oldState.expandedRows);
            expandedRows[columnGroupName] = objectAssign({}, expandedRows[columnGroupName]);
            expandedRows[columnGroupName][name] = { isExpanded: shouldExpand };
            return objectAssign(oldState, { expandedRows: expandedRows });
        });
    }

    @autobind
    _sort({ sortBy, sortDirection }) {
        // TODO: change to prop dispatch
        this.setState((oldState) => {
            return objectAssign(oldState, { sortColumn: sortBy, sortDirection: sortDirection });
        });
    }

    @autobind
    getCells() {
        return (
            this.getColumnsToDisplay()
                .map((column, index) => {
                    let props: ColumnProps = {
                        width: column.width,
                        label: column.HeaderText,
                        dataKey: column.valueMember,
                        className: 'grid-component-cell'
                    };
                    if (column.dataMember) {
                        props.dataKey = column.dataMember;
                    }
                    if (column.cellFormatter) {
                        const cellRenderer = ({ cellData, columnData, dataKey, rowData, rowIndex}) => {
                            if (cellData === undefined) {
                                return '';
                            }
                            return column.cellFormatter(cellData);
                        };
                        props.cellRenderer = cellRenderer;
                    }
                    return (
                        <Column
                            key={index}
                            {...props}
                            />
                    );
                })
        );
    }

    render() {
        return (
            <div>
                <div className="grid-component-container">
                    <AutoSizer disableHeight>
                        {({ width }) => (
                            <Table
                                height={800}
                                headerClassName={'grid-component-header'}
                                overscanRowCount={20}
                                headerHeight={30}
                                className="grid-component"
                                rowGetter={this.getRow}
                                sort={this._sort}
                                sortBy={this.state.sortColumn}
                                sortDirection={this.state.sortDirection}
                                rowHeight={100}
                                rowCount={this.getRowCount()}
                                width={width}
                                rowRenderer={this.rowRenderer}
                                >
                                {this.getCells()}
                            </Table>
                        )}
                    </AutoSizer>
                </div>
            </div>
        );
    }
}
