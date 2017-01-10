"use strict";
var virtualParent_1 = require('./virtualParent');
function getParent(child, allowVirtualParents) {
    if (allowVirtualParents === void 0) { allowVirtualParents = true; }
    return child && (allowVirtualParents && virtualParent_1.getVirtualParent(child) ||
        child.parentNode && child.parentNode);
}
exports.getParent = getParent;
