import * as React from 'react';
import * as d3 from 'd3';

import { Label } from '../Label/Label';

import { IPieChartProps } from './PieChart.props';

export type DataType = { label: string, value: number };

import './PieChart.scss';

export class PieChart extends React.Component<IPieChartProps, any> {

    refs: {
        [key: string]: (Element),
        container: HTMLInputElement
    };

    private _radius: any;
    private _focus: any;
    private _arc: any;

    private radius;

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
        this._radius = Math.min(this.props.width, this.props.height) / 4;
        //this._radius = this._radius - Math.min(this.props.width, this.props.height);
        const svg = this.createContainer();
        const pie = this.createPie();
        const arc = this.createArc();
        const g = svg.selectAll('.arc')
            .data(pie(this.props.data))
            .enter()
            .append('g')
            .attr('class', 'arc');

        this.createTooltip(svg);

        g.append('path').attr('d', (arc as any))
            .attr('class', (d) => this.calculateClass(d.data))

        /*.on('mousemove', (d) => {
            console.log(d3.mouse(d3.event.currentTarget));
            this._focus.style('display', 'block');
            //this._arc.centroid(d);
            const position = d3.mouse(d3.event.currentTarget);
            this._focus.select('.tip-rect')
                .attr('transform', 'translate(' + position + ')')
                .attr('display', 'block');
            this._focus.select('.tip-pol')
                .attr('transform', 'translate(' + position + ')');
        });*/

        g.append('text').attr('transform', (d: any) => 'translate(' + arc.centroid(d) + ')')
            .text((d) => d.data.value + '%')
            .attr('text-anchor', 'middle')
            .attr('class', 'percentage-label')
            .on('mouseover', (d) => this.showTooltip(d))
            .on('mouseout', () => this._focus.style('display', 'none')).transition().duration(1000);
    }

    private showTooltip(d: any) {
        let coordinates1 = this._arc.centroid(d);
        coordinates1[0] = coordinates1[0] - (this._radius);
        coordinates1[1] = 45;

        console.log(coordinates1);

        const coordinates2 = this._arc.centroid(d);
        coordinates1[0] = coordinates2[0] - (this._radius);
        coordinates1[1] = coordinates2[1] - (this._radius * 2);

        this._focus.style('display', 'block');
        this._focus.select('.tip-rect')
            .attr('transform', 'translate(' + coordinates1 + ')')
            .attr('display', 'block');
        this._focus.select('.tip-pol')
            .attr('transform', 'translate(' + coordinates2 + ')');

        /*const values = this._arc.centroid(d);
        const position = values[0] + ', (20 + ' + values[1] + ')';
        console.log('translate(' + values[0] + ', (' + values[1] + '- 20)' + ')');
        values[1] = values[1] + 15;
        
        this._focus.select('text.y2')
            .attr('transform', 'translate(' + values[0] + ',' + values[1] + ')')
            .text(d.value + ' %');*/
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
        this._arc = d3.arc()
            .outerRadius(this._radius)
            .innerRadius(0);
        return this._arc;
    }

    private createFocus(svg: any) {
        return svg.append('g').style('display', 'none');
    }

    private createTooltip(container: any) {
        this._focus = this.createFocus(container);

        this._focus.append('rect')
            .attr('width', this._radius * 2)
            .attr('height', this._radius)
            .attr('class', 'tip-rect')
            .attr('display', 'none')
            .attr('fill', 'black');

        this._focus.append('polygon')
            .attr('fill', 'black')
            .attr('class', 'tip-pol')
            .attr('points', '15,40 30,55 45,40');

        this._focus.append('text')
            .attr('class', 'y2')
            .attr('fill', 'white')
            .attr('dx', 8)
            .attr('dy', '-.3em');
    }

    private createPie() {
        return d3.pie<DataType>().sort(null).value((d): any => d.value);
    }
}
