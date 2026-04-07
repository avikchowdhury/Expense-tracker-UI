"use strict";
(self["webpackChunkmy_app"] = self["webpackChunkmy_app"] || []).push([["main"],{

/***/ 158:
/*!***************************************!*\
  !*** ./src/app/app-routing.module.ts ***!
  \***************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "AppRoutingModule": () => (/* binding */ AppRoutingModule)
/* harmony export */ });
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/router */ 124);
/* harmony import */ var _guards_auth_guard__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./guards/auth.guard */ 5107);
/* harmony import */ var _guards_guest_guard__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./guards/guest.guard */ 4915);
/* harmony import */ var _layout_app_shell_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./layout/app-shell.component */ 7525);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ 2560);






const routes = [{
  path: '',
  pathMatch: 'full',
  redirectTo: 'dashboard'
}, {
  path: 'expense-tracker-login',
  pathMatch: 'full',
  redirectTo: 'auth/login'
}, {
  path: 'register',
  pathMatch: 'full',
  redirectTo: 'auth/register'
}, {
  path: 'auth',
  canActivate: [_guards_guest_guard__WEBPACK_IMPORTED_MODULE_1__.GuestGuard],
  loadChildren: () => __webpack_require__.e(/*! import() */ "src_app_features_auth_auth_module_ts").then(__webpack_require__.bind(__webpack_require__, /*! ./features/auth/auth.module */ 2399)).then(m => m.AuthModule)
}, {
  path: '',
  component: _layout_app_shell_component__WEBPACK_IMPORTED_MODULE_2__.AppShellComponent,
  canActivate: [_guards_auth_guard__WEBPACK_IMPORTED_MODULE_0__.AuthGuard],
  children: [{
    path: 'dashboard',
    loadChildren: () => Promise.all(/*! import() */[__webpack_require__.e("common"), __webpack_require__.e("src_app_features_dashboard_dashboard_module_ts")]).then(__webpack_require__.bind(__webpack_require__, /*! ./features/dashboard/dashboard.module */ 1104)).then(m => m.DashboardModule)
  }, {
    path: 'receipts',
    loadChildren: () => Promise.all(/*! import() */[__webpack_require__.e("common"), __webpack_require__.e("src_app_features_receipts_receipts_module_ts")]).then(__webpack_require__.bind(__webpack_require__, /*! ./features/receipts/receipts.module */ 2246)).then(m => m.ReceiptsModule)
  }, {
    path: 'budgets',
    loadChildren: () => Promise.all(/*! import() */[__webpack_require__.e("common"), __webpack_require__.e("src_app_features_budgets_budgets_module_ts")]).then(__webpack_require__.bind(__webpack_require__, /*! ./features/budgets/budgets.module */ 9072)).then(m => m.BudgetsModule)
  }, {
    path: 'categories',
    loadChildren: () => Promise.all(/*! import() */[__webpack_require__.e("common"), __webpack_require__.e("src_app_features_categories_categories_module_ts")]).then(__webpack_require__.bind(__webpack_require__, /*! ./features/categories/categories.module */ 1980)).then(m => m.CategoriesModule)
  }, {
    path: 'profile',
    loadChildren: () => Promise.all(/*! import() */[__webpack_require__.e("common"), __webpack_require__.e("src_app_features_profile_profile_module_ts")]).then(__webpack_require__.bind(__webpack_require__, /*! ./features/profile/profile.module */ 649)).then(m => m.ProfileModule)
  }]
}, {
  path: '**',
  redirectTo: 'dashboard'
}];
class AppRoutingModule {
  static {
    this.ɵfac = function AppRoutingModule_Factory(t) {
      return new (t || AppRoutingModule)();
    };
  }
  static {
    this.ɵmod = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵdefineNgModule"]({
      type: AppRoutingModule
    });
  }
  static {
    this.ɵinj = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵdefineInjector"]({
      imports: [_angular_router__WEBPACK_IMPORTED_MODULE_4__.RouterModule.forRoot(routes, {
        preloadingStrategy: _angular_router__WEBPACK_IMPORTED_MODULE_4__.PreloadAllModules
      }), _angular_router__WEBPACK_IMPORTED_MODULE_4__.RouterModule]
    });
  }
}
(function () {
  (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵsetNgModuleScope"](AppRoutingModule, {
    imports: [_angular_router__WEBPACK_IMPORTED_MODULE_4__.RouterModule],
    exports: [_angular_router__WEBPACK_IMPORTED_MODULE_4__.RouterModule]
  });
})();

/***/ }),

/***/ 5041:
/*!**********************************!*\
  !*** ./src/app/app.component.ts ***!
  \**********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "AppComponent": () => (/* binding */ AppComponent)
/* harmony export */ });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ 2560);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/router */ 124);


class AppComponent {
  static {
    this.ɵfac = function AppComponent_Factory(t) {
      return new (t || AppComponent)();
    };
  }
  static {
    this.ɵcmp = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({
      type: AppComponent,
      selectors: [["app-root"]],
      decls: 1,
      vars: 0,
      template: function AppComponent_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](0, "router-outlet");
        }
      },
      dependencies: [_angular_router__WEBPACK_IMPORTED_MODULE_1__.RouterOutlet],
      styles: ["[_nghost-%COMP%] {\n  display: block;\n  min-height: 100vh;\n}\n/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8uL3NyYy9hcHAvYXBwLmNvbXBvbmVudC5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQ0UsY0FBQTtFQUNBLGlCQUFBO0FBQ0YiLCJzb3VyY2VzQ29udGVudCI6WyI6aG9zdCB7XG4gIGRpc3BsYXk6IGJsb2NrO1xuICBtaW4taGVpZ2h0OiAxMDB2aDtcbn1cbiJdLCJzb3VyY2VSb290IjoiIn0= */"]
    });
  }
}

