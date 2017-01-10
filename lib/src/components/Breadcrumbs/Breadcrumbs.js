"use strict";
var React = require('react');
var Icon_1 = require('../../components/Icon/Icon');
var IconName_1 = require('../../components/Icon/IconName');
var ContextualMenu_1 = require('../../components/ContextualMenu/ContextualMenu');
var getId_1 = require('../../utilities/getId');
var autobind_1 = require('../../utilities/autobind');
var rtl_1 = require('../../utilities/rtl');
var DirectionalHint_1 = require('../../utilities/DirectionalHint');
require('./Breadcrumbs.scss');
var OVERFLOW_KEY = 'overflow';
var OVERFLOW_WIDTH = 44;
var Breadcrumbs = (function (_super) {
    __extends(Breadcrumbs, _super);
    function Breadcrumbs(props) {
        _super.call(this, props);
        this._id = getId_1.getId('Breadcrumb');
        this.state = this._getStateFromProps(props);
    }
    Breadcrumbs.prototype.componentDidMount = function () {
        this._updateItemMeasurements();
        this._updateRenderedItems();
    };
    Breadcrumbs.prototype.componentWillReceiveProps = function (nextProps) {
        this.setState(this._getStateFromProps(nextProps));
        this._breadcrumbItemWidths = null;
    };
    Breadcrumbs.prototype.componentDidUpdate = function (prevProps, prevStates) {
        if (!this._breadcrumbItemWidths) {
            this._updateItemMeasurements();
            this._updateRenderedItems();
        }
    };
    Breadcrumbs.prototype.render = function () {
        var _this = this;
        var className = this.props.className;
        var _a = this.state, isOverflowOpen = _a.isOverflowOpen, overflowAnchor = _a.overflowAnchor, renderedItems = _a.renderedItems, renderedOverflowItems = _a.renderedOverflowItems;
        var overflowMenuId = this._id + '-overflow';
        return (React.createElement("div", {className: 'breadcrumbs', ref: "renderingArea"}, 
            React.createElement("ul", {className: 'breadcrumbs-list'}, 
                renderedOverflowItems && renderedOverflowItems.length ? (React.createElement("li", {className: 'breadcrumbs-overflow', key: OVERFLOW_KEY, ref: OVERFLOW_KEY}, 
                    React.createElement("div", {className: 'breadcrumb-overflowButton', onClick: this._onOverflowClicked, "data-is-focusable": true, role: "button"}, 
                        React.createElement(Icon_1.Icon, {iconName: IconName_1.IconName.InProgress})
                    ), 
                    React.createElement(Icon_1.Icon, {iconName: rtl_1.getRTL() ? IconName_1.IconName.ArrowDownRight : IconName_1.IconName.ArrowRight}))) : (null), 
                renderedItems.map(function (item, index) { return (React.createElement("li", {className: 'breadcrumbs-list-item', key: item.key || String(index), ref: item.key || String(index)}, 
                    React.createElement("a", {className: 'breadcrumbs-item-link', onClick: item.onClick ? _this._onBreadcrumbClicked.bind(_this, item) : null, href: item.href, role: item.onClick ? 'button' : 'link'}, item.text), 
                    React.createElement(Icon_1.Icon, {iconName: rtl_1.getRTL() ? IconName_1.IconName.ArrowDownRight : IconName_1.IconName.ArrowRight}))); }), 
                isOverflowOpen ? (React.createElement(ContextualMenu_1.ContextualMenu, {target: overflowAnchor, isBeakVisible: true, items: renderedOverflowItems.map(function (item, index) { return ({
                    name: item.text,
                    key: item.key,
                    onClick: _this._onBreadcrumbClicked.bind(_this, item),
                    href: item.href
                }); }), id: overflowMenuId, directionalHint: DirectionalHint_1.DirectionalHint.bottomLeftEdge, onDismiss: this._onOverflowDismissed})) : (null))
        ));
    };
    ;
    Breadcrumbs.prototype._onOverflowClicked = function (ev) {
        this.setState({
            'isOverflowOpen': !this.state.isOverflowOpen,
            'overflowAnchor': ev.currentTarget
        });
    };
    Breadcrumbs.prototype._onOverflowDismissed = function (ev) {
        this.setState({
            'isOverflowOpen': false,
            'overflowAnchor': null
        });
    };
    Breadcrumbs.prototype._onBreadcrumbClicked = function (item, ev) {
        if (item.onClick) {
            item.onClick(ev, item);
        }
        this.setState({
            'isOverflowOpen': false
        });
    };
    Breadcrumbs.prototype._updateItemMeasurements = function () {
        var items = this.props.items;
        if (!this._breadcrumbItemWidths) {
            this._breadcrumbItemWidths = {};
        }
        for (var i = 0; i < items.length; i++) {
            var item = items[i];
            if (!this._breadcrumbItemWidths[item.key]) {
                var el = this.refs[item.key];
                this._breadcrumbItemWidths[item.key] = el.getBoundingClientRect().width;
            }
        }
    };
    Breadcrumbs.prototype._updateRenderedItems = function () {
        var _a = this.props, items = _a.items, maxDisplayedItems = _a.maxDisplayedItems;
        var renderedItems = [];
        var renderedOverflowItems = [].concat(items);
        var minIndex = Math.max(0, renderedOverflowItems.length - maxDisplayedItems);
        renderedItems = renderedOverflowItems.splice(minIndex);
        this.setState({
            isOverflowOpen: this.state.isOverflowOpen,
            overflowAnchor: this.state.overflowAnchor,
            renderedItems: renderedItems,
            renderedOverflowItems: renderedOverflowItems,
        });
    };
    Breadcrumbs.prototype._getStateFromProps = function (nextProps) {
        return {
            isOverflowOpen: false,
            overflowAnchor: null,
            renderedItems: nextProps.items || [],
            renderedOverflowItems: null
        };
    };
    Breadcrumbs.defaultProps = {
        items: [],
        maxDisplayedItems: 999
    };
    __decorate([
        autobind_1.autobind, 
        __metadata('design:type', Function), 
        __metadata('design:paramtypes', [Object]), 
        __metadata('design:returntype', void 0)
    ], Breadcrumbs.prototype, "_onOverflowClicked", null);
    __decorate([
        autobind_1.autobind, 
        __metadata('design:type', Function), 
        __metadata('design:paramtypes', [MouseEvent]), 
        __metadata('design:returntype', void 0)
    ], Breadcrumbs.prototype, "_onOverflowDismissed", null);
    __decorate([
        autobind_1.autobind, 
        __metadata('design:type', Function), 
        __metadata('design:paramtypes', [Object, Object]), 
        __metadata('design:returntype', void 0)
    ], Breadcrumbs.prototype, "_onBreadcrumbClicked", null);
    return Breadcrumbs;
}(React.Component));
exports.Breadcrumbs = Breadcrumbs;
;
