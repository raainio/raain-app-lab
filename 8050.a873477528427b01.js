"use strict";
(self["webpackChunkapp"] = self["webpackChunkapp"] || []).push([[8050],{

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

/***/ 48050:
/*!****************************************************************!*\
  !*** ./node_modules/@ionic/core/dist/esm/ion-popover.entry.js ***!
  \****************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "ion_popover": () => (/* binding */ Popover)
/* harmony export */ });
/* harmony import */ var _opt_atlassian_pipelines_agent_build_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/esm/asyncToGenerator.js */ 71670);
/* harmony import */ var _index_8e692445_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./index-8e692445.js */ 91559);
/* harmony import */ var _ionic_global_c74e4951_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./ionic-global-c74e4951.js */ 95823);
/* harmony import */ var _framework_delegate_c3305a28_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./framework-delegate-c3305a28.js */ 90539);
/* harmony import */ var _helpers_3b390e48_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./helpers-3b390e48.js */ 29259);
/* harmony import */ var _index_c4b11676_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./index-c4b11676.js */ 99273);
/* harmony import */ var _overlays_58fa8e4d_js__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./overlays-58fa8e4d.js */ 6605);
/* harmony import */ var _theme_7670341c_js__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./theme-7670341c.js */ 50320);
/* harmony import */ var _index_27c7e5c4_js__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./index-27c7e5c4.js */ 60919);
/* harmony import */ var _animation_4ff3f603_js__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./animation-4ff3f603.js */ 15933);
/* harmony import */ var _hardware_back_button_490df115_js__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./hardware-back-button-490df115.js */ 70159);
/* harmony import */ var _index_33ffec25_js__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ./index-33ffec25.js */ 42286);

/*!
 * (C) Ionic http://ionicframework.com - MIT License
 */












/**
 * Returns the dimensions of the popover
 * arrow on `ios` mode. If arrow is disabled
 * returns (0, 0).
 */
const getArrowDimensions = arrowEl => {
  if (!arrowEl) {
    return {
      arrowWidth: 0,
      arrowHeight: 0
    };
  }
  const {
    width,
    height
  } = arrowEl.getBoundingClientRect();
  return {
    arrowWidth: width,
    arrowHeight: height
  };
};
/**
 * Returns the recommended dimensions of the popover
 * that takes into account whether or not the width
 * should match the trigger width.
 */
const getPopoverDimensions = (size, contentEl, triggerEl) => {
  const contentDimentions = contentEl.getBoundingClientRect();
  const contentHeight = contentDimentions.height;
  let contentWidth = contentDimentions.width;
  if (size === 'cover' && triggerEl) {
    const triggerDimensions = triggerEl.getBoundingClientRect();
    contentWidth = triggerDimensions.width;
  }
  return {
    contentWidth,
    contentHeight
  };
};
const configureDismissInteraction = (triggerEl, triggerAction, popoverEl, parentPopoverEl) => {
  let dismissCallbacks = [];
  const root = (0,_helpers_3b390e48_js__WEBPACK_IMPORTED_MODULE_4__.g)(parentPopoverEl);
  const parentContentEl = root.querySelector('.popover-content');
  switch (triggerAction) {
    case 'hover':
      dismissCallbacks = [{
        /**
         * Do not use mouseover here
         * as this will causes the event to
         * be dispatched on each underlying
         * element rather than on the popover
         * content as a whole.
         */
        eventName: 'mouseenter',
        callback: ev => {
          /**
           * Do not dismiss the popover is we
           * are hovering over its trigger.
           * This would be easier if we used mouseover
           * but this would cause the event to be dispatched
           * more often than we would like, potentially
           * causing performance issues.
           */
          const element = document.elementFromPoint(ev.clientX, ev.clientY);
          if (element === triggerEl) {
            return;
          }
          popoverEl.dismiss(undefined, undefined, false);
        }
      }];
      break;
    case 'context-menu':
    case 'click':
    default:
      dismissCallbacks = [{
        eventName: 'click',
        callback: ev => {
          /**
           * Do not dismiss the popover is we
           * are hovering over its trigger.
           */
          const target = ev.target;
          const closestTrigger = target.closest('[data-ion-popover-trigger]');
          if (closestTrigger === triggerEl) {
            /**
             * stopPropagation here so if the
             * popover has dismissOnSelect="true"
             * the popover does not dismiss since
             * we just clicked a trigger element.
             */
            ev.stopPropagation();
            return;
          }
          popoverEl.dismiss(undefined, undefined, false);
        }
      }];
      break;
  }
  dismissCallbacks.forEach(({
    eventName,
    callback
  }) => parentContentEl.addEventListener(eventName, callback));
  return () => {
    dismissCallbacks.forEach(({
      eventName,
      callback
    }) => parentContentEl.removeEventListener(eventName, callback));
  };
};
/**
 * Configures the triggerEl to respond
 * to user interaction based upon the triggerAction
 * prop that devs have defined.
 */
const configureTriggerInteraction = (triggerEl, triggerAction, popoverEl) => {
  let triggerCallbacks = [];
  /**
   * Based upon the kind of trigger interaction
   * the user wants, we setup the correct event
   * listeners.
   */
  switch (triggerAction) {
    case 'hover':
      let hoverTimeout;
      triggerCallbacks = [{
        eventName: 'mouseenter',
        callback: function () {
          var _ref = (0,_opt_atlassian_pipelines_agent_build_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_0__["default"])(function* (ev) {
            ev.stopPropagation();
            if (hoverTimeout) {
              clearTimeout(hoverTimeout);
            }
            /**
             * Hovering over a trigger should not
             * immediately open the next popover.
             */
            hoverTimeout = setTimeout(() => {
              (0,_helpers_3b390e48_js__WEBPACK_IMPORTED_MODULE_4__.r)(() => {
                popoverEl.presentFromTrigger(ev);
                hoverTimeout = undefined;
              });
            }, 100);
          });
          return function callback(_x) {
            return _ref.apply(this, arguments);
          };
        }()
      }, {
        eventName: 'mouseleave',
        callback: ev => {
          if (hoverTimeout) {
            clearTimeout(hoverTimeout);
          }
          /**
           * If mouse is over another popover
           * that is not this popover then we should
           * close this popover.
           */
          const target = ev.relatedTarget;
          if (!target) {
            return;
          }
          if (target.closest('ion-popover') !== popoverEl) {
            popoverEl.dismiss(undefined, undefined, false);
          }
        }
      }, {
        /**
         * stopPropagation here prevents the popover
         * from dismissing when dismiss-on-select="true".
         */
        eventName: 'click',
        callback: ev => ev.stopPropagation()
      }, {
        eventName: 'ionPopoverActivateTrigger',
        callback: ev => popoverEl.presentFromTrigger(ev, true)
      }];
      break;
    case 'context-menu':
      triggerCallbacks = [{
        eventName: 'contextmenu',
        callback: ev => {
          /**
           * Prevents the platform context
           * menu from appearing.
           */
          ev.preventDefault();
          popoverEl.presentFromTrigger(ev);
        }
      }, {
        eventName: 'click',
        callback: ev => ev.stopPropagation()
      }, {
        eventName: 'ionPopoverActivateTrigger',
        callback: ev => popoverEl.presentFromTrigger(ev, true)
      }];
      break;
    case 'click':
    default:
      triggerCallbacks = [{
        /**
         * Do not do a stopPropagation() here
         * because if you had two click triggers
         * then clicking the first trigger and then
         * clicking the second trigger would not cause
         * the first popover to dismiss.
         */
        eventName: 'click',
        callback: ev => popoverEl.presentFromTrigger(ev)
      }, {
        eventName: 'ionPopoverActivateTrigger',
        callback: ev => popoverEl.presentFromTrigger(ev, true)
      }];
      break;
  }
  triggerCallbacks.forEach(({
    eventName,
    callback
  }) => triggerEl.addEventListener(eventName, callback));
  triggerEl.setAttribute('data-ion-popover-trigger', 'true');
  return () => {
    triggerCallbacks.forEach(({
      eventName,
      callback
    }) => triggerEl.removeEventListener(eventName, callback));
    triggerEl.removeAttribute('data-ion-popover-trigger');
  };
};
/**
 * Returns the index of an ion-item in an array of ion-items.
 */
