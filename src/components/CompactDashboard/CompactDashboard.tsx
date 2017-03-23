
import * as React from 'react';
import { ICompactDashboardProps } from './CompactDashboard.Props';
import { CompactServer } from '../CompactServer/CompactServer';
import { ServerTile } from '../ServerTile/ServerTile';
import { ITileData } from '../ServerTile/ServerTile.Props';
import { Group } from '../Group/Group';
import { GroupHeader } from '../GroupHeader/GroupHeader';
const List = require('react-virtualized').List;
const AutoSizer = require('react-virtualized').AutoSizer;
const Collection = require('react-virtualized').Collection;
import * as classNames from 'classnames';
import { IFarm, Partition }  from '../../models';
import { autobind } from '../../utilities/autobind';
import { getServerMeasures } from '../../utilities/serverMeasures';
import { CommonComponent } from '../Common/Common';
import { Callout } from '../Callout/Callout';
import { TagContainer } from '../TagContainer/TagContainer';

import './CompactDashboard.scss';

const GUTTER_SIZE = 3;
const CELL_WIDTH = 330;
const HOVER_TIME = 500; // ms 

function sortFarmServers(ob1: { status: number, name: string }, ob2: { status: number, name: string }) {
    if (ob1.status > ob2.status) {
        return 1;
    } else if (ob1.status < ob2.status) {
        return -1;
    }

    if (ob1.name < ob2.name) {
        return -1;
    } else if (ob1.name > ob2.name) {
        return 1;
    } else {
        return 0;
    }
}

function checkFilter(filter: string, serverName: string): boolean {
    return serverName.toLowerCase().trim().indexOf(filter.toLowerCase().trim()) !== -1;
}

export class CompactDashboard extends CommonComponent<ICompactDashboardProps, any> {

    collection: any;
    list: any;
    private _enterTimerId: number;

    constructor(props?: ICompactDashboardProps) {
        super(props);
        this.state = {
            columnYMap: [],
            collection: undefined,
            list: undefined,
            hoverFarmId: null, 
            hoverServerId: null,
            hoverTargetElement: null
        };
        this._enterTimerId = 0;
    }

    private componentWillReceiveProps(nextProps) {
        this._onMouseLeave();
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
                    <div className="compact-dashboard-container ">
                        {
                            <AutoSizer onResize={this._onResize}>
                                {({ width, height }) => (
                                    <List
                                        height={height}
                                        ref={(reference) => {
                                            this.list = reference;
                                        } }
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
                }
                { this.state.hoverServerId &&
                     <Callout
                        targetElement={this.state.hoverTargetElement}
                        hideBorder
                        isBeakVisible={false}
                        gapSpace={5}>
                        {this._renderServerTile(this.state.hoverFarmId, this.state.hoverServerId)}
                    </Callout>
                }
            </div>
        );
    }

    @autobind
    _onResize() {
        this.list.recomputeRowHeights();
    }

    @autobind
    private calculateRowHeight(width, obj: { index: number }): number {
        let numberPerRow = Math.floor((width - 72) / 251.0);
        let farmServerCount = this.getRow(obj.index).servers.filter((server) => { return checkFilter(this.props.filter, server.name); }).length;
        let rowCount = (Math.floor(farmServerCount / numberPerRow) + (farmServerCount % numberPerRow === 0 ? 0 : 1));
        let serverHeight = rowCount * 60;
        let serverRoleDiff = (this.getRow(obj.index).servers.some((server) => { return checkFilter(this.props.filter, server.name) && server.roles.length > 0; })) ? rowCount * 27 : 0;
        if (this.getRow(obj.index).isCustom) {
            serverRoleDiff += 21;
        }
        return serverHeight + 140 + serverRoleDiff;
    }

    @autobind
    private cellSizeAndPositionGetter(width, obj: { index: number }) {
        const columnCount = Math.floor((1800 - 72) / (CELL_WIDTH + GUTTER_SIZE));
        let columnPosition = obj.index % (columnCount || 1);
        let height = 120 + this.getRow(obj.index).servers.filter((server) => { return checkFilter(this.props.filter, server.name); }).length * 70;
        let serverRoleDiff = (this.getRow(obj.index).servers.filter((server) => { return checkFilter(this.props.filter, server.name) && server.roles.length > 0; })).length * 27;
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

    private _onItemMouseEnter(farmId, serverId, ev: React.MouseEvent<HTMLElement>) {
        let targetElement = ev.currentTarget as HTMLElement;
        if (serverId !== this.state.hoverServerId) {
           this._enterTimerId = this._async.setTimeout(() => this._displayServerTile(farmId, serverId, targetElement), HOVER_TIME);           
        }
    }

    @autobind
    private _onMouseLeave(ev?: React.MouseEvent<HTMLElement>) {
        this._async.clearTimeout(this._enterTimerId);
        this._hideServerTile();
    }

    private _displayServerTile(farmId, serverId, target: HTMLElement) {
        if (this.state.hoverServerId !== serverId) {
            if (this.state.hoverServerId) {
                this._hideServerTile();
            }
            this.setState({
                hoverFarmId: farmId, 
                hoverServerId: serverId,
                hoverTargetElement: target,            
            });
        }
    }

    @autobind
    private _hideServerTile() {      
        this.setState({
            hoverFarmId: null, 
            hoverServerId: null,
            hoverTargetElement: null          
        });        
    }

    @autobind
    private _renderServerTile(farmId, serverId): JSX.Element {	
        const farm = this.props.farms.filter((currFarm) => { return currFarm.id === farmId; })[0];
        const server = farm.servers.filter((currServer) => { return currServer.id === serverId; })[0];
        return (
            <ServerTile 
                name={server.name}
                id={server.id}
                roles={server.roles}
                status={server.status}
                countersData={ getServerMeasures(server.measures) }>                  
            </ServerTile>
        );
    }    

    @autobind
    private _renderRow({ index, isScrolling, key, style }): JSX.Element {
        const farm = this.getRow(index);
        const servers = farm.servers.filter((server) => { return checkFilter(this.props.filter, server.name); }).sort(sortFarmServers);
        return (
            <div style={style} key={index}>
                <Group serverChildrenCount={servers.length} filter={this.props.filter} className={'farm-name-inside'} id={farm.id} name={farm.name} key={farm.id.configDataBaseName + '-' + farm.id.sqlInstance}>
                    <GroupHeader version={farm.version} isCustomFarm={farm.isCustom} farmId={farm.id} />
                    {
                        servers.map((server) => (                           
                                <CompactServer
                                    filter={this.props.filter}
                                    key={server.id.FQDN}
                                    roles={server.roles}
                                    id={server.id}
                                    status={server.status}
                                    onRoleEdit={server.onRoleEdit}
                                    onClose={server.onClose}
                                    name={server.name}    
                                    serverOnClick={this.props.serverOnClick}
                                    onMouseEnter={this._onItemMouseEnter.bind(this, farm.id, server.id)}
                                    onMouseLeave={this._onMouseLeave}                          
                                />                            
                        ))
                    }
                </Group>
            </div>
        );
    }
}
