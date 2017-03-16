import * as React from 'react';
import * as d3 from 'd3';
import * as classNames from 'classnames';
import { IPieChartProps, IPieChartData } from './PieChart.props';
import { Tooltip } from '../Tooltip/Tooltip';
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
            isTipVisible: false,
            data: this.transformData(props)
        };
    }

    private createArc = () : any => d3.arc().outerRadius(0).innerRadius(this.state.radius);
    private createPie = () => d3.pie<IPieChartData>().padAngle(.02).sort(null).value((d : IPieChartData): number => d.value);
    private createColorPallette = () => d3.scaleOrdinal(this.props.colors);

    private transformData(props: IPieChartProps): Array<any> {
        let data = Array(0);        

        if (props.displayingElements !== undefined) {
            const sortedData = props.data.sort((a, b) => b.value - a.value);

            for (let i = 0; i < props.displayingElements - 1; i++) { data.push(sortedData[i]); }
            
            let value = 0;
            for (let i = props.data.length - 1; i >= props.data.length - props.displayingElements - 2; i--) { value += sortedData[i].value; }
            data.push({ label: 'Other', value: value });

            return data;
        }

        return props.data;
    }

    public componentWillReceiveProps(newProps: IPieChartProps, newState: any) {
        const radius = newProps.width / 2;
        
        this.setState({
            fullWidth: newProps.width,
            fullHeight: newProps.height,
            radius: radius,
            data: this.transformData(newProps)
        });
    }

    public componentDidMount() {
        this.bindData();
    }

    public componentDidUpdate() {
        this.bindData();
    }

    private bindData() {
        const pie = this.createPie();
        d3.selectAll('.pie-arc.' + this.props.id).data(pie(this.state.data));
    }

    public render() {
        const containerClass = classNames('pie-chart-container', this.props.id);
        const translate = 'translate(' + (this.state.fullWidth / 2) + ',' + (this.state.fullHeight / 2) + ')';
        return(
            <svg width={'100%'} height={this.props.height}>
                <g className={containerClass} transform={translate}>
                    { this.renderPaths() }
                    <Tooltip id={'pie-chart-tooltip'} x={this.state.tipX} y={this.state.tipY} text={this.state.tipText} visible={this.state.isTipVisible}/>
                </g>
            </svg>
        );
    }

    private renderPaths() : Array<JSX.Element> {
        const arc = this.createArc();
        const color = this.createColorPallette();
        const pie = this.createPie();

        const arcData = pie(this.state.data) as Array<any>;

        const pieArcClass = classNames('pie-arc', this.props.id);

        return arcData.map((d, index) =>
            <path className={pieArcClass} key={index}
                    d={ arc({ startAngle: d.startAngle, endAngle: d.endAngle }) }
                    style={{ fill: color(d.data.label) }} 
                    onMouseOver={ (event: React.MouseEvent<SVGAElement>) => this.onMouseOver(event.currentTarget) }
                    onMouseOut={ (event: React.MouseEvent<SVGAElement>) => this.onMouseOut(event.currentTarget) }/>
        );
    }

    private onMouseOver(element: SVGAElement) {
        const arc = this.createArc();
        const elementData: any = d3.select(element).datum();
        const coordinates = arc.centroid(elementData);

        this.setState({ isTipVisible: true, tipX: coordinates[0], tipY: coordinates[1], tipText: this.props.tipText(elementData.data) });
    }

    private onMouseOut(element: SVGAElement) {
        this.setState({ isTipVisible: false });
    }
}
