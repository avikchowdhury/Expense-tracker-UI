"use strict";
(self["webpackChunkmy_app"] = self["webpackChunkmy_app"] || []).push([["src_app_features_receipts_receipts_module_ts"],{

/***/ 8757:
/*!***************************************************************************!*\
  !*** ./src/app/features/receipts/components/receipt-filters.component.ts ***!
  \***************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "ReceiptFiltersComponent": () => (/* binding */ ReceiptFiltersComponent)
/* harmony export */ });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ 2560);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common */ 4666);
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/forms */ 2508);
/* harmony import */ var _angular_material_button__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/material/button */ 4522);
/* harmony import */ var _angular_material_card__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/material/card */ 2156);
/* harmony import */ var _angular_material_form_field__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/material/form-field */ 5074);
/* harmony import */ var _angular_material_input__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/material/input */ 8562);
/* harmony import */ var _angular_material_select__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/material/select */ 7371);
/* harmony import */ var _angular_material_core__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @angular/material/core */ 9121);










function ReceiptFiltersComponent_mat_option_20_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "mat-option", 11);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
  }
  if (rf & 2) {
    const category_r1 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("value", category_r1.name);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](category_r1.name);
  }
}
class ReceiptFiltersComponent {
  constructor() {
    this.categories = [];
    this.filters = {};
    this.filtersChange = new _angular_core__WEBPACK_IMPORTED_MODULE_0__.EventEmitter();
    this.draftFilters = {};
  }
  ngOnChanges() {
    this.draftFilters = {
      ...this.filters
    };
  }
  apply() {
    this.filtersChange.emit({
      search: this.draftFilters.search || '',
      category: this.draftFilters.category || '',
      dateFrom: this.draftFilters.dateFrom || '',
      dateTo: this.draftFilters.dateTo || ''
    });
  }
  reset() {
    this.draftFilters = {
      ...this.draftFilters,
      search: '',
      category: '',
      dateFrom: '',
      dateTo: ''
    };
    this.apply();
  }
  static {
    this.ɵfac = function ReceiptFiltersComponent_Factory(t) {
      return new (t || ReceiptFiltersComponent)();
    };
  }
  static {
    this.ɵcmp = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({
      type: ReceiptFiltersComponent,
      selectors: [["app-receipt-filters"]],
      inputs: {
        categories: "categories",
        filters: "filters"
      },
      outputs: {
        filtersChange: "filtersChange"
      },
      features: [_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵNgOnChangesFeature"]],
      decls: 31,
      vars: 5,
      consts: [[1, "filters-card"], [1, "filters-header"], ["mat-button", "", "type", "button", 3, "click"], [1, "filters-grid"], ["appearance", "outline"], ["matInput", "", "placeholder", "Vendor, notes, or filename", 3, "ngModel", "ngModelChange"], [3, "ngModel", "ngModelChange"], ["value", ""], [3, "value", 4, "ngFor", "ngForOf"], ["matInput", "", "type", "date", 3, "ngModel", "ngModelChange"], ["mat-raised-button", "", "color", "primary", "type", "button", 3, "click"], [3, "value"]],
      template: function ReceiptFiltersComponent_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "mat-card", 0)(1, "div", 1)(2, "div")(3, "mat-card-title");
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](4, "Filters");
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "mat-card-subtitle");
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](6, "Search by vendor, category, or uploaded date range.");
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]()();
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](7, "button", 2);
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function ReceiptFiltersComponent_Template_button_click_7_listener() {
            return ctx.reset();
          });
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](8, "Reset");
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]()();
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](9, "div", 3)(10, "mat-form-field", 4)(11, "mat-label");
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](12, "Search");
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](13, "input", 5);
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("ngModelChange", function ReceiptFiltersComponent_Template_input_ngModelChange_13_listener($event) {
            return ctx.draftFilters.search = $event;
          });
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]()();
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](14, "mat-form-field", 4)(15, "mat-label");
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](16, "Category");
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](17, "mat-select", 6);
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("ngModelChange", function ReceiptFiltersComponent_Template_mat_select_ngModelChange_17_listener($event) {
            return ctx.draftFilters.category = $event;
          });
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](18, "mat-option", 7);
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](19, "All categories");
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](20, ReceiptFiltersComponent_mat_option_20_Template, 2, 2, "mat-option", 8);
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]()();
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](21, "mat-form-field", 4)(22, "mat-label");
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](23, "Date from");
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](24, "input", 9);
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("ngModelChange", function ReceiptFiltersComponent_Template_input_ngModelChange_24_listener($event) {
            return ctx.draftFilters.dateFrom = $event;
          });
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]()();
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](25, "mat-form-field", 4)(26, "mat-label");
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](27, "Date to");
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](28, "input", 9);
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("ngModelChange", function ReceiptFiltersComponent_Template_input_ngModelChange_28_listener($event) {
            return ctx.draftFilters.dateTo = $event;
          });
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]()()();
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](29, "button", 10);
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function ReceiptFiltersComponent_Template_button_click_29_listener() {
            return ctx.apply();
          });
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](30, "Apply filters");
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]()();
        }
        if (rf & 2) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](13);
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngModel", ctx.draftFilters.search);
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](4);
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngModel", ctx.draftFilters.category);
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngForOf", ctx.categories);
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](4);
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngModel", ctx.draftFilters.dateFrom);
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](4);
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngModel", ctx.draftFilters.dateTo);
        }
      },
      dependencies: [_angular_common__WEBPACK_IMPORTED_MODULE_1__.NgForOf, _angular_forms__WEBPACK_IMPORTED_MODULE_2__.DefaultValueAccessor, _angular_forms__WEBPACK_IMPORTED_MODULE_2__.NgControlStatus, _angular_forms__WEBPACK_IMPORTED_MODULE_2__.NgModel, _angular_material_button__WEBPACK_IMPORTED_MODULE_3__.MatButton, _angular_material_card__WEBPACK_IMPORTED_MODULE_4__.MatCard, _angular_material_card__WEBPACK_IMPORTED_MODULE_4__.MatCardSubtitle, _angular_material_card__WEBPACK_IMPORTED_MODULE_4__.MatCardTitle, _angular_material_form_field__WEBPACK_IMPORTED_MODULE_5__.MatFormField, _angular_material_form_field__WEBPACK_IMPORTED_MODULE_5__.MatLabel, _angular_material_input__WEBPACK_IMPORTED_MODULE_6__.MatInput, _angular_material_select__WEBPACK_IMPORTED_MODULE_7__.MatSelect, _angular_material_core__WEBPACK_IMPORTED_MODULE_8__.MatOption],
      styles: [".filters-card[_ngcontent-%COMP%] {\n  border-radius: 26px;\n  box-shadow: 0 18px 36px rgba(20, 40, 57, 0.08);\n}\n\n.filters-header[_ngcontent-%COMP%] {\n  display: flex;\n  justify-content: space-between;\n  gap: 1rem;\n}\n\n.filters-grid[_ngcontent-%COMP%] {\n  display: grid;\n  grid-template-columns: repeat(2, minmax(0, 1fr));\n  gap: 0.75rem;\n  margin: 1rem 0;\n}\n\n@media (max-width: 820px) {\n  .filters-grid[_ngcontent-%COMP%] {\n    grid-template-columns: 1fr;\n  }\n}\n/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8uL3NyYy9hcHAvZmVhdHVyZXMvcmVjZWlwdHMvY29tcG9uZW50cy9yZWNlaXB0LWZpbHRlcnMuY29tcG9uZW50LnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFDRSxtQkFBQTtFQUNBLDhDQUFBO0FBQ0Y7O0FBRUE7RUFDRSxhQUFBO0VBQ0EsOEJBQUE7RUFDQSxTQUFBO0FBQ0Y7O0FBRUE7RUFDRSxhQUFBO0VBQ0EsZ0RBQUE7RUFDQSxZQUFBO0VBQ0EsY0FBQTtBQUNGOztBQUVBO0VBQ0U7SUFDRSwwQkFBQTtFQUNGO0FBQ0YiLCJzb3VyY2VzQ29udGVudCI6WyIuZmlsdGVycy1jYXJkIHtcbiAgYm9yZGVyLXJhZGl1czogMjZweDtcbiAgYm94LXNoYWRvdzogMCAxOHB4IDM2cHggcmdiYSgyMCwgNDAsIDU3LCAwLjA4KTtcbn1cblxuLmZpbHRlcnMtaGVhZGVyIHtcbiAgZGlzcGxheTogZmxleDtcbiAganVzdGlmeS1jb250ZW50OiBzcGFjZS1iZXR3ZWVuO1xuICBnYXA6IDFyZW07XG59XG5cbi5maWx0ZXJzLWdyaWQge1xuICBkaXNwbGF5OiBncmlkO1xuICBncmlkLXRlbXBsYXRlLWNvbHVtbnM6IHJlcGVhdCgyLCBtaW5tYXgoMCwgMWZyKSk7XG4gIGdhcDogMC43NXJlbTtcbiAgbWFyZ2luOiAxcmVtIDA7XG59XG5cbkBtZWRpYSAobWF4LXdpZHRoOiA4MjBweCkge1xuICAuZmlsdGVycy1ncmlkIHtcbiAgICBncmlkLXRlbXBsYXRlLWNvbHVtbnM6IDFmcjtcbiAgfVxufVxuIl0sInNvdXJjZVJvb3QiOiIifQ== */"]
    });
  }
}

