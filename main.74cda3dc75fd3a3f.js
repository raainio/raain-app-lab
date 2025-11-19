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
  version: 'v1.6.15'
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
/* harmony export */   "AreInProgressPipe": () => (/* reexport safe */ _shared_pipe__WEBPACK_IMPORTED_MODULE_15__.AreInProgressPipe),
/* harmony export */   "AreReady": () => (/* reexport safe */ _shared_pipe__WEBPACK_IMPORTED_MODULE_15__.AreReady),
/* harmony export */   "AreStopped": () => (/* reexport safe */ _shared_pipe__WEBPACK_IMPORTED_MODULE_15__.AreStopped),
/* harmony export */   "CONSTANTS": () => (/* reexport safe */ _shared_const__WEBPACK_IMPORTED_MODULE_14__.CONSTANTS),
/* harmony export */   "Cache": () => (/* reexport safe */ _cache_service__WEBPACK_IMPORTED_MODULE_10__.Cache),
/* harmony export */   "CompareManager": () => (/* reexport safe */ _tools__WEBPACK_IMPORTED_MODULE_9__.CompareManager),
/* harmony export */   "FidjStorage": () => (/* reexport safe */ _fidj_storage_model__WEBPACK_IMPORTED_MODULE_11__.FidjStorage),
/* harmony export */   "FidjStorageNode": () => (/* reexport safe */ _fidj_storage_model__WEBPACK_IMPORTED_MODULE_11__.FidjStorageNode),
/* harmony export */   "FrameSet": () => (/* reexport safe */ _tools__WEBPACK_IMPORTED_MODULE_9__.FrameSet),
/* harmony export */   "GaugeNodeFilter": () => (/* reexport safe */ _tools__WEBPACK_IMPORTED_MODULE_9__.GaugeNodeFilter),
/* harmony export */   "HasGoodQuality": () => (/* reexport safe */ _shared_pipe__WEBPACK_IMPORTED_MODULE_15__.HasGoodQuality),
/* harmony export */   "HasNotGoodQuality": () => (/* reexport safe */ _shared_pipe__WEBPACK_IMPORTED_MODULE_15__.HasNotGoodQuality),
/* harmony export */   "HaveNotBeenRed": () => (/* reexport safe */ _shared_pipe__WEBPACK_IMPORTED_MODULE_15__.HaveNotBeenRed),
/* harmony export */   "IsNotReady": () => (/* reexport safe */ _shared_pipe__WEBPACK_IMPORTED_MODULE_15__.IsNotReady),
/* harmony export */   "IsReady": () => (/* reexport safe */ _shared_pipe__WEBPACK_IMPORTED_MODULE_15__.IsReady),
/* harmony export */   "PipesModule": () => (/* reexport safe */ _pipes_module__WEBPACK_IMPORTED_MODULE_20__.PipesModule),
/* harmony export */   "ProfileIconDirective": () => (/* reexport safe */ _profile_icon_directive__WEBPACK_IMPORTED_MODULE_19__.ProfileIconDirective),
/* harmony export */   "ProfileService": () => (/* reexport safe */ _profile_service__WEBPACK_IMPORTED_MODULE_12__.ProfileService),
/* harmony export */   "ProgressBuffer": () => (/* reexport safe */ _shared_pipe__WEBPACK_IMPORTED_MODULE_15__.ProgressBuffer),
/* harmony export */   "ProgressValue": () => (/* reexport safe */ _shared_pipe__WEBPACK_IMPORTED_MODULE_15__.ProgressValue),
/* harmony export */   "RaainCompareComponent": () => (/* reexport safe */ _raain_compare_raain_compare_component__WEBPACK_IMPORTED_MODULE_1__.RaainCompareComponent),
/* harmony export */   "RaainCompareStackComponent": () => (/* reexport safe */ _raain_compare_stack_raain_compare_stack_component__WEBPACK_IMPORTED_MODULE_6__.RaainCompareStackComponent),
/* harmony export */   "RaainConfigurationComponent": () => (/* reexport safe */ _raain_configuration_raain_configuration_component__WEBPACK_IMPORTED_MODULE_2__.RaainConfigurationComponent),
/* harmony export */   "RaainDateDynamicComponent": () => (/* reexport safe */ _raain_date_dynamic_raain_date_dynamic_component__WEBPACK_IMPORTED_MODULE_4__.RaainDateDynamicComponent),
/* harmony export */   "RaainDateFocusComponent": () => (/* reexport safe */ _raain_date_focus_raain_date_focus_component__WEBPACK_IMPORTED_MODULE_3__.RaainDateFocusComponent),
/* harmony export */   "RaainDetailsComponent": () => (/* reexport safe */ _raain_details_raain_details_component__WEBPACK_IMPORTED_MODULE_8__.RaainDetailsComponent),
/* harmony export */   "RaainGlobeComponent": () => (/* reexport safe */ _raain_globe_raain_globe_component__WEBPACK_IMPORTED_MODULE_7__.RaainGlobeComponent),
/* harmony export */   "RaainMapComponent": () => (/* reexport safe */ _raain_map_raain_map_component__WEBPACK_IMPORTED_MODULE_0__.RaainMapComponent),
/* harmony export */   "RaainSpeedComponent": () => (/* reexport safe */ _raain_speed_raain_speed_component__WEBPACK_IMPORTED_MODULE_5__.RaainSpeedComponent),
/* harmony export */   "RadarService": () => (/* reexport safe */ _radar_service__WEBPACK_IMPORTED_MODULE_13__.RadarService),
/* harmony export */   "RefreshManager": () => (/* reexport safe */ _tools__WEBPACK_IMPORTED_MODULE_9__.RefreshManager),
/* harmony export */   "SharedModule": () => (/* reexport safe */ _shared_module__WEBPACK_IMPORTED_MODULE_16__.SharedModule),
/* harmony export */   "Storage": () => (/* reexport safe */ _storage_service__WEBPACK_IMPORTED_MODULE_17__.Storage),
/* harmony export */   "TimeframeComputationProgress": () => (/* reexport safe */ _shared_pipe__WEBPACK_IMPORTED_MODULE_15__.TimeframeComputationProgress),
/* harmony export */   "TimeframeQualityProgress": () => (/* reexport safe */ _shared_pipe__WEBPACK_IMPORTED_MODULE_15__.TimeframeQualityProgress),
/* harmony export */   "WaitForValidation": () => (/* reexport safe */ _shared_pipe__WEBPACK_IMPORTED_MODULE_15__.WaitForValidation),
/* harmony export */   "XYType": () => (/* reexport safe */ _xytype__WEBPACK_IMPORTED_MODULE_18__.XYType),
/* harmony export */   "mapDateRangeToString": () => (/* reexport safe */ _tools__WEBPACK_IMPORTED_MODULE_9__.mapDateRangeToString)
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
/* harmony import */ var _tools__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./tools */ 1987);
/* harmony import */ var _cache_service__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./cache.service */ 13140);
/* harmony import */ var _fidj_storage_model__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ./fidj-storage.model */ 43498);
/* harmony import */ var _profile_service__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ./profile.service */ 15770);
/* harmony import */ var _radar_service__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ./radar.service */ 49766);
/* harmony import */ var _shared_const__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! ./shared.const */ 40147);
/* harmony import */ var _shared_pipe__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! ./shared.pipe */ 64221);
/* harmony import */ var _shared_module__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! ./shared.module */ 6454);
/* harmony import */ var _storage_service__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(/*! ./storage.service */ 8184);
/* harmony import */ var _xytype__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(/*! ./xytype */ 8217);
/* harmony import */ var _profile_icon_directive__WEBPACK_IMPORTED_MODULE_19__ = __webpack_require__(/*! ./profile-icon.directive */ 36035);
/* harmony import */ var _pipes_module__WEBPACK_IMPORTED_MODULE_20__ = __webpack_require__(/*! ./pipes.module */ 5421);






















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
    declarations: [_shared_pipe__WEBPACK_IMPORTED_MODULE_0__.AreStopped, _shared_pipe__WEBPACK_IMPORTED_MODULE_0__.AreInProgressPipe, _shared_pipe__WEBPACK_IMPORTED_MODULE_0__.AreReady, _shared_pipe__WEBPACK_IMPORTED_MODULE_0__.IsReady, _shared_pipe__WEBPACK_IMPORTED_MODULE_0__.IsNotReady, _shared_pipe__WEBPACK_IMPORTED_MODULE_0__.WaitForValidation, _shared_pipe__WEBPACK_IMPORTED_MODULE_0__.HasGoodQuality, _shared_pipe__WEBPACK_IMPORTED_MODULE_0__.HasNotGoodQuality, _shared_pipe__WEBPACK_IMPORTED_MODULE_0__.ProgressValue, _shared_pipe__WEBPACK_IMPORTED_MODULE_0__.ProgressBuffer, _shared_pipe__WEBPACK_IMPORTED_MODULE_0__.HaveNotBeenRed, _shared_pipe__WEBPACK_IMPORTED_MODULE_0__.TimeframeComputationProgress, _shared_pipe__WEBPACK_IMPORTED_MODULE_0__.TimeframeQualityProgress],
    exports: [_shared_pipe__WEBPACK_IMPORTED_MODULE_0__.AreStopped, _shared_pipe__WEBPACK_IMPORTED_MODULE_0__.AreInProgressPipe, _shared_pipe__WEBPACK_IMPORTED_MODULE_0__.AreReady, _shared_pipe__WEBPACK_IMPORTED_MODULE_0__.IsReady, _shared_pipe__WEBPACK_IMPORTED_MODULE_0__.IsNotReady, _shared_pipe__WEBPACK_IMPORTED_MODULE_0__.WaitForValidation, _shared_pipe__WEBPACK_IMPORTED_MODULE_0__.HasGoodQuality, _shared_pipe__WEBPACK_IMPORTED_MODULE_0__.HasNotGoodQuality, _shared_pipe__WEBPACK_IMPORTED_MODULE_0__.ProgressValue, _shared_pipe__WEBPACK_IMPORTED_MODULE_0__.ProgressBuffer, _shared_pipe__WEBPACK_IMPORTED_MODULE_0__.HaveNotBeenRed, _shared_pipe__WEBPACK_IMPORTED_MODULE_0__.TimeframeComputationProgress, _shared_pipe__WEBPACK_IMPORTED_MODULE_0__.TimeframeQualityProgress]
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
      // Create the skeleton text element (hidden initially)
      const skeleton = document.createElement('ion-skeleton-text');
      skeleton.setAttribute('animated', 'true');
      skeleton.style.width = '100px';
      skeleton.style.height = '20px';
      skeleton.style.borderRadius = '4px';
      skeleton.style.margin = '8px 16px';
      skeleton.style.display = 'none';
      // Store reference to the skeleton text
      this.skeletonText = skeleton;
      // Add the skeleton text to the buttons container
      profileButtons.appendChild(skeleton);
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
    if (this.skeletonText && this.profileButton) {
      this.profileButton.style.display = 'none';
      this.skeletonText.style.display = 'block';
    }
  }
  hideSkeletonText() {
    if (this.skeletonText && this.profileButton) {
      this.profileButton.style.display = 'flex';
      this.skeletonText.style.display = 'none';
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
        if (_this.profileService.needsConnectionRefresh()) {
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
      try {
        const resp = yield _this9.fidjService.sendOnEndpoint({
          key: 'notifications',
          verb: 'POST',
          defaultKeyUrl: _this9.defaultUrlForAPI + '/notifications',
          data: {
            rain: rainId,
            message
          }
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
        const args = '?rain=' + rainId;
        const resp = yield _this0.fidjService.sendOnEndpoint({
          key: 'notifications',
          verb: 'GET',
          relativePath: args,
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
      try {
        const resp = yield _this10.fidjService.sendOnEndpoint({
          key: 'teams_all',
          verb: 'GET',
          defaultKeyUrl: _this10.defaultUrlForAPI + '/teams_all'
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
  getRadars(teamId) {
    var _this12 = this;
    return (0,_opt_atlassian_pipelines_agent_build_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_0__["default"])(function* () {
      const radars = [];
      const url = _this12.defaultUrlForAPI + '/radars' + (teamId ? '?teamId=' + teamId : '');
      try {
        const resp = yield _this12.fidjService.sendOnEndpoint({
          key: 'radars',
          verb: 'GET',
          defaultKeyUrl: url
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
            lonelyRadars.push(radar);
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
    return (0,_opt_atlassian_pipelines_agent_build_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_0__["default"])(function* (rainId, begin, end, forced = false, provider = 'Raain', timeStepInMinutes = 10) {
      try {
        let queryPath = '' + rainId + '?format=timeframeCumulative&provider=' + provider + '&timeStepInMinutes=' + timeStepInMinutes;
        if (begin) {
          queryPath += '&begin=' + begin.toISOString();
        }
        if (end) {
          queryPath += '&end=' + end.toISOString();
        }
        if (forced) {
          queryPath += '&forced=true';
          queryPath += '&withConfig=true';
          // queryPath += '&bypassCache=' + new Date().getTime();
        }

        const resp = yield _this16.fidjService.sendOnEndpoint({
          key: 'rains',
          verb: 'GET',
          relativePath: queryPath,
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
  getRains(teamId) {
    var _this17 = this;
    return (0,_opt_atlassian_pipelines_agent_build_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_0__["default"])(function* () {
      const rains = [];
      const url = _this17.defaultUrlForAPI + '/rains' + (teamId ? '?teamId=' + teamId : '');
      try {
        const resp = yield _this17.fidjService.sendOnEndpoint({
          key: 'rains',
          verb: 'GET',
          defaultKeyUrl: url
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
        const args = `?range=${options.range}&begin=${options.periodBegin.toISOString()}`;
        const resp = yield _this19.fidjService.sendOnEndpoint({
          key: 'rains',
          relativePath: rainId + '/counts' + args,
          verb: 'GET',
          defaultKeyUrl: _this19.defaultUrlForAPI + '/rains/'
        });
        const counts = resp.data.counts.result;
        const percentImages = [],
          percentRainy = [],
          percentQ = [];
        counts.forEach(c => {
          const label = _this19.setDateComponents(options.periodBegin, c);
          percentImages.push(new _xytype__WEBPACK_IMPORTED_MODULE_3__.XYType(c.percentImages ?? 0, NaN, NaN, label));
          percentRainy.push(new _xytype__WEBPACK_IMPORTED_MODULE_3__.XYType(c.percentRainy ?? 0, NaN, NaN, label));
          percentQ.push(new _xytype__WEBPACK_IMPORTED_MODULE_3__.XYType(c.percentQ ?? 0, NaN, NaN, label));
        });
        return {
          percentImages,
          percentRainy,
          percentQ,
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
        const args = `?range=hour&begin=${options.periodBegin.toISOString()}`;
        const resp = yield _this20.fidjService.sendOnEndpoint({
          key: 'rains',
          relativePath: rainId + '/counts' + args,
          verb: 'GET',
          defaultKeyUrl: _this20.defaultUrlForAPI + '/rains/'
        });
        const counts = resp.data.counts.result;
        const percentImages = [],
          rainySum = [],
          rainyCount = [];
        counts.forEach(c => {
          const label = _this20.setDateComponents(options.periodBegin, c);
          percentImages.push(new _xytype__WEBPACK_IMPORTED_MODULE_3__.XYType(c.percentImages ?? 0, NaN, NaN, label));
          rainyCount.push(new _xytype__WEBPACK_IMPORTED_MODULE_3__.XYType(c.rainyCount ?? 0, NaN, NaN, label));
          rainySum.push(new _xytype__WEBPACK_IMPORTED_MODULE_3__.XYType(c.rainySum ?? 0, NaN, NaN, label));
        });
        return {
          percentImages,
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
  getRainComputationCartesianMapById(rainId, rainComputationId) {
    var _this21 = this;
    return (0,_opt_atlassian_pipelines_agent_build_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_0__["default"])(function* () {
      try {
        const queryPath = '' + rainId + '/computations/' + rainComputationId + '?format=cartesian-map';
        const response = yield _this21.fidjService.sendOnEndpoint({
          key: 'rains',
          verb: 'GET',
          relativePath: queryPath,
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
  getRainComputationCumulativesMapById(rainId, rainComputationId, cumulativeHours) {
    var _this22 = this;
    return (0,_opt_atlassian_pipelines_agent_build_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_0__["default"])(function* () {
      const queryPath = `${rainId}/computations/${rainComputationId}/cumulative/${cumulativeHours}`;
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
        rainComputationMap.name = rainId + '.rain.cumulative';
        return rainComputationMap;
      } catch (e) {
        yield _this22.checkError(e);
      }
      return null;
    })();
  }
  getRainComputationCumulativeCartesianMapById(rainId, rainComputationCumulativeId) {
    var _this23 = this;
    return (0,_opt_atlassian_pipelines_agent_build_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_0__["default"])(function* () {
      const queryPath = `${rainId}/cumulatives/${rainComputationCumulativeId}?format=cartesian-map`;
      try {
        const response = yield _this23.fidjService.sendOnEndpoint({
          key: 'rains',
          verb: 'GET',
          relativePath: queryPath,
          defaultKeyUrl: _this23.defaultUrlForAPI + '/rains'
        });
        if (!response.data['cartesian-map']) {
          return null;
        }
        const rainComputationMap = new raain_model__WEBPACK_IMPORTED_MODULE_1__.RainComputationMap(response.data['cartesian-map']);
        rainComputationMap.name = rainId + '.rain.cartesian-map';
        return rainComputationMap;
      } catch (e) {
        yield _this23.checkError(e);
      }
      return null;
    })();
  }
  getRainComputationCumulativeCumulativesMapById(rainId, rainComputationCumulativeId, cumulativeHours) {
    var _this24 = this;
    return (0,_opt_atlassian_pipelines_agent_build_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_0__["default"])(function* () {
      const queryPath = `${rainId}/cumulatives/${rainComputationCumulativeId}/cumulative/${cumulativeHours}`;
      try {
        const response = yield _this24.fidjService.sendOnEndpoint({
          key: 'rains',
          verb: 'GET',
          relativePath: queryPath,
          defaultKeyUrl: _this24.defaultUrlForAPI + '/rains'
        });
        if (!response.data['cumulative']) {
          return null;
        }
        const rainComputationMap = new raain_model__WEBPACK_IMPORTED_MODULE_1__.RainComputationMap(response.data['cumulative']);
        rainComputationMap.name = rainId + '.rain.cumulative-cumulative';
        return rainComputationMap;
      } catch (e) {
        yield _this24.checkError(e);
      }
      return null;
    })();
  }
  getRainCompares(rainId, rainComputationId) {
    var _this25 = this;
    return (0,_opt_atlassian_pipelines_agent_build_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_0__["default"])(function* () {
      const queryPath = '' + rainId + '/computations/' + rainComputationId;
      const response = yield _this25.fidjService.sendOnEndpoint({
        key: 'rains',
        verb: 'GET',
        relativePath: queryPath,
        defaultKeyUrl: _this25.defaultUrlForAPI + '/rains'
        // timeout: 200000,
      });

      const rainComputation = new raain_model__WEBPACK_IMPORTED_MODULE_1__.RainComputation(response.data);
      const links = rainComputation.getLinks();
      const rainComputationQualities = [];
      for (const link of links) {
        if (link.rel === raain_model__WEBPACK_IMPORTED_MODULE_1__.RainComputationQuality.TYPE) {
          const id = link.getId();
          const dateLength = new Date().toISOString().length;
          const version = link.href.substring(4 + raain_model__WEBPACK_IMPORTED_MODULE_1__.RainComputationQuality.TYPE.length + 1 + dateLength + 1, link.href.indexOf('/' + id));
          rainComputationQualities.push({
            id,
            version
          });
        }
      }
      return rainComputationQualities;
    })();
  }
  getRainCompareByDate(rainId, rainComputationId, date) {
    var _this26 = this;
    return (0,_opt_atlassian_pipelines_agent_build_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_0__["default"])(function* () {
      const queryPath = '' + rainId + '/computations/' + rainComputationId + '/compares?date=' + date.toISOString();
      try {
        const response = yield _this26.fidjService.sendOnEndpoint({
          key: 'rains',
          verb: 'GET',
          relativePath: queryPath,
          defaultKeyUrl: _this26.defaultUrlForAPI + '/rains'
        });
        const rainComputationQuality = new raain_model__WEBPACK_IMPORTED_MODULE_1__.RainComputationQuality(response.data.qualities[0]);
        rainComputationQuality.qualitySpeedMatrixContainer = raain_model__WEBPACK_IMPORTED_MODULE_1__.SpeedMatrixContainer.CreateFromJson(rainComputationQuality.qualitySpeedMatrixContainer);
        return rainComputationQuality;
      } catch (e) {
        yield _this26.checkError(e);
      }
      return null;
    })();
  }
  getRainCumulativeCompareByDate(rainId, rainComputationCumulativeId, date) {
    var _this27 = this;
    return (0,_opt_atlassian_pipelines_agent_build_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_0__["default"])(function* () {
      const queryPath = '' + rainId + '/cumulatives/' + rainComputationCumulativeId + '/compares?date=' + date.toISOString();
      try {
        const response = yield _this27.fidjService.sendOnEndpoint({
          key: 'rains',
          verb: 'GET',
          relativePath: queryPath,
          defaultKeyUrl: _this27.defaultUrlForAPI + '/rains'
        });
        const rainComputationQuality = new raain_model__WEBPACK_IMPORTED_MODULE_1__.RainComputationQuality(response.data.qualities[0]);
        rainComputationQuality.qualitySpeedMatrixContainer = raain_model__WEBPACK_IMPORTED_MODULE_1__.SpeedMatrixContainer.CreateFromJson(rainComputationQuality.qualitySpeedMatrixContainer);
        return rainComputationQuality;
      } catch (e) {
        yield _this27.checkError(e);
      }
      return null;
    })();
  }
  getRainProgress(rainId) {
    var _this28 = this;
    return (0,_opt_atlassian_pipelines_agent_build_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_0__["default"])(function* () {
      try {
        const queryPath = '' + rainId + '/progress';
        const response = yield _this28.fidjService.sendOnEndpoint({
          key: 'rains',
          verb: 'GET',
          relativePath: queryPath,
          defaultKeyUrl: _this28.defaultUrlForAPI + '/rains'
          // timeout: 200000,
        });

        return response.data.inProgress;
      } catch (e) {
        yield _this28.checkError(e);
      }
      return 0;
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
  getGauges(_x4, _x5) {
    var _this30 = this;
    return (0,_opt_atlassian_pipelines_agent_build_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_0__["default"])(function* (rainId, aroundLatLng, pageCount = 1) {
      let queryPath = '';
      if (_this30.asTeamId) {
        queryPath += '?teamId=' + _this30.asTeamId;
      }
      if (queryPath) {
        queryPath += '&';
      } else {
        queryPath += '?';
      }
      queryPath += `rainId=${rainId}&aroundLatLng=${aroundLatLng.lat},${aroundLatLng.lng}`;
      const gauges = [];
      try {
        for (let count = 1; count <= pageCount; count++) {
          const paginatedQueryPath = queryPath + `&page=${count}`;
          const resp = yield _this30.fidjService.sendOnEndpoint({
            key: 'gauges',
            verb: 'GET',
            relativePath: paginatedQueryPath,
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
      const queryPath = '' + gaugeId + '/measures?begin=' + begin.toISOString() + '&end=' + end.toISOString();
      const resp = yield _this31.fidjService.sendOnEndpoint({
        key: 'gauges',
        verb: 'GET',
        relativePath: queryPath,
        defaultKeyUrl: _this31.defaultUrlForAPI + '/gauges'
      });
      const gaugeMeasures = [];
      for (const gaugeMeasure of resp.data.gaugeMeasures) {
        gaugeMeasures.push(new raain_model__WEBPACK_IMPORTED_MODULE_1__.GaugeMeasure(gaugeMeasure));
      }
      return gaugeMeasures;
    })();
  }
  getRainSpeedMap(rainNode, rainComputationId) {
    var _this32 = this;
    return (0,_opt_atlassian_pipelines_agent_build_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_0__["default"])(function* () {
      if (!rainComputationId) {
        return null;
      }
      try {
        const response = yield _this32.fidjService.sendOnEndpoint({
          verb: 'GET',
          defaultKeyUrl: _this32.defaultUrlForAPI + `/rains/${rainNode.id}/computations/${rainComputationId}/speeds`
        });
        return new raain_model__WEBPACK_IMPORTED_MODULE_1__.RainSpeedMap(response.data.rainSpeedMap);
      } catch (e) {
        console.error('getRainSpeedMap error:', e);
      }
    })();
  }
  getProviders(rainId) {
    var _this33 = this;
    return (0,_opt_atlassian_pipelines_agent_build_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_0__["default"])(function* () {
      try {
        const response = yield _this33.fidjService.sendOnEndpoint({
          verb: 'GET',
          key: 'rains',
          relativePath: rainId + '/providers',
          defaultKeyUrl: _this33.defaultUrlForAPI + '/rains'
        });
        return {
          providers: response.data.providers || [],
          timeStepInMinutes: response.data.timeStepInMinutes || [5, 10, 15, 30, 60]
        };
      } catch (e) {
        console.error('getProviders error:', e);
        // Return fallback values if API call fails
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





function RaainCompareStackComponent_div_0_ion_card_content_7_Template(rf, ctx) {
  if (rf & 1) {
    const _r4 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "ion-card-content")(1, "raain-compare", 3);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("selectedPoint", function RaainCompareStackComponent_div_0_ion_card_content_7_Template_raain_compare_selectedPoint_1_listener($event) {
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵrestoreView"](_r4);
      const ctx_r3 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"](2);
      return _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵresetView"](ctx_r3.onClick($event));
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()();
  }
  if (rf & 2) {
    const ctx_r2 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("compareIndex", 0)("currentHeight", 500)("pointMax", ctx_r2.compareManager.globalComparePointsMax)("points", ctx_r2.compareManager.globalComparePoints);
  }
}
function RaainCompareStackComponent_div_0_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "div")(1, "ion-col", 1)(2, "ion-card", 2)(3, "ion-card-header");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpipe"](5, "date");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpipe"](6, "date");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](7, RaainCompareStackComponent_div_0_ion_card_content_7_Template, 2, 4, "ion-card-content", 0);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()()();
  }
  if (rf & 2) {
    const ctx_r0 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate2"]("Cumulative [", _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpipeBind2"](5, 3, ctx_r0.compareManager.compareDates[0], "yyyy-MM-dd HH:mm"), " - ", _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpipeBind2"](6, 6, ctx_r0.compareManager.compareDates[ctx_r0.compareManager.compareDates.length - 1], "yyyy-MM-dd HH:mm"), "] ");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", ctx_r0.compareManager.globalComparePoints == null ? null : ctx_r0.compareManager.globalComparePoints.length);
  }
}
function RaainCompareStackComponent_div_1_ion_col_1_ion_card_content_4_Template(rf, ctx) {
  if (rf & 1) {
    const _r10 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "ion-card-content")(1, "raain-compare", 3);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("selectedPoint", function RaainCompareStackComponent_div_1_ion_col_1_ion_card_content_4_Template_raain_compare_selectedPoint_1_listener($event) {
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵrestoreView"](_r10);
      const ctx_r9 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"](3);
      return _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵresetView"](ctx_r9.onClick($event));
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()();
  }
  if (rf & 2) {
    const ctx_r11 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"]();
    const compareIndex_r7 = ctx_r11.index;
    const compare_r6 = ctx_r11.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("compareIndex", compareIndex_r7)("currentHeight", 500)("pointMax", compare_r6.comparePointsMax)("points", compare_r6.comparePoints);
  }
}
function RaainCompareStackComponent_div_1_ion_col_1_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "ion-col", 1)(1, "ion-card", 2)(2, "ion-card-header");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](4, RaainCompareStackComponent_div_1_ion_col_1_ion_card_content_4_Template, 2, 4, "ion-card-content", 0);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()();
  }
  if (rf & 2) {
    const compare_r6 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate2"]("Gauges filled ", compare_r6.name, " ", compare_r6.remarks, " ");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", compare_r6.comparePoints == null ? null : compare_r6.comparePoints.length);
  }
}
function RaainCompareStackComponent_div_1_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "div");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](1, RaainCompareStackComponent_div_1_ion_col_1_Template, 5, 3, "ion-col", 4);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
  }
  if (rf & 2) {
    const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngForOf", ctx_r1.compareManager == null ? null : ctx_r1.compareManager.uiCompares);
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
      consts: [[4, "ngIf"], ["size-md", "6", "size-xs", "12"], [1, "card-compare"], [3, "compareIndex", "currentHeight", "pointMax", "points", "selectedPoint"], ["size-md", "6", "size-xs", "12", 4, "ngFor", "ngForOf"]],
      template: function RaainCompareStackComponent_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](0, RaainCompareStackComponent_div_0_Template, 8, 9, "div", 0);
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](1, RaainCompareStackComponent_div_1_Template, 2, 1, "div", 0);
        }
        if (rf & 2) {
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", ctx.cumulative);
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", !ctx.cumulative);
        }
      },
      dependencies: [_angular_common__WEBPACK_IMPORTED_MODULE_2__.NgForOf, _angular_common__WEBPACK_IMPORTED_MODULE_2__.NgIf, _ionic_angular__WEBPACK_IMPORTED_MODULE_3__.IonCard, _ionic_angular__WEBPACK_IMPORTED_MODULE_3__.IonCardContent, _ionic_angular__WEBPACK_IMPORTED_MODULE_3__.IonCardHeader, _ionic_angular__WEBPACK_IMPORTED_MODULE_3__.IonCol, _raain_compare_raain_compare_component__WEBPACK_IMPORTED_MODULE_0__.RaainCompareComponent, _angular_common__WEBPACK_IMPORTED_MODULE_2__.DatePipe],
      styles: ["#card-matrix[_ngcontent-%COMP%] {\n  width: 170px;\n}\n\n.card-compare[_ngcontent-%COMP%] {\n  min-width: 300px;\n}\n\nion-card-header[_ngcontent-%COMP%] {\n  padding: 0 0 0 10px;\n}\n/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8uL3NyYy9jb3JlL3NoYXJlZC9yYWFpbi1jb21wYXJlLXN0YWNrL3JhYWluLWNvbXBhcmUtc3RhY2suY29tcG9uZW50LnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFDRSxZQUFBO0FBQ0Y7O0FBRUE7RUFDRSxnQkFBQTtBQUNGOztBQUVBO0VBQ0UsbUJBQUE7QUFDRiIsInNvdXJjZXNDb250ZW50IjpbIiNjYXJkLW1hdHJpeCB7XG4gIHdpZHRoOiAxNzBweDtcbn1cblxuLmNhcmQtY29tcGFyZSB7XG4gIG1pbi13aWR0aDogMzAwcHg7XG59XG5cbmlvbi1jYXJkLWhlYWRlciB7XG4gIHBhZGRpbmc6IDAgMCAwIDEwcHg7XG59XG4iXSwic291cmNlUm9vdCI6IiJ9 */"]
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
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](0, "ion-button", 4);
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
      consts: [["id", "col-container", "size-sm", "12"], ["id", "canvas-container"], ["canvasElement", ""], ["offset-sm", "4", "size-sm", "1", 1, "ion-text-right"], ["color", "medium", "fill", "clear", 3, "click"], ["name", "chevron-back-outline"], ["size-sm", "2", 1, "ion-text-center"], ["color", "medium", "fill", "clear", 3, "click", 4, "ngIf"], ["size-sm", "1", 1, "ion-text-left"], ["name", "chevron-forward-outline"]],
      template: function RaainDateDynamicComponent_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](0, "ion-grid")(1, "ion-row")(2, "ion-col", 0)(3, "div", 1);
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](4, "canvas", null, 2);
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]()()();
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](6, "ion-row")(7, "ion-col", 3)(8, "ion-button", 4);
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵlistener"]("click", function RaainDateDynamicComponent_Template_ion_button_click_8_listener() {
            return ctx.focusPrevious();
          });
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](9, "ion-icon", 5);
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]()();
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](10, "ion-col", 6);
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtemplate"](11, RaainDateDynamicComponent_ion_button_11_Template, 2, 0, "ion-button", 7);
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](12, "ion-col", 8)(13, "ion-button", 4);
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵlistener"]("click", function RaainDateDynamicComponent_Template_ion_button_click_13_listener() {
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
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @angular/core */ 22560);
/* harmony import */ var _storage_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../storage.service */ 8184);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! @angular/common */ 94666);
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! @angular/forms */ 2508);
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! @ionic/angular */ 93819);
/* harmony import */ var _raain_map_raain_map_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../raain-map/raain-map.component */ 50121);
/* harmony import */ var _raain_compare_stack_raain_compare_stack_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../raain-compare-stack/raain-compare-stack.component */ 46341);
/* harmony import */ var _raain_date_focus_raain_date_focus_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../raain-date-focus/raain-date-focus.component */ 25320);
/* harmony import */ var _raain_date_dynamic_raain_date_dynamic_component__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../raain-date-dynamic/raain-date-dynamic.component */ 4528);













function RaainDetailsComponent_div_0_ion_select_option_38_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementStart"](0, "ion-select-option", 38);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵtext"](1, "24 hours");
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementEnd"]();
  }
}
function RaainDetailsComponent_div_0_div_45_Template(rf, ctx) {
  if (rf & 1) {
    const _r11 = _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementStart"](0, "div", 3)(1, "raain-date-dynamic", 39);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵlistener"]("changedDate", function RaainDetailsComponent_div_0_div_45_Template_raain_date_dynamic_changedDate_1_listener($event) {
      _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵrestoreView"](_r11);
      const ctx_r10 = _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵnextContext"](2);
      return _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵresetView"](ctx_r10.onDateChangeInCount($event));
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementEnd"]()();
  }
  if (rf & 2) {
    const ctx_r2 = _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵproperty"]("currentHeight", 300)("fetchData", ctx_r2.fetchDataWrapper)("points", ctx_r2.countPoints);
  }
}
function RaainDetailsComponent_div_0_span_53_i_2_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementStart"](0, "i", 41);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementEnd"]();
  }
  if (rf & 2) {
    const ctx_r12 = _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵnextContext"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵtextInterpolate1"](" In Progress: ", ctx_r12.countsPeriod.progress, "... ");
  }
}
function RaainDetailsComponent_div_0_span_53_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementStart"](0, "span");
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵtemplate"](2, RaainDetailsComponent_div_0_span_53_i_2_Template, 2, 1, "i", 40);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementEnd"]();
  }
  if (rf & 2) {
    const ctx_r3 = _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵtextInterpolate1"](" ", ctx_r3.getPercentOfComputations(), "% Images ");
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵproperty"]("ngIf", ctx_r3.countsPeriod.progress);
  }
}
function RaainDetailsComponent_div_0_span_54_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementStart"](0, "span");
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵtext"](1, " No image available ");
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementEnd"]();
  }
}
function RaainDetailsComponent_div_0_span_55_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementStart"](0, "span")(1, "b");
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵtext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementEnd"]()();
  }
  if (rf & 2) {
    const ctx_r5 = _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵtextInterpolate1"]("Errors: ", ctx_r5.refreshManager.lastError, "");
  }
}
function RaainDetailsComponent_div_0_ion_progress_bar_58_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelement"](0, "ion-progress-bar", 42);
  }
  if (rf & 2) {
    const ctx_r6 = _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵproperty"]("buffer", ctx_r6.countsPeriod.progress / (((ctx_r6.timeframeDates == null ? null : ctx_r6.timeframeDates.length) || 10) + 3) + 0.01)("value", ctx_r6.countsPeriod.progress / (((ctx_r6.timeframeDates == null ? null : ctx_r6.timeframeDates.length) || 10) + 3));
  }
}
const _c0 = function () {
  return [];
};
const _c1 = function (a0, a1, a2, a3, a4, a5, a6) {
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
const _c2 = function (a0) {
  return {
    "warning": a0
  };
};
function RaainDetailsComponent_div_0_ion_row_59_Template(rf, ctx) {
  if (rf & 1) {
    const _r14 = _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementStart"](0, "ion-row")(1, "ion-col", 43)(2, "div", 44)(3, "raain-map", 45);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵlistener"]("changedDate", function RaainDetailsComponent_div_0_ion_row_59_Template_raain_map_changedDate_3_listener($event) {
      _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵrestoreView"](_r14);
      const ctx_r13 = _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵnextContext"](2);
      return _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵresetView"](ctx_r13.onDateChangeInMap($event));
    })("changedSum", function RaainDetailsComponent_div_0_ion_row_59_Template_raain_map_changedSum_3_listener($event) {
      _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵrestoreView"](_r14);
      const ctx_r15 = _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵnextContext"](2);
      return _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵresetView"](ctx_r15.onSumChangeInMap($event));
    })("selectedMarker", function RaainDetailsComponent_div_0_ion_row_59_Template_raain_map_selectedMarker_3_listener($event) {
      _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵrestoreView"](_r14);
      const ctx_r16 = _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵnextContext"](2);
      return _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵresetView"](ctx_r16.onGaugeSelectInMap($event));
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementStart"](4, "div", 46)(5, "details", 47)(6, "summary");
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵtext"](7, "Image Details");
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementStart"](8, "div", 48)(9, "div", 49)(10, "span", 50);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵtext"](11, "Computed:");
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementStart"](12, "span", 51);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵtext"](13);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵpipe"](14, "date");
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementStart"](15, "div", 49)(16, "span", 50);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵtext"](17, "Version:");
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementStart"](18, "span", 51);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵtext"](19);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementStart"](20, "div", 49)(21, "span", 50);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵtext"](22, "Launched by:");
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementStart"](23, "span", 51);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵtext"](24);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementStart"](25, "div", 49)(26, "span", 50);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵtext"](27, "Time spent:");
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementStart"](28, "span", 51);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵtext"](29);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementStart"](30, "div", 49)(31, "span", 50);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵtext"](32, "Date:");
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementStart"](33, "span", 51);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵtext"](34);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵpipe"](35, "date");
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementStart"](36, "div", 49)(37, "span", 50);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵtext"](38, "Water in the map:");
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementStart"](39, "span", 51);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵtext"](40);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementStart"](41, "div", 49)(42, "span", 50);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵtext"](43, "Source DBZ min:");
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementStart"](44, "span", 51);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵtext"](45);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementStart"](46, "div", 49)(47, "span", 50);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵtext"](48, "Source DBZ max:");
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementStart"](49, "span", 51);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵtext"](50);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementEnd"]()()()()()();
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementStart"](51, "ion-col", 52)(52, "div", 53)(53, "div", 54)(54, "raain-compare-stack", 55);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵlistener"]("selectedPoint", function RaainDetailsComponent_div_0_ion_row_59_Template_raain_compare_stack_selectedPoint_54_listener($event) {
      _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵrestoreView"](_r14);
      const ctx_r17 = _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵnextContext"](2);
      return _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵresetView"](ctx_r17.onGaugeSelectInCompare($event));
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementStart"](55, "details", 47)(56, "summary");
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵtext"](57, "Compare Details");
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementStart"](58, "div", 48)(59, "div", 56)(60, "span", 50);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵtext"](61, "Computed:");
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementStart"](62, "span", 51);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵtext"](63);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵpipe"](64, "date");
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementStart"](65, "div", 49)(66, "span", 50);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵtext"](67, "Version:");
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementStart"](68, "span", 51);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵtext"](69);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementStart"](70, "div", 49)(71, "span", 50);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵtext"](72, "Launched by:");
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementStart"](73, "span", 51);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵtext"](74);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementStart"](75, "div", 49)(76, "span", 50);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵtext"](77, "Time spent:");
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementStart"](78, "span", 51);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵtext"](79);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementStart"](80, "div", 49)(81, "span", 50);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵtext"](82, "Gauges:");
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementStart"](83, "span", 51);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵtext"](84);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementStart"](85, "div", 49)(86, "span", 50);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵtext"](87, "Points:");
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementStart"](88, "span", 51);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵtext"](89);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementEnd"]()()()()()()();
  }
  if (rf & 2) {
    const ctx_r7 = _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵproperty"]("coordinates", ctx_r7.coordinates)("currentHeight", 500)("defaultDate", ctx_r7.dateShown)("markers", _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵpureFunction7"](37, _c1, ctx_r7.borders, ctx_r7.compareManager.gaugesInMap, ctx_r7.compareManager.gaugesInCompare, ctx_r7.compareManager.selectedGauges, ctx_r7.compareManager.selectedPixels, (ctx_r7.compareManager.pixelsSolutions == null ? null : ctx_r7.compareManager.pixelsSolutions.length) ? ctx_r7.compareManager.pixelsSolutions[0] : _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵpureFunction0"](36, _c0), ctx_r7.compareManager.speeds))("showCumulative", ctx_r7.toggleCumulative)("sumFn", ctx_r7.refreshManager.sumFn)("sumValues", ctx_r7.refreshManager.sumValues)("timeframeContainers", ctx_r7.timeframeContainers)("timeframeDates", ctx_r7.timeframeDates);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵadvance"](10);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵpipeBind2"](14, 27, ctx_r7.refreshManager.rainComputationMapDoneDate, "yyyy-MM-dd HH:mm"));
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵadvance"](6);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵtextInterpolate"](ctx_r7.refreshManager.rainComputationMapVersion);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵadvance"](5);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵtextInterpolate"](ctx_r7.refreshManager.rainComputationMapLaunchedBy);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵadvance"](5);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵtextInterpolate1"]("", ctx_r7.refreshManager.rainComputationMapTimeSpentInMs, " ms");
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵadvance"](5);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵtextInterpolate2"]("", ctx_r7.refreshManager.rainComputationMapDate == null ? null : ctx_r7.refreshManager.rainComputationMapDate.toISOString(), " | ", _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵpipeBind2"](35, 30, ctx_r7.refreshManager.rainComputationMapDate, "yyyy-MM-dd HH:mm"), "");
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵadvance"](6);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵtextInterpolate"](ctx_r7.sumDetails);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵadvance"](5);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵtextInterpolate"](ctx_r7.refreshManager.rainComputationMapOriginalMin);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵadvance"](5);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵtextInterpolate"](ctx_r7.refreshManager.rainComputationMapOriginalMax);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵadvance"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵproperty"]("compareManager", ctx_r7.compareManager)("cumulative", ctx_r7.toggleCumulative);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵadvance"](5);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵproperty"]("ngClass", _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵpureFunction1"](45, _c2, (ctx_r7.refreshManager.rainComputationMapDoneDate == null ? null : ctx_r7.refreshManager.rainComputationMapDoneDate.getTime()) > (ctx_r7.compareManager.currentQualityDoneDate == null ? null : ctx_r7.compareManager.currentQualityDoneDate.getTime()) + 60000));
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵadvance"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵpipeBind2"](64, 33, ctx_r7.compareManager.currentQualityDoneDate, "yyyy-MM-dd HH:mm"));
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵadvance"](6);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵtextInterpolate"](ctx_r7.compareManager.compareVersion);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵadvance"](5);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵtextInterpolate"](ctx_r7.compareManager.currentQualityLaunchedBy);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵadvance"](5);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵtextInterpolate1"]("", ctx_r7.compareManager.currentQualityTimeSpentInMs, " ms");
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵadvance"](5);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵtextInterpolate"](ctx_r7.compareManager.gaugesInCompare.length);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵadvance"](5);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵtextInterpolate"](ctx_r7.compareManager.globalComparePoints.length);
  }
}
function RaainDetailsComponent_div_0_ion_progress_bar_61_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelement"](0, "ion-progress-bar", 42);
  }
  if (rf & 2) {
    const ctx_r8 = _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵproperty"]("buffer", ctx_r8.countsPeriod.progress / (((ctx_r8.timeframeDates == null ? null : ctx_r8.timeframeDates.length) || 10) + 3) + 0.01)("value", ctx_r8.countsPeriod.progress / (((ctx_r8.timeframeDates == null ? null : ctx_r8.timeframeDates.length) || 10) + 3));
  }
}
function RaainDetailsComponent_div_0_ion_card_62_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementStart"](0, "ion-card", 57)(1, "ion-card-header")(2, "ion-card-title");
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelement"](3, "ion-icon", 58);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵtext"](4, " Selected Gauge Data ");
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementStart"](5, "ion-card-content");
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelement"](6, "raain-date-focus", 59);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementEnd"]()();
  }
  if (rf & 2) {
    const ctx_r9 = _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵadvance"](6);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵproperty"]("currentHeight", 300)("focusDate", ctx_r9.periodBegin)("focusRange", ctx_r9.DateRange.DAY)("points", ctx_r9.gaugeSelectedPoints)("withoutAll", true);
  }
}
function RaainDetailsComponent_div_0_Template(rf, ctx) {
  if (rf & 1) {
    const _r19 = _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementStart"](0, "div", 1)(1, "ion-card", 2)(2, "ion-card-content")(3, "div", 3)(4, "div", 4)(5, "ion-button", 5);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵlistener"]("click", function RaainDetailsComponent_div_0_Template_ion_button_click_5_listener() {
      _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵrestoreView"](_r19);
      const ctx_r18 = _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵnextContext"]();
      return _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵresetView"](ctx_r18.setPeriodOfNow());
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelement"](6, "ion-icon", 6);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵtext"](7, " Now ");
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementStart"](8, "div", 7)(9, "ion-label");
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵtext"](10, "Start:");
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementStart"](11, "input", 8);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵlistener"]("change", function RaainDetailsComponent_div_0_Template_input_change_11_listener($event) {
      _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵrestoreView"](_r19);
      const ctx_r20 = _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵnextContext"]();
      return _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵresetView"](ctx_r20.onPeriodBeginChange($event));
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementStart"](12, "div", 9)(13, "ion-label");
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵtext"](14, "Duration:");
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementStart"](15, "ion-select", 10);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵlistener"]("ionDismiss", function RaainDetailsComponent_div_0_Template_ion_select_ionDismiss_15_listener($event) {
      _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵrestoreView"](_r19);
      const ctx_r21 = _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵnextContext"]();
      return _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵresetView"](ctx_r21.onPeriodDurationChange($event));
    })("ngModelChange", function RaainDetailsComponent_div_0_Template_ion_select_ngModelChange_15_listener($event) {
      _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵrestoreView"](_r19);
      const ctx_r22 = _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵnextContext"]();
      return _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵresetView"](ctx_r22.periodDurationAsString = $event);
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementStart"](16, "ion-select-option", 11);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵtext"](17, "15 minutes");
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementStart"](18, "ion-select-option", 12);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵtext"](19, "30 minutes");
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementStart"](20, "ion-select-option", 13);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵtext"](21, "1 hour");
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementStart"](22, "ion-select-option", 14);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵtext"](23, "2 hours");
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementStart"](24, "ion-select-option", 15);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵtext"](25, "3 hours");
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementStart"](26, "ion-select-option", 16);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵtext"](27, "4 hours");
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementStart"](28, "ion-select-option", 17);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵtext"](29, "5 hours");
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementStart"](30, "ion-select-option", 18);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵtext"](31, "6 hours");
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementStart"](32, "ion-select-option", 19);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵtext"](33, "8 hours");
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementStart"](34, "ion-select-option", 20);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵtext"](35, "10 hours");
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementStart"](36, "ion-select-option", 21);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵtext"](37, "12 hours");
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵtemplate"](38, RaainDetailsComponent_div_0_ion_select_option_38_Template, 2, 0, "ion-select-option", 22);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementStart"](39, "div", 23)(40, "ion-label", 24);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵtext"](41, "All dates");
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementStart"](42, "ion-toggle", 25);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵlistener"]("ionChange", function RaainDetailsComponent_div_0_Template_ion_toggle_ionChange_42_listener() {
      _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵrestoreView"](_r19);
      const ctx_r23 = _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵnextContext"]();
      return _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵresetView"](ctx_r23.onEnableCountHistoryTab(ctx_r23.rainNode));
    })("ngModelChange", function RaainDetailsComponent_div_0_Template_ion_toggle_ngModelChange_42_listener($event) {
      _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵrestoreView"](_r19);
      const ctx_r24 = _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵnextContext"]();
      return _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵresetView"](ctx_r24.toggleHistory = $event);
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementEnd"]()()();
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementStart"](43, "div", 26);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵtext"](44);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵtemplate"](45, RaainDetailsComponent_div_0_div_45_Template, 2, 3, "div", 27);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementStart"](46, "ion-card", 28)(47, "ion-card-content", 29)(48, "ion-grid")(49, "ion-row", 30);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelement"](50, "ion-col", 31);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementStart"](51, "ion-col", 32)(52, "ion-label", 33);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵtemplate"](53, RaainDetailsComponent_div_0_span_53_Template, 3, 2, "span", 34);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵtemplate"](54, RaainDetailsComponent_div_0_span_54_Template, 2, 0, "span", 34);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵtemplate"](55, RaainDetailsComponent_div_0_span_55_Template, 3, 1, "span", 34);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementStart"](56, "ion-button", 35);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵlistener"]("click", function RaainDetailsComponent_div_0_Template_ion_button_click_56_listener() {
      _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵrestoreView"](_r19);
      const ctx_r25 = _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵnextContext"]();
      return _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵresetView"](ctx_r25.refreshMap());
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵtext"](57, " Refresh Map ");
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵtemplate"](58, RaainDetailsComponent_div_0_ion_progress_bar_58_Template, 1, 2, "ion-progress-bar", 36);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵtemplate"](59, RaainDetailsComponent_div_0_ion_row_59_Template, 90, 47, "ion-row", 34);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementStart"](60, "ion-row");
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵtemplate"](61, RaainDetailsComponent_div_0_ion_progress_bar_61_Template, 1, 2, "ion-progress-bar", 36);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementEnd"]()()()();
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵtemplate"](62, RaainDetailsComponent_div_0_ion_card_62_Template, 7, 5, "ion-card", 37);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementEnd"]();
  }
  if (rf & 2) {
    const ctx_r0 = _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵadvance"](11);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵproperty"]("value", ctx_r0.periodBeginAsString);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵadvance"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵproperty"]("ngModel", ctx_r0.periodDurationAsString);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵadvance"](23);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵproperty"]("ngIf", ctx_r0.isAdmin);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵadvance"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵproperty"]("ngModel", ctx_r0.toggleHistory)("checked", ctx_r0.toggleHistory);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵtextInterpolate"](ctx_r0.onChangeDetectionTest(ctx_r0.rainNode));
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵproperty"]("ngIf", ctx_r0.toggleHistory);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵadvance"](8);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵproperty"]("ngIf", ctx_r0.getPercentOfComputations());
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵproperty"]("ngIf", !ctx_r0.getPercentOfComputations());
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵproperty"]("ngIf", ctx_r0.refreshManager.lastError);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵproperty"]("disabled", ctx_r0.refreshInProgress);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵproperty"]("ngIf", ctx_r0.refreshInProgress);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵproperty"]("ngIf", ctx_r0.toggleMap && ctx_r0.getPercentOfImages());
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵproperty"]("ngIf", ctx_r0.refreshInProgress);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵproperty"]("ngIf", ctx_r0.gaugeSelectedPoints.length && ctx_r0.gaugeSelectedPoints[0].values.length);
  }
}
class RaainDetailsComponent {
  constructor(storage) {
    var _this = this;
    this.storage = storage;
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
  fetchData(focusDate, focusRange) {
    var _this2 = this;
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
      }
      //  {
      //      label: '% Quality',
      //      style: 'line',
      //      values,
      //  },
      ];

