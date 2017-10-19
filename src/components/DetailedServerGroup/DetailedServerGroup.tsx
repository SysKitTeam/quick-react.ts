import * as React from 'react';
import { IDetailedServerGroupProps } from './DetailedServerGroup.Props';
import { DetailedServerTile } from '../DetailedServerTile/DetailedServerTile';
import { Group } from '../Group/Group';
import * as classNames from 'classnames';
import { getServerMeasures, sortServersByStatusAndName, filterServerByName } from '../../utilities/server';
import { autobind } from '../../utilities/autobind';
import { AutoSizer } from 'react-virtualized';
import './DetailedServerGroup.scss';

const Collection = require('react-virtualized').Collection;
const GUTTER_SIZE = 20;
const serverWidth = 330;

export class DetailedServerGroup extends React.PureComponent<IDetailedServerGroupProps, any> {
    private _collection: any;
    private _servers: any;
    private _columnYMap: any;

    constructor(props: IDetailedServerGroupProps) {
        super(props);

        this._columnYMap = [];
    }

    @autobind
    private onServerClick(serverId: any) {
        const { serverOnClick, id } = this.props;
        if (serverOnClick) {
            serverOnClick(id, serverId);
        }
    }

    public render() {
        this._servers = this.props.servers.filter((server) => { return filterServerByName(this.props.filter, server.name); }).sort(sortServersByStatusAndName);

        return (
            <div className={'detailed-server-group'}>
                <AutoSizer onResize={this._onResize}>
                    {({ width, height }) => (
                        <Group
                            serverChildrenCount={this.props.servers.length}
                            filter={this.props.filter}
                            className={'farm-name-inside'}
                            id={this.props.id}
                            name={this.props.name}
                            key={this.props.id}
                            iconName={this.props.iconName}
                            iconTitle={this.props.iconTitle}
                        >
                            <Collection
                                cellCount={this.props.servers.length}
                                cellRenderer={this._cellRenderer}
                                height={height - 60}
                                width={width - 40}
                                cellSizeAndPositionGetter={function (index) {
                                    return this.cellSizeAndPositionGetter(width, index);
                                }.bind(this)}
                                ref={(reference) => {
                                    this._collection = reference;
                                }}
                            />
                        </Group>
                    )}
                </AutoSizer>
            </div>
        );
    }

    @autobind
    private cellSizeAndPositionGetter(width, obj: { index: number }) {
        if (width === 0) {
            return { height: 0, width: 0, x: 0, y: 0 };
        }

        width = width - 50; // width - 50px margin

        let gutterSize = GUTTER_SIZE;
        let serverHeight = this._getServerHeight(obj.index);
        const columnCount = Math.floor((width) / (serverWidth + 30 + gutterSize));
        let columnPosition = obj.index % (columnCount || 1);
        const x = columnPosition * (gutterSize + serverWidth + 30); // serverWidth + 30px margin
        const y = this._columnYMap[columnPosition] || 0;

        this._columnYMap[columnPosition] = y + serverHeight + gutterSize;

        return {
            height: serverHeight,
            width: serverWidth,
            x,
            y
        };
    }

    @autobind
    private _onResize({ width }) {
        this._columnYMap = [];
        this._collection.recomputeCellSizesAndPositions();
    }

    @autobind
    private _cellRenderer({ index, isScrolling, key, style }) {
        let server = this.getServer(index);

        return (
            <DetailedServerTile
                key={server.id}
                roles={server.roles}
                id={server.id}
                status={server.status}
                onRoleEdit={server.onRoleEdit}
                onClose={server.onClose}
                name={server.name}
                memoryUsage={server.memoryUsage}
                processorUsage={server.processorUsage}
                partitionUsages={server.partitionUsages}
                serverOnClick={this.onServerClick}
                style={style}
                hoverMessageForCriticalOrWarningServer={this.props.hoverMessageForCriticalOrWarningServer}
            />
        );
    }

    @autobind
    private getServer(index: number) {
        return this._servers[index];
    }

    @autobind
    private _getServerHeight(index: number) {
        let server = this.getServer(index);

        // 61px header + 20px margin + 220px line chart + 40px progress bar + 15px margin-top + 29px label "Disks" + (numberOfDisks/2) * 130px height
        let serverHeight = 61 + 20 + 220 + 40 + 15 + 29 + (Math.ceil(server.partitionUsages.length / 2)) * 125;
        return serverHeight;
    }
}
