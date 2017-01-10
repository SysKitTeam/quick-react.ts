"use strict";
/* tslint:disable:no-unused-variable */
var React = require('react');
var DirectionalHint_1 = require('../../utilities/DirectionalHint');
var autobind_1 = require('../../utilities/autobind');
var classNames = require('classnames');
var elementContains_1 = require('../../utilities/elementContains');
var getDocument_1 = require('../../utilities/getDocument');
var positioning_1 = require('../../utilities/positioning');
var focus_1 = require('../../utilities/focus');
var object_1 = require('../../utilities/object');
var Popup_1 = require('../Popup/Popup');
var Common_1 = require('../Common/Common');
require('./Callout.scss');
var BEAK_ORIGIN_POSITION = { top: 0, left: 0 };
var OFF_SCREEN_POSITION = { top: -9999, left: 0 };
var BORDER_WIDTH = 1;
var SPACE_FROM_EDGE = 8;
var CalloutContent = (function (_super) {
    __extends(CalloutContent, _super);
    function CalloutContent(props) {
        _super.call(this, props, { 'beakStyle': 'beakWidth' });
        this._didSetInitialFocus = false;
        this.state = {
            positions: null,
            slideDirectionalClassName: null,
            calloutElementRect: null
        };
        this._positionAttempts = 0;
    }
    CalloutContent.prototype.componentDidUpdate = function () {
        this._setInitialFocus();
        this._updatePosition();
    };
    CalloutContent.prototype.componentWillMount = function () {
        var target = this.props.targetElement ? this.props.targetElement : this.props.target;
        this._setTargetWindowAndElement(target);
    };
    CalloutContent.prototype.componentWillUpdate = function (newProps) {
        if (newProps.targetElement !== this.props.targetElement || newProps.target !== this.props.target) {
            var newTarget = newProps.targetElement ? newProps.targetElement : newProps.target;
            this._setTargetWindowAndElement(newTarget);
        }
    };
    CalloutContent.prototype.componentDidMount = function () {
        this._onComponentDidMount();
    };
    CalloutContent.prototype.render = function () {
        var _this = this;
        if (!this._targetWindow) {
            return null;
        }
        var _a = this.props, className = _a.className, target = _a.target, targetElement = _a.targetElement, isBeakVisible = _a.isBeakVisible, children = _a.children, beakWidth = _a.beakWidth;
        var _b = this.state, positions = _b.positions, slideDirectionalClassName = _b.slideDirectionalClassName;
        var beakStyleWidth = beakWidth;
        var beakReactStyle = {
            top: positions && positions.beak ? positions.beak.top : BEAK_ORIGIN_POSITION.top,
            left: positions && positions.beak ? positions.beak.left : BEAK_ORIGIN_POSITION.left,
            height: beakStyleWidth,
            width: beakStyleWidth
        };
        var contentMaxHeight = this._getMaxHeight();
        var beakVisible = isBeakVisible && (!!targetElement || !!target);
        var content = (React.createElement("div", {ref: this._resolveRef('_hostElement'), className: 'callout-container'}, 
            React.createElement("div", {className: classNames('callout', className, slideDirectionalClassName ? "" + slideDirectionalClassName : ''), style: positions ? positions.callout : OFF_SCREEN_POSITION, ref: this._resolveRef('_calloutElement')}, 
                beakVisible ? (React.createElement("div", {className: 'callout-beak', style: beakReactStyle})) : (null), 
                beakVisible ?
                    (React.createElement("div", {className: "callout-beak-curtain"})) :
                    (null), 
                React.createElement(Popup_1.Popup, {className: "callout-main", onDismiss: function (ev) { return _this.dismiss(); }, shouldRestoreFocus: true, style: { maxHeight: contentMaxHeight }}, children))
        ));
        return content;
    };
    CalloutContent.prototype.dismiss = function () {
        var onDismiss = this.props.onDismiss;
        if (onDismiss) {
            onDismiss();
        }
    };
    CalloutContent.prototype._dismissOnLostFocus = function (ev) {
        var target = ev.target;
        if (ev.target !== this._targetWindow &&
            this._hostElement &&
            !elementContains_1.elementContains(this._hostElement, target) &&
            (this._target.stopPropagation ||
                (!this._target || !elementContains_1.elementContains(this._target, target)))) {
            this.dismiss();
        }
    };
    CalloutContent.prototype._setInitialFocus = function () {
        if (this.props.setInitialFocus && !this._didSetInitialFocus && this.state.positions) {
            this._didSetInitialFocus = true;
            focus_1.focusFirstChild(this._calloutElement);
        }
    };
    CalloutContent.prototype._onComponentDidMount = function () {
        this._events.on(this._targetWindow, 'scroll', this._dismissOnLostFocus, true);
        this._events.on(this._targetWindow, 'resize', this.dismiss, true);
        this._events.on(this._targetWindow, 'focus', this._dismissOnLostFocus, true);
        this._events.on(this._targetWindow, 'click', this._dismissOnLostFocus, true);
        if (this.props.onLayerMounted) {
            this.props.onLayerMounted();
        }
        this._updatePosition();
    };
    CalloutContent.prototype._updatePosition = function () {
        var positions = this.state.positions;
        var hostElement = this._hostElement;
        var calloutElement = this._calloutElement;
        if (hostElement && calloutElement) {
            var currentProps = void 0;
            currentProps = object_1.assign(currentProps, this.props);
            currentProps.bounds = this._getBounds();
            if (this.props.targetElement) {
                currentProps.targetElement = this._target;
            }
            else {
                currentProps.target = this._target;
            }
            var positionInfo = positioning_1.getRelativePositions(currentProps, hostElement, calloutElement);
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
            }
            else {
                this._positionAttempts = 0;
            }
        }
    };
    CalloutContent.prototype._getBounds = function () {
        if (!this._bounds) {
            var currentBounds = this.props.bounds;
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
    };
    CalloutContent.prototype._getMaxHeight = function () {
        if (!this._maxHeight) {
            this._maxHeight = this._getBounds().height - BORDER_WIDTH * 2;
        }
        return this._maxHeight;
    };
    CalloutContent.prototype._setTargetWindowAndElement = function (target) {
        if (target) {
            if (typeof target === 'string') {
                var currentDoc = getDocument_1.getDocument();
                this._target = currentDoc ? currentDoc.querySelector(target) : null;
                this._targetWindow = getDocument_1.getWindow();
            }
            else if (target.stopPropagation) {
                this._target = target;
                this._targetWindow = getDocument_1.getWindow(target.toElement);
            }
            else {
                var targetElement = target;
                this._target = target;
                this._targetWindow = getDocument_1.getWindow(targetElement);
            }
        }
        else {
            this._targetWindow = getDocument_1.getWindow();
        }
    };
    CalloutContent.defaultProps = {
        isBeakVisible: true,
        beakWidth: 16,
        gapSpace: 16,
        directionalHint: DirectionalHint_1.DirectionalHint.bottomAutoEdge
    };
    __decorate([
        autobind_1.autobind, 
        __metadata('design:type', Function), 
        __metadata('design:paramtypes', []), 
        __metadata('design:returntype', void 0)
    ], CalloutContent.prototype, "_setInitialFocus", null);
    __decorate([
        autobind_1.autobind, 
        __metadata('design:type', Function), 
        __metadata('design:paramtypes', []), 
        __metadata('design:returntype', void 0)
    ], CalloutContent.prototype, "_onComponentDidMount", null);
    return CalloutContent;
}(Common_1.CommonComponent));
exports.CalloutContent = CalloutContent;
