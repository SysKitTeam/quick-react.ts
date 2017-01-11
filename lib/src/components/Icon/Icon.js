"use strict";
var React = require('react');
var classNames = require('classnames');
var attributes_1 = require('../../utilities/attributes');
require('./Icon.scss');
exports.Icon = function (props) {
    var size = props.size;
    var customIcon = props.iconName === '';
    var iconClass = props.iconName;
    var iconClassName = classNames(['icon'], (_a = {},
        _a[props.iconName] = !customIcon,
        _a
    ), [props.className]);
    return React.createElement("i", __assign({}, attributes_1.getNativeAttributes(props, attributes_1.htmlElementAttributes), {className: iconClassName}));
    var _a;
};