/***/ }),

/***/ 8344:
/*!*************************************************************************!*\
  !*** ./src/app/features/receipts/components/receipt-table.component.ts ***!
  \*************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "ReceiptTableComponent": () => (/* binding */ ReceiptTableComponent)
/* harmony export */ });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ 2560);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common */ 4666);
/* harmony import */ var _angular_material_button__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/material/button */ 4522);
/* harmony import */ var _angular_material_card__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/material/card */ 2156);
/* harmony import */ var _angular_material_icon__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/material/icon */ 7822);
/* harmony import */ var _angular_material_paginator__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/material/paginator */ 6060);
/* harmony import */ var _angular_material_progress_spinner__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/material/progress-spinner */ 1708);
/* harmony import */ var _angular_material_table__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/material/table */ 5288);
/* harmony import */ var _angular_material_tooltip__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @angular/material/tooltip */ 6896);










function ReceiptTableComponent_div_5_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 4);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](1, "mat-spinner", 5);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
  }
}
function ReceiptTableComponent_div_6_table_1_th_2_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "th", 19);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, "Date");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
  }
}
function ReceiptTableComponent_div_6_table_1_td_3_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "td", 20);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipe"](2, "date");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
  }
  if (rf & 2) {
    const receipt_r17 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipeBind2"](2, 1, receipt_r17.uploadedAt, "mediumDate"));
  }
}
function ReceiptTableComponent_div_6_table_1_th_5_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "th", 19);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, "Vendor");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
  }
}
function ReceiptTableComponent_div_6_table_1_td_6_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "td", 20);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
  }
  if (rf & 2) {
    const receipt_r18 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](receipt_r18.vendor || "Unknown vendor");
  }
}
function ReceiptTableComponent_div_6_table_1_th_8_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "th", 19);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, "Amount");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
  }
}
function ReceiptTableComponent_div_6_table_1_td_9_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "td", 20);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipe"](2, "currency");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
  }
  if (rf & 2) {
    const receipt_r19 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipeBind1"](2, 1, receipt_r19.totalAmount));
  }
}
function ReceiptTableComponent_div_6_table_1_th_11_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "th", 19);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, "Category");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
  }
}
function ReceiptTableComponent_div_6_table_1_td_12_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "td", 20);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
  }
  if (rf & 2) {
    const receipt_r20 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](receipt_r20.category || "Uncategorized");
  }
}
function ReceiptTableComponent_div_6_table_1_th_14_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "th", 19);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, "Actions");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
  }
}
function ReceiptTableComponent_div_6_table_1_td_15_Template(rf, ctx) {
  if (rf & 1) {
    const _r23 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "td", 20)(1, "div", 21)(2, "button", 22);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function ReceiptTableComponent_div_6_table_1_td_15_Template_button_click_2_listener() {
      const restoredCtx = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r23);
      const receipt_r21 = restoredCtx.$implicit;
      const ctx_r22 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](3);
      return _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵresetView"](ctx_r22.view.emit(receipt_r21));
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "mat-icon");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](4, "visibility");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "button", 23);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function ReceiptTableComponent_div_6_table_1_td_15_Template_button_click_5_listener() {
      const restoredCtx = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r23);
      const receipt_r21 = restoredCtx.$implicit;
      const ctx_r24 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](3);
      return _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵresetView"](ctx_r24.edit.emit(receipt_r21));
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](6, "mat-icon");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](7, "edit");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](8, "button", 24);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function ReceiptTableComponent_div_6_table_1_td_15_Template_button_click_8_listener() {
      const restoredCtx = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r23);
      const receipt_r21 = restoredCtx.$implicit;
      const ctx_r25 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](3);
      return _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵresetView"](ctx_r25.delete.emit(receipt_r21));
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](9, "mat-icon");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](10, "delete");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]()()()();
  }
}
function ReceiptTableComponent_div_6_table_1_tr_16_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](0, "tr", 25);
  }
}
function ReceiptTableComponent_div_6_table_1_tr_17_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](0, "tr", 26);
  }
}
function ReceiptTableComponent_div_6_table_1_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "table", 9);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementContainerStart"](1, 10);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](2, ReceiptTableComponent_div_6_table_1_th_2_Template, 2, 0, "th", 11);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](3, ReceiptTableComponent_div_6_table_1_td_3_Template, 3, 4, "td", 12);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementContainerEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementContainerStart"](4, 13);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](5, ReceiptTableComponent_div_6_table_1_th_5_Template, 2, 0, "th", 11);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](6, ReceiptTableComponent_div_6_table_1_td_6_Template, 2, 1, "td", 12);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementContainerEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementContainerStart"](7, 14);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](8, ReceiptTableComponent_div_6_table_1_th_8_Template, 2, 0, "th", 11);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](9, ReceiptTableComponent_div_6_table_1_td_9_Template, 3, 3, "td", 12);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementContainerEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementContainerStart"](10, 15);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](11, ReceiptTableComponent_div_6_table_1_th_11_Template, 2, 0, "th", 11);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](12, ReceiptTableComponent_div_6_table_1_td_12_Template, 2, 1, "td", 12);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementContainerEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementContainerStart"](13, 16);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](14, ReceiptTableComponent_div_6_table_1_th_14_Template, 2, 0, "th", 11);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](15, ReceiptTableComponent_div_6_table_1_td_15_Template, 11, 0, "td", 12);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementContainerEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](16, ReceiptTableComponent_div_6_table_1_tr_16_Template, 1, 0, "tr", 17);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](17, ReceiptTableComponent_div_6_table_1_tr_17_Template, 1, 0, "tr", 18);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
  }
  if (rf & 2) {
    const ctx_r2 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("dataSource", ctx_r2.receipts);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](16);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("matHeaderRowDef", ctx_r2.displayedColumns);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("matRowDefColumns", ctx_r2.displayedColumns);
  }
}
function ReceiptTableComponent_div_6_ng_template_2_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 27);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, "No receipts matched these filters.");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
  }
}
function ReceiptTableComponent_div_6_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 6);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](1, ReceiptTableComponent_div_6_table_1_Template, 18, 3, "table", 7);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](2, ReceiptTableComponent_div_6_ng_template_2_Template, 2, 0, "ng-template", null, 8, _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplateRefExtractor"]);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
  }
  if (rf & 2) {
    const _r3 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵreference"](3);
    const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx_r1.receipts.length)("ngIfElse", _r3);
  }
}
const _c0 = function () {
  return [5, 10, 20];
};
class ReceiptTableComponent {
  constructor() {
    this.receipts = [];
    this.loading = false;
    this.totalReceipts = 0;
    this.pageSize = 10;
    this.pageIndex = 0;
    this.pageChange = new _angular_core__WEBPACK_IMPORTED_MODULE_0__.EventEmitter();
    this.view = new _angular_core__WEBPACK_IMPORTED_MODULE_0__.EventEmitter();
    this.edit = new _angular_core__WEBPACK_IMPORTED_MODULE_0__.EventEmitter();
    this.delete = new _angular_core__WEBPACK_IMPORTED_MODULE_0__.EventEmitter();
    this.displayedColumns = ['date', 'vendor', 'amount', 'category', 'actions'];
  }
  static {
    this.ɵfac = function ReceiptTableComponent_Factory(t) {
      return new (t || ReceiptTableComponent)();
    };
  }
  static {
    this.ɵcmp = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({
      type: ReceiptTableComponent,
      selectors: [["app-receipt-table"]],
      inputs: {
        receipts: "receipts",
        loading: "loading",
        totalReceipts: "totalReceipts",
        pageSize: "pageSize",
        pageIndex: "pageIndex"
      },
      outputs: {
        pageChange: "pageChange",
        view: "view",
        edit: "edit",
        delete: "delete"
      },
      decls: 8,
      vars: 7,
      consts: [[1, "table-card"], ["class", "loading-state", 4, "ngIf"], ["class", "table-shell", 4, "ngIf"], [3, "length", "pageSize", "pageIndex", "pageSizeOptions", "page"], [1, "loading-state"], ["diameter", "36"], [1, "table-shell"], ["mat-table", "", "class", "receipts-table", 3, "dataSource", 4, "ngIf", "ngIfElse"], ["emptyState", ""], ["mat-table", "", 1, "receipts-table", 3, "dataSource"], ["matColumnDef", "date"], ["mat-header-cell", "", 4, "matHeaderCellDef"], ["mat-cell", "", 4, "matCellDef"], ["matColumnDef", "vendor"], ["matColumnDef", "amount"], ["matColumnDef", "category"], ["matColumnDef", "actions"], ["mat-header-row", "", 4, "matHeaderRowDef"], ["mat-row", "", 4, "matRowDef", "matRowDefColumns"], ["mat-header-cell", ""], ["mat-cell", ""], [1, "action-buttons"], ["mat-icon-button", "", "matTooltip", "View", 3, "click"], ["mat-icon-button", "", "matTooltip", "Edit", 3, "click"], ["mat-icon-button", "", "matTooltip", "Delete", "color", "warn", 3, "click"], ["mat-header-row", ""], ["mat-row", ""], [1, "empty-state"]],
      template: function ReceiptTableComponent_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "mat-card", 0)(1, "mat-card-title");
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](2, "Receipt history");
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "mat-card-subtitle");
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](4, "Editable table view with saved categories and uploaded amounts.");
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](5, ReceiptTableComponent_div_5_Template, 2, 0, "div", 1);
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](6, ReceiptTableComponent_div_6_Template, 4, 2, "div", 2);
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](7, "mat-paginator", 3);
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("page", function ReceiptTableComponent_Template_mat_paginator_page_7_listener($event) {
            return ctx.pageChange.emit($event);
          });
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]()();
        }
        if (rf & 2) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](5);
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.loading);
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", !ctx.loading);
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("length", ctx.totalReceipts)("pageSize", ctx.pageSize)("pageIndex", ctx.pageIndex)("pageSizeOptions", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction0"](6, _c0));
        }
      },
      dependencies: [_angular_common__WEBPACK_IMPORTED_MODULE_1__.NgIf, _angular_material_button__WEBPACK_IMPORTED_MODULE_2__.MatIconButton, _angular_material_card__WEBPACK_IMPORTED_MODULE_3__.MatCard, _angular_material_card__WEBPACK_IMPORTED_MODULE_3__.MatCardSubtitle, _angular_material_card__WEBPACK_IMPORTED_MODULE_3__.MatCardTitle, _angular_material_icon__WEBPACK_IMPORTED_MODULE_4__.MatIcon, _angular_material_paginator__WEBPACK_IMPORTED_MODULE_5__.MatPaginator, _angular_material_progress_spinner__WEBPACK_IMPORTED_MODULE_6__.MatProgressSpinner, _angular_material_table__WEBPACK_IMPORTED_MODULE_7__.MatTable, _angular_material_table__WEBPACK_IMPORTED_MODULE_7__.MatHeaderCellDef, _angular_material_table__WEBPACK_IMPORTED_MODULE_7__.MatHeaderRowDef, _angular_material_table__WEBPACK_IMPORTED_MODULE_7__.MatColumnDef, _angular_material_table__WEBPACK_IMPORTED_MODULE_7__.MatCellDef, _angular_material_table__WEBPACK_IMPORTED_MODULE_7__.MatRowDef, _angular_material_table__WEBPACK_IMPORTED_MODULE_7__.MatHeaderCell, _angular_material_table__WEBPACK_IMPORTED_MODULE_7__.MatCell, _angular_material_table__WEBPACK_IMPORTED_MODULE_7__.MatHeaderRow, _angular_material_table__WEBPACK_IMPORTED_MODULE_7__.MatRow, _angular_material_tooltip__WEBPACK_IMPORTED_MODULE_8__.MatTooltip, _angular_common__WEBPACK_IMPORTED_MODULE_1__.CurrencyPipe, _angular_common__WEBPACK_IMPORTED_MODULE_1__.DatePipe],
      styles: [".table-card[_ngcontent-%COMP%] {\n  border-radius: 26px;\n  box-shadow: 0 18px 36px rgba(20, 40, 57, 0.08);\n}\n\n.loading-state[_ngcontent-%COMP%], .empty-state[_ngcontent-%COMP%] {\n  display: grid;\n  place-items: center;\n  min-height: 220px;\n  color: #61798a;\n}\n\n.table-shell[_ngcontent-%COMP%] {\n  overflow-x: auto;\n}\n\n.receipts-table[_ngcontent-%COMP%] {\n  width: 100%;\n}\n\n.action-buttons[_ngcontent-%COMP%] {\n  display: flex;\n  gap: 0.35rem;\n}\n/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8uL3NyYy9hcHAvZmVhdHVyZXMvcmVjZWlwdHMvY29tcG9uZW50cy9yZWNlaXB0LXRhYmxlLmNvbXBvbmVudC5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQ0UsbUJBQUE7RUFDQSw4Q0FBQTtBQUNGOztBQUVBOztFQUVFLGFBQUE7RUFDQSxtQkFBQTtFQUNBLGlCQUFBO0VBQ0EsY0FBQTtBQUNGOztBQUVBO0VBQ0UsZ0JBQUE7QUFDRjs7QUFFQTtFQUNFLFdBQUE7QUFDRjs7QUFFQTtFQUNFLGFBQUE7RUFDQSxZQUFBO0FBQ0YiLCJzb3VyY2VzQ29udGVudCI6WyIudGFibGUtY2FyZCB7XG4gIGJvcmRlci1yYWRpdXM6IDI2cHg7XG4gIGJveC1zaGFkb3c6IDAgMThweCAzNnB4IHJnYmEoMjAsIDQwLCA1NywgMC4wOCk7XG59XG5cbi5sb2FkaW5nLXN0YXRlLFxuLmVtcHR5LXN0YXRlIHtcbiAgZGlzcGxheTogZ3JpZDtcbiAgcGxhY2UtaXRlbXM6IGNlbnRlcjtcbiAgbWluLWhlaWdodDogMjIwcHg7XG4gIGNvbG9yOiAjNjE3OThhO1xufVxuXG4udGFibGUtc2hlbGwge1xuICBvdmVyZmxvdy14OiBhdXRvO1xufVxuXG4ucmVjZWlwdHMtdGFibGUge1xuICB3aWR0aDogMTAwJTtcbn1cblxuLmFjdGlvbi1idXR0b25zIHtcbiAgZGlzcGxheTogZmxleDtcbiAgZ2FwOiAwLjM1cmVtO1xufVxuIl0sInNvdXJjZVJvb3QiOiIifQ== */"]
    });
  }
}

