"use strict";
var React = require('react');
var classNames = require('classnames');
var Icon_1 = require('../../components/Icon/Icon');
var IconName_1 = require('../../components/Icon/IconName');
var Checkbox_1 = require('../../components/Checkbox/Checkbox');
var Common_1 = require('../Common/Common');
var autobind_1 = require('../../utilities/autobind');
//import './Treeview.scss';
var TreeviewItem = (function (_super) {
    __extends(TreeviewItem, _super);
    function TreeviewItem(props) {
        _super.call(this, props);
        this.state = { isOpen: props.isOpen, iconArrow: IconName_1.IconName.ArrowRight };
    }
    TreeviewItem.prototype.render = function () {
        var item = this.props.item;
        var isOpen = this.state.isOpen;
        var itemClassName = classNames('treeview-child', {
            'expanded': this.state.isOpen,
            'collapsed': !this.state.isOpen
        });
        return (React.createElement("div", null, 
            React.createElement("div", {className: 'treeview-item', onClick: this._onItemClick.bind(this)}, 
                React.createElement(Icon_1.Icon, {iconName: this.state.iconArrow}), 
                item.text), 
            React.createElement("div", {className: itemClassName}, item.children && item.children.map(function (child, index) { return (React.createElement("div", {key: index}, 
                React.createElement(Checkbox_1.Checkbox, {defaultChecked: child.checked !== undefined ? child.checked : true, label: child.text})
            )); }))));
    };
    TreeviewItem.prototype._onItemClick = function (ev) {
        var isOpen = this.state.isOpen;
        this.setState({
            isOpen: !isOpen,
            iconArrow: isOpen ? IconName_1.IconName.ArrowRight : IconName_1.IconName.ArrowDownRight
        });
        ev.stopPropagation();
        ev.preventDefault();
    };
    TreeviewItem.defaultProps = {
        isOpen: false
    };
    __decorate([
        autobind_1.autobind, 
        __metadata('design:type', Function), 
        __metadata('design:paramtypes', [MouseEvent]), 
        __metadata('design:returntype', void 0)
    ], TreeviewItem.prototype, "_onItemClick", null);
    return TreeviewItem;
}(Common_1.CommonComponent));
exports.TreeviewItem = TreeviewItem;
