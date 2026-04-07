"use strict";
(self["webpackChunkmy_app"] = self["webpackChunkmy_app"] || []).push([["src_app_features_profile_profile_module_ts"],{

/***/ 2982:
/*!************************************************************!*\
  !*** ./src/app/features/profile/profile-routing.module.ts ***!
  \************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "ProfileRoutingModule": () => (/* binding */ ProfileRoutingModule)
/* harmony export */ });
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ 124);
/* harmony import */ var _pages_profile_component__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../pages/profile.component */ 1603);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ 2560);




const routes = [{
  path: '',
  component: _pages_profile_component__WEBPACK_IMPORTED_MODULE_0__.ProfileComponent
}];
class ProfileRoutingModule {
  static {
    this.ɵfac = function ProfileRoutingModule_Factory(t) {
      return new (t || ProfileRoutingModule)();
    };
  }
  static {
    this.ɵmod = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineNgModule"]({
      type: ProfileRoutingModule
    });
  }
  static {
    this.ɵinj = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineInjector"]({
      imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__.RouterModule.forChild(routes), _angular_router__WEBPACK_IMPORTED_MODULE_2__.RouterModule]
    });
  }
}
(function () {
  (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵsetNgModuleScope"](ProfileRoutingModule, {
    imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__.RouterModule],
    exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__.RouterModule]
  });
})();

/***/ }),

/***/ 649:
/*!****************************************************!*\
  !*** ./src/app/features/profile/profile.module.ts ***!
  \****************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "ProfileModule": () => (/* binding */ ProfileModule)
/* harmony export */ });
/* harmony import */ var _pages_profile_component__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../pages/profile.component */ 1603);
/* harmony import */ var _shared_shared_module__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../shared/shared.module */ 4466);
/* harmony import */ var _profile_routing_module__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./profile-routing.module */ 2982);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ 2560);




class ProfileModule {
  static {
    this.ɵfac = function ProfileModule_Factory(t) {
      return new (t || ProfileModule)();
    };
  }
  static {
    this.ɵmod = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵdefineNgModule"]({
      type: ProfileModule
    });
  }
  static {
    this.ɵinj = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵdefineInjector"]({
      imports: [_shared_shared_module__WEBPACK_IMPORTED_MODULE_1__.SharedModule, _profile_routing_module__WEBPACK_IMPORTED_MODULE_2__.ProfileRoutingModule]
    });
  }
}
(function () {
  (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵsetNgModuleScope"](ProfileModule, {
    declarations: [_pages_profile_component__WEBPACK_IMPORTED_MODULE_0__.ProfileComponent],
    imports: [_shared_shared_module__WEBPACK_IMPORTED_MODULE_1__.SharedModule, _profile_routing_module__WEBPACK_IMPORTED_MODULE_2__.ProfileRoutingModule]
  });
})();

/***/ }),

/***/ 1603:
/*!********************************************!*\
  !*** ./src/app/pages/profile.component.ts ***!
  \********************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "ProfileComponent": () => (/* binding */ ProfileComponent)
/* harmony export */ });
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ 2508);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ 2560);
/* harmony import */ var _services_profile_service__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../services/profile.service */ 9181);
/* harmony import */ var _services_notification_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../services/notification.service */ 2013);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/common */ 4666);
/* harmony import */ var _angular_material_button__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/material/button */ 4522);
/* harmony import */ var _angular_material_form_field__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/material/form-field */ 5074);
/* harmony import */ var _angular_material_icon__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/material/icon */ 7822);
/* harmony import */ var _angular_material_input__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @angular/material/input */ 8562);










