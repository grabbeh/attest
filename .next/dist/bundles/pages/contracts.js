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
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.UserPage = exports.AuthPage = exports.Page = undefined;

var _withData = __webpack_require__("./lib/withData.js");

var _withData2 = _interopRequireDefault(_withData);

var _withAuth = __webpack_require__("./lib/withAuth.js");

var _withAuth2 = _interopRequireDefault(_withAuth);

var _withUser = __webpack_require__("./lib/withUser.js");

var _withUser2 = _interopRequireDefault(_withUser);

var _withLayout = __webpack_require__("./lib/withLayout.js");

var _withLayout2 = _interopRequireDefault(_withLayout);

var _withAuthLayout = __webpack_require__("./lib/withAuthLayout.js");

var _withAuthLayout2 = _interopRequireDefault(_withAuthLayout);

var _recompose = __webpack_require__("recompose");

var _reactApollo = __webpack_require__("react-apollo");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var Page = (0, _recompose.compose)(_withData2.default, _reactApollo.withApollo, _withLayout2.default);
var AuthPage = (0, _recompose.compose)(_withData2.default, _withAuth2.default, _reactApollo.withApollo, _withAuthLayout2.default);
var UserPage = (0, _recompose.compose)(_withData2.default, _withUser2.default, _reactApollo.withApollo, _withLayout2.default);

exports.Page = Page;
exports.AuthPage = AuthPage;
exports.UserPage = UserPage;

/***/ }),

/***/ "./components/add-contract/AddContract.js":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_react__ = __webpack_require__("react");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_react___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_react__);


Object.defineProperty(exports, "__esModule", {
  value: true
});
var _jsxFileName = 'C:\\Users\\mbg\\Documents\\attest\\components\\add-contract\\AddContract.js';

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();



var _react = __webpack_require__("react");

var _react2 = _interopRequireDefault(_react);

var _Input = __webpack_require__("./components/general/Input.js");

var _Input2 = _interopRequireDefault(_Input);

var _classnames = __webpack_require__("classnames");

var _classnames2 = _interopRequireDefault(_classnames);

var _CheckBox = __webpack_require__("./components/general/CheckBox.js");

var _CheckBox2 = _interopRequireDefault(_CheckBox);

var _Radio = __webpack_require__("./components/general/Radio.js");

var _Radio2 = _interopRequireDefault(_Radio);

var _FormSection = __webpack_require__("./components/styles/FormSection.js");

var _FormSection2 = _interopRequireDefault(_FormSection);

var _FormButton = __webpack_require__("./components/styles/FormButton.js");

var _FormButton2 = _interopRequireDefault(_FormButton);

var _FormTitle = __webpack_require__("./components/styles/FormTitle.js");

var _FormTitle2 = _interopRequireDefault(_FormTitle);

var _SectionTitle = __webpack_require__("./components/styles/SectionTitle.js");

var _SectionTitle2 = _interopRequireDefault(_SectionTitle);

var _ClearFix = __webpack_require__("./components/styles/ClearFix.js");

var _ClearFix2 = _interopRequireDefault(_ClearFix);

var _Select = __webpack_require__("./components/general/Select.js");

var _Select2 = _interopRequireDefault(_Select);

var _reactDatepicker = __webpack_require__("react-datepicker");

var _reactDatepicker2 = _interopRequireDefault(_reactDatepicker);

var _Loading = __webpack_require__("./components/general/Loading.js");

var _Loading2 = _interopRequireDefault(_Loading);

var _Flex = __webpack_require__("./components/styles/Flex.js");

var _Flex2 = _interopRequireDefault(_Flex);

var _SideColumn = __webpack_require__("./components/side-menu/SideColumn.js");

var _SideColumn2 = _interopRequireDefault(_SideColumn);

var _Box = __webpack_require__("./components/styles/Box.js");

var _Box2 = _interopRequireDefault(_Box);

var _lodash = __webpack_require__("lodash");

var _lodash2 = _interopRequireDefault(_lodash);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

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

    _this.handleExecutionDate = function (date) {
      var contract = _this.state.contract;
      contract.executionDate = date;
      _this.setState({ contract: contract });
    };

    _this.handleEffectiveDate = function (date) {
      var contract = _this.state.contract;
      contract.effectiveDate = date;
      _this.setState({ contract: contract });
    };

    _this.handleExpiryDate = function (date) {
      var contract = _this.state.contract;
      contract.expiryDate = date;
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

      contract.tags = _lodash2.default.without(contract.tags, tag);
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
      var id = e.target.value;
      var contract = _this.state.contract;
      var lawyers = _this.props.masterEntity.lawyers;

      lawyers.forEach(function (lawyer) {
        if (lawyer.id == id) {
          var newLawyer = lawyer;
          contract.assignedTo = newLawyer;
          _this.setState({ contract: contract, selectedLawyer: id });
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

      var relevantTag = _lodash2.default.find(tags, { name: label });
      if (_lodash2.default.find(selectedTags, { name: label })) {
        _lodash2.default.remove(selectedTags, { name: label });
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
      lawyers: props.masterEntity.lawyers,
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
      }, _defineProperty(_contract, 'currentStatus', ''), _defineProperty(_contract, 'assignedTo', { firstName: '', lastName: '' }), _contract)
    };
    return _this;
  }

  _createClass(AddContractForm, [{
    key: 'componentWillMount',

    /*
    componentWillReceiveProps (nextProps) {
      if (nextProps.contract) {
        this.setState({ contract: nextProps.contract })
      }
    } */

    value: function componentWillMount() {
      if (this.props.contract) {
        var contract = this.props.contract;

        this.setState({
          contract: contract,
          selectedStatus: contract.currentStatus.name,
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
              lineNumber: 208
            }
          },
          __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
            'select',
            {
              className: 'pa1 font ba bw1 b--blue',
              value: selectedBusinessUnit,
              key: selectedBusinessUnit,
              onChange: this.handleBusinessUnitChange,
              __source: {
                fileName: _jsxFileName,
                lineNumber: 209
              }
            },
            businessUnits.map(function (unit) {
              return __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
                'option',
                { key: unit.name, value: unit.name, __source: {
                    fileName: _jsxFileName,
                    lineNumber: 216
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
        tags = _lodash2.default.uniqBy(_lodash2.default.concat(tags, initialTags), 'name');
        var updatedTags = this.processTags(tags, contract.tags);
        tagInputs = updatedTags.map(function (t, i) {
          return __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
            'div',
            { key: i, className: 'list', __source: {
                fileName: _jsxFileName,
                lineNumber: 230
              }
            },
            __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(_CheckBox2.default, {
              handleCheckboxChange: _this2.handleCheckboxChange,
              checked: t.checked,
              label: t.name,
              value: t.name,
              color: t.color,
              __source: {
                fileName: _jsxFileName,
                lineNumber: 231
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
            lineNumber: 243
          }
        },
        __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(_FormTitle2.default, { title: this.props.title, __source: {
            fileName: _jsxFileName,
            lineNumber: 244
          }
        }),
        __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
          _FormSection2.default,
          {
            __source: {
              fileName: _jsxFileName,
              lineNumber: 245
            }
          },
          __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(_Input2.default, {
            onChange: this.saveToState,
            value: externalParties,
            label: 'External party',
            name: 'externalParty',
            error: this.state.externalPartyError,
            __source: {
              fileName: _jsxFileName,
              lineNumber: 246
            }
          })
        ),
        __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(_ClearFix2.default, {
          __source: {
            fileName: _jsxFileName,
            lineNumber: 254
          }
        }),
        __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
          _FormSection2.default,
          {
            __source: {
              fileName: _jsxFileName,
              lineNumber: 255
            }
          },
          __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(_SectionTitle2.default, { text: 'Tags', __source: {
              fileName: _jsxFileName,
              lineNumber: 256
            }
          }),
          tagInputs || __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
            'div',
            {
              __source: {
                fileName: _jsxFileName,
                lineNumber: 257
              }
            },
            'Add tags here'
          )
        ),
        __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(_ClearFix2.default, {
          __source: {
            fileName: _jsxFileName,
            lineNumber: 259
          }
        }),
        __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
          _FormSection2.default,
          {
            __source: {
              fileName: _jsxFileName,
              lineNumber: 260
            }
          },
          __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(_SectionTitle2.default, { text: 'Status', __source: {
              fileName: _jsxFileName,
              lineNumber: 261
            }
          }),
          statuses && statuses.length ? __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(_Radio2.default, {
            handleChange: this.handleStatusChange,
            selectedItem: selectedStatus,
            items: statuses,
            __source: {
              fileName: _jsxFileName,
              lineNumber: 263
            }
          }) : __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
            'div',
            {
              __source: {
                fileName: _jsxFileName,
                lineNumber: 268
              }
            },
            'Add statuses here'
          )
        ),
        __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(_ClearFix2.default, {
          __source: {
            fileName: _jsxFileName,
            lineNumber: 270
          }
        }),
        __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
          _FormSection2.default,
          {
            __source: {
              fileName: _jsxFileName,
              lineNumber: 271
            }
          },
          __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(_SectionTitle2.default, { text: 'Execution date', __source: {
              fileName: _jsxFileName,
              lineNumber: 272
            }
          }),
          __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(_reactDatepicker2.default, {
            className: 'pa1 mb2 ba b--blue bw1',
            selected: executionDate,
            onChange: this.handleExecutionDate,
            showMonthDropdown: true,
            showYearDropdown: true,
            dateFormat: 'DD/MM/YYYY',
            __source: {
              fileName: _jsxFileName,
              lineNumber: 273
            }
          })
        ),
        __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(_ClearFix2.default, {
          __source: {
            fileName: _jsxFileName,
            lineNumber: 282
          }
        }),
        __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
          _FormSection2.default,
          {
            __source: {
              fileName: _jsxFileName,
              lineNumber: 283
            }
          },
          __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(_SectionTitle2.default, { text: 'Effective date', __source: {
              fileName: _jsxFileName,
              lineNumber: 284
            }
          }),
          __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(_reactDatepicker2.default, {
            className: 'pa1 mb2 ba b--blue bw1',
            selected: effectiveDate,
            onChange: this.handleEffectiveDate,
            showMonthDropdown: true,
            showYearDropdown: true,
            dateFormat: 'DD/MM/YYYY',
            __source: {
              fileName: _jsxFileName,
              lineNumber: 285
            }
          })
        ),
        __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(_ClearFix2.default, {
          __source: {
            fileName: _jsxFileName,
            lineNumber: 294
          }
        }),
        __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
          _FormSection2.default,
          {
            __source: {
              fileName: _jsxFileName,
              lineNumber: 295
            }
          },
          __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(_SectionTitle2.default, { text: 'Expiry date', __source: {
              fileName: _jsxFileName,
              lineNumber: 296
            }
          }),
          __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(_reactDatepicker2.default, {
            className: 'pa1 mb2 ba b--blue bw1',
            selected: expiryDate,
            onChange: this.handleExpiryDate,
            showMonthDropdown: true,
            showYearDropdown: true,
            dateFormat: 'DD/MM/YYYY',
            __source: {
              fileName: _jsxFileName,
              lineNumber: 297
            }
          })
        ),
        __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(_ClearFix2.default, {
          __source: {
            fileName: _jsxFileName,
            lineNumber: 306
          }
        }),
        __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
          _FormSection2.default,
          {
            __source: {
              fileName: _jsxFileName,
              lineNumber: 307
            }
          },
          __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(_SectionTitle2.default, { text: 'Business unit', __source: {
              fileName: _jsxFileName,
              lineNumber: 308
            }
          }),
          businessUnitSelect || __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
            'div',
            {
              __source: {
                fileName: _jsxFileName,
                lineNumber: 309
              }
            },
            'Add business units here'
          )
        ),
        __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(_ClearFix2.default, {
          __source: {
            fileName: _jsxFileName,
            lineNumber: 311
          }
        }),
        __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
          _FormSection2.default,
          {
            __source: {
              fileName: _jsxFileName,
              lineNumber: 312
            }
          },
          __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(_SectionTitle2.default, { text: 'Lawyer', __source: {
              fileName: _jsxFileName,
              lineNumber: 313
            }
          }),
          lawyers && lawyers.length > 0 ? __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(_Select2.default, {
            selectedItem: selectedLawyer,
            items: lawyers,
            handleChange: this.handleLawyerChange,
            __source: {
              fileName: _jsxFileName,
              lineNumber: 315
            }
          }) : __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
            'div',
            {
              __source: {
                fileName: _jsxFileName,
                lineNumber: 320
              }
            },
            'Add lawyers here'
          )
        ),
        __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(_ClearFix2.default, {
          __source: {
            fileName: _jsxFileName,
            lineNumber: 322
          }
        }),
        __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(_FormButton2.default, { onClick: this.handleClick, text: 'Submit', __source: {
            fileName: _jsxFileName,
            lineNumber: 323
          }
        }),
        __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(_ClearFix2.default, {
          __source: {
            fileName: _jsxFileName,
            lineNumber: 324
          }
        })
      );
    }
  }]);

  return AddContractForm;
}(_react2.default.Component);

