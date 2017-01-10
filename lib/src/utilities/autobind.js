"use strict";
function autobind(target, key, descriptor) {
    var fn = descriptor.value;
    return {
        configurable: true,
        get: function () {
            if (this === fn.prototype) {
                return fn;
            }
            return fn.bind(this);
        },
        set: function (newValue) {
            Object.defineProperty(this, key, {
                configurable: true,
                writable: true,
                enumerable: true,
                value: newValue
            });
        }
    };
}
exports.autobind = autobind;