/***/ }),

/***/ 3297:
/*!************************************************************************************!*\
  !*** ./src/app/features/receipts/components/receipt-upload-assistant.component.ts ***!
  \************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "ReceiptUploadAssistantComponent": () => (/* binding */ ReceiptUploadAssistantComponent)
/* harmony export */ });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ 2560);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common */ 4666);
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/forms */ 2508);
/* harmony import */ var _angular_material_button__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/material/button */ 4522);
/* harmony import */ var _angular_material_card__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/material/card */ 2156);
/* harmony import */ var _angular_material_form_field__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/material/form-field */ 5074);
/* harmony import */ var _angular_material_icon__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/material/icon */ 7822);
/* harmony import */ var _angular_material_input__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/material/input */ 8562);
/* harmony import */ var _angular_material_progress_spinner__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @angular/material/progress-spinner */ 1708);
/* harmony import */ var _angular_material_select__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @angular/material/select */ 7371);
/* harmony import */ var _angular_material_core__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! @angular/material/core */ 9121);












const _c0 = ["fileInput"];
function ReceiptUploadAssistantComponent_div_14_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 8);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](1, "mat-spinner", 9);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "span");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](3, "Generating AI preview...");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]()();
  }
}
function ReceiptUploadAssistantComponent_div_15_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 10)(1, "div", 11)(2, "span");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](3, "Vendor");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "strong");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](5);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](6, "div", 11)(7, "span");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](8, "Amount");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](9, "strong");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](10);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipe"](11, "currency");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](12, "div", 11)(13, "span");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](14, "Suggested category");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](15, "strong");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](16);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]()()();
  }
  if (rf & 2) {
    const ctx_r2 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](5);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](ctx_r2.preview.vendor || "Unknown vendor");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](5);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipeBind1"](11, 3, ctx_r2.preview.amount || 0));
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](6);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](ctx_r2.preview.category || "Uncategorized");
  }
}
function ReceiptUploadAssistantComponent_div_16_mat_option_7_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "mat-option", 18);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
  }
  if (rf & 2) {
    const categoryItem_r6 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("value", categoryItem_r6.name);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" ", categoryItem_r6.name, " ");
  }
}
function ReceiptUploadAssistantComponent_div_16_Template(rf, ctx) {
  if (rf & 1) {
    const _r8 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 12)(1, "mat-form-field", 13)(2, "mat-label");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](3, "Category");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "mat-select", 14);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("ngModelChange", function ReceiptUploadAssistantComponent_div_16_Template_mat_select_ngModelChange_4_listener($event) {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r8);
      const ctx_r7 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();
      return _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵresetView"](ctx_r7.category = $event);
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "mat-option", 15);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](6, "Uncategorized");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](7, ReceiptUploadAssistantComponent_div_16_mat_option_7_Template, 2, 2, "mat-option", 16);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](8, "mat-form-field", 13)(9, "mat-label");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](10, "Notes for the receipt");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](11, "textarea", 17);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("ngModelChange", function ReceiptUploadAssistantComponent_div_16_Template_textarea_ngModelChange_11_listener($event) {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r8);
      const ctx_r9 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();
      return _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵresetView"](ctx_r9.notes = $event);
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]()()();
  }
  if (rf & 2) {
    const ctx_r3 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngModel", ctx_r3.category);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngForOf", ctx_r3.categories);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngModel", ctx_r3.notes);
  }
}
function ReceiptUploadAssistantComponent_div_17_Template(rf, ctx) {
  if (rf & 1) {
    const _r11 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 19)(1, "button", 20);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function ReceiptUploadAssistantComponent_div_17_Template_button_click_1_listener() {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r11);
      const ctx_r10 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();
      return _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵresetView"](ctx_r10.clear());
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](2, "Clear");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "button", 21);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function ReceiptUploadAssistantComponent_div_17_Template_button_click_3_listener() {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r11);
      const ctx_r12 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();
      return _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵresetView"](ctx_r12.upload());
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]()();
  }
  if (rf & 2) {
    const ctx_r4 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("disabled", ctx_r4.uploading);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" ", ctx_r4.uploading ? "Uploading..." : "Save receipt", " ");
  }
}
class ReceiptUploadAssistantComponent {
  constructor() {
    this.selectedFile = null;
    this.preview = null;
    this.parsingPreview = false;
    this.uploading = false;
    this.categories = [];
    this.fileSelected = new _angular_core__WEBPACK_IMPORTED_MODULE_0__.EventEmitter();
    this.uploadRequested = new _angular_core__WEBPACK_IMPORTED_MODULE_0__.EventEmitter();
    this.cleared = new _angular_core__WEBPACK_IMPORTED_MODULE_0__.EventEmitter();
    this.category = '';
    this.notes = '';
  }
  ngOnChanges(changes) {
    if (changes['preview'] && this.preview) {
      this.category = this.preview.category || this.category;
    }
    if (changes['selectedFile'] && !this.selectedFile) {
      this.category = '';
      this.notes = '';
    }
  }
  onFileChange(event) {
    const input = event.target;
    this.fileSelected.emit(input.files?.[0] || null);
  }
  clear() {
    this.category = '';
    this.notes = '';
    if (this.fileInput?.nativeElement) {
      this.fileInput.nativeElement.value = '';
    }
    this.cleared.emit();
  }
  upload() {
    this.uploadRequested.emit({
      category: this.category,
      notes: this.notes
    });
  }
  static {
    this.ɵfac = function ReceiptUploadAssistantComponent_Factory(t) {
      return new (t || ReceiptUploadAssistantComponent)();
    };
  }
  static {
    this.ɵcmp = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({
      type: ReceiptUploadAssistantComponent,
      selectors: [["app-receipt-upload-assistant"]],
      viewQuery: function ReceiptUploadAssistantComponent_Query(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵviewQuery"](_c0, 5);
        }
        if (rf & 2) {
          let _t;
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵqueryRefresh"](_t = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵloadQuery"]()) && (ctx.fileInput = _t.first);
        }
      },
      inputs: {
        selectedFile: "selectedFile",
        preview: "preview",
        parsingPreview: "parsingPreview",
        uploading: "uploading",
        categories: "categories"
      },
      outputs: {
        fileSelected: "fileSelected",
        uploadRequested: "uploadRequested",
        cleared: "cleared"
      },
      features: [_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵNgOnChangesFeature"]],
      decls: 18,
      vars: 5,
      consts: [[1, "upload-card"], [1, "upload-dropzone"], ["type", "file", "accept", "image/*,application/pdf", 3, "change"], ["fileInput", ""], ["class", "preview-loading", 4, "ngIf"], ["class", "ai-preview", 4, "ngIf"], ["class", "edit-grid", 4, "ngIf"], ["class", "upload-actions", 4, "ngIf"], [1, "preview-loading"], ["diameter", "28"], [1, "ai-preview"], [1, "preview-row"], [1, "edit-grid"], ["appearance", "outline"], [3, "ngModel", "ngModelChange"], ["value", ""], [3, "value", 4, "ngFor", "ngForOf"], ["matInput", "", "rows", "4", "placeholder", "Optional notes or correction details", 3, "ngModel", "ngModelChange"], [3, "value"], [1, "upload-actions"], ["mat-stroked-button", "", "type", "button", 3, "click"], ["mat-raised-button", "", "color", "primary", "type", "button", 3, "disabled", "click"]],
      template: function ReceiptUploadAssistantComponent_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "mat-card", 0)(1, "mat-card-title");
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](2, "AI upload assistant");
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "mat-card-subtitle");
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](4, "Pick a file, review the smart preview, and save with better metadata.");
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "label", 1)(6, "input", 2, 3);
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("change", function ReceiptUploadAssistantComponent_Template_input_change_6_listener($event) {
            return ctx.onFileChange($event);
          });
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](8, "mat-icon");
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](9, "upload_file");
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](10, "strong");
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](11);
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](12, "span");
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](13, "Images or PDFs supported");
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]()();
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](14, ReceiptUploadAssistantComponent_div_14_Template, 4, 0, "div", 4);
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](15, ReceiptUploadAssistantComponent_div_15_Template, 17, 5, "div", 5);
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](16, ReceiptUploadAssistantComponent_div_16_Template, 12, 3, "div", 6);
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](17, ReceiptUploadAssistantComponent_div_17_Template, 5, 2, "div", 7);
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        }
        if (rf & 2) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](11);
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"]((ctx.selectedFile == null ? null : ctx.selectedFile.name) || "Choose a receipt file");
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.parsingPreview);
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.preview);
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.selectedFile);
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.selectedFile);
        }
      },
      dependencies: [_angular_common__WEBPACK_IMPORTED_MODULE_1__.NgForOf, _angular_common__WEBPACK_IMPORTED_MODULE_1__.NgIf, _angular_forms__WEBPACK_IMPORTED_MODULE_2__.DefaultValueAccessor, _angular_forms__WEBPACK_IMPORTED_MODULE_2__.NgControlStatus, _angular_forms__WEBPACK_IMPORTED_MODULE_2__.NgModel, _angular_material_button__WEBPACK_IMPORTED_MODULE_3__.MatButton, _angular_material_card__WEBPACK_IMPORTED_MODULE_4__.MatCard, _angular_material_card__WEBPACK_IMPORTED_MODULE_4__.MatCardSubtitle, _angular_material_card__WEBPACK_IMPORTED_MODULE_4__.MatCardTitle, _angular_material_form_field__WEBPACK_IMPORTED_MODULE_5__.MatFormField, _angular_material_form_field__WEBPACK_IMPORTED_MODULE_5__.MatLabel, _angular_material_icon__WEBPACK_IMPORTED_MODULE_6__.MatIcon, _angular_material_input__WEBPACK_IMPORTED_MODULE_7__.MatInput, _angular_material_progress_spinner__WEBPACK_IMPORTED_MODULE_8__.MatProgressSpinner, _angular_material_select__WEBPACK_IMPORTED_MODULE_9__.MatSelect, _angular_material_core__WEBPACK_IMPORTED_MODULE_10__.MatOption, _angular_common__WEBPACK_IMPORTED_MODULE_1__.CurrencyPipe],
      styles: [".upload-card[_ngcontent-%COMP%] {\n  border-radius: 26px;\n  box-shadow: 0 18px 36px rgba(20, 40, 57, 0.08);\n}\n\n.upload-dropzone[_ngcontent-%COMP%] {\n  display: grid;\n  place-items: center;\n  gap: 0.5rem;\n  padding: 1.4rem;\n  margin: 1rem 0;\n  border: 1px dashed rgba(15, 108, 91, 0.36);\n  border-radius: 22px;\n  background: #f3fbf8;\n  text-align: center;\n  cursor: pointer;\n}\n\n.upload-dropzone[_ngcontent-%COMP%]   input[_ngcontent-%COMP%] {\n  display: none;\n}\n\n.upload-dropzone[_ngcontent-%COMP%]   mat-icon[_ngcontent-%COMP%] {\n  width: 42px;\n  height: 42px;\n  font-size: 42px;\n  color: #0f6c5b;\n}\n\n.upload-dropzone[_ngcontent-%COMP%]   span[_ngcontent-%COMP%] {\n  color: #5c7383;\n}\n\n.preview-loading[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: center;\n  gap: 0.75rem;\n  margin-bottom: 1rem;\n  color: #4e6778;\n}\n\n.ai-preview[_ngcontent-%COMP%] {\n  display: grid;\n  gap: 0.75rem;\n  padding: 1rem;\n  border-radius: 18px;\n  background: #f7fbfd;\n  margin-bottom: 1rem;\n}\n\n.preview-row[_ngcontent-%COMP%] {\n  display: flex;\n  justify-content: space-between;\n  gap: 1rem;\n}\n\n.preview-row[_ngcontent-%COMP%]   span[_ngcontent-%COMP%] {\n  color: #61798a;\n}\n\n.edit-grid[_ngcontent-%COMP%] {\n  display: grid;\n  gap: 0.75rem;\n}\n\n.upload-actions[_ngcontent-%COMP%] {\n  display: flex;\n  justify-content: flex-end;\n  gap: 0.75rem;\n}\n/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8uL3NyYy9hcHAvZmVhdHVyZXMvcmVjZWlwdHMvY29tcG9uZW50cy9yZWNlaXB0LXVwbG9hZC1hc3Npc3RhbnQuY29tcG9uZW50LnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFDRSxtQkFBQTtFQUNBLDhDQUFBO0FBQ0Y7O0FBRUE7RUFDRSxhQUFBO0VBQ0EsbUJBQUE7RUFDQSxXQUFBO0VBQ0EsZUFBQTtFQUNBLGNBQUE7RUFDQSwwQ0FBQTtFQUNBLG1CQUFBO0VBQ0EsbUJBQUE7RUFDQSxrQkFBQTtFQUNBLGVBQUE7QUFDRjs7QUFFQTtFQUNFLGFBQUE7QUFDRjs7QUFFQTtFQUNFLFdBQUE7RUFDQSxZQUFBO0VBQ0EsZUFBQTtFQUNBLGNBQUE7QUFDRjs7QUFFQTtFQUNFLGNBQUE7QUFDRjs7QUFFQTtFQUNFLGFBQUE7RUFDQSxtQkFBQTtFQUNBLFlBQUE7RUFDQSxtQkFBQTtFQUNBLGNBQUE7QUFDRjs7QUFFQTtFQUNFLGFBQUE7RUFDQSxZQUFBO0VBQ0EsYUFBQTtFQUNBLG1CQUFBO0VBQ0EsbUJBQUE7RUFDQSxtQkFBQTtBQUNGOztBQUVBO0VBQ0UsYUFBQTtFQUNBLDhCQUFBO0VBQ0EsU0FBQTtBQUNGOztBQUVBO0VBQ0UsY0FBQTtBQUNGOztBQUVBO0VBQ0UsYUFBQTtFQUNBLFlBQUE7QUFDRjs7QUFFQTtFQUNFLGFBQUE7RUFDQSx5QkFBQTtFQUNBLFlBQUE7QUFDRiIsInNvdXJjZXNDb250ZW50IjpbIi51cGxvYWQtY2FyZCB7XG4gIGJvcmRlci1yYWRpdXM6IDI2cHg7XG4gIGJveC1zaGFkb3c6IDAgMThweCAzNnB4IHJnYmEoMjAsIDQwLCA1NywgMC4wOCk7XG59XG5cbi51cGxvYWQtZHJvcHpvbmUge1xuICBkaXNwbGF5OiBncmlkO1xuICBwbGFjZS1pdGVtczogY2VudGVyO1xuICBnYXA6IDAuNXJlbTtcbiAgcGFkZGluZzogMS40cmVtO1xuICBtYXJnaW46IDFyZW0gMDtcbiAgYm9yZGVyOiAxcHggZGFzaGVkIHJnYmEoMTUsIDEwOCwgOTEsIDAuMzYpO1xuICBib3JkZXItcmFkaXVzOiAyMnB4O1xuICBiYWNrZ3JvdW5kOiAjZjNmYmY4O1xuICB0ZXh0LWFsaWduOiBjZW50ZXI7XG4gIGN1cnNvcjogcG9pbnRlcjtcbn1cblxuLnVwbG9hZC1kcm9wem9uZSBpbnB1dCB7XG4gIGRpc3BsYXk6IG5vbmU7XG59XG5cbi51cGxvYWQtZHJvcHpvbmUgbWF0LWljb24ge1xuICB3aWR0aDogNDJweDtcbiAgaGVpZ2h0OiA0MnB4O1xuICBmb250LXNpemU6IDQycHg7XG4gIGNvbG9yOiAjMGY2YzViO1xufVxuXG4udXBsb2FkLWRyb3B6b25lIHNwYW4ge1xuICBjb2xvcjogIzVjNzM4Mztcbn1cblxuLnByZXZpZXctbG9hZGluZyB7XG4gIGRpc3BsYXk6IGZsZXg7XG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG4gIGdhcDogMC43NXJlbTtcbiAgbWFyZ2luLWJvdHRvbTogMXJlbTtcbiAgY29sb3I6ICM0ZTY3Nzg7XG59XG5cbi5haS1wcmV2aWV3IHtcbiAgZGlzcGxheTogZ3JpZDtcbiAgZ2FwOiAwLjc1cmVtO1xuICBwYWRkaW5nOiAxcmVtO1xuICBib3JkZXItcmFkaXVzOiAxOHB4O1xuICBiYWNrZ3JvdW5kOiAjZjdmYmZkO1xuICBtYXJnaW4tYm90dG9tOiAxcmVtO1xufVxuXG4ucHJldmlldy1yb3cge1xuICBkaXNwbGF5OiBmbGV4O1xuICBqdXN0aWZ5LWNvbnRlbnQ6IHNwYWNlLWJldHdlZW47XG4gIGdhcDogMXJlbTtcbn1cblxuLnByZXZpZXctcm93IHNwYW4ge1xuICBjb2xvcjogIzYxNzk4YTtcbn1cblxuLmVkaXQtZ3JpZCB7XG4gIGRpc3BsYXk6IGdyaWQ7XG4gIGdhcDogMC43NXJlbTtcbn1cblxuLnVwbG9hZC1hY3Rpb25zIHtcbiAgZGlzcGxheTogZmxleDtcbiAganVzdGlmeS1jb250ZW50OiBmbGV4LWVuZDtcbiAgZ2FwOiAwLjc1cmVtO1xufVxuIl0sInNvdXJjZVJvb3QiOiIifQ== */"]
    });
  }
}

