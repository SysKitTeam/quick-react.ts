"use strict";
var React = require('react');
//import './StatusBar.scss';
var StatusBar = (function (_super) {
    __extends(StatusBar, _super);
    function StatusBar(props) {
        _super.call(this, props);
        this.state = {
            text: props.text
        };
    }
    StatusBar.prototype.componentWillReceiveProps = function (newProps) {
        if (newProps.text !== this.state.text) {
            this.setState({
                text: newProps.text
            });
        }
    };
    StatusBar.prototype.render = function () {
        var text = this.state.text;
        return (React.createElement("div", {className: 'statusBar'}, 
            React.createElement("span", null, text)
        ));
    };
    StatusBar.defaultProps = {
        text: ''
    };
    return StatusBar;
}(React.Component));
exports.StatusBar = StatusBar;
