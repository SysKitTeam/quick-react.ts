import * as React from 'react';
import * as classNames from 'classnames';
import { IGridHeaderState, IGridHeaderProps } from './QuickGridHeader.Props';
import { GridColumn } from './QuickGrid.Props';
import { GroupByToolbar } from './GroupByToolbar';
import { HeaderColumn } from './HeaderColumn';

import { Grid, SortIndicator } from 'react-virtualized';
const DraggableCore = require('react-draggable').DraggableCore;
import * as _ from 'lodash';


import './QuickGrid.scss';

export class GridHeader extends React.PureComponent<IGridHeaderProps, IGridHeaderState> {
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

    componentDidUpdate(prevProps, prevState) {
        this._headerGrid.recomputeGridSize();
    }

    setGridReference = (ref) => { this._headerGrid = ref; };

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
                        onSort={this.props.onGroupBySort}
                        sortColumn={this.props.groupBySortColumn}
                        sortDirection={this.props.groupBySortDirection}
                    />
                }
                <Grid
                    ref={this.setGridReference}
                    cellRenderer={this._headerCellRender}
                    className="grid-component-header"
                    columnWidth={this._getHeaderColumnWidth}
                    columnCount={headerColumns.length}
                    height={30}
                    rowHeight={28}
                    rowCount={1}
                    width={width}
                    scrollLeft={scrollLeft}
                    {...this.props} // force update on any prop change
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
                {this._createHeaderColumn(column)}
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

    _createHeaderColumn(column: GridColumn) {
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
            <HeaderColumn
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

// export const GridHeader: React.ComponentClass<IGridHeaderProps> = DragDropContext(HTML5Backend)(GridHeaderInner);
