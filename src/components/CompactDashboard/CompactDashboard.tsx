
import * as React from 'react';
import { ICompactDashboardProps, IFarm } from './CompactDashboard.Props';
import { CompactServer } from '../CompactServer/CompactServer';
import { Group } from '../Group/Group';
import { GroupHeader } from '../GroupHeader/GroupHeader';
const List = require('react-virtualized').List;
const AutoSizer = require('react-virtualized').AutoSizer;
const Collection = require('react-virtualized').Collection;
import * as classNames from 'classnames';
import { autobind } from '../../utilities/autobind';
import './CompactDashboard.scss';

const GUTTER_SIZE = 3;
const CELL_WIDTH = 350;

function sortFarmServers(ob1: { status: number, serverName: string }, ob2: { status: number, serverName: string }) {
    if (ob1.status > ob2.status) {
        return 1;
    } else if (ob1.status < ob2.status) {
        return -1;
    }

    if (ob1.serverName < ob2.serverName) {
        return -1;
    } else if (ob1.serverName > ob2.serverName) {
        return 1;
    } else {
        return 0;
    }
}

function sortFarms(ob1: { farmName: string }, ob2: { farmName: string }) {
    if (ob1.farmName < ob2.farmName) {
        return -1;
    }

    if (ob1.farmName > ob2.farmName) {
        return 1;
    }
    return 0;
}

export class CompactDashboard extends React.Component<ICompactDashboardProps, any> {


    constructor(props?: ICompactDashboardProps) {
        super(props);
        this.state = { columnYMap: [] };
    }

    @autobind
    private componentDidUpdate(prevProps: ICompactDashboardProps, prevState) {
        if (this.props.isVertical === false && prevProps.isVertical === true) {
            this.setState({ columnYMap: [] });
        }
    }


    public render() {
        let {title, farms} = this.props;
        let classname = classNames({ [this.props.className]: this.props.className !== undefined });
        return (
            <div className={classname}>
                {
                    this.props.isVertical &&
                    <div className="compact-dashboard-container vertical">
                        {
                            <AutoSizer  >
                                {({ width, height}) => (
                                    <Collection

                                        filt={this.props.filter}
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
                            <AutoSizer  >
                                {({ width, height }) => (
                                    <List
                                        height={height}
                                        filt={this.props.filter}
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
    private calculateRowHeight(width, obj: { index: number }): number {
        let numberPerRow = Math.floor(width / 200.0);

        let farmServerCount = this.getRow(obj.index).servers.length;
        let serverHeight = (Math.floor(farmServerCount / numberPerRow) + (farmServerCount % numberPerRow === 0 ? 0 : 1)) * 60;
        return serverHeight + 140;
    }

    @autobind
    private cellSizeAndPositionGetter(width, obj: { index: number }) {

        const columnCount = Math.floor(1800 / (CELL_WIDTH + GUTTER_SIZE));

        const columnPosition = obj.index % (columnCount || 1);

        const height = 100 + this.props.farms[obj.index].servers.length * 70;
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
        const {farms} = this.props;

        return farms[index];
    }



    @autobind
    private _renderRow({ index, isScrolling, key, style }): JSX.Element {

        const farm = this.getRow(index);

        return (
            <div style={style} key={index}>
                <Group filter={this.props.filter} className={'farm-name-inside'} id={farm.farmId} name={farm.farmName} key={farm.farmId}>
                    <GroupHeader sharepointIcon={farm.sharepointVersionIcon} sharepointVersion={farm.sharepointVersion} isCustomFarm={farm.isCustom} configDB={farm.configDB} configDBIcon={farm.confgiDBIcon} />
                    {
                        farm.servers.sort(sortFarmServers).map((server) => (

                            <CompactServer filter={this.props.filter} key={server.serverId} roleList={server.roleList} serverId={server.serverId} classNameList={server.classNameList}
                                status={server.status} onRoleEdit={server.onRoleEdit} onServerClose={server.onServerClose} serverName={server.serverName}
                                />

                        ))
                    }
                </Group>
            </div>
        );
    }
}
