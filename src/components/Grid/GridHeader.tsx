import * as React from 'react';
import * as classNames from 'classnames';
import { createSelector } from 'reselect';
import { AutoSizer, Table, Column, ColumnProps, SortIndicator } from 'react-virtualized';
import { IGridProps, IGridState, GridColumn } from './Grid.Props';
import { customRowRenderer } from './rowRenderer';
import { autobind } from '../../utilities/autobind';
import { RowsSelector } from './rowSelector';
import { groupRows } from './rowGrouper';
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
}
interface HeaderColumnProps {
    onClick?: any;
    onKeyDown?: any;
}
export class GridHeader extends React.Component<IGridHeaderProps, any> {
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
        let totalWidth = this.state.columnWidths.reduce((a, b) => a + b, 0);
        return (
            <div
                className={headerClass}
                style={{ width: totalWidth }}
            >
                {this.props.columns.map((column, index) =>
                    this.renderColumnWrapper(column, index)
                )}
            </div>
        );
    }

    renderColumnWrapper(column, index) {
        const notLastIndex = index < (this.state.columnWidths.length - 2);
        return (
            <div
                className={'grid-header-column'}
                key={index}
                style={{ width: this.state.columnWidths[index] }}>               
                {this._createHeaderColumn(column, index)}             
                {   notLastIndex &&
                    <DraggableCore
                        zIndex={100}
                        axis="x"
                        onStop={(e, data) => this.onDragHeaderStop(e, data, index)}
                        onDrag={(e, data) => this._onDragHeaderColumn(e, data, index)}
                        position={{ x: 0, y: 0 }}>
                        <div className="grid-column-draggable">&nbsp;</div>
                    </DraggableCore>
                }
            </div>
        );
    }

    @autobind
    private _onDragHeaderColumn(e, data, columnIndex) {
        let columnWidth = this.state.columnWidths[columnIndex];
        let nextColumnWidth = this.state.columnWidths[columnIndex + 1];
        columnWidth = columnWidth + data.deltaX;
        nextColumnWidth = nextColumnWidth - data.deltaX; 
        if (columnWidth < 0) {            
            columnWidth = 0;
            nextColumnWidth = this.state.columnWidths[columnIndex + 1];
        }
        if (nextColumnWidth < 0) {            
            nextColumnWidth = 0;
            columnWidth = this.state.columnWidths[columnIndex];
        }        
        let newColumnWidths = [...this.state.columnWidths ];
        newColumnWidths[columnIndex] = columnWidth;
        newColumnWidths[columnIndex + 1] = nextColumnWidth;
        this.setState({ ...this.state, columnWidths: newColumnWidths });
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
