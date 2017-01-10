"use strict";
var React = require('react');
var DirectionalHint_1 = require('../../utilities/DirectionalHint');
var attributes_1 = require('../../utilities/attributes');
var object_1 = require('../../utilities/object');
var getId_1 = require('../../utilities/getId');
var rtl_1 = require('../../utilities/rtl');
var classNames = require('classnames');
var autobind_1 = require('../../utilities/autobind');
var KeyCodes_1 = require('../../utilities/KeyCodes');
var getDocument_1 = require('../../utilities/getDocument');
var Common_1 = require('../Common/Common');
var Icon_1 = require('../Icon/Icon');
var IconName_1 = require('../Icon/IconName');
var Callout_1 = require('../Callout/Callout');
require('./ContextualMenu.scss');
function hasSubmenuItems(item) {
    var submenuItems = item.items;
    return !!(submenuItems && submenuItems.length);
}
exports.hasSubmenuItems = hasSubmenuItems;
var ContextualMenu = (function (_super) {
    __extends(ContextualMenu, _super);
    function ContextualMenu(props) {
        _super.call(this, props);
        this.state = {
            contextualMenuItems: null,
            subMenuId: getId_1.getId('contextualMenu')
        };
        this._isFocusingPreviousElement = false;
        this._enterTimerId = 0;
    }
    ContextualMenu.prototype.render = function () {
        var _this = this;
        var _a = this.props, className = _a.className, items = _a.items, isBeakVisible = _a.isBeakVisible, labelElementId = _a.labelElementId, id = _a.id, targetPoint = _a.targetPoint, useTargetPoint = _a.useTargetPoint, beakWidth = _a.beakWidth, directionalHint = _a.directionalHint, gapSpace = _a.gapSpace, coverTarget = _a.coverTarget, ariaLabel = _a.ariaLabel, doNotLayer = _a.doNotLayer, target = _a.target;
        var submenuProps = this.state.submenuProps;
        var hasIcons = !!(items && items.some(function (item) { return !!item.iconProps; }));
        var hasCheckmarks = !!(items && items.some(function (item) { return !!item.canCheck; }));
        return (React.createElement(Callout_1.Callout, {target: target, targetPoint: targetPoint, useTargetPoint: useTargetPoint, isBeakVisible: isBeakVisible, beakWidth: beakWidth, directionalHint: directionalHint, gapSpace: gapSpace, coverTarget: coverTarget, doNotLayer: doNotLayer, className: 'contextualMenu-Callout', setInitialFocus: true, onDismiss: this.props.onDismiss}, 
            React.createElement("div", {ref: function (host) { return _this._host = host; }, id: id, className: classNames('contextualMenu-container', className)}, 
                (items && items.length) ? (React.createElement("div", {className: 'contextualMenu is-open'}, 
                    React.createElement("ul", {className: 'contextualMenu-list is-open', onKeyDown: this._onKeyDown, "aria-label": ariaLabel}, items.map(function (item, index) { return (item.name === '-' ? (React.createElement("li", {role: "separator", key: item.key || index, className: classNames('contextualMenu-divider', item.className)})) : (React.createElement("li", {role: "menuitem", title: item.title, key: item.key || index, className: classNames('contextualMenu-item', item.className)}, _this._renderMenuItem(item, index, hasCheckmarks, hasIcons)))); }))
                )) : (null), 
                submenuProps ? (React.createElement(ContextualMenu, __assign({}, submenuProps))) : (null))
        ));
    };
    ContextualMenu.prototype.dismiss = function (ev, dismissAll) {
        var onDismiss = this.props.onDismiss;
        if (onDismiss) {
            onDismiss(ev, dismissAll);
        }
    };
    ContextualMenu.prototype._onKeyDown = function (ev) {
        var submenuCloseKey = rtl_1.getRTL() ? KeyCodes_1.KeyCodes.right : KeyCodes_1.KeyCodes.left;
        if (ev.which === KeyCodes_1.KeyCodes.escape
            || ev.which === KeyCodes_1.KeyCodes.tab
            || (ev.which === submenuCloseKey && this.props.isSubMenu)) {
            // When a user presses escape, we will try to refocus the previous focused element.
            this._isFocusingPreviousElement = true;
            ev.preventDefault();
            ev.stopPropagation();
            this.dismiss(ev);
        }
    };
    ContextualMenu.prototype.componentWillUpdate = function (newProps) {
        if (newProps.target !== this.props.target) {
            var newTarget = newProps.target;
            this._setTargetWindowAndElement(newTarget);
        }
    };
    ContextualMenu.prototype.componentWillMount = function () {
        var target = this.props.target;
        this._setTargetWindowAndElement(target);
        this._previousActiveElement = this._targetWindow ? this._targetWindow.document.activeElement : null;
    };
    ContextualMenu.prototype.componentDidMount = function () {
        this._events.on(this._targetWindow, 'resize', this.dismiss);
    };
    ContextualMenu.prototype.componentWillUnmount = function () {
        var _this = this;
        if (this._isFocusingPreviousElement && this._previousActiveElement) {
            setTimeout(function () { return _this._previousActiveElement.focus(); }, 0);
        }
        this._events.dispose();
    };
    ContextualMenu.prototype._setTargetWindowAndElement = function (target) {
        if (target) {
            if (typeof target === 'string') {
                var currentDoc = getDocument_1.getDocument();
                this._target = currentDoc ? currentDoc.querySelector(target) : null;
                this._targetWindow = getDocument_1.getWindow();
            }
            else if (target.stopPropagation) {
                this._target = target;
                this._targetWindow = getDocument_1.getWindow(target.toElement);
            }
            else {
                var targetElement = target;
                this._target = target;
                this._targetWindow = getDocument_1.getWindow(targetElement);
            }
        }
        else {
            this._targetWindow = getDocument_1.getWindow();
        }
    };
    ContextualMenu.prototype._renderMenuItem = function (item, index, hasCheckmarks, hasIcons) {
        if (item.onRender) {
            return item.onRender(item);
        }
        if (item.href) {
            return this._renderAnchorMenuItem(item, index, hasCheckmarks, hasIcons);
        }
        return this._renderButtonItem(item, index, hasCheckmarks, hasIcons);
    };
    ContextualMenu.prototype._renderAnchorMenuItem = function (item, index, hasCheckmarks, hasIcons) {
        return (React.createElement("div", null, 
            React.createElement("a", __assign({}, attributes_1.getNativeAttributes(item, attributes_1.anchorAttributes), {href: item.href, className: classNames('contextualMenu-link', item.disabled ? 'is-disabled' : ''), role: "menuitem", onClick: this._onAnchorClick.bind(this, item)}), 
                (hasIcons) ? (this._renderIcon(item)) : (null), 
                React.createElement("span", {className: 'contextualMenu-linkText'}, 
                    " ", 
                    item.name, 
                    " "))
        ));
    };
    ContextualMenu.prototype._renderIcon = function (item) {
        var iconProps = item.iconProps;
        var iconColorClassName = iconProps.iconName === IconName_1.IconName.None ? '' : 'contextualMenu-iconColor';
        var iconClassName = classNames('contextualMenu-icon', iconColorClassName, iconProps.className);
        return React.createElement(Icon_1.Icon, __assign({}, iconProps, {className: iconClassName}));
    };
    ContextualMenu.prototype._onAnchorClick = function (item, ev) {
        this._executeItemClick(item, ev);
        ev.stopPropagation();
    };
    ContextualMenu.prototype._executeItemClick = function (item, ev) {
        if (item.onClick) {
            item.onClick(ev, item);
        }
        this.dismiss(ev, true);
    };
    ContextualMenu.prototype._renderMenuItemChildren = function (item, index, hasCheckmarks, hasIcons) {
        var isItemChecked = item.checked;
        return (React.createElement("div", {className: "contextualMenu-linkContent"}, 
            (hasCheckmarks) ? (React.createElement(Icon_1.Icon, {iconName: isItemChecked ? IconName_1.IconName.Checkmark : IconName_1.IconName.None, className: 'contextualMenu-icon', onClick: this._onItemClick.bind(this, item)})) : (null), 
            (hasIcons) ? (this._renderIcon(item)) : (null), 
            React.createElement("span", {className: 'contextualMenu-itemText'}, item.name), 
            (item.items && item.items.length) ? (React.createElement(Icon_1.Icon, {className: 'contextualMenu-submenu-chevron', iconName: rtl_1.getRTL() ? IconName_1.IconName.ArrowLeftSlim : IconName_1.IconName.ArrowRightSlim})) : (null)));
    };
    ContextualMenu.prototype._onItemMouseEnter = function (item, ev) {
        var _this = this;
        var targetElement = ev.currentTarget;
        if (item.key !== this.state.expandedMenuItemKey) {
            if (item.items && item.items.length) {
                this._enterTimerId = this._async.setTimeout(function () { return _this._onItemSubMenuExpand(item, targetElement); }, 500);
            }
            else {
                this._enterTimerId = this._async.setTimeout(function () { return _this._onSubMenuDismiss(ev); }, 500);
            }
        }
    };
    ContextualMenu.prototype._onMouseLeave = function (ev) {
        this._async.clearTimeout(this._enterTimerId);
    };
    ContextualMenu.prototype._onItemMouseDown = function (item, ev) {
        if (item.onMouseDown) {
            item.onMouseDown(item, ev);
        }
    };
    ContextualMenu.prototype._renderButtonItem = function (item, index, hasCheckmarks, hasIcons) {
        var _this = this;
        var _a = this.state, expandedMenuItemKey = _a.expandedMenuItemKey, subMenuId = _a.subMenuId;
        var ariaLabel = '';
        if (item.ariaLabel) {
            ariaLabel = item.ariaLabel;
        }
        else if (item.name) {
            ariaLabel = item.name;
        }
        var itemButtonProperties = {
            className: classNames('contextualMenu-link', { 'is-expanded': (expandedMenuItemKey === item.key) }),
            onClick: this._onItemClick.bind(this, item),
            onKeyDown: item.items && item.items.length ? this._onItemKeyDown.bind(this, item) : null,
            onMouseEnter: this._onItemMouseEnter.bind(this, item),
            onMouseLeave: this._onMouseLeave,
            onMouseDown: function (ev) { return _this._onItemMouseDown(item, ev); },
            disabled: item.disabled,
            role: 'menuitem',
            href: item.href,
            title: item.title,
            'aria-label': ariaLabel,
            'aria-haspopup': item.items && item.items.length ? true : null,
            'aria-owns': item.key === expandedMenuItemKey ? subMenuId : null
        };
        return React.createElement('button', object_1.assign({}, attributes_1.getNativeAttributes(item, attributes_1.buttonAttributes), itemButtonProperties), this._renderMenuItemChildren(item, index, hasCheckmarks, hasIcons));
    };
    ContextualMenu.prototype._onItemKeyDown = function (item, ev) {
        var openKey = rtl_1.getRTL() ? KeyCodes_1.KeyCodes.left : KeyCodes_1.KeyCodes.right;
        if (ev.which === openKey) {
            this._onItemSubMenuExpand(item, ev.currentTarget);
        }
    };
    ContextualMenu.prototype._onItemSubMenuExpand = function (item, target) {
        if (this.state.expandedMenuItemKey !== item.key) {
            if (this.state.submenuProps) {
                this._onSubMenuDismiss();
            }
            this.setState({
                expandedMenuItemKey: item.key,
                submenuProps: {
                    items: item.items,
                    target: target,
                    onDismiss: this._onSubMenuDismiss,
                    isSubMenu: true,
                    id: this.state.subMenuId,
                    shouldFocusOnMount: true,
                    directionalHint: rtl_1.getRTL() ? DirectionalHint_1.DirectionalHint.leftTopEdge : DirectionalHint_1.DirectionalHint.rightTopEdge,
                    className: this.props.className,
                    gapSpace: 0
                }
            });
        }
    };
    ContextualMenu.prototype._onSubMenuDismiss = function (ev, dismissAll) {
        if (dismissAll) {
            this.dismiss(ev, dismissAll);
        }
        else {
            this.setState({
                dismissedMenuItemKey: this.state.expandedMenuItemKey,
                expandedMenuItemKey: null,
                submenuProps: null
            });
        }
    };
    ContextualMenu.prototype._onItemClick = function (item, ev) {
        if (item.key !== this.state.expandedMenuItemKey) {
            if (!item.items || !item.items.length) {
                this._executeItemClick(item, ev);
            }
            else {
                if (item.key === this.state.dismissedMenuItemKey) {
                    this._onSubMenuDismiss(ev);
                }
                else {
                    this._onItemSubMenuExpand(item, ev.currentTarget);
                }
            }
        }
        ev.stopPropagation();
        ev.preventDefault();
    };
    ContextualMenu.defaultProps = {
        items: [],
        shouldFocusOnMount: true,
        isBeakVisible: false,
        gapSpace: 0,
        directionalHint: DirectionalHint_1.DirectionalHint.bottomAutoEdge,
        beakWidth: 16
    };
    __decorate([
        autobind_1.autobind, 
        __metadata('design:type', Function), 
        __metadata('design:paramtypes', [Object, Boolean]), 
        __metadata('design:returntype', void 0)
    ], ContextualMenu.prototype, "dismiss", null);
    __decorate([
        autobind_1.autobind, 
        __metadata('design:type', Function), 
        __metadata('design:paramtypes', [Object]), 
        __metadata('design:returntype', void 0)
    ], ContextualMenu.prototype, "_onKeyDown", null);
    __decorate([
        autobind_1.autobind, 
        __metadata('design:type', Function), 
        __metadata('design:paramtypes', [Object]), 
        __metadata('design:returntype', void 0)
    ], ContextualMenu.prototype, "_onMouseLeave", null);
    __decorate([
        autobind_1.autobind, 
        __metadata('design:type', Function), 
        __metadata('design:paramtypes', [Object, Boolean]), 
        __metadata('design:returntype', void 0)
    ], ContextualMenu.prototype, "_onSubMenuDismiss", null);
    return ContextualMenu;
}(Common_1.CommonComponent));
exports.ContextualMenu = ContextualMenu;
