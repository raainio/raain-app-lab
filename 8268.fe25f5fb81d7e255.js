"use strict";
(self["webpackChunkapp"] = self["webpackChunkapp"] || []).push([[8268],{

/***/ 99273:
/*!*************************************************************!*\
  !*** ./node_modules/@ionic/core/dist/esm/index-c4b11676.js ***!
  \*************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "a": () => (/* binding */ printRequiredElementError),
/* harmony export */   "b": () => (/* binding */ printIonError),
/* harmony export */   "p": () => (/* binding */ printIonWarning)
/* harmony export */ });
/*!
 * (C) Ionic http://ionicframework.com - MIT License
 */
/**
 * Logs a warning to the console with an Ionic prefix
 * to indicate the library that is warning the developer.
 *
 * @param message - The string message to be logged to the console.
 */
const printIonWarning = (message, ...params) => {
  return console.warn(`[Ionic Warning]: ${message}`, ...params);
};
/*
 * Logs an error to the console with an Ionic prefix
 * to indicate the library that is warning the developer.
 *
 * @param message - The string message to be logged to the console.
 * @param params - Additional arguments to supply to the console.error.
 */
const printIonError = (message, ...params) => {
  return console.error(`[Ionic Error]: ${message}`, ...params);
};
/**
 * Prints an error informing developers that an implementation requires an element to be used
 * within a specific selector.
 *
 * @param el The web component element this is requiring the element.
 * @param targetSelectors The selector or selectors that were not found.
 */
const printRequiredElementError = (el, ...targetSelectors) => {
  return console.error(`<${el.tagName.toLowerCase()}> must be used inside ${targetSelectors.join(' or ')}.`);
};


/***/ }),

/***/ 38268:
/*!**************************************************************!*\
  !*** ./node_modules/@ionic/core/dist/esm/ion-toast.entry.js ***!
  \**************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "ion_toast": () => (/* binding */ Toast)
/* harmony export */ });
/* harmony import */ var _opt_atlassian_pipelines_agent_build_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/esm/asyncToGenerator.js */ 71670);
/* harmony import */ var _index_8e692445_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./index-8e692445.js */ 91559);
/* harmony import */ var _ionic_global_c74e4951_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./ionic-global-c74e4951.js */ 95823);
/* harmony import */ var _config_d4f612d2_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./config-d4f612d2.js */ 75656);
/* harmony import */ var _index_c4b11676_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./index-c4b11676.js */ 99273);
/* harmony import */ var _overlays_58fa8e4d_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./overlays-58fa8e4d.js */ 6605);
/* harmony import */ var _theme_7670341c_js__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./theme-7670341c.js */ 50320);
/* harmony import */ var _animation_4ff3f603_js__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./animation-4ff3f603.js */ 15933);
/* harmony import */ var _helpers_3b390e48_js__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./helpers-3b390e48.js */ 29259);
/* harmony import */ var _hardware_back_button_490df115_js__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./hardware-back-button-490df115.js */ 70159);
/* harmony import */ var _index_33ffec25_js__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./index-33ffec25.js */ 42286);

/*!
 * (C) Ionic http://ionicframework.com - MIT License
 */











/**
 * iOS Toast Enter Animation
 */
const iosEnterAnimation = (baseEl, position) => {
  const baseAnimation = (0,_animation_4ff3f603_js__WEBPACK_IMPORTED_MODULE_7__.c)();
  const wrapperAnimation = (0,_animation_4ff3f603_js__WEBPACK_IMPORTED_MODULE_7__.c)();
  const root = (0,_helpers_3b390e48_js__WEBPACK_IMPORTED_MODULE_8__.g)(baseEl);
  const wrapperEl = root.querySelector('.toast-wrapper');
  const bottom = `calc(-10px - var(--ion-safe-area-bottom, 0px))`;
  const top = `calc(10px + var(--ion-safe-area-top, 0px))`;
  wrapperAnimation.addElement(wrapperEl);
  switch (position) {
    case 'top':
      wrapperAnimation.fromTo('transform', 'translateY(-100%)', `translateY(${top})`);
      break;
    case 'middle':
      const topPosition = Math.floor(baseEl.clientHeight / 2 - wrapperEl.clientHeight / 2);
      wrapperEl.style.top = `${topPosition}px`;
      wrapperAnimation.fromTo('opacity', 0.01, 1);
      break;
    default:
      wrapperAnimation.fromTo('transform', 'translateY(100%)', `translateY(${bottom})`);
      break;
  }
  return baseAnimation.easing('cubic-bezier(.155,1.105,.295,1.12)').duration(400).addAnimation(wrapperAnimation);
};