/***/ }),

/***/ 6747:
/*!*******************************!*\
  !*** ./src/app/app.module.ts ***!
  \*******************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "AppModule": () => (/* binding */ AppModule)
/* harmony export */ });
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/common/http */ 8987);
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/platform-browser */ 4497);
/* harmony import */ var _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @angular/platform-browser/animations */ 7146);
/* harmony import */ var ngx_toastr__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ngx-toastr */ 4817);
/* harmony import */ var _services_auth_interceptor__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./services/auth.interceptor */ 4730);
/* harmony import */ var _app_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./app.component */ 5041);
/* harmony import */ var _app_routing_module__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./app-routing.module */ 158);
/* harmony import */ var _layout_app_shell_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./layout/app-shell.component */ 7525);
/* harmony import */ var _shared_shared_module__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./shared/shared.module */ 4466);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/core */ 2560);












class AppModule {
  static {
    this.ɵfac = function AppModule_Factory(t) {
      return new (t || AppModule)();
    };
  }
  static {
    this.ɵmod = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵdefineNgModule"]({
      type: AppModule,
      bootstrap: [_app_component__WEBPACK_IMPORTED_MODULE_1__.AppComponent]
    });
  }
  static {
    this.ɵinj = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵdefineInjector"]({
      providers: [{
        provide: _angular_common_http__WEBPACK_IMPORTED_MODULE_6__.HTTP_INTERCEPTORS,
        useClass: _services_auth_interceptor__WEBPACK_IMPORTED_MODULE_0__.AuthInterceptor,
        multi: true
      }],
      imports: [_angular_platform_browser__WEBPACK_IMPORTED_MODULE_7__.BrowserModule, _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_8__.BrowserAnimationsModule, _angular_common_http__WEBPACK_IMPORTED_MODULE_6__.HttpClientModule, _shared_shared_module__WEBPACK_IMPORTED_MODULE_4__.SharedModule, _app_routing_module__WEBPACK_IMPORTED_MODULE_2__.AppRoutingModule, ngx_toastr__WEBPACK_IMPORTED_MODULE_9__.ToastrModule.forRoot({
        positionClass: 'toast-bottom-center',
        preventDuplicates: true
      })]
    });
  }
}
(function () {
  (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵsetNgModuleScope"](AppModule, {
    declarations: [_app_component__WEBPACK_IMPORTED_MODULE_1__.AppComponent, _layout_app_shell_component__WEBPACK_IMPORTED_MODULE_3__.AppShellComponent],
    imports: [_angular_platform_browser__WEBPACK_IMPORTED_MODULE_7__.BrowserModule, _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_8__.BrowserAnimationsModule, _angular_common_http__WEBPACK_IMPORTED_MODULE_6__.HttpClientModule, _shared_shared_module__WEBPACK_IMPORTED_MODULE_4__.SharedModule, _app_routing_module__WEBPACK_IMPORTED_MODULE_2__.AppRoutingModule, ngx_toastr__WEBPACK_IMPORTED_MODULE_9__.ToastrModule]
  });
})();

/***/ }),

/***/ 5107:
/*!**************************************!*\
  !*** ./src/app/guards/auth.guard.ts ***!
  \**************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "AuthGuard": () => (/* binding */ AuthGuard)
/* harmony export */ });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ 2560);
/* harmony import */ var _services_auth_service__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../services/auth.service */ 7556);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ 124);



class AuthGuard {
  constructor(authService, router) {
    this.authService = authService;
    this.router = router;
  }
  canActivate() {
    return this.authService.isAuthenticated() ? true : this.router.createUrlTree(['/auth/login']);
  }
  static {
    this.ɵfac = function AuthGuard_Factory(t) {
      return new (t || AuthGuard)(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵinject"](_services_auth_service__WEBPACK_IMPORTED_MODULE_0__.AuthService), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵinject"](_angular_router__WEBPACK_IMPORTED_MODULE_2__.Router));
    };
  }
  static {
    this.ɵprov = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineInjectable"]({
      token: AuthGuard,
      factory: AuthGuard.ɵfac,
      providedIn: 'root'
    });
  }
}

/***/ }),

/***/ 4915:
/*!***************************************!*\
  !*** ./src/app/guards/guest.guard.ts ***!
  \***************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "GuestGuard": () => (/* binding */ GuestGuard)
/* harmony export */ });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ 2560);
/* harmony import */ var _services_auth_service__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../services/auth.service */ 7556);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ 124);



