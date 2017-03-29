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
import { PieChart } from '../PieChart/PieChart';
import { IPieChartData } from '../PieChart/PieChart.props';
import { GetClassForStatus } from '../../utilities/server';

import './DetailedServerTile.scss';

export class DetailedServerTile extends React.PureComponent<IDetailedServerProps, any> { 
    public render() {
        let className = GetClassForStatus('server-details', this.props.status);  
        return (
            <div className={className}>
                <ServerHeader 
                    name={ this.props.name}
                    numberOfUsers={ this.props.numberOfUsers}
                    roles={ this.props.roles}
                    onClose={ this.dismiss.bind(this) }
                />
                <div className={'counters-container'}>
                    <ProcessorTile {...this.props.processorUsage} />
                    <MemoryTile {...this.props.memoryUsage} />
                    <div>
                    {
                        this.props.partitionUsages.map((data, index) => <PartitionTile key={index} {...data} />)
                    }
                    </div>
                </div>
            </div>
        );
    }
    private dismiss() {
        this.props.onClose(this.props.id);
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
                        onClick={this.props.onClose }
                        iconName={'icon-delete'} />
                }
                {
                    this.props.roles.length > 0 &&
                    <div>
                        <hr />
                        <TagContainer title={''} tags={this.props.roles}>
                        </TagContainer>
                    </div>
                }
            </div>           
        );
    }
}

class ProcessorTile extends React.PureComponent<IProcessorUsageData, any> {
    public render() {
        return (
            <div>
                <Label className="server-name">CPU</Label>
                <LineChart
                    id={'cpu-chart'}
                    dimensions={{ width: '100%', height: '150px' }}
                    series={this.transformCPUdata(this.props.data)}
                    yAxisFormat={(d) => d + '%'}
                    xAxisFormat={() => '%d.%m.%y'}
                    yAxisTicks={3}
                    xAxisTicks={3}
                    colorPallette={['#344086', '#8bd764', '#f3f986', '#ec1271', '#636363', 'red', 'green', 'purple', 'aquamarine', 'lightgrey']}
                    showLegend={false}
                    />
            </div>
        );
    }

    private transformCPUdata(cpuData: Array<IProcessorUsage>): Array<ISeriesData> {
        return [{
            name: 'CPU',
            data: cpuData.map((point) => { return { argument: point.time, value: point.usage }; }),
            id: 'CPU'
        }];
    }
}

class MemoryTile extends React.PureComponent<IMemoryUsage, any> {
    public render() {
        return (
            <div>
                <Label className="server-name">Memory</Label>
                <ProgressBar title={'RAM'} width={250} height={20} data={{ total: this.props.capactiy, current: this.props.used }}></ProgressBar>
            </div>
        );
    }
}

class PartitionTile extends React.PureComponent<IPartitionUsage, any> {
    public render() {
        return (
            <div>
                <Label className="server-name">{this.props.name}</Label>
                <Label>{this.props.used}/ {this.props.capactiy} {this.props.usageUnit}</Label>
                <PieChart
                    id={'chart-' + this.props.name}
                    dimensions={{ width: '100%', height: '70px' }}
                    data={this.transformPartitionData(this.props)}
                    colors={['grey', 'green']}
                    tipText={(d: IPieChartData) => (d.label + ' : ' + d.value + ' ' + this.props.usageUnit)}
                    showLegend={false} />
            </div>
        );
    }

    private transformPartitionData(partition: IPartitionUsage): Array<IPieChartData> {
        let free = partition.capactiy - partition.used;
        return [{ label: 'Used', value: partition.used }, { label: 'Free', value: free }];
    }
}
