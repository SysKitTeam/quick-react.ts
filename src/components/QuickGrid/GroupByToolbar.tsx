
import * as React from 'react';
import { GridColumn } from './QuickGrid.Props';
import { Icon } from '../Icon/Icon';
import * as _ from 'lodash';
import { DropTarget } from 'react-dnd';
import * as classNames from 'classnames';

import { HeaderColumn, IHeaderColumnProps } from './HeaderColumn';


import './QuickGrid.scss';

export interface IGroupByProps {
    groupBy: Array<string>;
    columns: Array<GridColumn>;
    onGroupByRemoved: (groupName: string) => void;
    onGroupByChanged: (newGroupBy: Array<string>) => void;
    sortColumn?: string;
    sortDirection?: 'ASC' | 'DESC';
    onSort: (sortBy: string, sortDirection: string) => void;

    // Drag&Drop props
    canDrop?: any;
    isOver?: any;
    connectDropTarget?: any;
}

class GroupByToolbarInner extends React.Component<IGroupByProps, void> {
    createHeaderColumn(column: GridColumn) {
        const { headerText, isSortable, headerClassName, valueMember } = column;
        const columnClassName = classNames('header-column-content', 'group-by-column', headerClassName, { 'header-column-sortable': isSortable });
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
        const removeGroup = () => {
            this.props.onGroupByRemoved(valueMember);
        };
        return (
            <div key={valueMember} className="group-column-box">
                <span className="group-text-boarder">
                    <span  >
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
                    </span>
                    <Icon iconName="icon-delete" className="iconArrowWithBorder" onClick={removeGroup} />
                </span>
            </div>

        );
    }

    render() {
        const { canDrop, isOver, connectDropTarget, groupBy, columns, onGroupByRemoved } = this.props;
        const isEmpty = _.isEmpty(groupBy);
        const groupedColumns: Array<GridColumn> = _.filter(columns, (col: GridColumn) => {
            return _.some(groupBy, (grouped) => { return grouped === col.valueMember; });
        });

        return connectDropTarget(
            <div className="group-drop-toolbar">
                {
                    isEmpty && <span className="group-drop-empty">Drag column to group</span>
                }
                {
                    groupedColumns.map((col: GridColumn) => {
                        return this.createHeaderColumn(col);
                    })
                }
            </div>
        );
    }
}

const boxTarget = {
    drop(props: IGroupByProps, monitor, component) {
        // TODO: check drop position?
        // check if item is already in groupBy
        const item = monitor.getItem();
        const groupBy = [...props.groupBy, item.name];
        props.onGroupByChanged(groupBy);
    },
    hover(props, monitor, component) {

    }
};

function targetConnector(connect, monitor) {
    return {
        connectDropTarget: connect.dropTarget(),
        isOver: monitor.isOver(),
        canDrop: monitor.canDrop()
    };
}

export const GroupByToolbar: React.ComponentClass<IGroupByProps> = DropTarget('Column', boxTarget, targetConnector)(GroupByToolbarInner);
