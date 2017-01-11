"use strict";
var React = require('react');
var classNames = require('classnames');
var Icon_1 = require('../Icon/Icon');
//import './AddToFavorites.scss';
var AddToFavorites = (function (_super) {
    __extends(AddToFavorites, _super);
    function AddToFavorites() {
        _super.apply(this, arguments);
    }
    AddToFavorites.prototype.render = function () {
        var favoriteClass = classNames({ favorited: this.props.favorited });
        return (React.createElement(Icon_1.Icon, {className: favoriteClass, iconName: "icon-Ghost"}));
    };
    return AddToFavorites;
}(React.Component));
exports.AddToFavorites = AddToFavorites;
