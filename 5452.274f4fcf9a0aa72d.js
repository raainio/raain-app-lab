"use strict";
(self["webpackChunkapp"] = self["webpackChunkapp"] || []).push([[5452],{

/***/ 75452:
/*!****************************************!*\
  !*** ./src/core/login/login.module.ts ***!
  \****************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "LoginPageModule": () => (/* binding */ LoginPageModule)
/* harmony export */ });
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ 94666);
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ 2508);
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @ionic/angular */ 93819);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/router */ 60124);
/* harmony import */ var _login_page__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./login.page */ 97142);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ 22560);







class LoginPageModule {
  static {
    this.ɵfac = function LoginPageModule_Factory(t) {
      return new (t || LoginPageModule)();
    };
  }
  static {
    this.ɵmod = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineNgModule"]({
      type: LoginPageModule
    });
  }
  static {
    this.ɵinj = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineInjector"]({
      imports: [_angular_common__WEBPACK_IMPORTED_MODULE_2__.CommonModule, _angular_forms__WEBPACK_IMPORTED_MODULE_3__.FormsModule, _ionic_angular__WEBPACK_IMPORTED_MODULE_4__.IonicModule, _angular_router__WEBPACK_IMPORTED_MODULE_5__.RouterModule.forChild([{
        path: '',
        component: _login_page__WEBPACK_IMPORTED_MODULE_0__.LoginPage
      }])]
    });
  }
}
(function () {
  (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵsetNgModuleScope"](LoginPageModule, {
    declarations: [_login_page__WEBPACK_IMPORTED_MODULE_0__.LoginPage],
    imports: [_angular_common__WEBPACK_IMPORTED_MODULE_2__.CommonModule, _angular_forms__WEBPACK_IMPORTED_MODULE_3__.FormsModule, _ionic_angular__WEBPACK_IMPORTED_MODULE_4__.IonicModule, _angular_router__WEBPACK_IMPORTED_MODULE_5__.RouterModule]
  });
})();

/***/ }),

/***/ 97142:
/*!**************************************!*\
  !*** ./src/core/login/login.page.ts ***!
  \**************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "LoginPage": () => (/* binding */ LoginPage)
/* harmony export */ });
/* harmony import */ var _opt_atlassian_pipelines_agent_build_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/esm/asyncToGenerator.js */ 71670);
/* harmony import */ var _environments_environment__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../environments/environment */ 92340);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ 22560);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/router */ 60124);
/* harmony import */ var _shared__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../shared */ 8987);
/* harmony import */ var fidj_angular__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! fidj-angular */ 39807);
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/forms */ 2508);
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @ionic/angular */ 93819);








