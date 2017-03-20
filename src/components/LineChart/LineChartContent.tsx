import * as React from 'react';
import * as d3 from 'd3';
import { ILineChartProps } from './LineChart.props';

const margin = { top: 20, bottom: 30, left: 50, right: 40 };

export class LineChartComponent extends React.Component<ILineChartProps, any> {
    constructor(props: ILineChartProps) {
        super(props);
    }

    public render() {
        const translateContainer = 'translate(' + margin.left + ',' + margin.top + ')';
        return (
            <svg width={this.props.width} height={this.props.height}>
                <g transform={translateContainer}>
                    <g></g>
                    <g></g>
                    
                </g>
            </svg>
        );
    }

    private generateX() {
        const scale: any = (typeof this.props.data[0].argument) === 'number' ? d3.scaleLinear() : d3.scaleTime();
        return scale.domain(d3.extent(this.props.data, (d) => d.argument)).range([0, this.width]).nice();
    }

    private generateY() {
        return d3.scaleLinear().domain([0, 100]).range([this.height - 20, 0]).nice();
    }
}
