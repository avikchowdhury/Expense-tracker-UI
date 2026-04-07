"use strict";
(self["webpackChunkmy_app"] = self["webpackChunkmy_app"] || []).push([["src_app_features_auth_auth_module_ts"],{

/***/ 9893:
/*!******************************************************!*\
  !*** ./src/app/features/auth/auth-page.component.ts ***!
  \******************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "AuthPageComponent": () => (/* binding */ AuthPageComponent)
/* harmony export */ });
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ 124);
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! rxjs */ 116);
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! rxjs */ 635);
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! rxjs */ 4874);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/core */ 2560);
/* harmony import */ var _components_auth_hero_component__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./components/auth-hero.component */ 5750);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/common */ 4666);






class AuthPageComponent {
  constructor(router) {
    this.router = router;
    this.activeMode$ = this.router.events.pipe((0,rxjs__WEBPACK_IMPORTED_MODULE_1__.filter)(event => event instanceof _angular_router__WEBPACK_IMPORTED_MODULE_2__.NavigationEnd), (0,rxjs__WEBPACK_IMPORTED_MODULE_3__.map)(() => this.router.url.includes('/register') ? 'register' : 'login'), (0,rxjs__WEBPACK_IMPORTED_MODULE_4__.startWith)(this.router.url.includes('/register') ? 'register' : 'login'));
  }
  static {
    this.ɵfac = function AuthPageComponent_Factory(t) {
      return new (t || AuthPageComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_2__.Router));
    };
  }
  static {
    this.ɵcmp = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵdefineComponent"]({
      type: AuthPageComponent,
      selectors: [["app-auth-page"]],
      decls: 11,
      vars: 3,
      consts: [[1, "auth-page"], [1, "auth-grid"], [3, "mode"], [1, "auth-panel"], [1, "auth-tabs"], ["routerLink", "/auth/login", "routerLinkActive", "active", 1, "auth-tab"], ["routerLink", "/auth/register", "routerLinkActive", "active", 1, "auth-tab"]],
      template: function AuthPageComponent_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](0, "div", 0)(1, "div", 1);
          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelement"](2, "app-auth-hero", 2);
          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵpipe"](3, "async");
          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](4, "section", 3)(5, "div", 4)(6, "a", 5);
          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](7, "Login");
          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](8, "a", 6);
          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](9, "Register");
          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]()();
          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelement"](10, "router-outlet");
          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]()()();
        }
        if (rf & 2) {
          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](2);
          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵproperty"]("mode", _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵpipeBind1"](3, 1, ctx.activeMode$) || "login");
        }
      },
      dependencies: [_angular_router__WEBPACK_IMPORTED_MODULE_2__.RouterOutlet, _angular_router__WEBPACK_IMPORTED_MODULE_2__.RouterLink, _angular_router__WEBPACK_IMPORTED_MODULE_2__.RouterLinkActive, _components_auth_hero_component__WEBPACK_IMPORTED_MODULE_0__.AuthHeroComponent, _angular_common__WEBPACK_IMPORTED_MODULE_6__.AsyncPipe],
      styles: [".auth-page[_ngcontent-%COMP%] {\n  min-height: 100vh;\n  padding: 2rem clamp(1rem, 4vw, 3rem);\n  display: grid;\n  place-items: center;\n  background: radial-gradient(circle at top right, rgba(20, 168, 121, 0.18), transparent 24%), radial-gradient(circle at bottom left, rgba(18, 110, 130, 0.18), transparent 26%), linear-gradient(135deg, #07131c 0%, #0e2231 52%, #f5f9fb 52%, #f5f9fb 100%);\n}\n\n.auth-grid[_ngcontent-%COMP%] {\n  width: min(1180px, 100%);\n  display: grid;\n  grid-template-columns: 1.15fr 0.85fr;\n  gap: 1.5rem;\n  align-items: stretch;\n}\n\n.auth-panel[_ngcontent-%COMP%] {\n  padding: 1.5rem;\n  border-radius: 28px;\n  background: rgba(255, 255, 255, 0.96);\n  box-shadow: 0 24px 60px rgba(8, 23, 35, 0.16);\n}\n\n.auth-tabs[_ngcontent-%COMP%] {\n  display: inline-flex;\n  gap: 0.5rem;\n  padding: 0.35rem;\n  margin-bottom: 1.25rem;\n  background: #eef3f7;\n  border-radius: 16px;\n}\n\n.auth-tab[_ngcontent-%COMP%] {\n  padding: 0.8rem 1.1rem;\n  border-radius: 12px;\n  text-decoration: none;\n  color: #274052;\n  font-weight: 600;\n}\n\n.auth-tab.active[_ngcontent-%COMP%] {\n  background: #0f6c5b;\n  color: #ffffff;\n}\n\n@media (max-width: 980px) {\n  .auth-page[_ngcontent-%COMP%] {\n    background: linear-gradient(180deg, #07131c 0%, #0e2231 35%, #f5f9fb 35%, #f5f9fb 100%);\n  }\n  .auth-grid[_ngcontent-%COMP%] {\n    grid-template-columns: 1fr;\n  }\n}\n/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8uL3NyYy9hcHAvZmVhdHVyZXMvYXV0aC9hdXRoLXBhZ2UuY29tcG9uZW50LnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFDRSxpQkFBQTtFQUNBLG9DQUFBO0VBQ0EsYUFBQTtFQUNBLG1CQUFBO0VBQ0EsMlBBQ0U7QUFBSjs7QUFLQTtFQUNFLHdCQUFBO0VBQ0EsYUFBQTtFQUNBLG9DQUFBO0VBQ0EsV0FBQTtFQUNBLG9CQUFBO0FBRkY7O0FBS0E7RUFDRSxlQUFBO0VBQ0EsbUJBQUE7RUFDQSxxQ0FBQTtFQUNBLDZDQUFBO0FBRkY7O0FBS0E7RUFDRSxvQkFBQTtFQUNBLFdBQUE7RUFDQSxnQkFBQTtFQUNBLHNCQUFBO0VBQ0EsbUJBQUE7RUFDQSxtQkFBQTtBQUZGOztBQUtBO0VBQ0Usc0JBQUE7RUFDQSxtQkFBQTtFQUNBLHFCQUFBO0VBQ0EsY0FBQTtFQUNBLGdCQUFBO0FBRkY7O0FBS0E7RUFDRSxtQkFBQTtFQUNBLGNBQUE7QUFGRjs7QUFLQTtFQUNFO0lBQ0UsdUZBQUE7RUFGRjtFQUtBO0lBQ0UsMEJBQUE7RUFIRjtBQUNGIiwic291cmNlc0NvbnRlbnQiOlsiLmF1dGgtcGFnZSB7XG4gIG1pbi1oZWlnaHQ6IDEwMHZoO1xuICBwYWRkaW5nOiAycmVtIGNsYW1wKDFyZW0sIDR2dywgM3JlbSk7XG4gIGRpc3BsYXk6IGdyaWQ7XG4gIHBsYWNlLWl0ZW1zOiBjZW50ZXI7XG4gIGJhY2tncm91bmQ6XG4gICAgcmFkaWFsLWdyYWRpZW50KGNpcmNsZSBhdCB0b3AgcmlnaHQsIHJnYmEoMjAsIDE2OCwgMTIxLCAwLjE4KSwgdHJhbnNwYXJlbnQgMjQlKSxcbiAgICByYWRpYWwtZ3JhZGllbnQoY2lyY2xlIGF0IGJvdHRvbSBsZWZ0LCByZ2JhKDE4LCAxMTAsIDEzMCwgMC4xOCksIHRyYW5zcGFyZW50IDI2JSksXG4gICAgbGluZWFyLWdyYWRpZW50KDEzNWRlZywgIzA3MTMxYyAwJSwgIzBlMjIzMSA1MiUsICNmNWY5ZmIgNTIlLCAjZjVmOWZiIDEwMCUpO1xufVxuXG4uYXV0aC1ncmlkIHtcbiAgd2lkdGg6IG1pbigxMTgwcHgsIDEwMCUpO1xuICBkaXNwbGF5OiBncmlkO1xuICBncmlkLXRlbXBsYXRlLWNvbHVtbnM6IDEuMTVmciAwLjg1ZnI7XG4gIGdhcDogMS41cmVtO1xuICBhbGlnbi1pdGVtczogc3RyZXRjaDtcbn1cblxuLmF1dGgtcGFuZWwge1xuICBwYWRkaW5nOiAxLjVyZW07XG4gIGJvcmRlci1yYWRpdXM6IDI4cHg7XG4gIGJhY2tncm91bmQ6IHJnYmEoMjU1LCAyNTUsIDI1NSwgMC45Nik7XG4gIGJveC1zaGFkb3c6IDAgMjRweCA2MHB4IHJnYmEoOCwgMjMsIDM1LCAwLjE2KTtcbn1cblxuLmF1dGgtdGFicyB7XG4gIGRpc3BsYXk6IGlubGluZS1mbGV4O1xuICBnYXA6IDAuNXJlbTtcbiAgcGFkZGluZzogMC4zNXJlbTtcbiAgbWFyZ2luLWJvdHRvbTogMS4yNXJlbTtcbiAgYmFja2dyb3VuZDogI2VlZjNmNztcbiAgYm9yZGVyLXJhZGl1czogMTZweDtcbn1cblxuLmF1dGgtdGFiIHtcbiAgcGFkZGluZzogMC44cmVtIDEuMXJlbTtcbiAgYm9yZGVyLXJhZGl1czogMTJweDtcbiAgdGV4dC1kZWNvcmF0aW9uOiBub25lO1xuICBjb2xvcjogIzI3NDA1MjtcbiAgZm9udC13ZWlnaHQ6IDYwMDtcbn1cblxuLmF1dGgtdGFiLmFjdGl2ZSB7XG4gIGJhY2tncm91bmQ6ICMwZjZjNWI7XG4gIGNvbG9yOiAjZmZmZmZmO1xufVxuXG5AbWVkaWEgKG1heC13aWR0aDogOTgwcHgpIHtcbiAgLmF1dGgtcGFnZSB7XG4gICAgYmFja2dyb3VuZDogbGluZWFyLWdyYWRpZW50KDE4MGRlZywgIzA3MTMxYyAwJSwgIzBlMjIzMSAzNSUsICNmNWY5ZmIgMzUlLCAjZjVmOWZiIDEwMCUpO1xuICB9XG5cbiAgLmF1dGgtZ3JpZCB7XG4gICAgZ3JpZC10ZW1wbGF0ZS1jb2x1bW5zOiAxZnI7XG4gIH1cbn1cbiJdLCJzb3VyY2VSb290IjoiIn0= */"]
    });
  }
}

