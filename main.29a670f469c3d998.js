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
  version: 'v1.5.26'
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
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/core */ 22560);
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @ionic/angular */ 93819);
/* harmony import */ var _shared__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./shared */ 8987);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/common */ 94666);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/router */ 60124);








function AppComponent_ion_menu_toggle_9_ion_badge_5_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](0, "ion-badge", 9);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
  }
  if (rf & 2) {
    const p_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵnextContext"]().$implicit;
    const ctx_r2 = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtextInterpolate"](ctx_r2.getBadges(p_r1));
  }
}
const _c0 = function (a0) {
  return [a0];
};
function AppComponent_ion_menu_toggle_9_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](0, "ion-menu-toggle", 5)(1, "ion-item", 6);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelement"](2, "ion-icon", 7);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](3, "ion-label");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtemplate"](5, AppComponent_ion_menu_toggle_9_ion_badge_5_Template, 2, 1, "ion-badge", 8);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]()();
  }
  if (rf & 2) {
    const p_r1 = ctx.$implicit;
    const ctx_r0 = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("routerDirection", "root")("routerLink", _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵpureFunction1"](5, _c0, p_r1.url));
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("name", p_r1.icon);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtextInterpolate1"](" ", p_r1.title, " ");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("ngIf", ctx_r0.getBadges(p_r1));
  }
}
class AppComponent {
  constructor(platform, profile) {
    this.platform = platform;
    this.profile = profile;
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
      return new (t || AppComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵdirectiveInject"](_ionic_angular__WEBPACK_IMPORTED_MODULE_5__.Platform), _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵdirectiveInject"](_shared__WEBPACK_IMPORTED_MODULE_3__.ProfileService));
    };
  }
  static {
    this.ɵcmp = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵdefineComponent"]({
      type: AppComponent,
      selectors: [["app-root"]],
      decls: 11,
      vars: 1,
      consts: [["contentId", "main-content", "when", "(min-width: 5000px)"], ["contentId", "main-content", "type", "overlay"], ["id", "my-content"], ["auto-hide", "false", 4, "ngFor", "ngForOf"], ["id", "main-content"], ["auto-hide", "false"], [3, "routerDirection", "routerLink"], ["slot", "start", 3, "name"], ["slot", "end", 4, "ngIf"], ["slot", "end"]],
      template: function AppComponent_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](0, "ion-app")(1, "ion-split-pane", 0)(2, "ion-menu", 1)(3, "ion-header")(4, "ion-toolbar")(5, "ion-title");
          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](6, "Menu");
          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]()()();
          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](7, "ion-content", 2)(8, "ion-list");
          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtemplate"](9, AppComponent_ion_menu_toggle_9_Template, 6, 7, "ion-menu-toggle", 3);
          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]()()();
          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelement"](10, "ion-router-outlet", 4);
          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]()();
        }
        if (rf & 2) {
          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](9);
          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("ngForOf", ctx.appPages);
        }
      },
      dependencies: [_angular_common__WEBPACK_IMPORTED_MODULE_6__.NgForOf, _angular_common__WEBPACK_IMPORTED_MODULE_6__.NgIf, _ionic_angular__WEBPACK_IMPORTED_MODULE_5__.IonApp, _ionic_angular__WEBPACK_IMPORTED_MODULE_5__.IonBadge, _ionic_angular__WEBPACK_IMPORTED_MODULE_5__.IonContent, _ionic_angular__WEBPACK_IMPORTED_MODULE_5__.IonHeader, _ionic_angular__WEBPACK_IMPORTED_MODULE_5__.IonIcon, _ionic_angular__WEBPACK_IMPORTED_MODULE_5__.IonItem, _ionic_angular__WEBPACK_IMPORTED_MODULE_5__.IonLabel, _ionic_angular__WEBPACK_IMPORTED_MODULE_5__.IonList, _ionic_angular__WEBPACK_IMPORTED_MODULE_5__.IonMenu, _ionic_angular__WEBPACK_IMPORTED_MODULE_5__.IonMenuToggle, _ionic_angular__WEBPACK_IMPORTED_MODULE_5__.IonSplitPane, _ionic_angular__WEBPACK_IMPORTED_MODULE_5__.IonTitle, _ionic_angular__WEBPACK_IMPORTED_MODULE_5__.IonToolbar, _ionic_angular__WEBPACK_IMPORTED_MODULE_5__.IonRouterOutlet, _ionic_angular__WEBPACK_IMPORTED_MODULE_5__.RouterLinkDelegate, _angular_router__WEBPACK_IMPORTED_MODULE_7__.RouterLink],
      styles: ["ion-menu[_ngcontent-%COMP%]   ion-content[_ngcontent-%COMP%] {\n  --background: var(--ion-item-background, var(--ion-background-color, #fff));\n}\n\nion-menu[_ngcontent-%COMP%]::part(backdrop) {\n  background-color: rgba(0, 119, 255, 0.5);\n}\n\nion-menu[_ngcontent-%COMP%]::part(container) {\n  border-radius: 0 2px 2px 0;\n  box-shadow: 4px 0px 16px rgba(0, 255, 196, 0.18);\n}\n\nion-menu.md[_ngcontent-%COMP%]   ion-content[_ngcontent-%COMP%] {\n  --padding-start: 8px;\n  --padding-end: 8px;\n  --padding-top: 20px;\n  --padding-bottom: 20px;\n}\n\nion-menu.md[_ngcontent-%COMP%]   ion-list[_ngcontent-%COMP%] {\n  padding: 20px 0;\n}\n\nion-menu.md[_ngcontent-%COMP%]   ion-note[_ngcontent-%COMP%] {\n  margin-bottom: 30px;\n}\n\nion-menu.md[_ngcontent-%COMP%]   ion-list-header[_ngcontent-%COMP%], ion-menu.md[_ngcontent-%COMP%]   ion-note[_ngcontent-%COMP%] {\n  padding-left: 10px;\n}\n\nion-menu.md[_ngcontent-%COMP%]   ion-list#inbox-list[_ngcontent-%COMP%] {\n  border-bottom: 1px solid var(--ion-color-step-150, #d7d8da);\n}\n\nion-menu.md[_ngcontent-%COMP%]   ion-list#inbox-list[_ngcontent-%COMP%]   ion-list-header[_ngcontent-%COMP%] {\n  font-size: 22px;\n  font-weight: 600;\n  min-height: 20px;\n}\n\nion-menu.md[_ngcontent-%COMP%]   ion-list#labels-list[_ngcontent-%COMP%]   ion-list-header[_ngcontent-%COMP%] {\n  font-size: 16px;\n  margin-bottom: 18px;\n  color: #757575;\n  min-height: 26px;\n}\n\nion-menu.md[_ngcontent-%COMP%]   ion-item[_ngcontent-%COMP%] {\n  --padding-start: 10px;\n  --padding-end: 10px;\n  border-radius: 4px;\n}\n\nion-menu.md[_ngcontent-%COMP%]   ion-item.selected[_ngcontent-%COMP%] {\n  --background: rgba(var(--ion-color-primary-rgb), 0.14);\n}\n\nion-menu.md[_ngcontent-%COMP%]   ion-item.selected[_ngcontent-%COMP%]   ion-icon[_ngcontent-%COMP%] {\n  color: var(--ion-color-primary);\n}\n\nion-menu.md[_ngcontent-%COMP%]   ion-item[_ngcontent-%COMP%]   ion-icon[_ngcontent-%COMP%] {\n  color: #616e7e;\n}\n\nion-menu.md[_ngcontent-%COMP%]   ion-item[_ngcontent-%COMP%]   ion-label[_ngcontent-%COMP%] {\n  font-weight: 500;\n}\n\nion-menu.ios[_ngcontent-%COMP%]   ion-content[_ngcontent-%COMP%] {\n  --padding-bottom: 20px;\n}\n\nion-menu.ios[_ngcontent-%COMP%]   ion-list[_ngcontent-%COMP%] {\n  padding: 20px 0 0 0;\n}\n\nion-menu.ios[_ngcontent-%COMP%]   ion-note[_ngcontent-%COMP%] {\n  line-height: 24px;\n  margin-bottom: 20px;\n}\n\nion-menu.ios[_ngcontent-%COMP%]   ion-item[_ngcontent-%COMP%] {\n  --padding-start: 16px;\n  --padding-end: 16px;\n  --min-height: 50px;\n}\n\nion-menu.ios[_ngcontent-%COMP%]   ion-item.selected[_ngcontent-%COMP%]   ion-icon[_ngcontent-%COMP%] {\n  color: var(--ion-color-primary);\n}\n\nion-menu.ios[_ngcontent-%COMP%]   ion-item[_ngcontent-%COMP%]   ion-icon[_ngcontent-%COMP%] {\n  font-size: 24px;\n  color: #73849a;\n}\n\nion-menu.ios[_ngcontent-%COMP%]   ion-list#labels-list[_ngcontent-%COMP%]   ion-list-header[_ngcontent-%COMP%] {\n  margin-bottom: 8px;\n}\n\nion-menu.ios[_ngcontent-%COMP%]   ion-list-header[_ngcontent-%COMP%], ion-menu.ios[_ngcontent-%COMP%]   ion-note[_ngcontent-%COMP%] {\n  padding-left: 16px;\n  padding-right: 16px;\n}\n\nion-menu.ios[_ngcontent-%COMP%]   ion-note[_ngcontent-%COMP%] {\n  margin-bottom: 8px;\n}\n\nion-note[_ngcontent-%COMP%] {\n  display: inline-block;\n  font-size: 16px;\n  color: var(--ion-color-medium-shade);\n}\n\nion-item.selected[_ngcontent-%COMP%] {\n  --color: var(--ion-color-primary);\n}\n/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8uL3NyYy9jb3JlL2FwcC5jb21wb25lbnQuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUNFLDJFQUFBO0FBQ0Y7O0FBRUE7RUFDRSx3Q0FBQTtBQUNGOztBQUVBO0VBQ0UsMEJBQUE7RUFFQSxnREFBQTtBQUFGOztBQUdBO0VBQ0Usb0JBQUE7RUFDQSxrQkFBQTtFQUNBLG1CQUFBO0VBQ0Esc0JBQUE7QUFBRjs7QUFHQTtFQUNFLGVBQUE7QUFBRjs7QUFHQTtFQUNFLG1CQUFBO0FBQUY7O0FBR0E7O0VBRUUsa0JBQUE7QUFBRjs7QUFHQTtFQUNFLDJEQUFBO0FBQUY7O0FBR0E7RUFDRSxlQUFBO0VBQ0EsZ0JBQUE7RUFFQSxnQkFBQTtBQURGOztBQUlBO0VBQ0UsZUFBQTtFQUVBLG1CQUFBO0VBRUEsY0FBQTtFQUVBLGdCQUFBO0FBSkY7O0FBT0E7RUFDRSxxQkFBQTtFQUNBLG1CQUFBO0VBQ0Esa0JBQUE7QUFKRjs7QUFPQTtFQUNFLHNEQUFBO0FBSkY7O0FBT0E7RUFDRSwrQkFBQTtBQUpGOztBQU9BO0VBQ0UsY0FBQTtBQUpGOztBQU9BO0VBQ0UsZ0JBQUE7QUFKRjs7QUFPQTtFQUNFLHNCQUFBO0FBSkY7O0FBT0E7RUFDRSxtQkFBQTtBQUpGOztBQU9BO0VBQ0UsaUJBQUE7RUFDQSxtQkFBQTtBQUpGOztBQU9BO0VBQ0UscUJBQUE7RUFDQSxtQkFBQTtFQUNBLGtCQUFBO0FBSkY7O0FBT0E7RUFDRSwrQkFBQTtBQUpGOztBQU9BO0VBQ0UsZUFBQTtFQUNBLGNBQUE7QUFKRjs7QUFPQTtFQUNFLGtCQUFBO0FBSkY7O0FBT0E7O0VBRUUsa0JBQUE7RUFDQSxtQkFBQTtBQUpGOztBQU9BO0VBQ0Usa0JBQUE7QUFKRjs7QUFPQTtFQUNFLHFCQUFBO0VBQ0EsZUFBQTtFQUVBLG9DQUFBO0FBTEY7O0FBUUE7RUFDRSxpQ0FBQTtBQUxGIiwic291cmNlc0NvbnRlbnQiOlsiaW9uLW1lbnUgaW9uLWNvbnRlbnQge1xuICAtLWJhY2tncm91bmQ6IHZhcigtLWlvbi1pdGVtLWJhY2tncm91bmQsIHZhcigtLWlvbi1iYWNrZ3JvdW5kLWNvbG9yLCAjZmZmKSk7XG59XG5cbmlvbi1tZW51OjpwYXJ0KGJhY2tkcm9wKSB7XG4gIGJhY2tncm91bmQtY29sb3I6IHJnYmEoMCwgMTE5LCAyNTUsIDAuNSk7XG59XG5cbmlvbi1tZW51OjpwYXJ0KGNvbnRhaW5lcikge1xuICBib3JkZXItcmFkaXVzOiAwIDJweCAycHggMDtcblxuICBib3gtc2hhZG93OiA0cHggMHB4IDE2cHggcmdiYSgwLCAyNTUsIDE5NiwgMC4xOCk7XG59XG5cbmlvbi1tZW51Lm1kIGlvbi1jb250ZW50IHtcbiAgLS1wYWRkaW5nLXN0YXJ0OiA4cHg7XG4gIC0tcGFkZGluZy1lbmQ6IDhweDtcbiAgLS1wYWRkaW5nLXRvcDogMjBweDtcbiAgLS1wYWRkaW5nLWJvdHRvbTogMjBweDtcbn1cblxuaW9uLW1lbnUubWQgaW9uLWxpc3Qge1xuICBwYWRkaW5nOiAyMHB4IDA7XG59XG5cbmlvbi1tZW51Lm1kIGlvbi1ub3RlIHtcbiAgbWFyZ2luLWJvdHRvbTogMzBweDtcbn1cblxuaW9uLW1lbnUubWQgaW9uLWxpc3QtaGVhZGVyLFxuaW9uLW1lbnUubWQgaW9uLW5vdGUge1xuICBwYWRkaW5nLWxlZnQ6IDEwcHg7XG59XG5cbmlvbi1tZW51Lm1kIGlvbi1saXN0I2luYm94LWxpc3Qge1xuICBib3JkZXItYm90dG9tOiAxcHggc29saWQgdmFyKC0taW9uLWNvbG9yLXN0ZXAtMTUwLCAjZDdkOGRhKTtcbn1cblxuaW9uLW1lbnUubWQgaW9uLWxpc3QjaW5ib3gtbGlzdCBpb24tbGlzdC1oZWFkZXIge1xuICBmb250LXNpemU6IDIycHg7XG4gIGZvbnQtd2VpZ2h0OiA2MDA7XG5cbiAgbWluLWhlaWdodDogMjBweDtcbn1cblxuaW9uLW1lbnUubWQgaW9uLWxpc3QjbGFiZWxzLWxpc3QgaW9uLWxpc3QtaGVhZGVyIHtcbiAgZm9udC1zaXplOiAxNnB4O1xuXG4gIG1hcmdpbi1ib3R0b206IDE4cHg7XG5cbiAgY29sb3I6ICM3NTc1NzU7XG5cbiAgbWluLWhlaWdodDogMjZweDtcbn1cblxuaW9uLW1lbnUubWQgaW9uLWl0ZW0ge1xuICAtLXBhZGRpbmctc3RhcnQ6IDEwcHg7XG4gIC0tcGFkZGluZy1lbmQ6IDEwcHg7XG4gIGJvcmRlci1yYWRpdXM6IDRweDtcbn1cblxuaW9uLW1lbnUubWQgaW9uLWl0ZW0uc2VsZWN0ZWQge1xuICAtLWJhY2tncm91bmQ6IHJnYmEodmFyKC0taW9uLWNvbG9yLXByaW1hcnktcmdiKSwgMC4xNCk7XG59XG5cbmlvbi1tZW51Lm1kIGlvbi1pdGVtLnNlbGVjdGVkIGlvbi1pY29uIHtcbiAgY29sb3I6IHZhcigtLWlvbi1jb2xvci1wcmltYXJ5KTtcbn1cblxuaW9uLW1lbnUubWQgaW9uLWl0ZW0gaW9uLWljb24ge1xuICBjb2xvcjogIzYxNmU3ZTtcbn1cblxuaW9uLW1lbnUubWQgaW9uLWl0ZW0gaW9uLWxhYmVsIHtcbiAgZm9udC13ZWlnaHQ6IDUwMDtcbn1cblxuaW9uLW1lbnUuaW9zIGlvbi1jb250ZW50IHtcbiAgLS1wYWRkaW5nLWJvdHRvbTogMjBweDtcbn1cblxuaW9uLW1lbnUuaW9zIGlvbi1saXN0IHtcbiAgcGFkZGluZzogMjBweCAwIDAgMDtcbn1cblxuaW9uLW1lbnUuaW9zIGlvbi1ub3RlIHtcbiAgbGluZS1oZWlnaHQ6IDI0cHg7XG4gIG1hcmdpbi1ib3R0b206IDIwcHg7XG59XG5cbmlvbi1tZW51LmlvcyBpb24taXRlbSB7XG4gIC0tcGFkZGluZy1zdGFydDogMTZweDtcbiAgLS1wYWRkaW5nLWVuZDogMTZweDtcbiAgLS1taW4taGVpZ2h0OiA1MHB4O1xufVxuXG5pb24tbWVudS5pb3MgaW9uLWl0ZW0uc2VsZWN0ZWQgaW9uLWljb24ge1xuICBjb2xvcjogdmFyKC0taW9uLWNvbG9yLXByaW1hcnkpO1xufVxuXG5pb24tbWVudS5pb3MgaW9uLWl0ZW0gaW9uLWljb24ge1xuICBmb250LXNpemU6IDI0cHg7XG4gIGNvbG9yOiAjNzM4NDlhO1xufVxuXG5pb24tbWVudS5pb3MgaW9uLWxpc3QjbGFiZWxzLWxpc3QgaW9uLWxpc3QtaGVhZGVyIHtcbiAgbWFyZ2luLWJvdHRvbTogOHB4O1xufVxuXG5pb24tbWVudS5pb3MgaW9uLWxpc3QtaGVhZGVyLFxuaW9uLW1lbnUuaW9zIGlvbi1ub3RlIHtcbiAgcGFkZGluZy1sZWZ0OiAxNnB4O1xuICBwYWRkaW5nLXJpZ2h0OiAxNnB4O1xufVxuXG5pb24tbWVudS5pb3MgaW9uLW5vdGUge1xuICBtYXJnaW4tYm90dG9tOiA4cHg7XG59XG5cbmlvbi1ub3RlIHtcbiAgZGlzcGxheTogaW5saW5lLWJsb2NrO1xuICBmb250LXNpemU6IDE2cHg7XG5cbiAgY29sb3I6IHZhcigtLWlvbi1jb2xvci1tZWRpdW0tc2hhZGUpO1xufVxuXG5pb24taXRlbS5zZWxlY3RlZCB7XG4gIC0tY29sb3I6IHZhcigtLWlvbi1jb2xvci1wcmltYXJ5KTtcbn1cblxuXG4iXSwic291cmNlUm9vdCI6IiJ9 */"]
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
/* harmony export */   "ReportManager": () => (/* reexport safe */ _tools__WEBPACK_IMPORTED_MODULE_9__.ReportManager),
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
  getEmail() {
    return this.email ?? this.storage.get('raain-email', this.email);
  }
  setEmail(email) {
    this.email = email;
    this.storage.set('raain-email', this.email);
  }
  logout(fidjKey, fidjProd) {
    var _this2 = this;
    return (0,_opt_atlassian_pipelines_agent_build_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_0__["default"])(function* () {
      // this.storage.remove('raain-email');
      yield _this2.fidjService.logout(true);
      try {
        yield _this2.fidjService.init(fidjKey, {
          logLevel: fidj_angular__WEBPACK_IMPORTED_MODULE_7__.LoggerLevelEnum.WARN,
          crypto: false,
          prod: fidjProd,
          useDB: false
        });
        _this2.readyForSync.next(true);
      } catch (err) {
        console.error('initFidj catch pb: ', err);
      }
    })();
  }
  checkError(error) {
    var _this3 = this;
    return (0,_opt_atlassian_pipelines_agent_build_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_0__["default"])(function* () {
      if (error.code === 401) {
        console.warn('Pb on auth');
        if (_this3.router.url.indexOf('login') < 0) {
          try {
            yield _this3.fidjService.logout();
          } catch (ignored) {
            // Ignore logout errors as we're redirecting to logout page anyway
          }
          return _this3.gotoLout();
        }
      }
    })();
  }
  gotoLout() {
    var _this4 = this;
    return (0,_opt_atlassian_pipelines_agent_build_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_0__["default"])(function* () {
      try {
        if (_this4.router.url.indexOf('login') > -1) {
          return;
        }
        yield _this4.router.navigateByUrl('/logout', {
          skipLocationChange: true,
          replaceUrl: true
        });
      } catch (e) {
        console.error('gotoLout error: ', e);
      }
    })();
  }
  gotoLogin() {
    var _this5 = this;
    return (0,_opt_atlassian_pipelines_agent_build_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_0__["default"])(function* () {
      if (_this5.router.url.indexOf('login') > -1) {
        return;
      }
      // await this.router.navigateByUrl('/', {skipLocationChange: true});
      yield _this5.router.navigate(['/login']);
    })();
  }
  isLoggedIn() {
    const loggedIn = this.fidjService.isLoggedIn();
    console.log('isLoggedIn: ', loggedIn);
    return loggedIn;
  }
  storeAll() {
    var _this6 = this;
    return (0,_opt_atlassian_pipelines_agent_build_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_0__["default"])(function* () {
      return _this6.fidjStorage.storeData(_this6.fidjService, _this6.nodeData);
    })();
  }
  isAdmin() {
    return this.roles.indexOf('admin') > -1;
  }
  // === Notifications ===
  createNotification(rainId, message) {
    var _this7 = this;
    return (0,_opt_atlassian_pipelines_agent_build_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_0__["default"])(function* () {
      try {
        const resp = yield _this7.fidjService.sendOnEndpoint({
          key: 'notifications',
          verb: 'POST',
          defaultKeyUrl: _this7.defaultUrlForAPI + '/notifications',
          data: {
            rain: rainId,
            message
          }
        });
        return new raain_model__WEBPACK_IMPORTED_MODULE_1__.EventNode(resp.data);
      } catch (e) {
        yield _this7.checkError(e);
      }
      return null;
    })();
  }
  getNotifications(rainId) {
    var _this8 = this;
    return (0,_opt_atlassian_pipelines_agent_build_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_0__["default"])(function* () {
      try {
        const args = '?rain=' + rainId;
        const resp = yield _this8.fidjService.sendOnEndpoint({
          key: 'notifications',
          verb: 'GET',
          relativePath: args,
          defaultKeyUrl: _this8.defaultUrlForAPI + '/notifications'
        });
        return resp.data.notifications.map(n => new raain_model__WEBPACK_IMPORTED_MODULE_1__.EventNode(n));
      } catch (e) {
        yield _this8.checkError(e);
      }
      return null;
    })();
  }
  getAllNotifications() {
    var _this9 = this;
    return (0,_opt_atlassian_pipelines_agent_build_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_0__["default"])(function* () {
      try {
        const resp = yield _this9.fidjService.sendOnEndpoint({
          key: 'notifications',
          verb: 'GET',
          defaultKeyUrl: _this9.defaultUrlForAPI + '/notifications'
        });
        return resp.data.notifications.map(n => new raain_model__WEBPACK_IMPORTED_MODULE_1__.EventNode(n));
      } catch (e) {
        yield _this9.checkError(e);
      }
      return [];
    })();
  }
  // === Teams ===
  getTeams() {
    var _this0 = this;
    return (0,_opt_atlassian_pipelines_agent_build_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_0__["default"])(function* () {
      const teams = [];
      try {
        const resp = yield _this0.fidjService.sendOnEndpoint({
          key: 'teams_all',
          verb: 'GET',
          defaultKeyUrl: _this0.defaultUrlForAPI + '/teams_all'
        });
        for (const team of resp.data.teams) {
          teams.push(new raain_model__WEBPACK_IMPORTED_MODULE_1__.TeamNode(team));
        }
      } catch (e) {
        yield _this0.checkError(e);
      }
      return teams;
    })();
  }
  getTeam(teamId) {
    var _this1 = this;
    return (0,_opt_atlassian_pipelines_agent_build_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_0__["default"])(function* () {
      try {
        const resp = yield _this1.fidjService.sendOnEndpoint({
          key: 'teams',
          verb: 'GET',
          relativePath: teamId,
          defaultKeyUrl: _this1.defaultUrlForAPI + '/teams'
        });
        return new raain_model__WEBPACK_IMPORTED_MODULE_1__.TeamNode(resp.data);
      } catch (e) {
        yield _this1.checkError(e);
      }
      return null;
    })();
  }
  // === Radars ===
  getRadars(teamId) {
    var _this10 = this;
    return (0,_opt_atlassian_pipelines_agent_build_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_0__["default"])(function* () {
      const radars = [];
      const url = _this10.defaultUrlForAPI + '/radars' + (teamId ? '?teamId=' + teamId : '');
      try {
        const resp = yield _this10.fidjService.sendOnEndpoint({
          key: 'radars',
          verb: 'GET',
          defaultKeyUrl: url
        });
        for (const r of resp.data.radars) {
          const radar = new raain_model__WEBPACK_IMPORTED_MODULE_1__.RadarNode(r);
          radars.push(radar);
        }
      } catch (e) {
        yield _this10.checkError(e);
      }
      return radars;
    })();
  }
  getRadar(id) {
    var _this11 = this;
    return (0,_opt_atlassian_pipelines_agent_build_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_0__["default"])(function* () {
      try {
        const resp = yield _this11.fidjService.sendOnEndpoint({
          key: 'radars',
          verb: 'GET',
          relativePath: id,
          defaultKeyUrl: _this11.defaultUrlForAPI + '/radars'
        });
        return new raain_model__WEBPACK_IMPORTED_MODULE_1__.RadarNode(resp.data);
      } catch (e) {
        yield _this11.checkError(e);
      }
      return null;
    })();
  }
  putRadar(radarNode) {
    var _this12 = this;
    return (0,_opt_atlassian_pipelines_agent_build_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_0__["default"])(function* () {
      const data = {
        name: radarNode.name
      };
      try {
        const resp = yield _this12.fidjService.sendOnEndpoint({
          key: 'radars',
          relativePath: radarNode.id,
          verb: 'PUT',
          data,
          defaultKeyUrl: _this12.defaultUrlForAPI + '/radars/'
        });
        return new raain_model__WEBPACK_IMPORTED_MODULE_1__.RadarNode(resp.data);
      } catch (e) {
        yield _this12.checkError(e);
      }
    })();
  }
  getLonelyRadars(rains) {
    var _this13 = this;
    return (0,_opt_atlassian_pipelines_agent_build_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_0__["default"])(function* () {
      try {
        const resp = yield _this13.fidjService.sendOnEndpoint({
          key: 'radars',
          verb: 'GET',
          defaultKeyUrl: _this13.defaultUrlForAPI + '/radars'
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
        yield _this13.checkError(e);
      }
      return [];
    })();
  }
  getRainTimeframe(_x, _x2, _x3) {
    var _this14 = this;
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
        const resp = yield _this14.fidjService.sendOnEndpoint({
          key: 'rains',
          verb: 'GET',
          relativePath: queryPath,
          defaultKeyUrl: _this14.defaultUrlForAPI + '/rains'
        });
        const rainNode = new raain_model__WEBPACK_IMPORTED_MODULE_1__.RainNode(resp.data.timeframe);
        rainNode.name += '.radar.timeframe';
        return rainNode;
      } catch (e) {
        yield _this14.checkError(e);
      }
      return null;
    }).apply(this, arguments);
  }
  // === Rains ===
  getRains(teamId) {
    var _this15 = this;
    return (0,_opt_atlassian_pipelines_agent_build_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_0__["default"])(function* () {
      const rains = [];
      const url = _this15.defaultUrlForAPI + '/rains' + (teamId ? '?teamId=' + teamId : '');
      try {
        const resp = yield _this15.fidjService.sendOnEndpoint({
          key: 'rains',
          verb: 'GET',
          defaultKeyUrl: url
        });
        for (const rain of resp.data.rains) {
          rains.push(new raain_model__WEBPACK_IMPORTED_MODULE_1__.RainNode(rain));
        }
      } catch (e) {
        yield _this15.checkError(e);
      }
      return rains;
    })();
  }
  getRain(id) {
    var _this16 = this;
    return (0,_opt_atlassian_pipelines_agent_build_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_0__["default"])(function* () {
      try {
        const resp = yield _this16.fidjService.sendOnEndpoint({
          key: 'rains',
          relativePath: id,
          verb: 'GET',
          defaultKeyUrl: _this16.defaultUrlForAPI + '/rains/'
        });
        return new raain_model__WEBPACK_IMPORTED_MODULE_1__.RainNode(resp.data);
      } catch (e) {
        yield _this16.checkError(e);
      }
      return null;
    })();
  }
  // === Count
  getCounts(rainId, options) {
    var _this17 = this;
    return (0,_opt_atlassian_pipelines_agent_build_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_0__["default"])(function* () {
      try {
        const args = `?range=${options.range}&begin=${options.periodBegin.toISOString()}`;
        const resp = yield _this17.fidjService.sendOnEndpoint({
          key: 'rains',
          relativePath: rainId + '/counts' + args,
          verb: 'GET',
          defaultKeyUrl: _this17.defaultUrlForAPI + '/rains/'
        });
        const counts = resp.data.counts.result;
        const percentImages = [],
          percentRainy = [],
          percentQ = [];
        counts.forEach(c => {
          const label = _this17.setDateComponents(options.periodBegin, c);
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
        yield _this17.checkError(e);
      }
      return null;
    })();
  }
  getCountsHour(rainId, options) {
    var _this18 = this;
    return (0,_opt_atlassian_pipelines_agent_build_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_0__["default"])(function* () {
      try {
        const args = `?range=hour&begin=${options.periodBegin.toISOString()}`;
        const resp = yield _this18.fidjService.sendOnEndpoint({
          key: 'rains',
          relativePath: rainId + '/counts' + args,
          verb: 'GET',
          defaultKeyUrl: _this18.defaultUrlForAPI + '/rains/'
        });
        const counts = resp.data.counts.result;
        const percentImages = [],
          rainySum = [],
          rainyCount = [];
        counts.forEach(c => {
          const label = _this18.setDateComponents(options.periodBegin, c);
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
        yield _this18.checkError(e);
      }
      return null;
    })();
  }
  // === Computing ===
  launchRainComputation(rainId, date) {
    var _this19 = this;
    return (0,_opt_atlassian_pipelines_agent_build_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_0__["default"])(function* () {
      try {
        const response = yield _this19.fidjService.sendOnEndpoint({
          verb: 'POST',
          key: 'rains',
          relativePath: '' + rainId + '/computations',
          data: {
            date: date.toISOString()
          },
          defaultKeyUrl: _this19.defaultUrlForAPI + '/rains'
        });
        return response.data.computations?.map(c => new raain_model__WEBPACK_IMPORTED_MODULE_1__.RainComputation(c));
      } catch (e) {
        yield _this19.checkError(e);
      }
      return null;
    })();
  }
  getRainComputationCartesianMapById(rainId, rainComputationId) {
    var _this20 = this;
    return (0,_opt_atlassian_pipelines_agent_build_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_0__["default"])(function* () {
      try {
        const queryPath = '' + rainId + '/computations/' + rainComputationId + '?format=cartesian-map';
        const response = yield _this20.fidjService.sendOnEndpoint({
          key: 'rains',
          verb: 'GET',
          relativePath: queryPath,
          defaultKeyUrl: _this20.defaultUrlForAPI + '/rains'
        });
        if (!response.data['cartesian-map']) {
          return null;
        }
        const rainComputationMap = new raain_model__WEBPACK_IMPORTED_MODULE_1__.RainComputationMap(response.data['cartesian-map']);
        rainComputationMap.name = rainId + '.rain.cartesian-map';
        return rainComputationMap;
      } catch (e) {
        yield _this20.checkError(e);
      }
      return null;
    })();
  }
  getRainComputationCumulativeMapById(rainId, rainComputationId, cumulativeHours) {
    var _this21 = this;
    return (0,_opt_atlassian_pipelines_agent_build_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_0__["default"])(function* () {
      const queryPath = '' + rainId + '/computations/' + rainComputationId + '/cumulative/' + cumulativeHours;
      const response = yield _this21.fidjService.sendOnEndpoint({
        key: 'rains',
        verb: 'GET',
        relativePath: queryPath,
        defaultKeyUrl: _this21.defaultUrlForAPI + '/rains'
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
    var _this22 = this;
    return (0,_opt_atlassian_pipelines_agent_build_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_0__["default"])(function* () {
      const queryPath = '' + rainId + '/computations/' + rainComputationId;
      const response = yield _this22.fidjService.sendOnEndpoint({
        key: 'rains',
        verb: 'GET',
        relativePath: queryPath,
        defaultKeyUrl: _this22.defaultUrlForAPI + '/rains'
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
    var _this23 = this;
    return (0,_opt_atlassian_pipelines_agent_build_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_0__["default"])(function* () {
      const queryPath = '' + rainId + '/computations/' + rainComputationId + '/compares?date=' + date.toISOString();
      try {
        const response = yield _this23.fidjService.sendOnEndpoint({
          key: 'rains',
          verb: 'GET',
          relativePath: queryPath,
          defaultKeyUrl: _this23.defaultUrlForAPI + '/rains'
        });
        const rainComputationQuality = new raain_model__WEBPACK_IMPORTED_MODULE_1__.RainComputationQuality(response.data.qualities[0]);
        rainComputationQuality.qualitySpeedMatrixContainer = raain_model__WEBPACK_IMPORTED_MODULE_1__.SpeedMatrixContainer.CreateFromJson(rainComputationQuality.qualitySpeedMatrixContainer);
        return rainComputationQuality;
      } catch (e) {
        yield _this23.checkError(e);
      }
      return null;
    })();
  }
  getRainProgress(rainId) {
    var _this24 = this;
    return (0,_opt_atlassian_pipelines_agent_build_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_0__["default"])(function* () {
      try {
        const queryPath = '' + rainId + '/progress';
        const response = yield _this24.fidjService.sendOnEndpoint({
          key: 'rains',
          verb: 'GET',
          relativePath: queryPath,
          defaultKeyUrl: _this24.defaultUrlForAPI + '/rains'
          // timeout: 200000,
        });

        return response.data.inProgress;
      } catch (e) {
        yield _this24.checkError(e);
      }
      return 0;
    })();
  }
  // === Gauges ===
  getGauge(gaugeId) {
    var _this25 = this;
    return (0,_opt_atlassian_pipelines_agent_build_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_0__["default"])(function* () {
      try {
        const resp = yield _this25.fidjService.sendOnEndpoint({
          key: 'gauges',
          verb: 'GET',
          relativePath: gaugeId,
          defaultKeyUrl: _this25.defaultUrlForAPI + '/gauges'
        });
        return new raain_model__WEBPACK_IMPORTED_MODULE_1__.GaugeNode(resp.data);
      } catch (e) {
        yield _this25.checkError(e);
      }
    })();
  }
  getGauges(rainId) {
    var _this26 = this;
    return (0,_opt_atlassian_pipelines_agent_build_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_0__["default"])(function* () {
      let queryPath = '';
      if (_this26.asTeamId) {
        queryPath += '?teamId=' + _this26.asTeamId;
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
        const resp = yield _this26.fidjService.sendOnEndpoint({
          key: 'gauges',
          verb: 'GET',
          relativePath: queryPath,
          defaultKeyUrl: _this26.defaultUrlForAPI + '/gauges'
        });
        for (const gauge of resp.data.gauges) {
          gauges.push(new _tools__WEBPACK_IMPORTED_MODULE_4__.GaugeNodeFilter(gauge));
        }
      } catch (e) {
        yield _this26.checkError(e);
      }
      return gauges;
    })();
  }
  getGaugeMeasures(gaugeId, begin, end) {
    var _this27 = this;
    return (0,_opt_atlassian_pipelines_agent_build_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_0__["default"])(function* () {
      const queryPath = '' + gaugeId + '/measures?begin=' + begin.toISOString() + '&end=' + end.toISOString();
      const resp = yield _this27.fidjService.sendOnEndpoint({
        key: 'gauges',
        verb: 'GET',
        relativePath: queryPath,
        defaultKeyUrl: _this27.defaultUrlForAPI + '/gauges'
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





function RaainCompareStackComponent_div_0_ion_card_content_5_Template(rf, ctx) {
  if (rf & 1) {
    const _r4 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "ion-card-content")(1, "raain-compare", 3);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("selectedPoint", function RaainCompareStackComponent_div_0_ion_card_content_5_Template_raain_compare_selectedPoint_1_listener($event) {
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
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](4, "Cumulative");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](5, RaainCompareStackComponent_div_0_ion_card_content_5_Template, 2, 4, "ion-card-content", 0);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()()();
  }
  if (rf & 2) {
    const ctx_r0 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](5);
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
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate2"]("", compare_r6.name, " ", compare_r6.remarks, " ");
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
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](0, RaainCompareStackComponent_div_0_Template, 6, 1, "div", 0);
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](1, RaainCompareStackComponent_div_1_Template, 2, 1, "div", 0);
        }
        if (rf & 2) {
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", ctx.cumulative);
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", !ctx.cumulative);
        }
      },
      dependencies: [_angular_common__WEBPACK_IMPORTED_MODULE_2__.NgForOf, _angular_common__WEBPACK_IMPORTED_MODULE_2__.NgIf, _ionic_angular__WEBPACK_IMPORTED_MODULE_3__.IonCard, _ionic_angular__WEBPACK_IMPORTED_MODULE_3__.IonCardContent, _ionic_angular__WEBPACK_IMPORTED_MODULE_3__.IonCardHeader, _ionic_angular__WEBPACK_IMPORTED_MODULE_3__.IonCol, _raain_compare_raain_compare_component__WEBPACK_IMPORTED_MODULE_0__.RaainCompareComponent],
      styles: ["#card-matrix[_ngcontent-%COMP%] {\n  width: 170px;\n}\n\n.card-compare[_ngcontent-%COMP%] {\n  min-width: 300px;\n}\n\nion-card-header[_ngcontent-%COMP%] {\n  padding: 0;\n}\n/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8uL3NyYy9jb3JlL3NoYXJlZC9yYWFpbi1jb21wYXJlLXN0YWNrL3JhYWluLWNvbXBhcmUtc3RhY2suY29tcG9uZW50LnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFDRSxZQUFBO0FBQ0Y7O0FBRUE7RUFDRSxnQkFBQTtBQUNGOztBQUVBO0VBQ0UsVUFBQTtBQUNGIiwic291cmNlc0NvbnRlbnQiOlsiI2NhcmQtbWF0cml4IHtcbiAgd2lkdGg6IDE3MHB4O1xufVxuXG4uY2FyZC1jb21wYXJlIHtcbiAgbWluLXdpZHRoOiAzMDBweDtcbn1cblxuaW9uLWNhcmQtaGVhZGVyIHtcbiAgcGFkZGluZzogMDtcbn1cbiJdLCJzb3VyY2VSb290IjoiIn0= */"]
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
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! @angular/core */ 22560);
/* harmony import */ var _storage_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../storage.service */ 8184);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! @angular/common */ 94666);
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! @angular/forms */ 2508);
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! @ionic/angular */ 93819);
/* harmony import */ var _raain_map_raain_map_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../raain-map/raain-map.component */ 50121);
/* harmony import */ var _raain_compare_stack_raain_compare_stack_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../raain-compare-stack/raain-compare-stack.component */ 46341);
/* harmony import */ var _raain_date_focus_raain_date_focus_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../raain-date-focus/raain-date-focus.component */ 25320);
/* harmony import */ var _raain_date_dynamic_raain_date_dynamic_component__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../raain-date-dynamic/raain-date-dynamic.component */ 4528);
/* harmony import */ var _shared_pipe__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ../shared.pipe */ 64221);














function RaainDetailsComponent_ion_list_0_ion_icon_2_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelement"](0, "ion-icon", 21);
  }
}
function RaainDetailsComponent_ion_list_0_ion_icon_4_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelement"](0, "ion-icon", 22);
  }
}
function RaainDetailsComponent_ion_list_0_ion_item_11_Template(rf, ctx) {
  if (rf & 1) {
    const _r12 = _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementStart"](0, "ion-item", 1)(1, "ion-card", 23)(2, "ion-card-content")(3, "raain-date-dynamic", 24);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵlistener"]("changedDate", function RaainDetailsComponent_ion_list_0_ion_item_11_Template_raain_date_dynamic_changedDate_3_listener($event) {
      _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵrestoreView"](_r12);
      const ctx_r11 = _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵnextContext"](2);
      return _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵresetView"](ctx_r11.onDateChangeInCount($event));
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementEnd"]()()()();
  }
  if (rf & 2) {
    const ctx_r3 = _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵproperty"]("currentHeight", 300)("fetchData", ctx_r3.fetchDataWrapper)("points", ctx_r3.countPoints);
  }
}
function RaainDetailsComponent_ion_list_0_ion_button_39_Template(rf, ctx) {
  if (rf & 1) {
    const _r14 = _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementStart"](0, "ion-button", 25);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵlistener"]("click", function RaainDetailsComponent_ion_list_0_ion_button_39_Template_ion_button_click_0_listener() {
      _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵrestoreView"](_r14);
      const ctx_r13 = _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵnextContext"](2);
      return _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵresetView"](ctx_r13.refreshMap());
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵtext"](1, " refresh map ");
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementEnd"]();
  }
}
function RaainDetailsComponent_ion_list_0_ion_progress_bar_40_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelement"](0, "ion-progress-bar", 26);
  }
  if (rf & 2) {
    const ctx_r5 = _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵproperty"]("buffer", ctx_r5.countsPeriod.progress / (((ctx_r5.timeframeDates == null ? null : ctx_r5.timeframeDates.length) || 10) + 3) + 0.01)("value", ctx_r5.countsPeriod.progress / (((ctx_r5.timeframeDates == null ? null : ctx_r5.timeframeDates.length) || 10) + 3));
  }
}
function RaainDetailsComponent_ion_list_0_ion_item_41_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementStart"](0, "ion-item", 1);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelement"](1, "ion-icon", 27);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementStart"](2, "ion-label", 28);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵtext"](3, " No radar measure. ");
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementEnd"]()();
  }
}
function RaainDetailsComponent_ion_list_0_ion_item_42_i_4_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementStart"](0, "i");
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementEnd"]();
  }
  if (rf & 2) {
    const ctx_r15 = _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵnextContext"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵtextInterpolate1"]("(In Progress: ", ctx_r15.countsPeriod.progress, "...)");
  }
}
function RaainDetailsComponent_ion_list_0_ion_item_42_Template(rf, ctx) {
  if (rf & 1) {
    const _r17 = _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementStart"](0, "ion-item", 1);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelement"](1, "ion-icon", 27);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementStart"](2, "ion-label", 28);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵtext"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵtemplate"](4, RaainDetailsComponent_ion_list_0_ion_item_42_i_4_Template, 2, 1, "i", 0);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementStart"](5, "ion-toggle", 4);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵlistener"]("ionChange", function RaainDetailsComponent_ion_list_0_ion_item_42_Template_ion_toggle_ionChange_5_listener($event) {
      _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵrestoreView"](_r17);
      const ctx_r16 = _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵnextContext"](2);
      return _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵresetView"](ctx_r16.onToggleMap($event));
    })("ngModelChange", function RaainDetailsComponent_ion_list_0_ion_item_42_Template_ion_toggle_ngModelChange_5_listener($event) {
      _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵrestoreView"](_r17);
      const ctx_r18 = _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵnextContext"](2);
      return _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵresetView"](ctx_r18.toggleMap = $event);
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementEnd"]()();
  }
  if (rf & 2) {
    const ctx_r7 = _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵtextInterpolate1"](" % Images: ", ctx_r7.getPercentOfImages(), " ");
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵproperty"]("ngIf", ctx_r7.countsPeriod.progress);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵproperty"]("ngModel", ctx_r7.toggleMap)("checked", ctx_r7.toggleMap);
  }
}
function RaainDetailsComponent_ion_list_0_ion_item_43_span_18_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementStart"](0, "span");
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵpipe"](2, "date");
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementEnd"]();
  }
  if (rf & 2) {
    const ctx_r19 = _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵnextContext"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵtextInterpolate1"](" ", _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵpipeBind2"](2, 1, ctx_r19.compareManager.currentQualityDoneDate, "yyyy-MM-dd HH:mm"), "");
  }
}
function RaainDetailsComponent_ion_list_0_ion_item_43_span_19_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementStart"](0, "span", 36);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵpipe"](2, "date");
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵpipe"](3, "date");
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementEnd"]();
  }
  if (rf & 2) {
    const ctx_r20 = _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵnextContext"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵtextInterpolate2"](" ", _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵpipeBind2"](2, 2, ctx_r20.compareManager.currentQualityDoneDate, "yyyy-MM-dd HH:mm"), " BEFORE ", _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵpipeBind2"](3, 5, ctx_r20.refreshManager.rainComputationMapDoneDate, "yyyy-MM-dd HH:mm"), "");
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
function RaainDetailsComponent_ion_list_0_ion_item_43_Template(rf, ctx) {
  if (rf & 1) {
    const _r22 = _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementStart"](0, "ion-item", 1)(1, "ion-grid")(2, "ion-row")(3, "ion-col", 29)(4, "raain-map", 30);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵlistener"]("changedDate", function RaainDetailsComponent_ion_list_0_ion_item_43_Template_raain_map_changedDate_4_listener($event) {
      _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵrestoreView"](_r22);
      const ctx_r21 = _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵnextContext"](2);
      return _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵresetView"](ctx_r21.onDateChangeInMap($event));
    })("selectedMarker", function RaainDetailsComponent_ion_list_0_ion_item_43_Template_raain_map_selectedMarker_4_listener($event) {
      _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵrestoreView"](_r22);
      const ctx_r23 = _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵnextContext"](2);
      return _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵresetView"](ctx_r23.onGaugeSelectInMap($event));
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementStart"](5, "ion-col", 31)(6, "ion-button", 32);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵtext"](7, " Cumulative ");
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementStart"](8, "ion-toggle", 33);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵlistener"]("ngModelChange", function RaainDetailsComponent_ion_list_0_ion_item_43_Template_ion_toggle_ngModelChange_8_listener($event) {
      _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵrestoreView"](_r22);
      const ctx_r24 = _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵnextContext"](2);
      return _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵresetView"](ctx_r24.toggleCumulative = $event);
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementStart"](9, "p");
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵtext"](10);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵpipe"](11, "date");
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelement"](12, "br");
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵtext"](13);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelement"](14, "br");
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵtext"](15);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementStart"](16, "raain-compare-stack", 34);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵlistener"]("selectedPoint", function RaainDetailsComponent_ion_list_0_ion_item_43_Template_raain_compare_stack_selectedPoint_16_listener($event) {
      _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵrestoreView"](_r22);
      const ctx_r25 = _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵnextContext"](2);
      return _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵresetView"](ctx_r25.onGaugeSelectInCompare($event));
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementStart"](17, "small");
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵtemplate"](18, RaainDetailsComponent_ion_list_0_ion_item_43_span_18_Template, 3, 4, "span", 0);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵtemplate"](19, RaainDetailsComponent_ion_list_0_ion_item_43_span_19_Template, 4, 8, "span", 35);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵtext"](20);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementEnd"]()()()()();
  }
  if (rf & 2) {
    const ctx_r8 = _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵadvance"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵproperty"]("coordinates", ctx_r8.coordinates)("currentHeight", 500)("defaultDate", ctx_r8.dateShown)("markers", _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵpureFunction6"](26, _c1, ctx_r8.borders, ctx_r8.compareManager.gaugesInMap, ctx_r8.compareManager.gaugesInCompare, ctx_r8.compareManager.selectedGauges, ctx_r8.compareManager.selectedPixels, (ctx_r8.compareManager.pixelsSolutions == null ? null : ctx_r8.compareManager.pixelsSolutions.length) ? ctx_r8.compareManager.pixelsSolutions[0] : _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵpureFunction0"](25, _c0)))("sumFn", ctx_r8.reportManager.sumFn)("sumValues", ctx_r8.reportManager.sumValues)("timeframeContainers", ctx_r8.timeframeContainers)("timeframeDates", ctx_r8.timeframeDates);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵadvance"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵproperty"]("ngModel", ctx_r8.toggleCumulative)("checked", ctx_r8.toggleCumulative);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵtextInterpolate1"](" computed: ", _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵpipeBind2"](11, 22, ctx_r8.refreshManager.rainComputationMapDoneDate, "yyyy-MM-dd HH:mm"), "");
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵtextInterpolate1"](" launched by: ", ctx_r8.refreshManager.rainComputationMapLaunchedBy, "");
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵtextInterpolate1"](" time spent (ms): ", ctx_r8.refreshManager.rainComputationMapTimeSpentInMs, " ");
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵproperty"]("compareManager", ctx_r8.compareManager)("cumulative", ctx_r8.toggleCumulative);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵproperty"]("ngIf", (ctx_r8.refreshManager.rainComputationMapDoneDate == null ? null : ctx_r8.refreshManager.rainComputationMapDoneDate.getTime()) <= (ctx_r8.compareManager.currentQualityDoneDate == null ? null : ctx_r8.compareManager.currentQualityDoneDate.getTime()) + 60000);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵproperty"]("ngIf", (ctx_r8.refreshManager.rainComputationMapDoneDate == null ? null : ctx_r8.refreshManager.rainComputationMapDoneDate.getTime()) > (ctx_r8.compareManager.currentQualityDoneDate == null ? null : ctx_r8.compareManager.currentQualityDoneDate.getTime()) + 60000);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵtextInterpolate5"](" gaugesInCompare ? ", ctx_r8.compareManager.gaugesInCompare.length, " globalComparePoints ? ", ctx_r8.compareManager.globalComparePoints.length, " launchedBy: ", ctx_r8.compareManager.currentQualityLaunchedBy, " version: ", ctx_r8.compareManager.compareVersion, " timeSpentInMs: ", ctx_r8.compareManager.currentQualityTimeSpentInMs, " ");
  }
}
function RaainDetailsComponent_ion_list_0_ion_item_44_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementStart"](0, "ion-item", 1)(1, "ion-card")(2, "ion-card-content");
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelement"](3, "raain-date-focus", 37);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementEnd"]()()();
  }
  if (rf & 2) {
    const ctx_r9 = _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵproperty"]("currentHeight", 300)("focusDate", ctx_r9.periodBegin)("focusRange", ctx_r9.DateRange.DAY)("points", ctx_r9.gaugeSelectedPoints)("withoutAll", true);
  }
}
function RaainDetailsComponent_ion_list_0_ion_progress_bar_45_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelement"](0, "ion-progress-bar", 26);
  }
  if (rf & 2) {
    const ctx_r10 = _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵproperty"]("buffer", ctx_r10.countsPeriod.progress / (((ctx_r10.timeframeDates == null ? null : ctx_r10.timeframeDates.length) || 10) + 3) + 0.01)("value", ctx_r10.countsPeriod.progress / (((ctx_r10.timeframeDates == null ? null : ctx_r10.timeframeDates.length) || 10) + 3));
  }
}
function RaainDetailsComponent_ion_list_0_Template(rf, ctx) {
  if (rf & 1) {
    const _r27 = _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementStart"](0, "ion-list")(1, "ion-item", 1);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵtemplate"](2, RaainDetailsComponent_ion_list_0_ion_icon_2_Template, 1, 0, "ion-icon", 2);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵpipe"](3, "hasGoodQuality");
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵtemplate"](4, RaainDetailsComponent_ion_list_0_ion_icon_4_Template, 1, 0, "ion-icon", 3);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵpipe"](5, "hasGoodQuality");
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementStart"](6, "ion-card-title");
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵtext"](7);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementStart"](8, "ion-card-subtitle");
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵtext"](9);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementStart"](10, "ion-toggle", 4);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵlistener"]("ionChange", function RaainDetailsComponent_ion_list_0_Template_ion_toggle_ionChange_10_listener() {
      _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵrestoreView"](_r27);
      const ctx_r26 = _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵnextContext"]();
      return _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵresetView"](ctx_r26.onEnableCountHistoryTab(ctx_r26.rainNode));
    })("ngModelChange", function RaainDetailsComponent_ion_list_0_Template_ion_toggle_ngModelChange_10_listener($event) {
      _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵrestoreView"](_r27);
      const ctx_r28 = _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵnextContext"]();
      return _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵresetView"](ctx_r28.toggleHistory = $event);
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵtemplate"](11, RaainDetailsComponent_ion_list_0_ion_item_11_Template, 4, 3, "ion-item", 5);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementStart"](12, "ion-item");
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelement"](13, "ion-icon", 6);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementStart"](14, "ion-button", 7);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵlistener"]("click", function RaainDetailsComponent_ion_list_0_Template_ion_button_click_14_listener() {
      _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵrestoreView"](_r27);
      const ctx_r29 = _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵnextContext"]();
      return _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵresetView"](ctx_r29.setPeriodOfNow());
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵtext"](15, " Now ");
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementStart"](16, "ion-label", 8);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵtext"](17, " Start: ");
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementStart"](18, "input", 9);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵlistener"]("change", function RaainDetailsComponent_ion_list_0_Template_input_change_18_listener($event) {
      _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵrestoreView"](_r27);
      const ctx_r30 = _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵnextContext"]();
      return _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵresetView"](ctx_r30.onPeriodBeginChange($event));
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵtext"](19, " Local time. \u00A0 During: ");
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementStart"](20, "ion-select", 10);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵlistener"]("ionDismiss", function RaainDetailsComponent_ion_list_0_Template_ion_select_ionDismiss_20_listener($event) {
      _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵrestoreView"](_r27);
      const ctx_r31 = _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵnextContext"]();
      return _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵresetView"](ctx_r31.onPeriodDurationChange($event));
    })("ngModelChange", function RaainDetailsComponent_ion_list_0_Template_ion_select_ngModelChange_20_listener($event) {
      _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵrestoreView"](_r27);
      const ctx_r32 = _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵnextContext"]();
      return _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵresetView"](ctx_r32.periodDurationAsString = $event);
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementStart"](21, "ion-select-option", 11);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵtext"](22, "15 minutes");
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementStart"](23, "ion-select-option", 12);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵtext"](24, "30 minutes");
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementStart"](25, "ion-select-option", 13);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵtext"](26, "1 hour");
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementStart"](27, "ion-select-option", 14);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵtext"](28, "2 hours");
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementStart"](29, "ion-select-option", 15);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵtext"](30, "3 hours");
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementStart"](31, "ion-select-option", 16);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵtext"](32, "4 hours");
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementStart"](33, "ion-select-option", 17);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵtext"](34, "5 hours");
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementStart"](35, "ion-select-option", 18);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵtext"](36, "6 hours");
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementStart"](37, "ion-label");
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵtext"](38);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵtemplate"](39, RaainDetailsComponent_ion_list_0_ion_button_39_Template, 2, 0, "ion-button", 19);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵtemplate"](40, RaainDetailsComponent_ion_list_0_ion_progress_bar_40_Template, 1, 2, "ion-progress-bar", 20);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵtemplate"](41, RaainDetailsComponent_ion_list_0_ion_item_41_Template, 4, 0, "ion-item", 5);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵtemplate"](42, RaainDetailsComponent_ion_list_0_ion_item_42_Template, 6, 4, "ion-item", 5);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵtemplate"](43, RaainDetailsComponent_ion_list_0_ion_item_43_Template, 21, 33, "ion-item", 5);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵtemplate"](44, RaainDetailsComponent_ion_list_0_ion_item_44_Template, 4, 5, "ion-item", 5);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵtemplate"](45, RaainDetailsComponent_ion_list_0_ion_progress_bar_45_Template, 1, 2, "ion-progress-bar", 20);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementEnd"]();
  }
  if (rf & 2) {
    const ctx_r0 = _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵproperty"]("ngIf", _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵpipeBind1"](3, 17, ctx_r0.rainNode));
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵproperty"]("ngIf", !_angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵpipeBind1"](5, 19, ctx_r0.rainNode));
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵtextInterpolate"](ctx_r0.rainNode.name);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵtextInterpolate1"]("by ", ctx_r0.teamNode == null ? null : ctx_r0.teamNode.name, "");
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵproperty"]("ngModel", ctx_r0.toggleHistory)("checked", ctx_r0.toggleHistory);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵproperty"]("ngIf", ctx_r0.toggleHistory);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵadvance"](7);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵproperty"]("value", ctx_r0.periodBeginAsString);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵproperty"]("ngModel", ctx_r0.periodDurationAsString);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵadvance"](18);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵtextInterpolate"](ctx_r0.onChangeDetectionTest(ctx_r0.rainNode));
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵproperty"]("ngIf", !ctx_r0.refreshInProgress);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵproperty"]("ngIf", ctx_r0.refreshInProgress);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵproperty"]("ngIf", !ctx_r0.getPercentOfImages());
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵproperty"]("ngIf", ctx_r0.getPercentOfImages());
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵproperty"]("ngIf", ctx_r0.toggleMap);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵproperty"]("ngIf", ctx_r0.gaugeSelectedPoints.length && ctx_r0.gaugeSelectedPoints[0].values.length);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵproperty"]("ngIf", ctx_r0.refreshInProgress);
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
      _this6.refreshManager.refresh(false, true).then(ignored => {});
    })();
  }
  onDateChangeInMap(dateShown) {
    var _this7 = this;
    return (0,_opt_atlassian_pipelines_agent_build_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_0__["default"])(function* () {
      console.log('onDateChangeInMap', dateShown);
      _this7.dateShown = dateShown;
      const cumulativeHours = !_this7.toggleCumulative ? 0 : parseFloat(_this7.periodDurationAsString);
      yield _this7.refreshManager.fetch(_this7.dateShown, _this7.toggleGaugeMeasures, cumulativeHours);
      _this7.currentTimeframeTarget = _this7.refreshManager.getTimelineSelectedFrameSet();
    })();
  }
  onGaugeSelectInMap(mapLatLng) {
    var _this8 = this;
    return (0,_opt_atlassian_pipelines_agent_build_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_0__["default"])(function* () {
      const gaugesFiltered = _this8.compareManager.gaugesInMap.filter(g => g.lat === mapLatLng.lat && g.lng === mapLatLng.lng);
      if (gaugesFiltered.length !== 1) {
        return;
      }
      const gaugeSelected = gaugesFiltered[0];
      yield _this8.refreshGaugeValues({
        id: gaugeSelected.id,
        name: gaugeSelected.name
      });
      yield _this8.compareManager.selectGauge(gaugeSelected.id, 0);
    })();
  }
  refreshGaugeValues(gaugeSelected) {
    var _this9 = this;
    return (0,_opt_atlassian_pipelines_agent_build_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_0__["default"])(function* () {
      const dayBegin = new Date(_this9.periodBegin.toISOString().substring(0, 10));
      const dayEnd = new Date(dayBegin.getTime() + 24 * 60 * 60 * 1000 - 1);
      const gaugeMeasures = yield _this9.profileService.getGaugeMeasures(gaugeSelected.id, dayBegin, dayEnd);
      const gaugeValues = gaugeMeasures.map(gm => {
        const cartesianMeasureValue = new raain_model__WEBPACK_IMPORTED_MODULE_1__.CartesianMeasureValue(gm.values[0]);
        const value = cartesianMeasureValue.getCartesianValues()[0].value;
        return {
          date: gm.date,
          value
        };
      });
      _this9.gaugeSelectedPoints = [{
        label: gaugeSelected.name,
        style: 'bar',
        values: gaugeValues
      }];
      console.log('this.gaugeSelectedPoints:', _this9.gaugeSelectedPoints);
    })();
  }
  onGaugeSelectInCompare(e) {
    var _this0 = this;
    return (0,_opt_atlassian_pipelines_agent_build_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_0__["default"])(function* () {
      yield _this0.refreshGaugeValues({
        id: e.point.id,
        name: e.point.name
      });
      yield _this0.compareManager.selectGauge(e.point.id, e.compareIndex);
    })();
  }
  onToggleMap($event) {
    var _this1 = this;
    return (0,_opt_atlassian_pipelines_agent_build_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_0__["default"])(function* () {
      if (_this1.toggleMap) {
        yield _this1.refreshMap();
      }
    })();
  }
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
      _this10.refreshManager.refresh(false, _this10.toggleAdmin).then(ignored => {});
    })();
  }
  onReportClick() {
    var _this11 = this;
    return (0,_opt_atlassian_pipelines_agent_build_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_0__["default"])(function* () {
      yield _this11.reportManager.setPeriod(_this11.dateShown, _this11.dateShown);
    })();
  }
  onReportCumulativeClick() {
    var _this12 = this;
    return (0,_opt_atlassian_pipelines_agent_build_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_0__["default"])(function* () {
      yield _this12.reportManager.setPeriod(_this12.periodBegin, _this12.periodEnd);
    })();
  }
  launchComputation() {
    var _this13 = this;
    return (0,_opt_atlassian_pipelines_agent_build_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_0__["default"])(function* () {
      yield _this13.profileService.launchRainComputation(_this13.rainNode.id, _this13.dateShown);
    })();
  }
  setPeriodOfNow() {
    var _this14 = this;
    return (0,_opt_atlassian_pipelines_agent_build_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_0__["default"])(function* () {
      // should look like: "2024-08-26T12:13"
      const last30mn = new Date();
      last30mn.setMinutes(last30mn.getMinutes() - 30);
      _this14.periodBeginAsString = last30mn.toISOString().substring(0, 11) + last30mn.toLocaleTimeString().substring(0, 5);
      _this14.periodDurationAsString = '1';
      yield _this14.onPeriodBeginChange(null);
      _this14.refreshManager.refresh(false, true).then(ignored => {});
    })();
  }
  getPercentOfImages() {
    if (!this.countsPeriod.percentImages?.length) {
      return 0;
    }
    const duringPeriod = this.countsPeriod.percentImages.filter(a => new Date(a.name).getTime() === this.periodBegin.getTime());
    const summed = duringPeriod.reduce((a, b) => a + (b.x ?? 0), 0);
    return summed / duringPeriod.length;
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
    this.toggleMap = false;
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
    var _this15 = this;
    return (0,_opt_atlassian_pipelines_agent_build_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_0__["default"])(function* () {
      _this15.cleanAll();
      yield _this15.initRain();
    })();
  }
  initRain() {
    var _this16 = this;
    return (0,_opt_atlassian_pipelines_agent_build_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_0__["default"])(function* () {
      if (!_this16.rainNode) {
        return;
      }
      _this16.refreshManager.rainNode = _this16.rainNode;
      _this16.compareManager.rainNode = _this16.rainNode;
      _this16.reportManager.rainNode = _this16.rainNode;
      _this16.refreshManager.setMethods(_this16.onRefreshInProgress.bind(_this16), _this16.onRefreshDone.bind(_this16), _this16.onFetchDone.bind(_this16));
      const center = _this16.rainNode.getCenter();
      _this16.coordinates = new raain_ui__WEBPACK_IMPORTED_MODULE_2__.MapLatLng(center.lat, center.lng);
      _this16.teamNode = yield _this16.profileService.getTeam(_this16.rainNode.getLink('team').getId());
      if (_this16.periodBegin && _this16.periodEnd) {
        _this16.refreshManager.period = {
          begin: _this16.periodBegin,
          end: _this16.periodEnd
        };
        yield _this16.refreshManager.refresh(false, _this16.toggleAdmin);
      }
    })();
  }
  onRefreshInProgress(countPeriods, timeframeDates) {
    var _this17 = this;
    return (0,_opt_atlassian_pipelines_agent_build_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_0__["default"])(function* () {
      _this17.refreshInProgress = true;
      _this17.countsPeriod = countPeriods;
      _this17.timeframeDates = timeframeDates;
    })();
  }
  onRefreshDone(timeframeDates) {
    var _this18 = this;
    return (0,_opt_atlassian_pipelines_agent_build_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_0__["default"])(function* () {
      _this18.timeframeDates = timeframeDates;
      _this18.refreshInProgress = false;
    })();
  }
  onFetchDone(timeframeContainers) {
    var _this19 = this;
    return (0,_opt_atlassian_pipelines_agent_build_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_0__["default"])(function* () {
      _this19.timeframeContainers = timeframeContainers;
    })();
  }
  change(changes) {
    var _this20 = this;
    return (0,_opt_atlassian_pipelines_agent_build_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_0__["default"])(function* () {
      yield _this20.init();
    })();
  }
  static {
    this.ɵfac = function RaainDetailsComponent_Factory(t) {
      return new (t || RaainDetailsComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵdirectiveInject"](_storage_service__WEBPACK_IMPORTED_MODULE_4__.Storage));
    };
  }
  static {
    this.ɵcmp = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵdefineComponent"]({
      type: RaainDetailsComponent,
      selectors: [["raain-details"]],
      inputs: {
        toggleAdmin: "toggleAdmin",
        rainNode: "rainNode",
        compareManager: "compareManager",
        refreshManager: "refreshManager",
        reportManager: "reportManager",
        profileService: "profileService",
        radarService: "radarService"
      },
      features: [_angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵNgOnChangesFeature"]],
      decls: 1,
      vars: 1,
      consts: [[4, "ngIf"], ["lines", "none"], ["color", "success", "name", "radio-button-off", "slot", "start", 4, "ngIf"], ["color", "warning", "name", "radio-button-off", "slot", "start", 4, "ngIf"], ["slot", "end", 3, "ngModel", "checked", "ionChange", "ngModelChange"], ["lines", "none", 4, "ngIf"], ["name", "calendar", "slot", "start"], ["fill", "outline", "slot", "start", 3, "click"], ["slot", "start", 1, "ion-hide-md-down", 2, "max-width", "fit-content", "margin-right", "5px"], ["type", "datetime-local", 3, "value", "change"], ["id", "periodDuration", "interface", "popover", "slot", "start", 1, "ion-hide-md-down", 3, "ngModel", "ionDismiss", "ngModelChange"], ["value", "0.25"], ["value", "0.5"], ["value", "1"], ["value", "2"], ["value", "3"], ["value", "4"], ["value", "5"], ["value", "6"], ["slot", "end", 3, "click", 4, "ngIf"], ["color", "primary", 3, "buffer", "value", 4, "ngIf"], ["color", "success", "name", "radio-button-off", "slot", "start"], ["color", "warning", "name", "radio-button-off", "slot", "start"], ["id", "card-count"], [3, "currentHeight", "fetchData", "points", "changedDate"], ["slot", "end", 3, "click"], ["color", "primary", 3, "buffer", "value"], ["name", "map", "slot", "start"], [2, "color", "lightgray", "font-size", "small"], ["size-lg", "7"], [3, "coordinates", "currentHeight", "defaultDate", "markers", "sumFn", "sumValues", "timeframeContainers", "timeframeDates", "changedDate", "selectedMarker"], ["size-lg", "5", 1, "ion-hide-xl-down"], ["color", "medium", "fill", "clear"], ["color", "secondary", 3, "ngModel", "checked", "ngModelChange"], [3, "compareManager", "cumulative", "selectedPoint"], ["style", "color: red; font-size: larger", 4, "ngIf"], [2, "color", "red", "font-size", "larger"], [3, "currentHeight", "focusDate", "focusRange", "points", "withoutAll"]],
      template: function RaainDetailsComponent_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵtemplate"](0, RaainDetailsComponent_ion_list_0_Template, 46, 21, "ion-list", 0);
        }
        if (rf & 2) {
          _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵproperty"]("ngIf", ctx.rainNode);
        }
      },
      dependencies: [_angular_common__WEBPACK_IMPORTED_MODULE_11__.NgIf, _angular_forms__WEBPACK_IMPORTED_MODULE_12__.NgControlStatus, _angular_forms__WEBPACK_IMPORTED_MODULE_12__.NgModel, _ionic_angular__WEBPACK_IMPORTED_MODULE_13__.IonButton, _ionic_angular__WEBPACK_IMPORTED_MODULE_13__.IonCard, _ionic_angular__WEBPACK_IMPORTED_MODULE_13__.IonCardContent, _ionic_angular__WEBPACK_IMPORTED_MODULE_13__.IonCardSubtitle, _ionic_angular__WEBPACK_IMPORTED_MODULE_13__.IonCardTitle, _ionic_angular__WEBPACK_IMPORTED_MODULE_13__.IonCol, _ionic_angular__WEBPACK_IMPORTED_MODULE_13__.IonGrid, _ionic_angular__WEBPACK_IMPORTED_MODULE_13__.IonIcon, _ionic_angular__WEBPACK_IMPORTED_MODULE_13__.IonItem, _ionic_angular__WEBPACK_IMPORTED_MODULE_13__.IonLabel, _ionic_angular__WEBPACK_IMPORTED_MODULE_13__.IonList, _ionic_angular__WEBPACK_IMPORTED_MODULE_13__.IonProgressBar, _ionic_angular__WEBPACK_IMPORTED_MODULE_13__.IonRow, _ionic_angular__WEBPACK_IMPORTED_MODULE_13__.IonSelect, _ionic_angular__WEBPACK_IMPORTED_MODULE_13__.IonSelectOption, _ionic_angular__WEBPACK_IMPORTED_MODULE_13__.IonToggle, _ionic_angular__WEBPACK_IMPORTED_MODULE_13__.BooleanValueAccessor, _ionic_angular__WEBPACK_IMPORTED_MODULE_13__.SelectValueAccessor, _raain_map_raain_map_component__WEBPACK_IMPORTED_MODULE_5__.RaainMapComponent, _raain_compare_stack_raain_compare_stack_component__WEBPACK_IMPORTED_MODULE_6__.RaainCompareStackComponent, _raain_date_focus_raain_date_focus_component__WEBPACK_IMPORTED_MODULE_7__.RaainDateFocusComponent, _raain_date_dynamic_raain_date_dynamic_component__WEBPACK_IMPORTED_MODULE_8__.RaainDateDynamicComponent, _angular_common__WEBPACK_IMPORTED_MODULE_11__.DatePipe, _shared_pipe__WEBPACK_IMPORTED_MODULE_9__.HasGoodQuality],
      styles: ["ion-card[_ngcontent-%COMP%] {\n  width: 100%;\n}\n\nion-card-subtitle[_ngcontent-%COMP%] {\n  padding-left: 20px;\n}\n\n#periodDuration[_ngcontent-%COMP%] {\n  border: 1px solid var(--ion-color-medium);\n  border-radius: 2px;\n  padding: 2px 20px;\n}\n\nraain-compare-stack[_ngcontent-%COMP%] {\n  width: 100%;\n}\n/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8uL3NyYy9jb3JlL3NoYXJlZC9yYWFpbi1kZXRhaWxzL3JhYWluLWRldGFpbHMuY29tcG9uZW50LnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFDRSxXQUFBO0FBQ0Y7O0FBRUE7RUFDRSxrQkFBQTtBQUNGOztBQUVBO0VBQ0UseUNBQUE7RUFDQSxrQkFBQTtFQUNBLGlCQUFBO0FBQ0Y7O0FBRUE7RUFDRSxXQUFBO0FBQ0YiLCJzb3VyY2VzQ29udGVudCI6WyJpb24tY2FyZCB7XG4gIHdpZHRoOiAxMDAlO1xufVxuXG5pb24tY2FyZC1zdWJ0aXRsZSB7XG4gIHBhZGRpbmctbGVmdDogMjBweDtcbn1cblxuI3BlcmlvZER1cmF0aW9uIHtcbiAgYm9yZGVyOiAxcHggc29saWQgdmFyKC0taW9uLWNvbG9yLW1lZGl1bSk7XG4gIGJvcmRlci1yYWRpdXM6IDJweDtcbiAgcGFkZGluZzogMnB4IDIwcHg7XG59XG5cbnJhYWluLWNvbXBhcmUtc3RhY2sge1xuICB3aWR0aDogMTAwJTtcbn1cbiJdLCJzb3VyY2VSb290IjoiIn0= */"]
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
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ 22560);
/* harmony import */ var raain_ui__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! raain-ui */ 88666);
/* harmony import */ var raain_ui__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(raain_ui__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _storage_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../storage.service */ 8184);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/common */ 94666);
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/forms */ 2508);
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @ionic/angular */ 93819);