class LoginPage {
  constructor(router, profile, fidjService) {
    this.router = router;
    this.profile = profile;
    this.fidjService = fidjService;
    this.appVersion = _environments_environment__WEBPACK_IMPORTED_MODULE_1__.environment.version;
  }
  ngOnInit() {
    var _this = this;
    return (0,_opt_atlassian_pipelines_agent_build_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_0__["default"])(function* () {
      if (_this.fidjService.isLoggedIn()) {
        return _this.router.navigateByUrl('/home');
      } else {
        console.warn('Not logged in');
      }
      _this.userLoginEmail = _this.profile.getEmail();
      yield _this.profile.logout(_environments_environment__WEBPACK_IMPORTED_MODULE_1__.environment.fidjKey, _environments_environment__WEBPACK_IMPORTED_MODULE_1__.environment.production);
    })();
  }
  login(loginForm) {
    var _this2 = this;
    return (0,_opt_atlassian_pipelines_agent_build_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_0__["default"])(function* () {
      if (!_this2.userLoginEmail || !loginForm.form.valid || !_this2.userLoginPassword) {
        return;
      }
      _this2.profile.setEmail(_this2.userLoginEmail);
      try {
        yield _this2.fidjService.login(_this2.userLoginEmail, _this2.userLoginPassword);
        yield _this2.router.navigate(['/home']);
      } catch (err) {
        alert(JSON.stringify(err));
      }
    })();
  }
  loginInDemoMode() {
    var _this3 = this;
    return (0,_opt_atlassian_pipelines_agent_build_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_0__["default"])(function* () {
      _this3.profile.setEmail('demo user');
      _this3.profile.isDemoMode = true;
      try {
        yield _this3.fidjService.loginInDemoMode();
        yield _this3.router.navigate(['/home']);
      } catch (err) {
        alert(JSON.stringify(err));
      }
    })();
  }
  static {
    this.ɵfac = function LoginPage_Factory(t) {
      return new (t || LoginPage)(_angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_4__.Router), _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵdirectiveInject"](_shared__WEBPACK_IMPORTED_MODULE_2__.ProfileService), _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵdirectiveInject"](fidj_angular__WEBPACK_IMPORTED_MODULE_5__.FidjService));
    };
  }
  static {
    this.ɵcmp = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵdefineComponent"]({
      type: LoginPage,
      selectors: [["app-login"]],
      decls: 23,
      vars: 3,
      consts: [["slot", "start"], ["src", "assets/icon/favicon.ico", 2, "height", "30px", "padding-left", "20px"], [1, "welcome-card"], ["src", "/assets/login.png"], ["loginForm", "ngForm"], ["name", "userLoginEmail", "pattern", ".{1,}@[_a-z0-9A-Z]+(\\.[a-z0-9A-Z]+)+", "placeholder", "valid.email@required.com", "required", "", "type", "email", 3, "ngModel", "ngModelChange"], ["name", "userLoginPassword", "placeholder", "password", "required", "", "type", "password", 3, "ngModel", "keyup.enter", "ngModelChange"], [2, "padding-top", "20px"], ["expand", "block", "size", "large", 3, "disabled", "click"]],
      template: function LoginPage_Template(rf, ctx) {
        if (rf & 1) {
          const _r1 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵgetCurrentView"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](0, "ion-header")(1, "ion-toolbar")(2, "ion-buttons", 0);
          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelement"](3, "ion-menu-button")(4, "ion-img", 1);
          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](5, "ion-title");
          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](6, " Login ");
          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]()()();
          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](7, "ion-content")(8, "ion-card", 2);
          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelement"](9, "ion-img", 3);
          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](10, "ion-card-header")(11, "ion-card-title");
          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](12, "RadarToRain");
          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]()();
          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](13, "ion-card-content")(14, "form", null, 4)(16, "ion-item")(17, "ion-input", 5);
          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵlistener"]("ngModelChange", function LoginPage_Template_ion_input_ngModelChange_17_listener($event) {
            return ctx.userLoginEmail = $event;
          });
          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]()();
          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](18, "ion-item")(19, "ion-input", 6);
          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵlistener"]("keyup.enter", function LoginPage_Template_ion_input_keyup_enter_19_listener() {
            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵrestoreView"](_r1);
            const _r0 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵreference"](15);
            return _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵresetView"](ctx.login(_r0));
          })("ngModelChange", function LoginPage_Template_ion_input_ngModelChange_19_listener($event) {
            return ctx.userLoginPassword = $event;
          });
          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]()();
          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](20, "div", 7)(21, "ion-button", 8);
          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵlistener"]("click", function LoginPage_Template_ion_button_click_21_listener() {
            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵrestoreView"](_r1);
            const _r0 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵreference"](15);
            return _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵresetView"](ctx.login(_r0));
          });
          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](22, "Login ");
          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]()()()()()();
        }
        if (rf & 2) {
          const _r0 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵreference"](15);
          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](17);
          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("ngModel", ctx.userLoginEmail);
          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](2);
          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("ngModel", ctx.userLoginPassword);
          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](2);
          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("disabled", !ctx.userLoginEmail || !_r0.form.valid || !ctx.userLoginPassword);
        }
      },
      dependencies: [_angular_forms__WEBPACK_IMPORTED_MODULE_6__["ɵNgNoValidate"], _angular_forms__WEBPACK_IMPORTED_MODULE_6__.NgControlStatus, _angular_forms__WEBPACK_IMPORTED_MODULE_6__.NgControlStatusGroup, _angular_forms__WEBPACK_IMPORTED_MODULE_6__.RequiredValidator, _angular_forms__WEBPACK_IMPORTED_MODULE_6__.PatternValidator, _angular_forms__WEBPACK_IMPORTED_MODULE_6__.NgModel, _angular_forms__WEBPACK_IMPORTED_MODULE_6__.NgForm, _ionic_angular__WEBPACK_IMPORTED_MODULE_7__.IonButton, _ionic_angular__WEBPACK_IMPORTED_MODULE_7__.IonButtons, _ionic_angular__WEBPACK_IMPORTED_MODULE_7__.IonCard, _ionic_angular__WEBPACK_IMPORTED_MODULE_7__.IonCardContent, _ionic_angular__WEBPACK_IMPORTED_MODULE_7__.IonCardHeader, _ionic_angular__WEBPACK_IMPORTED_MODULE_7__.IonCardTitle, _ionic_angular__WEBPACK_IMPORTED_MODULE_7__.IonContent, _ionic_angular__WEBPACK_IMPORTED_MODULE_7__.IonHeader, _ionic_angular__WEBPACK_IMPORTED_MODULE_7__.IonImg, _ionic_angular__WEBPACK_IMPORTED_MODULE_7__.IonInput, _ionic_angular__WEBPACK_IMPORTED_MODULE_7__.IonItem, _ionic_angular__WEBPACK_IMPORTED_MODULE_7__.IonMenuButton, _ionic_angular__WEBPACK_IMPORTED_MODULE_7__.IonToolbar, _ionic_angular__WEBPACK_IMPORTED_MODULE_7__.IonTitle, _ionic_angular__WEBPACK_IMPORTED_MODULE_7__.TextValueAccessor],
      styles: [".welcome-card[_ngcontent-%COMP%]   ion-img[_ngcontent-%COMP%] {\n  height: 100px;\n}\n/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8uL3NyYy9jb3JlL2xvZ2luL2xvZ2luLnBhZ2Uuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUdFLGFBQUE7QUFERjs7QUFnQkU7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztDQUFBIiwic291cmNlc0NvbnRlbnQiOlsiLndlbGNvbWUtY2FyZCBpb24taW1nIHtcbiAgLy8gbWF4LWhlaWdodDogNTB2aDtcbiAgLy8gb3ZlcmZsb3c6IGhpZGRlbjtcbiAgaGVpZ2h0OiAxMDBweDtcbn1cblxuXG4vLyAqIHtcbi8vICBiYWNrZ3JvdW5kLWNvbG9yIDogdHJhbnNwYXJlbnQhaW1wb3J0YW50O1xuLy99XG5cbi8vYXBwLWxvZ2luIHtcblxuICBpb24tY29udGVudCB7XG5cbiAgICAvLyAtLWJhY2tncm91bmQ6IHVybCgnL2Fzc2V0cy9sb2dpbi5zdmcnKSBuby1yZXBlYXQgY2VudGVyO1xuICB9XG5cbiAgLypcbiAgZm9ybSA+IC5pdGVtIHtcbiAgICBjb2xvcjogd2hpdGUgIWltcG9ydGFudDtcbiAgICAvLyBiYWNrZ3JvdW5kIDogdHJhbnNwYXJlbnQ7XG4gICAgYmFja2dyb3VuZC1jb2xvcjogcmdiYSgyNTUsIDI1NSwgMjU1LCAwLjIpO1xuXG4gICAgOjotd2Via2l0LWlucHV0LXBsYWNlaG9sZGVyIHtcbiAgICAgIGNvbG9yOiAjNDE0MTQxO1xuICAgIH1cbiAgICA6Oi1tb3otcGxhY2Vob2xkZXIge1xuICAgICAgY29sb3I6ICM0MTQxNDE7XG4gICAgfVxuICAgIDotbXMtaW5wdXQtcGxhY2Vob2xkZXIge1xuICAgICAgY29sb3I6ICM0MTQxNDE7XG4gICAgfVxuICAgIDotbW96LXBsYWNlaG9sZGVyIHtcbiAgICAgIGNvbG9yOiAjNDE0MTQxO1xuICAgIH1cblxuICB9XG5cbiAgLmlvbi1pbnB1dCB7XG4gICAgLy8gYmFja2dyb3VuZC1jb2xvciA6IHRyYW5zcGFyZW50O1xuICAgIC8vIGJhY2tncm91bmQtY29sb3I6IHJnYmEoMjU1LCAyNTUsIDI1NSwgMC4yKTtcbiAgfVxuXG4gIC5pdGVtLWlubmVyIHtcbiAgICAvL2JhY2tncm91bmQtY29sb3I6IHJnYmEoMjU1LCAyNTUsIDI1NSwgMC4yKTtcbiAgfVxuXG4gIGlvbi1jYXJkLWhlYWRlciB7XG4gICAgd2hpdGUtc3BhY2U6IG5vcm1hbDtcbiAgfVxuKi9cblxuLy99XG4iXSwic291cmNlUm9vdCI6IiJ9 */"]
    });
  }
}

/***/ })

}]);
//# sourceMappingURL=5452.274f4fcf9a0aa72d.js.map