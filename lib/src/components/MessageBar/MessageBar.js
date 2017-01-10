"use strict";
var React = require('react');
var classNames = require('classnames');
var MessageBar_Props_1 = require('./MessageBar.Props');
var getId_1 = require('../../utilities/getId');
var Icon_1 = require('../../components/Icon/Icon');
var IconName_1 = require('../../components/Icon/IconName');
var Checkbox_1 = require('../../components/Checkbox/Checkbox');
require('./MessageBar.scss');
var MessageBar = (function (_super) {
    __extends(MessageBar, _super);
    function MessageBar(props) {
        _super.call(this, props);
        this.ICON_MAP = (_a = {},
            _a[MessageBar_Props_1.MessageBarType.info] = IconName_1.IconName.Details,
            _a[MessageBar_Props_1.MessageBarType.warning] = IconName_1.IconName.Warning,
            _a[MessageBar_Props_1.MessageBarType.error] = IconName_1.IconName.Error,
            _a[MessageBar_Props_1.MessageBarType.success] = IconName_1.IconName.Checkmark,
            _a
        );
        this.state = {
            labelId: getId_1.getId('messageBar')
        };
        var _a;
    }
    MessageBar.prototype.render = function () {
        var _a = this.props, isMultiline = _a.isMultiline, hasDontShowAgain = _a.hasDontShowAgain;
        var messageBarClassName = classNames('messageBar', 'messageBar-singleline', [this.props.className], {
            'messageBar-info': this.props.messageBarType === MessageBar_Props_1.MessageBarType.info,
            'messageBar-error': this.props.messageBarType === MessageBar_Props_1.MessageBarType.error,
            'messageBar-success': this.props.messageBarType === MessageBar_Props_1.MessageBarType.success,
            'messageBar-warning': this.props.messageBarType === MessageBar_Props_1.MessageBarType.warning
        });
        return (React.createElement("div", {className: messageBarClassName, role: "status"}, 
            React.createElement("div", {className: 'messageBar-content'}, 
                this._getIconSpan(), 
                React.createElement("div", {className: 'messageBar-actionables'}, 
                    this._getDismissDiv(), 
                    this._getDontShowAgainDiv(), 
                    React.createElement("div", {className: 'messageBar-text', id: this.state.labelId}, 
                        React.createElement("span", {className: this._getInnerTextClassName()}, this.props.children)
                    )), 
                this._getActionsDiv())
        ));
    };
    MessageBar.prototype._getIconSpan = function () {
        return (React.createElement("div", {className: 'messageBar-icon'}, 
            React.createElement(Icon_1.Icon, {iconName: this.ICON_MAP[this.props.messageBarType]})
        ));
    };
    MessageBar.prototype._getInnerTextClassName = function () {
        return this.props.onDismiss || this.props.actions ? 'messageBar-innerTextPadding' : 'messageBar-innerText';
    };
    MessageBar.prototype._getActionsDiv = function () {
        if (this.props.actions) {
            return (React.createElement("div", {className: 'messageBar-actionsOneline'}, 
                this._getDismissDiv(), 
                this.props.actions));
        }
        return null;
    };
    MessageBar.prototype._getDismissDiv = function () {
        if (this.props.onDismiss != null) {
            return (React.createElement(Icon_1.Icon, {disabled: false, className: 'messageBar-dismissal', onClick: this.props.onDismiss, iconName: IconName_1.IconName.Delete}));
        }
        return null;
    };
    MessageBar.prototype._getDontShowAgainDiv = function () {
        if (this.props.hasDontShowAgain != null && this.props.hasDontShowAgain) {
            return (React.createElement(Checkbox_1.Checkbox, {className: 'messageBar-checkbox', label: 'Dont show this message again'}));
        }
        return null;
    };
    MessageBar.defaultProps = {
        messageBarType: MessageBar_Props_1.MessageBarType.info,
        onDismiss: null,
        hasDontShowAgain: false
    };
    return MessageBar;
}(React.Component));
exports.MessageBar = MessageBar;
