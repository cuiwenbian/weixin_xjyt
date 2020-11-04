(global["webpackJsonp"] = global["webpackJsonp"] || []).push([["components/cmd-circle/cmd-circle"],{

/***/ 288:
/*!***********************************************************************!*\
  !*** E:/云相册/星际云通小程序/weixin_xjyt/components/cmd-circle/cmd-circle.vue ***!
  \***********************************************************************/
/*! no static exports found */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _cmd_circle_vue_vue_type_template_id_25efdbe4___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./cmd-circle.vue?vue&type=template&id=25efdbe4& */ 289);
/* harmony import */ var _cmd_circle_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./cmd-circle.vue?vue&type=script&lang=js& */ 291);
/* harmony reexport (unknown) */ for(var __WEBPACK_IMPORT_KEY__ in _cmd_circle_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__) if(__WEBPACK_IMPORT_KEY__ !== 'default') (function(key) { __webpack_require__.d(__webpack_exports__, key, function() { return _cmd_circle_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__[key]; }) }(__WEBPACK_IMPORT_KEY__));
/* harmony import */ var _cmd_circle_vue_vue_type_style_index_0_lang_css___WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./cmd-circle.vue?vue&type=style&index=0&lang=css& */ 293);
/* harmony import */ var _D_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./node_modules/@dcloudio/vue-cli-plugin-uni/packages/vue-loader/lib/runtime/componentNormalizer.js */ 10);

var renderjs





/* normalize component */

var component = Object(_D_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_3__["default"])(
  _cmd_circle_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__["default"],
  _cmd_circle_vue_vue_type_template_id_25efdbe4___WEBPACK_IMPORTED_MODULE_0__["render"],
  _cmd_circle_vue_vue_type_template_id_25efdbe4___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"],
  false,
  null,
  null,
  null,
  false,
  _cmd_circle_vue_vue_type_template_id_25efdbe4___WEBPACK_IMPORTED_MODULE_0__["components"],
  renderjs
)

component.options.__file = "components/cmd-circle/cmd-circle.vue"
/* harmony default export */ __webpack_exports__["default"] = (component.exports);

/***/ }),

/***/ 289:
/*!******************************************************************************************************!*\
  !*** E:/云相册/星际云通小程序/weixin_xjyt/components/cmd-circle/cmd-circle.vue?vue&type=template&id=25efdbe4& ***!
  \******************************************************************************************************/
