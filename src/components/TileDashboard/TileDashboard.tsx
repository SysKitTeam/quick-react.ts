import * as React from 'react';
import { ITileDashboardProps, ITileDashboardState } from './TileDashboard.Props';
import { ServerTile } from '../ServerTile/ServerTile';
import { ITileData } from '../ServerTile/ServerTile.Props';
const AutoSizer = require('react-virtualized').AutoSizer;
const List = require('react-virtualized').List;
import { Group } from '../Group/Group';
import * as classNames from 'classnames';
import { TagContainer } from '../TagContainer/TagContainer';
import { Icon } from '../Icon/Icon';
import { autobind } from '../../utilities/autobind';
import { getServerMeasures, sortServersByStatusAndName, filterServerByName, filterServerByStatus, getDiskInformationFromMeasurements } from '../../utilities/server';
import { TileGroup } from '../TileGroup';
import { filterFarms } from '../Dashboard/Dashboard';
import { IGroup, IServer } from '../../models';

import './TileDashboard.scss';
import { SingleGroupCollection } from '../SingleGroupCollection/index';
import { getIconNameFromType } from '../../utilities/groupUtils';

const serverTileWidth = 281.0; // LeftMargin 10px + LeftBoarder 10px + Server 250px + LeftBoarder 1px + RightMargin 10px
const serverTileHeight = 213; // Server 52px + 2 * (Margin 8 + Padding 5 + border 1)
const headerRolesHeight = 23;
const scrollbarWidth = 13;
const farm_margin = 20;
const farm_padding = 5;
const headerTotalHeight = 65;
const totalPaddingHorizontal = 2 * (farm_margin + farm_padding) + scrollbarWidth;
const GUTTER_SIZE = 3;

export class TileDashboard extends React.Component<ITileDashboardProps, ITileDashboardState> {
    private list: any;

    constructor(props?: ITileDashboardProps) {
        super(props);
        this.state = {
            groups: filterFarms(props.farms, props.filter, props.filteringOptions)
        };
    }

    componentDidUpdate(prevProps: ITileDashboardProps, prevState) {
        if (this.list && ((this.props.filter !== prevProps.filter && this.list) || prevProps.farms !== this.props.farms)) {
            this.list.recomputeRowHeights();
        }
    }

    componentWillReceiveProps(nextProps: ITileDashboardProps) {
        const filteredFarms = filterFarms(nextProps.farms, nextProps.filter, nextProps.filteringOptions);
        this.setState({ groups: filteredFarms });
    }

    setReference = (ref) => { this.list = ref; };

    public render() {
        let { groups } = this.state;
        let className = classNames({ [this.props.className]: this.props.className !== undefined });
        let serverHeight = serverTileHeight;
        if (this.props.singleGroupView) {
            const anyRolesOnServers = this.state.groups[0].servers.filter(server => (server.roles && server.roles.length > 0)).length > 0;
            if (anyRolesOnServers) {
                serverHeight += headerRolesHeight;
            }
        }
        return (
            <div className={className}>
                <div className="tile-dashboard-container">
                    {!this.props.singleGroupView &&
                        <AutoSizer onResize={this._onResize}>
                            {({ width, height }) => (
                                <List
                                    height={height}
                                    ref={this.setReference}
                                    rowCount={groups.length}
                                    rowHeight={(index) => this.calculateRowHeight(width, index)}
                                    rowRenderer={this._renderRow}
                                    width={width}
                                />
                            )}
                        </AutoSizer>
                    }
                    {this.props.singleGroupView &&
                        <SingleGroupCollection
                            group={this.state.groups[0]}
                            gutterSize={GUTTER_SIZE}
                            tileHeight={serverHeight}
                            tileWidth={serverTileWidth}
                            renderSingleTile={this.renderSingleServerCell}
                        />
                    }
                </div>
            </div>
        );
    }

    @autobind
    _onResize() {
        this.list.recomputeRowHeights();
    }

    private calculateRowHeight = (width, obj: { index: number }): number => {
        const serverGroup = this.getRow(obj.index);
        if (serverGroup === undefined) {
            return 0;
        }
        let serverTileTotalHeight = serverTileHeight;
        const anyRolesOnServers = serverGroup.servers.filter(server => (server.roles && server.roles.length > 0)).length > 0;
        if (anyRolesOnServers) {
            serverTileTotalHeight += headerRolesHeight;
        }
        const serversPerRow = Math.floor((width - totalPaddingHorizontal) / serverTileWidth);
        let farmServerCount = serverGroup.servers.length;
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
        const group = this.getRow(index);
        if (group.servers.length === 0) {
            return;
        }
        let icon = getIconNameFromType(this.props.icons, group.type);
        return (
            <div style={style} key={index}>
                <TileGroup
                    onGroupEdit={this.props.onGroupEdit}
                    onGroupDelete={this.props.onGroupDelete}
                    onAddToGroup={this.props.onAddToGroup}
                    onServerRoleEdit={this.props.onServerRoleEdit}
                    group={group}
                    serverOnClick={this.props.serverOnClick}
                    groupOnClick={this.props.groupOnClick}
                    iconName={icon.iconName}
                    iconTitle={icon.iconTitle}
                    onServerClose={this.props.onServerClose}
                    hoverMessageForCriticalOrWarningServer={this.props.hoverMessageForCriticalOrWarningServer}
                />
            </div>
        );
    }

    @autobind
    private onRoleEdit(serverId: string) {
        if (this.props.onServerRoleEdit) {
            this.props.onServerRoleEdit(serverId, '');
        }
    }

    private serverOnClick = (serverId: any) => {
        const { serverOnClick } = this.props;
        if (serverOnClick) {
            serverOnClick('', serverId);
        }
    }

    @autobind
    private renderSingleServerCell(server: IServer, { index, isScrolling, key, style }): JSX.Element {
        return (
            <div style={style} key={index} className="farm-name-inside">
                <ServerTile
                    key={index}
                    name={server.name}
                    id={server.id}
                    roles={server.roles}
                    status={server.status}
                    countersData={getServerMeasures(server.measures)}
                    diskInformation={getDiskInformationFromMeasurements(server.measures)}
                    serverOnClick={this.serverOnClick}
                    hoverMessageForCriticalOrWarningServer={this.props.hoverMessageForCriticalOrWarningServer}
                >
                    {
                        server.roles.length > 0 &&
                        <TagContainer title={''} tags={server.roles} >
                            {
                                this.props.onServerRoleEdit &&
                                <div className="edit-tags tag" title="Edit roles" onClick={(event) => this.onRoleEdit(server.id)}>
                                    <Icon className="icon-edit"></Icon>
                                </div>
                            }
                        </TagContainer>
                    }
                </ServerTile>
            </div>
        );
    }
}