class GuestGuard {
  constructor(authService, router) {
    this.authService = authService;
    this.router = router;
  }
  canActivate() {
    return this.authService.isAuthenticated() ? this.router.createUrlTree(['/dashboard']) : true;
  }
  static {
    this.ɵfac = function GuestGuard_Factory(t) {
      return new (t || GuestGuard)(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵinject"](_services_auth_service__WEBPACK_IMPORTED_MODULE_0__.AuthService), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵinject"](_angular_router__WEBPACK_IMPORTED_MODULE_2__.Router));
    };
  }
  static {
    this.ɵprov = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineInjectable"]({
      token: GuestGuard,
      factory: GuestGuard.ɵfac,
      providedIn: 'root'
    });
  }
}

/***/ }),

/***/ 7525:
/*!***********************************************!*\
  !*** ./src/app/layout/app-shell.component.ts ***!
  \***********************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "AppShellComponent": () => (/* binding */ AppShellComponent)
/* harmony export */ });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ 2560);
/* harmony import */ var _services_auth_service__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../services/auth.service */ 7556);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ 124);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/common */ 4666);
/* harmony import */ var _angular_material_button__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/material/button */ 4522);
/* harmony import */ var _angular_material_icon__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/material/icon */ 7822);






function AppShellComponent_a_12_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "a", 7)(1, "mat-icon");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](3, "span");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()();
  }
  if (rf & 2) {
    const item_r1 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("routerLink", item_r1.path);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate"](item_r1.icon);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate"](item_r1.label);
  }
}
class AppShellComponent {
  constructor(authService, router) {
    this.authService = authService;
    this.router = router;
    this.navigation = [{
      label: 'Dashboard',
      path: '/dashboard',
      icon: 'insights'
    }, {
      label: 'Receipts',
      path: '/receipts',
      icon: 'receipt_long'
    }, {
      label: 'Budgets',
      path: '/budgets',
      icon: 'savings'
    }, {
      label: 'Categories',
      path: '/categories',
      icon: 'category'
    }, {
      label: 'Profile',
      path: '/profile',
      icon: 'manage_accounts'
    }];
  }
  logout() {
    this.authService.clearToken();
    this.router.navigate(['/auth/login']);
  }
  static {
    this.ɵfac = function AppShellComponent_Factory(t) {
      return new (t || AppShellComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](_services_auth_service__WEBPACK_IMPORTED_MODULE_0__.AuthService), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_2__.Router));
    };
  }
  static {
    this.ɵcmp = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineComponent"]({
      type: AppShellComponent,
      selectors: [["app-shell"]],
      decls: 15,
      vars: 1,
      consts: [[1, "shell"], [1, "shell-header"], [1, "eyebrow"], ["mat-raised-button", "", "color", "primary", 1, "logout-button", 3, "click"], [1, "shell-nav"], ["routerLinkActive", "active", "class", "nav-link", 3, "routerLink", 4, "ngFor", "ngForOf"], [1, "shell-content"], ["routerLinkActive", "active", 1, "nav-link", 3, "routerLink"]],
      template: function AppShellComponent_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "div", 0)(1, "header", 1)(2, "div")(3, "p", 2);
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](4, "AI Expense Tracker");
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](5, "h1");
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](6, "Smart money monitoring for everyday spending");
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()();
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](7, "button", 3);
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("click", function AppShellComponent_Template_button_click_7_listener() {
            return ctx.logout();
          });
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](8, "mat-icon");
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](9, "logout");
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](10, " Logout ");
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()();
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](11, "nav", 4);
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](12, AppShellComponent_a_12_Template, 5, 3, "a", 5);
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](13, "main", 6);
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](14, "router-outlet");
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()();
        }
        if (rf & 2) {
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](12);
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngForOf", ctx.navigation);
        }
      },
      dependencies: [_angular_common__WEBPACK_IMPORTED_MODULE_3__.NgForOf, _angular_router__WEBPACK_IMPORTED_MODULE_2__.RouterOutlet, _angular_router__WEBPACK_IMPORTED_MODULE_2__.RouterLink, _angular_router__WEBPACK_IMPORTED_MODULE_2__.RouterLinkActive, _angular_material_button__WEBPACK_IMPORTED_MODULE_4__.MatButton, _angular_material_icon__WEBPACK_IMPORTED_MODULE_5__.MatIcon],
      styles: [".shell[_ngcontent-%COMP%] {\n  min-height: 100vh;\n  padding: 2rem clamp(1rem, 2vw, 2rem);\n  background: radial-gradient(circle at top left, rgba(36, 129, 255, 0.18), transparent 30%), radial-gradient(circle at bottom right, rgba(64, 196, 146, 0.15), transparent 26%), linear-gradient(180deg, #f5f9ff 0%, #eef3f7 45%, #f8fbfd 100%);\n}\n\n.shell-header[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: flex-start;\n  justify-content: space-between;\n  gap: 1rem;\n  padding: 1.5rem;\n  margin-bottom: 1.5rem;\n  border-radius: 28px;\n  background: rgba(11, 28, 43, 0.92);\n  color: #f9fbfd;\n  box-shadow: 0 24px 50px rgba(11, 28, 43, 0.18);\n}\n\n.eyebrow[_ngcontent-%COMP%] {\n  margin: 0 0 0.4rem;\n  letter-spacing: 0.16em;\n  text-transform: uppercase;\n  color: #8ee1c1;\n  font-size: 0.78rem;\n}\n\n.shell-header[_ngcontent-%COMP%]   h1[_ngcontent-%COMP%] {\n  margin: 0;\n  font-size: clamp(1.6rem, 3vw, 2.5rem);\n  line-height: 1.1;\n  max-width: 700px;\n}\n\n.logout-button[_ngcontent-%COMP%] {\n  flex-shrink: 0;\n}\n\n.shell-nav[_ngcontent-%COMP%] {\n  display: flex;\n  flex-wrap: wrap;\n  gap: 0.85rem;\n  margin-bottom: 1.5rem;\n}\n\n.nav-link[_ngcontent-%COMP%] {\n  display: inline-flex;\n  align-items: center;\n  gap: 0.55rem;\n  padding: 0.85rem 1rem;\n  border-radius: 18px;\n  text-decoration: none;\n  color: #183247;\n  background: rgba(255, 255, 255, 0.76);\n  border: 1px solid rgba(24, 50, 71, 0.08);\n  transition: transform 0.2s ease, box-shadow 0.2s ease, background 0.2s ease;\n}\n\n.nav-link[_ngcontent-%COMP%]:hover, .nav-link.active[_ngcontent-%COMP%] {\n  transform: translateY(-2px);\n  background: #ffffff;\n  box-shadow: 0 14px 25px rgba(24, 50, 71, 0.08);\n}\n\n.nav-link.active[_ngcontent-%COMP%] {\n  color: #0f6c5b;\n}\n\n.shell-content[_ngcontent-%COMP%] {\n  display: block;\n}\n\n@media (max-width: 768px) {\n  .shell[_ngcontent-%COMP%] {\n    padding: 1rem;\n  }\n  .shell-header[_ngcontent-%COMP%] {\n    flex-direction: column;\n    align-items: stretch;\n  }\n  .logout-button[_ngcontent-%COMP%] {\n    align-self: flex-start;\n  }\n  .nav-link[_ngcontent-%COMP%] {\n    flex: 1 1 calc(50% - 0.5rem);\n    justify-content: center;\n  }\n}\n/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8uL3NyYy9hcHAvbGF5b3V0L2FwcC1zaGVsbC5jb21wb25lbnQuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUNFLGlCQUFBO0VBQ0Esb0NBQUE7RUFDQSw4T0FDRTtBQUFKOztBQUtBO0VBQ0UsYUFBQTtFQUNBLHVCQUFBO0VBQ0EsOEJBQUE7RUFDQSxTQUFBO0VBQ0EsZUFBQTtFQUNBLHFCQUFBO0VBQ0EsbUJBQUE7RUFDQSxrQ0FBQTtFQUNBLGNBQUE7RUFDQSw4Q0FBQTtBQUZGOztBQUtBO0VBQ0Usa0JBQUE7RUFDQSxzQkFBQTtFQUNBLHlCQUFBO0VBQ0EsY0FBQTtFQUNBLGtCQUFBO0FBRkY7O0FBS0E7RUFDRSxTQUFBO0VBQ0EscUNBQUE7RUFDQSxnQkFBQTtFQUNBLGdCQUFBO0FBRkY7O0FBS0E7RUFDRSxjQUFBO0FBRkY7O0FBS0E7RUFDRSxhQUFBO0VBQ0EsZUFBQTtFQUNBLFlBQUE7RUFDQSxxQkFBQTtBQUZGOztBQUtBO0VBQ0Usb0JBQUE7RUFDQSxtQkFBQTtFQUNBLFlBQUE7RUFDQSxxQkFBQTtFQUNBLG1CQUFBO0VBQ0EscUJBQUE7RUFDQSxjQUFBO0VBQ0EscUNBQUE7RUFDQSx3Q0FBQTtFQUNBLDJFQUFBO0FBRkY7O0FBS0E7O0VBRUUsMkJBQUE7RUFDQSxtQkFBQTtFQUNBLDhDQUFBO0FBRkY7O0FBS0E7RUFDRSxjQUFBO0FBRkY7O0FBS0E7RUFDRSxjQUFBO0FBRkY7O0FBS0E7RUFDRTtJQUNFLGFBQUE7RUFGRjtFQUtBO0lBQ0Usc0JBQUE7SUFDQSxvQkFBQTtFQUhGO0VBTUE7SUFDRSxzQkFBQTtFQUpGO0VBT0E7SUFDRSw0QkFBQTtJQUNBLHVCQUFBO0VBTEY7QUFDRiIsInNvdXJjZXNDb250ZW50IjpbIi5zaGVsbCB7XG4gIG1pbi1oZWlnaHQ6IDEwMHZoO1xuICBwYWRkaW5nOiAycmVtIGNsYW1wKDFyZW0sIDJ2dywgMnJlbSk7XG4gIGJhY2tncm91bmQ6XG4gICAgcmFkaWFsLWdyYWRpZW50KGNpcmNsZSBhdCB0b3AgbGVmdCwgcmdiYSgzNiwgMTI5LCAyNTUsIDAuMTgpLCB0cmFuc3BhcmVudCAzMCUpLFxuICAgIHJhZGlhbC1ncmFkaWVudChjaXJjbGUgYXQgYm90dG9tIHJpZ2h0LCByZ2JhKDY0LCAxOTYsIDE0NiwgMC4xNSksIHRyYW5zcGFyZW50IDI2JSksXG4gICAgbGluZWFyLWdyYWRpZW50KDE4MGRlZywgI2Y1ZjlmZiAwJSwgI2VlZjNmNyA0NSUsICNmOGZiZmQgMTAwJSk7XG59XG5cbi5zaGVsbC1oZWFkZXIge1xuICBkaXNwbGF5OiBmbGV4O1xuICBhbGlnbi1pdGVtczogZmxleC1zdGFydDtcbiAganVzdGlmeS1jb250ZW50OiBzcGFjZS1iZXR3ZWVuO1xuICBnYXA6IDFyZW07XG4gIHBhZGRpbmc6IDEuNXJlbTtcbiAgbWFyZ2luLWJvdHRvbTogMS41cmVtO1xuICBib3JkZXItcmFkaXVzOiAyOHB4O1xuICBiYWNrZ3JvdW5kOiByZ2JhKDExLCAyOCwgNDMsIDAuOTIpO1xuICBjb2xvcjogI2Y5ZmJmZDtcbiAgYm94LXNoYWRvdzogMCAyNHB4IDUwcHggcmdiYSgxMSwgMjgsIDQzLCAwLjE4KTtcbn1cblxuLmV5ZWJyb3cge1xuICBtYXJnaW46IDAgMCAwLjRyZW07XG4gIGxldHRlci1zcGFjaW5nOiAwLjE2ZW07XG4gIHRleHQtdHJhbnNmb3JtOiB1cHBlcmNhc2U7XG4gIGNvbG9yOiAjOGVlMWMxO1xuICBmb250LXNpemU6IDAuNzhyZW07XG59XG5cbi5zaGVsbC1oZWFkZXIgaDEge1xuICBtYXJnaW46IDA7XG4gIGZvbnQtc2l6ZTogY2xhbXAoMS42cmVtLCAzdncsIDIuNXJlbSk7XG4gIGxpbmUtaGVpZ2h0OiAxLjE7XG4gIG1heC13aWR0aDogNzAwcHg7XG59XG5cbi5sb2dvdXQtYnV0dG9uIHtcbiAgZmxleC1zaHJpbms6IDA7XG59XG5cbi5zaGVsbC1uYXYge1xuICBkaXNwbGF5OiBmbGV4O1xuICBmbGV4LXdyYXA6IHdyYXA7XG4gIGdhcDogMC44NXJlbTtcbiAgbWFyZ2luLWJvdHRvbTogMS41cmVtO1xufVxuXG4ubmF2LWxpbmsge1xuICBkaXNwbGF5OiBpbmxpbmUtZmxleDtcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbiAgZ2FwOiAwLjU1cmVtO1xuICBwYWRkaW5nOiAwLjg1cmVtIDFyZW07XG4gIGJvcmRlci1yYWRpdXM6IDE4cHg7XG4gIHRleHQtZGVjb3JhdGlvbjogbm9uZTtcbiAgY29sb3I6ICMxODMyNDc7XG4gIGJhY2tncm91bmQ6IHJnYmEoMjU1LCAyNTUsIDI1NSwgMC43Nik7XG4gIGJvcmRlcjogMXB4IHNvbGlkIHJnYmEoMjQsIDUwLCA3MSwgMC4wOCk7XG4gIHRyYW5zaXRpb246IHRyYW5zZm9ybSAwLjJzIGVhc2UsIGJveC1zaGFkb3cgMC4ycyBlYXNlLCBiYWNrZ3JvdW5kIDAuMnMgZWFzZTtcbn1cblxuLm5hdi1saW5rOmhvdmVyLFxuLm5hdi1saW5rLmFjdGl2ZSB7XG4gIHRyYW5zZm9ybTogdHJhbnNsYXRlWSgtMnB4KTtcbiAgYmFja2dyb3VuZDogI2ZmZmZmZjtcbiAgYm94LXNoYWRvdzogMCAxNHB4IDI1cHggcmdiYSgyNCwgNTAsIDcxLCAwLjA4KTtcbn1cblxuLm5hdi1saW5rLmFjdGl2ZSB7XG4gIGNvbG9yOiAjMGY2YzViO1xufVxuXG4uc2hlbGwtY29udGVudCB7XG4gIGRpc3BsYXk6IGJsb2NrO1xufVxuXG5AbWVkaWEgKG1heC13aWR0aDogNzY4cHgpIHtcbiAgLnNoZWxsIHtcbiAgICBwYWRkaW5nOiAxcmVtO1xuICB9XG5cbiAgLnNoZWxsLWhlYWRlciB7XG4gICAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcbiAgICBhbGlnbi1pdGVtczogc3RyZXRjaDtcbiAgfVxuXG4gIC5sb2dvdXQtYnV0dG9uIHtcbiAgICBhbGlnbi1zZWxmOiBmbGV4LXN0YXJ0O1xuICB9XG5cbiAgLm5hdi1saW5rIHtcbiAgICBmbGV4OiAxIDEgY2FsYyg1MCUgLSAwLjVyZW0pO1xuICAgIGp1c3RpZnktY29udGVudDogY2VudGVyO1xuICB9XG59XG4iXSwic291cmNlUm9vdCI6IiJ9 */"]
    });
  }
}

