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
/******/ 	return __webpack_require__(__webpack_require__.s = 2);
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

/***/ "./components/add-contract/AddContract.js":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_react__ = __webpack_require__("react");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_react___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_react__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__general_Input__ = __webpack_require__("./components/general/Input.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_classnames__ = __webpack_require__("classnames");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_classnames___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2_classnames__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__general_CheckBox__ = __webpack_require__("./components/general/CheckBox.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__general_Radio__ = __webpack_require__("./components/general/Radio.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__styles_FormSection__ = __webpack_require__("./components/styles/FormSection.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__styles_FormButton__ = __webpack_require__("./components/styles/FormButton.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__styles_FormTitle__ = __webpack_require__("./components/styles/FormTitle.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__styles_SectionTitle__ = __webpack_require__("./components/styles/SectionTitle.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9__styles_ClearFix__ = __webpack_require__("./components/styles/ClearFix.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_10__general_Select__ = __webpack_require__("./components/general/Select.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_11_react_datepicker__ = __webpack_require__("react-datepicker");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_11_react_datepicker___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_11_react_datepicker__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_12__general_Loading__ = __webpack_require__("./components/general/Loading.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_13__styles_Flex__ = __webpack_require__("./components/styles/Flex.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_14__side_menu_SideColumn__ = __webpack_require__("./components/side-menu/SideColumn.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_15__styles_Box__ = __webpack_require__("./components/styles/Box.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_16_lodash__ = __webpack_require__("lodash");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_16_lodash___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_16_lodash__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_17_moment__ = __webpack_require__("moment");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_17_moment___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_17_moment__);
var _jsxFileName = '/mnt/c/Users/mbg/Documents/attest/components/add-contract/AddContract.js';

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();



function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }




















var AddContractForm = function (_react$Component) {
  _inherits(AddContractForm, _react$Component);

  function AddContractForm(props) {
    var _contract;

    _classCallCheck(this, AddContractForm);

    var _this = _possibleConstructorReturn(this, (AddContractForm.__proto__ || Object.getPrototypeOf(AddContractForm)).call(this, props));

    _this.processTags = function (allTags, currentTags) {
      var result = allTags.map(function (tag) {
        var checked = false;
        currentTags.map(function (a) {
          if (a.name === tag.name) {
            checked = true;
          }
        });
        return {
          checked: checked,
          name: tag.name,
          color: tag.color
        };
      });
      return result;
    };

    _this.handleExecutionDate = function (executionDate) {
      var contract = _extends({}, _this.state.contract, { executionDate: executionDate });
      _this.setState({ contract: contract });
    };

    _this.handleEffectiveDate = function (effectiveDate) {
      var contract = _extends({}, _this.state.contract, { effectiveDate: effectiveDate });
      _this.setState({ contract: contract });
    };

    _this.handleExpiryDate = function (expiryDate) {
      var contract = _extends({}, _this.state.contract, { expiryDate: expiryDate });
      _this.setState({ contract: contract });
    };

    _this.validate = function () {
      var isError = false;
      var errors = {
        externalPartyError: ''
      };
      if (_this.state.contract.externalParties.length < 1) {
        isError = true;
        errors.externalPartyError = 'Please provide an external party';
      }
      _this.setState(_extends({}, _this.state, errors));
      return isError;
    };

    _this.handleClick = function (e) {
      e.preventDefault();
      var err = _this.validate();
      if (!err) {
        _this.props.handleContract(_this.state.contract, _this.props.closeModal);
      }
    };

    _this.saveToState = function (e) {
      var contract = _this.state.contract;
      var _e$target = e.target,
          name = _e$target.name,
          value = _e$target.value,
          type = _e$target.type;

      contract.externalParties = [value];
      _this.setState({ contract: contract });
    };

    _this.deleteItem = function (tag, index) {
      var contract = _this.state.contract;

      contract.tags = __WEBPACK_IMPORTED_MODULE_16_lodash___default.a.without(contract.tags, tag);
      _this.setState({ contract: contract });
    };

    _this.handleStatusChange = function (e) {
      var contract = _this.state.contract;

      var date = new Date().getTime();
      var newStatus = _extends({}, e, { date: date });
      contract.statuses.push(newStatus);
      contract.currentStatus = newStatus;
      _this.setState({ selectedStatus: e.name, contract: contract });
    };

    _this.handleLawyerChange = function (e) {
      var email = e.target.value;
      var contract = _this.state.contract;

      var lawyers = _this.props.allUsers;
      lawyers.forEach(function (lawyer) {
        if (lawyer.email == email) {
          contract.assignedTo = lawyer;
          _this.setState({ contract: contract, selectedLawyer: email });
        }
      });
    };

    _this.handleBusinessUnitChange = function (e) {
      var selectedUnit = e.target.value;
      var contract = _this.state.contract;
      var businessUnits = _this.props.masterEntity.businessUnits;

      businessUnits.forEach(function (unit) {
        if (selectedUnit == unit.name) {
          contract.businessUnit = { name: selectedUnit };
          _this.setState({
            contract: contract,
            selectedBusinessUnit: selectedUnit
          });
        }
      });
    };

    _this.handleCheckboxChange = function (label) {
      var tags = _this.props.masterEntity.tags;

      var selectedTags = _this.state.contract.tags;

      var relevantTag = __WEBPACK_IMPORTED_MODULE_16_lodash___default.a.find(tags, { name: label });
      if (__WEBPACK_IMPORTED_MODULE_16_lodash___default.a.find(selectedTags, { name: label })) {
        __WEBPACK_IMPORTED_MODULE_16_lodash___default.a.remove(selectedTags, { name: label });
      } else {
        selectedTags.push(relevantTag);
      }
      var contract = _this.state.contract;

      contract.tags = selectedTags;
      _this.setState({ contract: contract });
    };

    _this.state = {
      selectedStatus: '',
      selectedBusinessUnit: '',
      selectedLawyer: '',
      initialTags: [],
      externalPartyError: '',
      lawyers: props.allUsers,
      tags: props.masterEntity.tags,
      statuses: props.masterEntity.statuses,
      businessUnits: props.masterEntity.businessUnits,
      contract: (_contract = {
        executionDate: null,
        effectiveDate: null,
        expiryDate: null,
        internalParties: [],
        externalParties: [],
        currentStatus: [],
        statuses: [],
        tags: [],
        businessUnit: ''
      }, _defineProperty(_contract, 'currentStatus', ''), _defineProperty(_contract, 'assignedTo', { name: '', email: '', id: '' }), _contract)
    };
    return _this;
  }

  _createClass(AddContractForm, [{
    key: 'createDate',
    value: function createDate(num) {
      if (num) return __WEBPACK_IMPORTED_MODULE_17_moment___default()(num);else return null;
    }
  }, {
    key: 'componentWillMount',
    value: function componentWillMount() {
      if (this.props.contract) {
        var contract = this.props.contract;


        this.setState({
          contract: contract,
          selectedStatus: contract.currentStatus.name,
          selectedLawyer: contract.assignedTo.email,
          selectedBusinessUnit: contract.businessUnit.name,
          initialTags: contract.tags
        });
      }
    }
  }, {
    key: 'render',
    value: function render() {
      var _this2 = this;

      var _state = this.state,
          contract = _state.contract,
          selectedStatus = _state.selectedStatus,
          selectedLawyer = _state.selectedLawyer,
          selectedBusinessUnit = _state.selectedBusinessUnit,
          initialTags = _state.initialTags,
          businessUnits = _state.businessUnits,
          lawyers = _state.lawyers,
          tags = _state.tags,
          statuses = _state.statuses;
      var externalParties = contract.externalParties,
          executionDate = contract.executionDate,
          expiryDate = contract.expiryDate,
          effectiveDate = contract.effectiveDate;


      var businessUnitSelect = null;
      if (businessUnits && businessUnits.length) {
        businessUnitSelect = __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
          'div',
          { className: 'mb2', __source: {
              fileName: _jsxFileName,
              lineNumber: 205
            }
          },
          __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
            'select',
            {
              className: 'f4 pa1 font pa2 mb2 bb bw1 b--black-20',
              value: selectedBusinessUnit,
              key: selectedBusinessUnit,
              onChange: this.handleBusinessUnitChange,
              __source: {
                fileName: _jsxFileName,
                lineNumber: 206
              }
            },
            businessUnits.map(function (unit) {
              return __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
                'option',
                { key: unit.name, value: unit.name, __source: {
                    fileName: _jsxFileName,
                    lineNumber: 213
                  }
                },
                unit.name
              );
            })
          )
        );
      }

      var tagInputs = null;
      if (tags) {
        tags = __WEBPACK_IMPORTED_MODULE_16_lodash___default.a.uniqBy(__WEBPACK_IMPORTED_MODULE_16_lodash___default.a.concat(tags, initialTags), 'name');
        var updatedTags = this.processTags(tags, contract.tags);
        tagInputs = updatedTags.map(function (t, i) {
          return __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
            'div',
            { key: i, className: 'list', __source: {
                fileName: _jsxFileName,
                lineNumber: 227
              }
            },
            __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_3__general_CheckBox__["a" /* default */], {
              handleCheckboxChange: _this2.handleCheckboxChange,
              checked: t.checked,
              label: t.name,
              value: t.name,
              color: t.color,
              __source: {
                fileName: _jsxFileName,
                lineNumber: 228
              }
            })
          );
        });
      }

      return __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
        'form',
        {
          __source: {
            fileName: _jsxFileName,
            lineNumber: 240
          }
        },
        this.props.closeModal && __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
          'span',
          { onClick: this.props.closeModal, className: 'fr', __source: {
              fileName: _jsxFileName,
              lineNumber: 242
            }
          },
          __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement('i', { className: 'fa fa-times fa-lg', __source: {
              fileName: _jsxFileName,
              lineNumber: 243
            }
          })
        ),
        __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_7__styles_FormTitle__["a" /* default */], { title: this.props.title, __source: {
            fileName: _jsxFileName,
            lineNumber: 245
          }
        }),
        __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
          __WEBPACK_IMPORTED_MODULE_5__styles_FormSection__["a" /* default */],
          {
            __source: {
              fileName: _jsxFileName,
              lineNumber: 246
            }
          },
          __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_1__general_Input__["a" /* default */], {
            onChange: this.saveToState,
            value: externalParties,
            label: 'External party',
            name: 'externalParty',
            error: this.state.externalPartyError,
            __source: {
              fileName: _jsxFileName,
              lineNumber: 247
            }
          })
        ),
        __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_9__styles_ClearFix__["a" /* default */], {
          __source: {
            fileName: _jsxFileName,
            lineNumber: 255
          }
        }),
        __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
          __WEBPACK_IMPORTED_MODULE_5__styles_FormSection__["a" /* default */],
          {
            __source: {
              fileName: _jsxFileName,
              lineNumber: 256
            }
          },
          __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_8__styles_SectionTitle__["a" /* default */], { text: 'Tags', __source: {
              fileName: _jsxFileName,
              lineNumber: 257
            }
          }),
          __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
            'div',
            { className: 'mt2', __source: {
                fileName: _jsxFileName,
                lineNumber: 258
              }
            },
            tagInputs.length > 0 ? tagInputs : __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
              'div',
              { className: 'mt2', __source: {
                  fileName: _jsxFileName,
                  lineNumber: 261
                }
              },
              'Add tags here'
            )
          )
        ),
        __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_9__styles_ClearFix__["a" /* default */], {
          __source: {
            fileName: _jsxFileName,
            lineNumber: 264
          }
        }),
        __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
          __WEBPACK_IMPORTED_MODULE_5__styles_FormSection__["a" /* default */],
          {
            __source: {
              fileName: _jsxFileName,
              lineNumber: 265
            }
          },
          __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_8__styles_SectionTitle__["a" /* default */], { text: 'Status', __source: {
              fileName: _jsxFileName,
              lineNumber: 266
            }
          }),
          __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
            'div',
            { className: 'mt2', __source: {
                fileName: _jsxFileName,
                lineNumber: 267
              }
            },
            statuses && statuses.length ? __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_4__general_Radio__["a" /* default */], {
              handleChange: this.handleStatusChange,
              selectedItem: selectedStatus,
              items: statuses,
              __source: {
                fileName: _jsxFileName,
                lineNumber: 269
              }
            }) : __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
              'div',
              {
                __source: {
                  fileName: _jsxFileName,
                  lineNumber: 274
                }
              },
              'Add statuses here'
            )
          )
        ),
        __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_9__styles_ClearFix__["a" /* default */], {
          __source: {
            fileName: _jsxFileName,
            lineNumber: 277
          }
        }),
        __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
          __WEBPACK_IMPORTED_MODULE_5__styles_FormSection__["a" /* default */],
          {
            __source: {
              fileName: _jsxFileName,
              lineNumber: 278
            }
          },
          __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_8__styles_SectionTitle__["a" /* default */], { text: 'Execution date', __source: {
              fileName: _jsxFileName,
              lineNumber: 279
            }
          }),
          __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_11_react_datepicker___default.a, {
            className: 'font f4 mt2 pa1 mb2 bb bw1 b--black-20',
            selected: this.createDate(executionDate),
            onChange: this.handleExecutionDate,
            showMonthDropdown: true,
            showYearDropdown: true,
            dateFormat: 'DD/MM/YYYY',
            __source: {
              fileName: _jsxFileName,
              lineNumber: 280
            }
          })
        ),
        __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_9__styles_ClearFix__["a" /* default */], {
          __source: {
            fileName: _jsxFileName,
            lineNumber: 289
          }
        }),
        __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
          __WEBPACK_IMPORTED_MODULE_5__styles_FormSection__["a" /* default */],
          {
            __source: {
              fileName: _jsxFileName,
              lineNumber: 290
            }
          },
          __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_8__styles_SectionTitle__["a" /* default */], { text: 'Effective date', __source: {
              fileName: _jsxFileName,
              lineNumber: 291
            }
          }),
          __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_11_react_datepicker___default.a, {
            className: 'font f4 mt2 pa1 mb2 bb bw1 b--black-20',
            selected: this.createDate(effectiveDate),
            onChange: this.handleEffectiveDate,
            showMonthDropdown: true,
            showYearDropdown: true,
            dateFormat: 'DD/MM/YYYY',
            __source: {
              fileName: _jsxFileName,
              lineNumber: 292
            }
          })
        ),
        __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_9__styles_ClearFix__["a" /* default */], {
          __source: {
            fileName: _jsxFileName,
            lineNumber: 301
          }
        }),
        __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
          __WEBPACK_IMPORTED_MODULE_5__styles_FormSection__["a" /* default */],
          {
            __source: {
              fileName: _jsxFileName,
              lineNumber: 302
            }
          },
          __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_8__styles_SectionTitle__["a" /* default */], { text: 'Expiry date', __source: {
              fileName: _jsxFileName,
              lineNumber: 303
            }
          }),
          __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_11_react_datepicker___default.a, {
            className: 'font f4 mt2 pa1 mb2 bb bw1 b--black-20',
            selected: this.createDate(expiryDate),
            onChange: this.handleExpiryDate,
            showMonthDropdown: true,
            showYearDropdown: true,
            dateFormat: 'DD/MM/YYYY',
            __source: {
              fileName: _jsxFileName,
              lineNumber: 304
            }
          })
        ),
        __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_9__styles_ClearFix__["a" /* default */], {
          __source: {
            fileName: _jsxFileName,
            lineNumber: 313
          }
        }),
        __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
          __WEBPACK_IMPORTED_MODULE_5__styles_FormSection__["a" /* default */],
          {
            __source: {
              fileName: _jsxFileName,
              lineNumber: 314
            }
          },
          __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_8__styles_SectionTitle__["a" /* default */], { text: 'Business unit', __source: {
              fileName: _jsxFileName,
              lineNumber: 315
            }
          }),
          businessUnitSelect || __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
            'div',
            { className: 'mt1', __source: {
                fileName: _jsxFileName,
                lineNumber: 317
              }
            },
            'Add business units here'
          )
        ),
        __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_9__styles_ClearFix__["a" /* default */], {
          __source: {
            fileName: _jsxFileName,
            lineNumber: 319
          }
        }),
        __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
          __WEBPACK_IMPORTED_MODULE_5__styles_FormSection__["a" /* default */],
          {
            __source: {
              fileName: _jsxFileName,
              lineNumber: 320
            }
          },
          __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_8__styles_SectionTitle__["a" /* default */], { text: 'Lawyer', __source: {
              fileName: _jsxFileName,
              lineNumber: 321
            }
          }),
          lawyers && lawyers.length > 0 ? __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_10__general_Select__["a" /* default */], {
            selectedItem: selectedLawyer,
            items: lawyers,
            handleChange: this.handleLawyerChange,
            __source: {
              fileName: _jsxFileName,
              lineNumber: 323
            }
          }) : __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
            'div',
            { className: 'mt3 f4', __source: {
                fileName: _jsxFileName,
                lineNumber: 328
              }
            },
            'Add lawyers here'
          )
        ),
        __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_9__styles_ClearFix__["a" /* default */], {
          __source: {
            fileName: _jsxFileName,
            lineNumber: 330
          }
        }),
        __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_6__styles_FormButton__["a" /* default */], { onClick: this.handleClick, text: 'SUBMIT', __source: {
            fileName: _jsxFileName,
            lineNumber: 331
          }
        }),
        __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_9__styles_ClearFix__["a" /* default */], {
          __source: {
            fileName: _jsxFileName,
            lineNumber: 332
          }
        })
      );
    }
  }]);

  return AddContractForm;
}(__WEBPACK_IMPORTED_MODULE_0_react___default.a.Component);

