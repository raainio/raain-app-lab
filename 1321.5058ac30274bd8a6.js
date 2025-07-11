"use strict";
(self["webpackChunkapp"] = self["webpackChunkapp"] || []).push([[1321],{

/***/ 81321:
/*!*******************************************************************!*\
  !*** ./node_modules/@ionic/core/dist/esm/input-shims-8459e7d9.js ***!
  \*******************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "startInputShims": () => (/* binding */ startInputShims)
/* harmony export */ });
/* harmony import */ var _opt_atlassian_pipelines_agent_build_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/esm/asyncToGenerator.js */ 71670);
/* harmony import */ var _index_e6d1a8be_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./index-e6d1a8be.js */ 24311);
/* harmony import */ var _helpers_3b390e48_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./helpers-3b390e48.js */ 29259);
/* harmony import */ var _index_c4b11676_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./index-c4b11676.js */ 99273);

/*!
 * (C) Ionic http://ionicframework.com - MIT License
 */



const cloneMap = new WeakMap();
const relocateInput = (componentEl, inputEl, shouldRelocate, inputRelativeY = 0, disabledClonedInput = false) => {
  if (cloneMap.has(componentEl) === shouldRelocate) {
    return;
  }
  if (shouldRelocate) {
    addClone(componentEl, inputEl, inputRelativeY, disabledClonedInput);
  } else {
    removeClone(componentEl, inputEl);
  }
};
// TODO(FW-2832): type
const isFocused = input => {
  return input === input.getRootNode().activeElement;
};
const addClone = (componentEl, inputEl, inputRelativeY, disabledClonedInput = false) => {
  // this allows for the actual input to receive the focus from
  // the user's touch event, but before it receives focus, it
  // moves the actual input to a location that will not screw
  // up the app's layout, and does not allow the native browser
  // to attempt to scroll the input into place (messing up headers/footers)
  // the cloned input fills the area of where native input should be
  // while the native input fakes out the browser by relocating itself
  // before it receives the actual focus event
  // We hide the focused input (with the visible caret) invisible by making it scale(0),
  const parentEl = inputEl.parentNode;
  // DOM WRITES
  const clonedEl = inputEl.cloneNode(false);
  clonedEl.classList.add('cloned-input');
  clonedEl.tabIndex = -1;
  /**
   * Making the cloned input disabled prevents
   * Chrome for Android from still scrolling
   * the entire page since this cloned input
   * will briefly be hidden by the keyboard
   * even though it is not focused.
   *
   * This is not needed on iOS. While this
   * does not cause functional issues on iOS,
   * the input still appears slightly dimmed even
   * if we set opacity: 1.
   */
  if (disabledClonedInput) {
    clonedEl.disabled = true;
  }
  parentEl.appendChild(clonedEl);
  cloneMap.set(componentEl, clonedEl);
  const doc = componentEl.ownerDocument;
  const tx = doc.dir === 'rtl' ? 9999 : -9999;
  componentEl.style.pointerEvents = 'none';
  inputEl.style.transform = `translate3d(${tx}px,${inputRelativeY}px,0) scale(0)`;
};
const removeClone = (componentEl, inputEl) => {
  const clone = cloneMap.get(componentEl);
  if (clone) {
    cloneMap.delete(componentEl);
    clone.remove();
  }
  componentEl.style.pointerEvents = '';
  inputEl.style.transform = '';
};
const enableHideCaretOnScroll = (componentEl, inputEl, scrollEl) => {
  if (!scrollEl || !inputEl) {
    return () => {
      return;
    };
  }
  const scrollHideCaret = shouldHideCaret => {
    if (isFocused(inputEl)) {
      relocateInput(componentEl, inputEl, shouldHideCaret);
    }
  };
  const onBlur = () => relocateInput(componentEl, inputEl, false);
  const hideCaret = () => scrollHideCaret(true);
  const showCaret = () => scrollHideCaret(false);
  (0,_helpers_3b390e48_js__WEBPACK_IMPORTED_MODULE_2__.a)(scrollEl, 'ionScrollStart', hideCaret);
  (0,_helpers_3b390e48_js__WEBPACK_IMPORTED_MODULE_2__.a)(scrollEl, 'ionScrollEnd', showCaret);
  inputEl.addEventListener('blur', onBlur);
  return () => {
    (0,_helpers_3b390e48_js__WEBPACK_IMPORTED_MODULE_2__.b)(scrollEl, 'ionScrollStart', hideCaret);
    (0,_helpers_3b390e48_js__WEBPACK_IMPORTED_MODULE_2__.b)(scrollEl, 'ionScrollEnd', showCaret);
    inputEl.removeEventListener('blur', onBlur);
  };
};
const SKIP_SELECTOR = 'input, textarea, [no-blur], [contenteditable]';
const enableInputBlurring = () => {
  let focused = true;
  let didScroll = false;
  const doc = document;
  const onScroll = () => {
    didScroll = true;
  };
  const onFocusin = () => {
    focused = true;
  };
  const onTouchend = ev => {
    // if app did scroll return early
    if (didScroll) {
      didScroll = false;
      return;
    }
    const active = doc.activeElement;
    if (!active) {
      return;
    }
    // only blur if the active element is a text-input or a textarea
    if (active.matches(SKIP_SELECTOR)) {
      return;
    }
    // if the selected target is the active element, do not blur
    const tapped = ev.target;
    if (tapped === active) {
      return;
    }
    if (tapped.matches(SKIP_SELECTOR) || tapped.closest(SKIP_SELECTOR)) {
      return;
    }
    focused = false;
    // TODO FW-2796: find a better way, why 50ms?
    setTimeout(() => {
      if (!focused) {
        active.blur();
      }
    }, 50);
  };
  (0,_helpers_3b390e48_js__WEBPACK_IMPORTED_MODULE_2__.a)(doc, 'ionScrollStart', onScroll);
  doc.addEventListener('focusin', onFocusin, true);
  doc.addEventListener('touchend', onTouchend, false);
  return () => {
    (0,_helpers_3b390e48_js__WEBPACK_IMPORTED_MODULE_2__.b)(doc, 'ionScrollStart', onScroll, true);
    doc.removeEventListener('focusin', onFocusin, true);
    doc.removeEventListener('touchend', onTouchend, false);
  };
};
const SCROLL_ASSIST_SPEED = 0.3;
const getScrollData = (componentEl, contentEl, keyboardHeight) => {
  var _a;
  const itemEl = (_a = componentEl.closest('ion-item,[ion-item]')) !== null && _a !== void 0 ? _a : componentEl;
  return calcScrollData(itemEl.getBoundingClientRect(), contentEl.getBoundingClientRect(), keyboardHeight, componentEl.ownerDocument.defaultView.innerHeight // TODO(FW-2832): type
  );
};

