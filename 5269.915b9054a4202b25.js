"use strict";
(self["webpackChunkapp"] = self["webpackChunkapp"] || []).push([[5269],{

/***/ 15269:
/*!***************************************************************!*\
  !*** ./node_modules/@ionic/core/dist/esm/ion-toggle.entry.js ***!
  \***************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "ion_toggle": () => (/* binding */ Toggle)
/* harmony export */ });
/* harmony import */ var _opt_atlassian_pipelines_agent_build_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/esm/asyncToGenerator.js */ 71670);
/* harmony import */ var _index_8e692445_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./index-8e692445.js */ 91559);
/* harmony import */ var _index_2bcb741c_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./index-2bcb741c.js */ 7309);
/* harmony import */ var _ionic_global_c74e4951_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./ionic-global-c74e4951.js */ 95823);
/* harmony import */ var _helpers_3b390e48_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./helpers-3b390e48.js */ 29259);
/* harmony import */ var _haptic_029a46f6_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./haptic-029a46f6.js */ 12815);
/* harmony import */ var _dir_e8b767a8_js__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./dir-e8b767a8.js */ 17481);
/* harmony import */ var _theme_7670341c_js__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./theme-7670341c.js */ 50320);

/*!
 * (C) Ionic http://ionicframework.com - MIT License
 */