/**
 * iOS Toast Leave Animation
 */
const iosLeaveAnimation = (baseEl, position) => {
  const baseAnimation = (0,_animation_4ff3f603_js__WEBPACK_IMPORTED_MODULE_7__.c)();
  const wrapperAnimation = (0,_animation_4ff3f603_js__WEBPACK_IMPORTED_MODULE_7__.c)();
  const root = (0,_helpers_3b390e48_js__WEBPACK_IMPORTED_MODULE_8__.g)(baseEl);
  const wrapperEl = root.querySelector('.toast-wrapper');
  const bottom = `calc(-10px - var(--ion-safe-area-bottom, 0px))`;
  const top = `calc(10px + var(--ion-safe-area-top, 0px))`;
  wrapperAnimation.addElement(wrapperEl);
  switch (position) {
    case 'top':
      wrapperAnimation.fromTo('transform', `translateY(${top})`, 'translateY(-100%)');
      break;
    case 'middle':
      wrapperAnimation.fromTo('opacity', 0.99, 0);
      break;
    default:
      wrapperAnimation.fromTo('transform', `translateY(${bottom})`, 'translateY(100%)');
      break;
  }
  return baseAnimation.easing('cubic-bezier(.36,.66,.04,1)').duration(300).addAnimation(wrapperAnimation);
};

/**
 * MD Toast Enter Animation
 */
const mdEnterAnimation = (baseEl, position) => {
  const baseAnimation = (0,_animation_4ff3f603_js__WEBPACK_IMPORTED_MODULE_7__.c)();
  const wrapperAnimation = (0,_animation_4ff3f603_js__WEBPACK_IMPORTED_MODULE_7__.c)();
  const root = (0,_helpers_3b390e48_js__WEBPACK_IMPORTED_MODULE_8__.g)(baseEl);
  const wrapperEl = root.querySelector('.toast-wrapper');
  const bottom = `calc(8px + var(--ion-safe-area-bottom, 0px))`;
  const top = `calc(8px + var(--ion-safe-area-top, 0px))`;
  wrapperAnimation.addElement(wrapperEl);
  switch (position) {
    case 'top':
      wrapperEl.style.top = top;
      wrapperAnimation.fromTo('opacity', 0.01, 1);
      break;
    case 'middle':
      const topPosition = Math.floor(baseEl.clientHeight / 2 - wrapperEl.clientHeight / 2);
      wrapperEl.style.top = `${topPosition}px`;
      wrapperAnimation.fromTo('opacity', 0.01, 1);
      break;
    default:
      wrapperEl.style.bottom = bottom;
      wrapperAnimation.fromTo('opacity', 0.01, 1);
      break;
  }
  return baseAnimation.easing('cubic-bezier(.36,.66,.04,1)').duration(400).addAnimation(wrapperAnimation);
};

/**
 * md Toast Leave Animation
 */