      const range = (0,_tools__WEBPACK_IMPORTED_MODULE_3__.mapDateRangeToString)(focusRange);
      let data = fakeData;
      if (!_this2.rainNode) {
        return data;
      }
      if (focusRange === raain_ui__WEBPACK_IMPORTED_MODULE_2__.DateRange.CENTURY) {
        // fake
      } else if (focusRange === raain_ui__WEBPACK_IMPORTED_MODULE_2__.DateRange.HOUR) {
        const hourCounts = yield _this2.profileService.getCountsHour(_this2.rainNode.id, {
          periodBegin: focusDate
        });
        data = [{
          label: 'Rainy Count',
          style: 'line',
          values: hourCounts.rainyCount.map(c => {
            return {
              date: RaainDetailsComponent.DateUTC(c.name),
              value: Math.min(100, c.x)
            };
          })
        }, {
          label: '% Images',
          style: 'bar',
          values: hourCounts.percentImages.map(c => {
            return {
              date: RaainDetailsComponent.DateUTC(c.name),
              value: Math.min(100, c.x)
            };
          })
        }, {
          label: 'Rainy Sum',
          style: 'line',
          values: hourCounts.rainySum.map(c => {
            return {
              date: RaainDetailsComponent.DateUTC(c.name),
              value: Math.min(100, c.x)
            };
          })
        }];
      } else {
        // console.log('fetchData TODO:', focusDate.toISOString(), range);
        const counts = yield _this2.profileService.getCounts(_this2.rainNode.id, {
          range,
          periodBegin: focusDate
        });
        data = [{
          label: '% Rainy',
          style: 'bar',
          values: counts.percentRainy.map(c => {
            return {
              date: RaainDetailsComponent.DateUTC(c.name),
              value: Math.min(100, c.x)
            };
          })
        }, {
          label: '% Images',
          style: 'bar',
          values: counts.percentImages.map(c => {
            return {
              date: RaainDetailsComponent.DateUTC(c.name),
              value: Math.min(100, c.x)
            };
          })
        }
        //  {
        //      label: '% Quality',
        //      style: 'line',
        //      values: counts.percentQ.map((c) => {
        //          return {
        //              date: RaainDetailsComponent.DateUTC(c.name),
        //              value: Math.min(100, c.x),
        //          };
        //      }),
        //  },
        ];
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
    var _this3 = this;
    return (0,_opt_atlassian_pipelines_agent_build_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_0__["default"])(function* () {
      if (!_this3.toggleHistory) {
        _this3.countPoints = [];
      }
    })();
  }
  onPeriodBeginChange(event) {
    var _this4 = this;
    return (0,_opt_atlassian_pipelines_agent_build_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_0__["default"])(function* () {
      const newValue = event?.target?.value ?? _this4.periodBeginAsString;
      _this4.periodBegin = new Date(newValue);
      _this4.periodBeginAsString = newValue;
      _this4.storage.set('raain-periodBegin', _this4.periodBegin);
      yield _this4.onPeriodDurationChange(event);
    })();
  }
  onPeriodDurationChange(_event) {
    var _this5 = this;
    return (0,_opt_atlassian_pipelines_agent_build_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_0__["default"])(function* () {
      const durationInHour = parseFloat(_this5.periodDurationAsString);
      _this5.periodEnd = new Date(_this5.periodBegin.getTime() + durationInHour * (60 * 60000));
      _this5.periodEndAsString = _this5.periodEnd.toISOString();
      _this5.storage.set('raain-periodEnd', _this5.periodEnd);
      _this5.storage.set('raain-periodDurationInHours', durationInHour);
      _this5.refreshManager.period = {
        begin: _this5.periodBegin,
        end: _this5.periodEnd
      };
    })();
  }
  onDateChangeInCount(dateChanged) {
    var _this6 = this;
    return (0,_opt_atlassian_pipelines_agent_build_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_0__["default"])(function* () {
      // console.log('onDateChangeInCount', dateChanged);
      _this6.periodBeginAsString = dateChanged.toISOString().substring(0, 11) + dateChanged.toLocaleTimeString().substring(0, 5);
      _this6.periodDurationAsString = '1';
      yield _this6.onPeriodBeginChange(null);
      yield _this6.refreshManager.refresh(false, true);
    })();
  }
  onDateChangeInMap(dateShown) {
    var _this7 = this;
    return (0,_opt_atlassian_pipelines_agent_build_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_0__["default"])(function* () {
      // console.log('onDateChangeInMap', dateShown);
      _this7.dateShown = dateShown;
      const cumulativeHours = !_this7.toggleCumulative ? 0 : parseFloat(_this7.periodDurationAsString);
      yield _this7.refreshManager.fetch(_this7.dateShown, _this7.toggleGaugeMeasures, cumulativeHours);
      _this7.currentTimeframeTarget = _this7.refreshManager.getTimelineSelectedFrameSet();
      yield _this7.refreshManager.setReportPeriod(_this7.dateShown);
    })();
  }
  onSumChangeInMap(sum) {
    var _this8 = this;
    return (0,_opt_atlassian_pipelines_agent_build_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_0__["default"])(function* () {
      _this8.sumDetails = sum;
    })();
  }
  onGaugeSelectInMap(mapLatLng) {
    var _this9 = this;
    return (0,_opt_atlassian_pipelines_agent_build_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_0__["default"])(function* () {
      const gaugesFiltered = _this9.compareManager.gaugesInMap.filter(g => g.lat === mapLatLng.lat && g.lng === mapLatLng.lng);
      if (gaugesFiltered.length !== 1) {
        return;
      }
      const gaugeSelected = gaugesFiltered[0];
      yield _this9.refreshGaugeValues({
        id: gaugeSelected.id,
        name: gaugeSelected.name
      });
      yield _this9.compareManager.selectGauge(gaugeSelected.id, 0);
    })();
  }
  refreshGaugeValues(gaugeSelected) {
    var _this0 = this;
    return (0,_opt_atlassian_pipelines_agent_build_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_0__["default"])(function* () {
      const gaugeValueShowBegin = new Date(_this0.periodBegin.getTime() - 24 * 60 * 60 * 1000);
      const gaugeValueShowEnd = new Date(_this0.periodEnd.getTime() + 24 * 60 * 60 * 1000);
      gaugeValueShowBegin.setHours(0);
      gaugeValueShowBegin.setMinutes(0);
      gaugeValueShowEnd.setHours(23);
      gaugeValueShowEnd.setMinutes(59);
      const gaugeMeasures = yield _this0.profileService.getGaugeMeasures(gaugeSelected.id, gaugeValueShowBegin, gaugeValueShowEnd);
      const gaugeValues = gaugeMeasures.map(gm => {
        const cartesianMeasureValue = new raain_model__WEBPACK_IMPORTED_MODULE_1__.CartesianMeasureValue(gm.values[0]);
        const value = cartesianMeasureValue.getCartesianValues()[0].value;
        return {
          date: gm.date,
          value
        };
      });
      _this0.gaugeSelectedPoints = [{
        label: gaugeSelected.name,
        style: 'bar',
        values: gaugeValues
      }];
      // console.log('this.gaugeSelectedPoints:', this.gaugeSelectedPoints);
    })();
  }

