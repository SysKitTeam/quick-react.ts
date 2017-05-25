import * as React from 'react';
import * as classNames from 'classnames';
import { IGridHeaderState, IHeaderColumnProps, IGridHeaderProps } from './QuickGridHeader.Props';
import {  GridColumn } from './QuickGrid.Props';

import { Grid, SortIndicator } from 'react-virtualized';
const DraggableCore = require('react-draggable').DraggableCore;
import * as _ from 'lodash';

import HTML5Backend from 'react-dnd-html5-backend';
import { DragDropContextProvider, DragDropContext } from 'react-dnd';
import { DragSource } from 'react-dnd';
import { DropTarget } from 'react-dnd';
import { Icon } from '../Icon/Icon';

import './QuickGrid.scss';

export class GridHeaderInner extends React.Component<IGridHeaderProps, IGridHeaderState> {
    private _headerGrid: any;
    private columnMinWidths: Array<number>;
    constructor(props: IGridHeaderProps) {
        super(props);
        this.state = {
            columnWidths: props.columnWidths
        };
        this.columnMinWidths = this.getColumnMinWidths(props.headerColumns);
    }

    getColumnMinWidths(columns) {
        return columns.map((col) => { return col.minWidth || 0; });
    }

    componentWillReceiveProps(nextProps) {
        this.setState({ ...this.state, columnWidths: nextProps.columnWidths });
        this.columnMinWidths = this.getColumnMinWidths(nextProps.headerColumns);
    }

    render() {
        const headerClass = classNames('grid-header', this.props.className);
        const { allColumns, headerColumns, width, scrollLeft } = this.props;
        return (
            <div style={{ width }}>
                {
                    this.props.displayGroupContainer &&
                    <GroupByToolbar
                        columns={allColumns}
                        groupBy={this.props.groupBy}
                        onGroupByChanged={this.props.onGroupByChanged}
                        onGroupByRemoved={this.onGroupByRemoved}
                    />
                }
                <Grid
                    ref={(g) => { this._headerGrid = g; }}
                    cellRenderer={this._headerCellRender}
                    className="grid-component-header"
                    columnWidth={this._getHeaderColumnWidth}
                    columnCount={headerColumns.length}
                    height={30}
                    rowHeight={28}
                    rowCount={1}
                    width={width}
                    scrollLeft={scrollLeft}
                    {...this.props}
                />
            </div>
        );
    }

    onGroupByRemoved = (groupName) => {
        let newGroupBy = _.filter(this.props.groupBy, (group) => { return group !== groupName; });
        this.props.onGroupByChanged(newGroupBy);
    }

    _getHeaderColumnWidth = ({ index }) => {
        return this.state.columnWidths[index];
    }

