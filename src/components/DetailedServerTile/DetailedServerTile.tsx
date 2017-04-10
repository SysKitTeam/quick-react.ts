import * as React from 'react';
import { Label } from '../Label/Label';
import { IDetailedServerProps, IProcessorUsage, IPartitionUsage, IMemoryUsage, IProcessorUsageData } from './DetailedServerTile.Props';
import { Icon } from '../Icon/Icon';
import { ServerStatus } from '../../models';
import { autobind } from '../../utilities/autobind';
import { TagContainer } from '../TagContainer/TagContainer';
import { LineChart } from '../LineChart/LineChart';
import { ILineChartProps, ILineChartData, ISeriesData } from '../LineChart/LineChart.props';
import { ProgressBar } from '../ProgressBar/ProgressBar';
import { GetClassForStatus } from '../../utilities/server';
import { PartitionTile } from '../PartitionTile';
import * as classNames from 'classnames';

import './DetailedServerTile.scss';

export class DetailedServerTile extends React.PureComponent<IDetailedServerProps, any> {
    public render() {
        const className = GetClassForStatus('server-details', this.props.status);
        const partitionTileClass = this.props.partitionUsages.length === 1 ? 'partition-tile' : 'partition-col';
        const cpuDataProp = this.transformCPUdata(this.props.processorUsage.data);
        const cpuData = cpuDataProp[0].data;
        return (
            <div className={classNames(className)} onClick={this.serverOnClick}>
                <ServerHeader
                    name={this.props.name}
                    numberOfUsers={this.props.numberOfUsers}
                    roles={this.props.roles}
                    />
                <div className={'counters-container'}>
                    <LineChart
                        title={'CPU USAGE'}
                        id={'cpu-counter-' + this.props.id}
                        dimensions={{ width: '100%', height: '220px' }}
                        series={cpuDataProp}
                        tickValues={[cpuData[0].argument, cpuData[cpuData.length - 1].argument]}
                        yAxisFormat={(d) => d + '%'}
                        xAxisFormat={() => '%H:%M'}
                        yAxisTicks={3}
                        xAxisTicks={3}
                        showLegend={false}
                        tooltipText={(d: ILineChartData) => d.value + '%'}
                        colorPallette={['#676767']}
                        />
                    <ProgressBar
                        id={'memory-usage'}
                        title={'RAM'}
                        info={this.props.memoryUsage.used + ' of ' + this.props.memoryUsage.capacity + ' ' + this.props.memoryUsage.usageUnit + ' used'}
                        dimensions={{ height: '40px', width: '100%' }}
                        data={{ total: this.props.memoryUsage.capacity, current: this.props.memoryUsage.used }}
                        progressColor={this.getProgressColor()}
                        />
                    <div className={'partition-container'} >
                        {
                            this.props.partitionUsages.map((data, index) =>
                                <PartitionTile
                                    usage={data}
                                    />
                            )
                        }
                    </div>
                </div>
            </div>
        );
    }

    @autobind
    private serverOnClick() {
        const {serverOnClick, id} = this.props;

        if (serverOnClick) {
            serverOnClick(id);
        }
    }

    private dismiss() {
        this.props.onClose(this.props.id);
    }

    private transformCPUdata(cpuData: Array<IProcessorUsageData>): Array<ISeriesData> {
        return [{
            name: 'CPU',
            data: cpuData.map((point) => { return { argument: new Date(point.time), value: point.usage }; }),
            id: 'CPU'
        }];
    }

    private getProgressColor() {
        let status = this.props.memoryUsage.status;
        if (status === ServerStatus.Critical) {
            return '#fb6464';
        } else if (status === ServerStatus.Warning) {
            return '#EAC71A';
        } else if (status === ServerStatus.OK) {
            return '#7DC458';
        }
        return undefined;
    }
}

class ServerHeader extends React.PureComponent<any, any> {
    public render() {
        return (
            <div className={'server-details-header'}>
                <Label className="server-name" title={this.props.name}>{this.props.name}</Label>
                {this.props.numberOfUsers &&
                    <Icon data-users={this.props.numberOfUsers}
                        iconName={'icon-user'}
                        title={this.props.numberOfUsers + ' number of users online'} />
                }
                {this.props.onClose &&
                    <Icon disabled={false}
                        className={'dialog-button dialog-button-close'}
                        onClick={this.props.onClose}
                        iconName={'icon-delete'} />
                }
                {this.props.roles.length > 0 && <TagContainer title={''} tags={this.props.roles} />}
            </div>
        );
    }
}
