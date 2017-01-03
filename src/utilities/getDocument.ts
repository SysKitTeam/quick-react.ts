export default function getDocument(rootElement?: HTMLElement) {
  if (_isSSR) {
    return undefined;
  } else {
    return rootElement && rootElement.ownerDocument ? rootElement.ownerDocument : document;
  }
}

let _isSSR = false;

export function setSSR(isEnabled) {
  _isSSR = isEnabled;
}

export function getWindow(rootElement?: HTMLElement) {
  if (_isSSR) {
    return undefined;
  } else {
    return (
      rootElement &&
        rootElement.ownerDocument &&
        rootElement.ownerDocument.defaultView ?
        rootElement.ownerDocument.defaultView :
        window
    );
  }
}