const getIndexOfItem = (items, item) => {
  if (!item || item.tagName !== 'ION-ITEM') {
    return -1;
  }
  return items.findIndex(el => el === item);
};
/**
 * Given an array of elements and a currently focused ion-item
 * returns the next ion-item relative to the focused one or
 * undefined.
 */
const getNextItem = (items, currentItem) => {
  const currentItemIndex = getIndexOfItem(items, currentItem);
  return items[currentItemIndex + 1];
};
/**
 * Given an array of elements and a currently focused ion-item
 * returns the previous ion-item relative to the focused one or
 * undefined.
 */
const getPrevItem = (items, currentItem) => {
  const currentItemIndex = getIndexOfItem(items, currentItem);
  return items[currentItemIndex - 1];
};
/** Focus the internal button of the ion-item */
const focusItem = item => {
  const root = (0,_helpers_3b390e48_js__WEBPACK_IMPORTED_MODULE_4__.g)(item);
  const button = root.querySelector('button');
  if (button) {
    (0,_helpers_3b390e48_js__WEBPACK_IMPORTED_MODULE_4__.r)(() => button.focus());
  }
};
/**
 * Returns `true` if `el` has been designated
 * as a trigger element for an ion-popover.
 */
const isTriggerElement = el => el.hasAttribute('data-ion-popover-trigger');
const configureKeyboardInteraction = popoverEl => {
  const callback = /*#__PURE__*/function () {
    var _ref2 = (0,_opt_atlassian_pipelines_agent_build_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_0__["default"])(function* (ev) {
      var _a;
      const activeElement = document.activeElement;
      let items = [];
      const targetTagName = (_a = ev.target) === null || _a === void 0 ? void 0 : _a.tagName;
      /**
       * Only handle custom keyboard interactions for the host popover element
       * and children ion-item elements.
       */
      if (targetTagName !== 'ION-POPOVER' && targetTagName !== 'ION-ITEM') {
        return;
      }
      /**
       * Complex selectors with :not() are :not supported
       * in older versions of Chromium so we need to do a
       * try/catch here so errors are not thrown.
       */
      try {
        /**
         * Select all ion-items that are not children of child popovers.
         * i.e. only select ion-item elements that are part of this popover
         */
        items = Array.from(popoverEl.querySelectorAll('ion-item:not(ion-popover ion-popover *):not([disabled])'));
        /* eslint-disable-next-line */
      } catch (_b) {}
      switch (ev.key) {
        /**
         * If we are in a child popover
         * then pressing the left arrow key
         * should close this popover and move
         * focus to the popover that presented
         * this one.
         */
        case 'ArrowLeft':
          const parentPopover = yield popoverEl.getParentPopover();
          if (parentPopover) {
            popoverEl.dismiss(undefined, undefined, false);
          }
          break;
        /**
         * ArrowDown should move focus to the next focusable ion-item.
         */
        case 'ArrowDown':
          // Disable movement/scroll with keyboard
          ev.preventDefault();
          const nextItem = getNextItem(items, activeElement);
          if (nextItem !== undefined) {
            focusItem(nextItem);
          }
          break;
        /**
         * ArrowUp should move focus to the previous focusable ion-item.
         */
        case 'ArrowUp':
          // Disable movement/scroll with keyboard
          ev.preventDefault();
          const prevItem = getPrevItem(items, activeElement);
          if (prevItem !== undefined) {
            focusItem(prevItem);
          }
          break;
        /**
         * Home should move focus to the first focusable ion-item.
         */
        case 'Home':
          ev.preventDefault();
          const firstItem = items[0];
          if (firstItem !== undefined) {
            focusItem(firstItem);
          }
          break;
        /**
         * End should move focus to the last focusable ion-item.
         */
        case 'End':
          ev.preventDefault();
          const lastItem = items[items.length - 1];
          if (lastItem !== undefined) {
            focusItem(lastItem);
          }
          break;
        /**
         * ArrowRight, Spacebar, or Enter should activate
         * the currently focused trigger item to open a
         * popover if the element is a trigger item.
         */
        case 'ArrowRight':
        case ' ':
        case 'Enter':
          if (activeElement && isTriggerElement(activeElement)) {
            const rightEvent = new CustomEvent('ionPopoverActivateTrigger');
            activeElement.dispatchEvent(rightEvent);
          }
          break;
      }
    });
    return function callback(_x2) {
      return _ref2.apply(this, arguments);
    };
  }();
  popoverEl.addEventListener('keydown', callback);
  return () => popoverEl.removeEventListener('keydown', callback);
};
/**
 * Positions a popover by taking into account
 * the reference point, preferred side, alignment
 * and viewport dimensions.
 */
const getPopoverPosition = (isRTL, contentWidth, contentHeight, arrowWidth, arrowHeight, reference, side, align, defaultPosition, triggerEl, event) => {
  var _a;
  let referenceCoordinates = {
    top: 0,
    left: 0,
    width: 0,
    height: 0
  };
  /**
   * Calculate position relative to the
   * x-y coordinates in the event that
   * was passed in
   */
  switch (reference) {
    case 'event':
      if (!event) {
        return defaultPosition;
      }
      const mouseEv = event;
      referenceCoordinates = {
        top: mouseEv.clientY,
        left: mouseEv.clientX,
        width: 1,
        height: 1
      };
      break;
    /**
     * Calculate position relative to the bounding
     * box on either the trigger element
     * specified via the `trigger` prop or
     * the target specified on the event
     * that was passed in.
     */
    case 'trigger':
    default:
      const customEv = event;
      /**
       * ionShadowTarget is used when we need to align the
       * popover with an element inside of the shadow root
       * of an Ionic component. Ex: Presenting a popover
       * by clicking on the collapsed indicator inside
       * of `ion-breadcrumb` and centering it relative
       * to the indicator rather than `ion-breadcrumb`
       * as a whole.
       */
      const actualTriggerEl = triggerEl || ((_a = customEv === null || customEv === void 0 ? void 0 : customEv.detail) === null || _a === void 0 ? void 0 : _a.ionShadowTarget) || (customEv === null || customEv === void 0 ? void 0 : customEv.target);
      if (!actualTriggerEl) {
        return defaultPosition;
      }
      const triggerBoundingBox = actualTriggerEl.getBoundingClientRect();
      referenceCoordinates = {
        top: triggerBoundingBox.top,
        left: triggerBoundingBox.left,
        width: triggerBoundingBox.width,
        height: triggerBoundingBox.height
      };
      break;
  }
  /**
   * Get top/left offset that would allow
   * popover to be positioned on the
   * preferred side of the reference.
   */
  const coordinates = calculatePopoverSide(side, referenceCoordinates, contentWidth, contentHeight, arrowWidth, arrowHeight, isRTL);
  /**
   * Get the top/left adjustments that
   * would allow the popover content
   * to have the correct alignment.
   */
  const alignedCoordinates = calculatePopoverAlign(align, side, referenceCoordinates, contentWidth, contentHeight);
  const top = coordinates.top + alignedCoordinates.top;
  const left = coordinates.left + alignedCoordinates.left;
  const {
    arrowTop,
    arrowLeft
  } = calculateArrowPosition(side, arrowWidth, arrowHeight, top, left, contentWidth, contentHeight, isRTL);
  const {
    originX,
    originY
  } = calculatePopoverOrigin(side, align, isRTL);
  return {
    top,
    left,
    referenceCoordinates,
    arrowTop,
    arrowLeft,
    originX,
    originY
  };
};
/**
 * Determines the transform-origin
 * of the popover animation so that it
 * is in line with what the side and alignment
 * prop values are. Currently only used
 * with the MD animation.
 */
