import * as React from 'react';
import { IServerGridDashboardProps, ServerGridRow, GridColumn, } from './ServerGridDashboard.Props';
import { customRowRenderer } from './rowRenderer';
import { ITiledDashboardFarm } from '../TileDashboard/TileDashboard.Props';
import { AutoSizer, Table, Column, ColumnProps } from 'react-virtualized';
import * as classNames from 'classnames';
import { Icon } from '../Icon/Icon';
import { autobind } from '../../utilities/autobind';
import { groupRows } from '../../utilities/RowGrouper';
const createSelector = require('reselect').createSelector;
const objectAssign = require('object-assign');
import { ProgressBar } from '../ProgressBar/ProgressBar';

import { RowsSelector } from './rowSelector';

import { sortServersByStatusAndName, filterServerByName, convertCPU, convertNetwork, convertDisk, convertRam } from '../../utilities/server';
import { IMeasure, MeasureType, IFarm, Partition, DiskMeasure, CpuMeasure, RamMeasure, NetworkMeasure, ServerStatus } from '../../models';

import './ServerGridDashboard.scss';


const gridColumns: Array<GridColumn> = [{
    key: 'FarmName',
    name: 'Farm Name',
    width: 120,
},
{
    key: 'ServerName',
    name: 'Server Name',
    width: 100,
},
{
    key: 'UserCount',
    name: 'User Count',
    width: 100,
}, {
    key: 'CPU',
    name: 'CPU',
    width: 120,
}, {
    key: 'Memory',
    name: 'Memory',
    width: 120,
    customRenderer: ({ cellData, columnData, dataKey, rowData, rowIndex}) => {
        if (cellData === undefined) {
            return '';
        }
        return (
            <ProgressBar              
                title={'RAM'}
                info={cellData.used + ' of ' + cellData.capacity + ' used'}
                dimensions={{ height: '40px', width: '100%' }}
                data={{ total: cellData.capacity, current: cellData.used }}
                progressColor={getProgressColor(cellData.status)}
                />
        );
    }
}, {
    key: 'DiskSpace',
    name: 'Disk Space',
    width: 80,
},
{
    key: 'DiskActivity',
    name: 'Disk Activity',
    width: 80,
}, {
    key: 'Network',
    name: 'Network',
    width: 80,
}, {
    key: 'LastUpdated',
    name: 'Last Updated',
    width: 100,
}];

const getProgressColor = (status) => {
    if (status === ServerStatus.Critical) {
        return '#fb6464';
    } else if (status === ServerStatus.Warning) {
        return '#EAC71A';
    } else if (status === ServerStatus.OK) {
        return '#7DC458';
    }
    return undefined;
};

const SortDirection = {
    ASC: 'ASC',
    DESC: 'DESC'
};

interface IServerGridDashboardState {
    rows: Array<ServerGridRow>;
    groupBy: Array<string>;
    expandedRows: any;
    sortColumn: string;
    sortDirection: string;
}


export class ServerGridDashboard extends React.Component<IServerGridDashboardProps, any> {

    private grid;
    constructor(props: IServerGridDashboardProps) {
        super(props);
        this.state = {
            rows: this.transformFarmToRows(props.farms),
            groupBy: ['FarmName'],
            expandedRows: {},
            sortColumn: 'ServerName',
            sortDirection: SortDirection.ASC,
        };
    }

    private transformFarmToRows(farms: Array<ITiledDashboardFarm>): Array<ServerGridRow> {
        let rows = [];
        farms.forEach(farm => {
            farm.servers.forEach(server => {
                const cpu = this.getConvertedMeasure(server.measures, MeasureType.CPU, convertCPU);
                const mem = this.getConvertedMeasure(server.measures, MeasureType.Ram, convertRam);
                const disk = this.getConvertedMeasure(server.measures, MeasureType.Disk, convertDisk);
                const net = this.getConvertedMeasure(server.measures, MeasureType.Network, convertNetwork);
                rows.push({
                    FarmName: farm.name,
                    ServerName: server.name,
                    UserCount: server.numberOfUsers,
                    CPU: cpu,
                    Memory: server.measures.filter((mes) => { return mes.type === MeasureType.Ram; })[0],
                    DiskSpace: 30,
                    DiskActivity: disk,
                    Network: net,
                    LastUpdated: Math.round(Math.random() * 3).toString() + ' sec'
                });
            });
        });
        return rows;
    }

