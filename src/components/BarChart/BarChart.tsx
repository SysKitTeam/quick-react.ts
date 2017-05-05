import * as React from 'react';
import * as classNames from 'classnames';
import { IBarChartProps, IBarChartData } from './BarChart.props';
import { BarChartContent } from './BarChartContent';
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
        const props = {...this.props, width: this.state.fullWidth, height: this.state.fullHeight};

        return (
            <div className={mainContainerClass}
                style={{width: this.props.dimensions.width, height: this.props.dimensions.height}}
                ref={(element: HTMLDivElement) => this.init(element)}>
                { this.state.parentMounted && <BarChartContent {...props}/> }
            </div>
        );
    }

    public componentWillUnmount() { ResizeSensor.detach(this.containerRef); }

    /**
     * When root container is rendered and its dimensions are known set resize sensor to it and
     * calculate dimensions so that chart content could be displayed inside it.
     */
    private init(element: HTMLDivElement) : void {
        if (element === null) { return; }
        this.containerRef = element;
        const sensor = new ResizeSensor(element, () => this.onResize());
        this.setState({ fullWidth : element.offsetWidth, fullHeight: element.offsetHeight, parentMounted: true });
    }

    /**
     * When root element is resized calculate new dimensions and update state which causes all other child components
     * to be scaled to appropriate dimensions. SetState will not be called if new dimensions are the same as ones in state.
     */
    private onResize() : void {
        const width = this.containerRef.offsetWidth;
        const height = this.containerRef.offsetHeight;
        if (this.state.fullWidth !== width || this.state.fullHeight !== height) {
            this.setState({ fullWidth: width, fullHeight: height }); 
            this.forceUpdate(); 
        }
    }
}
