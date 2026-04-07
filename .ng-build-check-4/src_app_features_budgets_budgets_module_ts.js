"use strict";
(self["webpackChunkmy_app"] = self["webpackChunkmy_app"] || []).push([["src_app_features_budgets_budgets_module_ts"],{

/***/ 9864:
/*!************************************************************!*\
  !*** ./src/app/features/budgets/budgets-routing.module.ts ***!
  \************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "BudgetsRoutingModule": () => (/* binding */ BudgetsRoutingModule)
/* harmony export */ });
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ 124);
/* harmony import */ var _pages_budgets_component__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../pages/budgets.component */ 2956);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ 2560);




const routes = [{
  path: '',
  component: _pages_budgets_component__WEBPACK_IMPORTED_MODULE_0__.BudgetsComponent
}];
class BudgetsRoutingModule {
  static {
    this.ɵfac = function BudgetsRoutingModule_Factory(t) {
      return new (t || BudgetsRoutingModule)();
    };
  }
  static {
    this.ɵmod = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineNgModule"]({
      type: BudgetsRoutingModule
    });
  }
  static {
    this.ɵinj = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineInjector"]({
      imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__.RouterModule.forChild(routes), _angular_router__WEBPACK_IMPORTED_MODULE_2__.RouterModule]
    });
  }
}
(function () {
  (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵsetNgModuleScope"](BudgetsRoutingModule, {
    imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__.RouterModule],
    exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__.RouterModule]
  });
})();

/***/ }),

/***/ 9072:
/*!****************************************************!*\
  !*** ./src/app/features/budgets/budgets.module.ts ***!
  \****************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "BudgetsModule": () => (/* binding */ BudgetsModule)
/* harmony export */ });
/* harmony import */ var _pages_budget_edit_dialog_component__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../pages/budget-edit-dialog.component */ 9639);
/* harmony import */ var _pages_budgets_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../pages/budgets.component */ 2956);
/* harmony import */ var _pages_confirm_dialog_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../pages/confirm-dialog.component */ 9201);
/* harmony import */ var _shared_shared_module__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../shared/shared.module */ 4466);
/* harmony import */ var _budgets_routing_module__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./budgets-routing.module */ 9864);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/core */ 2560);






class BudgetsModule {
  static {
    this.ɵfac = function BudgetsModule_Factory(t) {
      return new (t || BudgetsModule)();
    };
  }
  static {
    this.ɵmod = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵdefineNgModule"]({
      type: BudgetsModule
    });
  }
  static {
    this.ɵinj = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵdefineInjector"]({
      imports: [_shared_shared_module__WEBPACK_IMPORTED_MODULE_3__.SharedModule, _budgets_routing_module__WEBPACK_IMPORTED_MODULE_4__.BudgetsRoutingModule]
    });
  }
}
(function () {
  (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵsetNgModuleScope"](BudgetsModule, {
    declarations: [_pages_budgets_component__WEBPACK_IMPORTED_MODULE_1__.BudgetsComponent, _pages_budget_edit_dialog_component__WEBPACK_IMPORTED_MODULE_0__.BudgetEditDialogComponent, _pages_confirm_dialog_component__WEBPACK_IMPORTED_MODULE_2__.ConfirmDialogComponent],
    imports: [_shared_shared_module__WEBPACK_IMPORTED_MODULE_3__.SharedModule, _budgets_routing_module__WEBPACK_IMPORTED_MODULE_4__.BudgetsRoutingModule]
  });
})();

/***/ }),

/***/ 9639:
/*!*******************************************************!*\
  !*** ./src/app/pages/budget-edit-dialog.component.ts ***!
  \*******************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "BudgetEditDialogComponent": () => (/* binding */ BudgetEditDialogComponent)
