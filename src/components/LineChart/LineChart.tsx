import * as React from 'react';
import * as d3 from 'd3';
import * as classNames from 'classnames';
import { Label } from '../Label/Label';
import { ILineChartProps, ILineChartData, ISeriesData } from './LineChart.props';
import { LineChartContent } from './LineChartContent';
import './LineChart.scss';

const ResizeSensor = require('css-element-queries/src/ResizeSensor');
const objectAssign = require('object-assign');

export class LineChart extends React.PureComponent<ILineChartProps, any> {
    public static defaultProps = {
        width: 0,
        height: 0,
        id: '',
        xAxisTicks: 6,
        yAxisTicks: 6,
        yAxisDomain: [0, 100],
        xAxisFormat: () => null,
        yAxisFormat: (d: number) => d,
        colorPallette: d3.schemeCategory20
    };

    private containerRef: HTMLDivElement;

    constructor(props: ILineChartProps) {
        super(props);

        this.state = {
            width: 0,
            height: 0,
            isParentMounted: false
        };
    }

     public render() {
        const props = objectAssign({}, this.props, {width: this.state.width, height: this.state.height});
        const componentClass = classNames('line-chart-component', this.props.id, this.props.className);
        const titleClass = classNames('line-chart-title', this.props.id, this.props.className);
        return (
            <div className={componentClass} 
                style={{ width: this.props.dimensions.width, height: this.props.dimensions.height }}
                ref={(element: HTMLDivElement) => this.init(element)}>>
                { this.props.title && <Label className={titleClass}>{this.props.title}</Label> }
                {this.renderLegend()}
                { this.state.isParentMounted && <LineChartContent {...props}/> }
            </div>
        );
    }

    private renderLegend() {
        const colorFunc = d3.scaleOrdinal(this.props.colorPallette);
        const items = this.props.series.map( (data: ISeriesData, index: number) => {
            return (
                <div key={index} className={'legend-item'}>
                    <div style={{ backgroundColor: colorFunc(data.name)}}></div>
                    <Label style={{ display: 'inline-block' }}>{ data.name }</Label>
                </div>
            );
        });
        return <div className={'line-chart-legend'}>{items}</div>;
    }

    private init(element: HTMLDivElement) {
        if (element === null) { return; }
        this.containerRef = element;
        const sensor = new ResizeSensor(element, () => this.onResize());
        
        const width = element.offsetWidth;
        const height = element.offsetHeight;

        if (height !== this.state.height || width !== this.state.width) {
            this.setState({ width: width, height: height, isParentMounted: true });
        }
    }

    private onResize() {
        const width = this.containerRef.offsetWidth;
        const height = this.containerRef.offsetHeight;
        if (height !== this.state.height || width !== this.state.width) {
            this.setState({ width: width, height: height });
            this.forceUpdate();
        }
    }

    public componentWillUnmount() { ResizeSensor.detach(this.containerRef); }
}
