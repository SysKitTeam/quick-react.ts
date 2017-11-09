webpackJsonp([32],{

/***/ 0:
/***/ function(module, exports, __webpack_require__) {

	"use strict";
	
	Object.defineProperty(exports, "__esModule", { value: true });
	/* tslint:disable:no-console */
	__webpack_require__(1);
	__webpack_require__(327);
	var React = __webpack_require__(328);
	var ReactDOM = __webpack_require__(358);
	var StatusBar_1 = __webpack_require__(1101);
	var Index = /** @class */function (_super) {
	    __extends(Index, _super);
	    function Index() {
	        return _super !== null && _super.apply(this, arguments) || this;
	    }
	    Index.prototype.render = function () {
	        return React.createElement("div", null, React.createElement(StatusBar_1.StatusBar, { text: 'Initializing index...' }));
	    };
	    return Index;
	}(React.Component);
	exports.Index = Index;
	ReactDOM.render(React.createElement(Index, null), document.getElementById('root'));

/***/ },

/***/ 1101:
/***/ function(module, exports, __webpack_require__) {

	"use strict";
	
	Object.defineProperty(exports, "__esModule", { value: true });
	var React = __webpack_require__(328);
	var classNames = __webpack_require__(497);
	__webpack_require__(1102);
	var StatusBar = /** @class */function (_super) {
	    __extends(StatusBar, _super);
	    function StatusBar(props) {
	        var _this = _super.call(this, props) || this;
	        _this.state = {
	            text: props.text
	        };
	        return _this;
	    }
	    StatusBar.prototype.componentWillReceiveProps = function (newProps) {
	        if (newProps.text !== this.state.text) {
	            this.setState({
	                text: newProps.text
	            });
	        }
	    };
	    StatusBar.prototype.render = function () {
	        var text = this.state.text;
	        var children = this.props.children;
	        var statusBarClassName = classNames('statusBar', [this.props.className]);
	        return React.createElement("div", { className: statusBarClassName }, children, React.createElement("span", null, text));
	    };
	    StatusBar.defaultProps = {
	        text: ''
	    };
	    return StatusBar;
	}(React.Component);
	exports.StatusBar = StatusBar;

/***/ },

/***/ 1102:
/***/ function(module, exports, __webpack_require__) {

	// style-loader: Adds some css to the DOM by adding a <style> tag
	
	// load the styles
	var content = __webpack_require__(1103);
	if(typeof content === 'string') content = [[module.id, content, '']];
	// add the styles to the DOM
	var update = __webpack_require__(504)(content, {});
	if(content.locals) module.exports = content.locals;
	// Hot Module Replacement
	if(false) {
		// When the styles change, update the <style> tags
		if(!content.locals) {
			module.hot.accept("!!../../../node_modules/css-loader/index.js!../../../node_modules/sass-loader/index.js?outputStyle=expanded!./StatusBar.scss", function() {
				var newContent = require("!!../../../node_modules/css-loader/index.js!../../../node_modules/sass-loader/index.js?outputStyle=expanded!./StatusBar.scss");
				if(typeof newContent === 'string') newContent = [[module.id, newContent, '']];
				update(newContent);
			});
		}
		// When the module is disposed, remove the <style> tags
		module.hot.dispose(function() { update(); });
	}

/***/ },

/***/ 1103:
/***/ function(module, exports, __webpack_require__) {

	exports = module.exports = __webpack_require__(503)();
	// imports
	
	
	// module
	exports.push([module.id, "* {\n  font-family: 'Segoe UI';\n  font-size: 14px;\n  color: #4D4D4F;\n}\n\n::-webkit-scrollbar {\n  width: 8px;\n  height: 8px;\n}\n\n/* Track */\n::-webkit-scrollbar-track {\n  border-radius: 10px;\n  background: #DADADB;\n  border: 2px solid transparent;\n  background-clip: content-box;\n}\n\n/* Handle */\n::-webkit-scrollbar-thumb {\n  border-radius: 10px;\n  background: #AEAEAF;\n}\n\n::-webkit-scrollbar-thumb:hover {\n  background: #4D4D4F;\n}\n\n.ReactVirtualized__Grid:focus, .ReactVirtualized__Collection:focus {\n  outline: none !important;\n}\n\n.statusBar {\n  background-color: #4D4D4F;\n  height: 23px;\n  z-index: 100;\n  width: 100%;\n}\n\n.statusBar span {\n  float: right;\n  color: #ffffff;\n  font-size: 13px;\n  padding: 2px 10px 0 0;\n}\n\n.statusBar .spinner {\n  position: relative;\n  top: 1px;\n}\n\n.statusBar .spinner > .spinner-circle.spinner-normal {\n  position: absolute;\n  width: 10px;\n  font-size: 3px;\n  height: 10px;\n}\n", ""]);
	
	// exports


/***/ }

});
//# sourceMappingURL=StatusBar.b3d14060d786be20b6e9.js.map