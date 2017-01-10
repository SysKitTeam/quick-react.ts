"use strict";
var React = require('react');
var classNames = require('classnames');
var Icon_1 = require('../../components/Icon/Icon');
//import './MainNavigation.scss';
var MainNavigation = (function (_super) {
    __extends(MainNavigation, _super);
    function MainNavigation(props) {
        _super.call(this, props);
    }
    MainNavigation.prototype.render = function () {
        var _a = this.props, id = _a.id, children = _a.children;
        var className = classNames('main-nav-container', [this.props.className]);
        return (React.createElement("nav", {className: className}, 
            React.createElement("div", {className: 'logo-container'}, 
                React.createElement(Icon_1.Icon, {className: 'logo', iconName: this.props.logo})
            ), 
            children));
    };
    ;
    return MainNavigation;
}(React.Component));
exports.MainNavigation = MainNavigation;
;
