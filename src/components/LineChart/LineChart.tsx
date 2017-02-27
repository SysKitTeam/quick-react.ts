import * as React from 'react';
import * as d3 from 'd3';
import * as classNames from 'classnames';
import { Label } from '../Label/Label';
import { ILineChartProps } from './LineChart.props';
import { ILineChartData } from './LineChart.props';
import './LineChart.scss';

export class LineChart extends React.Component<ILineChartProps, undefined> {
    public static defaultProps = {
        width: 350,
        height: 200,
        id: '',
        title: '',
        gridSize: 2,
        xAxisScale: 'LINEAR'
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

    constructor(props: ILineChartProps) {
        super(props);
        this.x = this.generateX();
        this.y = this.generateY();       
    }

    public componentDidMount() {
        this.draw();
    }

    public componentDidUpdate() {
        this.x = this.generateX();
        this.redraw();
    }

    public render() {
        return (
            <div className={'line-chart-container'} ref="container">
                <Label className={'line-chart-title'}>{this.props.title}</Label>
            </div>
        );
    }

    private draw() {
        const id = this.props.id;
        const svg = d3.select(this.refs.container).append('svg')
                    .attr('width', this.props.width - 10)
                    .attr('height', this.props.height)
                    .append('g')
                    .attr('class', 'svg-container')
                    .attr('transform', 'translate(' + this.margin.left + ',' + (this.margin.top + 20) + ')');

        svg.insert('g', ':first-child')
            .attr('transform', 'translate(0,' + (this.height - 20) + ')')
            .attr('class', classNames('x-axis', id))
            .call(this.generateXAxis());

        svg.append('g').attr('class', classNames('y-axis', id))
            .call(this.generateYAxis()).selectAll('line').attr('transform', 'translate(-15, 0)');

        svg.insert('path', '.y-axis + *')
            .data([this.props.data]).attr('class', classNames('line-chart-line', id)).attr('d', this.constructLine());

        this.addTooltip(svg);
        this.drawCaptureArea(svg);
    }

    private redraw() {
        d3.select('.x-axis.' + this.props.id).call(this.generateXAxis());
        d3.select('.line-chart-line.' + this.props.id).attr('d', this.constructLine());
    }

    private generateX() : any {
        const domain = d3.extent(this.props.data, (d) => d.argument);
        const range = d3.extent([0, this.width]);
        switch(this.props.xAxisScale) {
            case 'TIME':
                return d3.scaleTime().domain(domain).range(range);
            case 'LINEAR':
                return d3.scaleLinear().domain(domain).range(range);
            default:
                return null;
        }
    }

    private generateY() {
        return d3.scaleLinear()
                .domain([0, 100])
                .range([this.height - 20, 0]);
    }

    private generateXAxis() {
        const axis = d3.axisBottom(this.generateX())
                .tickValues(d3.extent(this.props.data, (d) => d.argument))
                .tickSizeInner(-(this.height - 20))
                .tickSizeOuter(0)
                .tickPadding(15);
        if (this.props.xAxisScale === 'TIME') { return axis.ticks(2, '%I:%M:%S %p'); }
        return axis.ticks(2);
    }

    private generateYAxis() {
        return d3.axisLeft(this.generateY())
                .tickSizeInner(-(this.width + 15))
                .tickSizeOuter(-10)
                .ticks(this.props.gridSize)
                .tickFormat((d) => (d + '%'))
                .tickPadding(20);   
    }

    private constructLine() {
        return d3.line<ILineChartData>()
                    .x((d) => this.x(d.argument))
                    .y((d) => this.y(d.value));
    }

    private drawCaptureArea(svg: any) {
        return svg.append('rect')
                    .attr('width', this.width)
                    .attr('height', this.height)
                    .attr('class', 'line-chart-capture')
                    .on('mouseover', () => this._focus.style('display', null))
                    .on('mouseout', () =>  this._focus.style('display', 'none'))
                    .on('mousemove', () => this.mouseMove());
    }

    private addTooltip(container: any) {
        this._focus = container.append('g').attr('class', 'tip-container').style('display', 'none');
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
    }

    private mouseMove() {
        const bisect = d3.bisector<ILineChartData, any>((d) => d.argument).left;
        let x0 = this.x.invert(d3.mouse(d3.event.currentTarget)[0]);

        let i = bisect(this.props.data, x0, 1);
        let d0 = this.props.data[i - 1];
        let d1 = this.props.data[i];
        let d;

        if (this.props.xAxisScale === 'TIME') {
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
