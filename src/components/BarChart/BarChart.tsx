import * as React from 'react';
import * as classNames from 'classnames';
import * as d3 from 'd3';
import { IBarChartProps, IBarChartData } from './BarChart.props';
import './BarChart.scss';

const ResizeSensor = require('css-element-queries/src/ResizeSensor');

enum Update {
    Data = 1,
    Dimension
};

export class BarChart extends React.Component<IBarChartProps, null> {

    public static defaultProps = {
        id: '',
        barColor: '#889ac4',
        hovColor: '#b8c7e8',
        data: [],
        tipText: (data: IBarChartData) => ('Frequency of ' + data.argument + ' is : ' + data.frequency),
        xAxisFormat: () => null,
        width: 500,
        height: 300,
        minWidth: 300,
        maxWidth: 1000,
        isResponsive: false,
        onClick: () => {}
    };

    public refs: {
        [argument: string]: (Element);
        container: (HTMLInputElement);
    };

    private margin = { top: 50, right: 50, bottom: 50, left: 50 };
    private fullWidth;
    private fullHeight;
    private width;
    private height;
    private x;
    private y;
    private focus;
    private svg;
    private container;
    private mainContainer;

    public shouldComponentUpdate(nextProps: IBarChartProps, nextState: null) {
        if (this.props.id !== nextProps.id ||
            this.props.width !== nextProps.width ||
            this.props.height !== nextProps.height ||
            this.props.barColor !== nextProps.barColor) {
                return true;
            }
        if (!this.arraysEqual(this.props.data, nextProps.data)) { return true; }
        return false;
    }

    private arraysEqual(arr1: IBarChartData[], arr2: IBarChartData[]) {
        if (arr1.length !== arr2.length) { return false; }
        for ( let i = arr1.length; i--; ) {
            if (!this.compareValues(arr1[i], arr2[i])) { return false; }
        }
        return true;
    }

    private compareValues(data1: IBarChartData, data2: IBarChartData) {
        if (typeof data1.argument !== 'number' && typeof data1.argument !== 'string') {
            if ((data1.argument as Date).getTime() !== (data2.argument as Date).getTime()) { return false; }
        }
        if (data1.argument !== data2.argument) { return false; }
        if (data1.frequency !== data2.frequency) { return false; }
        return true;
    }

    public componentDidMount() {
        this.init();
        new ResizeSensor(document.getElementsByClassName('bar-chart-component'), () => this._onResize());
    }

    public componentDidUpdate() {
        this.redraw();
        // console.log('updating bar chart...'); // debug...
    }

    public render() {
        return <div className={'bar-chart-component'} ref={'container'} style={{width: this.props.dimensions.width, height: this.props.dimensions.height}}></div>;
    }

    private init() {
        this.mainContainer = document.getElementsByClassName('bar-chart-component')[0];

        this.fullWidth = this.mainContainer.offsetWidth;
        this.fullHeight = this.mainContainer.offsetHeight;
        
        this.width = this.fullWidth - this.margin.right - this.margin.left;
        this.height = this.fullHeight - this.margin.top - this.margin.bottom;

        this.x = this.generateX();
        this.y = this.generateY();

        const xAxisClass = classNames('x-axis', this.props.id);
        const yAxisClass = classNames('y-axis', this.props.id);

        this.container = this.createContainer();
        this.container.append('g').attr('class', xAxisClass).call(this.generateXAxis())
                    .attr('transform', 'translate(0,' + this.height + ')');
                    // .selectAll('text').attr('transform', 'rotate(45)').attr("y", 0)
                    // .attr("x", 9).attr("dy", ".35em").style('text-anchor', 'start');
        this.container.append('g').attr('class', yAxisClass).call(this.generateYAxis());
        
        this.generateBars(this.container);
        this.createTooltip(this.container);
    }

    private redraw() {
        this.rescale(this.props.width, this.props.height);
    }

