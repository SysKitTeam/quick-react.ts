webpackJsonp([23],{

/***/ 0:
/***/ function(module, exports, __webpack_require__) {

	"use strict";
	/* tslint:disable:no-console */
	
	__webpack_require__(1);
	__webpack_require__(298);
	var React = __webpack_require__(299);
	var ReactDOM = __webpack_require__(329);
	var Ribbon_1 = __webpack_require__(680);
	var Index = function (_super) {
	    __extends(Index, _super);
	    function Index() {
	        _super.apply(this, arguments);
	    }
	    Index.prototype.render = function () {
	        return React.createElement("div", null, React.createElement(Ribbon_1.Ribbon, { isSearchBoxVisible: true, items: [{
	                key: 'item1',
	                name: 'item1'
	            }, {
	                key: 'divider_1',
	                name: '-'
	            }, {
	                key: 'item2',
	                name: 'item2'
	            }, {
	                key: 'item3',
	                name: 'item3'
	            }] }));
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

/***/ 501:
/***/ function(module, exports, __webpack_require__) {

	"use strict";
	
	var React = __webpack_require__(299);
	var DirectionalHint_1 = __webpack_require__(502);
	var attributes_1 = __webpack_require__(478);
	var object_1 = __webpack_require__(479);
	var getId_1 = __webpack_require__(503);
	var rtl_1 = __webpack_require__(504);
	var classNames = __webpack_require__(476);
	var autobind_1 = __webpack_require__(507);
	var KeyCodes_1 = __webpack_require__(505);
	var getDocument_1 = __webpack_require__(506);
	var Common_1 = __webpack_require__(508);
	var Icon_1 = __webpack_require__(480);
	var Callout_1 = __webpack_require__(511);
	__webpack_require__(533);
	function hasSubmenuItems(item) {
	    var submenuItems = item.items;
	    return !!(submenuItems && submenuItems.length);
	}
	exports.hasSubmenuItems = hasSubmenuItems;
	var ContextualMenu = function (_super) {
	    __extends(ContextualMenu, _super);
	    function ContextualMenu(props) {
	        _super.call(this, props);
	        this.state = {
	            contextualMenuItems: null,
	            subMenuId: getId_1.getId('contextualMenu')
	        };
	        this._isFocusingPreviousElement = false;
	        this._enterTimerId = 0;
	    }
	    ContextualMenu.prototype.render = function () {
	        var _this = this;
	        var _a = this.props,
	            className = _a.className,
	            items = _a.items,
	            isBeakVisible = _a.isBeakVisible,
	            labelElementId = _a.labelElementId,
	            id = _a.id,
	            targetPoint = _a.targetPoint,
	            useTargetPoint = _a.useTargetPoint,
	            beakWidth = _a.beakWidth,
	            directionalHint = _a.directionalHint,
	            gapSpace = _a.gapSpace,
	            coverTarget = _a.coverTarget,
	            ariaLabel = _a.ariaLabel,
	            doNotLayer = _a.doNotLayer,
	            target = _a.target;
	        var submenuProps = this.state.submenuProps;
	        var hasIcons = !!(items && items.some(function (item) {
	            return !!item.iconProps;
	        }));
	        var hasCheckmarks = !!(items && items.some(function (item) {
	            return !!item.canCheck;
	        }));
	        return React.createElement(Callout_1.Callout, { target: target, targetPoint: targetPoint, useTargetPoint: useTargetPoint, isBeakVisible: isBeakVisible, beakWidth: beakWidth, directionalHint: directionalHint, gapSpace: gapSpace, coverTarget: coverTarget, doNotLayer: doNotLayer, className: 'contextualMenu-Callout', setInitialFocus: true, onDismiss: this.props.onDismiss }, React.createElement("div", { ref: function (host) {
	                return _this._host = host;
	            }, id: id, className: classNames('contextualMenu-container', className) }, items && items.length ? React.createElement("div", { className: 'contextualMenu is-open' }, React.createElement("ul", { className: 'contextualMenu-list is-open', onKeyDown: this._onKeyDown, "aria-label": ariaLabel }, items.map(function (item, index) {
	            return item.name === '-' ? React.createElement("li", { role: "separator", key: item.key || index, className: classNames('contextualMenu-divider', item.className) }) : React.createElement("li", { role: "menuitem", title: item.title, key: item.key || index, className: classNames('contextualMenu-item', item.className) }, _this._renderMenuItem(item, index, hasCheckmarks, hasIcons));
	        }))) : null, submenuProps ? React.createElement(ContextualMenu, __assign({}, submenuProps)) : null));
	    };
	    ContextualMenu.prototype.dismiss = function (ev, dismissAll) {
	        var onDismiss = this.props.onDismiss;
	        if (onDismiss) {
	            onDismiss(ev, dismissAll);
	        }
	    };
	    ContextualMenu.prototype._onKeyDown = function (ev) {
	        var submenuCloseKey = rtl_1.getRTL() ? KeyCodes_1.KeyCodes.right : KeyCodes_1.KeyCodes.left;
	        if (ev.which === KeyCodes_1.KeyCodes.escape || ev.which === KeyCodes_1.KeyCodes.tab || ev.which === submenuCloseKey && this.props.isSubMenu) {
	            // When a user presses escape, we will try to refocus the previous focused element.
	            this._isFocusingPreviousElement = true;
	            ev.preventDefault();
	            ev.stopPropagation();
	            this.dismiss(ev);
	        }
	    };
	    ContextualMenu.prototype.componentWillUpdate = function (newProps) {
	        if (newProps.target !== this.props.target) {
	            var newTarget = newProps.target;
	            this._setTargetWindowAndElement(newTarget);
	        }
	    };
	    ContextualMenu.prototype.componentWillMount = function () {
	        var target = this.props.target;
	        this._setTargetWindowAndElement(target);
	        this._previousActiveElement = this._targetWindow ? this._targetWindow.document.activeElement : null;
	    };
	    ContextualMenu.prototype.componentDidMount = function () {
	        this._events.on(this._targetWindow, 'resize', this.dismiss);
	    };
	    ContextualMenu.prototype.componentWillUnmount = function () {
	        var _this = this;
	        if (this._isFocusingPreviousElement && this._previousActiveElement) {
	            setTimeout(function () {
	                return _this._previousActiveElement.focus();
	            }, 0);
	        }
	        this._events.dispose();
	    };
	    ContextualMenu.prototype._setTargetWindowAndElement = function (target) {
	        if (target) {
	            if (typeof target === 'string') {
	                var currentDoc = getDocument_1.getDocument();
	                this._target = currentDoc ? currentDoc.querySelector(target) : null;
	                this._targetWindow = getDocument_1.getWindow();
	            } else if (target.stopPropagation) {
	                this._target = target;
	                this._targetWindow = getDocument_1.getWindow(target.toElement);
	            } else {
	                var targetElement = target;
	                this._target = target;
	                this._targetWindow = getDocument_1.getWindow(targetElement);
	            }
	        } else {
	            this._targetWindow = getDocument_1.getWindow();
	        }
	    };
	    ContextualMenu.prototype._renderMenuItem = function (item, index, hasCheckmarks, hasIcons) {
	        if (item.onRender) {
	            return item.onRender(item);
	        }
	        if (item.href) {
	            return this._renderAnchorMenuItem(item, index, hasCheckmarks, hasIcons);
	        }
	        return this._renderButtonItem(item, index, hasCheckmarks, hasIcons);
	    };
	    ContextualMenu.prototype._renderAnchorMenuItem = function (item, index, hasCheckmarks, hasIcons) {
	        return React.createElement("div", null, React.createElement("a", __assign({}, attributes_1.getNativeAttributes(item, attributes_1.anchorAttributes), { href: item.href, className: classNames('contextualMenu-link', item.disabled ? 'is-disabled' : ''), role: "menuitem", onClick: this._onAnchorClick.bind(this, item) }), hasIcons ? this._renderIcon(item) : null, React.createElement("span", { className: 'contextualMenu-linkText' }, " ", item.name, " ")));
	    };
	    ContextualMenu.prototype._renderIcon = function (item) {
	        var iconProps = item.iconProps;
	        var iconColorClassName = iconProps.iconName === '' ? '' : 'contextualMenu-iconColor';
	        var iconClassName = classNames('contextualMenu-icon', iconColorClassName, iconProps.className);
	        return React.createElement(Icon_1.Icon, __assign({}, iconProps, { className: iconClassName }));
	    };
	    ContextualMenu.prototype._onAnchorClick = function (item, ev) {
	        this._executeItemClick(item, ev);
	        ev.stopPropagation();
	    };
	    ContextualMenu.prototype._executeItemClick = function (item, ev) {
	        if (item.onClick) {
	            item.onClick(ev, item);
	        }
	        this.dismiss(ev, true);
	    };
	    ContextualMenu.prototype._renderMenuItemChildren = function (item, index, hasCheckmarks, hasIcons) {
	        var isItemChecked = item.checked;
	        return React.createElement("div", { className: "contextualMenu-linkContent" }, hasCheckmarks ? React.createElement(Icon_1.Icon, { iconName: isItemChecked ? 'icon-checkmark' : '', className: 'contextualMenu-icon', onClick: this._onItemClick.bind(this, item) }) : null, hasIcons ? this._renderIcon(item) : null, React.createElement("span", { className: 'contextualMenu-itemText' }, item.name), item.items && item.items.length ? React.createElement(Icon_1.Icon, { className: 'contextualMenu-submenu-chevron', iconName: rtl_1.getRTL() ? 'icon-arrowLeftSlim' : 'icon-arrowRightSlim' }) : null);
	    };
	    ContextualMenu.prototype._onItemMouseEnter = function (item, ev) {
	        var _this = this;
	        var targetElement = ev.currentTarget;
	        if (item.key !== this.state.expandedMenuItemKey) {
	            if (item.items && item.items.length) {
	                this._enterTimerId = this._async.setTimeout(function () {
	                    return _this._onItemSubMenuExpand(item, targetElement);
	                }, 500);
	            } else {
	                this._enterTimerId = this._async.setTimeout(function () {
	                    return _this._onSubMenuDismiss(ev);
	                }, 500);
	            }
	        }
	    };
	    ContextualMenu.prototype._onMouseLeave = function (ev) {
	        this._async.clearTimeout(this._enterTimerId);
	    };
	    ContextualMenu.prototype._onItemMouseDown = function (item, ev) {
	        if (item.onMouseDown) {
	            item.onMouseDown(item, ev);
	        }
	    };
	    ContextualMenu.prototype._renderButtonItem = function (item, index, hasCheckmarks, hasIcons) {
	        var _this = this;
	        var _a = this.state,
	            expandedMenuItemKey = _a.expandedMenuItemKey,
	            subMenuId = _a.subMenuId;
	        var ariaLabel = '';
	        if (item.ariaLabel) {
	            ariaLabel = item.ariaLabel;
	        } else if (item.name) {
	            ariaLabel = item.name;
	        }
	        var itemButtonProperties = {
	            className: classNames('contextualMenu-link', { 'is-expanded': expandedMenuItemKey === item.key }),
	            onClick: this._onItemClick.bind(this, item),
	            onKeyDown: item.items && item.items.length ? this._onItemKeyDown.bind(this, item) : null,
	            onMouseEnter: this._onItemMouseEnter.bind(this, item),
	            onMouseLeave: this._onMouseLeave,
	            onMouseDown: function (ev) {
	                return _this._onItemMouseDown(item, ev);
	            },
	            disabled: item.disabled,
	            role: 'menuitem',
	            href: item.href,
	            title: item.title,
	            'aria-label': ariaLabel,
	            'aria-haspopup': item.items && item.items.length ? true : null,
	            'aria-owns': item.key === expandedMenuItemKey ? subMenuId : null
	        };
	        return React.createElement('button', object_1.assign({}, attributes_1.getNativeAttributes(item, attributes_1.buttonAttributes), itemButtonProperties), this._renderMenuItemChildren(item, index, hasCheckmarks, hasIcons));
	    };
	    ContextualMenu.prototype._onItemKeyDown = function (item, ev) {
	        var openKey = rtl_1.getRTL() ? KeyCodes_1.KeyCodes.left : KeyCodes_1.KeyCodes.right;
	        if (ev.which === openKey) {
	            this._onItemSubMenuExpand(item, ev.currentTarget);
	        }
	    };
	    ContextualMenu.prototype._onItemSubMenuExpand = function (item, target) {
	        if (this.state.expandedMenuItemKey !== item.key) {
	            if (this.state.submenuProps) {
	                this._onSubMenuDismiss();
	            }
	            this.setState({
	                expandedMenuItemKey: item.key,
	                submenuProps: {
	                    items: item.items,
	                    target: target,
	                    onDismiss: this._onSubMenuDismiss,
	                    isSubMenu: true,
	                    id: this.state.subMenuId,
	                    shouldFocusOnMount: true,
	                    directionalHint: rtl_1.getRTL() ? DirectionalHint_1.DirectionalHint.leftTopEdge : DirectionalHint_1.DirectionalHint.rightTopEdge,
	                    className: this.props.className,
	                    gapSpace: 0
	                }
	            });
	        }
	    };
	    ContextualMenu.prototype._onSubMenuDismiss = function (ev, dismissAll) {
	        if (dismissAll) {
	            this.dismiss(ev, dismissAll);
	        } else {
	            this.setState({
	                dismissedMenuItemKey: this.state.expandedMenuItemKey,
	                expandedMenuItemKey: null,
	                submenuProps: null
	            });
	        }
	    };
	    ContextualMenu.prototype._onItemClick = function (item, ev) {
	        if (item.key !== this.state.expandedMenuItemKey) {
	            if (!item.items || !item.items.length) {
	                this._executeItemClick(item, ev);
	            } else {
	                if (item.key === this.state.dismissedMenuItemKey) {
	                    this._onSubMenuDismiss(ev);
	                } else {
	                    this._onItemSubMenuExpand(item, ev.currentTarget);
	                }
	            }
	        }
	        ev.stopPropagation();
	        ev.preventDefault();
	    };
	    ContextualMenu.defaultProps = {
	        items: [],
	        shouldFocusOnMount: true,
	        isBeakVisible: false,
	        gapSpace: 0,
	        directionalHint: DirectionalHint_1.DirectionalHint.bottomAutoEdge,
	        beakWidth: 16
	    };
	    __decorate([autobind_1.autobind, __metadata('design:type', Function), __metadata('design:paramtypes', [Object, Boolean]), __metadata('design:returntype', void 0)], ContextualMenu.prototype, "dismiss", null);
	    __decorate([autobind_1.autobind, __metadata('design:type', Function), __metadata('design:paramtypes', [Object]), __metadata('design:returntype', void 0)], ContextualMenu.prototype, "_onKeyDown", null);
	    __decorate([autobind_1.autobind, __metadata('design:type', Function), __metadata('design:paramtypes', [Object]), __metadata('design:returntype', void 0)], ContextualMenu.prototype, "_onMouseLeave", null);
	    __decorate([autobind_1.autobind, __metadata('design:type', Function), __metadata('design:paramtypes', [Object, Boolean]), __metadata('design:returntype', void 0)], ContextualMenu.prototype, "_onSubMenuDismiss", null);
	    return ContextualMenu;
	}(Common_1.CommonComponent);
	exports.ContextualMenu = ContextualMenu;

/***/ },

/***/ 502:
/***/ function(module, exports) {

	"use strict";
	
	(function (DirectionalHint) {
	    DirectionalHint[DirectionalHint["topLeftEdge"] = 0] = "topLeftEdge";
	    DirectionalHint[DirectionalHint["topCenter"] = 1] = "topCenter";
	    DirectionalHint[DirectionalHint["topRightEdge"] = 2] = "topRightEdge";
	    DirectionalHint[DirectionalHint["topAutoEdge"] = 3] = "topAutoEdge";
	    DirectionalHint[DirectionalHint["bottomLeftEdge"] = 4] = "bottomLeftEdge";
	    DirectionalHint[DirectionalHint["bottomCenter"] = 5] = "bottomCenter";
	    DirectionalHint[DirectionalHint["bottomRightEdge"] = 6] = "bottomRightEdge";
	    DirectionalHint[DirectionalHint["bottomAutoEdge"] = 7] = "bottomAutoEdge";
	    DirectionalHint[DirectionalHint["leftTopEdge"] = 8] = "leftTopEdge";
	    DirectionalHint[DirectionalHint["leftCenter"] = 9] = "leftCenter";
	    DirectionalHint[DirectionalHint["leftBottomEdge"] = 10] = "leftBottomEdge";
	    DirectionalHint[DirectionalHint["rightTopEdge"] = 11] = "rightTopEdge";
	    DirectionalHint[DirectionalHint["rightCenter"] = 12] = "rightCenter";
	    DirectionalHint[DirectionalHint["rightBottomEdge"] = 13] = "rightBottomEdge";
	})(exports.DirectionalHint || (exports.DirectionalHint = {}));
	var DirectionalHint = exports.DirectionalHint;

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

/***/ 504:
/***/ function(module, exports, __webpack_require__) {

	"use strict";
	
	var KeyCodes_1 = __webpack_require__(505);
	var getDocument_1 = __webpack_require__(506);
	var _isRTL = false;
	/**
	 * Gets the rtl state of the page (returns true if in rtl.)
	 */
	function getRTL() {
	    if (_isRTL === undefined) {
	        var doc = getDocument_1.getDocument();
	        if (doc) {
	            _isRTL = document.documentElement.getAttribute('dir') === 'rtl';
	        } else {
	            throw new Error('getRTL was called in a server environment without setRTL being called first. ' + 'Call setRTL to set the correct direction first.');
	        }
	    }
	    return _isRTL;
	}
	exports.getRTL = getRTL;
	function setRTL(isRTL) {
	    var doc = getDocument_1.getDocument();
	    if (doc) {
	        doc.documentElement.setAttribute('dir', isRTL ? 'rtl' : 'ltr');
	    }
	    _isRTL = isRTL;
	}
	exports.setRTL = setRTL;
	function getRTLSafeKeyCode(key) {
	    if (getRTL()) {
	        if (key === KeyCodes_1.KeyCodes.left) {
	            key = KeyCodes_1.KeyCodes.right;
	        } else if (key === KeyCodes_1.KeyCodes.right) {
	            key = KeyCodes_1.KeyCodes.left;
	        }
	    }
	    return key;
	}
	exports.getRTLSafeKeyCode = getRTLSafeKeyCode;

/***/ },

/***/ 505:
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

/***/ 506:
/***/ function(module, exports) {

	"use strict";
	
	function getDocument(rootElement) {
	    if (_isSSR) {
	        return undefined;
	    } else {
	        return rootElement && rootElement.ownerDocument ? rootElement.ownerDocument : document;
	    }
	}
	exports.getDocument = getDocument;
	var _isSSR = false;
	function setSSR(isEnabled) {
	    _isSSR = isEnabled;
	}
	exports.setSSR = setSSR;
	function getWindow(rootElement) {
	    if (_isSSR) {
	        return undefined;
	    } else {
	        return rootElement && rootElement.ownerDocument && rootElement.ownerDocument.defaultView ? rootElement.ownerDocument.defaultView : window;
	    }
	}
	exports.getWindow = getWindow;

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

/***/ 511:
/***/ function(module, exports, __webpack_require__) {

	"use strict";
	
	var React = __webpack_require__(299);
	var CalloutContent_1 = __webpack_require__(512);
	var Layers_1 = __webpack_require__(523);
	var Callout = function (_super) {
	    __extends(Callout, _super);
	    function Callout(props) {
	        _super.call(this, props);
	    }
	    Callout.prototype.render = function () {
	        var content = React.createElement(CalloutContent_1.CalloutContent, __assign({}, this.props));
	        return this.props.doNotLayer ? content : React.createElement(Layers_1.Layer, { className: this.props.layerClassName }, content);
	    };
	    return Callout;
	}(React.Component);
	exports.Callout = Callout;

/***/ },

/***/ 512:
/***/ function(module, exports, __webpack_require__) {

	"use strict";
	/* tslint:disable:no-unused-variable */
	
	var React = __webpack_require__(299);
	var DirectionalHint_1 = __webpack_require__(502);
	var autobind_1 = __webpack_require__(507);
	var classNames = __webpack_require__(476);
	var elementContains_1 = __webpack_require__(513);
	var getDocument_1 = __webpack_require__(506);
	var positioning_1 = __webpack_require__(516);
	var focus_1 = __webpack_require__(519);
	var object_1 = __webpack_require__(479);
	var Popup_1 = __webpack_require__(520);
	var Common_1 = __webpack_require__(508);
	__webpack_require__(521);
	var BEAK_ORIGIN_POSITION = { top: 0, left: 0 };
	var OFF_SCREEN_POSITION = { top: -9999, left: 0 };
	var BORDER_WIDTH = 1;
	var SPACE_FROM_EDGE = 8;
	var CalloutContent = function (_super) {
	    __extends(CalloutContent, _super);
	    function CalloutContent(props) {
	        _super.call(this, props, { 'beakStyle': 'beakWidth' });
	        this._didSetInitialFocus = false;
	        this.state = {
	            positions: null,
	            slideDirectionalClassName: null,
	            calloutElementRect: null
	        };
	        this._positionAttempts = 0;
	        this._borderWidth = this.props.hideBorder ? 0 : BORDER_WIDTH;
	    }
	    CalloutContent.prototype.componentDidUpdate = function () {
	        this._setInitialFocus();
	        this._updatePosition();
	    };
	    CalloutContent.prototype.componentWillMount = function () {
	        var target = this.props.targetElement ? this.props.targetElement : this.props.target;
	        this._setTargetWindowAndElement(target);
	    };
	    CalloutContent.prototype.componentWillUpdate = function (newProps) {
	        if (newProps.targetElement !== this.props.targetElement || newProps.target !== this.props.target) {
	            var newTarget = newProps.targetElement ? newProps.targetElement : newProps.target;
	            this._setTargetWindowAndElement(newTarget);
	        }
	    };
	    CalloutContent.prototype.componentDidMount = function () {
	        this._onComponentDidMount();
	    };
	    CalloutContent.prototype.render = function () {
	        var _this = this;
	        if (!this._targetWindow) {
	            return null;
	        }
	        var _a = this.props,
	            className = _a.className,
	            target = _a.target,
	            targetElement = _a.targetElement,
	            isBeakVisible = _a.isBeakVisible,
	            children = _a.children,
	            beakWidth = _a.beakWidth;
	        var _b = this.state,
	            positions = _b.positions,
	            slideDirectionalClassName = _b.slideDirectionalClassName;
	        var beakStyleWidth = beakWidth;
	        var beakReactStyle = {
	            top: positions && positions.beak ? positions.beak.top : BEAK_ORIGIN_POSITION.top,
	            left: positions && positions.beak ? positions.beak.left : BEAK_ORIGIN_POSITION.left,
	            height: beakStyleWidth,
	            width: beakStyleWidth
	        };
	        var contentMaxHeight = this._getMaxHeight();
	        var beakVisible = isBeakVisible && (!!targetElement || !!target);
	        var content = React.createElement("div", { ref: this._resolveRef('_hostElement'), className: 'callout-container' }, React.createElement("div", { className: classNames('callout', className, { 'callout-no-border': this.props.hideBorder }, slideDirectionalClassName ? "" + slideDirectionalClassName : ''), style: positions ? positions.callout : OFF_SCREEN_POSITION, ref: this._resolveRef('_calloutElement') }, beakVisible ? React.createElement("div", { className: 'callout-beak', style: beakReactStyle }) : null, beakVisible ? React.createElement("div", { className: "callout-beak-curtain" }) : null, React.createElement(Popup_1.Popup, { className: "callout-main", onDismiss: function (ev) {
	                return _this.dismiss();
	            }, shouldRestoreFocus: true, style: { maxHeight: contentMaxHeight } }, children)));
	        return content;
	    };
	    CalloutContent.prototype.dismiss = function () {
	        var onDismiss = this.props.onDismiss;
	        if (onDismiss) {
	            onDismiss();
	        }
	    };
	    CalloutContent.prototype._dismissOnLostFocus = function (ev) {
	        var target = ev.target;
	        if (ev.target !== this._targetWindow && this._hostElement && !elementContains_1.elementContains(this._hostElement, target) && (this._target.stopPropagation || !this._target || !elementContains_1.elementContains(this._target, target))) {
	            this.dismiss();
	        }
	    };
	    CalloutContent.prototype._setInitialFocus = function () {
	        if (this.props.setInitialFocus && !this._didSetInitialFocus && this.state.positions) {
	            this._didSetInitialFocus = true;
	            focus_1.focusFirstChild(this._calloutElement);
	        }
	    };
	    CalloutContent.prototype._onComponentDidMount = function () {
	        this._events.on(this._targetWindow, 'scroll', this._dismissOnLostFocus, true);
	        this._events.on(this._targetWindow, 'resize', this.dismiss, true);
	        this._events.on(this._targetWindow, 'focus', this._dismissOnLostFocus, true);
	        this._events.on(this._targetWindow, 'click', this._dismissOnLostFocus, true);
	        if (this.props.onLayerMounted) {
	            this.props.onLayerMounted();
	        }
	        this._updatePosition();
	    };
	    CalloutContent.prototype._updatePosition = function () {
	        var positions = this.state.positions;
	        var hostElement = this._hostElement;
	        var calloutElement = this._calloutElement;
	        if (hostElement && calloutElement) {
	            var currentProps = void 0;
	            currentProps = object_1.assign(currentProps, this.props);
	            currentProps.bounds = this._getBounds();
	            if (this.props.targetElement) {
	                currentProps.targetElement = this._target;
	            } else {
	                currentProps.target = this._target;
	            }
	            var positionInfo = positioning_1.getRelativePositions(currentProps, hostElement, calloutElement);
	            if (!positions && positionInfo || positions && positionInfo && (positions.callout.top.toFixed(2) !== positionInfo.calloutPosition.top.toFixed(2) || positions.callout.left.toFixed(2) !== positionInfo.calloutPosition.left.toFixed(2)) && this._positionAttempts < 5) {
	                this._positionAttempts++;
	                this.setState({
	                    positions: {
	                        callout: positionInfo.calloutPosition,
	                        beak: positionInfo.beakPosition
	                    },
	                    slideDirectionalClassName: positionInfo.directionalClassName
	                });
	            } else {
	                this._positionAttempts = 0;
	            }
	        }
	    };
	    CalloutContent.prototype._getBounds = function () {
	        if (!this._bounds) {
	            var currentBounds = this.props.bounds;
	            if (!currentBounds) {
	                currentBounds = {
	                    top: 0 + SPACE_FROM_EDGE,
	                    left: 0 + SPACE_FROM_EDGE,
	                    right: this._targetWindow.innerWidth - SPACE_FROM_EDGE,
	                    bottom: this._targetWindow.innerHeight - SPACE_FROM_EDGE,
	                    width: this._targetWindow.innerWidth - SPACE_FROM_EDGE * 2,
	                    height: this._targetWindow.innerHeight - SPACE_FROM_EDGE * 2
	                };
	            }
	            this._bounds = currentBounds;
	        }
	        return this._bounds;
	    };
	    CalloutContent.prototype._getMaxHeight = function () {
	        if (!this._maxHeight) {
	            this._maxHeight = this._getBounds().height - this._borderWidth * 2;
	        }
	        return this._maxHeight;
	    };
	    CalloutContent.prototype._setTargetWindowAndElement = function (target) {
	        if (target) {
	            if (typeof target === 'string') {
	                var currentDoc = getDocument_1.getDocument();
	                this._target = currentDoc ? currentDoc.querySelector(target) : null;
	                this._targetWindow = getDocument_1.getWindow();
	            } else if (target.stopPropagation) {
	                this._target = target;
	                this._targetWindow = getDocument_1.getWindow(target.toElement);
	            } else {
	                var targetElement = target;
	                this._target = target;
	                this._targetWindow = getDocument_1.getWindow(targetElement);
	            }
	        } else {
	            this._targetWindow = getDocument_1.getWindow();
	        }
	    };
	    CalloutContent.defaultProps = {
	        isBeakVisible: true,
	        hideBorder: false,
	        beakWidth: 16,
	        gapSpace: 16,
	        directionalHint: DirectionalHint_1.DirectionalHint.bottomAutoEdge
	    };
	    __decorate([autobind_1.autobind, __metadata('design:type', Function), __metadata('design:paramtypes', []), __metadata('design:returntype', void 0)], CalloutContent.prototype, "_setInitialFocus", null);
	    __decorate([autobind_1.autobind, __metadata('design:type', Function), __metadata('design:paramtypes', []), __metadata('design:returntype', void 0)], CalloutContent.prototype, "_onComponentDidMount", null);
	    return CalloutContent;
	}(Common_1.CommonComponent);
	exports.CalloutContent = CalloutContent;

/***/ },

/***/ 513:
/***/ function(module, exports, __webpack_require__) {

	"use strict";
	
	var getParent_1 = __webpack_require__(514);
	function elementContains(parent, child, allowVirtualParents) {
	    if (allowVirtualParents === void 0) {
	        allowVirtualParents = true;
	    }
	    var isContained = false;
	    if (parent && child) {
	        if (allowVirtualParents) {
	            isContained = false;
	            while (child) {
	                var nextParent = getParent_1.getParent(child);
	                if (nextParent === parent) {
	                    isContained = true;
	                    break;
	                }
	                child = nextParent;
	            }
	        } else if (parent.contains) {
	            isContained = parent.contains(child);
	        }
	    }
	    return isContained;
	}
	exports.elementContains = elementContains;

/***/ },

/***/ 514:
/***/ function(module, exports, __webpack_require__) {

	"use strict";
	
	var virtualParent_1 = __webpack_require__(515);
	function getParent(child, allowVirtualParents) {
	    if (allowVirtualParents === void 0) {
	        allowVirtualParents = true;
	    }
	    return child && (allowVirtualParents && virtualParent_1.getVirtualParent(child) || child.parentNode && child.parentNode);
	}
	exports.getParent = getParent;

/***/ },

/***/ 515:
/***/ function(module, exports) {

	"use strict";
	
	function setVirtualParent(child, parent) {
	    var virtualChild = child;
	    var virtualParent = parent;
	    if (!virtualChild._virtual) {
	        virtualChild._virtual = {
	            children: []
	        };
	    }
	    var oldParent = virtualChild._virtual.parent;
	    if (oldParent && oldParent !== parent) {
	        var index = oldParent._virtual.children.indexOf(virtualChild);
	        if (index > -1) {
	            oldParent._virtual.children.splice(index, 1);
	        }
	    }
	    virtualChild._virtual.parent = virtualParent || undefined;
	    if (virtualParent) {
	        if (!virtualParent._virtual) {
	            virtualParent._virtual = {
	                children: []
	            };
	        }
	        virtualParent._virtual.children.push(virtualChild);
	    }
	}
	exports.setVirtualParent = setVirtualParent;
	function getVirtualParent(child) {
	    var parent;
	    if (child && isVirtualElement(child)) {
	        parent = child._virtual.parent;
	    }
	    return parent;
	}
	exports.getVirtualParent = getVirtualParent;
	function isVirtualElement(element) {
	    return element && !!element._virtual;
	}

/***/ },

/***/ 516:
/***/ function(module, exports, __webpack_require__) {

	"use strict";
	
	var DirectionalHint_1 = __webpack_require__(502);
	var Rectangle_1 = __webpack_require__(517);
	var scroll_1 = __webpack_require__(518);
	var object_1 = __webpack_require__(479);
	(function (RectangleEdge) {
	    RectangleEdge[RectangleEdge["top"] = 0] = "top";
	    RectangleEdge[RectangleEdge["bottom"] = 1] = "bottom";
	    RectangleEdge[RectangleEdge["left"] = 2] = "left";
	    RectangleEdge[RectangleEdge["right"] = 3] = "right";
	})(exports.RectangleEdge || (exports.RectangleEdge = {}));
	var RectangleEdge = exports.RectangleEdge;
	var SLIDE_ANIMATIONS = (_a = {}, _a[RectangleEdge.top] = 'slideUpIn20', _a[RectangleEdge.bottom] = 'slideDownIn20', _a[RectangleEdge.left] = 'slideLeftIn20', _a[RectangleEdge.right] = 'slideRightIn20', _a);
	var PositionData = function () {
	    function PositionData(calloutDirection, targetDirection, calloutPercent, targetPercent, beakPercent, isAuto) {
	        this.calloutDirection = calloutDirection;
	        this.targetDirection = targetDirection;
	        this.calloutPercent = calloutPercent;
	        this.targetPercent = targetPercent;
	        this.beakPercent = beakPercent;
	        this.isAuto = isAuto;
	    }
	    return PositionData;
	}();
	exports.PositionData = PositionData;
	var DirectionalDictionary = (_b = {}, _b[DirectionalHint_1.DirectionalHint.topLeftEdge] = new PositionData(RectangleEdge.bottom, RectangleEdge.top, 0, 0, 50, false), _b[DirectionalHint_1.DirectionalHint.topCenter] = new PositionData(RectangleEdge.bottom, RectangleEdge.top, 50, 50, 50, false), _b[DirectionalHint_1.DirectionalHint.topRightEdge] = new PositionData(RectangleEdge.bottom, RectangleEdge.top, 100, 100, 50, false), _b[DirectionalHint_1.DirectionalHint.topAutoEdge] = new PositionData(RectangleEdge.bottom, RectangleEdge.top, 0, 0, 50, true), _b[DirectionalHint_1.DirectionalHint.bottomLeftEdge] = new PositionData(RectangleEdge.top, RectangleEdge.bottom, 0, 0, 50, false), _b[DirectionalHint_1.DirectionalHint.bottomCenter] = new PositionData(RectangleEdge.top, RectangleEdge.bottom, 50, 50, 50, false), _b[DirectionalHint_1.DirectionalHint.bottomRightEdge] = new PositionData(RectangleEdge.top, RectangleEdge.bottom, 100, 100, 50, false), _b[DirectionalHint_1.DirectionalHint.bottomAutoEdge] = new PositionData(RectangleEdge.top, RectangleEdge.bottom, 0, 0, 50, true), _b[DirectionalHint_1.DirectionalHint.leftTopEdge] = new PositionData(RectangleEdge.right, RectangleEdge.left, 0, 0, 50, false), _b[DirectionalHint_1.DirectionalHint.leftCenter] = new PositionData(RectangleEdge.right, RectangleEdge.left, 50, 50, 50, false), _b[DirectionalHint_1.DirectionalHint.leftBottomEdge] = new PositionData(RectangleEdge.right, RectangleEdge.left, 100, 100, 50, false), _b[DirectionalHint_1.DirectionalHint.rightTopEdge] = new PositionData(RectangleEdge.left, RectangleEdge.right, 0, 0, 50, false), _b[DirectionalHint_1.DirectionalHint.rightCenter] = new PositionData(RectangleEdge.left, RectangleEdge.right, 50, 50, 50, false), _b[DirectionalHint_1.DirectionalHint.rightBottomEdge] = new PositionData(RectangleEdge.left, RectangleEdge.right, 100, 100, 50, false), _b);
	var CoverDictionary = (_c = {}, _c[DirectionalHint_1.DirectionalHint.topLeftEdge] = new PositionData(RectangleEdge.top, RectangleEdge.top, 0, 0, 50, false), _c[DirectionalHint_1.DirectionalHint.topCenter] = new PositionData(RectangleEdge.top, RectangleEdge.top, 50, 50, 50, false), _c[DirectionalHint_1.DirectionalHint.topRightEdge] = new PositionData(RectangleEdge.top, RectangleEdge.top, 100, 100, 50, false), _c[DirectionalHint_1.DirectionalHint.topAutoEdge] = new PositionData(RectangleEdge.top, RectangleEdge.top, 0, 0, 50, true), _c[DirectionalHint_1.DirectionalHint.bottomLeftEdge] = new PositionData(RectangleEdge.bottom, RectangleEdge.bottom, 0, 0, 50, false), _c[DirectionalHint_1.DirectionalHint.bottomCenter] = new PositionData(RectangleEdge.bottom, RectangleEdge.bottom, 50, 50, 50, false), _c[DirectionalHint_1.DirectionalHint.bottomRightEdge] = new PositionData(RectangleEdge.bottom, RectangleEdge.bottom, 100, 100, 50, false), _c[DirectionalHint_1.DirectionalHint.bottomAutoEdge] = new PositionData(RectangleEdge.bottom, RectangleEdge.bottom, 0, 0, 50, true), _c[DirectionalHint_1.DirectionalHint.leftTopEdge] = new PositionData(RectangleEdge.left, RectangleEdge.left, 0, 0, 50, false), _c[DirectionalHint_1.DirectionalHint.leftCenter] = new PositionData(RectangleEdge.left, RectangleEdge.left, 50, 50, 50, false), _c[DirectionalHint_1.DirectionalHint.leftBottomEdge] = new PositionData(RectangleEdge.left, RectangleEdge.left, 100, 100, 50, false), _c[DirectionalHint_1.DirectionalHint.rightTopEdge] = new PositionData(RectangleEdge.right, RectangleEdge.right, 0, 0, 50, false), _c[DirectionalHint_1.DirectionalHint.rightCenter] = new PositionData(RectangleEdge.right, RectangleEdge.right, 50, 50, 50, false), _c[DirectionalHint_1.DirectionalHint.rightBottomEdge] = new PositionData(RectangleEdge.right, RectangleEdge.right, 100, 100, 50, false), _c);
	var OppositeEdgeDictionary = (_d = {}, _d[RectangleEdge.top] = RectangleEdge.bottom, _d[RectangleEdge.bottom] = RectangleEdge.top, _d[RectangleEdge.right] = RectangleEdge.left, _d[RectangleEdge.left] = RectangleEdge.right, _d);
	function getRelativePositions(props, hostElement, calloutElement) {
	    var beakWidth = !props.isBeakVisible ? 0 : props.beakWidth;
	    var borderWidth = positioningFunctions._getBorderSize(calloutElement);
	    var gap = positioningFunctions._calculateActualBeakWidthInPixels(beakWidth) / 2 + (props.gapSpace ? props.gapSpace : 0);
	    var boundingRect = props.bounds ? positioningFunctions._getRectangleFromIRect(props.bounds) : new Rectangle_1.Rectangle(0, window.innerWidth - scroll_1.getScrollbarWidth(), 0, window.innerHeight);
	    var targetRect = props.target ? positioningFunctions._getTargetRect(boundingRect, props.target) : positioningFunctions._getTargetRectDEPRECATED(boundingRect, props.targetElement, props.creationEvent, props.targetPoint, props.useTargetPoint);
	    var positionData = positioningFunctions._getPositionData(props.directionalHint, targetRect, boundingRect, props.coverTarget);
	    var positionedCallout = positioningFunctions._positionCalloutWithinBounds(positioningFunctions._getRectangleFromHTMLElement(calloutElement), targetRect, boundingRect, positionData, gap, props.coverTarget);
	    var beakPositioned = positioningFunctions._positionBeak(beakWidth, positionedCallout, targetRect, borderWidth);
	    var finalizedCallout = positioningFunctions._finalizeCalloutPosition(positionedCallout.calloutRectangle, hostElement);
	    return {
	        calloutPosition: { top: finalizedCallout.top, left: finalizedCallout.left },
	        beakPosition: { top: beakPositioned.top, left: beakPositioned.left, display: 'block' },
	        directionalClassName: SLIDE_ANIMATIONS[positionedCallout.targetEdge],
	        submenuDirection: positionedCallout.calloutEdge === RectangleEdge.right ? DirectionalHint_1.DirectionalHint.leftBottomEdge : DirectionalHint_1.DirectionalHint.rightBottomEdge
	    };
	}
	exports.getRelativePositions = getRelativePositions;
	var positioningFunctions;
	(function (positioningFunctions) {
	    function _getTargetRect(bounds, target) {
	        var targetRectangle;
	        if (target.preventDefault) {
	            var ev = target;
	            targetRectangle = new Rectangle_1.Rectangle(ev.clientX, ev.clientX, ev.clientY, ev.clientY);
	        } else {
	            targetRectangle = _getRectangleFromHTMLElement(target);
	        }
	        if (!_isRectangleWithinBounds(targetRectangle, bounds)) {
	            var outOfBounds = _getOutOfBoundsEdges(targetRectangle, bounds);
	            for (var _i = 0, outOfBounds_1 = outOfBounds; _i < outOfBounds_1.length; _i++) {
	                var direction = outOfBounds_1[_i];
	                targetRectangle[RectangleEdge[direction]] = bounds[RectangleEdge[direction]];
	            }
	        }
	        return targetRectangle;
	    }
	    positioningFunctions._getTargetRect = _getTargetRect;
	    function _getTargetRectDEPRECATED(bounds, targetElement, ev, targetPoint, isTargetPoint) {
	        var targetRectangle;
	        if (isTargetPoint) {
	            if (targetPoint) {
	                targetRectangle = new Rectangle_1.Rectangle(targetPoint.x, targetPoint.x, targetPoint.y, targetPoint.y);
	            } else {
	                targetRectangle = new Rectangle_1.Rectangle(ev.clientX, ev.clientX, ev.clientY, ev.clientY);
	            }
	        } else {
	            if (!targetElement) {
	                if (ev && ev.target) {
	                    targetRectangle = _getRectangleFromHTMLElement(ev.target);
	                }
	                targetRectangle = new Rectangle_1.Rectangle();
	            } else {
	                targetRectangle = _getRectangleFromHTMLElement(targetElement);
	            }
	        }
	        if (!_isRectangleWithinBounds(targetRectangle, bounds)) {
	            var outOfBounds = _getOutOfBoundsEdges(targetRectangle, bounds);
	            for (var _i = 0, outOfBounds_2 = outOfBounds; _i < outOfBounds_2.length; _i++) {
	                var direction = outOfBounds_2[_i];
	                targetRectangle[RectangleEdge[direction]] = bounds[RectangleEdge[direction]];
	            }
	        }
	        return targetRectangle;
	    }
	    positioningFunctions._getTargetRectDEPRECATED = _getTargetRectDEPRECATED;
	    function _getRectangleFromHTMLElement(element) {
	        var clientRect = element.getBoundingClientRect();
	        return new Rectangle_1.Rectangle(clientRect.left, clientRect.right, clientRect.top, clientRect.bottom);
	    }
	    positioningFunctions._getRectangleFromHTMLElement = _getRectangleFromHTMLElement;
	    function _positionCalloutWithinBounds(calloutRectangle, targetRectangle, boundingRectangle, directionalInfo, gap, coverTarget) {
	        if (gap === void 0) {
	            gap = 0;
	        }
	        var estimatedRectangle = _moveRectangleToAnchorRectangle(calloutRectangle, directionalInfo.calloutDirection, directionalInfo.calloutPercent, targetRectangle, directionalInfo.targetDirection, directionalInfo.targetPercent, gap);
	        if (_isRectangleWithinBounds(estimatedRectangle, boundingRectangle)) {
	            return { calloutRectangle: estimatedRectangle, calloutEdge: directionalInfo.calloutDirection, targetEdge: directionalInfo.targetDirection, alignPercent: directionalInfo.calloutPercent, beakPercent: directionalInfo.beakPercent };
	        } else {
	            return _getBestRectangleFitWithinBounds(estimatedRectangle, targetRectangle, boundingRectangle, directionalInfo, gap, coverTarget);
	        }
	    }
	    positioningFunctions._positionCalloutWithinBounds = _positionCalloutWithinBounds;
	    function _getBestRectangleFitWithinBounds(estimatedPosition, targetRectangle, boundingRectangle, directionalInfo, gap, coverTarget) {
	        var callout = {
	            calloutRectangle: estimatedPosition,
	            calloutEdge: directionalInfo.calloutDirection,
	            targetEdge: directionalInfo.targetDirection,
	            alignPercent: directionalInfo.calloutPercent,
	            beakPercent: directionalInfo.beakPercent
	        };
	        if (!_canRectangleFitWithinBounds(estimatedPosition, boundingRectangle)) {
	            return callout;
	        }
	        if (!coverTarget) {
	            callout = _flipRectangleToFit(callout, targetRectangle, directionalInfo.targetPercent, boundingRectangle, gap);
	        }
	        var outOfBounds = _getOutOfBoundsEdges(callout.calloutRectangle, boundingRectangle);
	        for (var _i = 0, outOfBounds_3 = outOfBounds; _i < outOfBounds_3.length; _i++) {
	            var direction = outOfBounds_3[_i];
	            callout.calloutRectangle = _alignEdgeToCoordinate(callout.calloutRectangle, boundingRectangle[RectangleEdge[direction]], direction);
	            var adjustedPercent = _recalculateMatchingPercents(callout.calloutRectangle, callout.targetEdge, targetRectangle, callout.targetEdge, directionalInfo.targetPercent);
	            callout.alignPercent = adjustedPercent;
	        }
	        return callout;
	    }
	    positioningFunctions._getBestRectangleFitWithinBounds = _getBestRectangleFitWithinBounds;
	    function _positionBeak(beakWidth, callout, targetRectangle, border) {
	        var calloutRect = new Rectangle_1.Rectangle(0, callout.calloutRectangle.width - border * 2, 0, callout.calloutRectangle.height - border * 2);
	        var beakRectangle = new Rectangle_1.Rectangle(0, beakWidth, 0, beakWidth);
	        var recalculatedPercent = _recalculateMatchingPercents(callout.calloutRectangle, callout.calloutEdge, targetRectangle, callout.targetEdge, callout.beakPercent);
	        var estimatedTargetPoint = _getPointOnEdgeFromPercent(calloutRect, callout.calloutEdge, recalculatedPercent);
	        return _finalizeBeakPosition(beakRectangle, callout, estimatedTargetPoint, border);
	    }
	    positioningFunctions._positionBeak = _positionBeak;
	    function _finalizeBeakPosition(beakRectangle, callout, estimatedTargetPoint, border) {
	        var beakPixelSize = _calculateActualBeakWidthInPixels(beakRectangle.width) / 2;
	        var innerRect = null;
	        var beakPoint = { x: beakRectangle.width / 2, y: beakRectangle.width / 2 };
	        if (callout.calloutEdge === RectangleEdge.bottom || callout.calloutEdge === RectangleEdge.top) {
	            innerRect = new Rectangle_1.Rectangle(beakPixelSize, callout.calloutRectangle.width - beakPixelSize - border * 2, 0, callout.calloutRectangle.height - border * 2);
	        } else {
	            innerRect = new Rectangle_1.Rectangle(0, callout.calloutRectangle.width - border * 2, beakPixelSize, callout.calloutRectangle.height - beakPixelSize - border * 2);
	        }
	        var finalPoint = _getClosestPointOnEdgeToPoint(innerRect, callout.calloutEdge, estimatedTargetPoint);
	        return _movePointOnRectangleToPoint(beakRectangle, beakPoint, finalPoint);
	    }
	    positioningFunctions._finalizeBeakPosition = _finalizeBeakPosition;
	    function _getRectangleFromIRect(rect) {
	        return new Rectangle_1.Rectangle(rect.left, rect.right, rect.top, rect.bottom);
	    }
	    positioningFunctions._getRectangleFromIRect = _getRectangleFromIRect;
	    function _finalizeCalloutPosition(calloutRectangle, hostElement) {
	        var hostRect = _getRectangleFromHTMLElement(hostElement);
	        var topPosition = calloutRectangle.top - hostRect.top;
	        var leftPosition = calloutRectangle.left - hostRect.left;
	        return new Rectangle_1.Rectangle(leftPosition, leftPosition + calloutRectangle.width, topPosition, topPosition + calloutRectangle.height);
	    }
	    positioningFunctions._finalizeCalloutPosition = _finalizeCalloutPosition;
	    function _recalculateMatchingPercents(recalculateRect, rectangleEdge, targetRect, targetEdge, targetPercent) {
	        var targetPoint = _getPointOnEdgeFromPercent(targetRect, targetEdge, targetPercent);
	        var adjustedPoint = _getClosestPointOnEdgeToPoint(recalculateRect, rectangleEdge, targetPoint);
	        var adjustedPercent = _getPercentOfEdgeFromPoint(recalculateRect, rectangleEdge, adjustedPoint);
	        if (adjustedPercent > 100) {
	            adjustedPercent = 100;
	        } else if (adjustedPercent < 0) {
	            adjustedPercent = 0;
	        }
	        return adjustedPercent;
	    }
	    positioningFunctions._recalculateMatchingPercents = _recalculateMatchingPercents;
	    function _canRectangleFitWithinBounds(rect, boundingRect) {
	        if (rect.width > boundingRect.width || rect.height > boundingRect.height) {
	            return false;
	        }
	        return true;
	    }
	    positioningFunctions._canRectangleFitWithinBounds = _canRectangleFitWithinBounds;
	    function _isRectangleWithinBounds(rect, boundingRect) {
	        if (rect.top < boundingRect.top) {
	            return false;
	        }
	        if (rect.bottom > boundingRect.bottom) {
	            return false;
	        }
	        if (rect.left < boundingRect.left) {
	            return false;
	        }
	        if (rect.right > boundingRect.right) {
	            return false;
	        }
	        return true;
	    }
	    positioningFunctions._isRectangleWithinBounds = _isRectangleWithinBounds;
	    function _getOutOfBoundsEdges(rect, boundingRect) {
	        var outOfBounds = new Array();
	        if (rect.top < boundingRect.top) {
	            outOfBounds.push(RectangleEdge.top);
	        }
	        if (rect.bottom > boundingRect.bottom) {
	            outOfBounds.push(RectangleEdge.bottom);
	        }
	        if (rect.left < boundingRect.left) {
	            outOfBounds.push(RectangleEdge.left);
	        }
	        if (rect.right > boundingRect.right) {
	            outOfBounds.push(RectangleEdge.right);
	        }
	        return outOfBounds;
	    }
	    positioningFunctions._getOutOfBoundsEdges = _getOutOfBoundsEdges;
	    function _getPointOnEdgeFromPercent(rect, direction, percentOfRect) {
	        var startPoint;
	        var endPoint;
	        switch (direction) {
	            case RectangleEdge.top:
	                startPoint = { x: rect.left, y: rect.top };
	                endPoint = { x: rect.right, y: rect.top };
	                break;
	            case RectangleEdge.left:
	                startPoint = { x: rect.left, y: rect.top };
	                endPoint = { x: rect.left, y: rect.bottom };
	                break;
	            case RectangleEdge.right:
	                startPoint = { x: rect.right, y: rect.top };
	                endPoint = { x: rect.right, y: rect.bottom };
	                break;
	            case RectangleEdge.bottom:
	                startPoint = { x: rect.left, y: rect.bottom };
	                endPoint = { x: rect.right, y: rect.bottom };
	                break;
	            default:
	                startPoint = { x: 0, y: 0 };
	                endPoint = { x: 0, y: 0 };
	                break;
	        }
	        return _calculatePointPercentAlongLine(startPoint, endPoint, percentOfRect);
	    }
	    positioningFunctions._getPointOnEdgeFromPercent = _getPointOnEdgeFromPercent;
	    function _getPercentOfEdgeFromPoint(rect, direction, valueOnEdge) {
	        switch (direction) {
	            case RectangleEdge.top:
	            case RectangleEdge.bottom:
	                return rect.width !== 0 ? (valueOnEdge.x - rect.left) / rect.width * 100 : 100;
	            case RectangleEdge.left:
	            case RectangleEdge.right:
	                return rect.height !== 0 ? (valueOnEdge.y - rect.top) / rect.height * 100 : 100;
	        }
	    }
	    positioningFunctions._getPercentOfEdgeFromPoint = _getPercentOfEdgeFromPoint;
	    function _calculatePointPercentAlongLine(startPoint, endPoint, percent) {
	        var x = startPoint.x + (endPoint.x - startPoint.x) * percent / 100;
	        var y = startPoint.y + (endPoint.y - startPoint.y) * percent / 100;
	        return { x: x, y: y };
	    }
	    positioningFunctions._calculatePointPercentAlongLine = _calculatePointPercentAlongLine;
	    function _moveTopLeftOfRectangleToPoint(rect, destination) {
	        return new Rectangle_1.Rectangle(destination.x, destination.x + rect.width, destination.y, destination.y + rect.height);
	    }
	    positioningFunctions._moveTopLeftOfRectangleToPoint = _moveTopLeftOfRectangleToPoint;
	    function _alignEdgeToCoordinate(rect, coordinate, direction) {
	        switch (direction) {
	            case RectangleEdge.top:
	                return _moveTopLeftOfRectangleToPoint(rect, { x: rect.left, y: coordinate });
	            case RectangleEdge.bottom:
	                return _moveTopLeftOfRectangleToPoint(rect, { x: rect.left, y: coordinate - rect.height });
	            case RectangleEdge.left:
	                return _moveTopLeftOfRectangleToPoint(rect, { x: coordinate, y: rect.top });
	            case RectangleEdge.right:
	                return _moveTopLeftOfRectangleToPoint(rect, { x: coordinate - rect.width, y: rect.top });
	        }
	        return new Rectangle_1.Rectangle();
	    }
	    positioningFunctions._alignEdgeToCoordinate = _alignEdgeToCoordinate;
	    function _movePointOnRectangleToPoint(rect, rectanglePoint, targetPoint) {
	        var leftCornerXDifference = rectanglePoint.x - rect.left;
	        var leftCornerYDifference = rectanglePoint.y - rect.top;
	        return _moveTopLeftOfRectangleToPoint(rect, { x: targetPoint.x - leftCornerXDifference, y: targetPoint.y - leftCornerYDifference });
	    }
	    positioningFunctions._movePointOnRectangleToPoint = _movePointOnRectangleToPoint;
	    function _moveRectangleInDirection(rect, moveDistance, direction) {
	        var xModifier = 0;
	        var yModifier = 0;
	        switch (direction) {
	            case RectangleEdge.top:
	                yModifier = moveDistance * -1;
	                break;
	            case RectangleEdge.left:
	                xModifier = moveDistance * -1;
	                break;
	            case RectangleEdge.right:
	                xModifier = moveDistance;
	                break;
	            case RectangleEdge.bottom:
	                yModifier = moveDistance;
	                break;
	        }
	        return _moveTopLeftOfRectangleToPoint(rect, { x: rect.left + xModifier, y: rect.top + yModifier });
	    }
	    positioningFunctions._moveRectangleInDirection = _moveRectangleInDirection;
	    function _moveRectangleToAnchorRectangle(rect, rectSide, rectPercent, anchorRect, anchorSide, anchorPercent, gap) {
	        if (gap === void 0) {
	            gap = 0;
	        }
	        var rectTargetPoint = _getPointOnEdgeFromPercent(rect, rectSide, rectPercent);
	        var anchorTargetPoint = _getPointOnEdgeFromPercent(anchorRect, anchorSide, anchorPercent);
	        var positionedRect = _movePointOnRectangleToPoint(rect, rectTargetPoint, anchorTargetPoint);
	        return _moveRectangleInDirection(positionedRect, gap, anchorSide);
	    }
	    positioningFunctions._moveRectangleToAnchorRectangle = _moveRectangleToAnchorRectangle;
	    function _getClosestPointOnEdgeToPoint(rect, edge, point) {
	        switch (edge) {
	            case RectangleEdge.top:
	            case RectangleEdge.bottom:
	                var x = void 0;
	                if (point.x > rect.right) {
	                    x = rect.right;
	                } else if (point.x < rect.left) {
	                    x = rect.left;
	                } else {
	                    x = point.x;
	                }
	                return { x: x, y: rect[RectangleEdge[edge]] };
	            case RectangleEdge.left:
	            case RectangleEdge.right:
	                var y = void 0;
	                if (point.y > rect.bottom) {
	                    y = rect.bottom;
	                } else if (point.y < rect.top) {
	                    y = rect.top;
	                } else {
	                    y = point.y;
	                }
	                return { x: rect[RectangleEdge[edge]], y: y };
	        }
	    }
	    positioningFunctions._getClosestPointOnEdgeToPoint = _getClosestPointOnEdgeToPoint;
	    function _calculateActualBeakWidthInPixels(beakWidth) {
	        return Math.sqrt(beakWidth * beakWidth * 2);
	    }
	    positioningFunctions._calculateActualBeakWidthInPixels = _calculateActualBeakWidthInPixels;
	    function _getBorderSize(element) {
	        var styles = getComputedStyle(element, null);
	        var topBorder = parseFloat(styles.borderTopWidth);
	        var bottomBorder = parseFloat(styles.borderBottomWidth);
	        var leftBorder = parseFloat(styles.borderLeftWidth);
	        var rightBorder = parseFloat(styles.borderRightWidth);
	        if (isNaN(topBorder) || isNaN(bottomBorder) || isNaN(leftBorder) || isNaN(rightBorder)) {
	            return 0;
	        }
	        if (topBorder === bottomBorder && bottomBorder === leftBorder && leftBorder === rightBorder) {
	            return topBorder;
	        }
	        return 0;
	    }
	    positioningFunctions._getBorderSize = _getBorderSize;
	    function _getPositionData(direction, target, boundingRect, coverTarget) {
	        var directionalInfo = coverTarget ? CoverDictionary[direction] : DirectionalDictionary[direction];
	        if (directionalInfo.isAuto) {
	            var center = _getPointOnEdgeFromPercent(target, directionalInfo.targetDirection, 50);
	            if (center.x <= boundingRect.width / 2) {
	                directionalInfo.calloutPercent = 0;
	                directionalInfo.targetPercent = 0;
	            } else {
	                directionalInfo.calloutPercent = 100;
	                directionalInfo.targetPercent = 100;
	            }
	        }
	        return directionalInfo;
	    }
	    positioningFunctions._getPositionData = _getPositionData;
	    function _flipRectangleToFit(callout, targetRect, targetPercent, boundingRect, gap) {
	        var directions = [RectangleEdge.left, RectangleEdge.right, RectangleEdge.top, RectangleEdge.bottom];
	        var currentEdge = callout.targetEdge;
	        var positionedCallout = object_1.assign({}, callout);
	        for (var i = 0; i < 4; i++) {
	            var outOfBounds = _getOutOfBoundsEdges(positionedCallout.calloutRectangle, boundingRect);
	            var index = outOfBounds.indexOf(currentEdge);
	            var oppositeEdge = OppositeEdgeDictionary[currentEdge];
	            if (index > -1) {
	                directions.splice(directions.indexOf(currentEdge), 1);
	                currentEdge = directions.indexOf(oppositeEdge) > -1 ? oppositeEdge : directions.slice(-1)[0];
	                positionedCallout.calloutEdge = OppositeEdgeDictionary[currentEdge];
	                positionedCallout.targetEdge = currentEdge;
	                positionedCallout.calloutRectangle = _moveRectangleToAnchorRectangle(positionedCallout.calloutRectangle, positionedCallout.calloutEdge, positionedCallout.alignPercent, targetRect, positionedCallout.targetEdge, targetPercent, gap);
	            } else {
	                return positionedCallout;
	            }
	        }
	        return callout;
	    }
	    positioningFunctions._flipRectangleToFit = _flipRectangleToFit;
	})(positioningFunctions = exports.positioningFunctions || (exports.positioningFunctions = {}));
	var _a, _b, _c, _d;

/***/ },

/***/ 517:
/***/ function(module, exports) {

	"use strict";
	
	var Rectangle = function () {
	    function Rectangle(left, right, top, bottom) {
	        if (left === void 0) {
	            left = 0;
	        }
	        if (right === void 0) {
	            right = 0;
	        }
	        if (top === void 0) {
	            top = 0;
	        }
	        if (bottom === void 0) {
	            bottom = 0;
	        }
	        this.top = top;
	        this.bottom = bottom;
	        this.left = left;
	        this.right = right;
	    }
	    Object.defineProperty(Rectangle.prototype, "width", {
	        get: function () {
	            return this.right - this.left;
	        },
	        enumerable: true,
	        configurable: true
	    });
	    Object.defineProperty(Rectangle.prototype, "height", {
	        get: function () {
	            return this.bottom - this.top;
	        },
	        enumerable: true,
	        configurable: true
	    });
	    return Rectangle;
	}();
	exports.Rectangle = Rectangle;

/***/ },

/***/ 518:
/***/ function(module, exports) {

	"use strict";
	
	var _scrollbarWidth;
	exports.DATA_IS_SCROLLABLE_ATTRIBUTE = 'data-is-scrollable';
	function getScrollbarWidth() {
	    if (_scrollbarWidth === undefined) {
	        var scrollDiv = document.createElement('div');
	        scrollDiv.style.setProperty('width', '100px');
	        scrollDiv.style.setProperty('height', '100px');
	        scrollDiv.style.setProperty('overflow', 'scroll');
	        scrollDiv.style.setProperty('position', 'absolute');
	        scrollDiv.style.setProperty('top', '-9999px');
	        document.body.appendChild(scrollDiv);
	        _scrollbarWidth = scrollDiv.offsetWidth - scrollDiv.clientWidth;
	        document.body.removeChild(scrollDiv);
	    }
	    return _scrollbarWidth;
	}
	exports.getScrollbarWidth = getScrollbarWidth;
	function findScrollableParent(startingElement) {
	    var el = startingElement;
	    while (el && el !== document.body) {
	        if (el.getAttribute(exports.DATA_IS_SCROLLABLE_ATTRIBUTE) === 'true') {
	            return el;
	        }
	        el = el.parentElement;
	    }
	    el = startingElement;
	    while (el && el !== document.body) {
	        if (el.getAttribute(exports.DATA_IS_SCROLLABLE_ATTRIBUTE) !== 'false') {
	            var styles = getComputedStyle(el);
	            var overflowY = styles ? styles.getPropertyValue('overflow-y') : '';
	            if (overflowY && (overflowY === 'scroll' || overflowY === 'auto')) {
	                return el;
	            }
	        }
	        el = el.parentElement;
	    }
	    if (!el || el === document.body) {
	        el = window;
	    }
	    return el;
	}
	exports.findScrollableParent = findScrollableParent;

/***/ },

/***/ 519:
/***/ function(module, exports, __webpack_require__) {

	"use strict";
	
	var getDocument_1 = __webpack_require__(506);
	var elementContains_1 = __webpack_require__(513);
	var IS_VISIBLE_ATTRIBUTE = 'data-is-visible';
	var IS_FOCUSABLE_ATTRIBUTE = 'data-is-focusable';
	var FOCUSZONE_ID_ATTRIBUTE = 'data-focuszone-id';
	function doesElementContainFocus(element) {
	    var currentActiveElement = getDocument_1.getDocument(element).activeElement;
	    if (currentActiveElement && elementContains_1.elementContains(element, currentActiveElement)) {
	        return true;
	    }
	    return false;
	}
	exports.doesElementContainFocus = doesElementContainFocus;
	function focusFirstChild(rootElement) {
	    var element = getNextElement(rootElement, rootElement, true, false, false, true);
	    if (element) {
	        element.focus();
	        return true;
	    }
	    return false;
	}
	exports.focusFirstChild = focusFirstChild;
	function getNextElement(rootElement, currentElement, checkNode, suppressParentTraversal, suppressChildTraversal, includeElementsInFocusZones) {
	    if (!currentElement || currentElement === rootElement && suppressChildTraversal) {
	        return null;
	    }
	    var isCurrentElementVisible = isElementVisible(currentElement);
	    if (checkNode && isCurrentElementVisible && isElementTabbable(currentElement)) {
	        return currentElement;
	    }
	    if (!suppressChildTraversal && isCurrentElementVisible && (includeElementsInFocusZones || !isElementFocusZone(currentElement))) {
	        var childMatch = getNextElement(rootElement, currentElement.firstElementChild, true, true, false, includeElementsInFocusZones);
	        if (childMatch) {
	            return childMatch;
	        }
	    }
	    if (currentElement === rootElement) {
	        return null;
	    }
	    var siblingMatch = getNextElement(rootElement, currentElement.nextElementSibling, true, true, false, includeElementsInFocusZones);
	    if (siblingMatch) {
	        return siblingMatch;
	    }
	    if (!suppressParentTraversal) {
	        return getNextElement(rootElement, currentElement.parentElement, false, false, true, includeElementsInFocusZones);
	    }
	    return null;
	}
	exports.getNextElement = getNextElement;
	function isElementVisible(element) {
	    if (!element || !element.getAttribute) {
	        return false;
	    }
	    var visibilityAttribute = element.getAttribute(IS_VISIBLE_ATTRIBUTE);
	    if (visibilityAttribute !== null && visibilityAttribute !== undefined) {
	        return visibilityAttribute === 'true';
	    }
	    return element.offsetHeight !== 0 || element.offsetParent !== null || element.isVisible === true;
	}
	exports.isElementVisible = isElementVisible;
	function isElementTabbable(element) {
	    return !!element && (element.tagName === 'A' || element.tagName === 'BUTTON' && !element.disabled || element.tagName === 'INPUT' && !element.disabled || element.tagName === 'TEXTAREA' && !element.disabled || element.getAttribute && element.getAttribute(IS_FOCUSABLE_ATTRIBUTE) === 'true');
	}
	exports.isElementTabbable = isElementTabbable;
	function isElementFocusZone(element) {
	    return element && !!element.getAttribute(FOCUSZONE_ID_ATTRIBUTE);
	}
	exports.isElementFocusZone = isElementFocusZone;

/***/ },

/***/ 520:
/***/ function(module, exports, __webpack_require__) {

	"use strict";
	
	var React = __webpack_require__(299);
	var KeyCodes_1 = __webpack_require__(505);
	var attributes_1 = __webpack_require__(478);
	var focus_1 = __webpack_require__(519);
	var getDocument_1 = __webpack_require__(506);
	var Common_1 = __webpack_require__(508);
	var Popup = function (_super) {
	    __extends(Popup, _super);
	    function Popup() {
	        _super.apply(this, arguments);
	    }
	    Popup.prototype.componentWillMount = function () {
	        this._originalFocusedElement = getDocument_1.getDocument().activeElement;
	    };
	    Popup.prototype.componentDidMount = function () {
	        var _this = this;
	        this._events.on(this.refs.root, 'keydown', this._onKeyDown);
	        this._events.on(this.refs.root, 'focus', function () {
	            return _this._containsFocus = true;
	        }, true);
	        this._events.on(this.refs.root, 'blur', function () {
	            return _this._containsFocus = false;
	        }, true);
	        if (focus_1.doesElementContainFocus(this.refs.root)) {
	            this._containsFocus = true;
	        }
	    };
	    Popup.prototype.componentWillUnmount = function () {
	        var _this = this;
	        if (this.props.shouldRestoreFocus && this._originalFocusedElement && this._containsFocus && this._originalFocusedElement !== window) {
	            setTimeout(function () {
	                if (_this._originalFocusedElement) {
	                    _this._originalFocusedElement.focus();
	                }
	            }, 0);
	        }
	    };
	    Popup.prototype.render = function () {
	        var _a = this.props,
	            role = _a.role,
	            className = _a.className,
	            ariaLabelledBy = _a.ariaLabelledBy,
	            ariaDescribedBy = _a.ariaDescribedBy;
	        return React.createElement("div", __assign({ ref: "root" }, attributes_1.getNativeAttributes(this.props, attributes_1.divAttributes), { className: className, role: role, "aria-labelledby": ariaLabelledBy, "aria-describedby": ariaDescribedBy }), this.props.children);
	    };
	    Popup.prototype._onKeyDown = function (ev) {
	        switch (ev.which) {
	            case KeyCodes_1.KeyCodes.escape:
	                if (this.props.onDismiss) {
	                    this.props.onDismiss();
	                    ev.preventDefault();
	                    ev.stopPropagation();
	                }
	                break;
	        }
	    };
	    Popup.defaultProps = {
	        shouldRestoreFocus: true
	    };
	    return Popup;
	}(Common_1.CommonComponent);
	exports.Popup = Popup;

/***/ },

/***/ 521:
/***/ function(module, exports, __webpack_require__) {

	// style-loader: Adds some css to the DOM by adding a <style> tag
	
	// load the styles
	var content = __webpack_require__(522);
	if(typeof content === 'string') content = [[module.id, content, '']];
	// add the styles to the DOM
	var update = __webpack_require__(484)(content, {});
	if(content.locals) module.exports = content.locals;
	// Hot Module Replacement
	if(false) {
		// When the styles change, update the <style> tags
		if(!content.locals) {
			module.hot.accept("!!../../../node_modules/css-loader/index.js!../../../node_modules/sass-loader/index.js?outputStyle=expanded!./Callout.scss", function() {
				var newContent = require("!!../../../node_modules/css-loader/index.js!../../../node_modules/sass-loader/index.js?outputStyle=expanded!./Callout.scss");
				if(typeof newContent === 'string') newContent = [[module.id, newContent, '']];
				update(newContent);
			});
		}
		// When the module is disposed, remove the <style> tags
		module.hot.dispose(function() { update(); });
	}

/***/ },

/***/ 522:
/***/ function(module, exports, __webpack_require__) {

	exports = module.exports = __webpack_require__(483)();
	// imports
	
	
	// module
	exports.push([module.id, "::-webkit-scrollbar {\n  width: 13px;\n  margin-top: 10px;\n  border-radius: 15px;\n  margin-right: 3px;\n  background: transparent;\n}\n\n::-webkit-scrollbar-track {\n  border-radius: 15px;\n  margin-top: 7px;\n  background: #EEEFF4;\n  margin-bottom: 7px;\n}\n\n::-webkit-scrollbar-thumb {\n  border-radius: 10px;\n  margin-top: 10px;\n  background: #D2D3D9;\n}\n\n::-webkit-scrollbar-thumb:window-inactive {\n  background: #D2D3D9;\n}\n\n.callout {\n  font-family: \"Segoe UI WestEuropean\",\"Segoe UI\",-apple-system,BlinkMacSystemFont,Roboto,\"Helvetica Neue\",sans-serif;\n  -webkit-font-smoothing: antialiased;\n  position: absolute;\n  border: 1px solid #000000;\n  box-sizing: border-box;\n}\n\n.callout-no-border {\n  border: 0px;\n}\n\n.callout-container {\n  position: relative;\n}\n\n.callout-main {\n  background-color: #ffffff;\n  overflow-y: auto;\n  overflow-x: hidden;\n  position: relative;\n}\n\n.callout-beak {\n  position: absolute;\n  background-color: #ffffff;\n  box-shadow: inherit;\n  border: inherit;\n  box-sizing: border-box;\n  -webkit-transform: rotate(45deg);\n  -ms-transform: rotate(45deg);\n  transform: rotate(45deg);\n}\n\n.callout-beak-curtain {\n  position: absolute;\n  top: 0;\n  right: 0;\n  bottom: 0;\n  left: 0;\n  background-color: #ffffff;\n}\n", ""]);
	
	// exports


/***/ },

/***/ 523:
/***/ function(module, exports, __webpack_require__) {

	"use strict";
	
	function __export(m) {
	    for (var p in m) if (!exports.hasOwnProperty(p)) exports[p] = m[p];
	}
	__export(__webpack_require__(524));
	__export(__webpack_require__(525));
	__export(__webpack_require__(532));

/***/ },

/***/ 524:
/***/ function(module, exports, __webpack_require__) {

	"use strict";
	
	var React = __webpack_require__(299);
	var LayerHost_1 = __webpack_require__(525);
	var getId_1 = __webpack_require__(503);
	__webpack_require__(530);
	var Layer = function (_super) {
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
	        return React.createElement("span", { className: "layer", ref: this.resolveRef('_rootElement') });
	    };
	    Layer.prototype.resolveRef = function (refName) {
	        var _this = this;
	        if (!this._resolves) {
	            this._resolves = {};
	        }
	        if (!this._resolves[refName]) {
	            this._resolves[refName] = function (ref) {
	                return _this[refName] = ref;
	            };
	        }
	        return this._resolves[refName];
	    };
	    Layer.contextTypes = {
	        layerHost: React.PropTypes.object
	    };
	    return Layer;
	}(React.Component);
	exports.Layer = Layer;

/***/ },

/***/ 525:
/***/ function(module, exports, __webpack_require__) {

	"use strict";
	
	var React = __webpack_require__(299);
	var ReactDOM = __webpack_require__(329);
	var Fabric_1 = __webpack_require__(526);
	var autobind_1 = __webpack_require__(507);
	var array_1 = __webpack_require__(528);
	var attributes_1 = __webpack_require__(478);
	var classNames = __webpack_require__(476);
	var ProjectedLayer_1 = __webpack_require__(529);
	var DEFAULT_HOST_ID = '__layerHost';
	var LayerHost = function (_super) {
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
	        } else {
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
	        return React.createElement("div", __assign({}, divProps, { className: classNames('layer-host', [this.props.className]) }), React.createElement(Fabric_1.Fabric, null, this.props.children, React.createElement("div", { className: "overlay" }, this._layers.map(function (layer) {
	            return React.createElement(ProjectedLayer_1.ProjectedLayer, { key: layer.id, layerId: layer.id, parentElement: layer.parentElement, defaultRemoteProps: layer.props, ref: _this._resolveLayer });
	        }))));
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
	        var index = array_1.findIndex(this._layers, function (layer) {
	            return layer.id === id;
	        });
	        if (index >= 0) {
	            this._layers.splice(index, 1);
	            delete this._layerRefs[id];
	            this.forceUpdate();
	        }
	    };
	    LayerHost.prototype._resolveLayer = function (projectedLayer) {
	        if (projectedLayer) {
	            var layerId_1 = projectedLayer.getId();
	            var index = array_1.findIndex(this._layers, function (layer) {
	                return layer.id === layerId_1;
	            });
	            if (index >= 0 && this._layerRefs[layerId_1] !== projectedLayer) {
	                this._layerRefs[layerId_1] = projectedLayer;
	                this._layers[index].onMounted(projectedLayer);
	            }
	        }
	    };
	    LayerHost.childContextTypes = {
	        layerHost: React.PropTypes.object
	    };
	    __decorate([autobind_1.autobind, __metadata('design:type', Function), __metadata('design:paramtypes', [ProjectedLayer_1.ProjectedLayer]), __metadata('design:returntype', void 0)], LayerHost.prototype, "_resolveLayer", null);
	    return LayerHost;
	}(React.Component);
	exports.LayerHost = LayerHost;

/***/ },

/***/ 526:
/***/ function(module, exports, __webpack_require__) {

	"use strict";
	
	var React = __webpack_require__(299);
	var EventGroup_1 = __webpack_require__(527);
	var KeyCodes_1 = __webpack_require__(505);
	var classNames = __webpack_require__(476);
	var DIRECTIONAL_KEY_CODES = [KeyCodes_1.KeyCodes.up, KeyCodes_1.KeyCodes.down, KeyCodes_1.KeyCodes.left, KeyCodes_1.KeyCodes.right, KeyCodes_1.KeyCodes.home, KeyCodes_1.KeyCodes.end, KeyCodes_1.KeyCodes.tab, KeyCodes_1.KeyCodes.pageUp, KeyCodes_1.KeyCodes.pageDown];
	var _lastIsFocusVisible = false;
	if (typeof document === 'object' && document.documentElement && !document.documentElement.getAttribute('dir')) {
	    document.documentElement.setAttribute('dir', 'ltr');
	}
	var Fabric = function (_super) {
	    __extends(Fabric, _super);
	    function Fabric() {
	        _super.call(this);
	        this.state = {
	            isFocusVisible: _lastIsFocusVisible
	        };
	        this._events = new EventGroup_1.EventGroup(this);
	    }
	    Fabric.prototype.componentDidMount = function () {
	        this._events.on(document.body, 'mousedown', this._onMouseDown, true);
	        this._events.on(document.body, 'keydown', this._onKeyDown, true);
	    };
	    Fabric.prototype.componentWillUnmount = function () {
	        this._events.dispose();
	    };
	    Fabric.prototype.render = function () {
	        var isFocusVisible = this.state.isFocusVisible;
	        var rootClass = classNames('ms-Fabric ms-font-m', [this.props.className], {
	            'is-focusVisible': isFocusVisible
	        });
	        return React.createElement("div", __assign({}, this.props, { className: rootClass, ref: "root" }));
	    };
	    Fabric.prototype._onMouseDown = function () {
	        if (this.state.isFocusVisible) {
	            this.setState({
	                isFocusVisible: false
	            });
	            _lastIsFocusVisible = false;
	        }
	    };
	    Fabric.prototype._onKeyDown = function (ev) {
	        if (!this.state.isFocusVisible && DIRECTIONAL_KEY_CODES.indexOf(ev.which) > -1) {
	            this.setState({
	                isFocusVisible: true
	            });
	            _lastIsFocusVisible = true;
	        }
	    };
	    return Fabric;
	}(React.Component);
	exports.Fabric = Fabric;

/***/ },

/***/ 527:
/***/ function(module, exports) {

	"use strict";
	
	var argsKey = 'args';
	var createEventObjectKey = 'createEventObject';
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
	                ev[argsKey] = eventArgs;
	                retVal = target.dispatchEvent(ev);
	            } else if (document[createEventObjectKey]) {
	                var evObj = document[createEventObjectKey](eventArgs);
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
	                    } catch (e) {
	                        console.error(e);
	                    }
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

/***/ 528:
/***/ function(module, exports) {

	"use strict";
	
	function findIndex(array, cb) {
	    var index = -1;
	    for (var i = 0; array && i < array.length; i++) {
	        if (cb(array[i], i)) {
	            index = i;
	            break;
	        }
	    }
	    return index;
	}
	exports.findIndex = findIndex;

/***/ },

/***/ 529:
/***/ function(module, exports, __webpack_require__) {

	"use strict";
	
	var React = __webpack_require__(299);
	var virtualParent_1 = __webpack_require__(515);
	var attributes_1 = __webpack_require__(478);
	var classNames = __webpack_require__(476);
	__webpack_require__(530);
	var ProjectedLayer = function (_super) {
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
	        return React.createElement("div", __assign({}, remoteProps, { className: classNames('projected-layer', remoteProps.className), ref: this.resolveRef('_rootElement') }));
	    };
	    ProjectedLayer.prototype.resolveRef = function (refName) {
	        var _this = this;
	        if (!this._resolves) {
	            this._resolves = {};
	        }
	        if (!this._resolves[refName]) {
	            this._resolves[refName] = function (ref) {
	                return _this[refName] = ref;
	            };
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
	}(React.Component);
	exports.ProjectedLayer = ProjectedLayer;

/***/ },

/***/ 530:
/***/ function(module, exports, __webpack_require__) {

	// style-loader: Adds some css to the DOM by adding a <style> tag
	
	// load the styles
	var content = __webpack_require__(531);
	if(typeof content === 'string') content = [[module.id, content, '']];
	// add the styles to the DOM
	var update = __webpack_require__(484)(content, {});
	if(content.locals) module.exports = content.locals;
	// Hot Module Replacement
	if(false) {
		// When the styles change, update the <style> tags
		if(!content.locals) {
			module.hot.accept("!!../../../node_modules/css-loader/index.js!../../../node_modules/sass-loader/index.js?outputStyle=expanded!./Layer.scss", function() {
				var newContent = require("!!../../../node_modules/css-loader/index.js!../../../node_modules/sass-loader/index.js?outputStyle=expanded!./Layer.scss");
				if(typeof newContent === 'string') newContent = [[module.id, newContent, '']];
				update(newContent);
			});
		}
		// When the module is disposed, remove the <style> tags
		module.hot.dispose(function() { update(); });
	}

/***/ },

/***/ 531:
/***/ function(module, exports, __webpack_require__) {

	exports = module.exports = __webpack_require__(483)();
	// imports
	
	
	// module
	exports.push([module.id, ".overlay {\n  position: absolute;\n  visibility: hidden;\n  top: 0;\n  left: 0;\n  bottom: 0;\n  right: 0;\n}\n\n.projected-layer {\n  visibility: visible;\n  position: absolute;\n  width: 100%;\n}\n", ""]);
	
	// exports


/***/ },

/***/ 532:
/***/ function(module, exports, __webpack_require__) {

	"use strict";
	
	function __export(m) {
	    for (var p in m) if (!exports.hasOwnProperty(p)) exports[p] = m[p];
	}
	__export(__webpack_require__(526));

/***/ },

/***/ 533:
/***/ function(module, exports, __webpack_require__) {

	// style-loader: Adds some css to the DOM by adding a <style> tag
	
	// load the styles
	var content = __webpack_require__(534);
	if(typeof content === 'string') content = [[module.id, content, '']];
	// add the styles to the DOM
	var update = __webpack_require__(484)(content, {});
	if(content.locals) module.exports = content.locals;
	// Hot Module Replacement
	if(false) {
		// When the styles change, update the <style> tags
		if(!content.locals) {
			module.hot.accept("!!../../../node_modules/css-loader/index.js!../../../node_modules/sass-loader/index.js?outputStyle=expanded!./ContextualMenu.scss", function() {
				var newContent = require("!!../../../node_modules/css-loader/index.js!../../../node_modules/sass-loader/index.js?outputStyle=expanded!./ContextualMenu.scss");
				if(typeof newContent === 'string') newContent = [[module.id, newContent, '']];
				update(newContent);
			});
		}
		// When the module is disposed, remove the <style> tags
		module.hot.dispose(function() { update(); });
	}

/***/ },

/***/ 534:
/***/ function(module, exports, __webpack_require__) {

	exports = module.exports = __webpack_require__(483)();
	// imports
	
	
	// module
	exports.push([module.id, "::-webkit-scrollbar {\n  width: 13px;\n  margin-top: 10px;\n  border-radius: 15px;\n  margin-right: 3px;\n  background: transparent;\n}\n\n::-webkit-scrollbar-track {\n  border-radius: 15px;\n  margin-top: 7px;\n  background: #EEEFF4;\n  margin-bottom: 7px;\n}\n\n::-webkit-scrollbar-thumb {\n  border-radius: 10px;\n  margin-top: 10px;\n  background: #D2D3D9;\n}\n\n::-webkit-scrollbar-thumb:window-inactive {\n  background: #D2D3D9;\n}\n\n.contextualMenu {\n  background-color: #ffffff;\n  min-width: 180px;\n}\n\n.contextualMenu-list {\n  list-style-type: none;\n  margin: 0;\n  padding: 0;\n  line-height: 0;\n}\n\n.contextualMenu-item {\n  font-family: \"Segoe UI WestEuropean\",\"Segoe UI\",-apple-system,BlinkMacSystemFont,Roboto,\"Helvetica Neue\",sans-serif;\n  -webkit-font-smoothing: antialiased;\n  font-size: 14px;\n  color: #333333;\n  height: 36px;\n  position: relative;\n  box-sizing: border-box;\n}\n\n.contextualMenu-link {\n  outline: transparent;\n  position: relative;\n  font: inherit;\n  color: inherit;\n  background: none;\n  border: none;\n  width: 100%;\n  height: 36px;\n  line-height: 36px;\n  display: inline-block;\n  cursor: pointer;\n  padding: 0px 6px;\n  text-align: left;\n}\n\n.contextualMenu-link:hover:not([disabled]) {\n  background: #f4f4f4;\n}\n\n.contextualMenu-link.is-disabled, .contextualMenu-link[disabled] {\n  color: #c8c8c8;\n  cursor: default;\n  pointer-events: none;\n}\n\n.contextualMenu-link.is-disabled .contextualMenu-icon, .contextualMenu-link[disabled] .contextualMenu-icon {\n  color: #c8c8c8;\n}\n\n.is-focusVisible .contextualMenu-link:focus {\n  background: #f4f4f4;\n}\n\n.contextualMenu-link.is-expanded, .contextualMenu-link.is-expanded:hover {\n  background: #dadada;\n  color: #000000;\n  font-weight: 600;\n}\n\n.contextualMenu-link a {\n  padding: 0px 6px;\n  text-rendering: auto;\n  color: inherit;\n  letter-spacing: normal;\n  word-spacing: normal;\n  text-transform: none;\n  text-indent: 0px;\n  text-shadow: none;\n  box-sizing: border-box;\n}\n\n.contextualMenu-linkContent {\n  white-space: nowrap;\n  height: inherit;\n  display: flex;\n  align-items: center;\n  max-width: 100%;\n}\n\n.contextualMenu-divider {\n  display: block;\n  height: 1px;\n  background-color: #eaeaea;\n  position: relative;\n}\n\n.contextualMenu-icon {\n  display: inline-block;\n  min-height: 1px;\n  max-height: 36px;\n  width: 14px;\n  margin: 0 4px;\n  vertical-align: middle;\n  flex-shrink: 0;\n}\n\n.contextualMenu-iconColor {\n  color: #0078d7;\n}\n\n.contextualMenu-itemText {\n  margin: 0 4px;\n  vertical-align: middle;\n  display: inline-block;\n  flex-grow: 1;\n  text-overflow: ellipsis;\n  overflow: hidden;\n  white-space: nowrap;\n}\n\n.contextualMenu-linkText {\n  margin: 0px 4px;\n  display: inline-block;\n  vertical-align: top;\n  white-space: nowrap;\n}\n\n.contextualMenu-submenu-chevron {\n  height: 36px;\n  line-height: 36px;\n  text-align: center;\n  font-size: 10px;\n  display: inline-block;\n  vertical-align: middle;\n  flex-shrink: 0;\n}\n", ""]);
	
	// exports


/***/ },

/***/ 680:
/***/ function(module, exports, __webpack_require__) {

	"use strict";
	
	var React = __webpack_require__(299);
	var classNames = __webpack_require__(476);
	var ContextualMenu_1 = __webpack_require__(501);
	var EventGroup_1 = __webpack_require__(527);
	var DirectionalHint_1 = __webpack_require__(502);
	var autobind_1 = __webpack_require__(507);
	var getId_1 = __webpack_require__(503);
	var attributes_1 = __webpack_require__(478);
	var Icon_1 = __webpack_require__(480);
	var OVERFLOW_KEY = 'overflow';
	var OVERFLOW_WIDTH = 41.5;
	var Ribbon = function (_super) {
	    __extends(Ribbon, _super);
	    function Ribbon(props) {
	        _super.call(this, props);
	        this.state = this._getStateFromProps(props);
	        this._id = getId_1.getId('CommandBar');
	        this._events = new EventGroup_1.EventGroup(this);
	    }
	    Ribbon.prototype.componentDidMount = function () {
	        this._updateItemMeasurements();
	        this._updateRenderedItems();
	        this._events.on(window, 'resize', this._updateRenderedItems);
	    };
	    Ribbon.prototype.componentWillUnmount = function () {
	        this._events.dispose();
	    };
	    Ribbon.prototype.componentWillReceiveProps = function (nextProps) {
	        this.setState(this._getStateFromProps(nextProps));
	        this._commandItemWidths = null;
	    };
	    Ribbon.prototype.componentDidUpdate = function (prevProps, prevStates) {
	        if (!this._commandItemWidths) {
	            this._updateItemMeasurements();
	            this._updateRenderedItems();
	        }
	    };
	    Ribbon.prototype.render = function () {
	        var _this = this;
	        var _a = this.props,
	            isSearchBoxVisible = _a.isSearchBoxVisible,
	            searchPlaceholderText = _a.searchPlaceholderText,
	            className = _a.className;
	        var _b = this.state,
	            renderedItems = _b.renderedItems,
	            contextualMenuItems = _b.contextualMenuItems,
	            expandedMenuItemKey = _b.expandedMenuItemKey,
	            expandedMenuId = _b.expandedMenuId,
	            renderedOverflowItems = _b.renderedOverflowItems,
	            contextualMenuTarget = _b.contextualMenuTarget,
	            renderedFarItems = _b.renderedFarItems;
	        var searchBox;
	        if (isSearchBoxVisible) {
	            searchBox = React.createElement("div", { className: 'ms-CommandBarSearch', ref: 'searchSurface' }, React.createElement("input", { className: 'ms-CommandBarSearch-input', type: 'text', placeholder: searchPlaceholderText }), React.createElement("div", { className: 'ms-CommandBarSearch-iconWrapper ms-CommandBarSearch-iconSearchWrapper' }, React.createElement("i", { className: 'ms-Icon ms-Icon--search' })), React.createElement("div", { className: 'ms-CommandBarSearch-iconWrapper ms-CommandBarSearch-iconClearWrapper ms-font-s' }, React.createElement("i", { className: 'ms-Icon ms-Icon--cancel' })));
	        }
	        return React.createElement("div", { className: classNames('ms-CommandBar', className), ref: 'commandBarRegion' }, searchBox, React.createElement("div", { className: 'ms-CommandBar-primaryCommands', ref: 'commandSurface' }, renderedItems.map(function (item, index) {
	            return _this._renderItemInCommandBar(item, index, expandedMenuItemKey);
	        }).concat(renderedOverflowItems && renderedOverflowItems.length ? [React.createElement("div", { className: 'ms-CommandBarItem', key: OVERFLOW_KEY, ref: OVERFLOW_KEY }, React.createElement("button", { id: this._id + OVERFLOW_KEY, className: classNames('ms-CommandBarItem-link', { 'is-expanded': expandedMenuItemKey === OVERFLOW_KEY }), onClick: this._onOverflowClick, role: 'menuitem', "data-automation-id": 'commandBarOverflow' }, React.createElement("i", { className: 'ms-CommandBarItem-overflow ms-Icon ms-Icon--More' })))] : [])), React.createElement("div", { className: 'ms-CommandBar-sideCommands', ref: 'farCommandSurface' }, renderedFarItems.map(function (item, index) {
	            return _this._renderItemInCommandBar(item, index, expandedMenuItemKey, true);
	        })), contextualMenuItems ? React.createElement(ContextualMenu_1.ContextualMenu, { labelElementId: expandedMenuId, className: 'ms-CommandBar-menuHost', items: contextualMenuItems, target: contextualMenuTarget, onDismiss: this._onContextMenuDismiss, isBeakVisible: true, directionalHint: DirectionalHint_1.DirectionalHint.bottomAutoEdge }) : null);
	    };
	    Ribbon.prototype._renderItemInCommandBar = function (item, index, expandedMenuItemKey, isFarItem) {
	        var _this = this;
	        var itemKey = item.key || String(index);
	        var className = classNames(item.onClick ? 'ms-CommandBarItem-link' : 'ms-CommandBarItem-text', !item.name && 'ms-CommandBarItem--noName');
	        var classNameValue = classNames(className, { 'is-expanded': expandedMenuItemKey === item.key });
	        var hasIcon = !!item.iconProps;
	        return React.createElement("div", { className: classNames('ms-CommandBarItem', item.className), key: itemKey, ref: itemKey }, function () {
	            if (item.onClick || item.items) {
	                return React.createElement("button", __assign({}, attributes_1.getNativeAttributes(item, attributes_1.buttonAttributes), { id: _this._id + item.key, className: classNameValue, onClick: function (ev) {
	                        return _this._onItemClick(ev, item);
	                    }, "data-command-key": index, "aria-haspopup": ContextualMenu_1.hasSubmenuItems(item), role: 'menuitem', "aria-label": item.ariaLabel || item.name }), hasIcon ? _this._renderIcon(item) : null, !!item.name && React.createElement("span", { className: 'ms-CommandBarItem-commandText' }, item.name), ContextualMenu_1.hasSubmenuItems(item) ? React.createElement("i", { className: 'ms-CommandBarItem-chevronDown ms-Icon ms-Icon--ChevronDown' }) : null);
	            } else {
	                return React.createElement("div", __assign({}, attributes_1.getNativeAttributes(item, attributes_1.divAttributes), { id: _this._id + item.key, className: classNameValue, "data-command-key": index, "aria-haspopup": ContextualMenu_1.hasSubmenuItems(item) }), hasIcon ? _this._renderIcon(item) : null, React.createElement("span", { className: 'ms-CommandBarItem-commandText ms-font-m ms-font-weight-regular', "aria-hidden": 'true', role: 'presentation' }, item.name));
	            }
	        }());
	    };
	    Ribbon.prototype._renderIcon = function (item) {
	        // Only present to allow continued use of item.icon which is deprecated.
	        var iconProps = item.iconProps;
	        // Use the default icon color for the known icon names
	        var iconColorClassName = iconProps.iconName === '' ? '' : 'ms-CommandBarItem-iconColor';
	        var iconClassName = classNames('ms-CommandBarItem-icon', iconColorClassName, iconProps.className);
	        return React.createElement(Icon_1.Icon, __assign({}, iconProps, { className: iconClassName }));
	    };
	    Ribbon.prototype._updateItemMeasurements = function () {
	        if (this.refs[OVERFLOW_KEY] || this.props.overflowItems && this.props.overflowItems.length) {
	            this._overflowWidth = OVERFLOW_WIDTH;
	        } else {
	            this._overflowWidth = 0;
	        }
	        if (!this._commandItemWidths) {
	            this._commandItemWidths = {};
	        }
	        for (var i = 0; i < this.props.items.length; i++) {
	            var item = this.props.items[i];
	            if (!this._commandItemWidths[item.key]) {
	                var el = this.refs[item.key];
	                if (el) {
	                    this._commandItemWidths[item.key] = el.getBoundingClientRect().width;
	                }
	            }
	        }
	    };
	    Ribbon.prototype._updateRenderedItems = function () {
	        var _a = this.props,
	            items = _a.items,
	            overflowItems = _a.overflowItems;
	        var commandSurface = this.refs.commandSurface;
	        var farCommandSurface = this.refs.farCommandSurface;
	        var commandBarRegion = this.refs.commandBarRegion;
	        var searchSurface = this.refs.searchSurface;
	        var renderedItems = [].concat(items);
	        var renderedOverflowItems = overflowItems;
	        var consumedWidth = 0;
	        var isOverflowVisible = overflowItems && overflowItems.length;
	        var style = window.getComputedStyle(commandSurface);
	        var availableWidth = commandBarRegion.clientWidth - parseInt(style.marginLeft, 10) - parseInt(style.marginRight, 10);
	        if (searchSurface) {
	            availableWidth -= searchSurface.getBoundingClientRect().width;
	        }
	        if (farCommandSurface) {
	            availableWidth -= farCommandSurface.getBoundingClientRect().width;
	        }
	        if (isOverflowVisible) {
	            availableWidth -= this._overflowWidth;
	        }
	        for (var i = 0; i < renderedItems.length; i++) {
	            var item = renderedItems[i];
	            var itemWidth = this._commandItemWidths[item.key];
	            if (consumedWidth + itemWidth >= availableWidth) {
	                if (i > 0 && !isOverflowVisible && availableWidth - consumedWidth < OVERFLOW_WIDTH) {
	                    i--;
	                }
	                renderedOverflowItems = renderedItems.splice(i).concat(overflowItems);
	                break;
	            } else {
	                consumedWidth += itemWidth;
	            }
	        }
	        this.setState({
	            renderedItems: renderedItems,
	            renderedOverflowItems: renderedOverflowItems,
	            expandedMenuItemKey: null,
	            contextualMenuItems: null,
	            contextualMenuTarget: null
	        });
	    };
	    Ribbon.prototype._onItemClick = function (ev, item) {
	        if (item.key === this.state.expandedMenuItemKey || !item.items || !item.items.length) {
	            this._onContextMenuDismiss();
	        } else {
	            this.setState({
	                expandedMenuId: ev.currentTarget.id,
	                expandedMenuItemKey: item.key,
	                contextualMenuItems: item.items,
	                contextualMenuTarget: ev.currentTarget
	            });
	        }
	        if (item.onClick) {
	            item.onClick(ev, item);
	        }
	    };
	    Ribbon.prototype._onOverflowClick = function (ev) {
	        if (this.state.expandedMenuItemKey === OVERFLOW_KEY) {
	            this._onContextMenuDismiss();
	        } else {
	            this.setState({
	                expandedMenuId: ev.currentTarget.id,
	                expandedMenuItemKey: OVERFLOW_KEY,
	                contextualMenuItems: this.state.renderedOverflowItems,
	                contextualMenuTarget: ev.currentTarget
	            });
	        }
	    };
	    Ribbon.prototype._onContextMenuDismiss = function (ev) {
	        if (!ev || !ev.relatedTarget || !this.refs.commandSurface.contains(ev.relatedTarget)) {
	            this.setState({
	                expandedMenuItemKey: null,
	                contextualMenuItems: null,
	                contextualMenuTarget: null
	            });
	        } else {
	            ev.stopPropagation();
	            ev.preventDefault();
	        }
	    };
	    Ribbon.prototype._getStateFromProps = function (nextProps) {
	        return {
	            renderedItems: nextProps.items || [],
	            renderedOverflowItems: null,
	            contextualMenuItems: null,
	            renderedFarItems: nextProps.farItems || null
	        };
	    };
	    Ribbon.defaultProps = {
	        items: [],
	        overflowItems: [],
	        farItems: []
	    };
	    __decorate([autobind_1.autobind, __metadata('design:type', Function), __metadata('design:paramtypes', [Object]), __metadata('design:returntype', void 0)], Ribbon.prototype, "_onOverflowClick", null);
	    __decorate([autobind_1.autobind, __metadata('design:type', Function), __metadata('design:paramtypes', [Object]), __metadata('design:returntype', void 0)], Ribbon.prototype, "_onContextMenuDismiss", null);
	    return Ribbon;
	}(React.Component);
	exports.Ribbon = Ribbon;

/***/ }

});
//# sourceMappingURL=Ribbon.5af099dfabf0e722b9fa.js.map