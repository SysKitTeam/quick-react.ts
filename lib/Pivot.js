webpackJsonp([24],{

/***/ 0:
/***/ function(module, exports, __webpack_require__) {

	"use strict";
	
	Object.defineProperty(exports, "__esModule", { value: true });
	/* tslint:disable:no-console */
	__webpack_require__(1);
	__webpack_require__(327);
	var React = __webpack_require__(328);
	var ReactDOM = __webpack_require__(358);
	var Pivot_1 = __webpack_require__(608);
	var PivotItem_1 = __webpack_require__(609);
	var Label_1 = __webpack_require__(509);
	var Pivot_Props_1 = __webpack_require__(610);
	var Index = /** @class */function (_super) {
	    __extends(Index, _super);
	    function Index() {
	        return _super !== null && _super.apply(this, arguments) || this;
	    }
	    Index.prototype.render = function () {
	        return React.createElement("div", null, React.createElement(Pivot_1.Pivot, { onLinkClick: function (item, ev) {
	                return console.log(item);
	            } }, React.createElement(PivotItem_1.PivotItem, { linkText: 'My Files', itemCount: 10 }, React.createElement(Label_1.Label, null, "Pivot #1")), React.createElement(PivotItem_1.PivotItem, { linkText: 'Recent', disabled: true }, React.createElement(Label_1.Label, null, "Pivot #2")), React.createElement(PivotItem_1.PivotItem, { linkText: 'Shared with me' }, React.createElement(Label_1.Label, null, "Pivot #3"))), React.createElement("br", null), React.createElement(Pivot_1.Pivot, { onLinkClick: function (item, ev) {
	                return console.log(item);
	            }, linkFormat: Pivot_Props_1.PivotLinkFormat.tabs }, React.createElement(PivotItem_1.PivotItem, { linkText: 'My Files' }, React.createElement(Label_1.Label, null, "Pivot #1")), React.createElement(PivotItem_1.PivotItem, { linkText: 'Recent' }, React.createElement(Label_1.Label, null, "Pivot #2")), React.createElement(PivotItem_1.PivotItem, { linkText: 'Shared with me' }, React.createElement(Label_1.Label, null, "Pivot #3"))), React.createElement("br", null), React.createElement(Pivot_1.Pivot, { onLinkClick: function (item, ev) {
	                return console.log(item);
	            }, linkFormat: Pivot_Props_1.PivotLinkFormat.tabs, className: 'pivot-tabs-gray' }, React.createElement(PivotItem_1.PivotItem, { linkText: 'My Files' }, React.createElement(Label_1.Label, null, "Pivot #1")), React.createElement(PivotItem_1.PivotItem, { linkText: 'Recent' }, React.createElement(Label_1.Label, null, "Pivot #2")), React.createElement(PivotItem_1.PivotItem, { linkText: 'Shared with me' }, React.createElement(Label_1.Label, null, "Pivot #3"))), React.createElement("br", null), React.createElement(Pivot_1.Pivot, { onLinkClick: function (item, ev) {
	                return console.log(item);
	            } }, React.createElement(PivotItem_1.PivotItem, { linkText: 'My Files', linkIcon: 'icon-user' }, React.createElement(Label_1.Label, null, "Pivot #1")), React.createElement(PivotItem_1.PivotItem, { linkText: 'Recent' }, React.createElement(Label_1.Label, null, "Pivot #2")), React.createElement(PivotItem_1.PivotItem, { linkText: 'Shared with me', linkIcon: 'icon-add' }, React.createElement(Label_1.Label, null, "Pivot #3"))));
	    };
	    return Index;
	}(React.Component);
	exports.Index = Index;
	ReactDOM.render(React.createElement(Index, null), document.getElementById('root'));

/***/ },

/***/ 509:
/***/ function(module, exports, __webpack_require__) {

	"use strict";
	
	Object.defineProperty(exports, "__esModule", { value: true });
	var React = __webpack_require__(328);
	var classNames = __webpack_require__(497);
	var attributes_1 = __webpack_require__(510);
	__webpack_require__(512);
	var Label = /** @class */function (_super) {
	    __extends(Label, _super);
	    function Label() {
	        return _super !== null && _super.apply(this, arguments) || this;
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
	}(React.PureComponent);
	exports.Label = Label;

/***/ },

/***/ 510:
/***/ function(module, exports, __webpack_require__) {

	"use strict";
	
	Object.defineProperty(exports, "__esModule", { value: true });
	var object_1 = __webpack_require__(511);
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

/***/ 511:
/***/ function(module, exports) {

	"use strict";
	
	Object.defineProperty(exports, "__esModule", { value: true });
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

/***/ 512:
/***/ function(module, exports, __webpack_require__) {

	// style-loader: Adds some css to the DOM by adding a <style> tag
	
	// load the styles
	var content = __webpack_require__(513);
	if(typeof content === 'string') content = [[module.id, content, '']];
	// add the styles to the DOM
	var update = __webpack_require__(504)(content, {});
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

/***/ 513:
/***/ function(module, exports, __webpack_require__) {

	exports = module.exports = __webpack_require__(503)();
	// imports
	
	
	// module
	exports.push([module.id, "* {\n  font-family: 'Segoe UI';\n  font-size: 14px;\n  color: #4D4D4F;\n}\n\n::-webkit-scrollbar {\n  width: 8px;\n  height: 8px;\n}\n\n/* Track */\n::-webkit-scrollbar-track {\n  border-radius: 10px;\n  background: #DADADB;\n  border: 2px solid transparent;\n  background-clip: content-box;\n}\n\n/* Handle */\n::-webkit-scrollbar-thumb {\n  border-radius: 10px;\n  background: #AEAEAF;\n}\n\n::-webkit-scrollbar-thumb:hover {\n  background: #4D4D4F;\n}\n\n.ReactVirtualized__Grid:focus, .ReactVirtualized__Collection:focus {\n  outline: none !important;\n}\n\n.label {\n  box-sizing: border-box;\n  display: block;\n  padding: 5px 0;\n}\n\n.label.label-required::after {\n  content: ' *';\n  color: #FB6464;\n}\n\n.label.label-disabled {\n  color: #AEAEAF;\n}\n", ""]);
	
	// exports


/***/ },

/***/ 518:
/***/ function(module, exports, __webpack_require__) {

	"use strict";
	
	Object.defineProperty(exports, "__esModule", { value: true });
	var React = __webpack_require__(328);
	var classNames = __webpack_require__(497);
	var attributes_1 = __webpack_require__(510);
	__webpack_require__(519);
	exports.Icon = function (props) {
	    var customIcon = props.iconName === '';
	    var iconClassName = classNames(['icon'], (_a = {}, _a[props.iconName] = !customIcon, _a), [props.className]);
	    return React.createElement("i", __assign({}, attributes_1.getNativeAttributes(props, attributes_1.htmlElementAttributes), { className: iconClassName }));
	    var _a;
	};

/***/ },

/***/ 519:
/***/ function(module, exports, __webpack_require__) {

	// style-loader: Adds some css to the DOM by adding a <style> tag
	
	// load the styles
	var content = __webpack_require__(520);
	if(typeof content === 'string') content = [[module.id, content, '']];
	// add the styles to the DOM
	var update = __webpack_require__(504)(content, {});
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

/***/ 520:
/***/ function(module, exports, __webpack_require__) {

	exports = module.exports = __webpack_require__(503)();
	// imports
	
	
	// module
	exports.push([module.id, "* {\n  font-family: 'Segoe UI';\n  font-size: 14px;\n  color: #4D4D4F;\n}\n\n::-webkit-scrollbar {\n  width: 8px;\n  height: 8px;\n}\n\n/* Track */\n::-webkit-scrollbar-track {\n  border-radius: 10px;\n  background: #DADADB;\n  border: 2px solid transparent;\n  background-clip: content-box;\n}\n\n/* Handle */\n::-webkit-scrollbar-thumb {\n  border-radius: 10px;\n  background: #AEAEAF;\n}\n\n::-webkit-scrollbar-thumb:hover {\n  background: #4D4D4F;\n}\n\n.ReactVirtualized__Grid:focus, .ReactVirtualized__Collection:focus {\n  outline: none !important;\n}\n\n@font-face {\n  font-family: 'icomoon';\n  src: url(\"/fonts/icomoon.eot\");\n  src: url(\"/fonts/icomoon.eot?#iefix\") format(\"embedded-opentype\"), url(\"/fonts/icomoon.woff\") format(\"woff\"), url(\"/fonts/icomoon.ttf\") format(\"truetype\"), url(\"/fonts/icomoon.svg?#icomoon\") format(\"svg\");\n  font-weight: normal;\n  font-style: normal;\n}\n\n.icon {\n  -moz-osx-font-smoothing: grayscale;\n  -webkit-font-smoothing: antialiased;\n  display: inline-block;\n  font-family: icomoon;\n  font-style: normal;\n  margin-right: 5px;\n}\n\n.icon-disk:before {\n  content: \"\\E900\";\n}\n\n.icon-account:before {\n  content: \"\\E901\";\n}\n\n.icon-add:before {\n  content: \"\\E902\";\n}\n\n.icon-add_to_group:before {\n  content: \"\\E903\";\n}\n\n.icon-alert:before {\n  content: \"\\E904\";\n}\n\n.icon-alert1:before {\n  content: \"\\E905\";\n}\n\n.icon-all_users:before {\n  content: \"\\E906\";\n}\n\n.icon-arrow_down:before {\n  content: \"\\E907\";\n}\n\n.icon-arrow_down_right:before {\n  content: \"\\E908\";\n}\n\n.icon-arrow_L:before {\n  content: \"\\E909\";\n}\n\n.icon-arrow_R:before {\n  content: \"\\E90A\";\n}\n\n.icon-arrow_right:before {\n  content: \"\\E90B\";\n}\n\n.icon-Arrow_up:before {\n  content: \"\\E90C\";\n}\n\n.icon-arrow-down:before {\n  content: \"\\E90D\";\n}\n\n.icon-arrow-left:before {\n  content: \"\\E90E\";\n}\n\n.icon-arrow-right:before {\n  content: \"\\E90F\";\n}\n\n.icon-arrows:before {\n  content: \"\\E910\";\n}\n\n.icon-arrow-up:before {\n  content: \"\\E911\";\n}\n\n.icon-barChart:before {\n  content: \"\\E912\";\n}\n\n.icon-barChart2:before {\n  content: \"\\E913\";\n}\n\n.icon-break:before {\n  content: \"\\E914\";\n}\n\n.icon-buy:before {\n  content: \"\\E915\";\n}\n\n.icon-buy2:before {\n  content: \"\\E916\";\n}\n\n.icon-camera:before {\n  content: \"\\E917\";\n}\n\n.icon-checkbox:before {\n  content: \"\\E918\";\n}\n\n.icon-checkmark:before {\n  content: \"\\E919\";\n}\n\n.icon-ck_kit:before {\n  content: \"\\E91A\";\n}\n\n.icon-ClodKit365:before {\n  content: \"\\E91B\";\n}\n\n.icon-clone_user:before {\n  content: \"\\E91C\";\n}\n\n.icon-cloud:before {\n  content: \"\\E91D\";\n}\n\n.icon-collapseAll:before {\n  content: \"\\E91E\";\n}\n\n.icon-Column_chooser:before {\n  content: \"\\E91F\";\n}\n\n.icon-compare:before {\n  content: \"\\E920\";\n}\n\n.icon-copy_to_group:before {\n  content: \"\\E921\";\n}\n\n.icon-create_group:before {\n  content: \"\\E922\";\n}\n\n.icon-curentjobs:before {\n  content: \"\\E923\";\n}\n\n.icon-custom_pack:before {\n  content: \"\\E924\";\n}\n\n.icon-dashboard1:before {\n  content: \"\\E925\";\n}\n\n.icon-dashboard2:before {\n  content: \"\\E926\";\n}\n\n.icon-delete:before {\n  content: \"\\E927\";\n}\n\n.icon-delete_group:before {\n  content: \"\\E928\";\n}\n\n.icon-delete_user:before {\n  content: \"\\E929\";\n}\n\n.icon-details:before {\n  content: \"\\E92A\";\n}\n\n.icon-disabledUser:before {\n  content: \"\\E92B\";\n}\n\n.icon-document:before {\n  content: \"\\E92C\";\n}\n\n.icon-docx:before {\n  content: \"\\E92D\";\n}\n\n.icon-edit:before {\n  content: \"\\E92E\";\n}\n\n.icon-edit_email:before {\n  content: \"\\E92F\";\n}\n\n.icon-edit_phone:before {\n  content: \"\\E930\";\n}\n\n.icon-edit_user:before {\n  content: \"\\E931\";\n}\n\n.icon-equal:before {\n  content: \"\\E932\";\n}\n\n.icon-error:before {\n  content: \"\\E933\";\n}\n\n.icon-event_viewer:before {\n  content: \"\\E934\";\n}\n\n.icon-excel:before {\n  content: \"\\E935\";\n}\n\n.icon-Exchange:before {\n  content: \"\\E936\";\n}\n\n.icon-expand_collapse:before {\n  content: \"\\E937\";\n}\n\n.icon-expandAll:before {\n  content: \"\\E938\";\n}\n\n.icon-export:before {\n  content: \"\\E939\";\n}\n\n.icon-feedback:before {\n  content: \"\\E93A\";\n}\n\n.icon-filter:before {\n  content: \"\\E93B\";\n}\n\n.icon-filter2:before {\n  content: \"\\E93C\";\n}\n\n.icon-flag:before {\n  content: \"\\E93D\";\n}\n\n.icon-folder:before {\n  content: \"\\E93E\";\n}\n\n.icon-full_size:before {\n  content: \"\\E93F\";\n}\n\n.icon-gen_word:before {\n  content: \"\\E940\";\n}\n\n.icon-gen_word1:before {\n  content: \"\\E941\";\n}\n\n.icon-generate:before {\n  content: \"\\E942\";\n}\n\n.icon-ghost:before {\n  content: \"\\E943\";\n}\n\n.icon-grant_permissions:before {\n  content: \"\\E944\";\n}\n\n.icon-group:before {\n  content: \"\\E945\";\n}\n\n.icon-help:before {\n  content: \"\\E946\";\n}\n\n.icon-history:before {\n  content: \"\\E947\";\n}\n\n.icon-hitory_back:before {\n  content: \"\\E948\";\n}\n\n.icon-home:before {\n  content: \"\\E949\";\n}\n\n.icon-in_progress:before {\n  content: \"\\E94A\";\n}\n\n.icon-Info_krug:before {\n  content: \"\\E94B\";\n}\n\n.icon-inProgress:before {\n  content: \"\\E94C\";\n}\n\n.icon-internalLink:before {\n  content: \"\\E94D\";\n}\n\n.icon-item:before {\n  content: \"\\E94E\";\n}\n\n.icon-key:before {\n  content: \"\\E94F\";\n}\n\n.icon-link:before {\n  content: \"\\E950\";\n}\n\n.icon-list:before {\n  content: \"\\E951\";\n}\n\n.icon-load:before {\n  content: \"\\E952\";\n}\n\n.icon-load_info:before {\n  content: \"\\E953\";\n}\n\n.icon-load_job_tasks:before {\n  content: \"\\E954\";\n}\n\n.icon-load_witherrors:before {\n  content: \"\\E955\";\n}\n\n.icon-load_witherrors1:before {\n  content: \"\\E956\";\n}\n\n.icon-logo:before {\n  content: \"\\E957\";\n}\n\n.icon-logo_partner:before {\n  content: \"\\E958\";\n}\n\n.icon-logo_partner2:before {\n  content: \"\\E959\";\n}\n\n.icon-logOut:before {\n  content: \"\\E95A\";\n}\n\n.icon-move_to_group:before {\n  content: \"\\E95B\";\n}\n\n.icon-MyAccount:before {\n  content: \"\\E95C\";\n}\n\n.icon-news:before {\n  content: \"\\E95D\";\n}\n\n.icon-normal_size:before {\n  content: \"\\E95E\";\n}\n\n.icon-not_equal:before {\n  content: \"\\E95F\";\n}\n\n.icon-office:before {\n  content: \"\\E960\";\n}\n\n.icon-office_manage:before {\n  content: \"\\E961\";\n}\n\n.icon-Office365:before {\n  content: \"\\E962\";\n}\n\n.icon-onedrive:before {\n  content: \"\\E963\";\n}\n\n.icon-open:before {\n  content: \"\\E964\";\n}\n\n.icon-pdf:before {\n  content: \"\\E965\";\n}\n\n.icon-pending:before {\n  content: \"\\E966\";\n}\n\n.icon-permission_date:before {\n  content: \"\\E967\";\n}\n\n.icon-permission_level:before {\n  content: \"\\E968\";\n}\n\n.icon-permission_level2:before {\n  content: \"\\E969\";\n}\n\n.icon-permissions_explorer:before {\n  content: \"\\E96A\";\n}\n\n.icon-phone:before {\n  content: \"\\E96B\";\n}\n\n.icon-power:before {\n  content: \"\\E96C\";\n}\n\n.icon-premium_subs:before {\n  content: \"\\E96D\";\n}\n\n.icon-principal_status:before {\n  content: \"\\E96E\";\n}\n\n.icon-principal_type:before {\n  content: \"\\E96F\";\n}\n\n.icon-print:before {\n  content: \"\\E970\";\n}\n\n.icon-que:before {\n  content: \"\\E971\";\n}\n\n.icon-Quote:before {\n  content: \"\\E972\";\n}\n\n.icon-Quote2:before {\n  content: \"\\E973\";\n}\n\n.icon-Quote22:before {\n  content: \"\\E974\";\n}\n\n.icon-recent_jobs:before {\n  content: \"\\E975\";\n}\n\n.icon-refresh:before {\n  content: \"\\E976\";\n}\n\n.icon-reload:before {\n  content: \"\\E977\";\n}\n\n.icon-remove_user:before {\n  content: \"\\E978\";\n}\n\n.icon-remove_users_from_group:before {\n  content: \"\\E979\";\n}\n\n.icon-reset:before {\n  content: \"\\E97A\";\n}\n\n.icon-reset_jobs:before {\n  content: \"\\E97B\";\n}\n\n.icon-restore:before {\n  content: \"\\E97C\";\n}\n\n.icon-save:before {\n  content: \"\\E97D\";\n}\n\n.icon-schedule:before {\n  content: \"\\E97E\";\n}\n\n.icon-search:before {\n  content: \"\\E97F\";\n}\n\n.icon-security_group:before {\n  content: \"\\E980\";\n}\n\n.icon-settings:before {\n  content: \"\\E981\";\n}\n\n.icon-shared_folder:before {\n  content: \"\\E982\";\n}\n\n.icon-SharePoint:before {\n  content: \"\\E983\";\n}\n\n.icon-site:before {\n  content: \"\\E984\";\n}\n\n.icon-site_collection:before {\n  content: \"\\E985\";\n}\n\n.icon-site2:before {\n  content: \"\\E986\";\n}\n\n.icon-Snapshot:before {\n  content: \"\\E987\";\n}\n\n.icon-SP_report:before {\n  content: \"\\E988\";\n}\n\n.icon-database:before {\n  content: \"\\E989\";\n}\n\n.icon-starter-subs:before {\n  content: \"\\E98A\";\n}\n\n.icon-subscription:before {\n  content: \"\\E98B\";\n}\n\n.icon-subsite:before {\n  content: \"\\E98C\";\n}\n\n.icon-summary:before {\n  content: \"\\E98D\";\n}\n\n.icon-superAdmin:before {\n  content: \"\\E98E\";\n}\n\n.icon-switchView:before {\n  content: \"\\E98F\";\n}\n\n.icon-TakeSnapshot:before {\n  content: \"\\E990\";\n}\n\n.icon-transfer_user:before {\n  content: \"\\E991\";\n}\n\n.icon-trash:before {\n  content: \"\\E992\";\n}\n\n.icon-user:before {\n  content: \"\\E993\";\n}\n\n.icon-user_management:before {\n  content: \"\\E994\";\n}\n\n.icon-Users_quote:before {\n  content: \"\\E995\";\n}\n\n.icon-usklicnik:before {\n  content: \"\\E996\";\n}\n\n.icon-verson_update:before {\n  content: \"\\E997\";\n}\n\n.icon-viewType:before {\n  content: \"\\E998\";\n}\n\n.icon-warning:before {\n  content: \"\\E999\";\n}\n\n.icon-world:before {\n  content: \"\\E99A\";\n}\n", ""]);
	
	// exports


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

/***/ 608:
/***/ function(module, exports, __webpack_require__) {

	"use strict";
	
	Object.defineProperty(exports, "__esModule", { value: true });
	var React = __webpack_require__(328);
	var classNames = __webpack_require__(497);
	var PivotItem_1 = __webpack_require__(609);
	var Pivot_Props_1 = __webpack_require__(610);
	var getId_1 = __webpack_require__(551);
	var Icon_1 = __webpack_require__(518);
	__webpack_require__(611);
	var Pivot = /** @class */function (_super) {
	    __extends(Pivot, _super);
	    function Pivot(props) {
	        var _this = _super.call(this, props) || this;
	        var links = _this._getPivotLinks(_this.props);
	        var selectedKey;
	        if (props.selectedKey) {
	            selectedKey = props.selectedKey;
	        } else if (props.selectedIndex !== undefined) {
	            selectedKey = links[props.selectedIndex].itemKey;
	        } else {
	            selectedKey = links[0].itemKey;
	        }
	        _this.state = {
	            links: links,
	            selectedKey: selectedKey,
	            id: getId_1.getId('pivot')
	        };
	        _this._renderLink = _this._renderLink.bind(_this);
	        return _this;
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
	        return React.createElement("div", { className: this.props.className }, this._renderPivotLinks(), this._renderPivotItem());
	    };
	    Pivot.prototype._renderPivotLinks = function () {
	        var _this = this;
	        var className = classNames('pivot', [this.props.className], {
	            'pivot-tabs': this.props.linkFormat === Pivot_Props_1.PivotLinkFormat.tabs
	        });
	        return React.createElement("ul", { className: className, role: "tablist" }, this.state.links.map(function (link) {
	            return _this._renderLink(link);
	        }));
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
	        return React.createElement("a", { id: id + '-tab', key: itemKey, className: classNames(pivotLinkClassName, { 'is-disabled': link.disabled }), onClick: this._onLinkClick.bind(this, itemKey), role: "tab" }, link.linkIcon && React.createElement(Icon_1.Icon, { iconName: link.linkIcon, className: 'pivot-icon', title: link.linkText }), !link.linkIcon && React.createElement("span", { className: 'pivot-text' }, link.linkText), countText);
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
	        // Mapping each PivotItem object into links variable
	        // React.Children(children, function)
	        React.Children.map(props.children, function (child, index) {
	            if (typeof child === 'object' && child.type === PivotItem_1.PivotItem) {
	                var pivotItem = child;
	                var itemKey = pivotItem.props.itemKey || index.toString();
	                links.push({
	                    linkText: pivotItem.props.linkText,
	                    linkIcon: pivotItem.props.linkIcon,
	                    itemKey: itemKey,
	                    itemCount: pivotItem.props.itemCount,
	                    disabled: pivotItem.props.disabled
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

/***/ 609:
/***/ function(module, exports, __webpack_require__) {

	"use strict";
	
	Object.defineProperty(exports, "__esModule", { value: true });
	var React = __webpack_require__(328);
	var PivotItem = /** @class */function (_super) {
	    __extends(PivotItem, _super);
	    function PivotItem() {
	        return _super !== null && _super.apply(this, arguments) || this;
	    }
	    PivotItem.prototype.render = function () {
	        return React.createElement("div", null, this.props.children);
	    };
	    return PivotItem;
	}(React.Component);
	exports.PivotItem = PivotItem;

/***/ },

/***/ 610:
/***/ function(module, exports) {

	"use strict";
	
	Object.defineProperty(exports, "__esModule", { value: true });
	var PivotLinkFormat;
	(function (PivotLinkFormat) {
	    PivotLinkFormat[PivotLinkFormat["links"] = 0] = "links";
	    PivotLinkFormat[PivotLinkFormat["tabs"] = 1] = "tabs";
	})(PivotLinkFormat = exports.PivotLinkFormat || (exports.PivotLinkFormat = {}));

/***/ },

/***/ 611:
/***/ function(module, exports, __webpack_require__) {

	// style-loader: Adds some css to the DOM by adding a <style> tag
	
	// load the styles
	var content = __webpack_require__(612);
	if(typeof content === 'string') content = [[module.id, content, '']];
	// add the styles to the DOM
	var update = __webpack_require__(504)(content, {});
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

/***/ 612:
/***/ function(module, exports, __webpack_require__) {

	exports = module.exports = __webpack_require__(503)();
	// imports
	
	
	// module
	exports.push([module.id, "* {\n  font-family: 'Segoe UI';\n  font-size: 14px;\n  color: #4D4D4F;\n}\n\n::-webkit-scrollbar {\n  width: 8px;\n  height: 8px;\n}\n\n/* Track */\n::-webkit-scrollbar-track {\n  border-radius: 10px;\n  background: #DADADB;\n  border: 2px solid transparent;\n  background-clip: content-box;\n}\n\n/* Handle */\n::-webkit-scrollbar-thumb {\n  border-radius: 10px;\n  background: #AEAEAF;\n}\n\n::-webkit-scrollbar-thumb:hover {\n  background: #4D4D4F;\n}\n\n.ReactVirtualized__Grid:focus, .ReactVirtualized__Collection:focus {\n  outline: none !important;\n}\n\n.pivot {\n  box-sizing: border-box;\n  margin: 0;\n  padding: 0;\n  box-shadow: none;\n  white-space: nowrap;\n  user-select: none;\n}\n\n.pivot .pivot-link {\n  display: inline-block;\n  line-height: 25px;\n  padding: 0 10px;\n  position: relative;\n  cursor: pointer;\n}\n\n.pivot .pivot-link:hover .pivot-text, .pivot .pivot-link:hover .pivot-icon, .pivot .pivot-link:hover .pivot-count {\n  color: #F79428;\n}\n\n.pivot .pivot-link:focus {\n  outline: none;\n}\n\n.pivot .pivot-link::before {\n  content: '';\n  bottom: 0;\n  height: 2px;\n  left: 7px;\n  right: 7px;\n  position: absolute;\n  transition: background-color 267ms cubic-bezier(0.1, 0.25, 0.75, 0.9);\n}\n\n.pivot .pivot-link::after {\n  content: attr(title);\n  display: block;\n  overflow: hidden;\n  visibility: hidden;\n}\n\n.pivot .pivot-link .pivot-icon {\n  margin: 0;\n}\n\n.pivot .pivot-link .pivot-icon::before {\n  position: relative;\n  bottom: -3px;\n  font-size: 18px;\n}\n\n.pivot .pivot-link .pivot-count {\n  margin-left: 5px;\n}\n\n.pivot .pivot-link.is-selected .pivot-text, .pivot .pivot-link.is-selected .pivot-icon, .pivot .pivot-link.is-selected .pivot-count {\n  color: #F79428;\n}\n\n.pivot .pivot-link.is-selected::before {\n  background-color: #F79428;\n}\n\n.pivot .pivot-link.is-disabled {\n  cursor: default;\n  pointer-events: none;\n}\n\n.pivot .pivot-link.is-disabled .pivot-text, .pivot .pivot-link.is-disabled .pivot-icon, .pivot .pivot-link.is-disabled .pivot-count {\n  color: #AEAEAF;\n}\n\n.pivot .pivot-link.is-disabled.is-selected:before {\n  background-color: #FAC992;\n}\n\n.pivot.pivot-tabs .pivot-link {\n  background-color: #F79428;\n  line-height: 40px;\n  padding: 0 20px;\n}\n\n.pivot.pivot-tabs .pivot-link .pivot-text {\n  color: #ffffff;\n}\n\n.pivot.pivot-tabs .pivot-link::before {\n  top: 0;\n  left: 0;\n  right: 0;\n  height: 4px;\n}\n\n.pivot.pivot-tabs .pivot-link:hover:not(.is-selected), .pivot.pivot-tabs .pivot-link:focus:not(.is-selected) {\n  background-color: #E27600;\n}\n\n.pivot.pivot-tabs .pivot-link.is-selected {\n  background-color: #FAC992;\n  color: #ffffff;\n}\n\n.pivot.pivot-tabs .pivot-link.is-selected::before {\n  background-color: #ffffff;\n}\n\n.pivot.pivot-tabs .pivot-link.is-selected .pivot-text {\n  font-weight: 600;\n}\n\n.pivot.pivot-tabs .pivot-link.is-disabled {\n  cursor: default;\n  pointer-events: none;\n  background-color: #FAC992;\n}\n\n.pivot.pivot-tabs .pivot-link.is-disabled .pivot-text, .pivot.pivot-tabs .pivot-link.is-disabled .pivot-icon, .pivot.pivot-tabs .pivot-link.is-disabled .pivot-count {\n  color: #ffffff;\n}\n\n.pivot.pivot-tabs.pivot-tabs-gray .pivot-link {\n  background-color: #AEAEAF;\n}\n\n.pivot.pivot-tabs.pivot-tabs-gray .pivot-link:hover:not(.is-selected), .pivot.pivot-tabs.pivot-tabs-gray .pivot-link:focus:not(.is-selected) {\n  background-color: #313133;\n}\n\n.pivot.pivot-tabs.pivot-tabs-gray .pivot-link.is-selected {\n  background-color: #4D4D4F;\n  color: #ffffff;\n}\n\n.pivot.pivot-tabs.pivot-tabs-gray .pivot-link.is-selected::before {\n  background-color: transparent;\n  transition: none;\n}\n", ""]);
	
	// exports


/***/ }

});
//# sourceMappingURL=Pivot.b3d14060d786be20b6e9.js.map