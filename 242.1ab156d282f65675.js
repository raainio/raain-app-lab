"use strict";
(self["webpackChunkapp"] = self["webpackChunkapp"] || []).push([[242],{

/***/ 70242:
/*!********************************************!*\
  !*** ./src/core/profile/profile.module.ts ***!
  \********************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "ProfilePageModule": () => (/* binding */ ProfilePageModule)
/* harmony export */ });
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ 94666);
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ 2508);
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @ionic/angular */ 93819);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/router */ 60124);
/* harmony import */ var _profile_page__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./profile.page */ 82778);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ 22560);







const RouteConfig = [{
  path: '',
  children: [{
    path: '',
    component: _profile_page__WEBPACK_IMPORTED_MODULE_0__.ProfilePage
  }]
}];
class ProfilePageModule {
  static {
    this.ɵfac = function ProfilePageModule_Factory(t) {
      return new (t || ProfilePageModule)();
    };
  }
  static {
    this.ɵmod = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineNgModule"]({
      type: ProfilePageModule
    });
  }
  static {
    this.ɵinj = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineInjector"]({
      imports: [_angular_common__WEBPACK_IMPORTED_MODULE_2__.CommonModule, _angular_forms__WEBPACK_IMPORTED_MODULE_3__.FormsModule, _ionic_angular__WEBPACK_IMPORTED_MODULE_4__.IonicModule, _angular_router__WEBPACK_IMPORTED_MODULE_5__.RouterModule.forChild(RouteConfig)]
    });
  }
}
(function () {
  (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵsetNgModuleScope"](ProfilePageModule, {
    declarations: [_profile_page__WEBPACK_IMPORTED_MODULE_0__.ProfilePage],
    imports: [_angular_common__WEBPACK_IMPORTED_MODULE_2__.CommonModule, _angular_forms__WEBPACK_IMPORTED_MODULE_3__.FormsModule, _ionic_angular__WEBPACK_IMPORTED_MODULE_4__.IonicModule, _angular_router__WEBPACK_IMPORTED_MODULE_5__.RouterModule]
  });
})();

/***/ }),

/***/ 82778:
/*!******************************************!*\
  !*** ./src/core/profile/profile.page.ts ***!
  \******************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "ProfilePage": () => (/* binding */ ProfilePage)
/* harmony export */ });
/* harmony import */ var _opt_atlassian_pipelines_agent_build_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/esm/asyncToGenerator.js */ 71670);
/* harmony import */ var _environments_environment__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../environments/environment */ 92340);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ 22560);
/* harmony import */ var _shared__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../shared */ 8987);
/* harmony import */ var fidj_angular__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! fidj-angular */ 39807);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/common */ 94666);
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @ionic/angular */ 93819);







