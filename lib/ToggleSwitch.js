webpackJsonp([35],{

/***/ 0:
/***/ function(module, exports, __webpack_require__) {

	"use strict";
	
	Object.defineProperty(exports, "__esModule", { value: true });
	/* tslint:disable:no-console */
	__webpack_require__(1);
	__webpack_require__(327);
	var React = __webpack_require__(328);
	var ReactDOM = __webpack_require__(358);
	var ToggleSwitch_1 = __webpack_require__(1104);
	var Index = /** @class */function (_super) {
	    __extends(Index, _super);
	    function Index() {
	        return _super !== null && _super.apply(this, arguments) || this;
	    }
	    Index.prototype.render = function () {
	        return React.createElement("div", null, React.createElement(ToggleSwitch_1.ToggleSwitch, { onChange: this._onToggle, label: 'Toggle' }), " ", React.createElement("br", null), React.createElement(ToggleSwitch_1.ToggleSwitch, { checked: false, disabled: true }), " ", React.createElement("br", null), React.createElement(ToggleSwitch_1.ToggleSwitch, { checked: true, disabled: true, label: 'Disabled Toggle' }), " ", React.createElement("br", null));
	    };
	    Index.prototype._onToggle = function (checked) {
	        console.log(checked);
	    };
	    return Index;
	}(React.Component);
	exports.Index = Index;
	ReactDOM.render(React.createElement(Index, null), document.getElementById('root'));

/***/ },

/***/ 546:
/***/ function(module, exports) {

	"use strict";
	
	Object.defineProperty(exports, "__esModule", { value: true });
	function autobind(target, key, descriptor) {
	    var fn = descriptor.value;
	    if (typeof fn !== 'function') {
	        throw new Error("@autobind decorator can only be applied to methods");
	    }
	    // avoid recursion in IE11
	    var definingProperty = false;
	    return {
	        configurable: true,
	        get: function () {
	            if (definingProperty || this === target.prototype || this.hasOwnProperty(key)) {
	                return fn;
	            }
	            var bound = fn.bind(this);
	            definingProperty = true;
	            Object.defineProperty(this, key, {
	                value: bound,
	                configurable: true,
	                writable: true
	            });
	            definingProperty = false;
	            return bound;
	        }
	    };
	}
	exports.autobind = autobind;

/***/ },

/***/ 1104:
/***/ function(module, exports, __webpack_require__) {

	"use strict";
	
	Object.defineProperty(exports, "__esModule", { value: true });
	var React = __webpack_require__(328);
	var classNames = __webpack_require__(497);
	__webpack_require__(1105);
	var autobind_1 = __webpack_require__(546);
	var ToggleSwitch = /** @class */function (_super) {
	    __extends(ToggleSwitch, _super);
	    function ToggleSwitch(props) {
	        var _this = _super.call(this, props) || this;
	        _this.state = {
	            checked: props.checked === undefined ? false : props.checked
	        };
	        return _this;
	    }
	    ToggleSwitch.prototype.render = function () {
	        var _a = this.props,
	            checked = _a.checked,
	            onChange = _a.onChange,
	            disabled = _a.disabled,
	            className = _a.className,
	            label = _a.label;
	        var isChecked = checked === undefined ? this.state.checked : checked;
	        var switchClassName = classNames(className, 'toggle-switch', {
	            'checked': isChecked
	        });
	        var slidersClassName = classNames('toggle-slider');
	        return React.createElement("label", { className: switchClassName }, React.createElement("input", { type: "checkbox", disabled: disabled, onChange: this._onChange, checked: isChecked }), React.createElement("div", { className: slidersClassName }), label && React.createElement("span", { className: "toggle-label" }, label));
	    };
	    ToggleSwitch.prototype._onChange = function (ev) {
	        var isChecked = ev.target.checked;
	        if (this.props.onChange) {
	            this.props.onChange(isChecked);
	        }
	        if (this.props.checked === undefined) {
	            this.setState({ checked: isChecked });
	        }
	    };
	    __decorate([autobind_1.autobind, __metadata("design:type", Function), __metadata("design:paramtypes", [Object]), __metadata("design:returntype", void 0)], ToggleSwitch.prototype, "_onChange", null);
	    return ToggleSwitch;
	}(React.Component);
	exports.ToggleSwitch = ToggleSwitch;

/***/ },

/***/ 1105:
/***/ function(module, exports, __webpack_require__) {

	// style-loader: Adds some css to the DOM by adding a <style> tag
	
	// load the styles
	var content = __webpack_require__(1106);
	if(typeof content === 'string') content = [[module.id, content, '']];
	// add the styles to the DOM
	var update = __webpack_require__(504)(content, {});
	if(content.locals) module.exports = content.locals;
	// Hot Module Replacement
	if(false) {
		// When the styles change, update the <style> tags
		if(!content.locals) {
			module.hot.accept("!!../../../node_modules/css-loader/index.js!../../../node_modules/sass-loader/index.js?outputStyle=expanded!./ToggleSwitch.scss", function() {
				var newContent = require("!!../../../node_modules/css-loader/index.js!../../../node_modules/sass-loader/index.js?outputStyle=expanded!./ToggleSwitch.scss");
				if(typeof newContent === 'string') newContent = [[module.id, newContent, '']];
				update(newContent);
			});
		}
		// When the module is disposed, remove the <style> tags
		module.hot.dispose(function() { update(); });
	}

/***/ },

/***/ 1106:
/***/ function(module, exports, __webpack_require__) {

	exports = module.exports = __webpack_require__(503)();
	// imports
	
	
	// module
	exports.push([module.id, "* {\n  font-family: 'Segoe UI';\n  font-size: 14px;\n  color: #4D4D4F;\n}\n\n::-webkit-scrollbar {\n  width: 8px;\n  height: 8px;\n}\n\n/* Track */\n::-webkit-scrollbar-track {\n  border-radius: 10px;\n  background: #DADADB;\n  border: 2px solid transparent;\n  background-clip: content-box;\n}\n\n/* Handle */\n::-webkit-scrollbar-thumb {\n  border-radius: 10px;\n  background: #AEAEAF;\n}\n\n::-webkit-scrollbar-thumb:hover {\n  background: #4D4D4F;\n}\n\n.ReactVirtualized__Grid:focus, .ReactVirtualized__Collection:focus {\n  outline: none !important;\n}\n\n.toggle-switch {\n  display: inline-flex;\n  height: 20px;\n}\n\n.toggle-switch input {\n  display: none;\n}\n\n.toggle-switch .toggle-slider {\n  cursor: pointer;\n  transition: .4s;\n  background-color: #AEAEAF;\n  position: relative;\n  height: 10px;\n  top: 5px;\n  width: 28px;\n  border-radius: 5px;\n  -webkit-transition: .4s;\n}\n\n.toggle-switch .toggle-slider::before {\n  position: absolute;\n  content: \"\";\n  background-color: #4D4D4F;\n  border: 2px solid #4D4D4F;\n  transition: .4s;\n  -webkit-transition: .4s;\n  border-radius: 50%;\n  height: 12px;\n  width: 12px;\n  left: 0;\n  bottom: -3px;\n}\n\n.toggle-switch .toggle-label {\n  user-select: none;\n  padding-left: 10px;\n}\n\n.toggle-switch input:checked + .toggle-slider {\n  background-color: #FAC992;\n}\n\n.toggle-switch input:checked + .toggle-slider::before {\n  background-color: #F79428;\n  border-color: #F79428;\n  -webkit-transform: translateX(100%);\n  -ms-transform: translateX(100%);\n  transform: translateX(100%);\n}\n\n.toggle-switch input:disabled + .toggle-slider {\n  background-color: #DADADB;\n  cursor: default;\n}\n\n.toggle-switch input:disabled + .toggle-slider::before {\n  background-color: #AEAEAF;\n  border: 2px solid #AEAEAF;\n}\n\n.toggle-switch input:disabled + .toggle-slider + .toggle-label {\n  color: #AEAEAF;\n}\n\n.toggle-switch.checked .toggle-slider::before {\n  left: -4px;\n}\n\n.toggle-switch.checked input:disabled + .toggle-slider {\n  background-color: #FCDEBD;\n}\n\n.toggle-switch.checked input:disabled + .toggle-slider::before {\n  background-color: #FAC992;\n  border: 2px solid #FAC992;\n}\n", ""]);
	
	// exports


/***/ }

});
//# sourceMappingURL=ToggleSwitch.b3d14060d786be20b6e9.js.map