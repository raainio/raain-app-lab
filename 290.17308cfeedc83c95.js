"use strict";
(self["webpackChunkapp"] = self["webpackChunkapp"] || []).push([[290],{

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

/***/ 290:
/*!********************************************************************!*\
  !*** ./node_modules/@ionic/core/dist/esm/ion-refresher_2.entry.js ***!
  \********************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "ion_refresher": () => (/* binding */ Refresher),
/* harmony export */   "ion_refresher_content": () => (/* binding */ RefresherContent)
/* harmony export */ });
/* harmony import */ var _opt_atlassian_pipelines_agent_build_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/esm/asyncToGenerator.js */ 71670);
/* harmony import */ var _index_8e692445_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./index-8e692445.js */ 91559);
/* harmony import */ var _ionic_global_c74e4951_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./ionic-global-c74e4951.js */ 95823);
/* harmony import */ var _cubic_bezier_e78d1307_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./cubic-bezier-e78d1307.js */ 31463);
/* harmony import */ var _index_e6d1a8be_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./index-e6d1a8be.js */ 24311);
/* harmony import */ var _helpers_3b390e48_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./helpers-3b390e48.js */ 29259);
/* harmony import */ var _haptic_029a46f6_js__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./haptic-029a46f6.js */ 12815);
/* harmony import */ var _animation_4ff3f603_js__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./animation-4ff3f603.js */ 15933);
/* harmony import */ var _index_2bcb741c_js__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./index-2bcb741c.js */ 7309);
/* harmony import */ var _config_d4f612d2_js__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./config-d4f612d2.js */ 75656);
/* harmony import */ var _spinner_configs_5d6b6fe7_js__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./spinner-configs-5d6b6fe7.js */ 43844);
/* harmony import */ var _index_c4b11676_js__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ./index-c4b11676.js */ 99273);
/* harmony import */ var _index_33ffec25_js__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ./index-33ffec25.js */ 42286);

/*!
 * (C) Ionic http://ionicframework.com - MIT License
 */












