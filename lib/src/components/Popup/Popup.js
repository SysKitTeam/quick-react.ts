"use strict";
var React = require('react');
var KeyCodes_1 = require('../../utilities/KeyCodes');
var attributes_1 = require('../../utilities/attributes');
var focus_1 = require('../../utilities/focus');
var getDocument_1 = require('../../utilities/getDocument');
var Common_1 = require('../Common/Common');
var Popup = (function (_super) {
    __extends(Popup, _super);
    function Popup() {
        _super.apply(this, arguments);
    }
    Popup.prototype.componentWillMount = function () {
        this._originalFocusedElement = getDocument_1.getDocument().activeElement;
    };
    Popup.prototype.componentDidMount = function () {
        var _this = this;
        this._events.on(this.refs.root, 'keydown', this._onKeyDown);
        this._events.on(this.refs.root, 'focus', function () { return _this._containsFocus = true; }, true);
        this._events.on(this.refs.root, 'blur', function () { return _this._containsFocus = false; }, true);
        if (focus_1.doesElementContainFocus(this.refs.root)) {
            this._containsFocus = true;
        }
    };
    Popup.prototype.componentWillUnmount = function () {
        var _this = this;
        if (this.props.shouldRestoreFocus &&
            this._originalFocusedElement &&
            this._containsFocus &&
            this._originalFocusedElement !== window) {
            setTimeout(function () {
                if (_this._originalFocusedElement) {
                    _this._originalFocusedElement.focus();
                }
            }, 0);
        }
    };
    Popup.prototype.render = function () {
        var _a = this.props, role = _a.role, className = _a.className, ariaLabelledBy = _a.ariaLabelledBy, ariaDescribedBy = _a.ariaDescribedBy;
        return (React.createElement("div", __assign({ref: "root"}, attributes_1.getNativeAttributes(this.props, attributes_1.divAttributes), {className: className, role: role, "aria-labelledby": ariaLabelledBy, "aria-describedby": ariaDescribedBy}), this.props.children));
    };
    Popup.prototype._onKeyDown = function (ev) {
        switch (ev.which) {
            case KeyCodes_1.KeyCodes.escape:
                if (this.props.onDismiss) {
                    this.props.onDismiss();
                    ev.preventDefault();
                    ev.stopPropagation();
                }
                break;
        }
    };
    Popup.defaultProps = {
        shouldRestoreFocus: true
    };
    return Popup;
}(Common_1.CommonComponent));
exports.Popup = Popup;