/*! exports provided: render, staticRenderFns, recyclableRender, components */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _D_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_D_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_16_0_D_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_webpack_uni_mp_loader_lib_template_js_D_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_uni_app_loader_page_meta_js_D_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_index_js_vue_loader_options_D_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_webpack_uni_mp_loader_lib_style_js_cmd_circle_vue_vue_type_template_id_25efdbe4___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!./node_modules/@dcloudio/vue-cli-plugin-uni/packages/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/@dcloudio/vue-cli-plugin-uni/packages/webpack-preprocess-loader??ref--16-0!./node_modules/@dcloudio/webpack-uni-mp-loader/lib/template.js!./node_modules/@dcloudio/vue-cli-plugin-uni/packages/webpack-uni-app-loader/page-meta.js!./node_modules/@dcloudio/vue-cli-plugin-uni/packages/vue-loader/lib??vue-loader-options!./node_modules/@dcloudio/webpack-uni-mp-loader/lib/style.js!./cmd-circle.vue?vue&type=template&id=25efdbe4& */ 290);
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "render", function() { return _D_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_D_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_16_0_D_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_webpack_uni_mp_loader_lib_template_js_D_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_uni_app_loader_page_meta_js_D_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_index_js_vue_loader_options_D_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_webpack_uni_mp_loader_lib_style_js_cmd_circle_vue_vue_type_template_id_25efdbe4___WEBPACK_IMPORTED_MODULE_0__["render"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "staticRenderFns", function() { return _D_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_D_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_16_0_D_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_webpack_uni_mp_loader_lib_template_js_D_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_uni_app_loader_page_meta_js_D_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_index_js_vue_loader_options_D_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_webpack_uni_mp_loader_lib_style_js_cmd_circle_vue_vue_type_template_id_25efdbe4___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "recyclableRender", function() { return _D_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_D_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_16_0_D_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_webpack_uni_mp_loader_lib_template_js_D_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_uni_app_loader_page_meta_js_D_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_index_js_vue_loader_options_D_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_webpack_uni_mp_loader_lib_style_js_cmd_circle_vue_vue_type_template_id_25efdbe4___WEBPACK_IMPORTED_MODULE_0__["recyclableRender"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "components", function() { return _D_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_D_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_16_0_D_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_webpack_uni_mp_loader_lib_template_js_D_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_uni_app_loader_page_meta_js_D_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_index_js_vue_loader_options_D_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_webpack_uni_mp_loader_lib_style_js_cmd_circle_vue_vue_type_template_id_25efdbe4___WEBPACK_IMPORTED_MODULE_0__["components"]; });



/***/ }),

/***/ 290:
/*!******************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/@dcloudio/vue-cli-plugin-uni/packages/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/@dcloudio/vue-cli-plugin-uni/packages/webpack-preprocess-loader??ref--16-0!./node_modules/@dcloudio/webpack-uni-mp-loader/lib/template.js!./node_modules/@dcloudio/vue-cli-plugin-uni/packages/webpack-uni-app-loader/page-meta.js!./node_modules/@dcloudio/vue-cli-plugin-uni/packages/vue-loader/lib??vue-loader-options!./node_modules/@dcloudio/webpack-uni-mp-loader/lib/style.js!E:/云相册/星际云通小程序/weixin_xjyt/components/cmd-circle/cmd-circle.vue?vue&type=template&id=25efdbe4& ***!
  \******************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************/
/*! exports provided: render, staticRenderFns, recyclableRender, components */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "render", function() { return render; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "staticRenderFns", function() { return staticRenderFns; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "recyclableRender", function() { return recyclableRender; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "components", function() { return components; });
var components
var render = function() {
  var _vm = this
  var _h = _vm.$createElement
  var _c = _vm._self._c || _h
}
var recyclableRender = false
var staticRenderFns = []
render._withStripped = true



/***/ }),

/***/ 291:
/*!************************************************************************************************!*\
  !*** E:/云相册/星际云通小程序/weixin_xjyt/components/cmd-circle/cmd-circle.vue?vue&type=script&lang=js& ***!
  \************************************************************************************************/
/*! no static exports found */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _D_HBuilderX_plugins_uniapp_cli_node_modules_babel_loader_lib_index_js_D_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_12_1_D_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_webpack_uni_mp_loader_lib_script_js_D_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_index_js_vue_loader_options_D_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_webpack_uni_mp_loader_lib_style_js_cmd_circle_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!./node_modules/babel-loader/lib!./node_modules/@dcloudio/vue-cli-plugin-uni/packages/webpack-preprocess-loader??ref--12-1!./node_modules/@dcloudio/webpack-uni-mp-loader/lib/script.js!./node_modules/@dcloudio/vue-cli-plugin-uni/packages/vue-loader/lib??vue-loader-options!./node_modules/@dcloudio/webpack-uni-mp-loader/lib/style.js!./cmd-circle.vue?vue&type=script&lang=js& */ 292);
/* harmony import */ var _D_HBuilderX_plugins_uniapp_cli_node_modules_babel_loader_lib_index_js_D_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_12_1_D_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_webpack_uni_mp_loader_lib_script_js_D_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_index_js_vue_loader_options_D_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_webpack_uni_mp_loader_lib_style_js_cmd_circle_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_D_HBuilderX_plugins_uniapp_cli_node_modules_babel_loader_lib_index_js_D_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_12_1_D_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_webpack_uni_mp_loader_lib_script_js_D_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_index_js_vue_loader_options_D_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_webpack_uni_mp_loader_lib_style_js_cmd_circle_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__);
/* harmony reexport (unknown) */ for(var __WEBPACK_IMPORT_KEY__ in _D_HBuilderX_plugins_uniapp_cli_node_modules_babel_loader_lib_index_js_D_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_12_1_D_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_webpack_uni_mp_loader_lib_script_js_D_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_index_js_vue_loader_options_D_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_webpack_uni_mp_loader_lib_style_js_cmd_circle_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__) if(__WEBPACK_IMPORT_KEY__ !== 'default') (function(key) { __webpack_require__.d(__webpack_exports__, key, function() { return _D_HBuilderX_plugins_uniapp_cli_node_modules_babel_loader_lib_index_js_D_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_12_1_D_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_webpack_uni_mp_loader_lib_script_js_D_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_index_js_vue_loader_options_D_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_webpack_uni_mp_loader_lib_style_js_cmd_circle_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__[key]; }) }(__WEBPACK_IMPORT_KEY__));
 /* harmony default export */ __webpack_exports__["default"] = (_D_HBuilderX_plugins_uniapp_cli_node_modules_babel_loader_lib_index_js_D_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_12_1_D_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_webpack_uni_mp_loader_lib_script_js_D_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_index_js_vue_loader_options_D_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_webpack_uni_mp_loader_lib_style_js_cmd_circle_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0___default.a); 