/* harmony default export */ __webpack_exports__["a"] = (AddContractForm);

/***/ }),

/***/ "./components/contracts/BusinessUnit.js":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_react__ = __webpack_require__("react");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_react___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_react__);
var _jsxFileName = '/mnt/c/Users/mbg/Documents/attest/components/contracts/BusinessUnit.js';

var BusinessUnit = function BusinessUnit(props) {
  return __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
    'div',
    {
      __source: {
        fileName: _jsxFileName,
        lineNumber: 2
      }
    },
    props ? __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
      'div',
      {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 4
        }
      },
      __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
        'span',
        {
          __source: {
            fileName: _jsxFileName,
            lineNumber: 5
          }
        },
        __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement('i', { className: 'mr2 mt1 fa fa-building-o', __source: {
            fileName: _jsxFileName,
            lineNumber: 6
          }
        }),
        props.businessUnit.name
      )
    ) : __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement('div', {
      __source: {
        fileName: _jsxFileName,
        lineNumber: 10
      }
    })
  );
};

/* harmony default export */ __webpack_exports__["a"] = (BusinessUnit);

/***/ }),

/***/ "./components/contracts/ContractBox.js":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__DeleteButton__ = __webpack_require__("./components/contracts/DeleteButton.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__modals_EditContractContainer__ = __webpack_require__("./modals/EditContractContainer.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_react_moment__ = __webpack_require__("react-moment");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_react_moment___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2_react_moment__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_react__ = __webpack_require__("react");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_react___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_3_react__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_lodash__ = __webpack_require__("lodash");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_lodash___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_4_lodash__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5_classnames__ = __webpack_require__("classnames");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5_classnames___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_5_classnames__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__StatusBar__ = __webpack_require__("./components/contracts/StatusBar.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__DateBar__ = __webpack_require__("./components/contracts/DateBar.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__TagList__ = __webpack_require__("./components/contracts/TagList.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9__Lawyer__ = __webpack_require__("./components/contracts/Lawyer.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_10__BusinessUnit__ = __webpack_require__("./components/contracts/BusinessUnit.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_11__PartyList__ = __webpack_require__("./components/contracts/PartyList.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_12_next_link__ = __webpack_require__("next/link");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_12_next_link___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_12_next_link__);
var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

var _jsxFileName = '/mnt/c/Users/mbg/Documents/attest/components/contracts/ContractBox.js';

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }















var Contract = function (_React$Component) {
  _inherits(Contract, _React$Component);

  function Contract() {
    _classCallCheck(this, Contract);

    var _this = _possibleConstructorReturn(this, (Contract.__proto__ || Object.getPrototypeOf(Contract)).call(this));

    _this.openModal = function (contract) {
      _this.setState({
        modalIsOpen: true,
        editableContract: contract
      });
    };

    _this.closeModal = function () {
      _this.setState({ modalIsOpen: false });
    };

    _this.state = {
      modalIsOpen: false,
      editableContract: ''
    };
    return _this;
  }

  _createClass(Contract, [{
    key: 'render',
    value: function render() {
      var _this2 = this;

      var _props$contract = this.props.contract,
          id = _props$contract.id,
          internalParties = _props$contract.internalParties,
          externalParties = _props$contract.externalParties,
          tags = _props$contract.tags,
          currentStatus = _props$contract.currentStatus,
          businessUnit = _props$contract.businessUnit,
          assignedTo = _props$contract.assignedTo,
          statuses = _props$contract.statuses;


      var latestDate = __WEBPACK_IMPORTED_MODULE_4_lodash___default.a.last(statuses).date;
      var _props = this.props,
          masterEntity = _props.masterEntity,
          allUsers = _props.allUsers;


      return __WEBPACK_IMPORTED_MODULE_3_react___default.a.createElement(
        'div',
        {
          __source: {
            fileName: _jsxFileName,
            lineNumber: 51
          }
        },
        __WEBPACK_IMPORTED_MODULE_3_react___default.a.createElement(
          'div',
          {
            __source: {
              fileName: _jsxFileName,
              lineNumber: 52
            }
          },
          __WEBPACK_IMPORTED_MODULE_3_react___default.a.createElement(
            'div',
            {
              __source: {
                fileName: _jsxFileName,
                lineNumber: 53
              }
            },
            externalParties.map(function (party) {
              return __WEBPACK_IMPORTED_MODULE_3_react___default.a.createElement(
                'div',
                { key: party, className: 'pb1 b bb b--black-20 bw1', __source: {
                    fileName: _jsxFileName,
                    lineNumber: 55
                  }
                },
                party
              );
            })
          ),
          __WEBPACK_IMPORTED_MODULE_3_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_11__PartyList__["a" /* default */], { parties: internalParties, __source: {
              fileName: _jsxFileName,
              lineNumber: 60
            }
          }),
          __WEBPACK_IMPORTED_MODULE_3_react___default.a.createElement('div', { className: 'cf', __source: {
              fileName: _jsxFileName,
              lineNumber: 61
            }
          }),
          __WEBPACK_IMPORTED_MODULE_3_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_10__BusinessUnit__["a" /* default */], { businessUnit: businessUnit, __source: {
              fileName: _jsxFileName,
              lineNumber: 62
            }
          }),
          __WEBPACK_IMPORTED_MODULE_3_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_9__Lawyer__["a" /* default */], _extends({}, assignedTo, {
            __source: {
              fileName: _jsxFileName,
              lineNumber: 63
            }
          })),
          __WEBPACK_IMPORTED_MODULE_3_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_6__StatusBar__["a" /* default */], { status: currentStatus, bold: true, __source: {
              fileName: _jsxFileName,
              lineNumber: 64
            }
          }),
          __WEBPACK_IMPORTED_MODULE_3_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_7__DateBar__["a" /* default */], { date: latestDate, __source: {
              fileName: _jsxFileName,
              lineNumber: 65
            }
          }),
          tags ? __WEBPACK_IMPORTED_MODULE_3_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_8__TagList__["a" /* default */], { tags: tags, __source: {
              fileName: _jsxFileName,
              lineNumber: 66
            }
          }) : null,
          __WEBPACK_IMPORTED_MODULE_3_react___default.a.createElement('div', { className: 'cf', __source: {
              fileName: _jsxFileName,
              lineNumber: 67
            }
          })
        ),
        __WEBPACK_IMPORTED_MODULE_3_react___default.a.createElement(
          'div',
          {
            __source: {
              fileName: _jsxFileName,
              lineNumber: 69
            }
          },
          __WEBPACK_IMPORTED_MODULE_3_react___default.a.createElement(
            'ul',
            { className: 'fr list pa0 mt2', __source: {
                fileName: _jsxFileName,
                lineNumber: 70
              }
            },
            __WEBPACK_IMPORTED_MODULE_3_react___default.a.createElement(
              'li',
              { className: 'fl mr2', __source: {
                  fileName: _jsxFileName,
                  lineNumber: 71
                }
              },
              __WEBPACK_IMPORTED_MODULE_3_react___default.a.createElement(
                'button',
                {
                  className: 'bg-light-gray f6 link dim ph0 dib',
                  onClick: function onClick() {
                    return _this2.openModal(_this2.props.contract);
                  },
                  __source: {
                    fileName: _jsxFileName,
                    lineNumber: 72
                  }
                },
                __WEBPACK_IMPORTED_MODULE_3_react___default.a.createElement('i', { className: 'pointer fa fa-pencil fa-lg', __source: {
                    fileName: _jsxFileName,
                    lineNumber: 76
                  }
                })
              ),
              this.state.editableContract && __WEBPACK_IMPORTED_MODULE_3_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_1__modals_EditContractContainer__["a" /* default */], {
                isOpen: this.state.modalIsOpen,
                closeModal: this.closeModal,
                contract: this.state.editableContract,
                masterEntity: masterEntity,
                allUsers: allUsers,
                __source: {
                  fileName: _jsxFileName,
                  lineNumber: 79
                }
              })
            ),
            __WEBPACK_IMPORTED_MODULE_3_react___default.a.createElement(
              'li',
              { className: 'fl mr2 ', __source: {
                  fileName: _jsxFileName,
                  lineNumber: 87
                }
              },
              __WEBPACK_IMPORTED_MODULE_3_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_0__DeleteButton__["a" /* default */], { id: id, __source: {
                  fileName: _jsxFileName,
                  lineNumber: 87
                }
              })
            ),
            __WEBPACK_IMPORTED_MODULE_3_react___default.a.createElement(
              'li',
              { className: 'fl mr2', __source: {
                  fileName: _jsxFileName,
                  lineNumber: 88
                }
              },
              __WEBPACK_IMPORTED_MODULE_3_react___default.a.createElement('i', { className: 'fa fa-eye fa-lg', __source: {
                  fileName: _jsxFileName,
                  lineNumber: 89
                }
              })
            ),
            __WEBPACK_IMPORTED_MODULE_3_react___default.a.createElement(
              'li',
              { className: 'fl', __source: {
                  fileName: _jsxFileName,
                  lineNumber: 91
                }
              },
              __WEBPACK_IMPORTED_MODULE_3_react___default.a.createElement('i', { className: 'fa fa-plus-square fa-lg', __source: {
                  fileName: _jsxFileName,
                  lineNumber: 91
                }
              })
            )
          )
        ),
        __WEBPACK_IMPORTED_MODULE_3_react___default.a.createElement('div', { className: 'cf', __source: {
            fileName: _jsxFileName,
            lineNumber: 94
          }
        })
      );
    }
  }]);

  return Contract;
}(__WEBPACK_IMPORTED_MODULE_3_react___default.a.Component);