const calculatePopoverOrigin = (side, align, isRTL) => {
  switch (side) {
    case 'top':
      return {
        originX: getOriginXAlignment(align),
        originY: 'bottom'
      };
    case 'bottom':
      return {
        originX: getOriginXAlignment(align),
        originY: 'top'
      };
    case 'left':
      return {
        originX: 'right',
        originY: getOriginYAlignment(align)
      };
    case 'right':
      return {
        originX: 'left',
        originY: getOriginYAlignment(align)
      };
    case 'start':
      return {
        originX: isRTL ? 'left' : 'right',
        originY: getOriginYAlignment(align)
      };
    case 'end':
      return {
        originX: isRTL ? 'right' : 'left',
        originY: getOriginYAlignment(align)
      };
  }
};
const getOriginXAlignment = align => {
  switch (align) {
    case 'start':
      return 'left';
    case 'center':
      return 'center';
    case 'end':
      return 'right';
  }
};
const getOriginYAlignment = align => {
  switch (align) {
    case 'start':
      return 'top';
    case 'center':
      return 'center';
    case 'end':
      return 'bottom';
  }
};
/**
 * Calculates where the arrow positioning
 * should be relative to the popover content.
 */
const calculateArrowPosition = (side, arrowWidth, arrowHeight, top, left, contentWidth, contentHeight, isRTL) => {
  /**
   * Note: When side is left, right, start, or end, the arrow is
   * been rotated using a `transform`, so to move the arrow up or down
   * by its dimension, you need to use `arrowWidth`.
   */
  const leftPosition = {
    arrowTop: top + contentHeight / 2 - arrowWidth / 2,
    arrowLeft: left + contentWidth - arrowWidth / 2
  };
  /**
   * Move the arrow to the left by arrowWidth and then
   * again by half of its width because we have rotated
   * the arrow using a transform.
   */
  const rightPosition = {
    arrowTop: top + contentHeight / 2 - arrowWidth / 2,
    arrowLeft: left - arrowWidth * 1.5
  };
  switch (side) {
    case 'top':
      return {
        arrowTop: top + contentHeight,
        arrowLeft: left + contentWidth / 2 - arrowWidth / 2
      };
    case 'bottom':
      return {
        arrowTop: top - arrowHeight,
        arrowLeft: left + contentWidth / 2 - arrowWidth / 2
      };
    case 'left':
      return leftPosition;
    case 'right':
      return rightPosition;
    case 'start':
      return isRTL ? rightPosition : leftPosition;
    case 'end':
      return isRTL ? leftPosition : rightPosition;
    default:
      return {
        arrowTop: 0,
        arrowLeft: 0
      };
  }
};
/**
 * Calculates the required top/left
 * values needed to position the popover
 * content on the side specified in the
 * `side` prop.
 */
const calculatePopoverSide = (side, triggerBoundingBox, contentWidth, contentHeight, arrowWidth, arrowHeight, isRTL) => {
  const sideLeft = {
    top: triggerBoundingBox.top,
    left: triggerBoundingBox.left - contentWidth - arrowWidth
  };
  const sideRight = {
    top: triggerBoundingBox.top,
    left: triggerBoundingBox.left + triggerBoundingBox.width + arrowWidth
  };
  switch (side) {
    case 'top':
      return {
        top: triggerBoundingBox.top - contentHeight - arrowHeight,
        left: triggerBoundingBox.left
      };
    case 'right':
      return sideRight;
    case 'bottom':
      return {
        top: triggerBoundingBox.top + triggerBoundingBox.height + arrowHeight,
        left: triggerBoundingBox.left
      };
    case 'left':
      return sideLeft;
    case 'start':
      return isRTL ? sideRight : sideLeft;
    case 'end':
      return isRTL ? sideLeft : sideRight;
  }
};
/**
 * Calculates the required top/left
 * offset values needed to provide the
 * correct alignment regardless while taking
 * into account the side the popover is on.
 */
const calculatePopoverAlign = (align, side, triggerBoundingBox, contentWidth, contentHeight) => {
  switch (align) {
    case 'center':
      return calculatePopoverCenterAlign(side, triggerBoundingBox, contentWidth, contentHeight);
    case 'end':
      return calculatePopoverEndAlign(side, triggerBoundingBox, contentWidth, contentHeight);
    case 'start':
    default:
      return {
        top: 0,
        left: 0
      };
  }
};
/**
 * Calculate the end alignment for
 * the popover. If side is on the x-axis
 * then the align values refer to the top
 * and bottom margins of the content.
 * If side is on the y-axis then the
 * align values refer to the left and right
 * margins of the content.
 */
const calculatePopoverEndAlign = (side, triggerBoundingBox, contentWidth, contentHeight) => {
  switch (side) {
    case 'start':
    case 'end':
    case 'left':
    case 'right':
      return {
        top: -(contentHeight - triggerBoundingBox.height),
        left: 0
      };
    case 'top':
    case 'bottom':
    default:
      return {
        top: 0,
        left: -(contentWidth - triggerBoundingBox.width)
      };
  }
};
/**
 * Calculate the center alignment for
 * the popover. If side is on the x-axis
 * then the align values refer to the top
 * and bottom margins of the content.
 * If side is on the y-axis then the
 * align values refer to the left and right
 * margins of the content.
 */
const calculatePopoverCenterAlign = (side, triggerBoundingBox, contentWidth, contentHeight) => {
  switch (side) {
    case 'start':
    case 'end':
    case 'left':
    case 'right':
      return {
        top: -(contentHeight / 2 - triggerBoundingBox.height / 2),
        left: 0
      };
    case 'top':
    case 'bottom':
    default:
      return {
        top: 0,
        left: -(contentWidth / 2 - triggerBoundingBox.width / 2)
      };
  }
};
/**
 * Adjusts popover positioning coordinates
 * such that popover does not appear offscreen
 * or overlapping safe area bounds.
 */
const calculateWindowAdjustment = (side, coordTop, coordLeft, bodyPadding, bodyWidth, bodyHeight, contentWidth, contentHeight, safeAreaMargin, contentOriginX, contentOriginY, triggerCoordinates, coordArrowTop = 0, coordArrowLeft = 0, arrowHeight = 0) => {
  let arrowTop = coordArrowTop;
  const arrowLeft = coordArrowLeft;
  let left = coordLeft;
  let top = coordTop;
  let bottom;
  let originX = contentOriginX;
  let originY = contentOriginY;
  let checkSafeAreaLeft = false;
  let checkSafeAreaRight = false;
  const triggerTop = triggerCoordinates ? triggerCoordinates.top + triggerCoordinates.height : bodyHeight / 2 - contentHeight / 2;
  const triggerHeight = triggerCoordinates ? triggerCoordinates.height : 0;
  let addPopoverBottomClass = false;
  /**
   * Adjust popover so it does not
   * go off the left of the screen.
   */
  if (left < bodyPadding + safeAreaMargin) {
    left = bodyPadding;
    checkSafeAreaLeft = true;
    originX = 'left';
    /**
     * Adjust popover so it does not
     * go off the right of the screen.
     */
  } else if (contentWidth + bodyPadding + left + safeAreaMargin > bodyWidth) {
    checkSafeAreaRight = true;
    left = bodyWidth - contentWidth - bodyPadding;
    originX = 'right';
  }
  /**
   * Adjust popover so it does not
   * go off the top of the screen.
   * If popover is on the left or the right of
   * the trigger, then we should not adjust top
   * margins.
   */
  if (triggerTop + triggerHeight + contentHeight > bodyHeight && (side === 'top' || side === 'bottom')) {
    if (triggerTop - contentHeight > 0) {
      /**
       * While we strive to align the popover with the trigger
       * on smaller screens this is not always possible. As a result,
       * we adjust the popover up so that it does not hang
       * off the bottom of the screen. However, we do not want to move
       * the popover up so much that it goes off the top of the screen.
       *
       * We chose 12 here so that the popover position looks a bit nicer as
       * it is not right up against the edge of the screen.
       */
      top = Math.max(12, triggerTop - contentHeight - triggerHeight - (arrowHeight - 1));
      arrowTop = top + contentHeight;
      originY = 'bottom';
      addPopoverBottomClass = true;
      /**
       * If not enough room for popover to appear
       * above trigger, then cut it off.
       */
    } else {
      bottom = bodyPadding;
    }
  }
  return {
    top,
    left,
    bottom,
    originX,
    originY,
    checkSafeAreaLeft,
    checkSafeAreaRight,
    arrowTop,
    arrowLeft,
    addPopoverBottomClass
  };
};
const shouldShowArrow = (side, didAdjustBounds = false, ev, trigger) => {
  /**
   * If no event provided and
   * we do not have a trigger,
   * then this popover was likely
   * presented via the popoverController
   * or users called `present` manually.
   * In this case, the arrow should not be
   * shown as we do not have a reference.
   */
  if (!ev && !trigger) {
    return false;
  }
  /**
   * If popover is on the left or the right
   * of a trigger, but we needed to adjust the
   * popover due to screen bounds, then we should
   * hide the arrow as it will never be pointing
   * at the trigger.
   */
  if (side !== 'top' && side !== 'bottom' && didAdjustBounds) {
    return false;
  }
  return true;
};
const POPOVER_IOS_BODY_PADDING = 5;
/**
 * iOS Popover Enter Animation
 */
