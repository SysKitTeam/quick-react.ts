"use strict";
var React = require('react');
var PivotItem = (function (_super) {
    __extends(PivotItem, _super);
    function PivotItem() {
        _super.apply(this, arguments);
    }
    PivotItem.prototype.render = function () {
        return (React.createElement("div", null, this.props.children));
    };
    return PivotItem;
}(React.Component));
exports.PivotItem = PivotItem;
