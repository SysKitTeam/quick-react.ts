import * as React from 'react';
import * as d3 from 'd3';
import * as classNames from 'classnames';
import { Label } from '../Label/Label';
import { ILineChartProps, ILineChartData } from './LineChart.props';
import { LineChartContent } from './LineChartContent';
import './LineChart.scss';

const ResizeSensor = require('css-element-queries/src/ResizeSensor');
const objectAssign = require('object-assign');

const margin: any = { top: 20, bottom: 30, left: 50, right: 40 };

export class LineChart extends React.Component<ILineChartProps, any> {
    public static defaultProps = {
        width: 0,
        height: 0,
        id: '',
        title: '',
        ticks: 2,
        xAxisFormat: () => null
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

        return (
            <div className={componentClass} 
                style={{ width: this.props.dimensions.width, height: this.props.dimensions.height }} 
                ref={(element: HTMLDivElement) => this.init(element)}>
                { this.state.isParentMounted && <LineChartContent {...props}/> }
            </div>
        );
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
            this.setState({ width: width, height: height, isParentMounted: true });
            this.forceUpdate();
        }
    }
}
