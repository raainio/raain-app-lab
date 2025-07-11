"use strict";
(self["webpackChunkapp"] = self["webpackChunkapp"] || []).push([[199],{

/***/ 70199:
/*!**************************************************************!*\
  !*** ./node_modules/@ionic/core/dist/esm/ion-tab_2.entry.js ***!
  \**************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "ion_tab": () => (/* binding */ Tab),
/* harmony export */   "ion_tabs": () => (/* binding */ Tabs)
/* harmony export */ });
/* harmony import */ var _opt_atlassian_pipelines_agent_build_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/esm/asyncToGenerator.js */ 71670);
/* harmony import */ var _index_8e692445_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./index-8e692445.js */ 91559);
/* harmony import */ var _framework_delegate_c3305a28_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./framework-delegate-c3305a28.js */ 90539);
/* harmony import */ var _helpers_3b390e48_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./helpers-3b390e48.js */ 29259);

/*!
 * (C) Ionic http://ionicframework.com - MIT License
 */



const tabCss = ":host(.tab-hidden){display:none !important}";
const Tab = class {
  constructor(hostRef) {
    (0,_index_8e692445_js__WEBPACK_IMPORTED_MODULE_1__.r)(this, hostRef);
    this.loaded = false;
    /** @internal */
    this.active = false;
  }
  componentWillLoad() {
    var _this = this;
    return (0,_opt_atlassian_pipelines_agent_build_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_0__["default"])(function* () {
      if (_this.active) {
        yield _this.setActive();
      }
    })();
  }
  /** Set the active component for the tab */
  setActive() {
    var _this2 = this;
    return (0,_opt_atlassian_pipelines_agent_build_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_0__["default"])(function* () {
      yield _this2.prepareLazyLoaded();
      _this2.active = true;
    })();
  }
  changeActive(isActive) {
    if (isActive) {
      this.prepareLazyLoaded();
    }
  }
  prepareLazyLoaded() {
    if (!this.loaded && this.component != null) {
      this.loaded = true;
      try {
        return (0,_framework_delegate_c3305a28_js__WEBPACK_IMPORTED_MODULE_2__.a)(this.delegate, this.el, this.component, ['ion-page']);
      } catch (e) {
        console.error(e);
      }
    }
    return Promise.resolve(undefined);
  }
  render() {
    const {
      tab,
      active,
      component
    } = this;
    return (0,_index_8e692445_js__WEBPACK_IMPORTED_MODULE_1__.h)(_index_8e692445_js__WEBPACK_IMPORTED_MODULE_1__.H, {
      role: "tabpanel",
      "aria-hidden": !active ? 'true' : null,
      "aria-labelledby": `tab-button-${tab}`,
      class: {
        'ion-page': component === undefined,
        'tab-hidden': !active
      }
    }, (0,_index_8e692445_js__WEBPACK_IMPORTED_MODULE_1__.h)("slot", null));
  }
  get el() {
    return (0,_index_8e692445_js__WEBPACK_IMPORTED_MODULE_1__.i)(this);
  }
  static get watchers() {
    return {
      "active": ["changeActive"]
    };
  }
};
Tab.style = tabCss;
const tabsCss = ":host{left:0;right:0;top:0;bottom:0;display:-ms-flexbox;display:flex;position:absolute;-ms-flex-direction:column;flex-direction:column;width:100%;height:100%;contain:layout size style;z-index:0}.tabs-inner{position:relative;-ms-flex:1;flex:1;contain:layout size style}";
const Tabs = class {
  constructor(hostRef) {
    (0,_index_8e692445_js__WEBPACK_IMPORTED_MODULE_1__.r)(this, hostRef);
    this.ionNavWillLoad = (0,_index_8e692445_js__WEBPACK_IMPORTED_MODULE_1__.e)(this, "ionNavWillLoad", 7);
    this.ionTabsWillChange = (0,_index_8e692445_js__WEBPACK_IMPORTED_MODULE_1__.e)(this, "ionTabsWillChange", 3);
    this.ionTabsDidChange = (0,_index_8e692445_js__WEBPACK_IMPORTED_MODULE_1__.e)(this, "ionTabsDidChange", 3);
    this.transitioning = false;
    /** @internal */
    this.useRouter = false;
    this.onTabClicked = ev => {
      const {
        href,
        tab
      } = ev.detail;
      if (this.useRouter && href !== undefined) {
        const router = document.querySelector('ion-router');
        if (router) {
          router.push(href);
        }
      } else {
        this.select(tab);
      }
    };
  }
  componentWillLoad() {
    var _this3 = this;
    return (0,_opt_atlassian_pipelines_agent_build_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_0__["default"])(function* () {
      if (!_this3.useRouter) {
        _this3.useRouter = !!document.querySelector('ion-router') && !_this3.el.closest('[no-router]');
      }
      if (!_this3.useRouter) {
        const tabs = _this3.tabs;
        if (tabs.length > 0) {
          yield _this3.select(tabs[0]);
        }
      }
      _this3.ionNavWillLoad.emit();
    })();
  }
  componentWillRender() {
    const tabBar = this.el.querySelector('ion-tab-bar');
    if (tabBar) {
      const tab = this.selectedTab ? this.selectedTab.tab : undefined;
      tabBar.selectedTab = tab;
    }
  }
  /**
   * Select a tab by the value of its `tab` property or an element reference.
   *
   * @param tab The tab instance to select. If passed a string, it should be the value of the tab's `tab` property.
   */
  select(tab) {
    var _this4 = this;
    return (0,_opt_atlassian_pipelines_agent_build_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_0__["default"])(function* () {
      const selectedTab = getTab(_this4.tabs, tab);
      if (!_this4.shouldSwitch(selectedTab)) {
        return false;
      }
      yield _this4.setActive(selectedTab);
      yield _this4.notifyRouter();
      _this4.tabSwitch();
      return true;
    })();
  }
  /**
   * Get a specific tab by the value of its `tab` property or an element reference.
   *
   * @param tab The tab instance to select. If passed a string, it should be the value of the tab's `tab` property.
   */
  getTab(tab) {
    var _this5 = this;
    return (0,_opt_atlassian_pipelines_agent_build_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_0__["default"])(function* () {
      return getTab(_this5.tabs, tab);
    })();
  }
  /**
   * Get the currently selected tab.
   */
  getSelected() {
    return Promise.resolve(this.selectedTab ? this.selectedTab.tab : undefined);
  }
  /** @internal */
  setRouteId(id) {
    var _this6 = this;
    return (0,_opt_atlassian_pipelines_agent_build_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_0__["default"])(function* () {
      const selectedTab = getTab(_this6.tabs, id);
      if (!_this6.shouldSwitch(selectedTab)) {
        return {
          changed: false,
          element: _this6.selectedTab
        };
      }
      yield _this6.setActive(selectedTab);
      return {
        changed: true,
        element: _this6.selectedTab,
        markVisible: () => _this6.tabSwitch()
      };
    })();
  }
  /** @internal */
  getRouteId() {
    var _this7 = this;
    return (0,_opt_atlassian_pipelines_agent_build_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_0__["default"])(function* () {
      var _a;
      const tabId = (_a = _this7.selectedTab) === null || _a === void 0 ? void 0 : _a.tab;
      return tabId !== undefined ? {
        id: tabId,
        element: _this7.selectedTab
      } : undefined;
    })();
  }
  setActive(selectedTab) {
    if (this.transitioning) {
      return Promise.reject('transitioning already happening');
    }
    this.transitioning = true;
    this.leavingTab = this.selectedTab;
    this.selectedTab = selectedTab;
    this.ionTabsWillChange.emit({
      tab: selectedTab.tab
    });
    selectedTab.active = true;
    return Promise.resolve();
  }
  tabSwitch() {
    const selectedTab = this.selectedTab;
    const leavingTab = this.leavingTab;
    this.leavingTab = undefined;
    this.transitioning = false;
    if (!selectedTab) {
      return;
    }
    if (leavingTab !== selectedTab) {
      if (leavingTab) {
        leavingTab.active = false;
      }
      this.ionTabsDidChange.emit({
        tab: selectedTab.tab
      });
    }
  }
  notifyRouter() {
    if (this.useRouter) {
      const router = document.querySelector('ion-router');
      if (router) {
        return router.navChanged('forward');
      }
    }
    return Promise.resolve(false);
  }
  shouldSwitch(selectedTab) {
    const leavingTab = this.selectedTab;
    return selectedTab !== undefined && selectedTab !== leavingTab && !this.transitioning;
  }
  get tabs() {
    return Array.from(this.el.querySelectorAll('ion-tab'));
  }
  render() {
    return (0,_index_8e692445_js__WEBPACK_IMPORTED_MODULE_1__.h)(_index_8e692445_js__WEBPACK_IMPORTED_MODULE_1__.H, {
      onIonTabButtonClick: this.onTabClicked
    }, (0,_index_8e692445_js__WEBPACK_IMPORTED_MODULE_1__.h)("slot", {
      name: "top"
    }), (0,_index_8e692445_js__WEBPACK_IMPORTED_MODULE_1__.h)("div", {
      class: "tabs-inner"
    }, (0,_index_8e692445_js__WEBPACK_IMPORTED_MODULE_1__.h)("slot", null)), (0,_index_8e692445_js__WEBPACK_IMPORTED_MODULE_1__.h)("slot", {
      name: "bottom"
    }));
  }
  get el() {
    return (0,_index_8e692445_js__WEBPACK_IMPORTED_MODULE_1__.i)(this);
  }
};
const getTab = (tabs, tab) => {
  const tabEl = typeof tab === 'string' ? tabs.find(t => t.tab === tab) : tab;
  if (!tabEl) {
    console.error(`tab with id: "${tabEl}" does not exist`);
  }
  return tabEl;
};
Tabs.style = tabsCss;


/***/ })

}]);
//# sourceMappingURL=199.4eac97b69b37b2be.js.map