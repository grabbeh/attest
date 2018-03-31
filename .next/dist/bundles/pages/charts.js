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
/******/ 	return __webpack_require__(__webpack_require__.s = 3);
/******/ })
/************************************************************************/
/******/ ({

/***/ "./components/Page.js":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* unused harmony export Page */
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AuthPage; });
/* unused harmony export UserPage */
/* unused harmony export LandingPage */
/* unused harmony export BasicPage */
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__lib_withData__ = __webpack_require__("./lib/withData.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__lib_withUser__ = __webpack_require__("./lib/withUser.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__lib_withLayout__ = __webpack_require__("./lib/withLayout.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__lib_withAuthLayout__ = __webpack_require__("./lib/withAuthLayout.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_recompose__ = __webpack_require__("recompose");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_recompose___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_4_recompose__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5_react_apollo__ = __webpack_require__("react-apollo");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5_react_apollo___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_5_react_apollo__);







var Page = Object(__WEBPACK_IMPORTED_MODULE_4_recompose__["compose"])(__WEBPACK_IMPORTED_MODULE_0__lib_withData__["a" /* default */], __WEBPACK_IMPORTED_MODULE_5_react_apollo__["withApollo"], __WEBPACK_IMPORTED_MODULE_2__lib_withLayout__["a" /* default */]);
var LandingPage = Object(__WEBPACK_IMPORTED_MODULE_4_recompose__["compose"])(__WEBPACK_IMPORTED_MODULE_0__lib_withData__["a" /* default */], __WEBPACK_IMPORTED_MODULE_1__lib_withUser__["a" /* default */], __WEBPACK_IMPORTED_MODULE_5_react_apollo__["withApollo"]);
var AuthPage = Object(__WEBPACK_IMPORTED_MODULE_4_recompose__["compose"])(__WEBPACK_IMPORTED_MODULE_0__lib_withData__["a" /* default */], __WEBPACK_IMPORTED_MODULE_5_react_apollo__["withApollo"], __WEBPACK_IMPORTED_MODULE_3__lib_withAuthLayout__["a" /* default */]);
var UserPage = Object(__WEBPACK_IMPORTED_MODULE_4_recompose__["compose"])(__WEBPACK_IMPORTED_MODULE_0__lib_withData__["a" /* default */], __WEBPACK_IMPORTED_MODULE_1__lib_withUser__["a" /* default */], __WEBPACK_IMPORTED_MODULE_5_react_apollo__["withApollo"], __WEBPACK_IMPORTED_MODULE_2__lib_withLayout__["a" /* default */]);
var BasicPage = Object(__WEBPACK_IMPORTED_MODULE_4_recompose__["compose"])(__WEBPACK_IMPORTED_MODULE_0__lib_withData__["a" /* default */], __WEBPACK_IMPORTED_MODULE_5_react_apollo__["withApollo"]);



/***/ }),

/***/ "./components/charts/Chart.js":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_react__ = __webpack_require__("react");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_react___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_react__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_d3_shape__ = __webpack_require__("d3-shape");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_d3_shape___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1_d3_shape__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__node_modules_react_vis_dist_style_css__ = __webpack_require__("./node_modules/react-vis/dist/style.css");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__node_modules_react_vis_dist_style_css___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2__node_modules_react_vis_dist_style_css__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_react_vis__ = __webpack_require__("react-vis");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_react_vis___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_3_react_vis__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_lodash__ = __webpack_require__("lodash");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_lodash___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_4_lodash__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__styles_Title__ = __webpack_require__("./components/styles/Title.js");
var _jsxFileName = '/mnt/c/Users/mbg/Documents/attest/components/charts/Chart.js';

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();



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
      var d = __WEBPACK_IMPORTED_MODULE_4_lodash___default.a.groupBy(this.props.data.contracts, 'currentStatus.name');
      var data = __WEBPACK_IMPORTED_MODULE_4_lodash___default.a.values(d).map(function (value, index) {
        return {
          x: value[0].currentStatus.name,
          y: value.length,
          color: value[0].currentStatus.color,
          opacity: 1
        };
      });

      return __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
        'div',
        { className: 'pa3', __source: {
            fileName: _jsxFileName,
            lineNumber: 27
          }
        },
        __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_5__styles_Title__["a" /* default */], { text: 'Charts', __source: {
            fileName: _jsxFileName,
            lineNumber: 28
          }
        }),
        __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
          __WEBPACK_IMPORTED_MODULE_3_react_vis__["XYPlot"],
          {
            className: 'mt3',
            xType: 'ordinal',
            height: 300,
            width: 300,
            colorType: 'literal',
            __source: {
              fileName: _jsxFileName,
              lineNumber: 29
            }
          },
          __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_3_react_vis__["VerticalGridLines"], {
            __source: {
              fileName: _jsxFileName,
              lineNumber: 36
            }
          }),
          __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_3_react_vis__["HorizontalGridLines"], {
            __source: {
              fileName: _jsxFileName,
              lineNumber: 37
            }
          }),
          __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_3_react_vis__["XAxis"], {
            __source: {
              fileName: _jsxFileName,
              lineNumber: 38
            }
          }),
          __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_3_react_vis__["YAxis"], {
            __source: {
              fileName: _jsxFileName,
              lineNumber: 39
            }
          }),
          __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_3_react_vis__["VerticalBarSeries"], { data: data, __source: {
              fileName: _jsxFileName,
              lineNumber: 40
            }
          })
        )
      );
    }
  }]);

  return Chart;
}(__WEBPACK_IMPORTED_MODULE_0_react___default.a.Component);

/* harmony default export */ __webpack_exports__["a"] = (Chart);

/***/ }),