/* harmony default export */ __webpack_exports__["a"] = (Contract);

/***/ }),

/***/ "./components/contracts/ContractHolder.js":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_react__ = __webpack_require__("react");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_react___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_react__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_classnames__ = __webpack_require__("classnames");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_classnames___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1_classnames__);
var _jsxFileName = '/mnt/c/Users/mbg/Documents/attest/components/contracts/ContractHolder.js';



var ContractHolder = function ContractHolder(_ref) {
  var children = _ref.children,
      index = _ref.index;
  return __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
    'li',
    {
      className: __WEBPACK_IMPORTED_MODULE_1_classnames___default()((index + 1) % 4 === 0 && 'mr0-l mr0', (index + 1) % 4 !== 0 && 'mr3-l mr0', (index + 1) % 4 === 0 && 'mr0', (index + 1) % 4 !== 0 && 'mr0', (index + 1) % 2 === 0 && 'mr0-ns', (index + 1) % 2 !== 0 && 'mr3-ns', 'mr2', 'f4', 'pa3', 'overflow-hidden', 'h-100', 'bg-light-gray'),
      __source: {
        fileName: _jsxFileName,
        lineNumber: 4
      }
    },
    children
  );
};

/* harmony default export */ __webpack_exports__["a"] = (ContractHolder);

/***/ }),

/***/ "./components/contracts/ContractSquareList.js":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_react__ = __webpack_require__("react");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_react___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_react__);
var _jsxFileName = '/mnt/c/Users/mbg/Documents/attest/components/contracts/ContractSquareList.js';

var ContractSquareList = function ContractSquareList(_ref) {
  var contracts = _ref.contracts;
  return __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
    'div',
    {
      __source: {
        fileName: _jsxFileName,
        lineNumber: 2
      }
    },
    __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
      'div',
      { className: 'fl dim pointer', __source: {
          fileName: _jsxFileName,
          lineNumber: 3
        }
      },
      contracts.map(function (contract) {
        return __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement('div', {
          key: contract.id,
          style: { background: contract.currentStatus.color },
          className: 'fl w1 h1 mr1 mb1',
          __source: {
            fileName: _jsxFileName,
            lineNumber: 5
          }
        });
      })
    )
  );
};

/* harmony default export */ __webpack_exports__["a"] = (ContractSquareList);

/***/ }),

/***/ "./components/contracts/ContractsContainer.js":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_react__ = __webpack_require__("react");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_react___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_react__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_react_apollo__ = __webpack_require__("react-apollo");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_react_apollo___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1_react_apollo__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__queries_ContractsQuery__ = __webpack_require__("./queries/ContractsQuery.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__ContractsHolder__ = __webpack_require__("./components/contracts/ContractsHolder.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__general_Loading__ = __webpack_require__("./components/general/Loading.js");
var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

var _jsxFileName = '/mnt/c/Users/mbg/Documents/attest/components/contracts/ContractsContainer.js';






var ContractsContainer = function ContractsContainer(props) {
  if (!props.loading) return __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_3__ContractsHolder__["a" /* default */], _extends({}, props, {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 7
    }
  }));
  return __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_4__general_Loading__["a" /* default */], {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 8
    }
  });
};

var ContractsQuery = Object(__WEBPACK_IMPORTED_MODULE_1_react_apollo__["graphql"])(__WEBPACK_IMPORTED_MODULE_2__queries_ContractsQuery__["a" /* default */], {
  props: function props(_ref) {
    var _ref$data = _ref.data,
        loading = _ref$data.loading,
        masterEntity = _ref$data.masterEntity,
        contracts = _ref$data.contracts,
        currentStatuses = _ref$data.currentStatuses,
        currentTags = _ref$data.currentTags,
        currentBusinessUnits = _ref$data.currentBusinessUnits,
        currentLawyers = _ref$data.currentLawyers,
        allUsers = _ref$data.allUsers;
    return {
      loading: loading,
      masterEntity: masterEntity,
      contracts: contracts,
      currentTags: currentTags,
      currentLawyers: currentLawyers,
      currentBusinessUnits: currentBusinessUnits,
      currentStatuses: currentStatuses,
      allUsers: allUsers
    };
  }
});

var ContractsContainerWithQuery = Object(__WEBPACK_IMPORTED_MODULE_1_react_apollo__["compose"])(ContractsQuery)(ContractsContainer);

/* harmony default export */ __webpack_exports__["a"] = (ContractsContainerWithQuery);

/***/ }),

/***/ "./components/contracts/ContractsHolder.js":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_react__ = __webpack_require__("react");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_react___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_react__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__ContractsList__ = __webpack_require__("./components/contracts/ContractsList.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_lodash__ = __webpack_require__("lodash");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_lodash___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2_lodash__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__Filter__ = __webpack_require__("./components/contracts/Filter.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__SummaryBox__ = __webpack_require__("./components/contracts/SummaryBox.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__Title__ = __webpack_require__("./components/contracts/Title.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__lib_search__ = __webpack_require__("./lib/search.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__lib_filterContracts__ = __webpack_require__("./lib/filterContracts.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__styles_Flex__ = __webpack_require__("./components/styles/Flex.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9__SearchInput__ = __webpack_require__("./components/contracts/SearchInput.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_10__general_Loading__ = __webpack_require__("./components/general/Loading.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_11__general_Hide__ = __webpack_require__("./components/general/Hide.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_12_classnames__ = __webpack_require__("classnames");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_12_classnames___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_12_classnames__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_13__styles_FadeRightDiv__ = __webpack_require__("./components/styles/FadeRightDiv.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_14__styles_PageAnimation__ = __webpack_require__("./components/styles/PageAnimation.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_15__styles_ClearFix__ = __webpack_require__("./components/styles/ClearFix.js");
var _jsxFileName = '/mnt/c/Users/mbg/Documents/attest/components/contracts/ContractsHolder.js';

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();



function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }


















var ContractsHolder = function (_react$Component) {
  _inherits(ContractsHolder, _react$Component);

  function ContractsHolder(props) {
    _classCallCheck(this, ContractsHolder);

    var _this = _possibleConstructorReturn(this, (ContractsHolder.__proto__ || Object.getPrototypeOf(ContractsHolder)).call(this, props));

    _this.selectDateOption = function (s) {
      var filters = _this.state.filters;

      filters.selectedDateOption = s.name;
      _this.setState({ filters: filters });
    };

    _this.handleSearchInput = function (event) {
      _this.setState({ liveInput: true, searchTerm: event.target.value });
      clearTimeout(timer);
      var timer = setTimeout(function () {
        _this.setState({ liveInput: false });
      }, 1000);
    };

    _this.clearSearchTerm = function (event) {
      return _this.setState({ searchTerm: '' });
    };

    _this.getSearchResults = function () {
      var value = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : '';
      var list = arguments[1];

      return Object(__WEBPACK_IMPORTED_MODULE_6__lib_search__["a" /* default */])(list, value);
    };

    _this.setDate = function (content) {
      _this.updateFilterState('dateRange', content);
    };

    _this.updateFilterState = function (filterName, content) {
      var filters = _this.state.filters;

      filters[filterName] = content;
      _this.setState({ filters: filters });
    };

    _this.updateSet = function (set, label) {
      var copy = __WEBPACK_IMPORTED_MODULE_2_lodash___default.a.cloneDeep(set);
      copy.forEach(function (s) {
        if (s.name === label) s.checked = !s.checked;
      });
      return copy;
    };

    _this.clearFilters = function () {
      var filters = {
        statuses: _this.props.currentStatuses,
        dateRange: {
          startDate: null,
          endDate: null
        },
        tags: _this.props.currentTags,
        businessUnits: _this.props.currentBusinessUnits,
        lawyers: [],
        selectedDateOption: 'GENERAL'
      };
      _this.setState({ filters: filters });
    };

    _this.toggleCheckbox = function (label) {
      var _this$state$filters = _this.state.filters,
          statuses = _this$state$filters.statuses,
          tags = _this$state$filters.tags,
          businessUnits = _this$state$filters.businessUnits,
          lawyers = _this$state$filters.lawyers;

      statuses = statuses.map(function (s) {
        return {
          checked: s.checked,
          name: s.name,
          type: 'status',
          category: 'statuses'
        };
      });

      tags = tags.map(function (t) {
        return { checked: t.checked, name: t.name, type: 'tag', category: 'tags' };
      });

      businessUnits = businessUnits.map(function (b) {
        return {
          checked: b.checked,
          name: b.name,
          type: 'businessUnit',
          category: 'businessUnits'
        };
      });

      lawyers = lawyers.map(function (l) {
        return {
          checked: l.checked,
          name: l,
          type: 'lawyer',
          category: 'lawyers'
        };
      });

      var filters = __WEBPACK_IMPORTED_MODULE_2_lodash___default.a.concat(statuses, tags, businessUnits, lawyers);
      filters.forEach(function (f) {
        if (f.name === label) {
          _this.updateFilterState(f.category, _this.updateSet(_this.state.filters[f.category], label));
        }
      });
    };

    _this.state = {
      contracts: props.contracts,
      filters: {
        statuses: props.currentStatuses,
        dateRange: {
          startDate: null,
          endDate: null
        },
        tags: props.currentTags,
        businessUnits: props.currentBusinessUnits,
        lawyers: props.currentLawyers,
        selectedDateOption: 'GENERAL'
      },
      searchTerm: '',
      liveInput: false,
      activeMenu: false
    };
    return _this;
  }

  _createClass(ContractsHolder, [{
    key: 'componentWillReceiveProps',
    value: function componentWillReceiveProps(nextProps) {
      this.setState({ contracts: nextProps.contracts });
    }
  }, {
    key: 'render',
    value: function render() {
      var _state = this.state,
          filters = _state.filters,
          contracts = _state.contracts;
      var name = this.props.masterEntity.name;

      var filteredContracts = Object(__WEBPACK_IMPORTED_MODULE_7__lib_filterContracts__["a" /* default */])(filters, contracts);
      if (this.state.searchTerm.length > 0 && !this.state.liveInput) {
        filteredContracts = this.getSearchResults(this.state.searchTerm, filteredContracts);
      }
      return __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
        'div',
        { className: 'pa3-ns pa0 pt3', __source: {
            fileName: _jsxFileName,
            lineNumber: 152
          }
        },
        __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
          __WEBPACK_IMPORTED_MODULE_13__styles_FadeRightDiv__["a" /* default */],
          {
            __source: {
              fileName: _jsxFileName,
              lineNumber: 153
            }
          },
          __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_5__Title__["a" /* default */], { name: name, __source: {
              fileName: _jsxFileName,
              lineNumber: 154
            }
          }),
          __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_3__Filter__["a" /* default */], {
            filters: filters,
            toggleCheckbox: this.toggleCheckbox,
            clearFilters: this.clearFilters,
            setDate: this.setDate,
            selectDateOption: this.selectDateOption,
            __source: {
              fileName: _jsxFileName,
              lineNumber: 155
            }
          }),
          __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_9__SearchInput__["a" /* default */], {
            handleSearchInput: this.handleSearchInput,
            searchTerm: this.state.searchTerm,
            clear: this.clearSearchTerm,
            __source: {
              fileName: _jsxFileName,
              lineNumber: 162
            }
          }),
          __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_15__styles_ClearFix__["a" /* default */], {
            __source: {
              fileName: _jsxFileName,
              lineNumber: 167
            }
          }),
          __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_4__SummaryBox__["a" /* default */], { contracts: filteredContracts, filters: filters, __source: {
              fileName: _jsxFileName,
              lineNumber: 168
            }
          }),
          __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_1__ContractsList__["a" /* default */], {
            contracts: filteredContracts,
            masterEntity: this.props.masterEntity,
            allUsers: this.props.allUsers,
            __source: {
              fileName: _jsxFileName,
              lineNumber: 169
            }
          })
        )
      );
    }
  }]);

  return ContractsHolder;
}(__WEBPACK_IMPORTED_MODULE_0_react___default.a.Component);

/* harmony default export */ __webpack_exports__["a"] = (ContractsHolder);

/***/ }),

