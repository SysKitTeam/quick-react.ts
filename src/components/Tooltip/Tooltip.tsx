import * as React from 'react';
import * as classNames from 'classnames';
import { ITooltipProps } from './Tooltip.props';
import { Callout } from '../Callout';
import { DirectionalHint } from '../../utilities/DirectionalHint';
import { CommonComponent } from '../Common/Common';
import { autobind } from '../../utilities/autobind';
import './Tooltip.scss';

export class Tooltip extends CommonComponent<ITooltipProps, any> {
    private _tooltipHost: HTMLElement;

    public static defaultProps = {
        directionalHint: DirectionalHint.bottomCenter
    };

    constructor(props: ITooltipProps) {
        super(props);

        this.state = {
            isTooltipVisible: false
        };
    }

    public render() {
        let { className, targetElement, directionalHint, content, children } = this.props;

        const tooltipClassName = classNames(
            'tooltip-callout',
            [this.props.className]
        );

        return (
            <div
                ref={this._resolveRef('_tooltipHost')}
                { ...{ onFocusCapture: this._onTooltipMouseEnter } }
                { ...{ onBlurCapture: this._onTooltipMouseLeave } }
                onMouseEnter={this._onTooltipMouseEnter}
                onMouseLeave={this._onTooltipMouseLeave}
                className="tooltip-container">

                {children}

                {this.state.isTooltipVisible &&
                    <Callout
                        target={this._getTargetElement()}
                        directionalHint={directionalHint}
                        className={tooltipClassName}
                        isBeakVisible={true}>
                        <div className="tooltip-content" role="tooltip">
                            <span>{content}</span>
                        </div>
                    </Callout>
                }
            </div>
        );
    }

    private _getTargetElement(): HTMLElement {
        return this._tooltipHost;
    }

    // Show Tooltip
    @autobind
    private _onTooltipMouseEnter(ev: any) {
        this._toggleTooltip(true);
    }

    // Hide Tooltip
    @autobind
    private _onTooltipMouseLeave(ev: any) {
        this._toggleTooltip(false);
    }

    // Hide Tooltip
    @autobind
    private _onTooltipCallOutDismiss() {
        this._toggleTooltip(false);
    }

    private _toggleTooltip(isTooltipVisible: boolean) {
        this.setState(
            { isTooltipVisible },
            () => this.props.onTooltipToggle &&
                this.props.onTooltipToggle(this.state.isTooltipVisible));
    }
}
