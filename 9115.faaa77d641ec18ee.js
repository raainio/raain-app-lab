"use strict";
(self["webpackChunkapp"] = self["webpackChunkapp"] || []).push([[9115],{

/***/ 91118:
/*!****************************************************!*\
  !*** ./src/core/rains/modals/new-instance.page.ts ***!
  \****************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "NewInstancePage": () => (/* binding */ NewInstancePage)
/* harmony export */ });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ 22560);
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @ionic/angular */ 93819);
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/forms */ 2508);



class NewInstancePage {
  constructor(modalController, navParams) {
    this.modalController = modalController;
    this.navParams = navParams;
    // componentProps can also be accessed at construction time using NavParams}
  }

  dismiss() {
    this.modalController.dismiss();
  }
  add(RadarToRainUrl, RadarToRainUser, RadarToRainPwd) {
    this.modalController.dismiss();
  }
  static {
    this.ɵfac = function NewInstancePage_Factory(t) {
      return new (t || NewInstancePage)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_ionic_angular__WEBPACK_IMPORTED_MODULE_1__.ModalController), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_ionic_angular__WEBPACK_IMPORTED_MODULE_1__.NavParams));
    };
  }
  static {
    this.ɵcmp = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({
      type: NewInstancePage,
      selectors: [["modal-page"]],
      inputs: {
        value: "value"
      },
      decls: 19,
      vars: 4,
      consts: [["padding", ""], ["heroForm", "ngForm"], ["type", "url", "placeholder", "https://RadarToRain.you/RadarToRain", "required", "", "name", "RadarToRainUrl", 3, "ngModel", "ngModelChange"], ["type", "string", "placeholder", "User", "required", "", "name", "RadarToRainUser", 3, "ngModel", "ngModelChange"], ["type", "password", "placeholder", "Password", "required", "", "name", "RadarToRainPwd", 3, "ngModel", "ngModelChange"], ["expand", "block", 3, "disabled", "click"], ["expand", "block", 3, "click"]],
      template: function NewInstancePage_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "ion-content", 0)(1, "ion-card")(2, "ion-card-header")(3, "ion-card-title");
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](4, "Connect your RadarToRain instance");
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]()();
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "ion-card-content")(6, "form", null, 1)(8, "ion-item")(9, "ion-input", 2);
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("ngModelChange", function NewInstancePage_Template_ion_input_ngModelChange_9_listener($event) {
            return ctx.RadarToRainUrl = $event;
          });
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]()();
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](10, "ion-item")(11, "ion-input", 3);
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("ngModelChange", function NewInstancePage_Template_ion_input_ngModelChange_11_listener($event) {
            return ctx.RadarToRainUser = $event;
          });
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]()();
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](12, "ion-item")(13, "ion-input", 4);
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("ngModelChange", function NewInstancePage_Template_ion_input_ngModelChange_13_listener($event) {
            return ctx.RadarToRainPwd = $event;
          });
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]()();
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](14, "div")(15, "ion-button", 5);
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function NewInstancePage_Template_ion_button_click_15_listener() {
            return ctx.add(ctx.RadarToRainUrl, ctx.RadarToRainUser, ctx.RadarToRainPwd);
          });
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](16, "Login ");
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](17, "ion-button", 6);
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function NewInstancePage_Template_ion_button_click_17_listener() {
            return ctx.dismiss();
          });
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](18, "dismiss ");
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]()()()()()();
        }
        if (rf & 2) {
          const _r0 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵreference"](7);
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](9);
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngModel", ctx.RadarToRainUrl);
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngModel", ctx.RadarToRainUser);
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngModel", ctx.RadarToRainPwd);
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("disabled", !ctx.RadarToRainUrl || !_r0.form.valid);
        }
      },
      dependencies: [_angular_forms__WEBPACK_IMPORTED_MODULE_2__["ɵNgNoValidate"], _angular_forms__WEBPACK_IMPORTED_MODULE_2__.NgControlStatus, _angular_forms__WEBPACK_IMPORTED_MODULE_2__.NgControlStatusGroup, _angular_forms__WEBPACK_IMPORTED_MODULE_2__.RequiredValidator, _angular_forms__WEBPACK_IMPORTED_MODULE_2__.NgModel, _angular_forms__WEBPACK_IMPORTED_MODULE_2__.NgForm, _ionic_angular__WEBPACK_IMPORTED_MODULE_1__.IonButton, _ionic_angular__WEBPACK_IMPORTED_MODULE_1__.IonCard, _ionic_angular__WEBPACK_IMPORTED_MODULE_1__.IonCardContent, _ionic_angular__WEBPACK_IMPORTED_MODULE_1__.IonCardHeader, _ionic_angular__WEBPACK_IMPORTED_MODULE_1__.IonCardTitle, _ionic_angular__WEBPACK_IMPORTED_MODULE_1__.IonContent, _ionic_angular__WEBPACK_IMPORTED_MODULE_1__.IonInput, _ionic_angular__WEBPACK_IMPORTED_MODULE_1__.IonItem, _ionic_angular__WEBPACK_IMPORTED_MODULE_1__.TextValueAccessor],
      encapsulation: 2
    });
  }
}

/***/ }),

/***/ 29489:
/*!********************************************!*\
  !*** ./src/core/rains/rain-detail.page.ts ***!
  \********************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "RainDetailPage": () => (/* binding */ RainDetailPage)
/* harmony export */ });
/* harmony import */ var _opt_atlassian_pipelines_agent_build_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/esm/asyncToGenerator.js */ 71670);
/* harmony import */ var _shared__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../shared */ 8987);
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! rxjs/operators */ 32673);
/* harmony import */ var raain_model__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! raain-model */ 70034);
/* harmony import */ var raain_model__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(raain_model__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @ionic/angular */ 93819);
/* harmony import */ var _environments_environment__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../environments/environment */ 92340);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/core */ 22560);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @angular/router */ 60124);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! @angular/common */ 94666);
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! @angular/forms */ 2508);
/* harmony import */ var _shared_profile_icon_directive__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../shared/profile-icon.directive */ 36035);
/* harmony import */ var _shared_raain_details_raain_details_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../shared/raain-details/raain-details.component */ 25712);














