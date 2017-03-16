import * as React from 'react';
import * as d3 from 'd3';
import * as classNames from 'classnames';
import { IPieChartProps, IPieChartData } from './PieChart.props';
import { PieChartContent } from './PieChartContent';

const objectAssign = require('object-assign');
const ResizeSensor = require('css-element-queries/src/ResizeSensor');

export class PieChart extends React.PureComponent<IPieChartProps, any> {
    public static defaultProps = {
        title: '',
        text: '',
        colors: d3.schemeCategory10,
        tipText: () => ''
    };

    private containerRef : HTMLDivElement;

    constructor(props: IPieChartProps) {
        super(props);

        this.state = {
            fullWidth: 0,
            fullHeight: 0,
            isParentMounted: false
        };
    }

    public render() {
        const pieComponentClass = classNames('pie-chart-component', this.props.id);
        const props = objectAssign({}, this.props, { width: this.state.fullWidth, height: this.state.fullHeight });
        return (
            <div className={pieComponentClass} 
                style={{width: this.props.dimensions.width, height: this.props.dimensions.height}}
                ref={(element: HTMLDivElement) => this.init(element)}>
                { this.state.isParentMounted && <PieChartContent {...props}/> }
            </div>
        );
    }

    private init(element: HTMLDivElement): void {
        if (element === null) { return; }

        this.containerRef = element;

        const sensor = new ResizeSensor(element, () => this.onResize());

        const width = element.offsetWidth;
        const height = element.offsetHeight;

        if (this.state.fullWidth !== width || this.state.fullHeight !== height) {
            this.setState({ fullWidth: width, fullHeight: height, isParentMounted: true });
        }
    }

    private onResize(): void {
        const width = this.containerRef.offsetWidth;
        const height = this.containerRef.offsetHeight;

        if (this.state.fullWidth !== width || this.state.fullHeight !== height) {
            this.setState({ fullWidth: width, fullHeight: height });
            this.forceUpdate();
        }
    }

    public componentWillUnmount() { ResizeSensor.detach(this.containerRef); }

    // private draw() {
    //     this._radius = this._fullWidth / 4;
    //     this._chartContainer = this.createContainer();

    //     const pie = this.createPie();
    //     const arc = this.createArc();
    //     const color = this.createColorPallette();

    //     this._chartContainer.selectAll('.pie-path')
    //         .data(pie(this.props.data))
    //         .enter().append('path')
    //         .attr('d', arc)
    //         .attr('class', 'pie-path')
    //         .style('fill', (d) => color(d.data.label))
    //         .on('mouseover', (d) => this._onMouseOver(d))
    //         .on('mouseout', () => this._onMouseOut());

    //     // this.createTooltip(this._chartContainer);
    // }

    // private _onMouseOver(d) : any {
    //     d3.select(d3.event.currentTarget).attr('opacity', 0.75); 
    //     // this.showTooltip(d);
    // }

    // private _onMouseOut() : any {
    //     d3.select(d3.event.currentTarget).attr('opacity', 1);
    //     this._focus.select('.tip-pol-up').style('display', 'none');
    //     this._focus.select('.tip-pol-down').style('display', 'none');
    //     this._focus.style('display', 'none');
    // }

    // private createColorPallette() {
    //     return d3.scaleOrdinal(this.props.colors);
    // }

    // private createTooltip(container: any) {
    //     const tipClassName = classNames('tip', this.props.id);

    //     this._focus = container.append('g').attr('class', classNames(tipClassName, 'tip-container')).style('display', 'none');

    //     this._focus.append('rect')
    //         .attr('height', 24)
    //         .attr('width', 100)
    //         .attr('class', classNames(tipClassName, 'tip-rect'))
    //         .attr('fill', 'white')
    //         .attr('x', 0)
    //         .attr('y', 0)
    //         .attr('pointer-events', 'none');

    //     this._focus.append('polygon')
    //         .attr('fill', 'white')
    //         .attr('class', classNames(tipClassName, 'tip-pol-down'))
    //         .attr('points', '0,0 10,10 20,0')
    //         .style('display', 'none')
    //         .attr('pointer-events', 'none');

    //     this._focus.append('polygon')
    //         .attr('fill', 'white')
    //         .attr('class', classNames(tipClassName, 'tip-pol-up'))
    //         .attr('points', '0,0 10,-10, 20,0')
    //         .style('display', 'none')
    //         .attr('pointer-events', 'none');

    //     this._focus.append('text')
    //         .attr('class', classNames(tipClassName, 'tip-text'))
    //         .attr('fill', 'black')
    //         .attr('dx', 8)
    //         .attr('dy', 14)
    //         .attr('text-anchor', 'middle')
    //         .attr('pointer-events', 'none');
    // }

    //  private showTooltip(d: any) {
    //     const coordinates = this._arc.centroid(d);

    //     const textRef = this._focus.select('text.tip-text').text(this.props.tipText(d.data));
    //     const textWidth = textRef.node().getComputedTextLength();
    //     const textPadding = 16;

    //     this._focus.style('display', 'block');

    //     let translatePol, translateTextArea, translateText;

    //     // Flip tooltip
    //     if (coordinates[1] < 0) {
    //         this._focus.select('.tip-pol-up').style('display', 'block');
    //         translatePol = 'translate(' + (coordinates[0] - 10) + ',' + (coordinates[1] + 10) + ')';
    //         translateTextArea = 'translate(' + (coordinates[0] - textWidth / 2) + ',' + (coordinates[1] + 10) + ')';
    //         translateText = 'translate(' + coordinates[0] + ',' + (coordinates[1] + 10) + ')';
    //         this._focus.select('.tip-pol-up').attr('transform', translatePol);
    //     } else {
    //         this._focus.select('.tip-pol-down').style('display', 'block');
    //         translatePol = 'translate(' + (coordinates[0] - 10) + ',' + (coordinates[1] - 15) + ')';
    //         translateTextArea = 'translate(' + (coordinates[0] - textWidth / 2) + ',' + (coordinates[1] - 39) + ')';
    //         translateText = 'translate(' + coordinates[0] + ',' + (coordinates[1] - 39) + ')';
    //         this._focus.select('.tip-pol-down').attr('transform', translatePol);
    //     }

    //     // this._focus.select('.tip-pol-up').attr('transform', translatePol);
    //     this._focus.select('.tip-rect').attr('width', textWidth + textPadding).attr('transform', translateTextArea);
    //     this._focus.select('text.tip-text').attr('transform', translateText);
    // }
}
