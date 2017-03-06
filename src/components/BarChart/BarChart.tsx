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
    }

    private redraw() {

    }

    private createContainer() {
        const containerClass = classNames('bar-chart-container', this.props.id);

        return d3.select(this.refs.container)
                .append('svg')
                .attr('width', 500)
                .attr('height', 300)
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
                    .on('mouseover', () => d3.select(d3.event.currentTarget).style('fill', this.props.hovColor))
                    .on('mouseout', () => d3.select(d3.event.currentTarget).style('fill', this.props.barColor))
                    .attr('x', (d) => this.x(d.argument))
                    .attr('y', (d) => this.height)
                    .attr('width', this.x.bandwidth())
                    .attr('height', 0)
                    .transition()
                    .duration(600)
                    .attr('y', (d) => this.y(d.frequency))
                    .attr('height', (d) => (this.height - this.y(d.frequency)));
    }
}