// TODO(FW-2832): types
const iosEnterAnimation = (baseEl, opts) => {
  var _a;
  const {
    event: ev,
    size,
    trigger,
    reference,
    side,
    align
  } = opts;
  const doc = baseEl.ownerDocument;
  const isRTL = doc.dir === 'rtl';
  const bodyWidth = doc.defaultView.innerWidth;
  const bodyHeight = doc.defaultView.innerHeight;
  const root = (0,_helpers_3b390e48_js__WEBPACK_IMPORTED_MODULE_4__.g)(baseEl);
  const contentEl = root.querySelector('.popover-content');
  const arrowEl = root.querySelector('.popover-arrow');
  const referenceSizeEl = trigger || ((_a = ev === null || ev === void 0 ? void 0 : ev.detail) === null || _a === void 0 ? void 0 : _a.ionShadowTarget) || (ev === null || ev === void 0 ? void 0 : ev.target);
  const {
    contentWidth,
    contentHeight
  } = getPopoverDimensions(size, contentEl, referenceSizeEl);
  const {
    arrowWidth,
    arrowHeight
  } = getArrowDimensions(arrowEl);
  const defaultPosition = {
    top: bodyHeight / 2 - contentHeight / 2,
    left: bodyWidth / 2 - contentWidth / 2,
    originX: isRTL ? 'right' : 'left',
    originY: 'top'
  };
  const results = getPopoverPosition(isRTL, contentWidth, contentHeight, arrowWidth, arrowHeight, reference, side, align, defaultPosition, trigger, ev);
  const padding = size === 'cover' ? 0 : POPOVER_IOS_BODY_PADDING;
  const margin = size === 'cover' ? 0 : 25;
  const {
    originX,
    originY,
    top,
    left,
    bottom,
    checkSafeAreaLeft,
    checkSafeAreaRight,
    arrowTop,
    arrowLeft,
    addPopoverBottomClass
  } = calculateWindowAdjustment(side, results.top, results.left, padding, bodyWidth, bodyHeight, contentWidth, contentHeight, margin, results.originX, results.originY, results.referenceCoordinates, results.arrowTop, results.arrowLeft, arrowHeight);
  const baseAnimation = (0,_animation_4ff3f603_js__WEBPACK_IMPORTED_MODULE_9__.c)();
  const backdropAnimation = (0,_animation_4ff3f603_js__WEBPACK_IMPORTED_MODULE_9__.c)();
  const wrapperAnimation = (0,_animation_4ff3f603_js__WEBPACK_IMPORTED_MODULE_9__.c)();
  backdropAnimation.addElement(root.querySelector('ion-backdrop')).fromTo('opacity', 0.01, 'var(--backdrop-opacity)').beforeStyles({
    'pointer-events': 'none'
  }).afterClearStyles(['pointer-events']);
  wrapperAnimation.addElement(root.querySelector('.popover-wrapper')).fromTo('opacity', 0.01, 1);
  return baseAnimation.easing('ease').duration(100).beforeAddWrite(() => {
    if (size === 'cover') {
      baseEl.style.setProperty('--width', `${contentWidth}px`);
    }
    if (addPopoverBottomClass) {
      baseEl.classList.add('popover-bottom');
    }
    if (bottom !== undefined) {
      contentEl.style.setProperty('bottom', `${bottom}px`);
    }
    const safeAreaLeft = ' + var(--ion-safe-area-left, 0)';
    const safeAreaRight = ' - var(--ion-safe-area-right, 0)';
    let leftValue = `${left}px`;
    if (checkSafeAreaLeft) {
      leftValue = `${left}px${safeAreaLeft}`;
    }
    if (checkSafeAreaRight) {
      leftValue = `${left}px${safeAreaRight}`;
    }
    contentEl.style.setProperty('top', `calc(${top}px + var(--offset-y, 0))`);
    contentEl.style.setProperty('left', `calc(${leftValue} + var(--offset-x, 0))`);
    contentEl.style.setProperty('transform-origin', `${originY} ${originX}`);
    if (arrowEl !== null) {
      const didAdjustBounds = results.top !== top || results.left !== left;
      const showArrow = shouldShowArrow(side, didAdjustBounds, ev, trigger);
      if (showArrow) {
        arrowEl.style.setProperty('top', `calc(${arrowTop}px + var(--offset-y, 0))`);
        arrowEl.style.setProperty('left', `calc(${arrowLeft}px + var(--offset-x, 0))`);
      } else {
        arrowEl.style.setProperty('display', 'none');
      }
    }
  }).addAnimation([backdropAnimation, wrapperAnimation]);
};

/**
 * iOS Popover Leave Animation
 */
const iosLeaveAnimation = baseEl => {
  const root = (0,_helpers_3b390e48_js__WEBPACK_IMPORTED_MODULE_4__.g)(baseEl);
  const contentEl = root.querySelector('.popover-content');
  const arrowEl = root.querySelector('.popover-arrow');
  const baseAnimation = (0,_animation_4ff3f603_js__WEBPACK_IMPORTED_MODULE_9__.c)();
  const backdropAnimation = (0,_animation_4ff3f603_js__WEBPACK_IMPORTED_MODULE_9__.c)();
  const wrapperAnimation = (0,_animation_4ff3f603_js__WEBPACK_IMPORTED_MODULE_9__.c)();
  backdropAnimation.addElement(root.querySelector('ion-backdrop')).fromTo('opacity', 'var(--backdrop-opacity)', 0);
  wrapperAnimation.addElement(root.querySelector('.popover-wrapper')).fromTo('opacity', 0.99, 0);
  return baseAnimation.easing('ease').afterAddWrite(() => {
    baseEl.style.removeProperty('--width');
    baseEl.classList.remove('popover-bottom');
    contentEl.style.removeProperty('top');
    contentEl.style.removeProperty('left');
    contentEl.style.removeProperty('bottom');
    contentEl.style.removeProperty('transform-origin');
    if (arrowEl) {
      arrowEl.style.removeProperty('top');
      arrowEl.style.removeProperty('left');
      arrowEl.style.removeProperty('display');
    }
  }).duration(300).addAnimation([backdropAnimation, wrapperAnimation]);
};
const POPOVER_MD_BODY_PADDING = 12;
/**
 * Md Popover Enter Animation
 */
