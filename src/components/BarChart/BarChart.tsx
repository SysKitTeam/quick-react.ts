import * as React from 'react';
import * as classNames from 'classnames';
import * as d3 from 'd3';
import { IBarChartProps } from './BarChart.props';
import './BarChart.scss';

export class BarChart extends React.Component<IBarChartProps, null> {

    public refs: {
        [argument: string]: (Element);
        container: (HTMLInputElement);
    };

    private margin = { top: 20, right: 20, bottom: 30, left: 40 };
    private width = 500 - this.margin.right - this.margin.left;
    private height = 300 - this.margin.top - this.margin.bottom;
    private x;
    private y;
    private focus;

    constructor(props: IBarChartProps) {
        super(props);

        this.x = this.generateX();
        this.y = this.generateY();
    }

    public componentDidMount() {
        this.init();
    }

    public componentDidUpdate() {
        this.redraw();
    }

    public render() {
        return <div className={'bar-chart-component'} ref={'container'}></div>;
    }

    private init() {
        const xAxisClass = classNames('x-axis', this.props.id);
        const yAxisClass = classNames('y-axis', this.props.id);

        const container = this.createContainer();
        container.append('g').attr('class', xAxisClass).call(this.generateXAxis()).attr('transform', 'translate(0,' + this.height + ')');
        container.append('g').attr('class', yAxisClass).call(this.generateYAxis());
        this.generateBars(container);
        this.createTooltip(container);
    }

    private redraw() {

    }

    private createContainer() {
        const containerClass = classNames('bar-chart-container', this.props.id);

        return d3.select(this.refs.container)
                .append('svg')
                .attr('width', 500) // replace value
                .attr('height', 300)    // replace value
                .append('g')
                .attr('class', containerClass)
                .attr('transform', 'translate(' + this.margin.left + ',' + this.margin.top + ')');
    }

    private generateX() {
        return d3.scaleBand().domain(this.props.data.map((d) => d.argument)).rangeRound([0, this.width]).padding(0.1);
    }

    private generateY() {
        return d3.scaleLinear().domain([0, d3.max(this.props.data, (d) => d.frequency)]).range([this.height, 0]);
    }

    private generateXAxis() {
        return d3.axisBottom(this.x).tickPadding(10);
    }

    private generateYAxis() {
        return d3.axisLeft(this.y).tickSizeInner(-this.width).tickPadding(5);
    }

    private generateBars(container: any) {
        container.selectAll('.bar')
                    .data(this.props.data)
                    .enter()
                    .append('rect')
                    .attr('class', 'bar')
                    .style('fill', this.props.barColor)
                    .on('mouseover', () => this._onMouseOver())
                    .on('mouseout', () => this._onMouseOut())
                    .attr('x', (d) => this.x(d.argument))
                    .attr('y', (d) => this.height)
                    .attr('width', this.x.bandwidth())
                    .attr('height', 0)
                    .transition()
                    .duration(600)
                    .attr('y', (d) => this.y(d.frequency))
                    .attr('height', (d) => (this.height - this.y(d.frequency)));
    }

    private createTooltip(container: any) {
        this.focus = container.append('g')
                        .attr('class', 'tip-container')
                        .style('display', 'none');

        this.focus.append('polygon')
            .attr('class', 'tip-pol')
            .attr('points', '0,24 10,35 20,24');
        this.focus.append('rect')
            .attr('width', 40)
            .attr('height', 24)
            .attr('class', 'tip-rect');
        this.focus.append('text')
            .attr('class', 'tooltip-text')
            .attr('dx', 8)
            .attr('dy', '-.3em');
    }

    private _onMouseOver() {
        const node = d3.select(d3.event.currentTarget).style('fill', this.props.hovColor);
        this.focus.style('display', 'block');
        const height = node.attr('y');
        const width = Math.floor(+node.attr('width') / 2);
        const xPol = +node.attr('x') + width - 10;
        const xRect = +node.attr('x') + width - 20;
        this.focus.select('.tip-rect').attr('transform', 'translate(' + xRect + ',' + height + ')');
        this.focus.select('.tip-pol').attr('transform', 'translate(' + xPol + ',' + height + ')');
    }

    private _onMouseOut() {
        d3.select(d3.event.currentTarget).style('fill', this.props.barColor);
        this.focus.style('display', 'none');
    }
}
