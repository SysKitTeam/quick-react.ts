import * as React from 'react';
import { PieChart } from '../PieChart/PieChart';
import { IPieChartData } from '../PieChart/PieChart.props';
import { Label } from '../Label/Label';
import { ServerStatus } from '../../models';
import { IPartitionUsage } from '../DetailedServerTile/DetailedServerTile.Props';
import { IPartitionTileProps } from './PartitionTile.Props';
import { GetClassForStatus } from '../../utilities/server';
import * as classNames from 'classnames';

export class PartitionTile extends React.PureComponent<IPartitionTileProps, any> {
    public static defaultProps = {
        okColor: '#7DC458',
        warningColor: '#EAC71A',
        criticalColor: '#fb6464'
    };

    public render() {
        let className = GetClassForStatus('', this.props.usage.status);
        return (
            <div className={classNames(className, this.props.usage.className, this.props.className)} >
                <Label className="server-name">{this.props.usage.name}</Label>
                <Label>{this.props.usage.used}/ {this.props.usage.capacity} {this.props.usage.usageUnit}</Label>
                <PieChart
                    dimensions={{ width: '100%', height: '70px' }}
                    data={this.transformPartitionData(this.props.usage)}
                    colors={this.getColorsByStatus(this.props.usage.status)}
                    tipText={(d: IPieChartData) => (d.label + ': ' + d.value + ' ' + this.props.usage.usageUnit)}
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
        colors[1] = '#ececec';
        if (status === ServerStatus.Critical) {
            colors[0] = this.props.criticalColor;
        } else if (status === ServerStatus.Warning) {
            colors[0] = this.props.warningColor;
        } else {
            colors[0] = this.props.okColor;
        }
        return colors;
    }
}
