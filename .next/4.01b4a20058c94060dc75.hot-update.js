webpackHotUpdate(4,{

/***/ "./components/charts/ChartsContainer.js":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* WEBPACK VAR INJECTION */(function(module) {/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_react__ = __webpack_require__("./node_modules/react/cjs/react.development.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_react___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_react__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__node_modules_react_vis_dist_style_css__ = __webpack_require__("./node_modules/react-vis/dist/style.css");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__node_modules_react_vis_dist_style_css___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1__node_modules_react_vis_dist_style_css__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_react_vis__ = __webpack_require__("./node_modules/react-vis/es/index.js");
var _jsxFileName = '/mnt/c/Users/mbg/Documents/attest/components/charts/ChartsContainer.js';

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

(function () {
  var enterModule = __webpack_require__("./node_modules/react-hot-loader/index.js").enterModule;

  enterModule && enterModule(module);
})();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }





var ChartsContainer = function (_Component) {
  _inherits(ChartsContainer, _Component);

  function ChartsContainer() {
    _classCallCheck(this, ChartsContainer);

    return _possibleConstructorReturn(this, (ChartsContainer.__proto__ || Object.getPrototypeOf(ChartsContainer)).apply(this, arguments));
  }

  _createClass(ChartsContainer, [{
    key: 'render',
    value: function render() {
      var data = [{ x: 0, y: 8 }, { x: 1, y: 5 }, { x: 2, y: 4 }, { x: 3, y: 9 }, { x: 4, y: 1 }, { x: 5, y: 7 }, { x: 6, y: 6 }, { x: 7, y: 3 }, { x: 8, y: 2 }, { x: 9, y: 0 }];
      return __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
        'div',
        { className: 'App', __source: {
            fileName: _jsxFileName,
            lineNumber: 20
          }
        },
        __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
          __WEBPACK_IMPORTED_MODULE_2_react_vis__["b" /* XYPlot */],
          { height: 600, width: 600, __source: {
              fileName: _jsxFileName,
              lineNumber: 21
            }
          },
          __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_2_react_vis__["a" /* LineSeries */], { data: data, __source: {
              fileName: _jsxFileName,
              lineNumber: 22
            }
          })
        )
      );
    }
  }, {
    key: '__reactstandin__regenerateByEval',
    value: function __reactstandin__regenerateByEval(key, code) {
      this[key] = eval(code);
    }
  }]);

  return ChartsContainer;
}(__WEBPACK_IMPORTED_MODULE_0_react__["Component"]);

var _default = ChartsContainer;


/* harmony default export */ __webpack_exports__["a"] = (_default);
;

(function () {
  var reactHotLoader = __webpack_require__("./node_modules/react-hot-loader/index.js").default;

  var leaveModule = __webpack_require__("./node_modules/react-hot-loader/index.js").leaveModule;

  if (!reactHotLoader) {
    return;
  }

  reactHotLoader.register(ChartsContainer, 'ChartsContainer', '/mnt/c/Users/mbg/Documents/attest/components/charts/ChartsContainer.js');
  reactHotLoader.register(_default, 'default', '/mnt/c/Users/mbg/Documents/attest/components/charts/ChartsContainer.js');
  leaveModule(module);
})();

;
/* WEBPACK VAR INJECTION */}.call(__webpack_exports__, __webpack_require__("./node_modules/webpack/buildin/harmony-module.js")(module)))

/***/ })

})
//# sourceMappingURL=4.01b4a20058c94060dc75.hot-update.js.map