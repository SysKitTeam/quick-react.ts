interface IVirtualElement extends HTMLElement {
  _virtual: {
    parent?: IVirtualElement;
    children: IVirtualElement[];
  };
}

export function setVirtualParent(child: HTMLElement, parent: HTMLElement) {
  let virtualChild = <IVirtualElement>child;
  let virtualParent = <IVirtualElement>parent;

  if (!virtualChild._virtual) {
    virtualChild._virtual = {
      children: []
    };
  }

  let oldParent = virtualChild._virtual.parent;

  if (oldParent && oldParent !== parent) {
    let index = oldParent._virtual.children.indexOf(virtualChild);

    if (index > -1) {
      oldParent._virtual.children.splice(index, 1);
    }
  }

  virtualChild._virtual.parent = virtualParent || undefined;

  if (virtualParent) {
    if (!virtualParent._virtual) {
      virtualParent._virtual = {
        children: []
      };
    }

    virtualParent._virtual.children.push(virtualChild);
  }
}

export function getVirtualParent(child: HTMLElement): HTMLElement {
  let parent: HTMLElement;

  if (child && isVirtualElement(child)) {
    parent = child._virtual.parent;
  }

  return parent;
}

function isVirtualElement(element: HTMLElement | IVirtualElement): element is IVirtualElement {
  return element && !!(<IVirtualElement>element)._virtual;
}