/***/ }),

/***/ 6698:
/*!******************************************************!*\
  !*** ./src/app/features/auth/auth-routing.module.ts ***!
  \******************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "AuthRoutingModule": () => (/* binding */ AuthRoutingModule)
/* harmony export */ });
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/router */ 124);
/* harmony import */ var _auth_page_component__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./auth-page.component */ 9893);
/* harmony import */ var _components_login_form_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./components/login-form.component */ 7583);
/* harmony import */ var _components_register_form_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./components/register-form.component */ 9853);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ 2560);






const routes = [{
  path: '',
  component: _auth_page_component__WEBPACK_IMPORTED_MODULE_0__.AuthPageComponent,
  children: [{
    path: '',
    pathMatch: 'full',
    redirectTo: 'login'
  }, {
    path: 'login',
    component: _components_login_form_component__WEBPACK_IMPORTED_MODULE_1__.LoginFormComponent
  }, {
    path: 'register',
    component: _components_register_form_component__WEBPACK_IMPORTED_MODULE_2__.RegisterFormComponent
  }]
}];
class AuthRoutingModule {
  static {
    this.ɵfac = function AuthRoutingModule_Factory(t) {
      return new (t || AuthRoutingModule)();
    };
  }
  static {
    this.ɵmod = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵdefineNgModule"]({
      type: AuthRoutingModule
    });
  }
  static {
    this.ɵinj = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵdefineInjector"]({
      imports: [_angular_router__WEBPACK_IMPORTED_MODULE_4__.RouterModule.forChild(routes), _angular_router__WEBPACK_IMPORTED_MODULE_4__.RouterModule]
    });
  }
}
(function () {
  (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵsetNgModuleScope"](AuthRoutingModule, {
    imports: [_angular_router__WEBPACK_IMPORTED_MODULE_4__.RouterModule],
    exports: [_angular_router__WEBPACK_IMPORTED_MODULE_4__.RouterModule]
  });
})();

