"use strict";
(self["webpackChunkapp"] = self["webpackChunkapp"] || []).push([[6653],{

/***/ 6653:
/*!**************************************!*\
  !*** ./src/core/home/home.module.ts ***!
  \**************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "HomePageModule": () => (/* binding */ HomePageModule)
/* harmony export */ });
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/common */ 94666);
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/forms */ 2508);
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @ionic/angular */ 93819);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/router */ 60124);
/* harmony import */ var _home_page__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./home.page */ 85295);
/* harmony import */ var _modals_new_instance_page__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./modals/new-instance.page */ 38937);
/* harmony import */ var _shared_pipes_module__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../shared/pipes.module */ 5421);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ 22560);









class HomePageModule {
  static {
    this.ɵfac = function HomePageModule_Factory(t) {
      return new (t || HomePageModule)();
    };
  }
  static {
    this.ɵmod = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵdefineNgModule"]({
      type: HomePageModule
    });
  }
  static {
    this.ɵinj = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵdefineInjector"]({
      imports: [_angular_common__WEBPACK_IMPORTED_MODULE_4__.CommonModule, _angular_forms__WEBPACK_IMPORTED_MODULE_5__.FormsModule, _ionic_angular__WEBPACK_IMPORTED_MODULE_6__.IonicModule, _shared_pipes_module__WEBPACK_IMPORTED_MODULE_2__.PipesModule, _angular_router__WEBPACK_IMPORTED_MODULE_7__.RouterModule.forChild([{
        path: '',
        component: _home_page__WEBPACK_IMPORTED_MODULE_0__.HomePage
      }, {
        path: 'new-instance',
        component: _modals_new_instance_page__WEBPACK_IMPORTED_MODULE_1__.NewInstancePage
      }])]
    });
  }
}
(function () {
  (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵsetNgModuleScope"](HomePageModule, {
    declarations: [_home_page__WEBPACK_IMPORTED_MODULE_0__.HomePage, _modals_new_instance_page__WEBPACK_IMPORTED_MODULE_1__.NewInstancePage],
    imports: [_angular_common__WEBPACK_IMPORTED_MODULE_4__.CommonModule, _angular_forms__WEBPACK_IMPORTED_MODULE_5__.FormsModule, _ionic_angular__WEBPACK_IMPORTED_MODULE_6__.IonicModule, _shared_pipes_module__WEBPACK_IMPORTED_MODULE_2__.PipesModule, _angular_router__WEBPACK_IMPORTED_MODULE_7__.RouterModule]
  });
})();

/***/ }),

/***/ 85295:
/*!************************************!*\
  !*** ./src/core/home/home.page.ts ***!
  \************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "HomePage": () => (/* binding */ HomePage)
/* harmony export */ });
/* harmony import */ var _opt_atlassian_pipelines_agent_build_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/esm/asyncToGenerator.js */ 71670);
/* harmony import */ var _modals_new_instance_page__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./modals/new-instance.page */ 38937);
/* harmony import */ var _environments_environment__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../environments/environment */ 92340);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/core */ 22560);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/router */ 60124);
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @ionic/angular */ 93819);
/* harmony import */ var _shared__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../shared */ 8987);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @angular/common */ 94666);
/* harmony import */ var _shared_shared_pipe__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../shared/shared.pipe */ 64221);









