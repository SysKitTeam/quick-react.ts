import {getVirtualParent} from './virtualParent';

export function getParent(child: HTMLElement, allowVirtualParents: boolean = true): HTMLElement {
  return child && (
    allowVirtualParents && getVirtualParent(child) ||
    child.parentNode && child.parentNode as HTMLElement
  );
}
