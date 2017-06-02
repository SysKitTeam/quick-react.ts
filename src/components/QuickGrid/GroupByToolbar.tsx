import * as React from 'react';
import { GridColumn, SortDirection } from './QuickGrid.Props';
import { Icon } from '../Icon/Icon';
import * as _ from 'lodash';
import { DropTarget } from 'react-dnd';
import * as classNames from 'classnames';
import { HeaderColumn, IHeaderColumnProps } from './HeaderColumn';
import { shallowCompareArrayEqual } from '../../utilities/array';
import './QuickGrid.scss';

export interface IGroupByProps {
    groupBy: Array<string>;
    columns: Array<GridColumn>;
    onGroupByRemoved: (groupName: string) => void;
    onGroupByChanged: (newGroupBy: Array<string>) => void;
    sortColumn?: string;
    sortDirection?: SortDirection;
    onSort: (sortBy: string, sortDirection: SortDirection) => void;

    // Drag&Drop props
    canDrop?: any;
    isOver?: any;
    connectDropTarget?: any;
}
export interface IGroupByState {
    groupBy: Array<string>;
}

class GroupByToolbarInner extends React.PureComponent<IGroupByProps, IGroupByState> {
    constructor(props: IGroupByProps) {
        super(props);
        this.state = {
            groupBy: props.groupBy
        };
    }

    componentWillReceiveProps(nextProps) {
        if (!shallowCompareArrayEqual(nextProps.groupBy, this.props.groupBy)) {
            this.setState((prevState) => { return { ...prevState, groupBy: nextProps.groupBy }; });
        }
    }

    createHeaderColumn(column: GridColumn, index: number) {
        const { headerText, isSortable, headerClassName, valueMember } = column;
        const columnClassName = classNames('header-column-content', 'group-by-column', headerClassName, { 'header-column-sortable': isSortable });
        const showSortIndicator = this.props.sortColumn === valueMember;
        const newSortDirection = this.props.sortColumn !== valueMember || this.props.sortDirection === SortDirection.Descending ? SortDirection.Ascending : SortDirection.Descending;
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
                            moveGroupByColumn={this.groupOrderChange}
                            itemArrayIndex={index}
                        />
                    </span>
                    <Icon iconName="icon-delete" className="iconArrowWithBorder" onClick={removeGroup} />
                </span>
            </div>

        );
    }

    groupOrderChange = (draggedColumnIndex, hoverColumnIndex) => {
        this.setState((prevState) => {
            let groupBy = [...prevState.groupBy];
            let temp = groupBy[draggedColumnIndex];
            groupBy[draggedColumnIndex] = groupBy[hoverColumnIndex];
            groupBy[hoverColumnIndex] = temp;
            return { ...prevState, groupBy: groupBy };
        });
    }

    getGroupedColumns(allColumns, groupBy) {
        let columns = [];
        groupBy.forEach(groupValue => {
            const groupColumn = _.find(allColumns, (col: GridColumn) => { return col.valueMember === groupValue; });
            columns.push(groupColumn);
        });
        return columns;
    }

    render() {
        const { canDrop, isOver, connectDropTarget, columns, onGroupByRemoved } = this.props;
        const isEmpty = _.isEmpty(this.state.groupBy);
        const groupedColumns: Array<GridColumn> = this.getGroupedColumns(columns, this.state.groupBy);
        return connectDropTarget(
            <div className="group-drop-toolbar">
                {
                    isEmpty && <span className="group-drop-empty">Drag column to group</span>
                }
                {
                    groupedColumns.map((col: GridColumn, index) => {
                        return this.createHeaderColumn(col, index);
                    })
                }
            </div>
        );
    }
}

const boxTarget = {
    drop(props: IGroupByProps, monitor, component) {
        const item = monitor.getItem();
        const alreadyGrouped = _.find(props.groupBy, (groupByColumn) => { return groupByColumn === item.name; });
        if (!alreadyGrouped) {
            const groupBy = [...props.groupBy, item.name];
            props.onGroupByChanged(groupBy);
        } else {
            const droppedItem = monitor.getItem();
            const droppedItemNewIndex = droppedItem.index;
            let newGroupBy = [...props.groupBy];
            const itemOldIndex = _.findIndex(newGroupBy, (groupName) => { return groupName === droppedItem.name; });
            if (itemOldIndex === droppedItemNewIndex) {
                return;
            }
            let temp = newGroupBy[itemOldIndex];
            newGroupBy[itemOldIndex] = newGroupBy[droppedItemNewIndex];
            newGroupBy[droppedItemNewIndex] = temp;
            props.onGroupByChanged(newGroupBy);
        }
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