const calcScrollData = (inputRect, contentRect, keyboardHeight, platformHeight) => {
  // compute input's Y values relative to the body
  const inputTop = inputRect.top;
  const inputBottom = inputRect.bottom;
  // compute visible area
  const visibleAreaTop = contentRect.top;
  const visibleAreaBottom = Math.min(contentRect.bottom, platformHeight - keyboardHeight);
  // compute safe area
  const safeAreaTop = visibleAreaTop + 15;
  const safeAreaBottom = visibleAreaBottom * 0.75;
  // figure out if each edge of the input is within the safe area
  const distanceToBottom = safeAreaBottom - inputBottom;
  const distanceToTop = safeAreaTop - inputTop;
  // desiredScrollAmount is the negated distance to the safe area according to our calculations.
  const desiredScrollAmount = Math.round(distanceToBottom < 0 ? -distanceToBottom : distanceToTop > 0 ? -distanceToTop : 0);
  // our calculations make some assumptions that aren't always true, like the keyboard being closed when an input
  // gets focus, so make sure we don't scroll the input above the visible area
  const scrollAmount = Math.min(desiredScrollAmount, inputTop - visibleAreaTop);
  const distance = Math.abs(scrollAmount);
  const duration = distance / SCROLL_ASSIST_SPEED;
  const scrollDuration = Math.min(400, Math.max(150, duration));
  return {
    scrollAmount,
    scrollDuration,
    scrollPadding: keyboardHeight,
    inputSafeY: -(inputTop - safeAreaTop) + 4
  };
};
const enableScrollAssist = (componentEl, inputEl, contentEl, footerEl, keyboardHeight, disableClonedInput = false) => {
  let coord;
  const touchStart = ev => {
    coord = (0,_helpers_3b390e48_js__WEBPACK_IMPORTED_MODULE_2__.p)(ev);
  };
  const touchEnd = ev => {
    // input cover touchend/mouseup
    if (!coord) {
      return;
    }
    // get where the touchend/mouseup ended
    const endCoord = (0,_helpers_3b390e48_js__WEBPACK_IMPORTED_MODULE_2__.p)(ev);
    // focus this input if the pointer hasn't moved XX pixels
    // and the input doesn't already have focus
    if (!hasPointerMoved(6, coord, endCoord) && !isFocused(inputEl)) {
      // begin the input focus process
      jsSetFocus(componentEl, inputEl, contentEl, footerEl, keyboardHeight, disableClonedInput);
    }
  };
  componentEl.addEventListener('touchstart', touchStart, {
    capture: true,
    passive: true
  });
  componentEl.addEventListener('touchend', touchEnd, true);
  return () => {
    componentEl.removeEventListener('touchstart', touchStart, true);
    componentEl.removeEventListener('touchend', touchEnd, true);
  };
};
const jsSetFocus = /*#__PURE__*/function () {
  var _ref = (0,_opt_atlassian_pipelines_agent_build_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_0__["default"])(function* (componentEl, inputEl, contentEl, footerEl, keyboardHeight, disableClonedInput = false) {
    if (!contentEl && !footerEl) {
      return;
    }
    const scrollData = getScrollData(componentEl, contentEl || footerEl, keyboardHeight);
    if (contentEl && Math.abs(scrollData.scrollAmount) < 4) {
      // the text input is in a safe position that doesn't
      // require it to be scrolled into view, just set focus now
      inputEl.focus();
      return;
    }
    // temporarily move the focus to the focus holder so the browser
    // doesn't freak out while it's trying to get the input in place
    // at this point the native text input still does not have focus
    relocateInput(componentEl, inputEl, true, scrollData.inputSafeY, disableClonedInput);
    inputEl.focus();
    /**
     * Relocating/Focusing input causes the
     * click event to be cancelled, so
     * manually fire one here.
     */
    (0,_helpers_3b390e48_js__WEBPACK_IMPORTED_MODULE_2__.r)(() => componentEl.click());
    if (typeof window !== 'undefined') {
      let scrollContentTimeout;
      const _scrollContent = /*#__PURE__*/function () {
        var _ref2 = (0,_opt_atlassian_pipelines_agent_build_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_0__["default"])(function* () {
          // clean up listeners and timeouts
          if (scrollContentTimeout !== undefined) {
            clearTimeout(scrollContentTimeout);
          }
          window.removeEventListener('ionKeyboardDidShow', doubleKeyboardEventListener);
          window.removeEventListener('ionKeyboardDidShow', _scrollContent);
          // scroll the input into place
          if (contentEl) {
            yield (0,_index_e6d1a8be_js__WEBPACK_IMPORTED_MODULE_1__.c)(contentEl, 0, scrollData.scrollAmount, scrollData.scrollDuration);
          }
          // the scroll view is in the correct position now
          // give the native text input focus
          relocateInput(componentEl, inputEl, false, scrollData.inputSafeY);
          // ensure this is the focused input
          inputEl.focus();
        });
        return function scrollContent() {
          return _ref2.apply(this, arguments);
        };
      }();
      const doubleKeyboardEventListener = () => {
        window.removeEventListener('ionKeyboardDidShow', doubleKeyboardEventListener);
        window.addEventListener('ionKeyboardDidShow', _scrollContent);
      };
      if (contentEl) {
        const scrollEl = yield (0,_index_e6d1a8be_js__WEBPACK_IMPORTED_MODULE_1__.g)(contentEl);
        /**
         * scrollData will only consider the amount we need
         * to scroll in order to properly bring the input
         * into view. It will not consider the amount
         * we can scroll in the content element.
         * As a result, scrollData may request a greater
         * scroll position than is currently available
         * in the DOM. If this is the case, we need to
         * wait for the webview to resize/the keyboard
         * to show in order for additional scroll
         * bandwidth to become available.
         */
        const totalScrollAmount = scrollEl.scrollHeight - scrollEl.clientHeight;
        if (scrollData.scrollAmount > totalScrollAmount - scrollEl.scrollTop) {
          /**
           * On iOS devices, the system will show a "Passwords" bar above the keyboard
           * after the initial keyboard is shown. This prevents the webview from resizing
           * until the "Passwords" bar is shown, so we need to wait for that to happen first.
           */
          if (inputEl.type === 'password') {
            // Add 50px to account for the "Passwords" bar
            scrollData.scrollAmount += 50;
            window.addEventListener('ionKeyboardDidShow', doubleKeyboardEventListener);
          } else {
            window.addEventListener('ionKeyboardDidShow', _scrollContent);
          }
          /**
           * This should only fire in 2 instances:
           * 1. The app is very slow.
           * 2. The app is running in a browser on an old OS
           * that does not support Ionic Keyboard Events
           */
          scrollContentTimeout = setTimeout(_scrollContent, 1000);
          return;
        }
      }
      _scrollContent();
    }
  });
  return function jsSetFocus(_x, _x2, _x3, _x4, _x5) {
    return _ref.apply(this, arguments);
  };
}();
const hasPointerMoved = (threshold, startCoord, endCoord) => {
  if (startCoord && endCoord) {
    const deltaX = startCoord.x - endCoord.x;
    const deltaY = startCoord.y - endCoord.y;
    const distance = deltaX * deltaX + deltaY * deltaY;
    return distance > threshold * threshold;
  }
  return false;
};
const PADDING_TIMER_KEY = '$ionPaddingTimer';
const enableScrollPadding = keyboardHeight => {
  const doc = document;
  // TODO(FW-2832): types
  const onFocusin = ev => {
    setScrollPadding(ev.target, keyboardHeight);
  };
  const onFocusout = ev => {
    setScrollPadding(ev.target, 0);
  };
  doc.addEventListener('focusin', onFocusin);
  doc.addEventListener('focusout', onFocusout);
  return () => {
    doc.removeEventListener('focusin', onFocusin);
    doc.removeEventListener('focusout', onFocusout);
  };
};
const setScrollPadding = (input, keyboardHeight) => {
  var _a, _b;
  if (input.tagName !== 'INPUT') {
    return;
  }
  if (input.parentElement && input.parentElement.tagName === 'ION-INPUT') {
    return;
  }
  if (((_b = (_a = input.parentElement) === null || _a === void 0 ? void 0 : _a.parentElement) === null || _b === void 0 ? void 0 : _b.tagName) === 'ION-SEARCHBAR') {
    return;
  }
  const el = (0,_index_e6d1a8be_js__WEBPACK_IMPORTED_MODULE_1__.f)(input);
  if (el === null) {
    return;
  }
  const timer = el[PADDING_TIMER_KEY];
  if (timer) {
    clearTimeout(timer);
  }
  if (keyboardHeight > 0) {
    el.style.setProperty('--keyboard-offset', `${keyboardHeight}px`);
  } else {
    el[PADDING_TIMER_KEY] = setTimeout(() => {
      el.style.setProperty('--keyboard-offset', '0px');
    }, 120);
  }
};
const INPUT_BLURRING = true;
const SCROLL_PADDING = true;
const startInputShims = (config, platform) => {
  const doc = document;
  const isIOS = platform === 'ios';
  const isAndroid = platform === 'android';
  /**
   * Hide Caret and Input Blurring are needed on iOS.
   * Scroll Assist and Scroll Padding are needed on iOS and Android
   * with Chrome web browser (not Chrome webview).
   */
  const keyboardHeight = config.getNumber('keyboardHeight', 290);
  const scrollAssist = config.getBoolean('scrollAssist', true);
  const hideCaret = config.getBoolean('hideCaretOnScroll', isIOS);
  const inputBlurring = config.getBoolean('inputBlurring', isIOS);
  const scrollPadding = config.getBoolean('scrollPadding', true);
  const inputs = Array.from(doc.querySelectorAll('ion-input, ion-textarea'));
  const hideCaretMap = new WeakMap();
  const scrollAssistMap = new WeakMap();
  const registerInput = /*#__PURE__*/function () {
    var _ref3 = (0,_opt_atlassian_pipelines_agent_build_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_0__["default"])(function* (componentEl) {
      yield new Promise(resolve => (0,_helpers_3b390e48_js__WEBPACK_IMPORTED_MODULE_2__.c)(componentEl, resolve));
      const inputRoot = componentEl.shadowRoot || componentEl;
      const inputEl = inputRoot.querySelector('input') || inputRoot.querySelector('textarea');
      const scrollEl = (0,_index_e6d1a8be_js__WEBPACK_IMPORTED_MODULE_1__.f)(componentEl);
      const footerEl = !scrollEl ? componentEl.closest('ion-footer') : null;
      if (!inputEl) {
        return;
      }
      if (!!scrollEl && hideCaret && !hideCaretMap.has(componentEl)) {
        const rmFn = enableHideCaretOnScroll(componentEl, inputEl, scrollEl);
        hideCaretMap.set(componentEl, rmFn);
      }
      /**
       * date/datetime-locale inputs on mobile devices show date picker
       * overlays instead of keyboards. As a result, scroll assist is
       * not needed. This also works around a bug in iOS <16 where
       * scroll assist causes the browser to lock up. See FW-1997.
       */
      const isDateInput = inputEl.type === 'date' || inputEl.type === 'datetime-local';
      if (!isDateInput && (!!scrollEl || !!footerEl) && scrollAssist && !scrollAssistMap.has(componentEl)) {
        const rmFn = enableScrollAssist(componentEl, inputEl, scrollEl, footerEl, keyboardHeight, isAndroid);
        scrollAssistMap.set(componentEl, rmFn);
      }
    });
    return function registerInput(_x6) {
      return _ref3.apply(this, arguments);
    };
  }();
  const unregisterInput = componentEl => {
    if (hideCaret) {
      const fn = hideCaretMap.get(componentEl);
      if (fn) {
        fn();
      }
      hideCaretMap.delete(componentEl);
    }
    if (scrollAssist) {
      const fn = scrollAssistMap.get(componentEl);
      if (fn) {
        fn();
      }
      scrollAssistMap.delete(componentEl);
    }
  };
  if (inputBlurring && INPUT_BLURRING) {
    enableInputBlurring();
  }
  if (scrollPadding && SCROLL_PADDING) {
    enableScrollPadding(keyboardHeight);
  }
  // Input might be already loaded in the DOM before ion-device-hacks did.
  // At this point we need to look for all of the inputs not registered yet
  // and register them.
  for (const input of inputs) {
    registerInput(input);
  }
  // TODO(FW-2832): types
  doc.addEventListener('ionInputDidLoad', ev => {
    registerInput(ev.detail);
  });
  doc.addEventListener('ionInputDidUnload', ev => {
    unregisterInput(ev.detail);
  });
};


/***/ })

}]);
//# sourceMappingURL=1321.5058ac30274bd8a6.js.map