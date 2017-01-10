"use strict";
var React = require('react');
var classNames = require('classnames');
var getId_1 = require('../../utilities/getId');
var ChoiceGroup = (function (_super) {
    __extends(ChoiceGroup, _super);
    function ChoiceGroup(props) {
        _super.call(this, props);
        this.state = {
            keyChecked: this._getKeyChecked(props.options),
            keyFocused: undefined
        };
        this._id = getId_1.getId('ChoiceGroup');
        this._descriptionId = getId_1.getId('ChoiceGroupDescription');
    }
    ChoiceGroup.prototype.componentWillReceiveProps = function (newProps) {
        var newKeyChecked = this._getKeyChecked(newProps.options);
        var oldKeyChecked = this._getKeyChecked(this.props.options);
        if (newKeyChecked !== oldKeyChecked) {
            this.setState({
                keyChecked: newKeyChecked
            });
        }
    };
    ChoiceGroup.prototype.render = function () {
        var _this = this;
        var _a = this.props, label = _a.label, options = _a.options, className = _a.className, required = _a.required;
        var _b = this.state, keyChecked = _b.keyChecked, keyFocused = _b.keyFocused;
        var titleClassName = classNames('label', className, {
            'is-required': required
        });
        return (React.createElement("div", {role: "application", className: className}, 
            React.createElement("div", {className: 'choiceFieldGroup', role: "radiogroup"}, 
                React.createElement("div", {className: 'choiceFieldGroup-title'}, this.props.label ?
                    React.createElement("label", {className: titleClassName, id: this._id + '-label'}, label)
                    : null), 
                options.map(function (option) { return (React.createElement("div", {key: option.key, className: classNames('choiceField', { 'is-inFocus': option.key === keyFocused })}, 
                    React.createElement("input", {ref: function (c) { return _this._inputElement = c; }, id: _this._id + "-" + option.key, className: 'choiceField-input', type: "radio", name: _this._id, disabled: option.isDisabled || option.disabled || _this.props.disabled, checked: option.key === keyChecked, onChange: _this._onChange.bind(_this, option), onFocus: _this._onFocus.bind(_this, option), onBlur: _this._onBlur.bind(_this, option)}), 
                    _this._renderField(option))); }))
        ));
    };
    ChoiceGroup.prototype.focus = function () {
        if (this._inputElement) {
            this._inputElement.focus();
        }
    };
    ChoiceGroup.prototype._onFocus = function (option, ev) {
        this.setState({
            keyFocused: option.key,
            keyChecked: this.state.keyChecked
        });
    };
    ChoiceGroup.prototype._onBlur = function (option, ev) {
        this.setState({
            keyFocused: undefined,
            keyChecked: this.state.keyChecked
        });
    };
    ChoiceGroup.prototype._renderField = function (option) {
        var keyChecked = this.state.keyChecked;
        var isDisabled = option.isDisabled || option.disabled || this.props.disabled;
        return (React.createElement("label", {htmlFor: this._id + '-' + option.key, className: classNames('choiceField-field', { 'is-checked': option.key === keyChecked, 'is-disabled': isDisabled })}, 
            React.createElement("span", {id: this._descriptionId + "-" + option.key, className: 'label'}, option.text)
        ));
    };
    ChoiceGroup.prototype._onChange = function (option, ev) {
        var onChanged = this.props.onChanged;
        this.setState({
            keyChecked: option.key
        });
        if (onChanged) {
            onChanged(option);
        }
    };
    ChoiceGroup.prototype._getKeyChecked = function (options) {
        var optionsChecked = options.filter(function (option) {
            return option.isChecked || option.checked;
        });
        if (optionsChecked.length === 0) {
            return undefined;
        }
        else {
            return optionsChecked[0].key;
        }
    };
    ChoiceGroup.defaultProps = {
        options: []
    };
    return ChoiceGroup;
}(React.Component));
exports.ChoiceGroup = ChoiceGroup;
