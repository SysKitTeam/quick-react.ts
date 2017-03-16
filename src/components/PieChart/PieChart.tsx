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
}
