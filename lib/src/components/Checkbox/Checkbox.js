"use strict";
var React = require('react');
var classNames = require('classnames');
var autobind_1 = require('../../utilities/autobind');
var getId_1 = require('../../utilities/getId');
var Common_1 = require('../Common/Common');
require('./Checkbox.scss');
var Checkbox = (function (_super) {
    __extends(Checkbox, _super);
    function Checkbox(props) {
        _super.call(this, props);
        this.id = getId_1.getId('checkbox-');
        this.state = {
            isFocused: false,
            isChecked: props.defaultChecked || false
        };
    }
    Checkbox.prototype.render = function () {
        var _a = this.props, checked = _a.checked, defaultChecked = _a.defaultChecked, disabled = _a.disabled, inputProps = _a.inputProps, label = _a.label, id = _a.id;
        var isFocused = this.state.isFocused;
        var isChecked = checked === undefined ? this.state.isChecked : checked;
        var className = classNames({
            'checkbox': true
        }, [this.props.className]);
        var labelClassName = classNames({
            'checkbox-label': true,
            'is-checked': this.state.isChecked,
            'is-disabled': disabled
        });
        return (React.createElement("div", {className: className}, 
            React.createElement("input", __assign({}, inputProps, (checked !== undefined && { checked: checked }), (defaultChecked !== undefined && { defaultChecked: defaultChecked }), {disabled: disabled, ref: this._resolveRef('_checkBox'), className: 'checkbox-input', id: this.id, name: this.id, type: "checkbox", onChange: this._onChange, onFocus: this._onFocus, onBlur: this._onBlur})), 
            React.createElement("label", {htmlFor: this.id, className: labelClassName}, label && React.createElement("span", {className: 'label'}, label))));
    };
    ;
    Object.defineProperty(Checkbox.prototype, "checked", {
        get: function () {
            return this._checkBox ? this._checkBox.checked : false;
        },
        enumerable: true,
        configurable: true
    });
    Checkbox.prototype.focus = function () {
        if (this._checkBox) {
            this._checkBox.focus();
        }
    };
    Checkbox.prototype._onFocus = function (ev) {
        var inputProps = this.props.inputProps;
        if (inputProps && inputProps.onFocus) {
            inputProps.onFocus(ev);
        }
        this.setState({ isFocused: true });
    };
    Checkbox.prototype._onBlur = function (ev) {
        var inputProps = this.props.inputProps;
        if (inputProps && inputProps.onBlur) {
            inputProps.onBlur(ev);
        }
        this.setState({ isFocused: false });
    };
    Checkbox.prototype._onChange = function (ev) {
        var onChange = this.props.onChange;
        var isChecked = ev.target.checked;
        if (onChange) {
            onChange(ev, isChecked);
        }
        if (this.props.checked === undefined) {
            this.setState({ isChecked: isChecked });
        }
    };
    Checkbox.defaultProps = {};
    __decorate([
        autobind_1.autobind, 
        __metadata('design:type', Function), 
        __metadata('design:paramtypes', [Object]), 
        __metadata('design:returntype', void 0)
    ], Checkbox.prototype, "_onFocus", null);
    __decorate([
        autobind_1.autobind, 
        __metadata('design:type', Function), 
        __metadata('design:paramtypes', [Object]), 
        __metadata('design:returntype', void 0)
    ], Checkbox.prototype, "_onBlur", null);
    __decorate([
        autobind_1.autobind, 
        __metadata('design:type', Function), 
        __metadata('design:paramtypes', [Object]), 
        __metadata('design:returntype', void 0)
    ], Checkbox.prototype, "_onChange", null);
    return Checkbox;
}(Common_1.CommonComponent));
exports.Checkbox = Checkbox;
;
