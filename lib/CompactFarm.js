webpackJsonp([7],{

/***/ 0:
/***/ function(module, exports, __webpack_require__) {

	"use strict";
	
	Object.defineProperty(exports, "__esModule", { value: true });
	/* tslint:disable:no-console */
	__webpack_require__(1);
	__webpack_require__(327);
	var React = __webpack_require__(328);
	var ReactDOM = __webpack_require__(358);
	var CompactFarm_1 = __webpack_require__(570);
	var DashboardDummy_1 = __webpack_require__(594);
	var Index = /** @class */function (_super) {
	    __extends(Index, _super);
	    function Index() {
	        var _this = _super.call(this) || this;
	        _this.state = {
	            farm: DashboardDummy_1.dummyDashboard.farms[0]
	        };
	        return _this;
	    }
	    Index.prototype.render = function () {
	        return React.createElement("div", null, React.createElement(CompactFarm_1.CompactFarm, { farm: this.state.farm, filter: '' }), React.createElement(CompactFarm_1.CompactFarm, { farm: this.state.farm, iconName: 'icon-alert', filter: '', groupOnClick: function () {}, onGroupEdit: function () {}, onGroupDelete: function () {}, onAddToGroup: function () {} }));
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

/***/ 523:
/***/ function(module, exports) {

	"use strict";
	
	Object.defineProperty(exports, "__esModule", { value: true });
	var DirectionalHint;
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
	})(DirectionalHint = exports.DirectionalHint || (exports.DirectionalHint = {}));

/***/ },

/***/ 524:
/***/ function(module, exports, __webpack_require__) {

	"use strict";
	
	Object.defineProperty(exports, "__esModule", { value: true });
	var React = __webpack_require__(328);
	var CalloutContent_1 = __webpack_require__(525);
	var Layers_1 = __webpack_require__(541);
	var Callout = /** @class */function (_super) {
	    __extends(Callout, _super);
	    function Callout() {
	        var _this = _super !== null && _super.apply(this, arguments) || this;
	        _this.setCalloutRef = function (ref) {
	            _this._callout = ref;
	        };
	        _this.UpdatePosition = function () {
	            _this._callout._updatePosition();
	        };
	        return _this;
	    }
	    Callout.prototype.render = function () {
	        var content = React.createElement(CalloutContent_1.CalloutContent, __assign({ ref: this.setCalloutRef }, this.props));
	        return this.props.doNotLayer ? content : React.createElement(Layers_1.Layer, { className: this.props.layerClassName }, content);
	    };
	    return Callout;
	}(React.Component);
	exports.Callout = Callout;

/***/ },

/***/ 525:
/***/ function(module, exports, __webpack_require__) {

	"use strict";
	
	Object.defineProperty(exports, "__esModule", { value: true });
	/* tslint:disable:no-unused-variable */
	var React = __webpack_require__(328);
	var DirectionalHint_1 = __webpack_require__(523);
	var classNames = __webpack_require__(497);
	var elementContains_1 = __webpack_require__(526);
	var getDocument_1 = __webpack_require__(529);
	var positioning_1 = __webpack_require__(530);
	var focus_1 = __webpack_require__(533);
	var object_1 = __webpack_require__(511);
	var Popup_1 = __webpack_require__(534);
	var Common_1 = __webpack_require__(536);
	__webpack_require__(539);
	var BEAK_ORIGIN_POSITION = { top: 0, left: 0 };
	var OFF_SCREEN_POSITION = { top: -9999, left: 0 };
	var BORDER_WIDTH = 1;
	var SPACE_FROM_EDGE = 8;
	var CalloutContent = /** @class */function (_super) {
	    __extends(CalloutContent, _super);
	    function CalloutContent(props) {
	        var _this = _super.call(this, props, { 'beakStyle': 'beakWidth' }) || this;
	        _this._setInitialFocus = function () {
	            if (_this.props.setInitialFocus && !_this._didSetInitialFocus && _this.state.positions) {
	                _this._didSetInitialFocus = true;
	                focus_1.focusFirstChild(_this._calloutElement);
	            }
	        };
	        _this._onComponentDidMount = function () {
	            _this._events.on(_this._targetWindow, 'scroll', _this._dismissOnLostFocus, true);
	            _this._events.on(_this._targetWindow, 'resize', _this.dismiss, true);
	            _this._events.on(_this._targetWindow, 'focus', _this._dismissOnLostFocus, true);
	            _this._events.on(_this._targetWindow, 'click', _this._dismissOnLostFocus, true);
	            if (_this.props.onLayerMounted) {
	                _this.props.onLayerMounted();
	            }
	            _this._updatePosition();
	        };
	        _this._updatePosition = function () {
	            var positions = _this.state.positions;
	            var hostElement = _this._hostElement;
	            var calloutElement = _this._calloutElement;
	            if (hostElement && calloutElement) {
	                var currentProps = void 0;
	                currentProps = object_1.assign(currentProps, _this.props);
	                currentProps.bounds = _this._getBounds();
	                if (_this.props.targetElement) {
	                    currentProps.targetElement = _this._target;
	                } else {
	                    currentProps.target = _this._target;
	                }
	                var positionInfo = positioning_1.getRelativePositions(currentProps, hostElement, calloutElement);
	                if (!positions && positionInfo || positions && positionInfo && (positions.callout.top.toFixed(2) !== positionInfo.calloutPosition.top.toFixed(2) || positions.callout.left.toFixed(2) !== positionInfo.calloutPosition.left.toFixed(2)) && _this._positionAttempts < 5) {
	                    _this._positionAttempts++;
	                    _this.setState({
	                        positions: {
	                            callout: positionInfo.calloutPosition,
	                            beak: positionInfo.beakPosition
	                        },
	                        slideDirectionalClassName: positionInfo.directionalClassName
	                    });
	                } else {
	                    _this._positionAttempts = 0;
	                }
	            }
	        };
	        _this._didSetInitialFocus = false;
	        _this.state = {
	            positions: null,
	            slideDirectionalClassName: null,
	            calloutElementRect: null
	        };
	        _this._positionAttempts = 0;
	        _this._borderWidth = _this.props.hideBorder ? 0 : BORDER_WIDTH;
	        return _this;
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
	        var content = React.createElement("div", { ref: this._resolveRef('_hostElement'), className: 'callout-container' }, React.createElement("div", { className: classNames('callout', className, { 'callout-no-border': this.props.hideBorder }, slideDirectionalClassName ? "" + slideDirectionalClassName : ''), style: positions ? positions.callout : OFF_SCREEN_POSITION, ref: this._resolveRef('_calloutElement') }, beakVisible && React.createElement("div", { className: 'callout-beak', style: beakReactStyle }), beakVisible && React.createElement("div", { className: "callout-beak-curtain" }), React.createElement(Popup_1.Popup, { className: "callout-main", onDismiss: function (ev) {
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
	        beakWidth: 12,
	        gapSpace: 16,
	        directionalHint: DirectionalHint_1.DirectionalHint.bottomAutoEdge
	    };
	    return CalloutContent;
	}(Common_1.CommonComponent);
	exports.CalloutContent = CalloutContent;

/***/ },

/***/ 526:
/***/ function(module, exports, __webpack_require__) {

	"use strict";
	
	Object.defineProperty(exports, "__esModule", { value: true });
	var getParent_1 = __webpack_require__(527);
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

/***/ 527:
/***/ function(module, exports, __webpack_require__) {

	"use strict";
	
	Object.defineProperty(exports, "__esModule", { value: true });
	var virtualParent_1 = __webpack_require__(528);
	function getParent(child, allowVirtualParents) {
	    if (allowVirtualParents === void 0) {
	        allowVirtualParents = true;
	    }
	    return child && (allowVirtualParents && virtualParent_1.getVirtualParent(child) || child.parentNode && child.parentNode);
	}
	exports.getParent = getParent;

/***/ },

/***/ 528:
/***/ function(module, exports) {

	"use strict";
	
	Object.defineProperty(exports, "__esModule", { value: true });
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

/***/ 529:
/***/ function(module, exports) {

	"use strict";
	
	Object.defineProperty(exports, "__esModule", { value: true });
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

/***/ 530:
/***/ function(module, exports, __webpack_require__) {

	"use strict";
	
	Object.defineProperty(exports, "__esModule", { value: true });
	var DirectionalHint_1 = __webpack_require__(523);
	var Rectangle_1 = __webpack_require__(531);
	var scroll_1 = __webpack_require__(532);
	var object_1 = __webpack_require__(511);
	var RectangleEdge;
	(function (RectangleEdge) {
	    RectangleEdge[RectangleEdge["top"] = 0] = "top";
	    RectangleEdge[RectangleEdge["bottom"] = 1] = "bottom";
	    RectangleEdge[RectangleEdge["left"] = 2] = "left";
	    RectangleEdge[RectangleEdge["right"] = 3] = "right";
	})(RectangleEdge = exports.RectangleEdge || (exports.RectangleEdge = {}));
	var SLIDE_ANIMATIONS = (_a = {}, _a[RectangleEdge.top] = 'slideUpIn20', _a[RectangleEdge.bottom] = 'slideDownIn20', _a[RectangleEdge.left] = 'slideLeftIn20', _a[RectangleEdge.right] = 'slideRightIn20', _a);
	var PositionData = /** @class */function () {
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

/***/ 531:
/***/ function(module, exports) {

	"use strict";
	
	Object.defineProperty(exports, "__esModule", { value: true });
	var Rectangle = /** @class */function () {
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

/***/ 532:
/***/ function(module, exports) {

	"use strict";
	
	Object.defineProperty(exports, "__esModule", { value: true });
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

/***/ 533:
/***/ function(module, exports, __webpack_require__) {

	"use strict";
	
	Object.defineProperty(exports, "__esModule", { value: true });
	var getDocument_1 = __webpack_require__(529);
	var elementContains_1 = __webpack_require__(526);
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

/***/ 534:
/***/ function(module, exports, __webpack_require__) {

	"use strict";
	
	Object.defineProperty(exports, "__esModule", { value: true });
	var React = __webpack_require__(328);
	var KeyCodes_1 = __webpack_require__(535);
	var attributes_1 = __webpack_require__(510);
	var focus_1 = __webpack_require__(533);
	var getDocument_1 = __webpack_require__(529);
	var Common_1 = __webpack_require__(536);
	var Popup = /** @class */function (_super) {
	    __extends(Popup, _super);
	    function Popup() {
	        return _super !== null && _super.apply(this, arguments) || this;
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

/***/ 535:
/***/ function(module, exports) {

	"use strict";
	
	Object.defineProperty(exports, "__esModule", { value: true });
	var KeyCodes;
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
	})(KeyCodes = exports.KeyCodes || (exports.KeyCodes = {}));

/***/ },

/***/ 536:
/***/ function(module, exports, __webpack_require__) {

	"use strict";
	
	Object.defineProperty(exports, "__esModule", { value: true });
	var React = __webpack_require__(328);
	var EventGroup_1 = __webpack_require__(537);
	var Async_1 = __webpack_require__(538);
	var CommonComponent = /** @class */function (_super) {
	    __extends(CommonComponent, _super);
	    function CommonComponent() {
	        return _super !== null && _super.apply(this, arguments) || this;
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
	}(React.PureComponent);
	exports.CommonComponent = CommonComponent;

/***/ },

/***/ 537:
/***/ function(module, exports) {

	"use strict";
	
	Object.defineProperty(exports, "__esModule", { value: true });
	var EventGroup = /** @class */function () {
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
	                        args[_i] = arguments[_i];
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
	                        /* ErrorHelper.log(e); */
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
	                        args[_i] = arguments[_i];
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

/***/ 538:
/***/ function(module, exports) {

	"use strict";
	
	Object.defineProperty(exports, "__esModule", { value: true });
	var Async = /** @class */function () {
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
	                args[_i] = arguments[_i];
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
	                args[_i] = arguments[_i];
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

/***/ 539:
/***/ function(module, exports, __webpack_require__) {

	// style-loader: Adds some css to the DOM by adding a <style> tag
	
	// load the styles
	var content = __webpack_require__(540);
	if(typeof content === 'string') content = [[module.id, content, '']];
	// add the styles to the DOM
	var update = __webpack_require__(504)(content, {});
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

/***/ 540:
/***/ function(module, exports, __webpack_require__) {

	exports = module.exports = __webpack_require__(503)();
	// imports
	
	
	// module
	exports.push([module.id, "* {\n  font-family: 'Segoe UI';\n  font-size: 14px;\n  color: #4D4D4F;\n}\n\n::-webkit-scrollbar {\n  width: 8px;\n  height: 8px;\n}\n\n/* Track */\n::-webkit-scrollbar-track {\n  border-radius: 10px;\n  background: #DADADB;\n  border: 2px solid transparent;\n  background-clip: content-box;\n}\n\n/* Handle */\n::-webkit-scrollbar-thumb {\n  border-radius: 10px;\n  background: #AEAEAF;\n}\n\n::-webkit-scrollbar-thumb:hover {\n  background: #4D4D4F;\n}\n\n.ReactVirtualized__Grid:focus, .ReactVirtualized__Collection:focus {\n  outline: none !important;\n}\n\n.callout-container {\n  position: relative;\n}\n\n.callout-container .callout {\n  position: absolute;\n  border: 1px solid #F79428;\n  box-sizing: border-box;\n  border-radius: 8px;\n}\n\n.callout-container .callout.callout-no-border {\n  border: 0;\n}\n\n.callout-container .callout .callout-main {\n  background-color: #ffffff;\n  overflow-y: auto;\n  overflow-x: hidden;\n  position: relative;\n  border-radius: 8px;\n}\n\n.callout-container .callout .callout-beak {\n  position: absolute;\n  background-color: #ffffff;\n  box-shadow: inherit;\n  border: inherit;\n  box-sizing: border-box;\n  -webkit-transform: rotate(45deg);\n  -ms-transform: rotate(45deg);\n  transform: rotate(45deg);\n}\n\n.callout-container .callout .callout-beak-curtain {\n  position: absolute;\n  top: 0;\n  right: 0;\n  bottom: 0;\n  left: 0;\n  background-color: #ffffff;\n}\n", ""]);
	
	// exports


/***/ },

/***/ 541:
/***/ function(module, exports, __webpack_require__) {

	"use strict";
	
	function __export(m) {
	    for (var p in m) if (!exports.hasOwnProperty(p)) exports[p] = m[p];
	}
	Object.defineProperty(exports, "__esModule", { value: true });
	__export(__webpack_require__(542));
	__export(__webpack_require__(543));
	__export(__webpack_require__(552));

/***/ },

/***/ 542:
/***/ function(module, exports, __webpack_require__) {

	"use strict";
	
	Object.defineProperty(exports, "__esModule", { value: true });
	var React = __webpack_require__(328);
	var LayerHost_1 = __webpack_require__(543);
	var getId_1 = __webpack_require__(551);
	__webpack_require__(549);
	var Layer = /** @class */function (_super) {
	    __extends(Layer, _super);
	    function Layer(props) {
	        var _this = _super.call(this, props) || this;
	        _this._id = getId_1.getId();
	        return _this;
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

/***/ 543:
/***/ function(module, exports, __webpack_require__) {

	"use strict";
	
	Object.defineProperty(exports, "__esModule", { value: true });
	var React = __webpack_require__(328);
	var ReactDOM = __webpack_require__(358);
	var Fabric_1 = __webpack_require__(544);
	var autobind_1 = __webpack_require__(546);
	var array_1 = __webpack_require__(547);
	var attributes_1 = __webpack_require__(510);
	var classNames = __webpack_require__(497);
	var ProjectedLayer_1 = __webpack_require__(548);
	var DEFAULT_HOST_ID = '__layerHost';
	var LayerHost = /** @class */function (_super) {
	    __extends(LayerHost, _super);
	    function LayerHost(props) {
	        var _this = _super.call(this, props) || this;
	        _this.state = {
	            layers: []
	        };
	        _this._layers = [];
	        _this._layerRefs = {};
	        return _this;
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
	    __decorate([autobind_1.autobind, __metadata("design:type", Function), __metadata("design:paramtypes", [ProjectedLayer_1.ProjectedLayer]), __metadata("design:returntype", void 0)], LayerHost.prototype, "_resolveLayer", null);
	    return LayerHost;
	}(React.Component);
	exports.LayerHost = LayerHost;

/***/ },

/***/ 544:
/***/ function(module, exports, __webpack_require__) {

	"use strict";
	
	Object.defineProperty(exports, "__esModule", { value: true });
	var React = __webpack_require__(328);
	var EventGroup_1 = __webpack_require__(545);
	var KeyCodes_1 = __webpack_require__(535);
	var classNames = __webpack_require__(497);
	var DIRECTIONAL_KEY_CODES = [KeyCodes_1.KeyCodes.up, KeyCodes_1.KeyCodes.down, KeyCodes_1.KeyCodes.left, KeyCodes_1.KeyCodes.right, KeyCodes_1.KeyCodes.home, KeyCodes_1.KeyCodes.end, KeyCodes_1.KeyCodes.tab, KeyCodes_1.KeyCodes.pageUp, KeyCodes_1.KeyCodes.pageDown];
	var _lastIsFocusVisible = false;
	if (typeof document === 'object' && document.documentElement && !document.documentElement.getAttribute('dir')) {
	    document.documentElement.setAttribute('dir', 'ltr');
	}
	var Fabric = /** @class */function (_super) {
	    __extends(Fabric, _super);
	    function Fabric() {
	        var _this = _super.call(this) || this;
	        _this.state = {
	            isFocusVisible: _lastIsFocusVisible
	        };
	        _this._events = new EventGroup_1.EventGroup(_this);
	        return _this;
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

/***/ 545:
/***/ function(module, exports) {

	"use strict";
	
	Object.defineProperty(exports, "__esModule", { value: true });
	var argsKey = 'args';
	var createEventObjectKey = 'createEventObject';
	var EventGroup = /** @class */function () {
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
	                        args[_i] = arguments[_i];
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
	                        args[_i] = arguments[_i];
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

/***/ 546:
/***/ function(module, exports) {

	"use strict";
	
	Object.defineProperty(exports, "__esModule", { value: true });
	function autobind(target, key, descriptor) {
	    var fn = descriptor.value;
	    if (typeof fn !== 'function') {
	        throw new Error("@autobind decorator can only be applied to methods");
	    }
	    // avoid recursion in IE11
	    var definingProperty = false;
	    return {
	        configurable: true,
	        get: function () {
	            if (definingProperty || this === target.prototype || this.hasOwnProperty(key)) {
	                return fn;
	            }
	            var bound = fn.bind(this);
	            definingProperty = true;
	            Object.defineProperty(this, key, {
	                value: bound,
	                configurable: true,
	                writable: true
	            });
	            definingProperty = false;
	            return bound;
	        }
	    };
	}
	exports.autobind = autobind;

/***/ },

/***/ 547:
/***/ function(module, exports) {

	"use strict";
	
	Object.defineProperty(exports, "__esModule", { value: true });
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
	function shallowCompareArrayEqual(first, second) {
	    if (first.length !== second.length) {
	        return false;
	    }
	    for (var index = 0; index < first.length; index++) {
	        if (first[index] !== second[index]) {
	            return false;
	        }
	    }
	    return true;
	}
	exports.shallowCompareArrayEqual = shallowCompareArrayEqual;
	exports.sortArray = function (inputArray, sortOptions) {
	    var sortFunction = function (a, b) {
	        for (var _i = 0, sortOptions_1 = sortOptions; _i < sortOptions_1.length; _i++) {
	            var sortOption = sortOptions_1[_i];
	            var valueA = void 0;
	            var valueB = void 0;
	            if (sortOption.sortFunction) {
	                valueA = sortOption.sortFunction(a);
	                valueB = sortOption.sortFunction(b);
	            } else {
	                valueA = a[sortOption.column];
	                valueB = b[sortOption.column];
	            }
	            if (valueA < valueB) {
	                return -1 * sortOption.sortModifier;
	            }
	            if (valueA > valueB) {
	                return 1 * sortOption.sortModifier;
	            }
	        }
	        return 0;
	    };
	    return inputArray.slice().sort(sortFunction);
	};
	exports.groupBy = function (inputArray, groupProp) {
	    return inputArray.reduce(function (groups, item) {
	        (groups[item[groupProp]] = groups[item[groupProp]] || []).push(item);
	        return groups;
	    }, {});
	};

/***/ },

/***/ 548:
/***/ function(module, exports, __webpack_require__) {

	"use strict";
	
	Object.defineProperty(exports, "__esModule", { value: true });
	var React = __webpack_require__(328);
	var virtualParent_1 = __webpack_require__(528);
	var attributes_1 = __webpack_require__(510);
	var classNames = __webpack_require__(497);
	__webpack_require__(549);
	var ProjectedLayer = /** @class */function (_super) {
	    __extends(ProjectedLayer, _super);
	    function ProjectedLayer(props) {
	        var _this = _super.call(this, props) || this;
	        _this.state = {
	            isMounted: false
	        };
	        _this._remoteProps = props.defaultRemoteProps;
	        return _this;
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

/***/ 549:
/***/ function(module, exports, __webpack_require__) {

	// style-loader: Adds some css to the DOM by adding a <style> tag
	
	// load the styles
	var content = __webpack_require__(550);
	if(typeof content === 'string') content = [[module.id, content, '']];
	// add the styles to the DOM
	var update = __webpack_require__(504)(content, {});
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

/***/ 550:
/***/ function(module, exports, __webpack_require__) {

	exports = module.exports = __webpack_require__(503)();
	// imports
	
	
	// module
	exports.push([module.id, ".overlay {\n  position: absolute;\n  visibility: hidden;\n  top: 0;\n  left: 0;\n  bottom: 0;\n  right: 0;\n}\n\n.projected-layer {\n  visibility: visible;\n  position: absolute;\n  width: 100%;\n}\n\n.projected-layer.dropdown-projected-layer {\n  height: 100%;\n}\n", ""]);
	
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

/***/ 552:
/***/ function(module, exports, __webpack_require__) {

	"use strict";
	
	function __export(m) {
	    for (var p in m) if (!exports.hasOwnProperty(p)) exports[p] = m[p];
	}
	Object.defineProperty(exports, "__esModule", { value: true });
	__export(__webpack_require__(544));

/***/ },

/***/ 570:
/***/ function(module, exports, __webpack_require__) {

	"use strict";
	
	Object.defineProperty(exports, "__esModule", { value: true });
	var React = __webpack_require__(328);
	var CompactServer_1 = __webpack_require__(571);
	var ServerTile_1 = __webpack_require__(582);
	var Group_1 = __webpack_require__(589);
	var server_1 = __webpack_require__(579);
	var Common_1 = __webpack_require__(536);
	var Callout_1 = __webpack_require__(524);
	__webpack_require__(592);
	var HOVER_TIME = 250; // ms
	var CompactFarm = /** @class */function (_super) {
	    __extends(CompactFarm, _super);
	    function CompactFarm(props) {
	        var _this = _super.call(this, props) || this;
	        _this._serverId = null;
	        _this._hoverTargetElement = null;
	        _this._onMouseLeave = function (ev) {
	            _this._async.clearTimeout(_this._enterTimerId);
	            _this._hideServerTile();
	        };
	        _this._hideServerTile = function () {
	            _this._serverId = null;
	            _this._hoverTargetElement = null;
	            _this.forceUpdate();
	        };
	        _this._renderServerTile = function (serverId) {
	            var server = _this.props.farm.servers.filter(function (currServer) {
	                return currServer.id === serverId;
	            })[0];
	            return React.createElement(ServerTile_1.ServerTile, { name: server.name, id: server.id, roles: server.roles, status: server.status, countersData: server_1.getServerMeasures(server.measures) });
	        };
	        _this._onServerClicked = function (serverId) {
	            var _a = _this.props,
	                serverOnClick = _a.serverOnClick,
	                farm = _a.farm;
	            if (serverOnClick) {
	                serverOnClick(farm.id, serverId);
	            }
	        };
	        _this._onServerClose = function (serverId, event) {
	            _this.props.onServerClose(serverId, _this.props.farm.id, event);
	        };
	        _this._onRoleChange = function (serverId, event) {
	            if (_this.props.onServerRoleEdit) {
	                _this.props.onServerRoleEdit(serverId, _this.props.farm.id, event);
	            }
	        };
	        _this._enterTimerId = 0;
	        return _this;
	    }
	    CompactFarm.prototype._onItemMouseEnter = function (serverId, ev) {
	        var _this = this;
	        var targetElement = ev.currentTarget;
	        if (serverId !== this._serverId) {
	            this._enterTimerId = this._async.setTimeout(function () {
	                return _this._displayServerTile(serverId, targetElement);
	            }, HOVER_TIME);
	        }
	    };
	    CompactFarm.prototype.componentWillReceiveProps = function (nextProps) {
	        var _this = this;
	        this._async.clearTimeout(this._enterTimerId);
	        var server = null;
	        if (this._serverId !== null) {
	            server = nextProps.farm.servers.filter(function (s) {
	                return s.id === _this._serverId;
	            });
	        }
	        if (!server || server.length === 0) {
	            this._hideServerTile();
	        }
	    };
	    CompactFarm.prototype._displayServerTile = function (serverId, target) {
	        if (this._serverId !== serverId) {
	            if (this._serverId) {
	                this._hideServerTile();
	            }
	            this._serverId = serverId;
	            this._hoverTargetElement = target;
	            this.forceUpdate();
	        }
	    };
	    CompactFarm.prototype.render = function () {
	        var _this = this;
	        var farm = this.props.farm;
	        var servers = farm.servers.sort(function (server1, server2) {
	            return server_1.sortServersByStatusAndName({ status: server1.status, name: server1.name }, { status: server2.status, name: server2.name });
	        });
	        return React.createElement("div", { className: 'compact-farm' }, React.createElement(Group_1.Group, { editFunc: this.props.onGroupEdit, deleteFunc: this.props.onGroupDelete, addFunc: this.props.onAddToGroup, serverChildrenCount: servers.length, className: 'farm-name-inside', id: farm.id, name: farm.name, key: farm.id, onClick: this.props.groupOnClick, iconName: this.props.iconName, iconTitle: this.props.iconTitle }, servers.map(function (server, index) {
	            return React.createElement(CompactServer_1.CompactServer, { key: server.id, roles: server.roles, id: server.id, status: server.status, onRoleEdit: _this.props.onServerRoleEdit !== undefined ? _this._onRoleChange : undefined, onClose: _this.props.onServerClose !== undefined ? _this._onServerClose : undefined, name: server.name, serverOnClick: _this._onServerClicked, onMouseEnter: _this._onItemMouseEnter.bind(_this, server.id), onMouseLeave: _this._onMouseLeave, hoverMessageForCriticalOrWarningServer: _this.props.hoverMessageForCriticalOrWarningServer });
	        }), this._serverId && React.createElement(Callout_1.Callout, { targetElement: this._hoverTargetElement, hideBorder: true, isBeakVisible: false, gapSpace: 5, className: "compact-farm-callout" }, this._renderServerTile(this._serverId))));
	    };
	    CompactFarm.defaultProps = {
	        editRoles: false
	    };
	    return CompactFarm;
	}(Common_1.CommonComponent);
	exports.CompactFarm = CompactFarm;

/***/ },

/***/ 571:
/***/ function(module, exports, __webpack_require__) {

	"use strict";
	
	Object.defineProperty(exports, "__esModule", { value: true });
	var React = __webpack_require__(328);
	var TagContainer_1 = __webpack_require__(572);
	var Icon_1 = __webpack_require__(518);
	var autobind_1 = __webpack_require__(546);
	var models_1 = __webpack_require__(575);
	var server_1 = __webpack_require__(579);
	__webpack_require__(580);
	var CompactServer = /** @class */function (_super) {
	    __extends(CompactServer, _super);
	    function CompactServer(props) {
	        var _this = _super.call(this, props) || this;
	        _this.ContainerElement = null;
	        return _this;
	    }
	    CompactServer.prototype.refCallback = function (element) {
	        this.ContainerElement = element;
	    };
	    CompactServer.prototype.render = function () {
	        var _this = this;
	        var _a = this.props,
	            status = _a.status,
	            hoverMessageForCriticalOrWarningServer = _a.hoverMessageForCriticalOrWarningServer;
	        var className = server_1.GetClassForStatus('compact-server-container', status);
	        var serverHoverMessage = hoverMessageForCriticalOrWarningServer && (status === models_1.ServerStatus.Critical || status === models_1.ServerStatus.Warning) ? hoverMessageForCriticalOrWarningServer : '';
	        return React.createElement("div", { className: className, onMouseEnter: this.props.onMouseEnter, onMouseLeave: this.props.onMouseLeave, onClick: this.onclick, ref: this.refCallback, title: serverHoverMessage }, React.createElement("span", { className: 'server-title' }, React.createElement("span", null, this.props.name), this.props.onClose && React.createElement(Icon_1.Icon, { title: 'Delete', iconName: 'icon-delete', onClick: function (event) {
	                return _this.props.onClose(_this.props.id, event);
	            } })), this.props.roles.length > 0 && React.createElement("div", null, React.createElement(TagContainer_1.TagContainer, { title: '', tags: this.props.roles }, this.props.onRoleEdit && React.createElement("div", { className: "edit-tags tag", title: "Edit roles", onClick: function (event) {
	                return _this.props.onRoleEdit(_this.props.id, event);
	            } }, React.createElement(Icon_1.Icon, { className: "icon-edit" })))));
	    };
	    CompactServer.prototype.onclick = function (event) {
	        var _a = this.props,
	            serverOnClick = _a.serverOnClick,
	            id = _a.id;
	        if (serverOnClick) {
	            serverOnClick(id);
	        }
	    };
	    CompactServer.prototype.closeServer = function (event) {
	        var onClose = this.props.onClose;
	        onClose(this.props.id);
	    };
	    CompactServer.defaultProps = {
	        editRoles: false
	    };
	    __decorate([autobind_1.autobind, __metadata("design:type", Function), __metadata("design:paramtypes", [Object]), __metadata("design:returntype", void 0)], CompactServer.prototype, "refCallback", null);
	    __decorate([autobind_1.autobind, __metadata("design:type", Function), __metadata("design:paramtypes", [Object]), __metadata("design:returntype", void 0)], CompactServer.prototype, "onclick", null);
	    __decorate([autobind_1.autobind, __metadata("design:type", Function), __metadata("design:paramtypes", [Object]), __metadata("design:returntype", void 0)], CompactServer.prototype, "closeServer", null);
	    return CompactServer;
	}(React.PureComponent);
	exports.CompactServer = CompactServer;

/***/ },

/***/ 572:
/***/ function(module, exports, __webpack_require__) {

	"use strict";
	
	Object.defineProperty(exports, "__esModule", { value: true });
	var React = __webpack_require__(328);
	var Icon_1 = __webpack_require__(518);
	var Label_1 = __webpack_require__(509);
	__webpack_require__(573);
	var TagContainer = /** @class */function (_super) {
	    __extends(TagContainer, _super);
	    function TagContainer(props) {
	        return _super.call(this, props) || this;
	    }
	    TagContainer.prototype.render = function () {
	        var _this = this;
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
	        return React.createElement("div", { className: "tag-container" }, title && React.createElement(Label_1.Label, null, title), tags.length <= 3 && tags.map(function (tag, tagIndex) {
	            return _this.renderTag(tag, tagIndex);
	        }), tags.length > 3 && tags.map(function (i) {
	            return i;
	        }).slice(0, 3).map(function (tag, tagIndex) {
	            return _this.renderTag(tag, tagIndex);
	        }), tags.length > 3 && React.createElement("div", { className: "tag points", title: extraTags }, "..."), this.props.children);
	    };
	    TagContainer.prototype.renderTag = function (tag, tagIndex) {
	        return React.createElement("div", { key: tagIndex, className: "tag" }, tag.iconName && React.createElement(Icon_1.Icon, { iconName: tag.iconName, title: tag.tooltip }), React.createElement("span", { style: { cursor: 'pointer' }, className: 'tag-text', title: tag.display }, tag.display));
	    };
	    return TagContainer;
	}(React.Component);
	exports.TagContainer = TagContainer;

/***/ },

/***/ 573:
/***/ function(module, exports, __webpack_require__) {

	// style-loader: Adds some css to the DOM by adding a <style> tag
	
	// load the styles
	var content = __webpack_require__(574);
	if(typeof content === 'string') content = [[module.id, content, '']];
	// add the styles to the DOM
	var update = __webpack_require__(504)(content, {});
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

/***/ 574:
/***/ function(module, exports, __webpack_require__) {

	exports = module.exports = __webpack_require__(503)();
	// imports
	
	
	// module
	exports.push([module.id, "* {\n  font-family: 'Segoe UI';\n  font-size: 14px;\n  color: #4D4D4F;\n}\n\n::-webkit-scrollbar {\n  width: 8px;\n  height: 8px;\n}\n\n/* Track */\n::-webkit-scrollbar-track {\n  border-radius: 10px;\n  background: #DADADB;\n  border: 2px solid transparent;\n  background-clip: content-box;\n}\n\n/* Handle */\n::-webkit-scrollbar-thumb {\n  border-radius: 10px;\n  background: #AEAEAF;\n}\n\n::-webkit-scrollbar-thumb:hover {\n  background: #4D4D4F;\n}\n\n.ReactVirtualized__Grid:focus, .ReactVirtualized__Collection:focus {\n  outline: none !important;\n}\n\n.tag-container .tag {\n  display: inline-block;\n  margin: 5px 4px;\n}\n\n.tag-container .tag .icon {\n  margin-right: 2px;\n  font-size: 12px;\n}\n\n.tag-container .tag.edit-tags {\n  visibility: hidden;\n  cursor: pointer;\n  margin-left: 10px;\n}\n\n.tag-container .tag.edit-tags:hover .icon {\n  color: #25A7EF;\n}\n\n.tag-container .tag.points {\n  cursor: pointer;\n  margin: 0;\n  top: -1px;\n  position: relative;\n}\n\n.tag-container .tag .tag-text {\n  max-width: 37px;\n  display: inline-block;\n  position: relative;\n  top: 2px;\n  font-size: 12px;\n  white-space: nowrap;\n  overflow: hidden;\n  text-overflow: ellipsis;\n}\n\n.tag-container:hover > .edit-tags {\n  visibility: visible;\n}\n\n.tag-container:hover > .edit-tags .icon, .tag-container:hover > .edit-tags .icon:hover {\n  color: #25A7EF;\n}\n", ""]);
	
	// exports


/***/ },

/***/ 575:
/***/ function(module, exports, __webpack_require__) {

	"use strict";
	
	function __export(m) {
	    for (var p in m) if (!exports.hasOwnProperty(p)) exports[p] = m[p];
	}
	Object.defineProperty(exports, "__esModule", { value: true });
	__export(__webpack_require__(576));
	__export(__webpack_require__(577));
	__export(__webpack_require__(578));

/***/ },

/***/ 576:
/***/ function(module, exports) {

	"use strict";
	
	Object.defineProperty(exports, "__esModule", { value: true });
	var GroupTypeEnum;
	(function (GroupTypeEnum) {
	    GroupTypeEnum[GroupTypeEnum["SharePoint"] = 1] = "SharePoint";
	    GroupTypeEnum[GroupTypeEnum["Sql"] = 2] = "Sql";
	    GroupTypeEnum[GroupTypeEnum["SqlAlwaysOn"] = 3] = "SqlAlwaysOn";
	    GroupTypeEnum[GroupTypeEnum["Custom"] = 4] = "Custom";
	    GroupTypeEnum[GroupTypeEnum["Critical"] = 5] = "Critical";
	    GroupTypeEnum[GroupTypeEnum["Warning"] = 6] = "Warning";
	    GroupTypeEnum[GroupTypeEnum["Healthy"] = 7] = "Healthy";
	    GroupTypeEnum[GroupTypeEnum["Offline"] = 8] = "Offline";
	    GroupTypeEnum[GroupTypeEnum["Disabled"] = 9] = "Disabled";
	    GroupTypeEnum[GroupTypeEnum["CountersDisabled"] = 10] = "CountersDisabled";
	})(GroupTypeEnum = exports.GroupTypeEnum || (exports.GroupTypeEnum = {}));

/***/ },

/***/ 577:
/***/ function(module, exports) {

	"use strict";
	
	Object.defineProperty(exports, "__esModule", { value: true });
	var MeasureType;
	(function (MeasureType) {
	    MeasureType[MeasureType["Ram"] = 0] = "Ram";
	    MeasureType[MeasureType["CPU"] = 1] = "CPU";
	    MeasureType[MeasureType["Disk"] = 2] = "Disk";
	    MeasureType[MeasureType["Network"] = 3] = "Network";
	})(MeasureType = exports.MeasureType || (exports.MeasureType = {}));

/***/ },

/***/ 578:
/***/ function(module, exports) {

	"use strict";
	
	Object.defineProperty(exports, "__esModule", { value: true });
	var ServerStatus;
	(function (ServerStatus) {
	    ServerStatus[ServerStatus["OK"] = 2] = "OK";
	    ServerStatus[ServerStatus["Warning"] = 1] = "Warning";
	    ServerStatus[ServerStatus["Critical"] = 0] = "Critical";
	    ServerStatus[ServerStatus["Offline"] = 3] = "Offline";
	    ServerStatus[ServerStatus["Disabled"] = 4] = "Disabled";
	    ServerStatus[ServerStatus["CountersDisabled"] = 5] = "CountersDisabled";
	})(ServerStatus = exports.ServerStatus || (exports.ServerStatus = {}));

/***/ },

/***/ 579:
/***/ function(module, exports, __webpack_require__) {

	"use strict";
	
	Object.defineProperty(exports, "__esModule", { value: true });
	var models_1 = __webpack_require__(575);
	var classNames = __webpack_require__(497);
	var noMeasureString = '--';
	function sortServersByStatusAndName(ob1, ob2) {
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
	exports.sortServersByStatusAndName = sortServersByStatusAndName;
	function GetClassForStatus(defaultClass, status) {
	    return classNames(defaultClass, { 'status-warning': status === models_1.ServerStatus.Warning }, { 'status-ok': status === models_1.ServerStatus.OK }, { 'status-critical': status === models_1.ServerStatus.Critical }, { 'status-offline': status === models_1.ServerStatus.Offline }, { 'status-offline': status === models_1.ServerStatus.Disabled });
	}
	exports.GetClassForStatus = GetClassForStatus;
	function filterServerByName(filter, serverName) {
	    return serverName.toLowerCase().trim().indexOf(filter.toLowerCase().trim()) !== -1;
	}
	exports.filterServerByName = filterServerByName;
	function filterServerByStatus(filteringOptions, serverStatus) {
	    var serverMatched;
	    var statusOptions = filteringOptions.filter(function (x) {
	        return x.type === 'Status';
	    });
	    for (var i = 0; i < statusOptions.length; i++) {
	        var value = statusOptions[i].key.toLowerCase().trim();
	        switch (value) {
	            case 'critical':
	                serverMatched = serverMatched || serverStatus === models_1.ServerStatus.Critical;
	                break;
	            case 'warning':
	                serverMatched = serverMatched || serverStatus === models_1.ServerStatus.Warning;
	                break;
	            case 'healthy':
	                serverMatched = serverMatched || serverStatus === models_1.ServerStatus.OK;
	                break;
	            case 'offline':
	                serverMatched = serverMatched || serverStatus === models_1.ServerStatus.Offline;
	                break;
	            case 'disabled':
	                serverMatched = serverMatched || serverStatus === models_1.ServerStatus.Disabled;
	                break;
	        }
	    }
	    return serverMatched;
	}
	exports.filterServerByStatus = filterServerByStatus;
	function getDiskInformationFromMeasurements(serverMeasurements) {
	    var diskMeasurement = serverMeasurements.filter(function (x) {
	        return x.type === models_1.MeasureType.Disk;
	    })[0];
	    if (!diskMeasurement) {
	        return null;
	    }
	    return diskMeasurement.partitions;
	}
	exports.getDiskInformationFromMeasurements = getDiskInformationFromMeasurements;
	function getServerMeasures(serverMeasures) {
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
	}
	exports.getServerMeasures = getServerMeasures;
	function convertDisk(measure) {
	    var disk = measure;
	    var measureData = getMeasureData(disk.totalDiskIo, ['KB/s', 'MB/s']);
	    return {
	        title: 'Disk',
	        usageUnit: measureData.usageUnit,
	        hoverText: [],
	        status: disk.status,
	        currentUsage: measureData.value
	    };
	}
	exports.convertDisk = convertDisk;
	function convertNetwork(measure) {
	    var network = measure;
	    var measureData = getMeasureData(network.kbTotal, ['Kbps', 'Mbps']);
	    return {
	        title: 'Network',
	        usageUnit: measureData.usageUnit,
	        hoverText: [''],
	        status: network.status,
	        currentUsage: measureData.value
	    };
	}
	exports.convertNetwork = convertNetwork;
	function getMeasureData(measureValue, usageUnits) {
	    var usageUnit = '';
	    var value = noMeasureString;
	    if (measureValue != null) {
	        usageUnit = usageUnits[0];
	        if (measureValue >= 1000) {
	            value = (measureValue / 1024).toFixed(1);
	            value = removeZeroAfterDecimalPoint(value);
	            usageUnit = usageUnits[1];
	        } else {
	            value = convertMeasureValue(measureValue);
	        }
	    }
	    return {
	        value: value,
	        usageUnit: usageUnit
	    };
	}
	/**
	 * Formats and convert measure value. If value is bigger than 99
	 * decimal points are not displayed. If values has zero behind decimal point
	 * ie. 70.0 value is converted to 70
	 */
	function convertMeasureValue(measure) {
	    var value = measure.toFixed(1);
	    var stringLength = value.length;
	    if (stringLength === 5) {
	        return value.substring(0, 3);
	    } else if (value.indexOf('.0') > 0) {
	        return value.substr(0, stringLength - 2);
	    }
	    return value;
	}
	/**
	 * If value has zero behind decimal point, ie. 50.0 then .0 is trimmer from
	 * number and only 50 is returned.
	 */
	function removeZeroAfterDecimalPoint(value) {
	    if (value.indexOf('.0') > 0) {
	        var valueLengthEndPosition = value.length - 2;
	        return value.substr(0, valueLengthEndPosition);
	    }
	    return value;
	}
	function convertRam(measure) {
	    var ram = measure;
	    var used = noMeasureString;
	    var capacity = '';
	    var hoverText = '';
	    var usageUnit = '';
	    if (ram.used != null) {
	        var usedPercentage = '(' + Math.round(ram.used / ram.capacity * 100) + '%)';
	        if (ram.used >= 1000 || ram.capacity >= 1000) {
	            used = (ram.used / 1024).toFixed(1);
	            capacity = (ram.capacity / 1024).toFixed(1);
	            usageUnit = 'GB';
	            hoverText = used + '/' + capacity + ' ' + usageUnit + ' ' + usedPercentage;
	        } else {
	            used = ram.used.toFixed(1);
	            capacity = ram.capacity.toFixed(1);
	            usageUnit = 'MB';
	            hoverText = ram.used.toFixed() + '/' + ram.capacity.toFixed() + ' ' + usageUnit + ' ' + usedPercentage;
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
	exports.convertRam = convertRam;
	function convertCPU(measure) {
	    var cpu = measure;
	    var usage = noMeasureString;
	    var usageUnit = '';
	    if (cpu.usage != null) {
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
	exports.convertCPU = convertCPU;

/***/ },

/***/ 580:
/***/ function(module, exports, __webpack_require__) {

	// style-loader: Adds some css to the DOM by adding a <style> tag
	
	// load the styles
	var content = __webpack_require__(581);
	if(typeof content === 'string') content = [[module.id, content, '']];
	// add the styles to the DOM
	var update = __webpack_require__(504)(content, {});
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

/***/ 581:
/***/ function(module, exports, __webpack_require__) {

	exports = module.exports = __webpack_require__(503)();
	// imports
	
	
	// module
	exports.push([module.id, "* {\n  font-family: 'Segoe UI';\n  font-size: 14px;\n  color: #4D4D4F;\n}\n\n::-webkit-scrollbar {\n  width: 8px;\n  height: 8px;\n}\n\n/* Track */\n::-webkit-scrollbar-track {\n  border-radius: 10px;\n  background: #DADADB;\n  border: 2px solid transparent;\n  background-clip: content-box;\n}\n\n/* Handle */\n::-webkit-scrollbar-thumb {\n  border-radius: 10px;\n  background: #AEAEAF;\n}\n\n::-webkit-scrollbar-thumb:hover {\n  background: #4D4D4F;\n}\n\n.ReactVirtualized__Grid:focus, .ReactVirtualized__Collection:focus {\n  outline: none !important;\n}\n\n.compact-server-container {\n  margin: 8px;\n  border-left: 10px solid;\n  float: left;\n  box-sizing: border-box;\n  width: 236px;\n  height: 64px;\n  padding: 5px;\n  border-top: 1px solid #DADADB;\n  border-right: 1px solid #DADADB;\n  border-bottom: 1px solid #DADADB;\n}\n\n.compact-server-container:hover .icon-delete {\n  visibility: visible;\n}\n\n.compact-server-container .server-title {\n  float: left;\n  margin-left: 5px;\n  width: 100%;\n  padding: 2px 0 6px 0;\n  display: inline-flex;\n}\n\n.compact-server-container .server-title span {\n  width: calc(100% - 25px);\n  white-space: nowrap;\n  display: block;\n  overflow: hidden;\n  text-overflow: ellipsis;\n}\n\n.compact-server-container .icon-delete {\n  padding: 2px 10px;\n  margin: 0;\n  visibility: hidden;\n}\n\n.compact-server-container .icon-delete:hover {\n  color: #FB6464;\n  cursor: pointer;\n}\n\n.compact-server-container.status-ok {\n  border-left-color: #7DC458;\n}\n\n.compact-server-container.status-warning {\n  border-left-color: #EAC71A;\n}\n\n.compact-server-container.status-critical {\n  border-left-color: #FB6464;\n}\n\n.compact-server-container.status-offline {\n  border-left-color: #DADADB;\n}\n", ""]);
	
	// exports


/***/ },

/***/ 582:
/***/ function(module, exports, __webpack_require__) {

	"use strict";
	
	Object.defineProperty(exports, "__esModule", { value: true });
	var React = __webpack_require__(328);
	var classNames = __webpack_require__(497);
	var Label_1 = __webpack_require__(509);
	var DisksInformation_1 = __webpack_require__(583);
	var TagContainer_1 = __webpack_require__(572);
	var Icon_1 = __webpack_require__(518);
	var models_1 = __webpack_require__(575);
	var server_1 = __webpack_require__(579);
	__webpack_require__(587);
	var ServerTile = /** @class */function (_super) {
	    __extends(ServerTile, _super);
	    function ServerTile() {
	        var _this = _super !== null && _super.apply(this, arguments) || this;
	        _this.serverOnClick = function () {
	            var _a = _this.props,
	                id = _a.id,
	                serverOnClick = _a.serverOnClick;
	            if (serverOnClick) {
	                serverOnClick(id);
	            }
	        };
	        return _this;
	    }
	    ServerTile.prototype.render = function () {
	        var _this = this;
	        var className = server_1.GetClassForStatus('server-details', this.props.status);
	        var serverHoverMessage = this.props.hoverMessageForCriticalOrWarningServer && (this.props.status === models_1.ServerStatus.Critical || this.props.status === models_1.ServerStatus.Warning) ? this.props.hoverMessageForCriticalOrWarningServer : '';
	        return React.createElement("div", { className: className, onClick: this.serverOnClick, title: serverHoverMessage }, React.createElement("div", { className: 'server-details-header' }, React.createElement(Label_1.Label, { className: "server-name", title: this.props.name }, this.props.name), this.props.onClose && React.createElement(Icon_1.Icon, { title: 'Delete', iconName: 'icon-delete', onClick: function (event) {
	                return _this.props.onClose(_this.props.id, event);
	            } }), !this.props.onClose && React.createElement("div", { style: { width: '24px', height: '24px', float: 'right', cursor: 'default' } }), this.props.diskInformation && React.createElement(DisksInformation_1.DisksInformation, { className: "disk-information-container", diskInformation: this.props.diskInformation }), this.props.numberOfUsers && React.createElement(Icon_1.Icon, { "data-users": this.props.numberOfUsers, iconName: 'icon-user', title: this.props.numberOfUsers + ' number of users online' }), this.props.roles.length > 0 && React.createElement("div", null, React.createElement(TagContainer_1.TagContainer, { title: '', tags: this.props.roles }, this.props.onRoleEdit && React.createElement("div", { className: "edit-tags tag", title: "Edit roles", onClick: function (event) {
	                return _this.props.onRoleEdit(_this.props.id);
	            } }, React.createElement(Icon_1.Icon, { className: "icon-edit" })))), this.props.children), React.createElement("div", { className: 'counters-container' }, this.createCountersTiles(this.props.countersData)));
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

/***/ 583:
/***/ function(module, exports, __webpack_require__) {

	"use strict";
	
	Object.defineProperty(exports, "__esModule", { value: true });
	var React = __webpack_require__(328);
	var classNames = __webpack_require__(497);
	var Icon_1 = __webpack_require__(518);
	var Callout_1 = __webpack_require__(584);
	var models_1 = __webpack_require__(575);
	var DirectionalHint_1 = __webpack_require__(523);
	var server_1 = __webpack_require__(579);
	__webpack_require__(585);
	var DisksInformation = /** @class */function (_super) {
	    __extends(DisksInformation, _super);
	    function DisksInformation(props) {
	        var _this = _super.call(this, props) || this;
	        _this.setCalloutTargetRef = function (ref) {
	            _this._calloutTargetElement = ref;
	        };
	        _this.onMouseEnter = function () {
	            _this.setState({ tooltipShow: true });
	        };
	        _this.onMouseLeave = function () {
	            _this.setState({ tooltipShow: false });
	        };
	        _this.state = { tooltipShow: false };
	        return _this;
	    }
	    DisksInformation.prototype.render = function () {
	        var diskIconColorClass = '';
	        if (this.props.diskInformation.filter(function (info) {
	            return info.status === models_1.ServerStatus.Critical;
	        }).length > 0) {
	            diskIconColorClass = 'status-critical';
	        } else if (this.props.diskInformation.filter(function (info) {
	            return info.status === models_1.ServerStatus.Warning;
	        }).length > 0) {
	            diskIconColorClass = 'status-warning';
	        }
	        var sortedDiskInfo = this.props.diskInformation.sort(function (disk1, disk2) {
	            return server_1.sortServersByStatusAndName({ status: disk1.status, name: disk1.name }, { status: disk2.status, name: disk2.name });
	        });
	        return React.createElement("div", { className: this.props.className }, React.createElement("div", { ref: this.setCalloutTargetRef, onMouseEnter: this.onMouseEnter, onMouseLeave: this.onMouseLeave }, React.createElement(Icon_1.Icon, { className: classNames('disk-icon', diskIconColorClass), iconName: 'icon-disk', title: "" })), sortedDiskInfo.length !== 0 && this.state.tooltipShow && React.createElement(Callout_1.Callout, { targetElement: this._calloutTargetElement, isBeakVisible: false, gapSpace: 2, directionalHint: DirectionalHint_1.DirectionalHint.bottomAutoEdge, doNotLayer: false, className: 'disk-information-callout' }, sortedDiskInfo.map(function (data, index) {
	            return React.createElement("div", { key: index, className: classNames({ 'status-warning': data.status === models_1.ServerStatus.Warning }, { 'status-critical': data.status === models_1.ServerStatus.Critical }) }, data.fullName || data.name, ": ", data.used, "/", data.capacity, " ", data.usageUnit);
	        })));
	    };
	    return DisksInformation;
	}(React.PureComponent);
	exports.DisksInformation = DisksInformation;

/***/ },

/***/ 584:
/***/ function(module, exports, __webpack_require__) {

	"use strict";
	
	function __export(m) {
	    for (var p in m) if (!exports.hasOwnProperty(p)) exports[p] = m[p];
	}
	Object.defineProperty(exports, "__esModule", { value: true });
	__export(__webpack_require__(524));

/***/ },

/***/ 585:
/***/ function(module, exports, __webpack_require__) {

	// style-loader: Adds some css to the DOM by adding a <style> tag
	
	// load the styles
	var content = __webpack_require__(586);
	if(typeof content === 'string') content = [[module.id, content, '']];
	// add the styles to the DOM
	var update = __webpack_require__(504)(content, {});
	if(content.locals) module.exports = content.locals;
	// Hot Module Replacement
	if(false) {
		// When the styles change, update the <style> tags
		if(!content.locals) {
			module.hot.accept("!!../../../../node_modules/css-loader/index.js!../../../../node_modules/sass-loader/index.js?outputStyle=expanded!./DisksInformation.scss", function() {
				var newContent = require("!!../../../../node_modules/css-loader/index.js!../../../../node_modules/sass-loader/index.js?outputStyle=expanded!./DisksInformation.scss");
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

	exports = module.exports = __webpack_require__(503)();
	// imports
	
	
	// module
	exports.push([module.id, "* {\n  font-family: 'Segoe UI';\n  font-size: 14px;\n  color: #4D4D4F;\n}\n\n::-webkit-scrollbar {\n  width: 8px;\n  height: 8px;\n}\n\n/* Track */\n::-webkit-scrollbar-track {\n  border-radius: 10px;\n  background: #DADADB;\n  border: 2px solid transparent;\n  background-clip: content-box;\n}\n\n/* Handle */\n::-webkit-scrollbar-thumb {\n  border-radius: 10px;\n  background: #AEAEAF;\n}\n\n::-webkit-scrollbar-thumb:hover {\n  background: #4D4D4F;\n}\n\n.ReactVirtualized__Grid:focus, .ReactVirtualized__Collection:focus {\n  outline: none !important;\n}\n\n.disk-information-container .status-critical {\n  color: #FB6464;\n}\n\n.disk-information-container .status-warning {\n  color: #EAC71A;\n}\n\n.callout-container .callout.disk-information-callout {\n  border: 1px solid #DADADB !important;\n  border-radius: 8px;\n}\n\n.callout-container .callout.disk-information-callout .callout-main {\n  padding: 8px;\n  border-radius: 8px;\n}\n\n.callout-container .callout.disk-information-callout .callout-main div + div {\n  padding-top: 5px;\n}\n\n.callout-container .callout.disk-information-callout .callout-main .status-critical {\n  color: #FB6464;\n}\n\n.callout-container .callout.disk-information-callout .callout-main .status-warning {\n  color: #EAC71A;\n}\n", ""]);
	
	// exports


/***/ },

/***/ 587:
/***/ function(module, exports, __webpack_require__) {

	// style-loader: Adds some css to the DOM by adding a <style> tag
	
	// load the styles
	var content = __webpack_require__(588);
	if(typeof content === 'string') content = [[module.id, content, '']];
	// add the styles to the DOM
	var update = __webpack_require__(504)(content, {});
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

/***/ 588:
/***/ function(module, exports, __webpack_require__) {

	exports = module.exports = __webpack_require__(503)();
	// imports
	
	
	// module
	exports.push([module.id, "* {\n  font-family: 'Segoe UI';\n  font-size: 14px;\n  color: #4D4D4F;\n}\n\n::-webkit-scrollbar {\n  width: 8px;\n  height: 8px;\n}\n\n/* Track */\n::-webkit-scrollbar-track {\n  border-radius: 10px;\n  background: #DADADB;\n  border: 2px solid transparent;\n  background-clip: content-box;\n}\n\n/* Handle */\n::-webkit-scrollbar-thumb {\n  border-radius: 10px;\n  background: #AEAEAF;\n}\n\n::-webkit-scrollbar-thumb:hover {\n  background: #4D4D4F;\n}\n\n.ReactVirtualized__Grid:focus, .ReactVirtualized__Collection:focus {\n  outline: none !important;\n}\n\n.server-details {\n  box-sizing: border-box;\n  width: 261px;\n  height: 216px;\n  padding: 5px;\n  margin: 8px;\n  float: left;\n  border-left: 10px solid;\n  border-top: 1px solid #DADADB;\n  border-right: 1px solid #DADADB;\n  border-bottom: 1px solid #DADADB;\n}\n\n.server-details:hover > .server-details-header > .icon-delete {\n  visibility: visible;\n}\n\n.server-details .server-details-header {\n  margin: 5px 0 10px 0;\n  height: 45px;\n}\n\n.server-details .server-details-header .server-name {\n  padding: 0 0 0 5px;\n  display: inline-block;\n  font-size: 16px;\n  max-width: 60%;\n  white-space: nowrap;\n  overflow: hidden;\n  text-overflow: ellipsis;\n  vertical-align: bottom;\n}\n\n.server-details .server-details-header .icon-delete {\n  padding: 5px;\n  float: right;\n  visibility: hidden;\n}\n\n.server-details .server-details-header .icon-delete:hover {\n  color: #FB6464;\n  cursor: pointer;\n}\n\n.server-details .server-details-header .disk-information-container {\n  float: right;\n}\n\n.server-details .server-details-header .disk-information-container .disk-icon {\n  margin: 5px;\n}\n\n.server-details .server-details-header .icon-user {\n  padding: 2px;\n  float: right;\n}\n\n.server-details .server-details-header .icon-user:after {\n  content: attr(data-users);\n  margin-left: 2px;\n  font-family: 'Segoe UI';\n}\n\n.server-details .counters-container {\n  margin: 6px 0 6px 0;\n}\n\n.server-details .counters-container .tile {\n  width: calc(45% - 12px);\n  display: inline-block;\n  text-align: center;\n  border-top: 1px solid #DADADB;\n  padding-left: 3px;\n  padding-right: 3px;\n}\n\n.server-details .counters-container .tile p {\n  text-align: center;\n  font-size: 12px;\n  margin: 10px 0 2px 0;\n}\n\n.server-details .counters-container .tile:nth-child(odd) {\n  border-right: 1px solid #DADADB;\n  margin-left: calc(5% + 1px);\n}\n\n.server-details .counters-container .tile .label {\n  display: inline-block;\n}\n\n.server-details .counters-container .tile .label.status-warning {\n  color: #EAC71A;\n}\n\n.server-details .counters-container .tile .label.status-critical {\n  color: #FB6464;\n}\n\n.server-details .counters-container .tile .label:nth-child(2) {\n  font-size: 24px;\n  max-width: 45%;\n  text-overflow: ellipsis;\n  overflow: hidden;\n  display: inline-flex;\n}\n\n.server-details.status-ok {\n  border-left-color: #7DC458;\n}\n\n.server-details.status-warning {\n  border-left-color: #EAC71A;\n}\n\n.server-details.status-critical {\n  border-left-color: #FB6464;\n}\n\n.server-details.status-offline {\n  border-left-color: #DADADB;\n}\n", ""]);
	
	// exports


/***/ },

/***/ 589:
/***/ function(module, exports, __webpack_require__) {

	"use strict";
	
	Object.defineProperty(exports, "__esModule", { value: true });
	var React = __webpack_require__(328);
	var Icon_1 = __webpack_require__(518);
	var classNames = __webpack_require__(497);
	__webpack_require__(590);
	var Group = /** @class */function (_super) {
	    __extends(Group, _super);
	    function Group() {
	        var _this = _super !== null && _super.apply(this, arguments) || this;
	        _this._onGroupClick = function () {
	            if (_this.props.onClick) {
	                _this.props.onClick(_this.props.id);
	            }
	        };
	        return _this;
	    }
	    Group.prototype.render = function () {
	        var _this = this;
	        var id = this.props.id;
	        var hasServersVisible = this.props.serverChildrenCount > 0;
	        var classname = classNames({ 'farm': hasServersVisible }, (_a = {}, _a[this.props.className] = hasServersVisible, _a));
	        var groupTitleClass = classNames({
	            'group-title-clickable': this.props.onClick !== undefined
	        });
	        return React.createElement("div", { className: classname }, hasServersVisible && React.createElement("span", { className: "farm-name" }, this.props.iconName && React.createElement(Icon_1.Icon, { iconName: this.props.iconName, title: this.props.iconTitle, className: 'group-icon' }), React.createElement("span", { className: groupTitleClass, onClick: this._onGroupClick, title: this.props.name }, this.props.name), React.createElement("div", { className: 'group-actions' }, this.props.deleteFunc && React.createElement(Icon_1.Icon, { title: 'Delete', iconName: 'icon-delete', onClick: function () {
	                _this.props.deleteFunc(_this.props.id);
	            } }), this.props.editFunc && React.createElement(Icon_1.Icon, { title: 'Edit', iconName: 'icon-edit', onClick: function () {
	                _this.props.editFunc(_this.props.id);
	            } }), this.props.addFunc && React.createElement(Icon_1.Icon, { title: 'Add', iconName: 'icon-add', onClick: function () {
	                _this.props.addFunc(_this.props.id);
	            } }))), hasServersVisible && this.props.children);
	        var _a;
	    };
	    return Group;
	}(React.PureComponent);
	exports.Group = Group;

/***/ },

/***/ 590:
/***/ function(module, exports, __webpack_require__) {

	// style-loader: Adds some css to the DOM by adding a <style> tag
	
	// load the styles
	var content = __webpack_require__(591);
	if(typeof content === 'string') content = [[module.id, content, '']];
	// add the styles to the DOM
	var update = __webpack_require__(504)(content, {});
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

/***/ 591:
/***/ function(module, exports, __webpack_require__) {

	exports = module.exports = __webpack_require__(503)();
	// imports
	
	
	// module
	exports.push([module.id, "* {\n  font-family: 'Segoe UI';\n  font-size: 14px;\n  color: #4D4D4F;\n}\n\n::-webkit-scrollbar {\n  width: 8px;\n  height: 8px;\n}\n\n/* Track */\n::-webkit-scrollbar-track {\n  border-radius: 10px;\n  background: #DADADB;\n  border: 2px solid transparent;\n  background-clip: content-box;\n}\n\n/* Handle */\n::-webkit-scrollbar-thumb {\n  border-radius: 10px;\n  background: #AEAEAF;\n}\n\n::-webkit-scrollbar-thumb:hover {\n  background: #4D4D4F;\n}\n\n.ReactVirtualized__Grid:focus, .ReactVirtualized__Collection:focus {\n  outline: none !important;\n}\n\n.farm {\n  padding: 5px;\n  margin: 20px;\n  position: relative;\n}\n\n.farm.farm-name-inside .farm-name {\n  position: absolute;\n  padding: 5px 8px;\n  width: initial;\n  top: -30px;\n  user-select: none;\n}\n\n.farm.farm-name-inside .farm-name span {\n  display: inline-block;\n  white-space: nowrap;\n  overflow: hidden;\n  text-overflow: ellipsis;\n  font-size: 18px;\n  color: #F79428;\n}\n\n.farm.farm-name-inside .farm-name .group-actions {\n  display: inline-block;\n  padding: 0 0 5px 20px;\n}\n\n.farm.farm-name-inside .farm-name .group-actions .icon {\n  visibility: hidden;\n  padding: 0 3px;\n}\n\n.farm.farm-name-inside .farm-name:hover .group-actions > .icon {\n  visibility: visible;\n}\n\n.farm.farm-name-inside .farm-name .group-title-clickable:hover {\n  color: #E27600;\n  cursor: pointer;\n}\n\n.farm.farm-name-inside .farm-name .icon {\n  padding-top: 5px;\n  position: relative;\n  float: right;\n}\n\n.farm.farm-name-inside .farm-name .icon:hover {\n  cursor: pointer;\n}\n\n.farm.farm-name-inside .farm-name .icon.group-icon {\n  float: left;\n  font-size: 16px;\n}\n\n.farm.farm-name-inside .farm-name .icon.group-icon:hover {\n  cursor: default;\n}\n\n.farm.farm-name-inside .farm-name .icon.icon-delete:hover {\n  color: #FB6464;\n}\n\n.farm.farm-name-inside .farm-name .icon.icon-edit:hover {\n  color: #25A7EF;\n}\n\n.farm.farm-name-inside .farm-name .icon.icon-add:hover {\n  color: #7DC458;\n}\n", ""]);
	
	// exports


/***/ },

/***/ 592:
/***/ function(module, exports, __webpack_require__) {

	// style-loader: Adds some css to the DOM by adding a <style> tag
	
	// load the styles
	var content = __webpack_require__(593);
	if(typeof content === 'string') content = [[module.id, content, '']];
	// add the styles to the DOM
	var update = __webpack_require__(504)(content, {});
	if(content.locals) module.exports = content.locals;
	// Hot Module Replacement
	if(false) {
		// When the styles change, update the <style> tags
		if(!content.locals) {
			module.hot.accept("!!../../../node_modules/css-loader/index.js!../../../node_modules/sass-loader/index.js?outputStyle=expanded!./CompactFarm.scss", function() {
				var newContent = require("!!../../../node_modules/css-loader/index.js!../../../node_modules/sass-loader/index.js?outputStyle=expanded!./CompactFarm.scss");
				if(typeof newContent === 'string') newContent = [[module.id, newContent, '']];
				update(newContent);
			});
		}
		// When the module is disposed, remove the <style> tags
		module.hot.dispose(function() { update(); });
	}

/***/ },

/***/ 593:
/***/ function(module, exports, __webpack_require__) {

	exports = module.exports = __webpack_require__(503)();
	// imports
	
	
	// module
	exports.push([module.id, "* {\n  font-family: 'Segoe UI';\n  font-size: 14px;\n  color: #4D4D4F;\n}\n\n::-webkit-scrollbar {\n  width: 8px;\n  height: 8px;\n}\n\n/* Track */\n::-webkit-scrollbar-track {\n  border-radius: 10px;\n  background: #DADADB;\n  border: 2px solid transparent;\n  background-clip: content-box;\n}\n\n/* Handle */\n::-webkit-scrollbar-thumb {\n  border-radius: 10px;\n  background: #AEAEAF;\n}\n\n::-webkit-scrollbar-thumb:hover {\n  background: #4D4D4F;\n}\n\n.ReactVirtualized__Grid:focus, .ReactVirtualized__Collection:focus {\n  outline: none !important;\n}\n\n.compact-farm {\n  width: 100%;\n  height: 100%;\n  overflow: hidden;\n}\n\n.compact-farm .farm {\n  margin-bottom: 0;\n  margin-top: 60px;\n}\n\n.compact-farm .farm .compact-server-container:hover {\n  cursor: pointer;\n}\n\n.callout-container .callout.compact-farm-callout {\n  border-radius: 0;\n}\n\n.callout-container .callout.compact-farm-callout .callout-main {\n  border-radius: 0;\n}\n\n.callout-container .callout.compact-farm-callout .server-details {\n  margin: 0;\n}\n", ""]);
	
	// exports


/***/ },

/***/ 594:
/***/ function(module, exports, __webpack_require__) {

	"use strict";
	
	Object.defineProperty(exports, "__esModule", { value: true });
	var models_1 = __webpack_require__(575);
	var farms_1 = __webpack_require__(595);
	exports.dummyCompact = {
	    title: 'My compact dashboard',
	    farms: farms_1.farms.map(convertFarm),
	    className: '',
	    filter: '',
	    singleGroupView: false
	};
	exports.dummyTiles = {
	    className: '',
	    filter: '',
	    farms: farms_1.farms.map(convertFarm)
	};
	exports.getDummyDashboard = function (hasRoles) {
	    return {
	        title: 'Dummy dashboard',
	        filter: '',
	        initialActiveView: 0,
	        initialActiveGrouping: 0,
	        hasAddButton: true,
	        headerClass: '',
	        differentDashboards: { 0: { linkText: 'Compact Horizontal' }, 2: { linkText: 'Tiles' }, 3: { linkText: 'Grid' } },
	        farms: farms_1.createFarms(10, 10, 10, hasRoles).map(convertFarm),
	        addFarm: function () {
	            console.log('Adding new farm, wop wop');
	        },
	        onAddToGroup: function (groupId) {
	            console.log('Clicked add icon of group ' + groupId);
	        },
	        onGroupDelete: function (groupId) {
	            console.log('Clicked delete icon of group ' + groupId);
	        },
	        onGroupEdit: function (groupId) {
	            console.log('Clicked edit icon of group ' + groupId);
	        },
	        onServerClose: function (serverFQDN) {
	            console.log('Clicked close icon of server ' + serverFQDN);
	        },
	        onServerRoleEdit: function (serverFQDN, farmId) {
	            console.log('Clicked edit role icon of server ', serverFQDN, farmId);
	        },
	        groupOnClick: function (groupId) {
	            console.log('Clicked on group ' + groupId);
	        },
	        serverOnClick: function (groupId, serverId) {
	            console.log('Clicked on group ' + groupId + ' and server ' + serverId);
	        },
	        activeFilters: [],
	        icons: [{ iconType: models_1.GroupTypeEnum.SharePoint, iconName: 'icon-key', iconTitle: 'SharePoint' }, { iconType: models_1.GroupTypeEnum.Custom, iconName: 'icon-group', iconTitle: 'Custom' }, { iconType: models_1.GroupTypeEnum.Sql, iconName: 'icon-link', iconTitle: 'Sql Server' }, { iconType: models_1.GroupTypeEnum.SqlAlwaysOn, iconName: 'icon-list', iconTitle: 'Sql Always On' }]
	    };
	};
	exports.dummyDashboard = exports.getDummyDashboard(true);
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
	        if (Math.random() < 0.05) {
	            status = models_1.ServerStatus.Offline;
	        }
	        if (Math.random() < 0.05) {
	            status = models_1.ServerStatus.Disabled;
	        }
	        return {
	            id: server.id,
	            numberOfUsers: Math.round(Math.random() * 1000).toString(),
	            name: server.name,
	            onClose: server.onClose,
	            onRoleChange: server.onRoleChange,
	            onRoleEdit: server.onRoleEdit,
	            roles: server.roles,
	            status: status,
	            measures: measures,
	            type: server.type
	        };
	    });
	    return {
	        servers: servers,
	        name: farm.name,
	        id: farm.id,
	        type: Math.floor(Math.random() * 100) % 4 + 1
	    };
	}
	exports.convertFarm = convertFarm;
	function convertToCompactFarm(farm) {
	    return farm;
	}
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
	    return Math.random() * (2000 - 0.1 + 1);
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
	            name: 'Local Disk (C:)',
	            used: 800,
	            capacity: 1000,
	            usageUnit: 'GB',
	            id: 1,
	            status: 2
	        }, {
	            name: 'Data (E:)',
	            used: 560,
	            capacity: 789,
	            usageUnit: 'GB',
	            id: 2,
	            status: 2
	        }],
	        time: new Date(Date.now())
	    };
	    return [cpuMeasure, ramMeasure, networkMeasure, diskMeasure];
	}
	exports.generateMeasures = generateMeasures;

/***/ },

/***/ 595:
/***/ function(module, exports, __webpack_require__) {

	"use strict";
	
	Object.defineProperty(exports, "__esModule", { value: true });
	var models_1 = __webpack_require__(575);
	exports.classListExample = {
	    ok: 'green',
	    warning: 'yellow',
	    critical: 'red',
	    offline: 'offline'
	};
	var roleListFarms = [{ display: 'WPF', iconName: 'icon-add' }, { display: 'WPF1111111', iconName: 'icon-add', tooltip: 'A long role named WPF2222222' }, { display: 'Not another', iconName: 'icon-add' }, { display: 'Search', iconName: 'icon-alert' }];
	exports.farms = createFarms(10, 10, 10, true);
	var serverIndexer = 0;
	function createFarms(numOfFarms, minServerCount, maxServerCount, hasRoles) {
	    var _farms = new Array();
	    for (var farmIndex = 0; farmIndex <= numOfFarms; farmIndex++) {
	        var numOfServers = Math.floor(Math.random() * (maxServerCount - minServerCount + 1)) + minServerCount;
	        var servers = [];
	        for (var i = 0; i <= numOfServers; i++) {
	            servers.push({
	                id: 'server' + farmIndex + '' + i,
	                name: 'server ' + farmIndex + '' + i,
	                roles: hasRoles ? roleListFarms : [],
	                status: Math.random() >= 0.5 ? 1 : 2,
	                type: Math.random() >= 0.5 ? models_1.GroupTypeEnum.SharePoint : models_1.GroupTypeEnum.Sql
	            });
	            serverIndexer++;
	        }
	        _farms.push({
	            id: 'Demo Farm' + farmIndex,
	            name: 'Demo Farm ' + farmIndex,
	            servers: servers,
	            type: models_1.GroupTypeEnum.SharePoint
	        });
	    }
	    return _farms;
	}
	exports.createFarms = createFarms;
	var memoryUsage = { usageUnit: 'MB', capacity: 1024, used: 300, status: 1 };
	function createProcessorUsages() {
	    var time = new Date();
	    time.setSeconds(0);
	    var cpuUsage = [];
	    for (var i = 0; i < 15; i++) {
	        cpuUsage.push({
	            time: new Date(time.getTime()),
	            usage: Math.round(Math.random() * 100)
	        });
	        time.setSeconds(time.getSeconds() + 20);
	    }
	    return cpuUsage;
	}
	var processorUsage = { data: createProcessorUsages(), status: 1 };
	var partitionUsages = [{ name: 'C', usageUnit: 'GB', capacity: 60, used: 20, status: 0 }, { name: 'D', usageUnit: 'GB', capacity: 200, used: 142.5, status: 1 }, { name: 'E', usageUnit: 'GB', capacity: 52.4, used: 33.2, status: 2 }, { name: 'F', usageUnit: 'GB', capacity: 550, used: 512, status: 0 }];
	var roleList = [{ display: 'Web', iconName: 'icon-site2' }, { display: 'SQL', iconName: 'icon-sql_log' }, { display: 'FireWall', iconName: 'icon-logOut' }];
	exports.DemoServerGroup = {
	    id: 'instance/configDb',
	    name: 'demo server group',
	    type: models_1.GroupTypeEnum.SharePoint,
	    servers: [{
	        id: 'FQDN1',
	        name: 'server1',
	        roles: roleListFarms,
	        status: Math.random() >= 0.5 ? 1 : 2,
	        numberOfUsers: '50111',
	        memoryUsage: memoryUsage,
	        partitionUsages: partitionUsages,
	        processorUsage: processorUsage,
	        measures: [],
	        type: Math.random() >= 0.5 ? models_1.GroupTypeEnum.SharePoint : models_1.GroupTypeEnum.Sql
	    }, {
	        id: 'FQDN2',
	        name: 'server2',
	        roles: roleListFarms,
	        status: Math.random() >= 0.5 ? 1 : 2,
	        numberOfUsers: '2351',
	        memoryUsage: memoryUsage,
	        partitionUsages: partitionUsages,
	        processorUsage: processorUsage,
	        measures: [],
	        type: Math.random() >= 0.5 ? models_1.GroupTypeEnum.SharePoint : models_1.GroupTypeEnum.SqlAlwaysOn
	    }]
	};

/***/ }

});
//# sourceMappingURL=CompactFarm.b3d14060d786be20b6e9.js.map