// TODO(FW-2832): types
const mdEnterAnimation = (baseEl, opts) => {
  var _a;
  const {
    event: ev,
    size,
    trigger,
    reference,
    side,
    align
  } = opts;
  const doc = baseEl.ownerDocument;
  const isRTL = doc.dir === 'rtl';
  const bodyWidth = doc.defaultView.innerWidth;
  const bodyHeight = doc.defaultView.innerHeight;
  const root = (0,_helpers_3b390e48_js__WEBPACK_IMPORTED_MODULE_4__.g)(baseEl);
  const contentEl = root.querySelector('.popover-content');
  const referenceSizeEl = trigger || ((_a = ev === null || ev === void 0 ? void 0 : ev.detail) === null || _a === void 0 ? void 0 : _a.ionShadowTarget) || (ev === null || ev === void 0 ? void 0 : ev.target);
  const {
    contentWidth,
    contentHeight
  } = getPopoverDimensions(size, contentEl, referenceSizeEl);
  const defaultPosition = {
    top: bodyHeight / 2 - contentHeight / 2,
    left: bodyWidth / 2 - contentWidth / 2,
    originX: isRTL ? 'right' : 'left',
    originY: 'top'
  };
  const results = getPopoverPosition(isRTL, contentWidth, contentHeight, 0, 0, reference, side, align, defaultPosition, trigger, ev);
  const padding = size === 'cover' ? 0 : POPOVER_MD_BODY_PADDING;
  const {
    originX,
    originY,
    top,
    left,
    bottom
  } = calculateWindowAdjustment(side, results.top, results.left, padding, bodyWidth, bodyHeight, contentWidth, contentHeight, 0, results.originX, results.originY, results.referenceCoordinates);
  const baseAnimation = (0,_animation_4ff3f603_js__WEBPACK_IMPORTED_MODULE_9__.c)();
  const backdropAnimation = (0,_animation_4ff3f603_js__WEBPACK_IMPORTED_MODULE_9__.c)();
  const wrapperAnimation = (0,_animation_4ff3f603_js__WEBPACK_IMPORTED_MODULE_9__.c)();
  const contentAnimation = (0,_animation_4ff3f603_js__WEBPACK_IMPORTED_MODULE_9__.c)();
  const viewportAnimation = (0,_animation_4ff3f603_js__WEBPACK_IMPORTED_MODULE_9__.c)();
  backdropAnimation.addElement(root.querySelector('ion-backdrop')).fromTo('opacity', 0.01, 'var(--backdrop-opacity)').beforeStyles({
    'pointer-events': 'none'
  }).afterClearStyles(['pointer-events']);
  wrapperAnimation.addElement(root.querySelector('.popover-wrapper')).duration(150).fromTo('opacity', 0.01, 1);
  contentAnimation.addElement(contentEl).beforeStyles({
    top: `calc(${top}px + var(--offset-y, 0px))`,
    left: `calc(${left}px + var(--offset-x, 0px))`,
    'transform-origin': `${originY} ${originX}`
  }).beforeAddWrite(() => {
    if (bottom !== undefined) {
      contentEl.style.setProperty('bottom', `${bottom}px`);
    }
  }).fromTo('transform', 'scale(0.8)', 'scale(1)');
  viewportAnimation.addElement(root.querySelector('.popover-viewport')).fromTo('opacity', 0.01, 1);
  return baseAnimation.easing('cubic-bezier(0.36,0.66,0.04,1)').duration(300).beforeAddWrite(() => {
    if (size === 'cover') {
      baseEl.style.setProperty('--width', `${contentWidth}px`);
    }
    if (originY === 'bottom') {
      baseEl.classList.add('popover-bottom');
    }
  }).addAnimation([backdropAnimation, wrapperAnimation, contentAnimation, viewportAnimation]);
};

/**
 * Md Popover Leave Animation
 */
