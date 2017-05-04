import * as React from 'react';
import * as classNames from 'classnames';
import { IGridProps, IGridState, GridColumn } from './Grid.Props';
import { autobind } from '../../utilities/autobind';
import { Grid, SortIndicator } from 'react-virtualized';
const DraggableCore = require('react-draggable').DraggableCore;

import './Grid.scss';
export interface IGridHeaderProps {
    columns: Array<GridColumn>;
    columnWidths: Array<number>;
    onResize: (newColumnWidths) => void;
    sortColumn?: string;
    sortDirection?: 'ASC' | 'DESC';
    onSort: (sortBy: string, sortDirection: string) => void;
    className?: string;
    width: number;
    scrollLeft: any;
}

interface HeaderColumnProps {
    onClick?: any;
    onKeyDown?: any;
}

export interface IGridHeaderState {
    columnWidths: Array<number>;
}

export class GridHeader extends React.Component<IGridHeaderProps, IGridHeaderState> {
    private _headerGrid: any;
    constructor(props) {
        super(props);
        this.state = {
            columnWidths: props.columnWidths
        };
    }
    componentWillReceiveProps(nextProps) {
        this.setState({ ...this.state, columnWidths: nextProps.columnWidths });
    }
    render() {
        const headerClass = classNames('grid-header', this.props.className);
        const { columns, width, scrollLeft } = this.props;
        return (
            <div style={{ width }}>
                <Grid
                    ref={(g) => { this._headerGrid = g; }}
                    cellRenderer={this._headerCellRender}
                    className="grid-component-header"
                    columnWidth={this._getHeaderColumnWidth}
                    columnCount={columns.length}
                    height={30}
                    rowHeight={28}
                    rowCount={1}
                    width={width}
                    scrollLeft={scrollLeft}
                />
            </div>
        );
    }

    @autobind
    private _getHeaderColumnWidth({ index }) {
        return this.state.columnWidths[index];
    }

    @autobind
    private _headerCellRender({ columnIndex, key, rowIndex, style }) {
        const notLastIndex = columnIndex < (this.state.columnWidths.length - 2);
        const column = this.props.columns[columnIndex];

        return (
            <div
                className={'grid-header-column'}
                key={key}
                style={style}>
                {this._createHeaderColumn(column, columnIndex)}
                {notLastIndex &&
                    <DraggableCore
                        zIndex={100}
                        axis="x"
                        onStop={(e, data) => this.onDragHeaderStop(e, data, columnIndex)}
                        onDrag={(e, data) => this._onDragHeaderColumn(e, data, columnIndex)}
                        position={{ x: 0, y: 0 }}>
                        <div className="grid-column-draggable">&nbsp;</div>
                    </DraggableCore>
                }
            </div>
        );
    }

    @autobind
    private _onDragHeaderColumn(e, data, columnIndex) {
        const columnDefinition = this.props.columns;
        let columnWidth = this.state.columnWidths[columnIndex];
        const columnMinWidth = this.props.columns[columnIndex].minWidth || 0;
        let nextColumnWidth = this.state.columnWidths[columnIndex + 1];
        const nextColumnMinWidth = this.props.columns[columnIndex + 1].minWidth || 0;
        columnWidth = columnWidth + data.deltaX;
        nextColumnWidth = nextColumnWidth - data.deltaX;
        if (columnWidth < columnMinWidth) {
            columnWidth = columnMinWidth;
            nextColumnWidth = this.state.columnWidths[columnIndex + 1];
        }
        if (nextColumnWidth < nextColumnMinWidth) {
            nextColumnWidth = nextColumnMinWidth;
            columnWidth = this.state.columnWidths[columnIndex];
        }
        let newColumnWidths = [...this.state.columnWidths];
        newColumnWidths[columnIndex] = columnWidth;
        newColumnWidths[columnIndex + 1] = nextColumnWidth;
        this.setState((oldState) => { return { ...oldState, columnWidths: newColumnWidths }; });
        this._headerGrid.recomputeGridSize({ columnIndex: columnIndex, rowIndex: 0 });

    }

    @autobind
    private onDragHeaderStop(e, data, key) {
        this.props.onResize(this.state.columnWidths);
    }

    _createHeaderColumn(column: GridColumn, index: number) {
        const { HeaderText, disableSort, headerClassName, valueMember } = column;
        const columnClassName = classNames('header-column-content', headerClassName, { 'sortable': !disableSort });
        let divProps: HeaderColumnProps = {};
        if (!disableSort) {
            const newSortDirection = this.props.sortColumn !== valueMember || this.props.sortDirection === 'DESC' ? 'ASC' : 'DESC';
            const onClick = (event) => {
                this.props.onSort(valueMember, newSortDirection);
            };
            const onKeyDown = (event) => {
                if (event.key === 'Enter' || event.key === ' ') {
                    onClick(event);
                }
            };
            divProps = {
                onClick: onClick,
                onKeyDown: onKeyDown
            };
        }
        const showSortIndicator = this.props.sortColumn === valueMember;
        return (
            <div
                {...divProps}
                key={`Header-Col${index}`}
                className={columnClassName}
            >
                <span
                    key="label"
                    title={HeaderText}
                >
                    {HeaderText}
                </span>
                {showSortIndicator &&
                    <SortIndicator
                        key="SortIndicator"
                        sortDirection={this.props.sortDirection}
                    />
                }
            </div>
        );
    }
}
