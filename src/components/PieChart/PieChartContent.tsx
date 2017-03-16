import * as React from 'react';
import * as d3 from 'd3';
import * as classNames from 'classnames';
import { IPieChartProps, IPieChartData } from './PieChart.props';
import './PieChart.scss';

export class PieChartContent extends React.PureComponent<IPieChartProps, any> {
    constructor(props: IPieChartProps) {
        super(props);

        this.state = {
            fullWidth: props.width,
            fullHeight: props.height,
            radius: props.width / 2,
            tipX: 0,
            tipY: 0,
            tipText: '',
            isTipVisible: false
        };
    }

    private createArc = () : any => d3.arc().outerRadius(this.state.radius).innerRadius(0);
    private createPie = () => d3.pie<IPieChartData>().sort(null).value((d : IPieChartData): number => d.value);
    private createColorPallette = () => d3.scaleOrdinal(this.props.colors);

    public componentWillReceiveProps(newProps: IPieChartProps, newState: any) {
        const radius = newProps.width / 2;
        this.setState({
            fullWidth: newProps.width,
            fullHeight: newProps.height,
            radius: radius
        });
    }

    public render() {
        const containerClass = classNames('pie-chart-container', this.props.id);
        const translate = 'translate(' + (this.state.fullWidth / 2) + ',' + (this.state.fullHeight / 2) + ')';
        return(
            <svg className={containerClass} width={'100%'} height={this.props.height}>
                <g transform={translate}>
                    { this.renderPaths() }
                </g>
            </svg>
        );
    }

    private renderPaths() : Array<JSX.Element> {
        const arc = this.createArc();
        const color = this.createColorPallette();
        const pie = this.createPie();

        const arcData = pie(this.props.data) as Array<any>;

        return arcData.map((d, index) =>
            <path className={'pie-chart-arc'} key={index}
                    d={ arc({ startAngle: d.startAngle, endAngle: d.endAngle }) }
                    style={{ fill: color(d.data.label) }} 
                    onMouseOver={ (event: React.MouseEvent<SVGAElement>) => this.onMouseOver(event.currentTarget) }
                    onMouseOut={ (event: React.MouseEvent<SVGAElement>) => this.onMouseOut(event.currentTarget) }/>
        );
    }

    private onMouseOver(element: SVGAElement) {

    }

    private onMouseOut(element: SVGAElement) {

    }
}
