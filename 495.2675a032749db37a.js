"use strict";
(self["webpackChunkapp"] = self["webpackChunkapp"] || []).push([[495],{

/***/ 495:
/*!***************************************************************!*\
  !*** ./node_modules/@ionic/core/dist/esm/ion-menu_3.entry.js ***!
  \***************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "ion_menu": () => (/* binding */ Menu),
/* harmony export */   "ion_menu_button": () => (/* binding */ MenuButton),
/* harmony export */   "ion_menu_toggle": () => (/* binding */ MenuToggle)
/* harmony export */ });
/* harmony import */ var _opt_atlassian_pipelines_agent_build_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/esm/asyncToGenerator.js */ 71670);
/* harmony import */ var _index_8e692445_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./index-8e692445.js */ 91559);
/* harmony import */ var _ionic_global_c74e4951_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./ionic-global-c74e4951.js */ 95823);
/* harmony import */ var _cubic_bezier_e78d1307_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./cubic-bezier-e78d1307.js */ 31463);
/* harmony import */ var _gesture_controller_17060b7c_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./gesture-controller-17060b7c.js */ 56379);
/* harmony import */ var _helpers_3b390e48_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./helpers-3b390e48.js */ 29259);
/* harmony import */ var _index_2b839939_js__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./index-2b839939.js */ 97351);
/* harmony import */ var _overlays_58fa8e4d_js__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./overlays-58fa8e4d.js */ 6605);
/* harmony import */ var _index_2bcb741c_js__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./index-2bcb741c.js */ 7309);
/* harmony import */ var _theme_7670341c_js__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./theme-7670341c.js */ 50320);
/* harmony import */ var _hardware_back_button_490df115_js__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./hardware-back-button-490df115.js */ 70159);
/* harmony import */ var _animation_4ff3f603_js__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ./animation-4ff3f603.js */ 15933);
/* harmony import */ var _index_33ffec25_js__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ./index-33ffec25.js */ 42286);

/*!
 * (C) Ionic http://ionicframework.com - MIT License
 */












