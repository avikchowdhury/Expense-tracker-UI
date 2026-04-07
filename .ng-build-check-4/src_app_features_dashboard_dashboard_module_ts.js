"use strict";
(self["webpackChunkmy_app"] = self["webpackChunkmy_app"] || []).push([["src_app_features_dashboard_dashboard_module_ts"],{

/***/ 6680:
/*!**************************************************************************!*\
  !*** ./src/app/features/dashboard/components/ai-chat-panel.component.ts ***!
  \**************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "AiChatPanelComponent": () => (/* binding */ AiChatPanelComponent)
/* harmony export */ });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ 2560);
/* harmony import */ var _services_ai_assistant_service__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../../services/ai-assistant.service */ 8622);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ 4666);
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ 2508);
/* harmony import */ var _angular_material_button__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/material/button */ 4522);
/* harmony import */ var _angular_material_card__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/material/card */ 2156);
/* harmony import */ var _angular_material_form_field__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/material/form-field */ 5074);
/* harmony import */ var _angular_material_input__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/material/input */ 8562);








function AiChatPanelComponent_button_8_Template(rf, ctx) {
  if (rf & 1) {
    const _r4 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "button", 10);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("click", function AiChatPanelComponent_button_8_Template_button_click_0_listener() {
      const restoredCtx = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵrestoreView"](_r4);
      const starter_r2 = restoredCtx.$implicit;
      const ctx_r3 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"]();
      return _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵresetView"](ctx_r3.usePrompt(starter_r2));
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
  }
  if (rf & 2) {
    const starter_r2 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate1"](" ", starter_r2, " ");
  }
}
function AiChatPanelComponent_article_10_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "article", 11)(1, "span");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](3, "p");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()();
  }
  if (rf & 2) {
    const message_r5 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵclassProp"]("assistant", message_r5.role === "assistant");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate"](message_r5.role === "assistant" ? "AI" : "You");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate"](message_r5.content);
  }
}
class AiChatPanelComponent {
  constructor(aiAssistantService) {
    this.aiAssistantService = aiAssistantService;
    this.starterPrompts = ['What category is growing fastest this month?', 'How can I reduce my budget risk?', 'Summarize my latest receipt activity.'];
    this.messages = [{
      role: 'assistant',
      content: 'Ask about overspending, recent vendors, or where you can tighten your budget. I will answer using your tracker data.'
    }];
    this.prompt = '';
    this.loading = false;
  }
  usePrompt(prompt) {
    this.prompt = prompt;
    this.submit();
  }
  submit() {
    const message = this.prompt.trim();
    if (!message || this.loading) {
      return;
    }
    this.messages = [...this.messages, {
      role: 'user',
      content: message
    }];
    this.prompt = '';
    this.loading = true;
    this.aiAssistantService.sendMessage({
      message
    }).subscribe({
      next: response => {
        this.messages = [...this.messages, {
          role: 'assistant',
          content: response.reply,
          createdAt: response.generatedAt
        }];
      },
      error: () => {
        this.messages = [...this.messages, {
          role: 'assistant',
          content: 'I could not reach the AI assistant just now. Try again after the API is available.'
        }];
      },
      complete: () => {
        this.loading = false;
      }
    });
  }
  static {
    this.ɵfac = function AiChatPanelComponent_Factory(t) {
      return new (t || AiChatPanelComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](_services_ai_assistant_service__WEBPACK_IMPORTED_MODULE_0__.AiAssistantService));
    };
  }
  static {
    this.ɵcmp = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineComponent"]({
      type: AiChatPanelComponent,
      selectors: [["app-ai-chat-panel"]],
      decls: 18,
      vars: 5,
      consts: [[1, "chat-panel"], [1, "chat-header"], [1, "prompt-list"], ["mat-stroked-button", "", "type", "button", 3, "click", 4, "ngFor", "ngForOf"], [1, "message-list"], ["class", "message", 3, "assistant", 4, "ngFor", "ngForOf"], [1, "chat-form", 3, "ngSubmit"], ["appearance", "outline"], ["matInput", "", "name", "prompt", "placeholder", "Where am I most likely to overspend?", 3, "ngModel", "ngModelChange"], ["mat-raised-button", "", "color", "primary", "type", "submit", 3, "disabled"], ["mat-stroked-button", "", "type", "button", 3, "click"], [1, "message"]],
      template: function AiChatPanelComponent_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "mat-card", 0)(1, "div", 1)(2, "div")(3, "mat-card-title");
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](4, "Ask your expense copilot");
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](5, "mat-card-subtitle");
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](6, "Chat with the app using your real budget and receipt activity as context.");
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()();
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](7, "div", 2);
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](8, AiChatPanelComponent_button_8_Template, 2, 1, "button", 3);
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()();
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](9, "div", 4);
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](10, AiChatPanelComponent_article_10_Template, 5, 4, "article", 5);
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](11, "form", 6);
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("ngSubmit", function AiChatPanelComponent_Template_form_ngSubmit_11_listener() {
            return ctx.submit();
          });
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](12, "mat-form-field", 7)(13, "mat-label");
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](14, "Ask about your spending");
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](15, "input", 8);
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("ngModelChange", function AiChatPanelComponent_Template_input_ngModelChange_15_listener($event) {
            return ctx.prompt = $event;
          });
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()();
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](16, "button", 9);
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](17);
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()()();
        }
        if (rf & 2) {
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](8);
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngForOf", ctx.starterPrompts);
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](2);
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngForOf", ctx.messages);
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](5);
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngModel", ctx.prompt);
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("disabled", ctx.loading);
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate1"](" ", ctx.loading ? "Thinking..." : "Send", " ");
        }
      },
      dependencies: [_angular_common__WEBPACK_IMPORTED_MODULE_2__.NgForOf, _angular_forms__WEBPACK_IMPORTED_MODULE_3__["ɵNgNoValidate"], _angular_forms__WEBPACK_IMPORTED_MODULE_3__.DefaultValueAccessor, _angular_forms__WEBPACK_IMPORTED_MODULE_3__.NgControlStatus, _angular_forms__WEBPACK_IMPORTED_MODULE_3__.NgControlStatusGroup, _angular_forms__WEBPACK_IMPORTED_MODULE_3__.NgModel, _angular_forms__WEBPACK_IMPORTED_MODULE_3__.NgForm, _angular_material_button__WEBPACK_IMPORTED_MODULE_4__.MatButton, _angular_material_card__WEBPACK_IMPORTED_MODULE_5__.MatCard, _angular_material_card__WEBPACK_IMPORTED_MODULE_5__.MatCardSubtitle, _angular_material_card__WEBPACK_IMPORTED_MODULE_5__.MatCardTitle, _angular_material_form_field__WEBPACK_IMPORTED_MODULE_6__.MatFormField, _angular_material_form_field__WEBPACK_IMPORTED_MODULE_6__.MatLabel, _angular_material_input__WEBPACK_IMPORTED_MODULE_7__.MatInput],
      styles: [".chat-panel[_ngcontent-%COMP%] {\n  margin-top: 1rem;\n  border-radius: 26px;\n  box-shadow: 0 20px 40px rgba(20, 40, 57, 0.08);\n}\n\n.chat-header[_ngcontent-%COMP%] {\n  display: grid;\n  gap: 1rem;\n}\n\n.prompt-list[_ngcontent-%COMP%] {\n  display: flex;\n  flex-wrap: wrap;\n  gap: 0.65rem;\n}\n\n.message-list[_ngcontent-%COMP%] {\n  display: grid;\n  gap: 0.8rem;\n  margin: 1.25rem 0;\n}\n\n.message[_ngcontent-%COMP%] {\n  max-width: 760px;\n  padding: 1rem;\n  border-radius: 20px;\n  background: #eff4f7;\n}\n\n.message.assistant[_ngcontent-%COMP%] {\n  background: #eefaf6;\n}\n\n.message[_ngcontent-%COMP%]   span[_ngcontent-%COMP%] {\n  display: block;\n  margin-bottom: 0.35rem;\n  color: #486174;\n  font-size: 0.82rem;\n  text-transform: uppercase;\n  letter-spacing: 0.08em;\n}\n\n.message[_ngcontent-%COMP%]   p[_ngcontent-%COMP%] {\n  margin: 0;\n  color: #13293d;\n}\n\n.chat-form[_ngcontent-%COMP%] {\n  display: grid;\n  grid-template-columns: minmax(0, 1fr) auto;\n  gap: 0.85rem;\n  align-items: start;\n}\n\n.chat-form[_ngcontent-%COMP%]   button[_ngcontent-%COMP%] {\n  min-height: 56px;\n}\n\n@media (max-width: 720px) {\n  .chat-form[_ngcontent-%COMP%] {\n    grid-template-columns: 1fr;\n  }\n}\n/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8uL3NyYy9hcHAvZmVhdHVyZXMvZGFzaGJvYXJkL2NvbXBvbmVudHMvYWktY2hhdC1wYW5lbC5jb21wb25lbnQuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUNFLGdCQUFBO0VBQ0EsbUJBQUE7RUFDQSw4Q0FBQTtBQUNGOztBQUVBO0VBQ0UsYUFBQTtFQUNBLFNBQUE7QUFDRjs7QUFFQTtFQUNFLGFBQUE7RUFDQSxlQUFBO0VBQ0EsWUFBQTtBQUNGOztBQUVBO0VBQ0UsYUFBQTtFQUNBLFdBQUE7RUFDQSxpQkFBQTtBQUNGOztBQUVBO0VBQ0UsZ0JBQUE7RUFDQSxhQUFBO0VBQ0EsbUJBQUE7RUFDQSxtQkFBQTtBQUNGOztBQUVBO0VBQ0UsbUJBQUE7QUFDRjs7QUFFQTtFQUNFLGNBQUE7RUFDQSxzQkFBQTtFQUNBLGNBQUE7RUFDQSxrQkFBQTtFQUNBLHlCQUFBO0VBQ0Esc0JBQUE7QUFDRjs7QUFFQTtFQUNFLFNBQUE7RUFDQSxjQUFBO0FBQ0Y7O0FBRUE7RUFDRSxhQUFBO0VBQ0EsMENBQUE7RUFDQSxZQUFBO0VBQ0Esa0JBQUE7QUFDRjs7QUFFQTtFQUNFLGdCQUFBO0FBQ0Y7O0FBRUE7RUFDRTtJQUNFLDBCQUFBO0VBQ0Y7QUFDRiIsInNvdXJjZXNDb250ZW50IjpbIi5jaGF0LXBhbmVsIHtcbiAgbWFyZ2luLXRvcDogMXJlbTtcbiAgYm9yZGVyLXJhZGl1czogMjZweDtcbiAgYm94LXNoYWRvdzogMCAyMHB4IDQwcHggcmdiYSgyMCwgNDAsIDU3LCAwLjA4KTtcbn1cblxuLmNoYXQtaGVhZGVyIHtcbiAgZGlzcGxheTogZ3JpZDtcbiAgZ2FwOiAxcmVtO1xufVxuXG4ucHJvbXB0LWxpc3Qge1xuICBkaXNwbGF5OiBmbGV4O1xuICBmbGV4LXdyYXA6IHdyYXA7XG4gIGdhcDogMC42NXJlbTtcbn1cblxuLm1lc3NhZ2UtbGlzdCB7XG4gIGRpc3BsYXk6IGdyaWQ7XG4gIGdhcDogMC44cmVtO1xuICBtYXJnaW46IDEuMjVyZW0gMDtcbn1cblxuLm1lc3NhZ2Uge1xuICBtYXgtd2lkdGg6IDc2MHB4O1xuICBwYWRkaW5nOiAxcmVtO1xuICBib3JkZXItcmFkaXVzOiAyMHB4O1xuICBiYWNrZ3JvdW5kOiAjZWZmNGY3O1xufVxuXG4ubWVzc2FnZS5hc3Npc3RhbnQge1xuICBiYWNrZ3JvdW5kOiAjZWVmYWY2O1xufVxuXG4ubWVzc2FnZSBzcGFuIHtcbiAgZGlzcGxheTogYmxvY2s7XG4gIG1hcmdpbi1ib3R0b206IDAuMzVyZW07XG4gIGNvbG9yOiAjNDg2MTc0O1xuICBmb250LXNpemU6IDAuODJyZW07XG4gIHRleHQtdHJhbnNmb3JtOiB1cHBlcmNhc2U7XG4gIGxldHRlci1zcGFjaW5nOiAwLjA4ZW07XG59XG5cbi5tZXNzYWdlIHAge1xuICBtYXJnaW46IDA7XG4gIGNvbG9yOiAjMTMyOTNkO1xufVxuXG4uY2hhdC1mb3JtIHtcbiAgZGlzcGxheTogZ3JpZDtcbiAgZ3JpZC10ZW1wbGF0ZS1jb2x1bW5zOiBtaW5tYXgoMCwgMWZyKSBhdXRvO1xuICBnYXA6IDAuODVyZW07XG4gIGFsaWduLWl0ZW1zOiBzdGFydDtcbn1cblxuLmNoYXQtZm9ybSBidXR0b24ge1xuICBtaW4taGVpZ2h0OiA1NnB4O1xufVxuXG5AbWVkaWEgKG1heC13aWR0aDogNzIwcHgpIHtcbiAgLmNoYXQtZm9ybSB7XG4gICAgZ3JpZC10ZW1wbGF0ZS1jb2x1bW5zOiAxZnI7XG4gIH1cbn1cbiJdLCJzb3VyY2VSb290IjoiIn0= */"]
    });
  }
}