/***/ }),

/***/ 292:
/*!*******************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib!./node_modules/@dcloudio/vue-cli-plugin-uni/packages/webpack-preprocess-loader??ref--12-1!./node_modules/@dcloudio/webpack-uni-mp-loader/lib/script.js!./node_modules/@dcloudio/vue-cli-plugin-uni/packages/vue-loader/lib??vue-loader-options!./node_modules/@dcloudio/webpack-uni-mp-loader/lib/style.js!E:/云相册/星际云通小程序/weixin_xjyt/components/cmd-circle/cmd-circle.vue?vue&type=script&lang=js& ***!
  \*******************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
/* WEBPACK VAR INJECTION */(function(uni) {Object.defineProperty(exports, "__esModule", { value: true });exports.default = void 0; //
//
//
//
//
//

/**
 * 进度圈组件  
 * @description 用圈显示一个操作完成的百分比时，为用户显示该操作的当前进度和状态。  
 * @tutorial https://ext.dcloud.net.cn/plugin?id=259  
 * @property {String} cid 画布编号 - 默认defaultCanvas  
 * @property {String} type 进度圈类型 - 圆圈形：circle、仪表盘：dashboard，默认圆圈形：circle  
 * @property {Number} percent 进度圈百分比值 - 显示范围0-100 ，可能数比较大就需要自己转成百分比的值  
 * @property {Boolean} show-info 进度圈进度状态信息 - 显示进度数值或状态图标，默认true  
 * @property {String} font-color 进度圈文字信息颜色  
 * @property {String} font-size 进度圈文字信息大小 - 默认：14  
 * @property {String} status 进度圈状态 - 正常：normal、完成：success、失败：exception，默认正常：normal  
 * @property {Number} stroke-width 进度圈线条宽度 - 建议在条线的宽度范围：1-50，与进度条显示宽度有关，默认：6  
 * @property {String} stroke-color 进度圈的颜色 - 设置后status状态无效  
 * @property {String} stroke-background 进度圈的底圈颜色 - 默认：#eeeeee  
 * @property {String} stroke-shape 进度圈两端的形状 - 圆：round、方直角：square，默认圆：round  
 * @property {Number} width 进度圈布宽度 - 默认80  
 * @property {String} gap-degree 进度圈形缺口角度 - 可取值 0 ~ 360，仅支持类型：circle  
 * @property {String} gap-position 进度圈形缺口位置 - 可取值'top', 'bottom', 'left', 'right'，仅支持类型：circle  
 * @example <cmd-circle id="circle1" type="circle" :percent="75"></cmd-circle>  
 */var _default =
{
  name: "cmd-circle",

  props: {
    // 画布编号 默认defaultCanvas
    cid: {
      type: String,
      default: "defaultCanvas" },

    // 圈类型默认：circle，可选 circle dashboard
    type: {
      type: String,
      validator: function validator(val) {
        return ['circle', 'dashboard'].includes(val);
      },
      default: 'circle' },

    // 圈进度百分比值
    percent: {
      type: Number,
      validator: function validator(val) {
        return val >= 0 && val <= 100;
      },
      default: 0 },

    // 圈是否显示进度数值或状态图标
    showInfo: {
      type: Boolean,
      default: true },

    // 圈文字信息颜色
    fontColor: {
      type: String,
      default: "#3DC9A0" },

    // 圈文字信息大小 默认14
    fontSize: {
      type: Number,
      default: 7 },

    // 圈进度状态，可选：normal success exception
    status: {
      type: String,
      validator: function validator(val) {
        return ['normal', 'success', 'exception'].includes(val);
      },
      default: 'normal' },

    // 圈线条宽度1-50，与width有关
    strokeWidth: {
      type: Number,
      default: 4 },

    // 圈的颜色，设置后status状态无效
    strokeColor: {
      type: String,
      default: '#40D4A8' },

    // 圈的底圈颜色 默认：#eeeeee
    strokeBackground: {
      type: String,
      default: '#F5F5F5' },

    // 圈两端的形状 可选：'round', 'square'
    strokeShape: {
      type: String,
      validator: function validator(val) {
        return ['round', 'square'].includes(val);
      },
      default: 'round' },

    // 圈画布宽度
    width: {
      type: Number,
      default: 32 },

    // 圈缺口角度，可取值 0 ~ 360，仅支持类型：circle  
    gapDegree: {
      type: Number,
      validator: function validator(val) {
        return val >= 0 && val <= 360;
      },
      default: 360 },

    // 圈缺口开始位置,可取值'top', 'bottom', 'left', 'right'，仅支持类型：circle  
    gapPosition: {
      type: String,
      validator: function validator(val) {
        return ['top', 'bottom', 'left', 'right'].includes(val);
      },
      default: 'top' } },



  data: function data() {
    return {
      // 画布实例
      ctx: {},
      // 圈半径
      width2px: "" };

  },

  computed: {
    // 计算设置圈样式
    calCircleStyle: function calCircleStyle() {
      return "width: ".concat(this.width, "px;\n\t\t\t\theight: ").concat(
      this.width, "px;");
    },
    // 计算圈状态
    calStatus: function calStatus() {
      var status = {};
      switch (this.status) {
        case 'normal':
          status = {
            color: "#1890ff",
            value: 1 };

          break;
        case 'success':
          status = {
            color: "#52c41a",
            value: 2 };

          break;
        case 'exception':
          status = {
            color: "#f5222d",
            value: 3 };

          break;}

      return status;
    },
    // 计算圈缺口角度
    calGapDegree: function calGapDegree() {
      return this.gapDegree <= 0 ? 360 : this.gapDegree;
    },
    // 计算圈缺口位置
    calGapPosition: function calGapPosition() {
      var gapPosition = 0;
      switch (this.gapPosition) {
        case 'bottom':
          gapPosition = 90;
          break;
        case 'left':
          gapPosition = 180;
          break;
        case 'top':
          gapPosition = 270;
          break;
        case 'right':
          gapPosition = 360;
          break;}

      return gapPosition;
    } },


  watch: {
    // 监听百分比值改变
    percent: function percent(val) {
      this.drawStroke(val);
    } },


  mounted: function mounted() {var _this = this;
    // 创建画布实例
    this.ctx = uni.createCanvasContext(this.cid, this);
    // upx转px 圈半径大小
    this.width2px = uni.upx2px(this.width);
    // 绘制初始 
    this.$nextTick(function () {
      _this.drawStroke(_this.percent);
    });
  },

  methods: {
    // 绘制圈
    drawStroke: function drawStroke(percent) {
      percent = percent >= 100 ? 100 : percent < 0 ? 0 : percent;
      // 圈条进度色
      var color = this.strokeColor || this.calStatus.color;
      // 是否圈中心显示信息
      if (this.showInfo) {
        switch (this.calStatus.value) {
          case 1:
            if (percent >= 100) {
              // 设置打勾
              this.drawSuccess();
              percent = 100;
              color = "#52c41a";
            } else {
              // 设置字体
              this.drawText(percent);
            }
            break;
          case 2:
            // 设置打勾
            this.drawSuccess();
            percent = 100;
            color = "#52c41a";
            break;
          case 3:
            // 设置打叉
            this.drawException();
            percent = 0;
            color = "#f5222d";
            break;
          default:
            break;}

      }
      // 缺口
      var gapPosition = this.calGapPosition;
      var gapDegree = this.calGapDegree;
      // 仪表固定
      if (this.type === "dashboard") {
        gapPosition = 135;
        gapDegree = 270;
      }
      // 圈型条宽
      this.ctx.setLineCap(this.strokeShape);
      this.ctx.setLineWidth(this.strokeWidth);
      // 位置原点
      this.ctx.translate(this.width2px, this.width2px);
      // 缺口方向 
      this.ctx.rotate(gapPosition * Math.PI / 180);
      // 圈底 
      this.ctx.beginPath();
      this.ctx.arc(0, 0, this.width2px - this.strokeWidth, 0, gapDegree * Math.PI / 180);
      this.ctx.setStrokeStyle(this.strokeBackground);
      this.ctx.stroke();
      // 圈进度 
      this.ctx.beginPath();
      this.ctx.arc(0, 0, this.width2px - this.strokeWidth, 0, percent * gapDegree * Math.PI / 18000);
      this.ctx.setStrokeStyle(color);
      this.ctx.stroke();
      // 绘制
      this.ctx.draw();
    },
    // 绘制文字格式
    drawText: function drawText(percent) {
      this.ctx.beginPath();
      this.ctx.setFontSize(this.fontSize);
      this.ctx.setFillStyle(this.fontColor);
      this.ctx.setTextAlign('center');
      this.ctx.fillText("".concat(percent, "%"), this.width2px, this.width2px + this.fontSize / 2);
      this.ctx.stroke();
    },
    // 绘制成功打勾
    drawSuccess: function drawSuccess() {
      var x = this.width2px - this.fontSize / 2;
      var y = this.width2px + this.fontSize / 2;
      this.ctx.beginPath();
      this.ctx.setLineCap('round');
      this.ctx.setLineWidth(this.fontSize / 4);
      this.ctx.moveTo(this.width2px, y);
      this.ctx.lineTo(y, x);
      this.ctx.moveTo(this.width2px, y);
      this.ctx.lineTo(x, this.width2px);
      this.ctx.setStrokeStyle("#52c41a");
      this.ctx.stroke();
    },
    // 绘制异常打叉
    drawException: function drawException() {
      var x = this.width2px - this.fontSize / 2;
      var y = this.width2px + this.fontSize / 2;
      this.ctx.beginPath();
      this.ctx.setLineCap('round');
      this.ctx.setLineWidth(this.fontSize / 4);
      this.ctx.moveTo(x, x);
      this.ctx.lineTo(y, y);
      this.ctx.moveTo(y, x);
      this.ctx.lineTo(x, y);
      this.ctx.setStrokeStyle("#f5222d");
      this.ctx.stroke();
    } } };exports.default = _default;
/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./node_modules/@dcloudio/uni-mp-weixin/dist/index.js */ 1)["default"]))

