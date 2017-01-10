/* tslint:disable:no-unused-variable */
import * as React from 'react';
/* tslint:enable:no-unused-variable */
import { ICalloutProps } from './Callout.Props';
import { DirectionalHint } from '../../utilities/DirectionalHint';
import { autobind } from '../../utilities/autobind';
import * as classNames from 'classnames';
import { elementContains } from '../../utilities/elementContains';
import { getDocument, getWindow } from '../../utilities/getDocument';
import { getRelativePositions, IPositionInfo, IPositionProps } from '../../utilities/positioning';
import { IRectangle } from '../../utilities/IRectangle';
import { focusFirstChild } from '../../utilities/focus';
import { assign } from '../../utilities/object';
import { Popup } from '../Popup/Popup';
import { CommonComponent } from '../Common/Common';
//import './Callout.scss';

const BEAK_ORIGIN_POSITION = { top: 0, left: 0 };
const OFF_SCREEN_POSITION = { top: -9999, left: 0 };
const BORDER_WIDTH: number = 1;
const SPACE_FROM_EDGE: number = 8;
export interface ICalloutState {
    positions?: any;
    slideDirectionalClassName?: string;
    calloutElementRect?: ClientRect;
}

export class CalloutContent extends CommonComponent<ICalloutProps, ICalloutState> {

    public static defaultProps = {
        isBeakVisible: true,
        beakWidth: 16,
        gapSpace: 16,
        directionalHint: DirectionalHint.bottomAutoEdge
    };

    private _didSetInitialFocus: boolean;
    private _hostElement: HTMLDivElement;
    private _calloutElement: HTMLDivElement;
    private _targetWindow: Window;
    private _bounds: IRectangle;
    private _maxHeight: number;
    private _positionAttempts: number;
    private _target: HTMLElement | MouseEvent;

    constructor(props: ICalloutProps) {
        super(props, { 'beakStyle': 'beakWidth' });

        this._didSetInitialFocus = false;
        this.state = {
            positions: null,
            slideDirectionalClassName: null,
            calloutElementRect: null
        };
        this._positionAttempts = 0;
    }

    public componentDidUpdate() {
        this._setInitialFocus();
        this._updatePosition();
    }

    public componentWillMount() {
        let target = this.props.targetElement ? this.props.targetElement : this.props.target;
        this._setTargetWindowAndElement(target);
    }

    public componentWillUpdate(newProps: ICalloutProps) {
        if (newProps.targetElement !== this.props.targetElement || newProps.target !== this.props.target) {
            let newTarget = newProps.targetElement ? newProps.targetElement : newProps.target;
            this._setTargetWindowAndElement(newTarget);
        }
    }
    
    public componentDidMount() {
        this._onComponentDidMount();
    }

    public render() {
        if (!this._targetWindow) {
            return null;
        }
        let {
            className,
            target,
            targetElement,
            isBeakVisible,
            children,
            beakWidth } = this.props;
        let { positions, slideDirectionalClassName } = this.state;
        let beakStyleWidth = beakWidth;

        let beakReactStyle: React.CSSProperties = {
            top: positions && positions.beak ? positions.beak.top : BEAK_ORIGIN_POSITION.top,
            left: positions && positions.beak ? positions.beak.left : BEAK_ORIGIN_POSITION.left,
            height: beakStyleWidth,
            width: beakStyleWidth
        };

        let contentMaxHeight: number = this._getMaxHeight();
        let beakVisible: boolean = isBeakVisible && (!!targetElement || !!target);
        let content = (
            <div ref={ this._resolveRef('_hostElement') } className={ 'callout-container' }>
                <div
                    className={
                        classNames(
                            'callout',
                            className,
                            slideDirectionalClassName ? `${slideDirectionalClassName}` : ''
                        ) }
                    style={ positions ? positions.callout : OFF_SCREEN_POSITION }
                    ref={ this._resolveRef('_calloutElement') }
                    >

                    { beakVisible ? (
                        <div
                            className={ 'callout-beak' }
                            style={ beakReactStyle }
                            />) : (null) }

                    { beakVisible ?
                        (<div className="callout-beak-curtain" />) :
                        (null) }

                    <Popup
                        className="callout-main"
                        onDismiss={ (ev: any) => this.dismiss() }
                        shouldRestoreFocus={ true }
                        style={ { maxHeight: contentMaxHeight } }>
                        { children }
                    </Popup>
                </div>
            </div>
        );
        return content;
    }