const getRefresherAnimationType = contentEl => {
  const previousSibling = contentEl.previousElementSibling;
  const hasHeader = previousSibling !== null && previousSibling.tagName === 'ION-HEADER';
  return hasHeader ? 'translate' : 'scale';
};
const createPullingAnimation = (type, pullingSpinner, refresherEl) => {
  return type === 'scale' ? createScaleAnimation(pullingSpinner, refresherEl) : createTranslateAnimation(pullingSpinner, refresherEl);
};
const createBaseAnimation = pullingRefresherIcon => {
  // TODO(FW-2832): add types/re-evaluate asserting so many things
  const spinner = pullingRefresherIcon.querySelector('ion-spinner');
  const circle = spinner.shadowRoot.querySelector('circle');
  const spinnerArrowContainer = pullingRefresherIcon.querySelector('.spinner-arrow-container');
  const arrowContainer = pullingRefresherIcon.querySelector('.arrow-container');
  const arrow = arrowContainer ? arrowContainer.querySelector('ion-icon') : null;
  const baseAnimation = (0,_animation_4ff3f603_js__WEBPACK_IMPORTED_MODULE_7__.c)().duration(1000).easing('ease-out');
  const spinnerArrowContainerAnimation = (0,_animation_4ff3f603_js__WEBPACK_IMPORTED_MODULE_7__.c)().addElement(spinnerArrowContainer).keyframes([{
    offset: 0,
    opacity: '0.3'
  }, {
    offset: 0.45,
    opacity: '0.3'
  }, {
    offset: 0.55,
    opacity: '1'
  }, {
    offset: 1,
    opacity: '1'
  }]);
  const circleInnerAnimation = (0,_animation_4ff3f603_js__WEBPACK_IMPORTED_MODULE_7__.c)().addElement(circle).keyframes([{
    offset: 0,
    strokeDasharray: '1px, 200px'
  }, {
    offset: 0.2,
    strokeDasharray: '1px, 200px'
  }, {
    offset: 0.55,
    strokeDasharray: '100px, 200px'
  }, {
    offset: 1,
    strokeDasharray: '100px, 200px'
  }]);
  const circleOuterAnimation = (0,_animation_4ff3f603_js__WEBPACK_IMPORTED_MODULE_7__.c)().addElement(spinner).keyframes([{
    offset: 0,
    transform: 'rotate(-90deg)'
  }, {
    offset: 1,
    transform: 'rotate(210deg)'
  }]);
  /**
   * Only add arrow animation if present
   * this allows users to customize the spinners
   * without errors being thrown
   */
  if (arrowContainer && arrow) {
    const arrowContainerAnimation = (0,_animation_4ff3f603_js__WEBPACK_IMPORTED_MODULE_7__.c)().addElement(arrowContainer).keyframes([{
      offset: 0,
      transform: 'rotate(0deg)'
    }, {
      offset: 0.3,
      transform: 'rotate(0deg)'
    }, {
      offset: 0.55,
      transform: 'rotate(280deg)'
    }, {
      offset: 1,
      transform: 'rotate(400deg)'
    }]);
    const arrowAnimation = (0,_animation_4ff3f603_js__WEBPACK_IMPORTED_MODULE_7__.c)().addElement(arrow).keyframes([{
      offset: 0,
      transform: 'translateX(2px) scale(0)'
    }, {
      offset: 0.3,
      transform: 'translateX(2px) scale(0)'
    }, {
      offset: 0.55,
      transform: 'translateX(-1.5px) scale(1)'
    }, {
      offset: 1,
      transform: 'translateX(-1.5px) scale(1)'
    }]);
    baseAnimation.addAnimation([arrowContainerAnimation, arrowAnimation]);
  }
  return baseAnimation.addAnimation([spinnerArrowContainerAnimation, circleInnerAnimation, circleOuterAnimation]);
};
const createScaleAnimation = (pullingRefresherIcon, refresherEl) => {
  /**
   * Do not take the height of the refresher icon
   * because at this point the DOM has not updated,
   * so the refresher icon is still hidden with
   * display: none.
   * The `ion-refresher` container height
   * is roughly the amount we need to offset
   * the icon by when pulling down.
   */
  const height = refresherEl.clientHeight;
  const spinnerAnimation = (0,_animation_4ff3f603_js__WEBPACK_IMPORTED_MODULE_7__.c)().addElement(pullingRefresherIcon).keyframes([{
    offset: 0,
    transform: `scale(0) translateY(-${height}px)`
  }, {
    offset: 1,
    transform: 'scale(1) translateY(100px)'
  }]);
  return createBaseAnimation(pullingRefresherIcon).addAnimation([spinnerAnimation]);
};
const createTranslateAnimation = (pullingRefresherIcon, refresherEl) => {
  /**
   * Do not take the height of the refresher icon
   * because at this point the DOM has not updated,
   * so the refresher icon is still hidden with
   * display: none.
   * The `ion-refresher` container height
   * is roughly the amount we need to offset
   * the icon by when pulling down.
   */
  const height = refresherEl.clientHeight;
  const spinnerAnimation = (0,_animation_4ff3f603_js__WEBPACK_IMPORTED_MODULE_7__.c)().addElement(pullingRefresherIcon).keyframes([{
    offset: 0,
    transform: `translateY(-${height}px)`
  }, {
    offset: 1,
    transform: 'translateY(100px)'
  }]);
  return createBaseAnimation(pullingRefresherIcon).addAnimation([spinnerAnimation]);
};
const createSnapBackAnimation = pullingRefresherIcon => {
  return (0,_animation_4ff3f603_js__WEBPACK_IMPORTED_MODULE_7__.c)().duration(125).addElement(pullingRefresherIcon).fromTo('transform', 'translateY(var(--ion-pulling-refresher-translate, 100px))', 'translateY(0px)');
};
// iOS Native Refresher
// -----------------------------
const setSpinnerOpacity = (spinner, opacity) => {
  spinner.style.setProperty('opacity', opacity.toString());
};
const handleScrollWhilePulling = (ticks, numTicks, pullAmount) => {
  const max = 1;
  (0,_index_8e692445_js__WEBPACK_IMPORTED_MODULE_1__.c)(() => {
    ticks.forEach((el, i) => {
      /**
       * Compute the opacity of each tick
       * mark as a percentage of the pullAmount
       * offset by max / numTicks so
       * the tick marks are shown staggered.
       */
      const min = i * (max / numTicks);
      const range = max - min;
      const start = pullAmount - min;
      const progression = (0,_helpers_3b390e48_js__WEBPACK_IMPORTED_MODULE_5__.l)(0, start / range, 1);
      el.style.setProperty('opacity', progression.toString());
    });
  });
};
const handleScrollWhileRefreshing = (spinner, lastVelocityY) => {
  (0,_index_8e692445_js__WEBPACK_IMPORTED_MODULE_1__.c)(() => {
    // If user pulls down quickly, the spinner should spin faster
    spinner.style.setProperty('--refreshing-rotation-duration', lastVelocityY >= 1.0 ? '0.5s' : '2s');
    spinner.style.setProperty('opacity', '1');
  });
};
const translateElement = (el, value, duration = 200) => {
  if (!el) {
    return Promise.resolve();
  }
  const trans = (0,_helpers_3b390e48_js__WEBPACK_IMPORTED_MODULE_5__.t)(el, duration);
  (0,_index_8e692445_js__WEBPACK_IMPORTED_MODULE_1__.c)(() => {
    el.style.setProperty('transition', `${duration}ms all ease-out`);
    if (value === undefined) {
      el.style.removeProperty('transform');
    } else {
      el.style.setProperty('transform', `translate3d(0px, ${value}, 0px)`);
    }
  });
  return trans;
};
// Utils
// -----------------------------
const shouldUseNativeRefresher = /*#__PURE__*/function () {
  var _ref = (0,_opt_atlassian_pipelines_agent_build_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_0__["default"])(function* (referenceEl, mode) {
    const refresherContent = referenceEl.querySelector('ion-refresher-content');
    if (!refresherContent) {
      return Promise.resolve(false);
    }
    yield new Promise(resolve => (0,_helpers_3b390e48_js__WEBPACK_IMPORTED_MODULE_5__.c)(refresherContent, resolve));
    const pullingSpinner = referenceEl.querySelector('ion-refresher-content .refresher-pulling ion-spinner');
    const refreshingSpinner = referenceEl.querySelector('ion-refresher-content .refresher-refreshing ion-spinner');
    return pullingSpinner !== null && refreshingSpinner !== null && (mode === 'ios' && (0,_ionic_global_c74e4951_js__WEBPACK_IMPORTED_MODULE_2__.a)('mobile') && referenceEl.style.webkitOverflowScrolling !== undefined || mode === 'md');
  });
  return function shouldUseNativeRefresher(_x, _x2) {
    return _ref.apply(this, arguments);
  };
}();
const refresherIosCss = "ion-refresher{left:0;top:0;display:none;position:absolute;width:100%;height:60px;pointer-events:none;z-index:-1}[dir=rtl] ion-refresher,:host-context([dir=rtl]) ion-refresher{left:unset;right:unset;right:0}ion-refresher.refresher-active{display:block}ion-refresher-content{display:-ms-flexbox;display:flex;-ms-flex-direction:column;flex-direction:column;-ms-flex-pack:center;justify-content:center;height:100%}.refresher-pulling,.refresher-refreshing{display:none;width:100%}.refresher-pulling-icon,.refresher-refreshing-icon{-webkit-transform-origin:center;transform-origin:center;-webkit-transition:200ms;transition:200ms;font-size:30px;text-align:center}[dir=rtl] .refresher-pulling-icon,:host-context([dir=rtl]) .refresher-pulling-icon,[dir=rtl] .refresher-refreshing-icon,:host-context([dir=rtl]) .refresher-refreshing-icon{-webkit-transform-origin:calc(100% - center);transform-origin:calc(100% - center)}.refresher-pulling-text,.refresher-refreshing-text{font-size:16px;text-align:center}ion-refresher-content .arrow-container{display:none}.refresher-pulling ion-refresher-content .refresher-pulling{display:block}.refresher-ready ion-refresher-content .refresher-pulling{display:block}.refresher-ready ion-refresher-content .refresher-pulling-icon{-webkit-transform:rotate(180deg);transform:rotate(180deg)}.refresher-refreshing ion-refresher-content .refresher-refreshing{display:block}.refresher-cancelling ion-refresher-content .refresher-pulling{display:block}.refresher-cancelling ion-refresher-content .refresher-pulling-icon{-webkit-transform:scale(0);transform:scale(0)}.refresher-completing ion-refresher-content .refresher-refreshing{display:block}.refresher-completing ion-refresher-content .refresher-refreshing-icon{-webkit-transform:scale(0);transform:scale(0)}.refresher-native .refresher-pulling-text,.refresher-native .refresher-refreshing-text{display:none}.refresher-ios .refresher-pulling-icon,.refresher-ios .refresher-refreshing-icon{color:var(--ion-text-color, #000)}.refresher-ios .refresher-pulling-text,.refresher-ios .refresher-refreshing-text{color:var(--ion-text-color, #000)}.refresher-ios .refresher-refreshing .spinner-lines-ios line,.refresher-ios .refresher-refreshing .spinner-lines-small-ios line,.refresher-ios .refresher-refreshing .spinner-crescent circle{stroke:var(--ion-text-color, #000)}.refresher-ios .refresher-refreshing .spinner-bubbles circle,.refresher-ios .refresher-refreshing .spinner-circles circle,.refresher-ios .refresher-refreshing .spinner-dots circle{fill:var(--ion-text-color, #000)}ion-refresher.refresher-native{display:block;z-index:1}ion-refresher.refresher-native ion-spinner{margin-left:auto;margin-right:auto;margin-top:0;margin-bottom:0}@supports ((-webkit-margin-start: 0) or (margin-inline-start: 0)) or (-webkit-margin-start: 0){ion-refresher.refresher-native ion-spinner{margin-left:unset;margin-right:unset;-webkit-margin-start:auto;margin-inline-start:auto;-webkit-margin-end:auto;margin-inline-end:auto}}.refresher-native .refresher-refreshing ion-spinner{--refreshing-rotation-duration:2s;display:none;-webkit-animation:var(--refreshing-rotation-duration) ease-out refresher-rotate forwards;animation:var(--refreshing-rotation-duration) ease-out refresher-rotate forwards}.refresher-native .refresher-refreshing{display:none;-webkit-animation:250ms linear refresher-pop forwards;animation:250ms linear refresher-pop forwards}.refresher-native ion-spinner{width:32px;height:32px;color:var(--ion-color-step-450, #747577)}.refresher-native.refresher-refreshing .refresher-pulling ion-spinner,.refresher-native.refresher-completing .refresher-pulling ion-spinner{display:none}.refresher-native.refresher-refreshing .refresher-refreshing ion-spinner,.refresher-native.refresher-completing .refresher-refreshing ion-spinner{display:block}.refresher-native.refresher-pulling .refresher-pulling ion-spinner{display:block}.refresher-native.refresher-pulling .refresher-refreshing ion-spinner{display:none}.refresher-native.refresher-completing ion-refresher-content .refresher-refreshing-icon{-webkit-transform:scale(0) rotate(180deg);transform:scale(0) rotate(180deg);-webkit-transition:300ms;transition:300ms}@-webkit-keyframes refresher-pop{0%{-webkit-transform:scale(1);transform:scale(1);-webkit-animation-timing-function:ease-in;animation-timing-function:ease-in}50%{-webkit-transform:scale(1.2);transform:scale(1.2);-webkit-animation-timing-function:ease-out;animation-timing-function:ease-out}100%{-webkit-transform:scale(1);transform:scale(1)}}@keyframes refresher-pop{0%{-webkit-transform:scale(1);transform:scale(1);-webkit-animation-timing-function:ease-in;animation-timing-function:ease-in}50%{-webkit-transform:scale(1.2);transform:scale(1.2);-webkit-animation-timing-function:ease-out;animation-timing-function:ease-out}100%{-webkit-transform:scale(1);transform:scale(1)}}@-webkit-keyframes refresher-rotate{from{-webkit-transform:rotate(0deg);transform:rotate(0deg)}to{-webkit-transform:rotate(180deg);transform:rotate(180deg)}}@keyframes refresher-rotate{from{-webkit-transform:rotate(0deg);transform:rotate(0deg)}to{-webkit-transform:rotate(180deg);transform:rotate(180deg)}}";
const refresherMdCss = "ion-refresher{left:0;top:0;display:none;position:absolute;width:100%;height:60px;pointer-events:none;z-index:-1}[dir=rtl] ion-refresher,:host-context([dir=rtl]) ion-refresher{left:unset;right:unset;right:0}ion-refresher.refresher-active{display:block}ion-refresher-content{display:-ms-flexbox;display:flex;-ms-flex-direction:column;flex-direction:column;-ms-flex-pack:center;justify-content:center;height:100%}.refresher-pulling,.refresher-refreshing{display:none;width:100%}.refresher-pulling-icon,.refresher-refreshing-icon{-webkit-transform-origin:center;transform-origin:center;-webkit-transition:200ms;transition:200ms;font-size:30px;text-align:center}[dir=rtl] .refresher-pulling-icon,:host-context([dir=rtl]) .refresher-pulling-icon,[dir=rtl] .refresher-refreshing-icon,:host-context([dir=rtl]) .refresher-refreshing-icon{-webkit-transform-origin:calc(100% - center);transform-origin:calc(100% - center)}.refresher-pulling-text,.refresher-refreshing-text{font-size:16px;text-align:center}ion-refresher-content .arrow-container{display:none}.refresher-pulling ion-refresher-content .refresher-pulling{display:block}.refresher-ready ion-refresher-content .refresher-pulling{display:block}.refresher-ready ion-refresher-content .refresher-pulling-icon{-webkit-transform:rotate(180deg);transform:rotate(180deg)}.refresher-refreshing ion-refresher-content .refresher-refreshing{display:block}.refresher-cancelling ion-refresher-content .refresher-pulling{display:block}.refresher-cancelling ion-refresher-content .refresher-pulling-icon{-webkit-transform:scale(0);transform:scale(0)}.refresher-completing ion-refresher-content .refresher-refreshing{display:block}.refresher-completing ion-refresher-content .refresher-refreshing-icon{-webkit-transform:scale(0);transform:scale(0)}.refresher-native .refresher-pulling-text,.refresher-native .refresher-refreshing-text{display:none}.refresher-md .refresher-pulling-icon,.refresher-md .refresher-refreshing-icon{color:var(--ion-text-color, #000)}.refresher-md .refresher-pulling-text,.refresher-md .refresher-refreshing-text{color:var(--ion-text-color, #000)}.refresher-md .refresher-refreshing .spinner-lines-md line,.refresher-md .refresher-refreshing .spinner-lines-small-md line,.refresher-md .refresher-refreshing .spinner-crescent circle{stroke:var(--ion-text-color, #000)}.refresher-md .refresher-refreshing .spinner-bubbles circle,.refresher-md .refresher-refreshing .spinner-circles circle,.refresher-md .refresher-refreshing .spinner-dots circle{fill:var(--ion-text-color, #000)}ion-refresher.refresher-native{display:block;z-index:1}ion-refresher.refresher-native ion-spinner{margin-left:auto;margin-right:auto;margin-top:0;margin-bottom:0;width:24px;height:24px;color:var(--ion-color-primary, #3880ff)}@supports ((-webkit-margin-start: 0) or (margin-inline-start: 0)) or (-webkit-margin-start: 0){ion-refresher.refresher-native ion-spinner{margin-left:unset;margin-right:unset;-webkit-margin-start:auto;margin-inline-start:auto;-webkit-margin-end:auto;margin-inline-end:auto}}ion-refresher.refresher-native .spinner-arrow-container{display:inherit}ion-refresher.refresher-native .arrow-container{display:block;position:absolute;width:24px;height:24px}ion-refresher.refresher-native .arrow-container ion-icon{margin-left:auto;margin-right:auto;margin-top:0;margin-bottom:0;left:0;right:0;bottom:-4px;position:absolute;color:var(--ion-color-primary, #3880ff);font-size:12px}@supports ((-webkit-margin-start: 0) or (margin-inline-start: 0)) or (-webkit-margin-start: 0){ion-refresher.refresher-native .arrow-container ion-icon{margin-left:unset;margin-right:unset;-webkit-margin-start:auto;margin-inline-start:auto;-webkit-margin-end:auto;margin-inline-end:auto}}ion-refresher.refresher-native.refresher-pulling ion-refresher-content .refresher-pulling,ion-refresher.refresher-native.refresher-ready ion-refresher-content .refresher-pulling{display:-ms-flexbox;display:flex}ion-refresher.refresher-native.refresher-refreshing ion-refresher-content .refresher-refreshing,ion-refresher.refresher-native.refresher-completing ion-refresher-content .refresher-refreshing,ion-refresher.refresher-native.refresher-cancelling ion-refresher-content .refresher-refreshing{display:-ms-flexbox;display:flex}ion-refresher.refresher-native .refresher-pulling-icon{-webkit-transform:translateY(calc(-100% - 10px));transform:translateY(calc(-100% - 10px))}ion-refresher.refresher-native .refresher-pulling-icon,ion-refresher.refresher-native .refresher-refreshing-icon{margin-left:auto;margin-right:auto;margin-top:0;margin-bottom:0;border-radius:100%;padding-left:8px;padding-right:8px;padding-top:8px;padding-bottom:8px;display:-ms-flexbox;display:flex;border:1px solid var(--ion-color-step-200, #ececec);background:var(--ion-color-step-250, #ffffff);-webkit-box-shadow:0px 1px 6px rgba(0, 0, 0, 0.1);box-shadow:0px 1px 6px rgba(0, 0, 0, 0.1)}@supports ((-webkit-margin-start: 0) or (margin-inline-start: 0)) or (-webkit-margin-start: 0){ion-refresher.refresher-native .refresher-pulling-icon,ion-refresher.refresher-native .refresher-refreshing-icon{margin-left:unset;margin-right:unset;-webkit-margin-start:auto;margin-inline-start:auto;-webkit-margin-end:auto;margin-inline-end:auto}}@supports ((-webkit-margin-start: 0) or (margin-inline-start: 0)) or (-webkit-margin-start: 0){ion-refresher.refresher-native .refresher-pulling-icon,ion-refresher.refresher-native .refresher-refreshing-icon{padding-left:unset;padding-right:unset;-webkit-padding-start:8px;padding-inline-start:8px;-webkit-padding-end:8px;padding-inline-end:8px}}";
const Refresher = class {
  constructor(hostRef) {
    (0,_index_8e692445_js__WEBPACK_IMPORTED_MODULE_1__.r)(this, hostRef);
    this.ionRefresh = (0,_index_8e692445_js__WEBPACK_IMPORTED_MODULE_1__.e)(this, "ionRefresh", 7);
    this.ionPull = (0,_index_8e692445_js__WEBPACK_IMPORTED_MODULE_1__.e)(this, "ionPull", 7);
    this.ionStart = (0,_index_8e692445_js__WEBPACK_IMPORTED_MODULE_1__.e)(this, "ionStart", 7);
    this.appliedStyles = false;
    this.didStart = false;
    this.progress = 0;
    this.pointerDown = false;
    this.needsCompletion = false;
    this.didRefresh = false;
    this.lastVelocityY = 0;
    this.animations = [];
    this.nativeRefresher = false;
    /**
     * The current state which the refresher is in. The refresher's states include:
     *
     * - `inactive` - The refresher is not being pulled down or refreshing and is currently hidden.
     * - `pulling` - The user is actively pulling down the refresher, but has not reached the point yet that if the user lets go, it'll refresh.
     * - `cancelling` - The user pulled down the refresher and let go, but did not pull down far enough to kick off the `refreshing` state. After letting go, the refresher is in the `cancelling` state while it is closing, and will go back to the `inactive` state once closed.
     * - `ready` - The user has pulled down the refresher far enough that if they let go, it'll begin the `refreshing` state.
     * - `refreshing` - The refresher is actively waiting on the async operation to end. Once the refresh handler calls `complete()` it will begin the `completing` state.
     * - `completing` - The `refreshing` state has finished and the refresher is in the way of closing itself. Once closed, the refresher will go back to the `inactive` state.
     */
    this.state = 1 /* RefresherState.Inactive */;
    /**
     * The minimum distance the user must pull down until the
     * refresher will go into the `refreshing` state.
     * Does not apply when the refresher content uses a spinner,
     * enabling the native refresher.
     */
    this.pullMin = 60;
    /**
     * The maximum distance of the pull until the refresher
     * will automatically go into the `refreshing` state.
     * Defaults to the result of `pullMin + 60`.
     * Does not apply when  the refresher content uses a spinner,
     * enabling the native refresher.
     */
    this.pullMax = this.pullMin + 60;
    /**
     * Time it takes to close the refresher.
     * Does not apply when the refresher content uses a spinner,
     * enabling the native refresher.
     */
    this.closeDuration = '280ms';
    /**
     * Time it takes the refresher to snap back to the `refreshing` state.
     * Does not apply when the refresher content uses a spinner,
     * enabling the native refresher.
     */
    this.snapbackDuration = '280ms';
    /**
     * How much to multiply the pull speed by. To slow the pull animation down,
     * pass a number less than `1`. To speed up the pull, pass a number greater
     * than `1`. The default value is `1` which is equal to the speed of the cursor.
     * If a negative value is passed in, the factor will be `1` instead.
     *
     * For example: If the value passed is `1.2` and the content is dragged by
     * `10` pixels, instead of `10` pixels the content will be pulled by `12` pixels
     * (an increase of 20 percent). If the value passed is `0.8`, the dragged amount
     * will be `8` pixels, less than the amount the cursor has moved.
     *
     * Does not apply when the refresher content uses a spinner,
     * enabling the native refresher.
     */
    this.pullFactor = 1;
    /**
     * If `true`, the refresher will be hidden.
     */
    this.disabled = false;
  }
  disabledChanged() {
    if (this.gesture) {
      this.gesture.enable(!this.disabled);
    }
  }
  checkNativeRefresher() {
    var _this = this;
    return (0,_opt_atlassian_pipelines_agent_build_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_0__["default"])(function* () {
      const useNativeRefresher = yield shouldUseNativeRefresher(_this.el, (0,_ionic_global_c74e4951_js__WEBPACK_IMPORTED_MODULE_2__.b)(_this));
      if (useNativeRefresher && !_this.nativeRefresher) {
        const contentEl = _this.el.closest('ion-content');
        _this.setupNativeRefresher(contentEl);
      } else if (!useNativeRefresher) {
        _this.destroyNativeRefresher();
      }
    })();
  }
  destroyNativeRefresher() {
    if (this.scrollEl && this.scrollListenerCallback) {
      this.scrollEl.removeEventListener('scroll', this.scrollListenerCallback);
      this.scrollListenerCallback = undefined;
    }
    this.nativeRefresher = false;
  }
  resetNativeRefresher(el, state) {
    var _this2 = this;
    return (0,_opt_atlassian_pipelines_agent_build_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_0__["default"])(function* () {
      _this2.state = state;
      if ((0,_ionic_global_c74e4951_js__WEBPACK_IMPORTED_MODULE_2__.b)(_this2) === 'ios') {
        yield translateElement(el, undefined, 300);
      } else {
        yield (0,_helpers_3b390e48_js__WEBPACK_IMPORTED_MODULE_5__.t)(_this2.el.querySelector('.refresher-refreshing-icon'), 200);
      }
      _this2.didRefresh = false;
      _this2.needsCompletion = false;
      _this2.pointerDown = false;
      _this2.animations.forEach(ani => ani.destroy());
      _this2.animations = [];
      _this2.progress = 0;
      _this2.state = 1 /* RefresherState.Inactive */;
    })();
  }

  setupiOSNativeRefresher(pullingSpinner, refreshingSpinner) {
    var _this3 = this;
    return (0,_opt_atlassian_pipelines_agent_build_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_0__["default"])(function* () {
      _this3.elementToTransform = _this3.scrollEl;
      const ticks = pullingSpinner.shadowRoot.querySelectorAll('svg');
      let MAX_PULL = _this3.scrollEl.clientHeight * 0.16;
      const NUM_TICKS = ticks.length;
      (0,_index_8e692445_js__WEBPACK_IMPORTED_MODULE_1__.c)(() => ticks.forEach(el => el.style.setProperty('animation', 'none')));
      _this3.scrollListenerCallback = () => {
        // If pointer is not on screen or refresher is not active, ignore scroll
        if (!_this3.pointerDown && _this3.state === 1 /* RefresherState.Inactive */) {
          return;
        }
        (0,_index_8e692445_js__WEBPACK_IMPORTED_MODULE_1__.f)(() => {
          // PTR should only be active when overflow scrolling at the top
          const scrollTop = _this3.scrollEl.scrollTop;
          const refresherHeight = _this3.el.clientHeight;
          if (scrollTop > 0) {
            /**
             * If refresher is refreshing and user tries to scroll
             * progressively fade refresher out/in
             */
            if (_this3.state === 8 /* RefresherState.Refreshing */) {
              const ratio = (0,_helpers_3b390e48_js__WEBPACK_IMPORTED_MODULE_5__.l)(0, scrollTop / (refresherHeight * 0.5), 1);
              (0,_index_8e692445_js__WEBPACK_IMPORTED_MODULE_1__.c)(() => setSpinnerOpacity(refreshingSpinner, 1 - ratio));
              return;
            }
            return;
          }
          if (_this3.pointerDown) {
            if (!_this3.didStart) {
              _this3.didStart = true;
              _this3.ionStart.emit();
            }
            // emit "pulling" on every move
            if (_this3.pointerDown) {
              _this3.ionPull.emit();
            }
          }
          /**
           * We want to delay the start of this gesture by ~30px
           * when initially pulling down so the refresher does not
           * overlap with the content. But when letting go of the
           * gesture before the refresher completes, we want the
           * refresher tick marks to quickly fade out.
           */
          const offset = _this3.didStart ? 30 : 0;
          const pullAmount = _this3.progress = (0,_helpers_3b390e48_js__WEBPACK_IMPORTED_MODULE_5__.l)(0, (Math.abs(scrollTop) - offset) / MAX_PULL, 1);
          const shouldShowRefreshingSpinner = _this3.state === 8 /* RefresherState.Refreshing */ || pullAmount === 1;
          if (shouldShowRefreshingSpinner) {
            if (_this3.pointerDown) {
              handleScrollWhileRefreshing(refreshingSpinner, _this3.lastVelocityY);
            }
            if (!_this3.didRefresh) {
              _this3.beginRefresh();
              _this3.didRefresh = true;
              (0,_haptic_029a46f6_js__WEBPACK_IMPORTED_MODULE_6__.d)({
                style: 'light'
              });
              /**
               * Translate the content element otherwise when pointer is removed
               * from screen the scroll content will bounce back over the refresher
               */
              if (!_this3.pointerDown) {
                translateElement(_this3.elementToTransform, `${refresherHeight}px`);
              }
            }
          } else {
            _this3.state = 2 /* RefresherState.Pulling */;
            handleScrollWhilePulling(ticks, NUM_TICKS, pullAmount);
          }
        });
      };
      _this3.scrollEl.addEventListener('scroll', _this3.scrollListenerCallback);
      _this3.gesture = (yield Promise.resolve(/*! import() */).then(__webpack_require__.bind(__webpack_require__, /*! ./index-422b6e83.js */ 88759))).createGesture({
        el: _this3.scrollEl,
        gestureName: 'refresher',
        gesturePriority: 31,
        direction: 'y',
        threshold: 5,
        onStart: () => {
          _this3.pointerDown = true;
          if (!_this3.didRefresh) {
            translateElement(_this3.elementToTransform, '0px');
          }
          /**
           * If the content had `display: none` when
           * the refresher was initialized, its clientHeight
           * will be 0. When the gesture starts, the content
           * will be visible, so try to get the correct
           * client height again. This is most common when
           * using the refresher in an ion-menu.
           */
          if (MAX_PULL === 0) {
            MAX_PULL = _this3.scrollEl.clientHeight * 0.16;
          }
        },
        onMove: ev => {
          _this3.lastVelocityY = ev.velocityY;
        },
        onEnd: () => {
          _this3.pointerDown = false;
          _this3.didStart = false;
          if (_this3.needsCompletion) {
            _this3.resetNativeRefresher(_this3.elementToTransform, 32 /* RefresherState.Completing */);
            _this3.needsCompletion = false;
          } else if (_this3.didRefresh) {
            (0,_index_8e692445_js__WEBPACK_IMPORTED_MODULE_1__.f)(() => translateElement(_this3.elementToTransform, `${_this3.el.clientHeight}px`));
          }
        }
      });
      _this3.disabledChanged();
    })();
  }
  setupMDNativeRefresher(contentEl, pullingSpinner, refreshingSpinner) {
    var _this4 = this;
    return (0,_opt_atlassian_pipelines_agent_build_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_0__["default"])(function* () {
      const circle = (0,_helpers_3b390e48_js__WEBPACK_IMPORTED_MODULE_5__.g)(pullingSpinner).querySelector('circle');
      const pullingRefresherIcon = _this4.el.querySelector('ion-refresher-content .refresher-pulling-icon');
      const refreshingCircle = (0,_helpers_3b390e48_js__WEBPACK_IMPORTED_MODULE_5__.g)(refreshingSpinner).querySelector('circle');
      if (circle !== null && refreshingCircle !== null) {
        (0,_index_8e692445_js__WEBPACK_IMPORTED_MODULE_1__.c)(() => {
          circle.style.setProperty('animation', 'none');
          // This lines up the animation on the refreshing spinner with the pulling spinner
          refreshingSpinner.style.setProperty('animation-delay', '-655ms');
          refreshingCircle.style.setProperty('animation-delay', '-655ms');
        });
      }
      _this4.gesture = (yield Promise.resolve(/*! import() */).then(__webpack_require__.bind(__webpack_require__, /*! ./index-422b6e83.js */ 88759))).createGesture({
        el: _this4.scrollEl,
        gestureName: 'refresher',
        gesturePriority: 31,
        direction: 'y',
        threshold: 5,
        canStart: () => _this4.state !== 8 /* RefresherState.Refreshing */ && _this4.state !== 32 /* RefresherState.Completing */ && _this4.scrollEl.scrollTop === 0,
        onStart: ev => {
          _this4.progress = 0;
          ev.data = {
            animation: undefined,
            didStart: false,
            cancelled: false
          };
        },
        onMove: ev => {
          if (ev.velocityY < 0 && _this4.progress === 0 && !ev.data.didStart || ev.data.cancelled) {
            ev.data.cancelled = true;
            return;
          }
          if (!ev.data.didStart) {
            ev.data.didStart = true;
            _this4.state = 2 /* RefresherState.Pulling */;
            (0,_index_8e692445_js__WEBPACK_IMPORTED_MODULE_1__.c)(() => _this4.scrollEl.style.setProperty('--overflow', 'hidden'));
            const animationType = getRefresherAnimationType(contentEl);
            const animation = createPullingAnimation(animationType, pullingRefresherIcon, _this4.el);
            ev.data.animation = animation;
            animation.progressStart(false, 0);
            _this4.ionStart.emit();
            _this4.animations.push(animation);
            return;
          }
          // Since we are using an easing curve, slow the gesture tracking down a bit
          _this4.progress = (0,_helpers_3b390e48_js__WEBPACK_IMPORTED_MODULE_5__.l)(0, ev.deltaY / 180 * 0.5, 1);
          ev.data.animation.progressStep(_this4.progress);
          _this4.ionPull.emit();
        },
        onEnd: ev => {
          if (!ev.data.didStart) {
            return;
          }
          _this4.gesture.enable(false);
          (0,_index_8e692445_js__WEBPACK_IMPORTED_MODULE_1__.c)(() => _this4.scrollEl.style.removeProperty('--overflow'));
          if (_this4.progress <= 0.4) {
            ev.data.animation.progressEnd(0, _this4.progress, 500).onFinish(() => {
              _this4.animations.forEach(ani => ani.destroy());
              _this4.animations = [];
              _this4.gesture.enable(true);
              _this4.state = 1 /* RefresherState.Inactive */;
            });

            return;
          }
          const progress = (0,_cubic_bezier_e78d1307_js__WEBPACK_IMPORTED_MODULE_3__.g)([0, 0], [0, 0], [1, 1], [1, 1], _this4.progress)[0];
          const snapBackAnimation = createSnapBackAnimation(pullingRefresherIcon);
          _this4.animations.push(snapBackAnimation);
          (0,_index_8e692445_js__WEBPACK_IMPORTED_MODULE_1__.c)( /*#__PURE__*/(0,_opt_atlassian_pipelines_agent_build_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_0__["default"])(function* () {
            pullingRefresherIcon.style.setProperty('--ion-pulling-refresher-translate', `${progress * 100}px`);
            ev.data.animation.progressEnd();
            yield snapBackAnimation.play();
            _this4.beginRefresh();
            ev.data.animation.destroy();
            _this4.gesture.enable(true);
          }));
        }
      });
      _this4.disabledChanged();
    })();
  }
  setupNativeRefresher(contentEl) {
    var _this5 = this;
    return (0,_opt_atlassian_pipelines_agent_build_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_0__["default"])(function* () {
      if (_this5.scrollListenerCallback || !contentEl || _this5.nativeRefresher || !_this5.scrollEl) {
        return;
      }
      /**
       * If using non-native refresher before make sure
       * we clean up any old CSS. This can happen when
       * a user manually calls the refresh method in a
       * component create callback before the native
       * refresher is setup.
       */
      _this5.setCss(0, '', false, '');
      _this5.nativeRefresher = true;
      const pullingSpinner = _this5.el.querySelector('ion-refresher-content .refresher-pulling ion-spinner');
      const refreshingSpinner = _this5.el.querySelector('ion-refresher-content .refresher-refreshing ion-spinner');
      if ((0,_ionic_global_c74e4951_js__WEBPACK_IMPORTED_MODULE_2__.b)(_this5) === 'ios') {
        _this5.setupiOSNativeRefresher(pullingSpinner, refreshingSpinner);
      } else {
        _this5.setupMDNativeRefresher(contentEl, pullingSpinner, refreshingSpinner);
      }
    })();
  }
  componentDidUpdate() {
    this.checkNativeRefresher();
  }
  connectedCallback() {
    var _this6 = this;
    return (0,_opt_atlassian_pipelines_agent_build_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_0__["default"])(function* () {
      if (_this6.el.getAttribute('slot') !== 'fixed') {
        console.error('Make sure you use: <ion-refresher slot="fixed">');
        return;
      }
      const contentEl = _this6.el.closest(_index_e6d1a8be_js__WEBPACK_IMPORTED_MODULE_4__.I);
      if (!contentEl) {
        (0,_index_e6d1a8be_js__WEBPACK_IMPORTED_MODULE_4__.p)(_this6.el);
        return;
      }
      /**
       * Waits for the content to be ready before querying the scroll
       * or the background content element.
       */
      (0,_helpers_3b390e48_js__WEBPACK_IMPORTED_MODULE_5__.c)(contentEl, /*#__PURE__*/(0,_opt_atlassian_pipelines_agent_build_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_0__["default"])(function* () {
        const customScrollTarget = contentEl.querySelector(_index_e6d1a8be_js__WEBPACK_IMPORTED_MODULE_4__.b);
        /**
         * Query the custom scroll target (if available), first. In refresher implementations,
         * the ion-refresher element will always be a direct child of ion-content (slot="fixed"). By
         * querying the custom scroll target first and falling back to the ion-content element,
         * the correct scroll element will be returned by the implementation.
         */
        _this6.scrollEl = yield (0,_index_e6d1a8be_js__WEBPACK_IMPORTED_MODULE_4__.g)(customScrollTarget !== null && customScrollTarget !== void 0 ? customScrollTarget : contentEl);
        /**
         * Query the background content element from the host ion-content element directly.
         */
        _this6.backgroundContentEl = yield contentEl.getBackgroundElement();
        if (yield shouldUseNativeRefresher(_this6.el, (0,_ionic_global_c74e4951_js__WEBPACK_IMPORTED_MODULE_2__.b)(_this6))) {
          _this6.setupNativeRefresher(contentEl);
        } else {
          _this6.gesture = (yield Promise.resolve(/*! import() */).then(__webpack_require__.bind(__webpack_require__, /*! ./index-422b6e83.js */ 88759))).createGesture({
            el: contentEl,
            gestureName: 'refresher',
            gesturePriority: 31,
            direction: 'y',
            threshold: 20,
            passive: false,
            canStart: () => _this6.canStart(),
            onStart: () => _this6.onStart(),
            onMove: ev => _this6.onMove(ev),
            onEnd: () => _this6.onEnd()
          });
          _this6.disabledChanged();
        }
      }));
    })();
  }
  disconnectedCallback() {
    this.destroyNativeRefresher();
    this.scrollEl = undefined;
    if (this.gesture) {
      this.gesture.destroy();
      this.gesture = undefined;
    }
  }
  /**
   * Call `complete()` when your async operation has completed.
   * For example, the `refreshing` state is while the app is performing
   * an asynchronous operation, such as receiving more data from an
   * AJAX request. Once the data has been received, you then call this
   * method to signify that the refreshing has completed and to close
   * the refresher. This method also changes the refresher's state from
   * `refreshing` to `completing`.
   */
  complete() {
    var _this7 = this;
    return (0,_opt_atlassian_pipelines_agent_build_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_0__["default"])(function* () {
      if (_this7.nativeRefresher) {
        _this7.needsCompletion = true;
        // Do not reset scroll el until user removes pointer from screen
        if (!_this7.pointerDown) {
          (0,_helpers_3b390e48_js__WEBPACK_IMPORTED_MODULE_5__.r)(() => (0,_helpers_3b390e48_js__WEBPACK_IMPORTED_MODULE_5__.r)(() => _this7.resetNativeRefresher(_this7.elementToTransform, 32 /* RefresherState.Completing */)));
        }
      } else {
        _this7.close(32 /* RefresherState.Completing */, '120ms');
      }
    })();
  }
  /**
   * Changes the refresher's state from `refreshing` to `cancelling`.
   */
  cancel() {
    var _this8 = this;
    return (0,_opt_atlassian_pipelines_agent_build_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_0__["default"])(function* () {
      if (_this8.nativeRefresher) {
        // Do not reset scroll el until user removes pointer from screen
        if (!_this8.pointerDown) {
          (0,_helpers_3b390e48_js__WEBPACK_IMPORTED_MODULE_5__.r)(() => (0,_helpers_3b390e48_js__WEBPACK_IMPORTED_MODULE_5__.r)(() => _this8.resetNativeRefresher(_this8.elementToTransform, 16 /* RefresherState.Cancelling */)));
        }
      } else {
        _this8.close(16 /* RefresherState.Cancelling */, '');
      }
    })();
  }
  /**
   * A number representing how far down the user has pulled.
   * The number `0` represents the user hasn't pulled down at all. The
   * number `1`, and anything greater than `1`, represents that the user
   * has pulled far enough down that when they let go then the refresh will
   * happen. If they let go and the number is less than `1`, then the
   * refresh will not happen, and the content will return to it's original
   * position.
   */
  getProgress() {
    return Promise.resolve(this.progress);
  }
  canStart() {
    if (!this.scrollEl) {
      return false;
    }
    if (this.state !== 1 /* RefresherState.Inactive */) {
      return false;
    }
    // if the scrollTop is greater than zero then it's
    // not possible to pull the content down yet
    if (this.scrollEl.scrollTop > 0) {
      return false;
    }
    return true;
  }
  onStart() {
    this.progress = 0;
    this.state = 1 /* RefresherState.Inactive */;
    this.memoizeOverflowStyle();
  }
  onMove(detail) {
    if (!this.scrollEl) {
      return;
    }
    // this method can get called like a bazillion times per second,
    // so it's built to be as efficient as possible, and does its
    // best to do any DOM read/writes only when absolutely necessary
    // if multi-touch then get out immediately
    const ev = detail.event;
    if (ev.touches !== undefined && ev.touches.length > 1) {
      return;
    }
    // do nothing if it's actively refreshing
    // or it's in the way of closing
    // or this was never a startY
    if ((this.state & 56 /* RefresherState._BUSY_ */) !== 0) {
      return;
    }
    const pullFactor = Number.isNaN(this.pullFactor) || this.pullFactor < 0 ? 1 : this.pullFactor;
    const deltaY = detail.deltaY * pullFactor;
    // don't bother if they're scrolling up
    // and have not already started dragging
    if (deltaY <= 0) {
      // the current Y is higher than the starting Y
      // so they scrolled up enough to be ignored
      this.progress = 0;
      this.state = 1 /* RefresherState.Inactive */;
      if (this.appliedStyles) {
        // reset the styles only if they were applied
        this.setCss(0, '', false, '');
        return;
      }
      return;
    }
    if (this.state === 1 /* RefresherState.Inactive */) {
      // this refresh is not already actively pulling down
      // get the content's scrollTop
      const scrollHostScrollTop = this.scrollEl.scrollTop;
      // if the scrollTop is greater than zero then it's
      // not possible to pull the content down yet
      if (scrollHostScrollTop > 0) {
        this.progress = 0;
        return;
      }
      // content scrolled all the way to the top, and dragging down
      this.state = 2 /* RefresherState.Pulling */;
    }
    // prevent native scroll events
    if (ev.cancelable) {
      ev.preventDefault();
    }
    // the refresher is actively pulling at this point
    // move the scroll element within the content element
    this.setCss(deltaY, '0ms', true, '');
    if (deltaY === 0) {
      // don't continue if there's no delta yet
      this.progress = 0;
      return;
    }
    const pullMin = this.pullMin;
    // set pull progress
    this.progress = deltaY / pullMin;
    // emit "start" if it hasn't started yet
    if (!this.didStart) {
      this.didStart = true;
      this.ionStart.emit();
    }
    // emit "pulling" on every move
    this.ionPull.emit();
    // do nothing if the delta is less than the pull threshold
    if (deltaY < pullMin) {
      // ensure it stays in the pulling state, cuz its not ready yet
      this.state = 2 /* RefresherState.Pulling */;
      return;
    }
    if (deltaY > this.pullMax) {
      // they pulled farther than the max, so kick off the refresh
      this.beginRefresh();
      return;
    }
    // pulled farther than the pull min!!
    // it is now in the `ready` state!!
    // if they let go then it'll refresh, kerpow!!
    this.state = 4 /* RefresherState.Ready */;
    return;
  }
  onEnd() {
    // only run in a zone when absolutely necessary
    if (this.state === 4 /* RefresherState.Ready */) {
      // they pulled down far enough, so it's ready to refresh
      this.beginRefresh();
    } else if (this.state === 2 /* RefresherState.Pulling */) {
      // they were pulling down, but didn't pull down far enough
      // set the content back to it's original location
      // and close the refresher
      // set that the refresh is actively cancelling
      this.cancel();
    } else if (this.state === 1 /* RefresherState.Inactive */) {
      /**
       * The pull to refresh gesture was aborted
       * so we should immediately restore any overflow styles
       * that have been modified. Do not call this.cancel
       * because the styles will only be reset after a timeout.
       * If the gesture is aborted then scrolling should be
       * available right away.
       */
      this.restoreOverflowStyle();
    }
  }
  beginRefresh() {
    // assumes we're already back in a zone
    // they pulled down far enough, so it's ready to refresh
    this.state = 8 /* RefresherState.Refreshing */;
    // place the content in a hangout position while it thinks
    this.setCss(this.pullMin, this.snapbackDuration, true, '');
    // emit "refresh" because it was pulled down far enough
    // and they let go to begin refreshing
    this.ionRefresh.emit({
      complete: this.complete.bind(this)
    });
  }
  close(state, delay) {
    // create fallback timer incase something goes wrong with transitionEnd event
    setTimeout(() => {
      this.state = 1 /* RefresherState.Inactive */;
      this.progress = 0;
      this.didStart = false;
      /**
       * Reset any overflow styles so the
       * user can scroll again.
       */
      this.setCss(0, '0ms', false, '', true);
    }, 600);
    // reset the styles on the scroll element
    // set that the refresh is actively cancelling/completing
    this.state = state;
    this.setCss(0, this.closeDuration, true, delay);
  }
  setCss(y, duration, overflowVisible, delay, shouldRestoreOverflowStyle = false) {
    if (this.nativeRefresher) {
      return;
    }
    this.appliedStyles = y > 0;
    (0,_index_8e692445_js__WEBPACK_IMPORTED_MODULE_1__.c)(() => {
      if (this.scrollEl && this.backgroundContentEl) {
        const scrollStyle = this.scrollEl.style;
        const backgroundStyle = this.backgroundContentEl.style;
        scrollStyle.transform = backgroundStyle.transform = y > 0 ? `translateY(${y}px) translateZ(0px)` : '';
        scrollStyle.transitionDuration = backgroundStyle.transitionDuration = duration;
        scrollStyle.transitionDelay = backgroundStyle.transitionDelay = delay;
        scrollStyle.overflow = overflowVisible ? 'hidden' : '';
      }
      /**
       * Reset the overflow styles only once
       * the pull to refresh effect has been closed.
       * This ensures that the gesture is done
       * and the refresh operation has either
       * been aborted or has completed.
       */
      if (shouldRestoreOverflowStyle) {
        this.restoreOverflowStyle();
      }
    });
  }
  memoizeOverflowStyle() {
    if (this.scrollEl) {
      const {
        overflow,
        overflowX,
        overflowY
      } = this.scrollEl.style;
      this.overflowStyles = {
        overflow: overflow !== null && overflow !== void 0 ? overflow : '',
        overflowX: overflowX !== null && overflowX !== void 0 ? overflowX : '',
        overflowY: overflowY !== null && overflowY !== void 0 ? overflowY : ''
      };
    }
  }
  restoreOverflowStyle() {
    if (this.overflowStyles !== undefined && this.scrollEl !== undefined) {
      const {
        overflow,
        overflowX,
        overflowY
      } = this.overflowStyles;
      this.scrollEl.style.overflow = overflow;
      this.scrollEl.style.overflowX = overflowX;
      this.scrollEl.style.overflowY = overflowY;
      this.overflowStyles = undefined;
    }
  }
  render() {
    const mode = (0,_ionic_global_c74e4951_js__WEBPACK_IMPORTED_MODULE_2__.b)(this);
    return (0,_index_8e692445_js__WEBPACK_IMPORTED_MODULE_1__.h)(_index_8e692445_js__WEBPACK_IMPORTED_MODULE_1__.H, {
      slot: "fixed",
      class: {
        [mode]: true,
        // Used internally for styling
        [`refresher-${mode}`]: true,
        'refresher-native': this.nativeRefresher,
        'refresher-active': this.state !== 1 /* RefresherState.Inactive */,
        'refresher-pulling': this.state === 2 /* RefresherState.Pulling */,
        'refresher-ready': this.state === 4 /* RefresherState.Ready */,
        'refresher-refreshing': this.state === 8 /* RefresherState.Refreshing */,
        'refresher-cancelling': this.state === 16 /* RefresherState.Cancelling */,
        'refresher-completing': this.state === 32 /* RefresherState.Completing */
      }
    });
  }

  get el() {
    return (0,_index_8e692445_js__WEBPACK_IMPORTED_MODULE_1__.i)(this);
  }
  static get watchers() {
    return {
      "disabled": ["disabledChanged"]
    };
  }
};
Refresher.style = {
  ios: refresherIosCss,
  md: refresherMdCss
};
const RefresherContent = class {
  constructor(hostRef) {
    (0,_index_8e692445_js__WEBPACK_IMPORTED_MODULE_1__.r)(this, hostRef);
    this.customHTMLEnabled = _ionic_global_c74e4951_js__WEBPACK_IMPORTED_MODULE_2__.c.get('innerHTMLTemplatesEnabled', _config_d4f612d2_js__WEBPACK_IMPORTED_MODULE_9__.E);
  }
  componentWillLoad() {
    if (this.pullingIcon === undefined) {
      const mode = (0,_ionic_global_c74e4951_js__WEBPACK_IMPORTED_MODULE_2__.b)(this);
      const overflowRefresher = this.el.style.webkitOverflowScrolling !== undefined ? 'lines' : _index_2bcb741c_js__WEBPACK_IMPORTED_MODULE_8__.i;
      this.pullingIcon = _ionic_global_c74e4951_js__WEBPACK_IMPORTED_MODULE_2__.c.get('refreshingIcon', mode === 'ios' && (0,_ionic_global_c74e4951_js__WEBPACK_IMPORTED_MODULE_2__.a)('mobile') ? _ionic_global_c74e4951_js__WEBPACK_IMPORTED_MODULE_2__.c.get('spinner', overflowRefresher) : 'circular');
    }
    if (this.refreshingSpinner === undefined) {
      const mode = (0,_ionic_global_c74e4951_js__WEBPACK_IMPORTED_MODULE_2__.b)(this);
      this.refreshingSpinner = _ionic_global_c74e4951_js__WEBPACK_IMPORTED_MODULE_2__.c.get('refreshingSpinner', _ionic_global_c74e4951_js__WEBPACK_IMPORTED_MODULE_2__.c.get('spinner', mode === 'ios' ? 'lines' : 'circular'));
    }
  }
  renderPullingText() {
    const {
      customHTMLEnabled,
      pullingText
    } = this;
    if (customHTMLEnabled) {
      return (0,_index_8e692445_js__WEBPACK_IMPORTED_MODULE_1__.h)("div", {
        class: "refresher-pulling-text",
        innerHTML: (0,_config_d4f612d2_js__WEBPACK_IMPORTED_MODULE_9__.a)(pullingText)
      });
    }
    return (0,_index_8e692445_js__WEBPACK_IMPORTED_MODULE_1__.h)("div", {
      class: "refresher-pulling-text"
    }, pullingText);
  }
  renderRefreshingText() {
    const {
      customHTMLEnabled,
      refreshingText
    } = this;
    if (customHTMLEnabled) {
      return (0,_index_8e692445_js__WEBPACK_IMPORTED_MODULE_1__.h)("div", {
        class: "refresher-refreshing-text",
        innerHTML: (0,_config_d4f612d2_js__WEBPACK_IMPORTED_MODULE_9__.a)(refreshingText)
      });
    }
    return (0,_index_8e692445_js__WEBPACK_IMPORTED_MODULE_1__.h)("div", {
      class: "refresher-refreshing-text"
    }, refreshingText);
  }
  render() {
    const pullingIcon = this.pullingIcon;
    const hasSpinner = pullingIcon != null && _spinner_configs_5d6b6fe7_js__WEBPACK_IMPORTED_MODULE_10__.S[pullingIcon] !== undefined;
    const mode = (0,_ionic_global_c74e4951_js__WEBPACK_IMPORTED_MODULE_2__.b)(this);
    return (0,_index_8e692445_js__WEBPACK_IMPORTED_MODULE_1__.h)(_index_8e692445_js__WEBPACK_IMPORTED_MODULE_1__.H, {
      class: mode
    }, (0,_index_8e692445_js__WEBPACK_IMPORTED_MODULE_1__.h)("div", {
      class: "refresher-pulling"
    }, this.pullingIcon && hasSpinner && (0,_index_8e692445_js__WEBPACK_IMPORTED_MODULE_1__.h)("div", {
      class: "refresher-pulling-icon"
    }, (0,_index_8e692445_js__WEBPACK_IMPORTED_MODULE_1__.h)("div", {
      class: "spinner-arrow-container"
    }, (0,_index_8e692445_js__WEBPACK_IMPORTED_MODULE_1__.h)("ion-spinner", {
      name: this.pullingIcon,
      paused: true
    }), mode === 'md' && this.pullingIcon === 'circular' && (0,_index_8e692445_js__WEBPACK_IMPORTED_MODULE_1__.h)("div", {
      class: "arrow-container"
    }, (0,_index_8e692445_js__WEBPACK_IMPORTED_MODULE_1__.h)("ion-icon", {
      icon: _index_2bcb741c_js__WEBPACK_IMPORTED_MODULE_8__.h
    })))), this.pullingIcon && !hasSpinner && (0,_index_8e692445_js__WEBPACK_IMPORTED_MODULE_1__.h)("div", {
      class: "refresher-pulling-icon"
    }, (0,_index_8e692445_js__WEBPACK_IMPORTED_MODULE_1__.h)("ion-icon", {
      icon: this.pullingIcon,
      lazy: false
    })), this.pullingText !== undefined && this.renderPullingText()), (0,_index_8e692445_js__WEBPACK_IMPORTED_MODULE_1__.h)("div", {
      class: "refresher-refreshing"
    }, this.refreshingSpinner && (0,_index_8e692445_js__WEBPACK_IMPORTED_MODULE_1__.h)("div", {
      class: "refresher-refreshing-icon"
    }, (0,_index_8e692445_js__WEBPACK_IMPORTED_MODULE_1__.h)("ion-spinner", {
      name: this.refreshingSpinner
    })), this.refreshingText !== undefined && this.renderRefreshingText()));
  }
  get el() {
    return (0,_index_8e692445_js__WEBPACK_IMPORTED_MODULE_1__.i)(this);
  }
};


/***/ })

}]);
//# sourceMappingURL=290.17308cfeedc83c95.js.map