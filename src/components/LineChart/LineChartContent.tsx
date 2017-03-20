import * as React from 'react';
import * as d3 from 'd3';
import * as classNames from 'classnames';
import { ILineChartProps, ILineChartData } from './LineChart.props';
import { Tooltip } from '../Tooltip/Tooltip';

const margin = { top: 20, bottom: 30, left: 50, right: 40 };

export class LineChartContent extends React.Component<ILineChartProps, any> {
    private x;
    private y;
    private bisect = d3.bisector<ILineChartData, any>((d) => d.argument).left;

    constructor(props: ILineChartProps) {
        super(props);

        this.state = {
            fullWidth: props.width,
            fullHeight: props.height,
            containerWidth: props.width - margin.left - margin.right,
            containerHeight: props.height - margin.top - margin.bottom,
            tipX: 0,
            tipY: 0,
            tipText: '',
            isTipVisible: false
        };

        this.x = this.generateX();
        this.y = this.generateY();
    }

    public componentWillReceiveProps(newProps: ILineChartProps, newState: any) {
        this.setState({ 
            fullWidth: newProps.width, 
            fullHeight: newProps.height, 
            containerWidth: newProps.width - margin.right - margin.left,
            containerHeight: newProps.height - margin.top - margin.bottom
         });

         this.x = this.generateX();
         this.y = this.generateY();
    }

    public render() {
        const translateContainer = 'translate(' + margin.left + ',' + margin.top + ')';
        const xAxisClass = classNames('x-axis', this.props.id);
        const yAxisClass = classNames('y-axis', this.props.id);
        const tipClass = classNames('bar-chart-component', 'tip', this.props.id);
        const translateXAxis = 'translate(0,' + this.state.containerHeight + ')';
        const containerClass = classNames('line-chart-container', this.props.id);

        return (
            <svg width={this.state.fullWidth} height={this.state.fullHeight}>
                <g className={containerClass} transform={translateContainer}>
                    <g className={xAxisClass} transform={translateXAxis} ref={(element: SVGAElement) => this.renderXAxis(element)}></g>
                    <g className={yAxisClass} ref={(element: SVGAElement) => this.renderYAxis(element)}></g>
                    <path d={this.renderLine()}></path>
                    <rect 
                        className={'capture-area'} width={this.state.fullWidth} height={this.state.fullHeight}
                        ref={(element: SVGAElement) => this.initCapture(element)}/>
                    <Tooltip id={this.props.id} text={this.state.tipText} x={this.state.tipX} y={this.state.tipY} visible={this.state.isTipVisible}/>
                </g>
            </svg>
        );
    }

    private initCapture(element: SVGAElement) {
        const capture = d3.select(element);
        capture.on('mousemove', () => this.onMouseMove());
        capture.on('mouseout', () => this.setState({ isTipVisible: false }));
        capture.on('mouseover', () => this.setState({ isTipVisible: true }));
    }

    private onMouseMove() {
        let x0 = this.x.invert(d3.mouse(d3.event.currentTarget)[0]);

        let i = this.bisect(this.props.data, x0, 1);
        let d0 = this.props.data[i - 1];
        let d1 = this.props.data[i];
        let d;

        if (typeof this.props.data[0].argument !== 'number') {
            d = (x0.getTime() - (d0.argument as Date).getTime()) > ((d1.argument as Date).getTime() - x0.getTime()) ? d1 : d0;
        } else {
            d = x0 - (d0.argument as any) > (d1.argument as any) - x0 ? d1 : d0;
        }

        this.setState({ isTipVisible: true, tipX: this.x(d.argument), tipY: this.y(d.value), tipText: d.value + '%'})
    }

    private renderXAxis(element: SVGAElement) {
        if (element === null) { return; }

        const xAxis = d3.axisBottom(this.generateX())
                .tickSizeInner(-(this.state.containerHeight))
                .tickSizeOuter(0)
                .tickPadding(20)
                .ticks(this.props.xAxisTicks)
                .tickFormat(this.formatAxisLabels());

        d3.select(element).call(xAxis);
    }

    private renderYAxis(element: SVGAElement) {
        if (element === null) { return; }
      
        const yAxis = d3.axisLeft(this.generateY())
                .tickSizeInner(-(this.state.containerWidth))
                .tickSizeOuter(0)
                .ticks(this.props.yAxisTicks)
                .tickFormat((d) => (d + '%'))
                .tickPadding(20);   

        d3.select(element).call(yAxis);
    }

    private renderLine() {
        const x = this.generateX();
        const y = this.generateY();
        const lineGenerator = d3.line<ILineChartData>().x((d) => x(d.argument)).y((d) => y(d.value)).curve(d3.curveCatmullRom.alpha(0.5));
        return lineGenerator(this.props.data);
    }

    private generateX() {
        const scale: any = (typeof this.props.data[0].argument) === 'number' ? d3.scaleLinear() : d3.scaleTime();
        return scale.domain(d3.extent(this.props.data, (d) => d.argument)).range([0, this.state.containerWidth]).nice();
    }

    private generateY() {
        return d3.scaleLinear().domain([0, 100]).range([this.state.containerHeight, 0]).nice();
    }

    private formatAxisLabels() : any {
        if (this.props.xAxisFormat() === null) { return null; }
        const formatFunc = typeof this.props.data[0].argument !== 'object' ? d3.format : d3.timeFormat;
        return formatFunc(this.props.xAxisFormat());
    }
}
