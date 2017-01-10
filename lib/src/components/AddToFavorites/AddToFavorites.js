"use strict";
var React = require('react');
var classNames = require('classnames');
var IconName_1 = require('../Icon/IconName');
var Icon_1 = require('../Icon/Icon');
//import './AddToFavorites.scss';
var AddToFavorites = (function (_super) {
    __extends(AddToFavorites, _super);
    function AddToFavorites() {
        _super.apply(this, arguments);
    }
    AddToFavorites.prototype.render = function () {
        var favoriteClass = classNames({ favorited: this.props.favorited });
        return (React.createElement(Icon_1.Icon, {className: favoriteClass, iconName: IconName_1.IconName.Ghost}));
    };
    return AddToFavorites;
}(React.Component));
exports.AddToFavorites = AddToFavorites;
