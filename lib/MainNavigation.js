webpackJsonp([17],{

/***/ 0:
/***/ function(module, exports, __webpack_require__) {

	"use strict";
	/* tslint:disable:no-console */
	
	__webpack_require__(1);
	__webpack_require__(298);
	var React = __webpack_require__(299);
	var ReactDOM = __webpack_require__(329);
	var MainNavigation_1 = __webpack_require__(650);
	var Icon_1 = __webpack_require__(480);
	var Index = function (_super) {
	    __extends(Index, _super);
	    function Index() {
	        _super.apply(this, arguments);
	    }
	    Index.prototype.render = function () {
	        return React.createElement("div", null, React.createElement(MainNavigation_1.MainNavigation, { id: 'mainNavigation', logo: 'icon-logo' }, React.createElement(Icon_1.Icon, { iconName: 'icon-buy' })));
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

/***/ 480:
/***/ function(module, exports, __webpack_require__) {

	"use strict";
	
	var React = __webpack_require__(299);
	var classNames = __webpack_require__(476);
	var attributes_1 = __webpack_require__(478);
	__webpack_require__(481);
	exports.Icon = function (props) {
	    var size = props.size;
	    var customIcon = props.iconName === '';
	    var iconClass = props.iconName;
	    var iconClassName = classNames(['icon'], (_a = {}, _a[props.iconName] = !customIcon, _a), [props.className]);
	    return React.createElement("i", __assign({}, attributes_1.getNativeAttributes(props, attributes_1.htmlElementAttributes), { className: iconClassName }));
	    var _a;
	};

/***/ },

/***/ 481:
/***/ function(module, exports, __webpack_require__) {

	// style-loader: Adds some css to the DOM by adding a <style> tag
	
	// load the styles
	var content = __webpack_require__(482);
	if(typeof content === 'string') content = [[module.id, content, '']];
	// add the styles to the DOM
	var update = __webpack_require__(484)(content, {});
	if(content.locals) module.exports = content.locals;
	// Hot Module Replacement
	if(false) {
		// When the styles change, update the <style> tags
		if(!content.locals) {
			module.hot.accept("!!../../../node_modules/css-loader/index.js!../../../node_modules/sass-loader/index.js?outputStyle=expanded!./Icon.scss", function() {
				var newContent = require("!!../../../node_modules/css-loader/index.js!../../../node_modules/sass-loader/index.js?outputStyle=expanded!./Icon.scss");
				if(typeof newContent === 'string') newContent = [[module.id, newContent, '']];
				update(newContent);
			});
		}
		// When the module is disposed, remove the <style> tags
		module.hot.dispose(function() { update(); });
	}

/***/ },

/***/ 482:
/***/ function(module, exports, __webpack_require__) {

	exports = module.exports = __webpack_require__(483)();
	// imports
	
	
	// module
	exports.push([module.id, "::-webkit-scrollbar {\n  width: 13px;\n  margin-top: 10px;\n  border-radius: 15px;\n  margin-right: 3px;\n  background: transparent;\n}\n\n::-webkit-scrollbar-track {\n  border-radius: 15px;\n  margin-top: 7px;\n  background: #EEEFF4;\n  margin-bottom: 7px;\n}\n\n::-webkit-scrollbar-thumb {\n  border-radius: 10px;\n  margin-top: 10px;\n  background: #D2D3D9;\n}\n\n::-webkit-scrollbar-thumb:window-inactive {\n  background: #D2D3D9;\n}\n\n@font-face {\n  font-family: 'cloudkitIcons';\n  src: url(\"/fonts/cloudkitIcons.eot\");\n  src: url(\"/fonts/cloudkitIcons.eot?#iefix\") format(\"embedded-opentype\"), url(\"/fonts/cloudkitIcons.woff\") format(\"woff\"), url(\"/fonts/cloudkitIcons.ttf\") format(\"truetype\"), url(\"/fonts/cloudkitIcons.svg?#cloudkitIcons\") format(\"svg\");\n  font-weight: normal;\n  font-style: normal;\n}\n\n.icon {\n  -moz-osx-font-smoothing: grayscale;\n  -webkit-font-smoothing: antialiased;\n  display: inline-block;\n  font-family: cloudkitIcons;\n  font-style: normal;\n  font-weight: 400;\n  margin-right: 5px;\n  color: #333333;\n}\n\n.icon-sql_log:before {\n  content: \"\\E93B\";\n}\n\n.icon-viewType:before {\n  content: \"\\E93A\";\n}\n\n.icon-alert:before {\n  content: \"\\E938\";\n}\n\n.icon-alert1:before {\n  content: \"\\E939\";\n}\n\n.icon-add_to_group:before {\n  content: \"\\E92E\";\n}\n\n.icon-move_to_group:before {\n  content: \"\\E92F\";\n}\n\n.icon-copy_to_group:before {\n  content: \"\\E930\";\n}\n\n.icon-remove_user:before {\n  content: \"\\E931\";\n}\n\n.icon-transfer_user:before {\n  content: \"\\E932\";\n}\n\n.icon-clone_user:before {\n  content: \"\\E933\";\n}\n\n.icon-remove_users_from_group:before {\n  content: \"\\E934\";\n}\n\n.icon-edit_user:before {\n  content: \"\\E935\";\n}\n\n.icon-create_group:before {\n  content: \"\\E936\";\n}\n\n.icon-grant_permissions:before {\n  content: \"\\E937\";\n}\n\n.icon-break:before {\n  content: \"\\E907\";\n}\n\n.icon-restore:before {\n  content: \"\\E92B\";\n}\n\n.icon-delete_group:before {\n  content: \"\\E92C\";\n}\n\n.icon-delete_user:before {\n  content: \"\\E92D\";\n}\n\n.icon-event_viewer:before {\n  content: \"\\E92A\";\n}\n\n.icon-filter2:before {\n  content: \"\\E929\";\n}\n\n.icon-not_equal:before {\n  content: \"\\E928\";\n}\n\n.icon-onedrive:before {\n  content: \"\\E926\";\n}\n\n.icon-permissions_explorer:before {\n  content: \"\\E927\";\n}\n\n.icon-account:before {\n  content: \"\\E600\";\n}\n\n.icon-add:before {\n  content: \"\\E601\";\n}\n\n.icon-all_users:before {\n  content: \"\\E908\";\n}\n\n.icon-arrow_down:before {\n  content: \"\\E602\";\n}\n\n.icon-arrow_down_right:before {\n  content: \"\\E603\";\n}\n\n.icon-arrow_L:before {\n  content: \"\\E604\";\n}\n\n.icon-arrow_R:before {\n  content: \"\\E605\";\n}\n\n.icon-arrow_right:before {\n  content: \"\\E606\";\n}\n\n.icon-Arrow_up:before {\n  content: \"\\E657\";\n}\n\n.icon-arrow-down:before {\n  content: \"\\E607\";\n}\n\n.icon-arrow-left:before {\n  content: \"\\E608\";\n}\n\n.icon-arrow-right:before {\n  content: \"\\E609\";\n}\n\n.icon-arrows:before {\n  content: \"\\E60A\";\n}\n\n.icon-arrow-up:before {\n  content: \"\\E60B\";\n}\n\n.icon-barChart:before {\n  content: \"\\E60C\";\n}\n\n.icon-barChart2:before {\n  content: \"\\E60D\";\n}\n\n.icon-buy:before {\n  content: \"\\E60E\";\n}\n\n.icon-buy2:before {\n  content: \"\\E914\";\n}\n\n.icon-camera:before {\n  content: \"\\E60F\";\n}\n\n.icon-checkbox:before {\n  content: \"\\E610\";\n}\n\n.icon-checkmark:before {\n  content: \"\\E611\";\n}\n\n.icon-ck_kit:before {\n  content: \"\\E91A\";\n}\n\n.icon-ClodKit365:before {\n  content: \"\\E612\";\n}\n\n.icon-cloud:before {\n  content: \"\\E923\";\n}\n\n.icon-collapseAll:before {\n  content: \"\\E658\";\n}\n\n.icon-Column_chooser:before {\n  content: \"\\E915\";\n}\n\n.icon-compare:before {\n  content: \"\\E613\";\n}\n\n.icon-curentjobs:before {\n  content: \"\\E909\";\n}\n\n.icon-custom_pack:before {\n  content: \"\\E918\";\n}\n\n.icon-dashboard1:before {\n  content: \"\\E614\";\n}\n\n.icon-dashboard2:before {\n  content: \"\\E615\";\n}\n\n.icon-delete:before {\n  content: \"\\E616\";\n}\n\n.icon-details:before {\n  content: \"\\E617\";\n}\n\n.icon-disabledUser:before {\n  content: \"\\E921\";\n}\n\n.icon-document:before {\n  content: \"\\E618\";\n}\n\n.icon-docx:before {\n  content: \"\\E619\";\n}\n\n.icon-edit:before {\n  content: \"\\E61A\";\n}\n\n.icon-edit_email:before {\n  content: \"\\E90A\";\n}\n\n.icon-edit_phone:before {\n  content: \"\\E90B\";\n}\n\n.icon-equal:before {\n  content: \"\\E61B\";\n}\n\n.icon-error:before {\n  content: \"\\E61C\";\n}\n\n.icon-excel:before {\n  content: \"\\E61D\";\n}\n\n.icon-Exchange:before {\n  content: \"\\E61E\";\n}\n\n.icon-expand_collapse:before {\n  content: \"\\E65A\";\n}\n\n.icon-expandAll:before {\n  content: \"\\E659\";\n}\n\n.icon-export:before {\n  content: \"\\E61F\";\n}\n\n.icon-feedback:before {\n  content: \"\\E620\";\n}\n\n.icon-filter:before {\n  content: \"\\E621\";\n}\n\n.icon-flag:before {\n  content: \"\\E903\";\n}\n\n.icon-folder:before {\n  content: \"\\E622\";\n}\n\n.icon-full_size:before {\n  content: \"\\E91D\";\n}\n\n.icon-gen_word:before {\n  content: \"\\E91C\";\n}\n\n.icon-gen_word1:before {\n  content: \"\\E91E\";\n}\n\n.icon-generate:before {\n  content: \"\\E802\";\n}\n\n.icon-ghost:before {\n  content: \"\\E905\";\n}\n\n.icon-group:before {\n  content: \"\\E623\";\n}\n\n.icon-help:before {\n  content: \"\\E624\";\n}\n\n.icon-history:before {\n  content: \"\\E625\";\n}\n\n.icon-hitory_back:before {\n  content: \"\\E626\";\n}\n\n.icon-home:before {\n  content: \"\\E627\";\n}\n\n.icon-in_progress:before {\n  content: \"\\E901\";\n}\n\n.icon-Info_krug:before {\n  content: \"\\E628\";\n}\n\n.icon-inProgress:before {\n  content: \"\\E920\";\n}\n\n.icon-internalLink:before {\n  content: \"\\E922\";\n}\n\n.icon-item:before {\n  content: \"\\E629\";\n}\n\n.icon-key:before {\n  content: \"\\E62A\";\n}\n\n.icon-link:before {\n  content: \"\\E62B\";\n}\n\n.icon-list:before {\n  content: \"\\E62C\";\n}\n\n.icon-load:before {\n  content: \"\\E62D\";\n}\n\n.icon-load_info:before {\n  content: \"\\E90C\";\n}\n\n.icon-load_job_tasks:before {\n  content: \"\\E90D\";\n}\n\n.icon-load_witherrors:before {\n  content: \"\\E902\";\n}\n\n.icon-load_witherrors1:before {\n  content: \"\\E904\";\n}\n\n.icon-logo:before {\n  content: \"\\E916\";\n}\n\n.icon-logo_partner:before {\n  content: \"\\E925\";\n}\n\n.icon-logo_partner2:before {\n  content: \"\\E924\";\n}\n\n.icon-logOut:before {\n  content: \"\\E62E\";\n}\n\n.icon-MyAccount:before {\n  content: \"\\E62F\";\n}\n\n.icon-news:before {\n  content: \"\\E630\";\n}\n\n.icon-normal_size:before {\n  content: \"\\E91F\";\n}\n\n.icon-office:before {\n  content: \"\\E631\";\n}\n\n.icon-office_manage:before {\n  content: \"\\E632\";\n}\n\n.icon-Office365:before {\n  content: \"\\E633\";\n}\n\n.icon-open:before {\n  content: \"\\E634\";\n}\n\n.icon-pdf:before {\n  content: \"\\E635\";\n}\n\n.icon-pending:before {\n  content: \"\\E906\";\n}\n\n.icon-permission_date:before {\n  content: \"\\E64C\";\n}\n\n.icon-permission_level:before {\n  content: \"\\E652\";\n}\n\n.icon-permission_level2:before {\n  content: \"\\E64D\";\n}\n\n.icon-phone:before {\n  content: \"\\E636\";\n}\n\n.icon-power:before {\n  content: \"\\E900\";\n}\n\n.icon-premium_subs:before {\n  content: \"\\E917\";\n}\n\n.icon-principal_status:before {\n  content: \"\\E64E\";\n}\n\n.icon-principal_type:before {\n  content: \"\\E64F\";\n}\n\n.icon-print:before {\n  content: \"\\E800\";\n}\n\n.icon-que:before {\n  content: \"\\E90E\";\n}\n\n.icon-Quote:before {\n  content: \"\\E638\";\n}\n\n.icon-Quote2:before {\n  content: \"\\E653\";\n}\n\n.icon-Quote22:before {\n  content: \"\\E656\";\n}\n\n.icon-recent_jobs:before {\n  content: \"\\E90F\";\n}\n\n.icon-refresh:before {\n  content: \"\\E639\";\n}\n\n.icon-reload:before {\n  content: \"\\E63A\";\n}\n\n.icon-reset:before {\n  content: \"\\E650\";\n}\n\n.icon-reset_jobs:before {\n  content: \"\\E910\";\n}\n\n.icon-save:before {\n  content: \"\\E63B\";\n}\n\n.icon-schedule:before {\n  content: \"\\E63C\";\n}\n\n.icon-search:before {\n  content: \"\\E63D\";\n}\n\n.icon-security_group:before {\n  content: \"\\E63E\";\n}\n\n.icon-settings:before {\n  content: \"\\E63F\";\n}\n\n.icon-shared_folder:before {\n  content: \"\\E801\";\n}\n\n.icon-SharePoint:before {\n  content: \"\\E640\";\n}\n\n.icon-site:before {\n  content: \"\\E641\";\n}\n\n.icon-site_collection:before {\n  content: \"\\E642\";\n}\n\n.icon-site2:before {\n  content: \"\\E651\";\n}\n\n.icon-Snapshot:before {\n  content: \"\\E654\";\n}\n\n.icon-SP_report:before {\n  content: \"\\E643\";\n}\n\n.icon-starter-subs:before {\n  content: \"\\E919\";\n}\n\n.icon-subscription:before {\n  content: \"\\E644\";\n}\n\n.icon-subsite:before {\n  content: \"\\E645\";\n}\n\n.icon-summary:before {\n  content: \"\\E911\";\n}\n\n.icon-superAdmin:before {\n  content: \"\\E646\";\n}\n\n.icon-switchView:before {\n  content: \"\\E65B\";\n}\n\n.icon-TakeSnapshot:before {\n  content: \"\\E91B\";\n}\n\n.icon-trash:before {\n  content: \"\\E647\";\n}\n\n.icon-user:before {\n  content: \"\\E648\";\n}\n\n.icon-user_management:before {\n  content: \"\\E913\";\n}\n\n.icon-Users_quote:before {\n  content: \"\\E655\";\n}\n\n.icon-usklicnik:before {\n  content: \"\\E649\";\n}\n\n.icon-verson_update:before {\n  content: \"\\E912\";\n}\n\n.icon-warning:before {\n  content: \"\\E64A\";\n}\n\n.icon-world:before {\n  content: \"\\E64B\";\n}\n", ""]);
	
	// exports


/***/ },

/***/ 483:
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

/***/ 484:
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

/***/ 650:
/***/ function(module, exports, __webpack_require__) {

	"use strict";
	
	var React = __webpack_require__(299);
	var classNames = __webpack_require__(476);
	var Icon_1 = __webpack_require__(480);
	__webpack_require__(651);
	var MainNavigation = function (_super) {
	    __extends(MainNavigation, _super);
	    function MainNavigation(props) {
	        _super.call(this, props);
	    }
	    MainNavigation.prototype.render = function () {
	        var _a = this.props,
	            id = _a.id,
	            children = _a.children,
	            logo = _a.logo;
	        var className = classNames('main-nav-container', [this.props.className]);
	        return React.createElement("nav", { className: className }, logo && React.createElement("div", { className: 'logo-container' }, React.createElement(Icon_1.Icon, { className: 'logo', iconName: this.props.logo })), children);
	    };
	    ;
	    return MainNavigation;
	}(React.Component);
	exports.MainNavigation = MainNavigation;
	;

/***/ },

/***/ 651:
/***/ function(module, exports, __webpack_require__) {

	// style-loader: Adds some css to the DOM by adding a <style> tag
	
	// load the styles
	var content = __webpack_require__(652);
	if(typeof content === 'string') content = [[module.id, content, '']];
	// add the styles to the DOM
	var update = __webpack_require__(484)(content, {});
	if(content.locals) module.exports = content.locals;
	// Hot Module Replacement
	if(false) {
		// When the styles change, update the <style> tags
		if(!content.locals) {
			module.hot.accept("!!../../../node_modules/css-loader/index.js!../../../node_modules/sass-loader/index.js?outputStyle=expanded!./MainNavigation.scss", function() {
				var newContent = require("!!../../../node_modules/css-loader/index.js!../../../node_modules/sass-loader/index.js?outputStyle=expanded!./MainNavigation.scss");
				if(typeof newContent === 'string') newContent = [[module.id, newContent, '']];
				update(newContent);
			});
		}
		// When the module is disposed, remove the <style> tags
		module.hot.dispose(function() { update(); });
	}

/***/ },

/***/ 652:
/***/ function(module, exports, __webpack_require__) {

	exports = module.exports = __webpack_require__(483)();
	// imports
	
	
	// module
	exports.push([module.id, "::-webkit-scrollbar {\n  width: 13px;\n  margin-top: 10px;\n  border-radius: 15px;\n  margin-right: 3px;\n  background: transparent;\n}\n\n::-webkit-scrollbar-track {\n  border-radius: 15px;\n  margin-top: 7px;\n  background: #EEEFF4;\n  margin-bottom: 7px;\n}\n\n::-webkit-scrollbar-thumb {\n  border-radius: 10px;\n  margin-top: 10px;\n  background: #D2D3D9;\n}\n\n::-webkit-scrollbar-thumb:window-inactive {\n  background: #D2D3D9;\n}\n\n.main-nav-container {\n  height: 40px;\n  width: 100%;\n  color: #333333;\n  background-color: #f4f4f4;\n}\n\n.main-nav-container .logo-container {\n  float: left;\n}\n\n.main-nav-container .logo-container .logo {\n  color: #333333;\n  font-size: 21px;\n  padding: 3px 12px;\n}\n", ""]);
	
	// exports


/***/ }

});
//# sourceMappingURL=MainNavigation.e403d7b187b12e8ae34c.js.map