webpackJsonp([19],{

/***/ 0:
/***/ function(module, exports, __webpack_require__) {

	"use strict";
	/* tslint:disable:no-console */
	
	__webpack_require__(1);
	__webpack_require__(298);
	var React = __webpack_require__(299);
	var ReactDOM = __webpack_require__(329);
	var pieData_1 = __webpack_require__(657);
	var Index = function (_super) {
	    __extends(Index, _super);
	    function Index() {
	        var _this = this;
	        _super.call(this);
	        this.state = { data: pieData_1.data };
	        setTimeout(function () {
	            return _this.setState({ data: pieData_1.updatedData });
	        }, 2000);
	    }
	    Index.prototype.render = function () {
	        return React.createElement("div", null);
	    };
	    ;
	    return Index;
	}(React.Component);
	exports.Index = Index;
	;
	ReactDOM.render(React.createElement(Index, null), document.getElementById('root'));

/***/ },

/***/ 657:
/***/ function(module, exports) {

	"use strict";
	
	exports.data = [{
	    label: "Unexpected",
	    value: 290
	}, {
	    label: "Monitorable",
	    value: 26
	}, {
	    label: "High",
	    value: 20691
	}, {
	    label: "Critical",
	    value: 1412
	}, {
	    label: "Error",
	    value: 240
	}, {
	    label: "Exception",
	    value: 10
	}, {
	    label: "Warning",
	    value: 106
	}, {
	    label: "Information",
	    value: 1542
	}];
	exports.updatedData = [{
	    label: "Unexpected",
	    value: 123
	}, {
	    label: "Monitorable",
	    value: 57
	}, {
	    label: "High",
	    value: 643
	}, {
	    label: "Critical",
	    value: 1800
	}, {
	    label: "Error",
	    value: 233
	}];

/***/ }

});
//# sourceMappingURL=PieChart.e403d7b187b12e8ae34c.js.map