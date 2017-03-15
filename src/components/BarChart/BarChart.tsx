import * as React from 'react';
import * as classNames from 'classnames';
import { IBarChartProps, IBarChartData } from './BarChart.props';
import { BarChartContent } from './BarChartContent';

const objectAssign = require('object-assign');
const ResizeSensor = require('css-element-queries/src/ResizeSensor');

export class BarChart extends React.PureComponent<IBarChartProps, any> {
    public static defaultProps = {
        id: '',
        data: [],
        tipText: (data: IBarChartData) => ('Frequency of ' + data.argument + ' is : ' + data.frequency),
        xAxisFormat: () => null,
        width: 500,
        height: 300,
        onClick: () => {},
        selectedIndex: 0
    };

    private containerRef;

    constructor(props: IBarChartProps) {
        super(props);

        this.state = {
            fullWidth: 0,
            fullHeight: 0,
            parentMounted: false
        };
    }

    public render() {
        const mainContainerClass = classNames('bar-chart-component', this.props.id);
        const props = objectAssign({}, this.props, {width: this.state.fullWidth, height: this.state.fullHeight});

        return (
            <div className={mainContainerClass}
                style={{width: this.props.dimensions.width, height: this.props.dimensions.height}}
                ref={(element: HTMLDivElement) => this.init(element)}>
                { this.state.parentMounted && <BarChartContent {...props}/> }
            </div>
        );
    }

    public componentWillUnmount() { ResizeSensor.detach(this.containerRef); }

    private init(element: HTMLDivElement) : void {
        if (element === null) { return; }
        this.containerRef = element;
        new ResizeSensor(element, (element) => this.onResize());
        this.setState({ fullWidth : element.offsetWidth, fullHeight: element.offsetHeight, parentMounted: true });
    }

    private onResize() : void {
        const width = this.containerRef.offsetWidth;
        const height = this.containerRef.offsetHeight;
        if (this.state.fullWidth !== width || this.state.fullHeight !== height) {
            this.setState({ fullWidth: width, fullHeight: height }); 
            this.forceUpdate(); 
        }
    }
}