/***/ }),

/***/ 6859:
/*!******************************************************************************!*\
  !*** ./src/app/features/dashboard/components/ai-insights-panel.component.ts ***!
  \******************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "AiInsightsPanelComponent": () => (/* binding */ AiInsightsPanelComponent)
/* harmony export */ });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ 2560);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common */ 4666);
/* harmony import */ var _angular_material_card__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/material/card */ 2156);
/* harmony import */ var _angular_material_chips__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/material/chips */ 1169);




function AiInsightsPanelComponent_div_9_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 8)(1, "div")(2, "span");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](3, "Budget");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "strong");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](5);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipe"](6, "currency");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](7, "div")(8, "span");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](9, "Spent");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](10, "strong");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](11);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipe"](12, "currency");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]()()();
  }
  if (rf & 2) {
    const ctx_r0 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](5);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipeBind1"](6, 2, ctx_r0.budgetStatus.budget));
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](6);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipeBind1"](12, 4, ctx_r0.budgetStatus.spent));
  }
}
function AiInsightsPanelComponent_div_10_article_1_span_4_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "span");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
  }
  if (rf & 2) {
    const insight_r7 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]().$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](insight_r7.metricValue);
  }
}
function AiInsightsPanelComponent_div_10_article_1_small_7_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "small");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
  }
  if (rf & 2) {
    const insight_r7 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]().$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](insight_r7.action);
  }
}
function AiInsightsPanelComponent_div_10_article_1_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "article", 11)(1, "div", 12)(2, "h3");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](4, AiInsightsPanelComponent_div_10_article_1_span_4_Template, 2, 1, "span", 13);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "p");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](6);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](7, AiInsightsPanelComponent_div_10_article_1_small_7_Template, 2, 1, "small", 13);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
  }
  if (rf & 2) {
    const insight_r7 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵclassProp"]("warning", insight_r7.severity === "warning" || insight_r7.severity === "critical");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](insight_r7.title);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", insight_r7.metricValue);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](insight_r7.summary);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", insight_r7.action);
  }
}
function AiInsightsPanelComponent_div_10_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 9);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](1, AiInsightsPanelComponent_div_10_article_1_Template, 8, 6, "article", 10);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
  }
  if (rf & 2) {
    const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngForOf", ctx_r1.snapshot == null ? null : ctx_r1.snapshot.insights);
  }
}
function AiInsightsPanelComponent_div_11_p_3_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "p");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
  }
  if (rf & 2) {
    const anomaly_r13 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](anomaly_r13);
  }
}
function AiInsightsPanelComponent_div_11_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 14)(1, "h3");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](2, "Watch list");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](3, AiInsightsPanelComponent_div_11_p_3_Template, 2, 1, "p", 15);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
  }
  if (rf & 2) {
    const ctx_r2 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngForOf", ctx_r2.snapshot == null ? null : ctx_r2.snapshot.anomalies);
  }
}
function AiInsightsPanelComponent_div_12_mat_chip_4_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "mat-chip");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
  }
  if (rf & 2) {
    const suggestion_r15 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](suggestion_r15);
  }
}
function AiInsightsPanelComponent_div_12_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 16)(1, "h3");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](2, "Next best moves");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "mat-chip-set");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](4, AiInsightsPanelComponent_div_12_mat_chip_4_Template, 2, 1, "mat-chip", 15);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]()();
  }
  if (rf & 2) {
    const ctx_r3 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngForOf", ctx_r3.snapshot == null ? null : ctx_r3.snapshot.suggestions);
  }
}
function AiInsightsPanelComponent_ng_template_13_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 17);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, "AI guidance will appear once expenses and budgets are available.");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
  }
}
class AiInsightsPanelComponent {
  constructor() {
    this.snapshot = null;
    this.budgetStatus = null;
  }
  static {
    this.ɵfac = function AiInsightsPanelComponent_Factory(t) {
      return new (t || AiInsightsPanelComponent)();
    };
  }
  static {
    this.ɵcmp = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({
      type: AiInsightsPanelComponent,
      selectors: [["app-ai-insights-panel"]],
      inputs: {
        snapshot: "snapshot",
        budgetStatus: "budgetStatus"
      },
      decls: 15,
      vars: 6,
      consts: [[1, "panel-card", "insights-panel"], [1, "panel-header"], [1, "health-chip"], ["class", "budget-strip", 4, "ngIf"], ["class", "insight-list", 4, "ngIf", "ngIfElse"], ["class", "anomaly-list", 4, "ngIf"], ["class", "quick-tips", 4, "ngIf"], ["emptyState", ""], [1, "budget-strip"], [1, "insight-list"], ["class", "insight-card", 3, "warning", 4, "ngFor", "ngForOf"], [1, "insight-card"], [1, "insight-header"], [4, "ngIf"], [1, "anomaly-list"], [4, "ngFor", "ngForOf"], [1, "quick-tips"], [1, "empty-state"]],
      template: function AiInsightsPanelComponent_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "mat-card", 0)(1, "div", 1)(2, "div")(3, "mat-card-title");
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](4, "AI guidance");
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "mat-card-subtitle");
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](6, "Actionable coaching from your tracked budget and receipt activity.");
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]()();
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](7, "span", 2);
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](8);
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]()();
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](9, AiInsightsPanelComponent_div_9_Template, 13, 6, "div", 3);
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](10, AiInsightsPanelComponent_div_10_Template, 2, 1, "div", 4);
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](11, AiInsightsPanelComponent_div_11_Template, 4, 1, "div", 5);
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](12, AiInsightsPanelComponent_div_12_Template, 5, 1, "div", 6);
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](13, AiInsightsPanelComponent_ng_template_13_Template, 2, 0, "ng-template", null, 7, _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplateRefExtractor"]);
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        }
        if (rf & 2) {
          const _r4 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵreference"](14);
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](8);
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"]((ctx.snapshot == null ? null : ctx.snapshot.budgetHealth) || (ctx.budgetStatus == null ? null : ctx.budgetStatus.status) || "Learning");
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.budgetStatus);
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.snapshot == null ? null : ctx.snapshot.insights == null ? null : ctx.snapshot.insights.length)("ngIfElse", _r4);
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.snapshot == null ? null : ctx.snapshot.anomalies == null ? null : ctx.snapshot.anomalies.length);
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.snapshot == null ? null : ctx.snapshot.suggestions == null ? null : ctx.snapshot.suggestions.length);
        }
      },
      dependencies: [_angular_common__WEBPACK_IMPORTED_MODULE_1__.NgForOf, _angular_common__WEBPACK_IMPORTED_MODULE_1__.NgIf, _angular_material_card__WEBPACK_IMPORTED_MODULE_2__.MatCard, _angular_material_card__WEBPACK_IMPORTED_MODULE_2__.MatCardSubtitle, _angular_material_card__WEBPACK_IMPORTED_MODULE_2__.MatCardTitle, _angular_material_chips__WEBPACK_IMPORTED_MODULE_3__.MatChip, _angular_material_chips__WEBPACK_IMPORTED_MODULE_3__.MatChipSet, _angular_common__WEBPACK_IMPORTED_MODULE_1__.CurrencyPipe],
      styles: [".panel-card[_ngcontent-%COMP%] {\n  border-radius: 26px;\n  min-height: 360px;\n  box-shadow: 0 20px 40px rgba(20, 40, 57, 0.08);\n}\n\n.panel-header[_ngcontent-%COMP%] {\n  display: flex;\n  justify-content: space-between;\n  gap: 1rem;\n}\n\n.health-chip[_ngcontent-%COMP%] {\n  align-self: flex-start;\n  padding: 0.45rem 0.8rem;\n  border-radius: 999px;\n  background: #eefaf6;\n  color: #0f6c5b;\n  font-weight: 600;\n  text-transform: capitalize;\n}\n\n.budget-strip[_ngcontent-%COMP%] {\n  display: grid;\n  grid-template-columns: repeat(2, minmax(0, 1fr));\n  gap: 0.75rem;\n  margin: 1rem 0;\n}\n\n.budget-strip[_ngcontent-%COMP%]   div[_ngcontent-%COMP%] {\n  padding: 0.9rem;\n  border-radius: 18px;\n  background: #f6fafc;\n}\n\n.budget-strip[_ngcontent-%COMP%]   span[_ngcontent-%COMP%] {\n  display: block;\n  color: #61798a;\n  font-size: 0.86rem;\n}\n\n.budget-strip[_ngcontent-%COMP%]   strong[_ngcontent-%COMP%] {\n  display: block;\n  margin-top: 0.2rem;\n  font-size: 1.2rem;\n}\n\n.insight-list[_ngcontent-%COMP%] {\n  display: grid;\n  gap: 0.75rem;\n}\n\n.insight-card[_ngcontent-%COMP%] {\n  padding: 0.9rem;\n  border-radius: 18px;\n  background: #f7fbfd;\n  border: 1px solid rgba(15, 39, 56, 0.08);\n}\n\n.insight-card.warning[_ngcontent-%COMP%] {\n  background: #fff7ef;\n  border-color: rgba(241, 107, 78, 0.2);\n}\n\n.insight-header[_ngcontent-%COMP%] {\n  display: flex;\n  justify-content: space-between;\n  gap: 1rem;\n  margin-bottom: 0.25rem;\n}\n\n.insight-header[_ngcontent-%COMP%]   h3[_ngcontent-%COMP%], .quick-tips[_ngcontent-%COMP%]   h3[_ngcontent-%COMP%] {\n  margin: 0;\n  font-size: 1rem;\n}\n\n.insight-card[_ngcontent-%COMP%]   p[_ngcontent-%COMP%] {\n  margin: 0 0 0.35rem;\n  color: #445b6b;\n}\n\n.insight-card[_ngcontent-%COMP%]   small[_ngcontent-%COMP%] {\n  color: #0f6c5b;\n}\n\n.quick-tips[_ngcontent-%COMP%] {\n  margin-top: 1rem;\n}\n\n.anomaly-list[_ngcontent-%COMP%] {\n  margin-top: 1rem;\n  padding: 0.9rem;\n  border-radius: 18px;\n  background: #fff7ef;\n}\n\n.anomaly-list[_ngcontent-%COMP%]   h3[_ngcontent-%COMP%] {\n  margin: 0 0 0.35rem;\n  font-size: 1rem;\n}\n\n.anomaly-list[_ngcontent-%COMP%]   p[_ngcontent-%COMP%] {\n  margin: 0.35rem 0 0;\n  color: #8f4a2f;\n}\n\n.empty-state[_ngcontent-%COMP%] {\n  display: grid;\n  place-items: center;\n  min-height: 200px;\n  color: #61798a;\n}\n/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8uL3NyYy9hcHAvZmVhdHVyZXMvZGFzaGJvYXJkL2NvbXBvbmVudHMvYWktaW5zaWdodHMtcGFuZWwuY29tcG9uZW50LnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFDRSxtQkFBQTtFQUNBLGlCQUFBO0VBQ0EsOENBQUE7QUFDRjs7QUFFQTtFQUNFLGFBQUE7RUFDQSw4QkFBQTtFQUNBLFNBQUE7QUFDRjs7QUFFQTtFQUNFLHNCQUFBO0VBQ0EsdUJBQUE7RUFDQSxvQkFBQTtFQUNBLG1CQUFBO0VBQ0EsY0FBQTtFQUNBLGdCQUFBO0VBQ0EsMEJBQUE7QUFDRjs7QUFFQTtFQUNFLGFBQUE7RUFDQSxnREFBQTtFQUNBLFlBQUE7RUFDQSxjQUFBO0FBQ0Y7O0FBRUE7RUFDRSxlQUFBO0VBQ0EsbUJBQUE7RUFDQSxtQkFBQTtBQUNGOztBQUVBO0VBQ0UsY0FBQTtFQUNBLGNBQUE7RUFDQSxrQkFBQTtBQUNGOztBQUVBO0VBQ0UsY0FBQTtFQUNBLGtCQUFBO0VBQ0EsaUJBQUE7QUFDRjs7QUFFQTtFQUNFLGFBQUE7RUFDQSxZQUFBO0FBQ0Y7O0FBRUE7RUFDRSxlQUFBO0VBQ0EsbUJBQUE7RUFDQSxtQkFBQTtFQUNBLHdDQUFBO0FBQ0Y7O0FBRUE7RUFDRSxtQkFBQTtFQUNBLHFDQUFBO0FBQ0Y7O0FBRUE7RUFDRSxhQUFBO0VBQ0EsOEJBQUE7RUFDQSxTQUFBO0VBQ0Esc0JBQUE7QUFDRjs7QUFFQTs7RUFFRSxTQUFBO0VBQ0EsZUFBQTtBQUNGOztBQUVBO0VBQ0UsbUJBQUE7RUFDQSxjQUFBO0FBQ0Y7O0FBRUE7RUFDRSxjQUFBO0FBQ0Y7O0FBRUE7RUFDRSxnQkFBQTtBQUNGOztBQUVBO0VBQ0UsZ0JBQUE7RUFDQSxlQUFBO0VBQ0EsbUJBQUE7RUFDQSxtQkFBQTtBQUNGOztBQUVBO0VBQ0UsbUJBQUE7RUFDQSxlQUFBO0FBQ0Y7O0FBRUE7RUFDRSxtQkFBQTtFQUNBLGNBQUE7QUFDRjs7QUFFQTtFQUNFLGFBQUE7RUFDQSxtQkFBQTtFQUNBLGlCQUFBO0VBQ0EsY0FBQTtBQUNGIiwic291cmNlc0NvbnRlbnQiOlsiLnBhbmVsLWNhcmQge1xuICBib3JkZXItcmFkaXVzOiAyNnB4O1xuICBtaW4taGVpZ2h0OiAzNjBweDtcbiAgYm94LXNoYWRvdzogMCAyMHB4IDQwcHggcmdiYSgyMCwgNDAsIDU3LCAwLjA4KTtcbn1cblxuLnBhbmVsLWhlYWRlciB7XG4gIGRpc3BsYXk6IGZsZXg7XG4gIGp1c3RpZnktY29udGVudDogc3BhY2UtYmV0d2VlbjtcbiAgZ2FwOiAxcmVtO1xufVxuXG4uaGVhbHRoLWNoaXAge1xuICBhbGlnbi1zZWxmOiBmbGV4LXN0YXJ0O1xuICBwYWRkaW5nOiAwLjQ1cmVtIDAuOHJlbTtcbiAgYm9yZGVyLXJhZGl1czogOTk5cHg7XG4gIGJhY2tncm91bmQ6ICNlZWZhZjY7XG4gIGNvbG9yOiAjMGY2YzViO1xuICBmb250LXdlaWdodDogNjAwO1xuICB0ZXh0LXRyYW5zZm9ybTogY2FwaXRhbGl6ZTtcbn1cblxuLmJ1ZGdldC1zdHJpcCB7XG4gIGRpc3BsYXk6IGdyaWQ7XG4gIGdyaWQtdGVtcGxhdGUtY29sdW1uczogcmVwZWF0KDIsIG1pbm1heCgwLCAxZnIpKTtcbiAgZ2FwOiAwLjc1cmVtO1xuICBtYXJnaW46IDFyZW0gMDtcbn1cblxuLmJ1ZGdldC1zdHJpcCBkaXYge1xuICBwYWRkaW5nOiAwLjlyZW07XG4gIGJvcmRlci1yYWRpdXM6IDE4cHg7XG4gIGJhY2tncm91bmQ6ICNmNmZhZmM7XG59XG5cbi5idWRnZXQtc3RyaXAgc3BhbiB7XG4gIGRpc3BsYXk6IGJsb2NrO1xuICBjb2xvcjogIzYxNzk4YTtcbiAgZm9udC1zaXplOiAwLjg2cmVtO1xufVxuXG4uYnVkZ2V0LXN0cmlwIHN0cm9uZyB7XG4gIGRpc3BsYXk6IGJsb2NrO1xuICBtYXJnaW4tdG9wOiAwLjJyZW07XG4gIGZvbnQtc2l6ZTogMS4ycmVtO1xufVxuXG4uaW5zaWdodC1saXN0IHtcbiAgZGlzcGxheTogZ3JpZDtcbiAgZ2FwOiAwLjc1cmVtO1xufVxuXG4uaW5zaWdodC1jYXJkIHtcbiAgcGFkZGluZzogMC45cmVtO1xuICBib3JkZXItcmFkaXVzOiAxOHB4O1xuICBiYWNrZ3JvdW5kOiAjZjdmYmZkO1xuICBib3JkZXI6IDFweCBzb2xpZCByZ2JhKDE1LCAzOSwgNTYsIDAuMDgpO1xufVxuXG4uaW5zaWdodC1jYXJkLndhcm5pbmcge1xuICBiYWNrZ3JvdW5kOiAjZmZmN2VmO1xuICBib3JkZXItY29sb3I6IHJnYmEoMjQxLCAxMDcsIDc4LCAwLjIpO1xufVxuXG4uaW5zaWdodC1oZWFkZXIge1xuICBkaXNwbGF5OiBmbGV4O1xuICBqdXN0aWZ5LWNvbnRlbnQ6IHNwYWNlLWJldHdlZW47XG4gIGdhcDogMXJlbTtcbiAgbWFyZ2luLWJvdHRvbTogMC4yNXJlbTtcbn1cblxuLmluc2lnaHQtaGVhZGVyIGgzLFxuLnF1aWNrLXRpcHMgaDMge1xuICBtYXJnaW46IDA7XG4gIGZvbnQtc2l6ZTogMXJlbTtcbn1cblxuLmluc2lnaHQtY2FyZCBwIHtcbiAgbWFyZ2luOiAwIDAgMC4zNXJlbTtcbiAgY29sb3I6ICM0NDViNmI7XG59XG5cbi5pbnNpZ2h0LWNhcmQgc21hbGwge1xuICBjb2xvcjogIzBmNmM1Yjtcbn1cblxuLnF1aWNrLXRpcHMge1xuICBtYXJnaW4tdG9wOiAxcmVtO1xufVxuXG4uYW5vbWFseS1saXN0IHtcbiAgbWFyZ2luLXRvcDogMXJlbTtcbiAgcGFkZGluZzogMC45cmVtO1xuICBib3JkZXItcmFkaXVzOiAxOHB4O1xuICBiYWNrZ3JvdW5kOiAjZmZmN2VmO1xufVxuXG4uYW5vbWFseS1saXN0IGgzIHtcbiAgbWFyZ2luOiAwIDAgMC4zNXJlbTtcbiAgZm9udC1zaXplOiAxcmVtO1xufVxuXG4uYW5vbWFseS1saXN0IHAge1xuICBtYXJnaW46IDAuMzVyZW0gMCAwO1xuICBjb2xvcjogIzhmNGEyZjtcbn1cblxuLmVtcHR5LXN0YXRlIHtcbiAgZGlzcGxheTogZ3JpZDtcbiAgcGxhY2UtaXRlbXM6IGNlbnRlcjtcbiAgbWluLWhlaWdodDogMjAwcHg7XG4gIGNvbG9yOiAjNjE3OThhO1xufVxuIl0sInNvdXJjZVJvb3QiOiIifQ== */"]
    });
  }
}

