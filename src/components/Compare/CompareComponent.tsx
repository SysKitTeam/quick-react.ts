import * as React from 'react';
import {ICompareComponentState, ICompareComponentProp, CompareDifference, CompareDifferenceType} from './CompareComponent.Props';
import { Button } from '../Button/Button';
import { GridColumn } from '../QuickGrid/QuickGrid.Props';
import { GridHeader } from '../QuickGrid/QuickGridHeader';
import { Icon } from '../Icon/Icon';
import { autobind } from '../../utilities/autobind';
import { AutoSizer, ScrollSync, MultiGrid, Grid } from 'react-virtualized';
import './CompareComponent.scss';
import HTML5Backend from 'react-dnd-html5-backend';
import { DragDropContextProvider, DragDropContext } from 'react-dnd';
const scrollbarSize = require('dom-helpers/util/scrollbarSize');

import * as classNames from 'classnames';

const defaultMinColumnWidth = 100;
class CompareComponentInner extends React.PureComponent<ICompareComponentProp, ICompareComponentState> {
    private sourceRows: Array<any>;
    private targetRows: Array<any>;
    private columns: Array<GridColumn>;
    private differences: Array<CompareDifference>;
    private columnsMinTotalWidth: number;
    private leftGrid: any;
    private rightGrid: any;
    constructor(props : any) {
        super(props);

        this.state = {
            columnWidths: this.getColumnWidths(props.columns),
            missingFilter : true,
            diffFilter: true,
            equalFilter: true
        };
        this.columnsMinTotalWidth = props.columns.map(x => x.minWidth || defaultMinColumnWidth).reduce((a, b) => a + b, 0);
        this.columns = props.columns;
        this.sourceRows = props.sourceRows.map((x) => ({...x}));
        this.targetRows = props.targetRows.map((x) => ({...x}));
        this.differences = props.differences.map((x) => ({...x}));
    }

    private onGridResize = () => {
        const columnWidths = this.getColumnWidths(this.columns);
        this.setState((prevState) => ({ ...prevState, columnWidths }));
    }

    private onGridHeaderColumnsResize = (newColumnWidths: Array<number>) => {
        this.setState((oldState) => ({ ...oldState,  columnWidths: newColumnWidths }));
    }

    private getColumnWidth = ({ index }) => {
        return this.state.columnWidths[index];
    }

    private getColumnWidths(columnsToDisplay : Array<GridColumn>) {
        const available = this.getGridWidth();
        if (available > this.columnsMinTotalWidth) {
            const totalWidth = columnsToDisplay.map(x => x.width).reduce((a, b) => a + b, 0);
            return columnsToDisplay.map((col) => this.getColumnWidthInPx(available, totalWidth, col.width));
        } else {
            return columnsToDisplay.map(x => x.minWidth || defaultMinColumnWidth);
        }
    }

    private getGridWidth() {
        return this.getViewportWidth() - scrollbarSize();
    }

    private getViewportWidth() {
        let width = 0;
        if (document.getElementsByClassName('viewport-height')[0] !== undefined) {
            width = document.getElementsByClassName('viewport-height')[0].clientWidth;
        } else {
            width = document.getElementById('root').clientWidth;
        }
        return width - 25;
    }

    private getColumnWidthInPx(available: number, totalWidth: number, currentWidth: number) {
        return Math.floor((available / totalWidth) * currentWidth);
    }

    public cellRenderer = ({ columnIndex, key, rowIndex, style }, isSource = true) => {
        const columnValue = this.columns[columnIndex].valueMember;
        const value = isSource ? this.sourceRows[rowIndex][columnValue] : this.targetRows[rowIndex][columnValue];
        const diffOnRow = this.differences.filter(item => item.rowIndex === rowIndex)[0];
        let colorClass = '';
        if (diffOnRow) {
            switch (diffOnRow.differenceType) {
                case CompareDifferenceType.MissingInSource:
                    if (isSource) {
                        colorClass = 'compare-missing-in-source';
                    }
                    break;
                case CompareDifferenceType.MissingInTarget:
                    if (!isSource) {
                        colorClass = 'compare-missing-in-target';
                    }
                    break;
                case CompareDifferenceType.NotEqual:
                    colorClass = diffOnRow.columnIndex ? diffOnRow.columnIndex.indexOf(columnIndex) >= 0 ?
                        'compare-cell-different' : 'compare-row-different' : 'compare-cell-different';
                    break;
            }
        }
        const lastOrFirstIndex = columnIndex === 0 || columnIndex === (this.columns.length - 1);
        const className = classNames(
            'grid-component-cell',
            'grid-row-' + rowIndex % 2,
            colorClass,
            'border-column-cell',
            { 'lastOrFirstIndex' : lastOrFirstIndex  });
        return (
            <div className={className} key={key} style={style}>
                {value}
            </div>
        );
    }
    public cellRendererMiddle = ({ columnIndex, key, rowIndex, style }) => {
        const diffOnRow = this.differences.filter(item => item.rowIndex === rowIndex)[0];
        let iconName = 'icon-equal';
        if (diffOnRow) {
            switch (diffOnRow.differenceType) {
                case CompareDifferenceType.MissingInTarget:
                    iconName = 'icon-arrow_R';
                    break;
                case CompareDifferenceType.MissingInSource:
                    iconName = 'icon-arrow_L';
                    break;
                case CompareDifferenceType.NotEqual:
                    iconName = 'icon-not_equal';
                    break;
            }
        }
        return (
            <div className={'compare-middle-cell'} key={key} style={style}>
                 <Icon iconName={iconName}></Icon>
            </div>
        );
    }
    public cellRendererRight = ({ columnIndex, key, rowIndex, style }) => {
        return this.cellRenderer({ columnIndex, key, rowIndex, style }, false);
    }

