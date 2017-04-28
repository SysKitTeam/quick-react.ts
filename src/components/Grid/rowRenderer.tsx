import * as React from 'react';
import { Icon } from '../Icon/Icon';
import { IGridProps, GridColumn } from './Grid.Props';

class RowProps {
    tabIndex: number;
    onClick: any;
    onDoubleClick: any;
    onMouseOut: any;
    onMouseOver: any;
}

export function customRowRenderer(gridColumns: Array<GridColumn>, onRowExpandToggle, {
    className,
    columns,
    index,
    isScrolling,
    key,
    onRowClick,
    onRowDoubleClick,
    onRowMouseOver,
    onRowMouseOut,
    rowData,
    style
}) {

    let rowProperties = new RowProps();
    if (
        onRowClick ||
        onRowDoubleClick ||
        onRowMouseOver ||
        onRowMouseOut
    ) {
        rowProperties['aria-label'] = 'row';
        rowProperties.tabIndex = 0;

        if (onRowClick) {
            rowProperties.onClick = (event) => onRowClick({ event, index, rowData });
        }
        if (onRowDoubleClick) {
            rowProperties.onDoubleClick = (event) => onRowDoubleClick({ event, index, rowData });
        }
        if (onRowMouseOut) {
            rowProperties.onMouseOut = (event) => onRowMouseOut({ event, index, rowData });
        }
        if (onRowMouseOver) {
            rowProperties.onMouseOver = (event) => onRowMouseOver({ event, index, rowData });
        }
    }  

    if (rowData.type === 'GroupRow') {
        const iconName = rowData.isExpanded ? 'icon-Arrow_up' : 'icon-arrow_down';
        const columnName = gridColumns.filter((column) => { return column.valueMember === rowData.columnGroupName; })[0].HeaderText;
        const padding: React.CSSProperties = { paddingLeft: 30 * rowData.depth, paddingRight: 10 }; // TODO: add to css 

        const toggleRow = () => {
            onRowExpandToggle(rowData.columnGroupName, rowData.groupKey, !rowData.isExpanded);
        };

        return (
            <div
                {...rowProperties}
                className={className}
                key={key}
                role={'row'}
                style={style}
                >
                <p style={padding}>
                    {columnName}: {rowData.name}
                </p>
                <Icon iconName={iconName} onClick={toggleRow} ></Icon>
            </div>
        );
    } else {
        return (
            <div
                {...rowProperties}
                className={className}
                key={key}
                role={'row'}
                style={style}
                >
                {columns}
            </div>
        );
    }
}