/***/ }),

/***/ 4730:
/*!**********************************************!*\
  !*** ./src/app/services/auth.interceptor.ts ***!
  \**********************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "AuthInterceptor": () => (/* binding */ AuthInterceptor)
/* harmony export */ });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ 2560);
/* harmony import */ var _auth_service__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./auth.service */ 7556);


class AuthInterceptor {
  constructor(auth) {
    this.auth = auth;
  }
  intercept(req, next) {
    const token = this.auth.getToken();
    if (token) {
      const cloned = req.clone({
        setHeaders: {
          Authorization: `Bearer ${token}`
        }
      });
      return next.handle(cloned);
    }
    return next.handle(req);
  }
  static {
    this.ɵfac = function AuthInterceptor_Factory(t) {
      return new (t || AuthInterceptor)(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵinject"](_auth_service__WEBPACK_IMPORTED_MODULE_0__.AuthService));
    };
  }
  static {
    this.ɵprov = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineInjectable"]({
      token: AuthInterceptor,
      factory: AuthInterceptor.ɵfac
    });
  }
}

/***/ }),

/***/ 7556:
/*!******************************************!*\
  !*** ./src/app/services/auth.service.ts ***!
  \******************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "AuthService": () => (/* binding */ AuthService)
/* harmony export */ });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ 2560);
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common/http */ 8987);


