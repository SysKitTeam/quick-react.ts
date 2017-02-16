import * as React from 'react';
import * as d3 from 'd3';

import { Label } from '../Label/Label';

import  {IPieChartProps} from './PieChart.props';

export type DataType = {label: string, value: number};

import './PieChart.scss';

export class PieChart extends React.Component<IPieChartProps, any> {

    refs: {
        [key: string]: (Element),
        container: HTMLInputElement
    };

    private _radius: any;

    constructor() {
        super();
    }

    componentDidMount() {
        this.draw();
    }

    componentDidUpdate() {
        // implement update
    }

    public render() {
        return (<div className={'pie-chart-component'}>
            <Label>Partition {this.props.driveLetter}</Label>
            <Label>{this.props.text}</Label>
            <div className={'pie-chart-container'} ref={'container'}></div>
        </div>);
    }

    private draw() {
        this._radius = Math.min(this.props.width, this.props.height) / 2;
        const svg = this.createContainer();
        const pie = this.createPie();
        const arc = this.createArc();
        const labelArc = this.createLabelArc();

        const g = svg.selectAll('.arc')
                    .data(pie(this.props.data))
                    .enter()
                    .append('g')
                    .attr('class', 'arc');
                    
        g.append('path').attr('d', (arc as any))
                        .attr('class', (d) => this.calculateClass(d.data));

        g.append('text').attr('transform', (d: any) => 'translate(' + labelArc.centroid(d) + ')')
                        .attr('dy', '.35em')
                        .text((d) => this.formatValue(d.data.value))
                        .attr('class', 'percentage-label');
    }

    private formatValue(val: number) : string {
        return val + '%';
    }

    private calculateClass(d: DataType) {
        if (d.label === 'free') { return 'disk-usage-free'; }
        if (d.value < 70) { return 'disk-usage-ok'; }
        if (d.value > 90) { return 'disk-usage-error'; }
        return 'disk-usage-warning';  
    }

    private createContainer() {
        return d3.select(this.refs.container).append('svg')
                .attr('width', this.props.width)
                .attr('height', this.props.height)
                .append('g')
                .attr('class', 'pie-chart-g')
                .attr('transform', 'translate(' + (this.props.width / 2) + ',' + (this.props.height / 2) + ')');
    }

    private createArc() {
         return d3.arc()
            .outerRadius(this._radius)
            .innerRadius(0);
    }

    private createLabelArc() {
        return d3.arc()
                .outerRadius(this._radius - 10)
                .innerRadius(this._radius - 10);
    }

    private createPie() {
        return d3.pie<DataType>().sort(null).value((d) : any => d.value);
    }
}