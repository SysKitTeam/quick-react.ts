import * as React from 'react';
import * as classNames from 'classnames';
import { ISliderProps, ISlider } from './Slider.Props';
import { autobind } from '../../utilities/autobind';
import { getId } from '../../utilities/getId';
import { getRTL as isRTL, getRTLSafeKeyCode } from '../../utilities/rtl';
import { CommonComponent } from '../Common/Common';
import { KeyCodes } from '../../utilities/KeyCodes';
import { Label } from '../../components/Label/Label';
import './Slider.scss';

export interface ISliderState {
    value?: number;
    renderedValue?: number;
}

export class Slider extends CommonComponent<ISliderProps, ISliderState> implements ISlider {
    public static defaultProps: {} = {
        step: 1,
        min: 0,
        max: 10,
        showValue: true,
        disabled: false,
        buttonProps: {}
    };

    public refs: {
        [key: string]: React.ReactInstance,
        root: HTMLElement,
        sliderLine: HTMLElement,
        thumb: HTMLElement
    };

    private _id: string;

    constructor(props?: ISliderProps) {
        super(props);

        this._id = getId('slider');

        let value = props.value || props.defaultValue || props.min;

        this.state = {
            value: value,
            renderedValue: value
        };
    }

    public componentWillReceiveProps(newProps: ISliderProps): void {
        if (newProps.value !== undefined) {
            let value = Math.max(newProps.min, Math.min(newProps.max, newProps.value));

            this.setState({
                value: value,
                renderedValue: value
            });
        }
    }

    public render(): React.ReactElement<{}> {
        const { className, disabled, label, max, min, showValue, buttonProps } = this.props;
        const { value, renderedValue } = this.state;
        const thumbOffsetPercent: number = (renderedValue - min) / (max - min) * 100;

        const onMouseDownProp: {} = disabled ? {} : { onMouseDown: this._onMouseDownOrTouchStart };
        const onTouchStartProp: {} = disabled ? {} : { onTouchStart: this._onMouseDownOrTouchStart };
        const onKeyDownProp: {} = disabled ? {} : { onKeyDown: this._onKeyDown };

        const sliderClassName = classNames(
            'slider',
            className,
            {
                'slider-enabled': !disabled,
                'slider-disabled': disabled
            });

        const buttonClassName = classNames(
            'slider-slideBox',
            buttonProps.className,
            {
                'slider-showValue': showValue,
                'slider-showTransitions': (renderedValue === value)
            });

        return (
            <div className={sliderClassName}
                ref="root">
                {label && (
                    <Label>{label}</Label>
                )}
                <div className={'slider-container'}>
                    <button
                        { ...onMouseDownProp }
                        { ...onTouchStartProp }
                        { ...onKeyDownProp }
                        { ...buttonProps }
                        className={buttonClassName}
                        id={this._id}
                        disabled={disabled}
                        type="button"
                        role="slider">
                        <div ref="sliderLine"
                            className={'slider-line'}>
                            <span ref="thumb"
                                className={'slider-thumb'}
                                style={isRTL() ?
                                    { 'right': thumbOffsetPercent + '%' } :
                                    { 'left': thumbOffsetPercent + '%' }}>
                            </span>
                            <span className={'slider-active'} style={{ 'width': thumbOffsetPercent + '%' }}></span>
                            <span className={'slider-inactive'} style={{ 'width': (100 - thumbOffsetPercent) + '%' }}></span>
                        </div>
                    </button>
                    {showValue && <label className={'label slider-value'}>{value}</label>}
                </div>
            </div>
        ) as React.ReactElement<{}>;
    }

    public focus(): void {
        if (this.refs.thumb) {
            this.refs.thumb.focus();
        }
    }

    public get value(): number {
        return this.state.value;
    }

    @autobind
    private _onMouseDownOrTouchStart(event: MouseEvent | TouchEvent): void {
        if (event.type === 'mousedown') {
            this._events.on(window, 'mousemove', this._onMouseMoveOrTouchMove, true);
            this._events.on(window, 'mouseup', this._onMouseUpOrTouchEnd, true);
        } else if (event.type === 'touchstart') {
            this._events.on(window, 'touchmove', this._onMouseMoveOrTouchMove, true);
            this._events.on(window, 'touchend', this._onMouseUpOrTouchEnd, true);
        }

        this._onMouseMoveOrTouchMove(event, true);
    }

    @autobind
    private _onMouseMoveOrTouchMove(event: MouseEvent | TouchEvent, suppressEventCancelation?: boolean): void {
        const { max, min, step } = this.props;
        const steps: number = (max - min) / step;
        const sliderPositionRect: ClientRect = this.refs.sliderLine.getBoundingClientRect();
        const sliderLength: number = sliderPositionRect.width;
        const stepLength: number = sliderLength / steps;
        let currentSteps: number;

        if (event.type === 'mousedown' || event.type === 'mousemove') {
            currentSteps = isRTL() ?
                (sliderPositionRect.right - (event as MouseEvent).clientX) / stepLength :
                ((event as MouseEvent).clientX - sliderPositionRect.left) / stepLength;
        } else if (event.type === 'touchstart' || event.type === 'touchmove') {
            currentSteps = isRTL() ?
                (sliderPositionRect.right - (event as TouchEvent).touches[0].clientX) / stepLength :
                ((event as TouchEvent).touches[0].clientX - sliderPositionRect.left) / stepLength;
        }

        let currentValue: number;
        let renderedValue: number;

        // The value shouldn't be bigger than max or be smaller than min.
        if (currentSteps > Math.floor(steps)) {
            renderedValue = currentValue = max;
        } else if (currentSteps < 0) {
            renderedValue = currentValue = min;
        } else {
            renderedValue = min + step * currentSteps;
            currentValue = min + step * Math.round(currentSteps);
        }

        this._updateValue(currentValue, renderedValue);

        if (!suppressEventCancelation) {
            event.preventDefault();
            event.stopPropagation();
        }
    }

    private _updateValue(value, renderedValue) {
        let valueChanged = value !== this.state.value;

        this.setState({
            value,
            renderedValue
        }, () => {
            if (valueChanged && this.props.onChange) {
                this.props.onChange(this.state.value);
            }
        });
    }

    @autobind
    private _onMouseUpOrTouchEnd(): void {

        // Synchronize the renderedValue to the actual value.
        this.setState({
            renderedValue: this.state.value
        });

        this._events.off();
    }

    @autobind
    private _onKeyDown(event: KeyboardEvent): void {
        let value: number = this.state.value;
        const { max, min, step } = this.props;

        let diff: number = 0;

        switch (event.which) {
            case getRTLSafeKeyCode(KeyCodes.left):
            case KeyCodes.down:
                diff = -step;
                break;
            case getRTLSafeKeyCode(KeyCodes.right):
            case KeyCodes.up:
                diff = step;
                break;

            case KeyCodes.home:
                value = min;
                break;

            case KeyCodes.end:
                value = max;
                break;

            default:
                return;
        }

        const newValue: number = Math.min(max, Math.max(min, value + diff));

        this._updateValue(newValue, newValue);

        event.preventDefault();
        event.stopPropagation();
    }
}