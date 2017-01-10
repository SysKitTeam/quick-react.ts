"use strict";
// Initialize global window id.
var CURRENT_ID_PROPERTY = '__currentId__';
var _global = (typeof window !== 'undefined' && window) || process;
if (_global[CURRENT_ID_PROPERTY] === undefined) {
    _global[CURRENT_ID_PROPERTY] = 0;
}
function getId(prefix) {
    var index = _global[CURRENT_ID_PROPERTY]++;
    return (prefix || '') + index;
}
exports.getId = getId;
