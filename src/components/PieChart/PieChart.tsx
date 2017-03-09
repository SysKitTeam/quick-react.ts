import * as React from 'react';
import * as d3 from 'd3';
import * as classNames from 'classnames';
import { Label } from '../Label/Label';
import { IPieChartProps } from './PieChart.props';
import { IPieChartData } from './PieChart.props';

import './PieChart.scss';

export class PieChart extends React.Component<IPieChartProps, null> {

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

    private margin = {
        top: 10,
        right: 10,
        bottom: 10,
        left: 10
    };

    private _radius: any;
    private _focus: any;
    private _arc: any;
    private _textCoordinates: number[];

    constructor() {
        super();
    }

    public componentDidMount() {
        this.draw();
    }

    public componentDidUpdate() {
        this.redraw();
    }

    public shouldComponentUpdate(nextProps: IPieChartProps, nextState: null) {
        if (this.props.height === nextProps.height &&
            this.props.width === nextProps.width &&
            this.props.id === nextProps.id &&
            this.props.text === nextProps.text &&
            this.props.title === nextProps.title &&
            this.state === null &&
            nextState === null) {
            return !this._arraysEqual(this.props.data, nextProps.data);
        }
        return true;
    }

    private _arraysEqual(arr1: IPieChartData[], arr2: IPieChartData[]) {
        if (arr1.length !== arr2.length) { return false; }
        for (let i = arr1.length; i--;) {
            if (!this._compareValues(arr1[i], arr2[i])) { return false; }
        }
        return true;
    }

    private _compareValues(data1: IPieChartData, data2: IPieChartData) {
        if (data1.class !== data2.class) { return false; }
        if (data1.label !== data2.label) { return false; }
        if (data1.value !== data2.value) { return false; }
        return true;
    }

    private redraw() {
        d3.select('.svg-container.' + this.props.id).remove();
        this.draw();
    }

    public render() {
        return (
            <div className={'pie-chart-component'}>
                <Label className={'title'}>{this.props.title}</Label>
                <Label className={'text'}>{this.props.text}</Label>
                <div className={'pie-chart-container'} ref={'container'}></div>
            </div>
        );
    }

    private draw() {
        this._radius = (this.props.width - 2) / 4;
        const svg = this.createContainer();
        const pie = this.createPie();
        const arc = this.createArc();
        const color = this.createColorPallette();

        svg.selectAll('.pie-path')
            .data(pie(this.props.data))
            .enter().append('path')
            .attr('d', arc)
            .attr('class', 'pie-path')
            .style('fill', (d) => color(d.data.label))
            .on('mouseover', (d) => this._onMouseOver(d))
            .on('mouseout', () => this._onMouseOut());

        this.createTooltip(svg);
    }

    private _onMouseOver(d) : any {
        // d3.select(d3.event.currentTarget).attr('opacity', 0.75);
        d3.select(d3.event.currentTarget).attr('transform', 'translate(10, -20)');
        this.showTooltip(d);
    }

    private _onMouseOut() : any {
        // d3.select(d3.event.currentTarget).attr('opacity', 1);
        d3.select(d3.event.currentTarget).attr('transform', 'translate(0, 0)');
        this._focus.style('display', 'none');
    }

    private showTooltip(d: any) {
        const coordinates = this._arc.centroid(d);
        const textRef = this._focus.select('text.tooltip-text').text(this.props.tipText(d.data));
        const textWidth = textRef.node().getComputedTextLength();
        const textPadding = 16;

        this._focus.style('display', 'block');

        const translatePol = 'translate(' + (coordinates[0] - 10) + ',' + (coordinates[1] - 15) + ')';
        const translateTextArea = 'translate(' + (coordinates[0] - textWidth / 2) + ',' + (coordinates[1] - 39) + ')';
        const translateText = 'translate(' + coordinates[0] + ',' + (coordinates[1] - 39) + ')';

        this._focus.select('.tip-pol').attr('transform', translatePol);
        this._focus.select('.tip-rect').attr('width', textWidth + textPadding).attr('transform', translateTextArea);
        this._focus.select('text.tooltip-text').attr('transform', translateText);
    }

    private createContainer() {
        return d3.select(this.refs.container).append('svg')
            .attr('class', 'svg-container ' + this.props.id)
            .attr('width', this.props.width - 2)    // minus 2 because of border
            .attr('height', this.props.height - 20)
            .append('g')
            .attr('class', 'pie-chart-g')
            .attr('transform', 'translate(' + (this.props.width / 2) + ',' + (this.props.height / 2) + ')');
    }

    private createArc() : any {
        this._arc = d3.arc()
            .outerRadius(this._radius)
            .innerRadius(0);
        return this._arc;
    }

    private createFocus(svg: any) {
        return svg.append('g').style('display', 'none');
    }

    private createTooltip(container: any) {
        this._focus = this.createFocus(container);

        this._focus.append('rect')
            .attr('height', 24)
            .attr('width', 100)
            .attr('class', 'tip-rect')
            .attr('fill', 'white')
            .attr('x', 0)
            .attr('y', 0)
            .attr('pointer-events', 'none');

        this._focus.append('polygon')
            .attr('fill', 'white')
            .attr('class', 'tip-pol')
            .attr('points', '0,0 10,10 20,0')
            .attr('pointer-events', 'none');

        this._focus.append('text')
            .attr('class', 'tooltip-text')
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