/***/ "./components/charts/ChartsContainer.js":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_react__ = __webpack_require__("react");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_react___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_react__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__general_Loading__ = __webpack_require__("./components/general/Loading.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_react_apollo__ = __webpack_require__("react-apollo");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_react_apollo___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2_react_apollo__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__queries_ContractsQuery__ = __webpack_require__("./queries/ContractsQuery.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__Chart__ = __webpack_require__("./components/charts/Chart.js");
var _jsxFileName = '/mnt/c/Users/mbg/Documents/attest/components/charts/ChartsContainer.js';

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }







var Example = function (_React$Component) {
  _inherits(Example, _React$Component);

  function Example() {
    _classCallCheck(this, Example);

    return _possibleConstructorReturn(this, (Example.__proto__ || Object.getPrototypeOf(Example)).apply(this, arguments));
  }

  _createClass(Example, [{
    key: 'render',
    value: function render() {
      return __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
        __WEBPACK_IMPORTED_MODULE_2_react_apollo__["Query"],
        { query: __WEBPACK_IMPORTED_MODULE_3__queries_ContractsQuery__["a" /* default */], __source: {
            fileName: _jsxFileName,
            lineNumber: 10
          }
        },
        function (_ref) {
          var loading = _ref.loading,
              error = _ref.error,
              data = _ref.data;

          if (loading) return __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_1__general_Loading__["a" /* default */], {
            __source: {
              fileName: _jsxFileName,
              lineNumber: 12
            }
          });
          if (error) return 'Error';
          return __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_4__Chart__["a" /* default */], { data: data, __source: {
              fileName: _jsxFileName,
              lineNumber: 14
            }
          });
        }
      );
    }
  }]);

  return Example;
}(__WEBPACK_IMPORTED_MODULE_0_react___default.a.Component);

/* harmony default export */ __webpack_exports__["a"] = (Example);

/***/ }),

/***/ "./components/general/Header.js":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_react__ = __webpack_require__("react");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_react___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_react__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_next_link__ = __webpack_require__("next/link");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_next_link___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1_next_link__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__lib_Redirect__ = __webpack_require__("./lib/Redirect.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_cookie__ = __webpack_require__("cookie");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_cookie___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_3_cookie__);
var _jsxFileName = '/mnt/c/Users/mbg/Documents/attest/components/general/Header.js';

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();



function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }






var Header = function (_react$Component) {
  _inherits(Header, _react$Component);

  function Header() {
    var _ref;

    var _temp, _this, _ret;

    _classCallCheck(this, Header);

    for (var _len = arguments.length, args = Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }

    return _ret = (_temp = (_this = _possibleConstructorReturn(this, (_ref = Header.__proto__ || Object.getPrototypeOf(Header)).call.apply(_ref, [this].concat(args))), _this), _this.logout = function () {
      Object(__WEBPACK_IMPORTED_MODULE_2__lib_Redirect__["a" /* default */])({}, '/');
      _this.props.client.resetStore();
      document.cookie = __WEBPACK_IMPORTED_MODULE_3_cookie___default.a.serialize('token', '');
    }, _temp), _possibleConstructorReturn(_this, _ret);
  }

  _createClass(Header, [{
    key: 'render',
    value: function render() {
      var _props = this.props,
          user = _props.user,
          toggle = _props.toggle;

      return __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
        'div',
        { className: 'relative front-two bg--dark-peach pa2 f3', __source: {
            fileName: _jsxFileName,
            lineNumber: 16
          }
        },
        __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
          'span',
          { onClick: toggle, className: 'dark-gray', __source: {
              fileName: _jsxFileName,
              lineNumber: 17
            }
          },
          __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement('i', { className: 'mr3 fa fa-bars', __source: {
              fileName: _jsxFileName,
              lineNumber: 18
            }
          })
        ),
        __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
          'span',
          { className: 'b dark-gray', __source: {
              fileName: _jsxFileName,
              lineNumber: 20
            }
          },
          'Attest'
        ),
        __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
          'span',
          { className: 'fr', __source: {
              fileName: _jsxFileName,
              lineNumber: 23
            }
          },
          user ? __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
            'div',
            { className: 'mt1 f4-ns f5', __source: {
                fileName: _jsxFileName,
                lineNumber: 25
              }
            },
            __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
              'span',
              {
                __source: {
                  fileName: _jsxFileName,
                  lineNumber: 26
                }
              },
              __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement('i', { className: 'dark-gray fa fa-user-circle fa-lg', __source: {
                  fileName: _jsxFileName,
                  lineNumber: 26
                }
              })
            ),
            __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
              'span',
              { className: 'ml3', onClick: this.logout, __source: {
                  fileName: _jsxFileName,
                  lineNumber: 27
                }
              },
              __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement('i', { title: 'Sign out', className: 'fa fa-sign-out fa-lg', __source: {
                  fileName: _jsxFileName,
                  lineNumber: 28
                }
              })
            )
          ) : __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
            __WEBPACK_IMPORTED_MODULE_1_next_link___default.a,
            { href: '/login', __source: {
                fileName: _jsxFileName,
                lineNumber: 31
              }
            },
            __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
              'a',
              { className: 'link dark-gray dim', __source: {
                  fileName: _jsxFileName,
                  lineNumber: 32
                }
              },
              'Login'
            )
          )
        )
      );
    }
  }]);

  return Header;
}(__WEBPACK_IMPORTED_MODULE_0_react___default.a.Component);

/* harmony default export */ __webpack_exports__["a"] = (Header);

/***/ }),

/***/ "./components/general/Loading.js":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_react__ = __webpack_require__("react");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_react___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_react__);
var _jsxFileName = '/mnt/c/Users/mbg/Documents/attest/components/general/Loading.js';

var Loading = function Loading() {
  return __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
    'div',
    { className: 'f4 b center tc bg-light-gray mw5 pa3 mt5', __source: {
        fileName: _jsxFileName,
        lineNumber: 2
      }
    },
    'Loading...'
  );
};

/* harmony default export */ __webpack_exports__["a"] = (Loading);

/***/ }),