/* harmony export */ });
/* harmony import */ var _angular_material_dialog__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/material/dialog */ 1484);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ 2560);
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/forms */ 2508);
/* harmony import */ var _angular_material_button__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/material/button */ 4522);
/* harmony import */ var _angular_material_form_field__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/material/form-field */ 5074);
/* harmony import */ var _angular_material_input__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/material/input */ 8562);







class BudgetEditDialogComponent {
  constructor(dialogRef, data) {
    this.dialogRef = dialogRef;
    this.data = data;
    this.category = data.budget?.category || '';
    this.amount = data.budget?.amount || 0;
  }
  save() {
    this.dialogRef.close({
      category: this.category,
      amount: this.amount
    });
  }
  close() {
    this.dialogRef.close();
  }
  static {
    this.ɵfac = function BudgetEditDialogComponent_Factory(t) {
      return new (t || BudgetEditDialogComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_material_dialog__WEBPACK_IMPORTED_MODULE_1__.MatDialogRef), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_material_dialog__WEBPACK_IMPORTED_MODULE_1__.MAT_DIALOG_DATA));
    };
  }
  static {
    this.ɵcmp = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({
      type: BudgetEditDialogComponent,
      selectors: [["app-budget-edit-dialog"]],
      decls: 17,
      vars: 3,
      consts: [["mat-dialog-title", ""], ["appearance", "fill", 2, "width", "100%"], ["matInput", "", "name", "category", "required", "", 3, "ngModel", "ngModelChange"], ["matInput", "", "type", "number", "name", "amount", "required", "", "min", "0", 3, "ngModel", "ngModelChange"], ["align", "end"], ["mat-button", "", 3, "click"], ["mat-raised-button", "", "color", "primary", 3, "click"]],
      template: function BudgetEditDialogComponent_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "h2", 0);
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1);
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "mat-dialog-content")(3, "form")(4, "mat-form-field", 1)(5, "mat-label");
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](6, "Category");
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](7, "input", 2);
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("ngModelChange", function BudgetEditDialogComponent_Template_input_ngModelChange_7_listener($event) {
            return ctx.category = $event;
          });
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]()();
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](8, "mat-form-field", 1)(9, "mat-label");
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](10, "Amount");
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](11, "input", 3);
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("ngModelChange", function BudgetEditDialogComponent_Template_input_ngModelChange_11_listener($event) {
            return ctx.amount = $event;
          });
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]()()()();
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](12, "mat-dialog-actions", 4)(13, "button", 5);
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function BudgetEditDialogComponent_Template_button_click_13_listener() {
            return ctx.close();
          });
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](14, "Cancel");
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](15, "button", 6);
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function BudgetEditDialogComponent_Template_button_click_15_listener() {
            return ctx.save();
          });
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](16, "Save");
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]()();
        }
        if (rf & 2) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](ctx.data.budget ? "Edit Budget" : "Add Budget");
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](6);
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngModel", ctx.category);
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](4);
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngModel", ctx.amount);
        }
      },
      dependencies: [_angular_forms__WEBPACK_IMPORTED_MODULE_2__["ɵNgNoValidate"], _angular_forms__WEBPACK_IMPORTED_MODULE_2__.DefaultValueAccessor, _angular_forms__WEBPACK_IMPORTED_MODULE_2__.NumberValueAccessor, _angular_forms__WEBPACK_IMPORTED_MODULE_2__.NgControlStatus, _angular_forms__WEBPACK_IMPORTED_MODULE_2__.NgControlStatusGroup, _angular_forms__WEBPACK_IMPORTED_MODULE_2__.RequiredValidator, _angular_forms__WEBPACK_IMPORTED_MODULE_2__.MinValidator, _angular_forms__WEBPACK_IMPORTED_MODULE_2__.NgModel, _angular_forms__WEBPACK_IMPORTED_MODULE_2__.NgForm, _angular_material_button__WEBPACK_IMPORTED_MODULE_3__.MatButton, _angular_material_dialog__WEBPACK_IMPORTED_MODULE_1__.MatDialogTitle, _angular_material_dialog__WEBPACK_IMPORTED_MODULE_1__.MatDialogContent, _angular_material_dialog__WEBPACK_IMPORTED_MODULE_1__.MatDialogActions, _angular_material_form_field__WEBPACK_IMPORTED_MODULE_4__.MatFormField, _angular_material_form_field__WEBPACK_IMPORTED_MODULE_4__.MatLabel, _angular_material_input__WEBPACK_IMPORTED_MODULE_5__.MatInput],
      styles: ["h2[_ngcontent-%COMP%] {\n  margin-bottom: 16px;\n}\n\nmat-form-field[_ngcontent-%COMP%] {\n  margin-bottom: 16px;\n}\n/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8uL3NyYy9hcHAvcGFnZXMvYnVkZ2V0LWVkaXQtZGlhbG9nLmNvbXBvbmVudC5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQ0UsbUJBQUE7QUFDRjs7QUFDQTtFQUNFLG1CQUFBO0FBRUYiLCJzb3VyY2VzQ29udGVudCI6WyJoMiB7XHJcbiAgbWFyZ2luLWJvdHRvbTogMTZweDtcclxufVxyXG5tYXQtZm9ybS1maWVsZCB7XHJcbiAgbWFyZ2luLWJvdHRvbTogMTZweDtcclxufVxyXG4iXSwic291cmNlUm9vdCI6IiJ9 */"]
    });
  }
}