/***/ }),

/***/ 2500:
/*!************************************************************************************!*\
  !*** ./src/app/features/dashboard/components/category-breakdown-card.component.ts ***!
  \************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "CategoryBreakdownCardComponent": () => (/* binding */ CategoryBreakdownCardComponent)
/* harmony export */ });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ 2560);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common */ 4666);
/* harmony import */ var _angular_material_card__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/material/card */ 2156);
/* harmony import */ var ng2_charts__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ng2-charts */ 1208);




function CategoryBreakdownCardComponent_div_9_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 5);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](1, "canvas", 6);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
  }
  if (rf & 2) {
    const ctx_r0 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("data", ctx_r0.data)("type", ctx_r0.type);
  }
}
function CategoryBreakdownCardComponent_ng_template_10_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 7);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, "Category insights appear after your first tracked expenses.");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
  }
}
class CategoryBreakdownCardComponent {
  constructor() {
    this.data = {
      labels: [],
      datasets: []
    };
    this.type = 'doughnut';
    this.topCategory = 'N/A';
  }
  static {
    this.ɵfac = function CategoryBreakdownCardComponent_Factory(t) {
      return new (t || CategoryBreakdownCardComponent)();
    };
  }
  static {
    this.ɵcmp = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({
      type: CategoryBreakdownCardComponent,
      selectors: [["app-category-breakdown-card"]],
      inputs: {
        data: "data",
        type: "type",
        topCategory: "topCategory"
      },
      decls: 12,
      vars: 4,
      consts: [[1, "panel-card"], [1, "header-row"], [1, "top-category"], ["class", "chart-shell", 4, "ngIf", "ngIfElse"], ["emptyState", ""], [1, "chart-shell"], ["baseChart", "", 3, "data", "type"], [1, "empty-state"]],
      template: function CategoryBreakdownCardComponent_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "mat-card", 0)(1, "div", 1)(2, "div")(3, "mat-card-title");
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](4, "Category breakdown");
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "mat-card-subtitle");
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](6);
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]()();
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](7, "div", 2);
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](8);
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]()();
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](9, CategoryBreakdownCardComponent_div_9_Template, 2, 2, "div", 3);
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](10, CategoryBreakdownCardComponent_ng_template_10_Template, 2, 0, "ng-template", null, 4, _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplateRefExtractor"]);
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        }
        if (rf & 2) {
          const _r1 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵreference"](11);
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](6);
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"]("Top spending area: ", ctx.topCategory, "");
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](ctx.topCategory);
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.data.datasets.length && ctx.data.datasets[0].data.length)("ngIfElse", _r1);
        }
      },
      dependencies: [_angular_common__WEBPACK_IMPORTED_MODULE_1__.NgIf, _angular_material_card__WEBPACK_IMPORTED_MODULE_2__.MatCard, _angular_material_card__WEBPACK_IMPORTED_MODULE_2__.MatCardSubtitle, _angular_material_card__WEBPACK_IMPORTED_MODULE_2__.MatCardTitle, ng2_charts__WEBPACK_IMPORTED_MODULE_3__.BaseChartDirective],
      styles: [".panel-card[_ngcontent-%COMP%] {\n  padding: 0.4rem;\n  border-radius: 26px;\n  min-height: 360px;\n  box-shadow: 0 20px 40px rgba(20, 40, 57, 0.08);\n}\n\n.header-row[_ngcontent-%COMP%] {\n  display: flex;\n  justify-content: space-between;\n  gap: 1rem;\n}\n\n.top-category[_ngcontent-%COMP%] {\n  align-self: flex-start;\n  padding: 0.45rem 0.8rem;\n  border-radius: 999px;\n  background: #eefaf6;\n  color: #0f6c5b;\n  font-weight: 600;\n}\n\n.chart-shell[_ngcontent-%COMP%] {\n  min-height: 250px;\n}\n\n.empty-state[_ngcontent-%COMP%] {\n  display: grid;\n  place-items: center;\n  min-height: 220px;\n  color: #61798a;\n}\n/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8uL3NyYy9hcHAvZmVhdHVyZXMvZGFzaGJvYXJkL2NvbXBvbmVudHMvY2F0ZWdvcnktYnJlYWtkb3duLWNhcmQuY29tcG9uZW50LnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFDRSxlQUFBO0VBQ0EsbUJBQUE7RUFDQSxpQkFBQTtFQUNBLDhDQUFBO0FBQ0Y7O0FBRUE7RUFDRSxhQUFBO0VBQ0EsOEJBQUE7RUFDQSxTQUFBO0FBQ0Y7O0FBRUE7RUFDRSxzQkFBQTtFQUNBLHVCQUFBO0VBQ0Esb0JBQUE7RUFDQSxtQkFBQTtFQUNBLGNBQUE7RUFDQSxnQkFBQTtBQUNGOztBQUVBO0VBQ0UsaUJBQUE7QUFDRjs7QUFFQTtFQUNFLGFBQUE7RUFDQSxtQkFBQTtFQUNBLGlCQUFBO0VBQ0EsY0FBQTtBQUNGIiwic291cmNlc0NvbnRlbnQiOlsiLnBhbmVsLWNhcmQge1xuICBwYWRkaW5nOiAwLjRyZW07XG4gIGJvcmRlci1yYWRpdXM6IDI2cHg7XG4gIG1pbi1oZWlnaHQ6IDM2MHB4O1xuICBib3gtc2hhZG93OiAwIDIwcHggNDBweCByZ2JhKDIwLCA0MCwgNTcsIDAuMDgpO1xufVxuXG4uaGVhZGVyLXJvdyB7XG4gIGRpc3BsYXk6IGZsZXg7XG4gIGp1c3RpZnktY29udGVudDogc3BhY2UtYmV0d2VlbjtcbiAgZ2FwOiAxcmVtO1xufVxuXG4udG9wLWNhdGVnb3J5IHtcbiAgYWxpZ24tc2VsZjogZmxleC1zdGFydDtcbiAgcGFkZGluZzogMC40NXJlbSAwLjhyZW07XG4gIGJvcmRlci1yYWRpdXM6IDk5OXB4O1xuICBiYWNrZ3JvdW5kOiAjZWVmYWY2O1xuICBjb2xvcjogIzBmNmM1YjtcbiAgZm9udC13ZWlnaHQ6IDYwMDtcbn1cblxuLmNoYXJ0LXNoZWxsIHtcbiAgbWluLWhlaWdodDogMjUwcHg7XG59XG5cbi5lbXB0eS1zdGF0ZSB7XG4gIGRpc3BsYXk6IGdyaWQ7XG4gIHBsYWNlLWl0ZW1zOiBjZW50ZXI7XG4gIG1pbi1oZWlnaHQ6IDIyMHB4O1xuICBjb2xvcjogIzYxNzk4YTtcbn1cbiJdLCJzb3VyY2VSb290IjoiIn0= */"]
    });
  }
}

