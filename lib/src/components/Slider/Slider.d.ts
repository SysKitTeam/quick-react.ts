import * as React from 'react';
import { ISliderProps, ISlider } from './Slider.Props';
import { CommonComponent } from '../Common/Common';
import './Slider.scss';
export interface ISliderState {
    value?: number;
    renderedValue?: number;
}
export declare class Slider extends CommonComponent<ISliderProps, ISliderState> implements ISlider {
    static defaultProps: {};
    refs: {
        [key: string]: React.ReactInstance;
        root: HTMLElement;
        sliderLine: HTMLElement;
        thumb: HTMLElement;
    };
    private _id;
    constructor(props?: ISliderProps);
    componentWillReceiveProps(newProps: ISliderProps): void;
    render(): React.ReactElement<{}>;
    focus(): void;
    readonly value: number;
    private _onMouseDownOrTouchStart(event);
    private _onMouseMoveOrTouchMove(event, suppressEventCancelation?);
    private _updateValue(value, renderedValue);
    private _onMouseUpOrTouchEnd();
    private _onKeyDown(event);
}
