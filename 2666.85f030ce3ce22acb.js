"use strict";
(self["webpackChunkapp"] = self["webpackChunkapp"] || []).push([[2666],{

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

/***/ 92666:
/*!******************************************************************!*\
  !*** ./node_modules/@ionic/core/dist/esm/ion-reorder_2.entry.js ***!
  \******************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "ion_reorder": () => (/* binding */ Reorder),
/* harmony export */   "ion_reorder_group": () => (/* binding */ ReorderGroup)
/* harmony export */ });
/* harmony import */ var _opt_atlassian_pipelines_agent_build_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/esm/asyncToGenerator.js */ 71670);
/* harmony import */ var _index_8e692445_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./index-8e692445.js */ 91559);
/* harmony import */ var _index_2bcb741c_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./index-2bcb741c.js */ 7309);
/* harmony import */ var _ionic_global_c74e4951_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./ionic-global-c74e4951.js */ 95823);
/* harmony import */ var _index_e6d1a8be_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./index-e6d1a8be.js */ 24311);
/* harmony import */ var _helpers_3b390e48_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./helpers-3b390e48.js */ 29259);
/* harmony import */ var _haptic_029a46f6_js__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./haptic-029a46f6.js */ 12815);
/* harmony import */ var _index_c4b11676_js__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./index-c4b11676.js */ 99273);

/*!
 * (C) Ionic http://ionicframework.com - MIT License
 */