/***/ }),

/***/ 4134:
/*!**************************************************************!*\
  !*** ./src/app/features/receipts/receipts-page.component.ts ***!
  \**************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "ReceiptsPageComponent": () => (/* binding */ ReceiptsPageComponent)
/* harmony export */ });
/* harmony import */ var _pages_receipt_delete_dialog_component__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../pages/receipt-delete-dialog.component */ 6963);
/* harmony import */ var _pages_receipt_edit_dialog_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../pages/receipt-edit-dialog.component */ 8916);
/* harmony import */ var _pages_receipt_view_dialog_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../pages/receipt-view-dialog.component */ 5030);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @angular/core */ 2560);
/* harmony import */ var _services_receipt_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../services/receipt.service */ 535);
/* harmony import */ var _services_category_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../services/category.service */ 4655);
/* harmony import */ var _angular_material_dialog__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! @angular/material/dialog */ 1484);
/* harmony import */ var _services_notification_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../services/notification.service */ 2013);
/* harmony import */ var _components_receipt_upload_assistant_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./components/receipt-upload-assistant.component */ 3297);
/* harmony import */ var _components_receipt_filters_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./components/receipt-filters.component */ 8757);
/* harmony import */ var _components_receipt_table_component__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./components/receipt-table.component */ 8344);











