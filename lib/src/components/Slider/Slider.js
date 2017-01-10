"use strict";
var React = require('react');
var classNames = require('classnames');
var autobind_1 = require('../../utilities/autobind');
var getId_1 = require('../../utilities/getId');
var rtl_1 = require('../../utilities/rtl');
var Common_1 = require('../Common/Common');
var KeyCodes_1 = require('../../utilities/KeyCodes');
var Label_1 = require('../../components/Label/Label');
require('./Slider.scss');
var Slider = (function (_super) {
    __extends(Slider, _super);
    function Slider(props) {
        _super.call(this, props);
        this._id = getId_1.getId('slider');
        var value = props.value || props.defaultValue || props.min;
        this.state = {
            value: value,
            renderedValue: value
        };
    }
    Slider.prototype.componentWillReceiveProps = function (newProps) {
        if (newProps.value !== undefined) {
            var value = Math.max(newProps.min, Math.min(newProps.max, newProps.value));
            this.setState({
                value: value,
                renderedValue: value
            });
        }
    };
    Slider.prototype.render = function () {
        var _a = this.props, className = _a.className, disabled = _a.disabled, label = _a.label, max = _a.max, min = _a.min, showValue = _a.showValue, buttonProps = _a.buttonProps;
        var _b = this.state, value = _b.value, renderedValue = _b.renderedValue;
        var thumbOffsetPercent = (renderedValue - min) / (max - min) * 100;
        var onMouseDownProp = disabled ? {} : { onMouseDown: this._onMouseDownOrTouchStart };
        var onTouchStartProp = disabled ? {} : { onTouchStart: this._onMouseDownOrTouchStart };
        var onKeyDownProp = disabled ? {} : { onKeyDown: this._onKeyDown };
        var sliderClassName = classNames('slider', className, {
            'slider-enabled': !disabled,
            'slider-disabled': disabled
        });
        var buttonClassName = classNames('slider-slideBox', buttonProps.className, {
            'slider-showValue': showValue,
            'slider-showTransitions': (renderedValue === value)
        });
        return (React.createElement("div", {className: sliderClassName, ref: "root"}, 
            label && (React.createElement(Label_1.Label, null, label)), 
            React.createElement("div", {className: 'slider-container'}, 
                React.createElement("button", __assign({}, onMouseDownProp, onTouchStartProp, onKeyDownProp, buttonProps, {className: buttonClassName, id: this._id, disabled: disabled, type: "button", role: "slider"}), 
                    React.createElement("div", {ref: "sliderLine", className: 'slider-line'}, 
                        React.createElement("span", {ref: "thumb", className: 'slider-thumb', style: rtl_1.getRTL() ?
                            { 'right': thumbOffsetPercent + '%' } :
                            { 'left': thumbOffsetPercent + '%' }}), 
                        React.createElement("span", {className: 'slider-active', style: { 'width': thumbOffsetPercent + '%' }}), 
                        React.createElement("span", {className: 'slider-inactive', style: { 'width': (100 - thumbOffsetPercent) + '%' }}))
                ), 
                showValue && React.createElement("label", {className: 'label slider-value'}, value))));
    };
    Slider.prototype.focus = function () {
        if (this.refs.thumb) {
            this.refs.thumb.focus();
        }
    };
    Object.defineProperty(Slider.prototype, "value", {
        get: function () {
            return this.state.value;
        },
        enumerable: true,
        configurable: true
    });
    Slider.prototype._onMouseDownOrTouchStart = function (event) {
        if (event.type === 'mousedown') {
            this._events.on(window, 'mousemove', this._onMouseMoveOrTouchMove, true);
            this._events.on(window, 'mouseup', this._onMouseUpOrTouchEnd, true);
        }
        else if (event.type === 'touchstart') {
            this._events.on(window, 'touchmove', this._onMouseMoveOrTouchMove, true);
            this._events.on(window, 'touchend', this._onMouseUpOrTouchEnd, true);
        }
        this._onMouseMoveOrTouchMove(event, true);
    };
    Slider.prototype._onMouseMoveOrTouchMove = function (event, suppressEventCancelation) {
        var _a = this.props, max = _a.max, min = _a.min, step = _a.step;
        var steps = (max - min) / step;
        var sliderPositionRect = this.refs.sliderLine.getBoundingClientRect();
        var sliderLength = sliderPositionRect.width;
        var stepLength = sliderLength / steps;
        var currentSteps;
        if (event.type === 'mousedown' || event.type === 'mousemove') {
            currentSteps = rtl_1.getRTL() ?
                (sliderPositionRect.right - event.clientX) / stepLength :
                (event.clientX - sliderPositionRect.left) / stepLength;
        }
        else if (event.type === 'touchstart' || event.type === 'touchmove') {
            currentSteps = rtl_1.getRTL() ?
                (sliderPositionRect.right - event.touches[0].clientX) / stepLength :
                (event.touches[0].clientX - sliderPositionRect.left) / stepLength;
        }
        var currentValue;
        var renderedValue;
        // The value shouldn't be bigger than max or be smaller than min.
        if (currentSteps > Math.floor(steps)) {
            renderedValue = currentValue = max;
        }
        else if (currentSteps < 0) {
            renderedValue = currentValue = min;
        }
        else {
            renderedValue = min + step * currentSteps;
            currentValue = min + step * Math.round(currentSteps);
        }
        this._updateValue(currentValue, renderedValue);
        if (!suppressEventCancelation) {
            event.preventDefault();
            event.stopPropagation();
        }
    };
    Slider.prototype._updateValue = function (value, renderedValue) {
        var _this = this;
        var valueChanged = value !== this.state.value;
        this.setState({
            value: value,
            renderedValue: renderedValue
        }, function () {
            if (valueChanged && _this.props.onChange) {
                _this.props.onChange(_this.state.value);
            }
        });
    };
    Slider.prototype._onMouseUpOrTouchEnd = function () {
        // Synchronize the renderedValue to the actual value.
        this.setState({
            renderedValue: this.state.value
        });
        this._events.off();
    };
    Slider.prototype._onKeyDown = function (event) {
        var value = this.state.value;
        var _a = this.props, max = _a.max, min = _a.min, step = _a.step;
        var diff = 0;
        switch (event.which) {
            case rtl_1.getRTLSafeKeyCode(KeyCodes_1.KeyCodes.left):
            case KeyCodes_1.KeyCodes.down:
                diff = -step;
                break;
            case rtl_1.getRTLSafeKeyCode(KeyCodes_1.KeyCodes.right):
            case KeyCodes_1.KeyCodes.up:
                diff = step;
                break;
            case KeyCodes_1.KeyCodes.home:
                value = min;
                break;
            case KeyCodes_1.KeyCodes.end:
                value = max;
                break;
            default:
                return;
        }
        var newValue = Math.min(max, Math.max(min, value + diff));
        this._updateValue(newValue, newValue);
        event.preventDefault();
        event.stopPropagation();
    };
    Slider.defaultProps = {
        step: 1,
        min: 0,
        max: 10,
        showValue: true,
        disabled: false,
        buttonProps: {}
    };
    __decorate([
        autobind_1.autobind, 
        __metadata('design:type', Function), 
        __metadata('design:paramtypes', [Object]), 
        __metadata('design:returntype', void 0)
    ], Slider.prototype, "_onMouseDownOrTouchStart", null);
    __decorate([
        autobind_1.autobind, 
        __metadata('design:type', Function), 
        __metadata('design:paramtypes', [Object, Boolean]), 
        __metadata('design:returntype', void 0)
    ], Slider.prototype, "_onMouseMoveOrTouchMove", null);
    __decorate([
        autobind_1.autobind, 
        __metadata('design:type', Function), 
        __metadata('design:paramtypes', []), 
        __metadata('design:returntype', void 0)
    ], Slider.prototype, "_onMouseUpOrTouchEnd", null);
    __decorate([
        autobind_1.autobind, 
        __metadata('design:type', Function), 
        __metadata('design:paramtypes', [KeyboardEvent]), 
        __metadata('design:returntype', void 0)
    ], Slider.prototype, "_onKeyDown", null);
    return Slider;
}(Common_1.CommonComponent));
exports.Slider = Slider;