exports.default = AddContractForm;

/***/ }),

/***/ "./components/contracts/BusinessUnit.js":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_react__ = __webpack_require__("react");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_react___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_react__);


Object.defineProperty(exports, "__esModule", {
  value: true
});
var _jsxFileName = 'C:\\Users\\mbg\\Documents\\attest\\components\\contracts\\BusinessUnit.js';

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

exports.default = BusinessUnit;

/***/ }),

/***/ "./components/contracts/ContractBox.js":
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

var _jsxFileName = 'C:\\Users\\mbg\\Documents\\attest\\components\\contracts\\ContractBox.js';

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _DeleteButton = __webpack_require__("./components/contracts/DeleteButton.js");

var _DeleteButton2 = _interopRequireDefault(_DeleteButton);

var _EditContractContainer = __webpack_require__("./modals/EditContractContainer.js");

var _EditContractContainer2 = _interopRequireDefault(_EditContractContainer);

var _reactMoment = __webpack_require__("react-moment");

var _reactMoment2 = _interopRequireDefault(_reactMoment);

var _react = __webpack_require__("react");

var _react2 = _interopRequireDefault(_react);

var _lodash = __webpack_require__("lodash");

var _lodash2 = _interopRequireDefault(_lodash);

var _classnames = __webpack_require__("classnames");

var _classnames2 = _interopRequireDefault(_classnames);

var _StatusBar = __webpack_require__("./components/contracts/StatusBar.js");

var _StatusBar2 = _interopRequireDefault(_StatusBar);

var _DateBar = __webpack_require__("./components/contracts/DateBar.js");

var _DateBar2 = _interopRequireDefault(_DateBar);

var _TagList = __webpack_require__("./components/contracts/TagList.js");

var _TagList2 = _interopRequireDefault(_TagList);

var _Lawyer = __webpack_require__("./components/contracts/Lawyer.js");

var _Lawyer2 = _interopRequireDefault(_Lawyer);

var _BusinessUnit = __webpack_require__("./components/contracts/BusinessUnit.js");

var _BusinessUnit2 = _interopRequireDefault(_BusinessUnit);

var _PartyList = __webpack_require__("./components/contracts/PartyList.js");

var _PartyList2 = _interopRequireDefault(_PartyList);

var _link = __webpack_require__("next/link");

var _link2 = _interopRequireDefault(_link);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

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

      var latestDate = _lodash2.default.last(statuses).date;
      var masterEntity = this.props.masterEntity;

      return _react2.default.createElement(
        'div',
        {
          __source: {
            fileName: _jsxFileName,
            lineNumber: 49
          }
        },
        _react2.default.createElement(
          'div',
          {
            __source: {
              fileName: _jsxFileName,
              lineNumber: 50
            }
          },
          _react2.default.createElement(
            'div',
            {
              __source: {
                fileName: _jsxFileName,
                lineNumber: 51
              }
            },
            externalParties.map(function (party) {
              return _react2.default.createElement(
                'div',
                { key: party, className: 'f4 pb1 b bb b--black-20 bw1', __source: {
                    fileName: _jsxFileName,
                    lineNumber: 53
                  }
                },
                party
              );
            })
          ),
          _react2.default.createElement(_PartyList2.default, { parties: internalParties, __source: {
              fileName: _jsxFileName,
              lineNumber: 58
            }
          }),
          _react2.default.createElement('div', { className: 'cf', __source: {
              fileName: _jsxFileName,
              lineNumber: 59
            }
          }),
          _react2.default.createElement(_BusinessUnit2.default, { businessUnit: businessUnit, __source: {
              fileName: _jsxFileName,
              lineNumber: 60
            }
          }),
          _react2.default.createElement(_Lawyer2.default, _extends({}, assignedTo, {
            __source: {
              fileName: _jsxFileName,
              lineNumber: 61
            }
          })),
          _react2.default.createElement(_StatusBar2.default, { status: currentStatus, bold: true, __source: {
              fileName: _jsxFileName,
              lineNumber: 62
            }
          }),
          _react2.default.createElement(_DateBar2.default, { date: latestDate, __source: {
              fileName: _jsxFileName,
              lineNumber: 63
            }
          }),
          tags ? _react2.default.createElement(_TagList2.default, { tags: tags, __source: {
              fileName: _jsxFileName,
              lineNumber: 64
            }
          }) : null,
          _react2.default.createElement('div', { className: 'cf', __source: {
              fileName: _jsxFileName,
              lineNumber: 65
            }
          })
        ),
        _react2.default.createElement(
          'div',
          { className: 'bottom-0', __source: {
              fileName: _jsxFileName,
              lineNumber: 67
            }
          },
          _react2.default.createElement(
            'ul',
            { className: 'fr list pa0 mt2', __source: {
                fileName: _jsxFileName,
                lineNumber: 68
              }
            },
            _react2.default.createElement(
              'li',
              { className: 'fl mr2', __source: {
                  fileName: _jsxFileName,
                  lineNumber: 69
                }
              },
              _react2.default.createElement(
                'button',
                {
                  className: 'bg-white f6 link dim ph0 dib',
                  onClick: function onClick() {
                    return _this2.openModal(_this2.props.contract);
                  },
                  __source: {
                    fileName: _jsxFileName,
                    lineNumber: 70
                  }
                },
                _react2.default.createElement('i', { className: 'pointer fa fa-pencil fa-lg', __source: {
                    fileName: _jsxFileName,
                    lineNumber: 74
                  }
                })
              ),
              this.state.editableContract && _react2.default.createElement(_EditContractContainer2.default, {
                isOpen: this.state.modalIsOpen,
                closeModal: this.closeModal,
                contract: this.state.editableContract,
                masterEntity: masterEntity,
                __source: {
                  fileName: _jsxFileName,
                  lineNumber: 77
                }
              })
            ),
            _react2.default.createElement(
              'li',
              { className: 'fl mr2 ', __source: {
                  fileName: _jsxFileName,
                  lineNumber: 84
                }
              },
              _react2.default.createElement(_DeleteButton2.default, { id: id, __source: {
                  fileName: _jsxFileName,
                  lineNumber: 84
                }
              })
            ),
            _react2.default.createElement(
              'li',
              { className: 'fl mr2', __source: {
                  fileName: _jsxFileName,
                  lineNumber: 85
                }
              },
              _react2.default.createElement('i', { className: 'fa fa-eye fa-lg', __source: {
                  fileName: _jsxFileName,
                  lineNumber: 85
                }
              })
            ),
            _react2.default.createElement(
              'li',
              { className: 'fl', __source: {
                  fileName: _jsxFileName,
                  lineNumber: 86
                }
              },
              _react2.default.createElement('i', { className: 'fa fa-plus-square fa-lg', __source: {
                  fileName: _jsxFileName,
                  lineNumber: 86
                }
              })
            )
          )
        ),
        _react2.default.createElement('div', { className: 'cf', __source: {
            fileName: _jsxFileName,
            lineNumber: 89
          }
        })
      );
    }
  }]);

  return Contract;
}(_react2.default.Component);

exports.default = Contract;

/***/ }),

/***/ "./components/contracts/ContractHolder.js":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_react__ = __webpack_require__("react");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_react___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_react__);


Object.defineProperty(exports, "__esModule", {
  value: true
});
var _jsxFileName = 'C:\\Users\\mbg\\Documents\\attest\\components\\contracts\\ContractHolder.js';


var _classnames = __webpack_require__("classnames");

var _classnames2 = _interopRequireDefault(_classnames);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var ContractHolder = function ContractHolder(_ref) {
  var children = _ref.children,
      index = _ref.index;
  return __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
    'li',
    {
      className: (0, _classnames2.default)((index + 1) % 4 === 0 && 'mr0-l', (index + 1) % 4 !== 0 && 'mr3-l', (index + 1) % 4 === 0 && 'mr0', (index + 1) % 4 !== 0 && 'mr0', (index + 1) % 2 === 0 && 'mr0-ns', (index + 1) % 2 !== 0 && 'mr3-ns', 'bg-white', 'f5', 'pa3', 'overflow-hidden', 'h-100', 'ba', 'b--black-20', 'dark-gray'),
      __source: {
        fileName: _jsxFileName,
        lineNumber: 4
      }
    },
    children
  );
};

exports.default = ContractHolder;

/***/ }),

/***/ "./components/contracts/ContractSquareList.js":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_react__ = __webpack_require__("react");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_react___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_react__);


Object.defineProperty(exports, "__esModule", {
  value: true
});
var _jsxFileName = 'C:\\Users\\mbg\\Documents\\attest\\components\\contracts\\ContractSquareList.js';

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

exports.default = ContractSquareList;

/***/ }),

/***/ "./components/contracts/ContractsContainer.js":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_react__ = __webpack_require__("react");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_react___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_react__);


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

var _jsxFileName = 'C:\\Users\\mbg\\Documents\\attest\\components\\contracts\\ContractsContainer.js';


var _reactApollo = __webpack_require__("react-apollo");

var _ContractsQuery = __webpack_require__("./queries/ContractsQuery.js");

var _ContractsQuery2 = _interopRequireDefault(_ContractsQuery);

var _ContractsHolder = __webpack_require__("./components/contracts/ContractsHolder.js");

var _ContractsHolder2 = _interopRequireDefault(_ContractsHolder);

var _Loading = __webpack_require__("./components/general/Loading.js");

var _Loading2 = _interopRequireDefault(_Loading);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var ContractsContainer = function ContractsContainer(props) {
  if (!props.loading) return __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(_ContractsHolder2.default, _extends({}, props, {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 7
    }
  }));
  return __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(_Loading2.default, {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 8
    }
  });
};

var ContractsQuery = (0, _reactApollo.graphql)(_ContractsQuery2.default, {
  props: function props(_ref) {
    var _ref$data = _ref.data,
        loading = _ref$data.loading,
        masterEntity = _ref$data.masterEntity,
        contracts = _ref$data.contracts,
        currentStatuses = _ref$data.currentStatuses,
        currentTags = _ref$data.currentTags,
        currentBusinessUnits = _ref$data.currentBusinessUnits,
        currentLawyers = _ref$data.currentLawyers;
    return {
      loading: loading,
      masterEntity: masterEntity,
      contracts: contracts,
      currentTags: currentTags,
      currentLawyers: currentLawyers,
      currentBusinessUnits: currentBusinessUnits,
      currentStatuses: currentStatuses
    };
  }
});

var ContractsContainerWithQuery = (0, _reactApollo.compose)(ContractsQuery)(ContractsContainer);

exports.default = ContractsContainerWithQuery;

/***/ }),

/***/ "./components/contracts/ContractsHolder.js":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_react__ = __webpack_require__("react");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_react___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_react__);


Object.defineProperty(exports, "__esModule", {
  value: true
});
var _jsxFileName = 'C:\\Users\\mbg\\Documents\\attest\\components\\contracts\\ContractsHolder.js';

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();



var _react = __webpack_require__("react");

var _react2 = _interopRequireDefault(_react);

var _ContractsList = __webpack_require__("./components/contracts/ContractsList.js");

var _ContractsList2 = _interopRequireDefault(_ContractsList);

var _lodash = __webpack_require__("lodash");

var _lodash2 = _interopRequireDefault(_lodash);

var _Filter = __webpack_require__("./components/contracts/Filter.js");

var _Filter2 = _interopRequireDefault(_Filter);

var _SummaryBox = __webpack_require__("./components/contracts/SummaryBox.js");

var _SummaryBox2 = _interopRequireDefault(_SummaryBox);

var _Title = __webpack_require__("./components/contracts/Title.js");

var _Title2 = _interopRequireDefault(_Title);

var _search = __webpack_require__("./lib/search.js");

var _search2 = _interopRequireDefault(_search);

var _filterContracts = __webpack_require__("./lib/filterContracts.js");

var _filterContracts2 = _interopRequireDefault(_filterContracts);

var _Flex = __webpack_require__("./components/styles/Flex.js");

var _Flex2 = _interopRequireDefault(_Flex);

var _SearchInput = __webpack_require__("./components/contracts/SearchInput.js");

var _SearchInput2 = _interopRequireDefault(_SearchInput);

var _Loading = __webpack_require__("./components/general/Loading.js");

var _Loading2 = _interopRequireDefault(_Loading);

