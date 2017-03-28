import * as React from 'react';
import * as classNames from 'classnames';
import { Label } from '../Label/Label';
import { IDetailedServerProps, IProcessorUsage, IPartitionUsage } from './DetailedServerTile.Props';
import { Icon } from '../Icon/Icon';
import { ServerStatus } from '../../models';
import './DetailedServerTile.scss';
import { autobind } from '../../utilities/autobind';
import { LineChart } from '../LineChart/LineChart';
import { TagContainer } from '../TagContainer/TagContainer';
import { ILineChartProps, ILineChartData, ISeriesData } from '../LineChart/LineChart.props';
import { ProgressBar } from '../ProgressBar/ProgressBar';
import { PieChart } from '../PieChart/PieChart';
import { IPieChartData } from '../PieChart/PieChart.props';

export class DetailedServerTile extends React.PureComponent<IDetailedServerProps, any> {

    constructor(props?: IDetailedServerProps) {
        super(props);
    }

    public render() {
        let isCritical = this.props.status === ServerStatus.Critical;
        let isWarning = this.props.status === ServerStatus.Warning;
        let isOK = this.props.status === ServerStatus.OK;
        let className = classNames('server-details',
            { 'status-warning': isWarning },
            { 'status-ok': isOK },
            { 'status-critical': isCritical });
        return (
            <div className={className}>
                <div className={'server-details-header'}>
                    <Label className="server-name" title={this.props.name}>{this.props.name}</Label>
                    <Icon
                        className={classNames('disk-icon')}
                        iconName={'icon-sql_log'} />
                    {this.props.numberOfUsers &&
                        <Icon data-users={this.props.numberOfUsers}
                            iconName={'icon-user'}
                            title={this.props.numberOfUsers + ' number of users online'} />
                    }
                    {this.props.onClose &&
                        <Icon disabled={false}
                            className={'dialog-button dialog-button-close'}
                            onClick={this.dismiss.bind(this)}
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
                <div className={'counters-container'}>       
                    <div>                              
                        <Label className="server-name" >CPU</Label>
                        <LineChart
                            id={'cpu-chart'} 
                            dimensions={{ width: '100%', height: '150px' }}
                            series= {this.transformCPUdata(this.props.processorUsage) }
                            yAxisFormat={(d) => d + '%'}
                            xAxisFormat={() => '%d.%m.%y'}
                            yAxisTicks={3}
                            xAxisTicks={3}
                            colorPallette={['#344086', '#8bd764', '#f3f986', '#ec1271', '#636363', 'red', 'green', 'purple', 'aquamarine', 'lightgrey']}
                            showLegend={false}                     
                        />   
                    </div> 
                    <div>                              
                        <Label className="server-name">Memory</Label>                                              
                        <ProgressBar title={'RAM'} width={250} height={20} data={{ total: this.props.memoryUsage.capactiy, current: this.props.memoryUsage.used }}></ProgressBar>
                    </div> 
                    <div>   
                        {
                            this.props.partitionUsages.map((data, index) => (this.Partition(data, index)))
                        }
                    </div> 
                </div>
            </div>
        );
    } 

    Partition = (data: IPartitionUsage, index: number) => {
        return(
            <div key={index}>   
                <Label className="server-name">{data.name}</Label>   
                <Label>{data.used} / {data.capactiy} {data.usageUnit}</Label>            
                <PieChart
                    id={'chart-' + index }
                    dimensions={{ width: '100%', height: '70px' }}
                    data={this.transformPartitionData(data)}
                    colors={['grey', 'green']}
                    tipText={(d: IPieChartData) => (d.label + ' : ' + d.value + ' ' +  data.usageUnit)} 
                    showLegend={false}/>
            </div> 
        );         
    };

    componentDidUpdate() {
        console.log('Server');
    }
 
    private transformPartitionData(partition: IPartitionUsage):  Array<IPieChartData> {
        let free = partition.capactiy - partition.used;
        return [{label: 'Used', value: partition.used}, {label: 'Free', value: free}];
    }

    private transformCPUdata(cpuData:  Array<IProcessorUsage> ): Array<ISeriesData> {        
        return [{
            name: 'CPU',
            data: cpuData.map((point) => { return { argument: point.time, value: point.usage }; } ),
            id: 'CPU'
        }];            
    }

    private dismiss() {
        this.props.onClose(this.props.id);
    }     
}