function HomePage_ion_card_12_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](0, "ion-card", 7)(1, "ion-card-header")(2, "ion-card-title");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](3, "Welcome !");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](4, "ion-card-subtitle");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](5, "It looks like you do not have any data. ");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](6, "ion-card-content")(7, "p");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](8, "Please contact our ");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](9, "a", 8);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](10, "sales team @radartorain");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](11, " to go further.");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]()()();
  }
}
function HomePage_div_13_ion_item_sliding_6_ion_icon_2_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelement"](0, "ion-icon", 17);
  }
}
function HomePage_div_13_ion_item_sliding_6_ion_icon_4_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelement"](0, "ion-icon", 18);
  }
}
function HomePage_div_13_ion_item_sliding_6_Template(rf, ctx) {
  if (rf & 1) {
    const _r9 = _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](0, "ion-item-sliding")(1, "ion-item", 10);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵlistener"]("click", function HomePage_div_13_ion_item_sliding_6_Template_ion_item_click_1_listener() {
      const restoredCtx = _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵrestoreView"](_r9);
      const item_r5 = restoredCtx.$implicit;
      const ctx_r8 = _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵnextContext"](2);
      return _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵresetView"](ctx_r8.clickOnRain(item_r5));
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtemplate"](2, HomePage_div_13_ion_item_sliding_6_ion_icon_2_Template, 1, 0, "ion-icon", 11);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵpipe"](3, "hasGoodQuality");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtemplate"](4, HomePage_div_13_ion_item_sliding_6_ion_icon_4_Template, 1, 0, "ion-icon", 12);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵpipe"](5, "hasGoodQuality");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](6, "span", 13);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](7);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelement"](8, "ion-progress-bar", 14);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵpipe"](9, "progressBuffer");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵpipe"](10, "progressValue");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelement"](11, "ion-icon", 15)(12, "ion-icon", 16);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]()();
  }
  if (rf & 2) {
    const item_r5 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵproperty"]("ngIf", _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵpipeBind1"](3, 5, item_r5));
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵproperty"]("ngIf", !_angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵpipeBind1"](5, 7, item_r5));
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtextInterpolate"](item_r5.name);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵpropertyInterpolate"]("buffer", _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵpipeBind1"](9, 9, item_r5));
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵpropertyInterpolate"]("value", _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵpipeBind1"](10, 11, item_r5));
  }
}
function HomePage_div_13_ion_item_sliding_13_ion_icon_2_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelement"](0, "ion-icon", 17);
  }
}
function HomePage_div_13_ion_item_sliding_13_ion_icon_4_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelement"](0, "ion-icon", 18);
  }
}
function HomePage_div_13_ion_item_sliding_13_Template(rf, ctx) {
  if (rf & 1) {
    const _r14 = _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](0, "ion-item-sliding")(1, "ion-item", 10);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵlistener"]("click", function HomePage_div_13_ion_item_sliding_13_Template_ion_item_click_1_listener() {
      const restoredCtx = _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵrestoreView"](_r14);
      const item_r10 = restoredCtx.$implicit;
      const ctx_r13 = _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵnextContext"](2);
      return _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵresetView"](ctx_r13.clickOnRain(item_r10));
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtemplate"](2, HomePage_div_13_ion_item_sliding_13_ion_icon_2_Template, 1, 0, "ion-icon", 11);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵpipe"](3, "hasGoodQuality");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtemplate"](4, HomePage_div_13_ion_item_sliding_13_ion_icon_4_Template, 1, 0, "ion-icon", 12);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵpipe"](5, "hasGoodQuality");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](6, "span", 13);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](7);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelement"](8, "ion-progress-bar", 14);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵpipe"](9, "progressBuffer");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵpipe"](10, "progressValue");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelement"](11, "ion-icon", 19);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]()();
  }
  if (rf & 2) {
    const item_r10 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵproperty"]("ngIf", _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵpipeBind1"](3, 5, item_r10));
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵproperty"]("ngIf", !_angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵpipeBind1"](5, 7, item_r10));
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtextInterpolate"](item_r10.name);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵpropertyInterpolate"]("buffer", _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵpipeBind1"](9, 9, item_r10));
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵpropertyInterpolate"]("value", _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵpipeBind1"](10, 11, item_r10));
  }
}
function HomePage_div_13_ion_item_sliding_15_ion_icon_2_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelement"](0, "ion-icon", 17);
  }
}
function HomePage_div_13_ion_item_sliding_15_ion_icon_4_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelement"](0, "ion-icon", 18);
  }
}
function HomePage_div_13_ion_item_sliding_15_Template(rf, ctx) {
  if (rf & 1) {
    const _r19 = _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](0, "ion-item-sliding")(1, "ion-item", 10);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵlistener"]("click", function HomePage_div_13_ion_item_sliding_15_Template_ion_item_click_1_listener() {
      const restoredCtx = _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵrestoreView"](_r19);
      const item_r15 = restoredCtx.$implicit;
      const ctx_r18 = _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵnextContext"](2);
      return _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵresetView"](ctx_r18.clickOnRain(item_r15));
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtemplate"](2, HomePage_div_13_ion_item_sliding_15_ion_icon_2_Template, 1, 0, "ion-icon", 11);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵpipe"](3, "hasGoodQuality");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtemplate"](4, HomePage_div_13_ion_item_sliding_15_ion_icon_4_Template, 1, 0, "ion-icon", 12);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵpipe"](5, "hasGoodQuality");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](6, "span", 13);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](7);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelement"](8, "ion-icon", 20);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]()();
  }
  if (rf & 2) {
    const item_r15 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵproperty"]("ngIf", _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵpipeBind1"](3, 3, item_r15));
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵproperty"]("ngIf", !_angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵpipeBind1"](5, 5, item_r15));
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtextInterpolate"](item_r15.name);
  }
}
function HomePage_div_13_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](0, "div")(1, "ion-card")(2, "ion-card-header")(3, "ion-card-title");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](4, "Rain zones ready");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](5, "ion-list");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtemplate"](6, HomePage_div_13_ion_item_sliding_6_Template, 13, 13, "ion-item-sliding", 9);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵpipe"](7, "areReady");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](8, "ion-card")(9, "ion-card-header")(10, "ion-card-title");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](11, "Rain zones in progress");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](12, "ion-list");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtemplate"](13, HomePage_div_13_ion_item_sliding_13_Template, 12, 13, "ion-item-sliding", 9);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵpipe"](14, "areInProgress");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtemplate"](15, HomePage_div_13_ion_item_sliding_15_Template, 9, 7, "ion-item-sliding", 9);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵpipe"](16, "areStopped");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]()()();
  }
  if (rf & 2) {
    const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](6);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵproperty"]("ngForOf", _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵpipeBind1"](7, 3, ctx_r1.rains));
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](7);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵproperty"]("ngForOf", _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵpipeBind1"](14, 5, ctx_r1.rains));
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵproperty"]("ngForOf", _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵpipeBind1"](16, 7, ctx_r1.rains));
  }
}
class HomePage {
  constructor(router, modalController, profile) {
    this.router = router;
    this.modalController = modalController;
    this.profile = profile;
    this.refreshInProgress = false;
    this.homeInfoAlreadyViewed = {};
    this.rains = [];
    this.radars = [];
    this.appVersion = _environments_environment__WEBPACK_IMPORTED_MODULE_2__.environment.version;
    this.refresh();
  }
  ngAfterViewInit() {
    this.refresh();
  }
  closeInfo(windowName) {
    var _this = this;
    return (0,_opt_atlassian_pipelines_agent_build_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_0__["default"])(function* () {
      _this.homeInfoAlreadyViewed[windowName] = true;
      if (!_this.sessionData || !_this.sessionData.infos) {
        return;
      }
      _this.sessionData.infos.homeInfoAlreadyViewed = _this.homeInfoAlreadyViewed;
      yield _this.profile.storeAll();
    })();
  }
  clickOnNotifications() {
    var _this2 = this;
    return (0,_opt_atlassian_pipelines_agent_build_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_0__["default"])(function* () {
      return _this2.router.navigate(['/events']);
    })();
  }
  clickOnRain(rain) {
    var _this3 = this;
    return (0,_opt_atlassian_pipelines_agent_build_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_0__["default"])(function* () {
      return _this3.router.navigate(['/rains', rain.id]);
    })();
  }
  presentModal() {
    var _this4 = this;
    return (0,_opt_atlassian_pipelines_agent_build_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_0__["default"])(function* () {
      const modal = yield _this4.modalController.create({
        component: _modals_new_instance_page__WEBPACK_IMPORTED_MODULE_1__.NewInstancePage,
        componentProps: {
          value: 123
        }
      });
      yield modal.present();
      const {
        data
      } = yield modal.onDidDismiss();
    })();
  }
  refresh(event) {
    var _this5 = this;
    return (0,_opt_atlassian_pipelines_agent_build_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_0__["default"])(function* () {
      _this5.refreshInProgress = true;
      try {
        _this5.sessionData = yield _this5.profile.refreshProfile();
        if (_this5.sessionData.infos.homeInfoAlreadyViewed) {
          _this5.homeInfoAlreadyViewed = _this5.sessionData.infos.homeInfoAlreadyViewed;
        }
        _this5.rains = yield _this5.profile.getRains();
        _this5.radars = yield _this5.profile.getLonelyRadars(_this5.rains);
      } catch (e) {
        console.error('refresh pb:', e);
      }
      if (event) {
        event.target.complete();
      }
      _this5.refreshInProgress = false;
      if (!_this5.profile.isLoggedIn()) {
        return _this5.profile.gotoLout();
      }
    })();
  }
  static {
    this.ɵfac = function HomePage_Factory(t) {
      return new (t || HomePage)(_angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_6__.Router), _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵdirectiveInject"](_ionic_angular__WEBPACK_IMPORTED_MODULE_7__.ModalController), _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵdirectiveInject"](_shared__WEBPACK_IMPORTED_MODULE_3__.ProfileService));
    };
  }
  static {
    this.ɵcmp = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵdefineComponent"]({
      type: HomePage,
      selectors: [["app-home"]],
      decls: 14,
      vars: 3,
      consts: [["slot", "start"], ["src", "assets/icon/favicon.ico", 2, "height", "30px", "padding-left", "20px"], [3, "hidden"], ["type", "indeterminate"], ["slot", "fixed", 3, "ionRefresh"], ["class", "welcome-card", 4, "ngIf"], [4, "ngIf"], [1, "welcome-card"], ["href", "mailto:sales@radartorain.com"], [4, "ngFor", "ngForOf"], [3, "click"], ["color", "success", "name", "radio-button-off", "slot", "start", 4, "ngIf"], ["color", "warning", "name", "radio-button-off", "slot", "start", 4, "ngIf"], [2, "min-width", "200px"], ["color", "primary", 3, "buffer", "value"], ["color", "primary", "name", "cloud-done", "slot", "end"], ["color", "primary", "name", "arrow-right", "slot", "end"], ["color", "success", "name", "radio-button-off", "slot", "start"], ["color", "warning", "name", "radio-button-off", "slot", "start"], ["name", "cloud-upload", "slot", "end"], ["name", "cloud-outline", "slot", "end"]],
      template: function HomePage_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](0, "ion-header")(1, "ion-toolbar")(2, "ion-buttons", 0);
          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelement"](3, "ion-menu-button")(4, "ion-img", 1);
          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](5, "ion-title");
          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](6, " Dashboard ");
          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]()();
          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](7, "div", 2);
          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelement"](8, "ion-progress-bar", 3);
          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]()();
          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](9, "ion-content")(10, "ion-refresher", 4);
          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵlistener"]("ionRefresh", function HomePage_Template_ion_refresher_ionRefresh_10_listener($event) {
            return ctx.refresh($event);
          });
          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelement"](11, "ion-refresher-content");
          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtemplate"](12, HomePage_ion_card_12_Template, 12, 0, "ion-card", 5);
          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtemplate"](13, HomePage_div_13_Template, 17, 9, "div", 6);
          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
        }
        if (rf & 2) {
          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](7);
          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵproperty"]("hidden", !ctx.refreshInProgress);
          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](5);
          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵproperty"]("ngIf", ctx.rains.length === 0);
          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](1);
          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵproperty"]("ngIf", ctx.rains.length);
        }
      },
      dependencies: [_angular_common__WEBPACK_IMPORTED_MODULE_8__.NgForOf, _angular_common__WEBPACK_IMPORTED_MODULE_8__.NgIf, _ionic_angular__WEBPACK_IMPORTED_MODULE_7__.IonButtons, _ionic_angular__WEBPACK_IMPORTED_MODULE_7__.IonCard, _ionic_angular__WEBPACK_IMPORTED_MODULE_7__.IonCardContent, _ionic_angular__WEBPACK_IMPORTED_MODULE_7__.IonCardHeader, _ionic_angular__WEBPACK_IMPORTED_MODULE_7__.IonCardSubtitle, _ionic_angular__WEBPACK_IMPORTED_MODULE_7__.IonCardTitle, _ionic_angular__WEBPACK_IMPORTED_MODULE_7__.IonContent, _ionic_angular__WEBPACK_IMPORTED_MODULE_7__.IonHeader, _ionic_angular__WEBPACK_IMPORTED_MODULE_7__.IonIcon, _ionic_angular__WEBPACK_IMPORTED_MODULE_7__.IonImg, _ionic_angular__WEBPACK_IMPORTED_MODULE_7__.IonItem, _ionic_angular__WEBPACK_IMPORTED_MODULE_7__.IonItemSliding, _ionic_angular__WEBPACK_IMPORTED_MODULE_7__.IonList, _ionic_angular__WEBPACK_IMPORTED_MODULE_7__.IonMenuButton, _ionic_angular__WEBPACK_IMPORTED_MODULE_7__.IonProgressBar, _ionic_angular__WEBPACK_IMPORTED_MODULE_7__.IonRefresher, _ionic_angular__WEBPACK_IMPORTED_MODULE_7__.IonRefresherContent, _ionic_angular__WEBPACK_IMPORTED_MODULE_7__.IonToolbar, _ionic_angular__WEBPACK_IMPORTED_MODULE_7__.IonTitle, _shared_shared_pipe__WEBPACK_IMPORTED_MODULE_4__.AreStopped, _shared_shared_pipe__WEBPACK_IMPORTED_MODULE_4__.AreInProgressPipe, _shared_shared_pipe__WEBPACK_IMPORTED_MODULE_4__.AreReady, _shared_shared_pipe__WEBPACK_IMPORTED_MODULE_4__.HasGoodQuality, _shared_shared_pipe__WEBPACK_IMPORTED_MODULE_4__.ProgressValue, _shared_shared_pipe__WEBPACK_IMPORTED_MODULE_4__.ProgressBuffer],
      styles: [".welcome-card[_ngcontent-%COMP%]   ion-img[_ngcontent-%COMP%] {\n  max-height: 35vh;\n  overflow: hidden;\n}\n\n.card-perf-bar[_ngcontent-%COMP%] {\n  height: 220px;\n  min-width: 180px;\n}\n\n.card-perf-lines[_ngcontent-%COMP%] {\n  min-width: 250px;\n}\n/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8uL3NyYy9jb3JlL2hvbWUvaG9tZS5wYWdlLnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFDRSxnQkFBQTtFQUNBLGdCQUFBO0FBQ0Y7O0FBTUE7RUFDRSxhQUFBO0VBQ0EsZ0JBQUE7QUFIRjs7QUFNQTtFQUNFLGdCQUFBO0FBSEYiLCJzb3VyY2VzQ29udGVudCI6WyIud2VsY29tZS1jYXJkIGlvbi1pbWcge1xuICBtYXgtaGVpZ2h0OiAzNXZoO1xuICBvdmVyZmxvdzogaGlkZGVuO1xufVxuXG4jY2FyZC1wZXJmLWNvbnRhaW5lciB7XG4gIC8vIGRpc3BsYXk6IGZsZXg7XG59XG5cbi5jYXJkLXBlcmYtYmFyIHtcbiAgaGVpZ2h0OiAyMjBweDtcbiAgbWluLXdpZHRoOiAxODBweDtcbn1cblxuLmNhcmQtcGVyZi1saW5lcyB7XG4gIG1pbi13aWR0aDogMjUwcHg7XG59XG4iXSwic291cmNlUm9vdCI6IiJ9 */"]
    });
  }
}

/***/ }),

/***/ 38937:
/*!***************************************************!*\
  !*** ./src/core/home/modals/new-instance.page.ts ***!
  \***************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "NewInstancePage": () => (/* binding */ NewInstancePage)
/* harmony export */ });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ 22560);
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @ionic/angular */ 93819);


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
      decls: 6,
      vars: 0,
      consts: [["padding", ""]],
      template: function NewInstancePage_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "ion-content", 0)(1, "ion-card")(2, "ion-card-header")(3, "ion-card-title");
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](4, "Connect your RadarToRain instance");
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]()();
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](5, "ion-card-content");
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]()();
        }
      },
      dependencies: [_ionic_angular__WEBPACK_IMPORTED_MODULE_1__.IonCard, _ionic_angular__WEBPACK_IMPORTED_MODULE_1__.IonCardContent, _ionic_angular__WEBPACK_IMPORTED_MODULE_1__.IonCardHeader, _ionic_angular__WEBPACK_IMPORTED_MODULE_1__.IonCardTitle, _ionic_angular__WEBPACK_IMPORTED_MODULE_1__.IonContent],
      encapsulation: 2
    });
  }
}

/***/ })

}]);
//# sourceMappingURL=6653.c10946aa66e82aae.js.map