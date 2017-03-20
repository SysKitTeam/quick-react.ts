webpackJsonp([10],{

/***/ 0:
/***/ function(module, exports, __webpack_require__) {

	"use strict";
	/* tslint:disable:no-console */
	
	__webpack_require__(1);
	__webpack_require__(298);
	var React = __webpack_require__(299);
	var ReactDOM = __webpack_require__(329);
	var Dashboard_1 = __webpack_require__(548);
	var DashboardDummy_1 = __webpack_require__(631);
	var models_1 = __webpack_require__(542);
	var Index = function (_super) {
	    __extends(Index, _super);
	    function Index() {
	        var _this = this;
	        _super.call(this);
	        this.state = {
	            cpu: '74',
	            farms: DashboardDummy_1.dummyDashboard.farms,
	            width: 600
	        };
	        setInterval(function () {
	            var newFarms = _this.state.farms.map(function (farm) {
	                var servers = farm.servers.map(function (server) {
	                    var measures = DashboardDummy_1.generateMeasures();
	                    var status = models_1.ServerStatus.Offline;
	                    if (measures.length > 0) {
	                        status = models_1.ServerStatus.OK;
	                        if (measures.filter(function (t) {
	                            return t.status === models_1.ServerStatus.Warning;
	                        }).length > 0) {
	                            status = models_1.ServerStatus.Warning;
	                        }
	                        if (measures.filter(function (t) {
	                            return t.status === models_1.ServerStatus.Critical;
	                        }).length > 0) {
	                            status = models_1.ServerStatus.Critical;
	                        }
	                    }
	                    return {
	                        id: server.id,
	                        status: status,
	                        roles: server.roles,
	                        onRoleEdit: server.onRoleEdit,
	                        onClose: server.onClose,
	                        name: server.name,
	                        measures: measures
	                    };
	                });
	                return {
	                    id: farm.id,
	                    isCustom: farm.isCustom,
	                    version: farm.version,
	                    name: farm.name,
	                    servers: servers
	                };
	            });
	            _this.setState({ farms: newFarms });
	        }, 2000);
	    }
	    Index.prototype.render = function () {
	        return React.createElement("div", null, React.createElement(Dashboard_1.Dashboard, { differentDashboards: DashboardDummy_1.dummyDashboard.differentDashboards, groupOnClick: DashboardDummy_1.dummyDashboard.groupOnClick, farms: this.state.farms, filter: '', title: DashboardDummy_1.dummyDashboard.title, activeView: 0, hasAddButton: true, addFarm: DashboardDummy_1.dummyDashboard.addFarm, groupAddFunc: DashboardDummy_1.dummyDashboard.groupAddFunc, groupDeleteFunc: DashboardDummy_1.dummyDashboard.groupDeleteFunc, groupEditFunc: DashboardDummy_1.dummyDashboard.groupEditFunc, serverClose: DashboardDummy_1.dummyDashboard.serverClose, serverRoleEdit: DashboardDummy_1.dummyDashboard.serverRoleEdit }));
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

/***/ 494:
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

/***/ 496:
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

/***/ 497:
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

/***/ 498:
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

/***/ 499:
/***/ function(module, exports, __webpack_require__) {

	"use strict";
	
	var React = __webpack_require__(299);
	var EventGroup_1 = __webpack_require__(500);
	var Async_1 = __webpack_require__(501);
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

/***/ 500:
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

/***/ 501:
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

/***/ 504:
/***/ function(module, exports, __webpack_require__) {

	"use strict";
	
	var getParent_1 = __webpack_require__(505);
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

/***/ 505:
/***/ function(module, exports, __webpack_require__) {

	"use strict";
	
	var virtualParent_1 = __webpack_require__(506);
	function getParent(child, allowVirtualParents) {
	    if (allowVirtualParents === void 0) {
	        allowVirtualParents = true;
	    }
	    return child && (allowVirtualParents && virtualParent_1.getVirtualParent(child) || child.parentNode && child.parentNode);
	}
	exports.getParent = getParent;

/***/ },

/***/ 506:
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

/***/ 538:
/***/ function(module, exports, __webpack_require__) {

	"use strict";
	
	var React = __webpack_require__(299);
	var TagContainer_1 = __webpack_require__(539);
	var classNames = __webpack_require__(476);
	var autobind_1 = __webpack_require__(498);
	var models_1 = __webpack_require__(542);
	__webpack_require__(546);
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
	        return React.createElement("div", { className: className }, React.createElement("span", { className: 'server-title' }, React.createElement("span", { title: this.props.name }, this.props.name), React.createElement("span", { className: 'server-close', onClick: this.closeServer }, "×")), this.props.roles.length > 0 && React.createElement("div", null, React.createElement("hr", null), React.createElement(TagContainer_1.TagContainer, { title: '', tags: this.props.roles })));
	    };
	    CompactServer.prototype.editRoles = function (event) {
	        var onRoleEdit = this.props.onRoleEdit;
	        onRoleEdit(this.props.id);
	    };
	    CompactServer.prototype.closeServer = function (event) {
	        var onClose = this.props.onClose;
	        onClose(this.props.id);
	    };
	    __decorate([autobind_1.autobind, __metadata('design:type', Function), __metadata('design:paramtypes', [Object]), __metadata('design:returntype', void 0)], CompactServer.prototype, "editRoles", null);
	    __decorate([autobind_1.autobind, __metadata('design:type', Function), __metadata('design:paramtypes', [Object]), __metadata('design:returntype', void 0)], CompactServer.prototype, "closeServer", null);
	    return CompactServer;
	}(React.Component);
	exports.CompactServer = CompactServer;

/***/ },

/***/ 539:
/***/ function(module, exports, __webpack_require__) {

	"use strict";
	
	var React = __webpack_require__(299);
	var Icon_1 = __webpack_require__(480);
	__webpack_require__(540);
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

/***/ 540:
/***/ function(module, exports, __webpack_require__) {

	// style-loader: Adds some css to the DOM by adding a <style> tag
	
	// load the styles
	var content = __webpack_require__(541);
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

/***/ 541:
/***/ function(module, exports, __webpack_require__) {

	exports = module.exports = __webpack_require__(483)();
	// imports
	
	
	// module
	exports.push([module.id, "::-webkit-scrollbar {\n  width: 13px;\n  margin-top: 10px;\n  border-radius: 15px;\n  margin-right: 3px;\n  background: transparent;\n}\n\n::-webkit-scrollbar-track {\n  border-radius: 15px;\n  margin-top: 7px;\n  background: #EEEFF4;\n  margin-bottom: 7px;\n}\n\n::-webkit-scrollbar-thumb {\n  border-radius: 10px;\n  margin-top: 10px;\n  background: #D2D3D9;\n}\n\n::-webkit-scrollbar-thumb:window-inactive {\n  background: #D2D3D9;\n}\n\n.tag-container {\n  font-family: \"Segoe UI WestEuropean\",\"Segoe UI\",-apple-system,BlinkMacSystemFont,Roboto,\"Helvetica Neue\",sans-serif;\n  -webkit-font-smoothing: antialiased;\n  width: 95%;\n  margin: 5px 2.5%;\n  height: auto;\n}\n\n.tag-container .tag {\n  display: inline-block;\n  padding: 3px;\n  margin: 2px 4px;\n  background: #e8e9ef;\n  border-radius: 4px;\n  cursor: default;\n}\n\n.tag-container .icon {\n  margin-right: 2px;\n  color: #A09f9f;\n}\n\n.tag-container .edit-tags {\n  display: inline-block;\n  margin: 5px;\n  cursor: pointer;\n  background: none;\n}\n\n.tag-container .edit-tags:hover {\n  background: #7DC458;\n  color: white;\n}\n\n.tag-container .edit-tags:hover .icon {\n  background: #7DC458;\n  color: white;\n}\n\n.tag-container h5 {\n  margin: 0;\n  margin-top: 5px;\n  cursor: default;\n}\n\n.tag-container .tag.points {\n  cursor: pointer;\n  margin-left: 0 !important;\n  padding: 0;\n}\n\n.tag-container .tag-text {\n  max-width: 37px;\n  display: inline-block;\n  overflow: hidden;\n  text-overflow: ellipsis;\n  position: relative;\n  top: 2px;\n  white-space: nowrap;\n}\n", ""]);
	
	// exports


/***/ },

/***/ 542:
/***/ function(module, exports, __webpack_require__) {

	"use strict";
	
	function __export(m) {
	    for (var p in m) if (!exports.hasOwnProperty(p)) exports[p] = m[p];
	}
	__export(__webpack_require__(543));
	__export(__webpack_require__(544));
	__export(__webpack_require__(545));

/***/ },

/***/ 543:
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

/***/ 544:
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

/***/ 545:
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

/***/ 546:
/***/ function(module, exports, __webpack_require__) {

	// style-loader: Adds some css to the DOM by adding a <style> tag
	
	// load the styles
	var content = __webpack_require__(547);
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

/***/ 547:
/***/ function(module, exports, __webpack_require__) {

	exports = module.exports = __webpack_require__(483)();
	// imports
	
	
	// module
	exports.push([module.id, "::-webkit-scrollbar {\n  width: 13px;\n  margin-top: 10px;\n  border-radius: 15px;\n  margin-right: 3px;\n  background: transparent;\n}\n\n::-webkit-scrollbar-track {\n  border-radius: 15px;\n  margin-top: 7px;\n  background: #EEEFF4;\n  margin-bottom: 7px;\n}\n\n::-webkit-scrollbar-thumb {\n  border-radius: 10px;\n  margin-top: 10px;\n  background: #D2D3D9;\n}\n\n::-webkit-scrollbar-thumb:window-inactive {\n  background: #D2D3D9;\n}\n\n.compact-server-container {\n  font-family: \"Segoe UI WestEuropean\",\"Segoe UI\",-apple-system,BlinkMacSystemFont,Roboto,\"Helvetica Neue\",sans-serif;\n  -webkit-font-smoothing: antialiased;\n  position: relative;\n  margin: 8px;\n  border-left: 10px solid;\n  float: left;\n  width: 95%;\n  padding: 5px;\n  background: #e8e9ef;\n  color: #6b6b6b;\n}\n\n.compact-server-container hr {\n  width: 100%;\n  margin: 0 auto;\n  line-height: 0.1em;\n  margin-top: 5px;\n  margin-bottom: 4px;\n  color: #f9f9fb;\n  border: none;\n  height: 1px;\n  background-color: #f9f9fb;\n}\n\n.compact-server-container .server-title {\n  position: relative;\n  float: left;\n  margin-bottom: 5px;\n  margin-left: 5px;\n  width: calc(100% - 10px);\n  display: block;\n  font-weight: 400;\n  font-size: 17px;\n  color: #4b4949;\n}\n\n.compact-server-container .server-title :first-child {\n  width: calc(100% - 30px);\n  white-space: nowrap;\n  display: block;\n  overflow: hidden;\n  text-overflow: ellipsis;\n  position: relative;\n}\n\n.compact-server-container .server-title .server-close {\n  font-size: 27px;\n  position: absolute;\n  right: -1px;\n  top: -9px;\n  color: #fb6464;\n  display: none;\n  font-weight: 900;\n  cursor: pointer;\n}\n\n.compact-server-container .server-title:hover .server-close, .compact-server-container .server-close:hover {\n  display: block;\n}\n\n.compact-server-container .tag-container {\n  position: relative;\n  float: left;\n  width: 100%;\n  margin: 0;\n  margin-left: 5px;\n  background: #e8e9ef;\n}\n\n.compact-server-container .tag-container .tag {\n  background: #e8e9ef;\n  margin-top: 0;\n  margin-bottom: 0;\n  padding-top: 0;\n  padding-bottom: 0;\n  margin: 0;\n  font-size: 12px;\n  color: #7e7f82;\n  font-weight: normal;\n  margin-left: 4px;\n}\n\n.compact-server-container .tag-container .tag .icon {\n  color: #7e7f82;\n}\n\n.compact-server-container .tag-container .edit-tags:hover {\n  background: inherit;\n  color: #7DC458;\n}\n\n.compact-server-container .tag-container .edit-tags:hover .icon {\n  background: inherit;\n  color: #7DC458;\n}\n\n.compact-server-container .icon {\n  color: #6b6b6b;\n}\n\n.status-ok {\n  border-left-color: #7DC458;\n}\n\n.status-warning {\n  border-left-color: #EAC71A;\n}\n\n.status-critical {\n  border-left-color: #fb6464;\n}\n\n.offline {\n  border-left-color: #6b6b6b;\n}\n", ""]);
	
	// exports


/***/ },

/***/ 548:
/***/ function(module, exports, __webpack_require__) {

	"use strict";
	
	var React = __webpack_require__(299);
	var DashboardHeader_1 = __webpack_require__(549);
	var CompactDashboard_1 = __webpack_require__(560);
	var TileDashboard_1 = __webpack_require__(619);
	var DashboardHeader_Props_1 = __webpack_require__(628);
	var PivotItem_1 = __webpack_require__(554);
	__webpack_require__(629);
	var autobind_1 = __webpack_require__(498);
	function sortFarms(ob1, ob2) {
	    if (ob1.farmName < ob2.farmName) {
	        return -1;
	    }
	    if (ob1.farmName > ob2.farmName) {
	        return 1;
	    }
	    return 0;
	}
	var Dashboard = function (_super) {
	    __extends(Dashboard, _super);
	    function Dashboard(props) {
	        _super.call(this, props);
	        this.state = {
	            activeView: props.activeView,
	            filter: props.filter
	        };
	    }
	    Dashboard.prototype.changeView = function (item, ev) {
	        this.setState({ activeView: Number(item.props.itemKey) });
	    };
	    Dashboard.prototype.render = function () {
	        var _a = this.props,
	            headerClass = _a.headerClass,
	            hasAddButton = _a.hasAddButton;
	        var _b = this.state,
	            filter = _b.filter,
	            activeView = _b.activeView;
	        return React.createElement("div", { className: "dashboard" }, React.createElement(DashboardHeader_1.DashboardHeader, { onAddFarmClick: this.props.addFarm, headerClass: headerClass, pivotItems: this.props.differentDashboards, hasAddFarmButton: hasAddButton, onChanged: this.changeSearchFilter, filter: filter, title: this.props.title, onViewChange: this.changeView, selectedDashboardKey: activeView }), (activeView === DashboardHeader_Props_1.ActiveDashboard.CompactHorizontal || activeView === DashboardHeader_Props_1.ActiveDashboard.CompactVertical) && React.createElement(CompactDashboard_1.CompactDashboard, { filter: filter, className: 'viewport-height', title: this.props.title, farms: this.props.farms, isVertical: activeView === DashboardHeader_Props_1.ActiveDashboard.CompactVertical, groupEditFunc: this.props.groupEditFunc, groupAddFunc: this.props.groupEditFunc, groupDeleteFunc: this.props.groupDeleteFunc, groupOnClick: this.props.groupOnClick, serverRoleEdit: this.props.serverRoleEdit, serverClose: this.props.serverClose }), activeView === DashboardHeader_Props_1.ActiveDashboard.Tiles && React.createElement(TileDashboard_1.TileDashboard, { className: 'viewport-height', farms: this.props.farms, filter: filter, groupEditFunc: this.props.groupEditFunc, groupAddFunc: this.props.groupEditFunc, groupDeleteFunc: this.props.groupDeleteFunc, groupOnClick: this.props.groupOnClick, serverRoleEdit: this.props.serverRoleEdit, serverClose: this.props.serverClose }));
	    };
	    Dashboard.prototype.changeSearchFilter = function (newValue) {
	        this.setState({ filter: newValue });
	    };
	    __decorate([autobind_1.autobind, __metadata('design:type', Function), __metadata('design:paramtypes', [PivotItem_1.PivotItem, Object]), __metadata('design:returntype', void 0)], Dashboard.prototype, "changeView", null);
	    __decorate([autobind_1.autobind, __metadata('design:type', Function), __metadata('design:paramtypes', [Object]), __metadata('design:returntype', void 0)], Dashboard.prototype, "changeSearchFilter", null);
	    return Dashboard;
	}(React.Component);
	exports.Dashboard = Dashboard;

/***/ },

/***/ 549:
/***/ function(module, exports, __webpack_require__) {

	"use strict";
	
	var React = __webpack_require__(299);
	var Search_1 = __webpack_require__(550);
	var Pivot_1 = __webpack_require__(553);
	var PivotItem_1 = __webpack_require__(554);
	var Icon_1 = __webpack_require__(480);
	var classNames = __webpack_require__(476);
	__webpack_require__(558);
	var DashboardHeader = function (_super) {
	    __extends(DashboardHeader, _super);
	    function DashboardHeader(props) {
	        _super.call(this, props);
	    }
	    DashboardHeader.prototype.render = function () {
	        var _this = this;
	        var _a = this.props,
	            hasAddFarmButton = _a.hasAddFarmButton,
	            title = _a.title,
	            selectedDashboardKey = _a.selectedDashboardKey;
	        return React.createElement("div", { className: "dashboard-header-container" }, React.createElement("span", { className: classNames('dashboard-header-title-container', this.props.headerClass) }, React.createElement("span", { className: 'dashboard-header-title', title: title }, title), hasAddFarmButton && React.createElement(Icon_1.Icon, { className: 'add-farm', iconName: 'icon-add', onClick: this.props.onAddFarmClick, title: 'Add' })), React.createElement(Search_1.Search, { onSearch: this.props.onSearch, onChange: this.props.onChanged, value: this.props.filter }), React.createElement("div", { style: { display: 'inline-block' } }, " "), this.props.pivotItems && React.createElement(Pivot_1.Pivot, { onLinkClick: this.props.onViewChange, selectedKey: selectedDashboardKey.toString() }, Object.keys(this.props.pivotItems).map(function (key) {
	            return React.createElement(PivotItem_1.PivotItem, { key: key, linkText: _this.props.pivotItems[key].linkText, linkIcon: _this.props.pivotItems[key].linkIcon, itemKey: key, itemCount: _this.props.pivotItems[key].itemCount });
	        })));
	    };
	    return DashboardHeader;
	}(React.Component);
	exports.DashboardHeader = DashboardHeader;

/***/ },

/***/ 550:
/***/ function(module, exports, __webpack_require__) {

	"use strict";
	
	var React = __webpack_require__(299);
	var classNames = __webpack_require__(476);
	var getId_1 = __webpack_require__(494);
	var autobind_1 = __webpack_require__(498);
	var Common_1 = __webpack_require__(499);
	var KeyCodes_1 = __webpack_require__(496);
	var Icon_1 = __webpack_require__(480);
	var getDocument_1 = __webpack_require__(497);
	var elementContains_1 = __webpack_require__(504);
	__webpack_require__(551);
	var Search = function (_super) {
	    __extends(Search, _super);
	    function Search(props) {
	        _super.call(this, props);
	        // Handle deprecated prop
	        if (this.props.onChanged) {
	            this.props.onChange = this.props.onChanged;
	        }
	        this.state = {
	            value: props.value || '',
	            hasFocus: false,
	            id: getId_1.getId('search')
	        };
	    }
	    Search.prototype.componentWillReceiveProps = function (newProps) {
	        if (newProps.value !== undefined) {
	            this.setState({
	                value: newProps.value
	            });
	        }
	    };
	    Search.prototype.render = function () {
	        var _a = this.props,
	            labelText = _a.labelText,
	            className = _a.className;
	        var _b = this.state,
	            value = _b.value,
	            hasFocus = _b.hasFocus,
	            id = _b.id;
	        var searchClassName = classNames('search', className, {
	            'is-active': hasFocus,
	            'can-clear': value.length > 0
	        });
	        return React.createElement("div", __assign({ ref: this._resolveRef('_rootElement'), className: searchClassName }, { onFocusCapture: this._onFocusCapture }), React.createElement(Icon_1.Icon, { className: 'search-icon', iconName: 'icon-search' }), React.createElement("input", { id: id, className: 'search-field', placeholder: labelText, onChange: this._onInputChange, onKeyDown: this._onKeyDown, value: value, ref: this._resolveRef('_inputElement') }), React.createElement("div", { className: 'search-clearButton', onClick: this._onClearClick }, React.createElement(Icon_1.Icon, { iconName: 'icon-delete' })));
	    };
	    Search.prototype._onClearClick = function (ev) {
	        this.setState({
	            value: ''
	        });
	        this._callOnChange('');
	        ev.stopPropagation();
	        ev.preventDefault();
	        this._inputElement.focus();
	    };
	    Search.prototype._onFocusCapture = function (ev) {
	        this.setState({
	            hasFocus: true
	        });
	        this._events.on(getDocument_1.getDocument().body, 'focus', this._handleDocumentFocus, true);
	    };
	    Search.prototype._onKeyDown = function (ev) {
	        switch (ev.which) {
	            case KeyCodes_1.KeyCodes.escape:
	                this._onClearClick(ev);
	                break;
	            case KeyCodes_1.KeyCodes.enter:
	                if (this.props.onSearch && this.state.value.length > 0) {
	                    this.props.onSearch(this.state.value);
	                }
	                break;
	            default:
	                return;
	        }
	        // We only get here if the keypress has been handled.
	        ev.preventDefault();
	        ev.stopPropagation();
	    };
	    Search.prototype._onInputChange = function (ev) {
	        this.setState({
	            value: this._inputElement.value
	        });
	        this._callOnChange(this._inputElement.value);
	    };
	    Search.prototype._handleDocumentFocus = function (ev) {
	        if (!elementContains_1.elementContains(this._rootElement, ev.target)) {
	            this._events.off(getDocument_1.getDocument().body, 'focus');
	            this.setState({
	                hasFocus: false
	            });
	        }
	    };
	    Search.prototype._callOnChange = function (newValue) {
	        var onChange = this.props.onChange;
	        if (onChange) {
	            onChange(newValue);
	        }
	    };
	    Search.defaultProps = {
	        labelText: 'Search'
	    };
	    __decorate([autobind_1.autobind, __metadata('design:type', Function), __metadata('design:paramtypes', [Object]), __metadata('design:returntype', void 0)], Search.prototype, "_onClearClick", null);
	    __decorate([autobind_1.autobind, __metadata('design:type', Function), __metadata('design:paramtypes', [Object]), __metadata('design:returntype', void 0)], Search.prototype, "_onFocusCapture", null);
	    __decorate([autobind_1.autobind, __metadata('design:type', Function), __metadata('design:paramtypes', [Object]), __metadata('design:returntype', void 0)], Search.prototype, "_onKeyDown", null);
	    __decorate([autobind_1.autobind, __metadata('design:type', Function), __metadata('design:paramtypes', [Object]), __metadata('design:returntype', void 0)], Search.prototype, "_onInputChange", null);
	    return Search;
	}(Common_1.CommonComponent);
	exports.Search = Search;

/***/ },

/***/ 551:
/***/ function(module, exports, __webpack_require__) {

	// style-loader: Adds some css to the DOM by adding a <style> tag
	
	// load the styles
	var content = __webpack_require__(552);
	if(typeof content === 'string') content = [[module.id, content, '']];
	// add the styles to the DOM
	var update = __webpack_require__(484)(content, {});
	if(content.locals) module.exports = content.locals;
	// Hot Module Replacement
	if(false) {
		// When the styles change, update the <style> tags
		if(!content.locals) {
			module.hot.accept("!!../../../node_modules/css-loader/index.js!../../../node_modules/sass-loader/index.js?outputStyle=expanded!./Search.scss", function() {
				var newContent = require("!!../../../node_modules/css-loader/index.js!../../../node_modules/sass-loader/index.js?outputStyle=expanded!./Search.scss");
				if(typeof newContent === 'string') newContent = [[module.id, newContent, '']];
				update(newContent);
			});
		}
		// When the module is disposed, remove the <style> tags
		module.hot.dispose(function() { update(); });
	}

/***/ },

/***/ 552:
/***/ function(module, exports, __webpack_require__) {

	exports = module.exports = __webpack_require__(483)();
	// imports
	
	
	// module
	exports.push([module.id, "::-webkit-scrollbar {\n  width: 13px;\n  margin-top: 10px;\n  border-radius: 15px;\n  margin-right: 3px;\n  background: transparent;\n}\n\n::-webkit-scrollbar-track {\n  border-radius: 15px;\n  margin-top: 7px;\n  background: #EEEFF4;\n  margin-bottom: 7px;\n}\n\n::-webkit-scrollbar-thumb {\n  border-radius: 10px;\n  margin-top: 10px;\n  background: #D2D3D9;\n}\n\n::-webkit-scrollbar-thumb:window-inactive {\n  background: #D2D3D9;\n}\n\n.search {\n  font-family: \"Segoe UI WestEuropean\",\"Segoe UI\",-apple-system,BlinkMacSystemFont,Roboto,\"Helvetica Neue\",sans-serif;\n  -webkit-font-smoothing: antialiased;\n  font-size: 14px;\n  font-weight: 400;\n  box-sizing: border-box;\n  margin: 0;\n  padding: 0;\n  box-shadow: none;\n  color: #333333;\n  position: relative;\n  margin-bottom: 10px;\n  border: 1px solid #0078d7;\n  width: 500px;\n}\n\n.search.is-active {\n  border-color: #0078d7;\n}\n\n.search.is-active .search-field {\n  padding-left: 8px;\n}\n\n.search.is-active .search-icon {\n  display: none;\n}\n\n.search.is-disabled {\n  border-color: #f4f4f4;\n}\n\n.search.is-disabled .search-icon {\n  color: #f8f8f8;\n}\n\n.search.is-disabled .search-field {\n  background-color: #f4f4f4;\n  pointer-events: none;\n  cursor: default;\n}\n\n.search.can-clear .search-clearButton {\n  display: block;\n}\n\n.search:hover .search-field {\n  border-color: #005a93;\n}\n\n.search:hover .search-label {\n  color: #000000;\n}\n\n.search:hover .search-label .search-icon {\n  color: #0078d7;\n}\n\ninput.search-field {\n  position: relative;\n  box-sizing: border-box;\n  margin: 0;\n  box-shadow: none;\n  border: none;\n  outline: transparent 1px solid;\n  font-weight: inherit;\n  font-family: inherit;\n  font-size: inherit;\n  color: #000000;\n  height: 34px;\n  line-height: 34px;\n  padding: 6px 38px 7px 31px;\n  width: 100%;\n  background-color: transparent;\n  transition: padding-left 167ms;\n}\n\ninput.search-field:focus {\n  padding-right: 32px;\n}\n\n.search-clearButton {\n  display: none;\n  border: none;\n  cursor: pointer;\n  position: absolute;\n  top: 0;\n  right: 0;\n  width: 40px;\n  height: 36px;\n  line-height: 36px;\n  vertical-align: top;\n  color: #0078d7;\n  text-align: center;\n  font-size: 16px;\n}\n\n.search-icon {\n  position: absolute;\n  left: 8px;\n  top: 0;\n  height: 36px;\n  line-height: 36px;\n  vertical-align: top;\n  font-size: 16px;\n  width: 16px;\n  color: #0078d7;\n  margin-right: 6px;\n}\n", ""]);
	
	// exports


/***/ },

/***/ 553:
/***/ function(module, exports, __webpack_require__) {

	"use strict";
	
	var React = __webpack_require__(299);
	var classNames = __webpack_require__(476);
	var PivotItem_1 = __webpack_require__(554);
	var Pivot_Props_1 = __webpack_require__(555);
	var getId_1 = __webpack_require__(494);
	var Icon_1 = __webpack_require__(480);
	__webpack_require__(556);
	var Pivot = function (_super) {
	    __extends(Pivot, _super);
	    function Pivot(props) {
	        _super.call(this, props);
	        var links = this._getPivotLinks(this.props);
	        var selectedKey;
	        if (props.selectedKey) {
	            selectedKey = props.selectedKey;
	        } else if (props.selectedIndex) {
	            selectedKey = links[props.selectedIndex].itemKey;
	        } else {
	            selectedKey = links[0].itemKey;
	        }
	        this.state = {
	            links: links,
	            selectedKey: selectedKey,
	            id: getId_1.getId('pivot')
	        };
	        this._renderLink = this._renderLink.bind(this);
	    }
	    Pivot.prototype.componentWillReceiveProps = function (nextProps) {
	        var links = this._getPivotLinks(nextProps);
	        var selectedKey;
	        if (nextProps.selectedKey && this._isKeyValid(nextProps.selectedKey)) {
	            selectedKey = nextProps.selectedKey;
	        } else if (nextProps.selectedIndex && nextProps.selectedIndex < links.length) {
	            selectedKey = links[nextProps.selectedIndex].itemKey;
	        } else if (this._isKeyValid(this.state.selectedKey)) {
	            selectedKey = this.state.selectedKey;
	        } else {
	            selectedKey = links[0].itemKey;
	        }
	        this.setState({
	            links: links,
	            selectedKey: selectedKey
	        });
	    };
	    Pivot.prototype.render = function () {
	        return React.createElement("div", null, this._renderPivotLinks(), this._renderPivotItem());
	    };
	    Pivot.prototype._renderPivotLinks = function () {
	        var className = classNames('pivot', {
	            'pivot-tabs': this.props.linkFormat === Pivot_Props_1.PivotLinkFormat.tabs
	        });
	        return React.createElement("ul", { className: className, role: "tablist" }, this.state.links.map(this._renderLink));
	    };
	    Pivot.prototype._renderLink = function (link) {
	        var itemKey = link.itemKey,
	            itemCount = link.itemCount;
	        var id = this.state.id;
	        var countText;
	        if (itemCount !== undefined && this.props.linkFormat !== Pivot_Props_1.PivotLinkFormat.tabs) {
	            countText = React.createElement("span", { className: 'pivot-count' }, "(", itemCount, ")");
	        }
	        var pivotLinkClassName = classNames('pivot-link', {
	            'is-selected': this.state.selectedKey === itemKey
	        });
	        return React.createElement("a", { id: id + '-tab', key: itemKey, className: pivotLinkClassName, onClick: this._onLinkClick.bind(this, itemKey), role: "tab" }, link.linkIcon && React.createElement(Icon_1.Icon, { iconName: link.linkIcon, className: 'pivot-icon', title: link.linkText }), !link.linkIcon && React.createElement("span", { className: 'pivot-text' }, link.linkText), countText);
	    };
	    Pivot.prototype._renderPivotItem = function () {
	        var itemKey = this.state.selectedKey;
	        var index = this._keyToIndexMapping[itemKey];
	        var id = this.state.id;
	        return React.createElement("div", { className: 'pivotItem', role: "tabpanel", id: id + '-panel' }, React.Children.toArray(this.props.children)[index]);
	    };
	    Pivot.prototype._getPivotLinks = function (props) {
	        var _this = this;
	        var links = [];
	        this._keyToIndexMapping = {};
	        React.Children.map(props.children, function (child, index) {
	            if (typeof child === 'object' && child.type === PivotItem_1.PivotItem) {
	                var pivotItem = child;
	                var itemKey = pivotItem.props.itemKey || index.toString();
	                links.push({
	                    linkText: pivotItem.props.linkText,
	                    linkIcon: pivotItem.props.linkIcon,
	                    itemKey: itemKey,
	                    itemCount: pivotItem.props.itemCount
	                });
	                _this._keyToIndexMapping[itemKey] = index;
	            }
	        });
	        return links;
	    };
	    Pivot.prototype._isKeyValid = function (itemKey) {
	        return itemKey !== undefined && this._keyToIndexMapping[itemKey] !== undefined;
	    };
	    /**
	    * Handles the onClick event on PivotLinks
	    */
	    Pivot.prototype._onLinkClick = function (itemKey, ev) {
	        ev.preventDefault();
	        this._updateSelectedItem(itemKey, ev);
	    };
	    /**
	     * Updates the state with the new selected index
	     */
	    Pivot.prototype._updateSelectedItem = function (itemKey, ev) {
	        var _this = this;
	        this.setState({
	            selectedKey: itemKey
	        }, function () {
	            if (_this.props.onLinkClick && _this._keyToIndexMapping[itemKey] >= 0) {
	                var index = _this._keyToIndexMapping[itemKey];
	                // React.Element<any> cannot directly convert to PivotItem.
	                var item = React.Children.toArray(_this.props.children)[index];
	                if (typeof item === 'object' && item.type === PivotItem_1.PivotItem) {
	                    _this.props.onLinkClick(item, ev);
	                }
	            }
	        });
	    };
	    return Pivot;
	}(React.Component);
	exports.Pivot = Pivot;

/***/ },

/***/ 554:
/***/ function(module, exports, __webpack_require__) {

	"use strict";
	
	var React = __webpack_require__(299);
	var PivotItem = function (_super) {
	    __extends(PivotItem, _super);
	    function PivotItem() {
	        _super.apply(this, arguments);
	    }
	    PivotItem.prototype.render = function () {
	        return React.createElement("div", null, this.props.children);
	    };
	    return PivotItem;
	}(React.Component);
	exports.PivotItem = PivotItem;

/***/ },

/***/ 555:
/***/ function(module, exports) {

	"use strict";
	
	(function (PivotLinkFormat) {
	    PivotLinkFormat[PivotLinkFormat["links"] = 0] = "links";
	    PivotLinkFormat[PivotLinkFormat["tabs"] = 1] = "tabs";
	})(exports.PivotLinkFormat || (exports.PivotLinkFormat = {}));
	var PivotLinkFormat = exports.PivotLinkFormat;

/***/ },

/***/ 556:
/***/ function(module, exports, __webpack_require__) {

	// style-loader: Adds some css to the DOM by adding a <style> tag
	
	// load the styles
	var content = __webpack_require__(557);
	if(typeof content === 'string') content = [[module.id, content, '']];
	// add the styles to the DOM
	var update = __webpack_require__(484)(content, {});
	if(content.locals) module.exports = content.locals;
	// Hot Module Replacement
	if(false) {
		// When the styles change, update the <style> tags
		if(!content.locals) {
			module.hot.accept("!!../../../node_modules/css-loader/index.js!../../../node_modules/sass-loader/index.js?outputStyle=expanded!./Pivot.scss", function() {
				var newContent = require("!!../../../node_modules/css-loader/index.js!../../../node_modules/sass-loader/index.js?outputStyle=expanded!./Pivot.scss");
				if(typeof newContent === 'string') newContent = [[module.id, newContent, '']];
				update(newContent);
			});
		}
		// When the module is disposed, remove the <style> tags
		module.hot.dispose(function() { update(); });
	}

/***/ },

/***/ 557:
/***/ function(module, exports, __webpack_require__) {

	exports = module.exports = __webpack_require__(483)();
	// imports
	
	
	// module
	exports.push([module.id, "::-webkit-scrollbar {\n  width: 13px;\n  margin-top: 10px;\n  border-radius: 15px;\n  margin-right: 3px;\n  background: transparent;\n}\n\n::-webkit-scrollbar-track {\n  border-radius: 15px;\n  margin-top: 7px;\n  background: #EEEFF4;\n  margin-bottom: 7px;\n}\n\n::-webkit-scrollbar-thumb {\n  border-radius: 10px;\n  margin-top: 10px;\n  background: #D2D3D9;\n}\n\n::-webkit-scrollbar-thumb:window-inactive {\n  background: #D2D3D9;\n}\n\n.pivot {\n  font-family: \"Segoe UI WestEuropean\",\"Segoe UI\",-apple-system,BlinkMacSystemFont,Roboto,\"Helvetica Neue\",sans-serif;\n  -webkit-font-smoothing: antialiased;\n  box-sizing: border-box;\n  margin: 0;\n  padding: 0;\n  box-shadow: none;\n  font-size: 14px;\n  font-weight: 400;\n  position: relative;\n  color: #0078d7;\n  white-space: nowrap;\n}\n\n.pivot-link {\n  color: #333333;\n  display: inline-block;\n  font-size: 14px;\n  font-weight: 400;\n  line-height: 40px;\n  margin-right: 8px;\n  padding: 0 8px;\n  text-align: center;\n  position: relative;\n}\n\n.pivot-link:hover {\n  cursor: pointer;\n}\n\n.pivot-link:focus {\n  outline: none;\n}\n\n.pivot-link::before {\n  background-color: transparent;\n  bottom: 0;\n  content: '';\n  height: 2px;\n  left: 8px;\n  position: absolute;\n  right: 8px;\n  transition: background-color 267ms cubic-bezier(0.1, 0.25, 0.75, 0.9);\n}\n\n.pivot-link::after {\n  color: transparent;\n  content: attr(title);\n  display: block;\n  font-weight: bold;\n  height: 1px;\n  overflow: hidden;\n  visibility: hidden;\n}\n\n.pivot-link .pivot-text,\n.pivot-link .pivot-count {\n  display: inline-block;\n}\n\n.pivot-link .pivot-icon {\n  margin-left: 5px;\n}\n\n.pivot-link .pivot-icon::before {\n  position: relative;\n  bottom: -5px;\n  font-size: 24px;\n}\n\n.pivot-link .pivot-count {\n  margin-left: 4px;\n}\n\n.pivot-link.is-selected {\n  font-weight: 600;\n}\n\n.pivot-link.is-selected::before {\n  background-color: #0078d7;\n}\n\n.pivot-link.is-disabled {\n  color: #a6a6a6;\n}\n\n.pivot.pivot-tabs .pivot-link {\n  outline: transparent;\n  position: relative;\n  margin-right: 0px;\n  height: 40px;\n  line-height: 40px;\n  background-color: #f4f4f4;\n  padding: 0 10px;\n  vertical-align: top;\n}\n\n.pivot.pivot-tabs .pivot-link:hover:not(.is-selected), .pivot.pivot-tabs .pivot-link:focus:not(.is-selected) {\n  color: #000000;\n}\n\n.pivot.pivot-tabs .pivot-link:active {\n  color: #ffffff;\n  background-color: #0078d7;\n}\n\n.pivot.pivot-tabs .pivot-link.is-selected {\n  background-color: #0078d7;\n  color: #ffffff;\n  font-weight: 300;\n}\n\n.pivot.pivot-tabs .pivot-link.is-selected::before {\n  background-color: transparent;\n  transition: none;\n}\n", ""]);
	
	// exports


/***/ },

/***/ 558:
/***/ function(module, exports, __webpack_require__) {

	// style-loader: Adds some css to the DOM by adding a <style> tag
	
	// load the styles
	var content = __webpack_require__(559);
	if(typeof content === 'string') content = [[module.id, content, '']];
	// add the styles to the DOM
	var update = __webpack_require__(484)(content, {});
	if(content.locals) module.exports = content.locals;
	// Hot Module Replacement
	if(false) {
		// When the styles change, update the <style> tags
		if(!content.locals) {
			module.hot.accept("!!../../../node_modules/css-loader/index.js!../../../node_modules/sass-loader/index.js?outputStyle=expanded!./DashboardHeader.scss", function() {
				var newContent = require("!!../../../node_modules/css-loader/index.js!../../../node_modules/sass-loader/index.js?outputStyle=expanded!./DashboardHeader.scss");
				if(typeof newContent === 'string') newContent = [[module.id, newContent, '']];
				update(newContent);
			});
		}
		// When the module is disposed, remove the <style> tags
		module.hot.dispose(function() { update(); });
	}

/***/ },

/***/ 559:
/***/ function(module, exports, __webpack_require__) {

	exports = module.exports = __webpack_require__(483)();
	// imports
	
	
	// module
	exports.push([module.id, "::-webkit-scrollbar {\n  width: 13px;\n  margin-top: 10px;\n  border-radius: 15px;\n  margin-right: 3px;\n  background: transparent;\n}\n\n::-webkit-scrollbar-track {\n  border-radius: 15px;\n  margin-top: 7px;\n  background: #EEEFF4;\n  margin-bottom: 7px;\n}\n\n::-webkit-scrollbar-thumb {\n  border-radius: 10px;\n  margin-top: 10px;\n  background: #D2D3D9;\n}\n\n::-webkit-scrollbar-thumb:window-inactive {\n  background: #D2D3D9;\n}\n\n.dashboard-header-container {\n  font-family: \"Segoe UI WestEuropean\",\"Segoe UI\",-apple-system,BlinkMacSystemFont,Roboto,\"Helvetica Neue\",sans-serif;\n  -webkit-font-smoothing: antialiased;\n  display: flex;\n  width: calc(100% - 32px);\n  color: #6b6b6b;\n  padding: 15px;\n  border: 1px solid #eee;\n  overflow: hidden;\n  display: block;\n}\n\n.dashboard-header-container .icon {\n  color: #4b4949;\n}\n\n.dashboard-header-container .dashboard-header-title-container {\n  width: 30%;\n  display: inline-block;\n  font-weight: 400;\n  font-size: 25px;\n  color: #4b4949;\n}\n\n.dashboard-header-container .dashboard-header-title-container .dashboard-header-title {\n  display: inherit;\n  width: auto;\n  position: relative;\n  max-width: 80%;\n  vertical-align: middle;\n  white-space: nowrap;\n  overflow: hidden;\n  text-overflow: ellipsis;\n}\n\n.dashboard-header-container .dashboard-header-title-container .icon.add-farm {\n  display: inherit;\n  width: auto;\n  padding: 0;\n  margin: 5px 10px 0px 10px;\n  vertical-align: middle;\n  top: -3px;\n  position: relative;\n  color: #7DC458;\n  cursor: pointer;\n}\n\n.dashboard-header-container .dashboard-header-title-container .icon.add-farm:hover {\n  opacity: 0.7;\n}\n\n.dashboard-header-container .search {\n  width: 30%;\n  display: inline-block;\n  position: relative;\n  right: 0;\n  float: right;\n  border-radius: 5px;\n}\n\n.dashboard-header-container div:nth-child(4) {\n  display: inline-block;\n  position: relative;\n  vertical-align: middle;\n  float: right;\n  margin-right: 10px;\n  margin-left: 10px;\n}\n\n.dashboard-header-container .pivot-link {\n  color: #6b6b6b;\n}\n\n.dashboard-header-container .pivot-link.is-selected {\n  color: #4b4949;\n}\n\n.dashboard-header-container .pivot-link.is-selected::before {\n  background-color: #A09f9f;\n}\n\n.dashboard-header-container .search {\n  position: relative;\n  top: 3px;\n  border-color: #ddd;\n}\n\n.dashboard-header-container .search .icon {\n  color: #A09f9f;\n}\n\n.dashboard-header-container .search.is-active {\n  border-color: #A09f9f;\n}\n\n.dashboard-header-container .search .search-field {\n  height: 28px;\n  line-height: 28px;\n  padding: 5px 26px 8px 27px;\n}\n\n.dashboard-header-container .search .icon-search, .dashboard-header-container .search .search-clearButton {\n  height: 29px;\n  line-height: 29px;\n}\n", ""]);
	
	// exports


/***/ },

/***/ 560:
/***/ function(module, exports, __webpack_require__) {

	"use strict";
	
	var React = __webpack_require__(299);
	var CompactServer_1 = __webpack_require__(538);
	var Group_1 = __webpack_require__(561);
	var GroupHeader_1 = __webpack_require__(564);
	var List = __webpack_require__(567).List;
	var AutoSizer = __webpack_require__(567).AutoSizer;
	var Collection = __webpack_require__(567).Collection;
	var classNames = __webpack_require__(476);
	var autobind_1 = __webpack_require__(498);
	__webpack_require__(617);
	var GUTTER_SIZE = 3;
	var CELL_WIDTH = 330;
	function sortFarmServers(ob1, ob2) {
	    if (ob1.status > ob2.status) {
	        return 1;
	    } else if (ob1.status < ob2.status) {
	        return -1;
	    }
	    if (ob1.name < ob2.name) {
	        return -1;
	    } else if (ob1.name > ob2.name) {
	        return 1;
	    } else {
	        return 0;
	    }
	}
	function checkFilter(filter, serverName) {
	    return serverName.toLowerCase().trim().indexOf(filter.toLowerCase().trim()) !== -1;
	}
	var CompactDashboard = function (_super) {
	    __extends(CompactDashboard, _super);
	    function CompactDashboard(props) {
	        _super.call(this, props);
	        this.state = { columnYMap: [], collection: undefined, list: undefined };
	    }
	    CompactDashboard.prototype.componentDidUpdate = function (prevProps, prevState) {
	        var _this = this;
	        if (this.props.isVertical === false && prevProps.isVertical === true) {
	            this.setState({ columnYMap: [] });
	        }
	        if (this.props.filter !== prevProps.filter) {
	            if (this.collection) {
	                this.setState({ columnYMap: [] }, function () {
	                    _this.collection.recomputeCellSizesAndPositions();
	                });
	            }
	            if (this.list) {
	                this.list.recomputeRowHeights();
	            }
	        }
	    };
	    CompactDashboard.prototype.render = function () {
	        var _this = this;
	        var _a = this.props,
	            title = _a.title,
	            farms = _a.farms;
	        var classname = classNames((_b = {}, _b[this.props.className] = this.props.className !== undefined, _b));
	        return React.createElement("div", { className: classname }, this.props.isVertical && React.createElement("div", { className: "compact-dashboard-container vertical" }, React.createElement(AutoSizer, null, function (_a) {
	            var width = _a.width,
	                height = _a.height;
	            return React.createElement(Collection, { ref: function (reference) {
	                    _this.collection = reference;
	                }, verticalOverscanSize: 5, cellCount: _this.props.farms.length, cellRenderer: _this._renderRow, cellSizeAndPositionGetter: function (index) {
	                    return this.cellSizeAndPositionGetter(width, index);
	                }.bind(_this), height: height, width: width });
	        })), !this.props.isVertical && React.createElement("div", { className: "compact-dashboard-container " }, React.createElement(AutoSizer, null, function (_a) {
	            var width = _a.width,
	                height = _a.height;
	            return React.createElement(List, { height: height, ref: function (reference) {
	                    _this.list = reference;
	                }, rowCount: farms.length, rowHeight: function (index) {
	                    return this.calculateRowHeight(width, index);
	                }.bind(_this), rowRenderer: _this._renderRow, width: width });
	        })));
	        var _b;
	    };
	    CompactDashboard.prototype.calculateRowHeight = function (width, obj) {
	        var _this = this;
	        var numberPerRow = Math.floor((width - 72) / 251.0);
	        var farmServerCount = this.getRow(obj.index).servers.filter(function (server) {
	            return checkFilter(_this.props.filter, server.name);
	        }).length;
	        var rowCount = Math.floor(farmServerCount / numberPerRow) + (farmServerCount % numberPerRow === 0 ? 0 : 1);
	        var serverHeight = rowCount * 60;
	        var serverRoleDiff = this.getRow(obj.index).servers.some(function (server) {
	            return checkFilter(_this.props.filter, server.name) && server.roles.length > 0;
	        }) ? rowCount * 27 : 0;
	        if (this.getRow(obj.index).isCustom) {
	            serverRoleDiff += 21;
	        }
	        return serverHeight + 140 + serverRoleDiff;
	    };
	    CompactDashboard.prototype.cellSizeAndPositionGetter = function (width, obj) {
	        var _this = this;
	        var columnCount = Math.floor((1800 - 72) / (CELL_WIDTH + GUTTER_SIZE));
	        var columnPosition = obj.index % (columnCount || 1);
	        var height = 120 + this.getRow(obj.index).servers.filter(function (server) {
	            return checkFilter(_this.props.filter, server.name);
	        }).length * 70;
	        var serverRoleDiff = this.getRow(obj.index).servers.filter(function (server) {
	            return checkFilter(_this.props.filter, server.name) && server.roles.length > 0;
	        }).length * 27;
	        if (this.getRow(obj.index).isCustom) {
	            serverRoleDiff += 21;
	        }
	        height += serverRoleDiff;
	        var cellWidth = CELL_WIDTH;
	        var x = columnPosition * (GUTTER_SIZE + cellWidth);
	        var y = this.state.columnYMap[columnPosition] || 0;
	        this.state.columnYMap[columnPosition] = y + height + GUTTER_SIZE;
	        return {
	            height: height,
	            width: cellWidth,
	            x: x,
	            y: y
	        };
	    };
	    CompactDashboard.prototype.getRow = function (index) {
	        var farms = this.props.farms;
	        return farms[index];
	    };
	    CompactDashboard.prototype._renderRow = function (_a) {
	        var _this = this;
	        var index = _a.index,
	            isScrolling = _a.isScrolling,
	            key = _a.key,
	            style = _a.style;
	        var farm = this.getRow(index);
	        var servers = farm.servers.filter(function (server) {
	            return checkFilter(_this.props.filter, server.name);
	        }).sort(sortFarmServers);
	        return React.createElement("div", { style: style, key: index }, React.createElement(Group_1.Group, { serverChildrenCount: servers.length, filter: this.props.filter, className: 'farm-name-inside', id: farm.id, name: farm.name, key: farm.id.configDataBaseName + '-' + farm.id.sqlInstance }, React.createElement(GroupHeader_1.GroupHeader, { version: farm.version, isCustomFarm: farm.isCustom, farmId: farm.id }), servers.map(function (server) {
	            return React.createElement(CompactServer_1.CompactServer, { filter: _this.props.filter, key: server.id.FQDN, roles: server.roles, id: server.id, status: server.status, onRoleEdit: server.onRoleEdit, onClose: server.onClose, name: server.name });
	        })));
	    };
	    __decorate([autobind_1.autobind, __metadata('design:type', Function), __metadata('design:paramtypes', [Object, Object]), __metadata('design:returntype', void 0)], CompactDashboard.prototype, "componentDidUpdate", null);
	    __decorate([autobind_1.autobind, __metadata('design:type', Function), __metadata('design:paramtypes', [Object, Object]), __metadata('design:returntype', Number)], CompactDashboard.prototype, "calculateRowHeight", null);
	    __decorate([autobind_1.autobind, __metadata('design:type', Function), __metadata('design:paramtypes', [Object, Object]), __metadata('design:returntype', void 0)], CompactDashboard.prototype, "cellSizeAndPositionGetter", null);
	    __decorate([autobind_1.autobind, __metadata('design:type', Function), __metadata('design:paramtypes', [Number]), __metadata('design:returntype', Object)], CompactDashboard.prototype, "getRow", null);
	    __decorate([autobind_1.autobind, __metadata('design:type', Function), __metadata('design:paramtypes', [Object]), __metadata('design:returntype', Object)], CompactDashboard.prototype, "_renderRow", null);
	    return CompactDashboard;
	}(React.Component);
	exports.CompactDashboard = CompactDashboard;

/***/ },

/***/ 561:
/***/ function(module, exports, __webpack_require__) {

	"use strict";
	
	var React = __webpack_require__(299);
	var Icon_1 = __webpack_require__(480);
	var classNames = __webpack_require__(476);
	__webpack_require__(562);
	var Group = function (_super) {
	    __extends(Group, _super);
	    function Group(props) {
	        _super.call(this, props);
	    }
	    Group.prototype.render = function () {
	        var _this = this;
	        var id = this.props.id;
	        var hasServersVisible = this.props.serverChildrenCount > 0;
	        var classname = classNames({ 'farm': hasServersVisible }, (_a = {}, _a[this.props.className] = hasServersVisible, _a));
	        return React.createElement("div", { className: classname }, hasServersVisible && React.createElement("span", { className: "farm-name", title: this.props.name }, React.createElement("span", { onClick: function () {
	                _this.props.onClick(_this.props.id);
	            } }, this.props.name), this.props.deleteFunc && React.createElement(Icon_1.Icon, { title: 'Delete', iconName: 'icon-delete', onClick: function () {
	                _this.props.deleteFunc(_this.props.id);
	            } }), this.props.editFunc && React.createElement(Icon_1.Icon, { title: 'Edit', iconName: 'icon-edit', onClick: function () {
	                _this.props.editFunc(_this.props.id);
	            } }), this.props.addFunc && React.createElement(Icon_1.Icon, { title: 'Add', iconName: 'icon-add', onClick: function () {
	                _this.props.addFunc(_this.props.id);
	            } })), hasServersVisible && this.props.children);
	        var _a;
	    };
	    return Group;
	}(React.Component);
	exports.Group = Group;

/***/ },

/***/ 562:
/***/ function(module, exports, __webpack_require__) {

	// style-loader: Adds some css to the DOM by adding a <style> tag
	
	// load the styles
	var content = __webpack_require__(563);
	if(typeof content === 'string') content = [[module.id, content, '']];
	// add the styles to the DOM
	var update = __webpack_require__(484)(content, {});
	if(content.locals) module.exports = content.locals;
	// Hot Module Replacement
	if(false) {
		// When the styles change, update the <style> tags
		if(!content.locals) {
			module.hot.accept("!!../../../node_modules/css-loader/index.js!../../../node_modules/sass-loader/index.js?outputStyle=expanded!./Group.scss", function() {
				var newContent = require("!!../../../node_modules/css-loader/index.js!../../../node_modules/sass-loader/index.js?outputStyle=expanded!./Group.scss");
				if(typeof newContent === 'string') newContent = [[module.id, newContent, '']];
				update(newContent);
			});
		}
		// When the module is disposed, remove the <style> tags
		module.hot.dispose(function() { update(); });
	}

/***/ },

/***/ 563:
/***/ function(module, exports, __webpack_require__) {

	exports = module.exports = __webpack_require__(483)();
	// imports
	
	
	// module
	exports.push([module.id, "::-webkit-scrollbar {\n  width: 13px;\n  margin-top: 10px;\n  border-radius: 15px;\n  margin-right: 3px;\n  background: transparent;\n}\n\n::-webkit-scrollbar-track {\n  border-radius: 15px;\n  margin-top: 7px;\n  background: #EEEFF4;\n  margin-bottom: 7px;\n}\n\n::-webkit-scrollbar-thumb {\n  border-radius: 10px;\n  margin-top: 10px;\n  background: #D2D3D9;\n}\n\n::-webkit-scrollbar-thumb:window-inactive {\n  background: #D2D3D9;\n}\n\n.farm {\n  width: calc(100% - 50px);\n  float: left;\n  padding: 5px;\n  margin: 20px;\n  margin-top: 50px;\n  position: relative;\n  border: 1px solid #e8e9ef;\n  background-color: white;\n  font: 14px;\n}\n\n.farm-name {\n  position: absolute;\n  background: inherit;\n  top: -22px;\n  border-top: 1px solid #e8e9ef;\n  border-left: 1px solid #e8e9ef;\n  border-right: 1px solid #e8e9ef;\n  left: 30px;\n  padding: 5px;\n  padding-top: 0;\n  padding-bottom: 0;\n}\n\n.farm-name-inside .farm-name {\n  position: absolute;\n  background: inherit;\n  font-size: 20px;\n  padding: 5px;\n  padding-top: 10px;\n  width: 270px;\n  padding-bottom: 0;\n  top: -43px;\n  left: -1px;\n  padding-left: 15px;\n  border: 1px solid #e8e9ef;\n  border-bottom: white;\n  color: #4b4949;\n}\n\n.farm-name-inside .farm-name span {\n  display: inline-block;\n  width: calc(100% - 80px);\n  white-space: nowrap;\n  overflow: hidden;\n  cursor: pointer;\n  text-overflow: ellipsis;\n  position: relative;\n}\n\n.farm-name-inside .farm-name span:hover {\n  color: #7DC458;\n}\n\n.farm-name-inside .farm-name .icon {\n  padding: 2px;\n  padding-top: 5px;\n  position: relative;\n  float: right;\n  font-size: 14px;\n  color: #4b4949;\n}\n\n.farm-name-inside .farm-name .icon:hover {\n  cursor: pointer;\n}\n\n.farm-name-inside .farm-name .icon.icon-delete:hover {\n  color: #fb6464;\n}\n\n.farm-name-inside .farm-name .icon.icon-edit:hover {\n  color: #EAC71A;\n}\n\n.farm-name-inside .farm-name .icon.icon-add:hover {\n  color: #7DC458;\n}\n", ""]);
	
	// exports


/***/ },

/***/ 564:
/***/ function(module, exports, __webpack_require__) {

	"use strict";
	
	var React = __webpack_require__(299);
	var Icon_1 = __webpack_require__(480);
	var classNames = __webpack_require__(476);
	__webpack_require__(565);
	var GroupHeader = function (_super) {
	    __extends(GroupHeader, _super);
	    function GroupHeader(props) {
	        _super.call(this, props);
	    }
	    GroupHeader.prototype.render = function () {
	        var _a = this.props,
	            version = _a.version,
	            farmId = _a.farmId,
	            isCustomFarm = _a.isCustomFarm;
	        var classname = classNames('farm-header', [this.props.className]);
	        return React.createElement("div", { className: classname }, React.createElement("div", null, React.createElement(Icon_1.Icon, { iconName: version.icon }), React.createElement("i", { className: "farm-header-info", title: "SharePoint version" }, "SharePoint ", version.version), " "), !isCustomFarm && React.createElement("div", null, React.createElement(Icon_1.Icon, { iconName: farmId.configDataBaseIcon }), React.createElement("i", { className: "farm-header-info" }, farmId.configDataBaseName)));
	    };
	    return GroupHeader;
	}(React.Component);
	exports.GroupHeader = GroupHeader;

/***/ },

/***/ 565:
/***/ function(module, exports, __webpack_require__) {

	// style-loader: Adds some css to the DOM by adding a <style> tag
	
	// load the styles
	var content = __webpack_require__(566);
	if(typeof content === 'string') content = [[module.id, content, '']];
	// add the styles to the DOM
	var update = __webpack_require__(484)(content, {});
	if(content.locals) module.exports = content.locals;
	// Hot Module Replacement
	if(false) {
		// When the styles change, update the <style> tags
		if(!content.locals) {
			module.hot.accept("!!../../../node_modules/css-loader/index.js!../../../node_modules/sass-loader/index.js?outputStyle=expanded!./GroupHeader.scss", function() {
				var newContent = require("!!../../../node_modules/css-loader/index.js!../../../node_modules/sass-loader/index.js?outputStyle=expanded!./GroupHeader.scss");
				if(typeof newContent === 'string') newContent = [[module.id, newContent, '']];
				update(newContent);
			});
		}
		// When the module is disposed, remove the <style> tags
		module.hot.dispose(function() { update(); });
	}

/***/ },

/***/ 566:
/***/ function(module, exports, __webpack_require__) {

	exports = module.exports = __webpack_require__(483)();
	// imports
	
	
	// module
	exports.push([module.id, "::-webkit-scrollbar {\n  width: 13px;\n  margin-top: 10px;\n  border-radius: 15px;\n  margin-right: 3px;\n  background: transparent;\n}\n\n::-webkit-scrollbar-track {\n  border-radius: 15px;\n  margin-top: 7px;\n  background: #EEEFF4;\n  margin-bottom: 7px;\n}\n\n::-webkit-scrollbar-thumb {\n  border-radius: 10px;\n  margin-top: 10px;\n  background: #D2D3D9;\n}\n\n::-webkit-scrollbar-thumb:window-inactive {\n  background: #D2D3D9;\n}\n\n.farm-header {\n  padding: 10px;\n  width: 100%;\n  color: #A09f9f;\n  font-size: 14px;\n}\n\n.farm-header .icon {\n  color: #A09f9f;\n  font-size: 14px;\n  padding-left: 5px;\n}\n", ""]);
	
	// exports


/***/ },

/***/ 567:
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	
	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	
	var _ArrowKeyStepper = __webpack_require__(568);
	
	Object.defineProperty(exports, 'ArrowKeyStepper', {
	  enumerable: true,
	  get: function get() {
	    return _ArrowKeyStepper.ArrowKeyStepper;
	  }
	});
	
	var _AutoSizer = __webpack_require__(570);
	
	Object.defineProperty(exports, 'AutoSizer', {
	  enumerable: true,
	  get: function get() {
	    return _AutoSizer.AutoSizer;
	  }
	});
	
	var _CellMeasurer = __webpack_require__(573);
	
	Object.defineProperty(exports, 'CellMeasurer', {
	  enumerable: true,
	  get: function get() {
	    return _CellMeasurer.CellMeasurer;
	  }
	});
	Object.defineProperty(exports, 'CellMeasurerCache', {
	  enumerable: true,
	  get: function get() {
	    return _CellMeasurer.CellMeasurerCache;
	  }
	});
	
	var _Collection = __webpack_require__(576);
	
	Object.defineProperty(exports, 'Collection', {
	  enumerable: true,
	  get: function get() {
	    return _Collection.Collection;
	  }
	});
	
	var _ColumnSizer = __webpack_require__(586);
	
	Object.defineProperty(exports, 'ColumnSizer', {
	  enumerable: true,
	  get: function get() {
	    return _ColumnSizer.ColumnSizer;
	  }
	});
	
	var _Table = __webpack_require__(588);
	
	Object.defineProperty(exports, 'defaultTableCellDataGetter', {
	  enumerable: true,
	  get: function get() {
	    return _Table.defaultCellDataGetter;
	  }
	});
	Object.defineProperty(exports, 'defaultTableCellRenderer', {
	  enumerable: true,
	  get: function get() {
	    return _Table.defaultCellRenderer;
	  }
	});
	Object.defineProperty(exports, 'defaultTableHeaderRenderer', {
	  enumerable: true,
	  get: function get() {
	    return _Table.defaultHeaderRenderer;
	  }
	});
	Object.defineProperty(exports, 'defaultTableRowRenderer', {
	  enumerable: true,
	  get: function get() {
	    return _Table.defaultRowRenderer;
	  }
	});
	Object.defineProperty(exports, 'Table', {
	  enumerable: true,
	  get: function get() {
	    return _Table.Table;
	  }
	});
	Object.defineProperty(exports, 'Column', {
	  enumerable: true,
	  get: function get() {
	    return _Table.Column;
	  }
	});
	Object.defineProperty(exports, 'SortDirection', {
	  enumerable: true,
	  get: function get() {
	    return _Table.SortDirection;
	  }
	});
	Object.defineProperty(exports, 'SortIndicator', {
	  enumerable: true,
	  get: function get() {
	    return _Table.SortIndicator;
	  }
	});
	
	var _Grid = __webpack_require__(596);
	
	Object.defineProperty(exports, 'defaultCellRangeRenderer', {
	  enumerable: true,
	  get: function get() {
	    return _Grid.defaultCellRangeRenderer;
	  }
	});
	Object.defineProperty(exports, 'Grid', {
	  enumerable: true,
	  get: function get() {
	    return _Grid.Grid;
	  }
	});
	
	var _InfiniteLoader = __webpack_require__(605);
	
	Object.defineProperty(exports, 'InfiniteLoader', {
	  enumerable: true,
	  get: function get() {
	    return _InfiniteLoader.InfiniteLoader;
	  }
	});
	
	var _List = __webpack_require__(607);
	
	Object.defineProperty(exports, 'List', {
	  enumerable: true,
	  get: function get() {
	    return _List.List;
	  }
	});
	
	var _MultiGrid = __webpack_require__(609);
	
	Object.defineProperty(exports, 'MultiGrid', {
	  enumerable: true,
	  get: function get() {
	    return _MultiGrid.MultiGrid;
	  }
	});
	
	var _ScrollSync = __webpack_require__(611);
	
	Object.defineProperty(exports, 'ScrollSync', {
	  enumerable: true,
	  get: function get() {
	    return _ScrollSync.ScrollSync;
	  }
	});
	
	var _WindowScroller = __webpack_require__(613);
	
	Object.defineProperty(exports, 'WindowScroller', {
	  enumerable: true,
	  get: function get() {
	    return _WindowScroller.WindowScroller;
	  }
	});

/***/ },

/***/ 568:
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	
	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	exports.ArrowKeyStepper = exports.default = undefined;
	
	var _ArrowKeyStepper2 = __webpack_require__(569);
	
	var _ArrowKeyStepper3 = _interopRequireDefault(_ArrowKeyStepper2);
	
	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
	
	exports.default = _ArrowKeyStepper3.default;
	exports.ArrowKeyStepper = _ArrowKeyStepper3.default;

/***/ },

/***/ 569:
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	
	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	
	var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();
	
	var _react = __webpack_require__(299);
	
	var _react2 = _interopRequireDefault(_react);
	
	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
	
	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }
	
	function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }
	
	function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }
	
	/**
	 * This HOC decorates a virtualized component and responds to arrow-key events by scrolling one row or column at a time.
	 */
	var ArrowKeyStepper = function (_PureComponent) {
	  _inherits(ArrowKeyStepper, _PureComponent);
	
	  function ArrowKeyStepper(props, context) {
	    _classCallCheck(this, ArrowKeyStepper);
	
	    var _this = _possibleConstructorReturn(this, (ArrowKeyStepper.__proto__ || Object.getPrototypeOf(ArrowKeyStepper)).call(this, props, context));
	
	    _this.state = {
	      scrollToColumn: props.scrollToColumn,
	      scrollToRow: props.scrollToRow
	    };
	
	    _this._columnStartIndex = 0;
	    _this._columnStopIndex = 0;
	    _this._rowStartIndex = 0;
	    _this._rowStopIndex = 0;
	
	    _this._onKeyDown = _this._onKeyDown.bind(_this);
	    _this._onSectionRendered = _this._onSectionRendered.bind(_this);
	    return _this;
	  }
	
	  _createClass(ArrowKeyStepper, [{
	    key: 'componentWillReceiveProps',
	    value: function componentWillReceiveProps(nextProps) {
	      var scrollToColumn = nextProps.scrollToColumn,
	          scrollToRow = nextProps.scrollToRow;
	      var _props = this.props,
	          prevScrollToColumn = _props.scrollToColumn,
	          prevScrollToRow = _props.scrollToRow;
	
	
	      if (prevScrollToColumn !== scrollToColumn && prevScrollToRow !== scrollToRow) {
	        this.setState({
	          scrollToColumn: scrollToColumn,
	          scrollToRow: scrollToRow
	        });
	      } else if (prevScrollToColumn !== scrollToColumn) {
	        this.setState({ scrollToColumn: scrollToColumn });
	      } else if (prevScrollToRow !== scrollToRow) {
	        this.setState({ scrollToRow: scrollToRow });
	      }
	    }
	  }, {
	    key: 'setScrollIndexes',
	    value: function setScrollIndexes(_ref) {
	      var scrollToColumn = _ref.scrollToColumn,
	          scrollToRow = _ref.scrollToRow;
	
	      this.setState({
	        scrollToRow: scrollToRow,
	        scrollToColumn: scrollToColumn
	      });
	    }
	  }, {
	    key: 'render',
	    value: function render() {
	      var _props2 = this.props,
	          className = _props2.className,
	          children = _props2.children;
	      var _state = this.state,
	          scrollToColumn = _state.scrollToColumn,
	          scrollToRow = _state.scrollToRow;
	
	
	      return _react2.default.createElement(
	        'div',
	        {
	          className: className,
	          onKeyDown: this._onKeyDown
	        },
	        children({
	          onSectionRendered: this._onSectionRendered,
	          scrollToColumn: scrollToColumn,
	          scrollToRow: scrollToRow
	        })
	      );
	    }
	  }, {
	    key: '_onKeyDown',
	    value: function _onKeyDown(event) {
	      var _props3 = this.props,
	          columnCount = _props3.columnCount,
	          disabled = _props3.disabled,
	          mode = _props3.mode,
	          rowCount = _props3.rowCount;
	
	
	      if (disabled) {
	        return;
	      }
	
	      var _state2 = this.state,
	          scrollToColumnPrevious = _state2.scrollToColumn,
	          scrollToRowPrevious = _state2.scrollToRow;
	      var _state3 = this.state,
	          scrollToColumn = _state3.scrollToColumn,
	          scrollToRow = _state3.scrollToRow;
	
	      // The above cases all prevent default event event behavior.
	      // This is to keep the grid from scrolling after the snap-to update.
	
	      switch (event.key) {
	        case 'ArrowDown':
	          scrollToRow = mode === 'cells' ? Math.min(scrollToRow + 1, rowCount - 1) : Math.min(this._rowStopIndex + 1, rowCount - 1);
	          break;
	        case 'ArrowLeft':
	          scrollToColumn = mode === 'cells' ? Math.max(scrollToColumn - 1, 0) : Math.max(this._columnStartIndex - 1, 0);
	          break;
	        case 'ArrowRight':
	          scrollToColumn = mode === 'cells' ? Math.min(scrollToColumn + 1, columnCount - 1) : Math.min(this._columnStopIndex + 1, columnCount - 1);
	          break;
	        case 'ArrowUp':
	          scrollToRow = mode === 'cells' ? Math.max(scrollToRow - 1, 0) : Math.max(this._rowStartIndex - 1, 0);
	          break;
	      }
	
	      if (scrollToColumn !== scrollToColumnPrevious || scrollToRow !== scrollToRowPrevious) {
	        event.preventDefault();
	
	        this.setState({ scrollToColumn: scrollToColumn, scrollToRow: scrollToRow });
	      }
	    }
	  }, {
	    key: '_onSectionRendered',
	    value: function _onSectionRendered(_ref2) {
	      var columnStartIndex = _ref2.columnStartIndex,
	          columnStopIndex = _ref2.columnStopIndex,
	          rowStartIndex = _ref2.rowStartIndex,
	          rowStopIndex = _ref2.rowStopIndex;
	
	      this._columnStartIndex = columnStartIndex;
	      this._columnStopIndex = columnStopIndex;
	      this._rowStartIndex = rowStartIndex;
	      this._rowStopIndex = rowStopIndex;
	    }
	  }]);
	
	  return ArrowKeyStepper;
	}(_react.PureComponent);
	
	ArrowKeyStepper.defaultProps = {
	  disabled: false,
	  mode: 'edges',
	  scrollToColumn: 0,
	  scrollToRow: 0
	};
	exports.default = ArrowKeyStepper;
	(undefined) !== "production" ? ArrowKeyStepper.propTypes = {
	  children: _react.PropTypes.func.isRequired,
	  className: _react.PropTypes.string,
	  columnCount: _react.PropTypes.number.isRequired,
	  disabled: _react.PropTypes.bool.isRequired,
	  mode: _react.PropTypes.oneOf(['cells', 'edges']),
	  rowCount: _react.PropTypes.number.isRequired,
	  scrollToColumn: _react.PropTypes.number.isRequired,
	  scrollToRow: _react.PropTypes.number.isRequired
	} : void 0;

/***/ },

/***/ 570:
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	
	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	exports.AutoSizer = exports.default = undefined;
	
	var _AutoSizer2 = __webpack_require__(571);
	
	var _AutoSizer3 = _interopRequireDefault(_AutoSizer2);
	
	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
	
	exports.default = _AutoSizer3.default;
	exports.AutoSizer = _AutoSizer3.default;

/***/ },

/***/ 571:
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	
	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	
	var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();
	
	var _react = __webpack_require__(299);
	
	var _react2 = _interopRequireDefault(_react);
	
	var _detectElementResize = __webpack_require__(572);
	
	var _detectElementResize2 = _interopRequireDefault(_detectElementResize);
	
	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
	
	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }
	
	function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }
	
	function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }
	
	/**
	 * Decorator component that automatically adjusts the width and height of a single child.
	 * Child component should not be declared as a child but should rather be specified by a `ChildComponent` property.
	 * All other properties will be passed through to the child component.
	 */
	var AutoSizer = function (_PureComponent) {
	  _inherits(AutoSizer, _PureComponent);
	
	  function AutoSizer(props) {
	    _classCallCheck(this, AutoSizer);
	
	    var _this = _possibleConstructorReturn(this, (AutoSizer.__proto__ || Object.getPrototypeOf(AutoSizer)).call(this, props));
	
	    _this.state = {
	      height: 0,
	      width: 0
	    };
	
	    _this._onResize = _this._onResize.bind(_this);
	    _this._setRef = _this._setRef.bind(_this);
	    return _this;
	  }
	
	  _createClass(AutoSizer, [{
	    key: 'componentDidMount',
	    value: function componentDidMount() {
	      // Delay access of parentNode until mount.
	      // This handles edge-cases where the component has already been unmounted before its ref has been set,
	      // As well as libraries like react-lite which have a slightly different lifecycle.
	      this._parentNode = this._autoSizer.parentNode;
	
	      // Defer requiring resize handler in order to support server-side rendering.
	      // See issue #41
	      this._detectElementResize = (0, _detectElementResize2.default)();
	      this._detectElementResize.addResizeListener(this._parentNode, this._onResize);
	
	      this._onResize();
	    }
	  }, {
	    key: 'componentWillUnmount',
	    value: function componentWillUnmount() {
	      if (this._detectElementResize) {
	        this._detectElementResize.removeResizeListener(this._parentNode, this._onResize);
	      }
	    }
	  }, {
	    key: 'render',
	    value: function render() {
	      var _props = this.props,
	          children = _props.children,
	          disableHeight = _props.disableHeight,
	          disableWidth = _props.disableWidth;
	      var _state = this.state,
	          height = _state.height,
	          width = _state.width;
	
	      // Outer div should not force width/height since that may prevent containers from shrinking.
	      // Inner component should overflow and use calculated width/height.
	      // See issue #68 for more information.
	
	      var outerStyle = { overflow: 'visible' };
	
	      if (!disableHeight) {
	        outerStyle.height = 0;
	      }
	
	      if (!disableWidth) {
	        outerStyle.width = 0;
	      }
	
	      return _react2.default.createElement(
	        'div',
	        {
	          ref: this._setRef,
	          style: outerStyle
	        },
	        children({ height: height, width: width })
	      );
	    }
	  }, {
	    key: '_onResize',
	    value: function _onResize() {
	      var onResize = this.props.onResize;
	
	      // Guard against AutoSizer component being removed from the DOM immediately after being added.
	      // This can result in invalid style values which can result in NaN values if we don't handle them.
	      // See issue #150 for more context.
	
	      var boundingRect = this._parentNode.getBoundingClientRect();
	      var height = boundingRect.height || 0;
	      var width = boundingRect.width || 0;
	
	      var style = window.getComputedStyle(this._parentNode) || {};
	      var paddingLeft = parseInt(style.paddingLeft, 10) || 0;
	      var paddingRight = parseInt(style.paddingRight, 10) || 0;
	      var paddingTop = parseInt(style.paddingTop, 10) || 0;
	      var paddingBottom = parseInt(style.paddingBottom, 10) || 0;
	
	      this.setState({
	        height: height - paddingTop - paddingBottom,
	        width: width - paddingLeft - paddingRight
	      });
	
	      onResize({ height: height, width: width });
	    }
	  }, {
	    key: '_setRef',
	    value: function _setRef(autoSizer) {
	      this._autoSizer = autoSizer;
	    }
	  }]);
	
	  return AutoSizer;
	}(_react.PureComponent);
	
	AutoSizer.defaultProps = {
	  onResize: function onResize() {}
	};
	exports.default = AutoSizer;
	(undefined) !== "production" ? AutoSizer.propTypes = {
	  /**
	  * Function responsible for rendering children.
	  * This function should implement the following signature:
	  * ({ height, width }) => PropTypes.element
	  */
	  children: _react.PropTypes.func.isRequired,
	
	  /** Disable dynamic :height property */
	  disableHeight: _react.PropTypes.bool,
	
	  /** Disable dynamic :width property */
	  disableWidth: _react.PropTypes.bool,
	
	  /** Callback to be invoked on-resize: ({ height, width }) */
	  onResize: _react.PropTypes.func.isRequired
	} : void 0;

/***/ },

/***/ 572:
/***/ function(module, exports) {

	'use strict';
	
	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	exports.default = createDetectElementResize;
	/**
	 * Detect Element Resize.
	 * https://github.com/sdecima/javascript-detect-element-resize
	 * Sebastian Decima
	 *
	 * Forked from version 0.5.3; includes the following modifications:
	 * 1) Guard against unsafe 'window' and 'document' references (to support SSR).
	 * 2) Defer initialization code via a top-level function wrapper (to support SSR).
	 * 3) Avoid unnecessary reflows by not measuring size for scroll events bubbling from children.
	 **/
	
	function createDetectElementResize() {
	  // Check `document` and `window` in case of server-side rendering
	  var _window;
	  if (typeof window !== 'undefined') {
	    _window = window;
	  } else if (typeof self !== 'undefined') {
	    _window = self;
	  } else {
	    _window = this;
	  }
	
	  var attachEvent = typeof document !== 'undefined' && document.attachEvent;
	
	  if (!attachEvent) {
	    var requestFrame = function () {
	      var raf = _window.requestAnimationFrame || _window.mozRequestAnimationFrame || _window.webkitRequestAnimationFrame || function (fn) {
	        return _window.setTimeout(fn, 20);
	      };
	      return function (fn) {
	        return raf(fn);
	      };
	    }();
	
	    var cancelFrame = function () {
	      var cancel = _window.cancelAnimationFrame || _window.mozCancelAnimationFrame || _window.webkitCancelAnimationFrame || _window.clearTimeout;
	      return function (id) {
	        return cancel(id);
	      };
	    }();
	
	    var resetTriggers = function resetTriggers(element) {
	      var triggers = element.__resizeTriggers__,
	          expand = triggers.firstElementChild,
	          contract = triggers.lastElementChild,
	          expandChild = expand.firstElementChild;
	      contract.scrollLeft = contract.scrollWidth;
	      contract.scrollTop = contract.scrollHeight;
	      expandChild.style.width = expand.offsetWidth + 1 + 'px';
	      expandChild.style.height = expand.offsetHeight + 1 + 'px';
	      expand.scrollLeft = expand.scrollWidth;
	      expand.scrollTop = expand.scrollHeight;
	    };
	
	    var checkTriggers = function checkTriggers(element) {
	      return element.offsetWidth != element.__resizeLast__.width || element.offsetHeight != element.__resizeLast__.height;
	    };
	
	    var scrollListener = function scrollListener(e) {
	      // Don't measure (which forces) reflow for scrolls that happen inside of children!
	      if (e.target.className.indexOf('contract-trigger') < 0 && e.target.className.indexOf('expand-trigger') < 0) {
	        return;
	      }
	
	      var element = this;
	      resetTriggers(this);
	      if (this.__resizeRAF__) cancelFrame(this.__resizeRAF__);
	      this.__resizeRAF__ = requestFrame(function () {
	        if (checkTriggers(element)) {
	          element.__resizeLast__.width = element.offsetWidth;
	          element.__resizeLast__.height = element.offsetHeight;
	          element.__resizeListeners__.forEach(function (fn) {
	            fn.call(element, e);
	          });
	        }
	      });
	    };
	
	    /* Detect CSS Animations support to detect element display/re-attach */
	    var animation = false,
	        animationstring = 'animation',
	        keyframeprefix = '',
	        animationstartevent = 'animationstart',
	        domPrefixes = 'Webkit Moz O ms'.split(' '),
	        startEvents = 'webkitAnimationStart animationstart oAnimationStart MSAnimationStart'.split(' '),
	        pfx = '';
	    {
	      var elm = document.createElement('fakeelement');
	      if (elm.style.animationName !== undefined) {
	        animation = true;
	      }
	
	      if (animation === false) {
	        for (var i = 0; i < domPrefixes.length; i++) {
	          if (elm.style[domPrefixes[i] + 'AnimationName'] !== undefined) {
	            pfx = domPrefixes[i];
	            animationstring = pfx + 'Animation';
	            keyframeprefix = '-' + pfx.toLowerCase() + '-';
	            animationstartevent = startEvents[i];
	            animation = true;
	            break;
	          }
	        }
	      }
	    }
	
	    var animationName = 'resizeanim';
	    var animationKeyframes = '@' + keyframeprefix + 'keyframes ' + animationName + ' { from { opacity: 0; } to { opacity: 0; } } ';
	    var animationStyle = keyframeprefix + 'animation: 1ms ' + animationName + '; ';
	  }
	
	  var createStyles = function createStyles() {
	    if (!document.getElementById('detectElementResize')) {
	      //opacity:0 works around a chrome bug https://code.google.com/p/chromium/issues/detail?id=286360
	      var css = (animationKeyframes ? animationKeyframes : '') + '.resize-triggers { ' + (animationStyle ? animationStyle : '') + 'visibility: hidden; opacity: 0; } ' + '.resize-triggers, .resize-triggers > div, .contract-trigger:before { content: \" \"; display: block; position: absolute; top: 0; left: 0; height: 100%; width: 100%; overflow: hidden; z-index: -1; } .resize-triggers > div { background: #eee; overflow: auto; } .contract-trigger:before { width: 200%; height: 200%; }',
	          head = document.head || document.getElementsByTagName('head')[0],
	          style = document.createElement('style');
	
	      style.id = 'detectElementResize';
	      style.type = 'text/css';
	      if (style.styleSheet) {
	        style.styleSheet.cssText = css;
	      } else {
	        style.appendChild(document.createTextNode(css));
	      }
	
	      head.appendChild(style);
	    }
	  };
	
	  var addResizeListener = function addResizeListener(element, fn) {
	    if (attachEvent) element.attachEvent('onresize', fn);else {
	      if (!element.__resizeTriggers__) {
	        var elementStyle = _window.getComputedStyle(element);
	        if (elementStyle && elementStyle.position == 'static') {
	          element.style.position = 'relative';
	        }
	        createStyles();
	        element.__resizeLast__ = {};
	        element.__resizeListeners__ = [];
	        (element.__resizeTriggers__ = document.createElement('div')).className = 'resize-triggers';
	        element.__resizeTriggers__.innerHTML = '<div class="expand-trigger"><div></div></div>' + '<div class="contract-trigger"></div>';
	        element.appendChild(element.__resizeTriggers__);
	        resetTriggers(element);
	        element.addEventListener('scroll', scrollListener, true);
	
	        /* Listen for a css animation to detect element display/re-attach */
	        if (animationstartevent) {
	          element.__resizeTriggers__.__animationListener__ = function animationListener(e) {
	            if (e.animationName == animationName) resetTriggers(element);
	          };
	          element.__resizeTriggers__.addEventListener(animationstartevent, element.__resizeTriggers__.__animationListener__);
	        }
	      }
	      element.__resizeListeners__.push(fn);
	    }
	  };
	
	  var removeResizeListener = function removeResizeListener(element, fn) {
	    if (attachEvent) element.detachEvent('onresize', fn);else {
	      element.__resizeListeners__.splice(element.__resizeListeners__.indexOf(fn), 1);
	      if (!element.__resizeListeners__.length) {
	        element.removeEventListener('scroll', scrollListener, true);
	        if (element.__resizeTriggers__.__animationListener__) {
	          element.__resizeTriggers__.removeEventListener(animationstartevent, element.__resizeTriggers__.__animationListener__);
	          element.__resizeTriggers__.__animationListener__ = null;
	        }
	        try {
	          element.__resizeTriggers__ = !element.removeChild(element.__resizeTriggers__);
	        } catch (e) {
	          // Preact compat; see developit/preact-compat/issues/228
	        }
	      }
	    }
	  };
	
	  return {
	    addResizeListener: addResizeListener,
	    removeResizeListener: removeResizeListener
	  };
	}

/***/ },

/***/ 573:
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	
	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	exports.CellMeasurerCache = exports.CellMeasurer = exports.default = undefined;
	
	var _CellMeasurer2 = __webpack_require__(574);
	
	var _CellMeasurer3 = _interopRequireDefault(_CellMeasurer2);
	
	var _CellMeasurerCache2 = __webpack_require__(575);
	
	var _CellMeasurerCache3 = _interopRequireDefault(_CellMeasurerCache2);
	
	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
	
	exports.default = _CellMeasurer3.default;
	exports.CellMeasurer = _CellMeasurer3.default;
	exports.CellMeasurerCache = _CellMeasurerCache3.default;

/***/ },

/***/ 574:
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	
	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	
	var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();
	
	var _react = __webpack_require__(299);
	
	var _reactDom = __webpack_require__(329);
	
	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }
	
	function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }
	
	function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }
	
	function warnAboutImproperUse(parent) {
	  if ((undefined) !== 'production') {
	    if (parent && parent.props.deferredMeasurementCache === undefined && parent.__warnedAboutImproperUse !== true) {
	      parent.__warnedAboutImproperUse = true;
	      console.warn('CellMeasurer should be rendered within a Grid that has a deferredMeasurementCache prop.');
	    }
	  }
	}
	
	// Prevent Grid from warning about missing :style prop on CellMeasurer.
	// It's understood that style will often be passed to the child instead.
	var EMPTY_OBJECT = {};
	
	/**
	 * Wraps a cell and measures its rendered content.
	 * Measurements are stored in a per-cell cache.
	 * Cached-content is not be re-measured.
	 */
	
	var CellMeasurer = function (_PureComponent) {
	  _inherits(CellMeasurer, _PureComponent);
	
	  function CellMeasurer(props, context) {
	    _classCallCheck(this, CellMeasurer);
	
	    var _this = _possibleConstructorReturn(this, (CellMeasurer.__proto__ || Object.getPrototypeOf(CellMeasurer)).call(this, props, context));
	
	    _this._measure = _this._measure.bind(_this);
	    return _this;
	  }
	
	  _createClass(CellMeasurer, [{
	    key: 'componentDidMount',
	    value: function componentDidMount() {
	      this._maybeMeasureCell();
	    }
	  }, {
	    key: 'componentDidUpdate',
	    value: function componentDidUpdate(prevProps, prevState) {
	      this._maybeMeasureCell();
	    }
	  }, {
	    key: 'render',
	    value: function render() {
	      var children = this.props.children;
	
	
	      if ((undefined) !== 'production') {
	        var _parent = this.props.parent;
	
	
	        warnAboutImproperUse(_parent);
	      }
	
	      return typeof children === 'function' ? children({ measure: this._measure }) : children;
	    }
	  }, {
	    key: '_maybeMeasureCell',
	    value: function _maybeMeasureCell() {
	      var _props = this.props,
	          cache = _props.cache,
	          columnIndex = _props.columnIndex,
	          parent = _props.parent,
	          rowIndex = _props.rowIndex;
	
	
	      if (!cache.has(rowIndex, columnIndex)) {
	        var node = (0, _reactDom.findDOMNode)(this);
	        var height = node.offsetHeight;
	        var width = node.offsetWidth;
	
	        cache.set(rowIndex, columnIndex, width, height);
	
	        // If size has changed, let Grid know to re-render.
	        if (parent !== undefined) {
	          parent.invalidateCellSizeAfterRender({
	            columnIndex: columnIndex,
	            rowIndex: rowIndex
	          });
	        }
	      }
	    }
	  }, {
	    key: '_measure',
	    value: function _measure() {
	      var _props2 = this.props,
	          cache = _props2.cache,
	          columnIndex = _props2.columnIndex,
	          parent = _props2.parent,
	          rowIndex = _props2.rowIndex;
	
	
	      var node = (0, _reactDom.findDOMNode)(this);
	
	      // If we are re-measuring a cell that has already been measured,
	      // It will have a hard-coded width/height from the previous measurement.
	      // The fact that we are measuring indicates this measurement is probably stale,
	      // So explicitly clear it out (eg set to "auto") so we can recalculate.
	      // See issue #593 for more info.
	      if (!cache.hasFixedWidth()) {
	        node.style.width = 'auto';
	      }
	      if (!cache.hasFixedHeight()) {
	        node.style.height = 'auto';
	      }
	
	      var height = node.offsetHeight;
	      var width = node.offsetWidth;
	
	      if (height !== cache.getHeight(rowIndex, columnIndex) || width !== cache.getWidth(rowIndex, columnIndex)) {
	        cache.set(rowIndex, columnIndex, width, height);
	
	        parent.recomputeGridSize({
	          columnIndex: columnIndex,
	          rowIndex: rowIndex
	        });
	      }
	    }
	  }]);
	
	  return CellMeasurer;
	}(_react.PureComponent);
	
	CellMeasurer.defaultProps = {
	  style: EMPTY_OBJECT
	};
	exports.default = CellMeasurer;

/***/ },

/***/ 575:
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	
	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	
	var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();
	
	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }
	
	var DEFAULT_HEIGHT = exports.DEFAULT_HEIGHT = 30;
	var DEFAULT_WIDTH = exports.DEFAULT_WIDTH = 100;
	
	// Enables more intelligent mapping of a given column and row index to an item ID.
	// This prevents a cell cache from being invalidated when its parent collection is modified.
	
	/**
	 * Caches measurements for a given cell.
	 */
	var CellMeasurerCache = function () {
	  function CellMeasurerCache() {
	    var _this = this;
	
	    var params = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {};
	
	    _classCallCheck(this, CellMeasurerCache);
	
	    this.columnWidth = function (_ref) {
	      var index = _ref.index;
	
	      return _this._columnWidthCache.hasOwnProperty(index) ? _this._columnWidthCache[index] : _this._defaultWidth;
	    };
	
	    this.rowHeight = function (_ref2) {
	      var index = _ref2.index;
	
	      return _this._rowHeightCache.hasOwnProperty(index) ? _this._rowHeightCache[index] : _this._defaultHeight;
	    };
	
	    var defaultHeight = params.defaultHeight,
	        defaultWidth = params.defaultWidth,
	        fixedHeight = params.fixedHeight,
	        fixedWidth = params.fixedWidth,
	        keyMapper = params.keyMapper,
	        minHeight = params.minHeight,
	        minWidth = params.minWidth;
	
	
	    this._hasFixedHeight = fixedHeight === true;
	    this._hasFixedWidth = fixedWidth === true;
	    this._minHeight = minHeight || 0;
	    this._minWidth = minWidth || 0;
	    this._keyMapper = keyMapper || defaultKeyMapper;
	
	    this._defaultHeight = Math.max(this._minHeight, typeof defaultHeight === 'number' ? defaultHeight : DEFAULT_HEIGHT);
	    this._defaultWidth = Math.max(this._minWidth, typeof defaultWidth === 'number' ? defaultWidth : DEFAULT_WIDTH);
	
	    if ((undefined) !== 'production') {
	      if (this._hasFixedHeight === false && this._hasFixedWidth === false) {
	        console.warn('CellMeasurerCache should only measure a cell\'s width or height. ' + 'You have configured CellMeasurerCache to measure both. ' + 'This will result in poor performance.');
	      }
	
	      if (this._hasFixedHeight === false && this._defaultHeight === 0) {
	        console.warn('Fixed height CellMeasurerCache should specify a :defaultHeight greater than 0. ' + 'Failing to do so will lead to unnecessary layout and poor performance.');
	      }
	
	      if (this._hasFixedWidth === false && this._defaultWidth === 0) {
	        console.warn('Fixed width CellMeasurerCache should specify a :defaultWidth greater than 0. ' + 'Failing to do so will lead to unnecessary layout and poor performance.');
	      }
	    }
	
	    this._columnCount = 0;
	    this._rowCount = 0;
	
	    this._cellHeightCache = {};
	    this._cellWidthCache = {};
	    this._columnWidthCache = {};
	    this._rowHeightCache = {};
	  }
	
	  _createClass(CellMeasurerCache, [{
	    key: 'clear',
	    value: function clear(rowIndex, columnIndex) {
	      var key = this._keyMapper(rowIndex, columnIndex);
	
	      delete this._cellHeightCache[key];
	      delete this._cellWidthCache[key];
	
	      this._updateCachedColumnAndRowSizes(rowIndex, columnIndex);
	    }
	  }, {
	    key: 'clearAll',
	    value: function clearAll() {
	      this._cellHeightCache = {};
	      this._cellWidthCache = {};
	      this._columnWidthCache = {};
	      this._rowHeightCache = {};
	    }
	  }, {
	    key: 'hasFixedHeight',
	    value: function hasFixedHeight() {
	      return this._hasFixedHeight;
	    }
	  }, {
	    key: 'hasFixedWidth',
	    value: function hasFixedWidth() {
	      return this._hasFixedWidth;
	    }
	  }, {
	    key: 'getHeight',
	    value: function getHeight(rowIndex, columnIndex) {
	      var key = this._keyMapper(rowIndex, columnIndex);
	
	      return this._cellHeightCache.hasOwnProperty(key) ? Math.max(this._minHeight, this._cellHeightCache[key]) : this._defaultHeight;
	    }
	  }, {
	    key: 'getWidth',
	    value: function getWidth(rowIndex, columnIndex) {
	      var key = this._keyMapper(rowIndex, columnIndex);
	
	      return this._cellWidthCache.hasOwnProperty(key) ? Math.max(this._minWidth, this._cellWidthCache[key]) : this._defaultWidth;
	    }
	  }, {
	    key: 'has',
	    value: function has(rowIndex, columnIndex) {
	      var key = this._keyMapper(rowIndex, columnIndex);
	
	      return this._cellHeightCache.hasOwnProperty(key);
	    }
	  }, {
	    key: 'set',
	    value: function set(rowIndex, columnIndex, width, height) {
	      var key = this._keyMapper(rowIndex, columnIndex);
	
	      if (columnIndex >= this._columnCount) {
	        this._columnCount = columnIndex + 1;
	      }
	      if (rowIndex >= this._rowCount) {
	        this._rowCount = rowIndex + 1;
	      }
	
	      // Size is cached per cell so we don't have to re-measure if cells are re-ordered.
	      this._cellHeightCache[key] = height;
	      this._cellWidthCache[key] = width;
	
	      this._updateCachedColumnAndRowSizes(rowIndex, columnIndex);
	    }
	  }, {
	    key: '_updateCachedColumnAndRowSizes',
	    value: function _updateCachedColumnAndRowSizes(rowIndex, columnIndex) {
	      // :columnWidth and :rowHeight are derived based on all cells in a column/row.
	      // Pre-cache these derived values for faster lookup later.
	      // Reads are expected to occur more frequently than writes in this case.
	      var columnWidth = 0;
	      for (var i = 0; i < this._rowCount; i++) {
	        columnWidth = Math.max(columnWidth, this.getWidth(i, columnIndex));
	      }
	      var rowHeight = 0;
	      for (var _i = 0; _i < this._columnCount; _i++) {
	        rowHeight = Math.max(rowHeight, this.getHeight(rowIndex, _i));
	      }
	      this._columnWidthCache[columnIndex] = columnWidth;
	      this._rowHeightCache[rowIndex] = rowHeight;
	    }
	  }]);
	
	  return CellMeasurerCache;
	}();
	
	exports.default = CellMeasurerCache;
	
	
	function defaultKeyMapper(rowIndex, columnIndex) {
	  return rowIndex + '-' + columnIndex;
	}

/***/ },

/***/ 576:
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	
	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	exports.Collection = exports.default = undefined;
	
	var _Collection2 = __webpack_require__(577);
	
	var _Collection3 = _interopRequireDefault(_Collection2);
	
	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
	
	exports.default = _Collection3.default;
	exports.Collection = _Collection3.default;

/***/ },

/***/ 577:
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	
	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	
	var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };
	
	var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();
	
	var _react = __webpack_require__(299);
	
	var _react2 = _interopRequireDefault(_react);
	
	var _CollectionView = __webpack_require__(578);
	
	var _CollectionView2 = _interopRequireDefault(_CollectionView);
	
	var _calculateSizeAndPositionData2 = __webpack_require__(582);
	
	var _calculateSizeAndPositionData3 = _interopRequireDefault(_calculateSizeAndPositionData2);
	
	var _getUpdatedOffsetForIndex = __webpack_require__(585);
	
	var _getUpdatedOffsetForIndex2 = _interopRequireDefault(_getUpdatedOffsetForIndex);
	
	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
	
	function _objectWithoutProperties(obj, keys) { var target = {}; for (var i in obj) { if (keys.indexOf(i) >= 0) continue; if (!Object.prototype.hasOwnProperty.call(obj, i)) continue; target[i] = obj[i]; } return target; }
	
	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }
	
	function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }
	
	function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }
	
	/**
	 * Renders scattered or non-linear data.
	 * Unlike Grid, which renders checkerboard data, Collection can render arbitrarily positioned- even overlapping- data.
	 */
	var Collection = function (_PureComponent) {
	  _inherits(Collection, _PureComponent);
	
	  function Collection(props, context) {
	    _classCallCheck(this, Collection);
	
	    var _this = _possibleConstructorReturn(this, (Collection.__proto__ || Object.getPrototypeOf(Collection)).call(this, props, context));
	
	    _this._cellMetadata = [];
	    _this._lastRenderedCellIndices = [];
	
	    // Cell cache during scroll (for perforamnce)
	    _this._cellCache = [];
	
	    _this._isScrollingChange = _this._isScrollingChange.bind(_this);
	    _this._setCollectionViewRef = _this._setCollectionViewRef.bind(_this);
	    return _this;
	  }
	
	  _createClass(Collection, [{
	    key: 'forceUpdate',
	    value: function forceUpdate() {
	      if (this._collectionView !== undefined) {
	        this._collectionView.forceUpdate();
	      }
	    }
	
	    /** See Collection#recomputeCellSizesAndPositions */
	
	  }, {
	    key: 'recomputeCellSizesAndPositions',
	    value: function recomputeCellSizesAndPositions() {
	      this._cellCache = [];
	      this._collectionView.recomputeCellSizesAndPositions();
	    }
	
	    /** React lifecycle methods */
	
	  }, {
	    key: 'render',
	    value: function render() {
	      var props = _objectWithoutProperties(this.props, []);
	
	      return _react2.default.createElement(_CollectionView2.default, _extends({
	        cellLayoutManager: this,
	        isScrollingChange: this._isScrollingChange,
	        ref: this._setCollectionViewRef
	      }, props));
	    }
	
	    /** CellLayoutManager interface */
	
	  }, {
	    key: 'calculateSizeAndPositionData',
	    value: function calculateSizeAndPositionData() {
	      var _props = this.props,
	          cellCount = _props.cellCount,
	          cellSizeAndPositionGetter = _props.cellSizeAndPositionGetter,
	          sectionSize = _props.sectionSize;
	
	
	      var data = (0, _calculateSizeAndPositionData3.default)({
	        cellCount: cellCount,
	        cellSizeAndPositionGetter: cellSizeAndPositionGetter,
	        sectionSize: sectionSize
	      });
	
	      this._cellMetadata = data.cellMetadata;
	      this._sectionManager = data.sectionManager;
	      this._height = data.height;
	      this._width = data.width;
	    }
	
	    /**
	     * Returns the most recently rendered set of cell indices.
	     */
	
	  }, {
	    key: 'getLastRenderedIndices',
	    value: function getLastRenderedIndices() {
	      return this._lastRenderedCellIndices;
	    }
	
	    /**
	     * Calculates the minimum amount of change from the current scroll position to ensure the specified cell is (fully) visible.
	     */
	
	  }, {
	    key: 'getScrollPositionForCell',
	    value: function getScrollPositionForCell(_ref) {
	      var align = _ref.align,
	          cellIndex = _ref.cellIndex,
	          height = _ref.height,
	          scrollLeft = _ref.scrollLeft,
	          scrollTop = _ref.scrollTop,
	          width = _ref.width;
	      var cellCount = this.props.cellCount;
	
	
	      if (cellIndex >= 0 && cellIndex < cellCount) {
	        var cellMetadata = this._cellMetadata[cellIndex];
	
	        scrollLeft = (0, _getUpdatedOffsetForIndex2.default)({
	          align: align,
	          cellOffset: cellMetadata.x,
	          cellSize: cellMetadata.width,
	          containerSize: width,
	          currentOffset: scrollLeft,
	          targetIndex: cellIndex
	        });
	
	        scrollTop = (0, _getUpdatedOffsetForIndex2.default)({
	          align: align,
	          cellOffset: cellMetadata.y,
	          cellSize: cellMetadata.height,
	          containerSize: height,
	          currentOffset: scrollTop,
	          targetIndex: cellIndex
	        });
	      }
	
	      return {
	        scrollLeft: scrollLeft,
	        scrollTop: scrollTop
	      };
	    }
	  }, {
	    key: 'getTotalSize',
	    value: function getTotalSize() {
	      return {
	        height: this._height,
	        width: this._width
	      };
	    }
	  }, {
	    key: 'cellRenderers',
	    value: function cellRenderers(_ref2) {
	      var _this2 = this;
	
	      var height = _ref2.height,
	          isScrolling = _ref2.isScrolling,
	          width = _ref2.width,
	          x = _ref2.x,
	          y = _ref2.y;
	      var _props2 = this.props,
	          cellGroupRenderer = _props2.cellGroupRenderer,
	          cellRenderer = _props2.cellRenderer;
	
	      // Store for later calls to getLastRenderedIndices()
	
	      this._lastRenderedCellIndices = this._sectionManager.getCellIndices({
	        height: height,
	        width: width,
	        x: x,
	        y: y
	      });
	
	      return cellGroupRenderer({
	        cellCache: this._cellCache,
	        cellRenderer: cellRenderer,
	        cellSizeAndPositionGetter: function cellSizeAndPositionGetter(_ref3) {
	          var index = _ref3.index;
	          return _this2._sectionManager.getCellMetadata({ index: index });
	        },
	        indices: this._lastRenderedCellIndices,
	        isScrolling: isScrolling
	      });
	    }
	  }, {
	    key: '_isScrollingChange',
	    value: function _isScrollingChange(isScrolling) {
	      if (!isScrolling) {
	        this._cellCache = [];
	      }
	    }
	  }, {
	    key: '_setCollectionViewRef',
	    value: function _setCollectionViewRef(ref) {
	      this._collectionView = ref;
	    }
	  }]);
	
	  return Collection;
	}(_react.PureComponent);
	
	Collection.defaultProps = {
	  'aria-label': 'grid',
	  cellGroupRenderer: defaultCellGroupRenderer
	};
	exports.default = Collection;
	(undefined) !== "production" ? Collection.propTypes = {
	  'aria-label': _react.PropTypes.string,
	
	  /**
	   * Number of cells in Collection.
	   */
	  cellCount: _react.PropTypes.number.isRequired,
	
	  /**
	   * Responsible for rendering a group of cells given their indices.
	   * Should implement the following interface: ({
	   *   cellSizeAndPositionGetter:Function,
	   *   indices: Array<number>,
	   *   cellRenderer: Function
	   * }): Array<PropTypes.node>
	   */
	  cellGroupRenderer: _react.PropTypes.func.isRequired,
	
	  /**
	   * Responsible for rendering a cell given an row and column index.
	   * Should implement the following interface: ({ index: number, key: string, style: object }): PropTypes.element
	   */
	  cellRenderer: _react.PropTypes.func.isRequired,
	
	  /**
	   * Callback responsible for returning size and offset/position information for a given cell (index).
	   * ({ index: number }): { height: number, width: number, x: number, y: number }
	   */
	  cellSizeAndPositionGetter: _react.PropTypes.func.isRequired,
	
	  /**
	   * Optionally override the size of the sections a Collection's cells are split into.
	   */
	  sectionSize: _react.PropTypes.number
	} : void 0;
	
	
	function defaultCellGroupRenderer(_ref4) {
	  var cellCache = _ref4.cellCache,
	      cellRenderer = _ref4.cellRenderer,
	      cellSizeAndPositionGetter = _ref4.cellSizeAndPositionGetter,
	      indices = _ref4.indices,
	      isScrolling = _ref4.isScrolling;
	
	  return indices.map(function (index) {
	    var cellMetadata = cellSizeAndPositionGetter({ index: index });
	
	    var cellRendererProps = {
	      index: index,
	      isScrolling: isScrolling,
	      key: index,
	      style: {
	        height: cellMetadata.height,
	        left: cellMetadata.x,
	        position: 'absolute',
	        top: cellMetadata.y,
	        width: cellMetadata.width
	      }
	    };
	
	    // Avoid re-creating cells while scrolling.
	    // This can lead to the same cell being created many times and can cause performance issues for "heavy" cells.
	    // If a scroll is in progress- cache and reuse cells.
	    // This cache will be thrown away once scrolling complets.
	    if (isScrolling) {
	      if (!(index in cellCache)) {
	        cellCache[index] = cellRenderer(cellRendererProps);
	      }
	
	      return cellCache[index];
	    } else {
	      return cellRenderer(cellRendererProps);
	    }
	  }).filter(function (renderedCell) {
	    return !!renderedCell;
	  });
	}

/***/ },

/***/ 578:
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	
	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	
	var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };
	
	var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();
	
	var _react = __webpack_require__(299);
	
	var _react2 = _interopRequireDefault(_react);
	
	var _classnames = __webpack_require__(476);
	
	var _classnames2 = _interopRequireDefault(_classnames);
	
	var _createCallbackMemoizer = __webpack_require__(579);
	
	var _createCallbackMemoizer2 = _interopRequireDefault(_createCallbackMemoizer);
	
	var _scrollbarSize = __webpack_require__(580);
	
	var _scrollbarSize2 = _interopRequireDefault(_scrollbarSize);
	
	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
	
	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }
	
	function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }
	
	function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }
	
	// @TODO Merge Collection and CollectionView
	
	/**
	 * Specifies the number of miliseconds during which to disable pointer events while a scroll is in progress.
	 * This improves performance and makes scrolling smoother.
	 */
	var IS_SCROLLING_TIMEOUT = 150;
	
	/**
	 * Controls whether the Grid updates the DOM element's scrollLeft/scrollTop based on the current state or just observes it.
	 * This prevents Grid from interrupting mouse-wheel animations (see issue #2).
	 */
	var SCROLL_POSITION_CHANGE_REASONS = {
	  OBSERVED: 'observed',
	  REQUESTED: 'requested'
	};
	
	/**
	 * Monitors changes in properties (eg. cellCount) and state (eg. scroll offsets) to determine when rendering needs to occur.
	 * This component does not render any visible content itself; it defers to the specified :cellLayoutManager.
	 */
	
	var CollectionView = function (_PureComponent) {
	  _inherits(CollectionView, _PureComponent);
	
	  function CollectionView(props, context) {
	    _classCallCheck(this, CollectionView);
	
	    var _this = _possibleConstructorReturn(this, (CollectionView.__proto__ || Object.getPrototypeOf(CollectionView)).call(this, props, context));
	
	    _this.state = {
	      isScrolling: false,
	      scrollLeft: 0,
	      scrollTop: 0
	    };
	
	    _this._calculateSizeAndPositionDataOnNextUpdate = false;
	
	    // Invokes callbacks only when their values have changed.
	    _this._onSectionRenderedMemoizer = (0, _createCallbackMemoizer2.default)();
	    _this._onScrollMemoizer = (0, _createCallbackMemoizer2.default)(false);
	
	    // Bind functions to instance so they don't lose context when passed around.
	    _this._invokeOnSectionRenderedHelper = _this._invokeOnSectionRenderedHelper.bind(_this);
	    _this._onScroll = _this._onScroll.bind(_this);
	    _this._setScrollingContainerRef = _this._setScrollingContainerRef.bind(_this);
	    _this._updateScrollPositionForScrollToCell = _this._updateScrollPositionForScrollToCell.bind(_this);
	    return _this;
	  }
	
	  /**
	   * Forced recompute of cell sizes and positions.
	   * This function should be called if cell sizes have changed but nothing else has.
	   * Since cell positions are calculated by callbacks, the collection view has no way of detecting when the underlying data has changed.
	   */
	
	
	  _createClass(CollectionView, [{
	    key: 'recomputeCellSizesAndPositions',
	    value: function recomputeCellSizesAndPositions() {
	      this._calculateSizeAndPositionDataOnNextUpdate = true;
	      this.forceUpdate();
	    }
	
	    /* ---------------------------- Component lifecycle methods ---------------------------- */
	
	  }, {
	    key: 'componentDidMount',
	    value: function componentDidMount() {
	      var _props = this.props,
	          cellLayoutManager = _props.cellLayoutManager,
	          scrollLeft = _props.scrollLeft,
	          scrollToCell = _props.scrollToCell,
	          scrollTop = _props.scrollTop;
	
	      // If this component was first rendered server-side, scrollbar size will be undefined.
	      // In that event we need to remeasure.
	
	      if (!this._scrollbarSizeMeasured) {
	        this._scrollbarSize = (0, _scrollbarSize2.default)();
	        this._scrollbarSizeMeasured = true;
	        this.setState({});
	      }
	
	      if (scrollToCell >= 0) {
	        this._updateScrollPositionForScrollToCell();
	      } else if (scrollLeft >= 0 || scrollTop >= 0) {
	        this._setScrollPosition({ scrollLeft: scrollLeft, scrollTop: scrollTop });
	      }
	
	      // Update onSectionRendered callback.
	      this._invokeOnSectionRenderedHelper();
	
	      var _cellLayoutManager$ge = cellLayoutManager.getTotalSize(),
	          totalHeight = _cellLayoutManager$ge.height,
	          totalWidth = _cellLayoutManager$ge.width;
	
	      // Initialize onScroll callback.
	
	
	      this._invokeOnScrollMemoizer({
	        scrollLeft: scrollLeft || 0,
	        scrollTop: scrollTop || 0,
	        totalHeight: totalHeight,
	        totalWidth: totalWidth
	      });
	    }
	  }, {
	    key: 'componentDidUpdate',
	    value: function componentDidUpdate(prevProps, prevState) {
	      var _props2 = this.props,
	          height = _props2.height,
	          scrollToAlignment = _props2.scrollToAlignment,
	          scrollToCell = _props2.scrollToCell,
	          width = _props2.width;
	      var _state = this.state,
	          scrollLeft = _state.scrollLeft,
	          scrollPositionChangeReason = _state.scrollPositionChangeReason,
	          scrollTop = _state.scrollTop;
	
	      // Make sure requested changes to :scrollLeft or :scrollTop get applied.
	      // Assigning to scrollLeft/scrollTop tells the browser to interrupt any running scroll animations,
	      // And to discard any pending async changes to the scroll position that may have happened in the meantime (e.g. on a separate scrolling thread).
	      // So we only set these when we require an adjustment of the scroll position.
	      // See issue #2 for more information.
	
	      if (scrollPositionChangeReason === SCROLL_POSITION_CHANGE_REASONS.REQUESTED) {
	        if (scrollLeft >= 0 && scrollLeft !== prevState.scrollLeft && scrollLeft !== this._scrollingContainer.scrollLeft) {
	          this._scrollingContainer.scrollLeft = scrollLeft;
	        }
	        if (scrollTop >= 0 && scrollTop !== prevState.scrollTop && scrollTop !== this._scrollingContainer.scrollTop) {
	          this._scrollingContainer.scrollTop = scrollTop;
	        }
	      }
	
	      // Update scroll offsets if the current :scrollToCell values requires it
	      if (height !== prevProps.height || scrollToAlignment !== prevProps.scrollToAlignment || scrollToCell !== prevProps.scrollToCell || width !== prevProps.width) {
	        this._updateScrollPositionForScrollToCell();
	      }
	
	      // Update onRowsRendered callback if start/stop indices have changed
	      this._invokeOnSectionRenderedHelper();
	    }
	  }, {
	    key: 'componentWillMount',
	    value: function componentWillMount() {
	      var cellLayoutManager = this.props.cellLayoutManager;
	
	
	      cellLayoutManager.calculateSizeAndPositionData();
	
	      // If this component is being rendered server-side, getScrollbarSize() will return undefined.
	      // We handle this case in componentDidMount()
	      this._scrollbarSize = (0, _scrollbarSize2.default)();
	      if (this._scrollbarSize === undefined) {
	        this._scrollbarSizeMeasured = false;
	        this._scrollbarSize = 0;
	      } else {
	        this._scrollbarSizeMeasured = true;
	      }
	    }
	  }, {
	    key: 'componentWillUnmount',
	    value: function componentWillUnmount() {
	      if (this._disablePointerEventsTimeoutId) {
	        clearTimeout(this._disablePointerEventsTimeoutId);
	      }
	    }
	
	    /**
	     * @private
	     * This method updates scrollLeft/scrollTop in state for the following conditions:
	     * 1) Empty content (0 rows or columns)
	     * 2) New scroll props overriding the current state
	     * 3) Cells-count or cells-size has changed, making previous scroll offsets invalid
	     */
	
	  }, {
	    key: 'componentWillReceiveProps',
	    value: function componentWillReceiveProps(nextProps) {
	      var _state2 = this.state,
	          scrollLeft = _state2.scrollLeft,
	          scrollTop = _state2.scrollTop;
	
	
	      if (nextProps.cellCount === 0 && (scrollLeft !== 0 || scrollTop !== 0)) {
	        this._setScrollPosition({
	          scrollLeft: 0,
	          scrollTop: 0
	        });
	      } else if (nextProps.scrollLeft !== this.props.scrollLeft || nextProps.scrollTop !== this.props.scrollTop) {
	        this._setScrollPosition({
	          scrollLeft: nextProps.scrollLeft,
	          scrollTop: nextProps.scrollTop
	        });
	      }
	
	      if (nextProps.cellCount !== this.props.cellCount || nextProps.cellLayoutManager !== this.props.cellLayoutManager || this._calculateSizeAndPositionDataOnNextUpdate) {
	        nextProps.cellLayoutManager.calculateSizeAndPositionData();
	      }
	
	      if (this._calculateSizeAndPositionDataOnNextUpdate) {
	        this._calculateSizeAndPositionDataOnNextUpdate = false;
	      }
	    }
	  }, {
	    key: 'render',
	    value: function render() {
	      var _props3 = this.props,
	          autoHeight = _props3.autoHeight,
	          cellCount = _props3.cellCount,
	          cellLayoutManager = _props3.cellLayoutManager,
	          className = _props3.className,
	          height = _props3.height,
	          horizontalOverscanSize = _props3.horizontalOverscanSize,
	          id = _props3.id,
	          noContentRenderer = _props3.noContentRenderer,
	          style = _props3.style,
	          verticalOverscanSize = _props3.verticalOverscanSize,
	          width = _props3.width;
	      var _state3 = this.state,
	          isScrolling = _state3.isScrolling,
	          scrollLeft = _state3.scrollLeft,
	          scrollTop = _state3.scrollTop;
	
	      var _cellLayoutManager$ge2 = cellLayoutManager.getTotalSize(),
	          totalHeight = _cellLayoutManager$ge2.height,
	          totalWidth = _cellLayoutManager$ge2.width;
	
	      // Safely expand the rendered area by the specified overscan amount
	
	
	      var left = Math.max(0, scrollLeft - horizontalOverscanSize);
	      var top = Math.max(0, scrollTop - verticalOverscanSize);
	      var right = Math.min(totalWidth, scrollLeft + width + horizontalOverscanSize);
	      var bottom = Math.min(totalHeight, scrollTop + height + verticalOverscanSize);
	
	      var childrenToDisplay = height > 0 && width > 0 ? cellLayoutManager.cellRenderers({
	        height: bottom - top,
	        isScrolling: isScrolling,
	        width: right - left,
	        x: left,
	        y: top
	      }) : [];
	
	      var collectionStyle = {
	        boxSizing: 'border-box',
	        direction: 'ltr',
	        height: autoHeight ? 'auto' : height,
	        position: 'relative',
	        WebkitOverflowScrolling: 'touch',
	        width: width,
	        willChange: 'transform'
	      };
	
	      // Force browser to hide scrollbars when we know they aren't necessary.
	      // Otherwise once scrollbars appear they may not disappear again.
	      // For more info see issue #116
	      var verticalScrollBarSize = totalHeight > height ? this._scrollbarSize : 0;
	      var horizontalScrollBarSize = totalWidth > width ? this._scrollbarSize : 0;
	
	      // Also explicitly init styles to 'auto' if scrollbars are required.
	      // This works around an obscure edge case where external CSS styles have not yet been loaded,
	      // But an initial scroll index of offset is set as an external prop.
	      // Without this style, Grid would render the correct range of cells but would NOT update its internal offset.
	      // This was originally reported via clauderic/react-infinite-calendar/issues/23
	      collectionStyle.overflowX = totalWidth + verticalScrollBarSize <= width ? 'hidden' : 'auto';
	      collectionStyle.overflowY = totalHeight + horizontalScrollBarSize <= height ? 'hidden' : 'auto';
	
	      return _react2.default.createElement(
	        'div',
	        {
	          ref: this._setScrollingContainerRef,
	          'aria-label': this.props['aria-label'],
	          className: (0, _classnames2.default)('ReactVirtualized__Collection', className),
	          id: id,
	          onScroll: this._onScroll,
	          role: 'grid',
	          style: _extends({}, collectionStyle, style),
	          tabIndex: 0
	        },
	        cellCount > 0 && _react2.default.createElement(
	          'div',
	          {
	            className: 'ReactVirtualized__Collection__innerScrollContainer',
	            style: {
	              height: totalHeight,
	              maxHeight: totalHeight,
	              maxWidth: totalWidth,
	              overflow: 'hidden',
	              pointerEvents: isScrolling ? 'none' : '',
	              width: totalWidth
	            }
	          },
	          childrenToDisplay
	        ),
	        cellCount === 0 && noContentRenderer()
	      );
	    }
	
	    /* ---------------------------- Helper methods ---------------------------- */
	
	    /**
	     * Sets an :isScrolling flag for a small window of time.
	     * This flag is used to disable pointer events on the scrollable portion of the Collection.
	     * This prevents jerky/stuttery mouse-wheel scrolling.
	     */
	
	  }, {
	    key: '_enablePointerEventsAfterDelay',
	    value: function _enablePointerEventsAfterDelay() {
	      var _this2 = this;
	
	      if (this._disablePointerEventsTimeoutId) {
	        clearTimeout(this._disablePointerEventsTimeoutId);
	      }
	
	      this._disablePointerEventsTimeoutId = setTimeout(function () {
	        var isScrollingChange = _this2.props.isScrollingChange;
	
	
	        isScrollingChange(false);
	
	        _this2._disablePointerEventsTimeoutId = null;
	        _this2.setState({
	          isScrolling: false
	        });
	      }, IS_SCROLLING_TIMEOUT);
	    }
	  }, {
	    key: '_invokeOnSectionRenderedHelper',
	    value: function _invokeOnSectionRenderedHelper() {
	      var _props4 = this.props,
	          cellLayoutManager = _props4.cellLayoutManager,
	          onSectionRendered = _props4.onSectionRendered;
	
	
	      this._onSectionRenderedMemoizer({
	        callback: onSectionRendered,
	        indices: {
	          indices: cellLayoutManager.getLastRenderedIndices()
	        }
	      });
	    }
	  }, {
	    key: '_invokeOnScrollMemoizer',
	    value: function _invokeOnScrollMemoizer(_ref) {
	      var _this3 = this;
	
	      var scrollLeft = _ref.scrollLeft,
	          scrollTop = _ref.scrollTop,
	          totalHeight = _ref.totalHeight,
	          totalWidth = _ref.totalWidth;
	
	      this._onScrollMemoizer({
	        callback: function callback(_ref2) {
	          var scrollLeft = _ref2.scrollLeft,
	              scrollTop = _ref2.scrollTop;
	          var _props5 = _this3.props,
	              height = _props5.height,
	              onScroll = _props5.onScroll,
	              width = _props5.width;
	
	
	          onScroll({
	            clientHeight: height,
	            clientWidth: width,
	            scrollHeight: totalHeight,
	            scrollLeft: scrollLeft,
	            scrollTop: scrollTop,
	            scrollWidth: totalWidth
	          });
	        },
	        indices: {
	          scrollLeft: scrollLeft,
	          scrollTop: scrollTop
	        }
	      });
	    }
	  }, {
	    key: '_setScrollingContainerRef',
	    value: function _setScrollingContainerRef(ref) {
	      this._scrollingContainer = ref;
	    }
	  }, {
	    key: '_setScrollPosition',
	    value: function _setScrollPosition(_ref3) {
	      var scrollLeft = _ref3.scrollLeft,
	          scrollTop = _ref3.scrollTop;
	
	      var newState = {
	        scrollPositionChangeReason: SCROLL_POSITION_CHANGE_REASONS.REQUESTED
	      };
	
	      if (scrollLeft >= 0) {
	        newState.scrollLeft = scrollLeft;
	      }
	
	      if (scrollTop >= 0) {
	        newState.scrollTop = scrollTop;
	      }
	
	      if (scrollLeft >= 0 && scrollLeft !== this.state.scrollLeft || scrollTop >= 0 && scrollTop !== this.state.scrollTop) {
	        this.setState(newState);
	      }
	    }
	  }, {
	    key: '_updateScrollPositionForScrollToCell',
	    value: function _updateScrollPositionForScrollToCell() {
	      var _props6 = this.props,
	          cellLayoutManager = _props6.cellLayoutManager,
	          height = _props6.height,
	          scrollToAlignment = _props6.scrollToAlignment,
	          scrollToCell = _props6.scrollToCell,
	          width = _props6.width;
	      var _state4 = this.state,
	          scrollLeft = _state4.scrollLeft,
	          scrollTop = _state4.scrollTop;
	
	
	      if (scrollToCell >= 0) {
	        var scrollPosition = cellLayoutManager.getScrollPositionForCell({
	          align: scrollToAlignment,
	          cellIndex: scrollToCell,
	          height: height,
	          scrollLeft: scrollLeft,
	          scrollTop: scrollTop,
	          width: width
	        });
	
	        if (scrollPosition.scrollLeft !== scrollLeft || scrollPosition.scrollTop !== scrollTop) {
	          this._setScrollPosition(scrollPosition);
	        }
	      }
	    }
	  }, {
	    key: '_onScroll',
	    value: function _onScroll(event) {
	      // In certain edge-cases React dispatches an onScroll event with an invalid target.scrollLeft / target.scrollTop.
	      // This invalid event can be detected by comparing event.target to this component's scrollable DOM element.
	      // See issue #404 for more information.
	      if (event.target !== this._scrollingContainer) {
	        return;
	      }
	
	      // Prevent pointer events from interrupting a smooth scroll
	      this._enablePointerEventsAfterDelay();
	
	      // When this component is shrunk drastically, React dispatches a series of back-to-back scroll events,
	      // Gradually converging on a scrollTop that is within the bounds of the new, smaller height.
	      // This causes a series of rapid renders that is slow for long lists.
	      // We can avoid that by doing some simple bounds checking to ensure that scrollTop never exceeds the total height.
	      var _props7 = this.props,
	          cellLayoutManager = _props7.cellLayoutManager,
	          height = _props7.height,
	          isScrollingChange = _props7.isScrollingChange,
	          width = _props7.width;
	
	      var scrollbarSize = this._scrollbarSize;
	
	      var _cellLayoutManager$ge3 = cellLayoutManager.getTotalSize(),
	          totalHeight = _cellLayoutManager$ge3.height,
	          totalWidth = _cellLayoutManager$ge3.width;
	
	      var scrollLeft = Math.max(0, Math.min(totalWidth - width + scrollbarSize, event.target.scrollLeft));
	      var scrollTop = Math.max(0, Math.min(totalHeight - height + scrollbarSize, event.target.scrollTop));
	
	      // Certain devices (like Apple touchpad) rapid-fire duplicate events.
	      // Don't force a re-render if this is the case.
	      // The mouse may move faster then the animation frame does.
	      // Use requestAnimationFrame to avoid over-updating.
	      if (this.state.scrollLeft !== scrollLeft || this.state.scrollTop !== scrollTop) {
	        // Browsers with cancelable scroll events (eg. Firefox) interrupt scrolling animations if scrollTop/scrollLeft is set.
	        // Other browsers (eg. Safari) don't scroll as well without the help under certain conditions (DOM or style changes during scrolling).
	        // All things considered, this seems to be the best current work around that I'm aware of.
	        // For more information see https://github.com/bvaughn/react-virtualized/pull/124
	        var scrollPositionChangeReason = event.cancelable ? SCROLL_POSITION_CHANGE_REASONS.OBSERVED : SCROLL_POSITION_CHANGE_REASONS.REQUESTED;
	
	        // Synchronously set :isScrolling the first time (since _setNextState will reschedule its animation frame each time it's called)
	        if (!this.state.isScrolling) {
	          isScrollingChange(true);
	        }
	
	        this.setState({
	          isScrolling: true,
	          scrollLeft: scrollLeft,
	          scrollPositionChangeReason: scrollPositionChangeReason,
	          scrollTop: scrollTop
	        });
	      }
	
	      this._invokeOnScrollMemoizer({
	        scrollLeft: scrollLeft,
	        scrollTop: scrollTop,
	        totalWidth: totalWidth,
	        totalHeight: totalHeight
	      });
	    }
	  }]);
	
	  return CollectionView;
	}(_react.PureComponent);
	
	CollectionView.defaultProps = {
	  'aria-label': 'grid',
	  horizontalOverscanSize: 0,
	  noContentRenderer: function noContentRenderer() {
	    return null;
	  },
	  onScroll: function onScroll() {
	    return null;
	  },
	  onSectionRendered: function onSectionRendered() {
	    return null;
	  },
	  scrollToAlignment: 'auto',
	  scrollToCell: -1,
	  style: {},
	  verticalOverscanSize: 0
	};
	exports.default = CollectionView;
	(undefined) !== "production" ? CollectionView.propTypes = {
	  'aria-label': _react.PropTypes.string,
	
	  /**
	   * Removes fixed height from the scrollingContainer so that the total height
	   * of rows can stretch the window. Intended for use with WindowScroller
	   */
	  autoHeight: _react.PropTypes.bool,
	
	  /**
	   * Number of cells in collection.
	   */
	  cellCount: _react.PropTypes.number.isRequired,
	
	  /**
	   * Calculates cell sizes and positions and manages rendering the appropriate cells given a specified window.
	   */
	  cellLayoutManager: _react.PropTypes.object.isRequired,
	
	  /**
	   * Optional custom CSS class name to attach to root Collection element.
	   */
	  className: _react.PropTypes.string,
	
	  /**
	   * Height of Collection; this property determines the number of visible (vs virtualized) rows.
	   */
	  height: _react.PropTypes.number.isRequired,
	
	  /**
	   * Optional custom id to attach to root Collection element.
	   */
	  id: _react.PropTypes.string,
	
	  /**
	   * Enables the `Collection` to horiontally "overscan" its content similar to how `Grid` does.
	   * This can reduce flicker around the edges when a user scrolls quickly.
	   */
	  horizontalOverscanSize: _react.PropTypes.number.isRequired,
	
	  isScrollingChange: _react.PropTypes.func,
	
	  /**
	   * Optional renderer to be used in place of rows when either :rowCount or :cellCount is 0.
	   */
	  noContentRenderer: _react.PropTypes.func.isRequired,
	
	  /**
	   * Callback invoked whenever the scroll offset changes within the inner scrollable region.
	   * This callback can be used to sync scrolling between lists, tables, or grids.
	   * ({ clientHeight, clientWidth, scrollHeight, scrollLeft, scrollTop, scrollWidth }): void
	   */
	  onScroll: _react.PropTypes.func.isRequired,
	
	  /**
	   * Callback invoked with information about the section of the Collection that was just rendered.
	   * This callback is passed a named :indices parameter which is an Array of the most recently rendered section indices.
	   */
	  onSectionRendered: _react.PropTypes.func.isRequired,
	
	  /**
	   * Horizontal offset.
	   */
	  scrollLeft: _react.PropTypes.number,
	
	  /**
	   * Controls scroll-to-cell behavior of the Grid.
	   * The default ("auto") scrolls the least amount possible to ensure that the specified cell is fully visible.
	   * Use "start" to align cells to the top/left of the Grid and "end" to align bottom/right.
	   */
	  scrollToAlignment: _react.PropTypes.oneOf(['auto', 'end', 'start', 'center']).isRequired,
	
	  /**
	   * Cell index to ensure visible (by forcefully scrolling if necessary).
	   */
	  scrollToCell: _react.PropTypes.number.isRequired,
	
	  /**
	   * Vertical offset.
	   */
	  scrollTop: _react.PropTypes.number,
	
	  /**
	   * Optional custom inline style to attach to root Collection element.
	   */
	  style: _react.PropTypes.object,
	
	  /**
	   * Enables the `Collection` to vertically "overscan" its content similar to how `Grid` does.
	   * This can reduce flicker around the edges when a user scrolls quickly.
	   */
	  verticalOverscanSize: _react.PropTypes.number.isRequired,
	
	  /**
	   * Width of Collection; this property determines the number of visible (vs virtualized) columns.
	   */
	  width: _react.PropTypes.number.isRequired
	} : void 0;

/***/ },

/***/ 579:
/***/ function(module, exports) {

	'use strict';
	
	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	exports.default = createCallbackMemoizer;
	/**
	 * Helper utility that updates the specified callback whenever any of the specified indices have changed.
	 */
	function createCallbackMemoizer() {
	  var requireAllKeys = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : true;
	
	  var cachedIndices = {};
	
	  return function (_ref) {
	    var callback = _ref.callback,
	        indices = _ref.indices;
	
	    var keys = Object.keys(indices);
	    var allInitialized = !requireAllKeys || keys.every(function (key) {
	      var value = indices[key];
	      return Array.isArray(value) ? value.length > 0 : value >= 0;
	    });
	    var indexChanged = keys.length !== Object.keys(cachedIndices).length || keys.some(function (key) {
	      var cachedValue = cachedIndices[key];
	      var value = indices[key];
	
	      return Array.isArray(value) ? cachedValue.join(',') !== value.join(',') : cachedValue !== value;
	    });
	
	    cachedIndices = indices;
	
	    if (allInitialized && indexChanged) {
	      callback(indices);
	    }
	  };
	}

/***/ },

/***/ 580:
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	
	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	
	exports.default = function (recalc) {
	  if (!size || recalc) {
	    if (_inDOM2.default) {
	      var scrollDiv = document.createElement('div');
	
	      scrollDiv.style.position = 'absolute';
	      scrollDiv.style.top = '-9999px';
	      scrollDiv.style.width = '50px';
	      scrollDiv.style.height = '50px';
	      scrollDiv.style.overflow = 'scroll';
	
	      document.body.appendChild(scrollDiv);
	      size = scrollDiv.offsetWidth - scrollDiv.clientWidth;
	      document.body.removeChild(scrollDiv);
	    }
	  }
	
	  return size;
	};
	
	var _inDOM = __webpack_require__(581);
	
	var _inDOM2 = _interopRequireDefault(_inDOM);
	
	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
	
	var size = void 0;
	
	module.exports = exports['default'];

/***/ },

/***/ 581:
/***/ function(module, exports) {

	'use strict';
	
	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	exports.default = !!(typeof window !== 'undefined' && window.document && window.document.createElement);
	module.exports = exports['default'];

/***/ },

/***/ 582:
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	
	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	exports.default = calculateSizeAndPositionData;
	
	var _SectionManager = __webpack_require__(583);
	
	var _SectionManager2 = _interopRequireDefault(_SectionManager);
	
	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
	
	function calculateSizeAndPositionData(_ref) {
	  var cellCount = _ref.cellCount,
	      cellSizeAndPositionGetter = _ref.cellSizeAndPositionGetter,
	      sectionSize = _ref.sectionSize;
	
	  var cellMetadata = [];
	  var sectionManager = new _SectionManager2.default(sectionSize);
	  var height = 0;
	  var width = 0;
	
	  for (var index = 0; index < cellCount; index++) {
	    var cellMetadatum = cellSizeAndPositionGetter({ index: index });
	
	    if (cellMetadatum.height == null || isNaN(cellMetadatum.height) || cellMetadatum.width == null || isNaN(cellMetadatum.width) || cellMetadatum.x == null || isNaN(cellMetadatum.x) || cellMetadatum.y == null || isNaN(cellMetadatum.y)) {
	      throw Error('Invalid metadata returned for cell ' + index + ':\n        x:' + cellMetadatum.x + ', y:' + cellMetadatum.y + ', width:' + cellMetadatum.width + ', height:' + cellMetadatum.height);
	    }
	
	    height = Math.max(height, cellMetadatum.y + cellMetadatum.height);
	    width = Math.max(width, cellMetadatum.x + cellMetadatum.width);
	
	    cellMetadata[index] = cellMetadatum;
	    sectionManager.registerCell({
	      cellMetadatum: cellMetadatum,
	      index: index
	    });
	  }
	
	  return {
	    cellMetadata: cellMetadata,
	    height: height,
	    sectionManager: sectionManager,
	    width: width
	  };
	}

/***/ },

/***/ 583:
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	
	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	
	var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }(); /**
	                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                      * Window Sections are used to group nearby cells.
	                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                      * This enables us to more quickly determine which cells to display in a given region of the Window.
	                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                      * 
	                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                      */
	
	
	var _Section = __webpack_require__(584);
	
	var _Section2 = _interopRequireDefault(_Section);
	
	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
	
	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }
	
	var SECTION_SIZE = 100;
	
	/**
	 * Contains 0 to many Sections.
	 * Grows (and adds Sections) dynamically as cells are registered.
	 * Automatically adds cells to the appropriate Section(s).
	 */
	var SectionManager = function () {
	  function SectionManager() {
	    var sectionSize = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : SECTION_SIZE;
	
	    _classCallCheck(this, SectionManager);
	
	    this._sectionSize = sectionSize;
	
	    this._cellMetadata = [];
	    this._sections = {};
	  }
	
	  /**
	   * Gets all cell indices contained in the specified region.
	   * A region may encompass 1 or more Sections.
	   */
	
	
	  _createClass(SectionManager, [{
	    key: 'getCellIndices',
	    value: function getCellIndices(_ref) {
	      var height = _ref.height,
	          width = _ref.width,
	          x = _ref.x,
	          y = _ref.y;
	
	      var indices = {};
	
	      this.getSections({ height: height, width: width, x: x, y: y }).forEach(function (section) {
	        return section.getCellIndices().forEach(function (index) {
	          indices[index] = index;
	        });
	      });
	
	      // Object keys are strings; this function returns numbers
	      return Object.keys(indices).map(function (index) {
	        return indices[index];
	      });
	    }
	
	    /** Get size and position information for the cell specified. */
	
	  }, {
	    key: 'getCellMetadata',
	    value: function getCellMetadata(_ref2) {
	      var index = _ref2.index;
	
	      return this._cellMetadata[index];
	    }
	
	    /** Get all Sections overlapping the specified region. */
	
	  }, {
	    key: 'getSections',
	    value: function getSections(_ref3) {
	      var height = _ref3.height,
	          width = _ref3.width,
	          x = _ref3.x,
	          y = _ref3.y;
	
	      var sectionXStart = Math.floor(x / this._sectionSize);
	      var sectionXStop = Math.floor((x + width - 1) / this._sectionSize);
	      var sectionYStart = Math.floor(y / this._sectionSize);
	      var sectionYStop = Math.floor((y + height - 1) / this._sectionSize);
	
	      var sections = [];
	
	      for (var sectionX = sectionXStart; sectionX <= sectionXStop; sectionX++) {
	        for (var sectionY = sectionYStart; sectionY <= sectionYStop; sectionY++) {
	          var key = sectionX + '.' + sectionY;
	
	          if (!this._sections[key]) {
	            this._sections[key] = new _Section2.default({
	              height: this._sectionSize,
	              width: this._sectionSize,
	              x: sectionX * this._sectionSize,
	              y: sectionY * this._sectionSize
	            });
	          }
	
	          sections.push(this._sections[key]);
	        }
	      }
	
	      return sections;
	    }
	
	    /** Total number of Sections based on the currently registered cells. */
	
	  }, {
	    key: 'getTotalSectionCount',
	    value: function getTotalSectionCount() {
	      return Object.keys(this._sections).length;
	    }
	
	    /** Intended for debugger/test purposes only */
	
	  }, {
	    key: 'toString',
	    value: function toString() {
	      var _this = this;
	
	      return Object.keys(this._sections).map(function (index) {
	        return _this._sections[index].toString();
	      });
	    }
	
	    /** Adds a cell to the appropriate Sections and registers it metadata for later retrievable. */
	
	  }, {
	    key: 'registerCell',
	    value: function registerCell(_ref4) {
	      var cellMetadatum = _ref4.cellMetadatum,
	          index = _ref4.index;
	
	      this._cellMetadata[index] = cellMetadatum;
	
	      this.getSections(cellMetadatum).forEach(function (section) {
	        return section.addCellIndex({ index: index });
	      });
	    }
	  }]);
	
	  return SectionManager;
	}();
	
	exports.default = SectionManager;

/***/ },

/***/ 584:
/***/ function(module, exports) {

	'use strict';
	
	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	
	var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();
	
	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }
	
	/**
	 * A section of the Window.
	 * Window Sections are used to group nearby cells.
	 * This enables us to more quickly determine which cells to display in a given region of the Window.
	 * Sections have a fixed size and contain 0 to many cells (tracked by their indices).
	 */
	var Section = function () {
	  function Section(_ref) {
	    var height = _ref.height,
	        width = _ref.width,
	        x = _ref.x,
	        y = _ref.y;
	
	    _classCallCheck(this, Section);
	
	    this.height = height;
	    this.width = width;
	    this.x = x;
	    this.y = y;
	
	    this._indexMap = {};
	    this._indices = [];
	  }
	
	  /** Add a cell to this section. */
	
	
	  _createClass(Section, [{
	    key: 'addCellIndex',
	    value: function addCellIndex(_ref2) {
	      var index = _ref2.index;
	
	      if (!this._indexMap[index]) {
	        this._indexMap[index] = true;
	        this._indices.push(index);
	      }
	    }
	
	    /** Get all cell indices that have been added to this section. */
	
	  }, {
	    key: 'getCellIndices',
	    value: function getCellIndices() {
	      return this._indices;
	    }
	
	    /** Intended for debugger/test purposes only */
	
	  }, {
	    key: 'toString',
	    value: function toString() {
	      return this.x + ',' + this.y + ' ' + this.width + 'x' + this.height;
	    }
	  }]);
	
	  return Section;
	}(); /** @rlow */
	
	
	exports.default = Section;

/***/ },

/***/ 585:
/***/ function(module, exports) {

	'use strict';
	
	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	exports.default = getUpdatedOffsetForIndex;
	/**
	 * Determines a new offset that ensures a certain cell is visible, given the current offset.
	 * If the cell is already visible then the current offset will be returned.
	 * If the current offset is too great or small, it will be adjusted just enough to ensure the specified index is visible.
	 *
	 * @param align Desired alignment within container; one of "auto" (default), "start", or "end"
	 * @param cellOffset Offset (x or y) position for cell
	 * @param cellSize Size (width or height) of cell
	 * @param containerSize Total size (width or height) of the container
	 * @param currentOffset Container's current (x or y) offset
	 * @return Offset to use to ensure the specified cell is visible
	 */
	function getUpdatedOffsetForIndex(_ref) {
	  var _ref$align = _ref.align,
	      align = _ref$align === undefined ? 'auto' : _ref$align,
	      cellOffset = _ref.cellOffset,
	      cellSize = _ref.cellSize,
	      containerSize = _ref.containerSize,
	      currentOffset = _ref.currentOffset;
	
	  var maxOffset = cellOffset;
	  var minOffset = maxOffset - containerSize + cellSize;
	
	  switch (align) {
	    case 'start':
	      return maxOffset;
	    case 'end':
	      return minOffset;
	    case 'center':
	      return maxOffset - (containerSize - cellSize) / 2;
	    default:
	      return Math.max(minOffset, Math.min(maxOffset, currentOffset));
	  }
	}

/***/ },

/***/ 586:
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	
	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	exports.ColumnSizer = exports.default = undefined;
	
	var _ColumnSizer2 = __webpack_require__(587);
	
	var _ColumnSizer3 = _interopRequireDefault(_ColumnSizer2);
	
	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
	
	exports.default = _ColumnSizer3.default;
	exports.ColumnSizer = _ColumnSizer3.default;

/***/ },

/***/ 587:
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	
	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	
	var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();
	
	var _react = __webpack_require__(299);
	
	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }
	
	function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }
	
	function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }
	
	/**
	 * High-order component that auto-calculates column-widths for `Grid` cells.
	 */
	var ColumnSizer = function (_PureComponent) {
	  _inherits(ColumnSizer, _PureComponent);
	
	  function ColumnSizer(props, context) {
	    _classCallCheck(this, ColumnSizer);
	
	    var _this = _possibleConstructorReturn(this, (ColumnSizer.__proto__ || Object.getPrototypeOf(ColumnSizer)).call(this, props, context));
	
	    _this._registerChild = _this._registerChild.bind(_this);
	    return _this;
	  }
	
	  _createClass(ColumnSizer, [{
	    key: 'componentDidUpdate',
	    value: function componentDidUpdate(prevProps, prevState) {
	      var _props = this.props,
	          columnMaxWidth = _props.columnMaxWidth,
	          columnMinWidth = _props.columnMinWidth,
	          columnCount = _props.columnCount,
	          width = _props.width;
	
	
	      if (columnMaxWidth !== prevProps.columnMaxWidth || columnMinWidth !== prevProps.columnMinWidth || columnCount !== prevProps.columnCount || width !== prevProps.width) {
	        if (this._registeredChild) {
	          this._registeredChild.recomputeGridSize();
	        }
	      }
	    }
	  }, {
	    key: 'render',
	    value: function render() {
	      var _props2 = this.props,
	          children = _props2.children,
	          columnMaxWidth = _props2.columnMaxWidth,
	          columnMinWidth = _props2.columnMinWidth,
	          columnCount = _props2.columnCount,
	          width = _props2.width;
	
	
	      var safeColumnMinWidth = columnMinWidth || 1;
	
	      var safeColumnMaxWidth = columnMaxWidth ? Math.min(columnMaxWidth, width) : width;
	
	      var columnWidth = width / columnCount;
	      columnWidth = Math.max(safeColumnMinWidth, columnWidth);
	      columnWidth = Math.min(safeColumnMaxWidth, columnWidth);
	      columnWidth = Math.floor(columnWidth);
	
	      var adjustedWidth = Math.min(width, columnWidth * columnCount);
	
	      return children({
	        adjustedWidth: adjustedWidth,
	        getColumnWidth: function getColumnWidth() {
	          return columnWidth;
	        },
	        registerChild: this._registerChild
	      });
	    }
	  }, {
	    key: '_registerChild',
	    value: function _registerChild(child) {
	      if (child && typeof child.recomputeGridSize !== 'function') {
	        throw Error('Unexpected child type registered; only Grid/MultiGrid children are supported.');
	      }
	
	      this._registeredChild = child;
	
	      if (this._registeredChild) {
	        this._registeredChild.recomputeGridSize();
	      }
	    }
	  }]);
	
	  return ColumnSizer;
	}(_react.PureComponent);
	
	exports.default = ColumnSizer;
	(undefined) !== "production" ? ColumnSizer.propTypes = {
	  /**
	   * Function responsible for rendering a virtualized Grid.
	   * This function should implement the following signature:
	   * ({ adjustedWidth, getColumnWidth, registerChild }) => PropTypes.element
	   *
	   * The specified :getColumnWidth function should be passed to the Grid's :columnWidth property.
	   * The :registerChild should be passed to the Grid's :ref property.
	   * The :adjustedWidth property is optional; it reflects the lesser of the overall width or the width of all columns.
	   */
	  children: _react.PropTypes.func.isRequired,
	
	  /** Optional maximum allowed column width */
	  columnMaxWidth: _react.PropTypes.number,
	
	  /** Optional minimum allowed column width */
	  columnMinWidth: _react.PropTypes.number,
	
	  /** Number of columns in Grid or Table child */
	  columnCount: _react.PropTypes.number.isRequired,
	
	  /** Width of Grid or Table child */
	  width: _react.PropTypes.number.isRequired
	} : void 0;

/***/ },

/***/ 588:
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	
	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	exports.SortIndicator = exports.SortDirection = exports.Column = exports.Table = exports.defaultRowRenderer = exports.defaultHeaderRenderer = exports.defaultCellRenderer = exports.defaultCellDataGetter = exports.default = undefined;
	
	var _Table2 = __webpack_require__(589);
	
	var _Table3 = _interopRequireDefault(_Table2);
	
	var _defaultCellDataGetter2 = __webpack_require__(595);
	
	var _defaultCellDataGetter3 = _interopRequireDefault(_defaultCellDataGetter2);
	
	var _defaultCellRenderer2 = __webpack_require__(594);
	
	var _defaultCellRenderer3 = _interopRequireDefault(_defaultCellRenderer2);
	
	var _defaultHeaderRenderer2 = __webpack_require__(591);
	
	var _defaultHeaderRenderer3 = _interopRequireDefault(_defaultHeaderRenderer2);
	
	var _defaultRowRenderer2 = __webpack_require__(604);
	
	var _defaultRowRenderer3 = _interopRequireDefault(_defaultRowRenderer2);
	
	var _Column2 = __webpack_require__(590);
	
	var _Column3 = _interopRequireDefault(_Column2);
	
	var _SortDirection2 = __webpack_require__(593);
	
	var _SortDirection3 = _interopRequireDefault(_SortDirection2);
	
	var _SortIndicator2 = __webpack_require__(592);
	
	var _SortIndicator3 = _interopRequireDefault(_SortIndicator2);
	
	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
	
	exports.default = _Table3.default;
	exports.defaultCellDataGetter = _defaultCellDataGetter3.default;
	exports.defaultCellRenderer = _defaultCellRenderer3.default;
	exports.defaultHeaderRenderer = _defaultHeaderRenderer3.default;
	exports.defaultRowRenderer = _defaultRowRenderer3.default;
	exports.Table = _Table3.default;
	exports.Column = _Column3.default;
	exports.SortDirection = _SortDirection3.default;
	exports.SortIndicator = _SortIndicator3.default;

/***/ },

/***/ 589:
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	
	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	
	var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };
	
	var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();
	
	var _classnames = __webpack_require__(476);
	
	var _classnames2 = _interopRequireDefault(_classnames);
	
	var _Column = __webpack_require__(590);
	
	var _Column2 = _interopRequireDefault(_Column);
	
	var _react = __webpack_require__(299);
	
	var _react2 = _interopRequireDefault(_react);
	
	var _reactDom = __webpack_require__(329);
	
	var _Grid = __webpack_require__(596);
	
	var _Grid2 = _interopRequireDefault(_Grid);
	
	var _defaultRowRenderer = __webpack_require__(604);
	
	var _defaultRowRenderer2 = _interopRequireDefault(_defaultRowRenderer);
	
	var _SortDirection = __webpack_require__(593);
	
	var _SortDirection2 = _interopRequireDefault(_SortDirection);
	
	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
	
	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }
	
	function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }
	
	function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }
	
	/**
	 * Table component with fixed headers and virtualized rows for improved performance with large data sets.
	 * This component expects explicit width, height, and padding parameters.
	 */
	var Table = function (_PureComponent) {
	  _inherits(Table, _PureComponent);
	
	  function Table(props) {
	    _classCallCheck(this, Table);
	
	    var _this = _possibleConstructorReturn(this, (Table.__proto__ || Object.getPrototypeOf(Table)).call(this, props));
	
	    _this.state = {
	      scrollbarWidth: 0
	    };
	
	    _this._createColumn = _this._createColumn.bind(_this);
	    _this._createRow = _this._createRow.bind(_this);
	    _this._onScroll = _this._onScroll.bind(_this);
	    _this._onSectionRendered = _this._onSectionRendered.bind(_this);
	    _this._setRef = _this._setRef.bind(_this);
	    return _this;
	  }
	
	  _createClass(Table, [{
	    key: 'forceUpdateGrid',
	    value: function forceUpdateGrid() {
	      this.Grid.forceUpdate();
	    }
	
	    /** See Grid#measureAllCells */
	
	  }, {
	    key: 'measureAllRows',
	    value: function measureAllRows() {
	      this.Grid.measureAllCells();
	    }
	
	    /** See Grid#recomputeGridSize */
	
	  }, {
	    key: 'recomputeRowHeights',
	    value: function recomputeRowHeights() {
	      var index = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : 0;
	
	      this.Grid.recomputeGridSize({
	        rowIndex: index
	      });
	    }
	
	    /** See Grid#scrollToCell */
	
	  }, {
	    key: 'scrollToRow',
	    value: function scrollToRow() {
	      var index = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : 0;
	
	      this.Grid.scrollToCell({
	        columnIndex: 0,
	        rowIndex: index
	      });
	    }
	  }, {
	    key: 'componentDidMount',
	    value: function componentDidMount() {
	      this._setScrollbarWidth();
	    }
	  }, {
	    key: 'componentDidUpdate',
	    value: function componentDidUpdate() {
	      this._setScrollbarWidth();
	    }
	  }, {
	    key: 'render',
	    value: function render() {
	      var _this2 = this;
	
	      var _props = this.props,
	          children = _props.children,
	          className = _props.className,
	          disableHeader = _props.disableHeader,
	          gridClassName = _props.gridClassName,
	          gridStyle = _props.gridStyle,
	          headerHeight = _props.headerHeight,
	          height = _props.height,
	          id = _props.id,
	          noRowsRenderer = _props.noRowsRenderer,
	          rowClassName = _props.rowClassName,
	          rowStyle = _props.rowStyle,
	          scrollToIndex = _props.scrollToIndex,
	          style = _props.style,
	          width = _props.width;
	      var scrollbarWidth = this.state.scrollbarWidth;
	
	
	      var availableRowsHeight = disableHeader ? height : height - headerHeight;
	
	      var rowClass = typeof rowClassName === 'function' ? rowClassName({ index: -1 }) : rowClassName;
	      var rowStyleObject = typeof rowStyle === 'function' ? rowStyle({ index: -1 }) : rowStyle;
	
	      // Precompute and cache column styles before rendering rows and columns to speed things up
	      this._cachedColumnStyles = [];
	      _react2.default.Children.toArray(children).forEach(function (column, index) {
	        var flexStyles = _this2._getFlexStyleForColumn(column, column.props.style);
	
	        _this2._cachedColumnStyles[index] = _extends({}, flexStyles, {
	          overflow: 'hidden'
	        });
	      });
	
	      // Note that we specify :rowCount, :scrollbarWidth, :sortBy, and :sortDirection as properties on Grid even though these have nothing to do with Grid.
	      // This is done because Grid is a pure component and won't update unless its properties or state has changed.
	      // Any property that should trigger a re-render of Grid then is specified here to avoid a stale display.
	      return _react2.default.createElement(
	        'div',
	        {
	          className: (0, _classnames2.default)('ReactVirtualized__Table', className),
	          id: id,
	          style: style
	        },
	        !disableHeader && _react2.default.createElement(
	          'div',
	          {
	            className: (0, _classnames2.default)('ReactVirtualized__Table__headerRow', rowClass),
	            style: _extends({}, rowStyleObject, {
	              height: headerHeight,
	              overflow: 'hidden',
	              paddingRight: scrollbarWidth,
	              width: width
	            })
	          },
	          this._getRenderedHeaderRow()
	        ),
	        _react2.default.createElement(_Grid2.default, _extends({}, this.props, {
	          autoContainerWidth: true,
	          className: (0, _classnames2.default)('ReactVirtualized__Table__Grid', gridClassName),
	          cellRenderer: this._createRow,
	          columnWidth: width,
	          columnCount: 1,
	          height: availableRowsHeight,
	          id: undefined,
	          noContentRenderer: noRowsRenderer,
	          onScroll: this._onScroll,
	          onSectionRendered: this._onSectionRendered,
	          ref: this._setRef,
	          scrollbarWidth: scrollbarWidth,
	          scrollToRow: scrollToIndex,
	          style: _extends({}, gridStyle, {
	            overflowX: 'hidden'
	          })
	        }))
	      );
	    }
	  }, {
	    key: '_createColumn',
	    value: function _createColumn(_ref) {
	      var column = _ref.column,
	          columnIndex = _ref.columnIndex,
	          isScrolling = _ref.isScrolling,
	          parent = _ref.parent,
	          rowData = _ref.rowData,
	          rowIndex = _ref.rowIndex;
	      var _column$props = column.props,
	          cellDataGetter = _column$props.cellDataGetter,
	          cellRenderer = _column$props.cellRenderer,
	          className = _column$props.className,
	          columnData = _column$props.columnData,
	          dataKey = _column$props.dataKey;
	
	
	      var cellData = cellDataGetter({ columnData: columnData, dataKey: dataKey, rowData: rowData });
	      var renderedCell = cellRenderer({ cellData: cellData, columnData: columnData, dataKey: dataKey, isScrolling: isScrolling, parent: parent, rowData: rowData, rowIndex: rowIndex });
	
	      var style = this._cachedColumnStyles[columnIndex];
	
	      var title = typeof renderedCell === 'string' ? renderedCell : null;
	
	      return _react2.default.createElement(
	        'div',
	        {
	          key: 'Row' + rowIndex + '-Col' + columnIndex,
	          className: (0, _classnames2.default)('ReactVirtualized__Table__rowColumn', className),
	          style: style,
	          title: title
	        },
	        renderedCell
	      );
	    }
	  }, {
	    key: '_createHeader',
	    value: function _createHeader(_ref2) {
	      var column = _ref2.column,
	          index = _ref2.index;
	      var _props2 = this.props,
	          headerClassName = _props2.headerClassName,
	          headerStyle = _props2.headerStyle,
	          onHeaderClick = _props2.onHeaderClick,
	          sort = _props2.sort,
	          sortBy = _props2.sortBy,
	          sortDirection = _props2.sortDirection;
	      var _column$props2 = column.props,
	          dataKey = _column$props2.dataKey,
	          disableSort = _column$props2.disableSort,
	          headerRenderer = _column$props2.headerRenderer,
	          label = _column$props2.label,
	          columnData = _column$props2.columnData;
	
	      var sortEnabled = !disableSort && sort;
	
	      var classNames = (0, _classnames2.default)('ReactVirtualized__Table__headerColumn', headerClassName, column.props.headerClassName, {
	        'ReactVirtualized__Table__sortableHeaderColumn': sortEnabled
	      });
	      var style = this._getFlexStyleForColumn(column, headerStyle);
	
	      var renderedHeader = headerRenderer({
	        columnData: columnData,
	        dataKey: dataKey,
	        disableSort: disableSort,
	        label: label,
	        sortBy: sortBy,
	        sortDirection: sortDirection
	      });
	
	      var a11yProps = {};
	
	      if (sortEnabled || onHeaderClick) {
	        (function () {
	          // If this is a sortable header, clicking it should update the table data's sorting.
	          var newSortDirection = sortBy !== dataKey || sortDirection === _SortDirection2.default.DESC ? _SortDirection2.default.ASC : _SortDirection2.default.DESC;
	
	          var onClick = function onClick() {
	            sortEnabled && sort({
	              sortBy: dataKey,
	              sortDirection: newSortDirection
	            });
	            onHeaderClick && onHeaderClick({ columnData: columnData, dataKey: dataKey });
	          };
	
	          var onKeyDown = function onKeyDown(event) {
	            if (event.key === 'Enter' || event.key === ' ') {
	              onClick();
	            }
	          };
	
	          a11yProps['aria-label'] = column.props['aria-label'] || label || dataKey;
	          a11yProps.role = 'rowheader';
	          a11yProps.tabIndex = 0;
	          a11yProps.onClick = onClick;
	          a11yProps.onKeyDown = onKeyDown;
	        })();
	      }
	
	      return _react2.default.createElement(
	        'div',
	        _extends({}, a11yProps, {
	          key: 'Header-Col' + index,
	          className: classNames,
	          style: style
	        }),
	        renderedHeader
	      );
	    }
	  }, {
	    key: '_createRow',
	    value: function _createRow(_ref3) {
	      var _this3 = this;
	
	      var index = _ref3.rowIndex,
	          isScrolling = _ref3.isScrolling,
	          key = _ref3.key,
	          parent = _ref3.parent,
	          style = _ref3.style;
	      var _props3 = this.props,
	          children = _props3.children,
	          onRowClick = _props3.onRowClick,
	          onRowDoubleClick = _props3.onRowDoubleClick,
	          onRowMouseOver = _props3.onRowMouseOver,
	          onRowMouseOut = _props3.onRowMouseOut,
	          rowClassName = _props3.rowClassName,
	          rowGetter = _props3.rowGetter,
	          rowRenderer = _props3.rowRenderer,
	          rowStyle = _props3.rowStyle;
	      var scrollbarWidth = this.state.scrollbarWidth;
	
	
	      var rowClass = typeof rowClassName === 'function' ? rowClassName({ index: index }) : rowClassName;
	      var rowStyleObject = typeof rowStyle === 'function' ? rowStyle({ index: index }) : rowStyle;
	      var rowData = rowGetter({ index: index });
	
	      var columns = _react2.default.Children.toArray(children).map(function (column, columnIndex) {
	        return _this3._createColumn({
	          column: column,
	          columnIndex: columnIndex,
	          isScrolling: isScrolling,
	          parent: parent,
	          rowData: rowData,
	          rowIndex: index,
	          scrollbarWidth: scrollbarWidth
	        });
	      });
	
	      var className = (0, _classnames2.default)('ReactVirtualized__Table__row', rowClass);
	      var flattenedStyle = _extends({}, style, rowStyleObject, {
	        height: this._getRowHeight(index),
	        overflow: 'hidden',
	        paddingRight: scrollbarWidth
	      });
	
	      return rowRenderer({
	        className: className,
	        columns: columns,
	        index: index,
	        isScrolling: isScrolling,
	        key: key,
	        onRowClick: onRowClick,
	        onRowDoubleClick: onRowDoubleClick,
	        onRowMouseOver: onRowMouseOver,
	        onRowMouseOut: onRowMouseOut,
	        rowData: rowData,
	        style: flattenedStyle
	      });
	    }
	
	    /**
	     * Determines the flex-shrink, flex-grow, and width values for a cell (header or column).
	     */
	
	  }, {
	    key: '_getFlexStyleForColumn',
	    value: function _getFlexStyleForColumn(column) {
	      var customStyle = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : {};
	
	      var flexValue = column.props.flexGrow + ' ' + column.props.flexShrink + ' ' + column.props.width + 'px';
	
	      var style = _extends({}, customStyle, {
	        flex: flexValue,
	        msFlex: flexValue,
	        WebkitFlex: flexValue
	      });
	
	      if (column.props.maxWidth) {
	        style.maxWidth = column.props.maxWidth;
	      }
	
	      if (column.props.minWidth) {
	        style.minWidth = column.props.minWidth;
	      }
	
	      return style;
	    }
	  }, {
	    key: '_getRenderedHeaderRow',
	    value: function _getRenderedHeaderRow() {
	      var _this4 = this;
	
	      var _props4 = this.props,
	          children = _props4.children,
	          disableHeader = _props4.disableHeader;
	
	      var items = disableHeader ? [] : _react2.default.Children.toArray(children);
	
	      return items.map(function (column, index) {
	        return _this4._createHeader({ column: column, index: index });
	      });
	    }
	  }, {
	    key: '_getRowHeight',
	    value: function _getRowHeight(rowIndex) {
	      var rowHeight = this.props.rowHeight;
	
	
	      return typeof rowHeight === 'function' ? rowHeight({ index: rowIndex }) : rowHeight;
	    }
	  }, {
	    key: '_onScroll',
	    value: function _onScroll(_ref4) {
	      var clientHeight = _ref4.clientHeight,
	          scrollHeight = _ref4.scrollHeight,
	          scrollTop = _ref4.scrollTop;
	      var onScroll = this.props.onScroll;
	
	
	      onScroll({ clientHeight: clientHeight, scrollHeight: scrollHeight, scrollTop: scrollTop });
	    }
	  }, {
	    key: '_onSectionRendered',
	    value: function _onSectionRendered(_ref5) {
	      var rowOverscanStartIndex = _ref5.rowOverscanStartIndex,
	          rowOverscanStopIndex = _ref5.rowOverscanStopIndex,
	          rowStartIndex = _ref5.rowStartIndex,
	          rowStopIndex = _ref5.rowStopIndex;
	      var onRowsRendered = this.props.onRowsRendered;
	
	
	      onRowsRendered({
	        overscanStartIndex: rowOverscanStartIndex,
	        overscanStopIndex: rowOverscanStopIndex,
	        startIndex: rowStartIndex,
	        stopIndex: rowStopIndex
	      });
	    }
	  }, {
	    key: '_setRef',
	    value: function _setRef(ref) {
	      this.Grid = ref;
	    }
	  }, {
	    key: '_setScrollbarWidth',
	    value: function _setScrollbarWidth() {
	      var Grid = (0, _reactDom.findDOMNode)(this.Grid);
	      var clientWidth = Grid.clientWidth || 0;
	      var offsetWidth = Grid.offsetWidth || 0;
	      var scrollbarWidth = offsetWidth - clientWidth;
	
	      this.setState({ scrollbarWidth: scrollbarWidth });
	    }
	  }]);
	
	  return Table;
	}(_react.PureComponent);
	
	Table.defaultProps = {
	  disableHeader: false,
	  estimatedRowSize: 30,
	  headerHeight: 0,
	  headerStyle: {},
	  noRowsRenderer: function noRowsRenderer() {
	    return null;
	  },
	  onRowsRendered: function onRowsRendered() {
	    return null;
	  },
	  onScroll: function onScroll() {
	    return null;
	  },
	  overscanRowCount: 10,
	  rowRenderer: _defaultRowRenderer2.default,
	  rowStyle: {},
	  scrollToAlignment: 'auto',
	  scrollToIndex: -1,
	  style: {}
	};
	exports.default = Table;
	(undefined) !== "production" ? Table.propTypes = {
	  'aria-label': _react.PropTypes.string,
	
	  /**
	   * Removes fixed height from the scrollingContainer so that the total height
	   * of rows can stretch the window. Intended for use with WindowScroller
	   */
	  autoHeight: _react.PropTypes.bool,
	
	  /** One or more Columns describing the data displayed in this row */
	  children: function children(props, propName, componentName) {
	    var children = _react2.default.Children.toArray(props.children);
	    for (var i = 0; i < children.length; i++) {
	      if (children[i].type !== _Column2.default) {
	        return new Error('Table only accepts children of type Column');
	      }
	    }
	  },
	
	  /** Optional CSS class name */
	  className: _react.PropTypes.string,
	
	  /** Disable rendering the header at all */
	  disableHeader: _react.PropTypes.bool,
	
	  /**
	   * Used to estimate the total height of a Table before all of its rows have actually been measured.
	   * The estimated total height is adjusted as rows are rendered.
	   */
	  estimatedRowSize: _react.PropTypes.number.isRequired,
	
	  /** Optional custom CSS class name to attach to inner Grid element. */
	  gridClassName: _react.PropTypes.string,
	
	  /** Optional inline style to attach to inner Grid element. */
	  gridStyle: _react.PropTypes.object,
	
	  /** Optional CSS class to apply to all column headers */
	  headerClassName: _react.PropTypes.string,
	
	  /** Fixed height of header row */
	  headerHeight: _react.PropTypes.number.isRequired,
	
	  /** Fixed/available height for out DOM element */
	  height: _react.PropTypes.number.isRequired,
	
	  /** Optional id */
	  id: _react.PropTypes.string,
	
	  /** Optional renderer to be used in place of table body rows when rowCount is 0 */
	  noRowsRenderer: _react.PropTypes.func,
	
	  /**
	  * Optional callback when a column's header is clicked.
	  * ({ columnData: any, dataKey: string }): void
	  */
	  onHeaderClick: _react.PropTypes.func,
	
	  /** Optional custom inline style to attach to table header columns. */
	  headerStyle: _react.PropTypes.object,
	
	  /**
	   * Callback invoked when a user clicks on a table row.
	   * ({ index: number }): void
	   */
	  onRowClick: _react.PropTypes.func,
	
	  /**
	   * Callback invoked when a user double-clicks on a table row.
	   * ({ index: number }): void
	   */
	  onRowDoubleClick: _react.PropTypes.func,
	
	  /**
	   * Callback invoked when the mouse leaves a table row.
	   * ({ index: number }): void
	   */
	  onRowMouseOut: _react.PropTypes.func,
	
	  /**
	   * Callback invoked when a user moves the mouse over a table row.
	   * ({ index: number }): void
	   */
	  onRowMouseOver: _react.PropTypes.func,
	
	  /**
	   * Callback invoked with information about the slice of rows that were just rendered.
	   * ({ startIndex, stopIndex }): void
	   */
	  onRowsRendered: _react.PropTypes.func,
	
	  /**
	   * Callback invoked whenever the scroll offset changes within the inner scrollable region.
	   * This callback can be used to sync scrolling between lists, tables, or grids.
	   * ({ clientHeight, scrollHeight, scrollTop }): void
	   */
	  onScroll: _react.PropTypes.func.isRequired,
	
	  /**
	   * Number of rows to render above/below the visible bounds of the list.
	   * These rows can help for smoother scrolling on touch devices.
	   */
	  overscanRowCount: _react.PropTypes.number.isRequired,
	
	  /**
	   * Optional CSS class to apply to all table rows (including the header row).
	   * This property can be a CSS class name (string) or a function that returns a class name.
	   * If a function is provided its signature should be: ({ index: number }): string
	   */
	  rowClassName: _react.PropTypes.oneOfType([_react.PropTypes.string, _react.PropTypes.func]),
	
	  /**
	   * Callback responsible for returning a data row given an index.
	   * ({ index: number }): any
	   */
	  rowGetter: _react.PropTypes.func.isRequired,
	
	  /**
	   * Either a fixed row height (number) or a function that returns the height of a row given its index.
	   * ({ index: number }): number
	   */
	  rowHeight: _react.PropTypes.oneOfType([_react.PropTypes.number, _react.PropTypes.func]).isRequired,
	
	  /** Number of rows in table. */
	  rowCount: _react.PropTypes.number.isRequired,
	
	  /**
	   * Responsible for rendering a table row given an array of columns:
	   * Should implement the following interface: ({
	   *   className: string,
	   *   columns: Array,
	   *   index: number,
	   *   isScrolling: boolean,
	   *   onRowClick: ?Function,
	   *   onRowDoubleClick: ?Function,
	   *   onRowMouseOver: ?Function,
	   *   onRowMouseOut: ?Function,
	   *   rowData: any,
	   *   style: any
	   * }): PropTypes.node
	   */
	  rowRenderer: _react.PropTypes.func,
	
	  /** Optional custom inline style to attach to table rows. */
	  rowStyle: _react.PropTypes.oneOfType([_react.PropTypes.object, _react.PropTypes.func]).isRequired,
	
	  /** See Grid#scrollToAlignment */
	  scrollToAlignment: _react.PropTypes.oneOf(['auto', 'end', 'start', 'center']).isRequired,
	
	  /** Row index to ensure visible (by forcefully scrolling if necessary) */
	  scrollToIndex: _react.PropTypes.number.isRequired,
	
	  /** Vertical offset. */
	  scrollTop: _react.PropTypes.number,
	
	  /**
	   * Sort function to be called if a sortable header is clicked.
	   * ({ sortBy: string, sortDirection: SortDirection }): void
	   */
	  sort: _react.PropTypes.func,
	
	  /** Table data is currently sorted by this :dataKey (if it is sorted at all) */
	  sortBy: _react.PropTypes.string,
	
	  /** Table data is currently sorted in this direction (if it is sorted at all) */
	  sortDirection: _react.PropTypes.oneOf([_SortDirection2.default.ASC, _SortDirection2.default.DESC]),
	
	  /** Optional inline style */
	  style: _react.PropTypes.object,
	
	  /** Tab index for focus */
	  tabIndex: _react.PropTypes.number,
	
	  /** Width of list */
	  width: _react.PropTypes.number.isRequired
	} : void 0;

/***/ },

/***/ 590:
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	
	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	
	var _react = __webpack_require__(299);
	
	var _defaultHeaderRenderer = __webpack_require__(591);
	
	var _defaultHeaderRenderer2 = _interopRequireDefault(_defaultHeaderRenderer);
	
	var _defaultCellRenderer = __webpack_require__(594);
	
	var _defaultCellRenderer2 = _interopRequireDefault(_defaultCellRenderer);
	
	var _defaultCellDataGetter = __webpack_require__(595);
	
	var _defaultCellDataGetter2 = _interopRequireDefault(_defaultCellDataGetter);
	
	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
	
	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }
	
	function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }
	
	function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }
	
	/**
	 * Describes the header and cell contents of a table column.
	 */
	var Column = function (_Component) {
	  _inherits(Column, _Component);
	
	  function Column() {
	    _classCallCheck(this, Column);
	
	    return _possibleConstructorReturn(this, (Column.__proto__ || Object.getPrototypeOf(Column)).apply(this, arguments));
	  }
	
	  return Column;
	}(_react.Component);
	
	Column.defaultProps = {
	  cellDataGetter: _defaultCellDataGetter2.default,
	  cellRenderer: _defaultCellRenderer2.default,
	  flexGrow: 0,
	  flexShrink: 1,
	  headerRenderer: _defaultHeaderRenderer2.default,
	  style: {}
	};
	exports.default = Column;
	(undefined) !== "production" ? Column.propTypes = {
	  /** Optional aria-label value to set on the column header */
	  'aria-label': _react.PropTypes.string,
	
	  /**
	   * Callback responsible for returning a cell's data, given its :dataKey
	   * ({ columnData: any, dataKey: string, rowData: any }): any
	   */
	  cellDataGetter: _react.PropTypes.func,
	
	  /**
	   * Callback responsible for rendering a cell's contents.
	   * ({ cellData: any, columnData: any, dataKey: string, rowData: any, rowIndex: number }): node
	   */
	  cellRenderer: _react.PropTypes.func,
	
	  /** Optional CSS class to apply to cell */
	  className: _react.PropTypes.string,
	
	  /** Optional additional data passed to this column's :cellDataGetter */
	  columnData: _react.PropTypes.object,
	
	  /** Uniquely identifies the row-data attribute correspnding to this cell */
	  dataKey: _react.PropTypes.any.isRequired,
	
	  /** If sort is enabled for the table at large, disable it for this column */
	  disableSort: _react.PropTypes.bool,
	
	  /** Flex grow style; defaults to 0 */
	  flexGrow: _react.PropTypes.number,
	
	  /** Flex shrink style; defaults to 1 */
	  flexShrink: _react.PropTypes.number,
	
	  /** Optional CSS class to apply to this column's header */
	  headerClassName: _react.PropTypes.string,
	
	  /**
	   * Optional callback responsible for rendering a column header contents.
	   * ({ columnData: object, dataKey: string, disableSort: boolean, label: string, sortBy: string, sortDirection: string }): PropTypes.node
	   */
	  headerRenderer: _react.PropTypes.func.isRequired,
	
	  /** Header label for this column */
	  label: _react.PropTypes.string,
	
	  /** Maximum width of column; this property will only be used if :flexGrow is > 0. */
	  maxWidth: _react.PropTypes.number,
	
	  /** Minimum width of column. */
	  minWidth: _react.PropTypes.number,
	
	  /** Optional inline style to apply to cell */
	  style: _react.PropTypes.object,
	
	  /** Flex basis (width) for this column; This value can grow or shrink based on :flexGrow and :flexShrink properties. */
	  width: _react.PropTypes.number.isRequired
	} : void 0;

/***/ },

/***/ 591:
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	
	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	exports.default = defaultHeaderRenderer;
	
	var _react = __webpack_require__(299);
	
	var _react2 = _interopRequireDefault(_react);
	
	var _SortIndicator = __webpack_require__(592);
	
	var _SortIndicator2 = _interopRequireDefault(_SortIndicator);
	
	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
	
	/**
	 * Default table header renderer.
	 */
	function defaultHeaderRenderer(_ref) {
	  var columnData = _ref.columnData,
	      dataKey = _ref.dataKey,
	      disableSort = _ref.disableSort,
	      label = _ref.label,
	      sortBy = _ref.sortBy,
	      sortDirection = _ref.sortDirection;
	
	  var showSortIndicator = sortBy === dataKey;
	  var children = [_react2.default.createElement(
	    'span',
	    {
	      className: 'ReactVirtualized__Table__headerTruncatedText',
	      key: 'label',
	      title: label
	    },
	    label
	  )];
	
	  if (showSortIndicator) {
	    children.push(_react2.default.createElement(_SortIndicator2.default, {
	      key: 'SortIndicator',
	      sortDirection: sortDirection
	    }));
	  }
	
	  return children;
	}

/***/ },

/***/ 592:
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	
	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	exports.default = SortIndicator;
	
	var _react = __webpack_require__(299);
	
	var _react2 = _interopRequireDefault(_react);
	
	var _classnames = __webpack_require__(476);
	
	var _classnames2 = _interopRequireDefault(_classnames);
	
	var _SortDirection = __webpack_require__(593);
	
	var _SortDirection2 = _interopRequireDefault(_SortDirection);
	
	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
	
	/**
	 * Displayed beside a header to indicate that a Table is currently sorted by this column.
	 */
	function SortIndicator(_ref) {
	  var sortDirection = _ref.sortDirection;
	
	  var classNames = (0, _classnames2.default)('ReactVirtualized__Table__sortableHeaderIcon', {
	    'ReactVirtualized__Table__sortableHeaderIcon--ASC': sortDirection === _SortDirection2.default.ASC,
	    'ReactVirtualized__Table__sortableHeaderIcon--DESC': sortDirection === _SortDirection2.default.DESC
	  });
	
	  return _react2.default.createElement(
	    'svg',
	    {
	      className: classNames,
	      width: 18,
	      height: 18,
	      viewBox: '0 0 24 24'
	    },
	    sortDirection === _SortDirection2.default.ASC ? _react2.default.createElement('path', { d: 'M7 14l5-5 5 5z' }) : _react2.default.createElement('path', { d: 'M7 10l5 5 5-5z' }),
	    _react2.default.createElement('path', { d: 'M0 0h24v24H0z', fill: 'none' })
	  );
	}
	
	(undefined) !== "production" ? SortIndicator.propTypes = {
	  sortDirection: _react.PropTypes.oneOf([_SortDirection2.default.ASC, _SortDirection2.default.DESC])
	} : void 0;

/***/ },

/***/ 593:
/***/ function(module, exports) {

	'use strict';
	
	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	var SortDirection = {
	  /**
	   * Sort items in ascending order.
	   * This means arranging from the lowest value to the highest (e.g. a-z, 0-9).
	   */
	  ASC: 'ASC',
	
	  /**
	   * Sort items in descending order.
	   * This means arranging from the highest value to the lowest (e.g. z-a, 9-0).
	   */
	  DESC: 'DESC'
	};
	
	exports.default = SortDirection;

/***/ },

/***/ 594:
/***/ function(module, exports) {

	'use strict';
	
	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	exports.default = defaultCellRenderer;
	
	
	/**
	 * Default cell renderer that displays an attribute as a simple string
	 * You should override the column's cellRenderer if your data is some other type of object.
	 */
	function defaultCellRenderer(_ref) {
	  var cellData = _ref.cellData,
	      cellDataKey = _ref.cellDataKey,
	      columnData = _ref.columnData,
	      rowData = _ref.rowData,
	      rowIndex = _ref.rowIndex;
	
	  if (cellData == null) {
	    return '';
	  } else {
	    return String(cellData);
	  }
	}

/***/ },

/***/ 595:
/***/ function(module, exports) {

	'use strict';
	
	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	exports.default = defaultCellDataGetter;
	
	
	/**
	 * Default accessor for returning a cell value for a given attribute.
	 * This function expects to operate on either a vanilla Object or an Immutable Map.
	 * You should override the column's cellDataGetter if your data is some other type of object.
	 */
	function defaultCellDataGetter(_ref) {
	  var columnData = _ref.columnData,
	      dataKey = _ref.dataKey,
	      rowData = _ref.rowData;
	
	  if (typeof rowData.get === 'function') {
	    return rowData.get(dataKey);
	  } else {
	    return rowData[dataKey];
	  }
	}

/***/ },

/***/ 596:
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	
	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	exports.defaultCellRangeRenderer = exports.Grid = exports.default = undefined;
	
	var _Grid2 = __webpack_require__(597);
	
	var _Grid3 = _interopRequireDefault(_Grid2);
	
	var _defaultCellRangeRenderer2 = __webpack_require__(603);
	
	var _defaultCellRangeRenderer3 = _interopRequireDefault(_defaultCellRangeRenderer2);
	
	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
	
	exports.default = _Grid3.default;
	exports.Grid = _Grid3.default;
	exports.defaultCellRangeRenderer = _defaultCellRangeRenderer3.default;

/***/ },

/***/ 597:
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	
	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	exports.DEFAULT_SCROLLING_RESET_TIME_INTERVAL = undefined;
	
	var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };
	
	var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();
	
	var _react = __webpack_require__(299);
	
	var _react2 = _interopRequireDefault(_react);
	
	var _classnames = __webpack_require__(476);
	
	var _classnames2 = _interopRequireDefault(_classnames);
	
	var _calculateSizeAndPositionDataAndUpdateScrollOffset = __webpack_require__(598);
	
	var _calculateSizeAndPositionDataAndUpdateScrollOffset2 = _interopRequireDefault(_calculateSizeAndPositionDataAndUpdateScrollOffset);
	
	var _ScalingCellSizeAndPositionManager = __webpack_require__(599);
	
	var _ScalingCellSizeAndPositionManager2 = _interopRequireDefault(_ScalingCellSizeAndPositionManager);
	
	var _createCallbackMemoizer = __webpack_require__(579);
	
	var _createCallbackMemoizer2 = _interopRequireDefault(_createCallbackMemoizer);
	
	var _defaultOverscanIndicesGetter = __webpack_require__(601);
	
	var _defaultOverscanIndicesGetter2 = _interopRequireDefault(_defaultOverscanIndicesGetter);
	
	var _updateScrollIndexHelper = __webpack_require__(602);
	
	var _updateScrollIndexHelper2 = _interopRequireDefault(_updateScrollIndexHelper);
	
	var _defaultCellRangeRenderer = __webpack_require__(603);
	
	var _defaultCellRangeRenderer2 = _interopRequireDefault(_defaultCellRangeRenderer);
	
	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
	
	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }
	
	function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }
	
	function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }
	
	/**
	 * Specifies the number of miliseconds during which to disable pointer events while a scroll is in progress.
	 * This improves performance and makes scrolling smoother.
	 */
	var DEFAULT_SCROLLING_RESET_TIME_INTERVAL = exports.DEFAULT_SCROLLING_RESET_TIME_INTERVAL = 150;
	
	/**
	 * Controls whether the Grid updates the DOM element's scrollLeft/scrollTop based on the current state or just observes it.
	 * This prevents Grid from interrupting mouse-wheel animations (see issue #2).
	 */
	var SCROLL_POSITION_CHANGE_REASONS = {
	  OBSERVED: 'observed',
	  REQUESTED: 'requested'
	};
	
	/**
	 * Renders tabular data with virtualization along the vertical and horizontal axes.
	 * Row heights and column widths must be known ahead of time and specified as properties.
	 */
	
	var Grid = function (_PureComponent) {
	  _inherits(Grid, _PureComponent);
	
	  function Grid(props, context) {
	    _classCallCheck(this, Grid);
	
	    var _this = _possibleConstructorReturn(this, (Grid.__proto__ || Object.getPrototypeOf(Grid)).call(this, props, context));
	
	    _this.state = {
	      isScrolling: false,
	      scrollDirectionHorizontal: _defaultOverscanIndicesGetter.SCROLL_DIRECTION_FORWARD,
	      scrollDirectionVertical: _defaultOverscanIndicesGetter.SCROLL_DIRECTION_FORWARD,
	      scrollLeft: 0,
	      scrollTop: 0
	    };
	
	    // Invokes onSectionRendered callback only when start/stop row or column indices change
	    _this._onGridRenderedMemoizer = (0, _createCallbackMemoizer2.default)();
	    _this._onScrollMemoizer = (0, _createCallbackMemoizer2.default)(false);
	
	    // Bind functions to instance so they don't lose context when passed around
	    _this._debounceScrollEndedCallback = _this._debounceScrollEndedCallback.bind(_this);
	    _this._invokeOnGridRenderedHelper = _this._invokeOnGridRenderedHelper.bind(_this);
	    _this._onScroll = _this._onScroll.bind(_this);
	    _this._setScrollingContainerRef = _this._setScrollingContainerRef.bind(_this);
	    _this._updateScrollLeftForScrollToColumn = _this._updateScrollLeftForScrollToColumn.bind(_this);
	    _this._updateScrollTopForScrollToRow = _this._updateScrollTopForScrollToRow.bind(_this);
	
	    _this._columnWidthGetter = _this._wrapSizeGetter(props.columnWidth);
	    _this._rowHeightGetter = _this._wrapSizeGetter(props.rowHeight);
	
	    _this._deferredInvalidateColumnIndex = null;
	    _this._deferredInvalidateRowIndex = null;
	    _this._recomputeScrollLeftFlag = false;
	    _this._recomputeScrollTopFlag = false;
	
	    var deferredMeasurementCache = props.deferredMeasurementCache;
	    var deferredMode = typeof deferredMeasurementCache !== 'undefined';
	
	    _this._columnSizeAndPositionManager = new _ScalingCellSizeAndPositionManager2.default({
	      batchAllCells: deferredMode && !deferredMeasurementCache.hasFixedHeight(),
	      cellCount: props.columnCount,
	      cellSizeGetter: function cellSizeGetter(params) {
	        return _this._columnWidthGetter(params);
	      },
	      estimatedCellSize: _this._getEstimatedColumnSize(props)
	    });
	    _this._rowSizeAndPositionManager = new _ScalingCellSizeAndPositionManager2.default({
	      batchAllCells: deferredMode && !deferredMeasurementCache.hasFixedWidth(),
	      cellCount: props.rowCount,
	      cellSizeGetter: function cellSizeGetter(params) {
	        return _this._rowHeightGetter(params);
	      },
	      estimatedCellSize: _this._getEstimatedRowSize(props)
	    });
	
	    // See defaultCellRangeRenderer() for more information on the usage of these caches
	    _this._cellCache = {};
	    _this._styleCache = {};
	    return _this;
	  }
	
	  /**
	   * Invalidate Grid size and recompute visible cells.
	   * This is a deferred wrapper for recomputeGridSize().
	   * It sets a flag to be evaluated on cDM/cDU to avoid unnecessary renders.
	   * This method is intended for advanced use-cases like CellMeasurer.
	   */
	  // @TODO (bvaughn) Add automated test coverage for this.
	
	
	  _createClass(Grid, [{
	    key: 'invalidateCellSizeAfterRender',
	    value: function invalidateCellSizeAfterRender(_ref) {
	      var columnIndex = _ref.columnIndex,
	          rowIndex = _ref.rowIndex;
	
	      this._deferredInvalidateColumnIndex = typeof this._deferredInvalidateColumnIndex === 'number' ? Math.min(this._deferredInvalidateColumnIndex, columnIndex) : columnIndex;
	      this._deferredInvalidateRowIndex = typeof this._deferredInvalidateRowIndex === 'number' ? Math.min(this._deferredInvalidateRowIndex, rowIndex) : rowIndex;
	    }
	
	    /**
	     * Pre-measure all columns and rows in a Grid.
	     * Typically cells are only measured as needed and estimated sizes are used for cells that have not yet been measured.
	     * This method ensures that the next call to getTotalSize() returns an exact size (as opposed to just an estimated one).
	     */
	
	  }, {
	    key: 'measureAllCells',
	    value: function measureAllCells() {
	      var _props = this.props,
	          columnCount = _props.columnCount,
	          rowCount = _props.rowCount;
	
	
	      this._columnSizeAndPositionManager.getSizeAndPositionOfCell(columnCount - 1);
	      this._rowSizeAndPositionManager.getSizeAndPositionOfCell(rowCount - 1);
	    }
	
	    /**
	     * Forced recompute of row heights and column widths.
	     * This function should be called if dynamic column or row sizes have changed but nothing else has.
	     * Since Grid only receives :columnCount and :rowCount it has no way of detecting when the underlying data changes.
	     */
	
	  }, {
	    key: 'recomputeGridSize',
	    value: function recomputeGridSize() {
	      var _ref2 = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {},
	          _ref2$columnIndex = _ref2.columnIndex,
	          columnIndex = _ref2$columnIndex === undefined ? 0 : _ref2$columnIndex,
	          _ref2$rowIndex = _ref2.rowIndex,
	          rowIndex = _ref2$rowIndex === undefined ? 0 : _ref2$rowIndex;
	
	      var _props2 = this.props,
	          scrollToColumn = _props2.scrollToColumn,
	          scrollToRow = _props2.scrollToRow;
	
	
	      this._columnSizeAndPositionManager.resetCell(columnIndex);
	      this._rowSizeAndPositionManager.resetCell(rowIndex);
	
	      // Cell sizes may be determined by a function property.
	      // In this case the cDU handler can't know if they changed.
	      // Store this flag to let the next cDU pass know it needs to recompute the scroll offset.
	      this._recomputeScrollLeftFlag = scrollToColumn >= 0 && columnIndex <= scrollToColumn;
	      this._recomputeScrollTopFlag = scrollToRow >= 0 && rowIndex <= scrollToRow;
	
	      // Clear cell cache in case we are scrolling;
	      // Invalid row heights likely mean invalid cached content as well.
	      this._cellCache = {};
	      this._styleCache = {};
	
	      this.forceUpdate();
	    }
	
	    /**
	     * Ensure column and row are visible.
	     */
	
	  }, {
	    key: 'scrollToCell',
	    value: function scrollToCell(_ref3) {
	      var columnIndex = _ref3.columnIndex,
	          rowIndex = _ref3.rowIndex;
	
	      var props = this.props;
	      this._updateScrollLeftForScrollToColumn(_extends({}, props, {
	        scrollToColumn: columnIndex
	      }));
	      this._updateScrollTopForScrollToRow(_extends({}, props, {
	        scrollToRow: rowIndex
	      }));
	    }
	  }, {
	    key: 'componentDidMount',
	    value: function componentDidMount() {
	      var _props3 = this.props,
	          getScrollbarSize = _props3.getScrollbarSize,
	          scrollLeft = _props3.scrollLeft,
	          scrollToColumn = _props3.scrollToColumn,
	          scrollTop = _props3.scrollTop,
	          scrollToRow = _props3.scrollToRow;
	
	      // If cell sizes have been invalidated (eg we are using CellMeasurer) then reset cached positions.
	      // We must do this at the start of the method as we may calculate and update scroll position below.
	
	      this._handleInvalidatedGridSize();
	
	      // If this component was first rendered server-side, scrollbar size will be undefined.
	      // In that event we need to remeasure.
	      if (!this._scrollbarSizeMeasured) {
	        this._scrollbarSize = getScrollbarSize();
	        this._scrollbarSizeMeasured = true;
	        this.setState({});
	      }
	
	      if (scrollLeft >= 0 || scrollTop >= 0) {
	        this._setScrollPosition({ scrollLeft: scrollLeft, scrollTop: scrollTop });
	      }
	
	      if (scrollToColumn >= 0 || scrollToRow >= 0) {
	        this._updateScrollLeftForScrollToColumn();
	        this._updateScrollTopForScrollToRow();
	      }
	
	      // Update onRowsRendered callback
	      this._invokeOnGridRenderedHelper();
	
	      // Initialize onScroll callback
	      this._invokeOnScrollMemoizer({
	        scrollLeft: scrollLeft || 0,
	        scrollTop: scrollTop || 0,
	        totalColumnsWidth: this._columnSizeAndPositionManager.getTotalSize(),
	        totalRowsHeight: this._rowSizeAndPositionManager.getTotalSize()
	      });
	    }
	
	    /**
	     * @private
	     * This method updates scrollLeft/scrollTop in state for the following conditions:
	     * 1) New scroll-to-cell props have been set
	     */
	
	  }, {
	    key: 'componentDidUpdate',
	    value: function componentDidUpdate(prevProps, prevState) {
	      var _this2 = this;
	
	      var _props4 = this.props,
	          autoHeight = _props4.autoHeight,
	          columnCount = _props4.columnCount,
	          height = _props4.height,
	          rowCount = _props4.rowCount,
	          scrollToAlignment = _props4.scrollToAlignment,
	          scrollToColumn = _props4.scrollToColumn,
	          scrollToRow = _props4.scrollToRow,
	          width = _props4.width;
	      var _state = this.state,
	          scrollLeft = _state.scrollLeft,
	          scrollPositionChangeReason = _state.scrollPositionChangeReason,
	          scrollTop = _state.scrollTop;
	
	      // If cell sizes have been invalidated (eg we are using CellMeasurer) then reset cached positions.
	      // We must do this at the start of the method as we may calculate and update scroll position below.
	
	      this._handleInvalidatedGridSize();
	
	      // Handle edge case where column or row count has only just increased over 0.
	      // In this case we may have to restore a previously-specified scroll offset.
	      // For more info see bvaughn/react-virtualized/issues/218
	      var columnOrRowCountJustIncreasedFromZero = columnCount > 0 && prevProps.columnCount === 0 || rowCount > 0 && prevProps.rowCount === 0;
	
	      // Make sure requested changes to :scrollLeft or :scrollTop get applied.
	      // Assigning to scrollLeft/scrollTop tells the browser to interrupt any running scroll animations,
	      // And to discard any pending async changes to the scroll position that may have happened in the meantime (e.g. on a separate scrolling thread).
	      // So we only set these when we require an adjustment of the scroll position.
	      // See issue #2 for more information.
	      if (scrollPositionChangeReason === SCROLL_POSITION_CHANGE_REASONS.REQUESTED) {
	        if (scrollLeft >= 0 && (scrollLeft !== prevState.scrollLeft && scrollLeft !== this._scrollingContainer.scrollLeft || columnOrRowCountJustIncreasedFromZero)) {
	          this._scrollingContainer.scrollLeft = scrollLeft;
	        }
	
	        // @TRICKY :autoHeight property instructs Grid to leave :scrollTop management to an external HOC (eg WindowScroller).
	        // In this case we should avoid checking scrollingContainer.scrollTop since it forces layout/flow.
	        if (!autoHeight && scrollTop >= 0 && (scrollTop !== prevState.scrollTop && scrollTop !== this._scrollingContainer.scrollTop || columnOrRowCountJustIncreasedFromZero)) {
	          this._scrollingContainer.scrollTop = scrollTop;
	        }
	      }
	
	      // Update scroll offsets if the current :scrollToColumn or :scrollToRow values requires it
	      // @TODO Do we also need this check or can the one in componentWillUpdate() suffice?
	      if (this._recomputeScrollLeftFlag) {
	        this._recomputeScrollLeftFlag = false;
	        this._updateScrollLeftForScrollToColumn(this.props);
	      } else {
	        (0, _updateScrollIndexHelper2.default)({
	          cellSizeAndPositionManager: this._columnSizeAndPositionManager,
	          previousCellsCount: prevProps.columnCount,
	          previousCellSize: prevProps.columnWidth,
	          previousScrollToAlignment: prevProps.scrollToAlignment,
	          previousScrollToIndex: prevProps.scrollToColumn,
	          previousSize: prevProps.width,
	          scrollOffset: scrollLeft,
	          scrollToAlignment: scrollToAlignment,
	          scrollToIndex: scrollToColumn,
	          size: width,
	          updateScrollIndexCallback: function updateScrollIndexCallback(scrollToColumn) {
	            return _this2._updateScrollLeftForScrollToColumn(_this2.props);
	          }
	        });
	      }
	
	      if (this._recomputeScrollTopFlag) {
	        this._recomputeScrollTopFlag = false;
	        this._updateScrollTopForScrollToRow(this.props);
	      } else {
	        (0, _updateScrollIndexHelper2.default)({
	          cellSizeAndPositionManager: this._rowSizeAndPositionManager,
	          previousCellsCount: prevProps.rowCount,
	          previousCellSize: prevProps.rowHeight,
	          previousScrollToAlignment: prevProps.scrollToAlignment,
	          previousScrollToIndex: prevProps.scrollToRow,
	          previousSize: prevProps.height,
	          scrollOffset: scrollTop,
	          scrollToAlignment: scrollToAlignment,
	          scrollToIndex: scrollToRow,
	          size: height,
	          updateScrollIndexCallback: function updateScrollIndexCallback(scrollToRow) {
	            return _this2._updateScrollTopForScrollToRow(_this2.props);
	          }
	        });
	      }
	
	      // Update onRowsRendered callback if start/stop indices have changed
	      this._invokeOnGridRenderedHelper();
	
	      // Changes to :scrollLeft or :scrollTop should also notify :onScroll listeners
	      if (scrollLeft !== prevState.scrollLeft || scrollTop !== prevState.scrollTop) {
	        var totalRowsHeight = this._rowSizeAndPositionManager.getTotalSize();
	        var totalColumnsWidth = this._columnSizeAndPositionManager.getTotalSize();
	
	        this._invokeOnScrollMemoizer({ scrollLeft: scrollLeft, scrollTop: scrollTop, totalColumnsWidth: totalColumnsWidth, totalRowsHeight: totalRowsHeight });
	      }
	    }
	  }, {
	    key: 'componentWillMount',
	    value: function componentWillMount() {
	      var getScrollbarSize = this.props.getScrollbarSize;
	
	      // If this component is being rendered server-side, getScrollbarSize() will return undefined.
	      // We handle this case in componentDidMount()
	
	      this._scrollbarSize = getScrollbarSize();
	      if (this._scrollbarSize === undefined) {
	        this._scrollbarSizeMeasured = false;
	        this._scrollbarSize = 0;
	      } else {
	        this._scrollbarSizeMeasured = true;
	      }
	
	      this._calculateChildrenToRender();
	    }
	  }, {
	    key: 'componentWillUnmount',
	    value: function componentWillUnmount() {
	      if (this._disablePointerEventsTimeoutId) {
	        clearTimeout(this._disablePointerEventsTimeoutId);
	      }
	    }
	
	    /**
	     * @private
	     * This method updates scrollLeft/scrollTop in state for the following conditions:
	     * 1) Empty content (0 rows or columns)
	     * 2) New scroll props overriding the current state
	     * 3) Cells-count or cells-size has changed, making previous scroll offsets invalid
	     */
	
	  }, {
	    key: 'componentWillReceiveProps',
	    value: function componentWillReceiveProps(nextProps) {
	      var _this3 = this;
	
	      var _state2 = this.state,
	          scrollLeft = _state2.scrollLeft,
	          scrollTop = _state2.scrollTop;
	
	
	      if (nextProps.columnCount === 0 && scrollLeft !== 0 || nextProps.rowCount === 0 && scrollTop !== 0) {
	        this._setScrollPosition({
	          scrollLeft: 0,
	          scrollTop: 0
	        });
	      } else if (nextProps.scrollLeft !== this.props.scrollLeft || nextProps.scrollTop !== this.props.scrollTop) {
	        var newState = {};
	
	        if (nextProps.scrollLeft != null) {
	          newState.scrollLeft = nextProps.scrollLeft;
	        }
	        if (nextProps.scrollTop != null) {
	          newState.scrollTop = nextProps.scrollTop;
	        }
	
	        this._setScrollPosition(newState);
	      }
	
	      if (nextProps.columnWidth !== this.props.columnWidth || nextProps.rowHeight !== this.props.rowHeight) {
	        this._styleCache = {};
	      }
	
	      this._columnWidthGetter = this._wrapSizeGetter(nextProps.columnWidth);
	      this._rowHeightGetter = this._wrapSizeGetter(nextProps.rowHeight);
	
	      this._columnSizeAndPositionManager.configure({
	        cellCount: nextProps.columnCount,
	        estimatedCellSize: this._getEstimatedColumnSize(nextProps)
	      });
	      this._rowSizeAndPositionManager.configure({
	        cellCount: nextProps.rowCount,
	        estimatedCellSize: this._getEstimatedRowSize(nextProps)
	      });
	
	      var _props5 = this.props,
	          columnCount = _props5.columnCount,
	          rowCount = _props5.rowCount;
	
	      // Special case when either cols or rows were 0
	      // This would prevent any cells from rendering
	      // So we need to reset row scroll if cols changed from 0 (and vice versa)
	
	      if (columnCount === 0 || rowCount === 0) {
	        columnCount = 0;
	        rowCount = 0;
	      }
	
	      // Update scroll offsets if the size or number of cells have changed, invalidating the previous value
	      (0, _calculateSizeAndPositionDataAndUpdateScrollOffset2.default)({
	        cellCount: columnCount,
	        cellSize: this.props.columnWidth,
	        computeMetadataCallback: function computeMetadataCallback() {
	          return _this3._columnSizeAndPositionManager.resetCell(0);
	        },
	        computeMetadataCallbackProps: nextProps,
	        nextCellsCount: nextProps.columnCount,
	        nextCellSize: nextProps.columnWidth,
	        nextScrollToIndex: nextProps.scrollToColumn,
	        scrollToIndex: this.props.scrollToColumn,
	        updateScrollOffsetForScrollToIndex: function updateScrollOffsetForScrollToIndex() {
	          return _this3._updateScrollLeftForScrollToColumn(nextProps, _this3.state);
	        }
	      });
	      (0, _calculateSizeAndPositionDataAndUpdateScrollOffset2.default)({
	        cellCount: rowCount,
	        cellSize: this.props.rowHeight,
	        computeMetadataCallback: function computeMetadataCallback() {
	          return _this3._rowSizeAndPositionManager.resetCell(0);
	        },
	        computeMetadataCallbackProps: nextProps,
	        nextCellsCount: nextProps.rowCount,
	        nextCellSize: nextProps.rowHeight,
	        nextScrollToIndex: nextProps.scrollToRow,
	        scrollToIndex: this.props.scrollToRow,
	        updateScrollOffsetForScrollToIndex: function updateScrollOffsetForScrollToIndex() {
	          return _this3._updateScrollTopForScrollToRow(nextProps, _this3.state);
	        }
	      });
	    }
	  }, {
	    key: 'componentWillUpdate',
	    value: function componentWillUpdate(nextProps, nextState) {
	      this._calculateChildrenToRender(nextProps, nextState);
	    }
	  }, {
	    key: 'render',
	    value: function render() {
	      var _props6 = this.props,
	          autoContainerWidth = _props6.autoContainerWidth,
	          autoHeight = _props6.autoHeight,
	          className = _props6.className,
	          containerStyle = _props6.containerStyle,
	          height = _props6.height,
	          id = _props6.id,
	          noContentRenderer = _props6.noContentRenderer,
	          style = _props6.style,
	          tabIndex = _props6.tabIndex,
	          width = _props6.width;
	      var isScrolling = this.state.isScrolling;
	
	
	      var gridStyle = {
	        boxSizing: 'border-box',
	        direction: 'ltr',
	        height: autoHeight ? 'auto' : height,
	        position: 'relative',
	        width: width,
	        WebkitOverflowScrolling: 'touch',
	        willChange: 'transform'
	      };
	
	      var totalColumnsWidth = this._columnSizeAndPositionManager.getTotalSize();
	      var totalRowsHeight = this._rowSizeAndPositionManager.getTotalSize();
	
	      // Force browser to hide scrollbars when we know they aren't necessary.
	      // Otherwise once scrollbars appear they may not disappear again.
	      // For more info see issue #116
	      var verticalScrollBarSize = totalRowsHeight > height ? this._scrollbarSize : 0;
	      var horizontalScrollBarSize = totalColumnsWidth > width ? this._scrollbarSize : 0;
	
	      // Also explicitly init styles to 'auto' if scrollbars are required.
	      // This works around an obscure edge case where external CSS styles have not yet been loaded,
	      // But an initial scroll index of offset is set as an external prop.
	      // Without this style, Grid would render the correct range of cells but would NOT update its internal offset.
	      // This was originally reported via clauderic/react-infinite-calendar/issues/23
	      gridStyle.overflowX = totalColumnsWidth + verticalScrollBarSize <= width ? 'hidden' : 'auto';
	      gridStyle.overflowY = totalRowsHeight + horizontalScrollBarSize <= height ? 'hidden' : 'auto';
	
	      var childrenToDisplay = this._childrenToDisplay;
	
	      var showNoContentRenderer = childrenToDisplay.length === 0 && height > 0 && width > 0;
	
	      return _react2.default.createElement(
	        'div',
	        {
	          ref: this._setScrollingContainerRef,
	          'aria-label': this.props['aria-label'],
	          className: (0, _classnames2.default)('ReactVirtualized__Grid', className),
	          id: id,
	          onScroll: this._onScroll,
	          role: 'grid',
	          style: _extends({}, gridStyle, style),
	          tabIndex: tabIndex
	        },
	        childrenToDisplay.length > 0 && _react2.default.createElement(
	          'div',
	          {
	            className: 'ReactVirtualized__Grid__innerScrollContainer',
	            style: _extends({
	              width: autoContainerWidth ? 'auto' : totalColumnsWidth,
	              height: totalRowsHeight,
	              maxWidth: totalColumnsWidth,
	              maxHeight: totalRowsHeight,
	              overflow: 'hidden',
	              pointerEvents: isScrolling ? 'none' : ''
	            }, containerStyle)
	          },
	          childrenToDisplay
	        ),
	        showNoContentRenderer && noContentRenderer()
	      );
	    }
	
	    /* ---------------------------- Helper methods ---------------------------- */
	
	  }, {
	    key: '_calculateChildrenToRender',
	    value: function _calculateChildrenToRender() {
	      var props = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : this.props;
	      var state = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : this.state;
	      var cellRenderer = props.cellRenderer,
	          cellRangeRenderer = props.cellRangeRenderer,
	          columnCount = props.columnCount,
	          deferredMeasurementCache = props.deferredMeasurementCache,
	          height = props.height,
	          overscanColumnCount = props.overscanColumnCount,
	          overscanIndicesGetter = props.overscanIndicesGetter,
	          overscanRowCount = props.overscanRowCount,
	          rowCount = props.rowCount,
	          width = props.width;
	      var isScrolling = state.isScrolling,
	          scrollDirectionHorizontal = state.scrollDirectionHorizontal,
	          scrollDirectionVertical = state.scrollDirectionVertical,
	          scrollLeft = state.scrollLeft,
	          scrollTop = state.scrollTop;
	
	
	      this._childrenToDisplay = [];
	
	      // Render only enough columns and rows to cover the visible area of the grid.
	      if (height > 0 && width > 0) {
	        var visibleColumnIndices = this._columnSizeAndPositionManager.getVisibleCellRange({
	          containerSize: width,
	          offset: scrollLeft
	        });
	        var visibleRowIndices = this._rowSizeAndPositionManager.getVisibleCellRange({
	          containerSize: height,
	          offset: scrollTop
	        });
	
	        var horizontalOffsetAdjustment = this._columnSizeAndPositionManager.getOffsetAdjustment({
	          containerSize: width,
	          offset: scrollLeft
	        });
	        var verticalOffsetAdjustment = this._rowSizeAndPositionManager.getOffsetAdjustment({
	          containerSize: height,
	          offset: scrollTop
	        });
	
	        // Store for _invokeOnGridRenderedHelper()
	        this._renderedColumnStartIndex = visibleColumnIndices.start;
	        this._renderedColumnStopIndex = visibleColumnIndices.stop;
	        this._renderedRowStartIndex = visibleRowIndices.start;
	        this._renderedRowStopIndex = visibleRowIndices.stop;
	
	        var overscanColumnIndices = overscanIndicesGetter({
	          cellCount: columnCount,
	          overscanCellsCount: overscanColumnCount,
	          scrollDirection: scrollDirectionHorizontal,
	          startIndex: this._renderedColumnStartIndex,
	          stopIndex: this._renderedColumnStopIndex
	        });
	
	        var overscanRowIndices = overscanIndicesGetter({
	          cellCount: rowCount,
	          overscanCellsCount: overscanRowCount,
	          scrollDirection: scrollDirectionVertical,
	          startIndex: this._renderedRowStartIndex,
	          stopIndex: this._renderedRowStopIndex
	        });
	
	        // Store for _invokeOnGridRenderedHelper()
	        this._columnStartIndex = overscanColumnIndices.overscanStartIndex;
	        this._columnStopIndex = overscanColumnIndices.overscanStopIndex;
	        this._rowStartIndex = overscanRowIndices.overscanStartIndex;
	        this._rowStopIndex = overscanRowIndices.overscanStopIndex;
	
	        this._childrenToDisplay = cellRangeRenderer({
	          cellCache: this._cellCache,
	          cellRenderer: cellRenderer,
	          columnSizeAndPositionManager: this._columnSizeAndPositionManager,
	          columnStartIndex: this._columnStartIndex,
	          columnStopIndex: this._columnStopIndex,
	          deferredMeasurementCache: deferredMeasurementCache,
	          horizontalOffsetAdjustment: horizontalOffsetAdjustment,
	          isScrolling: isScrolling,
	          parent: this,
	          rowSizeAndPositionManager: this._rowSizeAndPositionManager,
	          rowStartIndex: this._rowStartIndex,
	          rowStopIndex: this._rowStopIndex,
	          scrollLeft: scrollLeft,
	          scrollTop: scrollTop,
	          styleCache: this._styleCache,
	          verticalOffsetAdjustment: verticalOffsetAdjustment,
	          visibleColumnIndices: visibleColumnIndices,
	          visibleRowIndices: visibleRowIndices
	        });
	      }
	    }
	
	    /**
	     * Sets an :isScrolling flag for a small window of time.
	     * This flag is used to disable pointer events on the scrollable portion of the Grid.
	     * This prevents jerky/stuttery mouse-wheel scrolling.
	     */
	
	  }, {
	    key: '_debounceScrollEnded',
	    value: function _debounceScrollEnded() {
	      var scrollingResetTimeInterval = this.props.scrollingResetTimeInterval;
	
	
	      if (this._disablePointerEventsTimeoutId) {
	        clearTimeout(this._disablePointerEventsTimeoutId);
	      }
	
	      this._disablePointerEventsTimeoutId = setTimeout(this._debounceScrollEndedCallback, scrollingResetTimeInterval);
	    }
	  }, {
	    key: '_debounceScrollEndedCallback',
	    value: function _debounceScrollEndedCallback() {
	      this._disablePointerEventsTimeoutId = null;
	
	      var styleCache = this._styleCache;
	
	      // Reset cell and style caches once scrolling stops.
	      // This makes Grid simpler to use (since cells commonly change).
	      // And it keeps the caches from growing too large.
	      // Performance is most sensitive when a user is scrolling.
	      this._cellCache = {};
	      this._styleCache = {};
	
	      // Copy over the visible cell styles so avoid unnecessary re-render.
	      for (var rowIndex = this._rowStartIndex; rowIndex <= this._rowStopIndex; rowIndex++) {
	        for (var columnIndex = this._columnStartIndex; columnIndex <= this._columnStopIndex; columnIndex++) {
	          var key = rowIndex + '-' + columnIndex;
	          this._styleCache[key] = styleCache[key];
	        }
	      }
	
	      this.setState({
	        isScrolling: false
	      });
	    }
	  }, {
	    key: '_getEstimatedColumnSize',
	    value: function _getEstimatedColumnSize(props) {
	      return typeof props.columnWidth === 'number' ? props.columnWidth : props.estimatedColumnSize;
	    }
	  }, {
	    key: '_getEstimatedRowSize',
	    value: function _getEstimatedRowSize(props) {
	      return typeof props.rowHeight === 'number' ? props.rowHeight : props.estimatedRowSize;
	    }
	
	    /**
	     * Check for batched CellMeasurer size invalidations.
	     * This will occur the first time one or more previously unmeasured cells are rendered.
	     */
	
	  }, {
	    key: '_handleInvalidatedGridSize',
	    value: function _handleInvalidatedGridSize() {
	      if (typeof this._deferredInvalidateColumnIndex === 'number') {
	        var columnIndex = this._deferredInvalidateColumnIndex;
	        var rowIndex = this._deferredInvalidateRowIndex;
	
	        delete this._deferredInvalidateColumnIndex;
	        delete this._deferredInvalidateRowIndex;
	
	        this.recomputeGridSize({ columnIndex: columnIndex, rowIndex: rowIndex });
	      }
	    }
	  }, {
	    key: '_invokeOnGridRenderedHelper',
	    value: function _invokeOnGridRenderedHelper() {
	      var onSectionRendered = this.props.onSectionRendered;
	
	
	      this._onGridRenderedMemoizer({
	        callback: onSectionRendered,
	        indices: {
	          columnOverscanStartIndex: this._columnStartIndex,
	          columnOverscanStopIndex: this._columnStopIndex,
	          columnStartIndex: this._renderedColumnStartIndex,
	          columnStopIndex: this._renderedColumnStopIndex,
	          rowOverscanStartIndex: this._rowStartIndex,
	          rowOverscanStopIndex: this._rowStopIndex,
	          rowStartIndex: this._renderedRowStartIndex,
	          rowStopIndex: this._renderedRowStopIndex
	        }
	      });
	    }
	  }, {
	    key: '_invokeOnScrollMemoizer',
	    value: function _invokeOnScrollMemoizer(_ref4) {
	      var _this4 = this;
	
	      var scrollLeft = _ref4.scrollLeft,
	          scrollTop = _ref4.scrollTop,
	          totalColumnsWidth = _ref4.totalColumnsWidth,
	          totalRowsHeight = _ref4.totalRowsHeight;
	
	      this._onScrollMemoizer({
	        callback: function callback(_ref5) {
	          var scrollLeft = _ref5.scrollLeft,
	              scrollTop = _ref5.scrollTop;
	          var _props7 = _this4.props,
	              height = _props7.height,
	              onScroll = _props7.onScroll,
	              width = _props7.width;
	
	
	          onScroll({
	            clientHeight: height,
	            clientWidth: width,
	            scrollHeight: totalRowsHeight,
	            scrollLeft: scrollLeft,
	            scrollTop: scrollTop,
	            scrollWidth: totalColumnsWidth
	          });
	        },
	        indices: {
	          scrollLeft: scrollLeft,
	          scrollTop: scrollTop
	        }
	      });
	    }
	  }, {
	    key: '_setScrollingContainerRef',
	    value: function _setScrollingContainerRef(ref) {
	      this._scrollingContainer = ref;
	    }
	  }, {
	    key: '_setScrollPosition',
	    value: function _setScrollPosition(_ref6) {
	      var scrollLeft = _ref6.scrollLeft,
	          scrollTop = _ref6.scrollTop;
	
	      var newState = {
	        scrollPositionChangeReason: SCROLL_POSITION_CHANGE_REASONS.REQUESTED
	      };
	
	      if (scrollLeft >= 0) {
	        newState.scrollDirectionHorizontal = scrollLeft > this.state.scrollLeft ? _defaultOverscanIndicesGetter.SCROLL_DIRECTION_FORWARD : _defaultOverscanIndicesGetter.SCROLL_DIRECTION_BACKWARD;
	        newState.scrollLeft = scrollLeft;
	      }
	
	      if (scrollTop >= 0) {
	        newState.scrollDirectionVertical = scrollTop > this.state.scrollTop ? _defaultOverscanIndicesGetter.SCROLL_DIRECTION_FORWARD : _defaultOverscanIndicesGetter.SCROLL_DIRECTION_BACKWARD;
	        newState.scrollTop = scrollTop;
	      }
	
	      if (scrollLeft >= 0 && scrollLeft !== this.state.scrollLeft || scrollTop >= 0 && scrollTop !== this.state.scrollTop) {
	        this.setState(newState);
	      }
	    }
	  }, {
	    key: '_wrapPropertyGetter',
	    value: function _wrapPropertyGetter(value) {
	      return typeof value === 'function' ? value : function () {
	        return value;
	      };
	    }
	  }, {
	    key: '_wrapSizeGetter',
	    value: function _wrapSizeGetter(size) {
	      return this._wrapPropertyGetter(size);
	    }
	  }, {
	    key: '_updateScrollLeftForScrollToColumn',
	    value: function _updateScrollLeftForScrollToColumn() {
	      var props = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : this.props;
	      var state = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : this.state;
	      var columnCount = props.columnCount,
	          height = props.height,
	          scrollToAlignment = props.scrollToAlignment,
	          scrollToColumn = props.scrollToColumn,
	          width = props.width;
	      var scrollLeft = state.scrollLeft;
	
	
	      if (scrollToColumn >= 0 && columnCount > 0) {
	        var targetIndex = Math.max(0, Math.min(columnCount - 1, scrollToColumn));
	        var totalRowsHeight = this._rowSizeAndPositionManager.getTotalSize();
	        var scrollBarSize = totalRowsHeight > height ? this._scrollbarSize : 0;
	
	        var calculatedScrollLeft = this._columnSizeAndPositionManager.getUpdatedOffsetForIndex({
	          align: scrollToAlignment,
	          containerSize: width - scrollBarSize,
	          currentOffset: scrollLeft,
	          targetIndex: targetIndex
	        });
	
	        if (scrollLeft !== calculatedScrollLeft) {
	          this._setScrollPosition({
	            scrollLeft: calculatedScrollLeft
	          });
	        }
	      }
	    }
	  }, {
	    key: '_updateScrollTopForScrollToRow',
	    value: function _updateScrollTopForScrollToRow() {
	      var props = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : this.props;
	      var state = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : this.state;
	      var height = props.height,
	          rowCount = props.rowCount,
	          scrollToAlignment = props.scrollToAlignment,
	          scrollToRow = props.scrollToRow,
	          width = props.width;
	      var scrollTop = state.scrollTop;
	
	
	      if (scrollToRow >= 0 && rowCount > 0) {
	        var targetIndex = Math.max(0, Math.min(rowCount - 1, scrollToRow));
	        var totalColumnsWidth = this._columnSizeAndPositionManager.getTotalSize();
	        var scrollBarSize = totalColumnsWidth > width ? this._scrollbarSize : 0;
	
	        var calculatedScrollTop = this._rowSizeAndPositionManager.getUpdatedOffsetForIndex({
	          align: scrollToAlignment,
	          containerSize: height - scrollBarSize,
	          currentOffset: scrollTop,
	          targetIndex: targetIndex
	        });
	
	        if (scrollTop !== calculatedScrollTop) {
	          this._setScrollPosition({
	            scrollTop: calculatedScrollTop
	          });
	        }
	      }
	    }
	  }, {
	    key: '_onScroll',
	    value: function _onScroll(event) {
	      // In certain edge-cases React dispatches an onScroll event with an invalid target.scrollLeft / target.scrollTop.
	      // This invalid event can be detected by comparing event.target to this component's scrollable DOM element.
	      // See issue #404 for more information.
	      if (event.target !== this._scrollingContainer) {
	        return;
	      }
	
	      // On iOS, we can arrive at negative offsets by swiping past the start
	      // To prevent flicker here, we make playing in the negative offset zone cause nothing to happen.
	      if (event.target.scrollTop < 0) {
	        return;
	      }
	
	      // Prevent pointer events from interrupting a smooth scroll
	      this._debounceScrollEnded();
	
	      // When this component is shrunk drastically, React dispatches a series of back-to-back scroll events,
	      // Gradually converging on a scrollTop that is within the bounds of the new, smaller height.
	      // This causes a series of rapid renders that is slow for long lists.
	      // We can avoid that by doing some simple bounds checking to ensure that scrollTop never exceeds the total height.
	      var _props8 = this.props,
	          autoHeight = _props8.autoHeight,
	          height = _props8.height,
	          width = _props8.width;
	
	      var scrollbarSize = this._scrollbarSize;
	      var totalRowsHeight = this._rowSizeAndPositionManager.getTotalSize();
	      var totalColumnsWidth = this._columnSizeAndPositionManager.getTotalSize();
	      var scrollLeft = Math.min(Math.max(0, totalColumnsWidth - width + scrollbarSize), event.target.scrollLeft);
	      var scrollTop = Math.min(Math.max(0, totalRowsHeight - height + scrollbarSize), event.target.scrollTop);
	
	      // Certain devices (like Apple touchpad) rapid-fire duplicate events.
	      // Don't force a re-render if this is the case.
	      // The mouse may move faster then the animation frame does.
	      // Use requestAnimationFrame to avoid over-updating.
	      if (this.state.scrollLeft !== scrollLeft || this.state.scrollTop !== scrollTop) {
	        // Track scrolling direction so we can more efficiently overscan rows to reduce empty space around the edges while scrolling.
	        var scrollDirectionHorizontal = scrollLeft > this.state.scrollLeft ? _defaultOverscanIndicesGetter.SCROLL_DIRECTION_FORWARD : _defaultOverscanIndicesGetter.SCROLL_DIRECTION_BACKWARD;
	        var scrollDirectionVertical = scrollTop > this.state.scrollTop ? _defaultOverscanIndicesGetter.SCROLL_DIRECTION_FORWARD : _defaultOverscanIndicesGetter.SCROLL_DIRECTION_BACKWARD;
	
	        var newState = {
	          isScrolling: true,
	          scrollDirectionHorizontal: scrollDirectionHorizontal,
	          scrollDirectionVertical: scrollDirectionVertical,
	          scrollLeft: scrollLeft,
	          scrollPositionChangeReason: SCROLL_POSITION_CHANGE_REASONS.OBSERVED
	        };
	
	        if (!autoHeight) {
	          newState.scrollTop = scrollTop;
	        }
	
	        this.setState(newState);
	      }
	
	      this._invokeOnScrollMemoizer({ scrollLeft: scrollLeft, scrollTop: scrollTop, totalColumnsWidth: totalColumnsWidth, totalRowsHeight: totalRowsHeight });
	    }
	  }]);
	
	  return Grid;
	}(_react.PureComponent);
	
	Grid.defaultProps = {
	  'aria-label': 'grid',
	  cellRangeRenderer: _defaultCellRangeRenderer2.default,
	  estimatedColumnSize: 100,
	  estimatedRowSize: 30,
	  getScrollbarSize: __webpack_require__(580),
	  noContentRenderer: function noContentRenderer() {
	    return null;
	  },
	  onScroll: function onScroll() {
	    return null;
	  },
	  onSectionRendered: function onSectionRendered() {
	    return null;
	  },
	  overscanColumnCount: 0,
	  overscanIndicesGetter: _defaultOverscanIndicesGetter2.default,
	  overscanRowCount: 10,
	  scrollingResetTimeInterval: DEFAULT_SCROLLING_RESET_TIME_INTERVAL,
	  scrollToAlignment: 'auto',
	  scrollToColumn: -1,
	  scrollToRow: -1,
	  style: {},
	  tabIndex: 0
	};
	exports.default = Grid;
	(undefined) !== "production" ? Grid.propTypes = {
	  'aria-label': _react.PropTypes.string,
	
	  /**
	   * Set the width of the inner scrollable container to 'auto'.
	   * This is useful for single-column Grids to ensure that the column doesn't extend below a vertical scrollbar.
	   */
	  autoContainerWidth: _react.PropTypes.bool,
	
	  /**
	   * Removes fixed height from the scrollingContainer so that the total height
	   * of rows can stretch the window. Intended for use with WindowScroller
	   */
	  autoHeight: _react.PropTypes.bool,
	
	  /**
	   * Responsible for rendering a cell given an row and column index.
	   * Should implement the following interface: ({ columnIndex: number, rowIndex: number }): PropTypes.node
	   */
	  cellRenderer: _react.PropTypes.func.isRequired,
	
	  /**
	   * Responsible for rendering a group of cells given their index ranges.
	   * Should implement the following interface: ({
	   *   cellCache: Map,
	   *   cellRenderer: Function,
	   *   columnSizeAndPositionManager: CellSizeAndPositionManager,
	   *   columnStartIndex: number,
	   *   columnStopIndex: number,
	   *   isScrolling: boolean,
	   *   rowSizeAndPositionManager: CellSizeAndPositionManager,
	   *   rowStartIndex: number,
	   *   rowStopIndex: number,
	   *   scrollLeft: number,
	   *   scrollTop: number
	   * }): Array<PropTypes.node>
	   */
	  cellRangeRenderer: _react.PropTypes.func.isRequired,
	
	  /**
	   * Optional custom CSS class name to attach to root Grid element.
	   */
	  className: _react.PropTypes.string,
	
	  /**
	   * Number of columns in grid.
	   */
	  columnCount: _react.PropTypes.number.isRequired,
	
	  /**
	   * Either a fixed column width (number) or a function that returns the width of a column given its index.
	   * Should implement the following interface: (index: number): number
	   */
	  columnWidth: _react.PropTypes.oneOfType([_react.PropTypes.number, _react.PropTypes.func]).isRequired,
	
	  /** Optional inline style applied to inner cell-container */
	  containerStyle: _react.PropTypes.object,
	
	  /**
	   * If CellMeasurer is used to measure this Grid's children, this should be a pointer to its CellMeasurerCache.
	   * A shared CellMeasurerCache reference enables Grid and CellMeasurer to share measurement data.
	   */
	  deferredMeasurementCache: _react.PropTypes.object,
	
	  /**
	   * Used to estimate the total width of a Grid before all of its columns have actually been measured.
	   * The estimated total width is adjusted as columns are rendered.
	   */
	  estimatedColumnSize: _react.PropTypes.number.isRequired,
	
	  /**
	   * Used to estimate the total height of a Grid before all of its rows have actually been measured.
	   * The estimated total height is adjusted as rows are rendered.
	   */
	  estimatedRowSize: _react.PropTypes.number.isRequired,
	
	  /**
	   * Exposed for testing purposes only.
	   */
	  getScrollbarSize: _react.PropTypes.func.isRequired,
	
	  /**
	   * Height of Grid; this property determines the number of visible (vs virtualized) rows.
	   */
	  height: _react.PropTypes.number.isRequired,
	
	  /**
	   * Optional custom id to attach to root Grid element.
	   */
	  id: _react.PropTypes.string,
	
	  /**
	   * Optional renderer to be used in place of rows when either :rowCount or :columnCount is 0.
	   */
	  noContentRenderer: _react.PropTypes.func.isRequired,
	
	  /**
	   * Callback invoked whenever the scroll offset changes within the inner scrollable region.
	   * This callback can be used to sync scrolling between lists, tables, or grids.
	   * ({ clientHeight, clientWidth, scrollHeight, scrollLeft, scrollTop, scrollWidth }): void
	   */
	  onScroll: _react.PropTypes.func.isRequired,
	
	  /**
	   * Callback invoked with information about the section of the Grid that was just rendered.
	   * ({ columnStartIndex, columnStopIndex, rowStartIndex, rowStopIndex }): void
	   */
	  onSectionRendered: _react.PropTypes.func.isRequired,
	
	  /**
	   * Number of columns to render before/after the visible section of the grid.
	   * These columns can help for smoother scrolling on touch devices or browsers that send scroll events infrequently.
	   */
	  overscanColumnCount: _react.PropTypes.number.isRequired,
	
	  /**
	   * Calculates the number of cells to overscan before and after a specified range.
	   * This function ensures that overscanning doesn't exceed the available cells.
	   * Should implement the following interface: ({
	   *   cellCount: number,
	   *   overscanCellsCount: number,
	   *   scrollDirection: number,
	   *   startIndex: number,
	   *   stopIndex: number
	   * }): {overscanStartIndex: number, overscanStopIndex: number}
	   */
	  overscanIndicesGetter: _react.PropTypes.func.isRequired,
	
	  /**
	   * Number of rows to render above/below the visible section of the grid.
	   * These rows can help for smoother scrolling on touch devices or browsers that send scroll events infrequently.
	   */
	  overscanRowCount: _react.PropTypes.number.isRequired,
	
	  /**
	   * Either a fixed row height (number) or a function that returns the height of a row given its index.
	   * Should implement the following interface: ({ index: number }): number
	   */
	  rowHeight: _react.PropTypes.oneOfType([_react.PropTypes.number, _react.PropTypes.func]).isRequired,
	
	  /**
	   * Number of rows in grid.
	   */
	  rowCount: _react.PropTypes.number.isRequired,
	
	  /** Wait this amount of time after the last scroll event before resetting Grid `pointer-events`. */
	  scrollingResetTimeInterval: _react.PropTypes.number,
	
	  /** Horizontal offset. */
	  scrollLeft: _react.PropTypes.number,
	
	  /**
	   * Controls scroll-to-cell behavior of the Grid.
	   * The default ("auto") scrolls the least amount possible to ensure that the specified cell is fully visible.
	   * Use "start" to align cells to the top/left of the Grid and "end" to align bottom/right.
	   */
	  scrollToAlignment: _react.PropTypes.oneOf(['auto', 'end', 'start', 'center']).isRequired,
	
	  /**
	   * Column index to ensure visible (by forcefully scrolling if necessary)
	   */
	  scrollToColumn: _react.PropTypes.number.isRequired,
	
	  /** Vertical offset. */
	  scrollTop: _react.PropTypes.number,
	
	  /**
	   * Row index to ensure visible (by forcefully scrolling if necessary)
	   */
	  scrollToRow: _react.PropTypes.number.isRequired,
	
	  /** Optional inline style */
	  style: _react.PropTypes.object,
	
	  /** Tab index for focus */
	  tabIndex: _react.PropTypes.number,
	
	  /**
	   * Width of Grid; this property determines the number of visible (vs virtualized) columns.
	   */
	  width: _react.PropTypes.number.isRequired
	} : void 0;

/***/ },

/***/ 598:
/***/ function(module, exports) {

	'use strict';
	
	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	exports.default = calculateSizeAndPositionDataAndUpdateScrollOffset;
	/**
	 * Helper method that determines when to recalculate row or column metadata.
	 *
	 * @param cellCount Number of rows or columns in the current axis
	 * @param cellsSize Width or height of cells for the current axis
	 * @param computeMetadataCallback Method to invoke if cell metadata should be recalculated
	 * @param computeMetadataCallbackProps Parameters to pass to :computeMetadataCallback
	 * @param nextCellsCount Newly updated number of rows or columns in the current axis
	 * @param nextCellsSize Newly updated width or height of cells for the current axis
	 * @param nextScrollToIndex Newly updated scroll-to-index
	 * @param scrollToIndex Scroll-to-index
	 * @param updateScrollOffsetForScrollToIndex Callback to invoke if the scroll position should be recalculated
	 */
	function calculateSizeAndPositionDataAndUpdateScrollOffset(_ref) {
	  var cellCount = _ref.cellCount,
	      cellSize = _ref.cellSize,
	      computeMetadataCallback = _ref.computeMetadataCallback,
	      computeMetadataCallbackProps = _ref.computeMetadataCallbackProps,
	      nextCellsCount = _ref.nextCellsCount,
	      nextCellSize = _ref.nextCellSize,
	      nextScrollToIndex = _ref.nextScrollToIndex,
	      scrollToIndex = _ref.scrollToIndex,
	      updateScrollOffsetForScrollToIndex = _ref.updateScrollOffsetForScrollToIndex;
	
	  // Don't compare cell sizes if they are functions because inline functions would cause infinite loops.
	  // In that event users should use the manual recompute methods to inform of changes.
	  if (cellCount !== nextCellsCount || (typeof cellSize === 'number' || typeof nextCellSize === 'number') && cellSize !== nextCellSize) {
	    computeMetadataCallback(computeMetadataCallbackProps);
	
	    // Updated cell metadata may have hidden the previous scrolled-to item.
	    // In this case we should also update the scrollTop to ensure it stays visible.
	    if (scrollToIndex >= 0 && scrollToIndex === nextScrollToIndex) {
	      updateScrollOffsetForScrollToIndex();
	    }
	  }
	}

/***/ },

/***/ 599:
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	
	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	exports.DEFAULT_MAX_SCROLL_SIZE = undefined;
	
	var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();
	
	var _CellSizeAndPositionManager = __webpack_require__(600);
	
	var _CellSizeAndPositionManager2 = _interopRequireDefault(_CellSizeAndPositionManager);
	
	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
	
	function _objectWithoutProperties(obj, keys) { var target = {}; for (var i in obj) { if (keys.indexOf(i) >= 0) continue; if (!Object.prototype.hasOwnProperty.call(obj, i)) continue; target[i] = obj[i]; } return target; }
	
	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }
	
	/**
	 * Browsers have scroll offset limitations (eg Chrome stops scrolling at ~33.5M pixels where as Edge tops out at ~1.5M pixels).
	 * After a certain position, the browser won't allow the user to scroll further (even via JavaScript scroll offset adjustments).
	 * This util picks a lower ceiling for max size and artificially adjusts positions within to make it transparent for users.
	 */
	var DEFAULT_MAX_SCROLL_SIZE = exports.DEFAULT_MAX_SCROLL_SIZE = 1500000;
	
	/**
	 * Extends CellSizeAndPositionManager and adds scaling behavior for lists that are too large to fit within a browser's native limits.
	 */
	
	var ScalingCellSizeAndPositionManager = function () {
	  function ScalingCellSizeAndPositionManager(_ref) {
	    var _ref$maxScrollSize = _ref.maxScrollSize,
	        maxScrollSize = _ref$maxScrollSize === undefined ? DEFAULT_MAX_SCROLL_SIZE : _ref$maxScrollSize,
	        params = _objectWithoutProperties(_ref, ['maxScrollSize']);
	
	    _classCallCheck(this, ScalingCellSizeAndPositionManager);
	
	    // Favor composition over inheritance to simplify IE10 support
	    this._cellSizeAndPositionManager = new _CellSizeAndPositionManager2.default(params);
	    this._maxScrollSize = maxScrollSize;
	  }
	
	  _createClass(ScalingCellSizeAndPositionManager, [{
	    key: 'areOffsetsAdjusted',
	    value: function areOffsetsAdjusted() {
	      return this._cellSizeAndPositionManager.getTotalSize() > this._maxScrollSize;
	    }
	  }, {
	    key: 'configure',
	    value: function configure(params) {
	      this._cellSizeAndPositionManager.configure(params);
	    }
	  }, {
	    key: 'getCellCount',
	    value: function getCellCount() {
	      return this._cellSizeAndPositionManager.getCellCount();
	    }
	  }, {
	    key: 'getEstimatedCellSize',
	    value: function getEstimatedCellSize() {
	      return this._cellSizeAndPositionManager.getEstimatedCellSize();
	    }
	  }, {
	    key: 'getLastMeasuredIndex',
	    value: function getLastMeasuredIndex() {
	      return this._cellSizeAndPositionManager.getLastMeasuredIndex();
	    }
	
	    /**
	     * Number of pixels a cell at the given position (offset) should be shifted in order to fit within the scaled container.
	     * The offset passed to this function is scalled (safe) as well.
	     */
	
	  }, {
	    key: 'getOffsetAdjustment',
	    value: function getOffsetAdjustment(_ref2) {
	      var containerSize = _ref2.containerSize,
	          offset = _ref2.offset;
	
	      var totalSize = this._cellSizeAndPositionManager.getTotalSize();
	      var safeTotalSize = this.getTotalSize();
	      var offsetPercentage = this._getOffsetPercentage({
	        containerSize: containerSize,
	        offset: offset,
	        totalSize: safeTotalSize
	      });
	
	      return Math.round(offsetPercentage * (safeTotalSize - totalSize));
	    }
	  }, {
	    key: 'getSizeAndPositionOfCell',
	    value: function getSizeAndPositionOfCell(index) {
	      return this._cellSizeAndPositionManager.getSizeAndPositionOfCell(index);
	    }
	  }, {
	    key: 'getSizeAndPositionOfLastMeasuredCell',
	    value: function getSizeAndPositionOfLastMeasuredCell() {
	      return this._cellSizeAndPositionManager.getSizeAndPositionOfLastMeasuredCell();
	    }
	
	    /** See CellSizeAndPositionManager#getTotalSize */
	
	  }, {
	    key: 'getTotalSize',
	    value: function getTotalSize() {
	      return Math.min(this._maxScrollSize, this._cellSizeAndPositionManager.getTotalSize());
	    }
	
	    /** See CellSizeAndPositionManager#getUpdatedOffsetForIndex */
	
	  }, {
	    key: 'getUpdatedOffsetForIndex',
	    value: function getUpdatedOffsetForIndex(_ref3) {
	      var _ref3$align = _ref3.align,
	          align = _ref3$align === undefined ? 'auto' : _ref3$align,
	          containerSize = _ref3.containerSize,
	          currentOffset = _ref3.currentOffset,
	          targetIndex = _ref3.targetIndex,
	          totalSize = _ref3.totalSize;
	
	      currentOffset = this._safeOffsetToOffset({
	        containerSize: containerSize,
	        offset: currentOffset
	      });
	
	      var offset = this._cellSizeAndPositionManager.getUpdatedOffsetForIndex({
	        align: align,
	        containerSize: containerSize,
	        currentOffset: currentOffset,
	        targetIndex: targetIndex,
	        totalSize: totalSize
	      });
	
	      return this._offsetToSafeOffset({
	        containerSize: containerSize,
	        offset: offset
	      });
	    }
	
	    /** See CellSizeAndPositionManager#getVisibleCellRange */
	
	  }, {
	    key: 'getVisibleCellRange',
	    value: function getVisibleCellRange(_ref4) {
	      var containerSize = _ref4.containerSize,
	          offset = _ref4.offset;
	
	      offset = this._safeOffsetToOffset({
	        containerSize: containerSize,
	        offset: offset
	      });
	
	      return this._cellSizeAndPositionManager.getVisibleCellRange({
	        containerSize: containerSize,
	        offset: offset
	      });
	    }
	  }, {
	    key: 'resetCell',
	    value: function resetCell(index) {
	      this._cellSizeAndPositionManager.resetCell(index);
	    }
	  }, {
	    key: '_getOffsetPercentage',
	    value: function _getOffsetPercentage(_ref5) {
	      var containerSize = _ref5.containerSize,
	          offset = _ref5.offset,
	          totalSize = _ref5.totalSize;
	
	      return totalSize <= containerSize ? 0 : offset / (totalSize - containerSize);
	    }
	  }, {
	    key: '_offsetToSafeOffset',
	    value: function _offsetToSafeOffset(_ref6) {
	      var containerSize = _ref6.containerSize,
	          offset = _ref6.offset;
	
	      var totalSize = this._cellSizeAndPositionManager.getTotalSize();
	      var safeTotalSize = this.getTotalSize();
	
	      if (totalSize === safeTotalSize) {
	        return offset;
	      } else {
	        var offsetPercentage = this._getOffsetPercentage({
	          containerSize: containerSize,
	          offset: offset,
	          totalSize: totalSize
	        });
	
	        return Math.round(offsetPercentage * (safeTotalSize - containerSize));
	      }
	    }
	  }, {
	    key: '_safeOffsetToOffset',
	    value: function _safeOffsetToOffset(_ref7) {
	      var containerSize = _ref7.containerSize,
	          offset = _ref7.offset;
	
	      var totalSize = this._cellSizeAndPositionManager.getTotalSize();
	      var safeTotalSize = this.getTotalSize();
	
	      if (totalSize === safeTotalSize) {
	        return offset;
	      } else {
	        var offsetPercentage = this._getOffsetPercentage({
	          containerSize: containerSize,
	          offset: offset,
	          totalSize: safeTotalSize
	        });
	
	        return Math.round(offsetPercentage * (totalSize - containerSize));
	      }
	    }
	  }]);
	
	  return ScalingCellSizeAndPositionManager;
	}();
	
	exports.default = ScalingCellSizeAndPositionManager;

/***/ },

/***/ 600:
/***/ function(module, exports) {

	'use strict';
	
	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	
	var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();
	
	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }
	
	/**
	 * Just-in-time calculates and caches size and position information for a collection of cells.
	 */
	var CellSizeAndPositionManager = function () {
	  function CellSizeAndPositionManager(_ref) {
	    var _ref$batchAllCells = _ref.batchAllCells,
	        batchAllCells = _ref$batchAllCells === undefined ? false : _ref$batchAllCells,
	        cellCount = _ref.cellCount,
	        cellSizeGetter = _ref.cellSizeGetter,
	        estimatedCellSize = _ref.estimatedCellSize;
	
	    _classCallCheck(this, CellSizeAndPositionManager);
	
	    this._batchAllCells = batchAllCells;
	    this._cellSizeGetter = cellSizeGetter;
	    this._cellCount = cellCount;
	    this._estimatedCellSize = estimatedCellSize;
	
	    // Cache of size and position data for cells, mapped by cell index.
	    // Note that invalid values may exist in this map so only rely on cells up to this._lastMeasuredIndex
	    this._cellSizeAndPositionData = {};
	
	    // Measurements for cells up to this index can be trusted; cells afterward should be estimated.
	    this._lastMeasuredIndex = -1;
	
	    // Used in deferred mode to track which cells have been queued for measurement.
	    this._lastBatchedIndex = -1;
	  }
	
	  _createClass(CellSizeAndPositionManager, [{
	    key: 'areOffsetsAdjusted',
	    value: function areOffsetsAdjusted() {
	      return false;
	    }
	  }, {
	    key: 'configure',
	    value: function configure(_ref2) {
	      var cellCount = _ref2.cellCount,
	          estimatedCellSize = _ref2.estimatedCellSize;
	
	      this._cellCount = cellCount;
	      this._estimatedCellSize = estimatedCellSize;
	    }
	  }, {
	    key: 'getCellCount',
	    value: function getCellCount() {
	      return this._cellCount;
	    }
	  }, {
	    key: 'getEstimatedCellSize',
	    value: function getEstimatedCellSize() {
	      return this._estimatedCellSize;
	    }
	  }, {
	    key: 'getLastMeasuredIndex',
	    value: function getLastMeasuredIndex() {
	      return this._lastMeasuredIndex;
	    }
	  }, {
	    key: 'getOffsetAdjustment',
	    value: function getOffsetAdjustment(_ref3) {
	      var containerSize = _ref3.containerSize,
	          offset = _ref3.offset;
	
	      return 0;
	    }
	
	    /**
	     * This method returns the size and position for the cell at the specified index.
	     * It just-in-time calculates (or used cached values) for cells leading up to the index.
	     */
	
	  }, {
	    key: 'getSizeAndPositionOfCell',
	    value: function getSizeAndPositionOfCell(index) {
	      if (index < 0 || index >= this._cellCount) {
	        throw Error('Requested index ' + index + ' is outside of range 0..' + this._cellCount);
	      }
	
	      if (index > this._lastMeasuredIndex) {
	        var lastMeasuredCellSizeAndPosition = this.getSizeAndPositionOfLastMeasuredCell();
	        var _offset = lastMeasuredCellSizeAndPosition.offset + lastMeasuredCellSizeAndPosition.size;
	
	        for (var i = this._lastMeasuredIndex + 1; i <= index; i++) {
	          var _size = this._cellSizeGetter({ index: i });
	
	          // undefined or NaN probably means a logic error in the size getter.
	          // null means we're using CellMeasurer and haven't yet measured a given index.
	          if (_size === undefined || isNaN(_size)) {
	            throw Error('Invalid size returned for cell ' + i + ' of value ' + _size);
	          } else if (_size === null) {
	            this._cellSizeAndPositionData[i] = {
	              offset: _offset,
	              size: 0
	            };
	
	            this._lastBatchedIndex = index;
	          } else {
	            this._cellSizeAndPositionData[i] = {
	              offset: _offset,
	              size: _size
	            };
	
	            _offset += _size;
	
	            this._lastMeasuredIndex = index;
	          }
	        }
	      }
	
	      return this._cellSizeAndPositionData[index];
	    }
	  }, {
	    key: 'getSizeAndPositionOfLastMeasuredCell',
	    value: function getSizeAndPositionOfLastMeasuredCell() {
	      return this._lastMeasuredIndex >= 0 ? this._cellSizeAndPositionData[this._lastMeasuredIndex] : {
	        offset: 0,
	        size: 0
	      };
	    }
	
	    /**
	     * Total size of all cells being measured.
	     * This value will be completedly estimated initially.
	     * As cells as measured the estimate will be updated.
	     */
	
	  }, {
	    key: 'getTotalSize',
	    value: function getTotalSize() {
	      var lastMeasuredCellSizeAndPosition = this.getSizeAndPositionOfLastMeasuredCell();
	
	      return lastMeasuredCellSizeAndPosition.offset + lastMeasuredCellSizeAndPosition.size + (this._cellCount - this._lastMeasuredIndex - 1) * this._estimatedCellSize;
	    }
	
	    /**
	     * Determines a new offset that ensures a certain cell is visible, given the current offset.
	     * If the cell is already visible then the current offset will be returned.
	     * If the current offset is too great or small, it will be adjusted just enough to ensure the specified index is visible.
	     *
	     * @param align Desired alignment within container; one of "auto" (default), "start", or "end"
	     * @param containerSize Size (width or height) of the container viewport
	     * @param currentOffset Container's current (x or y) offset
	     * @param totalSize Total size (width or height) of all cells
	     * @return Offset to use to ensure the specified cell is visible
	     */
	
	  }, {
	    key: 'getUpdatedOffsetForIndex',
	    value: function getUpdatedOffsetForIndex(_ref4) {
	      var _ref4$align = _ref4.align,
	          align = _ref4$align === undefined ? 'auto' : _ref4$align,
	          containerSize = _ref4.containerSize,
	          currentOffset = _ref4.currentOffset,
	          targetIndex = _ref4.targetIndex;
	
	      if (containerSize <= 0) {
	        return 0;
	      }
	
	      var datum = this.getSizeAndPositionOfCell(targetIndex);
	      var maxOffset = datum.offset;
	      var minOffset = maxOffset - containerSize + datum.size;
	
	      var idealOffset = void 0;
	
	      switch (align) {
	        case 'start':
	          idealOffset = maxOffset;
	          break;
	        case 'end':
	          idealOffset = minOffset;
	          break;
	        case 'center':
	          idealOffset = maxOffset - (containerSize - datum.size) / 2;
	          break;
	        default:
	          idealOffset = Math.max(minOffset, Math.min(maxOffset, currentOffset));
	          break;
	      }
	
	      var totalSize = this.getTotalSize();
	
	      return Math.max(0, Math.min(totalSize - containerSize, idealOffset));
	    }
	  }, {
	    key: 'getVisibleCellRange',
	    value: function getVisibleCellRange(params) {
	      // Advanced use-cases (eg CellMeasurer) require batched measurements to determine accurate sizes.
	      // eg we can't know a row's height without measuring the height of all columns within that row.
	      if (this._batchAllCells) {
	        return {
	          start: 0,
	          stop: this._cellCount - 1
	        };
	      }
	
	      var containerSize = params.containerSize,
	          offset = params.offset;
	
	
	      var totalSize = this.getTotalSize();
	
	      if (totalSize === 0) {
	        return {};
	      }
	
	      var maxOffset = offset + containerSize;
	      var start = this._findNearestCell(offset);
	
	      var datum = this.getSizeAndPositionOfCell(start);
	      offset = datum.offset + datum.size;
	
	      var stop = start;
	
	      while (offset < maxOffset && stop < this._cellCount - 1) {
	        stop++;
	
	        offset += this.getSizeAndPositionOfCell(stop).size;
	      }
	
	      return {
	        start: start,
	        stop: stop
	      };
	    }
	
	    /**
	     * Clear all cached values for cells after the specified index.
	     * This method should be called for any cell that has changed its size.
	     * It will not immediately perform any calculations; they'll be performed the next time getSizeAndPositionOfCell() is called.
	     */
	
	  }, {
	    key: 'resetCell',
	    value: function resetCell(index) {
	      this._lastMeasuredIndex = Math.min(this._lastMeasuredIndex, index - 1);
	    }
	  }, {
	    key: '_binarySearch',
	    value: function _binarySearch(_ref5) {
	      var high = _ref5.high,
	          low = _ref5.low,
	          offset = _ref5.offset;
	
	      var middle = void 0;
	      var currentOffset = void 0;
	
	      while (low <= high) {
	        middle = low + Math.floor((high - low) / 2);
	        currentOffset = this.getSizeAndPositionOfCell(middle).offset;
	
	        if (currentOffset === offset) {
	          return middle;
	        } else if (currentOffset < offset) {
	          low = middle + 1;
	        } else if (currentOffset > offset) {
	          high = middle - 1;
	        }
	      }
	
	      if (low > 0) {
	        return low - 1;
	      }
	    }
	  }, {
	    key: '_exponentialSearch',
	    value: function _exponentialSearch(_ref6) {
	      var index = _ref6.index,
	          offset = _ref6.offset;
	
	      var interval = 1;
	
	      while (index < this._cellCount && this.getSizeAndPositionOfCell(index).offset < offset) {
	        index += interval;
	        interval *= 2;
	      }
	
	      return this._binarySearch({
	        high: Math.min(index, this._cellCount - 1),
	        low: Math.floor(index / 2),
	        offset: offset
	      });
	    }
	
	    /**
	     * Searches for the cell (index) nearest the specified offset.
	     *
	     * If no exact match is found the next lowest cell index will be returned.
	     * This allows partially visible cells (with offsets just before/above the fold) to be visible.
	     */
	
	  }, {
	    key: '_findNearestCell',
	    value: function _findNearestCell(offset) {
	      if (isNaN(offset)) {
	        throw Error('Invalid offset ' + offset + ' specified');
	      }
	
	      // Our search algorithms find the nearest match at or below the specified offset.
	      // So make sure the offset is at least 0 or no match will be found.
	      offset = Math.max(0, offset);
	
	      var lastMeasuredCellSizeAndPosition = this.getSizeAndPositionOfLastMeasuredCell();
	      var lastMeasuredIndex = Math.max(0, this._lastMeasuredIndex);
	
	      if (lastMeasuredCellSizeAndPosition.offset >= offset) {
	        // If we've already measured cells within this range just use a binary search as it's faster.
	        return this._binarySearch({
	          high: lastMeasuredIndex,
	          low: 0,
	          offset: offset
	        });
	      } else {
	        // If we haven't yet measured this high, fallback to an exponential search with an inner binary search.
	        // The exponential search avoids pre-computing sizes for the full set of cells as a binary search would.
	        // The overall complexity for this approach is O(log n).
	        return this._exponentialSearch({
	          index: lastMeasuredIndex,
	          offset: offset
	        });
	      }
	    }
	  }]);
	
	  return CellSizeAndPositionManager;
	}();
	
	exports.default = CellSizeAndPositionManager;

/***/ },

/***/ 601:
/***/ function(module, exports) {

	"use strict";
	
	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	exports.default = defaultOverscanIndicesGetter;
	var SCROLL_DIRECTION_BACKWARD = exports.SCROLL_DIRECTION_BACKWARD = -1;
	var SCROLL_DIRECTION_FORWARD = exports.SCROLL_DIRECTION_FORWARD = 1;
	
	/**
	 * Calculates the number of cells to overscan before and after a specified range.
	 * This function ensures that overscanning doesn't exceed the available cells.
	 *
	 * @param cellCount Number of rows or columns in the current axis
	 * @param scrollDirection One of SCROLL_DIRECTION_BACKWARD or SCROLL_DIRECTION_FORWARD
	 * @param overscanCellsCount Maximum number of cells to over-render in either direction
	 * @param startIndex Begin of range of visible cells
	 * @param stopIndex End of range of visible cells
	 */
	function defaultOverscanIndicesGetter(_ref) {
	  var cellCount = _ref.cellCount,
	      overscanCellsCount = _ref.overscanCellsCount,
	      scrollDirection = _ref.scrollDirection,
	      startIndex = _ref.startIndex,
	      stopIndex = _ref.stopIndex;
	
	  var overscanStartIndex = void 0;
	  var overscanStopIndex = void 0;
	
	  switch (scrollDirection) {
	    case SCROLL_DIRECTION_FORWARD:
	      overscanStartIndex = startIndex;
	      overscanStopIndex = stopIndex + overscanCellsCount;
	      break;
	    case SCROLL_DIRECTION_BACKWARD:
	      overscanStartIndex = startIndex - overscanCellsCount;
	      overscanStopIndex = stopIndex;
	      break;
	  }
	
	  return {
	    overscanStartIndex: Math.max(0, overscanStartIndex),
	    overscanStopIndex: Math.min(cellCount - 1, overscanStopIndex)
	  };
	}

/***/ },

/***/ 602:
/***/ function(module, exports) {

	'use strict';
	
	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	exports.default = updateScrollIndexHelper;
	/**
	 * Helper function that determines when to update scroll offsets to ensure that a scroll-to-index remains visible.
	 * This function also ensures that the scroll ofset isn't past the last column/row of cells.
	 *
	 * @param cellsSize Width or height of cells for the current axis
	 * @param cellSizeAndPositionManager Manages size and position metadata of cells
	 * @param previousCellsCount Previous number of rows or columns
	 * @param previousCellsSize Previous width or height of cells
	 * @param previousScrollToIndex Previous scroll-to-index
	 * @param previousSize Previous width or height of the virtualized container
	 * @param scrollOffset Current scrollLeft or scrollTop
	 * @param scrollToIndex Scroll-to-index
	 * @param size Width or height of the virtualized container
	 * @param updateScrollIndexCallback Callback to invoke with an scroll-to-index value
	 */
	function updateScrollIndexHelper(_ref) {
	  var cellSize = _ref.cellSize,
	      cellSizeAndPositionManager = _ref.cellSizeAndPositionManager,
	      previousCellsCount = _ref.previousCellsCount,
	      previousCellSize = _ref.previousCellSize,
	      previousScrollToAlignment = _ref.previousScrollToAlignment,
	      previousScrollToIndex = _ref.previousScrollToIndex,
	      previousSize = _ref.previousSize,
	      scrollOffset = _ref.scrollOffset,
	      scrollToAlignment = _ref.scrollToAlignment,
	      scrollToIndex = _ref.scrollToIndex,
	      size = _ref.size,
	      updateScrollIndexCallback = _ref.updateScrollIndexCallback;
	
	  var cellCount = cellSizeAndPositionManager.getCellCount();
	  var hasScrollToIndex = scrollToIndex >= 0 && scrollToIndex < cellCount;
	  var sizeHasChanged = size !== previousSize || !previousCellSize || typeof cellSize === 'number' && cellSize !== previousCellSize;
	
	  // If we have a new scroll target OR if height/row-height has changed,
	  // We should ensure that the scroll target is visible.
	  if (hasScrollToIndex && (sizeHasChanged || scrollToAlignment !== previousScrollToAlignment || scrollToIndex !== previousScrollToIndex)) {
	    updateScrollIndexCallback(scrollToIndex);
	
	    // If we don't have a selected item but list size or number of children have decreased,
	    // Make sure we aren't scrolled too far past the current content.
	  } else if (!hasScrollToIndex && cellCount > 0 && (size < previousSize || cellCount < previousCellsCount)) {
	    // We need to ensure that the current scroll offset is still within the collection's range.
	    // To do this, we don't need to measure everything; CellMeasurer would perform poorly.
	    // Just check to make sure we're still okay.
	    // Only adjust the scroll position if we've scrolled below the last set of rows.
	    if (scrollOffset > cellSizeAndPositionManager.getTotalSize() - size) {
	      updateScrollIndexCallback(cellCount - 1);
	    }
	  }
	}

/***/ },

/***/ 603:
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	
	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	exports.default = defaultCellRangeRenderer;
	
	/**
	 * Default implementation of cellRangeRenderer used by Grid.
	 * This renderer supports cell-caching while the user is scrolling.
	 */
	function defaultCellRangeRenderer(_ref) {
	  var cellCache = _ref.cellCache,
	      cellRenderer = _ref.cellRenderer,
	      columnSizeAndPositionManager = _ref.columnSizeAndPositionManager,
	      columnStartIndex = _ref.columnStartIndex,
	      columnStopIndex = _ref.columnStopIndex,
	      deferredMeasurementCache = _ref.deferredMeasurementCache,
	      horizontalOffsetAdjustment = _ref.horizontalOffsetAdjustment,
	      isScrolling = _ref.isScrolling,
	      parent = _ref.parent,
	      rowSizeAndPositionManager = _ref.rowSizeAndPositionManager,
	      rowStartIndex = _ref.rowStartIndex,
	      rowStopIndex = _ref.rowStopIndex,
	      scrollLeft = _ref.scrollLeft,
	      scrollTop = _ref.scrollTop,
	      styleCache = _ref.styleCache,
	      verticalOffsetAdjustment = _ref.verticalOffsetAdjustment,
	      visibleColumnIndices = _ref.visibleColumnIndices,
	      visibleRowIndices = _ref.visibleRowIndices;
	
	  var deferredMode = typeof deferredMeasurementCache !== 'undefined';
	
	  var renderedCells = [];
	
	  // Browsers have native size limits for elements (eg Chrome 33M pixels, IE 1.5M pixes).
	  // User cannot scroll beyond these size limitations.
	  // In order to work around this, ScalingCellSizeAndPositionManager compresses offsets.
	  // We should never cache styles for compressed offsets though as this can lead to bugs.
	  // See issue #576 for more.
	  var areOffsetsAdjusted = columnSizeAndPositionManager.areOffsetsAdjusted() || rowSizeAndPositionManager.areOffsetsAdjusted();
	
	  var canCacheStyle = !isScrolling || !areOffsetsAdjusted;
	
	  for (var rowIndex = rowStartIndex; rowIndex <= rowStopIndex; rowIndex++) {
	    var rowDatum = rowSizeAndPositionManager.getSizeAndPositionOfCell(rowIndex);
	
	    for (var columnIndex = columnStartIndex; columnIndex <= columnStopIndex; columnIndex++) {
	      var columnDatum = columnSizeAndPositionManager.getSizeAndPositionOfCell(columnIndex);
	      var isVisible = columnIndex >= visibleColumnIndices.start && columnIndex <= visibleColumnIndices.stop && rowIndex >= visibleRowIndices.start && rowIndex <= visibleRowIndices.stop;
	      var key = rowIndex + '-' + columnIndex;
	      var style = void 0;
	
	      // Cache style objects so shallow-compare doesn't re-render unnecessarily.
	      if (canCacheStyle && styleCache[key]) {
	        style = styleCache[key];
	      } else {
	        // In deferred mode, cells will be initially rendered before we know their size.
	        // Don't interfere with CellMeasurer's measurements by setting an invalid size.
	        if (deferredMode && !deferredMeasurementCache.has(rowIndex, columnIndex)) {
	          // Position not-yet-measured cells at top/left 0,0,
	          // And give them width/height of 'auto' so they can grow larger than the parent Grid if necessary.
	          // Positioning them further to the right/bottom influences their measured size.
	          style = {
	            height: 'auto',
	            left: 0,
	            position: 'absolute',
	            top: 0,
	            width: 'auto'
	          };
	        } else {
	          style = {
	            height: rowDatum.size,
	            left: columnDatum.offset + horizontalOffsetAdjustment,
	            position: 'absolute',
	            top: rowDatum.offset + verticalOffsetAdjustment,
	            width: columnDatum.size
	          };
	
	          styleCache[key] = style;
	        }
	      }
	
	      var cellRendererParams = {
	        columnIndex: columnIndex,
	        isScrolling: isScrolling,
	        isVisible: isVisible,
	        key: key,
	        parent: parent,
	        rowIndex: rowIndex,
	        style: style
	      };
	
	      var renderedCell = void 0;
	
	      // Avoid re-creating cells while scrolling.
	      // This can lead to the same cell being created many times and can cause performance issues for "heavy" cells.
	      // If a scroll is in progress- cache and reuse cells.
	      // This cache will be thrown away once scrolling completes.
	      // However if we are scaling scroll positions and sizes, we should also avoid caching.
	      // This is because the offset changes slightly as scroll position changes and caching leads to stale values.
	      // For more info refer to issue #395
	      if (isScrolling && !horizontalOffsetAdjustment && !verticalOffsetAdjustment) {
	        if (!cellCache[key]) {
	          cellCache[key] = cellRenderer(cellRendererParams);
	        }
	
	        renderedCell = cellCache[key];
	
	        // If the user is no longer scrolling, don't cache cells.
	        // This makes dynamic cell content difficult for users and would also lead to a heavier memory footprint.
	      } else {
	        renderedCell = cellRenderer(cellRendererParams);
	      }
	
	      if (renderedCell == null || renderedCell === false) {
	        continue;
	      }
	
	      if ((undefined) !== 'production') {
	        warnAboutMissingStyle(parent, renderedCell);
	      }
	
	      renderedCells.push(renderedCell);
	    }
	  }
	
	  return renderedCells;
	}
	
	function warnAboutMissingStyle(parent, renderedCell) {
	  if ((undefined) !== 'production') {
	    if (renderedCell && renderedCell.props.style === undefined && parent.__warnedAboutMissingStyle !== true) {
	      parent.__warnedAboutMissingStyle = true;
	
	      console.warn('Rendered cell should include style property for positioning.');
	    }
	  }
	}

/***/ },

/***/ 604:
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	
	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	
	var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };
	
	exports.default = defaultRowRenderer;
	
	var _react = __webpack_require__(299);
	
	var _react2 = _interopRequireDefault(_react);
	
	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
	
	/**
	 * Default row renderer for Table.
	 */
	function defaultRowRenderer(_ref) {
	  var className = _ref.className,
	      columns = _ref.columns,
	      index = _ref.index,
	      isScrolling = _ref.isScrolling,
	      key = _ref.key,
	      onRowClick = _ref.onRowClick,
	      onRowDoubleClick = _ref.onRowDoubleClick,
	      onRowMouseOver = _ref.onRowMouseOver,
	      onRowMouseOut = _ref.onRowMouseOut,
	      rowData = _ref.rowData,
	      style = _ref.style;
	
	  var a11yProps = {};
	
	  if (onRowClick || onRowDoubleClick || onRowMouseOver || onRowMouseOut) {
	    a11yProps['aria-label'] = 'row';
	    a11yProps.role = 'row';
	    a11yProps.tabIndex = 0;
	
	    if (onRowClick) {
	      a11yProps.onClick = function () {
	        return onRowClick({ index: index, rowData: rowData });
	      };
	    }
	    if (onRowDoubleClick) {
	      a11yProps.onDoubleClick = function () {
	        return onRowDoubleClick({ index: index, rowData: rowData });
	      };
	    }
	    if (onRowMouseOut) {
	      a11yProps.onMouseOut = function () {
	        return onRowMouseOut({ index: index, rowData: rowData });
	      };
	    }
	    if (onRowMouseOver) {
	      a11yProps.onMouseOver = function () {
	        return onRowMouseOver({ index: index, rowData: rowData });
	      };
	    }
	  }
	
	  return _react2.default.createElement(
	    'div',
	    _extends({}, a11yProps, {
	      className: className,
	      key: key,
	      style: style
	    }),
	    columns
	  );
	}

/***/ },

/***/ 605:
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	
	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	exports.InfiniteLoader = exports.default = undefined;
	
	var _InfiniteLoader2 = __webpack_require__(606);
	
	var _InfiniteLoader3 = _interopRequireDefault(_InfiniteLoader2);
	
	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
	
	exports.default = _InfiniteLoader3.default;
	exports.InfiniteLoader = _InfiniteLoader3.default;

/***/ },

/***/ 606:
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	
	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	
	var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();
	
	exports.isRangeVisible = isRangeVisible;
	exports.scanForUnloadedRanges = scanForUnloadedRanges;
	exports.forceUpdateReactVirtualizedComponent = forceUpdateReactVirtualizedComponent;
	
	var _react = __webpack_require__(299);
	
	var _createCallbackMemoizer = __webpack_require__(579);
	
	var _createCallbackMemoizer2 = _interopRequireDefault(_createCallbackMemoizer);
	
	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
	
	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }
	
	function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }
	
	function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }
	
	/**
	 * Higher-order component that manages lazy-loading for "infinite" data.
	 * This component decorates a virtual component and just-in-time prefetches rows as a user scrolls.
	 * It is intended as a convenience component; fork it if you'd like finer-grained control over data-loading.
	 */
	var InfiniteLoader = function (_PureComponent) {
	  _inherits(InfiniteLoader, _PureComponent);
	
	  function InfiniteLoader(props, context) {
	    _classCallCheck(this, InfiniteLoader);
	
	    var _this = _possibleConstructorReturn(this, (InfiniteLoader.__proto__ || Object.getPrototypeOf(InfiniteLoader)).call(this, props, context));
	
	    _this._loadMoreRowsMemoizer = (0, _createCallbackMemoizer2.default)();
	
	    _this._onRowsRendered = _this._onRowsRendered.bind(_this);
	    _this._registerChild = _this._registerChild.bind(_this);
	    return _this;
	  }
	
	  _createClass(InfiniteLoader, [{
	    key: 'render',
	    value: function render() {
	      var children = this.props.children;
	
	
	      return children({
	        onRowsRendered: this._onRowsRendered,
	        registerChild: this._registerChild
	      });
	    }
	  }, {
	    key: '_loadUnloadedRanges',
	    value: function _loadUnloadedRanges(unloadedRanges) {
	      var _this2 = this;
	
	      var loadMoreRows = this.props.loadMoreRows;
	
	
	      unloadedRanges.forEach(function (unloadedRange) {
	        var promise = loadMoreRows(unloadedRange);
	        if (promise) {
	          promise.then(function () {
	            // Refresh the visible rows if any of them have just been loaded.
	            // Otherwise they will remain in their unloaded visual state.
	            if (isRangeVisible({
	              lastRenderedStartIndex: _this2._lastRenderedStartIndex,
	              lastRenderedStopIndex: _this2._lastRenderedStopIndex,
	              startIndex: unloadedRange.startIndex,
	              stopIndex: unloadedRange.stopIndex
	            })) {
	              if (_this2._registeredChild) {
	                forceUpdateReactVirtualizedComponent(_this2._registeredChild);
	              }
	            }
	          });
	        }
	      });
	    }
	  }, {
	    key: '_onRowsRendered',
	    value: function _onRowsRendered(_ref) {
	      var _this3 = this;
	
	      var startIndex = _ref.startIndex,
	          stopIndex = _ref.stopIndex;
	      var _props = this.props,
	          isRowLoaded = _props.isRowLoaded,
	          minimumBatchSize = _props.minimumBatchSize,
	          rowCount = _props.rowCount,
	          threshold = _props.threshold;
	
	
	      this._lastRenderedStartIndex = startIndex;
	      this._lastRenderedStopIndex = stopIndex;
	
	      var unloadedRanges = scanForUnloadedRanges({
	        isRowLoaded: isRowLoaded,
	        minimumBatchSize: minimumBatchSize,
	        rowCount: rowCount,
	        startIndex: Math.max(0, startIndex - threshold),
	        stopIndex: Math.min(rowCount - 1, stopIndex + threshold)
	      });
	
	      // For memoize comparison
	      var squashedUnloadedRanges = unloadedRanges.reduce(function (reduced, unloadedRange) {
	        return reduced.concat([unloadedRange.startIndex, unloadedRange.stopIndex]);
	      }, []);
	
	      this._loadMoreRowsMemoizer({
	        callback: function callback() {
	          _this3._loadUnloadedRanges(unloadedRanges);
	        },
	        indices: { squashedUnloadedRanges: squashedUnloadedRanges }
	      });
	    }
	  }, {
	    key: '_registerChild',
	    value: function _registerChild(registeredChild) {
	      this._registeredChild = registeredChild;
	    }
	  }]);
	
	  return InfiniteLoader;
	}(_react.PureComponent);
	
	/**
	 * Determines if the specified start/stop range is visible based on the most recently rendered range.
	 */
	
	
	InfiniteLoader.defaultProps = {
	  minimumBatchSize: 10,
	  rowCount: 0,
	  threshold: 15
	};
	exports.default = InfiniteLoader;
	(undefined) !== "production" ? InfiniteLoader.propTypes = {
	  /**
	   * Function responsible for rendering a virtualized component.
	   * This function should implement the following signature:
	   * ({ onRowsRendered, registerChild }) => PropTypes.element
	   *
	   * The specified :onRowsRendered function should be passed through to the child's :onRowsRendered property.
	   * The :registerChild callback should be set as the virtualized component's :ref.
	   */
	  children: _react.PropTypes.func.isRequired,
	
	  /**
	   * Function responsible for tracking the loaded state of each row.
	   * It should implement the following signature: ({ index: number }): boolean
	   */
	  isRowLoaded: _react.PropTypes.func.isRequired,
	
	  /**
	   * Callback to be invoked when more rows must be loaded.
	   * It should implement the following signature: ({ startIndex, stopIndex }): Promise
	   * The returned Promise should be resolved once row data has finished loading.
	   * It will be used to determine when to refresh the list with the newly-loaded data.
	   * This callback may be called multiple times in reaction to a single scroll event.
	   */
	  loadMoreRows: _react.PropTypes.func.isRequired,
	
	  /**
	   * Minimum number of rows to be loaded at a time.
	   * This property can be used to batch requests to reduce HTTP requests.
	   */
	  minimumBatchSize: _react.PropTypes.number.isRequired,
	
	  /**
	   * Number of rows in list; can be arbitrary high number if actual number is unknown.
	   */
	  rowCount: _react.PropTypes.number.isRequired,
	
	  /**
	   * Threshold at which to pre-fetch data.
	   * A threshold X means that data will start loading when a user scrolls within X rows.
	   * This value defaults to 15.
	   */
	  threshold: _react.PropTypes.number.isRequired
	} : void 0;
	function isRangeVisible(_ref2) {
	  var lastRenderedStartIndex = _ref2.lastRenderedStartIndex,
	      lastRenderedStopIndex = _ref2.lastRenderedStopIndex,
	      startIndex = _ref2.startIndex,
	      stopIndex = _ref2.stopIndex;
	
	  return !(startIndex > lastRenderedStopIndex || stopIndex < lastRenderedStartIndex);
	}
	
	/**
	 * Returns all of the ranges within a larger range that contain unloaded rows.
	 */
	function scanForUnloadedRanges(_ref3) {
	  var isRowLoaded = _ref3.isRowLoaded,
	      minimumBatchSize = _ref3.minimumBatchSize,
	      rowCount = _ref3.rowCount,
	      startIndex = _ref3.startIndex,
	      stopIndex = _ref3.stopIndex;
	
	  var unloadedRanges = [];
	
	  var rangeStartIndex = null;
	  var rangeStopIndex = null;
	
	  for (var index = startIndex; index <= stopIndex; index++) {
	    var loaded = isRowLoaded({ index: index });
	
	    if (!loaded) {
	      rangeStopIndex = index;
	      if (rangeStartIndex === null) {
	        rangeStartIndex = index;
	      }
	    } else if (rangeStopIndex !== null) {
	      unloadedRanges.push({
	        startIndex: rangeStartIndex,
	        stopIndex: rangeStopIndex
	      });
	
	      rangeStartIndex = rangeStopIndex = null;
	    }
	  }
	
	  // If :rangeStopIndex is not null it means we haven't ran out of unloaded rows.
	  // Scan forward to try filling our :minimumBatchSize.
	  if (rangeStopIndex !== null) {
	    var potentialStopIndex = Math.min(Math.max(rangeStopIndex, rangeStartIndex + minimumBatchSize - 1), rowCount - 1);
	
	    for (var _index = rangeStopIndex + 1; _index <= potentialStopIndex; _index++) {
	      if (!isRowLoaded({ index: _index })) {
	        rangeStopIndex = _index;
	      } else {
	        break;
	      }
	    }
	
	    unloadedRanges.push({
	      startIndex: rangeStartIndex,
	      stopIndex: rangeStopIndex
	    });
	  }
	
	  // Check to see if our first range ended prematurely.
	  // In this case we should scan backwards to try filling our :minimumBatchSize.
	  if (unloadedRanges.length) {
	    var firstUnloadedRange = unloadedRanges[0];
	
	    while (firstUnloadedRange.stopIndex - firstUnloadedRange.startIndex + 1 < minimumBatchSize && firstUnloadedRange.startIndex > 0) {
	      var _index2 = firstUnloadedRange.startIndex - 1;
	
	      if (!isRowLoaded({ index: _index2 })) {
	        firstUnloadedRange.startIndex = _index2;
	      } else {
	        break;
	      }
	    }
	  }
	
	  return unloadedRanges;
	}
	
	/**
	 * Since RV components use shallowCompare we need to force a render (even though props haven't changed).
	 * However InfiniteLoader may wrap a Grid or it may wrap a Table or List.
	 * In the first case the built-in React forceUpdate() method is sufficient to force a re-render,
	 * But in the latter cases we need to use the RV-specific forceUpdateGrid() method.
	 * Else the inner Grid will not be re-rendered and visuals may be stale.
	 *
	 * Additionally, while a Grid is scrolling the cells can be cached,
	 * So it's important to invalidate that cache by recalculating sizes
	 * before forcing a rerender.
	 */
	function forceUpdateReactVirtualizedComponent(component) {
	  var recomputeSize = typeof component.recomputeGridSize === 'function' ? component.recomputeGridSize : component.recomputeRowHeights;
	
	  if (recomputeSize) {
	    recomputeSize.call(component);
	  } else {
	    component.forceUpdate();
	  }
	}

/***/ },

/***/ 607:
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	
	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	exports.List = exports.default = undefined;
	
	var _List2 = __webpack_require__(608);
	
	var _List3 = _interopRequireDefault(_List2);
	
	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
	
	exports.default = _List3.default;
	exports.List = _List3.default;

/***/ },

/***/ 608:
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	
	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	
	var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };
	
	var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();
	
	var _Grid = __webpack_require__(596);
	
	var _Grid2 = _interopRequireDefault(_Grid);
	
	var _react = __webpack_require__(299);
	
	var _react2 = _interopRequireDefault(_react);
	
	var _classnames = __webpack_require__(476);
	
	var _classnames2 = _interopRequireDefault(_classnames);
	
	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
	
	function _objectWithoutProperties(obj, keys) { var target = {}; for (var i in obj) { if (keys.indexOf(i) >= 0) continue; if (!Object.prototype.hasOwnProperty.call(obj, i)) continue; target[i] = obj[i]; } return target; }
	
	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }
	
	function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }
	
	function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }
	
	/**
	 * It is inefficient to create and manage a large list of DOM elements within a scrolling container
	 * if only a few of those elements are visible. The primary purpose of this component is to improve
	 * performance by only rendering the DOM nodes that a user is able to see based on their current
	 * scroll position.
	 *
	 * This component renders a virtualized list of elements with either fixed or dynamic heights.
	 */
	var List = function (_PureComponent) {
	  _inherits(List, _PureComponent);
	
	  function List(props, context) {
	    _classCallCheck(this, List);
	
	    var _this = _possibleConstructorReturn(this, (List.__proto__ || Object.getPrototypeOf(List)).call(this, props, context));
	
	    _this._cellRenderer = _this._cellRenderer.bind(_this);
	    _this._onScroll = _this._onScroll.bind(_this);
	    _this._onSectionRendered = _this._onSectionRendered.bind(_this);
	    _this._setRef = _this._setRef.bind(_this);
	    return _this;
	  }
	
	  _createClass(List, [{
	    key: 'forceUpdateGrid',
	    value: function forceUpdateGrid() {
	      this.Grid.forceUpdate();
	    }
	
	    /** See Grid#measureAllCells */
	
	  }, {
	    key: 'measureAllRows',
	    value: function measureAllRows() {
	      this.Grid.measureAllCells();
	    }
	
	    /** See Grid#recomputeGridSize */
	
	  }, {
	    key: 'recomputeRowHeights',
	    value: function recomputeRowHeights() {
	      var index = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : 0;
	
	      this.Grid.recomputeGridSize({
	        rowIndex: index
	      });
	    }
	
	    /** See Grid#scrollToCell */
	
	  }, {
	    key: 'scrollToRow',
	    value: function scrollToRow() {
	      var index = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : 0;
	
	      this.Grid.scrollToCell({
	        columnIndex: 0,
	        rowIndex: index
	      });
	    }
	  }, {
	    key: 'render',
	    value: function render() {
	      var _props = this.props,
	          className = _props.className,
	          noRowsRenderer = _props.noRowsRenderer,
	          scrollToIndex = _props.scrollToIndex,
	          width = _props.width;
	
	
	      var classNames = (0, _classnames2.default)('ReactVirtualized__List', className);
	
	      return _react2.default.createElement(_Grid2.default, _extends({}, this.props, {
	        autoContainerWidth: true,
	        cellRenderer: this._cellRenderer,
	        className: classNames,
	        columnWidth: width,
	        columnCount: 1,
	        noContentRenderer: noRowsRenderer,
	        onScroll: this._onScroll,
	        onSectionRendered: this._onSectionRendered,
	        ref: this._setRef,
	        scrollToRow: scrollToIndex
	      }));
	    }
	  }, {
	    key: '_cellRenderer',
	    value: function _cellRenderer(_ref) {
	      var rowIndex = _ref.rowIndex,
	          style = _ref.style,
	          rest = _objectWithoutProperties(_ref, ['rowIndex', 'style']);
	
	      var rowRenderer = this.props.rowRenderer;
	
	      // TRICKY The style object is sometimes cached by Grid.
	      // This prevents new style objects from bypassing shallowCompare().
	      // However as of React 16, style props are auto-frozen (at least in dev mode)
	      // Check to make sure we can still modify the style before proceeding.
	      // https://github.com/facebook/react/commit/977357765b44af8ff0cfea327866861073095c12#commitcomment-20648713
	
	      var _Object$getOwnPropert = Object.getOwnPropertyDescriptor(style, 'width'),
	          writable = _Object$getOwnPropert.writable;
	
	      if (writable) {
	        // By default, List cells should be 100% width.
	        // This prevents them from flowing under a scrollbar (if present).
	        style.width = '100%';
	      }
	
	      return rowRenderer(_extends({
	        index: rowIndex,
	        style: style
	      }, rest));
	    }
	  }, {
	    key: '_setRef',
	    value: function _setRef(ref) {
	      this.Grid = ref;
	    }
	  }, {
	    key: '_onScroll',
	    value: function _onScroll(_ref2) {
	      var clientHeight = _ref2.clientHeight,
	          scrollHeight = _ref2.scrollHeight,
	          scrollTop = _ref2.scrollTop;
	      var onScroll = this.props.onScroll;
	
	
	      onScroll({ clientHeight: clientHeight, scrollHeight: scrollHeight, scrollTop: scrollTop });
	    }
	  }, {
	    key: '_onSectionRendered',
	    value: function _onSectionRendered(_ref3) {
	      var rowOverscanStartIndex = _ref3.rowOverscanStartIndex,
	          rowOverscanStopIndex = _ref3.rowOverscanStopIndex,
	          rowStartIndex = _ref3.rowStartIndex,
	          rowStopIndex = _ref3.rowStopIndex;
	      var onRowsRendered = this.props.onRowsRendered;
	
	
	      onRowsRendered({
	        overscanStartIndex: rowOverscanStartIndex,
	        overscanStopIndex: rowOverscanStopIndex,
	        startIndex: rowStartIndex,
	        stopIndex: rowStopIndex
	      });
	    }
	  }]);
	
	  return List;
	}(_react.PureComponent);
	
	List.defaultProps = {
	  estimatedRowSize: 30,
	  noRowsRenderer: function noRowsRenderer() {
	    return null;
	  },
	  onRowsRendered: function onRowsRendered() {
	    return null;
	  },
	  onScroll: function onScroll() {
	    return null;
	  },
	  overscanRowCount: 10,
	  scrollToAlignment: 'auto',
	  scrollToIndex: -1,
	  style: {}
	};
	exports.default = List;
	(undefined) !== "production" ? List.propTypes = {
	  'aria-label': _react.PropTypes.string,
	
	  /**
	   * Removes fixed height from the scrollingContainer so that the total height
	   * of rows can stretch the window. Intended for use with WindowScroller
	   */
	  autoHeight: _react.PropTypes.bool,
	
	  /** Optional CSS class name */
	  className: _react.PropTypes.string,
	
	  /**
	   * Used to estimate the total height of a List before all of its rows have actually been measured.
	   * The estimated total height is adjusted as rows are rendered.
	   */
	  estimatedRowSize: _react.PropTypes.number.isRequired,
	
	  /** Height constraint for list (determines how many actual rows are rendered) */
	  height: _react.PropTypes.number.isRequired,
	
	  /** Optional renderer to be used in place of rows when rowCount is 0 */
	  noRowsRenderer: _react.PropTypes.func.isRequired,
	
	  /**
	   * Callback invoked with information about the slice of rows that were just rendered.
	   * ({ startIndex, stopIndex }): void
	   */
	  onRowsRendered: _react.PropTypes.func.isRequired,
	
	  /**
	   * Number of rows to render above/below the visible bounds of the list.
	   * These rows can help for smoother scrolling on touch devices.
	   */
	  overscanRowCount: _react.PropTypes.number.isRequired,
	
	  /**
	   * Callback invoked whenever the scroll offset changes within the inner scrollable region.
	   * This callback can be used to sync scrolling between lists, tables, or grids.
	   * ({ clientHeight, scrollHeight, scrollTop }): void
	   */
	  onScroll: _react.PropTypes.func.isRequired,
	
	  /**
	   * Either a fixed row height (number) or a function that returns the height of a row given its index.
	   * ({ index: number }): number
	   */
	  rowHeight: _react.PropTypes.oneOfType([_react.PropTypes.number, _react.PropTypes.func]).isRequired,
	
	  /** Responsible for rendering a row given an index; ({ index: number }): node */
	  rowRenderer: _react.PropTypes.func.isRequired,
	
	  /** Number of rows in list. */
	  rowCount: _react.PropTypes.number.isRequired,
	
	  /** See Grid#scrollToAlignment */
	  scrollToAlignment: _react.PropTypes.oneOf(['auto', 'end', 'start', 'center']).isRequired,
	
	  /** Row index to ensure visible (by forcefully scrolling if necessary) */
	  scrollToIndex: _react.PropTypes.number.isRequired,
	
	  /** Vertical offset. */
	  scrollTop: _react.PropTypes.number,
	
	  /** Optional inline style */
	  style: _react.PropTypes.object,
	
	  /** Tab index for focus */
	  tabIndex: _react.PropTypes.number,
	
	  /** Width of list */
	  width: _react.PropTypes.number.isRequired
	} : void 0;

/***/ },

/***/ 609:
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	
	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	exports.MultiGrid = exports.default = undefined;
	
	var _MultiGrid2 = __webpack_require__(610);
	
	var _MultiGrid3 = _interopRequireDefault(_MultiGrid2);
	
	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
	
	exports.default = _MultiGrid3.default;
	exports.MultiGrid = _MultiGrid3.default;

/***/ },

/***/ 610:
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	
	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	
	var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };
	
	var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();
	
	var _react = __webpack_require__(299);
	
	var _react2 = _interopRequireDefault(_react);
	
	var _Grid = __webpack_require__(596);
	
	var _Grid2 = _interopRequireDefault(_Grid);
	
	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
	
	function _objectWithoutProperties(obj, keys) { var target = {}; for (var i in obj) { if (keys.indexOf(i) >= 0) continue; if (!Object.prototype.hasOwnProperty.call(obj, i)) continue; target[i] = obj[i]; } return target; }
	
	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }
	
	function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }
	
	function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }
	
	/**
	 * Renders 1, 2, or 4 Grids depending on configuration.
	 * A main (body) Grid will always be rendered.
	 * Optionally, 1-2 Grids for sticky header rows will also be rendered.
	 * If no sticky columns, only 1 sticky header Grid will be rendered.
	 * If sticky columns, 2 sticky header Grids will be rendered.
	 */
	var MultiGrid = function (_PureComponent) {
	  _inherits(MultiGrid, _PureComponent);
	
	  function MultiGrid(props, context) {
	    _classCallCheck(this, MultiGrid);
	
	    var _this = _possibleConstructorReturn(this, (MultiGrid.__proto__ || Object.getPrototypeOf(MultiGrid)).call(this, props, context));
	
	    _this.state = {
	      scrollLeft: 0,
	      scrollTop: 0
	    };
	
	    _this._bottomLeftGridRef = _this._bottomLeftGridRef.bind(_this);
	    _this._bottomRightGridRef = _this._bottomRightGridRef.bind(_this);
	    _this._cellRendererBottomLeftGrid = _this._cellRendererBottomLeftGrid.bind(_this);
	    _this._cellRendererBottomRightGrid = _this._cellRendererBottomRightGrid.bind(_this);
	    _this._cellRendererTopRightGrid = _this._cellRendererTopRightGrid.bind(_this);
	    _this._columnWidthRightGrid = _this._columnWidthRightGrid.bind(_this);
	    _this._onScroll = _this._onScroll.bind(_this);
	    _this._rowHeightBottomGrid = _this._rowHeightBottomGrid.bind(_this);
	    _this._topLeftGridRef = _this._topLeftGridRef.bind(_this);
	    _this._topRightGridRef = _this._topRightGridRef.bind(_this);
	    return _this;
	  }
	
	  _createClass(MultiGrid, [{
	    key: 'forceUpdateGrids',
	    value: function forceUpdateGrids() {
	      this._bottomLeftGrid && this._bottomLeftGrid.forceUpdate();
	      this._bottomRightGrid && this._bottomRightGrid.forceUpdate();
	      this._topLeftGrid && this._topLeftGrid.forceUpdate();
	      this._topRightGrid && this._topRightGrid.forceUpdate();
	    }
	
	    /** See Grid#measureAllCells */
	
	  }, {
	    key: 'measureAllCells',
	    value: function measureAllCells() {
	      this._bottomLeftGrid && this._bottomLeftGrid.measureAllCells();
	      this._bottomRightGrid && this._bottomRightGrid.measureAllCells();
	      this._topLeftGrid && this._topLeftGrid.measureAllCells();
	      this._topRightGrid && this._topRightGrid.measureAllCells();
	    }
	
	    /** See Grid#recomputeGridSize */
	
	  }, {
	    key: 'recomputeGridSize',
	    value: function recomputeGridSize() {
	      var _ref = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {},
	          _ref$columnIndex = _ref.columnIndex,
	          columnIndex = _ref$columnIndex === undefined ? 0 : _ref$columnIndex,
	          _ref$rowIndex = _ref.rowIndex,
	          rowIndex = _ref$rowIndex === undefined ? 0 : _ref$rowIndex;
	
	      var _props = this.props,
	          fixedColumnCount = _props.fixedColumnCount,
	          fixedRowCount = _props.fixedRowCount;
	
	
	      var adjustedColumnIndex = Math.max(0, columnIndex - fixedColumnCount);
	      var adjustedRowIndex = Math.max(0, rowIndex - fixedRowCount);
	
	      this._bottomLeftGrid && this._bottomLeftGrid.recomputeGridSize({
	        columnIndex: columnIndex,
	        rowIndex: adjustedRowIndex
	      });
	      this._bottomRightGrid && this._bottomRightGrid.recomputeGridSize({
	        columnIndex: adjustedColumnIndex,
	        rowIndex: adjustedRowIndex
	      });
	      this._topLeftGrid && this._topLeftGrid.recomputeGridSize({
	        columnIndex: columnIndex,
	        rowIndex: rowIndex
	      });
	      this._topRightGrid && this._topRightGrid.recomputeGridSize({
	        columnIndex: adjustedColumnIndex,
	        rowIndex: rowIndex
	      });
	
	      this._leftGridWidth = null;
	      this._topGridHeight = null;
	      this._maybeCalculateCachedStyles(null, this.props);
	    }
	  }, {
	    key: 'componentWillMount',
	    value: function componentWillMount() {
	      this._maybeCalculateCachedStyles(null, this.props);
	    }
	  }, {
	    key: 'componentWillReceiveProps',
	    value: function componentWillReceiveProps(nextProps) {
	      var _props2 = this.props,
	          columnWidth = _props2.columnWidth,
	          fixedColumnCount = _props2.fixedColumnCount,
	          fixedRowCount = _props2.fixedRowCount,
	          rowHeight = _props2.rowHeight;
	
	
	      if (columnWidth !== nextProps.columnWidth || fixedColumnCount !== nextProps.fixedColumnCount) {
	        this._leftGridWidth = null;
	      }
	
	      if (fixedRowCount !== nextProps.fixedRowCount || rowHeight !== nextProps.rowHeight) {
	        this._topGridHeight = null;
	      }
	
	      this._maybeCalculateCachedStyles(this.props, nextProps);
	    }
	  }, {
	    key: 'render',
	    value: function render() {
	      var _props3 = this.props,
	          onScroll = _props3.onScroll,
	          onSectionRendered = _props3.onSectionRendered,
	          scrollLeftProp = _props3.scrollLeft,
	          scrollToColumn = _props3.scrollToColumn,
	          scrollTopProp = _props3.scrollTop,
	          scrollToRow = _props3.scrollToRow,
	          rest = _objectWithoutProperties(_props3, ['onScroll', 'onSectionRendered', 'scrollLeft', 'scrollToColumn', 'scrollTop', 'scrollToRow']);
	
	      // scrollTop and scrollToRow props are explicitly filtered out and ignored
	
	      var _state = this.state,
	          scrollLeft = _state.scrollLeft,
	          scrollTop = _state.scrollTop;
	
	
	      return _react2.default.createElement(
	        'div',
	        { style: this._containerOuterStyle },
	        _react2.default.createElement(
	          'div',
	          { style: this._containerTopStyle },
	          this._renderTopLeftGrid(rest),
	          this._renderTopRightGrid(_extends({}, rest, {
	            scrollLeft: scrollLeft
	          }))
	        ),
	        _react2.default.createElement(
	          'div',
	          { style: this._containerBottomStyle },
	          this._renderBottomLeftGrid(_extends({}, rest, {
	            scrollTop: scrollTop
	          })),
	          this._renderBottomRightGrid(_extends({}, rest, {
	            onScroll: onScroll,
	            onSectionRendered: onSectionRendered,
	            scrollLeft: scrollLeft,
	            scrollToColumn: scrollToColumn,
	            scrollToRow: scrollToRow,
	            scrollTop: scrollTop
	          }))
	        )
	      );
	    }
	  }, {
	    key: '_bottomLeftGridRef',
	    value: function _bottomLeftGridRef(ref) {
	      this._bottomLeftGrid = ref;
	    }
	  }, {
	    key: '_bottomRightGridRef',
	    value: function _bottomRightGridRef(ref) {
	      this._bottomRightGrid = ref;
	    }
	  }, {
	    key: '_cellRendererBottomLeftGrid',
	    value: function _cellRendererBottomLeftGrid(_ref2) {
	      var rowIndex = _ref2.rowIndex,
	          rest = _objectWithoutProperties(_ref2, ['rowIndex']);
	
	      var _props4 = this.props,
	          cellRenderer = _props4.cellRenderer,
	          fixedRowCount = _props4.fixedRowCount;
	
	
	      return cellRenderer(_extends({}, rest, {
	        rowIndex: rowIndex + fixedRowCount
	      }));
	    }
	  }, {
	    key: '_cellRendererBottomRightGrid',
	    value: function _cellRendererBottomRightGrid(_ref3) {
	      var columnIndex = _ref3.columnIndex,
	          rowIndex = _ref3.rowIndex,
	          rest = _objectWithoutProperties(_ref3, ['columnIndex', 'rowIndex']);
	
	      var _props5 = this.props,
	          cellRenderer = _props5.cellRenderer,
	          fixedColumnCount = _props5.fixedColumnCount,
	          fixedRowCount = _props5.fixedRowCount;
	
	
	      return cellRenderer(_extends({}, rest, {
	        columnIndex: columnIndex + fixedColumnCount,
	        rowIndex: rowIndex + fixedRowCount
	      }));
	    }
	  }, {
	    key: '_cellRendererTopRightGrid',
	    value: function _cellRendererTopRightGrid(_ref4) {
	      var columnIndex = _ref4.columnIndex,
	          rest = _objectWithoutProperties(_ref4, ['columnIndex']);
	
	      var _props6 = this.props,
	          cellRenderer = _props6.cellRenderer,
	          fixedColumnCount = _props6.fixedColumnCount;
	
	
	      return cellRenderer(_extends({}, rest, {
	        columnIndex: columnIndex + fixedColumnCount
	      }));
	    }
	  }, {
	    key: '_columnWidthRightGrid',
	    value: function _columnWidthRightGrid(_ref5) {
	      var index = _ref5.index;
	      var _props7 = this.props,
	          fixedColumnCount = _props7.fixedColumnCount,
	          columnWidth = _props7.columnWidth;
	
	
	      return typeof columnWidth === 'function' ? columnWidth({ index: index + fixedColumnCount }) : columnWidth;
	    }
	  }, {
	    key: '_getBottomGridHeight',
	    value: function _getBottomGridHeight(props) {
	      var height = props.height;
	
	
	      var topGridHeight = this._getTopGridHeight(props);
	
	      return height - topGridHeight;
	    }
	  }, {
	    key: '_getLeftGridWidth',
	    value: function _getLeftGridWidth(props) {
	      var fixedColumnCount = props.fixedColumnCount,
	          columnWidth = props.columnWidth;
	
	
	      if (this._leftGridWidth == null) {
	        if (typeof columnWidth === 'function') {
	          var leftGridWidth = 0;
	
	          for (var index = 0; index < fixedColumnCount; index++) {
	            leftGridWidth += columnWidth({ index: index });
	          }
	
	          this._leftGridWidth = leftGridWidth;
	        } else {
	          this._leftGridWidth = columnWidth * fixedColumnCount;
	        }
	      }
	
	      return this._leftGridWidth;
	    }
	  }, {
	    key: '_getRightGridWidth',
	    value: function _getRightGridWidth(props) {
	      var width = props.width;
	
	
	      var leftGridWidth = this._getLeftGridWidth(props);
	
	      return width - leftGridWidth;
	    }
	  }, {
	    key: '_getTopGridHeight',
	    value: function _getTopGridHeight(props) {
	      var fixedRowCount = props.fixedRowCount,
	          rowHeight = props.rowHeight;
	
	
	      if (this._topGridHeight == null) {
	        if (typeof rowHeight === 'function') {
	          var topGridHeight = 0;
	
	          for (var index = 0; index < fixedRowCount; index++) {
	            topGridHeight += rowHeight({ index: index });
	          }
	
	          this._topGridHeight = topGridHeight;
	        } else {
	          this._topGridHeight = rowHeight * fixedRowCount;
	        }
	      }
	
	      return this._topGridHeight;
	    }
	
	    /**
	     * Avoid recreating inline styles each render; this bypasses Grid's shallowCompare.
	     * This method recalculates styles only when specific props change.
	     */
	
	  }, {
	    key: '_maybeCalculateCachedStyles',
	    value: function _maybeCalculateCachedStyles(prevProps, props) {
	      var columnWidth = props.columnWidth,
	          height = props.height,
	          fixedColumnCount = props.fixedColumnCount,
	          fixedRowCount = props.fixedRowCount,
	          rowHeight = props.rowHeight,
	          style = props.style,
	          styleBottomLeftGrid = props.styleBottomLeftGrid,
	          styleBottomRightGrid = props.styleBottomRightGrid,
	          styleTopLeftGrid = props.styleTopLeftGrid,
	          styleTopRightGrid = props.styleTopRightGrid,
	          width = props.width;
	
	
	      var firstRender = !prevProps;
	      var sizeChange = firstRender || height !== prevProps.height || width !== prevProps.width;
	      var leftSizeChange = firstRender || columnWidth !== prevProps.columnWidth || fixedColumnCount !== prevProps.fixedColumnCount;
	      var topSizeChange = firstRender || fixedRowCount !== prevProps.fixedRowCount || rowHeight !== prevProps.rowHeight;
	
	      if (firstRender || sizeChange || style !== prevProps.style) {
	        this._containerOuterStyle = _extends({
	          height: height,
	          width: width
	        }, style);
	      }
	
	      if (firstRender || sizeChange || topSizeChange) {
	        this._containerTopStyle = {
	          height: this._getTopGridHeight(props),
	          position: 'relative',
	          width: width
	        };
	
	        this._containerBottomStyle = {
	          height: height - this._getTopGridHeight(props),
	          overflow: 'hidden',
	          position: 'relative',
	          width: width
	        };
	      }
	
	      if (firstRender || styleBottomLeftGrid !== prevProps.styleBottomLeftGrid) {
	        this._bottomLeftGridStyle = _extends({
	          left: 0,
	          outline: 0,
	          overflowX: 'hidden',
	          overflowY: 'hidden',
	          position: 'absolute'
	        }, styleBottomLeftGrid);
	      }
	
	      if (firstRender || leftSizeChange || styleBottomRightGrid !== prevProps.styleBottomRightGrid) {
	        this._bottomRightGridStyle = _extends({
	          left: this._getLeftGridWidth(props),
	          outline: 0,
	          position: 'absolute'
	        }, styleBottomRightGrid);
	      }
	
	      if (firstRender || styleTopLeftGrid !== prevProps.styleTopLeftGrid) {
	        this._topLeftGridStyle = _extends({
	          left: 0,
	          outline: 0,
	          overflowX: 'hidden',
	          overflowY: 'hidden',
	          position: 'absolute',
	          top: 0
	        }, styleTopLeftGrid);
	      }
	
	      if (firstRender || leftSizeChange || styleTopRightGrid !== prevProps.styleTopRightGrid) {
	        this._topRightGridStyle = _extends({
	          left: this._getLeftGridWidth(props),
	          outline: 0,
	          overflowX: 'hidden',
	          overflowY: 'hidden',
	          position: 'absolute',
	          top: 0
	        }, styleTopRightGrid);
	      }
	    }
	  }, {
	    key: '_onScroll',
	    value: function _onScroll(scrollInfo) {
	      var scrollLeft = scrollInfo.scrollLeft,
	          scrollTop = scrollInfo.scrollTop;
	
	      this.setState({
	        scrollLeft: scrollLeft,
	        scrollTop: scrollTop
	      });
	      var onScroll = this.props.onScroll;
	      if (onScroll) {
	        onScroll(scrollInfo);
	      }
	    }
	  }, {
	    key: '_renderBottomLeftGrid',
	    value: function _renderBottomLeftGrid(props) {
	      var fixedColumnCount = props.fixedColumnCount,
	          fixedRowCount = props.fixedRowCount,
	          rowCount = props.rowCount,
	          scrollTop = props.scrollTop;
	
	
	      if (!fixedColumnCount) {
	        return null;
	      }
	
	      return _react2.default.createElement(_Grid2.default, _extends({}, props, {
	        cellRenderer: this._cellRendererBottomLeftGrid,
	        columnCount: fixedColumnCount,
	        height: this._getBottomGridHeight(props),
	        ref: this._bottomLeftGridRef,
	        rowCount: Math.max(0, rowCount - fixedRowCount),
	        rowHeight: this._rowHeightBottomGrid,
	        scrollTop: scrollTop,
	        style: this._bottomLeftGridStyle,
	        width: this._getLeftGridWidth(props)
	      }));
	    }
	  }, {
	    key: '_renderBottomRightGrid',
	    value: function _renderBottomRightGrid(props) {
	      var columnCount = props.columnCount,
	          fixedColumnCount = props.fixedColumnCount,
	          fixedRowCount = props.fixedRowCount,
	          rowCount = props.rowCount,
	          scrollToColumn = props.scrollToColumn,
	          scrollToRow = props.scrollToRow;
	
	
	      return _react2.default.createElement(_Grid2.default, _extends({}, props, {
	        cellRenderer: this._cellRendererBottomRightGrid,
	        columnCount: Math.max(0, columnCount - fixedColumnCount),
	        columnWidth: this._columnWidthRightGrid,
	        height: this._getBottomGridHeight(props),
	        onScroll: this._onScroll,
	        ref: this._bottomRightGridRef,
	        rowCount: Math.max(0, rowCount - fixedRowCount),
	        rowHeight: this._rowHeightBottomGrid,
	        scrollToColumn: scrollToColumn - fixedColumnCount,
	        scrollToRow: scrollToRow - fixedRowCount,
	        style: this._bottomRightGridStyle,
	        width: this._getRightGridWidth(props)
	      }));
	    }
	  }, {
	    key: '_renderTopLeftGrid',
	    value: function _renderTopLeftGrid(props) {
	      var fixedColumnCount = props.fixedColumnCount,
	          fixedRowCount = props.fixedRowCount;
	
	
	      if (!fixedColumnCount || !fixedRowCount) {
	        return null;
	      }
	
	      return _react2.default.createElement(_Grid2.default, _extends({}, props, {
	        columnCount: fixedColumnCount,
	        height: this._getTopGridHeight(props),
	        ref: this._topLeftGridRef,
	        rowCount: fixedRowCount,
	        style: this._topLeftGridStyle,
	        width: this._getLeftGridWidth(props)
	      }));
	    }
	  }, {
	    key: '_renderTopRightGrid',
	    value: function _renderTopRightGrid(props) {
	      var columnCount = props.columnCount,
	          fixedColumnCount = props.fixedColumnCount,
	          fixedRowCount = props.fixedRowCount,
	          scrollLeft = props.scrollLeft;
	
	
	      if (!fixedRowCount) {
	        return null;
	      }
	
	      return _react2.default.createElement(_Grid2.default, _extends({}, props, {
	        cellRenderer: this._cellRendererTopRightGrid,
	        columnCount: Math.max(0, columnCount - fixedColumnCount),
	        columnWidth: this._columnWidthRightGrid,
	        height: this._getTopGridHeight(props),
	        ref: this._topRightGridRef,
	        rowCount: fixedRowCount,
	        scrollLeft: scrollLeft,
	        style: this._topRightGridStyle,
	        width: this._getRightGridWidth(props)
	      }));
	    }
	  }, {
	    key: '_rowHeightBottomGrid',
	    value: function _rowHeightBottomGrid(_ref6) {
	      var index = _ref6.index;
	      var _props8 = this.props,
	          fixedRowCount = _props8.fixedRowCount,
	          rowHeight = _props8.rowHeight;
	
	
	      return typeof rowHeight === 'function' ? rowHeight({ index: index + fixedRowCount }) : rowHeight;
	    }
	  }, {
	    key: '_topLeftGridRef',
	    value: function _topLeftGridRef(ref) {
	      this._topLeftGrid = ref;
	    }
	  }, {
	    key: '_topRightGridRef',
	    value: function _topRightGridRef(ref) {
	      this._topRightGrid = ref;
	    }
	  }]);
	
	  return MultiGrid;
	}(_react.PureComponent);
	
	MultiGrid.defaultProps = {
	  fixedColumnCount: 0,
	  fixedRowCount: 0,
	  style: {},
	  styleBottomLeftGrid: {},
	  styleBottomRightGrid: {},
	  styleTopLeftGrid: {},
	  styleTopRightGrid: {}
	};
	exports.default = MultiGrid;
	(undefined) !== "production" ? MultiGrid.propTypes = {
	  fixedColumnCount: _react.PropTypes.number.isRequired,
	  fixedRowCount: _react.PropTypes.number.isRequired,
	  style: _react.PropTypes.object.isRequired,
	  styleBottomLeftGrid: _react.PropTypes.object.isRequired,
	  styleBottomRightGrid: _react.PropTypes.object.isRequired,
	  styleTopLeftGrid: _react.PropTypes.object.isRequired,
	  styleTopRightGrid: _react.PropTypes.object.isRequired
	} : void 0;

/***/ },

/***/ 611:
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	
	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	exports.ScrollSync = exports.default = undefined;
	
	var _ScrollSync2 = __webpack_require__(612);
	
	var _ScrollSync3 = _interopRequireDefault(_ScrollSync2);
	
	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
	
	exports.default = _ScrollSync3.default;
	exports.ScrollSync = _ScrollSync3.default;

/***/ },

/***/ 612:
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	
	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	
	var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();
	
	var _react = __webpack_require__(299);
	
	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }
	
	function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }
	
	function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }
	
	/**
	 * HOC that simplifies the process of synchronizing scrolling between two or more virtualized components.
	 */
	var ScrollSync = function (_PureComponent) {
	  _inherits(ScrollSync, _PureComponent);
	
	  function ScrollSync(props, context) {
	    _classCallCheck(this, ScrollSync);
	
	    var _this = _possibleConstructorReturn(this, (ScrollSync.__proto__ || Object.getPrototypeOf(ScrollSync)).call(this, props, context));
	
	    _this.state = {
	      clientHeight: 0,
	      clientWidth: 0,
	      scrollHeight: 0,
	      scrollLeft: 0,
	      scrollTop: 0,
	      scrollWidth: 0
	    };
	
	    _this._onScroll = _this._onScroll.bind(_this);
	    return _this;
	  }
	
	  _createClass(ScrollSync, [{
	    key: 'render',
	    value: function render() {
	      var children = this.props.children;
	      var _state = this.state,
	          clientHeight = _state.clientHeight,
	          clientWidth = _state.clientWidth,
	          scrollHeight = _state.scrollHeight,
	          scrollLeft = _state.scrollLeft,
	          scrollTop = _state.scrollTop,
	          scrollWidth = _state.scrollWidth;
	
	
	      return children({
	        clientHeight: clientHeight,
	        clientWidth: clientWidth,
	        onScroll: this._onScroll,
	        scrollHeight: scrollHeight,
	        scrollLeft: scrollLeft,
	        scrollTop: scrollTop,
	        scrollWidth: scrollWidth
	      });
	    }
	  }, {
	    key: '_onScroll',
	    value: function _onScroll(_ref) {
	      var clientHeight = _ref.clientHeight,
	          clientWidth = _ref.clientWidth,
	          scrollHeight = _ref.scrollHeight,
	          scrollLeft = _ref.scrollLeft,
	          scrollTop = _ref.scrollTop,
	          scrollWidth = _ref.scrollWidth;
	
	      this.setState({ clientHeight: clientHeight, clientWidth: clientWidth, scrollHeight: scrollHeight, scrollLeft: scrollLeft, scrollTop: scrollTop, scrollWidth: scrollWidth });
	    }
	  }]);
	
	  return ScrollSync;
	}(_react.PureComponent);
	
	exports.default = ScrollSync;
	(undefined) !== "production" ? ScrollSync.propTypes = {
	  /**
	   * Function responsible for rendering 2 or more virtualized components.
	   * This function should implement the following signature:
	   * ({ onScroll, scrollLeft, scrollTop }) => PropTypes.element
	   */
	  children: _react.PropTypes.func.isRequired
	} : void 0;

/***/ },

/***/ 613:
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	
	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	exports.IS_SCROLLING_TIMEOUT = exports.WindowScroller = exports.default = undefined;
	
	var _onScroll = __webpack_require__(614);
	
	Object.defineProperty(exports, 'IS_SCROLLING_TIMEOUT', {
	  enumerable: true,
	  get: function get() {
	    return _onScroll.IS_SCROLLING_TIMEOUT;
	  }
	});
	
	var _WindowScroller2 = __webpack_require__(615);
	
	var _WindowScroller3 = _interopRequireDefault(_WindowScroller2);
	
	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
	
	exports.default = _WindowScroller3.default;
	exports.WindowScroller = _WindowScroller3.default;

/***/ },

/***/ 614:
/***/ function(module, exports) {

	'use strict';
	
	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	exports.registerScrollListener = registerScrollListener;
	exports.unregisterScrollListener = unregisterScrollListener;
	var mountedInstances = [];
	var originalBodyPointerEvents = null;
	var disablePointerEventsTimeoutId = null;
	
	/**
	 * Specifies the number of miliseconds during which to disable pointer events while a scroll is in progress.
	 * This improves performance and makes scrolling smoother.
	 */
	var IS_SCROLLING_TIMEOUT = exports.IS_SCROLLING_TIMEOUT = 150;
	
	function enablePointerEventsIfDisabled() {
	  if (disablePointerEventsTimeoutId) {
	    disablePointerEventsTimeoutId = null;
	
	    document.body.style.pointerEvents = originalBodyPointerEvents;
	
	    originalBodyPointerEvents = null;
	  }
	}
	
	function enablePointerEventsAfterDelayCallback() {
	  enablePointerEventsIfDisabled();
	  mountedInstances.forEach(function (instance) {
	    return instance.__resetIsScrolling();
	  });
	}
	
	function enablePointerEventsAfterDelay() {
	  if (disablePointerEventsTimeoutId) {
	    clearTimeout(disablePointerEventsTimeoutId);
	  }
	
	  disablePointerEventsTimeoutId = setTimeout(enablePointerEventsAfterDelayCallback, IS_SCROLLING_TIMEOUT);
	}
	
	function onScrollWindow(event) {
	  if (event.currentTarget === window && originalBodyPointerEvents == null) {
	    originalBodyPointerEvents = document.body.style.pointerEvents;
	
	    document.body.style.pointerEvents = 'none';
	  }
	  enablePointerEventsAfterDelay();
	  mountedInstances.forEach(function (instance) {
	    if (instance.scrollElement === event.currentTarget) {
	      instance.__handleWindowScrollEvent(event);
	    }
	  });
	}
	
	function registerScrollListener(component, element) {
	  if (!mountedInstances.some(function (instance) {
	    return instance.scrollElement === element;
	  })) {
	    element.addEventListener('scroll', onScrollWindow);
	  }
	  mountedInstances.push(component);
	}
	
	function unregisterScrollListener(component, element) {
	  mountedInstances = mountedInstances.filter(function (instance) {
	    return instance !== component;
	  });
	  if (!mountedInstances.length) {
	    element.removeEventListener('scroll', onScrollWindow);
	    if (disablePointerEventsTimeoutId) {
	      clearTimeout(disablePointerEventsTimeoutId);
	      enablePointerEventsIfDisabled();
	    }
	  }
	}

/***/ },

/***/ 615:
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	
	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	
	var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();
	
	var _react = __webpack_require__(299);
	
	var _reactDom = __webpack_require__(329);
	
	var _reactDom2 = _interopRequireDefault(_reactDom);
	
	var _onScroll = __webpack_require__(614);
	
	var _dimensions = __webpack_require__(616);
	
	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
	
	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }
	
	function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }
	
	function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }
	
	var WindowScroller = function (_PureComponent) {
	  _inherits(WindowScroller, _PureComponent);
	
	  function WindowScroller(props) {
	    _classCallCheck(this, WindowScroller);
	
	    // Handle server-side rendering case
	    var _this = _possibleConstructorReturn(this, (WindowScroller.__proto__ || Object.getPrototypeOf(WindowScroller)).call(this, props));
	
	    var height = typeof window !== 'undefined' ? (0, _dimensions.getHeight)(props.scrollElement || window) : 0;
	
	    _this.state = {
	      height: height,
	      isScrolling: false,
	      scrollTop: 0
	    };
	
	    _this._onResize = _this._onResize.bind(_this);
	    _this.__handleWindowScrollEvent = _this.__handleWindowScrollEvent.bind(_this);
	    _this.__resetIsScrolling = _this.__resetIsScrolling.bind(_this);
	    return _this;
	  }
	
	  // Can’t use defaultProps for scrollElement without breaking server-side rendering
	
	
	  _createClass(WindowScroller, [{
	    key: 'updatePosition',
	    value: function updatePosition(scrollElement) {
	      var onResize = this.props.onResize;
	      var height = this.state.height;
	
	
	      scrollElement = scrollElement || this.props.scrollElement || window;
	      this._positionFromTop = (0, _dimensions.getPositionFromTop)(_reactDom2.default.findDOMNode(this), scrollElement);
	
	      var newHeight = (0, _dimensions.getHeight)(scrollElement);
	      if (height !== newHeight) {
	        this.setState({
	          height: newHeight
	        });
	        onResize({
	          height: newHeight
	        });
	      }
	    }
	  }, {
	    key: 'componentDidMount',
	    value: function componentDidMount() {
	      var scrollElement = this.props.scrollElement || window;
	
	      this.updatePosition(scrollElement);
	
	      (0, _onScroll.registerScrollListener)(this, scrollElement);
	
	      window.addEventListener('resize', this._onResize, false);
	    }
	  }, {
	    key: 'componentWillReceiveProps',
	    value: function componentWillReceiveProps(nextProps) {
	      var scrollElement = this.props.scrollElement || window;
	      var nextScrollElement = nextProps.scrollElement || window;
	
	      if (scrollElement !== nextScrollElement) {
	        this.updatePosition(nextScrollElement);
	
	        (0, _onScroll.unregisterScrollListener)(this, scrollElement);
	        (0, _onScroll.registerScrollListener)(this, nextScrollElement);
	      }
	    }
	  }, {
	    key: 'componentWillUnmount',
	    value: function componentWillUnmount() {
	      (0, _onScroll.unregisterScrollListener)(this, this.props.scrollElement || window);
	
	      window.removeEventListener('resize', this._onResize, false);
	    }
	  }, {
	    key: 'render',
	    value: function render() {
	      var children = this.props.children;
	      var _state = this.state,
	          isScrolling = _state.isScrolling,
	          scrollTop = _state.scrollTop,
	          height = _state.height;
	
	
	      return children({
	        height: height,
	        isScrolling: isScrolling,
	        scrollTop: scrollTop
	      });
	    }
	  }, {
	    key: '_onResize',
	    value: function _onResize(event) {
	      this.updatePosition();
	    }
	
	    // Referenced by utils/onScroll
	
	  }, {
	    key: '__handleWindowScrollEvent',
	    value: function __handleWindowScrollEvent(event) {
	      var onScroll = this.props.onScroll;
	
	
	      var scrollElement = this.props.scrollElement || window;
	      var scrollTop = Math.max(0, (0, _dimensions.getScrollTop)(scrollElement) - this._positionFromTop);
	
	      this.setState({
	        isScrolling: true,
	        scrollTop: scrollTop
	      });
	
	      onScroll({
	        scrollTop: scrollTop
	      });
	    }
	
	    // Referenced by utils/onScroll
	
	  }, {
	    key: '__resetIsScrolling',
	    value: function __resetIsScrolling() {
	      this.setState({
	        isScrolling: false
	      });
	    }
	  }, {
	    key: 'scrollElement',
	    get: function get() {
	      return this.props.scrollElement || window;
	    }
	  }]);
	
	  return WindowScroller;
	}(_react.PureComponent);
	
	WindowScroller.defaultProps = {
	  onResize: function onResize() {},
	  onScroll: function onScroll() {}
	};
	exports.default = WindowScroller;
	(undefined) !== "production" ? WindowScroller.propTypes = {
	  /**
	   * Function responsible for rendering children.
	   * This function should implement the following signature:
	   * ({ height, isScrolling, scrollTop }) => PropTypes.element
	   */
	  children: _react.PropTypes.func.isRequired,
	
	  /** Callback to be invoked on-resize: ({ height }) */
	  onResize: _react.PropTypes.func.isRequired,
	
	  /** Callback to be invoked on-scroll: ({ scrollTop }) */
	  onScroll: _react.PropTypes.func.isRequired,
	
	  /** Element to attach scroll event listeners. Defaults to window. */
	  scrollElement: _react.PropTypes.any
	} : void 0;

/***/ },

/***/ 616:
/***/ function(module, exports) {

	'use strict';
	
	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	exports.getHeight = getHeight;
	exports.getPositionFromTop = getPositionFromTop;
	exports.getScrollTop = getScrollTop;
	/**
	 * Gets the height of the element, accounting for API differences between
	 * `window` and other DOM elements.
	 */
	function getHeight(element) {
	  if (element === window) {
	    return typeof window.innerHeight === 'number' ? window.innerHeight : 0;
	  }
	
	  return element.getBoundingClientRect().height;
	}
	
	/**
	 * Gets the vertical position of an element within its scroll container.
	 * Elements that have been “scrolled past” return negative values.
	 * Handles edge-case where a user is navigating back (history) from an already-scrolled page.
	 * In this case the body’s top position will be a negative number and this element’s top will be increased (by that amount).
	 */
	function getPositionFromTop(element, container) {
	  var offset = container === window ? 0 : getScrollTop(container);
	  var containerElement = container === window ? document.documentElement : container;
	  return element.getBoundingClientRect().top + offset - containerElement.getBoundingClientRect().top;
	}
	
	/**
	 * Gets the vertical scroll amount of the element, accounting for IE compatibility
	 * and API differences between `window` and other DOM elements.
	 */
	function getScrollTop(element) {
	  if (element === window) {
	    return 'scrollY' in window ? window.scrollY : document.documentElement.scrollTop;
	  } else {
	    return element.scrollTop;
	  }
	}

/***/ },

/***/ 617:
/***/ function(module, exports, __webpack_require__) {

	// style-loader: Adds some css to the DOM by adding a <style> tag
	
	// load the styles
	var content = __webpack_require__(618);
	if(typeof content === 'string') content = [[module.id, content, '']];
	// add the styles to the DOM
	var update = __webpack_require__(484)(content, {});
	if(content.locals) module.exports = content.locals;
	// Hot Module Replacement
	if(false) {
		// When the styles change, update the <style> tags
		if(!content.locals) {
			module.hot.accept("!!../../../node_modules/css-loader/index.js!../../../node_modules/sass-loader/index.js?outputStyle=expanded!./CompactDashboard.scss", function() {
				var newContent = require("!!../../../node_modules/css-loader/index.js!../../../node_modules/sass-loader/index.js?outputStyle=expanded!./CompactDashboard.scss");
				if(typeof newContent === 'string') newContent = [[module.id, newContent, '']];
				update(newContent);
			});
		}
		// When the module is disposed, remove the <style> tags
		module.hot.dispose(function() { update(); });
	}

/***/ },

/***/ 618:
/***/ function(module, exports, __webpack_require__) {

	exports = module.exports = __webpack_require__(483)();
	// imports
	
	
	// module
	exports.push([module.id, "::-webkit-scrollbar {\n  width: 13px;\n  margin-top: 10px;\n  border-radius: 15px;\n  margin-right: 3px;\n  background: transparent;\n}\n\n::-webkit-scrollbar-track {\n  border-radius: 15px;\n  margin-top: 7px;\n  background: #EEEFF4;\n  margin-bottom: 7px;\n}\n\n::-webkit-scrollbar-thumb {\n  border-radius: 10px;\n  margin-top: 10px;\n  background: #D2D3D9;\n}\n\n::-webkit-scrollbar-thumb:window-inactive {\n  background: #D2D3D9;\n}\n\n.compact-dashboard-container {\n  font-family: \"Segoe UI WestEuropean\",\"Segoe UI\",-apple-system,BlinkMacSystemFont,Roboto,\"Helvetica Neue\",sans-serif;\n  -webkit-font-smoothing: antialiased;\n  width: 100%;\n  height: 100%;\n  background-color: #e8e9ef;\n  border-color: #e8e9ef;\n  overflow: hidden;\n  color: #6b6b6b;\n}\n\n.compact-dashboard-container .farm {\n  padding-bottom: 25px;\n}\n\n.compact-dashboard-container .farm:first-child {\n  margin-top: 70px;\n}\n\n.compact-dashboard-container .compact-dashboard-server {\n  order: 1;\n}\n\n.compact-dashboard-container .compact-server-container {\n  font-size: 14px;\n  max-width: 215px;\n  display: inline-block;\n}\n\n.compact-dashboard-container.vertical {\n  width: 100%;\n  color: #6b6b6b;\n}\n\n.compact-dashboard-container.vertical .farm {\n  max-width: 350px;\n  display: block;\n  margin: auto;\n  margin-top: 6px;\n  margin-left: 15px;\n  top: 50px;\n  margin-bottom: 6px;\n  padding-bottom: 25px;\n}\n\n.compact-dashboard-container.vertical .farm .compact-server-container {\n  max-width: 245px;\n}\n", ""]);
	
	// exports


/***/ },

/***/ 619:
/***/ function(module, exports, __webpack_require__) {

	"use strict";
	
	var React = __webpack_require__(299);
	var ServerTile_1 = __webpack_require__(620);
	var AutoSizer = __webpack_require__(567).AutoSizer;
	var Group_1 = __webpack_require__(561);
	var GroupHeader_1 = __webpack_require__(564);
	var List = __webpack_require__(567).List;
	var classNames = __webpack_require__(476);
	var TagContainer_1 = __webpack_require__(539);
	var autobind_1 = __webpack_require__(498);
	var models_1 = __webpack_require__(542);
	__webpack_require__(626);
	function checkFilter(filter, serverName) {
	    return serverName.toLowerCase().trim().indexOf(filter.toLowerCase().trim()) !== -1;
	}
	function sortFarmServers(ob1, ob2) {
	    if (ob1.status > ob2.status) {
	        return 1;
	    } else if (ob1.status < ob2.status) {
	        return -1;
	    }
	    if (ob1.name < ob2.name) {
	        return -1;
	    } else if (ob1.name > ob2.name) {
	        return 1;
	    } else {
	        return 0;
	    }
	}
	var TileDashboard = function (_super) {
	    __extends(TileDashboard, _super);
	    function TileDashboard(props) {
	        _super.call(this, props);
	    }
	    TileDashboard.prototype.componentDidUpdate = function (prevProps, prevState) {
	        if (this.props.filter !== prevProps.filter && this.list) {
	            this.list.recomputeRowHeights();
	        }
	    };
	    TileDashboard.prototype.render = function () {
	        var _this = this;
	        var farms = this.props.farms;
	        var classname = classNames((_a = {}, _a[this.props.className] = this.props.className !== undefined, _a));
	        return React.createElement("div", { className: classname }, React.createElement("div", { className: "tile-dashboard-container" }, React.createElement(AutoSizer, null, function (_a) {
	            var width = _a.width,
	                height = _a.height;
	            return React.createElement(List, { height: height, ref: function (reference) {
	                    _this.list = reference;
	                }, rowCount: farms.length, rowHeight: function (index) {
	                    return this.calculateRowHeight(width, index);
	                }.bind(_this), rowRenderer: _this._renderRow, width: width });
	        })));
	        var _a;
	    };
	    TileDashboard.prototype.calculateRowHeight = function (width, obj) {
	        var _this = this;
	        var numberPerRow = Math.floor((width - 72) / 281.0);
	        var farmServerCount = this.getRow(obj.index).servers.filter(function (server) {
	            return checkFilter(_this.props.filter, server.name);
	        }).length;
	        var rowCount = Math.floor(farmServerCount / numberPerRow) + (farmServerCount % numberPerRow === 0 ? 0 : 1);
	        var serverHeight = rowCount * 183;
	        var serverRoleDiff = this.getRow(obj.index).servers.some(function (server) {
	            return checkFilter(_this.props.filter, server.name) && server.roles.length > 0;
	        }) ? rowCount * 30 : 0;
	        if (this.getRow(obj.index).isCustom) {
	            serverRoleDiff += 21;
	        }
	        return serverHeight + 140 + serverRoleDiff + 60;
	    };
	    TileDashboard.prototype.getRow = function (index) {
	        var farms = this.props.farms;
	        return farms[index];
	    };
	    TileDashboard.prototype._renderRow = function (_a) {
	        var _this = this;
	        var index = _a.index,
	            isScrolling = _a.isScrolling,
	            key = _a.key,
	            style = _a.style;
	        var farm = this.getRow(index);
	        var servers = farm.servers.filter(function (server) {
	            return checkFilter(_this.props.filter, server.name);
	        }).sort(sortFarmServers);
	        return React.createElement("div", { style: style, key: index }, React.createElement(Group_1.Group, { serverChildrenCount: servers.length, filter: this.props.filter, className: 'farm-name-inside', id: farm.id, name: farm.name, key: farm.id.configDataBaseName + '-' + farm.id.sqlInstance }, React.createElement(GroupHeader_1.GroupHeader, { version: farm.version, isCustomFarm: farm.isCustom, farmId: farm.id }), servers.map(function (server, serverIndex) {
	            return React.createElement(ServerTile_1.ServerTile, { key: serverIndex, name: server.name, id: server.id, roles: server.roles, status: server.status, countersData: _this.getMeasures(server.measures) }, server.roles.length > 0 && React.createElement(TagContainer_1.TagContainer, { title: '', tags: server.roles }));
	        })));
	    };
	    TileDashboard.prototype.getMeasures = function (serverMeasures) {
	        var counters = [];
	        serverMeasures.forEach(function (measure) {
	            if (measure.type === models_1.MeasureType.CPU) {
	                counters.push(convertCPU(measure));
	            } else if (measure.type === models_1.MeasureType.Ram) {
	                counters.push(convertRam(measure));
	            } else if (measure.type === models_1.MeasureType.Disk) {
	                counters.push(convertDisk(measure));
	            } else if (measure.type === models_1.MeasureType.Network) {
	                counters.push(convertNetwork(measure));
	            }
	        });
	        return counters;
	    };
	    __decorate([autobind_1.autobind, __metadata('design:type', Function), __metadata('design:paramtypes', [Object, Object]), __metadata('design:returntype', void 0)], TileDashboard.prototype, "componentDidUpdate", null);
	    __decorate([autobind_1.autobind, __metadata('design:type', Function), __metadata('design:paramtypes', [Object, Object]), __metadata('design:returntype', Number)], TileDashboard.prototype, "calculateRowHeight", null);
	    __decorate([autobind_1.autobind, __metadata('design:type', Function), __metadata('design:paramtypes', [Number]), __metadata('design:returntype', Object)], TileDashboard.prototype, "getRow", null);
	    __decorate([autobind_1.autobind, __metadata('design:type', Function), __metadata('design:paramtypes', [Object]), __metadata('design:returntype', Object)], TileDashboard.prototype, "_renderRow", null);
	    return TileDashboard;
	}(React.Component);
	exports.TileDashboard = TileDashboard;
	var emptyValueString = '--';
	function convertDisk(measure) {
	    var disk = measure;
	    var usageUnit = '';
	    var value = emptyValueString;
	    if (disk.totalDiskIo) {
	        usageUnit = 'KB/s';
	        value = disk.totalDiskIo.toString();
	        if (disk.totalDiskIo > 1024) {
	            value = (disk.totalDiskIo / 1024).toFixed(1);
	            usageUnit = 'MB/s';
	        }
	    }
	    return {
	        title: 'Disk',
	        usageUnit: usageUnit,
	        hoverText: [],
	        status: disk.status,
	        currentUsage: value
	    };
	}
	function convertNetwork(measure) {
	    var network = measure;
	    var usageUnit = '';
	    var value = emptyValueString;
	    if (network.kbTotal) {
	        usageUnit = 'kbps';
	        value = network.kbTotal.toString();
	        if (network.kbTotal > 1024) {
	            value = (network.kbTotal / 1024).toFixed(1);
	            usageUnit = 'Mbps';
	        }
	    }
	    return {
	        title: 'Network',
	        usageUnit: usageUnit,
	        hoverText: [''],
	        status: network.status,
	        currentUsage: value
	    };
	}
	function convertRam(measure) {
	    var ram = measure;
	    var used = emptyValueString;
	    var capacity = '';
	    var hoverText = '';
	    var usageUnit = '';
	    if (ram.used) {
	        used = ram.used.toFixed(1);
	        capacity = ram.capacity.toFixed(1);
	        usageUnit = 'MB';
	        hoverText = used + '/' + capacity + '' + usageUnit;
	        if (ram.used > 1024 || ram.capacity > 1024) {
	            used = (ram.used / 1024).toFixed(1);
	            capacity = (ram.capacity / 1024).toFixed(1);
	            usageUnit = 'GB';
	        }
	    }
	    return {
	        title: 'Memory',
	        usageUnit: usageUnit,
	        hoverText: [hoverText],
	        status: ram.status,
	        currentUsage: used.toString()
	    };
	}
	function convertCPU(measure) {
	    var cpu = measure;
	    var usage = emptyValueString;
	    var usageUnit = '';
	    if (cpu.usage) {
	        usageUnit = '%';
	        usage = cpu.usage.toString();
	    }
	    return {
	        title: 'CPU',
	        usageUnit: usageUnit,
	        hoverText: [''],
	        status: cpu.status,
	        currentUsage: usage
	    };
	}

/***/ },

/***/ 620:
/***/ function(module, exports, __webpack_require__) {

	"use strict";
	
	var React = __webpack_require__(299);
	var classNames = __webpack_require__(476);
	var Label_1 = __webpack_require__(621);
	var Icon_1 = __webpack_require__(480);
	var models_1 = __webpack_require__(542);
	__webpack_require__(624);
	var ServerTile = function (_super) {
	    __extends(ServerTile, _super);
	    function ServerTile(props) {
	        _super.call(this, props);
	    }
	    ServerTile.prototype.render = function () {
	        var isCritical = this.props.status === models_1.ServerStatus.Critical;
	        var isWarning = this.props.status === models_1.ServerStatus.Warning;
	        var isOK = this.props.status === models_1.ServerStatus.OK;
	        var className = classNames('server-details', { 'status-warning': isWarning }, { 'status-ok': isOK }, { 'status-critical': isCritical });
	        return React.createElement("div", { className: className }, React.createElement("div", { className: 'server-details-header' }, React.createElement(Label_1.Label, { className: "server-name", title: this.props.name }, this.props.name), React.createElement(Icon_1.Icon, { className: classNames('disk-icon'), iconName: 'icon-sql_log', title: 'Disks\n' + this.createTooltipText(this.props.diskInformation) }), this.props.numberOfUsers && React.createElement(Icon_1.Icon, { "data-users": this.props.numberOfUsers, iconName: 'icon-user', title: this.props.numberOfUsers + ' number of users online' }), this.props.onClose && React.createElement(Icon_1.Icon, { disabled: false, className: 'dialog-button dialog-button-close', onClick: this.dismiss.bind(this), iconName: 'icon-delete' }), this.props.children), React.createElement("div", { className: 'counters-container' }, this.createCountersTiles(this.props.countersData)));
	    };
	    ServerTile.prototype.dismiss = function () {
	        this.props.onClose(this.props.id);
	    };
	    ServerTile.prototype.createCountersTiles = function (collection) {
	        var _this = this;
	        return collection.map(function (data, index) {
	            return React.createElement("div", { key: index, className: 'tile', title: _this.createTooltipText(data.hoverText) }, React.createElement("p", null, data.title), React.createElement(Label_1.Label, { className: classNames({ 'status-warning': data.status === models_1.ServerStatus.Warning }, { 'status-ok': data.status === models_1.ServerStatus.OK }, { 'status-critical': data.status === models_1.ServerStatus.Critical }) }, data.currentUsage), React.createElement(Label_1.Label, { className: classNames({ 'status-warning': data.status === models_1.ServerStatus.Warning }, { 'status-ok': data.status === models_1.ServerStatus.OK }, { 'status-critical': data.status === models_1.ServerStatus.Critical }) }, data.usageUnit));
	        });
	    };
	    ServerTile.prototype.createTooltipText = function (arr) {
	        if (!arr) {
	            return '';
	        }
	        var data = '';
	        for (var i = 0; i < arr.length; i++) {
	            data += arr[i] + '\n';
	        }
	        return data;
	    };
	    return ServerTile;
	}(React.PureComponent);
	exports.ServerTile = ServerTile;

/***/ },

/***/ 621:
/***/ function(module, exports, __webpack_require__) {

	"use strict";
	
	var React = __webpack_require__(299);
	var classNames = __webpack_require__(476);
	var attributes_1 = __webpack_require__(478);
	__webpack_require__(622);
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

/***/ 622:
/***/ function(module, exports, __webpack_require__) {

	// style-loader: Adds some css to the DOM by adding a <style> tag
	
	// load the styles
	var content = __webpack_require__(623);
	if(typeof content === 'string') content = [[module.id, content, '']];
	// add the styles to the DOM
	var update = __webpack_require__(484)(content, {});
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

/***/ 623:
/***/ function(module, exports, __webpack_require__) {

	exports = module.exports = __webpack_require__(483)();
	// imports
	
	
	// module
	exports.push([module.id, "::-webkit-scrollbar {\n  width: 13px;\n  margin-top: 10px;\n  border-radius: 15px;\n  margin-right: 3px;\n  background: transparent;\n}\n\n::-webkit-scrollbar-track {\n  border-radius: 15px;\n  margin-top: 7px;\n  background: #EEEFF4;\n  margin-bottom: 7px;\n}\n\n::-webkit-scrollbar-thumb {\n  border-radius: 10px;\n  margin-top: 10px;\n  background: #D2D3D9;\n}\n\n::-webkit-scrollbar-thumb:window-inactive {\n  background: #D2D3D9;\n}\n\n.label {\n  font-family: \"Segoe UI WestEuropean\", \"Segoe UI\", -apple-system, BlinkMacSystemFont, Roboto, \"Helvetica Neue\", sans-serif;\n  font-size: 14px;\n  color: #333333;\n  box-sizing: border-box;\n  display: block;\n  padding: 5px 0;\n}\n\n.label.label-required::after {\n  content: ' *';\n  color: #a80000;\n}\n\n.label.label-disabled {\n  color: #a6a6a6;\n}\n", ""]);
	
	// exports


/***/ },

/***/ 624:
/***/ function(module, exports, __webpack_require__) {

	// style-loader: Adds some css to the DOM by adding a <style> tag
	
	// load the styles
	var content = __webpack_require__(625);
	if(typeof content === 'string') content = [[module.id, content, '']];
	// add the styles to the DOM
	var update = __webpack_require__(484)(content, {});
	if(content.locals) module.exports = content.locals;
	// Hot Module Replacement
	if(false) {
		// When the styles change, update the <style> tags
		if(!content.locals) {
			module.hot.accept("!!../../../node_modules/css-loader/index.js!../../../node_modules/sass-loader/index.js?outputStyle=expanded!./ServerTile.scss", function() {
				var newContent = require("!!../../../node_modules/css-loader/index.js!../../../node_modules/sass-loader/index.js?outputStyle=expanded!./ServerTile.scss");
				if(typeof newContent === 'string') newContent = [[module.id, newContent, '']];
				update(newContent);
			});
		}
		// When the module is disposed, remove the <style> tags
		module.hot.dispose(function() { update(); });
	}

/***/ },

/***/ 625:
/***/ function(module, exports, __webpack_require__) {

	exports = module.exports = __webpack_require__(483)();
	// imports
	
	
	// module
	exports.push([module.id, "::-webkit-scrollbar {\n  width: 13px;\n  margin-top: 10px;\n  border-radius: 15px;\n  margin-right: 3px;\n  background: transparent;\n}\n\n::-webkit-scrollbar-track {\n  border-radius: 15px;\n  margin-top: 7px;\n  background: #EEEFF4;\n  margin-bottom: 7px;\n}\n\n::-webkit-scrollbar-thumb {\n  border-radius: 10px;\n  margin-top: 10px;\n  background: #D2D3D9;\n}\n\n::-webkit-scrollbar-thumb:window-inactive {\n  background: #D2D3D9;\n}\n\n.server-details {\n  font-family: \"Segoe UI\", Tahoma, Geneva, Verdana, sans-serif;\n  width: 280px;\n  display: inline-block;\n  margin: 5px;\n  position: relative;\n  padding: 0;\n  border-left: 10px solid #6b6b6b;\n  background-color: #e8e9ef;\n}\n\n.server-details .icon {\n  color: #6b6b6b;\n}\n\n.server-details .server-details-header {\n  font-size: 14px;\n  width: 100%;\n  padding: 0;\n  display: block;\n  margin: 5px 0px 10px 0px;\n}\n\n.server-details .server-details-header .server-name {\n  padding: 0;\n  margin: 2px 2px 2px 5px;\n  display: inline-block;\n  font-weight: 400;\n  font-size: 17px;\n  color: #4b4949;\n  max-width: 40%;\n  white-space: nowrap;\n  overflow: hidden;\n  text-overflow: ellipsis;\n  vertical-align: bottom;\n}\n\n.server-details .server-details-header .disk-icon {\n  padding: 0;\n  margin: 5px 10px 5px 25px;\n}\n\n.server-details .server-details-header .tag-container {\n  position: relative;\n  float: left;\n  width: 100%;\n  margin: 3px 0 10px 0;\n  background: #e8e9ef;\n  color: #7e7f82;\n}\n\n.server-details .server-details-header .tag-container .tag {\n  background: #e8e9ef;\n  margin-top: 0;\n  margin-bottom: 0;\n  padding-top: 0;\n  padding-bottom: 0;\n  margin: 0;\n  font-size: 12px;\n  font-weight: normal;\n  margin-left: 4px;\n}\n\n.server-details .server-details-header .tag-container .tag .icon {\n  color: #7e7f82;\n}\n\n.server-details .server-details-header .tag-container .edit-tags:hover {\n  background: inherit;\n  color: #7DC458;\n}\n\n.server-details .server-details-header .tag-container .edit-tags:hover .icon {\n  background: inherit;\n  color: #7DC458;\n}\n\n.server-details .dialog-button-close {\n  float: right;\n  margin: 5px 10px 5px 5px;\n  cursor: pointer;\n}\n\n.server-details .dialog-button-close:hover {\n  color: #A09f9f;\n}\n\n.server-details .counters-container {\n  display: block;\n  width: 100%;\n  height: 75%;\n  margin: 10px 0px 10px 0px;\n}\n\n.server-details .counters-container .tile {\n  width: calc(45% - 12px);\n  display: inline-block;\n  text-align: center;\n  height: calc(35% - 2px);\n  border-top: 1px solid white;\n  padding-left: 3px;\n  padding-right: 3px;\n}\n\n.server-details .counters-container .tile p {\n  text-align: center;\n  color: #A09f9f;\n  font-size: 12px;\n  margin: 9px 0px 2px 0px;\n}\n\n.server-details .counters-container .tile:nth-child(odd) {\n  border-right: 1px solid white;\n  margin-left: calc(5% + 1px);\n}\n\n.server-details .counters-container .tile:nth-child(even) {\n  border-left: 1px solid #e8e9ef;\n}\n\n.server-details .counters-container .tile .label {\n  display: inline-block;\n  color: #4b4949;\n}\n\n.server-details .counters-container .tile .label:nth-child(2) {\n  font-size: 24px;\n}\n\n.server-details .counters-container .tile .label:nth-child(3) {\n  font-size: 14px;\n}\n\n.server-details .icon-user:after {\n  content: attr(data-users);\n  padding: 0;\n  margin: 0px 0px 2px 5px;\n  font-family: \"Segoe UI\", Tahoma, Geneva, Verdana, sans-serif;\n  font-size: 14px;\n}\n\n.server-details .icon-delete {\n  color: #4b4949;\n}\n\n.server-details .icon-delete:hover {\n  color: #fb6464;\n}\n", ""]);
	
	// exports


/***/ },

/***/ 626:
/***/ function(module, exports, __webpack_require__) {

	// style-loader: Adds some css to the DOM by adding a <style> tag
	
	// load the styles
	var content = __webpack_require__(627);
	if(typeof content === 'string') content = [[module.id, content, '']];
	// add the styles to the DOM
	var update = __webpack_require__(484)(content, {});
	if(content.locals) module.exports = content.locals;
	// Hot Module Replacement
	if(false) {
		// When the styles change, update the <style> tags
		if(!content.locals) {
			module.hot.accept("!!../../../node_modules/css-loader/index.js!../../../node_modules/sass-loader/index.js?outputStyle=expanded!./TileDashboard.scss", function() {
				var newContent = require("!!../../../node_modules/css-loader/index.js!../../../node_modules/sass-loader/index.js?outputStyle=expanded!./TileDashboard.scss");
				if(typeof newContent === 'string') newContent = [[module.id, newContent, '']];
				update(newContent);
			});
		}
		// When the module is disposed, remove the <style> tags
		module.hot.dispose(function() { update(); });
	}

/***/ },

/***/ 627:
/***/ function(module, exports, __webpack_require__) {

	exports = module.exports = __webpack_require__(483)();
	// imports
	
	
	// module
	exports.push([module.id, "::-webkit-scrollbar {\n  width: 13px;\n  margin-top: 10px;\n  border-radius: 15px;\n  margin-right: 3px;\n  background: transparent;\n}\n\n::-webkit-scrollbar-track {\n  border-radius: 15px;\n  margin-top: 7px;\n  background: #EEEFF4;\n  margin-bottom: 7px;\n}\n\n::-webkit-scrollbar-thumb {\n  border-radius: 10px;\n  margin-top: 10px;\n  background: #D2D3D9;\n}\n\n::-webkit-scrollbar-thumb:window-inactive {\n  background: #D2D3D9;\n}\n\n.tile-dashboard-container {\n  font-family: \"Segoe UI WestEuropean\",\"Segoe UI\",-apple-system,BlinkMacSystemFont,Roboto,\"Helvetica Neue\",sans-serif;\n  -webkit-font-smoothing: antialiased;\n  width: 100%;\n  height: 100%;\n  background-color: #e8e9ef;\n  border-color: #e8e9ef;\n  overflow-y: auto;\n}\n\n.tile-dashboard-container .farm {\n  padding-bottom: 25px;\n  margin-top: 50px;\n}\n\n.tile-dashboard-container .farm:first-child {\n  margin-top: 70px;\n}\n\n.tile-dashboard-container .server-details {\n  width: 250px;\n  display: inline-block;\n  margin: 10px;\n  position: relative;\n  padding: 0;\n  border-left: 10px solid #6b6b6b;\n  background-color: #e8e9ef;\n}\n\n.tile-dashboard-container .server-details .server-details-header {\n  font-size: 14px;\n  width: 100%;\n  padding: 0;\n  display: block;\n  margin: 5px 0px 10px 0px;\n  cursor: pointer;\n}\n\n.tile-dashboard-container .server-details .server-details-header .icon-user {\n  width: calc(55% - 90px);\n  white-space: nowrap;\n  overflow: hidden;\n  text-overflow: ellipsis;\n  vertical-align: text-bottom;\n}\n\n.tile-dashboard-container .server-details .server-details-header .icon:first-child {\n  padding-left: 10px;\n}\n\n.tile-dashboard-container .server-details .server-details-header hr {\n  width: calc(100% - 27px);\n}\n\n.tile-dashboard-container .server-details .server-details-header .server-name {\n  padding-left: 10px;\n  width: calc(45% - 10px);\n  white-space: nowrap;\n  overflow: hidden;\n  text-overflow: ellipsis;\n  vertical-align: bottom;\n}\n\n.tile-dashboard-container .tile .label:nth-child(2) {\n  max-width: 45%;\n  text-overflow: ellipsis;\n  overflow: hidden;\n  display: inline-flex;\n}\n\n.tile-dashboard-container .tile .label.status-warning {\n  color: #EAC71A;\n}\n\n.tile-dashboard-container .tile .label.status-critical {\n  color: #fb6464;\n}\n\n.tile-dashboard-container .status-ok {\n  border-left-color: #7DC458;\n}\n\n.tile-dashboard-container .status-warning {\n  border-left-color: #EAC71A;\n}\n\n.tile-dashboard-container .status-critical {\n  border-left-color: #fb6464;\n}\n\n.tile-dashboard-container .offline {\n  border-left-color: #6b6b6b;\n}\n", ""]);
	
	// exports


/***/ },

/***/ 628:
/***/ function(module, exports) {

	"use strict";
	
	(function (ActiveDashboard) {
	    ActiveDashboard[ActiveDashboard["CompactHorizontal"] = 0] = "CompactHorizontal";
	    ActiveDashboard[ActiveDashboard["CompactVertical"] = 1] = "CompactVertical";
	    ActiveDashboard[ActiveDashboard["Tiles"] = 2] = "Tiles";
	    ActiveDashboard[ActiveDashboard["Grid"] = 3] = "Grid";
	})(exports.ActiveDashboard || (exports.ActiveDashboard = {}));
	var ActiveDashboard = exports.ActiveDashboard;

/***/ },

/***/ 629:
/***/ function(module, exports, __webpack_require__) {

	// style-loader: Adds some css to the DOM by adding a <style> tag
	
	// load the styles
	var content = __webpack_require__(630);
	if(typeof content === 'string') content = [[module.id, content, '']];
	// add the styles to the DOM
	var update = __webpack_require__(484)(content, {});
	if(content.locals) module.exports = content.locals;
	// Hot Module Replacement
	if(false) {
		// When the styles change, update the <style> tags
		if(!content.locals) {
			module.hot.accept("!!../../../node_modules/css-loader/index.js!../../../node_modules/sass-loader/index.js?outputStyle=expanded!./Dashboard.scss", function() {
				var newContent = require("!!../../../node_modules/css-loader/index.js!../../../node_modules/sass-loader/index.js?outputStyle=expanded!./Dashboard.scss");
				if(typeof newContent === 'string') newContent = [[module.id, newContent, '']];
				update(newContent);
			});
		}
		// When the module is disposed, remove the <style> tags
		module.hot.dispose(function() { update(); });
	}

/***/ },

/***/ 630:
/***/ function(module, exports, __webpack_require__) {

	exports = module.exports = __webpack_require__(483)();
	// imports
	
	
	// module
	exports.push([module.id, ".viewport-height {\n  height: 90vh;\n  width: 100%;\n  margin-bottom: 100px;\n}\n", ""]);
	
	// exports


/***/ },

/***/ 631:
/***/ function(module, exports, __webpack_require__) {

	"use strict";
	
	var models_1 = __webpack_require__(542);
	var farms_1 = __webpack_require__(632);
	exports.dummyCompact = {
	    title: 'My compact dashboard',
	    farms: farms_1.farms,
	    className: '',
	    filter: '',
	    isVertical: false
	};
	exports.dummyTiles = {
	    className: '',
	    filter: '',
	    farms: farms_1.farms.map(convertFarm)
	};
	exports.dummyDashboard = {
	    title: 'Dummy dashboard',
	    filter: '',
	    activeView: 0,
	    hasAddButton: true,
	    headerClass: '',
	    differentDashboards: { 0: { linkText: 'Compact Horizontal' }, 2: { linkText: 'Tiles' }, 1: { linkText: 'Compact Vertical' } },
	    farms: farms_1.farms.map(convertFarm),
	    addFarm: function () {
	        console.log('Adding new farm, wop wop');
	    },
	    groupAddFunc: function (groupId) {
	        console.log('Clicked add icon of group ' + groupId);
	    },
	    groupDeleteFunc: function (groupId) {
	        console.log('Clicked delete icon of group ' + groupId);
	    },
	    groupEditFunc: function (groupId) {
	        console.log('Clicked edit icon of group ' + groupId);
	    },
	    serverClose: function (serverFQDN) {
	        console.log('Clicked close icon of server ' + serverFQDN);
	    },
	    serverRoleEdit: function (serverFQDN) {
	        console.log('Clicked edit role icon of server ' + serverFQDN);
	    },
	    groupOnClick: function (groupId) {
	        console.log('Clicked on group ' + groupId);
	    }
	};
	function convertFarm(farm) {
	    var servers = farm.servers.map(function (server) {
	        var measures = generateMeasures();
	        var status = models_1.ServerStatus.Offline;
	        if (measures.length > 0) {
	            status = models_1.ServerStatus.OK;
	            if (measures.filter(function (t) {
	                return t.status === models_1.ServerStatus.Warning;
	            }).length > 0) {
	                status = models_1.ServerStatus.Warning;
	            }
	            if (measures.filter(function (t) {
	                return t.status === models_1.ServerStatus.Critical;
	            }).length > 0) {
	                status = models_1.ServerStatus.Critical;
	            }
	        }
	        return {
	            id: server.id,
	            name: server.name,
	            onClose: server.onClose,
	            onRoleChange: server.onRoleChange,
	            onRoleEdit: server.onRoleEdit,
	            roles: server.roles,
	            status: status,
	            measures: measures
	        };
	    });
	    return {
	        servers: servers,
	        name: farm.name,
	        id: farm.id,
	        isCustom: farm.isCustom,
	        version: farm.version
	    };
	}
	exports.convertFarm = convertFarm;
	function generatePercentage() {
	    return Math.floor(Math.random() * (100 - 0 + 1)) + 0;
	}
	exports.generatePercentage = generatePercentage;
	function generateCpuSpeed() {
	    return Math.random() * (2 - 0.1 + 1);
	}
	exports.generateCpuSpeed = generateCpuSpeed;
	function generateCoreCount() {
	    return Math.floor(Math.random() * (4 - 1 + 1)) + 1;
	}
	exports.generateCoreCount = generateCoreCount;
	function generateNetworkSpeed() {
	    return Math.random() * (10 - 0.1 + 1);
	}
	exports.generateNetworkSpeed = generateNetworkSpeed;
	function generateRandomStatus() {
	    return Math.floor(Math.random() * (4 - 0 + 1)) + 0;
	}
	exports.generateRandomStatus = generateRandomStatus;
	function generateMeasures() {
	    var cpuMeasure = {
	        type: models_1.MeasureType.CPU,
	        status: generateRandomStatus(),
	        usage: generatePercentage(),
	        speed: generateCpuSpeed(),
	        coreCount: generateCoreCount(),
	        logicalCoreCount: generateCoreCount(),
	        name: 'Dummy CPU',
	        time: new Date(Date.now())
	    };
	    var ramMeasure = {
	        type: models_1.MeasureType.Ram,
	        status: generateRandomStatus(),
	        used: generatePercentage(),
	        capacity: generatePercentage() + 100,
	        time: new Date(Date.now())
	    };
	    var networkMeasure = {
	        type: models_1.MeasureType.Network,
	        status: generateRandomStatus(),
	        kbTotal: generateNetworkSpeed(),
	        time: new Date(Date.now())
	    };
	    var diskMeasure = {
	        type: models_1.MeasureType.Disk,
	        status: generateRandomStatus(),
	        totalDiskIo: generateNetworkSpeed(),
	        partitions: [{
	            name: 'C',
	            freeMB: generatePercentage(),
	            size: generatePercentage() + 100
	        }, {
	            name: 'F',
	            freeMB: generatePercentage(),
	            size: generatePercentage() + 100
	        }],
	        time: new Date(Date.now())
	    };
	    return [cpuMeasure, ramMeasure, networkMeasure, diskMeasure];
	}
	exports.generateMeasures = generateMeasures;

/***/ },

/***/ 632:
/***/ function(module, exports) {

	"use strict";
	
	exports.classListExample = {
	    ok: 'green',
	    warning: 'yellow',
	    critical: 'red',
	    offline: 'offline'
	};
	var roleListFarms = [{ display: 'WPF', iconName: 'icon-add' }, { display: 'WPF1111111', iconName: 'icon-add' }, { display: 'Not another', iconName: 'icon-add' }, { display: 'Search', iconName: 'icon-alert' }];
	exports.farms = [{
	    id: { sqlInstance: 'instanca1', configDataBaseIcon: '', configDataBaseName: 'db1' },
	    name: 'farm1',
	    isCustom: false,
	    version: {
	        version: '14',
	        icon: 'icon-SharePoint'
	    },
	    servers: [{
	        id: {
	            FQDN: 'FQDN1'
	        },
	        name: 'server1',
	        roles: roleListFarms,
	        status: 1
	    }, {
	        id: {
	            FQDN: 'FQDN2'
	        },
	        name: 'server2',
	        roles: roleListFarms,
	        status: 2
	    }, {
	        id: {
	            FQDN: 'FQDN3'
	        },
	        name: 'server1',
	        roles: roleListFarms,
	        status: 1
	    }, {
	        id: {
	            FQDN: 'FQDN4'
	        },
	        name: 'server2',
	        roles: roleListFarms,
	        status: 2
	    }, {
	        id: {
	            FQDN: 'FQDN5'
	        },
	        name: 'server1',
	        roles: roleListFarms,
	        status: 1
	    }, {
	        id: {
	            FQDN: 'FQDN6'
	        },
	        name: 'server2',
	        roles: roleListFarms,
	        status: 2
	    }, {
	        id: {
	            FQDN: 'FQDN7'
	        },
	        name: 'server1',
	        roles: roleListFarms,
	        status: 1
	    }, {
	        id: {
	            FQDN: 'FQDN8'
	        },
	        name: 'server2',
	        roles: roleListFarms,
	        status: 2
	    }, {
	        id: {
	            FQDN: 'FQDN9'
	        },
	        name: 'server1',
	        roles: roleListFarms,
	        status: 1
	    }, {
	        id: {
	            FQDN: 'FQDN10'
	        },
	        name: 'server2',
	        roles: roleListFarms,
	        status: 2
	    }]
	}, {
	    id: { sqlInstance: 'instanca2', configDataBaseIcon: '', configDataBaseName: 'db2' },
	    name: 'farm2',
	    isCustom: true,
	    version: {
	        version: '15',
	        icon: 'icon-SharePoint'
	    },
	    servers: [{
	        id: {
	            FQDN: 'FQDN1'
	        },
	        name: 'server1',
	        roles: roleListFarms,
	        status: 1
	    }, {
	        id: {
	            FQDN: 'FQDN2'
	        },
	        name: 'server2',
	        roles: roleListFarms,
	        status: 2
	    }, {
	        id: {
	            FQDN: 'FQDN3'
	        },
	        name: 'server1',
	        roles: roleListFarms,
	        status: 1
	    }, {
	        id: {
	            FQDN: 'FQDN4'
	        },
	        name: 'server2',
	        roles: roleListFarms,
	        status: 2
	    }, {
	        id: {
	            FQDN: 'FQDN5'
	        },
	        name: 'server1',
	        roles: roleListFarms,
	        status: 1
	    }, {
	        id: {
	            FQDN: 'FQDN6'
	        },
	        name: 'server2',
	        roles: roleListFarms,
	        status: 2
	    }, {
	        id: {
	            FQDN: 'FQDN7'
	        },
	        name: 'server1',
	        roles: roleListFarms,
	        status: 1
	    }, {
	        id: {
	            FQDN: 'FQDN8'
	        },
	        name: 'server2',
	        roles: roleListFarms,
	        status: 2
	    }, {
	        id: {
	            FQDN: 'FQDN9'
	        },
	        name: 'server1',
	        roles: roleListFarms,
	        status: 1
	    }, {
	        id: {
	            FQDN: 'FQDN10'
	        },
	        name: 'server2',
	        roles: roleListFarms,
	        status: 2
	    }]
	}, {
	    id: { sqlInstance: 'instanca3', configDataBaseIcon: '', configDataBaseName: 'db3' },
	    name: 'farm1',
	    isCustom: false,
	    version: {
	        version: '14',
	        icon: 'icon-SharePoint'
	    },
	    servers: [{
	        id: {
	            FQDN: 'FQDN4'
	        },
	        name: 'server2',
	        roles: roleListFarms,
	        status: 2
	    }, {
	        id: {
	            FQDN: 'FQDN5'
	        },
	        name: 'server1',
	        roles: roleListFarms,
	        status: 1
	    }, {
	        id: {
	            FQDN: 'FQDN6'
	        },
	        name: 'server2',
	        roles: roleListFarms,
	        status: 2
	    }, {
	        id: {
	            FQDN: 'FQDN7'
	        },
	        name: 'server1',
	        roles: roleListFarms,
	        status: 1
	    }, {
	        id: {
	            FQDN: 'FQDN8'
	        },
	        name: 'server2',
	        roles: roleListFarms,
	        status: 2
	    }, {
	        id: {
	            FQDN: 'FQDN9'
	        },
	        name: 'server1',
	        roles: roleListFarms,
	        status: 1
	    }, {
	        id: {
	            FQDN: 'FQDN10'
	        },
	        name: 'server2',
	        roles: roleListFarms,
	        status: 2
	    }]
	}, {
	    id: { sqlInstance: 'instanca4', configDataBaseIcon: '', configDataBaseName: 'db4' },
	    name: 'farm2',
	    isCustom: true,
	    version: {
	        version: '15',
	        icon: 'icon-SharePoint'
	    },
	    servers: [{
	        id: {
	            FQDN: 'FQDN8'
	        },
	        name: 'server2',
	        roles: roleListFarms,
	        status: 2
	    }, {
	        id: {
	            FQDN: 'FQDN9'
	        },
	        name: 'server1',
	        roles: roleListFarms,
	        status: 1
	    }, {
	        id: {
	            FQDN: 'FQDN10'
	        },
	        name: 'server2',
	        roles: roleListFarms,
	        status: 2
	    }]
	}];

/***/ }

});
//# sourceMappingURL=Dashboard.e403d7b187b12e8ae34c.js.map