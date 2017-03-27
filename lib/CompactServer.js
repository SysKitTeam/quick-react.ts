webpackJsonp([8],{

/***/ 0:
/***/ function(module, exports, __webpack_require__) {

	"use strict";
	/* tslint:disable:no-console */
	
	__webpack_require__(1);
	__webpack_require__(298);
	var React = __webpack_require__(299);
	var ReactDOM = __webpack_require__(329);
	var CompactServer_1 = __webpack_require__(547);
	var Index = function (_super) {
	    __extends(Index, _super);
	    function Index() {
	        _super.apply(this, arguments);
	    }
	    Index.prototype.render = function () {
	        return React.createElement("div", null, React.createElement(CompactServer_1.CompactServer, { id: { FQDN: 'CUSTOM-PC.localdomain' }, onClose: this._onServerCloseCompactServer, onRoleEdit: this._onClickCompactServer, name: 'CUSTOM-PC', roles: [], status: 1 }), React.createElement(CompactServer_1.CompactServer, { id: { FQDN: 'My very very long name of a server I am using I know its very long.domain.com' }, onClose: this._onServerCloseCompactServer, onRoleEdit: this._onClickCompactServer, name: 'My very very long name of a server I am using I know its very long', roles: [], status: 2 }), React.createElement(CompactServer_1.CompactServer, { id: { FQDN: 'BANANA-PC.banana.com' }, onClose: this._onServerCloseCompactServer, onRoleEdit: this._onClickCompactServer, name: 'BANANA-PC', roles: [{ display: 'WPF', iconName: 'icon-add' }, { display: 'Search', iconName: 'icon-alert' }], status: 0 }));
	    };
	    ;
	    Index.prototype._onClickCompactServer = function (serverId) {
	        console.log('Clicked on editing roles of server ' + serverId);
	    };
	    Index.prototype._onServerCloseCompactServer = function (serverId) {
	        console.log('Clicked on closing server ' + serverId);
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

/***/ 547:
/***/ function(module, exports, __webpack_require__) {

	"use strict";
	
	var React = __webpack_require__(299);
	var TagContainer_1 = __webpack_require__(548);
	var classNames = __webpack_require__(476);
	var autobind_1 = __webpack_require__(507);
	var models_1 = __webpack_require__(551);
	__webpack_require__(555);
	function checkFilter(filter, serverName) {
	    return serverName.toLowerCase().trim().indexOf(filter.toLowerCase().trim()) !== -1;
	}
	var CompactServer = function (_super) {
	    __extends(CompactServer, _super);
	    function CompactServer(props) {
	        _super.call(this, props);
	    }
	    CompactServer.prototype.getRoleDisplay = function (role) {
	        return role.display;
	    };
	    CompactServer.prototype.shouldComponentUpdate = function (nextProps, nextState) {
	        return !(this.props.name === nextProps.name && this.props.status === nextProps.status && this.props.roles === nextProps.roles);
	    };
	    CompactServer.prototype.render = function () {
	        var isCritical = this.props.status === models_1.ServerStatus.Critical;
	        var isWarning = this.props.status === models_1.ServerStatus.Warning;
	        var isOK = this.props.status === models_1.ServerStatus.OK;
	        var showItem = this.props.filter ? checkFilter(this.props.filter, this.props.name) : true;
	        var className = classNames({ 'compact-server-container': showItem }, { 'status-warning': isWarning }, { 'status-ok': isOK }, { 'status-critical': isCritical });
	        return React.createElement("div", { className: className, onMouseEnter: this.props.onMouseEnter, onMouseLeave: this.props.onMouseLeave, onClick: this.onclick }, React.createElement("span", { className: 'server-title' }, React.createElement("span", null, this.props.name)), this.props.roles.length > 0 && React.createElement("div", null, React.createElement("hr", null), React.createElement(TagContainer_1.TagContainer, { title: '', tags: this.props.roles })));
	    };
	    CompactServer.prototype.onclick = function () {
	        var _a = this.props,
	            serverOnClick = _a.serverOnClick,
	            id = _a.id;
	        if (serverOnClick) {
	            serverOnClick(id);
	        }
	    };
	    CompactServer.prototype.editRoles = function (event) {
	        var onRoleEdit = this.props.onRoleEdit;
	        onRoleEdit(this.props.id);
	    };
	    CompactServer.prototype.closeServer = function (event) {
	        var onClose = this.props.onClose;
	        onClose(this.props.id);
	    };
	    __decorate([autobind_1.autobind, __metadata('design:type', Function), __metadata('design:paramtypes', []), __metadata('design:returntype', void 0)], CompactServer.prototype, "onclick", null);
	    __decorate([autobind_1.autobind, __metadata('design:type', Function), __metadata('design:paramtypes', [Object]), __metadata('design:returntype', void 0)], CompactServer.prototype, "editRoles", null);
	    __decorate([autobind_1.autobind, __metadata('design:type', Function), __metadata('design:paramtypes', [Object]), __metadata('design:returntype', void 0)], CompactServer.prototype, "closeServer", null);
	    return CompactServer;
	}(React.Component);
	exports.CompactServer = CompactServer;

/***/ },

/***/ 548:
/***/ function(module, exports, __webpack_require__) {

	"use strict";
	
	var React = __webpack_require__(299);
	var Icon_1 = __webpack_require__(480);
	__webpack_require__(549);
	var TagContainer = function (_super) {
	    __extends(TagContainer, _super);
	    function TagContainer(props) {
	        _super.call(this, props);
	    }
	    TagContainer.prototype.render = function () {
	        var _a = this.props,
	            tags = _a.tags,
	            title = _a.title;
	        var extraTags = '';
	        if (tags.length > 3) {
	            extraTags = tags.map(function (i) {
	                return i;
	            }).splice(3, tags.length).reduce(function (previous, current) {
	                if (previous !== '') {
	                    return previous + '\n' + current.display;
	                }
	                return current.display;
	            }, '');
	        }
	        return React.createElement("div", { className: "tag-container" }, title && React.createElement("h5", null, title), tags.length <= 3 && tags.map(function (tag, tagIndex) {
	            return React.createElement("div", { key: tag.display, className: "tag" }, tag.iconName && React.createElement(Icon_1.Icon, { iconName: tag.iconName }), React.createElement("span", { style: { cursor: 'pointer' }, className: 'tag-text', title: tag.display }, tag.display));
	        }), tags.length > 3 && tags.map(function (i) {
	            return i;
	        }).slice(0, 3).map(function (tag, tagIndex) {
	            return React.createElement("div", { key: tag.display, className: "tag" }, tag.iconName && React.createElement(Icon_1.Icon, { iconName: tag.iconName }), React.createElement("span", { style: { cursor: 'pointer' }, className: 'tag-text', title: tag.display }, tag.display));
	        }), tags.length > 3 && React.createElement("div", { className: "tag points", title: extraTags }, "..."), this.props.children);
	    };
	    return TagContainer;
	}(React.Component);
	exports.TagContainer = TagContainer;

/***/ },

/***/ 549:
/***/ function(module, exports, __webpack_require__) {

	// style-loader: Adds some css to the DOM by adding a <style> tag
	
	// load the styles
	var content = __webpack_require__(550);
	if(typeof content === 'string') content = [[module.id, content, '']];
	// add the styles to the DOM
	var update = __webpack_require__(484)(content, {});
	if(content.locals) module.exports = content.locals;
	// Hot Module Replacement
	if(false) {
		// When the styles change, update the <style> tags
		if(!content.locals) {
			module.hot.accept("!!../../../node_modules/css-loader/index.js!../../../node_modules/sass-loader/index.js?outputStyle=expanded!./TagContainer.scss", function() {
				var newContent = require("!!../../../node_modules/css-loader/index.js!../../../node_modules/sass-loader/index.js?outputStyle=expanded!./TagContainer.scss");
				if(typeof newContent === 'string') newContent = [[module.id, newContent, '']];
				update(newContent);
			});
		}
		// When the module is disposed, remove the <style> tags
		module.hot.dispose(function() { update(); });
	}

/***/ },

/***/ 550:
/***/ function(module, exports, __webpack_require__) {

	exports = module.exports = __webpack_require__(483)();
	// imports
	
	
	// module
	exports.push([module.id, "::-webkit-scrollbar {\n  width: 13px;\n  margin-top: 10px;\n  border-radius: 15px;\n  margin-right: 3px;\n  background: transparent;\n}\n\n::-webkit-scrollbar-track {\n  border-radius: 15px;\n  margin-top: 7px;\n  background: #EEEFF4;\n  margin-bottom: 7px;\n}\n\n::-webkit-scrollbar-thumb {\n  border-radius: 10px;\n  margin-top: 10px;\n  background: #D2D3D9;\n}\n\n::-webkit-scrollbar-thumb:window-inactive {\n  background: #D2D3D9;\n}\n\n.tag-container {\n  font-family: \"Segoe UI WestEuropean\",\"Segoe UI\",-apple-system,BlinkMacSystemFont,Roboto,\"Helvetica Neue\",sans-serif;\n  -webkit-font-smoothing: antialiased;\n  width: 95%;\n  margin: 5px 2.5%;\n  height: auto;\n}\n\n.tag-container .tag {\n  display: inline-block;\n  padding: 3px;\n  margin: 2px 4px;\n  background: #e8e9ef;\n  border-radius: 4px;\n  cursor: default;\n}\n\n.tag-container .icon {\n  margin-right: 2px;\n  color: #A09f9f;\n}\n\n.tag-container .edit-tags {\n  display: inline-block;\n  margin: 5px;\n  cursor: pointer;\n  background: none;\n}\n\n.tag-container .edit-tags:hover {\n  background: #7DC458;\n  color: white;\n}\n\n.tag-container .edit-tags:hover .icon {\n  background: #7DC458;\n  color: white;\n}\n\n.tag-container h5 {\n  margin: 0;\n  margin-top: 5px;\n  cursor: default;\n}\n\n.tag-container .tag.points {\n  cursor: pointer;\n  margin-left: 0 !important;\n  padding: 0;\n}\n\n.tag-container .tag-text {\n  max-width: 37px;\n  display: inline-block;\n  overflow: hidden;\n  text-overflow: ellipsis;\n  position: relative;\n  top: 2px;\n  white-space: nowrap;\n}\n", ""]);
	
	// exports


/***/ },

/***/ 551:
/***/ function(module, exports, __webpack_require__) {

	"use strict";
	
	function __export(m) {
	    for (var p in m) if (!exports.hasOwnProperty(p)) exports[p] = m[p];
	}
	__export(__webpack_require__(552));
	__export(__webpack_require__(553));
	__export(__webpack_require__(554));

/***/ },

/***/ 552:
/***/ function(module, exports) {

	"use strict";
	/**
	 * Empty farm. Should be used for testing purposes.
	 */
	
	exports.emptyFarm = {
	    id: { sqlInstance: '', configDataBaseName: '', configDataBaseIcon: '' },
	    isCustom: true,
	    version: { version: '' },
	    name: '',
	    servers: []
	};

/***/ },

/***/ 553:
/***/ function(module, exports) {

	"use strict";
	
	(function (MeasureType) {
	    MeasureType[MeasureType["Ram"] = 0] = "Ram";
	    MeasureType[MeasureType["CPU"] = 1] = "CPU";
	    MeasureType[MeasureType["Disk"] = 2] = "Disk";
	    MeasureType[MeasureType["Network"] = 3] = "Network";
	})(exports.MeasureType || (exports.MeasureType = {}));
	var MeasureType = exports.MeasureType;

/***/ },

/***/ 554:
/***/ function(module, exports) {

	"use strict";
	
	(function (ServerStatus) {
	    ServerStatus[ServerStatus["OK"] = 2] = "OK";
	    ServerStatus[ServerStatus["Warning"] = 1] = "Warning";
	    ServerStatus[ServerStatus["Critical"] = 0] = "Critical";
	    ServerStatus[ServerStatus["Offline"] = 3] = "Offline";
	})(exports.ServerStatus || (exports.ServerStatus = {}));
	var ServerStatus = exports.ServerStatus;

/***/ },

/***/ 555:
/***/ function(module, exports, __webpack_require__) {

	// style-loader: Adds some css to the DOM by adding a <style> tag
	
	// load the styles
	var content = __webpack_require__(556);
	if(typeof content === 'string') content = [[module.id, content, '']];
	// add the styles to the DOM
	var update = __webpack_require__(484)(content, {});
	if(content.locals) module.exports = content.locals;
	// Hot Module Replacement
	if(false) {
		// When the styles change, update the <style> tags
		if(!content.locals) {
			module.hot.accept("!!../../../node_modules/css-loader/index.js!../../../node_modules/sass-loader/index.js?outputStyle=expanded!./CompactServer.scss", function() {
				var newContent = require("!!../../../node_modules/css-loader/index.js!../../../node_modules/sass-loader/index.js?outputStyle=expanded!./CompactServer.scss");
				if(typeof newContent === 'string') newContent = [[module.id, newContent, '']];
				update(newContent);
			});
		}
		// When the module is disposed, remove the <style> tags
		module.hot.dispose(function() { update(); });
	}

/***/ },

/***/ 556:
/***/ function(module, exports, __webpack_require__) {

	exports = module.exports = __webpack_require__(483)();
	// imports
	
	
	// module
	exports.push([module.id, "::-webkit-scrollbar {\n  width: 13px;\n  margin-top: 10px;\n  border-radius: 15px;\n  margin-right: 3px;\n  background: transparent;\n}\n\n::-webkit-scrollbar-track {\n  border-radius: 15px;\n  margin-top: 7px;\n  background: #EEEFF4;\n  margin-bottom: 7px;\n}\n\n::-webkit-scrollbar-thumb {\n  border-radius: 10px;\n  margin-top: 10px;\n  background: #D2D3D9;\n}\n\n::-webkit-scrollbar-thumb:window-inactive {\n  background: #D2D3D9;\n}\n\n.compact-server-container {\n  font-family: \"Segoe UI WestEuropean\",\"Segoe UI\",-apple-system,BlinkMacSystemFont,Roboto,\"Helvetica Neue\",sans-serif;\n  -webkit-font-smoothing: antialiased;\n  position: relative;\n  margin: 8px;\n  border-left: 10px solid;\n  float: left;\n  width: 95%;\n  padding: 5px;\n  background: #e8e9ef;\n  color: #6b6b6b;\n}\n\n.compact-server-container hr {\n  width: 100%;\n  margin: 0 auto;\n  line-height: 0.1em;\n  margin-top: 5px;\n  margin-bottom: 4px;\n  color: #f9f9fb;\n  border: none;\n  height: 1px;\n  background-color: #f9f9fb;\n}\n\n.compact-server-container .server-title {\n  position: relative;\n  float: left;\n  margin-bottom: 5px;\n  margin-left: 5px;\n  width: calc(100% - 10px);\n  display: block;\n  font-weight: 400;\n  font-size: 17px;\n  color: #4b4949;\n}\n\n.compact-server-container .server-title :first-child {\n  width: calc(100% - 30px);\n  white-space: nowrap;\n  display: block;\n  overflow: hidden;\n  text-overflow: ellipsis;\n  position: relative;\n}\n\n.compact-server-container .server-title .server-close {\n  font-size: 27px;\n  position: absolute;\n  right: -1px;\n  top: -9px;\n  color: #fb6464;\n  display: none;\n  font-weight: 900;\n  cursor: pointer;\n}\n\n.compact-server-container .server-title:hover .server-close, .compact-server-container .server-close:hover {\n  display: block;\n}\n\n.compact-server-container .tag-container {\n  position: relative;\n  float: left;\n  width: 100%;\n  margin: 0;\n  margin-left: 5px;\n  background: #e8e9ef;\n}\n\n.compact-server-container .tag-container .tag {\n  background: #e8e9ef;\n  margin-top: 0;\n  margin-bottom: 0;\n  padding-top: 0;\n  padding-bottom: 0;\n  margin: 0;\n  font-size: 12px;\n  color: #7e7f82;\n  font-weight: normal;\n  margin-left: 4px;\n}\n\n.compact-server-container .tag-container .tag .icon {\n  color: #7e7f82;\n}\n\n.compact-server-container .tag-container .edit-tags:hover {\n  background: inherit;\n  color: #7DC458;\n}\n\n.compact-server-container .tag-container .edit-tags:hover .icon {\n  background: inherit;\n  color: #7DC458;\n}\n\n.compact-server-container .icon {\n  color: #6b6b6b;\n}\n\n.status-ok {\n  border-left-color: #7DC458;\n}\n\n.status-warning {\n  border-left-color: #EAC71A;\n}\n\n.status-critical {\n  border-left-color: #fb6464;\n}\n\n.offline {\n  border-left-color: #6b6b6b;\n}\n", ""]);
	
	// exports


/***/ }

});
//# sourceMappingURL=CompactServer.5af099dfabf0e722b9fa.js.map