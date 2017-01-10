"use strict";
var React = require('react');
var classNames = require('classnames');
var TreeviewItem_1 = require('./TreeviewItem');
var Common_1 = require('../Common/Common');
//import './Treeview.scss';
var Treeview = (function (_super) {
    __extends(Treeview, _super);
    function Treeview(props) {
        _super.call(this, props);
    }
    Treeview.prototype.render = function () {
        var _a = this.props, label = _a.label, items = _a.items;
        var className = classNames('treeview', [this.props.className]);
        return (React.createElement("div", {className: className}, items.map(function (item, index) { return (React.createElement(TreeviewItem_1.TreeviewItem, {key: index, item: item})); })));
    };
    return Treeview;
}(Common_1.CommonComponent));
exports.Treeview = Treeview;
