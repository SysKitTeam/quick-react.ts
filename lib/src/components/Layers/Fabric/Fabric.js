"use strict";
var React = require('react');
var EventGroup_1 = require('../../../utilities/EventGroup');
var KeyCodes_1 = require('../../../utilities/KeyCodes');
var classNames = require('classnames');
var DIRECTIONAL_KEY_CODES = [
    KeyCodes_1.KeyCodes.up,
    KeyCodes_1.KeyCodes.down,
    KeyCodes_1.KeyCodes.left,
    KeyCodes_1.KeyCodes.right,
    KeyCodes_1.KeyCodes.home,
    KeyCodes_1.KeyCodes.end,
    KeyCodes_1.KeyCodes.tab,
    KeyCodes_1.KeyCodes.pageUp,
    KeyCodes_1.KeyCodes.pageDown
];
var _lastIsFocusVisible = false;
if (typeof (document) === 'object' && document.documentElement && !document.documentElement.getAttribute('dir')) {
    document.documentElement.setAttribute('dir', 'ltr');
}
var Fabric = (function (_super) {
    __extends(Fabric, _super);
    function Fabric() {
        _super.call(this);
        this.state = {
            isFocusVisible: _lastIsFocusVisible
        };
        this._events = new EventGroup_1.EventGroup(this);
    }
    Fabric.prototype.componentDidMount = function () {
        this._events.on(document.body, 'mousedown', this._onMouseDown, true);
        this._events.on(document.body, 'keydown', this._onKeyDown, true);
    };
    Fabric.prototype.componentWillUnmount = function () {
        this._events.dispose();
    };
    Fabric.prototype.render = function () {
        var isFocusVisible = this.state.isFocusVisible;
        var rootClass = classNames('ms-Fabric ms-font-m', [this.props.className], {
            'is-focusVisible': isFocusVisible
        });
        return (React.createElement("div", __assign({}, this.props, {className: rootClass, ref: "root"})));
    };
    Fabric.prototype._onMouseDown = function () {
        if (this.state.isFocusVisible) {
            this.setState({
                isFocusVisible: false
            });
            _lastIsFocusVisible = false;
        }
    };
    Fabric.prototype._onKeyDown = function (ev) {
        if (!this.state.isFocusVisible && DIRECTIONAL_KEY_CODES.indexOf(ev.which) > -1) {
            this.setState({
                isFocusVisible: true
            });
            _lastIsFocusVisible = true;
        }
    };
    return Fabric;
}(React.Component));
exports.Fabric = Fabric;