function ProfilePage_ion_chip_34_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](0, "ion-chip", 21);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
  }
  if (rf & 2) {
    const role_r2 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtextInterpolate1"](" ", role_r2, " ");
  }
}
function ProfilePage_ion_chip_35_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](0, "ion-chip", 22);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](1, "No roles assigned");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
  }
}
class ProfilePage {
  constructor(profile, fidjService) {
    this.profile = profile;
    this.fidjService = fidjService;
    this.appVersion = _environments_environment__WEBPACK_IMPORTED_MODULE_1__.environment.version;
    this.errors = [];
    this.results = [];
    this.apiVersion = 'NA';
    this.apiUrl = 'NA';
    this.roles = [];
  }
  get defaultEndpointUrl() {
    return this.profile.defaultUrlForAPI;
  }
  get endpointUrl() {
    return this.endpointInterfaces && this.endpointInterfaces.length > 0 ? this.endpointInterfaces[0] : null;
  }
  ngOnInit() {
    this.refresh();
  }
  refresh() {
    var _this = this;
    return (0,_opt_atlassian_pipelines_agent_build_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_0__["default"])(function* () {
      try {
        yield _this.profile.refreshProfile();
      } catch (e) {
        console.error('refresh pb:', e);
      }
      if (!_this.profile.isLoggedIn()) {
        return _this.profile.gotoLout();
      }
      _this.endpointInterfaces = yield _this.fidjService.getEndpoints();
      _this.roles = yield _this.fidjService.getRoles();
      _this.email = _this.profile.getEmail();
    })();
  }
  static {
    this.ɵfac = function ProfilePage_Factory(t) {
      return new (t || ProfilePage)(_angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵdirectiveInject"](_shared__WEBPACK_IMPORTED_MODULE_2__.ProfileService), _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵdirectiveInject"](fidj_angular__WEBPACK_IMPORTED_MODULE_4__.FidjService));
    };
  }
  static {
    this.ɵcmp = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵdefineComponent"]({
      type: ProfilePage,
      selectors: [["app-profile"]],
      decls: 71,
      vars: 8,
      consts: [["slot", "start"], ["src", "assets/icon/favicon.ico", 2, "height", "30px", "padding-left", "20px"], [1, "ion-padding"], ["slot", "fixed", 3, "ionRefresh"], [1, "profile-container"], [1, "profile-card"], [1, "profile-avatar"], ["name", "person-circle", "size", "large"], [1, "ion-text-center"], ["lines", "none"], ["name", "mail-outline", "slot", "start", "color", "primary"], ["name", "shield-outline", "slot", "start", "color", "primary"], ["outline", "", "color", "primary", "class", "ion-margin-end", 4, "ngFor", "ngForOf"], ["outline", "", "color", "medium", 4, "ngIf"], ["name", "link-outline", "slot", "start", "color", "primary"], [1, "endpoint-url"], [1, "system-info-card"], ["name", "information-circle-outline", "color", "primary"], ["name", "code-outline", "slot", "start", "color", "primary"], ["name", "server-outline", "slot", "start", "color", "primary"], ["name", "globe-outline", "slot", "start", "color", "primary"], ["outline", "", "color", "primary", 1, "ion-margin-end"], ["outline", "", "color", "medium"]],
      template: function ProfilePage_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](0, "ion-header")(1, "ion-toolbar")(2, "ion-buttons", 0);
          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelement"](3, "ion-menu-button")(4, "ion-img", 1);
          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](5, "ion-title");
          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](6, " Profile ");
          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]()()();
          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](7, "ion-content", 2)(8, "ion-refresher", 3);
          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵlistener"]("ionRefresh", function ProfilePage_Template_ion_refresher_ionRefresh_8_listener() {
            return ctx.refresh();
          });
          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelement"](9, "ion-refresher-content");
          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](10, "div", 4)(11, "ion-card", 5)(12, "ion-card-header")(13, "ion-avatar", 6);
          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelement"](14, "ion-icon", 7);
          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](15, "ion-card-title", 8);
          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](16);
          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](17, "ion-card-subtitle", 8);
          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](18, "User Account");
          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]()();
          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](19, "ion-card-content")(20, "ion-list", 9)(21, "ion-item");
          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelement"](22, "ion-icon", 10);
          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](23, "ion-label")(24, "h2");
          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](25, "Email");
          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](26, "p");
          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](27);
          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]()()();
          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](28, "ion-item");
          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelement"](29, "ion-icon", 11);
          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](30, "ion-label")(31, "h2");
          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](32, "Roles");
          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](33, "p");
          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtemplate"](34, ProfilePage_ion_chip_34_Template, 2, 1, "ion-chip", 12);
          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtemplate"](35, ProfilePage_ion_chip_35_Template, 2, 0, "ion-chip", 13);
          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]()()();
          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](36, "ion-item");
          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelement"](37, "ion-icon", 14);
          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](38, "ion-label")(39, "h2");
          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](40, "API Endpoint");
          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](41, "p", 15);
          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](42);
          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]()()()()()();
          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](43, "ion-card", 16)(44, "ion-card-header")(45, "ion-card-title");
          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelement"](46, "ion-icon", 17);
          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](47, " System Information ");
          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]()();
          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](48, "ion-card-content")(49, "ion-list", 9)(50, "ion-item");
          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelement"](51, "ion-icon", 18);
          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](52, "ion-label")(53, "h2");
          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](54, "App Version");
          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](55, "p");
          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](56);
          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]()()();
          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](57, "ion-item");
          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelement"](58, "ion-icon", 19);
          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](59, "ion-label")(60, "h2");
          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](61, "API Version");
          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](62, "p");
          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](63);
          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]()()();
          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](64, "ion-item");
          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelement"](65, "ion-icon", 20);
          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](66, "ion-label")(67, "h2");
          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](68, "API URL");
          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](69, "p");
          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](70);
          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]()()()()()()()();
        }
        if (rf & 2) {
          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](16);
          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtextInterpolate"](ctx.email);
          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](11);
          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtextInterpolate"](ctx.email);
          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](7);
          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("ngForOf", ctx.roles);
          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](1);
          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("ngIf", !ctx.roles || ctx.roles.length === 0);
          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](7);
          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtextInterpolate"](ctx.defaultEndpointUrl);
          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](14);
          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtextInterpolate"](ctx.appVersion);
          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](7);
          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtextInterpolate"](ctx.apiVersion);
          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](7);
          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtextInterpolate"](ctx.apiUrl);
        }
      },
      dependencies: [_angular_common__WEBPACK_IMPORTED_MODULE_5__.NgForOf, _angular_common__WEBPACK_IMPORTED_MODULE_5__.NgIf, _ionic_angular__WEBPACK_IMPORTED_MODULE_6__.IonAvatar, _ionic_angular__WEBPACK_IMPORTED_MODULE_6__.IonButtons, _ionic_angular__WEBPACK_IMPORTED_MODULE_6__.IonCard, _ionic_angular__WEBPACK_IMPORTED_MODULE_6__.IonCardContent, _ionic_angular__WEBPACK_IMPORTED_MODULE_6__.IonCardHeader, _ionic_angular__WEBPACK_IMPORTED_MODULE_6__.IonCardSubtitle, _ionic_angular__WEBPACK_IMPORTED_MODULE_6__.IonCardTitle, _ionic_angular__WEBPACK_IMPORTED_MODULE_6__.IonChip, _ionic_angular__WEBPACK_IMPORTED_MODULE_6__.IonContent, _ionic_angular__WEBPACK_IMPORTED_MODULE_6__.IonHeader, _ionic_angular__WEBPACK_IMPORTED_MODULE_6__.IonIcon, _ionic_angular__WEBPACK_IMPORTED_MODULE_6__.IonImg, _ionic_angular__WEBPACK_IMPORTED_MODULE_6__.IonItem, _ionic_angular__WEBPACK_IMPORTED_MODULE_6__.IonLabel, _ionic_angular__WEBPACK_IMPORTED_MODULE_6__.IonList, _ionic_angular__WEBPACK_IMPORTED_MODULE_6__.IonMenuButton, _ionic_angular__WEBPACK_IMPORTED_MODULE_6__.IonRefresher, _ionic_angular__WEBPACK_IMPORTED_MODULE_6__.IonRefresherContent, _ionic_angular__WEBPACK_IMPORTED_MODULE_6__.IonToolbar, _ionic_angular__WEBPACK_IMPORTED_MODULE_6__.IonTitle],
      styles: [".profile-container[_ngcontent-%COMP%] {\n  max-width: 800px;\n  margin: 0 auto;\n  padding: 16px;\n}\n\n.profile-card[_ngcontent-%COMP%] {\n  margin-bottom: 24px;\n}\n\n.profile-avatar[_ngcontent-%COMP%] {\n  width: 100px;\n  height: 100px;\n  margin: 0 auto 16px;\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  background-color: var(--ion-color-light);\n}\n.profile-avatar[_ngcontent-%COMP%]   ion-icon[_ngcontent-%COMP%] {\n  font-size: 80px;\n  color: var(--ion-color-primary);\n}\n\nion-card-title[_ngcontent-%COMP%] {\n  font-size: 1.5rem;\n  font-weight: 600;\n}\n\nion-card-subtitle[_ngcontent-%COMP%] {\n  font-size: 1rem;\n  margin-bottom: 16px;\n}\n\nion-list[_ngcontent-%COMP%] {\n  background: transparent;\n}\n\nion-item[_ngcontent-%COMP%] {\n  --padding-start: 0;\n  --inner-padding-end: 0;\n  --background: transparent;\n  margin-bottom: 16px;\n}\nion-item[_ngcontent-%COMP%]   ion-icon[_ngcontent-%COMP%] {\n  font-size: 24px;\n  margin-right: 16px;\n}\nion-item[_ngcontent-%COMP%]   h2[_ngcontent-%COMP%] {\n  font-weight: 600;\n  font-size: 1rem;\n  color: var(--ion-color-dark);\n  margin: 0 0 4px 0;\n}\nion-item[_ngcontent-%COMP%]   p[_ngcontent-%COMP%] {\n  font-size: 0.9rem;\n  color: var(--ion-color-medium);\n  margin: 0;\n  word-break: break-all;\n}\n\n.system-info-card[_ngcontent-%COMP%]   ion-card-title[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: center;\n  font-size: 1.2rem;\n}\n.system-info-card[_ngcontent-%COMP%]   ion-card-title[_ngcontent-%COMP%]   ion-icon[_ngcontent-%COMP%] {\n  margin-right: 8px;\n}\n\nion-chip[_ngcontent-%COMP%] {\n  --background: transparent;\n  --color: var(--ion-color-primary);\n  font-weight: 500;\n}\n\n.endpoint-url[_ngcontent-%COMP%] {\n  word-break: break-all;\n}\n\n@media (max-width: 576px) {\n  .profile-container[_ngcontent-%COMP%] {\n    padding: 0;\n  }\n  .profile-avatar[_ngcontent-%COMP%] {\n    width: 80px;\n    height: 80px;\n  }\n  .profile-avatar[_ngcontent-%COMP%]   ion-icon[_ngcontent-%COMP%] {\n    font-size: 60px;\n  }\n  ion-card-title[_ngcontent-%COMP%] {\n    font-size: 1.2rem;\n  }\n  ion-card-subtitle[_ngcontent-%COMP%] {\n    font-size: 0.9rem;\n  }\n}\n/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8uL3NyYy9jb3JlL3Byb2ZpbGUvcHJvZmlsZS5wYWdlLnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBRUE7RUFDRSxnQkFBQTtFQUNBLGNBQUE7RUFDQSxhQUFBO0FBREY7O0FBSUE7RUFDRSxtQkFBQTtBQURGOztBQUlBO0VBQ0UsWUFBQTtFQUNBLGFBQUE7RUFDQSxtQkFBQTtFQUNBLGFBQUE7RUFDQSxtQkFBQTtFQUNBLHVCQUFBO0VBQ0Esd0NBQUE7QUFERjtBQUdFO0VBQ0UsZUFBQTtFQUNBLCtCQUFBO0FBREo7O0FBS0E7RUFDRSxpQkFBQTtFQUNBLGdCQUFBO0FBRkY7O0FBS0E7RUFDRSxlQUFBO0VBQ0EsbUJBQUE7QUFGRjs7QUFLQTtFQUNFLHVCQUFBO0FBRkY7O0FBS0E7RUFDRSxrQkFBQTtFQUNBLHNCQUFBO0VBQ0EseUJBQUE7RUFDQSxtQkFBQTtBQUZGO0FBSUU7RUFDRSxlQUFBO0VBQ0Esa0JBQUE7QUFGSjtBQUtFO0VBQ0UsZ0JBQUE7RUFDQSxlQUFBO0VBQ0EsNEJBQUE7RUFDQSxpQkFBQTtBQUhKO0FBTUU7RUFDRSxpQkFBQTtFQUNBLDhCQUFBO0VBQ0EsU0FBQTtFQUNBLHFCQUFBO0FBSko7O0FBU0U7RUFDRSxhQUFBO0VBQ0EsbUJBQUE7RUFDQSxpQkFBQTtBQU5KO0FBUUk7RUFDRSxpQkFBQTtBQU5OOztBQVdBO0VBQ0UseUJBQUE7RUFDQSxpQ0FBQTtFQUNBLGdCQUFBO0FBUkY7O0FBV0E7RUFDRSxxQkFBQTtBQVJGOztBQVdBO0VBQ0U7SUFDRSxVQUFBO0VBUkY7RUFXQTtJQUNFLFdBQUE7SUFDQSxZQUFBO0VBVEY7RUFXRTtJQUNFLGVBQUE7RUFUSjtFQWFBO0lBQ0UsaUJBQUE7RUFYRjtFQWNBO0lBQ0UsaUJBQUE7RUFaRjtBQUNGIiwic291cmNlc0NvbnRlbnQiOlsiXG5cbi5wcm9maWxlLWNvbnRhaW5lciB7XG4gIG1heC13aWR0aDogODAwcHg7XG4gIG1hcmdpbjogMCBhdXRvO1xuICBwYWRkaW5nOiAxNnB4O1xufVxuXG4ucHJvZmlsZS1jYXJkIHtcbiAgbWFyZ2luLWJvdHRvbTogMjRweDtcbn1cblxuLnByb2ZpbGUtYXZhdGFyIHtcbiAgd2lkdGg6IDEwMHB4O1xuICBoZWlnaHQ6IDEwMHB4O1xuICBtYXJnaW46IDAgYXV0byAxNnB4O1xuICBkaXNwbGF5OiBmbGV4O1xuICBhbGlnbi1pdGVtczogY2VudGVyO1xuICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcbiAgYmFja2dyb3VuZC1jb2xvcjogdmFyKC0taW9uLWNvbG9yLWxpZ2h0KTtcblxuICBpb24taWNvbiB7XG4gICAgZm9udC1zaXplOiA4MHB4O1xuICAgIGNvbG9yOiB2YXIoLS1pb24tY29sb3ItcHJpbWFyeSk7XG4gIH1cbn1cblxuaW9uLWNhcmQtdGl0bGUge1xuICBmb250LXNpemU6IDEuNXJlbTtcbiAgZm9udC13ZWlnaHQ6IDYwMDtcbn1cblxuaW9uLWNhcmQtc3VidGl0bGUge1xuICBmb250LXNpemU6IDFyZW07XG4gIG1hcmdpbi1ib3R0b206IDE2cHg7XG59XG5cbmlvbi1saXN0IHtcbiAgYmFja2dyb3VuZDogdHJhbnNwYXJlbnQ7XG59XG5cbmlvbi1pdGVtIHtcbiAgLS1wYWRkaW5nLXN0YXJ0OiAwO1xuICAtLWlubmVyLXBhZGRpbmctZW5kOiAwO1xuICAtLWJhY2tncm91bmQ6IHRyYW5zcGFyZW50O1xuICBtYXJnaW4tYm90dG9tOiAxNnB4O1xuXG4gIGlvbi1pY29uIHtcbiAgICBmb250LXNpemU6IDI0cHg7XG4gICAgbWFyZ2luLXJpZ2h0OiAxNnB4O1xuICB9XG5cbiAgaDIge1xuICAgIGZvbnQtd2VpZ2h0OiA2MDA7XG4gICAgZm9udC1zaXplOiAxcmVtO1xuICAgIGNvbG9yOiB2YXIoLS1pb24tY29sb3ItZGFyayk7XG4gICAgbWFyZ2luOiAwIDAgNHB4IDA7XG4gIH1cblxuICBwIHtcbiAgICBmb250LXNpemU6IDAuOXJlbTtcbiAgICBjb2xvcjogdmFyKC0taW9uLWNvbG9yLW1lZGl1bSk7XG4gICAgbWFyZ2luOiAwO1xuICAgIHdvcmQtYnJlYWs6IGJyZWFrLWFsbDtcbiAgfVxufVxuXG4uc3lzdGVtLWluZm8tY2FyZCB7XG4gIGlvbi1jYXJkLXRpdGxlIHtcbiAgICBkaXNwbGF5OiBmbGV4O1xuICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG4gICAgZm9udC1zaXplOiAxLjJyZW07XG5cbiAgICBpb24taWNvbiB7XG4gICAgICBtYXJnaW4tcmlnaHQ6IDhweDtcbiAgICB9XG4gIH1cbn1cblxuaW9uLWNoaXAge1xuICAtLWJhY2tncm91bmQ6IHRyYW5zcGFyZW50O1xuICAtLWNvbG9yOiB2YXIoLS1pb24tY29sb3ItcHJpbWFyeSk7XG4gIGZvbnQtd2VpZ2h0OiA1MDA7XG59XG5cbi5lbmRwb2ludC11cmwge1xuICB3b3JkLWJyZWFrOiBicmVhay1hbGw7XG59XG5cbkBtZWRpYSAobWF4LXdpZHRoOiA1NzZweCkge1xuICAucHJvZmlsZS1jb250YWluZXIge1xuICAgIHBhZGRpbmc6IDA7XG4gIH1cblxuICAucHJvZmlsZS1hdmF0YXIge1xuICAgIHdpZHRoOiA4MHB4O1xuICAgIGhlaWdodDogODBweDtcblxuICAgIGlvbi1pY29uIHtcbiAgICAgIGZvbnQtc2l6ZTogNjBweDtcbiAgICB9XG4gIH1cblxuICBpb24tY2FyZC10aXRsZSB7XG4gICAgZm9udC1zaXplOiAxLjJyZW07XG4gIH1cblxuICBpb24tY2FyZC1zdWJ0aXRsZSB7XG4gICAgZm9udC1zaXplOiAwLjlyZW07XG4gIH1cbn1cbiJdLCJzb3VyY2VSb290IjoiIn0= */"]
    });
  }
}

/***/ })

}]);
//# sourceMappingURL=242.1ab156d282f65675.js.map