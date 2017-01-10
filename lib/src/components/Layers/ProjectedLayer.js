"use strict";
var React = require('react');
var virtualParent_1 = require('../../utilities/virtualParent');
var attributes_1 = require('../../utilities/attributes');
var classNames = require('classnames');
require('./Layer.scss');
var ProjectedLayer = (function (_super) {
    __extends(ProjectedLayer, _super);
    function ProjectedLayer(props) {
        _super.call(this, props);
        this.state = {
            isMounted: false
        };
        this._remoteProps = props.defaultRemoteProps;
    }
    ProjectedLayer.prototype.shouldComponentUpdate = function () {
        return !this.state.isMounted;
    };
    ProjectedLayer.prototype.componentDidMount = function () {
        virtualParent_1.setVirtualParent(this._rootElement, this.props.parentElement);
        this.setState({ isMounted: true });
    };
    ProjectedLayer.prototype.render = function () {
        var remoteProps = attributes_1.getNativeAttributes(this._remoteProps, attributes_1.divAttributes);
        if (!this.state.isMounted) {
            delete remoteProps.children;
        }
        return (React.createElement("div", __assign({}, remoteProps, {className: classNames('projected-layer', remoteProps.className), ref: this.resolveRef('_rootElement')})));
    };
    ProjectedLayer.prototype.resolveRef = function (refName) {
        var _this = this;
        if (!this._resolves) {
            this._resolves = {};
        }
        if (!this._resolves[refName]) {
            this._resolves[refName] = function (ref) { return _this[refName] = ref; };
        }
        return this._resolves[refName];
    };
    ProjectedLayer.prototype.getId = function () {
        return this.props.layerId;
    };
    ProjectedLayer.prototype.projectProps = function (remoteProps) {
        this._remoteProps = remoteProps;
        this.forceUpdate();
    };
    return ProjectedLayer;
}(React.Component));
exports.ProjectedLayer = ProjectedLayer;
