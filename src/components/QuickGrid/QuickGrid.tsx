import * as React from 'react';
import * as ReactDOM from 'react-dom';
import * as classNames from 'classnames';
import { AutoSizer, Table, Column, ColumnProps, ScrollSync, Grid } from 'react-virtualized';
import { IQuickGridProps, IQuickGridState, GridColumn, GroupRow } from './QuickGrid.Props';
const scrollbarSize = require('dom-helpers/util/scrollbarSize');
import { getColumnsSelector, getRowsSelector } from './DataSelectors';
import { groupRows } from './rowGrouper';
import { GridHeader } from './QuickGridHeader';
import { Icon } from '../Icon/Icon';
import * as _ from 'lodash';
import './QuickGrid.scss';

const defaultMinWidth = 50;
export class QuickGrid extends React.Component<IQuickGridProps, IQuickGridState> {
    public static defaultProps = {
        overscanRowCount: 20
    };

    private _grid: any;
    private _headerGrid: any;
    private parentElement: HTMLElement;
    private columnsMinTotalWidth = 0;

    constructor(props: IQuickGridProps) {
        super(props);
        const totalWidth = props.columns.map(x => x.width).reduce((a, b) => a + b, 0);
        const columnWidths = this.props.columns
            .filter((column) => { return props.groupBy.indexOf(column.valueMember) === -1; })
            .map((col) => { return this.getColumnWidthInPx(this.getGridWidth(), totalWidth, col.width); });
        this.columnsMinTotalWidth = props.columns.map(x => x.minWidth || defaultMinWidth).reduce((a, b) => a + b, 0);
        this.state = {
            columnWidths: columnWidths,
            expandedRows: {},
            selectedRowIndex: undefined,
            hoverRowIndex: undefined,
            sortColumn: props.sortColumn,
            sortDirection: props.sortDirection
        };
        this._onResize = _.debounce(this._onResize, 100);
    }

    getColumnWidthInPx(available: number, totalWidth: number, currentWidth: number) {
        return Math.floor((available / totalWidth) * currentWidth);
    }

    getGridWidth() {
        return this._getGridWidth() - 40;
    }

    getColumnsCount = () => {
        return this.getColumnsToDisplay().length;
    }

    getColumnsToDisplay = (): Array<GridColumn> => {
        return getColumnsSelector(this.state, this.props);
    }

    getRow = ({ index }) => {
        const rows = this.getRows();
        return rows[index % rows.length];
    }

    getRows() {
        return getRowsSelector(this.state, this.props);
    }

    getRowCount = () => {
        return this.getRows().length;
    }

    onRowExpandToggle(columnGroupName, name, shouldExpand) {
        this.setState((oldState) => {
            let expandedRows = { ...oldState.expandedRows };
            expandedRows[columnGroupName] = { ...expandedRows[columnGroupName] };
            expandedRows[columnGroupName][name] = { isExpanded: shouldExpand };
            return { ...oldState, expandedRows: expandedRows };
        });
    }

    sort = ({ sortBy, sortDirection }) => {
        this.setState((oldState) => {
            return { ...oldState, sortColumn: sortBy, sortDirection: sortDirection };
        });
    }

    _getGridWidth() {
        if (document.getElementsByClassName('viewport-height')[0] !== undefined) {
            return document.getElementsByClassName('viewport-height')[0].clientWidth;
        } else {
            return document.getElementById('root').clientWidth;
        }
    }

    onGridResize = (newColumnWidths: Array<number>) => {
        this.setState((oldState) => {
            return { ...oldState, columnWidths: newColumnWidths };
        });
        this._grid.recomputeGridSize({});
    }

    sortColumns = (sortBy: string, sortDirection: string) => {
        this.sort({ sortBy, sortDirection });
    }

    _cellRenderer = ({ columnIndex, key, rowIndex, style }) => {
        const rowData = this.getRow({ index: rowIndex });
        const columns = this.getColumnsToDisplay();
        const column = columns[columnIndex];
        if (rowData.type === 'GroupRow') {
            return this._renderGroupCell(columnIndex, key, rowIndex, rowData, style);
        } else {
            return this._renderBodyCell(columnIndex, key, rowIndex, rowData, style);
        }
    }

    _renderGroupCell(columnIndex: number, key, rowIndex: number, rowData, style) {
        if (columnIndex === 0) {
            const columnsTotalWidth = this.state.columnWidths.reduce((a, b) => a + b, 0);
            const customStyle = { ...style, width: columnsTotalWidth, zIndex: 1 };
            const iconName = rowData.isExpanded ? 'icon-arrow_down_right' : 'icon-arrow_right';
            const columnName = this.props.columns.filter((column) => { return column.valueMember === rowData.columnGroupName; })[0].headerText;
            const paragraphStyle: React.CSSProperties = { paddingLeft: 30 * rowData.depth, paddingRight: 10, display: 'inline' };
            const toggleRow = () => {
                this.onRowExpandToggle(rowData.columnGroupName, rowData.groupKey, !rowData.isExpanded);
            };
            return (
                <div
                    className={'grid-group-row'}
                    key={key}
                    style={customStyle}
                >
                    <Icon
                        iconName={iconName}
                        onClick={toggleRow} />
                    <p style={paragraphStyle}>
                        {columnName}: {rowData.name}
                    </p>
                </div>
            );
        } else {
            return (<div key={key} style={style} className={'grid-group-row'} />);
        }
    }