function RainDetailPage_ion_buttons_9_Template(rf, ctx) {
  if (rf & 1) {
    const _r4 = _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](0, "ion-buttons", 7)(1, "ion-label", 13);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](2, "Admin Data");
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](3, "ion-toggle", 14);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵlistener"]("ionChange", function RainDetailPage_ion_buttons_9_Template_ion_toggle_ionChange_3_listener($event) {
      _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵrestoreView"](_r4);
      const ctx_r3 = _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵnextContext"]();
      return _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵresetView"](ctx_r3.toggleAdminChanged($event));
    })("ngModelChange", function RainDetailPage_ion_buttons_9_Template_ion_toggle_ngModelChange_3_listener($event) {
      _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵrestoreView"](_r4);
      const ctx_r5 = _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵnextContext"]();
      return _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵresetView"](ctx_r5.toggleAdmin = $event);
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]()();
  }
  if (rf & 2) {
    const ctx_r0 = _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵproperty"]("ngModel", ctx_r0.toggleAdmin)("checked", ctx_r0.toggleAdmin);
  }
}
function RainDetailPage_raain_details_12_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelement"](0, "raain-details", 15);
  }
  if (rf & 2) {
    const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵproperty"]("compareManager", ctx_r1.compareManager)("profileService", ctx_r1.profileService)("radarService", ctx_r1.radarService)("rainNode", ctx_r1.rainNode)("refreshManager", ctx_r1.refreshManager)("toggleAdmin", ctx_r1.toggleAdmin)("toggleCumulative", ctx_r1.toggleCumulative);
  }
}
function RainDetailPage_ng_template_17_Template(rf, ctx) {
  if (rf & 1) {
    const _r7 = _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](0, "ion-header", 0)(1, "ion-toolbar")(2, "ion-title");
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](3, "Need Help?");
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](4, "ion-buttons", 7)(5, "ion-button", 16);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵlistener"]("click", function RainDetailPage_ng_template_17_Template_ion_button_click_5_listener() {
      _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵrestoreView"](_r7);
      const ctx_r6 = _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵnextContext"]();
      return _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵresetView"](ctx_r6.modal.dismiss());
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelement"](6, "ion-icon", 17);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]()()()();
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](7, "ion-content", 5)(8, "div", 18)(9, "h2");
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](10, "Have questions?");
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](11, "p");
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](12, "We're here to help! Feel free to contact our support team at ");
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](13, "a", 19);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](14, "support@radartorain.com");
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](15, "h3");
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](16, "For faster assistance, please include:");
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](17, "ol")(18, "li");
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](19, "Full screenshot or screen recording if possible");
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](20, "li");
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](21, "Detailed description of your question or issue");
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](22, "p", 20);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](23, "Our team will respond as quickly as possible to help you.");
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](24, "ion-button", 21);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵlistener"]("click", function RainDetailPage_ng_template_17_Template_ion_button_click_24_listener() {
      _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵrestoreView"](_r7);
      const ctx_r8 = _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵnextContext"]();
      return _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵresetView"](ctx_r8.modal.dismiss());
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](25, " Got it ");
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]()()();
  }
}
// TODO let TEST_DETECTION = 0;
class RainDetailPage {
  constructor(activatedRoute, profileService, radarService, storage) {
    this.activatedRoute = activatedRoute;
    this.profileService = profileService;
    this.radarService = radarService;
    this.storage = storage;
    this.appVersion = _environments_environment__WEBPACK_IMPORTED_MODULE_3__.environment.version;
  }
  ngAfterViewInit() {
    this.profileService.refreshProfile().then(ignored => {});
    this.subscribeToRainUpdates();
  }
  onChangeDetectionTest(rainNode) {
    // TODO console.log(TEST_DETECTION++, 'onChangeDetectionTest');
    return '';
  }
  toggleAdminChanged(_$event) {
    var _this = this;
    return (0,_opt_atlassian_pipelines_agent_build_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_0__["default"])(function* () {
      _this.storage.set('raain-toggleAdmin', _this.toggleAdmin);
      yield _this.profileService.refreshProfile();
      yield _this.initRain(_this.rainNode);
    })();
  }
  refresh(event) {
    var _this2 = this;
    return (0,_opt_atlassian_pipelines_agent_build_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_0__["default"])(function* () {
      try {
        yield _this2.profileService.refreshProfile();
        yield _this2.initRain(_this2.rainNode);
      } catch (e) {
        /* empty */
      }
      if (event) {
        event.target.complete();
      }
      if (!_this2.profileService.isLoggedIn()) {
        return _this2.profileService.gotoLout();
      }
    })();
  }
  toggleCumulativeChanged($event) {
    this.storage.set('raain-toggleCumulative', this.toggleCumulative);
  }
  subscribeToRainUpdates() {
    // console.log('subscribeToRainUpdates', this.rain$);
    if (this.rain$) {
      return;
    }
    this.rain$ = this.activatedRoute.paramMap.pipe((0,rxjs_operators__WEBPACK_IMPORTED_MODULE_7__.switchMap)(params => this.profileService.getRain(params.get('id'))));
    this.rain$.subscribe(this.initRain.bind(this));
  }
  initRain(rainNode) {
    var _this3 = this;
    return (0,_opt_atlassian_pipelines_agent_build_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_0__["default"])(function* () {
      _this3.toggleDetails = false;
      _this3.toggleAdmin = _this3.storage.get('raain-toggleAdmin');
      _this3.toggleCumulative = _this3.storage.get('raain-toggleCumulative');
      _this3.isAdmin = _this3.profileService.isAdmin();
      if (!rainNode) {
        return;
      }
      _this3.rainNode = rainNode;
      _this3.compareManager = new _shared__WEBPACK_IMPORTED_MODULE_1__.CompareManager(_this3.profileService);
      _this3.refreshManager = new _shared__WEBPACK_IMPORTED_MODULE_1__.RefreshManager(_this3.radarService, _this3.profileService, _this3.compareManager);
      _this3.compareManager.rainNode = _this3.rainNode;
      _this3.refreshManager.rainNode = _this3.rainNode;
      // For Simple Radar-Rain Zone :
      const radarLinks = rainNode.getLinks(raain_model__WEBPACK_IMPORTED_MODULE_2__.RadarNode.TYPE);
      _this3.isSimpleZone = radarLinks.length === 1;
      _this3.toggleDetails = true;
    })();
  }
  static {
    this.ɵfac = function RainDetailPage_Factory(t) {
      return new (t || RainDetailPage)(_angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_8__.ActivatedRoute), _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵdirectiveInject"](_shared__WEBPACK_IMPORTED_MODULE_1__.ProfileService), _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵdirectiveInject"](_shared__WEBPACK_IMPORTED_MODULE_1__.RadarService), _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵdirectiveInject"](_shared__WEBPACK_IMPORTED_MODULE_1__.Storage));
    };
  }
  static {
    this.ɵcmp = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵdefineComponent"]({
      type: RainDetailPage,
      selectors: [["app-rain-detail"]],
      viewQuery: function RainDetailPage_Query(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵviewQuery"](_ionic_angular__WEBPACK_IMPORTED_MODULE_9__.IonModal, 5);
        }
        if (rf & 2) {
          let _t;
          _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵqueryRefresh"](_t = _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵloadQuery"]()) && (ctx.modal = _t.first);
        }
      },
      decls: 21,
      vars: 5,
      consts: [[1, "ion-no-border"], ["slot", "start"], ["src", "assets/icon/favicon.ico", 1, "app-logo"], [1, "ion-color-raain"], ["slot", "end", 4, "ngIf"], [1, "ion-padding"], [3, "compareManager", "profileService", "radarService", "rainNode", "refreshManager", "toggleAdmin", "toggleCumulative", 4, "ngIf"], ["slot", "end"], ["slot", "end", 3, "ngModel", "checked", "ionChange", "ngModelChange"], ["trigger", "open-modal", 1, "support-modal"], ["horizontal", "end", "slot", "fixed", "vertical", "bottom"], ["color", "raain", "id", "open-modal"], ["name", "help-outline"], ["color", "warning", 1, "ion-padding-end"], ["color", "warning", 3, "ngModel", "checked", "ionChange", "ngModelChange"], [3, "compareManager", "profileService", "radarService", "rainNode", "refreshManager", "toggleAdmin", "toggleCumulative"], [3, "click"], ["name", "close-outline", "slot", "icon-only"], [1, "support-content"], ["href", "mailto:support@radartorain.com", 1, "ion-color-raain"], [1, "text-muted"], ["expand", "block", 1, "ion-margin-top", 3, "click"]],
      template: function RainDetailPage_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](0, "ion-header", 0)(1, "ion-toolbar")(2, "ion-buttons", 1);
          _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelement"](3, "ion-menu-button")(4, "ion-img", 2);
          _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](5, "ion-title")(6, "span", 3);
          _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](7, "Radar To Rain");
          _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](8);
          _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtemplate"](9, RainDetailPage_ion_buttons_9_Template, 4, 2, "ion-buttons", 4);
          _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]()();
          _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](10, "ion-content")(11, "div", 5);
          _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtemplate"](12, RainDetailPage_raain_details_12_Template, 1, 7, "raain-details", 6);
          _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](13, "ion-label", 7);
          _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](14, "Cumulative");
          _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](15, "ion-toggle", 8);
          _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵlistener"]("ionChange", function RainDetailPage_Template_ion_toggle_ionChange_15_listener($event) {
            return ctx.toggleCumulativeChanged($event);
          })("ngModelChange", function RainDetailPage_Template_ion_toggle_ngModelChange_15_listener($event) {
            return ctx.toggleCumulative = $event;
          });
          _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]()();
          _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](16, "ion-modal", 9);
          _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtemplate"](17, RainDetailPage_ng_template_17_Template, 26, 0, "ng-template");
          _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](18, "ion-fab", 10)(19, "ion-fab-button", 11);
          _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelement"](20, "ion-icon", 12);
          _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]()()();
        }
        if (rf & 2) {
          _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"](8);
          _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtextInterpolate1"](" ", ctx.rainNode == null ? null : ctx.rainNode.name, " ");
          _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"](1);
          _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵproperty"]("ngIf", ctx.isSimpleZone);
          _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"](3);
          _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵproperty"]("ngIf", ctx.toggleDetails);
          _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"](3);
          _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵproperty"]("ngModel", ctx.toggleCumulative)("checked", ctx.toggleCumulative);
        }
      },
      dependencies: [_angular_common__WEBPACK_IMPORTED_MODULE_10__.NgIf, _angular_forms__WEBPACK_IMPORTED_MODULE_11__.NgControlStatus, _angular_forms__WEBPACK_IMPORTED_MODULE_11__.NgModel, _ionic_angular__WEBPACK_IMPORTED_MODULE_9__.IonButton, _ionic_angular__WEBPACK_IMPORTED_MODULE_9__.IonButtons, _ionic_angular__WEBPACK_IMPORTED_MODULE_9__.IonContent, _ionic_angular__WEBPACK_IMPORTED_MODULE_9__.IonFab, _ionic_angular__WEBPACK_IMPORTED_MODULE_9__.IonFabButton, _ionic_angular__WEBPACK_IMPORTED_MODULE_9__.IonHeader, _ionic_angular__WEBPACK_IMPORTED_MODULE_9__.IonIcon, _ionic_angular__WEBPACK_IMPORTED_MODULE_9__.IonImg, _ionic_angular__WEBPACK_IMPORTED_MODULE_9__.IonLabel, _ionic_angular__WEBPACK_IMPORTED_MODULE_9__.IonMenuButton, _ionic_angular__WEBPACK_IMPORTED_MODULE_9__.IonTitle, _ionic_angular__WEBPACK_IMPORTED_MODULE_9__.IonToggle, _ionic_angular__WEBPACK_IMPORTED_MODULE_9__.IonToolbar, _ionic_angular__WEBPACK_IMPORTED_MODULE_9__.IonModal, _ionic_angular__WEBPACK_IMPORTED_MODULE_9__.BooleanValueAccessor, _shared_profile_icon_directive__WEBPACK_IMPORTED_MODULE_4__.ProfileIconDirective, _shared_raain_details_raain_details_component__WEBPACK_IMPORTED_MODULE_5__.RaainDetailsComponent],
      styles: [".app-logo[_ngcontent-%COMP%] {\n  height: 30px;\n  margin-left: 16px;\n  transition: var(--app-transition);\n}\n.app-logo[_ngcontent-%COMP%]:hover {\n  transform: scale(1.05);\n}\n\nion-card[_ngcontent-%COMP%] {\n  width: 100%;\n  margin: 16px 0;\n  border-radius: var(--ion-border-radius);\n  overflow: hidden;\n}\n\nion-card-subtitle[_ngcontent-%COMP%] {\n  padding-left: 20px;\n  color: var(--ion-color-medium);\n  font-weight: 500;\n}\n\n#periodDuration[_ngcontent-%COMP%] {\n  border: 1px solid var(--ion-color-medium);\n  border-radius: var(--ion-border-radius);\n  padding: 8px 16px;\n  background-color: var(--ion-color-light);\n}\n\n.support-modal[_ngcontent-%COMP%] {\n  --height: auto;\n  --width: 90%;\n  --max-width: 500px;\n  --border-radius: var(--ion-border-radius);\n  --box-shadow: var(--ion-box-shadow);\n}\n\n.support-content[_ngcontent-%COMP%] {\n  padding: 16px;\n}\n.support-content[_ngcontent-%COMP%]   h2[_ngcontent-%COMP%] {\n  color: var(--ion-color-dark);\n  font-weight: 600;\n  margin-bottom: 16px;\n  font-size: 1.5rem;\n}\n.support-content[_ngcontent-%COMP%]   h3[_ngcontent-%COMP%] {\n  color: var(--ion-color-dark);\n  font-weight: 500;\n  margin: 24px 0 12px;\n  font-size: 1.2rem;\n}\n.support-content[_ngcontent-%COMP%]   p[_ngcontent-%COMP%] {\n  color: var(--ion-color-medium);\n  line-height: 1.6;\n  margin-bottom: 16px;\n}\n.support-content[_ngcontent-%COMP%]   ol[_ngcontent-%COMP%] {\n  padding-left: 24px;\n  margin-bottom: 24px;\n}\n.support-content[_ngcontent-%COMP%]   ol[_ngcontent-%COMP%]   li[_ngcontent-%COMP%] {\n  margin-bottom: 8px;\n  color: var(--ion-color-dark);\n}\n.support-content[_ngcontent-%COMP%]   a[_ngcontent-%COMP%] {\n  color: var(--ion-color-raain);\n  text-decoration: none;\n  font-weight: 500;\n}\n.support-content[_ngcontent-%COMP%]   a[_ngcontent-%COMP%]:hover {\n  text-decoration: underline;\n}\n\n.version-info[_ngcontent-%COMP%] {\n  font-size: 10px;\n  color: var(--ion-color-medium);\n  text-align: right;\n  padding: 8px 16px 70px;\n  opacity: 0.7;\n}\n\n.ion-padding[_ngcontent-%COMP%] {\n  max-width: var(--app-max-width);\n  margin: 0 auto 50px;\n}\n\n@media (max-width: 768px) {\n  ion-card[_ngcontent-%COMP%] {\n    margin: 12px 0;\n  }\n  .support-modal[_ngcontent-%COMP%] {\n    --width: 95%;\n  }\n}\n/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8uL3NyYy9jb3JlL3JhaW5zL3JhaW4tZGV0YWlsLnBhZ2Uuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFDQTtFQUNFLFlBQUE7RUFDQSxpQkFBQTtFQUNBLGlDQUFBO0FBQUY7QUFFRTtFQUNFLHNCQUFBO0FBQUo7O0FBS0E7RUFDRSxXQUFBO0VBQ0EsY0FBQTtFQUNBLHVDQUFBO0VBQ0EsZ0JBQUE7QUFGRjs7QUFLQTtFQUNFLGtCQUFBO0VBQ0EsOEJBQUE7RUFDQSxnQkFBQTtBQUZGOztBQU1BO0VBQ0UseUNBQUE7RUFDQSx1Q0FBQTtFQUNBLGlCQUFBO0VBQ0Esd0NBQUE7QUFIRjs7QUFPQTtFQUNFLGNBQUE7RUFDQSxZQUFBO0VBQ0Esa0JBQUE7RUFDQSx5Q0FBQTtFQUNBLG1DQUFBO0FBSkY7O0FBT0E7RUFDRSxhQUFBO0FBSkY7QUFNRTtFQUNFLDRCQUFBO0VBQ0EsZ0JBQUE7RUFDQSxtQkFBQTtFQUNBLGlCQUFBO0FBSko7QUFPRTtFQUNFLDRCQUFBO0VBQ0EsZ0JBQUE7RUFDQSxtQkFBQTtFQUNBLGlCQUFBO0FBTEo7QUFRRTtFQUNFLDhCQUFBO0VBQ0EsZ0JBQUE7RUFDQSxtQkFBQTtBQU5KO0FBU0U7RUFDRSxrQkFBQTtFQUNBLG1CQUFBO0FBUEo7QUFTSTtFQUNFLGtCQUFBO0VBQ0EsNEJBQUE7QUFQTjtBQVdFO0VBQ0UsNkJBQUE7RUFDQSxxQkFBQTtFQUNBLGdCQUFBO0FBVEo7QUFXSTtFQUNFLDBCQUFBO0FBVE47O0FBZUE7RUFDRSxlQUFBO0VBQ0EsOEJBQUE7RUFDQSxpQkFBQTtFQUNBLHNCQUFBO0VBQ0EsWUFBQTtBQVpGOztBQWdCQTtFQUNFLCtCQUFBO0VBQ0EsbUJBQUE7QUFiRjs7QUFpQkE7RUFDRTtJQUNFLGNBQUE7RUFkRjtFQWlCQTtJQUNFLFlBQUE7RUFmRjtBQUNGIiwic291cmNlc0NvbnRlbnQiOlsiLy8gSGVhZGVyIGFuZCBsb2dvIHN0eWxpbmdcbi5hcHAtbG9nbyB7XG4gIGhlaWdodDogMzBweDtcbiAgbWFyZ2luLWxlZnQ6IDE2cHg7XG4gIHRyYW5zaXRpb246IHZhcigtLWFwcC10cmFuc2l0aW9uKTtcblxuICAmOmhvdmVyIHtcbiAgICB0cmFuc2Zvcm06IHNjYWxlKDEuMDUpO1xuICB9XG59XG5cbi8vIENhcmQgc3R5bGluZ1xuaW9uLWNhcmQge1xuICB3aWR0aDogMTAwJTtcbiAgbWFyZ2luOiAxNnB4IDA7XG4gIGJvcmRlci1yYWRpdXM6IHZhcigtLWlvbi1ib3JkZXItcmFkaXVzKTtcbiAgb3ZlcmZsb3c6IGhpZGRlbjtcbn1cblxuaW9uLWNhcmQtc3VidGl0bGUge1xuICBwYWRkaW5nLWxlZnQ6IDIwcHg7XG4gIGNvbG9yOiB2YXIoLS1pb24tY29sb3ItbWVkaXVtKTtcbiAgZm9udC13ZWlnaHQ6IDUwMDtcbn1cblxuLy8gRm9ybSBlbGVtZW50c1xuI3BlcmlvZER1cmF0aW9uIHtcbiAgYm9yZGVyOiAxcHggc29saWQgdmFyKC0taW9uLWNvbG9yLW1lZGl1bSk7XG4gIGJvcmRlci1yYWRpdXM6IHZhcigtLWlvbi1ib3JkZXItcmFkaXVzKTtcbiAgcGFkZGluZzogOHB4IDE2cHg7XG4gIGJhY2tncm91bmQtY29sb3I6IHZhcigtLWlvbi1jb2xvci1saWdodCk7XG59XG5cbi8vIFN1cHBvcnQgbW9kYWwgc3R5bGluZ1xuLnN1cHBvcnQtbW9kYWwge1xuICAtLWhlaWdodDogYXV0bztcbiAgLS13aWR0aDogOTAlO1xuICAtLW1heC13aWR0aDogNTAwcHg7XG4gIC0tYm9yZGVyLXJhZGl1czogdmFyKC0taW9uLWJvcmRlci1yYWRpdXMpO1xuICAtLWJveC1zaGFkb3c6IHZhcigtLWlvbi1ib3gtc2hhZG93KTtcbn1cblxuLnN1cHBvcnQtY29udGVudCB7XG4gIHBhZGRpbmc6IDE2cHg7XG5cbiAgaDIge1xuICAgIGNvbG9yOiB2YXIoLS1pb24tY29sb3ItZGFyayk7XG4gICAgZm9udC13ZWlnaHQ6IDYwMDtcbiAgICBtYXJnaW4tYm90dG9tOiAxNnB4O1xuICAgIGZvbnQtc2l6ZTogMS41cmVtO1xuICB9XG5cbiAgaDMge1xuICAgIGNvbG9yOiB2YXIoLS1pb24tY29sb3ItZGFyayk7XG4gICAgZm9udC13ZWlnaHQ6IDUwMDtcbiAgICBtYXJnaW46IDI0cHggMCAxMnB4O1xuICAgIGZvbnQtc2l6ZTogMS4ycmVtO1xuICB9XG5cbiAgcCB7XG4gICAgY29sb3I6IHZhcigtLWlvbi1jb2xvci1tZWRpdW0pO1xuICAgIGxpbmUtaGVpZ2h0OiAxLjY7XG4gICAgbWFyZ2luLWJvdHRvbTogMTZweDtcbiAgfVxuXG4gIG9sIHtcbiAgICBwYWRkaW5nLWxlZnQ6IDI0cHg7XG4gICAgbWFyZ2luLWJvdHRvbTogMjRweDtcblxuICAgIGxpIHtcbiAgICAgIG1hcmdpbi1ib3R0b206IDhweDtcbiAgICAgIGNvbG9yOiB2YXIoLS1pb24tY29sb3ItZGFyayk7XG4gICAgfVxuICB9XG5cbiAgYSB7XG4gICAgY29sb3I6IHZhcigtLWlvbi1jb2xvci1yYWFpbik7XG4gICAgdGV4dC1kZWNvcmF0aW9uOiBub25lO1xuICAgIGZvbnQtd2VpZ2h0OiA1MDA7XG5cbiAgICAmOmhvdmVyIHtcbiAgICAgIHRleHQtZGVjb3JhdGlvbjogdW5kZXJsaW5lO1xuICAgIH1cbiAgfVxufVxuXG4vLyBWZXJzaW9uIGluZm9cbi52ZXJzaW9uLWluZm8ge1xuICBmb250LXNpemU6IDEwcHg7XG4gIGNvbG9yOiB2YXIoLS1pb24tY29sb3ItbWVkaXVtKTtcbiAgdGV4dC1hbGlnbjogcmlnaHQ7XG4gIHBhZGRpbmc6IDhweCAxNnB4IDcwcHg7XG4gIG9wYWNpdHk6IDAuNztcbn1cblxuLy8gQ29udGVudCBjb250YWluZXJcbi5pb24tcGFkZGluZyB7XG4gIG1heC13aWR0aDogdmFyKC0tYXBwLW1heC13aWR0aCk7XG4gIG1hcmdpbjogMCBhdXRvIDUwcHg7XG59XG5cbi8vIFJlc3BvbnNpdmUgYWRqdXN0bWVudHNcbkBtZWRpYSAobWF4LXdpZHRoOiA3NjhweCkge1xuICBpb24tY2FyZCB7XG4gICAgbWFyZ2luOiAxMnB4IDA7XG4gIH1cblxuICAuc3VwcG9ydC1tb2RhbCB7XG4gICAgLS13aWR0aDogOTUlO1xuICB9XG59XG4iXSwic291cmNlUm9vdCI6IiJ9 */"]
    });
  }
}