/***/ "./components/side-menu/MenuItem.js":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_react__ = __webpack_require__("react");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_react___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_react__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_next_link__ = __webpack_require__("next/link");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_next_link___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1_next_link__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_classnames__ = __webpack_require__("classnames");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_classnames___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2_classnames__);
var _jsxFileName = '/mnt/c/Users/mbg/Documents/attest/components/side-menu/MenuItem.js';




var MenuItem = function MenuItem(_ref) {
  var icon = _ref.icon,
      url = _ref.url,
      selectedUrl = _ref.selectedUrl;
  return __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
    'li',
    { className: 'pt4', __source: {
        fileName: _jsxFileName,
        lineNumber: 5
      }
    },
    __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
      __WEBPACK_IMPORTED_MODULE_1_next_link___default.a,
      { href: url, __source: {
          fileName: _jsxFileName,
          lineNumber: 6
        }
      },
      __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
        'a',
        {
          className: __WEBPACK_IMPORTED_MODULE_2_classnames___default()(url === selectedUrl && 'light-gray', 'gray', 'white-50'),
          __source: {
            fileName: _jsxFileName,
            lineNumber: 7
          }
        },
        __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement('i', { className: icon, __source: {
            fileName: _jsxFileName,
            lineNumber: 10
          }
        })
      )
    )
  );
};

/* harmony default export */ __webpack_exports__["a"] = (MenuItem);

/***/ }),

/***/ "./components/side-menu/SideColumn.js":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_react__ = __webpack_require__("react");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_react___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_react__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__SlimMenu__ = __webpack_require__("./components/side-menu/SlimMenu.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__styles_Flex__ = __webpack_require__("./components/styles/Flex.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__styles_MenuAnimation__ = __webpack_require__("./components/styles/MenuAnimation.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__styles_PageAnimation__ = __webpack_require__("./components/styles/PageAnimation.js");
var _jsxFileName = '/mnt/c/Users/mbg/Documents/attest/components/side-menu/SideColumn.js';

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }







var SideColumn = function (_React$Component) {
  _inherits(SideColumn, _React$Component);

  function SideColumn() {
    _classCallCheck(this, SideColumn);

    return _possibleConstructorReturn(this, (SideColumn.__proto__ || Object.getPrototypeOf(SideColumn)).apply(this, arguments));
  }

  _createClass(SideColumn, [{
    key: 'render',
    value: function render() {
      return __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
        __WEBPACK_IMPORTED_MODULE_2__styles_Flex__["a" /* default */],
        {
          __source: {
            fileName: _jsxFileName,
            lineNumber: 10
          }
        },
        __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
          __WEBPACK_IMPORTED_MODULE_3__styles_MenuAnimation__["a" /* default */],
          { showMenu: this.props.showMenu, __source: {
              fileName: _jsxFileName,
              lineNumber: 11
            }
          },
          __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_1__SlimMenu__["a" /* default */], { selectedUrl: this.props.url, __source: {
              fileName: _jsxFileName,
              lineNumber: 12
            }
          })
        ),
        __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
          __WEBPACK_IMPORTED_MODULE_4__styles_PageAnimation__["a" /* default */],
          { showMenu: this.props.showMenu, __source: {
              fileName: _jsxFileName,
              lineNumber: 14
            }
          },
          this.props.children
        )
      );
    }
  }]);

  return SideColumn;
}(__WEBPACK_IMPORTED_MODULE_0_react___default.a.Component);

/* harmony default export */ __webpack_exports__["a"] = (SideColumn);

/***/ }),

/***/ "./components/side-menu/SlimMenu.js":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_react__ = __webpack_require__("react");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_react___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_react__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__MenuItem__ = __webpack_require__("./components/side-menu/MenuItem.js");
var _jsxFileName = '/mnt/c/Users/mbg/Documents/attest/components/side-menu/SlimMenu.js';



var SlimMenu = function SlimMenu(_ref) {
  var selectedUrl = _ref.selectedUrl;
  return __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
    'div',
    {
      __source: {
        fileName: _jsxFileName,
        lineNumber: 5
      }
    },
    __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
      'ul',
      { className: 'list ma0 pa0', __source: {
          fileName: _jsxFileName,
          lineNumber: 6
        }
      },
      __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_1__MenuItem__["a" /* default */], {
        selectedUrl: selectedUrl,
        url: '/contracts',
        icon: 'fa fa-search fa-lg',
        __source: {
          fileName: _jsxFileName,
          lineNumber: 7
        }
      }),
      __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_1__MenuItem__["a" /* default */], {
        selectedUrl: selectedUrl,
        url: '/add-contract',
        icon: 'fa fa-file-text-o fa-lg',
        __source: {
          fileName: _jsxFileName,
          lineNumber: 12
        }
      }),
      __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_1__MenuItem__["a" /* default */], { selectedUrl: selectedUrl, url: '/', icon: 'fa fa-user-o fa-lg', __source: {
          fileName: _jsxFileName,
          lineNumber: 17
        }
      }),
      __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_1__MenuItem__["a" /* default */], {
        selectedUrl: selectedUrl,
        url: '/settings',
        icon: 'fa fa-cog fa-lg',
        __source: {
          fileName: _jsxFileName,
          lineNumber: 18
        }
      }),
      __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_1__MenuItem__["a" /* default */], { selectedUrl: selectedUrl, url: '/', icon: 'fa fa-bell-o fa-lg', __source: {
          fileName: _jsxFileName,
          lineNumber: 23
        }
      }),
      __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_1__MenuItem__["a" /* default */], {
        selectedUrl: selectedUrl,
        url: '/charts',
        icon: 'fa fa-line-chart fa-lg',
        __source: {
          fileName: _jsxFileName,
          lineNumber: 24
        }
      })
    )
  );
};

/* harmony default export */ __webpack_exports__["a"] = (SlimMenu);

/***/ }),

