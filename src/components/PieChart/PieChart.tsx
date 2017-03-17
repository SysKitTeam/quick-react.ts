import * as React from 'react';
import * as d3 from 'd3';
import * as classNames from 'classnames';
import { IPieChartProps, IPieChartData } from './PieChart.props';
import { PieChartContent } from './PieChartContent';
import './PieChart.scss';

const objectAssign = require('object-assign');
const ResizeSensor = require('css-element-queries/src/ResizeSensor');

export class PieChart extends React.PureComponent<IPieChartProps, any> {
    public static defaultProps = {
        title: '',
        text: '',
        colors: d3.schemeCategory20,
        tipText: (data: IPieChartData) => data.label + ' : ' + data.value,
        showLegend: false
    };

    private containerRef : HTMLDivElement;
    private legendWidth : number;

    constructor(props: IPieChartProps) {
        super(props);

        this.state = {
            chartWidth: 0,
            chartHeight: 0,
            isParentMounted: false,
            data: this.transformData(props)
        };
    }

    private createColorPallette = () => d3.scaleOrdinal(this.props.colors);

    public componentWillReceiveProps(nextProps: IPieChartProps, nextState: any) {
        this.setState({ data: this.transformData(nextProps) });
    }

    public render() {
        console.log('rendering...');
        const pieComponentClass = classNames('pie-chart-component', this.props.id);
        
        const props = objectAssign({}, 
            {
                width: this.state.chartWidth, 
                height: this.state.chartHeight, 
                data: this.state.data, 
                id: this.props.id,
                colors: this.props.colors,
                tipText: this.props.tipText
            }
        );
        
        return (
            <div className={pieComponentClass}
                style={{width: this.props.dimensions.width, height: this.props.dimensions.height}}
                ref={(element: HTMLDivElement) => this.init(element)}>
                    { this.state.isParentMounted && <PieChartContent {...props}/>}
                    { this.props.showLegend && this.renderLegend() }
            </div>
        );
    }

    private init(element: HTMLDivElement): void {
        if (element === null) { return; }

        const width = element.offsetWidth;
        const height = element.offsetHeight;

        let legendIndex = 0;
        let chartWidth = 0;

        if (this.state.isParentMounted === false) {
            this.containerRef = element;
            const sensor = new ResizeSensor(element, () => this.onResize());
            this.setState({ chartWidth: width, chartHeight: height, isParentMounted: true });
            return;
        } else { legendIndex = 1; }

        if (!this.props.showLegend) {
            chartWidth = width;
        } else {
            this.legendWidth = element.children[legendIndex].getBoundingClientRect().width;
            if (width - 10 < this.legendWidth) { chartWidth = width; } else { chartWidth = width - this.legendWidth - 10; }
            if (chartWidth >= height) { chartWidth = height; }
        }

        if (this.state.chartWidth !== chartWidth || this.state.chartHeight !== height) {
            this.setState({ chartWidth: chartWidth, chartHeight: height, isParentMounted: true });
        }
    }

    private renderLegend() : JSX.Element {
        const legendClass = classNames('pie-chart-legend', this.props.id);
        const color = this.createColorPallette();
        const legend = this.state.data.map((data: IPieChartData, index: number) => {
            return (
                <div key={index} className={'legend-item'}>
                    <div style={{backgroundColor: color(data.label)}}/>
                    <label style={{display: 'inline-block'}}>{data.label}</label>
                </div>
            );
        });
        return ( <div className={legendClass}>{legend}</div> );
    }

    private transformData(props: IPieChartProps): Array<any> {
        let data = Array(0);        

        if (props.displayingElements !== undefined) {
            const sortedData = props.data.sort((a, b) => b.value - a.value);
            
            for (let i = 0; i < props.displayingElements - 1; i++) { data.push(sortedData[i]); }
    
            let value = 0;
            for (let i = props.displayingElements - 1; i < props.data.length; i++) { value += sortedData[i].value; }
            data.push({ label: 'Other', value: value });

            return data;
        }

        return props.data;
    }

    private onResize(): void {
        const width = this.containerRef.offsetWidth;
        const height = this.containerRef.offsetHeight;

        let chartWidth = 0;

        if (!this.props.showLegend) {
            chartWidth = width;
        } else {  
            if (width - 10 < this.legendWidth) { chartWidth = width; } else { chartWidth = width - this.legendWidth - 10; }
        }
        if (chartWidth < 50) { return; }
        if (this.state.chartWidth !== chartWidth || this.state.chartHeight !== height) {
            this.setState({ chartWidth: chartWidth, chartHeight: height });
            this.forceUpdate();
        }
    }

    public componentWillUnmount() { ResizeSensor.detach(this.containerRef); }
}
