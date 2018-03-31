module.exports =
/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};
/******/
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/
/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId]) {
/******/ 			return installedModules[moduleId].exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			i: moduleId,
/******/ 			l: false,
/******/ 			exports: {}
/******/ 		};
/******/
/******/ 		// Execute the module function
/******/ 		var threw = true;
/******/ 		try {
/******/ 			modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/ 			threw = false;
/******/ 		} finally {
/******/ 			if(threw) delete installedModules[moduleId];
/******/ 		}
/******/
/******/ 		// Flag the module as loaded
/******/ 		module.l = true;
/******/
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/
/******/
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;
/******/
/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;
/******/
/******/ 	// define getter function for harmony exports
/******/ 	__webpack_require__.d = function(exports, name, getter) {
/******/ 		if(!__webpack_require__.o(exports, name)) {
/******/ 			Object.defineProperty(exports, name, {
/******/ 				configurable: false,
/******/ 				enumerable: true,
/******/ 				get: getter
/******/ 			});
/******/ 		}
/******/ 	};
/******/
/******/ 	// getDefaultExport function for compatibility with non-harmony modules
/******/ 	__webpack_require__.n = function(module) {
/******/ 		var getter = module && module.__esModule ?
/******/ 			function getDefault() { return module['default']; } :
/******/ 			function getModuleExports() { return module; };
/******/ 		__webpack_require__.d(getter, 'a', getter);
/******/ 		return getter;
/******/ 	};
/******/
/******/ 	// Object.prototype.hasOwnProperty.call
/******/ 	__webpack_require__.o = function(object, property) { return Object.prototype.hasOwnProperty.call(object, property); };
/******/
/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "";
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = 0);
/******/ })
/************************************************************************/
/******/ ({

/***/ "./pages/_document.js":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_react__ = __webpack_require__("react");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_react___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_react__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_next_document__ = __webpack_require__("next/document");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_next_document___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1_next_document__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_styled_components__ = __webpack_require__("styled-components");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_styled_components___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2_styled_components__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_styled_jsx_server__ = __webpack_require__("styled-jsx/server");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_styled_jsx_server___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_3_styled_jsx_server__);
var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

var _jsxFileName = '/mnt/c/Users/mbg/Documents/attest/pages/_document.js';

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();



function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }





