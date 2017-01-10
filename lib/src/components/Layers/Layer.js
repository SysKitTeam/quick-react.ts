"use strict";
var React = require('react');
var LayerHost_1 = require('./LayerHost');
var getId_1 = require('../../utilities/getId');
//import './Layer.scss';
var Layer = (function (_super) {
    __extends(Layer, _super);
    function Layer(props) {
        _super.call(this, props);
        this._id = getId_1.getId();
    }
    Layer.prototype.componentDidMount = function () {
        var _this = this;
        var layerHost = this.context.layerHost || LayerHost_1.LayerHost.getDefault(this._rootElement);
        this._layerHost = layerHost;
        layerHost.addLayer(this._id, this._rootElement, this.props, function (projectedLayer) {
            _this._projectedLayer = projectedLayer;
            if (_this.props.onLayerMounted) {
                _this.props.onLayerMounted();
            }
        });
    };
    Layer.prototype.componentWillUnmount = function () {
        this._layerHost.removeLayer(this._id);
    };
    Layer.prototype.componentWillReceiveProps = function (newProps) {
        if (this._projectedLayer) {
            this._projectedLayer.projectProps(newProps);
        }
    };
    Layer.prototype.forceUpdate = function () {
        if (this._projectedLayer) {
            this._projectedLayer.forceUpdate();
        }
    };
    Layer.prototype.render = function () {
        return (React.createElement("span", {className: "layer", ref: this.resolveRef('_rootElement')}));
    };
    Layer.prototype.resolveRef = function (refName) {
        var _this = this;
        if (!this._resolves) {
            this._resolves = {};
        }
        if (!this._resolves[refName]) {
            this._resolves[refName] = function (ref) { return _this[refName] = ref; };
        }
        return this._resolves[refName];
    };
    Layer.contextTypes = {
        layerHost: React.PropTypes.object
    };
    return Layer;
}(React.Component));
exports.Layer = Layer;
