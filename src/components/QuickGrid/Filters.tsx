import * as React from 'react';
import * as classNames from 'classnames';
import { FiltersProps} from './QuickGrid.Props';
import { Grid} from 'react-virtualized';
import './QuickGrid.scss';
import { TextField } from '../TextField';
import { ColumnFilter } from './ColumnFilter';

export class Filters extends React.PureComponent<FiltersProps, null> {
    private _filtersGrid: any;
    constructor(props: FiltersProps) {
        super(props);
    }

    public componentDidUpdate(prevProps: FiltersProps) {
        if (prevProps.columnWidths !== this.props.columnWidths) {
            this._filtersGrid.recomputeGridSize();
        }
    }

    setGridReference = (ref) => { this._filtersGrid = ref; };

    public render() {
        const { headerColumns, width, scrollLeft} = this.props;
        return (
            <div style={{ width }}>
                <Grid
                    ref={this.setGridReference}
                    cellRenderer={this.filtersCellRender}
                    className="grid-component-header"
                    columnWidth={this.getColumnWidth}
                    columnCount={headerColumns.length}
                    height={28}
                    rowHeight={28}
                    rowCount={1}
                    width={width}
                    scrollLeft={scrollLeft}
                />
            </div>
        );
    }
    
    getColumnWidth = ({ index }) => {

        // this hachish code is beceause of some strange behavior when the horizontal scrollbar actually belongs to the inner grid(that can potentially have a vertical scrollbar)
        // the sizes of the header grid and the inner grid do not align properly and when scrolled to to far right 2 pixels are missing
        // it could be that the actual solution is somewhere in the code below that does the column size recalculation
        if (index === this.props.columnWidths.length - 1 && this._filtersGrid._scrollingContainer.scrollLeft > 2) {
            return this.props.columnWidths[index] - 2;
        }
        return this.props.columnWidths[index];
    }

    filtersCellRender = ({ columnIndex, style }) => {
        const text = this.props.headerColumns[columnIndex].headerText;
        const startColumnIndex = this.props.allColumns.indexOf(this.props.allColumns.find(el => el.headerText === text));
        const filter = this.props.columnFilters.find(el => el.columnIndex === startColumnIndex);
        let filterString = '';
        if (filter !== undefined) {
            filterString = filter.filterString;
        }
        return (
            <div
                className={classNames( 'grid-header-column')}
                style={style}
                key={`colum-filter-${text}`}>
                <ColumnFilter
                    columnIndex={startColumnIndex}
                    addColumnFilter={this.props.addColumnFilter}
                    removeColumnFilter={this.props.removeColumnFilter}
                    filterString={filterString}
                />
            </div>
        );
    }
}
