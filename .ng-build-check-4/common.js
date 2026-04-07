"use strict";
(self["webpackChunkmy_app"] = self["webpackChunkmy_app"] || []).push([["common"],{

/***/ 5488:
/*!********************************************!*\
  !*** ./src/app/services/budget.service.ts ***!
  \********************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "BudgetService": () => (/* binding */ BudgetService)
/* harmony export */ });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ 2560);
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common/http */ 8987);


class BudgetService {
  constructor(http) {
    this.http = http;
  }
  getBudgetStatus() {
    return this.http.get('/api/budget/status');
  }
  getBudgets() {
    return this.http.get('/api/budgets');
  }
  addBudget(budget) {
    // Map 'amount' to 'MonthlyLimit' for backend
    const payload = {
      category: budget.category,
      MonthlyLimit: budget.amount,
      period: budget.period
    };
    return this.http.post('/api/budgets', payload);
  }
  updateBudget(id, budget) {
    // Map 'amount' to 'MonthlyLimit' for backend, and include lastReset if present
    const payload = {
      category: budget.category,
      MonthlyLimit: budget.amount
    };
    if (budget.lastReset) {
      payload.lastReset = budget.lastReset;
    }
    return this.http.put(`/api/budgets/${id}`, payload);
  }
  deleteBudget(id) {
    return this.http.delete(`/api/budgets/${id}`);
  }
  static {
    this.ɵfac = function BudgetService_Factory(t) {
      return new (t || BudgetService)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵinject"](_angular_common_http__WEBPACK_IMPORTED_MODULE_1__.HttpClient));
    };
  }
  static {
    this.ɵprov = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjectable"]({
      token: BudgetService,
      factory: BudgetService.ɵfac,
      providedIn: 'root'
    });
  }
}

/***/ }),

/***/ 4655:
/*!**********************************************!*\
  !*** ./src/app/services/category.service.ts ***!
  \**********************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "CategoryService": () => (/* binding */ CategoryService)
/* harmony export */ });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ 2560);
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common/http */ 8987);


class CategoryService {
  constructor(http) {
    this.http = http;
    this.apiUrl = '/api/categories';
  }
  getCategories() {
    return this.http.get(this.apiUrl);
  }
  addCategory(name) {
    return this.http.post(this.apiUrl, {
      name
    });
  }
  updateCategory(id, name) {
    return this.http.put(`${this.apiUrl}/${id}`, {
      id,
      name
    });
  }
  deleteCategory(id) {
    return this.http.delete(`${this.apiUrl}/${id}`);
  }
  static {
    this.ɵfac = function CategoryService_Factory(t) {
      return new (t || CategoryService)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵinject"](_angular_common_http__WEBPACK_IMPORTED_MODULE_1__.HttpClient));
    };
  }
  static {
    this.ɵprov = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjectable"]({
      token: CategoryService,
      factory: CategoryService.ɵfac,
      providedIn: 'root'
    });
  }
}

/***/ }),

/***/ 2013:
/*!**************************************************!*\
  !*** ./src/app/services/notification.service.ts ***!
  \**************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "NotificationService": () => (/* binding */ NotificationService)
/* harmony export */ });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ 2560);
/* harmony import */ var ngx_toastr__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ngx-toastr */ 4817);


class NotificationService {
  constructor(toastr) {
    this.toastr = toastr;
  }
  success(message, title) {
    this.toastr.success(message, title);
  }
  error(message, title) {
    this.toastr.error(message, title);
  }
  info(message, title) {
    this.toastr.info(message, title);
  }
  warning(message, title) {
    this.toastr.warning(message, title);
  }
  static {
    this.ɵfac = function NotificationService_Factory(t) {
      return new (t || NotificationService)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵinject"](ngx_toastr__WEBPACK_IMPORTED_MODULE_1__.ToastrService));
    };
  }
  static {
    this.ɵprov = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjectable"]({
      token: NotificationService,
      factory: NotificationService.ɵfac,
      providedIn: 'root'
    });
  }
}

/***/ }),

/***/ 535:
/*!*********************************************!*\
  !*** ./src/app/services/receipt.service.ts ***!
  \*********************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "ReceiptService": () => (/* binding */ ReceiptService)
/* harmony export */ });
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/common/http */ 8987);
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! rxjs */ 635);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ 2560);




const API_BASE = '/api';
class ReceiptService {
  constructor(http) {
    this.http = http;
  }
  buildParams(query) {
    let params = new _angular_common_http__WEBPACK_IMPORTED_MODULE_0__.HttpParams();
    Object.entries(query).forEach(([key, value]) => {
      if (value !== undefined && value !== null && `${value}`.trim() !== '') {
        params = params.set(key, `${value}`);
      }
    });
    return params;
  }
  updateReceipt(id, data) {
    return this.http.put(`${API_BASE}/receipts/${id}`, data);
  }
  deleteReceipt(id) {
    return this.http.delete(`${API_BASE}/receipts/${id}`);
  }
  parseReceiptAI(file) {
    const formData = new FormData();
    formData.append('file', file);
    return this.http.post(`${API_BASE}/ai/parse-receipt`, formData);
  }
  uploadReceipt(file, metadata) {
    const formData = new FormData();
    formData.append('file', file);
    if (metadata?.category) {
      formData.append('category', metadata.category);
    }
    if (metadata?.notes) {
      formData.append('notes', metadata.notes);
    }
    return this.http.post(`${API_BASE}/receipts`, formData);
  }
  getReceipts(query = {}) {
    return this.http.get(`${API_BASE}/receipts`, {
      params: this.buildParams(query)
    });
  }
  getRecentReceipts(limit = 5) {
    return this.getReceipts({
      page: 1,
      pageSize: limit
    }).pipe((0,rxjs__WEBPACK_IMPORTED_MODULE_1__.map)(response => response.data.slice(0, limit)));
  }
  static {
    this.ɵfac = function ReceiptService_Factory(t) {
      return new (t || ReceiptService)(_angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵinject"](_angular_common_http__WEBPACK_IMPORTED_MODULE_0__.HttpClient));
    };
  }
  static {
    this.ɵprov = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdefineInjectable"]({
      token: ReceiptService,
      factory: ReceiptService.ɵfac,
      providedIn: 'root'
    });
  }
}

/***/ })

}]);
//# sourceMappingURL=common.js.map