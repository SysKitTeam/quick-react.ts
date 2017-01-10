"use strict";
var React = require('react');
var object_1 = require('../../utilities/object');
var IconName_1 = require('../Icon/IconName');
var Button_1 = require('../Button/Button');
//import './History.scss';
var History = (function (_super) {
    __extends(History, _super);
    function History(props) {
        _super.call(this, props);
    }
    History.prototype.render = function () {
        return React.createElement('div', object_1.assign(''), React.createElement("div", null, 
            React.createElement(Button_1.Button, {icon: IconName_1.IconName.ArrowLeftSlim, onClick: this.props.onBack}), 
            React.createElement(Button_1.Button, {icon: IconName_1.IconName.ArrowRightSlim, onClick: this.props.onForward})));
    };
    return History;
}(React.Component));
exports.History = History;
