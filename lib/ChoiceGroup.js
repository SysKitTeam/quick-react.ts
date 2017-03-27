webpackJsonp([7],{

/***/ 0:
/***/ function(module, exports, __webpack_require__) {

	"use strict";
	/* tslint:disable:no-console */
	
	__webpack_require__(1);
	__webpack_require__(298);
	var React = __webpack_require__(299);
	var ReactDOM = __webpack_require__(329);
	var ChoiceGroup_1 = __webpack_require__(544);
	var Index = function (_super) {
	    __extends(Index, _super);
	    function Index() {
	        _super.apply(this, arguments);
	    }
	    Index.prototype.render = function () {
	        return React.createElement("div", null, React.createElement(ChoiceGroup_1.ChoiceGroup, { options: [{ key: 'A', text: 'Option A' }, { key: 'B', text: 'Option B', checked: true }, { key: 'C', text: 'Option C', disabled: true }, { key: 'D', text: 'Option D', checked: true, disabled: true }], label: "Pick one" }));
	    };
	    ;
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

/***/ 503:
/***/ function(module, exports, __webpack_require__) {

	/* WEBPACK VAR INJECTION */(function(process) {"use strict";
	// Initialize global window id.
	
	var CURRENT_ID_PROPERTY = '__currentId__';
	var _global = typeof window !== 'undefined' && window || process;
	if (_global[CURRENT_ID_PROPERTY] === undefined) {
	    _global[CURRENT_ID_PROPERTY] = 0;
	}
	function getId(prefix) {
	    var index = _global[CURRENT_ID_PROPERTY]++;
	    return (prefix || '') + index;
	}
	exports.getId = getId;
	/* WEBPACK VAR INJECTION */}.call(exports, __webpack_require__(294)))

/***/ },

/***/ 544:
/***/ function(module, exports, __webpack_require__) {

	"use strict";
	
	var React = __webpack_require__(299);
	var classNames = __webpack_require__(476);
	var getId_1 = __webpack_require__(503);
	__webpack_require__(545);
	var ChoiceGroup = function (_super) {
	    __extends(ChoiceGroup, _super);
	    function ChoiceGroup(props) {
	        _super.call(this, props);
	        this.state = {
	            keyChecked: this._getKeyChecked(props.options),
	            keyFocused: undefined
	        };
	        this._id = getId_1.getId('ChoiceGroup');
	        this._descriptionId = getId_1.getId('ChoiceGroupDescription');
	    }
	    ChoiceGroup.prototype.componentWillReceiveProps = function (newProps) {
	        var newKeyChecked = this._getKeyChecked(newProps.options);
	        var oldKeyChecked = this._getKeyChecked(this.props.options);
	        if (newKeyChecked !== oldKeyChecked) {
	            this.setState({
	                keyChecked: newKeyChecked
	            });
	        }
	    };
	    ChoiceGroup.prototype.render = function () {
	        var _this = this;
	        var _a = this.props,
	            label = _a.label,
	            options = _a.options,
	            className = _a.className,
	            required = _a.required;
	        var _b = this.state,
	            keyChecked = _b.keyChecked,
	            keyFocused = _b.keyFocused;
	        var titleClassName = classNames('label', className, {
	            'is-required': required
	        });
	        return React.createElement("div", { role: "application", className: className }, React.createElement("div", { className: 'choiceFieldGroup', role: "radiogroup" }, React.createElement("div", { className: 'choiceFieldGroup-title' }, this.props.label ? React.createElement("label", { className: titleClassName, id: this._id + '-label' }, label) : null), options.map(function (option) {
	            return React.createElement("div", { key: option.key, className: classNames('choiceField', { 'is-inFocus': option.key === keyFocused }) }, React.createElement("input", { ref: function (c) {
	                    return _this._inputElement = c;
	                }, id: _this._id + "-" + option.key, className: 'choiceField-input', type: "radio", name: _this._id, disabled: option.isDisabled || option.disabled || _this.props.disabled, checked: option.key === keyChecked, onChange: _this._onChange.bind(_this, option), onFocus: _this._onFocus.bind(_this, option), onBlur: _this._onBlur.bind(_this, option) }), _this._renderField(option));
	        })));
	    };
	    ChoiceGroup.prototype.focus = function () {
	        if (this._inputElement) {
	            this._inputElement.focus();
	        }
	    };
	    ChoiceGroup.prototype._onFocus = function (option, ev) {
	        this.setState({
	            keyFocused: option.key,
	            keyChecked: this.state.keyChecked
	        });
	    };
	    ChoiceGroup.prototype._onBlur = function (option, ev) {
	        this.setState({
	            keyFocused: undefined,
	            keyChecked: this.state.keyChecked
	        });
	    };
	    ChoiceGroup.prototype._renderField = function (option) {
	        var keyChecked = this.state.keyChecked;
	        var isDisabled = option.isDisabled || option.disabled || this.props.disabled;
	        return React.createElement("label", { htmlFor: this._id + '-' + option.key, className: classNames('choiceField-field', { 'is-checked': option.key === keyChecked, 'is-disabled': isDisabled }) }, React.createElement("span", { id: this._descriptionId + "-" + option.key, className: 'label' }, option.text));
	    };
	    ChoiceGroup.prototype._onChange = function (option, ev) {
	        var onChanged = this.props.onChanged;
	        this.setState({
	            keyChecked: option.key
	        });
	        if (onChanged) {
	            onChanged(option);
	        }
	    };
	    ChoiceGroup.prototype._getKeyChecked = function (options) {
	        var optionsChecked = options.filter(function (option) {
	            return option.isChecked || option.checked;
	        });
	        if (optionsChecked.length === 0) {
	            return undefined;
	        } else {
	            return optionsChecked[0].key;
	        }
	    };
	    ChoiceGroup.defaultProps = {
	        options: []
	    };
	    return ChoiceGroup;
	}(React.Component);
	exports.ChoiceGroup = ChoiceGroup;

/***/ },

/***/ 545:
/***/ function(module, exports, __webpack_require__) {

	// style-loader: Adds some css to the DOM by adding a <style> tag
	
	// load the styles
	var content = __webpack_require__(546);
	if(typeof content === 'string') content = [[module.id, content, '']];
	// add the styles to the DOM
	var update = __webpack_require__(484)(content, {});
	if(content.locals) module.exports = content.locals;
	// Hot Module Replacement
	if(false) {
		// When the styles change, update the <style> tags
		if(!content.locals) {
			module.hot.accept("!!../../../node_modules/css-loader/index.js!../../../node_modules/sass-loader/index.js?outputStyle=expanded!./ChoiceGroup.scss", function() {
				var newContent = require("!!../../../node_modules/css-loader/index.js!../../../node_modules/sass-loader/index.js?outputStyle=expanded!./ChoiceGroup.scss");
				if(typeof newContent === 'string') newContent = [[module.id, newContent, '']];
				update(newContent);
			});
		}
		// When the module is disposed, remove the <style> tags
		module.hot.dispose(function() { update(); });
	}

/***/ },

/***/ 546:
/***/ function(module, exports, __webpack_require__) {

	exports = module.exports = __webpack_require__(483)();
	// imports
	
	
	// module
	exports.push([module.id, "::-webkit-scrollbar {\n  width: 13px;\n  margin-top: 10px;\n  border-radius: 15px;\n  margin-right: 3px;\n  background: transparent;\n}\n\n::-webkit-scrollbar-track {\n  border-radius: 15px;\n  margin-top: 7px;\n  background: #EEEFF4;\n  margin-bottom: 7px;\n}\n\n::-webkit-scrollbar-thumb {\n  border-radius: 10px;\n  margin-top: 10px;\n  background: #D2D3D9;\n}\n\n::-webkit-scrollbar-thumb:window-inactive {\n  background: #D2D3D9;\n}\n\n.choiceFieldGroup {\n  font-family: \"Segoe UI WestEuropean\",\"Segoe UI\",-apple-system,BlinkMacSystemFont,Roboto,\"Helvetica Neue\",sans-serif;\n  -webkit-font-smoothing: antialiased;\n  margin-bottom: 4px;\n}\n\n.choiceField {\n  box-sizing: border-box;\n  color: #333333;\n  font-family: \"Segoe UI WestEuropean\", \"Segoe UI\", -apple-system, BlinkMacSystemFont, Roboto, \"Helvetica Neue\", sans-serif;\n  font-size: 14px;\n  font-weight: 400;\n  min-height: 36px;\n  border: 1px solid transparent;\n  position: relative;\n  line-height: 20px;\n  padding-left: 8px;\n}\n\n.choiceField .label {\n  font-size: 14px;\n  padding: 0 0 0 26px;\n  display: inline-block;\n}\n\n.choiceField-input {\n  position: absolute;\n  opacity: 0;\n  top: 8px;\n}\n\n.choiceField-field::before {\n  content: '';\n  display: inline-block;\n  border: 2px solid #a6a6a6;\n  width: 20px;\n  height: 20px;\n  font-weight: normal;\n  position: absolute;\n  box-sizing: border-box;\n  transition-property: background, border, border-color;\n  transition-duration: 200ms;\n  transition-timing-function: cubic-bezier(0.4, 0, 0.23, 1);\n  border-radius: 50%;\n}\n\n.choiceField-field::after {\n  content: '';\n  width: 0;\n  height: 0;\n  border-radius: 50%;\n  position: absolute;\n  top: 10px;\n  left: 10px;\n  bottom: 0;\n  right: 0;\n  transition-property: top, left, right, width, height;\n  transition-duration: 150ms;\n  transition-timing-function: cubic-bezier(0.4, 0, 0.23, 1);\n  box-sizing: border-box;\n}\n\n.choiceField-field {\n  display: inline-block;\n  cursor: pointer;\n  margin-top: 8px;\n  position: relative;\n  vertical-align: top;\n  user-select: none;\n}\n\n.choiceField-field:hover::before {\n  border-color: #767676;\n}\n\n.choiceField-field:hover .label {\n  color: #000000;\n}\n\n.choiceField-field:focus::before {\n  border-color: #767676;\n}\n\n.choiceField-field:focus.is-disabled::before {\n  border-color: #c8c8c8;\n}\n\n.choiceField-field:focus.is-checked::before {\n  border-color: #106ebe;\n}\n\n.choiceField-field:active::before {\n  border-color: #767676;\n}\n\n.choiceField-field:active .label {\n  color: #000000;\n}\n\n.choiceField-field.is-checked::before {\n  border: 2px solid #0078d7;\n  background-color: transparent;\n}\n\n.choiceField-field.is-checked::after {\n  background-color: #0078d7;\n  top: 5px;\n  left: 5px;\n  width: 10px;\n  height: 10px;\n}\n\n.choiceField-field.is-checked:hover::before, .choiceField-field.is-checked:focus::before {\n  border-color: #106ebe;\n}\n\n.choiceField-field.is-disabled {\n  cursor: default;\n}\n\n.choiceField-field.is-disabled:hover::before, .choiceField-field.is-disabled:focus::before {\n  border-color: #c8c8c8;\n}\n\n.choiceField-field.is-disabled::before {\n  background-color: #c8c8c8;\n  border-color: #c8c8c8;\n  color: #c8c8c8;\n}\n\n.choiceField-field.is-disabled .label {\n  color: #a6a6a6;\n}\n\n.choiceField-field.is-inFocus::before {\n  border-color: #767676;\n}\n\n.choiceField-field.is-inFocus.is-disabled::before {\n  border-color: #c8c8c8;\n}\n\n.choiceField-field.is-inFocus.is-checked::before {\n  border-color: #106ebe;\n}\n", ""]);
	
	// exports


/***/ }

});
//# sourceMappingURL=ChoiceGroup.5af099dfabf0e722b9fa.js.map