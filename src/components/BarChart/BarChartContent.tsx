import * as React from 'react';
import * as classNames from 'classnames';
import * as d3 from 'd3';
import { IBarChartProps, IBarChartData } from './BarChart.props';
import './BarChart.scss';

const margin = { top: 50, right: 40, bottom: 70, left: 80 };

export class BarChartContent extends React.PureComponent<IBarChartProps, any> {
    private tooltip: SVGAElement;
    private selected;

    constructor(props: IBarChartProps) {
        super(props);

        this.state = {
            fullWidth: props.width,
            fullHeight: props.height,
            containerWidth: props.width - margin.left - margin.right,
            containerHeight: props.height - margin.top - margin.bottom
        }
    }

    public componentWillReceiveProps(newProps, nextState) {
        this.setState({
            fullWidth: this.props.width,
            fullHeight: this.props.height,
            containerWidth: this.props.width - margin.left - margin.right,
            containerHeight: this.props.height - margin.top - margin.bottom
        });
    }

    public componentDidMount() {
        this.bindData();
        this.calculate();
    }

    public componentDidUpdate() {
        this.bindData();
        this.calculate();
    }

    private bindData() : void {
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
                    <g className={xAxisClass} transform={translateXAxis} ref={(element: SVGAElement) => this.renderXAxis(element)}></g>
                    <g className={yAxisClass} ref={(element: SVGAElement) => this.renderYAxis(element)}></g>
                    { this.renderBars() }
                    <g className={classNames(tipClass, 'tip-container')} style={{ display: 'none' }} ref={(tooltip: SVGAElement) => this.tooltip = tooltip}>
                        <polygon className={classNames(tipClass, 'tip-pol')} points={'0,24 10,35 20,24'}></polygon>
                        <rect className={classNames(tipClass, 'tip-rect')} height={24} width={50}></rect>
                        <text className={classNames(tipClass, 'tip-text')} dx={4} dy={15}></text>
                    </g>
                </g>
            </svg>
        );
    }

    private renderBars() : Array<JSX.Element> {
        const barClassName = classNames('bar-char-component', 'bar', this.props.id);
        const x = this.generateX();
        const y = this.generateY();

        return this.props.data.map(
            (data: IBarChartData, index: number) =>
                    <rect className={ index === this.props.selectedIndex ? classNames(barClassName, 'clicked') : barClassName }
                        key={index}
                        x={ x(data.argument) }
                        y={ y(data.frequency) }
                        width={ x.bandwidth() }
                        height={ this.state.containerHeight - y(data.frequency) }
                        onMouseOver={(event: React.MouseEvent<SVGAElement>) => this.onMouseOver(event.currentTarget)}
                        onMouseOut={() => d3.select(this.tooltip).style('display', 'none')}
                        onClick={(event: React.MouseEvent<SVGAElement>) => this.handleOnClick(event.currentTarget)}/>
        );
    }

    private handleOnClick(element: SVGAElement) {
        if (this.selected === undefined) {
            const bar = d3.selectAll('.bar-chart-container.' + this.props.id + '> .bar').nodes()[this.props.selectedIndex];
            d3.select(bar).classed('clicked', false);
            this.selected = d3.select(element); 
        } else {
            this.selected.classed('clicked', false);
            this.selected = d3.select(element);
        }
        this.selected.classed('clicked', true);
        this.props.onClick(this.selected.datum() as IBarChartData);
    }

    private renderXAxis(element: SVGAElement) {
        if (element === null) { return; }
        const xAxis = d3.axisBottom(this.generateX()).tickPadding(10).tickFormat(this.formatAxisLabels());
        d3.select(element).call(xAxis);
    }

    private renderYAxis(element: SVGAElement) {
        if (element === null) { return; }
        const y = this.generateY();
        const yAxis = d3.axisLeft(y).tickSizeInner(-this.state.containerWidth).ticks(5).tickPadding(5);
        d3.select(element).call(yAxis);
    }

    private generateY() {
        return d3.scaleLinear().domain([0, d3.max(this.props.data, (d) => d.frequency)]).range([this.state.containerHeight, 0]);
    }

    private generateX() {
        return d3.scaleBand().domain(this.props.data.map((d) => d.argument)).rangeRound([0, this.state.containerWidth]).padding(0.1);
    }

    private formatAxisLabels() : any {
        if (this.props.xAxisFormat() === null) { return null; }
        const formatFunc = typeof this.props.data[0].argument !== 'object' ? d3.format : d3.timeFormat;
        return formatFunc(this.props.xAxisFormat());
    }

    private onMouseOver(element: SVGAElement) {
        const tipContainer = d3.select(this.tooltip);
        tipContainer.style('display', 'block');

        const height = +element.getAttribute('y') - 38;
        const width = Math.floor(+element.getAttribute('width') / 2);
        const xPol = +element.getAttribute('x') + width - 10;
        const data = (d3.select(element).datum() as IBarChartData);

        const textRef = tipContainer.select('.tip-text').text(this.props.tipText(data));
        const textWidth = (tipContainer.select('.tip-text').node() as any).getComputedTextLength();
        const tipMargin = 8;

        const xRect = +element.getAttribute('x') + width - (textWidth + tipMargin) / 2;

        tipContainer.select('.tip-rect').attr('width', textWidth + tipMargin).attr('transform', 'translate(' + xRect + ',' + height + ')');
        tipContainer.select('.tip-pol').attr('transform', 'translate(' + xPol + ',' + height + ')');
        textRef.attr('transform', 'translate(' + xRect + ',' + height + ')');
    }

    private calculate() {
        const spacing = 80;

        const labels = d3.selectAll('.x-axis.' + this.props.id + ' > .tick > text');
        const rects = d3.selectAll('.bar.' + this.props.id).nodes();

        let totalTextLength = 0;
        labels.nodes().forEach( (element: any) => totalTextLength += element.getComputedTextLength() );
        
        let totalRectLength = 0;
        rects.forEach( (element: SVGAElement) => totalRectLength += element.getBBox().width );

        if (totalTextLength > totalRectLength - spacing ) {
            labels.attr('transform', 'rotate(45)').attr('y', 10)
                .attr('x', 10).attr('dy', '.35em').style('text-anchor', 'start');
        } else {
            labels.attr('transform', 'rotate(0)').attr('x', 0).style('text-anchor', 'middle');
        }
    }
}
