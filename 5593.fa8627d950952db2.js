"use strict";
(self["webpackChunkapp"] = self["webpackChunkapp"] || []).push([[5593],{

/***/ 25593:
/*!*********************************************************************!*\
  !*** ./node_modules/@ionic/core/dist/esm/ion-action-sheet.entry.js ***!
  \*********************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "ion_action_sheet": () => (/* binding */ ActionSheet)
/* harmony export */ });
/* harmony import */ var _opt_atlassian_pipelines_agent_build_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/esm/asyncToGenerator.js */ 71670);
/* harmony import */ var _index_8e692445_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./index-8e692445.js */ 91559);
/* harmony import */ var _ionic_global_c74e4951_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./ionic-global-c74e4951.js */ 95823);
/* harmony import */ var _button_active_a4d897e8_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./button-active-a4d897e8.js */ 65539);
/* harmony import */ var _overlays_58fa8e4d_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./overlays-58fa8e4d.js */ 6605);
/* harmony import */ var _theme_7670341c_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./theme-7670341c.js */ 50320);
/* harmony import */ var _animation_4ff3f603_js__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./animation-4ff3f603.js */ 15933);
/* harmony import */ var _haptic_029a46f6_js__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./haptic-029a46f6.js */ 12815);
/* harmony import */ var _index_422b6e83_js__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./index-422b6e83.js */ 88759);
/* harmony import */ var _gesture_controller_17060b7c_js__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./gesture-controller-17060b7c.js */ 56379);
/* harmony import */ var _hardware_back_button_490df115_js__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./hardware-back-button-490df115.js */ 70159);
/* harmony import */ var _helpers_3b390e48_js__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ./helpers-3b390e48.js */ 29259);
/* harmony import */ var _index_33ffec25_js__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ./index-33ffec25.js */ 42286);

/*!
 * (C) Ionic http://ionicframework.com - MIT License
 */













/**
 * iOS Action Sheet Enter Animation
 */
const iosEnterAnimation = baseEl => {
  const baseAnimation = (0,_animation_4ff3f603_js__WEBPACK_IMPORTED_MODULE_6__.c)();
  const backdropAnimation = (0,_animation_4ff3f603_js__WEBPACK_IMPORTED_MODULE_6__.c)();
  const wrapperAnimation = (0,_animation_4ff3f603_js__WEBPACK_IMPORTED_MODULE_6__.c)();
  backdropAnimation.addElement(baseEl.querySelector('ion-backdrop')).fromTo('opacity', 0.01, 'var(--backdrop-opacity)').beforeStyles({
    'pointer-events': 'none'
  }).afterClearStyles(['pointer-events']);
  wrapperAnimation.addElement(baseEl.querySelector('.action-sheet-wrapper')).fromTo('transform', 'translateY(100%)', 'translateY(0%)');
  return baseAnimation.addElement(baseEl).easing('cubic-bezier(.36,.66,.04,1)').duration(400).addAnimation([backdropAnimation, wrapperAnimation]);
};

/**
 * iOS Action Sheet Leave Animation
 */
const iosLeaveAnimation = baseEl => {
  const baseAnimation = (0,_animation_4ff3f603_js__WEBPACK_IMPORTED_MODULE_6__.c)();
  const backdropAnimation = (0,_animation_4ff3f603_js__WEBPACK_IMPORTED_MODULE_6__.c)();
  const wrapperAnimation = (0,_animation_4ff3f603_js__WEBPACK_IMPORTED_MODULE_6__.c)();
  backdropAnimation.addElement(baseEl.querySelector('ion-backdrop')).fromTo('opacity', 'var(--backdrop-opacity)', 0);
  wrapperAnimation.addElement(baseEl.querySelector('.action-sheet-wrapper')).fromTo('transform', 'translateY(0%)', 'translateY(100%)');
  return baseAnimation.addElement(baseEl).easing('cubic-bezier(.36,.66,.04,1)').duration(450).addAnimation([backdropAnimation, wrapperAnimation]);
};

/**
 * MD Action Sheet Enter Animation
 */
const mdEnterAnimation = baseEl => {
  const baseAnimation = (0,_animation_4ff3f603_js__WEBPACK_IMPORTED_MODULE_6__.c)();
  const backdropAnimation = (0,_animation_4ff3f603_js__WEBPACK_IMPORTED_MODULE_6__.c)();
  const wrapperAnimation = (0,_animation_4ff3f603_js__WEBPACK_IMPORTED_MODULE_6__.c)();
  backdropAnimation.addElement(baseEl.querySelector('ion-backdrop')).fromTo('opacity', 0.01, 'var(--backdrop-opacity)').beforeStyles({
    'pointer-events': 'none'
  }).afterClearStyles(['pointer-events']);
  wrapperAnimation.addElement(baseEl.querySelector('.action-sheet-wrapper')).fromTo('transform', 'translateY(100%)', 'translateY(0%)');
  return baseAnimation.addElement(baseEl).easing('cubic-bezier(.36,.66,.04,1)').duration(400).addAnimation([backdropAnimation, wrapperAnimation]);
};

