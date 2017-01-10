"use strict";
var KeyCodes_1 = require('./KeyCodes');
var getDocument_1 = require('./getDocument');
var _isRTL = false;
/**
 * Gets the rtl state of the page (returns true if in rtl.)
 */
function getRTL() {
    if (_isRTL === undefined) {
        var doc = getDocument_1.getDocument();
        if (doc) {
            _isRTL = document.documentElement.getAttribute('dir') === 'rtl';
        }
        else {
            throw new Error('getRTL was called in a server environment without setRTL being called first. ' +
                'Call setRTL to set the correct direction first.');
        }
    }
    return _isRTL;
}
exports.getRTL = getRTL;
function setRTL(isRTL) {
    var doc = getDocument_1.getDocument();
    if (doc) {
        doc.documentElement.setAttribute('dir', isRTL ? 'rtl' : 'ltr');
    }
    _isRTL = isRTL;
}
exports.setRTL = setRTL;
function getRTLSafeKeyCode(key) {
    if (getRTL()) {
        if (key === KeyCodes_1.KeyCodes.left) {
            key = KeyCodes_1.KeyCodes.right;
        }
        else if (key === KeyCodes_1.KeyCodes.right) {
            key = KeyCodes_1.KeyCodes.left;
        }
    }
    return key;
}
exports.getRTLSafeKeyCode = getRTLSafeKeyCode;
