"use strict";
(self["webpackChunkapp"] = self["webpackChunkapp"] || []).push([[749],{

/***/ 40749:
/*!************************************************************!*\
  !*** ./node_modules/@ionic/core/dist/esm/ion-img.entry.js ***!
  \************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "ion_img": () => (/* binding */ Img)
/* harmony export */ });
/* harmony import */ var _index_8e692445_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./index-8e692445.js */ 91559);
/* harmony import */ var _ionic_global_c74e4951_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./ionic-global-c74e4951.js */ 95823);
/* harmony import */ var _helpers_3b390e48_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./helpers-3b390e48.js */ 29259);
/*!
 * (C) Ionic http://ionicframework.com - MIT License
 */



const imgCss = ":host{display:block;-o-object-fit:contain;object-fit:contain}img{display:block;width:100%;height:100%;-o-object-fit:inherit;object-fit:inherit;-o-object-position:inherit;object-position:inherit}";
const Img = class {
  constructor(hostRef) {
    (0,_index_8e692445_js__WEBPACK_IMPORTED_MODULE_0__.r)(this, hostRef);
    this.ionImgWillLoad = (0,_index_8e692445_js__WEBPACK_IMPORTED_MODULE_0__.e)(this, "ionImgWillLoad", 7);
    this.ionImgDidLoad = (0,_index_8e692445_js__WEBPACK_IMPORTED_MODULE_0__.e)(this, "ionImgDidLoad", 7);
    this.ionError = (0,_index_8e692445_js__WEBPACK_IMPORTED_MODULE_0__.e)(this, "ionError", 7);
    this.inheritedAttributes = {};
    this.onLoad = () => {
      this.ionImgDidLoad.emit();
    };
    this.onError = () => {
      this.ionError.emit();
    };
  }
  srcChanged() {
    this.addIO();
  }
  componentWillLoad() {
    this.inheritedAttributes = (0,_helpers_3b390e48_js__WEBPACK_IMPORTED_MODULE_2__.j)(this.el, ['draggable']);
  }
  componentDidLoad() {
    this.addIO();
  }
  addIO() {
    if (this.src === undefined) {
      return;
    }
    if (typeof window !== 'undefined' && 'IntersectionObserver' in window && 'IntersectionObserverEntry' in window && 'isIntersecting' in window.IntersectionObserverEntry.prototype) {
      this.removeIO();
      this.io = new IntersectionObserver(data => {
        /**
         * On slower devices, it is possible for an intersection observer entry to contain multiple
         * objects in the array. This happens when quickly scrolling an image into view and then out of
         * view. In this case, the last object represents the current state of the component.
         */
        if (data[data.length - 1].isIntersecting) {
          this.load();
          this.removeIO();
        }
      });
      this.io.observe(this.el);
    } else {
      // fall back to setTimeout for Safari and IE
      setTimeout(() => this.load(), 200);
    }
  }
  load() {
    this.loadError = this.onError;
    this.loadSrc = this.src;
    this.ionImgWillLoad.emit();
  }
  removeIO() {
    if (this.io) {
      this.io.disconnect();
      this.io = undefined;
    }
  }
  render() {
    const {
      loadSrc,
      alt,
      onLoad,
      loadError,
      inheritedAttributes
    } = this;
    const {
      draggable
    } = inheritedAttributes;
    return (0,_index_8e692445_js__WEBPACK_IMPORTED_MODULE_0__.h)(_index_8e692445_js__WEBPACK_IMPORTED_MODULE_0__.H, {
      class: (0,_ionic_global_c74e4951_js__WEBPACK_IMPORTED_MODULE_1__.b)(this)
    }, (0,_index_8e692445_js__WEBPACK_IMPORTED_MODULE_0__.h)("img", {
      decoding: "async",
      src: loadSrc,
      alt: alt,
      onLoad: onLoad,
      onError: loadError,
      part: "image",
      draggable: isDraggable(draggable)
    }));
  }
  get el() {
    return (0,_index_8e692445_js__WEBPACK_IMPORTED_MODULE_0__.i)(this);
  }
  static get watchers() {
    return {
      "src": ["srcChanged"]
    };
  }
};
/**
 * Enumerated strings must be set as booleans
 * as Stencil will not render 'false' in the DOM.
 * The need to explicitly render draggable="true"
 * as only certain elements are draggable by default.
 * https://developer.mozilla.org/en-US/docs/Web/HTML/Global_attributes/draggable.
 */
const isDraggable = draggable => {
  switch (draggable) {
    case 'true':
      return true;
    case 'false':
      return false;
    default:
      return undefined;
  }
};
Img.style = imgCss;


/***/ })

}]);
//# sourceMappingURL=749.8754295862136e5f.js.map