    private getConvertedMeasure(measures, measureType, convertFunction): string {
        const measure = measures.filter((mes) => { return mes.type === measureType; })[0];
        if (measure !== undefined) {
            const converted = convertFunction(measure);
            return converted.currentUsage + ' ' + converted.usageUnit;
        }
        return '-';
    }


    @autobind
    private rowRenderer({ className, columns, index, isScrolling, key, onRowClick, onRowDoubleClick, onRowMouseOver, onRowMouseOut, rowData, style }) {
        return customRowRenderer(gridColumns, this.onRowExpandToggle.bind(this), { className, columns, index, isScrolling, key, onRowClick, onRowDoubleClick, onRowMouseOver, onRowMouseOut, rowData, style });
    }

    @autobind
    getColumnsToDisplay() {
        // reselect
        const groupedColumns: Array<string> = this.state.groupBy;
        if (groupedColumns.length === 0) {
            return gridColumns;
        }
        const nonGroupedColumns = gridColumns.filter((column) => { return groupedColumns.indexOf(column.key) === -1; });
        return nonGroupedColumns;
    }

    @autobind
    private getRow({ index }): ServerGridRow {
        const rows = this.getRows();
        return rows[index % rows.length];
    }


    private getRows() {
        const rowSortState = {
            rows: this.state.rows,
            groupedColumns: this.state.groupBy,
            expandedRows: this.state.expandedRow,
            sortColumn: this.state.sortColumn,
            sortDirection: this.state.sortDirection,
        };
        const rows = RowsSelector(rowSortState);
        return rows;
    }

    @autobind
    private getRowCount() {
        return this.getRows().length;
    }

    private onRowExpandToggle(columnGroupName, name, shouldExpand) {
        let expandedRows = objectAssign({}, this.state.expandedRows);
        expandedRows[columnGroupName] = objectAssign({}, expandedRows[columnGroupName]);
        expandedRows[columnGroupName][name] = { isExpanded: shouldExpand };
        this.setState({ expandedRows: expandedRows });
    }

    /*
        _headerRenderer ({
        columnData,
        dataKey,
        disableSort,
        label,
        sortBy,
        sortDirection
    }) {
        const iconName = sortDirection === SortDirection.ASC ? 'icon-Arrow_up' : 'icon-arrow_down';
        return (
        <div>
            Full Name
            { sortBy === dataKey &&
                <Icon iconName={iconName} ></Icon>    
            }
        </div>
        );
    }*/

    @autobind
    getCells() {
        return (
            this.getColumnsToDisplay()
                .map((column, index) => {
                    let props: ColumnProps = {
                        width: column.width,
                        label: column.name,
                        dataKey: column.key,
                        className: 'headerRow'
                    };
                    if (column.customRenderer) {
                        props.cellRenderer = column.customRenderer;
                    }
                    return (
                        <Column
                            key={index}
                            {...props}
                            />
                    );
                })
        );
    }

    @autobind
    _sort({ sortBy, sortDirection }) {
        // change to prop dispatch
        this.setState({ sortBy, sortDirection });
    }

    render() {
        return (
            <div>
                <div className="server-grid-dashboard-container">
                    <AutoSizer disableHeight>
                        {({ width }) => (
                            <Table
                                height={800}
                                headerClassName={'headerColumn'}
                                overscanRowCount={20}
                                headerHeight={30}
                                rowGetter={this.getRow}
                                sort={this._sort}
                                sortBy={this.state.sortColumn}
                                sortDirection={this.state.sortDirection}
                                rowHeight={100}
                                rowCount={this.getRowCount()}
                                width={width}
                                rowRenderer={this.rowRenderer}
                                >
                                {this.getCells()}
                            </Table>
                        )}
                    </AutoSizer>
                </div>
            </div>
        );
    }
}
