"use strict";
var React = require('react');
var EventGroup_1 = require('./EventGroup');
var Async_1 = require('./Async');
var CommonComponent = (function (_super) {
    __extends(CommonComponent, _super);
    function CommonComponent() {
        _super.apply(this, arguments);
    }
    Object.defineProperty(CommonComponent.prototype, "_async", {
        get: function () {
            if (!this.__async) {
                this.__async = new Async_1.Async(this);
                this._disposables.push(this.__async);
            }
            return this.__async;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(CommonComponent.prototype, "_events", {
        get: function () {
            if (!this.__events) {
                this.__events = new EventGroup_1.EventGroup(this);
                this._disposables.push(this.__events);
            }
            return this.__events;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(CommonComponent.prototype, "_disposables", {
        get: function () {
            if (!this.__disposables) {
                this.__disposables = [];
            }
            return this.__disposables;
        },
        enumerable: true,
        configurable: true
    });
    CommonComponent.prototype._resolveRef = function (refName) {
        var _this = this;
        if (!this.__resolves) {
            this.__resolves = {};
        }
        if (!this.__resolves[refName]) {
            this.__resolves[refName] = function (ref) { return _this[refName] = ref; };
        }
        return this.__resolves[refName];
    };
    return CommonComponent;
}(React.Component));
exports.CommonComponent = CommonComponent;