const _c0 = ["primaryMap"];
const _c1 = ["canvasScale"];
function RaainMapComponent_ion_select_option_11_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](0, "ion-select-option", 25);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵpipe"](2, "date");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
  }
  if (rf & 2) {
    const dateToSelect_r3 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵpropertyInterpolate"]("value", dateToSelect_r3.toISOString());
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtextInterpolate1"](" ", _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵpipeBind2"](2, 2, dateToSelect_r3, "yyyy-MM-dd HH:mm"), " ");
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
    this.selectedMarker = new _angular_core__WEBPACK_IMPORTED_MODULE_2__.EventEmitter();
    this.changedDate = new _angular_core__WEBPACK_IMPORTED_MODULE_2__.EventEmitter();
    this.delete();
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
  changeCumulative() {
    if (this.showCumulative) {
      const factory = new raain_ui__WEBPACK_IMPORTED_MODULE_0__.ElementsFactory(this.coordinates, true);
      this.createScale(factory, 'mm');
      this.cumulativeTimeframeContainers = this.timeframeContainers;
    } else {
      const factory = new raain_ui__WEBPACK_IMPORTED_MODULE_0__.ElementsFactory(this.coordinates, true);
      this.createScale(factory, 'mm/h');
    }
    this.updateTimeframe();
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

    const factory = new raain_ui__WEBPACK_IMPORTED_MODULE_0__.ElementsFactory(this.coordinates, true);
    this.createScale(factory, 'mm/h');
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
      const drawer = this.mapElement.compositeLayer.getFirstDrawer();
      this.sumResult = drawer?.getExecOfWindowPoints(this.sumValues, this.sumFn);
    }
    this.changeNavigation(possibleNewDefaultDate);
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
    this.selectedMarker.emit(new raain_ui__WEBPACK_IMPORTED_MODULE_0__.MapLatLng(evt.latlng?.lat, evt.latlng?.lng, undefined, evt.id, evt.name));
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
    if (!this.showCumulative) {
      this.mapElement.updateMapTimeframe(this.timeframeContainers);
      this.currentFrameContainer = this.timeframeContainers?.containers[0]?.timeframe[0];
    } else if (this.timeframeContainers.containers[0]?.timeframe) {
      for (const container of this.timeframeContainers.containers[0].timeframe) {
        const alreadyExist = this.cumulativeTimeframeContainers.containers[0].timeframe.filter(c => new Date(c.date).getTime() === new Date(container.date).getTime());
        if (alreadyExist.length < 1) {
          this.cumulativeTimeframeContainers.containers[0].timeframe.push(container);
        }
      }
      console.log(new Date().toISOString(), 'cartesianMapValues: computing...');
      const cartesianMapValues = this.cumulativeTimeframeContainers.getCumulativeCartesianValues();
      console.log(new Date().toISOString(), 'cartesianMapValues:', cartesianMapValues.length);
      this.currentFrameContainer = new raain_ui__WEBPACK_IMPORTED_MODULE_0__.FrameContainer(this.defaultDate, cartesianMapValues, false, true);
      this.mapElement.updateMapTimeframe(new raain_ui__WEBPACK_IMPORTED_MODULE_0__.TimeframeContainers([new raain_ui__WEBPACK_IMPORTED_MODULE_0__.TimeframeContainer(this.defaultDate.toISOString(), [this.currentFrameContainer], 'cumulative')]));
    }
    this.changeAlpha();
  }
  createScale(factory, label) {
    this.deleteScale();
    const entries = Object.entries(raain_ui__WEBPACK_IMPORTED_MODULE_0__.ChartScaleColors);
    entries.sort((a, b) => parseFloat(a[0]) - parseFloat(b[0]));
    const sortedMap = new Map(entries);
    const sortedArray = [...sortedMap.entries()];
    const scaleColors = sortedArray.map(entry => {
      return {
        color: entry[1]
      };
    });
    const scaleLabels = sortedArray.map(entry => entry[0]);
    this.scaleElement = factory.createScale(this.scaleCanvasRef.nativeElement, new raain_ui__WEBPACK_IMPORTED_MODULE_0__.ScaleElementInput(scaleColors, scaleLabels, label));
  }
  deleteScale() {
    if (this.scaleElement) {
      this.scaleElement?.chart?.destroy();
    }
  }
  static {
    this.ɵfac = function RaainMapComponent_Factory(t) {
      return new (t || RaainMapComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdirectiveInject"](_angular_core__WEBPACK_IMPORTED_MODULE_2__.NgZone), _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdirectiveInject"](_storage_service__WEBPACK_IMPORTED_MODULE_1__.Storage));
    };
  }
  static {
    this.ɵcmp = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdefineComponent"]({
      type: RaainMapComponent,
      selectors: [["raain-map"]],
      viewQuery: function RaainMapComponent_Query(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵviewQuery"](_c0, 5);
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵviewQuery"](_c1, 5);
        }
        if (rf & 2) {
          let _t;
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵqueryRefresh"](_t = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵloadQuery"]()) && (ctx.mapDivRef = _t.first);
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵqueryRefresh"](_t = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵloadQuery"]()) && (ctx.scaleCanvasRef = _t.first);
        }
      },
      hostBindings: function RaainMapComponent_HostBindings(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵlistener"]("resize", function RaainMapComponent_resize_HostBindingHandler($event) {
            return ctx.onResize($event);
          }, false, _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵresolveWindow"]);
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
        changedDate: "changedDate"
      },
      features: [_angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵNgOnChangesFeature"]],
      decls: 37,
      vars: 21,
      consts: [[1, "ion-align-items-end"], ["id", "map-buttons", "size-xs", "3"], ["color", "medium", "fill", "outline", "shape", "round", 3, "click"], ["name", "play-back", "slot", "icon-only"], ["color", "medium", "fill", "outline", "shape", "round", 3, "hidden", "click"], ["name", "stop", "slot", "icon-only"], ["name", "play-forward", "slot", "icon-only"], ["id", "map-date", "size-md", "4", "size-xs", "5", 1, "ion-text-start"], ["interface", "popover", "placeholder", "Period", 3, "ngModel", "value", "ionDismiss", "ngModelChange"], [3, "value", 4, "ngFor", "ngForOf"], ["size-xs", "2", 1, "ion-hide-md-down"], ["color", "medium", "fill", "clear"], ["color", "medium", 3, "ngModel", "checked", "ionChange", "ngModelChange"], ["color", "medium", 3, "ngModel", "max", "min", "snaps", "step", "ticks", "ionChange", "ngModelChange"], ["size-lg", "10", "size-xs", "12"], ["id", "map-container"], ["id", "map-div"], ["primaryMap", ""], ["size-lg", "2", 1, "ion-hide-xl-down"], ["canvasScale", ""], ["size-sm", "7", 1, "ion-hide-sm-down"], [3, "innerHTML"], ["size-sm", "2", "size-xs", "12"], ["disabled", "true", "fill", "clear"], ["size-sm", "3", 1, "ion-hide-sm-down"], [3, "value"]],
      template: function RaainMapComponent_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](0, "ion-grid")(1, "ion-row", 0)(2, "ion-col", 1)(3, "ion-button", 2);
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵlistener"]("click", function RaainMapComponent_Template_ion_button_click_3_listener() {
            return ctx.previous();
          });
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](4, "ion-icon", 3);
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](5, "ion-button", 4);
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵlistener"]("click", function RaainMapComponent_Template_ion_button_click_5_listener() {
            return ctx.stop();
          });
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](6, "ion-icon", 5);
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](7, "ion-button", 2);
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵlistener"]("click", function RaainMapComponent_Template_ion_button_click_7_listener() {
            return ctx.next();
          });
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](8, "ion-icon", 6);
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]()();
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](9, "ion-col", 7)(10, "ion-select", 8);
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵlistener"]("ionDismiss", function RaainMapComponent_Template_ion_select_ionDismiss_10_listener() {
            return ctx.showTimeframe();
          })("ngModelChange", function RaainMapComponent_Template_ion_select_ngModelChange_10_listener($event) {
            return ctx.dateToShowAsString = $event;
          });
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtemplate"](11, RaainMapComponent_ion_select_option_11_Template, 3, 5, "ion-select-option", 9);
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]()();
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](12, "ion-col", 10)(13, "ion-button", 11);
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](14, " Gauges ");
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](15, "ion-toggle", 12);
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵlistener"]("ionChange", function RaainMapComponent_Template_ion_toggle_ionChange_15_listener() {
            return ctx.changeShowMarkers();
          })("ngModelChange", function RaainMapComponent_Template_ion_toggle_ngModelChange_15_listener($event) {
            return ctx.showMarkers = $event;
          });
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]()()();
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](16, "ion-col", 10)(17, "ion-range", 13);
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵlistener"]("ionChange", function RaainMapComponent_Template_ion_range_ionChange_17_listener() {
            return ctx.changeAlpha();
          })("ngModelChange", function RaainMapComponent_Template_ion_range_ngModelChange_17_listener($event) {
            return ctx.alpha = $event;
          });
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]()()();
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](18, "ion-row")(19, "ion-col", 14)(20, "div", 15);
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](21, "div", 16, 17);
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]()();
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](23, "ion-col", 18)(24, "div");
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](25, "canvas", null, 19);
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]()()();
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](27, "ion-row")(28, "ion-col", 20);
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](29, "span", 21);
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](30, "ion-col", 22)(31, "ion-button", 23);
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](32);
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]()();
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](33, "ion-col", 24)(34, "ion-button", 23)(35, "small");
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](36);
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]()()()()();
        }
        if (rf & 2) {
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](5);
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("hidden", !ctx.autoplay);
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](5);
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵpropertyInterpolate"]("value", ctx.dateToShowAsString);
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngModel", ctx.dateToShowAsString);
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](1);
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngForOf", ctx.possibleDates);
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](4);
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngModel", ctx.showMarkers)("checked", ctx.showMarkers);
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](2);
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngModel", ctx.alpha)("max", 1)("min", 0.2)("snaps", true)("step", 0.2)("ticks", true);
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](3);
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵstyleProp"]("height", ctx.currentHeight, "px");
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](4);
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵstyleProp"]("height", ctx.currentHeight, "px")("width", 100, "px");
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](5);
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("innerHTML", ctx.mcText, _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵsanitizeHtml"]);
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](3);
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtextInterpolate"](ctx.sumResult);
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](4);
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtextInterpolate"](ctx.dateToShow == null ? null : ctx.dateToShow.toISOString());
        }
      },
      dependencies: [_angular_common__WEBPACK_IMPORTED_MODULE_3__.NgForOf, _angular_forms__WEBPACK_IMPORTED_MODULE_4__.NgControlStatus, _angular_forms__WEBPACK_IMPORTED_MODULE_4__.NgModel, _ionic_angular__WEBPACK_IMPORTED_MODULE_5__.IonButton, _ionic_angular__WEBPACK_IMPORTED_MODULE_5__.IonCol, _ionic_angular__WEBPACK_IMPORTED_MODULE_5__.IonGrid, _ionic_angular__WEBPACK_IMPORTED_MODULE_5__.IonIcon, _ionic_angular__WEBPACK_IMPORTED_MODULE_5__.IonRange, _ionic_angular__WEBPACK_IMPORTED_MODULE_5__.IonRow, _ionic_angular__WEBPACK_IMPORTED_MODULE_5__.IonSelect, _ionic_angular__WEBPACK_IMPORTED_MODULE_5__.IonSelectOption, _ionic_angular__WEBPACK_IMPORTED_MODULE_5__.IonToggle, _ionic_angular__WEBPACK_IMPORTED_MODULE_5__.BooleanValueAccessor, _ionic_angular__WEBPACK_IMPORTED_MODULE_5__.SelectValueAccessor, _angular_common__WEBPACK_IMPORTED_MODULE_3__.DatePipe],
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
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! @angular/common */ 94666);
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(/*! @angular/forms */ 2508);
/* harmony import */ var _profile_service__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./profile.service */ 15770);
/* harmony import */ var _storage_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./storage.service */ 8184);
/* harmony import */ var _radar_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./radar.service */ 49766);
/* harmony import */ var _cache_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./cache.service */ 13140);
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! @ionic/angular */ 93819);
/* harmony import */ var _shared_pipe__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./shared.pipe */ 64221);
/* harmony import */ var _raain_map_raain_map_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./raain-map/raain-map.component */ 50121);
/* harmony import */ var _raain_compare_raain_compare_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./raain-compare/raain-compare.component */ 39337);
/* harmony import */ var _raain_configuration_raain_configuration_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./raain-configuration/raain-configuration.component */ 45745);
/* harmony import */ var _raain_date_focus_raain_date_focus_component__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./raain-date-focus/raain-date-focus.component */ 25320);
/* harmony import */ var _raain_date_dynamic_raain_date_dynamic_component__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./raain-date-dynamic/raain-date-dynamic.component */ 4528);
/* harmony import */ var _raain_speed_raain_speed_component__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./raain-speed/raain-speed.component */ 95143);
/* harmony import */ var _raain_compare_stack_raain_compare_stack_component__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ./raain-compare-stack/raain-compare-stack.component */ 46341);
/* harmony import */ var _raain_globe_raain_globe_component__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ./raain-globe/raain-globe.component */ 12978);
/* harmony import */ var _raain_details_raain_details_component__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ./raain-details/raain-details.component */ 25712);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! @angular/core */ 22560);


