    private reCalculateRows(props : ICompareComponentProp, state : ICompareComponentState) {
        let filteredSourceRows = props.sourceRows.map((x) => ({...x}));
        let filteredTargetRows = props.targetRows.map((x) => ({...x}));
        let filteredDiffs = props.differences.map((x) => ({...x}));
        let removeRows : Array<number> = [];
        if (!state.equalFilter) {
            filteredSourceRows = props.differences.map((x, index) => {
                filteredDiffs[index].rowIndex = index;
                return props.sourceRows[x.rowIndex];
            });
            filteredTargetRows = props.differences.map((x, index) => {
                filteredDiffs[index].rowIndex = index;
                return props.targetRows[x.rowIndex];
            });
        }
        if (!state.missingFilter) {
            removeRows = filteredDiffs.filter((x) => {
                return x.differenceType !== CompareDifferenceType.NotEqual;
            }).map((x) => {return x.rowIndex; });
        }
        if (!state.diffFilter) {
            removeRows = removeRows.concat(filteredDiffs.filter((x, index) => {
                return x.differenceType === CompareDifferenceType.NotEqual;
            }).map((x) => {return x.rowIndex; }));
        }
        if (removeRows.length > 0) {
            let cnt = 0;
            removeRows = removeRows.sort();
            removeRows.map((x, index) => {
                filteredSourceRows.splice(x - cnt, 1);
                filteredTargetRows.splice(x - cnt, 1);
                filteredDiffs.splice(filteredDiffs.indexOf(filteredDiffs.filter((y) => y.rowIndex === x - cnt)[0]), 1);
                filteredDiffs = filteredDiffs.map((y) => {
                    if (y.rowIndex >= x) {
                        y.rowIndex--;
                    }
                    return y;
                });
                cnt++;
            });
        }

        this.sourceRows = filteredSourceRows;
        this.targetRows = filteredTargetRows;
        this.differences = filteredDiffs;
    }

    private reSetPropeties(props) {
        this.setState({
            columnWidths : this.getColumnWidths(props.columns)
        });

        this.columnsMinTotalWidth = props.columns.map(x => x.minWidth || defaultMinColumnWidth).reduce((a, b) => a + b, 0);
        this.columns = props.columns;
        this.sourceRows = props.sourceRows.map((x) => ({...x}));
        this.targetRows = props.targetRows.map((x) => ({...x}));
        this.differences = props.differences.map((x) => ({...x}));
    }

    componentWillUpdate(nextProps : ICompareComponentProp, nextState : ICompareComponentState) {
        if (this.state.equalFilter !== nextState.equalFilter ||
            this.state.missingFilter !== nextState.missingFilter ||
            this.state.diffFilter !== nextState.diffFilter) {
                this.reCalculateRows(nextProps, nextState);
            }
    }

    componentDidUpdate(prevProps : ICompareComponentProp, prevState : ICompareComponentState) {
        if (prevProps.columns !== this.props.columns ||
            prevProps.sourceRows !== this.props.sourceRows ||
            prevProps.targetRows !== this.props.targetRows ||
            prevProps.differences !== this.props.differences) {
                this.reSetPropeties(this.props);
        }
        if (prevProps.columns !== this.props.columns || prevState.columnWidths !== this.state.columnWidths) {
            this.leftGrid.recomputeGridSize();
            this.rightGrid.recomputeGridSize();
        }
    }

    private setLeftGridReference = (ref) => {
        this.leftGrid = ref;
    }

    private setRightGridReference = (ref) => {
        this.rightGrid = ref;
    }

    @autobind
    private toggleEqualEntires() {
        this.setState({
            equalFilter : !this.state.equalFilter
        });
    }

    @autobind
    private toggleNotEqualEntires() {
        this.setState({
            diffFilter : !this.state.diffFilter
        });
    }

    @autobind
    private toggleMissingEntires() {
        this.setState({
            missingFilter : !this.state.missingFilter
        });
    }

