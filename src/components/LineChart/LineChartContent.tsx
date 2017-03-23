import * as React from 'react';
import * as d3 from 'd3';
import * as classNames from 'classnames';
import { ILineChartProps, ILineChartData, ISeriesData } from './LineChart.props';
import { Tooltip } from '../Tooltip/Tooltip';

const margin = { top: 20, bottom: 30, left: 50, right: 40 };

export class LineChartContent extends React.PureComponent<ILineChartProps, any> {
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

    private createColorPallette = () => d3.scaleOrdinal(this.props.colorPallette);

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

    public componentDidMount() {
        this.calculateAvailableSpace();

        const lines = d3.selectAll('.line-chart-container.' + this.props.id +  ' > path');
        lines.on('mouseover', () => this.onMouseMove());
        lines.on('mouseout', () => this.setState({ isTipVisible: false }));
    }

    public componentDidUpdate() {
        this.calculateAvailableSpace();
    }

    public render() {
        const xAxisClass = classNames('x-axis', this.props.id, this.props.className);
        const yAxisClass = classNames('y-axis', this.props.id, this.props.className);
        const tipClass = classNames('bar-chart-component', 'tip', this.props.id, this.props.className);
        const containerClass = classNames('line-chart-container', this.props.id, this.props.className);
        
        const translateXAxis = 'translate(0,' + this.state.containerHeight + ')';
        const translateContainer = 'translate(' + margin.left + ',' + margin.top + ')';

        this.x = this.generateX();
        this.y = this.generateY();

        return (
            <svg width={this.state.fullWidth} height={this.state.fullHeight}>
                {/*<g>{ this.renderLegend() }</g>*/}
                <g className={containerClass} transform={translateContainer}>
                    <g className={xAxisClass} transform={translateXAxis} ref={(element: SVGAElement) => this.renderXAxis(element)}/>
                    <g className={yAxisClass} ref={(element: SVGAElement) => this.renderYAxis(element)}/>
                    { this.renderPaths() }
                    <Tooltip id={this.props.id} text={this.state.tipText} x={this.state.tipX} y={this.state.tipY} visible={this.state.isTipVisible}/>
                </g>
            </svg>
        );
    }

    private renderPaths() {
        const color = this.createColorPallette();
        return this.props.series.map( (data: ISeriesData, index: number) =>
            <path className={data.className} key={index} d={this.renderLine(data.data)} style={{ stroke: color(data.name) }}/>
        );
    }

    private renderLegend() {
        const xMove = 20;
        const color = this.createColorPallette();
        return this.props.series.map( (data: ISeriesData, index: number) => {
           return(
                <g key={index} className={'legend-item-container'} transform={'translate(' + (index * xMove) + '0)'}>
                    <rect width={30} height={30} style={{ fill: color(data.name) }}></rect>
                    <text>{ data.name }</text>
                </g> 
            );
        });
    }

    private initCapture(element: SVGAElement) {
        const capture = d3.select(element);
        capture.on('mousemove', () => this.onMouseMove());
        capture.on('mouseout', () => this.setState({ isTipVisible: false }));
        capture.on('mouseover', () => this.setState({ isTipVisible: true }));
    }

    private onMouseMove() {
        const element = d3.event.currentTarget;
        const elementClass = element.getAttribute('class');
        d3.select(element).style('stroke-width', 2);
        
        let index = 0;
        for (index = 0; index < this.props.series.length; index++) {
            if (this.props.series[index].className === elementClass) { break; }
        }

        let x0 = this.x.invert(d3.mouse(d3.event.currentTarget)[0]);

        let i = this.bisect(this.props.series[index].data, x0, 1);
        let d0 = this.props.series[index].data[i - 1];
        let d1 = this.props.series[index].data[i];
        let d;

        if (typeof this.props.series[index].data[0].argument !== 'number') {
            d = (x0.getTime() - (d0.argument as Date).getTime()) > ((d1.argument as Date).getTime() - x0.getTime()) ? d1 : d0;
        } else {
            d = x0 - (d0.argument as any) > (d1.argument as any) - x0 ? d1 : d0;
        }

        this.setState({ isTipVisible: true, tipX: this.x(d.argument), tipY: this.y(d.value), tipText: d.value + '%'});
    }

    private renderXAxis(element: SVGAElement) {
        if (element === null) { return; }

        // let ticks = Array(0);
        // const delta = Math.floor(this.props.data.length / 5);
        // for (let i = 0; i < this.props.data.length; i = i + 2) { ticks.push(this.props.data[i].argument); }
        // ticks.concat(d3.extent(this.props.data, (d) => d.argument));

        const xAxis = d3.axisBottom(this.generateX())
                .tickSizeInner(-(this.state.containerHeight))
                .tickSizeOuter(0)
                .tickPadding(20)
                // .tickValues(ticks)
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
                .tickFormat((d: number) => this.props.yAxisFormat(d))
                .tickPadding(20);   

        d3.select(element).call(yAxis);
    }

    private generateX() {
        const first = this.props.series[0].data;
        let max = d3.max(first, (d) => d.argument);
        let min = d3.min(first, (d) => d.argument);

        if (this.props.series.length > 1) {
            for (let i = 1; i < this.props.series.length; i++) {
                const newMax = d3.max(this.props.series[i].data, (d) => d.argument);
                const newMin = d3.min(this.props.series[i].data, (d) => d.argument);
                if (newMax > max) { max = newMax; }
                if (newMin < min) { min = newMin; }
            }
        }

        const scale: any = (typeof this.props.series[0].data[0].argument) === 'number' ? d3.scaleLinear() : d3.scaleTime();
        return scale.domain([min, max]).range([0, this.state.containerWidth]);
    }

    private generateY() {
        return d3.scaleLinear().domain(this.props.yAxisDomain).range([this.state.containerHeight, 0]).nice();
    }

    private renderLine(data: Array<ILineChartData>) {
        const x = this.generateX();
        const y = this.generateY();
        const lineGenerator = d3.line<ILineChartData>().x((d) => x(d.argument)).y((d) => y(d.value)).curve(d3.curveCatmullRom.alpha(0.5));
        return lineGenerator(data);
    }

    private formatAxisLabels() : any {
        if (this.props.xAxisFormat() === null) { return null; }
        const formatFunc = typeof this.props.series[0].data[0].argument !== 'object' ? d3.format : d3.timeFormat;
        return formatFunc(this.props.xAxisFormat());
    }

    /**
     * Calculates available space for labels.
     * If space is too narrow labels are rotated by 45 degrees.
     */
    private calculateAvailableSpace() {
        const spacing = 80;

        const labels = d3.selectAll('.x-axis.' + this.props.id + ' > .tick > text');

        let totalTextLength = 0;
        labels.nodes().forEach( (element: any) => totalTextLength += element.getComputedTextLength() );

        if (totalTextLength > this.state.containerWidth - spacing ) {
            labels.attr('transform', 'rotate(45)').attr('y', 10)
                .attr('x', 10).attr('dy', '.35em').style('text-anchor', 'start');
        } else {
            labels.attr('transform', 'rotate(0)').attr('x', 0).style('text-anchor', 'middle');
        }
    }
}
