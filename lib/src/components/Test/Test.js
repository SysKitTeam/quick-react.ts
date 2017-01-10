"use strict";
var React = require('react');
var classNames = require('classnames');
require('./Test.scss');
var statusClasses = {
    info: 'bg-blue white',
    warning: 'bg-yellow black',
    success: 'bg-green black',
    error: 'bg-red white'
};
function Test(_a) {
    var isVisible = _a.isVisible, _b = _a.status, status = _b === void 0 ? 'info' : _b, _c = _a.id, id = _c === void 0 ? '' : _c;
    var testClasses = classNames((_d = {
            block: isVisible,
            hide: !isVisible
        },
        _d[statusClasses[status]] = true,
        _d
    ));
    return (React.createElement("div", {id: id, className: testClasses}, "AAAAAA"));
    var _d;
}
exports.Test = Test;
;