/***/ "./components/styles/Flex.js":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_styled_components__ = __webpack_require__("styled-components");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_styled_components___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_styled_components__);


var Flex = __WEBPACK_IMPORTED_MODULE_0_styled_components___default.a.div.attrs({
  className: 'flex flex-wrap'
}).withConfig({
  displayName: 'Flex',
  componentId: 's1m282w4-0'
})(['']);
/* harmony default export */ __webpack_exports__["a"] = (Flex);

/***/ }),

/***/ "./components/styles/MenuAnimation.js":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_styled_components__ = __webpack_require__("styled-components");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_styled_components___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_styled_components__);


var MenuAnimation = __WEBPACK_IMPORTED_MODULE_0_styled_components___default.a.div.attrs({
  className: 'ph3 pt4 bg-dark-gray height front fixed'
}).withConfig({
  displayName: 'MenuAnimation',
  componentId: 's11mv09s-0'
})(['transform:translateX(', ');transition:transform .3s ease-in;'], function (props) {
  return props.showMenu ? '0px' : '-60px';
});

/* harmony default export */ __webpack_exports__["a"] = (MenuAnimation);

/***/ }),

/***/ "./components/styles/PageAnimation.js":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_styled_components__ = __webpack_require__("styled-components");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_styled_components___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_styled_components__);


var PageAnimation = __WEBPACK_IMPORTED_MODULE_0_styled_components___default.a.div.attrs({
  className: 'ml2 ml0-l w-100'
}).withConfig({
  displayName: 'PageAnimation',
  componentId: 'b8qayj-0'
})(['']);

// transform: translateX(${props => (props.showMenu ? '60px' : '0px')});
// transition: transform .3s ease-in;

/* harmony default export */ __webpack_exports__["a"] = (PageAnimation);

/***/ }),

/***/ "./components/styles/Title.js":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_react__ = __webpack_require__("react");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_react___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_react__);
var _jsxFileName = '/mnt/c/Users/mbg/Documents/attest/components/styles/Title.js';

var Title = function Title(props) {
  return __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
    'div',
    { className: 'b f3', __source: {
        fileName: _jsxFileName,
        lineNumber: 1
      }
    },
    props.text
  );
};

/* harmony default export */ __webpack_exports__["a"] = (Title);

/***/ }),

/***/ "./lib/Redirect.js":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_next_router__ = __webpack_require__("next/router");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_next_router___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_next_router__);


/* harmony default export */ __webpack_exports__["a"] = (function (context, target) {
  if (context.res) {
    // server
    // 303: "See other"
    context.res.writeHead(303, { Location: target });
    context.res.end();
  } else {
    __WEBPACK_IMPORTED_MODULE_0_next_router___default.a.push(target);
  }
});

/***/ }),

/***/ "./lib/checkLoggedIn.js":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__queries_LoggedUserQuery__ = __webpack_require__("./queries/LoggedUserQuery.js");


/* harmony default export */ __webpack_exports__["a"] = (function (client) {
  return new Promise(function (resolve, reject) {
    client.query({
      query: __WEBPACK_IMPORTED_MODULE_0__queries_LoggedUserQuery__["a" /* default */]
    }).then(function (_ref) {
      var data = _ref.data;

      resolve(data.user);
    });
  });
});

/***/ }),

/***/ "./lib/initApollo.js":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_apollo_client__ = __webpack_require__("apollo-client");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_apollo_client___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_apollo_client__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_apollo_link_http__ = __webpack_require__("apollo-link-http");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_apollo_link_http___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1_apollo_link_http__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_apollo_cache_inmemory__ = __webpack_require__("apollo-cache-inmemory");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_apollo_cache_inmemory___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2_apollo_cache_inmemory__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_apollo_link__ = __webpack_require__("apollo-link");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_apollo_link___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_3_apollo_link__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_apollo_link_error__ = __webpack_require__("apollo-link-error");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_apollo_link_error___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_4_apollo_link_error__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5_isomorphic_fetch__ = __webpack_require__("isomorphic-fetch");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5_isomorphic_fetch___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_5_isomorphic_fetch__);







var apolloClient = null;

if (!process.browser) {
  global.fetch = __WEBPACK_IMPORTED_MODULE_5_isomorphic_fetch___default.a;
}

var cache = new __WEBPACK_IMPORTED_MODULE_2_apollo_cache_inmemory__["InMemoryCache"]({
  addTypename: false
});

var create = function create(initialState, _ref) {
  var getToken = _ref.getToken;

  var httpLink = Object(__WEBPACK_IMPORTED_MODULE_1_apollo_link_http__["createHttpLink"])({
    uri: process.browser ? '/graphql' : 'http://localhost:3000/graphql',
    credentials: 'same-origin'
  });

  var errorLink = Object(__WEBPACK_IMPORTED_MODULE_4_apollo_link_error__["onError"])(function (_ref2) {
    var graphQLErrors = _ref2.graphQLErrors,
        networkError = _ref2.networkError;

    if (graphQLErrors) {
      graphQLErrors.map(function (_ref3) {
        var message = _ref3.message,
            locations = _ref3.locations,
            path = _ref3.path;
        return console.log('[GraphQL error]: Message: ' + message + ', Location: ' + locations + ', Path: ' + path);
      });
    }

    if (networkError) console.log('[Network error]: ' + networkError);
  });

  var authLink = new __WEBPACK_IMPORTED_MODULE_3_apollo_link__["ApolloLink"](function (operation, forward) {
    var token = getToken();
    if (!token) token = '';
    operation.setContext({
      headers: {
        authorization: token
      }
    });
    return forward(operation);
  });

  var link = __WEBPACK_IMPORTED_MODULE_3_apollo_link__["ApolloLink"].from([authLink, errorLink, httpLink]);

  return new __WEBPACK_IMPORTED_MODULE_0_apollo_client__["ApolloClient"]({
    link: link,
    cache: cache.restore(initialState || {}),
    ssrMode: !process.browser,
    connectToDevTools: true,
    dataIdFromObject: function dataIdFromObject(object) {
      return object.id;
    }
  });
};

