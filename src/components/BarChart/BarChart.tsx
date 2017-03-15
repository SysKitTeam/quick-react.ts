import * as React from 'react';
import * as ReactDOM from 'react-dom';
import * as classNames from 'classnames';
import * as d3 from 'd3';
import { IBarChartProps, IBarChartData } from './BarChart.props';
import './BarChart.scss';
import { BarChartContent } from './BarChartContent';

const objectAssign = require('object-assign');
const ResizeSensor = require('css-element-queries/src/ResizeSensor');

export class BarChart extends React.PureComponent<IBarChartProps, any> {
    public static defaultProps = {
        id: '',
        barColor: '#889ac4',
        hovColor: '#b8c7e8',
        data: [],
        tipText: (data: IBarChartData) => ('Frequency of ' + data.argument + ' is : ' + data.frequency),
        xAxisFormat: () => null,
        width: 500,
        height: 300,
        minWidth: 300,
        maxWidth: 1000,
        onClick: () => {}
    };

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
                style={{width: this.props.dimensions.width, height: this.props.dimensions.height}}>
                { this.state.parentMounted && <BarChartContent {...props}/> }
            </div>
        );
    }

    public componentDidMount() {
        const mainContainerClass = classNames('bar-chart-component', this.props.id);
        new ResizeSensor(document.getElementsByClassName(mainContainerClass)[0], () => this._onResize());
        const element = ReactDOM.findDOMNode(this) as HTMLElement;
        this.setState({ fullWidth : element.offsetWidth, fullHeight: element.offsetHeight, parentMounted: true });
    }

    public componentWillUnmount() {
        const mainContainerClass = classNames('bar-chart-component', this.props.id);
        ResizeSensor.detach(document.getElementsByClassName(mainContainerClass)[0]);
    }

    private _onResize() : any {
        const node : any = document.getElementsByClassName('bar-chart-component')[0];
        const width = node.offsetWidth;
        const height = node.offsetHeight;
        if(this.state.fullWidth !== width || this.state.fullHeight !== height) { 
            this.setState({ fullWidth: width, fullHeight: height });
        }
    }
}
