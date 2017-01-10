"use strict";
var React = require('react');
var ReactDOM = require('react-dom');
var Fabric_1 = require('./Fabric/Fabric');
var autobind_1 = require('../../utilities/autobind');
var array_1 = require('../../utilities/array');
var attributes_1 = require('../../utilities/attributes');
var classNames = require('classnames');
var ProjectedLayer_1 = require('./ProjectedLayer');
var DEFAULT_HOST_ID = '__layerHost';
var LayerHost = (function (_super) {
    __extends(LayerHost, _super);
    function LayerHost(props) {
        _super.call(this, props);
        this.state = {
            layers: []
        };
        this._layers = [];
        this._layerRefs = {};
    }
    LayerHost.getDefault = function (layerElement) {
        var doc = layerElement.ownerDocument;
        var hostElement = doc.getElementById(DEFAULT_HOST_ID);
        if (hostElement) {
            return hostElement[DEFAULT_HOST_ID];
        }
        else {
            hostElement = doc.createElement('div');
            hostElement.id = DEFAULT_HOST_ID;
            doc.body.appendChild(hostElement);
            var defaultHost = ReactDOM.render(React.createElement(LayerHost, null), hostElement);
            hostElement[DEFAULT_HOST_ID] = defaultHost;
            return defaultHost;
        }
    };
    LayerHost.prototype.getChildContext = function () {
        return {
            layerHost: this
        };
    };
    LayerHost.prototype.render = function () {
        var _this = this;
        var divProps = attributes_1.getNativeAttributes(this.props, attributes_1.divAttributes);
        return (React.createElement("div", __assign({}, divProps, {className: classNames('layer-host', [this.props.className])}), 
            React.createElement(Fabric_1.Fabric, null, 
                this.props.children, 
                React.createElement("div", {className: "overlay"}, this._layers.map(function (layer) { return (React.createElement(ProjectedLayer_1.ProjectedLayer, {key: layer.id, layerId: layer.id, parentElement: layer.parentElement, defaultRemoteProps: layer.props, ref: _this._resolveLayer})); })))
        ));
    };
    LayerHost.prototype.addLayer = function (id, parentElement, props, onMounted) {
        this._layers.push({
            id: id,
            parentElement: parentElement,
            props: props,
            onMounted: onMounted
        });
        this.forceUpdate();
    };
    LayerHost.prototype.removeLayer = function (id) {
        var index = array_1.findIndex(this._layers, function (layer) { return layer.id === id; });
        if (index >= 0) {
            this._layers.splice(index, 1);
            delete this._layerRefs[id];
            this.forceUpdate();
        }
    };
    LayerHost.prototype._resolveLayer = function (projectedLayer) {
        if (projectedLayer) {
            var layerId_1 = projectedLayer.getId();
            var index = array_1.findIndex(this._layers, function (layer) { return layer.id === layerId_1; });
            if (index >= 0 && this._layerRefs[layerId_1] !== projectedLayer) {
                this._layerRefs[layerId_1] = projectedLayer;
                this._layers[index].onMounted(projectedLayer);
            }
        }
    };
    LayerHost.childContextTypes = {
        layerHost: React.PropTypes.object
    };
    __decorate([
        autobind_1.autobind, 
        __metadata('design:type', Function), 
        __metadata('design:paramtypes', [ProjectedLayer_1.ProjectedLayer]), 
        __metadata('design:returntype', void 0)
    ], LayerHost.prototype, "_resolveLayer", null);
    return LayerHost;
}(React.Component));
exports.LayerHost = LayerHost;