/***/ }),

/***/ 19115:
/*!****************************************!*\
  !*** ./src/core/rains/rains.module.ts ***!
  \****************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "RainsPageModule": () => (/* binding */ RainsPageModule)
/* harmony export */ });
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/common */ 94666);
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/forms */ 2508);
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @ionic/angular */ 93819);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @angular/router */ 60124);
/* harmony import */ var _rains_page__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./rains.page */ 64537);
/* harmony import */ var _rain_detail_page__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./rain-detail.page */ 29489);
/* harmony import */ var _shared__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../shared */ 8987);
/* harmony import */ var _shared_pipes_module__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../shared/pipes.module */ 5421);
/* harmony import */ var _modals_new_instance_page__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./modals/new-instance.page */ 91118);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/core */ 22560);












const RouteConfig = [{
  path: '',
  children: [{
    path: '',
    component: _rains_page__WEBPACK_IMPORTED_MODULE_0__.RainsPage
  }, {
    path: ':id',
    component: _rain_detail_page__WEBPACK_IMPORTED_MODULE_1__.RainDetailPage
  }, {
    path: 'new-instance',
    component: _modals_new_instance_page__WEBPACK_IMPORTED_MODULE_4__.NewInstancePage
  }]
}];
class RainsPageModule {
  static {
    this.ɵfac = function RainsPageModule_Factory(t) {
      return new (t || RainsPageModule)();
    };
  }
  static {
    this.ɵmod = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵdefineNgModule"]({
      type: RainsPageModule
    });
  }
  static {
    this.ɵinj = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵdefineInjector"]({
      providers: [_shared__WEBPACK_IMPORTED_MODULE_2__.Storage],
      imports: [_angular_common__WEBPACK_IMPORTED_MODULE_6__.CommonModule, _angular_forms__WEBPACK_IMPORTED_MODULE_7__.FormsModule, _ionic_angular__WEBPACK_IMPORTED_MODULE_8__.IonicModule, _angular_router__WEBPACK_IMPORTED_MODULE_9__.RouterModule.forChild(RouteConfig), _shared_pipes_module__WEBPACK_IMPORTED_MODULE_3__.PipesModule, _shared__WEBPACK_IMPORTED_MODULE_2__.SharedModule]
    });
  }
}
(function () {
  (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵsetNgModuleScope"](RainsPageModule, {
    declarations: [_rains_page__WEBPACK_IMPORTED_MODULE_0__.RainsPage, _rain_detail_page__WEBPACK_IMPORTED_MODULE_1__.RainDetailPage, _modals_new_instance_page__WEBPACK_IMPORTED_MODULE_4__.NewInstancePage],
    imports: [_angular_common__WEBPACK_IMPORTED_MODULE_6__.CommonModule, _angular_forms__WEBPACK_IMPORTED_MODULE_7__.FormsModule, _ionic_angular__WEBPACK_IMPORTED_MODULE_8__.IonicModule, _angular_router__WEBPACK_IMPORTED_MODULE_9__.RouterModule, _shared_pipes_module__WEBPACK_IMPORTED_MODULE_3__.PipesModule, _shared__WEBPACK_IMPORTED_MODULE_2__.SharedModule]
  });
})();