var initApollo = function initApollo(initialState, options) {
  if (!process.browser) {
    return create(initialState, options);
  }
  if (!apolloClient) {
    // Reuse client on the client-side
    apolloClient = create(initialState, options);
  }
  return apolloClient;
};

/* harmony default export */ __webpack_exports__["a"] = (initApollo);

/***/ }),

/***/ "./lib/withAuthLayout.js":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_babel_runtime_regenerator__ = __webpack_require__("babel-runtime/regenerator");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_babel_runtime_regenerator___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_babel_runtime_regenerator__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_react__ = __webpack_require__("react");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_react___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1_react__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__checkLoggedIn__ = __webpack_require__("./lib/checkLoggedIn.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__Redirect__ = __webpack_require__("./lib/Redirect.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__components_general_Header__ = __webpack_require__("./components/general/Header.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__components_side_menu_SideColumn__ = __webpack_require__("./components/side-menu/SideColumn.js");


var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

var _jsxFileName = '/mnt/c/Users/mbg/Documents/attest/lib/withAuthLayout.js';

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();



function _asyncToGenerator(fn) { return function () { var gen = fn.apply(this, arguments); return new Promise(function (resolve, reject) { function step(key, arg) { try { var info = gen[key](arg); var value = info.value; } catch (error) { reject(error); return; } if (info.done) { resolve(value); } else { return Promise.resolve(value).then(function (value) { step("next", value); }, function (err) { step("throw", err); }); } } return step("next"); }); }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }







var WithAuthLayout = function WithAuthLayout(ComposedComponent) {
  return function (_Component) {
    _inherits(WithAuthLayout, _Component);

    _createClass(WithAuthLayout, null, [{
      key: 'getInitialProps',
      value: function () {
        var _ref = _asyncToGenerator( /*#__PURE__*/__WEBPACK_IMPORTED_MODULE_0_babel_runtime_regenerator___default.a.mark(function _callee(context, client) {
          var user;
          return __WEBPACK_IMPORTED_MODULE_0_babel_runtime_regenerator___default.a.wrap(function _callee$(_context) {
            while (1) {
              switch (_context.prev = _context.next) {
                case 0:
                  user = false;
                  _context.next = 3;
                  return Object(__WEBPACK_IMPORTED_MODULE_2__checkLoggedIn__["a" /* default */])(client);

                case 3:
                  user = _context.sent;

                  if (user) {
                    _context.next = 8;
                    break;
                  }

                  Object(__WEBPACK_IMPORTED_MODULE_3__Redirect__["a" /* default */])(context, '/login');
                  _context.next = 9;
                  break;

                case 8:
                  return _context.abrupt('return', { user: user });

                case 9:
                case 'end':
                  return _context.stop();
              }
            }
          }, _callee, this);
        }));

        function getInitialProps(_x, _x2) {
          return _ref.apply(this, arguments);
        }

        return getInitialProps;
      }()
    }]);

    function WithAuthLayout(props) {
      _classCallCheck(this, WithAuthLayout);

      var _this = _possibleConstructorReturn(this, (WithAuthLayout.__proto__ || Object.getPrototypeOf(WithAuthLayout)).call(this, props));

      _this.toggle = function () {
        _this.setState({ showMenu: !_this.state.showMenu });
      };

      _this.state = { showMenu: false };
      return _this;
    }
    /*
    componentDidMount () {
      window.addEventListener('resize', () => {
        this.setState({ showMenu: window.innerWidth > 400 })
      })
    }
    */


    _createClass(WithAuthLayout, [{
      key: 'render',
      value: function render() {
        return __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement(
          'div',
          {
            __source: {
              fileName: _jsxFileName,
              lineNumber: 34
            }
          },
          __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_4__components_general_Header__["a" /* default */], {
            toggle: this.toggle,
            client: this.props.client,
            user: this.props.user,
            __source: {
              fileName: _jsxFileName,
              lineNumber: 35
            }
          }),
          __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement(
            __WEBPACK_IMPORTED_MODULE_5__components_side_menu_SideColumn__["a" /* default */],
            {
              url: this.props.url.pathname,
              showMenu: this.state.showMenu,
              __source: {
                fileName: _jsxFileName,
                lineNumber: 40
              }
            },
            __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement(ComposedComponent, _extends({ showMenu: this.state.showMenu }, this.props, {
              __source: {
                fileName: _jsxFileName,
                lineNumber: 44
              }
            }))
          )
        );
      }
    }]);

    return WithAuthLayout;
  }(__WEBPACK_IMPORTED_MODULE_1_react__["Component"]);
};

/* harmony default export */ __webpack_exports__["a"] = (WithAuthLayout);

/***/ }),

/***/ "./lib/withData.js":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_babel_runtime_regenerator__ = __webpack_require__("babel-runtime/regenerator");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_babel_runtime_regenerator___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_babel_runtime_regenerator__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_react__ = __webpack_require__("react");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_react___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1_react__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_prop_types__ = __webpack_require__("prop-types");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_prop_types___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2_prop_types__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_react_apollo__ = __webpack_require__("react-apollo");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_react_apollo___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_3_react_apollo__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_next_head__ = __webpack_require__("next/head");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_next_head___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_4_next_head__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5_cookie__ = __webpack_require__("cookie");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5_cookie___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_5_cookie__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__initApollo__ = __webpack_require__("./lib/initApollo.js");


var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

var _jsxFileName = '/mnt/c/Users/mbg/Documents/attest/lib/withData.js';

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _asyncToGenerator(fn) { return function () { var gen = fn.apply(this, arguments); return new Promise(function (resolve, reject) { function step(key, arg) { try { var info = gen[key](arg); var value = info.value; } catch (error) { reject(error); return; } if (info.done) { resolve(value); } else { return Promise.resolve(value).then(function (value) { step("next", value); }, function (err) { step("throw", err); }); } } return step("next"); }); }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }








function parseCookies() {
  var ctx = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {};
  var options = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : {};

  return __WEBPACK_IMPORTED_MODULE_5_cookie___default.a.parse(ctx.req ? ctx.req.headers.cookie ? ctx.req.headers.cookie : '' : document.cookie, options);
}

var WithData = function WithData(ComposedComponent) {
  var _class, _temp;

  return _temp = _class = function (_React$Component) {
    _inherits(WithData, _React$Component);

    _createClass(WithData, null, [{
      key: 'getInitialProps',
      value: function () {
        var _ref = _asyncToGenerator( /*#__PURE__*/__WEBPACK_IMPORTED_MODULE_0_babel_runtime_regenerator___default.a.mark(function _callee(context) {
          var serverState, apollo, composedInitialProps, app;
          return __WEBPACK_IMPORTED_MODULE_0_babel_runtime_regenerator___default.a.wrap(function _callee$(_context) {
            while (1) {
              switch (_context.prev = _context.next) {
                case 0:
                  serverState = {};
                  // Setup a server-side one-time-use apollo client for initial props and
                  // rendering (on server)

                  apollo = Object(__WEBPACK_IMPORTED_MODULE_6__initApollo__["a" /* default */])({}, { getToken: function getToken() {
                      return parseCookies(context).token;
                    } });
                  // Evaluate the composed component's getInitialProps()

                  composedInitialProps = {};

                  if (!ComposedComponent.getInitialProps) {
                    _context.next = 7;
                    break;
                  }

                  _context.next = 6;
                  return ComposedComponent.getInitialProps(context, apollo);

                case 6:
                  composedInitialProps = _context.sent;

                case 7:
                  if (process.browser) {
                    _context.next = 18;
                    break;
                  }

                  _context.prev = 8;

                  // Run all GraphQL queries
                  app = __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement(
                    __WEBPACK_IMPORTED_MODULE_3_react_apollo__["ApolloProvider"],
                    { client: apollo, __source: {
                        fileName: _jsxFileName,
                        lineNumber: 46
                      }
                    },
                    __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement(ComposedComponent, _extends({}, composedInitialProps, {
                      __source: {
                        fileName: _jsxFileName,
                        lineNumber: 47
                      }
                    }))
                  );
                  _context.next = 12;
                  return Object(__WEBPACK_IMPORTED_MODULE_3_react_apollo__["getDataFromTree"])(app, {
                    router: {
                      query: context.query,
                      pathname: context.pathname,
                      asPath: context.asPath
                    }
                  });

                case 12:
                  _context.next = 16;
                  break;

                case 14:
                  _context.prev = 14;
                  _context.t0 = _context['catch'](8);

                case 16:
                  // getDataFromTree does not call componentWillUnmount
                  // head side effect therefore need to be cleared manually
                  __WEBPACK_IMPORTED_MODULE_4_next_head___default.a.rewind();
                  // Extract query data from the Apollo's store
                  serverState = apollo.cache.extract();

                case 18:
                  return _context.abrupt('return', _extends({
                    serverState: serverState
                  }, composedInitialProps));

                case 19:
                case 'end':
                  return _context.stop();
              }
            }
          }, _callee, this, [[8, 14]]);
        }));

        function getInitialProps(_x3) {
          return _ref.apply(this, arguments);
        }

        return getInitialProps;
      }()
    }]);

    function WithData(props) {
      _classCallCheck(this, WithData);

      // Note: Apollo should never be used on the server side beyond the initial
      // render within `getInitialProps()` above (since the entire prop tree
      // will be initialized there), meaning the below will only ever be
      // executed on the client.
      var _this = _possibleConstructorReturn(this, (WithData.__proto__ || Object.getPrototypeOf(WithData)).call(this, props));

      _this.apollo = Object(__WEBPACK_IMPORTED_MODULE_6__initApollo__["a" /* default */])(_this.props.serverState, {
        getToken: function getToken() {
          return parseCookies().token;
        }
      });
      return _this;
    }

    _createClass(WithData, [{
      key: 'render',
      value: function render() {
        return __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement(
          __WEBPACK_IMPORTED_MODULE_3_react_apollo__["ApolloProvider"],
          { client: this.apollo, __source: {
              fileName: _jsxFileName,
              lineNumber: 87
            }
          },
          __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement(ComposedComponent, _extends({}, this.props, {
            __source: {
              fileName: _jsxFileName,
              lineNumber: 88
            }
          }))
        );
      }
    }]);

    return WithData;
  }(__WEBPACK_IMPORTED_MODULE_1_react___default.a.Component), _class.displayName = 'WithData(' + ComposedComponent.displayName + ')', _class.propTypes = {
    serverState: __WEBPACK_IMPORTED_MODULE_2_prop_types___default.a.object.isRequired
  }, _temp;
};

/* harmony default export */ __webpack_exports__["a"] = (WithData);

/***/ }),

/***/ "./lib/withLayout.js":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_babel_runtime_regenerator__ = __webpack_require__("babel-runtime/regenerator");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_babel_runtime_regenerator___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_babel_runtime_regenerator__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_react__ = __webpack_require__("react");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_react___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1_react__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_next_dist_lib_utils__ = __webpack_require__("next/dist/lib/utils");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_next_dist_lib_utils___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2_next_dist_lib_utils__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__components_general_Header__ = __webpack_require__("./components/general/Header.js");


var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

var _jsxFileName = '/mnt/c/Users/mbg/Documents/attest/lib/withLayout.js';

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();



function _asyncToGenerator(fn) { return function () { var gen = fn.apply(this, arguments); return new Promise(function (resolve, reject) { function step(key, arg) { try { var info = gen[key](arg); var value = info.value; } catch (error) { reject(error); return; } if (info.done) { resolve(value); } else { return Promise.resolve(value).then(function (value) { step("next", value); }, function (err) { step("throw", err); }); } } return step("next"); }); }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }





var WithLayout = function WithLayout(ComposedComponent) {
  return function (_Component) {
    _inherits(WithLayout, _Component);

    function WithLayout() {
      _classCallCheck(this, WithLayout);

      return _possibleConstructorReturn(this, (WithLayout.__proto__ || Object.getPrototypeOf(WithLayout)).apply(this, arguments));
    }

    _createClass(WithLayout, [{
      key: 'render',
      value: function render() {
        return __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement(
          'div',
          {
            __source: {
              fileName: _jsxFileName,
              lineNumber: 12
            }
          },
          __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_3__components_general_Header__["a" /* default */], { user: this.props.user, __source: {
              fileName: _jsxFileName,
              lineNumber: 13
            }
          }),
          __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement(ComposedComponent, _extends({}, this.props, {
            __source: {
              fileName: _jsxFileName,
              lineNumber: 14
            }
          }))
        );
      }
    }], [{
      key: 'getInitialProps',
      value: function () {
        var _ref = _asyncToGenerator( /*#__PURE__*/__WEBPACK_IMPORTED_MODULE_0_babel_runtime_regenerator___default.a.mark(function _callee(ctx) {
          return __WEBPACK_IMPORTED_MODULE_0_babel_runtime_regenerator___default.a.wrap(function _callee$(_context) {
            while (1) {
              switch (_context.prev = _context.next) {
                case 0:
                  return _context.abrupt('return', Object(__WEBPACK_IMPORTED_MODULE_2_next_dist_lib_utils__["loadGetInitialProps"])(ComposedComponent, ctx));

                case 1:
                case 'end':
                  return _context.stop();
              }
            }
          }, _callee, this);
        }));

        function getInitialProps(_x) {
          return _ref.apply(this, arguments);
        }

        return getInitialProps;
      }()
    }]);

    return WithLayout;
  }(__WEBPACK_IMPORTED_MODULE_1_react__["Component"]);
};

/* harmony default export */ __webpack_exports__["a"] = (WithLayout);

/***/ }),

/***/ "./lib/withUser.js":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_babel_runtime_regenerator__ = __webpack_require__("babel-runtime/regenerator");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_babel_runtime_regenerator___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_babel_runtime_regenerator__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_react__ = __webpack_require__("react");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_react___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1_react__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__checkLoggedIn__ = __webpack_require__("./lib/checkLoggedIn.js");


var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

var _jsxFileName = '/mnt/c/Users/mbg/Documents/attest/lib/withUser.js';

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _asyncToGenerator(fn) { return function () { var gen = fn.apply(this, arguments); return new Promise(function (resolve, reject) { function step(key, arg) { try { var info = gen[key](arg); var value = info.value; } catch (error) { reject(error); return; } if (info.done) { resolve(value); } else { return Promise.resolve(value).then(function (value) { step("next", value); }, function (err) { step("throw", err); }); } } return step("next"); }); }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }




var WithUser = function WithUser(ComposedComponent) {
  return function (_React$Component) {
    _inherits(WithUser, _React$Component);

    function WithUser() {
      _classCallCheck(this, WithUser);

      return _possibleConstructorReturn(this, (WithUser.__proto__ || Object.getPrototypeOf(WithUser)).apply(this, arguments));
    }

    _createClass(WithUser, [{
      key: 'render',
      value: function render() {
        return __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement(ComposedComponent, _extends({}, this.props, { user: this.props.user, __source: {
            fileName: _jsxFileName,
            lineNumber: 13
          }
        }));
      }
    }], [{
      key: 'getInitialProps',
      value: function () {
        var _ref = _asyncToGenerator( /*#__PURE__*/__WEBPACK_IMPORTED_MODULE_0_babel_runtime_regenerator___default.a.mark(function _callee(context, client) {
          var user;
          return __WEBPACK_IMPORTED_MODULE_0_babel_runtime_regenerator___default.a.wrap(function _callee$(_context) {
            while (1) {
              switch (_context.prev = _context.next) {
                case 0:
                  user = false;
                  _context.next = 3;
                  return Object(__WEBPACK_IMPORTED_MODULE_2__checkLoggedIn__["a" /* default */])(client);

                case 3:
                  user = _context.sent;
                  return _context.abrupt('return', { user: user });

                case 5:
                case 'end':
                  return _context.stop();
              }
            }
          }, _callee, this);
        }));

        function getInitialProps(_x, _x2) {
          return _ref.apply(this, arguments);
        }

        return getInitialProps;
      }()
    }]);

    return WithUser;
  }(__WEBPACK_IMPORTED_MODULE_1_react___default.a.Component);
};

/* harmony default export */ __webpack_exports__["a"] = (WithUser);

/***/ }),

/***/ "./node_modules/react-vis/dist/style.css":
/***/ (function(module, exports) {



/***/ }),

/***/ "./pages/charts.js":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_react__ = __webpack_require__("react");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_react___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_react__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__components_charts_ChartsContainer__ = __webpack_require__("./components/charts/ChartsContainer.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__components_Page__ = __webpack_require__("./components/Page.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__node_modules_react_vis_dist_style_css__ = __webpack_require__("./node_modules/react-vis/dist/style.css");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__node_modules_react_vis_dist_style_css___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_3__node_modules_react_vis_dist_style_css__);
var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

var _jsxFileName = '/mnt/c/Users/mbg/Documents/attest/pages/charts.js';





var ChartsPage = Object(__WEBPACK_IMPORTED_MODULE_2__components_Page__["a" /* AuthPage */])(function (props) {
  return __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_1__components_charts_ChartsContainer__["a" /* default */], _extends({}, props, {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 5
    }
  }));
});

/* harmony default export */ __webpack_exports__["default"] = (ChartsPage);