const reorderIosCss = ":host([slot]){display:none;line-height:0;z-index:100}.reorder-icon{display:block;font-size:22px}.reorder-icon{font-size:34px;opacity:0.4}";
const reorderMdCss = ":host([slot]){display:none;line-height:0;z-index:100}.reorder-icon{display:block;font-size:22px}.reorder-icon{font-size:31px;opacity:0.3}";
const Reorder = class {
  constructor(hostRef) {
    (0,_index_8e692445_js__WEBPACK_IMPORTED_MODULE_1__.r)(this, hostRef);
  }
  onClick(ev) {
    const reorderGroup = this.el.closest('ion-reorder-group');
    ev.preventDefault();
    // Only stop event propagation if the reorder is inside of an enabled
    // reorder group. This allows interaction with clickable children components.
    if (!reorderGroup || !reorderGroup.disabled) {
      ev.stopImmediatePropagation();
    }
  }
  render() {
    const mode = (0,_ionic_global_c74e4951_js__WEBPACK_IMPORTED_MODULE_3__.b)(this);
    const reorderIcon = mode === 'ios' ? _index_2bcb741c_js__WEBPACK_IMPORTED_MODULE_2__.j : _index_2bcb741c_js__WEBPACK_IMPORTED_MODULE_2__.k;
    return (0,_index_8e692445_js__WEBPACK_IMPORTED_MODULE_1__.h)(_index_8e692445_js__WEBPACK_IMPORTED_MODULE_1__.H, {
      class: mode
    }, (0,_index_8e692445_js__WEBPACK_IMPORTED_MODULE_1__.h)("slot", null, (0,_index_8e692445_js__WEBPACK_IMPORTED_MODULE_1__.h)("ion-icon", {
      icon: reorderIcon,
      lazy: false,
      class: "reorder-icon",
      part: "icon"
    })));
  }
  get el() {
    return (0,_index_8e692445_js__WEBPACK_IMPORTED_MODULE_1__.i)(this);
  }
};
Reorder.style = {
  ios: reorderIosCss,
  md: reorderMdCss
};
const reorderGroupCss = ".reorder-list-active>*{display:block;-webkit-transition:-webkit-transform 300ms;transition:-webkit-transform 300ms;transition:transform 300ms;transition:transform 300ms, -webkit-transform 300ms;will-change:transform}.reorder-enabled{-webkit-user-select:none;-moz-user-select:none;-ms-user-select:none;user-select:none}.reorder-enabled ion-reorder{display:block;cursor:-webkit-grab;cursor:grab;pointer-events:all;-ms-touch-action:none;touch-action:none}.reorder-selected,.reorder-selected ion-reorder{cursor:-webkit-grabbing;cursor:grabbing}.reorder-selected{position:relative;-webkit-transition:none !important;transition:none !important;-webkit-box-shadow:0 0 10px rgba(0, 0, 0, 0.4);box-shadow:0 0 10px rgba(0, 0, 0, 0.4);opacity:0.8;z-index:100}.reorder-visible ion-reorder .reorder-icon{-webkit-transform:translate3d(0,  0,  0);transform:translate3d(0,  0,  0)}";
const ReorderGroup = class {
  constructor(hostRef) {
    (0,_index_8e692445_js__WEBPACK_IMPORTED_MODULE_1__.r)(this, hostRef);
    this.ionItemReorder = (0,_index_8e692445_js__WEBPACK_IMPORTED_MODULE_1__.e)(this, "ionItemReorder", 7);
    this.lastToIndex = -1;
    this.cachedHeights = [];
    this.scrollElTop = 0;
    this.scrollElBottom = 0;
    this.scrollElInitial = 0;
    this.containerTop = 0;
    this.containerBottom = 0;
    this.state = 0 /* ReorderGroupState.Idle */;
    /**
     * If `true`, the reorder will be hidden.
     */
    this.disabled = true;
  }
  disabledChanged() {
    if (this.gesture) {
      this.gesture.enable(!this.disabled);
    }
  }
  connectedCallback() {
    var _this = this;
    return (0,_opt_atlassian_pipelines_agent_build_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_0__["default"])(function* () {
      const contentEl = (0,_index_e6d1a8be_js__WEBPACK_IMPORTED_MODULE_4__.f)(_this.el);
      if (contentEl) {
        _this.scrollEl = yield (0,_index_e6d1a8be_js__WEBPACK_IMPORTED_MODULE_4__.g)(contentEl);
      }
      _this.gesture = (yield Promise.resolve(/*! import() */).then(__webpack_require__.bind(__webpack_require__, /*! ./index-422b6e83.js */ 88759))).createGesture({
        el: _this.el,
        gestureName: 'reorder',
        gesturePriority: 110,
        threshold: 0,
        direction: 'y',
        passive: false,
        canStart: detail => _this.canStart(detail),
        onStart: ev => _this.onStart(ev),
        onMove: ev => _this.onMove(ev),
        onEnd: () => _this.onEnd()
      });
      _this.disabledChanged();
    })();
  }
  disconnectedCallback() {
    this.onEnd();
    if (this.gesture) {
      this.gesture.destroy();
      this.gesture = undefined;
    }
  }
  /**
   * Completes the reorder operation. Must be called by the `ionItemReorder` event.
   *
   * If a list of items is passed, the list will be reordered and returned in the
   * proper order.
   *
   * If no parameters are passed or if `true` is passed in, the reorder will complete
   * and the item will remain in the position it was dragged to. If `false` is passed,
   * the reorder will complete and the item will bounce back to its original position.
   *
   * @param listOrReorder A list of items to be sorted and returned in the new order or a
   * boolean of whether or not the reorder should reposition the item.
   */
  complete(listOrReorder) {
    return Promise.resolve(this.completeReorder(listOrReorder));
  }
  canStart(ev) {
    if (this.selectedItemEl || this.state !== 0 /* ReorderGroupState.Idle */) {
      return false;
    }
    const target = ev.event.target;
    const reorderEl = target.closest('ion-reorder');
    if (!reorderEl) {
      return false;
    }
    const item = findReorderItem(reorderEl, this.el);
    if (!item) {
      return false;
    }
    ev.data = item;
    return true;
  }
  onStart(ev) {
    ev.event.preventDefault();
    const item = this.selectedItemEl = ev.data;
    const heights = this.cachedHeights;
    heights.length = 0;
    const el = this.el;
    const children = el.children;
    if (!children || children.length === 0) {
      return;
    }
    let sum = 0;
    for (let i = 0; i < children.length; i++) {
      const child = children[i];
      sum += child.offsetHeight;
      heights.push(sum);
      child.$ionIndex = i;
    }
    const box = el.getBoundingClientRect();
    this.containerTop = box.top;
    this.containerBottom = box.bottom;
    if (this.scrollEl) {
      const scrollBox = this.scrollEl.getBoundingClientRect();
      this.scrollElInitial = this.scrollEl.scrollTop;
      this.scrollElTop = scrollBox.top + AUTO_SCROLL_MARGIN;
      this.scrollElBottom = scrollBox.bottom - AUTO_SCROLL_MARGIN;
    } else {
      this.scrollElInitial = 0;
      this.scrollElTop = 0;
      this.scrollElBottom = 0;
    }
    this.lastToIndex = indexForItem(item);
    this.selectedItemHeight = item.offsetHeight;
    this.state = 1 /* ReorderGroupState.Active */;
    item.classList.add(ITEM_REORDER_SELECTED);
    (0,_haptic_029a46f6_js__WEBPACK_IMPORTED_MODULE_6__.a)();
  }
  onMove(ev) {
    const selectedItem = this.selectedItemEl;
    if (!selectedItem) {
      return;
    }
    // Scroll if we reach the scroll margins
    const scroll = this.autoscroll(ev.currentY);
    // // Get coordinate
    const top = this.containerTop - scroll;
    const bottom = this.containerBottom - scroll;
    const currentY = Math.max(top, Math.min(ev.currentY, bottom));
    const deltaY = scroll + currentY - ev.startY;
    const normalizedY = currentY - top;
    const toIndex = this.itemIndexForTop(normalizedY);
    if (toIndex !== this.lastToIndex) {
      const fromIndex = indexForItem(selectedItem);
      this.lastToIndex = toIndex;
      (0,_haptic_029a46f6_js__WEBPACK_IMPORTED_MODULE_6__.b)();
      this.reorderMove(fromIndex, toIndex);
    }
    // Update selected item position
    selectedItem.style.transform = `translateY(${deltaY}px)`;
  }
  onEnd() {
    const selectedItemEl = this.selectedItemEl;
    this.state = 2 /* ReorderGroupState.Complete */;
    if (!selectedItemEl) {
      this.state = 0 /* ReorderGroupState.Idle */;
      return;
    }
    const toIndex = this.lastToIndex;
    const fromIndex = indexForItem(selectedItemEl);
    if (toIndex === fromIndex) {
      this.completeReorder();
    } else {
      this.ionItemReorder.emit({
        from: fromIndex,
        to: toIndex,
        complete: this.completeReorder.bind(this)
      });
    }
    (0,_haptic_029a46f6_js__WEBPACK_IMPORTED_MODULE_6__.h)();
  }
  completeReorder(listOrReorder) {
    const selectedItemEl = this.selectedItemEl;
    if (selectedItemEl && this.state === 2 /* ReorderGroupState.Complete */) {
      const children = this.el.children;
      const len = children.length;
      const toIndex = this.lastToIndex;
      const fromIndex = indexForItem(selectedItemEl);
      /**
       * insertBefore and setting the transform
       * needs to happen in the same frame otherwise
       * there will be a duplicate transition. This primarily
       * impacts Firefox where insertBefore and transform operations
       * are happening in two separate frames.
       */
      (0,_helpers_3b390e48_js__WEBPACK_IMPORTED_MODULE_5__.r)(() => {
        if (toIndex !== fromIndex && (listOrReorder === undefined || listOrReorder === true)) {
          const ref = fromIndex < toIndex ? children[toIndex + 1] : children[toIndex];
          this.el.insertBefore(selectedItemEl, ref);
        }
        for (let i = 0; i < len; i++) {
          children[i].style['transform'] = '';
        }
      });
      if (Array.isArray(listOrReorder)) {
        listOrReorder = reorderArray(listOrReorder, fromIndex, toIndex);
      }
      selectedItemEl.style.transition = '';
      selectedItemEl.classList.remove(ITEM_REORDER_SELECTED);
      this.selectedItemEl = undefined;
      this.state = 0 /* ReorderGroupState.Idle */;
    }

    return listOrReorder;
  }
  itemIndexForTop(deltaY) {
    const heights = this.cachedHeights;
    for (let i = 0; i < heights.length; i++) {
      if (heights[i] > deltaY) {
        return i;
      }
    }
    return heights.length - 1;
  }
  /********* DOM WRITE ********* */
  reorderMove(fromIndex, toIndex) {
    const itemHeight = this.selectedItemHeight;
    const children = this.el.children;
    for (let i = 0; i < children.length; i++) {
      const style = children[i].style;
      let value = '';
      if (i > fromIndex && i <= toIndex) {
        value = `translateY(${-itemHeight}px)`;
      } else if (i < fromIndex && i >= toIndex) {
        value = `translateY(${itemHeight}px)`;
      }
      style['transform'] = value;
    }
  }
  autoscroll(posY) {
    if (!this.scrollEl) {
      return 0;
    }
    let amount = 0;
    if (posY < this.scrollElTop) {
      amount = -SCROLL_JUMP;
    } else if (posY > this.scrollElBottom) {
      amount = SCROLL_JUMP;
    }
    if (amount !== 0) {
      this.scrollEl.scrollBy(0, amount);
    }
    return this.scrollEl.scrollTop - this.scrollElInitial;
  }
  render() {
    const mode = (0,_ionic_global_c74e4951_js__WEBPACK_IMPORTED_MODULE_3__.b)(this);
    return (0,_index_8e692445_js__WEBPACK_IMPORTED_MODULE_1__.h)(_index_8e692445_js__WEBPACK_IMPORTED_MODULE_1__.H, {
      class: {
        [mode]: true,
        'reorder-enabled': !this.disabled,
        'reorder-list-active': this.state !== 0 /* ReorderGroupState.Idle */
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
const indexForItem = element => {
  return element['$ionIndex'];
};
const findReorderItem = (node, container) => {
  let parent;
  while (node) {
    parent = node.parentElement;
    if (parent === container) {
      return node;
    }
    node = parent;
  }
  return undefined;
};
const AUTO_SCROLL_MARGIN = 60;
const SCROLL_JUMP = 10;
const ITEM_REORDER_SELECTED = 'reorder-selected';
const reorderArray = (array, from, to) => {
  const element = array[from];
  array.splice(from, 1);
  array.splice(to, 0, element);
  return array.slice();
};
ReorderGroup.style = reorderGroupCss;


/***/ })

}]);
//# sourceMappingURL=2666.85f030ce3ce22acb.js.map