var _Hide = __webpack_require__("./components/general/Hide.js");

var _Hide2 = _interopRequireDefault(_Hide);

var _classnames = __webpack_require__("classnames");

var _classnames2 = _interopRequireDefault(_classnames);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _toConsumableArray(arr) { if (Array.isArray(arr)) { for (var i = 0, arr2 = Array(arr.length); i < arr.length; i++) { arr2[i] = arr[i]; } return arr2; } else { return Array.from(arr); } }

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

      return (0, _search2.default)(list, value);
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
      if (set.has(label)) {
        set.delete(label);
      } else {
        set.add(label);
      }
      return [].concat(_toConsumableArray(set));
    };

    _this.toggleCheckbox = function (label) {
      var _this$state$initialVa = _this.state.initialValues,
          statuses = _this$state$initialVa.statuses,
          tags = _this$state$initialVa.tags,
          businessUnits = _this$state$initialVa.businessUnits,
          lawyers = _this$state$initialVa.lawyers;

      statuses = statuses.map(function (s) {
        return { filter: s.name, type: 'status', category: 'statuses' };
      });

      tags = tags.map(function (t) {
        return { filter: t.name, type: 'tag', category: 'tags' };
      });

      businessUnits = businessUnits.map(function (b) {
        return { filter: b.name, type: 'businessUnit', category: 'businessUnits' };
      });

      lawyers = lawyers.map(function (l) {
        return { filter: l, type: 'lawyer', category: 'lawyers' };
      });

      var filters = _lodash2.default.concat(statuses, tags, businessUnits, lawyers);
      filters.forEach(function (f) {
        if (f.filter === label) {
          _this.updateFilterState(f.category, _this.updateSet(_this.set[f.category], label));
        }
      });
    };

    _this.state = {
      contracts: props.contracts,
      initialValues: {
        statuses: props.currentStatuses,
        tags: props.currentTags,
        businessUnits: props.currentBusinessUnits,
        lawyers: props.currentLawyers
      },
      filters: {
        statuses: [],
        dateRange: {
          startDate: null,
          endDate: null
        },
        tags: [],
        businessUnits: [],
        lawyers: [],
        selectedDateOption: 'GENERAL'
      },
      searchTerm: '',
      liveInput: false,
      activeMenu: false
    };
    _this.set = {
      statuses: new Set(),
      tags: new Set(),
      businessUnits: new Set(),
      lawyers: new Set()
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
          initialValues = _state.initialValues,
          filters = _state.filters,
          contracts = _state.contracts;
      var name = this.props.masterEntity.name;

      var filteredContracts = (0, _filterContracts2.default)(filters, contracts);
      if (this.state.searchTerm.length > 0 && !this.state.liveInput) {
        filteredContracts = this.getSearchResults(this.state.searchTerm, filteredContracts);
      }
      return __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
        'div',
        {
          __source: {
            fileName: _jsxFileName,
            lineNumber: 132
          }
        },
        __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
          'div',
          { className: 'pa3-ns pa0 pt3', __source: {
              fileName: _jsxFileName,
              lineNumber: 133
            }
          },
          __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
            _Flex2.default,
            {
              __source: {
                fileName: _jsxFileName,
                lineNumber: 134
              }
            },
            __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
              'div',
              { className: 'w-50-ns w-100', __source: {
                  fileName: _jsxFileName,
                  lineNumber: 135
                }
              },
              __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(_Title2.default, { name: name, __source: {
                  fileName: _jsxFileName,
                  lineNumber: 136
                }
              })
            ),
            __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
              'div',
              { className: 'w-50-ns w-100', __source: {
                  fileName: _jsxFileName,
                  lineNumber: 138
                }
              },
              __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(_SearchInput2.default, {
                handleSearchInput: this.handleSearchInput,
                searchTerm: this.state.searchTerm,
                clear: this.clearSearchTerm,
                __source: {
                  fileName: _jsxFileName,
                  lineNumber: 139
                }
              })
            )
          ),
          __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
            _Flex2.default,
            {
              __source: {
                fileName: _jsxFileName,
                lineNumber: 146
              }
            },
            __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
              'div',
              { className: 'w-50-ns w-100', __source: {
                  fileName: _jsxFileName,
                  lineNumber: 147
                }
              },
              __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(_Filter2.default, {
                initialValues: initialValues,
                toggleCheckbox: this.toggleCheckbox,
                setDate: this.setDate,
                selectDateOption: this.selectDateOption,
                __source: {
                  fileName: _jsxFileName,
                  lineNumber: 148
                }
              })
            ),
            __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
              'div',
              { className: 'w-50-ns w-100', __source: {
                  fileName: _jsxFileName,
                  lineNumber: 155
                }
              },
              __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(_SummaryBox2.default, { contracts: filteredContracts, filters: filters, __source: {
                  fileName: _jsxFileName,
                  lineNumber: 156
                }
              })
            )
          ),
          __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(_ContractsList2.default, {
            contracts: filteredContracts,
            masterEntity: this.props.masterEntity,
            __source: {
              fileName: _jsxFileName,
              lineNumber: 159
            }
          })
        )
      );
    }
  }]);

  return ContractsHolder;
}(_react2.default.Component);

exports.default = ContractsHolder;

/***/ }),

/***/ "./components/contracts/ContractsList.js":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_react__ = __webpack_require__("react");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_react___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_react__);


Object.defineProperty(exports, "__esModule", {
  value: true
});
var _jsxFileName = 'C:\\Users\\mbg\\Documents\\attest\\components\\contracts\\ContractsList.js';


var _ContractBox = __webpack_require__("./components/contracts/ContractBox.js");

var _ContractBox2 = _interopRequireDefault(_ContractBox);

var _ContractHolder = __webpack_require__("./components/contracts/ContractHolder.js");

var _ContractHolder2 = _interopRequireDefault(_ContractHolder);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var ContractsList = function ContractsList(props) {
  return __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
    'div',
    {
      __source: {
        fileName: _jsxFileName,
        lineNumber: 5
      }
    },
    props.contracts.length > 0 ? __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
      'div',
      {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 7
        }
      },
      __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement('div', { className: 'cf', __source: {
          fileName: _jsxFileName,
          lineNumber: 8
        }
      }),
      __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
        'section',
        { className: 'mv3', __source: {
            fileName: _jsxFileName,
            lineNumber: 9
          }
        },
        __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
          'ul',
          { className: 'flex flex-wrap list pa0 ma0', __source: {
              fileName: _jsxFileName,
              lineNumber: 10
            }
          },
          props.contracts.map(function (contract, index) {
            return __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
              'div',
              { key: contract.id, className: 'mb3 w-50-ns w-25-l w-100', __source: {
                  fileName: _jsxFileName,
                  lineNumber: 12
                }
              },
              __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
                _ContractHolder2.default,
                { index: index, __source: {
                    fileName: _jsxFileName,
                    lineNumber: 13
                  }
                },
                __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(_ContractBox2.default, {
                  masterEntity: props.masterEntity,
                  contract: contract,
                  __source: {
                    fileName: _jsxFileName,
                    lineNumber: 14
                  }
                })
              )
            );
          })
        )
      )
    ) : __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
      'div',
      { className: 'ba b--black-20 pa3 f4 bg-white b mt3', __source: {
          fileName: _jsxFileName,
          lineNumber: 24
        }
      },
      'No matching contracts'
    )
  );
};

exports.default = ContractsList;

/***/ }),

/***/ "./components/contracts/DateBar.js":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_react__ = __webpack_require__("react");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_react___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_react__);


Object.defineProperty(exports, "__esModule", {
  value: true
});
var _jsxFileName = 'C:\\Users\\mbg\\Documents\\attest\\components\\contracts\\DateBar.js';


var _reactMoment = __webpack_require__("react-moment");

var _reactMoment2 = _interopRequireDefault(_reactMoment);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

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
      _reactMoment2.default,
      { format: 'DD MMMM YYYY', __source: {
          fileName: _jsxFileName,
          lineNumber: 6
        }
      },
      date
    )
  );
};

exports.default = DateBar;

/***/ }),

/***/ "./components/contracts/DeleteButton.js":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_react__ = __webpack_require__("react");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_react___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_react__);


Object.defineProperty(exports, "__esModule", {
  value: true
});
var _jsxFileName = 'C:\\Users\\mbg\\Documents\\attest\\components\\contracts\\DeleteButton.js';


var _reactApollo = __webpack_require__("react-apollo");

var _lodash = __webpack_require__("lodash");

var _lodash2 = _interopRequireDefault(_lodash);

var _ContractsQuery = __webpack_require__("./queries/ContractsQuery.js");

var _ContractsQuery2 = _interopRequireDefault(_ContractsQuery);

var _DeleteContractMutation = __webpack_require__("./queries/DeleteContractMutation.js");

var _DeleteContractMutation2 = _interopRequireDefault(_DeleteContractMutation);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var DeleteButton = function DeleteButton(_ref) {
  var deleteContract = _ref.deleteContract,
      id = _ref.id;

  return __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
    'button',
    {
      className: 'bg-white f6 link dim ph0 dib',
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

var DeleteButtonMutation = (0, _reactApollo.graphql)(_DeleteContractMutation2.default, {
  props: function props(_ref2) {
    var ownProps = _ref2.ownProps,
        mutate = _ref2.mutate;

    return {
      deleteContract: function deleteContract(id) {
        return mutate({
          variables: { id: id },
          update: function update(store) {
            var data = store.readQuery({ query: _ContractsQuery2.default });
            var copy = data.contracts;
            var revisedContracts = _lodash2.default.without(copy, _lodash2.default.find(copy, { id: id }));
            data.contracts = revisedContracts;
            store.writeQuery({ query: _ContractsQuery2.default, data: data });
          }
        });
      }
    };
  }
})(DeleteButton);

exports.default = DeleteButtonMutation;

/***/ }),

/***/ "./components/contracts/Filter.js":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_react__ = __webpack_require__("react");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_react___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_react__);


Object.defineProperty(exports, "__esModule", {
  value: true
});
var _jsxFileName = 'C:\\Users\\mbg\\Documents\\attest\\components\\contracts\\Filter.js';

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();



var _react = __webpack_require__("react");

var _react2 = _interopRequireDefault(_react);

var _Hide = __webpack_require__("./components/general/Hide.js");

var _Hide2 = _interopRequireDefault(_Hide);

var _reactDatepicker = __webpack_require__("react-datepicker");

var _reactDatepicker2 = _interopRequireDefault(_reactDatepicker);

var _CheckboxList = __webpack_require__("./components/general/CheckboxList.js");

var _CheckboxList2 = _interopRequireDefault(_CheckboxList);

var _CheckboxListTwo = __webpack_require__("./components/general/CheckboxListTwo.js");

var _CheckboxListTwo2 = _interopRequireDefault(_CheckboxListTwo);

var _Radio = __webpack_require__("./components/general/Radio.js");

