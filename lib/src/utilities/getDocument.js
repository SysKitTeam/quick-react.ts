"use strict";
function getDocument(rootElement) {
    if (_isSSR) {
        return undefined;
    }
    else {
        return rootElement && rootElement.ownerDocument ? rootElement.ownerDocument : document;
    }
}
exports.getDocument = getDocument;
var _isSSR = false;
function setSSR(isEnabled) {
    _isSSR = isEnabled;
}
exports.setSSR = setSSR;
function getWindow(rootElement) {
    if (_isSSR) {
        return undefined;
    }
    else {
        return (rootElement &&
            rootElement.ownerDocument &&
            rootElement.ownerDocument.defaultView ?
            rootElement.ownerDocument.defaultView :
            window);
    }
}
exports.getWindow = getWindow;
