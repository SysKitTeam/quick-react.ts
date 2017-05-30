import * as React from 'react';
import { DragSource } from 'react-dnd';
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

    connectDragSource?: any;
    connectDragPreview?: any;
}

class HeaderColumnInner extends React.Component<IHeaderColumnProps, void> {
    constructor(props: IHeaderColumnProps) {
        super(props);
    }
    DragElement = <div style={{ height: 50, width: 30 }} > <span> Drag </span> </div>;
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
                    {/*{this.props.connectDragPreview(this.DragElement)}*/}
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
        connectDragSource: connect.dragSource(),
        connectDragPreview: connect.dragPreview()
    };
}

export const HeaderColumn: React.ComponentClass<IHeaderColumnProps> = DragSource('Column', headerCellSource, collect)(HeaderColumnInner);

