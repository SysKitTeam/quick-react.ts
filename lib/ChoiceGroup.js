webpackJsonp([6],{

/***/ 0:
/***/ function(module, exports, __webpack_require__) {

	"use strict";
	
	Object.defineProperty(exports, "__esModule", { value: true });
	/* tslint:disable:no-console */
	__webpack_require__(1);
	__webpack_require__(327);
	var React = __webpack_require__(328);
	var ReactDOM = __webpack_require__(358);
	var ChoiceGroup_1 = __webpack_require__(567);
	var Index = /** @class */function (_super) {
	    __extends(Index, _super);
	    function Index() {
	        return _super !== null && _super.apply(this, arguments) || this;
	    }
	    Index.prototype.render = function () {
	        return React.createElement("div", null, React.createElement(ChoiceGroup_1.ChoiceGroup, { options: [{ key: 'A', text: 'Option A' }, { key: 'B', text: 'Option B', checked: true }, { key: 'C', text: 'Option C', disabled: true }, { key: 'D', text: 'Option D', disabled: true }], label: "Pick one" }));
	    };
	    return Index;
	}(React.Component);
	exports.Index = Index;
	ReactDOM.render(React.createElement(Index, null), document.getElementById('root'));

/***/ },

/***/ 551:
/***/ function(module, exports, __webpack_require__) {

	/* WEBPACK VAR INJECTION */(function(process) {"use strict";
	
	Object.defineProperty(exports, "__esModule", { value: true });
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
	/* WEBPACK VAR INJECTION */}.call(exports, __webpack_require__(323)))

/***/ },

/***/ 567:
/***/ function(module, exports, __webpack_require__) {

	"use strict";
	
	Object.defineProperty(exports, "__esModule", { value: true });
	var React = __webpack_require__(328);
	var classNames = __webpack_require__(497);
	var getId_1 = __webpack_require__(551);
	__webpack_require__(568);
	var ChoiceGroup = /** @class */function (_super) {
	    __extends(ChoiceGroup, _super);
	    function ChoiceGroup(props) {
	        var _this = _super.call(this, props) || this;
	        _this.state = {
	            keyChecked: _this._getKeyChecked(props.options),
	            keyFocused: undefined
	        };
	        _this._id = getId_1.getId('ChoiceGroup');
	        _this._descriptionId = getId_1.getId('ChoiceGroupDescription');
	        return _this;
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

/***/ 568:
/***/ function(module, exports, __webpack_require__) {

	// style-loader: Adds some css to the DOM by adding a <style> tag
	
	// load the styles
	var content = __webpack_require__(569);
	if(typeof content === 'string') content = [[module.id, content, '']];
	// add the styles to the DOM
	var update = __webpack_require__(504)(content, {});
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

/***/ 569:
/***/ function(module, exports, __webpack_require__) {

	exports = module.exports = __webpack_require__(503)();
	// imports
	
	
	// module
	exports.push([module.id, "* {\n  font-family: 'Segoe UI';\n  font-size: 14px;\n  color: #4D4D4F;\n}\n\n::-webkit-scrollbar {\n  width: 8px;\n  height: 8px;\n}\n\n/* Track */\n::-webkit-scrollbar-track {\n  border-radius: 10px;\n  background: #DADADB;\n  border: 2px solid transparent;\n  background-clip: content-box;\n}\n\n/* Handle */\n::-webkit-scrollbar-thumb {\n  border-radius: 10px;\n  background: #AEAEAF;\n}\n\n::-webkit-scrollbar-thumb:hover {\n  background: #4D4D4F;\n}\n\n.ReactVirtualized__Grid:focus, .ReactVirtualized__Collection:focus {\n  outline: none !important;\n}\n\n.choiceField {\n  box-sizing: border-box;\n  position: relative;\n  line-height: 28px;\n}\n\n.choiceField .label {\n  padding: 0 0 0 25px;\n}\n\n.choiceField .choiceField-input {\n  position: absolute;\n  opacity: 0;\n}\n\n.choiceField .choiceField-field {\n  display: flex;\n  align-items: center;\n  cursor: pointer;\n  user-select: none;\n}\n\n.choiceField .choiceField-field::before {\n  content: '';\n  border: 2px solid #4D4D4F;\n  width: 16px;\n  height: 16px;\n  position: absolute;\n  box-sizing: border-box;\n  transition-property: background, border, border-color;\n  transition-duration: 300ms;\n  transition-timing-function: cubic-bezier(0.4, 0, 0.23, 1);\n  border-radius: 50%;\n}\n\n.choiceField .choiceField-field::after {\n  content: '';\n  width: 8px;\n  height: 8px;\n  border-radius: 50%;\n  position: absolute;\n  left: 4px;\n  transition-property: top, left, right, width, height;\n  transition-duration: 150ms;\n  transition-timing-function: cubic-bezier(0.4, 0, 0.23, 1);\n  box-sizing: border-box;\n}\n\n.choiceField .choiceField-field:hover::before, .choiceField .choiceField-field:focus::before {\n  border-color: #4D4D4F;\n}\n\n.choiceField .choiceField-field.is-checked::before {\n  border: 2px solid #F79428;\n}\n\n.choiceField .choiceField-field.is-checked::after {\n  background-color: #F79428;\n}\n\n.choiceField .choiceField-field.is-checked:hover::before, .choiceField .choiceField-field.is-checked:focus::before {\n  border-color: #F79428;\n}\n\n.choiceField .choiceField-field.is-disabled {\n  cursor: default;\n}\n\n.choiceField .choiceField-field.is-disabled .label {\n  color: #AEAEAF;\n}\n\n.choiceField .choiceField-field.is-disabled::before {\n  border-color: #AEAEAF;\n}\n\n.choiceField .choiceField-field.is-disabled.is-checked::before {\n  border-color: #FAC992;\n}\n\n.choiceField .choiceField-field.is-disabled.is-checked::after {\n  background-color: #FAC992;\n}\n", ""]);
	
	// exports


/***/ }

});
//# sourceMappingURL=ChoiceGroup.b3d14060d786be20b6e9.js.map