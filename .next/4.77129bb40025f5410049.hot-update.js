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
      // const data = [{ x: 0, y: 8 }, { x: 1, y: 5 }, { x: 2, y: 3 }]

      var d = __WEBPACK_IMPORTED_MODULE_4_lodash___default.a.groupBy(this.props.data.contracts, 'currentStatus.name');
      console.log(d);
      var data = __WEBPACK_IMPORTED_MODULE_4_lodash___default.a.values(d).map(function (value, index) {
        return {
          x: index,
          y: value.length,
          color: value[0].currentStatus.color,
          opacity: 0.7
        };
      });
      console.log(data);

      return __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
        'div',
        { className: 'pa3', __source: {
            fileName: _jsxFileName,
            lineNumber: 28
          }
        },
        __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
          __WEBPACK_IMPORTED_MODULE_3_react_vis__["b" /* XYPlot */],
          { height: 400, width: 400, colorType: 'literal', __source: {
              fileName: _jsxFileName,
              lineNumber: 29
            }
          },
          __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_3_react_vis__["a" /* VerticalBarSeries */], { data: data, __source: {
              fileName: _jsxFileName,
              lineNumber: 30
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

/***/ }),

/***/ "./node_modules/react-vis/es/index.js":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__plot_series_abstract_series__ = __webpack_require__("./node_modules/react-vis/es/plot/series/abstract-series.js");
/* unused harmony reexport AbstractSeries */
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__plot_series_line_series__ = __webpack_require__("./node_modules/react-vis/es/plot/series/line-series.js");
/* unused harmony reexport LineSeries */
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__plot_series_line_series_canvas__ = __webpack_require__("./node_modules/react-vis/es/plot/series/line-series-canvas.js");
/* unused harmony reexport LineSeriesCanvas */
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__plot_series_horizontal_bar_series__ = __webpack_require__("./node_modules/react-vis/es/plot/series/horizontal-bar-series.js");
/* unused harmony reexport HorizontalBarSeries */
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__plot_series_horizontal_bar_series_canvas__ = __webpack_require__("./node_modules/react-vis/es/plot/series/horizontal-bar-series-canvas.js");
/* unused harmony reexport HorizontalBarSeriesCanvas */
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__plot_series_vertical_bar_series__ = __webpack_require__("./node_modules/react-vis/es/plot/series/vertical-bar-series.js");
/* harmony reexport (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return __WEBPACK_IMPORTED_MODULE_5__plot_series_vertical_bar_series__["a"]; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__plot_series_vertical_bar_series_canvas__ = __webpack_require__("./node_modules/react-vis/es/plot/series/vertical-bar-series-canvas.js");
/* unused harmony reexport VerticalBarSeriesCanvas */
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__plot_series_vertical_rect_series__ = __webpack_require__("./node_modules/react-vis/es/plot/series/vertical-rect-series.js");
/* unused harmony reexport VerticalRectSeries */
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__plot_series_vertical_rect_series_canvas__ = __webpack_require__("./node_modules/react-vis/es/plot/series/vertical-rect-series-canvas.js");
/* unused harmony reexport VerticalRectSeriesCanvas */
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9__plot_series_horizontal_rect_series__ = __webpack_require__("./node_modules/react-vis/es/plot/series/horizontal-rect-series.js");
/* unused harmony reexport HorizontalRectSeries */
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_10__plot_series_horizontal_rect_series_canvas__ = __webpack_require__("./node_modules/react-vis/es/plot/series/horizontal-rect-series-canvas.js");
/* unused harmony reexport HorizontalRectSeriesCanvas */
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_11__plot_series_label_series__ = __webpack_require__("./node_modules/react-vis/es/plot/series/label-series.js");
/* unused harmony reexport LabelSeries */
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_12__plot_series_polygon_series__ = __webpack_require__("./node_modules/react-vis/es/plot/series/polygon-series.js");
/* unused harmony reexport PolygonSeries */
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_13__plot_series_rect_series__ = __webpack_require__("./node_modules/react-vis/es/plot/series/rect-series.js");
/* unused harmony reexport RectSeries */
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_14__plot_series_rect_series_canvas__ = __webpack_require__("./node_modules/react-vis/es/plot/series/rect-series-canvas.js");
/* unused harmony reexport RectSeriesCanvas */
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_15__plot_series_mark_series__ = __webpack_require__("./node_modules/react-vis/es/plot/series/mark-series.js");
/* unused harmony reexport MarkSeries */
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_16__plot_series_mark_series_canvas__ = __webpack_require__("./node_modules/react-vis/es/plot/series/mark-series-canvas.js");
/* unused harmony reexport MarkSeriesCanvas */
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_17__plot_series_whisker_series__ = __webpack_require__("./node_modules/react-vis/es/plot/series/whisker-series.js");
/* unused harmony reexport WhiskerSeries */
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_18__plot_series_heatmap_series__ = __webpack_require__("./node_modules/react-vis/es/plot/series/heatmap-series.js");
/* unused harmony reexport HeatmapSeries */
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_19__plot_series_contour_series__ = __webpack_require__("./node_modules/react-vis/es/plot/series/contour-series.js");
/* unused harmony reexport ContourSeries */
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_20__plot_series_custom_svg_series__ = __webpack_require__("./node_modules/react-vis/es/plot/series/custom-svg-series.js");
/* unused harmony reexport CustomSVGSeries */
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_21__plot_series_area_series__ = __webpack_require__("./node_modules/react-vis/es/plot/series/area-series.js");
/* unused harmony reexport AreaSeries */
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_22__plot_series_arc_series__ = __webpack_require__("./node_modules/react-vis/es/plot/series/arc-series.js");
/* unused harmony reexport ArcSeries */
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_23__plot_series_line_mark_series__ = __webpack_require__("./node_modules/react-vis/es/plot/series/line-mark-series.js");
/* unused harmony reexport LineMarkSeries */
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_24__plot_series_line_mark_series_canvas__ = __webpack_require__("./node_modules/react-vis/es/plot/series/line-mark-series-canvas.js");
/* unused harmony reexport LineMarkSeriesCanvas */
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_25__plot_hint__ = __webpack_require__("./node_modules/react-vis/es/plot/hint.js");
/* unused harmony reexport Hint */
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_26__plot_borders__ = __webpack_require__("./node_modules/react-vis/es/plot/borders.js");
/* unused harmony reexport Borders */
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_27__plot_crosshair__ = __webpack_require__("./node_modules/react-vis/es/plot/crosshair.js");
/* unused harmony reexport Crosshair */
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_28__plot_xy_plot__ = __webpack_require__("./node_modules/react-vis/es/plot/xy-plot.js");
/* harmony reexport (binding) */ __webpack_require__.d(__webpack_exports__, "b", function() { return __WEBPACK_IMPORTED_MODULE_28__plot_xy_plot__["a"]; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_29__plot_axis_decorative_axis__ = __webpack_require__("./node_modules/react-vis/es/plot/axis/decorative-axis.js");
/* unused harmony reexport DecorativeAxis */
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_30__plot_axis_x_axis__ = __webpack_require__("./node_modules/react-vis/es/plot/axis/x-axis.js");
/* unused harmony reexport XAxis */
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_31__plot_axis_y_axis__ = __webpack_require__("./node_modules/react-vis/es/plot/axis/y-axis.js");
/* unused harmony reexport YAxis */
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_32__plot_circular_grid_lines__ = __webpack_require__("./node_modules/react-vis/es/plot/circular-grid-lines.js");
/* unused harmony reexport CircularGridLines */
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_33__plot_grid_lines__ = __webpack_require__("./node_modules/react-vis/es/plot/grid-lines.js");
/* unused harmony reexport GridLines */
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_34__plot_gradient_defs__ = __webpack_require__("./node_modules/react-vis/es/plot/gradient-defs.js");
/* unused harmony reexport GradientDefs */
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_35__plot_vertical_grid_lines__ = __webpack_require__("./node_modules/react-vis/es/plot/vertical-grid-lines.js");
/* unused harmony reexport VerticalGridLines */
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_36__plot_horizontal_grid_lines__ = __webpack_require__("./node_modules/react-vis/es/plot/horizontal-grid-lines.js");
/* unused harmony reexport HorizontalGridLines */
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_37__plot_voronoi__ = __webpack_require__("./node_modules/react-vis/es/plot/voronoi.js");
/* unused harmony reexport Voronoi */
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_38__legends_discrete_color_legend__ = __webpack_require__("./node_modules/react-vis/es/legends/discrete-color-legend.js");
/* unused harmony reexport DiscreteColorLegend */
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_39__legends_searchable_discrete_color_legend__ = __webpack_require__("./node_modules/react-vis/es/legends/searchable-discrete-color-legend.js");
/* unused harmony reexport SearchableDiscreteColorLegend */
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_40__legends_continuous_color_legend__ = __webpack_require__("./node_modules/react-vis/es/legends/continuous-color-legend.js");
/* unused harmony reexport ContinuousColorLegend */
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_41__legends_continuous_size_legend__ = __webpack_require__("./node_modules/react-vis/es/legends/continuous-size-legend.js");
/* unused harmony reexport ContinuousSizeLegend */
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_42__treemap__ = __webpack_require__("./node_modules/react-vis/es/treemap/index.js");
/* unused harmony reexport Treemap */
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_43__radial_chart__ = __webpack_require__("./node_modules/react-vis/es/radial-chart/index.js");
/* unused harmony reexport RadialChart */
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_44__radar_chart__ = __webpack_require__("./node_modules/react-vis/es/radar-chart/index.js");
/* unused harmony reexport RadarChart */
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_45__parallel_coordinates__ = __webpack_require__("./node_modules/react-vis/es/parallel-coordinates/index.js");
/* unused harmony reexport ParallelCoordinates */
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_46__sankey__ = __webpack_require__("./node_modules/react-vis/es/sankey/index.js");
/* unused harmony reexport Sankey */
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_47__sunburst__ = __webpack_require__("./node_modules/react-vis/es/sunburst/index.js");
/* unused harmony reexport Sunburst */
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_48__make_vis_flexible__ = __webpack_require__("./node_modules/react-vis/es/make-vis-flexible.js");
/* unused harmony reexport makeHeightFlexible */
/* unused harmony reexport makeVisFlexible */
/* unused harmony reexport makeWidthFlexible */
/* unused harmony reexport FlexibleXYPlot */
/* unused harmony reexport FlexibleWidthXYPlot */
/* unused harmony reexport FlexibleHeightXYPlot */
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_49__utils_axis_utils__ = __webpack_require__("./node_modules/react-vis/es/utils/axis-utils.js");
/* unused harmony reexport AxisUtils */
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_50__utils_scales_utils__ = __webpack_require__("./node_modules/react-vis/es/utils/scales-utils.js");
/* unused harmony reexport ScaleUtils */
// Copyright (c) 2016 - 2017 Uber Technologies, Inc.
//
// Permission is hereby granted, free of charge, to any person obtaining a copy
// of this software and associated documentation files (the "Software"), to deal
// in the Software without restriction, including without limitation the rights
// to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
// copies of the Software, and to permit persons to whom the Software is
// furnished to do so, subject to the following conditions:
//
// The above copyright notice and this permission notice shall be included in
// all copies or substantial portions of the Software.
//
// THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
// IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
// FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
// AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
// LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
// OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN
// THE SOFTWARE.










































































































/***/ }),

