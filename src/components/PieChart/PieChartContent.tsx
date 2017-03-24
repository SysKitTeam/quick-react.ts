import * as React from 'react';
import * as d3 from 'd3';
import * as classNames from 'classnames';
import { IPieChartContentProps, IPieChartData } from './PieChart.props';
import { Tooltip } from '../Tooltip/Tooltip';

export class PieChartContent extends React.PureComponent<IPieChartContentProps, any> {
    constructor(props: IPieChartContentProps) {
        super(props);

        this.state = {
            tipX: 0,
            tipY: 0,
            tipText: '',
            isTipVisible: false
        };
    }

    /**
     * Creates arc generator function with given arguments.
     */
    private createArc = () : any => d3.arc().outerRadius(0).innerRadius(this.props.width / 2);
    
    /**
     * Create pie generator for given data arguments.
     */
    private createPie = () => d3.pie<IPieChartData>().padAngle(.02).sort(null).value((d : IPieChartData): number => d.value);

    /**
     * Creates color function that returns color based on given string.
     */
    private createColorPallette = () => d3.scaleOrdinal(this.props.colors);

    /**
     * When component is mounted bind given data to arc elements.
     */
    public componentDidMount() {
        this.bindData();
    }

    /**
     * When component is updated bind given data to arc elements.
     */
    public componentDidUpdate() {
        this.bindData();
    }

    /**
     * Binds given data to arc elements.
     */
    private bindData() {
        const pie = this.createPie();
        d3.selectAll('.pie-arc.' + this.props.id).data(pie(this.props.data));
    }

    public render() {
        const containerClass = classNames('pie-chart-container', this.props.id);
        const translate = 'translate(' + (this.props.width / 2) + ',' + (this.props.height / 2) + ')';
        return(
            <svg width={this.props.width} height={this.props.height}>
                <g className={containerClass} transform={translate}>
                    { this.renderPaths() }
                    <Tooltip id={'pie-chart-tooltip'} x={this.state.tipX} y={this.state.tipY} text={this.state.tipText} visible={this.state.isTipVisible}/>
                </g>
            </svg>
        );
    }

    /**
     * Create pie arcs based on given data array.
     */
    private renderPaths() : Array<JSX.Element> {
        const arc = this.createArc();
        const color = this.createColorPallette();
        const pie = this.createPie();

        const arcData = pie(this.props.data) as Array<any>;

        const pieArcClass = classNames('pie-arc', this.props.id);

        return arcData.map((d, index: number) =>
            <path className={pieArcClass} key={index}
                    d={arc({ startAngle: d.startAngle, endAngle: d.endAngle })}
                    style={{ fill: color(d.data.label) }}
                    onMouseOver={ (event: React.MouseEvent<SVGAElement>) => this.onMouseOver(event.currentTarget) }
                    onMouseOut={ (event: React.MouseEvent<SVGAElement>) => this.onMouseOut(event.currentTarget) }/>
        );
    }

    /**
     * When mouse is moved over arc of component show tooltip with appropriate text.
     */
    private onMouseOver(element: SVGAElement) {
        const arc = this.createArc();
        const elementData: any = d3.select(element).datum();
        const coordinates = arc.centroid(elementData);

        this.setState({ isTipVisible: true, tipX: coordinates[0], tipY: coordinates[1], tipText: this.props.tipText(elementData.data) });
    }

    /**
     * Hide tooltip when mouse is moved out of position.
     */
    private onMouseOut(element: SVGAElement) {
        this.setState({ isTipVisible: false });
    }
}
