export function autobind<T extends Function>(target: any, key: string, descriptor: TypedPropertyDescriptor<T>) {
  let fn = descriptor.value;

  return {
    configurable: true,

    get() {
      if (this === fn.prototype) {
        return fn;
      }
      return fn.bind(this);
    },

    set(newValue) {
      Object.defineProperty(this, key, {
        configurable: true,
        writable: true,
        enumerable: true,
        value: newValue
      });
    }
  };
}
