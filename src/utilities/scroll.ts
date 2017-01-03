let _scrollbarWidth: number;

export const DATA_IS_SCROLLABLE_ATTRIBUTE = 'data-is-scrollable';

export function getScrollbarWidth(): number {
  if (_scrollbarWidth === undefined) {
    let scrollDiv: HTMLElement = document.createElement('div');
    scrollDiv.style.setProperty('width', '100px');
    scrollDiv.style.setProperty('height', '100px');
    scrollDiv.style.setProperty('overflow', 'scroll');
    scrollDiv.style.setProperty('position', 'absolute');
    scrollDiv.style.setProperty('top', '-9999px');
    document.body.appendChild(scrollDiv);
    _scrollbarWidth = scrollDiv.offsetWidth - scrollDiv.clientWidth;

    document.body.removeChild(scrollDiv);
  }

  return _scrollbarWidth;
}

export function findScrollableParent(startingElement: HTMLElement): HTMLElement {
  let el = startingElement;

  while (el && el !== document.body) {
    if (el.getAttribute(DATA_IS_SCROLLABLE_ATTRIBUTE) === 'true') {
      return el;
    }
    el = el.parentElement;
  }

  el = startingElement;

  while (el && el !== document.body) {
    if (el.getAttribute(DATA_IS_SCROLLABLE_ATTRIBUTE) !== 'false') {
      const styles = getComputedStyle(el);
      let overflowY = styles ? styles.getPropertyValue('overflow-y') : '';

      if (overflowY && (overflowY === 'scroll' || overflowY === 'auto')) {
        return el;
      }
    }

    el = el.parentElement;
  }

  if (!el || el === document.body) {
    el = window as any;
  }

  return el;
}
