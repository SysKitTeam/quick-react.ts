"use strict";
var React = require('react');
var Dropdown_Props_1 = require('./Dropdown.Props');
var DirectionalHint_1 = require('../../utilities/DirectionalHint');
var Callout_1 = require('../Callout/Callout');
var Icon_1 = require('../Icon/Icon');
var IconName_1 = require('../Icon/IconName');
var KeyCodes_1 = require('../../utilities/KeyCodes');
var autobind_1 = require('../../utilities/autobind');
var classNames = require('classnames');
var array_1 = require('../../utilities/array');
var getId_1 = require('../../utilities/getId');
require('./Dropdown.scss');
;
var Dropdown = (function (_super) {
    __extends(Dropdown, _super);
    function Dropdown(props) {
        _super.call(this, props, {
            'isDisabled': 'disabled'
        });
        this.state = {
            id: getId_1.getId('Dropdown'),
            isOpen: false,
            selectedIndex: this._getSelectedIndex(props.options, props.selectedKey)
        };
    }
    Dropdown.prototype.componentWillReceiveProps = function (newProps) {
        this.setState({
            selectedIndex: this._getSelectedIndex(newProps.options, newProps.selectedKey)
        });
    };
    Dropdown.prototype.render = function () {
        var _this = this;
        var _a = this.props, label = _a.label, options = _a.options, _b = _a.onRenderItem, onRenderItem = _b === void 0 ? this._onRenderItem : _b, hasTitleBorder = _a.hasTitleBorder, icon = _a.icon, dropdownType = _a.dropdownType, children = _a.children;
        var _c = this.state, id = _c.id, isOpen = _c.isOpen, selectedIndex = _c.selectedIndex, isDisabled = _c.isDisabled;
        var selectedOption = options[selectedIndex];
        var dropdownTitleClassName = classNames({
            'dropdown-title-border': this.props.hasTitleBorder,
            'dropdown-title': !this.props.hasTitleBorder
        });
        var dropdownIconClassName = classNames({
            'iconArrowWithBorder': this.props.hasTitleBorder,
            'iconArrow': !this.props.hasTitleBorder
        });
        return (React.createElement("div", {ref: "root"}, 
            label && (React.createElement("label", {id: id + '-label', className: "label", ref: function (dropdownLabel) { return _this._dropdownLabel = dropdownLabel; }}, label)), 
            React.createElement("div", {"data-is-focusable": true, ref: function (c) { return _this._dropDown = c; }, id: id, className: classNames('dropdown', {
                'is-open': isOpen, 'is-disabled': isDisabled
            }), tabIndex: isDisabled ? -1 : 0, onKeyDown: this._onDropdownKeyDown, onClick: this._onDropdownClick, role: "combobox"}, 
                React.createElement("span", {className: dropdownTitleClassName}, 
                    icon && (React.createElement(Icon_1.Icon, {iconName: icon})), 
                    dropdownType === Dropdown_Props_1.DropdownType.selectionDropdown ?
                        selectedOption ? onRenderItem(selectedOption, this._onRenderItem) : ''
                        : null), 
                React.createElement(Icon_1.Icon, {className: dropdownIconClassName, iconName: IconName_1.IconName.ArrowDown})), 
            isOpen && (React.createElement(Callout_1.Callout, {isBeakVisible: false, className: "dropdown-callout", gapSpace: 0, doNotLayer: false, targetElement: this._dropDown, directionalHint: DirectionalHint_1.DirectionalHint.bottomLeftEdge, onDismiss: this._onDismiss}, dropdownType === Dropdown_Props_1.DropdownType.customDropdown ? (React.createElement("ul", {ref: function (c) { return _this._optionList = c; }, id: id + '-list', style: { width: this._dropDown.clientWidth - 2 }, className: "dropdown-items", role: "listbox"}, children)) : (React.createElement("ul", {ref: function (c) { return _this._optionList = c; }, id: id + '-list', style: { width: this._dropDown.clientWidth - 2 }, className: "dropdown-items", role: "listbox"}, options && options.map(function (option, index) { return (React.createElement("li", {id: id + '-list' + index.toString(), ref: Dropdown.Option + index.toString(), key: option.key, "data-index": index, "data-is-focusable": true, className: classNames('dropdown-item', { 'is-selected': selectedIndex === index }), onClick: function () { return _this._onItemClick(index); }, onFocus: function () { return _this.setSelectedIndex(index); }, role: "option"}, 
                option.icon ? React.createElement(Icon_1.Icon, {iconName: option.icon})
                    : null, 
                option.text)); })))))));
    };
    Dropdown.prototype.focus = function () {
        if (this._dropDown && this._dropDown.tabIndex !== -1) {
            this._dropDown.focus();
        }
    };
    Dropdown.prototype.setSelectedIndex = function (index) {
        var _a = this.props, onChanged = _a.onChanged, options = _a.options;
        var selectedIndex = this.state.selectedIndex;
        index = Math.max(0, Math.min(options.length - 1, index));
        if (index !== selectedIndex) {
            this.setState({
                selectedIndex: index
            });
            if (onChanged) {
                onChanged(options[index], index);
            }
        }
    };
    Dropdown.prototype._onRenderItem = function (item) {
        return React.createElement("span", null, item.text);
    };
    Dropdown.prototype._onItemClick = function (index) {
        this.setSelectedIndex(index);
        this.setState({
            isOpen: false
        });
    };
    Dropdown.prototype._onDismiss = function () {
        this.setState({ isOpen: false });
    };
    Dropdown.prototype._getSelectedIndex = function (options, selectedKey) {
        return array_1.findIndex(options, (function (option) { return (option.isSelected || option.selected || (selectedKey != null) && option.key === selectedKey); }));
    };
    Dropdown.prototype._onDropdownKeyDown = function (ev) {
        switch (ev.which) {
            case KeyCodes_1.KeyCodes.enter:
                this.setState({
                    isOpen: !this.state.isOpen
                });
                break;
            case KeyCodes_1.KeyCodes.escape:
                this.setState({
                    isOpen: false
                });
                break;
            case KeyCodes_1.KeyCodes.up:
                this.setSelectedIndex(this.state.selectedIndex - 1);
                break;
            case KeyCodes_1.KeyCodes.down:
                this.setSelectedIndex(this.state.selectedIndex + 1);
                break;
            case KeyCodes_1.KeyCodes.home:
                this.setSelectedIndex(0);
                break;
            case KeyCodes_1.KeyCodes.end:
                this.setSelectedIndex(this.props.options.length - 1);
                break;
            default:
                return;
        }
        ev.stopPropagation();
        ev.preventDefault();
    };
    Dropdown.prototype._onDropdownClick = function () {
        var _a = this.state, isDisabled = _a.isDisabled, isOpen = _a.isOpen;
        if (!isDisabled) {
            this.setState({
                isOpen: !isOpen
            });
        }
    };
    Dropdown.defaultProps = {
        options: [],
        hasTitleBorder: false,
        dropdownType: Dropdown_Props_1.DropdownType.linkDropdown
    };
    Dropdown.Option = 'option';
    __decorate([
        autobind_1.autobind, 
        __metadata('design:type', Function), 
        __metadata('design:paramtypes', [Object]), 
        __metadata('design:returntype', Object)
    ], Dropdown.prototype, "_onRenderItem", null);
    __decorate([
        autobind_1.autobind, 
        __metadata('design:type', Function), 
        __metadata('design:paramtypes', []), 
        __metadata('design:returntype', void 0)
    ], Dropdown.prototype, "_onDismiss", null);
    __decorate([
        autobind_1.autobind, 
        __metadata('design:type', Function), 
        __metadata('design:paramtypes', [Object]), 
        __metadata('design:returntype', void 0)
    ], Dropdown.prototype, "_onDropdownKeyDown", null);
    __decorate([
        autobind_1.autobind, 
        __metadata('design:type', Function), 
        __metadata('design:paramtypes', []), 
        __metadata('design:returntype', void 0)
    ], Dropdown.prototype, "_onDropdownClick", null);
    return Dropdown;
}(React.Component));
exports.Dropdown = Dropdown;