/***/ "./components/contracts/ContractsList.js":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_react__ = __webpack_require__("react");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_react___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_react__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__ContractBox__ = __webpack_require__("./components/contracts/ContractBox.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__ContractHolder__ = __webpack_require__("./components/contracts/ContractHolder.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__styles_FadeTransition__ = __webpack_require__("./components/styles/FadeTransition.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_react_transition_group__ = __webpack_require__("react-transition-group");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_react_transition_group___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_4_react_transition_group__);
var _jsxFileName = '/mnt/c/Users/mbg/Documents/attest/components/contracts/ContractsList.js';






var ContractsList = function ContractsList(props) {
  return __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
    'div',
    {
      __source: {
        fileName: _jsxFileName,
        lineNumber: 7
      }
    },
    props.contracts.length > 0 ? __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
      'div',
      {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 9
        }
      },
      __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
        'div',
        { className: 'b f4 mb2', __source: {
            fileName: _jsxFileName,
            lineNumber: 10
          }
        },
        'Contracts'
      ),
      __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
        'section',
        { className: 'mb3', __source: {
            fileName: _jsxFileName,
            lineNumber: 11
          }
        },
        __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
          __WEBPACK_IMPORTED_MODULE_4_react_transition_group__["TransitionGroup"],
          { className: 'flex flex-wrap list pa0 ma0', __source: {
              fileName: _jsxFileName,
              lineNumber: 12
            }
          },
          props.contracts.map(function (contract, index) {
            return __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
              __WEBPACK_IMPORTED_MODULE_3__styles_FadeTransition__["a" /* default */],
              { key: contract.id, __source: {
                  fileName: _jsxFileName,
                  lineNumber: 14
                }
              },
              __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
                'div',
                { key: contract.id, className: 'mb3 w-50-ns w-25-l w-100', __source: {
                    fileName: _jsxFileName,
                    lineNumber: 15
                  }
                },
                __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
                  __WEBPACK_IMPORTED_MODULE_2__ContractHolder__["a" /* default */],
                  { key: contract.id, index: index, __source: {
                      fileName: _jsxFileName,
                      lineNumber: 16
                    }
                  },
                  __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_1__ContractBox__["a" /* default */], {
                    allUsers: props.allUsers,
                    masterEntity: props.masterEntity,
                    contract: contract,
                    __source: {
                      fileName: _jsxFileName,
                      lineNumber: 17
                    }
                  })
                )
              )
            );
          })
        )
      )
    ) : __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
      'div',
      { className: 'bg-light-gray pa3 f4 b mt3', __source: {
          fileName: _jsxFileName,
          lineNumber: 29
        }
      },
      'No matching contracts'
    )
  );
};

/* harmony default export */ __webpack_exports__["a"] = (ContractsList);

/***/ }),

/***/ "./components/contracts/DateBar.js":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_react__ = __webpack_require__("react");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_react___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_react__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_react_moment__ = __webpack_require__("react-moment");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_react_moment___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1_react_moment__);
var _jsxFileName = '/mnt/c/Users/mbg/Documents/attest/components/contracts/DateBar.js';



var DateBar = function DateBar(_ref) {
  var date = _ref.date;
  return __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
    'div',
    {
      __source: {
        fileName: _jsxFileName,
        lineNumber: 4
      }
    },
    __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement('i', { className: 'mr2 mt1 fa fa-check-square-o', __source: {
        fileName: _jsxFileName,
        lineNumber: 5
      }
    }),
    __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
      __WEBPACK_IMPORTED_MODULE_1_react_moment___default.a,
      { format: 'DD MMMM YYYY', __source: {
          fileName: _jsxFileName,
          lineNumber: 6
        }
      },
      date
    )
  );
};

/* harmony default export */ __webpack_exports__["a"] = (DateBar);

/***/ }),

/***/ "./components/contracts/DateSummary.js":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_react__ = __webpack_require__("react");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_react___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_react__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_react_moment__ = __webpack_require__("react-moment");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_react_moment___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1_react_moment__);
var _jsxFileName = '/mnt/c/Users/mbg/Documents/attest/components/contracts/DateSummary.js';




var DateSummary = function DateSummary(_ref) {
  var startDate = _ref.startDate,
      endDate = _ref.endDate;
  return __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
    __WEBPACK_IMPORTED_MODULE_0_react__["Fragment"],
    {
      __source: {
        fileName: _jsxFileName,
        lineNumber: 5
      }
    },
    startDate && startDate.isValid() ? __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
      'span',
      {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 7
        }
      },
      ' between ',
      __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_1_react_moment___default.a, { format: 'D MMMM YYYY', date: startDate, __source: {
          fileName: _jsxFileName,
          lineNumber: 9
        }
      }),
      ' and ',
      __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_1_react_moment___default.a, { format: 'D MMMM YYYY', date: endDate, __source: {
          fileName: _jsxFileName,
          lineNumber: 11
        }
      })
    ) : __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
      'span',
      {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 13
        }
      },
      ' for all time'
    )
  );
};

/* harmony default export */ __webpack_exports__["a"] = (DateSummary);

/***/ }),

/***/ "./components/contracts/DeleteButton.js":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_react__ = __webpack_require__("react");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_react___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_react__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_react_apollo__ = __webpack_require__("react-apollo");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_react_apollo___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1_react_apollo__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_lodash__ = __webpack_require__("lodash");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_lodash___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2_lodash__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__queries_ContractsQuery__ = __webpack_require__("./queries/ContractsQuery.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__queries_DeleteContractMutation__ = __webpack_require__("./queries/DeleteContractMutation.js");
var _jsxFileName = '/mnt/c/Users/mbg/Documents/attest/components/contracts/DeleteButton.js';






var DeleteButton = function DeleteButton(_ref) {
  var deleteContract = _ref.deleteContract,
      id = _ref.id;

  return __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
    'button',
    {
      className: 'f6 bg-light-gray link dim ph0 dib',
      onClick: function onClick() {
        return deleteContract(id);
      },
      __source: {
        fileName: _jsxFileName,
        lineNumber: 8
      }
    },
    __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement('i', { className: 'pointer fa fa-trash-o fa-lg', __source: {
        fileName: _jsxFileName,
        lineNumber: 12
      }
    })
  );
};

var DeleteButtonMutation = Object(__WEBPACK_IMPORTED_MODULE_1_react_apollo__["graphql"])(__WEBPACK_IMPORTED_MODULE_4__queries_DeleteContractMutation__["a" /* default */], {
  props: function props(_ref2) {
    var ownProps = _ref2.ownProps,
        mutate = _ref2.mutate;

    return {
      deleteContract: function deleteContract(id) {
        return mutate({
          variables: { id: id },
          update: function update(store) {
            var data = store.readQuery({ query: __WEBPACK_IMPORTED_MODULE_3__queries_ContractsQuery__["a" /* default */] });
            var copy = data.contracts;
            var revisedContracts = __WEBPACK_IMPORTED_MODULE_2_lodash___default.a.without(copy, __WEBPACK_IMPORTED_MODULE_2_lodash___default.a.find(copy, { id: id }));
            data.contracts = revisedContracts;
            store.writeQuery({ query: __WEBPACK_IMPORTED_MODULE_3__queries_ContractsQuery__["a" /* default */], data: data });
          }
        });
      }
    };
  }
})(DeleteButton);

/* harmony default export */ __webpack_exports__["a"] = (DeleteButtonMutation);

/***/ }),

/***/ "./components/contracts/Filter.js":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_react__ = __webpack_require__("react");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_react___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_react__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__general_Hide__ = __webpack_require__("./components/general/Hide.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_react_datepicker__ = __webpack_require__("react-datepicker");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_react_datepicker___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2_react_datepicker__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__general_CheckboxList__ = __webpack_require__("./components/general/CheckboxList.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__general_CheckboxListTwo__ = __webpack_require__("./components/general/CheckboxListTwo.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__general_Radio__ = __webpack_require__("./components/general/Radio.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__styles_Flex__ = __webpack_require__("./components/styles/Flex.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7_lodash__ = __webpack_require__("lodash");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7_lodash___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_7_lodash__);
var _jsxFileName = '/mnt/c/Users/mbg/Documents/attest/components/contracts/Filter.js';

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();



function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }










var Filter = function (_react$Component) {
  _inherits(Filter, _react$Component);

  function Filter(props) {
    _classCallCheck(this, Filter);

    var _this = _possibleConstructorReturn(this, (Filter.__proto__ || Object.getPrototypeOf(Filter)).call(this, props));

    _this.toggleFilter = function (activeFilter) {
      if (activeFilter === _this.state.activeFilter) {
        _this.setState({ activeFilter: null });
      } else {
        _this.setState({ activeFilter: activeFilter });
      }
    };

    _this.handleChangeStart = function (date) {
      var dateRange = _this.state.dateRange;
      dateRange.startDate = date;
      _this.setState({ dateRange: dateRange });
    };

    _this.selectDateOption = function (s) {
      _this.props.selectDateOption(s);
      _this.setState({ selectedDateOption: s.name });
    };

    _this.handleChangeEnd = function (endDate) {
      var error = _this.state.error;
      var startDate = _this.state.dateRange.startDate;

      var dateRange = { startDate: startDate, endDate: endDate };
      _this.setState({ dateRange: dateRange });
      _this.props.setDate(_this.state.dateRange);
      if (dateRange.endDate.isBefore(dateRange.startDate)) {
        var finishBeforeStart = true;
        var _error = _extends({}, _error, { finishBeforeStart: finishBeforeStart });
        _this.setState({ error: _error });
      } else {
        var _finishBeforeStart = false;
        var _error2 = _extends({}, _error2, { finishBeforeStart: _finishBeforeStart });
        _this.setState({ error: _error2 });
        _this.props.setDate(dateRange);
      }
    };

    _this.resetDates = function () {
      var dateRange = {};
      dateRange.endDate = null;
      dateRange.startDate = null;
      _this.setState({ dateRange: dateRange, error: false });
      _this.props.setDate(dateRange);
    };

    _this.checked = function (arr) {
      if (__WEBPACK_IMPORTED_MODULE_7_lodash___default.a.filter(arr, 'checked').length === 0) return false;else return true;
    };

    _this.dateRangeCheck = function (dR) {
      if (dR.startDate && dR.endDate) return true;else return false;
    };

    _this.state = {
      activeFilter: null,
      value: '',
      dateRange: {
        startDate: null,
        endDate: null
      },
      dateSearchOptions: [{ name: 'General' }, { name: 'Expiry date' }],
      selectedDateOption: 'General',
      error: {
        finishBeforeStart: false
      }
    };
    return _this;
  }

  _createClass(Filter, [{
    key: 'render',
    value: function render() {
      var _props$filters = this.props.filters,
          statuses = _props$filters.statuses,
          tags = _props$filters.tags,
          businessUnits = _props$filters.businessUnits,
          lawyers = _props$filters.lawyers;

      var selectedStatuses = this.checked(statuses);
      var selectedBusinessUnits = this.checked(businessUnits);
      var selectedTags = this.checked(tags);
      var _props = this.props,
          toggleCheckbox = _props.toggleCheckbox,
          filters = _props.filters,
          clearFilters = _props.clearFilters;
      var _state$dateRange = this.state.dateRange,
          startDate = _state$dateRange.startDate,
          endDate = _state$dateRange.endDate;

      var selectedDateRange = this.dateRangeCheck(this.state.dateRange);
      var _state = this.state,
          error = _state.error,
          dateSearchOptions = _state.dateSearchOptions,
          selectedDateOption = _state.selectedDateOption,
          activeFilter = _state.activeFilter;


      return __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
        __WEBPACK_IMPORTED_MODULE_6__styles_Flex__["a" /* default */],
        {
          __source: {
            fileName: _jsxFileName,
            lineNumber: 99
          }
        },
        __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
          'div',
          { className: 'b f4 mr3', __source: {
              fileName: _jsxFileName,
              lineNumber: 100
            }
          },
          'Filters'
        ),
        __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
          __WEBPACK_IMPORTED_MODULE_1__general_Hide__["a" /* default */],
          {
            toggleFilter: this.toggleFilter,
            activeFilter: activeFilter,
            filterUsed: selectedStatuses,
            show: false,
            title: 'Statuses',
            __source: {
              fileName: _jsxFileName,
              lineNumber: 101
            }
          },
          __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_4__general_CheckboxListTwo__["a" /* default */], {
            error: 'Please add filters',
            content: statuses,
            toggleCheckbox: toggleCheckbox,
            __source: {
              fileName: _jsxFileName,
              lineNumber: 108
            }
          })
        ),
        __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
          __WEBPACK_IMPORTED_MODULE_1__general_Hide__["a" /* default */],
          {
            toggleFilter: this.toggleFilter,
            activeFilter: activeFilter,
            filterUsed: selectedTags,
            show: false,
            title: 'Tags',
            __source: {
              fileName: _jsxFileName,
              lineNumber: 114
            }
          },
          __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_4__general_CheckboxListTwo__["a" /* default */], {
            error: 'Please add filters',
            content: tags,
            toggleCheckbox: toggleCheckbox,
            __source: {
              fileName: _jsxFileName,
              lineNumber: 121
            }
          })
        ),
        __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
          __WEBPACK_IMPORTED_MODULE_1__general_Hide__["a" /* default */],
          {
            toggleFilter: this.toggleFilter,
            activeFilter: activeFilter,
            filterUsed: selectedBusinessUnits,
            show: false,
            title: 'Business Units',
            __source: {
              fileName: _jsxFileName,
              lineNumber: 127
            }
          },
          __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_4__general_CheckboxListTwo__["a" /* default */], {
            error: 'Please add filters',
            content: businessUnits,
            toggleCheckbox: toggleCheckbox,
            __source: {
              fileName: _jsxFileName,
              lineNumber: 134
            }
          })
        ),
        __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
          __WEBPACK_IMPORTED_MODULE_1__general_Hide__["a" /* default */],
          {
            toggleFilter: this.toggleFilter,
            activeFilter: activeFilter,
            filterUsed: false,
            show: false,
            title: 'Lawyers',
            __source: {
              fileName: _jsxFileName,
              lineNumber: 140
            }
          },
          __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_3__general_CheckboxList__["a" /* default */], {
            error: 'Please add filters',
            content: lawyers,
            toggleCheckbox: toggleCheckbox,
            __source: {
              fileName: _jsxFileName,
              lineNumber: 147
            }
          })
        ),
        __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
          __WEBPACK_IMPORTED_MODULE_1__general_Hide__["a" /* default */],
          {
            toggleFilter: this.toggleFilter,
            activeFilter: activeFilter,
            filterUsed: selectedDateRange,
            show: false,
            title: 'Dates',
            __source: {
              fileName: _jsxFileName,
              lineNumber: 153
            }
          },
          __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
            'div',
            { className: 'pl3 fl mt3', __source: {
                fileName: _jsxFileName,
                lineNumber: 160
              }
            },
            __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_5__general_Radio__["a" /* default */], {
              items: dateSearchOptions,
              selectedItem: selectedDateOption,
              handleChange: this.selectDateOption,
              __source: {
                fileName: _jsxFileName,
                lineNumber: 161
              }
            }),
            __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement('div', { className: 'cf', __source: {
                fileName: _jsxFileName,
                lineNumber: 166
              }
            }),
            __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
              'div',
              { className: 'fl mt2 mr2', __source: {
                  fileName: _jsxFileName,
                  lineNumber: 167
                }
              },
              __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_2_react_datepicker___default.a, {
                className: 'w4 f4 font b--blue ba bw1 pa1 tc',
                selected: startDate,
                selectsStart: true,
                startDate: startDate,
                endDate: endDate,
                onChange: this.handleChangeStart,
                placeholderText: 'Start date',
                showMonthDropdown: true,
                showYearDropdown: true,
                dateFormat: 'DD/MM/YYYY',
                __source: {
                  fileName: _jsxFileName,
                  lineNumber: 168
                }
              })
            ),
            __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
              'div',
              { className: 'fl mr2 mt2', __source: {
                  fileName: _jsxFileName,
                  lineNumber: 181
                }
              },
              __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_2_react_datepicker___default.a, {
                className: 'pl2 w4 f4 font b--blue ba bw1 pa1 tc',
                selected: endDate,
                selectsEnd: true,
                startDate: startDate,
                endDate: endDate,
                onChange: this.handleChangeEnd,
                placeholderText: 'End date',
                showMonthDropdown: true,
                showYearDropdown: true,
                dateFormat: 'DD/MM/YYYY',
                __source: {
                  fileName: _jsxFileName,
                  lineNumber: 182
                }
              })
            )
          ),
          __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement('div', { className: 'cf', __source: {
              fileName: _jsxFileName,
              lineNumber: 196
            }
          }),
          __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
            'div',
            { onClick: this.resetDates, className: 'pt1 pl3 f7 pa1 pointer', __source: {
                fileName: _jsxFileName,
                lineNumber: 197
              }
            },
            'Clear'
          ),
          __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
            'div',
            {
              __source: {
                fileName: _jsxFileName,
                lineNumber: 200
              }
            },
            error.finishBeforeStart && __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
              'div',
              { className: 'pa2 red b', __source: {
                  fileName: _jsxFileName,
                  lineNumber: 202
                }
              },
              'End date is before the start date'
            )
          )
        ),
        __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
          'div',
          {
            className: 'ml3 f4 underline-hover pointer',
            onClick: clearFilters,
            __source: {
              fileName: _jsxFileName,
              lineNumber: 209
            }
          },
          'Reset'
        )
      );
    }
  }]);

  return Filter;
}(__WEBPACK_IMPORTED_MODULE_0_react___default.a.Component);