/***/ }),

/***/ 9114:
/*!******************************************************************************!*\
  !*** ./src/app/features/dashboard/components/dashboard-summary.component.ts ***!
  \******************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "DashboardSummaryComponent": () => (/* binding */ DashboardSummaryComponent)
/* harmony export */ });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ 2560);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common */ 4666);


function DashboardSummaryComponent_article_1_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "article", 2)(1, "span");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "strong");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "p");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](6);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]()();
  }
  if (rf & 2) {
    const metric_r1 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵclassProp"]("warning", metric_r1.tone === "warning")("positive", metric_r1.tone === "positive");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](metric_r1.label);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](metric_r1.value);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](metric_r1.detail);
  }
}
class DashboardSummaryComponent {
  constructor() {
    this.metrics = [];
  }
  static {
    this.ɵfac = function DashboardSummaryComponent_Factory(t) {
      return new (t || DashboardSummaryComponent)();
    };
  }
  static {
    this.ɵcmp = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({
      type: DashboardSummaryComponent,
      selectors: [["app-dashboard-summary"]],
      inputs: {
        metrics: "metrics"
      },
      decls: 2,
      vars: 1,
      consts: [[1, "summary-grid"], ["class", "summary-card", 3, "warning", "positive", 4, "ngFor", "ngForOf"], [1, "summary-card"]],
      template: function DashboardSummaryComponent_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "section", 0);
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](1, DashboardSummaryComponent_article_1_Template, 7, 7, "article", 1);
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        }
        if (rf & 2) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngForOf", ctx.metrics);
        }
      },
      dependencies: [_angular_common__WEBPACK_IMPORTED_MODULE_1__.NgForOf],
      styles: [".summary-grid[_ngcontent-%COMP%] {\n  display: grid;\n  grid-template-columns: repeat(4, minmax(0, 1fr));\n  gap: 1rem;\n  margin-bottom: 1rem;\n}\n\n.summary-card[_ngcontent-%COMP%] {\n  padding: 1.15rem;\n  border-radius: 22px;\n  background: rgba(255, 255, 255, 0.86);\n  border: 1px solid rgba(15, 39, 56, 0.08);\n  box-shadow: 0 16px 28px rgba(16, 40, 58, 0.07);\n}\n\n.summary-card[_ngcontent-%COMP%]   span[_ngcontent-%COMP%] {\n  display: block;\n  margin-bottom: 0.5rem;\n  color: #5c7383;\n  font-size: 0.86rem;\n  text-transform: uppercase;\n  letter-spacing: 0.08em;\n}\n\n.summary-card[_ngcontent-%COMP%]   strong[_ngcontent-%COMP%] {\n  display: block;\n  margin-bottom: 0.35rem;\n  font-size: 1.7rem;\n  color: #13293d;\n}\n\n.summary-card[_ngcontent-%COMP%]   p[_ngcontent-%COMP%] {\n  margin: 0;\n  color: #5c7383;\n}\n\n.summary-card.positive[_ngcontent-%COMP%] {\n  border-color: rgba(15, 108, 91, 0.2);\n}\n\n.summary-card.warning[_ngcontent-%COMP%] {\n  border-color: rgba(227, 108, 56, 0.24);\n}\n\n@media (max-width: 1100px) {\n  .summary-grid[_ngcontent-%COMP%] {\n    grid-template-columns: repeat(2, minmax(0, 1fr));\n  }\n}\n@media (max-width: 640px) {\n  .summary-grid[_ngcontent-%COMP%] {\n    grid-template-columns: 1fr;\n  }\n}\n/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8uL3NyYy9hcHAvZmVhdHVyZXMvZGFzaGJvYXJkL2NvbXBvbmVudHMvZGFzaGJvYXJkLXN1bW1hcnkuY29tcG9uZW50LnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFDRSxhQUFBO0VBQ0EsZ0RBQUE7RUFDQSxTQUFBO0VBQ0EsbUJBQUE7QUFDRjs7QUFFQTtFQUNFLGdCQUFBO0VBQ0EsbUJBQUE7RUFDQSxxQ0FBQTtFQUNBLHdDQUFBO0VBQ0EsOENBQUE7QUFDRjs7QUFFQTtFQUNFLGNBQUE7RUFDQSxxQkFBQTtFQUNBLGNBQUE7RUFDQSxrQkFBQTtFQUNBLHlCQUFBO0VBQ0Esc0JBQUE7QUFDRjs7QUFFQTtFQUNFLGNBQUE7RUFDQSxzQkFBQTtFQUNBLGlCQUFBO0VBQ0EsY0FBQTtBQUNGOztBQUVBO0VBQ0UsU0FBQTtFQUNBLGNBQUE7QUFDRjs7QUFFQTtFQUNFLG9DQUFBO0FBQ0Y7O0FBRUE7RUFDRSxzQ0FBQTtBQUNGOztBQUVBO0VBQ0U7SUFDRSxnREFBQTtFQUNGO0FBQ0Y7QUFFQTtFQUNFO0lBQ0UsMEJBQUE7RUFBRjtBQUNGIiwic291cmNlc0NvbnRlbnQiOlsiLnN1bW1hcnktZ3JpZCB7XG4gIGRpc3BsYXk6IGdyaWQ7XG4gIGdyaWQtdGVtcGxhdGUtY29sdW1uczogcmVwZWF0KDQsIG1pbm1heCgwLCAxZnIpKTtcbiAgZ2FwOiAxcmVtO1xuICBtYXJnaW4tYm90dG9tOiAxcmVtO1xufVxuXG4uc3VtbWFyeS1jYXJkIHtcbiAgcGFkZGluZzogMS4xNXJlbTtcbiAgYm9yZGVyLXJhZGl1czogMjJweDtcbiAgYmFja2dyb3VuZDogcmdiYSgyNTUsIDI1NSwgMjU1LCAwLjg2KTtcbiAgYm9yZGVyOiAxcHggc29saWQgcmdiYSgxNSwgMzksIDU2LCAwLjA4KTtcbiAgYm94LXNoYWRvdzogMCAxNnB4IDI4cHggcmdiYSgxNiwgNDAsIDU4LCAwLjA3KTtcbn1cblxuLnN1bW1hcnktY2FyZCBzcGFuIHtcbiAgZGlzcGxheTogYmxvY2s7XG4gIG1hcmdpbi1ib3R0b206IDAuNXJlbTtcbiAgY29sb3I6ICM1YzczODM7XG4gIGZvbnQtc2l6ZTogMC44NnJlbTtcbiAgdGV4dC10cmFuc2Zvcm06IHVwcGVyY2FzZTtcbiAgbGV0dGVyLXNwYWNpbmc6IDAuMDhlbTtcbn1cblxuLnN1bW1hcnktY2FyZCBzdHJvbmcge1xuICBkaXNwbGF5OiBibG9jaztcbiAgbWFyZ2luLWJvdHRvbTogMC4zNXJlbTtcbiAgZm9udC1zaXplOiAxLjdyZW07XG4gIGNvbG9yOiAjMTMyOTNkO1xufVxuXG4uc3VtbWFyeS1jYXJkIHAge1xuICBtYXJnaW46IDA7XG4gIGNvbG9yOiAjNWM3MzgzO1xufVxuXG4uc3VtbWFyeS1jYXJkLnBvc2l0aXZlIHtcbiAgYm9yZGVyLWNvbG9yOiByZ2JhKDE1LCAxMDgsIDkxLCAwLjIpO1xufVxuXG4uc3VtbWFyeS1jYXJkLndhcm5pbmcge1xuICBib3JkZXItY29sb3I6IHJnYmEoMjI3LCAxMDgsIDU2LCAwLjI0KTtcbn1cblxuQG1lZGlhIChtYXgtd2lkdGg6IDExMDBweCkge1xuICAuc3VtbWFyeS1ncmlkIHtcbiAgICBncmlkLXRlbXBsYXRlLWNvbHVtbnM6IHJlcGVhdCgyLCBtaW5tYXgoMCwgMWZyKSk7XG4gIH1cbn1cblxuQG1lZGlhIChtYXgtd2lkdGg6IDY0MHB4KSB7XG4gIC5zdW1tYXJ5LWdyaWQge1xuICAgIGdyaWQtdGVtcGxhdGUtY29sdW1uczogMWZyO1xuICB9XG59XG4iXSwic291cmNlUm9vdCI6IiJ9 */"]
    });
  }
}

