"use strict";
(self["webpackChunkapp"] = self["webpackChunkapp"] || []).push([[8648],{

/***/ 58648:
/*!*********************************************************************!*\
  !*** ./node_modules/@ionic/core/dist/esm/ion-breadcrumb_2.entry.js ***!
  \*********************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "ion_breadcrumb": () => (/* binding */ Breadcrumb),
/* harmony export */   "ion_breadcrumbs": () => (/* binding */ Breadcrumbs)
/* harmony export */ });
/* harmony import */ var _index_8e692445_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./index-8e692445.js */ 91559);
/* harmony import */ var _index_2bcb741c_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./index-2bcb741c.js */ 7309);
/* harmony import */ var _ionic_global_c74e4951_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./ionic-global-c74e4951.js */ 95823);
/* harmony import */ var _helpers_3b390e48_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./helpers-3b390e48.js */ 29259);
/* harmony import */ var _theme_7670341c_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./theme-7670341c.js */ 50320);
/*!
 * (C) Ionic http://ionicframework.com - MIT License
 */





const breadcrumbIosCss = ":host{display:-ms-flexbox;display:flex;-ms-flex:0 0 auto;flex:0 0 auto;-ms-flex-align:center;align-items:center;color:var(--color);font-size:16px;font-weight:400;line-height:1.5}.breadcrumb-native{font-family:inherit;font-size:inherit;font-style:inherit;font-weight:inherit;letter-spacing:inherit;text-decoration:inherit;text-indent:inherit;text-overflow:inherit;text-transform:inherit;text-align:inherit;white-space:inherit;color:inherit;padding-left:0;padding-right:0;padding-top:0;padding-bottom:0;margin-left:0;margin-right:0;margin-top:0;margin-bottom:0;display:-ms-flexbox;display:flex;-ms-flex-align:center;align-items:center;width:100%;outline:none;background:inherit}:host(.breadcrumb-disabled){cursor:default;opacity:0.5;pointer-events:none}:host(.breadcrumb-active){color:var(--color-active)}:host(.ion-focused){color:var(--color-focused)}:host(.ion-focused) .breadcrumb-native{background:var(--background-focused)}@media (any-hover: hover){:host(.ion-activatable:hover){color:var(--color-hover)}:host(.ion-activatable.in-breadcrumbs-color:hover),:host(.ion-activatable.ion-color:hover){color:var(--ion-color-shade)}}.breadcrumb-separator{display:-ms-inline-flexbox;display:inline-flex}:host(.breadcrumb-collapsed) .breadcrumb-native{display:none}:host(.in-breadcrumbs-color),:host(.in-breadcrumbs-color.breadcrumb-active){color:var(--ion-color-base)}:host(.in-breadcrumbs-color) .breadcrumb-separator{color:var(--ion-color-base)}:host(.ion-color){color:var(--ion-color-base)}:host(.in-toolbar-color),:host(.in-toolbar-color) .breadcrumb-separator{color:rgba(var(--ion-color-contrast-rgb), 0.8)}:host(.in-toolbar-color.breadcrumb-active){color:var(--ion-color-contrast)}.breadcrumbs-collapsed-indicator{padding-left:0;padding-right:0;padding-top:0;padding-bottom:0;margin-left:14px;margin-right:14px;margin-top:0;margin-bottom:0;display:-ms-flexbox;display:flex;-ms-flex:1 1 100%;flex:1 1 100%;-ms-flex-align:center;align-items:center;-ms-flex-pack:center;justify-content:center;width:32px;height:18px;border:0;outline:none;cursor:pointer;-webkit-appearance:none;-moz-appearance:none;appearance:none}@supports ((-webkit-margin-start: 0) or (margin-inline-start: 0)) or (-webkit-margin-start: 0){.breadcrumbs-collapsed-indicator{margin-left:unset;margin-right:unset;-webkit-margin-start:14px;margin-inline-start:14px;-webkit-margin-end:14px;margin-inline-end:14px}}.breadcrumbs-collapsed-indicator ion-icon{margin-top:1px;font-size:22px}:host{--color:var(--ion-color-step-850, #2d4665);--color-active:var(--ion-text-color, #03060b);--color-hover:var(--ion-text-color, #03060b);--color-focused:var(--color-active);--background-focused:var(--ion-color-step-50, rgba(233, 237, 243, 0.7))}:host(.breadcrumb-active){font-weight:600}.breadcrumb-native{border-radius:4px;padding-left:12px;padding-right:12px;padding-top:5px;padding-bottom:5px;border:1px solid transparent}@supports ((-webkit-margin-start: 0) or (margin-inline-start: 0)) or (-webkit-margin-start: 0){.breadcrumb-native{padding-left:unset;padding-right:unset;-webkit-padding-start:12px;padding-inline-start:12px;-webkit-padding-end:12px;padding-inline-end:12px}}:host(.ion-focused) .breadcrumb-native{border-radius:8px}:host(.in-breadcrumbs-color.ion-focused) .breadcrumb-native,:host(.ion-color.ion-focused) .breadcrumb-native{background:rgba(var(--ion-color-base-rgb), 0.1);color:var(--ion-color-base)}:host(.ion-focused) ::slotted(ion-icon),:host(.in-breadcrumbs-color.ion-focused) ::slotted(ion-icon),:host(.ion-color.ion-focused) ::slotted(ion-icon){color:var(--ion-color-step-750, #445b78)}.breadcrumb-separator{color:var(--ion-color-step-550, #73849a)}::slotted(ion-icon){color:var(--ion-color-step-400, #92a0b3);font-size:18px}::slotted(ion-icon[slot=start]){margin-right:8px}@supports ((-webkit-margin-start: 0) or (margin-inline-start: 0)) or (-webkit-margin-start: 0){::slotted(ion-icon[slot=start]){margin-right:unset;-webkit-margin-end:8px;margin-inline-end:8px}}::slotted(ion-icon[slot=end]){margin-left:8px}@supports ((-webkit-margin-start: 0) or (margin-inline-start: 0)) or (-webkit-margin-start: 0){::slotted(ion-icon[slot=end]){margin-left:unset;-webkit-margin-start:8px;margin-inline-start:8px}}:host(.breadcrumb-active) ::slotted(ion-icon){color:var(--ion-color-step-850, #242d39)}.breadcrumbs-collapsed-indicator{border-radius:4px;background:var(--ion-color-step-100, #e9edf3);color:var(--ion-color-step-550, #73849a)}.breadcrumbs-collapsed-indicator:hover{opacity:0.45}.breadcrumbs-collapsed-indicator:focus{background:var(--ion-color-step-150, #d9e0ea)}";
const breadcrumbMdCss = ":host{display:-ms-flexbox;display:flex;-ms-flex:0 0 auto;flex:0 0 auto;-ms-flex-align:center;align-items:center;color:var(--color);font-size:16px;font-weight:400;line-height:1.5}.breadcrumb-native{font-family:inherit;font-size:inherit;font-style:inherit;font-weight:inherit;letter-spacing:inherit;text-decoration:inherit;text-indent:inherit;text-overflow:inherit;text-transform:inherit;text-align:inherit;white-space:inherit;color:inherit;padding-left:0;padding-right:0;padding-top:0;padding-bottom:0;margin-left:0;margin-right:0;margin-top:0;margin-bottom:0;display:-ms-flexbox;display:flex;-ms-flex-align:center;align-items:center;width:100%;outline:none;background:inherit}:host(.breadcrumb-disabled){cursor:default;opacity:0.5;pointer-events:none}:host(.breadcrumb-active){color:var(--color-active)}:host(.ion-focused){color:var(--color-focused)}:host(.ion-focused) .breadcrumb-native{background:var(--background-focused)}@media (any-hover: hover){:host(.ion-activatable:hover){color:var(--color-hover)}:host(.ion-activatable.in-breadcrumbs-color:hover),:host(.ion-activatable.ion-color:hover){color:var(--ion-color-shade)}}.breadcrumb-separator{display:-ms-inline-flexbox;display:inline-flex}:host(.breadcrumb-collapsed) .breadcrumb-native{display:none}:host(.in-breadcrumbs-color),:host(.in-breadcrumbs-color.breadcrumb-active){color:var(--ion-color-base)}:host(.in-breadcrumbs-color) .breadcrumb-separator{color:var(--ion-color-base)}:host(.ion-color){color:var(--ion-color-base)}:host(.in-toolbar-color),:host(.in-toolbar-color) .breadcrumb-separator{color:rgba(var(--ion-color-contrast-rgb), 0.8)}:host(.in-toolbar-color.breadcrumb-active){color:var(--ion-color-contrast)}.breadcrumbs-collapsed-indicator{padding-left:0;padding-right:0;padding-top:0;padding-bottom:0;margin-left:14px;margin-right:14px;margin-top:0;margin-bottom:0;display:-ms-flexbox;display:flex;-ms-flex:1 1 100%;flex:1 1 100%;-ms-flex-align:center;align-items:center;-ms-flex-pack:center;justify-content:center;width:32px;height:18px;border:0;outline:none;cursor:pointer;-webkit-appearance:none;-moz-appearance:none;appearance:none}@supports ((-webkit-margin-start: 0) or (margin-inline-start: 0)) or (-webkit-margin-start: 0){.breadcrumbs-collapsed-indicator{margin-left:unset;margin-right:unset;-webkit-margin-start:14px;margin-inline-start:14px;-webkit-margin-end:14px;margin-inline-end:14px}}.breadcrumbs-collapsed-indicator ion-icon{margin-top:1px;font-size:22px}:host{--color:var(--ion-color-step-600, #677483);--color-active:var(--ion-text-color, #03060b);--color-hover:var(--ion-text-color, #03060b);--color-focused:var(--ion-color-step-800, #35404e);--background-focused:$breadcrumb-md-background-focused}:host(.breadcrumb-active){font-weight:500}.breadcrumb-native{padding-left:12px;padding-right:12px;padding-top:6px;padding-bottom:6px}@supports ((-webkit-margin-start: 0) or (margin-inline-start: 0)) or (-webkit-margin-start: 0){.breadcrumb-native{padding-left:unset;padding-right:unset;-webkit-padding-start:12px;padding-inline-start:12px;-webkit-padding-end:12px;padding-inline-end:12px}}.breadcrumb-separator{margin-left:10px;margin-right:10px;margin-top:-1px}@supports ((-webkit-margin-start: 0) or (margin-inline-start: 0)) or (-webkit-margin-start: 0){.breadcrumb-separator{margin-left:unset;margin-right:unset;-webkit-margin-start:10px;margin-inline-start:10px;-webkit-margin-end:10px;margin-inline-end:10px}}:host(.ion-focused) .breadcrumb-native{border-radius:4px;-webkit-box-shadow:0px 1px 2px rgba(0, 0, 0, 0.2), 0px 2px 8px rgba(0, 0, 0, 0.12);box-shadow:0px 1px 2px rgba(0, 0, 0, 0.2), 0px 2px 8px rgba(0, 0, 0, 0.12)}.breadcrumb-separator{color:var(--ion-color-step-550, #73849a)}::slotted(ion-icon){color:var(--ion-color-step-550, #7d8894);font-size:18px}::slotted(ion-icon[slot=start]){margin-right:8px}@supports ((-webkit-margin-start: 0) or (margin-inline-start: 0)) or (-webkit-margin-start: 0){::slotted(ion-icon[slot=start]){margin-right:unset;-webkit-margin-end:8px;margin-inline-end:8px}}::slotted(ion-icon[slot=end]){margin-left:8px}@supports ((-webkit-margin-start: 0) or (margin-inline-start: 0)) or (-webkit-margin-start: 0){::slotted(ion-icon[slot=end]){margin-left:unset;-webkit-margin-start:8px;margin-inline-start:8px}}:host(.breadcrumb-active) ::slotted(ion-icon){color:var(--ion-color-step-850, #222d3a)}.breadcrumbs-collapsed-indicator{border-radius:2px;background:var(--ion-color-step-100, #eef1f3);color:var(--ion-color-step-550, #73849a)}.breadcrumbs-collapsed-indicator:hover{opacity:0.7}.breadcrumbs-collapsed-indicator:focus{background:var(--ion-color-step-150, #dfe5e8)}";
const Breadcrumb = class {
  constructor(hostRef) {
    (0,_index_8e692445_js__WEBPACK_IMPORTED_MODULE_0__.r)(this, hostRef);
    this.ionFocus = (0,_index_8e692445_js__WEBPACK_IMPORTED_MODULE_0__.e)(this, "ionFocus", 7);
    this.ionBlur = (0,_index_8e692445_js__WEBPACK_IMPORTED_MODULE_0__.e)(this, "ionBlur", 7);
    this.collapsedClick = (0,_index_8e692445_js__WEBPACK_IMPORTED_MODULE_0__.e)(this, "collapsedClick", 7);
    this.inheritedAttributes = {};
    /** @internal */
    this.collapsed = false;
    /**
     * If `true`, the breadcrumb will take on a different look to show that
     * it is the currently active breadcrumb. Defaults to `true` for the
     * last breadcrumb if it is not set on any.
     */
    this.active = false;
    /**
     * If `true`, the user cannot interact with the breadcrumb.
     */
    this.disabled = false;
    /**
     * When using a router, it specifies the transition direction when navigating to
     * another page using `href`.
     */
    this.routerDirection = 'forward';
    this.onFocus = () => {
      this.ionFocus.emit();
    };
    this.onBlur = () => {
      this.ionBlur.emit();
    };
    this.collapsedIndicatorClick = () => {
      this.collapsedClick.emit({
        ionShadowTarget: this.collapsedRef
      });
    };
  }
  componentWillLoad() {
    this.inheritedAttributes = (0,_helpers_3b390e48_js__WEBPACK_IMPORTED_MODULE_3__.i)(this.el);
  }
  isClickable() {
    return this.href !== undefined;
  }
  render() {
    const {
      color,
      active,
      collapsed,
      disabled,
      download,
      el,
      inheritedAttributes,
      last,
      routerAnimation,
      routerDirection,
      separator,
      showCollapsedIndicator,
      target
    } = this;
    const clickable = this.isClickable();
    const TagType = this.href === undefined ? 'span' : 'a';
    // Links can still be tabbed to when set to disabled if they have an href
    // in order to truly disable them we can keep it as an anchor but remove the href
    const href = disabled ? undefined : this.href;
    const mode = (0,_ionic_global_c74e4951_js__WEBPACK_IMPORTED_MODULE_2__.b)(this);
    const attrs = TagType === 'span' ? {} : {
      download,
      href,
      target
    };
    // If the breadcrumb is collapsed, check if it contains the collapsed indicator
    // to show the separator as long as it isn't also the last breadcrumb
    // otherwise if not collapsed use the value in separator
    const showSeparator = last ? false : collapsed ? showCollapsedIndicator && !last ? true : false : separator;
    return (0,_index_8e692445_js__WEBPACK_IMPORTED_MODULE_0__.h)(_index_8e692445_js__WEBPACK_IMPORTED_MODULE_0__.H, {
      onClick: ev => (0,_theme_7670341c_js__WEBPACK_IMPORTED_MODULE_4__.o)(href, ev, routerDirection, routerAnimation),
      "aria-disabled": disabled ? 'true' : null,
      class: (0,_theme_7670341c_js__WEBPACK_IMPORTED_MODULE_4__.c)(color, {
        [mode]: true,
        'breadcrumb-active': active,
        'breadcrumb-collapsed': collapsed,
        'breadcrumb-disabled': disabled,
        'in-breadcrumbs-color': (0,_theme_7670341c_js__WEBPACK_IMPORTED_MODULE_4__.h)('ion-breadcrumbs[color]', el),
        'in-toolbar': (0,_theme_7670341c_js__WEBPACK_IMPORTED_MODULE_4__.h)('ion-toolbar', this.el),
        'in-toolbar-color': (0,_theme_7670341c_js__WEBPACK_IMPORTED_MODULE_4__.h)('ion-toolbar[color]', this.el),
        'ion-activatable': clickable,
        'ion-focusable': clickable
      })
    }, (0,_index_8e692445_js__WEBPACK_IMPORTED_MODULE_0__.h)(TagType, Object.assign({}, attrs, {
      class: "breadcrumb-native",
      part: "native",
      disabled: disabled,
      onFocus: this.onFocus,
      onBlur: this.onBlur
    }, inheritedAttributes), (0,_index_8e692445_js__WEBPACK_IMPORTED_MODULE_0__.h)("slot", {
      name: "start"
    }), (0,_index_8e692445_js__WEBPACK_IMPORTED_MODULE_0__.h)("slot", null), (0,_index_8e692445_js__WEBPACK_IMPORTED_MODULE_0__.h)("slot", {
      name: "end"
    })), showCollapsedIndicator && (0,_index_8e692445_js__WEBPACK_IMPORTED_MODULE_0__.h)("button", {
      part: "collapsed-indicator",
      onClick: () => this.collapsedIndicatorClick(),
      ref: collapsedEl => this.collapsedRef = collapsedEl,
      class: {
        'breadcrumbs-collapsed-indicator': true
      }
    }, (0,_index_8e692445_js__WEBPACK_IMPORTED_MODULE_0__.h)("ion-icon", {
      icon: _index_2bcb741c_js__WEBPACK_IMPORTED_MODULE_1__.n,
      lazy: false
    })), showSeparator &&
    /**
     * Separators should not be announced by narrators.
     * We add aria-hidden on the span so that this applies
     * to any custom separators too.
     */
    (0,_index_8e692445_js__WEBPACK_IMPORTED_MODULE_0__.h)("span", {
      class: "breadcrumb-separator",
      part: "separator",
      "aria-hidden": "true"
    }, (0,_index_8e692445_js__WEBPACK_IMPORTED_MODULE_0__.h)("slot", {
      name: "separator"
    }, mode === 'ios' ? (0,_index_8e692445_js__WEBPACK_IMPORTED_MODULE_0__.h)("ion-icon", {
      icon: _index_2bcb741c_js__WEBPACK_IMPORTED_MODULE_1__.m,
      lazy: false,
      "flip-rtl": true
    }) : (0,_index_8e692445_js__WEBPACK_IMPORTED_MODULE_0__.h)("span", null, "/"))));
  }
  get el() {
    return (0,_index_8e692445_js__WEBPACK_IMPORTED_MODULE_0__.i)(this);
  }
};
Breadcrumb.style = {
  ios: breadcrumbIosCss,
  md: breadcrumbMdCss
};
const breadcrumbsIosCss = ":host{-moz-osx-font-smoothing:grayscale;-webkit-font-smoothing:antialiased;display:-ms-flexbox;display:flex;-ms-flex-wrap:wrap;flex-wrap:wrap;-ms-flex-align:center;align-items:center}:host(.in-toolbar-color),:host(.in-toolbar-color) .breadcrumbs-collapsed-indicator ion-icon{color:var(--ion-color-contrast)}:host(.in-toolbar-color) .breadcrumbs-collapsed-indicator{background:rgba(var(--ion-color-contrast-rgb), 0.11)}:host(.in-toolbar){padding-left:20px;padding-right:20px;padding-top:0;padding-bottom:0;-ms-flex-pack:center;justify-content:center}@supports ((-webkit-margin-start: 0) or (margin-inline-start: 0)) or (-webkit-margin-start: 0){:host(.in-toolbar){padding-left:unset;padding-right:unset;-webkit-padding-start:20px;padding-inline-start:20px;-webkit-padding-end:20px;padding-inline-end:20px}}";
const breadcrumbsMdCss = ":host{-moz-osx-font-smoothing:grayscale;-webkit-font-smoothing:antialiased;display:-ms-flexbox;display:flex;-ms-flex-wrap:wrap;flex-wrap:wrap;-ms-flex-align:center;align-items:center}:host(.in-toolbar-color),:host(.in-toolbar-color) .breadcrumbs-collapsed-indicator ion-icon{color:var(--ion-color-contrast)}:host(.in-toolbar-color) .breadcrumbs-collapsed-indicator{background:rgba(var(--ion-color-contrast-rgb), 0.11)}:host(.in-toolbar){padding-left:8px;padding-right:8px;padding-top:0;padding-bottom:0}@supports ((-webkit-margin-start: 0) or (margin-inline-start: 0)) or (-webkit-margin-start: 0){:host(.in-toolbar){padding-left:unset;padding-right:unset;-webkit-padding-start:8px;padding-inline-start:8px;-webkit-padding-end:8px;padding-inline-end:8px}}";
const Breadcrumbs = class {
  constructor(hostRef) {
    (0,_index_8e692445_js__WEBPACK_IMPORTED_MODULE_0__.r)(this, hostRef);
    this.ionCollapsedClick = (0,_index_8e692445_js__WEBPACK_IMPORTED_MODULE_0__.e)(this, "ionCollapsedClick", 7);
    /**
     * The number of breadcrumbs to show before the collapsed indicator.
     * If `itemsBeforeCollapse` + `itemsAfterCollapse` is greater than `maxItems`,
     * the breadcrumbs will not be collapsed.
     */
    this.itemsBeforeCollapse = 1;
    /**
     * The number of breadcrumbs to show after the collapsed indicator.
     * If `itemsBeforeCollapse` + `itemsAfterCollapse` is greater than `maxItems`,
     * the breadcrumbs will not be collapsed.
     */
    this.itemsAfterCollapse = 1;
    this.breadcrumbsInit = () => {
      this.setBreadcrumbSeparator();
      this.setMaxItems();
    };
    this.resetActiveBreadcrumb = () => {
      const breadcrumbs = this.getBreadcrumbs();
      // Only reset the active breadcrumb if we were the ones to change it
      // otherwise use the one set on the component
      const activeBreadcrumb = breadcrumbs.find(breadcrumb => breadcrumb.active);
      if (activeBreadcrumb && this.activeChanged) {
        activeBreadcrumb.active = false;
      }
    };
    this.setMaxItems = () => {
      const {
        itemsAfterCollapse,
        itemsBeforeCollapse,
        maxItems
      } = this;
      const breadcrumbs = this.getBreadcrumbs();
      for (const breadcrumb of breadcrumbs) {
        breadcrumb.showCollapsedIndicator = false;
        breadcrumb.collapsed = false;
      }
      // If the number of breadcrumbs exceeds the maximum number of items
      // that should show and the items before / after collapse do not
      // exceed the maximum items then we need to collapse the breadcrumbs
      const shouldCollapse = maxItems !== undefined && breadcrumbs.length > maxItems && itemsBeforeCollapse + itemsAfterCollapse <= maxItems;
      if (shouldCollapse) {
        // Show the collapsed indicator in the first breadcrumb that collapses
        breadcrumbs.forEach((breadcrumb, index) => {
          if (index === itemsBeforeCollapse) {
            breadcrumb.showCollapsedIndicator = true;
          }
          // Collapse all breadcrumbs that have an index greater than or equal to
          // the number before collapse and an index less than the total number
          // of breadcrumbs minus the items that should show after the collapse
          if (index >= itemsBeforeCollapse && index < breadcrumbs.length - itemsAfterCollapse) {
            breadcrumb.collapsed = true;
          }
        });
      }
    };
    this.setBreadcrumbSeparator = () => {
      const {
        itemsAfterCollapse,
        itemsBeforeCollapse,
        maxItems
      } = this;
      const breadcrumbs = this.getBreadcrumbs();
      // Check if an active breadcrumb exists already
      const active = breadcrumbs.find(breadcrumb => breadcrumb.active);
      // Set the separator on all but the last breadcrumb
      for (const breadcrumb of breadcrumbs) {
        // The only time the last breadcrumb changes is when
        // itemsAfterCollapse is set to 0, in this case the
        // last breadcrumb will be the collapsed indicator
        const last = maxItems !== undefined && itemsAfterCollapse === 0 ? breadcrumb === breadcrumbs[itemsBeforeCollapse] : breadcrumb === breadcrumbs[breadcrumbs.length - 1];
        breadcrumb.last = last;
        // If the breadcrumb has defined whether or not to show the
        // separator then use that value, otherwise check if it's the
        // last breadcrumb
        const separator = breadcrumb.separator !== undefined ? breadcrumb.separator : last ? undefined : true;
        breadcrumb.separator = separator;
        // If there is not an active breadcrumb already
        // set the last one to active
        if (!active && last) {
          breadcrumb.active = true;
          this.activeChanged = true;
        }
      }
    };
    this.getBreadcrumbs = () => {
      return Array.from(this.el.querySelectorAll('ion-breadcrumb'));
    };
    this.slotChanged = () => {
      this.resetActiveBreadcrumb();
      this.breadcrumbsInit();
    };
  }
  onCollapsedClick(ev) {
    const breadcrumbs = this.getBreadcrumbs();
    const collapsedBreadcrumbs = breadcrumbs.filter(breadcrumb => breadcrumb.collapsed);
    this.ionCollapsedClick.emit(Object.assign(Object.assign({}, ev.detail), {
      collapsedBreadcrumbs
    }));
  }
  maxItemsChanged() {
    this.resetActiveBreadcrumb();
    this.breadcrumbsInit();
  }
  componentWillLoad() {
    this.breadcrumbsInit();
  }
  render() {
    const {
      color,
      collapsed
    } = this;
    const mode = (0,_ionic_global_c74e4951_js__WEBPACK_IMPORTED_MODULE_2__.b)(this);
    return (0,_index_8e692445_js__WEBPACK_IMPORTED_MODULE_0__.h)(_index_8e692445_js__WEBPACK_IMPORTED_MODULE_0__.H, {
      class: (0,_theme_7670341c_js__WEBPACK_IMPORTED_MODULE_4__.c)(color, {
        [mode]: true,
        'in-toolbar': (0,_theme_7670341c_js__WEBPACK_IMPORTED_MODULE_4__.h)('ion-toolbar', this.el),
        'in-toolbar-color': (0,_theme_7670341c_js__WEBPACK_IMPORTED_MODULE_4__.h)('ion-toolbar[color]', this.el),
        'breadcrumbs-collapsed': collapsed
      })
    }, (0,_index_8e692445_js__WEBPACK_IMPORTED_MODULE_0__.h)("slot", {
      onSlotchange: this.slotChanged
    }));
  }
  get el() {
    return (0,_index_8e692445_js__WEBPACK_IMPORTED_MODULE_0__.i)(this);
  }
  static get watchers() {
    return {
      "maxItems": ["maxItemsChanged"],
      "itemsBeforeCollapse": ["maxItemsChanged"],
      "itemsAfterCollapse": ["maxItemsChanged"]
    };
  }
};
Breadcrumbs.style = {
  ios: breadcrumbsIosCss,
  md: breadcrumbsMdCss
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
//# sourceMappingURL=8648.87bd99412038266f.js.map