const menuIosCss = ":host{--width:304px;--min-width:auto;--max-width:auto;--height:100%;--min-height:auto;--max-height:auto;--background:var(--ion-background-color, #fff);left:0;right:0;top:0;bottom:0;display:none;position:absolute;contain:strict}:host(.show-menu){display:block}.menu-inner{left:0;right:auto;top:0;bottom:0;-webkit-transform:translateX(-9999px);transform:translateX(-9999px);display:-ms-flexbox;display:flex;position:absolute;-ms-flex-direction:column;flex-direction:column;-ms-flex-pack:justify;justify-content:space-between;width:var(--width);min-width:var(--min-width);max-width:var(--max-width);height:var(--height);min-height:var(--min-height);max-height:var(--max-height);background:var(--background);contain:strict}[dir=rtl] .menu-inner,:host-context([dir=rtl]) .menu-inner{left:unset;right:unset;left:auto;right:0}:host(.menu-side-start) .menu-inner{--ion-safe-area-right:0px;right:auto;left:0}:host(.menu-side-end) .menu-inner{--ion-safe-area-left:0px;right:0;left:auto;}ion-backdrop{display:none;opacity:0.01;z-index:-1}@media (max-width: 340px){.menu-inner{--width:264px}}:host(.menu-type-reveal){z-index:0}:host(.menu-type-reveal.show-menu) .menu-inner{-webkit-transform:translate3d(0,  0,  0);transform:translate3d(0,  0,  0)}:host(.menu-type-overlay){z-index:1000}:host(.menu-type-overlay) .show-backdrop{display:block;cursor:pointer}:host(.menu-pane-visible){width:var(--width);min-width:var(--min-width);max-width:var(--max-width)}:host(.menu-pane-visible) .menu-inner{left:0;right:0;width:auto;-webkit-transform:none !important;transform:none !important;-webkit-box-shadow:none !important;box-shadow:none !important}:host(.menu-pane-visible) ion-backdrop{display:hidden !important;}:host(.menu-type-push){z-index:1000}:host(.menu-type-push) .show-backdrop{display:block}";
const menuMdCss = ":host{--width:304px;--min-width:auto;--max-width:auto;--height:100%;--min-height:auto;--max-height:auto;--background:var(--ion-background-color, #fff);left:0;right:0;top:0;bottom:0;display:none;position:absolute;contain:strict}:host(.show-menu){display:block}.menu-inner{left:0;right:auto;top:0;bottom:0;-webkit-transform:translateX(-9999px);transform:translateX(-9999px);display:-ms-flexbox;display:flex;position:absolute;-ms-flex-direction:column;flex-direction:column;-ms-flex-pack:justify;justify-content:space-between;width:var(--width);min-width:var(--min-width);max-width:var(--max-width);height:var(--height);min-height:var(--min-height);max-height:var(--max-height);background:var(--background);contain:strict}[dir=rtl] .menu-inner,:host-context([dir=rtl]) .menu-inner{left:unset;right:unset;left:auto;right:0}:host(.menu-side-start) .menu-inner{--ion-safe-area-right:0px;right:auto;left:0}:host(.menu-side-end) .menu-inner{--ion-safe-area-left:0px;right:0;left:auto;}ion-backdrop{display:none;opacity:0.01;z-index:-1}@media (max-width: 340px){.menu-inner{--width:264px}}:host(.menu-type-reveal){z-index:0}:host(.menu-type-reveal.show-menu) .menu-inner{-webkit-transform:translate3d(0,  0,  0);transform:translate3d(0,  0,  0)}:host(.menu-type-overlay){z-index:1000}:host(.menu-type-overlay) .show-backdrop{display:block;cursor:pointer}:host(.menu-pane-visible){width:var(--width);min-width:var(--min-width);max-width:var(--max-width)}:host(.menu-pane-visible) .menu-inner{left:0;right:0;width:auto;-webkit-transform:none !important;transform:none !important;-webkit-box-shadow:none !important;box-shadow:none !important}:host(.menu-pane-visible) ion-backdrop{display:hidden !important;}:host(.menu-type-overlay) .menu-inner{-webkit-box-shadow:4px 0px 16px rgba(0, 0, 0, 0.18);box-shadow:4px 0px 16px rgba(0, 0, 0, 0.18)}";
const iosEasing = 'cubic-bezier(0.32,0.72,0,1)';
const mdEasing = 'cubic-bezier(0.0,0.0,0.2,1)';
const iosEasingReverse = 'cubic-bezier(1, 0, 0.68, 0.28)';
const mdEasingReverse = 'cubic-bezier(0.4, 0, 0.6, 1)';
const focusableQueryString = '[tabindex]:not([tabindex^="-"]), input:not([type=hidden]):not([tabindex^="-"]), textarea:not([tabindex^="-"]), button:not([tabindex^="-"]), select:not([tabindex^="-"]), .ion-focusable:not([tabindex^="-"])';
const Menu = class {
  constructor(hostRef) {
    (0,_index_8e692445_js__WEBPACK_IMPORTED_MODULE_1__.r)(this, hostRef);
    this.ionWillOpen = (0,_index_8e692445_js__WEBPACK_IMPORTED_MODULE_1__.e)(this, "ionWillOpen", 7);
    this.ionWillClose = (0,_index_8e692445_js__WEBPACK_IMPORTED_MODULE_1__.e)(this, "ionWillClose", 7);
    this.ionDidOpen = (0,_index_8e692445_js__WEBPACK_IMPORTED_MODULE_1__.e)(this, "ionDidOpen", 7);
    this.ionDidClose = (0,_index_8e692445_js__WEBPACK_IMPORTED_MODULE_1__.e)(this, "ionDidClose", 7);
    this.ionMenuChange = (0,_index_8e692445_js__WEBPACK_IMPORTED_MODULE_1__.e)(this, "ionMenuChange", 7);
    this.lastOnEnd = 0;
    this.blocker = _gesture_controller_17060b7c_js__WEBPACK_IMPORTED_MODULE_4__.G.createBlocker({
      disableScroll: true
    });
    this.isAnimating = false;
    this._isOpen = false;
    this.inheritedAttributes = {};
    this.handleFocus = ev => {
      /**
       * Overlays have their own focus trapping listener
       * so we do not want the two listeners to conflict
       * with each other. If the top-most overlay that is
       * open does not contain this ion-menu, then ion-menu's
       * focus trapping should not run.
       */
      const lastOverlay = (0,_overlays_58fa8e4d_js__WEBPACK_IMPORTED_MODULE_7__.k)(document);
      if (lastOverlay && !lastOverlay.contains(this.el)) {
        return;
      }
      this.trapKeyboardFocus(ev, document);
    };
    this.isPaneVisible = false;
    this.isEndSide = false;
    /**
     * If `true`, the menu is disabled.
     */
    this.disabled = false;
    /**
     * Which side of the view the menu should be placed.
     */
    this.side = 'start';
    /**
     * If `true`, swiping the menu is enabled.
     */
    this.swipeGesture = true;
    /**
     * The edge threshold for dragging the menu open.
     * If a drag/swipe happens over this value, the menu is not triggered.
     */
    this.maxEdgeStart = 50;
  }
  typeChanged(type, oldType) {
    const contentEl = this.contentEl;
    if (contentEl) {
      if (oldType !== undefined) {
        contentEl.classList.remove(`menu-content-${oldType}`);
      }
      contentEl.classList.add(`menu-content-${type}`);
      contentEl.removeAttribute('style');
    }
    if (this.menuInnerEl) {
      // Remove effects of previous animations
      this.menuInnerEl.removeAttribute('style');
    }
    this.animation = undefined;
  }
  disabledChanged() {
    this.updateState();
    this.ionMenuChange.emit({
      disabled: this.disabled,
      open: this._isOpen
    });
  }
  sideChanged() {
    this.isEndSide = (0,_helpers_3b390e48_js__WEBPACK_IMPORTED_MODULE_5__.o)(this.side);
  }
  swipeGestureChanged() {
    this.updateState();
  }
  connectedCallback() {
    var _this = this;
    return (0,_opt_atlassian_pipelines_agent_build_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_0__["default"])(function* () {
      // TODO: connectedCallback is fired in CE build
      // before WC is defined. This needs to be fixed in Stencil.
      if (typeof customElements !== 'undefined' && customElements != null) {
        yield customElements.whenDefined('ion-menu');
      }
      if (_this.type === undefined) {
        _this.type = _ionic_global_c74e4951_js__WEBPACK_IMPORTED_MODULE_2__.c.get('menuType', 'overlay');
      }
      const content = _this.contentId !== undefined ? document.getElementById(_this.contentId) : null;
      if (content === null) {
        console.error('Menu: must have a "content" element to listen for drag events on.');
        return;
      }
      if (_this.el.contains(content)) {
        console.error(`Menu: "contentId" should refer to the main view's ion-content, not the ion-content inside of the ion-menu.`);
      }
      _this.contentEl = content;
      // add menu's content classes
      content.classList.add('menu-content');
      _this.typeChanged(_this.type, undefined);
      _this.sideChanged();
      // register this menu with the app's menu controller
      _index_2b839939_js__WEBPACK_IMPORTED_MODULE_6__.m._register(_this);
      _this.gesture = (yield Promise.resolve(/*! import() */).then(__webpack_require__.bind(__webpack_require__, /*! ./index-422b6e83.js */ 88759))).createGesture({
        el: document,
        gestureName: 'menu-swipe',
        gesturePriority: 30,
        threshold: 10,
        blurOnStart: true,
        canStart: ev => _this.canStart(ev),
        onWillStart: () => _this.onWillStart(),
        onStart: () => _this.onStart(),
        onMove: ev => _this.onMove(ev),
        onEnd: ev => _this.onEnd(ev)
      });
      _this.updateState();
    })();
  }
  componentWillLoad() {
    this.inheritedAttributes = (0,_helpers_3b390e48_js__WEBPACK_IMPORTED_MODULE_5__.i)(this.el);
  }
  componentDidLoad() {
    var _this2 = this;
    return (0,_opt_atlassian_pipelines_agent_build_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_0__["default"])(function* () {
      _this2.ionMenuChange.emit({
        disabled: _this2.disabled,
        open: _this2._isOpen
      });
      _this2.updateState();
    })();
  }
  disconnectedCallback() {
    var _this3 = this;
    return (0,_opt_atlassian_pipelines_agent_build_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_0__["default"])(function* () {
      /**
       * The menu should be closed when it is
       * unmounted from the DOM.
       * This is an async call, so we need to wait for
       * this to finish otherwise contentEl
       * will not have MENU_CONTENT_OPEN removed.
       */
      yield _this3.close(false);
      _this3.blocker.destroy();
      _index_2b839939_js__WEBPACK_IMPORTED_MODULE_6__.m._unregister(_this3);
      if (_this3.animation) {
        _this3.animation.destroy();
      }
      if (_this3.gesture) {
        _this3.gesture.destroy();
        _this3.gesture = undefined;
      }
      _this3.animation = undefined;
      _this3.contentEl = undefined;
    })();
  }
  onSplitPaneChanged(ev) {
    this.isPaneVisible = ev.detail.isPane(this.el);
    this.updateState();
  }
  onBackdropClick(ev) {
    // TODO(FW-2832): type (CustomEvent triggers errors which should be sorted)
    if (this._isOpen && this.lastOnEnd < ev.timeStamp - 100) {
      const shouldClose = ev.composedPath ? !ev.composedPath().includes(this.menuInnerEl) : false;
      if (shouldClose) {
        ev.preventDefault();
        ev.stopPropagation();
        this.close();
      }
    }
  }
  onKeydown(ev) {
    if (ev.key === 'Escape') {
      this.close();
    }
  }
  /**
   * Returns `true` is the menu is open.
   */
  isOpen() {
    return Promise.resolve(this._isOpen);
  }
  /**
   * Returns `true` is the menu is active.
   *
   * A menu is active when it can be opened or closed, meaning it's enabled
   * and it's not part of a `ion-split-pane`.
   */
  isActive() {
    return Promise.resolve(this._isActive());
  }
  /**
   * Opens the menu. If the menu is already open or it can't be opened,
   * it returns `false`.
   */
  open(animated = true) {
    return this.setOpen(true, animated);
  }
  /**
   * Closes the menu. If the menu is already closed or it can't be closed,
   * it returns `false`.
   */
  close(animated = true) {
    return this.setOpen(false, animated);
  }
  /**
   * Toggles the menu. If the menu is already open, it will try to close, otherwise it will try to open it.
   * If the operation can't be completed successfully, it returns `false`.
   */
  toggle(animated = true) {
    return this.setOpen(!this._isOpen, animated);
  }
  /**
   * Opens or closes the button.
   * If the operation can't be completed successfully, it returns `false`.
   */
  setOpen(shouldOpen, animated = true) {
    return _index_2b839939_js__WEBPACK_IMPORTED_MODULE_6__.m._setOpen(this, shouldOpen, animated);
  }
  focusFirstDescendant() {
    const {
      el
    } = this;
    const firstInput = el.querySelector(focusableQueryString);
    if (firstInput) {
      firstInput.focus();
    } else {
      el.focus();
    }
  }
  focusLastDescendant() {
    const {
      el
    } = this;
    const inputs = Array.from(el.querySelectorAll(focusableQueryString));
    const lastInput = inputs.length > 0 ? inputs[inputs.length - 1] : null;
    if (lastInput) {
      lastInput.focus();
    } else {
      el.focus();
    }
  }
  trapKeyboardFocus(ev, doc) {
    const target = ev.target;
    if (!target) {
      return;
    }
    /**
     * If the target is inside the menu contents, let the browser
     * focus as normal and keep a log of the last focused element.
     */
    if (this.el.contains(target)) {
      this.lastFocus = target;
    } else {
      /**
       * Otherwise, we are about to have focus go out of the menu.
       * Wrap the focus to either the first or last element.
       */
      /**
       * Once we call `focusFirstDescendant`, another focus event
       * will fire, which will cause `lastFocus` to be updated
       * before we can run the code after that. We cache the value
       * here to avoid that.
       */
      this.focusFirstDescendant();
      /**
       * If the cached last focused element is the same as the now-
       * active element, that means the user was on the first element
       * already and pressed Shift + Tab, so we need to wrap to the
       * last descendant.
       */
      if (this.lastFocus === doc.activeElement) {
        this.focusLastDescendant();
      }
    }
  }
  _setOpen(_x) {
    var _this4 = this;
    return (0,_opt_atlassian_pipelines_agent_build_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_0__["default"])(function* (shouldOpen, animated = true) {
      // If the menu is disabled or it is currently being animated, let's do nothing
      if (!_this4._isActive() || _this4.isAnimating || shouldOpen === _this4._isOpen) {
        return false;
      }
      _this4.beforeAnimation(shouldOpen);
      yield _this4.loadAnimation();
      yield _this4.startAnimation(shouldOpen, animated);
      _this4.afterAnimation(shouldOpen);
      return true;
    }).apply(this, arguments);
  }
  loadAnimation() {
    var _this5 = this;
    return (0,_opt_atlassian_pipelines_agent_build_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_0__["default"])(function* () {
      // Menu swipe animation takes the menu's inner width as parameter,
      // If `offsetWidth` changes, we need to create a new animation.
      const width = _this5.menuInnerEl.offsetWidth;
      if (width === _this5.width && _this5.animation !== undefined) {
        return;
      }
      _this5.width = width;
      // Destroy existing animation
      if (_this5.animation) {
        _this5.animation.destroy();
        _this5.animation = undefined;
      }
      // Create new animation
      _this5.animation = yield _index_2b839939_js__WEBPACK_IMPORTED_MODULE_6__.m._createAnimation(_this5.type, _this5);
      if (!_ionic_global_c74e4951_js__WEBPACK_IMPORTED_MODULE_2__.c.getBoolean('animated', true)) {
        _this5.animation.duration(0);
      }
      _this5.animation.fill('both');
    })();
  }
  startAnimation(shouldOpen, animated) {
    var _this6 = this;
    return (0,_opt_atlassian_pipelines_agent_build_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_0__["default"])(function* () {
      const isReversed = !shouldOpen;
      const mode = (0,_ionic_global_c74e4951_js__WEBPACK_IMPORTED_MODULE_2__.b)(_this6);
      const easing = mode === 'ios' ? iosEasing : mdEasing;
      const easingReverse = mode === 'ios' ? iosEasingReverse : mdEasingReverse;
      const ani = _this6.animation.direction(isReversed ? 'reverse' : 'normal').easing(isReversed ? easingReverse : easing).onFinish(() => {
        if (ani.getDirection() === 'reverse') {
          ani.direction('normal');
        }
      });
      if (animated) {
        yield ani.play();
      } else {
        ani.play({
          sync: true
        });
      }
    })();
  }
  _isActive() {
    return !this.disabled && !this.isPaneVisible;
  }
  canSwipe() {
    return this.swipeGesture && !this.isAnimating && this._isActive();
  }
  canStart(detail) {
    // Do not allow swipe gesture if a modal is open
    const isModalPresented = !!document.querySelector('ion-modal.show-modal');
    if (isModalPresented || !this.canSwipe()) {
      return false;
    }
    if (this._isOpen) {
      return true;
    } else if (_index_2b839939_js__WEBPACK_IMPORTED_MODULE_6__.m._getOpenSync()) {
      return false;
    }
    return checkEdgeSide(window, detail.currentX, this.isEndSide, this.maxEdgeStart);
  }
  onWillStart() {
    this.beforeAnimation(!this._isOpen);
    return this.loadAnimation();
  }
  onStart() {
    if (!this.isAnimating || !this.animation) {
      (0,_helpers_3b390e48_js__WEBPACK_IMPORTED_MODULE_5__.n)(false, 'isAnimating has to be true');
      return;
    }
    // the cloned animation should not use an easing curve during seek
    this.animation.progressStart(true, this._isOpen ? 1 : 0);
  }
  onMove(detail) {
    if (!this.isAnimating || !this.animation) {
      (0,_helpers_3b390e48_js__WEBPACK_IMPORTED_MODULE_5__.n)(false, 'isAnimating has to be true');
      return;
    }
    const delta = computeDelta(detail.deltaX, this._isOpen, this.isEndSide);
    const stepValue = delta / this.width;
    this.animation.progressStep(this._isOpen ? 1 - stepValue : stepValue);
  }
  onEnd(detail) {
    if (!this.isAnimating || !this.animation) {
      (0,_helpers_3b390e48_js__WEBPACK_IMPORTED_MODULE_5__.n)(false, 'isAnimating has to be true');
      return;
    }
    const isOpen = this._isOpen;
    const isEndSide = this.isEndSide;
    const delta = computeDelta(detail.deltaX, isOpen, isEndSide);
    const width = this.width;
    const stepValue = delta / width;
    const velocity = detail.velocityX;
    const z = width / 2.0;
    const shouldCompleteRight = velocity >= 0 && (velocity > 0.2 || detail.deltaX > z);
    const shouldCompleteLeft = velocity <= 0 && (velocity < -0.2 || detail.deltaX < -z);
    const shouldComplete = isOpen ? isEndSide ? shouldCompleteRight : shouldCompleteLeft : isEndSide ? shouldCompleteLeft : shouldCompleteRight;
    let shouldOpen = !isOpen && shouldComplete;
    if (isOpen && !shouldComplete) {
      shouldOpen = true;
    }
    this.lastOnEnd = detail.currentTime;
    // Account for rounding errors in JS
    let newStepValue = shouldComplete ? 0.001 : -0.001;
    /**
     * stepValue can sometimes return a negative
     * value, but you can't have a negative time value
     * for the cubic bezier curve (at least with web animations)
     */
    const adjustedStepValue = stepValue < 0 ? 0.01 : stepValue;
    /**
     * Animation will be reversed here, so need to
     * reverse the easing curve as well
     *
     * Additionally, we need to account for the time relative
     * to the new easing curve, as `stepValue` is going to be given
     * in terms of a linear curve.
     */
    newStepValue += (0,_cubic_bezier_e78d1307_js__WEBPACK_IMPORTED_MODULE_3__.g)([0, 0], [0.4, 0], [0.6, 1], [1, 1], (0,_helpers_3b390e48_js__WEBPACK_IMPORTED_MODULE_5__.l)(0, adjustedStepValue, 0.9999))[0] || 0;
    const playTo = this._isOpen ? !shouldComplete : shouldComplete;
    this.animation.easing('cubic-bezier(0.4, 0.0, 0.6, 1)').onFinish(() => this.afterAnimation(shouldOpen), {
      oneTimeCallback: true
    }).progressEnd(playTo ? 1 : 0, this._isOpen ? 1 - newStepValue : newStepValue, 300);
  }
  beforeAnimation(shouldOpen) {
    (0,_helpers_3b390e48_js__WEBPACK_IMPORTED_MODULE_5__.n)(!this.isAnimating, '_before() should not be called while animating');
    // this places the menu into the correct location before it animates in
    // this css class doesn't actually kick off any animations
    this.el.classList.add(SHOW_MENU);
    /**
     * We add a tabindex here so that focus trapping
     * still works even if the menu does not have
     * any focusable elements slotted inside. The
     * focus trapping utility will fallback to focusing
     * the menu so focus does not leave when the menu
     * is open.
     */
    this.el.setAttribute('tabindex', '0');
    if (this.backdropEl) {
      this.backdropEl.classList.add(SHOW_BACKDROP);
    }
    // add css class and hide content behind menu from screen readers
    if (this.contentEl) {
      this.contentEl.classList.add(MENU_CONTENT_OPEN);
      /**
       * When the menu is open and overlaying the main
       * content, the main content should not be announced
       * by the screenreader as the menu is the main
       * focus. This is useful with screenreaders that have
       * "read from top" gestures that read the entire
       * page from top to bottom when activated.
       * This should be done before the animation starts
       * so that users cannot accidentally scroll
       * the content while dragging a menu open.
       */
      this.contentEl.setAttribute('aria-hidden', 'true');
    }
    this.blocker.block();
    this.isAnimating = true;
    if (shouldOpen) {
      this.ionWillOpen.emit();
    } else {
      this.ionWillClose.emit();
    }
  }
  afterAnimation(isOpen) {
    var _a;
    (0,_helpers_3b390e48_js__WEBPACK_IMPORTED_MODULE_5__.n)(this.isAnimating, '_before() should be called while animating');
    // keep opening/closing the menu disabled for a touch more yet
    // only add listeners/css if it's enabled and isOpen
    // and only remove listeners/css if it's not open
    // emit opened/closed events
    this._isOpen = isOpen;
    this.isAnimating = false;
    if (!this._isOpen) {
      this.blocker.unblock();
    }
    if (isOpen) {
      // emit open event
      this.ionDidOpen.emit();
      /**
       * Move focus to the menu to prepare focus trapping, as long as
       * it isn't already focused. Use the host element instead of the
       * first descendant to avoid the scroll position jumping around.
       */
      const focusedMenu = (_a = document.activeElement) === null || _a === void 0 ? void 0 : _a.closest('ion-menu');
      if (focusedMenu !== this.el) {
        this.el.focus();
      }
      // start focus trapping
      document.addEventListener('focus', this.handleFocus, true);
    } else {
      // remove css classes and unhide content from screen readers
      this.el.classList.remove(SHOW_MENU);
      /**
       * Remove tabindex from the menu component
       * so that is cannot be tabbed to.
       */
      this.el.removeAttribute('tabindex');
      if (this.contentEl) {
        this.contentEl.classList.remove(MENU_CONTENT_OPEN);
        /**
         * Remove aria-hidden so screen readers
         * can announce the main content again
         * now that the menu is not the main focus.
         */
        this.contentEl.removeAttribute('aria-hidden');
      }
      if (this.backdropEl) {
        this.backdropEl.classList.remove(SHOW_BACKDROP);
      }
      if (this.animation) {
        this.animation.stop();
      }
      // emit close event
      this.ionDidClose.emit();
      // undo focus trapping so multiple menus don't collide
      document.removeEventListener('focus', this.handleFocus, true);
    }
  }
  updateState() {
    const isActive = this._isActive();
    if (this.gesture) {
      this.gesture.enable(isActive && this.swipeGesture);
    }
    // Close menu immediately
    if (!isActive && this._isOpen) {
      // close if this menu is open, and should not be enabled
      this.forceClosing();
    }
    if (!this.disabled) {
      _index_2b839939_js__WEBPACK_IMPORTED_MODULE_6__.m._setActiveMenu(this);
    }
    (0,_helpers_3b390e48_js__WEBPACK_IMPORTED_MODULE_5__.n)(!this.isAnimating, 'can not be animating');
  }
  forceClosing() {
    (0,_helpers_3b390e48_js__WEBPACK_IMPORTED_MODULE_5__.n)(this._isOpen, 'menu cannot be closed');
    this.isAnimating = true;
    const ani = this.animation.direction('reverse');
    ani.play({
      sync: true
    });
    this.afterAnimation(false);
  }
  render() {
    const {
      isEndSide,
      type,
      disabled,
      isPaneVisible,
      inheritedAttributes
    } = this;
    const mode = (0,_ionic_global_c74e4951_js__WEBPACK_IMPORTED_MODULE_2__.b)(this);
    return (0,_index_8e692445_js__WEBPACK_IMPORTED_MODULE_1__.h)(_index_8e692445_js__WEBPACK_IMPORTED_MODULE_1__.H, {
      role: "navigation",
      "aria-label": inheritedAttributes['aria-label'] || 'menu',
      class: {
        [mode]: true,
        [`menu-type-${type}`]: true,
        'menu-enabled': !disabled,
        'menu-side-end': isEndSide,
        'menu-side-start': !isEndSide,
        'menu-pane-visible': isPaneVisible
      }
    }, (0,_index_8e692445_js__WEBPACK_IMPORTED_MODULE_1__.h)("div", {
      class: "menu-inner",
      part: "container",
      ref: el => this.menuInnerEl = el
    }, (0,_index_8e692445_js__WEBPACK_IMPORTED_MODULE_1__.h)("slot", null)), (0,_index_8e692445_js__WEBPACK_IMPORTED_MODULE_1__.h)("ion-backdrop", {
      ref: el => this.backdropEl = el,
      class: "menu-backdrop",
      tappable: false,
      stopPropagation: false,
      part: "backdrop"
    }));
  }
  get el() {
    return (0,_index_8e692445_js__WEBPACK_IMPORTED_MODULE_1__.i)(this);
  }
  static get watchers() {
    return {
      "type": ["typeChanged"],
      "disabled": ["disabledChanged"],
      "side": ["sideChanged"],
      "swipeGesture": ["swipeGestureChanged"]
    };
  }
};
const computeDelta = (deltaX, isOpen, isEndSide) => {
  return Math.max(0, isOpen !== isEndSide ? -deltaX : deltaX);
};
const checkEdgeSide = (win, posX, isEndSide, maxEdgeStart) => {
  if (isEndSide) {
    return posX >= win.innerWidth - maxEdgeStart;
  } else {
    return posX <= maxEdgeStart;
  }
};
const SHOW_MENU = 'show-menu';
const SHOW_BACKDROP = 'show-backdrop';
const MENU_CONTENT_OPEN = 'menu-content-open';
Menu.style = {
  ios: menuIosCss,
  md: menuMdCss
};