/***/ }),

/***/ 6095:
/*!*********************************************************************************!*\
  !*** ./src/app/features/dashboard/components/recent-receipts-card.component.ts ***!
  \*********************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "RecentReceiptsCardComponent": () => (/* binding */ RecentReceiptsCardComponent)
/* harmony export */ });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ 2560);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common */ 4666);
/* harmony import */ var _angular_material_card__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/material/card */ 2156);



function RecentReceiptsCardComponent_div_5_article_1_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "article", 5)(1, "div")(2, "strong");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "p");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](5);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipe"](6, "date");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](7, "span");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](8);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipe"](9, "currency");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]()();
  }
  if (rf & 2) {
    const receipt_r4 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](receipt_r4.vendor || "Unknown vendor");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate2"]("", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipeBind2"](6, 4, receipt_r4.uploadedAt, "mediumDate"), " \u00B7 ", receipt_r4.category || "Uncategorized", "");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipeBind1"](9, 7, receipt_r4.totalAmount));
  }
}
function RecentReceiptsCardComponent_div_5_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 3);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](1, RecentReceiptsCardComponent_div_5_article_1_Template, 10, 9, "article", 4);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
  }
  if (rf & 2) {
    const ctx_r0 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngForOf", ctx_r0.receipts);
  }
}
function RecentReceiptsCardComponent_ng_template_6_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 6);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, "No recent receipts yet.");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
  }
}
class RecentReceiptsCardComponent {
  constructor() {
    this.receipts = [];
  }
  static {
    this.ɵfac = function RecentReceiptsCardComponent_Factory(t) {
      return new (t || RecentReceiptsCardComponent)();
    };
  }
  static {
    this.ɵcmp = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({
      type: RecentReceiptsCardComponent,
      selectors: [["app-recent-receipts-card"]],
      inputs: {
        receipts: "receipts"
      },
      decls: 8,
      vars: 2,
      consts: [[1, "panel-card"], ["class", "receipt-list", 4, "ngIf", "ngIfElse"], ["emptyState", ""], [1, "receipt-list"], ["class", "receipt-row", 4, "ngFor", "ngForOf"], [1, "receipt-row"], [1, "empty-state"]],
      template: function RecentReceiptsCardComponent_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "mat-card", 0)(1, "mat-card-title");
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](2, "Recent receipts");
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "mat-card-subtitle");
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](4, "Latest imports the AI parser can use for trend detection.");
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](5, RecentReceiptsCardComponent_div_5_Template, 2, 1, "div", 1);
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](6, RecentReceiptsCardComponent_ng_template_6_Template, 2, 0, "ng-template", null, 2, _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplateRefExtractor"]);
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        }
        if (rf & 2) {
          const _r1 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵreference"](7);
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](5);
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.receipts.length)("ngIfElse", _r1);
        }
      },
      dependencies: [_angular_common__WEBPACK_IMPORTED_MODULE_1__.NgForOf, _angular_common__WEBPACK_IMPORTED_MODULE_1__.NgIf, _angular_material_card__WEBPACK_IMPORTED_MODULE_2__.MatCard, _angular_material_card__WEBPACK_IMPORTED_MODULE_2__.MatCardSubtitle, _angular_material_card__WEBPACK_IMPORTED_MODULE_2__.MatCardTitle, _angular_common__WEBPACK_IMPORTED_MODULE_1__.CurrencyPipe, _angular_common__WEBPACK_IMPORTED_MODULE_1__.DatePipe],
      styles: [".panel-card[_ngcontent-%COMP%] {\n  border-radius: 26px;\n  min-height: 360px;\n  box-shadow: 0 20px 40px rgba(20, 40, 57, 0.08);\n}\n\n.receipt-list[_ngcontent-%COMP%] {\n  display: grid;\n  gap: 0.9rem;\n}\n\n.receipt-row[_ngcontent-%COMP%] {\n  display: flex;\n  justify-content: space-between;\n  gap: 1rem;\n  padding: 0.95rem 0;\n  border-bottom: 1px solid rgba(19, 41, 61, 0.08);\n}\n\n.receipt-row[_ngcontent-%COMP%]:last-child {\n  border-bottom: none;\n}\n\n.receipt-row[_ngcontent-%COMP%]   strong[_ngcontent-%COMP%] {\n  display: block;\n  margin-bottom: 0.25rem;\n}\n\n.receipt-row[_ngcontent-%COMP%]   p[_ngcontent-%COMP%] {\n  margin: 0;\n  color: #61798a;\n}\n\n.receipt-row[_ngcontent-%COMP%]   span[_ngcontent-%COMP%] {\n  font-weight: 700;\n  color: #13293d;\n}\n\n.empty-state[_ngcontent-%COMP%] {\n  display: grid;\n  place-items: center;\n  min-height: 220px;\n  color: #61798a;\n}\n/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8uL3NyYy9hcHAvZmVhdHVyZXMvZGFzaGJvYXJkL2NvbXBvbmVudHMvcmVjZW50LXJlY2VpcHRzLWNhcmQuY29tcG9uZW50LnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFDRSxtQkFBQTtFQUNBLGlCQUFBO0VBQ0EsOENBQUE7QUFDRjs7QUFFQTtFQUNFLGFBQUE7RUFDQSxXQUFBO0FBQ0Y7O0FBRUE7RUFDRSxhQUFBO0VBQ0EsOEJBQUE7RUFDQSxTQUFBO0VBQ0Esa0JBQUE7RUFDQSwrQ0FBQTtBQUNGOztBQUVBO0VBQ0UsbUJBQUE7QUFDRjs7QUFFQTtFQUNFLGNBQUE7RUFDQSxzQkFBQTtBQUNGOztBQUVBO0VBQ0UsU0FBQTtFQUNBLGNBQUE7QUFDRjs7QUFFQTtFQUNFLGdCQUFBO0VBQ0EsY0FBQTtBQUNGOztBQUVBO0VBQ0UsYUFBQTtFQUNBLG1CQUFBO0VBQ0EsaUJBQUE7RUFDQSxjQUFBO0FBQ0YiLCJzb3VyY2VzQ29udGVudCI6WyIucGFuZWwtY2FyZCB7XG4gIGJvcmRlci1yYWRpdXM6IDI2cHg7XG4gIG1pbi1oZWlnaHQ6IDM2MHB4O1xuICBib3gtc2hhZG93OiAwIDIwcHggNDBweCByZ2JhKDIwLCA0MCwgNTcsIDAuMDgpO1xufVxuXG4ucmVjZWlwdC1saXN0IHtcbiAgZGlzcGxheTogZ3JpZDtcbiAgZ2FwOiAwLjlyZW07XG59XG5cbi5yZWNlaXB0LXJvdyB7XG4gIGRpc3BsYXk6IGZsZXg7XG4gIGp1c3RpZnktY29udGVudDogc3BhY2UtYmV0d2VlbjtcbiAgZ2FwOiAxcmVtO1xuICBwYWRkaW5nOiAwLjk1cmVtIDA7XG4gIGJvcmRlci1ib3R0b206IDFweCBzb2xpZCByZ2JhKDE5LCA0MSwgNjEsIDAuMDgpO1xufVxuXG4ucmVjZWlwdC1yb3c6bGFzdC1jaGlsZCB7XG4gIGJvcmRlci1ib3R0b206IG5vbmU7XG59XG5cbi5yZWNlaXB0LXJvdyBzdHJvbmcge1xuICBkaXNwbGF5OiBibG9jaztcbiAgbWFyZ2luLWJvdHRvbTogMC4yNXJlbTtcbn1cblxuLnJlY2VpcHQtcm93IHAge1xuICBtYXJnaW46IDA7XG4gIGNvbG9yOiAjNjE3OThhO1xufVxuXG4ucmVjZWlwdC1yb3cgc3BhbiB7XG4gIGZvbnQtd2VpZ2h0OiA3MDA7XG4gIGNvbG9yOiAjMTMyOTNkO1xufVxuXG4uZW1wdHktc3RhdGUge1xuICBkaXNwbGF5OiBncmlkO1xuICBwbGFjZS1pdGVtczogY2VudGVyO1xuICBtaW4taGVpZ2h0OiAyMjBweDtcbiAgY29sb3I6ICM2MTc5OGE7XG59XG4iXSwic291cmNlUm9vdCI6IiJ9 */"]
    });
  }
}

