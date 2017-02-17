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
    private _textCoordinates: number[];

    constructor() {
        super();
    }

    componentDidMount() {
        this.draw();
    }

    componentDidUpdate() {
        this.redraw();
    }

    private redraw() {
        d3.select('.svg-container').remove();
        this.draw();
    }

    public render() {
        return (<div className={'pie-chart-component'}>
            <Label>Partition {this.props.driveLetter}</Label>
            <Label>{this.props.text}</Label>
            <div className={'pie-chart-container'} ref={'container'}></div>
        </div>);
    }

    private draw() {
        this._radius = this.props.width / 4;
        const svg = this.createContainer();
        const pie = this.createPie();
        const arc = this.createArc();
        this.createDropShadow(svg);

        let g = svg.selectAll('.arc')
            .data(pie(this.props.data))
            .enter()
            .append('g')
            .attr('class', 'arc');

        g.append('path').attr('d', (arc as any))
            .attr('class', (d) => this.calculateClass(d.data));

        g = svg.selectAll('.arc-text')
            .data(pie(this.props.data))
            .enter()
            .append('g')
            .attr('class', 'arc-text');

        g.append('text')
            .attr('transform',
            (d) => { this._textCoordinates = arc.centroid(d); return 'translate(' + arc.centroid(d) + ')' })
            .text((d) => d.data.value + '%')
            .style('font-size', (this._radius / 3))
            .attr('text-anchor', 'middle')
            .attr('class', 'percentage-label')
            .on('mouseover', (d) => this.showTooltip(d))
            .on('mouseout', () => this._focus.style('display', 'none'));

            this.createTooltip(svg);
    }

    private showTooltip(d: any) {
        const coordinates = this._arc.centroid(d);

        this._focus.style('display', 'block');

        this._focus.select('.tip-rect')
            .attr('transform',
            'translate(' + (coordinates[0] - this._radius * 1.5) + ',' + (coordinates[1] - this._radius * (3 / 2)) + ')');

        this._focus.select('.tip-pol')
            .attr('transform',
            'translate(' + (coordinates[0] - this._radius) + ',' + (coordinates[1] - this._radius * (3 / 2)) + ')');

        this._focus.select('text.y2')
            .attr('transform',
            'translate(' + (coordinates[0] - this._radius * 1.5) + ',' + (coordinates[1] - this._radius * (5 / 4)) + ')')
            .text(d.label + ': ' + d.value + ' %');
    }

    private calculateClass(d: DataType) {
        if (d.label === 'free') { return 'disk-usage-free'; }
        if (d.value < 70) { return 'disk-usage-ok'; }
        if (d.value > 90) { return 'disk-usage-error'; }
        return 'disk-usage-warning';
    }

    private createContainer() {
        return d3.select(this.refs.container).append('svg')
            .attr('class', 'svg-container')
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

    private createDropShadow(svg: any) {
        // filters go in defs element
        let defs = svg.append('defs');

        // create filter with id #drop-shadow
        // height=130% so that the shadow is not clipped
        let filter = defs.append('filter')
            .attr('id', 'drop-shadow')
            .attr('height', '130%');
            // .attr('width', '130%');

        // SourceAlpha refers to opacity of graphic that this filter will be applied to
        // convolve that with a Gaussian with standard deviation 3 and store result
        // in blur
        filter.append('feGaussianBlur')
            .attr('in', 'SourceAlpha')
            .attr('stdDeviation', 5)
            .attr('result', 'blur');

        // translate output of Gaussian blur to the right and downwards with 2px
        // store result in offsetBlur
        filter.append('feOffset')
            .attr('in', 'blur')
            .attr('dx', 5)
            .attr('dy', 5)
            .attr('result', 'offsetBlur');

        // overlay original SourceGraphic over translated blurred opacity by using
        // feMerge filter. Order of specifying inputs is important!
        let feMerge = filter.append('feMerge');

        feMerge.append('feMergeNode')
            .attr('in', 'offsetBlur');
        feMerge.append('feMergeNode')
            .attr('in', 'SourceGraphic');

    }

    private createTooltip(container: any) {
        this._focus = this.createFocus(container);

        this._focus.append('rect')
            .attr('width', this._radius * 3)
            .attr('height', this._radius)
            .attr('class', 'tip-rect')
            .attr('fill', 'white')
            .style('filter', 'url(#drop-shadow)')
            .attr('x', 0)
            .attr('y', 0);

        // Calculate position of tip pointer
        const middlePoint = this._radius; // width is 2 times of a radius
        const width = this._radius / 4;
        const leftPoint = middlePoint - width;
        const rightPoint = middlePoint + width;
        const tipHeight = this._radius * (5 / 4);
        const bottomPoint = this._radius - 2;

        const p1 = leftPoint + ',' + bottomPoint;
        const p2 = middlePoint + ',' + tipHeight;
        const p3 = rightPoint + ',' + bottomPoint;

        this._focus.append('polygon')
            .attr('fill', 'white')
            .attr('class', 'tip-pol')
            .style('filter', 'url(#drop-shadow)')
            .attr('points', p1 + ' ' + p2 + ' ' + p3);

        this._focus.append('text')
            .attr('class', 'y2')
            .attr('fill', 'black')
            .attr('dx', this._radius * 1.5)
            .attr('dy', this._radius / 2)
            .attr('text-anchor', 'middle')
            .text('Used: 7.54 GB');
    }

    private createPie() {
        return d3.pie<DataType>().sort(null).value((d): any => d.value);
    }
}