    _renderBodyCell(columnIndex: number, key, rowIndex: number, rowData, style) {
        const columns = this.getColumnsToDisplay();
        const column = columns[columnIndex];
        const width = this.state.columnWidths[columnIndex];
        const label = column.headerText;
        const dataKey = column.dataMember || column.valueMember;
        const cellData = rowData[dataKey];
        const className = classNames(
            'grid-component-cell',
            column.cellClassName,
            { 'is-selected': rowIndex === this.state.selectedRowIndex },
            { 'is-hover': rowIndex === this.state.hoverRowIndex });

        const onMouseOver = () => {
            if (this.props.highlightHoverRow) {
                this.setState((prevState) => { return { ...prevState, hoverRowIndex: rowIndex }; });
            }
        };
        const onClick = () => { this._setSelectedRowIndex(rowIndex); };
        const onDoubleClick = () => {
            if (this.props.onRowDoubleClicked) {
                this.props.onRowDoubleClicked(rowData);
            }
        };

        const columnElement = () => {
            if (column.cellFormatter) {
                return column.cellFormatter(cellData);
            } else {
                return (
                    <div style={{ padding: '5px 5px 0 10px', fontSize: '14px' }} >
                        {cellData}
                    </div>
                );
            }
        };
        return (
            <div
                key={key}
                style={style}
                className={className}
                onMouseOver={onMouseOver}
                onClick={onClick}
                onDoubleClick={onDoubleClick}
            >
                {columnElement()}
            </div>
        );
    }

    _setSelectedRowIndex = (rowIndex: number) => {
        this.setState((prevState) => { return { ...prevState, selectedRowIndex: rowIndex }; });
        if (this.props.onSelectedRowChanged) {
            this.props.onSelectedRowChanged(rowIndex);
        }
    }

    _onResize = () => {
        this.refreshColumnWidthsInState();
        this._grid.recomputeGridSize();
        this._headerGrid.child._headerGrid.recomputeGridSize();
    }

    private refreshColumnWidthsInState() {
        let columnWidths = this.getColumnsWidth();
        this.setState((prevState) => { return { ...prevState, columnWidths }; });
    }

    private getColumnsWidth() {
        const available = this.getGridWidth();
        const columns = this.getColumnsToDisplay();
        if (available > this.columnsMinTotalWidth) {
            const totalWidth = columns.map(x => x.width).reduce((a, b) => a + b, 0);
            return columns.map(x => this.getColumnWidthInPx(available, totalWidth, x.width));
        } else {
            return columns.map(x => x.minWidth || defaultMinWidth);
        }
    }

    _getColumnWidth = ({ index }) => {
        const columns = this.getColumnsToDisplay();
        return this.state.columnWidths[index];
    }

    onMouseLeaveGrid = () => {
        this.setState((prevState) => { return { ...prevState, hoverRowIndex: -1 }; });
    }

    render() {
        let mainClass = classNames('grid-component-container', this.props.gridClassName);
        let headerClass = classNames('grid-component-header', this.props.headerClassName);
        return (
            <div className={mainClass}>
                <ScrollSync>
                    {({ onScroll, scrollLeft }) => (
                        <AutoSizer onResize={this._onResize}>
                            {({ height, width }) => (
                                <div style={{ width, height }} >
                                    <GridHeader
                                        ref={(g) => { this._headerGrid = g; }}
                                        allColumns={this.props.columns}
                                        headerColumns={this.getColumnsToDisplay()}
                                        columnWidths={this.state.columnWidths}
                                        onResize={this.onGridResize}
                                        sortColumn={this.state.sortColumn}
                                        sortDirection={this.state.sortDirection}
                                        onSort={this.sortColumns}
                                        width={width - scrollbarSize()}
                                        scrollLeft={scrollLeft}
                                        className={headerClass}
                                        groupBy={this.props.groupBy}
                                        onGroupByChanged={this.props.onGroupByChanged}
                                        displayGroupContainer={this.props.displayGroupContainer}
                                    />
                                    <div style={{ width }} onMouseLeave={this.onMouseLeaveGrid} >
                                        <Grid
                                            ref={(r) => { this._grid = r; }}
                                            height={height}
                                            width={width}
                                            onScroll={onScroll}
                                            scrollLeft={scrollLeft}
                                            cellRenderer={this._cellRenderer}
                                            overscanRowCount={this.props.overscanRowCount}
                                            columnWidth={this._getColumnWidth}
                                            rowHeight={this.props.rowHeight}
                                            className="grid-component"
                                            rowCount={this.getRowCount()}
                                            columnCount={this.getColumnsCount()}
                                            {...this.state}
                                        />
                                    </div>
                                </div>
                            )}
                        </AutoSizer>
                    )}
                </ScrollSync>
            </div>
        );
    }
}
