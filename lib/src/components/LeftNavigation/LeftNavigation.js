"use strict";
var React = require('react');
var classNames = require('classnames');
var object_1 = require('../../utilities/object');
var array_1 = require('../../utilities/array');
var Icon_1 = require('../../components/Icon/Icon');
var IconName_1 = require('../../components/Icon/IconName');
//import './LeftNavigation.scss';
var LeftNavigation = (function (_super) {
    __extends(LeftNavigation, _super);
    function LeftNavigation(props) {
        _super.call(this, props);
        this.state = { isOpen: false, selectedIndex: this.getSelectedIndex(this.props.options) };
    }
    LeftNavigation.prototype.onLeftNavigationClick = function () {
        this.setState({ isOpen: !this.state.isOpen });
    };
    ;
    LeftNavigation.prototype.onLinkClick = function (index) {
        index = Math.max(0, Math.min(this.props.options.length - 1, index));
        if (index !== this.state.selectedIndex) {
            this.setState({
                selectedIndex: index
            });
        }
    };
    ;
    LeftNavigation.prototype.getSelectedIndex = function (options) {
        return array_1.findIndex(options, (function (option) { return option.selected; }));
    };
    ;
    LeftNavigation.prototype.render = function () {
        var _this = this;
        var _a = this.props, options = _a.options, id = _a.id;
        var tag = 'div';
        var leftNavigationTextClass = classNames({
            'show-text': this.state.isOpen,
            'hide-text': !this.state.isOpen
        });
        var className = classNames('left-nav', {
            'expanded': this.state.isOpen,
            'collapsed': !this.state.isOpen
        }, [this.props.className]);
        var children = this.props.options.map(function (option, index) {
            var linkClasses = classNames('nav-item', {
                'disabled': option.disabled,
                'selected': _this.state.selectedIndex === index
            });
            return (React.createElement("div", {key: option.id, className: linkClasses, title: option.text}, 
                React.createElement("a", {id: option.id, href: option.href, onClick: function () { _this.onLinkClick(index); }}, 
                    React.createElement(Icon_1.Icon, {iconName: option.icon}), 
                    React.createElement("span", null, option.text))
            ));
        });
        return React.createElement(tag, object_1.assign({}, { className: className }), React.createElement("div", null, 
            React.createElement("div", {className: "nav-item", onClick: function () { _this.onLeftNavigationClick(); }}, 
                React.createElement(Icon_1.Icon, {iconName: IconName_1.IconName.SwitchView})
            ), 
            children));
    };
    ;
    return LeftNavigation;
}(React.Component));
exports.LeftNavigation = LeftNavigation;
;
