import * as React from 'react';
import { ITileDashboardProps, ITiledDashboardFarm, ITiledDashboardServer } from './TileDashboard.Props';
import { ServerTile } from '../ServerTile/ServerTile';
import { ITileData } from '../ServerTile/ServerTile.Props';
const AutoSizer = require('react-virtualized').AutoSizer;
import { Group } from '../Group/Group';
import { GroupHeader } from '../GroupHeader/GroupHeader';
const List = require('react-virtualized').List;
import * as classNames from 'classnames';
import { TagContainer } from '../TagContainer/TagContainer';
import { Icon } from '../Icon/Icon';
import { autobind } from '../../utilities/autobind';
import { getServerMeasures, sortServersByStatusAndName, filterServerByName } from '../../utilities/server';

import './TileDashboard.scss';

const serverTileWidth = 281.0; // LeftMargin 10px + LeftBodrder 10px + Server 250px + LeftBodrder 1px + RightMargin 10px
const servertileHeight = 236; // Server 52px + 2 * (Margin 8 + Padding 5 + border 1)
const scrollbarWidth = 13;
const farm_margin = 20;
const farm_padding = 5;
const headerTotalHeight = 65;
const totalPaddingHorizontal  = 2 * (farm_margin + farm_padding) + scrollbarWidth;

export class TileDashboard extends React.Component<ITileDashboardProps, any> {
    private list: any;

    constructor(props?: ITileDashboardProps) {
        super(props);
    }

    @autobind
    private componentDidUpdate(prevProps: ITileDashboardProps, prevState) {
        if (this.props.filter !== prevProps.filter && this.list) {
            this.list.recomputeRowHeights();
        }
    }

    render() {
        let { farms } = this.props;
        let classname = classNames({ [this.props.className]: this.props.className !== undefined });
        return (
            <div className={classname}>
                <div className="tile-dashboard-container">
                    {
                        <AutoSizer onResize={this._onResize}>
                            {({ width, height }) => (
                                <List
                                    height={height}
                                    ref={(reference) => {
                                        this.list = reference;
                                    }}
                                    rowCount={farms.length}
                                    rowHeight={function (index) {
                                        return this.calculateRowHeight(width, index);
                                    }.bind(this)}
                                    rowRenderer={this._renderRow}
                                    width={width}
                                />
                            )}
                        </AutoSizer>
                    }
                </div>
            </div>
        );
    }

    @autobind
    _onResize() {
        this.list.recomputeRowHeights();
    }

    @autobind
    private calculateRowHeight(width, obj: { index: number }): number {    
        const farm = this.getRow(obj.index);
        if (farm === undefined) {
            return 0;
        } 
        const serversPerRow = Math.floor((width - totalPaddingHorizontal) / serverTileWidth);
        const farmServerCount = farm.servers.filter((server) => { return filterServerByName(this.props.filter, server.name); }).length;
        const rowCount = Math.ceil(farmServerCount / serversPerRow);
        const serverHeight = rowCount * servertileHeight;
        const totalHeight = serverHeight + headerTotalHeight; 
        return totalHeight;
    }

    @autobind
    private getRow(index: number): ITiledDashboardFarm {
        const { farms } = this.props;
        return farms[index];
    }

    @autobind
    private _renderRow({ index, isScrolling, key, style }): JSX.Element {
        const farm = this.getRow(index);
        const servers = farm.servers.filter((server) => { return filterServerByName(this.props.filter, server.name); }).sort(sortServersByStatusAndName);

        return (
            <div style={style} key={index}>
                <Group serverChildrenCount={servers.length} filter={this.props.filter} className={'farm-name-inside'} id={farm.id} name={farm.name} key={farm.id.configDataBaseName + '-' + farm.id.sqlInstance}>
                    {/*<GroupHeader version={farm.version} isCustomFarm={farm.isCustom} farmId={farm.id} />*/}
                    {
                        servers.map((server, serverIndex) => (
                            <ServerTile 
                                key={serverIndex}
                                name={server.name}
                                id={server.id}
                                roles={server.roles}
                                status={server.status}
                                countersData={getServerMeasures(server.measures)}
                                serverOnClick={this.props.serverOnClick}
                            >
                                {
                                    server.roles.length > 0 &&
                                    <TagContainer title={''} tags={server.roles}>
                                    </TagContainer>
                                }
                            </ServerTile>
                        ))
                    }
                </Group>
            </div>
        );
    }   
}