/***/ }),

/***/ "./queries/ContractsQuery.js":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_graphql_tag__ = __webpack_require__("graphql-tag");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_graphql_tag___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_graphql_tag__);
var _templateObject = _taggedTemplateLiteral(['\nquery {\n  contracts {\n    id\n    expiryDate\n    effectiveDate\n    executionDate\n    internalParties\n    externalParties\n    statuses {\n      name\n      color\n      date\n    }\n    tags {\n      name\n      color\n    }\n    businessUnit {\n      name\n      color\n    }\n    currentStatus {\n      name\n      color\n      date\n    }\n    assignedTo {\n      name\n      email\n      id\n    }\n    \n  }\n  currentTags {\n    name\n    color\n    checked\n  }\n  currentStatuses {\n    name\n    color\n    checked\n  }\n  currentBusinessUnits {\n    name\n    color\n    checked\n  }\n  currentLawyers\n  masterEntity {\n    name\n    businessUnits {\n      name\n      color\n    }\n    statuses {\n      name\n      color\n    }\n    tags {\n      name\n      color\n    }\n  }\n  allUsers {\n    name\n    email\n    id\n  }\n}\n'], ['\nquery {\n  contracts {\n    id\n    expiryDate\n    effectiveDate\n    executionDate\n    internalParties\n    externalParties\n    statuses {\n      name\n      color\n      date\n    }\n    tags {\n      name\n      color\n    }\n    businessUnit {\n      name\n      color\n    }\n    currentStatus {\n      name\n      color\n      date\n    }\n    assignedTo {\n      name\n      email\n      id\n    }\n    \n  }\n  currentTags {\n    name\n    color\n    checked\n  }\n  currentStatuses {\n    name\n    color\n    checked\n  }\n  currentBusinessUnits {\n    name\n    color\n    checked\n  }\n  currentLawyers\n  masterEntity {\n    name\n    businessUnits {\n      name\n      color\n    }\n    statuses {\n      name\n      color\n    }\n    tags {\n      name\n      color\n    }\n  }\n  allUsers {\n    name\n    email\n    id\n  }\n}\n']);

function _taggedTemplateLiteral(strings, raw) { return Object.freeze(Object.defineProperties(strings, { raw: { value: Object.freeze(raw) } })); }



/* harmony default export */ __webpack_exports__["a"] = (__WEBPACK_IMPORTED_MODULE_0_graphql_tag___default()(_templateObject));

/***/ }),

/***/ "./queries/LoggedUserQuery.js":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_graphql_tag__ = __webpack_require__("graphql-tag");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_graphql_tag___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_graphql_tag__);
var _templateObject = _taggedTemplateLiteral(['\n  query user {\n    user {\n      id\n      email\n    }\n  }\n'], ['\n  query user {\n    user {\n      id\n      email\n    }\n  }\n']);

function _taggedTemplateLiteral(strings, raw) { return Object.freeze(Object.defineProperties(strings, { raw: { value: Object.freeze(raw) } })); }



/* harmony default export */ __webpack_exports__["a"] = (__WEBPACK_IMPORTED_MODULE_0_graphql_tag___default()(_templateObject));

/***/ }),

/***/ 3:
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__("./pages/charts.js");


/***/ }),

/***/ "apollo-cache-inmemory":
/***/ (function(module, exports) {

module.exports = require("apollo-cache-inmemory");

/***/ }),

/***/ "apollo-client":
/***/ (function(module, exports) {

module.exports = require("apollo-client");

/***/ }),

/***/ "apollo-link":
/***/ (function(module, exports) {

module.exports = require("apollo-link");

/***/ }),

/***/ "apollo-link-error":
/***/ (function(module, exports) {

module.exports = require("apollo-link-error");

/***/ }),

/***/ "apollo-link-http":
/***/ (function(module, exports) {

module.exports = require("apollo-link-http");

/***/ }),

/***/ "babel-runtime/regenerator":
/***/ (function(module, exports) {

module.exports = require("babel-runtime/regenerator");

/***/ }),

/***/ "classnames":
/***/ (function(module, exports) {

module.exports = require("classnames");

/***/ }),

/***/ "cookie":
/***/ (function(module, exports) {

module.exports = require("cookie");

/***/ }),

/***/ "d3-shape":
/***/ (function(module, exports) {

module.exports = require("d3-shape");

/***/ }),

/***/ "graphql-tag":
/***/ (function(module, exports) {

module.exports = require("graphql-tag");

/***/ }),

/***/ "isomorphic-fetch":
/***/ (function(module, exports) {

module.exports = require("isomorphic-fetch");

/***/ }),

/***/ "lodash":
/***/ (function(module, exports) {

module.exports = require("lodash");

/***/ }),

/***/ "next/dist/lib/utils":
/***/ (function(module, exports) {

module.exports = require("next/dist/lib/utils");

/***/ }),

/***/ "next/head":
/***/ (function(module, exports) {

module.exports = require("next/head");

/***/ }),

/***/ "next/link":
/***/ (function(module, exports) {

module.exports = require("next/link");

/***/ }),

/***/ "next/router":
/***/ (function(module, exports) {

module.exports = require("next/router");

/***/ }),

/***/ "prop-types":
/***/ (function(module, exports) {

module.exports = require("prop-types");

/***/ }),

/***/ "react":
/***/ (function(module, exports) {

module.exports = require("react");

/***/ }),

/***/ "react-apollo":
/***/ (function(module, exports) {

module.exports = require("react-apollo");

/***/ }),

/***/ "react-vis":
/***/ (function(module, exports) {

module.exports = require("react-vis");

/***/ }),

/***/ "recompose":
/***/ (function(module, exports) {

module.exports = require("recompose");

/***/ }),

/***/ "styled-components":
/***/ (function(module, exports) {

module.exports = require("styled-components");

/***/ })

/******/ });
//# sourceMappingURL=charts.js.map