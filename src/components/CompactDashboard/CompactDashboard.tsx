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
const serverTileHeight = 55;
const headerRolesHeight = 25;

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
            groups: filterFarms(props.farms, props.filter, props.filteringOptions)
        };
    }

    componentDidUpdate(prevProps: ICompactDashboardProps, prevState) {
        if (this.props.filter !== prevProps.filter || (prevProps.farms !== this.props.farms)) {
            if (this.list) {
                this.list.recomputeRowHeights();
            }
        }
    }

    public componentWillReceiveProps(nextProps: ICompactDashboardProps) {
        const filteredFarms = filterFarms(nextProps.farms, nextProps.filter, nextProps.filteringOptions);
        this.setState({ ...this.state, groups: filteredFarms });
    }

    public render() {
        let { title, hoverMessageForCriticalOrWarningServer } = this.props;
        let { groups } = this.state;
        let className = classNames({ [this.props.className]: this.props.className !== undefined });
        let serverHeight = serverTileHeight;
        if (this.props.singleGroupView && this.state.groups.length > 0) {
            const anyRolesOnServers = this.state.groups[0].servers.filter(server => (server.roles && server.roles.length > 0)).length > 0;
            if (anyRolesOnServers) {
                serverHeight += headerRolesHeight;
            }
        }
        return (
            <div className={className}>
                {this.props.singleGroupView && this.state.groups.length > 0 &&
                    <div className="compact-dashboard-container">
                        <SingleGroupCollection
                            group={this.state.groups[0]}
                            gutterSize={GUTTER_SIZE}
                            tileHeight={serverHeight}
                            tileWidth={serverTileWidth}
                            renderSingleTile={this.renderSingleServerCell}
                        />
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
                                        rowHeight={(index) => this.getRowHeight(width, index)}
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
    private getRowHeight(width, obj: { index: number }): number {
        const farm = this.getRow(obj.index);
        if (farm === undefined) {
            return 0;
        }
        let serverTileTotalHeight = serverTileHeight + headerRolesHeight;
        const serversPerRow = Math.floor((width - totalPaddingHorizontal) / serverTileWidth);
        let farmServerCount = farm.servers.length;
        const rowCount = Math.ceil(farmServerCount / serversPerRow);
        const serverHeight = rowCount * serverTileTotalHeight;
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

        let icon = getIconNameFromType(this.props.icons, farm.type);

        return (
            <div style={style} key={index}>
                <CompactFarm
                    onGroupEdit={this.props.onGroupEdit}
                    onGroupDelete={this.props.onGroupDelete}
                    onAddToGroup={this.props.onAddToGroup}
                    onServerRoleEdit={this.props.onServerRoleEdit}
                    farm={farm}
                    filter={this.props.filter}
                    serverOnClick={this.props.serverOnClick}
                    groupOnClick={this.props.groupOnClick}
                    iconName={icon.iconName}
                    iconTitle={icon.iconTitle}
                    onServerClose={this.props.onServerClose !== undefined ? this._onServerClose : undefined}
                    hoverMessageForCriticalOrWarningServer={this.props.hoverMessageForCriticalOrWarningServer}
                />
            </div>
        );
    }

    @autobind
    private renderSingleServerCell(server, { index, isScrolling, key, style }): JSX.Element {
        let compactServerClassName = classNames('compact-farm', { 'is-clickable': this.props.serverOnClick !== undefined && this.props.serverOnClick !== null });

        return (
            <HoverableCompactServer
                key={key}
                server={server}
                className={compactServerClassName}
                style={style}
                onRoleEdit={this.props.onServerRoleEdit}
                serverOnClick={this.props.serverOnClick}
                hoverMessageForCriticalOrWarningServer={this.props.hoverMessageForCriticalOrWarningServer}
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
