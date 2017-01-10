"use strict";
var React = require('react');
var classNames = require('classnames');
var attributes_1 = require('../../utilities/attributes');
//import './Overlay.scss';
var Overlay = (function (_super) {
    __extends(Overlay, _super);
    function Overlay() {
        _super.apply(this, arguments);
    }
    Overlay.prototype.render = function () {
        var _a = this.props, isDarkThemed = _a.isDarkThemed, className = _a.className;
        var divProps = attributes_1.getNativeAttributes(this.props, attributes_1.divAttributes);
        var modifiedClassName = classNames('overlay', className, {
            'overlay-dark': isDarkThemed
        });
        return (React.createElement("div", __assign({}, divProps, {className: modifiedClassName})));
    };
    return Overlay;
}(React.Component));
exports.Overlay = Overlay;