    private gridComponentWidth(width) {
        return width / 2 - 25;
    }

    private gridComponentHeight(height) {
        return height - 50;
    }

    public render() {
        return (
            <div className={'compare-base-container'}>
            <AutoSizer onResize={this.onGridResize}>
                {({ height, width }) => (
                        <ScrollSync>
                            {({ onScroll, scrollLeft, scrollTop }) => (
                                <div className={'compare-resize-component'} style={{ width, height }}>
                                    <Button
                                        className={classNames({'compare-button-active' : this.state.missingFilter})}
                                        onClick={this.toggleMissingEntires}
                                        title={'Show/Hide equal entires'}
                                        icon={' icon-arrows'}
                                    />
                                    <Button
                                        className={classNames({'compare-button-active' : this.state.diffFilter})}
                                        onClick={this.toggleNotEqualEntires}
                                        title={'Show/Hide equal entires'}
                                        icon={'icon-not_equal'}
                                    />
                                    <Button
                                        className={classNames({'compare-button-active' : this.state.equalFilter})}
                                        onClick={this.toggleEqualEntires}
                                        title={'Show/Hide equal entires'}
                                        icon={'icon-equal'}
                                    />
                                    <div className={'grid-component-container'} style={{height : height - 50}}>
                                        <div className={'compare-single-grid-wrapper'}>
                                            <GridHeader
                                                allColumns={this.columns}
                                                headerColumns={this.columns}
                                                columnWidths={this.state.columnWidths}
                                                width={this.gridComponentWidth(width)}
                                                scrollLeft={scrollLeft}
                                                className={'grid-component-header'}
                                                groupBy={[]}
                                                onResize={this.onGridHeaderColumnsResize}
                                                displayGroupContainer={false}
                                                hasActionColumn={false}
                                                tooltipsEnabled={false}
                                            />
                                            <Grid
                                                ref={this.setLeftGridReference}
                                                height={this.gridComponentHeight(height)}
                                                width={this.gridComponentWidth(width)}
                                                cellRenderer={this.cellRenderer}
                                                overscanRowCount={20}
                                                columnWidth={this.getColumnWidth}
                                                rowHeight={28}
                                                className={'grid-component'}
                                                rowCount={this.sourceRows.length}
                                                columnCount={this.columns.length}
                                                onScroll={onScroll}
                                                scrollTop={scrollTop}
                                                scrollLeft={scrollLeft}
                                            />
                                        </div>
                                        <div className={'compare-single-grid-wrapper'}>
                                            <Grid
                                                height={this.gridComponentHeight(height)}
                                                width={50}
                                                cellRenderer={this.cellRendererMiddle}
                                                overscanRowCount={20}
                                                columnWidth={50}
                                                rowHeight={28}
                                                className={'compare-grid-middle'}
                                                rowCount={this.targetRows.length}
                                                columnCount={1}
                                                scrollTop={scrollTop}
                                            />
                                        </div>
                                        <div className={'compare-single-grid-wrapper'}>
                                        <GridHeader
                                            allColumns={this.columns}
                                            headerColumns={this.columns}
                                            columnWidths={this.state.columnWidths}
                                            width={this.gridComponentWidth(width)}
                                            scrollLeft={scrollLeft}
                                            className={'grid-component-header'}
                                            groupBy={[]}
                                            onResize={this.onGridHeaderColumnsResize}
                                            displayGroupContainer={false}
                                            hasActionColumn={false}
                                            tooltipsEnabled={false}
                                        />
                                        <Grid
                                            ref={this.setRightGridReference}
                                            height={this.gridComponentHeight(height)}
                                            width={this.gridComponentWidth(width)}
                                            cellRenderer={this.cellRendererRight}
                                            overscanRowCount={20}
                                            columnWidth={this.getColumnWidth}
                                            rowHeight={28}
                                            className={'grid-component'}
                                            rowCount={this.targetRows.length}
                                            columnCount={this.columns.length}
                                            scrollTop={scrollTop}
                                            onScroll={onScroll}
                                            scrollLeft={scrollLeft}
                                        />
                                        </div>
                                    </div>
                                    <div className={'compare-legend-icons'}>
                                        Legend: 
                                        <Icon iconName={'icon-not_equal'}></Icon> Different
                                        <Icon iconName={'icon-arrow_L'} ></Icon> Missing in source
                                        <Icon iconName={'icon-arrow_R'} ></Icon> Missing in target
                                        <div className={'icon-row-different'}></div> Different row
                                        <div className={'icon-cell-different'}></div> Different cell
                                    </div>
                                </div>
                             )}
                        </ScrollSync>
                     )}
                </AutoSizer> 
            </div>);
    }
}

export const CompareComponent: React.ComponentClass<ICompareComponentProp> = DragDropContext(HTML5Backend)(CompareComponentInner);
