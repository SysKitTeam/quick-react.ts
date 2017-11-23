import * as React from 'react';
import * as classNames from 'classnames';
import * as d3 from 'd3';
import { IBarChartProps, IBarChartData } from './BarChart.props';
import { ChartTooltip } from '../ChartTooltip/ChartTooltip';
import './BarChart.scss';

const margin = { top: 20, right: 40, bottom: 70, left: 80 };

export class BarChartContent extends React.PureComponent<IBarChartProps, any> {
    private tooltip: SVGAElement;
    private selected;

    constructor(props: IBarChartProps) {
        super(props);

        this.state = {
            containerWidth: props.width - margin.left - margin.right,
            containerHeight: props.height - margin.top - margin.bottom,
            tipX: 0,
            tipY: 0,
            tipText: '',
            isTipVisible: false
        };
    }

    public componentWillReceiveProps(newProps) {
        this.setState({
            containerWidth: this.props.width - margin.left - margin.right,
            containerHeight: this.props.height - margin.top - margin.bottom
        });
    }

    public componentDidMount() {
        this.bindData();
        this.calculateAvailableSpace();
    }

    public componentDidUpdate() {
        this.bindData();
        this.calculateAvailableSpace();
    }

    /**
     * Binds appropriate data to every bar element in dom using d3 data function.
     */
    private bindData(): void {
        d3.selectAll('.bar.' + this.props.id).data(this.props.data);
    }

    public render() {
        const containerClass = classNames('bar-chart-container', this.props.id);
        const xAxisClass = classNames('x-axis', this.props.id);
        const yAxisClass = classNames('y-axis', this.props.id);
        const tipClass = classNames('bar-chart-component', 'tip', this.props.id);

        const containerTransform = 'translate(' + margin.left + ',' + margin.top + ')';
        const translateXAxis = 'translate(0,' + this.state.containerHeight + ')';

        return (
            <svg width={'100%'} height={this.props.dimensions.height}>
                <g className={containerClass} transform={containerTransform}>
                    <g className={xAxisClass} transform={translateXAxis} ref={(element: SVGRectElement) => this.renderXAxis(element)}></g>
                    <g className={yAxisClass} ref={(element: SVGRectElement) => this.renderYAxis(element)}></g>
                    {this.renderBars()}
                    <ChartTooltip id={this.props.id} text={this.state.tipText} x={this.state.tipX} y={this.state.tipY} visible={this.state.isTipVisible} />
                </g>
            </svg>
        );
    }

    /**
     * Renders bars with appropriate width and height based on data set. On every bar appropriate event listeners
     * are set.
     */
    private renderBars(): Array<JSX.Element> {
        const barClassName = classNames('bar-char-component', 'bar', this.props.id);
        const x = this.generateX();
        const y = this.generateY();

        return this.props.data.map(
            (data: IBarChartData, index: number) =>
                <rect className={index === this.props.selectedIndex ? classNames(barClassName, 'clicked') : barClassName}
                    key={index}
                    x={x(data.argument)}
                    y={y(data.frequency)}
                    width={x.bandwidth()}
                    height={this.state.containerHeight - y(data.frequency)}
                    onMouseOver={(event: React.MouseEvent<SVGRectElement>) => this.onMouseOver(event.currentTarget)}
                    onMouseOut={() => this.setState({ isTipVisible: false })}
                    onClick={(event: React.MouseEvent<SVGRectElement>) => this.handleOnClick(event.currentTarget)} />
        );
    }

    /**
     * When bar is clicked set that bar reference as active and set css class to it
     * so it will be colored into different color.
     */
    private handleOnClick(element: SVGRectElement) {
        if (this.selected === undefined) {
            const bar = d3.selectAll('.bar-chart-container.' + this.props.id + '> .bar').nodes()[this.props.selectedIndex];
            d3.select(bar).classed('clicked', false);
        } else {
            this.selected.classed('clicked', false);
        }
        this.selected = d3.select(element);
        this.selected.classed('clicked', true);
        this.props.onClick(this.selected.datum() as IBarChartData);
    }

    /**
     * This function is invoked when container element for axis is placed into DOM.
     * It creates x axis based on given axis generator.
     */
    private renderXAxis(element: SVGRectElement) {
        if (element === null) { return; }
        const xAxis = d3.axisBottom(this.generateX()).tickPadding(10).tickFormat(this.formatAxisLabels());
        d3.select(element).call(xAxis);
    }

    /**
    * This function is invoked when container element for axis is placed into DOM.
    * It creates x axis based on given axis generator.
    */
    private renderYAxis(element: SVGRectElement) {
        if (element === null) { return; }
        const yAxis = d3.axisLeft(this.generateY()).tickSizeInner(-this.state.containerWidth).ticks(5).tickPadding(5);
        d3.select(element).call(yAxis);
    }

    /**
     * Returns y axis generator that scales accross given height with domain of maximum data frequency values.
     */
    private generateY() {
        return d3.scaleLinear().domain([0, d3.max(this.props.data, (d) => d.frequency)]).range([this.state.containerHeight, 0]);
    }

    /**
     * Returns x axis generator that scales accross given width with domain of all data elements.
     */
    private generateX() {
        return d3.scaleBand().domain(this.props.data.map((d) => d.argument)).rangeRound([0, this.state.containerWidth]).padding(0.1);
    }

    /**
     * Returns format for axis that is then passed into format function.
     * If function recieves null value default formatting will be applied.
     * If type of data is date object then time format is applied, otherwise regular format
     * function is used.
     */
    private formatAxisLabels(): any {
        if (this.props.xAxisFormat() === null) { return null; }
        const formatFunc = typeof this.props.data[0].argument !== 'object' ? d3.format : d3.timeFormat;
        return formatFunc(this.props.xAxisFormat());
    }

    /**
     * Event which is called when user points mouse to bar.
     * Dimensions of element are calculated and passed to tooltip component for
     * positioning on top of bar.
     */
    private onMouseOver(element: SVGRectElement) {
        const dimensions = element.getBBox();
        const data = (d3.select(element).datum() as IBarChartData);
        const tipText = this.props.tipText(data);
        this.setState({ tipX: dimensions.x + (dimensions.width / 2), tipY: dimensions.y, tipText: tipText, isTipVisible: true });
    }

    /**
     * Calculates available space for labels.
     * If space is too narrow labels are rotated by 45 degrees.
     */
    private calculateAvailableSpace() {
        const spacing = 80;

        const labels = d3.selectAll('.x-axis.' + this.props.id + ' > .tick > text');
        const rects = d3.selectAll('.bar.' + this.props.id).nodes();

        let totalTextLength = 0;
        labels.nodes().forEach((element: any) => totalTextLength += element.getComputedTextLength());

        let totalRectLength = 0;
        rects.forEach((element: SVGRectElement) => totalRectLength += element.getBBox().width);

        if (totalTextLength > totalRectLength - spacing) {
            labels.attr('transform', 'rotate(45)').attr('y', 10)
                .attr('x', 10).attr('dy', '.35em').style('text-anchor', 'start');
        } else {
            labels.attr('transform', 'rotate(0)').attr('x', 0).style('text-anchor', 'middle');
        }
    }
}
