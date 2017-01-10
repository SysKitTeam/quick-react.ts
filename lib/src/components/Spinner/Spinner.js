"use strict";
var React = require('react');
var classNames = require('classnames');
var Spinner_Props_1 = require('./Spinner.Props');
//import './Spinner.scss';
var Spinner = (function (_super) {
    __extends(Spinner, _super);
    function Spinner() {
        _super.apply(this, arguments);
    }
    Spinner.prototype.render = function () {
        var _a = this.props, type = _a.type, label = _a.label, className = _a.className;
        return (React.createElement("div", {className: classNames('spinner', className)}, 
            React.createElement("div", {className: classNames('spinner-circle', { 'spinner-normal': type === Spinner_Props_1.SpinnerType.normal }, { 'spinner-large': type === Spinner_Props_1.SpinnerType.large }, { 'spinner-larger': type === Spinner_Props_1.SpinnerType.larger })}), 
            label && (React.createElement("div", {className: 'spinner-label'}, label))));
    };
    Spinner.defaultProps = {
        type: Spinner_Props_1.SpinnerType.normal
    };
    return Spinner;
}(React.Component));
exports.Spinner = Spinner;