var _Radio2 = _interopRequireDefault(_Radio);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var Filter = function (_react$Component) {
  _inherits(Filter, _react$Component);

  function Filter(props) {
    _classCallCheck(this, Filter);

    var _this = _possibleConstructorReturn(this, (Filter.__proto__ || Object.getPrototypeOf(Filter)).call(this, props));

    _this.handleChangeStart = function (date) {
      var dateRange = _this.state.dateRange;
      dateRange.startDate = date;
      _this.setState({ dateRange: dateRange });
    };

    _this.selectDateOption = function (s) {
      _this.props.selectDateOption(s);
      _this.setState({ selectedDateOption: s.name });
    };

    _this.handleChangeEnd = function (date) {
      var dateRange = {};
      dateRange.endDate = date;
      dateRange.startDate = _this.state.dateRange.startDate;
      _this.setState({ dateRange: dateRange });
      _this.props.setDate(_this.state.dateRange);
      if (dateRange.endDate.isBefore(dateRange.startDate)) {
        var error = _this.state.error;

        error.finishBeforeStart = true;
        _this.setState({ error: error });
      } else {
        var _error = _this.state.error;

        _error.finishBeforeStart = false;
        _this.setState({ error: _error });
        _this.props.setDate(dateRange);
      }
    };

    _this.resetDates = function () {
      var dateRange = {};
      dateRange.endDate = null;
      dateRange.startDate = null;
      _this.setState({ dateRange: dateRange });
      _this.props.setDate(dateRange);
    };

    _this.state = {
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
      var _props$initialValues = this.props.initialValues,
          statuses = _props$initialValues.statuses,
          tags = _props$initialValues.tags,
          businessUnits = _props$initialValues.businessUnits,
          lawyers = _props$initialValues.lawyers;
      var toggleCheckbox = this.props.toggleCheckbox;
      var _state$dateRange = this.state.dateRange,
          startDate = _state$dateRange.startDate,
          endDate = _state$dateRange.endDate;
      var _state = this.state,
          error = _state.error,
          dateSearchOptions = _state.dateSearchOptions,
          selectedDateOption = _state.selectedDateOption;


      return __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
        'div',
        { className: 'bg-white mr3-ns mr0 pa3 ba b--black-20', __source: {
            fileName: _jsxFileName,
            lineNumber: 69
          }
        },
        __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
          'div',
          { className: 'f4 b bb b--black-20 bw1 pb2', __source: {
              fileName: _jsxFileName,
              lineNumber: 70
            }
          },
          'Filters'
        ),
        __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
          _Hide2.default,
          { title: 'Statuses', __source: {
              fileName: _jsxFileName,
              lineNumber: 71
            }
          },
          __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(_CheckboxListTwo2.default, { content: statuses, toggleCheckbox: toggleCheckbox, __source: {
              fileName: _jsxFileName,
              lineNumber: 72
            }
          })
        ),
        __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
          _Hide2.default,
          { title: 'Tags', __source: {
              fileName: _jsxFileName,
              lineNumber: 74
            }
          },
          __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(_CheckboxListTwo2.default, {
            error: 'Please add filters',
            content: tags,
            toggleCheckbox: toggleCheckbox,
            __source: {
              fileName: _jsxFileName,
              lineNumber: 75
            }
          })
        ),
        __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
          _Hide2.default,
          { title: 'Business Units', __source: {
              fileName: _jsxFileName,
              lineNumber: 81
            }
          },
          __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(_CheckboxListTwo2.default, {
            error: 'Please add filters',
            content: businessUnits,
            toggleCheckbox: toggleCheckbox,
            __source: {
              fileName: _jsxFileName,
              lineNumber: 82
            }
          })
        ),
        __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
          _Hide2.default,
          { title: 'Lawyers', __source: {
              fileName: _jsxFileName,
              lineNumber: 88
            }
          },
          __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(_CheckboxList2.default, {
            error: 'Please add filters',
            content: lawyers,
            toggleCheckbox: toggleCheckbox,
            __source: {
              fileName: _jsxFileName,
              lineNumber: 89
            }
          })
        ),
        __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
          _Hide2.default,
          { title: 'Dates', __source: {
              fileName: _jsxFileName,
              lineNumber: 95
            }
          },
          __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
            'div',
            { className: 'pl3 fl mt2', __source: {
                fileName: _jsxFileName,
                lineNumber: 96
              }
            },
            __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(_Radio2.default, {
              items: dateSearchOptions,
              selectedItem: selectedDateOption,
              handleChange: this.selectDateOption,
              __source: {
                fileName: _jsxFileName,
                lineNumber: 97
              }
            }),
            __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement('div', { className: 'cf', __source: {
                fileName: _jsxFileName,
                lineNumber: 102
              }
            }),
            __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
              'div',
              { className: 'fl mt2 mr2', __source: {
                  fileName: _jsxFileName,
                  lineNumber: 103
                }
              },
              __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(_reactDatepicker2.default, {
                className: 'w4 font b--blue ba bw1 pa1 tc',
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
                  lineNumber: 104
                }
              })
            ),
            __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
              'div',
              { className: 'fl mr2 mt2', __source: {
                  fileName: _jsxFileName,
                  lineNumber: 118
                }
              },
              __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(_reactDatepicker2.default, {
                className: 'pl2 w4 font b--blue ba bw1 pa1 tc',
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
                  lineNumber: 119
                }
              })
            )
          ),
          __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement('div', { className: 'cf', __source: {
              fileName: _jsxFileName,
              lineNumber: 133
            }
          }),
          __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
            'div',
            { onClick: this.resetDates, className: 'pt1 pl3 f7 pa1 pointer', __source: {
                fileName: _jsxFileName,
                lineNumber: 134
              }
            },
            'Clear'
          )
        ),
        __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
          'div',
          {
            __source: {
              fileName: _jsxFileName,
              lineNumber: 138
            }
          },
          error.finishBeforeStart && __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
            'div',
            { className: 'pt2 pa2 bg-light-red black b mt2', __source: {
                fileName: _jsxFileName,
                lineNumber: 140
              }
            },
            'End date is before the start date'
          )
        )
      );
    }
  }]);

  return Filter;
}(_react2.default.Component);

exports.default = Filter;

/***/ }),

/***/ "./components/contracts/Lawyer.js":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_react__ = __webpack_require__("react");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_react___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_react__);


Object.defineProperty(exports, "__esModule", {
  value: true
});
var _jsxFileName = 'C:\\Users\\mbg\\Documents\\attest\\components\\contracts\\Lawyer.js';

var LawyerName = function LawyerName(props) {
  return __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
    'div',
    {
      __source: {
        fileName: _jsxFileName,
        lineNumber: 2
      }
    },
    !props === null ? __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
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
        props.firstName + ' ' + props.lastName
      )
    ) : __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement('div', {
      __source: {
        fileName: _jsxFileName,
        lineNumber: 10
      }
    })
  );
};

exports.default = LawyerName;

/***/ }),

/***/ "./components/contracts/PartyList.js":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_react__ = __webpack_require__("react");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_react___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_react__);


Object.defineProperty(exports, "__esModule", {
  value: true
});
var _jsxFileName = 'C:\\Users\\mbg\\Documents\\attest\\components\\contracts\\PartyList.js';

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

exports.default = PartyList;

/***/ }),

/***/ "./components/contracts/SearchInput.js":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_react__ = __webpack_require__("react");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_react___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_react__);


Object.defineProperty(exports, "__esModule", {
  value: true
});
var _jsxFileName = 'C:\\Users\\mbg\\Documents\\attest\\components\\contracts\\SearchInput.js';

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();



var _classnames = __webpack_require__("classnames");

var _classnames2 = _interopRequireDefault(_classnames);

var _react = __webpack_require__("react");

var _react2 = _interopRequireDefault(_react);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

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
        { className: 'h3 mr0 mb3 mt0-ns pa3 bg-white f4 ba b--black-20', __source: {
            fileName: _jsxFileName,
            lineNumber: 7
          }
        },
        __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement('i', { className: 'mr2 gray fa fa-search', __source: {
            fileName: _jsxFileName,
            lineNumber: 8
          }
        }),
        __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement('input', {
          className: 'bb bw1 b--black-20 font pa1 w-80 bg-white',
          type: 'search',
          placeholder: 'Search Contracts',
          value: this.props.searchTerm,
          onChange: this.props.handleSearchInput,
          __source: {
            fileName: _jsxFileName,
            lineNumber: 9
          }
        }),
        __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
          'div',
          {
            className: (0, _classnames2.default)(!this.props.searchTerm && 'dn', 'fr', 'pa1', 'b', 'f4'),
            onClick: this.props.clear,
            __source: {
              fileName: _jsxFileName,
              lineNumber: 16
            }
          },
          __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement('i', { className: 'fa fa-close', __source: {
              fileName: _jsxFileName,
              lineNumber: 20
            }
          })
        )
      );
    }
  }]);

  return SearchInput;
}(_react2.default.Component);

exports.default = SearchInput;

/***/ }),

/***/ "./components/contracts/StatusBar.js":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_react__ = __webpack_require__("react");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_react___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_react__);


Object.defineProperty(exports, "__esModule", {
  value: true
});
var _jsxFileName = 'C:\\Users\\mbg\\Documents\\attest\\components\\contracts\\StatusBar.js';


var _classnames = __webpack_require__("classnames");

var _classnames2 = _interopRequireDefault(_classnames);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

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
      className: (0, _classnames2.default)('bw1 bb mt1', 'pb1', bold && 'b'),
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

exports.default = StatusBar;

/***/ }),

/***/ "./components/contracts/SummaryBox.js":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_react__ = __webpack_require__("react");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_react___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_react__);


Object.defineProperty(exports, "__esModule", {
  value: true
});
var _jsxFileName = 'C:\\Users\\mbg\\Documents\\attest\\components\\contracts\\SummaryBox.js';

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();



var _ContractSquareList = __webpack_require__("./components/contracts/ContractSquareList.js");

var _ContractSquareList2 = _interopRequireDefault(_ContractSquareList);

var _lodash = __webpack_require__("lodash");

var _lodash2 = _interopRequireDefault(_lodash);

var _react = __webpack_require__("react");

var _react2 = _interopRequireDefault(_react);

var _StatusBar = __webpack_require__("./components/contracts/StatusBar.js");

var _StatusBar2 = _interopRequireDefault(_StatusBar);

var _reactMoment = __webpack_require__("react-moment");

var _reactMoment2 = _interopRequireDefault(_reactMoment);

var _Flex = __webpack_require__("./components/styles/Flex.js");

var _Flex2 = _interopRequireDefault(_Flex);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

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
      var o = _lodash2.default.groupBy(this.props.contracts, 'currentStatus.name');
      var res = _lodash2.default.keys(o).map(function (k) {
        var status = {
          name: o[k][0].currentStatus.name,
          color: o[k][0].currentStatus.color
        };
        return {
          status: status,
          volume: o[k].length
        };
      });

      var arr = _lodash2.default.values(o);
      var _props = this.props,
          contracts = _props.contracts,
          filters = _props.filters;
      var _filters$dateRange = filters.dateRange,
          startDate = _filters$dateRange.startDate,
          endDate = _filters$dateRange.endDate;

      return __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
        'div',
        { className: 'h-100 bg-white mt3 mt0-ns pa3 ba b--black-20', __source: {
            fileName: _jsxFileName,
            lineNumber: 26
          }
        },
        __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
          'div',
          { className: 'b f4 bb b--black-20 bw1 pb2', __source: {
              fileName: _jsxFileName,
              lineNumber: 27
            }
          },
          'Summary'
        ),
        __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
          'div',
          { className: 'mt3 f5', __source: {
              fileName: _jsxFileName,
              lineNumber: 28
            }
          },
          '' + contracts.length,
          startDate && startDate.isValid() ? __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
            'span',
            {
              __source: {
                fileName: _jsxFileName,
                lineNumber: 31
              }
            },
            ' between ',
            __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(_reactMoment2.default, { format: 'D MMMM YYYY', date: startDate, __source: {
                fileName: _jsxFileName,
                lineNumber: 33
              }
            }),
            ' and ',
            __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(_reactMoment2.default, { format: 'D MMMM YYYY', date: endDate, __source: {
                fileName: _jsxFileName,
                lineNumber: 35
              }
            })
          ) : __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
            'span',
            {
              __source: {
                fileName: _jsxFileName,
                lineNumber: 37
              }
            },
            ' for all time'
          )
        ),
        __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
          _Flex2.default,
          {
            __source: {
              fileName: _jsxFileName,
              lineNumber: 39
            }
          },
          __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
            'ul',
            { className: 'w-100 mb2 list pa0 ma0', __source: {
                fileName: _jsxFileName,
                lineNumber: 40
              }
            },
            res.map(function (r) {
              return __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
                'li',
                { key: r.status.name, className: 'fl mr4', __source: {
                    fileName: _jsxFileName,
                    lineNumber: 42
                  }
                },
                __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(_StatusBar2.default, { status: r.status, volume: r.volume, __source: {
                    fileName: _jsxFileName,
                    lineNumber: 43
                  }
                })
              );
            })
          ),
          __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement('div', { className: 'cf:after', __source: {
              fileName: _jsxFileName,
              lineNumber: 48
            }
          }),
          __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
            'div',
            {
              __source: {
                fileName: _jsxFileName,
                lineNumber: 49
              }
            },
            arr.map(function (contracts) {
              return __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
                'div',
                { className: 'fl', key: contracts[0].id, __source: {
                    fileName: _jsxFileName,
                    lineNumber: 51
                  }
                },
                __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(_ContractSquareList2.default, { contracts: contracts, __source: {
                    fileName: _jsxFileName,
                    lineNumber: 52
                  }
                })
              );
            })
          )
        )
      );
    }
  }]);

  return SummaryBox;
}(_react2.default.Component);

exports.default = SummaryBox;

/***/ }),

/***/ "./components/contracts/TagList.js":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_react__ = __webpack_require__("react");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_react___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_react__);


Object.defineProperty(exports, "__esModule", {
  value: true
});
var _jsxFileName = 'C:\\Users\\mbg\\Documents\\attest\\components\\contracts\\TagList.js';

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
          className: 'f5 bg-blue white fl pv1 ph3 mr2 mv1',
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

exports.default = TagList;

/***/ }),

/***/ "./components/contracts/Title.js":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_react__ = __webpack_require__("react");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_react___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_react__);