class SharedModule {
  constructor(parentModule) {
    if (parentModule) {
      // throw new Error(
      console.warn('SharedModule is already loaded. Import it in the AppModule only');
    }
  }
  static {
    this.ɵfac = function SharedModule_Factory(t) {
      return new (t || SharedModule)(_angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵinject"](SharedModule, 12));
    };
  }
  static {
    this.ɵmod = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵdefineNgModule"]({
      type: SharedModule
    });
  }
  static {
    this.ɵinj = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵdefineInjector"]({
      providers: [_storage_service__WEBPACK_IMPORTED_MODULE_1__.Storage, _radar_service__WEBPACK_IMPORTED_MODULE_2__.RadarService, _profile_service__WEBPACK_IMPORTED_MODULE_0__.ProfileService, _cache_service__WEBPACK_IMPORTED_MODULE_3__.Cache, _ionic_angular__WEBPACK_IMPORTED_MODULE_15__.IonRange, _shared_pipe__WEBPACK_IMPORTED_MODULE_4__.TimeframeComputationProgress, _shared_pipe__WEBPACK_IMPORTED_MODULE_4__.TimeframeQualityProgress],
      imports: [_angular_common__WEBPACK_IMPORTED_MODULE_16__.CommonModule, _angular_forms__WEBPACK_IMPORTED_MODULE_17__.FormsModule, _ionic_angular__WEBPACK_IMPORTED_MODULE_15__.IonicModule, _angular_common__WEBPACK_IMPORTED_MODULE_16__.CommonModule]
    });
  }
}
(function () {
  (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵsetNgModuleScope"](SharedModule, {
    declarations: [_raain_map_raain_map_component__WEBPACK_IMPORTED_MODULE_5__.RaainMapComponent, _raain_compare_raain_compare_component__WEBPACK_IMPORTED_MODULE_6__.RaainCompareComponent, _raain_compare_stack_raain_compare_stack_component__WEBPACK_IMPORTED_MODULE_11__.RaainCompareStackComponent, _raain_date_focus_raain_date_focus_component__WEBPACK_IMPORTED_MODULE_8__.RaainDateFocusComponent, _raain_date_dynamic_raain_date_dynamic_component__WEBPACK_IMPORTED_MODULE_9__.RaainDateDynamicComponent, _raain_configuration_raain_configuration_component__WEBPACK_IMPORTED_MODULE_7__.RaainConfigurationComponent, _raain_speed_raain_speed_component__WEBPACK_IMPORTED_MODULE_10__.RaainSpeedComponent, _raain_globe_raain_globe_component__WEBPACK_IMPORTED_MODULE_12__.RaainGlobeComponent, _shared_pipe__WEBPACK_IMPORTED_MODULE_4__.AreStopped, _shared_pipe__WEBPACK_IMPORTED_MODULE_4__.AreInProgressPipe, _shared_pipe__WEBPACK_IMPORTED_MODULE_4__.AreReady, _shared_pipe__WEBPACK_IMPORTED_MODULE_4__.IsReady, _shared_pipe__WEBPACK_IMPORTED_MODULE_4__.IsNotReady, _shared_pipe__WEBPACK_IMPORTED_MODULE_4__.WaitForValidation, _shared_pipe__WEBPACK_IMPORTED_MODULE_4__.HasGoodQuality, _shared_pipe__WEBPACK_IMPORTED_MODULE_4__.HasNotGoodQuality, _shared_pipe__WEBPACK_IMPORTED_MODULE_4__.ProgressValue, _shared_pipe__WEBPACK_IMPORTED_MODULE_4__.ProgressBuffer, _shared_pipe__WEBPACK_IMPORTED_MODULE_4__.HaveNotBeenRed, _shared_pipe__WEBPACK_IMPORTED_MODULE_4__.TimeframeComputationProgress, _shared_pipe__WEBPACK_IMPORTED_MODULE_4__.TimeframeQualityProgress, _raain_details_raain_details_component__WEBPACK_IMPORTED_MODULE_13__.RaainDetailsComponent],
    imports: [_angular_common__WEBPACK_IMPORTED_MODULE_16__.CommonModule, _angular_forms__WEBPACK_IMPORTED_MODULE_17__.FormsModule, _ionic_angular__WEBPACK_IMPORTED_MODULE_15__.IonicModule, _angular_common__WEBPACK_IMPORTED_MODULE_16__.NgOptimizedImage],
    exports: [_angular_common__WEBPACK_IMPORTED_MODULE_16__.CommonModule, _angular_common__WEBPACK_IMPORTED_MODULE_16__.NgStyle, _raain_map_raain_map_component__WEBPACK_IMPORTED_MODULE_5__.RaainMapComponent, _raain_compare_raain_compare_component__WEBPACK_IMPORTED_MODULE_6__.RaainCompareComponent, _raain_compare_stack_raain_compare_stack_component__WEBPACK_IMPORTED_MODULE_11__.RaainCompareStackComponent, _raain_date_focus_raain_date_focus_component__WEBPACK_IMPORTED_MODULE_8__.RaainDateFocusComponent, _raain_date_dynamic_raain_date_dynamic_component__WEBPACK_IMPORTED_MODULE_9__.RaainDateDynamicComponent, _raain_configuration_raain_configuration_component__WEBPACK_IMPORTED_MODULE_7__.RaainConfigurationComponent, _raain_speed_raain_speed_component__WEBPACK_IMPORTED_MODULE_10__.RaainSpeedComponent, _raain_globe_raain_globe_component__WEBPACK_IMPORTED_MODULE_12__.RaainGlobeComponent, _shared_pipe__WEBPACK_IMPORTED_MODULE_4__.AreStopped, _shared_pipe__WEBPACK_IMPORTED_MODULE_4__.AreInProgressPipe, _shared_pipe__WEBPACK_IMPORTED_MODULE_4__.AreReady, _shared_pipe__WEBPACK_IMPORTED_MODULE_4__.IsReady, _shared_pipe__WEBPACK_IMPORTED_MODULE_4__.IsNotReady, _shared_pipe__WEBPACK_IMPORTED_MODULE_4__.WaitForValidation, _shared_pipe__WEBPACK_IMPORTED_MODULE_4__.HasGoodQuality, _shared_pipe__WEBPACK_IMPORTED_MODULE_4__.HasNotGoodQuality, _shared_pipe__WEBPACK_IMPORTED_MODULE_4__.ProgressValue, _shared_pipe__WEBPACK_IMPORTED_MODULE_4__.ProgressBuffer, _shared_pipe__WEBPACK_IMPORTED_MODULE_4__.HaveNotBeenRed, _shared_pipe__WEBPACK_IMPORTED_MODULE_4__.TimeframeComputationProgress, _shared_pipe__WEBPACK_IMPORTED_MODULE_4__.TimeframeQualityProgress, _raain_details_raain_details_component__WEBPACK_IMPORTED_MODULE_13__.RaainDetailsComponent]
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
    }
    // const value = (rain.progressIngest + rain.progressComputing) / 2;
    const value = rain.status / 2; // 0
    // if (rain.status === CONSTANTS._RAIN_STATUS_0_READY_TO_BUILD) {
    //   value = 0.3;
    // } else if (rain.status === CONSTANTS._RAIN_STATUS_1_BUILDING) {
    //   value = 0.6;
    // } else if (rain.status === CONSTANTS._RAIN_STATUS_1_READY_TO_COMPUTE) {
    //   value = 1;
    // }
    return value;
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
    }
    const value = rain.quality / 2;
    return value;
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
    const haveNotBeenRed = events.filter(event => !event.red);
    return haveNotBeenRed;
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
  static CompareDate(date1, date2, minutes) {
    const date1AsDate = new Date(date1.getTime());
    const date2Diff = new Date(date2.getTime());
    date2Diff.setMinutes(date2Diff.getMinutes() + minutes);
    const diff = Math.round((date1AsDate.getTime() - date2Diff.getTime()) / (60 * 1000));
    return diff === 0;
  }
  cleanAll() {
    this.gaugesInMap = [];
    this.gaugesToFilter = [];
    this.rainNodeGauges = [];
    this.gaugesInCompare = [];
    this.selectedGauges = [];
    this.selectedPixels = [];
    this.pixelsSolutions = [];
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
      _this.compareSpeedMatrix = comparePerDate.rainComputationQuality.qualitySpeedMatrixContainer.renderMergedMatrix({
        normalize: true
      });
      _this.compareTrustedIndicator = comparePerDate.rainComputationQuality.qualitySpeedMatrixContainer.getTrustedIndicators()[0];
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
      const dates = targetsOrdered.map(t => t.date);
      const qualities = dates.filter(d => !!d).map(d => _this6.getRainComputationQuality(d)).filter(rcq => !!rcq);
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
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! rxjs */ 80228);
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! rxjs */ 78947);
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! rxjs */ 51353);
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! rxjs */ 59346);
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! rxjs */ 68951);
/* harmony import */ var raain_ui__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! raain-ui */ 88666);
/* harmony import */ var raain_ui__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(raain_ui__WEBPACK_IMPORTED_MODULE_1__);



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
    this.closeRefreshTimer = new rxjs__WEBPACK_IMPORTED_MODULE_2__.Subject();
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
      (0,rxjs__WEBPACK_IMPORTED_MODULE_3__.timer)(1000, 10000) // Wait 1s, then every 10s
      .pipe((0,rxjs__WEBPACK_IMPORTED_MODULE_4__.mergeMap)(() => (0,rxjs__WEBPACK_IMPORTED_MODULE_5__.from)(asyncRefresh())), (0,rxjs__WEBPACK_IMPORTED_MODULE_6__.takeUntil)(_this2.closeRefreshTimer)).subscribe({
        error: error => asyncDone(JSON.stringify(error))
      });
    })();
  }
  setRemoveDuplicate(b) {
    this.removeDuplicate = b;
  }
  checkPeriod() {
    if (this.period.begin.getTime() === this.period.end.getTime()) {
      throw new Error('need a period');
    }
  }
  refreshCounts() {
    var _this3 = this;
    return (0,_opt_atlassian_pipelines_agent_build_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_0__["default"])(function* () {
      const counts = yield _this3.profileService.getCounts(_this3.rainNode.id, {
        range: 'day',
        periodBegin: _this3._period.begin
      });
      const progress = yield _this3.profileService.getRainProgress(_this3.rainNode.id);
      _this3.countsPeriod = {
        ...counts,
        progress
      };
      return _this3.countsPeriod;
    })();
  }
  getRainComputationQualityTarget(frameset) {
    if (frameset.rainComputationQualities.length <= 0) {
      return undefined;
    }
    return frameset.rainComputationQualities[0].id;
  }
  refreshPeriodInsidePolling() {
    var _this4 = this;
    return (0,_opt_atlassian_pipelines_agent_build_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_0__["default"])(function* () {
      try {
        const done = yield _this4.refreshCheckIfDone();
        // behind refresh
        yield _this4.refreshTimeframesFromRadars(done);
        yield _this4.refreshGlobalCompareReport(done);
        return done;
      } catch (e) {
        console.warn(e);
      }
      return false;
    })();
  }
  refreshCheckIfDone() {
    var _this5 = this;
    return (0,_opt_atlassian_pipelines_agent_build_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_0__["default"])(function* () {
      yield sleep(2000);
      return _this5.countsPeriod.progress === 0;
    })();
  }
  refreshTimeframesFromRadars(done) {
    var _this6 = this;
    return (0,_opt_atlassian_pipelines_agent_build_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_0__["default"])(function* () {
      if (!done) {
        return [];
      }
      try {
        const beginExtended = new Date(_this6.period.begin);
        const endExtended = new Date(_this6.period.end);
        beginExtended.setMinutes(beginExtended.getMinutes() - 7);
        endExtended.setMinutes(endExtended.getMinutes() + 7);
        _this6.rainNode = yield _this6.profileService.getRainTimeframe(_this6.rainNode.id, beginExtended, endExtended, _this6.dataInternal);
        _this6.timeframesFromRadarsExtended = yield _this6.radarService.getTimeline(_this6.rainNode);
        _this6.timeframesFromRadars = _this6.timeframesFromRadarsExtended.filter(frameSet => _this6.period.begin.getTime() <= frameSet.date.getTime() && frameSet.date.getTime() <= _this6.period.end.getTime()).sort((a, b) => a.date.getTime() - b.date.getTime());
        console.log('timeframesFromRadarsExtended:', _this6.timeframesFromRadarsExtended);
        _this6.timeframeDates = _this6.timeframesFromRadars.map(frameSet => frameSet.date);
        return _this6.timeframesFromRadars;
      } catch (e) {
        console.error('refreshTimeframesFromRadars', e);
      }
      return [];
    })();
  }
  refreshGlobalCompareReport(done) {
    var _this7 = this;
    return (0,_opt_atlassian_pipelines_agent_build_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_0__["default"])(function* () {
      if (!done) {
        return;
      }
      try {
        const targets = [];
        for (const frameSet of _this7.timeframesFromRadarsExtended) {
          const target = JSON.parse(JSON.stringify(frameSet));
          target.date = new Date(target.date);
          target.rainComputationQualityId = _this7.getRainComputationQualityTarget(frameSet);
          targets.push(target);
        }
        yield _this7.compareManager.refreshGlobalCompareQuality(targets, !_this7.removeDuplicate);
      } catch (e) {
        console.error('refreshGlobalCompareReport', e);
      }
    })();
  }
  refreshMapTimeframeContainers(target) {
    var _this8 = this;
    return (0,_opt_atlassian_pipelines_agent_build_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_0__["default"])(function* () {
      if (!target || !target.rainComputationId) {
        console.warn('Pb with refreshMapTimeframeContainers insights');
        return;
      }
      const rainNode = _this8.rainNode;
      const containers = [];
      const newCreatedTimeframeContainers = new raain_ui__WEBPACK_IMPORTED_MODULE_1__.TimeframeContainers(containers);
      try {
        let rainNodeCartesianMap;
        if (!target.cumulativeHours) {
          rainNodeCartesianMap = yield _this8.profileService.getRainComputationCartesianMapById(rainNode.id, target.rainComputationId);
        } else {
          rainNodeCartesianMap = yield _this8.profileService.getRainComputationCumulativeMapById(rainNode.id, target.rainComputationId, target.cumulativeHours);
        }
        if (rainNodeCartesianMap) {
          newCreatedTimeframeContainers.addFromRainComputationMap(rainNodeCartesianMap, false);
          _this8.rainComputationMapDate = rainNodeCartesianMap.date;
          _this8.rainComputationMapDoneDate = rainNodeCartesianMap.isDoneDate;
          _this8.rainComputationMapLaunchedBy = rainNodeCartesianMap.launchedBy;
          _this8.rainComputationMapTimeSpentInMs = rainNodeCartesianMap.timeSpentInMs;
        }
      } catch (e) {
        console.warn('Pb with computations for id:', target.rainComputationId, e);
      }
      return newCreatedTimeframeContainers;
    })();
  }
  refreshCompareQuality(frameSet) {
    var _this9 = this;
    return (0,_opt_atlassian_pipelines_agent_build_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_0__["default"])(function* () {
      yield _this9.compareManager.refreshCompareQuality(frameSet);
      yield _this9.compareManager.setGaugesInCompare();
    })();
  }
}