/***/ }),

/***/ 293:
/*!********************************************************************************************************!*\
  !*** E:/云相册/星际云通小程序/weixin_xjyt/components/cmd-circle/cmd-circle.vue?vue&type=style&index=0&lang=css& ***!
  \********************************************************************************************************/
/*! no static exports found */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _D_HBuilderX_plugins_uniapp_cli_node_modules_mini_css_extract_plugin_dist_loader_js_ref_6_oneOf_1_0_D_HBuilderX_plugins_uniapp_cli_node_modules_css_loader_dist_cjs_js_ref_6_oneOf_1_1_D_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_loaders_stylePostLoader_js_D_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_6_oneOf_1_2_D_HBuilderX_plugins_uniapp_cli_node_modules_postcss_loader_src_index_js_ref_6_oneOf_1_3_D_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_index_js_vue_loader_options_D_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_webpack_uni_mp_loader_lib_style_js_cmd_circle_vue_vue_type_style_index_0_lang_css___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!./node_modules/mini-css-extract-plugin/dist/loader.js??ref--6-oneOf-1-0!./node_modules/css-loader/dist/cjs.js??ref--6-oneOf-1-1!./node_modules/@dcloudio/vue-cli-plugin-uni/packages/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/@dcloudio/vue-cli-plugin-uni/packages/webpack-preprocess-loader??ref--6-oneOf-1-2!./node_modules/postcss-loader/src??ref--6-oneOf-1-3!./node_modules/@dcloudio/vue-cli-plugin-uni/packages/vue-loader/lib??vue-loader-options!./node_modules/@dcloudio/webpack-uni-mp-loader/lib/style.js!./cmd-circle.vue?vue&type=style&index=0&lang=css& */ 294);
/* harmony import */ var _D_HBuilderX_plugins_uniapp_cli_node_modules_mini_css_extract_plugin_dist_loader_js_ref_6_oneOf_1_0_D_HBuilderX_plugins_uniapp_cli_node_modules_css_loader_dist_cjs_js_ref_6_oneOf_1_1_D_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_loaders_stylePostLoader_js_D_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_6_oneOf_1_2_D_HBuilderX_plugins_uniapp_cli_node_modules_postcss_loader_src_index_js_ref_6_oneOf_1_3_D_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_index_js_vue_loader_options_D_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_webpack_uni_mp_loader_lib_style_js_cmd_circle_vue_vue_type_style_index_0_lang_css___WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_D_HBuilderX_plugins_uniapp_cli_node_modules_mini_css_extract_plugin_dist_loader_js_ref_6_oneOf_1_0_D_HBuilderX_plugins_uniapp_cli_node_modules_css_loader_dist_cjs_js_ref_6_oneOf_1_1_D_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_loaders_stylePostLoader_js_D_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_6_oneOf_1_2_D_HBuilderX_plugins_uniapp_cli_node_modules_postcss_loader_src_index_js_ref_6_oneOf_1_3_D_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_index_js_vue_loader_options_D_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_webpack_uni_mp_loader_lib_style_js_cmd_circle_vue_vue_type_style_index_0_lang_css___WEBPACK_IMPORTED_MODULE_0__);
/* harmony reexport (unknown) */ for(var __WEBPACK_IMPORT_KEY__ in _D_HBuilderX_plugins_uniapp_cli_node_modules_mini_css_extract_plugin_dist_loader_js_ref_6_oneOf_1_0_D_HBuilderX_plugins_uniapp_cli_node_modules_css_loader_dist_cjs_js_ref_6_oneOf_1_1_D_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_loaders_stylePostLoader_js_D_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_6_oneOf_1_2_D_HBuilderX_plugins_uniapp_cli_node_modules_postcss_loader_src_index_js_ref_6_oneOf_1_3_D_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_index_js_vue_loader_options_D_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_webpack_uni_mp_loader_lib_style_js_cmd_circle_vue_vue_type_style_index_0_lang_css___WEBPACK_IMPORTED_MODULE_0__) if(__WEBPACK_IMPORT_KEY__ !== 'default') (function(key) { __webpack_require__.d(__webpack_exports__, key, function() { return _D_HBuilderX_plugins_uniapp_cli_node_modules_mini_css_extract_plugin_dist_loader_js_ref_6_oneOf_1_0_D_HBuilderX_plugins_uniapp_cli_node_modules_css_loader_dist_cjs_js_ref_6_oneOf_1_1_D_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_loaders_stylePostLoader_js_D_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_6_oneOf_1_2_D_HBuilderX_plugins_uniapp_cli_node_modules_postcss_loader_src_index_js_ref_6_oneOf_1_3_D_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_index_js_vue_loader_options_D_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_webpack_uni_mp_loader_lib_style_js_cmd_circle_vue_vue_type_style_index_0_lang_css___WEBPACK_IMPORTED_MODULE_0__[key]; }) }(__WEBPACK_IMPORT_KEY__));
 /* harmony default export */ __webpack_exports__["default"] = (_D_HBuilderX_plugins_uniapp_cli_node_modules_mini_css_extract_plugin_dist_loader_js_ref_6_oneOf_1_0_D_HBuilderX_plugins_uniapp_cli_node_modules_css_loader_dist_cjs_js_ref_6_oneOf_1_1_D_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_loaders_stylePostLoader_js_D_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_6_oneOf_1_2_D_HBuilderX_plugins_uniapp_cli_node_modules_postcss_loader_src_index_js_ref_6_oneOf_1_3_D_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_index_js_vue_loader_options_D_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_webpack_uni_mp_loader_lib_style_js_cmd_circle_vue_vue_type_style_index_0_lang_css___WEBPACK_IMPORTED_MODULE_0___default.a); 

