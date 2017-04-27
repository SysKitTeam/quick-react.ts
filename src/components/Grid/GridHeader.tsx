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
const DraggableCore = require('react-draggable').DraggableCore;

import './Grid.scss';

export interface IGridHeaderProps {
    columns : Array<GridColumn>;
    columnWidths: Array<number>;
    onResize: () => any;

    sortColumn?: string;
    sortDirection?: 'ASC' | 'DESC';
    onSort: () => any;   
}

export class GridHeader extends React.Component<IGridHeaderProps, any> {
    render() {
        return (<br />);
    }

    

}