Object.defineProperty(exports, "__esModule", {
  value: true
});
var _jsxFileName = 'C:\\Users\\mbg\\Documents\\attest\\components\\contracts\\Title.js';

var Title = function Title(props) {
  return __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
    'div',
    { className: 'h3 b bg-white pa3 mr3-ns mr0 mb3 ba b--black-20', __source: {
        fileName: _jsxFileName,
        lineNumber: 2
      }
    },
    __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
      'div',
      {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 3
        }
      },
      __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
        'span',
        { className: 'bb b--black-20 bw1 pb1 b f4', __source: {
            fileName: _jsxFileName,
            lineNumber: 4
          }
        },
        ' ',
        props.name
      )
    )
  );
};

exports.default = Title;

/***/ }),

/***/ "./components/general/CheckBox.js":
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
var _jsxFileName = 'C:\\Users\\mbg\\Documents\\attest\\components\\general\\CheckBox.js';

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _react = __webpack_require__("react");

var _react2 = _interopRequireDefault(_react);

var _classnames = __webpack_require__("classnames");

var _classnames2 = _interopRequireDefault(_classnames);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

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
      var color = this.props.color;

      return {
        backgroundColor: this.state.isChecked ? color : '',
        borderColor: color
      };
    }
  }, {
    key: 'render',
    value: function render() {
      var _props = this.props,
          label = _props.label,
          color = _props.color;
      var isChecked = this.state.isChecked;

      return _react2.default.createElement(
        'li',
        { key: label, className: 'pb2 mr2 fl', __source: {
            fileName: _jsxFileName,
            lineNumber: 32
          }
        },
        _react2.default.createElement(
          'label',
          {
            __source: {
              fileName: _jsxFileName,
              lineNumber: 33
            }
          },
          _react2.default.createElement('input', {
            className: 'dn',
            type: 'checkbox',
            value: label,
            checked: isChecked,
            onChange: this.toggleCheckboxChange,
            __source: {
              fileName: _jsxFileName,
              lineNumber: 34
            }
          }),
          _react2.default.createElement(
            'div',
            {
              style: this.getStyle(),
              className: (0, _classnames2.default)('pointer', 'fr', 'f5', 'pv1', 'ph3', 'bg-white', 'ba', 'bw1', 'ba', 'b--blue', isChecked && 'bg-blue', isChecked && 'white'),
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
}(_react.Component);

exports.default = Checkbox;

/***/ }),

/***/ "./components/general/CheckboxList.js":
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
var _jsxFileName = 'C:\\Users\\mbg\\Documents\\attest\\components\\general\\CheckboxList.js';

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _CheckBox = __webpack_require__("./components/general/CheckBox.js");

var _CheckBox2 = _interopRequireDefault(_CheckBox);

var _react = __webpack_require__("react");

var _react2 = _interopRequireDefault(_react);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var CheckboxList = function (_React$Component) {
  _inherits(CheckboxList, _React$Component);

  function CheckboxList(props) {
    _classCallCheck(this, CheckboxList);

    var _this = _possibleConstructorReturn(this, (CheckboxList.__proto__ || Object.getPrototypeOf(CheckboxList)).call(this, props));

    _this.createCheckboxes = function (arr, checked) {
      var check = checked || false;
      var _this$props = _this.props,
          toggleCheckbox = _this$props.toggleCheckbox,
          error = _this$props.error;

      if (arr.length > 0) {
        return arr.map(function (item, i) {
          return _react2.default.createElement(_CheckBox2.default, {
            checked: check,
            label: item,
            handleCheckboxChange: toggleCheckbox,
            key: i,
            __source: {
              fileName: _jsxFileName,
              lineNumber: 15
            }
          });
        });
      } else return _react2.default.createElement(
        'div',
        {
          __source: {
            fileName: _jsxFileName,
            lineNumber: 23
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

      return _react2.default.createElement(
        'ul',
        { className: 'mt2 pb2 ma0 bb b--black-20 bw1 pa0 pl3 list flex flex-wrap  ', __source: {
            fileName: _jsxFileName,
            lineNumber: 29
          }
        },
        this.createCheckboxes(content, checked)
      );
    }
  }]);

  return CheckboxList;
}(_react2.default.Component);

exports.default = CheckboxList;

/***/ }),

/***/ "./components/general/CheckboxListTwo.js":
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
var _jsxFileName = 'C:\\Users\\mbg\\Documents\\attest\\components\\general\\CheckboxListTwo.js';

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _CheckBox = __webpack_require__("./components/general/CheckBox.js");

var _CheckBox2 = _interopRequireDefault(_CheckBox);

var _react = __webpack_require__("react");

var _react2 = _interopRequireDefault(_react);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var CheckboxList = function (_React$Component) {
  _inherits(CheckboxList, _React$Component);

  function CheckboxList(props) {
    _classCallCheck(this, CheckboxList);

    var _this = _possibleConstructorReturn(this, (CheckboxList.__proto__ || Object.getPrototypeOf(CheckboxList)).call(this, props));

    _this.createCheckboxes = function (arr, checked) {
      var check = checked || false;
      var _this$props = _this.props,
          toggleCheckbox = _this$props.toggleCheckbox,
          error = _this$props.error;

      if (arr.length > 0) {
        return arr.map(function (item, i) {
          return _react2.default.createElement(_CheckBox2.default, {
            checked: check,
            label: item.name,
            handleCheckboxChange: toggleCheckbox,
            key: i,
            color: item.color,
            __source: {
              fileName: _jsxFileName,
              lineNumber: 15
            }
          });
        });
      } else return _react2.default.createElement(
        'div',
        {
          __source: {
            fileName: _jsxFileName,
            lineNumber: 24
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

      return _react2.default.createElement(
        'ul',
        { className: 'mt2 pb2 ma0 bb b--black-20 bw1 pa0 pl3 list flex flex-wrap  ', __source: {
            fileName: _jsxFileName,
            lineNumber: 30
          }
        },
        this.createCheckboxes(content, checked)
      );
    }
  }]);

  return CheckboxList;
}(_react2.default.Component);

exports.default = CheckboxList;

/***/ }),

/***/ "./components/general/Header.js":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_react__ = __webpack_require__("react");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_react___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_react__);


Object.defineProperty(exports, "__esModule", {
  value: true
});
var _jsxFileName = 'C:\\Users\\mbg\\Documents\\attest\\components\\general\\Header.js';

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();



var _link = __webpack_require__("next/link");

var _link2 = _interopRequireDefault(_link);

var _react = __webpack_require__("react");

var _react2 = _interopRequireDefault(_react);

var _Redirect = __webpack_require__("./lib/Redirect.js");

var _Redirect2 = _interopRequireDefault(_Redirect);

var _cookie = __webpack_require__("cookie");

var _cookie2 = _interopRequireDefault(_cookie);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var Header = function (_react$Component) {
  _inherits(Header, _react$Component);

  function Header(props) {
    _classCallCheck(this, Header);

    var _this = _possibleConstructorReturn(this, (Header.__proto__ || Object.getPrototypeOf(Header)).call(this, props));

    _this.logout = function () {
      (0, _Redirect2.default)({}, '/');
      _this.props.client.resetStore();
      document.cookie = _cookie2.default.serialize('token', '');
    };

    return _this;
  }

  _createClass(Header, [{
    key: 'render',
    value: function render() {
      var user = this.props.user;

      return __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
        'div',
        { className: 'relative front bg--dark-peach pa2 f3', __source: {
            fileName: _jsxFileName,
            lineNumber: 20
          }
        },
        __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
          'span',
          { className: 'b dark-gray', __source: {
              fileName: _jsxFileName,
              lineNumber: 21
            }
          },
          __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement('i', { className: 'mr2 fa fa-file', __source: {
              fileName: _jsxFileName,
              lineNumber: 22
            }
          }),
          'Attest'
        ),
        __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
          'span',
          { className: 'fr', __source: {
              fileName: _jsxFileName,
              lineNumber: 24
            }
          },
          user ? __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
            'div',
            { className: 'mt1 f4-ns f6', __source: {
                fileName: _jsxFileName,
                lineNumber: 26
              }
            },
            __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
              'span',
              {
                __source: {
                  fileName: _jsxFileName,
                  lineNumber: 27
                }
              },
              user.email
            ),
            __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
              'span',
              { className: 'pl2', onClick: this.logout, __source: {
                  fileName: _jsxFileName,
                  lineNumber: 28
                }
              },
              __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement('i', { title: 'Sign out', className: 'fa fa-sign-out', __source: {
                  fileName: _jsxFileName,
                  lineNumber: 29
                }
              })
            )
          ) : __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
            _link2.default,
            { href: '/login', __source: {
                fileName: _jsxFileName,
                lineNumber: 32
              }
            },
            __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
              'a',
              { className: 'link dim', __source: {
                  fileName: _jsxFileName,
                  lineNumber: 33
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
}(_react2.default.Component);

exports.default = Header;

/***/ }),

/***/ "./components/general/Hide.js":
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
var _jsxFileName = 'C:\\Users\\mbg\\Documents\\attest\\components\\general\\Hide.js';

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _react = __webpack_require__("react");

var _react2 = _interopRequireDefault(_react);

var _classnames = __webpack_require__("classnames");

var _classnames2 = _interopRequireDefault(_classnames);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var HideToggle = function (_React$Component) {
  _inherits(HideToggle, _React$Component);

  function HideToggle(props) {
    _classCallCheck(this, HideToggle);

    var _this = _possibleConstructorReturn(this, (HideToggle.__proto__ || Object.getPrototypeOf(HideToggle)).call(this, props));

    _this.toggle = function () {
      _this.setState({ show: !_this.state.show });
    };

    _this.state = {
      show: true
    };
    return _this;
  }

  _createClass(HideToggle, [{
    key: 'render',
    value: function render() {
      var _props = this.props,
          title = _props.title,
          children = _props.children;
      var show = this.state.show;


      return _react2.default.createElement(
        'div',
        {
          __source: {
            fileName: _jsxFileName,
            lineNumber: 21
          }
        },
        _react2.default.createElement(
          'div',
          { onClick: this.toggle, className: 'f6 mt2 pointer', __source: {
              fileName: _jsxFileName,
              lineNumber: 22
            }
          },
          show ? _react2.default.createElement(
            'div',
            {
              __source: {
                fileName: _jsxFileName,
                lineNumber: 24
              }
            },
            _react2.default.createElement('i', { className: 'fa fa-caret-down mr2', __source: {
                fileName: _jsxFileName,
                lineNumber: 25
              }
            }),
            _react2.default.createElement(
              'span',
              { className: 'f5', __source: {
                  fileName: _jsxFileName,
                  lineNumber: 26
                }
              },
              title
            )
          ) : _react2.default.createElement(
            'div',
            {
              __source: {
                fileName: _jsxFileName,
                lineNumber: 28
              }
            },
            _react2.default.createElement('i', { className: 'fa fa-caret-right mr2', __source: {
                fileName: _jsxFileName,
                lineNumber: 29
              }
            }),
            _react2.default.createElement(
              'span',
              { className: ' f5', __source: {
                  fileName: _jsxFileName,
                  lineNumber: 30
                }
              },
              title
            )
          )
        ),
        _react2.default.createElement(
          'div',
          { className: (0, _classnames2.default)(!show && 'dn'), __source: {
              fileName: _jsxFileName,
              lineNumber: 33
            }
          },
          children
        )
      );
    }
  }]);

  return HideToggle;
}(_react2.default.Component);

exports.default = HideToggle;

/***/ }),

/***/ "./components/general/Input.js":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_react__ = __webpack_require__("react");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_react___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_react__);


Object.defineProperty(exports, "__esModule", {
  value: true
});
var _jsxFileName = 'C:\\Users\\mbg\\Documents\\attest\\components\\general\\Input.js';

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();



var _react = __webpack_require__("react");

var _react2 = _interopRequireDefault(_react);

var _Flex = __webpack_require__("./components/styles/Flex.js");

var _Flex2 = _interopRequireDefault(_Flex);

var _classnames = __webpack_require__("classnames");

