"use strict";
var getDocument_1 = require('./getDocument');
var elementContains_1 = require('./elementContains');
var IS_VISIBLE_ATTRIBUTE = 'data-is-visible';
var IS_FOCUSABLE_ATTRIBUTE = 'data-is-focusable';
var FOCUSZONE_ID_ATTRIBUTE = 'data-focuszone-id';
function doesElementContainFocus(element) {
    var currentActiveElement = getDocument_1.getDocument(element).activeElement;
    if (currentActiveElement && elementContains_1.elementContains(element, currentActiveElement)) {
        return true;
    }
    return false;
}
exports.doesElementContainFocus = doesElementContainFocus;
function focusFirstChild(rootElement) {
    var element = getNextElement(rootElement, rootElement, true, false, false, true);
    if (element) {
        element.focus();
        return true;
    }
    return false;
}
exports.focusFirstChild = focusFirstChild;
function getNextElement(rootElement, currentElement, checkNode, suppressParentTraversal, suppressChildTraversal, includeElementsInFocusZones) {
    if (!currentElement ||
        (currentElement === rootElement && suppressChildTraversal)) {
        return null;
    }
    var isCurrentElementVisible = isElementVisible(currentElement);
    if (checkNode && isCurrentElementVisible && isElementTabbable(currentElement)) {
        return currentElement;
    }
    if (!suppressChildTraversal && isCurrentElementVisible && (includeElementsInFocusZones || !isElementFocusZone(currentElement))) {
        var childMatch = getNextElement(rootElement, currentElement.firstElementChild, true, true, false, includeElementsInFocusZones);
        if (childMatch) {
            return childMatch;
        }
    }
    if (currentElement === rootElement) {
        return null;
    }
    var siblingMatch = getNextElement(rootElement, currentElement.nextElementSibling, true, true, false, includeElementsInFocusZones);
    if (siblingMatch) {
        return siblingMatch;
    }
    if (!suppressParentTraversal) {
        return getNextElement(rootElement, currentElement.parentElement, false, false, true, includeElementsInFocusZones);
    }
    return null;
}
exports.getNextElement = getNextElement;
function isElementVisible(element) {
    if (!element || !element.getAttribute) {
        return false;
    }
    var visibilityAttribute = element.getAttribute(IS_VISIBLE_ATTRIBUTE);
    if (visibilityAttribute !== null && visibilityAttribute !== undefined) {
        return visibilityAttribute === 'true';
    }
    return (element.offsetHeight !== 0 ||
        element.offsetParent !== null ||
        element.isVisible === true);
}
exports.isElementVisible = isElementVisible;
function isElementTabbable(element) {
    return (!!element &&
        (element.tagName === 'A' ||
            (element.tagName === 'BUTTON' && !element.disabled) ||
            (element.tagName === 'INPUT' && !element.disabled) ||
            (element.tagName === 'TEXTAREA' && !element.disabled) ||
            (element.getAttribute && element.getAttribute(IS_FOCUSABLE_ATTRIBUTE) === 'true')));
}
exports.isElementTabbable = isElementTabbable;
function isElementFocusZone(element) {
    return element && !!element.getAttribute(FOCUSZONE_ID_ATTRIBUTE);
}
exports.isElementFocusZone = isElementFocusZone;