class ReceiptsPageComponent {
  constructor(receiptService, categoryService, dialog, notification) {
    this.receiptService = receiptService;
    this.categoryService = categoryService;
    this.dialog = dialog;
    this.notification = notification;
    this.receipts = [];
    this.categories = [];
    this.totalReceipts = 0;
    this.pageSize = 10;
    this.pageIndex = 0;
    this.loading = false;
    this.selectedFile = null;
    this.aiPreview = null;
    this.parsingPreview = false;
    this.uploading = false;
    this.filters = {
      page: 1,
      pageSize: 10,
      search: '',
      category: '',
      dateFrom: '',
      dateTo: ''
    };
  }
  ngOnInit() {
    this.loadCategories();
    this.loadReceipts();
  }
  loadCategories() {
    this.categoryService.getCategories().subscribe({
      next: categories => {
        this.categories = categories;
      }
    });
  }
  loadReceipts() {
    this.loading = true;
    this.receiptService.getReceipts(this.filters).subscribe({
      next: response => {
        this.receipts = response.data;
        this.totalReceipts = response.total;
        this.loading = false;
      },
      error: () => {
        this.notification.error('Failed to load receipts.', 'Error');
        this.loading = false;
      }
    });
  }
  handleFiltersChange(filters) {
    this.pageIndex = 0;
    this.filters = {
      ...this.filters,
      ...filters,
      page: 1,
      pageSize: this.pageSize
    };
    this.loadReceipts();
  }
  handlePageChange(event) {
    this.pageIndex = event.pageIndex;
    this.pageSize = event.pageSize;
    this.filters = {
      ...this.filters,
      page: event.pageIndex + 1,
      pageSize: event.pageSize
    };
    this.loadReceipts();
  }
  handleFileSelected(file) {
    this.selectedFile = file;
    this.aiPreview = null;
    if (!file) {
      return;
    }
    this.parsingPreview = true;
    this.receiptService.parseReceiptAI(file).subscribe({
      next: preview => {
        this.aiPreview = preview;
        this.parsingPreview = false;
      },
      error: () => {
        this.notification.warning('AI preview is unavailable, but you can still upload the receipt.', 'Preview unavailable');
        this.parsingPreview = false;
      }
    });
  }
  uploadReceipt(payload) {
    if (!this.selectedFile || this.uploading) {
      return;
    }
    this.uploading = true;
    this.receiptService.uploadReceipt(this.selectedFile, {
      category: payload.category,
      notes: payload.notes
    }).subscribe({
      next: () => {
        this.notification.success('Receipt uploaded successfully.', 'Uploaded');
        this.selectedFile = null;
        this.aiPreview = null;
        this.uploading = false;
        this.loadReceipts();
      },
      error: () => {
        this.notification.error('Failed to upload receipt.', 'Error');
        this.uploading = false;
      }
    });
  }
  clearUploadSelection() {
    this.selectedFile = null;
    this.aiPreview = null;
  }
  viewReceipt(receipt) {
    this.dialog.open(_pages_receipt_view_dialog_component__WEBPACK_IMPORTED_MODULE_2__.ReceiptViewDialogComponent, {
      width: '420px',
      data: {
        receipt
      }
    });
  }
  editReceipt(receipt) {
    const dialogRef = this.dialog.open(_pages_receipt_edit_dialog_component__WEBPACK_IMPORTED_MODULE_1__.ReceiptEditDialogComponent, {
      width: '420px',
      data: {
        receipt
      }
    });
    dialogRef.afterClosed().subscribe(result => {
      if (!result) {
        return;
      }
      const updatedReceipt = {
        ...receipt,
        category: result.category,
        parsedContentJson: result.notes
      };
      this.receiptService.updateReceipt(receipt.id, updatedReceipt).subscribe({
        next: () => {
          this.notification.success('Receipt updated successfully.', 'Updated');
          this.loadReceipts();
        },
        error: () => {
          this.notification.error('Failed to update receipt.', 'Error');
        }
      });
    });
  }
  deleteReceipt(receipt) {
    const dialogRef = this.dialog.open(_pages_receipt_delete_dialog_component__WEBPACK_IMPORTED_MODULE_0__.ReceiptDeleteDialogComponent, {
      width: '360px',
      data: {
        receipt
      }
    });
    dialogRef.afterClosed().subscribe(confirmed => {
      if (!confirmed) {
        return;
      }
      this.receiptService.deleteReceipt(receipt.id).subscribe({
        next: () => {
          this.notification.success('Receipt deleted successfully.', 'Deleted');
          this.loadReceipts();
        },
        error: () => {
          this.notification.error('Failed to delete receipt.', 'Error');
        }
      });
    });
  }
  static {
    this.ɵfac = function ReceiptsPageComponent_Factory(t) {
      return new (t || ReceiptsPageComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵdirectiveInject"](_services_receipt_service__WEBPACK_IMPORTED_MODULE_3__.ReceiptService), _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵdirectiveInject"](_services_category_service__WEBPACK_IMPORTED_MODULE_4__.CategoryService), _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵdirectiveInject"](_angular_material_dialog__WEBPACK_IMPORTED_MODULE_10__.MatDialog), _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵdirectiveInject"](_services_notification_service__WEBPACK_IMPORTED_MODULE_5__.NotificationService));
    };
  }
  static {
    this.ɵcmp = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵdefineComponent"]({
      type: ReceiptsPageComponent,
      selectors: [["app-receipts-page"]],
      decls: 13,
      vars: 12,
      consts: [[1, "page-header"], [1, "eyebrow"], [1, "lead"], [1, "receipts-grid"], [3, "selectedFile", "preview", "parsingPreview", "uploading", "categories", "fileSelected", "uploadRequested", "cleared"], [1, "list-panel"], [3, "categories", "filters", "filtersChange"], [3, "receipts", "loading", "pageIndex", "pageSize", "totalReceipts", "pageChange", "view", "edit", "delete"]],
      template: function ReceiptsPageComponent_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementStart"](0, "section", 0)(1, "div")(2, "p", 1);
          _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵtext"](3, "Receipts");
          _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementStart"](4, "h2");
          _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵtext"](5, "Upload, review, and organize with AI help");
          _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementStart"](6, "p", 2);
          _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵtext"](7, "Preview receipt extraction before saving, then filter your history with reusable controls.");
          _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementEnd"]()()();
          _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementStart"](8, "div", 3)(9, "app-receipt-upload-assistant", 4);
          _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵlistener"]("fileSelected", function ReceiptsPageComponent_Template_app_receipt_upload_assistant_fileSelected_9_listener($event) {
            return ctx.handleFileSelected($event);
          })("uploadRequested", function ReceiptsPageComponent_Template_app_receipt_upload_assistant_uploadRequested_9_listener($event) {
            return ctx.uploadReceipt($event);
          })("cleared", function ReceiptsPageComponent_Template_app_receipt_upload_assistant_cleared_9_listener() {
            return ctx.clearUploadSelection();
          });
          _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementStart"](10, "section", 5)(11, "app-receipt-filters", 6);
          _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵlistener"]("filtersChange", function ReceiptsPageComponent_Template_app_receipt_filters_filtersChange_11_listener($event) {
            return ctx.handleFiltersChange($event);
          });
          _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementStart"](12, "app-receipt-table", 7);
          _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵlistener"]("pageChange", function ReceiptsPageComponent_Template_app_receipt_table_pageChange_12_listener($event) {
            return ctx.handlePageChange($event);
          })("view", function ReceiptsPageComponent_Template_app_receipt_table_view_12_listener($event) {
            return ctx.viewReceipt($event);
          })("edit", function ReceiptsPageComponent_Template_app_receipt_table_edit_12_listener($event) {
            return ctx.editReceipt($event);
          })("delete", function ReceiptsPageComponent_Template_app_receipt_table_delete_12_listener($event) {
            return ctx.deleteReceipt($event);
          });
          _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementEnd"]()()();
        }
        if (rf & 2) {
          _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵadvance"](9);
          _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵproperty"]("selectedFile", ctx.selectedFile)("preview", ctx.aiPreview)("parsingPreview", ctx.parsingPreview)("uploading", ctx.uploading)("categories", ctx.categories);
          _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵadvance"](2);
          _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵproperty"]("categories", ctx.categories)("filters", ctx.filters);
          _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵadvance"](1);
          _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵproperty"]("receipts", ctx.receipts)("loading", ctx.loading)("pageIndex", ctx.pageIndex)("pageSize", ctx.pageSize)("totalReceipts", ctx.totalReceipts);
        }
      },
      dependencies: [_components_receipt_upload_assistant_component__WEBPACK_IMPORTED_MODULE_6__.ReceiptUploadAssistantComponent, _components_receipt_filters_component__WEBPACK_IMPORTED_MODULE_7__.ReceiptFiltersComponent, _components_receipt_table_component__WEBPACK_IMPORTED_MODULE_8__.ReceiptTableComponent],
      styles: [".page-header[_ngcontent-%COMP%] {\n  margin-bottom: 1.25rem;\n}\n\n.eyebrow[_ngcontent-%COMP%] {\n  margin: 0 0 0.4rem;\n  color: #0f6c5b;\n  letter-spacing: 0.14em;\n  text-transform: uppercase;\n  font-size: 0.78rem;\n}\n\n.page-header[_ngcontent-%COMP%]   h2[_ngcontent-%COMP%] {\n  margin: 0 0 0.35rem;\n  font-size: clamp(1.8rem, 4vw, 2.6rem);\n}\n\n.lead[_ngcontent-%COMP%] {\n  margin: 0;\n  color: #577083;\n}\n\n.receipts-grid[_ngcontent-%COMP%] {\n  display: grid;\n  grid-template-columns: minmax(320px, 380px) minmax(0, 1fr);\n  gap: 1rem;\n  align-items: start;\n}\n\n.list-panel[_ngcontent-%COMP%] {\n  display: grid;\n  gap: 1rem;\n}\n\n@media (max-width: 1080px) {\n  .receipts-grid[_ngcontent-%COMP%] {\n    grid-template-columns: 1fr;\n  }\n}\n/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8uL3NyYy9hcHAvZmVhdHVyZXMvcmVjZWlwdHMvcmVjZWlwdHMtcGFnZS5jb21wb25lbnQuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUNFLHNCQUFBO0FBQ0Y7O0FBRUE7RUFDRSxrQkFBQTtFQUNBLGNBQUE7RUFDQSxzQkFBQTtFQUNBLHlCQUFBO0VBQ0Esa0JBQUE7QUFDRjs7QUFFQTtFQUNFLG1CQUFBO0VBQ0EscUNBQUE7QUFDRjs7QUFFQTtFQUNFLFNBQUE7RUFDQSxjQUFBO0FBQ0Y7O0FBRUE7RUFDRSxhQUFBO0VBQ0EsMERBQUE7RUFDQSxTQUFBO0VBQ0Esa0JBQUE7QUFDRjs7QUFFQTtFQUNFLGFBQUE7RUFDQSxTQUFBO0FBQ0Y7O0FBRUE7RUFDRTtJQUNFLDBCQUFBO0VBQ0Y7QUFDRiIsInNvdXJjZXNDb250ZW50IjpbIi5wYWdlLWhlYWRlciB7XG4gIG1hcmdpbi1ib3R0b206IDEuMjVyZW07XG59XG5cbi5leWVicm93IHtcbiAgbWFyZ2luOiAwIDAgMC40cmVtO1xuICBjb2xvcjogIzBmNmM1YjtcbiAgbGV0dGVyLXNwYWNpbmc6IDAuMTRlbTtcbiAgdGV4dC10cmFuc2Zvcm06IHVwcGVyY2FzZTtcbiAgZm9udC1zaXplOiAwLjc4cmVtO1xufVxuXG4ucGFnZS1oZWFkZXIgaDIge1xuICBtYXJnaW46IDAgMCAwLjM1cmVtO1xuICBmb250LXNpemU6IGNsYW1wKDEuOHJlbSwgNHZ3LCAyLjZyZW0pO1xufVxuXG4ubGVhZCB7XG4gIG1hcmdpbjogMDtcbiAgY29sb3I6ICM1NzcwODM7XG59XG5cbi5yZWNlaXB0cy1ncmlkIHtcbiAgZGlzcGxheTogZ3JpZDtcbiAgZ3JpZC10ZW1wbGF0ZS1jb2x1bW5zOiBtaW5tYXgoMzIwcHgsIDM4MHB4KSBtaW5tYXgoMCwgMWZyKTtcbiAgZ2FwOiAxcmVtO1xuICBhbGlnbi1pdGVtczogc3RhcnQ7XG59XG5cbi5saXN0LXBhbmVsIHtcbiAgZGlzcGxheTogZ3JpZDtcbiAgZ2FwOiAxcmVtO1xufVxuXG5AbWVkaWEgKG1heC13aWR0aDogMTA4MHB4KSB7XG4gIC5yZWNlaXB0cy1ncmlkIHtcbiAgICBncmlkLXRlbXBsYXRlLWNvbHVtbnM6IDFmcjtcbiAgfVxufVxuIl0sInNvdXJjZVJvb3QiOiIifQ== */"]
    });
  }
}

