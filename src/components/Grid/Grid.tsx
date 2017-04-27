import * as React from 'react';
import * as classNames from 'classnames';
import { createSelector } from 'reselect';
import { AutoSizer, Table, Column, ColumnProps } from 'react-virtualized';
import { IGridProps, IGridState, GridColumn, RowSelectorProps } from './Grid.Props';
import { customRowRenderer } from './rowRenderer';
import { autobind } from '../../utilities/autobind';
import { RowsSelector } from './rowSelector';
import { groupRows } from './rowGrouper';
import { headerRenderer } from './headerRenderer';
import { GridHeader } from './GridHeader';

const DraggableCore = require('react-draggable').DraggableCore;

import './Grid.scss';

export class Grid<T> extends React.Component<IGridProps<T>, IGridState> {
    private grid;
    private _columnWidths: Array<number>;

    constructor(props: IGridProps<T>) {
        super(props);
        this.state = {
            columnWidths: this.props.columns.map((col) => { return col.width; }),
            rows: props.rows,
            groupBy: props.groupBy,
            expandedRows: {},
            sortColumn: props.sortColumn,
            sortDirection: props.sortDirection
        };
        this._columnWidths = this.state.columnWidths;
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
            sortDirection: this.state.sortDirection
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
            let expandedRows = { ...oldState.expandedRows };
            expandedRows[columnGroupName] = { ...expandedRows[columnGroupName] };
            expandedRows[columnGroupName][name] = { isExpanded: shouldExpand };
            return { ...oldState, expandedRows: expandedRows };
        });
    }

    @autobind
    _sort({ sortBy, sortDirection }) {
        // TODO: change to prop dispatch - set in container
        this.setState((oldState) => {
            return { ...oldState, sortColumn: sortBy, sortDirection: sortDirection };
        });
    }

    @autobind
    renderColumns() {
        return (
            this.getColumnsToDisplay()
                .map((column, index) => {
                    let props: ColumnProps = {
                        width: this.state.columnWidths[index],
                        label: column.HeaderText,
                        dataKey: column.valueMember,
                        headerRenderer: headerRenderer
                    };
                    props.className = classNames('grid-component-cell', column.cellClassName);
                    if (column.dataMember) {
                        props.dataKey = column.dataMember;
                    }
                    if (column.cellFormatter) {
                        const cellRenderer = ({ cellData, columnData, dataKey, rowData, rowIndex }) => {
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

    @autobind
    onGridResize(newColumnWidths: Array<number>) {
         this.setState((oldState) => {
            return { ...oldState, columnWidths: newColumnWidths };
        });
    }

    @autobind
    sortColumns(sortBy: string, sortDirection: string) {
         this._sort({ sortBy, sortDirection });        
    }

    @autobind
    customHeaderRowRenderer({ className, columns, style }) {
        return (
            <GridHeader
                columns={columns}
                columnWidths={this._columnWidths}
                onResize={this.onGridResize}
                sortColumn={this.state.sortColumn}
                sortDirection={this.state.sortDirection}
                onSort={this.sortColumns}
            />
        );
    }


    /*@autobind
    customHeaderRowRenderer({ className, columns, style }) {
        const columnItems = React.Children.toArray(columns);
        return (<div
            className={className}
            role="row"
            style={style}
        >
            {
                columnItems.map((column, index) => { return this.renderColumnWrapper(column, index); })
            }
        </div>);
    }*/




    @autobind
    renderColumnWrapper(column, index) {
        const notLastIndex = index < this._columnWidths.length - 1;
        return (
            <div key={index} style={{ width: this._columnWidths[index] }}>
                <div style={{ display: 'inline', float: 'left' }}>
                    {column}
                </div>
                {notLastIndex &&
                    <DraggableCore
                        zIndex={100}
                        axis="x"
                        onStop={(e, data) => this.onDragHeaderStop(e, data, index)}
                        onDrag={(e, data) => this._onDragHeaderColumn(e, data, index)}
                        position={{ x: 0, y: 0 }}>
                        <div
                            style={{ width: '5px', cursor: 'col-resize', display: 'inline', height: 20, backgroundColor: 'red' }}
                            className="grid-column-draggable">&nbsp;</div>
                    </DraggableCore>
                }
            </div>
        );
    }

    @autobind
    private _onDragHeaderColumn(e, data, columnIndex) {
        // let newColumnWidths = {...this.state.columnWidths };
        let columnWidth = this._columnWidths[columnIndex];
        let nextColumnWidth = this._columnWidths[columnIndex + 1];
        columnWidth = columnWidth + data.deltaX;
        nextColumnWidth = nextColumnWidth - data.deltaX;
        if (columnWidth < 0) {
            columnWidth = 0;
        }
        if (nextColumnWidth < 0) {
            nextColumnWidth = 0;
        }
        this._columnWidths[columnIndex] = columnWidth;
        this._columnWidths[columnIndex + 1] = nextColumnWidth;
        // this.setState({ ...this.state, width: newColumnWidths });
        // this.props.onChanged(this.props.name, this.state.width);
    }

    @autobind
    private onDragHeaderStop(e, data, key) {
        // let newColumnWidths = {...this.state.columnWidths };
        this.setState({ ...this.state, width: this._columnWidths });

        //  this.props.onChanged(key, this.state.width);
        // set state
        // refresh grid size 
    }


    /*@autobind
    headerRowRenderer({ className, columns, style }) { 
        const columnItems = React.Children.toArray(columns);
        return (
            <div
                className={className}
                role="row"
                style={style}
            >
                {columnItems.map((column, index) => { // column: RV-Column 
                    return column; //  this._createHeader({ column, index }) - <HeaderColumn>
                })}
            </div>
        );
    }*/

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
                            overscanRowCount={20} // TODO: optional prop
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
                            headerRowRenderer={this.customHeaderRowRenderer}

                        >
                            {this.renderColumns()}
                        </Table>
                    )}
                </AutoSizer>
            </div>
        );
    }
}