  onGaugeSelectInCompare(e) {
    var _this1 = this;
    return (0,_opt_atlassian_pipelines_agent_build_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_0__["default"])(function* () {
      yield _this1.refreshGaugeValues({
        id: e.point.id,
        name: e.point.name
      });
      yield _this1.compareManager.selectGauge(e.point.id, e.compareIndex);
    })();
  }
  onToggleMap($event) {
    return (0,_opt_atlassian_pipelines_agent_build_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_0__["default"])(function* () {})();
  } // if (this.toggleMap) {
  //    await this.refreshMap();
  // }

  onChangeDetectionTest(rainNode) {
    // TODO console.log(TEST_DETECTION++, 'onChangeDetectionTest');
    return '';
  }
  refreshMap() {
    var _this10 = this;
    return (0,_opt_atlassian_pipelines_agent_build_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_0__["default"])(function* () {
      _this10.gaugeSelectedPoints = [];
      // this.qualityConf.trustfulGaugeIds = this.qualityConf.trustfulGaugeIds?.length > 0 ?
      //  this.qualityConf.trustfulGaugeIds : this.gaugesToFilter.filter(g => g.isIn).map(g => g.id);
      _this10.borders = [
        //  new MapLatLng(rainNode.latitude - 250 * 0.008, rainNode.longitude),
        //  new MapLatLng(rainNode.latitude, rainNode.longitude - 250 * 0.013),
        //  new MapLatLng(rainNode.latitude, rainNode.longitude + 250 * 0.013),
        //  new MapLatLng(rainNode.latitude + 250 * 0.008, rainNode.longitude),
      ];
      _this10.compareManager.cleanAll();
      yield _this10.compareManager.setGaugesInMap();
      _this10.refreshManager.refresh(false, _this10.toggleAdmin).then(_ignored => {});
    })();
  }
  setPeriodOfNow() {
    var _this11 = this;
    return (0,_opt_atlassian_pipelines_agent_build_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_0__["default"])(function* () {
      // should look like: "2024-08-26T12:13"
      const last30mn = new Date();
      last30mn.setMinutes(last30mn.getMinutes() - 30);
      _this11.periodBeginAsString = last30mn.toISOString().substring(0, 11) + last30mn.toLocaleTimeString().substring(0, 5);
      _this11.periodDurationAsString = '1';
      yield _this11.onPeriodBeginChange(null);
      _this11.refreshManager.refresh(false, true);
    })();
  }
  getPercentOfImages() {
    if (!this.countsPeriod.percentImages?.length) {
      return 0;
    }
    const duringPeriod = this.countsPeriod.percentImages.filter(a => this.periodBegin.getTime() <= new Date(a.name).getTime() && new Date(a.name).getTime() <= this.periodEnd.getTime());
    const summed = duringPeriod.reduce((a, b) => a + (b.x ?? 0), 0);
    return Math.round(summed / duringPeriod.length);
  }
  getPercentOfComputations() {
    const timeline = this.refreshManager.getTimelineFrameSet();
    if (!timeline?.length) {
      return 0;
    }
    const timelineWithComputation = timeline.filter(a => !!a.rainComputationId);
    const ratio = timelineWithComputation.length / timeline.length;
    return Math.round(ratio * 100);
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
    this.periodBegin = new Date(this.storage.get('raain-periodBegin'));
    this.periodEnd = new Date(this.storage.get('raain-periodEnd'));
    this.periodBeginAsString = RaainDetailsComponent.PeriodDisplay(this.periodBegin);
    this.periodEndAsString = RaainDetailsComponent.PeriodDisplay(this.periodEnd);
    this.periodDurationAsString = '' + (this.periodEnd.getTime() - this.periodBegin.getTime()) / (60 * 60000);
    this.dateShown = this.periodBegin;
    this.refreshInProgress = false;
    this.compareManager?.cleanAll();
    this.refreshManager?.cleanAll();
  }
  init() {
    var _this12 = this;
    return (0,_opt_atlassian_pipelines_agent_build_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_0__["default"])(function* () {
      _this12.cleanAll();
      yield _this12.initRain();
    })();
  }
  initRain() {
    var _this13 = this;
    return (0,_opt_atlassian_pipelines_agent_build_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_0__["default"])(function* () {
      if (!_this13.rainNode) {
        return;
      }
      _this13.isAdmin = _this13.profileService.isAdmin();
      _this13.refreshManager.rainNode = _this13.rainNode;
      _this13.compareManager.rainNode = _this13.rainNode;
      _this13.refreshManager.setMethods(_this13.onRefreshInProgress.bind(_this13), _this13.onRefreshDone.bind(_this13), _this13.onFetchDone.bind(_this13));
      const center = _this13.rainNode.getCenter();
      _this13.coordinates = new raain_ui__WEBPACK_IMPORTED_MODULE_2__.MapLatLng(center.lat, center.lng);
      _this13.teamNode = yield _this13.profileService.getTeam(_this13.rainNode.getLink(raain_model__WEBPACK_IMPORTED_MODULE_1__.TeamNode.TYPE).getId());
      if (_this13.periodBegin && _this13.periodEnd) {
        _this13.refreshManager.period = {
          begin: _this13.periodBegin,
          end: _this13.periodEnd
        };
        yield _this13.refreshManager.refresh(false, _this13.toggleAdmin);
      }
    })();
  }
  onRefreshInProgress(countPeriods, timeframeDates) {
    var _this14 = this;
    return (0,_opt_atlassian_pipelines_agent_build_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_0__["default"])(function* () {
      _this14.refreshInProgress = true;
      _this14.countsPeriod = countPeriods;
      _this14.timeframeDates = timeframeDates;
    })();
  }
  onRefreshDone(timeframeDates) {
    var _this15 = this;
    return (0,_opt_atlassian_pipelines_agent_build_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_0__["default"])(function* () {
      _this15.timeframeDates = timeframeDates;
      _this15.refreshInProgress = false;
    })();
  }
  onFetchDone(timeframeContainers) {
    var _this16 = this;
    return (0,_opt_atlassian_pipelines_agent_build_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_0__["default"])(function* () {
      if (timeframeContainers) {
        _this16.timeframeContainers = timeframeContainers;
      }
    })();
  }
  change(changes) {
    var _this17 = this;
    return (0,_opt_atlassian_pipelines_agent_build_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_0__["default"])(function* () {
      yield _this17.init();
    })();
  }
  static {
    this.ɵfac = function RaainDetailsComponent_Factory(t) {
      return new (t || RaainDetailsComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵdirectiveInject"](_storage_service__WEBPACK_IMPORTED_MODULE_4__.Storage));
    };
  }
  static {
    this.ɵcmp = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵdefineComponent"]({
      type: RaainDetailsComponent,
      selectors: [["raain-details"]],
      inputs: {
        toggleAdmin: "toggleAdmin",
        rainNode: "rainNode",
        compareManager: "compareManager",
        refreshManager: "refreshManager",
        profileService: "profileService",
        radarService: "radarService",
        toggleCumulative: "toggleCumulative"
      },
      features: [_angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵNgOnChangesFeature"]],
      decls: 1,
      vars: 1,
      consts: [["class", "raain-details-container", 4, "ngIf"], [1, "raain-details-container"], [1, "period-card"], [1, "period-controls"], [1, "period-row"], ["fill", "outline", 1, "now-button", 3, "click"], ["name", "time-outline", "slot", "start"], [1, "period-start", "ion-hide-md-down"], ["type", "datetime-local", 1, "datetime-input", 3, "value", "change"], [1, "period-duration", "ion-hide-md-down"], ["id", "periodDuration", "interface", "popover", 1, "duration-select", 3, "ngModel", "ionDismiss", "ngModelChange"], ["value", "0.25"], ["value", "0.5"], ["value", "1"], ["value", "2"], ["value", "3"], ["value", "4"], ["value", "5"], ["value", "6"], ["value", "8"], ["value", "10"], ["value", "12"], ["value", "24", 4, "ngIf"], ["id", "all-dates", "slot", "end"], [1, "toggle-label"], [3, "ngModel", "checked", "ionChange", "ngModelChange"], [1, "hidden-label"], ["class", "period-controls", 4, "ngIf"], [1, "map-card"], [1, "map-content"], ["id", "progressAndRefresh"], ["size", "12", "size-md", "6"], ["size", "12", "size-md", "6", 1, "ion-text-right"], [1, "ion-margin-end"], [4, "ngIf"], [1, "refresh-button", 3, "disabled", "click"], ["color", "primary", 3, "buffer", "value", 4, "ngIf"], ["class", "gauge-card", 4, "ngIf"], ["value", "24"], [3, "currentHeight", "fetchData", "points", "changedDate"], ["class", "progress-indicator", 4, "ngIf"], [1, "progress-indicator"], ["color", "primary", 3, "buffer", "value"], ["size-lg", "7", 1, "map-column"], [1, "map-container"], [3, "coordinates", "currentHeight", "defaultDate", "markers", "showCumulative", "sumFn", "sumValues", "timeframeContainers", "timeframeDates", "changedDate", "changedSum", "selectedMarker"], [1, "data-column"], [1, "technical-details"], [1, "details-content"], [1, "detail-row"], [1, "detail-label"], [1, "detail-value"], ["size-lg", "5", 1, "data-column"], [1, "data-panel"], [1, "compare-stack"], [3, "compareManager", "cumulative", "selectedPoint"], [1, "detail-row", 3, "ngClass"], [1, "gauge-card"], ["name", "analytics-outline"], [3, "currentHeight", "focusDate", "focusRange", "points", "withoutAll"]],
      template: function RaainDetailsComponent_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵtemplate"](0, RaainDetailsComponent_div_0_Template, 63, 15, "div", 0);
        }
        if (rf & 2) {
          _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵproperty"]("ngIf", ctx.rainNode);
        }
      },
      dependencies: [_angular_common__WEBPACK_IMPORTED_MODULE_10__.NgClass, _angular_common__WEBPACK_IMPORTED_MODULE_10__.NgIf, _angular_forms__WEBPACK_IMPORTED_MODULE_11__.NgControlStatus, _angular_forms__WEBPACK_IMPORTED_MODULE_11__.NgModel, _ionic_angular__WEBPACK_IMPORTED_MODULE_12__.IonButton, _ionic_angular__WEBPACK_IMPORTED_MODULE_12__.IonCard, _ionic_angular__WEBPACK_IMPORTED_MODULE_12__.IonCardContent, _ionic_angular__WEBPACK_IMPORTED_MODULE_12__.IonCardHeader, _ionic_angular__WEBPACK_IMPORTED_MODULE_12__.IonCardTitle, _ionic_angular__WEBPACK_IMPORTED_MODULE_12__.IonCol, _ionic_angular__WEBPACK_IMPORTED_MODULE_12__.IonGrid, _ionic_angular__WEBPACK_IMPORTED_MODULE_12__.IonIcon, _ionic_angular__WEBPACK_IMPORTED_MODULE_12__.IonLabel, _ionic_angular__WEBPACK_IMPORTED_MODULE_12__.IonProgressBar, _ionic_angular__WEBPACK_IMPORTED_MODULE_12__.IonRow, _ionic_angular__WEBPACK_IMPORTED_MODULE_12__.IonSelect, _ionic_angular__WEBPACK_IMPORTED_MODULE_12__.IonSelectOption, _ionic_angular__WEBPACK_IMPORTED_MODULE_12__.IonToggle, _ionic_angular__WEBPACK_IMPORTED_MODULE_12__.BooleanValueAccessor, _ionic_angular__WEBPACK_IMPORTED_MODULE_12__.SelectValueAccessor, _raain_map_raain_map_component__WEBPACK_IMPORTED_MODULE_5__.RaainMapComponent, _raain_compare_stack_raain_compare_stack_component__WEBPACK_IMPORTED_MODULE_6__.RaainCompareStackComponent, _raain_date_focus_raain_date_focus_component__WEBPACK_IMPORTED_MODULE_7__.RaainDateFocusComponent, _raain_date_dynamic_raain_date_dynamic_component__WEBPACK_IMPORTED_MODULE_8__.RaainDateDynamicComponent, _angular_common__WEBPACK_IMPORTED_MODULE_10__.DatePipe],
      styles: [".raain-details-container[_ngcontent-%COMP%] {\n  max-width: var(--app-max-width);\n  margin: 0 auto;\n  padding: 0 0 24px;\n}\n\n.raain-details-card[_ngcontent-%COMP%] {\n  width: 100%;\n  margin-bottom: 20px;\n}\n.raain-details-card[_ngcontent-%COMP%]   ion-card-header[_ngcontent-%COMP%] {\n  border-bottom: 1px solid rgba(var(--ion-color-medium-rgb), 0.2);\n}\n.raain-details-card[_ngcontent-%COMP%]   ion-card-header[_ngcontent-%COMP%]   ion-card-title[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: center;\n}\n.raain-details-card[_ngcontent-%COMP%]   ion-card-header[_ngcontent-%COMP%]   ion-card-title[_ngcontent-%COMP%]   ion-icon[_ngcontent-%COMP%] {\n  margin-right: 8px;\n  color: var(--ion-color-primary);\n}\n\n.node-info-card[_ngcontent-%COMP%] {\n  background-color: var(--ion-color-light);\n}\n.node-info-card[_ngcontent-%COMP%]   .node-header[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: center;\n}\n.node-info-card[_ngcontent-%COMP%]   .node-header[_ngcontent-%COMP%]   .node-status[_ngcontent-%COMP%] {\n  margin-right: 16px;\n}\n.node-info-card[_ngcontent-%COMP%]   .node-header[_ngcontent-%COMP%]   .node-status[_ngcontent-%COMP%]   ion-icon[_ngcontent-%COMP%] {\n  font-size: 24px;\n}\n.node-info-card[_ngcontent-%COMP%]   .node-header[_ngcontent-%COMP%]   .node-titles[_ngcontent-%COMP%] {\n  flex: 1;\n}\n.node-info-card[_ngcontent-%COMP%]   .node-header[_ngcontent-%COMP%]   .node-titles[_ngcontent-%COMP%]   ion-card-title[_ngcontent-%COMP%] {\n  margin: 0;\n  font-size: 1.4rem;\n  font-weight: 600;\n  color: var(--ion-color-dark);\n}\n.node-info-card[_ngcontent-%COMP%]   .node-header[_ngcontent-%COMP%]   .node-titles[_ngcontent-%COMP%]   ion-card-subtitle[_ngcontent-%COMP%] {\n  padding-left: 0;\n  margin: 4px 0 0;\n  font-size: 0.9rem;\n  color: var(--ion-color-medium);\n}\n\n.count-map-card[_ngcontent-%COMP%] {\n  background-color: var(--ion-color-light);\n}\n\n.period-card[_ngcontent-%COMP%] {\n  background-color: var(--ion-color-light);\n}\n.period-card[_ngcontent-%COMP%]   ion-card-title[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: center;\n}\n.period-card[_ngcontent-%COMP%]   ion-card-title[_ngcontent-%COMP%]   ion-icon[_ngcontent-%COMP%] {\n  margin-right: 8px;\n  color: var(--ion-color-primary);\n  font-size: 20px;\n}\n\n.period-row[_ngcontent-%COMP%] {\n  display: flex;\n  flex-wrap: wrap;\n  align-items: center;\n  gap: 16px;\n  position: relative;\n}\n\n.now-button[_ngcontent-%COMP%] {\n  min-width: 100px;\n}\n\n#all-dates[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: center;\n  margin-left: auto;\n}\n#all-dates[_ngcontent-%COMP%]   .toggle-label[_ngcontent-%COMP%] {\n  margin-right: 8px;\n  white-space: nowrap;\n}\n\n.refresh-button[_ngcontent-%COMP%]   ion-icon[_ngcontent-%COMP%] {\n  margin-right: 4px;\n  color: var(--ion-color-light);\n}\n\n.period-start[_ngcontent-%COMP%], .period-duration[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: center;\n}\n\n.hidden-label[_ngcontent-%COMP%] {\n  display: none;\n}\n\n.datetime-input[_ngcontent-%COMP%], #periodDuration[_ngcontent-%COMP%], .duration-select[_ngcontent-%COMP%] {\n  padding: 8px 12px;\n  border: 1px solid rgba(var(--ion-color-medium-rgb), 0.3);\n  border-radius: var(--ion-border-radius);\n  background-color: var(--ion-color-light);\n  font-family: var(--ion-font-family);\n}\n.datetime-input[_ngcontent-%COMP%]:focus, #periodDuration[_ngcontent-%COMP%]:focus, .duration-select[_ngcontent-%COMP%]:focus {\n  outline: none;\n  border-color: var(--ion-color-primary);\n}\n\n#periodDuration[_ngcontent-%COMP%], .duration-select[_ngcontent-%COMP%] {\n  min-width: 150px;\n}\n\n.gauge-card[_ngcontent-%COMP%] {\n  background-color: var(--ion-color-light);\n}\n.gauge-card[_ngcontent-%COMP%]   ion-card-title[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: center;\n}\n.gauge-card[_ngcontent-%COMP%]   ion-card-title[_ngcontent-%COMP%]   ion-icon[_ngcontent-%COMP%] {\n  margin-right: 8px;\n  color: var(--ion-color-primary);\n  font-size: 20px;\n}\n\nraain-compare-stack[_ngcontent-%COMP%] {\n  width: 100%;\n  display: block;\n}\n\n@media (max-width: 768px) {\n  .period-row[_ngcontent-%COMP%] {\n    flex-direction: row;\n    justify-content: space-between;\n    align-items: center;\n  }\n  #all-dates[_ngcontent-%COMP%] {\n    margin-left: auto;\n    padding-left: 8px;\n  }\n  #all-dates[_ngcontent-%COMP%]   .toggle-label[_ngcontent-%COMP%] {\n    font-size: 0.9rem;\n  }\n  .map-header[_ngcontent-%COMP%] {\n    flex-direction: row;\n    justify-content: space-between;\n    align-items: center;\n    gap: 16px;\n  }\n}\n/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8uL3NyYy9jb3JlL3NoYXJlZC9yYWFpbi1kZXRhaWxzL3JhYWluLWRldGFpbHMuY29tcG9uZW50LnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQ0E7RUFDRSwrQkFBQTtFQUNBLGNBQUE7RUFDQSxpQkFBQTtBQUFGOztBQUlBO0VBQ0UsV0FBQTtFQUNBLG1CQUFBO0FBREY7QUFHRTtFQUNFLCtEQUFBO0FBREo7QUFHSTtFQUNFLGFBQUE7RUFDQSxtQkFBQTtBQUROO0FBR007RUFDRSxpQkFBQTtFQUNBLCtCQUFBO0FBRFI7O0FBUUE7RUFDRSx3Q0FBQTtBQUxGO0FBT0U7RUFDRSxhQUFBO0VBQ0EsbUJBQUE7QUFMSjtBQU9JO0VBQ0Usa0JBQUE7QUFMTjtBQU9NO0VBQ0UsZUFBQTtBQUxSO0FBU0k7RUFDRSxPQUFBO0FBUE47QUFTTTtFQUNFLFNBQUE7RUFDQSxpQkFBQTtFQUNBLGdCQUFBO0VBQ0EsNEJBQUE7QUFQUjtBQVVNO0VBQ0UsZUFBQTtFQUNBLGVBQUE7RUFDQSxpQkFBQTtFQUNBLDhCQUFBO0FBUlI7O0FBZUE7RUFDRSx3Q0FBQTtBQVpGOztBQWdCQTtFQUNFLHdDQUFBO0FBYkY7QUFlRTtFQUNFLGFBQUE7RUFDQSxtQkFBQTtBQWJKO0FBZUk7RUFDRSxpQkFBQTtFQUNBLCtCQUFBO0VBQ0EsZUFBQTtBQWJOOztBQWtCQTtFQUNFLGFBQUE7RUFDQSxlQUFBO0VBQ0EsbUJBQUE7RUFDQSxTQUFBO0VBQ0Esa0JBQUE7QUFmRjs7QUFrQkE7RUFDRSxnQkFBQTtBQWZGOztBQWtCQTtFQUNFLGFBQUE7RUFDQSxtQkFBQTtFQUNBLGlCQUFBO0FBZkY7QUFpQkU7RUFDRSxpQkFBQTtFQUNBLG1CQUFBO0FBZko7O0FBb0JFO0VBQ0UsaUJBQUE7RUFDQSw2QkFBQTtBQWpCSjs7QUFxQkE7RUFDRSxhQUFBO0VBQ0EsbUJBQUE7QUFsQkY7O0FBcUJBO0VBQ0UsYUFBQTtBQWxCRjs7QUFzQkE7RUFDRSxpQkFBQTtFQUNBLHdEQUFBO0VBQ0EsdUNBQUE7RUFDQSx3Q0FBQTtFQUNBLG1DQUFBO0FBbkJGO0FBcUJFO0VBQ0UsYUFBQTtFQUNBLHNDQUFBO0FBbkJKOztBQXVCQTtFQUNFLGdCQUFBO0FBcEJGOztBQTBCQTtFQUNFLHdDQUFBO0FBdkJGO0FBeUJFO0VBQ0UsYUFBQTtFQUNBLG1CQUFBO0FBdkJKO0FBeUJJO0VBQ0UsaUJBQUE7RUFDQSwrQkFBQTtFQUNBLGVBQUE7QUF2Qk47O0FBK0JBO0VBQ0UsV0FBQTtFQUNBLGNBQUE7QUE1QkY7O0FBZ0NBO0VBQ0U7SUFDRSxtQkFBQTtJQUNBLDhCQUFBO0lBQ0EsbUJBQUE7RUE3QkY7RUFnQ0E7SUFDRSxpQkFBQTtJQUNBLGlCQUFBO0VBOUJGO0VBZ0NFO0lBQ0UsaUJBQUE7RUE5Qko7RUFrQ0E7SUFDRSxtQkFBQTtJQUNBLDhCQUFBO0lBQ0EsbUJBQUE7SUFDQSxTQUFBO0VBaENGO0FBQ0YiLCJzb3VyY2VzQ29udGVudCI6WyIvLyBNYWluIGNvbnRhaW5lclxuLnJhYWluLWRldGFpbHMtY29udGFpbmVyIHtcbiAgbWF4LXdpZHRoOiB2YXIoLS1hcHAtbWF4LXdpZHRoKTtcbiAgbWFyZ2luOiAwIGF1dG87XG4gIHBhZGRpbmc6IDAgMCAyNHB4O1xufVxuXG4vLyBDYXJkIHN0eWxlcyBzcGVjaWZpYyB0byB0aGlzIGNvbXBvbmVudFxuLnJhYWluLWRldGFpbHMtY2FyZCB7XG4gIHdpZHRoOiAxMDAlO1xuICBtYXJnaW4tYm90dG9tOiAyMHB4O1xuXG4gIGlvbi1jYXJkLWhlYWRlciB7XG4gICAgYm9yZGVyLWJvdHRvbTogMXB4IHNvbGlkIHJnYmEodmFyKC0taW9uLWNvbG9yLW1lZGl1bS1yZ2IpLCAwLjIpO1xuXG4gICAgaW9uLWNhcmQtdGl0bGUge1xuICAgICAgZGlzcGxheTogZmxleDtcbiAgICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG5cbiAgICAgIGlvbi1pY29uIHtcbiAgICAgICAgbWFyZ2luLXJpZ2h0OiA4cHg7XG4gICAgICAgIGNvbG9yOiB2YXIoLS1pb24tY29sb3ItcHJpbWFyeSk7XG4gICAgICB9XG4gICAgfVxuICB9XG59XG5cbi8vIE5vZGUgaW5mbyBjYXJkXG4ubm9kZS1pbmZvLWNhcmQge1xuICBiYWNrZ3JvdW5kLWNvbG9yOiB2YXIoLS1pb24tY29sb3ItbGlnaHQpO1xuXG4gIC5ub2RlLWhlYWRlciB7XG4gICAgZGlzcGxheTogZmxleDtcbiAgICBhbGlnbi1pdGVtczogY2VudGVyO1xuXG4gICAgLm5vZGUtc3RhdHVzIHtcbiAgICAgIG1hcmdpbi1yaWdodDogMTZweDtcblxuICAgICAgaW9uLWljb24ge1xuICAgICAgICBmb250LXNpemU6IDI0cHg7XG4gICAgICB9XG4gICAgfVxuXG4gICAgLm5vZGUtdGl0bGVzIHtcbiAgICAgIGZsZXg6IDE7XG5cbiAgICAgIGlvbi1jYXJkLXRpdGxlIHtcbiAgICAgICAgbWFyZ2luOiAwO1xuICAgICAgICBmb250LXNpemU6IDEuNHJlbTtcbiAgICAgICAgZm9udC13ZWlnaHQ6IDYwMDtcbiAgICAgICAgY29sb3I6IHZhcigtLWlvbi1jb2xvci1kYXJrKTtcbiAgICAgIH1cblxuICAgICAgaW9uLWNhcmQtc3VidGl0bGUge1xuICAgICAgICBwYWRkaW5nLWxlZnQ6IDA7XG4gICAgICAgIG1hcmdpbjogNHB4IDAgMDtcbiAgICAgICAgZm9udC1zaXplOiAwLjlyZW07XG4gICAgICAgIGNvbG9yOiB2YXIoLS1pb24tY29sb3ItbWVkaXVtKTtcbiAgICAgIH1cbiAgICB9XG4gIH1cbn1cblxuLy8gQ291bnQgbWFwIGNhcmRcbi5jb3VudC1tYXAtY2FyZCB7XG4gIGJhY2tncm91bmQtY29sb3I6IHZhcigtLWlvbi1jb2xvci1saWdodCk7XG59XG5cbi8vIFBlcmlvZCBjYXJkIGFuZCBjb250cm9sc1xuLnBlcmlvZC1jYXJkIHtcbiAgYmFja2dyb3VuZC1jb2xvcjogdmFyKC0taW9uLWNvbG9yLWxpZ2h0KTtcblxuICBpb24tY2FyZC10aXRsZSB7XG4gICAgZGlzcGxheTogZmxleDtcbiAgICBhbGlnbi1pdGVtczogY2VudGVyO1xuXG4gICAgaW9uLWljb24ge1xuICAgICAgbWFyZ2luLXJpZ2h0OiA4cHg7XG4gICAgICBjb2xvcjogdmFyKC0taW9uLWNvbG9yLXByaW1hcnkpO1xuICAgICAgZm9udC1zaXplOiAyMHB4O1xuICAgIH1cbiAgfVxufVxuXG4ucGVyaW9kLXJvdyB7XG4gIGRpc3BsYXk6IGZsZXg7XG4gIGZsZXgtd3JhcDogd3JhcDtcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbiAgZ2FwOiAxNnB4O1xuICBwb3NpdGlvbjogcmVsYXRpdmU7XG59XG5cbi5ub3ctYnV0dG9uIHtcbiAgbWluLXdpZHRoOiAxMDBweDtcbn1cblxuI2FsbC1kYXRlcyB7XG4gIGRpc3BsYXk6IGZsZXg7XG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG4gIG1hcmdpbi1sZWZ0OiBhdXRvO1xuXG4gIC50b2dnbGUtbGFiZWwge1xuICAgIG1hcmdpbi1yaWdodDogOHB4O1xuICAgIHdoaXRlLXNwYWNlOiBub3dyYXA7XG4gIH1cbn1cblxuLnJlZnJlc2gtYnV0dG9uIHtcbiAgaW9uLWljb24ge1xuICAgIG1hcmdpbi1yaWdodDogNHB4O1xuICAgIGNvbG9yOiB2YXIoLS1pb24tY29sb3ItbGlnaHQpO1xuICB9XG59XG5cbi5wZXJpb2Qtc3RhcnQsIC5wZXJpb2QtZHVyYXRpb24ge1xuICBkaXNwbGF5OiBmbGV4O1xuICBhbGlnbi1pdGVtczogY2VudGVyO1xufVxuXG4uaGlkZGVuLWxhYmVsIHtcbiAgZGlzcGxheTogbm9uZTtcbn1cblxuLy8gRm9ybSBpbnB1dHNcbi5kYXRldGltZS1pbnB1dCwgI3BlcmlvZER1cmF0aW9uLCAuZHVyYXRpb24tc2VsZWN0IHtcbiAgcGFkZGluZzogOHB4IDEycHg7XG4gIGJvcmRlcjogMXB4IHNvbGlkIHJnYmEodmFyKC0taW9uLWNvbG9yLW1lZGl1bS1yZ2IpLCAwLjMpO1xuICBib3JkZXItcmFkaXVzOiB2YXIoLS1pb24tYm9yZGVyLXJhZGl1cyk7XG4gIGJhY2tncm91bmQtY29sb3I6IHZhcigtLWlvbi1jb2xvci1saWdodCk7XG4gIGZvbnQtZmFtaWx5OiB2YXIoLS1pb24tZm9udC1mYW1pbHkpO1xuXG4gICY6Zm9jdXMge1xuICAgIG91dGxpbmU6IG5vbmU7XG4gICAgYm9yZGVyLWNvbG9yOiB2YXIoLS1pb24tY29sb3ItcHJpbWFyeSk7XG4gIH1cbn1cblxuI3BlcmlvZER1cmF0aW9uLCAuZHVyYXRpb24tc2VsZWN0IHtcbiAgbWluLXdpZHRoOiAxNTBweDtcbn1cblxuLy8gTWFwIGNhcmRcblxuLy8gR2F1Z2UgY2FyZFxuLmdhdWdlLWNhcmQge1xuICBiYWNrZ3JvdW5kLWNvbG9yOiB2YXIoLS1pb24tY29sb3ItbGlnaHQpO1xuXG4gIGlvbi1jYXJkLXRpdGxlIHtcbiAgICBkaXNwbGF5OiBmbGV4O1xuICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG5cbiAgICBpb24taWNvbiB7XG4gICAgICBtYXJnaW4tcmlnaHQ6IDhweDtcbiAgICAgIGNvbG9yOiB2YXIoLS1pb24tY29sb3ItcHJpbWFyeSk7XG4gICAgICBmb250LXNpemU6IDIwcHg7XG4gICAgfVxuICB9XG59XG5cbi8vIFByb2dyZXNzIGJhciBzdHlsZXMgYXJlIG5vdyBpbiBnbG9iYWwuc2Nzc1xuXG4vLyBDb21wb25lbnQgc3R5bGVzXG5yYWFpbi1jb21wYXJlLXN0YWNrIHtcbiAgd2lkdGg6IDEwMCU7XG4gIGRpc3BsYXk6IGJsb2NrO1xufVxuXG4vLyBSZXNwb25zaXZlIGFkanVzdG1lbnRzIC0gc2ltcGxpZmllZFxuQG1lZGlhIChtYXgtd2lkdGg6IDc2OHB4KSB7XG4gIC5wZXJpb2Qtcm93IHtcbiAgICBmbGV4LWRpcmVjdGlvbjogcm93O1xuICAgIGp1c3RpZnktY29udGVudDogc3BhY2UtYmV0d2VlbjtcbiAgICBhbGlnbi1pdGVtczogY2VudGVyO1xuICB9XG5cbiAgI2FsbC1kYXRlcyB7XG4gICAgbWFyZ2luLWxlZnQ6IGF1dG87XG4gICAgcGFkZGluZy1sZWZ0OiA4cHg7XG5cbiAgICAudG9nZ2xlLWxhYmVsIHtcbiAgICAgIGZvbnQtc2l6ZTogMC45cmVtO1xuICAgIH1cbiAgfVxuXG4gIC5tYXAtaGVhZGVyIHtcbiAgICBmbGV4LWRpcmVjdGlvbjogcm93O1xuICAgIGp1c3RpZnktY29udGVudDogc3BhY2UtYmV0d2VlbjtcbiAgICBhbGlnbi1pdGVtczogY2VudGVyO1xuICAgIGdhcDogMTZweDtcbiAgfVxufVxuIl0sInNvdXJjZVJvb3QiOiIifQ== */"]
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
function RaainMapComponent_div_10_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](0, "div");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](1, "\u00A0");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
  }
}
function RaainMapComponent_ion_col_11_ion_item_1_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](0, "ion-item")(1, "ion-button", 21);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵpipe"](3, "date");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]()();
  }
  if (rf & 2) {
    const ctx_r8 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtextInterpolate1"](" From ", _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵpipeBind2"](3, 1, ctx_r8.cumulativeDateFrom, "yyyy-MM-dd HH:mm"), " to ");
  }
}
function RaainMapComponent_ion_col_11_ion_item_2_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](0, "ion-item");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](1, "\u00A0");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
  }
}
function RaainMapComponent_ion_col_11_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](0, "ion-col", 20);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtemplate"](1, RaainMapComponent_ion_col_11_ion_item_1_Template, 4, 4, "ion-item", 7);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtemplate"](2, RaainMapComponent_ion_col_11_ion_item_2_Template, 2, 0, "ion-item", 7);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
  }
  if (rf & 2) {
    const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("ngIf", ctx_r1.timeframeContainers == null ? null : ctx_r1.timeframeContainers.containers == null ? null : ctx_r1.timeframeContainers.containers.length);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("ngIf", !(ctx_r1.timeframeContainers == null ? null : ctx_r1.timeframeContainers.containers == null ? null : ctx_r1.timeframeContainers.containers.length));
  }
}
function RaainMapComponent_div_14_ion_select_option_2_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](0, "ion-select-option", 25);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵpipe"](2, "date");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
  }
  if (rf & 2) {
    const dateToSelect_r11 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵpropertyInterpolate"]("value", dateToSelect_r11.toISOString());
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtextInterpolate1"](" ", _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵpipeBind2"](2, 2, dateToSelect_r11, "yyyy-MM-dd HH:mm"), " ");
  }
}
function RaainMapComponent_div_14_Template(rf, ctx) {
  if (rf & 1) {
    const _r13 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](0, "div", 22)(1, "ion-select", 23);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵlistener"]("ionDismiss", function RaainMapComponent_div_14_Template_ion_select_ionDismiss_1_listener() {
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵrestoreView"](_r13);
      const ctx_r12 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵnextContext"]();
      return _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵresetView"](ctx_r12.showTimeframe());
    })("ngModelChange", function RaainMapComponent_div_14_Template_ion_select_ngModelChange_1_listener($event) {
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵrestoreView"](_r13);
      const ctx_r14 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵnextContext"]();
      return _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵresetView"](ctx_r14.dateToShowAsString = $event);
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtemplate"](2, RaainMapComponent_div_14_ion_select_option_2_Template, 3, 5, "ion-select-option", 24);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]()();
  }
  if (rf & 2) {
    const ctx_r2 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵpropertyInterpolate"]("value", ctx_r2.dateToShowAsString);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("ngModel", ctx_r2.dateToShowAsString);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("ngForOf", ctx_r2.possibleDates);
  }
}
function RaainMapComponent_div_15_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](0, "div");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](1, "\u00A0");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
  }
}
function RaainMapComponent_ion_button_16_Template(rf, ctx) {
  if (rf & 1) {
    const _r16 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](0, "ion-button", 26)(1, "ion-toggle", 27);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵlistener"]("ionChange", function RaainMapComponent_ion_button_16_Template_ion_toggle_ionChange_1_listener() {
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵrestoreView"](_r16);
      const ctx_r15 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵnextContext"]();
      return _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵresetView"](ctx_r15.changeShowSpeedMarkers());
    })("ngModelChange", function RaainMapComponent_ion_button_16_Template_ion_toggle_ngModelChange_1_listener($event) {
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵrestoreView"](_r16);
      const ctx_r17 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵnextContext"]();
      return _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵresetView"](ctx_r17.showSpeedMarkers = $event);
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]()();
  }
  if (rf & 2) {
    const ctx_r4 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("ngModel", ctx_r4.showSpeedMarkers)("checked", ctx_r4.showSpeedMarkers);
  }
}
function RaainMapComponent_ion_col_17_Template(rf, ctx) {
  if (rf & 1) {
    const _r19 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](0, "ion-col", 20)(1, "ion-range", 28);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵlistener"]("ionChange", function RaainMapComponent_ion_col_17_Template_ion_range_ionChange_1_listener() {
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵrestoreView"](_r19);
      const ctx_r18 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵnextContext"]();
      return _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵresetView"](ctx_r18.changeAlpha());
    })("ngModelChange", function RaainMapComponent_ion_col_17_Template_ion_range_ngModelChange_1_listener($event) {
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵrestoreView"](_r19);
      const ctx_r20 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵnextContext"]();
      return _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵresetView"](ctx_r20.alpha = $event);
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelement"](2, "br");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](3, "ion-buttons")(4, "ion-button", 29);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](5, " Gauges ");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](6, "ion-toggle", 27);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵlistener"]("ionChange", function RaainMapComponent_ion_col_17_Template_ion_toggle_ionChange_6_listener() {
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵrestoreView"](_r19);
      const ctx_r21 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵnextContext"]();
      return _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵresetView"](ctx_r21.changeShowMarkers());
    })("ngModelChange", function RaainMapComponent_ion_col_17_Template_ion_toggle_ngModelChange_6_listener($event) {
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵrestoreView"](_r19);
      const ctx_r22 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵnextContext"]();
      return _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵresetView"](ctx_r22.showMarkers = $event);
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](7, "ion-button", 29);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](8, " Speeds ");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](9, "ion-toggle", 27);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵlistener"]("ionChange", function RaainMapComponent_ion_col_17_Template_ion_toggle_ionChange_9_listener() {
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵrestoreView"](_r19);
      const ctx_r23 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵnextContext"]();
      return _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵresetView"](ctx_r23.changeShowSpeedMarkers());
    })("ngModelChange", function RaainMapComponent_ion_col_17_Template_ion_toggle_ngModelChange_9_listener($event) {
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵrestoreView"](_r19);
      const ctx_r24 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵnextContext"]();
      return _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵresetView"](ctx_r24.showSpeedMarkers = $event);
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]()()()();
  }
  if (rf & 2) {
    const ctx_r5 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("ngModel", ctx_r5.alpha)("max", 1)("min", 0.2)("snaps", true)("step", 0.2)("ticks", true);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](5);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("ngModel", ctx_r5.showMarkers)("checked", ctx_r5.showMarkers);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("ngModel", ctx_r5.showSpeedMarkers)("checked", ctx_r5.showSpeedMarkers);
  }
}
class RaainMapComponent {
  constructor(ngZone, storage) {
    this.ngZone = ngZone;
    this.storage = storage;
    this.autoplay = false;
    this.showMarkers = true;
    this.showSpeedMarkers = true;
    this.showCumulative = false;
    this.timeframeDates = [];
    this.selectedMarker = new _angular_core__WEBPACK_IMPORTED_MODULE_3__.EventEmitter();
    this.changedDate = new _angular_core__WEBPACK_IMPORTED_MODULE_3__.EventEmitter();
    this.changedSum = new _angular_core__WEBPACK_IMPORTED_MODULE_3__.EventEmitter();
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
    this.createScale(factory, this.showCumulative ? 'mm' : 'mm/h');
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
    this.alpha = this.storage.get('raain-map-alpha', 0);
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
      this.sumResult = `${average} (${Math.round(sumOfPixels)}mm for ${Math.round(this.pixelsCount)} pixels)`;
    } else {
      this.sumResult = 'NA';
    }
    this.changedSum.emit(this.sumResult);
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
    const periodDurationInHours = this.storage.get('raain-periodDurationInHours', 1) * 60 * 60 * 1000;
    this.cumulativeDateFrom.setTime(this.cumulativeDateFrom.getTime() - periodDurationInHours);
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
      return new (t || RaainMapComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵdirectiveInject"](_angular_core__WEBPACK_IMPORTED_MODULE_3__.NgZone), _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵdirectiveInject"](_storage_service__WEBPACK_IMPORTED_MODULE_2__.Storage));
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
        showCumulative: "showCumulative",
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
      decls: 30,
      vars: 14,
      consts: [[1, "ion-align-items-end"], ["id", "map-buttons", "size-xs", "3"], ["color", "medium", "fill", "outline", "shape", "round", 3, "click"], ["name", "play-back", "slot", "icon-only"], ["color", "medium", "fill", "outline", "shape", "round", 3, "hidden", "click"], ["name", "stop", "slot", "icon-only"], ["name", "play-forward", "slot", "icon-only"], [4, "ngIf"], ["class", "ion-hide-md-down", "size-xs", "4", 4, "ngIf"], ["id", "map-date", "size-xs", "5", 1, "ion-text-start"], ["slot", "start", 4, "ngIf"], ["color", "medium", "fill", "clear", "slot", "end", 4, "ngIf"], ["size-lg", "10", "size-xs", "12"], ["id", "map-container"], ["id", "map-div"], ["primaryMap", ""], ["size-lg", "2", 1, "ion-hide-xl-down"], ["canvasScale", ""], ["size-sm", "7", 1, "ion-hide-sm-down"], [3, "innerHTML"], ["size-xs", "4", 1, "ion-hide-md-down"], ["color", "medium", "fill", "clear", 2, "font-size", "medium"], ["slot", "start"], ["interface", "popover", "placeholder", "Period", 3, "ngModel", "value", "ionDismiss", "ngModelChange"], [3, "value", 4, "ngFor", "ngForOf"], [3, "value"], ["color", "medium", "fill", "clear", "slot", "end"], ["color", "medium", 3, "ngModel", "checked", "ionChange", "ngModelChange"], ["color", "medium", 3, "ngModel", "max", "min", "snaps", "step", "ticks", "ionChange", "ngModelChange"], ["color", "medium", "fill", "clear"]],
      template: function RaainMapComponent_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](0, "ion-grid")(1, "ion-row", 0)(2, "ion-col", 1)(3, "div")(4, "ion-button", 2);
          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵlistener"]("click", function RaainMapComponent_Template_ion_button_click_4_listener() {
            return ctx.previous();
          });
          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelement"](5, "ion-icon", 3);
          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](6, "ion-button", 4);
          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵlistener"]("click", function RaainMapComponent_Template_ion_button_click_6_listener() {
            return ctx.stop();
          });
          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelement"](7, "ion-icon", 5);
          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](8, "ion-button", 2);
          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵlistener"]("click", function RaainMapComponent_Template_ion_button_click_8_listener() {
            return ctx.next();
          });
          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelement"](9, "ion-icon", 6);
          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]()();
          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtemplate"](10, RaainMapComponent_div_10_Template, 2, 0, "div", 7);
          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtemplate"](11, RaainMapComponent_ion_col_11_Template, 3, 2, "ion-col", 8);
          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](12, "ion-col", 9)(13, "ion-item");
          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtemplate"](14, RaainMapComponent_div_14_Template, 3, 3, "div", 10);
          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtemplate"](15, RaainMapComponent_div_15_Template, 2, 0, "div", 7);
          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtemplate"](16, RaainMapComponent_ion_button_16_Template, 2, 2, "ion-button", 11);
          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]()();
          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtemplate"](17, RaainMapComponent_ion_col_17_Template, 10, 10, "ion-col", 8);
          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](18, "ion-row")(19, "ion-col", 12)(20, "div", 13);
          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelement"](21, "div", 14, 15);
          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]()();
          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](23, "ion-col", 16)(24, "div");
          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelement"](25, "canvas", null, 17);
          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]()()();
          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](27, "ion-row")(28, "ion-col", 18);
          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelement"](29, "span", 19);
          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]()()();
        }
        if (rf & 2) {
          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](6);
          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("hidden", !ctx.autoplay);
          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](4);
          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("ngIf", !(ctx.timeframeContainers == null ? null : ctx.timeframeContainers.containers == null ? null : ctx.timeframeContainers.containers.length));
          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](1);
          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("ngIf", ctx.showCumulative);
          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](3);
          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("ngIf", ctx.timeframeContainers == null ? null : ctx.timeframeContainers.containers == null ? null : ctx.timeframeContainers.containers.length);
          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](1);
          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("ngIf", !(ctx.timeframeContainers == null ? null : ctx.timeframeContainers.containers == null ? null : ctx.timeframeContainers.containers.length));
          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](1);
          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("ngIf", ctx.showCumulative);
          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](1);
          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("ngIf", !ctx.showCumulative);
          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](3);
          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵstyleProp"]("height", ctx.currentHeight, "px");
          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](4);
          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵstyleProp"]("height", ctx.currentHeight, "px")("width", 60, "px");
          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](5);
          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("innerHTML", ctx.mcText, _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵsanitizeHtml"]);
        }
      },
      dependencies: [_angular_common__WEBPACK_IMPORTED_MODULE_4__.NgForOf, _angular_common__WEBPACK_IMPORTED_MODULE_4__.NgIf, _angular_forms__WEBPACK_IMPORTED_MODULE_5__.NgControlStatus, _angular_forms__WEBPACK_IMPORTED_MODULE_5__.NgModel, _ionic_angular__WEBPACK_IMPORTED_MODULE_6__.IonButton, _ionic_angular__WEBPACK_IMPORTED_MODULE_6__.IonButtons, _ionic_angular__WEBPACK_IMPORTED_MODULE_6__.IonCol, _ionic_angular__WEBPACK_IMPORTED_MODULE_6__.IonGrid, _ionic_angular__WEBPACK_IMPORTED_MODULE_6__.IonIcon, _ionic_angular__WEBPACK_IMPORTED_MODULE_6__.IonItem, _ionic_angular__WEBPACK_IMPORTED_MODULE_6__.IonRange, _ionic_angular__WEBPACK_IMPORTED_MODULE_6__.IonRow, _ionic_angular__WEBPACK_IMPORTED_MODULE_6__.IonSelect, _ionic_angular__WEBPACK_IMPORTED_MODULE_6__.IonSelectOption, _ionic_angular__WEBPACK_IMPORTED_MODULE_6__.IonToggle, _ionic_angular__WEBPACK_IMPORTED_MODULE_6__.BooleanValueAccessor, _ionic_angular__WEBPACK_IMPORTED_MODULE_6__.SelectValueAccessor, _angular_common__WEBPACK_IMPORTED_MODULE_4__.DatePipe],
      styles: ["#map-container[_ngcontent-%COMP%] {\n  position: relative;\n}\n\n#map-div[_ngcontent-%COMP%] {\n  position: absolute;\n  left: 0;\n  top: 0;\n  right: 0;\n  bottom: 0;\n}\n\nion-select[_ngcontent-%COMP%] {\n  width: 100%;\n  max-width: -moz-fit-content;\n  max-width: fit-content;\n  font-size: 16px;\n  color: var(--ion-color-dark);\n}\n\nion-range[_ngcontent-%COMP%] {\n  padding: 0 0 0 20px;\n}\n/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8uL3NyYy9jb3JlL3NoYXJlZC9yYWFpbi1tYXAvcmFhaW4tbWFwLmNvbXBvbmVudC5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQ0Usa0JBQUE7QUFDRjs7QUFFQTtFQUNFLGtCQUFBO0VBQ0EsT0FBQTtFQUNBLE1BQUE7RUFDQSxRQUFBO0VBQ0EsU0FBQTtBQUNGOztBQUVBO0VBQ0UsV0FBQTtFQUNBLDJCQUFBO0VBQUEsc0JBQUE7RUFDQSxlQUFBO0VBQ0EsNEJBQUE7QUFDRjs7QUFFQTtFQUNFLG1CQUFBO0FBQ0Y7O0FBRUE7O0VBQUEiLCJzb3VyY2VzQ29udGVudCI6WyIjbWFwLWNvbnRhaW5lciB7XG4gIHBvc2l0aW9uOiByZWxhdGl2ZTtcbn1cblxuI21hcC1kaXYge1xuICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gIGxlZnQ6IDA7XG4gIHRvcDogMDtcbiAgcmlnaHQ6IDA7XG4gIGJvdHRvbTogMDtcbn1cblxuaW9uLXNlbGVjdCB7XG4gIHdpZHRoOiAxMDAlO1xuICBtYXgtd2lkdGg6IGZpdC1jb250ZW50O1xuICBmb250LXNpemU6IDE2cHg7XG4gIGNvbG9yOiB2YXIoLS1pb24tY29sb3ItZGFyayk7XG59XG5cbmlvbi1yYW5nZSB7XG4gIHBhZGRpbmc6IDAgMCAwIDIwcHg7XG59XG5cbi8qIFdpbmQgYW5pbWF0aW9uIHN0eWxlcyBhcmUgZGVmaW5lZCBpbiBzcmMvZ2xvYmFsLnNjc3NcbiAqIHRvIGF2b2lkIEFuZ3VsYXIgdmlldyBlbmNhcHN1bGF0aW9uIGlzc3VlcyB3aXRoIGR5bmFtaWNhbGx5IGNyZWF0ZWQgTGVhZmxldCBtYXJrZXJzXG4gKi9cbiJdLCJzb3VyY2VSb290IjoiIn0= */"]
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
        // TODO rainNode.latLngRectsAsJSON
        //  pmv.setCenter(rain);
        values.push(pmv);
        distance += p.distance;
      });
    });
    return values;
  }
  getTimeline(rainNode) {
    var _this = this;
    return (0,_opt_atlassian_pipelines_agent_build_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_0__["default"])(function* () {
      const timeline = [];
      const links = rainNode?.getLinks() ?? [];
      const rainId = rainNode?.id;
      // dates and radar measures
      for (const link of links) {
        const measureIndex = link.href.indexOf('measures/');
        if (measureIndex >= 0) {
          const start = measureIndex + 'measures/'.length;
          const str1 = link.href.substring(start);
          if (str1) {
            const end = str1.indexOf('/');
            const dateStr = str1.substring(0, end);
            const idStr = str1.substring(end + 1);
            const frameDate = new Date(dateStr);
            const existingTargets = timeline.filter(t => t.date.getTime() === frameDate.getTime());
            if (existingTargets.length) {
              existingTargets[0].radarMeasureIds.push(idStr);
            } else {
              timeline.push(new _tools__WEBPACK_IMPORTED_MODULE_2__.FrameSet(frameDate, [idStr]));
            }
          }
        }
      }
      // computation-cumulatives
      for (const link of links) {
        const measureIndex = link.href.indexOf('cumulatives/');
        if (measureIndex >= 0) {
          const start = measureIndex + 'cumulatives/'.length;
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
      // rain computations
      for (const link of links) {
        const computationIndex = link.href.indexOf('computations/');
        if (computationIndex >= 0) {
          const start = computationIndex + 13;
          const str1 = link.href.substring(start);
          if (str1) {
            const splitted = str1.split('/');
            const date = new Date(splitted[0]);
            const version = splitted[1];
            const rainComputationId = splitted[2];
            const existingTargets = timeline.filter(t => t.date.getTime() === date.getTime());
            for (const target of existingTargets) {
              target.rainComputationId = rainComputationId;
              target.rainComputationVersion = version;
              target.rainComputationQualities = yield _this.getBuilds(rainId, rainComputationId);
            }
          }
        }
      }
      return timeline;
    })();
  }
  getBuilds(rainId, rainComputationId) {
    var _this2 = this;
    return (0,_opt_atlassian_pipelines_agent_build_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_0__["default"])(function* () {
      return yield _this2.profileService.getRainCompares(rainId, rainComputationId);
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
// TODO remove constants but preferred progress indicator [0 to 1]
const CONSTANTS = {
  _RAIN_STATUS_0_NOT_STARTED: 0,
  _RAIN_STATUS_0_WAIT_FOR_ECHOES: 0.1,
  _RAIN_STATUS_0_WAIT_FOR_INPUT: 0.2,
  _RAIN_STATUS_0_WAIT_FOR_INTERNAL_VALIDATION: 0.3,
  _RAIN_STATUS_0_READY_TO_BUILD: 0.4,
  _RAIN_STATUS_1_BUILDING: 0.5,
  _RAIN_STATUS_1_READY_TO_COMPUTE: 0.6,
  _RAIN_COMPUTATION_IS_READY: 0,
  _RAIN_COMPUTATION_IN_PROGRESS: 0.5,
  _RAIN_COMPUTATION_DONE: 1,
  _INPUT_VALIDITY_NOT_CHECKED_YET: -1,
  _INPUT_VALIDITY_CHECK_IN_PROGRESS: -0.5,
  _INPUT_VALIDITY_NOT_VALID: 0,
  _INPUT_VALIDITY_NOT_CONFIDENT: 0.5,
  _INPUT_VALIDITY_VALID: 1,
  _VERIFY_STATUS_FIND_RADARS: 0.3,
  _VERIFY_STATUS_FIND_SIMILAR: 0.6,
  _VERIFY_STATUS_FIND_GAUGES: 0.7,
  _COMPUTATION_STATUS_UNKNOWN: 0,
  _COMPUTATION_STATUS_IN_PROGRESS: 0.4,
  _COMPUTATION_STATUS_FINISHED: 1
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
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(/*! @angular/common */ 94666);
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(/*! @angular/forms */ 2508);
/* harmony import */ var _profile_service__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./profile.service */ 15770);
/* harmony import */ var _storage_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./storage.service */ 8184);
/* harmony import */ var _radar_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./radar.service */ 49766);
/* harmony import */ var _cache_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./cache.service */ 13140);
/* harmony import */ var _profile_icon_directive__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./profile-icon.directive */ 36035);
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! @ionic/angular */ 93819);
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
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! @angular/core */ 22560);



















