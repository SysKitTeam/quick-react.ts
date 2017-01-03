export function assign(target: any, ...args): any {
  return filteredAssign.apply(this, [null, target].concat(args));
}

export function filteredAssign(isAllowed : (attributeName : string) => boolean, target : any, ...args) {
    target = target || {};
    for (let sourceObject of args) {
        if (sourceObject) {
            for (let attributeName in sourceObject) {
                if (sourceObject.hasOwnProperty(attributeName) && !isAllowed || isAllowed(attributeName)) {
                    target[attributeName] = sourceObject[attributeName];
                }
            }
        }
    }
    return target;
}