/***/ }),

/***/ 2399:
/*!**********************************************!*\
  !*** ./src/app/features/auth/auth.module.ts ***!
  \**********************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "AuthModule": () => (/* binding */ AuthModule)
/* harmony export */ });
/* harmony import */ var _auth_routing_module__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./auth-routing.module */ 6698);
/* harmony import */ var _auth_page_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./auth-page.component */ 9893);
/* harmony import */ var _components_auth_hero_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./components/auth-hero.component */ 5750);
/* harmony import */ var _components_login_form_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./components/login-form.component */ 7583);
/* harmony import */ var _components_register_form_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./components/register-form.component */ 9853);
/* harmony import */ var _shared_shared_module__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../shared/shared.module */ 4466);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/core */ 2560);







class AuthModule {
  static {
    this.ɵfac = function AuthModule_Factory(t) {
      return new (t || AuthModule)();
    };
  }
  static {
    this.ɵmod = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵdefineNgModule"]({
      type: AuthModule
    });
  }
  static {
    this.ɵinj = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵdefineInjector"]({
      imports: [_shared_shared_module__WEBPACK_IMPORTED_MODULE_5__.SharedModule, _auth_routing_module__WEBPACK_IMPORTED_MODULE_0__.AuthRoutingModule]
    });
  }
}
(function () {
  (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵsetNgModuleScope"](AuthModule, {
    declarations: [_auth_page_component__WEBPACK_IMPORTED_MODULE_1__.AuthPageComponent, _components_auth_hero_component__WEBPACK_IMPORTED_MODULE_2__.AuthHeroComponent, _components_login_form_component__WEBPACK_IMPORTED_MODULE_3__.LoginFormComponent, _components_register_form_component__WEBPACK_IMPORTED_MODULE_4__.RegisterFormComponent],
    imports: [_shared_shared_module__WEBPACK_IMPORTED_MODULE_5__.SharedModule, _auth_routing_module__WEBPACK_IMPORTED_MODULE_0__.AuthRoutingModule]
  });
})();

/***/ }),

/***/ 5750:
/*!*****************************************************************!*\
  !*** ./src/app/features/auth/components/auth-hero.component.ts ***!
  \*****************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "AuthHeroComponent": () => (/* binding */ AuthHeroComponent)
/* harmony export */ });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ 2560);