var _classnames2 = _interopRequireDefault(_classnames);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

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
        {
          __source: {
            fileName: _jsxFileName,
            lineNumber: 27
          }
        },
        __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
          'label',
          { htmlFor: value, __source: {
              fileName: _jsxFileName,
              lineNumber: 28
            }
          },
          label
        ),
        __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
          'div',
          {
            __source: {
              fileName: _jsxFileName,
              lineNumber: 31
            }
          },
          __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
            _Flex2.default,
            {
              __source: {
                fileName: _jsxFileName,
                lineNumber: 32
              }
            },
            __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement('input', {
              className: (0, _classnames2.default)('bw1', 'pa1', 'f5', 'mt1', 'mb2', 'ba', 'b--blue', 'font', 'w-50'),
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
                lineNumber: 33
              }
            }),
            this.props.onClick ? __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
              'div',
              {
                className: 'ml2 h2 mt1 b bg-green white pa2 br2',
                onClick: this.props.onClick,
                __source: {
                  fileName: _jsxFileName,
                  lineNumber: 55
                }
              },
              'Add'
            ) : __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement('div', {
              __source: {
                fileName: _jsxFileName,
                lineNumber: 61
              }
            })
          )
        ),
        __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
          'div',
          { className: 'red b f6', __source: {
              fileName: _jsxFileName,
              lineNumber: 64
            }
          },
          error
        )
      );
    }
  }]);

  return Input;
}(_react2.default.Component);

exports.default = Input;

/***/ }),

/***/ "./components/general/Loading.js":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_react__ = __webpack_require__("react");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_react___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_react__);


Object.defineProperty(exports, "__esModule", {
  value: true
});
var _jsxFileName = 'C:\\Users\\mbg\\Documents\\attest\\components\\general\\Loading.js';

var Loading = function Loading() {
  return __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
    'div',
    { className: 'f4 b center tc bg-white mw5 pa3 mt5', __source: {
        fileName: _jsxFileName,
        lineNumber: 2
      }
    },
    'Loading...'
  );
};

exports.default = Loading;

/***/ }),

/***/ "./components/general/Radio.js":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_react__ = __webpack_require__("react");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_react___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_react__);


Object.defineProperty(exports, "__esModule", {
  value: true
});
var _jsxFileName = 'C:\\Users\\mbg\\Documents\\attest\\components\\general\\Radio.js';

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();



var _classnames = __webpack_require__("classnames");

var _classnames2 = _interopRequireDefault(_classnames);

var _react = __webpack_require__("react");

var _react2 = _interopRequireDefault(_react);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

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
              className: (0, _classnames2.default)('pointer', 'fr', 'f5', 'pv1', 'ph3', 'mb2', 'bg-white', 'ba', 'b--blue', 'bw1', 'black', s.name === selectedItem && 'bg-blue', s.name === selectedItem && 'white'),
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
}(_react2.default.Component);

exports.default = Radio;

/***/ }),

/***/ "./components/general/Select.js":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_react__ = __webpack_require__("react");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_react___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_react__);


Object.defineProperty(exports, "__esModule", {
  value: true
});
var _jsxFileName = 'C:\\Users\\mbg\\Documents\\attest\\components\\general\\Select.js';

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();



var _react = __webpack_require__("react");

var _react2 = _interopRequireDefault(_react);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

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
            className: 'pa1 font ba bw1 b--blue',
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
              { key: l.id, value: l.id, __source: {
                  fileName: _jsxFileName,
                  lineNumber: 15
                }
              },
              l.firstName + ' ' + l.lastName
            );
          })
        )
      );
    }
  }]);

  return Select;
}(_react2.default.Component);

exports.default = Select;

/***/ }),

/***/ "./components/side-menu/MenuItem.js":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_react__ = __webpack_require__("react");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_react___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_react__);


Object.defineProperty(exports, "__esModule", {
  value: true
});
var _jsxFileName = 'C:\\Users\\mbg\\Documents\\attest\\components\\side-menu\\MenuItem.js';


var _link = __webpack_require__("next/link");

var _link2 = _interopRequireDefault(_link);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var MenuItem = function MenuItem(_ref) {
  var icon = _ref.icon,
      url = _ref.url;
  return __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
    'li',
    { className: 'pt4', __source: {
        fileName: _jsxFileName,
        lineNumber: 4
      }
    },
    __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
      _link2.default,
      { href: url, __source: {
          fileName: _jsxFileName,
          lineNumber: 5
        }
      },
      __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
        'a',
        { className: 'white-50', __source: {
            fileName: _jsxFileName,
            lineNumber: 6
          }
        },
        __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement('i', { className: icon, __source: {
            fileName: _jsxFileName,
            lineNumber: 7
          }
        })
      )
    )
  );
};

exports.default = MenuItem;

/***/ }),

/***/ "./components/side-menu/SideColumn.js":
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
var _jsxFileName = 'C:\\Users\\mbg\\Documents\\attest\\components\\side-menu\\SideColumn.js';

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _react = __webpack_require__("react");

var _react2 = _interopRequireDefault(_react);

var _SlimMenu = __webpack_require__("./components/side-menu/SlimMenu.js");

var _SlimMenu2 = _interopRequireDefault(_SlimMenu);

var _Flex = __webpack_require__("./components/styles/Flex.js");

var _Flex2 = _interopRequireDefault(_Flex);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

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
      return _react2.default.createElement(
        _Flex2.default,
        {
          __source: {
            fileName: _jsxFileName,
            lineNumber: 8
          }
        },
        _react2.default.createElement(
          'div',
          { className: 'w-5', __source: {
              fileName: _jsxFileName,
              lineNumber: 9
            }
          },
          _react2.default.createElement(
            'div',
            { className: 'pa3 pt4 bg-dark-gray height fixed', __source: {
                fileName: _jsxFileName,
                lineNumber: 10
              }
            },
            _react2.default.createElement(
              'div',
              {
                __source: {
                  fileName: _jsxFileName,
                  lineNumber: 11
                }
              },
              _react2.default.createElement(_SlimMenu2.default, {
                __source: {
                  fileName: _jsxFileName,
                  lineNumber: 12
                }
              })
            )
          )
        ),
        _react2.default.createElement(
          'div',
          { className: 'w-90', __source: {
              fileName: _jsxFileName,
              lineNumber: 16
            }
          },
          this.props.children
        )
      );
    }
  }]);

  return SideColumn;
}(_react2.default.Component);

exports.default = SideColumn;

/***/ }),

/***/ "./components/side-menu/SlimMenu.js":
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
var _jsxFileName = 'C:\\Users\\mbg\\Documents\\attest\\components\\side-menu\\SlimMenu.js';

var _react = __webpack_require__("react");

var _react2 = _interopRequireDefault(_react);

var _MenuItem = __webpack_require__("./components/side-menu/MenuItem.js");

var _MenuItem2 = _interopRequireDefault(_MenuItem);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var SlimMenu = function SlimMenu() {
  return _react2.default.createElement(
    'div',
    { className: 'gray', __source: {
        fileName: _jsxFileName,
        lineNumber: 5
      }
    },
    _react2.default.createElement(
      'ul',
      { className: 'list ma0 pa0', __source: {
          fileName: _jsxFileName,
          lineNumber: 6
        }
      },
      _react2.default.createElement(_MenuItem2.default, { url: '/contracts', icon: 'fa fa-search fa-lg', __source: {
          fileName: _jsxFileName,
          lineNumber: 7
        }
      }),
      _react2.default.createElement(_MenuItem2.default, { url: '/add-contract', icon: 'fa fa-file-text-o fa-lg', __source: {
          fileName: _jsxFileName,
          lineNumber: 8
        }
      }),
      _react2.default.createElement(_MenuItem2.default, { url: '/', icon: 'fa fa-user-o fa-lg', __source: {
          fileName: _jsxFileName,
          lineNumber: 9
        }
      }),
      _react2.default.createElement(_MenuItem2.default, { url: '/settings', icon: 'fa fa-cog fa-lg', __source: {
          fileName: _jsxFileName,
          lineNumber: 10
        }
      }),
      _react2.default.createElement(_MenuItem2.default, { url: '/', icon: 'fa fa-bell-o fa-lg', __source: {
          fileName: _jsxFileName,
          lineNumber: 11
        }
      }),
      _react2.default.createElement(_MenuItem2.default, { url: '/', icon: 'fa fa-line-chart fa-lg', __source: {
          fileName: _jsxFileName,
          lineNumber: 12
        }
      })
    )
  );
};

exports.default = SlimMenu;

/***/ }),

/***/ "./components/styles/Box.js":
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _styledComponents = __webpack_require__("styled-components");

var _styledComponents2 = _interopRequireDefault(_styledComponents);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var Box = /*#__PURE__*/_styledComponents2.default.div.attrs({
  className: 'pa3 bg-white ba b--black-20'
}).withConfig({
  displayName: 'Box',
  componentId: 'n6xy4-0'
})(['']);
exports.default = Box;

/***/ }),

/***/ "./components/styles/ClearFix.js":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_react__ = __webpack_require__("react");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_react___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_react__);


Object.defineProperty(exports, "__esModule", {
  value: true
});
var _jsxFileName = 'C:\\Users\\mbg\\Documents\\attest\\components\\styles\\ClearFix.js';

var ClearFix = function ClearFix() {
  return __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement('div', { className: 'cf', __source: {
      fileName: _jsxFileName,
      lineNumber: 2
    }
  });
};

exports.default = ClearFix;

/***/ }),

/***/ "./components/styles/Flex.js":
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _styledComponents = __webpack_require__("styled-components");

var _styledComponents2 = _interopRequireDefault(_styledComponents);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var Flex = /*#__PURE__*/_styledComponents2.default.div.attrs({
  className: 'flex flex-wrap'
}).withConfig({
  displayName: 'Flex',
  componentId: 's1m282w4-0'
})(['']);
exports.default = Flex;

/***/ }),

/***/ "./components/styles/FormButton.js":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_react__ = __webpack_require__("react");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_react___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_react__);


Object.defineProperty(exports, "__esModule", {
  value: true
});
var _jsxFileName = 'C:\\Users\\mbg\\Documents\\attest\\components\\styles\\FormButton.js';

var FormButton = function FormButton(_ref) {
  var onClick = _ref.onClick,
      text = _ref.text;
  return __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement('input', {
    className: 'fr pv2 ph3 br2 mt3 b bg-green white shadow-4',
    onClick: onClick,
    type: 'submit',
    value: text,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 2
    }
  });
};

exports.default = FormButton;

/***/ }),

/***/ "./components/styles/FormSection.js":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_react__ = __webpack_require__("react");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_react___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_react__);


Object.defineProperty(exports, "__esModule", {
  value: true
});
var _jsxFileName = 'C:\\Users\\mbg\\Documents\\attest\\components\\styles\\FormSection.js';

var FormSection = function FormSection(_ref) {
  var children = _ref.children;
  return __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
    'div',
    { className: 'fl pv2 bb bw1 b--black-20 w-100', __source: {
        fileName: _jsxFileName,
        lineNumber: 2
      }
    },
    children
  );
};

exports.default = FormSection;

/***/ }),

/***/ "./components/styles/FormTitle.js":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_react__ = __webpack_require__("react");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_react___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_react__);


Object.defineProperty(exports, "__esModule", {
  value: true
});
var _jsxFileName = 'C:\\Users\\mbg\\Documents\\attest\\components\\styles\\FormTitle.js';

var FormTitle = function FormTitle(_ref) {
  var title = _ref.title;
  return __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
    'div',
    { className: 'b f4 bb bw1 b--black-20 w-100 pb2', __source: {
        fileName: _jsxFileName,
        lineNumber: 2
      }
    },
    title
  );
};
exports.default = FormTitle;

/***/ }),

/***/ "./components/styles/SectionTitle.js":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_react__ = __webpack_require__("react");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_react___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_react__);


Object.defineProperty(exports, "__esModule", {
  value: true
});
var _jsxFileName = 'C:\\Users\\mbg\\Documents\\attest\\components\\styles\\SectionTitle.js';

var SectionTitle = function SectionTitle(_ref) {
  var text = _ref.text;
  return __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
    'div',
    { className: 'mv2', __source: {
        fileName: _jsxFileName,
        lineNumber: 1
      }
    },
    text
  );
};
exports.default = SectionTitle;

/***/ }),

/***/ "./lib/Redirect.js":
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _router = __webpack_require__("next/router");

var _router2 = _interopRequireDefault(_router);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

exports.default = function (context, target) {
  if (context.res) {
    // server
    // 303: "See other"
    context.res.writeHead(303, { Location: target });
    context.res.end();
  } else {
    // In the browser, we just pretend like this never even happened ;)
    _router2.default.push(target);
  }
};

/***/ }),

/***/ "./lib/checkLoggedIn.js":
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _LoggedUserQuery = __webpack_require__("./queries/LoggedUserQuery.js");

var _LoggedUserQuery2 = _interopRequireDefault(_LoggedUserQuery);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

exports.default = function (client) {
  return new Promise(function (resolve, reject) {
    client.query({
      query: _LoggedUserQuery2.default
    }).then(function (_ref) {
      var data = _ref.data;

      resolve(data.user);
    }).catch(function () {
      // Fail gracefully
    });
  });
};

/***/ }),

