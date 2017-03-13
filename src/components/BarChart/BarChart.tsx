import * as React from 'react';
import * as classNames from 'classnames';
import * as d3 from 'd3';
import { IBarChartProps, IBarChartData } from './BarChart.props';
import './BarChart.scss';

const ResizeSensor = require('css-element-queries/src/ResizeSensor');

export class BarChart extends React.PureComponent<IBarChartProps, null> {

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
        onClick: () => {}
    };

    public refs: {
        [argument: string]: (Element);
        container: (HTMLInputElement);
    };

    private margin = { top: 50, right: 50, bottom: 70, left: 50 };
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

    public componentDidMount() {
        this.init();
        new ResizeSensor(document.getElementsByClassName('bar-chart-component')[0], () => this._onResize());
    }

    public componentWillUnmount() {
        ResizeSensor.detach(document.getElementsByClassName('bar-chart-component')[0]);
    }

    public componentDidUpdate() {
        this.redraw();
    }

    public render() {
        const mainContainerClass = classNames('bar-chart-component', this.props.id);
        return (
            <div className={mainContainerClass} 
                ref={'container'} 
                style={{width: this.props.dimensions.width, height: this.props.dimensions.height}}
            ></div>
        );
    }

    /**
     * Initial rendering of chart that only gets called on component mount.
     */
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
        this.container.append('g').attr('class', yAxisClass).call(this.generateYAxis());
        
        this.generateBars(this.container);
        this.createTooltip(this.container);
    }

    /**
     * When component is resized get new dimensions and rescale chart.
     */
    private _onResize() : any {
        const node : any = document.getElementsByClassName('bar-chart-component')[0];
        const width = node.offsetWidth;
        const height = node.offsetHeight;
        if(this.fullWidth !== width || this.fullHeight !== height) { this.rescale(width, height); }
    }

    /**
     * This method gets called when new data is given to chart.
     * It updates chart based on new data but doesn't rescales it.
     */
    private redraw() {
        this.x = this.generateX();
        this.y = this.generateY();

        d3.select('.x-axis.' + this.props.id).attr('transform', 'translate(0,' + this.height + ')').call(this.generateXAxis());
        d3.select('.y-axis.' + this.props.id).call(this.generateYAxis());
        this.redrawBars();
    }

    /**
     * Rescales all aspects of chart based on new dimensions. Also new dimensions are
     * saved in local variables so that component can track its current dimensions.
     */
    private rescale(newWidth : number, newHeight: number) : void {
        this.width = newWidth - this.margin.right - this.margin.left;
        this.height = newHeight - this.margin.top - this.margin.bottom;

        this.x = this.generateX();
        this.y = this.generateY();

        this.svg.attr('height', newHeight).attr('width', newWidth);

        const xAxis = d3.select('.x-axis.' + this.props.id).attr('transform', 'translate(0,' + this.height + ')').call(this.generateXAxis());
        d3.select('.y-axis.' + this.props.id).call(this.generateYAxis());

        const spacing = 60;

        const labels = d3.selectAll('.x-axis.' + this.props.id + ' > .tick > text').nodes();
        let totalLength = 0;
        labels.forEach((element : any) => totalLength += element.getComputedTextLength());

        const rects = this.container.selectAll('.bar').nodes();
        let totalRectLength = 0;
        rects.forEach((element: any) => {
            const attributes = element.getBBox();
            totalRectLength += attributes.width;
        });

        if (totalLength > totalRectLength - spacing ) {
            xAxis.selectAll('text').attr('transform', 'rotate(45)').attr('y', 10)
                .attr('x', 10).attr('dy', '.35em').style('text-anchor', 'start');
        } else {
            xAxis.selectAll('text').attr('transform', 'rotate(0)').attr('x', 0).style('text-anchor', 'middle');
        }

        this.redrawBars();
    }

    private redrawBars() {
        const bars = this.container.selectAll('.bar').data(this.props.data);

        bars.enter().insert('rect', '.tip-container').attr('class', 'bar').style('fill', this.props.barColor)
                    .on('mouseover', () => this._onMouseOver())
                    .on('mouseout', () => this._onMouseOut())
                    .on('click', (data) => this.props.onClick(data));

        this.container.selectAll('.bar')
                    .attr('x', (d) => this.x(d.argument))
                    .attr('width', this.x.bandwidth())
                    .attr('y', (d) => this.y(d.frequency))
                    .attr('height', (d) => (this.height - this.y(d.frequency)));
    }

    /**
     * Creates main container that holds chart. Root element is svg element that holds all other elements,
        and g container is main container in which all other components are placed. G container is
        centered to root svg element and its sizes is smaller that size of root svg element by margins.
        Returns container which is child of root svg component.
     */
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

    /**
     * Creates x axis based on given data and scales it to given width so 
        that domain of given values is placed appropriate on given width.
     */
    private generateX() {
        return d3.scaleBand().domain(this.props.data.map((d) => d.argument)).rangeRound([0, this.width]).padding(0.1);
    }

    /**
     * Creates y axis based on given data and scales it to given height so that
        domain of given values is appropriately placed on given height.
     */
    private generateY() {
        return d3.scaleLinear().domain([0, d3.max(this.props.data, (d) => d.frequency)]).range([this.height, 0]);
    }

    /**
     * Sets x-axis position, formats label to given format and places earlier created x-axis on top of it.
     */
    private generateXAxis() {
        return d3.axisBottom(this.x).tickPadding(10).tickFormat(this.formatAxisLabels());
    }

    /**
     * Sets y-axis position, styles it and places earlier created y-axis on top of it.
     */
    private generateYAxis() {
        return d3.axisLeft(this.y).tickSizeInner(-this.width).tickPadding(5);
    }

    /**
     * Creates bars based on given data that is passed to component. 
     * Every bar gets its own place and dimensions based on that data.
     */
    private generateBars(container: any) {
        const barClassName = classNames('bar-char-component', 'bar', this.props.id)
        container.selectAll(barClassName).data(this.props.data).enter()
                    .append('rect').attr('class', barClassName).style('fill', this.props.barColor)
                    .on('mouseover', () => this._onMouseOver())
                    .on('mouseout', () => this._onMouseOut())
                    .on('click', (data) => this.props.onClick(data))
                    .attr('x', (d) => this.x(d.argument))
                    .attr('width', this.x.bandwidth())
                    .attr('y', (d) => this.y(d.frequency))
                    .attr('height', (d) => (this.height - this.y(d.frequency)));
    }

    private createTooltip(container: any) {
        const tipClass = classNames('bar-chart-component', 'tip', this.props.id);
        this.focus = container.append('g')
                        .attr('class', classNames(tipClass, 'tip-container'))
                        .style('display', 'none');
        this.focus.append('polygon')
            .attr('class', classNames(tipClass, 'tip-pol'))
            .attr('points', '0,24 10,35 20,24');
        this.focus.append('rect')
            .attr('height', 24)
            .attr('class', classNames(tipClass, 'tip-rect'));
        this.focus.append('text')
            .attr('class', classNames(tipClass, 'tip-text'))
            .attr('dx', 4)
            .attr('dy', 15);
    }

    /**
     * This function gets called when mouse is hovered over bar. It changes color of that bar so it
     * is distinguishable from others and also inserts appropriate tooltip text and places tooltip on top
     * of hovered bar.
     */
    private _onMouseOver() {
        const node = d3.select(d3.event.currentTarget).style('fill', this.props.hovColor);
        this.focus.style('display', 'block');
        const height = +node.attr('y') - 38;
        const width = Math.floor(+node.attr('width') / 2);
        const xPol = +node.attr('x') + width - 10;
        const data = (node.datum() as IBarChartData);

        const textRef = this.focus.select('.tip-text').text(this.props.tipText(data));
        const textWidth = this.focus.select('.tip-text').node().getComputedTextLength();
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

    /**
     * X axis could be any data type. This function ensures that if no format is specified
     * d3 uses default formating for every type. If format is specified given format will be used.
     * Based on given data format can be timeFormat or regular format. Returned null value tells d3 to use
     * default formatting.
     */
    private formatAxisLabels() : any {
        if (this.props.xAxisFormat() === null) { return null; }
        const formatFunc = typeof this.props.data[0].argument !== 'object' ? d3.format : d3.timeFormat;
        return formatFunc(this.props.xAxisFormat());
    }
}