/* harmony default export */ __webpack_exports__["a"] = (Filter);

/***/ }),

/***/ "./components/contracts/Lawyer.js":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_react__ = __webpack_require__("react");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_react___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_react__);
var _jsxFileName = '/mnt/c/Users/mbg/Documents/attest/components/contracts/Lawyer.js';

var LawyerName = function LawyerName(props) {
  return __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
    'div',
    {
      __source: {
        fileName: _jsxFileName,
        lineNumber: 2
      }
    },
    props.name ? __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
      'div',
      {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 4
        }
      },
      __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
        'span',
        {
          __source: {
            fileName: _jsxFileName,
            lineNumber: 5
          }
        },
        __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement('i', { className: 'mr2 mt1 fa fa-id-card-o', __source: {
            fileName: _jsxFileName,
            lineNumber: 6
          }
        }),
        props.name
      )
    ) : __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement('div', {
      __source: {
        fileName: _jsxFileName,
        lineNumber: 10
      }
    })
  );
};

/* harmony default export */ __webpack_exports__["a"] = (LawyerName);

/***/ }),

/***/ "./components/contracts/PartyList.js":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_react__ = __webpack_require__("react");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_react___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_react__);
var _jsxFileName = '/mnt/c/Users/mbg/Documents/attest/components/contracts/PartyList.js';

var PartyList = function PartyList(_ref) {
  var parties = _ref.parties;
  return __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
    'div',
    { className: 'mt1', __source: {
        fileName: _jsxFileName,
        lineNumber: 2
      }
    },
    parties.map(function (party) {
      return __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
        'div',
        { key: party, __source: {
            fileName: _jsxFileName,
            lineNumber: 3
          }
        },
        party
      );
    })
  );
};

/* harmony default export */ __webpack_exports__["a"] = (PartyList);

/***/ }),

/***/ "./components/contracts/SearchInput.js":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_react__ = __webpack_require__("react");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_react___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_react__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_classnames__ = __webpack_require__("classnames");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_classnames___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1_classnames__);
var _jsxFileName = '/mnt/c/Users/mbg/Documents/attest/components/contracts/SearchInput.js';

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();



function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }




var SearchInput = function (_react$Component) {
  _inherits(SearchInput, _react$Component);

  function SearchInput() {
    _classCallCheck(this, SearchInput);

    return _possibleConstructorReturn(this, (SearchInput.__proto__ || Object.getPrototypeOf(SearchInput)).apply(this, arguments));
  }

  _createClass(SearchInput, [{
    key: 'render',
    value: function render() {
      return __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
        'div',
        { className: 'w-50-l w-100 f4', __source: {
            fileName: _jsxFileName,
            lineNumber: 7
          }
        },
        __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
          'span',
          { className: 'b fl mt2 mr2', __source: {
              fileName: _jsxFileName,
              lineNumber: 8
            }
          },
          'Search'
        ),
        __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement('input', {
          className: 'mt1 fl w-100 bb bw1 b--black-20 font pa1 mw5',
          value: this.props.searchTerm,
          onChange: this.props.handleSearchInput,
          __source: {
            fileName: _jsxFileName,
            lineNumber: 9
          }
        }),
        __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
          'span',
          {
            className: __WEBPACK_IMPORTED_MODULE_1_classnames___default()(!this.props.searchTerm && 'dn', 'mt1', 'fl', 'pa1', 'b'),
            onClick: this.props.clear,
            __source: {
              fileName: _jsxFileName,
              lineNumber: 14
            }
          },
          __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement('i', { className: 'fa fa-close', __source: {
              fileName: _jsxFileName,
              lineNumber: 24
            }
          })
        )
      );
    }
  }]);

  return SearchInput;
}(__WEBPACK_IMPORTED_MODULE_0_react___default.a.Component);

/* harmony default export */ __webpack_exports__["a"] = (SearchInput);

/***/ }),

/***/ "./components/contracts/StatusBar.js":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_react__ = __webpack_require__("react");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_react___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_react__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_classnames__ = __webpack_require__("classnames");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_classnames___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1_classnames__);
var _jsxFileName = '/mnt/c/Users/mbg/Documents/attest/components/contracts/StatusBar.js';



var StatusBar = function StatusBar(_ref) {
  var _ref$status = _ref.status,
      name = _ref$status.name,
      color = _ref$status.color,
      volume = _ref.volume,
      bold = _ref.bold;
  return __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
    'div',
    {
      style: { borderBottomColor: color },
      className: __WEBPACK_IMPORTED_MODULE_1_classnames___default()('bw1 bb mt1', 'pb1', bold && 'b'),
      __source: {
        fileName: _jsxFileName,
        lineNumber: 4
      }
    },
    volume ? __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
      'span',
      {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 8
        }
      },
      ' ' + volume + ' '
    ) : '',
    name
  );
};

/* harmony default export */ __webpack_exports__["a"] = (StatusBar);

/***/ }),

/***/ "./components/contracts/SummaryBox.js":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_react__ = __webpack_require__("react");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_react___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_react__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__ContractSquareList__ = __webpack_require__("./components/contracts/ContractSquareList.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_lodash__ = __webpack_require__("lodash");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_lodash___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2_lodash__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__StatusBar__ = __webpack_require__("./components/contracts/StatusBar.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__DateSummary__ = __webpack_require__("./components/contracts/DateSummary.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__styles_Flex__ = __webpack_require__("./components/styles/Flex.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6_react_transition_group__ = __webpack_require__("react-transition-group");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6_react_transition_group___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_6_react_transition_group__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__styles_FadeTransition__ = __webpack_require__("./components/styles/FadeTransition.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__styles_ClearFix__ = __webpack_require__("./components/styles/ClearFix.js");
var _jsxFileName = '/mnt/c/Users/mbg/Documents/attest/components/contracts/SummaryBox.js';

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();



function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }











var SummaryBox = function (_react$Component) {
  _inherits(SummaryBox, _react$Component);

  function SummaryBox() {
    _classCallCheck(this, SummaryBox);

    return _possibleConstructorReturn(this, (SummaryBox.__proto__ || Object.getPrototypeOf(SummaryBox)).apply(this, arguments));
  }

  _createClass(SummaryBox, [{
    key: 'render',
    value: function render() {
      var o = __WEBPACK_IMPORTED_MODULE_2_lodash___default.a.groupBy(this.props.contracts, 'currentStatus.name');
      var res = __WEBPACK_IMPORTED_MODULE_2_lodash___default.a.keys(o).map(function (k) {
        var status = {
          name: o[k][0].currentStatus.name,
          color: o[k][0].currentStatus.color
        };
        return {
          status: status,
          volume: o[k].length
        };
      });

      var arr = __WEBPACK_IMPORTED_MODULE_2_lodash___default.a.values(o);
      var _props = this.props,
          contracts = _props.contracts,
          filters = _props.filters;
      var _filters$dateRange = filters.dateRange,
          startDate = _filters$dateRange.startDate,
          endDate = _filters$dateRange.endDate;

      return __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
        'div',
        { className: 'pv3 f4', __source: {
            fileName: _jsxFileName,
            lineNumber: 29
          }
        },
        contracts && contracts.length > 0 && __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
          'div',
          {
            __source: {
              fileName: _jsxFileName,
              lineNumber: 32
            }
          },
          __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
            __WEBPACK_IMPORTED_MODULE_5__styles_Flex__["a" /* default */],
            {
              __source: {
                fileName: _jsxFileName,
                lineNumber: 33
              }
            },
            __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
              'div',
              { className: 'b mb1', __source: {
                  fileName: _jsxFileName,
                  lineNumber: 34
                }
              },
              'Summary'
            ),
            __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
              'div',
              { className: 'ml3', __source: {
                  fileName: _jsxFileName,
                  lineNumber: 35
                }
              },
              contracts.length,
              __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_4__DateSummary__["a" /* default */], { startDate: startDate, endDate: endDate, __source: {
                  fileName: _jsxFileName,
                  lineNumber: 37
                }
              })
            )
          ),
          __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
            __WEBPACK_IMPORTED_MODULE_5__styles_Flex__["a" /* default */],
            {
              __source: {
                fileName: _jsxFileName,
                lineNumber: 40
              }
            },
            __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
              __WEBPACK_IMPORTED_MODULE_6_react_transition_group__["TransitionGroup"],
              { className: 'flex flex-wrap list w-100 mb2 pa0 ma0', __source: {
                  fileName: _jsxFileName,
                  lineNumber: 41
                }
              },
              res.map(function (r) {
                return __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
                  __WEBPACK_IMPORTED_MODULE_7__styles_FadeTransition__["a" /* default */],
                  { key: r.status.name, __source: {
                      fileName: _jsxFileName,
                      lineNumber: 43
                    }
                  },
                  __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
                    'div',
                    { className: 'fl mr4', __source: {
                        fileName: _jsxFileName,
                        lineNumber: 44
                      }
                    },
                    __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_3__StatusBar__["a" /* default */], { status: r.status, volume: r.volume, __source: {
                        fileName: _jsxFileName,
                        lineNumber: 45
                      }
                    })
                  )
                );
              })
            ),
            __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_8__styles_ClearFix__["a" /* default */], {
              __source: {
                fileName: _jsxFileName,
                lineNumber: 50
              }
            }),
            __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
              __WEBPACK_IMPORTED_MODULE_6_react_transition_group__["TransitionGroup"],
              {
                __source: {
                  fileName: _jsxFileName,
                  lineNumber: 51
                }
              },
              arr.map(function (contracts) {
                return __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
                  __WEBPACK_IMPORTED_MODULE_7__styles_FadeTransition__["a" /* default */],
                  { key: contracts[0].id, __source: {
                      fileName: _jsxFileName,
                      lineNumber: 53
                    }
                  },
                  __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
                    'div',
                    { className: 'fl', __source: {
                        fileName: _jsxFileName,
                        lineNumber: 54
                      }
                    },
                    __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_1__ContractSquareList__["a" /* default */], { contracts: contracts, __source: {
                        fileName: _jsxFileName,
                        lineNumber: 55
                      }
                    })
                  )
                );
              })
            )
          )
        )
      );
    }
  }]);

  return SummaryBox;
}(__WEBPACK_IMPORTED_MODULE_0_react___default.a.Component);