    public dismiss() {
        let { onDismiss } = this.props;

        if (onDismiss) {
            onDismiss();
        }
    }

    protected _dismissOnLostFocus(ev: Event) {
        let target = ev.target as HTMLElement;

        if (ev.target !== this._targetWindow &&
            this._hostElement &&
            !elementContains(this._hostElement, target) &&
            ((this._target as MouseEvent).stopPropagation ||
                (!this._target || !elementContains(this._target as HTMLElement, target)))) {
            this.dismiss();
        }
    }

    @autobind
    protected _setInitialFocus() {
        if (this.props.setInitialFocus && !this._didSetInitialFocus && this.state.positions) {
            this._didSetInitialFocus = true;
            focusFirstChild(this._calloutElement);
        }
    }

    @autobind
    protected _onComponentDidMount() {
        this._events.on(this._targetWindow, 'scroll', this._dismissOnLostFocus, true);
        this._events.on(this._targetWindow, 'resize', this.dismiss, true);
        this._events.on(this._targetWindow, 'focus', this._dismissOnLostFocus, true);
        this._events.on(this._targetWindow, 'click', this._dismissOnLostFocus, true);

        if (this.props.onLayerMounted) {
            this.props.onLayerMounted();
        }

        this._updatePosition();
    }

    private _updatePosition() {
        let { positions } = this.state;
        let hostElement: HTMLElement = this._hostElement;
        let calloutElement: HTMLElement = this._calloutElement;

        if (hostElement && calloutElement) {
            let currentProps: IPositionProps;
            currentProps = assign(currentProps, this.props);
            currentProps.bounds = this._getBounds();
            if (this.props.targetElement) {
                currentProps.targetElement = this._target as HTMLElement;
            } else {
                currentProps.target = this._target;
            }
            let positionInfo: IPositionInfo = getRelativePositions(currentProps, hostElement, calloutElement);

            if ((!positions && positionInfo) ||
                (positions && positionInfo &&
                    (positions.callout.top.toFixed(2) !== positionInfo.calloutPosition.top.toFixed(2) ||
                        positions.callout.left.toFixed(2) !== positionInfo.calloutPosition.left.toFixed(2))
                    && this._positionAttempts < 5)) {
                this._positionAttempts++;
                this.setState({
                    positions: {
                        callout: positionInfo.calloutPosition,
                        beak: positionInfo.beakPosition,
                    },
                    slideDirectionalClassName: positionInfo.directionalClassName
                });
            } else {
                this._positionAttempts = 0;
            }
        }
    }

    private _getBounds(): IRectangle {
        if (!this._bounds) {
            let currentBounds = this.props.bounds;

            if (!currentBounds) {
                currentBounds = {
                    top: 0 + SPACE_FROM_EDGE,
                    left: 0 + SPACE_FROM_EDGE,
                    right: this._targetWindow.innerWidth - SPACE_FROM_EDGE,
                    bottom: this._targetWindow.innerHeight - SPACE_FROM_EDGE,
                    width: this._targetWindow.innerWidth - SPACE_FROM_EDGE * 2,
                    height: this._targetWindow.innerHeight - SPACE_FROM_EDGE * 2
                };
            }
            this._bounds = currentBounds;
        }
        return this._bounds;
    }

    private _getMaxHeight(): number {
        if (!this._maxHeight) {
            this._maxHeight = this._getBounds().height - BORDER_WIDTH * 2;
        }
        return this._maxHeight;
    }

    private _setTargetWindowAndElement(target: HTMLElement | string | MouseEvent): void {
        if (target) {
            if (typeof target === 'string') {
                let currentDoc: Document = getDocument();
                this._target = currentDoc ? currentDoc.querySelector(target) as HTMLElement : null;
                this._targetWindow = getWindow();
            } else if ((target as MouseEvent).stopPropagation) {
                this._target = target;
                this._targetWindow = getWindow((target as MouseEvent).toElement as HTMLElement);
            } else {
                let targetElement: HTMLElement = target as HTMLElement;
                this._target = target;
                this._targetWindow = getWindow(targetElement);
            }
        } else {
            this._targetWindow = getWindow();
        }
    }
}
