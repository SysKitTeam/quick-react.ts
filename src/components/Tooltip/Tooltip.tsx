import * as React from 'react';
import * as classNames from 'classnames';
import * as d3 from 'd3';
import { ITooltipProps } from './Tooltip.props';

import './Tooltip.scss';

const padding = { top: 5, right: 5, bottom: 5, left: 5 };
const TEXT_Y_TRANSLATE = 3.3;    // constant that best approximates text position inside rectangle
const TIP_ARROW_HEIGHT = 10;

export class Tooltip extends React.PureComponent<ITooltipProps, any> {
    constructor(props: ITooltipProps) {
        super(props);

        this.state = {
            arrowPoints: '0,0 0,0 0,0',
            width: 0,
            height: 0,
            textYPosition: 0,
            translateX: 0,
            translateY: 0
        };
    }

    public componentWillReceiveProps(nextProps: ITooltipProps, nextState: any) {
        const x = nextProps.x - this.state.width / 2;
        const y = nextProps.y - this.state.height - TIP_ARROW_HEIGHT;
        this.setState({ translateX: x, translateY: y });
    }

    public render() {
        const tipClass = classNames('tip', this.props.id);
        const translate = 'translate(' + this.state.translateX + ',' + this.state.translateY + ')';
        const visibility = this.props.visible ? 'block' : 'none';
        
        return (
            <g className={classNames(tipClass, 'tip-container')} style={{ display: visibility}} transform={translate}>
                <polygon className={classNames(tipClass, 'tip-pol')} 
                    points={this.state.arrowPoints}/>
                <rect className={classNames(tipClass, 'tip-rect')} 
                    height={this.state.height} 
                    width={this.state.width}/>
                <text className={classNames(tipClass, 'tip-text')} 
                        dx={padding.right} 
                        dy={this.state.textYPosition} 
                        ref={(element: SVGTextElement) => this.init(element)}
                >{this.props.text}</text>
            </g>
        );
    }

    private init(element: SVGTextElement) {
        if (element === null) { return; }

        const dimensions = element.getBBox();
        const textWidth = dimensions.width + padding.left + padding.right;
        const height = dimensions.height + padding.top + padding.bottom;
        const yPosition = height - TEXT_Y_TRANSLATE - padding.bottom;

        const center = textWidth / 2;
        const xLeft = center - 10;
        const xRight = center + 10;
        const arrowHeight = height + TIP_ARROW_HEIGHT;

        const points = xLeft + ',' + (height - 2) + ' ' + center + ',' + arrowHeight + ' ' + xRight + ',' + (height - 2);

        const x = this.props.x - textWidth / 2;
        const y = this.props.y - height - TIP_ARROW_HEIGHT;

        if (textWidth !== this.state.width || height !== this.state.height || x !== this.state.translateX || y !== this.state.translateY) {
            this.setState({ width: textWidth, height: height, textYPosition: yPosition, arrowPoints: points, translateX: x, translateY: y });
        }
    }
}
