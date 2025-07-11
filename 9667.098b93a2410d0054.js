"use strict";
(self["webpackChunkapp"] = self["webpackChunkapp"] || []).push([[9667],{

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

/***/ 69667:
/*!**************************************************************************!*\
  !*** ./node_modules/@ionic/core/dist/esm/ion-infinite-scroll_2.entry.js ***!
  \**************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "ion_infinite_scroll": () => (/* binding */ InfiniteScroll),
/* harmony export */   "ion_infinite_scroll_content": () => (/* binding */ InfiniteScrollContent)
/* harmony export */ });
/* harmony import */ var _opt_atlassian_pipelines_agent_build_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/esm/asyncToGenerator.js */ 71670);
/* harmony import */ var _index_8e692445_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./index-8e692445.js */ 91559);
/* harmony import */ var _ionic_global_c74e4951_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./ionic-global-c74e4951.js */ 95823);
/* harmony import */ var _index_e6d1a8be_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./index-e6d1a8be.js */ 24311);
/* harmony import */ var _config_d4f612d2_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./config-d4f612d2.js */ 75656);
/* harmony import */ var _helpers_3b390e48_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./helpers-3b390e48.js */ 29259);
/* harmony import */ var _index_c4b11676_js__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./index-c4b11676.js */ 99273);

/*!
 * (C) Ionic http://ionicframework.com - MIT License
 */






