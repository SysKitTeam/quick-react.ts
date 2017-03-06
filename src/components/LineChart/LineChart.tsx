import * as React from 'react';
import * as d3 from 'd3';
import * as classNames from 'classnames';
import { Label } from '../Label/Label';
import { ILineChartProps } from './LineChart.props';
import { ILineChartData } from './LineChart.props';
import './LineChart.scss';

export class LineChart extends React.Component<ILineChartProps, null> {
    public static defaultProps = {
        width: Math.floor(window.innerWidth / 2),
        height: Math.floor(0.7 * (window.innerWidth/ 2)),
        id: '',
        title: '',
        ticks: 2
    };

    private _focus: any;
    private margin: any = {
        top: 20,
        bottom: 30,
        left: 50,
        right: 40
    };
    private width: number = this.props.width - this.margin.left - this.margin.right - 10;
    private height: number = this.props.height - this.margin.top - this.margin.bottom;

    refs: {
        [argument: string]: (Element);
        container: (HTMLInputElement);
    };

    private x;
    private y;
    private svg;
    private capture;
    private container;

    constructor(props: ILineChartProps) {
        super(props);
        this.x = this.generateX();
        this.y = this.generateY();
    }

    public shouldComponentUpdate(nextProps: ILineChartProps, nextState: null) {
        if (this.props.height === nextProps.height &&
            this.props.width === nextProps.width &&
            this.props.id === nextProps.id &&
            this.props.title === nextProps.title && 
            this.state === null && nextState === null &&
            this.props.yAxisTicks === nextProps.yAxisTicks &&
            this.props.xAxisTicks === nextProps.xAxisTicks) {
                return !this.arraysEqual(this.props.data, nextProps.data);
        }
        return true;
    }

    private arraysEqual(arr1: ILineChartData[], arr2: ILineChartData[]) {
        if (arr1.length !== arr2.length) { return false; }
        for ( let i = arr1.length; i--; ) {
            if (!this.compareValues(arr1[i], arr2[i])) { return false; }
        }
        return true;
    }

    private compareValues(data1: ILineChartData, data2: ILineChartData) {
        if (typeof data1.argument !== 'number') {
            if ((data1.argument as Date).getTime() !== (data2.argument as Date).getTime()) { return false; }
        }
        if (data1.argument !== data2.argument) { return false; }
        if (data1.value !== data2.value) { return false; }
        return true;
    }

    public componentDidMount() {
        this.init();
        window.addEventListener('resize', () => this.rescale());
    }

    public componentDidUpdate() {
        this.redraw();
    }

    private rescale() : any {
        const width = window.innerWidth / 2;
        const height = width * 0.7;

        this.width = (window.innerWidth / 2) - this.margin.left - this.margin.right - 10;
        this.height = 0.7 * this.width + 10;
        
        this.x.range([0, this.width]);
        this.y.range([this.height - 10, 0]); 

        this.svg.attr('height', height).attr('width', width);
        this.capture.attr('height', height).attr('width', width);

        d3.select('.x-axis.' + this.props.id).attr('transform', 'translate(0,' + (this.height - 20) + ')').call(this.generateXAxis()).selectAll('line').attr('transform', 'translate(0, 20)');;
        d3.select('.y-axis.' + this.props.id).call(this.generateYAxis()).selectAll('line').attr('transform', 'translate(-15, 0)');
        d3.select('.line-chart-line.' + this.props.id).attr('d', this.constructArea());
    }