/***/ }),

/***/ 3942:
/*!**************************************************************!*\
  !*** ./src/app/features/receipts/receipts-routing.module.ts ***!
  \**************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "ReceiptsRoutingModule": () => (/* binding */ ReceiptsRoutingModule)
/* harmony export */ });
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ 124);
/* harmony import */ var _receipts_page_component__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./receipts-page.component */ 4134);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ 2560);




const routes = [{
  path: '',
  component: _receipts_page_component__WEBPACK_IMPORTED_MODULE_0__.ReceiptsPageComponent
}];
class ReceiptsRoutingModule {
  static {
    this.ɵfac = function ReceiptsRoutingModule_Factory(t) {
      return new (t || ReceiptsRoutingModule)();
    };
  }
  static {
    this.ɵmod = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineNgModule"]({
      type: ReceiptsRoutingModule
    });
  }
  static {
    this.ɵinj = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineInjector"]({
      imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__.RouterModule.forChild(routes), _angular_router__WEBPACK_IMPORTED_MODULE_2__.RouterModule]
    });
  }
}
(function () {
  (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵsetNgModuleScope"](ReceiptsRoutingModule, {
    imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__.RouterModule],
    exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__.RouterModule]
  });
})();

/***/ }),

/***/ 2246:
/*!******************************************************!*\
  !*** ./src/app/features/receipts/receipts.module.ts ***!
  \******************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "ReceiptsModule": () => (/* binding */ ReceiptsModule)
