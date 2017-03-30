import * as React from 'react';
import * as d3 from 'd3';

import { IProgressBarProps } from './ProgressBar.props';

import './ProgressBar.scss';

export class ProgressBar extends React.Component<IProgressBarProps, any> {

    refs: {
        [key: string]: (Element),
        container: HTMLInputElement
    };

    constructor() {
        super();
    }

    componentDidMount() {
        this.draw();
    }

    componentDidUpdate() {
        this.redraw();
    }

    private draw() {
        const svg = this.createContainer();
        const bar = this.scaleBar();
        this.drawRect(svg);
        this.drawFilledArea(svg, bar(this.props.data.current));
    }

    private createContainer() {
        const container = d3.select(this.refs.container);

        return container.insert('svg', ':first-child')
                        .attr('class', 'svg-progress')
                        .attr('width', this.props.width - 50)
                        .attr('height', this.props.height)
                        .append('g')
                        .attr('class', 'g-container');
    }

    private redraw() {
        d3.select('.progress-filled').remove();
        const baseContainer = d3.select('.progress-bar-container');        
        const bar = this.scaleBar();
        this.drawFilledArea(d3.select('.g-container'), bar(this.props.data.current));
    }

    private drawRect(element: any) : void {
        element.append('rect')
            .attr('class', 'progress progress-baseline')
            .attr('height', this.props.height)
            .attr('width', this.props.width - 50);
    }

    private drawFilledArea(element: any, width: number) {
        element.append('rect')
            .attr('class', this.props.progressClass ? this.props.progressClass : 'current-progress')
            .attr('height', this.props.height)
            .attr('width', width);
    }

    private scaleBar() {
        return d3.scaleLinear().domain([0, this.props.data.total]).range([0, (this.props.width - 50)]);
    }

    public render() {
        return (
            <div className={'progress-bar-component'}>
                <div className={'progress-label'}>
                    {this.props.title}
                    {
                        this.props.info &&
                        <div className={'help-tip'}>
                            <p>{this.props.info}</p>
                        </div>
                    }
                </div>
                <div className={'progress-bar-container'} ref={'container'}>
                    <div width={40}>{this._calculatePercentage()}</div>
                </div>
            </div>
        );
    }

    private _calculatePercentage() : string {
        const percentage = Math.floor( (this.props.data.current / this.props.data.total) * 100 );
        return percentage.toString() + '%';
    }
}
