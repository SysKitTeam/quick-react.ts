webpackJsonp([1],{

/***/ 0:
/***/ function(module, exports, __webpack_require__) {

	"use strict";
	/* tslint:disable:no-console */
	
	__webpack_require__(1);
	__webpack_require__(298);
	var React = __webpack_require__(299);
	var ReactDOM = __webpack_require__(329);
	var barChart_1 = __webpack_require__(490);
	var Index = function (_super) {
	    __extends(Index, _super);
	    function Index() {
	        _super.call(this);
	        this.state = { data: barChart_1.data };
	        // setTimeout(() => this.setState({ data: updatedData }), 2000);
	    }
	    ;
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

/***/ 490:
/***/ function(module, exports) {

	"use strict";
	
	exports.data = [{
	    argument: 1,
	    frequency: 5
	}, {
	    argument: 2,
	    frequency: 7
	}, {
	    argument: 3,
	    frequency: 2
	}, {
	    argument: 4,
	    frequency: 15
	}, {
	    argument: 5,
	    frequency: 11
	}, {
	    argument: 6,
	    frequency: 9
	}, {
	    argument: 7,
	    frequency: 4
	}];
	exports.updatedData = [{
	    argument: 'Ana',
	    frequency: 5
	}, {
	    argument: 'Marko',
	    frequency: 7
	}, {
	    argument: 'Ivan',
	    frequency: 2
	}, {
	    argument: 'Ivana',
	    frequency: 15
	}, {
	    argument: 'Darko',
	    frequency: 11
	}, {
	    argument: 'Kreso',
	    frequency: 19
	}, {
	    argument: 'Josip',
	    frequency: 17
	}, {
	    argument: 'Tomislav',
	    frequency: 25
	}, {
	    argument: 'Hrvoje',
	    frequency: 14
	}, {
	    argument: 'Kristijan',
	    frequency: 1
	}];
	/*export const updatedData = [
	    {
	        argument: 'A',
	        frequency: 19
	    },
	    {
	        argument: 'B',
	        frequency: 4
	    },
	    {
	        argument: 'C',
	        frequency: 2
	    },
	    {
	        argument: 'D',
	        frequency: 9
	    },
	    {
	        argument: 'E',
	        frequency: 12
	    },
	    {
	        argument: 'F',
	        frequency: 18
	    },
	    {
	        argument: 'G',
	        frequency: 15
	    },
	    {
	        argument: 'H',
	        frequency: 7
	    },
	    {
	        argument: 'I',
	        frequency: 11
	    }
	];*/

/***/ }

});
//# sourceMappingURL=BarChart.e403d7b187b12e8ae34c.js.map