/***/ }),

/***/ 294:
/*!************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/mini-css-extract-plugin/dist/loader.js??ref--6-oneOf-1-0!./node_modules/css-loader/dist/cjs.js??ref--6-oneOf-1-1!./node_modules/@dcloudio/vue-cli-plugin-uni/packages/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/@dcloudio/vue-cli-plugin-uni/packages/webpack-preprocess-loader??ref--6-oneOf-1-2!./node_modules/postcss-loader/src??ref--6-oneOf-1-3!./node_modules/@dcloudio/vue-cli-plugin-uni/packages/vue-loader/lib??vue-loader-options!./node_modules/@dcloudio/webpack-uni-mp-loader/lib/style.js!E:/云相册/星际云通小程序/weixin_xjyt/components/cmd-circle/cmd-circle.vue?vue&type=style&index=0&lang=css& ***!
  \************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

// extracted by mini-css-extract-plugin
    if(false) { var cssReload; }
  

/***/ })

}]);
//# sourceMappingURL=../../../.sourcemap/mp-weixin/components/cmd-circle/cmd-circle.js.map
;(global["webpackJsonp"] = global["webpackJsonp"] || []).push([
    'components/cmd-circle/cmd-circle-create-component',
    {
        'components/cmd-circle/cmd-circle-create-component':(function(module, exports, __webpack_require__){
            __webpack_require__('1')['createComponent'](__webpack_require__(288))
        })
    },
    [['components/cmd-circle/cmd-circle-create-component']]
]);
