webpackJsonp([22],{

/***/ 0:
/***/ function(module, exports, __webpack_require__) {

	"use strict";
	/* tslint:disable:no-console */
	
	__webpack_require__(1);
	__webpack_require__(298);
	var React = __webpack_require__(299);
	var ReactDOM = __webpack_require__(329);
	var ServerTile_1 = __webpack_require__(584);
	var models_1 = __webpack_require__(541);
	var Index = function (_super) {
	    __extends(Index, _super);
	    function Index() {
	        _super.apply(this, arguments);
	    }
	    Index.prototype.render = function () {
	        return React.createElement("div", null, React.createElement(ServerTile_1.ServerTile, { id: { FQDN: 'server-123' }, status: 0, name: 'SP2016-Martin-Pisacic', numberOfUsers: '3432', onClose: function (id) {
	                return console.log('Go away!', id);
	            }, diskInformation: ['C: 49 / 259 GB (30%)', 'D: 49 / 259 GB (30 %)'], roles: [], countersData: [{ title: 'CPU', currentUsage: '43', usageUnit: '%', hoverText: [''], status: models_1.ServerStatus.OK }, { title: 'Memory', currentUsage: '7', usageUnit: 'GB', hoverText: ['7GB/10GB (70%)'], status: models_1.ServerStatus.Warning }, { title: 'Disk', currentUsage: '0,1', usageUnit: 'Mbps', hoverText: ['4.49 Mbps', '2.63 Mbps', '0.3 Mbps'], status: models_1.ServerStatus.OK }, { title: 'Network', currentUsage: '0,1', usageUnit: 'MB/s', hoverText: ['50.10 kB/s', '23.47 kB/s'], status: models_1.ServerStatus.OK }] }));
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

/***/ 477:
/***/ function(module, exports, __webpack_require__) {

	"use strict";
	
	var React = __webpack_require__(299);
	var classNames = __webpack_require__(476);
	var attributes_1 = __webpack_require__(478);
	__webpack_require__(480);
	exports.Icon = function (props) {
	    var size = props.size;
	    var customIcon = props.iconName === '';
	    var iconClass = props.iconName;
	    var iconClassName = classNames(['icon'], (_a = {}, _a[props.iconName] = !customIcon, _a), [props.className]);
	    return React.createElement("i", __assign({}, attributes_1.getNativeAttributes(props, attributes_1.htmlElementAttributes), { className: iconClassName }));
	    var _a;
	};

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

	// style-loader: Adds some css to the DOM by adding a <style> tag
	
	// load the styles
	var content = __webpack_require__(481);
	if(typeof content === 'string') content = [[module.id, content, '']];
	// add the styles to the DOM
	var update = __webpack_require__(483)(content, {});
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

/***/ 481:
/***/ function(module, exports, __webpack_require__) {

	exports = module.exports = __webpack_require__(482)();
	// imports
	
	
	// module
	exports.push([module.id, "::-webkit-scrollbar {\n  width: 13px;\n  margin-top: 10px;\n  border-radius: 15px;\n  margin-right: 3px;\n  background: transparent;\n}\n\n::-webkit-scrollbar-track {\n  border-radius: 15px;\n  margin-top: 7px;\n  background: #EEEFF4;\n  margin-bottom: 7px;\n}\n\n::-webkit-scrollbar-thumb {\n  border-radius: 10px;\n  margin-top: 10px;\n  background: #D2D3D9;\n}\n\n::-webkit-scrollbar-thumb:window-inactive {\n  background: #D2D3D9;\n}\n\n@font-face {\n  font-family: 'cloudkitIcons';\n  src: url(\"/fonts/cloudkitIcons.eot\");\n  src: url(\"/fonts/cloudkitIcons.eot?#iefix\") format(\"embedded-opentype\"), url(\"/fonts/cloudkitIcons.woff\") format(\"woff\"), url(\"/fonts/cloudkitIcons.ttf\") format(\"truetype\"), url(\"/fonts/cloudkitIcons.svg?#cloudkitIcons\") format(\"svg\");\n  font-weight: normal;\n  font-style: normal;\n}\n\n.icon {\n  -moz-osx-font-smoothing: grayscale;\n  -webkit-font-smoothing: antialiased;\n  display: inline-block;\n  font-family: cloudkitIcons;\n  font-style: normal;\n  font-weight: 400;\n  margin-right: 5px;\n  color: #333333;\n}\n\n.icon-ViewType:before {\n  content: \"\\E93A\";\n}\n\n.icon-Alert:before {\n  content: \"\\E938\";\n}\n\n.icon-Alert1:before {\n  content: \"\\E939\";\n}\n\n.icon-AddToGroup:before {\n  content: \"\\E92E\";\n}\n\n.icon-MoveToGroup:before {\n  content: \"\\E92F\";\n}\n\n.icon-CopyToGroup:before {\n  content: \"\\E930\";\n}\n\n.icon-RemoveUser:before {\n  content: \"\\E931\";\n}\n\n.icon-TransferUser:before {\n  content: \"\\E932\";\n}\n\n.icon-CloneUser:before {\n  content: \"\\E933\";\n}\n\n.icon-RemoveUsersFromGroup:before {\n  content: \"\\E934\";\n}\n\n.icon-EditUser:before {\n  content: \"\\E935\";\n}\n\n.icon-CreateGroup:before {\n  content: \"\\E936\";\n}\n\n.icon-GrantPermissions:before {\n  content: \"\\E937\";\n}\n\n.icon-Break:before {\n  content: \"\\E907\";\n}\n\n.icon-Restore:before {\n  content: \"\\E92B\";\n}\n\n.icon-DeleteGroup:before {\n  content: \"\\E92C\";\n}\n\n.icon-DeleteUser:before {\n  content: \"\\E92D\";\n}\n\n.icon-EventViewer:before {\n  content: \"\\E92A\";\n}\n\n.icon-Filter2:before {\n  content: \"\\E929\";\n}\n\n.icon-NotEqual:before {\n  content: \"\\E928\";\n}\n\n.icon-OneDrive:before {\n  content: \"\\E926\";\n}\n\n.icon-PermissionsExplorer:before {\n  content: \"\\E927\";\n}\n\n.icon-Account:before {\n  content: \"\\E600\";\n}\n\n.icon-Add:before {\n  content: \"\\E601\";\n}\n\n.icon-AllUsers:before {\n  content: \"\\E908\";\n}\n\n.icon-ArrowDown:before {\n  content: \"\\E602\";\n}\n\n.icon-ArrowDownRight:before {\n  content: \"\\E603\";\n}\n\n.icon-ArrowLeftSlim:before {\n  content: \"\\E604\";\n}\n\n.icon-ArrowRightSlim:before {\n  content: \"\\E605\";\n}\n\n.icon-ArrowRight:before {\n  content: \"\\E606\";\n}\n\n.icon-ArrowUp:before {\n  content: \"\\E657\";\n}\n\n.icon-ArrowDownSlim:before {\n  content: \"\\E607\";\n}\n\n.icon-ArrowLeft1:before {\n  content: \"\\E608\";\n}\n\n.icon-ArrowRight1:before {\n  content: \"\\E609\";\n}\n\n.icon-Arrows:before {\n  content: \"\\E60A\";\n}\n\n.icon-ArrowUpSlim:before {\n  content: \"\\E60B\";\n}\n\n.icon-BarChart:before {\n  content: \"\\E60C\";\n}\n\n.icon-BarChart2:before {\n  content: \"\\E60D\";\n}\n\n.icon-Buy:before {\n  content: \"\\E60E\";\n}\n\n.icon-Buy2:before {\n  content: \"\\E914\";\n}\n\n.icon-Camera:before {\n  content: \"\\E60F\";\n}\n\n.icon-Checkbox:before {\n  content: \"\\E610\";\n}\n\n.icon-Checkmark:before {\n  content: \"\\E611\";\n}\n\n.icon-CloudKit:before {\n  content: \"\\E91A\";\n}\n\n.icon-ClodKit365:before {\n  content: \"\\E612\";\n}\n\n.icon-cloud:before {\n  content: \"\\E923\";\n}\n\n.icon-CollapseAll:before {\n  content: \"\\E658\";\n}\n\n.icon-ColumnChooser:before {\n  content: \"\\E915\";\n}\n\n.icon-Compare:before {\n  content: \"\\E613\";\n}\n\n.icon-CurentJobs:before {\n  content: \"\\E909\";\n}\n\n.icon-CustomPack:before {\n  content: \"\\E918\";\n}\n\n.icon-Dashboard1:before {\n  content: \"\\E614\";\n}\n\n.icon-Dashboard2:before {\n  content: \"\\E615\";\n}\n\n.icon-Delete:before {\n  content: \"\\E616\";\n}\n\n.icon-Details:before {\n  content: \"\\E617\";\n}\n\n.icon-DisabledUser:before {\n  content: \"\\E921\";\n}\n\n.icon-Document:before {\n  content: \"\\E618\";\n}\n\n.icon-Docx:before {\n  content: \"\\E619\";\n}\n\n.icon-Edit:before {\n  content: \"\\E61A\";\n}\n\n.icon-EditEmail:before {\n  content: \"\\E90A\";\n}\n\n.icon-EditPhone:before {\n  content: \"\\E90B\";\n}\n\n.icon-Equal:before {\n  content: \"\\E61B\";\n}\n\n.icon-Error:before {\n  content: \"\\E61C\";\n}\n\n.icon-Excel:before {\n  content: \"\\E61D\";\n}\n\n.icon-Exchange:before {\n  content: \"\\E61E\";\n}\n\n.icon-ExpandCollapse:before {\n  content: \"\\E65A\";\n}\n\n.icon-ExpandAll:before {\n  content: \"\\E659\";\n}\n\n.icon-Export:before {\n  content: \"\\E61F\";\n}\n\n.icon-Feedback:before {\n  content: \"\\E620\";\n}\n\n.icon-Filter:before {\n  content: \"\\E621\";\n}\n\n.icon-Flag:before {\n  content: \"\\E903\";\n}\n\n.icon-Folder:before {\n  content: \"\\E622\";\n}\n\n.icon-FullSize:before {\n  content: \"\\E91D\";\n}\n\n.icon-GenWord:before {\n  content: \"\\E91C\";\n}\n\n.icon-GenWord1:before {\n  content: \"\\E91E\";\n}\n\n.icon-Generate:before {\n  content: \"\\E802\";\n}\n\n.icon-Ghost:before {\n  content: \"\\E905\";\n}\n\n.icon-Group:before {\n  content: \"\\E623\";\n}\n\n.icon-Help:before {\n  content: \"\\E624\";\n}\n\n.icon-History:before {\n  content: \"\\E625\";\n}\n\n.icon-HitoryBack:before {\n  content: \"\\E626\";\n}\n\n.icon-Home:before {\n  content: \"\\E627\";\n}\n\n.icon-InProgress:before {\n  content: \"\\E901\";\n}\n\n.icon-InfoCircle:before {\n  content: \"\\E628\";\n}\n\n.icon-InProgress1:before {\n  content: \"\\E920\";\n}\n\n.icon-InternalLink:before {\n  content: \"\\E922\";\n}\n\n.icon-Item:before {\n  content: \"\\E629\";\n}\n\n.icon-Key:before {\n  content: \"\\E62A\";\n}\n\n.icon-Link:before {\n  content: \"\\E62B\";\n}\n\n.icon-List:before {\n  content: \"\\E62C\";\n}\n\n.icon-Load:before {\n  content: \"\\E62D\";\n}\n\n.icon-LoadInfo:before {\n  content: \"\\E90C\";\n}\n\n.icon-LoadJobTasks:before {\n  content: \"\\E90D\";\n}\n\n.icon-LoadWithErrors:before {\n  content: \"\\E902\";\n}\n\n.icon-LoadWithErrors1:before {\n  content: \"\\E904\";\n}\n\n.icon-Logo:before {\n  content: \"\\E916\";\n}\n\n.icon-LogoPartner:before {\n  content: \"\\E925\";\n}\n\n.icon-LogoPartner2:before {\n  content: \"\\E924\";\n}\n\n.icon-LogOut:before {\n  content: \"\\E62E\";\n}\n\n.icon-MyAccount:before {\n  content: \"\\E62F\";\n}\n\n.icon-News:before {\n  content: \"\\E630\";\n}\n\n.icon-NormalSize:before {\n  content: \"\\E91F\";\n}\n\n.icon-Office:before {\n  content: \"\\E631\";\n}\n\n.icon-OfficeManage:before {\n  content: \"\\E632\";\n}\n\n.icon-Office365:before {\n  content: \"\\E633\";\n}\n\n.icon-Open:before {\n  content: \"\\E634\";\n}\n\n.icon-Pdf:before {\n  content: \"\\E635\";\n}\n\n.icon-Pending:before {\n  content: \"\\E906\";\n}\n\n.icon-Pending1:before {\n  content: \"\\E907\";\n}\n\n.icon-PermissionDate:before {\n  content: \"\\E64C\";\n}\n\n.icon-PermissionLevel:before {\n  content: \"\\E652\";\n}\n\n.icon-permission_level2:before {\n  content: \"\\E64D\";\n}\n\n.icon-Phone:before {\n  content: \"\\E636\";\n}\n\n.icon-Power:before {\n  content: \"\\E900\";\n}\n\n.icon-PremiumSubs:before {\n  content: \"\\E917\";\n}\n\n.icon-PrincipalStatus:before {\n  content: \"\\E64E\";\n}\n\n.icon-PrincipalType:before {\n  content: \"\\E64F\";\n}\n\n.icon-Print:before {\n  content: \"\\E800\";\n}\n\n.icon-Que:before {\n  content: \"\\E90E\";\n}\n\n.icon-Quote:before {\n  content: \"\\E638\";\n}\n\n.icon-Quote2:before {\n  content: \"\\E653\";\n}\n\n.icon-Quote22:before {\n  content: \"\\E656\";\n}\n\n.icon-RecentJobs:before {\n  content: \"\\E90F\";\n}\n\n.icon-Refresh:before {\n  content: \"\\E639\";\n}\n\n.icon-Reload:before {\n  content: \"\\E63A\";\n}\n\n.icon-Reset:before {\n  content: \"\\E650\";\n}\n\n.icon-ResetJobs:before {\n  content: \"\\E910\";\n}\n\n.icon-Save:before {\n  content: \"\\E63B\";\n}\n\n.icon-Schedule:before {\n  content: \"\\E63C\";\n}\n\n.icon-Search:before {\n  content: \"\\E63D\";\n}\n\n.icon-SecurityGroup:before {\n  content: \"\\E63E\";\n}\n\n.icon-Settings:before {\n  content: \"\\E63F\";\n}\n\n.icon-SharedFolder:before {\n  content: \"\\E801\";\n}\n\n.icon-SharePoint:before {\n  content: \"\\E640\";\n}\n\n.icon-Site:before {\n  content: \"\\E641\";\n}\n\n.icon-SiteCollection:before {\n  content: \"\\E642\";\n}\n\n.icon-Site2:before {\n  content: \"\\E651\";\n}\n\n.icon-Snapshot:before {\n  content: \"\\E654\";\n}\n\n.icon-SPReport:before {\n  content: \"\\E643\";\n}\n\n.icon-StarterSubs:before {\n  content: \"\\E919\";\n}\n\n.icon-Subscription:before {\n  content: \"\\E644\";\n}\n\n.icon-Subsite:before {\n  content: \"\\E645\";\n}\n\n.icon-Summary:before {\n  content: \"\\E911\";\n}\n\n.icon-SuperAdmin:before {\n  content: \"\\E646\";\n}\n\n.icon-SwitchView:before {\n  content: \"\\E65B\";\n}\n\n.icon-TakeSnapshot:before {\n  content: \"\\E91B\";\n}\n\n.icon-Trash:before {\n  content: \"\\E647\";\n}\n\n.icon-User:before {\n  content: \"\\E648\";\n}\n\n.icon-UserManagement:before {\n  content: \"\\E913\";\n}\n\n.icon-UsersQuote:before {\n  content: \"\\E655\";\n}\n\n.icon-Usklicnik:before {\n  content: \"\\E649\";\n}\n\n.icon-VersionUpdate:before {\n  content: \"\\E912\";\n}\n\n.icon-Warning:before {\n  content: \"\\E64A\";\n}\n\n.icon-World:before {\n  content: \"\\E64B\";\n}\n", ""]);
	
	// exports


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

/***/ 541:
/***/ function(module, exports, __webpack_require__) {

	"use strict";
	
	function __export(m) {
	    for (var p in m) if (!exports.hasOwnProperty(p)) exports[p] = m[p];
	}
	__export(__webpack_require__(542));
	__export(__webpack_require__(543));
	__export(__webpack_require__(544));

/***/ },

/***/ 542:
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

/***/ 543:
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

/***/ 544:
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

/***/ 584:
/***/ function(module, exports, __webpack_require__) {

	"use strict";
	
	var React = __webpack_require__(299);
	var classNames = __webpack_require__(476);
	var Label_1 = __webpack_require__(558);
	var Icon_1 = __webpack_require__(477);
	var models_1 = __webpack_require__(541);
	__webpack_require__(585);
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
	        return React.createElement("div", { className: className }, React.createElement("div", { className: 'server-details-header' }, React.createElement(Label_1.Label, { className: "server-name", title: this.props.id.FQDN }, this.props.name), React.createElement(Icon_1.Icon, { className: classNames('disk-icon'), iconName: 'icon-LoadWithErrors', title: 'Disks\n' + this.createTooltipText(this.props.diskInformation) }), this.props.numberOfUsers && React.createElement(Icon_1.Icon, { "data-users": this.props.numberOfUsers, iconName: 'icon-User', title: this.props.numberOfUsers + ' number of users online' }), this.props.onClose && React.createElement(Icon_1.Icon, { disabled: false, className: 'dialog-button dialog-button-close', onClick: this.dismiss.bind(this), iconName: 'icon-Delete' }), this.props.children), React.createElement("div", { className: 'counters-container' }, this.createCountersTiles(this.props.countersData)));
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

/***/ 585:
/***/ function(module, exports, __webpack_require__) {

	// style-loader: Adds some css to the DOM by adding a <style> tag
	
	// load the styles
	var content = __webpack_require__(586);
	if(typeof content === 'string') content = [[module.id, content, '']];
	// add the styles to the DOM
	var update = __webpack_require__(483)(content, {});
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

/***/ 586:
/***/ function(module, exports, __webpack_require__) {

	exports = module.exports = __webpack_require__(482)();
	// imports
	
	
	// module
	exports.push([module.id, "::-webkit-scrollbar {\n  width: 13px;\n  margin-top: 10px;\n  border-radius: 15px;\n  margin-right: 3px;\n  background: transparent;\n}\n\n::-webkit-scrollbar-track {\n  border-radius: 15px;\n  margin-top: 7px;\n  background: #EEEFF4;\n  margin-bottom: 7px;\n}\n\n::-webkit-scrollbar-thumb {\n  border-radius: 10px;\n  margin-top: 10px;\n  background: #D2D3D9;\n}\n\n::-webkit-scrollbar-thumb:window-inactive {\n  background: #D2D3D9;\n}\n\n.server-details {\n  font-family: \"Segoe UI\", Tahoma, Geneva, Verdana, sans-serif;\n  width: 280px;\n  display: inline-block;\n  margin: 5px;\n  position: relative;\n  padding: 0;\n  border-left: 10px solid #6b6b6b;\n  background-color: #e8e9ef;\n}\n\n.server-details .icon {\n  color: #6b6b6b;\n}\n\n.server-details .server-details-header {\n  font-size: 14px;\n  width: 100%;\n  padding: 0;\n  display: block;\n  margin: 5px 0px 10px 0px;\n}\n\n.server-details .server-details-header .server-name {\n  padding: 0;\n  margin: 2px 2px 2px 5px;\n  display: inline-block;\n  font-weight: 400;\n  font-size: 17px;\n  color: #4b4949;\n  max-width: 40%;\n  white-space: nowrap;\n  overflow: hidden;\n  text-overflow: ellipsis;\n  vertical-align: bottom;\n}\n\n.server-details .server-details-header .disk-icon {\n  padding: 0;\n  margin: 5px 10px 5px 25px;\n}\n\n.server-details .server-details-header .tag-container {\n  position: relative;\n  float: left;\n  width: 100%;\n  margin: 10px 0;\n  background: #e8e9ef;\n  color: #7e7f82;\n}\n\n.server-details .server-details-header .tag-container .tag {\n  background: #e8e9ef;\n  margin-top: 0;\n  margin-bottom: 0;\n  padding-top: 0;\n  padding-bottom: 0;\n  margin: 0;\n  font-size: 12px;\n  font-weight: normal;\n  margin-left: 4px;\n}\n\n.server-details .server-details-header .tag-container .tag .icon {\n  color: #7e7f82;\n}\n\n.server-details .server-details-header .tag-container .edit-tags:hover {\n  background: inherit;\n  color: #7DC458;\n}\n\n.server-details .server-details-header .tag-container .edit-tags:hover .icon {\n  background: inherit;\n  color: #7DC458;\n}\n\n.server-details .dialog-button-close {\n  float: right;\n  margin: 5px 10px 5px 5px;\n  cursor: pointer;\n}\n\n.server-details .dialog-button-close:hover {\n  color: #A09f9f;\n}\n\n.server-details .counters-container {\n  display: block;\n  width: 100%;\n  height: 75%;\n  margin: 10px 0px 10px 0px;\n}\n\n.server-details .counters-container .tile {\n  width: calc(45% - 12px);\n  display: inline-block;\n  text-align: center;\n  height: calc(35% - 2px);\n  border-top: 1px solid white;\n  padding-left: 3px;\n  padding-right: 3px;\n}\n\n.server-details .counters-container .tile p {\n  text-align: center;\n  color: #A09f9f;\n  font-size: 12px;\n  margin: 9px 0px 2px 0px;\n}\n\n.server-details .counters-container .tile:nth-child(odd) {\n  border-right: 1px solid white;\n  margin-left: calc(5% + 1px);\n}\n\n.server-details .counters-container .tile:nth-child(even) {\n  border-left: 1px solid #e8e9ef;\n}\n\n.server-details .counters-container .tile .label {\n  display: inline-block;\n  color: #4b4949;\n}\n\n.server-details .counters-container .tile .label:nth-child(2) {\n  font-size: 24px;\n}\n\n.server-details .counters-container .tile .label:nth-child(3) {\n  font-size: 14px;\n}\n\n.server-details .icon-User:after {\n  content: attr(data-users);\n  padding: 0;\n  margin: 0px 0px 2px 5px;\n  font-family: \"Segoe UI\", Tahoma, Geneva, Verdana, sans-serif;\n  font-size: 14px;\n}\n\n.server-details .icon-Delete {\n  color: #4b4949;\n}\n\n.server-details .icon-Delete:hover {\n  color: #fb6464;\n}\n", ""]);
	
	// exports


/***/ }

});
//# sourceMappingURL=ServerTile.6b09275fc1b677367a78.js.map