const infiniteScrollCss = "ion-infinite-scroll{display:none;width:100%}.infinite-scroll-enabled{display:block}";
const InfiniteScroll = class {
  constructor(hostRef) {
    (0,_index_8e692445_js__WEBPACK_IMPORTED_MODULE_1__.r)(this, hostRef);
    this.ionInfinite = (0,_index_8e692445_js__WEBPACK_IMPORTED_MODULE_1__.e)(this, "ionInfinite", 7);
    this.thrPx = 0;
    this.thrPc = 0;
    this.didFire = false;
    this.isBusy = false;
    this.isLoading = false;
    /**
     * The threshold distance from the bottom
     * of the content to call the `infinite` output event when scrolled.
     * The threshold value can be either a percent, or
     * in pixels. For example, use the value of `10%` for the `infinite`
     * output event to get called when the user has scrolled 10%
     * from the bottom of the page. Use the value `100px` when the
     * scroll is within 100 pixels from the bottom of the page.
     */
    this.threshold = '15%';
    /**
     * If `true`, the infinite scroll will be hidden and scroll event listeners
     * will be removed.
     *
     * Set this to true to disable the infinite scroll from actively
     * trying to receive new data while scrolling. This is useful
     * when it is known that there is no more data that can be added, and
     * the infinite scroll is no longer needed.
     */
    this.disabled = false;
    /**
     * The position of the infinite scroll element.
     * The value can be either `top` or `bottom`.
     */
    this.position = 'bottom';
    this.onScroll = () => {
      const scrollEl = this.scrollEl;
      if (!scrollEl || !this.canStart()) {
        return 1;
      }
      const infiniteHeight = this.el.offsetHeight;
      if (infiniteHeight === 0) {
        // if there is no height of this element then do nothing
        return 2;
      }
      const scrollTop = scrollEl.scrollTop;
      const scrollHeight = scrollEl.scrollHeight;
      const height = scrollEl.offsetHeight;
      const threshold = this.thrPc !== 0 ? height * this.thrPc : this.thrPx;
      const distanceFromInfinite = this.position === 'bottom' ? scrollHeight - infiniteHeight - scrollTop - threshold - height : scrollTop - infiniteHeight - threshold;
      if (distanceFromInfinite < 0) {
        if (!this.didFire) {
          this.isLoading = true;
          this.didFire = true;
          this.ionInfinite.emit();
          return 3;
        }
      } else {
        this.didFire = false;
      }
      return 4;
    };
  }
  thresholdChanged() {
    const val = this.threshold;
    if (val.lastIndexOf('%') > -1) {
      this.thrPx = 0;
      this.thrPc = parseFloat(val) / 100;
    } else {
      this.thrPx = parseFloat(val);
      this.thrPc = 0;
    }
  }
  disabledChanged() {
    const disabled = this.disabled;
    if (disabled) {
      this.isLoading = false;
      this.isBusy = false;
    }
    this.enableScrollEvents(!disabled);
  }
  connectedCallback() {
    var _this = this;
    return (0,_opt_atlassian_pipelines_agent_build_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_0__["default"])(function* () {
      const contentEl = (0,_index_e6d1a8be_js__WEBPACK_IMPORTED_MODULE_3__.f)(_this.el);
      if (!contentEl) {
        (0,_index_e6d1a8be_js__WEBPACK_IMPORTED_MODULE_3__.p)(_this.el);
        return;
      }
      _this.scrollEl = yield (0,_index_e6d1a8be_js__WEBPACK_IMPORTED_MODULE_3__.g)(contentEl);
      _this.thresholdChanged();
      _this.disabledChanged();
      if (_this.position === 'top') {
        (0,_index_8e692445_js__WEBPACK_IMPORTED_MODULE_1__.c)(() => {
          if (_this.scrollEl) {
            _this.scrollEl.scrollTop = _this.scrollEl.scrollHeight - _this.scrollEl.clientHeight;
          }
        });
      }
    })();
  }
  disconnectedCallback() {
    this.enableScrollEvents(false);
    this.scrollEl = undefined;
  }
  /**
   * Call `complete()` within the `ionInfinite` output event handler when
   * your async operation has completed. For example, the `loading`
   * state is while the app is performing an asynchronous operation,
   * such as receiving more data from an AJAX request to add more items
   * to a data list. Once the data has been received and UI updated, you
   * then call this method to signify that the loading has completed.
   * This method will change the infinite scroll's state from `loading`
   * to `enabled`.
   */
  complete() {
    var _this2 = this;
    return (0,_opt_atlassian_pipelines_agent_build_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_0__["default"])(function* () {
      const scrollEl = _this2.scrollEl;
      if (!_this2.isLoading || !scrollEl) {
        return;
      }
      _this2.isLoading = false;
      if (_this2.position === 'top') {
        /**
         * New content is being added at the top, but the scrollTop position stays the same,
         * which causes a scroll jump visually. This algorithm makes sure to prevent this.
         * (Frame 1)
         *    - complete() is called, but the UI hasn't had time to update yet.
         *    - Save the current content dimensions.
         *    - Wait for the next frame using _dom.read, so the UI will be updated.
         * (Frame 2)
         *    - Read the new content dimensions.
         *    - Calculate the height difference and the new scroll position.
         *    - Delay the scroll position change until other possible dom reads are done using _dom.write to be performant.
         * (Still frame 2, if I'm correct)
         *    - Change the scroll position (= visually maintain the scroll position).
         *    - Change the state to re-enable the InfiniteScroll.
         *    - This should be after changing the scroll position, or it could
         *    cause the InfiniteScroll to be triggered again immediately.
         * (Frame 3)
         *    Done.
         */
        _this2.isBusy = true;
        // ******** DOM READ ****************
        // Save the current content dimensions before the UI updates
        const prev = scrollEl.scrollHeight - scrollEl.scrollTop;
        // ******** DOM READ ****************
        requestAnimationFrame(() => {
          (0,_index_8e692445_js__WEBPACK_IMPORTED_MODULE_1__.f)(() => {
            // UI has updated, save the new content dimensions
            const scrollHeight = scrollEl.scrollHeight;
            // New content was added on top, so the scroll position should be changed immediately to prevent it from jumping around
            const newScrollTop = scrollHeight - prev;
            // ******** DOM WRITE ****************
            requestAnimationFrame(() => {
              (0,_index_8e692445_js__WEBPACK_IMPORTED_MODULE_1__.c)(() => {
                scrollEl.scrollTop = newScrollTop;
                _this2.isBusy = false;
              });
            });
          });
        });
      }
    })();
  }
  canStart() {
    return !this.disabled && !this.isBusy && !!this.scrollEl && !this.isLoading;
  }
  enableScrollEvents(shouldListen) {
    if (this.scrollEl) {
      if (shouldListen) {
        this.scrollEl.addEventListener('scroll', this.onScroll);
      } else {
        this.scrollEl.removeEventListener('scroll', this.onScroll);
      }
    }
  }
  render() {
    const mode = (0,_ionic_global_c74e4951_js__WEBPACK_IMPORTED_MODULE_2__.b)(this);
    const disabled = this.disabled;
    return (0,_index_8e692445_js__WEBPACK_IMPORTED_MODULE_1__.h)(_index_8e692445_js__WEBPACK_IMPORTED_MODULE_1__.H, {
      class: {
        [mode]: true,
        'infinite-scroll-loading': this.isLoading,
        'infinite-scroll-enabled': !disabled
      }
    });
  }
  get el() {
    return (0,_index_8e692445_js__WEBPACK_IMPORTED_MODULE_1__.i)(this);
  }
  static get watchers() {
    return {
      "threshold": ["thresholdChanged"],
      "disabled": ["disabledChanged"]
    };
  }
};
InfiniteScroll.style = infiniteScrollCss;
const infiniteScrollContentIosCss = "ion-infinite-scroll-content{display:-ms-flexbox;display:flex;-ms-flex-direction:column;flex-direction:column;-ms-flex-pack:center;justify-content:center;min-height:84px;text-align:center;-webkit-user-select:none;-moz-user-select:none;-ms-user-select:none;user-select:none}.infinite-loading{margin-left:0;margin-right:0;margin-top:0;margin-bottom:32px;display:none;width:100%}.infinite-loading-text{margin-left:32px;margin-right:32px;margin-top:4px;margin-bottom:0}@supports ((-webkit-margin-start: 0) or (margin-inline-start: 0)) or (-webkit-margin-start: 0){.infinite-loading-text{margin-left:unset;margin-right:unset;-webkit-margin-start:32px;margin-inline-start:32px;-webkit-margin-end:32px;margin-inline-end:32px}}.infinite-scroll-loading ion-infinite-scroll-content>.infinite-loading{display:block}.infinite-scroll-content-ios .infinite-loading-text{color:var(--ion-color-step-600, #666666)}.infinite-scroll-content-ios .infinite-loading-spinner .spinner-lines-ios line,.infinite-scroll-content-ios .infinite-loading-spinner .spinner-lines-small-ios line,.infinite-scroll-content-ios .infinite-loading-spinner .spinner-crescent circle{stroke:var(--ion-color-step-600, #666666)}.infinite-scroll-content-ios .infinite-loading-spinner .spinner-bubbles circle,.infinite-scroll-content-ios .infinite-loading-spinner .spinner-circles circle,.infinite-scroll-content-ios .infinite-loading-spinner .spinner-dots circle{fill:var(--ion-color-step-600, #666666)}";
const infiniteScrollContentMdCss = "ion-infinite-scroll-content{display:-ms-flexbox;display:flex;-ms-flex-direction:column;flex-direction:column;-ms-flex-pack:center;justify-content:center;min-height:84px;text-align:center;-webkit-user-select:none;-moz-user-select:none;-ms-user-select:none;user-select:none}.infinite-loading{margin-left:0;margin-right:0;margin-top:0;margin-bottom:32px;display:none;width:100%}.infinite-loading-text{margin-left:32px;margin-right:32px;margin-top:4px;margin-bottom:0}@supports ((-webkit-margin-start: 0) or (margin-inline-start: 0)) or (-webkit-margin-start: 0){.infinite-loading-text{margin-left:unset;margin-right:unset;-webkit-margin-start:32px;margin-inline-start:32px;-webkit-margin-end:32px;margin-inline-end:32px}}.infinite-scroll-loading ion-infinite-scroll-content>.infinite-loading{display:block}.infinite-scroll-content-md .infinite-loading-text{color:var(--ion-color-step-600, #666666)}.infinite-scroll-content-md .infinite-loading-spinner .spinner-lines-md line,.infinite-scroll-content-md .infinite-loading-spinner .spinner-lines-small-md line,.infinite-scroll-content-md .infinite-loading-spinner .spinner-crescent circle{stroke:var(--ion-color-step-600, #666666)}.infinite-scroll-content-md .infinite-loading-spinner .spinner-bubbles circle,.infinite-scroll-content-md .infinite-loading-spinner .spinner-circles circle,.infinite-scroll-content-md .infinite-loading-spinner .spinner-dots circle{fill:var(--ion-color-step-600, #666666)}";
const InfiniteScrollContent = class {
  constructor(hostRef) {
    (0,_index_8e692445_js__WEBPACK_IMPORTED_MODULE_1__.r)(this, hostRef);
    this.customHTMLEnabled = _ionic_global_c74e4951_js__WEBPACK_IMPORTED_MODULE_2__.c.get('innerHTMLTemplatesEnabled', _config_d4f612d2_js__WEBPACK_IMPORTED_MODULE_4__.E);
  }
  componentDidLoad() {
    if (this.loadingSpinner === undefined) {
      const mode = (0,_ionic_global_c74e4951_js__WEBPACK_IMPORTED_MODULE_2__.b)(this);
      this.loadingSpinner = _ionic_global_c74e4951_js__WEBPACK_IMPORTED_MODULE_2__.c.get('infiniteLoadingSpinner', _ionic_global_c74e4951_js__WEBPACK_IMPORTED_MODULE_2__.c.get('spinner', mode === 'ios' ? 'lines' : 'crescent'));
    }
  }
  renderLoadingText() {
    const {
      customHTMLEnabled,
      loadingText
    } = this;
    if (customHTMLEnabled) {
      return (0,_index_8e692445_js__WEBPACK_IMPORTED_MODULE_1__.h)("div", {
        class: "infinite-loading-text",
        innerHTML: (0,_config_d4f612d2_js__WEBPACK_IMPORTED_MODULE_4__.a)(loadingText)
      });
    }
    return (0,_index_8e692445_js__WEBPACK_IMPORTED_MODULE_1__.h)("div", {
      class: "infinite-loading-text"
    }, this.loadingText);
  }
  render() {
    const mode = (0,_ionic_global_c74e4951_js__WEBPACK_IMPORTED_MODULE_2__.b)(this);
    return (0,_index_8e692445_js__WEBPACK_IMPORTED_MODULE_1__.h)(_index_8e692445_js__WEBPACK_IMPORTED_MODULE_1__.H, {
      class: {
        [mode]: true,
        // Used internally for styling
        [`infinite-scroll-content-${mode}`]: true
      }
    }, (0,_index_8e692445_js__WEBPACK_IMPORTED_MODULE_1__.h)("div", {
      class: "infinite-loading"
    }, this.loadingSpinner && (0,_index_8e692445_js__WEBPACK_IMPORTED_MODULE_1__.h)("div", {
      class: "infinite-loading-spinner"
    }, (0,_index_8e692445_js__WEBPACK_IMPORTED_MODULE_1__.h)("ion-spinner", {
      name: this.loadingSpinner
    })), this.loadingText !== undefined && this.renderLoadingText()));
  }
};
InfiniteScrollContent.style = {
  ios: infiniteScrollContentIosCss,
  md: infiniteScrollContentMdCss
};


/***/ })

}]);
//# sourceMappingURL=9667.098b93a2410d0054.js.map