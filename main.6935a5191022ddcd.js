(self["webpackChunkapp"] = self["webpackChunkapp"] || []).push([[179],{

/***/ 68324:
/*!***********************!*\
  !*** ./src/bpInfo.ts ***!
  \***********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "bpInfo": () => (/* binding */ bpInfo)
/* harmony export */ });
const bpInfo = {
  version: 'v1.6.36'
};

/***/ }),

/***/ 28299:
/*!****************************************!*\
  !*** ./src/core/app-routing.module.ts ***!
  \****************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "AppRoutingModule": () => (/* binding */ AppRoutingModule)
/* harmony export */ });
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ 60124);
/* harmony import */ var _page_not_found_page_not_found_component__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./page-not-found/page-not-found.component */ 62469);
/* harmony import */ var _auth_auth_guard__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./auth/auth.guard */ 31882);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ 22560);





const routes = [{
  path: '',
  redirectTo: 'home',
  pathMatch: 'full'
}, {
  path: 'home',
  loadChildren: () => __webpack_require__.e(/*! import() */ 6653).then(__webpack_require__.bind(__webpack_require__, /*! ./home/home.module */ 6653)).then(x => x.HomePageModule),
  canActivate: [_auth_auth_guard__WEBPACK_IMPORTED_MODULE_1__.AuthGuard]
}, {
  path: 'radars',
  loadChildren: () => __webpack_require__.e(/*! import() */ 6498).then(__webpack_require__.bind(__webpack_require__, /*! ./radars/radars.module */ 16498)).then(x => x.RadarsPageModule),
  canActivate: [_auth_auth_guard__WEBPACK_IMPORTED_MODULE_1__.AuthGuard]
}, {
  path: 'rains',
  loadChildren: () => __webpack_require__.e(/*! import() */ 9115).then(__webpack_require__.bind(__webpack_require__, /*! ./rains/rains.module */ 19115)).then(x => x.RainsPageModule),
  canActivate: [_auth_auth_guard__WEBPACK_IMPORTED_MODULE_1__.AuthGuard]
}, {
  path: 'events',
  loadChildren: () => __webpack_require__.e(/*! import() */ 8346).then(__webpack_require__.bind(__webpack_require__, /*! ./events/events.module */ 78346)).then(x => x.EventsPageModule),
  canActivate: [_auth_auth_guard__WEBPACK_IMPORTED_MODULE_1__.AuthGuard]
}, {
  path: 'profile',
  loadChildren: () => __webpack_require__.e(/*! import() */ 242).then(__webpack_require__.bind(__webpack_require__, /*! ./profile/profile.module */ 70242)).then(x => x.ProfilePageModule),
  canActivate: [_auth_auth_guard__WEBPACK_IMPORTED_MODULE_1__.AuthGuard]
}, {
  path: 'login',
  loadChildren: () => __webpack_require__.e(/*! import() */ 5452).then(__webpack_require__.bind(__webpack_require__, /*! ./login/login.module */ 75452)).then(x => x.LoginPageModule)
}, {
  path: 'logout',
  loadChildren: () => __webpack_require__.e(/*! import() */ 1604).then(__webpack_require__.bind(__webpack_require__, /*! ./logout/logout.module */ 41604)).then(x => x.LogoutPageModule)
}, {
  path: '**',
  component: _page_not_found_page_not_found_component__WEBPACK_IMPORTED_MODULE_0__.PageNotFoundComponent
}];
class AppRoutingModule {
  static {
    this.ɵfac = function AppRoutingModule_Factory(t) {
      return new (t || AppRoutingModule)();
    };
  }
  static {
    this.ɵmod = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdefineNgModule"]({
      type: AppRoutingModule
    });
  }
  static {
    this.ɵinj = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdefineInjector"]({
      imports: [_angular_router__WEBPACK_IMPORTED_MODULE_3__.RouterModule.forRoot(routes, {
        useHash: true,
        preloadingStrategy: _angular_router__WEBPACK_IMPORTED_MODULE_3__.NoPreloading
      }), _angular_router__WEBPACK_IMPORTED_MODULE_3__.RouterModule]
    });
  }
}
(function () {
  (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵsetNgModuleScope"](AppRoutingModule, {
    imports: [_angular_router__WEBPACK_IMPORTED_MODULE_3__.RouterModule],
    exports: [_angular_router__WEBPACK_IMPORTED_MODULE_3__.RouterModule]
  });
})();

/***/ }),

/***/ 6721:
/*!***********************************!*\
  !*** ./src/core/app.component.ts ***!
  \***********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "AppComponent": () => (/* binding */ AppComponent)
/* harmony export */ });
/* harmony import */ var _opt_atlassian_pipelines_agent_build_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/esm/asyncToGenerator.js */ 71670);
/* harmony import */ var _capacitor_splash_screen__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @capacitor/splash-screen */ 82239);
/* harmony import */ var _environments_environment__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../environments/environment */ 92340);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/core */ 22560);
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @ionic/angular */ 93819);
/* harmony import */ var _shared__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./shared */ 8987);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/common */ 94666);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @angular/router */ 60124);
/* harmony import */ var _shared_profile_icon_directive__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./shared/profile-icon.directive */ 36035);









function AppComponent_ion_menu_toggle_9_ion_badge_5_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](0, "ion-badge", 10);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
  }
  if (rf & 2) {
    const p_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵnextContext"]().$implicit;
    const ctx_r2 = _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtextInterpolate"](ctx_r2.getBadges(p_r1));
  }
}
const _c0 = function (a0) {
  return [a0];
};
function AppComponent_ion_menu_toggle_9_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](0, "ion-menu-toggle", 6)(1, "ion-item", 7);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelement"](2, "ion-icon", 8);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](3, "ion-label");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtemplate"](5, AppComponent_ion_menu_toggle_9_ion_badge_5_Template, 2, 1, "ion-badge", 9);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]()();
  }
  if (rf & 2) {
    const p_r1 = ctx.$implicit;
    const ctx_r0 = _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵproperty"]("routerDirection", "root")("routerLink", _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵpureFunction1"](5, _c0, p_r1.url));
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵproperty"]("name", p_r1.icon);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtextInterpolate1"](" ", p_r1.title, " ");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵproperty"]("ngIf", ctx_r0.getBadges(p_r1));
  }
}
class AppComponent {
  constructor(platform, profile) {
    this.platform = platform;
    this.profile = profile;
    this.version = _environments_environment__WEBPACK_IMPORTED_MODULE_2__.environment.version;
    this.appPages = [{
      title: 'Dashboard',
      url: '/home',
      icon: 'home'
    }, {
      title: 'Radars',
      url: '/radars',
      icon: 'wifi'
    }, {
      title: 'Rains',
      url: '/rains',
      icon: 'rainy'
    },
    // {
    //   title: 'Events',
    //   url: '/events',
    //   icon: 'notifications-outline'
    // },
    {
      title: 'Settings',
      url: '/profile',
      icon: 'settings'
    }, {
      title: 'Sign out',
      url: '/logout',
      icon: 'log-out'
    }];
    this.notifications = [];
    this.initializeApp();
  }
  initializeApp() {
    var _this = this;
    return (0,_opt_atlassian_pipelines_agent_build_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_0__["default"])(function* () {
      _this.profile.defaultUrlForAPI = _environments_environment__WEBPACK_IMPORTED_MODULE_2__.environment.serverUrl;
      yield _this.platform.ready();
      yield _this.initFidj();
      yield _capacitor_splash_screen__WEBPACK_IMPORTED_MODULE_1__.SplashScreen.hide();
    })();
  }
  initFidj() {
    var _this2 = this;
    return (0,_opt_atlassian_pipelines_agent_build_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_0__["default"])(function* () {
      if (_this2.profile.isLoggedIn()) {
        return;
      }
      yield _this2.profile.logout(_environments_environment__WEBPACK_IMPORTED_MODULE_2__.environment.fidjKey, _environments_environment__WEBPACK_IMPORTED_MODULE_2__.environment.production);
    })();
  }
  getNotifications() {
    var _this3 = this;
    return (0,_opt_atlassian_pipelines_agent_build_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_0__["default"])(function* () {
      _this3.notifications = yield _this3.profile.getAllNotifications();
    })();
  }
  getBadges(page) {
    if (page.title !== 'Events') {
      return 0;
    }
    return this.notifications?.length;
  }
  static {
    this.ɵfac = function AppComponent_Factory(t) {
      return new (t || AppComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵdirectiveInject"](_ionic_angular__WEBPACK_IMPORTED_MODULE_6__.Platform), _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵdirectiveInject"](_shared__WEBPACK_IMPORTED_MODULE_3__.ProfileService));
    };
  }
  static {
    this.ɵcmp = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵdefineComponent"]({
      type: AppComponent,
      selectors: [["app-root"]],
      decls: 13,
      vars: 2,
      consts: [["contentId", "main-content", "when", "(min-width: 5000px)"], ["contentId", "main-content", "type", "overlay"], ["id", "my-content"], ["auto-hide", "false", 4, "ngFor", "ngForOf"], ["id", "main-content"], [1, "app-version"], ["auto-hide", "false"], [3, "routerDirection", "routerLink"], ["slot", "start", 3, "name"], ["slot", "end", 4, "ngIf"], ["slot", "end"]],
      template: function AppComponent_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](0, "ion-app")(1, "ion-split-pane", 0)(2, "ion-menu", 1)(3, "ion-header")(4, "ion-toolbar")(5, "ion-title");
          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](6, "Menu");
          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]()()();
          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](7, "ion-content", 2)(8, "ion-list");
          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtemplate"](9, AppComponent_ion_menu_toggle_9_Template, 6, 7, "ion-menu-toggle", 3);
          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]()()();
          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelement"](10, "ion-router-outlet", 4);
          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](11, "div", 5);
          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](12);
          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]()();
        }
        if (rf & 2) {
          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](9);
          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵproperty"]("ngForOf", ctx.appPages);
          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](3);
          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtextInterpolate"](ctx.version);
        }
      },
      dependencies: [_angular_common__WEBPACK_IMPORTED_MODULE_7__.NgForOf, _angular_common__WEBPACK_IMPORTED_MODULE_7__.NgIf, _ionic_angular__WEBPACK_IMPORTED_MODULE_6__.IonApp, _ionic_angular__WEBPACK_IMPORTED_MODULE_6__.IonBadge, _ionic_angular__WEBPACK_IMPORTED_MODULE_6__.IonContent, _ionic_angular__WEBPACK_IMPORTED_MODULE_6__.IonHeader, _ionic_angular__WEBPACK_IMPORTED_MODULE_6__.IonIcon, _ionic_angular__WEBPACK_IMPORTED_MODULE_6__.IonItem, _ionic_angular__WEBPACK_IMPORTED_MODULE_6__.IonLabel, _ionic_angular__WEBPACK_IMPORTED_MODULE_6__.IonList, _ionic_angular__WEBPACK_IMPORTED_MODULE_6__.IonMenu, _ionic_angular__WEBPACK_IMPORTED_MODULE_6__.IonMenuToggle, _ionic_angular__WEBPACK_IMPORTED_MODULE_6__.IonSplitPane, _ionic_angular__WEBPACK_IMPORTED_MODULE_6__.IonToolbar, _ionic_angular__WEBPACK_IMPORTED_MODULE_6__.IonTitle, _ionic_angular__WEBPACK_IMPORTED_MODULE_6__.IonRouterOutlet, _ionic_angular__WEBPACK_IMPORTED_MODULE_6__.RouterLinkDelegate, _angular_router__WEBPACK_IMPORTED_MODULE_8__.RouterLink, _shared_profile_icon_directive__WEBPACK_IMPORTED_MODULE_4__.ProfileIconDirective],
      styles: ["ion-menu[_ngcontent-%COMP%]   ion-content[_ngcontent-%COMP%] {\n  --background: var(--ion-item-background, var(--ion-background-color, #fff));\n}\n\nion-menu[_ngcontent-%COMP%]::part(backdrop) {\n  background-color: rgba(0, 119, 255, 0.5);\n}\n\nion-menu[_ngcontent-%COMP%]::part(container) {\n  border-radius: 0 2px 2px 0;\n  box-shadow: 4px 0px 16px rgba(0, 255, 196, 0.18);\n}\n\nion-menu.md[_ngcontent-%COMP%]   ion-content[_ngcontent-%COMP%] {\n  --padding-start: 8px;\n  --padding-end: 8px;\n  --padding-top: 20px;\n  --padding-bottom: 20px;\n}\n\nion-menu.md[_ngcontent-%COMP%]   ion-list[_ngcontent-%COMP%] {\n  padding: 20px 0;\n}\n\nion-menu.md[_ngcontent-%COMP%]   ion-note[_ngcontent-%COMP%] {\n  margin-bottom: 30px;\n}\n\nion-menu.md[_ngcontent-%COMP%]   ion-list-header[_ngcontent-%COMP%], ion-menu.md[_ngcontent-%COMP%]   ion-note[_ngcontent-%COMP%] {\n  padding-left: 10px;\n}\n\nion-menu.md[_ngcontent-%COMP%]   ion-list#inbox-list[_ngcontent-%COMP%] {\n  border-bottom: 1px solid var(--ion-color-step-150, #d7d8da);\n}\n\nion-menu.md[_ngcontent-%COMP%]   ion-list#inbox-list[_ngcontent-%COMP%]   ion-list-header[_ngcontent-%COMP%] {\n  font-size: 22px;\n  font-weight: 600;\n  min-height: 20px;\n}\n\nion-menu.md[_ngcontent-%COMP%]   ion-list#labels-list[_ngcontent-%COMP%]   ion-list-header[_ngcontent-%COMP%] {\n  font-size: 16px;\n  margin-bottom: 18px;\n  color: #757575;\n  min-height: 26px;\n}\n\nion-menu.md[_ngcontent-%COMP%]   ion-item[_ngcontent-%COMP%] {\n  --padding-start: 10px;\n  --padding-end: 10px;\n  border-radius: 4px;\n}\n\nion-menu.md[_ngcontent-%COMP%]   ion-item.selected[_ngcontent-%COMP%] {\n  --background: rgba(var(--ion-color-primary-rgb), 0.14);\n}\n\nion-menu.md[_ngcontent-%COMP%]   ion-item.selected[_ngcontent-%COMP%]   ion-icon[_ngcontent-%COMP%] {\n  color: var(--ion-color-primary);\n}\n\nion-menu.md[_ngcontent-%COMP%]   ion-item[_ngcontent-%COMP%]   ion-icon[_ngcontent-%COMP%] {\n  color: #616e7e;\n}\n\nion-menu.md[_ngcontent-%COMP%]   ion-item[_ngcontent-%COMP%]   ion-label[_ngcontent-%COMP%] {\n  font-weight: 500;\n}\n\nion-menu.ios[_ngcontent-%COMP%]   ion-content[_ngcontent-%COMP%] {\n  --padding-bottom: 20px;\n}\n\nion-menu.ios[_ngcontent-%COMP%]   ion-list[_ngcontent-%COMP%] {\n  padding: 20px 0 0 0;\n}\n\nion-menu.ios[_ngcontent-%COMP%]   ion-note[_ngcontent-%COMP%] {\n  line-height: 24px;\n  margin-bottom: 20px;\n}\n\nion-menu.ios[_ngcontent-%COMP%]   ion-item[_ngcontent-%COMP%] {\n  --padding-start: 16px;\n  --padding-end: 16px;\n  --min-height: 50px;\n}\n\nion-menu.ios[_ngcontent-%COMP%]   ion-item.selected[_ngcontent-%COMP%]   ion-icon[_ngcontent-%COMP%] {\n  color: var(--ion-color-primary);\n}\n\nion-menu.ios[_ngcontent-%COMP%]   ion-item[_ngcontent-%COMP%]   ion-icon[_ngcontent-%COMP%] {\n  font-size: 24px;\n  color: #73849a;\n}\n\nion-menu.ios[_ngcontent-%COMP%]   ion-list#labels-list[_ngcontent-%COMP%]   ion-list-header[_ngcontent-%COMP%] {\n  margin-bottom: 8px;\n}\n\nion-menu.ios[_ngcontent-%COMP%]   ion-list-header[_ngcontent-%COMP%], ion-menu.ios[_ngcontent-%COMP%]   ion-note[_ngcontent-%COMP%] {\n  padding-left: 16px;\n  padding-right: 16px;\n}\n\nion-menu.ios[_ngcontent-%COMP%]   ion-note[_ngcontent-%COMP%] {\n  margin-bottom: 8px;\n}\n\nion-note[_ngcontent-%COMP%] {\n  display: inline-block;\n  font-size: 16px;\n  color: var(--ion-color-medium-shade);\n}\n\nion-item.selected[_ngcontent-%COMP%] {\n  --color: var(--ion-color-primary);\n}\n\n.app-version[_ngcontent-%COMP%] {\n  position: fixed;\n  bottom: 10px;\n  left: 10px;\n  font-size: 10px;\n  color: var(--ion-color-medium);\n  opacity: 0.9;\n  z-index: 99999;\n  margin-bottom: 15px;\n  background-color: rgba(255, 255, 255, 0.8);\n  padding: 3px 6px;\n  border-radius: 4px;\n  pointer-events: none;\n  box-shadow: 0 1px 3px rgba(0, 0, 0, 0.1);\n}\n/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8uL3NyYy9jb3JlL2FwcC5jb21wb25lbnQuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUNFLDJFQUFBO0FBQ0Y7O0FBRUE7RUFDRSx3Q0FBQTtBQUNGOztBQUVBO0VBQ0UsMEJBQUE7RUFFQSxnREFBQTtBQUFGOztBQUdBO0VBQ0Usb0JBQUE7RUFDQSxrQkFBQTtFQUNBLG1CQUFBO0VBQ0Esc0JBQUE7QUFBRjs7QUFHQTtFQUNFLGVBQUE7QUFBRjs7QUFHQTtFQUNFLG1CQUFBO0FBQUY7O0FBR0E7O0VBRUUsa0JBQUE7QUFBRjs7QUFHQTtFQUNFLDJEQUFBO0FBQUY7O0FBR0E7RUFDRSxlQUFBO0VBQ0EsZ0JBQUE7RUFFQSxnQkFBQTtBQURGOztBQUlBO0VBQ0UsZUFBQTtFQUVBLG1CQUFBO0VBRUEsY0FBQTtFQUVBLGdCQUFBO0FBSkY7O0FBT0E7RUFDRSxxQkFBQTtFQUNBLG1CQUFBO0VBQ0Esa0JBQUE7QUFKRjs7QUFPQTtFQUNFLHNEQUFBO0FBSkY7O0FBT0E7RUFDRSwrQkFBQTtBQUpGOztBQU9BO0VBQ0UsY0FBQTtBQUpGOztBQU9BO0VBQ0UsZ0JBQUE7QUFKRjs7QUFPQTtFQUNFLHNCQUFBO0FBSkY7O0FBT0E7RUFDRSxtQkFBQTtBQUpGOztBQU9BO0VBQ0UsaUJBQUE7RUFDQSxtQkFBQTtBQUpGOztBQU9BO0VBQ0UscUJBQUE7RUFDQSxtQkFBQTtFQUNBLGtCQUFBO0FBSkY7O0FBT0E7RUFDRSwrQkFBQTtBQUpGOztBQU9BO0VBQ0UsZUFBQTtFQUNBLGNBQUE7QUFKRjs7QUFPQTtFQUNFLGtCQUFBO0FBSkY7O0FBT0E7O0VBRUUsa0JBQUE7RUFDQSxtQkFBQTtBQUpGOztBQU9BO0VBQ0Usa0JBQUE7QUFKRjs7QUFPQTtFQUNFLHFCQUFBO0VBQ0EsZUFBQTtFQUVBLG9DQUFBO0FBTEY7O0FBUUE7RUFDRSxpQ0FBQTtBQUxGOztBQVFBO0VBQ0UsZUFBQTtFQUNBLFlBQUE7RUFDQSxVQUFBO0VBQ0EsZUFBQTtFQUNBLDhCQUFBO0VBQ0EsWUFBQTtFQUNBLGNBQUE7RUFDQSxtQkFBQTtFQUNBLDBDQUFBO0VBQ0EsZ0JBQUE7RUFDQSxrQkFBQTtFQUNBLG9CQUFBO0VBQ0Esd0NBQUE7QUFMRiIsInNvdXJjZXNDb250ZW50IjpbImlvbi1tZW51IGlvbi1jb250ZW50IHtcbiAgLS1iYWNrZ3JvdW5kOiB2YXIoLS1pb24taXRlbS1iYWNrZ3JvdW5kLCB2YXIoLS1pb24tYmFja2dyb3VuZC1jb2xvciwgI2ZmZikpO1xufVxuXG5pb24tbWVudTo6cGFydChiYWNrZHJvcCkge1xuICBiYWNrZ3JvdW5kLWNvbG9yOiByZ2JhKDAsIDExOSwgMjU1LCAwLjUpO1xufVxuXG5pb24tbWVudTo6cGFydChjb250YWluZXIpIHtcbiAgYm9yZGVyLXJhZGl1czogMCAycHggMnB4IDA7XG5cbiAgYm94LXNoYWRvdzogNHB4IDBweCAxNnB4IHJnYmEoMCwgMjU1LCAxOTYsIDAuMTgpO1xufVxuXG5pb24tbWVudS5tZCBpb24tY29udGVudCB7XG4gIC0tcGFkZGluZy1zdGFydDogOHB4O1xuICAtLXBhZGRpbmctZW5kOiA4cHg7XG4gIC0tcGFkZGluZy10b3A6IDIwcHg7XG4gIC0tcGFkZGluZy1ib3R0b206IDIwcHg7XG59XG5cbmlvbi1tZW51Lm1kIGlvbi1saXN0IHtcbiAgcGFkZGluZzogMjBweCAwO1xufVxuXG5pb24tbWVudS5tZCBpb24tbm90ZSB7XG4gIG1hcmdpbi1ib3R0b206IDMwcHg7XG59XG5cbmlvbi1tZW51Lm1kIGlvbi1saXN0LWhlYWRlcixcbmlvbi1tZW51Lm1kIGlvbi1ub3RlIHtcbiAgcGFkZGluZy1sZWZ0OiAxMHB4O1xufVxuXG5pb24tbWVudS5tZCBpb24tbGlzdCNpbmJveC1saXN0IHtcbiAgYm9yZGVyLWJvdHRvbTogMXB4IHNvbGlkIHZhcigtLWlvbi1jb2xvci1zdGVwLTE1MCwgI2Q3ZDhkYSk7XG59XG5cbmlvbi1tZW51Lm1kIGlvbi1saXN0I2luYm94LWxpc3QgaW9uLWxpc3QtaGVhZGVyIHtcbiAgZm9udC1zaXplOiAyMnB4O1xuICBmb250LXdlaWdodDogNjAwO1xuXG4gIG1pbi1oZWlnaHQ6IDIwcHg7XG59XG5cbmlvbi1tZW51Lm1kIGlvbi1saXN0I2xhYmVscy1saXN0IGlvbi1saXN0LWhlYWRlciB7XG4gIGZvbnQtc2l6ZTogMTZweDtcblxuICBtYXJnaW4tYm90dG9tOiAxOHB4O1xuXG4gIGNvbG9yOiAjNzU3NTc1O1xuXG4gIG1pbi1oZWlnaHQ6IDI2cHg7XG59XG5cbmlvbi1tZW51Lm1kIGlvbi1pdGVtIHtcbiAgLS1wYWRkaW5nLXN0YXJ0OiAxMHB4O1xuICAtLXBhZGRpbmctZW5kOiAxMHB4O1xuICBib3JkZXItcmFkaXVzOiA0cHg7XG59XG5cbmlvbi1tZW51Lm1kIGlvbi1pdGVtLnNlbGVjdGVkIHtcbiAgLS1iYWNrZ3JvdW5kOiByZ2JhKHZhcigtLWlvbi1jb2xvci1wcmltYXJ5LXJnYiksIDAuMTQpO1xufVxuXG5pb24tbWVudS5tZCBpb24taXRlbS5zZWxlY3RlZCBpb24taWNvbiB7XG4gIGNvbG9yOiB2YXIoLS1pb24tY29sb3ItcHJpbWFyeSk7XG59XG5cbmlvbi1tZW51Lm1kIGlvbi1pdGVtIGlvbi1pY29uIHtcbiAgY29sb3I6ICM2MTZlN2U7XG59XG5cbmlvbi1tZW51Lm1kIGlvbi1pdGVtIGlvbi1sYWJlbCB7XG4gIGZvbnQtd2VpZ2h0OiA1MDA7XG59XG5cbmlvbi1tZW51LmlvcyBpb24tY29udGVudCB7XG4gIC0tcGFkZGluZy1ib3R0b206IDIwcHg7XG59XG5cbmlvbi1tZW51LmlvcyBpb24tbGlzdCB7XG4gIHBhZGRpbmc6IDIwcHggMCAwIDA7XG59XG5cbmlvbi1tZW51LmlvcyBpb24tbm90ZSB7XG4gIGxpbmUtaGVpZ2h0OiAyNHB4O1xuICBtYXJnaW4tYm90dG9tOiAyMHB4O1xufVxuXG5pb24tbWVudS5pb3MgaW9uLWl0ZW0ge1xuICAtLXBhZGRpbmctc3RhcnQ6IDE2cHg7XG4gIC0tcGFkZGluZy1lbmQ6IDE2cHg7XG4gIC0tbWluLWhlaWdodDogNTBweDtcbn1cblxuaW9uLW1lbnUuaW9zIGlvbi1pdGVtLnNlbGVjdGVkIGlvbi1pY29uIHtcbiAgY29sb3I6IHZhcigtLWlvbi1jb2xvci1wcmltYXJ5KTtcbn1cblxuaW9uLW1lbnUuaW9zIGlvbi1pdGVtIGlvbi1pY29uIHtcbiAgZm9udC1zaXplOiAyNHB4O1xuICBjb2xvcjogIzczODQ5YTtcbn1cblxuaW9uLW1lbnUuaW9zIGlvbi1saXN0I2xhYmVscy1saXN0IGlvbi1saXN0LWhlYWRlciB7XG4gIG1hcmdpbi1ib3R0b206IDhweDtcbn1cblxuaW9uLW1lbnUuaW9zIGlvbi1saXN0LWhlYWRlcixcbmlvbi1tZW51LmlvcyBpb24tbm90ZSB7XG4gIHBhZGRpbmctbGVmdDogMTZweDtcbiAgcGFkZGluZy1yaWdodDogMTZweDtcbn1cblxuaW9uLW1lbnUuaW9zIGlvbi1ub3RlIHtcbiAgbWFyZ2luLWJvdHRvbTogOHB4O1xufVxuXG5pb24tbm90ZSB7XG4gIGRpc3BsYXk6IGlubGluZS1ibG9jaztcbiAgZm9udC1zaXplOiAxNnB4O1xuXG4gIGNvbG9yOiB2YXIoLS1pb24tY29sb3ItbWVkaXVtLXNoYWRlKTtcbn1cblxuaW9uLWl0ZW0uc2VsZWN0ZWQge1xuICAtLWNvbG9yOiB2YXIoLS1pb24tY29sb3ItcHJpbWFyeSk7XG59XG5cbi5hcHAtdmVyc2lvbiB7XG4gIHBvc2l0aW9uOiBmaXhlZDtcbiAgYm90dG9tOiAxMHB4O1xuICBsZWZ0OiAxMHB4O1xuICBmb250LXNpemU6IDEwcHg7XG4gIGNvbG9yOiB2YXIoLS1pb24tY29sb3ItbWVkaXVtKTtcbiAgb3BhY2l0eTogMC45O1xuICB6LWluZGV4OiA5OTk5OTtcbiAgbWFyZ2luLWJvdHRvbTogMTVweDtcbiAgYmFja2dyb3VuZC1jb2xvcjogcmdiYSgyNTUsIDI1NSwgMjU1LCAwLjgpO1xuICBwYWRkaW5nOiAzcHggNnB4O1xuICBib3JkZXItcmFkaXVzOiA0cHg7XG4gIHBvaW50ZXItZXZlbnRzOiBub25lO1xuICBib3gtc2hhZG93OiAwIDFweCAzcHggcmdiYSgwLCAwLCAwLCAwLjEpO1xufVxuIl0sInNvdXJjZVJvb3QiOiIifQ== */"]
    });
  }
}

/***/ }),

/***/ 34165:
/*!********************************!*\
  !*** ./src/core/app.module.ts ***!
  \********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "AppModule": () => (/* binding */ AppModule)
/* harmony export */ });
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/platform-browser */ 34497);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/router */ 60124);
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @ionic/angular */ 93819);
/* harmony import */ var _app_component__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./app.component */ 6721);
/* harmony import */ var _app_routing_module__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./app-routing.module */ 28299);
/* harmony import */ var _shared__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./shared */ 8987);
/* harmony import */ var _page_not_found_page_not_found_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./page-not-found/page-not-found.component */ 62469);
/* harmony import */ var _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @angular/platform-browser/animations */ 37146);
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @angular/common/http */ 58987);
/* harmony import */ var fidj_angular__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! fidj-angular */ 39807);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/core */ 22560);












class AppModule {
  static {
    this.ɵfac = function AppModule_Factory(t) {
      return new (t || AppModule)();
    };
  }
  static {
    this.ɵmod = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵdefineNgModule"]({
      type: AppModule,
      bootstrap: [_app_component__WEBPACK_IMPORTED_MODULE_0__.AppComponent]
    });
  }
  static {
    this.ɵinj = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵdefineInjector"]({
      providers: [{
        provide: _angular_router__WEBPACK_IMPORTED_MODULE_5__.RouteReuseStrategy,
        useClass: _ionic_angular__WEBPACK_IMPORTED_MODULE_6__.IonicRouteStrategy
      }],
      imports: [_angular_platform_browser__WEBPACK_IMPORTED_MODULE_7__.BrowserModule, _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_8__.BrowserAnimationsModule, _angular_common_http__WEBPACK_IMPORTED_MODULE_9__.HttpClientModule, _ionic_angular__WEBPACK_IMPORTED_MODULE_6__.IonicModule.forRoot(), _app_routing_module__WEBPACK_IMPORTED_MODULE_1__.AppRoutingModule, fidj_angular__WEBPACK_IMPORTED_MODULE_10__.FidjModule, _shared__WEBPACK_IMPORTED_MODULE_2__.SharedModule]
    });
  }
}
(function () {
  (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵsetNgModuleScope"](AppModule, {
    declarations: [_app_component__WEBPACK_IMPORTED_MODULE_0__.AppComponent, _page_not_found_page_not_found_component__WEBPACK_IMPORTED_MODULE_3__.PageNotFoundComponent],
    imports: [_angular_platform_browser__WEBPACK_IMPORTED_MODULE_7__.BrowserModule, _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_8__.BrowserAnimationsModule, _angular_common_http__WEBPACK_IMPORTED_MODULE_9__.HttpClientModule, _ionic_angular__WEBPACK_IMPORTED_MODULE_6__.IonicModule, _app_routing_module__WEBPACK_IMPORTED_MODULE_1__.AppRoutingModule, fidj_angular__WEBPACK_IMPORTED_MODULE_10__.FidjModule, _shared__WEBPACK_IMPORTED_MODULE_2__.SharedModule]
  });
})();

/***/ }),

/***/ 31882:
/*!*************************************!*\
  !*** ./src/core/auth/auth.guard.ts ***!
  \*************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "AuthGuard": () => (/* binding */ AuthGuard)
/* harmony export */ });
/* harmony import */ var _opt_atlassian_pipelines_agent_build_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/esm/asyncToGenerator.js */ 71670);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ 22560);
/* harmony import */ var fidj_angular__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! fidj-angular */ 39807);
/* harmony import */ var _shared__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../shared */ 8987);




class AuthGuard {
  constructor(fidjService, profile) {
    this.fidjService = fidjService;
    this.profile = profile;
  }
  canActivate(next, state) {
    var _this = this;
    return (0,_opt_atlassian_pipelines_agent_build_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_0__["default"])(function* () {
      if (_this.profile.isDemoMode) {
        return true;
      }
      yield _this.profile.refreshProfile();
      const loggedIn = _this.fidjService.isLoggedIn();
      if (!loggedIn) {
        return false;
      }
      return (yield _this.fidjService.getRoles()).indexOf('admin') >= 0;
    })();
  }
  static {
    this.ɵfac = function AuthGuard_Factory(t) {
      return new (t || AuthGuard)(_angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵinject"](fidj_angular__WEBPACK_IMPORTED_MODULE_3__.FidjService), _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵinject"](_shared__WEBPACK_IMPORTED_MODULE_1__.ProfileService));
    };
  }
  static {
    this.ɵprov = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdefineInjectable"]({
      token: AuthGuard,
      factory: AuthGuard.ɵfac,
      providedIn: 'root'
    });
  }
}

/***/ }),

/***/ 62469:
/*!*************************************************************!*\
  !*** ./src/core/page-not-found/page-not-found.component.ts ***!
  \*************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "PageNotFoundComponent": () => (/* binding */ PageNotFoundComponent)
/* harmony export */ });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ 22560);
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @ionic/angular */ 93819);


class PageNotFoundComponent {
  constructor() {}
  ngOnInit() {}
  static {
    this.ɵfac = function PageNotFoundComponent_Factory(t) {
      return new (t || PageNotFoundComponent)();
    };
  }
  static {
    this.ɵcmp = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({
      type: PageNotFoundComponent,
      selectors: [["app-page-not-found"]],
      decls: 9,
      vars: 0,
      consts: [[1, "welcome-card"], ["src", "/assets/login.png"], ["href", "/"]],
      template: function PageNotFoundComponent_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "ion-content")(1, "ion-card", 0);
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](2, "ion-img", 1);
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "ion-card-header")(4, "ion-card-title");
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](5, "Wrong url :(");
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](6, "ion-card-subtitle")(7, "a", 2);
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](8, "...back");
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]()()()()();
        }
      },
      dependencies: [_ionic_angular__WEBPACK_IMPORTED_MODULE_1__.IonCard, _ionic_angular__WEBPACK_IMPORTED_MODULE_1__.IonCardHeader, _ionic_angular__WEBPACK_IMPORTED_MODULE_1__.IonCardSubtitle, _ionic_angular__WEBPACK_IMPORTED_MODULE_1__.IonCardTitle, _ionic_angular__WEBPACK_IMPORTED_MODULE_1__.IonContent, _ionic_angular__WEBPACK_IMPORTED_MODULE_1__.IonImg],
      styles: ["ion-img[_ngcontent-%COMP%] {\n  max-width: 100px;\n}\n/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8uL3NyYy9jb3JlL3BhZ2Utbm90LWZvdW5kL3BhZ2Utbm90LWZvdW5kLmNvbXBvbmVudC5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQ0UsZ0JBQUE7QUFDRiIsInNvdXJjZXNDb250ZW50IjpbImlvbi1pbWcge1xuICBtYXgtd2lkdGg6IDEwMHB4O1xufVxuIl0sInNvdXJjZVJvb3QiOiIifQ== */"]
    });
  }
}

/***/ }),

/***/ 13140:
/*!******************************************!*\
  !*** ./src/core/shared/cache.service.ts ***!
  \******************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Cache": () => (/* binding */ Cache)
/* harmony export */ });
/* harmony import */ var _opt_atlassian_pipelines_agent_build_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/esm/asyncToGenerator.js */ 71670);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ 22560);


class Cache {
  constructor() {
    this._cache = {};
  }
  getValue(key, asyncGetter) {
    var _this = this;
    return (0,_opt_atlassian_pipelines_agent_build_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_0__["default"])(function* () {
      if (!Object.prototype.hasOwnProperty.call(_this._cache, key)) {
        console.log('cache not done: ', key);
        _this.putValue(key, yield asyncGetter());
      } else {
        console.log('cache done: ', key);
      }
      return _this._cache[key];
    })();
  }
  putValue(key, value) {
    this._cache[key] = value;
    const length = Object.getOwnPropertyNames(this._cache).length;
    if (length > 30) {
      console.warn('Pb on cache size exceed ? do a restart ?', length);
    }
  }
  static {
    this.ɵfac = function Cache_Factory(t) {
      return new (t || Cache)();
    };
  }
  static {
    this.ɵprov = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineInjectable"]({
      token: Cache,
      factory: Cache.ɵfac,
      providedIn: 'root'
    });
  }
}

/***/ }),

/***/ 98768:
/*!******************************************************************************!*\
  !*** ./src/core/shared/cumulative-selector/cumulative-selector.component.ts ***!
  \******************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "CumulativeSelectorComponent": () => (/* binding */ CumulativeSelectorComponent)
/* harmony export */ });
/* harmony import */ var _opt_atlassian_pipelines_agent_build_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/esm/asyncToGenerator.js */ 71670);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ 22560);
/* harmony import */ var _profile_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../profile.service */ 15770);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/common */ 94666);
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @ionic/angular */ 93819);






function CumulativeSelectorComponent_div_8_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](0, "div", 13);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](1, "ion-spinner", 14);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](2, "p");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](3, "Loading available periods...");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]()();
  }
}
function CumulativeSelectorComponent_div_9_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](0, "div", 15);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](1, "ion-icon", 16);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](2, "span");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]()();
  }
  if (rf & 2) {
    const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtextInterpolate"](ctx_r1.errorMessage);
  }
}
function CumulativeSelectorComponent_div_10_ng_container_4_div_10_ion_spinner_1_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](0, "ion-spinner", 14);
  }
}
function CumulativeSelectorComponent_div_10_ng_container_4_div_10_ion_list_2_ion_item_1_Template(rf, ctx) {
  if (rf & 1) {
    const _r14 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](0, "ion-item", 29);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵlistener"]("click", function CumulativeSelectorComponent_div_10_ng_container_4_div_10_ion_list_2_ion_item_1_Template_ion_item_click_0_listener() {
      const restoredCtx = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵrestoreView"](_r14);
      const item_r12 = restoredCtx.$implicit;
      const ctx_r13 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵnextContext"](5);
      return _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵresetView"](ctx_r13.selectIndividualCumulative(item_r12));
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](1, "ion-icon", 30);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](2, "ion-label")(3, "h3");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵpipe"](5, "date");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵpipe"](6, "date");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](7, "ion-icon", 31);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
  }
  if (rf & 2) {
    const item_r12 = ctx.$implicit;
    const ctx_r10 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵnextContext"](5);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("disabled", ctx_r10.creating);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtextInterpolate2"]("", _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵpipeBind2"](5, 3, ctx_r10.getItemPeriodBegin(item_r12), "HH:mm"), " - ", _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵpipeBind2"](6, 6, item_r12.date, "HH:mm"), "");
  }
}
function CumulativeSelectorComponent_div_10_ng_container_4_div_10_ion_list_2_ion_item_2_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](0, "ion-item", 32)(1, "ion-label")(2, "p");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](3, "No individual cumulatives found");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]()()();
  }
}
function CumulativeSelectorComponent_div_10_ng_container_4_div_10_ion_list_2_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](0, "ion-list", 26);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtemplate"](1, CumulativeSelectorComponent_div_10_ng_container_4_div_10_ion_list_2_ion_item_1_Template, 8, 9, "ion-item", 27);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtemplate"](2, CumulativeSelectorComponent_div_10_ng_container_4_div_10_ion_list_2_ion_item_2_Template, 4, 0, "ion-item", 28);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
  }
  if (rf & 2) {
    const period_r6 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵnextContext"](2).$implicit;
    const ctx_r9 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngForOf", ctx_r9.getExpandedItems(period_r6));
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngIf", ctx_r9.getExpandedItems(period_r6).length === 0);
  }
}
function CumulativeSelectorComponent_div_10_ng_container_4_div_10_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](0, "div", 23);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtemplate"](1, CumulativeSelectorComponent_div_10_ng_container_4_div_10_ion_spinner_1_Template, 1, 0, "ion-spinner", 24);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtemplate"](2, CumulativeSelectorComponent_div_10_ng_container_4_div_10_ion_list_2_Template, 3, 2, "ion-list", 25);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
  }
  if (rf & 2) {
    const period_r6 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵnextContext"]().$implicit;
    const ctx_r7 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngIf", ctx_r7.isLoadingExpanded(period_r6));
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngIf", !ctx_r7.isLoadingExpanded(period_r6));
  }
}
function CumulativeSelectorComponent_div_10_ng_container_4_Template(rf, ctx) {
  if (rf & 1) {
    const _r18 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementContainerStart"](0);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](1, "ion-item", 19);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵlistener"]("click", function CumulativeSelectorComponent_div_10_ng_container_4_Template_ion_item_click_1_listener() {
      const restoredCtx = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵrestoreView"](_r18);
      const period_r6 = restoredCtx.$implicit;
      const ctx_r17 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵnextContext"](2);
      return _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵresetView"](ctx_r17.toggleExpand(period_r6));
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](2, "ion-icon", 20);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](3, "ion-label")(4, "h2");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](5);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](6, "p");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](7);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](8, "p", 21);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](9);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]()()();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtemplate"](10, CumulativeSelectorComponent_div_10_ng_container_4_div_10_Template, 3, 2, "div", 22);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementContainerEnd"]();
  }
  if (rf & 2) {
    const period_r6 = ctx.$implicit;
    const ctx_r5 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("disabled", ctx_r5.creating);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("name", ctx_r5.isExpanded(period_r6) ? "chevron-down" : "chevron-forward");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtextInterpolate"](ctx_r5.formatWindow(period_r6.windowInMinutes));
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtextInterpolate"](ctx_r5.formatPeriod(period_r6));
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtextInterpolate1"]("", period_r6.count, " cumulative(s) - click to expand");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngIf", ctx_r5.isExpanded(period_r6));
  }
}
function CumulativeSelectorComponent_div_10_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](0, "div", 17)(1, "h3");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](2, "Available Cumulative Periods");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](3, "ion-list");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtemplate"](4, CumulativeSelectorComponent_div_10_ng_container_4_Template, 11, 6, "ng-container", 18);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]()();
  }
  if (rf & 2) {
    const ctx_r2 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngForOf", ctx_r2.availablePeriods);
  }
}
function CumulativeSelectorComponent_div_11_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](0, "div", 33);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](1, "ion-icon", 34);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](2, "p");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](3, "No cumulative periods available yet.");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]()();
  }
}
function CumulativeSelectorComponent_div_12_p_12_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](0, "p", 43);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](1, "ion-icon", 44);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
  }
  if (rf & 2) {
    const ctx_r19 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵclassProp"]("coverage-error", ctx_r19.coveragePercent === 0)("coverage-ok", ctx_r19.coveragePercent >= 100)("coverage-warn", ctx_r19.coveragePercent > 0 && ctx_r19.coveragePercent < 100);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("name", ctx_r19.coveragePercent >= 100 ? "checkmark-circle" : "alert-circle");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtextInterpolate1"](" Base data coverage: ", ctx_r19.coveragePercent, "% ");
  }
}
function CumulativeSelectorComponent_div_12_p_13_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](0, "p", 45);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](1, "ion-icon", 46);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](2, " No base cumulatives available ");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
  }
}
function CumulativeSelectorComponent_div_12_div_14_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](0, "div", 47);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](1, "ion-spinner", 14);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](2, "span");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]()();
  }
  if (rf & 2) {
    const ctx_r21 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtextInterpolate"](ctx_r21.creationProgress);
  }
}
function CumulativeSelectorComponent_div_12_p_18_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](0, "p", 48);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](1, " Create is disabled because no base 5-min cumulatives exist for the selected period. ");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
  }
}
function CumulativeSelectorComponent_div_12_Template(rf, ctx) {
  if (rf & 1) {
    const _r24 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](0, "div", 35)(1, "h3");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](2, "Create New Cumulative");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](3, "div", 36)(4, "p")(5, "strong");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](6, "Period:");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](7);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](8, "p")(9, "strong");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](10, "Window:");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](11);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtemplate"](12, CumulativeSelectorComponent_div_12_p_12_Template, 3, 8, "p", 37);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtemplate"](13, CumulativeSelectorComponent_div_12_p_13_Template, 3, 0, "p", 38);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtemplate"](14, CumulativeSelectorComponent_div_12_div_14_Template, 4, 1, "div", 39);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](15, "ion-button", 40);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵlistener"]("click", function CumulativeSelectorComponent_div_12_Template_ion_button_click_15_listener() {
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵrestoreView"](_r24);
      const ctx_r23 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵnextContext"]();
      return _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵresetView"](ctx_r23.createNewPeriod());
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](16, "ion-icon", 41);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](17);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtemplate"](18, CumulativeSelectorComponent_div_12_p_18_Template, 2, 0, "p", 42);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
  }
  if (rf & 2) {
    const ctx_r4 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](7);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtextInterpolate2"](" ", ctx_r4.currentPeriodBegin == null ? null : ctx_r4.currentPeriodBegin.toLocaleString(), " \u2192 ", ctx_r4.currentPeriodEnd == null ? null : ctx_r4.currentPeriodEnd.toLocaleString(), " ");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtextInterpolate1"](" ", ctx_r4.formatWindow(ctx_r4.currentWindowMinutes), " ");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngIf", ctx_r4.baseCumulatives);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngIf", !ctx_r4.baseCumulatives);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngIf", ctx_r4.creating);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("disabled", !ctx_r4.canCreateNew || ctx_r4.creating);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtextInterpolate1"](" Create ", ctx_r4.formatWindow(ctx_r4.currentWindowMinutes), " Cumulative ");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngIf", !ctx_r4.canCreateNew && !ctx_r4.creating);
  }
}
class CumulativeSelectorComponent {
  constructor(profileService, cdr) {
    this.profileService = profileService;
    this.cdr = cdr;
    this.timeStepInMinutes = 5;
    this.isAdmin = false;
    this.periodSelected = new _angular_core__WEBPACK_IMPORTED_MODULE_2__.EventEmitter();
    this.cancelled = new _angular_core__WEBPACK_IMPORTED_MODULE_2__.EventEmitter();
    this.availablePeriods = [];
    this.baseCumulatives = null;
    this.loading = true;
    this.creating = false;
    this.creationProgress = '';
    this.errorMessage = '';
    this.coveragePercent = 0;
    this.canCreateNew = false;
    this.currentWindowMinutes = 0;
    this.expandedPeriods = new Map();
    this.loadingExpanded = new Set();
    this.POLL_TIMEOUT_MS = 900000; // 900 seconds
    this.POLL_INTERVAL_MS = 3000;
  }
  ngOnInit() {
    var _this = this;
    return (0,_opt_atlassian_pipelines_agent_build_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_0__["default"])(function* () {
      _this.currentWindowMinutes = Math.round((_this.currentPeriodEnd.getTime() - _this.currentPeriodBegin.getTime()) / 60000);
      yield _this.loadAvailablePeriods();
    })();
  }
  loadAvailablePeriods() {
    var _this2 = this;
    return (0,_opt_atlassian_pipelines_agent_build_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_0__["default"])(function* () {
      _this2.loading = true;
      _this2.errorMessage = '';
      _this2.cdr.markForCheck();
      try {
        // Fetch all cumulative periods (admin sees all, non-admin sees only customer-launched)
        const response = yield _this2.profileService.getCumulativePeriods(_this2.rainId, {
          provider: _this2.provider,
          forced: _this2.isAdmin,
          periodBegin: _this2.currentPeriodBegin.toISOString(),
          periodEnd: _this2.currentPeriodEnd.toISOString()
        });
        // Filter for existing custom cumulatives (window > 0)
        _this2.availablePeriods = response.periods.filter(p => p.windowInMinutes > 0);
        // Get base cumulatives (window = 0) to check coverage
        _this2.baseCumulatives = response.periods.find(p => p.windowInMinutes === 0);
        _this2.calculateCoverage();
      } catch (e) {
        _this2.errorMessage = 'Failed to load cumulative periods';
        console.error('Error loading cumulative periods:', e);
      }
      _this2.loading = false;
      _this2.cdr.markForCheck();
    })();
  }
  calculateCoverage() {
    if (!this.baseCumulatives || !this.baseCumulatives.count) {
      this.coveragePercent = 0;
      this.canCreateNew = false;
      return;
    }
    // Calculate expected number of base cumulatives (always 5-min granularity)
    const baseTimeStep = 5;
    const expectedCount = Math.ceil(this.currentWindowMinutes / baseTimeStep);
    if (this.baseCumulatives.count >= expectedCount) {
      this.coveragePercent = 100;
    } else {
      this.coveragePercent = Math.round(this.baseCumulatives.count / expectedCount * 100);
    }
    // Allow creation as long as some base data exists
    this.canCreateNew = this.coveragePercent > 0;
  }
  selectPeriod(period) {
    this.periodSelected.emit({
      periodBegin: new Date(period.periodBegin),
      periodEnd: new Date(period.periodEnd),
      windowInMinutes: period.windowInMinutes
    });
  }
  toggleExpand(period) {
    var _this3 = this;
    return (0,_opt_atlassian_pipelines_agent_build_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_0__["default"])(function* () {
      const key = `${period.windowInMinutes}`;
      if (_this3.expandedPeriods.has(key)) {
        _this3.expandedPeriods.delete(key);
        _this3.cdr.markForCheck();
        return;
      }
      _this3.loadingExpanded.add(key);
      _this3.cdr.markForCheck();
      try {
        const response = yield _this3.profileService.getCumulativePeriods(_this3.rainId, {
          provider: _this3.provider,
          windowInMinutes: period.windowInMinutes,
          forced: _this3.isAdmin,
          detailed: true
        });
        _this3.expandedPeriods.set(key, response.cumulatives || []);
      } catch (e) {
        console.error('Error loading individual cumulatives:', e);
        _this3.expandedPeriods.set(key, []);
      }
      _this3.loadingExpanded.delete(key);
      _this3.cdr.markForCheck();
    })();
  }
  selectIndividualCumulative(item) {
    const endDate = new Date(item.date);
    const beginDate = new Date(endDate.getTime() - item.windowInMinutes * 60000);
    this.periodSelected.emit({
      periodBegin: beginDate,
      periodEnd: endDate,
      windowInMinutes: item.windowInMinutes,
      cumulativeId: item.id,
      cumulativeDate: endDate
    });
  }
  isExpanded(period) {
    return this.expandedPeriods.has(`${period.windowInMinutes}`);
  }
  isLoadingExpanded(period) {
    return this.loadingExpanded.has(`${period.windowInMinutes}`);
  }
  getExpandedItems(period) {
    return this.expandedPeriods.get(`${period.windowInMinutes}`) || [];
  }
  getItemPeriodBegin(item) {
    const endDate = new Date(item.date);
    return new Date(endDate.getTime() - item.windowInMinutes * 60000);
  }
  createNewPeriod() {
    var _this4 = this;
    return (0,_opt_atlassian_pipelines_agent_build_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_0__["default"])(function* () {
      if (!_this4.canCreateNew || _this4.creating) {
        return;
      }
      _this4.creating = true;
      _this4.creationProgress = 'Starting cumulative computation...';
      _this4.errorMessage = '';
      _this4.cdr.markForCheck();
      try {
        // Trigger cumulative creation
        const result = yield _this4.profileService.createCumulativePeriod(_this4.rainId, {
          periodBegin: _this4.currentPeriodBegin,
          periodEnd: _this4.currentPeriodEnd,
          provider: _this4.provider,
          timeStepInMinutes: _this4.timeStepInMinutes
        });
        if (!result) {
          throw new Error('Failed to trigger cumulative computation');
        }
        _this4.creationProgress = `Jobs queued. Polling for completion...`;
        _this4.cdr.markForCheck();
        // Poll for completion
        const success = yield _this4.pollForCompletion();
        if (success) {
          _this4.periodSelected.emit({
            periodBegin: _this4.currentPeriodBegin,
            periodEnd: _this4.currentPeriodEnd,
            windowInMinutes: _this4.currentWindowMinutes
          });
        } else {
          _this4.errorMessage = 'Timeout waiting for cumulative computation';
        }
      } catch (e) {
        _this4.errorMessage = `Error: ${e.message || 'Unknown error'}`;
        console.error('Error creating cumulative:', e);
      }
      _this4.creating = false;
      _this4.cdr.markForCheck();
    })();
  }
  pollForCompletion() {
    var _this5 = this;
    return (0,_opt_atlassian_pipelines_agent_build_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_0__["default"])(function* () {
      const startTime = Date.now();
      while (Date.now() - startTime < _this5.POLL_TIMEOUT_MS) {
        try {
          const progress = yield _this5.profileService.getRainProgress(_this5.rainId);
          if (progress === 0) {
            // Trigger background fetch from raain-ground via timeframeCumulative
            yield _this5.profileService.getRainTimeframe(_this5.rainId, _this5.currentPeriodBegin, _this5.currentPeriodEnd, _this5.isAdmin, _this5.provider, _this5.timeStepInMinutes, _this5.currentWindowMinutes);
            // Check if cumulative now exists (admin sees all cumulatives)
            const response = yield _this5.profileService.getCumulativePeriods(_this5.rainId, {
              provider: _this5.provider,
              windowInMinutes: _this5.currentWindowMinutes,
              forced: _this5.isAdmin
            });
            const found = response.periods.find(p => p.windowInMinutes === _this5.currentWindowMinutes);
            if (found) {
              return true;
            }
          }
          const elapsed = Math.round((Date.now() - startTime) / 1000);
          _this5.creationProgress = `Computing... (${elapsed}s, queue: ${progress})`;
          _this5.cdr.markForCheck();
          yield _this5.sleep(_this5.POLL_INTERVAL_MS);
        } catch (e) {
          console.warn('Poll error:', e);
          yield _this5.sleep(_this5.POLL_INTERVAL_MS);
        }
      }
      return false;
    })();
  }
  sleep(ms) {
    return new Promise(resolve => setTimeout(resolve, ms));
  }
  cancel() {
    this.cancelled.emit();
  }
  formatPeriod(period) {
    const begin = new Date(period.periodBegin);
    const end = new Date(period.periodEnd);
    return `${begin.toLocaleString()} → ${end.toLocaleString()}`;
  }
  formatWindow(minutes) {
    if (minutes < 60) {
      return `${minutes} min`;
    }
    const hours = minutes / 60;
    return hours === 1 ? '1 hour' : `${hours} hours`;
  }
  static {
    this.ɵfac = function CumulativeSelectorComponent_Factory(t) {
      return new (t || CumulativeSelectorComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdirectiveInject"](_profile_service__WEBPACK_IMPORTED_MODULE_1__.ProfileService), _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdirectiveInject"](_angular_core__WEBPACK_IMPORTED_MODULE_2__.ChangeDetectorRef));
    };
  }
  static {
    this.ɵcmp = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdefineComponent"]({
      type: CumulativeSelectorComponent,
      selectors: [["cumulative-selector"]],
      inputs: {
        rainId: "rainId",
        currentPeriodBegin: "currentPeriodBegin",
        currentPeriodEnd: "currentPeriodEnd",
        provider: "provider",
        timeStepInMinutes: "timeStepInMinutes",
        isAdmin: "isAdmin"
      },
      outputs: {
        periodSelected: "periodSelected",
        cancelled: "cancelled"
      },
      decls: 16,
      vars: 6,
      consts: [[1, "cumulative-selector-overlay"], [1, "cumulative-selector-modal"], [1, "modal-header"], ["fill", "clear", 3, "click"], ["name", "close"], [1, "modal-content"], ["class", "loading-state", 4, "ngIf"], ["class", "error-message", 4, "ngIf"], ["class", "periods-section", 4, "ngIf"], ["class", "no-periods", 4, "ngIf"], ["class", "create-section", 4, "ngIf"], [1, "modal-footer"], ["fill", "outline", 3, "disabled", "click"], [1, "loading-state"], ["name", "crescent"], [1, "error-message"], ["name", "warning-outline"], [1, "periods-section"], [4, "ngFor", "ngForOf"], ["button", "", 3, "disabled", "click"], ["slot", "start", 3, "name"], [1, "count-info"], ["class", "expanded-items", 4, "ngIf"], [1, "expanded-items"], ["name", "crescent", 4, "ngIf"], ["class", "nested-list", 4, "ngIf"], [1, "nested-list"], ["button", "", "class", "nested-item", 3, "disabled", "click", 4, "ngFor", "ngForOf"], ["class", "nested-item", 4, "ngIf"], ["button", "", 1, "nested-item", 3, "disabled", "click"], ["name", "time-outline", "slot", "start"], ["name", "chevron-forward", "slot", "end"], [1, "nested-item"], [1, "no-periods"], ["name", "information-circle-outline"], [1, "create-section"], [1, "create-info"], ["class", "coverage-info", 3, "coverage-error", "coverage-ok", "coverage-warn", 4, "ngIf"], ["class", "coverage-error", 4, "ngIf"], ["class", "creation-progress", 4, "ngIf"], ["expand", "block", "id", "createNewCumulative", 3, "disabled", "click"], ["name", "add-circle-outline", "slot", "start"], ["class", "create-hint", 4, "ngIf"], [1, "coverage-info"], [3, "name"], [1, "coverage-error"], ["name", "alert-circle"], [1, "creation-progress"], [1, "create-hint"]],
      template: function CumulativeSelectorComponent_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](0, "div", 0)(1, "div", 1)(2, "div", 2)(3, "h2");
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](4, "Select Cumulative Period");
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](5, "ion-button", 3);
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵlistener"]("click", function CumulativeSelectorComponent_Template_ion_button_click_5_listener() {
            return ctx.cancel();
          });
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](6, "ion-icon", 4);
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]()();
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](7, "div", 5);
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtemplate"](8, CumulativeSelectorComponent_div_8_Template, 4, 0, "div", 6);
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtemplate"](9, CumulativeSelectorComponent_div_9_Template, 4, 1, "div", 7);
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtemplate"](10, CumulativeSelectorComponent_div_10_Template, 5, 1, "div", 8);
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtemplate"](11, CumulativeSelectorComponent_div_11_Template, 4, 0, "div", 9);
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtemplate"](12, CumulativeSelectorComponent_div_12_Template, 19, 9, "div", 10);
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](13, "div", 11)(14, "ion-button", 12);
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵlistener"]("click", function CumulativeSelectorComponent_Template_ion_button_click_14_listener() {
            return ctx.cancel();
          });
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](15, " Cancel ");
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]()()()();
        }
        if (rf & 2) {
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](8);
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngIf", ctx.loading);
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](1);
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngIf", ctx.errorMessage);
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](1);
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngIf", !ctx.loading && ctx.availablePeriods.length > 0);
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](1);
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngIf", !ctx.loading && ctx.availablePeriods.length === 0);
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](1);
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngIf", !ctx.loading && ctx.isAdmin);
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](2);
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("disabled", ctx.creating);
        }
      },
      dependencies: [_angular_common__WEBPACK_IMPORTED_MODULE_3__.NgForOf, _angular_common__WEBPACK_IMPORTED_MODULE_3__.NgIf, _ionic_angular__WEBPACK_IMPORTED_MODULE_4__.IonButton, _ionic_angular__WEBPACK_IMPORTED_MODULE_4__.IonIcon, _ionic_angular__WEBPACK_IMPORTED_MODULE_4__.IonItem, _ionic_angular__WEBPACK_IMPORTED_MODULE_4__.IonLabel, _ionic_angular__WEBPACK_IMPORTED_MODULE_4__.IonList, _ionic_angular__WEBPACK_IMPORTED_MODULE_4__.IonSpinner, _angular_common__WEBPACK_IMPORTED_MODULE_3__.DatePipe],
      styles: [".cumulative-selector-overlay[_ngcontent-%COMP%] {\n  position: fixed;\n  top: 0;\n  left: 0;\n  width: 100%;\n  height: 100%;\n  background: rgba(0, 0, 0, 0.5);\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  z-index: 1000;\n}\n\n.cumulative-selector-modal[_ngcontent-%COMP%] {\n  background: var(--ion-background-color, #fff);\n  border-radius: 12px;\n  max-width: 500px;\n  width: 90%;\n  max-height: 80vh;\n  display: flex;\n  flex-direction: column;\n  box-shadow: 0 4px 20px rgba(0, 0, 0, 0.3);\n}\n\n.modal-header[_ngcontent-%COMP%] {\n  display: flex;\n  justify-content: space-between;\n  align-items: center;\n  padding: 16px 20px;\n  border-bottom: 1px solid var(--ion-border-color, #ddd);\n}\n.modal-header[_ngcontent-%COMP%]   h2[_ngcontent-%COMP%] {\n  margin: 0;\n  font-size: 1.25rem;\n  font-weight: 600;\n}\n.modal-header[_ngcontent-%COMP%]   ion-button[_ngcontent-%COMP%] {\n  --padding-start: 8px;\n  --padding-end: 8px;\n}\n\n.modal-content[_ngcontent-%COMP%] {\n  flex: 1;\n  overflow-y: auto;\n  padding: 16px 20px;\n}\n\n.loading-state[_ngcontent-%COMP%] {\n  display: flex;\n  flex-direction: column;\n  align-items: center;\n  padding: 40px 0;\n}\n.loading-state[_ngcontent-%COMP%]   ion-spinner[_ngcontent-%COMP%] {\n  margin-bottom: 16px;\n}\n.loading-state[_ngcontent-%COMP%]   p[_ngcontent-%COMP%] {\n  color: var(--ion-color-medium);\n}\n\n.error-message[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: center;\n  gap: 8px;\n  padding: 12px;\n  background: var(--ion-color-danger-tint);\n  color: var(--ion-color-danger);\n  border-radius: 8px;\n  margin-bottom: 16px;\n}\n.error-message[_ngcontent-%COMP%]   ion-icon[_ngcontent-%COMP%] {\n  font-size: 1.25rem;\n}\n\n.periods-section[_ngcontent-%COMP%] {\n  margin-bottom: 24px;\n}\n.periods-section[_ngcontent-%COMP%]   h3[_ngcontent-%COMP%] {\n  font-size: 1rem;\n  font-weight: 600;\n  margin-bottom: 12px;\n  color: var(--ion-color-dark);\n}\n.periods-section[_ngcontent-%COMP%]   ion-list[_ngcontent-%COMP%] {\n  border-radius: 8px;\n  overflow: hidden;\n}\n.periods-section[_ngcontent-%COMP%]   ion-item[_ngcontent-%COMP%] {\n  --padding-start: 12px;\n  --padding-end: 12px;\n}\n.periods-section[_ngcontent-%COMP%]   ion-item[_ngcontent-%COMP%]   ion-label[_ngcontent-%COMP%]   h2[_ngcontent-%COMP%] {\n  font-weight: 500;\n}\n.periods-section[_ngcontent-%COMP%]   ion-item[_ngcontent-%COMP%]   ion-label[_ngcontent-%COMP%]   p[_ngcontent-%COMP%] {\n  font-size: 0.85rem;\n  color: var(--ion-color-medium);\n}\n.periods-section[_ngcontent-%COMP%]   ion-item[_ngcontent-%COMP%]   ion-label[_ngcontent-%COMP%]   .count-info[_ngcontent-%COMP%] {\n  font-size: 0.75rem;\n  color: var(--ion-color-primary);\n}\n.periods-section[_ngcontent-%COMP%]   .expanded-items[_ngcontent-%COMP%] {\n  background: var(--ion-color-light);\n  padding: 8px 0 8px 24px;\n  border-left: 3px solid var(--ion-color-primary);\n  margin-left: 16px;\n}\n.periods-section[_ngcontent-%COMP%]   .expanded-items[_ngcontent-%COMP%]   ion-spinner[_ngcontent-%COMP%] {\n  display: block;\n  margin: 16px auto;\n}\n.periods-section[_ngcontent-%COMP%]   .expanded-items[_ngcontent-%COMP%]   .nested-list[_ngcontent-%COMP%] {\n  background: transparent;\n  padding: 0;\n}\n.periods-section[_ngcontent-%COMP%]   .expanded-items[_ngcontent-%COMP%]   .nested-list[_ngcontent-%COMP%]   .nested-item[_ngcontent-%COMP%] {\n  --background: transparent;\n  --padding-start: 8px;\n  --padding-top: 4px;\n  --padding-bottom: 4px;\n  --min-height: 32px;\n}\n.periods-section[_ngcontent-%COMP%]   .expanded-items[_ngcontent-%COMP%]   .nested-list[_ngcontent-%COMP%]   .nested-item[_ngcontent-%COMP%]   ion-label[_ngcontent-%COMP%] {\n  margin: 0;\n}\n.periods-section[_ngcontent-%COMP%]   .expanded-items[_ngcontent-%COMP%]   .nested-list[_ngcontent-%COMP%]   .nested-item[_ngcontent-%COMP%]   ion-label[_ngcontent-%COMP%]   h3[_ngcontent-%COMP%] {\n  font-size: 0.85rem;\n  font-weight: 500;\n  margin: 0;\n}\n.periods-section[_ngcontent-%COMP%]   .expanded-items[_ngcontent-%COMP%]   .nested-list[_ngcontent-%COMP%]   .nested-item[_ngcontent-%COMP%]   ion-icon[slot=start][_ngcontent-%COMP%] {\n  color: var(--ion-color-primary);\n  font-size: 0.9rem;\n  margin-right: 8px;\n}\n.periods-section[_ngcontent-%COMP%]   .expanded-items[_ngcontent-%COMP%]   .nested-list[_ngcontent-%COMP%]   .nested-item[_ngcontent-%COMP%]   ion-icon[slot=end][_ngcontent-%COMP%] {\n  font-size: 0.8rem;\n}\n\n.no-periods[_ngcontent-%COMP%] {\n  display: flex;\n  flex-direction: column;\n  align-items: center;\n  padding: 24px;\n  text-align: center;\n  color: var(--ion-color-medium);\n}\n.no-periods[_ngcontent-%COMP%]   ion-icon[_ngcontent-%COMP%] {\n  font-size: 2rem;\n  margin-bottom: 8px;\n}\n\n.create-section[_ngcontent-%COMP%] {\n  border-top: 1px solid var(--ion-border-color, #ddd);\n  padding-top: 16px;\n}\n.create-section[_ngcontent-%COMP%]   h3[_ngcontent-%COMP%] {\n  font-size: 1rem;\n  font-weight: 600;\n  margin-bottom: 12px;\n  color: var(--ion-color-dark);\n}\n.create-section[_ngcontent-%COMP%]   .create-info[_ngcontent-%COMP%] {\n  background: var(--ion-color-light);\n  padding: 12px;\n  border-radius: 8px;\n  margin-bottom: 16px;\n}\n.create-section[_ngcontent-%COMP%]   .create-info[_ngcontent-%COMP%]   p[_ngcontent-%COMP%] {\n  margin: 4px 0;\n  font-size: 0.9rem;\n}\n.create-section[_ngcontent-%COMP%]   .coverage-info[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: center;\n  gap: 6px;\n}\n.create-section[_ngcontent-%COMP%]   .coverage-info[_ngcontent-%COMP%]   ion-icon[_ngcontent-%COMP%] {\n  font-size: 1.1rem;\n}\n.create-section[_ngcontent-%COMP%]   .coverage-ok[_ngcontent-%COMP%] {\n  color: var(--ion-color-success);\n}\n.create-section[_ngcontent-%COMP%]   .coverage-warn[_ngcontent-%COMP%] {\n  color: var(--ion-color-warning);\n}\n.create-section[_ngcontent-%COMP%]   .coverage-error[_ngcontent-%COMP%] {\n  color: var(--ion-color-danger);\n}\n.create-section[_ngcontent-%COMP%]   .creation-progress[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: center;\n  gap: 12px;\n  padding: 16px;\n  background: var(--ion-color-primary-tint);\n  border-radius: 8px;\n  margin-bottom: 16px;\n}\n.create-section[_ngcontent-%COMP%]   .creation-progress[_ngcontent-%COMP%]   ion-spinner[_ngcontent-%COMP%] {\n  --color: var(--ion-color-primary);\n}\n.create-section[_ngcontent-%COMP%]   .creation-progress[_ngcontent-%COMP%]   span[_ngcontent-%COMP%] {\n  color: var(--ion-color-primary);\n  font-size: 0.9rem;\n}\n.create-section[_ngcontent-%COMP%]   .create-hint[_ngcontent-%COMP%] {\n  font-size: 0.8rem;\n  color: var(--ion-color-medium);\n  text-align: center;\n  margin-top: 8px;\n}\n\n.modal-footer[_ngcontent-%COMP%] {\n  padding: 16px 20px;\n  border-top: 1px solid var(--ion-border-color, #ddd);\n  display: flex;\n  justify-content: flex-end;\n}\n/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8uL3NyYy9jb3JlL3NoYXJlZC9jdW11bGF0aXZlLXNlbGVjdG9yL2N1bXVsYXRpdmUtc2VsZWN0b3IuY29tcG9uZW50LnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFDSSxlQUFBO0VBQ0EsTUFBQTtFQUNBLE9BQUE7RUFDQSxXQUFBO0VBQ0EsWUFBQTtFQUNBLDhCQUFBO0VBQ0EsYUFBQTtFQUNBLG1CQUFBO0VBQ0EsdUJBQUE7RUFDQSxhQUFBO0FBQ0o7O0FBRUE7RUFDSSw2Q0FBQTtFQUNBLG1CQUFBO0VBQ0EsZ0JBQUE7RUFDQSxVQUFBO0VBQ0EsZ0JBQUE7RUFDQSxhQUFBO0VBQ0Esc0JBQUE7RUFDQSx5Q0FBQTtBQUNKOztBQUVBO0VBQ0ksYUFBQTtFQUNBLDhCQUFBO0VBQ0EsbUJBQUE7RUFDQSxrQkFBQTtFQUNBLHNEQUFBO0FBQ0o7QUFDSTtFQUNJLFNBQUE7RUFDQSxrQkFBQTtFQUNBLGdCQUFBO0FBQ1I7QUFFSTtFQUNJLG9CQUFBO0VBQ0Esa0JBQUE7QUFBUjs7QUFJQTtFQUNJLE9BQUE7RUFDQSxnQkFBQTtFQUNBLGtCQUFBO0FBREo7O0FBSUE7RUFDSSxhQUFBO0VBQ0Esc0JBQUE7RUFDQSxtQkFBQTtFQUNBLGVBQUE7QUFESjtBQUdJO0VBQ0ksbUJBQUE7QUFEUjtBQUlJO0VBQ0ksOEJBQUE7QUFGUjs7QUFNQTtFQUNJLGFBQUE7RUFDQSxtQkFBQTtFQUNBLFFBQUE7RUFDQSxhQUFBO0VBQ0Esd0NBQUE7RUFDQSw4QkFBQTtFQUNBLGtCQUFBO0VBQ0EsbUJBQUE7QUFISjtBQUtJO0VBQ0ksa0JBQUE7QUFIUjs7QUFPQTtFQUNJLG1CQUFBO0FBSko7QUFNSTtFQUNJLGVBQUE7RUFDQSxnQkFBQTtFQUNBLG1CQUFBO0VBQ0EsNEJBQUE7QUFKUjtBQU9JO0VBQ0ksa0JBQUE7RUFDQSxnQkFBQTtBQUxSO0FBUUk7RUFDSSxxQkFBQTtFQUNBLG1CQUFBO0FBTlI7QUFTWTtFQUNJLGdCQUFBO0FBUGhCO0FBVVk7RUFDSSxrQkFBQTtFQUNBLDhCQUFBO0FBUmhCO0FBV1k7RUFDSSxrQkFBQTtFQUNBLCtCQUFBO0FBVGhCO0FBY0k7RUFDSSxrQ0FBQTtFQUNBLHVCQUFBO0VBQ0EsK0NBQUE7RUFDQSxpQkFBQTtBQVpSO0FBY1E7RUFDSSxjQUFBO0VBQ0EsaUJBQUE7QUFaWjtBQWVRO0VBQ0ksdUJBQUE7RUFDQSxVQUFBO0FBYlo7QUFlWTtFQUNJLHlCQUFBO0VBQ0Esb0JBQUE7RUFDQSxrQkFBQTtFQUNBLHFCQUFBO0VBQ0Esa0JBQUE7QUFiaEI7QUFlZ0I7RUFDSSxTQUFBO0FBYnBCO0FBZW9CO0VBQ0ksa0JBQUE7RUFDQSxnQkFBQTtFQUNBLFNBQUE7QUFieEI7QUFpQmdCO0VBQ0ksK0JBQUE7RUFDQSxpQkFBQTtFQUNBLGlCQUFBO0FBZnBCO0FBa0JnQjtFQUNJLGlCQUFBO0FBaEJwQjs7QUF1QkE7RUFDSSxhQUFBO0VBQ0Esc0JBQUE7RUFDQSxtQkFBQTtFQUNBLGFBQUE7RUFDQSxrQkFBQTtFQUNBLDhCQUFBO0FBcEJKO0FBc0JJO0VBQ0ksZUFBQTtFQUNBLGtCQUFBO0FBcEJSOztBQXdCQTtFQUNJLG1EQUFBO0VBQ0EsaUJBQUE7QUFyQko7QUF1Qkk7RUFDSSxlQUFBO0VBQ0EsZ0JBQUE7RUFDQSxtQkFBQTtFQUNBLDRCQUFBO0FBckJSO0FBd0JJO0VBQ0ksa0NBQUE7RUFDQSxhQUFBO0VBQ0Esa0JBQUE7RUFDQSxtQkFBQTtBQXRCUjtBQXdCUTtFQUNJLGFBQUE7RUFDQSxpQkFBQTtBQXRCWjtBQTBCSTtFQUNJLGFBQUE7RUFDQSxtQkFBQTtFQUNBLFFBQUE7QUF4QlI7QUEwQlE7RUFDSSxpQkFBQTtBQXhCWjtBQTRCSTtFQUNJLCtCQUFBO0FBMUJSO0FBNkJJO0VBQ0ksK0JBQUE7QUEzQlI7QUE4Qkk7RUFDSSw4QkFBQTtBQTVCUjtBQStCSTtFQUNJLGFBQUE7RUFDQSxtQkFBQTtFQUNBLFNBQUE7RUFDQSxhQUFBO0VBQ0EseUNBQUE7RUFDQSxrQkFBQTtFQUNBLG1CQUFBO0FBN0JSO0FBK0JRO0VBQ0ksaUNBQUE7QUE3Qlo7QUFnQ1E7RUFDSSwrQkFBQTtFQUNBLGlCQUFBO0FBOUJaO0FBa0NJO0VBQ0ksaUJBQUE7RUFDQSw4QkFBQTtFQUNBLGtCQUFBO0VBQ0EsZUFBQTtBQWhDUjs7QUFvQ0E7RUFDSSxrQkFBQTtFQUNBLG1EQUFBO0VBQ0EsYUFBQTtFQUNBLHlCQUFBO0FBakNKIiwic291cmNlc0NvbnRlbnQiOlsiLmN1bXVsYXRpdmUtc2VsZWN0b3Itb3ZlcmxheSB7XG4gICAgcG9zaXRpb246IGZpeGVkO1xuICAgIHRvcDogMDtcbiAgICBsZWZ0OiAwO1xuICAgIHdpZHRoOiAxMDAlO1xuICAgIGhlaWdodDogMTAwJTtcbiAgICBiYWNrZ3JvdW5kOiByZ2JhKDAsIDAsIDAsIDAuNSk7XG4gICAgZGlzcGxheTogZmxleDtcbiAgICBhbGlnbi1pdGVtczogY2VudGVyO1xuICAgIGp1c3RpZnktY29udGVudDogY2VudGVyO1xuICAgIHotaW5kZXg6IDEwMDA7XG59XG5cbi5jdW11bGF0aXZlLXNlbGVjdG9yLW1vZGFsIHtcbiAgICBiYWNrZ3JvdW5kOiB2YXIoLS1pb24tYmFja2dyb3VuZC1jb2xvciwgI2ZmZik7XG4gICAgYm9yZGVyLXJhZGl1czogMTJweDtcbiAgICBtYXgtd2lkdGg6IDUwMHB4O1xuICAgIHdpZHRoOiA5MCU7XG4gICAgbWF4LWhlaWdodDogODB2aDtcbiAgICBkaXNwbGF5OiBmbGV4O1xuICAgIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XG4gICAgYm94LXNoYWRvdzogMCA0cHggMjBweCByZ2JhKDAsIDAsIDAsIDAuMyk7XG59XG5cbi5tb2RhbC1oZWFkZXIge1xuICAgIGRpc3BsYXk6IGZsZXg7XG4gICAganVzdGlmeS1jb250ZW50OiBzcGFjZS1iZXR3ZWVuO1xuICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG4gICAgcGFkZGluZzogMTZweCAyMHB4O1xuICAgIGJvcmRlci1ib3R0b206IDFweCBzb2xpZCB2YXIoLS1pb24tYm9yZGVyLWNvbG9yLCAjZGRkKTtcblxuICAgIGgyIHtcbiAgICAgICAgbWFyZ2luOiAwO1xuICAgICAgICBmb250LXNpemU6IDEuMjVyZW07XG4gICAgICAgIGZvbnQtd2VpZ2h0OiA2MDA7XG4gICAgfVxuXG4gICAgaW9uLWJ1dHRvbiB7XG4gICAgICAgIC0tcGFkZGluZy1zdGFydDogOHB4O1xuICAgICAgICAtLXBhZGRpbmctZW5kOiA4cHg7XG4gICAgfVxufVxuXG4ubW9kYWwtY29udGVudCB7XG4gICAgZmxleDogMTtcbiAgICBvdmVyZmxvdy15OiBhdXRvO1xuICAgIHBhZGRpbmc6IDE2cHggMjBweDtcbn1cblxuLmxvYWRpbmctc3RhdGUge1xuICAgIGRpc3BsYXk6IGZsZXg7XG4gICAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcbiAgICBhbGlnbi1pdGVtczogY2VudGVyO1xuICAgIHBhZGRpbmc6IDQwcHggMDtcblxuICAgIGlvbi1zcGlubmVyIHtcbiAgICAgICAgbWFyZ2luLWJvdHRvbTogMTZweDtcbiAgICB9XG5cbiAgICBwIHtcbiAgICAgICAgY29sb3I6IHZhcigtLWlvbi1jb2xvci1tZWRpdW0pO1xuICAgIH1cbn1cblxuLmVycm9yLW1lc3NhZ2Uge1xuICAgIGRpc3BsYXk6IGZsZXg7XG4gICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbiAgICBnYXA6IDhweDtcbiAgICBwYWRkaW5nOiAxMnB4O1xuICAgIGJhY2tncm91bmQ6IHZhcigtLWlvbi1jb2xvci1kYW5nZXItdGludCk7XG4gICAgY29sb3I6IHZhcigtLWlvbi1jb2xvci1kYW5nZXIpO1xuICAgIGJvcmRlci1yYWRpdXM6IDhweDtcbiAgICBtYXJnaW4tYm90dG9tOiAxNnB4O1xuXG4gICAgaW9uLWljb24ge1xuICAgICAgICBmb250LXNpemU6IDEuMjVyZW07XG4gICAgfVxufVxuXG4ucGVyaW9kcy1zZWN0aW9uIHtcbiAgICBtYXJnaW4tYm90dG9tOiAyNHB4O1xuXG4gICAgaDMge1xuICAgICAgICBmb250LXNpemU6IDFyZW07XG4gICAgICAgIGZvbnQtd2VpZ2h0OiA2MDA7XG4gICAgICAgIG1hcmdpbi1ib3R0b206IDEycHg7XG4gICAgICAgIGNvbG9yOiB2YXIoLS1pb24tY29sb3ItZGFyayk7XG4gICAgfVxuXG4gICAgaW9uLWxpc3Qge1xuICAgICAgICBib3JkZXItcmFkaXVzOiA4cHg7XG4gICAgICAgIG92ZXJmbG93OiBoaWRkZW47XG4gICAgfVxuXG4gICAgaW9uLWl0ZW0ge1xuICAgICAgICAtLXBhZGRpbmctc3RhcnQ6IDEycHg7XG4gICAgICAgIC0tcGFkZGluZy1lbmQ6IDEycHg7XG5cbiAgICAgICAgaW9uLWxhYmVsIHtcbiAgICAgICAgICAgIGgyIHtcbiAgICAgICAgICAgICAgICBmb250LXdlaWdodDogNTAwO1xuICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICBwIHtcbiAgICAgICAgICAgICAgICBmb250LXNpemU6IDAuODVyZW07XG4gICAgICAgICAgICAgICAgY29sb3I6IHZhcigtLWlvbi1jb2xvci1tZWRpdW0pO1xuICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICAuY291bnQtaW5mbyB7XG4gICAgICAgICAgICAgICAgZm9udC1zaXplOiAwLjc1cmVtO1xuICAgICAgICAgICAgICAgIGNvbG9yOiB2YXIoLS1pb24tY29sb3ItcHJpbWFyeSk7XG4gICAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICB9XG5cbiAgICAuZXhwYW5kZWQtaXRlbXMge1xuICAgICAgICBiYWNrZ3JvdW5kOiB2YXIoLS1pb24tY29sb3ItbGlnaHQpO1xuICAgICAgICBwYWRkaW5nOiA4cHggMCA4cHggMjRweDtcbiAgICAgICAgYm9yZGVyLWxlZnQ6IDNweCBzb2xpZCB2YXIoLS1pb24tY29sb3ItcHJpbWFyeSk7XG4gICAgICAgIG1hcmdpbi1sZWZ0OiAxNnB4O1xuXG4gICAgICAgIGlvbi1zcGlubmVyIHtcbiAgICAgICAgICAgIGRpc3BsYXk6IGJsb2NrO1xuICAgICAgICAgICAgbWFyZ2luOiAxNnB4IGF1dG87XG4gICAgICAgIH1cblxuICAgICAgICAubmVzdGVkLWxpc3Qge1xuICAgICAgICAgICAgYmFja2dyb3VuZDogdHJhbnNwYXJlbnQ7XG4gICAgICAgICAgICBwYWRkaW5nOiAwO1xuXG4gICAgICAgICAgICAubmVzdGVkLWl0ZW0ge1xuICAgICAgICAgICAgICAgIC0tYmFja2dyb3VuZDogdHJhbnNwYXJlbnQ7XG4gICAgICAgICAgICAgICAgLS1wYWRkaW5nLXN0YXJ0OiA4cHg7XG4gICAgICAgICAgICAgICAgLS1wYWRkaW5nLXRvcDogNHB4O1xuICAgICAgICAgICAgICAgIC0tcGFkZGluZy1ib3R0b206IDRweDtcbiAgICAgICAgICAgICAgICAtLW1pbi1oZWlnaHQ6IDMycHg7XG5cbiAgICAgICAgICAgICAgICBpb24tbGFiZWwge1xuICAgICAgICAgICAgICAgICAgICBtYXJnaW46IDA7XG5cbiAgICAgICAgICAgICAgICAgICAgaDMge1xuICAgICAgICAgICAgICAgICAgICAgICAgZm9udC1zaXplOiAwLjg1cmVtO1xuICAgICAgICAgICAgICAgICAgICAgICAgZm9udC13ZWlnaHQ6IDUwMDtcbiAgICAgICAgICAgICAgICAgICAgICAgIG1hcmdpbjogMDtcbiAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgICAgIGlvbi1pY29uW3Nsb3Q9XCJzdGFydFwiXSB7XG4gICAgICAgICAgICAgICAgICAgIGNvbG9yOiB2YXIoLS1pb24tY29sb3ItcHJpbWFyeSk7XG4gICAgICAgICAgICAgICAgICAgIGZvbnQtc2l6ZTogMC45cmVtO1xuICAgICAgICAgICAgICAgICAgICBtYXJnaW4tcmlnaHQ6IDhweDtcbiAgICAgICAgICAgICAgICB9XG5cbiAgICAgICAgICAgICAgICBpb24taWNvbltzbG90PVwiZW5kXCJdIHtcbiAgICAgICAgICAgICAgICAgICAgZm9udC1zaXplOiAwLjhyZW07XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfVxuICAgICAgICB9XG4gICAgfVxufVxuXG4ubm8tcGVyaW9kcyB7XG4gICAgZGlzcGxheTogZmxleDtcbiAgICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xuICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG4gICAgcGFkZGluZzogMjRweDtcbiAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XG4gICAgY29sb3I6IHZhcigtLWlvbi1jb2xvci1tZWRpdW0pO1xuXG4gICAgaW9uLWljb24ge1xuICAgICAgICBmb250LXNpemU6IDJyZW07XG4gICAgICAgIG1hcmdpbi1ib3R0b206IDhweDtcbiAgICB9XG59XG5cbi5jcmVhdGUtc2VjdGlvbiB7XG4gICAgYm9yZGVyLXRvcDogMXB4IHNvbGlkIHZhcigtLWlvbi1ib3JkZXItY29sb3IsICNkZGQpO1xuICAgIHBhZGRpbmctdG9wOiAxNnB4O1xuXG4gICAgaDMge1xuICAgICAgICBmb250LXNpemU6IDFyZW07XG4gICAgICAgIGZvbnQtd2VpZ2h0OiA2MDA7XG4gICAgICAgIG1hcmdpbi1ib3R0b206IDEycHg7XG4gICAgICAgIGNvbG9yOiB2YXIoLS1pb24tY29sb3ItZGFyayk7XG4gICAgfVxuXG4gICAgLmNyZWF0ZS1pbmZvIHtcbiAgICAgICAgYmFja2dyb3VuZDogdmFyKC0taW9uLWNvbG9yLWxpZ2h0KTtcbiAgICAgICAgcGFkZGluZzogMTJweDtcbiAgICAgICAgYm9yZGVyLXJhZGl1czogOHB4O1xuICAgICAgICBtYXJnaW4tYm90dG9tOiAxNnB4O1xuXG4gICAgICAgIHAge1xuICAgICAgICAgICAgbWFyZ2luOiA0cHggMDtcbiAgICAgICAgICAgIGZvbnQtc2l6ZTogMC45cmVtO1xuICAgICAgICB9XG4gICAgfVxuXG4gICAgLmNvdmVyYWdlLWluZm8ge1xuICAgICAgICBkaXNwbGF5OiBmbGV4O1xuICAgICAgICBhbGlnbi1pdGVtczogY2VudGVyO1xuICAgICAgICBnYXA6IDZweDtcblxuICAgICAgICBpb24taWNvbiB7XG4gICAgICAgICAgICBmb250LXNpemU6IDEuMXJlbTtcbiAgICAgICAgfVxuICAgIH1cblxuICAgIC5jb3ZlcmFnZS1vayB7XG4gICAgICAgIGNvbG9yOiB2YXIoLS1pb24tY29sb3Itc3VjY2Vzcyk7XG4gICAgfVxuXG4gICAgLmNvdmVyYWdlLXdhcm4ge1xuICAgICAgICBjb2xvcjogdmFyKC0taW9uLWNvbG9yLXdhcm5pbmcpO1xuICAgIH1cblxuICAgIC5jb3ZlcmFnZS1lcnJvciB7XG4gICAgICAgIGNvbG9yOiB2YXIoLS1pb24tY29sb3ItZGFuZ2VyKTtcbiAgICB9XG5cbiAgICAuY3JlYXRpb24tcHJvZ3Jlc3Mge1xuICAgICAgICBkaXNwbGF5OiBmbGV4O1xuICAgICAgICBhbGlnbi1pdGVtczogY2VudGVyO1xuICAgICAgICBnYXA6IDEycHg7XG4gICAgICAgIHBhZGRpbmc6IDE2cHg7XG4gICAgICAgIGJhY2tncm91bmQ6IHZhcigtLWlvbi1jb2xvci1wcmltYXJ5LXRpbnQpO1xuICAgICAgICBib3JkZXItcmFkaXVzOiA4cHg7XG4gICAgICAgIG1hcmdpbi1ib3R0b206IDE2cHg7XG5cbiAgICAgICAgaW9uLXNwaW5uZXIge1xuICAgICAgICAgICAgLS1jb2xvcjogdmFyKC0taW9uLWNvbG9yLXByaW1hcnkpO1xuICAgICAgICB9XG5cbiAgICAgICAgc3BhbiB7XG4gICAgICAgICAgICBjb2xvcjogdmFyKC0taW9uLWNvbG9yLXByaW1hcnkpO1xuICAgICAgICAgICAgZm9udC1zaXplOiAwLjlyZW07XG4gICAgICAgIH1cbiAgICB9XG5cbiAgICAuY3JlYXRlLWhpbnQge1xuICAgICAgICBmb250LXNpemU6IDAuOHJlbTtcbiAgICAgICAgY29sb3I6IHZhcigtLWlvbi1jb2xvci1tZWRpdW0pO1xuICAgICAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XG4gICAgICAgIG1hcmdpbi10b3A6IDhweDtcbiAgICB9XG59XG5cbi5tb2RhbC1mb290ZXIge1xuICAgIHBhZGRpbmc6IDE2cHggMjBweDtcbiAgICBib3JkZXItdG9wOiAxcHggc29saWQgdmFyKC0taW9uLWJvcmRlci1jb2xvciwgI2RkZCk7XG4gICAgZGlzcGxheTogZmxleDtcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IGZsZXgtZW5kO1xufVxuIl0sInNvdXJjZVJvb3QiOiIifQ== */"],
      changeDetection: 0
    });
  }
}

/***/ }),

/***/ 43498:
/*!***********************************************!*\
  !*** ./src/core/shared/fidj-storage.model.ts ***!
  \***********************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "FidjStorage": () => (/* binding */ FidjStorage),
/* harmony export */   "FidjStorageNode": () => (/* binding */ FidjStorageNode)
/* harmony export */ });
/* harmony import */ var _opt_atlassian_pipelines_agent_build_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/esm/asyncToGenerator.js */ 71670);
/* harmony import */ var raain_model__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! raain-model */ 70034);
/* harmony import */ var raain_model__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(raain_model__WEBPACK_IMPORTED_MODULE_1__);


class FidjStorageNode {
  constructor() {
    this.radars = [];
    this.rains = [];
    this.gauges = [];
    this.events = [];
    this.infos = {};
  }
  static getEmptyNode() {
    return new FidjStorageNode();
  }
  static getDemoNode() {
    const demoNode = new FidjStorageNode();
    const link = new raain_model__WEBPACK_IMPORTED_MODULE_1__.Link('rain', 'https://demo/api/rains/2');
    /*
    demoNode.radars = [
    new RadarNode({
    id: '5efd04569cb1f4161bd69dc7',
    name: 'demo radar A',
    links: [link],
    latitude: 48.774569,
    longitude: 2.008407
    }),
    new RadarNode({
    id: 'dr2',
    name: 'demo radar B',
    links: [link],
    latitude: 0.11,
    longitude: -0.753
    }),
    new RadarNode({
    id: 'dr3',
    name: 'demo radar C',
    latitude: 0.13,
    longitude: -0.753,
    links: []
    }),
    new RadarNode({
    id: 'dr4',
    name: 'demo radar D',
    latitude: 0.14,
    longitude: -0.74,
    links: []
    })];
    demoNode.rains = [
    new RainNode({
    id: '5efd04569cb1f4161bd69dc8',
    name: 'Demo rain zone A',
    links: [new Link('radar', 'https://demo/api/radars/5efcfe619cb1f4161bd69dc3')],
    status: 0,
    quality: 75,
    latitude: 48.774569,
    longitude: 2.008407
    }),
    new RainNode({
    id: 'dz2',
    name: 'Demo rain zone B',
    radars: [demoNode.radars[0], demoNode.radars[1]],
    status: 1,
    quality: 50,
    latitude: 48.774569,
    longitude: 2.008407
    }),
    new RainNode({
    id: 'dz3',
    name: 'Demo rain zone C',
    radars: [demoNode.radars[0], demoNode.radars[1]],
    status: 2,
    quality: 75,
    latitude: 48.774569,
    longitude: 2.008407
    }),
    new RainNode({
    id: 'dz4',
    name: 'Demo rain zone D',
    radars: [demoNode.radars[0], demoNode.radars[1]],
    status: 3,
    quality: 95,
    latitude: 48.774569,
    longitude: 2.008407
    })];
    demoNode.gauges = [
    new GaugeNode({
    id: 'g1',
    name: 'Gauge A',
    latitude: 48.7748,
    longitude: 2.28407,
    }),
    new GaugeNode({
    id: 'g2',
    name: 'Gauge B',
    latitude: 48.874569,
    longitude: 2.108407,
    })];
    demoNode.events = [{
    id: 'e2',
    title: 'Need support ?',
    status: 0,
    red: false,
    description: 'This area is dedicated to support you and your team. Support is made on Radar or Rain quality, ' +
    'or any feedback we can have about your production system. Our goal : improving your data.',
    created: new Date(),
    modified: new Date()
    }];
    demoNode.team = {
    id: 'p1',
    email: 'demo@demo.com',
    name: 'demo guy',
    description: 'the demo guy'
    };
    */
    return demoNode;
  }
}
class FidjStorageResult {}
class FidjStorage {
  constructor(storage) {
    this.storage = storage;
    this.node = FidjStorageNode.getEmptyNode();
    this.fidjMetaResult = {
      data: new FidjStorageNode()
    };
  }
  storeData(fidjService, data) {
    var _this = this;
    return (0,_opt_atlassian_pipelines_agent_build_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_0__["default"])(function* () {
      _this.node = JSON.parse(JSON.stringify(data));
      _this.fidjMetaResult.data = _this.node;
      if (_this.isDemoMode) {
        _this.storage.set('fidjMetaResult', JSON.stringify(_this.fidjMetaResult));
        return;
      }
      yield fidjService.put(_this.fidjMetaResult);
    })();
  }
  getRefreshedNodeCopy(fidjService) {
    var _this2 = this;
    return (0,_opt_atlassian_pipelines_agent_build_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_0__["default"])(function* () {
      if (_this2.isDemoMode) {
        const fidjMetaResult = _this2.storage.get('fidjMetaResult');
        if (fidjMetaResult) {
          _this2.fidjMetaResult = JSON.parse(fidjMetaResult);
          _this2.node = _this2.fidjMetaResult.data;
        }
        return JSON.parse(JSON.stringify(_this2.node));
      }
      const firstDemoData = /*#__PURE__*/function () {
        var _ref = (0,_opt_atlassian_pipelines_agent_build_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_0__["default"])(function* () {
          _this2.node = FidjStorageNode.getDemoNode();
          yield _this2.storeData(fidjService, _this2.node);
        });
        return function firstDemoData() {
          return _ref.apply(this, arguments);
        };
      }();
      yield fidjService.sync(firstDemoData);
      const fidjFindAllResults = yield fidjService.findAll();
      if (fidjFindAllResults && fidjFindAllResults.length > 0) {
        if (fidjFindAllResults[0].data) {
          _this2.fidjMetaResult = fidjFindAllResults[0];
          _this2.node = _this2.fidjMetaResult.data;
        }
      }
      return JSON.parse(JSON.stringify(_this2.node));
    })();
  }
  setDemoMode(isDemo) {
    this.isDemoMode = isDemo;
  }
}

/***/ }),

/***/ 8987:
/*!**********************************!*\
  !*** ./src/core/shared/index.ts ***!
  \**********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "AreInProgressPipe": () => (/* reexport safe */ _shared_pipe__WEBPACK_IMPORTED_MODULE_16__.AreInProgressPipe),
/* harmony export */   "AreReady": () => (/* reexport safe */ _shared_pipe__WEBPACK_IMPORTED_MODULE_16__.AreReady),
/* harmony export */   "AreStopped": () => (/* reexport safe */ _shared_pipe__WEBPACK_IMPORTED_MODULE_16__.AreStopped),
/* harmony export */   "CONSTANTS": () => (/* reexport safe */ _shared_const__WEBPACK_IMPORTED_MODULE_15__.CONSTANTS),
/* harmony export */   "Cache": () => (/* reexport safe */ _cache_service__WEBPACK_IMPORTED_MODULE_11__.Cache),
/* harmony export */   "CompareManager": () => (/* reexport safe */ _tools__WEBPACK_IMPORTED_MODULE_10__.CompareManager),
/* harmony export */   "CumulativeSelectorComponent": () => (/* reexport safe */ _cumulative_selector_cumulative_selector_component__WEBPACK_IMPORTED_MODULE_9__.CumulativeSelectorComponent),
/* harmony export */   "FidjStorage": () => (/* reexport safe */ _fidj_storage_model__WEBPACK_IMPORTED_MODULE_12__.FidjStorage),
/* harmony export */   "FidjStorageNode": () => (/* reexport safe */ _fidj_storage_model__WEBPACK_IMPORTED_MODULE_12__.FidjStorageNode),
/* harmony export */   "FrameSet": () => (/* reexport safe */ _tools__WEBPACK_IMPORTED_MODULE_10__.FrameSet),
/* harmony export */   "GaugeNodeFilter": () => (/* reexport safe */ _tools__WEBPACK_IMPORTED_MODULE_10__.GaugeNodeFilter),
/* harmony export */   "HasGoodQuality": () => (/* reexport safe */ _shared_pipe__WEBPACK_IMPORTED_MODULE_16__.HasGoodQuality),
/* harmony export */   "HasNotGoodQuality": () => (/* reexport safe */ _shared_pipe__WEBPACK_IMPORTED_MODULE_16__.HasNotGoodQuality),
/* harmony export */   "HaveNotBeenRed": () => (/* reexport safe */ _shared_pipe__WEBPACK_IMPORTED_MODULE_16__.HaveNotBeenRed),
/* harmony export */   "IsNotReady": () => (/* reexport safe */ _shared_pipe__WEBPACK_IMPORTED_MODULE_16__.IsNotReady),
/* harmony export */   "IsReady": () => (/* reexport safe */ _shared_pipe__WEBPACK_IMPORTED_MODULE_16__.IsReady),
/* harmony export */   "PipesModule": () => (/* reexport safe */ _pipes_module__WEBPACK_IMPORTED_MODULE_21__.PipesModule),
/* harmony export */   "ProfileIconDirective": () => (/* reexport safe */ _profile_icon_directive__WEBPACK_IMPORTED_MODULE_20__.ProfileIconDirective),
/* harmony export */   "ProfileService": () => (/* reexport safe */ _profile_service__WEBPACK_IMPORTED_MODULE_13__.ProfileService),
/* harmony export */   "ProgressBuffer": () => (/* reexport safe */ _shared_pipe__WEBPACK_IMPORTED_MODULE_16__.ProgressBuffer),
/* harmony export */   "ProgressValue": () => (/* reexport safe */ _shared_pipe__WEBPACK_IMPORTED_MODULE_16__.ProgressValue),
/* harmony export */   "RaainCompareComponent": () => (/* reexport safe */ _raain_compare_raain_compare_component__WEBPACK_IMPORTED_MODULE_1__.RaainCompareComponent),
/* harmony export */   "RaainCompareStackComponent": () => (/* reexport safe */ _raain_compare_stack_raain_compare_stack_component__WEBPACK_IMPORTED_MODULE_6__.RaainCompareStackComponent),
/* harmony export */   "RaainConfigurationComponent": () => (/* reexport safe */ _raain_configuration_raain_configuration_component__WEBPACK_IMPORTED_MODULE_2__.RaainConfigurationComponent),
/* harmony export */   "RaainDateDynamicComponent": () => (/* reexport safe */ _raain_date_dynamic_raain_date_dynamic_component__WEBPACK_IMPORTED_MODULE_4__.RaainDateDynamicComponent),
/* harmony export */   "RaainDateFocusComponent": () => (/* reexport safe */ _raain_date_focus_raain_date_focus_component__WEBPACK_IMPORTED_MODULE_3__.RaainDateFocusComponent),
/* harmony export */   "RaainDetailsComponent": () => (/* reexport safe */ _raain_details_raain_details_component__WEBPACK_IMPORTED_MODULE_8__.RaainDetailsComponent),
/* harmony export */   "RaainGlobeComponent": () => (/* reexport safe */ _raain_globe_raain_globe_component__WEBPACK_IMPORTED_MODULE_7__.RaainGlobeComponent),
/* harmony export */   "RaainMapComponent": () => (/* reexport safe */ _raain_map_raain_map_component__WEBPACK_IMPORTED_MODULE_0__.RaainMapComponent),
/* harmony export */   "RaainSpeedComponent": () => (/* reexport safe */ _raain_speed_raain_speed_component__WEBPACK_IMPORTED_MODULE_5__.RaainSpeedComponent),
/* harmony export */   "RadarService": () => (/* reexport safe */ _radar_service__WEBPACK_IMPORTED_MODULE_14__.RadarService),
/* harmony export */   "RefreshManager": () => (/* reexport safe */ _tools__WEBPACK_IMPORTED_MODULE_10__.RefreshManager),
/* harmony export */   "SharedModule": () => (/* reexport safe */ _shared_module__WEBPACK_IMPORTED_MODULE_17__.SharedModule),
/* harmony export */   "Storage": () => (/* reexport safe */ _storage_service__WEBPACK_IMPORTED_MODULE_18__.Storage),
/* harmony export */   "WaitForValidation": () => (/* reexport safe */ _shared_pipe__WEBPACK_IMPORTED_MODULE_16__.WaitForValidation),
/* harmony export */   "XYType": () => (/* reexport safe */ _xytype__WEBPACK_IMPORTED_MODULE_19__.XYType),
/* harmony export */   "mapDateRangeToString": () => (/* reexport safe */ _tools__WEBPACK_IMPORTED_MODULE_10__.mapDateRangeToString)
/* harmony export */ });
/* harmony import */ var _raain_map_raain_map_component__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./raain-map/raain-map.component */ 50121);
/* harmony import */ var _raain_compare_raain_compare_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./raain-compare/raain-compare.component */ 39337);
/* harmony import */ var _raain_configuration_raain_configuration_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./raain-configuration/raain-configuration.component */ 45745);
/* harmony import */ var _raain_date_focus_raain_date_focus_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./raain-date-focus/raain-date-focus.component */ 25320);
/* harmony import */ var _raain_date_dynamic_raain_date_dynamic_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./raain-date-dynamic/raain-date-dynamic.component */ 4528);
/* harmony import */ var _raain_speed_raain_speed_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./raain-speed/raain-speed.component */ 95143);
/* harmony import */ var _raain_compare_stack_raain_compare_stack_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./raain-compare-stack/raain-compare-stack.component */ 46341);
/* harmony import */ var _raain_globe_raain_globe_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./raain-globe/raain-globe.component */ 12978);
/* harmony import */ var _raain_details_raain_details_component__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./raain-details/raain-details.component */ 25712);
/* harmony import */ var _cumulative_selector_cumulative_selector_component__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./cumulative-selector/cumulative-selector.component */ 98768);
/* harmony import */ var _tools__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./tools */ 1987);
/* harmony import */ var _cache_service__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ./cache.service */ 13140);
/* harmony import */ var _fidj_storage_model__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ./fidj-storage.model */ 43498);
/* harmony import */ var _profile_service__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ./profile.service */ 15770);
/* harmony import */ var _radar_service__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! ./radar.service */ 49766);
/* harmony import */ var _shared_const__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! ./shared.const */ 40147);
/* harmony import */ var _shared_pipe__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! ./shared.pipe */ 64221);
/* harmony import */ var _shared_module__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(/*! ./shared.module */ 6454);
/* harmony import */ var _storage_service__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(/*! ./storage.service */ 8184);
/* harmony import */ var _xytype__WEBPACK_IMPORTED_MODULE_19__ = __webpack_require__(/*! ./xytype */ 8217);
/* harmony import */ var _profile_icon_directive__WEBPACK_IMPORTED_MODULE_20__ = __webpack_require__(/*! ./profile-icon.directive */ 36035);
/* harmony import */ var _pipes_module__WEBPACK_IMPORTED_MODULE_21__ = __webpack_require__(/*! ./pipes.module */ 5421);























/***/ }),

/***/ 5421:
/*!*****************************************!*\
  !*** ./src/core/shared/pipes.module.ts ***!
  \*****************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "PipesModule": () => (/* binding */ PipesModule)
/* harmony export */ });
/* harmony import */ var _shared_pipe__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./shared.pipe */ 64221);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ 22560);


class PipesModule {
  static {
    this.ɵfac = function PipesModule_Factory(t) {
      return new (t || PipesModule)();
    };
  }
  static {
    this.ɵmod = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineNgModule"]({
      type: PipesModule
    });
  }
  static {
    this.ɵinj = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineInjector"]({});
  }
}
(function () {
  (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵsetNgModuleScope"](PipesModule, {
    declarations: [_shared_pipe__WEBPACK_IMPORTED_MODULE_0__.AreStopped, _shared_pipe__WEBPACK_IMPORTED_MODULE_0__.AreInProgressPipe, _shared_pipe__WEBPACK_IMPORTED_MODULE_0__.AreReady, _shared_pipe__WEBPACK_IMPORTED_MODULE_0__.IsReady, _shared_pipe__WEBPACK_IMPORTED_MODULE_0__.IsNotReady, _shared_pipe__WEBPACK_IMPORTED_MODULE_0__.WaitForValidation, _shared_pipe__WEBPACK_IMPORTED_MODULE_0__.HasGoodQuality, _shared_pipe__WEBPACK_IMPORTED_MODULE_0__.HasNotGoodQuality, _shared_pipe__WEBPACK_IMPORTED_MODULE_0__.ProgressValue, _shared_pipe__WEBPACK_IMPORTED_MODULE_0__.ProgressBuffer, _shared_pipe__WEBPACK_IMPORTED_MODULE_0__.HaveNotBeenRed],
    exports: [_shared_pipe__WEBPACK_IMPORTED_MODULE_0__.AreStopped, _shared_pipe__WEBPACK_IMPORTED_MODULE_0__.AreInProgressPipe, _shared_pipe__WEBPACK_IMPORTED_MODULE_0__.AreReady, _shared_pipe__WEBPACK_IMPORTED_MODULE_0__.IsReady, _shared_pipe__WEBPACK_IMPORTED_MODULE_0__.IsNotReady, _shared_pipe__WEBPACK_IMPORTED_MODULE_0__.WaitForValidation, _shared_pipe__WEBPACK_IMPORTED_MODULE_0__.HasGoodQuality, _shared_pipe__WEBPACK_IMPORTED_MODULE_0__.HasNotGoodQuality, _shared_pipe__WEBPACK_IMPORTED_MODULE_0__.ProgressValue, _shared_pipe__WEBPACK_IMPORTED_MODULE_0__.ProgressBuffer, _shared_pipe__WEBPACK_IMPORTED_MODULE_0__.HaveNotBeenRed]
  });
})();

/***/ }),

/***/ 36035:
/*!***************************************************!*\
  !*** ./src/core/shared/profile-icon.directive.ts ***!
  \***************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "ProfileIconDirective": () => (/* binding */ ProfileIconDirective)
/* harmony export */ });
/* harmony import */ var _opt_atlassian_pipelines_agent_build_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/esm/asyncToGenerator.js */ 71670);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ 22560);
/* harmony import */ var _profile_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./profile.service */ 15770);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ 60124);




// Helper function to pause execution for a specified time in milliseconds
function sleep(ms) {
  return new Promise(resolve => setTimeout(resolve, ms));
}
class ProfileIconDirective {
  constructor(el, profileService, router) {
    this.el = el;
    this.profileService = profileService;
    this.router = router;
    this.isConnected = true;
  }
  ngOnInit() {
    // Check if the user is logged in and if the toolbar is not inside a modal
    if (this.profileService.isLoggedIn() && !this.isInsideModal()) {
      // Get the email from the profile service
      const email = this.profileService.getEmail();
      // Create the profile button element
      const profileButtons = document.createElement('ion-buttons');
      profileButtons.setAttribute('slot', 'primary');
      // Create the button
      const button = document.createElement('ion-button');
      // Store references for later use
      this.profileButton = button;
      // Create the icon
      const icon = document.createElement('ion-icon');
      icon.setAttribute('name', 'person-circle-outline');
      icon.setAttribute('slot', 'start');
      // Create the label
      const label = document.createElement('ion-label');
      label.textContent = email;
      // Assemble the button
      button.appendChild(icon);
      button.appendChild(label);
      // Add click event listener to the button
      button.addEventListener('click', () => {
        this.navigateToProfile();
      });
      // Assemble the buttons container
      profileButtons.appendChild(button);
      // Append the buttons to the toolbar
      this.el.nativeElement.appendChild(profileButtons);
      // Start the background refresh timer (check every minute)
      this.startBackgroundRefresh();
    }
  }
  ngOnDestroy() {
    // Clear the timer when the directive is destroyed
    if (this.refreshTimer) {
      clearInterval(this.refreshTimer);
      this.refreshTimer = null;
    }
  }
  navigateToProfile() {
    this.router.navigateByUrl('/profile');
  }
  startBackgroundRefresh() {
    this.refreshTimer = setInterval(() => {
      this.checkAndRefreshConnection();
    }, 20000);
  }
  checkAndRefreshConnection() {
    this.performConnectionRefresh();
  }
  showSkeletonText() {
    if (this.profileButton) {
      this.profileButton.style.opacity = '0.7';
      this.profileButton.style.transition = 'opacity 0.3s ease';
    }
  }
  hideSkeletonText() {
    if (this.profileButton) {
      this.profileButton.style.opacity = '1';
    }
  }
  performConnectionRefresh() {
    var _this = this;
    return (0,_opt_atlassian_pipelines_agent_build_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_0__["default"])(function* () {
      // Show skeleton text and hide button during loading
      _this.showSkeletonText();
      // Connection successful
      _this.isConnected = yield _this.profileService.isConnected();
      if (_this.isConnected) {
        // Call the refresh function
        const needsConnectionRefresh = _this.profileService.needsConnectionRefresh();
        const isLoggedIn = _this.profileService.isLoggedIn();
        if (needsConnectionRefresh || !isLoggedIn) {
          yield _this.profileService.connectionRefresh();
        }
        yield sleep(1000);
      }
      _this.updateButtonState();
      // Hide skeleton text and show button when loading is complete
      _this.hideSkeletonText();
    })();
  }
  updateButtonState() {
    if (this.profileButton) {
      if (this.isConnected) {
        // Enable button
        this.profileButton.removeAttribute('disabled');
        this.profileButton.removeAttribute('title');
      } else {
        // Disable button and add tooltip
        this.profileButton.setAttribute('disabled', 'true');
        this.profileButton.setAttribute('title', 'Profile unavailable - No connection');
      }
    }
  }
  // Helper method to check if the toolbar is inside a modal
  isInsideModal() {
    let parent = this.el.nativeElement.parentElement;
    // Traverse up the DOM tree to find if any parent is an ion-modal
    while (parent) {
      if (parent.tagName && parent.tagName.toLowerCase() === 'ion-modal') {
        return true;
      }
      parent = parent.parentElement;
    }
    return false;
  }
  static {
    this.ɵfac = function ProfileIconDirective_Factory(t) {
      return new (t || ProfileIconDirective)(_angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdirectiveInject"](_angular_core__WEBPACK_IMPORTED_MODULE_2__.ElementRef), _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdirectiveInject"](_profile_service__WEBPACK_IMPORTED_MODULE_1__.ProfileService), _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_3__.Router));
    };
  }
  static {
    this.ɵdir = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdefineDirective"]({
      type: ProfileIconDirective,
      selectors: [["ion-toolbar"]]
    });
  }
}

/***/ }),

/***/ 15770:
/*!********************************************!*\
  !*** ./src/core/shared/profile.service.ts ***!
  \********************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "ProfileService": () => (/* binding */ ProfileService)
/* harmony export */ });
/* harmony import */ var _opt_atlassian_pipelines_agent_build_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/esm/asyncToGenerator.js */ 71670);
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! rxjs */ 76317);
/* harmony import */ var raain_model__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! raain-model */ 70034);
/* harmony import */ var raain_model__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(raain_model__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _fidj_storage_model__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./fidj-storage.model */ 43498);
/* harmony import */ var fidj_angular__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! fidj-angular */ 84243);
/* harmony import */ var fidj_angular__WEBPACK_IMPORTED_MODULE_7___default = /*#__PURE__*/__webpack_require__.n(fidj_angular__WEBPACK_IMPORTED_MODULE_7__);
/* harmony import */ var _xytype__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./xytype */ 8217);
/* harmony import */ var _tools__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./tools */ 1987);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @angular/core */ 22560);
/* harmony import */ var _storage_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./storage.service */ 8184);
/* harmony import */ var fidj_angular__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! fidj-angular */ 39807);
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! @angular/common/http */ 58987);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! @angular/router */ 60124);












class ProfileService {
  constructor(storage, fidjService, httpClient, router) {
    this.storage = storage;
    this.fidjService = fidjService;
    this.httpClient = httpClient;
    this.router = router;
    this.email = this.storage.get('raain-email');
    this.asTeamId = this.storage.get('raain-asTeamId');
    this.readyForSync = new rxjs__WEBPACK_IMPORTED_MODULE_6__.BehaviorSubject(false);
    this.roles = [];
    this.fidjStorage = new _fidj_storage_model__WEBPACK_IMPORTED_MODULE_2__.FidjStorage(storage);
    this.isDemoMode = false;
  }
  get isDemoMode() {
    return this.isDemo;
  }
  set isDemoMode(mode) {
    this.isDemo = mode ? mode : true;
    this.fidjStorage.setDemoMode(this.isDemo);
  }
  get defaultUrlForAPI() {
    return this.storage.get('raain-urlForAPI');
  }
  set defaultUrlForAPI(url) {
    this.storage.set('raain-urlForAPI', url);
  }
  refreshProfile() {
    var _this = this;
    return (0,_opt_atlassian_pipelines_agent_build_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_0__["default"])(function* () {
      try {
        _this.nodeData = yield _this.fidjStorage.getRefreshedNodeCopy(_this.fidjService);
        _this.setRoles(yield _this.fidjService.getRoles());
        return _this.nodeData;
      } catch (e) {
        yield _this.checkError(e);
      }
    })();
  }
  isConnected() {
    var _this2 = this;
    return (0,_opt_atlassian_pipelines_agent_build_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_0__["default"])(function* () {
      return _this2.fidjService.isConnected();
    })();
  }
  getEmail() {
    return this.email ?? this.storage.get('raain-email', this.email);
  }
  setEmail(email) {
    this.email = email;
    this.storage.set('raain-email', this.email);
  }
  logout(fidjKey, fidjProd) {
    var _this3 = this;
    return (0,_opt_atlassian_pipelines_agent_build_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_0__["default"])(function* () {
      // this.storage.remove('raain-email');
      if (!fidjKey) {
        try {
          yield _this3.fidjService.loginInDemoMode();
          _this3.readyForSync.next(true);
        } catch (err) {
          console.error('initFidj catch pb: ', err);
        }
        return;
      }
      yield _this3.fidjService.logout(true);
      try {
        yield _this3.fidjService.init(fidjKey, {
          logLevel: fidj_angular__WEBPACK_IMPORTED_MODULE_7__.LoggerLevelEnum.WARN,
          crypto: false,
          prod: fidjProd,
          useDB: false
        });
        _this3.readyForSync.next(true);
      } catch (err) {
        console.error('initFidj catch pb: ', err);
      }
    })();
  }
  checkError(error) {
    var _this4 = this;
    return (0,_opt_atlassian_pipelines_agent_build_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_0__["default"])(function* () {
      if (error.code === 401) {
        console.warn('Pb on auth');
        if (_this4.router.url.indexOf('login') < 0) {
          try {
            yield _this4.fidjService.logout();
          } catch (ignored) {
            // Ignore logout errors as we're redirecting to logout page anyway
          }
          return _this4.gotoLout();
        }
      }
    })();
  }
  gotoLout() {
    var _this5 = this;
    return (0,_opt_atlassian_pipelines_agent_build_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_0__["default"])(function* () {
      try {
        if (_this5.router.url.indexOf('login') > -1) {
          return;
        }
        yield _this5.router.navigateByUrl('/logout', {
          skipLocationChange: true,
          replaceUrl: true
        });
      } catch (e) {
        console.error('gotoLout error: ', e);
      }
    })();
  }
  gotoLogin() {
    var _this6 = this;
    return (0,_opt_atlassian_pipelines_agent_build_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_0__["default"])(function* () {
      if (_this6.router.url.indexOf('login') > -1) {
        return;
      }
      // await this.router.navigateByUrl('/', {skipLocationChange: true});
      yield _this6.router.navigate(['/login']);
    })();
  }
  isLoggedIn() {
    const loggedIn = this.fidjService.isLoggedIn();
    console.log('isLoggedIn: ', loggedIn);
    return loggedIn;
  }
  needsConnectionRefresh() {
    return this.fidjService.needsRefresh();
  }
  connectionRefresh() {
    var _this7 = this;
    return (0,_opt_atlassian_pipelines_agent_build_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_0__["default"])(function* () {
      yield _this7.fidjService.refresh();
    })();
  }
  storeAll() {
    var _this8 = this;
    return (0,_opt_atlassian_pipelines_agent_build_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_0__["default"])(function* () {
      return _this8.fidjStorage.storeData(_this8.fidjService, _this8.nodeData);
    })();
  }
  isAdmin() {
    return this.roles.indexOf('admin') > -1;
  }
  // === Notifications ===
  createNotification(rainId, message) {
    var _this9 = this;
    return (0,_opt_atlassian_pipelines_agent_build_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_0__["default"])(function* () {
      const data = {
        rain: rainId,
        message
      };
      try {
        const resp = yield _this9.fidjService.sendOnEndpoint({
          key: 'notifications',
          verb: 'POST',
          defaultKeyUrl: _this9.defaultUrlForAPI + '/notifications',
          data
        });
        return new raain_model__WEBPACK_IMPORTED_MODULE_1__.EventNode(resp.data);
      } catch (e) {
        yield _this9.checkError(e);
      }
      return null;
    })();
  }
  getNotifications(rainId) {
    var _this0 = this;
    return (0,_opt_atlassian_pipelines_agent_build_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_0__["default"])(function* () {
      try {
        const params = {
          rain: rainId
        };
        const queryString = (0,raain_model__WEBPACK_IMPORTED_MODULE_1__.BuildQueryString)(params);
        const resp = yield _this0.fidjService.sendOnEndpoint({
          key: 'notifications',
          verb: 'GET',
          relativePath: queryString ? '?' + queryString : '',
          defaultKeyUrl: _this0.defaultUrlForAPI + '/notifications'
        });
        return resp.data.notifications.map(n => new raain_model__WEBPACK_IMPORTED_MODULE_1__.EventNode(n));
      } catch (e) {
        yield _this0.checkError(e);
      }
      return null;
    })();
  }
  getAllNotifications() {
    var _this1 = this;
    return (0,_opt_atlassian_pipelines_agent_build_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_0__["default"])(function* () {
      try {
        const resp = yield _this1.fidjService.sendOnEndpoint({
          key: 'notifications',
          verb: 'GET',
          defaultKeyUrl: _this1.defaultUrlForAPI + '/notifications'
        });
        return resp.data.notifications.map(n => new raain_model__WEBPACK_IMPORTED_MODULE_1__.EventNode(n));
      } catch (e) {
        yield _this1.checkError(e);
      }
      return [];
    })();
  }
  // === Teams ===
  getTeams() {
    var _this10 = this;
    return (0,_opt_atlassian_pipelines_agent_build_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_0__["default"])(function* () {
      const teams = [];
      const params = {};
      const queryString = (0,raain_model__WEBPACK_IMPORTED_MODULE_1__.BuildQueryString)(params);
      try {
        const resp = yield _this10.fidjService.sendOnEndpoint({
          key: 'teams',
          verb: 'GET',
          relativePath: queryString ? '?' + queryString : '',
          defaultKeyUrl: _this10.defaultUrlForAPI + '/teams'
        });
        for (const team of resp.data.teams) {
          teams.push(new raain_model__WEBPACK_IMPORTED_MODULE_1__.TeamNode(team));
        }
      } catch (e) {
        yield _this10.checkError(e);
      }
      return teams;
    })();
  }
  getTeam(teamId) {
    var _this11 = this;
    return (0,_opt_atlassian_pipelines_agent_build_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_0__["default"])(function* () {
      try {
        const resp = yield _this11.fidjService.sendOnEndpoint({
          key: 'teams',
          verb: 'GET',
          relativePath: teamId,
          defaultKeyUrl: _this11.defaultUrlForAPI + '/teams'
        });
        return new raain_model__WEBPACK_IMPORTED_MODULE_1__.TeamNode(resp.data);
      } catch (e) {
        yield _this11.checkError(e);
      }
      return null;
    })();
  }
  // === Radars ===
  getRadars(name) {
    var _this12 = this;
    return (0,_opt_atlassian_pipelines_agent_build_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_0__["default"])(function* () {
      const radars = [];
      const params = {};
      if (name) {
        params.name = name;
      }
      const queryString = (0,raain_model__WEBPACK_IMPORTED_MODULE_1__.BuildQueryString)(params);
      try {
        const resp = yield _this12.fidjService.sendOnEndpoint({
          key: 'radars',
          verb: 'GET',
          relativePath: queryString ? '?' + queryString : '',
          defaultKeyUrl: _this12.defaultUrlForAPI + '/radars'
        });
        for (const r of resp.data.radars) {
          const radar = new raain_model__WEBPACK_IMPORTED_MODULE_1__.RadarNode(r);
          radars.push(radar);
        }
      } catch (e) {
        yield _this12.checkError(e);
      }
      return radars;
    })();
  }
  getRadar(id) {
    var _this13 = this;
    return (0,_opt_atlassian_pipelines_agent_build_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_0__["default"])(function* () {
      try {
        const resp = yield _this13.fidjService.sendOnEndpoint({
          key: 'radars',
          verb: 'GET',
          relativePath: id,
          defaultKeyUrl: _this13.defaultUrlForAPI + '/radars'
        });
        return new raain_model__WEBPACK_IMPORTED_MODULE_1__.RadarNode(resp.data);
      } catch (e) {
        yield _this13.checkError(e);
      }
      return null;
    })();
  }
  putRadar(radarNode) {
    var _this14 = this;
    return (0,_opt_atlassian_pipelines_agent_build_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_0__["default"])(function* () {
      const data = {
        name: radarNode.name
      };
      try {
        const resp = yield _this14.fidjService.sendOnEndpoint({
          key: 'radars',
          relativePath: radarNode.id,
          verb: 'PUT',
          data,
          defaultKeyUrl: _this14.defaultUrlForAPI + '/radars/'
        });
        return new raain_model__WEBPACK_IMPORTED_MODULE_1__.RadarNode(resp.data);
      } catch (e) {
        yield _this14.checkError(e);
      }
    })();
  }
  getLonelyRadars(rains) {
    var _this15 = this;
    return (0,_opt_atlassian_pipelines_agent_build_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_0__["default"])(function* () {
      try {
        const resp = yield _this15.fidjService.sendOnEndpoint({
          key: 'radars',
          verb: 'GET',
          defaultKeyUrl: _this15.defaultUrlForAPI + '/radars'
        });
        const lonelyRadars = [];
        const radars = resp.data.radars;
        radars.forEach(radar => {
          let found = false;
          rains.forEach(rain => {
            const rdId = rain.getLink(raain_model__WEBPACK_IMPORTED_MODULE_1__.RadarNode.TYPE).getId();
            if (rdId === radar.id) {
              found = true;
            }
          });
          if (!found) {
            lonelyRadars.push(new raain_model__WEBPACK_IMPORTED_MODULE_1__.RadarNode(radar));
          }
        });
        return lonelyRadars;
      } catch (e) {
        yield _this15.checkError(e);
      }
      return [];
    })();
  }
  getRainTimeframe(_x, _x2, _x3) {
    var _this16 = this;
    return (0,_opt_atlassian_pipelines_agent_build_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_0__["default"])(function* (rainId, begin, end, forced = false, provider = 'Raain', timeStepInMinutes = 10, windowInMinutes = 0) {
      try {
        const params = {
          format: 'timeframeCumulative',
          provider,
          timeStepInMinutes: String(timeStepInMinutes),
          begin: begin?.toISOString(),
          end: end?.toISOString()
        };
        if (forced) {
          params.forced = 'true';
        }
        params.windowInMinutes = String(windowInMinutes);
        const queryString = (0,raain_model__WEBPACK_IMPORTED_MODULE_1__.BuildQueryString)(params);
        const resp = yield _this16.fidjService.sendOnEndpoint({
          key: 'rains',
          verb: 'GET',
          relativePath: rainId + (queryString ? '?' + queryString : ''),
          defaultKeyUrl: _this16.defaultUrlForAPI + '/rains'
        });
        const rainNode = new raain_model__WEBPACK_IMPORTED_MODULE_1__.RainNode(resp.data.timeframeCumulative);
        rainNode.name += '.radar.timeframeCumulative';
        return rainNode;
      } catch (e) {
        yield _this16.checkError(e);
      }
      return null;
    }).apply(this, arguments);
  }
  // === Rains ===
  getRains(name) {
    var _this17 = this;
    return (0,_opt_atlassian_pipelines_agent_build_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_0__["default"])(function* () {
      const rains = [];
      const params = {};
      if (name) {
        params.name = name;
      }
      const queryString = (0,raain_model__WEBPACK_IMPORTED_MODULE_1__.BuildQueryString)(params);
      try {
        const resp = yield _this17.fidjService.sendOnEndpoint({
          key: 'rains',
          verb: 'GET',
          relativePath: queryString ? '?' + queryString : '',
          defaultKeyUrl: _this17.defaultUrlForAPI + '/rains'
        });
        for (const rain of resp.data.rains) {
          rains.push(new raain_model__WEBPACK_IMPORTED_MODULE_1__.RainNode(rain));
        }
      } catch (e) {
        yield _this17.checkError(e);
      }
      return rains;
    })();
  }
  getRain(id) {
    var _this18 = this;
    return (0,_opt_atlassian_pipelines_agent_build_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_0__["default"])(function* () {
      try {
        const resp = yield _this18.fidjService.sendOnEndpoint({
          key: 'rains',
          relativePath: id,
          verb: 'GET',
          defaultKeyUrl: _this18.defaultUrlForAPI + '/rains/'
        });
        return new raain_model__WEBPACK_IMPORTED_MODULE_1__.RainNode(resp.data);
      } catch (e) {
        yield _this18.checkError(e);
      }
      return null;
    })();
  }
  // === Count
  getCounts(rainId, options) {
    var _this19 = this;
    return (0,_opt_atlassian_pipelines_agent_build_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_0__["default"])(function* () {
      try {
        const params = {
          range: options.range,
          begin: options.periodBegin.toISOString()
        };
        const queryString = (0,raain_model__WEBPACK_IMPORTED_MODULE_1__.BuildQueryString)(params);
        const resp = yield _this19.fidjService.sendOnEndpoint({
          key: 'rains',
          relativePath: rainId + '/counts' + (queryString ? '?' + queryString : ''),
          verb: 'GET',
          defaultKeyUrl: _this19.defaultUrlForAPI + '/rains/'
        });
        const counts = resp.data.counts.result;
        const percentImages = [],
          percentRainy = [],
          percentQ = [],
          percentComputations = [];
        counts.forEach(c => {
          const label = _this19.setDateComponents(options.periodBegin, c);
          percentImages.push(new _xytype__WEBPACK_IMPORTED_MODULE_3__.XYType(c.percentImages ?? 0, NaN, NaN, label));
          percentRainy.push(new _xytype__WEBPACK_IMPORTED_MODULE_3__.XYType(c.percentRainy ?? 0, NaN, NaN, label));
          percentQ.push(new _xytype__WEBPACK_IMPORTED_MODULE_3__.XYType(c.percentQ ?? 0, NaN, NaN, label));
          percentComputations.push(new _xytype__WEBPACK_IMPORTED_MODULE_3__.XYType(c.percentComputations ?? 0, NaN, NaN, label));
        });
        return {
          percentImages,
          percentRainy,
          percentQ,
          percentComputations,
          queueRunning: resp.data.queueRunning
        };
      } catch (e) {
        yield _this19.checkError(e);
      }
      return null;
    })();
  }
  getCountsHour(rainId, options) {
    var _this20 = this;
    return (0,_opt_atlassian_pipelines_agent_build_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_0__["default"])(function* () {
      try {
        const params = {
          range: 'hour',
          begin: options.periodBegin.toISOString()
        };
        const queryString = (0,raain_model__WEBPACK_IMPORTED_MODULE_1__.BuildQueryString)(params);
        const resp = yield _this20.fidjService.sendOnEndpoint({
          key: 'rains',
          relativePath: rainId + '/counts' + (queryString ? '?' + queryString : ''),
          verb: 'GET',
          defaultKeyUrl: _this20.defaultUrlForAPI + '/rains/'
        });
        const counts = resp.data.counts.result;
        const percentImages = [],
          percentComputations = [],
          rainySum = [],
          rainyCount = [];
        counts.forEach(c => {
          const label = _this20.setDateComponents(options.periodBegin, c);
          percentImages.push(new _xytype__WEBPACK_IMPORTED_MODULE_3__.XYType(c.percentImages ?? 0, NaN, NaN, label));
          percentComputations.push(new _xytype__WEBPACK_IMPORTED_MODULE_3__.XYType(c.percentComputations ?? 0, NaN, NaN, label));
          rainyCount.push(new _xytype__WEBPACK_IMPORTED_MODULE_3__.XYType(c.rainyCount ?? 0, NaN, NaN, label));
          rainySum.push(new _xytype__WEBPACK_IMPORTED_MODULE_3__.XYType(c.rainySum ?? 0, NaN, NaN, label));
        });
        return {
          percentImages,
          percentComputations,
          rainyCount,
          rainySum,
          queueRunning: resp.data.queueRunning
        };
      } catch (e) {
        yield _this20.checkError(e);
      }
      return null;
    })();
  }
  // === Computing ===
  getRainComputationCumulativeCartesianMapById(rainId, rainComputationCumulativeId) {
    var _this21 = this;
    return (0,_opt_atlassian_pipelines_agent_build_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_0__["default"])(function* () {
      const params = {
        format: 'cartesian-map'
      };
      const queryString = (0,raain_model__WEBPACK_IMPORTED_MODULE_1__.BuildQueryString)(params);
      try {
        const response = yield _this21.fidjService.sendOnEndpoint({
          key: 'rains',
          verb: 'GET',
          relativePath: `${rainId}/cumulatives/${rainComputationCumulativeId}?${queryString}`,
          defaultKeyUrl: _this21.defaultUrlForAPI + '/rains'
        });
        if (!response.data['cartesian-map']) {
          return null;
        }
        const rainComputationMap = new raain_model__WEBPACK_IMPORTED_MODULE_1__.RainComputationMap(response.data['cartesian-map']);
        rainComputationMap.name = rainId + '.rain.cartesian-map';
        return rainComputationMap;
      } catch (e) {
        yield _this21.checkError(e);
      }
      return null;
    })();
  }
  getRainComputationCumulativeCumulativesMapById(rainId, rainComputationCumulativeId, cumulativeHours) {
    var _this22 = this;
    return (0,_opt_atlassian_pipelines_agent_build_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_0__["default"])(function* () {
      const queryPath = `${rainId}/cumulatives/${rainComputationCumulativeId}/cumulative/${cumulativeHours}`;
      try {
        const response = yield _this22.fidjService.sendOnEndpoint({
          key: 'rains',
          verb: 'GET',
          relativePath: queryPath,
          defaultKeyUrl: _this22.defaultUrlForAPI + '/rains'
        });
        if (!response.data['cumulative']) {
          return null;
        }
        const rainComputationMap = new raain_model__WEBPACK_IMPORTED_MODULE_1__.RainComputationMap(response.data['cumulative']);
        rainComputationMap.name = rainId + '.rain.cumulative-cumulative';
        return rainComputationMap;
      } catch (e) {
        yield _this22.checkError(e);
      }
      return null;
    })();
  }
  getRainCumulativeCompare(rainNode, rainComputationCumulativeId) {
    var _this23 = this;
    return (0,_opt_atlassian_pipelines_agent_build_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_0__["default"])(function* () {
      try {
        const response = yield _this23.fidjService.sendOnEndpoint({
          key: 'rains',
          verb: 'GET',
          relativePath: `${rainNode.id}/cumulatives/${rainComputationCumulativeId}/compares`,
          defaultKeyUrl: _this23.defaultUrlForAPI + '/rains'
        });
        const qualityJson = response.data.qualities[0];
        const rainComputationQuality = new raain_model__WEBPACK_IMPORTED_MODULE_1__.RainComputationQuality(qualityJson);
        rainComputationQuality.qualitySpeedMatrixContainer = raain_model__WEBPACK_IMPORTED_MODULE_1__.SpeedMatrixContainer.CreateFromJson(rainComputationQuality.qualitySpeedMatrixContainer);
        return rainComputationQuality;
      } catch (e) {
        yield _this23.checkError(e);
      }
      return null;
    })();
  }
  // Fetch per-frequency quality for an on-demand cumulative
  // timeStepInMinutes = gauge frequency filter (e.g. 6 for 6min gauges, 30 for 30min gauges)
  // timeStepMode = 'eq' (exact match) or 'lte' (all frequencies <= timeStepInMinutes)
  // provider = gauge provider filter (e.g. 'Raain')
  getRainCumulativeCumulativesCompare(_x4, _x5) {
    var _this24 = this;
    return (0,_opt_atlassian_pipelines_agent_build_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_0__["default"])(function* (rainNode, rainComputationCumulativeId, provider = 'Raain', timeStepInMinutes = 5, timeStepMode = 'eq') {
      const params = {
        provider,
        timeStepInMinutes,
        timeStepMode
      };
      const queryString = (0,raain_model__WEBPACK_IMPORTED_MODULE_1__.BuildQueryString)(params);
      try {
        const response = yield _this24.fidjService.sendOnEndpoint({
          key: 'rains',
          verb: 'GET',
          relativePath: `${rainNode.id}/cumulatives/${rainComputationCumulativeId}/compares?${queryString}`,
          defaultKeyUrl: _this24.defaultUrlForAPI + '/rains'
        });
        const allQualities = response.data.qualities;
        if (!allQualities?.length) {
          return null;
        }
        const rainComputationQuality = new raain_model__WEBPACK_IMPORTED_MODULE_1__.RainComputationQuality(allQualities[0]);
        rainComputationQuality.qualitySpeedMatrixContainer = raain_model__WEBPACK_IMPORTED_MODULE_1__.SpeedMatrixContainer.CreateFromJson(rainComputationQuality.qualitySpeedMatrixContainer);
        // Merge additional qualities (lte mode returns multiple freq groups)
        for (let i = 1; i < allQualities.length; i++) {
          const extra = new raain_model__WEBPACK_IMPORTED_MODULE_1__.RainComputationQuality(allQualities[i]);
          extra.qualitySpeedMatrixContainer = raain_model__WEBPACK_IMPORTED_MODULE_1__.SpeedMatrixContainer.CreateFromJson(extra.qualitySpeedMatrixContainer);
          rainComputationQuality.merge(extra);
        }
        return rainComputationQuality;
      } catch (e) {
        yield _this24.checkError(e);
      }
      return null;
    }).apply(this, arguments);
  }
  getRainProgress(rainId) {
    var _this25 = this;
    return (0,_opt_atlassian_pipelines_agent_build_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_0__["default"])(function* () {
      try {
        const queryPath = '' + rainId + '/progress';
        const response = yield _this25.fidjService.sendOnEndpoint({
          key: 'rains',
          verb: 'GET',
          relativePath: queryPath,
          defaultKeyUrl: _this25.defaultUrlForAPI + '/rains'
        });
        // return response.data.inProgress;
        return response.data.inQueue;
      } catch (e) {
        yield _this25.checkError(e);
      }
      return 0;
    })();
  }
  getIndicators(rainId) {
    var _this26 = this;
    return (0,_opt_atlassian_pipelines_agent_build_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_0__["default"])(function* () {
      try {
        const params = {
          cumulative: 'true'
        };
        const queryString = (0,raain_model__WEBPACK_IMPORTED_MODULE_1__.BuildQueryString)(params);
        const response = yield _this26.fidjService.sendOnEndpoint({
          key: 'rains',
          verb: 'GET',
          relativePath: rainId + '/indicators' + (queryString ? '?' + queryString : ''),
          defaultKeyUrl: _this26.defaultUrlForAPI + '/rains'
        });
        return response.data;
      } catch (e) {
        yield _this26.checkError(e);
      }
      return {
        indicators: []
      };
    })();
  }
  // GET /rains/:rainId/cumulatives - List available cumulative periods
  // With detailed=true, returns individual cumulatives instead of aggregated periods
  getCumulativePeriods(rainId, filters) {
    var _this27 = this;
    return (0,_opt_atlassian_pipelines_agent_build_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_0__["default"])(function* () {
      try {
        const params = {};
        if (filters?.windowInMinutes !== undefined) {
          params.windowInMinutes = filters.windowInMinutes;
        }
        if (filters?.provider) {
          params.provider = filters.provider;
        }
        if (filters?.isReady !== undefined) {
          params.isReady = filters.isReady;
        }
        if (filters?.forced !== undefined) {
          params.forced = filters.forced;
        }
        if (filters?.detailed) {
          params.detailed = true;
        }
        if (filters?.page !== undefined) {
          params.page = filters.page;
        }
        if (filters?.limit !== undefined) {
          params.limit = filters.limit;
        }
        if (filters?.periodBegin) {
          params.periodBegin = filters.periodBegin;
        }
        if (filters?.periodEnd) {
          params.periodEnd = filters.periodEnd;
        }
        const queryString = (0,raain_model__WEBPACK_IMPORTED_MODULE_1__.BuildQueryString)(params);
        if (filters?.detailed) {
          const response = yield _this27.fidjService.sendOnEndpoint({
            key: 'rains',
            verb: 'GET',
            relativePath: rainId + '/cumulatives' + (queryString ? '?' + queryString : ''),
            defaultKeyUrl: _this27.defaultUrlForAPI + '/rains'
          });
          return response.data;
        }
        const response = yield _this27.fidjService.sendOnEndpoint({
          key: 'rains',
          verb: 'GET',
          relativePath: rainId + '/cumulatives' + (queryString ? '?' + queryString : ''),
          defaultKeyUrl: _this27.defaultUrlForAPI + '/rains'
        });
        return response.data;
      } catch (e) {
        yield _this27.checkError(e);
      }
      return {
        periods: [],
        total: 0
      };
    })();
  }
  // POST /rains/:rainId/cumulatives - Trigger cumulative computation
  createCumulativePeriod(rainId, params) {
    var _this28 = this;
    return (0,_opt_atlassian_pipelines_agent_build_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_0__["default"])(function* () {
      try {
        const body = {
          periodBegin: params.periodBegin.toISOString(),
          periodEnd: params.periodEnd.toISOString(),
          provider: params.provider,
          confName: params.confName || 'admin',
          timeStepInMinutes: params.timeStepInMinutes || 5
        };
        const response = yield _this28.fidjService.sendOnEndpoint({
          key: 'rains',
          verb: 'POST',
          relativePath: rainId + '/cumulatives',
          defaultKeyUrl: _this28.defaultUrlForAPI + '/rains',
          data: body
        });
        return response.data;
      } catch (e) {
        yield _this28.checkError(e);
      }
      return null;
    })();
  }
  // === Gauges ===
  getGauge(gaugeId) {
    var _this29 = this;
    return (0,_opt_atlassian_pipelines_agent_build_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_0__["default"])(function* () {
      try {
        const resp = yield _this29.fidjService.sendOnEndpoint({
          key: 'gauges',
          verb: 'GET',
          relativePath: gaugeId,
          defaultKeyUrl: _this29.defaultUrlForAPI + '/gauges'
        });
        return new raain_model__WEBPACK_IMPORTED_MODULE_1__.GaugeNode(resp.data);
      } catch (e) {
        yield _this29.checkError(e);
      }
    })();
  }
  getGauges(_x6, _x7) {
    var _this30 = this;
    return (0,_opt_atlassian_pipelines_agent_build_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_0__["default"])(function* (rainId, aroundLatLng, pageCount = 1) {
      const baseParams = {
        aroundLatLng: `${aroundLatLng.lat},${aroundLatLng.lng}`,
        rainId
      };
      if (_this30.asTeamId) {
        baseParams.teamId = _this30.asTeamId;
      }
      const gauges = [];
      try {
        for (let count = 1; count <= pageCount; count++) {
          const params = {
            ...baseParams,
            page: count
          };
          const queryString = (0,raain_model__WEBPACK_IMPORTED_MODULE_1__.BuildQueryString)(params);
          const resp = yield _this30.fidjService.sendOnEndpoint({
            key: 'gauges',
            verb: 'GET',
            relativePath: queryString ? '?' + queryString : '',
            defaultKeyUrl: _this30.defaultUrlForAPI + '/gauges'
          });
          for (const gauge of resp.data.gauges) {
            gauges.push(new _tools__WEBPACK_IMPORTED_MODULE_4__.GaugeNodeFilter(gauge));
          }
        }
      } catch (e) {
        yield _this30.checkError(e);
      }
      return gauges;
    }).apply(this, arguments);
  }
  getGaugeMeasures(gaugeId, begin, end) {
    var _this31 = this;
    return (0,_opt_atlassian_pipelines_agent_build_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_0__["default"])(function* () {
      const params = {
        begin: begin.toISOString(),
        end: end.toISOString()
      };
      const queryString = (0,raain_model__WEBPACK_IMPORTED_MODULE_1__.BuildQueryString)(params);
      const resp = yield _this31.fidjService.sendOnEndpoint({
        key: 'gauges',
        verb: 'GET',
        relativePath: gaugeId + '/measures' + (queryString ? '?' + queryString : ''),
        defaultKeyUrl: _this31.defaultUrlForAPI + '/gauges'
      });
      const gaugeMeasures = [];
      for (const gaugeMeasure of resp.data.gaugeMeasures) {
        gaugeMeasures.push(new raain_model__WEBPACK_IMPORTED_MODULE_1__.GaugeMeasure(gaugeMeasure));
      }
      return gaugeMeasures;
    })();
  }
  getProviders(rainId) {
    var _this32 = this;
    return (0,_opt_atlassian_pipelines_agent_build_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_0__["default"])(function* () {
      try {
        const response = yield _this32.fidjService.sendOnEndpoint({
          verb: 'GET',
          key: 'rains',
          relativePath: rainId + '/providers',
          defaultKeyUrl: _this32.defaultUrlForAPI + '/rains'
        });
        return {
          providers: response.data.providers || [],
          timeStepInMinutes: response.data.timeStepInMinutes || [5, 10, 15, 30, 60]
        };
      } catch (e) {
        console.error('getProviders error:', e);
        return {
          providers: [],
          timeStepInMinutes: [5, 10, 15, 30, 60]
        };
      }
    })();
  }
  setRoles(roles) {
    this.roles = roles;
  }
  setDateComponents(date, c) {
    const dateToShow = new Date(date);
    if (c.year !== undefined) {
      dateToShow.setUTCFullYear(c.year);
    }
    if (c.month !== undefined) {
      dateToShow.setUTCMonth(c.month - 1);
    }
    if (c.day !== undefined) {
      dateToShow.setUTCDate(c.day);
    }
    if (c.hour !== undefined) {
      dateToShow.setUTCHours(c.hour);
    }
    if (c.minute !== undefined) {
      dateToShow.setUTCMinutes(c.minute);
    }
    return dateToShow.toISOString();
  }
  static {
    this.ɵfac = function ProfileService_Factory(t) {
      return new (t || ProfileService)(_angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵinject"](_storage_service__WEBPACK_IMPORTED_MODULE_5__.Storage), _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵinject"](fidj_angular__WEBPACK_IMPORTED_MODULE_9__.FidjService), _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵinject"](_angular_common_http__WEBPACK_IMPORTED_MODULE_10__.HttpClient), _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵinject"](_angular_router__WEBPACK_IMPORTED_MODULE_11__.Router));
    };
  }
  static {
    this.ɵprov = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵdefineInjectable"]({
      token: ProfileService,
      factory: ProfileService.ɵfac,
      providedIn: 'root'
    });
  }
}

/***/ }),

/***/ 46341:
/*!******************************************************************************!*\
  !*** ./src/core/shared/raain-compare-stack/raain-compare-stack.component.ts ***!
  \******************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "RaainCompareStackComponent": () => (/* binding */ RaainCompareStackComponent)
/* harmony export */ });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ 22560);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ 94666);
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @ionic/angular */ 93819);
/* harmony import */ var _raain_compare_raain_compare_component__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../raain-compare/raain-compare.component */ 39337);





const _c0 = function (a0, a1, a2) {
  return {
    "quality-good": a0,
    "quality-medium": a1,
    "quality-bad": a2
  };
};
function RaainCompareStackComponent_div_0_span_7_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "span", 6);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpipe"](2, "number");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
  }
  if (rf & 2) {
    const ctx_r2 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngClass", _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpureFunction3"](5, _c0, ctx_r2.compareManager.globalQualityIndicator >= 0.5, ctx_r2.compareManager.globalQualityIndicator < 0.5 && ctx_r2.compareManager.globalQualityIndicator >= 0, ctx_r2.compareManager.globalQualityIndicator < 0));
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate1"](" Quality: ", _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpipeBind2"](2, 2, ctx_r2.compareManager.globalQualityIndicator, "1.0-2"), " ");
  }
}
function RaainCompareStackComponent_div_0_ion_card_content_8_Template(rf, ctx) {
  if (rf & 1) {
    const _r6 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "ion-card-content")(1, "raain-compare", 7);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("selectedPoint", function RaainCompareStackComponent_div_0_ion_card_content_8_Template_raain_compare_selectedPoint_1_listener($event) {
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵrestoreView"](_r6);
      const ctx_r5 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"](2);
      return _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵresetView"](ctx_r5.onClick($event));
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()();
  }
  if (rf & 2) {
    const ctx_r3 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("compareIndex", 0)("currentHeight", 500)("pointMax", ctx_r3.compareManager.globalComparePointsMax)("points", ctx_r3.compareManager.globalComparePoints);
  }
}
function RaainCompareStackComponent_div_0_ion_button_10_Template(rf, ctx) {
  if (rf & 1) {
    const _r8 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "ion-button", 8);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("click", function RaainCompareStackComponent_div_0_ion_button_10_Template_ion_button_click_0_listener() {
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵrestoreView"](_r8);
      const ctx_r7 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"](2);
      return _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵresetView"](ctx_r7.exportCumulativeToCsv());
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](1, "ion-icon", 9);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](2, " Export CSV ");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
  }
}
function RaainCompareStackComponent_div_0_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "div")(1, "ion-col", 1)(2, "ion-card", 2)(3, "ion-card-header");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpipe"](5, "date");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpipe"](6, "date");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](7, RaainCompareStackComponent_div_0_span_7_Template, 3, 9, "span", 3);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](8, RaainCompareStackComponent_div_0_ion_card_content_8_Template, 2, 4, "ion-card-content", 0);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](9, "div", 4);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](10, RaainCompareStackComponent_div_0_ion_button_10_Template, 3, 0, "ion-button", 5);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()();
  }
  if (rf & 2) {
    const ctx_r0 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate2"]("Cumulative [", _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpipeBind2"](5, 5, ctx_r0.compareManager.compareDates[0], "yyyy-MM-dd HH:mm"), " - ", _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpipeBind2"](6, 8, ctx_r0.compareManager.compareDates[ctx_r0.compareManager.compareDates.length - 1], "yyyy-MM-dd HH:mm"), "[ ");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", ctx_r0.compareManager.globalQualityIndicator !== null);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", ctx_r0.compareManager.globalComparePoints == null ? null : ctx_r0.compareManager.globalComparePoints.length);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", ctx_r0.compareManager.globalComparePoints == null ? null : ctx_r0.compareManager.globalComparePoints.length);
  }
}
function RaainCompareStackComponent_div_1_ion_col_1_span_4_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "span", 6);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpipe"](2, "number");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
  }
  if (rf & 2) {
    const compare_r12 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"]().$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngClass", _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpureFunction3"](5, _c0, compare_r12.qualityIndicator >= 0.5, compare_r12.qualityIndicator < 0.5 && compare_r12.qualityIndicator >= 0, compare_r12.qualityIndicator < 0));
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate1"](" Quality: ", _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpipeBind2"](2, 2, compare_r12.qualityIndicator, "1.0-2"), " ");
  }
}
function RaainCompareStackComponent_div_1_ion_col_1_ion_card_content_5_Template(rf, ctx) {
  if (rf & 1) {
    const _r18 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "ion-card-content")(1, "raain-compare", 7);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("selectedPoint", function RaainCompareStackComponent_div_1_ion_col_1_ion_card_content_5_Template_raain_compare_selectedPoint_1_listener($event) {
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵrestoreView"](_r18);
      const ctx_r17 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"](3);
      return _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵresetView"](ctx_r17.onClick($event));
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()();
  }
  if (rf & 2) {
    const ctx_r19 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"]();
    const compareIndex_r13 = ctx_r19.index;
    const compare_r12 = ctx_r19.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("compareIndex", compareIndex_r13)("currentHeight", 500)("pointMax", compare_r12.comparePointsMax)("points", compare_r12.comparePoints);
  }
}
function RaainCompareStackComponent_div_1_ion_col_1_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "ion-col", 1)(1, "ion-card", 2)(2, "ion-card-header");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](4, RaainCompareStackComponent_div_1_ion_col_1_span_4_Template, 3, 9, "span", 3);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](5, RaainCompareStackComponent_div_1_ion_col_1_ion_card_content_5_Template, 2, 4, "ion-card-content", 0);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()();
  }
  if (rf & 2) {
    const compare_r12 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate2"]("Gauges filled ", compare_r12.name, " ", compare_r12.remarks, " ");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", compare_r12.qualityIndicator !== null);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", compare_r12.comparePoints == null ? null : compare_r12.comparePoints.length);
  }
}
function RaainCompareStackComponent_div_1_ion_button_3_Template(rf, ctx) {
  if (rf & 1) {
    const _r21 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "ion-button", 8);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("click", function RaainCompareStackComponent_div_1_ion_button_3_Template_ion_button_click_0_listener() {
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵrestoreView"](_r21);
      const ctx_r20 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"](2);
      return _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵresetView"](ctx_r20.exportGranularToCsv());
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](1, "ion-icon", 9);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](2, " Export CSV ");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
  }
}
function RaainCompareStackComponent_div_1_ion_col_4_span_6_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "span", 6);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpipe"](2, "number");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
  }
  if (rf & 2) {
    const ctx_r22 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngClass", _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpureFunction3"](5, _c0, ctx_r22.compareManager.granularCumulativeQualityIndicator >= 0.5, ctx_r22.compareManager.granularCumulativeQualityIndicator < 0.5 && ctx_r22.compareManager.granularCumulativeQualityIndicator >= 0, ctx_r22.compareManager.granularCumulativeQualityIndicator < 0));
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate1"](" Quality: ", _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpipeBind2"](2, 2, ctx_r22.compareManager.granularCumulativeQualityIndicator, "1.0-2"), " ");
  }
}
function RaainCompareStackComponent_div_1_ion_col_4_Template(rf, ctx) {
  if (rf & 1) {
    const _r24 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "ion-col", 1)(1, "ion-card", 12)(2, "ion-card-header");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpipe"](4, "date");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpipe"](5, "date");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](6, RaainCompareStackComponent_div_1_ion_col_4_span_6_Template, 3, 9, "span", 3);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](7, "ion-card-content")(8, "raain-compare", 7);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("selectedPoint", function RaainCompareStackComponent_div_1_ion_col_4_Template_raain_compare_selectedPoint_8_listener($event) {
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵrestoreView"](_r24);
      const ctx_r23 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"](2);
      return _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵresetView"](ctx_r23.onClick($event));
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()()()();
  }
  if (rf & 2) {
    const ctx_r11 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate2"]("Cumulative Summary [", _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpipeBind2"](4, 7, ctx_r11.compareManager.compareDates[0], "yyyy-MM-dd HH:mm"), " - ", _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpipeBind2"](5, 10, ctx_r11.compareManager.compareDates[ctx_r11.compareManager.compareDates.length - 1], "yyyy-MM-dd HH:mm"), "[ ");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", ctx_r11.compareManager.granularCumulativeQualityIndicator !== null);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("compareIndex", -1)("currentHeight", 500)("pointMax", ctx_r11.compareManager.granularCumulativePointsMax)("points", ctx_r11.compareManager.granularCumulativePoints);
  }
}
function RaainCompareStackComponent_div_1_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "div");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](1, RaainCompareStackComponent_div_1_ion_col_1_Template, 6, 4, "ion-col", 10);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](2, "div", 4);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](3, RaainCompareStackComponent_div_1_ion_button_3_Template, 3, 0, "ion-button", 5);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](4, RaainCompareStackComponent_div_1_ion_col_4_Template, 9, 13, "ion-col", 11);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
  }
  if (rf & 2) {
    const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngForOf", ctx_r1.compareManager == null ? null : ctx_r1.compareManager.uiCompares);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", ctx_r1.compareManager.uiCompares == null ? null : ctx_r1.compareManager.uiCompares.length);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", ctx_r1.compareManager.granularCumulativePoints == null ? null : ctx_r1.compareManager.granularCumulativePoints.length);
  }
}
class RaainCompareStackComponent {
  constructor(ngZone) {
    this.ngZone = ngZone;
    this.selectedPoint = new _angular_core__WEBPACK_IMPORTED_MODULE_1__.EventEmitter();
  }
  onClick(e) {
    this.selectedPoint.emit({
      point: e.point,
      compareIndex: e.compareIndex
    });
  }
  exportCumulativeToCsv() {
    const points = this.compareManager.globalComparePoints;
    if (!points?.length) {
      return;
    }
    const dates = this.compareManager.compareDates;
    const dateRange = dates?.length > 0 ? `${this.formatDate(dates[0])} - ${this.formatDate(dates[dates.length - 1])}` : '';
    const csvRows = ['dateRange,gaugeName,gaugeValue,pixelValue'];
    for (const point of points) {
      csvRows.push(`${dateRange},${point.name},${point.x},${point.y}`);
    }
    const csvContent = csvRows.join('\n');
    this.downloadCsv(csvContent, `compare-cumulative-${this.formatDateForFilename(new Date())}.csv`);
  }
  exportGranularToCsv() {
    const allPoints = this.compareManager.getAllGranularComparePoints();
    if (!allPoints?.length) {
      return;
    }
    const csvRows = ['date,gaugeName,gaugeValue,pixelValue'];
    for (const point of allPoints) {
      const dateStr = this.formatDate(point.date);
      csvRows.push(`${dateStr},${point.gaugeName},${point.gaugeValue},${point.pixelValue}`);
    }
    const csvContent = csvRows.join('\n');
    this.downloadCsv(csvContent, `compare-granular-${this.formatDateForFilename(new Date())}.csv`);
  }
  downloadCsv(content, filename) {
    const blob = new Blob([content], {
      type: 'text/csv;charset=utf-8;'
    });
    const url = URL.createObjectURL(blob);
    const link = document.createElement('a');
    link.setAttribute('href', url);
    link.setAttribute('download', filename);
    link.click();
    URL.revokeObjectURL(url);
  }
  formatDate(date) {
    return date ? date.toISOString().slice(0, 16).replace('T', ' ') : '';
  }
  formatDateForFilename(date) {
    return date.toISOString().slice(0, 10);
  }
  static {
    this.ɵfac = function RaainCompareStackComponent_Factory(t) {
      return new (t || RaainCompareStackComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](_angular_core__WEBPACK_IMPORTED_MODULE_1__.NgZone));
    };
  }
  static {
    this.ɵcmp = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineComponent"]({
      type: RaainCompareStackComponent,
      selectors: [["raain-compare-stack"]],
      inputs: {
        compareManager: "compareManager",
        currentHeight: "currentHeight",
        cumulative: "cumulative"
      },
      outputs: {
        selectedPoint: "selectedPoint"
      },
      decls: 2,
      vars: 2,
      consts: [[4, "ngIf"], ["size-md", "6", "size-xs", "12"], [1, "card-compare"], ["class", "quality-indicator", 3, "ngClass", 4, "ngIf"], [1, "ion-text-end"], ["fill", "clear", "size", "small", 3, "click", 4, "ngIf"], [1, "quality-indicator", 3, "ngClass"], [3, "compareIndex", "currentHeight", "pointMax", "points", "selectedPoint"], ["fill", "clear", "size", "small", 3, "click"], ["name", "download-outline", "slot", "start"], ["size-md", "6", "size-xs", "12", 4, "ngFor", "ngForOf"], ["size-md", "6", "size-xs", "12", 4, "ngIf"], [1, "card-compare", "card-compare-cumulative"]],
      template: function RaainCompareStackComponent_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](0, RaainCompareStackComponent_div_0_Template, 11, 11, "div", 0);
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](1, RaainCompareStackComponent_div_1_Template, 5, 3, "div", 0);
        }
        if (rf & 2) {
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", ctx.cumulative);
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", !ctx.cumulative);
        }
      },
      dependencies: [_angular_common__WEBPACK_IMPORTED_MODULE_2__.NgClass, _angular_common__WEBPACK_IMPORTED_MODULE_2__.NgForOf, _angular_common__WEBPACK_IMPORTED_MODULE_2__.NgIf, _ionic_angular__WEBPACK_IMPORTED_MODULE_3__.IonButton, _ionic_angular__WEBPACK_IMPORTED_MODULE_3__.IonCard, _ionic_angular__WEBPACK_IMPORTED_MODULE_3__.IonCardContent, _ionic_angular__WEBPACK_IMPORTED_MODULE_3__.IonCardHeader, _ionic_angular__WEBPACK_IMPORTED_MODULE_3__.IonCol, _ionic_angular__WEBPACK_IMPORTED_MODULE_3__.IonIcon, _raain_compare_raain_compare_component__WEBPACK_IMPORTED_MODULE_0__.RaainCompareComponent, _angular_common__WEBPACK_IMPORTED_MODULE_2__.DecimalPipe, _angular_common__WEBPACK_IMPORTED_MODULE_2__.DatePipe],
      styles: ["#card-matrix[_ngcontent-%COMP%] {\n  width: 170px;\n}\n\n.card-compare[_ngcontent-%COMP%] {\n  min-width: 300px;\n}\n\n.card-compare-cumulative[_ngcontent-%COMP%] {\n  border: 2px solid var(--ion-color-warning);\n  margin-top: 16px;\n}\n\nion-card-header[_ngcontent-%COMP%] {\n  padding: 0 0 0 10px;\n}\n\n.quality-indicator[_ngcontent-%COMP%] {\n  display: inline-block;\n  margin-left: 10px;\n  padding: 2px 8px;\n  border-radius: 4px;\n  font-weight: bold;\n  font-size: 0.9em;\n}\n.quality-indicator.quality-good[_ngcontent-%COMP%] {\n  border: 1px solid var(--ion-color-success);\n  color: var(--ion-color-success);\n}\n.quality-indicator.quality-medium[_ngcontent-%COMP%] {\n  border: 1px solid var(--ion-color-medium);\n  color: var(--ion-color-medium);\n}\n.quality-indicator.quality-bad[_ngcontent-%COMP%] {\n  border: 1px solid var(--ion-color-danger);\n  color: var(--ion-color-danger);\n}\n/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8uL3NyYy9jb3JlL3NoYXJlZC9yYWFpbi1jb21wYXJlLXN0YWNrL3JhYWluLWNvbXBhcmUtc3RhY2suY29tcG9uZW50LnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFDRSxZQUFBO0FBQ0Y7O0FBRUE7RUFDRSxnQkFBQTtBQUNGOztBQUVBO0VBQ0UsMENBQUE7RUFDQSxnQkFBQTtBQUNGOztBQUVBO0VBQ0UsbUJBQUE7QUFDRjs7QUFFQTtFQUNFLHFCQUFBO0VBQ0EsaUJBQUE7RUFDQSxnQkFBQTtFQUNBLGtCQUFBO0VBQ0EsaUJBQUE7RUFDQSxnQkFBQTtBQUNGO0FBQ0U7RUFDRSwwQ0FBQTtFQUNBLCtCQUFBO0FBQ0o7QUFFRTtFQUNFLHlDQUFBO0VBQ0EsOEJBQUE7QUFBSjtBQUdFO0VBQ0UseUNBQUE7RUFDQSw4QkFBQTtBQURKIiwic291cmNlc0NvbnRlbnQiOlsiI2NhcmQtbWF0cml4IHtcbiAgd2lkdGg6IDE3MHB4O1xufVxuXG4uY2FyZC1jb21wYXJlIHtcbiAgbWluLXdpZHRoOiAzMDBweDtcbn1cblxuLmNhcmQtY29tcGFyZS1jdW11bGF0aXZlIHtcbiAgYm9yZGVyOiAycHggc29saWQgdmFyKC0taW9uLWNvbG9yLXdhcm5pbmcpO1xuICBtYXJnaW4tdG9wOiAxNnB4O1xufVxuXG5pb24tY2FyZC1oZWFkZXIge1xuICBwYWRkaW5nOiAwIDAgMCAxMHB4O1xufVxuXG4ucXVhbGl0eS1pbmRpY2F0b3Ige1xuICBkaXNwbGF5OiBpbmxpbmUtYmxvY2s7XG4gIG1hcmdpbi1sZWZ0OiAxMHB4O1xuICBwYWRkaW5nOiAycHggOHB4O1xuICBib3JkZXItcmFkaXVzOiA0cHg7XG4gIGZvbnQtd2VpZ2h0OiBib2xkO1xuICBmb250LXNpemU6IDAuOWVtO1xuXG4gICYucXVhbGl0eS1nb29kIHtcbiAgICBib3JkZXI6IDFweCBzb2xpZCB2YXIoLS1pb24tY29sb3Itc3VjY2Vzcyk7XG4gICAgY29sb3I6IHZhcigtLWlvbi1jb2xvci1zdWNjZXNzKTtcbiAgfVxuXG4gICYucXVhbGl0eS1tZWRpdW0ge1xuICAgIGJvcmRlcjogMXB4IHNvbGlkIHZhcigtLWlvbi1jb2xvci1tZWRpdW0pO1xuICAgIGNvbG9yOiB2YXIoLS1pb24tY29sb3ItbWVkaXVtKTtcbiAgfVxuXG4gICYucXVhbGl0eS1iYWQge1xuICAgIGJvcmRlcjogMXB4IHNvbGlkIHZhcigtLWlvbi1jb2xvci1kYW5nZXIpO1xuICAgIGNvbG9yOiB2YXIoLS1pb24tY29sb3ItZGFuZ2VyKTtcbiAgfVxufVxuIl0sInNvdXJjZVJvb3QiOiIifQ== */"]
    });
  }
}

/***/ }),

/***/ 39337:
/*!******************************************************************!*\
  !*** ./src/core/shared/raain-compare/raain-compare.component.ts ***!
  \******************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "RaainCompareComponent": () => (/* binding */ RaainCompareComponent)
/* harmony export */ });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ 22560);
/* harmony import */ var raain_ui__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! raain-ui */ 88666);
/* harmony import */ var raain_ui__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(raain_ui__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ 94666);




const _c0 = ["canvasElement"];
function RaainCompareComponent_h1_1_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "h1");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
  }
  if (rf & 2) {
    const ctx_r0 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate"](ctx_r0.remarks);
  }
}
class RaainCompareComponent {
  constructor(ngZone) {
    this.ngZone = ngZone;
    this.selectedPoint = new _angular_core__WEBPACK_IMPORTED_MODULE_1__.EventEmitter();
    this.onSizeChanged = () => {};
  }
  ngAfterViewChecked() {
    this.create();
  }
  ngOnChanges(changes) {
    this.change(changes);
  }
  ngOnDestroy() {
    this.delete();
  }
  onClick(point) {
    this.selectedPoint.emit({
      point,
      compareIndex: this.compareIndex
    });
  }
  changeData(newData, newMaxLine) {
    let changed = false;
    const dataset = this.compareElement?.chart?.data?.datasets[0];
    if (dataset) {
      dataset.data = newData;
      changed = true;
    }
    const line = this.compareElement?.chart?.data?.datasets[1];
    if (line) {
      line.data = newMaxLine;
      changed = true;
    }
    if (changed) {
      this.compareElement?.chart?.update();
    }
  }
  onResize(event) {
    this.updateMapSize();
  }
  create() {
    if (this.created) {
      return;
    }
    this.created = true;
    const factory = new raain_ui__WEBPACK_IMPORTED_MODULE_0__.ElementsFactory();
    this.compareElement = factory.createCompare(this.canvasElement.nativeElement, new raain_ui__WEBPACK_IMPORTED_MODULE_0__.CompareElementInput(this.points.map(p => {
      return {
        x: p.x,
        y: p.y,
        r: p.r,
        name: p.name,
        id: p.id
      };
    }), this.pointMax, this.onClick.bind(this)));
  }
  delete() {
    if (this.compareElement) {
      this.compareElement?.chart?.destroy();
    }
    this.created = false;
  }
  change(changes) {
    if (changes.points) {
      this.changeData(this.points, [{
        x: 0,
        y: 0
      }, this.pointMax]);
    }
  }
  updateMapSize() {
    const mapDivWidth = this.canvasElement.nativeElement.parentNode?.parentNode['clientWidth'];
    const padding = 20;
    let currentWidth = mapDivWidth || window.innerWidth || document.documentElement.clientWidth || document.body.clientWidth;
    const currentHeight = this.currentHeight || window.innerHeight || document.documentElement.clientHeight || document.body.clientHeight;
    currentWidth -= padding;
    this.currentWidth = currentWidth;
    this.currentHeight = currentHeight;
    this.ngZone.run(() => {
      this.onSizeChanged();
    });
  }
  static {
    this.ɵfac = function RaainCompareComponent_Factory(t) {
      return new (t || RaainCompareComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](_angular_core__WEBPACK_IMPORTED_MODULE_1__.NgZone));
    };
  }
  static {
    this.ɵcmp = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineComponent"]({
      type: RaainCompareComponent,
      selectors: [["raain-compare"]],
      viewQuery: function RaainCompareComponent_Query(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵviewQuery"](_c0, 5);
        }
        if (rf & 2) {
          let _t;
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵqueryRefresh"](_t = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵloadQuery"]()) && (ctx.canvasElement = _t.first);
        }
      },
      hostBindings: function RaainCompareComponent_HostBindings(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("resize", function RaainCompareComponent_resize_HostBindingHandler($event) {
            return ctx.onResize($event);
          }, false, _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵresolveWindow"]);
        }
      },
      inputs: {
        points: "points",
        pointMax: "pointMax",
        remarks: "remarks",
        compareIndex: "compareIndex",
        currentHeight: "currentHeight",
        currentWidth: "currentWidth"
      },
      outputs: {
        selectedPoint: "selectedPoint"
      },
      features: [_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵNgOnChangesFeature"]],
      decls: 4,
      vars: 1,
      consts: [["id", "canvas-container"], [4, "ngIf"], ["canvasElement", ""]],
      template: function RaainCompareComponent_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "div", 0);
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](1, RaainCompareComponent_h1_1_Template, 2, 1, "h1", 1);
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](2, "canvas", null, 2);
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        }
        if (rf & 2) {
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", ctx.remarks);
        }
      },
      dependencies: [_angular_common__WEBPACK_IMPORTED_MODULE_2__.NgIf],
      styles: ["\n/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8uL3NyYy9jb3JlL3NoYXJlZC9yYWFpbi1jb21wYXJlL3JhYWluLWNvbXBhcmUuY29tcG9uZW50LnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7Ozs7OztDQUFBIiwic291cmNlc0NvbnRlbnQiOlsiLypcbiNjYW52YXMtY29udGFpbmVyIHtcbiAgcG9zaXRpb246IHJlbGF0aXZlO1xuICBoZWlnaHQ6IDMwdmg7XG4gIHdpZHRoOiA0MHZ3O1xufVxuKi9cbiJdLCJzb3VyY2VSb290IjoiIn0= */"]
    });
  }
}

/***/ }),

/***/ 45745:
/*!******************************************************************************!*\
  !*** ./src/core/shared/raain-configuration/raain-configuration.component.ts ***!
  \******************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "RaainConfigurationComponent": () => (/* binding */ RaainConfigurationComponent)
/* harmony export */ });
/* harmony import */ var _opt_atlassian_pipelines_agent_build_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/esm/asyncToGenerator.js */ 71670);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ 22560);
/* harmony import */ var raain_ui__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! raain-ui */ 88666);
/* harmony import */ var raain_ui__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(raain_ui__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _xytype__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../xytype */ 8217);
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @ionic/angular */ 93819);






const _c0 = ["canvasElement"];
class RaainConfigurationComponent {
  constructor(ngZone) {
    this.ngZone = ngZone;
    this.changedPoints = new _angular_core__WEBPACK_IMPORTED_MODULE_3__.EventEmitter();
    this.minPoint = {
      x: 0,
      y: 0
    };
    this.maxPoint = {
      x: 300,
      y: 100
    };
    this.logStyle = false;
    this.onSizeChanged = () => {};
    this.onDrag = e => {
      this.changedPoints.emit(this.points);
    };
  }
  ngAfterViewChecked() {
    this.create();
  }
  ngOnChanges(changes) {
    this.change(changes);
  }
  ngOnDestroy() {
    this.delete();
  }
  reset() {
    var _this = this;
    return (0,_opt_atlassian_pipelines_agent_build_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_0__["default"])(function* (count = 4) {
      const points = [];
      for (let c = 0; c < count; c++) {
        points.push(new _xytype__WEBPACK_IMPORTED_MODULE_2__.XYType((c + 1) * 10, (c + 1) * 0.1));
      }
      _this.points = points;
      yield _this.delete();
      _this.create();
    }).apply(this, arguments);
  }
  onResize(event) {
    // this.updateMapSize();
  }
  create() {
    if (this.created) {
      return;
    }
    this.created = true;
    let inputs = new raain_ui__WEBPACK_IMPORTED_MODULE_1__.ConfigurationElementInput(this.points, this.minPoint, this.maxPoint, false, [], this.onDrag);
    if (this.logStyle) {
      const confTransparency = 0.3;
      inputs = new raain_ui__WEBPACK_IMPORTED_MODULE_1__.ConfigurationElementInput(this.points, this.minPoint, this.maxPoint, true, [{
        color: raain_ui__WEBPACK_IMPORTED_MODULE_1__.Tools.getTransparency(raain_ui__WEBPACK_IMPORTED_MODULE_1__.ChartScaleColors[0], confTransparency),
        yStart: Math.log10(0.1),
        yEnd: Math.log10(0.4)
      }, {
        color: raain_ui__WEBPACK_IMPORTED_MODULE_1__.Tools.getTransparency(raain_ui__WEBPACK_IMPORTED_MODULE_1__.ChartScaleColors[0.4], confTransparency),
        yStart: Math.log10(0.4),
        yEnd: Math.log10(1)
      }, {
        color: raain_ui__WEBPACK_IMPORTED_MODULE_1__.Tools.getTransparency(raain_ui__WEBPACK_IMPORTED_MODULE_1__.ChartScaleColors[1], confTransparency),
        yStart: Math.log10(1),
        yEnd: Math.log10(3)
      }, {
        color: raain_ui__WEBPACK_IMPORTED_MODULE_1__.Tools.getTransparency(raain_ui__WEBPACK_IMPORTED_MODULE_1__.ChartScaleColors[3], confTransparency),
        yStart: Math.log10(3),
        yEnd: Math.log10(10)
      }, {
        color: raain_ui__WEBPACK_IMPORTED_MODULE_1__.Tools.getTransparency(raain_ui__WEBPACK_IMPORTED_MODULE_1__.ChartScaleColors[10], confTransparency),
        yStart: Math.log10(10),
        yEnd: Math.log10(20)
      }, {
        color: raain_ui__WEBPACK_IMPORTED_MODULE_1__.Tools.getTransparency(raain_ui__WEBPACK_IMPORTED_MODULE_1__.ChartScaleColors[20], confTransparency),
        yStart: Math.log10(20),
        yEnd: Math.log10(30)
      }, {
        color: raain_ui__WEBPACK_IMPORTED_MODULE_1__.Tools.getTransparency(raain_ui__WEBPACK_IMPORTED_MODULE_1__.ChartScaleColors[30], confTransparency),
        yStart: Math.log10(30),
        yEnd: Math.log10(50)
      }, {
        color: raain_ui__WEBPACK_IMPORTED_MODULE_1__.Tools.getTransparency(raain_ui__WEBPACK_IMPORTED_MODULE_1__.ChartScaleColors[50], confTransparency),
        yStart: Math.log10(50),
        yEnd: Math.log10(100)
      }, {
        color: raain_ui__WEBPACK_IMPORTED_MODULE_1__.Tools.getTransparency(raain_ui__WEBPACK_IMPORTED_MODULE_1__.ChartScaleColors[100], confTransparency),
        yStart: Math.log10(100),
        yEnd: Math.log10(150)
      }, {
        color: raain_ui__WEBPACK_IMPORTED_MODULE_1__.Tools.getTransparency(raain_ui__WEBPACK_IMPORTED_MODULE_1__.ChartScaleColors[150], confTransparency),
        yStart: Math.log10(150),
        yEnd: Math.log10(200)
      }, {
        color: raain_ui__WEBPACK_IMPORTED_MODULE_1__.Tools.getTransparency(raain_ui__WEBPACK_IMPORTED_MODULE_1__.ChartScaleColors[200], confTransparency),
        yStart: Math.log10(200),
        yEnd: Math.log10(250)
      }, {
        color: raain_ui__WEBPACK_IMPORTED_MODULE_1__.Tools.getTransparency(raain_ui__WEBPACK_IMPORTED_MODULE_1__.ChartScaleColors[250], confTransparency),
        yStart: Math.log10(250),
        yEnd: Math.log10(300)
      }, {
        color: raain_ui__WEBPACK_IMPORTED_MODULE_1__.Tools.getTransparency(raain_ui__WEBPACK_IMPORTED_MODULE_1__.ChartScaleColors[300], confTransparency),
        yStart: Math.log10(300),
        yEnd: Math.log10(500)
      }], this.onDrag);
    }
    this.ngZone.runOutsideAngular(() => {
      setTimeout(() => {
        const factory = new raain_ui__WEBPACK_IMPORTED_MODULE_1__.ElementsFactory();
        this.configurationElement = factory.createConfiguration(this.canvasElement.nativeElement, inputs);
      }, 10);
    });
  }
  delete() {
    var _this2 = this;
    return (0,_opt_atlassian_pipelines_agent_build_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_0__["default"])(function* () {
      _this2.configurationElement?.chart?.destroy();
      _this2.created = false;
    })();
  }
  change(changes) {
    var _this3 = this;
    return (0,_opt_atlassian_pipelines_agent_build_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_0__["default"])(function* () {
      // console.log('changed', changes);
      yield _this3.delete();
      _this3.create();
    })();
  }
  updateMapSize() {
    const mapDivWidth = this.canvasElement.nativeElement.parentNode?.parentNode['clientWidth'];
    const padding = 20;
    let currentWidth = mapDivWidth || window.innerWidth || document.documentElement.clientWidth || document.body.clientWidth;
    const currentHeight = this.currentHeight || window.innerHeight || document.documentElement.clientHeight || document.body.clientHeight;
    currentWidth -= padding;
    this.currentWidth = currentWidth;
    this.currentHeight = currentHeight;
    this.ngZone.run(() => {
      this.onSizeChanged();
    });
  }
  static {
    this.ɵfac = function RaainConfigurationComponent_Factory(t) {
      return new (t || RaainConfigurationComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵdirectiveInject"](_angular_core__WEBPACK_IMPORTED_MODULE_3__.NgZone));
    };
  }
  static {
    this.ɵcmp = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵdefineComponent"]({
      type: RaainConfigurationComponent,
      selectors: [["raain-configuration"]],
      viewQuery: function RaainConfigurationComponent_Query(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵviewQuery"](_c0, 5);
        }
        if (rf & 2) {
          let _t;
          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵqueryRefresh"](_t = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵloadQuery"]()) && (ctx.canvasElement = _t.first);
        }
      },
      hostBindings: function RaainConfigurationComponent_HostBindings(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵlistener"]("resize", function RaainConfigurationComponent_resize_HostBindingHandler($event) {
            return ctx.onResize($event);
          }, false, _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵresolveWindow"]);
        }
      },
      inputs: {
        points: "points",
        currentHeight: "currentHeight",
        currentWidth: "currentWidth",
        minPoint: "minPoint",
        maxPoint: "maxPoint",
        logStyle: "logStyle"
      },
      outputs: {
        changedPoints: "changedPoints"
      },
      features: [_angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵNgOnChangesFeature"]],
      decls: 16,
      vars: 2,
      consts: [["id", "col-container", "size-xs", "10"], ["id", "canvas-container"], ["canvasElement", ""], ["size-xs", "2"], ["color", "light", "shape", "round", "size", "small", 3, "click"]],
      template: function RaainConfigurationComponent_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](0, "ion-grid")(1, "ion-row")(2, "ion-col", 0)(3, "div", 1);
          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelement"](4, "canvas", null, 2);
          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]()();
          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](6, "ion-col", 3)(7, "ion-button", 4);
          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵlistener"]("click", function RaainConfigurationComponent_Template_ion_button_click_7_listener() {
            return ctx.reset(2);
          });
          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](8, "2");
          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelement"](9, "br");
          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](10, "ion-button", 4);
          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵlistener"]("click", function RaainConfigurationComponent_Template_ion_button_click_10_listener() {
            return ctx.reset(4);
          });
          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](11, "4");
          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelement"](12, "br");
          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](13, "ion-button", 4);
          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵlistener"]("click", function RaainConfigurationComponent_Template_ion_button_click_13_listener() {
            return ctx.reset(6);
          });
          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](14, "6");
          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelement"](15, "br");
          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]()()();
        }
        if (rf & 2) {
          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](3);
          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵstyleProp"]("height", ctx.currentHeight, "px");
        }
      },
      dependencies: [_ionic_angular__WEBPACK_IMPORTED_MODULE_4__.IonButton, _ionic_angular__WEBPACK_IMPORTED_MODULE_4__.IonCol, _ionic_angular__WEBPACK_IMPORTED_MODULE_4__.IonGrid, _ionic_angular__WEBPACK_IMPORTED_MODULE_4__.IonRow],
      styles: ["#canvas-container[_ngcontent-%COMP%] {\n  position: relative;\n  width: 100%;\n  height: 100%;\n}\n/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8uL3NyYy9jb3JlL3NoYXJlZC9yYWFpbi1jb25maWd1cmF0aW9uL3JhYWluLWNvbmZpZ3VyYXRpb24uY29tcG9uZW50LnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7Ozs7Q0FBQTtBQU1BO0VBQ0Usa0JBQUE7RUFDQSxXQUFBO0VBQ0EsWUFBQTtBQUFGOztBQUdBOzs7Ozs7OztDQUFBIiwic291cmNlc0NvbnRlbnQiOlsiLypcbiNjb2wtY29udGFpbmVyIHtcbiAgIHdpZHRoOiA4MDBweDtcbn1cbiovXG5cbiNjYW52YXMtY29udGFpbmVyIHtcbiAgcG9zaXRpb246IHJlbGF0aXZlO1xuICB3aWR0aDogMTAwJTtcbiAgaGVpZ2h0OiAxMDAlO1xufVxuXG4vKlxuY2FudmFzIHtcbiAgcG9zaXRpb246IGFic29sdXRlO1xuICBsZWZ0OiAwO1xuICB0b3A6IDA7XG4gIHJpZ2h0OiAwO1xuICBib3R0b206IDA7XG59XG4qL1xuIl0sInNvdXJjZVJvb3QiOiIifQ== */"]
    });
  }
}

/***/ }),

/***/ 4528:
/*!****************************************************************************!*\
  !*** ./src/core/shared/raain-date-dynamic/raain-date-dynamic.component.ts ***!
  \****************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "RaainDateDynamicComponent": () => (/* binding */ RaainDateDynamicComponent)
/* harmony export */ });
/* harmony import */ var _opt_atlassian_pipelines_agent_build_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/esm/asyncToGenerator.js */ 71670);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ 22560);
/* harmony import */ var raain_ui__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! raain-ui */ 88666);
/* harmony import */ var raain_ui__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(raain_ui__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/common */ 94666);
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @ionic/angular */ 93819);






const _c0 = ["canvasElement"];
function RaainDateDynamicComponent_ion_button_11_Template(rf, ctx) {
  if (rf & 1) {
    const _r3 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](0, "ion-button", 5);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵlistener"]("click", function RaainDateDynamicComponent_ion_button_11_Template_ion_button_click_0_listener() {
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵrestoreView"](_r3);
      const ctx_r2 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵnextContext"]();
      return _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵresetView"](ctx_r2.focusReset());
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](1, " all dates ");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
  }
}
class RaainDateDynamicComponent {
  constructor(ngZone) {
    this.ngZone = ngZone;
    this.changedDate = new _angular_core__WEBPACK_IMPORTED_MODULE_2__.EventEmitter();
    this.focusDate = new Date();
    this.focusRange = raain_ui__WEBPACK_IMPORTED_MODULE_1__.DateRange.CENTURY;
    this.onSizeChanged = () => {};
  }
  ngAfterViewChecked() {
    this.create();
  }
  ngOnChanges(changes) {
    this.change(changes);
  }
  ngOnDestroy() {
    this.delete();
  }
  focusPrevious() {
    this.dynamicDateStatusElement.focusPrevious();
  }
  focusReset() {
    this.dynamicDateStatusElement.focusReset();
  }
  focusNext() {
    this.dynamicDateStatusElement.focusNext();
  }
  onResize(event) {
    this.updateMapSize();
  }
  // Map style to a valid Chart.js chart type
  mapStyleToChartType(style) {
    // List of valid Chart.js chart types
    const validChartTypes = ['line', 'bar', 'radar', 'doughnut', 'pie', 'polarArea', 'bubble', 'scatter'];
    // If style is a valid chart type, return it, otherwise default to 'line'
    return validChartTypes.includes(style) ? style : 'line';
  }
  create() {
    var _this = this;
    return (0,_opt_atlassian_pipelines_agent_build_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_0__["default"])(function* () {
      if (_this.created) {
        return;
      }
      _this.created = true;
      const monthSampleData = yield _this.fetchData(new Date(), raain_ui__WEBPACK_IMPORTED_MODULE_1__.DateRange.MONTH);
      const factory = new raain_ui__WEBPACK_IMPORTED_MODULE_1__.ElementsFactory();
      try {
        _this.dynamicDateStatusElement = factory.createDynamicDateStatus(_this.canvasElement.nativeElement, new raain_ui__WEBPACK_IMPORTED_MODULE_1__.DynamicDateStatusElementInput( /*#__PURE__*/function () {
          var _ref = (0,_opt_atlassian_pipelines_agent_build_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_0__["default"])(function* (focusDate, focusRange) {
            const data = yield _this.fetchData(focusDate, focusRange);
            return data.map(item => ({
              ...item,
              style: _this.mapStyleToChartType(item.style)
            }));
          });
          return function (_x, _x2) {
            return _ref.apply(this, arguments);
          };
        }(), {
          dataLength: monthSampleData.length,
          chartMinValue: -10,
          chartMaxValue: 100,
          onLastClick: date => {
            _this.changedDate.emit(date);
          }
        }));
      } catch (e) {
        console.warn('Dynamic focus creation issue', e);
      }
    })();
  }
  delete() {
    var _this2 = this;
    return (0,_opt_atlassian_pipelines_agent_build_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_0__["default"])(function* () {
      _this2.dynamicDateStatusElement?.chart?.destroy();
      _this2.created = false;
    })();
  }
  change(changes) {
    var _this3 = this;
    return (0,_opt_atlassian_pipelines_agent_build_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_0__["default"])(function* () {
      yield _this3.delete();
      yield _this3.create();
    })();
  }
  updateMapSize() {
    const mapDivWidth = this.canvasElement.nativeElement.parentNode?.parentNode['clientWidth'];
    const padding = 20;
    let currentWidth = mapDivWidth || window.innerWidth || document.documentElement.clientWidth || document.body.clientWidth;
    const currentHeight = this.currentHeight || window.innerHeight || document.documentElement.clientHeight || document.body.clientHeight;
    currentWidth -= padding;
    this.currentWidth = currentWidth;
    this.currentHeight = currentHeight;
    this.ngZone.run(() => {
      this.onSizeChanged();
    });
  }
  static {
    this.ɵfac = function RaainDateDynamicComponent_Factory(t) {
      return new (t || RaainDateDynamicComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdirectiveInject"](_angular_core__WEBPACK_IMPORTED_MODULE_2__.NgZone));
    };
  }
  static {
    this.ɵcmp = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdefineComponent"]({
      type: RaainDateDynamicComponent,
      selectors: [["raain-date-dynamic"]],
      viewQuery: function RaainDateDynamicComponent_Query(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵviewQuery"](_c0, 5);
        }
        if (rf & 2) {
          let _t;
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵqueryRefresh"](_t = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵloadQuery"]()) && (ctx.canvasElement = _t.first);
        }
      },
      hostBindings: function RaainDateDynamicComponent_HostBindings(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵlistener"]("resize", function RaainDateDynamicComponent_resize_HostBindingHandler($event) {
            return ctx.onResize($event);
          }, false, _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵresolveWindow"]);
        }
      },
      inputs: {
        points: "points",
        focusDate: "focusDate",
        focusRange: "focusRange",
        withoutAll: "withoutAll",
        currentHeight: "currentHeight",
        fetchData: "fetchData"
      },
      outputs: {
        changedDate: "changedDate"
      },
      features: [_angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵNgOnChangesFeature"]],
      decls: 15,
      vars: 3,
      consts: [["id", "raain-date-dynamic"], ["id", "col-container", "size-sm", "12"], ["id", "canvas-container"], ["canvasElement", ""], ["offset-sm", "4", "size-sm", "1", 1, "ion-text-right"], ["color", "medium", "fill", "clear", 3, "click"], ["name", "chevron-back-outline"], ["size-sm", "2", 1, "ion-text-center"], ["color", "medium", "fill", "clear", 3, "click", 4, "ngIf"], ["size-sm", "1", 1, "ion-text-left"], ["name", "chevron-forward-outline"]],
      template: function RaainDateDynamicComponent_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](0, "ion-grid", 0)(1, "ion-row")(2, "ion-col", 1)(3, "div", 2);
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](4, "canvas", null, 3);
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]()()();
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](6, "ion-row")(7, "ion-col", 4)(8, "ion-button", 5);
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵlistener"]("click", function RaainDateDynamicComponent_Template_ion_button_click_8_listener() {
            return ctx.focusPrevious();
          });
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](9, "ion-icon", 6);
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]()();
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](10, "ion-col", 7);
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtemplate"](11, RaainDateDynamicComponent_ion_button_11_Template, 2, 0, "ion-button", 8);
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](12, "ion-col", 9)(13, "ion-button", 5);
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵlistener"]("click", function RaainDateDynamicComponent_Template_ion_button_click_13_listener() {
            return ctx.focusNext();
          });
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](14, "ion-icon", 10);
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]()()()();
        }
        if (rf & 2) {
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](3);
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵstyleProp"]("height", ctx.currentHeight, "px");
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](8);
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngIf", !ctx.withoutAll);
        }
      },
      dependencies: [_angular_common__WEBPACK_IMPORTED_MODULE_3__.NgIf, _ionic_angular__WEBPACK_IMPORTED_MODULE_4__.IonButton, _ionic_angular__WEBPACK_IMPORTED_MODULE_4__.IonCol, _ionic_angular__WEBPACK_IMPORTED_MODULE_4__.IonGrid, _ionic_angular__WEBPACK_IMPORTED_MODULE_4__.IonIcon, _ionic_angular__WEBPACK_IMPORTED_MODULE_4__.IonRow],
      styles: ["#canvas-container[_ngcontent-%COMP%] {\n  position: relative;\n}\n/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8uL3NyYy9jb3JlL3NoYXJlZC9yYWFpbi1kYXRlLWR5bmFtaWMvcmFhaW4tZGF0ZS1keW5hbWljLmNvbXBvbmVudC5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQU1BO0VBQ0Usa0JBQUE7QUFMRiIsInNvdXJjZXNDb250ZW50IjpbIlxuI2NvbC1jb250YWluZXIge1xuICAvLyB3aWR0aDogMTAwJTtcbiAgLy8gaGVpZ2h0OiAxMDAlO1xufVxuXG4jY2FudmFzLWNvbnRhaW5lciB7XG4gIHBvc2l0aW9uOiByZWxhdGl2ZTtcbiAgLy8gbWluLXdpZHRoOiA2MDBweDtcbiAgLy8gaGVpZ2h0OiAxMDAlO1xufVxuIl0sInNvdXJjZVJvb3QiOiIifQ== */"]
    });
  }
}

/***/ }),

/***/ 25320:
/*!************************************************************************!*\
  !*** ./src/core/shared/raain-date-focus/raain-date-focus.component.ts ***!
  \************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "RaainDateFocusComponent": () => (/* binding */ RaainDateFocusComponent)
/* harmony export */ });
/* harmony import */ var _opt_atlassian_pipelines_agent_build_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/esm/asyncToGenerator.js */ 71670);
/* harmony import */ var raain_ui__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! raain-ui */ 88666);
/* harmony import */ var raain_ui__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(raain_ui__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ 22560);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/common */ 94666);
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @ionic/angular */ 93819);





const _c0 = ["canvasElement"];
function RaainDateFocusComponent_ion_button_11_Template(rf, ctx) {
  if (rf & 1) {
    const _r3 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](0, "ion-button", 4);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵlistener"]("click", function RaainDateFocusComponent_ion_button_11_Template_ion_button_click_0_listener() {
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵrestoreView"](_r3);
      const ctx_r2 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵnextContext"]();
      return _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵresetView"](ctx_r2.focusReset());
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](1, " all dates ");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
  }
}
class RaainDateFocusComponent {
  constructor(ngZone) {
    this.ngZone = ngZone;
    this.focusDate = new Date();
    this.focusRange = raain_ui__WEBPACK_IMPORTED_MODULE_1__.DateRange.CENTURY;
    this.onSizeChanged = () => {};
  }
  ngAfterViewChecked() {
    this.create();
  }
  ngOnChanges(changes) {
    this.change(changes);
  }
  ngOnDestroy() {
    this.delete();
  }
  focusPrevious() {
    this.dateStatusElement.focusPrevious();
  }
  focusReset() {
    this.dateStatusElement.focusReset();
  }
  focusNext() {
    this.dateStatusElement.focusNext();
  }
  onResize(event) {
    this.updateMapSize();
  }
  create() {
    if (this.created) {
      return;
    }
    this.created = true;
    // this.ngZone.runOutsideAngular(() => {
    //  setTimeout(() => {
    const factory = new raain_ui__WEBPACK_IMPORTED_MODULE_1__.ElementsFactory();
    try {
      this.dateStatusElement = factory.createDateStatus(this.canvasElement.nativeElement, new raain_ui__WEBPACK_IMPORTED_MODULE_1__.DateStatusElementInput(this.points, this.focusDate, this.focusRange));
    } catch (e) {
      console.warn('Focus creation issue', e);
    }
    //  }, 50);
    // });
  }

  delete() {
    var _this = this;
    return (0,_opt_atlassian_pipelines_agent_build_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_0__["default"])(function* () {
      yield _this.dateStatusElement?.chart?.destroy();
      _this.created = false;
    })();
  }
  change(changes) {
    var _this2 = this;
    return (0,_opt_atlassian_pipelines_agent_build_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_0__["default"])(function* () {
      yield _this2.delete();
      _this2.create();
    })();
  }
  updateMapSize() {
    const mapDivWidth = this.canvasElement.nativeElement.parentNode?.parentNode['clientWidth'];
    const padding = 20;
    let currentWidth = mapDivWidth || window.innerWidth || document.documentElement.clientWidth || document.body.clientWidth;
    const currentHeight = this.currentHeight || window.innerHeight || document.documentElement.clientHeight || document.body.clientHeight;
    currentWidth -= padding;
    this.currentWidth = currentWidth;
    this.currentHeight = currentHeight;
    this.ngZone.run(() => {
      this.onSizeChanged();
    });
  }
  static {
    this.ɵfac = function RaainDateFocusComponent_Factory(t) {
      return new (t || RaainDateFocusComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdirectiveInject"](_angular_core__WEBPACK_IMPORTED_MODULE_2__.NgZone));
    };
  }
  static {
    this.ɵcmp = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdefineComponent"]({
      type: RaainDateFocusComponent,
      selectors: [["raain-date-focus"]],
      viewQuery: function RaainDateFocusComponent_Query(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵviewQuery"](_c0, 5);
        }
        if (rf & 2) {
          let _t;
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵqueryRefresh"](_t = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵloadQuery"]()) && (ctx.canvasElement = _t.first);
        }
      },
      hostBindings: function RaainDateFocusComponent_HostBindings(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵlistener"]("resize", function RaainDateFocusComponent_resize_HostBindingHandler($event) {
            return ctx.onResize($event);
          }, false, _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵresolveWindow"]);
        }
      },
      inputs: {
        points: "points",
        focusDate: "focusDate",
        focusRange: "focusRange",
        withoutAll: "withoutAll",
        currentHeight: "currentHeight"
      },
      features: [_angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵNgOnChangesFeature"]],
      decls: 15,
      vars: 3,
      consts: [["id", "col-container", "size-sm", "12"], ["id", "canvas-container"], ["canvasElement", ""], ["offset-sm", "4", "size-sm", "1", 1, "ion-text-right"], ["color", "medium", "fill", "clear", 3, "click"], ["name", "chevron-back-outline"], ["size-sm", "2", 1, "ion-text-center"], ["color", "medium", "fill", "clear", 3, "click", 4, "ngIf"], ["size-sm", "1", 1, "ion-text-left"], ["name", "chevron-forward-outline"]],
      template: function RaainDateFocusComponent_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](0, "ion-grid")(1, "ion-row")(2, "ion-col", 0)(3, "div", 1);
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](4, "canvas", null, 2);
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]()()();
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](6, "ion-row")(7, "ion-col", 3)(8, "ion-button", 4);
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵlistener"]("click", function RaainDateFocusComponent_Template_ion_button_click_8_listener() {
            return ctx.focusPrevious();
          });
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](9, "ion-icon", 5);
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]()();
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](10, "ion-col", 6);
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtemplate"](11, RaainDateFocusComponent_ion_button_11_Template, 2, 0, "ion-button", 7);
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](12, "ion-col", 8)(13, "ion-button", 4);
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵlistener"]("click", function RaainDateFocusComponent_Template_ion_button_click_13_listener() {
            return ctx.focusNext();
          });
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](14, "ion-icon", 9);
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]()()()();
        }
        if (rf & 2) {
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](3);
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵstyleProp"]("height", ctx.currentHeight, "px");
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](8);
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngIf", !ctx.withoutAll);
        }
      },
      dependencies: [_angular_common__WEBPACK_IMPORTED_MODULE_3__.NgIf, _ionic_angular__WEBPACK_IMPORTED_MODULE_4__.IonButton, _ionic_angular__WEBPACK_IMPORTED_MODULE_4__.IonCol, _ionic_angular__WEBPACK_IMPORTED_MODULE_4__.IonGrid, _ionic_angular__WEBPACK_IMPORTED_MODULE_4__.IonIcon, _ionic_angular__WEBPACK_IMPORTED_MODULE_4__.IonRow],
      styles: ["#canvas-container[_ngcontent-%COMP%] {\n  position: relative;\n}\n/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8uL3NyYy9jb3JlL3NoYXJlZC9yYWFpbi1kYXRlLWZvY3VzL3JhYWluLWRhdGUtZm9jdXMuY29tcG9uZW50LnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBTUE7RUFDRSxrQkFBQTtBQUxGIiwic291cmNlc0NvbnRlbnQiOlsiXG4jY29sLWNvbnRhaW5lciB7XG4gIC8vIHdpZHRoOiAxMDAlO1xuICAvLyBoZWlnaHQ6IDEwMCU7XG59XG5cbiNjYW52YXMtY29udGFpbmVyIHtcbiAgcG9zaXRpb246IHJlbGF0aXZlO1xuICAvLyBtaW4td2lkdGg6IDYwMHB4O1xuICAvLyBoZWlnaHQ6IDEwMCU7XG59XG4iXSwic291cmNlUm9vdCI6IiJ9 */"]
    });
  }
}

/***/ }),

/***/ 25712:
/*!******************************************************************!*\
  !*** ./src/core/shared/raain-details/raain-details.component.ts ***!
  \******************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "RaainDetailsComponent": () => (/* binding */ RaainDetailsComponent)
/* harmony export */ });
/* harmony import */ var _opt_atlassian_pipelines_agent_build_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/esm/asyncToGenerator.js */ 71670);
/* harmony import */ var raain_model__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! raain-model */ 70034);
/* harmony import */ var raain_model__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(raain_model__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var raain_ui__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! raain-ui */ 88666);
/* harmony import */ var raain_ui__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(raain_ui__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _tools__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../tools */ 1987);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! @angular/core */ 22560);
/* harmony import */ var _storage_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../storage.service */ 8184);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! @angular/common */ 94666);
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! @angular/forms */ 2508);
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! @ionic/angular */ 93819);
/* harmony import */ var _raain_map_raain_map_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../raain-map/raain-map.component */ 50121);
/* harmony import */ var _raain_compare_stack_raain_compare_stack_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../raain-compare-stack/raain-compare-stack.component */ 46341);
/* harmony import */ var _raain_date_focus_raain_date_focus_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../raain-date-focus/raain-date-focus.component */ 25320);
/* harmony import */ var _raain_date_dynamic_raain_date_dynamic_component__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../raain-date-dynamic/raain-date-dynamic.component */ 4528);
/* harmony import */ var _cumulative_selector_cumulative_selector_component__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ../cumulative-selector/cumulative-selector.component */ 98768);














const _c0 = ["cumulativeToggle"];
const _c1 = ["performanceCanvas"];
function RaainDetailsComponent_div_0_ion_select_option_34_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementStart"](0, "ion-select-option", 43);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵtext"](1, "24 hours");
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementEnd"]();
  }
}
function RaainDetailsComponent_div_0_div_37_Template(rf, ctx) {
  if (rf & 1) {
    const _r13 = _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementStart"](0, "div", 44);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵlistener"]("click", function RaainDetailsComponent_div_0_div_37_Template_div_click_0_listener($event) {
      _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵrestoreView"](_r13);
      const ctx_r12 = _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵnextContext"](2);
      return _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵresetView"](ctx_r12.onCumulativeToggleClick($event));
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementStart"](1, "ion-label");
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵtext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelement"](3, "ion-toggle", 45, 46);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementEnd"]();
  }
  if (rf & 2) {
    const ctx_r2 = _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵclassProp"]("text-primary", ctx_r2.toggleCumulative);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵtextInterpolate1"](" ", ctx_r2.toggleCumulative ? "Cumulative" : "Granular", " ");
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵproperty"]("checked", ctx_r2.toggleCumulative);
  }
}
function RaainDetailsComponent_div_0_div_38_Template(rf, ctx) {
  if (rf & 1) {
    const _r15 = _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementStart"](0, "div", 3)(1, "raain-date-dynamic", 47);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵlistener"]("changedDate", function RaainDetailsComponent_div_0_div_38_Template_raain_date_dynamic_changedDate_1_listener($event) {
      _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵrestoreView"](_r15);
      const ctx_r14 = _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵnextContext"](2);
      return _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵresetView"](ctx_r14.onDateChangeInCount($event));
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementEnd"]()();
  }
  if (rf & 2) {
    const ctx_r3 = _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵproperty"]("currentHeight", 300)("fetchData", ctx_r3.fetchDataWrapper)("points", ctx_r3.countPoints);
  }
}
function RaainDetailsComponent_div_0_div_45_ion_select_option_2_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementStart"](0, "ion-select-option", 55);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementEnd"]();
  }
  if (rf & 2) {
    const provider_r20 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵproperty"]("value", provider_r20);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵtextInterpolate1"](" ", provider_r20, " ");
  }
}
function RaainDetailsComponent_div_0_div_45_ion_select_option_4_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementStart"](0, "ion-select-option", 55);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementEnd"]();
  }
  if (rf & 2) {
    const opt_r21 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵproperty"]("value", opt_r21.value);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵtextInterpolate1"](" ", opt_r21.label, " ");
  }
}
function RaainDetailsComponent_div_0_div_45_ion_button_7_ion_icon_1_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelement"](0, "ion-icon", 59);
  }
}
function RaainDetailsComponent_div_0_div_45_ion_button_7_ion_spinner_2_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelement"](0, "ion-spinner", 60);
  }
}
function RaainDetailsComponent_div_0_div_45_ion_button_7_Template(rf, ctx) {
  if (rf & 1) {
    const _r25 = _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementStart"](0, "ion-button", 56);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵlistener"]("click", function RaainDetailsComponent_div_0_div_45_ion_button_7_Template_ion_button_click_0_listener() {
      _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵrestoreView"](_r25);
      const ctx_r24 = _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵnextContext"](3);
      return _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵresetView"](ctx_r24.triggerCumulativeCreation());
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵtemplate"](1, RaainDetailsComponent_div_0_div_45_ion_button_7_ion_icon_1_Template, 1, 0, "ion-icon", 57);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵtemplate"](2, RaainDetailsComponent_div_0_div_45_ion_button_7_ion_spinner_2_Template, 1, 0, "ion-spinner", 58);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementEnd"]();
  }
  if (rf & 2) {
    const ctx_r18 = _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵnextContext"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵproperty"]("disabled", ctx_r18.creatingCumulative);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵproperty"]("ngIf", !ctx_r18.creatingCumulative);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵproperty"]("ngIf", ctx_r18.creatingCumulative);
  }
}
function RaainDetailsComponent_div_0_div_45_i_8_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementStart"](0, "i", 61);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementEnd"]();
  }
  if (rf & 2) {
    const ctx_r19 = _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵnextContext"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵtextInterpolate1"](" In Progress: ", ctx_r19.countsPeriod.progress, "... ");
  }
}
function RaainDetailsComponent_div_0_div_45_Template(rf, ctx) {
  if (rf & 1) {
    const _r27 = _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementStart"](0, "div", 48)(1, "ion-select", 49);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵlistener"]("ionChange", function RaainDetailsComponent_div_0_div_45_Template_ion_select_ionChange_1_listener($event) {
      _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵrestoreView"](_r27);
      const ctx_r26 = _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵnextContext"](2);
      return _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵresetView"](ctx_r26.onProviderChanged($event));
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵtemplate"](2, RaainDetailsComponent_div_0_div_45_ion_select_option_2_Template, 2, 2, "ion-select-option", 50);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementStart"](3, "ion-select", 51);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵlistener"]("ionChange", function RaainDetailsComponent_div_0_div_45_Template_ion_select_ionChange_3_listener($event) {
      _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵrestoreView"](_r27);
      const ctx_r28 = _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵnextContext"](2);
      return _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵresetView"](ctx_r28.onTimeStepChanged($event));
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵtemplate"](4, RaainDetailsComponent_div_0_div_45_ion_select_option_4_Template, 2, 2, "ion-select-option", 50);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementStart"](5, "span", 52);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵtext"](6);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵtemplate"](7, RaainDetailsComponent_div_0_div_45_ion_button_7_Template, 3, 3, "ion-button", 53);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵtemplate"](8, RaainDetailsComponent_div_0_div_45_i_8_Template, 2, 1, "i", 54);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementEnd"]()();
  }
  if (rf & 2) {
    const ctx_r4 = _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵproperty"]("value", ctx_r4.selectedProvider);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵproperty"]("ngForOf", ctx_r4.availableProviders);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵproperty"]("disabled", ctx_r4.forceTimeStep)("value", ctx_r4.timeStepMode + ":" + ctx_r4.selectedTimeStep);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵproperty"]("ngForOf", ctx_r4.availableTimeStepOptions);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵtextInterpolate2"](" ", ctx_r4.presentComputationCount, "/", ctx_r4.expectedComputationCount, " ");
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵproperty"]("ngIf", ctx_r4.showCreateMissingImages);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵproperty"]("ngIf", ctx_r4.countsPeriod == null ? null : ctx_r4.countsPeriod.progress);
  }
}
function RaainDetailsComponent_div_0_ion_col_51_Template(rf, ctx) {
  if (rf & 1) {
    const _r30 = _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementStart"](0, "ion-col", 62);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵlistener"]("click", function RaainDetailsComponent_div_0_ion_col_51_Template_ion_col_click_0_listener() {
      _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵrestoreView"](_r30);
      const ctx_r29 = _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵnextContext"](2);
      return _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵresetView"](ctx_r29.showFullError = !ctx_r29.showFullError);
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementStart"](1, "div", 63);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelement"](2, "ion-icon", 64);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementStart"](3, "span", 65);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵtext"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelement"](5, "ion-icon", 66);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementEnd"]()();
  }
  if (rf & 2) {
    const ctx_r5 = _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵclassProp"]("expanded", ctx_r5.showFullError);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵtextInterpolate1"](" ", ctx_r5.showFullError ? ctx_r5.refreshManager.lastError : ctx_r5.truncatedError, " ");
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵproperty"]("name", ctx_r5.showFullError ? "chevron-up" : "chevron-down");
  }
}
const _c2 = function (a0) {
  return {
    "warning": a0
  };
};
function RaainDetailsComponent_div_0_ion_row_55_ion_col_53_Template(rf, ctx) {
  if (rf & 1) {
    const _r34 = _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementStart"](0, "ion-col", 79)(1, "div", 80)(2, "div", 81)(3, "raain-compare-stack", 82);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵlistener"]("selectedPoint", function RaainDetailsComponent_div_0_ion_row_55_ion_col_53_Template_raain_compare_stack_selectedPoint_3_listener($event) {
      _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵrestoreView"](_r34);
      const ctx_r33 = _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵnextContext"](3);
      return _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵresetView"](ctx_r33.onGaugeSelectInCompare($event));
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementStart"](4, "details", 72)(5, "summary");
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵtext"](6, "Compare Details");
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementStart"](7, "div", 73)(8, "div", 83)(9, "span", 75);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵtext"](10, "Computed:");
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementStart"](11, "span", 76);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵtext"](12);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵpipe"](13, "date");
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementStart"](14, "div", 74)(15, "span", 75);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵtext"](16, "Version:");
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementStart"](17, "span", 76);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵtext"](18);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementStart"](19, "div", 74)(20, "span", 75);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵtext"](21, "Launched by:");
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementStart"](22, "span", 76);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵtext"](23);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementStart"](24, "div", 74)(25, "span", 75);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵtext"](26, "Time spent:");
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementStart"](27, "span", 76);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵtext"](28);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementStart"](29, "div", 74)(30, "span", 75);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵtext"](31, "Gauges:");
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementStart"](32, "span", 76);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵtext"](33);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementStart"](34, "div", 74)(35, "span", 75);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵtext"](36, "Points:");
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementStart"](37, "span", 76);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵtext"](38);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementEnd"]()()()()()();
  }
  if (rf & 2) {
    const ctx_r32 = _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵnextContext"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵproperty"]("compareManager", ctx_r32.compareManager)("cumulative", ctx_r32.toggleCumulative);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵadvance"](5);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵproperty"]("ngClass", _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵpureFunction1"](12, _c2, (ctx_r32.refreshManager.rainComputationMapDoneDate == null ? null : ctx_r32.refreshManager.rainComputationMapDoneDate.getTime()) > (ctx_r32.compareManager.currentQualityDoneDate == null ? null : ctx_r32.compareManager.currentQualityDoneDate.getTime()) + 60000));
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵadvance"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵpipeBind2"](13, 9, ctx_r32.compareManager.currentQualityDoneDate, "yyyy-MM-dd HH:mm"));
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵadvance"](6);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵtextInterpolate"](ctx_r32.compareManager.compareVersion);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵadvance"](5);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵtextInterpolate"](ctx_r32.compareManager.currentQualityLaunchedBy);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵadvance"](5);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵtextInterpolate1"]("", ctx_r32.compareManager.currentQualityTimeSpentInMs, " ms");
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵadvance"](5);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵtextInterpolate"](ctx_r32.compareManager.gaugesInCompare.length);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵadvance"](5);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵtextInterpolate"](ctx_r32.compareManager.globalComparePoints.length);
  }
}
const _c3 = function () {
  return [];
};
const _c4 = function (a0, a1, a2, a3, a4, a5, a6) {
  return {
    borders: a0,
    gauges: a1,
    gaugesInCompare: a2,
    selectedGauges: a3,
    pixels: a4,
    pixelsSolution: a5,
    speeds: a6
  };
};
function RaainDetailsComponent_div_0_ion_row_55_Template(rf, ctx) {
  if (rf & 1) {
    const _r36 = _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementStart"](0, "ion-row")(1, "ion-col", 67)(2, "div", 68)(3, "raain-map", 69, 70);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵlistener"]("changedDate", function RaainDetailsComponent_div_0_ion_row_55_Template_raain_map_changedDate_3_listener($event) {
      _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵrestoreView"](_r36);
      const ctx_r35 = _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵnextContext"](2);
      return _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵresetView"](ctx_r35.onDateChangeInMap($event));
    })("changedSum", function RaainDetailsComponent_div_0_ion_row_55_Template_raain_map_changedSum_3_listener($event) {
      _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵrestoreView"](_r36);
      const ctx_r37 = _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵnextContext"](2);
      return _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵresetView"](ctx_r37.onSumChangeInMap($event));
    })("selectedMarker", function RaainDetailsComponent_div_0_ion_row_55_Template_raain_map_selectedMarker_3_listener($event) {
      _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵrestoreView"](_r36);
      const ctx_r38 = _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵnextContext"](2);
      return _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵresetView"](ctx_r38.onGaugeSelectInMap($event));
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementStart"](5, "div", 71)(6, "details", 72)(7, "summary");
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵtext"](8, "Image Details");
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementStart"](9, "div", 73)(10, "div", 74)(11, "span", 75);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵtext"](12, "Computed:");
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementStart"](13, "span", 76);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵtext"](14);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵpipe"](15, "date");
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementStart"](16, "div", 74)(17, "span", 75);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵtext"](18, "Version:");
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementStart"](19, "span", 76);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵtext"](20);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementStart"](21, "div", 74)(22, "span", 75);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵtext"](23, "Launched by:");
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementStart"](24, "span", 76);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵtext"](25);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementStart"](26, "div", 74)(27, "span", 75);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵtext"](28, "Time spent:");
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementStart"](29, "span", 76);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵtext"](30);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementStart"](31, "div", 74)(32, "span", 75);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵtext"](33, "Date:");
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementStart"](34, "span", 76);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵtext"](35);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵpipe"](36, "date");
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementStart"](37, "div", 74)(38, "span", 75);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵtext"](39, "Water in the map:");
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementStart"](40, "span", 76);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵtext"](41);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementStart"](42, "ion-toggle", 77);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵlistener"]("ionChange", function RaainDetailsComponent_div_0_ion_row_55_Template_ion_toggle_ionChange_42_listener() {
      _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵrestoreView"](_r36);
      const ctx_r39 = _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵnextContext"](2);
      return _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵresetView"](ctx_r39.onTogglePixelMarkers());
    })("ngModelChange", function RaainDetailsComponent_div_0_ion_row_55_Template_ion_toggle_ngModelChange_42_listener($event) {
      _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵrestoreView"](_r36);
      const ctx_r40 = _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵnextContext"](2);
      return _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵresetView"](ctx_r40.showPixelMarkers = $event);
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementStart"](43, "div", 74)(44, "span", 75);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵtext"](45, "Source DBZ min:");
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementStart"](46, "span", 76);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵtext"](47);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementStart"](48, "div", 74)(49, "span", 75);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵtext"](50, "Source DBZ max:");
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementStart"](51, "span", 76);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵtext"](52);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementEnd"]()()()()()();
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵtemplate"](53, RaainDetailsComponent_div_0_ion_row_55_ion_col_53_Template, 39, 14, "ion-col", 78);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementEnd"]();
  }
  if (rf & 2) {
    const ctx_r6 = _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵproperty"]("coordinates", ctx_r6.coordinates)("cumulativeDurationInMinutes", ctx_r6.cumulativeDurationInMinutes)("currentHeight", 500)("defaultDate", ctx_r6.dateShown)("markers", _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵpureFunction7"](31, _c4, ctx_r6.borders, ctx_r6.compareManager.gaugesInMap, ctx_r6.compareManager.gaugesInCompare, ctx_r6.compareManager.selectedGauges, ctx_r6.compareManager.selectedPixels, (ctx_r6.compareManager.pixelsSolutions == null ? null : ctx_r6.compareManager.pixelsSolutions.length) ? ctx_r6.compareManager.pixelsSolutions[0] : _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵpureFunction0"](30, _c3), ctx_r6.compareManager.speeds))("scaleLabel", ctx_r6.toggleCumulative ? "mm" : ctx_r6.scaleLabel)("showNavigation", !ctx_r6.toggleCumulative)("showDateRange", ctx_r6.showDateRange)("showVisiblePixelMarkers", ctx_r6.showPixelMarkers)("sumFn", ctx_r6.refreshManager.sumFn)("sumValues", ctx_r6.refreshManager.sumValues)("timeframeContainers", ctx_r6.timeframeContainers)("timeframeDates", ctx_r6.timeframeDates);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵadvance"](11);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵpipeBind2"](15, 24, ctx_r6.refreshManager.rainComputationMapDoneDate, "yyyy-MM-dd HH:mm"));
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵadvance"](6);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵtextInterpolate"](ctx_r6.refreshManager.rainComputationMapVersion);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵadvance"](5);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵtextInterpolate"](ctx_r6.refreshManager.rainComputationMapLaunchedBy);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵadvance"](5);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵtextInterpolate1"]("", ctx_r6.refreshManager.rainComputationMapTimeSpentInMs, " ms");
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵadvance"](5);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵtextInterpolate2"]("", ctx_r6.refreshManager.rainComputationMapDate == null ? null : ctx_r6.refreshManager.rainComputationMapDate.toISOString(), " | ", _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵpipeBind2"](36, 27, ctx_r6.refreshManager.rainComputationMapDate, "yyyy-MM-dd HH:mm"), "");
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵadvance"](6);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵtextInterpolate"](ctx_r6.sumDetails);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵproperty"]("ngModel", ctx_r6.showPixelMarkers);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵadvance"](5);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵtextInterpolate"](ctx_r6.refreshManager.rainComputationMapOriginalMin);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵadvance"](5);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵtextInterpolate"](ctx_r6.refreshManager.rainComputationMapOriginalMax);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵproperty"]("ngIf", !!ctx_r6.compareManager.compareVersion && (!ctx_r6.toggleCumulative || ctx_r6.showCumulativeCompare));
  }
}
function RaainDetailsComponent_div_0_ion_progress_bar_57_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelement"](0, "ion-progress-bar", 34);
  }
  if (rf & 2) {
    const ctx_r7 = _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵproperty"]("buffer", ctx_r7.countsPeriod.progress / (((ctx_r7.timeframeDates == null ? null : ctx_r7.timeframeDates.length) || 10) + 3) + 0.01)("value", ctx_r7.countsPeriod.progress / (((ctx_r7.timeframeDates == null ? null : ctx_r7.timeframeDates.length) || 10) + 3));
  }
}
function RaainDetailsComponent_div_0_ion_card_58_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementStart"](0, "ion-card", 84)(1, "ion-card-header")(2, "ion-card-title");
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelement"](3, "ion-icon", 85);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵtext"](4, " Selected Gauge Data ");
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementStart"](5, "ion-card-content");
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelement"](6, "raain-date-focus", 86);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementEnd"]()();
  }
  if (rf & 2) {
    const ctx_r8 = _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵadvance"](6);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵproperty"]("currentHeight", 300)("focusDate", ctx_r8.periodBegin)("focusRange", ctx_r8.DateRange.DAY)("points", ctx_r8.gaugeSelectedPoints)("withoutAll", true);
  }
}
function RaainDetailsComponent_div_0_div_59_div_8_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementStart"](0, "div", 97);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelement"](1, "ion-spinner", 98);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementStart"](2, "span");
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵtext"](3, "Loading indicators...");
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementEnd"]()();
  }
}
function RaainDetailsComponent_div_0_div_59_div_9_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementStart"](0, "div", 99);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵtext"](1, " No quality indicators available for this year. ");
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementEnd"]();
  }
}
function RaainDetailsComponent_div_0_div_59_div_10_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementStart"](0, "div", 100);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelement"](1, "canvas", null, 101);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementEnd"]();
  }
}
function RaainDetailsComponent_div_0_div_59_div_11_table_5_tr_16_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementStart"](0, "tr")(1, "td");
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵtext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementStart"](3, "td");
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵtext"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementStart"](5, "td");
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵtext"](6);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelement"](7, "br");
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵtext"](8);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementStart"](9, "td");
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵtext"](10);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelement"](11, "br");
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵtext"](12);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementStart"](13, "td");
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵtext"](14);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵpipe"](15, "number");
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementStart"](16, "td");
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵtext"](17);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementEnd"]()();
  }
  if (rf & 2) {
    const indicator_r48 = ctx.$implicit;
    const ctx_r47 = _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵnextContext"](5);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵtextInterpolate"](indicator_r48.computingVersion);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵtextInterpolate"](indicator_r48.qualityVersion);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵtextInterpolate"](indicator_r48.provider);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵtextInterpolate1"]("", indicator_r48.timeStepInMinutes, " min");
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵtextInterpolate"](ctx_r47.formatDate(indicator_r48.startDate));
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵtextInterpolate"](ctx_r47.formatDate(indicator_r48.endDate));
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵpipeBind2"](15, 8, indicator_r48.averageQuality, "1.2-2"));
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵtextInterpolate"](ctx_r47.formatDate(indicator_r48.lastUpdatedAt));
  }
}
function RaainDetailsComponent_div_0_div_59_div_11_table_5_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementStart"](0, "table", 106)(1, "thead")(2, "tr")(3, "th");
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵtext"](4, "Model");
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementStart"](5, "th");
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵtext"](6, "Compare");
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementStart"](7, "th");
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵtext"](8, "Gauges");
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementStart"](9, "th");
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵtext"](10, "Period");
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementStart"](11, "th");
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵtext"](12, "Avg Quality");
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementStart"](13, "th");
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵtext"](14, "Updated");
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementEnd"]()()();
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementStart"](15, "tbody");
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵtemplate"](16, RaainDetailsComponent_div_0_div_59_div_11_table_5_tr_16_Template, 18, 11, "tr", 107);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementEnd"]()();
  }
  if (rf & 2) {
    const ctx_r46 = _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵnextContext"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵadvance"](16);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵproperty"]("ngForOf", ctx_r46.qualityIndicators);
  }
}
function RaainDetailsComponent_div_0_div_59_div_11_Template(rf, ctx) {
  if (rf & 1) {
    const _r50 = _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementStart"](0, "div", 102)(1, "div", 103);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵlistener"]("click", function RaainDetailsComponent_div_0_div_59_div_11_Template_div_click_1_listener() {
      _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵrestoreView"](_r50);
      const ctx_r49 = _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵnextContext"](3);
      return _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵresetView"](ctx_r49.showQualityDetails = !ctx_r49.showQualityDetails);
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementStart"](2, "span");
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵtext"](3, "Details");
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelement"](4, "ion-icon", 104);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵtemplate"](5, RaainDetailsComponent_div_0_div_59_div_11_table_5_Template, 17, 1, "table", 105);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementEnd"]();
  }
  if (rf & 2) {
    const ctx_r44 = _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵnextContext"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵadvance"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵproperty"]("name", ctx_r44.showQualityDetails ? "chevron-up" : "chevron-down");
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵproperty"]("ngIf", ctx_r44.showQualityDetails);
  }
}
function RaainDetailsComponent_div_0_div_59_Template(rf, ctx) {
  if (rf & 1) {
    const _r52 = _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementStart"](0, "div", 87);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵlistener"]("click", function RaainDetailsComponent_div_0_div_59_Template_div_click_0_listener() {
      _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵrestoreView"](_r52);
      const ctx_r51 = _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵnextContext"](2);
      return _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵresetView"](ctx_r51.closeQualityModal());
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementStart"](1, "div", 88);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵlistener"]("click", function RaainDetailsComponent_div_0_div_59_Template_div_click_1_listener($event) {
      return $event.stopPropagation();
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementStart"](2, "div", 89)(3, "h2");
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵtext"](4, "Model Quality Performance");
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementStart"](5, "ion-button", 90);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵlistener"]("click", function RaainDetailsComponent_div_0_div_59_Template_ion_button_click_5_listener() {
      _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵrestoreView"](_r52);
      const ctx_r54 = _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵnextContext"](2);
      return _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵresetView"](ctx_r54.closeQualityModal());
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelement"](6, "ion-icon", 91);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementStart"](7, "div", 92);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵtemplate"](8, RaainDetailsComponent_div_0_div_59_div_8_Template, 4, 0, "div", 93);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵtemplate"](9, RaainDetailsComponent_div_0_div_59_div_9_Template, 2, 0, "div", 94);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵtemplate"](10, RaainDetailsComponent_div_0_div_59_div_10_Template, 3, 0, "div", 95);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵtemplate"](11, RaainDetailsComponent_div_0_div_59_div_11_Template, 6, 2, "div", 96);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementEnd"]()()();
  }
  if (rf & 2) {
    const ctx_r9 = _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵadvance"](8);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵproperty"]("ngIf", ctx_r9.qualityIndicatorsLoading);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵproperty"]("ngIf", !ctx_r9.qualityIndicatorsLoading && ctx_r9.qualityIndicators.length === 0);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵproperty"]("ngIf", !ctx_r9.qualityIndicatorsLoading && ctx_r9.modelPerformanceData.length > 0);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵproperty"]("ngIf", !ctx_r9.qualityIndicatorsLoading && ctx_r9.qualityIndicators.length > 0);
  }
}
function RaainDetailsComponent_div_0_cumulative_selector_60_Template(rf, ctx) {
  if (rf & 1) {
    const _r56 = _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementStart"](0, "cumulative-selector", 108);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵlistener"]("cancelled", function RaainDetailsComponent_div_0_cumulative_selector_60_Template_cumulative_selector_cancelled_0_listener() {
      _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵrestoreView"](_r56);
      const ctx_r55 = _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵnextContext"](2);
      return _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵresetView"](ctx_r55.onCumulativeSelectorCancelled());
    })("periodSelected", function RaainDetailsComponent_div_0_cumulative_selector_60_Template_cumulative_selector_periodSelected_0_listener($event) {
      _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵrestoreView"](_r56);
      const ctx_r57 = _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵnextContext"](2);
      return _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵresetView"](ctx_r57.onCumulativePeriodSelected($event));
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementEnd"]();
  }
  if (rf & 2) {
    const ctx_r10 = _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵproperty"]("currentPeriodBegin", ctx_r10.periodBegin)("currentPeriodEnd", ctx_r10.periodEnd)("isAdmin", ctx_r10.toggleAdmin)("provider", ctx_r10.selectedProvider)("rainId", ctx_r10.rainNode == null ? null : ctx_r10.rainNode.id)("timeStepInMinutes", ctx_r10.selectedTimeStep);
  }
}
function RaainDetailsComponent_div_0_Template(rf, ctx) {
  if (rf & 1) {
    const _r59 = _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementStart"](0, "div", 1)(1, "ion-card", 2)(2, "ion-card-content")(3, "div", 3)(4, "div", 4)(5, "ion-button", 5);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵlistener"]("click", function RaainDetailsComponent_div_0_Template_ion_button_click_5_listener() {
      _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵrestoreView"](_r59);
      const ctx_r58 = _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵnextContext"]();
      ctx_r58.toggleHistory = !ctx_r58.toggleHistory;
      return _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵresetView"](ctx_r58.onEnableCountHistoryTab(ctx_r58.rainNode));
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelement"](6, "ion-icon", 6)(7, "ion-icon", 7);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementStart"](8, "div", 8)(9, "input", 9);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵlistener"]("change", function RaainDetailsComponent_div_0_Template_input_change_9_listener($event) {
      _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵrestoreView"](_r59);
      const ctx_r60 = _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵnextContext"]();
      return _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵresetView"](ctx_r60.onPeriodBeginChange($event));
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementStart"](10, "div", 10)(11, "ion-select", 11);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵlistener"]("ionDismiss", function RaainDetailsComponent_div_0_Template_ion_select_ionDismiss_11_listener($event) {
      _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵrestoreView"](_r59);
      const ctx_r61 = _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵnextContext"]();
      return _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵresetView"](ctx_r61.onPeriodDurationChange($event));
    })("ngModelChange", function RaainDetailsComponent_div_0_Template_ion_select_ngModelChange_11_listener($event) {
      _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵrestoreView"](_r59);
      const ctx_r62 = _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵnextContext"]();
      return _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵresetView"](ctx_r62.periodDurationAsString = $event);
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementStart"](12, "ion-select-option", 12);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵtext"](13, "15 minutes");
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementStart"](14, "ion-select-option", 13);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵtext"](15, "30 minutes");
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementStart"](16, "ion-select-option", 14);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵtext"](17, "1 hour");
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementStart"](18, "ion-select-option", 15);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵtext"](19, "2 hours");
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementStart"](20, "ion-select-option", 16);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵtext"](21, "3 hours");
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementStart"](22, "ion-select-option", 17);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵtext"](23, "4 hours");
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementStart"](24, "ion-select-option", 18);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵtext"](25, "5 hours");
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementStart"](26, "ion-select-option", 19);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵtext"](27, "6 hours");
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementStart"](28, "ion-select-option", 20);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵtext"](29, "8 hours");
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementStart"](30, "ion-select-option", 21);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵtext"](31, "10 hours");
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementStart"](32, "ion-select-option", 22);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵtext"](33, "12 hours");
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵtemplate"](34, RaainDetailsComponent_div_0_ion_select_option_34_Template, 2, 0, "ion-select-option", 23);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementStart"](35, "div", 8)(36, "input", 9);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵlistener"]("change", function RaainDetailsComponent_div_0_Template_input_change_36_listener($event) {
      _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵrestoreView"](_r59);
      const ctx_r63 = _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵnextContext"]();
      return _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵresetView"](ctx_r63.onPeriodEndChange($event));
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵtemplate"](37, RaainDetailsComponent_div_0_div_37_Template, 5, 4, "div", 24);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵtemplate"](38, RaainDetailsComponent_div_0_div_38_Template, 2, 3, "div", 25);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementStart"](39, "ion-grid", 26)(40, "ion-row", 27)(41, "ion-col", 28)(42, "ion-button", 29);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵlistener"]("click", function RaainDetailsComponent_div_0_Template_ion_button_click_42_listener() {
      _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵrestoreView"](_r59);
      const ctx_r64 = _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵnextContext"]();
      return _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵresetView"](ctx_r64.openQualityModal());
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵtext"](43);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelement"](44, "ion-icon", 30);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵtemplate"](45, RaainDetailsComponent_div_0_div_45_Template, 9, 9, "div", 31);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementStart"](46, "ion-col", 32)(47, "ion-button", 33);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵlistener"]("click", function RaainDetailsComponent_div_0_Template_ion_button_click_47_listener() {
      _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵrestoreView"](_r59);
      const ctx_r65 = _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵnextContext"]();
      return _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵresetView"](ctx_r65.refreshMap());
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵtext"](48, " Refresh Map ");
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementEnd"]()()();
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementStart"](49, "ion-row");
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelement"](50, "ion-progress-bar", 34);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵtemplate"](51, RaainDetailsComponent_div_0_ion_col_51_Template, 6, 4, "ion-col", 35);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementStart"](52, "ion-card", 36)(53, "ion-card-content", 37)(54, "ion-grid");
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵtemplate"](55, RaainDetailsComponent_div_0_ion_row_55_Template, 54, 39, "ion-row", 38);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementStart"](56, "ion-row");
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵtemplate"](57, RaainDetailsComponent_div_0_ion_progress_bar_57_Template, 1, 2, "ion-progress-bar", 39);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementEnd"]()()()();
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵtemplate"](58, RaainDetailsComponent_div_0_ion_card_58_Template, 7, 5, "ion-card", 40);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵtemplate"](59, RaainDetailsComponent_div_0_div_59_Template, 12, 4, "div", 41);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵtemplate"](60, RaainDetailsComponent_div_0_cumulative_selector_60_Template, 1, 6, "cumulative-selector", 42);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementEnd"]();
  }
  if (rf & 2) {
    const ctx_r0 = _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵadvance"](7);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵproperty"]("name", ctx_r0.toggleHistory ? "chevron-down" : "chevron-forward");
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵproperty"]("disabled", ctx_r0.toggleCumulative)("value", ctx_r0.periodBeginAsString);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵproperty"]("ngModel", ctx_r0.periodDurationAsString)("disabled", ctx_r0.toggleCumulative);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵadvance"](23);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵproperty"]("ngIf", ctx_r0.isAdmin);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵproperty"]("disabled", ctx_r0.toggleCumulative)("value", ctx_r0.periodEndAsString);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵproperty"]("ngIf", ctx_r0.showCumulativeToggle);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵproperty"]("ngIf", ctx_r0.toggleHistory);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵadvance"](5);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵtextInterpolate1"](" ", ctx_r0.refreshManager.rainComputationMapVersion, " ");
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵproperty"]("ngIf", ctx_r0.availableProviders.length > 0 || ctx_r0.availableTimeSteps.length > 0);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵproperty"]("disabled", ctx_r0.refreshInProgress);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵstyleProp"]("visibility", ctx_r0.refreshInProgress ? "visible" : "hidden");
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵproperty"]("buffer", ctx_r0.countsPeriod.progress / (((ctx_r0.timeframeDates == null ? null : ctx_r0.timeframeDates.length) || 10) + 3) + 0.01)("value", ctx_r0.countsPeriod.progress / (((ctx_r0.timeframeDates == null ? null : ctx_r0.timeframeDates.length) || 10) + 3));
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵproperty"]("ngIf", ctx_r0.refreshManager.lastError);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵadvance"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵproperty"]("ngIf", ctx_r0.toggleMap && (ctx_r0.percentOfImages || ctx_r0.percentOfComputations));
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵproperty"]("ngIf", ctx_r0.refreshInProgress);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵproperty"]("ngIf", ctx_r0.gaugeSelectedPoints.length && ctx_r0.gaugeSelectedPoints[0].values.length);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵproperty"]("ngIf", ctx_r0.showQualityModal);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵproperty"]("ngIf", ctx_r0.showCumulativeSelector);
  }
}
let TEST_DETECTION = 0;
class RaainDetailsComponent {
  constructor(storage, cdr) {
    var _this = this;
    this.storage = storage;
    this.cdr = cdr;
    this.scaleLabel = 'mm';
    this.showCreateMissingImages = true;
    this.showCumulativeCompare = true;
    this.showDateRange = true;
    this.showCumulativeToggle = true;
    this.availableProviders = [];
    this.availableTimeSteps = [];
    this.availableTimeStepOptions = [];
    this.timeStepMode = 'eq';
    this.showPixelMarkers = false;
    this.qualityIndicators = [];
    this.qualityIndicatorsLoading = false;
    this.showCumulativeSelector = false;
    this.creatingCumulative = false;
    this.showQualityDetails = false;
    this.modelPerformanceData = [];
    // Cached computed values (to avoid method calls in templates)
    this.percentOfComputations = 0;
    this.presentComputationCount = 0;
    this.expectedComputationCount = 0;
    this.percentOfImages = 0;
    this.truncatedError = '';
    this.cumulativeDurationInMinutes = 10;
    this.DateRange = raain_ui__WEBPACK_IMPORTED_MODULE_2__.DateRange;
    // Wrapper function that preserves the async nature of fetchData
    this.fetchDataWrapper = /*#__PURE__*/function () {
      var _ref = (0,_opt_atlassian_pipelines_agent_build_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_0__["default"])(function* (focusDate, focusRange) {
        return yield _this.fetchData(focusDate, focusRange);
      });
      return function (_x, _x2) {
        return _ref.apply(this, arguments);
      };
    }();
  }
  static {
    this.HOUR_MS = 60 * 60000;
  }
  static {
    this.DAY_MS = 24 * 60 * 60 * 1000;
  }
  static PeriodDisplay(date) {
    let d = new Date();
    if (date) {
      d = new Date(date);
      const userTimezoneOffset = d.getTimezoneOffset() * 60000;
      d = new Date(d.getTime() - userTimezoneOffset);
    }
    const exampleFormattedDate = '2017-06-01T08:30';
    return d.toISOString().substring(0, exampleFormattedDate.length);
  }
  static DateUTC(date) {
    const hasISOFormat = date.match(/^\d{4}-\d{2}-\d{2}T\d{2}:\d{2}:\d{2}\.\d{3}Z$/);
    let d = new Date(date);
    if (!hasISOFormat) {
      const userTimezoneOffset = d.getTimezoneOffset() * 60000;
      d = new Date(d.getTime() - userTimezoneOffset);
    }
    return d;
  }
  static MapCountToDateValue(c) {
    return {
      date: RaainDetailsComponent.DateUTC(c.name),
      value: Math.min(100, c.x)
    };
  }
  openQualityModal() {
    var _this2 = this;
    return (0,_opt_atlassian_pipelines_agent_build_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_0__["default"])(function* () {
      _this2.showQualityModal = true;
      _this2.qualityIndicatorsLoading = true;
      _this2.qualityIndicators = [];
      _this2.modelPerformanceData = [];
      _this2.cdr.markForCheck();
      if (_this2.rainNode?.id) {
        const result = yield _this2.profileService.getIndicators(_this2.rainNode.id);
        _this2.qualityIndicators = result.indicators;
        _this2.modelPerformanceData = _this2.buildModelPerformanceData(result.indicators);
      }
      _this2.qualityIndicatorsLoading = false;
      _this2.cdr.markForCheck();
      if (_this2.modelPerformanceData.length > 0) {
        setTimeout(() => _this2.renderPerformanceChart(), 100);
      }
    })();
  }
  closeQualityModal() {
    this.showQualityModal = false;
    if (this.performanceChart?.chart) {
      this.performanceChart.chart.destroy();
      this.performanceChart = null;
    }
  }
  buildModelPerformanceData(indicators) {
    // Group by version combo (computingVersion + qualityVersion)
    const grouped = new Map();
    for (const ind of indicators) {
      const key = `C${ind.computingVersion}-Q${ind.qualityVersion}`;
      if (!grouped.has(key)) {
        grouped.set(key, {
          date: new Date(ind.lastUpdatedAt),
          KPEi: null,
          KPE1: null
        });
      }
      const entry = grouped.get(key);
      // Update date to latest
      const indDate = new Date(ind.lastUpdatedAt);
      if (indDate.getTime() > entry.date.getTime()) {
        entry.date = indDate;
      }
      if (ind.timeStepInMinutes === 5) {
        entry.KPEi = ind.averageQuality;
      } else if (ind.timeStepInMinutes === 60) {
        entry.KPE1 = ind.averageQuality;
      }
    }
    return Array.from(grouped.entries()).map(([name, data]) => ({
      name,
      date: data.date,
      KPEi: data.KPEi,
      KPE1: data.KPE1
    }));
  }
  renderPerformanceChart() {
    const canvas = this.performanceCanvasRef?.nativeElement;
    if (!canvas) {
      return;
    }
    const factory = new raain_ui__WEBPACK_IMPORTED_MODULE_2__.ElementsFactory();
    this.performanceChart = factory.createModelPerformance(canvas, new raain_ui__WEBPACK_IMPORTED_MODULE_2__.ModelPerformanceElementInput(this.modelPerformanceData));
  }
  formatDate(dateStr) {
    const date = new Date(dateStr);
    return date.toLocaleDateString() + ' ' + date.toLocaleTimeString([], {
      hour: '2-digit',
      minute: '2-digit'
    });
  }
  fetchData(focusDate, focusRange) {
    var _this3 = this;
    return (0,_opt_atlassian_pipelines_agent_build_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_0__["default"])(function* () {
      const values = [];
      for (let i = 0; i < 10; i++) {
        values.push({
          date: new Date(2020 + i, 0),
          value: 10
        });
      }
      const fakeData = [{
        label: '% Rainy',
        style: 'bar',
        values
      }, {
        label: '% Images',
        style: 'bar',
        values
      }, {
        label: '% Computations',
        style: 'bar',
        values
      }];
      const range = (0,_tools__WEBPACK_IMPORTED_MODULE_3__.mapDateRangeToString)(focusRange);
      let data = fakeData;
      if (!_this3.rainNode) {
        return data;
      }
      if (focusRange === raain_ui__WEBPACK_IMPORTED_MODULE_2__.DateRange.CENTURY) {
        // fake
      } else if (focusRange === raain_ui__WEBPACK_IMPORTED_MODULE_2__.DateRange.HOUR) {
        const hourCounts = yield _this3.profileService.getCountsHour(_this3.rainNode.id, {
          periodBegin: focusDate
        });
        data = [{
          label: 'Rainy Count',
          style: 'line',
          values: hourCounts.rainyCount.map(RaainDetailsComponent.MapCountToDateValue)
        }, {
          label: '% Images',
          style: 'bar',
          values: hourCounts.percentImages.map(RaainDetailsComponent.MapCountToDateValue)
        }, {
          label: '% Computations',
          style: 'bar',
          values: hourCounts.percentComputations.map(RaainDetailsComponent.MapCountToDateValue)
        }, {
          label: 'Rainy Sum',
          style: 'line',
          values: hourCounts.rainySum.map(RaainDetailsComponent.MapCountToDateValue)
        }];
      } else {
        const counts = yield _this3.profileService.getCounts(_this3.rainNode.id, {
          range,
          periodBegin: focusDate
        });
        data = [{
          label: '% Rainy',
          style: 'bar',
          values: counts.percentRainy.map(RaainDetailsComponent.MapCountToDateValue)
        }, {
          label: '% Images',
          style: 'bar',
          values: counts.percentImages.map(RaainDetailsComponent.MapCountToDateValue)
        }, {
          label: '% Computations',
          style: 'bar',
          values: counts.percentComputations.map(RaainDetailsComponent.MapCountToDateValue)
        }];
      }
      // console.log(`fetchData DONE ${range}`, data);
      return data;
    })();
  }
  ngOnChanges(changes) {
    this.change(changes).then(ignored => {});
  }
  ngOnDestroy() {
    this.cleanAll();
  }
  onEnableCountHistoryTab(rain) {
    var _this4 = this;
    return (0,_opt_atlassian_pipelines_agent_build_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_0__["default"])(function* () {
      if (!_this4.toggleHistory) {
        _this4.countPoints = [];
      }
    })();
  }
  onPeriodBeginChange(event) {
    var _this5 = this;
    return (0,_opt_atlassian_pipelines_agent_build_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_0__["default"])(function* () {
      const newValue = event?.target?.value ?? _this5.periodBeginAsString;
      _this5.periodBegin = new Date(newValue);
      _this5.periodBeginAsString = RaainDetailsComponent.PeriodDisplay(_this5.periodBegin);
      _this5.storage.set('raain-periodBegin', _this5.periodBegin);
      yield _this5.onPeriodDurationChange(event);
    })();
  }
  onPeriodEndChange(event) {
    var _this6 = this;
    return (0,_opt_atlassian_pipelines_agent_build_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_0__["default"])(function* () {
      const newValue = event?.target?.value ?? _this6.periodEndAsString;
      _this6.periodEnd = new Date(newValue);
      _this6.periodEndAsString = RaainDetailsComponent.PeriodDisplay(_this6.periodEnd);
      _this6.storage.set('raain-periodEnd', _this6.periodEnd);
      _this6.periodBegin = new Date(_this6.periodEnd.getTime() - _this6.getDurationInHours() * RaainDetailsComponent.HOUR_MS);
      _this6.periodBeginAsString = RaainDetailsComponent.PeriodDisplay(_this6.periodBegin);
      _this6.storage.set('raain-periodBegin', _this6.periodBegin);
      _this6.updateRefreshManagerPeriod();
    })();
  }
  onPeriodDurationChange(_event) {
    var _this7 = this;
    return (0,_opt_atlassian_pipelines_agent_build_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_0__["default"])(function* () {
      const durationInHours = _this7.getDurationInHours();
      _this7.periodEnd = new Date(_this7.periodBegin.getTime() + durationInHours * RaainDetailsComponent.HOUR_MS);
      _this7.periodEndAsString = RaainDetailsComponent.PeriodDisplay(_this7.periodEnd);
      _this7.storage.set('raain-periodEnd', _this7.periodEnd);
      _this7.storage.set('raain-periodDurationInHours', durationInHours);
      _this7.updateRefreshManagerPeriod();
      _this7.updateCumulativeDurationInMinutes();
    })();
  }
  onDateChangeInCount(dateChanged) {
    var _this8 = this;
    return (0,_opt_atlassian_pipelines_agent_build_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_0__["default"])(function* () {
      const dateString = dateChanged.toISOString().substring(0, 11) + dateChanged.toLocaleTimeString().substring(0, 5);
      _this8.periodDurationAsString = '1';
      if (_this8.toggleCumulative) {
        // Cumulative: select periodEnd
        _this8.periodEndAsString = dateString;
        yield _this8.onPeriodEndChange(null);
      } else {
        // Granular: select periodBegin
        _this8.periodBeginAsString = dateString;
        yield _this8.onPeriodBeginChange(null);
      }
      yield _this8.refreshManager.refresh(false, _this8.toggleAdmin);
    })();
  }
  onDateChangeInMap(dateShown) {
    var _this9 = this;
    return (0,_opt_atlassian_pipelines_agent_build_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_0__["default"])(function* () {
      _this9.dateShown = dateShown;
      yield _this9.fetchAndUpdateMap();
      yield _this9.refreshManager.setReportPeriod(_this9.dateShown);
    })();
  }
  onSumChangeInMap(sum) {
    var _this0 = this;
    return (0,_opt_atlassian_pipelines_agent_build_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_0__["default"])(function* () {
      _this0.sumDetails = sum;
    })();
  }
  onGaugeSelectInMap(mapLatLng) {
    var _this1 = this;
    return (0,_opt_atlassian_pipelines_agent_build_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_0__["default"])(function* () {
      const gaugesFiltered = _this1.compareManager.gaugesInMap.filter(g => g.lat === mapLatLng.lat && g.lng === mapLatLng.lng);
      if (gaugesFiltered.length !== 1) {
        return;
      }
      const gaugeSelected = gaugesFiltered[0];
      yield _this1.refreshGaugeValues({
        id: gaugeSelected.id,
        name: gaugeSelected.name
      });
      yield _this1.compareManager.selectGauge(gaugeSelected.id, 0);
    })();
  }
  refreshGaugeValues(gaugeSelected) {
    var _this10 = this;
    return (0,_opt_atlassian_pipelines_agent_build_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_0__["default"])(function* () {
      const gaugeValueShowBegin = new Date(_this10.periodBegin.getTime() - RaainDetailsComponent.DAY_MS);
      const gaugeValueShowEnd = new Date(_this10.periodEnd.getTime() + RaainDetailsComponent.DAY_MS);
      gaugeValueShowBegin.setHours(0, 0);
      gaugeValueShowEnd.setHours(23, 59);
      const gaugeMeasures = yield _this10.profileService.getGaugeMeasures(gaugeSelected.id, gaugeValueShowBegin, gaugeValueShowEnd);
      const gaugeValues = gaugeMeasures.map(gm => {
        // eslint-disable-next-line @typescript-eslint/no-explicit-any
        const cartesianMeasureValue = new raain_model__WEBPACK_IMPORTED_MODULE_1__.CartesianMeasureValue(gm.values[0]);
        return {
          date: gm.date,
          value: cartesianMeasureValue.getCartesianValues()[0].value
        };
      });
      _this10.gaugeSelectedPoints = [{
        label: gaugeSelected.name,
        style: 'bar',
        values: gaugeValues
      }];
      _this10.cdr.markForCheck();
    })();
  }
  onGaugeSelectInCompare(e) {
    var _this11 = this;
    return (0,_opt_atlassian_pipelines_agent_build_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_0__["default"])(function* () {
      yield _this11.refreshGaugeValues({
        id: e.point.id,
        name: e.point.name
      });
      yield _this11.compareManager.selectGauge(e.point.id, e.compareIndex);
    })();
  }
  onToggleMap($event) {
    return (0,_opt_atlassian_pipelines_agent_build_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_0__["default"])(function* () {})();
  } // if (this.toggleMap) {
  //    await this.refreshMap();
  // }

  onTogglePixelMarkers() {
    // Toggle is bound to showPixelMarkers, raain-map handles marker display
  }
  onCumulativeToggleClick($event) {
    var _this12 = this;
    return (0,_opt_atlassian_pipelines_agent_build_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_0__["default"])(function* () {
      console.log('[CumulativeToggle] click event', {
        currentValue: _this12.toggleCumulative,
        eventType: $event.type,
        target: $event.target?.tagName
      });
      $event.preventDefault();
      $event.stopPropagation();
      if (!_this12.toggleCumulative) {
        console.log('[CumulativeToggle] showing popup, toggle stays OFF');
        // Currently OFF, user wants to enable - show selector popup
        _this12.showCumulativeSelector = true;
        // Force reset the toggle visual state after ion-toggle's internal handler
        setTimeout(() => {
          if (_this12.cumulativeToggleRef) {
            _this12.cumulativeToggleRef.checked = false;
            console.log('[CumulativeToggle] force reset toggle to OFF');
          }
        }, 0);
        _this12.cdr.markForCheck();
      } else {
        console.log('[CumulativeToggle] turning OFF');
        // Currently ON, user wants to disable - direct toggle off
        _this12.toggleCumulative = false;
        _this12.storage.set('raain-toggleCumulative', false);
        _this12.dateShown = _this12.getDateBasedOnCumulativeMode(_this12.timeframeDates);
        _this12.updateCumulativeDurationInMinutes();
        if (_this12.toggleMap) {
          _this12.updateRefreshManagerPeriod();
          yield _this12.refreshManager.refresh(false, _this12.toggleAdmin);
        }
        _this12.cdr.markForCheck();
      }
      console.log('[CumulativeToggle] after handler, toggleCumulative =', _this12.toggleCumulative);
    })();
  }
  onCumulativePeriodSelected(selection) {
    var _this13 = this;
    return (0,_opt_atlassian_pipelines_agent_build_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_0__["default"])(function* () {
      _this13.showCumulativeSelector = false;
      // Update period to match selection
      _this13.periodBegin = selection.periodBegin;
      _this13.periodEnd = selection.periodEnd;
      _this13.periodBeginAsString = RaainDetailsComponent.PeriodDisplay(_this13.periodBegin);
      _this13.periodEndAsString = RaainDetailsComponent.PeriodDisplay(_this13.periodEnd);
      // Calculate duration in hours
      const durationMs = _this13.periodEnd.getTime() - _this13.periodBegin.getTime();
      const durationHours = durationMs / RaainDetailsComponent.HOUR_MS;
      _this13.periodDurationAsString = String(durationHours);
      // Store cumulative period
      _this13.storage.set('raain-periodBegin', _this13.periodBegin);
      _this13.storage.set('raain-periodEnd', _this13.periodEnd);
      _this13.storage.set('raain-periodDurationInHours', durationHours);
      // Enable cumulative mode
      _this13.toggleCumulative = true;
      _this13.storage.set('raain-toggleCumulative', true);
      _this13.dateShown = _this13.getDateBasedOnCumulativeMode(_this13.timeframeDates);
      _this13.updateCumulativeDurationInMinutes();
      // Refresh map
      if (_this13.toggleMap) {
        _this13.updateRefreshManagerPeriod();
        yield _this13.refreshManager.refresh(false, _this13.toggleAdmin);
      }
      _this13.cdr.markForCheck();
    })();
  }
  onCumulativeSelectorCancelled() {
    console.log('[CumulativeToggle] cancelled, toggleCumulative =', this.toggleCumulative);
    this.showCumulativeSelector = false;
    this.cdr.markForCheck();
  }
  updateCumulativeDurationInMinutes() {
    if (this.toggleCumulative) {
      // Cumulative mode: use period duration
      this.cumulativeDurationInMinutes = parseFloat(this.periodDurationAsString) * 60;
    } else {
      // Granular mode: use selectedTimeStep
      this.cumulativeDurationInMinutes = this.selectedTimeStep || 10;
    }
  }
  onProviderChanged($event) {
    var _this14 = this;
    return (0,_opt_atlassian_pipelines_agent_build_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_0__["default"])(function* () {
      _this14.selectedProvider = $event?.detail?.value;
      _this14.storage.set('raain-selectedProvider', _this14.selectedProvider);
      yield _this14.applyRefreshManagerSettings();
    })();
  }
  onTimeStepChanged($event) {
    var _this15 = this;
    return (0,_opt_atlassian_pipelines_agent_build_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_0__["default"])(function* () {
      const raw = $event?.detail?.value;
      const [mode, stepStr] = raw.split(':');
      _this15.timeStepMode = mode;
      _this15.selectedTimeStep = parseInt(stepStr, 10);
      _this15.storage.set('raain-selectedTimeStep', _this15.selectedTimeStep);
      _this15.storage.set('raain-timeStepMode', _this15.timeStepMode);
      _this15.updateCumulativeDurationInMinutes();
      yield _this15.applyRefreshManagerSettings();
    })();
  }
  loadProviders() {
    var _this16 = this;
    return (0,_opt_atlassian_pipelines_agent_build_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_0__["default"])(function* () {
      if (!_this16.rainNode?.id) {
        return;
      }
      try {
        const result = yield _this16.profileService.getProviders(_this16.rainNode.id);
        _this16.availableProviders = result.providers.sort();
        _this16.availableTimeSteps = result.timeStepInMinutes.sort((a, b) => a - b);
        // Load saved selections or use defaults
        _this16.selectedProvider = _this16.storage.get('raain-selectedProvider') || (_this16.availableProviders.length > 0 ? _this16.availableProviders[0] : 'Raain');
        _this16.selectedTimeStep = _this16.storage.get('raain-selectedTimeStep') || (_this16.availableTimeSteps.length > 0 ? _this16.availableTimeSteps[0] : 10);
        _this16.timeStepMode = _this16.storage.get('raain-timeStepMode') || 'eq';
      } catch (e) {
        // Set fallback values
        _this16.availableProviders = ['Raain'];
        _this16.availableTimeSteps = [5, 10, 15, 30, 60];
        _this16.selectedProvider = 'Raain';
        _this16.selectedTimeStep = 10;
        _this16.timeStepMode = 'eq';
      }
      // Override timeStep if forced
      if (_this16.forceTimeStep) {
        _this16.selectedTimeStep = _this16.forceTimeStep;
      }
      _this16.buildTimeStepOptions();
      // Set provider and timeStep on refreshManager
      if (_this16.refreshManager) {
        _this16.refreshManager.provider = _this16.selectedProvider;
        _this16.refreshManager.timeStepInMinutes = _this16.selectedTimeStep;
        _this16.refreshManager.timeStepMode = _this16.timeStepMode;
      }
      _this16.cdr.markForCheck();
    })();
  }
  buildTimeStepOptions() {
    this.availableTimeStepOptions = [];
    for (const step of this.availableTimeSteps) {
      this.availableTimeStepOptions.push({
        label: `= ${step} min`,
        value: `eq:${step}`
      });
      this.availableTimeStepOptions.push({
        label: `≤ ${step} min`,
        value: `lte:${step}`
      });
    }
  }
  onChangeDetectionTest(rainNode) {
    console.log(TEST_DETECTION++, 'onChangeDetectionTest');
    return '';
  }
  updateTruncatedError() {
    const error = this.refreshManager?.lastError || '';
    if (error.length <= 80) {
      this.truncatedError = error;
      return;
    }
    this.truncatedError = error.substring(0, 80) + '...';
  }
  updateCachedValues() {
    this.updatePercentOfImages();
    this.updatePercentOfComputations();
    this.updateTruncatedError();
    this.updateCumulativeDurationInMinutes();
  }
  refreshMap() {
    var _this17 = this;
    return (0,_opt_atlassian_pipelines_agent_build_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_0__["default"])(function* () {
      _this17.gaugeSelectedPoints = [];
      _this17.dateShown = _this17.getDateBasedOnCumulativeMode();
      _this17.borders = [];
      _this17.compareManager.cleanAll();
      yield _this17.compareManager.setGaugesInMap();
      yield _this17.refreshManager.refresh(false, _this17.toggleAdmin);
      _this17.cdr.markForCheck();
    })();
  }
  triggerCumulativeCreation() {
    var _this18 = this;
    return (0,_opt_atlassian_pipelines_agent_build_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_0__["default"])(function* () {
      if (_this18.creatingCumulative) {
        return;
      }
      _this18.creatingCumulative = true;
      _this18.cdr.markForCheck();
      try {
        yield _this18.profileService.createCumulativePeriod(_this18.rainNode.id, {
          periodBegin: _this18.periodBegin,
          periodEnd: _this18.periodEnd,
          provider: _this18.selectedProvider,
          timeStepInMinutes: _this18.selectedTimeStep
        });
        const success = yield _this18.pollForCumulativeCompletion();
        if (success) {
          yield _this18.refreshMap();
        } else {
          console.error('triggerCumulativeCreation: timeout waiting for computation');
        }
      } catch (e) {
        console.error('triggerCumulativeCreation error:', e);
      }
      _this18.creatingCumulative = false;
      _this18.cdr.markForCheck();
    })();
  }
  setPeriodOfNow() {
    var _this19 = this;
    return (0,_opt_atlassian_pipelines_agent_build_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_0__["default"])(function* () {
      const last30mn = new Date();
      last30mn.setMinutes(last30mn.getMinutes() - 30);
      _this19.periodBeginAsString = last30mn.toISOString().substring(0, 11) + last30mn.toLocaleTimeString().substring(0, 5);
      _this19.periodDurationAsString = '1';
      yield _this19.onPeriodBeginChange(null);
      yield _this19.refreshManager.refresh(false, _this19.toggleAdmin);
    })();
  }
  updatePercentOfImages() {
    if (!this.countsPeriod?.percentImages?.length) {
      this.percentOfImages = 0;
      return;
    }
    const duringPeriod = this.countsPeriod.percentImages.filter(a => this.periodBegin.getTime() <= new Date(a.name).getTime() && new Date(a.name).getTime() <= this.periodEnd.getTime());
    const summed = duringPeriod.reduce((a, b) => a + (b.x ?? 0), 0);
    this.percentOfImages = Math.round(summed / duringPeriod.length);
  }
  updatePercentOfComputations() {
    const expectedCount = this.refreshManager?.getExpectedTimelineCount();
    if (!expectedCount) {
      this.percentOfComputations = 0;
      this.presentComputationCount = 0;
      this.expectedComputationCount = 0;
      return;
    }
    const presentCount = this.refreshManager?.getPresentTimelineCount() || 0;
    this.presentComputationCount = presentCount;
    this.expectedComputationCount = expectedCount;
    this.percentOfComputations = Math.round(presentCount / expectedCount * 100);
  }
  pollForCumulativeCompletion() {
    var _this20 = this;
    return (0,_opt_atlassian_pipelines_agent_build_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_0__["default"])(function* () {
      const POLL_TIMEOUT_MS = 900000;
      const POLL_INTERVAL_MS = 3000;
      const startTime = Date.now();
      const windowInMinutes = Math.round((_this20.periodEnd.getTime() - _this20.periodBegin.getTime()) / 60000);
      while (Date.now() - startTime < POLL_TIMEOUT_MS) {
        try {
          const progress = yield _this20.profileService.getRainProgress(_this20.rainNode.id);
          if (progress === 0) {
            // Trigger background fetch from raain-ground via timeframeCumulative
            yield _this20.profileService.getRainTimeframe(_this20.rainNode.id, _this20.periodBegin, _this20.periodEnd, _this20.toggleAdmin, _this20.selectedProvider, _this20.selectedTimeStep, windowInMinutes);
            // Verify cumulative actually exists
            const response = yield _this20.profileService.getCumulativePeriods(_this20.rainNode.id, {
              provider: _this20.selectedProvider,
              windowInMinutes,
              forced: _this20.toggleAdmin
            });
            const found = response.periods.find(p => p.windowInMinutes === windowInMinutes);
            if (found) {
              return true;
            }
          }
          yield new Promise(r => setTimeout(r, POLL_INTERVAL_MS));
        } catch (e) {
          console.warn('Poll error:', e);
          yield new Promise(r => setTimeout(r, POLL_INTERVAL_MS));
        }
      }
      return false;
    })();
  }
  getDateBasedOnCumulativeMode(fallbackDates) {
    if (fallbackDates?.length > 0) {
      const dateExists = fallbackDates.some(d => d.getTime() === this.dateShown?.getTime());
      if (!dateExists) {
        return this.toggleCumulative ? fallbackDates[fallbackDates.length - 1] : fallbackDates[0];
      }
    }
    return this.toggleCumulative ? this.periodEnd : this.periodBegin;
  }
  getCumulativeHours() {
    return this.toggleCumulative ? parseFloat(this.periodDurationAsString) : 0;
  }
  getDurationInHours() {
    return parseFloat(this.periodDurationAsString);
  }
  updateRefreshManagerPeriod() {
    this.refreshManager.cumulative = this.toggleCumulative;
    // Align dates to 5-minute boundaries (floor) for consistency with raain-ground
    const alignTo5minFloor = date => {
      const minutes = date.getMinutes();
      const alignedMinutes = Math.floor(minutes / 5) * 5;
      return new Date(date.getFullYear(), date.getMonth(), date.getDate(), date.getHours(), alignedMinutes, 0, 0);
    };
    this.refreshManager.period = {
      begin: alignTo5minFloor(this.periodBegin),
      end: alignTo5minFloor(this.periodEnd)
    };
  }
  fetchAndUpdateMap() {
    var _this21 = this;
    return (0,_opt_atlassian_pipelines_agent_build_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_0__["default"])(function* () {
      yield _this21.refreshManager.fetch(_this21.dateShown, _this21.toggleGaugeMeasures, _this21.getCumulativeHours());
      _this21.currentTimeframeTarget = _this21.refreshManager.getTimelineSelectedFrameSet();
      _this21.cdr.markForCheck();
    })();
  }
  applyRefreshManagerSettings() {
    var _this22 = this;
    return (0,_opt_atlassian_pipelines_agent_build_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_0__["default"])(function* () {
      if (!_this22.refreshManager) {
        return;
      }
      _this22.refreshManager.provider = _this22.selectedProvider;
      _this22.refreshManager.timeStepInMinutes = _this22.selectedTimeStep;
      _this22.refreshManager.timeStepMode = _this22.timeStepMode;
      yield _this22.refreshManager.refresh(false, _this22.toggleAdmin);
    })();
  }
  cleanAll() {
    this.borders = [];
    this.isAdmin = false;
    this.timeframeContainers = new raain_ui__WEBPACK_IMPORTED_MODULE_2__.TimeframeContainers([]);
    this.currentTimeframeTarget = null;
    this.timeframeDates = [];
    this.countPoints = [];
    this.countsPeriod = {
      progress: 0,
      queueRunning: 0,
      percentImages: []
    };
    this.gaugeSelectedPoints = [];
    this.toggleHistory = false;
    this.toggleMap = true;
    this.toggleCompare = false;
    this.toggleGaugeMeasures = false;
    this.toggleRemoveCompareDuplicate = true;
    this.toggleCumulative = this.showCumulativeToggle ? this.storage.get('raain-toggleCumulative') : false;
    this.periodBegin = new Date(this.storage.get('raain-periodBegin'));
    this.periodEnd = new Date(this.storage.get('raain-periodEnd'));
    this.periodBeginAsString = RaainDetailsComponent.PeriodDisplay(this.periodBegin);
    this.periodEndAsString = RaainDetailsComponent.PeriodDisplay(this.periodEnd);
    const durationMs = this.periodEnd.getTime() - this.periodBegin.getTime();
    this.periodDurationAsString = '' + durationMs / RaainDetailsComponent.HOUR_MS;
    this.dateShown = this.getDateBasedOnCumulativeMode();
    this.refreshInProgress = false;
    this.showFullError = false;
    this.showQualityModal = false;
    this.qualityIndicators = [];
    this.qualityIndicatorsLoading = false;
    this.compareManager?.cleanAll();
    this.refreshManager?.cleanAll();
  }
  init() {
    var _this23 = this;
    return (0,_opt_atlassian_pipelines_agent_build_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_0__["default"])(function* () {
      _this23.cleanAll();
      _this23.updateCachedValues();
      yield _this23.initRain();
      _this23.cdr.markForCheck();
    })();
  }
  initRain() {
    var _this24 = this;
    return (0,_opt_atlassian_pipelines_agent_build_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_0__["default"])(function* () {
      if (!_this24.rainNode) {
        return;
      }
      _this24.isAdmin = _this24.profileService.isAdmin();
      _this24.refreshManager.rainNode = _this24.rainNode;
      _this24.compareManager.rainNode = _this24.rainNode;
      // Load providers and set on refreshManager
      yield _this24.loadProviders();
      _this24.refreshManager.setMethods(_this24.onRefreshInProgress.bind(_this24), _this24.onRefreshDone.bind(_this24), _this24.onFetchDone.bind(_this24));
      const center = _this24.rainNode.getCenter();
      _this24.coordinates = new raain_ui__WEBPACK_IMPORTED_MODULE_2__.MapLatLng(center.lat, center.lng);
      _this24.teamNode = yield _this24.profileService.getTeam(_this24.rainNode.getLink(raain_model__WEBPACK_IMPORTED_MODULE_1__.TeamNode.TYPE).getId());
      // Load all gauges linked to the rainNode on map
      yield _this24.compareManager.setGaugesInMap();
      if (_this24.periodBegin && _this24.periodEnd) {
        _this24.updateRefreshManagerPeriod();
        yield _this24.refreshManager.refresh(false, _this24.toggleAdmin);
      }
    })();
  }
  onRefreshInProgress(countPeriods, timeframeDates) {
    var _this25 = this;
    return (0,_opt_atlassian_pipelines_agent_build_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_0__["default"])(function* () {
      _this25.refreshInProgress = true;
      _this25.countsPeriod = countPeriods;
      _this25.timeframeDates = timeframeDates;
      _this25.updateCachedValues();
      _this25.cdr.markForCheck();
    })();
  }
  onRefreshDone(timeframeDates) {
    var _this26 = this;
    return (0,_opt_atlassian_pipelines_agent_build_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_0__["default"])(function* () {
      _this26.timeframeDates = timeframeDates;
      _this26.refreshInProgress = false;
      _this26.updateCachedValues();
      _this26.cdr.markForCheck();
      if (_this26.toggleMap && timeframeDates.length > 0) {
        _this26.dateShown = _this26.getDateBasedOnCumulativeMode(timeframeDates);
        if (_this26.dateShown) {
          yield _this26.fetchAndUpdateMap();
        }
      }
    })();
  }
  onFetchDone(timeframeContainers) {
    var _this27 = this;
    return (0,_opt_atlassian_pipelines_agent_build_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_0__["default"])(function* () {
      if (timeframeContainers) {
        _this27.timeframeContainers = timeframeContainers;
      }
      _this27.cdr.markForCheck();
    })();
  }
  change(_changes) {
    var _this28 = this;
    return (0,_opt_atlassian_pipelines_agent_build_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_0__["default"])(function* () {
      yield _this28.init();
    })();
  }
  static {
    this.ɵfac = function RaainDetailsComponent_Factory(t) {
      return new (t || RaainDetailsComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵdirectiveInject"](_storage_service__WEBPACK_IMPORTED_MODULE_4__.Storage), _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵdirectiveInject"](_angular_core__WEBPACK_IMPORTED_MODULE_10__.ChangeDetectorRef));
    };
  }
  static {
    this.ɵcmp = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵdefineComponent"]({
      type: RaainDetailsComponent,
      selectors: [["raain-details"]],
      viewQuery: function RaainDetailsComponent_Query(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵviewQuery"](_c0, 5);
          _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵviewQuery"](_c1, 5);
        }
        if (rf & 2) {
          let _t;
          _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵqueryRefresh"](_t = _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵloadQuery"]()) && (ctx.cumulativeToggleRef = _t.first);
          _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵqueryRefresh"](_t = _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵloadQuery"]()) && (ctx.performanceCanvasRef = _t.first);
        }
      },
      inputs: {
        toggleAdmin: "toggleAdmin",
        rainNode: "rainNode",
        compareManager: "compareManager",
        refreshManager: "refreshManager",
        profileService: "profileService",
        radarService: "radarService",
        scaleLabel: "scaleLabel",
        showCreateMissingImages: "showCreateMissingImages",
        showCumulativeCompare: "showCumulativeCompare",
        showDateRange: "showDateRange",
        showCumulativeToggle: "showCumulativeToggle",
        forceTimeStep: "forceTimeStep"
      },
      features: [_angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵNgOnChangesFeature"]],
      decls: 1,
      vars: 1,
      consts: [["class", "raain-details-container", 4, "ngIf"], [1, "raain-details-container"], [1, "period-card"], [1, "period-controls"], [1, "period-row"], ["fill", "outline", 3, "click"], ["name", "calendar-clear-outline", "slot", "start"], ["slot", "end", 3, "name"], [1, "period-start", "ion-hide-md-down"], ["type", "datetime-local", 1, "datetime-input", 3, "disabled", "value", "change"], [1, "period-duration", "ion-hide-md-down"], ["id", "periodDuration", "interface", "popover", 1, "duration-select", 3, "ngModel", "disabled", "ionDismiss", "ngModelChange"], ["value", "0.25"], ["value", "0.5"], ["value", "1"], ["value", "2"], ["value", "3"], ["value", "4"], ["value", "5"], ["value", "6"], ["value", "8"], ["value", "10"], ["value", "12"], ["value", "24", 4, "ngIf"], ["class", "toggle-cumulative", 3, "click", 4, "ngIf"], ["class", "period-controls", 4, "ngIf"], [1, "map-performance"], ["id", "progressAndRefresh"], ["size", "12", "size-md", "6", 1, "provider-selection"], ["fill", "clear", 1, "quality-info-button", 3, "click"], ["name", "help-circle-outline", "slot", "end"], ["class", "selection-row", 4, "ngIf"], ["size", "12", "size-md", "6", 1, "ion-text-right"], [1, "refresh-button", 3, "disabled", "click"], ["color", "primary", 3, "buffer", "value"], ["class", "error-row", "size", "12", 3, "click", 4, "ngIf"], [1, "map-card"], [1, "map-content"], [4, "ngIf"], ["color", "primary", 3, "buffer", "value", 4, "ngIf"], ["class", "gauge-card", 4, "ngIf"], ["class", "quality-modal-overlay", 3, "click", 4, "ngIf"], [3, "currentPeriodBegin", "currentPeriodEnd", "isAdmin", "provider", "rainId", "timeStepInMinutes", "cancelled", "periodSelected", 4, "ngIf"], ["value", "24"], [1, "toggle-cumulative", 3, "click"], [3, "checked"], ["cumulativeToggle", ""], [3, "currentHeight", "fetchData", "points", "changedDate"], [1, "selection-row"], ["interface", "popover", "label", "Provider", "placeholder", "Select Provider", 3, "value", "ionChange"], [3, "value", 4, "ngFor", "ngForOf"], ["interface", "popover", "label", "Time Step", "placeholder", "Select Time Step", 3, "disabled", "value", "ionChange"], [1, "computation-count"], ["fill", "clear", "color", "medium", "id", "createMissingImages", "size", "small", 3, "disabled", "click", 4, "ngIf"], ["class", "progress-indicator", 4, "ngIf"], [3, "value"], ["fill", "clear", "color", "medium", "id", "createMissingImages", "size", "small", 3, "disabled", "click"], ["name", "refresh-outline", "slot", "icon-only", 4, "ngIf"], ["name", "crescent", "slot", "icon-only", 4, "ngIf"], ["name", "refresh-outline", "slot", "icon-only"], ["name", "crescent", "slot", "icon-only"], [1, "progress-indicator"], ["size", "12", 1, "error-row", 3, "click"], [1, "error-content"], ["name", "warning-outline", 1, "error-icon"], [1, "error-text"], [1, "error-caret", 3, "name"], ["size-lg", "7", "size-md", "12", 1, "map-column"], [1, "map-container"], [3, "coordinates", "cumulativeDurationInMinutes", "currentHeight", "defaultDate", "markers", "scaleLabel", "showNavigation", "showDateRange", "showVisiblePixelMarkers", "sumFn", "sumValues", "timeframeContainers", "timeframeDates", "changedDate", "changedSum", "selectedMarker"], ["raainMapRef", ""], [1, "data-column"], [1, "technical-details"], [1, "details-content"], [1, "detail-row"], [1, "detail-label"], [1, "detail-value"], [2, "margin-left", "8px", "transform", "scale(0.7)", 3, "ngModel", "ionChange", "ngModelChange"], ["class", "data-column", "size-lg", "5", "size-md", "12", 4, "ngIf"], ["size-lg", "5", "size-md", "12", 1, "data-column"], [1, "data-panel"], [1, "compare-stack"], [3, "compareManager", "cumulative", "selectedPoint"], [1, "detail-row", 3, "ngClass"], [1, "gauge-card"], ["name", "analytics-outline"], [3, "currentHeight", "focusDate", "focusRange", "points", "withoutAll"], [1, "quality-modal-overlay", 3, "click"], [1, "quality-modal-content", 3, "click"], [1, "quality-modal-header"], ["fill", "clear", 3, "click"], ["name", "close-outline"], [1, "quality-modal-body"], ["class", "quality-loading", 4, "ngIf"], ["class", "quality-empty", 4, "ngIf"], ["class", "performance-chart-container", 4, "ngIf"], ["class", "quality-details-section", 4, "ngIf"], [1, "quality-loading"], ["name", "crescent"], [1, "quality-empty"], [1, "performance-chart-container"], ["performanceCanvas", ""], [1, "quality-details-section"], [1, "quality-details-toggle", 3, "click"], [3, "name"], ["class", "quality-table", 4, "ngIf"], [1, "quality-table"], [4, "ngFor", "ngForOf"], [3, "currentPeriodBegin", "currentPeriodEnd", "isAdmin", "provider", "rainId", "timeStepInMinutes", "cancelled", "periodSelected"]],
      template: function RaainDetailsComponent_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵtemplate"](0, RaainDetailsComponent_div_0_Template, 61, 23, "div", 0);
        }
        if (rf & 2) {
          _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵproperty"]("ngIf", ctx.rainNode);
        }
      },
      dependencies: [_angular_common__WEBPACK_IMPORTED_MODULE_11__.NgClass, _angular_common__WEBPACK_IMPORTED_MODULE_11__.NgForOf, _angular_common__WEBPACK_IMPORTED_MODULE_11__.NgIf, _angular_forms__WEBPACK_IMPORTED_MODULE_12__.NgControlStatus, _angular_forms__WEBPACK_IMPORTED_MODULE_12__.NgModel, _ionic_angular__WEBPACK_IMPORTED_MODULE_13__.IonButton, _ionic_angular__WEBPACK_IMPORTED_MODULE_13__.IonCard, _ionic_angular__WEBPACK_IMPORTED_MODULE_13__.IonCardContent, _ionic_angular__WEBPACK_IMPORTED_MODULE_13__.IonCardHeader, _ionic_angular__WEBPACK_IMPORTED_MODULE_13__.IonCardTitle, _ionic_angular__WEBPACK_IMPORTED_MODULE_13__.IonCol, _ionic_angular__WEBPACK_IMPORTED_MODULE_13__.IonGrid, _ionic_angular__WEBPACK_IMPORTED_MODULE_13__.IonIcon, _ionic_angular__WEBPACK_IMPORTED_MODULE_13__.IonLabel, _ionic_angular__WEBPACK_IMPORTED_MODULE_13__.IonProgressBar, _ionic_angular__WEBPACK_IMPORTED_MODULE_13__.IonRow, _ionic_angular__WEBPACK_IMPORTED_MODULE_13__.IonSelect, _ionic_angular__WEBPACK_IMPORTED_MODULE_13__.IonSelectOption, _ionic_angular__WEBPACK_IMPORTED_MODULE_13__.IonSpinner, _ionic_angular__WEBPACK_IMPORTED_MODULE_13__.IonToggle, _ionic_angular__WEBPACK_IMPORTED_MODULE_13__.BooleanValueAccessor, _ionic_angular__WEBPACK_IMPORTED_MODULE_13__.SelectValueAccessor, _raain_map_raain_map_component__WEBPACK_IMPORTED_MODULE_5__.RaainMapComponent, _raain_compare_stack_raain_compare_stack_component__WEBPACK_IMPORTED_MODULE_6__.RaainCompareStackComponent, _raain_date_focus_raain_date_focus_component__WEBPACK_IMPORTED_MODULE_7__.RaainDateFocusComponent, _raain_date_dynamic_raain_date_dynamic_component__WEBPACK_IMPORTED_MODULE_8__.RaainDateDynamicComponent, _cumulative_selector_cumulative_selector_component__WEBPACK_IMPORTED_MODULE_9__.CumulativeSelectorComponent, _angular_common__WEBPACK_IMPORTED_MODULE_11__.DecimalPipe, _angular_common__WEBPACK_IMPORTED_MODULE_11__.DatePipe],
      styles: [".raain-details-container[_ngcontent-%COMP%] {\n  max-width: var(--app-max-width);\n  margin: 0 auto;\n  padding: 0 0 24px;\n}\n\n.raain-details-card[_ngcontent-%COMP%] {\n  width: 100%;\n  margin-bottom: 20px;\n}\n.raain-details-card[_ngcontent-%COMP%]   ion-card-header[_ngcontent-%COMP%] {\n  border-bottom: 1px solid rgba(var(--ion-color-medium-rgb), 0.2);\n}\n.raain-details-card[_ngcontent-%COMP%]   ion-card-header[_ngcontent-%COMP%]   ion-card-title[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: center;\n}\n.raain-details-card[_ngcontent-%COMP%]   ion-card-header[_ngcontent-%COMP%]   ion-card-title[_ngcontent-%COMP%]   ion-icon[_ngcontent-%COMP%] {\n  margin-right: 8px;\n  color: var(--ion-color-primary);\n}\n\n.node-info-card[_ngcontent-%COMP%] {\n  background-color: var(--ion-color-light);\n}\n.node-info-card[_ngcontent-%COMP%]   .node-header[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: center;\n}\n.node-info-card[_ngcontent-%COMP%]   .node-header[_ngcontent-%COMP%]   .node-status[_ngcontent-%COMP%] {\n  margin-right: 16px;\n}\n.node-info-card[_ngcontent-%COMP%]   .node-header[_ngcontent-%COMP%]   .node-status[_ngcontent-%COMP%]   ion-icon[_ngcontent-%COMP%] {\n  font-size: 24px;\n}\n.node-info-card[_ngcontent-%COMP%]   .node-header[_ngcontent-%COMP%]   .node-titles[_ngcontent-%COMP%] {\n  flex: 1;\n}\n.node-info-card[_ngcontent-%COMP%]   .node-header[_ngcontent-%COMP%]   .node-titles[_ngcontent-%COMP%]   ion-card-title[_ngcontent-%COMP%] {\n  margin: 0;\n  font-size: 1.4rem;\n  font-weight: 600;\n  color: var(--ion-color-dark);\n}\n.node-info-card[_ngcontent-%COMP%]   .node-header[_ngcontent-%COMP%]   .node-titles[_ngcontent-%COMP%]   ion-card-subtitle[_ngcontent-%COMP%] {\n  padding-left: 0;\n  margin: 4px 0 0;\n  font-size: 0.9rem;\n  color: var(--ion-color-medium);\n}\n\n.count-map-card[_ngcontent-%COMP%] {\n  background-color: var(--ion-color-light);\n}\n\n.period-card[_ngcontent-%COMP%] {\n  background-color: var(--ion-color-light);\n}\n.period-card[_ngcontent-%COMP%]   ion-card-title[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: center;\n}\n.period-card[_ngcontent-%COMP%]   ion-card-title[_ngcontent-%COMP%]   ion-icon[_ngcontent-%COMP%] {\n  margin-right: 8px;\n  color: var(--ion-color-primary);\n  font-size: 20px;\n}\n\n.period-row[_ngcontent-%COMP%] {\n  display: flex;\n  flex-wrap: wrap;\n  align-items: center;\n  gap: 16px;\n  position: relative;\n}\n\n.now-button[_ngcontent-%COMP%] {\n  min-width: 100px;\n}\n\n#all-dates[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: center;\n  margin-left: auto;\n}\n#all-dates[_ngcontent-%COMP%]   .toggle-label[_ngcontent-%COMP%] {\n  margin-right: 8px;\n  white-space: nowrap;\n}\n\n.refresh-button[_ngcontent-%COMP%]   ion-icon[_ngcontent-%COMP%] {\n  margin-right: 4px;\n  color: var(--ion-color-light);\n}\n\n.provider-selection[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: center;\n}\n\n.quality-info-button[_ngcontent-%COMP%] {\n  --padding-start: 8px;\n  --padding-end: 8px;\n  font-size: 0.85rem;\n  color: var(--ion-color-medium);\n}\n.quality-info-button[_ngcontent-%COMP%]   ion-icon[_ngcontent-%COMP%] {\n  font-size: 18px;\n  margin-left: 4px;\n}\n\n.selection-row[_ngcontent-%COMP%] {\n  display: flex;\n  flex-direction: row;\n  align-items: center;\n  gap: 12px;\n}\n.selection-row[_ngcontent-%COMP%]   ion-select[_ngcontent-%COMP%] {\n  flex: 0 0 auto;\n  min-width: 100px;\n  margin-bottom: 0;\n  padding: 4px 8px;\n  border: 1px solid rgba(var(--ion-color-medium-rgb), 0.3);\n  border-radius: var(--ion-border-radius);\n  background-color: var(--ion-color-light);\n}\n.selection-row[_ngcontent-%COMP%]   .computation-count[_ngcontent-%COMP%] {\n  display: inline-flex;\n  align-items: center;\n  gap: 2px;\n  font-size: 0.9em;\n  color: var(--ion-color-medium);\n}\n.selection-row[_ngcontent-%COMP%]   .computation-count[_ngcontent-%COMP%]   ion-button[_ngcontent-%COMP%] {\n  --padding-start: 4px;\n  --padding-end: 4px;\n  margin: 0;\n}\n.selection-row[_ngcontent-%COMP%]   .computation-count[_ngcontent-%COMP%]   .progress-indicator[_ngcontent-%COMP%] {\n  font-size: 0.85em;\n}\n\n.period-start[_ngcontent-%COMP%], .period-duration[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: center;\n}\n\n.toggle-cumulative[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: center;\n  gap: 8px;\n  margin-left: auto;\n}\n.toggle-cumulative[_ngcontent-%COMP%]   .text-primary[_ngcontent-%COMP%] {\n  color: var(--ion-color-primary);\n  font-weight: 600;\n}\n\n.hidden-label[_ngcontent-%COMP%] {\n  display: none;\n}\n\n.datetime-input[_ngcontent-%COMP%], #periodDuration[_ngcontent-%COMP%], .duration-select[_ngcontent-%COMP%] {\n  padding: 8px 12px;\n  border: 1px solid rgba(var(--ion-color-medium-rgb), 0.3);\n  border-radius: var(--ion-border-radius);\n  background-color: var(--ion-color-light);\n  font-family: var(--ion-font-family);\n}\n.datetime-input[_ngcontent-%COMP%]:focus, #periodDuration[_ngcontent-%COMP%]:focus, .duration-select[_ngcontent-%COMP%]:focus {\n  outline: none;\n  border-color: var(--ion-color-primary);\n}\n\n#periodDuration[_ngcontent-%COMP%], .duration-select[_ngcontent-%COMP%] {\n  min-width: 150px;\n}\n\n.gauge-card[_ngcontent-%COMP%] {\n  background-color: var(--ion-color-light);\n}\n.gauge-card[_ngcontent-%COMP%]   ion-card-title[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: center;\n}\n.gauge-card[_ngcontent-%COMP%]   ion-card-title[_ngcontent-%COMP%]   ion-icon[_ngcontent-%COMP%] {\n  margin-right: 8px;\n  color: var(--ion-color-primary);\n  font-size: 20px;\n}\n\n.error-row[_ngcontent-%COMP%] {\n  cursor: pointer;\n  background-color: rgba(var(--ion-color-danger-rgb), 0.1);\n  border-left: 3px solid var(--ion-color-danger);\n  margin-top: 8px;\n  border-radius: 4px;\n  transition: background-color 0.2s ease;\n}\n.error-row[_ngcontent-%COMP%]:hover {\n  background-color: rgba(var(--ion-color-danger-rgb), 0.15);\n}\n.error-row[_ngcontent-%COMP%]   .error-content[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: flex-start;\n  padding: 8px 12px;\n  gap: 8px;\n}\n.error-row[_ngcontent-%COMP%]   .error-icon[_ngcontent-%COMP%] {\n  color: var(--ion-color-danger);\n  font-size: 18px;\n  flex-shrink: 0;\n  margin-top: 2px;\n}\n.error-row[_ngcontent-%COMP%]   .error-text[_ngcontent-%COMP%] {\n  flex: 1;\n  color: var(--ion-color-danger-shade);\n  font-size: 0.9rem;\n  word-break: break-word;\n}\n.error-row[_ngcontent-%COMP%]   .error-text.expanded[_ngcontent-%COMP%] {\n  white-space: pre-wrap;\n}\n.error-row[_ngcontent-%COMP%]   .error-caret[_ngcontent-%COMP%] {\n  color: var(--ion-color-danger);\n  font-size: 16px;\n  flex-shrink: 0;\n  margin-top: 2px;\n}\n\nraain-compare-stack[_ngcontent-%COMP%] {\n  width: 100%;\n  display: block;\n}\n\n@media (max-width: 768px) {\n  .period-row[_ngcontent-%COMP%] {\n    flex-direction: row;\n    justify-content: space-between;\n    align-items: center;\n  }\n  #all-dates[_ngcontent-%COMP%] {\n    margin-left: auto;\n    padding-left: 8px;\n  }\n  #all-dates[_ngcontent-%COMP%]   .toggle-label[_ngcontent-%COMP%] {\n    font-size: 0.9rem;\n  }\n  .map-header[_ngcontent-%COMP%] {\n    flex-direction: row;\n    justify-content: space-between;\n    align-items: center;\n    gap: 16px;\n  }\n}\n.quality-modal-overlay[_ngcontent-%COMP%] {\n  position: fixed;\n  top: 0;\n  left: 0;\n  right: 0;\n  bottom: 0;\n  background-color: rgba(0, 0, 0, 0.5);\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  z-index: 9999;\n}\n\n.quality-modal-content[_ngcontent-%COMP%] {\n  background-color: var(--ion-background-color, #fff);\n  border-radius: 12px;\n  width: 95%;\n  max-width: 900px;\n  max-height: 80vh;\n  overflow: auto;\n  box-shadow: 0 4px 24px rgba(0, 0, 0, 0.2);\n}\n\n.quality-modal-header[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: center;\n  justify-content: space-between;\n  padding: 16px 20px;\n  border-bottom: 1px solid rgba(var(--ion-color-medium-rgb), 0.2);\n}\n.quality-modal-header[_ngcontent-%COMP%]   h2[_ngcontent-%COMP%] {\n  margin: 0;\n  font-size: 1.25rem;\n  font-weight: 600;\n  color: var(--ion-color-dark);\n}\n.quality-modal-header[_ngcontent-%COMP%]   ion-button[_ngcontent-%COMP%] {\n  --padding-start: 8px;\n  --padding-end: 8px;\n}\n\n.quality-modal-body[_ngcontent-%COMP%] {\n  padding: 20px;\n}\n\n.quality-table[_ngcontent-%COMP%] {\n  width: 100%;\n  border-collapse: collapse;\n  margin-top: 16px;\n  table-layout: fixed;\n}\n.quality-table[_ngcontent-%COMP%]   th[_ngcontent-%COMP%], .quality-table[_ngcontent-%COMP%]   td[_ngcontent-%COMP%] {\n  width: 16.66%;\n  padding: 12px 16px;\n  text-align: center;\n  vertical-align: top;\n  border-bottom: 1px solid rgba(var(--ion-color-medium-rgb), 0.2);\n}\n.quality-table[_ngcontent-%COMP%]   th[_ngcontent-%COMP%] {\n  background-color: rgba(var(--ion-color-primary-rgb), 0.1);\n  font-weight: 600;\n  color: var(--ion-color-dark);\n}\n.quality-table[_ngcontent-%COMP%]   td[_ngcontent-%COMP%] {\n  color: var(--ion-color-dark-tint);\n  font-size: 0.7rem;\n}\n.quality-table[_ngcontent-%COMP%]   tbody[_ngcontent-%COMP%]   tr[_ngcontent-%COMP%]:hover {\n  background-color: rgba(var(--ion-color-primary-rgb), 0.05);\n}\n\n.quality-loading[_ngcontent-%COMP%] {\n  display: flex;\n  flex-direction: column;\n  align-items: center;\n  justify-content: center;\n  padding: 40px 20px;\n  color: var(--ion-color-medium);\n}\n.quality-loading[_ngcontent-%COMP%]   ion-spinner[_ngcontent-%COMP%] {\n  margin-bottom: 12px;\n}\n\n.quality-empty[_ngcontent-%COMP%] {\n  text-align: center;\n  padding: 40px 20px;\n  color: var(--ion-color-medium);\n  font-style: italic;\n}\n\n.performance-chart-container[_ngcontent-%COMP%] {\n  height: 300px;\n  width: 100%;\n  position: relative;\n  margin-bottom: 16px;\n}\n\n.quality-details-section[_ngcontent-%COMP%] {\n  border-top: 1px solid rgba(var(--ion-color-medium-rgb), 0.2);\n  padding-top: 8px;\n}\n\n.quality-details-toggle[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: center;\n  gap: 8px;\n  cursor: pointer;\n  padding: 8px 0;\n  color: var(--ion-color-medium);\n  font-size: 0.9rem;\n}\n.quality-details-toggle[_ngcontent-%COMP%]:hover {\n  color: var(--ion-color-dark);\n}\n.quality-details-toggle[_ngcontent-%COMP%]   ion-icon[_ngcontent-%COMP%] {\n  font-size: 16px;\n}\n/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8uL3NyYy9jb3JlL3NoYXJlZC9yYWFpbi1kZXRhaWxzL3JhYWluLWRldGFpbHMuY29tcG9uZW50LnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQ0E7RUFDRSwrQkFBQTtFQUNBLGNBQUE7RUFDQSxpQkFBQTtBQUFGOztBQUlBO0VBQ0UsV0FBQTtFQUNBLG1CQUFBO0FBREY7QUFHRTtFQUNFLCtEQUFBO0FBREo7QUFHSTtFQUNFLGFBQUE7RUFDQSxtQkFBQTtBQUROO0FBR007RUFDRSxpQkFBQTtFQUNBLCtCQUFBO0FBRFI7O0FBUUE7RUFDRSx3Q0FBQTtBQUxGO0FBT0U7RUFDRSxhQUFBO0VBQ0EsbUJBQUE7QUFMSjtBQU9JO0VBQ0Usa0JBQUE7QUFMTjtBQU9NO0VBQ0UsZUFBQTtBQUxSO0FBU0k7RUFDRSxPQUFBO0FBUE47QUFTTTtFQUNFLFNBQUE7RUFDQSxpQkFBQTtFQUNBLGdCQUFBO0VBQ0EsNEJBQUE7QUFQUjtBQVVNO0VBQ0UsZUFBQTtFQUNBLGVBQUE7RUFDQSxpQkFBQTtFQUNBLDhCQUFBO0FBUlI7O0FBZUE7RUFDRSx3Q0FBQTtBQVpGOztBQWdCQTtFQUNFLHdDQUFBO0FBYkY7QUFlRTtFQUNFLGFBQUE7RUFDQSxtQkFBQTtBQWJKO0FBZUk7RUFDRSxpQkFBQTtFQUNBLCtCQUFBO0VBQ0EsZUFBQTtBQWJOOztBQWtCQTtFQUNFLGFBQUE7RUFDQSxlQUFBO0VBQ0EsbUJBQUE7RUFDQSxTQUFBO0VBQ0Esa0JBQUE7QUFmRjs7QUFrQkE7RUFDRSxnQkFBQTtBQWZGOztBQWtCQTtFQUNFLGFBQUE7RUFDQSxtQkFBQTtFQUNBLGlCQUFBO0FBZkY7QUFpQkU7RUFDRSxpQkFBQTtFQUNBLG1CQUFBO0FBZko7O0FBb0JFO0VBQ0UsaUJBQUE7RUFDQSw2QkFBQTtBQWpCSjs7QUFzQkE7RUFDRSxhQUFBO0VBQ0EsbUJBQUE7QUFuQkY7O0FBdUJBO0VBQ0Usb0JBQUE7RUFDQSxrQkFBQTtFQUNBLGtCQUFBO0VBQ0EsOEJBQUE7QUFwQkY7QUFzQkU7RUFDRSxlQUFBO0VBQ0EsZ0JBQUE7QUFwQko7O0FBd0JBO0VBQ0UsYUFBQTtFQUNBLG1CQUFBO0VBQ0EsbUJBQUE7RUFDQSxTQUFBO0FBckJGO0FBdUJFO0VBQ0UsY0FBQTtFQUNBLGdCQUFBO0VBQ0EsZ0JBQUE7RUFDQSxnQkFBQTtFQUNBLHdEQUFBO0VBQ0EsdUNBQUE7RUFDQSx3Q0FBQTtBQXJCSjtBQXdCRTtFQUNFLG9CQUFBO0VBQ0EsbUJBQUE7RUFDQSxRQUFBO0VBQ0EsZ0JBQUE7RUFDQSw4QkFBQTtBQXRCSjtBQXdCSTtFQUNFLG9CQUFBO0VBQ0Esa0JBQUE7RUFDQSxTQUFBO0FBdEJOO0FBeUJJO0VBQ0UsaUJBQUE7QUF2Qk47O0FBNEJBO0VBQ0UsYUFBQTtFQUNBLG1CQUFBO0FBekJGOztBQTRCQTtFQUNFLGFBQUE7RUFDQSxtQkFBQTtFQUNBLFFBQUE7RUFDQSxpQkFBQTtBQXpCRjtBQTJCRTtFQUNFLCtCQUFBO0VBQ0EsZ0JBQUE7QUF6Qko7O0FBNkJBO0VBQ0UsYUFBQTtBQTFCRjs7QUE4QkE7RUFDRSxpQkFBQTtFQUNBLHdEQUFBO0VBQ0EsdUNBQUE7RUFDQSx3Q0FBQTtFQUNBLG1DQUFBO0FBM0JGO0FBNkJFO0VBQ0UsYUFBQTtFQUNBLHNDQUFBO0FBM0JKOztBQStCQTtFQUNFLGdCQUFBO0FBNUJGOztBQWtDQTtFQUNFLHdDQUFBO0FBL0JGO0FBaUNFO0VBQ0UsYUFBQTtFQUNBLG1CQUFBO0FBL0JKO0FBaUNJO0VBQ0UsaUJBQUE7RUFDQSwrQkFBQTtFQUNBLGVBQUE7QUEvQk47O0FBdUNBO0VBQ0UsZUFBQTtFQUNBLHdEQUFBO0VBQ0EsOENBQUE7RUFDQSxlQUFBO0VBQ0Esa0JBQUE7RUFDQSxzQ0FBQTtBQXBDRjtBQXNDRTtFQUNFLHlEQUFBO0FBcENKO0FBdUNFO0VBQ0UsYUFBQTtFQUNBLHVCQUFBO0VBQ0EsaUJBQUE7RUFDQSxRQUFBO0FBckNKO0FBd0NFO0VBQ0UsOEJBQUE7RUFDQSxlQUFBO0VBQ0EsY0FBQTtFQUNBLGVBQUE7QUF0Q0o7QUF5Q0U7RUFDRSxPQUFBO0VBQ0Esb0NBQUE7RUFDQSxpQkFBQTtFQUNBLHNCQUFBO0FBdkNKO0FBeUNJO0VBQ0UscUJBQUE7QUF2Q047QUEyQ0U7RUFDRSw4QkFBQTtFQUNBLGVBQUE7RUFDQSxjQUFBO0VBQ0EsZUFBQTtBQXpDSjs7QUE4Q0E7RUFDRSxXQUFBO0VBQ0EsY0FBQTtBQTNDRjs7QUErQ0E7RUFDRTtJQUNFLG1CQUFBO0lBQ0EsOEJBQUE7SUFDQSxtQkFBQTtFQTVDRjtFQStDQTtJQUNFLGlCQUFBO0lBQ0EsaUJBQUE7RUE3Q0Y7RUErQ0U7SUFDRSxpQkFBQTtFQTdDSjtFQWlEQTtJQUNFLG1CQUFBO0lBQ0EsOEJBQUE7SUFDQSxtQkFBQTtJQUNBLFNBQUE7RUEvQ0Y7QUFDRjtBQW1EQTtFQUNFLGVBQUE7RUFDQSxNQUFBO0VBQ0EsT0FBQTtFQUNBLFFBQUE7RUFDQSxTQUFBO0VBQ0Esb0NBQUE7RUFDQSxhQUFBO0VBQ0EsbUJBQUE7RUFDQSx1QkFBQTtFQUNBLGFBQUE7QUFqREY7O0FBb0RBO0VBQ0UsbURBQUE7RUFDQSxtQkFBQTtFQUNBLFVBQUE7RUFDQSxnQkFBQTtFQUNBLGdCQUFBO0VBQ0EsY0FBQTtFQUNBLHlDQUFBO0FBakRGOztBQW9EQTtFQUNFLGFBQUE7RUFDQSxtQkFBQTtFQUNBLDhCQUFBO0VBQ0Esa0JBQUE7RUFDQSwrREFBQTtBQWpERjtBQW1ERTtFQUNFLFNBQUE7RUFDQSxrQkFBQTtFQUNBLGdCQUFBO0VBQ0EsNEJBQUE7QUFqREo7QUFvREU7RUFDRSxvQkFBQTtFQUNBLGtCQUFBO0FBbERKOztBQXNEQTtFQUNFLGFBQUE7QUFuREY7O0FBc0RBO0VBQ0UsV0FBQTtFQUNBLHlCQUFBO0VBQ0EsZ0JBQUE7RUFDQSxtQkFBQTtBQW5ERjtBQXFERTtFQUNFLGFBQUE7RUFDQSxrQkFBQTtFQUNBLGtCQUFBO0VBQ0EsbUJBQUE7RUFDQSwrREFBQTtBQW5ESjtBQXNERTtFQUNFLHlEQUFBO0VBQ0EsZ0JBQUE7RUFDQSw0QkFBQTtBQXBESjtBQXVERTtFQUNFLGlDQUFBO0VBQ0EsaUJBQUE7QUFyREo7QUF3REU7RUFDRSwwREFBQTtBQXRESjs7QUEwREE7RUFDRSxhQUFBO0VBQ0Esc0JBQUE7RUFDQSxtQkFBQTtFQUNBLHVCQUFBO0VBQ0Esa0JBQUE7RUFDQSw4QkFBQTtBQXZERjtBQXlERTtFQUNFLG1CQUFBO0FBdkRKOztBQTJEQTtFQUNFLGtCQUFBO0VBQ0Esa0JBQUE7RUFDQSw4QkFBQTtFQUNBLGtCQUFBO0FBeERGOztBQTJEQTtFQUNFLGFBQUE7RUFDQSxXQUFBO0VBQ0Esa0JBQUE7RUFDQSxtQkFBQTtBQXhERjs7QUEyREE7RUFDRSw0REFBQTtFQUNBLGdCQUFBO0FBeERGOztBQTJEQTtFQUNFLGFBQUE7RUFDQSxtQkFBQTtFQUNBLFFBQUE7RUFDQSxlQUFBO0VBQ0EsY0FBQTtFQUNBLDhCQUFBO0VBQ0EsaUJBQUE7QUF4REY7QUEwREU7RUFDRSw0QkFBQTtBQXhESjtBQTJERTtFQUNFLGVBQUE7QUF6REoiLCJzb3VyY2VzQ29udGVudCI6WyIvLyBNYWluIGNvbnRhaW5lclxuLnJhYWluLWRldGFpbHMtY29udGFpbmVyIHtcbiAgbWF4LXdpZHRoOiB2YXIoLS1hcHAtbWF4LXdpZHRoKTtcbiAgbWFyZ2luOiAwIGF1dG87XG4gIHBhZGRpbmc6IDAgMCAyNHB4O1xufVxuXG4vLyBDYXJkIHN0eWxlcyBzcGVjaWZpYyB0byB0aGlzIGNvbXBvbmVudFxuLnJhYWluLWRldGFpbHMtY2FyZCB7XG4gIHdpZHRoOiAxMDAlO1xuICBtYXJnaW4tYm90dG9tOiAyMHB4O1xuXG4gIGlvbi1jYXJkLWhlYWRlciB7XG4gICAgYm9yZGVyLWJvdHRvbTogMXB4IHNvbGlkIHJnYmEodmFyKC0taW9uLWNvbG9yLW1lZGl1bS1yZ2IpLCAwLjIpO1xuXG4gICAgaW9uLWNhcmQtdGl0bGUge1xuICAgICAgZGlzcGxheTogZmxleDtcbiAgICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG5cbiAgICAgIGlvbi1pY29uIHtcbiAgICAgICAgbWFyZ2luLXJpZ2h0OiA4cHg7XG4gICAgICAgIGNvbG9yOiB2YXIoLS1pb24tY29sb3ItcHJpbWFyeSk7XG4gICAgICB9XG4gICAgfVxuICB9XG59XG5cbi8vIE5vZGUgaW5mbyBjYXJkXG4ubm9kZS1pbmZvLWNhcmQge1xuICBiYWNrZ3JvdW5kLWNvbG9yOiB2YXIoLS1pb24tY29sb3ItbGlnaHQpO1xuXG4gIC5ub2RlLWhlYWRlciB7XG4gICAgZGlzcGxheTogZmxleDtcbiAgICBhbGlnbi1pdGVtczogY2VudGVyO1xuXG4gICAgLm5vZGUtc3RhdHVzIHtcbiAgICAgIG1hcmdpbi1yaWdodDogMTZweDtcblxuICAgICAgaW9uLWljb24ge1xuICAgICAgICBmb250LXNpemU6IDI0cHg7XG4gICAgICB9XG4gICAgfVxuXG4gICAgLm5vZGUtdGl0bGVzIHtcbiAgICAgIGZsZXg6IDE7XG5cbiAgICAgIGlvbi1jYXJkLXRpdGxlIHtcbiAgICAgICAgbWFyZ2luOiAwO1xuICAgICAgICBmb250LXNpemU6IDEuNHJlbTtcbiAgICAgICAgZm9udC13ZWlnaHQ6IDYwMDtcbiAgICAgICAgY29sb3I6IHZhcigtLWlvbi1jb2xvci1kYXJrKTtcbiAgICAgIH1cblxuICAgICAgaW9uLWNhcmQtc3VidGl0bGUge1xuICAgICAgICBwYWRkaW5nLWxlZnQ6IDA7XG4gICAgICAgIG1hcmdpbjogNHB4IDAgMDtcbiAgICAgICAgZm9udC1zaXplOiAwLjlyZW07XG4gICAgICAgIGNvbG9yOiB2YXIoLS1pb24tY29sb3ItbWVkaXVtKTtcbiAgICAgIH1cbiAgICB9XG4gIH1cbn1cblxuLy8gQ291bnQgbWFwIGNhcmRcbi5jb3VudC1tYXAtY2FyZCB7XG4gIGJhY2tncm91bmQtY29sb3I6IHZhcigtLWlvbi1jb2xvci1saWdodCk7XG59XG5cbi8vIFBlcmlvZCBjYXJkIGFuZCBjb250cm9sc1xuLnBlcmlvZC1jYXJkIHtcbiAgYmFja2dyb3VuZC1jb2xvcjogdmFyKC0taW9uLWNvbG9yLWxpZ2h0KTtcblxuICBpb24tY2FyZC10aXRsZSB7XG4gICAgZGlzcGxheTogZmxleDtcbiAgICBhbGlnbi1pdGVtczogY2VudGVyO1xuXG4gICAgaW9uLWljb24ge1xuICAgICAgbWFyZ2luLXJpZ2h0OiA4cHg7XG4gICAgICBjb2xvcjogdmFyKC0taW9uLWNvbG9yLXByaW1hcnkpO1xuICAgICAgZm9udC1zaXplOiAyMHB4O1xuICAgIH1cbiAgfVxufVxuXG4ucGVyaW9kLXJvdyB7XG4gIGRpc3BsYXk6IGZsZXg7XG4gIGZsZXgtd3JhcDogd3JhcDtcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbiAgZ2FwOiAxNnB4O1xuICBwb3NpdGlvbjogcmVsYXRpdmU7XG59XG5cbi5ub3ctYnV0dG9uIHtcbiAgbWluLXdpZHRoOiAxMDBweDtcbn1cblxuI2FsbC1kYXRlcyB7XG4gIGRpc3BsYXk6IGZsZXg7XG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG4gIG1hcmdpbi1sZWZ0OiBhdXRvO1xuXG4gIC50b2dnbGUtbGFiZWwge1xuICAgIG1hcmdpbi1yaWdodDogOHB4O1xuICAgIHdoaXRlLXNwYWNlOiBub3dyYXA7XG4gIH1cbn1cblxuLnJlZnJlc2gtYnV0dG9uIHtcbiAgaW9uLWljb24ge1xuICAgIG1hcmdpbi1yaWdodDogNHB4O1xuICAgIGNvbG9yOiB2YXIoLS1pb24tY29sb3ItbGlnaHQpO1xuICB9XG59XG5cbi8vIFByb3ZpZGVyIGFuZCBUaW1lIFN0ZXAgU2VsZWN0aW9uXG4ucHJvdmlkZXItc2VsZWN0aW9uIHtcbiAgZGlzcGxheTogZmxleDtcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbn1cblxuLy8gUXVhbGl0eSBpbmZvIGJ1dHRvblxuLnF1YWxpdHktaW5mby1idXR0b24ge1xuICAtLXBhZGRpbmctc3RhcnQ6IDhweDtcbiAgLS1wYWRkaW5nLWVuZDogOHB4O1xuICBmb250LXNpemU6IDAuODVyZW07XG4gIGNvbG9yOiB2YXIoLS1pb24tY29sb3ItbWVkaXVtKTtcblxuICBpb24taWNvbiB7XG4gICAgZm9udC1zaXplOiAxOHB4O1xuICAgIG1hcmdpbi1sZWZ0OiA0cHg7XG4gIH1cbn1cblxuLnNlbGVjdGlvbi1yb3cge1xuICBkaXNwbGF5OiBmbGV4O1xuICBmbGV4LWRpcmVjdGlvbjogcm93O1xuICBhbGlnbi1pdGVtczogY2VudGVyO1xuICBnYXA6IDEycHg7XG5cbiAgaW9uLXNlbGVjdCB7XG4gICAgZmxleDogMCAwIGF1dG87XG4gICAgbWluLXdpZHRoOiAxMDBweDtcbiAgICBtYXJnaW4tYm90dG9tOiAwO1xuICAgIHBhZGRpbmc6IDRweCA4cHg7XG4gICAgYm9yZGVyOiAxcHggc29saWQgcmdiYSh2YXIoLS1pb24tY29sb3ItbWVkaXVtLXJnYiksIDAuMyk7XG4gICAgYm9yZGVyLXJhZGl1czogdmFyKC0taW9uLWJvcmRlci1yYWRpdXMpO1xuICAgIGJhY2tncm91bmQtY29sb3I6IHZhcigtLWlvbi1jb2xvci1saWdodCk7XG4gIH1cblxuICAuY29tcHV0YXRpb24tY291bnQge1xuICAgIGRpc3BsYXk6IGlubGluZS1mbGV4O1xuICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG4gICAgZ2FwOiAycHg7XG4gICAgZm9udC1zaXplOiAwLjllbTtcbiAgICBjb2xvcjogdmFyKC0taW9uLWNvbG9yLW1lZGl1bSk7XG5cbiAgICBpb24tYnV0dG9uIHtcbiAgICAgIC0tcGFkZGluZy1zdGFydDogNHB4O1xuICAgICAgLS1wYWRkaW5nLWVuZDogNHB4O1xuICAgICAgbWFyZ2luOiAwO1xuICAgIH1cblxuICAgIC5wcm9ncmVzcy1pbmRpY2F0b3Ige1xuICAgICAgZm9udC1zaXplOiAwLjg1ZW07XG4gICAgfVxuICB9XG59XG5cbi5wZXJpb2Qtc3RhcnQsIC5wZXJpb2QtZHVyYXRpb24ge1xuICBkaXNwbGF5OiBmbGV4O1xuICBhbGlnbi1pdGVtczogY2VudGVyO1xufVxuXG4udG9nZ2xlLWN1bXVsYXRpdmUge1xuICBkaXNwbGF5OiBmbGV4O1xuICBhbGlnbi1pdGVtczogY2VudGVyO1xuICBnYXA6IDhweDtcbiAgbWFyZ2luLWxlZnQ6IGF1dG87XG5cbiAgLnRleHQtcHJpbWFyeSB7XG4gICAgY29sb3I6IHZhcigtLWlvbi1jb2xvci1wcmltYXJ5KTtcbiAgICBmb250LXdlaWdodDogNjAwO1xuICB9XG59XG5cbi5oaWRkZW4tbGFiZWwge1xuICBkaXNwbGF5OiBub25lO1xufVxuXG4vLyBGb3JtIGlucHV0c1xuLmRhdGV0aW1lLWlucHV0LCAjcGVyaW9kRHVyYXRpb24sIC5kdXJhdGlvbi1zZWxlY3Qge1xuICBwYWRkaW5nOiA4cHggMTJweDtcbiAgYm9yZGVyOiAxcHggc29saWQgcmdiYSh2YXIoLS1pb24tY29sb3ItbWVkaXVtLXJnYiksIDAuMyk7XG4gIGJvcmRlci1yYWRpdXM6IHZhcigtLWlvbi1ib3JkZXItcmFkaXVzKTtcbiAgYmFja2dyb3VuZC1jb2xvcjogdmFyKC0taW9uLWNvbG9yLWxpZ2h0KTtcbiAgZm9udC1mYW1pbHk6IHZhcigtLWlvbi1mb250LWZhbWlseSk7XG5cbiAgJjpmb2N1cyB7XG4gICAgb3V0bGluZTogbm9uZTtcbiAgICBib3JkZXItY29sb3I6IHZhcigtLWlvbi1jb2xvci1wcmltYXJ5KTtcbiAgfVxufVxuXG4jcGVyaW9kRHVyYXRpb24sIC5kdXJhdGlvbi1zZWxlY3Qge1xuICBtaW4td2lkdGg6IDE1MHB4O1xufVxuXG4vLyBNYXAgY2FyZFxuXG4vLyBHYXVnZSBjYXJkXG4uZ2F1Z2UtY2FyZCB7XG4gIGJhY2tncm91bmQtY29sb3I6IHZhcigtLWlvbi1jb2xvci1saWdodCk7XG5cbiAgaW9uLWNhcmQtdGl0bGUge1xuICAgIGRpc3BsYXk6IGZsZXg7XG4gICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcblxuICAgIGlvbi1pY29uIHtcbiAgICAgIG1hcmdpbi1yaWdodDogOHB4O1xuICAgICAgY29sb3I6IHZhcigtLWlvbi1jb2xvci1wcmltYXJ5KTtcbiAgICAgIGZvbnQtc2l6ZTogMjBweDtcbiAgICB9XG4gIH1cbn1cblxuLy8gUHJvZ3Jlc3MgYmFyIHN0eWxlcyBhcmUgbm93IGluIGdsb2JhbC5zY3NzXG5cbi8vIEVycm9yIHJvd1xuLmVycm9yLXJvdyB7XG4gIGN1cnNvcjogcG9pbnRlcjtcbiAgYmFja2dyb3VuZC1jb2xvcjogcmdiYSh2YXIoLS1pb24tY29sb3ItZGFuZ2VyLXJnYiksIDAuMSk7XG4gIGJvcmRlci1sZWZ0OiAzcHggc29saWQgdmFyKC0taW9uLWNvbG9yLWRhbmdlcik7XG4gIG1hcmdpbi10b3A6IDhweDtcbiAgYm9yZGVyLXJhZGl1czogNHB4O1xuICB0cmFuc2l0aW9uOiBiYWNrZ3JvdW5kLWNvbG9yIDAuMnMgZWFzZTtcblxuICAmOmhvdmVyIHtcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiByZ2JhKHZhcigtLWlvbi1jb2xvci1kYW5nZXItcmdiKSwgMC4xNSk7XG4gIH1cblxuICAuZXJyb3ItY29udGVudCB7XG4gICAgZGlzcGxheTogZmxleDtcbiAgICBhbGlnbi1pdGVtczogZmxleC1zdGFydDtcbiAgICBwYWRkaW5nOiA4cHggMTJweDtcbiAgICBnYXA6IDhweDtcbiAgfVxuXG4gIC5lcnJvci1pY29uIHtcbiAgICBjb2xvcjogdmFyKC0taW9uLWNvbG9yLWRhbmdlcik7XG4gICAgZm9udC1zaXplOiAxOHB4O1xuICAgIGZsZXgtc2hyaW5rOiAwO1xuICAgIG1hcmdpbi10b3A6IDJweDtcbiAgfVxuXG4gIC5lcnJvci10ZXh0IHtcbiAgICBmbGV4OiAxO1xuICAgIGNvbG9yOiB2YXIoLS1pb24tY29sb3ItZGFuZ2VyLXNoYWRlKTtcbiAgICBmb250LXNpemU6IDAuOXJlbTtcbiAgICB3b3JkLWJyZWFrOiBicmVhay13b3JkO1xuXG4gICAgJi5leHBhbmRlZCB7XG4gICAgICB3aGl0ZS1zcGFjZTogcHJlLXdyYXA7XG4gICAgfVxuICB9XG5cbiAgLmVycm9yLWNhcmV0IHtcbiAgICBjb2xvcjogdmFyKC0taW9uLWNvbG9yLWRhbmdlcik7XG4gICAgZm9udC1zaXplOiAxNnB4O1xuICAgIGZsZXgtc2hyaW5rOiAwO1xuICAgIG1hcmdpbi10b3A6IDJweDtcbiAgfVxufVxuXG4vLyBDb21wb25lbnQgc3R5bGVzXG5yYWFpbi1jb21wYXJlLXN0YWNrIHtcbiAgd2lkdGg6IDEwMCU7XG4gIGRpc3BsYXk6IGJsb2NrO1xufVxuXG4vLyBSZXNwb25zaXZlIGFkanVzdG1lbnRzIC0gc2ltcGxpZmllZFxuQG1lZGlhIChtYXgtd2lkdGg6IDc2OHB4KSB7XG4gIC5wZXJpb2Qtcm93IHtcbiAgICBmbGV4LWRpcmVjdGlvbjogcm93O1xuICAgIGp1c3RpZnktY29udGVudDogc3BhY2UtYmV0d2VlbjtcbiAgICBhbGlnbi1pdGVtczogY2VudGVyO1xuICB9XG5cbiAgI2FsbC1kYXRlcyB7XG4gICAgbWFyZ2luLWxlZnQ6IGF1dG87XG4gICAgcGFkZGluZy1sZWZ0OiA4cHg7XG5cbiAgICAudG9nZ2xlLWxhYmVsIHtcbiAgICAgIGZvbnQtc2l6ZTogMC45cmVtO1xuICAgIH1cbiAgfVxuXG4gIC5tYXAtaGVhZGVyIHtcbiAgICBmbGV4LWRpcmVjdGlvbjogcm93O1xuICAgIGp1c3RpZnktY29udGVudDogc3BhY2UtYmV0d2VlbjtcbiAgICBhbGlnbi1pdGVtczogY2VudGVyO1xuICAgIGdhcDogMTZweDtcbiAgfVxufVxuXG4vLyBRdWFsaXR5IFBlcmZvcm1hbmNlIE1vZGFsXG4ucXVhbGl0eS1tb2RhbC1vdmVybGF5IHtcbiAgcG9zaXRpb246IGZpeGVkO1xuICB0b3A6IDA7XG4gIGxlZnQ6IDA7XG4gIHJpZ2h0OiAwO1xuICBib3R0b206IDA7XG4gIGJhY2tncm91bmQtY29sb3I6IHJnYmEoMCwgMCwgMCwgMC41KTtcbiAgZGlzcGxheTogZmxleDtcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbiAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XG4gIHotaW5kZXg6IDk5OTk7XG59XG5cbi5xdWFsaXR5LW1vZGFsLWNvbnRlbnQge1xuICBiYWNrZ3JvdW5kLWNvbG9yOiB2YXIoLS1pb24tYmFja2dyb3VuZC1jb2xvciwgI2ZmZik7XG4gIGJvcmRlci1yYWRpdXM6IDEycHg7XG4gIHdpZHRoOiA5NSU7XG4gIG1heC13aWR0aDogOTAwcHg7XG4gIG1heC1oZWlnaHQ6IDgwdmg7XG4gIG92ZXJmbG93OiBhdXRvO1xuICBib3gtc2hhZG93OiAwIDRweCAyNHB4IHJnYmEoMCwgMCwgMCwgMC4yKTtcbn1cblxuLnF1YWxpdHktbW9kYWwtaGVhZGVyIHtcbiAgZGlzcGxheTogZmxleDtcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbiAganVzdGlmeS1jb250ZW50OiBzcGFjZS1iZXR3ZWVuO1xuICBwYWRkaW5nOiAxNnB4IDIwcHg7XG4gIGJvcmRlci1ib3R0b206IDFweCBzb2xpZCByZ2JhKHZhcigtLWlvbi1jb2xvci1tZWRpdW0tcmdiKSwgMC4yKTtcblxuICBoMiB7XG4gICAgbWFyZ2luOiAwO1xuICAgIGZvbnQtc2l6ZTogMS4yNXJlbTtcbiAgICBmb250LXdlaWdodDogNjAwO1xuICAgIGNvbG9yOiB2YXIoLS1pb24tY29sb3ItZGFyayk7XG4gIH1cblxuICBpb24tYnV0dG9uIHtcbiAgICAtLXBhZGRpbmctc3RhcnQ6IDhweDtcbiAgICAtLXBhZGRpbmctZW5kOiA4cHg7XG4gIH1cbn1cblxuLnF1YWxpdHktbW9kYWwtYm9keSB7XG4gIHBhZGRpbmc6IDIwcHg7XG59XG5cbi5xdWFsaXR5LXRhYmxlIHtcbiAgd2lkdGg6IDEwMCU7XG4gIGJvcmRlci1jb2xsYXBzZTogY29sbGFwc2U7XG4gIG1hcmdpbi10b3A6IDE2cHg7XG4gIHRhYmxlLWxheW91dDogZml4ZWQ7XG5cbiAgdGgsIHRkIHtcbiAgICB3aWR0aDogMTYuNjYlO1xuICAgIHBhZGRpbmc6IDEycHggMTZweDtcbiAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XG4gICAgdmVydGljYWwtYWxpZ246IHRvcDtcbiAgICBib3JkZXItYm90dG9tOiAxcHggc29saWQgcmdiYSh2YXIoLS1pb24tY29sb3ItbWVkaXVtLXJnYiksIDAuMik7XG4gIH1cblxuICB0aCB7XG4gICAgYmFja2dyb3VuZC1jb2xvcjogcmdiYSh2YXIoLS1pb24tY29sb3ItcHJpbWFyeS1yZ2IpLCAwLjEpO1xuICAgIGZvbnQtd2VpZ2h0OiA2MDA7XG4gICAgY29sb3I6IHZhcigtLWlvbi1jb2xvci1kYXJrKTtcbiAgfVxuXG4gIHRkIHtcbiAgICBjb2xvcjogdmFyKC0taW9uLWNvbG9yLWRhcmstdGludCk7XG4gICAgZm9udC1zaXplOiAwLjdyZW07XG4gIH1cblxuICB0Ym9keSB0cjpob3ZlciB7XG4gICAgYmFja2dyb3VuZC1jb2xvcjogcmdiYSh2YXIoLS1pb24tY29sb3ItcHJpbWFyeS1yZ2IpLCAwLjA1KTtcbiAgfVxufVxuXG4ucXVhbGl0eS1sb2FkaW5nIHtcbiAgZGlzcGxheTogZmxleDtcbiAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbiAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XG4gIHBhZGRpbmc6IDQwcHggMjBweDtcbiAgY29sb3I6IHZhcigtLWlvbi1jb2xvci1tZWRpdW0pO1xuXG4gIGlvbi1zcGlubmVyIHtcbiAgICBtYXJnaW4tYm90dG9tOiAxMnB4O1xuICB9XG59XG5cbi5xdWFsaXR5LWVtcHR5IHtcbiAgdGV4dC1hbGlnbjogY2VudGVyO1xuICBwYWRkaW5nOiA0MHB4IDIwcHg7XG4gIGNvbG9yOiB2YXIoLS1pb24tY29sb3ItbWVkaXVtKTtcbiAgZm9udC1zdHlsZTogaXRhbGljO1xufVxuXG4ucGVyZm9ybWFuY2UtY2hhcnQtY29udGFpbmVyIHtcbiAgaGVpZ2h0OiAzMDBweDtcbiAgd2lkdGg6IDEwMCU7XG4gIHBvc2l0aW9uOiByZWxhdGl2ZTtcbiAgbWFyZ2luLWJvdHRvbTogMTZweDtcbn1cblxuLnF1YWxpdHktZGV0YWlscy1zZWN0aW9uIHtcbiAgYm9yZGVyLXRvcDogMXB4IHNvbGlkIHJnYmEodmFyKC0taW9uLWNvbG9yLW1lZGl1bS1yZ2IpLCAwLjIpO1xuICBwYWRkaW5nLXRvcDogOHB4O1xufVxuXG4ucXVhbGl0eS1kZXRhaWxzLXRvZ2dsZSB7XG4gIGRpc3BsYXk6IGZsZXg7XG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG4gIGdhcDogOHB4O1xuICBjdXJzb3I6IHBvaW50ZXI7XG4gIHBhZGRpbmc6IDhweCAwO1xuICBjb2xvcjogdmFyKC0taW9uLWNvbG9yLW1lZGl1bSk7XG4gIGZvbnQtc2l6ZTogMC45cmVtO1xuXG4gICY6aG92ZXIge1xuICAgIGNvbG9yOiB2YXIoLS1pb24tY29sb3ItZGFyayk7XG4gIH1cblxuICBpb24taWNvbiB7XG4gICAgZm9udC1zaXplOiAxNnB4O1xuICB9XG59XG4iXSwic291cmNlUm9vdCI6IiJ9 */"],
      changeDetection: 0
    });
  }
}

/***/ }),

/***/ 12978:
/*!**************************************************************!*\
  !*** ./src/core/shared/raain-globe/raain-globe.component.ts ***!
  \**************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "RaainGlobeComponent": () => (/* binding */ RaainGlobeComponent)
/* harmony export */ });
/* harmony import */ var _opt_atlassian_pipelines_agent_build_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/esm/asyncToGenerator.js */ 71670);
/* harmony import */ var raain_ui__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! raain-ui */ 88666);
/* harmony import */ var raain_ui__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(raain_ui__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ 22560);
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @ionic/angular */ 93819);




const _c0 = ["canvasElement"];
class RaainGlobeComponent {
  constructor(ngZone) {
    this.ngZone = ngZone;
    this.onSizeChanged = () => {};
  }
  ngAfterViewChecked() {
    this.create();
  }
  ngOnChanges(changes) {
    this.change(changes);
  }
  ngOnDestroy() {
    this.delete();
  }
  onResize(event) {
    this.updateMapSize();
  }
  create() {
    if (this.created) {
      return;
    }
    this.created = true;
    this.ngZone.runOutsideAngular(() => {
      setTimeout(() => {
        const factory = new raain_ui__WEBPACK_IMPORTED_MODULE_1__.ElementsFactory();
        try {
          this.earthMapElement = factory.createEarthMap(this.canvasElement.nativeElement, new raain_ui__WEBPACK_IMPORTED_MODULE_1__.EarthMapElementInput());
        } catch (e) {
          console.warn('Dynamic focus creation issue', e);
        }
      }, 100);
    });
  }
  delete() {
    var _this = this;
    return (0,_opt_atlassian_pipelines_agent_build_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_0__["default"])(function* () {
      // await this.earthMapElement?.destroy();
      _this.created = false;
    })();
  }
  change(changes) {
    var _this2 = this;
    return (0,_opt_atlassian_pipelines_agent_build_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_0__["default"])(function* () {
      yield _this2.delete();
      _this2.create();
    })();
  }
  updateMapSize() {
    const mapDivWidth = this.canvasElement.nativeElement.parentNode?.parentNode['clientWidth'];
    const padding = 20;
    let currentWidth = mapDivWidth || window.innerWidth || document.documentElement.clientWidth || document.body.clientWidth;
    const currentHeight = this.currentHeight || window.innerHeight || document.documentElement.clientHeight || document.body.clientHeight;
    currentWidth -= padding;
    this.currentWidth = currentWidth;
    this.currentHeight = currentHeight;
    this.ngZone.run(() => {
      this.onSizeChanged();
    });
  }
  static {
    this.ɵfac = function RaainGlobeComponent_Factory(t) {
      return new (t || RaainGlobeComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdirectiveInject"](_angular_core__WEBPACK_IMPORTED_MODULE_2__.NgZone));
    };
  }
  static {
    this.ɵcmp = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdefineComponent"]({
      type: RaainGlobeComponent,
      selectors: [["raain-globe"]],
      viewQuery: function RaainGlobeComponent_Query(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵviewQuery"](_c0, 5);
        }
        if (rf & 2) {
          let _t;
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵqueryRefresh"](_t = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵloadQuery"]()) && (ctx.canvasElement = _t.first);
        }
      },
      hostBindings: function RaainGlobeComponent_HostBindings(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵlistener"]("resize", function RaainGlobeComponent_resize_HostBindingHandler($event) {
            return ctx.onResize($event);
          }, false, _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵresolveWindow"]);
        }
      },
      inputs: {
        points: "points",
        currentHeight: "currentHeight"
      },
      features: [_angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵNgOnChangesFeature"]],
      decls: 5,
      vars: 2,
      consts: [["id", "col-container", "size-sm", "12"], ["id", "canvas-container"], ["canvasElement", ""]],
      template: function RaainGlobeComponent_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](0, "ion-grid")(1, "ion-row")(2, "ion-col", 0);
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](3, "div", 1, 2);
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]()()();
        }
        if (rf & 2) {
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](3);
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵstyleProp"]("height", ctx.currentHeight, "px");
        }
      },
      dependencies: [_ionic_angular__WEBPACK_IMPORTED_MODULE_3__.IonCol, _ionic_angular__WEBPACK_IMPORTED_MODULE_3__.IonGrid, _ionic_angular__WEBPACK_IMPORTED_MODULE_3__.IonRow],
      styles: ["#canvas-container[_ngcontent-%COMP%] {\n  width: 100%;\n}\n/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8uL3NyYy9jb3JlL3NoYXJlZC9yYWFpbi1nbG9iZS9yYWFpbi1nbG9iZS5jb21wb25lbnQuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFNQTtFQUVFLFdBQUE7QUFORiIsInNvdXJjZXNDb250ZW50IjpbIlxuI2NvbC1jb250YWluZXIge1xuICAvLyB3aWR0aDogMTAwJTtcbiAgLy8gaGVpZ2h0OiAxMDAlO1xufVxuXG4jY2FudmFzLWNvbnRhaW5lciB7XG4gIC8vIHBvc2l0aW9uOiByZWxhdGl2ZTtcbiAgd2lkdGg6IDEwMCU7XG4gIC8vIGhlaWdodDogNDAwcHg7XG4gIC8vIGhlaWdodDogMTAwJTtcbiAgLy8gd2lkdGg6IDMwMHB4O1xuICAvL2hlaWdodDogMzAwcHg7XG59XG4iXSwic291cmNlUm9vdCI6IiJ9 */"]
    });
  }
}

/***/ }),

/***/ 50121:
/*!**********************************************************!*\
  !*** ./src/core/shared/raain-map/raain-map.component.ts ***!
  \**********************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "RaainMapComponent": () => (/* binding */ RaainMapComponent)
/* harmony export */ });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ 22560);
/* harmony import */ var raain_model__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! raain-model */ 70034);
/* harmony import */ var raain_model__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(raain_model__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var raain_ui__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! raain-ui */ 88666);
/* harmony import */ var raain_ui__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(raain_ui__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _storage_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../storage.service */ 8184);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/common */ 94666);
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/forms */ 2508);
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @ionic/angular */ 93819);








const _c0 = ["primaryMap"];
const _c1 = ["canvasScale"];
function RaainMapComponent_ion_icon_2_Template(rf, ctx) {
  if (rf & 1) {
    const _r11 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](0, "ion-icon", 21);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵlistener"]("click", function RaainMapComponent_ion_icon_2_Template_ion_icon_click_0_listener() {
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵrestoreView"](_r11);
      const ctx_r10 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵnextContext"]();
      return _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵresetView"](ctx_r10.previous());
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
  }
}
function RaainMapComponent_ion_label_3_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](0, "ion-label", 22);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](1, "[");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
  }
}
function RaainMapComponent_ion_label_4_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](0, "ion-label", 23);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵpipe"](2, "date");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
  }
  if (rf & 2) {
    const ctx_r2 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtextInterpolate1"](" ", _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵpipeBind2"](2, 1, ctx_r2.cumulativeDateFrom, "yyyy-MM-dd HH:mm"), " ");
  }
}
function RaainMapComponent_ion_label_5_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](0, "ion-label");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](1, "\u00A0 \u00A0");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
  }
}
function RaainMapComponent_ion_select_6_ion_select_option_1_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](0, "ion-select-option", 26);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵpipe"](2, "date");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
  }
  if (rf & 2) {
    const dateToSelect_r13 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵpropertyInterpolate"]("value", dateToSelect_r13.toISOString());
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtextInterpolate1"](" ", _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵpipeBind2"](2, 2, dateToSelect_r13, "yyyy-MM-dd HH:mm"), " ");
  }
}
function RaainMapComponent_ion_select_6_Template(rf, ctx) {
  if (rf & 1) {
    const _r15 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](0, "ion-select", 24);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵlistener"]("ionDismiss", function RaainMapComponent_ion_select_6_Template_ion_select_ionDismiss_0_listener() {
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵrestoreView"](_r15);
      const ctx_r14 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵnextContext"]();
      return _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵresetView"](ctx_r14.showTimeframe());
    })("ngModelChange", function RaainMapComponent_ion_select_6_Template_ion_select_ngModelChange_0_listener($event) {
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵrestoreView"](_r15);
      const ctx_r16 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵnextContext"]();
      return _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵresetView"](ctx_r16.dateToShowAsString = $event);
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtemplate"](1, RaainMapComponent_ion_select_6_ion_select_option_1_Template, 3, 5, "ion-select-option", 25);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
  }
  if (rf & 2) {
    const ctx_r4 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵpropertyInterpolate"]("value", ctx_r4.dateToShowAsString);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("ngModel", ctx_r4.dateToShowAsString);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("ngForOf", ctx_r4.possibleDates);
  }
}
function RaainMapComponent_ion_label_7_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](0, "ion-label", 22);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](1, "[");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
  }
}
function RaainMapComponent_ion_icon_8_Template(rf, ctx) {
  if (rf & 1) {
    const _r18 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](0, "ion-icon", 27);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵlistener"]("click", function RaainMapComponent_ion_icon_8_Template_ion_icon_click_0_listener() {
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵrestoreView"](_r18);
      const ctx_r17 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵnextContext"]();
      return _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵresetView"](ctx_r17.next());
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
  }
}
function RaainMapComponent_ion_row_25_Template(rf, ctx) {
  if (rf & 1) {
    const _r20 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](0, "ion-row", 28)(1, "ion-col", 29)(2, "ion-list", 30)(3, "ion-item")(4, "ion-label");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](5, "Opacity");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](6, "ion-range", 31);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵlistener"]("ionChange", function RaainMapComponent_ion_row_25_Template_ion_range_ionChange_6_listener() {
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵrestoreView"](_r20);
      const ctx_r19 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵnextContext"]();
      return _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵresetView"](ctx_r19.changeAlpha());
    })("ngModelChange", function RaainMapComponent_ion_row_25_Template_ion_range_ngModelChange_6_listener($event) {
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵrestoreView"](_r20);
      const ctx_r21 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵnextContext"]();
      return _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵresetView"](ctx_r21.alpha = $event);
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](7, "ion-item")(8, "ion-label");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](9, "Gauges");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](10, "ion-toggle", 32);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵlistener"]("ionChange", function RaainMapComponent_ion_row_25_Template_ion_toggle_ionChange_10_listener() {
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵrestoreView"](_r20);
      const ctx_r22 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵnextContext"]();
      return _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵresetView"](ctx_r22.changeShowMarkers());
    })("ngModelChange", function RaainMapComponent_ion_row_25_Template_ion_toggle_ngModelChange_10_listener($event) {
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵrestoreView"](_r20);
      const ctx_r23 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵnextContext"]();
      return _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵresetView"](ctx_r23.showMarkers = $event);
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](11, "ion-item")(12, "ion-label");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](13, "Speeds");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](14, "ion-toggle", 32);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵlistener"]("ionChange", function RaainMapComponent_ion_row_25_Template_ion_toggle_ionChange_14_listener() {
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵrestoreView"](_r20);
      const ctx_r24 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵnextContext"]();
      return _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵresetView"](ctx_r24.changeShowSpeedMarkers());
    })("ngModelChange", function RaainMapComponent_ion_row_25_Template_ion_toggle_ngModelChange_14_listener($event) {
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵrestoreView"](_r20);
      const ctx_r25 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵnextContext"]();
      return _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵresetView"](ctx_r25.showSpeedMarkers = $event);
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]()()()()();
  }
  if (rf & 2) {
    const ctx_r9 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](6);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("ngModel", ctx_r9.alpha)("max", 1)("min", 0.2)("snaps", true)("step", 0.2)("ticks", true);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("ngModel", ctx_r9.showMarkers)("checked", ctx_r9.showMarkers);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("ngModel", ctx_r9.showSpeedMarkers)("checked", ctx_r9.showSpeedMarkers);
  }
}
class RaainMapComponent {
  constructor(ngZone, storage, cdr) {
    this.ngZone = ngZone;
    this.storage = storage;
    this.cdr = cdr;
    this.autoplay = false;
    this.showMarkers = true;
    this.showSpeedMarkers = true;
    this.showVisiblePixelMarkers = false;
    this.showNavigation = true;
    this.showDateRange = true;
    this.cumulativeDurationInMinutes = 60;
    this.scaleLabel = 'mm';
    this.showMapSettings = false;
    this.timeframeDates = [];
    this.selectedMarker = new _angular_core__WEBPACK_IMPORTED_MODULE_3__.EventEmitter();
    this.changedDate = new _angular_core__WEBPACK_IMPORTED_MODULE_3__.EventEmitter();
    this.changedSum = new _angular_core__WEBPACK_IMPORTED_MODULE_3__.EventEmitter();
    this.visiblePixelMarkers = [];
    this.delete();
    this.cartesianTools = new raain_model__WEBPACK_IMPORTED_MODULE_0__.CartesianTools();
    this.pixelsCount = 1;
    const iconSize = [40, 40]; // size of the icon
    const iconAnchor = [20, 20]; // point of the icon which will correspond to marker's location
    const pixelSize = [41, 41];
    const pixelAnchor = [20, 20];
    const popupAnchor = [0, -20]; // point from which the popup should open relative to the iconAnchor
    this.raainDivIcons = {
      gauges: new raain_ui__WEBPACK_IMPORTED_MODULE_1__.RaainDivIcon({
        html: '<img src="./assets/maps/marker-pluvio.png" style="width: 100%; height: 100%;" />',
        iconSize,
        iconAnchor
      }),
      gaugesInCompare: new raain_ui__WEBPACK_IMPORTED_MODULE_1__.RaainDivIcon({
        html: '<img src="./assets/maps/marker-pluvio-diag.png" style="width: 100%; height: 100%;" />',
        iconSize,
        iconAnchor,
        popupAnchor
      }),
      selectedGauges: new raain_ui__WEBPACK_IMPORTED_MODULE_1__.RaainDivIcon({
        html: '<img src="./assets/maps/marker-pluvio-diag-select.png" style="width: 100%; height: 100%;" />',
        iconSize,
        iconAnchor,
        popupAnchor
      }),
      pixels: new raain_ui__WEBPACK_IMPORTED_MODULE_1__.RaainDivIcon({
        html: '<img src="./assets/maps/marker-rain.png" style="width: 100%; height: 100%;" />',
        iconSize,
        iconAnchor,
        popupAnchor
      }),
      pixelsSolution: new raain_ui__WEBPACK_IMPORTED_MODULE_1__.RaainDivIcon({
        html: '<img src="./assets/maps/marker-rain.png" style="width: 100%; height: 100%;" />',
        iconSize: pixelSize,
        iconAnchor: pixelAnchor,
        popupAnchor
      }),
      borders: new raain_ui__WEBPACK_IMPORTED_MODULE_1__.RaainDivIcon({
        html: '<img src="./assets/maps/marker-shadow.png" style="width: 100%; height: 100%;" />',
        iconSize,
        iconAnchor,
        popupAnchor
      }),
      speeds: new raain_ui__WEBPACK_IMPORTED_MODULE_1__.RaainDivIcon({
        html: '<img src="./assets/maps/marker-speed.svg" style="width: 100%; height: 100%;" />',
        iconSize,
        iconAnchor,
        popupAnchor
      })
    };
  }
  ngAfterViewChecked() {
    this.create();
  }
  ngOnChanges(changes) {
    this.change(changes);
  }
  ngOnDestroy() {
    this.delete();
  }
  showTimeframe(force = false) {
    if (!this.dateToShowAsString || !force && this.areDatesEqual(this.dateToShowAsString, this.dateToShow)) {
      return;
    }
    this.dateToShow = new Date(this.dateToShowAsString);
    this.changedDate.emit(this.dateToShow);
  }
  next() {
    if (!this.possibleDates || this.possibleDates.length === 0) {
      return;
    }
    const index = this.getDateToShowIndex();
    this.dateToShow = index + 1 < this.possibleDates.length ? this.possibleDates[index + 1] : this.possibleDates[0];
    this.dateToShowAsString = this.dateToShow.toISOString();
    this.showTimeframe(true);
    if (this.autoplay) {
      window.setTimeout(() => this.next(), 2000);
    }
  }
  previous() {
    this.stop();
    if (!this.possibleDates || this.possibleDates.length === 0) {
      return;
    }
    const index = this.getDateToShowIndex();
    this.dateToShow = index > 0 ? this.possibleDates[index - 1] : this.possibleDates[0];
    this.dateToShowAsString = this.dateToShow.toISOString();
    this.showTimeframe(true);
  }
  play() {
    this.autoplay = true;
    this.next();
  }
  stop() {
    this.autoplay = false;
  }
  changeShowMarkers() {
    if (!this.mapElement?.markersLayer || !this.mapElement?.mapLeaflet) {
      return;
    }
    if (this.showMarkers) {
      this.mapElement.markersLayer.addToMap(this.mapElement.mapLeaflet);
    } else {
      this.mapElement.markersLayer.removeFromMap(this.mapElement.mapLeaflet);
    }
  }
  changeShowSpeedMarkers() {
    if (!this.mapElement?.markersLayer || !this.mapElement?.mapLeaflet) {
      return;
    }
    // Rebuild markers with current visibility settings
    const {
      allMarkers
    } = this.buildMarkersConfig();
    const markersProduced = this.mapElement.updateMarkers(allMarkers);
    if (markersProduced?.length) {
      this.bindMarkersClickEvents(markersProduced);
      if (this.showMarkers) {
        this.mapElement.markersLayer.removeFromMap(this.mapElement.mapLeaflet);
        this.mapElement.markersLayer.addToMap(this.mapElement.mapLeaflet);
      }
    }
  }
  changeAlpha() {
    this.storage.set('raain-map-alpha', this.alpha);
    if (!this.mapElement?.mapLeaflet) {
      return;
    }
    this.mapElement.alpha = 0.3 + this.alpha * 0.7;
    this.mapElement.mapLeaflet.eachLayer(layer => {
      if (layer._container?.style) {
        layer._container.style.filter = `brightness(${(10 - this.alpha * 10) * 10}%)`; // invert(1) ?
      }
    });
  }

  toggleMapSettings() {
    this.showMapSettings = !this.showMapSettings;
  }
  create() {
    const created = this.created;
    if (created) {
      return;
    }
    this.created = true;
    const {
      allMarkers
    } = this.buildMarkersConfig();
    const factory = new raain_ui__WEBPACK_IMPORTED_MODULE_1__.ElementsFactory(this.coordinates, true);
    this.createScale(factory, this.scaleLabel);
    this.ngZone.runOutsideAngular(() => {
      setTimeout(() => {
        const createdOutside = this.created;
        if (!createdOutside) {
          return;
        }
        this.mapElement = factory.createMap(this.mapDivRef.nativeElement, {
          timeframeContainers: this.timeframeContainers,
          markers: allMarkers
        });
        this.changeAlpha();
        this.mapElement.mapLeaflet?.on('mousemove', evt => this.onMapMouseMove(evt));
        this.mapElement.mapLeaflet?.on('zoom', evt => this.onZoom(evt));
        this.mapElement.mapLeaflet?.on('moveend', evt => this.onMoveEnd(evt));
        const bounds = this.mapElement.mapLeaflet.getBounds();
        this.pixelsCount = this.cartesianTools.howManyPixelsInEarthMap(bounds._southWest, bounds._northEast);
        this.bindMarkersClickEvents(this.mapElement.markersProduced);
        this.onSizeChanged = () => this.updateLayerDimensions();
        this.updateMapSize();
        this.changeNavigation(this.defaultDate);
      }, 100);
    });
  }
  delete() {
    this.mapElement?.mapLeaflet?.remove();
    this.mapElement = undefined;
    this.mcText = '';
    this.nextDate = undefined;
    this.possibleNames = [];
    this.possibleDates = [];
    this.timeframeNameToShow = undefined;
    this.dateToShow = undefined;
    this.dateToShowAsString = undefined;
    this.cumulativeDateFrom = undefined;
    this.onSizeChanged = () => {};
    this.currentFrameContainer = null;
    this.created = false;
    this.alpha = this.storage.get('raain-map-alpha', 0.4);
  }
  change(changes) {
    let possibleNewDefaultDate;
    if (changes.defaultDate) {
      if (this.areDatesEqual(changes.defaultDate.currentValue, changes.defaultDate.previousValue)) {
        return;
      }
      possibleNewDefaultDate = this.defaultDate;
    }
    if (changes.markers && this.mapElement?.markersLayer) {
      const {
        allMarkers
      } = this.buildMarkersConfig();
      const markersProduced = this.mapElement.updateMarkers(allMarkers);
      if (markersProduced?.length) {
        this.bindMarkersClickEvents(markersProduced);
        if (this.showMarkers) {
          this.mapElement.markersLayer.removeFromMap(this.mapElement.mapLeaflet);
          this.mapElement.markersLayer.addToMap(this.mapElement.mapLeaflet);
        }
      }
    }
    if (changes.markers && this.markers?.selectedGauges && this.markers?.selectedGauges.length === 1) {
      const selectedGauge = this.markers.selectedGauges[0];
      this.mapElement?.mapLeaflet?.setView(selectedGauge, 10);
    }
    if (this.mapElement && changes.timeframeContainers) {
      this.updateTimeframe();
    }
    if (this.mapElement?.compositeLayer && changes.sumValues) {
      this.updateSum();
    }
    if (this.mapElement?.compositeLayer && changes.showVisiblePixelMarkers) {
      const drawer = this.mapElement.compositeLayer.getFirstDrawer();
      this.updateVisiblePixelMarkers(drawer);
    }
    this.changeNavigation(possibleNewDefaultDate);
  }
  updateSum() {
    if (!this.sumValues || !this.sumFn) {
      return;
    }
    const drawer = this.mapElement.compositeLayer.getFirstDrawer();
    const sumOfPixels = drawer?.getExecOfWindowPoints(this.sumValues, this.sumFn) ?? -1;
    if (sumOfPixels >= 0 && this.pixelsCount > 0) {
      const average = Math.round(sumOfPixels / this.pixelsCount * 100) / 100;
      this.sumResult = `${Math.round(sumOfPixels)}mm (avg of ${average}mm for ${Math.round(this.pixelsCount)} pixels)`;
    } else {
      this.sumResult = 'NA';
    }
    this.changedSum.emit(this.sumResult);
    this.updateVisiblePixelMarkers(drawer);
  }
  updateVisiblePixelMarkers(drawer) {
    if (!this.showVisiblePixelMarkers || !drawer || !this.sumValues) {
      if (this.visiblePixelMarkers.length > 0) {
        this.visiblePixelMarkers = [];
        this.refreshMarkersLayer();
      }
      return;
    }
    // Extract visible pixel positions
    const visiblePixels = drawer.getExecOfWindowPoints(this.sumValues, values => values.map(v => ({
      lat: (v.lat + v.lat2) / 2,
      lng: (v.lng + v.lng2) / 2,
      value: v.value
    }))) ?? [];
    this.visiblePixelMarkers = visiblePixels;
    this.refreshMarkersLayer();
  }
  refreshMarkersLayer() {
    if (!this.mapElement?.markersLayer || !this.mapElement?.mapLeaflet) {
      return;
    }
    const {
      allMarkers
    } = this.buildMarkersConfig();
    const markersProduced = this.mapElement.updateMarkers(allMarkers);
    if (markersProduced?.length) {
      this.bindMarkersClickEvents(markersProduced);
      if (this.showMarkers) {
        this.mapElement.markersLayer.removeFromMap(this.mapElement.mapLeaflet);
        this.mapElement.markersLayer.addToMap(this.mapElement.mapLeaflet);
      }
    }
  }
  changeNavigation(defaultDate) {
    // update possible names
    if (this.timeframeContainers?.containers?.length) {
      this.possibleNames = [];
      this.timeframeContainers.containers.forEach(c => {
        if (this.possibleNames.indexOf(c.name) < 0) {
          this.possibleNames.push(c.name);
        }
      });
      this.timeframeNameToShow = this.possibleNames.length > 0 ? this.possibleNames[0] : null;
    }
    // update possible dates
    this.possibleDates = this.timeframeDates;
    if (!this.possibleDates || this.possibleDates.length === 0) {
      return;
    }
    // update dateToShow
    if (defaultDate && this.possibleDates.filter(d => this.areDatesEqual(d, defaultDate)).length === 1) {
      this.dateToShow = defaultDate;
    }
    if (!this.dateToShow && this.possibleDates.length > 0 && this.possibleDates.filter(d => this.areDatesEqual(d, this.dateToShow)).length !== 1) {
      this.dateToShow = this.possibleDates[0];
    }
    let firstInit = false;
    if (!this.dateToShowAsString) {
      firstInit = true;
    }
    this.dateToShowAsString = this.dateToShow.toISOString();
    this.cumulativeDateFrom = new Date(this.dateToShow);
    const durationInMs = this.cumulativeDurationInMinutes * 60 * 1000;
    this.cumulativeDateFrom.setTime(this.cumulativeDateFrom.getTime() - durationInMs);
    if (firstInit) {
      this.showTimeframe(true);
    }
  }
  getDateToShowIndex() {
    let index = 0;
    for (const date of this.possibleDates) {
      if (this.areDateISOEqual(this.dateToShowAsString, date)) {
        break;
      }
      index++;
    }
    return index;
  }
  onZoom(evt) {
    const map = evt.target;
    const bounds = map.getBounds();
    this.pixelsCount = this.cartesianTools.howManyPixelsInEarthMap(bounds._southWest, bounds._northEast);
    this.updateSum();
  }
  onMoveEnd(evt) {
    const map = evt.target;
    const bounds = map.getBounds();
    this.pixelsCount = this.cartesianTools.howManyPixelsInEarthMap(bounds._southWest, bounds._northEast);
    this.updateSum();
  }
  handleAvailablePixels(availablePixels, bounds, zoom) {
    // Update your component properties or perform calculations
    this.currentWidth = availablePixels.width;
    this.currentHeight = availablePixels.height;
    // You can also calculate pixel density or other metrics here
    // const pixelDensity = this.calculatePixelDensity(bounds, availablePixels, zoom);
    // console.log('Pixel density:', pixelDensity);
  }

  calculatePixelDensity(bounds, availablePixels, zoom) {
    // Calculate how many meters per pixel (approximate)
    const earthCircumference = 40075016.686; // meters
    const metersPerPixel = earthCircumference * Math.cos(bounds.getCenter().lat * Math.PI / 180) / Math.pow(2, zoom + 8);
    return {
      metersPerPixel,
      pixelsPerMeter: 1 / metersPerPixel,
      totalVisibleArea: availablePixels.width * availablePixels.height
    };
  }
  onMapMouseMove(evt) {
    const lat = evt.latlng.lat.toFixed(3);
    const lng = evt.latlng.lng.toFixed(3);
    let value = NaN;
    let valueLat = NaN,
      valueLng = NaN,
      valueLat2 = NaN,
      valueLng2 = NaN;
    if (this.currentFrameContainer) {
      const valueSelected = this.currentFrameContainer.values.filter(v => {
        return v.lat <= evt.latlng.lat && evt.latlng.lat < v.lat2 && v.lng <= evt.latlng.lng && evt.latlng.lng < v.lng2;
      });
      if (valueSelected.length === 1) {
        value = this.roundTo3Decimals(valueSelected[0].value);
        valueLat = this.roundTo3Decimals(valueSelected[0].lat);
        valueLng = this.roundTo3Decimals(valueSelected[0].lng);
        valueLat2 = this.roundTo3Decimals(valueSelected[0].lat2);
        valueLng2 = this.roundTo3Decimals(valueSelected[0].lng2);
      } else {
        // console.warn('valueSelected issue ?', valueSelected);
      }
    }
    this.ngZone.run(() => {
      // this.mcText = `Latitude: ${lat} &nbsp; &nbsp; Longitude: ${lng} &nbsp; &nbsp;
      //    Value: [${valueLat} ${valueLng} | ${valueLat2} ${valueLng2}] ${value}`;
      this.mcText = `Latitude: ${lat} &nbsp; &nbsp; Longitude: ${lng} &nbsp; &nbsp; Value: ${value}`;
      this.cdr.markForCheck();
    });
  }
  onMapClick(evt) {
    if (!this.markers?.gauges?.length) {
      return;
    }
    let selectedGauge;
    for (const gauge of this.markers.gauges) {
      if (gauge.id === evt?.target?.options?.alt) {
        selectedGauge = gauge;
        break;
      }
    }
    if (selectedGauge) {
      this.markers.selectedGauges = [selectedGauge];
      this.selectedMarker.emit(new raain_ui__WEBPACK_IMPORTED_MODULE_1__.MapLatLng(selectedGauge.lat, selectedGauge.lng, undefined, selectedGauge.id, selectedGauge.name, selectedGauge.value));
    } else {
      this.selectedMarker.emit(new raain_ui__WEBPACK_IMPORTED_MODULE_1__.MapLatLng(evt.latlng?.lat, evt.latlng?.lng, undefined, evt.id, evt.name));
    }
    this.change({
      markers: ['changed']
    });
  }
  onResize(event) {
    this.updateMapSize();
  }
  updateMapSize() {
    const mapDivWidth = this.mapDivRef.nativeElement.parentNode?.parentNode['clientWidth'];
    const padding = 21;
    let currentWidth = mapDivWidth || window.innerWidth || document.documentElement.clientWidth || document.body.clientWidth;
    const currentHeight = this.currentHeight || window.innerHeight || document.documentElement.clientHeight || document.body.clientHeight;
    currentWidth -= padding;
    this.currentWidth = currentWidth;
    this.currentHeight = currentHeight;
    this.ngZone.run(() => {
      this.onSizeChanged();
    });
  }
  updateTimeframe() {
    if (this.timeframeContainers?.containers?.length && this.timeframeContainers?.containers[0]?.timeframe?.length) {
      this.mapElement.updateMapTimeframe(this.timeframeContainers);
      this.currentFrameContainer = this.timeframeContainers?.containers[0]?.timeframe[0];
    }
    this.changeAlpha();
  }
  createScale(factory, label) {
    this.deleteScale();
    if (!this.scaleCanvasRef?.nativeElement) {
      return;
    }
    const entries = Object.entries(raain_ui__WEBPACK_IMPORTED_MODULE_1__.ChartScaleColors);
    entries.sort((a, b) => parseFloat(a[0]) - parseFloat(b[0]));
    const sortedMap = new Map(entries);
    const sortedArray = [...sortedMap.entries()];
    const scaleColors = sortedArray.map(entry => {
      return {
        color: entry[1]
      };
    });
    const scaleLabels = sortedArray.map(entry => entry[0]);
    this.scaleElement = factory.createScale(this.scaleCanvasRef.nativeElement, new raain_ui__WEBPACK_IMPORTED_MODULE_1__.ScaleElementInput(scaleColors, scaleLabels, label));
  }
  deleteScale() {
    if (this.scaleElement) {
      this.scaleElement?.chart?.destroy();
    }
  }
  /**
   * Builds the markers configuration array for the map
   * @returns Array of marker configurations with icons and positions
   */
  buildMarkersConfig() {
    const allMarkers = [{
      iconsLatLng: this.markers?.gauges ?? [],
      raainDivIcon: this.raainDivIcons.gauges
    }, {
      iconsLatLng: this.markers?.selectedGauges ?? [],
      raainDivIcon: this.raainDivIcons.selectedGauges
    }, {
      iconsLatLng: this.markers?.gaugesInCompare ?? [],
      raainDivIcon: this.raainDivIcons.gaugesInCompare
    }, {
      iconsLatLng: this.markers?.pixels ?? [],
      raainDivIcon: this.raainDivIcons.pixels
    }, {
      iconsLatLng: this.markers?.pixelsSolution ?? [],
      raainDivIcon: this.raainDivIcons.pixelsSolution
    }
    // {iconsLatLng: this.markers?.borders, raainDivIcon: this.raainDivIcons.borders},
    ];

    if (this.showVisiblePixelMarkers && this.visiblePixelMarkers.length > 0) {
      allMarkers.push({
        iconsLatLng: this.visiblePixelMarkers,
        raainDivIcon: this.raainDivIcons.pixelsSolution
      });
    }
    if (this.showSpeedMarkers) {
      for (const marker of this.markers?.speeds ?? []) {
        // Calculate dynamic size based on speed (marker.value is in m/s)
        // Base size: 20px, scale up with speed (typical range: 1-20 m/s)
        const speedInMetersPerSec = marker.value ?? 5;
        const minSize = 20;
        const maxSize = 60;
        const minSpeed = 1;
        const maxSpeed = 20;
        // Linear interpolation: size increases with speed
        const normalizedSpeed = Math.max(minSpeed, Math.min(maxSpeed, speedInMetersPerSec));
        const size = minSize + (normalizedSpeed - minSpeed) / (maxSpeed - minSpeed) * (maxSize - minSize);
        const iconSize = Math.round(size);
        allMarkers.push({
          iconsLatLng: [marker],
          raainDivIcon: new raain_ui__WEBPACK_IMPORTED_MODULE_1__.RaainDivIcon({
            html: this.raainDivIcons.speeds.options.html,
            width: iconSize,
            height: iconSize,
            iconAnchor: [iconSize / 2, iconSize / 2],
            popupAnchor: this.raainDivIcons.speeds.options.popupAnchor,
            rotationAngle: marker.alt,
            className: this.raainDivIcons.speeds.options.className
          })
        });
      }
    }
    return {
      allMarkers
    };
  }
  /**
   * Compare two dates for equality using their timestamps
   * @param date1 First date (Date or string)
   * @param date2 Second date (Date or string)
   * @returns true if dates are equal
   */
  areDatesEqual(date1, date2) {
    if (!date1 || !date2) {
      return false;
    }
    const timestamp1 = typeof date1 === 'string' ? new Date(date1).getTime() : date1.getTime();
    const timestamp2 = typeof date2 === 'string' ? new Date(date2).getTime() : date2.getTime();
    return timestamp1 === timestamp2;
  }
  /**
   * Compare an ISO date string with a Date object (comparing first 19 characters)
   * @param dateISO ISO date string
   * @param date Date object
   * @returns true if dates match (up to seconds precision)
   */
  areDateISOEqual(dateISO, date) {
    if (!dateISO || !date) {
      return false;
    }
    return dateISO.substring(0, 19) === date.toISOString().substring(0, 19);
  }
  /**
   * Bind click event handlers to markers
   * @param markers Array of marker objects to bind events to
   */
  bindMarkersClickEvents(markers) {
    if (!markers) {
      return;
    }
    markers.forEach(m => m.on('click', evt => this.onMapClick(evt)));
  }
  /**
   * Round a number to 3 decimal places
   * @param value Number to round
   * @returns Rounded number
   */
  roundTo3Decimals(value) {
    return Math.round(value * 1000) / 1000;
  }
  /**
   * Update layer dimensions and invalidate map size
   */
  updateLayerDimensions() {
    if (!this.mapElement) {
      return;
    }
    this.mapElement.markersLayer?.setCurrentWidth(this.currentWidth);
    this.mapElement.markersLayer?.setCurrentHeight(this.currentHeight);
    this.mapElement.compositeLayer?.setCurrentWidth(this.currentWidth);
    this.mapElement.compositeLayer?.setCurrentHeight(this.currentHeight);
    this.mapElement.mapLeaflet?.invalidateSize({
      animate: true
    });
  }
  static {
    this.ɵfac = function RaainMapComponent_Factory(t) {
      return new (t || RaainMapComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵdirectiveInject"](_angular_core__WEBPACK_IMPORTED_MODULE_3__.NgZone), _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵdirectiveInject"](_storage_service__WEBPACK_IMPORTED_MODULE_2__.Storage), _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵdirectiveInject"](_angular_core__WEBPACK_IMPORTED_MODULE_3__.ChangeDetectorRef));
    };
  }
  static {
    this.ɵcmp = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵdefineComponent"]({
      type: RaainMapComponent,
      selectors: [["raain-map"]],
      viewQuery: function RaainMapComponent_Query(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵviewQuery"](_c0, 5);
          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵviewQuery"](_c1, 5);
        }
        if (rf & 2) {
          let _t;
          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵqueryRefresh"](_t = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵloadQuery"]()) && (ctx.mapDivRef = _t.first);
          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵqueryRefresh"](_t = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵloadQuery"]()) && (ctx.scaleCanvasRef = _t.first);
        }
      },
      hostBindings: function RaainMapComponent_HostBindings(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵlistener"]("resize", function RaainMapComponent_resize_HostBindingHandler($event) {
            return ctx.onResize($event);
          }, false, _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵresolveWindow"]);
        }
      },
      inputs: {
        coordinates: "coordinates",
        markers: "markers",
        timeframeContainers: "timeframeContainers",
        autoplay: "autoplay",
        showMarkers: "showMarkers",
        showSpeedMarkers: "showSpeedMarkers",
        showVisiblePixelMarkers: "showVisiblePixelMarkers",
        showNavigation: "showNavigation",
        showDateRange: "showDateRange",
        cumulativeDurationInMinutes: "cumulativeDurationInMinutes",
        scaleLabel: "scaleLabel",
        currentHeight: "currentHeight",
        timeframeDates: "timeframeDates",
        defaultDate: "defaultDate",
        sumValues: "sumValues",
        sumFn: "sumFn"
      },
      outputs: {
        selectedMarker: "selectedMarker",
        changedDate: "changedDate",
        changedSum: "changedSum"
      },
      features: [_angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵNgOnChangesFeature"]],
      decls: 26,
      vars: 16,
      consts: [["id", "map-nav-row", 1, "ion-align-items-center", "ion-justify-content-center"], ["class", "nav-icon", "color", "medium", "name", "chevron-back-circle", 3, "click", 4, "ngIf"], ["class", "period-bracket", 4, "ngIf"], ["class", "date-label", 4, "ngIf"], [4, "ngIf"], ["interface", "popover", "placeholder", "Period", 3, "ngModel", "value", "ionDismiss", "ngModelChange", 4, "ngIf"], ["class", "nav-icon", "color", "medium", "name", "chevron-forward-circle", 3, "click", 4, "ngIf"], ["size-lg", "10", "size-xs", "12"], ["id", "map-container"], ["id", "map-div"], ["primaryMap", ""], ["size-lg", "2", 1, "ion-hide-xl-down"], ["canvasScale", ""], [1, "ion-align-items-center"], ["size-xs", "3"], ["color", "medium", "fill", "clear", "id", "map-settings-toggle", 3, "click"], ["name", "map-outline", "slot", "start"], ["slot", "end", 3, "name"], ["size-sm", "7", 1, "ion-hide-sm-down"], [3, "innerHTML"], ["id", "map-settings", 4, "ngIf"], ["color", "medium", "name", "chevron-back-circle", 1, "nav-icon", 3, "click"], [1, "period-bracket"], [1, "date-label"], ["interface", "popover", "placeholder", "Period", 3, "ngModel", "value", "ionDismiss", "ngModelChange"], [3, "value", 4, "ngFor", "ngForOf"], [3, "value"], ["color", "medium", "name", "chevron-forward-circle", 1, "nav-icon", 3, "click"], ["id", "map-settings"], ["size", "12"], ["lines", "none"], ["color", "medium", "slot", "end", 1, "settings-range", 3, "ngModel", "max", "min", "snaps", "step", "ticks", "ionChange", "ngModelChange"], ["color", "medium", "slot", "end", 3, "ngModel", "checked", "ionChange", "ngModelChange"]],
      template: function RaainMapComponent_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](0, "ion-grid")(1, "ion-row", 0);
          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtemplate"](2, RaainMapComponent_ion_icon_2_Template, 1, 0, "ion-icon", 1);
          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtemplate"](3, RaainMapComponent_ion_label_3_Template, 2, 0, "ion-label", 2);
          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtemplate"](4, RaainMapComponent_ion_label_4_Template, 3, 4, "ion-label", 3);
          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtemplate"](5, RaainMapComponent_ion_label_5_Template, 2, 0, "ion-label", 4);
          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtemplate"](6, RaainMapComponent_ion_select_6_Template, 2, 3, "ion-select", 5);
          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtemplate"](7, RaainMapComponent_ion_label_7_Template, 2, 0, "ion-label", 2);
          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtemplate"](8, RaainMapComponent_ion_icon_8_Template, 1, 0, "ion-icon", 6);
          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](9, "ion-row")(10, "ion-col", 7)(11, "div", 8);
          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelement"](12, "div", 9, 10);
          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]()();
          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](14, "ion-col", 11)(15, "div");
          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelement"](16, "canvas", null, 12);
          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]()()();
          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](18, "ion-row", 13)(19, "ion-col", 14)(20, "ion-button", 15);
          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵlistener"]("click", function RaainMapComponent_Template_ion_button_click_20_listener() {
            return ctx.toggleMapSettings();
          });
          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelement"](21, "ion-icon", 16)(22, "ion-icon", 17);
          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]()();
          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](23, "ion-col", 18);
          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelement"](24, "span", 19);
          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]()();
          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtemplate"](25, RaainMapComponent_ion_row_25_Template, 15, 10, "ion-row", 20);
          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        }
        if (rf & 2) {
          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](2);
          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("ngIf", ctx.showNavigation);
          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](1);
          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("ngIf", ctx.showDateRange);
          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](1);
          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("ngIf", ctx.showDateRange && (ctx.timeframeContainers == null ? null : ctx.timeframeContainers.containers == null ? null : ctx.timeframeContainers.containers.length));
          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](1);
          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("ngIf", ctx.showDateRange);
          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](1);
          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("ngIf", ctx.timeframeContainers == null ? null : ctx.timeframeContainers.containers == null ? null : ctx.timeframeContainers.containers.length);
          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](1);
          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("ngIf", ctx.showDateRange);
          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](1);
          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("ngIf", ctx.showNavigation);
          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](3);
          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵstyleProp"]("height", ctx.currentHeight, "px");
          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](4);
          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵstyleProp"]("height", ctx.currentHeight, "px")("width", 60, "px");
          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](7);
          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("name", ctx.showMapSettings ? "chevron-down" : "chevron-forward");
          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](2);
          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("innerHTML", ctx.mcText, _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵsanitizeHtml"]);
          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](1);
          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("ngIf", ctx.showMapSettings);
        }
      },
      dependencies: [_angular_common__WEBPACK_IMPORTED_MODULE_4__.NgForOf, _angular_common__WEBPACK_IMPORTED_MODULE_4__.NgIf, _angular_forms__WEBPACK_IMPORTED_MODULE_5__.NgControlStatus, _angular_forms__WEBPACK_IMPORTED_MODULE_5__.NgModel, _ionic_angular__WEBPACK_IMPORTED_MODULE_6__.IonButton, _ionic_angular__WEBPACK_IMPORTED_MODULE_6__.IonCol, _ionic_angular__WEBPACK_IMPORTED_MODULE_6__.IonGrid, _ionic_angular__WEBPACK_IMPORTED_MODULE_6__.IonIcon, _ionic_angular__WEBPACK_IMPORTED_MODULE_6__.IonItem, _ionic_angular__WEBPACK_IMPORTED_MODULE_6__.IonLabel, _ionic_angular__WEBPACK_IMPORTED_MODULE_6__.IonList, _ionic_angular__WEBPACK_IMPORTED_MODULE_6__.IonRange, _ionic_angular__WEBPACK_IMPORTED_MODULE_6__.IonRow, _ionic_angular__WEBPACK_IMPORTED_MODULE_6__.IonSelect, _ionic_angular__WEBPACK_IMPORTED_MODULE_6__.IonSelectOption, _ionic_angular__WEBPACK_IMPORTED_MODULE_6__.IonToggle, _ionic_angular__WEBPACK_IMPORTED_MODULE_6__.BooleanValueAccessor, _ionic_angular__WEBPACK_IMPORTED_MODULE_6__.SelectValueAccessor, _angular_common__WEBPACK_IMPORTED_MODULE_4__.DatePipe],
      styles: ["#map-container[_ngcontent-%COMP%] {\n  position: relative;\n}\n\n#map-div[_ngcontent-%COMP%] {\n  position: absolute;\n  left: 0;\n  top: 0;\n  right: 0;\n  bottom: 0;\n}\n\n#map-nav-row[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  gap: 8px;\n  padding: 4px 0;\n}\n#map-nav-row[_ngcontent-%COMP%]   .date-label[_ngcontent-%COMP%] {\n  font-size: 16px;\n  color: var(--ion-color-dark);\n  display: flex;\n  align-items: center;\n  height: 36px;\n  margin: 0;\n}\n#map-nav-row[_ngcontent-%COMP%]   .period-bracket[_ngcontent-%COMP%] {\n  font-size: 1.5rem;\n  font-weight: 600;\n  color: var(--ion-color-medium);\n  padding: 0 4px;\n}\n#map-nav-row[_ngcontent-%COMP%]   ion-select[_ngcontent-%COMP%] {\n  font-size: 16px;\n  color: var(--ion-color-dark);\n  max-width: -moz-fit-content;\n  max-width: fit-content;\n  min-height: 36px;\n  margin: 0;\n  padding: 0;\n}\n#map-nav-row[_ngcontent-%COMP%]   ion-select[_ngcontent-%COMP%]::part(container) {\n  padding: 0;\n}\n#map-nav-row[_ngcontent-%COMP%]   ion-select[_ngcontent-%COMP%]::part(text) {\n  display: flex;\n  align-items: center;\n}\n\n.nav-icon[_ngcontent-%COMP%] {\n  font-size: 28px;\n  cursor: pointer;\n  transition: opacity 0.2s ease;\n}\n.nav-icon[_ngcontent-%COMP%]:hover {\n  opacity: 0.7;\n}\n.nav-icon[_ngcontent-%COMP%]:active {\n  opacity: 0.5;\n}\n\nion-range[_ngcontent-%COMP%] {\n  padding: 0 0 0 20px;\n}\n\n#map-settings-toggle[_ngcontent-%COMP%] {\n  --padding-start: 8px;\n  --padding-end: 8px;\n}\n\n#map-settings[_ngcontent-%COMP%]   ion-list[_ngcontent-%COMP%] {\n  padding: 0;\n  background: transparent;\n}\n#map-settings[_ngcontent-%COMP%]   ion-item[_ngcontent-%COMP%] {\n  --padding-start: 16px;\n  --padding-end: 16px;\n  --background: transparent;\n  --min-height: 44px;\n}\n#map-settings[_ngcontent-%COMP%]   ion-label[_ngcontent-%COMP%] {\n  font-size: 14px;\n  color: var(--ion-color-medium);\n}\n#map-settings[_ngcontent-%COMP%]   .settings-range[_ngcontent-%COMP%] {\n  min-width: 150px;\n  max-width: 200px;\n  padding: 0;\n}\n/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8uL3NyYy9jb3JlL3NoYXJlZC9yYWFpbi1tYXAvcmFhaW4tbWFwLmNvbXBvbmVudC5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQ0Usa0JBQUE7QUFDRjs7QUFFQTtFQUNFLGtCQUFBO0VBQ0EsT0FBQTtFQUNBLE1BQUE7RUFDQSxRQUFBO0VBQ0EsU0FBQTtBQUNGOztBQUVBO0VBQ0UsYUFBQTtFQUNBLG1CQUFBO0VBQ0EsdUJBQUE7RUFDQSxRQUFBO0VBQ0EsY0FBQTtBQUNGO0FBQ0U7RUFDRSxlQUFBO0VBQ0EsNEJBQUE7RUFDQSxhQUFBO0VBQ0EsbUJBQUE7RUFDQSxZQUFBO0VBQ0EsU0FBQTtBQUNKO0FBRUU7RUFDRSxpQkFBQTtFQUNBLGdCQUFBO0VBQ0EsOEJBQUE7RUFDQSxjQUFBO0FBQUo7QUFHRTtFQUNFLGVBQUE7RUFDQSw0QkFBQTtFQUNBLDJCQUFBO0VBQUEsc0JBQUE7RUFDQSxnQkFBQTtFQUNBLFNBQUE7RUFDQSxVQUFBO0FBREo7QUFHSTtFQUNFLFVBQUE7QUFETjtBQUlJO0VBQ0UsYUFBQTtFQUNBLG1CQUFBO0FBRk47O0FBT0E7RUFDRSxlQUFBO0VBQ0EsZUFBQTtFQUNBLDZCQUFBO0FBSkY7QUFNRTtFQUNFLFlBQUE7QUFKSjtBQU9FO0VBQ0UsWUFBQTtBQUxKOztBQVNBO0VBQ0UsbUJBQUE7QUFORjs7QUFTQTtFQUNFLG9CQUFBO0VBQ0Esa0JBQUE7QUFORjs7QUFVRTtFQUNFLFVBQUE7RUFDQSx1QkFBQTtBQVBKO0FBVUU7RUFDRSxxQkFBQTtFQUNBLG1CQUFBO0VBQ0EseUJBQUE7RUFDQSxrQkFBQTtBQVJKO0FBV0U7RUFDRSxlQUFBO0VBQ0EsOEJBQUE7QUFUSjtBQVlFO0VBQ0UsZ0JBQUE7RUFDQSxnQkFBQTtFQUNBLFVBQUE7QUFWSjs7QUFjQTs7RUFBQSIsInNvdXJjZXNDb250ZW50IjpbIiNtYXAtY29udGFpbmVyIHtcbiAgcG9zaXRpb246IHJlbGF0aXZlO1xufVxuXG4jbWFwLWRpdiB7XG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgbGVmdDogMDtcbiAgdG9wOiAwO1xuICByaWdodDogMDtcbiAgYm90dG9tOiAwO1xufVxuXG4jbWFwLW5hdi1yb3cge1xuICBkaXNwbGF5OiBmbGV4O1xuICBhbGlnbi1pdGVtczogY2VudGVyO1xuICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcbiAgZ2FwOiA4cHg7XG4gIHBhZGRpbmc6IDRweCAwO1xuXG4gIC5kYXRlLWxhYmVsIHtcbiAgICBmb250LXNpemU6IDE2cHg7XG4gICAgY29sb3I6IHZhcigtLWlvbi1jb2xvci1kYXJrKTtcbiAgICBkaXNwbGF5OiBmbGV4O1xuICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG4gICAgaGVpZ2h0OiAzNnB4O1xuICAgIG1hcmdpbjogMDtcbiAgfVxuXG4gIC5wZXJpb2QtYnJhY2tldCB7XG4gICAgZm9udC1zaXplOiAxLjVyZW07XG4gICAgZm9udC13ZWlnaHQ6IDYwMDtcbiAgICBjb2xvcjogdmFyKC0taW9uLWNvbG9yLW1lZGl1bSk7XG4gICAgcGFkZGluZzogMCA0cHg7XG4gIH1cblxuICBpb24tc2VsZWN0IHtcbiAgICBmb250LXNpemU6IDE2cHg7XG4gICAgY29sb3I6IHZhcigtLWlvbi1jb2xvci1kYXJrKTtcbiAgICBtYXgtd2lkdGg6IGZpdC1jb250ZW50O1xuICAgIG1pbi1oZWlnaHQ6IDM2cHg7XG4gICAgbWFyZ2luOiAwO1xuICAgIHBhZGRpbmc6IDA7XG5cbiAgICAmOjpwYXJ0KGNvbnRhaW5lcikge1xuICAgICAgcGFkZGluZzogMDtcbiAgICB9XG5cbiAgICAmOjpwYXJ0KHRleHQpIHtcbiAgICAgIGRpc3BsYXk6IGZsZXg7XG4gICAgICBhbGlnbi1pdGVtczogY2VudGVyO1xuICAgIH1cbiAgfVxufVxuXG4ubmF2LWljb24ge1xuICBmb250LXNpemU6IDI4cHg7XG4gIGN1cnNvcjogcG9pbnRlcjtcbiAgdHJhbnNpdGlvbjogb3BhY2l0eSAwLjJzIGVhc2U7XG5cbiAgJjpob3ZlciB7XG4gICAgb3BhY2l0eTogMC43O1xuICB9XG5cbiAgJjphY3RpdmUge1xuICAgIG9wYWNpdHk6IDAuNTtcbiAgfVxufVxuXG5pb24tcmFuZ2Uge1xuICBwYWRkaW5nOiAwIDAgMCAyMHB4O1xufVxuXG4jbWFwLXNldHRpbmdzLXRvZ2dsZSB7XG4gIC0tcGFkZGluZy1zdGFydDogOHB4O1xuICAtLXBhZGRpbmctZW5kOiA4cHg7XG59XG5cbiNtYXAtc2V0dGluZ3Mge1xuICBpb24tbGlzdCB7XG4gICAgcGFkZGluZzogMDtcbiAgICBiYWNrZ3JvdW5kOiB0cmFuc3BhcmVudDtcbiAgfVxuXG4gIGlvbi1pdGVtIHtcbiAgICAtLXBhZGRpbmctc3RhcnQ6IDE2cHg7XG4gICAgLS1wYWRkaW5nLWVuZDogMTZweDtcbiAgICAtLWJhY2tncm91bmQ6IHRyYW5zcGFyZW50O1xuICAgIC0tbWluLWhlaWdodDogNDRweDtcbiAgfVxuXG4gIGlvbi1sYWJlbCB7XG4gICAgZm9udC1zaXplOiAxNHB4O1xuICAgIGNvbG9yOiB2YXIoLS1pb24tY29sb3ItbWVkaXVtKTtcbiAgfVxuXG4gIC5zZXR0aW5ncy1yYW5nZSB7XG4gICAgbWluLXdpZHRoOiAxNTBweDtcbiAgICBtYXgtd2lkdGg6IDIwMHB4O1xuICAgIHBhZGRpbmc6IDA7XG4gIH1cbn1cblxuLyogV2luZCBhbmltYXRpb24gc3R5bGVzIGFyZSBkZWZpbmVkIGluIHNyYy9nbG9iYWwuc2Nzc1xuICogdG8gYXZvaWQgQW5ndWxhciB2aWV3IGVuY2Fwc3VsYXRpb24gaXNzdWVzIHdpdGggZHluYW1pY2FsbHkgY3JlYXRlZCBMZWFmbGV0IG1hcmtlcnNcbiAqL1xuIl0sInNvdXJjZVJvb3QiOiIifQ== */"]
    });
  }
}

/***/ }),

/***/ 95143:
/*!**************************************************************!*\
  !*** ./src/core/shared/raain-speed/raain-speed.component.ts ***!
  \**************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "RaainSpeedComponent": () => (/* binding */ RaainSpeedComponent)
/* harmony export */ });
/* harmony import */ var raain_ui__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! raain-ui */ 88666);
/* harmony import */ var raain_ui__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(raain_ui__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ 22560);


const _c0 = ["canvasSpeedElement"];
class RaainSpeedComponent {
  constructor(ngZone) {
    this.ngZone = ngZone;
    this.hide = false;
    this.delete();
    this.onSizeChanged = () => {};
  }
  ngAfterViewChecked() {
    this.create();
  }
  ngOnChanges(changes) {
    this.change(changes);
  }
  ngOnDestroy() {
    this.delete();
  }
  onResize(event) {
    this.updateMapSize();
  }
  create() {
    if (this.created || !this.compareSpeedMatrix?.length) {
      return;
    }
    this.created = true;
    // this.ngZone.runOutsideAngular(() => {
    setTimeout(() => {
      const factory = new raain_ui__WEBPACK_IMPORTED_MODULE_0__.ElementsFactory();
      factory.createSpeedMatrixIndicator(this.canvasSpeedElement.nativeElement, new raain_ui__WEBPACK_IMPORTED_MODULE_0__.SpeedMatrixElementInput(this.compareSpeedMatrix, this.compareTrustedIndicator));
    }, 10);
    //   });
  }

  delete() {
    this.created = false;
    this.hide = false;
  }
  change(changes) {
    if (changes.compareSpeedMatrix) {
      if (!this.compareSpeedMatrix?.length) {
        this.hide = true;
        return;
      }
    }
    setTimeout(() => {
      this.delete();
      this.create();
    }, 10);
  }
  updateMapSize() {
    const mapDivWidth = this.canvasSpeedElement.nativeElement.parentNode?.parentNode['clientWidth'];
    const currentWidth = mapDivWidth || window.innerWidth || document.documentElement.clientWidth || document.body.clientWidth;
    const currentHeight = this.currentHeight || window.innerHeight || document.documentElement.clientHeight || document.body.clientHeight;
    this.currentWidth = currentWidth;
    this.currentHeight = currentHeight;
    this.ngZone.run(() => {
      this.onSizeChanged();
    });
  }
  static {
    this.ɵfac = function RaainSpeedComponent_Factory(t) {
      return new (t || RaainSpeedComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](_angular_core__WEBPACK_IMPORTED_MODULE_1__.NgZone));
    };
  }
  static {
    this.ɵcmp = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineComponent"]({
      type: RaainSpeedComponent,
      selectors: [["raain-speed"]],
      viewQuery: function RaainSpeedComponent_Query(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵviewQuery"](_c0, 5);
        }
        if (rf & 2) {
          let _t;
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵqueryRefresh"](_t = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵloadQuery"]()) && (ctx.canvasSpeedElement = _t.first);
        }
      },
      hostBindings: function RaainSpeedComponent_HostBindings(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("resize", function RaainSpeedComponent_resize_HostBindingHandler($event) {
            return ctx.onResize($event);
          }, false, _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵresolveWindow"]);
        }
      },
      inputs: {
        compareSpeedMatrix: "compareSpeedMatrix",
        compareTrustedIndicator: "compareTrustedIndicator",
        currentHeight: "currentHeight"
      },
      features: [_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵNgOnChangesFeature"]],
      decls: 8,
      vars: 2,
      consts: [["id", "container"], ["id", "canvas-speed-matrix"], [3, "hidden"], ["id", "indic1"], ["canvasSpeedElement", ""], ["id", "hiddenSquare"]],
      template: function RaainSpeedComponent_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "div", 0)(1, "div", 1)(2, "div", 2);
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](3, "canvas", 3, 4);
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](5, "div", 2)(6, "span", 5);
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](7, " \u00A0");
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()()()();
        }
        if (rf & 2) {
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](2);
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("hidden", ctx.hide);
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](3);
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("hidden", !ctx.hide);
        }
      },
      styles: ["#container[_ngcontent-%COMP%] {\n  position: relative;\n  min-width: 100px;\n}\n\n#hiddenSquare[_ngcontent-%COMP%] {\n  height: 100px;\n  display: block;\n}\n/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8uL3NyYy9jb3JlL3NoYXJlZC9yYWFpbi1zcGVlZC9yYWFpbi1zcGVlZC5jb21wb25lbnQuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFDQTtFQUNFLGtCQUFBO0VBQ0EsZ0JBQUE7QUFBRjs7QUFJQTtFQUNFLGFBQUE7RUFDQSxjQUFBO0FBREYiLCJzb3VyY2VzQ29udGVudCI6WyJcbiNjb250YWluZXIge1xuICBwb3NpdGlvbjogcmVsYXRpdmU7XG4gIG1pbi13aWR0aDogMTAwcHg7XG4gIC8vIGhlaWdodDogNDAwcHg7XG59XG5cbiNoaWRkZW5TcXVhcmUge1xuICBoZWlnaHQ6IDEwMHB4O1xuICBkaXNwbGF5OiBibG9jaztcbn1cbiJdLCJzb3VyY2VSb290IjoiIn0= */"]
    });
  }
}

/***/ }),

/***/ 49766:
/*!******************************************!*\
  !*** ./src/core/shared/radar.service.ts ***!
  \******************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "RadarService": () => (/* binding */ RadarService)
/* harmony export */ });
/* harmony import */ var _opt_atlassian_pipelines_agent_build_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/esm/asyncToGenerator.js */ 71670);
/* harmony import */ var raain_ui__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! raain-ui */ 88666);
/* harmony import */ var raain_ui__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(raain_ui__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _tools__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./tools */ 1987);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/core */ 22560);
/* harmony import */ var _profile_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./profile.service */ 15770);





class RadarService {
  constructor(profileService) {
    this.profileService = profileService;
  }
  static getGeoValuesFromRainMeasures(measureValue, rain) {
    return this.computeValues(measureValue.getPolars(), rain);
  }
  static getGeoValuesFromRadarMeasures(measureValue, rain) {
    return this.computeValues(measureValue.getPolars(), rain);
  }
  static computeValues(polarMeasureValues, rain) {
    const values = [];
    polarMeasureValues.forEach(p => {
      const azimuth = p.azimuth;
      let distance = 0;
      const polarEdges = p.polarEdges;
      polarEdges.forEach(e => {
        const pmv = new raain_ui__WEBPACK_IMPORTED_MODULE_1__.PolarMapValue(e, azimuth, distance);
        values.push(pmv);
        distance += p.distance;
      });
    });
    return values;
  }
  getTimeline(rainNode) {
    return (0,_opt_atlassian_pipelines_agent_build_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_0__["default"])(function* () {
      const timeline = [];
      const links = rainNode?.getLinks() ?? [];
      for (const link of links) {
        const cumulativeIndex = link.href.indexOf('cumulatives/');
        if (cumulativeIndex >= 0) {
          const start = cumulativeIndex + 'cumulatives/'.length;
          const str1 = link.href.substring(start);
          if (str1) {
            const splitted = str1.split('/');
            const frameDate = new Date(splitted[0]);
            const version = splitted[1];
            const rainComputationCumulativeId = splitted[2];
            const existingTargets = timeline.filter(t => t.date.getTime() === frameDate.getTime());
            if (existingTargets.length) {
              existingTargets[0].rainComputationCumulativeId = rainComputationCumulativeId;
            } else {
              timeline.push(new _tools__WEBPACK_IMPORTED_MODULE_2__.FrameSet(frameDate, [], null, null, [], rainComputationCumulativeId));
            }
          }
        }
      }
      return timeline;
    })();
  }
  static {
    this.ɵfac = function RadarService_Factory(t) {
      return new (t || RadarService)(_angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵinject"](_profile_service__WEBPACK_IMPORTED_MODULE_3__.ProfileService));
    };
  }
  static {
    this.ɵprov = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵdefineInjectable"]({
      token: RadarService,
      factory: RadarService.ɵfac
    });
  }
}

/***/ }),

/***/ 40147:
/*!*****************************************!*\
  !*** ./src/core/shared/shared.const.ts ***!
  \*****************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "CONSTANTS": () => (/* binding */ CONSTANTS)
/* harmony export */ });
const CONSTANTS = {
  _RAIN_STATUS_0_NOT_STARTED: 0,
  _RAIN_STATUS_0_WAIT_FOR_INTERNAL_VALIDATION: 0.3,
  _RAIN_STATUS_1_READY_TO_COMPUTE: 0.6,
  _RAIN_STATUS_1_READY: 1,
  _INPUT_VALIDITY_NOT_CHECKED_YET: -1,
  _INPUT_VALIDITY_CHECK_IN_PROGRESS: -0.5,
  _INPUT_VALIDITY_NOT_VALID: 0,
  _INPUT_VALIDITY_NOT_CONFIDENT: 0.5,
  _INPUT_VALIDITY_VALID: 1
};

/***/ }),

/***/ 6454:
/*!******************************************!*\
  !*** ./src/core/shared/shared.module.ts ***!
  \******************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "SharedModule": () => (/* binding */ SharedModule)
/* harmony export */ });
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(/*! @angular/common */ 94666);
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_19__ = __webpack_require__(/*! @angular/forms */ 2508);
/* harmony import */ var _profile_service__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./profile.service */ 15770);
/* harmony import */ var _storage_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./storage.service */ 8184);
/* harmony import */ var _radar_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./radar.service */ 49766);
/* harmony import */ var _cache_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./cache.service */ 13140);
/* harmony import */ var _profile_icon_directive__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./profile-icon.directive */ 36035);
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(/*! @ionic/angular */ 93819);
/* harmony import */ var _pipes_module__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./pipes.module */ 5421);
/* harmony import */ var _raain_map_raain_map_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./raain-map/raain-map.component */ 50121);
/* harmony import */ var _raain_compare_raain_compare_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./raain-compare/raain-compare.component */ 39337);
/* harmony import */ var _raain_configuration_raain_configuration_component__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./raain-configuration/raain-configuration.component */ 45745);
/* harmony import */ var _raain_date_focus_raain_date_focus_component__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./raain-date-focus/raain-date-focus.component */ 25320);
/* harmony import */ var _raain_date_dynamic_raain_date_dynamic_component__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./raain-date-dynamic/raain-date-dynamic.component */ 4528);
/* harmony import */ var _raain_speed_raain_speed_component__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ./raain-speed/raain-speed.component */ 95143);
/* harmony import */ var _raain_compare_stack_raain_compare_stack_component__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ./raain-compare-stack/raain-compare-stack.component */ 46341);
/* harmony import */ var _raain_globe_raain_globe_component__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ./raain-globe/raain-globe.component */ 12978);
/* harmony import */ var _raain_details_raain_details_component__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! ./raain-details/raain-details.component */ 25712);
/* harmony import */ var _cumulative_selector_cumulative_selector_component__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! ./cumulative-selector/cumulative-selector.component */ 98768);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! @angular/core */ 22560);




















class SharedModule {
  constructor(parentModule) {
    if (parentModule) {
      // throw new Error(
      console.warn('SharedModule is already loaded. Import it in the AppModule only');
    }
  }
  static {
    this.ɵfac = function SharedModule_Factory(t) {
      return new (t || SharedModule)(_angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵinject"](SharedModule, 12));
    };
  }
  static {
    this.ɵmod = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵdefineNgModule"]({
      type: SharedModule
    });
  }
  static {
    this.ɵinj = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵdefineInjector"]({
      providers: [_storage_service__WEBPACK_IMPORTED_MODULE_1__.Storage, _radar_service__WEBPACK_IMPORTED_MODULE_2__.RadarService, _profile_service__WEBPACK_IMPORTED_MODULE_0__.ProfileService, _cache_service__WEBPACK_IMPORTED_MODULE_3__.Cache, _ionic_angular__WEBPACK_IMPORTED_MODULE_17__.IonRange],
      imports: [_angular_common__WEBPACK_IMPORTED_MODULE_18__.CommonModule, _angular_forms__WEBPACK_IMPORTED_MODULE_19__.FormsModule, _ionic_angular__WEBPACK_IMPORTED_MODULE_17__.IonicModule, _pipes_module__WEBPACK_IMPORTED_MODULE_5__.PipesModule, _angular_common__WEBPACK_IMPORTED_MODULE_18__.CommonModule, _pipes_module__WEBPACK_IMPORTED_MODULE_5__.PipesModule]
    });
  }
}
(function () {
  (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵsetNgModuleScope"](SharedModule, {
    declarations: [_raain_map_raain_map_component__WEBPACK_IMPORTED_MODULE_6__.RaainMapComponent, _raain_compare_raain_compare_component__WEBPACK_IMPORTED_MODULE_7__.RaainCompareComponent, _raain_compare_stack_raain_compare_stack_component__WEBPACK_IMPORTED_MODULE_12__.RaainCompareStackComponent, _raain_date_focus_raain_date_focus_component__WEBPACK_IMPORTED_MODULE_9__.RaainDateFocusComponent, _raain_date_dynamic_raain_date_dynamic_component__WEBPACK_IMPORTED_MODULE_10__.RaainDateDynamicComponent, _raain_configuration_raain_configuration_component__WEBPACK_IMPORTED_MODULE_8__.RaainConfigurationComponent, _raain_speed_raain_speed_component__WEBPACK_IMPORTED_MODULE_11__.RaainSpeedComponent, _raain_globe_raain_globe_component__WEBPACK_IMPORTED_MODULE_13__.RaainGlobeComponent, _profile_icon_directive__WEBPACK_IMPORTED_MODULE_4__.ProfileIconDirective, _raain_details_raain_details_component__WEBPACK_IMPORTED_MODULE_14__.RaainDetailsComponent, _cumulative_selector_cumulative_selector_component__WEBPACK_IMPORTED_MODULE_15__.CumulativeSelectorComponent],
    imports: [_angular_common__WEBPACK_IMPORTED_MODULE_18__.CommonModule, _angular_forms__WEBPACK_IMPORTED_MODULE_19__.FormsModule, _ionic_angular__WEBPACK_IMPORTED_MODULE_17__.IonicModule, _angular_common__WEBPACK_IMPORTED_MODULE_18__.NgOptimizedImage, _pipes_module__WEBPACK_IMPORTED_MODULE_5__.PipesModule],
    exports: [_angular_common__WEBPACK_IMPORTED_MODULE_18__.CommonModule, _angular_common__WEBPACK_IMPORTED_MODULE_18__.NgStyle, _pipes_module__WEBPACK_IMPORTED_MODULE_5__.PipesModule, _raain_map_raain_map_component__WEBPACK_IMPORTED_MODULE_6__.RaainMapComponent, _raain_compare_raain_compare_component__WEBPACK_IMPORTED_MODULE_7__.RaainCompareComponent, _raain_compare_stack_raain_compare_stack_component__WEBPACK_IMPORTED_MODULE_12__.RaainCompareStackComponent, _raain_date_focus_raain_date_focus_component__WEBPACK_IMPORTED_MODULE_9__.RaainDateFocusComponent, _raain_date_dynamic_raain_date_dynamic_component__WEBPACK_IMPORTED_MODULE_10__.RaainDateDynamicComponent, _raain_configuration_raain_configuration_component__WEBPACK_IMPORTED_MODULE_8__.RaainConfigurationComponent, _raain_speed_raain_speed_component__WEBPACK_IMPORTED_MODULE_11__.RaainSpeedComponent, _raain_globe_raain_globe_component__WEBPACK_IMPORTED_MODULE_13__.RaainGlobeComponent, _profile_icon_directive__WEBPACK_IMPORTED_MODULE_4__.ProfileIconDirective, _raain_details_raain_details_component__WEBPACK_IMPORTED_MODULE_14__.RaainDetailsComponent, _cumulative_selector_cumulative_selector_component__WEBPACK_IMPORTED_MODULE_15__.CumulativeSelectorComponent]
  });
})();

/***/ }),

/***/ 64221:
/*!****************************************!*\
  !*** ./src/core/shared/shared.pipe.ts ***!
  \****************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "AreInProgressPipe": () => (/* binding */ AreInProgressPipe),
/* harmony export */   "AreReady": () => (/* binding */ AreReady),
/* harmony export */   "AreStopped": () => (/* binding */ AreStopped),
/* harmony export */   "HasGoodQuality": () => (/* binding */ HasGoodQuality),
/* harmony export */   "HasNotGoodQuality": () => (/* binding */ HasNotGoodQuality),
/* harmony export */   "HaveNotBeenRed": () => (/* binding */ HaveNotBeenRed),
/* harmony export */   "IsNotReady": () => (/* binding */ IsNotReady),
/* harmony export */   "IsReady": () => (/* binding */ IsReady),
/* harmony export */   "ProgressBuffer": () => (/* binding */ ProgressBuffer),
/* harmony export */   "ProgressValue": () => (/* binding */ ProgressValue),
/* harmony export */   "WaitForValidation": () => (/* binding */ WaitForValidation)
/* harmony export */ });
/* harmony import */ var _shared_const__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./shared.const */ 40147);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ 22560);


class AreStopped {
  transform(rains) {
    return rains.filter(rain => rain.status <= _shared_const__WEBPACK_IMPORTED_MODULE_0__.CONSTANTS._RAIN_STATUS_0_NOT_STARTED);
  }
  static {
    this.ɵfac = function AreStopped_Factory(t) {
      return new (t || AreStopped)();
    };
  }
  static {
    this.ɵpipe = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefinePipe"]({
      name: "areStopped",
      type: AreStopped,
      pure: true
    });
  }
}
class AreInProgressPipe {
  transform(rains) {
    return rains.filter(rain => _shared_const__WEBPACK_IMPORTED_MODULE_0__.CONSTANTS._RAIN_STATUS_0_NOT_STARTED < rain.status && rain.status < _shared_const__WEBPACK_IMPORTED_MODULE_0__.CONSTANTS._RAIN_STATUS_1_READY_TO_COMPUTE);
  }
  static {
    this.ɵfac = function AreInProgressPipe_Factory(t) {
      return new (t || AreInProgressPipe)();
    };
  }
  static {
    this.ɵpipe = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefinePipe"]({
      name: "areInProgress",
      type: AreInProgressPipe,
      pure: true
    });
  }
}
class AreReady {
  transform(rains) {
    return rains.filter(rain => rain.status >= _shared_const__WEBPACK_IMPORTED_MODULE_0__.CONSTANTS._RAIN_STATUS_1_READY_TO_COMPUTE && rain.quality > _shared_const__WEBPACK_IMPORTED_MODULE_0__.CONSTANTS._INPUT_VALIDITY_NOT_CONFIDENT);
  }
  static {
    this.ɵfac = function AreReady_Factory(t) {
      return new (t || AreReady)();
    };
  }
  static {
    this.ɵpipe = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefinePipe"]({
      name: "areReady",
      type: AreReady,
      pure: true
    });
  }
}
class IsReady {
  transform(rain) {
    if (rain.status >= _shared_const__WEBPACK_IMPORTED_MODULE_0__.CONSTANTS._RAIN_STATUS_1_READY_TO_COMPUTE) {
      return rain;
    }
    return null;
  }
  static {
    this.ɵfac = function IsReady_Factory(t) {
      return new (t || IsReady)();
    };
  }
  static {
    this.ɵpipe = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefinePipe"]({
      name: "isReady",
      type: IsReady,
      pure: true
    });
  }
}
class IsNotReady {
  transform(rain) {
    if (rain.status < _shared_const__WEBPACK_IMPORTED_MODULE_0__.CONSTANTS._RAIN_STATUS_1_READY_TO_COMPUTE) {
      return rain;
    }
    return null;
  }
  static {
    this.ɵfac = function IsNotReady_Factory(t) {
      return new (t || IsNotReady)();
    };
  }
  static {
    this.ɵpipe = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefinePipe"]({
      name: "isNotReady",
      type: IsNotReady,
      pure: true
    });
  }
}
class WaitForValidation {
  transform(rain) {
    if (rain.status === _shared_const__WEBPACK_IMPORTED_MODULE_0__.CONSTANTS._RAIN_STATUS_1_READY_TO_COMPUTE) {
      return rain;
    }
    return null;
  }
  static {
    this.ɵfac = function WaitForValidation_Factory(t) {
      return new (t || WaitForValidation)();
    };
  }
  static {
    this.ɵpipe = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefinePipe"]({
      name: "waitForValidation",
      type: WaitForValidation,
      pure: true
    });
  }
}
class HasGoodQuality {
  transform(rain) {
    if (rain.quality > _shared_const__WEBPACK_IMPORTED_MODULE_0__.CONSTANTS._INPUT_VALIDITY_NOT_CONFIDENT) {
      return rain;
    }
    return null;
  }
  static {
    this.ɵfac = function HasGoodQuality_Factory(t) {
      return new (t || HasGoodQuality)();
    };
  }
  static {
    this.ɵpipe = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefinePipe"]({
      name: "hasGoodQuality",
      type: HasGoodQuality,
      pure: true
    });
  }
}
class HasNotGoodQuality {
  transform(rain) {
    if (rain.quality < _shared_const__WEBPACK_IMPORTED_MODULE_0__.CONSTANTS._INPUT_VALIDITY_VALID) {
      return rain;
    }
    return null;
  }
  static {
    this.ɵfac = function HasNotGoodQuality_Factory(t) {
      return new (t || HasNotGoodQuality)();
    };
  }
  static {
    this.ɵpipe = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefinePipe"]({
      name: "hasNotGoodQuality",
      type: HasNotGoodQuality,
      pure: true
    });
  }
}
class ProgressValue {
  transform(rain) {
    if (rain.status < 0) {
      return 0;
    } else if (rain.status > 1) {
      return 1;
    }
    return rain.status;
  }
  static {
    this.ɵfac = function ProgressValue_Factory(t) {
      return new (t || ProgressValue)();
    };
  }
  static {
    this.ɵpipe = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefinePipe"]({
      name: "progressValue",
      type: ProgressValue,
      pure: true
    });
  }
}
class ProgressBuffer {
  transform(rain) {
    if (rain.quality < 0) {
      return 0;
    } else if (rain.quality > 1) {
      return 1;
    }
    return rain.quality;
  }
  static {
    this.ɵfac = function ProgressBuffer_Factory(t) {
      return new (t || ProgressBuffer)();
    };
  }
  static {
    this.ɵpipe = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefinePipe"]({
      name: "progressBuffer",
      type: ProgressBuffer,
      pure: true
    });
  }
}
class HaveNotBeenRed {
  transform(events) {
    return events.filter(event => !event.red);
  }
  static {
    this.ɵfac = function HaveNotBeenRed_Factory(t) {
      return new (t || HaveNotBeenRed)();
    };
  }
  static {
    this.ɵpipe = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefinePipe"]({
      name: "haveNotBeenRed",
      type: HaveNotBeenRed,
      pure: false
    });
  }
}

/***/ }),

/***/ 8184:
/*!********************************************!*\
  !*** ./src/core/shared/storage.service.ts ***!
  \********************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Storage": () => (/* binding */ Storage)
/* harmony export */ });
/* harmony import */ var fidj_angular__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! fidj-angular */ 84243);
/* harmony import */ var fidj_angular__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(fidj_angular__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ 22560);


class Storage extends fidj_angular__WEBPACK_IMPORTED_MODULE_0__.LocalStorage {
  constructor() {
    super('raain-app.');
  }
  static {
    this.ɵfac = function Storage_Factory(t) {
      return new (t || Storage)();
    };
  }
  static {
    this.ɵprov = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineInjectable"]({
      token: Storage,
      factory: Storage.ɵfac
    });
  }
}

/***/ }),

/***/ 55997:
/*!*************************************************!*\
  !*** ./src/core/shared/tools/CompareManager.ts ***!
  \*************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "CompareManager": () => (/* binding */ CompareManager)
/* harmony export */ });
/* harmony import */ var _opt_atlassian_pipelines_agent_build_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/esm/asyncToGenerator.js */ 71670);
/* harmony import */ var raain_ui__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! raain-ui */ 88666);
/* harmony import */ var raain_ui__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(raain_ui__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var raain_model__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! raain-model */ 70034);
/* harmony import */ var raain_model__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(raain_model__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _xytype__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../xytype */ 8217);




class CompareManager {
  constructor(profileService, onChanges = () => {}) {
    this.profileService = profileService;
    this.onChanges = onChanges;
    this.cleanAll();
  }
  // Merged cumulative from granular comparisons (computed from buildCompares)
  get granularCumulativePoints() {
    if (!this.buildCompares?.compareCumulative?.qualityPoints?.length) {
      return [];
    }
    return this.buildCompares.compareCumulative.qualityPoints.map(qp => new _xytype__WEBPACK_IMPORTED_MODULE_3__.XYType(qp.getGaugeValue(), qp.getRainValue(), 2, qp.gaugeLabel, qp.gaugeId));
  }
  get granularCumulativePointsMax() {
    if (!this.buildCompares?.compareCumulative) {
      return new _xytype__WEBPACK_IMPORTED_MODULE_3__.XYType(0, 0);
    }
    const maxValue = this.buildCompares.compareCumulative.maxValue * 1.2;
    return new _xytype__WEBPACK_IMPORTED_MODULE_3__.XYType(maxValue, maxValue);
  }
  // Default: KGE normalized 0-1 (from raain-model defaults)
  get granularCumulativeQualityIndicator() {
    if (!this.buildCompares?.compareCumulative?.qualityPoints?.length) {
      return null;
    }
    return raain_model__WEBPACK_IMPORTED_MODULE_2__.SpeedMatrix.ComputeQualityIndicator(this.buildCompares.compareCumulative.qualityPoints);
  }
  get rainNode() {
    return this._rainNode;
  }
  set rainNode(rainNode) {
    this._rainNode = rainNode;
    this.cleanAll();
  }
  cleanAll() {
    this.gaugesInMap = [];
    this.gaugesInCompare = [];
    this.selectedGauges = [];
    this.selectedPixels = [];
    this.pixelsSolutions = [];
    this.compareDates = [];
    this.speeds = [];
    this.buildCompares = {
      comparesPerDate: [],
      compareCumulative: null
    };
    this.globalComparePoints = [];
    this.globalComparePointsMax = new _xytype__WEBPACK_IMPORTED_MODULE_3__.XYType(0, 0);
    this.globalQualityIndicator = null;
    // granularCumulative* are now getters computed from buildCompares
    this.rainComputationQualitiesPerDate = {};
    this.selectedGauge = null;
    this.selectedGaugeInPoints = null;
    this.cleanCompareQuality('no compare yet');
  }
  refreshCompareQuality(frameSet, onlyOne) {
    var _this = this;
    return (0,_opt_atlassian_pipelines_agent_build_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_0__["default"])(function* () {
      const comparePerDate = _this.getComparePerDate(frameSet.date);
      if (!comparePerDate || !comparePerDate.rainComputationQuality?.qualitySpeedMatrixContainer) {
        // this.cleanCompareQuality(
        //     'no current quality ' + Object.keys(this.rainComputationQualitiesPerDate)
        // );
        // this.onChanges();
        return;
      }
      if (onlyOne) {
        comparePerDate.compareTimeline = comparePerDate.compareTimeline.filter(c => c.date.getTime() === frameSet.date.getTime());
      }
      const uiCompares = comparePerDate.compareTimeline.map(c => {
        // Default: KGE normalized 0-1
        const qualityIndicator = raain_model__WEBPACK_IMPORTED_MODULE_2__.SpeedMatrix.ComputeQualityIndicator(c.qualityPoints);
        return {
          date: c.date,
          name: c.name,
          comparePoints: c.qualityPoints.map(p => new _xytype__WEBPACK_IMPORTED_MODULE_3__.XYType(p.getGaugeValue(), p.getRainValue(), 2, p.gaugeLabel, p.gaugeId)),
          comparePointsMax: new _xytype__WEBPACK_IMPORTED_MODULE_3__.XYType(c.maxValue * 1.2, c.maxValue * 1.2),
          comparePointsHistory: c.qualityPointsLegacy,
          remarks: c.remarks,
          qualityIndicator
        };
      }).sort((a, b) => a.date?.getTime() - b.date?.getTime());
      _this.currentQualityDoneDate = comparePerDate.rainComputationQuality.isDoneDate;
      _this.currentQualityTimeSpentInMs = comparePerDate.rainComputationQuality.timeSpentInMs;
      _this.currentQualityLaunchedBy = comparePerDate.rainComputationQuality.launchedBy;
      _this.compareVersion = comparePerDate.rainComputationQuality.getVersion();
      _this.compareSpeed = comparePerDate.rainComputationQuality.qualitySpeedMatrixContainer.getSpeed();
      _this.compareNames = uiCompares.map(c => c.name);
      _this.uiCompares = uiCompares;
      _this.onChanges();
    })();
  }
  refreshGlobalCompareQuality(_x, _x2, _x3) {
    var _this2 = this;
    return (0,_opt_atlassian_pipelines_agent_build_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_0__["default"])(function* (targetsOrdered, period, withCompareDuplicate, provider = 'Raain', timeStepInMinutes = 5, timeStepMode = 'eq') {
      try {
        yield _this2.fetchRainComputationQualities(targetsOrdered, provider, timeStepInMinutes, timeStepMode);
        yield _this2.buildComparesTimeline(targetsOrdered, period, withCompareDuplicate);
        if (!_this2.buildCompares.compareCumulative) {
          // throw Error('needs cumulative compare');
          return;
        }
        const countForAverage = targetsOrdered.length;
        const maxValue = _this2.buildCompares.compareCumulative.maxValue * 1.2;
        const cumulativePoints = _this2.buildCompares.compareCumulative.qualityPoints.map(qp => new _xytype__WEBPACK_IMPORTED_MODULE_3__.XYType(qp.getGaugeValue(), qp.getRainValue(), 2, qp.gaugeLabel, qp.gaugeId));
        const cumulativePointsMax = new _xytype__WEBPACK_IMPORTED_MODULE_3__.XYType(maxValue, maxValue);
        // Default: KGE normalized 0-1
        const cumulativeQualityIndicator = raain_model__WEBPACK_IMPORTED_MODULE_2__.SpeedMatrix.ComputeQualityIndicator(_this2.buildCompares.compareCumulative.qualityPoints);
        // Set for cumulative mode
        _this2.globalComparePoints = cumulativePoints;
        _this2.globalComparePointsMax = cumulativePointsMax;
        _this2.globalQualityIndicator = cumulativeQualityIndicator;
        // granularCumulative* are now getters computed from buildCompares.compareCumulative
      } catch (e) {
        console.warn(e);
      }
    }).apply(this, arguments);
  }
  setGaugesInMap() {
    var _this3 = this;
    return (0,_opt_atlassian_pipelines_agent_build_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_0__["default"])(function* () {
      // Get all gauge IDs linked to this rainNode
      const rainNodeGaugeIds = _this3.rainNode.getLinks(raain_model__WEBPACK_IMPORTED_MODULE_2__.GaugeNode.TYPE).map(l => l.getId());
      // Fetch gauges from API (may be filtered/limited)
      let gaugesToFilter = yield _this3.profileService.getGauges(_this3.rainNode?.id, _this3.rainNode.getCenter());
      gaugesToFilter = gaugesToFilter.sort((a, b) => {
        return a.approxDistanceFrom(_this3.rainNode.getCenter()) - b.approxDistanceFrom(_this3.rainNode.getCenter());
      }).filter((v, index) => index < 200);
      // Build a map of gauges from API response
      const gaugesFromApi = new Map();
      for (const gauge of gaugesToFilter) {
        gaugesFromApi.set(gauge.id, gauge);
      }
      // Fetch missing gauges individually (those linked but not in API response)
      const missingGaugeIds = rainNodeGaugeIds.filter(id => !gaugesFromApi.has(id));
      for (const gaugeId of missingGaugeIds) {
        try {
          const gauge = yield _this3.profileService.getGauge(gaugeId);
          if (gauge) {
            gaugesFromApi.set(gauge.id, gauge);
          }
        } catch (e) {
          console.warn(`Failed to fetch gauge ${gaugeId}:`, e);
        }
      }
      // Filter to only gauges linked to this rainNode
      const visibleGauges = rainNodeGaugeIds.map(id => gaugesFromApi.get(id)).filter(g => !!g);
      console.log('visibleGauges:', visibleGauges.length, '/', rainNodeGaugeIds.length);
      const gaugesLatLng = [];
      for (const gauge of visibleGauges) {
        gaugesLatLng.push(new raain_ui__WEBPACK_IMPORTED_MODULE_1__.MapLatLng(gauge.latitude, gauge.longitude, undefined, gauge.id, gauge.name));
      }
      _this3.gaugesInMap = gaugesLatLng;
    })();
  }
  setGaugesInCompare() {
    var _this4 = this;
    return (0,_opt_atlassian_pipelines_agent_build_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_0__["default"])(function* () {
      const qualityPoints = [];
      for (const compare of _this4.uiCompares) {
        for (const qualityPoint of compare.comparePointsHistory) {
          const alreadyAdded = qualityPoints.filter(p => p?.gaugeId === qualityPoint.gaugeId);
          if (alreadyAdded.length === 0) {
            qualityPoints.push(qualityPoint);
          }
        }
      }
      _this4.gaugesInCompare = qualityPoints.map(p => {
        return new raain_ui__WEBPACK_IMPORTED_MODULE_1__.MapLatLng(p.gaugeCartesianValue.lat, p.gaugeCartesianValue.lng, 0, p.gaugeId, p.gaugeLabel + '>' + p.getGaugeValue(), p.getGaugeValue());
      });
      _this4.resetSelectedGauges();
    })();
  }
  selectGauge(gaugeId, compareIndex) {
    var _this5 = this;
    return (0,_opt_atlassian_pipelines_agent_build_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_0__["default"])(function* () {
      if (gaugeId) {
        const xys = _this5.getCurrentQualityPoints(compareIndex).filter(p => p.gaugeId === gaugeId);
        _this5.selectedGauge = xys.length === 1 ? xys[0] : null;
      } else {
        _this5.selectedGauge = null;
      }
      if (!_this5.selectedGauge) {
        _this5.resetSelectedGauges();
        const gaugesFiltered = _this5.gaugesInMap.filter(g => g.id === gaugeId);
        if (gaugesFiltered.length === 1) {
          _this5.selectedGauges = [gaugesFiltered[0]];
        }
        return;
      }
      const selectedGaugeInPoints = _this5.getCurrentQualityPoints(compareIndex).filter(p => p.gaugeId === _this5.selectedGauge.gaugeId);
      let pixelsSolutions = [];
      if (selectedGaugeInPoints.length === 1) {
        const remarks = JSON.parse(selectedGaugeInPoints[0].remark).sort((a, b) => a.criteriaAttemptedToBeMinimum - b.criteriaAttemptedToBeMinimum);
        console.log(remarks);
        pixelsSolutions = remarks.map(remark => remark.solutionForGauge.pixels.map(p => new raain_ui__WEBPACK_IMPORTED_MODULE_1__.MapLatLng(p.y + 0.005, p.x + 0.01, 0, '' + !remark.notPossible, '' + !remark.notPossible, 1)));
        const timeDeltaInMinutes = selectedGaugeInPoints[0].getTimeDeltaInMinutes();
        _this5.selectedGaugeInPointsDetail = '' + selectedGaugeInPoints[0].gaugeLabel + ' > ' + Math.round(selectedGaugeInPoints[0].getGaugeValue() * 100) / 100 + ' / ' + Math.round(selectedGaugeInPoints[0].getRainValue() * 100) / 100 + ' dT=' + timeDeltaInMinutes;
        _this5.selectedGaugeInPoints = selectedGaugeInPoints[0];
      } else {
        _this5.selectedGaugeInPoints = null;
        _this5.selectedGauges = [];
        _this5.selectedPixels = [];
        _this5.pixelsSolutions = [];
        return;
      }
      _this5.selectedGauges = [new raain_ui__WEBPACK_IMPORTED_MODULE_1__.MapLatLng(_this5.selectedGaugeInPoints.gaugeCartesianValue.lat, _this5.selectedGaugeInPoints.gaugeCartesianValue.lng, undefined, _this5.selectedGaugeInPoints.gaugeId, _this5.selectedGaugeInPoints.gaugeLabel + '>' + _this5.selectedGaugeInPoints.gaugeCartesianValue.value, _this5.selectedGaugeInPoints.gaugeCartesianValue.value)];
      _this5.selectGaugeInCompare();
      const pixels = [];
      for (const rainCartesianValue of _this5.selectedGaugeInPoints.rainCartesianValues) {
        pixels.push(new raain_ui__WEBPACK_IMPORTED_MODULE_1__.MapLatLng(rainCartesianValue.lat + 0.005, rainCartesianValue.lng + 0.01));
      }
      _this5.selectedPixels = pixels;
      _this5.pixelsSolutions = pixelsSolutions;
    })();
  }
  // Returns all granular quality points across all dates in the period (excludes cumulative end date)
  getAllGranularComparePoints() {
    const result = [];
    if (!this.buildCompares?.comparesPerDate?.length || !this.compareDates?.length) {
      return result;
    }
    // Find the last date (cumulative end date) to exclude it
    const lastDateTime = Math.max(...this.compareDates.map(d => d.getTime()));
    for (const comparePerDate of this.buildCompares.comparesPerDate) {
      // Skip the last date which contains cumulative values
      if (comparePerDate.date.getTime() >= lastDateTime) {
        continue;
      }
      if (!comparePerDate.compareTimeline?.length) {
        continue;
      }
      // Get first timeline entry (current step) for each date
      const currentCompare = comparePerDate.compareTimeline[0];
      if (!currentCompare?.qualityPoints?.length) {
        continue;
      }
      for (const qp of currentCompare.qualityPoints) {
        result.push({
          date: comparePerDate.date,
          gaugeName: qp.gaugeLabel,
          gaugeValue: qp.getGaugeValue(),
          pixelValue: qp.getRainValue()
        });
      }
    }
    return result.sort((a, b) => a.date.getTime() - b.date.getTime());
  }
  buildComparesTimeline(targetsOrdered, period, withCompareDuplicate) {
    var _this6 = this;
    return (0,_opt_atlassian_pipelines_agent_build_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_0__["default"])(function* () {
      const compareDates = targetsOrdered.map(t => t.date);
      const qualities = compareDates.filter(d => !!d).map(d => _this6.getRainComputationQuality(d)).filter(rcq => !!rcq);
      _this6.compareDates = compareDates?.length > 1 ? compareDates : [period.begin, period.end];
      if (_this6.compareDates[0].getTime() > period.begin.getTime()) {
        _this6.compareDates.unshift(period.begin);
      }
      _this6.buildCompares = raain_model__WEBPACK_IMPORTED_MODULE_2__.SpeedMatrixContainer.BuildCompares(qualities, !withCompareDuplicate);
      return _this6.buildCompares;
    })();
  }
  getComparePerDate(date) {
    const existing = this.buildCompares.comparesPerDate.filter(c => c.date.getTime() === date.getTime());
    if (existing.length === 1) {
      return existing[0];
    }
    return null;
  }
  getCurrentQualityPoints(compareIndex) {
    if (this.uiCompares.length === 0 || compareIndex < 0 || this.compareNames.length < compareIndex) {
      return [];
    }
    return this.uiCompares[compareIndex].comparePointsHistory;
  }
  cleanCompareQuality(details) {
    this.compareVersion = details;
    this.compareNames = [];
    this.uiCompares = [];
    this.compareSpeedMatrix = [];
    this.compareTrustedIndicator = undefined;
    this.currentQualityDoneDate = new Date(-1);
    this.currentQualityLaunchedBy = '';
    this.currentQualityTimeSpentInMs = -1;
  }
  fetchRainComputationQualities(_x4) {
    var _this7 = this;
    return (0,_opt_atlassian_pipelines_agent_build_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_0__["default"])(function* (targetsOrdered, provider = 'Raain', timeStepInMinutes = 5, timeStepMode = 'eq') {
      for (const target of targetsOrdered) {
        if (!_this7.rainComputationQualitiesPerDate[target.date.toISOString()]) {
          try {
            let rainComputationQuality;
            if (target.rainComputationCumulativeId) {
              rainComputationQuality = yield _this7.profileService.getRainCumulativeCumulativesCompare(_this7.rainNode, target.rainComputationCumulativeId, provider, timeStepInMinutes, timeStepMode);
            }
            if (rainComputationQuality) {
              let isConsistent = true;
              const matrices = rainComputationQuality.qualitySpeedMatrixContainer.getMatrices();
              for (const matrix of matrices) {
                if (!matrix.isConsistent()) {
                  isConsistent = false;
                }
              }
              if (!isConsistent) {
                console.warn(`One of rainComputationQuality matrices is not consistent for ${target.date.toISOString()}`);
              }
              _this7.rainComputationQualitiesPerDate[target.date.toISOString()] = rainComputationQuality;
            }
          } catch (e) {
            console.warn(e);
          }
        }
      }
    }).apply(this, arguments);
  }
  getRainComputationQuality(date) {
    return this.rainComputationQualitiesPerDate[date.toISOString()];
  }
  selectGaugeInCompare() {
    const globalComparePoints = JSON.parse(JSON.stringify(this.globalComparePoints));
    for (const p of globalComparePoints) {
      if (p.id === this.selectedGaugeInPoints?.gaugeId) {
        p.r = 10;
      } else {
        p.r = 2;
      }
    }
    this.globalComparePoints = globalComparePoints;
    for (const compare of this.uiCompares) {
      const comparePoints = JSON.parse(JSON.stringify(compare.comparePoints));
      comparePoints.forEach(p => {
        if (p.id === this.selectedGaugeInPoints?.gaugeId) {
          p.r = 10;
        } else {
          p.r = 3;
        }
      });
      compare.comparePoints = comparePoints;
    }
  }
  resetSelectedGauges() {
    // console.log('resetSelectedGauges reset');
    this.selectedGauge = null;
    this.selectedGaugeInPoints = null;
    this.selectedGauges = [];
    this.selectedPixels = [];
    this.pixelsSolutions = [];
    this.selectGaugeInCompare();
  }
}

/***/ }),

/***/ 4881:
/*!*************************************************!*\
  !*** ./src/core/shared/tools/DateRangeTools.ts ***!
  \*************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "mapDateRangeToString": () => (/* binding */ mapDateRangeToString)
/* harmony export */ });
/* harmony import */ var raain_ui__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! raain-ui */ 88666);
/* harmony import */ var raain_ui__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(raain_ui__WEBPACK_IMPORTED_MODULE_0__);

function mapDateRangeToString(range) {
  switch (range) {
    case raain_ui__WEBPACK_IMPORTED_MODULE_0__.DateRange.HOUR:
      return 'hour';
    case raain_ui__WEBPACK_IMPORTED_MODULE_0__.DateRange.DAY:
      return 'day';
    case raain_ui__WEBPACK_IMPORTED_MODULE_0__.DateRange.MONTH:
      return 'month';
    case raain_ui__WEBPACK_IMPORTED_MODULE_0__.DateRange.YEAR:
      return 'year';
    default:
      return 'year';
  }
}

/***/ }),

/***/ 39222:
/*!*******************************************!*\
  !*** ./src/core/shared/tools/FrameSet.ts ***!
  \*******************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "FrameSet": () => (/* binding */ FrameSet)
/* harmony export */ });
class FrameSet {
  constructor(date, radarMeasureIds = [], rainComputationId = null, rainComputationVersion = null, rainComputationQualities = [], rainComputationCumulativeId = null) {
    this.date = date;
    this.radarMeasureIds = radarMeasureIds;
    this.rainComputationId = rainComputationId;
    this.rainComputationVersion = rainComputationVersion;
    this.rainComputationQualities = rainComputationQualities;
    this.rainComputationCumulativeId = rainComputationCumulativeId;
  }
}

/***/ }),

/***/ 22404:
/*!**************************************************!*\
  !*** ./src/core/shared/tools/GaugeNodeFilter.ts ***!
  \**************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "GaugeNodeFilter": () => (/* binding */ GaugeNodeFilter)
/* harmony export */ });
/* harmony import */ var raain_model__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! raain-model */ 70034);
/* harmony import */ var raain_model__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(raain_model__WEBPACK_IMPORTED_MODULE_0__);

class GaugeNodeFilter extends raain_model__WEBPACK_IMPORTED_MODULE_0__.GaugeNode {
  constructor(json) {
    super(json);
    this.isIn = true;
    this.distance = 0;
  }
  approxDistanceFrom(center) {
    this.distance = Math.round((Math.pow(this.latitude - center.lat, 2) + Math.pow(this.longitude - center.lng, 2)) * 100 * 100) / 100;
    return this.distance;
  }
  add() {
    this.isIn = true;
  }
  remove() {
    this.isIn = false;
  }
}

/***/ }),

/***/ 19028:
/*!*************************************************!*\
  !*** ./src/core/shared/tools/RefreshManager.ts ***!
  \*************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "RefreshManager": () => (/* binding */ RefreshManager)
/* harmony export */ });
/* harmony import */ var _opt_atlassian_pipelines_agent_build_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/esm/asyncToGenerator.js */ 71670);
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! rxjs */ 80228);
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! rxjs */ 78947);
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! rxjs */ 51353);
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! rxjs */ 59346);
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! rxjs */ 68951);
/* harmony import */ var raain_model__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! raain-model */ 70034);
/* harmony import */ var raain_model__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(raain_model__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var raain_ui__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! raain-ui */ 88666);
/* harmony import */ var raain_ui__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(raain_ui__WEBPACK_IMPORTED_MODULE_2__);




const sleep = ms => new Promise(resolve => setTimeout(resolve, ms));
class RefreshManager {
  constructor(radarService, profileService, compareManager) {
    this.radarService = radarService;
    this.profileService = profileService;
    this.compareManager = compareManager;
    this.provider = 'Raain';
    this.timeStepInMinutes = 10;
    this.timeStepMode = 'eq';
    this.lastError = '';
    this.cumulative = false;
    this.expectedTimelineCount = 0;
    this.presentTimelineCount = 0;
    this._period = {
      begin: new Date(),
      end: new Date()
    };
    this.closeRefreshTimer = new rxjs__WEBPACK_IMPORTED_MODULE_3__.Subject();
    this.cartesianTools = new raain_model__WEBPACK_IMPORTED_MODULE_1__.CartesianTools();
    this.cleanAll();
  }
  get rainNode() {
    return this._rainNode;
  }
  set rainNode(rainNode) {
    this._rainNode = rainNode;
    this.cleanAll();
  }
  get period() {
    return this._period;
  }
  set period(period) {
    this._period.begin = new Date(period.begin);
    this._period.end = new Date(period.end);
    this.refreshCounts().then(ignored => {});
  }
  setMethods(onRefreshInProgress, onRefreshDone, onFetchDone) {
    this.onRefreshInProgress = onRefreshInProgress;
    this.onRefreshDone = onRefreshDone;
    this.onFetchDone = onFetchDone;
  }
  cleanAll() {
    this.lastError = '';
    this.countsPeriod = {
      percentImages: [],
      queueRunning: 0,
      progress: 0
    };
    this.timeframesFromRadars = [];
    this.timeframesFromRadarsExtended = [];
    this.timeframeDates = [];
    this.removeDuplicate = true;
    this.closeRefreshTimer?.next(null);
  }
  fetch(_x, _x2) {
    var _this = this;
    return (0,_opt_atlassian_pipelines_agent_build_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_0__["default"])(function* (dateShown, withGaugesMeasures, cumulativeHours = 0) {
      // set the target
      const currents = _this.timeframesFromRadarsExtended.filter(t => t.date.getTime() === dateShown.getTime());
      if (currents.length !== 1) {
        return;
      }
      // build current Frameset
      const current = currents[0];
      const target = {
        ...current,
        withGauge: withGaugesMeasures,
        cumulativeHours: cumulativeHours
      };
      const timeframeContainers = yield _this.refreshMapTimeframeContainers(target);
      yield _this.onFetchDone(timeframeContainers);
      yield _this.refreshCompareQuality(current);
      _this.timelineSelectedFrameSet = current;
    }).apply(this, arguments);
  }
  getTimelineFrameSet() {
    return this.timeframesFromRadars;
  }
  getExpectedTimelineCount() {
    return this.expectedTimelineCount;
  }
  getPresentTimelineCount() {
    return this.presentTimelineCount;
  }
  getTimelineSelectedFrameSet() {
    return this.timelineSelectedFrameSet;
  }
  refresh(launchQualityAfter, dataInternal) {
    var _this2 = this;
    return (0,_opt_atlassian_pipelines_agent_build_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_0__["default"])(function* () {
      _this2.lastError = '';
      _this2.checkPeriod();
      _this2.dataInternal = dataInternal;
      const asyncDone = error => {
        if (error) {
          console.error('Error in refresh', error);
        }
        _this2.closeRefreshTimer.next(null);
        _this2.onRefreshDone(_this2.timeframeDates).then(_ignored => {});
      };
      const asyncRefresh = /*#__PURE__*/function () {
        var _ref = (0,_opt_atlassian_pipelines_agent_build_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_0__["default"])(function* () {
          _this2.onRefreshInProgress(yield _this2.refreshCounts(), _this2.timeframeDates).then(_ignored => {});
          const done = yield _this2.refreshPeriodInsidePolling();
          if (done) {
            asyncDone();
          }
        });
        return function asyncRefresh() {
          return _ref.apply(this, arguments);
        };
      }();
      (0,rxjs__WEBPACK_IMPORTED_MODULE_4__.timer)(1000, 10000) // Wait 1s, then every 10s
      .pipe((0,rxjs__WEBPACK_IMPORTED_MODULE_5__.mergeMap)(() => (0,rxjs__WEBPACK_IMPORTED_MODULE_6__.from)(asyncRefresh())), (0,rxjs__WEBPACK_IMPORTED_MODULE_7__.takeUntil)(_this2.closeRefreshTimer)).subscribe({
        error: error => asyncDone(JSON.stringify(error))
      });
    })();
  }
  setRemoveDuplicate(b) {
    this.removeDuplicate = b;
  }
  setReportPeriod(date) {
    var _this3 = this;
    return (0,_opt_atlassian_pipelines_agent_build_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_0__["default"])(function* () {
      let values = [];
      for (const frameSet of _this3.timeframesFromRadars) {
        if (frameSet.date.getTime() !== date.getTime()) {
          continue;
        }
        values = values.concat(yield _this3.getValues(frameSet));
      }
      _this3.sumFn = cartesianMapValues => {
        return cartesianMapValues.reduce((p, v) => p + v.value, 0);
      };
      _this3.sumValues = values;
    })();
  }
  checkPeriod() {
    if (this.period.begin.getTime() === this.period.end.getTime()) {
      const message = 'need a period';
      this.lastError += message;
      throw new Error(message);
    }
  }
  refreshCounts() {
    var _this4 = this;
    return (0,_opt_atlassian_pipelines_agent_build_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_0__["default"])(function* () {
      if (!_this4.rainNode) {
        return _this4.countsPeriod;
      }
      const counts = yield _this4.profileService.getCounts(_this4.rainNode.id, {
        range: 'day',
        periodBegin: _this4._period.begin
      });
      let progress = 0;
      // Verify progress only for SimpleZone
      if (_this4.rainNode.getLinks(raain_model__WEBPACK_IMPORTED_MODULE_1__.RadarNode.TYPE).length <= 1) {
        progress = yield _this4.profileService.getRainProgress(_this4.rainNode.id);
      }
      _this4.countsPeriod = {
        ...counts,
        progress
      };
      return _this4.countsPeriod;
    })();
  }
  getRainComputationQualityTarget(frameset) {
    if (frameset.rainComputationQualities.length <= 0) {
      return undefined;
    }
    return frameset.rainComputationQualities[0].id;
  }
  refreshPeriodInsidePolling() {
    var _this5 = this;
    return (0,_opt_atlassian_pipelines_agent_build_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_0__["default"])(function* () {
      try {
        const done = yield _this5.refreshCheckIfDone();
        // behind refresh
        yield _this5.refreshTimeframesFromRadars(done);
        yield _this5.refreshGlobalCompareReport(done);
        return done;
      } catch (e) {
        console.warn(e);
        _this5.lastError += e.message;
      }
      return false;
    })();
  }
  refreshCheckIfDone() {
    var _this6 = this;
    return (0,_opt_atlassian_pipelines_agent_build_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_0__["default"])(function* () {
      yield sleep(2000);
      return _this6.countsPeriod.progress === 0;
    })();
  }
  refreshTimeframesFromRadars(done) {
    var _this7 = this;
    return (0,_opt_atlassian_pipelines_agent_build_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_0__["default"])(function* () {
      if (!done || !_this7.rainNode) {
        return [];
      }
      try {
        const beginExtended = new Date(_this7.period.begin);
        const endExtended = new Date(_this7.period.end);
        if (!_this7.cumulative) {
          // Only extend period for granular mode (to get neighboring frames)
          // For cumulative mode, use exact period
          beginExtended.setMinutes(beginExtended.getMinutes() - 7);
          endExtended.setMinutes(endExtended.getMinutes() + 7);
        }
        const windowInMinutes = _this7.cumulative ? Math.round((_this7.period.end.getTime() - _this7.period.begin.getTime()) / 60000) : _this7.timeStepInMinutes;
        _this7.rainNode = yield _this7.profileService.getRainTimeframe(_this7.rainNode.id, beginExtended, endExtended, _this7.dataInternal, _this7.provider, _this7.timeStepInMinutes, windowInMinutes);
        _this7.timeframesFromRadarsExtended = yield _this7.radarService.getTimeline(_this7.rainNode);
        _this7.timeframesFromRadars = _this7.timeframesFromRadarsExtended.filter(frameSet => _this7.period.begin.getTime() < frameSet.date.getTime() && frameSet.date.getTime() <= _this7.period.end.getTime()).sort((a, b) => a.date.getTime() - b.date.getTime());
        _this7.timeframeDates = _this7.timeframesFromRadars.map(frameSet => frameSet.date);
        // Compute all expected dates
        // For cumulative mode: only 1 expected date (the period end)
        // For granular mode: all dates from period.begin to period.end with timeStepInMinutes
        const allExpectedDates = [];
        if (_this7.cumulative) {
          // In cumulative mode, we expect only ONE timeframe (the cumulative)
          allExpectedDates.push(new Date(_this7.period.end));
        } else {
          // Start from begin + step: cumulative dates represent window ends,
          // so the first expected date is begin + timeStep, not begin itself
          const beginTime = new Date(_this7.period.begin).getTime();
          const currentDate = new Date(beginTime + _this7.timeStepInMinutes * 60000);
          while (currentDate.getTime() <= _this7.period.end.getTime()) {
            allExpectedDates.push(new Date(currentDate));
            currentDate.setMinutes(currentDate.getMinutes() + _this7.timeStepInMinutes);
          }
        }
        _this7.expectedTimelineCount = allExpectedDates.length;
        // Check if all expected dates are present in timeframeDates
        const timeframeDateTimes = new Set(_this7.timeframeDates.map(d => d.getTime()));
        const missingDates = allExpectedDates.filter(expectedDate => !timeframeDateTimes.has(expectedDate.getTime()));
        _this7.presentTimelineCount = allExpectedDates.length - missingDates.length;
        if (missingDates.length > 0) {
          const message = `Missing ${missingDates.length} timeframe(s) out of ${allExpectedDates.length} expected: ` + missingDates.map(d => d.toISOString()).join(', ');
          console.warn(message);
          _this7.lastError += message;
        }
        return _this7.timeframesFromRadars;
      } catch (e) {
        console.error('refreshTimeframesFromRadars', e);
      }
      return [];
    })();
  }
  refreshGlobalCompareReport(done) {
    var _this8 = this;
    return (0,_opt_atlassian_pipelines_agent_build_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_0__["default"])(function* () {
      if (!done) {
        return;
      }
      try {
        const targets = [];
        for (const frameSet of _this8.timeframesFromRadars) {
          const target = JSON.parse(JSON.stringify(frameSet));
          target.date = new Date(target.date);
          targets.push(target);
        }
        yield _this8.compareManager.refreshGlobalCompareQuality(targets, _this8.period, !_this8.removeDuplicate, _this8.provider, _this8.timeStepInMinutes, _this8.timeStepMode);
      } catch (e) {
        console.error('refreshGlobalCompareReport', e);
      }
    })();
  }
  refreshMapTimeframeContainers(target) {
    var _this9 = this;
    return (0,_opt_atlassian_pipelines_agent_build_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_0__["default"])(function* () {
      if (!target?.rainComputationCumulativeId) {
        const message = `Pb with refreshMapTimeframeContainers insights ${target?.date.toISOString()}`;
        console.warn(message);
        _this9.lastError += message;
        return null;
      }
      const rainNode = _this9.rainNode;
      const containers = [];
      const newCreatedTimeframeContainers = new raain_ui__WEBPACK_IMPORTED_MODULE_2__.TimeframeContainers(containers);
      try {
        let rainNodeCartesianMap;
        if (target.cumulativeHours && target.rainComputationCumulativeId) {
          // For N-hour cumulative, use the last frame's cumulative (end of period)
          // The cumulative is pre-computed by raain-ground with windowInMinutes=60
          const lastFrame = _this9.timeframesFromRadarsExtended[_this9.timeframesFromRadarsExtended.length - 1];
          const cumulativeId = lastFrame?.rainComputationCumulativeId || target.rainComputationCumulativeId;
          // Use direct cartesian-map endpoint - cumulative data fetched from S3
          rainNodeCartesianMap = yield _this9.profileService.getRainComputationCumulativeCartesianMapById(rainNode.id, cumulativeId);
        } else {
          rainNodeCartesianMap = yield _this9.profileService.getRainComputationCumulativeCartesianMapById(rainNode.id, target.rainComputationCumulativeId);
        }
        if (rainNodeCartesianMap) {
          newCreatedTimeframeContainers.addFromRainComputationMap(rainNodeCartesianMap, false);
          _this9.rainComputationMapVersion = rainNodeCartesianMap.version;
          _this9.rainComputationMapDate = new Date(rainNodeCartesianMap.date);
          _this9.rainComputationMapDoneDate = rainNodeCartesianMap.isDoneDate;
          _this9.rainComputationMapLaunchedBy = rainNodeCartesianMap.launchedBy;
          _this9.rainComputationMapTimeSpentInMs = rainNodeCartesianMap.timeSpentInMs;
          _this9.rainComputationMapOriginalMin = rainNodeCartesianMap.originalDBZMin;
          _this9.rainComputationMapOriginalMax = rainNodeCartesianMap.originalDBZMax;
        }
      } catch (e) {
        const message = `Pb with cumulatives for id: ${target.rainComputationCumulativeId} ${e.message}`;
        console.warn(message);
        _this9.lastError += message;
      }
      return newCreatedTimeframeContainers;
    })();
  }
  refreshCompareQuality(frameSet) {
    var _this0 = this;
    return (0,_opt_atlassian_pipelines_agent_build_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_0__["default"])(function* () {
      yield _this0.compareManager.refreshCompareQuality(frameSet, true);
      yield _this0.compareManager.setGaugesInCompare();
    })();
  }
  getValues(target) {
    var _this1 = this;
    return (0,_opt_atlassian_pipelines_agent_build_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_0__["default"])(function* () {
      if (!target?.rainComputationCumulativeId) {
        const message = `Pb with target insights ${target?.date.toISOString()}`;
        console.warn(message);
        _this1.lastError += message;
        return [];
      }
      let values = [];
      const rainComputationMap = yield _this1.profileService.getRainComputationCumulativeCartesianMapById(_this1.rainNode.id, target.rainComputationCumulativeId);
      try {
        if (rainComputationMap) {
          rainComputationMap.getMapData().forEach(m => {
            if (m.values) {
              m.values.forEach(v => {
                const cartesianMeasureValue = raain_model__WEBPACK_IMPORTED_MODULE_1__.CartesianMeasureValue.From(v);
                values = values.concat(raain_ui__WEBPACK_IMPORTED_MODULE_2__.CartesianMapValue.From(cartesianMeasureValue.getCartesianValues(), _this1.cartesianTools));
              });
            }
          });
        }
      } catch (e) {
        const message = `Pb with cumulatives for id: ${target.rainComputationCumulativeId} ${e.message}`;
        console.warn(message);
        _this1.lastError += message;
      }
      return values;
    })();
  }
}

/***/ }),

/***/ 1987:
/*!****************************************!*\
  !*** ./src/core/shared/tools/index.ts ***!
  \****************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "CompareManager": () => (/* reexport safe */ _CompareManager__WEBPACK_IMPORTED_MODULE_0__.CompareManager),
/* harmony export */   "FrameSet": () => (/* reexport safe */ _FrameSet__WEBPACK_IMPORTED_MODULE_1__.FrameSet),
/* harmony export */   "GaugeNodeFilter": () => (/* reexport safe */ _GaugeNodeFilter__WEBPACK_IMPORTED_MODULE_2__.GaugeNodeFilter),
/* harmony export */   "RefreshManager": () => (/* reexport safe */ _RefreshManager__WEBPACK_IMPORTED_MODULE_3__.RefreshManager),
/* harmony export */   "mapDateRangeToString": () => (/* reexport safe */ _DateRangeTools__WEBPACK_IMPORTED_MODULE_4__.mapDateRangeToString)
/* harmony export */ });
/* harmony import */ var _CompareManager__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./CompareManager */ 55997);
/* harmony import */ var _FrameSet__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./FrameSet */ 39222);
/* harmony import */ var _GaugeNodeFilter__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./GaugeNodeFilter */ 22404);
/* harmony import */ var _RefreshManager__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./RefreshManager */ 19028);
/* harmony import */ var _DateRangeTools__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./DateRangeTools */ 4881);






/***/ }),

/***/ 8217:
/*!***********************************!*\
  !*** ./src/core/shared/xytype.ts ***!
  \***********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "XYType": () => (/* binding */ XYType)
/* harmony export */ });
class XYType {
  constructor(x, y, r, name, id) {
    this.x = x;
    this.y = y;
    this.r = r;
    this.name = name;
    this.id = id;
  }
}

/***/ }),

/***/ 92340:
/*!*****************************************!*\
  !*** ./src/environments/environment.ts ***!
  \*****************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "environment": () => (/* binding */ environment)
/* harmony export */ });
/* harmony import */ var _bpInfo__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../bpInfo */ 68324);

const somethingToAdd = '_lab';
const environment = {
  production: true,
  description: somethingToAdd,
  fidjKey: 'fidj-c7da8742d81613d8',
  // TODO  serverUrl: 'http://localhost:3004/v3',
  serverUrl: 'https://api.lab.radartorain.com/v3',
  version: _bpInfo__WEBPACK_IMPORTED_MODULE_0__.bpInfo.version + somethingToAdd
};

/***/ }),

/***/ 14431:
/*!*********************!*\
  !*** ./src/main.ts ***!
  \*********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "AreInProgressPipe": () => (/* reexport safe */ _core_shared__WEBPACK_IMPORTED_MODULE_4__.AreInProgressPipe),
/* harmony export */   "AreReady": () => (/* reexport safe */ _core_shared__WEBPACK_IMPORTED_MODULE_4__.AreReady),
/* harmony export */   "AreStopped": () => (/* reexport safe */ _core_shared__WEBPACK_IMPORTED_MODULE_4__.AreStopped),
/* harmony export */   "CONSTANTS": () => (/* reexport safe */ _core_shared__WEBPACK_IMPORTED_MODULE_4__.CONSTANTS),
/* harmony export */   "Cache": () => (/* reexport safe */ _core_shared__WEBPACK_IMPORTED_MODULE_4__.Cache),
/* harmony export */   "CompareManager": () => (/* reexport safe */ _core_shared__WEBPACK_IMPORTED_MODULE_4__.CompareManager),
/* harmony export */   "CumulativeSelectorComponent": () => (/* reexport safe */ _core_shared__WEBPACK_IMPORTED_MODULE_4__.CumulativeSelectorComponent),
/* harmony export */   "FidjStorage": () => (/* reexport safe */ _core_shared__WEBPACK_IMPORTED_MODULE_4__.FidjStorage),
/* harmony export */   "FidjStorageNode": () => (/* reexport safe */ _core_shared__WEBPACK_IMPORTED_MODULE_4__.FidjStorageNode),
/* harmony export */   "FrameSet": () => (/* reexport safe */ _core_shared__WEBPACK_IMPORTED_MODULE_4__.FrameSet),
/* harmony export */   "GaugeNodeFilter": () => (/* reexport safe */ _core_shared__WEBPACK_IMPORTED_MODULE_4__.GaugeNodeFilter),
/* harmony export */   "HasGoodQuality": () => (/* reexport safe */ _core_shared__WEBPACK_IMPORTED_MODULE_4__.HasGoodQuality),
/* harmony export */   "HasNotGoodQuality": () => (/* reexport safe */ _core_shared__WEBPACK_IMPORTED_MODULE_4__.HasNotGoodQuality),
/* harmony export */   "HaveNotBeenRed": () => (/* reexport safe */ _core_shared__WEBPACK_IMPORTED_MODULE_4__.HaveNotBeenRed),
/* harmony export */   "IsNotReady": () => (/* reexport safe */ _core_shared__WEBPACK_IMPORTED_MODULE_4__.IsNotReady),
/* harmony export */   "IsReady": () => (/* reexport safe */ _core_shared__WEBPACK_IMPORTED_MODULE_4__.IsReady),
/* harmony export */   "PipesModule": () => (/* reexport safe */ _core_shared__WEBPACK_IMPORTED_MODULE_4__.PipesModule),
/* harmony export */   "ProfileIconDirective": () => (/* reexport safe */ _core_shared__WEBPACK_IMPORTED_MODULE_4__.ProfileIconDirective),
/* harmony export */   "ProfileService": () => (/* reexport safe */ _core_shared__WEBPACK_IMPORTED_MODULE_4__.ProfileService),
/* harmony export */   "ProgressBuffer": () => (/* reexport safe */ _core_shared__WEBPACK_IMPORTED_MODULE_4__.ProgressBuffer),
/* harmony export */   "ProgressValue": () => (/* reexport safe */ _core_shared__WEBPACK_IMPORTED_MODULE_4__.ProgressValue),
/* harmony export */   "RaainCompareComponent": () => (/* reexport safe */ _core_shared__WEBPACK_IMPORTED_MODULE_4__.RaainCompareComponent),
/* harmony export */   "RaainCompareStackComponent": () => (/* reexport safe */ _core_shared__WEBPACK_IMPORTED_MODULE_4__.RaainCompareStackComponent),
/* harmony export */   "RaainConfigurationComponent": () => (/* reexport safe */ _core_shared__WEBPACK_IMPORTED_MODULE_4__.RaainConfigurationComponent),
/* harmony export */   "RaainDateDynamicComponent": () => (/* reexport safe */ _core_shared__WEBPACK_IMPORTED_MODULE_4__.RaainDateDynamicComponent),
/* harmony export */   "RaainDateFocusComponent": () => (/* reexport safe */ _core_shared__WEBPACK_IMPORTED_MODULE_4__.RaainDateFocusComponent),
/* harmony export */   "RaainDetailsComponent": () => (/* reexport safe */ _core_shared__WEBPACK_IMPORTED_MODULE_4__.RaainDetailsComponent),
/* harmony export */   "RaainGlobeComponent": () => (/* reexport safe */ _core_shared__WEBPACK_IMPORTED_MODULE_4__.RaainGlobeComponent),
/* harmony export */   "RaainMapComponent": () => (/* reexport safe */ _core_shared__WEBPACK_IMPORTED_MODULE_4__.RaainMapComponent),
/* harmony export */   "RaainSpeedComponent": () => (/* reexport safe */ _core_shared__WEBPACK_IMPORTED_MODULE_4__.RaainSpeedComponent),
/* harmony export */   "RadarService": () => (/* reexport safe */ _core_shared__WEBPACK_IMPORTED_MODULE_4__.RadarService),
/* harmony export */   "RefreshManager": () => (/* reexport safe */ _core_shared__WEBPACK_IMPORTED_MODULE_4__.RefreshManager),
/* harmony export */   "SharedModule": () => (/* reexport safe */ _core_shared__WEBPACK_IMPORTED_MODULE_4__.SharedModule),
/* harmony export */   "Storage": () => (/* reexport safe */ _core_shared__WEBPACK_IMPORTED_MODULE_4__.Storage),
/* harmony export */   "WaitForValidation": () => (/* reexport safe */ _core_shared__WEBPACK_IMPORTED_MODULE_4__.WaitForValidation),
/* harmony export */   "XYType": () => (/* reexport safe */ _core_shared__WEBPACK_IMPORTED_MODULE_4__.XYType),
/* harmony export */   "mapDateRangeToString": () => (/* reexport safe */ _core_shared__WEBPACK_IMPORTED_MODULE_4__.mapDateRangeToString)
/* harmony export */ });
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/platform-browser */ 34497);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ 22560);
/* harmony import */ var _core_app_module__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./core/app.module */ 34165);
/* harmony import */ var _environments_environment__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./environments/environment */ 92340);
/* harmony import */ var _core_shared__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./core/shared */ 8987);




if (_environments_environment__WEBPACK_IMPORTED_MODULE_1__.environment.production) {
  (0,_angular_core__WEBPACK_IMPORTED_MODULE_2__.enableProdMode)();
}
_angular_platform_browser__WEBPACK_IMPORTED_MODULE_3__.platformBrowser().bootstrapModule(_core_app_module__WEBPACK_IMPORTED_MODULE_0__.AppModule).catch(err => console.error(err));


/***/ }),

/***/ 50863:
/*!******************************************************************************************************************************************!*\
  !*** ./node_modules/@ionic/core/dist/esm/ lazy ^\.\/.*\.entry\.js$ include: \.entry\.js$ exclude: \.system\.entry\.js$ namespace object ***!
  \******************************************************************************************************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

var map = {
	"./ion-accordion_2.entry.js": [
		70079,
		8592,
		79
	],
	"./ion-action-sheet.entry.js": [
		25593,
		8592,
		5593
	],
	"./ion-alert.entry.js": [
		13225,
		8592,
		3225
	],
	"./ion-app_8.entry.js": [
		4812,
		8592,
		4812
	],
	"./ion-avatar_3.entry.js": [
		86655,
		6655
	],
	"./ion-back-button.entry.js": [
		44856,
		8592,
		4856
	],
	"./ion-backdrop.entry.js": [
		13059,
		3059
	],
	"./ion-breadcrumb_2.entry.js": [
		58648,
		8592,
		8648
	],
	"./ion-button_2.entry.js": [
		98308,
		8308
	],
	"./ion-card_5.entry.js": [
		44690,
		4690
	],
	"./ion-checkbox.entry.js": [
		64090,
		4090
	],
	"./ion-chip.entry.js": [
		36214,
		6214
	],
	"./ion-col_3.entry.js": [
		69447,
		9447
	],
	"./ion-datetime-button.entry.js": [
		17950,
		9022,
		7950
	],
	"./ion-datetime_3.entry.js": [
		79689,
		9022,
		8592,
		9689
	],
	"./ion-fab_3.entry.js": [
		18840,
		8592,
		8840
	],
	"./ion-img.entry.js": [
		40749,
		749
	],
	"./ion-infinite-scroll_2.entry.js": [
		69667,
		8592,
		9667
	],
	"./ion-input.entry.js": [
		83288,
		8592,
		3288
	],
	"./ion-item-option_3.entry.js": [
		35473,
		8592,
		5473
	],
	"./ion-item_8.entry.js": [
		53634,
		8592,
		3634
	],
	"./ion-loading.entry.js": [
		22855,
		2855
	],
	"./ion-menu_3.entry.js": [
		495,
		8592,
		495
	],
	"./ion-modal.entry.js": [
		58737,
		8592,
		8737
	],
	"./ion-nav_2.entry.js": [
		99632,
		8592,
		9632
	],
	"./ion-picker-column-internal.entry.js": [
		54446,
		8592,
		4446
	],
	"./ion-picker-internal.entry.js": [
		32275,
		2275
	],
	"./ion-popover.entry.js": [
		48050,
		8592,
		8050
	],
	"./ion-progress-bar.entry.js": [
		18994,
		8994
	],
	"./ion-radio_2.entry.js": [
		23592,
		3592
	],
	"./ion-range.entry.js": [
		35454,
		8592,
		5454
	],
	"./ion-refresher_2.entry.js": [
		290,
		8592,
		290
	],
	"./ion-reorder_2.entry.js": [
		92666,
		8592,
		2666
	],
	"./ion-ripple-effect.entry.js": [
		64816,
		4816
	],
	"./ion-route_4.entry.js": [
		45534,
		5534
	],
	"./ion-searchbar.entry.js": [
		94902,
		8592,
		4902
	],
	"./ion-segment_2.entry.js": [
		91938,
		8592,
		1938
	],
	"./ion-select_3.entry.js": [
		78179,
		8179
	],
	"./ion-slide_2.entry.js": [
		90668,
		668
	],
	"./ion-spinner.entry.js": [
		61624,
		8592,
		1624
	],
	"./ion-split-pane.entry.js": [
		19989,
		9989
	],
	"./ion-tab-bar_2.entry.js": [
		28902,
		8592,
		8902
	],
	"./ion-tab_2.entry.js": [
		70199,
		8592,
		199
	],
	"./ion-text.entry.js": [
		48395,
		8395
	],
	"./ion-textarea.entry.js": [
		96357,
		6357
	],
	"./ion-toast.entry.js": [
		38268,
		8268
	],
	"./ion-toggle.entry.js": [
		15269,
		8592,
		5269
	],
	"./ion-virtual-scroll.entry.js": [
		32875,
		2875
	]
};
function webpackAsyncContext(req) {
	if(!__webpack_require__.o(map, req)) {
		return Promise.resolve().then(() => {
			var e = new Error("Cannot find module '" + req + "'");
			e.code = 'MODULE_NOT_FOUND';
			throw e;
		});
	}

	var ids = map[req], id = ids[0];
	return Promise.all(ids.slice(1).map(__webpack_require__.e)).then(() => {
		return __webpack_require__(id);
	});
}
webpackAsyncContext.keys = () => (Object.keys(map));
webpackAsyncContext.id = 50863;
module.exports = webpackAsyncContext;

/***/ }),

/***/ 24654:
/*!********************************!*\
  !*** ./util.inspect (ignored) ***!
  \********************************/
/***/ (() => {

/* (ignored) */

/***/ })

},
/******/ __webpack_require__ => { // webpackRuntimeModules
/******/ var __webpack_exec__ = (moduleId) => (__webpack_require__(__webpack_require__.s = moduleId))
/******/ __webpack_require__.O(0, [4736], () => (__webpack_exec__(14431)));
/******/ var __webpack_exports__ = __webpack_require__.O();
/******/ }
]);
//# sourceMappingURL=main.6935a5191022ddcd.js.map