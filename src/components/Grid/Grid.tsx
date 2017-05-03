import * as React from 'react';
import * as ReactDOM from 'react-dom';
import * as classNames from 'classnames';
import { AutoSizer, Table, Column, ColumnProps } from 'react-virtualized';
import { IGridProps, IGridState, GridColumn } from './Grid.Props';
import { customRowRenderer } from './rowRenderer';
import { autobind } from '../../utilities/autobind';
import { getColumnsSelector, getRowsSelector } from './DataSelectors';
import { groupRows } from './rowGrouper';
import { GridHeader } from './GridHeader';

import './Grid.scss';
export class Grid<T> extends React.Component<IGridProps<T>, IGridState> {
    public static defaultProps = {
        overscanRowCount: 20
    };

    constructor(props: IGridProps<T>) {
        super(props);

        let gridWidth = this._getGridWidth() - 40;

        this.state = {
            columnWidths: this.props.columns.map((col) => { return this.getColumWidthInPx(gridWidth, col.width); }),
            rows: props.rows,
            groupBy: props.groupBy,
            expandedRows: {},
            sortColumn: props.sortColumn,
            sortDirection: props.sortDirection,
            columns: props.columns
        };
    }

    private getColumWidthInPx(available: number, widthInPercentage) {
        return Math.floor(available * (widthInPercentage / 100));
    }

    @autobind
    private rowRenderer({ className, columns, index, isScrolling, key, onRowClick, onRowDoubleClick, onRowMouseOver, onRowMouseOut, rowData, style }) {
        return customRowRenderer(this.props.columns, this.onRowExpandToggle.bind(this), { className, columns, index, isScrolling, key, onRowClick, onRowDoubleClick, onRowMouseOver, onRowMouseOut, rowData, style });
    }

    @autobind
    getColumnsToDisplay() {
        return getColumnsSelector(this.state);
    }

    @autobind
    private getRow({ index }): T {
        const rows = this.getRows();
        return rows[index % rows.length];
    }

    private getRows() {
        return getRowsSelector(this.state);
    }

    @autobind
    private getRowCount() {
        return this.getRows().length;
    }

    // TODO: change to prop dispatch? - set in container
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

    private _getGridWidth() {
        if (document.getElementsByClassName('viewport-height')[0] !== undefined) {
            return document.getElementsByClassName('viewport-height')[0].clientWidth;
        } else {
            return document.getElementById('root').clientWidth;
        }
    }

    @autobind
    renderColumns() {
        return (
            this.getColumnsToDisplay()
                .map((column, index) => {
                    let props: ColumnProps = {
                        width: this.state.columnWidths[index],
                        label: column.HeaderText,
                        dataKey: column.valueMember
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
                columns={this.getColumnsToDisplay()}
                columnWidths={this.state.columnWidths}
                onResize={this.onGridResize}
                sortColumn={this.state.sortColumn}
                sortDirection={this.state.sortDirection}
                onSort={this.sortColumns}
            />
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
                            overscanRowCount={this.props.overscanRowCount}
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
