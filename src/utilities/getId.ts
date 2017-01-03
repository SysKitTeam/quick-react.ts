// Initialize global window id.
const CURRENT_ID_PROPERTY = '__currentId__';

declare const process: any;

let _global = (typeof window !== 'undefined' && window) || process;

if (_global[CURRENT_ID_PROPERTY] === undefined) {
  _global[CURRENT_ID_PROPERTY] = 0;
}

export function getId(prefix?: string): string {
  let index = _global[CURRENT_ID_PROPERTY]++;

  return (prefix || '') + index;
}
