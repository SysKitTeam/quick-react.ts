webpackJsonp([31],{

/***/ 0:
/***/ function(module, exports, __webpack_require__) {

	"use strict";
	/* tslint:disable:no-console */
	
	__webpack_require__(1);
	__webpack_require__(298);
	var React = __webpack_require__(299);
	var ReactDOM = __webpack_require__(329);
	var ToggleSwitch_1 = __webpack_require__(695);
	var Index = function (_super) {
	    __extends(Index, _super);
	    function Index() {
	        _super.apply(this, arguments);
	    }
	    Index.prototype.render = function () {
	        return React.createElement("div", null, React.createElement(ToggleSwitch_1.ToggleSwitch, { onChange: this._onToggle }), " ", React.createElement("br", null), React.createElement(ToggleSwitch_1.ToggleSwitch, { offText: 'OFF', onText: 'ON' }), " ", React.createElement("br", null), React.createElement(ToggleSwitch_1.ToggleSwitch, { offText: 'O', onText: 'I' }));
	    };
	    ;
	    Index.prototype._onToggle = function (checked) {
	        console.log(checked);
	    };
	    return Index;
	}(React.Component);
	exports.Index = Index;
	;
	ReactDOM.render(React.createElement(Index, null), document.getElementById('root'));

/***/ },

/***/ 476:
/***/ function(module, exports, __webpack_require__) {

	var __WEBPACK_AMD_DEFINE_ARRAY__, __WEBPACK_AMD_DEFINE_RESULT__;/*!
	  Copyright (c) 2016 Jed Watson.
	  Licensed under the MIT License (MIT), see
	  http://jedwatson.github.io/classnames
	*/
	/* global define */
	
	(function () {
		'use strict';
	
		var hasOwn = {}.hasOwnProperty;
	
		function classNames () {
			var classes = [];
	
			for (var i = 0; i < arguments.length; i++) {
				var arg = arguments[i];
				if (!arg) continue;
	
				var argType = typeof arg;
	
				if (argType === 'string' || argType === 'number') {
					classes.push(arg);
				} else if (Array.isArray(arg)) {
					classes.push(classNames.apply(null, arg));
				} else if (argType === 'object') {
					for (var key in arg) {
						if (hasOwn.call(arg, key) && arg[key]) {
							classes.push(key);
						}
					}
				}
			}
	
			return classes.join(' ');
		}
	
		if (typeof module !== 'undefined' && module.exports) {
			module.exports = classNames;
		} else if (true) {
			// register as 'classnames', consistent with npm package name
			!(__WEBPACK_AMD_DEFINE_ARRAY__ = [], __WEBPACK_AMD_DEFINE_RESULT__ = function () {
				return classNames;
			}.apply(exports, __WEBPACK_AMD_DEFINE_ARRAY__), __WEBPACK_AMD_DEFINE_RESULT__ !== undefined && (module.exports = __WEBPACK_AMD_DEFINE_RESULT__));
		} else {
			window.classNames = classNames;
		}
	}());


/***/ },

/***/ 507:
/***/ function(module, exports) {

	"use strict";
	
	function autobind(target, key, descriptor) {
	    var fn = descriptor.value;
	    return {
	        configurable: true,
	        get: function () {
	            if (this === fn.prototype) {
	                return fn;
	            }
	            return fn.bind(this);
	        },
	        set: function (newValue) {
	            Object.defineProperty(this, key, {
	                configurable: true,
	                writable: true,
	                enumerable: true,
	                value: newValue
	            });
	        }
	    };
	}
	exports.autobind = autobind;

/***/ },

/***/ 695:
/***/ function(module, exports, __webpack_require__) {

	"use strict";
	
	var React = __webpack_require__(299);
	var classNames = __webpack_require__(476);
	__webpack_require__(696);
	var autobind_1 = __webpack_require__(507);
	var ToggleSwitch = function (_super) {
	    __extends(ToggleSwitch, _super);
	    function ToggleSwitch(props) {
	        _super.call(this, props);
	        this.state = {
	            checked: props.checked === undefined ? false : props.checked
	        };
	    }
	    ToggleSwitch.prototype.render = function () {
	        var _a = this.props,
	            checked = _a.checked,
	            onChange = _a.onChange,
	            className = _a.className;
	        var isChecked = checked === undefined ? this.state.isChecked : checked;
	        var switchClassName = classNames(className, 'toggle-switch');
	        var slidersClassName = classNames('toggle-slider');
	        return React.createElement("label", { className: switchClassName }, React.createElement("input", { type: "checkbox", onChange: this._onChange, checked: isChecked }), React.createElement("div", { className: slidersClassName, "data-on": this.props.onText, "data-off": this.props.offText }));
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
	    ToggleSwitch.defaultProps = {
	        onText: '',
	        offText: ''
	    };
	    __decorate([autobind_1.autobind, __metadata('design:type', Function), __metadata('design:paramtypes', [Object]), __metadata('design:returntype', void 0)], ToggleSwitch.prototype, "_onChange", null);
	    return ToggleSwitch;
	}(React.Component);
	exports.ToggleSwitch = ToggleSwitch;

/***/ },

/***/ 696:
/***/ function(module, exports, __webpack_require__) {

	// style-loader: Adds some css to the DOM by adding a <style> tag
	
	// load the styles
	var content = __webpack_require__(697);
	if(typeof content === 'string') content = [[module.id, content, '']];
	// add the styles to the DOM
	var update = __webpack_require__(484)(content, {});
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

/***/ 697:
/***/ function(module, exports, __webpack_require__) {

	exports = module.exports = __webpack_require__(483)();
	// imports
	
	
	// module
	exports.push([module.id, ".toggle-switch {\n  position: relative;\n  display: inline-block;\n  width: 40px;\n  height: 20px;\n}\n\n.toggle-switch input {\n  display: none;\n}\n\n.toggle-slider {\n  position: absolute;\n  cursor: pointer;\n  top: 0;\n  left: 0;\n  right: 0;\n  bottom: 0;\n  background-color: #ccc;\n  -webkit-transition: .4s;\n  transition: .4s;\n  border-radius: 34px;\n}\n\n.toggle-slider:before {\n  position: absolute;\n  content: \"\";\n  height: calc(100% - 8px);\n  width: calc(50% - 8px);\n  left: 4px;\n  bottom: 4px;\n  background-color: white;\n  -webkit-transition: .4s;\n  transition: .4s;\n  border-radius: 50%;\n  z-index: 2;\n}\n\ninput:not(:checked) + .toggle-slider:after {\n  content: attr(data-off);\n  left: 19px;\n  top: 4px;\n  font-weight: 600;\n  font-family: 'Segoe UI', Tahoma, Geneva, Verdana, sans-serif;\n  font-size: 9px;\n  color: darkgrey;\n  position: absolute;\n  z-index: 1;\n}\n\ninput:checked + .toggle-slider:after {\n  content: attr(data-on);\n  position: absolute;\n  color: white;\n  font-size: 9px;\n  font-weight: 600;\n  font-family: 'Segoe UI', Tahoma, Geneva, Verdana, sans-serif;\n  top: 4px;\n  right: 22px;\n}\n\ninput:checked + .toggle-slider {\n  background-color: #2196F3;\n}\n\ninput:focus + .toggle-slider {\n  box-shadow: 0 0 1px #2196F3;\n}\n\ninput:checked + .toggle-slider:before {\n  -webkit-transform: translateX(100%);\n  -ms-transform: translateX(100%);\n  transform: translateX(calc(100% + 8px));\n}\n", ""]);
	
	// exports


/***/ }

});
//# sourceMappingURL=ToggleSwitch.5af099dfabf0e722b9fa.js.map