const toggleIosCss = ":host{-webkit-box-sizing:content-box !important;box-sizing:content-box !important;display:inline-block;position:relative;outline:none;contain:content;cursor:pointer;-ms-touch-action:none;touch-action:none;-webkit-user-select:none;-moz-user-select:none;-ms-user-select:none;user-select:none;z-index:2}:host(.ion-focused) input{border:2px solid #5e9ed6}:host(.toggle-disabled){pointer-events:none}label{left:0;top:0;margin-left:0;margin-right:0;margin-top:0;margin-bottom:0;position:absolute;width:100%;height:100%;border:0;background:transparent;cursor:pointer;-webkit-appearance:none;-moz-appearance:none;appearance:none;outline:none;display:-ms-flexbox;display:flex;-ms-flex-align:center;align-items:center;opacity:0;pointer-events:none}[dir=rtl] label,:host-context([dir=rtl]) label{left:unset;right:unset;right:0}label::-moz-focus-inner{border:0}input{position:absolute;top:0;left:0;right:0;bottom:0;width:100%;height:100%;margin:0;padding:0;border:0;outline:0;clip:rect(0 0 0 0);opacity:0;overflow:hidden;-webkit-appearance:none;-moz-appearance:none}.toggle-icon-wrapper{display:-ms-flexbox;display:flex;position:relative;-ms-flex-align:center;align-items:center;width:100%;height:100%;-webkit-transition:var(--handle-transition);transition:var(--handle-transition);will-change:transform}.toggle-icon{border-radius:var(--border-radius);display:block;position:relative;width:100%;height:100%;background:var(--background);pointer-events:none;overflow:inherit}:host(.toggle-checked) .toggle-icon{background:var(--background-checked)}.toggle-inner{border-radius:var(--handle-border-radius);position:absolute;width:var(--handle-width);height:var(--handle-height);max-height:var(--handle-max-height);-webkit-transition:var(--handle-transition);transition:var(--handle-transition);background:var(--handle-background);-webkit-box-shadow:var(--handle-box-shadow);box-shadow:var(--handle-box-shadow);contain:strict}:host(.toggle-ltr) .toggle-inner{left:var(--handle-spacing)}:host(.toggle-rtl) .toggle-inner{right:var(--handle-spacing)}:host(.toggle-ltr.toggle-checked) .toggle-icon-wrapper{-webkit-transform:translate3d(calc(100% - var(--handle-width)), 0, 0);transform:translate3d(calc(100% - var(--handle-width)), 0, 0)}:host(.toggle-rtl.toggle-checked) .toggle-icon-wrapper{-webkit-transform:translate3d(calc(-100% + var(--handle-width)), 0, 0);transform:translate3d(calc(-100% + var(--handle-width)), 0, 0)}:host(.toggle-checked) .toggle-inner{background:var(--handle-background-checked)}:host(.toggle-ltr.toggle-checked) .toggle-inner{-webkit-transform:translate3d(calc(var(--handle-spacing) * -2), 0, 0);transform:translate3d(calc(var(--handle-spacing) * -2), 0, 0)}:host(.toggle-rtl.toggle-checked) .toggle-inner{-webkit-transform:translate3d(calc(var(--handle-spacing) * 2), 0, 0);transform:translate3d(calc(var(--handle-spacing) * 2), 0, 0)}:host{--background:rgba(var(--ion-text-color-rgb, 0, 0, 0), 0.088);--background-checked:var(--ion-color-primary, #3880ff);--border-radius:16px;--handle-background:#ffffff;--handle-background-checked:#ffffff;--handle-border-radius:25.5px;--handle-box-shadow:0 3px 12px rgba(0, 0, 0, 0.16), 0 3px 1px rgba(0, 0, 0, 0.1);--handle-height:calc(32px - (2px * 2));--handle-max-height:calc(100% - var(--handle-spacing) * 2);--handle-width:calc(32px - (2px * 2));--handle-spacing:2px;--handle-transition:transform 300ms, width 120ms ease-in-out 80ms, left 110ms ease-in-out 80ms, right 110ms ease-in-out 80ms;width:51px;height:32px;contain:strict;overflow:hidden}:host(.ion-color.toggle-checked) .toggle-icon{background:var(--ion-color-base)}:host(.toggle-activated) .toggle-switch-icon{opacity:0}.toggle-icon{-webkit-transform:translate3d(0, 0, 0);transform:translate3d(0, 0, 0);-webkit-transition:background-color 300ms;transition:background-color 300ms}.toggle-inner{will-change:transform}.toggle-switch-icon{position:absolute;top:50%;width:11px;height:11px;-webkit-transform:translateY(-50%);transform:translateY(-50%);-webkit-transition:opacity 300ms, color 300ms;transition:opacity 300ms, color 300ms}.toggle-switch-icon{position:absolute;color:var(--ion-color-dark)}:host(.toggle-ltr) .toggle-switch-icon{right:6px}:host(.toggle-rtl) .toggle-switch-icon{right:initial;left:6px;}:host(.toggle-checked) .toggle-switch-icon.toggle-switch-icon-checked{color:var(--ion-color-contrast, #fff)}:host(.toggle-checked) .toggle-switch-icon:not(.toggle-switch-icon-checked){opacity:0}.toggle-switch-icon-checked{position:absolute;width:15px;height:15px;-webkit-transform:translateY(-50%) rotate(90deg);transform:translateY(-50%) rotate(90deg)}:host(.toggle-ltr) .toggle-switch-icon-checked{right:initial;left:4px;}:host(.toggle-rtl) .toggle-switch-icon-checked{right:4px}:host(.toggle-activated) .toggle-icon::before,:host(.toggle-checked) .toggle-icon::before{-webkit-transform:scale3d(0, 0, 0);transform:scale3d(0, 0, 0)}:host(.toggle-activated.toggle-checked) .toggle-inner::before{-webkit-transform:scale3d(0, 0, 0);transform:scale3d(0, 0, 0)}:host(.toggle-activated) .toggle-inner{width:calc(var(--handle-width) + 6px)}:host(.toggle-ltr.toggle-activated.toggle-checked) .toggle-icon-wrapper{-webkit-transform:translate3d(calc(100% - var(--handle-width) - 6px), 0, 0);transform:translate3d(calc(100% - var(--handle-width) - 6px), 0, 0)}:host(.toggle-rtl.toggle-activated.toggle-checked) .toggle-icon-wrapper{-webkit-transform:translate3d(calc(-100% + var(--handle-width) + 6px), 0, 0);transform:translate3d(calc(-100% + var(--handle-width) + 6px), 0, 0)}:host(.toggle-disabled){opacity:0.3}:host(.in-item[slot]){margin-left:0;margin-right:0;margin-top:0;margin-bottom:0;padding-left:20px;padding-right:10px;padding-top:6px;padding-bottom:5px}@supports ((-webkit-margin-start: 0) or (margin-inline-start: 0)) or (-webkit-margin-start: 0){:host(.in-item[slot]){padding-left:unset;padding-right:unset;-webkit-padding-start:20px;padding-inline-start:20px;-webkit-padding-end:10px;padding-inline-end:10px}}:host(.in-item[slot=start]){padding-left:0;padding-right:16px;padding-top:6px;padding-bottom:5px}@supports ((-webkit-margin-start: 0) or (margin-inline-start: 0)) or (-webkit-margin-start: 0){:host(.in-item[slot=start]){padding-left:unset;padding-right:unset;-webkit-padding-start:0;padding-inline-start:0;-webkit-padding-end:16px;padding-inline-end:16px}}";
const toggleMdCss = ":host{-webkit-box-sizing:content-box !important;box-sizing:content-box !important;display:inline-block;position:relative;outline:none;contain:content;cursor:pointer;-ms-touch-action:none;touch-action:none;-webkit-user-select:none;-moz-user-select:none;-ms-user-select:none;user-select:none;z-index:2}:host(.ion-focused) input{border:2px solid #5e9ed6}:host(.toggle-disabled){pointer-events:none}label{left:0;top:0;margin-left:0;margin-right:0;margin-top:0;margin-bottom:0;position:absolute;width:100%;height:100%;border:0;background:transparent;cursor:pointer;-webkit-appearance:none;-moz-appearance:none;appearance:none;outline:none;display:-ms-flexbox;display:flex;-ms-flex-align:center;align-items:center;opacity:0;pointer-events:none}[dir=rtl] label,:host-context([dir=rtl]) label{left:unset;right:unset;right:0}label::-moz-focus-inner{border:0}input{position:absolute;top:0;left:0;right:0;bottom:0;width:100%;height:100%;margin:0;padding:0;border:0;outline:0;clip:rect(0 0 0 0);opacity:0;overflow:hidden;-webkit-appearance:none;-moz-appearance:none}.toggle-icon-wrapper{display:-ms-flexbox;display:flex;position:relative;-ms-flex-align:center;align-items:center;width:100%;height:100%;-webkit-transition:var(--handle-transition);transition:var(--handle-transition);will-change:transform}.toggle-icon{border-radius:var(--border-radius);display:block;position:relative;width:100%;height:100%;background:var(--background);pointer-events:none;overflow:inherit}:host(.toggle-checked) .toggle-icon{background:var(--background-checked)}.toggle-inner{border-radius:var(--handle-border-radius);position:absolute;width:var(--handle-width);height:var(--handle-height);max-height:var(--handle-max-height);-webkit-transition:var(--handle-transition);transition:var(--handle-transition);background:var(--handle-background);-webkit-box-shadow:var(--handle-box-shadow);box-shadow:var(--handle-box-shadow);contain:strict}:host(.toggle-ltr) .toggle-inner{left:var(--handle-spacing)}:host(.toggle-rtl) .toggle-inner{right:var(--handle-spacing)}:host(.toggle-ltr.toggle-checked) .toggle-icon-wrapper{-webkit-transform:translate3d(calc(100% - var(--handle-width)), 0, 0);transform:translate3d(calc(100% - var(--handle-width)), 0, 0)}:host(.toggle-rtl.toggle-checked) .toggle-icon-wrapper{-webkit-transform:translate3d(calc(-100% + var(--handle-width)), 0, 0);transform:translate3d(calc(-100% + var(--handle-width)), 0, 0)}:host(.toggle-checked) .toggle-inner{background:var(--handle-background-checked)}:host(.toggle-ltr.toggle-checked) .toggle-inner{-webkit-transform:translate3d(calc(var(--handle-spacing) * -2), 0, 0);transform:translate3d(calc(var(--handle-spacing) * -2), 0, 0)}:host(.toggle-rtl.toggle-checked) .toggle-inner{-webkit-transform:translate3d(calc(var(--handle-spacing) * 2), 0, 0);transform:translate3d(calc(var(--handle-spacing) * 2), 0, 0)}:host{--background:rgba(var(--ion-text-color-rgb, 0, 0, 0), 0.39);--background-checked:rgba(var(--ion-color-primary-rgb, 56, 128, 255), 0.5);--border-radius:14px;--handle-background:#ffffff;--handle-background-checked:var(--ion-color-primary, #3880ff);--handle-border-radius:50%;--handle-box-shadow:0 3px 1px -2px rgba(0, 0, 0, 0.2), 0 2px 2px 0 rgba(0, 0, 0, 0.14), 0 1px 5px 0 rgba(0, 0, 0, 0.12);--handle-width:20px;--handle-height:20px;--handle-max-height:calc(100% + 6px);--handle-spacing:0;--handle-transition:transform 160ms cubic-bezier(0.4, 0, 0.2, 1), background-color 160ms cubic-bezier(0.4, 0, 0.2, 1);padding-left:12px;padding-right:12px;padding-top:12px;padding-bottom:12px;width:36px;height:14px;contain:strict}@supports ((-webkit-margin-start: 0) or (margin-inline-start: 0)) or (-webkit-margin-start: 0){:host{padding-left:unset;padding-right:unset;-webkit-padding-start:12px;padding-inline-start:12px;-webkit-padding-end:12px;padding-inline-end:12px}}:host(.ion-color.toggle-checked) .toggle-icon{background:rgba(var(--ion-color-base-rgb), 0.5)}:host(.ion-color.toggle-checked) .toggle-inner{background:var(--ion-color-base)}:host(.toggle-checked) .toggle-inner{color:var(--ion-color-contrast, #fff)}.toggle-icon{-webkit-transition:background-color 160ms;transition:background-color 160ms}.toggle-inner{will-change:background-color, transform;display:-ms-flexbox;display:flex;-ms-flex-align:center;align-items:center;-ms-flex-pack:center;justify-content:center;color:#000}.toggle-inner .toggle-switch-icon{padding-left:1px;padding-right:1px;padding-top:1px;padding-bottom:1px;width:100%;height:100%}@supports ((-webkit-margin-start: 0) or (margin-inline-start: 0)) or (-webkit-margin-start: 0){.toggle-inner .toggle-switch-icon{padding-left:unset;padding-right:unset;-webkit-padding-start:1px;padding-inline-start:1px;-webkit-padding-end:1px;padding-inline-end:1px}}:host(.toggle-disabled){opacity:0.3}:host(.in-item[slot]){margin-left:0;margin-right:0;margin-top:0;margin-bottom:0;padding-left:16px;padding-right:0;padding-top:12px;padding-bottom:12px;cursor:pointer}@supports ((-webkit-margin-start: 0) or (margin-inline-start: 0)) or (-webkit-margin-start: 0){:host(.in-item[slot]){padding-left:unset;padding-right:unset;-webkit-padding-start:16px;padding-inline-start:16px;-webkit-padding-end:0;padding-inline-end:0}}:host(.in-item[slot=start]){padding-left:2px;padding-right:18px;padding-top:12px;padding-bottom:12px}@supports ((-webkit-margin-start: 0) or (margin-inline-start: 0)) or (-webkit-margin-start: 0){:host(.in-item[slot=start]){padding-left:unset;padding-right:unset;-webkit-padding-start:2px;padding-inline-start:2px;-webkit-padding-end:18px;padding-inline-end:18px}}";
const Toggle = class {
  constructor(hostRef) {
    (0,_index_8e692445_js__WEBPACK_IMPORTED_MODULE_1__.r)(this, hostRef);
    this.ionChange = (0,_index_8e692445_js__WEBPACK_IMPORTED_MODULE_1__.e)(this, "ionChange", 7);
    this.ionFocus = (0,_index_8e692445_js__WEBPACK_IMPORTED_MODULE_1__.e)(this, "ionFocus", 7);
    this.ionBlur = (0,_index_8e692445_js__WEBPACK_IMPORTED_MODULE_1__.e)(this, "ionBlur", 7);
    this.ionStyle = (0,_index_8e692445_js__WEBPACK_IMPORTED_MODULE_1__.e)(this, "ionStyle", 7);
    this.inputId = `ion-tg-${toggleIds++}`;
    this.lastDrag = 0;
    this.activated = false;
    /**
     * The name of the control, which is submitted with the form data.
     */
    this.name = this.inputId;
    /**
     * If `true`, the toggle is selected.
     */
    this.checked = false;
    /**
     * If `true`, the user cannot interact with the toggle.
     */
    this.disabled = false;
    /**
     * The value of the toggle does not mean if it's checked or not, use the `checked`
     * property for that.
     *
     * The value of a toggle is analogous to the value of a `<input type="checkbox">`,
     * it's only used when the toggle participates in a native `<form>`.
     */
    this.value = 'on';
    /**
     * Enables the on/off accessibility switch labels within the toggle.
     */
    this.enableOnOffLabels = _ionic_global_c74e4951_js__WEBPACK_IMPORTED_MODULE_3__.c.get('toggleOnOffLabels');
    this.onClick = ev => {
      ev.preventDefault();
      if (this.lastDrag + 300 < Date.now()) {
        this.checked = !this.checked;
      }
    };
    this.onFocus = () => {
      this.ionFocus.emit();
    };
    this.onBlur = () => {
      this.ionBlur.emit();
    };
    this.getSwitchLabelIcon = (mode, checked) => {
      if (mode === 'md') {
        return checked ? _index_2bcb741c_js__WEBPACK_IMPORTED_MODULE_2__.f : _index_2bcb741c_js__WEBPACK_IMPORTED_MODULE_2__.r;
      }
      return checked ? _index_2bcb741c_js__WEBPACK_IMPORTED_MODULE_2__.r : _index_2bcb741c_js__WEBPACK_IMPORTED_MODULE_2__.g;
    };
  }
  checkedChanged(isChecked) {
    this.ionChange.emit({
      checked: isChecked,
      value: this.value
    });
  }
  disabledChanged() {
    this.emitStyle();
    if (this.gesture) {
      this.gesture.enable(!this.disabled);
    }
  }
  connectedCallback() {
    var _this = this;
    return (0,_opt_atlassian_pipelines_agent_build_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_0__["default"])(function* () {
      _this.gesture = (yield Promise.resolve(/*! import() */).then(__webpack_require__.bind(__webpack_require__, /*! ./index-422b6e83.js */ 88759))).createGesture({
        el: _this.el,
        gestureName: 'toggle',
        gesturePriority: 100,
        threshold: 5,
        passive: false,
        onStart: () => _this.onStart(),
        onMove: ev => _this.onMove(ev),
        onEnd: ev => _this.onEnd(ev)
      });
      _this.disabledChanged();
    })();
  }
  disconnectedCallback() {
    if (this.gesture) {
      this.gesture.destroy();
      this.gesture = undefined;
    }
  }
  componentWillLoad() {
    this.emitStyle();
  }
  emitStyle() {
    this.ionStyle.emit({
      'interactive-disabled': this.disabled
    });
  }
  onStart() {
    this.activated = true;
    // touch-action does not work in iOS
    this.setFocus();
  }
  onMove(detail) {
    if (shouldToggle((0,_dir_e8b767a8_js__WEBPACK_IMPORTED_MODULE_6__.i)(this.el), this.checked, detail.deltaX, -10)) {
      this.checked = !this.checked;
      (0,_haptic_029a46f6_js__WEBPACK_IMPORTED_MODULE_5__.c)();
    }
  }
  onEnd(ev) {
    this.activated = false;
    this.lastDrag = Date.now();
    ev.event.preventDefault();
    ev.event.stopImmediatePropagation();
  }
  getValue() {
    return this.value || '';
  }
  setFocus() {
    if (this.focusEl) {
      this.focusEl.focus();
    }
  }
  renderOnOffSwitchLabels(mode, checked) {
    const icon = this.getSwitchLabelIcon(mode, checked);
    return (0,_index_8e692445_js__WEBPACK_IMPORTED_MODULE_1__.h)("ion-icon", {
      class: {
        'toggle-switch-icon': true,
        'toggle-switch-icon-checked': checked
      },
      icon: icon,
      "aria-hidden": "true"
    });
  }
  render() {
    const {
      activated,
      color,
      checked,
      disabled,
      el,
      inputId,
      name,
      enableOnOffLabels
    } = this;
    const mode = (0,_ionic_global_c74e4951_js__WEBPACK_IMPORTED_MODULE_3__.b)(this);
    const {
      label,
      labelId,
      labelText
    } = (0,_helpers_3b390e48_js__WEBPACK_IMPORTED_MODULE_4__.d)(el, inputId);
    const value = this.getValue();
    const rtl = (0,_dir_e8b767a8_js__WEBPACK_IMPORTED_MODULE_6__.i)(el) ? 'rtl' : 'ltr';
    (0,_helpers_3b390e48_js__WEBPACK_IMPORTED_MODULE_4__.e)(true, el, name, checked ? value : '', disabled);
    return (0,_index_8e692445_js__WEBPACK_IMPORTED_MODULE_1__.h)(_index_8e692445_js__WEBPACK_IMPORTED_MODULE_1__.H, {
      onClick: this.onClick,
      "aria-labelledby": label ? labelId : null,
      "aria-checked": `${checked}`,
      "aria-hidden": disabled ? 'true' : null,
      role: "switch",
      class: (0,_theme_7670341c_js__WEBPACK_IMPORTED_MODULE_7__.c)(color, {
        [mode]: true,
        'in-item': (0,_theme_7670341c_js__WEBPACK_IMPORTED_MODULE_7__.h)('ion-item', el),
        'toggle-activated': activated,
        'toggle-checked': checked,
        'toggle-disabled': disabled,
        interactive: true,
        [`toggle-${rtl}`]: true
      })
    }, (0,_index_8e692445_js__WEBPACK_IMPORTED_MODULE_1__.h)("div", {
      class: "toggle-icon",
      part: "track"
    }, enableOnOffLabels && mode === 'ios' && [this.renderOnOffSwitchLabels(mode, true), this.renderOnOffSwitchLabels(mode, false)], (0,_index_8e692445_js__WEBPACK_IMPORTED_MODULE_1__.h)("div", {
      class: "toggle-icon-wrapper"
    }, (0,_index_8e692445_js__WEBPACK_IMPORTED_MODULE_1__.h)("div", {
      class: "toggle-inner",
      part: "handle"
    }, enableOnOffLabels && mode === 'md' && this.renderOnOffSwitchLabels(mode, checked)))), (0,_index_8e692445_js__WEBPACK_IMPORTED_MODULE_1__.h)("label", {
      htmlFor: inputId
    }, labelText), (0,_index_8e692445_js__WEBPACK_IMPORTED_MODULE_1__.h)("input", {
      type: "checkbox",
      role: "switch",
      "aria-checked": `${checked}`,
      disabled: disabled,
      id: inputId,
      onFocus: () => this.onFocus(),
      onBlur: () => this.onBlur(),
      ref: focusEl => this.focusEl = focusEl
    }));
  }
  get el() {
    return (0,_index_8e692445_js__WEBPACK_IMPORTED_MODULE_1__.i)(this);
  }
  static get watchers() {
    return {
      "checked": ["checkedChanged"],
      "disabled": ["disabledChanged"]
    };
  }
};
const shouldToggle = (rtl, checked, deltaX, margin) => {
  if (checked) {
    return !rtl && margin > deltaX || rtl && -margin < deltaX;
  } else {
    return !rtl && -margin < deltaX || rtl && margin > deltaX;
  }
};
let toggleIds = 0;
Toggle.style = {
  ios: toggleIosCss,
  md: toggleMdCss
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
//# sourceMappingURL=5269.915b9054a4202b25.js.map