/***/ "./node_modules/react-vis/es/plot/series/vertical-bar-series.js":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_react__ = __webpack_require__("./node_modules/react/cjs/react.development.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_react___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_react__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__abstract_series__ = __webpack_require__("./node_modules/react-vis/es/plot/series/abstract-series.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__bar_series__ = __webpack_require__("./node_modules/react-vis/es/plot/series/bar-series.js");
var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

// Copyright (c) 2016 - 2017 Uber Technologies, Inc.
//
// Permission is hereby granted, free of charge, to any person obtaining a copy
// of this software and associated documentation files (the "Software"), to deal
// in the Software without restriction, including without limitation the rights
// to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
// copies of the Software, and to permit persons to whom the Software is
// furnished to do so, subject to the following conditions:
//
// The above copyright notice and this permission notice shall be included in
// all copies or substantial portions of the Software.
//
// THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
// IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
// FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
// AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
// LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
// OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN
// THE SOFTWARE.






var VerticalBarSeries = function (_AbstractSeries) {
  _inherits(VerticalBarSeries, _AbstractSeries);

  function VerticalBarSeries() {
    _classCallCheck(this, VerticalBarSeries);

    return _possibleConstructorReturn(this, (VerticalBarSeries.__proto__ || Object.getPrototypeOf(VerticalBarSeries)).apply(this, arguments));
  }

  _createClass(VerticalBarSeries, [{
    key: 'render',
    value: function render() {
      return __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_2__bar_series__["a" /* default */], _extends({}, this.props, {
        linePosAttr: 'x',
        valuePosAttr: 'y',
        lineSizeAttr: 'width',
        valueSizeAttr: 'height'
      }));
    }
  }], [{
    key: 'getParentConfig',
    value: function getParentConfig(attr) {
      var isDomainAdjustmentNeeded = attr === 'x';
      var zeroBaseValue = attr === 'y';
      return {
        isDomainAdjustmentNeeded: isDomainAdjustmentNeeded,
        zeroBaseValue: zeroBaseValue
      };
    }
  }]);

  return VerticalBarSeries;
}(__WEBPACK_IMPORTED_MODULE_1__abstract_series__["a" /* default */]);

VerticalBarSeries.displayName = 'VerticalBarSeries';

/* harmony default export */ __webpack_exports__["a"] = (VerticalBarSeries);

/***/ })

})
//# sourceMappingURL=4.77129bb40025f5410049.hot-update.js.map