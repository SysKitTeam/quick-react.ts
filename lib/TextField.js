webpackJsonp([27],{

/***/ 0:
/***/ function(module, exports, __webpack_require__) {

	"use strict";
	/* tslint:disable:no-console */
	
	__webpack_require__(1);
	__webpack_require__(298);
	var React = __webpack_require__(299);
	var ReactDOM = __webpack_require__(329);
	var TextField_1 = __webpack_require__(597);
	var Index = function (_super) {
	    __extends(Index, _super);
	    function Index() {
	        _super.apply(this, arguments);
	    }
	    Index.prototype.render = function () {
	        return React.createElement("div", null, React.createElement(TextField_1.TextField, { label: "TextField with a placeholder", placeholder: "Now I am a Placeholder" }), React.createElement(TextField_1.TextField, { label: "Disabled TextField", disabled: true }), React.createElement(TextField_1.TextField, { label: "Multiline TextField", multiline: true, rows: 4, cols: 50 }));
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

/***/ 478:
/***/ function(module, exports, __webpack_require__) {

	"use strict";
	
	var object_1 = __webpack_require__(479);
	exports.baseElementEvents = ['onCopy', 'onCut', 'onPaste', 'onCompositionEnd', 'onCompositionStart', 'onCompositionUpdate', 'onFocus', 'onFocusCapture', 'onBlur', 'onBlurCapture', 'onChange', 'onInput', 'onSubmit', 'onLoad', 'onError', 'onKeyDown', 'onKeyDownCapture', 'onKeyPress', 'onKeyUp', 'onAbort', 'onCanPlay', 'onCanPlayThrough', 'onDurationChange', 'onEmptied', 'onEncrypted', 'onEnded', 'onLoadedData', 'onLoadedMetadata', 'onLoadStart', 'onPause', 'onPlay', 'onPlaying', 'onProgress', 'onRateChange', 'onSeeked', 'onSeeking', 'onStalled', 'onSuspend', 'onTimeUpdate', 'onVolumeChange', 'onWaiting', 'onClick', 'onClickCapture', 'onContextMenu', 'onDoubleClick', 'onDrag', 'onDragEnd', 'onDragEnter', 'onDragExit', 'onDragLeave', 'onDragOver', 'onDragStart', 'onDrop', 'onMouseDown', 'onMouseDownCapture', 'onMouseEnter', 'onMouseLeave', 'onMouseMove', 'onMouseOut', 'onMouseOver', 'onMouseUp', 'onMouseUpCapture', 'onSelect', 'onTouchCancel', 'onTouchEnd', 'onTouchMove', 'onTouchStart', 'onScroll', 'onWheel'];
	exports.baseElementAttributes = ['defaultChecked', 'defaultValue', 'accept', 'acceptCharset', 'accessKey', 'action', 'allowFullScreen', 'allowTransparency', 'alt', 'async', 'autoComplete', 'autoFocus', 'autoPlay', 'capture', 'cellPadding', 'cellSpacing', 'charSet', 'challenge', 'checked', 'children', 'classID', 'className', 'cols', 'colSpan', 'content', 'contentEditable', 'contextMenu', 'controls', 'coords', 'crossOrigin', 'data', 'dateTime', 'default', 'defer', 'dir', 'download', 'draggable', 'encType', 'form', 'formAction', 'formEncType', 'formMethod', 'formNoValidate', 'formTarget', 'frameBorder', 'headers', 'height', 'hidden', 'high', 'hrefLang', 'htmlFor', 'httpEquiv', 'icon', 'id', 'inputMode', 'integrity', 'is', 'keyParams', 'keyType', 'kind', 'label', 'lang', 'list', 'loop', 'low', 'manifest', 'marginHeight', 'marginWidth', 'max', 'maxLength', 'media', 'mediaGroup', 'method', 'min', 'minLength', 'multiple', 'muted', 'name', 'noValidate', 'open', 'optimum', 'pattern', 'placeholder', 'poster', 'preload', 'radioGroup', 'readOnly', 'rel', 'required', 'role', 'rows', 'rowSpan', 'sandbox', 'scope', 'scoped', 'scrolling', 'seamless', 'selected', 'shape', 'size', 'sizes', 'span', 'spellCheck', 'src', 'srcDoc', 'srcLang', 'srcSet', 'start', 'step', 'style', 'summary', 'tabIndex', 'title', 'type', 'useMap', 'value', 'width', 'wmode', 'wrap'];
	exports.htmlElementAttributes = exports.baseElementAttributes.concat(exports.baseElementEvents);
	exports.anchorAttributes = exports.htmlElementAttributes.concat(['href', 'target']);
	exports.buttonAttributes = exports.htmlElementAttributes.concat(['disabled']);
	exports.divAttributes = exports.htmlElementAttributes.concat(['align', 'noWrap']);
	exports.inputAttributes = exports.buttonAttributes;
	exports.textAreaAttributes = exports.buttonAttributes;
	exports.imageAttributes = exports.divAttributes;
	function getNativeAttributes(Attributes, allowedAttributeNames, excludedAttributeNames) {
	    return object_1.filteredAssign(function (attributeName) {
	        return (!excludedAttributeNames || excludedAttributeNames.indexOf(attributeName) < 0) && (attributeName.indexOf('data-') === 0 || attributeName.indexOf('aria-') === 0 || allowedAttributeNames.indexOf(attributeName) >= 0);
	    }, {}, Attributes);
	}
	exports.getNativeAttributes = getNativeAttributes;

/***/ },

/***/ 479:
/***/ function(module, exports) {

	"use strict";
	
	function assign(target) {
	    var args = [];
	    for (var _i = 1; _i < arguments.length; _i++) {
	        args[_i - 1] = arguments[_i];
	    }
	    return filteredAssign.apply(this, [null, target].concat(args));
	}
	exports.assign = assign;
	function filteredAssign(isAllowed, target) {
	    var args = [];
	    for (var _i = 2; _i < arguments.length; _i++) {
	        args[_i - 2] = arguments[_i];
	    }
	    target = target || {};
	    for (var _a = 0, args_1 = args; _a < args_1.length; _a++) {
	        var sourceObject = args_1[_a];
	        if (sourceObject) {
	            for (var attributeName in sourceObject) {
	                if (sourceObject.hasOwnProperty(attributeName) && !isAllowed || isAllowed(attributeName)) {
	                    target[attributeName] = sourceObject[attributeName];
	                }
	            }
	        }
	    }
	    return target;
	}
	exports.filteredAssign = filteredAssign;

/***/ },

/***/ 482:
/***/ function(module, exports) {

	/*
		MIT License http://www.opensource.org/licenses/mit-license.php
		Author Tobias Koppers @sokra
	*/
	// css base code, injected by the css-loader
	module.exports = function() {
		var list = [];
	
		// return the list of modules as css string
		list.toString = function toString() {
			var result = [];
			for(var i = 0; i < this.length; i++) {
				var item = this[i];
				if(item[2]) {
					result.push("@media " + item[2] + "{" + item[1] + "}");
				} else {
					result.push(item[1]);
				}
			}
			return result.join("");
		};
	
		// import a list of modules into the list
		list.i = function(modules, mediaQuery) {
			if(typeof modules === "string")
				modules = [[null, modules, ""]];
			var alreadyImportedModules = {};
			for(var i = 0; i < this.length; i++) {
				var id = this[i][0];
				if(typeof id === "number")
					alreadyImportedModules[id] = true;
			}
			for(i = 0; i < modules.length; i++) {
				var item = modules[i];
				// skip already imported module
				// this implementation is not 100% perfect for weird media query combinations
				//  when a module is imported multiple times with different media queries.
				//  I hope this will never occur (Hey this way we have smaller bundles)
				if(typeof item[0] !== "number" || !alreadyImportedModules[item[0]]) {
					if(mediaQuery && !item[2]) {
						item[2] = mediaQuery;
					} else if(mediaQuery) {
						item[2] = "(" + item[2] + ") and (" + mediaQuery + ")";
					}
					list.push(item);
				}
			}
		};
		return list;
	};


/***/ },

/***/ 483:
/***/ function(module, exports, __webpack_require__) {

	/*
		MIT License http://www.opensource.org/licenses/mit-license.php
		Author Tobias Koppers @sokra
	*/
	var stylesInDom = {},
		memoize = function(fn) {
			var memo;
			return function () {
				if (typeof memo === "undefined") memo = fn.apply(this, arguments);
				return memo;
			};
		},
		isOldIE = memoize(function() {
			return /msie [6-9]\b/.test(window.navigator.userAgent.toLowerCase());
		}),
		getHeadElement = memoize(function () {
			return document.head || document.getElementsByTagName("head")[0];
		}),
		singletonElement = null,
		singletonCounter = 0,
		styleElementsInsertedAtTop = [];
	
	module.exports = function(list, options) {
		if(false) {
			if(typeof document !== "object") throw new Error("The style-loader cannot be used in a non-browser environment");
		}
	
		options = options || {};
		// Force single-tag solution on IE6-9, which has a hard limit on the # of <style>
		// tags it will allow on a page
		if (typeof options.singleton === "undefined") options.singleton = isOldIE();
	
		// By default, add <style> tags to the bottom of <head>.
		if (typeof options.insertAt === "undefined") options.insertAt = "bottom";
	
		var styles = listToStyles(list);
		addStylesToDom(styles, options);
	
		return function update(newList) {
			var mayRemove = [];
			for(var i = 0; i < styles.length; i++) {
				var item = styles[i];
				var domStyle = stylesInDom[item.id];
				domStyle.refs--;
				mayRemove.push(domStyle);
			}
			if(newList) {
				var newStyles = listToStyles(newList);
				addStylesToDom(newStyles, options);
			}
			for(var i = 0; i < mayRemove.length; i++) {
				var domStyle = mayRemove[i];
				if(domStyle.refs === 0) {
					for(var j = 0; j < domStyle.parts.length; j++)
						domStyle.parts[j]();
					delete stylesInDom[domStyle.id];
				}
			}
		};
	}
	
	function addStylesToDom(styles, options) {
		for(var i = 0; i < styles.length; i++) {
			var item = styles[i];
			var domStyle = stylesInDom[item.id];
			if(domStyle) {
				domStyle.refs++;
				for(var j = 0; j < domStyle.parts.length; j++) {
					domStyle.parts[j](item.parts[j]);
				}
				for(; j < item.parts.length; j++) {
					domStyle.parts.push(addStyle(item.parts[j], options));
				}
			} else {
				var parts = [];
				for(var j = 0; j < item.parts.length; j++) {
					parts.push(addStyle(item.parts[j], options));
				}
				stylesInDom[item.id] = {id: item.id, refs: 1, parts: parts};
			}
		}
	}
	
	function listToStyles(list) {
		var styles = [];
		var newStyles = {};
		for(var i = 0; i < list.length; i++) {
			var item = list[i];
			var id = item[0];
			var css = item[1];
			var media = item[2];
			var sourceMap = item[3];
			var part = {css: css, media: media, sourceMap: sourceMap};
			if(!newStyles[id])
				styles.push(newStyles[id] = {id: id, parts: [part]});
			else
				newStyles[id].parts.push(part);
		}
		return styles;
	}
	
	function insertStyleElement(options, styleElement) {
		var head = getHeadElement();
		var lastStyleElementInsertedAtTop = styleElementsInsertedAtTop[styleElementsInsertedAtTop.length - 1];
		if (options.insertAt === "top") {
			if(!lastStyleElementInsertedAtTop) {
				head.insertBefore(styleElement, head.firstChild);
			} else if(lastStyleElementInsertedAtTop.nextSibling) {
				head.insertBefore(styleElement, lastStyleElementInsertedAtTop.nextSibling);
			} else {
				head.appendChild(styleElement);
			}
			styleElementsInsertedAtTop.push(styleElement);
		} else if (options.insertAt === "bottom") {
			head.appendChild(styleElement);
		} else {
			throw new Error("Invalid value for parameter 'insertAt'. Must be 'top' or 'bottom'.");
		}
	}
	
	function removeStyleElement(styleElement) {
		styleElement.parentNode.removeChild(styleElement);
		var idx = styleElementsInsertedAtTop.indexOf(styleElement);
		if(idx >= 0) {
			styleElementsInsertedAtTop.splice(idx, 1);
		}
	}
	
	function createStyleElement(options) {
		var styleElement = document.createElement("style");
		styleElement.type = "text/css";
		insertStyleElement(options, styleElement);
		return styleElement;
	}
	
	function createLinkElement(options) {
		var linkElement = document.createElement("link");
		linkElement.rel = "stylesheet";
		insertStyleElement(options, linkElement);
		return linkElement;
	}
	
	function addStyle(obj, options) {
		var styleElement, update, remove;
	
		if (options.singleton) {
			var styleIndex = singletonCounter++;
			styleElement = singletonElement || (singletonElement = createStyleElement(options));
			update = applyToSingletonTag.bind(null, styleElement, styleIndex, false);
			remove = applyToSingletonTag.bind(null, styleElement, styleIndex, true);
		} else if(obj.sourceMap &&
			typeof URL === "function" &&
			typeof URL.createObjectURL === "function" &&
			typeof URL.revokeObjectURL === "function" &&
			typeof Blob === "function" &&
			typeof btoa === "function") {
			styleElement = createLinkElement(options);
			update = updateLink.bind(null, styleElement);
			remove = function() {
				removeStyleElement(styleElement);
				if(styleElement.href)
					URL.revokeObjectURL(styleElement.href);
			};
		} else {
			styleElement = createStyleElement(options);
			update = applyToTag.bind(null, styleElement);
			remove = function() {
				removeStyleElement(styleElement);
			};
		}
	
		update(obj);
	
		return function updateStyle(newObj) {
			if(newObj) {
				if(newObj.css === obj.css && newObj.media === obj.media && newObj.sourceMap === obj.sourceMap)
					return;
				update(obj = newObj);
			} else {
				remove();
			}
		};
	}
	
	var replaceText = (function () {
		var textStore = [];
	
		return function (index, replacement) {
			textStore[index] = replacement;
			return textStore.filter(Boolean).join('\n');
		};
	})();
	
	function applyToSingletonTag(styleElement, index, remove, obj) {
		var css = remove ? "" : obj.css;
	
		if (styleElement.styleSheet) {
			styleElement.styleSheet.cssText = replaceText(index, css);
		} else {
			var cssNode = document.createTextNode(css);
			var childNodes = styleElement.childNodes;
			if (childNodes[index]) styleElement.removeChild(childNodes[index]);
			if (childNodes.length) {
				styleElement.insertBefore(cssNode, childNodes[index]);
			} else {
				styleElement.appendChild(cssNode);
			}
		}
	}
	
	function applyToTag(styleElement, obj) {
		var css = obj.css;
		var media = obj.media;
	
		if(media) {
			styleElement.setAttribute("media", media)
		}
	
		if(styleElement.styleSheet) {
			styleElement.styleSheet.cssText = css;
		} else {
			while(styleElement.firstChild) {
				styleElement.removeChild(styleElement.firstChild);
			}
			styleElement.appendChild(document.createTextNode(css));
		}
	}
	
	function updateLink(linkElement, obj) {
		var css = obj.css;
		var sourceMap = obj.sourceMap;
	
		if(sourceMap) {
			// http://stackoverflow.com/a/26603875
			css += "\n/*# sourceMappingURL=data:application/json;base64," + btoa(unescape(encodeURIComponent(JSON.stringify(sourceMap)))) + " */";
		}
	
		var blob = new Blob([css], { type: "text/css" });
	
		var oldSrc = linkElement.href;
	
		linkElement.href = URL.createObjectURL(blob);
	
		if(oldSrc)
			URL.revokeObjectURL(oldSrc);
	}


/***/ },

/***/ 489:
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

/***/ 491:
/***/ function(module, exports) {

	"use strict";
	
	(function (KeyCodes) {
	    KeyCodes[KeyCodes["a"] = 65] = "a";
	    KeyCodes[KeyCodes["backspace"] = 8] = "backspace";
	    KeyCodes[KeyCodes["comma"] = 188] = "comma";
	    KeyCodes[KeyCodes["del"] = 46] = "del";
	    KeyCodes[KeyCodes["down"] = 40] = "down";
	    KeyCodes[KeyCodes["end"] = 35] = "end";
	    KeyCodes[KeyCodes["enter"] = 13] = "enter";
	    KeyCodes[KeyCodes["escape"] = 27] = "escape";
	    KeyCodes[KeyCodes["home"] = 36] = "home";
	    KeyCodes[KeyCodes["left"] = 37] = "left";
	    KeyCodes[KeyCodes["pageDown"] = 34] = "pageDown";
	    KeyCodes[KeyCodes["pageUp"] = 33] = "pageUp";
	    KeyCodes[KeyCodes["right"] = 39] = "right";
	    KeyCodes[KeyCodes["semicolon"] = 186] = "semicolon";
	    KeyCodes[KeyCodes["space"] = 32] = "space";
	    KeyCodes[KeyCodes["tab"] = 9] = "tab";
	    KeyCodes[KeyCodes["up"] = 38] = "up";
	})(exports.KeyCodes || (exports.KeyCodes = {}));
	var KeyCodes = exports.KeyCodes;

/***/ },

/***/ 493:
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

/***/ 558:
/***/ function(module, exports, __webpack_require__) {

	"use strict";
	
	var React = __webpack_require__(299);
	var classNames = __webpack_require__(476);
	var attributes_1 = __webpack_require__(478);
	__webpack_require__(559);
	var Label = function (_super) {
	    __extends(Label, _super);
	    function Label(props) {
	        _super.call(this, props);
	    }
	    Label.prototype.render = function () {
	        var _a = this.props,
	            disabled = _a.disabled,
	            required = _a.required,
	            children = _a.children;
	        var className = classNames('label', [this.props.className], {
	            'label-disabled': disabled,
	            'label-required': required
	        });
	        return React.createElement("label", __assign({}, attributes_1.getNativeAttributes(this.props, attributes_1.divAttributes), { className: className }), children);
	    };
	    return Label;
	}(React.Component);
	exports.Label = Label;

/***/ },

/***/ 559:
/***/ function(module, exports, __webpack_require__) {

	// style-loader: Adds some css to the DOM by adding a <style> tag
	
	// load the styles
	var content = __webpack_require__(560);
	if(typeof content === 'string') content = [[module.id, content, '']];
	// add the styles to the DOM
	var update = __webpack_require__(483)(content, {});
	if(content.locals) module.exports = content.locals;
	// Hot Module Replacement
	if(false) {
		// When the styles change, update the <style> tags
		if(!content.locals) {
			module.hot.accept("!!../../../node_modules/css-loader/index.js!../../../node_modules/sass-loader/index.js?outputStyle=expanded!./Label.scss", function() {
				var newContent = require("!!../../../node_modules/css-loader/index.js!../../../node_modules/sass-loader/index.js?outputStyle=expanded!./Label.scss");
				if(typeof newContent === 'string') newContent = [[module.id, newContent, '']];
				update(newContent);
			});
		}
		// When the module is disposed, remove the <style> tags
		module.hot.dispose(function() { update(); });
	}

/***/ },

/***/ 560:
/***/ function(module, exports, __webpack_require__) {

	exports = module.exports = __webpack_require__(482)();
	// imports
	
	
	// module
	exports.push([module.id, "::-webkit-scrollbar {\n  width: 13px;\n  margin-top: 10px;\n  border-radius: 15px;\n  margin-right: 3px;\n  background: transparent;\n}\n\n::-webkit-scrollbar-track {\n  border-radius: 15px;\n  margin-top: 7px;\n  background: #EEEFF4;\n  margin-bottom: 7px;\n}\n\n::-webkit-scrollbar-thumb {\n  border-radius: 10px;\n  margin-top: 10px;\n  background: #D2D3D9;\n}\n\n::-webkit-scrollbar-thumb:window-inactive {\n  background: #D2D3D9;\n}\n\n.label {\n  font-family: \"Segoe UI WestEuropean\", \"Segoe UI\", -apple-system, BlinkMacSystemFont, Roboto, \"Helvetica Neue\", sans-serif;\n  font-size: 14px;\n  color: #333333;\n  box-sizing: border-box;\n  display: block;\n  padding: 5px 0;\n}\n\n.label.label-required::after {\n  content: ' *';\n  color: #a80000;\n}\n\n.label.label-disabled {\n  color: #a6a6a6;\n}\n", ""]);
	
	// exports


/***/ },

/***/ 597:
/***/ function(module, exports, __webpack_require__) {

	"use strict";
	
	var React = __webpack_require__(299);
	var classNames = __webpack_require__(476);
	var autobind_1 = __webpack_require__(493);
	var KeyCodes_1 = __webpack_require__(491);
	var Async_1 = __webpack_require__(598);
	var getId_1 = __webpack_require__(489);
	var Label_1 = __webpack_require__(558);
	var attributes_1 = __webpack_require__(478);
	__webpack_require__(599);
	var TextField = function (_super) {
	    __extends(TextField, _super);
	    function TextField(props) {
	        _super.call(this, props);
	        this._id = getId_1.getId('textField');
	        this._descriptionId = getId_1.getId('textFieldDescription');
	        this._async = new Async_1.Async(this);
	        this.state = {
	            value: props.value || props.defaultValue || '',
	            isFocused: false,
	            errorMessage: ''
	        };
	        this._onInputChange = this._onInputChange.bind(this);
	        this._onFocus = this._onFocus.bind(this);
	        this._onBlur = this._onBlur.bind(this);
	        this._delayedValidate = this._async.debounce(this._validate, this.props.deferredValidationTime);
	        this._lastValidation = 0;
	        this._willMountTriggerValidation = false;
	    }
	    Object.defineProperty(TextField.prototype, "value", {
	        /**
	        * Gets the current value of the text field.
	        */
	        get: function () {
	            return this.state.value;
	        },
	        enumerable: true,
	        configurable: true
	    });
	    TextField.prototype.componentWillMount = function () {
	        this._willMountTriggerValidation = true;
	        this._validate(this.state.value);
	    };
	    TextField.prototype.componentDidMount = function () {
	        this._isMounted = true;
	    };
	    TextField.prototype.componentWillReceiveProps = function (newProps) {
	        var onBeforeChange = this.props.onBeforeChange;
	        if (newProps.value !== undefined && newProps.value !== this.state.value) {
	            if (onBeforeChange) {
	                onBeforeChange(newProps.value);
	            }
	            this.setState({
	                value: newProps.value,
	                errorMessage: ''
	            });
	            this._delayedValidate(newProps.value);
	        }
	    };
	    TextField.prototype.componentWillUnmount = function () {
	        this._async.dispose();
	        this._isMounted = false;
	    };
	    TextField.prototype.render = function () {
	        var _a = this.props,
	            disabled = _a.disabled,
	            required = _a.required,
	            multiline = _a.multiline,
	            underlined = _a.underlined,
	            label = _a.label,
	            description = _a.description,
	            iconClass = _a.iconClass,
	            className = _a.className;
	        var isFocused = this.state.isFocused;
	        var errorMessage = this._errorMessage;
	        var textFieldClassName = classNames('text-field', {
	            'is-required': required,
	            'is-disabled': disabled,
	            'is-active': isFocused,
	            'text-field-multiline': multiline,
	            'text-field-underlined': underlined
	        }, [this.props.className]);
	        return React.createElement("div", { className: textFieldClassName }, label && React.createElement(Label_1.Label, { htmlFor: this._id }, label), iconClass && React.createElement("i", { className: iconClass }), multiline ? this._renderTextArea() : this._renderInput(), errorMessage && React.createElement("div", { className: 'screenReaderOnly' }, errorMessage), (description || errorMessage) && React.createElement("span", { id: this._descriptionId }, description && React.createElement("span", { className: 'textField-description' }, description), errorMessage && React.createElement("p", { className: 'textField-errorMessage slideDownIn20' }, errorMessage)));
	    };
	    /**
	    * Sets focus on the text field
	    */
	    TextField.prototype.focus = function () {
	        if (this._field) {
	            this._field.focus();
	        }
	    };
	    /**
	    * Selects the text field
	    */
	    TextField.prototype.select = function () {
	        if (this._field) {
	            this._field.select();
	        }
	    };
	    /**
	    * Sets the selection start of the text field to a specified value
	    */
	    TextField.prototype.setSelectionStart = function (value) {
	        if (this._field) {
	            this._field.selectionStart = value;
	        }
	    };
	    /**
	    * Sets the selection end of the text field to a specified value
	    */
	    TextField.prototype.setSelectionEnd = function (value) {
	        if (this._field) {
	            this._field.selectionEnd = value;
	        }
	    };
	    TextField.prototype._onInputChange = function (event) {
	        var element = event.target;
	        var value = element.value;
	        this.setState({
	            value: value,
	            errorMessage: ''
	        });
	        this._willMountTriggerValidation = false;
	        this._delayedValidate(value);
	        var onBeforeChange = this.props.onBeforeChange;
	        onBeforeChange(value);
	    };
	    TextField.prototype._onFocus = function (ev) {
	        if (this.props.onFocus) {
	            this.props.onFocus(ev);
	        }
	        this.setState({
	            isFocused: true
	        });
	    };
	    TextField.prototype._onBlur = function (ev) {
	        if (this.props.onBlur) {
	            this.props.onBlur(ev);
	        }
	        this.setState({
	            isFocused: false
	        });
	    };
	    TextField.prototype._validate = function (value) {
	        var _this = this;
	        if (this._latestValidateValue === value) {
	            return;
	        }
	        this._latestValidateValue = value;
	        var onGetErrorMessage = this.props.onGetErrorMessage;
	        var result = onGetErrorMessage(value || '');
	        if (result !== undefined) {
	            if (typeof result === 'string') {
	                this.setState({
	                    errorMessage: result
	                });
	                this._notifyAfterValidate(value, result);
	            } else {
	                var currentValidation_1 = ++this._lastValidation;
	                result.then(function (errorMessage) {
	                    if (_this._isMounted && currentValidation_1 === _this._lastValidation) {
	                        _this.setState({
	                            errorMessage: errorMessage
	                        });
	                    }
	                    _this._notifyAfterValidate(value, errorMessage);
	                });
	            }
	        } else {
	            this._notifyAfterValidate(value, '');
	        }
	    };
	    TextField.prototype._notifyAfterValidate = function (value, errorMessage) {
	        if (!this._willMountTriggerValidation && value === this.state.value) {
	            var onNotifyValidationResult = this.props.onNotifyValidationResult;
	            onNotifyValidationResult(errorMessage, value);
	            if (!errorMessage) {
	                var onChanged = this.props.onChanged;
	                onChanged(value);
	            }
	        } else {
	            this._willMountTriggerValidation = false;
	        }
	    };
	    Object.defineProperty(TextField.prototype, "_errorMessage", {
	        get: function () {
	            var errorMessage = this.state.errorMessage;
	            if (!errorMessage) {
	                errorMessage = this.props.errorMessage;
	            }
	            return errorMessage;
	        },
	        enumerable: true,
	        configurable: true
	    });
	    Object.defineProperty(TextField.prototype, "_fieldClassName", {
	        get: function () {
	            var errorMessage = this._errorMessage;
	            var textFieldClassName;
	            if (this.props.multiline && !this.props.resizable) {
	                textFieldClassName = 'textField-field textField-field-unresizable';
	            } else {
	                textFieldClassName = 'textField-field';
	            }
	            return classNames(textFieldClassName, this.props.inputClassName, {
	                'textField-invalid': !!errorMessage
	            });
	        },
	        enumerable: true,
	        configurable: true
	    });
	    TextField.prototype._renderTextArea = function () {
	        var _this = this;
	        var textAreaProps = attributes_1.getNativeAttributes(this.props, attributes_1.textAreaAttributes, ['defaultValue']);
	        return React.createElement("textarea", __assign({}, textAreaProps, { id: this._id, ref: function (c) {
	                return _this._field = c;
	            }, value: this.state.value, onChange: this._onInputChange, onKeyUp: this._onEnterClick, className: this._fieldClassName, onFocus: this._onFocus, onBlur: this._onBlur }));
	    };
	    TextField.prototype._renderInput = function () {
	        var _this = this;
	        var inputProps = attributes_1.getNativeAttributes(this.props, attributes_1.inputAttributes, ['defaultValue']);
	        return React.createElement("input", __assign({ type: 'text' }, inputProps, { id: this._id, ref: function (c) {
	                return _this._field = c;
	            }, value: this.state.value, onChange: this._onInputChange, onKeyUp: this._onEnterClick, className: this._fieldClassName, onFocus: this._onFocus, onBlur: this._onBlur }));
	    };
	    TextField.prototype._onEnterClick = function (ev) {
	        var onEnterClick = this.props.onEnterClick;
	        if (onEnterClick !== undefined) {
	            switch (ev.which) {
	                case KeyCodes_1.KeyCodes.enter:
	                    onEnterClick(this.state.value);
	                    break;
	                default:
	                    return;
	            }
	        }
	        // We only get here if the keypress has been handled.
	        ev.preventDefault();
	        ev.stopPropagation();
	    };
	    TextField.defaultProps = {
	        multiline: false,
	        resizable: true,
	        underlined: false,
	        onChanged: function () {},
	        onBeforeChange: function () {},
	        onNotifyValidationResult: function () {},
	        onGetErrorMessage: function () {
	            return undefined;
	        },
	        onEnterClick: function () {},
	        deferredValidationTime: 200,
	        errorMessage: ''
	    };
	    __decorate([autobind_1.autobind, __metadata('design:type', Function), __metadata('design:paramtypes', [Object]), __metadata('design:returntype', void 0)], TextField.prototype, "_onEnterClick", null);
	    return TextField;
	}(React.Component);
	exports.TextField = TextField;

/***/ },

/***/ 598:
/***/ function(module, exports) {

	/**
	 * Bugs often appear in async code when stuff gets disposed, but async operations don't get canceled.
	 * This Async helper class solves these issues by tying async code to the lifetime of a disposable object.
	 *
	 * Usage: Anything class extending from BaseModel can access this helper via this.async. Otherwise create a
	 * new instance of the class and remember to call dispose() during your code's dispose handler.
	 */
	"use strict";
	
	var Async = function () {
	    function Async(parent, onError) {
	        this._timeoutIds = null;
	        this._immediateIds = null;
	        this._intervalIds = null;
	        this._animationFrameIds = null;
	        this._isDisposed = false;
	        this._parent = parent || null;
	        this._onErrorHandler = onError;
	        this._noop = function () {};
	    }
	    /**
	     * Dispose function, clears all async operations.
	     */
	    Async.prototype.dispose = function () {
	        var id;
	        this._isDisposed = true;
	        this._parent = null;
	        // Clear timeouts.
	        if (this._timeoutIds) {
	            for (id in this._timeoutIds) {
	                if (this._timeoutIds.hasOwnProperty(id)) {
	                    this.clearTimeout(id);
	                }
	            }
	            this._timeoutIds = null;
	        }
	        // Clear immediates.
	        if (this._immediateIds) {
	            for (id in this._immediateIds) {
	                if (this._immediateIds.hasOwnProperty(id)) {
	                    this.clearImmediate(id);
	                }
	            }
	            this._immediateIds = null;
	        }
	        // Clear intervals.
	        if (this._intervalIds) {
	            for (id in this._intervalIds) {
	                if (this._intervalIds.hasOwnProperty(id)) {
	                    this.clearInterval(id);
	                }
	            }
	            this._intervalIds = null;
	        }
	        // Clear animation frames.
	        if (this._animationFrameIds) {
	            for (id in this._animationFrameIds) {
	                if (this._animationFrameIds.hasOwnProperty(id)) {
	                    this.cancelAnimationFrame(id);
	                }
	            }
	            this._animationFrameIds = null;
	        }
	    };
	    /**
	     * SetTimeout override, which will auto cancel the timeout during dispose.
	     * @param callback Callback to execute.
	     * @param duration Duration in milliseconds.
	     * @return The setTimeout id.
	     */
	    Async.prototype.setTimeout = function (callback, duration) {
	        var _this = this;
	        var timeoutId = 0;
	        if (!this._isDisposed) {
	            if (!this._timeoutIds) {
	                this._timeoutIds = {};
	            }
	            /* tslint:disable:ban-native-functions */
	            timeoutId = setTimeout(function () {
	                // Time to execute the timeout, enqueue it as a foreground task to be executed.
	                try {
	                    // Now delete the record and call the callback.
	                    delete _this._timeoutIds[timeoutId];
	                    callback.apply(_this._parent);
	                } catch (e) {
	                    if (_this._onErrorHandler) {
	                        _this._onErrorHandler(e);
	                    }
	                }
	            }, duration);
	            /* tslint:enable:ban-native-functions */
	            this._timeoutIds[timeoutId] = true;
	        }
	        return timeoutId;
	    };
	    /**
	     * Clears the timeout.
	     * @param id Id to cancel.
	     */
	    Async.prototype.clearTimeout = function (id) {
	        if (this._timeoutIds && this._timeoutIds[id]) {
	            /* tslint:disable:ban-native-functions */
	            clearTimeout(id);
	            delete this._timeoutIds[id];
	        }
	    };
	    /**
	     * SetImmediate override, which will auto cancel the immediate during dispose.
	     * @param callback Callback to execute.
	     * @return The setTimeout id.
	     */
	    Async.prototype.setImmediate = function (callback) {
	        var _this = this;
	        var immediateId = 0;
	        if (!this._isDisposed) {
	            if (!this._immediateIds) {
	                this._immediateIds = {};
	            }
	            /* tslint:disable:ban-native-functions */
	            var setImmediateCallback = function () {
	                // Time to execute the timeout, enqueue it as a foreground task to be executed.
	                try {
	                    // Now delete the record and call the callback.
	                    delete _this._immediateIds[immediateId];
	                    callback.apply(_this._parent);
	                } catch (e) {
	                    _this._logError(e);
	                }
	            };
	            immediateId = window.setImmediate ? window.setImmediate(setImmediateCallback) : window.setTimeout(setImmediateCallback, 0);
	            /* tslint:enable:ban-native-functions */
	            this._immediateIds[immediateId] = true;
	        }
	        return immediateId;
	    };
	    /**
	     * Clears the immediate.
	     * @param id Id to cancel.
	     */
	    Async.prototype.clearImmediate = function (id) {
	        if (this._immediateIds && this._immediateIds[id]) {
	            /* tslint:disable:ban-native-functions */
	            window.clearImmediate ? window.clearImmediate(id) : window.clearTimeout(id);
	            delete this._immediateIds[id];
	        }
	    };
	    /**
	     * SetInterval override, which will auto cancel the timeout during dispose.
	     * @param callback Callback to execute.
	     * @param duration Duration in milliseconds.
	     * @return The setTimeout id.
	     */
	    Async.prototype.setInterval = function (callback, duration) {
	        var _this = this;
	        var intervalId = 0;
	        if (!this._isDisposed) {
	            if (!this._intervalIds) {
	                this._intervalIds = {};
	            }
	            /* tslint:disable:ban-native-functions */
	            intervalId = setInterval(function () {
	                // Time to execute the interval callback, enqueue it as a foreground task to be executed.
	                try {
	                    callback.apply(_this._parent);
	                } catch (e) {
	                    _this._logError(e);
	                }
	            }, duration);
	            /* tslint:enable:ban-native-functions */
	            this._intervalIds[intervalId] = true;
	        }
	        return intervalId;
	    };
	    /**
	     * Clears the interval.
	     * @param id Id to cancel.
	     */
	    Async.prototype.clearInterval = function (id) {
	        if (this._intervalIds && this._intervalIds[id]) {
	            /* tslint:disable:ban-native-functions */
	            clearInterval(id);
	            delete this._intervalIds[id];
	        }
	    };
	    /**
	     * Creates a function that, when executed, will only call the func function at most once per
	     * every wait milliseconds. Provide an options object to indicate that func should be invoked
	     * on the leading and/or trailing edge of the wait timeout. Subsequent calls to the throttled
	     * function will return the result of the last func call.
	     *
	     * Note: If leading and trailing options are true func will be called on the trailing edge of
	     * the timeout only if the the throttled function is invoked more than once during the wait timeout.
	     *
	     * @param func The function to throttle.
	     * @param wait The number of milliseconds to throttle executions to. Defaults to 0.
	     * @param options The options object.
	     * @param options.leading Specify execution on the leading edge of the timeout.
	     * @param options.trailing Specify execution on the trailing edge of the timeout.
	     * @return The new throttled function.
	     */
	    Async.prototype.throttle = function (func, wait, options) {
	        var _this = this;
	        if (this._isDisposed) {
	            return this._noop;
	        }
	        var waitMS = wait || 0;
	        var leading = true;
	        var trailing = true;
	        var lastExecuteTime = 0;
	        var lastResult;
	        var lastArgs;
	        var timeoutId = null;
	        if (options && typeof options.leading === 'boolean') {
	            leading = options.leading;
	        }
	        if (options && typeof options.trailing === 'boolean') {
	            trailing = options.trailing;
	        }
	        var callback = function (userCall) {
	            var now = new Date().getTime();
	            var delta = now - lastExecuteTime;
	            var waitLength = leading ? waitMS - delta : waitMS;
	            if (delta >= waitMS && (!userCall || leading)) {
	                lastExecuteTime = now;
	                if (timeoutId) {
	                    _this.clearTimeout(timeoutId);
	                    timeoutId = null;
	                }
	                lastResult = func.apply(_this._parent, lastArgs);
	            } else if (timeoutId === null && trailing) {
	                timeoutId = _this.setTimeout(callback, waitLength);
	            }
	            return lastResult;
	        };
	        var resultFunction = function () {
	            var args = [];
	            for (var _i = 0; _i < arguments.length; _i++) {
	                args[_i - 0] = arguments[_i];
	            }
	            lastArgs = args;
	            return callback(true);
	        };
	        return resultFunction;
	    };
	    /**
	     * Creates a function that will delay the execution of func until after wait milliseconds have
	     * elapsed since the last time it was invoked. Provide an options object to indicate that func
	     * should be invoked on the leading and/or trailing edge of the wait timeout. Subsequent calls
	     * to the debounced function will return the result of the last func call.
	     *
	     * Note: If leading and trailing options are true func will be called on the trailing edge of
	     * the timeout only if the the debounced function is invoked more than once during the wait
	     * timeout.
	     *
	     * @param func The function to debounce.
	     * @param wait The number of milliseconds to delay.
	     * @param options The options object.
	     * @param options.leading Specify execution on the leading edge of the timeout.
	     * @param options.maxWait The maximum time func is allowed to be delayed before it's called.
	     * @param options.trailing Specify execution on the trailing edge of the timeout.
	     * @return The new debounced function.
	     */
	    Async.prototype.debounce = function (func, wait, options) {
	        var _this = this;
	        if (this._isDisposed) {
	            return this._noop;
	        }
	        var waitMS = wait || 0;
	        var leading = false;
	        var trailing = true;
	        var maxWait = null;
	        var lastCallTime = 0;
	        var lastExecuteTime = new Date().getTime();
	        var lastResult;
	        var lastArgs;
	        var timeoutId = null;
	        if (options && typeof options.leading === 'boolean') {
	            leading = options.leading;
	        }
	        if (options && typeof options.trailing === 'boolean') {
	            trailing = options.trailing;
	        }
	        if (options && typeof options.maxWait === 'number' && !isNaN(options.maxWait)) {
	            maxWait = options.maxWait;
	        }
	        var callback = function (userCall) {
	            var now = new Date().getTime();
	            var executeImmediately = false;
	            if (userCall) {
	                if (leading && now - lastCallTime >= waitMS) {
	                    executeImmediately = true;
	                }
	                lastCallTime = now;
	            }
	            var delta = now - lastCallTime;
	            var waitLength = waitMS - delta;
	            var maxWaitDelta = now - lastExecuteTime;
	            var maxWaitExpired = false;
	            if (maxWait !== null) {
	                // maxWait only matters when there is a pending callback
	                if (maxWaitDelta >= maxWait && timeoutId) {
	                    maxWaitExpired = true;
	                } else {
	                    waitLength = Math.min(waitLength, maxWait - maxWaitDelta);
	                }
	            }
	            if (delta >= waitMS || maxWaitExpired || executeImmediately) {
	                if (timeoutId) {
	                    _this.clearTimeout(timeoutId);
	                    timeoutId = null;
	                }
	                lastExecuteTime = now;
	                lastResult = func.apply(_this._parent, lastArgs);
	            } else if ((timeoutId === null || !userCall) && trailing) {
	                timeoutId = _this.setTimeout(callback, waitLength);
	            }
	            return lastResult;
	        };
	        var resultFunction = function () {
	            var args = [];
	            for (var _i = 0; _i < arguments.length; _i++) {
	                args[_i - 0] = arguments[_i];
	            }
	            lastArgs = args;
	            return callback(true);
	        };
	        return resultFunction;
	    };
	    Async.prototype.requestAnimationFrame = function (callback) {
	        var _this = this;
	        var animationFrameId = 0;
	        if (!this._isDisposed) {
	            if (!this._animationFrameIds) {
	                this._animationFrameIds = {};
	            }
	            /* tslint:disable:ban-native-functions */
	            var animationFrameCallback = function () {
	                try {
	                    // Now delete the record and call the callback.
	                    delete _this._animationFrameIds[animationFrameId];
	                    callback.apply(_this._parent);
	                } catch (e) {
	                    _this._logError(e);
	                }
	            };
	            animationFrameId = window.requestAnimationFrame ? window.requestAnimationFrame(animationFrameCallback) : window.setTimeout(animationFrameCallback, 0);
	            /* tslint:enable:ban-native-functions */
	            this._animationFrameIds[animationFrameId] = true;
	        }
	        return animationFrameId;
	    };
	    Async.prototype.cancelAnimationFrame = function (id) {
	        if (this._animationFrameIds && this._animationFrameIds[id]) {
	            /* tslint:disable:ban-native-functions */
	            window.cancelAnimationFrame ? window.cancelAnimationFrame(id) : window.clearTimeout(id);
	            /* tslint:enable:ban-native-functions */
	            delete this._animationFrameIds[id];
	        }
	    };
	    Async.prototype._logError = function (e) {
	        if (this._onErrorHandler) {
	            this._onErrorHandler(e);
	        }
	    };
	    return Async;
	}();
	exports.Async = Async;

/***/ },

/***/ 599:
/***/ function(module, exports, __webpack_require__) {

	// style-loader: Adds some css to the DOM by adding a <style> tag
	
	// load the styles
	var content = __webpack_require__(600);
	if(typeof content === 'string') content = [[module.id, content, '']];
	// add the styles to the DOM
	var update = __webpack_require__(483)(content, {});
	if(content.locals) module.exports = content.locals;
	// Hot Module Replacement
	if(false) {
		// When the styles change, update the <style> tags
		if(!content.locals) {
			module.hot.accept("!!../../../node_modules/css-loader/index.js!../../../node_modules/sass-loader/index.js?outputStyle=expanded!./TextField.scss", function() {
				var newContent = require("!!../../../node_modules/css-loader/index.js!../../../node_modules/sass-loader/index.js?outputStyle=expanded!./TextField.scss");
				if(typeof newContent === 'string') newContent = [[module.id, newContent, '']];
				update(newContent);
			});
		}
		// When the module is disposed, remove the <style> tags
		module.hot.dispose(function() { update(); });
	}

/***/ },

/***/ 600:
/***/ function(module, exports, __webpack_require__) {

	exports = module.exports = __webpack_require__(482)();
	// imports
	
	
	// module
	exports.push([module.id, "::-webkit-scrollbar {\n  width: 13px;\n  margin-top: 10px;\n  border-radius: 15px;\n  margin-right: 3px;\n  background: transparent;\n}\n\n::-webkit-scrollbar-track {\n  border-radius: 15px;\n  margin-top: 7px;\n  background: #EEEFF4;\n  margin-bottom: 7px;\n}\n\n::-webkit-scrollbar-thumb {\n  border-radius: 10px;\n  margin-top: 10px;\n  background: #D2D3D9;\n}\n\n::-webkit-scrollbar-thumb:window-inactive {\n  background: #D2D3D9;\n}\n\n::-webkit-scrollbar {\n  width: 13px;\n  margin-top: 10px;\n  border-radius: 15px;\n  margin-right: 3px;\n  background: transparent;\n}\n\n::-webkit-scrollbar-track {\n  border-radius: 15px;\n  margin-top: 7px;\n  background: #EEEFF4;\n  margin-bottom: 7px;\n}\n\n::-webkit-scrollbar-thumb {\n  border-radius: 10px;\n  margin-top: 10px;\n  background: #D2D3D9;\n}\n\n::-webkit-scrollbar-thumb:window-inactive {\n  background: #D2D3D9;\n}\n\n.label {\n  font-family: \"Segoe UI WestEuropean\", \"Segoe UI\", -apple-system, BlinkMacSystemFont, Roboto, \"Helvetica Neue\", sans-serif;\n  font-size: 14px;\n  color: #333333;\n  box-sizing: border-box;\n  display: block;\n  padding: 5px 0;\n}\n\n.label.label-required::after {\n  content: ' *';\n  color: #a80000;\n}\n\n.label.label-disabled {\n  color: #a6a6a6;\n}\n\n.text-field {\n  font-family: \"Segoe UI WestEuropean\",\"Segoe UI\",-apple-system,BlinkMacSystemFont,Roboto,\"Helvetica Neue\",sans-serif;\n  -webkit-font-smoothing: antialiased;\n  box-sizing: border-box;\n  margin: 0;\n  padding: 0;\n  box-shadow: none;\n  color: #333333;\n  font-size: 14px;\n  font-weight: 400;\n  margin-bottom: 8px;\n}\n\n.text-field .label {\n  font-size: 14px;\n  font-weight: 400;\n}\n\n.text-field.is-disabled .textField-field {\n  background-color: #f4f4f4;\n  border-color: #f4f4f4;\n  pointer-events: none;\n  cursor: default;\n}\n\n.text-field.is-required .label::after {\n  content: ' *';\n  color: #a80000;\n}\n\n.text-field.is-active {\n  border-color: #0078d7;\n}\n\n.textField-field {\n  font-family: \"Segoe UI WestEuropean\",\"Segoe UI\",-apple-system,BlinkMacSystemFont,Roboto,\"Helvetica Neue\",sans-serif;\n  -webkit-font-smoothing: antialiased;\n  box-sizing: border-box;\n  margin: 0;\n  padding: 0;\n  box-shadow: none;\n  border: 1px solid #c8c8c8;\n  border-radius: 0;\n  font-weight: font-weight-regular;\n  font-size: 14px;\n  color: #333333;\n  padding: 6px 12px 7px 12px;\n  width: 100%;\n  outline: 0;\n  text-overflow: ellipsis;\n}\n\n.textField-field:hover {\n  border-color: #767676;\n}\n\n.textField-field:focus {\n  border-color: #0078d7;\n}\n\n.textField-field[disabled] {\n  background-color: #f4f4f4;\n  border-color: #f4f4f4;\n  pointer-events: none;\n  cursor: default;\n}\n\n.textField-description {\n  color: #767676;\n  font-size: 12px;\n}\n\n.text-field.textField--underlined {\n  border-bottom: 1px solid #c8c8c8;\n  display: table;\n  width: 100%;\n}\n\n.text-field.textField--underlined:hover {\n  border-color: #767676;\n}\n\n.text-field.textField--underlined:active, .text-field.textField--underlined:focus {\n  border-color: #0078d7;\n}\n\n.text-field.textField--underlined .label {\n  font-size: 14px;\n  margin-right: 8px;\n  display: table-cell;\n  vertical-align: top;\n  padding-left: 12px;\n  padding-top: 9px;\n  height: 32px;\n  width: 1%;\n  white-space: nowrap;\n}\n\n.text-field.textField--underlined .textField-field {\n  border: 0;\n  float: left;\n  display: table-cell;\n  text-align: left;\n  padding-top: 8px;\n  padding-bottom: 3px;\n}\n\n.text-field.textField--underlined .textField-field:active, .text-field.textField--underlined .textField-field:focus, .text-field.textField--underlined .textField-field:hover {\n  outline: 0;\n}\n\n.text-field.textField--underlined.is-disabled {\n  border-bottom-color: #eaeaea;\n}\n\n.text-field.textField--underlined.is-disabled .label {\n  color: #a6a6a6;\n}\n\n.text-field.textField--underlined.is-disabled .ms-TextField-field {\n  background-color: transparent;\n  color: #a6a6a6;\n}\n\n.text-field.textField--underlined.is-active {\n  border-color: #0078d7;\n}\n\n.text-feld.textField-multiline .textField-field {\n  font-family: \"Segoe UI WestEuropean\",\"Segoe UI\",-apple-system,BlinkMacSystemFont,Roboto,\"Helvetica Neue\",sans-serif;\n  -webkit-font-smoothing: antialiased;\n  color: #333333;\n  font-size: 14px;\n  font-weight: 400;\n  line-height: 17px;\n  min-height: 60px;\n  padding-top: 6px;\n  overflow: auto;\n}\n\n.textField-errorMessage {\n  font-family: \"Segoe UI WestEuropean\",\"Segoe UI\",-apple-system,BlinkMacSystemFont,Roboto,\"Helvetica Neue\",sans-serif;\n  -webkit-font-smoothing: antialiased;\n  font-size: 12px;\n  font-weight: 400;\n  color: #a80000;\n  margin: 0;\n  padding-top: 5px;\n}\n\n.textField-invalid,\n.textField-invalid:focus,\n.textField-invalid:hover {\n  border-color: #a80000;\n}\n\n.screenReaderOnly {\n  position: absolute;\n  text-indent: -9999px;\n  width: 1px;\n  height: 1px;\n  padding: 0;\n  margin: -1px;\n  overflow: hidden;\n  border: 0;\n}\n\n.text-field.textField-underlined .label {\n  padding-left: 12px;\n  padding-right: 0;\n}\n\n.text-field.textField-underlined .textField-field {\n  text-align: left;\n}\n\n.text-field.text-field-multiline .textField-field.textField-field-unresizable {\n  resize: none;\n}\n\n.textField-hidden {\n  display: none;\n}\n", ""]);
	
	// exports


/***/ }

});
//# sourceMappingURL=TextField.6b09275fc1b677367a78.js.map