const API_BASE = '/api';
class AuthService {
  constructor(http) {
    this.http = http;
  }
  register(email, password) {
    return this.http.post(`${API_BASE}/auth/register`, {
      email,
      password
    });
  }
  login(email, password) {
    return this.http.post(`${API_BASE}/auth/login`, {
      email,
      password
    });
  }
  saveToken(data) {
    localStorage.setItem('exp_tracker_token', data.token);
    localStorage.setItem('exp_tracker_expires_at', data.expiresAt);
  }
  getToken() {
    return localStorage.getItem('exp_tracker_token');
  }
  clearToken() {
    localStorage.removeItem('exp_tracker_token');
    localStorage.removeItem('exp_tracker_expires_at');
  }
  isAuthenticated() {
    const token = this.getToken();
    if (!token) {
      return false;
    }
    const expiresAt = localStorage.getItem('exp_tracker_expires_at');
    if (!expiresAt) {
      return false;
    }
    return new Date(expiresAt) > new Date();
  }
  sendOtp(email) {
    return this.http.post(`${API_BASE}/auth/send-otp`, {
      email
    });
  }
  verifyOtp(email, otp, password) {
    return this.http.post(`${API_BASE}/auth/register-otp`, {
      email,
      otp,
      password
    });
  }
  static {
    this.ɵfac = function AuthService_Factory(t) {
      return new (t || AuthService)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵinject"](_angular_common_http__WEBPACK_IMPORTED_MODULE_1__.HttpClient));
    };
  }
  static {
    this.ɵprov = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjectable"]({
      token: AuthService,
      factory: AuthService.ɵfac,
      providedIn: 'root'
    });
  }
}

