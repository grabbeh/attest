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
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_styled_jsx_style__ = __webpack_require__("styled-jsx/style");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_styled_jsx_style___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_styled_jsx_style__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_react__ = __webpack_require__("react");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_react___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1_react__);


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

var _jsxFileName = 'C:\\Users\\mbg\\Documents\\attest\\pages\\_document.js';

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();




var _document = __webpack_require__("next/document");

var _document2 = _interopRequireDefault(_document);

var _styledComponents = __webpack_require__("styled-components");

var _server = __webpack_require__("styled-jsx/server");

var _server2 = _interopRequireDefault(_server);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

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
      return __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement(
        'html',
        {
          __source: {
            fileName: _jsxFileName,
            lineNumber: 17
          }
        },
        __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement(
          _document.Head,
          {
            __source: {
              fileName: _jsxFileName,
              lineNumber: 18
            }
          },
          __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement('meta', { charSet: 'utf-8', className: 'jsx-1595792417',
            __source: {
              fileName: _jsxFileName,
              lineNumber: 19
            }
          }),
          __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement('meta', { name: 'viewport', content: 'width=device-width, initial-scale=1', className: 'jsx-1595792417',
            __source: {
              fileName: _jsxFileName,
              lineNumber: 20
            }
          }),
          __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement(
            'title',
            {
              className: 'jsx-1595792417',
              __source: {
                fileName: _jsxFileName,
                lineNumber: 21
              }
            },
            'Attest - open source contract management'
          ),
          __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement('link', {
            rel: 'stylesheet',
            href: 'https://unpkg.com/tachyons@4.9.0/css/tachyons.min.css',
            className: 'jsx-1595792417',
            __source: {
              fileName: _jsxFileName,
              lineNumber: 22
            }
          }),
          __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement('link', { rel: 'stylesheet', href: '/static/datepicker.css', className: 'jsx-1595792417',
            __source: {
              fileName: _jsxFileName,
              lineNumber: 26
            }
          }),
          __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement('link', {
            href: 'https://fonts.googleapis.com/css?family=Roboto:400,700',
            rel: 'stylesheet',
            className: 'jsx-1595792417',
            __source: {
              fileName: _jsxFileName,
              lineNumber: 27
            }
          }),
          __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement('link', {
            href: 'https://netdna.bootstrapcdn.com/font-awesome/4.7.0/css/font-awesome.min.css',
            rel: 'stylesheet',
            className: 'jsx-1595792417',
            __source: {
              fileName: _jsxFileName,
              lineNumber: 32
            }
          }),
          __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_0_styled_jsx_style___default.a, {
            styleId: '1595792417',
            css: '@font-face{font-family:\'shapefont\';src: url(\'/static/fonts/font-bold.otf\');font-weight:bold;}@font-face{font-family:\'shapefont\';src: url(\'/static/fonts/font.otf\');}.height{height:100vh;top:0;bottom:0;}.front{z-index:1000;}.w-5{width:5%;}.w-94{width:94%;}html,body{height:100vh;}body{font-family:\'shapefont\';text-rendering:optimizeLegibility;-webkit-font-smoothing:antialiased;-moz-osx-font-smoothing:grayscale;background-color:rgb(243,244,245);}.font{font-family:\'shapefont\';}input{font-family:\'shapefont\';}.bg--blue{background-color:#005baa;}.bg--blue-gray{background-color:#b8d0d8;}.bg--orange{background-color:#f5a871;}.bb--orange{border-bottom-color:#f5a871;}.bg--peach{background-color:#EFADA0;}.bg-light-peach{background-color:#f5c8bf;}.bg-haus{background-color:#f3f4f4;}.bg-pear{background-color:#93DAAB;}.bb--pear{border-bottom-color:#93DAAB;}.bb--dark-pear{border-bottom-color:#2E854B;}.bg-dark-pear{background-color:#2E854B;}.bg--dark-blue{background-color:#132238;}.bg--dark-peach{background-color:#E37059;}.bg-sur{background-color:#96DBE4;}.bg-dark-sur{background-color:#24828F;}.bg--light-gray{background-color:#e5e5e5;}.light--gray{color:#f7f4f4;}.overlay{position:fixed;top:0;left:0;right:0;bottom:0;background-color:rgba(31,30,30,0.75);}.content{position:absolute;top:40px;left:300px;right:300px;bottom:40px;overflow:auto;WebkitOverflowScrolling:touch;outline:none;}.fc-blue{color:#005baa;}input,button,submit{border:none;outline:none;}\n/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInBhZ2VzXFxfZG9jdW1lbnQuanMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBb0NhLEFBSTRCLEFBTUEsQUFJYSxBQU9BLEFBS1osQUFDRyxBQUdGLEFBSVcsQUFRQSxBQUlBLEFBSUQsQUFJRSxBQUlBLEFBSUcsQUFJSCxBQUlGLEFBSUUsQUFJQSxBQUlHLEFBSUQsQUFJRixBQUlBLEFBSUEsQUFJQSxBQUlBLEFBSUEsQUFJWCxBQUlDLEFBUUcsQUFXSixBQUdtQixTQWxIcEIsQ0FDRyxFQWlIK0IsQ0F2STNDLEFBTVIsQUFvQkUsQ0FvRkEsQUF1QkEsQ0FuQlEsR0FRRyxDQXpIRixFQWtIQSxHQXhHNkIsQUFPTCxBQVlHLEFBUXBDLEFBSUEsQ0FJQSxBQUlBLEFBSUEsQUFRQSxBQUlBLEFBSUEsQUFJQSxBQVlBLEFBSUEsQUFJQSxBQUlBLEFBSUEsQUFJQSxBQTZCa0QsRUFackMsQ0F6SGYsQUF3REUsQUFvQkEsQUFJQSxBQWtDVSxRQUNDLEVBT0csT0FONEIsS0FPNUIsUUE5RnVCLENBWnJDLEdBMkdnQixFQWxIRyxZQW1IYSxLQWxIaEMsQ0EwR0EsV0F2Rm9DLGFBZ0dyQixhQUNmLFFBaEdzQyxrQ0FDdEMiLCJmaWxlIjoicGFnZXNcXF9kb2N1bWVudC5qcyIsInNvdXJjZVJvb3QiOiJDOi9Vc2Vycy9tYmcvRG9jdW1lbnRzL2F0dGVzdCIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBEb2N1bWVudCwgeyBIZWFkLCBNYWluLCBOZXh0U2NyaXB0IH0gZnJvbSAnbmV4dC9kb2N1bWVudCdcclxuaW1wb3J0IHsgU2VydmVyU3R5bGVTaGVldCB9IGZyb20gJ3N0eWxlZC1jb21wb25lbnRzJ1xyXG5pbXBvcnQgZmx1c2ggZnJvbSAnc3R5bGVkLWpzeC9zZXJ2ZXInXHJcblxyXG5leHBvcnQgZGVmYXVsdCBjbGFzcyBNeURvY3VtZW50IGV4dGVuZHMgRG9jdW1lbnQge1xyXG4gIHN0YXRpYyBnZXRJbml0aWFsUHJvcHMgKHsgcmVuZGVyUGFnZSB9KSB7XHJcbiAgICBjb25zdCBzaGVldCA9IG5ldyBTZXJ2ZXJTdHlsZVNoZWV0KClcclxuICAgIGNvbnN0IHN0eWxlcyA9IGZsdXNoKClcclxuICAgIGNvbnN0IHBhZ2UgPSByZW5kZXJQYWdlKEFwcCA9PiBwcm9wcyA9PlxyXG4gICAgICBzaGVldC5jb2xsZWN0U3R5bGVzKDxBcHAgey4uLnByb3BzfSAvPikpXHJcbiAgICBjb25zdCBzdHlsZVRhZ3MgPSBzaGVldC5nZXRTdHlsZUVsZW1lbnQoKVxyXG4gICAgcmV0dXJuIHsgLi4ucGFnZSwgc3R5bGVUYWdzLCBzdHlsZXMgfVxyXG4gIH1cclxuXHJcbiAgcmVuZGVyICgpIHtcclxuICAgIHJldHVybiAoXHJcbiAgICAgIDxodG1sPlxyXG4gICAgICAgIDxIZWFkPlxyXG4gICAgICAgICAgPG1ldGEgY2hhclNldD0ndXRmLTgnIC8+XHJcbiAgICAgICAgICA8bWV0YSBuYW1lPSd2aWV3cG9ydCcgY29udGVudD0nd2lkdGg9ZGV2aWNlLXdpZHRoLCBpbml0aWFsLXNjYWxlPTEnIC8+XHJcbiAgICAgICAgICA8dGl0bGU+QXR0ZXN0IC0gb3BlbiBzb3VyY2UgY29udHJhY3QgbWFuYWdlbWVudDwvdGl0bGU+XHJcbiAgICAgICAgICA8bGlua1xyXG4gICAgICAgICAgICByZWw9J3N0eWxlc2hlZXQnXHJcbiAgICAgICAgICAgIGhyZWY9J2h0dHBzOi8vdW5wa2cuY29tL3RhY2h5b25zQDQuOS4wL2Nzcy90YWNoeW9ucy5taW4uY3NzJ1xyXG4gICAgICAgICAgLz5cclxuICAgICAgICAgIDxsaW5rIHJlbD0nc3R5bGVzaGVldCcgaHJlZj0nL3N0YXRpYy9kYXRlcGlja2VyLmNzcycgLz5cclxuICAgICAgICAgIDxsaW5rXHJcbiAgICAgICAgICAgIGhyZWY9J2h0dHBzOi8vZm9udHMuZ29vZ2xlYXBpcy5jb20vY3NzP2ZhbWlseT1Sb2JvdG86NDAwLDcwMCdcclxuICAgICAgICAgICAgcmVsPSdzdHlsZXNoZWV0J1xyXG4gICAgICAgICAgLz5cclxuXHJcbiAgICAgICAgICA8bGlua1xyXG4gICAgICAgICAgICBocmVmPSdodHRwczovL25ldGRuYS5ib290c3RyYXBjZG4uY29tL2ZvbnQtYXdlc29tZS80LjcuMC9jc3MvZm9udC1hd2Vzb21lLm1pbi5jc3MnXHJcbiAgICAgICAgICAgIHJlbD0nc3R5bGVzaGVldCdcclxuICAgICAgICAgIC8+XHJcbiAgICAgICAgICA8c3R5bGUganN4IGdsb2JhbD5cclxuICAgICAgICAgICAge2BcclxuXHJcbiAgICAgICAgICAgIC5oZWlnaHQge1xyXG4gICAgICAgICAgICAgIGhlaWdodDogMTAwdmg7XHJcbiAgICAgICAgICAgICAgdG9wOiAwO1xyXG4gICAgICAgICAgICAgIGJvdHRvbTogMDtcclxuICAgICAgICAgICAgfVxyXG5cclxuICAgICAgICAgICAgLmZyb250IHtcclxuICAgICAgICAgICAgICB6LWluZGV4OiAxMDAwO1xyXG4gICAgICAgICAgICB9XHJcblxyXG4gICAgICAgICAgICAgIEBmb250LWZhY2Uge1xyXG4gICAgICAgICAgICAgICAgZm9udC1mYW1pbHk6ICdzaGFwZWZvbnQnO1xyXG4gICAgICAgICAgICAgICAgc3JjOiBcclxuICAgICAgICAgICAgICAgICAgdXJsKCcvc3RhdGljL2ZvbnRzL2ZvbnQtYm9sZC5vdGYnKTtcclxuICAgICAgICAgICAgICAgIGZvbnQtd2VpZ2h0OiBib2xkO1xyXG4gICAgICAgICAgICAgIH1cclxuXHJcbiAgICAgICAgICAgICAgQGZvbnQtZmFjZSB7XHJcbiAgICAgICAgICAgICAgICBmb250LWZhbWlseTogJ3NoYXBlZm9udCc7XHJcbiAgICAgICAgICAgICAgICBzcmM6IFxyXG4gICAgICAgICAgICAgICAgICB1cmwoJy9zdGF0aWMvZm9udHMvZm9udC5vdGYnKTtcclxuICAgICAgICAgICAgICB9XHJcblxyXG4gICAgICAgICAgICAgIC53LTUgeyB3aWR0aDogNSV9XHJcbiAgICAgICAgICAgICAgLnctOTQgeyB3aWR0aDogOTQlIH1cclxuICAgICAgICAgICAgICAgIFxyXG4gICAgICAgICAgICAgIGh0bWwsIGJvZHkge1xyXG4gICAgICAgICAgICAgICAgaGVpZ2h0OiAxMDB2aDtcclxuICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgYm9keSB7XHJcbiAgICAgICAgICAgICAgICBcclxuICAgICAgICAgICAgICAgIGZvbnQtZmFtaWx5OiAnc2hhcGVmb250JztcclxuICAgICAgICAgICAgICAgIHRleHQtcmVuZGVyaW5nOiBvcHRpbWl6ZUxlZ2liaWxpdHk7XHJcbiAgICAgICAgICAgICAgICAtd2Via2l0LWZvbnQtc21vb3RoaW5nOiBhbnRpYWxpYXNlZDtcclxuICAgICAgICAgICAgICAgIC1tb3otb3N4LWZvbnQtc21vb3RoaW5nOiBncmF5c2NhbGU7XHJcbiAgICAgICAgICAgICAgICBiYWNrZ3JvdW5kLWNvbG9yOiByZ2IoMjQzLCAyNDQsIDI0NSk7XHJcbiAgICAgICAgICAgICAgfVxyXG5cclxuICAgICAgICAgICAgICAuZm9udCB7XHJcbiAgICAgICAgICAgICAgICBmb250LWZhbWlseTogJ3NoYXBlZm9udCc7XHJcbiAgICAgICAgICAgICAgfVxyXG5cclxuICAgICAgICAgICAgICBpbnB1dCB7XHJcbiAgICAgICAgICAgICAgICBmb250LWZhbWlseTogJ3NoYXBlZm9udCc7IFxyXG4gICAgICAgICAgICAgIH1cclxuXHJcbiAgICAgICAgICAgICAgLmJnLS1ibHVlIHtcclxuICAgICAgICAgICAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjMDA1YmFhO1xyXG4gICAgICAgICAgICAgIH1cclxuXHJcbiAgICAgICAgICAgICAgLmJnLS1ibHVlLWdyYXkge1xyXG4gICAgICAgICAgICAgICAgYmFja2dyb3VuZC1jb2xvcjogI2I4ZDBkODtcclxuICAgICAgICAgICAgICB9XHJcblxyXG4gICAgICAgICAgICAgIC5iZy0tb3JhbmdlIHtcclxuICAgICAgICAgICAgICAgIGJhY2tncm91bmQtY29sb3I6ICNmNWE4NzE7XHJcbiAgICAgICAgICAgICAgfVxyXG5cclxuICAgICAgICAgICAgICAuYmItLW9yYW5nZSB7XHJcbiAgICAgICAgICAgICAgICBib3JkZXItYm90dG9tLWNvbG9yOiAjZjVhODcxO1xyXG4gICAgICAgICAgICAgIH1cclxuXHJcbiAgICAgICAgICAgICAgLmJnLS1wZWFjaCB7XHJcbiAgICAgICAgICAgICAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjRUZBREEwO1xyXG4gICAgICAgICAgICAgIH1cclxuXHJcbiAgICAgICAgICAgICAgLmJnLWxpZ2h0LXBlYWNoIHtcclxuICAgICAgICAgICAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjZjVjOGJmO1xyXG4gICAgICAgICAgICAgIH1cclxuXHJcbiAgICAgICAgICAgICAgLmJnLWhhdXMge1xyXG4gICAgICAgICAgICAgICAgYmFja2dyb3VuZC1jb2xvcjogI2YzZjRmNDtcclxuICAgICAgICAgICAgICB9XHJcblxyXG4gICAgICAgICAgICAgIC5iZy1wZWFyIHtcclxuICAgICAgICAgICAgICAgIGJhY2tncm91bmQtY29sb3I6ICM5M0RBQUI7XHJcbiAgICAgICAgICAgICAgfVxyXG5cclxuICAgICAgICAgICAgICAuYmItLXBlYXIge1xyXG4gICAgICAgICAgICAgICAgYm9yZGVyLWJvdHRvbS1jb2xvcjogIzkzREFBQjtcclxuICAgICAgICAgICAgICB9XHJcblxyXG4gICAgICAgICAgICAgIC5iYi0tZGFyay1wZWFyIHtcclxuICAgICAgICAgICAgICAgIGJvcmRlci1ib3R0b20tY29sb3I6IzJFODU0QjtcclxuICAgICAgICAgICAgICB9XHJcblxyXG4gICAgICAgICAgICAgIC5iZy1kYXJrLXBlYXIge1xyXG4gICAgICAgICAgICAgICAgYmFja2dyb3VuZC1jb2xvcjogIzJFODU0QjtcclxuICAgICAgICAgICAgICB9XHJcblxyXG4gICAgICAgICAgICAgIC5iZy0tZGFyay1ibHVlIHtcclxuICAgICAgICAgICAgICAgIGJhY2tncm91bmQtY29sb3I6ICMxMzIyMzg7XHJcbiAgICAgICAgICAgICAgfVxyXG5cclxuICAgICAgICAgICAgICAuYmctLWRhcmstcGVhY2gge1xyXG4gICAgICAgICAgICAgICAgYmFja2dyb3VuZC1jb2xvcjogI0UzNzA1OTtcclxuICAgICAgICAgICAgICB9XHJcblxyXG4gICAgICAgICAgICAgIC5iZy1zdXIge1xyXG4gICAgICAgICAgICAgICAgYmFja2dyb3VuZC1jb2xvcjogIzk2REJFNDtcclxuICAgICAgICAgICAgICB9XHJcblxyXG4gICAgICAgICAgICAgIC5iZy1kYXJrLXN1ciB7XHJcbiAgICAgICAgICAgICAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjMjQ4MjhGO1xyXG4gICAgICAgICAgICAgIH1cclxuXHJcbiAgICAgICAgICAgICAgLmJnLS1saWdodC1ncmF5IHtcclxuICAgICAgICAgICAgICAgIGJhY2tncm91bmQtY29sb3I6ICNlNWU1ZTU7XHJcbiAgICAgICAgICAgICAgfVxyXG5cclxuICAgICAgICAgICAgICAubGlnaHQtLWdyYXkge1xyXG4gICAgICAgICAgICAgICAgY29sb3I6ICNmN2Y0ZjQ7XHJcbiAgICAgICAgICAgICAgfVxyXG5cclxuICAgICAgICAgICAgICAub3ZlcmxheSB7XHJcbiAgICAgICAgICAgICAgICBwb3NpdGlvbjogZml4ZWQ7XHJcbiAgICAgICAgICAgICAgICB0b3A6IDA7XHJcbiAgICAgICAgICAgICAgICBsZWZ0OiAwO1xyXG4gICAgICAgICAgICAgICAgcmlnaHQ6IDA7XHJcbiAgICAgICAgICAgICAgICBib3R0b206IDA7XHJcbiAgICAgICAgICAgICAgICBiYWNrZ3JvdW5kLWNvbG9yOiByZ2JhKDMxLCAzMCwgMzAsIDAuNzUpO1xyXG4gICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAuY29udGVudCB7XHJcbiAgICAgICAgICAgICAgICBwb3NpdGlvbjogYWJzb2x1dGU7XHJcbiAgICAgICAgICAgICAgICB0b3A6IDQwcHg7XHJcbiAgICAgICAgICAgICAgICBsZWZ0OiAzMDBweDtcclxuICAgICAgICAgICAgICAgIHJpZ2h0OiAzMDBweDtcclxuICAgICAgICAgICAgICAgIGJvdHRvbTogNDBweDtcclxuICAgICAgICAgICAgICAgIG92ZXJmbG93OiBhdXRvO1xyXG4gICAgICAgICAgICAgICAgV2Via2l0T3ZlcmZsb3dTY3JvbGxpbmc6IHRvdWNoO1xyXG4gICAgICAgICAgICAgICAgb3V0bGluZTogbm9uZTtcclxuICAgICAgICAgICAgICB9XHJcblxyXG4gICAgICAgICAgICAgIC5mYy1ibHVlIHtcclxuICAgICAgICAgICAgICAgIGNvbG9yOiAjMDA1YmFhO1xyXG4gICAgICAgICAgICAgIH1cclxuXHJcbiAgICAgICAgICAgICAgaW5wdXQsIGJ1dHRvbiwgc3VibWl0IHsgYm9yZGVyOiBub25lOyBvdXRsaW5lOiBub25lO31cclxuXHJcbiAgICAgICAgICBgfVxyXG4gICAgICAgICAgPC9zdHlsZT5cclxuICAgICAgICAgIHt0aGlzLnByb3BzLnN0eWxlVGFnc31cclxuICAgICAgICA8L0hlYWQ+XHJcbiAgICAgICAgPGJvZHk+XHJcbiAgICAgICAgICA8TWFpbiAvPlxyXG4gICAgICAgICAgPE5leHRTY3JpcHQgLz5cclxuICAgICAgICA8L2JvZHk+XHJcbiAgICAgIDwvaHRtbD5cclxuICAgIClcclxuICB9XHJcbn1cclxuIl19 */\n/*@ sourceURL=pages\\_document.js */'
          }),
          this.props.styleTags
        ),
        __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement(
          'body',
          {
            __source: {
              fileName: _jsxFileName,
              lineNumber: 182
            }
          },
          __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement(_document.Main, {
            __source: {
              fileName: _jsxFileName,
              lineNumber: 183
            }
          }),
          __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement(_document.NextScript, {
            __source: {
              fileName: _jsxFileName,
              lineNumber: 184
            }
          })
        )
      );
    }
  }], [{
    key: 'getInitialProps',
    value: function getInitialProps(_ref) {
      var renderPage = _ref.renderPage;

      var sheet = new _styledComponents.ServerStyleSheet();
      var styles = (0, _server2.default)();
      var page = renderPage(function (App) {
        return function (props) {
          return sheet.collectStyles(__WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement(App, _extends({}, props, {
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
}(_document2.default);

exports.default = MyDocument;

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

/***/ }),

/***/ "styled-jsx/style":
/***/ (function(module, exports) {

module.exports = require("styled-jsx/style");

/***/ })

/******/ });
//# sourceMappingURL=_document.js.map