"use strict";
var React = require('react');
var CalloutContent_1 = require('./CalloutContent');
var Layers_1 = require('../Layers');
var Callout = (function (_super) {
    __extends(Callout, _super);
    function Callout(props) {
        _super.call(this, props);
    }
    Callout.prototype.render = function () {
        var content = (React.createElement(CalloutContent_1.CalloutContent, __assign({}, this.props)));
        return this.props.doNotLayer ? content : (React.createElement(Layers_1.Layer, null, content));
    };
    return Callout;
}(React.Component));
exports.Callout = Callout;