    private init() {
        const id = this.props.id;
        const xClass = classNames('x-axis', id);
        const yClass = classNames('y-axis', id);
        const lineClass = classNames('line-chart-line', id);

        this.x = this.generateX();
        this.y = this.generateY();

        this.width = (window.innerWidth / 2) - this.margin.left - this.margin.right - 10;
        this.height = 0.7 * this.width + 10;

        const width = window.innerWidth / 2;
        const height = width * 0.7;

        this.svg = d3.select(this.refs.container)
                    .append('svg')
                    .attr('width', width - 10)
                    .attr('height', height);

        this.container = this.svg.append('g')
                            .attr('class', 'svg-container')
                            .attr('transform', 'translate(' + this.margin.left + ',' + (this.margin.top + 20) + ')');

        this.container.append('g')
                    .attr('class', xClass)
                    .attr('transform', 'translate(0,' + (this.height - 20) + ')')
                    .call(this.generateXAxis())
                    .selectAll('line').attr('transform', 'translate(0, 20)');

        this.container.append('g')
                    .attr('class', yClass)
                    .call(this.generateYAxis())
                    .selectAll('line').attr('transform', 'translate(-15, 0)');

        this.container.append('path')
                    .attr('class', lineClass)
                    .data([this.props.data])
                    .attr('d', this.constructArea());

        this._focus = this.container.append('g')
                        .attr('class', 'tip-container')
                        .style('display', 'none');

        this._focus.append('polygon')
            .attr('class', 'tip-pol')
            .attr('points', '10,20 20,35 30,20');
        this._focus.append('rect')
            .attr('width', 40)
            .attr('height', 24)
            .attr('class', 'tip-rect');
        this._focus.append('text')
            .attr('class', 'tooltip-text')
            .attr('dx', 8)
            .attr('dy', '-.3em');

        this.capture = this.container.append('rect')
                    .attr('width', width)
                    .attr('height', height)
                    .attr('class', 'line-chart-capture')
                    .on('mouseover', () => this._focus.style('display', null))
                    .on('mouseout', () =>  this._focus.style('display', 'none'))
                    .on('mousemove', () => this.mouseMove());
    }
    
    public render() {
        return (
            <div className={'line-chart-container'} ref={'container'}>
                <Label className={'line-chart-title'}>{this.props.title}</Label>
            </div>
        );
    }

    private redraw() : any {
        this.x = this.generateX();
        d3.select('.x-axis.' + this.props.id).call(this.generateXAxis()).selectAll('line').attr('transform', 'translate(0, 10)');
        d3.select('.line-chart-line.' + this.props.id).data([this.props.data]).attr('d', this.constructArea());
    }

    private generateX() {
        const scale: any = (typeof this.props.data[0].argument) === 'number' ? d3.scaleLinear() : d3.scaleTime();
        return scale.domain(d3.extent(this.props.data, (d) => d.argument)).range([0, this.width]).nice();
    }

    private generateY() {
        return d3.scaleLinear().domain([0, 100]).range([this.height - 20, 0]).nice();
    }

    private generateXAxis() {
        const ticks = this.props.xAxisTicks === undefined ? 5 : this.props.xAxisTicks;
        const axis = d3.axisBottom(this.x)
                //.tickValues(d3.extent(this.props.data, (d) => d.argument))
                .tickSizeInner(-(this.height))
                .tickSizeOuter(0)
                .tickPadding(20)
                .ticks(ticks);
        // this.props.xAxisTicks !== undefined ? axis.ticks(ticks) : axis.tickValues(d3.extent(this.props.data, (d) => d.argument));
        // if (typeof this.props.data[0].argument !== 'number') { return axis.ticks(ticks, '%I:%M:%S %p'); }
        // return axis.ticks(ticks);
        return axis;
    }

    private generateYAxis() {
        const ticks = this.props.yAxisTicks ? this.props.yAxisTicks : 2;
        return d3.axisLeft(this.y)
                .tickSizeInner(-(this.width + 15))
                .tickSizeOuter(-10)
                .ticks(ticks)
                .tickFormat((d) => (d + '%'))
                .tickPadding(20);   
    }

    private constructArea() {
        return d3.area<ILineChartData>().x((d) => this.x(d.argument)).y0(this.y(0)).y1((d) => this.y(d.value)).curve(d3.curveMonotoneX);
    }

    private mouseMove() {
        const bisect = d3.bisector<ILineChartData, any>((d) => d.argument).left;
        let x0 = this.x.invert(d3.mouse(d3.event.currentTarget)[0]);

        let i = bisect(this.props.data, x0, 1);
        let d0 = this.props.data[i - 1];
        let d1 = this.props.data[i];
        let d;

        if (typeof this.props.data[0].argument !== 'number') {
            d = (x0.getTime() - (d0.argument as Date).getTime()) > ((d1.argument as Date).getTime() - x0.getTime()) ? d1 : d0;
        } else {
            d = x0 - (d0.argument as any) > (d1.argument as any) - x0 ? d1 : d0;
        }

        this._focus.select('.tip-rect')
                .attr('transform', 'translate(' + (this.x(d.argument) - 20) + ',' + (this.y(d.value) - 40) + ')');
        this._focus.select('.tip-pol')
                .attr('transform', 'translate(' + (this.x(d.argument) - 20) + ',' + (this.y(d.value) - 40) + ')');
        this._focus.select('text.tooltip-text')
                .attr('transform', 'translate(' + (this.x(d.argument) - 24) + ',' + (this.y(d.value) - 20) + ')')
                .text(() => d.value + ' %');
    }
}
