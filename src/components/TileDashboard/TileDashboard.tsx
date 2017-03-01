import * as React from 'react';
import {ITileDashboardProps,  ITiledDashboardFarm, ITiledDashboardServer} from './TileDashboard.Props';
import {ServerTile} from '../ServerTile/ServerTile';
import {ITileData} from '../ServerTile/ServerTile.Props';
const AutoSizer = require('react-virtualized').AutoSizer;
import { Group } from '../Group/Group';
import { GroupHeader } from '../GroupHeader/GroupHeader';
const List = require('react-virtualized').List;
import * as classNames from 'classnames';
import {TagContainer} from '../TagContainer/TagContainer';
import { Icon } from '../Icon/Icon';
import { autobind } from '../../utilities/autobind';
import {IMeasure, MeasureType, Partition, DiskMeasure, CpuMeasure, RamMeasure, NetworkMeasure} from '../../models';
import './TileDashboard.scss';

function checkFilter(filter: string, serverName: string) : boolean {
    return serverName.toLowerCase().trim().indexOf(filter.toLowerCase().trim()) !== -1;
}

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


export class TileDashboard extends React.Component<ITileDashboardProps, any> {
    list: any; 

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
        let {farms} = this.props;
        let classname = classNames({ [this.props.className]: this.props.className !== undefined });
        return (
            <div className={classname}>
                <div className="tile-dashboard-container">
                          {
                             <AutoSizer  >
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
    private calculateRowHeight(width, obj: { index: number }): number {
        let numberPerRow = Math.floor((width - 72) / 281.0);

        let farmServerCount = this.getRow(obj.index).servers.filter((server) => {return checkFilter(this.props.filter, server.name); } ).length;
        let rowCount = (Math.floor(farmServerCount / numberPerRow) + (farmServerCount % numberPerRow === 0 ? 0 : 1));
        let serverHeight = rowCount * 183;
        let serverRoleDiff = (this.getRow(obj.index).servers.some((server) => {return checkFilter(this.props.filter, server.name) && server.roles.length > 0; } )) ? rowCount * 30 : 0;
        if (this.getRow(obj.index).isCustom) {
            serverRoleDiff += 21;
        }
        return serverHeight + 140 + serverRoleDiff + 60;
    }

    @autobind
    private getRow(index: number): ITiledDashboardFarm {
        const {farms} = this.props;

        return farms[index];
    }

    @autobind
    private _renderRow({ index, isScrolling, key, style }): JSX.Element {
        const farm = this.getRow(index);
        const servers  = farm.servers.filter((server) => {return checkFilter(this.props.filter, server.name); } ).sort(sortFarmServers);
        return (
            <div style={style} key={index}>
                <Group serverChildrenCount={servers.length} filter={this.props.filter} className={'farm-name-inside'} id={farm.id} name={farm.name} key={farm.id.configDataBaseName + '-' + farm.id.sqlInstance}>
                    <GroupHeader version={farm.version}  isCustomFarm={farm.isCustom} farmId={farm.id} />
                    {
                        servers.map((server, serverIndex ) => (                            
                            <ServerTile key={serverIndex}
                                diskInformation={this.generatePartitionData()}
                                name={server.name}
                                hasCloseButton={true}
                                numberOfUsers={'232'}
                                id={server.id}
                                roles={server.roles}
                                status={server.status}
                                countersData={this.getMeasures(server.measures)}
                            >
                            {
                                server.roles.length > 0 &&
                                 <TagContainer  title={''} tags={server.roles}>
                                    <div className="edit-tags tag" title="Edit tags" onClick={this.props.serverRoleEdit}>
                                        <Icon className="icon-Edit"></Icon>
                                    </div>
                                </TagContainer>
                            }
                            </ServerTile>
                        ))
                    }
                </Group>
            </div>
        );
    }

    private generatePartitionData() {
        // Still dummy generation, need to change it when we know what and how
        return ['C: 35/34', 'D: 45/66'];
    }

    private getMeasures(serverMeasures: Array<IMeasure>) {
        let counters = [];
        serverMeasures.forEach((measure) => {
            if (measure.type === MeasureType.CPU) {
                counters.push(convertCPU(measure));
            } else if (measure.type === MeasureType.Ram) {
                counters.push(convertRam(measure));
            } else if (measure.type === MeasureType.Disk) {
                counters.push(convertDisk(measure));
            } else if (measure.type === MeasureType.Network) {
                counters.push(convertNetwork(measure));
            }
        });
        return counters;
    }

   
}

function convertDisk(measure: IMeasure) : ITileData {
        let disk = measure as DiskMeasure;
        let maxWrite = disk.partitions.map(p => {return p.writeSpeed;
            }).reduce(function(a, b) {
                return Math.max(a, b);
            });
        let partitionText = disk.partitions.map((p) => {
            return (p.size - p.freeMB) + '/' + p.size;
        });
        return {
            title: 'Disk',
            usageUnit: 'Mbps',
            hoverText: partitionText,
            status: disk.status,
            currentUsage: maxWrite.toString()
        };
}

function convertNetwork(measure: IMeasure) : ITileData {
        let network = measure as NetworkMeasure;
        return {
            title: 'Network',
            usageUnit: 'kB',
            hoverText: [network.kBRecieved], 
            status: network.status,
            currentUsage: network.kbSent
        };
}

function convertRam(measure: IMeasure) : ITileData {
        let ram = measure as RamMeasure;
        let val = Math.round((1 - (ram.availableMB / ram.capacity)) * 100);
        return {
            title: 'Memory',
            usageUnit: 'MB',
            hoverText: [(ram.capacity - ram.availableMB) + '/' + ram.capacity + ' MB'],
            status: ram.status,
            currentUsage: ram.capacity.toString()
        };
}

function convertCPU(measure: IMeasure) : ITileData {
        let cpu = measure as CpuMeasure;
        return {
            title: 'CPU',
            usageUnit: '%',
            hoverText: [''],
            status: cpu.status,
            currentUsage: cpu.usage.toString()
        };
}
