"use strict";
var React = require('react');
var classNames = require('classnames');
var PivotItem_1 = require('./PivotItem');
var Pivot_Props_1 = require('./Pivot.Props');
var getId_1 = require('../../utilities/getId');
var Pivot = (function (_super) {
    __extends(Pivot, _super);
    function Pivot(props) {
        _super.call(this, props);
        var links = this._getPivotLinks(this.props);
        var selectedKey;
        if (props.initialSelectedKey) {
            selectedKey = props.initialSelectedKey;
        }
        else if (props.initialSelectedIndex) {
            selectedKey = links[props.initialSelectedIndex].itemKey;
        }
        else {
            selectedKey = links[0].itemKey;
        }
        this.state = {
            links: links,
            selectedKey: selectedKey,
            id: getId_1.getId('pivot')
        };
        this._renderLink = this._renderLink.bind(this);
    }
    Pivot.prototype.componentWillReceiveProps = function (nextProps) {
        var links = this._getPivotLinks(nextProps);
        var selectedKey = this._isKeyValid(this.state.selectedKey)
            ? this.state.selectedKey
            : links[0].itemKey;
        this.setState({
            links: links,
            selectedKey: selectedKey
        });
    };
    Pivot.prototype.render = function () {
        return (React.createElement("div", null, 
            this._renderPivotLinks(), 
            this._renderPivotItem()));
    };
    Pivot.prototype._renderPivotLinks = function () {
        var className = classNames('pivot', {
            'pivot-tabs': this.props.linkFormat === Pivot_Props_1.PivotLinkFormat.tabs
        });
        return (React.createElement("ul", {className: className, role: "tablist"}, this.state.links.map(this._renderLink)));
    };
    Pivot.prototype._renderLink = function (link) {
        var itemKey = link.itemKey, itemCount = link.itemCount;
        var id = this.state.id;
        var countText;
        if (itemCount !== undefined && this.props.linkFormat !== Pivot_Props_1.PivotLinkFormat.tabs) {
            countText = React.createElement("span", {className: 'pivot-count'}, 
                "(", 
                itemCount, 
                ")");
        }
        var pivotLinkClassName = classNames('pivot-link', {
            'is-selected': this.state.selectedKey === itemKey
        });
        return (React.createElement("a", {id: id + '-tab', key: itemKey, className: pivotLinkClassName, onClick: this._onLinkClick.bind(this, itemKey), role: "tab"}, 
            React.createElement("span", {className: 'pivot-text'}, link.linkText), 
            countText));
    };
    Pivot.prototype._renderPivotItem = function () {
        var itemKey = this.state.selectedKey;
        var index = this._keyToIndexMapping[itemKey];
        var id = this.state.id;
        return (React.createElement("div", {className: 'pivotItem', role: "tabpanel", id: id + '-panel'}, React.Children.toArray(this.props.children)[index]));
    };
    Pivot.prototype._getPivotLinks = function (props) {
        var _this = this;
        var links = [];
        this._keyToIndexMapping = {};
        React.Children.map(props.children, function (child, index) {
            if (typeof child === 'object' && child.type === PivotItem_1.PivotItem) {
                var pivotItem = child;
                var itemKey = pivotItem.props.itemKey || index.toString();
                links.push({
                    linkText: pivotItem.props.linkText,
                    itemKey: itemKey,
                    itemCount: pivotItem.props.itemCount
                });
                _this._keyToIndexMapping[itemKey] = index;
            }
        });
        return links;
    };
    Pivot.prototype._isKeyValid = function (itemKey) {
        return itemKey !== undefined && this._keyToIndexMapping[itemKey] !== undefined;
    };
    /**
    * Handles the onClick event on PivotLinks
    */
    Pivot.prototype._onLinkClick = function (itemKey, ev) {
        ev.preventDefault();
        this._updateSelectedItem(itemKey, ev);
    };
    /**
     * Updates the state with the new selected index
     */
    Pivot.prototype._updateSelectedItem = function (itemKey, ev) {
        this.setState({
            selectedKey: itemKey
        });
        if (this.props.onLinkClick && this._keyToIndexMapping[itemKey] >= 0) {
            var index = this._keyToIndexMapping[itemKey];
            // React.Element<any> cannot directly convert to PivotItem.
            var item = React.Children.toArray(this.props.children)[index];
            if (typeof item === 'object' && item.type === PivotItem_1.PivotItem) {
                this.props.onLinkClick(item, ev);
            }
        }
    };
    return Pivot;
}(React.Component));
exports.Pivot = Pivot;
