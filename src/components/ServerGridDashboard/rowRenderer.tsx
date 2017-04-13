import * as React from 'react';
import { Icon } from '../Icon/Icon';

// import type { RowRendererParams } from './types'

class RowProps {
    tabIndex: number;
    onClick: any;
    onDoubleClick: any;
    onMouseOut: any;
    onMouseOver: any;
}

export function customRowRenderer( gridColumns, onRowExpandToggle, {
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
    
    let a11yProps = new RowProps();
    if (
        onRowClick ||
        onRowDoubleClick ||
        onRowMouseOver ||
        onRowMouseOut
    ) {
        a11yProps['aria-label'] = 'row';
        a11yProps.tabIndex = 0;

        if (onRowClick) {
            a11yProps.onClick = (event) => onRowClick({ event, index, rowData });
        }
        if (onRowDoubleClick) {
            a11yProps.onDoubleClick = (event) => onRowDoubleClick({ event, index, rowData });
        }
        if (onRowMouseOut) {
            a11yProps.onMouseOut = (event) => onRowMouseOut({ event, index, rowData });
        }
        if (onRowMouseOver) {
            a11yProps.onMouseOver = (event) => onRowMouseOver({ event, index, rowData });
        }
    }
    if (rowData.type === 'GroupRow') {
         const iconName = rowData.isExpanded ? 'icon-Arrow_up' : 'icon-arrow_down';
         const columnName = gridColumns.find((col) => {return col.key === rowData.columnGroupName; }).name;
         const padding: React.CSSProperties =  { paddingLeft: 30 * rowData.depth, paddingRight: 10 };
         
         const toggleRow = () => {
            onRowExpandToggle(rowData.columnGroupName, rowData.groupKey, !rowData.isExpanded);
         };

         return (  
            <div
            {...a11yProps}
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
            {...a11yProps}
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
