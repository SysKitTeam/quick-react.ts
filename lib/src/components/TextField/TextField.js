"use strict";
var React = require('react');
var classNames = require('classnames');
var Async_1 = require('../../utilities/Async');
var getId_1 = require('../../utilities/getId');
var Label_1 = require('../../components/Label/Label');
var attributes_1 = require('../../utilities/attributes');
var TextField = (function (_super) {
    __extends(TextField, _super);
    function TextField(props) {
        _super.call(this, props);
        this._id = getId_1.getId('textField');
        this._descriptionId = getId_1.getId('textFieldDescription');
        this._async = new Async_1.Async(this);
        this.state = {
            value: props.value || props.defaultValue || '',
            isFocused: false,
            errorMessage: ''
        };
        this._onInputChange = this._onInputChange.bind(this);
        this._onFocus = this._onFocus.bind(this);
        this._onBlur = this._onBlur.bind(this);
        this._delayedValidate = this._async.debounce(this._validate, this.props.deferredValidationTime);
        this._lastValidation = 0;
        this._willMountTriggerValidation = false;
    }
    Object.defineProperty(TextField.prototype, "value", {
        /**
        * Gets the current value of the text field.
        */
        get: function () {
            return this.state.value;
        },
        enumerable: true,
        configurable: true
    });
    TextField.prototype.componentWillMount = function () {
        this._willMountTriggerValidation = true;
        this._validate(this.state.value);
    };
    TextField.prototype.componentDidMount = function () {
        this._isMounted = true;
    };
    TextField.prototype.componentWillReceiveProps = function (newProps) {
        var onBeforeChange = this.props.onBeforeChange;
        if (newProps.value !== undefined && newProps.value !== this.state.value) {
            if (onBeforeChange) {
                onBeforeChange(newProps.value);
            }
            this.setState({
                value: newProps.value,
                errorMessage: ''
            });
            this._delayedValidate(newProps.value);
        }
    };
    TextField.prototype.componentWillUnmount = function () {
        this._async.dispose();
        this._isMounted = false;
    };
    TextField.prototype.render = function () {
        var _a = this.props, disabled = _a.disabled, required = _a.required, multiline = _a.multiline, underlined = _a.underlined, label = _a.label, description = _a.description, iconClass = _a.iconClass, className = _a.className;
        var isFocused = this.state.isFocused;
        var errorMessage = this._errorMessage;
        var textFieldClassName = classNames('text-field', {
            'is-required': required,
            'is-disabled': disabled,
            'is-active': isFocused,
            'text-field-multiline': multiline,
            'text-field-underlined': underlined
        });
        return (React.createElement("div", {className: textFieldClassName}, 
            label && React.createElement(Label_1.Label, {htmlFor: this._id}, label), 
            iconClass && React.createElement("i", {className: iconClass}), 
            multiline ? this._renderTextArea() : this._renderInput(), 
            errorMessage && React.createElement("div", {className: 'screenReaderOnly'}, errorMessage), 
            (description || errorMessage) &&
                React.createElement("span", {id: this._descriptionId}, 
                    description && React.createElement("span", {className: 'textField-description'}, description), 
                    errorMessage && React.createElement("p", {className: 'textField-errorMessage slideDownIn20'}, errorMessage))));
    };
    /**
    * Sets focus on the text field
    */
    TextField.prototype.focus = function () {
        if (this._field) {
            this._field.focus();
        }
    };
    /**
   * Selects the text field
   */
    TextField.prototype.select = function () {
        if (this._field) {
            this._field.select();
        }
    };
    /**
    * Sets the selection start of the text field to a specified value
    */
    TextField.prototype.setSelectionStart = function (value) {
        if (this._field) {
            this._field.selectionStart = value;
        }
    };
    /**
    * Sets the selection end of the text field to a specified value
    */
    TextField.prototype.setSelectionEnd = function (value) {
        if (this._field) {
            this._field.selectionEnd = value;
        }
    };
    TextField.prototype._onInputChange = function (event) {
        var element = event.target;
        var value = element.value;
        this.setState({
            value: value,
            errorMessage: ''
        });
        this._willMountTriggerValidation = false;
        this._delayedValidate(value);
        var onBeforeChange = this.props.onBeforeChange;
        onBeforeChange(value);
    };
    TextField.prototype._onFocus = function (ev) {
        if (this.props.onFocus) {
            this.props.onFocus(ev);
        }
        this.setState({
            isFocused: true
        });
    };
    TextField.prototype._onBlur = function (ev) {
        if (this.props.onBlur) {
            this.props.onBlur(ev);
        }
        this.setState({
            isFocused: false
        });
    };
    TextField.prototype._validate = function (value) {
        var _this = this;
        if (this._latestValidateValue === value) {
            return;
        }
        this._latestValidateValue = value;
        var onGetErrorMessage = this.props.onGetErrorMessage;
        var result = onGetErrorMessage(value || '');
        if (result !== undefined) {
            if (typeof result === 'string') {
                this.setState({
                    errorMessage: result
                });
                this._notifyAfterValidate(value, result);
            }
            else {
                var currentValidation_1 = ++this._lastValidation;
                result.then(function (errorMessage) {
                    if (_this._isMounted && currentValidation_1 === _this._lastValidation) {
                        _this.setState({
                            errorMessage: errorMessage
                        });
                    }
                    _this._notifyAfterValidate(value, errorMessage);
                });
            }
        }
        else {
            this._notifyAfterValidate(value, '');
        }
    };
    TextField.prototype._notifyAfterValidate = function (value, errorMessage) {
        if (!this._willMountTriggerValidation && value === this.state.value) {
            var onNotifyValidationResult = this.props.onNotifyValidationResult;
            onNotifyValidationResult(errorMessage, value);
            if (!errorMessage) {
                var onChanged = this.props.onChanged;
                onChanged(value);
            }
        }
        else {
            this._willMountTriggerValidation = false;
        }
    };
    Object.defineProperty(TextField.prototype, "_errorMessage", {
        get: function () {
            var errorMessage = this.state.errorMessage;
            if (!errorMessage) {
                errorMessage = this.props.errorMessage;
            }
            return errorMessage;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(TextField.prototype, "_fieldClassName", {
        get: function () {
            var errorMessage = this._errorMessage;
            var textFieldClassName;
            if (this.props.multiline && !this.props.resizable) {
                textFieldClassName = 'textField-field textField-field-unresizable';
            }
            else {
                textFieldClassName = 'textField-field';
            }
            return classNames(textFieldClassName, this.props.inputClassName, {
                'textField-invalid': !!errorMessage
            });
        },
        enumerable: true,
        configurable: true
    });
    TextField.prototype._renderTextArea = function () {
        var _this = this;
        var textAreaProps = attributes_1.getNativeAttributes(this.props, attributes_1.textAreaAttributes, ['defaultValue']);
        return (React.createElement("textarea", __assign({}, textAreaProps, {id: this._id, ref: function (c) { return _this._field = c; }, value: this.state.value, onChange: this._onInputChange, className: this._fieldClassName, onFocus: this._onFocus, onBlur: this._onBlur})));
    };
    TextField.prototype._renderInput = function () {
        var _this = this;
        var inputProps = attributes_1.getNativeAttributes(this.props, attributes_1.inputAttributes, ['defaultValue']);
        return (React.createElement("input", __assign({type: 'text'}, inputProps, {id: this._id, ref: function (c) { return _this._field = c; }, value: this.state.value, onChange: this._onInputChange, className: this._fieldClassName, onFocus: this._onFocus, onBlur: this._onBlur})));
    };
    TextField.defaultProps = {
        multiline: false,
        resizable: true,
        underlined: false,
        onChanged: function () { },
        onBeforeChange: function () { },
        onNotifyValidationResult: function () { },
        onGetErrorMessage: function () { return undefined; },
        deferredValidationTime: 200,
        errorMessage: ''
    };
    return TextField;
}(React.Component));
exports.TextField = TextField;
