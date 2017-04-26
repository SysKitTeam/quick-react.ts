import * as React from 'react';
import * as ReactDOM from 'react-dom';
const DraggableCore = require('react-draggable').DraggableCore;
import { Grid, SortIndicator, Column } from 'react-virtualized';

import { autobind } from '../../utilities/autobind';
import * as className from 'classnames';

class RowProps {
    tabIndex: number;
    onClick: any;
    onDoubleClick: any;
    onMouseOut: any;
    onMouseOver: any;
    role: any;
    onKeyDown: any;
}

export class HeaderColumn extends React.Component<any, any> {
}

// FROM virtualized 
function _createHeader({ column, index }) { // TODO: change to component - headerColumn
    const { headerClassName, headerStyle, onHeaderClick, sort, sortBy, sortDirection } = this.props; // FIXME: get props from Table
    const { dataKey, disableSort, headerRenderer, label, columnData } = column.props;
    const sortEnabled = !disableSort && sort;

    const className = classNames(
        'ReactVirtualized__Table__headerColumn',
        headerClassName,
        column.props.headerClassName,
        {
            'ReactVirtualized__Table__sortableHeaderColumn': sortEnabled
        }
    );

    const style = this._getFlexStyleForColumn(column, headerStyle);

    const renderedHeader = headerRenderer({
        columnData,
        dataKey,
        disableSort,
        label,
        sortBy,
        sortDirection
    });

    let a11yProps = new RowProps();

    if (sortEnabled || onHeaderClick) {
        // If this is a sortable header, clicking it should update the table data's sorting.
        const newSortDirection = sortBy !== dataKey || sortDirection === 'DESC' ? 'ASC' : 'DESC';

        const onClick = (event) => {
            if (sortEnabled) {
                sort({
                    sortBy: dataKey,
                    sortDirection: newSortDirection
                });
            }
            if (onHeaderClick) {
                onHeaderClick({ columnData, dataKey, event });
            }
        };

        const onKeyDown = (event) => {
            if (event.key === 'Enter' || event.key === ' ') {
                onClick(event);
            }
        };

        a11yProps['aria-label'] = column.props['aria-label'] || label || dataKey;
        a11yProps.role = 'rowheader';
        a11yProps.tabIndex = 0;
        a11yProps.onClick = onClick;
        a11yProps.onKeyDown = onKeyDown;
    }

    return (
        <div
            {...a11yProps}
            key={`Header-Col${index}`}
            className={className}
            style={style}
        >
            {renderedHeader}
        </div>
    );
}





export function headerRenderer({  // defaultHeaderRenderer({
    columnData, dataKey, disableSort, label, sortBy, sortDirection
}) {
    const showSortIndicator = sortBy === dataKey;
    const children = [
        <span
            className="ReactVirtualized__Table__headerTruncatedText"
            key="label"
            title={label}
        >
            {label}
        </span>
    ];

    if (showSortIndicator) {
        children.push(
            <SortIndicator
                key="SortIndicator"
                sortDirection={sortDirection}
            />
        );
    }
    return children;
    /*return (

        <ResizableCell
            // dataKey
            // on resize  (columnKey, size) => void          
        >
            {children}
        </ResizableCell>
    );*/
}


/*export class ResizableCell extends React.Component<any, void> {
     public render() {
         return (
            <div>              
                <div style={{ display: 'inline', paddingLeft: '10px', fontSize: '14px', paddingTop: '2px' }}>
                    {this.props.children}
                </div>
                <DraggableCore
                    zIndex={100}
                    axis="x"
                    onStop={(e, data) => this.onDragHeaderStop(e, data, columnIndex)}
                    onDrag={(e, data) => { if (data.x > columns[columnIndex].minWidth && e.clientX < (screen.width - columns[columns.length - 1].minWidth)) { this._onDragHeaderColumn(e, data, columnIndex); } }}
                    position={{ x: 0, y: 0 }}>
                    <div className="grid-column-draggable">&nbsp;</div>
                </DraggableCore>
            </div>
        );
    }


    @autobind
    private onDragHeaderStop(e, data, columnIndex) {      
        this.props.onColumnWidthsChanged(columnIndex, this.props.currentColumnWidths);
    }

    @autobind
    private _onDragHeaderColumn(e, data, columnIndex) {
        const { currentColumnWidths } = this.state;
        const { columns } = this.props;

        let rowWidthWithScroll = ReactDOM.findDOMNode(this).children[0].clientWidth;
        let sumAllColumnsWidthWithoutLast = currentColumnWidths.reduce((a, b) => a + b, 0) - currentColumnWidths[columns.length - 1];

        // sumAllColumnsWidthWithoutLast + zadnja kolumna koja moze biti najmanja 35  + deltaX
        let columnsWidth = (sumAllColumnsWidthWithoutLast + 250) + data.deltaX;
        const newColumnWidths = currentColumnWidths.splice(0);

        // sprijecava da ide u beskonačnost u desno
        if (columnsWidth < rowWidthWithScroll) {
            newColumnWidths[columnIndex] = newColumnWidths[columnIndex] + data.deltaX;
            let sum = newColumnWidths.reduce((a, b) => a + b, 0);
            let sumAllColumnWithoutLast = (sum - newColumnWidths[columns.length - 1]);

            // zadnja kolumna uzme kolko treba da se napuni prazan prostor
            newColumnWidths[columns.length - 1] = rowWidthWithScroll - sumAllColumnWithoutLast;
        }

        this.shouldComponentReallyUpdate = false;

        this.setState({ ...this.state, currentColumnWidths: newColumnWidths });
        this._headerGrid.recomputeGridSize({ columnIndex: columnIndex, rowIndex: 0 });
    }
}*/