/* harmony default export */ __webpack_exports__["a"] = (SummaryBox);

/***/ }),

/***/ "./components/contracts/TagList.js":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_react__ = __webpack_require__("react");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_react___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_react__);
var _jsxFileName = '/mnt/c/Users/mbg/Documents/attest/components/contracts/TagList.js';

var TagList = function TagList(_ref) {
  var tags = _ref.tags;
  return __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
    'ul',
    { className: 'mt1 list ma0 pa0', __source: {
        fileName: _jsxFileName,
        lineNumber: 2
      }
    },
    tags.map(function (tag) {
      return __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
        'li',
        {
          style: { background: tag.color },
          key: tag.name,
          className: 'bg-blue white fl pv1 ph3 mr2 mv1',
          __source: {
            fileName: _jsxFileName,
            lineNumber: 4
          }
        },
        tag.name
      );
    })
  );
};

/* harmony default export */ __webpack_exports__["a"] = (TagList);

/***/ }),

/***/ "./components/contracts/Title.js":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_react__ = __webpack_require__("react");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_react___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_react__);
var _jsxFileName = '/mnt/c/Users/mbg/Documents/attest/components/contracts/Title.js';

var Title = function Title(props) {
  return __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
    'div',
    { className: 'f3 b mb3', __source: {
        fileName: _jsxFileName,
        lineNumber: 2
      }
    },
    props.name
  );
};

/* harmony default export */ __webpack_exports__["a"] = (Title);

/***/ }),

/***/ "./components/general/CheckBox.js":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_react__ = __webpack_require__("react");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_react___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_react__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_classnames__ = __webpack_require__("classnames");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_classnames___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1_classnames__);
var _jsxFileName = '/mnt/c/Users/mbg/Documents/attest/components/general/CheckBox.js';

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }




var Checkbox = function (_Component) {
  _inherits(Checkbox, _Component);

  function Checkbox(props) {
    _classCallCheck(this, Checkbox);

    var _this = _possibleConstructorReturn(this, (Checkbox.__proto__ || Object.getPrototypeOf(Checkbox)).call(this, props));

    _this.toggleCheckboxChange = function () {
      var _this$props = _this.props,
          handleCheckboxChange = _this$props.handleCheckboxChange,
          label = _this$props.label;

      _this.setState(function (_ref) {
        var isChecked = _ref.isChecked;
        return {
          isChecked: !isChecked
        };
      });
      handleCheckboxChange(label);
    };

    _this.state = {
      isChecked: props.checked
    };
    return _this;
  }

  _createClass(Checkbox, [{
    key: 'getStyle',
    value: function getStyle() {
      var _props = this.props,
          color = _props.color,
          checked = _props.checked;

      return {
        backgroundColor: checked ? color : '',
        borderColor: color
      };
    }
  }, {
    key: 'render',
    value: function render() {
      var _props2 = this.props,
          label = _props2.label,
          color = _props2.color,
          checked = _props2.checked;


      return __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
        'li',
        { key: label, className: 'pb2 mr2 fl', __source: {
            fileName: _jsxFileName,
            lineNumber: 32
          }
        },
        __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
          'label',
          {
            __source: {
              fileName: _jsxFileName,
              lineNumber: 33
            }
          },
          __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement('input', {
            className: 'dn',
            type: 'checkbox',
            value: label,
            checked: checked,
            onChange: this.toggleCheckboxChange,
            __source: {
              fileName: _jsxFileName,
              lineNumber: 34
            }
          }),
          __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
            'div',
            {
              style: this.getStyle(),
              className: __WEBPACK_IMPORTED_MODULE_1_classnames___default()('pointer', 'fr', 'f4', 'pv1', 'ph3', 'bg-white', 'ba', 'bw1', 'ba', 'b--blue', checked && 'bg-blue', checked && 'white'),
              __source: {
                fileName: _jsxFileName,
                lineNumber: 41
              }
            },
            label
          )
        )
      );
    }
  }]);

  return Checkbox;
}(__WEBPACK_IMPORTED_MODULE_0_react__["Component"]);

/* harmony default export */ __webpack_exports__["a"] = (Checkbox);

/***/ }),

/***/ "./components/general/CheckboxList.js":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__CheckBox__ = __webpack_require__("./components/general/CheckBox.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_react__ = __webpack_require__("react");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_react___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1_react__);
var _jsxFileName = '/mnt/c/Users/mbg/Documents/attest/components/general/CheckboxList.js';

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }




var CheckboxList = function (_React$Component) {
  _inherits(CheckboxList, _React$Component);

  function CheckboxList(props) {
    _classCallCheck(this, CheckboxList);

    var _this = _possibleConstructorReturn(this, (CheckboxList.__proto__ || Object.getPrototypeOf(CheckboxList)).call(this, props));

    _this.createCheckboxes = function (arr, checked) {
      var _this$props = _this.props,
          toggleCheckbox = _this$props.toggleCheckbox,
          error = _this$props.error;

      if (arr.length > 0) {
        return arr.map(function (item, i) {
          return __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_0__CheckBox__["a" /* default */], {
            checked: item.checked,
            label: item,
            handleCheckboxChange: toggleCheckbox,
            key: i,
            __source: {
              fileName: _jsxFileName,
              lineNumber: 14
            }
          });
        });
      } else return __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement(
        'div',
        {
          __source: {
            fileName: _jsxFileName,
            lineNumber: 22
          }
        },
        error
      );
    };

    return _this;
  }

  _createClass(CheckboxList, [{
    key: 'render',
    value: function render() {
      var _props = this.props,
          content = _props.content,
          checked = _props.checked;

      return __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement(
        'ul',
        { className: 'mt2 pb2 ma0 f4 bw1 pa0 ph3 list flex flex-wrap  ', __source: {
            fileName: _jsxFileName,
            lineNumber: 28
          }
        },
        this.createCheckboxes(content, checked)
      );
    }
  }]);

  return CheckboxList;
}(__WEBPACK_IMPORTED_MODULE_1_react___default.a.Component);

/* harmony default export */ __webpack_exports__["a"] = (CheckboxList);

/***/ }),

/***/ "./components/general/CheckboxListTwo.js":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__CheckBox__ = __webpack_require__("./components/general/CheckBox.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_react__ = __webpack_require__("react");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_react___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1_react__);
var _jsxFileName = '/mnt/c/Users/mbg/Documents/attest/components/general/CheckboxListTwo.js';

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }




var CheckboxList = function (_React$Component) {
  _inherits(CheckboxList, _React$Component);

  function CheckboxList() {
    var _ref;

    var _temp, _this, _ret;

    _classCallCheck(this, CheckboxList);

    for (var _len = arguments.length, args = Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }

    return _ret = (_temp = (_this = _possibleConstructorReturn(this, (_ref = CheckboxList.__proto__ || Object.getPrototypeOf(CheckboxList)).call.apply(_ref, [this].concat(args))), _this), _this.createCheckboxes = function (arr, checked) {
      var check = checked || false;
      var _this$props = _this.props,
          toggleCheckbox = _this$props.toggleCheckbox,
          error = _this$props.error;

      if (arr.length > 0) {
        return arr.map(function (item, i) {
          return __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_0__CheckBox__["a" /* default */], {
            checked: item.checked,
            label: item.name,
            handleCheckboxChange: toggleCheckbox,
            key: i,
            color: item.color,
            __source: {
              fileName: _jsxFileName,
              lineNumber: 11
            }
          });
        });
      } else return __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement(
        'div',
        { className: 'f4', __source: {
            fileName: _jsxFileName,
            lineNumber: 20
          }
        },
        error
      );
    }, _temp), _possibleConstructorReturn(_this, _ret);
  }

  _createClass(CheckboxList, [{
    key: 'render',
    value: function render() {
      var _props = this.props,
          content = _props.content,
          checked = _props.checked;

      return __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement(
        'ul',
        { className: 'mt3 pb2 ma0 bw1 pa0 ph3 list flex flex-wrap', __source: {
            fileName: _jsxFileName,
            lineNumber: 26
          }
        },
        this.createCheckboxes(content, checked)
      );
    }
  }]);

  return CheckboxList;
}(__WEBPACK_IMPORTED_MODULE_1_react___default.a.Component);

/* harmony default export */ __webpack_exports__["a"] = (CheckboxList);

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

/***/ "./components/general/Hide.js":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_react__ = __webpack_require__("react");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_react___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_react__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_classnames__ = __webpack_require__("classnames");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_classnames___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1_classnames__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__styles_FadeInDiv__ = __webpack_require__("./components/styles/FadeInDiv.js");
var _jsxFileName = '/mnt/c/Users/mbg/Documents/attest/components/general/Hide.js';

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }





var HideToggle = function (_React$Component) {
  _inherits(HideToggle, _React$Component);

  function HideToggle() {
    var _ref;

    var _temp, _this, _ret;

    _classCallCheck(this, HideToggle);

    for (var _len = arguments.length, args = Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }

    return _ret = (_temp = (_this = _possibleConstructorReturn(this, (_ref = HideToggle.__proto__ || Object.getPrototypeOf(HideToggle)).call.apply(_ref, [this].concat(args))), _this), _this.setFilter = function () {
      _this.props.toggleFilter(_this.props.title);
    }, _temp), _possibleConstructorReturn(_this, _ret);
  }

  _createClass(HideToggle, [{
    key: 'render',
    value: function render() {
      var _props = this.props,
          title = _props.title,
          children = _props.children,
          filterUsed = _props.filterUsed,
          toggleFilter = _props.toggleFilter,
          activeFilter = _props.activeFilter;

      return __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
        'div',
        {
          __source: {
            fileName: _jsxFileName,
            lineNumber: 13
          }
        },
        __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
          'div',
          { onClick: this.setFilter, className: 'mb2 pointer mr2', __source: {
              fileName: _jsxFileName,
              lineNumber: 14
            }
          },
          __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
            'span',
            {
              className: __WEBPACK_IMPORTED_MODULE_1_classnames___default()(filterUsed && 'bg-light-gray', 'ph3', 'pv2', 'f4'),
              __source: {
                fileName: _jsxFileName,
                lineNumber: 15
              }
            },
            title
          )
        ),
        __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
          __WEBPACK_IMPORTED_MODULE_2__styles_FadeInDiv__["a" /* default */],
          { activeFilter: activeFilter, title: title, __source: {
              fileName: _jsxFileName,
              lineNumber: 22
            }
          },
          children
        )
      );
    }
  }]);

  return HideToggle;
}(__WEBPACK_IMPORTED_MODULE_0_react___default.a.Component);

/* harmony default export */ __webpack_exports__["a"] = (HideToggle);

/***/ }),

/***/ "./components/general/Input.js":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_react__ = __webpack_require__("react");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_react___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_react__);
var _jsxFileName = '/mnt/c/Users/mbg/Documents/attest/components/general/Input.js';

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();



function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }



var Input = function (_react$Component) {
  _inherits(Input, _react$Component);

  function Input(props) {
    _classCallCheck(this, Input);

    var _this = _possibleConstructorReturn(this, (Input.__proto__ || Object.getPrototypeOf(Input)).call(this, props));

    _this.state = {
      active: false
    };
    return _this;
  }

  _createClass(Input, [{
    key: 'render',
    value: function render() {
      var _props = this.props,
          label = _props.label,
          type = _props.type,
          placeholder = _props.placeholder,
          name = _props.name,
          onChange = _props.onChange,
          value = _props.value,
          error = _props.error,
          onFocus = _props.onFocus,
          onBlur = _props.onBlur;


      return __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
        'div',
        { className: 'f4 b', __source: {
            fileName: _jsxFileName,
            lineNumber: 25
          }
        },
        __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
          'div',
          {
            __source: {
              fileName: _jsxFileName,
              lineNumber: 26
            }
          },
          __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
            'label',
            { className: 'mr3', htmlFor: value, __source: {
                fileName: _jsxFileName,
                lineNumber: 27
              }
            },
            label
          )
        ),
        __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement('input', {
          className: 'w-100 bb bw1 b--black-20 f4 font pa1 mw5',
          id: value,
          onChange: onChange,
          placeholder: placeholder,
          value: value,
          type: type,
          name: name,
          onFocus: onFocus,
          onBlur: onBlur,
          __source: {
            fileName: _jsxFileName,
            lineNumber: 31
          }
        }),
        this.props.onClick && __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
          'div',
          { className: 'mt3 pt0-ns', __source: {
              fileName: _jsxFileName,
              lineNumber: 43
            }
          },
          __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
            'button',
            {
              className: 'f6 bg-green white pv2 ph3',
              onClick: this.props.onClick,
              __source: {
                fileName: _jsxFileName,
                lineNumber: 44
              }
            },
            __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement('i', { className: 'fa fa-plus', __source: {
                fileName: _jsxFileName,
                lineNumber: 48
              }
            })
          )
        ),
        __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
          'div',
          { className: 'red b f6', __source: {
              fileName: _jsxFileName,
              lineNumber: 51
            }
          },
          error
        )
      );
    }
  }]);

  return Input;
}(__WEBPACK_IMPORTED_MODULE_0_react___default.a.Component);

