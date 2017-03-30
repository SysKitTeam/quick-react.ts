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
                    <LineChart
                        title={'CPU USAGE'}
                        id={'cpu-chart'}
                        dimensions={{ width: '100%', height: '220px' }}
                        series={this.transformCPUdata(this.props.processorUsage.data)}
                        yAxisFormat={(d) => d + '%'}
                        xAxisFormat={() => '%d.%m.%y'}
                        yAxisTicks={3}
                        xAxisTicks={3}
                        showLegend={false}
                        tooltipText={(d: ILineChartData) => d.value + '%'}
                        colorPallette={['#676767']}
                    />
                    <MemoryTile {...this.props.memoryUsage} />
                    <div className={'partition-container'} >
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

    private transformCPUdata(cpuData: Array<IProcessorUsageData>): Array<ISeriesData> {
        return [{
            name: 'CPU',
            data: cpuData.map((point) => { return { argument: point.time, value: point.usage }; }),
            id: 'CPU'
        }];
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
                { this.props.roles.length > 0 && <TagContainer title={''} tags={this.props.roles}/> }
            </div>           
        );
    }
}

class MemoryTile extends React.PureComponent<IMemoryUsage, any> {
    public render() {
        let className = GetClassForStatus('', this.props.status);  
        return (
            <div className={className} >
                <ProgressBar
                    title={'RAM'}
                    info={'ram usage'} 
                    width={285} 
                    height={15} 
                    data={{ total: this.props.capactiy, current: this.props.used }} 
                />
            </div>
        );
    }
}

class PartitionTile extends React.PureComponent<IPartitionUsage, any> {
     // todo change pie slice color depending on status 
    public render() {
        let className = GetClassForStatus('', this.props.status);          
        return (
            <div className={className} >
                <Label className="server-name">Partition {this.props.name}:</Label>
                <Label>{this.props.used}/ {this.props.capacity} {this.props.usageUnit}</Label>
                <PieChart
                    id={'chart-' + this.props.name}
                    dimensions={{ width: '100%', height: '70px' }}
                    data={this.transformPartitionData(this.props)}
                    colors={this.getColorsByStatus(this.props.status)}
                    tipText={(d: IPieChartData) => (d.label + ' : ' + d.value + ' ' + this.props.usageUnit)}
                    showLegend={false} />
            </div>
        );
    }

    private transformPartitionData(partition: IPartitionUsage): Array<IPieChartData> {
        let free = partition.capacity - partition.used;
        return [{ label: 'Used', value: partition.used }, { label: 'Free', value: free }];
    }

    private getColorsByStatus(status: ServerStatus) {
        let colors = Array(2);
        colors[1] = 'lightgrey';
        if (status === ServerStatus.Critical) {
            colors[0] = '#fb6464';
        } else if (status === ServerStatus.Warning) {
            colors[0] = '#EAC71A';
        } else {
            colors[0] = '#7DC458';
        }
        return colors;
    }
}