/***/ }),

/***/ 3354:
/*!********************************************************************************!*\
  !*** ./src/app/features/dashboard/components/spending-trend-card.component.ts ***!
  \********************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "SpendingTrendCardComponent": () => (/* binding */ SpendingTrendCardComponent)
/* harmony export */ });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ 2560);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common */ 4666);
/* harmony import */ var _angular_material_card__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/material/card */ 2156);
/* harmony import */ var ng2_charts__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ng2-charts */ 1208);




function SpendingTrendCardComponent_div_5_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 3);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](1, "canvas", 4);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
  }
  if (rf & 2) {
    const ctx_r0 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("data", ctx_r0.data)("options", ctx_r0.options)("type", ctx_r0.type);
  }
}
function SpendingTrendCardComponent_ng_template_6_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 5);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, "Upload receipts or sync expenses to populate the chart.");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
  }
}
class SpendingTrendCardComponent {
  constructor() {
    this.data = {
      labels: [],
      datasets: []
    };
    this.options = {};
    this.type = 'bar';
  }
  static {
    this.ɵfac = function SpendingTrendCardComponent_Factory(t) {
      return new (t || SpendingTrendCardComponent)();
    };
  }
  static {
    this.ɵcmp = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({
      type: SpendingTrendCardComponent,
      selectors: [["app-spending-trend-card"]],
      inputs: {
        data: "data",
        options: "options",
        type: "type"
      },
      decls: 8,
      vars: 2,
      consts: [[1, "panel-card", "chart-card"], ["class", "chart-shell", 4, "ngIf", "ngIfElse"], ["emptyState", ""], [1, "chart-shell"], ["baseChart", "", 3, "data", "options", "type"], [1, "empty-state"]],
      template: function SpendingTrendCardComponent_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "mat-card", 0)(1, "mat-card-title");
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](2, "Monthly spending trend");
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "mat-card-subtitle");
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](4, "See whether your expense pace is rising or settling down.");
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](5, SpendingTrendCardComponent_div_5_Template, 2, 3, "div", 1);
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](6, SpendingTrendCardComponent_ng_template_6_Template, 2, 0, "ng-template", null, 2, _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplateRefExtractor"]);
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        }
        if (rf & 2) {
          const _r1 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵreference"](7);
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](5);
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.data.datasets.length && ctx.data.datasets[0].data.length)("ngIfElse", _r1);
        }
      },
      dependencies: [_angular_common__WEBPACK_IMPORTED_MODULE_1__.NgIf, _angular_material_card__WEBPACK_IMPORTED_MODULE_2__.MatCard, _angular_material_card__WEBPACK_IMPORTED_MODULE_2__.MatCardSubtitle, _angular_material_card__WEBPACK_IMPORTED_MODULE_2__.MatCardTitle, ng2_charts__WEBPACK_IMPORTED_MODULE_3__.BaseChartDirective],
      styles: [".panel-card[_ngcontent-%COMP%] {\n  border-radius: 26px;\n  min-height: 360px;\n  box-shadow: 0 20px 40px rgba(20, 40, 57, 0.08);\n}\n\n.chart-card[_ngcontent-%COMP%] {\n  padding: 0.4rem;\n}\n\n.chart-shell[_ngcontent-%COMP%] {\n  position: relative;\n  min-height: 260px;\n}\n\n.empty-state[_ngcontent-%COMP%] {\n  display: grid;\n  place-items: center;\n  min-height: 220px;\n  color: #61798a;\n}\n/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8uL3NyYy9hcHAvZmVhdHVyZXMvZGFzaGJvYXJkL2NvbXBvbmVudHMvc3BlbmRpbmctdHJlbmQtY2FyZC5jb21wb25lbnQuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUNFLG1CQUFBO0VBQ0EsaUJBQUE7RUFDQSw4Q0FBQTtBQUNGOztBQUVBO0VBQ0UsZUFBQTtBQUNGOztBQUVBO0VBQ0Usa0JBQUE7RUFDQSxpQkFBQTtBQUNGOztBQUVBO0VBQ0UsYUFBQTtFQUNBLG1CQUFBO0VBQ0EsaUJBQUE7RUFDQSxjQUFBO0FBQ0YiLCJzb3VyY2VzQ29udGVudCI6WyIucGFuZWwtY2FyZCB7XG4gIGJvcmRlci1yYWRpdXM6IDI2cHg7XG4gIG1pbi1oZWlnaHQ6IDM2MHB4O1xuICBib3gtc2hhZG93OiAwIDIwcHggNDBweCByZ2JhKDIwLCA0MCwgNTcsIDAuMDgpO1xufVxuXG4uY2hhcnQtY2FyZCB7XG4gIHBhZGRpbmc6IDAuNHJlbTtcbn1cblxuLmNoYXJ0LXNoZWxsIHtcbiAgcG9zaXRpb246IHJlbGF0aXZlO1xuICBtaW4taGVpZ2h0OiAyNjBweDtcbn1cblxuLmVtcHR5LXN0YXRlIHtcbiAgZGlzcGxheTogZ3JpZDtcbiAgcGxhY2UtaXRlbXM6IGNlbnRlcjtcbiAgbWluLWhlaWdodDogMjIwcHg7XG4gIGNvbG9yOiAjNjE3OThhO1xufVxuIl0sInNvdXJjZVJvb3QiOiIifQ== */"]
    });
  }
}

/***/ }),

/***/ 8894:
/*!****************************************************************!*\
  !*** ./src/app/features/dashboard/dashboard-page.component.ts ***!
  \****************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "DashboardPageComponent": () => (/* binding */ DashboardPageComponent)
/* harmony export */ });
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! rxjs */ 1640);
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! rxjs */ 745);
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! rxjs/operators */ 3158);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/core */ 2560);
/* harmony import */ var _services_analytics_service__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../services/analytics.service */ 5260);
/* harmony import */ var _services_receipt_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../services/receipt.service */ 535);
/* harmony import */ var _services_budget_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../services/budget.service */ 5488);
/* harmony import */ var _services_ai_assistant_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../services/ai-assistant.service */ 8622);