/***/ }),

/***/ 4466:
/*!*****************************************!*\
  !*** ./src/app/shared/shared.module.ts ***!
  \*****************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "SharedModule": () => (/* binding */ SharedModule)
/* harmony export */ });
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common */ 4666);
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/forms */ 2508);
/* harmony import */ var _angular_material_badge__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/material/badge */ 3335);
/* harmony import */ var _angular_material_button__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/material/button */ 4522);
/* harmony import */ var _angular_material_card__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/material/card */ 2156);
/* harmony import */ var _angular_material_chips__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/material/chips */ 1169);
/* harmony import */ var _angular_material_dialog__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @angular/material/dialog */ 1484);
/* harmony import */ var _angular_material_divider__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @angular/material/divider */ 1528);
/* harmony import */ var _angular_material_form_field__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! @angular/material/form-field */ 5074);
/* harmony import */ var _angular_material_icon__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! @angular/material/icon */ 7822);
/* harmony import */ var _angular_material_input__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! @angular/material/input */ 8562);
/* harmony import */ var _angular_material_list__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! @angular/material/list */ 6517);
/* harmony import */ var _angular_material_menu__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! @angular/material/menu */ 8589);
/* harmony import */ var _angular_material_paginator__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! @angular/material/paginator */ 6060);
/* harmony import */ var _angular_material_progress_spinner__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! @angular/material/progress-spinner */ 1708);
/* harmony import */ var _angular_material_select__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(/*! @angular/material/select */ 7371);
/* harmony import */ var _angular_material_sidenav__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(/*! @angular/material/sidenav */ 6643);
/* harmony import */ var _angular_material_table__WEBPACK_IMPORTED_MODULE_19__ = __webpack_require__(/*! @angular/material/table */ 5288);
/* harmony import */ var _angular_material_tabs__WEBPACK_IMPORTED_MODULE_20__ = __webpack_require__(/*! @angular/material/tabs */ 5892);
/* harmony import */ var _angular_material_toolbar__WEBPACK_IMPORTED_MODULE_21__ = __webpack_require__(/*! @angular/material/toolbar */ 2543);
/* harmony import */ var _angular_material_tooltip__WEBPACK_IMPORTED_MODULE_22__ = __webpack_require__(/*! @angular/material/tooltip */ 6896);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ 124);
/* harmony import */ var ng2_charts__WEBPACK_IMPORTED_MODULE_23__ = __webpack_require__(/*! ng2-charts */ 1208);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ 2560);
