    _headerCellRender = ({ columnIndex, key, rowIndex, style }) => {
        const notLastIndex = columnIndex < (this.state.columnWidths.length - 1);
        const column = this.props.headerColumns[columnIndex];

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

    _onDragHeaderColumn = (e, data, columnIndex) => {
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

    onDragHeaderStop = (e, data, key) => {
        this.props.onResize(this.state.columnWidths);
    }

    _createHeaderColumn(column: GridColumn, index: number) {
        const { headerText, isSortable, headerClassName, valueMember } = column;
        const columnClassName = classNames('header-column-content', headerClassName, { 'header-column-sortable': isSortable });
        const showSortIndicator = this.props.sortColumn === valueMember;
        const newSortDirection = this.props.sortColumn !== valueMember || this.props.sortDirection === 'DESC' ? 'ASC' : 'DESC';
        const onClick = (event) => {
            if (isSortable) {
                this.props.onSort(valueMember, newSortDirection);
            }
        };
        const onKeyDown = (event) => {
            if (isSortable && (event.key === 'Enter' || event.key === ' ')) {
                onClick(event);
            }
        };
        return (
            <DraggableHeaderColumn
                valueMember={column.valueMember}
                text={headerText}
                showSortIndicator={showSortIndicator}
                sortDirection={this.props.sortDirection}
                className={columnClassName}
                isGroupable={column.isGroupable}
                onClick={onClick}
                onKeyDown={onKeyDown}
            />
        );
    }
}

export const GridHeader: React.ComponentClass<IGridHeaderProps> = DragDropContext(HTML5Backend)(GridHeaderInner);

class HeaderColumn extends React.Component<IHeaderColumnProps, void> {
    render() {
        const { className, text, showSortIndicator, sortDirection, onClick, onKeyDown } = this.props;
        return (
            this.props.connectDragSource(
                <div
                    onClick={onClick}
                    onKeyDown={onKeyDown}
                    key={`Header-Col${text}`}
                    className={className}
                >
                    <span
                        key="label"
                        title={text}
                    >
                        {text}
                    </span>
                    {showSortIndicator &&
                        <SortIndicator
                            key="SortIndicator"
                            sortDirection={sortDirection}
                        />
                    }
                </div>
            )
        );
    }
}

const headerCellSource = {
    beginDrag(props: IHeaderColumnProps) {
        return {
            name: props.valueMember
        };
    },
    canDrag(props: IHeaderColumnProps, monitor) {
        return props.isGroupable === true;
    }
};

function collect(connect, monitor) {
    return {
        connectDragSource: connect.dragSource()
    };
}

const DraggableHeaderColumn: React.ComponentClass<IHeaderColumnProps> = DragSource('Column', headerCellSource, collect)(HeaderColumn);

// TARGET
const boxTarget = {
    drop(props, monitor, component) {
        const item = monitor.getItem();
        const groupBy = [...props.groupBy, item.name];
        props.onGroupByChanged(groupBy);
    }
};

function targetConnector(connect, monitor) {
    return {
        connectDropTarget: connect.dropTarget(),
        isOver: monitor.isOver(),
        canDrop: monitor.canDrop()
    };
}

interface IGroupByProps {
    groupBy: Array<string>;
    columns: Array<GridColumn>;
    onGroupByRemoved: (groupName: string) => void;
    onGroupByChanged: (newGroupBy: Array<string>) => void;

    // Drag&Drop props
    canDrop?: any;
    isOver?: any;
    connectDropTarget?: any;
}

class GroupByToolbarInner extends React.Component<IGroupByProps, void> {
    render() {
        const { canDrop, isOver, connectDropTarget, groupBy, columns, onGroupByRemoved } = this.props;
        const isEmpty = _.isEmpty(groupBy);
        const groupedColumns: Array<GridColumn> = _.filter(columns, (col: GridColumn) => {
            return _.some(groupBy, (grouped) => { return grouped === col.valueMember; });
        });

        return connectDropTarget(
            <div className="group-drop-toolbar">
                {
                    isEmpty && <span className="group-drop-empty" >Drag column to group</span>
                }
                {
                    groupedColumns.map((col: GridColumn) => (
                        <GroupColumn
                            key={col.valueMember}
                            value={col.valueMember}
                            text={col.headerText}
                            onGroupByRemoved={this.props.onGroupByRemoved}
                        />
                    ))
                }
            </div>
        );
    }
}

const GroupByToolbar: React.ComponentClass<IGroupByProps> = DropTarget('Column', boxTarget, targetConnector)(GroupByToolbarInner);


interface IGroupColumnProps {
    value: string;
    text: string;
    onGroupByRemoved: (groupName: string) => void;
}

class GroupColumn extends React.Component<IGroupColumnProps, any> {
    // TODO: D&D

    removeGroup = () => {
        this.props.onGroupByRemoved(this.props.value);
    }

    render() {
        return (
            <div className="group-column-box">
                <span className="group-text-boarder">
                    <span  >
                        {this.props.text}
                    </span>
                    <Icon iconName="icon-delete" className="iconArrowWithBorder" onClick={this.removeGroup} />
                </span>
            </div>
        );
    }
}