/* harmony default export */ __webpack_exports__["a"] = (Input);

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

/***/ "./components/general/Radio.js":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_react__ = __webpack_require__("react");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_react___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_react__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_classnames__ = __webpack_require__("classnames");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_classnames___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1_classnames__);
var _jsxFileName = '/mnt/c/Users/mbg/Documents/attest/components/general/Radio.js';

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();



function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }




var Radio = function (_react$Component) {
  _inherits(Radio, _react$Component);

  function Radio() {
    _classCallCheck(this, Radio);

    return _possibleConstructorReturn(this, (Radio.__proto__ || Object.getPrototypeOf(Radio)).apply(this, arguments));
  }

  _createClass(Radio, [{
    key: 'getStyle',
    value: function getStyle(status) {
      var selectedItem = this.props.selectedItem;

      return {
        backgroundColor: selectedItem === status.name ? status.color : '',
        borderColor: status.color
      };
    }
  }, {
    key: 'render',
    value: function render() {
      var _this2 = this;

      var _props = this.props,
          items = _props.items,
          handleChange = _props.handleChange,
          selectedItem = _props.selectedItem;

      return items.map(function (s) {
        return __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
          'div',
          { key: s.name, className: 'fl mr2', __source: {
              fileName: _jsxFileName,
              lineNumber: 16
            }
          },
          __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
            'label',
            {
              style: _this2.getStyle(s),
              className: __WEBPACK_IMPORTED_MODULE_1_classnames___default()('pointer', 'bg-white', 'fr', 'f4', 'pv1', 'ph3', 'mb2', 'ba', 'b--blue', 'bw1', 'black', s.name === selectedItem && 'bg-blue', s.name === selectedItem && 'white'),
              __source: {
                fileName: _jsxFileName,
                lineNumber: 17
              }
            },
            __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement('input', {
              className: 'dn',
              type: 'radio',
              value: s.name,
              checked: s.name === selectedItem,
              onChange: function onChange() {
                return handleChange(s);
              },
              __source: {
                fileName: _jsxFileName,
                lineNumber: 35
              }
            }),
            s.name
          )
        );
      });
    }
  }]);

  return Radio;
}(__WEBPACK_IMPORTED_MODULE_0_react___default.a.Component);

/* harmony default export */ __webpack_exports__["a"] = (Radio);

/***/ }),

/***/ "./components/general/Select.js":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_react__ = __webpack_require__("react");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_react___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_react__);
var _jsxFileName = '/mnt/c/Users/mbg/Documents/attest/components/general/Select.js';

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();



function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }



var Select = function (_react$Component) {
  _inherits(Select, _react$Component);

  function Select() {
    _classCallCheck(this, Select);

    return _possibleConstructorReturn(this, (Select.__proto__ || Object.getPrototypeOf(Select)).apply(this, arguments));
  }

  _createClass(Select, [{
    key: 'render',
    value: function render() {
      var _props = this.props,
          selectedItem = _props.selectedItem,
          handleChange = _props.handleChange,
          items = _props.items;

      return __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
        'div',
        { className: 'mb2', __source: {
            fileName: _jsxFileName,
            lineNumber: 7
          }
        },
        __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
          'select',
          {
            className: 'pa2 f4 font ba bw1 b--black-20',
            value: selectedItem,
            key: selectedItem,
            onChange: handleChange,
            __source: {
              fileName: _jsxFileName,
              lineNumber: 8
            }
          },
          items.map(function (l) {
            return __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
              'option',
              { key: l.email, value: l.email, __source: {
                  fileName: _jsxFileName,
                  lineNumber: 15
                }
              },
              l.email
            );
          })
        )
      );
    }
  }]);

  return Select;
}(__WEBPACK_IMPORTED_MODULE_0_react___default.a.Component);

/* harmony default export */ __webpack_exports__["a"] = (Select);

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

/***/ "./components/styles/Box.js":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_styled_components__ = __webpack_require__("styled-components");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_styled_components___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_styled_components__);
var _templateObject = _taggedTemplateLiteral(['\n'], ['\n']);

function _taggedTemplateLiteral(strings, raw) { return Object.freeze(Object.defineProperties(strings, { raw: { value: Object.freeze(raw) } })); }



var Box = __WEBPACK_IMPORTED_MODULE_0_styled_components___default.a.div.attrs({
  className: 'pa3 bg-white ba b--black-20'
})(_templateObject);
/* harmony default export */ __webpack_exports__["a"] = (Box);

/***/ }),

/***/ "./components/styles/ClearFix.js":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_react__ = __webpack_require__("react");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_react___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_react__);
var _jsxFileName = '/mnt/c/Users/mbg/Documents/attest/components/styles/ClearFix.js';

var ClearFix = function ClearFix() {
  return __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement('div', { className: 'cf', __source: {
      fileName: _jsxFileName,
      lineNumber: 2
    }
  });
};

/* harmony default export */ __webpack_exports__["a"] = (ClearFix);

/***/ }),

/***/ "./components/styles/FadeInDiv.js":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_styled_components__ = __webpack_require__("styled-components");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_styled_components___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_styled_components__);
var _templateObject = _taggedTemplateLiteral(['\n \n  display: ', ';\n'], ['\n \n  display: ', ';\n']);

function _taggedTemplateLiteral(strings, raw) { return Object.freeze(Object.defineProperties(strings, { raw: { value: Object.freeze(raw) } })); }



var FadeInDiv = __WEBPACK_IMPORTED_MODULE_0_styled_components___default.a.div.attrs({
  className: 'absolute shadow-4 bg-white'
})(_templateObject, function (props) {
  return props.activeFilter === props.title ? '' : 'none';
});
/* harmony default export */ __webpack_exports__["a"] = (FadeInDiv);
/*
opacity: ${props => (props.activeFilter !== props.title ? 0 : 1)};
transition: opacity .5s ease-in; */

/***/ }),

/***/ "./components/styles/FadeRightDiv.js":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_styled_components__ = __webpack_require__("styled-components");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_styled_components___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_styled_components__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_react_animations__ = __webpack_require__("react-animations");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_react_animations___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1_react_animations__);
var _templateObject = _taggedTemplateLiteral(['', ''], ['', '']),
    _templateObject2 = _taggedTemplateLiteral(['\n  animation: 1s ', ';\n'], ['\n  animation: 1s ', ';\n']);

function _taggedTemplateLiteral(strings, raw) { return Object.freeze(Object.defineProperties(strings, { raw: { value: Object.freeze(raw) } })); }




var fadeAnimation = Object(__WEBPACK_IMPORTED_MODULE_0_styled_components__["keyframes"])(_templateObject, __WEBPACK_IMPORTED_MODULE_1_react_animations__["fadeInRightBig"]);

var FadeInRightDiv = __WEBPACK_IMPORTED_MODULE_0_styled_components___default.a.div(_templateObject2, fadeAnimation);
/* harmony default export */ __webpack_exports__["a"] = (FadeInRightDiv);

/***/ }),

/***/ "./components/styles/FadeTransition.js":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_react__ = __webpack_require__("react");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_react___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_react__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_react_transition_group__ = __webpack_require__("react-transition-group");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_react_transition_group___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1_react_transition_group__);
var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

var _jsxFileName = '/mnt/c/Users/mbg/Documents/attest/components/styles/FadeTransition.js';


function _objectWithoutProperties(obj, keys) { var target = {}; for (var i in obj) { if (keys.indexOf(i) >= 0) continue; if (!Object.prototype.hasOwnProperty.call(obj, i)) continue; target[i] = obj[i]; } return target; }



var Fade = function Fade(_ref) {
  var children = _ref.children,
      props = _objectWithoutProperties(_ref, ['children']);

  return __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
    __WEBPACK_IMPORTED_MODULE_1_react_transition_group__["CSSTransition"],
    _extends({}, props, { timeout: 1000, classNames: 'fade', __source: {
        fileName: _jsxFileName,
        lineNumber: 4
      }
    }),
    children
  );
};

/* harmony default export */ __webpack_exports__["a"] = (Fade);

/***/ }),

/***/ "./components/styles/Flex.js":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_styled_components__ = __webpack_require__("styled-components");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_styled_components___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_styled_components__);
var _templateObject = _taggedTemplateLiteral(['\n\n'], ['\n\n']);

function _taggedTemplateLiteral(strings, raw) { return Object.freeze(Object.defineProperties(strings, { raw: { value: Object.freeze(raw) } })); }



var Flex = __WEBPACK_IMPORTED_MODULE_0_styled_components___default.a.div.attrs({
  className: 'flex flex-wrap'
})(_templateObject);
/* harmony default export */ __webpack_exports__["a"] = (Flex);

/***/ }),

/***/ "./components/styles/FormButton.js":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_react__ = __webpack_require__("react");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_react___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_react__);
var _jsxFileName = '/mnt/c/Users/mbg/Documents/attest/components/styles/FormButton.js';

var FormButton = function FormButton(_ref) {
  var onClick = _ref.onClick,
      text = _ref.text;
  return __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement('input', {
    className: 'pv2 ph3 font f5 mt3 bg-green white',
    onClick: onClick,
    type: 'submit',
    value: text,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 2
    }
  });
};

/* harmony default export */ __webpack_exports__["a"] = (FormButton);

/***/ }),

/***/ "./components/styles/FormSection.js":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_react__ = __webpack_require__("react");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_react___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_react__);
var _jsxFileName = '/mnt/c/Users/mbg/Documents/attest/components/styles/FormSection.js';

var FormSection = function FormSection(_ref) {
  var children = _ref.children;
  return __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
    'div',
    { className: 'pv2 w-100', __source: {
        fileName: _jsxFileName,
        lineNumber: 2
      }
    },
    children
  );
};

/* harmony default export */ __webpack_exports__["a"] = (FormSection);

/***/ }),

/***/ "./components/styles/FormTitle.js":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_react__ = __webpack_require__("react");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_react___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_react__);
var _jsxFileName = '/mnt/c/Users/mbg/Documents/attest/components/styles/FormTitle.js';

var FormTitle = function FormTitle(props) {
  return __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
    'div',
    { className: 'b f3 pb1', __source: {
        fileName: _jsxFileName,
        lineNumber: 1
      }
    },
    props.title
  );
};
/* harmony default export */ __webpack_exports__["a"] = (FormTitle);

/***/ }),

/***/ "./components/styles/MenuAnimation.js":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_styled_components__ = __webpack_require__("styled-components");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_styled_components___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_styled_components__);
var _templateObject = _taggedTemplateLiteral(['\ntransform: translateX(', ');\ntransition: transform .3s ease-in;\n'], ['\ntransform: translateX(', ');\ntransition: transform .3s ease-in;\n']);

function _taggedTemplateLiteral(strings, raw) { return Object.freeze(Object.defineProperties(strings, { raw: { value: Object.freeze(raw) } })); }



var MenuAnimation = __WEBPACK_IMPORTED_MODULE_0_styled_components___default.a.div.attrs({
  className: 'ph3 pt4 bg-dark-gray height front fixed'
})(_templateObject, function (props) {
  return props.showMenu ? '0px' : '-60px';
});

/* harmony default export */ __webpack_exports__["a"] = (MenuAnimation);

/***/ }),

/***/ "./components/styles/PageAnimation.js":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_styled_components__ = __webpack_require__("styled-components");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_styled_components___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_styled_components__);
var _templateObject = _taggedTemplateLiteral(['\n\n'], ['\n\n']);

function _taggedTemplateLiteral(strings, raw) { return Object.freeze(Object.defineProperties(strings, { raw: { value: Object.freeze(raw) } })); }



var PageAnimation = __WEBPACK_IMPORTED_MODULE_0_styled_components___default.a.div.attrs({
  className: 'ml2 ml0-l w-100'
})(_templateObject);

// transform: translateX(${props => (props.showMenu ? '60px' : '0px')});
// transition: transform .3s ease-in;

/* harmony default export */ __webpack_exports__["a"] = (PageAnimation);

/***/ }),

/***/ "./components/styles/SectionTitle.js":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_react__ = __webpack_require__("react");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_react___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_react__);
var _jsxFileName = '/mnt/c/Users/mbg/Documents/attest/components/styles/SectionTitle.js';

var SectionTitle = function SectionTitle(_ref) {
  var text = _ref.text;
  return __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
    'span',
    { className: 'pt1 fl mr3 f4 b mv2', __source: {
        fileName: _jsxFileName,
        lineNumber: 2
      }
    },
    text
  );
};
/* harmony default export */ __webpack_exports__["a"] = (SectionTitle);

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