const mdLeaveAnimation = baseEl => {
  const root = (0,_helpers_3b390e48_js__WEBPACK_IMPORTED_MODULE_4__.g)(baseEl);
  const contentEl = root.querySelector('.popover-content');
  const baseAnimation = (0,_animation_4ff3f603_js__WEBPACK_IMPORTED_MODULE_9__.c)();
  const backdropAnimation = (0,_animation_4ff3f603_js__WEBPACK_IMPORTED_MODULE_9__.c)();
  const wrapperAnimation = (0,_animation_4ff3f603_js__WEBPACK_IMPORTED_MODULE_9__.c)();
  backdropAnimation.addElement(root.querySelector('ion-backdrop')).fromTo('opacity', 'var(--backdrop-opacity)', 0);
  wrapperAnimation.addElement(root.querySelector('.popover-wrapper')).fromTo('opacity', 0.99, 0);
  return baseAnimation.easing('ease').afterAddWrite(() => {
    baseEl.style.removeProperty('--width');
    baseEl.classList.remove('popover-bottom');
    contentEl.style.removeProperty('top');
    contentEl.style.removeProperty('left');
    contentEl.style.removeProperty('bottom');
    contentEl.style.removeProperty('transform-origin');
  }).duration(150).addAnimation([backdropAnimation, wrapperAnimation]);
};
const popoverIosCss = ":host{--background:var(--ion-background-color, #fff);--min-width:0;--min-height:0;--max-width:auto;--height:auto;--offset-x:0px;--offset-y:0px;left:0;right:0;top:0;bottom:0;display:-ms-flexbox;display:flex;position:fixed;-ms-flex-align:center;align-items:center;-ms-flex-pack:center;justify-content:center;outline:none;color:var(--ion-text-color, #000);z-index:1001}:host(.popover-nested){pointer-events:none}:host(.popover-nested) .popover-wrapper{pointer-events:auto}:host(.overlay-hidden){display:none}.popover-wrapper{opacity:0;z-index:10}.popover-content{display:-ms-flexbox;display:flex;position:absolute;-ms-flex-direction:column;flex-direction:column;width:var(--width);min-width:var(--min-width);max-width:var(--max-width);height:var(--height);min-height:var(--min-height);max-height:var(--max-height);background:var(--background);-webkit-box-shadow:var(--box-shadow);box-shadow:var(--box-shadow);overflow:auto;z-index:10}.popover-viewport{--ion-safe-area-top:0px;--ion-safe-area-right:0px;--ion-safe-area-bottom:0px;--ion-safe-area-left:0px;display:-ms-flexbox;display:flex;-ms-flex-direction:column;flex-direction:column;overflow:hidden}:host(.popover-nested.popover-side-left){--offset-x:5px}:host(.popover-nested.popover-side-right){--offset-x:-5px}:host(.popover-nested.popover-side-start){--offset-x:5px}:host-context([dir=rtl]):host(.popover-nested.popover-side-start),:host-context([dir=rtl]).popover-nested.popover-side-start{--offset-x:-5px}:host(.popover-nested.popover-side-end){--offset-x:-5px}:host-context([dir=rtl]):host(.popover-nested.popover-side-end),:host-context([dir=rtl]).popover-nested.popover-side-end{--offset-x:5px}:host{--width:200px;--max-height:90%;--box-shadow:none;--backdrop-opacity:var(--ion-backdrop-opacity, 0.08)}:host(.popover-desktop){--box-shadow:0px 4px 16px 0px rgba(0, 0, 0, 0.12)}.popover-content{border-radius:10px}:host(.popover-desktop) .popover-content{border:0.5px solid var(--ion-color-step-100, #e6e6e6)}.popover-arrow{display:block;position:absolute;width:20px;height:10px;overflow:hidden}.popover-arrow::after{left:3px;top:3px;border-radius:3px;position:absolute;width:14px;height:14px;-webkit-transform:rotate(45deg);transform:rotate(45deg);background:var(--background);content:\"\";z-index:10}[dir=rtl] .popover-arrow::after,:host-context([dir=rtl]) .popover-arrow::after{left:unset;right:unset;right:3px}:host(.popover-bottom) .popover-arrow{top:auto;bottom:-10px}:host(.popover-bottom) .popover-arrow::after{top:-6px}:host(.popover-side-left) .popover-arrow{-webkit-transform:rotate(90deg);transform:rotate(90deg)}:host(.popover-side-right) .popover-arrow{-webkit-transform:rotate(-90deg);transform:rotate(-90deg)}:host(.popover-side-top) .popover-arrow{-webkit-transform:rotate(180deg);transform:rotate(180deg)}:host(.popover-side-start) .popover-arrow{-webkit-transform:rotate(90deg);transform:rotate(90deg)}:host-context([dir=rtl]):host(.popover-side-start) .popover-arrow,:host-context([dir=rtl]).popover-side-start .popover-arrow{-webkit-transform:rotate(-90deg);transform:rotate(-90deg)}:host(.popover-side-end) .popover-arrow{-webkit-transform:rotate(-90deg);transform:rotate(-90deg)}:host-context([dir=rtl]):host(.popover-side-end) .popover-arrow,:host-context([dir=rtl]).popover-side-end .popover-arrow{-webkit-transform:rotate(90deg);transform:rotate(90deg)}@supports ((-webkit-backdrop-filter: blur(0)) or (backdrop-filter: blur(0))){:host(.popover-translucent) .popover-content,:host(.popover-translucent) .popover-arrow::after{background:rgba(var(--ion-background-color-rgb, 255, 255, 255), 0.8);-webkit-backdrop-filter:saturate(180%) blur(20px);backdrop-filter:saturate(180%) blur(20px)}}";
const popoverMdCss = ":host{--background:var(--ion-background-color, #fff);--min-width:0;--min-height:0;--max-width:auto;--height:auto;--offset-x:0px;--offset-y:0px;left:0;right:0;top:0;bottom:0;display:-ms-flexbox;display:flex;position:fixed;-ms-flex-align:center;align-items:center;-ms-flex-pack:center;justify-content:center;outline:none;color:var(--ion-text-color, #000);z-index:1001}:host(.popover-nested){pointer-events:none}:host(.popover-nested) .popover-wrapper{pointer-events:auto}:host(.overlay-hidden){display:none}.popover-wrapper{opacity:0;z-index:10}.popover-content{display:-ms-flexbox;display:flex;position:absolute;-ms-flex-direction:column;flex-direction:column;width:var(--width);min-width:var(--min-width);max-width:var(--max-width);height:var(--height);min-height:var(--min-height);max-height:var(--max-height);background:var(--background);-webkit-box-shadow:var(--box-shadow);box-shadow:var(--box-shadow);overflow:auto;z-index:10}.popover-viewport{--ion-safe-area-top:0px;--ion-safe-area-right:0px;--ion-safe-area-bottom:0px;--ion-safe-area-left:0px;display:-ms-flexbox;display:flex;-ms-flex-direction:column;flex-direction:column;overflow:hidden}:host(.popover-nested.popover-side-left){--offset-x:5px}:host(.popover-nested.popover-side-right){--offset-x:-5px}:host(.popover-nested.popover-side-start){--offset-x:5px}:host-context([dir=rtl]):host(.popover-nested.popover-side-start),:host-context([dir=rtl]).popover-nested.popover-side-start{--offset-x:-5px}:host(.popover-nested.popover-side-end){--offset-x:-5px}:host-context([dir=rtl]):host(.popover-nested.popover-side-end),:host-context([dir=rtl]).popover-nested.popover-side-end{--offset-x:5px}:host{--width:250px;--max-height:90%;--box-shadow:0 5px 5px -3px rgba(0, 0, 0, 0.2), 0 8px 10px 1px rgba(0, 0, 0, 0.14), 0 3px 14px 2px rgba(0, 0, 0, 0.12);--backdrop-opacity:var(--ion-backdrop-opacity, 0.32)}.popover-content{border-radius:4px;-webkit-transform-origin:left top;transform-origin:left top}[dir=rtl] .popover-content,:host-context([dir=rtl]) .popover-content{-webkit-transform-origin:right top;transform-origin:right top}.popover-viewport{-webkit-transition-delay:100ms;transition-delay:100ms}";
const Popover = class {
  constructor(hostRef) {
    (0,_index_8e692445_js__WEBPACK_IMPORTED_MODULE_1__.r)(this, hostRef);
    this.didPresent = (0,_index_8e692445_js__WEBPACK_IMPORTED_MODULE_1__.e)(this, "ionPopoverDidPresent", 7);
    this.willPresent = (0,_index_8e692445_js__WEBPACK_IMPORTED_MODULE_1__.e)(this, "ionPopoverWillPresent", 7);
    this.willDismiss = (0,_index_8e692445_js__WEBPACK_IMPORTED_MODULE_1__.e)(this, "ionPopoverWillDismiss", 7);
    this.didDismiss = (0,_index_8e692445_js__WEBPACK_IMPORTED_MODULE_1__.e)(this, "ionPopoverDidDismiss", 7);
    this.didPresentShorthand = (0,_index_8e692445_js__WEBPACK_IMPORTED_MODULE_1__.e)(this, "didPresent", 7);
    this.willPresentShorthand = (0,_index_8e692445_js__WEBPACK_IMPORTED_MODULE_1__.e)(this, "willPresent", 7);
    this.willDismissShorthand = (0,_index_8e692445_js__WEBPACK_IMPORTED_MODULE_1__.e)(this, "willDismiss", 7);
    this.didDismissShorthand = (0,_index_8e692445_js__WEBPACK_IMPORTED_MODULE_1__.e)(this, "didDismiss", 7);
    this.ionMount = (0,_index_8e692445_js__WEBPACK_IMPORTED_MODULE_1__.e)(this, "ionMount", 7);
    this.parentPopover = null;
    this.popoverIndex = popoverIds++;
    this.coreDelegate = (0,_framework_delegate_c3305a28_js__WEBPACK_IMPORTED_MODULE_3__.C)();
    this.inline = false;
    this.focusDescendantOnPresent = false;
    this.presented = false;
    /** @internal */
    this.hasController = false;
    /**
     * If `true`, the keyboard will be automatically dismissed when the overlay is presented.
     */
    this.keyboardClose = true;
    /**
     * If `true`, the popover will be dismissed when the backdrop is clicked.
     */
    this.backdropDismiss = true;
    /**
     * If `true`, a backdrop will be displayed behind the popover.
     * This property controls whether or not the backdrop
     * darkens the screen when the popover is presented.
     * It does not control whether or not the backdrop
     * is active or present in the DOM.
     */
    this.showBackdrop = true;
    /**
     * If `true`, the popover will be translucent.
     * Only applies when the mode is `"ios"` and the device supports
     * [`backdrop-filter`](https://developer.mozilla.org/en-US/docs/Web/CSS/backdrop-filter#Browser_compatibility).
     */
    this.translucent = false;
    /**
     * If `true`, the popover will animate.
     */
    this.animated = true;
    /**
     * Describes what kind of interaction with the trigger that
     * should cause the popover to open. Does not apply when the `trigger`
     * property is `undefined`.
     * If `'click'`, the popover will be presented when the trigger is left clicked.
     * If `'hover'`, the popover will be presented when a pointer hovers over the trigger.
     * If `'context-menu'`, the popover will be presented when the trigger is right
     * clicked on desktop and long pressed on mobile. This will also prevent your
     * device's normal context menu from appearing.
     */
    this.triggerAction = 'click';
    /**
     * Describes how to calculate the popover width.
     * If `'cover'`, the popover width will match the width of the trigger.
     * If `'auto'`, the popover width will be determined by the content in
     * the popover.
     */
    this.size = 'auto';
    /**
     * If `true`, the popover will be automatically
     * dismissed when the content has been clicked.
     */
    this.dismissOnSelect = false;
    /**
     * Describes what to position the popover relative to.
     * If `'trigger'`, the popover will be positioned relative
     * to the trigger button. If passing in an event, this is
     * determined via event.target.
     * If `'event'`, the popover will be positioned relative
     * to the x/y coordinates of the trigger action. If passing
     * in an event, this is determined via event.clientX and event.clientY.
     */
    this.reference = 'trigger';
    /**
     * Describes which side of the `reference` point to position
     * the popover on. The `'start'` and `'end'` values are RTL-aware,
     * and the `'left'` and `'right'` values are not.
     */
    this.side = 'bottom';
    /**
     * If `true`, the popover will display an arrow that points at the
     * `reference` when running in `ios` mode. Does not apply in `md` mode.
     */
    this.arrow = true;
    /**
     * If `true`, the popover will open. If `false`, the popover will close.
     * Use this if you need finer grained control over presentation, otherwise
     * just use the popoverController or the `trigger` property.
     * Note: `isOpen` will not automatically be set back to `false` when
     * the popover dismisses. You will need to do that in your code.
     */
    this.isOpen = false;
    /**
     * @internal
     *
     * If `true` the popover will not register its own keyboard event handlers.
     * This allows the contents of the popover to handle their own keyboard interactions.
     *
     * If `false`, the popover will register its own keyboard event handlers for
     * navigating `ion-list` items within a popover (up/down/home/end/etc.).
     * This will also cancel browser keyboard event bindings to prevent scroll
     * behavior in a popover using a list of items.
     */
    this.keyboardEvents = false;
    /**
     * If `true`, the component passed into `ion-popover` will
     * automatically be mounted when the popover is created. The
     * component will remain mounted even when the popover is dismissed.
     * However, the component will be destroyed when the popover is
     * destroyed. This property is not reactive and should only be
     * used when initially creating a popover.
     *
     * Note: This feature only applies to inline popovers in JavaScript
     * frameworks such as Angular, React, and Vue.
     */
    this.keepContentsMounted = false;
    this.onBackdropTap = () => {
      this.dismiss(undefined, _overlays_58fa8e4d_js__WEBPACK_IMPORTED_MODULE_6__.B);
    };
    this.onLifecycle = modalEvent => {
      const el = this.usersElement;
      const name = LIFECYCLE_MAP[modalEvent.type];
      if (el && name) {
        const event = new CustomEvent(name, {
          bubbles: false,
          cancelable: false,
          detail: modalEvent.detail
        });
        el.dispatchEvent(event);
      }
    };
    this.configureTriggerInteraction = () => {
      const {
        trigger,
        triggerAction,
        el,
        destroyTriggerInteraction
      } = this;
      if (destroyTriggerInteraction) {
        destroyTriggerInteraction();
      }
      if (trigger === undefined) {
        return;
      }
      const triggerEl = this.triggerEl = trigger !== undefined ? document.getElementById(trigger) : null;
      if (!triggerEl) {
        (0,_index_c4b11676_js__WEBPACK_IMPORTED_MODULE_5__.p)(`A trigger element with the ID "${trigger}" was not found in the DOM. The trigger element must be in the DOM when the "trigger" property is set on ion-popover.`, this.el);
        return;
      }
      this.destroyTriggerInteraction = configureTriggerInteraction(triggerEl, triggerAction, el);
    };
    this.configureKeyboardInteraction = () => {
      const {
        destroyKeyboardInteraction,
        el
      } = this;
      if (destroyKeyboardInteraction) {
        destroyKeyboardInteraction();
      }
      this.destroyKeyboardInteraction = configureKeyboardInteraction(el);
    };
    this.configureDismissInteraction = () => {
      const {
        destroyDismissInteraction,
        parentPopover,
        triggerAction,
        triggerEl,
        el
      } = this;
      if (!parentPopover || !triggerEl) {
        return;
      }
      if (destroyDismissInteraction) {
        destroyDismissInteraction();
      }
      this.destroyDismissInteraction = configureDismissInteraction(triggerEl, triggerAction, el, parentPopover);
    };
  }
  onTriggerChange() {
    this.configureTriggerInteraction();
  }
  onIsOpenChange(newValue, oldValue) {
    if (newValue === true && oldValue === false) {
      this.present();
    } else if (newValue === false && oldValue === true) {
      this.dismiss();
    }
  }
  connectedCallback() {
    const {
      configureTriggerInteraction,
      el
    } = this;
    (0,_overlays_58fa8e4d_js__WEBPACK_IMPORTED_MODULE_6__.e)(el);
    configureTriggerInteraction();
  }
  disconnectedCallback() {
    const {
      destroyTriggerInteraction
    } = this;
    if (destroyTriggerInteraction) {
      destroyTriggerInteraction();
    }
  }
  componentWillLoad() {
    /**
     * If user has custom ID set then we should
     * not assign the default incrementing ID.
     */
    this.popoverId = this.el.hasAttribute('id') ? this.el.getAttribute('id') : `ion-popover-${this.popoverIndex}`;
    this.parentPopover = this.el.closest(`ion-popover:not(#${this.popoverId})`);
    if (this.alignment === undefined) {
      this.alignment = (0,_ionic_global_c74e4951_js__WEBPACK_IMPORTED_MODULE_2__.b)(this) === 'ios' ? 'center' : 'start';
    }
  }
  componentDidLoad() {
    const {
      parentPopover,
      isOpen
    } = this;
    /**
     * If popover was rendered with isOpen="true"
     * then we should open popover immediately.
     */
    if (isOpen === true) {
      (0,_helpers_3b390e48_js__WEBPACK_IMPORTED_MODULE_4__.r)(() => this.present());
    }
    if (parentPopover) {
      (0,_helpers_3b390e48_js__WEBPACK_IMPORTED_MODULE_4__.a)(parentPopover, 'ionPopoverWillDismiss', () => {
        this.dismiss(undefined, undefined, false);
      });
    }
  }
  /**
   * When opening a popover from a trigger, we should not be
   * modifying the `event` prop from inside the component.
   * Additionally, when pressing the "Right" arrow key, we need
   * to shift focus to the first descendant in the newly presented
   * popover.
   *
   * @internal
   */
  presentFromTrigger(_x3) {
    var _this = this;
    return (0,_opt_atlassian_pipelines_agent_build_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_0__["default"])(function* (event, focusDescendant = false) {
      _this.focusDescendantOnPresent = focusDescendant;
      yield _this.present(event);
      _this.focusDescendantOnPresent = false;
    }).apply(this, arguments);
  }
  /**
   * Determines whether or not an overlay
   * is being used inline or via a controller/JS
   * and returns the correct delegate.
   * By default, subsequent calls to getDelegate
   * will use a cached version of the delegate.
   * This is useful for calling dismiss after
   * present so that the correct delegate is given.
   */
  getDelegate(force = false) {
    if (this.workingDelegate && !force) {
      return {
        delegate: this.workingDelegate,
        inline: this.inline
      };
    }
    /**
     * If using overlay inline
     * we potentially need to use the coreDelegate
     * so that this works in vanilla JS apps.
     * If a developer has presented this component
     * via a controller, then we can assume
     * the component is already in the
     * correct place.
     */
    const parentEl = this.el.parentNode;
    const inline = this.inline = parentEl !== null && !this.hasController;
    const delegate = this.workingDelegate = inline ? this.delegate || this.coreDelegate : this.delegate;
    return {
      inline,
      delegate
    };
  }
  /**
   * Present the popover overlay after it has been created.
   * Developers can pass a mouse, touch, or pointer event
   * to position the popover relative to where that event
   * was dispatched.
   */
  present(event) {
    var _this2 = this;
    return (0,_opt_atlassian_pipelines_agent_build_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_0__["default"])(function* () {
      if (_this2.presented) {
        return;
      }
      /**
       * When using an inline popover
       * and dismissing a popover it is possible to
       * quickly present the popover while it is
       * dismissing. We need to await any current
       * transition to allow the dismiss to finish
       * before presenting again.
       */
      if (_this2.currentTransition !== undefined) {
        yield _this2.currentTransition;
      }
      const {
        inline,
        delegate
      } = _this2.getDelegate(true);
      _this2.usersElement = yield (0,_framework_delegate_c3305a28_js__WEBPACK_IMPORTED_MODULE_3__.a)(delegate, _this2.el, _this2.component, ['popover-viewport'], _this2.componentProps, inline);
      yield (0,_index_27c7e5c4_js__WEBPACK_IMPORTED_MODULE_8__.e)(_this2.usersElement);
      if (!_this2.keyboardEvents) {
        _this2.configureKeyboardInteraction();
      }
      _this2.configureDismissInteraction();
      _this2.ionMount.emit();
      return new Promise(resolve => {
        /**
         * Wait two request animation frame loops before presenting the popover.
         * This allows the framework implementations enough time to mount
         * the popover contents, so the bounding box is set when the popover
         * transition starts.
         *
         * On Angular and React, a single raf is enough time, but for Vue
         * we need to wait two rafs. As a result we are using two rafs for
         * all frameworks to ensure the popover is presented correctly.
         */
        (0,_helpers_3b390e48_js__WEBPACK_IMPORTED_MODULE_4__.r)(() => {
          (0,_helpers_3b390e48_js__WEBPACK_IMPORTED_MODULE_4__.r)( /*#__PURE__*/(0,_opt_atlassian_pipelines_agent_build_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_0__["default"])(function* () {
            _this2.currentTransition = (0,_overlays_58fa8e4d_js__WEBPACK_IMPORTED_MODULE_6__.d)(_this2, 'popoverEnter', iosEnterAnimation, mdEnterAnimation, {
              event: event || _this2.event,
              size: _this2.size,
              trigger: _this2.triggerEl,
              reference: _this2.reference,
              side: _this2.side,
              align: _this2.alignment
            });
            yield _this2.currentTransition;
            _this2.currentTransition = undefined;
            /**
             * If popover is nested and was
             * presented using the "Right" arrow key,
             * we need to move focus to the first
             * descendant inside of the popover.
             */
            if (_this2.focusDescendantOnPresent) {
              (0,_overlays_58fa8e4d_js__WEBPACK_IMPORTED_MODULE_6__.j)(_this2.el, _this2.el);
            }
            resolve();
          }));
        });
      });
    })();
  }
  /**
   * Dismiss the popover overlay after it has been presented.
   *
   * @param data Any data to emit in the dismiss events.
   * @param role The role of the element that is dismissing the popover. For example, 'cancel' or 'backdrop'.
   * @param dismissParentPopover If `true`, dismissing this popover will also dismiss
   * a parent popover if this popover is nested. Defaults to `true`.
   */
  dismiss(_x4, _x5) {
    var _this3 = this;
    return (0,_opt_atlassian_pipelines_agent_build_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_0__["default"])(function* (data, role, dismissParentPopover = true) {
      /**
       * When using an inline popover
       * and presenting a popover it is possible to
       * quickly dismiss the popover while it is
       * presenting. We need to await any current
       * transition to allow the present to finish
       * before dismissing again.
       */
      if (_this3.currentTransition !== undefined) {
        yield _this3.currentTransition;
      }
      const {
        destroyKeyboardInteraction,
        destroyDismissInteraction
      } = _this3;
      if (dismissParentPopover && _this3.parentPopover) {
        _this3.parentPopover.dismiss(data, role, dismissParentPopover);
      }
      _this3.currentTransition = (0,_overlays_58fa8e4d_js__WEBPACK_IMPORTED_MODULE_6__.f)(_this3, data, role, 'popoverLeave', iosLeaveAnimation, mdLeaveAnimation, _this3.event);
      const shouldDismiss = yield _this3.currentTransition;
      if (shouldDismiss) {
        if (destroyKeyboardInteraction) {
          destroyKeyboardInteraction();
          _this3.destroyKeyboardInteraction = undefined;
        }
        if (destroyDismissInteraction) {
          destroyDismissInteraction();
          _this3.destroyDismissInteraction = undefined;
        }
        /**
         * If using popover inline
         * we potentially need to use the coreDelegate
         * so that this works in vanilla JS apps
         */
        const {
          delegate
        } = _this3.getDelegate();
        yield (0,_framework_delegate_c3305a28_js__WEBPACK_IMPORTED_MODULE_3__.d)(delegate, _this3.usersElement);
      }
      _this3.currentTransition = undefined;
      return shouldDismiss;
    }).apply(this, arguments);
  }
  /**
   * @internal
   */
  getParentPopover() {
    var _this4 = this;
    return (0,_opt_atlassian_pipelines_agent_build_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_0__["default"])(function* () {
      return _this4.parentPopover;
    })();
  }
  /**
   * Returns a promise that resolves when the popover did dismiss.
   */
  onDidDismiss() {
    return (0,_overlays_58fa8e4d_js__WEBPACK_IMPORTED_MODULE_6__.g)(this.el, 'ionPopoverDidDismiss');
  }
  /**
   * Returns a promise that resolves when the popover will dismiss.
   */
  onWillDismiss() {
    return (0,_overlays_58fa8e4d_js__WEBPACK_IMPORTED_MODULE_6__.g)(this.el, 'ionPopoverWillDismiss');
  }
  render() {
    const mode = (0,_ionic_global_c74e4951_js__WEBPACK_IMPORTED_MODULE_2__.b)(this);
    const {
      onLifecycle,
      popoverId,
      parentPopover,
      dismissOnSelect,
      side,
      arrow,
      htmlAttributes
    } = this;
    const desktop = (0,_ionic_global_c74e4951_js__WEBPACK_IMPORTED_MODULE_2__.a)('desktop');
    const enableArrow = arrow && !parentPopover;
    return (0,_index_8e692445_js__WEBPACK_IMPORTED_MODULE_1__.h)(_index_8e692445_js__WEBPACK_IMPORTED_MODULE_1__.H, Object.assign({
      "aria-modal": "true",
      "no-router": true,
      tabindex: "-1"
    }, htmlAttributes, {
      style: {
        zIndex: `${20000 + this.overlayIndex}`
      },
      id: popoverId,
      class: Object.assign(Object.assign({}, (0,_theme_7670341c_js__WEBPACK_IMPORTED_MODULE_7__.g)(this.cssClass)), {
        [mode]: true,
        'popover-translucent': this.translucent,
        'overlay-hidden': true,
        'popover-desktop': desktop,
        [`popover-side-${side}`]: true,
        'popover-nested': !!parentPopover
      }),
      onIonPopoverDidPresent: onLifecycle,
      onIonPopoverWillPresent: onLifecycle,
      onIonPopoverWillDismiss: onLifecycle,
      onIonPopoverDidDismiss: onLifecycle,
      onIonBackdropTap: this.onBackdropTap
    }), !parentPopover && (0,_index_8e692445_js__WEBPACK_IMPORTED_MODULE_1__.h)("ion-backdrop", {
      tappable: this.backdropDismiss,
      visible: this.showBackdrop,
      part: "backdrop"
    }), (0,_index_8e692445_js__WEBPACK_IMPORTED_MODULE_1__.h)("div", {
      class: "popover-wrapper ion-overlay-wrapper",
      onClick: dismissOnSelect ? () => this.dismiss() : undefined
    }, enableArrow && (0,_index_8e692445_js__WEBPACK_IMPORTED_MODULE_1__.h)("div", {
      class: "popover-arrow",
      part: "arrow"
    }), (0,_index_8e692445_js__WEBPACK_IMPORTED_MODULE_1__.h)("div", {
      class: "popover-content",
      part: "content"
    }, (0,_index_8e692445_js__WEBPACK_IMPORTED_MODULE_1__.h)("slot", null))));
  }
  get el() {
    return (0,_index_8e692445_js__WEBPACK_IMPORTED_MODULE_1__.i)(this);
  }
  static get watchers() {
    return {
      "trigger": ["onTriggerChange"],
      "triggerAction": ["onTriggerChange"],
      "isOpen": ["onIsOpenChange"]
    };
  }
};
const LIFECYCLE_MAP = {
  ionPopoverDidPresent: 'ionViewDidEnter',
  ionPopoverWillPresent: 'ionViewWillEnter',
  ionPopoverWillDismiss: 'ionViewWillLeave',
  ionPopoverDidDismiss: 'ionViewDidLeave'
};
let popoverIds = 0;
Popover.style = {
  ios: popoverIosCss,
  md: popoverMdCss
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
//# sourceMappingURL=8050.a873477528427b01.js.map