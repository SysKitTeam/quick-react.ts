import getParent from './getParent';

export default function elementContains(parent: HTMLElement, child: HTMLElement, allowVirtualParents: boolean = true): boolean {
  let isContained: boolean = false;

  if (parent && child) {
    if (allowVirtualParents) {
      isContained = false;

      while (child) {
        let nextParent = getParent(child);

        if (nextParent === parent) {
          isContained = true;
          break;
        }

        child = nextParent;
      }
    } else if (parent.contains) {
      isContained = parent.contains(child);
    }
  }

  return isContained;
}