class SharedModule {
  static {
    this.ɵfac = function SharedModule_Factory(t) {
      return new (t || SharedModule)();
    };
  }
  static {
    this.ɵmod = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineNgModule"]({
      type: SharedModule
    });
  }
  static {
    this.ɵinj = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjector"]({
      imports: [_angular_common__WEBPACK_IMPORTED_MODULE_1__.CommonModule, _angular_forms__WEBPACK_IMPORTED_MODULE_2__.FormsModule, _angular_forms__WEBPACK_IMPORTED_MODULE_2__.ReactiveFormsModule, _angular_router__WEBPACK_IMPORTED_MODULE_3__.RouterModule, _angular_material_badge__WEBPACK_IMPORTED_MODULE_4__.MatBadgeModule, _angular_material_button__WEBPACK_IMPORTED_MODULE_5__.MatButtonModule, _angular_material_card__WEBPACK_IMPORTED_MODULE_6__.MatCardModule, _angular_material_chips__WEBPACK_IMPORTED_MODULE_7__.MatChipsModule, _angular_material_dialog__WEBPACK_IMPORTED_MODULE_8__.MatDialogModule, _angular_material_divider__WEBPACK_IMPORTED_MODULE_9__.MatDividerModule, _angular_material_form_field__WEBPACK_IMPORTED_MODULE_10__.MatFormFieldModule, _angular_material_icon__WEBPACK_IMPORTED_MODULE_11__.MatIconModule, _angular_material_input__WEBPACK_IMPORTED_MODULE_12__.MatInputModule, _angular_material_list__WEBPACK_IMPORTED_MODULE_13__.MatListModule, _angular_material_menu__WEBPACK_IMPORTED_MODULE_14__.MatMenuModule, _angular_material_paginator__WEBPACK_IMPORTED_MODULE_15__.MatPaginatorModule, _angular_material_progress_spinner__WEBPACK_IMPORTED_MODULE_16__.MatProgressSpinnerModule, _angular_material_select__WEBPACK_IMPORTED_MODULE_17__.MatSelectModule, _angular_material_sidenav__WEBPACK_IMPORTED_MODULE_18__.MatSidenavModule, _angular_material_table__WEBPACK_IMPORTED_MODULE_19__.MatTableModule, _angular_material_tabs__WEBPACK_IMPORTED_MODULE_20__.MatTabsModule, _angular_material_toolbar__WEBPACK_IMPORTED_MODULE_21__.MatToolbarModule, _angular_material_tooltip__WEBPACK_IMPORTED_MODULE_22__.MatTooltipModule, ng2_charts__WEBPACK_IMPORTED_MODULE_23__.NgChartsModule, _angular_common__WEBPACK_IMPORTED_MODULE_1__.CommonModule, _angular_forms__WEBPACK_IMPORTED_MODULE_2__.FormsModule, _angular_forms__WEBPACK_IMPORTED_MODULE_2__.ReactiveFormsModule, _angular_router__WEBPACK_IMPORTED_MODULE_3__.RouterModule, _angular_material_badge__WEBPACK_IMPORTED_MODULE_4__.MatBadgeModule, _angular_material_button__WEBPACK_IMPORTED_MODULE_5__.MatButtonModule, _angular_material_card__WEBPACK_IMPORTED_MODULE_6__.MatCardModule, _angular_material_chips__WEBPACK_IMPORTED_MODULE_7__.MatChipsModule, _angular_material_dialog__WEBPACK_IMPORTED_MODULE_8__.MatDialogModule, _angular_material_divider__WEBPACK_IMPORTED_MODULE_9__.MatDividerModule, _angular_material_form_field__WEBPACK_IMPORTED_MODULE_10__.MatFormFieldModule, _angular_material_icon__WEBPACK_IMPORTED_MODULE_11__.MatIconModule, _angular_material_input__WEBPACK_IMPORTED_MODULE_12__.MatInputModule, _angular_material_list__WEBPACK_IMPORTED_MODULE_13__.MatListModule, _angular_material_menu__WEBPACK_IMPORTED_MODULE_14__.MatMenuModule, _angular_material_paginator__WEBPACK_IMPORTED_MODULE_15__.MatPaginatorModule, _angular_material_progress_spinner__WEBPACK_IMPORTED_MODULE_16__.MatProgressSpinnerModule, _angular_material_select__WEBPACK_IMPORTED_MODULE_17__.MatSelectModule, _angular_material_sidenav__WEBPACK_IMPORTED_MODULE_18__.MatSidenavModule, _angular_material_table__WEBPACK_IMPORTED_MODULE_19__.MatTableModule, _angular_material_tabs__WEBPACK_IMPORTED_MODULE_20__.MatTabsModule, _angular_material_toolbar__WEBPACK_IMPORTED_MODULE_21__.MatToolbarModule, _angular_material_tooltip__WEBPACK_IMPORTED_MODULE_22__.MatTooltipModule, ng2_charts__WEBPACK_IMPORTED_MODULE_23__.NgChartsModule]
    });
  }
}
(function () {
  (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsetNgModuleScope"](SharedModule, {
    imports: [_angular_common__WEBPACK_IMPORTED_MODULE_1__.CommonModule, _angular_forms__WEBPACK_IMPORTED_MODULE_2__.FormsModule, _angular_forms__WEBPACK_IMPORTED_MODULE_2__.ReactiveFormsModule, _angular_router__WEBPACK_IMPORTED_MODULE_3__.RouterModule, _angular_material_badge__WEBPACK_IMPORTED_MODULE_4__.MatBadgeModule, _angular_material_button__WEBPACK_IMPORTED_MODULE_5__.MatButtonModule, _angular_material_card__WEBPACK_IMPORTED_MODULE_6__.MatCardModule, _angular_material_chips__WEBPACK_IMPORTED_MODULE_7__.MatChipsModule, _angular_material_dialog__WEBPACK_IMPORTED_MODULE_8__.MatDialogModule, _angular_material_divider__WEBPACK_IMPORTED_MODULE_9__.MatDividerModule, _angular_material_form_field__WEBPACK_IMPORTED_MODULE_10__.MatFormFieldModule, _angular_material_icon__WEBPACK_IMPORTED_MODULE_11__.MatIconModule, _angular_material_input__WEBPACK_IMPORTED_MODULE_12__.MatInputModule, _angular_material_list__WEBPACK_IMPORTED_MODULE_13__.MatListModule, _angular_material_menu__WEBPACK_IMPORTED_MODULE_14__.MatMenuModule, _angular_material_paginator__WEBPACK_IMPORTED_MODULE_15__.MatPaginatorModule, _angular_material_progress_spinner__WEBPACK_IMPORTED_MODULE_16__.MatProgressSpinnerModule, _angular_material_select__WEBPACK_IMPORTED_MODULE_17__.MatSelectModule, _angular_material_sidenav__WEBPACK_IMPORTED_MODULE_18__.MatSidenavModule, _angular_material_table__WEBPACK_IMPORTED_MODULE_19__.MatTableModule, _angular_material_tabs__WEBPACK_IMPORTED_MODULE_20__.MatTabsModule, _angular_material_toolbar__WEBPACK_IMPORTED_MODULE_21__.MatToolbarModule, _angular_material_tooltip__WEBPACK_IMPORTED_MODULE_22__.MatTooltipModule, ng2_charts__WEBPACK_IMPORTED_MODULE_23__.NgChartsModule],
    exports: [_angular_common__WEBPACK_IMPORTED_MODULE_1__.CommonModule, _angular_forms__WEBPACK_IMPORTED_MODULE_2__.FormsModule, _angular_forms__WEBPACK_IMPORTED_MODULE_2__.ReactiveFormsModule, _angular_router__WEBPACK_IMPORTED_MODULE_3__.RouterModule, _angular_material_badge__WEBPACK_IMPORTED_MODULE_4__.MatBadgeModule, _angular_material_button__WEBPACK_IMPORTED_MODULE_5__.MatButtonModule, _angular_material_card__WEBPACK_IMPORTED_MODULE_6__.MatCardModule, _angular_material_chips__WEBPACK_IMPORTED_MODULE_7__.MatChipsModule, _angular_material_dialog__WEBPACK_IMPORTED_MODULE_8__.MatDialogModule, _angular_material_divider__WEBPACK_IMPORTED_MODULE_9__.MatDividerModule, _angular_material_form_field__WEBPACK_IMPORTED_MODULE_10__.MatFormFieldModule, _angular_material_icon__WEBPACK_IMPORTED_MODULE_11__.MatIconModule, _angular_material_input__WEBPACK_IMPORTED_MODULE_12__.MatInputModule, _angular_material_list__WEBPACK_IMPORTED_MODULE_13__.MatListModule, _angular_material_menu__WEBPACK_IMPORTED_MODULE_14__.MatMenuModule, _angular_material_paginator__WEBPACK_IMPORTED_MODULE_15__.MatPaginatorModule, _angular_material_progress_spinner__WEBPACK_IMPORTED_MODULE_16__.MatProgressSpinnerModule, _angular_material_select__WEBPACK_IMPORTED_MODULE_17__.MatSelectModule, _angular_material_sidenav__WEBPACK_IMPORTED_MODULE_18__.MatSidenavModule, _angular_material_table__WEBPACK_IMPORTED_MODULE_19__.MatTableModule, _angular_material_tabs__WEBPACK_IMPORTED_MODULE_20__.MatTabsModule, _angular_material_toolbar__WEBPACK_IMPORTED_MODULE_21__.MatToolbarModule, _angular_material_tooltip__WEBPACK_IMPORTED_MODULE_22__.MatTooltipModule, ng2_charts__WEBPACK_IMPORTED_MODULE_23__.NgChartsModule]
  });
})();

/***/ }),

/***/ 4431:
/*!*********************!*\
  !*** ./src/main.ts ***!
  \*********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/platform-browser */ 4497);
/* harmony import */ var _app_app_module__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./app/app.module */ 6747);


_angular_platform_browser__WEBPACK_IMPORTED_MODULE_1__.platformBrowser().bootstrapModule(_app_app_module__WEBPACK_IMPORTED_MODULE_0__.AppModule).catch(err => console.error(err));

/***/ })

},
/******/ __webpack_require__ => { // webpackRuntimeModules
/******/ var __webpack_exec__ = (moduleId) => (__webpack_require__(__webpack_require__.s = moduleId))
/******/ __webpack_require__.O(0, ["vendor"], () => (__webpack_exec__(4431)));
/******/ var __webpack_exports__ = __webpack_require__.O();
/******/ }
]);
//# sourceMappingURL=main.js.map