/***/ "./lib/filterContracts.js":
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _lodash = __webpack_require__("lodash");

var _lodash2 = _interopRequireDefault(_lodash);

var _moment = __webpack_require__("moment");

var _moment2 = _interopRequireDefault(_moment);

var _momentRange = __webpack_require__("moment-range");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var moment = (0, _momentRange.extendMoment)(_moment2.default);

var filterContracts = function filterContracts(filters, contracts) {
  var copy = _lodash2.default.cloneDeep(contracts);
  var tags = filters.tags,
      businessUnits = filters.businessUnits,
      statuses = filters.statuses,
      dateRange = filters.dateRange,
      lawyers = filters.lawyers,
      selectedDateOption = filters.selectedDateOption;


  copy = _lodash2.default.flatten(_lodash2.default.values(_lodash2.default.groupBy(copy, function (o) {
    return o.currentStatus.name;
  })));

  // tag filters
  if (tags.length > 0) {
    copy = _lodash2.default.uniq(_lodash2.default.flatten(tags.map(function (t) {
      return _lodash2.default.filter(copy, { tags: [{ name: t }] });
    })));
  }

  // business unit filter
  if (businessUnits.length > 0) {
    copy = _lodash2.default.flatten(_lodash2.default.values(_lodash2.default.pick(_lodash2.default.groupBy(copy, function (o) {
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
    copy = _lodash2.default.flatten(_lodash2.default.values(_lodash2.default.pick(_lodash2.default.groupBy(copyWithLawyers, 'lawyerName'), lawyers)));
  }

  // date filters
  if (dateRange.startDate && dateRange.startDate.isValid() && dateRange.endDate && dateRange.endDate.isValid()) {
    var startDate = dateRange.startDate,
        endDate = dateRange.endDate;

    var range = moment.range(startDate, endDate);
    if (selectedDateOption !== 'Expiry date') {
      copy = _lodash2.default.filter(copy, function (s) {
        var latestDate = moment(_lodash2.default.last(s.statuses).date);
        return range.contains(latestDate);
      });
    } else {
      copy = _lodash2.default.filter(copy, function (s) {
        var expiryDate = moment(s.expiryDate);
        return range.contains(expiryDate);
      });
    }
  }
  if (statuses.length > 0) {
    // status filter
    copy = _lodash2.default.flatten(_lodash2.default.values(_lodash2.default.pick(_lodash2.default.groupBy(copy, function (o) {
      return o.currentStatus.name;
    }), statuses)));
  }
  return copy;
};

exports.default = filterContracts;

/***/ }),

/***/ "./lib/initApollo.js":
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _apolloClient = __webpack_require__("apollo-client");

var _apolloLinkHttp = __webpack_require__("apollo-link-http");

var _apolloCacheInmemory = __webpack_require__("apollo-cache-inmemory");

var _apolloLink = __webpack_require__("apollo-link");

var _isomorphicFetch = __webpack_require__("isomorphic-fetch");

var _isomorphicFetch2 = _interopRequireDefault(_isomorphicFetch);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var apolloClient = null;

if (!process.browser) {
  global.fetch = _isomorphicFetch2.default;
}

var cache = new _apolloCacheInmemory.InMemoryCache({
  addTypename: false
});

var create = function create(initialState, _ref) {
  var getToken = _ref.getToken;

  var httpLink = (0, _apolloLinkHttp.createHttpLink)({
    uri: process.browser ? '/graphql' : 'http://localhost:3000/graphql',
    credentials: 'same-origin'
  });

  var authLink = new _apolloLink.ApolloLink(function (operation, forward) {
    var token = getToken();
    operation.setContext({
      headers: {
        authorization: token
      }
    });
    return forward(operation);
  });

  var link = authLink.concat(httpLink);

  return new _apolloClient.ApolloClient({
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

exports.default = initApollo;

/***/ }),

/***/ "./lib/search.js":
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

var _fuse = __webpack_require__("fuse.js");

var _fuse2 = _interopRequireDefault(_fuse);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function search(list, value) {
  var options = {
    keys: ['ownerEntity', 'lawyerName', 'currentStatus', 'businessUnit', 'tags', 'internalParties', 'externalParties', 'statuses.status', 'assignedTo.firstName', 'assignedTo.lastName']
  };
  if (!value || value.length < 3) {
    return list;
  }

  var fuse = new _fuse2.default(list, _extends({
    threshold: 0.4
  }, options));

  return fuse.search(value.trim());
}

exports.default = search;

/***/ }),

/***/ "./lib/withAuth.js":
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _regenerator = __webpack_require__("babel-runtime/regenerator");

var _regenerator2 = _interopRequireDefault(_regenerator);

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

var _jsxFileName = 'C:\\Users\\mbg\\Documents\\attest\\lib\\withAuth.js';

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _react = __webpack_require__("react");

var _react2 = _interopRequireDefault(_react);

var _checkLoggedIn = __webpack_require__("./lib/checkLoggedIn.js");

var _checkLoggedIn2 = _interopRequireDefault(_checkLoggedIn);

var _Redirect = __webpack_require__("./lib/Redirect.js");

var _Redirect2 = _interopRequireDefault(_Redirect);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _asyncToGenerator(fn) { return function () { var gen = fn.apply(this, arguments); return new Promise(function (resolve, reject) { function step(key, arg) { try { var info = gen[key](arg); var value = info.value; } catch (error) { reject(error); return; } if (info.done) { resolve(value); } else { return Promise.resolve(value).then(function (value) { step("next", value); }, function (err) { step("throw", err); }); } } return step("next"); }); }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

exports.default = function (ComposedComponent) {
  return function (_React$Component) {
    _inherits(WithAuth, _React$Component);

    function WithAuth() {
      _classCallCheck(this, WithAuth);

      return _possibleConstructorReturn(this, (WithAuth.__proto__ || Object.getPrototypeOf(WithAuth)).apply(this, arguments));
    }

    _createClass(WithAuth, [{
      key: 'render',
      value: function render() {
        return _react2.default.createElement(ComposedComponent, _extends({}, this.props, { user: this.props.user, __source: {
            fileName: _jsxFileName,
            lineNumber: 16
          }
        }));
      }
    }], [{
      key: 'getInitialProps',
      value: function () {
        var _ref = _asyncToGenerator( /*#__PURE__*/_regenerator2.default.mark(function _callee(context, client) {
          var user;
          return _regenerator2.default.wrap(function _callee$(_context) {
            while (1) {
              switch (_context.prev = _context.next) {
                case 0:
                  user = false;
                  _context.next = 3;
                  return (0, _checkLoggedIn2.default)(client);

                case 3:
                  user = _context.sent;

                  if (user) {
                    _context.next = 8;
                    break;
                  }

                  (0, _Redirect2.default)(context, '/login');
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

    return WithAuth;
  }(_react2.default.Component);
};

/***/ }),

/***/ "./lib/withAuthLayout.js":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_react__ = __webpack_require__("react");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_react___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_react__);


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _regenerator = __webpack_require__("babel-runtime/regenerator");

var _regenerator2 = _interopRequireDefault(_regenerator);

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

var _jsxFileName = 'C:\\Users\\mbg\\Documents\\attest\\lib\\withAuthLayout.js';

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();



var _react = __webpack_require__("react");

var _utils = __webpack_require__("next/dist/lib/utils");

var _Header = __webpack_require__("./components/general/Header.js");

var _Header2 = _interopRequireDefault(_Header);

var _SideColumn = __webpack_require__("./components/side-menu/SideColumn.js");

var _SideColumn2 = _interopRequireDefault(_SideColumn);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _asyncToGenerator(fn) { return function () { var gen = fn.apply(this, arguments); return new Promise(function (resolve, reject) { function step(key, arg) { try { var info = gen[key](arg); var value = info.value; } catch (error) { reject(error); return; } if (info.done) { resolve(value); } else { return Promise.resolve(value).then(function (value) { step("next", value); }, function (err) { step("throw", err); }); } } return step("next"); }); }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

exports.default = function (ComposedComponent) {
  return function (_Component) {
    _inherits(WithLayout, _Component);

    function WithLayout() {
      _classCallCheck(this, WithLayout);

      return _possibleConstructorReturn(this, (WithLayout.__proto__ || Object.getPrototypeOf(WithLayout)).apply(this, arguments));
    }

    _createClass(WithLayout, [{
      key: 'render',
      value: function render() {
        return __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
          'div',
          {
            __source: {
              fileName: _jsxFileName,
              lineNumber: 13
            }
          },
          __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(_Header2.default, { client: this.props.client, user: this.props.user, __source: {
              fileName: _jsxFileName,
              lineNumber: 14
            }
          }),
          __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
            _SideColumn2.default,
            {
              __source: {
                fileName: _jsxFileName,
                lineNumber: 15
              }
            },
            __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(ComposedComponent, _extends({}, this.props, {
              __source: {
                fileName: _jsxFileName,
                lineNumber: 16
              }
            }))
          )
        );
      }
    }], [{
      key: 'getInitialProps',
      value: function () {
        var _ref = _asyncToGenerator( /*#__PURE__*/_regenerator2.default.mark(function _callee(ctx) {
          return _regenerator2.default.wrap(function _callee$(_context) {
            while (1) {
              switch (_context.prev = _context.next) {
                case 0:
                  return _context.abrupt('return', (0, _utils.loadGetInitialProps)(ComposedComponent, ctx));

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
  }(_react.Component);
};

/***/ }),

/***/ "./lib/withData.js":
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _regenerator = __webpack_require__("babel-runtime/regenerator");

var _regenerator2 = _interopRequireDefault(_regenerator);

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

var _jsxFileName = 'C:\\Users\\mbg\\Documents\\attest\\lib\\withData.js';

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _react = __webpack_require__("react");

var _react2 = _interopRequireDefault(_react);

var _propTypes = __webpack_require__("prop-types");

var _propTypes2 = _interopRequireDefault(_propTypes);

var _reactApollo = __webpack_require__("react-apollo");

var _head = __webpack_require__("next/head");

var _head2 = _interopRequireDefault(_head);

var _cookie = __webpack_require__("cookie");

var _cookie2 = _interopRequireDefault(_cookie);

var _initApollo = __webpack_require__("./lib/initApollo.js");

var _initApollo2 = _interopRequireDefault(_initApollo);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _asyncToGenerator(fn) { return function () { var gen = fn.apply(this, arguments); return new Promise(function (resolve, reject) { function step(key, arg) { try { var info = gen[key](arg); var value = info.value; } catch (error) { reject(error); return; } if (info.done) { resolve(value); } else { return Promise.resolve(value).then(function (value) { step("next", value); }, function (err) { step("throw", err); }); } } return step("next"); }); }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

function parseCookies() {
  var context = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {};
  var options = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : {};

  return _cookie2.default.parse(context.req && context.req.headers.cookie ? context.req.headers.cookie : document.cookie, options);
}

exports.default = function (ComposedComponent) {
  var _class, _temp;

  return _temp = _class = function (_React$Component) {
    _inherits(WithData, _React$Component);

    _createClass(WithData, null, [{
      key: 'getInitialProps',
      value: function () {
        var _ref = _asyncToGenerator( /*#__PURE__*/_regenerator2.default.mark(function _callee(context) {
          var serverState, apollo, composedInitialProps, app;
          return _regenerator2.default.wrap(function _callee$(_context) {
            while (1) {
              switch (_context.prev = _context.next) {
                case 0:
                  serverState = {};
                  // Setup a server-side one-time-use apollo client for initial props and
                  // rendering (on server)

                  apollo = (0, _initApollo2.default)({}, { getToken: function getToken() {
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
                  app = _react2.default.createElement(
                    _reactApollo.ApolloProvider,
                    { client: apollo, __source: {
                        fileName: _jsxFileName,
                        lineNumber: 46
                      }
                    },
                    _react2.default.createElement(ComposedComponent, _extends({}, composedInitialProps, {
                      __source: {
                        fileName: _jsxFileName,
                        lineNumber: 47
                      }
                    }))
                  );
                  _context.next = 12;
                  return (0, _reactApollo.getDataFromTree)(app, {
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
                  _head2.default.rewind();
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

      _this.apollo = (0, _initApollo2.default)(_this.props.serverState, {
        getToken: function getToken() {
          return parseCookies().token;
        }
      });
      return _this;
    }

    _createClass(WithData, [{
      key: 'render',
      value: function render() {
        return _react2.default.createElement(
          _reactApollo.ApolloProvider,
          { client: this.apollo, __source: {
              fileName: _jsxFileName,
              lineNumber: 87
            }
          },
          _react2.default.createElement(ComposedComponent, _extends({}, this.props, {
            __source: {
              fileName: _jsxFileName,
              lineNumber: 88
            }
          }))
        );
      }
    }]);

    return WithData;
  }(_react2.default.Component), _class.displayName = 'WithData(' + ComposedComponent.displayName + ')', _class.propTypes = {
    serverState: _propTypes2.default.object.isRequired
  }, _temp;
};

/***/ }),

/***/ "./lib/withLayout.js":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_react__ = __webpack_require__("react");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_react___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_react__);


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _regenerator = __webpack_require__("babel-runtime/regenerator");

var _regenerator2 = _interopRequireDefault(_regenerator);

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

var _jsxFileName = 'C:\\Users\\mbg\\Documents\\attest\\lib\\withLayout.js';

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();



var _react = __webpack_require__("react");

var _utils = __webpack_require__("next/dist/lib/utils");

var _Header = __webpack_require__("./components/general/Header.js");

var _Header2 = _interopRequireDefault(_Header);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _asyncToGenerator(fn) { return function () { var gen = fn.apply(this, arguments); return new Promise(function (resolve, reject) { function step(key, arg) { try { var info = gen[key](arg); var value = info.value; } catch (error) { reject(error); return; } if (info.done) { resolve(value); } else { return Promise.resolve(value).then(function (value) { step("next", value); }, function (err) { step("throw", err); }); } } return step("next"); }); }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

exports.default = function (ComposedComponent) {
  return function (_Component) {
    _inherits(WithLayout, _Component);

    function WithLayout() {
      _classCallCheck(this, WithLayout);

      return _possibleConstructorReturn(this, (WithLayout.__proto__ || Object.getPrototypeOf(WithLayout)).apply(this, arguments));
    }

    _createClass(WithLayout, [{
      key: 'render',
      value: function render() {
        return __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
          'div',
          {
            __source: {
              fileName: _jsxFileName,
              lineNumber: 12
            }
          },
          __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(_Header2.default, { client: this.props.client, user: this.props.user, __source: {
              fileName: _jsxFileName,
              lineNumber: 13
            }
          }),
          __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(ComposedComponent, _extends({}, this.props, {
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
        var _ref = _asyncToGenerator( /*#__PURE__*/_regenerator2.default.mark(function _callee(ctx) {
          return _regenerator2.default.wrap(function _callee$(_context) {
            while (1) {
              switch (_context.prev = _context.next) {
                case 0:
                  return _context.abrupt('return', (0, _utils.loadGetInitialProps)(ComposedComponent, ctx));

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
  }(_react.Component);
};

/***/ }),

/***/ "./lib/withUser.js":
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _regenerator = __webpack_require__("babel-runtime/regenerator");

var _regenerator2 = _interopRequireDefault(_regenerator);

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

var _jsxFileName = 'C:\\Users\\mbg\\Documents\\attest\\lib\\withUser.js';

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _react = __webpack_require__("react");

var _react2 = _interopRequireDefault(_react);

var _checkLoggedIn = __webpack_require__("./lib/checkLoggedIn.js");

var _checkLoggedIn2 = _interopRequireDefault(_checkLoggedIn);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _asyncToGenerator(fn) { return function () { var gen = fn.apply(this, arguments); return new Promise(function (resolve, reject) { function step(key, arg) { try { var info = gen[key](arg); var value = info.value; } catch (error) { reject(error); return; } if (info.done) { resolve(value); } else { return Promise.resolve(value).then(function (value) { step("next", value); }, function (err) { step("throw", err); }); } } return step("next"); }); }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

exports.default = function (ComposedComponent) {
  return function (_React$Component) {
    _inherits(WithPage, _React$Component);

    function WithPage() {
      _classCallCheck(this, WithPage);

      return _possibleConstructorReturn(this, (WithPage.__proto__ || Object.getPrototypeOf(WithPage)).apply(this, arguments));
    }

    _createClass(WithPage, [{
      key: 'render',
      value: function render() {
        return _react2.default.createElement(ComposedComponent, _extends({}, this.props, { user: this.props.user, __source: {
            fileName: _jsxFileName,
            lineNumber: 13
          }
        }));
      }
    }], [{
      key: 'getInitialProps',
      value: function () {
        var _ref = _asyncToGenerator( /*#__PURE__*/_regenerator2.default.mark(function _callee(context, client) {
          var user;
          return _regenerator2.default.wrap(function _callee$(_context) {
            while (1) {
              switch (_context.prev = _context.next) {
                case 0:
                  user = false;
                  _context.next = 3;
                  return (0, _checkLoggedIn2.default)(client);

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

    return WithPage;
  }(_react2.default.Component);
};

/***/ }),

/***/ "./modals/EditContractContainer.js":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_react__ = __webpack_require__("react");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_react___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_react__);


Object.defineProperty(exports, "__esModule", {
  value: true
});
var _jsxFileName = 'C:\\Users\\mbg\\Documents\\attest\\modals\\EditContractContainer.js';


var _UpdateContractMutation = __webpack_require__("./queries/UpdateContractMutation.js");

var _UpdateContractMutation2 = _interopRequireDefault(_UpdateContractMutation);

var _ContractsQuery = __webpack_require__("./queries/ContractsQuery.js");

var _ContractsQuery2 = _interopRequireDefault(_ContractsQuery);

var _reactApollo = __webpack_require__("react-apollo");

var _AddContract = __webpack_require__("./components/add-contract/AddContract.js");

var _AddContract2 = _interopRequireDefault(_AddContract);

var _Loading = __webpack_require__("./components/general/Loading.js");

var _Loading2 = _interopRequireDefault(_Loading);

var _reactModal = __webpack_require__("react-modal");

var _reactModal2 = _interopRequireDefault(_reactModal);

var _Box = __webpack_require__("./components/styles/Box.js");

var _Box2 = _interopRequireDefault(_Box);

var _lodash = __webpack_require__("lodash");

var _lodash2 = _interopRequireDefault(_lodash);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var EditContractContainer = function EditContractContainer(props) {
  if (!props.loading) {
    console.log(props);
    return __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
      _reactModal2.default,
      {
        className: 'content',
        overlayClassName: 'overlay',
        onRequestClose: props.closeModal,
        isOpen: props.isOpen,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 14
        }
      },
      __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
        _Box2.default,
        {
          __source: {
            fileName: _jsxFileName,
            lineNumber: 20
          }
        },
        __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(_AddContract2.default, {
          closeModal: props.closeModal,
          isOpen: props.isOpen,
          masterEntity: props.masterEntity,
          contract: props.contract,
          title: 'Edit Contract',
          handleContract: props.handleContract,
          __source: {
            fileName: _jsxFileName,
            lineNumber: 21
          }
        })
      )
    );
  }
  return __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(_Loading2.default, {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 33
    }
  });
};

var EditContractMutation = (0, _reactApollo.graphql)(_UpdateContractMutation2.default, {
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
            var contract = response.data.handleContract;
            var data = store.readQuery({ query: _ContractsQuery2.default });
            _lodash2.default.extend(_lodash2.default.find(data.contracts, { id: id }), contract);
            store.writeQuery({ query: _ContractsQuery2.default, data: data });
          }
        });
      }
    };
  }
});

var EditFormWithMutation = (0, _reactApollo.compose)(EditContractMutation)(EditContractContainer);

exports.default = EditFormWithMutation;

/***/ }),

/***/ "./pages/contracts.js":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_react__ = __webpack_require__("react");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_react___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_react__);


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

var _jsxFileName = 'C:\\Users\\mbg\\Documents\\attest\\pages\\contracts.js';


var _ContractsContainer = __webpack_require__("./components/contracts/ContractsContainer.js");

var _ContractsContainer2 = _interopRequireDefault(_ContractsContainer);

var _Page = __webpack_require__("./components/Page.js");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var ContractsPage = (0, _Page.AuthPage)(function (props) {
  return __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(_ContractsContainer2.default, _extends({}, props, {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 4
    }
  }));
});

exports.default = ContractsPage;

/***/ }),

/***/ "./queries/ContractsQuery.js":
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _templateObject = _taggedTemplateLiteral(['\nquery contracts {\n  contracts {\n    id\n    expiryDate\n    internalParties\n    externalParties\n    statuses {\n      name\n      color\n      date\n    }\n    tags {\n      name\n      color\n    }\n    businessUnit {\n      name\n      color\n    }\n    currentStatus {\n      name\n      color\n      date\n    }\n    assignedTo {\n      firstName\n      lastName\n      id\n    }\n  }\n  currentTags {\n    name\n    color\n  }\n  currentStatuses {\n    name\n    color\n  }\n  currentBusinessUnits {\n    name\n    color\n  }\n  currentLawyers\n  masterEntity {\n    name\n    businessUnits {\n      name\n      color\n    }\n    statuses {\n      name\n      color\n    }\n    tags {\n      name\n      color\n    }\n    lawyers\n  }\n}\n'], ['\nquery contracts {\n  contracts {\n    id\n    expiryDate\n    internalParties\n    externalParties\n    statuses {\n      name\n      color\n      date\n    }\n    tags {\n      name\n      color\n    }\n    businessUnit {\n      name\n      color\n    }\n    currentStatus {\n      name\n      color\n      date\n    }\n    assignedTo {\n      firstName\n      lastName\n      id\n    }\n  }\n  currentTags {\n    name\n    color\n  }\n  currentStatuses {\n    name\n    color\n  }\n  currentBusinessUnits {\n    name\n    color\n  }\n  currentLawyers\n  masterEntity {\n    name\n    businessUnits {\n      name\n      color\n    }\n    statuses {\n      name\n      color\n    }\n    tags {\n      name\n      color\n    }\n    lawyers\n  }\n}\n']);

var _graphqlTag = __webpack_require__("graphql-tag");

var _graphqlTag2 = _interopRequireDefault(_graphqlTag);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _taggedTemplateLiteral(strings, raw) { return Object.freeze(Object.defineProperties(strings, { raw: { value: Object.freeze(raw) } })); }

exports.default = (0, _graphqlTag2.default)(_templateObject);

/***/ }),

/***/ "./queries/DeleteContractMutation.js":
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _templateObject = _taggedTemplateLiteral(['\nmutation deleteContract($id: ID!) {\n  deleteContract(id: $id) {\n    id\n  }\n}\n'], ['\nmutation deleteContract($id: ID!) {\n  deleteContract(id: $id) {\n    id\n  }\n}\n']);

var _graphqlTag = __webpack_require__("graphql-tag");

var _graphqlTag2 = _interopRequireDefault(_graphqlTag);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _taggedTemplateLiteral(strings, raw) { return Object.freeze(Object.defineProperties(strings, { raw: { value: Object.freeze(raw) } })); }

exports.default = (0, _graphqlTag2.default)(_templateObject);

/***/ }),

/***/ "./queries/LoggedUserQuery.js":
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _templateObject = _taggedTemplateLiteral(['\n  query user {\n    user {\n      id\n      email\n    }\n  }\n'], ['\n  query user {\n    user {\n      id\n      email\n    }\n  }\n']);

var _graphqlTag = __webpack_require__("graphql-tag");

var _graphqlTag2 = _interopRequireDefault(_graphqlTag);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _taggedTemplateLiteral(strings, raw) { return Object.freeze(Object.defineProperties(strings, { raw: { value: Object.freeze(raw) } })); }

exports.default = (0, _graphqlTag2.default)(_templateObject);

/***/ }),

/***/ "./queries/UpdateContractMutation.js":
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _templateObject = _taggedTemplateLiteral(['\nmutation updateContract($contract: PostContractWithID) {\n  updateContract(contract: $contract) {\n    internalParties\n    externalParties\n    id\n    currentStatus {\n      name \n      color\n      date\n    }\n    statuses {\n      name\n      color\n      date\n    }\n    tags {\n      name\n      color\n    }\n    businessUnit {\n      name\n      color\n    }\n    assignedTo {\n      firstName\n      lastName\n      id\n    }\n  }\n}\n'], ['\nmutation updateContract($contract: PostContractWithID) {\n  updateContract(contract: $contract) {\n    internalParties\n    externalParties\n    id\n    currentStatus {\n      name \n      color\n      date\n    }\n    statuses {\n      name\n      color\n      date\n    }\n    tags {\n      name\n      color\n    }\n    businessUnit {\n      name\n      color\n    }\n    assignedTo {\n      firstName\n      lastName\n      id\n    }\n  }\n}\n']);

var _graphqlTag = __webpack_require__("graphql-tag");

var _graphqlTag2 = _interopRequireDefault(_graphqlTag);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _taggedTemplateLiteral(strings, raw) { return Object.freeze(Object.defineProperties(strings, { raw: { value: Object.freeze(raw) } })); }

exports.default = (0, _graphqlTag2.default)(_templateObject);

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