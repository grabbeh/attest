webpackHotUpdate(3,{

/***/ "./components/Page.js":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* WEBPACK VAR INJECTION */(function(module) {/* unused harmony export Page */
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AuthPage; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "c", function() { return UserPage; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "b", function() { return LandingPage; });
/* unused harmony export BasicPage */
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__lib_withData__ = __webpack_require__("./lib/withData.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__lib_withUser__ = __webpack_require__("./lib/withUser.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__lib_withLayout__ = __webpack_require__("./lib/withLayout.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__lib_withAuthLayout__ = __webpack_require__("./lib/withAuthLayout.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_recompose__ = __webpack_require__("./node_modules/recompose/es/Recompose.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5_react_apollo__ = __webpack_require__("./node_modules/react-apollo/react-apollo.browser.umd.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5_react_apollo___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_5_react_apollo__);
(function () {
  var enterModule = __webpack_require__("./node_modules/react-hot-loader/index.js").enterModule;

  enterModule && enterModule(module);
})();








var Page = Object(__WEBPACK_IMPORTED_MODULE_4_recompose__["a" /* compose */])(__WEBPACK_IMPORTED_MODULE_0__lib_withData__["a" /* default */], __WEBPACK_IMPORTED_MODULE_5_react_apollo__["withApollo"], __WEBPACK_IMPORTED_MODULE_2__lib_withLayout__["a" /* default */]);
var LandingPage = Object(__WEBPACK_IMPORTED_MODULE_4_recompose__["a" /* compose */])(__WEBPACK_IMPORTED_MODULE_0__lib_withData__["a" /* default */], __WEBPACK_IMPORTED_MODULE_1__lib_withUser__["a" /* default */], __WEBPACK_IMPORTED_MODULE_5_react_apollo__["withApollo"]);
var AuthPage = Object(__WEBPACK_IMPORTED_MODULE_4_recompose__["a" /* compose */])(__WEBPACK_IMPORTED_MODULE_0__lib_withData__["a" /* default */], __WEBPACK_IMPORTED_MODULE_5_react_apollo__["withApollo"], __WEBPACK_IMPORTED_MODULE_3__lib_withAuthLayout__["a" /* default */]);
var UserPage = Object(__WEBPACK_IMPORTED_MODULE_4_recompose__["a" /* compose */])(__WEBPACK_IMPORTED_MODULE_0__lib_withData__["a" /* default */], __WEBPACK_IMPORTED_MODULE_1__lib_withUser__["a" /* default */], __WEBPACK_IMPORTED_MODULE_5_react_apollo__["withApollo"], __WEBPACK_IMPORTED_MODULE_2__lib_withLayout__["a" /* default */]);
var BasicPage = Object(__WEBPACK_IMPORTED_MODULE_4_recompose__["a" /* compose */])(__WEBPACK_IMPORTED_MODULE_0__lib_withData__["a" /* default */], __WEBPACK_IMPORTED_MODULE_5_react_apollo__["withApollo"]);


;

(function () {
  var reactHotLoader = __webpack_require__("./node_modules/react-hot-loader/index.js").default;

  var leaveModule = __webpack_require__("./node_modules/react-hot-loader/index.js").leaveModule;

  if (!reactHotLoader) {
    return;
  }

  reactHotLoader.register(Page, 'Page', '/mnt/c/Users/mbg/Documents/attest/components/Page.js');
  reactHotLoader.register(LandingPage, 'LandingPage', '/mnt/c/Users/mbg/Documents/attest/components/Page.js');
  reactHotLoader.register(AuthPage, 'AuthPage', '/mnt/c/Users/mbg/Documents/attest/components/Page.js');
  reactHotLoader.register(UserPage, 'UserPage', '/mnt/c/Users/mbg/Documents/attest/components/Page.js');
  reactHotLoader.register(BasicPage, 'BasicPage', '/mnt/c/Users/mbg/Documents/attest/components/Page.js');
  leaveModule(module);
})();

;
/* WEBPACK VAR INJECTION */}.call(__webpack_exports__, __webpack_require__("./node_modules/webpack/buildin/harmony-module.js")(module)))

/***/ }),

/***/ "./pages/contracts.js":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* WEBPACK VAR INJECTION */(function(module) {/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_react__ = __webpack_require__("./node_modules/react/cjs/react.development.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_react___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_react__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__components_contracts_ContractsContainer__ = __webpack_require__("./components/contracts/ContractsContainer.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__components_Page__ = __webpack_require__("./components/Page.js");
var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

var _jsxFileName = '/mnt/c/Users/mbg/Documents/attest/pages/contracts.js';


(function () {
  var enterModule = __webpack_require__("./node_modules/react-hot-loader/index.js").enterModule;

  enterModule && enterModule(module);
})();




var ContractsPage = Object(__WEBPACK_IMPORTED_MODULE_2__components_Page__["a" /* AuthPage */])(function (props) {
  return __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_1__components_contracts_ContractsContainer__["a" /* default */], _extends({}, props, {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 4
    }
  }));
});

var _default = ContractsPage;
/* harmony default export */ __webpack_exports__["default"] = (_default);
;

(function () {
  var reactHotLoader = __webpack_require__("./node_modules/react-hot-loader/index.js").default;

  var leaveModule = __webpack_require__("./node_modules/react-hot-loader/index.js").leaveModule;

  if (!reactHotLoader) {
    return;
  }

  reactHotLoader.register(ContractsPage, 'ContractsPage', '/mnt/c/Users/mbg/Documents/attest/pages/contracts.js');
  reactHotLoader.register(_default, 'default', '/mnt/c/Users/mbg/Documents/attest/pages/contracts.js');
  leaveModule(module);
})();

;
    (function (Component, route) {
      if(!Component) return
      if (false) return
      module.hot.accept()
      Component.__route = route

      if (module.hot.status() === 'idle') return

      var components = next.router.components
      for (var r in components) {
        if (!components.hasOwnProperty(r)) continue

        if (components[r].Component.__route === route) {
          next.router.update(r, Component)
        }
      }
    })(typeof __webpack_exports__ !== 'undefined' ? __webpack_exports__.default : (module.exports.default || module.exports), "/contracts")
  
/* WEBPACK VAR INJECTION */}.call(__webpack_exports__, __webpack_require__("./node_modules/webpack/buildin/harmony-module.js")(module)))

/***/ })

})
//# sourceMappingURL=3.cd63742685118640e2ff.hot-update.js.map