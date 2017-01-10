"use strict";
var React = require('react');
require('./Dialog.scss');
var DialogFooter = (function (_super) {
    __extends(DialogFooter, _super);
    function DialogFooter() {
        _super.apply(this, arguments);
    }
    DialogFooter.prototype.render = function () {
        return (React.createElement("div", {className: 'dialog-actions'}, 
            React.createElement("div", {className: 'dialog-actionsRight'}, this._renderChildrenAsActions())
        ));
    };
    DialogFooter.prototype._renderChildrenAsActions = function () {
        return React.Children.map(this.props.children, function (child) {
            return React.createElement("span", {className: 'dialog-action'}, child);
        });
    };
    return DialogFooter;
}(React.Component));
exports.DialogFooter = DialogFooter;
