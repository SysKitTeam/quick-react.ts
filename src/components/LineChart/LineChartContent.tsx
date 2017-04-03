import * as React from 'react';
import * as d3 from 'd3';
import * as classNames from 'classnames';
import { ILineChartProps, ILineChartData, ISeriesData } from './LineChart.props';
import { Tooltip } from '../Tooltip/Tooltip';

const margin = { top: 20, bottom: 70, left: 50, right: 20 };

export class LineChartContent extends React.PureComponent<ILineChartProps, any> {
    private x;
    private y;
    private bisect = d3.bisector<ILineChartData, any>((d) => d.argument).left;
    private circleData;

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

    /**
     * When component receives new props set state based on new props.
     */
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

    /**
     * When component is mounted calculate space for labels and bind events and data
     * to circles which are used for showing tooltips.
     */
    public componentDidMount() {
        this.calculateAvailableSpace();
        this.setEventsAndBindData();
    }

    /**
     * When component is updated calculate space for labels and bind events and data
     * to circles which are used for showing tooltips.
     */
    public componentDidUpdate() {
        this.calculateAvailableSpace();
        this.setEventsAndBindData();
    }

    /**
     * Binds on mouse over event to circles and binds data to it so when mouse is hovered over
     * given circle tooltip with given information about that chart point can be displayed.
     */
    private setEventsAndBindData() {
        const circles = d3.selectAll('.line-chart-container.' + this.props.id + ' > circle');
        circles.on('mouseover', () => this.onMouseOver());
        circles.on('mouseout', () => this.setState({ isTipVisible: false }));
        circles.data(this.circleData);
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
                <g className={containerClass} transform={translateContainer}>
                    <g className={xAxisClass} transform={translateXAxis} ref={(element: SVGAElement) => this.renderXAxis(element)} />
                    <g className={yAxisClass} ref={(element: SVGAElement) => this.renderYAxis(element)} />
                    {this.drawSeries()}
                    <Tooltip id={this.props.id} text={this.state.tipText} x={this.state.tipX} y={this.state.tipY} visible={this.state.isTipVisible} />
                </g>
            </svg>
        );
    }

    /**
     * Color generator which is constructed based on given array of colors and returns
     * appropriate color from given array for given string.
     */
    private createColorPallette = () => d3.scaleOrdinal(this.props.colorPallette);


    /**
     * Draws chart lines and given transparent circles that are used for displaying tooltips based
     * on transformed data which does not containe null values.
     */
    private drawSeries(): Array<JSX.Element> {
        const values = this.normalizeData();
        const x = this.generateX();
        const y = this.generateY();
        const color = this.createColorPallette();

        let lines = Array(0), circles = Array(0), index = 0, circleData = Array(0);

        for (let i = 0; i < values.length; i++) {
            lines.push(<path key={index++} className={values[i].id}
                d={this.renderLine(values[i].data)}
                style={{ stroke: color(values[i].name) }}></path>);
            for (let j = 0; j < values[i].data.length; j++) {
                circles.push(
                    <circle key={index++} className={values[i].id} r={6} 
                        cx={x(values[i].data[j].argument)} cy={y(values[i].data[j].value)}
                        style={{ fill: 'transparent' }}
                       />
                );
                circleData.push(values[i].data[j]);
            }
        }
        this.circleData = circleData;
        return [...lines, ...circles];
    }

    /**
     * Algorithm that finds null values for y-axis in given datasets and returns new arrays
     * without null values in between for charting.
     */
    private normalizeData(): Array<any> {
        let data = Array(0);
        for (let j = 0; j < this.props.series.length; j++) {
            const series = this.props.series[j];
            let start = 0;
            let previous = series.data[0].value;
            if (previous === null) { start = 1; }
            let i;
            for (i = 1; i < series.data.length - 1; i++) {
                if (series.data[i].value === null && previous === null) {
                    previous = series.data[i].value;
                    start = i + 1;
                    continue;
                }
                if (series.data[i].value === null && previous !== null) {
                    data.push({
                        name: series.name,
                        id: series.id,
                        data: series.data.slice().slice(start, i)
                    });
                    start = i + 1;
                }
                previous = series.data[i].value;
            }
            if (series.data[i].value === null && previous !== null) {
                data.push({
                    name: series.name,
                    id: series.id,
                    data: series.data.slice().slice(start, i)
                });
            } else if (series.data[i].value !== null) {
                data.push({
                    name: series.name,
                    id: series.id,
                    data: series.data.slice().slice(start, i + 1)
                });
            }
        }
        
        return data;
    }

    /**
     * When mouse is moved over a given point on chart calculate dimensions,
     * get data that is bound to that circle and call props function that formats
     * tooltip text.
     */
    private onMouseOver() {
        const element = d3.event.currentTarget;
        const el = d3.select(element);
        const boundData = el.datum() as ILineChartData;
        const x = el.attr('cx');
        const y = el.attr('cy');

        this.setState({ isTipVisible: true, tipX: x, tipY: y, tipText: this.props.tooltipText(boundData) });
    }

    /**
     * Renders x axis inside given element. This function gets called when
     * container for x axis gets mounted into DOM.
     */
    private renderXAxis(element: SVGAElement) {
        if (element === null) { return; }

        const scale = this.generateX();

        let xAxis = d3.axisBottom(scale)
            .tickSizeInner(-(this.state.containerHeight))
            .tickSizeOuter(0)
            .tickPadding(20)
            .tickFormat(this.formatAxisLabels());

        xAxis =  this.props.tickValues ? xAxis.tickValues(this.props.tickValues) : xAxis.ticks(this.props.xAxisTicks);

        d3.select(element).call(xAxis);
    }

    /**
     * Renders y axis inside given element. This function gets called when
     * container for y axis gets mounted into DOM.
     */
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

    /**
     * Creates x-axis generator based on given domain and range. Domain of given x-axis generator
     * is in range of minimum value of x argument of all given datasets and maximum value of y argument
     * of all given datasets.
     */
    private generateX() {
        const minMax = this.getMinMaxFromSeries();
        const scale: any = (typeof this.props.series[0].data[0].argument) === 'number' ? d3.scaleLinear() : d3.scaleTime();
        return scale.domain(minMax).range([0, this.state.containerWidth]);
    }

    private getMinMaxFromSeries() : [number | Date, number | Date] {
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
        return [min, max];
    }

    /**
     * Creates y-axis generator based on given domain and range.
     */
    private generateY() {
        return d3.scaleLinear().domain(this.props.yAxisDomain).range([this.state.containerHeight, 0]).nice();
    }

    /**
     * Creates line generator based on given dataset and x and y axis generators.
     */
    private renderLine(data: Array<ILineChartData>) {
        const x = this.generateX();
        const y = this.generateY();
        const lineGenerator = d3.line<ILineChartData>().x((d) => x(d.argument)).y((d) => y(d.value));
        return lineGenerator(data);
    }

    /** 
     * Returns format function or null value if no format function is specified which is then used
     * in d3s function for formatting axis ticks.
     */
    private formatAxisLabels(): any {
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
        labels.nodes().forEach((element: any) => totalTextLength += element.getComputedTextLength());

        if (totalTextLength > this.state.containerWidth - spacing) {
            labels.attr('transform', 'rotate(45)').attr('y', 10)
                .attr('x', 10).attr('dy', '.35em').style('text-anchor', 'start');
        } else {
            labels.attr('transform', 'rotate(0)').attr('x', 0).style('text-anchor', 'middle');
        }
    }
}