// Given a menu, return whether or not the menu toggle should be visible
const updateVisibility = /*#__PURE__*/function () {
  var _ref = (0,_opt_atlassian_pipelines_agent_build_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_0__["default"])(function* (menu) {
    const menuEl = yield _index_2b839939_js__WEBPACK_IMPORTED_MODULE_6__.m.get(menu);
    return !!(menuEl && (yield menuEl.isActive()));
  });
  return function updateVisibility(_x2) {
    return _ref.apply(this, arguments);
  };
}();
const menuButtonIosCss = ":host{--background:transparent;--color-focused:currentColor;--border-radius:initial;--padding-top:0;--padding-bottom:0;color:var(--color);text-align:center;text-decoration:none;text-overflow:ellipsis;text-transform:none;white-space:nowrap;-webkit-font-kerning:none;font-kerning:none}.button-native{border-radius:var(--border-radius);font-family:inherit;font-size:inherit;font-style:inherit;font-weight:inherit;letter-spacing:inherit;text-decoration:inherit;text-indent:inherit;text-overflow:inherit;text-transform:inherit;text-align:inherit;white-space:inherit;color:inherit;margin-left:0;margin-right:0;margin-top:0;margin-bottom:0;padding-left:var(--padding-start);padding-right:var(--padding-end);padding-top:var(--padding-top);padding-bottom:var(--padding-bottom);-moz-osx-font-smoothing:grayscale;-webkit-font-smoothing:antialiased;display:-ms-flexbox;display:flex;position:relative;-ms-flex-flow:row nowrap;flex-flow:row nowrap;-ms-flex-negative:0;flex-shrink:0;-ms-flex-align:center;align-items:center;-ms-flex-pack:center;justify-content:center;width:100%;height:100%;border:0;outline:none;background:var(--background);line-height:1;cursor:pointer;overflow:hidden;-webkit-user-select:none;-moz-user-select:none;-ms-user-select:none;user-select:none;z-index:0;-webkit-appearance:none;-moz-appearance:none;appearance:none}@supports ((-webkit-margin-start: 0) or (margin-inline-start: 0)) or (-webkit-margin-start: 0){.button-native{padding-left:unset;padding-right:unset;-webkit-padding-start:var(--padding-start);padding-inline-start:var(--padding-start);-webkit-padding-end:var(--padding-end);padding-inline-end:var(--padding-end)}}.button-inner{display:-ms-flexbox;display:flex;position:relative;-ms-flex-flow:row nowrap;flex-flow:row nowrap;-ms-flex-negative:0;flex-shrink:0;-ms-flex-align:center;align-items:center;-ms-flex-pack:center;justify-content:center;width:100%;height:100%;z-index:1}ion-icon{margin-left:0;margin-right:0;margin-top:0;margin-bottom:0;padding-left:0;padding-right:0;padding-top:0;padding-bottom:0;pointer-events:none}:host(.menu-button-hidden){display:none}:host(.menu-button-disabled){cursor:default;opacity:0.5;pointer-events:none}:host(.ion-focused) .button-native{color:var(--color-focused)}:host(.ion-focused) .button-native::after{background:var(--background-focused);opacity:var(--background-focused-opacity)}.button-native::after{left:0;right:0;top:0;bottom:0;position:absolute;content:\"\";opacity:0}@media (any-hover: hover){:host(:hover) .button-native{color:var(--color-hover)}:host(:hover) .button-native::after{background:var(--background-hover);opacity:var(--background-hover-opacity, 0)}}:host(.ion-color) .button-native{color:var(--ion-color-base)}:host(.in-toolbar:not(.in-toolbar-color)){color:var(--ion-toolbar-color, var(--color))}:host{--background-focused:currentColor;--background-focused-opacity:.1;--border-radius:4px;--color:var(--ion-color-primary, #3880ff);--padding-start:5px;--padding-end:5px;height:32px;font-size:31px}:host(.ion-activated){opacity:0.4}@media (any-hover: hover){:host(:hover){opacity:0.6}}";
const menuButtonMdCss = ":host{--background:transparent;--color-focused:currentColor;--border-radius:initial;--padding-top:0;--padding-bottom:0;color:var(--color);text-align:center;text-decoration:none;text-overflow:ellipsis;text-transform:none;white-space:nowrap;-webkit-font-kerning:none;font-kerning:none}.button-native{border-radius:var(--border-radius);font-family:inherit;font-size:inherit;font-style:inherit;font-weight:inherit;letter-spacing:inherit;text-decoration:inherit;text-indent:inherit;text-overflow:inherit;text-transform:inherit;text-align:inherit;white-space:inherit;color:inherit;margin-left:0;margin-right:0;margin-top:0;margin-bottom:0;padding-left:var(--padding-start);padding-right:var(--padding-end);padding-top:var(--padding-top);padding-bottom:var(--padding-bottom);-moz-osx-font-smoothing:grayscale;-webkit-font-smoothing:antialiased;display:-ms-flexbox;display:flex;position:relative;-ms-flex-flow:row nowrap;flex-flow:row nowrap;-ms-flex-negative:0;flex-shrink:0;-ms-flex-align:center;align-items:center;-ms-flex-pack:center;justify-content:center;width:100%;height:100%;border:0;outline:none;background:var(--background);line-height:1;cursor:pointer;overflow:hidden;-webkit-user-select:none;-moz-user-select:none;-ms-user-select:none;user-select:none;z-index:0;-webkit-appearance:none;-moz-appearance:none;appearance:none}@supports ((-webkit-margin-start: 0) or (margin-inline-start: 0)) or (-webkit-margin-start: 0){.button-native{padding-left:unset;padding-right:unset;-webkit-padding-start:var(--padding-start);padding-inline-start:var(--padding-start);-webkit-padding-end:var(--padding-end);padding-inline-end:var(--padding-end)}}.button-inner{display:-ms-flexbox;display:flex;position:relative;-ms-flex-flow:row nowrap;flex-flow:row nowrap;-ms-flex-negative:0;flex-shrink:0;-ms-flex-align:center;align-items:center;-ms-flex-pack:center;justify-content:center;width:100%;height:100%;z-index:1}ion-icon{margin-left:0;margin-right:0;margin-top:0;margin-bottom:0;padding-left:0;padding-right:0;padding-top:0;padding-bottom:0;pointer-events:none}:host(.menu-button-hidden){display:none}:host(.menu-button-disabled){cursor:default;opacity:0.5;pointer-events:none}:host(.ion-focused) .button-native{color:var(--color-focused)}:host(.ion-focused) .button-native::after{background:var(--background-focused);opacity:var(--background-focused-opacity)}.button-native::after{left:0;right:0;top:0;bottom:0;position:absolute;content:\"\";opacity:0}@media (any-hover: hover){:host(:hover) .button-native{color:var(--color-hover)}:host(:hover) .button-native::after{background:var(--background-hover);opacity:var(--background-hover-opacity, 0)}}:host(.ion-color) .button-native{color:var(--ion-color-base)}:host(.in-toolbar:not(.in-toolbar-color)){color:var(--ion-toolbar-color, var(--color))}:host{--background-focused:currentColor;--background-focused-opacity:.12;--background-hover:currentColor;--background-hover-opacity:.04;--border-radius:50%;--color:initial;--padding-start:8px;--padding-end:8px;width:48px;height:48px;font-size:24px}:host(.ion-color.ion-focused)::after{background:var(--ion-color-base)}@media (any-hover: hover){:host(.ion-color:hover) .button-native::after{background:var(--ion-color-base)}}";
const MenuButton = class {
  constructor(hostRef) {
    var _this7 = this;
    (0,_index_8e692445_js__WEBPACK_IMPORTED_MODULE_1__.r)(this, hostRef);
    this.inheritedAttributes = {};
    this.visible = false;
    /**
     * If `true`, the user cannot interact with the menu button.
     */
    this.disabled = false;
    /**
     * Automatically hides the menu button when the corresponding menu is not active
     */
    this.autoHide = true;
    /**
     * The type of the button.
     */
    this.type = 'button';
    this.onClick = /*#__PURE__*/(0,_opt_atlassian_pipelines_agent_build_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_0__["default"])(function* () {
      return _index_2b839939_js__WEBPACK_IMPORTED_MODULE_6__.m.toggle(_this7.menu);
    });
  }
  componentWillLoad() {
    this.inheritedAttributes = (0,_helpers_3b390e48_js__WEBPACK_IMPORTED_MODULE_5__.i)(this.el);
  }
  componentDidLoad() {
    this.visibilityChanged();
  }
  visibilityChanged() {
    var _this8 = this;
    return (0,_opt_atlassian_pipelines_agent_build_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_0__["default"])(function* () {
      _this8.visible = yield updateVisibility(_this8.menu);
    })();
  }
  render() {
    const {
      color,
      disabled,
      inheritedAttributes
    } = this;
    const mode = (0,_ionic_global_c74e4951_js__WEBPACK_IMPORTED_MODULE_2__.b)(this);
    const menuIcon = _ionic_global_c74e4951_js__WEBPACK_IMPORTED_MODULE_2__.c.get('menuIcon', mode === 'ios' ? _index_2bcb741c_js__WEBPACK_IMPORTED_MODULE_8__.u : _index_2bcb741c_js__WEBPACK_IMPORTED_MODULE_8__.v);
    const hidden = this.autoHide && !this.visible;
    const attrs = {
      type: this.type
    };
    const ariaLabel = inheritedAttributes['aria-label'] || 'menu';
    return (0,_index_8e692445_js__WEBPACK_IMPORTED_MODULE_1__.h)(_index_8e692445_js__WEBPACK_IMPORTED_MODULE_1__.H, {
      onClick: this.onClick,
      "aria-disabled": disabled ? 'true' : null,
      "aria-hidden": hidden ? 'true' : null,
      class: (0,_theme_7670341c_js__WEBPACK_IMPORTED_MODULE_9__.c)(color, {
        [mode]: true,
        button: true,
        'menu-button-hidden': hidden,
        'menu-button-disabled': disabled,
        'in-toolbar': (0,_theme_7670341c_js__WEBPACK_IMPORTED_MODULE_9__.h)('ion-toolbar', this.el),
        'in-toolbar-color': (0,_theme_7670341c_js__WEBPACK_IMPORTED_MODULE_9__.h)('ion-toolbar[color]', this.el),
        'ion-activatable': true,
        'ion-focusable': true
      })
    }, (0,_index_8e692445_js__WEBPACK_IMPORTED_MODULE_1__.h)("button", Object.assign({}, attrs, {
      disabled: disabled,
      class: "button-native",
      part: "native",
      "aria-label": ariaLabel
    }), (0,_index_8e692445_js__WEBPACK_IMPORTED_MODULE_1__.h)("span", {
      class: "button-inner"
    }, (0,_index_8e692445_js__WEBPACK_IMPORTED_MODULE_1__.h)("slot", null, (0,_index_8e692445_js__WEBPACK_IMPORTED_MODULE_1__.h)("ion-icon", {
      part: "icon",
      icon: menuIcon,
      mode: mode,
      lazy: false,
      "aria-hidden": "true"
    }))), mode === 'md' && (0,_index_8e692445_js__WEBPACK_IMPORTED_MODULE_1__.h)("ion-ripple-effect", {
      type: "unbounded"
    })));
  }
  get el() {
    return (0,_index_8e692445_js__WEBPACK_IMPORTED_MODULE_1__.i)(this);
  }
};
MenuButton.style = {
  ios: menuButtonIosCss,
  md: menuButtonMdCss
};
const menuToggleCss = ":host(.menu-toggle-hidden){display:none}";
const MenuToggle = class {
  constructor(hostRef) {
    (0,_index_8e692445_js__WEBPACK_IMPORTED_MODULE_1__.r)(this, hostRef);
    this.visible = false;
    /**
     * Automatically hides the content when the corresponding menu is not active.
     *
     * By default, it's `true`. Change it to `false` in order to
     * keep `ion-menu-toggle` always visible regardless the state of the menu.
     */
    this.autoHide = true;
    this.onClick = () => {
      return _index_2b839939_js__WEBPACK_IMPORTED_MODULE_6__.m.toggle(this.menu);
    };
  }
  connectedCallback() {
    this.visibilityChanged();
  }
  visibilityChanged() {
    var _this9 = this;
    return (0,_opt_atlassian_pipelines_agent_build_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_0__["default"])(function* () {
      _this9.visible = yield updateVisibility(_this9.menu);
    })();
  }
  render() {
    const mode = (0,_ionic_global_c74e4951_js__WEBPACK_IMPORTED_MODULE_2__.b)(this);
    const hidden = this.autoHide && !this.visible;
    return (0,_index_8e692445_js__WEBPACK_IMPORTED_MODULE_1__.h)(_index_8e692445_js__WEBPACK_IMPORTED_MODULE_1__.H, {
      onClick: this.onClick,
      "aria-hidden": hidden ? 'true' : null,
      class: {
        [mode]: true,
        'menu-toggle-hidden': hidden
      }
    }, (0,_index_8e692445_js__WEBPACK_IMPORTED_MODULE_1__.h)("slot", null));
  }
};
MenuToggle.style = menuToggleCss;


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
//# sourceMappingURL=495.2675a032749db37a.js.map