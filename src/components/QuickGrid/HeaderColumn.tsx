import * as React from 'react';
import { findDOMNode } from 'react-dom';
import { DragSource, DropTarget } from 'react-dnd';
import { SortIndicator } from 'react-virtualized';
import { GridColumn } from './QuickGrid.Props';
import * as classNames from 'classnames';

import './QuickGrid.scss';

export interface IHeaderColumnProps {
    valueMember: string;
    className: string;
    text: string;
    showSortIndicator: boolean;
    sortDirection?: 'ASC' | 'DESC';
    onClick?: any;
    onKeyDown?: any;
    isGroupable?: boolean;
    moveGroupByColumn?: (draggedColumn, hoverColumn) => void;
    itemArrayIndex?: number;
    // Drag&Drop props
    connectDragSource?: any;
    connectDragPreview?: any;
    connectDropTarget?: any;
}

class HeaderColumnInner extends React.Component<IHeaderColumnProps, void> {
    constructor(props: IHeaderColumnProps) {
        super(props);
    }
    DragElement = <div style={{ height: 50, width: 30 }} > <span> Drag </span> </div>;
    render() {
        const { className, text, showSortIndicator, sortDirection, onClick, onKeyDown } = this.props;
        return (
            this.props.connectDragSource(this.props.connectDropTarget(
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
            ));
    }
}

const headerCellSource = {
    beginDrag(props: IHeaderColumnProps) {
        return {
            name: props.valueMember,
            index: props.itemArrayIndex
        };
    },
    canDrag(props: IHeaderColumnProps, monitor) {
        return props.isGroupable === true;
    }
};

function collectDragSource(connect, monitor) {
    return {
        connectDragSource: connect.dragSource(),
        connectDragPreview: connect.dragPreview()
    };
}

const headerCellDropTarget = {
    hover(props: IHeaderColumnProps, monitor, component) {
        const draggedItemIndex = monitor.getItem().index;
        const hoverItemIndex = props.itemArrayIndex;
        if (draggedItemIndex === undefined || hoverItemIndex === undefined) {
            return;
        }
        if (draggedItemIndex === hoverItemIndex) {
            return;
        }
        const hoverBoundingRect = findDOMNode(component).getBoundingClientRect();
        const clientOffset = monitor.getClientOffset();
        if (draggedItemIndex < hoverItemIndex && clientOffset.x < hoverBoundingRect.left) {
            return;
        }
        if (draggedItemIndex > hoverItemIndex && clientOffset.x > hoverBoundingRect.right) {
            return;
        } 
        props.moveGroupByColumn(draggedItemIndex, hoverItemIndex);
        monitor.getItem().index = hoverItemIndex;
    }
};

function collectDropTarget(connect) {
    return {
        connectDropTarget: connect.dropTarget()
    };
}

export const HeaderColumn: React.ComponentClass<IHeaderColumnProps> =
    DropTarget('Column', headerCellDropTarget, collectDropTarget)(
        DragSource('Column', headerCellSource, collectDragSource)
            (HeaderColumnInner));