var MyDocument = function (_Document) {
  _inherits(MyDocument, _Document);

  function MyDocument() {
    _classCallCheck(this, MyDocument);

    return _possibleConstructorReturn(this, (MyDocument.__proto__ || Object.getPrototypeOf(MyDocument)).apply(this, arguments));
  }

  _createClass(MyDocument, [{
    key: 'render',
    value: function render() {
      return __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
        'html',
        {
          __source: {
            fileName: _jsxFileName,
            lineNumber: 17
          }
        },
        __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
          __WEBPACK_IMPORTED_MODULE_1_next_document__["Head"],
          {
            __source: {
              fileName: _jsxFileName,
              lineNumber: 18
            }
          },
          __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement('meta', { charSet: 'utf-8', __source: {
              fileName: _jsxFileName,
              lineNumber: 19
            }
          }),
          __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement('meta', { name: 'viewport', content: 'width=device-width, initial-scale=1', __source: {
              fileName: _jsxFileName,
              lineNumber: 20
            }
          }),
          __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
            'title',
            {
              __source: {
                fileName: _jsxFileName,
                lineNumber: 21
              }
            },
            'Attest - open source contract management'
          ),
          __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement('link', {
            rel: 'stylesheet',
            href: 'https://unpkg.com/tachyons@4.9.0/css/tachyons.min.css',
            __source: {
              fileName: _jsxFileName,
              lineNumber: 22
            }
          }),
          __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement('link', { rel: 'stylesheet', href: '/static/datepicker.css', __source: {
              fileName: _jsxFileName,
              lineNumber: 26
            }
          }),
          __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement('link', { rel: 'stylesheet', href: '/_next/static/style.css', __source: {
              fileName: _jsxFileName,
              lineNumber: 27
            }
          }),
          __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement('link', {
            href: 'https://netdna.bootstrapcdn.com/font-awesome/4.7.0/css/font-awesome.min.css',
            rel: 'stylesheet',
            __source: {
              fileName: _jsxFileName,
              lineNumber: 28
            }
          }),
          __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement('style', {
            dangerouslySetInnerHTML: {
              __html: '\n              \n              @font-face {\n                font-family: \'shapefont\';\n                src: \n                  url(\'/static/fonts/font-bold.otf\');\n                font-weight: bold;\n              }\n\n              @font-face {\n                font-family: \'shapefont\';\n                src: \n                  url(\'/static/fonts/font.otf\');\n              }\n              body {\n                font-family: \'shapefont\';\n                text-rendering: optimizeLegibility;\n                -webkit-font-smoothing: antialiased;\n                -moz-osx-font-smoothing: grayscale;\n              }\n\n              .font {\n                font-family: \'shapefont\';\n              }\n\n              input {\n                font-family: \'shapefont\'; \n                border-radius: 0;\n                -webkit-appearance: none;\n                -webkit-border-radius:0px;\n              }\n\n          '
            },
            __source: {
              fileName: _jsxFileName,
              lineNumber: 32
            }
          }),
          __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
            'style',
            {
              __source: {
                fileName: _jsxFileName,
                lineNumber: 69
              }
            },
            '\n\n            .fade-enter {\n              opacity: 0.01;\n            }\n\n            .fade-enter.fade-enter-active {\n              opacity: 1;\n              transition: opacity 1000ms ease-in;\n            }\n\n            .fade-exit {\n              opacity: 1;\n            }\n\n            .fade-exit.fade-exit-active {\n              opacity: 0.01;\n              transition: opacity 800ms ease-in;\n            }\n\n            .height {\n              height: 100vh;\n              top: 0;\n              bottom: 0;\n            }\n\n            .front {\n              z-index: 500;\n            }\n\n            .front-two {\n              z-index: 1000;\n            }\n\n\n              html, body {\n                height: 100vh;\n              }\n\n      \n\n           \n\n              .bg--blue {\n              background-color: #005baa;\n              }\n\n              .bg--blue-gray {\n                background-color: #b8d0d8;\n              }\n\n              .bg--orange {\n                background-color: #f5a871;\n              }\n\n              .bb--orange {\n                border-bottom-color: #f5a871;\n              }\n\n              .bg--peach {\n                background-color: #EFADA0;\n              }\n\n              .bg-light-peach {\n              background-color: #f5c8bf;\n              }\n\n              .bg-haus {\n                background-color: #f3f4f4;\n              }\n\n              .bg-pear {\n                background-color: #93DAAB;\n              }\n\n              .bb--pear {\n                border-bottom-color: #93DAAB;\n              }\n\n              .bb--dark-pear {\n                border-bottom-color:#2E854B;\n              }\n\n              .bg-dark-pear {\n                background-color: #2E854B;\n              }\n\n              .bg--dark-blue {\n                background-color: #132238;\n              }\n\n              .bg--dark-peach {\n                background-color: #E37059;\n              }\n\n              .bg-sur {\n                background-color: #96DBE4;\n              }\n\n              .bg-dark-sur {\n                background-color: #24828F;\n              }\n\n              .bg--light-gray {\n                background-color: #e5e5e5;\n              }\n\n              .light--gray {\n                color: #f7f4f4;\n              }\n\n              .overlay {\n                position: fixed;\n                top: 0;\n                left: 0;\n                right: 0;\n                bottom: 0;\n                background-color: rgba(31, 30, 30, 0.75);\n              }\n              .content {\n                position: absolute;\n                top: 0px;\n                left: 0px;\n                right:0px;\n                bottom: 0px;\n                overflow: auto;\n                WebkitOverflowScrolling: touch;\n                outline: none;\n              }\n\n              .fc-blue {\n                color: #005baa;\n              }\n\n              input, button, submit { border: none;\n                 outline: none;\n                 border-radius: 0;\n                 -webkit-appearance: none;\n                 -webkit-border-radius:0px;\n                }\n\n          '
          ),
          this.props.styleTags
        ),
        __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
          'body',
          { className: 'dark-gray', __source: {
              fileName: _jsxFileName,
              lineNumber: 215
            }
          },
          __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_1_next_document__["Main"], {
            __source: {
              fileName: _jsxFileName,
              lineNumber: 216
            }
          }),
          __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_1_next_document__["NextScript"], {
            __source: {
              fileName: _jsxFileName,
              lineNumber: 217
            }
          })
        )
      );
    }
  }], [{
    key: 'getInitialProps',
    value: function getInitialProps(_ref) {
      var renderPage = _ref.renderPage;

      var sheet = new __WEBPACK_IMPORTED_MODULE_2_styled_components__["ServerStyleSheet"]();
      var styles = __WEBPACK_IMPORTED_MODULE_3_styled_jsx_server___default()();
      var page = renderPage(function (App) {
        return function (props) {
          return sheet.collectStyles(__WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(App, _extends({}, props, {
            __source: {
              fileName: _jsxFileName,
              lineNumber: 10
            }
          })));
        };
      });
      var styleTags = sheet.getStyleElement();
      return _extends({}, page, { styleTags: styleTags, styles: styles });
    }
  }]);

  return MyDocument;
}(__WEBPACK_IMPORTED_MODULE_1_next_document___default.a);

/* harmony default export */ __webpack_exports__["default"] = (MyDocument);

/***/ }),

/***/ 0:
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__("./pages/_document.js");


/***/ }),

/***/ "next/document":
/***/ (function(module, exports) {

module.exports = require("next/document");

/***/ }),

/***/ "react":
/***/ (function(module, exports) {

module.exports = require("react");

/***/ }),

/***/ "styled-components":
/***/ (function(module, exports) {

module.exports = require("styled-components");

/***/ }),

/***/ "styled-jsx/server":
/***/ (function(module, exports) {

module.exports = require("styled-jsx/server");

/***/ })

/******/ });
//# sourceMappingURL=_document.js.map