"use strict";
var React = require('react');
var classNames = require('classnames');
var ContextualMenu_1 = require('../ContextualMenu/ContextualMenu');
var EventGroup_1 = require('../../utilities/EventGroup');
var DirectionalHint_1 = require('../../utilities/DirectionalHint');
var autobind_1 = require('../../utilities/autobind');
var getId_1 = require('../../utilities/getId');
var attributes_1 = require('../../utilities/attributes');
var Icon_1 = require('../Icon/Icon');
var OVERFLOW_KEY = 'overflow';
var OVERFLOW_WIDTH = 41.5;
var Ribbon = (function (_super) {
    __extends(Ribbon, _super);
    function Ribbon(props) {
        _super.call(this, props);
        this.state = this._getStateFromProps(props);
        this._id = getId_1.getId('CommandBar');
        this._events = new EventGroup_1.EventGroup(this);
    }
    Ribbon.prototype.componentDidMount = function () {
        this._updateItemMeasurements();
        this._updateRenderedItems();
        this._events.on(window, 'resize', this._updateRenderedItems);
    };
    Ribbon.prototype.componentWillUnmount = function () {
        this._events.dispose();
    };
    Ribbon.prototype.componentWillReceiveProps = function (nextProps) {
        this.setState(this._getStateFromProps(nextProps));
        this._commandItemWidths = null;
    };
    Ribbon.prototype.componentDidUpdate = function (prevProps, prevStates) {
        if (!this._commandItemWidths) {
            this._updateItemMeasurements();
            this._updateRenderedItems();
        }
    };
    Ribbon.prototype.render = function () {
        var _this = this;
        var _a = this.props, isSearchBoxVisible = _a.isSearchBoxVisible, searchPlaceholderText = _a.searchPlaceholderText, className = _a.className;
        var _b = this.state, renderedItems = _b.renderedItems, contextualMenuItems = _b.contextualMenuItems, expandedMenuItemKey = _b.expandedMenuItemKey, expandedMenuId = _b.expandedMenuId, renderedOverflowItems = _b.renderedOverflowItems, contextualMenuTarget = _b.contextualMenuTarget, renderedFarItems = _b.renderedFarItems;
        var searchBox;
        if (isSearchBoxVisible) {
            searchBox = (React.createElement("div", {className: 'ms-CommandBarSearch', ref: 'searchSurface'}, 
                React.createElement("input", {className: 'ms-CommandBarSearch-input', type: 'text', placeholder: searchPlaceholderText}), 
                React.createElement("div", {className: 'ms-CommandBarSearch-iconWrapper ms-CommandBarSearch-iconSearchWrapper'}, 
                    React.createElement("i", {className: 'ms-Icon ms-Icon--Search'})
                ), 
                React.createElement("div", {className: 'ms-CommandBarSearch-iconWrapper ms-CommandBarSearch-iconClearWrapper ms-font-s'}, 
                    React.createElement("i", {className: 'ms-Icon ms-Icon--Cancel'})
                )));
        }
        return (React.createElement("div", {className: classNames('ms-CommandBar', className), ref: 'commandBarRegion'}, 
            searchBox, 
            React.createElement("div", {className: 'ms-CommandBar-primaryCommands', ref: 'commandSurface'}, renderedItems.map(function (item, index) { return (_this._renderItemInCommandBar(item, index, expandedMenuItemKey)); }).concat((renderedOverflowItems && renderedOverflowItems.length) ? [
                React.createElement("div", {className: 'ms-CommandBarItem', key: OVERFLOW_KEY, ref: OVERFLOW_KEY}, 
                    React.createElement("button", {id: this._id + OVERFLOW_KEY, className: classNames('ms-CommandBarItem-link', { 'is-expanded': (expandedMenuItemKey === OVERFLOW_KEY) }), onClick: this._onOverflowClick, role: 'menuitem', "data-automation-id": 'commandBarOverflow'}, 
                        React.createElement("i", {className: 'ms-CommandBarItem-overflow ms-Icon ms-Icon--More'})
                    )
                )
            ] : [])), 
            React.createElement("div", {className: 'ms-CommandBar-sideCommands', ref: 'farCommandSurface'}, renderedFarItems.map(function (item, index) { return (_this._renderItemInCommandBar(item, index, expandedMenuItemKey, true)); })), 
            (contextualMenuItems) ?
                (React.createElement(ContextualMenu_1.ContextualMenu, {labelElementId: expandedMenuId, className: 'ms-CommandBar-menuHost', items: contextualMenuItems, target: contextualMenuTarget, onDismiss: this._onContextMenuDismiss, isBeakVisible: true, directionalHint: DirectionalHint_1.DirectionalHint.bottomAutoEdge})) : (null)));
    };
    Ribbon.prototype._renderItemInCommandBar = function (item, index, expandedMenuItemKey, isFarItem) {
        var _this = this;
        var itemKey = item.key || String(index);
        var className = classNames(item.onClick ? 'ms-CommandBarItem-link' : 'ms-CommandBarItem-text', !item.name && 'ms-CommandBarItem--noName');
        var classNameValue = classNames(className, { 'is-expanded': (expandedMenuItemKey === item.key) });
        var hasIcon = !!item.iconProps;
        return React.createElement("div", {className: classNames('ms-CommandBarItem', item.className), key: itemKey, ref: itemKey}, (function () {
            if (item.onClick || item.items) {
                return React.createElement("button", __assign({}, attributes_1.getNativeAttributes(item, attributes_1.buttonAttributes), {id: _this._id + item.key, className: classNameValue, onClick: function (ev) { return _this._onItemClick(ev, item); }, "data-command-key": index, "aria-haspopup": ContextualMenu_1.hasSubmenuItems(item), role: 'menuitem', "aria-label": item.ariaLabel || item.name}), 
                    (hasIcon) ? _this._renderIcon(item) : (null), 
                    (!!item.name) && React.createElement("span", {className: 'ms-CommandBarItem-commandText'}, item.name), 
                    ContextualMenu_1.hasSubmenuItems(item) ? (React.createElement("i", {className: 'ms-CommandBarItem-chevronDown ms-Icon ms-Icon--ChevronDown'})) : (null));
            }
            else {
                return React.createElement("div", __assign({}, attributes_1.getNativeAttributes(item, attributes_1.divAttributes), {id: _this._id + item.key, className: classNameValue, "data-command-key": index, "aria-haspopup": ContextualMenu_1.hasSubmenuItems(item)}), 
                    (hasIcon) ? _this._renderIcon(item) : (null), 
                    React.createElement("span", {className: 'ms-CommandBarItem-commandText ms-font-m ms-font-weight-regular', "aria-hidden": 'true', role: 'presentation'}, item.name));
            }
        })());
    };
    Ribbon.prototype._renderIcon = function (item) {
        // Only present to allow continued use of item.icon which is deprecated.
        var iconProps = item.iconProps;
        // Use the default icon color for the known icon names
        var iconColorClassName = iconProps.iconName === '' ? '' : 'ms-CommandBarItem-iconColor';
        var iconClassName = classNames('ms-CommandBarItem-icon', iconColorClassName, iconProps.className);
        return React.createElement(Icon_1.Icon, __assign({}, iconProps, {className: iconClassName}));
    };
    Ribbon.prototype._updateItemMeasurements = function () {
        if (this.refs[OVERFLOW_KEY] || (this.props.overflowItems && this.props.overflowItems.length)) {
            this._overflowWidth = OVERFLOW_WIDTH;
        }
        else {
            this._overflowWidth = 0;
        }
        if (!this._commandItemWidths) {
            this._commandItemWidths = {};
        }
        for (var i = 0; i < this.props.items.length; i++) {
            var item = this.props.items[i];
            if (!this._commandItemWidths[item.key]) {
                var el = this.refs[item.key];
                if (el) {
                    this._commandItemWidths[item.key] = el.getBoundingClientRect().width;
                }
            }
        }
    };
    Ribbon.prototype._updateRenderedItems = function () {
        var _a = this.props, items = _a.items, overflowItems = _a.overflowItems;
        var commandSurface = this.refs.commandSurface;
        var farCommandSurface = this.refs.farCommandSurface;
        var commandBarRegion = this.refs.commandBarRegion;
        var searchSurface = this.refs.searchSurface;
        var renderedItems = [].concat(items);
        var renderedOverflowItems = overflowItems;
        var consumedWidth = 0;
        var isOverflowVisible = overflowItems && overflowItems.length;
        var style = window.getComputedStyle(commandSurface);
        var availableWidth = commandBarRegion.clientWidth - parseInt(style.marginLeft, 10) - parseInt(style.marginRight, 10);
        if (searchSurface) {
            availableWidth -= searchSurface.getBoundingClientRect().width;
        }
        if (farCommandSurface) {
            availableWidth -= farCommandSurface.getBoundingClientRect().width;
        }
        if (isOverflowVisible) {
            availableWidth -= this._overflowWidth;
        }
        for (var i = 0; i < renderedItems.length; i++) {
            var item = renderedItems[i];
            var itemWidth = this._commandItemWidths[item.key];
            if ((consumedWidth + itemWidth) >= availableWidth) {
                if (i > 0 && !isOverflowVisible && (availableWidth - consumedWidth) < OVERFLOW_WIDTH) {
                    i--;
                }
                renderedOverflowItems = renderedItems.splice(i).concat(overflowItems);
                break;
            }
            else {
                consumedWidth += itemWidth;
            }
        }
        this.setState({
            renderedItems: renderedItems,
            renderedOverflowItems: renderedOverflowItems,
            expandedMenuItemKey: null,
            contextualMenuItems: null,
            contextualMenuTarget: null
        });
    };
    Ribbon.prototype._onItemClick = function (ev, item) {
        if (item.key === this.state.expandedMenuItemKey || !item.items || !item.items.length) {
            this._onContextMenuDismiss();
        }
        else {
            this.setState({
                expandedMenuId: ev.currentTarget.id,
                expandedMenuItemKey: item.key,
                contextualMenuItems: item.items,
                contextualMenuTarget: ev.currentTarget
            });
        }
        if (item.onClick) {
            item.onClick(ev, item);
        }
    };
    Ribbon.prototype._onOverflowClick = function (ev) {
        if (this.state.expandedMenuItemKey === OVERFLOW_KEY) {
            this._onContextMenuDismiss();
        }
        else {
            this.setState({
                expandedMenuId: ev.currentTarget.id,
                expandedMenuItemKey: OVERFLOW_KEY,
                contextualMenuItems: this.state.renderedOverflowItems,
                contextualMenuTarget: ev.currentTarget
            });
        }
    };
    Ribbon.prototype._onContextMenuDismiss = function (ev) {
        if (!ev || !ev.relatedTarget || !this.refs.commandSurface.contains(ev.relatedTarget)) {
            this.setState({
                expandedMenuItemKey: null,
                contextualMenuItems: null,
                contextualMenuTarget: null
            });
        }
        else {
            ev.stopPropagation();
            ev.preventDefault();
        }
    };
    Ribbon.prototype._getStateFromProps = function (nextProps) {
        return {
            renderedItems: nextProps.items || [],
            renderedOverflowItems: null,
            contextualMenuItems: null,
            renderedFarItems: nextProps.farItems || null
        };
    };
    Ribbon.defaultProps = {
        items: [],
        overflowItems: [],
        farItems: []
    };
    __decorate([
        autobind_1.autobind, 
        __metadata('design:type', Function), 
        __metadata('design:paramtypes', [Object]), 
        __metadata('design:returntype', void 0)
    ], Ribbon.prototype, "_onOverflowClick", null);
    __decorate([
        autobind_1.autobind, 
        __metadata('design:type', Function), 
        __metadata('design:paramtypes', [Object]), 
        __metadata('design:returntype', void 0)
    ], Ribbon.prototype, "_onContextMenuDismiss", null);
    return Ribbon;
}(React.Component));
exports.Ribbon = Ribbon;
