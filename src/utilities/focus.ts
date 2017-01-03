import getDocument from './getDocument';
import elementContains from './elementContains';

const IS_VISIBLE_ATTRIBUTE = 'data-is-visible';
const IS_FOCUSABLE_ATTRIBUTE = 'data-is-focusable';
const FOCUSZONE_ID_ATTRIBUTE = 'data-focuszone-id';

export function doesElementContainFocus(element: HTMLElement) {
  let currentActiveElement: HTMLElement = getDocument(element).activeElement as HTMLElement;
  if (currentActiveElement && elementContains(element, currentActiveElement)) {
    return true;
  }
  return false;
}

export function focusFirstChild(
  rootElement: HTMLElement): boolean {
  let element: HTMLElement = getNextElement(rootElement, rootElement, true, false, false, true);

  if (element) {
    element.focus();
    return true;
  }
  return false;
}

export function getNextElement(
  rootElement: HTMLElement,
  currentElement: HTMLElement,
  checkNode?: boolean,
  suppressParentTraversal?: boolean,
  suppressChildTraversal?: boolean,
  includeElementsInFocusZones?: boolean): HTMLElement {

  if (
    !currentElement ||
    (currentElement === rootElement && suppressChildTraversal)) {
    return null;
  }

  let isCurrentElementVisible = isElementVisible(currentElement);

  if (checkNode && isCurrentElementVisible && isElementTabbable(currentElement)) {
    return currentElement;
  }

  if (!suppressChildTraversal && isCurrentElementVisible && (includeElementsInFocusZones || !isElementFocusZone(currentElement))) {
    const childMatch = getNextElement(rootElement, currentElement.firstElementChild as HTMLElement, true, true, false, includeElementsInFocusZones);

    if (childMatch) {
      return childMatch;
    }
  }

  if (currentElement === rootElement) {
    return null;
  }

  const siblingMatch = getNextElement(rootElement, currentElement.nextElementSibling as HTMLElement, true, true, false, includeElementsInFocusZones);

  if (siblingMatch) {
    return siblingMatch;
  }

  if (!suppressParentTraversal) {
    return getNextElement(rootElement, currentElement.parentElement, false, false, true, includeElementsInFocusZones);
  }

  return null;
}

export function isElementVisible(element: HTMLElement): boolean {
  if (!element || !element.getAttribute) {
    return false;
  }

  const visibilityAttribute = element.getAttribute(IS_VISIBLE_ATTRIBUTE);

  if (visibilityAttribute !== null && visibilityAttribute !== undefined) {
    return visibilityAttribute === 'true';
  }

  return (element.offsetHeight !== 0 ||
    element.offsetParent !== null ||
    (element as any).isVisible === true);
}

export function isElementTabbable(element: HTMLElement): boolean {
  return (
    !!element &&
    (element.tagName === 'A' ||
      (element.tagName === 'BUTTON' && !(element as HTMLButtonElement).disabled) ||
      (element.tagName === 'INPUT' && !(element as HTMLInputElement).disabled) ||
      (element.tagName === 'TEXTAREA' && !(element as HTMLTextAreaElement).disabled) ||
      (element.getAttribute && element.getAttribute(IS_FOCUSABLE_ATTRIBUTE) === 'true')));
}

export function isElementFocusZone(element?: HTMLElement): boolean {
  return element && !!element.getAttribute(FOCUSZONE_ID_ATTRIBUTE);
}
