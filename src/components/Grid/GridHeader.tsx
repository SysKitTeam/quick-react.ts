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
    private columnMinWidths: Array<number>;
    constructor(props) {
        super(props);
        this.state = {
            columnWidths: props.columnWidths
        };
        this.columnMinWidths = props.columns.map((col) => { return col.minWidth || 0; });
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
        const notLastIndex = columnIndex < (this.state.columnWidths.length - 1);
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
        this.setState((oldState) => {
            const columnWidth = oldState.columnWidths[columnIndex];
            const nextColumnWidth = oldState.columnWidths[columnIndex + 1];

            let newColumnWidth = columnWidth + data.deltaX;
            let newNextColumnWidth = nextColumnWidth - data.deltaX;

            if (newColumnWidth <= this.columnMinWidths[columnIndex]) {
                newColumnWidth = this.columnMinWidths[columnIndex];
                newNextColumnWidth = (columnWidth + nextColumnWidth) - newColumnWidth;
            }
            if (newNextColumnWidth <= this.columnMinWidths[columnIndex + 1]) {
                newNextColumnWidth = this.columnMinWidths[columnIndex + 1];
                newColumnWidth = (columnWidth + nextColumnWidth) - newNextColumnWidth;
            }

            let newColumnWidths = [...oldState.columnWidths];
            newColumnWidths[columnIndex] = newColumnWidth;
            newColumnWidths[columnIndex + 1] = newNextColumnWidth;

            return { ...oldState, columnWidths: newColumnWidths };
        });
        this._headerGrid.recomputeGridSize({ columnIndex: columnIndex, rowIndex: 0 });

    }

    @autobind
    private onDragHeaderStop(e, data, key) {
        this.props.onResize(this.state.columnWidths);
    }

    _createHeaderColumn(column: GridColumn, index: number) {
        const { headerText, isSortable, headerClassName, valueMember } = column;
        const columnClassName = classNames('header-column-content', headerClassName, { 'sortable': isSortable });
        let divProps: HeaderColumnProps = {};
        if (isSortable) {
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
                    title={headerText}
                >
                    {headerText}
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