class AuthHeroComponent {
  constructor() {
    this.mode = 'login';
  }
  static {
    this.ɵfac = function AuthHeroComponent_Factory(t) {
      return new (t || AuthHeroComponent)();
    };
  }
  static {
    this.ɵcmp = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({
      type: AuthHeroComponent,
      selectors: [["app-auth-hero"]],
      inputs: {
        mode: "mode"
      },
      decls: 29,
      vars: 1,
      consts: [[1, "auth-hero"], [1, "eyebrow"], [1, "lead"], [1, "hero-cards"], [1, "hero-card"], [1, "label"]],
      template: function AuthHeroComponent_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "section", 0)(1, "p", 1);
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](2, "Finance Copilot");
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "h1");
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](4);
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "p", 2);
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](6, " Upload receipts, get automatic spending patterns, and ask your tracker for budget guidance in plain language. ");
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](7, "div", 3)(8, "article", 4)(9, "span", 5);
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](10, "AI scan");
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](11, "strong");
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](12, "Receipt parsing and category suggestions");
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](13, "p");
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](14, "Turn files into tracked expenses faster with a guided upload flow.");
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]()();
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](15, "article", 4)(16, "span", 5);
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](17, "Coach mode");
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](18, "strong");
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](19, "Insight cards with practical next actions");
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](20, "p");
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](21, "See overspend risk, unusual vendors, and what deserves attention next.");
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]()();
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](22, "article", 4)(23, "span", 5);
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](24, "Secure access");
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](25, "strong");
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](26, "OTP-based onboarding for new users");
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](27, "p");
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](28, "Keep your login flow clean while still making registration simple.");
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]()()()();
        }
        if (rf & 2) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](4);
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](ctx.mode === "register" ? "Create your AI expense workspace" : "Welcome back to your smart finance hub");
        }
      },
      styles: [".auth-hero[_ngcontent-%COMP%] {\n  padding: 2rem;\n  border-radius: 28px;\n  background: linear-gradient(180deg, rgba(9, 29, 41, 0.95) 0%, rgba(8, 43, 56, 0.95) 100%);\n  color: #f4fbfd;\n  box-shadow: 0 24px 60px rgba(3, 14, 21, 0.28);\n}\n\n.eyebrow[_ngcontent-%COMP%] {\n  margin: 0 0 0.75rem;\n  font-size: 0.76rem;\n  letter-spacing: 0.18em;\n  text-transform: uppercase;\n  color: #7de0be;\n}\n\n.auth-hero[_ngcontent-%COMP%]   h1[_ngcontent-%COMP%] {\n  margin: 0 0 1rem;\n  font-size: clamp(2rem, 4vw, 3.6rem);\n  line-height: 0.98;\n}\n\n.lead[_ngcontent-%COMP%] {\n  margin: 0 0 1.5rem;\n  max-width: 560px;\n  color: #c7d9e0;\n  font-size: 1.02rem;\n}\n\n.hero-cards[_ngcontent-%COMP%] {\n  display: grid;\n  gap: 1rem;\n}\n\n.hero-card[_ngcontent-%COMP%] {\n  padding: 1rem 1.1rem;\n  border-radius: 18px;\n  background: rgba(255, 255, 255, 0.06);\n  border: 1px solid rgba(255, 255, 255, 0.08);\n}\n\n.hero-card[_ngcontent-%COMP%]   .label[_ngcontent-%COMP%] {\n  display: inline-block;\n  margin-bottom: 0.35rem;\n  padding: 0.25rem 0.5rem;\n  border-radius: 999px;\n  background: rgba(125, 224, 190, 0.14);\n  color: #9cf3d2;\n  font-size: 0.75rem;\n  text-transform: uppercase;\n  letter-spacing: 0.08em;\n}\n\n.hero-card[_ngcontent-%COMP%]   strong[_ngcontent-%COMP%] {\n  display: block;\n  margin-bottom: 0.4rem;\n  font-size: 1rem;\n}\n\n.hero-card[_ngcontent-%COMP%]   p[_ngcontent-%COMP%] {\n  margin: 0;\n  color: #c7d9e0;\n}\n/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8uL3NyYy9hcHAvZmVhdHVyZXMvYXV0aC9jb21wb25lbnRzL2F1dGgtaGVyby5jb21wb25lbnQuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUNFLGFBQUE7RUFDQSxtQkFBQTtFQUNBLHlGQUFBO0VBQ0EsY0FBQTtFQUNBLDZDQUFBO0FBQ0Y7O0FBRUE7RUFDRSxtQkFBQTtFQUNBLGtCQUFBO0VBQ0Esc0JBQUE7RUFDQSx5QkFBQTtFQUNBLGNBQUE7QUFDRjs7QUFFQTtFQUNFLGdCQUFBO0VBQ0EsbUNBQUE7RUFDQSxpQkFBQTtBQUNGOztBQUVBO0VBQ0Usa0JBQUE7RUFDQSxnQkFBQTtFQUNBLGNBQUE7RUFDQSxrQkFBQTtBQUNGOztBQUVBO0VBQ0UsYUFBQTtFQUNBLFNBQUE7QUFDRjs7QUFFQTtFQUNFLG9CQUFBO0VBQ0EsbUJBQUE7RUFDQSxxQ0FBQTtFQUNBLDJDQUFBO0FBQ0Y7O0FBRUE7RUFDRSxxQkFBQTtFQUNBLHNCQUFBO0VBQ0EsdUJBQUE7RUFDQSxvQkFBQTtFQUNBLHFDQUFBO0VBQ0EsY0FBQTtFQUNBLGtCQUFBO0VBQ0EseUJBQUE7RUFDQSxzQkFBQTtBQUNGOztBQUVBO0VBQ0UsY0FBQTtFQUNBLHFCQUFBO0VBQ0EsZUFBQTtBQUNGOztBQUVBO0VBQ0UsU0FBQTtFQUNBLGNBQUE7QUFDRiIsInNvdXJjZXNDb250ZW50IjpbIi5hdXRoLWhlcm8ge1xuICBwYWRkaW5nOiAycmVtO1xuICBib3JkZXItcmFkaXVzOiAyOHB4O1xuICBiYWNrZ3JvdW5kOiBsaW5lYXItZ3JhZGllbnQoMTgwZGVnLCByZ2JhKDksIDI5LCA0MSwgMC45NSkgMCUsIHJnYmEoOCwgNDMsIDU2LCAwLjk1KSAxMDAlKTtcbiAgY29sb3I6ICNmNGZiZmQ7XG4gIGJveC1zaGFkb3c6IDAgMjRweCA2MHB4IHJnYmEoMywgMTQsIDIxLCAwLjI4KTtcbn1cblxuLmV5ZWJyb3cge1xuICBtYXJnaW46IDAgMCAwLjc1cmVtO1xuICBmb250LXNpemU6IDAuNzZyZW07XG4gIGxldHRlci1zcGFjaW5nOiAwLjE4ZW07XG4gIHRleHQtdHJhbnNmb3JtOiB1cHBlcmNhc2U7XG4gIGNvbG9yOiAjN2RlMGJlO1xufVxuXG4uYXV0aC1oZXJvIGgxIHtcbiAgbWFyZ2luOiAwIDAgMXJlbTtcbiAgZm9udC1zaXplOiBjbGFtcCgycmVtLCA0dncsIDMuNnJlbSk7XG4gIGxpbmUtaGVpZ2h0OiAwLjk4O1xufVxuXG4ubGVhZCB7XG4gIG1hcmdpbjogMCAwIDEuNXJlbTtcbiAgbWF4LXdpZHRoOiA1NjBweDtcbiAgY29sb3I6ICNjN2Q5ZTA7XG4gIGZvbnQtc2l6ZTogMS4wMnJlbTtcbn1cblxuLmhlcm8tY2FyZHMge1xuICBkaXNwbGF5OiBncmlkO1xuICBnYXA6IDFyZW07XG59XG5cbi5oZXJvLWNhcmQge1xuICBwYWRkaW5nOiAxcmVtIDEuMXJlbTtcbiAgYm9yZGVyLXJhZGl1czogMThweDtcbiAgYmFja2dyb3VuZDogcmdiYSgyNTUsIDI1NSwgMjU1LCAwLjA2KTtcbiAgYm9yZGVyOiAxcHggc29saWQgcmdiYSgyNTUsIDI1NSwgMjU1LCAwLjA4KTtcbn1cblxuLmhlcm8tY2FyZCAubGFiZWwge1xuICBkaXNwbGF5OiBpbmxpbmUtYmxvY2s7XG4gIG1hcmdpbi1ib3R0b206IDAuMzVyZW07XG4gIHBhZGRpbmc6IDAuMjVyZW0gMC41cmVtO1xuICBib3JkZXItcmFkaXVzOiA5OTlweDtcbiAgYmFja2dyb3VuZDogcmdiYSgxMjUsIDIyNCwgMTkwLCAwLjE0KTtcbiAgY29sb3I6ICM5Y2YzZDI7XG4gIGZvbnQtc2l6ZTogMC43NXJlbTtcbiAgdGV4dC10cmFuc2Zvcm06IHVwcGVyY2FzZTtcbiAgbGV0dGVyLXNwYWNpbmc6IDAuMDhlbTtcbn1cblxuLmhlcm8tY2FyZCBzdHJvbmcge1xuICBkaXNwbGF5OiBibG9jaztcbiAgbWFyZ2luLWJvdHRvbTogMC40cmVtO1xuICBmb250LXNpemU6IDFyZW07XG59XG5cbi5oZXJvLWNhcmQgcCB7XG4gIG1hcmdpbjogMDtcbiAgY29sb3I6ICNjN2Q5ZTA7XG59XG4iXSwic291cmNlUm9vdCI6IiJ9 */"]
    });
  }
}

/***/ }),

/***/ 7583:
/*!******************************************************************!*\
  !*** ./src/app/features/auth/components/login-form.component.ts ***!
  \******************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "LoginFormComponent": () => (/* binding */ LoginFormComponent)