function DashboardPageComponent_div_8_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](0, "div", 6);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelement"](1, "mat-spinner", 7);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
  }
}
function DashboardPageComponent_div_9_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](0, "div", 8);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
  }
  if (rf & 2) {
    const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtextInterpolate1"](" ", ctx_r1.loadError, "\n");
  }
}
function DashboardPageComponent_ng_container_10_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementContainerStart"](0);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelement"](1, "app-dashboard-summary", 9);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](2, "div", 10);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelement"](3, "app-spending-trend-card", 11)(4, "app-category-breakdown-card", 12)(5, "app-ai-insights-panel", 13)(6, "app-recent-receipts-card", 14);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelement"](7, "app-ai-chat-panel");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementContainerEnd"]();
  }
  if (rf & 2) {
    const ctx_r2 = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("metrics", ctx_r2.metrics);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("data", ctx_r2.barChartData)("options", ctx_r2.barChartOptions)("type", ctx_r2.barChartType);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("data", ctx_r2.pieChartData)("type", ctx_r2.pieChartType)("topCategory", ctx_r2.topCategory);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("snapshot", ctx_r2.aiSnapshot)("budgetStatus", ctx_r2.budgetStatus);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("receipts", ctx_r2.recentReceipts);
  }
}
class DashboardPageComponent {
  constructor(analyticsService, receiptService, budgetService, aiAssistantService) {
    this.analyticsService = analyticsService;
    this.receiptService = receiptService;
    this.budgetService = budgetService;
    this.aiAssistantService = aiAssistantService;
    this.loading = true;
    this.loadError = '';
    this.barChartOptions = {
      responsive: true,
      maintainAspectRatio: false,
      plugins: {
        legend: {
          display: false
        }
      },
      scales: {
        y: {
          ticks: {
            callback: value => `$${value}`
          }
        }
      }
    };
    this.barChartType = 'bar';
    this.barChartData = {
      labels: [],
      datasets: [{
        data: [],
        label: 'Monthly spending',
        backgroundColor: '#0f6c5b',
        borderRadius: 10
      }]
    };
    this.pieChartType = 'doughnut';
    this.pieChartData = {
      labels: [],
      datasets: [{
        data: [],
        backgroundColor: ['#0f6c5b', '#18a8c1', '#ffb25b', '#f16b4e', '#607d8b']
      }]
    };
    this.metrics = [];
    this.topCategory = 'N/A';
    this.recentReceipts = [];
    this.budgetStatus = null;
    this.aiSnapshot = null;
  }
  ngOnInit() {
    (0,rxjs__WEBPACK_IMPORTED_MODULE_5__.forkJoin)({
      monthly: this.analyticsService.getMonthlySpendings(6).pipe((0,rxjs_operators__WEBPACK_IMPORTED_MODULE_6__.catchError)(() => (0,rxjs__WEBPACK_IMPORTED_MODULE_7__.of)([]))),
      category: this.analyticsService.getCategoryBreakdown().pipe((0,rxjs_operators__WEBPACK_IMPORTED_MODULE_6__.catchError)(() => (0,rxjs__WEBPACK_IMPORTED_MODULE_7__.of)([]))),
      recentReceipts: this.receiptService.getRecentReceipts(5).pipe((0,rxjs_operators__WEBPACK_IMPORTED_MODULE_6__.catchError)(() => (0,rxjs__WEBPACK_IMPORTED_MODULE_7__.of)([]))),
      budgetStatus: this.budgetService.getBudgetStatus().pipe((0,rxjs_operators__WEBPACK_IMPORTED_MODULE_6__.catchError)(() => (0,rxjs__WEBPACK_IMPORTED_MODULE_7__.of)(null))),
      aiSnapshot: this.aiAssistantService.getInsights().pipe((0,rxjs_operators__WEBPACK_IMPORTED_MODULE_6__.catchError)(() => (0,rxjs__WEBPACK_IMPORTED_MODULE_7__.of)(null)))
    }).subscribe({
      next: ({
        monthly,
        category,
        recentReceipts,
        budgetStatus,
        aiSnapshot
      }) => {
        this.barChartData = {
          labels: monthly.map(item => item.month),
          datasets: [{
            data: monthly.map(item => item.total),
            label: 'Monthly spending',
            backgroundColor: '#0f6c5b',
            borderRadius: 10
          }]
        };
        this.pieChartData = {
          labels: category.map(item => item.category),
          datasets: [{
            data: category.map(item => item.total),
            backgroundColor: ['#0f6c5b', '#18a8c1', '#ffb25b', '#f16b4e', '#607d8b']
          }]
        };
        this.topCategory = category.length ? [...category].sort((left, right) => right.total - left.total)[0].category : 'N/A';
        this.recentReceipts = recentReceipts;
        this.budgetStatus = budgetStatus;
        this.aiSnapshot = aiSnapshot;
        this.metrics = this.buildMetrics(monthly, recentReceipts, budgetStatus, aiSnapshot);
        this.loading = false;
      },
      error: () => {
        this.loadError = 'We could not load your dashboard right now.';
        this.loading = false;
      }
    });
  }
  buildMetrics(monthly, recentReceipts, budgetStatus, aiSnapshot) {
    const totalSpend = monthly.reduce((sum, item) => sum + item.total, 0);
    const averageSpend = monthly.length ? totalSpend / monthly.length : 0;
    const recentTotal = recentReceipts.reduce((sum, item) => sum + item.totalAmount, 0);
    const budgetRatio = budgetStatus?.budget ? budgetStatus.spent / budgetStatus.budget : 0;
    return [{
      label: '6-month spend',
      value: `$${totalSpend.toFixed(0)}`,
      detail: `${monthly.length || 0} tracked months`,
      tone: 'default'
    }, {
      label: 'Average month',
      value: `$${averageSpend.toFixed(0)}`,
      detail: aiSnapshot?.budgetHealth || 'AI summary pending',
      tone: 'positive'
    }, {
      label: 'Recent receipts',
      value: `${recentReceipts.length}`,
      detail: `$${recentTotal.toFixed(0)} in latest uploads`,
      tone: 'default'
    }, {
      label: 'Budget used',
      value: budgetStatus?.budget ? `${Math.min(budgetRatio * 100, 999).toFixed(0)}%` : 'N/A',
      detail: budgetStatus?.message || 'Add a budget to unlock alerts',
      tone: budgetRatio >= 1 ? 'warning' : 'positive'
    }];
  }
  static {
    this.ɵfac = function DashboardPageComponent_Factory(t) {
      return new (t || DashboardPageComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵdirectiveInject"](_services_analytics_service__WEBPACK_IMPORTED_MODULE_0__.AnalyticsService), _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵdirectiveInject"](_services_receipt_service__WEBPACK_IMPORTED_MODULE_1__.ReceiptService), _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵdirectiveInject"](_services_budget_service__WEBPACK_IMPORTED_MODULE_2__.BudgetService), _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵdirectiveInject"](_services_ai_assistant_service__WEBPACK_IMPORTED_MODULE_3__.AiAssistantService));
    };
  }
  static {
    this.ɵcmp = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵdefineComponent"]({
      type: DashboardPageComponent,
      selectors: [["app-dashboard-page"]],
      decls: 11,
      vars: 3,
      consts: [[1, "page-header"], [1, "eyebrow"], [1, "lead"], ["class", "dashboard-loading", 4, "ngIf"], ["class", "dashboard-error", 4, "ngIf"], [4, "ngIf"], [1, "dashboard-loading"], ["diameter", "44"], [1, "dashboard-error"], [3, "metrics"], [1, "dashboard-grid"], [3, "data", "options", "type"], [3, "data", "type", "topCategory"], [3, "snapshot", "budgetStatus"], [3, "receipts"]],
      template: function DashboardPageComponent_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](0, "section", 0)(1, "div")(2, "p", 1);
          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](3, "Overview");
          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](4, "h2");
          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](5, "AI-first expense command center");
          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](6, "p", 2);
          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](7, "Watch your cash flow, scan for risk, and ask the tracker what deserves action next.");
          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]()()();
          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtemplate"](8, DashboardPageComponent_div_8_Template, 2, 0, "div", 3);
          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtemplate"](9, DashboardPageComponent_div_9_Template, 2, 1, "div", 4);
          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtemplate"](10, DashboardPageComponent_ng_container_10_Template, 8, 10, "ng-container", 5);
        }
        if (rf & 2) {
          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](8);
          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("ngIf", ctx.loading);
          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](1);
          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("ngIf", !ctx.loading && ctx.loadError);
          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](1);
          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("ngIf", !ctx.loading && !ctx.loadError);
        }
      },
      styles: [".page-header[_ngcontent-%COMP%] {\n  margin-bottom: 1.25rem;\n}\n\n.eyebrow[_ngcontent-%COMP%] {\n  margin: 0 0 0.4rem;\n  color: #0f6c5b;\n  letter-spacing: 0.14em;\n  text-transform: uppercase;\n  font-size: 0.78rem;\n}\n\n.page-header[_ngcontent-%COMP%]   h2[_ngcontent-%COMP%] {\n  margin: 0 0 0.4rem;\n  font-size: clamp(1.8rem, 4vw, 2.8rem);\n}\n\n.lead[_ngcontent-%COMP%] {\n  margin: 0;\n  max-width: 760px;\n  color: #577083;\n}\n\n.dashboard-loading[_ngcontent-%COMP%], .dashboard-error[_ngcontent-%COMP%] {\n  display: grid;\n  place-items: center;\n  min-height: 220px;\n  padding: 1rem;\n  border-radius: 24px;\n  background: rgba(255, 255, 255, 0.8);\n}\n\n.dashboard-error[_ngcontent-%COMP%] {\n  color: #a33e2f;\n}\n\n.dashboard-grid[_ngcontent-%COMP%] {\n  display: grid;\n  grid-template-columns: repeat(2, minmax(0, 1fr));\n  gap: 1rem;\n}\n\n@media (max-width: 1024px) {\n  .dashboard-grid[_ngcontent-%COMP%] {\n    grid-template-columns: 1fr;\n  }\n}\n/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8uL3NyYy9hcHAvZmVhdHVyZXMvZGFzaGJvYXJkL2Rhc2hib2FyZC1wYWdlLmNvbXBvbmVudC5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQ0Usc0JBQUE7QUFDRjs7QUFFQTtFQUNFLGtCQUFBO0VBQ0EsY0FBQTtFQUNBLHNCQUFBO0VBQ0EseUJBQUE7RUFDQSxrQkFBQTtBQUNGOztBQUVBO0VBQ0Usa0JBQUE7RUFDQSxxQ0FBQTtBQUNGOztBQUVBO0VBQ0UsU0FBQTtFQUNBLGdCQUFBO0VBQ0EsY0FBQTtBQUNGOztBQUVBOztFQUVFLGFBQUE7RUFDQSxtQkFBQTtFQUNBLGlCQUFBO0VBQ0EsYUFBQTtFQUNBLG1CQUFBO0VBQ0Esb0NBQUE7QUFDRjs7QUFFQTtFQUNFLGNBQUE7QUFDRjs7QUFFQTtFQUNFLGFBQUE7RUFDQSxnREFBQTtFQUNBLFNBQUE7QUFDRjs7QUFFQTtFQUNFO0lBQ0UsMEJBQUE7RUFDRjtBQUNGIiwic291cmNlc0NvbnRlbnQiOlsiLnBhZ2UtaGVhZGVyIHtcbiAgbWFyZ2luLWJvdHRvbTogMS4yNXJlbTtcbn1cblxuLmV5ZWJyb3cge1xuICBtYXJnaW46IDAgMCAwLjRyZW07XG4gIGNvbG9yOiAjMGY2YzViO1xuICBsZXR0ZXItc3BhY2luZzogMC4xNGVtO1xuICB0ZXh0LXRyYW5zZm9ybTogdXBwZXJjYXNlO1xuICBmb250LXNpemU6IDAuNzhyZW07XG59XG5cbi5wYWdlLWhlYWRlciBoMiB7XG4gIG1hcmdpbjogMCAwIDAuNHJlbTtcbiAgZm9udC1zaXplOiBjbGFtcCgxLjhyZW0sIDR2dywgMi44cmVtKTtcbn1cblxuLmxlYWQge1xuICBtYXJnaW46IDA7XG4gIG1heC13aWR0aDogNzYwcHg7XG4gIGNvbG9yOiAjNTc3MDgzO1xufVxuXG4uZGFzaGJvYXJkLWxvYWRpbmcsXG4uZGFzaGJvYXJkLWVycm9yIHtcbiAgZGlzcGxheTogZ3JpZDtcbiAgcGxhY2UtaXRlbXM6IGNlbnRlcjtcbiAgbWluLWhlaWdodDogMjIwcHg7XG4gIHBhZGRpbmc6IDFyZW07XG4gIGJvcmRlci1yYWRpdXM6IDI0cHg7XG4gIGJhY2tncm91bmQ6IHJnYmEoMjU1LCAyNTUsIDI1NSwgMC44KTtcbn1cblxuLmRhc2hib2FyZC1lcnJvciB7XG4gIGNvbG9yOiAjYTMzZTJmO1xufVxuXG4uZGFzaGJvYXJkLWdyaWQge1xuICBkaXNwbGF5OiBncmlkO1xuICBncmlkLXRlbXBsYXRlLWNvbHVtbnM6IHJlcGVhdCgyLCBtaW5tYXgoMCwgMWZyKSk7XG4gIGdhcDogMXJlbTtcbn1cblxuQG1lZGlhIChtYXgtd2lkdGg6IDEwMjRweCkge1xuICAuZGFzaGJvYXJkLWdyaWQge1xuICAgIGdyaWQtdGVtcGxhdGUtY29sdW1uczogMWZyO1xuICB9XG59XG4iXSwic291cmNlUm9vdCI6IiJ9 */"]
    });
  }
}