/***/ }),

/***/ 2956:
/*!********************************************!*\
  !*** ./src/app/pages/budgets.component.ts ***!
  \********************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "BudgetsComponent": () => (/* binding */ BudgetsComponent)
/* harmony export */ });
/* harmony import */ var _budget_edit_dialog_component__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./budget-edit-dialog.component */ 9639);
/* harmony import */ var _confirm_dialog_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./confirm-dialog.component */ 9201);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/core */ 2560);
/* harmony import */ var _services_budget_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../services/budget.service */ 5488);
/* harmony import */ var _angular_material_dialog__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/material/dialog */ 1484);
/* harmony import */ var _services_notification_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../services/notification.service */ 2013);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/common */ 4666);
/* harmony import */ var _angular_material_button__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/material/button */ 4522);
/* harmony import */ var _angular_material_icon__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @angular/material/icon */ 7822);
/* harmony import */ var _angular_material_progress_spinner__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @angular/material/progress-spinner */ 1708);
/* harmony import */ var _angular_material_table__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! @angular/material/table */ 5288);
/* harmony import */ var _angular_material_tooltip__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! @angular/material/tooltip */ 6896);












function BudgetsComponent_div_5_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](0, "div", 5);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelement"](1, "mat-spinner", 6);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
  }
}
function BudgetsComponent_div_6_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](0, "div", 7)(1, "p");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](2, "No budgets found. Click \"Add Budget\" to create one.");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]()();
  }
}
function BudgetsComponent_div_7_th_3_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](0, "th", 18);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](1, "Period");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
  }
}
function BudgetsComponent_div_7_td_4_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](0, "td", 19);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
  }
  if (rf & 2) {
    const b_r13 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtextInterpolate"](b_r13.period);
  }
}
function BudgetsComponent_div_7_th_6_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](0, "th", 18);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](1, "Category");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
  }
}
function BudgetsComponent_div_7_td_7_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](0, "td", 19);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
  }
  if (rf & 2) {
    const b_r14 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtextInterpolate"](b_r14.category);
  }
}
function BudgetsComponent_div_7_th_9_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](0, "th", 18);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](1, "Amount");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
  }
}
function BudgetsComponent_div_7_td_10_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](0, "td", 19);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵpipe"](2, "currency");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
  }
  if (rf & 2) {
    const b_r15 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵpipeBind1"](2, 1, b_r15.amount));
  }
}
function BudgetsComponent_div_7_th_12_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](0, "th", 18);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](1, "Actions");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
  }
}
function BudgetsComponent_div_7_td_13_Template(rf, ctx) {
  if (rf & 1) {
    const _r18 = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](0, "td", 19)(1, "button", 20);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵlistener"]("click", function BudgetsComponent_div_7_td_13_Template_button_click_1_listener() {
      const restoredCtx = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵrestoreView"](_r18);
      const b_r16 = restoredCtx.$implicit;
      const ctx_r17 = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵnextContext"](2);
      return _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵresetView"](ctx_r17.editBudget(b_r16));
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](2, "mat-icon");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](3, "edit");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](4, "button", 21);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵlistener"]("click", function BudgetsComponent_div_7_td_13_Template_button_click_4_listener() {
      const restoredCtx = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵrestoreView"](_r18);
      const b_r16 = restoredCtx.$implicit;
      const ctx_r19 = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵnextContext"](2);
      return _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵresetView"](ctx_r19.deleteBudget(b_r16));
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](5, "mat-icon");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](6, "delete");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]()()();
  }
}
function BudgetsComponent_div_7_tr_14_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelement"](0, "tr", 22);
  }
}
function BudgetsComponent_div_7_tr_15_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelement"](0, "tr", 23);
  }
}
function BudgetsComponent_div_7_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](0, "div", 8)(1, "table", 9);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementContainerStart"](2, 10);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtemplate"](3, BudgetsComponent_div_7_th_3_Template, 2, 0, "th", 11);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtemplate"](4, BudgetsComponent_div_7_td_4_Template, 2, 1, "td", 12);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementContainerEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementContainerStart"](5, 13);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtemplate"](6, BudgetsComponent_div_7_th_6_Template, 2, 0, "th", 11);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtemplate"](7, BudgetsComponent_div_7_td_7_Template, 2, 1, "td", 12);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementContainerEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementContainerStart"](8, 14);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtemplate"](9, BudgetsComponent_div_7_th_9_Template, 2, 0, "th", 11);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtemplate"](10, BudgetsComponent_div_7_td_10_Template, 3, 3, "td", 12);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementContainerEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementContainerStart"](11, 15);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtemplate"](12, BudgetsComponent_div_7_th_12_Template, 2, 0, "th", 11);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtemplate"](13, BudgetsComponent_div_7_td_13_Template, 7, 0, "td", 12);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementContainerEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtemplate"](14, BudgetsComponent_div_7_tr_14_Template, 1, 0, "tr", 16);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtemplate"](15, BudgetsComponent_div_7_tr_15_Template, 1, 0, "tr", 17);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]()();
  }
  if (rf & 2) {
    const ctx_r2 = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("dataSource", ctx_r2.budgets);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](13);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("matHeaderRowDef", ctx_r2.displayedColumns);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("matRowDefColumns", ctx_r2.displayedColumns);
  }
}
class BudgetsComponent {
  constructor(budgetService, dialog, notification) {
    this.budgetService = budgetService;
    this.dialog = dialog;
    this.notification = notification;
    this.budgets = [];
    this.displayedColumns = ['period', 'category', 'amount', 'actions'];
    this.loading = false;
  }
  ngOnInit() {
    this.loadBudgets();
  }
  loadBudgets() {
    this.loading = true;
    this.budgetService.getBudgets().subscribe({
      next: data => {
        // Map backend fields to Budget model
        this.budgets = data.map(item => ({
          id: item.id,
          period: item.lastReset ? item.lastReset.slice(0, 7) : '',
          category: item.category,
          amount: item.monthlyLimit
        }));
        this.loading = false;
      },
      error: () => {
        this.notification.error('Failed to load budgets');
        this.loading = false;
      }
    });
  }
  // Add Budget
  addBudget() {
    const dialogRef = this.dialog.open(_budget_edit_dialog_component__WEBPACK_IMPORTED_MODULE_0__.BudgetEditDialogComponent, {
      width: '400px',
      data: {}
    });
    dialogRef.afterClosed().subscribe(result => {
      if (result && result.category && result.amount) {
        this.budgetService.addBudget({
          period: new Date().toISOString().slice(0, 7),
          category: result.category,
          amount: result.amount
        }).subscribe({
          next: () => {
            this.notification.success('Budget added');
            this.loadBudgets();
          },
          error: () => this.notification.error('Failed to add budget')
        });
      }
    });
  }
  editBudget(budget) {
    const dialogRef = this.dialog.open(_budget_edit_dialog_component__WEBPACK_IMPORTED_MODULE_0__.BudgetEditDialogComponent, {
      width: '400px',
      data: {
        budget
      }
    });
    dialogRef.afterClosed().subscribe(result => {
      if (result && result.category && result.amount !== undefined) {
        this.budgetService.updateBudget(budget.id, {
          category: result.category,
          amount: result.amount,
          lastReset: budget.lastReset // preserve lastReset
        }).subscribe({
          next: () => {
            this.notification.success('Budget updated');
            this.loadBudgets();
          },
          error: () => this.notification.error('Failed to update budget')
        });
      }
    });
  }
  deleteBudget(budget) {
    const dialogRef = this.dialog.open(_confirm_dialog_component__WEBPACK_IMPORTED_MODULE_1__.ConfirmDialogComponent, {
      width: '350px',
      data: {
        title: 'Delete Budget',
        message: 'Are you sure you want to delete this budget?'
      }
    });
    dialogRef.afterClosed().subscribe(result => {
      if (result) {
        this.budgetService.deleteBudget(budget.id).subscribe({
          next: () => {
            this.notification.success('Budget deleted');
            this.loadBudgets();
          },
          error: () => this.notification.error('Failed to delete budget')
        });
      }
    });
  }
  static {
    this.ɵfac = function BudgetsComponent_Factory(t) {
      return new (t || BudgetsComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵdirectiveInject"](_services_budget_service__WEBPACK_IMPORTED_MODULE_2__.BudgetService), _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵdirectiveInject"](_angular_material_dialog__WEBPACK_IMPORTED_MODULE_5__.MatDialog), _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵdirectiveInject"](_services_notification_service__WEBPACK_IMPORTED_MODULE_3__.NotificationService));
    };
  }
  static {
    this.ɵcmp = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵdefineComponent"]({
      type: BudgetsComponent,
      selectors: [["app-budgets"]],
      decls: 8,
      vars: 3,
      consts: [[1, "budgets-header"], ["mat-raised-button", "", "color", "primary", 3, "click"], ["class", "loading-spinner", 4, "ngIf"], ["class", "empty-state", 4, "ngIf"], ["class", "budgets-table-container", 4, "ngIf"], [1, "loading-spinner"], ["diameter", "40"], [1, "empty-state"], [1, "budgets-table-container"], ["mat-table", "", 1, "mat-elevation-z1", "budgets-table", 3, "dataSource"], ["matColumnDef", "period"], ["mat-header-cell", "", 4, "matHeaderCellDef"], ["mat-cell", "", 4, "matCellDef"], ["matColumnDef", "category"], ["matColumnDef", "amount"], ["matColumnDef", "actions"], ["mat-header-row", "", 4, "matHeaderRowDef"], ["mat-row", "", 4, "matRowDef", "matRowDefColumns"], ["mat-header-cell", ""], ["mat-cell", ""], ["mat-icon-button", "", "matTooltip", "Edit", 3, "click"], ["mat-icon-button", "", "matTooltip", "Delete", "color", "warn", 3, "click"], ["mat-header-row", ""], ["mat-row", ""]],
      template: function BudgetsComponent_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](0, "div", 0)(1, "h2");
          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](2, "Budgets");
          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](3, "button", 1);
          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵlistener"]("click", function BudgetsComponent_Template_button_click_3_listener() {
            return ctx.addBudget();
          });
          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](4, "Add Budget");
          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]()();
          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtemplate"](5, BudgetsComponent_div_5_Template, 2, 0, "div", 2);
          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtemplate"](6, BudgetsComponent_div_6_Template, 3, 0, "div", 3);
          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtemplate"](7, BudgetsComponent_div_7_Template, 16, 3, "div", 4);
        }
        if (rf & 2) {
          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](5);
          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("ngIf", ctx.loading);
          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](1);
          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("ngIf", !ctx.loading && ctx.budgets.length === 0);
          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](1);
          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("ngIf", !ctx.loading && ctx.budgets.length > 0);
        }
      },
      dependencies: [_angular_common__WEBPACK_IMPORTED_MODULE_6__.NgIf, _angular_material_button__WEBPACK_IMPORTED_MODULE_7__.MatButton, _angular_material_button__WEBPACK_IMPORTED_MODULE_7__.MatIconButton, _angular_material_icon__WEBPACK_IMPORTED_MODULE_8__.MatIcon, _angular_material_progress_spinner__WEBPACK_IMPORTED_MODULE_9__.MatProgressSpinner, _angular_material_table__WEBPACK_IMPORTED_MODULE_10__.MatTable, _angular_material_table__WEBPACK_IMPORTED_MODULE_10__.MatHeaderCellDef, _angular_material_table__WEBPACK_IMPORTED_MODULE_10__.MatHeaderRowDef, _angular_material_table__WEBPACK_IMPORTED_MODULE_10__.MatColumnDef, _angular_material_table__WEBPACK_IMPORTED_MODULE_10__.MatCellDef, _angular_material_table__WEBPACK_IMPORTED_MODULE_10__.MatRowDef, _angular_material_table__WEBPACK_IMPORTED_MODULE_10__.MatHeaderCell, _angular_material_table__WEBPACK_IMPORTED_MODULE_10__.MatCell, _angular_material_table__WEBPACK_IMPORTED_MODULE_10__.MatHeaderRow, _angular_material_table__WEBPACK_IMPORTED_MODULE_10__.MatRow, _angular_material_tooltip__WEBPACK_IMPORTED_MODULE_11__.MatTooltip, _angular_common__WEBPACK_IMPORTED_MODULE_6__.CurrencyPipe],
      styles: [".budgets-header[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: center;\n  justify-content: space-between;\n  margin-bottom: 1.5rem;\n}\n\n.budgets-table-container[_ngcontent-%COMP%] {\n  overflow-x: auto;\n}\n\n.budgets-table[_ngcontent-%COMP%] {\n  width: 100%;\n  min-width: 400px;\n}\n\n.loading-spinner[_ngcontent-%COMP%] {\n  display: flex;\n  justify-content: center;\n  margin: 2rem 0;\n}\n\n.empty-state[_ngcontent-%COMP%] {\n  text-align: center;\n  color: #888;\n  margin: 2rem 0;\n}\n/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8uL3NyYy9hcHAvcGFnZXMvYnVkZ2V0cy5jb21wb25lbnQuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQSxtQkFBQTtBQUVBO0VBQ0MsYUFBQTtFQUNBLG1CQUFBO0VBQ0EsOEJBQUE7RUFDQSxxQkFBQTtBQUFEOztBQUdBO0VBQ0MsZ0JBQUE7QUFBRDs7QUFHQTtFQUNDLFdBQUE7RUFDQSxnQkFBQTtBQUFEOztBQUdBO0VBQ0MsYUFBQTtFQUNBLHVCQUFBO0VBQ0EsY0FBQTtBQUFEOztBQUdBO0VBQ0Msa0JBQUE7RUFDQSxXQUFBO0VBQ0EsY0FBQTtBQUFEIiwic291cmNlc0NvbnRlbnQiOlsiLyogQnVkZ2V0cyBzdHlsZXMgKi9cclxuXHJcbi5idWRnZXRzLWhlYWRlciB7XHJcblx0ZGlzcGxheTogZmxleDtcclxuXHRhbGlnbi1pdGVtczogY2VudGVyO1xyXG5cdGp1c3RpZnktY29udGVudDogc3BhY2UtYmV0d2VlbjtcclxuXHRtYXJnaW4tYm90dG9tOiAxLjVyZW07XHJcbn1cclxuXHJcbi5idWRnZXRzLXRhYmxlLWNvbnRhaW5lciB7XHJcblx0b3ZlcmZsb3cteDogYXV0bztcclxufVxyXG5cclxuLmJ1ZGdldHMtdGFibGUge1xyXG5cdHdpZHRoOiAxMDAlO1xyXG5cdG1pbi13aWR0aDogNDAwcHg7XHJcbn1cclxuXHJcbi5sb2FkaW5nLXNwaW5uZXIge1xyXG5cdGRpc3BsYXk6IGZsZXg7XHJcblx0anVzdGlmeS1jb250ZW50OiBjZW50ZXI7XHJcblx0bWFyZ2luOiAycmVtIDA7XHJcbn1cclxuXHJcbi5lbXB0eS1zdGF0ZSB7XHJcblx0dGV4dC1hbGlnbjogY2VudGVyO1xyXG5cdGNvbG9yOiAjODg4O1xyXG5cdG1hcmdpbjogMnJlbSAwO1xyXG59Il0sInNvdXJjZVJvb3QiOiIifQ== */"]
    });
  }
}