/***/ }),

/***/ 64537:
/*!**************************************!*\
  !*** ./src/core/rains/rains.page.ts ***!
  \**************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "RainsPage": () => (/* binding */ RainsPage)
/* harmony export */ });
/* harmony import */ var _opt_atlassian_pipelines_agent_build_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/esm/asyncToGenerator.js */ 71670);
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @ionic/angular */ 93819);
/* harmony import */ var _environments_environment__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../environments/environment */ 92340);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/core */ 22560);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/router */ 60124);
/* harmony import */ var _shared__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../shared */ 8987);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @angular/common */ 94666);
/* harmony import */ var _shared_profile_icon_directive__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../shared/profile-icon.directive */ 36035);
/* harmony import */ var _shared_shared_pipe__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../shared/shared.pipe */ 64221);










function RainsPage_ion_card_10_Template(rf, ctx) {
  if (rf & 1) {
    const _r3 = _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](0, "ion-card", 5)(1, "ion-card-header")(2, "ion-card-title");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](3, "Rain Zones");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](4, "ion-card-subtitle");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](5, " Based on radars, Rain zones are supporting rain computing. ");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](6, "ion-card-content")(7, "p");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](8, "Manage here rain computing status.");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](9, "ion-button", 6);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵlistener"]("click", function RainsPage_ion_card_10_Template_ion_button_click_9_listener() {
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵrestoreView"](_r3);
      const ctx_r2 = _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵnextContext"]();
      return _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵresetView"](ctx_r2.closeInfo("welcome-card"));
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](10, "Got it");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]()();
  }
}
function RainsPage_div_11_ion_item_sliding_2_ion_icon_2_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelement"](0, "ion-icon", 15);
  }
}
function RainsPage_div_11_ion_item_sliding_2_ion_icon_4_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelement"](0, "ion-icon", 16);
  }
}
function RainsPage_div_11_ion_item_sliding_2_Template(rf, ctx) {
  if (rf & 1) {
    const _r9 = _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](0, "ion-item-sliding")(1, "ion-item");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtemplate"](2, RainsPage_div_11_ion_item_sliding_2_ion_icon_2_Template, 1, 0, "ion-icon", 8);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵpipe"](3, "hasGoodQuality");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtemplate"](4, RainsPage_div_11_ion_item_sliding_2_ion_icon_4_Template, 1, 0, "ion-icon", 9);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵpipe"](5, "hasGoodQuality");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](6, "div", 10);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](7);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](8, "ion-button", 11);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵlistener"]("click", function RainsPage_div_11_ion_item_sliding_2_Template_ion_button_click_8_listener() {
      const restoredCtx = _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵrestoreView"](_r9);
      const item_r5 = restoredCtx.$implicit;
      const ctx_r8 = _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵnextContext"](2);
      return _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵresetView"](ctx_r8.clickOnRain(item_r5));
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](9, "details");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](10, "ion-progress-bar", 12);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵlistener"]("click", function RainsPage_div_11_ion_item_sliding_2_Template_ion_progress_bar_click_10_listener() {
      const restoredCtx = _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵrestoreView"](_r9);
      const item_r5 = restoredCtx.$implicit;
      const ctx_r10 = _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵnextContext"](2);
      return _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵresetView"](ctx_r10.clickOnRain(item_r5));
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵpipe"](11, "progressBuffer");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵpipe"](12, "progressValue");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](13, "ion-icon", 13);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵlistener"]("click", function RainsPage_div_11_ion_item_sliding_2_Template_ion_icon_click_13_listener() {
      const restoredCtx = _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵrestoreView"](_r9);
      const item_r5 = restoredCtx.$implicit;
      const ctx_r11 = _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵnextContext"](2);
      return _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵresetView"](ctx_r11.clickOnRain(item_r5));
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](14, "ion-icon", 14);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵlistener"]("click", function RainsPage_div_11_ion_item_sliding_2_Template_ion_icon_click_14_listener() {
      const restoredCtx = _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵrestoreView"](_r9);
      const item_r5 = restoredCtx.$implicit;
      const ctx_r12 = _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵnextContext"](2);
      return _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵresetView"](ctx_r12.clickOnRain(item_r5));
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]()()();
  }
  if (rf & 2) {
    const item_r5 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵproperty"]("ngIf", _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵpipeBind1"](3, 5, item_r5));
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵproperty"]("ngIf", !_angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵpipeBind1"](5, 7, item_r5));
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtextInterpolate"](item_r5.name);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵpropertyInterpolate"]("buffer", _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵpipeBind1"](11, 9, item_r5));
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵpropertyInterpolate"]("value", _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵpipeBind1"](12, 11, item_r5));
  }
}
function RainsPage_div_11_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](0, "div")(1, "ion-list");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtemplate"](2, RainsPage_div_11_ion_item_sliding_2_Template, 15, 13, "ion-item-sliding", 7);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]()();
  }
  if (rf & 2) {
    const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵproperty"]("ngForOf", ctx_r1.rains);
  }
}
class RainsPage {
  constructor(router, profile) {
    this.router = router;
    this.profile = profile;
    this.rainsInfoAlreadyViewed = {};
    this.rains = [];
    this.appVersion = _environments_environment__WEBPACK_IMPORTED_MODULE_1__.environment.version;
  }
  ngOnInit() {
    this.refresh();
  }
  refresh(event) {
    var _this = this;
    return (0,_opt_atlassian_pipelines_agent_build_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_0__["default"])(function* () {
      try {
        _this.sessionData = yield _this.profile.refreshProfile();
        if (_this.sessionData.infos.rainsInfoAlreadyViewed) {
          _this.rainsInfoAlreadyViewed = _this.sessionData.infos.rainsInfoAlreadyViewed;
        }
        _this.rains = yield _this.profile.getRains(_this.profile.asTeamId);
      } catch (e) {
        console.error('refresh pb:', e);
      }
      if (event) {
        event.target.complete();
      }
      if (!_this.profile.isLoggedIn()) {
        return _this.profile.gotoLout();
      }
    })();
  }
  clickOnRain(rain) {
    return this.router.navigate(['/rains', rain.id]);
  }
  closeInfo(windowName) {
    var _this2 = this;
    return (0,_opt_atlassian_pipelines_agent_build_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_0__["default"])(function* () {
      _this2.rainsInfoAlreadyViewed[windowName] = true;
      if (!_this2.sessionData || !_this2.sessionData.infos) {
        return;
      }
      _this2.sessionData.infos.rainsInfoAlreadyViewed = _this2.rainsInfoAlreadyViewed;
      yield _this2.profile.storeAll();
    })();
  }
  static {
    this.ɵfac = function RainsPage_Factory(t) {
      return new (t || RainsPage)(_angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_6__.Router), _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵdirectiveInject"](_shared__WEBPACK_IMPORTED_MODULE_2__.ProfileService));
    };
  }
  static {
    this.ɵcmp = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵdefineComponent"]({
      type: RainsPage,
      selectors: [["app-rains"]],
      viewQuery: function RainsPage_Query(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵviewQuery"](_ionic_angular__WEBPACK_IMPORTED_MODULE_7__.IonModal, 5);
        }
        if (rf & 2) {
          let _t;
          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵqueryRefresh"](_t = _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵloadQuery"]()) && (ctx.modal = _t.first);
        }
      },
      decls: 12,
      vars: 2,
      consts: [["slot", "start"], ["src", "assets/icon/favicon.ico", 2, "height", "30px", "padding-left", "20px"], ["slot", "fixed", 3, "ionRefresh"], ["class", "welcome-card", 4, "ngIf"], [4, "ngIf"], [1, "welcome-card"], ["fill", "outline", 3, "click"], [4, "ngFor", "ngForOf"], ["color", "success", "name", "radio-button-off", "slot", "start", 4, "ngIf"], ["color", "warning", "name", "radio-button-off", "slot", "start", 4, "ngIf"], [2, "min-width", "200px"], ["expand", "block", 3, "click"], ["color", "primary", 3, "buffer", "value", "click"], ["color", "primary", "name", "cloud-done", "slot", "end", 3, "click"], ["color", "primary", "name", "arrow-right", "slot", "end", 3, "click"], ["color", "success", "name", "radio-button-off", "slot", "start"], ["color", "warning", "name", "radio-button-off", "slot", "start"]],
      template: function RainsPage_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](0, "ion-header")(1, "ion-toolbar")(2, "ion-buttons", 0);
          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelement"](3, "ion-menu-button")(4, "ion-img", 1);
          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](5, "ion-title");
          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](6, " Rain zones ");
          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]()()();
          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](7, "ion-content")(8, "ion-refresher", 2);
          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵlistener"]("ionRefresh", function RainsPage_Template_ion_refresher_ionRefresh_8_listener($event) {
            return ctx.refresh($event);
          });
          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelement"](9, "ion-refresher-content");
          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtemplate"](10, RainsPage_ion_card_10_Template, 11, 0, "ion-card", 3);
          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtemplate"](11, RainsPage_div_11_Template, 3, 1, "div", 4);
          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
        }
        if (rf & 2) {
          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](10);
          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵproperty"]("ngIf", !ctx.rainsInfoAlreadyViewed.hasOwnProperty("welcome-card"));
          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](1);
          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵproperty"]("ngIf", ctx.rains.length);
        }
      },
      dependencies: [_angular_common__WEBPACK_IMPORTED_MODULE_8__.NgForOf, _angular_common__WEBPACK_IMPORTED_MODULE_8__.NgIf, _ionic_angular__WEBPACK_IMPORTED_MODULE_7__.IonButton, _ionic_angular__WEBPACK_IMPORTED_MODULE_7__.IonButtons, _ionic_angular__WEBPACK_IMPORTED_MODULE_7__.IonCard, _ionic_angular__WEBPACK_IMPORTED_MODULE_7__.IonCardContent, _ionic_angular__WEBPACK_IMPORTED_MODULE_7__.IonCardHeader, _ionic_angular__WEBPACK_IMPORTED_MODULE_7__.IonCardSubtitle, _ionic_angular__WEBPACK_IMPORTED_MODULE_7__.IonCardTitle, _ionic_angular__WEBPACK_IMPORTED_MODULE_7__.IonContent, _ionic_angular__WEBPACK_IMPORTED_MODULE_7__.IonHeader, _ionic_angular__WEBPACK_IMPORTED_MODULE_7__.IonIcon, _ionic_angular__WEBPACK_IMPORTED_MODULE_7__.IonImg, _ionic_angular__WEBPACK_IMPORTED_MODULE_7__.IonItem, _ionic_angular__WEBPACK_IMPORTED_MODULE_7__.IonItemSliding, _ionic_angular__WEBPACK_IMPORTED_MODULE_7__.IonList, _ionic_angular__WEBPACK_IMPORTED_MODULE_7__.IonMenuButton, _ionic_angular__WEBPACK_IMPORTED_MODULE_7__.IonProgressBar, _ionic_angular__WEBPACK_IMPORTED_MODULE_7__.IonRefresher, _ionic_angular__WEBPACK_IMPORTED_MODULE_7__.IonRefresherContent, _ionic_angular__WEBPACK_IMPORTED_MODULE_7__.IonTitle, _ionic_angular__WEBPACK_IMPORTED_MODULE_7__.IonToolbar, _shared_profile_icon_directive__WEBPACK_IMPORTED_MODULE_3__.ProfileIconDirective, _shared_shared_pipe__WEBPACK_IMPORTED_MODULE_4__.HasGoodQuality, _shared_shared_pipe__WEBPACK_IMPORTED_MODULE_4__.ProgressValue, _shared_shared_pipe__WEBPACK_IMPORTED_MODULE_4__.ProgressBuffer],
      styles: [".vertical-align-content[_ngcontent-%COMP%]    > *[_ngcontent-%COMP%] {\n  display: flex !important;\n  align-content: center !important;\n  align-items: center !important;\n}\n\n.content-card[_ngcontent-%COMP%] {\n  margin-bottom: 100px;\n}\n\nion-list[_ngcontent-%COMP%] {\n  margin-bottom: 50px;\n}\n/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8uL3NyYy9jb3JlL3JhaW5zL3JhaW5zLnBhZ2Uuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUNFLHdCQUFBO0VBQ0EsZ0NBQUE7RUFDQSw4QkFBQTtBQUNGOztBQUVBO0VBQ0Usb0JBQUE7QUFDRjs7QUFFQTtFQUNFLG1CQUFBO0FBQ0YiLCJzb3VyY2VzQ29udGVudCI6WyIudmVydGljYWwtYWxpZ24tY29udGVudCA+ICoge1xuICBkaXNwbGF5OiBmbGV4ICFpbXBvcnRhbnQ7XG4gIGFsaWduLWNvbnRlbnQ6IGNlbnRlciAhaW1wb3J0YW50O1xuICBhbGlnbi1pdGVtczogY2VudGVyICFpbXBvcnRhbnQ7XG59XG5cbi5jb250ZW50LWNhcmQge1xuICBtYXJnaW4tYm90dG9tOiAxMDBweDtcbn1cblxuaW9uLWxpc3Qge1xuICBtYXJnaW4tYm90dG9tOiA1MHB4O1xufVxuIl0sInNvdXJjZVJvb3QiOiIifQ== */"]
    });
  }
}

/***/ })

}]);
//# sourceMappingURL=9115.faaa77d641ec18ee.js.map