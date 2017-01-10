"use strict";
var React = require('react');
var classNames = require('classnames');
var Button_Props_1 = require('./Button.Props');
var attributes_1 = require('../../utilities/attributes');
var object_1 = require('../../utilities/object');
var Icon_1 = require('../Icon/Icon');
require('./Button.scss');
var Button = (function (_super) {
    __extends(Button, _super);
    function Button(props) {
        _super.call(this, props);
    }
    Button.prototype.render = function () {
        var _this = this;
        var _a = this.props, children = _a.children, icon = _a.icon, description = _a.description, ariaLabel = _a.ariaLabel, ariaDescription = _a.ariaDescription, href = _a.href, disabled = _a.disabled, onClick = _a.onClick, isVisible = _a.isVisible, buttonType = _a.buttonType;
        var renderAsAnchor = !!href;
        var tag = renderAsAnchor
            ? 'a'
            : 'button';
        var nativeProps = attributes_1.getNativeAttributes(this.props, renderAsAnchor
            ? attributes_1.anchorAttributes
            : attributes_1.buttonAttributes);
        var className = classNames({
            'button': !renderAsAnchor,
            'link': renderAsAnchor,
            'disabled-link': this.props.disabled && renderAsAnchor,
            'hide-button': isVisible === false,
            'button-primary': buttonType === Button_Props_1.ButtonType.primary
        }, [this.props.className]);
        var iconElement = icon
            ? React.createElement(Icon_1.Icon, {iconName: icon})
            : null;
        return React.createElement(tag, object_1.assign({}, nativeProps, href ? { href: href } : null, { 'ref': function (c) { return _this._buttonElement = c; } }, onClick && { 'onClick': onClick }, disabled && { 'disabled': disabled }, { className: className }), iconElement, React.createElement("span", {className: "button-label"}, children));
    };
    Button.prototype.focus = function () {
        if (this._buttonElement) {
            this._buttonElement.focus();
        }
    };
    return Button;
}(React.Component));
exports.Button = Button;