class SharedModule {
  constructor(parentModule) {
    if (parentModule) {
      // throw new Error(
      console.warn('SharedModule is already loaded. Import it in the AppModule only');
    }
  }
  static {
    this.ɵfac = function SharedModule_Factory(t) {
      return new (t || SharedModule)(_angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵinject"](SharedModule, 12));
    };
  }
  static {
    this.ɵmod = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵdefineNgModule"]({
      type: SharedModule
    });
  }
  static {
    this.ɵinj = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵdefineInjector"]({
      providers: [_storage_service__WEBPACK_IMPORTED_MODULE_1__.Storage, _radar_service__WEBPACK_IMPORTED_MODULE_2__.RadarService, _profile_service__WEBPACK_IMPORTED_MODULE_0__.ProfileService, _cache_service__WEBPACK_IMPORTED_MODULE_3__.Cache, _ionic_angular__WEBPACK_IMPORTED_MODULE_16__.IonRange],
      imports: [_angular_common__WEBPACK_IMPORTED_MODULE_17__.CommonModule, _angular_forms__WEBPACK_IMPORTED_MODULE_18__.FormsModule, _ionic_angular__WEBPACK_IMPORTED_MODULE_16__.IonicModule, _pipes_module__WEBPACK_IMPORTED_MODULE_5__.PipesModule, _angular_common__WEBPACK_IMPORTED_MODULE_17__.CommonModule, _pipes_module__WEBPACK_IMPORTED_MODULE_5__.PipesModule]
    });
  }
}
(function () {
  (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵsetNgModuleScope"](SharedModule, {
    declarations: [_raain_map_raain_map_component__WEBPACK_IMPORTED_MODULE_6__.RaainMapComponent, _raain_compare_raain_compare_component__WEBPACK_IMPORTED_MODULE_7__.RaainCompareComponent, _raain_compare_stack_raain_compare_stack_component__WEBPACK_IMPORTED_MODULE_12__.RaainCompareStackComponent, _raain_date_focus_raain_date_focus_component__WEBPACK_IMPORTED_MODULE_9__.RaainDateFocusComponent, _raain_date_dynamic_raain_date_dynamic_component__WEBPACK_IMPORTED_MODULE_10__.RaainDateDynamicComponent, _raain_configuration_raain_configuration_component__WEBPACK_IMPORTED_MODULE_8__.RaainConfigurationComponent, _raain_speed_raain_speed_component__WEBPACK_IMPORTED_MODULE_11__.RaainSpeedComponent, _raain_globe_raain_globe_component__WEBPACK_IMPORTED_MODULE_13__.RaainGlobeComponent, _profile_icon_directive__WEBPACK_IMPORTED_MODULE_4__.ProfileIconDirective, _raain_details_raain_details_component__WEBPACK_IMPORTED_MODULE_14__.RaainDetailsComponent],
    imports: [_angular_common__WEBPACK_IMPORTED_MODULE_17__.CommonModule, _angular_forms__WEBPACK_IMPORTED_MODULE_18__.FormsModule, _ionic_angular__WEBPACK_IMPORTED_MODULE_16__.IonicModule, _angular_common__WEBPACK_IMPORTED_MODULE_17__.NgOptimizedImage, _pipes_module__WEBPACK_IMPORTED_MODULE_5__.PipesModule],
    exports: [_angular_common__WEBPACK_IMPORTED_MODULE_17__.CommonModule, _angular_common__WEBPACK_IMPORTED_MODULE_17__.NgStyle, _pipes_module__WEBPACK_IMPORTED_MODULE_5__.PipesModule, _raain_map_raain_map_component__WEBPACK_IMPORTED_MODULE_6__.RaainMapComponent, _raain_compare_raain_compare_component__WEBPACK_IMPORTED_MODULE_7__.RaainCompareComponent, _raain_compare_stack_raain_compare_stack_component__WEBPACK_IMPORTED_MODULE_12__.RaainCompareStackComponent, _raain_date_focus_raain_date_focus_component__WEBPACK_IMPORTED_MODULE_9__.RaainDateFocusComponent, _raain_date_dynamic_raain_date_dynamic_component__WEBPACK_IMPORTED_MODULE_10__.RaainDateDynamicComponent, _raain_configuration_raain_configuration_component__WEBPACK_IMPORTED_MODULE_8__.RaainConfigurationComponent, _raain_speed_raain_speed_component__WEBPACK_IMPORTED_MODULE_11__.RaainSpeedComponent, _raain_globe_raain_globe_component__WEBPACK_IMPORTED_MODULE_13__.RaainGlobeComponent, _profile_icon_directive__WEBPACK_IMPORTED_MODULE_4__.ProfileIconDirective, _raain_details_raain_details_component__WEBPACK_IMPORTED_MODULE_14__.RaainDetailsComponent]
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
/* harmony export */   "TimeframeComputationProgress": () => (/* binding */ TimeframeComputationProgress),
/* harmony export */   "TimeframeQualityProgress": () => (/* binding */ TimeframeQualityProgress),
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
class TimeframeComputationProgress {
  transform(frameSets) {
    let progress = 0;
    if (!frameSets || frameSets.length === 0) {
      return 1;
    }
    for (const frameset of frameSets) {
      if (frameset.radarMeasureIds.length && frameset.rainComputationId) {
        progress++;
      }
    }
    return progress / frameSets.length;
  }
  static {
    this.ɵfac = function TimeframeComputationProgress_Factory(t) {
      return new (t || TimeframeComputationProgress)();
    };
  }
  static {
    this.ɵpipe = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefinePipe"]({
      name: "timeframeComputationProgress",
      type: TimeframeComputationProgress,
      pure: true
    });
  }
}
class TimeframeQualityProgress {
  transform(frameSets) {
    let progress = 0;
    if (!frameSets || frameSets.length === 0) {
      return 1;
    }
    for (const frameset of frameSets) {
      const qualities = frameset.rainComputationQualities ? frameset.rainComputationQualities : [];
      const atLeastOneIsNotOutdated = qualities.filter(q => q.version.indexOf('outdated') < 0);
      if (frameset.radarMeasureIds.length && frameset.rainComputationId && atLeastOneIsNotOutdated.length) {
        progress++;
      }
    }
    return progress / frameSets.length;
  }
  static {
    this.ɵfac = function TimeframeQualityProgress_Factory(t) {
      return new (t || TimeframeQualityProgress)();
    };
  }
  static {
    this.ɵpipe = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefinePipe"]({
      name: "timeframeQualityProgress",
      type: TimeframeQualityProgress,
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
    this.rainComputationQualitiesPerDate = {};
    this.selectedGauge = null;
    this.selectedGaugeInPoints = null;
    this.cleanCompareQuality('no compare yet');
  }
  refreshSpeeds(frameSet) {
    var _this = this;
    return (0,_opt_atlassian_pipelines_agent_build_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_0__["default"])(function* () {
      const rainSpeedMap = yield _this.profileService.getRainSpeedMap(_this.rainNode, frameSet.rainComputationId);
      if (rainSpeedMap?.rainSpeeds) {
        _this.speeds = rainSpeedMap.rainSpeeds.map(rainSpeed => {
          const center = rainSpeed.getCenter();
          const targetPosition = _this.calculateTargetPosition(rainSpeed, center);
          return new raain_ui__WEBPACK_IMPORTED_MODULE_1__.MapLatLng(targetPosition.lat, targetPosition.lng, rainSpeed.azimuthInDegrees, `az${rainSpeed.azimuthInDegrees} sp${rainSpeed.speedInMetersPerSec} trust${rainSpeed.trustRatio}`, `az${rainSpeed.azimuthInDegrees} sp${rainSpeed.speedInMetersPerSec} trust${rainSpeed.trustRatio}`, rainSpeed.speedInMetersPerSec);
        });
      } else {
        _this.speeds = [];
      }
    })();
  }
  refreshCompareQuality(frameSet) {
    var _this2 = this;
    return (0,_opt_atlassian_pipelines_agent_build_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_0__["default"])(function* () {
      const comparePerDate = _this2.getComparePerDate(frameSet.date);
      if (!comparePerDate || !comparePerDate.rainComputationQuality?.qualitySpeedMatrixContainer) {
        _this2.cleanCompareQuality('no current quality ' + Object.keys(_this2.rainComputationQualitiesPerDate));
        _this2.onChanges();
        return;
      }
      const uiCompares = comparePerDate.compareTimeline.map(c => {
        return {
          date: c.date,
          name: c.name,
          comparePoints: c.qualityPoints.map(p => new _xytype__WEBPACK_IMPORTED_MODULE_3__.XYType(p.getGaugeValue(), p.getRainValue(), 2, p.gaugeLabel, p.gaugeId)),
          comparePointsMax: new _xytype__WEBPACK_IMPORTED_MODULE_3__.XYType(c.maxValue * 1.2, c.maxValue * 1.2),
          comparePointsHistory: c.qualityPointsLegacy,
          remarks: c.remarks
        };
      }).sort((a, b) => a.date?.getTime() - b.date?.getTime());
      _this2.currentQualityDoneDate = comparePerDate.rainComputationQuality.isDoneDate;
      _this2.currentQualityTimeSpentInMs = comparePerDate.rainComputationQuality.timeSpentInMs;
      _this2.currentQualityLaunchedBy = comparePerDate.rainComputationQuality.launchedBy;
      _this2.compareVersion = comparePerDate.rainComputationQuality.getVersion();
      _this2.compareSpeed = comparePerDate.rainComputationQuality.qualitySpeedMatrixContainer.getSpeed();
      _this2.compareNames = uiCompares.map(c => c.name);
      _this2.uiCompares = uiCompares;
      _this2.onChanges();
    })();
  }
  refreshGlobalCompareQuality(targetsOrdered, withCompareDuplicate) {
    var _this3 = this;
    return (0,_opt_atlassian_pipelines_agent_build_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_0__["default"])(function* () {
      try {
        yield _this3.fetchRainComputationQualities(targetsOrdered);
        yield _this3.buildComparesTimeline(targetsOrdered, withCompareDuplicate);
        if (!_this3.buildCompares.compareCumulative) {
          // throw Error('needs cumulative compare');
          return;
        }
        const countForAverage = targetsOrdered.length;
        const maxValue = _this3.buildCompares.compareCumulative.maxValue * 1.2;
        _this3.globalComparePoints = _this3.buildCompares.compareCumulative.qualityPoints.map(qp => new _xytype__WEBPACK_IMPORTED_MODULE_3__.XYType(qp.getGaugeValue(), qp.getRainValue(), 2, qp.gaugeLabel, qp.gaugeId));
        _this3.globalComparePointsMax = new _xytype__WEBPACK_IMPORTED_MODULE_3__.XYType(maxValue, maxValue);
      } catch (e) {
        console.warn(e);
      }
    })();
  }
  setGaugesInMap() {
    var _this4 = this;
    return (0,_opt_atlassian_pipelines_agent_build_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_0__["default"])(function* () {
      let gaugesToFilter = yield _this4.profileService.getGauges(_this4.rainNode?.id, _this4.rainNode.getCenter());
      gaugesToFilter = gaugesToFilter.sort((a, b) => {
        return a.approxDistanceFrom(_this4.rainNode.getCenter()) - b.approxDistanceFrom(_this4.rainNode.getCenter());
      }).filter((v, index) => index < 200);
      const rainNodeGaugeIds = _this4.rainNode.getLinks(raain_model__WEBPACK_IMPORTED_MODULE_2__.GaugeNode.TYPE).map(l => l.getId());
      const visibleGauges = gaugesToFilter.filter(g => rainNodeGaugeIds.indexOf(g.id) > -1);
      console.log('visibleGauges:', visibleGauges);
      const gaugesLatLng = [];
      for (const gauge of visibleGauges) {
        gaugesLatLng.push(new raain_ui__WEBPACK_IMPORTED_MODULE_1__.MapLatLng(gauge.latitude, gauge.longitude, undefined, gauge.id, gauge.name));
      }
      _this4.gaugesInMap = gaugesLatLng;
    })();
  }
  setGaugesInCompare() {
    var _this5 = this;
    return (0,_opt_atlassian_pipelines_agent_build_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_0__["default"])(function* () {
      const qualityPoints = [];
      for (const compare of _this5.uiCompares) {
        for (const qualityPoint of compare.comparePointsHistory) {
          const alreadyAdded = qualityPoints.filter(p => p?.gaugeId === qualityPoint.gaugeId);
          if (alreadyAdded.length === 0) {
            qualityPoints.push(qualityPoint);
          }
        }
      }
      _this5.gaugesInCompare = qualityPoints.map(p => {
        return new raain_ui__WEBPACK_IMPORTED_MODULE_1__.MapLatLng(p.gaugeCartesianValue.lat, p.gaugeCartesianValue.lng, 0, p.gaugeId, p.gaugeLabel + '>' + p.getGaugeValue(), p.getGaugeValue());
      });
      _this5.resetSelectedGauges();
    })();
  }
  selectGauge(gaugeId, compareIndex) {
    var _this6 = this;
    return (0,_opt_atlassian_pipelines_agent_build_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_0__["default"])(function* () {
      if (gaugeId) {
        const xys = _this6.getCurrentQualityPoints(compareIndex).filter(p => p.gaugeId === gaugeId);
        _this6.selectedGauge = xys.length === 1 ? xys[0] : null;
      } else {
        _this6.selectedGauge = null;
      }
      if (!_this6.selectedGauge) {
        _this6.resetSelectedGauges();
        const gaugesFiltered = _this6.gaugesInMap.filter(g => g.id === gaugeId);
        if (gaugesFiltered.length === 1) {
          _this6.selectedGauges = [gaugesFiltered[0]];
        }
        return;
      }
      const selectedGaugeInPoints = _this6.getCurrentQualityPoints(compareIndex).filter(p => p.gaugeId === _this6.selectedGauge.gaugeId);
      let pixelsSolutions = [];
      if (selectedGaugeInPoints.length === 1) {
        const remarks = JSON.parse(selectedGaugeInPoints[0].remark).sort((a, b) => a.criteriaAttemptedToBeMinimum - b.criteriaAttemptedToBeMinimum);
        console.log(remarks);
        pixelsSolutions = remarks.map(remark => remark.solutionForGauge.pixels.map(p => new raain_ui__WEBPACK_IMPORTED_MODULE_1__.MapLatLng(p.y + 0.005, p.x + 0.01, 0, '' + !remark.notPossible, '' + !remark.notPossible, 1)));
        const timeDeltaInMinutes = selectedGaugeInPoints[0].getTimeDeltaInMinutes();
        _this6.selectedGaugeInPointsDetail = '' + selectedGaugeInPoints[0].gaugeLabel + ' > ' + Math.round(selectedGaugeInPoints[0].getGaugeValue() * 100) / 100 + ' / ' + Math.round(selectedGaugeInPoints[0].getRainValue() * 100) / 100 + ' dT=' + timeDeltaInMinutes;
        _this6.selectedGaugeInPoints = selectedGaugeInPoints[0];
      } else {
        _this6.selectedGaugeInPoints = null;
        _this6.selectedGauges = [];
        _this6.selectedPixels = [];
        _this6.pixelsSolutions = [];
        return;
      }
      _this6.selectedGauges = [new raain_ui__WEBPACK_IMPORTED_MODULE_1__.MapLatLng(_this6.selectedGaugeInPoints.gaugeCartesianValue.lat, _this6.selectedGaugeInPoints.gaugeCartesianValue.lng, undefined, _this6.selectedGaugeInPoints.gaugeId, _this6.selectedGaugeInPoints.gaugeLabel + '>' + _this6.selectedGaugeInPoints.gaugeCartesianValue.value, _this6.selectedGaugeInPoints.gaugeCartesianValue.value)];
      _this6.selectGaugeInCompare();
      const pixels = [];
      for (const rainCartesianValue of _this6.selectedGaugeInPoints.rainCartesianValues) {
        pixels.push(new raain_ui__WEBPACK_IMPORTED_MODULE_1__.MapLatLng(rainCartesianValue.lat + 0.005, rainCartesianValue.lng + 0.01));
      }
      _this6.selectedPixels = pixels;
      _this6.pixelsSolutions = pixelsSolutions;
    })();
  }
  buildComparesTimeline(targetsOrdered, withCompareDuplicate) {
    var _this7 = this;
    return (0,_opt_atlassian_pipelines_agent_build_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_0__["default"])(function* () {
      const compareDates = targetsOrdered.map(t => t.date);
      const qualities = compareDates.filter(d => !!d).map(d => _this7.getRainComputationQuality(d)).filter(rcq => !!rcq);
      _this7.compareDates = compareDates.slice(1, -1);
      _this7.buildCompares = raain_model__WEBPACK_IMPORTED_MODULE_2__.SpeedMatrixContainer.BuildCompares(qualities, !withCompareDuplicate);
      return _this7.buildCompares;
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
  fetchRainComputationQualities(targetsOrdered) {
    var _this8 = this;
    return (0,_opt_atlassian_pipelines_agent_build_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_0__["default"])(function* () {
      for (const target of targetsOrdered) {
        if (!_this8.rainComputationQualitiesPerDate[target.date.toISOString()]
        // && target.rainComputationQualityId
        ) {
          try {
            let rainComputationQuality;
            if (target.rainComputationCumulativeId) {
              rainComputationQuality = yield _this8.profileService.getRainCumulativeCompareByDate(_this8.rainNode.id, target.rainComputationCumulativeId, target.date);
            } else if (target.rainComputationId) {
              rainComputationQuality = yield _this8.profileService.getRainCompareByDate(_this8.rainNode.id, target.rainComputationId, target.date);
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
              _this8.rainComputationQualitiesPerDate[target.date.toISOString()] = rainComputationQuality;
            }
          } catch (e) {
            console.warn(e);
          }
        }
      }
    })();
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
  calculateTargetPosition(rainSpeed, center) {
    return rainSpeed.getCenter();
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
    this.lastError = '';
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
        // rainComputationQualityId: this.getRainComputationQualityTarget(current),
      };

      const timeframeContainers = yield _this.refreshMapTimeframeContainers(target);
      _this.onFetchDone(timeframeContainers).then(() => _this.refreshCompareQuality(current)).then(ignored => {}); // NO Sync
      _this.timelineSelectedFrameSet = current;
    }).apply(this, arguments);
  }
  getTimelineFrameSet() {
    return this.timeframesFromRadars;
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
        return cartesianMapValues.reduce((p, v) => p + v.value * 5 / 60, 0);
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
        beginExtended.setMinutes(beginExtended.getMinutes() - 7);
        endExtended.setMinutes(endExtended.getMinutes() + 7);
        _this7.rainNode = yield _this7.profileService.getRainTimeframe(_this7.rainNode.id, beginExtended, endExtended, _this7.dataInternal, _this7.provider, _this7.timeStepInMinutes);
        _this7.timeframesFromRadarsExtended = yield _this7.radarService.getTimeline(_this7.rainNode);
        _this7.timeframesFromRadars = _this7.timeframesFromRadarsExtended.filter(frameSet => _this7.period.begin.getTime() <= frameSet.date.getTime() && frameSet.date.getTime() <= _this7.period.end.getTime()).sort((a, b) => a.date.getTime() - b.date.getTime());
        _this7.timeframeDates = _this7.timeframesFromRadars.map(frameSet => frameSet.date);
        // Compute all expected dates from period.begin to period.end with timeStepInMinutes
        const allExpectedDates = [];
        const currentDate = new Date(_this7.period.begin);
        while (currentDate.getTime() <= _this7.period.end.getTime()) {
          allExpectedDates.push(new Date(currentDate));
          currentDate.setMinutes(currentDate.getMinutes() + _this7.timeStepInMinutes);
        }
        // Check if all expected dates are present in timeframeDates
        const timeframeDateTimes = new Set(_this7.timeframeDates.map(d => d.getTime()));
        const missingDates = allExpectedDates.filter(expectedDate => !timeframeDateTimes.has(expectedDate.getTime()));
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
        for (const frameSet of _this8.timeframesFromRadarsExtended) {
          const target = JSON.parse(JSON.stringify(frameSet));
          target.date = new Date(target.date);
          // target.rainComputationQualityId = this.getRainComputationQualityTarget(frameSet);
          targets.push(target);
        }
        yield _this8.compareManager.refreshGlobalCompareQuality(targets, !_this8.removeDuplicate);
      } catch (e) {
        console.error('refreshGlobalCompareReport', e);
      }
    })();
  }
  refreshMapTimeframeContainers(target) {
    var _this9 = this;
    return (0,_opt_atlassian_pipelines_agent_build_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_0__["default"])(function* () {
      if (!target?.rainComputationId && !target?.rainComputationCumulativeId) {
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
          rainNodeCartesianMap = yield _this9.profileService.getRainComputationCumulativeCumulativesMapById(rainNode.id, target.rainComputationCumulativeId, target.cumulativeHours);
        } else if (target.cumulativeHours && target.rainComputationId) {
          rainNodeCartesianMap = yield _this9.profileService.getRainComputationCumulativesMapById(rainNode.id, target.rainComputationId, target.cumulativeHours);
        } else if (target.rainComputationCumulativeId) {
          rainNodeCartesianMap = yield _this9.profileService.getRainComputationCumulativeCartesianMapById(rainNode.id, target.rainComputationCumulativeId);
        } else {
          rainNodeCartesianMap = yield _this9.profileService.getRainComputationCartesianMapById(rainNode.id, target.rainComputationId);
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
        const message = `Pb with computations for id: ${target.rainComputationId} ${e.message}`;
        console.warn(message);
        _this9.lastError += message;
      }
      return newCreatedTimeframeContainers;
    })();
  }
  refreshCompareQuality(frameSet) {
    var _this0 = this;
    return (0,_opt_atlassian_pipelines_agent_build_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_0__["default"])(function* () {
      yield _this0.compareManager.refreshCompareQuality(frameSet);
      yield _this0.compareManager.setGaugesInCompare();
      yield _this0.compareManager.refreshSpeeds(frameSet);
    })();
  }
  getValues(target) {
    var _this1 = this;
    return (0,_opt_atlassian_pipelines_agent_build_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_0__["default"])(function* () {
      if (!target?.rainComputationId && !target?.rainComputationCumulativeId) {
        const message = `Pb with target insights ${target?.date.toISOString()}`;
        console.warn(message);
        _this1.lastError += message;
        return [];
      }
      let values = [];
      let rainComputationMap;
      if (target.rainComputationId) {
        rainComputationMap = yield _this1.profileService.getRainComputationCartesianMapById(_this1.rainNode.id, target.rainComputationId);
      } else if (target.rainComputationCumulativeId) {
        rainComputationMap = yield _this1.profileService.getRainComputationCumulativeCartesianMapById(_this1.rainNode.id, target.rainComputationCumulativeId);
      }
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
        const message = `Pb with computations for id: ${target.rainComputationId} ${target.rainComputationCumulativeId} ${e.message}`;
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
/* harmony export */   "TimeframeComputationProgress": () => (/* reexport safe */ _core_shared__WEBPACK_IMPORTED_MODULE_4__.TimeframeComputationProgress),
/* harmony export */   "TimeframeQualityProgress": () => (/* reexport safe */ _core_shared__WEBPACK_IMPORTED_MODULE_4__.TimeframeQualityProgress),
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
//# sourceMappingURL=main.74cda3dc75fd3a3f.js.map