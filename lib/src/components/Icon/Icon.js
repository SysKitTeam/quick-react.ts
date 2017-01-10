"use strict";
var React = require('react');
var classNames = require('classnames');
var IconName_1 = require('./IconName');
var attributes_1 = require('../../utilities/attributes');
//import './Icon.scss';
exports.Icon = function (props) {
    var size = props.size;
    var customIcon = props.iconName === IconName_1.IconName.None;
    var iconClass = IconName_1.IconName[props.iconName];
    var iconClassName = classNames(['icon'], (_a = {},
        _a["icon-" + iconClass] = !customIcon,
        _a
    ), [props.className]);
    return React.createElement("i", __assign({}, attributes_1.getNativeAttributes(props, attributes_1.htmlElementAttributes), {className: iconClassName}));
    var _a;
};