/**
 * MD Action Sheet Leave Animation
 */
const mdLeaveAnimation = baseEl => {
  const baseAnimation = (0,_animation_4ff3f603_js__WEBPACK_IMPORTED_MODULE_6__.c)();
  const backdropAnimation = (0,_animation_4ff3f603_js__WEBPACK_IMPORTED_MODULE_6__.c)();
  const wrapperAnimation = (0,_animation_4ff3f603_js__WEBPACK_IMPORTED_MODULE_6__.c)();
  backdropAnimation.addElement(baseEl.querySelector('ion-backdrop')).fromTo('opacity', 'var(--backdrop-opacity)', 0);
  wrapperAnimation.addElement(baseEl.querySelector('.action-sheet-wrapper')).fromTo('transform', 'translateY(0%)', 'translateY(100%)');
  return baseAnimation.addElement(baseEl).easing('cubic-bezier(.36,.66,.04,1)').duration(450).addAnimation([backdropAnimation, wrapperAnimation]);
};
const actionSheetIosCss = ".sc-ion-action-sheet-ios-h{--color:initial;--button-color-activated:var(--button-color);--button-color-focused:var(--button-color);--button-color-hover:var(--button-color);--button-color-selected:var(--button-color);--min-width:auto;--width:100%;--max-width:500px;--min-height:auto;--height:100%;--max-height:calc(100% - (var(--ion-safe-area-top) + var(--ion-safe-area-bottom)));-moz-osx-font-smoothing:grayscale;-webkit-font-smoothing:antialiased;left:0;right:0;top:0;bottom:0;display:block;position:fixed;outline:none;font-family:var(--ion-font-family, inherit);-ms-touch-action:none;touch-action:none;-webkit-user-select:none;-moz-user-select:none;-ms-user-select:none;user-select:none;z-index:1001}.overlay-hidden.sc-ion-action-sheet-ios-h{display:none}.action-sheet-wrapper.sc-ion-action-sheet-ios{left:0;right:0;bottom:0;-webkit-transform:translate3d(0,  100%,  0);transform:translate3d(0,  100%,  0);display:block;position:absolute;width:var(--width);min-width:var(--min-width);max-width:var(--max-width);height:var(--height);min-height:var(--min-height);max-height:var(--max-height);z-index:10;pointer-events:none}.action-sheet-button.sc-ion-action-sheet-ios{display:block;position:relative;width:100%;border:0;outline:none;background:var(--button-background);color:var(--button-color);font-family:inherit;overflow:hidden}.action-sheet-button-inner.sc-ion-action-sheet-ios{display:-ms-flexbox;display:flex;position:relative;-ms-flex-flow:row nowrap;flex-flow:row nowrap;-ms-flex-negative:0;flex-shrink:0;-ms-flex-align:center;align-items:center;-ms-flex-pack:center;justify-content:center;pointer-events:none;width:100%;height:100%;z-index:1}.action-sheet-container.sc-ion-action-sheet-ios{display:-ms-flexbox;display:flex;-ms-flex-flow:column;flex-flow:column;-ms-flex-pack:end;justify-content:flex-end;height:100%;max-height:100%}.action-sheet-group.sc-ion-action-sheet-ios{-ms-flex-negative:2;flex-shrink:2;overscroll-behavior-y:contain;overflow-y:auto;-webkit-overflow-scrolling:touch;pointer-events:all;background:var(--background)}.action-sheet-group.sc-ion-action-sheet-ios::-webkit-scrollbar{display:none}.action-sheet-group-cancel.sc-ion-action-sheet-ios{-ms-flex-negative:0;flex-shrink:0;overflow:hidden}.action-sheet-button.sc-ion-action-sheet-ios::after{left:0;right:0;top:0;bottom:0;position:absolute;content:\"\";opacity:0}.action-sheet-selected.sc-ion-action-sheet-ios{color:var(--button-color-selected)}.action-sheet-selected.sc-ion-action-sheet-ios::after{background:var(--button-background-selected);opacity:var(--button-background-selected-opacity)}.action-sheet-button.ion-activated.sc-ion-action-sheet-ios{color:var(--button-color-activated)}.action-sheet-button.ion-activated.sc-ion-action-sheet-ios::after{background:var(--button-background-activated);opacity:var(--button-background-activated-opacity)}.action-sheet-button.ion-focused.sc-ion-action-sheet-ios{color:var(--button-color-focused)}.action-sheet-button.ion-focused.sc-ion-action-sheet-ios::after{background:var(--button-background-focused);opacity:var(--button-background-focused-opacity)}@media (any-hover: hover){.action-sheet-button.sc-ion-action-sheet-ios:hover{color:var(--button-color-hover)}.action-sheet-button.sc-ion-action-sheet-ios:hover::after{background:var(--button-background-hover);opacity:var(--button-background-hover-opacity)}}.sc-ion-action-sheet-ios-h{--background:var(--ion-overlay-background-color, var(--ion-color-step-100, #f9f9f9));--backdrop-opacity:var(--ion-backdrop-opacity, 0.4);--button-background:linear-gradient(0deg, rgba(var(--ion-text-color-rgb, 0, 0, 0), 0.08), rgba(var(--ion-text-color-rgb, 0, 0, 0), 0.08) 50%, transparent 50%) bottom/100% 1px no-repeat transparent;--button-background-activated:var(--ion-text-color, #000);--button-background-activated-opacity:.08;--button-background-hover:currentColor;--button-background-hover-opacity:.04;--button-background-focused:currentColor;--button-background-focused-opacity:.12;--button-background-selected:var(--ion-color-step-150, var(--ion-background-color, #fff));--button-background-selected-opacity:1;--button-color:var(--ion-color-primary, #3880ff);--color:var(--ion-color-step-400, #999999);text-align:center}.action-sheet-wrapper.sc-ion-action-sheet-ios{margin-left:auto;margin-right:auto;margin-top:var(--ion-safe-area-top, 0);margin-bottom:var(--ion-safe-area-bottom, 0)}@supports ((-webkit-margin-start: 0) or (margin-inline-start: 0)) or (-webkit-margin-start: 0){.action-sheet-wrapper.sc-ion-action-sheet-ios{margin-left:unset;margin-right:unset;-webkit-margin-start:auto;margin-inline-start:auto;-webkit-margin-end:auto;margin-inline-end:auto}}.action-sheet-container.sc-ion-action-sheet-ios{padding-left:8px;padding-right:8px;padding-top:0;padding-bottom:0}@supports ((-webkit-margin-start: 0) or (margin-inline-start: 0)) or (-webkit-margin-start: 0){.action-sheet-container.sc-ion-action-sheet-ios{padding-left:unset;padding-right:unset;-webkit-padding-start:8px;padding-inline-start:8px;-webkit-padding-end:8px;padding-inline-end:8px}}.action-sheet-group.sc-ion-action-sheet-ios{border-radius:13px;margin-bottom:8px}.action-sheet-group.sc-ion-action-sheet-ios:first-child{margin-top:10px}.action-sheet-group.sc-ion-action-sheet-ios:last-child{margin-bottom:10px}@supports ((-webkit-backdrop-filter: blur(0)) or (backdrop-filter: blur(0))){.action-sheet-translucent.sc-ion-action-sheet-ios-h .action-sheet-group.sc-ion-action-sheet-ios{background-color:transparent;-webkit-backdrop-filter:saturate(280%) blur(20px);backdrop-filter:saturate(280%) blur(20px)}.action-sheet-translucent.sc-ion-action-sheet-ios-h .action-sheet-title.sc-ion-action-sheet-ios,.action-sheet-translucent.sc-ion-action-sheet-ios-h .action-sheet-button.sc-ion-action-sheet-ios{background-color:transparent;background-image:-webkit-gradient(linear, left bottom, left top, from(rgba(var(--ion-background-color-rgb, 255, 255, 255), 0.8)), to(rgba(var(--ion-background-color-rgb, 255, 255, 255), 0.8))), -webkit-gradient(linear, left bottom, left top, from(rgba(var(--ion-background-color-rgb, 255, 255, 255), 0.4)), color-stop(50%, rgba(var(--ion-background-color-rgb, 255, 255, 255), 0.4)), color-stop(50%, rgba(var(--ion-background-color-rgb, 255, 255, 255), 0.8)));background-image:linear-gradient(0deg, rgba(var(--ion-background-color-rgb, 255, 255, 255), 0.8), rgba(var(--ion-background-color-rgb, 255, 255, 255), 0.8) 100%), linear-gradient(0deg, rgba(var(--ion-background-color-rgb, 255, 255, 255), 0.4), rgba(var(--ion-background-color-rgb, 255, 255, 255), 0.4) 50%, rgba(var(--ion-background-color-rgb, 255, 255, 255), 0.8) 50%);background-repeat:no-repeat;background-position:top, bottom;background-size:100% calc(100% - 1px), 100% 1px;-webkit-backdrop-filter:saturate(120%);backdrop-filter:saturate(120%)}.action-sheet-translucent.sc-ion-action-sheet-ios-h .action-sheet-button.ion-activated.sc-ion-action-sheet-ios{background-color:rgba(var(--ion-background-color-rgb, 255, 255, 255), 0.7);background-image:none}.action-sheet-translucent.sc-ion-action-sheet-ios-h .action-sheet-cancel.sc-ion-action-sheet-ios{background:var(--button-background-selected)}}.action-sheet-title.sc-ion-action-sheet-ios{background:-webkit-gradient(linear, left bottom, left top, from(rgba(var(--ion-text-color-rgb, 0, 0, 0), 0.08)), color-stop(50%, rgba(var(--ion-text-color-rgb, 0, 0, 0), 0.08)), color-stop(50%, transparent)) bottom/100% 1px no-repeat transparent;background:linear-gradient(0deg, rgba(var(--ion-text-color-rgb, 0, 0, 0), 0.08), rgba(var(--ion-text-color-rgb, 0, 0, 0), 0.08) 50%, transparent 50%) bottom/100% 1px no-repeat transparent}.action-sheet-title.sc-ion-action-sheet-ios{padding-left:10px;padding-right:10px;padding-top:14px;padding-bottom:13px;color:var(--color, var(--ion-color-step-400, #999999));font-size:13px;font-weight:400;text-align:center}@supports ((-webkit-margin-start: 0) or (margin-inline-start: 0)) or (-webkit-margin-start: 0){.action-sheet-title.sc-ion-action-sheet-ios{padding-left:unset;padding-right:unset;-webkit-padding-start:10px;padding-inline-start:10px;-webkit-padding-end:10px;padding-inline-end:10px}}.action-sheet-title.action-sheet-has-sub-title.sc-ion-action-sheet-ios{font-weight:600}.action-sheet-sub-title.sc-ion-action-sheet-ios{padding-left:0;padding-right:0;padding-top:6px;padding-bottom:0;font-size:13px;font-weight:400}.action-sheet-button.sc-ion-action-sheet-ios{padding-left:18px;padding-right:18px;padding-top:18px;padding-bottom:18px;height:56px;font-size:20px;contain:strict}@supports ((-webkit-margin-start: 0) or (margin-inline-start: 0)) or (-webkit-margin-start: 0){.action-sheet-button.sc-ion-action-sheet-ios{padding-left:unset;padding-right:unset;-webkit-padding-start:18px;padding-inline-start:18px;-webkit-padding-end:18px;padding-inline-end:18px}}.action-sheet-button.sc-ion-action-sheet-ios .action-sheet-icon.sc-ion-action-sheet-ios{margin-right:0.3em;font-size:28px;pointer-events:none}@supports ((-webkit-margin-start: 0) or (margin-inline-start: 0)) or (-webkit-margin-start: 0){.action-sheet-button.sc-ion-action-sheet-ios .action-sheet-icon.sc-ion-action-sheet-ios{margin-right:unset;-webkit-margin-end:0.3em;margin-inline-end:0.3em}}.action-sheet-button.sc-ion-action-sheet-ios:last-child{background-image:none}.action-sheet-selected.sc-ion-action-sheet-ios{font-weight:bold}.action-sheet-cancel.sc-ion-action-sheet-ios{font-weight:600}.action-sheet-cancel.sc-ion-action-sheet-ios::after{background:var(--button-background-selected);opacity:var(--button-background-selected-opacity)}.action-sheet-destructive.sc-ion-action-sheet-ios,.action-sheet-destructive.ion-activated.sc-ion-action-sheet-ios,.action-sheet-destructive.ion-focused.sc-ion-action-sheet-ios{color:var(--ion-color-danger, #eb445a)}@media (any-hover: hover){.action-sheet-destructive.sc-ion-action-sheet-ios:hover{color:var(--ion-color-danger, #eb445a)}}";
const actionSheetMdCss = ".sc-ion-action-sheet-md-h{--color:initial;--button-color-activated:var(--button-color);--button-color-focused:var(--button-color);--button-color-hover:var(--button-color);--button-color-selected:var(--button-color);--min-width:auto;--width:100%;--max-width:500px;--min-height:auto;--height:100%;--max-height:calc(100% - (var(--ion-safe-area-top) + var(--ion-safe-area-bottom)));-moz-osx-font-smoothing:grayscale;-webkit-font-smoothing:antialiased;left:0;right:0;top:0;bottom:0;display:block;position:fixed;outline:none;font-family:var(--ion-font-family, inherit);-ms-touch-action:none;touch-action:none;-webkit-user-select:none;-moz-user-select:none;-ms-user-select:none;user-select:none;z-index:1001}.overlay-hidden.sc-ion-action-sheet-md-h{display:none}.action-sheet-wrapper.sc-ion-action-sheet-md{left:0;right:0;bottom:0;-webkit-transform:translate3d(0,  100%,  0);transform:translate3d(0,  100%,  0);display:block;position:absolute;width:var(--width);min-width:var(--min-width);max-width:var(--max-width);height:var(--height);min-height:var(--min-height);max-height:var(--max-height);z-index:10;pointer-events:none}.action-sheet-button.sc-ion-action-sheet-md{display:block;position:relative;width:100%;border:0;outline:none;background:var(--button-background);color:var(--button-color);font-family:inherit;overflow:hidden}.action-sheet-button-inner.sc-ion-action-sheet-md{display:-ms-flexbox;display:flex;position:relative;-ms-flex-flow:row nowrap;flex-flow:row nowrap;-ms-flex-negative:0;flex-shrink:0;-ms-flex-align:center;align-items:center;-ms-flex-pack:center;justify-content:center;pointer-events:none;width:100%;height:100%;z-index:1}.action-sheet-container.sc-ion-action-sheet-md{display:-ms-flexbox;display:flex;-ms-flex-flow:column;flex-flow:column;-ms-flex-pack:end;justify-content:flex-end;height:100%;max-height:100%}.action-sheet-group.sc-ion-action-sheet-md{-ms-flex-negative:2;flex-shrink:2;overscroll-behavior-y:contain;overflow-y:auto;-webkit-overflow-scrolling:touch;pointer-events:all;background:var(--background)}.action-sheet-group.sc-ion-action-sheet-md::-webkit-scrollbar{display:none}.action-sheet-group-cancel.sc-ion-action-sheet-md{-ms-flex-negative:0;flex-shrink:0;overflow:hidden}.action-sheet-button.sc-ion-action-sheet-md::after{left:0;right:0;top:0;bottom:0;position:absolute;content:\"\";opacity:0}.action-sheet-selected.sc-ion-action-sheet-md{color:var(--button-color-selected)}.action-sheet-selected.sc-ion-action-sheet-md::after{background:var(--button-background-selected);opacity:var(--button-background-selected-opacity)}.action-sheet-button.ion-activated.sc-ion-action-sheet-md{color:var(--button-color-activated)}.action-sheet-button.ion-activated.sc-ion-action-sheet-md::after{background:var(--button-background-activated);opacity:var(--button-background-activated-opacity)}.action-sheet-button.ion-focused.sc-ion-action-sheet-md{color:var(--button-color-focused)}.action-sheet-button.ion-focused.sc-ion-action-sheet-md::after{background:var(--button-background-focused);opacity:var(--button-background-focused-opacity)}@media (any-hover: hover){.action-sheet-button.sc-ion-action-sheet-md:hover{color:var(--button-color-hover)}.action-sheet-button.sc-ion-action-sheet-md:hover::after{background:var(--button-background-hover);opacity:var(--button-background-hover-opacity)}}.sc-ion-action-sheet-md-h{--background:var(--ion-overlay-background-color, var(--ion-background-color, #fff));--backdrop-opacity:var(--ion-backdrop-opacity, 0.32);--button-background:transparent;--button-background-selected:currentColor;--button-background-selected-opacity:0;--button-background-activated:transparent;--button-background-activated-opacity:0;--button-background-hover:currentColor;--button-background-hover-opacity:.04;--button-background-focused:currentColor;--button-background-focused-opacity:.12;--button-color:var(--ion-color-step-850, #262626);--color:rgba(var(--ion-text-color-rgb, 0, 0, 0), 0.54)}.action-sheet-wrapper.sc-ion-action-sheet-md{margin-left:auto;margin-right:auto;margin-top:var(--ion-safe-area-top, 0);margin-bottom:0}@supports ((-webkit-margin-start: 0) or (margin-inline-start: 0)) or (-webkit-margin-start: 0){.action-sheet-wrapper.sc-ion-action-sheet-md{margin-left:unset;margin-right:unset;-webkit-margin-start:auto;margin-inline-start:auto;-webkit-margin-end:auto;margin-inline-end:auto}}.action-sheet-title.sc-ion-action-sheet-md{padding-left:16px;padding-right:16px;padding-top:20px;padding-bottom:17px;min-height:60px;color:var(--color, rgba(var(--ion-text-color-rgb, 0, 0, 0), 0.54));font-size:16px;text-align:start}@supports ((-webkit-margin-start: 0) or (margin-inline-start: 0)) or (-webkit-margin-start: 0){.action-sheet-title.sc-ion-action-sheet-md{padding-left:unset;padding-right:unset;-webkit-padding-start:16px;padding-inline-start:16px;-webkit-padding-end:16px;padding-inline-end:16px}}.action-sheet-sub-title.sc-ion-action-sheet-md{padding-left:0;padding-right:0;padding-top:16px;padding-bottom:0;font-size:14px}.action-sheet-group.sc-ion-action-sheet-md:first-child{padding-top:0}.action-sheet-group.sc-ion-action-sheet-md:last-child{padding-bottom:var(--ion-safe-area-bottom)}.action-sheet-button.sc-ion-action-sheet-md{padding-left:16px;padding-right:16px;padding-top:0;padding-bottom:0;position:relative;height:52px;font-size:16px;text-align:start;contain:strict;overflow:hidden}@supports ((-webkit-margin-start: 0) or (margin-inline-start: 0)) or (-webkit-margin-start: 0){.action-sheet-button.sc-ion-action-sheet-md{padding-left:unset;padding-right:unset;-webkit-padding-start:16px;padding-inline-start:16px;-webkit-padding-end:16px;padding-inline-end:16px}}.action-sheet-icon.sc-ion-action-sheet-md{margin-left:0;margin-right:32px;margin-top:0;margin-bottom:0;color:var(--color);font-size:24px}@supports ((-webkit-margin-start: 0) or (margin-inline-start: 0)) or (-webkit-margin-start: 0){.action-sheet-icon.sc-ion-action-sheet-md{margin-left:unset;margin-right:unset;-webkit-margin-start:0;margin-inline-start:0;-webkit-margin-end:32px;margin-inline-end:32px}}.action-sheet-button-inner.sc-ion-action-sheet-md{-ms-flex-pack:start;justify-content:flex-start}.action-sheet-selected.sc-ion-action-sheet-md{font-weight:bold}";
const ActionSheet = class {
  constructor(hostRef) {
    (0,_index_8e692445_js__WEBPACK_IMPORTED_MODULE_1__.r)(this, hostRef);
    this.didPresent = (0,_index_8e692445_js__WEBPACK_IMPORTED_MODULE_1__.e)(this, "ionActionSheetDidPresent", 7);
    this.willPresent = (0,_index_8e692445_js__WEBPACK_IMPORTED_MODULE_1__.e)(this, "ionActionSheetWillPresent", 7);
    this.willDismiss = (0,_index_8e692445_js__WEBPACK_IMPORTED_MODULE_1__.e)(this, "ionActionSheetWillDismiss", 7);
    this.didDismiss = (0,_index_8e692445_js__WEBPACK_IMPORTED_MODULE_1__.e)(this, "ionActionSheetDidDismiss", 7);
    this.presented = false;
    /**
     * If `true`, the keyboard will be automatically dismissed when the overlay is presented.
     */
    this.keyboardClose = true;
    /**
     * An array of buttons for the action sheet.
     */
    this.buttons = [];
    /**
     * If `true`, the action sheet will be dismissed when the backdrop is clicked.
     */
    this.backdropDismiss = true;
    /**
     * If `true`, the action sheet will be translucent.
     * Only applies when the mode is `"ios"` and the device supports
     * [`backdrop-filter`](https://developer.mozilla.org/en-US/docs/Web/CSS/backdrop-filter#Browser_compatibility).
     */
    this.translucent = false;
    /**
     * If `true`, the action sheet will animate.
     */
    this.animated = true;
    this.onBackdropTap = () => {
      this.dismiss(undefined, _overlays_58fa8e4d_js__WEBPACK_IMPORTED_MODULE_4__.B);
    };
    this.dispatchCancelHandler = ev => {
      const role = ev.detail.role;
      if ((0,_overlays_58fa8e4d_js__WEBPACK_IMPORTED_MODULE_4__.i)(role)) {
        const cancelButton = this.getButtons().find(b => b.role === 'cancel');
        this.callButtonHandler(cancelButton);
      }
    };
  }
  /**
   * Present the action sheet overlay after it has been created.
   */
  present() {
    return (0,_overlays_58fa8e4d_js__WEBPACK_IMPORTED_MODULE_4__.d)(this, 'actionSheetEnter', iosEnterAnimation, mdEnterAnimation);
  }
  connectedCallback() {
    (0,_overlays_58fa8e4d_js__WEBPACK_IMPORTED_MODULE_4__.e)(this.el);
  }
  /**
   * Dismiss the action sheet overlay after it has been presented.
   *
   * @param data Any data to emit in the dismiss events.
   * @param role The role of the element that is dismissing the action sheet.
   * This can be useful in a button handler for determining which button was
   * clicked to dismiss the action sheet.
   * Some examples include: ``"cancel"`, `"destructive"`, "selected"`, and `"backdrop"`.
   */
  dismiss(data, role) {
    return (0,_overlays_58fa8e4d_js__WEBPACK_IMPORTED_MODULE_4__.f)(this, data, role, 'actionSheetLeave', iosLeaveAnimation, mdLeaveAnimation);
  }
  /**
   * Returns a promise that resolves when the action sheet did dismiss.
   */
  onDidDismiss() {
    return (0,_overlays_58fa8e4d_js__WEBPACK_IMPORTED_MODULE_4__.g)(this.el, 'ionActionSheetDidDismiss');
  }
  /**
   * Returns a promise that resolves when the action sheet will dismiss.
   *
   */
  onWillDismiss() {
    return (0,_overlays_58fa8e4d_js__WEBPACK_IMPORTED_MODULE_4__.g)(this.el, 'ionActionSheetWillDismiss');
  }
  buttonClick(button) {
    var _this = this;
    return (0,_opt_atlassian_pipelines_agent_build_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_0__["default"])(function* () {
      const role = button.role;
      if ((0,_overlays_58fa8e4d_js__WEBPACK_IMPORTED_MODULE_4__.i)(role)) {
        return _this.dismiss(button.data, role);
      }
      const shouldDismiss = yield _this.callButtonHandler(button);
      if (shouldDismiss) {
        return _this.dismiss(button.data, button.role);
      }
      return Promise.resolve();
    })();
  }
  callButtonHandler(button) {
    return (0,_opt_atlassian_pipelines_agent_build_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_0__["default"])(function* () {
      if (button) {
        // a handler has been provided, execute it
        // pass the handler the values from the inputs
        const rtn = yield (0,_overlays_58fa8e4d_js__WEBPACK_IMPORTED_MODULE_4__.s)(button.handler);
        if (rtn === false) {
          // if the return value of the handler is false then do not dismiss
          return false;
        }
      }
      return true;
    })();
  }
  getButtons() {
    return this.buttons.map(b => {
      return typeof b === 'string' ? {
        text: b
      } : b;
    });
  }
  disconnectedCallback() {
    if (this.gesture) {
      this.gesture.destroy();
      this.gesture = undefined;
    }
  }
  componentDidLoad() {
    /**
     * Do not create gesture if:
     * 1. A gesture already exists
     * 2. App is running in MD mode
     * 3. A wrapper ref does not exist
     */
    const {
      groupEl,
      wrapperEl
    } = this;
    if (this.gesture || (0,_ionic_global_c74e4951_js__WEBPACK_IMPORTED_MODULE_2__.b)(this) === 'md' || !wrapperEl || !groupEl) {
      return;
    }
    (0,_index_8e692445_js__WEBPACK_IMPORTED_MODULE_1__.f)(() => {
      const isScrollable = groupEl.scrollHeight > groupEl.clientHeight;
      if (!isScrollable) {
        this.gesture = (0,_button_active_a4d897e8_js__WEBPACK_IMPORTED_MODULE_3__.c)(wrapperEl, refEl => refEl.classList.contains('action-sheet-button'));
        this.gesture.enable(true);
      }
    });
  }
  render() {
    const {
      header,
      htmlAttributes,
      overlayIndex
    } = this;
    const mode = (0,_ionic_global_c74e4951_js__WEBPACK_IMPORTED_MODULE_2__.b)(this);
    const allButtons = this.getButtons();
    const cancelButton = allButtons.find(b => b.role === 'cancel');
    const buttons = allButtons.filter(b => b.role !== 'cancel');
    const headerID = `action-sheet-${overlayIndex}-header`;
    return (0,_index_8e692445_js__WEBPACK_IMPORTED_MODULE_1__.h)(_index_8e692445_js__WEBPACK_IMPORTED_MODULE_1__.H, Object.assign({
      role: "dialog",
      "aria-modal": "true",
      "aria-labelledby": header !== undefined ? headerID : null,
      tabindex: "-1"
    }, htmlAttributes, {
      style: {
        zIndex: `${20000 + this.overlayIndex}`
      },
      class: Object.assign(Object.assign({
        [mode]: true
      }, (0,_theme_7670341c_js__WEBPACK_IMPORTED_MODULE_5__.g)(this.cssClass)), {
        'overlay-hidden': true,
        'action-sheet-translucent': this.translucent
      }),
      onIonActionSheetWillDismiss: this.dispatchCancelHandler,
      onIonBackdropTap: this.onBackdropTap
    }), (0,_index_8e692445_js__WEBPACK_IMPORTED_MODULE_1__.h)("ion-backdrop", {
      tappable: this.backdropDismiss
    }), (0,_index_8e692445_js__WEBPACK_IMPORTED_MODULE_1__.h)("div", {
      tabindex: "0"
    }), (0,_index_8e692445_js__WEBPACK_IMPORTED_MODULE_1__.h)("div", {
      class: "action-sheet-wrapper ion-overlay-wrapper",
      ref: el => this.wrapperEl = el
    }, (0,_index_8e692445_js__WEBPACK_IMPORTED_MODULE_1__.h)("div", {
      class: "action-sheet-container"
    }, (0,_index_8e692445_js__WEBPACK_IMPORTED_MODULE_1__.h)("div", {
      class: "action-sheet-group",
      ref: el => this.groupEl = el
    }, header !== undefined && (0,_index_8e692445_js__WEBPACK_IMPORTED_MODULE_1__.h)("div", {
      id: headerID,
      class: {
        'action-sheet-title': true,
        'action-sheet-has-sub-title': this.subHeader !== undefined
      }
    }, header, this.subHeader && (0,_index_8e692445_js__WEBPACK_IMPORTED_MODULE_1__.h)("div", {
      class: "action-sheet-sub-title"
    }, this.subHeader)), buttons.map(b => (0,_index_8e692445_js__WEBPACK_IMPORTED_MODULE_1__.h)("button", {
      type: "button",
      id: b.id,
      class: buttonClass(b),
      onClick: () => this.buttonClick(b)
    }, (0,_index_8e692445_js__WEBPACK_IMPORTED_MODULE_1__.h)("span", {
      class: "action-sheet-button-inner"
    }, b.icon && (0,_index_8e692445_js__WEBPACK_IMPORTED_MODULE_1__.h)("ion-icon", {
      icon: b.icon,
      "aria-hidden": "true",
      lazy: false,
      class: "action-sheet-icon"
    }), b.text), mode === 'md' && (0,_index_8e692445_js__WEBPACK_IMPORTED_MODULE_1__.h)("ion-ripple-effect", null)))), cancelButton && (0,_index_8e692445_js__WEBPACK_IMPORTED_MODULE_1__.h)("div", {
      class: "action-sheet-group action-sheet-group-cancel"
    }, (0,_index_8e692445_js__WEBPACK_IMPORTED_MODULE_1__.h)("button", {
      type: "button",
      class: buttonClass(cancelButton),
      onClick: () => this.buttonClick(cancelButton)
    }, (0,_index_8e692445_js__WEBPACK_IMPORTED_MODULE_1__.h)("span", {
      class: "action-sheet-button-inner"
    }, cancelButton.icon && (0,_index_8e692445_js__WEBPACK_IMPORTED_MODULE_1__.h)("ion-icon", {
      icon: cancelButton.icon,
      "aria-hidden": "true",
      lazy: false,
      class: "action-sheet-icon"
    }), cancelButton.text), mode === 'md' && (0,_index_8e692445_js__WEBPACK_IMPORTED_MODULE_1__.h)("ion-ripple-effect", null))))), (0,_index_8e692445_js__WEBPACK_IMPORTED_MODULE_1__.h)("div", {
      tabindex: "0"
    }));
  }
  get el() {
    return (0,_index_8e692445_js__WEBPACK_IMPORTED_MODULE_1__.i)(this);
  }
};
const buttonClass = button => {
  return Object.assign({
    'action-sheet-button': true,
    'ion-activatable': true,
    'ion-focusable': true,
    [`action-sheet-${button.role}`]: button.role !== undefined
  }, (0,_theme_7670341c_js__WEBPACK_IMPORTED_MODULE_5__.g)(button.cssClass));
};
ActionSheet.style = {
  ios: actionSheetIosCss,
  md: actionSheetMdCss
};


