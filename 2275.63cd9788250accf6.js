"use strict";
(self["webpackChunkapp"] = self["webpackChunkapp"] || []).push([[2275],{

/***/ 32275:
/*!************************************************************************!*\
  !*** ./node_modules/@ionic/core/dist/esm/ion-picker-internal.entry.js ***!
  \************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "ion_picker_internal": () => (/* binding */ PickerInternal)
/* harmony export */ });
/* harmony import */ var _opt_atlassian_pipelines_agent_build_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/esm/asyncToGenerator.js */ 71670);
/* harmony import */ var _index_8e692445_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./index-8e692445.js */ 91559);
/* harmony import */ var _helpers_3b390e48_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./helpers-3b390e48.js */ 29259);

/*!
 * (C) Ionic http://ionicframework.com - MIT License
 */


const pickerInternalIosCss = ":host{display:-ms-flexbox;display:flex;position:relative;-ms-flex-align:center;align-items:center;-ms-flex-pack:center;justify-content:center;width:100%;height:200px;direction:ltr;z-index:0}:host .picker-before,:host .picker-after{position:absolute;width:100%;-webkit-transform:translateZ(0);transform:translateZ(0);z-index:1;pointer-events:none}:host .picker-before{left:0;top:0;height:83px}:host-context([dir=rtl]){left:unset;right:unset;right:0}:host .picker-after{left:0;top:116px;height:84px}:host-context([dir=rtl]){left:unset;right:unset;right:0}:host .picker-highlight{border-radius:8px;left:0;right:0;top:50%;bottom:0;margin-left:auto;margin-right:auto;margin-top:0;margin-bottom:0;position:absolute;width:calc(100% - 16px);height:34px;-webkit-transform:translateY(-50%);transform:translateY(-50%);z-index:-1}@supports ((-webkit-margin-start: 0) or (margin-inline-start: 0)) or (-webkit-margin-start: 0){:host .picker-highlight{margin-left:unset;margin-right:unset;-webkit-margin-start:auto;margin-inline-start:auto;-webkit-margin-end:auto;margin-inline-end:auto}}:host input{position:absolute;top:0;left:0;right:0;bottom:0;width:100%;height:100%;margin:0;padding:0;border:0;outline:0;clip:rect(0 0 0 0);opacity:0;overflow:hidden;-webkit-appearance:none;-moz-appearance:none}:host ::slotted(ion-picker-column-internal:first-of-type){text-align:start}:host ::slotted(ion-picker-column-internal:last-of-type){text-align:end}:host ::slotted(ion-picker-column-internal:only-child){text-align:center}:host .picker-before{background:-webkit-gradient(linear, left top, left bottom, color-stop(20%, var(--background, var(--ion-background-color, #fff))), to(rgba(var(--background-rgb, var(--ion-background-color-rgb, 255, 255, 255)), 0.8)));background:linear-gradient(to bottom, var(--background, var(--ion-background-color, #fff)) 20%, rgba(var(--background-rgb, var(--ion-background-color-rgb, 255, 255, 255)), 0.8) 100%)}:host .picker-after{background:-webkit-gradient(linear, left bottom, left top, color-stop(20%, var(--background, var(--ion-background-color, #fff))), to(rgba(var(--background-rgb, var(--ion-background-color-rgb, 255, 255, 255)), 0.8)));background:linear-gradient(to top, var(--background, var(--ion-background-color, #fff)) 20%, rgba(var(--background-rgb, var(--ion-background-color-rgb, 255, 255, 255)), 0.8) 100%)}:host .picker-highlight{background:var(--ion-color-step-150, #eeeeef)}";
const pickerInternalMdCss = ":host{display:-ms-flexbox;display:flex;position:relative;-ms-flex-align:center;align-items:center;-ms-flex-pack:center;justify-content:center;width:100%;height:200px;direction:ltr;z-index:0}:host .picker-before,:host .picker-after{position:absolute;width:100%;-webkit-transform:translateZ(0);transform:translateZ(0);z-index:1;pointer-events:none}:host .picker-before{left:0;top:0;height:83px}:host-context([dir=rtl]){left:unset;right:unset;right:0}:host .picker-after{left:0;top:116px;height:84px}:host-context([dir=rtl]){left:unset;right:unset;right:0}:host .picker-highlight{border-radius:8px;left:0;right:0;top:50%;bottom:0;margin-left:auto;margin-right:auto;margin-top:0;margin-bottom:0;position:absolute;width:calc(100% - 16px);height:34px;-webkit-transform:translateY(-50%);transform:translateY(-50%);z-index:-1}@supports ((-webkit-margin-start: 0) or (margin-inline-start: 0)) or (-webkit-margin-start: 0){:host .picker-highlight{margin-left:unset;margin-right:unset;-webkit-margin-start:auto;margin-inline-start:auto;-webkit-margin-end:auto;margin-inline-end:auto}}:host input{position:absolute;top:0;left:0;right:0;bottom:0;width:100%;height:100%;margin:0;padding:0;border:0;outline:0;clip:rect(0 0 0 0);opacity:0;overflow:hidden;-webkit-appearance:none;-moz-appearance:none}:host ::slotted(ion-picker-column-internal:first-of-type){text-align:start}:host ::slotted(ion-picker-column-internal:last-of-type){text-align:end}:host ::slotted(ion-picker-column-internal:only-child){text-align:center}:host .picker-before{background:-webkit-gradient(linear, left top, left bottom, color-stop(20%, var(--background, var(--ion-background-color, #fff))), color-stop(90%, rgba(var(--background-rgb, var(--ion-background-color-rgb, 255, 255, 255)), 0)));background:linear-gradient(to bottom, var(--background, var(--ion-background-color, #fff)) 20%, rgba(var(--background-rgb, var(--ion-background-color-rgb, 255, 255, 255)), 0) 90%)}:host .picker-after{background:-webkit-gradient(linear, left bottom, left top, color-stop(30%, var(--background, var(--ion-background-color, #fff))), color-stop(90%, rgba(var(--background-rgb, var(--ion-background-color-rgb, 255, 255, 255)), 0)));background:linear-gradient(to top, var(--background, var(--ion-background-color, #fff)) 30%, rgba(var(--background-rgb, var(--ion-background-color-rgb, 255, 255, 255)), 0) 90%)}";
const PickerInternal = class {
  constructor(hostRef) {
    (0,_index_8e692445_js__WEBPACK_IMPORTED_MODULE_1__.r)(this, hostRef);
    this.ionInputModeChange = (0,_index_8e692445_js__WEBPACK_IMPORTED_MODULE_1__.e)(this, "ionInputModeChange", 7);
    this.useInputMode = false;
    this.isInHighlightBounds = ev => {
      const {
        highlightEl
      } = this;
      if (!highlightEl) {
        return false;
      }
      const bbox = highlightEl.getBoundingClientRect();
      /**
       * Check to see if the user clicked
       * outside the bounds of the highlight.
       */
      const outsideX = ev.clientX < bbox.left || ev.clientX > bbox.right;
      const outsideY = ev.clientY < bbox.top || ev.clientY > bbox.bottom;
      if (outsideX || outsideY) {
        return false;
      }
      return true;
    };
    /**
     * If we are no longer focused
     * on a picker column, then we should
     * exit input mode. An exception is made
     * for the input in the picker since having
     * that focused means we are still in input mode.
     */
    this.onFocusOut = ev => {
      // TODO(FW-2832): type
      const {
        relatedTarget
      } = ev;
      if (!relatedTarget || relatedTarget.tagName !== 'ION-PICKER-COLUMN-INTERNAL' && relatedTarget !== this.inputEl) {
        this.exitInputMode();
      }
    };
    /**
     * When picker columns receive focus
     * the parent picker needs to determine
     * whether to enter/exit input mode.
     */
    this.onFocusIn = ev => {
      // TODO(FW-2832): type
      const {
        target
      } = ev;
      /**
       * Due to browser differences in how/when focus
       * is dispatched on certain elements, we need to
       * make sure that this function only ever runs when
       * focusing a picker column.
       */
      if (target.tagName !== 'ION-PICKER-COLUMN-INTERNAL') {
        return;
      }
      /**
       * If we have actionOnClick
       * then this means the user focused
       * a picker column via mouse or
       * touch (i.e. a PointerEvent). As a result,
       * we should not enter/exit input mode
       * until the click event has fired, which happens
       * after the `focusin` event.
       *
       * Otherwise, the user likely focused
       * the column using their keyboard and
       * we should enter/exit input mode automatically.
       */
      if (!this.actionOnClick) {
        const columnEl = target;
        const allowInput = columnEl.numericInput;
        if (allowInput) {
          this.enterInputMode(columnEl, false);
        } else {
          this.exitInputMode();
        }
      }
    };
    /**
     * On click we need to run an actionOnClick
     * function that has been set in onPointerDown
     * so that we enter/exit input mode correctly.
     */
    this.onClick = () => {
      const {
        actionOnClick
      } = this;
      if (actionOnClick) {
        actionOnClick();
        this.actionOnClick = undefined;
      }
    };
    /**
     * Clicking a column also focuses the column on
     * certain browsers, so we use onPointerDown
     * to tell the onFocusIn function that users
     * are trying to click the column rather than
     * focus the column using the keyboard. When the
     * user completes the click, the onClick function
     * runs and runs the actionOnClick callback.
     */
    this.onPointerDown = ev => {
      const {
        useInputMode,
        inputModeColumn,
        el
      } = this;
      if (this.isInHighlightBounds(ev)) {
        /**
         * If we were already in
         * input mode, then we should determine
         * if we tapped a particular column and
         * should switch to input mode for
         * that specific column.
         */
        if (useInputMode) {
          /**
           * If we tapped a picker column
           * then we should either switch to input
           * mode for that column or all columns.
           * Otherwise we should exit input mode
           * since we just tapped the highlight and
           * not a column.
           */
          if (ev.target.tagName === 'ION-PICKER-COLUMN-INTERNAL') {
            /**
             * If user taps 2 different columns
             * then we should just switch to input mode
             * for the new column rather than switching to
             * input mode for all columns.
             */
            if (inputModeColumn && inputModeColumn === ev.target) {
              this.actionOnClick = () => {
                this.enterInputMode();
              };
            } else {
              this.actionOnClick = () => {
                this.enterInputMode(ev.target);
              };
            }
          } else {
            this.actionOnClick = () => {
              this.exitInputMode();
            };
          }
          /**
           * If we were not already in
           * input mode, then we should
           * enter input mode for all columns.
           */
        } else {
          /**
           * If there is only 1 numeric input column
           * then we should skip multi column input.
           */
          const columns = el.querySelectorAll('ion-picker-column-internal.picker-column-numeric-input');
          const columnEl = columns.length === 1 ? ev.target : undefined;
          this.actionOnClick = () => {
            this.enterInputMode(columnEl);
          };
        }
        return;
      }
      this.actionOnClick = () => {
        this.exitInputMode();
      };
    };
    /**
     * Enters input mode to allow
     * for text entry of numeric values.
     * If on mobile, we focus a hidden input
     * field so that the on screen keyboard
     * is brought up. When tabbing using a
     * keyboard, picker columns receive an outline
     * to indicate they are focused. As a result,
     * we should not focus the hidden input as it
     * would cause the outline to go away, preventing
     * users from having any visual indication of which
     * column is focused.
     */
    this.enterInputMode = (columnEl, focusInput = true) => {
      const {
        inputEl,
        el
      } = this;
      if (!inputEl) {
        return;
      }
      /**
       * Only active input mode if there is at
       * least one column that accepts numeric input.
       */
      const hasInputColumn = el.querySelector('ion-picker-column-internal.picker-column-numeric-input');
      if (!hasInputColumn) {
        return;
      }
      /**
       * If columnEl is undefined then
       * it is assumed that all numeric pickers
       * are eligible for text entry.
       * (i.e. hour and minute columns)
       */
      this.useInputMode = true;
      this.inputModeColumn = columnEl;
      /**
       * Users with a keyboard and mouse can
       * activate input mode where the input is
       * focused as well as when it is not focused,
       * so we need to make sure we clean up any
       * old listeners.
       */
      if (focusInput) {
        if (this.destroyKeypressListener) {
          this.destroyKeypressListener();
          this.destroyKeypressListener = undefined;
        }
        inputEl.focus();
      } else {
        el.addEventListener('keypress', this.onKeyPress);
        this.destroyKeypressListener = () => {
          el.removeEventListener('keypress', this.onKeyPress);
        };
      }
      this.emitInputModeChange();
    };
    this.onKeyPress = ev => {
      const {
        inputEl
      } = this;
      if (!inputEl) {
        return;
      }
      const parsedValue = parseInt(ev.key, 10);
      /**
       * Only numbers should be allowed
       */
      if (!Number.isNaN(parsedValue)) {
        inputEl.value += ev.key;
        this.onInputChange();
      }
    };
    this.selectSingleColumn = () => {
      const {
        inputEl,
        inputModeColumn,
        singleColumnSearchTimeout
      } = this;
      if (!inputEl || !inputModeColumn) {
        return;
      }
      const values = inputModeColumn.items.filter(item => item.disabled !== true);
      /**
       * If users pause for a bit, the search
       * value should be reset similar to how a
       * <select> behaves. So typing "34", waiting,
       * then typing "5" should select "05".
       */
      if (singleColumnSearchTimeout) {
        clearTimeout(singleColumnSearchTimeout);
      }
      this.singleColumnSearchTimeout = setTimeout(() => {
        inputEl.value = '';
        this.singleColumnSearchTimeout = undefined;
      }, 1000);
      /**
       * For values that are longer than 2 digits long
       * we should shift the value over 1 character
       * to the left. So typing "456" would result in "56".
       * TODO: If we want to support more than just
       * time entry, we should update this value to be
       * the max length of all of the picker items.
       */
      if (inputEl.value.length >= 3) {
        const startIndex = inputEl.value.length - 2;
        const newString = inputEl.value.substring(startIndex);
        inputEl.value = newString;
        this.selectSingleColumn();
        return;
      }
      /**
       * Checking the value of the input gets priority
       * first. For example, if the value of the input
       * is "1" and we entered "2", then the complete value
       * is "12" and we should select hour 12.
       *
       * Regex removes any leading zeros from values like "02",
       * but it keeps a single zero if there are only zeros in the string.
       * 0+(?=[1-9]) --> Match 1 or more zeros that are followed by 1-9
       * 0+(?=0$) --> Match 1 or more zeros that must be followed by one 0 and end.
       */
      const findItemFromCompleteValue = values.find(({
        text
      }) => {
        const parsedText = text.replace(/^0+(?=[1-9])|0+(?=0$)/, '');
        return parsedText === inputEl.value;
      });
      if (findItemFromCompleteValue) {
        inputModeColumn.setValue(findItemFromCompleteValue.value);
        return;
      }
      /**
       * If we typed "56" to get minute 56, then typed "7",
       * we should select "07" as "567" is not a valid minute.
       */
      if (inputEl.value.length === 2) {
        const changedCharacter = inputEl.value.substring(inputEl.value.length - 1);
        inputEl.value = changedCharacter;
        this.selectSingleColumn();
      }
    };
    /**
     * Searches a list of column items for a particular
     * value. This is currently used for numeric values.
     * The zeroBehavior can be set to account for leading
     * or trailing zeros when looking at the item text.
     */
    this.searchColumn = (colEl, value, zeroBehavior = 'start') => {
      const behavior = zeroBehavior === 'start' ? /^0+/ : /0$/;
      const item = colEl.items.find(({
        text,
        disabled
      }) => disabled !== true && text.replace(behavior, '') === value);
      if (item) {
        colEl.setValue(item.value);
      }
    };
    this.selectMultiColumn = () => {
      const {
        inputEl,
        el
      } = this;
      if (!inputEl) {
        return;
      }
      const numericPickers = Array.from(el.querySelectorAll('ion-picker-column-internal')).filter(col => col.numericInput);
      const firstColumn = numericPickers[0];
      const lastColumn = numericPickers[1];
      let value = inputEl.value;
      let minuteValue;
      switch (value.length) {
        case 1:
          this.searchColumn(firstColumn, value);
          break;
        case 2:
          /**
           * If the first character is `0` or `1` it is
           * possible that users are trying to type `09`
           * or `11` into the hour field, so we should look
           * at that first.
           */
          const firstCharacter = inputEl.value.substring(0, 1);
          value = firstCharacter === '0' || firstCharacter === '1' ? inputEl.value : firstCharacter;
          this.searchColumn(firstColumn, value);
          /**
           * If only checked the first value,
           * we can check the second value
           * for a match in the minutes column
           */
          if (value.length === 1) {
            minuteValue = inputEl.value.substring(inputEl.value.length - 1);
            this.searchColumn(lastColumn, minuteValue, 'end');
          }
          break;
        case 3:
          /**
           * If the first character is `0` or `1` it is
           * possible that users are trying to type `09`
           * or `11` into the hour field, so we should look
           * at that first.
           */
          const firstCharacterAgain = inputEl.value.substring(0, 1);
          value = firstCharacterAgain === '0' || firstCharacterAgain === '1' ? inputEl.value.substring(0, 2) : firstCharacterAgain;
          this.searchColumn(firstColumn, value);
          /**
           * If only checked the first value,
           * we can check the second value
           * for a match in the minutes column
           */
          minuteValue = value.length === 1 ? inputEl.value.substring(1) : inputEl.value.substring(2);
          this.searchColumn(lastColumn, minuteValue, 'end');
          break;
        case 4:
          /**
           * If the first character is `0` or `1` it is
           * possible that users are trying to type `09`
           * or `11` into the hour field, so we should look
           * at that first.
           */
          const firstCharacterAgainAgain = inputEl.value.substring(0, 1);
          value = firstCharacterAgainAgain === '0' || firstCharacterAgainAgain === '1' ? inputEl.value.substring(0, 2) : firstCharacterAgainAgain;
          this.searchColumn(firstColumn, value);
          /**
           * If only checked the first value,
           * we can check the second value
           * for a match in the minutes column
           */
          const minuteValueAgain = value.length === 1 ? inputEl.value.substring(1, inputEl.value.length) : inputEl.value.substring(2, inputEl.value.length);
          this.searchColumn(lastColumn, minuteValueAgain, 'end');
          break;
        default:
          const startIndex = inputEl.value.length - 4;
          const newString = inputEl.value.substring(startIndex);
          inputEl.value = newString;
          this.selectMultiColumn();
          break;
      }
    };
    /**
     * Searches the value of the active column
     * to determine which value users are trying
     * to select
     */
    this.onInputChange = () => {
      const {
        useInputMode,
        inputEl,
        inputModeColumn
      } = this;
      if (!useInputMode || !inputEl) {
        return;
      }
      if (inputModeColumn) {
        this.selectSingleColumn();
      } else {
        this.selectMultiColumn();
      }
    };
    /**
     * Emit ionInputModeChange. Picker columns
     * listen for this event to determine whether
     * or not their column is "active" for text input.
     */
    this.emitInputModeChange = () => {
      const {
        useInputMode,
        inputModeColumn
      } = this;
      this.ionInputModeChange.emit({
        useInputMode,
        inputModeColumn
      });
    };
  }
  /**
   * When the picker is interacted with
   * we need to prevent touchstart so other
   * gestures do not fire. For example,
   * scrolling on the wheel picker
   * in ion-datetime should not cause
   * a card modal to swipe to close.
   */
  preventTouchStartPropagation(ev) {
    ev.stopPropagation();
  }
  componentWillLoad() {
    (0,_helpers_3b390e48_js__WEBPACK_IMPORTED_MODULE_2__.g)(this.el).addEventListener('focusin', this.onFocusIn);
    (0,_helpers_3b390e48_js__WEBPACK_IMPORTED_MODULE_2__.g)(this.el).addEventListener('focusout', this.onFocusOut);
  }
  /**
   * @internal
   * Exits text entry mode for the picker
   * This method blurs the hidden input
   * and cause the keyboard to dismiss.
   */
  exitInputMode() {
    var _this = this;
    return (0,_opt_atlassian_pipelines_agent_build_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_0__["default"])(function* () {
      const {
        inputEl,
        useInputMode
      } = _this;
      if (!useInputMode || !inputEl) {
        return;
      }
      _this.useInputMode = false;
      _this.inputModeColumn = undefined;
      inputEl.blur();
      inputEl.value = '';
      if (_this.destroyKeypressListener) {
        _this.destroyKeypressListener();
        _this.destroyKeypressListener = undefined;
      }
      _this.emitInputModeChange();
    })();
  }
  render() {
    return (0,_index_8e692445_js__WEBPACK_IMPORTED_MODULE_1__.h)(_index_8e692445_js__WEBPACK_IMPORTED_MODULE_1__.H, {
      onPointerDown: ev => this.onPointerDown(ev),
      onClick: () => this.onClick()
    }, (0,_index_8e692445_js__WEBPACK_IMPORTED_MODULE_1__.h)("input", {
      "aria-hidden": "true",
      tabindex: -1,
      inputmode: "numeric",
      type: "number",
      ref: el => this.inputEl = el,
      onInput: () => this.onInputChange(),
      onBlur: () => this.exitInputMode()
    }), (0,_index_8e692445_js__WEBPACK_IMPORTED_MODULE_1__.h)("div", {
      class: "picker-before"
    }), (0,_index_8e692445_js__WEBPACK_IMPORTED_MODULE_1__.h)("div", {
      class: "picker-after"
    }), (0,_index_8e692445_js__WEBPACK_IMPORTED_MODULE_1__.h)("div", {
      class: "picker-highlight",
      ref: el => this.highlightEl = el
    }), (0,_index_8e692445_js__WEBPACK_IMPORTED_MODULE_1__.h)("slot", null));
  }
  get el() {
    return (0,_index_8e692445_js__WEBPACK_IMPORTED_MODULE_1__.i)(this);
  }
};
PickerInternal.style = {
  ios: pickerInternalIosCss,
  md: pickerInternalMdCss
};


/***/ })

}]);
//# sourceMappingURL=2275.63cd9788250accf6.js.map