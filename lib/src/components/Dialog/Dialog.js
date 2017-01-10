"use strict";
var React = require('react');
var classNames = require('classnames');
var DialogFooter_1 = require('./DialogFooter');
var Common_1 = require('../Common/Common');
var getId_1 = require('../../utilities/getId');
var Layer_1 = require('../../components/Layers/Layer');
var Popup_1 = require('../../components/Popup/Popup');
var Overlay_1 = require('../../components/Overlay/Overlay');
var Icon_1 = require('../../components/Icon/Icon');
var IconName_1 = require('../../components/Icon/IconName');
var Dialog = (function (_super) {
    __extends(Dialog, _super);
    function Dialog(props) {
        _super.call(this, props);
        this._onDialogRef = this._onDialogRef.bind(this);
        this.state = {
            id: getId_1.getId('dialog'),
            isOpen: props.isOpen,
            isAnimatingOpen: props.isOpen,
            isAnimatingClose: false
        };
    }
    Dialog.prototype.componentWillReceiveProps = function (newProps) {
        // Opening the dialog
        if (newProps.isOpen && !this.state.isOpen) {
            this.setState({
                isOpen: true,
                isAnimatingOpen: true,
                isAnimatingClose: false
            });
        }
        // Closing the dialog
        if (!newProps.isOpen && this.state.isOpen) {
            this.setState({
                isOpen: false,
                isAnimatingOpen: false,
                isAnimatingClose: true
            });
        }
    };
    Dialog.prototype.render = function () {
        var _a = this.props, hasCloseXButton = _a.hasCloseXButton, isBlocking = _a.isBlocking, isDarkOverlay = _a.isDarkOverlay, onDismiss = _a.onDismiss, onLayerDidMount = _a.onLayerDidMount, onLayerMounted = _a.onLayerMounted, subText = _a.subText, title = _a.title;
        var _b = this.state, id = _b.id, isOpen = _b.isOpen, isAnimatingOpen = _b.isAnimatingOpen, isAnimatingClose = _b.isAnimatingClose;
        if (!isOpen) {
            return null;
        }
        var subTextContent;
        var dialogClassName = classNames('dialog', this.props.className, {
            'is-open': isOpen,
            'is-animatingOpen': isAnimatingOpen,
            'is-animatingClose': isAnimatingClose
        });
        var groupings = this._groupChildren();
        if (subText) {
            subTextContent = React.createElement("p", {className: 'dialog-subText', id: id + '-subText'}, subText);
        }
        return (React.createElement(Layer_1.Layer, {onLayerDidMount: onLayerMounted || onLayerDidMount}, 
            React.createElement(Popup_1.Popup, {role: "dialog", onDismiss: onDismiss}, 
                React.createElement("div", {className: dialogClassName, ref: this._onDialogRef}, 
                    React.createElement(Overlay_1.Overlay, {isDarkThemed: isDarkOverlay, onClick: isBlocking ? null : onDismiss}), 
                    React.createElement("div", {className: classNames('dialog-main', this.props.containerClassName)}, 
                        React.createElement("div", {className: 'dialog-header'}, 
                            React.createElement("p", {className: 'dialog-title', id: id + '-title'}, title), 
                            React.createElement("div", {className: 'dialog-topButton'}, hasCloseXButton &&
                                React.createElement(Icon_1.Icon, {disabled: false, className: 'dialog-button dialog-button-close', onClick: onDismiss, iconName: IconName_1.IconName.Delete}))), 
                        React.createElement("div", {className: 'dialog-inner'}, 
                            React.createElement("div", {className: classNames('dialog-content', this.props.contentClassName)}, 
                                subTextContent, 
                                groupings.contents), 
                            groupings.footers)))
            )
        ));
    };
    Dialog.prototype._groupChildren = function () {
        var groupings = {
            footers: [],
            contents: []
        };
        React.Children.map(this.props.children, function (child) {
            if (typeof child === 'object' && child !== null && child.type === DialogFooter_1.DialogFooter) {
                groupings.footers.push(child);
            }
            else {
                groupings.contents.push(child);
            }
        });
        return groupings;
    };
    Dialog.prototype._onDialogRef = function (ref) {
        if (ref) {
            this._events.on(ref, 'animationend', this._onAnimationEnd);
        }
        else {
            this._events.off();
        }
    };
    Dialog.prototype._onAnimationEnd = function (ev) {
        // The dialog has just opened (faded in)
        if (ev.animationName.indexOf('fadeIn') > -1) {
            this.setState({
                isOpen: true,
                isAnimatingOpen: false
            });
        }
        // The dialog has just closed (faded out)
        if (ev.animationName.indexOf('fadeOut') > -1) {
            this.setState({
                isOpen: false,
                isAnimatingClose: false
            });
            // Call the onDismiss callback
            if (this.props.onDismiss) {
                this.props.onDismiss();
            }
        }
    };
    Dialog.defaultProps = {
        isOpen: false,
        isDarkOverlay: true,
        isBlocking: true,
        hasCloseXButton: true,
        className: '',
        containerClassName: '',
        contentClassName: ''
    };
    return Dialog;
}(Common_1.CommonComponent));
exports.Dialog = Dialog;
