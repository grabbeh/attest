webpackHotUpdate(4,{

/***/ "./components/charts/Chart.js":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* WEBPACK VAR INJECTION */(function(module) {/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_react__ = __webpack_require__("./node_modules/react/cjs/react.development.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_react___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_react__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_d3_shape__ = __webpack_require__("./node_modules/d3-shape/index.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__node_modules_react_vis_dist_style_css__ = __webpack_require__("./node_modules/react-vis/dist/style.css");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__node_modules_react_vis_dist_style_css___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2__node_modules_react_vis_dist_style_css__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_react_vis__ = __webpack_require__("./node_modules/react-vis/es/index.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_lodash__ = __webpack_require__("./node_modules/lodash/lodash.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_lodash___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_4_lodash__);
var _jsxFileName = '/mnt/c/Users/mbg/Documents/attest/components/charts/Chart.js';

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();



(function () {
  var enterModule = __webpack_require__("./node_modules/react-hot-loader/index.js").enterModule;

  enterModule && enterModule(module);
})();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }






var Chart = function (_React$Component) {
  _inherits(Chart, _React$Component);

  function Chart() {
    _classCallCheck(this, Chart);

    return _possibleConstructorReturn(this, (Chart.__proto__ || Object.getPrototypeOf(Chart)).apply(this, arguments));
  }

  _createClass(Chart, [{
    key: 'render',
    value: function render() {
      var data = [{ x: 0, y: 8 }, { x: 1, y: 5 }, { x: 2, y: 3 }];

      __WEBPACK_IMPORTED_MODULE_4_lodash___default.a.groupBy(this.props.data.contracts, 'currentStatus.name');
      console.log(this.props);
      return __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
        __WEBPACK_IMPORTED_MODULE_3_react_vis__["b" /* XYPlot */],
        { height: 400, width: 400, __source: {
            fileName: _jsxFileName,
            lineNumber: 13
          }
        },
        __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_3_react_vis__["a" /* VerticalBarSeries */], { data: data, __source: {
            fileName: _jsxFileName,
            lineNumber: 14
          }
        })
      );
    }
  }, {
    key: '__reactstandin__regenerateByEval',
    value: function __reactstandin__regenerateByEval(key, code) {
      this[key] = eval(code);
    }
  }]);

  return Chart;
}(__WEBPACK_IMPORTED_MODULE_0_react___default.a.Component);

var _default = Chart;
/* harmony default export */ __webpack_exports__["a"] = (_default);
;

(function () {
  var reactHotLoader = __webpack_require__("./node_modules/react-hot-loader/index.js").default;

  var leaveModule = __webpack_require__("./node_modules/react-hot-loader/index.js").leaveModule;

  if (!reactHotLoader) {
    return;
  }

  reactHotLoader.register(Chart, 'Chart', '/mnt/c/Users/mbg/Documents/attest/components/charts/Chart.js');
  reactHotLoader.register(_default, 'default', '/mnt/c/Users/mbg/Documents/attest/components/charts/Chart.js');
  leaveModule(module);
})();

;
/* WEBPACK VAR INJECTION */}.call(__webpack_exports__, __webpack_require__("./node_modules/webpack/buildin/harmony-module.js")(module)))

/***/ })

})
//# sourceMappingURL=4.603ac4d7b016b41a3732.hot-update.js.map