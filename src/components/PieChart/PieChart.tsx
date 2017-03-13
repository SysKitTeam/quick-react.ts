import * as React from 'react';
import * as d3 from 'd3';
import * as classNames from 'classnames';
import { Label } from '../Label/Label';
import { IPieChartProps } from './PieChart.props';
import { IPieChartData } from './PieChart.props';
import './PieChart.scss';

const ResizeSensor = require('css-element-queries/src/ResizeSensor');

export class PieChart extends React.PureComponent<IPieChartProps, null> {

    public static defaultProps = {
        title: '',
        text: '',
        colors: d3.schemeCategory10,
        tipText: () => ''
    };

    refs: {
        [key: string]: (Element),
        container: HTMLInputElement
    };

    private margin = { top: 10, right: 10, bottom: 10, left: 10 };

    private _radius: any;
    private _focus: any;
    private _arc: any;
    private _textCoordinates: number[];
    private _fullWidth;
    private _fullHeight;
    private _mainContainer;
    private _chartContainer;

    public componentDidMount() {
        const pieComponentClass = classNames('pie-chart-component', this.props.id);
        const container: any = document.getElementsByClassName(pieComponentClass)[0];
        this._fullWidth = container.offsetWidth;
        this._fullHeight = container.offsetHeight;

        this.draw();
        
        new ResizeSensor(document.getElementsByClassName('pie-chart-component')[0], () => this._onResize());
    }

    public componentWillUnmount() {
        const pieComponentClass = classNames('pie-chart-component', this.props.id)
        ResizeSensor.detach(document.getElementsByClassName(pieComponentClass)[0]);
    }

    public componentDidUpdate() {
        this.redraw();
    }

    private redraw() {
        d3.select('.svg-container.' + this.props.id).remove();
        this.draw();
    }

    private _onResize() {
        const pieComponentClass = classNames('pie-chart-component', this.props.id);
        const node: any = document.getElementsByClassName(pieComponentClass)[0];
        const width = node.offsetWidth;
        const height = node.offsetHeight;
        if(this._fullWidth !== width || this._fullHeight !== height) { this.rescale(width, height); }
    }

    private rescale(newWidth: number, newHeight: number) {
        this._fullHeight = newHeight;
        this._fullWidth = newWidth;
        
        this._radius = newWidth / 3;
        this._mainContainer.attr('width', this._fullWidth).attr('height', this._fullHeight);
        
        const arc = this.createArc();
        const pie = this.createPie();
        const color = this.createColorPallette();
        
        this._chartContainer.attr('transform', 'translate(' + (this._fullWidth / 2) + ',' + (this._fullHeight / 2) + ')');
        
        this._chartContainer.selectAll('.pie-path')
            .data(pie(this.props.data))
            .attr('d', arc)
            .attr('class', 'pie-path')
            .style('fill', (d) => color(d.data.label))
            .on('mouseover', (d) => this._onMouseOver(d))
            .on('mouseout', () => this._onMouseOut());
    }

    public render() {
        const pieComponentClass = classNames('pie-chart-component', this.props.id);
        return (
            <div className={pieComponentClass} style={{width: this.props.dimensions.width, height: this.props.dimensions.height}}>
                <Label className={'title'}>{this.props.title}</Label>
                <Label className={'text'}>{this.props.text}</Label>
                <div className={'pie-chart-container'} ref={'container'}></div>
            </div>
        );
    }

    private draw() {
        this._radius = this._fullWidth / 3;
        this._chartContainer = this.createContainer();
        const pie = this.createPie();
        const arc = this.createArc();
        const color = this.createColorPallette();

        this._chartContainer.selectAll('.pie-path')
            .data(pie(this.props.data))
            .enter().append('path')
            .attr('d', arc)
            .attr('class', 'pie-path')
            .style('fill', (d) => color(d.data.label))
            .on('mouseover', (d) => this._onMouseOver(d))
            .on('mouseout', () => this._onMouseOut());

        this.createTooltip(this._chartContainer);
    }

    private _onMouseOver(d) : any {
        d3.select(d3.event.currentTarget).attr('opacity', 0.75); 
        this.showTooltip(d);
    }

    private _onMouseOut() : any {
        d3.select(d3.event.currentTarget).attr('opacity', 1);
        this._focus.style('display', 'none');
    }

    private showTooltip(d: any) {
        const coordinates = this._arc.centroid(d);
        const textRef = this._focus.select('text.tip-text').text(this.props.tipText(d.data));
        const textWidth = textRef.node().getComputedTextLength();
        const textPadding = 16;

        this._focus.style('display', 'block');

        const translatePol = 'translate(' + (coordinates[0] - 10) + ',' + (coordinates[1] - 15) + ')';
        const translateTextArea = 'translate(' + (coordinates[0] - textWidth / 2) + ',' + (coordinates[1] - 39) + ')';
        const translateText = 'translate(' + coordinates[0] + ',' + (coordinates[1] - 39) + ')';

        this._focus.select('.tip-pol').attr('transform', translatePol);
        this._focus.select('.tip-rect').attr('width', textWidth + textPadding).attr('transform', translateTextArea);
        this._focus.select('text.tip-text').attr('transform', translateText);
    }

    private createContainer() {
        this._mainContainer = d3.select(this.refs.container).append('svg')
            .attr('class', 'svg-container ' + this.props.id)
            .attr('width', this._fullWidth) 
            .attr('height', this._fullHeight)
        return this._mainContainer.append('g')
            .attr('class', 'pie-chart-g')
            .attr('transform', 'translate(' + (this._fullWidth / 2) + ',' + (this._fullHeight / 2) + ')');
    }

    private createArc() : any {
        this._arc = d3.arc()
            .outerRadius(this._radius)
            .innerRadius(0);
        return this._arc;
    }

    private createTooltip(container: any) {
        const tipClassName = classNames('tip', this.props.id);

        this._focus = container.append('g').attr('class', classNames(tipClassName, 'tip-container')).style('display', 'none');

        this._focus.append('rect')
            .attr('height', 24)
            .attr('width', 100)
            .attr('class', classNames(tipClassName, 'tip-rect'))
            .attr('fill', 'white')
            .attr('x', 0)
            .attr('y', 0)
            .attr('pointer-events', 'none');

        this._focus.append('polygon')
            .attr('fill', 'white')
            .attr('class', classNames(tipClassName, 'tip-pol'))
            .attr('points', '0,0 10,10 20,0')
            .attr('pointer-events', 'none');

        this._focus.append('text')
            .attr('class', classNames(tipClassName, 'tip-text'))
            .attr('fill', 'black')
            .attr('dx', 8)
            .attr('dy', 14)
            .attr('text-anchor', 'middle')
            .attr('pointer-events', 'none');
    }

    private createPie() {
        return d3.pie<IPieChartData>().sort(null).value((d): any => d.value);
    }

    private createColorPallette() {
        return d3.scaleOrdinal(this.props.colors);
    }
}