/***/ }),

/***/ 50320:
/*!*************************************************************!*\
  !*** ./node_modules/@ionic/core/dist/esm/theme-7670341c.js ***!
  \*************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "c": () => (/* binding */ createColorClasses),
/* harmony export */   "g": () => (/* binding */ getClassMap),
/* harmony export */   "h": () => (/* binding */ hostContext),
/* harmony export */   "o": () => (/* binding */ openURL)
/* harmony export */ });
/* harmony import */ var _opt_atlassian_pipelines_agent_build_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/esm/asyncToGenerator.js */ 71670);

/*!
 * (C) Ionic http://ionicframework.com - MIT License
 */
const hostContext = (selector, el) => {
  return el.closest(selector) !== null;
};
/**
 * Create the mode and color classes for the component based on the classes passed in
 */
const createColorClasses = (color, cssClassMap) => {
  return typeof color === 'string' && color.length > 0 ? Object.assign({
    'ion-color': true,
    [`ion-color-${color}`]: true
  }, cssClassMap) : cssClassMap;
};
const getClassList = classes => {
  if (classes !== undefined) {
    const array = Array.isArray(classes) ? classes : classes.split(' ');
    return array.filter(c => c != null).map(c => c.trim()).filter(c => c !== '');
  }
  return [];
};
const getClassMap = classes => {
  const map = {};
  getClassList(classes).forEach(c => map[c] = true);
  return map;
};
const SCHEME = /^[a-z][a-z0-9+\-.]*:/;
const openURL = /*#__PURE__*/function () {
  var _ref = (0,_opt_atlassian_pipelines_agent_build_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_0__["default"])(function* (url, ev, direction, animation) {
    if (url != null && url[0] !== '#' && !SCHEME.test(url)) {
      const router = document.querySelector('ion-router');
      if (router) {
        if (ev != null) {
          ev.preventDefault();
        }
        return router.push(url, direction, animation);
      }
    }
    return false;
  });
  return function openURL(_x, _x2, _x3, _x4) {
    return _ref.apply(this, arguments);
  };
}();


/***/ })

}]);
//# sourceMappingURL=5593.fa8627d950952db2.js.map