/***/ "./lib/filterContracts.js":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_lodash__ = __webpack_require__("lodash");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_lodash___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_lodash__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_moment__ = __webpack_require__("moment");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_moment___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1_moment__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_moment_range__ = __webpack_require__("moment-range");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_moment_range___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2_moment_range__);



var moment = Object(__WEBPACK_IMPORTED_MODULE_2_moment_range__["extendMoment"])(__WEBPACK_IMPORTED_MODULE_1_moment___default.a);

var filterContracts = function filterContracts(filters, contracts) {
  var copy = __WEBPACK_IMPORTED_MODULE_0_lodash___default.a.cloneDeep(contracts);
  var tags = filters.tags,
      businessUnits = filters.businessUnits,
      statuses = filters.statuses,
      dateRange = filters.dateRange,
      lawyers = filters.lawyers,
      selectedDateOption = filters.selectedDateOption;

  tags = __WEBPACK_IMPORTED_MODULE_0_lodash___default.a.map(__WEBPACK_IMPORTED_MODULE_0_lodash___default.a.filter(tags, 'checked'), function (t) {
    return t.name;
  });
  businessUnits = __WEBPACK_IMPORTED_MODULE_0_lodash___default.a.map(__WEBPACK_IMPORTED_MODULE_0_lodash___default.a.filter(businessUnits, 'checked'), function (b) {
    return b.name;
  });
  statuses = __WEBPACK_IMPORTED_MODULE_0_lodash___default.a.map(__WEBPACK_IMPORTED_MODULE_0_lodash___default.a.filter(statuses, 'checked'), function (s) {
    return s.name;
  });

  copy = __WEBPACK_IMPORTED_MODULE_0_lodash___default.a.flatten(__WEBPACK_IMPORTED_MODULE_0_lodash___default.a.values(__WEBPACK_IMPORTED_MODULE_0_lodash___default.a.groupBy(copy, function (o) {
    return o.currentStatus.name;
  })));

  // tag filters
  if (tags.length > 0) {
    copy = __WEBPACK_IMPORTED_MODULE_0_lodash___default.a.uniq(__WEBPACK_IMPORTED_MODULE_0_lodash___default.a.flatten(tags.map(function (t) {
      return __WEBPACK_IMPORTED_MODULE_0_lodash___default.a.filter(copy, { tags: [{ name: t }] });
    })));
  }

  // business unit filter
  if (businessUnits.length > 0) {
    copy = __WEBPACK_IMPORTED_MODULE_0_lodash___default.a.flatten(__WEBPACK_IMPORTED_MODULE_0_lodash___default.a.values(__WEBPACK_IMPORTED_MODULE_0_lodash___default.a.pick(__WEBPACK_IMPORTED_MODULE_0_lodash___default.a.groupBy(copy, function (o) {
      return o.businessUnit.name;
    }), businessUnits)));
  }

  // lawyer filter
  if (lawyers.length > 0) {
    var copyWithLawyers = copy.map(function (c) {
      var lawyerName = c.assignedTo.firstName + ' ' + c.assignedTo.lastName;
      c.lawyerName = lawyerName;
      return c;
    });
    copy = __WEBPACK_IMPORTED_MODULE_0_lodash___default.a.flatten(__WEBPACK_IMPORTED_MODULE_0_lodash___default.a.values(__WEBPACK_IMPORTED_MODULE_0_lodash___default.a.pick(__WEBPACK_IMPORTED_MODULE_0_lodash___default.a.groupBy(copyWithLawyers, 'lawyerName'), lawyers)));
  }

  // date filters
  if (dateRange.startDate && dateRange.startDate.isValid() && dateRange.endDate && dateRange.endDate.isValid()) {
    var startDate = dateRange.startDate,
        endDate = dateRange.endDate;

    var range = moment.range(startDate, endDate);
    if (selectedDateOption !== 'Expiry date') {
      copy = __WEBPACK_IMPORTED_MODULE_0_lodash___default.a.filter(copy, function (s) {
        var latestDate = moment(__WEBPACK_IMPORTED_MODULE_0_lodash___default.a.last(s.statuses).date);
        return range.contains(latestDate);
      });
    } else {
      copy = __WEBPACK_IMPORTED_MODULE_0_lodash___default.a.filter(copy, function (s) {
        var expiryDate = moment(s.expiryDate);
        return range.contains(expiryDate);
      });
    }
  }
  if (statuses.length > 0) {
    // status filter
    copy = __WEBPACK_IMPORTED_MODULE_0_lodash___default.a.flatten(__WEBPACK_IMPORTED_MODULE_0_lodash___default.a.values(__WEBPACK_IMPORTED_MODULE_0_lodash___default.a.pick(__WEBPACK_IMPORTED_MODULE_0_lodash___default.a.groupBy(copy, function (o) {
      return o.currentStatus.name;
    }), statuses)));
  }
  return copy;
};

/* harmony default export */ __webpack_exports__["a"] = (filterContracts);

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

/***/ "./lib/search.js":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_fuse_js__ = __webpack_require__("fuse.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_fuse_js___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_fuse_js__);
var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };



function search(list, value) {
  var options = {
    keys: ['ownerEntity', 'lawyerName', 'currentStatus', 'businessUnit', 'tags', 'internalParties', 'externalParties', 'statuses.status', 'assignedTo.name', 'assignedTo.email']
  };
  if (!value || value.length < 3) {
    return list;
  }

  var fuse = new __WEBPACK_IMPORTED_MODULE_0_fuse_js___default.a(list, _extends({
    threshold: 0.4
  }, options));

  return fuse.search(value.trim());
}

/* harmony default export */ __webpack_exports__["a"] = (search);

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

/***/ "./modals/EditContractContainer.js":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_react__ = __webpack_require__("react");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_react___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_react__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__queries_UpdateContractMutation__ = __webpack_require__("./queries/UpdateContractMutation.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__queries_ContractsQuery__ = __webpack_require__("./queries/ContractsQuery.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_react_apollo__ = __webpack_require__("react-apollo");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_react_apollo___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_3_react_apollo__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__components_add_contract_AddContract__ = __webpack_require__("./components/add-contract/AddContract.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__components_general_Loading__ = __webpack_require__("./components/general/Loading.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6_react_modal__ = __webpack_require__("react-modal");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6_react_modal___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_6_react_modal__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__components_styles_Box__ = __webpack_require__("./components/styles/Box.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8_lodash__ = __webpack_require__("lodash");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8_lodash___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_8_lodash__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9__components_styles_FadeRightDiv__ = __webpack_require__("./components/styles/FadeRightDiv.js");
var _jsxFileName = '/mnt/c/Users/mbg/Documents/attest/modals/EditContractContainer.js';











var EditContractContainer = function EditContractContainer(props) {
  if (!props.loading) {
    return __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
      __WEBPACK_IMPORTED_MODULE_9__components_styles_FadeRightDiv__["a" /* default */],
      {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 14
        }
      },
      __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
        __WEBPACK_IMPORTED_MODULE_6_react_modal___default.a,
        {
          className: 'content ml7-l ml5-m ml4-ns mw7 mt5-l mt0',
          overlayClassName: 'overlay',
          onRequestClose: props.closeModal,
          isOpen: props.isOpen,
          __source: {
            fileName: _jsxFileName,
            lineNumber: 15
          }
        },
        __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
          __WEBPACK_IMPORTED_MODULE_7__components_styles_Box__["a" /* default */],
          {
            __source: {
              fileName: _jsxFileName,
              lineNumber: 21
            }
          },
          __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_4__components_add_contract_AddContract__["a" /* default */], {
            closeModal: props.closeModal,
            isOpen: props.isOpen,
            allUsers: props.allUsers,
            masterEntity: props.masterEntity,
            contract: props.contract,
            title: 'Edit Contract',
            handleContract: props.handleContract,
            __source: {
              fileName: _jsxFileName,
              lineNumber: 22
            }
          })
        )
      )
    );
  }
  return __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_5__components_general_Loading__["a" /* default */], {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 36
    }
  });
};

var EditContractMutation = Object(__WEBPACK_IMPORTED_MODULE_3_react_apollo__["graphql"])(__WEBPACK_IMPORTED_MODULE_1__queries_UpdateContractMutation__["a" /* default */], {
  props: function props(_ref) {
    var ownProps = _ref.ownProps,
        mutate = _ref.mutate;

    return {
      handleContract: function handleContract(contract, closeModal) {
        var id = contract.id;
        return mutate({
          variables: { contract: contract },
          update: function update(store, response) {
            closeModal();
            var contract = response.data.updateContract;
            var data = store.readQuery({ query: __WEBPACK_IMPORTED_MODULE_2__queries_ContractsQuery__["a" /* default */] });
            __WEBPACK_IMPORTED_MODULE_8_lodash___default.a.extend(__WEBPACK_IMPORTED_MODULE_8_lodash___default.a.find(data.contracts, { id: id }), contract);
            store.writeQuery({ query: __WEBPACK_IMPORTED_MODULE_2__queries_ContractsQuery__["a" /* default */], data: data });
          }
        });
      }
    };
  }
});

var EditFormWithMutation = Object(__WEBPACK_IMPORTED_MODULE_3_react_apollo__["compose"])(EditContractMutation)(EditContractContainer);

/* harmony default export */ __webpack_exports__["a"] = (EditFormWithMutation);

/***/ }),

/***/ "./pages/contracts.js":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_react__ = __webpack_require__("react");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_react___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_react__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__components_contracts_ContractsContainer__ = __webpack_require__("./components/contracts/ContractsContainer.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__components_Page__ = __webpack_require__("./components/Page.js");
var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

var _jsxFileName = '/mnt/c/Users/mbg/Documents/attest/pages/contracts.js';




var ContractsPage = Object(__WEBPACK_IMPORTED_MODULE_2__components_Page__["a" /* AuthPage */])(function (props) {
  return __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_1__components_contracts_ContractsContainer__["a" /* default */], _extends({}, props, {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 4
    }
  }));
});

/* harmony default export */ __webpack_exports__["default"] = (ContractsPage);

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

/***/ "./queries/DeleteContractMutation.js":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_graphql_tag__ = __webpack_require__("graphql-tag");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_graphql_tag___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_graphql_tag__);
var _templateObject = _taggedTemplateLiteral(['\nmutation deleteContract($id: ID!) {\n  deleteContract(id: $id) {\n    id\n  }\n}\n'], ['\nmutation deleteContract($id: ID!) {\n  deleteContract(id: $id) {\n    id\n  }\n}\n']);

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

/***/ "./queries/UpdateContractMutation.js":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_graphql_tag__ = __webpack_require__("graphql-tag");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_graphql_tag___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_graphql_tag__);
var _templateObject = _taggedTemplateLiteral(['\nmutation updateContract($contract: PostContractWithID) {\n  updateContract(contract: $contract) {\n    internalParties\n    externalParties\n    id\n    executionDate\n    effectiveDate\n    expiryDate\n    currentStatus {\n      name \n      color\n      date\n    }\n    statuses {\n      name\n      color\n      date\n    }\n    tags {\n      name\n      color\n    }\n    businessUnit {\n      name\n      color\n    }\n    assignedTo {\n      name\n      email\n      id\n    }\n  }\n}\n'], ['\nmutation updateContract($contract: PostContractWithID) {\n  updateContract(contract: $contract) {\n    internalParties\n    externalParties\n    id\n    executionDate\n    effectiveDate\n    expiryDate\n    currentStatus {\n      name \n      color\n      date\n    }\n    statuses {\n      name\n      color\n      date\n    }\n    tags {\n      name\n      color\n    }\n    businessUnit {\n      name\n      color\n    }\n    assignedTo {\n      name\n      email\n      id\n    }\n  }\n}\n']);

function _taggedTemplateLiteral(strings, raw) { return Object.freeze(Object.defineProperties(strings, { raw: { value: Object.freeze(raw) } })); }



/* harmony default export */ __webpack_exports__["a"] = (__WEBPACK_IMPORTED_MODULE_0_graphql_tag___default()(_templateObject));

/***/ }),

/***/ 2:
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__("./pages/contracts.js");


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

/***/ "fuse.js":
/***/ (function(module, exports) {

module.exports = require("fuse.js");

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

/***/ "moment":
/***/ (function(module, exports) {

module.exports = require("moment");

/***/ }),

/***/ "moment-range":
/***/ (function(module, exports) {

module.exports = require("moment-range");

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

/***/ "react-animations":
/***/ (function(module, exports) {

module.exports = require("react-animations");

/***/ }),

/***/ "react-apollo":
/***/ (function(module, exports) {

module.exports = require("react-apollo");

/***/ }),

/***/ "react-datepicker":
/***/ (function(module, exports) {

module.exports = require("react-datepicker");

/***/ }),

/***/ "react-modal":
/***/ (function(module, exports) {

module.exports = require("react-modal");

/***/ }),

/***/ "react-moment":
/***/ (function(module, exports) {

module.exports = require("react-moment");

/***/ }),

/***/ "react-transition-group":
/***/ (function(module, exports) {

module.exports = require("react-transition-group");

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
//# sourceMappingURL=contracts.js.map