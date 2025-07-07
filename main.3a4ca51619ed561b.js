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
  version: 'v1.5.31'
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
      dependencies: [_angular_common__WEBPACK_IMPORTED_MODULE_7__.NgForOf, _angular_common__WEBPACK_IMPORTED_MODULE_7__.NgIf, _ionic_angular__WEBPACK_IMPORTED_MODULE_6__.IonApp, _ionic_angular__WEBPACK_IMPORTED_MODULE_6__.IonBadge, _ionic_angular__WEBPACK_IMPORTED_MODULE_6__.IonContent, _ionic_angular__WEBPACK_IMPORTED_MODULE_6__.IonHeader, _ionic_angular__WEBPACK_IMPORTED_MODULE_6__.IonIcon, _ionic_angular__WEBPACK_IMPORTED_MODULE_6__.IonItem, _ionic_angular__WEBPACK_IMPORTED_MODULE_6__.IonLabel, _ionic_angular__WEBPACK_IMPORTED_MODULE_6__.IonList, _ionic_angular__WEBPACK_IMPORTED_MODULE_6__.IonMenu, _ionic_angular__WEBPACK_IMPORTED_MODULE_6__.IonMenuToggle, _ionic_angular__WEBPACK_IMPORTED_MODULE_6__.IonSplitPane, _ionic_angular__WEBPACK_IMPORTED_MODULE_6__.IonTitle, _ionic_angular__WEBPACK_IMPORTED_MODULE_6__.IonToolbar, _ionic_angular__WEBPACK_IMPORTED_MODULE_6__.IonRouterOutlet, _ionic_angular__WEBPACK_IMPORTED_MODULE_6__.RouterLinkDelegate, _angular_router__WEBPACK_IMPORTED_MODULE_8__.RouterLink, _shared_profile_icon_directive__WEBPACK_IMPORTED_MODULE_4__.ProfileIconDirective],
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
            const rdId = rain.getLink('radar').getId();
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
    return (0,_opt_atlassian_pipelines_agent_build_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_0__["default"])(function* (rainId, begin, end, forced = false) {
      try {
        let queryPath = '' + rainId + '?format=timeframe';
        if (begin) {
          queryPath += '&begin=' + begin.toISOString();
        }
        if (end) {
          queryPath += '&end=' + end.toISOString();
        }
        if (forced) {
          queryPath += '&forced=true';
          queryPath += '&withConfig=true';
          queryPath += '&bypassCache=' + new Date().getTime();
        }
        const resp = yield _this16.fidjService.sendOnEndpoint({
          key: 'rains',
          verb: 'GET',
          relativePath: queryPath,
          defaultKeyUrl: _this16.defaultUrlForAPI + '/rains'
        });
        const rainNode = new raain_model__WEBPACK_IMPORTED_MODULE_1__.RainNode(resp.data.timeframe);
        rainNode.name += '.radar.timeframe';
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
  launchRainComputation(rainId, date) {
    var _this21 = this;
    return (0,_opt_atlassian_pipelines_agent_build_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_0__["default"])(function* () {
      try {
        const response = yield _this21.fidjService.sendOnEndpoint({
          verb: 'POST',
          key: 'rains',
          relativePath: '' + rainId + '/computations',
          data: {
            date: date.toISOString()
          },
          defaultKeyUrl: _this21.defaultUrlForAPI + '/rains'
        });
        return response.data.computations?.map(c => new raain_model__WEBPACK_IMPORTED_MODULE_1__.RainComputation(c));
      } catch (e) {
        yield _this21.checkError(e);
      }
      return null;
    })();
  }
  getRainComputationCartesianMapById(rainId, rainComputationId) {
    var _this22 = this;
    return (0,_opt_atlassian_pipelines_agent_build_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_0__["default"])(function* () {
      try {
        const queryPath = '' + rainId + '/computations/' + rainComputationId + '?format=cartesian-map';
        const response = yield _this22.fidjService.sendOnEndpoint({
          key: 'rains',
          verb: 'GET',
          relativePath: queryPath,
          defaultKeyUrl: _this22.defaultUrlForAPI + '/rains'
        });
        if (!response.data['cartesian-map']) {
          return null;
        }
        const rainComputationMap = new raain_model__WEBPACK_IMPORTED_MODULE_1__.RainComputationMap(response.data['cartesian-map']);
        rainComputationMap.name = rainId + '.rain.cartesian-map';
        return rainComputationMap;
      } catch (e) {
        yield _this22.checkError(e);
      }
      return null;
    })();
  }
  getRainComputationCumulativeMapById(rainId, rainComputationId, cumulativeHours) {
    var _this23 = this;
    return (0,_opt_atlassian_pipelines_agent_build_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_0__["default"])(function* () {
      const queryPath = '' + rainId + '/computations/' + rainComputationId + '/cumulative/' + cumulativeHours;
      const response = yield _this23.fidjService.sendOnEndpoint({
        key: 'rains',
        verb: 'GET',
        relativePath: queryPath,
        defaultKeyUrl: _this23.defaultUrlForAPI + '/rains'
      });
      if (!response.data['cumulative']) {
        return null;
      }
      const rainComputationMap = new raain_model__WEBPACK_IMPORTED_MODULE_1__.RainComputationMap(response.data['cumulative']);
      rainComputationMap.name = rainId + '.rain.cumulative';
      return rainComputationMap;
    })();
  }
  getRainCompares(rainId, rainComputationId) {
    var _this24 = this;
    return (0,_opt_atlassian_pipelines_agent_build_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_0__["default"])(function* () {
      const queryPath = '' + rainId + '/computations/' + rainComputationId;
      const response = yield _this24.fidjService.sendOnEndpoint({
        key: 'rains',
        verb: 'GET',
        relativePath: queryPath,
        defaultKeyUrl: _this24.defaultUrlForAPI + '/rains'
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
    var _this25 = this;
    return (0,_opt_atlassian_pipelines_agent_build_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_0__["default"])(function* () {
      const queryPath = '' + rainId + '/computations/' + rainComputationId + '/compares?date=' + date.toISOString();
      try {
        const response = yield _this25.fidjService.sendOnEndpoint({
          key: 'rains',
          verb: 'GET',
          relativePath: queryPath,
          defaultKeyUrl: _this25.defaultUrlForAPI + '/rains'
        });
        const rainComputationQuality = new raain_model__WEBPACK_IMPORTED_MODULE_1__.RainComputationQuality(response.data.qualities[0]);
        rainComputationQuality.qualitySpeedMatrixContainer = raain_model__WEBPACK_IMPORTED_MODULE_1__.SpeedMatrixContainer.CreateFromJson(rainComputationQuality.qualitySpeedMatrixContainer);
        return rainComputationQuality;
      } catch (e) {
        yield _this25.checkError(e);
      }
      return null;
    })();
  }
  getRainProgress(rainId) {
    var _this26 = this;
    return (0,_opt_atlassian_pipelines_agent_build_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_0__["default"])(function* () {
      try {
        const queryPath = '' + rainId + '/progress';
        const response = yield _this26.fidjService.sendOnEndpoint({
          key: 'rains',
          verb: 'GET',
          relativePath: queryPath,
          defaultKeyUrl: _this26.defaultUrlForAPI + '/rains'
          // timeout: 200000,
        });

        return response.data.inProgress;
      } catch (e) {
        yield _this26.checkError(e);
      }
      return 0;
    })();
  }
  // === Gauges ===
  getGauge(gaugeId) {
    var _this27 = this;
    return (0,_opt_atlassian_pipelines_agent_build_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_0__["default"])(function* () {
      try {
        const resp = yield _this27.fidjService.sendOnEndpoint({
          key: 'gauges',
          verb: 'GET',
          relativePath: gaugeId,
          defaultKeyUrl: _this27.defaultUrlForAPI + '/gauges'
        });
        return new raain_model__WEBPACK_IMPORTED_MODULE_1__.GaugeNode(resp.data);
      } catch (e) {
        yield _this27.checkError(e);
      }
    })();
  }
  getGauges(rainId) {
    var _this28 = this;
    return (0,_opt_atlassian_pipelines_agent_build_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_0__["default"])(function* () {
      let queryPath = '';
      if (_this28.asTeamId) {
        queryPath += '?teamId=' + _this28.asTeamId;
      }
      if (rainId) {
        if (queryPath) {
          queryPath += '&';
        } else {
          queryPath += '?';
        }
        queryPath += 'rainId=' + rainId;
      }
      const gauges = [];
      try {
        const resp = yield _this28.fidjService.sendOnEndpoint({
          key: 'gauges',
          verb: 'GET',
          relativePath: queryPath,
          defaultKeyUrl: _this28.defaultUrlForAPI + '/gauges'
        });
        for (const gauge of resp.data.gauges) {
          gauges.push(new _tools__WEBPACK_IMPORTED_MODULE_4__.GaugeNodeFilter(gauge));
        }
      } catch (e) {
        yield _this28.checkError(e);
      }
      return gauges;
    })();
  }
  getGaugeMeasures(gaugeId, begin, end) {
    var _this29 = this;
    return (0,_opt_atlassian_pipelines_agent_build_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_0__["default"])(function* () {
      const queryPath = '' + gaugeId + '/measures?begin=' + begin.toISOString() + '&end=' + end.toISOString();
      const resp = yield _this29.fidjService.sendOnEndpoint({
        key: 'gauges',
        verb: 'GET',
        relativePath: queryPath,
        defaultKeyUrl: _this29.defaultUrlForAPI + '/gauges'
      });
      const gaugeMeasures = [];
      for (const gaugeMeasure of resp.data.gaugeMeasures) {
        gaugeMeasures.push(new raain_model__WEBPACK_IMPORTED_MODULE_1__.GaugeMeasure(gaugeMeasure));
      }
      return gaugeMeasures;
    })();
  }
  // === Private ===
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
        console.warn('dynamic focus creation issue', e);
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
      console.warn('focus creation issue', e);
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













function RaainDetailsComponent_div_0_div_38_Template(rf, ctx) {
  if (rf & 1) {
    const _r10 = _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementStart"](0, "div", 3)(1, "raain-date-dynamic", 33);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵlistener"]("changedDate", function RaainDetailsComponent_div_0_div_38_Template_raain_date_dynamic_changedDate_1_listener($event) {
      _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵrestoreView"](_r10);
      const ctx_r9 = _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵnextContext"](2);
      return _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵresetView"](ctx_r9.onDateChangeInCount($event));
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementEnd"]()();
  }
  if (rf & 2) {
    const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵproperty"]("currentHeight", 300)("fetchData", ctx_r1.fetchDataWrapper)("points", ctx_r1.countPoints);
  }
}
function RaainDetailsComponent_div_0_span_44_i_2_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementStart"](0, "i", 36);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementEnd"]();
  }
  if (rf & 2) {
    const ctx_r11 = _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵnextContext"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵtextInterpolate1"](" In Progress: ", ctx_r11.countsPeriod.progress, "... ");
  }
}
function RaainDetailsComponent_div_0_span_44_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementStart"](0, "span", 34);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵtemplate"](2, RaainDetailsComponent_div_0_span_44_i_2_Template, 2, 1, "i", 35);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementEnd"]();
  }
  if (rf & 2) {
    const ctx_r2 = _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵtextInterpolate1"](" ", ctx_r2.getPercentOfComputations(), "% Images ");
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵproperty"]("ngIf", ctx_r2.countsPeriod.progress);
  }
}
function RaainDetailsComponent_div_0_span_45_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementStart"](0, "span", 37);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵtext"](1, " No image available ");
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementEnd"]();
  }
}
function RaainDetailsComponent_div_0_ion_button_46_Template(rf, ctx) {
  if (rf & 1) {
    const _r13 = _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementStart"](0, "ion-button", 38);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵlistener"]("click", function RaainDetailsComponent_div_0_ion_button_46_Template_ion_button_click_0_listener() {
      _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵrestoreView"](_r13);
      const ctx_r12 = _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵnextContext"](2);
      return _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵresetView"](ctx_r12.refreshMap());
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelement"](1, "ion-icon", 39);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵtext"](2, " Refresh Map ");
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementEnd"]();
  }
}
function RaainDetailsComponent_div_0_ion_progress_bar_47_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelement"](0, "ion-progress-bar", 40);
  }
  if (rf & 2) {
    const ctx_r5 = _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵproperty"]("buffer", ctx_r5.countsPeriod.progress / (((ctx_r5.timeframeDates == null ? null : ctx_r5.timeframeDates.length) || 10) + 3) + 0.01)("value", ctx_r5.countsPeriod.progress / (((ctx_r5.timeframeDates == null ? null : ctx_r5.timeframeDates.length) || 10) + 3));
  }
}
const _c0 = function () {
  return [];
};
const _c1 = function (a0, a1, a2, a3, a4, a5) {
  return {
    borders: a0,
    gauges: a1,
    gaugesInCompare: a2,
    selectedGauges: a3,
    pixels: a4,
    pixelsSolution: a5
  };
};
const _c2 = function (a0) {
  return {
    "warning": a0
  };
};
function RaainDetailsComponent_div_0_ion_row_48_Template(rf, ctx) {
  if (rf & 1) {
    const _r15 = _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementStart"](0, "ion-row")(1, "ion-col", 41)(2, "div", 42)(3, "raain-map", 43);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵlistener"]("changedDate", function RaainDetailsComponent_div_0_ion_row_48_Template_raain_map_changedDate_3_listener($event) {
      _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵrestoreView"](_r15);
      const ctx_r14 = _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵnextContext"](2);
      return _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵresetView"](ctx_r14.onDateChangeInMap($event));
    })("changedSum", function RaainDetailsComponent_div_0_ion_row_48_Template_raain_map_changedSum_3_listener($event) {
      _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵrestoreView"](_r15);
      const ctx_r16 = _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵnextContext"](2);
      return _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵresetView"](ctx_r16.onSumChangeInMap($event));
    })("selectedMarker", function RaainDetailsComponent_div_0_ion_row_48_Template_raain_map_selectedMarker_3_listener($event) {
      _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵrestoreView"](_r15);
      const ctx_r17 = _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵnextContext"](2);
      return _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵresetView"](ctx_r17.onGaugeSelectInMap($event));
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementStart"](4, "div", 44)(5, "details", 45)(6, "summary");
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵtext"](7, "Image Details");
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementStart"](8, "div", 46)(9, "div", 47)(10, "span", 48);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵtext"](11, "Computed:");
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementStart"](12, "span", 49);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵtext"](13);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵpipe"](14, "date");
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementStart"](15, "div", 47)(16, "span", 48);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵtext"](17, "Version:");
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementStart"](18, "span", 49);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵtext"](19);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementStart"](20, "div", 47)(21, "span", 48);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵtext"](22, "Launched by:");
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementStart"](23, "span", 49);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵtext"](24);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementStart"](25, "div", 47)(26, "span", 48);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵtext"](27, "Time spent:");
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementStart"](28, "span", 49);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵtext"](29);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementStart"](30, "div", 47)(31, "span", 48);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵtext"](32, "Date:");
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementStart"](33, "span", 49);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵtext"](34);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵpipe"](35, "date");
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementStart"](36, "div", 47)(37, "span", 48);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵtext"](38, "Water in the map:");
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementStart"](39, "span", 49);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵtext"](40);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementEnd"]()()()()()();
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementStart"](41, "ion-col", 50)(42, "div", 51)(43, "div", 52)(44, "raain-compare-stack", 53);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵlistener"]("selectedPoint", function RaainDetailsComponent_div_0_ion_row_48_Template_raain_compare_stack_selectedPoint_44_listener($event) {
      _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵrestoreView"](_r15);
      const ctx_r18 = _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵnextContext"](2);
      return _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵresetView"](ctx_r18.onGaugeSelectInCompare($event));
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementStart"](45, "details", 45)(46, "summary");
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵtext"](47, "Compare Details");
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementStart"](48, "div", 46)(49, "div", 54)(50, "span", 48);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵtext"](51, "Computed:");
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementStart"](52, "span", 49);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵtext"](53);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵpipe"](54, "date");
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementStart"](55, "div", 47)(56, "span", 48);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵtext"](57, "Version:");
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementStart"](58, "span", 49);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵtext"](59);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementStart"](60, "div", 47)(61, "span", 48);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵtext"](62, "Launched by:");
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementStart"](63, "span", 49);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵtext"](64);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementStart"](65, "div", 47)(66, "span", 48);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵtext"](67, "Time spent:");
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementStart"](68, "span", 49);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵtext"](69);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementStart"](70, "div", 47)(71, "span", 48);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵtext"](72, "Gauges:");
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementStart"](73, "span", 49);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵtext"](74);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementStart"](75, "div", 47)(76, "span", 48);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵtext"](77, "Points:");
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementStart"](78, "span", 49);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵtext"](79);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementEnd"]()()()()()()();
  }
  if (rf & 2) {
    const ctx_r6 = _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵproperty"]("coordinates", ctx_r6.coordinates)("currentHeight", 500)("defaultDate", ctx_r6.dateShown)("markers", _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵpureFunction6"](34, _c1, ctx_r6.borders, ctx_r6.compareManager.gaugesInMap, ctx_r6.compareManager.gaugesInCompare, ctx_r6.compareManager.selectedGauges, ctx_r6.compareManager.selectedPixels, (ctx_r6.compareManager.pixelsSolutions == null ? null : ctx_r6.compareManager.pixelsSolutions.length) ? ctx_r6.compareManager.pixelsSolutions[0] : _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵpureFunction0"](33, _c0)))("showCumulative", ctx_r6.toggleCumulative)("sumFn", ctx_r6.refreshManager.sumFn)("sumValues", ctx_r6.refreshManager.sumValues)("timeframeContainers", ctx_r6.timeframeContainers)("timeframeDates", ctx_r6.timeframeDates);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵadvance"](10);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵpipeBind2"](14, 24, ctx_r6.refreshManager.rainComputationMapDoneDate, "yyyy-MM-dd HH:mm"));
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵadvance"](6);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵtextInterpolate"](ctx_r6.refreshManager.rainComputationMapVersion);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵadvance"](5);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵtextInterpolate"](ctx_r6.refreshManager.rainComputationMapLaunchedBy);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵadvance"](5);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵtextInterpolate1"]("", ctx_r6.refreshManager.rainComputationMapTimeSpentInMs, " ms");
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵadvance"](5);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵpipeBind2"](35, 27, ctx_r6.refreshManager.rainComputationMapDate, "yyyy-MM-dd HH:mm"));
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵadvance"](6);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵtextInterpolate"](ctx_r6.sumDetails);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵadvance"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵproperty"]("compareManager", ctx_r6.compareManager)("cumulative", ctx_r6.toggleCumulative);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵadvance"](5);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵproperty"]("ngClass", _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵpureFunction1"](41, _c2, (ctx_r6.refreshManager.rainComputationMapDoneDate == null ? null : ctx_r6.refreshManager.rainComputationMapDoneDate.getTime()) > (ctx_r6.compareManager.currentQualityDoneDate == null ? null : ctx_r6.compareManager.currentQualityDoneDate.getTime()) + 60000));
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵadvance"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵpipeBind2"](54, 30, ctx_r6.compareManager.currentQualityDoneDate, "yyyy-MM-dd HH:mm"));
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵadvance"](6);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵtextInterpolate"](ctx_r6.compareManager.compareVersion);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵadvance"](5);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵtextInterpolate"](ctx_r6.compareManager.currentQualityLaunchedBy);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵadvance"](5);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵtextInterpolate1"]("", ctx_r6.compareManager.currentQualityTimeSpentInMs, " ms");
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵadvance"](5);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵtextInterpolate"](ctx_r6.compareManager.gaugesInCompare.length);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵadvance"](5);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵtextInterpolate"](ctx_r6.compareManager.globalComparePoints.length);
  }
}
function RaainDetailsComponent_div_0_ion_progress_bar_50_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelement"](0, "ion-progress-bar", 40);
  }
  if (rf & 2) {
    const ctx_r7 = _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵproperty"]("buffer", ctx_r7.countsPeriod.progress / (((ctx_r7.timeframeDates == null ? null : ctx_r7.timeframeDates.length) || 10) + 3) + 0.01)("value", ctx_r7.countsPeriod.progress / (((ctx_r7.timeframeDates == null ? null : ctx_r7.timeframeDates.length) || 10) + 3));
  }
}
function RaainDetailsComponent_div_0_ion_card_51_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementStart"](0, "ion-card", 55)(1, "ion-card-header")(2, "ion-card-title");
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelement"](3, "ion-icon", 56);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵtext"](4, " Selected Gauge Data ");
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementStart"](5, "ion-card-content");
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelement"](6, "raain-date-focus", 57);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementEnd"]()();
  }
  if (rf & 2) {
    const ctx_r8 = _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵadvance"](6);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵproperty"]("currentHeight", 300)("focusDate", ctx_r8.periodBegin)("focusRange", ctx_r8.DateRange.DAY)("points", ctx_r8.gaugeSelectedPoints)("withoutAll", true);
  }
}
function RaainDetailsComponent_div_0_Template(rf, ctx) {
  if (rf & 1) {
    const _r20 = _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementStart"](0, "div", 1)(1, "ion-card", 2)(2, "ion-card-content")(3, "div", 3)(4, "div", 4)(5, "ion-button", 5);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵlistener"]("click", function RaainDetailsComponent_div_0_Template_ion_button_click_5_listener() {
      _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵrestoreView"](_r20);
      const ctx_r19 = _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵnextContext"]();
      return _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵresetView"](ctx_r19.setPeriodOfNow());
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelement"](6, "ion-icon", 6);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵtext"](7, " Now ");
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementStart"](8, "div", 7)(9, "ion-label");
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵtext"](10, "Start:");
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementStart"](11, "input", 8);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵlistener"]("change", function RaainDetailsComponent_div_0_Template_input_change_11_listener($event) {
      _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵrestoreView"](_r20);
      const ctx_r21 = _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵnextContext"]();
      return _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵresetView"](ctx_r21.onPeriodBeginChange($event));
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementStart"](12, "div", 9)(13, "ion-label");
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵtext"](14, "Duration:");
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementStart"](15, "ion-select", 10);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵlistener"]("ionDismiss", function RaainDetailsComponent_div_0_Template_ion_select_ionDismiss_15_listener($event) {
      _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵrestoreView"](_r20);
      const ctx_r22 = _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵnextContext"]();
      return _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵresetView"](ctx_r22.onPeriodDurationChange($event));
    })("ngModelChange", function RaainDetailsComponent_div_0_Template_ion_select_ngModelChange_15_listener($event) {
      _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵrestoreView"](_r20);
      const ctx_r23 = _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵnextContext"]();
      return _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵresetView"](ctx_r23.periodDurationAsString = $event);
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
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementEnd"]()()();
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementStart"](32, "div", 19)(33, "ion-label", 20);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵtext"](34, "All dates");
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementStart"](35, "ion-toggle", 21);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵlistener"]("ionChange", function RaainDetailsComponent_div_0_Template_ion_toggle_ionChange_35_listener() {
      _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵrestoreView"](_r20);
      const ctx_r24 = _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵnextContext"]();
      return _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵresetView"](ctx_r24.onEnableCountHistoryTab(ctx_r24.rainNode));
    })("ngModelChange", function RaainDetailsComponent_div_0_Template_ion_toggle_ngModelChange_35_listener($event) {
      _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵrestoreView"](_r20);
      const ctx_r25 = _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵnextContext"]();
      return _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵresetView"](ctx_r25.toggleHistory = $event);
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementEnd"]()()();
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementStart"](36, "div", 22);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵtext"](37);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵtemplate"](38, RaainDetailsComponent_div_0_div_38_Template, 2, 3, "div", 23);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementStart"](39, "ion-card", 24)(40, "ion-card-content", 25)(41, "ion-grid")(42, "ion-row", 26)(43, "ion-label");
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵtemplate"](44, RaainDetailsComponent_div_0_span_44_Template, 3, 2, "span", 27);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵtemplate"](45, RaainDetailsComponent_div_0_span_45_Template, 2, 0, "span", 28);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵtemplate"](46, RaainDetailsComponent_div_0_ion_button_46_Template, 3, 0, "ion-button", 29);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵtemplate"](47, RaainDetailsComponent_div_0_ion_progress_bar_47_Template, 1, 2, "ion-progress-bar", 30);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵtemplate"](48, RaainDetailsComponent_div_0_ion_row_48_Template, 80, 43, "ion-row", 31);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementStart"](49, "ion-row");
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵtemplate"](50, RaainDetailsComponent_div_0_ion_progress_bar_50_Template, 1, 2, "ion-progress-bar", 30);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementEnd"]()()()();
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵtemplate"](51, RaainDetailsComponent_div_0_ion_card_51_Template, 7, 5, "ion-card", 32);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementEnd"]();
  }
  if (rf & 2) {
    const ctx_r0 = _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵadvance"](11);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵproperty"]("value", ctx_r0.periodBeginAsString);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵadvance"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵproperty"]("ngModel", ctx_r0.periodDurationAsString);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵadvance"](20);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵproperty"]("ngModel", ctx_r0.toggleHistory)("checked", ctx_r0.toggleHistory);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵtextInterpolate"](ctx_r0.onChangeDetectionTest(ctx_r0.rainNode));
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵproperty"]("ngIf", ctx_r0.toggleHistory);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵadvance"](6);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵproperty"]("ngIf", ctx_r0.getPercentOfComputations());
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵproperty"]("ngIf", !ctx_r0.getPercentOfComputations());
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵproperty"]("ngIf", !ctx_r0.refreshInProgress);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵadvance"](1);
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
      }, {
        label: '% Quality',
        style: 'line',
        values
      }];
      const range = (0,_tools__WEBPACK_IMPORTED_MODULE_3__.mapDateRangeToString)(focusRange);
      let data = fakeData;
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
        console.log('fetchData TODO:', focusDate.toISOString(), range);
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
        }, {
          label: '% Quality',
          style: 'line',
          values: counts.percentQ.map(c => {
            return {
              date: RaainDetailsComponent.DateUTC(c.name),
              value: Math.min(100, c.x)
            };
          })
        }];
      }
      console.log(`fetchData DONE ${range}`, data);
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
      _this5.refreshManager.period = {
        begin: _this5.periodBegin,
        end: _this5.periodEnd
      };
    })();
  }
  onDateChangeInCount(dateChanged) {
    var _this6 = this;
    return (0,_opt_atlassian_pipelines_agent_build_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_0__["default"])(function* () {
      console.log('onDateChangeInCount', dateChanged);
      _this6.periodBeginAsString = dateChanged.toISOString().substring(0, 11) + dateChanged.toLocaleTimeString().substring(0, 5);
      _this6.periodDurationAsString = '1';
      yield _this6.onPeriodBeginChange(null);
      _this6.refreshManager.refresh(false, true);
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
      const dayBegin = new Date(_this0.periodBegin.toISOString().substring(0, 10));
      const dayEnd = new Date(dayBegin.getTime() + 24 * 60 * 60 * 1000 - 1);
      const gaugeMeasures = yield _this0.profileService.getGaugeMeasures(gaugeSelected.id, dayBegin, dayEnd);
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
      console.log('this.gaugeSelectedPoints:', _this0.gaugeSelectedPoints);
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
      _this10.refreshManager.refresh(false, _this10.toggleAdmin);
    })();
  }
  launchComputation() {
    var _this11 = this;
    return (0,_opt_atlassian_pipelines_agent_build_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_0__["default"])(function* () {
      yield _this11.profileService.launchRainComputation(_this11.rainNode.id, _this11.dateShown);
    })();
  }
  setPeriodOfNow() {
    var _this12 = this;
    return (0,_opt_atlassian_pipelines_agent_build_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_0__["default"])(function* () {
      // should look like: "2024-08-26T12:13"
      const last30mn = new Date();
      last30mn.setMinutes(last30mn.getMinutes() - 30);
      _this12.periodBeginAsString = last30mn.toISOString().substring(0, 11) + last30mn.toLocaleTimeString().substring(0, 5);
      _this12.periodDurationAsString = '1';
      yield _this12.onPeriodBeginChange(null);
      _this12.refreshManager.refresh(false, true);
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
    var _this13 = this;
    return (0,_opt_atlassian_pipelines_agent_build_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_0__["default"])(function* () {
      _this13.cleanAll();
      yield _this13.initRain();
    })();
  }
  initRain() {
    var _this14 = this;
    return (0,_opt_atlassian_pipelines_agent_build_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_0__["default"])(function* () {
      if (!_this14.rainNode) {
        return;
      }
      _this14.refreshManager.rainNode = _this14.rainNode;
      _this14.compareManager.rainNode = _this14.rainNode;
      _this14.refreshManager.setMethods(_this14.onRefreshInProgress.bind(_this14), _this14.onRefreshDone.bind(_this14), _this14.onFetchDone.bind(_this14));
      const center = _this14.rainNode.getCenter();
      _this14.coordinates = new raain_ui__WEBPACK_IMPORTED_MODULE_2__.MapLatLng(center.lat, center.lng);
      _this14.teamNode = yield _this14.profileService.getTeam(_this14.rainNode.getLink('team').getId());
      if (_this14.periodBegin && _this14.periodEnd) {
        _this14.refreshManager.period = {
          begin: _this14.periodBegin,
          end: _this14.periodEnd
        };
        yield _this14.refreshManager.refresh(false, _this14.toggleAdmin);
      }
    })();
  }
  onRefreshInProgress(countPeriods, timeframeDates) {
    var _this15 = this;
    return (0,_opt_atlassian_pipelines_agent_build_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_0__["default"])(function* () {
      _this15.refreshInProgress = true;
      _this15.countsPeriod = countPeriods;
      _this15.timeframeDates = timeframeDates;
    })();
  }
  onRefreshDone(timeframeDates) {
    var _this16 = this;
    return (0,_opt_atlassian_pipelines_agent_build_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_0__["default"])(function* () {
      _this16.timeframeDates = timeframeDates;
      _this16.refreshInProgress = false;
    })();
  }
  onFetchDone(timeframeContainers) {
    var _this17 = this;
    return (0,_opt_atlassian_pipelines_agent_build_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_0__["default"])(function* () {
      _this17.timeframeContainers = timeframeContainers;
    })();
  }
  change(changes) {
    var _this18 = this;
    return (0,_opt_atlassian_pipelines_agent_build_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_0__["default"])(function* () {
      yield _this18.init();
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
      consts: [["class", "raain-details-container", 4, "ngIf"], [1, "raain-details-container"], [1, "period-card"], [1, "period-controls"], [1, "period-row"], ["fill", "outline", 1, "now-button", 3, "click"], ["name", "time-outline", "slot", "start"], [1, "period-start", "ion-hide-md-down"], ["type", "datetime-local", 1, "datetime-input", 3, "value", "change"], [1, "period-duration", "ion-hide-md-down"], ["id", "periodDuration", "interface", "popover", 1, "duration-select", 3, "ngModel", "ionDismiss", "ngModelChange"], ["value", "0.25"], ["value", "0.5"], ["value", "1"], ["value", "2"], ["value", "3"], ["value", "4"], ["value", "5"], ["value", "6"], ["slot", "end", 1, "node-controls"], [1, "toggle-label"], [3, "ngModel", "checked", "ionChange", "ngModelChange"], [1, "hidden-label"], ["class", "period-controls", 4, "ngIf"], [1, "map-card"], [1, "map-content"], ["id", "progressAndRefresh"], ["class", "map-stats", 4, "ngIf"], ["class", "no-data", 4, "ngIf"], ["class", "refresh-button", 3, "click", 4, "ngIf"], ["color", "primary", 3, "buffer", "value", 4, "ngIf"], [4, "ngIf"], ["class", "gauge-card", 4, "ngIf"], [3, "currentHeight", "fetchData", "points", "changedDate"], [1, "map-stats"], ["class", "progress-indicator", 4, "ngIf"], [1, "progress-indicator"], [1, "no-data"], [1, "refresh-button", 3, "click"], ["name", "refresh-outline", "slot", "start"], ["color", "primary", 3, "buffer", "value"], ["size-lg", "7", 1, "map-column"], [1, "map-container"], [3, "coordinates", "currentHeight", "defaultDate", "markers", "showCumulative", "sumFn", "sumValues", "timeframeContainers", "timeframeDates", "changedDate", "changedSum", "selectedMarker"], [1, "data-column"], [1, "technical-details"], [1, "details-content"], [1, "detail-row"], [1, "detail-label"], [1, "detail-value"], ["size-lg", "5", 1, "data-column"], [1, "data-panel"], [1, "compare-stack"], [3, "compareManager", "cumulative", "selectedPoint"], [1, "detail-row", 3, "ngClass"], [1, "gauge-card"], ["name", "analytics-outline"], [3, "currentHeight", "focusDate", "focusRange", "points", "withoutAll"]],
      template: function RaainDetailsComponent_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵtemplate"](0, RaainDetailsComponent_div_0_Template, 52, 13, "div", 0);
        }
        if (rf & 2) {
          _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵproperty"]("ngIf", ctx.rainNode);
        }
      },
      dependencies: [_angular_common__WEBPACK_IMPORTED_MODULE_10__.NgClass, _angular_common__WEBPACK_IMPORTED_MODULE_10__.NgIf, _angular_forms__WEBPACK_IMPORTED_MODULE_11__.NgControlStatus, _angular_forms__WEBPACK_IMPORTED_MODULE_11__.NgModel, _ionic_angular__WEBPACK_IMPORTED_MODULE_12__.IonButton, _ionic_angular__WEBPACK_IMPORTED_MODULE_12__.IonCard, _ionic_angular__WEBPACK_IMPORTED_MODULE_12__.IonCardContent, _ionic_angular__WEBPACK_IMPORTED_MODULE_12__.IonCardHeader, _ionic_angular__WEBPACK_IMPORTED_MODULE_12__.IonCardTitle, _ionic_angular__WEBPACK_IMPORTED_MODULE_12__.IonCol, _ionic_angular__WEBPACK_IMPORTED_MODULE_12__.IonGrid, _ionic_angular__WEBPACK_IMPORTED_MODULE_12__.IonIcon, _ionic_angular__WEBPACK_IMPORTED_MODULE_12__.IonLabel, _ionic_angular__WEBPACK_IMPORTED_MODULE_12__.IonProgressBar, _ionic_angular__WEBPACK_IMPORTED_MODULE_12__.IonRow, _ionic_angular__WEBPACK_IMPORTED_MODULE_12__.IonSelect, _ionic_angular__WEBPACK_IMPORTED_MODULE_12__.IonSelectOption, _ionic_angular__WEBPACK_IMPORTED_MODULE_12__.IonToggle, _ionic_angular__WEBPACK_IMPORTED_MODULE_12__.BooleanValueAccessor, _ionic_angular__WEBPACK_IMPORTED_MODULE_12__.SelectValueAccessor, _raain_map_raain_map_component__WEBPACK_IMPORTED_MODULE_5__.RaainMapComponent, _raain_compare_stack_raain_compare_stack_component__WEBPACK_IMPORTED_MODULE_6__.RaainCompareStackComponent, _raain_date_focus_raain_date_focus_component__WEBPACK_IMPORTED_MODULE_7__.RaainDateFocusComponent, _raain_date_dynamic_raain_date_dynamic_component__WEBPACK_IMPORTED_MODULE_8__.RaainDateDynamicComponent, _angular_common__WEBPACK_IMPORTED_MODULE_10__.DatePipe],
      styles: [".raain-details-container[_ngcontent-%COMP%] {\n  max-width: var(--app-max-width);\n  margin: 0 auto;\n  padding: 0 0 24px;\n}\n\n.raain-details-card[_ngcontent-%COMP%] {\n  width: 100%;\n  margin-bottom: 20px;\n}\n.raain-details-card[_ngcontent-%COMP%]   ion-card-header[_ngcontent-%COMP%] {\n  border-bottom: 1px solid rgba(var(--ion-color-medium-rgb), 0.2);\n}\n.raain-details-card[_ngcontent-%COMP%]   ion-card-header[_ngcontent-%COMP%]   ion-card-title[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: center;\n}\n.raain-details-card[_ngcontent-%COMP%]   ion-card-header[_ngcontent-%COMP%]   ion-card-title[_ngcontent-%COMP%]   ion-icon[_ngcontent-%COMP%] {\n  margin-right: 8px;\n  color: var(--ion-color-primary);\n}\n\n.node-info-card[_ngcontent-%COMP%] {\n  background-color: var(--ion-color-light);\n}\n.node-info-card[_ngcontent-%COMP%]   .node-header[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: center;\n}\n.node-info-card[_ngcontent-%COMP%]   .node-header[_ngcontent-%COMP%]   .node-status[_ngcontent-%COMP%] {\n  margin-right: 16px;\n}\n.node-info-card[_ngcontent-%COMP%]   .node-header[_ngcontent-%COMP%]   .node-status[_ngcontent-%COMP%]   ion-icon[_ngcontent-%COMP%] {\n  font-size: 24px;\n}\n.node-info-card[_ngcontent-%COMP%]   .node-header[_ngcontent-%COMP%]   .node-titles[_ngcontent-%COMP%] {\n  flex: 1;\n}\n.node-info-card[_ngcontent-%COMP%]   .node-header[_ngcontent-%COMP%]   .node-titles[_ngcontent-%COMP%]   ion-card-title[_ngcontent-%COMP%] {\n  margin: 0;\n  font-size: 1.4rem;\n  font-weight: 600;\n  color: var(--ion-color-dark);\n}\n.node-info-card[_ngcontent-%COMP%]   .node-header[_ngcontent-%COMP%]   .node-titles[_ngcontent-%COMP%]   ion-card-subtitle[_ngcontent-%COMP%] {\n  padding-left: 0;\n  margin: 4px 0 0;\n  font-size: 0.9rem;\n  color: var(--ion-color-medium);\n}\n.node-info-card[_ngcontent-%COMP%]   .node-header[_ngcontent-%COMP%]   .node-controls[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: center;\n}\n.node-info-card[_ngcontent-%COMP%]   .node-header[_ngcontent-%COMP%]   .node-controls[_ngcontent-%COMP%]   .toggle-label[_ngcontent-%COMP%] {\n  margin-right: 8px;\n  font-size: 0.9rem;\n  color: var(--ion-color-medium);\n}\n\n.count-map-card[_ngcontent-%COMP%] {\n  background-color: var(--ion-color-light);\n}\n\n.period-card[_ngcontent-%COMP%] {\n  background-color: var(--ion-color-light);\n}\n.period-card[_ngcontent-%COMP%]   ion-card-title[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: center;\n}\n.period-card[_ngcontent-%COMP%]   ion-card-title[_ngcontent-%COMP%]   ion-icon[_ngcontent-%COMP%] {\n  margin-right: 8px;\n  color: var(--ion-color-primary);\n  font-size: 20px;\n}\n\n.period-row[_ngcontent-%COMP%] {\n  display: flex;\n  flex-wrap: wrap;\n  align-items: center;\n  gap: 16px;\n}\n\n.now-button[_ngcontent-%COMP%] {\n  min-width: 100px;\n}\n\n.refresh-button[_ngcontent-%COMP%]   ion-icon[_ngcontent-%COMP%] {\n  margin-right: 4px;\n  color: var(--ion-color-light);\n}\n\n.period-start[_ngcontent-%COMP%], .period-duration[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: center;\n}\n\n.hidden-label[_ngcontent-%COMP%] {\n  display: none;\n}\n\n.datetime-input[_ngcontent-%COMP%], #periodDuration[_ngcontent-%COMP%], .duration-select[_ngcontent-%COMP%] {\n  padding: 8px 12px;\n  border: 1px solid rgba(var(--ion-color-medium-rgb), 0.3);\n  border-radius: var(--ion-border-radius);\n  background-color: var(--ion-color-light);\n  font-family: var(--ion-font-family);\n}\n.datetime-input[_ngcontent-%COMP%]:focus, #periodDuration[_ngcontent-%COMP%]:focus, .duration-select[_ngcontent-%COMP%]:focus {\n  outline: none;\n  border-color: var(--ion-color-primary);\n}\n\n#periodDuration[_ngcontent-%COMP%], .duration-select[_ngcontent-%COMP%] {\n  min-width: 150px;\n}\n\n.map-card[_ngcontent-%COMP%] {\n  background-color: var(--ion-color-light);\n}\n.map-card[_ngcontent-%COMP%]   .map-header[_ngcontent-%COMP%] {\n  display: flex;\n  justify-content: space-between;\n  align-items: center;\n  flex-direction: row;\n  gap: 16px;\n}\n.map-card[_ngcontent-%COMP%]   .map-stats[_ngcontent-%COMP%], .map-card[_ngcontent-%COMP%]   .no-data[_ngcontent-%COMP%] {\n  font-size: 0.8rem;\n  font-weight: normal;\n  color: var(--ion-color-medium);\n  margin-left: 8px;\n  white-space: nowrap;\n  overflow: hidden;\n  text-overflow: ellipsis;\n}\n.map-card[_ngcontent-%COMP%]   .progress-indicator[_ngcontent-%COMP%] {\n  color: var(--ion-color-primary);\n}\n.map-card[_ngcontent-%COMP%]   .map-toggle[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: center;\n}\n.map-card[_ngcontent-%COMP%]   .map-content[_ngcontent-%COMP%] {\n  padding: 0;\n}\n.map-card[_ngcontent-%COMP%]   .map-content[_ngcontent-%COMP%]   ion-grid[_ngcontent-%COMP%], .map-card[_ngcontent-%COMP%]   .map-content[_ngcontent-%COMP%]   ion-row[_ngcontent-%COMP%] {\n  padding: 0;\n  margin: 0;\n}\n.map-card[_ngcontent-%COMP%]   .map-content[_ngcontent-%COMP%]   #progressAndRefresh[_ngcontent-%COMP%] {\n  display: flex;\n  justify-content: flex-end;\n  align-items: center;\n  padding: 8px 16px;\n}\n.map-card[_ngcontent-%COMP%]   .map-content[_ngcontent-%COMP%]   #progressAndRefresh[_ngcontent-%COMP%]   ion-label[_ngcontent-%COMP%] {\n  margin-right: 16px;\n}\n.map-card[_ngcontent-%COMP%]   .map-content[_ngcontent-%COMP%]   .map-column[_ngcontent-%COMP%] {\n  padding: 0;\n}\n.map-card[_ngcontent-%COMP%]   .map-content[_ngcontent-%COMP%]   .map-column[_ngcontent-%COMP%]   .map-container[_ngcontent-%COMP%] {\n  border-radius: var(--ion-border-radius);\n  overflow: visible;\n}\n.map-card[_ngcontent-%COMP%]   .map-content[_ngcontent-%COMP%]   .data-column[_ngcontent-%COMP%] {\n  padding: 16px;\n}\n.map-card[_ngcontent-%COMP%]   .map-content[_ngcontent-%COMP%]   .data-column[_ngcontent-%COMP%]   .data-panel[_ngcontent-%COMP%] {\n  height: 100%;\n  display: flex;\n  flex-direction: column;\n}\n.map-card[_ngcontent-%COMP%]   .map-content[_ngcontent-%COMP%]   .data-column[_ngcontent-%COMP%]   .panel-header[_ngcontent-%COMP%] {\n  display: flex;\n  justify-content: space-between;\n  align-items: center;\n  margin-bottom: 16px;\n}\n.map-card[_ngcontent-%COMP%]   .map-content[_ngcontent-%COMP%]   .data-column[_ngcontent-%COMP%]   .panel-header[_ngcontent-%COMP%]   h3[_ngcontent-%COMP%] {\n  margin: 0;\n  font-size: 1.2rem;\n  font-weight: 600;\n}\n.map-card[_ngcontent-%COMP%]   .map-content[_ngcontent-%COMP%]   .data-column[_ngcontent-%COMP%]   .computation-info[_ngcontent-%COMP%], .map-card[_ngcontent-%COMP%]   .map-content[_ngcontent-%COMP%]   .data-column[_ngcontent-%COMP%]   .technical-details[_ngcontent-%COMP%] {\n  background-color: rgba(var(--ion-color-light-rgb), 0.5);\n  border-radius: var(--ion-border-radius);\n  padding: 12px;\n  margin-bottom: 16px;\n}\n.map-card[_ngcontent-%COMP%]   .map-content[_ngcontent-%COMP%]   .data-column[_ngcontent-%COMP%]   .info-row[_ngcontent-%COMP%], .map-card[_ngcontent-%COMP%]   .map-content[_ngcontent-%COMP%]   .data-column[_ngcontent-%COMP%]   .detail-row[_ngcontent-%COMP%] {\n  display: flex;\n  margin-bottom: 4px;\n  font-size: 0.9rem;\n}\n.map-card[_ngcontent-%COMP%]   .map-content[_ngcontent-%COMP%]   .data-column[_ngcontent-%COMP%]   .info-row[_ngcontent-%COMP%]:last-child, .map-card[_ngcontent-%COMP%]   .map-content[_ngcontent-%COMP%]   .data-column[_ngcontent-%COMP%]   .detail-row[_ngcontent-%COMP%]:last-child {\n  margin-bottom: 0;\n}\n.map-card[_ngcontent-%COMP%]   .map-content[_ngcontent-%COMP%]   .data-column[_ngcontent-%COMP%]   .compare-stack[_ngcontent-%COMP%] {\n  flex: 1;\n  margin-bottom: 16px;\n}\n.map-card[_ngcontent-%COMP%]   .map-content[_ngcontent-%COMP%]   .data-column[_ngcontent-%COMP%]   .technical-details[_ngcontent-%COMP%] {\n  background-color: rgba(var(--ion-color-light-rgb), 0.5);\n  border-radius: var(--ion-border-radius);\n  padding: 12px;\n}\n.map-card[_ngcontent-%COMP%]   .map-content[_ngcontent-%COMP%]   .data-column[_ngcontent-%COMP%]   .technical-details[_ngcontent-%COMP%]   summary[_ngcontent-%COMP%] {\n  font-weight: 500;\n  color: var(--ion-color-medium);\n  cursor: pointer;\n}\n.map-card[_ngcontent-%COMP%]   .map-content[_ngcontent-%COMP%]   .data-column[_ngcontent-%COMP%]   .technical-details[_ngcontent-%COMP%]   summary[_ngcontent-%COMP%]:hover {\n  color: var(--ion-color-primary);\n}\n.map-card[_ngcontent-%COMP%]   .map-content[_ngcontent-%COMP%]   .data-column[_ngcontent-%COMP%]   .technical-details[_ngcontent-%COMP%]   .details-content[_ngcontent-%COMP%] {\n  margin-top: 8px;\n  font-size: 0.85rem;\n}\n.map-card[_ngcontent-%COMP%]   .map-content[_ngcontent-%COMP%]   .data-column[_ngcontent-%COMP%]   .technical-details[_ngcontent-%COMP%]   .details-content[_ngcontent-%COMP%]   .detail-row[_ngcontent-%COMP%] {\n  display: flex;\n  flex-wrap: wrap;\n  margin-bottom: 4px;\n}\n.map-card[_ngcontent-%COMP%]   .map-content[_ngcontent-%COMP%]   .data-column[_ngcontent-%COMP%]   .technical-details[_ngcontent-%COMP%]   .details-content[_ngcontent-%COMP%]   .detail-row[_ngcontent-%COMP%]:last-child {\n  margin-bottom: 0;\n}\n.map-card[_ngcontent-%COMP%]   .map-content[_ngcontent-%COMP%]   .data-column[_ngcontent-%COMP%]   .technical-details[_ngcontent-%COMP%]   .details-content[_ngcontent-%COMP%]   .detail-row.warning[_ngcontent-%COMP%] {\n  color: var(--ion-color-warning);\n}\n.map-card[_ngcontent-%COMP%]   .map-content[_ngcontent-%COMP%]   .data-column[_ngcontent-%COMP%]   .technical-details[_ngcontent-%COMP%]   .details-content[_ngcontent-%COMP%]   .detail-row[_ngcontent-%COMP%]   .detail-label[_ngcontent-%COMP%] {\n  font-weight: 500;\n  color: var(--ion-color-dark);\n  width: 140px;\n}\n.map-card[_ngcontent-%COMP%]   .map-content[_ngcontent-%COMP%]   .data-column[_ngcontent-%COMP%]   .technical-details[_ngcontent-%COMP%]   .details-content[_ngcontent-%COMP%]   .detail-row[_ngcontent-%COMP%]   .detail-value[_ngcontent-%COMP%] {\n  color: var(--ion-color-medium);\n}\n.map-card[_ngcontent-%COMP%]   .map-content[_ngcontent-%COMP%]   .data-column[_ngcontent-%COMP%]   .technical-details[_ngcontent-%COMP%]   .details-content[_ngcontent-%COMP%]   .detail-row[_ngcontent-%COMP%]   .warning-text[_ngcontent-%COMP%] {\n  color: var(--ion-color-danger);\n  margin-left: 8px;\n}\n\n.gauge-card[_ngcontent-%COMP%] {\n  background-color: var(--ion-color-light);\n}\n.gauge-card[_ngcontent-%COMP%]   ion-card-title[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: center;\n}\n.gauge-card[_ngcontent-%COMP%]   ion-card-title[_ngcontent-%COMP%]   ion-icon[_ngcontent-%COMP%] {\n  margin-right: 8px;\n  color: var(--ion-color-primary);\n  font-size: 20px;\n}\n\nraain-compare-stack[_ngcontent-%COMP%] {\n  width: 100%;\n  display: block;\n}\n\n@media (max-width: 768px) {\n  .period-row[_ngcontent-%COMP%] {\n    flex-direction: row;\n    justify-content: space-between;\n    align-items: center;\n  }\n  .map-header[_ngcontent-%COMP%] {\n    flex-direction: row;\n    justify-content: space-between;\n    align-items: center;\n    gap: 16px;\n  }\n}\n/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8uL3NyYy9jb3JlL3NoYXJlZC9yYWFpbi1kZXRhaWxzL3JhYWluLWRldGFpbHMuY29tcG9uZW50LnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQ0E7RUFDRSwrQkFBQTtFQUNBLGNBQUE7RUFDQSxpQkFBQTtBQUFGOztBQUlBO0VBQ0UsV0FBQTtFQUNBLG1CQUFBO0FBREY7QUFHRTtFQUNFLCtEQUFBO0FBREo7QUFHSTtFQUNFLGFBQUE7RUFDQSxtQkFBQTtBQUROO0FBR007RUFDRSxpQkFBQTtFQUNBLCtCQUFBO0FBRFI7O0FBUUE7RUFDRSx3Q0FBQTtBQUxGO0FBT0U7RUFDRSxhQUFBO0VBQ0EsbUJBQUE7QUFMSjtBQU9JO0VBQ0Usa0JBQUE7QUFMTjtBQU9NO0VBQ0UsZUFBQTtBQUxSO0FBU0k7RUFDRSxPQUFBO0FBUE47QUFTTTtFQUNFLFNBQUE7RUFDQSxpQkFBQTtFQUNBLGdCQUFBO0VBQ0EsNEJBQUE7QUFQUjtBQVVNO0VBQ0UsZUFBQTtFQUNBLGVBQUE7RUFDQSxpQkFBQTtFQUNBLDhCQUFBO0FBUlI7QUFZSTtFQUNFLGFBQUE7RUFDQSxtQkFBQTtBQVZOO0FBWU07RUFDRSxpQkFBQTtFQUNBLGlCQUFBO0VBQ0EsOEJBQUE7QUFWUjs7QUFpQkE7RUFDRSx3Q0FBQTtBQWRGOztBQWtCQTtFQUNFLHdDQUFBO0FBZkY7QUFpQkU7RUFDRSxhQUFBO0VBQ0EsbUJBQUE7QUFmSjtBQWlCSTtFQUNFLGlCQUFBO0VBQ0EsK0JBQUE7RUFDQSxlQUFBO0FBZk47O0FBb0JBO0VBQ0UsYUFBQTtFQUNBLGVBQUE7RUFDQSxtQkFBQTtFQUNBLFNBQUE7QUFqQkY7O0FBb0JBO0VBQ0UsZ0JBQUE7QUFqQkY7O0FBcUJFO0VBQ0UsaUJBQUE7RUFDQSw2QkFBQTtBQWxCSjs7QUFzQkE7RUFDRSxhQUFBO0VBQ0EsbUJBQUE7QUFuQkY7O0FBc0JBO0VBQ0UsYUFBQTtBQW5CRjs7QUF1QkE7RUFDRSxpQkFBQTtFQUNBLHdEQUFBO0VBQ0EsdUNBQUE7RUFDQSx3Q0FBQTtFQUNBLG1DQUFBO0FBcEJGO0FBc0JFO0VBQ0UsYUFBQTtFQUNBLHNDQUFBO0FBcEJKOztBQXdCQTtFQUNFLGdCQUFBO0FBckJGOztBQXlCQTtFQUNFLHdDQUFBO0FBdEJGO0FBd0JFO0VBQ0UsYUFBQTtFQUNBLDhCQUFBO0VBQ0EsbUJBQUE7RUFDQSxtQkFBQTtFQUNBLFNBQUE7QUF0Qko7QUF5QkU7RUFDRSxpQkFBQTtFQUNBLG1CQUFBO0VBQ0EsOEJBQUE7RUFDQSxnQkFBQTtFQUNBLG1CQUFBO0VBQ0EsZ0JBQUE7RUFDQSx1QkFBQTtBQXZCSjtBQTBCRTtFQUNFLCtCQUFBO0FBeEJKO0FBMkJFO0VBQ0UsYUFBQTtFQUNBLG1CQUFBO0FBekJKO0FBNEJFO0VBQ0UsVUFBQTtBQTFCSjtBQTRCSTtFQUNFLFVBQUE7RUFDQSxTQUFBO0FBMUJOO0FBNkJJO0VBQ0UsYUFBQTtFQUNBLHlCQUFBO0VBQ0EsbUJBQUE7RUFDQSxpQkFBQTtBQTNCTjtBQTZCTTtFQUNFLGtCQUFBO0FBM0JSO0FBK0JJO0VBQ0UsVUFBQTtBQTdCTjtBQStCTTtFQUNFLHVDQUFBO0VBQ0EsaUJBQUE7QUE3QlI7QUFpQ0k7RUFDRSxhQUFBO0FBL0JOO0FBaUNNO0VBQ0UsWUFBQTtFQUNBLGFBQUE7RUFDQSxzQkFBQTtBQS9CUjtBQWtDTTtFQUNFLGFBQUE7RUFDQSw4QkFBQTtFQUNBLG1CQUFBO0VBQ0EsbUJBQUE7QUFoQ1I7QUFrQ1E7RUFDRSxTQUFBO0VBQ0EsaUJBQUE7RUFDQSxnQkFBQTtBQWhDVjtBQW9DTTtFQUNFLHVEQUFBO0VBQ0EsdUNBQUE7RUFDQSxhQUFBO0VBQ0EsbUJBQUE7QUFsQ1I7QUFxQ007RUFDRSxhQUFBO0VBQ0Esa0JBQUE7RUFDQSxpQkFBQTtBQW5DUjtBQXFDUTtFQUNFLGdCQUFBO0FBbkNWO0FBdUNNO0VBQ0UsT0FBQTtFQUNBLG1CQUFBO0FBckNSO0FBd0NNO0VBQ0UsdURBQUE7RUFDQSx1Q0FBQTtFQUNBLGFBQUE7QUF0Q1I7QUF3Q1E7RUFDRSxnQkFBQTtFQUNBLDhCQUFBO0VBQ0EsZUFBQTtBQXRDVjtBQXdDVTtFQUNFLCtCQUFBO0FBdENaO0FBMENRO0VBQ0UsZUFBQTtFQUNBLGtCQUFBO0FBeENWO0FBMENVO0VBQ0UsYUFBQTtFQUNBLGVBQUE7RUFDQSxrQkFBQTtBQXhDWjtBQTBDWTtFQUNFLGdCQUFBO0FBeENkO0FBMkNZO0VBQ0UsK0JBQUE7QUF6Q2Q7QUE0Q1k7RUFDRSxnQkFBQTtFQUNBLDRCQUFBO0VBQ0EsWUFBQTtBQTFDZDtBQTZDWTtFQUNFLDhCQUFBO0FBM0NkO0FBOENZO0VBQ0UsOEJBQUE7RUFDQSxnQkFBQTtBQTVDZDs7QUFzREE7RUFDRSx3Q0FBQTtBQW5ERjtBQXFERTtFQUNFLGFBQUE7RUFDQSxtQkFBQTtBQW5ESjtBQXFESTtFQUNFLGlCQUFBO0VBQ0EsK0JBQUE7RUFDQSxlQUFBO0FBbkROOztBQTJEQTtFQUNFLFdBQUE7RUFDQSxjQUFBO0FBeERGOztBQTREQTtFQUNFO0lBQ0UsbUJBQUE7SUFDQSw4QkFBQTtJQUNBLG1CQUFBO0VBekRGO0VBNERBO0lBQ0UsbUJBQUE7SUFDQSw4QkFBQTtJQUNBLG1CQUFBO0lBQ0EsU0FBQTtFQTFERjtBQUNGIiwic291cmNlc0NvbnRlbnQiOlsiLy8gTWFpbiBjb250YWluZXJcbi5yYWFpbi1kZXRhaWxzLWNvbnRhaW5lciB7XG4gIG1heC13aWR0aDogdmFyKC0tYXBwLW1heC13aWR0aCk7XG4gIG1hcmdpbjogMCBhdXRvO1xuICBwYWRkaW5nOiAwIDAgMjRweDtcbn1cblxuLy8gQ2FyZCBzdHlsZXMgc3BlY2lmaWMgdG8gdGhpcyBjb21wb25lbnRcbi5yYWFpbi1kZXRhaWxzLWNhcmQge1xuICB3aWR0aDogMTAwJTtcbiAgbWFyZ2luLWJvdHRvbTogMjBweDtcblxuICBpb24tY2FyZC1oZWFkZXIge1xuICAgIGJvcmRlci1ib3R0b206IDFweCBzb2xpZCByZ2JhKHZhcigtLWlvbi1jb2xvci1tZWRpdW0tcmdiKSwgMC4yKTtcblxuICAgIGlvbi1jYXJkLXRpdGxlIHtcbiAgICAgIGRpc3BsYXk6IGZsZXg7XG4gICAgICBhbGlnbi1pdGVtczogY2VudGVyO1xuXG4gICAgICBpb24taWNvbiB7XG4gICAgICAgIG1hcmdpbi1yaWdodDogOHB4O1xuICAgICAgICBjb2xvcjogdmFyKC0taW9uLWNvbG9yLXByaW1hcnkpO1xuICAgICAgfVxuICAgIH1cbiAgfVxufVxuXG4vLyBOb2RlIGluZm8gY2FyZFxuLm5vZGUtaW5mby1jYXJkIHtcbiAgYmFja2dyb3VuZC1jb2xvcjogdmFyKC0taW9uLWNvbG9yLWxpZ2h0KTtcblxuICAubm9kZS1oZWFkZXIge1xuICAgIGRpc3BsYXk6IGZsZXg7XG4gICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcblxuICAgIC5ub2RlLXN0YXR1cyB7XG4gICAgICBtYXJnaW4tcmlnaHQ6IDE2cHg7XG5cbiAgICAgIGlvbi1pY29uIHtcbiAgICAgICAgZm9udC1zaXplOiAyNHB4O1xuICAgICAgfVxuICAgIH1cblxuICAgIC5ub2RlLXRpdGxlcyB7XG4gICAgICBmbGV4OiAxO1xuXG4gICAgICBpb24tY2FyZC10aXRsZSB7XG4gICAgICAgIG1hcmdpbjogMDtcbiAgICAgICAgZm9udC1zaXplOiAxLjRyZW07XG4gICAgICAgIGZvbnQtd2VpZ2h0OiA2MDA7XG4gICAgICAgIGNvbG9yOiB2YXIoLS1pb24tY29sb3ItZGFyayk7XG4gICAgICB9XG5cbiAgICAgIGlvbi1jYXJkLXN1YnRpdGxlIHtcbiAgICAgICAgcGFkZGluZy1sZWZ0OiAwO1xuICAgICAgICBtYXJnaW46IDRweCAwIDA7XG4gICAgICAgIGZvbnQtc2l6ZTogMC45cmVtO1xuICAgICAgICBjb2xvcjogdmFyKC0taW9uLWNvbG9yLW1lZGl1bSk7XG4gICAgICB9XG4gICAgfVxuXG4gICAgLm5vZGUtY29udHJvbHMge1xuICAgICAgZGlzcGxheTogZmxleDtcbiAgICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG5cbiAgICAgIC50b2dnbGUtbGFiZWwge1xuICAgICAgICBtYXJnaW4tcmlnaHQ6IDhweDtcbiAgICAgICAgZm9udC1zaXplOiAwLjlyZW07XG4gICAgICAgIGNvbG9yOiB2YXIoLS1pb24tY29sb3ItbWVkaXVtKTtcbiAgICAgIH1cbiAgICB9XG4gIH1cbn1cblxuLy8gQ291bnQgbWFwIGNhcmRcbi5jb3VudC1tYXAtY2FyZCB7XG4gIGJhY2tncm91bmQtY29sb3I6IHZhcigtLWlvbi1jb2xvci1saWdodCk7XG59XG5cbi8vIFBlcmlvZCBjYXJkIGFuZCBjb250cm9sc1xuLnBlcmlvZC1jYXJkIHtcbiAgYmFja2dyb3VuZC1jb2xvcjogdmFyKC0taW9uLWNvbG9yLWxpZ2h0KTtcblxuICBpb24tY2FyZC10aXRsZSB7XG4gICAgZGlzcGxheTogZmxleDtcbiAgICBhbGlnbi1pdGVtczogY2VudGVyO1xuXG4gICAgaW9uLWljb24ge1xuICAgICAgbWFyZ2luLXJpZ2h0OiA4cHg7XG4gICAgICBjb2xvcjogdmFyKC0taW9uLWNvbG9yLXByaW1hcnkpO1xuICAgICAgZm9udC1zaXplOiAyMHB4O1xuICAgIH1cbiAgfVxufVxuXG4ucGVyaW9kLXJvdyB7XG4gIGRpc3BsYXk6IGZsZXg7XG4gIGZsZXgtd3JhcDogd3JhcDtcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbiAgZ2FwOiAxNnB4O1xufVxuXG4ubm93LWJ1dHRvbiB7XG4gIG1pbi13aWR0aDogMTAwcHg7XG59XG5cbi5yZWZyZXNoLWJ1dHRvbiB7XG4gIGlvbi1pY29uIHtcbiAgICBtYXJnaW4tcmlnaHQ6IDRweDtcbiAgICBjb2xvcjogdmFyKC0taW9uLWNvbG9yLWxpZ2h0KTtcbiAgfVxufVxuXG4ucGVyaW9kLXN0YXJ0LCAucGVyaW9kLWR1cmF0aW9uIHtcbiAgZGlzcGxheTogZmxleDtcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbn1cblxuLmhpZGRlbi1sYWJlbCB7XG4gIGRpc3BsYXk6IG5vbmU7XG59XG5cbi8vIEZvcm0gaW5wdXRzXG4uZGF0ZXRpbWUtaW5wdXQsICNwZXJpb2REdXJhdGlvbiwgLmR1cmF0aW9uLXNlbGVjdCB7XG4gIHBhZGRpbmc6IDhweCAxMnB4O1xuICBib3JkZXI6IDFweCBzb2xpZCByZ2JhKHZhcigtLWlvbi1jb2xvci1tZWRpdW0tcmdiKSwgMC4zKTtcbiAgYm9yZGVyLXJhZGl1czogdmFyKC0taW9uLWJvcmRlci1yYWRpdXMpO1xuICBiYWNrZ3JvdW5kLWNvbG9yOiB2YXIoLS1pb24tY29sb3ItbGlnaHQpO1xuICBmb250LWZhbWlseTogdmFyKC0taW9uLWZvbnQtZmFtaWx5KTtcblxuICAmOmZvY3VzIHtcbiAgICBvdXRsaW5lOiBub25lO1xuICAgIGJvcmRlci1jb2xvcjogdmFyKC0taW9uLWNvbG9yLXByaW1hcnkpO1xuICB9XG59XG5cbiNwZXJpb2REdXJhdGlvbiwgLmR1cmF0aW9uLXNlbGVjdCB7XG4gIG1pbi13aWR0aDogMTUwcHg7XG59XG5cbi8vIE1hcCBjYXJkXG4ubWFwLWNhcmQge1xuICBiYWNrZ3JvdW5kLWNvbG9yOiB2YXIoLS1pb24tY29sb3ItbGlnaHQpO1xuXG4gIC5tYXAtaGVhZGVyIHtcbiAgICBkaXNwbGF5OiBmbGV4O1xuICAgIGp1c3RpZnktY29udGVudDogc3BhY2UtYmV0d2VlbjtcbiAgICBhbGlnbi1pdGVtczogY2VudGVyO1xuICAgIGZsZXgtZGlyZWN0aW9uOiByb3c7XG4gICAgZ2FwOiAxNnB4O1xuICB9XG5cbiAgLm1hcC1zdGF0cywgLm5vLWRhdGEge1xuICAgIGZvbnQtc2l6ZTogMC44cmVtO1xuICAgIGZvbnQtd2VpZ2h0OiBub3JtYWw7XG4gICAgY29sb3I6IHZhcigtLWlvbi1jb2xvci1tZWRpdW0pO1xuICAgIG1hcmdpbi1sZWZ0OiA4cHg7XG4gICAgd2hpdGUtc3BhY2U6IG5vd3JhcDtcbiAgICBvdmVyZmxvdzogaGlkZGVuO1xuICAgIHRleHQtb3ZlcmZsb3c6IGVsbGlwc2lzO1xuICB9XG5cbiAgLnByb2dyZXNzLWluZGljYXRvciB7XG4gICAgY29sb3I6IHZhcigtLWlvbi1jb2xvci1wcmltYXJ5KTtcbiAgfVxuXG4gIC5tYXAtdG9nZ2xlIHtcbiAgICBkaXNwbGF5OiBmbGV4O1xuICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG4gIH1cblxuICAubWFwLWNvbnRlbnQge1xuICAgIHBhZGRpbmc6IDA7XG5cbiAgICBpb24tZ3JpZCwgaW9uLXJvdyB7XG4gICAgICBwYWRkaW5nOiAwO1xuICAgICAgbWFyZ2luOiAwO1xuICAgIH1cblxuICAgICNwcm9ncmVzc0FuZFJlZnJlc2gge1xuICAgICAgZGlzcGxheTogZmxleDtcbiAgICAgIGp1c3RpZnktY29udGVudDogZmxleC1lbmQ7XG4gICAgICBhbGlnbi1pdGVtczogY2VudGVyO1xuICAgICAgcGFkZGluZzogOHB4IDE2cHg7XG5cbiAgICAgIGlvbi1sYWJlbCB7XG4gICAgICAgIG1hcmdpbi1yaWdodDogMTZweDtcbiAgICAgIH1cbiAgICB9XG5cbiAgICAubWFwLWNvbHVtbiB7XG4gICAgICBwYWRkaW5nOiAwO1xuXG4gICAgICAubWFwLWNvbnRhaW5lciB7XG4gICAgICAgIGJvcmRlci1yYWRpdXM6IHZhcigtLWlvbi1ib3JkZXItcmFkaXVzKTtcbiAgICAgICAgb3ZlcmZsb3c6IHZpc2libGU7XG4gICAgICB9XG4gICAgfVxuXG4gICAgLmRhdGEtY29sdW1uIHtcbiAgICAgIHBhZGRpbmc6IDE2cHg7XG5cbiAgICAgIC5kYXRhLXBhbmVsIHtcbiAgICAgICAgaGVpZ2h0OiAxMDAlO1xuICAgICAgICBkaXNwbGF5OiBmbGV4O1xuICAgICAgICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xuICAgICAgfVxuXG4gICAgICAucGFuZWwtaGVhZGVyIHtcbiAgICAgICAgZGlzcGxheTogZmxleDtcbiAgICAgICAganVzdGlmeS1jb250ZW50OiBzcGFjZS1iZXR3ZWVuO1xuICAgICAgICBhbGlnbi1pdGVtczogY2VudGVyO1xuICAgICAgICBtYXJnaW4tYm90dG9tOiAxNnB4O1xuXG4gICAgICAgIGgzIHtcbiAgICAgICAgICBtYXJnaW46IDA7XG4gICAgICAgICAgZm9udC1zaXplOiAxLjJyZW07XG4gICAgICAgICAgZm9udC13ZWlnaHQ6IDYwMDtcbiAgICAgICAgfVxuICAgICAgfVxuXG4gICAgICAuY29tcHV0YXRpb24taW5mbywgLnRlY2huaWNhbC1kZXRhaWxzIHtcbiAgICAgICAgYmFja2dyb3VuZC1jb2xvcjogcmdiYSh2YXIoLS1pb24tY29sb3ItbGlnaHQtcmdiKSwgMC41KTtcbiAgICAgICAgYm9yZGVyLXJhZGl1czogdmFyKC0taW9uLWJvcmRlci1yYWRpdXMpO1xuICAgICAgICBwYWRkaW5nOiAxMnB4O1xuICAgICAgICBtYXJnaW4tYm90dG9tOiAxNnB4O1xuICAgICAgfVxuXG4gICAgICAuaW5mby1yb3csIC5kZXRhaWwtcm93IHtcbiAgICAgICAgZGlzcGxheTogZmxleDtcbiAgICAgICAgbWFyZ2luLWJvdHRvbTogNHB4O1xuICAgICAgICBmb250LXNpemU6IDAuOXJlbTtcblxuICAgICAgICAmOmxhc3QtY2hpbGQge1xuICAgICAgICAgIG1hcmdpbi1ib3R0b206IDA7XG4gICAgICAgIH1cbiAgICAgIH1cblxuICAgICAgLmNvbXBhcmUtc3RhY2sge1xuICAgICAgICBmbGV4OiAxO1xuICAgICAgICBtYXJnaW4tYm90dG9tOiAxNnB4O1xuICAgICAgfVxuXG4gICAgICAudGVjaG5pY2FsLWRldGFpbHMge1xuICAgICAgICBiYWNrZ3JvdW5kLWNvbG9yOiByZ2JhKHZhcigtLWlvbi1jb2xvci1saWdodC1yZ2IpLCAwLjUpO1xuICAgICAgICBib3JkZXItcmFkaXVzOiB2YXIoLS1pb24tYm9yZGVyLXJhZGl1cyk7XG4gICAgICAgIHBhZGRpbmc6IDEycHg7XG5cbiAgICAgICAgc3VtbWFyeSB7XG4gICAgICAgICAgZm9udC13ZWlnaHQ6IDUwMDtcbiAgICAgICAgICBjb2xvcjogdmFyKC0taW9uLWNvbG9yLW1lZGl1bSk7XG4gICAgICAgICAgY3Vyc29yOiBwb2ludGVyO1xuXG4gICAgICAgICAgJjpob3ZlciB7XG4gICAgICAgICAgICBjb2xvcjogdmFyKC0taW9uLWNvbG9yLXByaW1hcnkpO1xuICAgICAgICAgIH1cbiAgICAgICAgfVxuXG4gICAgICAgIC5kZXRhaWxzLWNvbnRlbnQge1xuICAgICAgICAgIG1hcmdpbi10b3A6IDhweDtcbiAgICAgICAgICBmb250LXNpemU6IDAuODVyZW07XG5cbiAgICAgICAgICAuZGV0YWlsLXJvdyB7XG4gICAgICAgICAgICBkaXNwbGF5OiBmbGV4O1xuICAgICAgICAgICAgZmxleC13cmFwOiB3cmFwO1xuICAgICAgICAgICAgbWFyZ2luLWJvdHRvbTogNHB4O1xuXG4gICAgICAgICAgICAmOmxhc3QtY2hpbGQge1xuICAgICAgICAgICAgICBtYXJnaW4tYm90dG9tOiAwO1xuICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICAmLndhcm5pbmcge1xuICAgICAgICAgICAgICBjb2xvcjogdmFyKC0taW9uLWNvbG9yLXdhcm5pbmcpO1xuICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICAuZGV0YWlsLWxhYmVsIHtcbiAgICAgICAgICAgICAgZm9udC13ZWlnaHQ6IDUwMDtcbiAgICAgICAgICAgICAgY29sb3I6IHZhcigtLWlvbi1jb2xvci1kYXJrKTtcbiAgICAgICAgICAgICAgd2lkdGg6IDE0MHB4O1xuICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICAuZGV0YWlsLXZhbHVlIHtcbiAgICAgICAgICAgICAgY29sb3I6IHZhcigtLWlvbi1jb2xvci1tZWRpdW0pO1xuICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICAud2FybmluZy10ZXh0IHtcbiAgICAgICAgICAgICAgY29sb3I6IHZhcigtLWlvbi1jb2xvci1kYW5nZXIpO1xuICAgICAgICAgICAgICBtYXJnaW4tbGVmdDogOHB4O1xuICAgICAgICAgICAgfVxuICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgICAgfVxuICAgIH1cbiAgfVxufVxuXG4vLyBHYXVnZSBjYXJkXG4uZ2F1Z2UtY2FyZCB7XG4gIGJhY2tncm91bmQtY29sb3I6IHZhcigtLWlvbi1jb2xvci1saWdodCk7XG5cbiAgaW9uLWNhcmQtdGl0bGUge1xuICAgIGRpc3BsYXk6IGZsZXg7XG4gICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcblxuICAgIGlvbi1pY29uIHtcbiAgICAgIG1hcmdpbi1yaWdodDogOHB4O1xuICAgICAgY29sb3I6IHZhcigtLWlvbi1jb2xvci1wcmltYXJ5KTtcbiAgICAgIGZvbnQtc2l6ZTogMjBweDtcbiAgICB9XG4gIH1cbn1cblxuLy8gUHJvZ3Jlc3MgYmFyIHN0eWxlcyBhcmUgbm93IGluIGdsb2JhbC5zY3NzXG5cbi8vIENvbXBvbmVudCBzdHlsZXNcbnJhYWluLWNvbXBhcmUtc3RhY2sge1xuICB3aWR0aDogMTAwJTtcbiAgZGlzcGxheTogYmxvY2s7XG59XG5cbi8vIFJlc3BvbnNpdmUgYWRqdXN0bWVudHMgLSBzaW1wbGlmaWVkXG5AbWVkaWEgKG1heC13aWR0aDogNzY4cHgpIHtcbiAgLnBlcmlvZC1yb3cge1xuICAgIGZsZXgtZGlyZWN0aW9uOiByb3c7XG4gICAganVzdGlmeS1jb250ZW50OiBzcGFjZS1iZXR3ZWVuO1xuICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG4gIH1cblxuICAubWFwLWhlYWRlciB7XG4gICAgZmxleC1kaXJlY3Rpb246IHJvdztcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IHNwYWNlLWJldHdlZW47XG4gICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbiAgICBnYXA6IDE2cHg7XG4gIH1cbn1cbiJdLCJzb3VyY2VSb290IjoiIn0= */"]
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
          this.earthMapElement = factory.createEarthMap(this.canvasElement.nativeElement, new raain_ui__WEBPACK_IMPORTED_MODULE_1__.EarthMapElementInput(''));
        } catch (e) {
          console.warn('dynamic focus creation issue', e);
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
function RaainMapComponent_ion_col_9_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](0, "ion-col", 20)(1, "ion-button", 21);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵpipe"](3, "date");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]()();
  }
  if (rf & 2) {
    const ctx_r0 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtextInterpolate1"](" From ", _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵpipeBind2"](3, 1, ctx_r0.cumulativeDateFrom, "yyyy-MM-dd HH:mm"), " to ");
  }
}
function RaainMapComponent_ion_select_option_12_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](0, "ion-select-option", 22);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵpipe"](2, "date");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
  }
  if (rf & 2) {
    const dateToSelect_r6 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵpropertyInterpolate"]("value", dateToSelect_r6.toISOString());
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtextInterpolate1"](" ", _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵpipeBind2"](2, 2, dateToSelect_r6, "yyyy-MM-dd HH:mm"), " ");
  }
}
function RaainMapComponent_ion_col_13_Template(rf, ctx) {
  if (rf & 1) {
    const _r8 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](0, "ion-col", 23)(1, "ion-button", 24);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](2, " Gauges ");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](3, "ion-toggle", 25);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵlistener"]("ionChange", function RaainMapComponent_ion_col_13_Template_ion_toggle_ionChange_3_listener() {
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵrestoreView"](_r8);
      const ctx_r7 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵnextContext"]();
      return _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵresetView"](ctx_r7.changeShowMarkers());
    })("ngModelChange", function RaainMapComponent_ion_col_13_Template_ion_toggle_ngModelChange_3_listener($event) {
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵrestoreView"](_r8);
      const ctx_r9 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵnextContext"]();
      return _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵresetView"](ctx_r9.showMarkers = $event);
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]()()();
  }
  if (rf & 2) {
    const ctx_r2 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("ngModel", ctx_r2.showMarkers)("checked", ctx_r2.showMarkers);
  }
}
function RaainMapComponent_ion_col_14_Template(rf, ctx) {
  if (rf & 1) {
    const _r11 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](0, "ion-col", 23)(1, "ion-range", 26);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵlistener"]("ionChange", function RaainMapComponent_ion_col_14_Template_ion_range_ionChange_1_listener() {
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵrestoreView"](_r11);
      const ctx_r10 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵnextContext"]();
      return _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵresetView"](ctx_r10.changeAlpha());
    })("ngModelChange", function RaainMapComponent_ion_col_14_Template_ion_range_ngModelChange_1_listener($event) {
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵrestoreView"](_r11);
      const ctx_r12 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵnextContext"]();
      return _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵresetView"](ctx_r12.alpha = $event);
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]()();
  }
  if (rf & 2) {
    const ctx_r3 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("ngModel", ctx_r3.alpha)("max", 1)("min", 0.2)("snaps", true)("step", 0.2)("ticks", true);
  }
}
class RaainMapComponent {
  constructor(ngZone, storage) {
    this.ngZone = ngZone;
    this.storage = storage;
    this.autoplay = false;
    this.showMarkers = true;
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
    this.iconOptions = {
      gauges: {
        iconUrl: './assets/maps/marker-pluvio.png',
        iconSize,
        iconAnchor,
        popupAnchor
      },
      gaugesInCompare: {
        iconUrl: './assets/maps/marker-pluvio-diag.png',
        iconSize,
        iconAnchor,
        popupAnchor
      },
      selectedGauges: {
        iconUrl: './assets/maps/marker-pluvio-diag-select.png',
        iconSize,
        iconAnchor,
        popupAnchor
      },
      pixels: {
        iconUrl: './assets/maps/marker-rain.png',
        iconSize,
        iconAnchor,
        popupAnchor
      },
      pixelsSolution: {
        // iconUrl: './assets/maps/marker-rain2.png',
        iconUrl: './assets/maps/marker-rain.png',
        iconSize: pixelSize,
        iconAnchor: pixelAnchor,
        popupAnchor
      },
      borders: {
        iconUrl: './assets/maps/marker-shadow.png',
        iconSize,
        iconAnchor,
        popupAnchor
      }
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
    if (!this.dateToShowAsString || !force && new Date(this.dateToShowAsString).getTime() === this.dateToShow?.getTime()) {
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
    const markers = [{
      iconsLatLng: this.markers.gauges,
      iconsOptions: this.iconOptions.gauges
    }, {
      iconsLatLng: this.markers.selectedGauges,
      iconsOptions: this.iconOptions.selectedGauges
    }, {
      iconsLatLng: this.markers.gaugesInCompare,
      iconsOptions: this.iconOptions.gaugesInCompare
    }, {
      iconsLatLng: this.markers.pixels,
      iconsOptions: this.iconOptions.pixels
    }, {
      iconsLatLng: this.markers.pixelsSolution,
      iconsOptions: this.iconOptions.pixelsSolution
    }
    // {iconsLatLng: this.markers.borders, iconsOptions: this.iconOptions.borders},
    ];

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
          markers
        });
        this.changeAlpha();
        this.mapElement.mapLeaflet?.on('mousemove', evt => this.onMapMouseMove(evt));
        this.mapElement.mapLeaflet?.on('zoom', evt => this.onZoom(evt));
        const bounds = this.mapElement.mapLeaflet.getBounds();
        this.pixelsCount = this.cartesianTools.howManyPixelsInEarthMap(bounds._southWest, bounds._northEast);
        this.mapElement.markersProduced?.forEach(m => m.on('click', evt => this.onMapClick(evt)));
        this.onSizeChanged = () => {
          this.mapElement.markersLayer?.setCurrentWidth(this.currentWidth);
          this.mapElement.markersLayer?.setCurrentHeight(this.currentHeight);
          this.mapElement.compositeLayer?.setCurrentWidth(this.currentWidth);
          this.mapElement.compositeLayer?.setCurrentHeight(this.currentHeight);
          this.mapElement.mapLeaflet?.invalidateSize({
            animate: true
          });
        };
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
      if (new Date(changes.defaultDate.currentValue).getTime() === new Date(changes.defaultDate.previousValue).getTime()) {
        return;
      }
      possibleNewDefaultDate = this.defaultDate;
    }
    if (changes.markers && this.mapElement?.markersLayer) {
      const markers = [{
        iconsLatLng: this.markers.gauges,
        iconOptions: this.iconOptions.gauges
      }, {
        iconsLatLng: this.markers.selectedGauges,
        iconOptions: this.iconOptions.selectedGauges
      }, {
        iconsLatLng: this.markers.gaugesInCompare,
        iconOptions: this.iconOptions.gaugesInCompare
      }, {
        iconsLatLng: this.markers.pixels,
        iconOptions: this.iconOptions.pixels
      }, {
        iconsLatLng: this.markers.pixelsSolution,
        iconOptions: this.iconOptions.pixelsSolution
      }
      //  {iconsLatLng: this.markers.borders, iconOptions: this.iconOptions.borders},
      ];

      const markersProduced = this.mapElement.markersLayer.render(markers).markers;
      if (markersProduced) {
        markersProduced.forEach(m => m.on('click', evt => this.onMapClick(evt)));
        if (this.showMarkers) {
          this.mapElement.markersLayer.removeFromMap(this.mapElement.mapLeaflet);
          this.mapElement.markersLayer.addToMap(this.mapElement.mapLeaflet);
        }
      }
    }
    if (changes.markers && this.markers.selectedGauges.length === 1) {
      const selectedGauge = this.markers.selectedGauges[0];
      this.mapElement.mapLeaflet.setView(selectedGauge, 10);
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
      this.timeframeContainers?.containers.forEach(c => {
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
    if (defaultDate && this.possibleDates.filter(d => d.getTime() === defaultDate.getTime()).length === 1) {
      this.dateToShow = defaultDate;
    }
    if (!this.dateToShow && this.possibleDates.length > 0 && this.possibleDates.filter(d => d.getTime() === this.dateToShow?.getTime()).length !== 1) {
      this.dateToShow = this.possibleDates[0];
    }
    this.dateToShowAsString = this.dateToShow.toISOString();
    this.cumulativeDateFrom = new Date(this.dateToShow);
    this.cumulativeDateFrom.setHours(this.cumulativeDateFrom.getHours() - 1);
  }
  getDateToShowIndex() {
    let index = 0;
    for (const date of this.possibleDates) {
      if (date.toISOString().substring(0, 19) === this.dateToShowAsString.substring(0, 19)) {
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
    const pixelDensity = this.calculatePixelDensity(bounds, availablePixels, zoom);
    console.log('Pixel density:', pixelDensity);
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
        value = Math.round(valueSelected[0].value * 1000) / 1000;
        valueLat = Math.round(valueSelected[0].lat * 1000) / 1000;
        valueLng = Math.round(valueSelected[0].lng * 1000) / 1000;
        valueLat2 = Math.round(valueSelected[0].lat2 * 1000) / 1000;
        valueLng2 = Math.round(valueSelected[0].lng2 * 1000) / 1000;
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
    for (const gauge of this.markers.gauges) {
      if (gauge.id === evt?.target?.options?.alt) {
        this.markers.selectedGauges = [gauge];
        break;
      }
    }
    this.selectedMarker.emit(new raain_ui__WEBPACK_IMPORTED_MODULE_1__.MapLatLng(evt.latlng?.lat, evt.latlng?.lng, undefined, evt.id, evt.name));
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
    this.mapElement.updateMapTimeframe(this.timeframeContainers);
    this.currentFrameContainer = this.timeframeContainers?.containers[0]?.timeframe[0];
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
      decls: 27,
      vars: 14,
      consts: [[1, "ion-align-items-end"], ["id", "map-buttons", "size-xs", "3"], ["color", "medium", "fill", "outline", "shape", "round", 3, "click"], ["name", "play-back", "slot", "icon-only"], ["color", "medium", "fill", "outline", "shape", "round", 3, "hidden", "click"], ["name", "stop", "slot", "icon-only"], ["name", "play-forward", "slot", "icon-only"], ["class", "ion-hide-md-down", "size-xs", "4", 4, "ngIf"], ["id", "map-date", "size-md", "4", "size-xs", "5", 1, "ion-text-start"], ["interface", "popover", "placeholder", "Period", 3, "ngModel", "value", "ionDismiss", "ngModelChange"], [3, "value", 4, "ngFor", "ngForOf"], ["class", "ion-hide-md-down", "size-xs", "2", 4, "ngIf"], ["size-lg", "10", "size-xs", "12"], ["id", "map-container"], ["id", "map-div"], ["primaryMap", ""], ["size-lg", "2", 1, "ion-hide-xl-down"], ["canvasScale", ""], ["size-sm", "7", 1, "ion-hide-sm-down"], [3, "innerHTML"], ["size-xs", "4", 1, "ion-hide-md-down"], ["color", "medium", "fill", "clear", 2, "font-size", "medium"], [3, "value"], ["size-xs", "2", 1, "ion-hide-md-down"], ["color", "medium", "fill", "clear"], ["color", "medium", 3, "ngModel", "checked", "ionChange", "ngModelChange"], ["color", "medium", 3, "ngModel", "max", "min", "snaps", "step", "ticks", "ionChange", "ngModelChange"]],
      template: function RaainMapComponent_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](0, "ion-grid")(1, "ion-row", 0)(2, "ion-col", 1)(3, "ion-button", 2);
          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵlistener"]("click", function RaainMapComponent_Template_ion_button_click_3_listener() {
            return ctx.previous();
          });
          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelement"](4, "ion-icon", 3);
          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](5, "ion-button", 4);
          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵlistener"]("click", function RaainMapComponent_Template_ion_button_click_5_listener() {
            return ctx.stop();
          });
          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelement"](6, "ion-icon", 5);
          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](7, "ion-button", 2);
          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵlistener"]("click", function RaainMapComponent_Template_ion_button_click_7_listener() {
            return ctx.next();
          });
          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelement"](8, "ion-icon", 6);
          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]()();
          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtemplate"](9, RaainMapComponent_ion_col_9_Template, 4, 4, "ion-col", 7);
          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](10, "ion-col", 8)(11, "ion-select", 9);
          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵlistener"]("ionDismiss", function RaainMapComponent_Template_ion_select_ionDismiss_11_listener() {
            return ctx.showTimeframe();
          })("ngModelChange", function RaainMapComponent_Template_ion_select_ngModelChange_11_listener($event) {
            return ctx.dateToShowAsString = $event;
          });
          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtemplate"](12, RaainMapComponent_ion_select_option_12_Template, 3, 5, "ion-select-option", 10);
          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]()();
          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtemplate"](13, RaainMapComponent_ion_col_13_Template, 4, 2, "ion-col", 11);
          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtemplate"](14, RaainMapComponent_ion_col_14_Template, 2, 6, "ion-col", 11);
          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](15, "ion-row")(16, "ion-col", 12)(17, "div", 13);
          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelement"](18, "div", 14, 15);
          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]()();
          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](20, "ion-col", 16)(21, "div");
          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelement"](22, "canvas", null, 17);
          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]()()();
          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](24, "ion-row")(25, "ion-col", 18);
          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelement"](26, "span", 19);
          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]()()();
        }
        if (rf & 2) {
          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](5);
          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("hidden", !ctx.autoplay);
          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](4);
          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("ngIf", ctx.showCumulative);
          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](2);
          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵpropertyInterpolate"]("value", ctx.dateToShowAsString);
          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("ngModel", ctx.dateToShowAsString);
          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](1);
          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("ngForOf", ctx.possibleDates);
          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](1);
          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("ngIf", !ctx.showCumulative);
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
      dependencies: [_angular_common__WEBPACK_IMPORTED_MODULE_4__.NgForOf, _angular_common__WEBPACK_IMPORTED_MODULE_4__.NgIf, _angular_forms__WEBPACK_IMPORTED_MODULE_5__.NgControlStatus, _angular_forms__WEBPACK_IMPORTED_MODULE_5__.NgModel, _ionic_angular__WEBPACK_IMPORTED_MODULE_6__.IonButton, _ionic_angular__WEBPACK_IMPORTED_MODULE_6__.IonCol, _ionic_angular__WEBPACK_IMPORTED_MODULE_6__.IonGrid, _ionic_angular__WEBPACK_IMPORTED_MODULE_6__.IonIcon, _ionic_angular__WEBPACK_IMPORTED_MODULE_6__.IonRange, _ionic_angular__WEBPACK_IMPORTED_MODULE_6__.IonRow, _ionic_angular__WEBPACK_IMPORTED_MODULE_6__.IonSelect, _ionic_angular__WEBPACK_IMPORTED_MODULE_6__.IonSelectOption, _ionic_angular__WEBPACK_IMPORTED_MODULE_6__.IonToggle, _ionic_angular__WEBPACK_IMPORTED_MODULE_6__.BooleanValueAccessor, _ionic_angular__WEBPACK_IMPORTED_MODULE_6__.SelectValueAccessor, _angular_common__WEBPACK_IMPORTED_MODULE_4__.DatePipe],
      styles: ["#map-container[_ngcontent-%COMP%] {\n  position: relative;\n}\n\n#map-div[_ngcontent-%COMP%] {\n  position: absolute;\n  left: 0;\n  top: 0;\n  right: 0;\n  bottom: 0;\n}\n\nion-select[_ngcontent-%COMP%] {\n  width: 100%;\n  max-width: -moz-fit-content;\n  max-width: fit-content;\n  font-size: 16px;\n  color: var(--ion-color-dark);\n}\n\nion-range[_ngcontent-%COMP%] {\n  padding: 0 0 0 20px;\n}\n/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8uL3NyYy9jb3JlL3NoYXJlZC9yYWFpbi1tYXAvcmFhaW4tbWFwLmNvbXBvbmVudC5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQ0Usa0JBQUE7QUFDRjs7QUFFQTtFQUNFLGtCQUFBO0VBQ0EsT0FBQTtFQUNBLE1BQUE7RUFDQSxRQUFBO0VBQ0EsU0FBQTtBQUNGOztBQUVBO0VBQ0UsV0FBQTtFQUNBLDJCQUFBO0VBQUEsc0JBQUE7RUFDQSxlQUFBO0VBQ0EsNEJBQUE7QUFDRjs7QUFFQTtFQUNFLG1CQUFBO0FBQ0YiLCJzb3VyY2VzQ29udGVudCI6WyIjbWFwLWNvbnRhaW5lciB7XG4gIHBvc2l0aW9uOiByZWxhdGl2ZTtcbn1cblxuI21hcC1kaXYge1xuICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gIGxlZnQ6IDA7XG4gIHRvcDogMDtcbiAgcmlnaHQ6IDA7XG4gIGJvdHRvbTogMDtcbn1cblxuaW9uLXNlbGVjdCB7XG4gIHdpZHRoOiAxMDAlO1xuICBtYXgtd2lkdGg6IGZpdC1jb250ZW50O1xuICBmb250LXNpemU6IDE2cHg7XG4gIGNvbG9yOiB2YXIoLS1pb24tY29sb3ItZGFyayk7XG59XG5cbmlvbi1yYW5nZSB7XG4gIHBhZGRpbmc6IDAgMCAwIDIwcHg7XG59XG4iXSwic291cmNlUm9vdCI6IiJ9 */"]
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
      const links = rainNode.getLinks();
      const rainId = rainNode.id;
      // dates and radar measures
      for (const link of links) {
        const measureIndex = link.href.indexOf('measures/');
        if (measureIndex >= 0) {
          const start = measureIndex + 9;
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
    this.gaugesToFilter = [];
    this.rainNodeGauges = [];
    this.gaugesInCompare = [];
    this.selectedGauges = [];
    this.selectedPixels = [];
    this.pixelsSolutions = [];
    this.compareDates = [];
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
  refreshCompareQuality(frameSet) {
    var _this = this;
    return (0,_opt_atlassian_pipelines_agent_build_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_0__["default"])(function* () {
      const comparePerDate = _this.getComparePerDate(frameSet.date);
      if (!comparePerDate || !comparePerDate.rainComputationQuality?.qualitySpeedMatrixContainer) {
        _this.cleanCompareQuality('no current quality ' + Object.keys(_this.rainComputationQualitiesPerDate));
        _this.onChanges();
        return;
      }
      const uiCompares = comparePerDate.compareTimeline.map(c => {
        return {
          name: c.name,
          comparePoints: c.qualityPoints.map(p => new _xytype__WEBPACK_IMPORTED_MODULE_3__.XYType(p.getGaugeValue(), p.getRainValue(), 2, p.gaugeLabel, p.gaugeId)),
          comparePointsMax: new _xytype__WEBPACK_IMPORTED_MODULE_3__.XYType(c.maxValue * 1.2, c.maxValue * 1.2),
          comparePointsHistory: c.qualityPointsLegacy,
          remarks: c.remarks
        };
      });
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
  refreshGlobalCompareQuality(targetsOrdered, withCompareDuplicate) {
    var _this2 = this;
    return (0,_opt_atlassian_pipelines_agent_build_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_0__["default"])(function* () {
      try {
        yield _this2.fetchRainComputationQualities(targetsOrdered);
        yield _this2.buildComparesTimeline(targetsOrdered, withCompareDuplicate);
        if (!_this2.buildCompares.compareCumulative) {
          // throw Error('needs cumulative compare');
          return;
        }
        const countForAverage = targetsOrdered.length;
        const maxValue = _this2.buildCompares.compareCumulative.maxValue / 12 * 1.2;
        _this2.globalComparePoints = _this2.buildCompares.compareCumulative.qualityPoints.map(qp => new _xytype__WEBPACK_IMPORTED_MODULE_3__.XYType(qp.getGaugeValue() / 12, qp.getRainValue() / 12, 2, qp.gaugeLabel, qp.gaugeId));
        _this2.globalComparePointsMax = new _xytype__WEBPACK_IMPORTED_MODULE_3__.XYType(maxValue, maxValue);
      } catch (e) {
        console.warn(e);
      }
    })();
  }
  setGaugesInMap() {
    var _this3 = this;
    return (0,_opt_atlassian_pipelines_agent_build_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_0__["default"])(function* () {
      const gaugesToFilter = yield _this3.profileService.getGauges(_this3.rainNode?.id);
      _this3.gaugesToFilter = gaugesToFilter.sort((a, b) => {
        return a.approxDistanceFrom(_this3.rainNode.getCenter()) - b.approxDistanceFrom(_this3.rainNode.getCenter());
      }).filter((v, index) => index < 200);
      _this3.rainNodeGauges = _this3.rainNode.getLinks('gauge').map(l => l.getId());
      const visibleGauges = _this3.gaugesToFilter.filter(g => _this3.rainNodeGauges.indexOf(g.id) > -1);
      const mapLatLng = [];
      for (const gauge of visibleGauges) {
        mapLatLng.push(new raain_ui__WEBPACK_IMPORTED_MODULE_1__.MapLatLng(gauge.latitude, gauge.longitude, undefined, gauge.id, gauge.name));
      }
      _this3.gaugesInMap = mapLatLng;
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
      // console.log('selectGauge', gaugeId, compareIndex);
      if (gaugeId) {
        const xys = _this5.getCurrentQualityPoints(compareIndex).filter(p => p.gaugeId === gaugeId);
        _this5.selectedGauge = xys.length === 1 ? xys[0] : null;
      } else {
        _this5.selectedGauge = null;
      }
      if (!_this5.selectedGauge) {
        return _this5.resetSelectedGauges();
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
  buildComparesTimeline(targetsOrdered, withCompareDuplicate) {
    var _this6 = this;
    return (0,_opt_atlassian_pipelines_agent_build_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_0__["default"])(function* () {
      const compareDates = targetsOrdered.map(t => t.date);
      const qualities = compareDates.filter(d => !!d).map(d => _this6.getRainComputationQuality(d)).filter(rcq => !!rcq);
      _this6.compareDates = compareDates.slice(1, -1);
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
  fetchRainComputationQualities(targetsOrdered) {
    var _this7 = this;
    return (0,_opt_atlassian_pipelines_agent_build_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_0__["default"])(function* () {
      for (const target of targetsOrdered) {
        if (!_this7.rainComputationQualitiesPerDate[target.date.toISOString()] && target.rainComputationQualityId) {
          try {
            const rainComputationQuality = yield _this7.profileService.getRainCompareByDate(_this7.rainNode.id, target.rainComputationId, target.date);
            if (rainComputationQuality) {
              _this7.rainComputationQualitiesPerDate[target.date.toISOString()] = rainComputationQuality;
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
  constructor(date, radarMeasureIds = [], rainComputationId = null, rainComputationVersion = null, rainComputationQualities = []) {
    this.date = date;
    this.radarMeasureIds = radarMeasureIds;
    this.rainComputationId = rainComputationId;
    this.rainComputationVersion = rainComputationVersion;
    this.rainComputationQualities = rainComputationQualities;
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
  static Delay(ms) {
    return new Promise(resolve => setTimeout(resolve, ms));
  }
  setMethods(onRefreshInProgress, onRefreshDone, onFetchDone) {
    this.onRefreshInProgress = onRefreshInProgress;
    this.onRefreshDone = onRefreshDone;
    this.onFetchDone = onFetchDone;
  }
  cleanAll() {
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
      // build [current, previous, next] targets
      const current = currents[0];
      const position = _this.timeframesFromRadarsExtended.indexOf(current);
      let previous = null,
        next = null;
      const positionNames = ['' + current.date.getTime()];
      const frameSets = {};
      frameSets['' + current.date.getTime()] = current;
      if (position > 0) {
        previous = _this.timeframesFromRadarsExtended[position - 1];
        positionNames.push('' + previous.date.getTime());
        frameSets['' + previous.date.getTime()] = previous;
      }
      if (position < _this.timeframesFromRadarsExtended.length) {
        next = _this.timeframesFromRadarsExtended[position + 1];
        if (next?.date) {
          positionNames.push('' + next.date.getTime());
          frameSets['' + next.date.getTime()] = next;
        }
      }
      // align Map with targets
      const targets = [];
      for (const positionName of positionNames) {
        if (frameSets[positionName]) {
          const target = frameSets[positionName];
          target.rainComputationQualityId = _this.getRainComputationQualityTarget(target);
          target.withGauge = withGaugesMeasures;
          target.cumulativeHours = cumulativeHours;
          targets.push(target);
          const timeframeContainers = yield _this.refreshMapTimeframeContainers(target);
          if (positionName === '' + current.date.getTime()) {
            _this.onFetchDone(timeframeContainers).then(ignored => {});
          }
        }
      }
      // align Compare with current date
      _this.refreshCompareQuality(current).then(ignored => {});
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
      _this2.checkPeriod();
      _this2.dataInternal = dataInternal;
      const asyncDone = error => {
        if (error) {
          console.error('error in refresh', error);
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
      throw new Error('need a period');
    }
  }
  refreshCounts() {
    var _this4 = this;
    return (0,_opt_atlassian_pipelines_agent_build_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_0__["default"])(function* () {
      const counts = yield _this4.profileService.getCounts(_this4.rainNode.id, {
        range: 'day',
        periodBegin: _this4._period.begin
      });
      const progress = yield _this4.profileService.getRainProgress(_this4.rainNode.id);
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
      if (!done) {
        return [];
      }
      try {
        const beginExtended = new Date(_this7.period.begin);
        const endExtended = new Date(_this7.period.end);
        beginExtended.setMinutes(beginExtended.getMinutes() - 7);
        endExtended.setMinutes(endExtended.getMinutes() + 7);
        _this7.rainNode = yield _this7.profileService.getRainTimeframe(_this7.rainNode.id, beginExtended, endExtended, _this7.dataInternal);
        _this7.timeframesFromRadarsExtended = yield _this7.radarService.getTimeline(_this7.rainNode);
        _this7.timeframesFromRadars = _this7.timeframesFromRadarsExtended.filter(frameSet => _this7.period.begin.getTime() <= frameSet.date.getTime() && frameSet.date.getTime() <= _this7.period.end.getTime()).sort((a, b) => a.date.getTime() - b.date.getTime());
        console.log('timeframesFromRadarsExtended:', _this7.timeframesFromRadarsExtended);
        _this7.timeframeDates = _this7.timeframesFromRadars.map(frameSet => frameSet.date);
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
          target.rainComputationQualityId = _this8.getRainComputationQualityTarget(frameSet);
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
      if (!target?.rainComputationId) {
        console.warn(`Pb with refreshMapTimeframeContainers insights ${target.date.toISOString()}`);
        return;
      }
      const rainNode = _this9.rainNode;
      const containers = [];
      const newCreatedTimeframeContainers = new raain_ui__WEBPACK_IMPORTED_MODULE_2__.TimeframeContainers(containers);
      try {
        let rainNodeCartesianMap;
        if (!target.cumulativeHours) {
          rainNodeCartesianMap = yield _this9.profileService.getRainComputationCartesianMapById(rainNode.id, target.rainComputationId);
        } else {
          rainNodeCartesianMap = yield _this9.profileService.getRainComputationCumulativeMapById(rainNode.id, target.rainComputationId, target.cumulativeHours);
        }
        if (rainNodeCartesianMap) {
          newCreatedTimeframeContainers.addFromRainComputationMap(rainNodeCartesianMap, false);
          _this9.rainComputationMapVersion = rainNodeCartesianMap.version;
          _this9.rainComputationMapDate = new Date(rainNodeCartesianMap.date);
          _this9.rainComputationMapDoneDate = rainNodeCartesianMap.isDoneDate;
          _this9.rainComputationMapLaunchedBy = rainNodeCartesianMap.launchedBy;
          _this9.rainComputationMapTimeSpentInMs = rainNodeCartesianMap.timeSpentInMs;
        }
      } catch (e) {
        console.warn('Pb with computations for id:', target.rainComputationId, e);
      }
      return newCreatedTimeframeContainers;
    })();
  }
  refreshCompareQuality(frameSet) {
    var _this0 = this;
    return (0,_opt_atlassian_pipelines_agent_build_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_0__["default"])(function* () {
      yield _this0.compareManager.refreshCompareQuality(frameSet);
      yield _this0.compareManager.setGaugesInCompare();
    })();
  }
  getValues(target) {
    var _this1 = this;
    return (0,_opt_atlassian_pipelines_agent_build_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_0__["default"])(function* () {
      if (!target?.rainComputationId) {
        console.warn(`Pb with target insights ${target?.date.toISOString()}`);
        return [];
      }
      let values = [];
      try {
        const rainNodeCartesianMap = yield _this1.profileService.getRainComputationCartesianMapById(_this1.rainNode.id, target.rainComputationId);
        if (rainNodeCartesianMap) {
          rainNodeCartesianMap.getMapData().forEach(m => {
            if (m.values) {
              m.values.forEach(v => {
                const cartesianMeasureValue = raain_model__WEBPACK_IMPORTED_MODULE_1__.CartesianMeasureValue.From(v);
                values = values.concat(raain_ui__WEBPACK_IMPORTED_MODULE_2__.CartesianMapValue.From(cartesianMeasureValue.getCartesianValues(), _this1.cartesianTools));
              });
            }
          });
        }
      } catch (e) {
        console.warn('Pb with computations for id:', target.rainComputationId, e);
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
  // TODO serverUrl: 'http://localhost:3004/v2',
  serverUrl: 'https://api.lab.radartorain.com/v2',
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
_angular_platform_browser__WEBPACK_IMPORTED_MODULE_3__.platformBrowser().bootstrapModule(_core_app_module__WEBPACK_IMPORTED_MODULE_0__.AppModule).catch(err => console.log(err));


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
//# sourceMappingURL=main.3a4ca51619ed561b.js.map