import * as React from 'react';
import * as classNames from 'classnames';
const objectAssign = require('object-assign');
const createSelector = require('reselect').createSelector;
import { AutoSizer, Table, Column, ColumnProps } from 'react-virtualized';

import { IGridProps, IGridState, GridColumn, RowSelectorProps } from './Grid.Props';
import { customRowRenderer } from './rowRenderer';
import { autobind } from '../../utilities/autobind';
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
            sortColumn: props.sortColumn,
            sortDirection: props.sortDirection
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
        // TODO: add reselect?
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
        const rowSortState: RowSelectorProps = {
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

   // TODO: change to prop dispatch - set in container
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
        // TODO: change to prop dispatch - set in container
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
                    };
                    props.className = classNames('grid-component-cell', column.cellClassName);
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
        let mainClass = classNames('grid-component-container', this.props.gridClassName);
        let headerClass = classNames('grid-component-header', this.props.headerClassName);
        return (
            <div className={mainClass}>
                <AutoSizer>
                    {({ height, width }) => (
                        <Table
                            height={height} 
                            headerClassName={headerClass}
                            overscanRowCount={20}
                            headerHeight={this.props.headerHeight}
                            rowHeight={this.props.rowHeight}
                            className="grid-component"
                            rowGetter={this.getRow}
                            sort={this._sort}
                            sortBy={this.state.sortColumn}
                            sortDirection={this.state.sortDirection}
                            rowCount={this.getRowCount()}
                            width={width}
                            rowRenderer={this.rowRenderer}
                            // headerRowRenderer={}
                            >
                            {this.getCells()}
                        </Table>
                    )}
                </AutoSizer>
            </div>
        );
    }
}