export interface IResizableColumnHeadersProps {
    // columns?: Array<{ valueMember: string, name: string, width: number, minWidth: number }>;
    columns: Array<any>;
    onColumnWidthsChanged: (columnIndex: number, widths: Array<number>) => void;
    width: number;
    onScroll: any;
    scrollLeft: any;
    columnWidths: Array<number>;
}

/*private onColumnWidthChanged(columnIndex: number, widths: Array<number>) {
       this.setState(objectAssign({}, this.state, { columnWidths: widths }));
       this._grid.recomputeGridSize({ columnIndex: columnIndex, rowIndex: 0 });
}*/


export interface IResizableColumnHeadersState {
    currentColumnWidths: Array<number>;
}

export class ResizableColumnHeaders extends React.Component<IResizableColumnHeadersProps, IResizableColumnHeadersState> {
    private _headerGrid: any; // Reference to inner grid 
    private shouldComponentReallyUpdate = true; //
    private columnsMinWidth; // total minimal width 
    constructor(props: IResizableColumnHeadersProps) {
        super(props);
        this.columnsMinWidth = props.columns.map(x => x.minWidth).reduce((a, b) => a + b, 0);
        this.state = { currentColumnWidths: this.props.columnWidths };
    }

    public componentWillReceiveProps(newProps: IResizableColumnHeadersProps) {
        if (this.shouldComponentReallyUpdate) { // component receives props when columns are dragged 
            this.setState({ ...this.state, currentColumnWidths: newProps.columnWidths });
        }
        this.shouldComponentReallyUpdate = true;
    }

    public render(): JSX.Element {
        const { columns, width, onScroll, scrollLeft } = this.props;
        const { currentColumnWidths } = this.state;

        return (
            <div style={{ width }}>
                <Grid
                    ref={(g) => { this._headerGrid = g; }}
                    cellRenderer={this._headerCellRender}
                    className="grid-component-header"
                    columnWidth={this._getHeaderColumnWidth}
                    columnCount={columns.length}
                    height={30}
                    rowHeight={28}
                    rowCount={1}
                    width={width}
                    scrollLeft={scrollLeft}
                />
            </div>
        );
    }

    @autobind
    private _getHeaderColumnWidth({ index }) {
        const { currentColumnWidths } = this.state;
        return currentColumnWidths[index];
    }

    @autobind
    private _headerCellRender({ columnIndex, key, rowIndex, style }) {
        const { currentColumnWidths } = this.state;
        const { columns } = this.props;
        const column = columns[columnIndex];
        const columnWidth = currentColumnWidths[columnIndex];
        const innerTextWidth = columnWidth - 8;
        const borderClasses = classNames(
            'grid-header-cell',
            {
                'grid-header-right-border': columns.length - 1 > columnIndex
            });

        return (
            <div
                key={key}
                style={style}
                className={borderClasses}>
                <div style={{ display: 'inline', paddingLeft: '10px', fontSize: '14px', paddingTop: '2px' }}>{column.name}</div>
                <DraggableCore
                    zIndex={100}
                    axis="x"
                    onStop={(e, data) => this.onDragHeaderStop(e, data, columnIndex)}
                    onDrag={(e, data) => { if (data.x > columns[columnIndex].minWidth && e.clientX < (screen.width - columns[columns.length - 1].minWidth)) { this._onDragHeaderColumn(e, data, columnIndex); } }}
                    position={{ x: 0, y: 0 }}>
                    <div className="grid-column-draggable">&nbsp;</div>
                </DraggableCore>
            </div>
        );
    }

    @autobind
    private onDragHeaderStop(e, data, columnIndex) {
        const { onColumnWidthsChanged } = this.props;
        const { currentColumnWidths } = this.state;
        onColumnWidthsChanged(columnIndex, currentColumnWidths);
    }

    @autobind
    private _onDragHeaderColumn(e, data, columnIndex) {
        const { currentColumnWidths } = this.state;
        const { columns } = this.props;

        let rowWidthWithScroll = ReactDOM.findDOMNode(this).children[0].clientWidth;
        let sumAllColumnsWidthWithoutLast = currentColumnWidths.reduce((a, b) => a + b, 0) - currentColumnWidths[columns.length - 1];

        // sumAllColumnsWidthWithoutLast + zadnja kolumna koja moze biti najmanja 35  + deltaX
        let columnsWidth = (sumAllColumnsWidthWithoutLast + 250) + data.deltaX;
        const newColumnWidths = currentColumnWidths.splice(0);

        // sprijecava da ide u beskonačnost u desno
        if (columnsWidth < rowWidthWithScroll) {
            newColumnWidths[columnIndex] = newColumnWidths[columnIndex] + data.deltaX;
            let sum = newColumnWidths.reduce((a, b) => a + b, 0);
            let sumAllColumnWithoutLast = (sum - newColumnWidths[columns.length - 1]);

            // zadnja kolumna uzme kolko treba da se napuni prazan prostor
            newColumnWidths[columns.length - 1] = rowWidthWithScroll - sumAllColumnWithoutLast;
        }

        this.shouldComponentReallyUpdate = false;

        this.setState({ ...this.state, currentColumnWidths: newColumnWidths });
        this._headerGrid.recomputeGridSize({ columnIndex: columnIndex, rowIndex: 0 });
    }
}
