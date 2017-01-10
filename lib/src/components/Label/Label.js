"use strict";
var React = require('react');
var classNames = require('classnames');
var attributes_1 = require('../../utilities/attributes');
require('./Label.scss');
var Label = (function (_super) {
    __extends(Label, _super);
    function Label(props) {
        _super.call(this, props);
    }
    Label.prototype.render = function () {
        var _a = this.props, disabled = _a.disabled, required = _a.required, children = _a.children;
        var className = classNames('label', [this.props.className], {
            'label-disabled': disabled,
            'label-required': required
        });
        return (React.createElement("label", __assign({}, attributes_1.getNativeAttributes(this.props, attributes_1.divAttributes), {className: className}), children));
    };
    return Label;
}(React.Component));
exports.Label = Label;
