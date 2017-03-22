
import * as React from 'react';
import { ICompactDashboardProps } from './CompactDashboard.Props';
import { CompactServer } from '../CompactServer/CompactServer';
import { Group } from '../Group/Group';
import { GroupHeader } from '../GroupHeader/GroupHeader';
const List = require('react-virtualized').List;
const AutoSizer = require('react-virtualized').AutoSizer;
const Collection = require('react-virtualized').Collection;
import * as classNames from 'classnames';
import { IFarm } from '../../models';
import { autobind } from '../../utilities/autobind';
import './CompactDashboard.scss';

const GUTTER_SIZE = 3;
const CELL_WIDTH = 330;

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

export class CompactDashboard extends React.Component<ICompactDashboardProps, any> {

    collection: any;
    list: any;

    constructor(props?: ICompactDashboardProps) {
        super(props);
        this.state = { columnYMap: [], collection: undefined, list: undefined };
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
                                        }}
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
                                name={server.name} />
                        ))
                    }
                </Group>
            </div>
        );
    }
}
