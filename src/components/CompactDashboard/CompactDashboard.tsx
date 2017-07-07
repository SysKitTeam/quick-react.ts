import * as React from 'react';
import { ICompactDashboardProps, ICompactDashboardState } from './CompactDashboard.Props';
import { CompactFarm } from '../CompactFarm/CompactFarm';
import { ICompactFarmProps } from '../CompactFarm/CompactFarm.Props';
const List = require('react-virtualized').List;
const AutoSizer = require('react-virtualized').AutoSizer;
const Collection = require('react-virtualized').Collection;
import * as classNames from 'classnames';
import { IGroup, IServer, Partition } from '../../models';
import { autobind } from '../../utilities/autobind';
import { sortServersByStatusAndName, filterServerByName, filterServerByStatus, getServerMeasures } from '../../utilities/server';
import { filterFarms } from '../Dashboard/Dashboard';

import './CompactDashboard.scss';
import { CompactServer } from '../CompactServer/';
import { SingleGroupCollection } from '../SingleGroupCollection';
import { Callout } from '../Callout';
import { CommonComponent } from '../Common';
import { HoverableCompactServer } from '../HoverableCompactServer/HoverableCompactServer';
import { getIconNameFromType } from '../../utilities/groupUtils';

const GUTTER_SIZE = 3;
const CELL_WIDTH = 244;

const serverTileWidth = 252.0; // LeftMargin 8px + LeftBoarder 10px + LeftPadding 5px + Server 215px + RightPadding 5px + LeftBoarder 1px + RightMargin 8px
const serverTileHeight = 80; // Server 52px + 2 * (Margin 8 + Padding 5 + border 1)
const scrollbarWidth = 13;
const compactFarmMargin = 20;
const compactFarmPadding = 5;
const headerTotalHeight = 65; // Farm DIV size - serverTileHeight  
const totalPaddingHorizontal = 2 * (compactFarmMargin + compactFarmPadding) + scrollbarWidth;

export class CompactDashboard extends CommonComponent<ICompactDashboardProps, ICompactDashboardState> {
    list: any;

    public static defaultProps = {
        showEditRoles: false
    };

    constructor(props?: ICompactDashboardProps) {
        super(props);
        this.state = {
            collection: undefined,
            list: undefined,
            groups: filterFarms(props.farms, props.filter)
        };
    }

    @autobind
    private componentDidUpdate(prevProps: ICompactDashboardProps, prevState) {
        if (this.props.filter !== prevProps.filter || (prevProps.farms !== this.props.farms)) {
            if (this.list) {
                this.list.recomputeRowHeights();
            }
        }
    }

    public componentWillReceiveProps(nextProps: ICompactDashboardProps, nextState) {
        const filteredFarms = filterFarms(nextProps.farms, nextProps.filter);
        this.setState({ ...this.state, groups: filteredFarms });
    }

    public render() {
        let { title } = this.props;
        let { groups } = this.state;
        let classname = classNames({ [this.props.className]: this.props.className !== undefined });
        return (
            <div className={classname}>
                {
                    this.props.singleGroupView &&
                    <div className="compact-dashboard-container">
                        {
                            <SingleGroupCollection
                                group={this.state.groups[0]}
                                gutterSize={GUTTER_SIZE}
                                tileHeight={serverTileHeight}
                                tileWidth={serverTileWidth}
                                renderSingleTile={this.renderSingleServerCell}
                            />
                        }
                    </div>
                }
                {
                    !this.props.singleGroupView &&
                    <div className="compact-dashboard-container">
                        {
                            <AutoSizer onResize={this._onResize}>
                                {({ width, height }) => (
                                    <List
                                        height={height}
                                        width={width}
                                        rowCount={groups.length}
                                        ref={(reference) => {
                                            this.list = reference;
                                        }}
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
    _onResize(obj: { height: number, width: number }) {
        this.list.recomputeRowHeights();
    }

    @autobind
    private getRowHeigth(width, obj: { index: number }): number {
        const farm = this.getRow(obj.index);
        if (farm === undefined) {
            return 0;
        }
        const serversPerRow = Math.floor((width - totalPaddingHorizontal) / serverTileWidth);
        let farmServerCount = farm.servers.length;
        const rowCount = Math.ceil(farmServerCount / serversPerRow);
        const serverHeight = rowCount * serverTileHeight;
        const totalHeight = serverHeight + headerTotalHeight;
        return totalHeight;
    }

    @autobind
    private getRow(index: number): IGroup {
        return this.state.groups[index];
    }

    @autobind
    private _renderRow({ index, isScrolling, key, style }): JSX.Element {
        const farm = this.getRow(index);
        if (farm.servers.length === 0) {
            return;
        }

        return (
            <div style={style} key={index}>
                <CompactFarm
                    editGroup={this.props.groupEditFunc}
                    showEditRoles={this.props.showEditRoles}
                    serverRoleEdit={this.props.serverRoleEdit}
                    farm={farm}
                    filter={this.props.filter}
                    serverOnClick={this.props.serverOnClick}
                    groupOnClick={this.props.groupOnClick}
                    iconName={getIconNameFromType(this.props.icons, farm.type)}
                    onServerClose={this.props.onServerClose !== undefined ? this._onServerClose : undefined}
                />
            </div>
        );
    }

    @autobind
    private renderSingleServerCell(server, { index, isScrolling, key, style }): JSX.Element {
        return (
            <HoverableCompactServer
                key={key}
                server={server}
                className="compact-farm"
                style={style}
            />
        );
    }

    @autobind
    private _onServerClose(serverId, groupId, event) {
        if (this.props.onServerClose) {
            this.props.onServerClose(serverId, groupId, event);
        }
    }
}