/***/ }),

/***/ 9201:
/*!***************************************************!*\
  !*** ./src/app/pages/confirm-dialog.component.ts ***!
  \***************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "ConfirmDialogComponent": () => (/* binding */ ConfirmDialogComponent)
/* harmony export */ });
/* harmony import */ var _angular_material_dialog__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/material/dialog */ 1484);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ 2560);
/* harmony import */ var _angular_material_button__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/material/button */ 4522);




class ConfirmDialogComponent {
  constructor(dialogRef, data) {
    this.dialogRef = dialogRef;
    this.data = data;
  }
  onYes() {
    this.dialogRef.close(true);
  }
  onNo() {
    this.dialogRef.close(false);
  }
  static {
    this.ɵfac = function ConfirmDialogComponent_Factory(t) {
      return new (t || ConfirmDialogComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_material_dialog__WEBPACK_IMPORTED_MODULE_1__.MatDialogRef), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_material_dialog__WEBPACK_IMPORTED_MODULE_1__.MAT_DIALOG_DATA));
    };
  }
  static {
    this.ɵcmp = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({
      type: ConfirmDialogComponent,
      selectors: [["app-confirm-dialog"]],
      decls: 10,
      vars: 2,
      consts: [["mat-dialog-title", ""], ["align", "end"], ["mat-button", "", 3, "click"], ["mat-raised-button", "", "color", "warn", 3, "click"]],
      template: function ConfirmDialogComponent_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "h2", 0);
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1);
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "mat-dialog-content")(3, "p");
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](4);
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]()();
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "mat-dialog-actions", 1)(6, "button", 2);
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function ConfirmDialogComponent_Template_button_click_6_listener() {
            return ctx.onNo();
          });
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](7, "Cancel");
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](8, "button", 3);
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function ConfirmDialogComponent_Template_button_click_8_listener() {
            return ctx.onYes();
          });
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](9, "Yes");
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]()();
        }
        if (rf & 2) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](ctx.data.title || "Confirm");
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](ctx.data.message || "Are you sure?");
        }
      },
      dependencies: [_angular_material_button__WEBPACK_IMPORTED_MODULE_2__.MatButton, _angular_material_dialog__WEBPACK_IMPORTED_MODULE_1__.MatDialogTitle, _angular_material_dialog__WEBPACK_IMPORTED_MODULE_1__.MatDialogContent, _angular_material_dialog__WEBPACK_IMPORTED_MODULE_1__.MatDialogActions],
      encapsulation: 2
    });
  }
}

/***/ })

}]);
//# sourceMappingURL=src_app_features_budgets_budgets_module_ts.js.map