/***/ }),

/***/ 55137:
/*!************************************************!*\
  !*** ./src/core/shared/tools/ReportManager.ts ***!
  \************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "ReportManager": () => (/* binding */ ReportManager)
/* harmony export */ });
/* harmony import */ var _opt_atlassian_pipelines_agent_build_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/esm/asyncToGenerator.js */ 71670);
/* harmony import */ var raain_model__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! raain-model */ 70034);
/* harmony import */ var raain_model__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(raain_model__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var raain_ui__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! raain-ui */ 88666);
/* harmony import */ var raain_ui__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(raain_ui__WEBPACK_IMPORTED_MODULE_2__);



class ReportManager {
  constructor(radarService, profileService) {
    this.radarService = radarService;
    this.profileService = profileService;
    this.cartesianTools = new raain_model__WEBPACK_IMPORTED_MODULE_1__.CartesianTools();
    this.cartesianTools.buildLatLngEarthMap();
  }
  get rainNode() {
    return this._rainNode;
  }
  set rainNode(rainNode) {
    this._rainNode = rainNode;
  }
  setPeriod(begin, end) {
    var _this = this;
    return (0,_opt_atlassian_pipelines_agent_build_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_0__["default"])(function* () {
      const {
        values,
        timeframesFromRadars
      } = yield _this.refreshTimeframesFromRadars(begin, end);
      _this.sumFn = cartesianMapValues => {
        let sumResult = 0;
        if (cartesianMapValues?.length) {
          sumResult = cartesianMapValues.reduce((p, v) => p + v.value * 5 / 60, 0);
          sumResult = Math.round(sumResult / cartesianMapValues.length * 10) / 10; // timeframesFromRadars.length
        }

        return 'w:' + sumResult; // wt
      };

      _this.sumValues = values;
    })();
  }
  refreshTimeframesFromRadars(begin, end) {
    var _this2 = this;
    return (0,_opt_atlassian_pipelines_agent_build_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_0__["default"])(function* () {
      _this2.rainNode = yield _this2.profileService.getRainTimeframe(_this2.rainNode.id, begin, end);
      const timeframesFromRadarsExtended = yield _this2.radarService.getTimeline(_this2.rainNode);
      const timeframesFromRadars = timeframesFromRadarsExtended.filter(frameSet => begin.getTime() <= frameSet.date.getTime() && frameSet.date.getTime() <= end.getTime()).sort((a, b) => a.date.getTime() - b.date.getTime());
      let values = [];
      for (const frameSet of timeframesFromRadars) {
        values = values.concat(yield _this2.getValues(frameSet));
      }
      return {
        values,
        timeframesFromRadars
      };
    })();
  }
  getValues(target) {
    var _this3 = this;
    return (0,_opt_atlassian_pipelines_agent_build_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_0__["default"])(function* () {
      if (!target || !target.rainComputationId) {
        console.warn('Pb with target insights');
        return [];
      }
      let values = [];
      try {
        const rainNodeCartesianMap = yield _this3.profileService.getRainComputationCartesianMapById(_this3.rainNode.id, target.rainComputationId);
        if (rainNodeCartesianMap) {
          rainNodeCartesianMap.getMapData().forEach(m => {
            if (m.values) {
              m.values.forEach(v => {
                const cartesianMeasureValue = raain_model__WEBPACK_IMPORTED_MODULE_1__.CartesianMeasureValue.From(v);
                values = values.concat(raain_ui__WEBPACK_IMPORTED_MODULE_2__.CartesianMapValue.From(cartesianMeasureValue.getCartesianValues(), _this3.cartesianTools));
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
/* harmony export */   "ReportManager": () => (/* reexport safe */ _ReportManager__WEBPACK_IMPORTED_MODULE_4__.ReportManager),
/* harmony export */   "mapDateRangeToString": () => (/* reexport safe */ _DateRangeTools__WEBPACK_IMPORTED_MODULE_5__.mapDateRangeToString)
/* harmony export */ });
/* harmony import */ var _CompareManager__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./CompareManager */ 55997);
/* harmony import */ var _FrameSet__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./FrameSet */ 39222);
/* harmony import */ var _GaugeNodeFilter__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./GaugeNodeFilter */ 22404);
/* harmony import */ var _RefreshManager__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./RefreshManager */ 19028);
/* harmony import */ var _ReportManager__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./ReportManager */ 55137);
/* harmony import */ var _DateRangeTools__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./DateRangeTools */ 4881);







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
/* harmony export */   "ReportManager": () => (/* reexport safe */ _core_shared__WEBPACK_IMPORTED_MODULE_4__.ReportManager),
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
//# sourceMappingURL=main.29a670f469c3d998.js.map