const mdLeaveAnimation = baseEl => {
  const baseAnimation = (0,_animation_4ff3f603_js__WEBPACK_IMPORTED_MODULE_7__.c)();
  const wrapperAnimation = (0,_animation_4ff3f603_js__WEBPACK_IMPORTED_MODULE_7__.c)();
  const root = (0,_helpers_3b390e48_js__WEBPACK_IMPORTED_MODULE_8__.g)(baseEl);
  const wrapperEl = root.querySelector('.toast-wrapper');
  wrapperAnimation.addElement(wrapperEl).fromTo('opacity', 0.99, 0);
  return baseAnimation.easing('cubic-bezier(.36,.66,.04,1)').duration(300).addAnimation(wrapperAnimation);
};
const toastIosCss = ":host{--border-width:0;--border-style:none;--border-color:initial;--box-shadow:none;--min-width:auto;--width:auto;--min-height:auto;--height:auto;--max-height:auto;--white-space:normal;left:0;top:0;display:block;position:absolute;width:100%;height:100%;outline:none;color:var(--color);font-family:var(--ion-font-family, inherit);contain:strict;z-index:1001;pointer-events:none}:host-context([dir=rtl]){left:unset;right:unset;right:0}:host(.overlay-hidden){display:none}:host(.ion-color){--button-color:inherit;color:var(--ion-color-contrast)}:host(.ion-color) .toast-button-cancel{color:inherit}:host(.ion-color) .toast-wrapper{background:var(--ion-color-base)}.toast-wrapper{border-radius:var(--border-radius);left:var(--start);right:var(--end);width:var(--width);min-width:var(--min-width);max-width:var(--max-width);height:var(--height);min-height:var(--min-height);max-height:var(--max-height);border-width:var(--border-width);border-style:var(--border-style);border-color:var(--border-color);background:var(--background);-webkit-box-shadow:var(--box-shadow);box-shadow:var(--box-shadow)}[dir=rtl] .toast-wrapper,:host-context([dir=rtl]) .toast-wrapper{left:unset;right:unset;left:var(--end);right:var(--start)}.toast-container{display:-ms-flexbox;display:flex;-ms-flex-align:center;align-items:center;pointer-events:auto;height:inherit;min-height:inherit;max-height:inherit;contain:content}.toast-layout-stacked .toast-container{-ms-flex-wrap:wrap;flex-wrap:wrap}.toast-layout-baseline .toast-content{display:-ms-flexbox;display:flex;-ms-flex:1;flex:1;-ms-flex-direction:column;flex-direction:column;-ms-flex-pack:center;justify-content:center}.toast-icon{margin-left:16px}@supports ((-webkit-margin-start: 0) or (margin-inline-start: 0)) or (-webkit-margin-start: 0){.toast-icon{margin-left:unset;-webkit-margin-start:16px;margin-inline-start:16px}}.toast-message{-ms-flex:1;flex:1;white-space:var(--white-space)}.toast-button-group{display:-ms-flexbox;display:flex}.toast-layout-stacked .toast-button-group{-ms-flex-pack:end;justify-content:end;width:100%}.toast-button{border:0;outline:none;color:var(--button-color);z-index:0}.toast-icon,.toast-button-icon{font-size:1.4em}.toast-button-inner{display:-ms-flexbox;display:flex;-ms-flex-align:center;align-items:center}@media (any-hover: hover){.toast-button:hover{cursor:pointer}}:host{--background:var(--ion-color-step-50, #f2f2f2);--border-radius:14px;--button-color:var(--ion-color-primary, #3880ff);--color:var(--ion-color-step-850, #262626);--max-width:700px;--start:10px;--end:10px;font-size:14px}.toast-wrapper{margin-left:auto;margin-right:auto;margin-top:auto;margin-bottom:auto;display:block;position:absolute;z-index:10}@supports ((-webkit-margin-start: 0) or (margin-inline-start: 0)) or (-webkit-margin-start: 0){.toast-wrapper{margin-left:unset;margin-right:unset;-webkit-margin-start:auto;margin-inline-start:auto;-webkit-margin-end:auto;margin-inline-end:auto}}@supports ((-webkit-backdrop-filter: blur(0)) or (backdrop-filter: blur(0))){:host(.toast-translucent) .toast-wrapper{background:rgba(var(--ion-background-color-rgb, 255, 255, 255), 0.8);-webkit-backdrop-filter:saturate(180%) blur(20px);backdrop-filter:saturate(180%) blur(20px)}}.toast-wrapper.toast-top{-webkit-transform:translate3d(0,  -100%,  0);transform:translate3d(0,  -100%,  0);top:0}.toast-wrapper.toast-middle{opacity:0.01}.toast-wrapper.toast-bottom{-webkit-transform:translate3d(0,  100%,  0);transform:translate3d(0,  100%,  0);bottom:0}.toast-content{padding-left:15px;padding-right:15px;padding-top:15px;padding-bottom:15px}@supports ((-webkit-margin-start: 0) or (margin-inline-start: 0)) or (-webkit-margin-start: 0){.toast-content{padding-left:unset;padding-right:unset;-webkit-padding-start:15px;padding-inline-start:15px;-webkit-padding-end:15px;padding-inline-end:15px}}.toast-header{margin-bottom:2px;font-weight:500}.toast-button{padding-left:15px;padding-right:15px;padding-top:10px;padding-bottom:10px;height:44px;-webkit-transition:background-color, opacity 100ms linear;transition:background-color, opacity 100ms linear;border:0;background-color:transparent;font-family:var(--ion-font-family);font-size:17px;font-weight:500;overflow:hidden}@supports ((-webkit-margin-start: 0) or (margin-inline-start: 0)) or (-webkit-margin-start: 0){.toast-button{padding-left:unset;padding-right:unset;-webkit-padding-start:15px;padding-inline-start:15px;-webkit-padding-end:15px;padding-inline-end:15px}}.toast-button.ion-activated{opacity:0.4}@media (any-hover: hover){.toast-button:hover{opacity:0.6}}";
const toastMdCss = ":host{--border-width:0;--border-style:none;--border-color:initial;--box-shadow:none;--min-width:auto;--width:auto;--min-height:auto;--height:auto;--max-height:auto;--white-space:normal;left:0;top:0;display:block;position:absolute;width:100%;height:100%;outline:none;color:var(--color);font-family:var(--ion-font-family, inherit);contain:strict;z-index:1001;pointer-events:none}:host-context([dir=rtl]){left:unset;right:unset;right:0}:host(.overlay-hidden){display:none}:host(.ion-color){--button-color:inherit;color:var(--ion-color-contrast)}:host(.ion-color) .toast-button-cancel{color:inherit}:host(.ion-color) .toast-wrapper{background:var(--ion-color-base)}.toast-wrapper{border-radius:var(--border-radius);left:var(--start);right:var(--end);width:var(--width);min-width:var(--min-width);max-width:var(--max-width);height:var(--height);min-height:var(--min-height);max-height:var(--max-height);border-width:var(--border-width);border-style:var(--border-style);border-color:var(--border-color);background:var(--background);-webkit-box-shadow:var(--box-shadow);box-shadow:var(--box-shadow)}[dir=rtl] .toast-wrapper,:host-context([dir=rtl]) .toast-wrapper{left:unset;right:unset;left:var(--end);right:var(--start)}.toast-container{display:-ms-flexbox;display:flex;-ms-flex-align:center;align-items:center;pointer-events:auto;height:inherit;min-height:inherit;max-height:inherit;contain:content}.toast-layout-stacked .toast-container{-ms-flex-wrap:wrap;flex-wrap:wrap}.toast-layout-baseline .toast-content{display:-ms-flexbox;display:flex;-ms-flex:1;flex:1;-ms-flex-direction:column;flex-direction:column;-ms-flex-pack:center;justify-content:center}.toast-icon{margin-left:16px}@supports ((-webkit-margin-start: 0) or (margin-inline-start: 0)) or (-webkit-margin-start: 0){.toast-icon{margin-left:unset;-webkit-margin-start:16px;margin-inline-start:16px}}.toast-message{-ms-flex:1;flex:1;white-space:var(--white-space)}.toast-button-group{display:-ms-flexbox;display:flex}.toast-layout-stacked .toast-button-group{-ms-flex-pack:end;justify-content:end;width:100%}.toast-button{border:0;outline:none;color:var(--button-color);z-index:0}.toast-icon,.toast-button-icon{font-size:1.4em}.toast-button-inner{display:-ms-flexbox;display:flex;-ms-flex-align:center;align-items:center}@media (any-hover: hover){.toast-button:hover{cursor:pointer}}:host{--background:var(--ion-color-step-800, #333333);--border-radius:4px;--box-shadow:0 3px 5px -1px rgba(0, 0, 0, 0.2), 0 6px 10px 0 rgba(0, 0, 0, 0.14), 0 1px 18px 0 rgba(0, 0, 0, 0.12);--button-color:var(--ion-color-primary, #3880ff);--color:var(--ion-color-step-50, #f2f2f2);--max-width:700px;--start:8px;--end:8px;font-size:14px}.toast-wrapper{margin-left:auto;margin-right:auto;margin-top:auto;margin-bottom:auto;display:block;position:absolute;opacity:0.01;z-index:10}@supports ((-webkit-margin-start: 0) or (margin-inline-start: 0)) or (-webkit-margin-start: 0){.toast-wrapper{margin-left:unset;margin-right:unset;-webkit-margin-start:auto;margin-inline-start:auto;-webkit-margin-end:auto;margin-inline-end:auto}}.toast-content{padding-left:16px;padding-right:16px;padding-top:14px;padding-bottom:14px}@supports ((-webkit-margin-start: 0) or (margin-inline-start: 0)) or (-webkit-margin-start: 0){.toast-content{padding-left:unset;padding-right:unset;-webkit-padding-start:16px;padding-inline-start:16px;-webkit-padding-end:16px;padding-inline-end:16px}}.toast-header{margin-bottom:2px;font-weight:500;line-height:20px}.toast-message{line-height:20px}.toast-layout-baseline .toast-button-group-start{margin-left:8px}@supports ((-webkit-margin-start: 0) or (margin-inline-start: 0)) or (-webkit-margin-start: 0){.toast-layout-baseline .toast-button-group-start{margin-left:unset;-webkit-margin-start:8px;margin-inline-start:8px}}.toast-layout-stacked .toast-button-group-start{margin-right:8px;margin-top:8px}@supports ((-webkit-margin-start: 0) or (margin-inline-start: 0)) or (-webkit-margin-start: 0){.toast-layout-stacked .toast-button-group-start{margin-right:unset;-webkit-margin-end:8px;margin-inline-end:8px}}.toast-layout-baseline .toast-button-group-end{margin-right:8px}@supports ((-webkit-margin-start: 0) or (margin-inline-start: 0)) or (-webkit-margin-start: 0){.toast-layout-baseline .toast-button-group-end{margin-right:unset;-webkit-margin-end:8px;margin-inline-end:8px}}.toast-layout-stacked .toast-button-group-end{margin-right:8px;margin-bottom:8px}@supports ((-webkit-margin-start: 0) or (margin-inline-start: 0)) or (-webkit-margin-start: 0){.toast-layout-stacked .toast-button-group-end{margin-right:unset;-webkit-margin-end:8px;margin-inline-end:8px}}.toast-button{padding-left:15px;padding-right:15px;padding-top:10px;padding-bottom:10px;position:relative;background-color:transparent;font-family:var(--ion-font-family);font-size:14px;font-weight:500;letter-spacing:0.84px;text-transform:uppercase;overflow:hidden}@supports ((-webkit-margin-start: 0) or (margin-inline-start: 0)) or (-webkit-margin-start: 0){.toast-button{padding-left:unset;padding-right:unset;-webkit-padding-start:15px;padding-inline-start:15px;-webkit-padding-end:15px;padding-inline-end:15px}}.toast-button-cancel{color:var(--ion-color-step-100, #e6e6e6)}.toast-button-icon-only{border-radius:50%;padding-left:9px;padding-right:9px;padding-top:9px;padding-bottom:9px;width:36px;height:36px}@supports ((-webkit-margin-start: 0) or (margin-inline-start: 0)) or (-webkit-margin-start: 0){.toast-button-icon-only{padding-left:unset;padding-right:unset;-webkit-padding-start:9px;padding-inline-start:9px;-webkit-padding-end:9px;padding-inline-end:9px}}@media (any-hover: hover){.toast-button:hover{background-color:rgba(var(--ion-color-primary-rgb, 56, 128, 255), 0.08)}.toast-button-cancel:hover{background-color:rgba(var(--ion-background-color-rgb, 255, 255, 255), 0.08)}}";
const Toast = class {
  constructor(hostRef) {
    (0,_index_8e692445_js__WEBPACK_IMPORTED_MODULE_1__.r)(this, hostRef);
    this.didPresent = (0,_index_8e692445_js__WEBPACK_IMPORTED_MODULE_1__.e)(this, "ionToastDidPresent", 7);
    this.willPresent = (0,_index_8e692445_js__WEBPACK_IMPORTED_MODULE_1__.e)(this, "ionToastWillPresent", 7);
    this.willDismiss = (0,_index_8e692445_js__WEBPACK_IMPORTED_MODULE_1__.e)(this, "ionToastWillDismiss", 7);
    this.didDismiss = (0,_index_8e692445_js__WEBPACK_IMPORTED_MODULE_1__.e)(this, "ionToastDidDismiss", 7);
    this.customHTMLEnabled = _ionic_global_c74e4951_js__WEBPACK_IMPORTED_MODULE_2__.c.get('innerHTMLTemplatesEnabled', _config_d4f612d2_js__WEBPACK_IMPORTED_MODULE_3__.E);
    this.presented = false;
    /**
     * How many milliseconds to wait before hiding the toast. By default, it will show
     * until `dismiss()` is called.
     */
    this.duration = _ionic_global_c74e4951_js__WEBPACK_IMPORTED_MODULE_2__.c.getNumber('toastDuration', 0);
    /**
     * Defines how the message and buttons are laid out in the toast.
     * 'baseline': The message and the buttons will appear on the same line.
     * Message text may wrap within the message container.
     * 'stacked': The buttons containers and message will stack on top
     * of each other. Use this if you have long text in your buttons.
     */
    this.layout = 'baseline';
    /**
     * If `true`, the keyboard will be automatically dismissed when the overlay is presented.
     */
    this.keyboardClose = false;
    /**
     * The position of the toast on the screen.
     */
    this.position = 'bottom';
    /**
     * If `true`, the toast will be translucent.
     * Only applies when the mode is `"ios"` and the device supports
     * [`backdrop-filter`](https://developer.mozilla.org/en-US/docs/Web/CSS/backdrop-filter#Browser_compatibility).
     */
    this.translucent = false;
    /**
     * If `true`, the toast will animate.
     */
    this.animated = true;
    this.dispatchCancelHandler = ev => {
      const role = ev.detail.role;
      if ((0,_overlays_58fa8e4d_js__WEBPACK_IMPORTED_MODULE_5__.i)(role)) {
        const cancelButton = this.getButtons().find(b => b.role === 'cancel');
        this.callButtonHandler(cancelButton);
      }
    };
  }
  connectedCallback() {
    (0,_overlays_58fa8e4d_js__WEBPACK_IMPORTED_MODULE_5__.e)(this.el);
  }
  /**
   * Present the toast overlay after it has been created.
   */
  present() {
    var _this = this;
    return (0,_opt_atlassian_pipelines_agent_build_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_0__["default"])(function* () {
      yield (0,_overlays_58fa8e4d_js__WEBPACK_IMPORTED_MODULE_5__.d)(_this, 'toastEnter', iosEnterAnimation, mdEnterAnimation, _this.position);
      if (_this.duration > 0) {
        _this.durationTimeout = setTimeout(() => _this.dismiss(undefined, 'timeout'), _this.duration);
      }
    })();
  }
  /**
   * Dismiss the toast overlay after it has been presented.
   *
   * @param data Any data to emit in the dismiss events.
   * @param role The role of the element that is dismissing the toast.
   * This can be useful in a button handler for determining which button was
   * clicked to dismiss the toast.
   * Some examples include: ``"cancel"`, `"destructive"`, "selected"`, and `"backdrop"`.
   */
  dismiss(data, role) {
    if (this.durationTimeout) {
      clearTimeout(this.durationTimeout);
    }
    return (0,_overlays_58fa8e4d_js__WEBPACK_IMPORTED_MODULE_5__.f)(this, data, role, 'toastLeave', iosLeaveAnimation, mdLeaveAnimation, this.position);
  }
  /**
   * Returns a promise that resolves when the toast did dismiss.
   */
  onDidDismiss() {
    return (0,_overlays_58fa8e4d_js__WEBPACK_IMPORTED_MODULE_5__.g)(this.el, 'ionToastDidDismiss');
  }
  /**
   * Returns a promise that resolves when the toast will dismiss.
   */
  onWillDismiss() {
    return (0,_overlays_58fa8e4d_js__WEBPACK_IMPORTED_MODULE_5__.g)(this.el, 'ionToastWillDismiss');
  }
  getButtons() {
    const buttons = this.buttons ? this.buttons.map(b => {
      return typeof b === 'string' ? {
        text: b
      } : b;
    }) : [];
    return buttons;
  }
  buttonClick(button) {
    var _this2 = this;
    return (0,_opt_atlassian_pipelines_agent_build_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_0__["default"])(function* () {
      const role = button.role;
      if ((0,_overlays_58fa8e4d_js__WEBPACK_IMPORTED_MODULE_5__.i)(role)) {
        return _this2.dismiss(undefined, role);
      }
      const shouldDismiss = yield _this2.callButtonHandler(button);
      if (shouldDismiss) {
        return _this2.dismiss(undefined, role);
      }
      return Promise.resolve();
    })();
  }
  callButtonHandler(button) {
    return (0,_opt_atlassian_pipelines_agent_build_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_0__["default"])(function* () {
      if (button === null || button === void 0 ? void 0 : button.handler) {
        // a handler has been provided, execute it
        // pass the handler the values from the inputs
        try {
          const rtn = yield (0,_overlays_58fa8e4d_js__WEBPACK_IMPORTED_MODULE_5__.s)(button.handler);
          if (rtn === false) {
            // if the return value of the handler is false then do not dismiss
            return false;
          }
        } catch (e) {
          console.error(e);
        }
      }
      return true;
    })();
  }
  renderButtons(buttons, side) {
    if (buttons.length === 0) {
      return;
    }
    const mode = (0,_ionic_global_c74e4951_js__WEBPACK_IMPORTED_MODULE_2__.b)(this);
    const buttonGroupsClasses = {
      'toast-button-group': true,
      [`toast-button-group-${side}`]: true
    };
    return (0,_index_8e692445_js__WEBPACK_IMPORTED_MODULE_1__.h)("div", {
      class: buttonGroupsClasses
    }, buttons.map(b => (0,_index_8e692445_js__WEBPACK_IMPORTED_MODULE_1__.h)("button", {
      type: "button",
      class: buttonClass(b),
      tabIndex: 0,
      onClick: () => this.buttonClick(b),
      part: "button"
    }, (0,_index_8e692445_js__WEBPACK_IMPORTED_MODULE_1__.h)("div", {
      class: "toast-button-inner"
    }, b.icon && (0,_index_8e692445_js__WEBPACK_IMPORTED_MODULE_1__.h)("ion-icon", {
      icon: b.icon,
      slot: b.text === undefined ? 'icon-only' : undefined,
      class: "toast-button-icon"
    }), b.text), mode === 'md' && (0,_index_8e692445_js__WEBPACK_IMPORTED_MODULE_1__.h)("ion-ripple-effect", {
      type: b.icon !== undefined && b.text === undefined ? 'unbounded' : 'bounded'
    }))));
  }
  renderToastMessage() {
    const {
      customHTMLEnabled,
      message
    } = this;
    if (customHTMLEnabled) {
      return (0,_index_8e692445_js__WEBPACK_IMPORTED_MODULE_1__.h)("div", {
        class: "toast-message",
        part: "message",
        innerHTML: (0,_config_d4f612d2_js__WEBPACK_IMPORTED_MODULE_3__.a)(message)
      });
    }
    return (0,_index_8e692445_js__WEBPACK_IMPORTED_MODULE_1__.h)("div", {
      class: "toast-message",
      part: "message"
    }, message);
  }
  render() {
    const {
      layout,
      el
    } = this;
    const allButtons = this.getButtons();
    const startButtons = allButtons.filter(b => b.side === 'start');
    const endButtons = allButtons.filter(b => b.side !== 'start');
    const mode = (0,_ionic_global_c74e4951_js__WEBPACK_IMPORTED_MODULE_2__.b)(this);
    const wrapperClass = {
      'toast-wrapper': true,
      [`toast-${this.position}`]: true,
      [`toast-layout-${layout}`]: true
    };
    const role = allButtons.length > 0 ? 'dialog' : 'status';
    /**
     * Stacked buttons are only meant to be
     *  used with one type of button.
     */
    if (layout === 'stacked' && startButtons.length > 0 && endButtons.length > 0) {
      (0,_index_c4b11676_js__WEBPACK_IMPORTED_MODULE_4__.p)('This toast is using start and end buttons with the stacked toast layout. We recommend following the best practice of using either start or end buttons with the stacked toast layout.', el);
    }
    return (0,_index_8e692445_js__WEBPACK_IMPORTED_MODULE_1__.h)(_index_8e692445_js__WEBPACK_IMPORTED_MODULE_1__.H, Object.assign({
      "aria-live": "polite",
      "aria-atomic": "true",
      role: role,
      tabindex: "-1"
    }, this.htmlAttributes, {
      style: {
        zIndex: `${60000 + this.overlayIndex}`
      },
      class: (0,_theme_7670341c_js__WEBPACK_IMPORTED_MODULE_6__.c)(this.color, Object.assign(Object.assign({
        [mode]: true
      }, (0,_theme_7670341c_js__WEBPACK_IMPORTED_MODULE_6__.g)(this.cssClass)), {
        'overlay-hidden': true,
        'toast-translucent': this.translucent
      })),
      onIonToastWillDismiss: this.dispatchCancelHandler
    }), (0,_index_8e692445_js__WEBPACK_IMPORTED_MODULE_1__.h)("div", {
      class: wrapperClass
    }, (0,_index_8e692445_js__WEBPACK_IMPORTED_MODULE_1__.h)("div", {
      class: "toast-container",
      part: "container"
    }, this.renderButtons(startButtons, 'start'), this.icon !== undefined && (0,_index_8e692445_js__WEBPACK_IMPORTED_MODULE_1__.h)("ion-icon", {
      class: "toast-icon",
      part: "icon",
      icon: this.icon,
      lazy: false,
      "aria-hidden": "true"
    }), (0,_index_8e692445_js__WEBPACK_IMPORTED_MODULE_1__.h)("div", {
      class: "toast-content"
    }, this.header !== undefined && (0,_index_8e692445_js__WEBPACK_IMPORTED_MODULE_1__.h)("div", {
      class: "toast-header",
      part: "header"
    }, this.header), this.message !== undefined && this.renderToastMessage()), this.renderButtons(endButtons, 'end'))));
  }
  get el() {
    return (0,_index_8e692445_js__WEBPACK_IMPORTED_MODULE_1__.i)(this);
  }
};
const buttonClass = button => {
  return Object.assign({
    'toast-button': true,
    'toast-button-icon-only': button.icon !== undefined && button.text === undefined,
    [`toast-button-${button.role}`]: button.role !== undefined,
    'ion-focusable': true,
    'ion-activatable': true
  }, (0,_theme_7670341c_js__WEBPACK_IMPORTED_MODULE_6__.g)(button.cssClass));
};
Toast.style = {
  ios: toastIosCss,
  md: toastMdCss
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
//# sourceMappingURL=8268.fe25f5fb81d7e255.js.map