/* harmony export */ });
/* harmony import */ var _services_category_service__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../services/category.service */ 4655);
/* harmony import */ var _services_notification_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../services/notification.service */ 2013);
/* harmony import */ var _shared_shared_module__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../shared/shared.module */ 4466);
/* harmony import */ var _pages_receipt_delete_dialog_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../pages/receipt-delete-dialog.component */ 6963);
/* harmony import */ var _pages_receipt_edit_dialog_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../pages/receipt-edit-dialog.component */ 8916);
/* harmony import */ var _pages_receipt_view_dialog_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../pages/receipt-view-dialog.component */ 5030);
/* harmony import */ var _components_receipt_filters_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./components/receipt-filters.component */ 8757);
/* harmony import */ var _components_receipt_table_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./components/receipt-table.component */ 8344);
/* harmony import */ var _components_receipt_upload_assistant_component__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./components/receipt-upload-assistant.component */ 3297);
/* harmony import */ var _receipts_page_component__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./receipts-page.component */ 4134);
/* harmony import */ var _receipts_routing_module__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./receipts-routing.module */ 3942);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! @angular/core */ 2560);












class ReceiptsModule {
  static {
    this.ɵfac = function ReceiptsModule_Factory(t) {
      return new (t || ReceiptsModule)();
    };
  }
  static {
    this.ɵmod = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵdefineNgModule"]({
      type: ReceiptsModule
    });
  }
  static {
    this.ɵinj = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵdefineInjector"]({
      providers: [_services_category_service__WEBPACK_IMPORTED_MODULE_0__.CategoryService, _services_notification_service__WEBPACK_IMPORTED_MODULE_1__.NotificationService],
      imports: [_shared_shared_module__WEBPACK_IMPORTED_MODULE_2__.SharedModule, _receipts_routing_module__WEBPACK_IMPORTED_MODULE_10__.ReceiptsRoutingModule]
    });
  }
}
(function () {
  (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵsetNgModuleScope"](ReceiptsModule, {
    declarations: [_receipts_page_component__WEBPACK_IMPORTED_MODULE_9__.ReceiptsPageComponent, _components_receipt_upload_assistant_component__WEBPACK_IMPORTED_MODULE_8__.ReceiptUploadAssistantComponent, _components_receipt_filters_component__WEBPACK_IMPORTED_MODULE_6__.ReceiptFiltersComponent, _components_receipt_table_component__WEBPACK_IMPORTED_MODULE_7__.ReceiptTableComponent, _pages_receipt_view_dialog_component__WEBPACK_IMPORTED_MODULE_5__.ReceiptViewDialogComponent, _pages_receipt_edit_dialog_component__WEBPACK_IMPORTED_MODULE_4__.ReceiptEditDialogComponent, _pages_receipt_delete_dialog_component__WEBPACK_IMPORTED_MODULE_3__.ReceiptDeleteDialogComponent],
    imports: [_shared_shared_module__WEBPACK_IMPORTED_MODULE_2__.SharedModule, _receipts_routing_module__WEBPACK_IMPORTED_MODULE_10__.ReceiptsRoutingModule]
  });
})();

/***/ }),

/***/ 6963:
/*!**********************************************************!*\
  !*** ./src/app/pages/receipt-delete-dialog.component.ts ***!
  \**********************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "ReceiptDeleteDialogComponent": () => (/* binding */ ReceiptDeleteDialogComponent)
/* harmony export */ });
/* harmony import */ var _angular_material_dialog__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/material/dialog */ 1484);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ 2560);
/* harmony import */ var _angular_material_button__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/material/button */ 4522);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/common */ 4666);





