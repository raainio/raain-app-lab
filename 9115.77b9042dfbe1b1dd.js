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
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! rxjs/operators */ 32673);
/* harmony import */ var raain_model__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! raain-model */ 70034);
/* harmony import */ var raain_model__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(raain_model__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @ionic/angular */ 93819);
/* harmony import */ var _environments_environment__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../environments/environment */ 92340);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/core */ 22560);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/router */ 60124);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @angular/common */ 94666);
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! @angular/forms */ 2508);
/* harmony import */ var _shared_raain_details_raain_details_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../shared/raain-details/raain-details.component */ 25712);













function RainDetailPage_ion_buttons_7_Template(rf, ctx) {
  if (rf & 1) {
    const _r4 = _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](0, "ion-buttons", 10)(1, "ion-label", 11);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](2, "Admin Data");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](3, "ion-toggle", 12);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵlistener"]("ionChange", function RainDetailPage_ion_buttons_7_Template_ion_toggle_ionChange_3_listener($event) {
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵrestoreView"](_r4);
      const ctx_r3 = _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵnextContext"]();
      return _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵresetView"](ctx_r3.toggleAdminChanged($event));
    })("ngModelChange", function RainDetailPage_ion_buttons_7_Template_ion_toggle_ngModelChange_3_listener($event) {
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵrestoreView"](_r4);
      const ctx_r5 = _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵnextContext"]();
      return _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵresetView"](ctx_r5.toggleAdmin = $event);
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]()();
  }
  if (rf & 2) {
    const ctx_r0 = _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵproperty"]("ngModel", ctx_r0.toggleAdmin)("checked", ctx_r0.toggleAdmin);
  }
}
function RainDetailPage_raain_details_11_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelement"](0, "raain-details", 13);
  }
  if (rf & 2) {
    const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵproperty"]("compareManager", ctx_r1.compareManager)("profileService", ctx_r1.profileService)("radarService", ctx_r1.radarService)("rainNode", ctx_r1.rainNode)("refreshManager", ctx_r1.refreshManager)("reportManager", ctx_r1.reportManager)("toggleAdmin", ctx_r1.toggleAdmin);
  }
}
function RainDetailPage_ng_template_13_Template(rf, ctx) {
  if (rf & 1) {
    const _r7 = _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](0, "ion-header")(1, "ion-toolbar")(2, "ion-title");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](3, "Ask support");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]()()();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](4, "ion-content", 14);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](5, " Any questions ?");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelement"](6, "br")(7, "br");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](8, " Feel free to ask the ");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](9, "a", 15);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](10, "support@radartorain.com");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](11, ", with ");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](12, "ol")(13, "li");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](14, "full screenshot (movie if you can)");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](15, "li");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](16, "your most detailed question");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](17, " We will be happy to support you :)");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelement"](18, "br");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](19, "ion-button", 16);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵlistener"]("click", function RainDetailPage_ng_template_13_Template_ion_button_click_19_listener() {
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵrestoreView"](_r7);
      const ctx_r6 = _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵnextContext"]();
      return _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵresetView"](ctx_r6.modal.dismiss());
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](20, "ok ");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]()();
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
  subscribeToRainUpdates() {
    console.log('subscribeToRainUpdates', this.rain$);
    if (this.rain$) {
      return;
    }
    this.rain$ = this.activatedRoute.paramMap.pipe((0,rxjs_operators__WEBPACK_IMPORTED_MODULE_6__.switchMap)(params => this.profileService.getRain(params.get('id'))));
    this.rain$.subscribe(this.initRain.bind(this));
  }
  initRain(rainNode) {
    var _this3 = this;
    return (0,_opt_atlassian_pipelines_agent_build_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_0__["default"])(function* () {
      _this3.toggleDetails = false;
      _this3.toggleAdmin = _this3.storage.get('raain-toggleAdmin');
      _this3.isAdmin = _this3.profileService.isAdmin();
      if (!rainNode) {
        return;
      }
      _this3.rainNode = rainNode;
      _this3.compareManager = new _shared__WEBPACK_IMPORTED_MODULE_1__.CompareManager(_this3.profileService);
      _this3.refreshManager = new _shared__WEBPACK_IMPORTED_MODULE_1__.RefreshManager(_this3.radarService, _this3.profileService, _this3.compareManager);
      _this3.reportManager = new _shared__WEBPACK_IMPORTED_MODULE_1__.ReportManager(_this3.radarService, _this3.profileService);
      _this3.compareManager.rainNode = _this3.rainNode;
      _this3.refreshManager.rainNode = _this3.rainNode;
      _this3.reportManager.rainNode = _this3.rainNode;
      // For Simple Radar-Rain Zone :
      const radarLinks = rainNode.getLinks(raain_model__WEBPACK_IMPORTED_MODULE_2__.RadarNode.TYPE);
      _this3.isSimpleZone = radarLinks.length === 1;
      _this3.toggleDetails = true;
    })();
  }
  static {
    this.ɵfac = function RainDetailPage_Factory(t) {
      return new (t || RainDetailPage)(_angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_7__.ActivatedRoute), _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵdirectiveInject"](_shared__WEBPACK_IMPORTED_MODULE_1__.ProfileService), _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵdirectiveInject"](_shared__WEBPACK_IMPORTED_MODULE_1__.RadarService), _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵdirectiveInject"](_shared__WEBPACK_IMPORTED_MODULE_1__.Storage));
    };
  }
  static {
    this.ɵcmp = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵdefineComponent"]({
      type: RainDetailPage,
      selectors: [["app-rain-detail"]],
      viewQuery: function RainDetailPage_Query(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵviewQuery"](_ionic_angular__WEBPACK_IMPORTED_MODULE_8__.IonModal, 5);
        }
        if (rf & 2) {
          let _t;
          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵqueryRefresh"](_t = _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵloadQuery"]()) && (ctx.modal = _t.first);
        }
      },
      decls: 19,
      vars: 3,
      consts: [["slot", "start"], ["src", "assets/icon/favicon.ico", 2, "height", "30px", "padding-left", "20px"], ["slot", "end", 4, "ngIf"], ["slot", "fixed", 3, "ionRefresh"], [3, "compareManager", "profileService", "radarService", "rainNode", "refreshManager", "reportManager", "toggleAdmin", 4, "ngIf"], ["trigger", "open-modal"], ["horizontal", "end", "slot", "fixed", "vertical", "bottom"], ["id", "open-modal"], ["name", "help"], [2, "float", "right", "font-size", "10px", "padding-bottom", "70px"], ["slot", "end"], ["color", "warning", "slot", "end"], ["color", "warning", "slot", "end", 3, "ngModel", "checked", "ionChange", "ngModelChange"], [3, "compareManager", "profileService", "radarService", "rainNode", "refreshManager", "reportManager", "toggleAdmin"], [1, "ion-padding"], ["href", "mailto:support@radartorain.com"], ["expand", "block", 3, "click"]],
      template: function RainDetailPage_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](0, "ion-header")(1, "ion-toolbar")(2, "ion-buttons", 0);
          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelement"](3, "ion-menu-button")(4, "ion-img", 1);
          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](5, "ion-title");
          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](6, " Radar To Rain - Details ");
          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtemplate"](7, RainDetailPage_ion_buttons_7_Template, 4, 2, "ion-buttons", 2);
          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]()();
          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](8, "ion-content")(9, "ion-refresher", 3);
          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵlistener"]("ionRefresh", function RainDetailPage_Template_ion_refresher_ionRefresh_9_listener($event) {
            return ctx.refresh($event);
          });
          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelement"](10, "ion-refresher-content");
          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtemplate"](11, RainDetailPage_raain_details_11_Template, 1, 7, "raain-details", 4);
          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](12, "ion-modal", 5);
          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtemplate"](13, RainDetailPage_ng_template_13_Template, 21, 0, "ng-template");
          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](14, "ion-fab", 6)(15, "ion-fab-button", 7);
          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelement"](16, "ion-icon", 8);
          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]()();
          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](17, "span", 9);
          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](18);
          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]()();
        }
        if (rf & 2) {
          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](7);
          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵproperty"]("ngIf", ctx.isSimpleZone);
          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](4);
          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵproperty"]("ngIf", ctx.toggleDetails);
          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](7);
          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtextInterpolate"](ctx.appVersion);
        }
      },
      dependencies: [_angular_common__WEBPACK_IMPORTED_MODULE_9__.NgIf, _angular_forms__WEBPACK_IMPORTED_MODULE_10__.NgControlStatus, _angular_forms__WEBPACK_IMPORTED_MODULE_10__.NgModel, _ionic_angular__WEBPACK_IMPORTED_MODULE_8__.IonButton, _ionic_angular__WEBPACK_IMPORTED_MODULE_8__.IonButtons, _ionic_angular__WEBPACK_IMPORTED_MODULE_8__.IonContent, _ionic_angular__WEBPACK_IMPORTED_MODULE_8__.IonFab, _ionic_angular__WEBPACK_IMPORTED_MODULE_8__.IonFabButton, _ionic_angular__WEBPACK_IMPORTED_MODULE_8__.IonHeader, _ionic_angular__WEBPACK_IMPORTED_MODULE_8__.IonIcon, _ionic_angular__WEBPACK_IMPORTED_MODULE_8__.IonImg, _ionic_angular__WEBPACK_IMPORTED_MODULE_8__.IonLabel, _ionic_angular__WEBPACK_IMPORTED_MODULE_8__.IonMenuButton, _ionic_angular__WEBPACK_IMPORTED_MODULE_8__.IonRefresher, _ionic_angular__WEBPACK_IMPORTED_MODULE_8__.IonRefresherContent, _ionic_angular__WEBPACK_IMPORTED_MODULE_8__.IonTitle, _ionic_angular__WEBPACK_IMPORTED_MODULE_8__.IonToggle, _ionic_angular__WEBPACK_IMPORTED_MODULE_8__.IonToolbar, _ionic_angular__WEBPACK_IMPORTED_MODULE_8__.IonModal, _ionic_angular__WEBPACK_IMPORTED_MODULE_8__.BooleanValueAccessor, _shared_raain_details_raain_details_component__WEBPACK_IMPORTED_MODULE_4__.RaainDetailsComponent],
      styles: ["ion-card[_ngcontent-%COMP%] {\n  width: 100%;\n}\n\nion-card-subtitle[_ngcontent-%COMP%] {\n  padding-left: 20px;\n}\n\n#periodDuration[_ngcontent-%COMP%] {\n  border: 1px solid var(--ion-color-medium);\n  border-radius: 2px;\n  padding: 2px 20px;\n}\n/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8uL3NyYy9jb3JlL3JhaW5zL3JhaW4tZGV0YWlsLnBhZ2Uuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUNFLFdBQUE7QUFDRjs7QUFFQTtFQUNFLGtCQUFBO0FBQ0Y7O0FBRUE7RUFDRSx5Q0FBQTtFQUNBLGtCQUFBO0VBQ0EsaUJBQUE7QUFDRiIsInNvdXJjZXNDb250ZW50IjpbImlvbi1jYXJkIHtcbiAgd2lkdGg6IDEwMCU7XG59XG5cbmlvbi1jYXJkLXN1YnRpdGxlIHtcbiAgcGFkZGluZy1sZWZ0OiAyMHB4O1xufVxuXG4jcGVyaW9kRHVyYXRpb24ge1xuICBib3JkZXI6IDFweCBzb2xpZCB2YXIoLS1pb24tY29sb3ItbWVkaXVtKTtcbiAgYm9yZGVyLXJhZGl1czogMnB4O1xuICBwYWRkaW5nOiAycHggMjBweDtcbn1cbiJdLCJzb3VyY2VSb290IjoiIn0= */"]
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
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/common */ 94666);
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/forms */ 2508);
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @ionic/angular */ 93819);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @angular/router */ 60124);
/* harmony import */ var _rains_page__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./rains.page */ 64537);
/* harmony import */ var _rain_detail_page__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./rain-detail.page */ 29489);
/* harmony import */ var _shared__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../shared */ 8987);
/* harmony import */ var _modals_new_instance_page__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./modals/new-instance.page */ 91118);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/core */ 22560);










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
    component: _modals_new_instance_page__WEBPACK_IMPORTED_MODULE_3__.NewInstancePage
  }]
}];
class RainsPageModule {
  static {
    this.ɵfac = function RainsPageModule_Factory(t) {
      return new (t || RainsPageModule)();
    };
  }
  static {
    this.ɵmod = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵdefineNgModule"]({
      type: RainsPageModule
    });
  }
  static {
    this.ɵinj = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵdefineInjector"]({
      providers: [_shared__WEBPACK_IMPORTED_MODULE_2__.Storage],
      imports: [_angular_common__WEBPACK_IMPORTED_MODULE_5__.CommonModule, _angular_forms__WEBPACK_IMPORTED_MODULE_6__.FormsModule, _ionic_angular__WEBPACK_IMPORTED_MODULE_7__.IonicModule, _shared__WEBPACK_IMPORTED_MODULE_2__.SharedModule, _angular_router__WEBPACK_IMPORTED_MODULE_8__.RouterModule.forChild(RouteConfig)]
    });
  }
}
(function () {
  (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵsetNgModuleScope"](RainsPageModule, {
    declarations: [_rains_page__WEBPACK_IMPORTED_MODULE_0__.RainsPage, _rain_detail_page__WEBPACK_IMPORTED_MODULE_1__.RainDetailPage, _modals_new_instance_page__WEBPACK_IMPORTED_MODULE_3__.NewInstancePage],
    imports: [_angular_common__WEBPACK_IMPORTED_MODULE_5__.CommonModule, _angular_forms__WEBPACK_IMPORTED_MODULE_6__.FormsModule, _ionic_angular__WEBPACK_IMPORTED_MODULE_7__.IonicModule, _shared__WEBPACK_IMPORTED_MODULE_2__.SharedModule, _angular_router__WEBPACK_IMPORTED_MODULE_8__.RouterModule]
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
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @ionic/angular */ 93819);
/* harmony import */ var _environments_environment__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../environments/environment */ 92340);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/core */ 22560);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/router */ 60124);
/* harmony import */ var _shared__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../shared */ 8987);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/common */ 94666);
/* harmony import */ var _shared_shared_pipe__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../shared/shared.pipe */ 64221);