/* harmony export */ });
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/forms */ 2508);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ 2560);
/* harmony import */ var _services_auth_service__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../../services/auth.service */ 7556);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ 124);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/common */ 4666);
/* harmony import */ var _angular_material_button__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/material/button */ 4522);
/* harmony import */ var _angular_material_form_field__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/material/form-field */ 5074);
/* harmony import */ var _angular_material_icon__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/material/icon */ 7822);
/* harmony import */ var _angular_material_input__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @angular/material/input */ 8562);










function LoginFormComponent_mat_error_10_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "mat-error");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](1, "Email is required.");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
  }
}
function LoginFormComponent_mat_error_11_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "mat-error");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](1, "Enter a valid email.");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
  }
}
function LoginFormComponent_mat_error_19_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "mat-error");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](1, "Password is required.");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
  }
}
function LoginFormComponent_div_20_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "div", 9);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
  }
  if (rf & 2) {
    const ctx_r3 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate"](ctx_r3.errorMessage);
  }
}
class LoginFormComponent {
  constructor(fb, authService, router) {
    this.fb = fb;
    this.authService = authService;
    this.router = router;
    this.showPassword = false;
    this.loading = false;
    this.errorMessage = '';
    this.form = this.fb.group({
      email: ['', [_angular_forms__WEBPACK_IMPORTED_MODULE_2__.Validators.required, _angular_forms__WEBPACK_IMPORTED_MODULE_2__.Validators.email]],
      password: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_2__.Validators.required]
    });
  }
  submit() {
    if (this.form.invalid || this.loading) {
      this.form.markAllAsTouched();
      return;
    }
    this.loading = true;
    this.errorMessage = '';
    const {
      email,
      password
    } = this.form.value;
    this.authService.login(email, password).subscribe({
      next: response => {
        this.authService.saveToken(response);
        this.router.navigate(['/dashboard']);
      },
      error: err => {
        this.errorMessage = err.error?.message || 'Login failed.';
        this.loading = false;
      },
      complete: () => {
        this.loading = false;
      }
    });
  }
  static {
    this.ɵfac = function LoginFormComponent_Factory(t) {
      return new (t || LoginFormComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](_angular_forms__WEBPACK_IMPORTED_MODULE_2__.FormBuilder), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](_services_auth_service__WEBPACK_IMPORTED_MODULE_0__.AuthService), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_3__.Router));
    };
  }
  static {
    this.ɵcmp = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineComponent"]({
      type: LoginFormComponent,
      selectors: [["app-login-form"]],
      decls: 23,
      vars: 9,
      consts: [[1, "form-copy"], [1, "auth-form", 3, "formGroup", "ngSubmit"], ["appearance", "outline"], ["matInput", "", "type", "email", "formControlName", "email"], [4, "ngIf"], ["matInput", "", "formControlName", "password", 3, "type"], ["mat-icon-button", "", "matSuffix", "", "type", "button", 3, "click"], ["class", "status error", 4, "ngIf"], ["mat-raised-button", "", "color", "primary", "type", "submit", 3, "disabled"], [1, "status", "error"]],
      template: function LoginFormComponent_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "div", 0)(1, "h2");
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](2, "Sign in");
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](3, "p");
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](4, "Open your dashboards, receipt inbox, and AI spending recommendations.");
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()();
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](5, "form", 1);
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("ngSubmit", function LoginFormComponent_Template_form_ngSubmit_5_listener() {
            return ctx.submit();
          });
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](6, "mat-form-field", 2)(7, "mat-label");
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](8, "Email");
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](9, "input", 3);
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](10, LoginFormComponent_mat_error_10_Template, 2, 0, "mat-error", 4);
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](11, LoginFormComponent_mat_error_11_Template, 2, 0, "mat-error", 4);
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](12, "mat-form-field", 2)(13, "mat-label");
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](14, "Password");
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](15, "input", 5);
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](16, "button", 6);
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("click", function LoginFormComponent_Template_button_click_16_listener() {
            return ctx.showPassword = !ctx.showPassword;
          });
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](17, "mat-icon");
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](18);
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()();
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](19, LoginFormComponent_mat_error_19_Template, 2, 0, "mat-error", 4);
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](20, LoginFormComponent_div_20_Template, 2, 1, "div", 7);
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](21, "button", 8);
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](22);
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()();
        }
        if (rf & 2) {
          let tmp_1_0;
          let tmp_2_0;
          let tmp_5_0;
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](5);
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("formGroup", ctx.form);
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](5);
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", (tmp_1_0 = ctx.form.get("email")) == null ? null : tmp_1_0.hasError("required"));
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", (tmp_2_0 = ctx.form.get("email")) == null ? null : tmp_2_0.hasError("email"));
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](4);
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("type", ctx.showPassword ? "text" : "password");
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](3);
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate"](ctx.showPassword ? "visibility_off" : "visibility");
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", (tmp_5_0 = ctx.form.get("password")) == null ? null : tmp_5_0.hasError("required"));
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", ctx.errorMessage);
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("disabled", ctx.loading);
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate1"](" ", ctx.loading ? "Signing in..." : "Login to dashboard", " ");
        }
      },
      dependencies: [_angular_common__WEBPACK_IMPORTED_MODULE_4__.NgIf, _angular_forms__WEBPACK_IMPORTED_MODULE_2__["ɵNgNoValidate"], _angular_forms__WEBPACK_IMPORTED_MODULE_2__.DefaultValueAccessor, _angular_forms__WEBPACK_IMPORTED_MODULE_2__.NgControlStatus, _angular_forms__WEBPACK_IMPORTED_MODULE_2__.NgControlStatusGroup, _angular_forms__WEBPACK_IMPORTED_MODULE_2__.FormGroupDirective, _angular_forms__WEBPACK_IMPORTED_MODULE_2__.FormControlName, _angular_material_button__WEBPACK_IMPORTED_MODULE_5__.MatButton, _angular_material_button__WEBPACK_IMPORTED_MODULE_5__.MatIconButton, _angular_material_form_field__WEBPACK_IMPORTED_MODULE_6__.MatFormField, _angular_material_form_field__WEBPACK_IMPORTED_MODULE_6__.MatLabel, _angular_material_form_field__WEBPACK_IMPORTED_MODULE_6__.MatError, _angular_material_form_field__WEBPACK_IMPORTED_MODULE_6__.MatSuffix, _angular_material_icon__WEBPACK_IMPORTED_MODULE_7__.MatIcon, _angular_material_input__WEBPACK_IMPORTED_MODULE_8__.MatInput],
      styles: [".form-copy[_ngcontent-%COMP%] {\n  margin-bottom: 1rem;\n}\n\n.form-copy[_ngcontent-%COMP%]   h2[_ngcontent-%COMP%] {\n  margin: 0 0 0.25rem;\n  font-size: 1.8rem;\n}\n\n.form-copy[_ngcontent-%COMP%]   p[_ngcontent-%COMP%] {\n  margin: 0;\n  color: #5c7383;\n}\n\n.auth-form[_ngcontent-%COMP%] {\n  display: grid;\n  gap: 1rem;\n}\n\n.auth-form[_ngcontent-%COMP%]   button[type=submit][_ngcontent-%COMP%] {\n  min-height: 48px;\n}\n\n.status[_ngcontent-%COMP%] {\n  padding: 0.8rem 0.9rem;\n  border-radius: 14px;\n  font-size: 0.95rem;\n}\n\n.status.error[_ngcontent-%COMP%] {\n  background: #fff2f1;\n  color: #af2d1d;\n}\n/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8uL3NyYy9hcHAvZmVhdHVyZXMvYXV0aC9jb21wb25lbnRzL2xvZ2luLWZvcm0uY29tcG9uZW50LnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFDRSxtQkFBQTtBQUNGOztBQUVBO0VBQ0UsbUJBQUE7RUFDQSxpQkFBQTtBQUNGOztBQUVBO0VBQ0UsU0FBQTtFQUNBLGNBQUE7QUFDRjs7QUFFQTtFQUNFLGFBQUE7RUFDQSxTQUFBO0FBQ0Y7O0FBRUE7RUFDRSxnQkFBQTtBQUNGOztBQUVBO0VBQ0Usc0JBQUE7RUFDQSxtQkFBQTtFQUNBLGtCQUFBO0FBQ0Y7O0FBRUE7RUFDRSxtQkFBQTtFQUNBLGNBQUE7QUFDRiIsInNvdXJjZXNDb250ZW50IjpbIi5mb3JtLWNvcHkge1xuICBtYXJnaW4tYm90dG9tOiAxcmVtO1xufVxuXG4uZm9ybS1jb3B5IGgyIHtcbiAgbWFyZ2luOiAwIDAgMC4yNXJlbTtcbiAgZm9udC1zaXplOiAxLjhyZW07XG59XG5cbi5mb3JtLWNvcHkgcCB7XG4gIG1hcmdpbjogMDtcbiAgY29sb3I6ICM1YzczODM7XG59XG5cbi5hdXRoLWZvcm0ge1xuICBkaXNwbGF5OiBncmlkO1xuICBnYXA6IDFyZW07XG59XG5cbi5hdXRoLWZvcm0gYnV0dG9uW3R5cGU9J3N1Ym1pdCddIHtcbiAgbWluLWhlaWdodDogNDhweDtcbn1cblxuLnN0YXR1cyB7XG4gIHBhZGRpbmc6IDAuOHJlbSAwLjlyZW07XG4gIGJvcmRlci1yYWRpdXM6IDE0cHg7XG4gIGZvbnQtc2l6ZTogMC45NXJlbTtcbn1cblxuLnN0YXR1cy5lcnJvciB7XG4gIGJhY2tncm91bmQ6ICNmZmYyZjE7XG4gIGNvbG9yOiAjYWYyZDFkO1xufVxuIl0sInNvdXJjZVJvb3QiOiIifQ== */"]
    });
  }
}

