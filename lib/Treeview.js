webpackJsonp([32],{

/***/ 0:
/***/ function(module, exports, __webpack_require__) {

	"use strict";
	/* tslint:disable:no-console */
	
	__webpack_require__(1);
	__webpack_require__(298);
	var React = __webpack_require__(299);
	var ReactDOM = __webpack_require__(329);
	var Treeview_1 = __webpack_require__(698);
	var treeviewElements_1 = __webpack_require__(703);
	var Index = function (_super) {
	    __extends(Index, _super);
	    function Index() {
	        _super.call(this);
	        this.state = {
	            treeviewElements: treeviewElements_1.elements
	        };
	    }
	    ;
	    Index.prototype.render = function () {
	        return React.createElement("div", null, React.createElement(Treeview_1.Treeview, { onSelect: this._onCheckboxListChange, showCheckbox: false, items: treeviewElements_1.elements }), React.createElement("br", null), React.createElement(Treeview_1.Treeview, { onSelect: this._onTreeviewItemClick.bind(this), showCheckbox: true, items: this.state.treeviewElements, recursive: false }), React.createElement("br", null));
	    };
	    Index.prototype._onTreeviewItemClick = function (ev, itemId, checked) {
	        this.setState({
	            treeviewElements: this.state.treeviewElements.map(function (item) {
	                if (itemId.indexOf(item.id) > -1) {
	                    return { id: item.id, text: item.text, parentId: item.parentId, checked: checked };
	                } else {
	                    return item;
	                }
	            })
	        });
	    };
	    Index.prototype._onCheckboxListChange = function (ev, itemId, checked) {
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

/***/ 508:
/***/ function(module, exports, __webpack_require__) {

	"use strict";
	
	var React = __webpack_require__(299);
	var EventGroup_1 = __webpack_require__(509);
	var Async_1 = __webpack_require__(510);
	var CommonComponent = function (_super) {
	    __extends(CommonComponent, _super);
	    function CommonComponent() {
	        _super.apply(this, arguments);
	    }
	    Object.defineProperty(CommonComponent.prototype, "_async", {
	        get: function () {
	            if (!this.__async) {
	                this.__async = new Async_1.Async(this);
	                this._disposables.push(this.__async);
	            }
	            return this.__async;
	        },
	        enumerable: true,
	        configurable: true
	    });
	    Object.defineProperty(CommonComponent.prototype, "_events", {
	        get: function () {
	            if (!this.__events) {
	                this.__events = new EventGroup_1.EventGroup(this);
	                this._disposables.push(this.__events);
	            }
	            return this.__events;
	        },
	        enumerable: true,
	        configurable: true
	    });
	    Object.defineProperty(CommonComponent.prototype, "_disposables", {
	        get: function () {
	            if (!this.__disposables) {
	                this.__disposables = [];
	            }
	            return this.__disposables;
	        },
	        enumerable: true,
	        configurable: true
	    });
	    CommonComponent.prototype._resolveRef = function (refName) {
	        var _this = this;
	        if (!this.__resolves) {
	            this.__resolves = {};
	        }
	        if (!this.__resolves[refName]) {
	            this.__resolves[refName] = function (ref) {
	                return _this[refName] = ref;
	            };
	        }
	        return this.__resolves[refName];
	    };
	    return CommonComponent;
	}(React.Component);
	exports.CommonComponent = CommonComponent;

/***/ },

/***/ 509:
/***/ function(module, exports) {

	"use strict";
	
	var EventGroup = function () {
	    function EventGroup(parent) {
	        this._id = EventGroup._uniqueId++;
	        this._parent = parent;
	        this._eventRecords = [];
	    }
	    EventGroup.raise = function (target, eventName, eventArgs, bubbleEvent) {
	        var retVal;
	        if (EventGroup._isElement(target)) {
	            if (document.createEvent) {
	                var ev = document.createEvent('HTMLEvents');
	                ev.initEvent(eventName, bubbleEvent, true);
	                /* tslint:disable */
	                ev['args'] = eventArgs;
	                retVal = target.dispatchEvent(ev);
	            } else if (document['createEventObject']) {
	                var evObj = document['createEventObject'](eventArgs);
	                /* tslint:enable */
	                target.fireEvent('on' + eventName, evObj);
	            }
	        } else {
	            while (target && retVal !== false) {
	                var events = target.__events__;
	                var eventRecords = events ? events[eventName] : null;
	                for (var id in eventRecords) {
	                    if (eventRecords.hasOwnProperty(id)) {
	                        var eventRecordList = eventRecords[id];
	                        for (var listIndex = 0; retVal !== false && listIndex < eventRecordList.length; listIndex++) {
	                            var record = eventRecordList[listIndex];
	                            if (record.objectCallback) {
	                                retVal = record.objectCallback.call(record.parent, eventArgs);
	                            }
	                        }
	                    }
	                }
	                target = bubbleEvent ? target.parent : null;
	            }
	        }
	        return retVal;
	    };
	    EventGroup.isObserved = function (target, eventName) {
	        var events = target && target.__events__;
	        return !!events && !!events[eventName];
	    };
	    EventGroup.isDeclared = function (target, eventName) {
	        var declaredEvents = target && target.__declaredEvents;
	        return !!declaredEvents && !!declaredEvents[eventName];
	    };
	    EventGroup.stopPropagation = function (event) {
	        if (event.stopPropagation) {
	            event.stopPropagation();
	        } else {
	            event.cancelBubble = true;
	        }
	    };
	    EventGroup._isElement = function (target) {
	        return !!target && (target.addEventListener || target instanceof HTMLElement);
	    };
	    EventGroup.prototype.dispose = function () {
	        if (!this._isDisposed) {
	            this._isDisposed = true;
	            this.off();
	            this._parent = null;
	        }
	    };
	    EventGroup.prototype.onAll = function (target, events, useCapture) {
	        for (var eventName in events) {
	            if (events.hasOwnProperty(eventName)) {
	                this.on(target, eventName, events[eventName], useCapture);
	            }
	        }
	    };
	    EventGroup.prototype.on = function (target, eventName, callback, useCapture) {
	        var _this = this;
	        if (eventName.indexOf(',') > -1) {
	            var events = eventName.split(/[ ,]+/);
	            for (var i = 0; i < events.length; i++) {
	                this.on(target, events[i], callback, useCapture);
	            }
	        } else {
	            var parent_1 = this._parent;
	            var eventRecord = {
	                target: target,
	                eventName: eventName,
	                parent: parent_1,
	                callback: callback,
	                objectCallback: null,
	                elementCallback: null,
	                useCapture: useCapture
	            };
	            var events = target.__events__ = target.__events__ || {};
	            events[eventName] = events[eventName] || {
	                count: 0
	            };
	            events[eventName][this._id] = events[eventName][this._id] || [];
	            events[eventName][this._id].push(eventRecord);
	            events[eventName].count++;
	            if (EventGroup._isElement(target)) {
	                var processElementEvent = function () {
	                    var args = [];
	                    for (var _i = 0; _i < arguments.length; _i++) {
	                        args[_i - 0] = arguments[_i];
	                    }
	                    if (_this._isDisposed) {
	                        return;
	                    }
	                    var result;
	                    try {
	                        result = callback.apply(parent_1, args);
	                        if (result === false && args[0]) {
	                            var e = args[0];
	                            if (e.preventDefault) {
	                                e.preventDefault();
	                            }
	                            if (e.stopPropagation) {
	                                e.stopPropagation();
	                            }
	                            e.cancelBubble = true;
	                        }
	                    } catch (e) {}
	                    return result;
	                };
	                eventRecord.elementCallback = processElementEvent;
	                if (target.addEventListener) {
	                    target.addEventListener(eventName, processElementEvent, useCapture);
	                } else if (target.attachEvent) {
	                    target.attachEvent('on' + eventName, processElementEvent);
	                }
	            } else {
	                var processObjectEvent = function () {
	                    var args = [];
	                    for (var _i = 0; _i < arguments.length; _i++) {
	                        args[_i - 0] = arguments[_i];
	                    }
	                    if (_this._isDisposed) {
	                        return;
	                    }
	                    return callback.apply(parent_1, args);
	                };
	                eventRecord.objectCallback = processObjectEvent;
	            }
	            this._eventRecords.push(eventRecord);
	        }
	    };
	    EventGroup.prototype.off = function (target, eventName, callback, useCapture) {
	        for (var i = 0; i < this._eventRecords.length; i++) {
	            var eventRecord = this._eventRecords[i];
	            if ((!target || target === eventRecord.target) && (!eventName || eventName === eventRecord.eventName) && (!callback || callback === eventRecord.callback) && (typeof useCapture !== 'boolean' || useCapture === eventRecord.useCapture)) {
	                var events = eventRecord.target.__events__;
	                var targetArrayLookup = events[eventRecord.eventName];
	                var targetArray = targetArrayLookup ? targetArrayLookup[this._id] : null;
	                if (targetArray) {
	                    if (targetArray.length === 1 || !callback) {
	                        targetArrayLookup.count -= targetArray.length;
	                        delete events[eventRecord.eventName][this._id];
	                    } else {
	                        targetArrayLookup.count--;
	                        targetArray.splice(targetArray.indexOf(eventRecord), 1);
	                    }
	                    if (!targetArrayLookup.count) {
	                        delete events[eventRecord.eventName];
	                    }
	                }
	                if (eventRecord.elementCallback) {
	                    if (eventRecord.target.removeEventListener) {
	                        eventRecord.target.removeEventListener(eventRecord.eventName, eventRecord.elementCallback, eventRecord.useCapture);
	                    } else if (eventRecord.target.detachEvent) {
	                        eventRecord.target.detachEvent('on' + eventRecord.eventName, eventRecord.elementCallback);
	                    }
	                }
	                this._eventRecords.splice(i--, 1);
	            }
	        }
	    };
	    EventGroup.prototype.raise = function (eventName, eventArgs, bubbleEvent) {
	        return EventGroup.raise(this._parent, eventName, eventArgs, bubbleEvent);
	    };
	    EventGroup.prototype.declare = function (event) {
	        var declaredEvents = this._parent.__declaredEvents = this._parent.__declaredEvents || {};
	        if (typeof event === 'string') {
	            declaredEvents[event] = true;
	        } else {
	            for (var i = 0; i < event.length; i++) {
	                declaredEvents[event[i]] = true;
	            }
	        }
	    };
	    EventGroup._uniqueId = 0;
	    return EventGroup;
	}();
	exports.EventGroup = EventGroup;

/***/ },

/***/ 510:
/***/ function(module, exports) {

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
	    Async.prototype.dispose = function () {
	        var id;
	        this._isDisposed = true;
	        this._parent = null;
	        if (this._timeoutIds) {
	            for (id in this._timeoutIds) {
	                if (this._timeoutIds.hasOwnProperty(id)) {
	                    this.clearTimeout(id);
	                }
	            }
	            this._timeoutIds = null;
	        }
	        if (this._immediateIds) {
	            for (id in this._immediateIds) {
	                if (this._immediateIds.hasOwnProperty(id)) {
	                    this.clearImmediate(id);
	                }
	            }
	            this._immediateIds = null;
	        }
	        if (this._intervalIds) {
	            for (id in this._intervalIds) {
	                if (this._intervalIds.hasOwnProperty(id)) {
	                    this.clearInterval(id);
	                }
	            }
	            this._intervalIds = null;
	        }
	        if (this._animationFrameIds) {
	            for (id in this._animationFrameIds) {
	                if (this._animationFrameIds.hasOwnProperty(id)) {
	                    this.cancelAnimationFrame(id);
	                }
	            }
	            this._animationFrameIds = null;
	        }
	    };
	    Async.prototype.setTimeout = function (callback, duration) {
	        var _this = this;
	        var timeoutId = 0;
	        if (!this._isDisposed) {
	            if (!this._timeoutIds) {
	                this._timeoutIds = {};
	            }
	            timeoutId = setTimeout(function () {
	                try {
	                    delete _this._timeoutIds[timeoutId];
	                    callback.apply(_this._parent);
	                } catch (e) {
	                    if (_this._onErrorHandler) {
	                        _this._onErrorHandler(e);
	                    }
	                }
	            }, duration);
	            this._timeoutIds[timeoutId] = true;
	        }
	        return timeoutId;
	    };
	    Async.prototype.clearTimeout = function (id) {
	        if (this._timeoutIds && this._timeoutIds[id]) {
	            clearTimeout(id);
	            delete this._timeoutIds[id];
	        }
	    };
	    Async.prototype.setImmediate = function (callback) {
	        var _this = this;
	        var immediateId = 0;
	        if (!this._isDisposed) {
	            if (!this._immediateIds) {
	                this._immediateIds = {};
	            }
	            var setImmediateCallback = function () {
	                try {
	                    delete _this._immediateIds[immediateId];
	                    callback.apply(_this._parent);
	                } catch (e) {
	                    _this._logError(e);
	                }
	            };
	            immediateId = window.setImmediate ? window.setImmediate(setImmediateCallback) : window.setTimeout(setImmediateCallback, 0);
	            this._immediateIds[immediateId] = true;
	        }
	        return immediateId;
	    };
	    Async.prototype.clearImmediate = function (id) {
	        if (this._immediateIds && this._immediateIds[id]) {
	            window.clearImmediate ? window.clearImmediate(id) : window.clearTimeout(id);
	            delete this._immediateIds[id];
	        }
	    };
	    Async.prototype.setInterval = function (callback, duration) {
	        var _this = this;
	        var intervalId = 0;
	        if (!this._isDisposed) {
	            if (!this._intervalIds) {
	                this._intervalIds = {};
	            }
	            intervalId = setInterval(function () {
	                try {
	                    callback.apply(_this._parent);
	                } catch (e) {
	                    _this._logError(e);
	                }
	            }, duration);
	            this._intervalIds[intervalId] = true;
	        }
	        return intervalId;
	    };
	    Async.prototype.clearInterval = function (id) {
	        if (this._intervalIds && this._intervalIds[id]) {
	            clearInterval(id);
	            delete this._intervalIds[id];
	        }
	    };
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
	            var animationFrameCallback = function () {
	                try {
	                    delete _this._animationFrameIds[animationFrameId];
	                    callback.apply(_this._parent);
	                } catch (e) {
	                    _this._logError(e);
	                }
	            };
	            animationFrameId = window.requestAnimationFrame ? window.requestAnimationFrame(animationFrameCallback) : window.setTimeout(animationFrameCallback, 0);
	            this._animationFrameIds[animationFrameId] = true;
	        }
	        return animationFrameId;
	    };
	    Async.prototype.cancelAnimationFrame = function (id) {
	        if (this._animationFrameIds && this._animationFrameIds[id]) {
	            window.cancelAnimationFrame ? window.cancelAnimationFrame(id) : window.clearTimeout(id);
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

/***/ 537:
/***/ function(module, exports, __webpack_require__) {

	"use strict";
	
	var React = __webpack_require__(299);
	var classNames = __webpack_require__(476);
	var autobind_1 = __webpack_require__(507);
	var getId_1 = __webpack_require__(503);
	var Common_1 = __webpack_require__(508);
	var Icon_1 = __webpack_require__(480);
	__webpack_require__(538);
	var Checkbox = function (_super) {
	    __extends(Checkbox, _super);
	    function Checkbox(props) {
	        _super.call(this, props);
	        this.id = getId_1.getId('checkbox-');
	        this.state = {
	            isFocused: false,
	            isChecked: props.defaultChecked || false
	        };
	    }
	    Checkbox.prototype.shouldComponentUpdate = function (nextProps, nextState) {
	        return !(this.props.checked === nextProps.checked && this.props.className === nextProps.className && this.props.label === nextProps.label && this.props.disabled === nextProps.disabled && this.props.itemID === nextProps.itemId);
	    };
	    Checkbox.prototype.render = function () {
	        var _a = this.props,
	            checked = _a.checked,
	            defaultChecked = _a.defaultChecked,
	            disabled = _a.disabled,
	            inputProps = _a.inputProps,
	            label = _a.label,
	            id = _a.id,
	            iconClassName = _a.iconClassName;
	        var isFocused = this.state.isFocused;
	        var isChecked = checked === undefined ? this.state.isChecked : checked;
	        var className = classNames({
	            'checkbox': true
	        }, [this.props.className]);
	        var labelClassName = classNames({
	            'checkbox-label': true,
	            'is-checked': this.state.isChecked,
	            'is-disabled': disabled
	        });
	        var innerLabelClassName = classNames({
	            'label-with-icon': iconClassName !== undefined,
	            'label': iconClassName === undefined
	        });
	        return React.createElement("div", { className: className }, React.createElement("input", __assign({}, inputProps, checked !== undefined && { checked: checked }, defaultChecked !== undefined && { defaultChecked: defaultChecked }, { disabled: disabled, ref: this._resolveRef('_checkBox'), className: 'checkbox-input', id: this.id, name: this.id, type: "checkbox", onChange: this._onChange, onFocus: this._onFocus, onBlur: this._onBlur })), isChecked && React.createElement(Icon_1.Icon, { htmlFor: this.id, className: 'checkboxCheckmark', iconName: 'icon-checkmark' }), React.createElement("label", { htmlFor: this.id, className: labelClassName }, iconClassName && React.createElement(Icon_1.Icon, { htmlFor: this.id, iconName: iconClassName, className: 'label-icon' }), label && React.createElement("span", { className: innerLabelClassName }, label)));
	    };
	    ;
	    Object.defineProperty(Checkbox.prototype, "checked", {
	        get: function () {
	            return this._checkBox ? this._checkBox.checked : false;
	        },
	        enumerable: true,
	        configurable: true
	    });
	    Checkbox.prototype.focus = function () {
	        if (this._checkBox) {
	            this._checkBox.focus();
	        }
	    };
	    Checkbox.prototype._onFocus = function (ev) {
	        var inputProps = this.props.inputProps;
	        if (inputProps && inputProps.onFocus) {
	            inputProps.onFocus(ev);
	        }
	        this.setState({ isFocused: true });
	    };
	    Checkbox.prototype._onBlur = function (ev) {
	        var inputProps = this.props.inputProps;
	        if (inputProps && inputProps.onBlur) {
	            inputProps.onBlur(ev);
	        }
	        this.setState({ isFocused: false });
	    };
	    Checkbox.prototype._onChange = function (ev) {
	        var _a = this.props,
	            onChange = _a.onChange,
	            itemId = _a.itemId;
	        var isChecked = ev.target.checked;
	        if (onChange) {
	            onChange(ev, itemId, isChecked);
	        }
	        if (this.props.checked === undefined) {
	            this.setState({ isChecked: isChecked });
	        }
	    };
	    Checkbox.defaultProps = {};
	    __decorate([autobind_1.autobind, __metadata('design:type', Function), __metadata('design:paramtypes', [Object]), __metadata('design:returntype', void 0)], Checkbox.prototype, "_onFocus", null);
	    __decorate([autobind_1.autobind, __metadata('design:type', Function), __metadata('design:paramtypes', [Object]), __metadata('design:returntype', void 0)], Checkbox.prototype, "_onBlur", null);
	    __decorate([autobind_1.autobind, __metadata('design:type', Function), __metadata('design:paramtypes', [Object]), __metadata('design:returntype', void 0)], Checkbox.prototype, "_onChange", null);
	    return Checkbox;
	}(Common_1.CommonComponent);
	exports.Checkbox = Checkbox;
	;

/***/ },

/***/ 538:
/***/ function(module, exports, __webpack_require__) {

	// style-loader: Adds some css to the DOM by adding a <style> tag
	
	// load the styles
	var content = __webpack_require__(539);
	if(typeof content === 'string') content = [[module.id, content, '']];
	// add the styles to the DOM
	var update = __webpack_require__(484)(content, {});
	if(content.locals) module.exports = content.locals;
	// Hot Module Replacement
	if(false) {
		// When the styles change, update the <style> tags
		if(!content.locals) {
			module.hot.accept("!!../../../node_modules/css-loader/index.js!../../../node_modules/sass-loader/index.js?outputStyle=expanded!./Checkbox.scss", function() {
				var newContent = require("!!../../../node_modules/css-loader/index.js!../../../node_modules/sass-loader/index.js?outputStyle=expanded!./Checkbox.scss");
				if(typeof newContent === 'string') newContent = [[module.id, newContent, '']];
				update(newContent);
			});
		}
		// When the module is disposed, remove the <style> tags
		module.hot.dispose(function() { update(); });
	}

/***/ },

/***/ 539:
/***/ function(module, exports, __webpack_require__) {

	exports = module.exports = __webpack_require__(483)();
	// imports
	
	
	// module
	exports.push([module.id, "::-webkit-scrollbar {\n  width: 13px;\n  margin-top: 10px;\n  border-radius: 15px;\n  margin-right: 3px;\n  background: transparent;\n}\n\n::-webkit-scrollbar-track {\n  border-radius: 15px;\n  margin-top: 7px;\n  background: #EEEFF4;\n  margin-bottom: 7px;\n}\n\n::-webkit-scrollbar-thumb {\n  border-radius: 10px;\n  margin-top: 10px;\n  background: #D2D3D9;\n}\n\n::-webkit-scrollbar-thumb:window-inactive {\n  background: #D2D3D9;\n}\n\n.checkbox {\n  box-sizing: border-box;\n  color: #333333;\n  font-family: \"Segoe UI WestEuropean\", \"Segoe UI\", -apple-system, BlinkMacSystemFont, Roboto, \"Helvetica Neue\", sans-serif;\n  font-size: 14px;\n  font-weight: 400;\n  position: relative;\n}\n\n.checkbox .checkbox-input {\n  position: absolute;\n  opacity: 0;\n  top: 8px;\n}\n\n.checkbox .checkbox-label::before {\n  content: '';\n  display: inline-block;\n  border: 2px solid #333333;\n  width: 20px;\n  height: 20px;\n  font-weight: normal;\n  position: absolute;\n  box-sizing: border-box;\n  transition-property: background, border, border-color;\n  transition-duration: 200ms;\n  transition-timing-function: cubic-bezier(0.4, 0, 0.23, 1);\n}\n\n.checkbox .checkbox-label {\n  display: inline-block;\n  cursor: pointer;\n  margin-top: 8px;\n  position: relative;\n  vertical-align: top;\n  user-select: none;\n  min-width: 20px;\n  min-height: 20px;\n  line-height: 20px;\n}\n\n.checkbox .checkbox-label.is-checked::after {\n  display: block;\n}\n\n.checkbox .checkbox-label.is-checked::after:hover {\n  border: 1px solid #005a93;\n}\n\n.checkbox .checkbox-label.is-checked.is-disabled {\n  cursor: default;\n}\n\n.checkbox .checkbox-label.is-checked.is-disabled::before {\n  background-color: #a6a6a6;\n}\n\n.checkbox .checkbox-label.is-disabled {\n  cursor: default;\n}\n\n.checkbox .checkbox-label.is-disabled::before {\n  border-color: #a6a6a6;\n  color: #a6a6a6;\n}\n\n.checkbox .checkbox-label.is-disabled .label {\n  color: #a6a6a6;\n}\n\n.checkbox .label {\n  font-size: 14px;\n  padding: 0 0 0 26px;\n  display: inline-block;\n}\n\n.checkbox .label-with-icon {\n  font-size: 14px;\n  padding: 0 0 0 2px;\n  display: inline-block;\n}\n\n.checkbox .label-icon {\n  padding: 0 0 0 26px;\n}\n\n.checkbox .checkboxCheckmark {\n  color: #b9cb34;\n  position: absolute;\n  margin-top: 10px;\n  margin-left: 3px;\n}\n", ""]);
	
	// exports


/***/ },

/***/ 698:
/***/ function(module, exports, __webpack_require__) {

	"use strict";
	
	var React = __webpack_require__(299);
	var classNames = __webpack_require__(476);
	var TreeviewItem_Props_1 = __webpack_require__(699);
	var TreeviewItem_1 = __webpack_require__(700);
	var Common_1 = __webpack_require__(508);
	__webpack_require__(701);
	var Treeview = function (_super) {
	    __extends(Treeview, _super);
	    function Treeview(props) {
	        _super.call(this, props);
	    }
	    Treeview.prototype.shouldComponentUpdate = function (nextProps, nextState) {
	        return !(this.props.items === nextProps.items && this.props.className === nextProps.className && this.props.label === nextProps.label);
	    };
	    Treeview.prototype.render = function () {
	        var _a = this.props,
	            label = _a.label,
	            items = _a.items,
	            onSelect = _a.onSelect,
	            showCheckbox = _a.showCheckbox,
	            recursive = _a.recursive;
	        var className = classNames('treeview', [this.props.className]);
	        var parent = items.map(function (element) {
	            element.children = TreeviewItem_Props_1.MapChildren(element, items);
	            return element;
	        });
	        return React.createElement("div", null, parent.map(function (item, index) {
	            return !item.parentId && React.createElement("div", { key: index, className: className }, React.createElement(TreeviewItem_1.TreeviewItem, { item: item, onChange: onSelect, showCheckbox: showCheckbox, children: item.children, recursive: recursive }));
	        }));
	    };
	    return Treeview;
	}(Common_1.CommonComponent);
	exports.Treeview = Treeview;

/***/ },

/***/ 699:
/***/ function(module, exports) {

	"use strict";
	
	function MapChildren(item, items) {
	    var children = items.filter(function (element) {
	        return element.parentId === item.id;
	    });
	    children.forEach(function (element) {
	        var grandChildren = MapChildren(element, items);
	        element.children = grandChildren;
	    });
	    return children;
	}
	exports.MapChildren = MapChildren;

/***/ },

/***/ 700:
/***/ function(module, exports, __webpack_require__) {

	"use strict";
	
	var React = __webpack_require__(299);
	var classNames = __webpack_require__(476);
	var Icon_1 = __webpack_require__(480);
	var Checkbox_1 = __webpack_require__(537);
	var Common_1 = __webpack_require__(508);
	var autobind_1 = __webpack_require__(507);
	__webpack_require__(701);
	var TreeviewItem = function (_super) {
	    __extends(TreeviewItem, _super);
	    function TreeviewItem(props) {
	        _super.call(this, props);
	        this.state = { isOpen: props.isOpen, iconArrow: 'icon-arrowRight' };
	    }
	    TreeviewItem.prototype.shouldComponentUpdate = function (nextProps, nextState) {
	        return !(this.props.item === nextProps.item && this.state.isOpen === nextState.isOpen && this.state.iconArrow === nextState.iconArrow && this.state.selected === nextState.selected && this.props.children === nextProps.children);
	    };
	    TreeviewItem.prototype.render = function () {
	        var _a = this.props,
	            item = _a.item,
	            onChange = _a.onChange,
	            showCheckbox = _a.showCheckbox,
	            children = _a.children,
	            recursive = _a.recursive;
	        var isOpen = this.state.isOpen;
	        var checkedStatus = this._getChildrenChecked(item, item.checked, recursive);
	        var checked = checkedStatus.isChecked;
	        var itemClassName = classNames({
	            'expanded': this.state.isOpen,
	            'collapsed': !this.state.isOpen
	        });
	        var parentItemClassName = classNames({
	            'treeveiw-parent-item': item.children.length > 0
	        });
	        var treeveiwItemClassName = classNames('treeveiw-content');
	        var selectedClassName = classNames({
	            'partial-selected': recursive && checkedStatus.hasCheckedChild && !checked
	        });
	        return React.createElement("div", { className: parentItemClassName }, React.createElement("div", { className: 'treeview-item' }, item.children.length > 0 && React.createElement(Icon_1.Icon, { iconName: this.state.iconArrow, onClick: this._onItemClick.bind(this) }), React.createElement("div", { className: treeveiwItemClassName }, showCheckbox && React.createElement(Checkbox_1.Checkbox, { label: item.text, onChange: this._onItemSelect.bind(this, item, checked), checked: checked, className: selectedClassName }), !showCheckbox && React.createElement("span", { onClick: this._onItemSelect.bind(this, item, true) }, item.text))), React.createElement("div", { className: itemClassName }, item.children.length > 0 && item.children.map(function (child, index) {
	            return React.createElement(TreeviewItem, { item: child, onChange: onChange, key: index, showCheckbox: showCheckbox, children: child.children, recursive: recursive });
	        })));
	    };
	    TreeviewItem.prototype._onItemSelect = function (item, checked, ev) {
	        if (this.props.showCheckbox) {
	            var items = [];
	            items.push(item.id);
	            if (this.props.recursive) {
	                items = items.concat(this._getChildrenId(this.props.children));
	            }
	            this.props.onChange(ev, items, !checked);
	        } else {
	            this.props.onChange(ev, [item.id], checked);
	        }
	    };
	    TreeviewItem.prototype._getChildrenId = function (children) {
	        var _this = this;
	        var result = [];
	        children.forEach(function (item) {
	            result.push(item.id);
	            if (item.children.length > 0) {
	                result = result.concat(_this._getChildrenId(item.children));
	            }
	        });
	        return result;
	    };
	    TreeviewItem.prototype._onItemClick = function (ev) {
	        var isOpen = this.state.isOpen;
	        this.setState({
	            isOpen: !isOpen,
	            iconArrow: isOpen ? 'icon-arrowRight' : 'icon-arrowDownRight'
	        });
	        ev.stopPropagation();
	        ev.preventDefault();
	    };
	    TreeviewItem.prototype._getChildrenChecked = function (item, checked, recursive) {
	        var _this = this;
	        var result = { isChecked: true, hasCheckedChild: false };
	        if (item.children.length === 0 || !recursive) {
	            result.isChecked = checked === undefined ? false : checked;
	        } else {
	            item.children.forEach(function (element) {
	                if (element.checked) {
	                    result.hasCheckedChild = true;
	                }
	                var childStatus = _this._getChildrenChecked(element, element.checked, recursive);
	                result.isChecked = result.isChecked && childStatus.isChecked;
	                if (childStatus.hasCheckedChild) {
	                    result.hasCheckedChild = true;
	                }
	            });
	        }
	        return result;
	    };
	    TreeviewItem.defaultProps = {
	        isOpen: false
	    };
	    __decorate([autobind_1.autobind, __metadata('design:type', Function), __metadata('design:paramtypes', [Object, Object, Object]), __metadata('design:returntype', void 0)], TreeviewItem.prototype, "_onItemSelect", null);
	    __decorate([autobind_1.autobind, __metadata('design:type', Function), __metadata('design:paramtypes', [Object]), __metadata('design:returntype', void 0)], TreeviewItem.prototype, "_getChildrenId", null);
	    __decorate([autobind_1.autobind, __metadata('design:type', Function), __metadata('design:paramtypes', [MouseEvent]), __metadata('design:returntype', void 0)], TreeviewItem.prototype, "_onItemClick", null);
	    __decorate([autobind_1.autobind, __metadata('design:type', Function), __metadata('design:paramtypes', [Object, Boolean, Boolean]), __metadata('design:returntype', void 0)], TreeviewItem.prototype, "_getChildrenChecked", null);
	    return TreeviewItem;
	}(Common_1.CommonComponent);
	exports.TreeviewItem = TreeviewItem;

/***/ },

/***/ 701:
/***/ function(module, exports, __webpack_require__) {

	// style-loader: Adds some css to the DOM by adding a <style> tag
	
	// load the styles
	var content = __webpack_require__(702);
	if(typeof content === 'string') content = [[module.id, content, '']];
	// add the styles to the DOM
	var update = __webpack_require__(484)(content, {});
	if(content.locals) module.exports = content.locals;
	// Hot Module Replacement
	if(false) {
		// When the styles change, update the <style> tags
		if(!content.locals) {
			module.hot.accept("!!../../../node_modules/css-loader/index.js!../../../node_modules/sass-loader/index.js?outputStyle=expanded!./Treeview.scss", function() {
				var newContent = require("!!../../../node_modules/css-loader/index.js!../../../node_modules/sass-loader/index.js?outputStyle=expanded!./Treeview.scss");
				if(typeof newContent === 'string') newContent = [[module.id, newContent, '']];
				update(newContent);
			});
		}
		// When the module is disposed, remove the <style> tags
		module.hot.dispose(function() { update(); });
	}

/***/ },

/***/ 702:
/***/ function(module, exports, __webpack_require__) {

	exports = module.exports = __webpack_require__(483)();
	// imports
	
	
	// module
	exports.push([module.id, "::-webkit-scrollbar {\n  width: 13px;\n  margin-top: 10px;\n  border-radius: 15px;\n  margin-right: 3px;\n  background: transparent;\n}\n\n::-webkit-scrollbar-track {\n  border-radius: 15px;\n  margin-top: 7px;\n  background: #EEEFF4;\n  margin-bottom: 7px;\n}\n\n::-webkit-scrollbar-thumb {\n  border-radius: 10px;\n  margin-top: 10px;\n  background: #D2D3D9;\n}\n\n::-webkit-scrollbar-thumb:window-inactive {\n  background: #D2D3D9;\n}\n\n.treeview {\n  font-family: \"Segoe UI WestEuropean\",\"Segoe UI\",-apple-system,BlinkMacSystemFont,Roboto,\"Helvetica Neue\",sans-serif;\n  -webkit-font-smoothing: antialiased;\n  font-size: 14px;\n  margin-left: 19px;\n}\n\n.treeview .collapsed {\n  display: none;\n}\n\n.treeview .expanded {\n  display: block;\n  margin-left: 30px;\n}\n\n.treeview .treeview-item {\n  cursor: pointer;\n  display: flex;\n  align-items: center;\n}\n\n.treeview .treeveiw-content {\n  padding: 2px;\n}\n\n.treeview .treeveiw-content:hover {\n  background-color: #eaeaea;\n}\n\n.treeview .treeveiw-parent-item {\n  margin-left: -19px;\n}\n\n.treeview .partial-selected label:before {\n  content: '\\25FC';\n  color: #b9cb34;\n  font-size: 20px;\n}\n", ""]);
	
	// exports


/***/ },

/***/ 703:
/***/ function(module, exports) {

	"use strict";
	
	exports.elements = [{ id: 'A1', text: 'Option A1' }, { id: 'A2', text: 'Option A2' }, { id: 'A3', text: 'Option A3' }, { id: 'A4', text: 'Option A4' }, { id: 'B1', text: 'Option B1', parentId: 'A1' }, { id: 'B2', text: 'Option B2', parentId: 'A1' }, { id: 'B3', text: 'Option B3', parentId: 'A1', checked: true }, { id: 'B4', text: 'Option B4', parentId: 'A1' }, { id: 'C1', text: 'Option C1', parentId: 'B1' }, { id: 'C2', text: 'Option C2', parentId: 'B1' }, { id: 'C3', text: 'Option C3', parentId: 'B1' }, { id: 'C4', text: 'Option C4', parentId: 'B1' }, { id: 'C5', text: 'Option C5', parentId: 'B1' }, { id: 'C6', text: 'Option C6', parentId: 'B1' }, { id: 'D1', text: 'Option D1', parentId: 'C1' }, { id: 'D2', text: 'Option D2', parentId: 'C1' }, { id: 'D3', text: 'Option D3', parentId: 'C1' }, { id: 'D4', text: 'Option D4', parentId: 'C1' }, { id: 'D5', text: 'Option D5', parentId: 'C1' }, { id: 'D6', text: 'Option D6', parentId: 'C1' }, { id: 'D7', text: 'Option D7', parentId: 'C1' }, { id: 'B11', text: 'Option B1', parentId: 'A2', checked: true }, { id: 'B21', text: 'Option B2', parentId: 'A2', checked: true }, { id: 'B31', text: 'Option B3', parentId: 'A2', checked: true }, { id: 'B41', text: 'Option B4', parentId: 'A2', checked: true }, { id: 'C11', text: 'Option C1', parentId: 'B2' }, { id: 'C21', text: 'Option C2', parentId: 'B2' }, { id: 'C31', text: 'Option C3', parentId: 'B2' }, { id: 'C41', text: 'Option C4', parentId: 'B2' }, { id: 'C51', text: 'Option C5', parentId: 'B2' }, { id: 'C61', text: 'Option C6', parentId: 'B2' }, { id: 'D11', text: 'Option D1', parentId: 'C2' }, { id: 'D21', text: 'Option D2', parentId: 'C2' }, { id: 'D31', text: 'Option D3', parentId: 'C2' }, { id: 'D41', text: 'Option D4', parentId: 'C2' }, { id: 'D51', text: 'Option D5', parentId: 'C2' }, { id: 'D61', text: 'Option D6', parentId: 'C2' }, { id: 'D71', text: 'Option D7', parentId: 'C2' }, { id: 'E1', text: 'Option E1', parentId: 'D1' }, { id: 'E2', text: 'Option E2', parentId: 'D1' }, { id: 'E3', text: 'Option E3', parentId: 'D1' }, { id: 'E4', text: 'Option E4', parentId: 'D1' }, { id: 'E5', text: 'Option E5', parentId: 'D1' }, { id: 'E6', text: 'Option E6', parentId: 'D1' }, { id: 'F1', text: 'Option F1', parentId: 'E1' }, { id: 'F2', text: 'Option F2', parentId: 'E1' }, { id: 'F3', text: 'Option F3', parentId: 'E1' }, { id: 'F4', text: 'Option F4', parentId: 'E1' }, { id: 'F5', text: 'Option F5', parentId: 'E1' }, { id: 'F6', text: 'Option F6', parentId: 'E1' }, { id: 'G1', text: 'Option G1', parentId: 'F1' }, { id: 'G2', text: 'Option G2', parentId: 'F1' }, { id: 'G3', text: 'Option G3', parentId: 'F1' }, { id: 'G4', text: 'Option G4', parentId: 'F1' }, { id: 'G5', text: 'Option G5', parentId: 'F1' }, { id: 'G6', text: 'Option G6', parentId: 'F1' }, { id: 'G7', text: 'Option G7', parentId: 'F1' }, { id: 'H1', text: 'Option H1', parentId: 'G1' }, { id: 'H2', text: 'Option H2', parentId: 'G1' }, { id: 'H3', text: 'Option H3', parentId: 'G1' }, { id: 'H4', text: 'Option H4', parentId: 'G1' }, { id: 'H5', text: 'Option H5', parentId: 'G1' }, { id: 'H6', text: 'Option H6', parentId: 'G1' }, { id: 'H7', text: 'Option H7', parentId: 'G1' }, { id: 'H8', text: 'Option H8', parentId: 'G1' }, { id: 'H11', text: 'Option H1', parentId: 'G2' }, { id: 'H21', text: 'Option H2', parentId: 'G2' }, { id: 'H31', text: 'Option H3', parentId: 'G2' }, { id: 'H41', text: 'Option H4', parentId: 'G2' }, { id: 'H51', text: 'Option H5', parentId: 'G2' }, { id: 'H61', text: 'Option H6', parentId: 'G2' }, { id: 'H71', text: 'Option H7', parentId: 'G2' }, { id: 'H81', text: 'Option H8', parentId: 'G2' }, { id: 'E11', text: 'Option E1', parentId: 'D21' }, { id: 'E21', text: 'Option E2', parentId: 'D21' }, { id: 'E31', text: 'Option E3', parentId: 'D21' }, { id: 'E41', text: 'Option E4', parentId: 'D21' }, { id: 'E51', text: 'Option E5', parentId: 'D21' }, { id: 'E61', text: 'Option E6', parentId: 'D21' }, { id: 'F11', text: 'Option F1', parentId: 'E21' }, { id: 'F21', text: 'Option F2', parentId: 'E21' }, { id: 'F31', text: 'Option F3', parentId: 'E21' }, { id: 'F41', text: 'Option F4', parentId: 'E21' }, { id: 'F51', text: 'Option F5', parentId: 'E21' }, { id: 'F61', text: 'Option F6', parentId: 'E21' }, { id: 'G11', text: 'Option G1', parentId: 'F21' }, { id: 'G21', text: 'Option G2', parentId: 'F21' }, { id: 'G31', text: 'Option G3', parentId: 'F21' }, { id: 'G41', text: 'Option G4', parentId: 'F21' }, { id: 'G51', text: 'Option G5', parentId: 'F2' }, { id: 'G61', text: 'Option G6', parentId: 'F2' }, { id: 'G71', text: 'Option G7', parentId: 'F2' }];

/***/ }

});
//# sourceMappingURL=Treeview.5af099dfabf0e722b9fa.js.map