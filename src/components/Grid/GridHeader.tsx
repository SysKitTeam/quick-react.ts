import * as React from 'react';
import * as classNames from 'classnames';
import { createSelector } from 'reselect';
import { AutoSizer, Table, Column, ColumnProps, SortIndicator } from 'react-virtualized';
import { IGridProps, IGridState, GridColumn, RowSelectorProps } from './Grid.Props';
import { customRowRenderer } from './rowRenderer';
import { autobind } from '../../utilities/autobind';
import { RowsSelector } from './rowSelector';
import { groupRows } from './rowGrouper';
import { headerRenderer } from './headerRenderer';
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
    render() {
        const headerClass = classNames('grid-header', this.props.className);
        return (
            <div className={headerClass}>
                {this.props.columns.map((column, index) =>
                    this._createHeaderColumn(column, index)
                )}
            </div>
        );
    }

    _createHeaderColumn(column: GridColumn, index: number) {
        const { HeaderText, disableSort, headerClassName, valueMember } = column;
        const columnClassName = classNames('grid-header', headerClassName, { 'sortable': !disableSort });
        let divProps: HeaderColumnProps = {};
        if (!disableSort) {
            const newSortDirection = this.props.sortColumn !== valueMember || this.props.sortDirection === 'DESC' ? 'ASC' : 'DESC';
            const onClick = (event) => {
                this.props.onSort(valueMember, newSortDirection);
                // onHeaderClick && onHeaderClick({ columnData, dataKey, event })
            };

            const onKeyDown = (event) => {
                if (event.key === 'Enter' || event.key === ' ') {
                    onClick(event);
                }
            };

            // a11yProps['aria-label'] = column.props['aria-label'] || label || dataKey
            // a11yProps.role = 'rowheader'
            // a11yProps.tabIndex = 0

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
                // style={style}
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