/***/ }),

/***/ 9853:
/*!*********************************************************************!*\
  !*** ./src/app/features/auth/components/register-form.component.ts ***!
  \*********************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "RegisterFormComponent": () => (/* binding */ RegisterFormComponent)
/* harmony export */ });
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/forms */ 2508);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ 2560);
/* harmony import */ var _services_auth_service__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../../services/auth.service */ 7556);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ 124);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/common */ 4666);
/* harmony import */ var _angular_material_button__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/material/button */ 4522);
/* harmony import */ var _angular_material_form_field__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/material/form-field */ 5074);
/* harmony import */ var _angular_material_icon__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/material/icon */ 7822);
/* harmony import */ var _angular_material_input__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @angular/material/input */ 8562);










function RegisterFormComponent_mat_error_10_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "mat-error");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](1, "Email is required.");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
  }
}
function RegisterFormComponent_mat_error_11_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "mat-error");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](1, "Use a valid Gmail address.");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
  }
}
function RegisterFormComponent_mat_error_19_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "mat-error");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](1, "Password is required.");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
  }
}
function RegisterFormComponent_mat_error_20_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "mat-error");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](1, "Use at least 6 characters.");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
  }
}
function RegisterFormComponent_mat_error_26_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "mat-error");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](1, "OTP is required.");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
  }
}
function RegisterFormComponent_div_29_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "div", 13);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
  }
  if (rf & 2) {
    const ctx_r5 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate"](ctx_r5.otpMessage);
  }
}
function RegisterFormComponent_div_30_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "div", 14);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
  }
  if (rf & 2) {
    const ctx_r6 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate"](ctx_r6.errorMessage);
  }
}
class RegisterFormComponent {
  constructor(fb, authService, router) {
    this.fb = fb;
    this.authService = authService;
    this.router = router;
    this.showPassword = false;
    this.sendingOtp = false;
    this.registering = false;
    this.otpMessage = '';
    this.errorMessage = '';
    this.form = this.fb.group({
      email: ['', [_angular_forms__WEBPACK_IMPORTED_MODULE_2__.Validators.required, _angular_forms__WEBPACK_IMPORTED_MODULE_2__.Validators.pattern('^[a-zA-Z0-9._%+-]+@gmail\\.com$')]],
      password: ['', [_angular_forms__WEBPACK_IMPORTED_MODULE_2__.Validators.required, _angular_forms__WEBPACK_IMPORTED_MODULE_2__.Validators.minLength(6)]],
      otp: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_2__.Validators.required]
    });
  }
  sendOtp() {
    const emailControl = this.form.get('email');
    if (!emailControl?.valid || this.sendingOtp) {
      emailControl?.markAsTouched();
      this.otpMessage = 'Enter a valid Gmail address first.';
      return;
    }
    this.sendingOtp = true;
    this.otpMessage = '';
    this.authService.sendOtp(emailControl.value).subscribe({
      next: () => {
        this.otpMessage = 'OTP sent to your Gmail inbox.';
      },
      error: err => {
        this.otpMessage = err.error?.message || 'Failed to send OTP.';
      },
      complete: () => {
        this.sendingOtp = false;
      }
    });
  }
  submit() {
    if (this.form.invalid || this.registering) {
      this.form.markAllAsTouched();
      return;
    }
    this.registering = true;
    this.errorMessage = '';
    const {
      email,
      otp,
      password
    } = this.form.value;
    this.authService.verifyOtp(email, otp, password).subscribe({
      next: () => {
        this.router.navigate(['/auth/login']);
      },
      error: err => {
        this.errorMessage = err.error?.message || 'Registration failed.';
        this.registering = false;
      },
      complete: () => {
        this.registering = false;
      }
    });
  }
  static {
    this.ɵfac = function RegisterFormComponent_Factory(t) {
      return new (t || RegisterFormComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](_angular_forms__WEBPACK_IMPORTED_MODULE_2__.FormBuilder), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](_services_auth_service__WEBPACK_IMPORTED_MODULE_0__.AuthService), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_3__.Router));
    };
  }
  static {
    this.ɵcmp = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineComponent"]({
      type: RegisterFormComponent,
      selectors: [["app-register-form"]],
      decls: 33,
      vars: 14,
      consts: [[1, "form-copy"], [1, "auth-form", 3, "formGroup", "ngSubmit"], ["appearance", "outline"], ["matInput", "", "type", "email", "formControlName", "email"], [4, "ngIf"], ["matInput", "", "formControlName", "password", 3, "type"], ["mat-icon-button", "", "matSuffix", "", "type", "button", 3, "click"], [1, "otp-row"], ["matInput", "", "type", "text", "formControlName", "otp"], ["mat-stroked-button", "", "color", "primary", "type", "button", 3, "disabled", "click"], ["class", "status info", 4, "ngIf"], ["class", "status error", 4, "ngIf"], ["mat-raised-button", "", "color", "primary", "type", "submit", 3, "disabled"], [1, "status", "info"], [1, "status", "error"]],
      template: function RegisterFormComponent_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "div", 0)(1, "h2");
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](2, "Create account");
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](3, "p");
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](4, "Start with secure OTP onboarding, then let AI organize and coach your expense tracking.");
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()();
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](5, "form", 1);
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("ngSubmit", function RegisterFormComponent_Template_form_ngSubmit_5_listener() {
            return ctx.submit();
          });
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](6, "mat-form-field", 2)(7, "mat-label");
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](8, "Gmail address");
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](9, "input", 3);
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](10, RegisterFormComponent_mat_error_10_Template, 2, 0, "mat-error", 4);
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](11, RegisterFormComponent_mat_error_11_Template, 2, 0, "mat-error", 4);
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](12, "mat-form-field", 2)(13, "mat-label");
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](14, "Password");
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](15, "input", 5);
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](16, "button", 6);
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("click", function RegisterFormComponent_Template_button_click_16_listener() {
            return ctx.showPassword = !ctx.showPassword;
          });
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](17, "mat-icon");
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](18);
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()();
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](19, RegisterFormComponent_mat_error_19_Template, 2, 0, "mat-error", 4);
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](20, RegisterFormComponent_mat_error_20_Template, 2, 0, "mat-error", 4);
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](21, "div", 7)(22, "mat-form-field", 2)(23, "mat-label");
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](24, "OTP");
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](25, "input", 8);
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](26, RegisterFormComponent_mat_error_26_Template, 2, 0, "mat-error", 4);
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](27, "button", 9);
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("click", function RegisterFormComponent_Template_button_click_27_listener() {
            return ctx.sendOtp();
          });
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](28);
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()();
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](29, RegisterFormComponent_div_29_Template, 2, 1, "div", 10);
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](30, RegisterFormComponent_div_30_Template, 2, 1, "div", 11);
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](31, "button", 12);
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](32);
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()();
        }
        if (rf & 2) {
          let tmp_1_0;
          let tmp_2_0;
          let tmp_5_0;
          let tmp_6_0;
          let tmp_7_0;
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](5);
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("formGroup", ctx.form);
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](5);
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", (tmp_1_0 = ctx.form.get("email")) == null ? null : tmp_1_0.hasError("required"));
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", (tmp_2_0 = ctx.form.get("email")) == null ? null : tmp_2_0.hasError("pattern"));
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](4);
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("type", ctx.showPassword ? "text" : "password");
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](3);
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate"](ctx.showPassword ? "visibility_off" : "visibility");
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", (tmp_5_0 = ctx.form.get("password")) == null ? null : tmp_5_0.hasError("required"));
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", (tmp_6_0 = ctx.form.get("password")) == null ? null : tmp_6_0.hasError("minlength"));
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](6);
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", (tmp_7_0 = ctx.form.get("otp")) == null ? null : tmp_7_0.hasError("required"));
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("disabled", ctx.sendingOtp);
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate1"](" ", ctx.sendingOtp ? "Sending..." : "Send OTP", " ");
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", ctx.otpMessage);
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", ctx.errorMessage);
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("disabled", ctx.registering);
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate1"](" ", ctx.registering ? "Creating account..." : "Register and continue", " ");
        }
      },
      dependencies: [_angular_common__WEBPACK_IMPORTED_MODULE_4__.NgIf, _angular_forms__WEBPACK_IMPORTED_MODULE_2__["ɵNgNoValidate"], _angular_forms__WEBPACK_IMPORTED_MODULE_2__.DefaultValueAccessor, _angular_forms__WEBPACK_IMPORTED_MODULE_2__.NgControlStatus, _angular_forms__WEBPACK_IMPORTED_MODULE_2__.NgControlStatusGroup, _angular_forms__WEBPACK_IMPORTED_MODULE_2__.FormGroupDirective, _angular_forms__WEBPACK_IMPORTED_MODULE_2__.FormControlName, _angular_material_button__WEBPACK_IMPORTED_MODULE_5__.MatButton, _angular_material_button__WEBPACK_IMPORTED_MODULE_5__.MatIconButton, _angular_material_form_field__WEBPACK_IMPORTED_MODULE_6__.MatFormField, _angular_material_form_field__WEBPACK_IMPORTED_MODULE_6__.MatLabel, _angular_material_form_field__WEBPACK_IMPORTED_MODULE_6__.MatError, _angular_material_form_field__WEBPACK_IMPORTED_MODULE_6__.MatSuffix, _angular_material_icon__WEBPACK_IMPORTED_MODULE_7__.MatIcon, _angular_material_input__WEBPACK_IMPORTED_MODULE_8__.MatInput],
      styles: [".form-copy[_ngcontent-%COMP%] {\n  margin-bottom: 1rem;\n}\n\n.form-copy[_ngcontent-%COMP%]   h2[_ngcontent-%COMP%] {\n  margin: 0 0 0.25rem;\n  font-size: 1.8rem;\n}\n\n.form-copy[_ngcontent-%COMP%]   p[_ngcontent-%COMP%] {\n  margin: 0;\n  color: #5c7383;\n}\n\n.auth-form[_ngcontent-%COMP%] {\n  display: grid;\n  gap: 1rem;\n}\n\n.otp-row[_ngcontent-%COMP%] {\n  display: grid;\n  grid-template-columns: minmax(0, 1fr) auto;\n  gap: 0.75rem;\n  align-items: start;\n}\n\n.otp-row[_ngcontent-%COMP%]   button[_ngcontent-%COMP%] {\n  min-height: 56px;\n}\n\n.status[_ngcontent-%COMP%] {\n  padding: 0.8rem 0.9rem;\n  border-radius: 14px;\n  font-size: 0.95rem;\n}\n\n.status.info[_ngcontent-%COMP%] {\n  background: #eefaf6;\n  color: #0f6c5b;\n}\n\n.status.error[_ngcontent-%COMP%] {\n  background: #fff2f1;\n  color: #af2d1d;\n}\n\n.auth-form[_ngcontent-%COMP%]   button[type=submit][_ngcontent-%COMP%] {\n  min-height: 48px;\n}\n\n@media (max-width: 640px) {\n  .otp-row[_ngcontent-%COMP%] {\n    grid-template-columns: 1fr;\n  }\n}\n/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8uL3NyYy9hcHAvZmVhdHVyZXMvYXV0aC9jb21wb25lbnRzL3JlZ2lzdGVyLWZvcm0uY29tcG9uZW50LnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFDRSxtQkFBQTtBQUNGOztBQUVBO0VBQ0UsbUJBQUE7RUFDQSxpQkFBQTtBQUNGOztBQUVBO0VBQ0UsU0FBQTtFQUNBLGNBQUE7QUFDRjs7QUFFQTtFQUNFLGFBQUE7RUFDQSxTQUFBO0FBQ0Y7O0FBRUE7RUFDRSxhQUFBO0VBQ0EsMENBQUE7RUFDQSxZQUFBO0VBQ0Esa0JBQUE7QUFDRjs7QUFFQTtFQUNFLGdCQUFBO0FBQ0Y7O0FBRUE7RUFDRSxzQkFBQTtFQUNBLG1CQUFBO0VBQ0Esa0JBQUE7QUFDRjs7QUFFQTtFQUNFLG1CQUFBO0VBQ0EsY0FBQTtBQUNGOztBQUVBO0VBQ0UsbUJBQUE7RUFDQSxjQUFBO0FBQ0Y7O0FBRUE7RUFDRSxnQkFBQTtBQUNGOztBQUVBO0VBQ0U7SUFDRSwwQkFBQTtFQUNGO0FBQ0YiLCJzb3VyY2VzQ29udGVudCI6WyIuZm9ybS1jb3B5IHtcbiAgbWFyZ2luLWJvdHRvbTogMXJlbTtcbn1cblxuLmZvcm0tY29weSBoMiB7XG4gIG1hcmdpbjogMCAwIDAuMjVyZW07XG4gIGZvbnQtc2l6ZTogMS44cmVtO1xufVxuXG4uZm9ybS1jb3B5IHAge1xuICBtYXJnaW46IDA7XG4gIGNvbG9yOiAjNWM3MzgzO1xufVxuXG4uYXV0aC1mb3JtIHtcbiAgZGlzcGxheTogZ3JpZDtcbiAgZ2FwOiAxcmVtO1xufVxuXG4ub3RwLXJvdyB7XG4gIGRpc3BsYXk6IGdyaWQ7XG4gIGdyaWQtdGVtcGxhdGUtY29sdW1uczogbWlubWF4KDAsIDFmcikgYXV0bztcbiAgZ2FwOiAwLjc1cmVtO1xuICBhbGlnbi1pdGVtczogc3RhcnQ7XG59XG5cbi5vdHAtcm93IGJ1dHRvbiB7XG4gIG1pbi1oZWlnaHQ6IDU2cHg7XG59XG5cbi5zdGF0dXMge1xuICBwYWRkaW5nOiAwLjhyZW0gMC45cmVtO1xuICBib3JkZXItcmFkaXVzOiAxNHB4O1xuICBmb250LXNpemU6IDAuOTVyZW07XG59XG5cbi5zdGF0dXMuaW5mbyB7XG4gIGJhY2tncm91bmQ6ICNlZWZhZjY7XG4gIGNvbG9yOiAjMGY2YzViO1xufVxuXG4uc3RhdHVzLmVycm9yIHtcbiAgYmFja2dyb3VuZDogI2ZmZjJmMTtcbiAgY29sb3I6ICNhZjJkMWQ7XG59XG5cbi5hdXRoLWZvcm0gYnV0dG9uW3R5cGU9J3N1Ym1pdCddIHtcbiAgbWluLWhlaWdodDogNDhweDtcbn1cblxuQG1lZGlhIChtYXgtd2lkdGg6IDY0MHB4KSB7XG4gIC5vdHAtcm93IHtcbiAgICBncmlkLXRlbXBsYXRlLWNvbHVtbnM6IDFmcjtcbiAgfVxufVxuIl0sInNvdXJjZVJvb3QiOiIifQ== */"]
    });
  }
}

/***/ })

}]);
//# sourceMappingURL=src_app_features_auth_auth_module_ts.js.map