class ReceiptDeleteDialogComponent {
  constructor(dialogRef, data) {
    this.dialogRef = dialogRef;
    this.data = data;
  }
  confirm() {
    this.dialogRef.close(true);
  }
  cancel() {
    this.dialogRef.close(false);
  }
  static {
    this.ɵfac = function ReceiptDeleteDialogComponent_Factory(t) {
      return new (t || ReceiptDeleteDialogComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_material_dialog__WEBPACK_IMPORTED_MODULE_1__.MatDialogRef), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_material_dialog__WEBPACK_IMPORTED_MODULE_1__.MAT_DIALOG_DATA));
    };
  }
  static {
    this.ɵcmp = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({
      type: ReceiptDeleteDialogComponent,
      selectors: [["app-receipt-delete-dialog"]],
      decls: 19,
      vars: 4,
      consts: [["mat-dialog-title", ""], ["align", "end"], ["mat-button", "", 3, "click"], ["mat-raised-button", "", "color", "warn", 3, "click"]],
      template: function ReceiptDeleteDialogComponent_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "h2", 0);
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, "Delete Receipt");
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "mat-dialog-content")(3, "p");
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](4, "Are you sure you want to delete this receipt?");
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "div")(6, "strong");
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](7, "Vendor:");
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](8);
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](9, "div")(10, "strong");
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](11, "Amount:");
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](12);
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipe"](13, "currency");
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]()();
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](14, "mat-dialog-actions", 1)(15, "button", 2);
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function ReceiptDeleteDialogComponent_Template_button_click_15_listener() {
            return ctx.cancel();
          });
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](16, "Cancel");
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](17, "button", 3);
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function ReceiptDeleteDialogComponent_Template_button_click_17_listener() {
            return ctx.confirm();
          });
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](18, "Delete");
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]()();
        }
        if (rf & 2) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](8);
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" ", ctx.data.receipt.vendor || "Unknown", "");
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](4);
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" ", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipeBind1"](13, 2, ctx.data.receipt.totalAmount), "");
        }
      },
      dependencies: [_angular_material_button__WEBPACK_IMPORTED_MODULE_2__.MatButton, _angular_material_dialog__WEBPACK_IMPORTED_MODULE_1__.MatDialogTitle, _angular_material_dialog__WEBPACK_IMPORTED_MODULE_1__.MatDialogContent, _angular_material_dialog__WEBPACK_IMPORTED_MODULE_1__.MatDialogActions, _angular_common__WEBPACK_IMPORTED_MODULE_3__.CurrencyPipe],
      styles: ["\n/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsInNvdXJjZVJvb3QiOiIifQ== */"]
    });
  }
}

/***/ }),

/***/ 8916:
/*!********************************************************!*\
  !*** ./src/app/pages/receipt-edit-dialog.component.ts ***!
  \********************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "ReceiptEditDialogComponent": () => (/* binding */ ReceiptEditDialogComponent)
/* harmony export */ });
/* harmony import */ var _angular_material_dialog__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/material/dialog */ 1484);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ 2560);
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/forms */ 2508);
/* harmony import */ var _angular_material_button__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/material/button */ 4522);
/* harmony import */ var _angular_material_form_field__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/material/form-field */ 5074);
/* harmony import */ var _angular_material_input__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/material/input */ 8562);







class ReceiptEditDialogComponent {
  constructor(dialogRef, data) {
    this.dialogRef = dialogRef;
    this.data = data;
    this.category = data.receipt.category || '';
    this.notes = data.receipt.notes || '';
  }
  save() {
    this.dialogRef.close({
      category: this.category,
      notes: this.notes
    });
  }
  close() {
    this.dialogRef.close();
  }
  static {
    this.ɵfac = function ReceiptEditDialogComponent_Factory(t) {
      return new (t || ReceiptEditDialogComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_material_dialog__WEBPACK_IMPORTED_MODULE_1__.MatDialogRef), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_material_dialog__WEBPACK_IMPORTED_MODULE_1__.MAT_DIALOG_DATA));
    };
  }
  static {
    this.ɵcmp = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({
      type: ReceiptEditDialogComponent,
      selectors: [["app-receipt-edit-dialog"]],
      decls: 16,
      vars: 2,
      consts: [["mat-dialog-title", ""], ["appearance", "outline", 2, "width", "100%"], ["matInput", "", 3, "ngModel", "ngModelChange"], ["matInput", "", "rows", "2", 3, "ngModel", "ngModelChange"], ["align", "end"], ["mat-button", "", 3, "click"], ["mat-raised-button", "", "color", "primary", 3, "click"]],
      template: function ReceiptEditDialogComponent_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "h2", 0);
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, "Edit Receipt");
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "mat-dialog-content")(3, "mat-form-field", 1)(4, "mat-label");
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](5, "Category");
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](6, "input", 2);
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("ngModelChange", function ReceiptEditDialogComponent_Template_input_ngModelChange_6_listener($event) {
            return ctx.category = $event;
          });
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]()();
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](7, "mat-form-field", 1)(8, "mat-label");
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](9, "Notes");
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](10, "textarea", 3);
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("ngModelChange", function ReceiptEditDialogComponent_Template_textarea_ngModelChange_10_listener($event) {
            return ctx.notes = $event;
          });
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]()()();
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](11, "mat-dialog-actions", 4)(12, "button", 5);
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function ReceiptEditDialogComponent_Template_button_click_12_listener() {
            return ctx.close();
          });
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](13, "Cancel");
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](14, "button", 6);
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function ReceiptEditDialogComponent_Template_button_click_14_listener() {
            return ctx.save();
          });
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](15, "Save");
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]()();
        }
        if (rf & 2) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](6);
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngModel", ctx.category);
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](4);
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngModel", ctx.notes);
        }
      },
      dependencies: [_angular_forms__WEBPACK_IMPORTED_MODULE_2__.DefaultValueAccessor, _angular_forms__WEBPACK_IMPORTED_MODULE_2__.NgControlStatus, _angular_forms__WEBPACK_IMPORTED_MODULE_2__.NgModel, _angular_material_button__WEBPACK_IMPORTED_MODULE_3__.MatButton, _angular_material_dialog__WEBPACK_IMPORTED_MODULE_1__.MatDialogTitle, _angular_material_dialog__WEBPACK_IMPORTED_MODULE_1__.MatDialogContent, _angular_material_dialog__WEBPACK_IMPORTED_MODULE_1__.MatDialogActions, _angular_material_form_field__WEBPACK_IMPORTED_MODULE_4__.MatFormField, _angular_material_form_field__WEBPACK_IMPORTED_MODULE_4__.MatLabel, _angular_material_input__WEBPACK_IMPORTED_MODULE_5__.MatInput],
      styles: ["\n/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsInNvdXJjZVJvb3QiOiIifQ== */"]
    });
  }
}

/***/ }),

/***/ 5030:
/*!********************************************************!*\
  !*** ./src/app/pages/receipt-view-dialog.component.ts ***!
  \********************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "ReceiptViewDialogComponent": () => (/* binding */ ReceiptViewDialogComponent)
/* harmony export */ });
/* harmony import */ var _angular_material_dialog__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/material/dialog */ 1484);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ 2560);
/* harmony import */ var _angular_material_button__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/material/button */ 4522);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/common */ 4666);





class ReceiptViewDialogComponent {
  constructor(dialogRef, data) {
    this.dialogRef = dialogRef;
    this.data = data;
  }
  close() {
    this.dialogRef.close();
  }
  static {
    this.ɵfac = function ReceiptViewDialogComponent_Factory(t) {
      return new (t || ReceiptViewDialogComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_material_dialog__WEBPACK_IMPORTED_MODULE_1__.MatDialogRef), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_material_dialog__WEBPACK_IMPORTED_MODULE_1__.MAT_DIALOG_DATA));
    };
  }
  static {
    this.ɵcmp = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({
      type: ReceiptViewDialogComponent,
      selectors: [["app-receipt-view-dialog"]],
      decls: 24,
      vars: 9,
      consts: [["mat-dialog-title", ""], ["align", "end"], ["mat-button", "", 3, "click"]],
      template: function ReceiptViewDialogComponent_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "h2", 0);
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, "Receipt Details");
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "mat-dialog-content")(3, "div")(4, "strong");
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](5, "Date:");
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](6);
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipe"](7, "date");
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](8, "div")(9, "strong");
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](10, "Vendor:");
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](11);
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](12, "div")(13, "strong");
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](14, "Amount:");
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](15);
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipe"](16, "currency");
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](17, "div")(18, "strong");
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](19, "Category:");
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](20);
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]()();
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](21, "mat-dialog-actions", 1)(22, "button", 2);
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function ReceiptViewDialogComponent_Template_button_click_22_listener() {
            return ctx.close();
          });
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](23, "Close");
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]()();
        }
        if (rf & 2) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](6);
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" ", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipeBind2"](7, 4, ctx.data.receipt.uploadedAt, "short"), "");
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](5);
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" ", ctx.data.receipt.vendor || "Unknown", "");
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](4);
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" ", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipeBind1"](16, 7, ctx.data.receipt.totalAmount), "");
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](5);
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" ", ctx.data.receipt.category || "Uncategorized", "");
        }
      },
      dependencies: [_angular_material_button__WEBPACK_IMPORTED_MODULE_2__.MatButton, _angular_material_dialog__WEBPACK_IMPORTED_MODULE_1__.MatDialogTitle, _angular_material_dialog__WEBPACK_IMPORTED_MODULE_1__.MatDialogContent, _angular_material_dialog__WEBPACK_IMPORTED_MODULE_1__.MatDialogActions, _angular_common__WEBPACK_IMPORTED_MODULE_3__.CurrencyPipe, _angular_common__WEBPACK_IMPORTED_MODULE_3__.DatePipe],
      styles: ["\n/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsInNvdXJjZVJvb3QiOiIifQ== */"]
    });
  }
}

/***/ })

}]);
//# sourceMappingURL=src_app_features_receipts_receipts_module_ts.js.map