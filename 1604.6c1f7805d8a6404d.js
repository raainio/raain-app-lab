"use strict";
(self["webpackChunkapp"] = self["webpackChunkapp"] || []).push([[1604],{

/***/ 41604:
/*!******************************************!*\
  !*** ./src/core/logout/logout.module.ts ***!
  \******************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "LogoutPageModule": () => (/* binding */ LogoutPageModule)
/* harmony export */ });
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ 94666);
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ 2508);
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @ionic/angular */ 93819);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/router */ 60124);
/* harmony import */ var _logout_page__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./logout.page */ 83432);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ 22560);







class LogoutPageModule {
  constructor() {}
  static {
    this.ɵfac = function LogoutPageModule_Factory(t) {
      return new (t || LogoutPageModule)();
    };
  }
  static {
    this.ɵmod = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineNgModule"]({
      type: LogoutPageModule
    });
  }
  static {
    this.ɵinj = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineInjector"]({
      imports: [_angular_common__WEBPACK_IMPORTED_MODULE_2__.CommonModule, _angular_forms__WEBPACK_IMPORTED_MODULE_3__.FormsModule, _ionic_angular__WEBPACK_IMPORTED_MODULE_4__.IonicModule, _angular_router__WEBPACK_IMPORTED_MODULE_5__.RouterModule.forChild([{
        path: '',
        component: _logout_page__WEBPACK_IMPORTED_MODULE_0__.LogoutPage
      }])]
    });
  }
}
(function () {
  (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵsetNgModuleScope"](LogoutPageModule, {
    declarations: [_logout_page__WEBPACK_IMPORTED_MODULE_0__.LogoutPage],
    imports: [_angular_common__WEBPACK_IMPORTED_MODULE_2__.CommonModule, _angular_forms__WEBPACK_IMPORTED_MODULE_3__.FormsModule, _ionic_angular__WEBPACK_IMPORTED_MODULE_4__.IonicModule, _angular_router__WEBPACK_IMPORTED_MODULE_5__.RouterModule]
  });
})();

/***/ }),

/***/ 83432:
/*!****************************************!*\
  !*** ./src/core/logout/logout.page.ts ***!
  \****************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "LogoutPage": () => (/* binding */ LogoutPage)
/* harmony export */ });
/* harmony import */ var _opt_atlassian_pipelines_agent_build_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/esm/asyncToGenerator.js */ 71670);
/* harmony import */ var _environments_environment__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../environments/environment */ 92340);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ 60124);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/core */ 22560);
/* harmony import */ var _shared__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../shared */ 8987);






class LogoutPage {
  constructor(router, profile) {
    var _this = this;
    this.router = router;
    this.profile = profile;
    this.appVersion = _environments_environment__WEBPACK_IMPORTED_MODULE_1__.environment.version;
    this.router.events.subscribe( /*#__PURE__*/function () {
      var _ref = (0,_opt_atlassian_pipelines_agent_build_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_0__["default"])(function* (val) {
        if (val instanceof _angular_router__WEBPACK_IMPORTED_MODULE_3__.NavigationEnd && _this.router.url.indexOf('/logout') > -1) {
          yield _this.profile.logout(_environments_environment__WEBPACK_IMPORTED_MODULE_1__.environment.fidjKey, _environments_environment__WEBPACK_IMPORTED_MODULE_1__.environment.production);
          yield _this.profile.gotoLogin();
        }
      });
      return function (_x) {
        return _ref.apply(this, arguments);
      };
    }());
  }
  ngAfterViewInit() {
    return (0,_opt_atlassian_pipelines_agent_build_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_0__["default"])(function* () {})();
  }
  static {
    this.ɵfac = function LogoutPage_Factory(t) {
      return new (t || LogoutPage)(_angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_3__.Router), _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵdirectiveInject"](_shared__WEBPACK_IMPORTED_MODULE_2__.ProfileService));
    };
  }
  static {
    this.ɵcmp = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵdefineComponent"]({
      type: LogoutPage,
      selectors: [["app-logout"]],
      decls: 0,
      vars: 0,
      template: function LogoutPage_Template(rf, ctx) {},
      encapsulation: 2
    });
  }
}

/***/ })

}]);
//# sourceMappingURL=1604.6c1f7805d8a6404d.js.map