    private _onResize() : any {
        const node : any = document.getElementsByClassName('bar-chart-component')[0];
        const width = node.offsetWidth;
        const height = node.offsetHeight;
        if(this.fullWidth !== width || this.fullHeight !== height) { this.rescale(width, height); }
    }

    private rescale(newWidth : number, newHeight: number) : void {
        console.log('rescaling...');    // debug
        this.width = newWidth - this.margin.right - this.margin.left;
        this.height = newHeight - this.margin.top - this.margin.bottom;

        this.x = this.generateX();
        this.y = this.generateY();

        this.svg.attr('height', newHeight).attr('width', newWidth);

        d3.select('.x-axis.' + this.props.id).attr('transform', 'translate(0,' + this.height + ')').call(this.generateXAxis());
        d3.select('.y-axis.' + this.props.id).call(this.generateYAxis());

        const bars = this.container.selectAll('.bar').data(this.props.data);

        bars.enter().insert('rect', '.tip-container').attr('class', 'bar').style('fill', this.props.barColor)
                    .on('mouseover', () => this._onMouseOver())
                    .on('mouseout', () => this._onMouseOut())
                    .on('click', (event) => this._onBarClick(event));

        this.container.selectAll('.bar')
                    .attr('x', (d) => this.x(d.argument))
                    .attr('width', this.x.bandwidth())
                    .attr('y', (d) => this.y(d.frequency))
                    .attr('height', (d) => (this.height - this.y(d.frequency)));
    }

    private createContainer() {
        const containerClass = classNames('bar-chart-container', this.props.id);

        this.svg = d3.select(this.refs.container)
                .append('svg')
                .attr('width', this.fullWidth)
                .attr('height', this.fullHeight);
        return this.svg.append('g')
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
        return d3.axisBottom(this.x).tickPadding(10); // .tickFormat(d3.timeFormat(this.props.xAxisFormat()));
    }

    private generateYAxis() {
        return d3.axisLeft(this.y).tickSizeInner(-this.width).tickPadding(5);
    }

    private generateBars(container: any) {
        container.selectAll('.bar').data(this.props.data).enter()
                    .append('rect').attr('class', 'bar').style('fill', this.props.barColor)
                    .on('mouseover', () => this._onMouseOver())
                    .on('mouseout', () => this._onMouseOut())
                    .on('click', (event) => this._onBarClick(event))
                    .attr('x', (d) => this.x(d.argument))
                    .attr('width', this.x.bandwidth())
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
            .attr('height', 24)
            .attr('class', 'tip-rect');
        this.focus.append('text')
            .attr('class', 'tooltip-text')
            .attr('dx', 4)
            .attr('dy', 15);
    }

    private _onMouseOver() {
        const node = d3.select(d3.event.currentTarget).style('fill', this.props.hovColor);
        this.focus.style('display', 'block');
        const height = +node.attr('y') - 38;
        const width = Math.floor(+node.attr('width') / 2);
        const xPol = +node.attr('x') + width - 10;
        const data = (node.datum() as IBarChartData);

        const textRef = this.focus.select('.tooltip-text').text(this.props.tipText(data));
        const textWidth = this.focus.select('.tooltip-text').node().getComputedTextLength();
        const tipMargin = 8;

        const xRect = +node.attr('x') + width - (textWidth + tipMargin) / 2;

        this.focus.select('.tip-rect').attr('width', textWidth + tipMargin).attr('transform', 'translate(' + xRect + ',' + height + ')');
        this.focus.select('.tip-pol').attr('transform', 'translate(' + xPol + ',' + height + ')');
        textRef.attr('transform', 'translate(' + xRect + ',' + height + ')');
    }

    private _onMouseOut() {
        d3.select(d3.event.currentTarget).style('fill', this.props.barColor);
        this.focus.style('display', 'none');
    }

    private _onBarClick(data) {
        this.props.onClick(data);
    }
}
