"use strict";
var React = require('react');
var classNames = require('classnames');
var getId_1 = require('../../utilities/getId');
var autobind_1 = require('../../utilities/autobind');
var Common_1 = require('../Common/Common');
var KeyCodes_1 = require('../../utilities/KeyCodes');
var Icon_1 = require('../../components/Icon/Icon');
var IconName_1 = require('../../components/Icon/IconName');
var getDocument_1 = require('../../utilities/getDocument');
var elementContains_1 = require('../../utilities/elementContains');
var Search = (function (_super) {
    __extends(Search, _super);
    function Search(props) {
        _super.call(this, props);
        // Handle deprecated prop
        if (this.props.onChanged) {
            this.props.onChange = this.props.onChanged;
        }
        this.state = {
            value: props.value || '',
            hasFocus: false,
            id: getId_1.getId('search')
        };
    }
    Search.prototype.componentWillReceiveProps = function (newProps) {
        if (newProps.value !== undefined) {
            this.setState({
                value: newProps.value
            });
        }
    };
    Search.prototype.render = function () {
        var _a = this.props, labelText = _a.labelText, className = _a.className;
        var _b = this.state, value = _b.value, hasFocus = _b.hasFocus, id = _b.id;
        var searchClassName = classNames('search', className, {
            'is-active': hasFocus,
            'can-clear': value.length > 0
        });
        return (React.createElement("div", __assign({ref: this._resolveRef('_rootElement'), className: searchClassName}, { onFocusCapture: this._onFocusCapture }), 
            React.createElement(Icon_1.Icon, {className: 'search-icon', iconName: IconName_1.IconName.Search}), 
            React.createElement("input", {id: id, className: 'search-field', placeholder: labelText, onChange: this._onInputChange, onKeyDown: this._onKeyDown, value: value, ref: this._resolveRef('_inputElement')}), 
            React.createElement("div", {className: 'search-clearButton', onClick: this._onClearClick}, 
                React.createElement(Icon_1.Icon, {iconName: IconName_1.IconName.Delete})
            )));
    };
    Search.prototype._onClearClick = function (ev) {
        this.setState({
            value: ''
        });
        this._callOnChange('');
        ev.stopPropagation();
        ev.preventDefault();
        this._inputElement.focus();
    };
    Search.prototype._onFocusCapture = function (ev) {
        this.setState({
            hasFocus: true
        });
        this._events.on(getDocument_1.getDocument().body, 'focus', this._handleDocumentFocus, true);
    };
    Search.prototype._onKeyDown = function (ev) {
        switch (ev.which) {
            case KeyCodes_1.KeyCodes.escape:
                this._onClearClick(ev);
                break;
            case KeyCodes_1.KeyCodes.enter:
                if (this.props.onSearch && this.state.value.length > 0) {
                    this.props.onSearch(this.state.value);
                }
                break;
            default:
                return;
        }
        // We only get here if the keypress has been handled.
        ev.preventDefault();
        ev.stopPropagation();
    };
    Search.prototype._onInputChange = function (ev) {
        this.setState({
            value: this._inputElement.value
        });
        this._callOnChange(this._inputElement.value);
    };
    Search.prototype._handleDocumentFocus = function (ev) {
        if (!elementContains_1.elementContains(this._rootElement, ev.target)) {
            this._events.off(getDocument_1.getDocument().body, 'focus');
            this.setState({
                hasFocus: false
            });
        }
    };
    Search.prototype._callOnChange = function (newValue) {
        var onChange = this.props.onChange;
        if (onChange) {
            onChange(newValue);
        }
    };
    Search.defaultProps = {
        labelText: 'Search'
    };
    __decorate([
        autobind_1.autobind, 
        __metadata('design:type', Function), 
        __metadata('design:paramtypes', [Object]), 
        __metadata('design:returntype', void 0)
    ], Search.prototype, "_onClearClick", null);
    __decorate([
        autobind_1.autobind, 
        __metadata('design:type', Function), 
        __metadata('design:paramtypes', [Object]), 
        __metadata('design:returntype', void 0)
    ], Search.prototype, "_onFocusCapture", null);
    __decorate([
        autobind_1.autobind, 
        __metadata('design:type', Function), 
        __metadata('design:paramtypes', [Object]), 
        __metadata('design:returntype', void 0)
    ], Search.prototype, "_onKeyDown", null);
    __decorate([
        autobind_1.autobind, 
        __metadata('design:type', Function), 
        __metadata('design:paramtypes', [Object]), 
        __metadata('design:returntype', void 0)
    ], Search.prototype, "_onInputChange", null);
    return Search;
}(Common_1.CommonComponent));
exports.Search = Search;