function ProfileComponent_div_2_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](0, "div");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](1, "Loading...");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
  }
}
function ProfileComponent_div_3_img_3_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](0, "img", 17);
  }
  if (rf & 2) {
    const ctx_r2 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("src", ctx_r2.profile.avatarUrl, _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵsanitizeUrl"]);
  }
}
function ProfileComponent_div_3_div_4_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](0, "div", 18);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](1, "No Avatar");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
  }
}
function ProfileComponent_div_3_div_6_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](0, "div");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](1, "Uploading...");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
  }
}
function ProfileComponent_div_3_mat_error_21_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](0, "mat-error");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](1, "Email is required");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
  }
}
function ProfileComponent_div_3_mat_error_22_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](0, "mat-error");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](1, "Invalid email");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
  }
}
function ProfileComponent_div_3_mat_error_34_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](0, "mat-error");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](1, "Required");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
  }
}
function ProfileComponent_div_3_mat_error_42_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](0, "mat-error");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](1, "Required");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
  }
}
function ProfileComponent_div_3_mat_error_43_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](0, "mat-error");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](1, "Min 6 chars");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
  }
}
function ProfileComponent_div_3_Template(rf, ctx) {
  if (rf & 1) {
    const _r11 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](0, "div")(1, "div", 1)(2, "div", 2);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtemplate"](3, ProfileComponent_div_3_img_3_Template, 1, 1, "img", 3);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtemplate"](4, ProfileComponent_div_3_div_4_Template, 2, 0, "div", 4);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](5, "input", 5);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵlistener"]("change", function ProfileComponent_div_3_Template_input_change_5_listener($event) {
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵrestoreView"](_r11);
      const ctx_r10 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵnextContext"]();
      return _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵresetView"](ctx_r10.onAvatarSelected($event));
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtemplate"](6, ProfileComponent_div_3_div_6_Template, 2, 0, "div", 0);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](7, "div", 6)(8, "div")(9, "strong");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](10, "Email:");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](11);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](12, "div")(13, "strong");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](14, "Role:");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](15);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]()()();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](16, "form", 7);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵlistener"]("ngSubmit", function ProfileComponent_div_3_Template_form_ngSubmit_16_listener() {
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵrestoreView"](_r11);
      const ctx_r12 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵnextContext"]();
      return _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵresetView"](ctx_r12.saveProfile());
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](17, "mat-form-field", 8)(18, "mat-label");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](19, "Email");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](20, "input", 9);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtemplate"](21, ProfileComponent_div_3_mat_error_21_Template, 2, 0, "mat-error", 0);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtemplate"](22, ProfileComponent_div_3_mat_error_22_Template, 2, 0, "mat-error", 0);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](23, "div", 10)(24, "button", 11);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](25, "Save");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]()()();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](26, "form", 12);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵlistener"]("ngSubmit", function ProfileComponent_div_3_Template_form_ngSubmit_26_listener() {
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵrestoreView"](_r11);
      const ctx_r13 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵnextContext"]();
      return _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵresetView"](ctx_r13.changePassword());
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](27, "mat-form-field", 8)(28, "mat-label");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](29, "Old Password");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](30, "input", 13);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](31, "button", 14);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵlistener"]("click", function ProfileComponent_div_3_Template_button_click_31_listener() {
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵrestoreView"](_r11);
      const ctx_r14 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵnextContext"]();
      return _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵresetView"](ctx_r14.showOldPassword = !ctx_r14.showOldPassword);
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](32, "mat-icon");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](33);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtemplate"](34, ProfileComponent_div_3_mat_error_34_Template, 2, 0, "mat-error", 0);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](35, "mat-form-field", 8)(36, "mat-label");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](37, "New Password");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](38, "input", 15);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](39, "button", 14);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵlistener"]("click", function ProfileComponent_div_3_Template_button_click_39_listener() {
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵrestoreView"](_r11);
      const ctx_r15 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵnextContext"]();
      return _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵresetView"](ctx_r15.showNewPassword = !ctx_r15.showNewPassword);
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](40, "mat-icon");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](41);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtemplate"](42, ProfileComponent_div_3_mat_error_42_Template, 2, 0, "mat-error", 0);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtemplate"](43, ProfileComponent_div_3_mat_error_43_Template, 2, 0, "mat-error", 0);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](44, "div", 10)(45, "button", 16);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](46, "Change Password");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]()()()();
  }
  if (rf & 2) {
    const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵnextContext"]();
    let tmp_7_0;
    let tmp_8_0;
    let tmp_13_0;
    let tmp_16_0;
    let tmp_17_0;
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngIf", ctx_r1.profile.avatarUrl);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngIf", !ctx_r1.profile.avatarUrl);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("disabled", ctx_r1.avatarUploading);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngIf", ctx_r1.avatarUploading);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](5);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtextInterpolate1"](" ", ctx_r1.profile.email, "");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtextInterpolate1"](" ", ctx_r1.profile.role, "");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("formGroup", ctx_r1.editForm);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](5);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngIf", (tmp_7_0 = ctx_r1.editForm.get("email")) == null ? null : tmp_7_0.hasError("required"));
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngIf", (tmp_8_0 = ctx_r1.editForm.get("email")) == null ? null : tmp_8_0.hasError("email"));
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("disabled", ctx_r1.editForm.invalid);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("formGroup", ctx_r1.passwordForm);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("type", ctx_r1.showOldPassword ? "text" : "password");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtextInterpolate"](ctx_r1.showOldPassword ? "visibility_off" : "visibility");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngIf", (tmp_13_0 = ctx_r1.passwordForm.get("oldPassword")) == null ? null : tmp_13_0.hasError("required"));
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("type", ctx_r1.showNewPassword ? "text" : "password");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtextInterpolate"](ctx_r1.showNewPassword ? "visibility_off" : "visibility");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngIf", (tmp_16_0 = ctx_r1.passwordForm.get("newPassword")) == null ? null : tmp_16_0.hasError("required"));
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngIf", (tmp_17_0 = ctx_r1.passwordForm.get("newPassword")) == null ? null : tmp_17_0.hasError("minlength"));
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("disabled", ctx_r1.passwordForm.invalid);
  }
}
class ProfileComponent {
  constructor(profileService, notification, fb) {
    this.profileService = profileService;
    this.notification = notification;
    this.fb = fb;
    this.showOldPassword = false;
    this.showNewPassword = false;
    this.profile = null;
    this.loading = false;
    this.avatarUploading = false;
    this.editForm = this.fb.group({
      email: ['', [_angular_forms__WEBPACK_IMPORTED_MODULE_3__.Validators.required, _angular_forms__WEBPACK_IMPORTED_MODULE_3__.Validators.email]]
    });
    this.passwordForm = this.fb.group({
      oldPassword: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_3__.Validators.required],
      newPassword: ['', [_angular_forms__WEBPACK_IMPORTED_MODULE_3__.Validators.required, _angular_forms__WEBPACK_IMPORTED_MODULE_3__.Validators.minLength(6)]]
    });
  }
  ngOnInit() {
    this.loadProfile();
  }
  loadProfile() {
    this.loading = true;
    this.profileService.getProfile().subscribe({
      next: profile => {
        this.profile = profile;
        this.editForm.patchValue({
          email: profile.email
        });
        this.loading = false;
      },
      error: () => {
        this.notification.error('Failed to load profile');
        this.loading = false;
      }
    });
  }
  saveProfile() {
    if (this.editForm.invalid) return;
    const email = this.editForm.value.email;
    this.profileService.updateProfile(email).subscribe({
      next: profile => {
        this.notification.success('Profile updated');
        this.profile = profile;
      },
      error: () => this.notification.error('Failed to update profile')
    });
  }
  changePassword() {
    if (this.passwordForm.invalid) return;
    const {
      oldPassword,
      newPassword
    } = this.passwordForm.value;
    this.profileService.changePassword(oldPassword, newPassword).subscribe({
      next: () => {
        this.notification.success('Password changed');
        this.passwordForm.reset();
      },
      error: () => this.notification.error('Failed to change password')
    });
  }
  onAvatarSelected(event) {
    const input = event.target;
    if (!input.files || input.files.length === 0) return;
    const file = input.files[0];
    this.avatarUploading = true;
    this.profileService.uploadAvatar(file).subscribe({
      next: res => {
        this.notification.success('Avatar updated');
        if (this.profile) this.profile.avatarUrl = res.avatarUrl;
        this.avatarUploading = false;
      },
      error: () => {
        this.notification.error('Failed to upload avatar');
        this.avatarUploading = false;
      }
    });
  }
  static {
    this.ɵfac = function ProfileComponent_Factory(t) {
      return new (t || ProfileComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdirectiveInject"](_services_profile_service__WEBPACK_IMPORTED_MODULE_0__.ProfileService), _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdirectiveInject"](_services_notification_service__WEBPACK_IMPORTED_MODULE_1__.NotificationService), _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdirectiveInject"](_angular_forms__WEBPACK_IMPORTED_MODULE_3__.FormBuilder));
    };
  }
  static {
    this.ɵcmp = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdefineComponent"]({
      type: ProfileComponent,
      selectors: [["app-profile"]],
      decls: 4,
      vars: 2,
      consts: [[4, "ngIf"], [1, "profile-header"], [1, "avatar-section"], ["alt", "Avatar", "class", "avatar-img", 3, "src", 4, "ngIf"], ["class", "avatar-placeholder", 4, "ngIf"], ["type", "file", "accept", "image/*", 3, "disabled", "change"], [1, "profile-info"], [1, "profile-form", 3, "formGroup", "ngSubmit"], ["appearance", "fill"], ["matInput", "", "formControlName", "email"], [1, "profile-form-actions"], ["mat-raised-button", "", "color", "primary", "type", "submit", 3, "disabled"], [1, "password-form", 3, "formGroup", "ngSubmit"], ["matInput", "", "formControlName", "oldPassword", 3, "type"], ["mat-icon-button", "", "matSuffix", "", "type", "button", 3, "click"], ["matInput", "", "formControlName", "newPassword", 3, "type"], ["mat-raised-button", "", "color", "accent", "type", "submit", 3, "disabled"], ["alt", "Avatar", 1, "avatar-img", 3, "src"], [1, "avatar-placeholder"]],
      template: function ProfileComponent_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](0, "h2");
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](1, "Profile & Settings");
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtemplate"](2, ProfileComponent_div_2_Template, 2, 0, "div", 0);
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtemplate"](3, ProfileComponent_div_3_Template, 47, 19, "div", 0);
        }
        if (rf & 2) {
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](2);
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngIf", ctx.loading);
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](1);
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngIf", !ctx.loading && ctx.profile);
        }
      },
      dependencies: [_angular_common__WEBPACK_IMPORTED_MODULE_4__.NgIf, _angular_forms__WEBPACK_IMPORTED_MODULE_3__["ɵNgNoValidate"], _angular_forms__WEBPACK_IMPORTED_MODULE_3__.DefaultValueAccessor, _angular_forms__WEBPACK_IMPORTED_MODULE_3__.NgControlStatus, _angular_forms__WEBPACK_IMPORTED_MODULE_3__.NgControlStatusGroup, _angular_forms__WEBPACK_IMPORTED_MODULE_3__.FormGroupDirective, _angular_forms__WEBPACK_IMPORTED_MODULE_3__.FormControlName, _angular_material_button__WEBPACK_IMPORTED_MODULE_5__.MatButton, _angular_material_button__WEBPACK_IMPORTED_MODULE_5__.MatIconButton, _angular_material_form_field__WEBPACK_IMPORTED_MODULE_6__.MatFormField, _angular_material_form_field__WEBPACK_IMPORTED_MODULE_6__.MatLabel, _angular_material_form_field__WEBPACK_IMPORTED_MODULE_6__.MatError, _angular_material_form_field__WEBPACK_IMPORTED_MODULE_6__.MatSuffix, _angular_material_icon__WEBPACK_IMPORTED_MODULE_7__.MatIcon, _angular_material_input__WEBPACK_IMPORTED_MODULE_8__.MatInput],
      styles: [".profile-form-actions[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: flex-end;\n  margin-top: 0.5rem;\n}\n\n.profile-header[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: flex-start;\n  gap: 2.5rem;\n  margin-bottom: 2.5rem;\n  flex-wrap: wrap;\n}\n\n.avatar-section[_ngcontent-%COMP%] {\n  display: flex;\n  flex-direction: column;\n  align-items: center;\n  gap: 0.75rem;\n  min-width: 120px;\n}\n\n.avatar-img[_ngcontent-%COMP%], .avatar-placeholder[_ngcontent-%COMP%] {\n  width: 110px;\n  height: 110px;\n  border-radius: 50%;\n  object-fit: cover;\n  border: 2px solid #3f51b5;\n  background: #fafafa;\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  font-size: 1.2rem;\n}\n\n.avatar-placeholder[_ngcontent-%COMP%] {\n  border: 2px dashed #bbb;\n  color: #888;\n}\n\n.profile-info[_ngcontent-%COMP%] {\n  font-size: 1.1rem;\n  display: flex;\n  flex-direction: column;\n  gap: 0.5rem;\n  justify-content: center;\n  min-width: 220px;\n}\n\n.profile-form[_ngcontent-%COMP%], .password-form[_ngcontent-%COMP%] {\n  display: flex;\n  flex-wrap: wrap;\n  gap: 1.5rem;\n  align-items: flex-end;\n  margin-bottom: 2rem;\n  max-width: 500px;\n}\n\n.profile-form[_ngcontent-%COMP%] {\n  margin-bottom: 2.5rem;\n}\n\n@media (max-width: 700px) {\n  .profile-header[_ngcontent-%COMP%] {\n    flex-direction: column;\n    align-items: stretch;\n    gap: 1.5rem;\n  }\n  .profile-form[_ngcontent-%COMP%], .password-form[_ngcontent-%COMP%] {\n    flex-direction: column;\n    align-items: stretch;\n    max-width: 100%;\n  }\n  .profile-info[_ngcontent-%COMP%] {\n    min-width: unset;\n  }\n}\n.avatar-section[_ngcontent-%COMP%] {\n  display: flex;\n  flex-direction: column;\n  align-items: center;\n  gap: 0.5rem;\n}\n\n.avatar-img[_ngcontent-%COMP%] {\n  width: 96px;\n  height: 96px;\n  border-radius: 50%;\n  object-fit: cover;\n  border: 2px solid #3f51b5;\n}\n\n.avatar-placeholder[_ngcontent-%COMP%] {\n  width: 96px;\n  height: 96px;\n  border-radius: 50%;\n  background: #eee;\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  color: #888;\n  font-size: 1.2rem;\n  border: 2px dashed #bbb;\n}\n\n.profile-info[_ngcontent-%COMP%] {\n  font-size: 1.1rem;\n}\n\n.profile-form[_ngcontent-%COMP%], .password-form[_ngcontent-%COMP%] {\n  display: flex;\n  gap: 1rem;\n  align-items: flex-end;\n  margin-bottom: 1.5rem;\n}\n/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8uL3NyYy9hcHAvcGFnZXMvcHJvZmlsZS5jb21wb25lbnQuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFDQTtFQUNDLGFBQUE7RUFDQSxxQkFBQTtFQUNBLGtCQUFBO0FBQUQ7O0FBR0E7RUFDQyxhQUFBO0VBQ0EsdUJBQUE7RUFDQSxXQUFBO0VBQ0EscUJBQUE7RUFDQSxlQUFBO0FBQUQ7O0FBR0E7RUFDQyxhQUFBO0VBQ0Esc0JBQUE7RUFDQSxtQkFBQTtFQUNBLFlBQUE7RUFDQSxnQkFBQTtBQUFEOztBQUdBO0VBQ0MsWUFBQTtFQUNBLGFBQUE7RUFDQSxrQkFBQTtFQUNBLGlCQUFBO0VBQ0EseUJBQUE7RUFDQSxtQkFBQTtFQUNBLGFBQUE7RUFDQSxtQkFBQTtFQUNBLHVCQUFBO0VBQ0EsaUJBQUE7QUFBRDs7QUFHQTtFQUNDLHVCQUFBO0VBQ0EsV0FBQTtBQUFEOztBQUdBO0VBQ0MsaUJBQUE7RUFDQSxhQUFBO0VBQ0Esc0JBQUE7RUFDQSxXQUFBO0VBQ0EsdUJBQUE7RUFDQSxnQkFBQTtBQUFEOztBQUdBO0VBQ0MsYUFBQTtFQUNBLGVBQUE7RUFDQSxXQUFBO0VBQ0EscUJBQUE7RUFDQSxtQkFBQTtFQUNBLGdCQUFBO0FBQUQ7O0FBR0E7RUFDQyxxQkFBQTtBQUFEOztBQUdBO0VBQ0M7SUFDQyxzQkFBQTtJQUNBLG9CQUFBO0lBQ0EsV0FBQTtFQUFBO0VBRUQ7SUFDQyxzQkFBQTtJQUNBLG9CQUFBO0lBQ0EsZUFBQTtFQUFBO0VBRUQ7SUFDQyxnQkFBQTtFQUFBO0FBQ0Y7QUFHQTtFQUNDLGFBQUE7RUFDQSxzQkFBQTtFQUNBLG1CQUFBO0VBQ0EsV0FBQTtBQUREOztBQUlBO0VBQ0MsV0FBQTtFQUNBLFlBQUE7RUFDQSxrQkFBQTtFQUNBLGlCQUFBO0VBQ0EseUJBQUE7QUFERDs7QUFJQTtFQUNDLFdBQUE7RUFDQSxZQUFBO0VBQ0Esa0JBQUE7RUFDQSxnQkFBQTtFQUNBLGFBQUE7RUFDQSxtQkFBQTtFQUNBLHVCQUFBO0VBQ0EsV0FBQTtFQUNBLGlCQUFBO0VBQ0EsdUJBQUE7QUFERDs7QUFJQTtFQUNDLGlCQUFBO0FBREQ7O0FBSUE7RUFDQyxhQUFBO0VBQ0EsU0FBQTtFQUNBLHFCQUFBO0VBQ0EscUJBQUE7QUFERCIsInNvdXJjZXNDb250ZW50IjpbIi8vIEFsaWduIFNhdmUvQ2hhbmdlIFBhc3N3b3JkIGJ1dHRvbnMgdG8gdGhlIGxlZnQgd2l0aCBzcGFjaW5nXHJcbi5wcm9maWxlLWZvcm0tYWN0aW9ucyB7XHJcblx0ZGlzcGxheTogZmxleDtcclxuXHRhbGlnbi1pdGVtczogZmxleC1lbmQ7XHJcblx0bWFyZ2luLXRvcDogMC41cmVtO1xyXG59XHJcblxyXG4ucHJvZmlsZS1oZWFkZXIge1xyXG5cdGRpc3BsYXk6IGZsZXg7XHJcblx0YWxpZ24taXRlbXM6IGZsZXgtc3RhcnQ7XHJcblx0Z2FwOiAyLjVyZW07XHJcblx0bWFyZ2luLWJvdHRvbTogMi41cmVtO1xyXG5cdGZsZXgtd3JhcDogd3JhcDtcclxufVxyXG5cclxuLmF2YXRhci1zZWN0aW9uIHtcclxuXHRkaXNwbGF5OiBmbGV4O1xyXG5cdGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XHJcblx0YWxpZ24taXRlbXM6IGNlbnRlcjtcclxuXHRnYXA6IDAuNzVyZW07XHJcblx0bWluLXdpZHRoOiAxMjBweDtcclxufVxyXG5cclxuLmF2YXRhci1pbWcsIC5hdmF0YXItcGxhY2Vob2xkZXIge1xyXG5cdHdpZHRoOiAxMTBweDtcclxuXHRoZWlnaHQ6IDExMHB4O1xyXG5cdGJvcmRlci1yYWRpdXM6IDUwJTtcclxuXHRvYmplY3QtZml0OiBjb3ZlcjtcclxuXHRib3JkZXI6IDJweCBzb2xpZCAjM2Y1MWI1O1xyXG5cdGJhY2tncm91bmQ6ICNmYWZhZmE7XHJcblx0ZGlzcGxheTogZmxleDtcclxuXHRhbGlnbi1pdGVtczogY2VudGVyO1xyXG5cdGp1c3RpZnktY29udGVudDogY2VudGVyO1xyXG5cdGZvbnQtc2l6ZTogMS4ycmVtO1xyXG59XHJcblxyXG4uYXZhdGFyLXBsYWNlaG9sZGVyIHtcclxuXHRib3JkZXI6IDJweCBkYXNoZWQgI2JiYjtcclxuXHRjb2xvcjogIzg4ODtcclxufVxyXG5cclxuLnByb2ZpbGUtaW5mbyB7XHJcblx0Zm9udC1zaXplOiAxLjFyZW07XHJcblx0ZGlzcGxheTogZmxleDtcclxuXHRmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xyXG5cdGdhcDogMC41cmVtO1xyXG5cdGp1c3RpZnktY29udGVudDogY2VudGVyO1xyXG5cdG1pbi13aWR0aDogMjIwcHg7XHJcbn1cclxuXHJcbi5wcm9maWxlLWZvcm0sIC5wYXNzd29yZC1mb3JtIHtcclxuXHRkaXNwbGF5OiBmbGV4O1xyXG5cdGZsZXgtd3JhcDogd3JhcDtcclxuXHRnYXA6IDEuNXJlbTtcclxuXHRhbGlnbi1pdGVtczogZmxleC1lbmQ7XHJcblx0bWFyZ2luLWJvdHRvbTogMnJlbTtcclxuXHRtYXgtd2lkdGg6IDUwMHB4O1xyXG59XHJcblxyXG4ucHJvZmlsZS1mb3JtIHtcclxuXHRtYXJnaW4tYm90dG9tOiAyLjVyZW07XHJcbn1cclxuXHJcbkBtZWRpYSAobWF4LXdpZHRoOiA3MDBweCkge1xyXG5cdC5wcm9maWxlLWhlYWRlciB7XHJcblx0XHRmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xyXG5cdFx0YWxpZ24taXRlbXM6IHN0cmV0Y2g7XHJcblx0XHRnYXA6IDEuNXJlbTtcclxuXHR9XHJcblx0LnByb2ZpbGUtZm9ybSwgLnBhc3N3b3JkLWZvcm0ge1xyXG5cdFx0ZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcclxuXHRcdGFsaWduLWl0ZW1zOiBzdHJldGNoO1xyXG5cdFx0bWF4LXdpZHRoOiAxMDAlO1xyXG5cdH1cclxuXHQucHJvZmlsZS1pbmZvIHtcclxuXHRcdG1pbi13aWR0aDogdW5zZXQ7XHJcblx0fVxyXG59XHJcblxyXG4uYXZhdGFyLXNlY3Rpb24ge1xyXG5cdGRpc3BsYXk6IGZsZXg7XHJcblx0ZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcclxuXHRhbGlnbi1pdGVtczogY2VudGVyO1xyXG5cdGdhcDogMC41cmVtO1xyXG59XHJcblxyXG4uYXZhdGFyLWltZyB7XHJcblx0d2lkdGg6IDk2cHg7XHJcblx0aGVpZ2h0OiA5NnB4O1xyXG5cdGJvcmRlci1yYWRpdXM6IDUwJTtcclxuXHRvYmplY3QtZml0OiBjb3ZlcjtcclxuXHRib3JkZXI6IDJweCBzb2xpZCAjM2Y1MWI1O1xyXG59XHJcblxyXG4uYXZhdGFyLXBsYWNlaG9sZGVyIHtcclxuXHR3aWR0aDogOTZweDtcclxuXHRoZWlnaHQ6IDk2cHg7XHJcblx0Ym9yZGVyLXJhZGl1czogNTAlO1xyXG5cdGJhY2tncm91bmQ6ICNlZWU7XHJcblx0ZGlzcGxheTogZmxleDtcclxuXHRhbGlnbi1pdGVtczogY2VudGVyO1xyXG5cdGp1c3RpZnktY29udGVudDogY2VudGVyO1xyXG5cdGNvbG9yOiAjODg4O1xyXG5cdGZvbnQtc2l6ZTogMS4ycmVtO1xyXG5cdGJvcmRlcjogMnB4IGRhc2hlZCAjYmJiO1xyXG59XHJcblxyXG4ucHJvZmlsZS1pbmZvIHtcclxuXHRmb250LXNpemU6IDEuMXJlbTtcclxufVxyXG5cclxuLnByb2ZpbGUtZm9ybSwgLnBhc3N3b3JkLWZvcm0ge1xyXG5cdGRpc3BsYXk6IGZsZXg7XHJcblx0Z2FwOiAxcmVtO1xyXG5cdGFsaWduLWl0ZW1zOiBmbGV4LWVuZDtcclxuXHRtYXJnaW4tYm90dG9tOiAxLjVyZW07XHJcbn0iXSwic291cmNlUm9vdCI6IiJ9 */"]
    });
  }
}