function RainsPage_ion_card_10_Template(rf, ctx) {
  if (rf & 1) {
    const _r3 = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](0, "ion-card", 6)(1, "ion-card-header")(2, "ion-card-title");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](3, "Rain Zones");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](4, "ion-card-subtitle");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](5, " Based on radars, Rain zones are supporting rain computing. ");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](6, "ion-card-content")(7, "p");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](8, "Manage here rain computing status.");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](9, "ion-button", 7);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵlistener"]("click", function RainsPage_ion_card_10_Template_ion_button_click_9_listener() {
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵrestoreView"](_r3);
      const ctx_r2 = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵnextContext"]();
      return _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵresetView"](ctx_r2.closeInfo("welcome-card"));
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](10, "Got it");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]()();
  }
}
function RainsPage_div_11_ion_item_sliding_2_ion_icon_2_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelement"](0, "ion-icon", 16);
  }
}
function RainsPage_div_11_ion_item_sliding_2_ion_icon_4_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelement"](0, "ion-icon", 17);
  }
}
function RainsPage_div_11_ion_item_sliding_2_Template(rf, ctx) {
  if (rf & 1) {
    const _r9 = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](0, "ion-item-sliding")(1, "ion-item");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtemplate"](2, RainsPage_div_11_ion_item_sliding_2_ion_icon_2_Template, 1, 0, "ion-icon", 9);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵpipe"](3, "hasGoodQuality");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtemplate"](4, RainsPage_div_11_ion_item_sliding_2_ion_icon_4_Template, 1, 0, "ion-icon", 10);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵpipe"](5, "hasGoodQuality");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](6, "div", 11);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](7);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](8, "ion-button", 12);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵlistener"]("click", function RainsPage_div_11_ion_item_sliding_2_Template_ion_button_click_8_listener() {
      const restoredCtx = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵrestoreView"](_r9);
      const item_r5 = restoredCtx.$implicit;
      const ctx_r8 = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵnextContext"](2);
      return _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵresetView"](ctx_r8.clickOnRain(item_r5));
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](9, "details");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](10, "ion-progress-bar", 13);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵlistener"]("click", function RainsPage_div_11_ion_item_sliding_2_Template_ion_progress_bar_click_10_listener() {
      const restoredCtx = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵrestoreView"](_r9);
      const item_r5 = restoredCtx.$implicit;
      const ctx_r10 = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵnextContext"](2);
      return _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵresetView"](ctx_r10.clickOnRain(item_r5));
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵpipe"](11, "progressBuffer");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵpipe"](12, "progressValue");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](13, "ion-icon", 14);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵlistener"]("click", function RainsPage_div_11_ion_item_sliding_2_Template_ion_icon_click_13_listener() {
      const restoredCtx = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵrestoreView"](_r9);
      const item_r5 = restoredCtx.$implicit;
      const ctx_r11 = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵnextContext"](2);
      return _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵresetView"](ctx_r11.clickOnRain(item_r5));
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](14, "ion-icon", 15);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵlistener"]("click", function RainsPage_div_11_ion_item_sliding_2_Template_ion_icon_click_14_listener() {
      const restoredCtx = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵrestoreView"](_r9);
      const item_r5 = restoredCtx.$implicit;
      const ctx_r12 = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵnextContext"](2);
      return _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵresetView"](ctx_r12.clickOnRain(item_r5));
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]()()();
  }
  if (rf & 2) {
    const item_r5 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("ngIf", _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵpipeBind1"](3, 5, item_r5));
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("ngIf", !_angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵpipeBind1"](5, 7, item_r5));
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtextInterpolate"](item_r5.name);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵpropertyInterpolate"]("buffer", _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵpipeBind1"](11, 9, item_r5));
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵpropertyInterpolate"]("value", _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵpipeBind1"](12, 11, item_r5));
  }
}
function RainsPage_div_11_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](0, "div")(1, "ion-list");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtemplate"](2, RainsPage_div_11_ion_item_sliding_2_Template, 15, 13, "ion-item-sliding", 8);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]()();
  }
  if (rf & 2) {
    const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("ngForOf", ctx_r1.rains);
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
      return new (t || RainsPage)(_angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_5__.Router), _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵdirectiveInject"](_shared__WEBPACK_IMPORTED_MODULE_2__.ProfileService));
    };
  }
  static {
    this.ɵcmp = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵdefineComponent"]({
      type: RainsPage,
      selectors: [["app-rains"]],
      viewQuery: function RainsPage_Query(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵviewQuery"](_ionic_angular__WEBPACK_IMPORTED_MODULE_6__.IonModal, 5);
        }
        if (rf & 2) {
          let _t;
          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵqueryRefresh"](_t = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵloadQuery"]()) && (ctx.modal = _t.first);
        }
      },
      decls: 14,
      vars: 3,
      consts: [["slot", "start"], ["src", "assets/icon/favicon.ico", 2, "height", "30px", "padding-left", "20px"], ["slot", "fixed", 3, "ionRefresh"], ["class", "welcome-card", 4, "ngIf"], [4, "ngIf"], [2, "float", "right", "font-size", "10px"], [1, "welcome-card"], ["fill", "outline", 3, "click"], [4, "ngFor", "ngForOf"], ["color", "success", "name", "radio-button-off", "slot", "start", 4, "ngIf"], ["color", "warning", "name", "radio-button-off", "slot", "start", 4, "ngIf"], [2, "min-width", "200px"], ["expand", "block", 3, "click"], ["color", "primary", 3, "buffer", "value", "click"], ["color", "primary", "name", "cloud-done", "slot", "end", 3, "click"], ["color", "primary", "name", "arrow-right", "slot", "end", 3, "click"], ["color", "success", "name", "radio-button-off", "slot", "start"], ["color", "warning", "name", "radio-button-off", "slot", "start"]],
      template: function RainsPage_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](0, "ion-header")(1, "ion-toolbar")(2, "ion-buttons", 0);
          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelement"](3, "ion-menu-button")(4, "ion-img", 1);
          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](5, "ion-title");
          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](6, " Rain zones ");
          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]()()();
          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](7, "ion-content")(8, "ion-refresher", 2);
          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵlistener"]("ionRefresh", function RainsPage_Template_ion_refresher_ionRefresh_8_listener($event) {
            return ctx.refresh($event);
          });
          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelement"](9, "ion-refresher-content");
          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtemplate"](10, RainsPage_ion_card_10_Template, 11, 0, "ion-card", 3);
          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtemplate"](11, RainsPage_div_11_Template, 3, 1, "div", 4);
          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](12, "span", 5);
          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](13);
          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]()();
        }
        if (rf & 2) {
          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](10);
          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("ngIf", !ctx.rainsInfoAlreadyViewed.hasOwnProperty("welcome-card"));
          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](1);
          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("ngIf", ctx.rains.length);
          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](2);
          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtextInterpolate"](ctx.appVersion);
        }
      },
      dependencies: [_angular_common__WEBPACK_IMPORTED_MODULE_7__.NgForOf, _angular_common__WEBPACK_IMPORTED_MODULE_7__.NgIf, _ionic_angular__WEBPACK_IMPORTED_MODULE_6__.IonButton, _ionic_angular__WEBPACK_IMPORTED_MODULE_6__.IonButtons, _ionic_angular__WEBPACK_IMPORTED_MODULE_6__.IonCard, _ionic_angular__WEBPACK_IMPORTED_MODULE_6__.IonCardContent, _ionic_angular__WEBPACK_IMPORTED_MODULE_6__.IonCardHeader, _ionic_angular__WEBPACK_IMPORTED_MODULE_6__.IonCardSubtitle, _ionic_angular__WEBPACK_IMPORTED_MODULE_6__.IonCardTitle, _ionic_angular__WEBPACK_IMPORTED_MODULE_6__.IonContent, _ionic_angular__WEBPACK_IMPORTED_MODULE_6__.IonHeader, _ionic_angular__WEBPACK_IMPORTED_MODULE_6__.IonIcon, _ionic_angular__WEBPACK_IMPORTED_MODULE_6__.IonImg, _ionic_angular__WEBPACK_IMPORTED_MODULE_6__.IonItem, _ionic_angular__WEBPACK_IMPORTED_MODULE_6__.IonItemSliding, _ionic_angular__WEBPACK_IMPORTED_MODULE_6__.IonList, _ionic_angular__WEBPACK_IMPORTED_MODULE_6__.IonMenuButton, _ionic_angular__WEBPACK_IMPORTED_MODULE_6__.IonProgressBar, _ionic_angular__WEBPACK_IMPORTED_MODULE_6__.IonRefresher, _ionic_angular__WEBPACK_IMPORTED_MODULE_6__.IonRefresherContent, _ionic_angular__WEBPACK_IMPORTED_MODULE_6__.IonTitle, _ionic_angular__WEBPACK_IMPORTED_MODULE_6__.IonToolbar, _shared_shared_pipe__WEBPACK_IMPORTED_MODULE_3__.HasGoodQuality, _shared_shared_pipe__WEBPACK_IMPORTED_MODULE_3__.ProgressValue, _shared_shared_pipe__WEBPACK_IMPORTED_MODULE_3__.ProgressBuffer],
      styles: [".vertical-align-content[_ngcontent-%COMP%]    > *[_ngcontent-%COMP%] {\n  display: flex !important;\n  align-content: center !important;\n  align-items: center !important;\n}\n\n.content-card[_ngcontent-%COMP%] {\n  margin-bottom: 100px;\n}\n\nion-list[_ngcontent-%COMP%] {\n  margin-bottom: 50px;\n}\n/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8uL3NyYy9jb3JlL3JhaW5zL3JhaW5zLnBhZ2Uuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUNFLHdCQUFBO0VBQ0EsZ0NBQUE7RUFDQSw4QkFBQTtBQUNGOztBQUVBO0VBQ0Usb0JBQUE7QUFDRjs7QUFFQTtFQUNFLG1CQUFBO0FBQ0YiLCJzb3VyY2VzQ29udGVudCI6WyIudmVydGljYWwtYWxpZ24tY29udGVudCA+ICoge1xuICBkaXNwbGF5OiBmbGV4ICFpbXBvcnRhbnQ7XG4gIGFsaWduLWNvbnRlbnQ6IGNlbnRlciAhaW1wb3J0YW50O1xuICBhbGlnbi1pdGVtczogY2VudGVyICFpbXBvcnRhbnQ7XG59XG5cbi5jb250ZW50LWNhcmQge1xuICBtYXJnaW4tYm90dG9tOiAxMDBweDtcbn1cblxuaW9uLWxpc3Qge1xuICBtYXJnaW4tYm90dG9tOiA1MHB4O1xufVxuIl0sInNvdXJjZVJvb3QiOiIifQ== */"]
    });
  }
}

/***/ })

}]);
//# sourceMappingURL=9115.77b9042dfbe1b1dd.js.map