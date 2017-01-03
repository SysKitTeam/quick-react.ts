import { KeyCodes } from './KeyCodes';
import getDocument from './getDocument';

let _isRTL: boolean = false;

/**
 * Gets the rtl state of the page (returns true if in rtl.)
 */
export function getRTL(): boolean {
  if (_isRTL === undefined) {
    let doc = getDocument();

    if (doc) {
      _isRTL = document.documentElement.getAttribute('dir') === 'rtl';
    } else {
      throw new Error(
        'getRTL was called in a server environment without setRTL being called first. ' +
        'Call setRTL to set the correct direction first.'
        );
    }
  }

  return _isRTL;
}

export function setRTL(isRTL: boolean) {
  let doc = getDocument();

  if (doc) {
    doc.documentElement.setAttribute('dir', isRTL ? 'rtl' : 'ltr');
  }

  _isRTL = isRTL;
}

export function getRTLSafeKeyCode(key: number): number {
  if (getRTL()) {
    if (key === KeyCodes.left) {
      key = KeyCodes.right;
    } else if (key === KeyCodes.right) {
      key = KeyCodes.left;
    }
  }

  return key;
}