/***/ }),

/***/ 9181:
/*!*********************************************!*\
  !*** ./src/app/services/profile.service.ts ***!
  \*********************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "ProfileService": () => (/* binding */ ProfileService)
/* harmony export */ });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ 2560);
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common/http */ 8987);


class ProfileService {
  constructor(http) {
    this.http = http;
    this.apiUrl = '/api/profile';
  }
  getProfile() {
    return this.http.get(this.apiUrl);
  }
  updateProfile(email) {
    return this.http.put(this.apiUrl, {
      email
    });
  }
  changePassword(oldPassword, newPassword) {
    return this.http.post(`${this.apiUrl}/change-password`, {
      oldPassword,
      newPassword
    });
  }
  uploadAvatar(file) {
    const formData = new FormData();
    formData.append('file', file);
    return this.http.post(`${this.apiUrl}/avatar`, formData);
  }
  static {
    this.ɵfac = function ProfileService_Factory(t) {
      return new (t || ProfileService)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵinject"](_angular_common_http__WEBPACK_IMPORTED_MODULE_1__.HttpClient));
    };
  }
  static {
    this.ɵprov = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjectable"]({
      token: ProfileService,
      factory: ProfileService.ɵfac,
      providedIn: 'root'
    });
  }
}

/***/ })

}]);
//# sourceMappingURL=src_app_features_profile_profile_module_ts.js.map