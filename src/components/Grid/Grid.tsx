import * as React from 'react';
import * as ReactDOM from 'react-dom';
import * as classNames from 'classnames';
import { AutoSizer, Table, Column, ColumnProps, ScrollSync, Grid } from 'react-virtualized';
import { IGridProps, IGridState, GridColumn, GroupRow } from './Grid.Props';
import { customRowRenderer } from './rowRenderer';
import { autobind } from '../../utilities/autobind';
const scrollbarSize = require('dom-helpers/util/scrollbarSize');
import { getColumnsSelector, getRowsSelector } from './DataSelectors';
import { groupRows } from './rowGrouper';
import { GridHeader } from './GridHeader';
import { Icon } from '../Icon/Icon';

import './Grid.scss';

export class QuickGrid<T> extends React.Component<IGridProps<T>, IGridState> {
    public static defaultProps = {
        overscanRowCount: 20
    };
    private _grid: any;
    private headerGrid: any;
    private parentElement: HTMLElement;
    private columnsMinWidth;

    constructor(props: IGridProps<T>) {
        super(props);
        let gridWidth = this._getGridWidth() - 40;
        this.state = {
            columnWidths: this.props.columns.map((col) => { return this.getColumnWidthInPx(gridWidth, col.width); }),
            rows: props.rows,
            groupBy: props.groupBy,
            expandedRows: {},
            sortColumn: props.sortColumn,
            sortDirection: props.sortDirection,
            columns: props.columns
        };
        this.columnsMinWidth = props.columns.map(x => x.minWidth).reduce((a, b) => a + b, 0);
    }

    private getColumnWidthInPx(available: number, widthInPercentage) {
        return Math.floor(available * (widthInPercentage / 100));
    }

    @autobind
    getColumnsCount() {
        return this.getColumnsToDisplay().length;
    }

    @autobind
    getColumnsToDisplay(): Array<GridColumn> {
        return getColumnsSelector(this.state);
    }

    @autobind
    private getRow({ index }) {
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
        this._grid.recomputeGridSize({});
    }

    @autobind
    sortColumns(sortBy: string, sortDirection: string) {
        this._sort({ sortBy, sortDirection });
    }

    @autobind
    _cellRenderer({ columnIndex, key, rowIndex, style }) {
        const rowData = this.getRow({ index: rowIndex });
        const columns = this.getColumnsToDisplay();
        const column = columns[columnIndex];
        if (rowData.type === 'GroupRow') {
            return this._renderGroupCell(columnIndex, key, rowIndex, style);
        } else {
            return this._renderBodyCell(columnIndex, key, rowIndex, style);
        }
    }

    @autobind
    _noContentRenderer() {
        return (
            <div className="grid-component-no-data">
                No items to show...
            </div>
        );
    }

    _renderGroupCell(columnIndex: number, key, rowIndexNumber: number, style) {
        if (columnIndex === 0) {          
            const rowData = this.getRow({ index: rowIndexNumber });
            const customStyle = {...style, width: this._getGridWidth() };
            const iconName = rowData.isExpanded ? 'icon-arrow_down_right' : 'icon-arrow_right';
            const columnName = this.props.columns.filter((column) => { return column.valueMember === rowData.columnGroupName; })[0].HeaderText;
            const paragraphStyle: React.CSSProperties = { paddingLeft: 30 * rowData.depth, paddingRight: 10, display: 'inline' }; // TODO: add to css 
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
            return (<div key={key}/>);
        }
    }

    _renderBodyCell(columnIndex: number, key, rowIndexNumber: number, style) {
        const columns = this.getColumnsToDisplay();
        const column = columns[columnIndex];
        const rowData = this.getRow({ index: rowIndexNumber });

        const width = this.state.columnWidths[columnIndex];
        const label = column.HeaderText;
        const dataKey = column.dataMember || column.valueMember;
        const cellData = rowData[dataKey];
        const className = classNames('grid-component-cell', column.cellClassName);

        if (column.cellFormatter) {
            return (
                <div
                    key={key}
                    style={style}
                    className={className}
                >
                    {column.cellFormatter(cellData)}
                </div>
            );
        }
        return (
            <div
                key={key}
                style={style}
                className={className}
            // onMouseOver={() => this.setState({ hoverRowIndex: rowIndex })}
            // onClick={() => this._setSelectedRowIndex(rowIndex)}
            // onDoubleClick={() => { this._onRowDblClicked(rowIndex); }}
            >
                <div style={{ padding: '5px 5px 0 10px', fontSize: '14px' }} >
                    {cellData}
                </div>
            </div>
        );
    }

    componentDidMount() {
        this.parentElement = ReactDOM.findDOMNode(this).parentElement;
        // this.refreshColumnWidthsInState();
    }

    @autobind
    _onResize() {
        // this.refreshColumnWidthsInState(); // set new widths in state
        // this.calcExpandedRowWidth(); // expand last
        this._grid.recomputeGridSize();
        this.headerGrid._headerGrid.recomputeGridSize();
    }

    // private refreshColumnWidthsInState() {
    //     let gridWidth = Math.floor(this.parentElement.clientWidth) - 12;
    //     let columnWidths = this.getColumnsWidth(gridWidth);
    //     this.setState((prevState) => { return { ...prevState, columnWidths }; });
    // }

    private getColumnsWidth(available: number) {
        return available > this.columnsMinWidth ? this.props.columns.map(x => this.getColumnWidthInPx(available, x.width)) : this.props.columns.map(x => x.minWidth);
    }

    @autobind
    _getColumnWidth({ index }) {
        const columns = this.getColumnsToDisplay();
        return this.state.columnWidths[index];
    }

    render() {
        let mainClass = classNames('grid-component-container', this.props.gridClassName);
        let headerClass = classNames('grid-component-header', this.props.headerClassName);
        return (
            <div className={mainClass}>
                <ScrollSync>
                    {({ clientHeight, clientWidth, onScroll, scrollHeight, scrollLeft, scrollTop, scrollWidth }) => (
                        <AutoSizer onResize={this._onResize}>
                            {({ height, width }) => (
                                <div style={{ width, height }} >
                                    <GridHeader
                                        ref={(g) => { this.headerGrid = g; }}
                                        columns={this.getColumnsToDisplay()}
                                        columnWidths={this.state.columnWidths}
                                        onResize={this.onGridResize}
                                        sortColumn={this.state.sortColumn}
                                        sortDirection={this.state.sortDirection}
                                        onSort={this.sortColumns}
                                        width={width - scrollbarSize()}
                                        onScroll={onScroll}
                                        scrollLeft={scrollLeft}
                                        className={headerClass}
                                    />
                                    <Grid
                                        ref={(r) => { this._grid = r; }}
                                        height={height}
                                        width={width}
                                        noContentRenderer={this._noContentRenderer}
                                        onScroll={onScroll}
                                        scrollLeft={scrollLeft}
                                        cellRenderer={this._cellRenderer}
                                        overscanRowCount={this.props.overscanRowCount}
                                        columnWidth={this._getColumnWidth}
                                        rowHeight={this.props.rowHeight}
                                        className="grid-component"
                                        rowCount={this.getRowCount()}
                                        columnCount={this.getColumnsCount()}
                                    />
                                </div>
                            )}
                        </AutoSizer>
                    )}
                </ScrollSync>
            </div>
        );
    }
}