/***/ }),

/***/ 6231:
/*!****************************************************************!*\
  !*** ./src/app/features/dashboard/dashboard-routing.module.ts ***!
  \****************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "DashboardRoutingModule": () => (/* binding */ DashboardRoutingModule)
/* harmony export */ });
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ 124);
/* harmony import */ var _dashboard_page_component__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./dashboard-page.component */ 8894);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ 2560);




const routes = [{
  path: '',
  component: _dashboard_page_component__WEBPACK_IMPORTED_MODULE_0__.DashboardPageComponent
}];
class DashboardRoutingModule {
  static {
    this.ɵfac = function DashboardRoutingModule_Factory(t) {
      return new (t || DashboardRoutingModule)();
    };
  }
  static {
    this.ɵmod = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineNgModule"]({
      type: DashboardRoutingModule
    });
  }
  static {
    this.ɵinj = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineInjector"]({
      imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__.RouterModule.forChild(routes), _angular_router__WEBPACK_IMPORTED_MODULE_2__.RouterModule]
    });
  }
}
(function () {
  (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵsetNgModuleScope"](DashboardRoutingModule, {
    imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__.RouterModule],
    exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__.RouterModule]
  });
})();

/***/ }),

/***/ 1104:
/*!********************************************************!*\
  !*** ./src/app/features/dashboard/dashboard.module.ts ***!
  \********************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "DashboardModule": () => (/* binding */ DashboardModule)
/* harmony export */ });
/* harmony import */ var _dashboard_routing_module__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./dashboard-routing.module */ 6231);
/* harmony import */ var _dashboard_page_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./dashboard-page.component */ 8894);
/* harmony import */ var _components_ai_chat_panel_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./components/ai-chat-panel.component */ 6680);
/* harmony import */ var _components_ai_insights_panel_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./components/ai-insights-panel.component */ 6859);
/* harmony import */ var _components_category_breakdown_card_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./components/category-breakdown-card.component */ 2500);
/* harmony import */ var _components_dashboard_summary_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./components/dashboard-summary.component */ 9114);
/* harmony import */ var _components_recent_receipts_card_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./components/recent-receipts-card.component */ 6095);
/* harmony import */ var _components_spending_trend_card_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./components/spending-trend-card.component */ 3354);
/* harmony import */ var _shared_shared_module__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../../shared/shared.module */ 4466);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @angular/core */ 2560);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! @angular/common */ 4666);
/* harmony import */ var _angular_material_progress_spinner__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! @angular/material/progress-spinner */ 1708);












class DashboardModule {
  static {
    this.ɵfac = function DashboardModule_Factory(t) {
      return new (t || DashboardModule)();
    };
  }
  static {
    this.ɵmod = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵdefineNgModule"]({
      type: DashboardModule
    });
  }
  static {
    this.ɵinj = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵdefineInjector"]({
      imports: [_shared_shared_module__WEBPACK_IMPORTED_MODULE_8__.SharedModule, _dashboard_routing_module__WEBPACK_IMPORTED_MODULE_0__.DashboardRoutingModule]
    });
  }
}
(function () {
  (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵsetNgModuleScope"](DashboardModule, {
    declarations: [_dashboard_page_component__WEBPACK_IMPORTED_MODULE_1__.DashboardPageComponent, _components_dashboard_summary_component__WEBPACK_IMPORTED_MODULE_5__.DashboardSummaryComponent, _components_spending_trend_card_component__WEBPACK_IMPORTED_MODULE_7__.SpendingTrendCardComponent, _components_category_breakdown_card_component__WEBPACK_IMPORTED_MODULE_4__.CategoryBreakdownCardComponent, _components_recent_receipts_card_component__WEBPACK_IMPORTED_MODULE_6__.RecentReceiptsCardComponent, _components_ai_insights_panel_component__WEBPACK_IMPORTED_MODULE_3__.AiInsightsPanelComponent, _components_ai_chat_panel_component__WEBPACK_IMPORTED_MODULE_2__.AiChatPanelComponent],
    imports: [_shared_shared_module__WEBPACK_IMPORTED_MODULE_8__.SharedModule, _dashboard_routing_module__WEBPACK_IMPORTED_MODULE_0__.DashboardRoutingModule]
  });
})();
_angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵsetComponentScope"](_dashboard_page_component__WEBPACK_IMPORTED_MODULE_1__.DashboardPageComponent, [_angular_common__WEBPACK_IMPORTED_MODULE_10__.NgIf, _angular_material_progress_spinner__WEBPACK_IMPORTED_MODULE_11__.MatProgressSpinner, _components_dashboard_summary_component__WEBPACK_IMPORTED_MODULE_5__.DashboardSummaryComponent, _components_spending_trend_card_component__WEBPACK_IMPORTED_MODULE_7__.SpendingTrendCardComponent, _components_category_breakdown_card_component__WEBPACK_IMPORTED_MODULE_4__.CategoryBreakdownCardComponent, _components_recent_receipts_card_component__WEBPACK_IMPORTED_MODULE_6__.RecentReceiptsCardComponent, _components_ai_insights_panel_component__WEBPACK_IMPORTED_MODULE_3__.AiInsightsPanelComponent, _components_ai_chat_panel_component__WEBPACK_IMPORTED_MODULE_2__.AiChatPanelComponent], []);

/***/ }),

/***/ 8622:
/*!**************************************************!*\
  !*** ./src/app/services/ai-assistant.service.ts ***!
  \**************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "AiAssistantService": () => (/* binding */ AiAssistantService)
/* harmony export */ });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ 2560);
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common/http */ 8987);


const API_BASE = '/api';
class AiAssistantService {
  constructor(http) {
    this.http = http;
  }
  getInsights() {
    return this.http.get(`${API_BASE}/ai/insights`);
  }
  sendMessage(payload) {
    return this.http.post(`${API_BASE}/ai/chat`, payload);
  }
  static {
    this.ɵfac = function AiAssistantService_Factory(t) {
      return new (t || AiAssistantService)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵinject"](_angular_common_http__WEBPACK_IMPORTED_MODULE_1__.HttpClient));
    };
  }
  static {
    this.ɵprov = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjectable"]({
      token: AiAssistantService,
      factory: AiAssistantService.ɵfac,
      providedIn: 'root'
    });
  }
}

/***/ }),

/***/ 5260:
/*!***********************************************!*\
  !*** ./src/app/services/analytics.service.ts ***!
  \***********************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "AnalyticsService": () => (/* binding */ AnalyticsService)
/* harmony export */ });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ 2560);
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common/http */ 8987);


const API_BASE = '/api';
class AnalyticsService {
  constructor(http) {
    this.http = http;
  }
  getMonthlySpendings(months = 6) {
    return this.http.get(`${API_BASE}/analytics/monthly?months=${months}`);
  }
  getCategoryBreakdown() {
    return this.http.get(`${API_BASE}/analytics/category`);
  }
  static {
    this.ɵfac = function AnalyticsService_Factory(t) {
      return new (t || AnalyticsService)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵinject"](_angular_common_http__WEBPACK_IMPORTED_MODULE_1__.HttpClient));
    };
  }
  static {
    this.ɵprov = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjectable"]({
      token: AnalyticsService,
      factory: AnalyticsService.ɵfac,
      providedIn: 'root'
    });
  }
}

/***/ })

}]);
//# sourceMappingURL=src_app_features_dashboard_dashboard_module_ts.js.map