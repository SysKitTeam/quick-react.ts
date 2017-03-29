
import * as React from 'react';
import { ICompactDashboardProps } from './CompactDashboard.Props';
import { CompactFarm } from '../CompactFarm/CompactFarm';
import { ICompactFarmProps, ICompactDashboardFarm } from '../CompactFarm/CompactFarm.Props';
const List = require('react-virtualized').List;
const AutoSizer = require('react-virtualized').AutoSizer;
const Collection = require('react-virtualized').Collection;
import * as classNames from 'classnames';
import { IFarm, Partition } from '../../models';
import { autobind } from '../../utilities/autobind';
import { sortServersByStatusAndName, filterServerByName } from '../../utilities/server';

import './CompactDashboard.scss';

const GUTTER_SIZE = 3;
const CELL_WIDTH = 330;

export class CompactDashboard extends React.Component<ICompactDashboardProps, any> {
    collection: any;
    list: any;
    constructor(props?: ICompactDashboardProps) {
        super(props);
        this.state = {
            columnYMap: [],
            collection: undefined,
            list: undefined,
        };
    }

    @autobind
    private componentDidUpdate(prevProps: ICompactDashboardProps, prevState) {
        if (this.props.isVertical === false && prevProps.isVertical === true) {
            this.setState({ columnYMap: [] });
        }
        if (this.props.filter !== prevProps.filter) {
            if (this.collection) {
                this.setState({ columnYMap: [] }, () => {
                    this.collection.recomputeCellSizesAndPositions();
                });
            }
            if (this.list) {
                this.list.recomputeRowHeights();
            }
        }
    }

    public render() {
        let { title, farms } = this.props;
        let classname = classNames({ [this.props.className]: this.props.className !== undefined });
        return (
            <div className={classname}>
                {
                    this.props.isVertical &&
                    <div className="compact-dashboard-container vertical">
                        {
                            <AutoSizer  >
                                {({ width, height }) => (
                                    <Collection
                                        ref={(reference) => {
                                            this.collection = reference;
                                        } }
                                        verticalOverscanSize={5}
                                        cellCount={this.props.farms.length}
                                        cellRenderer={this._renderRow}
                                        cellSizeAndPositionGetter={function (index) {
                                            return this.cellSizeAndPositionGetter(width, index);
                                        }.bind(this)}
                                        height={height}
                                        width={width}
                                        />
                                )}
                            </AutoSizer>
                        }
                    </div>
                }
                {
                    !this.props.isVertical &&
                    <div className="compact-dashboard-container">
                        {
                            <AutoSizer onResize={this._onResize}>
                                {({ width, height }) => (
                                    <List
                                        height={height}
                                        width={width}
                                        rowCount={farms.length}
                                        ref={(reference) => {
                                            this.list = reference;
                                        } }
                                        rowHeight={function (index) {
                                            return this.getRowHeigth(width, index);
                                        }.bind(this)}
                                        rowRenderer={this._renderRow}
                                        />
                                )}
                            </AutoSizer>
                        }
                    </div>
                }
            </div>
        );
    }

    @autobind
    _onResize(obj: { height: number, width: number}) {
        this.list.recomputeRowHeights();
    } 
    
    @autobind 
    private getRowHeigth(width, obj: { index: number }): number {        
        const serverTileWidth = 246.0; // Server 215px + LeftMargin 8px + LeftBodrder 10px + LeftPadding 5px + RightPadding 5px + RightMargin 8px
        const servertileHeight = 53; // Server 27px + 2 * (Margin 8 + Padding 5)
        const serverRoleTagContainerHeight = 25;
        const scrollbarWidth = 13;
        const compact_farm_margin = 20;
        const compact_farm_padding = 5;
        const customFarmHeaderHeight = 19;
        const headerTotalHeight = 141;
        const totalPadding  = 2 * (compact_farm_margin + compact_farm_padding) + scrollbarWidth;

        const farm = this.getRow(obj.index);
        if (farm === undefined) {
            return 0;
        } 
        const serversPerRow = Math.floor((width - totalPadding) / serverTileWidth);
        const farmServerCount = farm.servers.filter((server) => { return filterServerByName(this.props.filter, server.name); }).length;
        const rowCount = Math.ceil(farmServerCount / serversPerRow);
        const serverHeight = rowCount * servertileHeight;

        let serverRoleDiff = (farm.servers.some((server) => { return filterServerByName(this.props.filter, server.name) && server.roles.length > 0; })) ? rowCount * serverRoleTagContainerHeight : 0;
        // if (farm.isCustom) {
        //     serverRoleDiff += customFarmHeaderHeight;
        // }
        const totalHeight = serverHeight + headerTotalHeight + serverRoleDiff;
        return totalHeight;
    }

    @autobind
    private cellSizeAndPositionGetter(width, obj: { index: number }) {
        const columnCount = Math.floor((1800 - 72) / (CELL_WIDTH + GUTTER_SIZE));
        let columnPosition = obj.index % (columnCount || 1);
        let height = 120 + this.getRow(obj.index).servers.filter((server) => { return filterServerByName(this.props.filter, server.name); }).length * 70;
        let serverRoleDiff = (this.getRow(obj.index).servers.filter((server) => { return filterServerByName(this.props.filter, server.name) && server.roles.length > 0; })).length * 27;
        if (this.getRow(obj.index).isCustom) {
            serverRoleDiff += 21;
        }
        height += serverRoleDiff;

        const cellWidth = CELL_WIDTH;
        const x = columnPosition * (GUTTER_SIZE + cellWidth);
        const y = this.state.columnYMap[columnPosition] || 0;

        this.state.columnYMap[columnPosition] = y + height + GUTTER_SIZE;

        return {
            height,
            width: cellWidth,
            x,
            y
        };
    }

    @autobind
    private getRow(index: number): IFarm {
        const { farms } = this.props;
        return farms[index];
    }

    @autobind
    private _renderRow({ index, isScrolling, key, style }): JSX.Element {
        const farm = this.getRow(index);        
        return (
            <div style={style} key={index}>
                <CompactFarm
                    farm={farm as ICompactDashboardFarm}
                    filter={this.props.filter}
                    serverOnClick={this.props.serverOnClick}
                    />
            </div>
        );      
    }
}
