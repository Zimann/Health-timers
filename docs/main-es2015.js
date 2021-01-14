(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["main"],{

/***/ "./$$_lazy_route_resource lazy recursive":
/*!******************************************************!*\
  !*** ./$$_lazy_route_resource lazy namespace object ***!
  \******************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

function webpackEmptyAsyncContext(req) {
	// Here Promise.resolve().then() is used instead of new Promise() to prevent
	// uncaught exception popping up in devtools
	return Promise.resolve().then(function() {
		var e = new Error("Cannot find module '" + req + "'");
		e.code = 'MODULE_NOT_FOUND';
		throw e;
	});
}
webpackEmptyAsyncContext.keys = function() { return []; };
webpackEmptyAsyncContext.resolve = webpackEmptyAsyncContext;
module.exports = webpackEmptyAsyncContext;
webpackEmptyAsyncContext.id = "./$$_lazy_route_resource lazy recursive";

/***/ }),

/***/ "./src/app/app-routing.module.ts":
/*!***************************************!*\
  !*** ./src/app/app-routing.module.ts ***!
  \***************************************/
/*! exports provided: AppRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppRoutingModule", function() { return AppRoutingModule; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");
/* harmony import */ var _authentication_authentication_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./authentication/authentication.component */ "./src/app/authentication/authentication.component.ts");
/* harmony import */ var _guards_auth_guard__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./guards/auth-guard */ "./src/app/guards/auth-guard.ts");
/* harmony import */ var _guards_redirect_guard__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./guards/redirect-guard */ "./src/app/guards/redirect-guard.ts");







const routes = [
    {
        path: '',
        pathMatch: 'full',
        component: _authentication_authentication_component__WEBPACK_IMPORTED_MODULE_2__["AuthenticationComponent"],
        canActivate: [_guards_redirect_guard__WEBPACK_IMPORTED_MODULE_4__["RedirectGuard"]]
    },
    {
        path: 'home',
        loadChildren: () => __webpack_require__.e(/*! import() | home-home-module */ "home-home-module").then(__webpack_require__.bind(null, /*! ./home/home.module */ "./src/app/home/home.module.ts")).then(m => m.HomeModule),
        canActivate: [_guards_auth_guard__WEBPACK_IMPORTED_MODULE_3__["AuthGuard"]],
    }
];
class AppRoutingModule {
}
AppRoutingModule.ɵmod = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineNgModule"]({ type: AppRoutingModule });
AppRoutingModule.ɵinj = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjector"]({ factory: function AppRoutingModule_Factory(t) { return new (t || AppRoutingModule)(); }, imports: [[_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"].forRoot(routes)], _angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]] });
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsetNgModuleScope"](AppRoutingModule, { imports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]], exports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]] }); })();
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](AppRoutingModule, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"],
        args: [{
                imports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"].forRoot(routes)],
                exports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]]
            }]
    }], null, null); })();


/***/ }),

/***/ "./src/app/app.component.ts":
/*!**********************************!*\
  !*** ./src/app/app.component.ts ***!
  \**********************************/
/*! exports provided: AppComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppComponent", function() { return AppComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");



class AppComponent {
}
AppComponent.ɵfac = function AppComponent_Factory(t) { return new (t || AppComponent)(); };
AppComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: AppComponent, selectors: [["app-root"]], decls: 1, vars: 0, template: function AppComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](0, "router-outlet");
    } }, directives: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterOutlet"]], styles: ["\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2FwcC5jb21wb25lbnQuc2NzcyJ9 */"] });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](AppComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: 'app-root',
                templateUrl: './app.component.html',
                styleUrls: ['./app.component.scss']
            }]
    }], null, null); })();


/***/ }),

/***/ "./src/app/app.module.ts":
/*!*******************************!*\
  !*** ./src/app/app.module.ts ***!
  \*******************************/
/*! exports provided: AppModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppModule", function() { return AppModule; });
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/platform-browser */ "./node_modules/@angular/platform-browser/__ivy_ngcc__/fesm2015/platform-browser.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _app_routing_module__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./app-routing.module */ "./src/app/app-routing.module.ts");
/* harmony import */ var _app_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./app.component */ "./src/app/app.component.ts");
/* harmony import */ var _authentication_authentication_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./authentication/authentication.component */ "./src/app/authentication/authentication.component.ts");
/* harmony import */ var _authentication_login_form_login_form_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./authentication/login-form/login-form.component */ "./src/app/authentication/login-form/login-form.component.ts");
/* harmony import */ var _authentication_signup_form_signup_form_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./authentication/signup-form/signup-form.component */ "./src/app/authentication/signup-form/signup-form.component.ts");
/* harmony import */ var _authentication_form_action_texts_form_action_texts_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./authentication/form-action-texts/form-action-texts.component */ "./src/app/authentication/form-action-texts/form-action-texts.component.ts");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/__ivy_ngcc__/fesm2015/forms.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/http.js");
/* harmony import */ var _angular_fire__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! @angular/fire */ "./node_modules/@angular/fire/__ivy_ngcc__/fesm2015/angular-fire.js");
/* harmony import */ var _environments_environment__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ../environments/environment */ "./src/environments/environment.ts");
/* harmony import */ var _angular_fire_database__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! @angular/fire/database */ "./node_modules/@angular/fire/__ivy_ngcc__/fesm2015/angular-fire-database.js");
/* harmony import */ var _angular_fire_auth__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! @angular/fire/auth */ "./node_modules/@angular/fire/__ivy_ngcc__/fesm2015/angular-fire-auth.js");
/* harmony import */ var _angular_fire_messaging__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! @angular/fire/messaging */ "./node_modules/@angular/fire/__ivy_ngcc__/fesm2015/angular-fire-messaging.js");

















class AppModule {
}
AppModule.ɵmod = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineNgModule"]({ type: AppModule, bootstrap: [_app_component__WEBPACK_IMPORTED_MODULE_3__["AppComponent"]] });
AppModule.ɵinj = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineInjector"]({ factory: function AppModule_Factory(t) { return new (t || AppModule)(); }, imports: [[
            _angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__["BrowserModule"],
            _app_routing_module__WEBPACK_IMPORTED_MODULE_2__["AppRoutingModule"],
            _angular_forms__WEBPACK_IMPORTED_MODULE_8__["ReactiveFormsModule"],
            _angular_forms__WEBPACK_IMPORTED_MODULE_8__["FormsModule"],
            _angular_common_http__WEBPACK_IMPORTED_MODULE_9__["HttpClientModule"],
            _angular_fire_database__WEBPACK_IMPORTED_MODULE_12__["AngularFireDatabaseModule"],
            _angular_fire_auth__WEBPACK_IMPORTED_MODULE_13__["AngularFireAuthModule"],
            _angular_fire_messaging__WEBPACK_IMPORTED_MODULE_14__["AngularFireMessagingModule"],
            _angular_fire__WEBPACK_IMPORTED_MODULE_10__["AngularFireModule"].initializeApp(_environments_environment__WEBPACK_IMPORTED_MODULE_11__["environment"].firebase)
        ]] });
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵsetNgModuleScope"](AppModule, { declarations: [_app_component__WEBPACK_IMPORTED_MODULE_3__["AppComponent"],
        _authentication_authentication_component__WEBPACK_IMPORTED_MODULE_4__["AuthenticationComponent"],
        _authentication_login_form_login_form_component__WEBPACK_IMPORTED_MODULE_5__["LoginFormComponent"],
        _authentication_signup_form_signup_form_component__WEBPACK_IMPORTED_MODULE_6__["SignupFormComponent"],
        _authentication_form_action_texts_form_action_texts_component__WEBPACK_IMPORTED_MODULE_7__["FormActionTextsComponent"]], imports: [_angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__["BrowserModule"],
        _app_routing_module__WEBPACK_IMPORTED_MODULE_2__["AppRoutingModule"],
        _angular_forms__WEBPACK_IMPORTED_MODULE_8__["ReactiveFormsModule"],
        _angular_forms__WEBPACK_IMPORTED_MODULE_8__["FormsModule"],
        _angular_common_http__WEBPACK_IMPORTED_MODULE_9__["HttpClientModule"],
        _angular_fire_database__WEBPACK_IMPORTED_MODULE_12__["AngularFireDatabaseModule"],
        _angular_fire_auth__WEBPACK_IMPORTED_MODULE_13__["AngularFireAuthModule"],
        _angular_fire_messaging__WEBPACK_IMPORTED_MODULE_14__["AngularFireMessagingModule"], _angular_fire__WEBPACK_IMPORTED_MODULE_10__["AngularFireModule"]] }); })();
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵsetClassMetadata"](AppModule, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"],
        args: [{
                declarations: [
                    _app_component__WEBPACK_IMPORTED_MODULE_3__["AppComponent"],
                    _authentication_authentication_component__WEBPACK_IMPORTED_MODULE_4__["AuthenticationComponent"],
                    _authentication_login_form_login_form_component__WEBPACK_IMPORTED_MODULE_5__["LoginFormComponent"],
                    _authentication_signup_form_signup_form_component__WEBPACK_IMPORTED_MODULE_6__["SignupFormComponent"],
                    _authentication_form_action_texts_form_action_texts_component__WEBPACK_IMPORTED_MODULE_7__["FormActionTextsComponent"],
                ],
                imports: [
                    _angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__["BrowserModule"],
                    _app_routing_module__WEBPACK_IMPORTED_MODULE_2__["AppRoutingModule"],
                    _angular_forms__WEBPACK_IMPORTED_MODULE_8__["ReactiveFormsModule"],
                    _angular_forms__WEBPACK_IMPORTED_MODULE_8__["FormsModule"],
                    _angular_common_http__WEBPACK_IMPORTED_MODULE_9__["HttpClientModule"],
                    _angular_fire_database__WEBPACK_IMPORTED_MODULE_12__["AngularFireDatabaseModule"],
                    _angular_fire_auth__WEBPACK_IMPORTED_MODULE_13__["AngularFireAuthModule"],
                    _angular_fire_messaging__WEBPACK_IMPORTED_MODULE_14__["AngularFireMessagingModule"],
                    _angular_fire__WEBPACK_IMPORTED_MODULE_10__["AngularFireModule"].initializeApp(_environments_environment__WEBPACK_IMPORTED_MODULE_11__["environment"].firebase)
                ],
                bootstrap: [_app_component__WEBPACK_IMPORTED_MODULE_3__["AppComponent"]]
            }]
    }], null, null); })();


/***/ }),

/***/ "./src/app/authentication/authentication.component.ts":
/*!************************************************************!*\
  !*** ./src/app/authentication/authentication.component.ts ***!
  \************************************************************/
/*! exports provided: AuthenticationComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AuthenticationComponent", function() { return AuthenticationComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _services_auth_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../services/auth.service */ "./src/app/services/auth.service.ts");
/* harmony import */ var _login_form_login_form_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./login-form/login-form.component */ "./src/app/authentication/login-form/login-form.component.ts");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/common.js");
/* harmony import */ var _signup_form_signup_form_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./signup-form/signup-form.component */ "./src/app/authentication/signup-form/signup-form.component.ts");
/* harmony import */ var _form_action_texts_form_action_texts_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./form-action-texts/form-action-texts.component */ "./src/app/authentication/form-action-texts/form-action-texts.component.ts");








const _c0 = function (a0) { return { "move-log--in-wrapper-mobile": a0 }; };
class AuthenticationComponent {
    constructor(authService) {
        this.authService = authService;
    }
    ngOnInit() {
        this.authService.calculateRemainingLoginTime();
    }
    moveForms(data) {
        this.initiateSlide = data;
    }
}
AuthenticationComponent.ɵfac = function AuthenticationComponent_Factory(t) { return new (t || AuthenticationComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_services_auth_service__WEBPACK_IMPORTED_MODULE_1__["AuthService"])); };
AuthenticationComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: AuthenticationComponent, selectors: [["app-authentication"]], features: [_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵProvidersFeature"]([_services_auth_service__WEBPACK_IMPORTED_MODULE_1__["AuthService"]])], decls: 5, vars: 5, consts: [[1, "form-wrapper"], [1, "form-body"], [3, "ngClass", "formMoveInitiated"], [3, "formMoveInitiated"], [3, "moveForms"]], template: function AuthenticationComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](2, "app-login-form", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](3, "app-signup-form", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "app-form-action-texts", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("moveForms", function AuthenticationComponent_Template_app_form_action_texts_moveForms_4_listener($event) { return ctx.moveForms($event); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngClass", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction1"](3, _c0, ctx.initiateSlide))("formMoveInitiated", ctx.initiateSlide);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("formMoveInitiated", ctx.initiateSlide);
    } }, directives: [_login_form_login_form_component__WEBPACK_IMPORTED_MODULE_2__["LoginFormComponent"], _angular_common__WEBPACK_IMPORTED_MODULE_3__["NgClass"], _signup_form_signup_form_component__WEBPACK_IMPORTED_MODULE_4__["SignupFormComponent"], _form_action_texts_form_action_texts_component__WEBPACK_IMPORTED_MODULE_5__["FormActionTextsComponent"]], styles: ["countdown[_ngcontent-%COMP%] {\n  padding: 10px 25px;\n  border-radius: 10px;\n}\n\n.hide-input-validation[_ngcontent-%COMP%] {\n  display: none;\n}\n.slide-in-password[_ngcontent-%COMP%] {\n  transform: translateX(0) !important;\n}\n\n.form-wrapper[_ngcontent-%COMP%] {\n  width: 100%;\n  height: 100%;\n  display: flex;\n  align-items: center;\n  justify-content: center;\n}\n.form-wrapper[_ngcontent-%COMP%]   .form-body[_ngcontent-%COMP%] {\n  position: relative;\n  display: flex;\n  width: 700px;\n  height: 400px;\n  box-shadow: 0 17px 30px -11px rgba(0, 0, 0, 0.61);\n  border-radius: 10px;\n  overflow: hidden;\n}\n@media screen and (max-width: 450px) {\n  .form-wrapper[_ngcontent-%COMP%]   .form-body[_ngcontent-%COMP%] {\n    width: 350px;\n  }\n}\n.form-wrapper[_ngcontent-%COMP%]   .form-body[_ngcontent-%COMP%]   app-login-form[_ngcontent-%COMP%], .form-wrapper[_ngcontent-%COMP%]   .form-body[_ngcontent-%COMP%]   app-signup-form[_ngcontent-%COMP%] {\n  width: 50%;\n  transition: all 0.6s ease-in-out;\n  transition-delay: 0.05s;\n  transform: translateZ(0);\n}\n@media screen and (max-width: 450px) {\n  .form-wrapper[_ngcontent-%COMP%]   .form-body[_ngcontent-%COMP%]   app-login-form[_ngcontent-%COMP%], .form-wrapper[_ngcontent-%COMP%]   .form-body[_ngcontent-%COMP%]   app-signup-form[_ngcontent-%COMP%] {\n    width: 100%;\n    transition: all 0.3s ease-in-out;\n    border-radius: 10px;\n  }\n}\n@media screen and (max-width: 450px) {\n  .move-log--in-wrapper-mobile[_ngcontent-%COMP%] {\n    margin-left: 350px;\n  }\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvc2hhcmVkL2dlbmVyYWwtc3R5bGUvZ2VuZXJhbC1zdHlsZS5zY3NzIiwic3JjL2FwcC9hdXRoZW50aWNhdGlvbi9hdXRoZW50aWNhdGlvbi5jb21wb25lbnQuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFDQSwyREFBQTtBQXlCQTtFQUNFLGtCQUFBO0VBQ0EsbUJBQUE7QUN4QkY7QUQyQkEsNEJBQUE7QUFFQTtFQUNFLGFBQUE7QUN6QkY7QUQ0QkE7RUFDRSxtQ0FBQTtBQ3pCRjtBRDRCQSxXQUFBO0FDdkNBO0VBQ0UsV0FBQTtFQUNBLFlBQUE7RUFDQSxhQUFBO0VBQ0EsbUJBQUE7RUFDQSx1QkFBQTtBQWVGO0FBYkU7RUFDRSxrQkFBQTtFQUNBLGFBQUE7RUFDQSxZQUFBO0VBQ0EsYUFBQTtFQUdBLGlEQUFBO0VBQ0EsbUJBQUE7RUFDQSxnQkFBQTtBQWVKO0FBYkk7RUFYRjtJQVlJLFlBQUE7RUFnQko7QUFDRjtBQWRJOztFQUVFLFVBQUE7RURSSixnQ0FBQTtFQ1VJLHVCQUFBO0VBQ0Esd0JBQUE7QUFnQk47QUFkTTtFQVBGOztJQVFJLFdBQUE7SURkTixnQ0FBQTtJQ2dCTSxtQkFBQTtFQWtCTjtBQUNGO0FBWkU7RUFERjtJQUVJLGtCQUFBO0VBZ0JGO0FBQ0YiLCJmaWxlIjoic3JjL2FwcC9hdXRoZW50aWNhdGlvbi9hdXRoZW50aWNhdGlvbi5jb21wb25lbnQuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbIlxuLyogQmFzZSB0ZXh0IGNvbG9ycywgdHJhbnNpdGlvbnMgYW5kIGJhY2tncm91bmQgZ3JhZGllbnRzICovXG4kYmFzZS10ZXh0LWNvbG9yOiAjMzYyODQzO1xuJHJveWFsLXJlZC1ncmFkaWVudDogbGluZWFyLWdyYWRpZW50KC02MGRlZywgI2ZmNmU2ZSAwJSwgIzc5MDkwOSAxMDAlKTtcbiRlcnJvci1jb2xvcjogI2ZmNmU2ZTtcbiRiYXNlLWdyZWVuLWNvbG9yOiAjNDFjN2FmO1xuJGZsYXQtZ3JlZW4tZ3JhZGllbnQ6IGxpbmVhci1ncmFkaWVudCgtNjBkZWcsICM0MWM3YWYgMCUsICM1NGUzOGUgMTAwJSk7XG4kZmxhdC1ncmVlbi1ncmFkaWVudC1yZXZlcnNlOiBsaW5lYXItZ3JhZGllbnQoLTYwZGVnLCAjNTRlMzhlIDAlLCAjNDFjN2FmIDEwMCUpO1xuJGhvdmVyLWJ1dHRvbi1jb2xvcjogI2NkMjIyMjtcbiRwaW5rLWRlZmF1bHQ6ICNmZjZlNmU7XG4kY29udHJvbC1wYW5lbC13aWR0aDogNDAwcHg7XG4kZGVmYXVsdC10cmFuc2l0aW9uOiBhbGwgLjFzIGxpbmVhcjtcbiRiYXNlLWZvbnQtc2l6ZTogMjBweDtcbiRzbWFsbGVyLWJhc2UtZm9udC1zaXplOiAkYmFzZS1mb250LXNpemUgLSAycHg7XG4kZ2VuZXJhbC1mb250LWZhbWlseTogUm9ib3RvLCBcIkhlbHZldGljYSBOZXVlXCIsIHNhbnMtc2VyaWY7XG4kZGlzYWJsZWQtY3Vyc29yOiBub3QtYWxsb3dlZDtcblxuQG1peGluIHRyYW5zaXRpb24tYmx1ZXByaW50KCR0aW1lKSB7XG4gIHRyYW5zaXRpb246IGFsbCAkdGltZSBlYXNlLWluLW91dDtcbn1cblxuQG1peGluIHNxdWFyZS1zaXplKCR3aWR0aCwgJGhlaWdodDogJHdpZHRoKSB7XG4gIHdpZHRoOiAkd2lkdGg7XG4gIGhlaWdodDogJGhlaWdodDtcbn1cblxuY291bnRkb3duIHtcbiAgcGFkZGluZzogMTBweCAyNXB4O1xuICBib3JkZXItcmFkaXVzOiAxMHB4O1xufVxuXG4vKiBGb3JtIFZhbGlkYXRpb24gY2xhc3NlcyAqL1xuXG4uaGlkZS1pbnB1dC12YWxpZGF0aW9uIHtcbiAgZGlzcGxheTogbm9uZTtcbn1cblxuLnNsaWRlLWluLXBhc3N3b3JkIHtcbiAgdHJhbnNmb3JtOiB0cmFuc2xhdGVYKDApICFpbXBvcnRhbnQ7XG59XG5cbi8qIG1peGlucyAqL1xuXG5AbWl4aW4gYmFzZS1ib3gtc2hhZG93IHtcbiAgLXdlYmtpdC1ib3gtc2hhZG93OiAtMXB4IDZweCAxMnB4IC01cHggIzAwMDAwMDtcbiAgYm94LXNoYWRvdzogLTFweCA2cHggMTJweCAtNXB4ICMwMDAwMDA7XG59XG5cbkBtaXhpbiBmbGV4LWNlbnRlciB7XG4gIGRpc3BsYXk6IGZsZXg7XG4gIGZsZXgtd3JhcDogd3JhcDtcbiAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XG59XG4iLCJAaW1wb3J0ICcuLi9zaGFyZWQvZ2VuZXJhbC1zdHlsZS9nZW5lcmFsLXN0eWxlJztcblxuLmZvcm0td3JhcHBlciB7XG4gIHdpZHRoOiAxMDAlO1xuICBoZWlnaHQ6IDEwMCU7XG4gIGRpc3BsYXk6IGZsZXg7XG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG4gIGp1c3RpZnktY29udGVudDogY2VudGVyO1xuXG4gIC5mb3JtLWJvZHkge1xuICAgIHBvc2l0aW9uOiByZWxhdGl2ZTtcbiAgICBkaXNwbGF5OiBmbGV4O1xuICAgIHdpZHRoOiA3MDBweDtcbiAgICBoZWlnaHQ6IDQwMHB4O1xuICAgIC13ZWJraXQtYm94LXNoYWRvdzogMCAxN3B4IDMwcHggLTExcHggcmdiYSgwLCAwLCAwLCAwLjYxKTtcbiAgICAtbW96LWJveC1zaGFkb3c6IDAgMTdweCAzMHB4IC0xMXB4IHJnYmEoMCwgMCwgMCwgMC42MSk7XG4gICAgYm94LXNoYWRvdzogMCAxN3B4IDMwcHggLTExcHggcmdiYSgwLCAwLCAwLCAwLjYxKTtcbiAgICBib3JkZXItcmFkaXVzOiAxMHB4O1xuICAgIG92ZXJmbG93OiBoaWRkZW47XG5cbiAgICBAbWVkaWEgc2NyZWVuIGFuZCAobWF4LXdpZHRoOiA0NTBweCkge1xuICAgICAgd2lkdGg6IDM1MHB4O1xuICAgIH1cblxuICAgIGFwcC1sb2dpbi1mb3JtLFxuICAgIGFwcC1zaWdudXAtZm9ybSB7XG4gICAgICB3aWR0aDogNTAlO1xuICAgICAgQGluY2x1ZGUgdHJhbnNpdGlvbi1ibHVlcHJpbnQoMC42cyk7XG4gICAgICB0cmFuc2l0aW9uLWRlbGF5OiAuMDVzO1xuICAgICAgdHJhbnNmb3JtOiB0cmFuc2xhdGVaKDApO1xuXG4gICAgICBAbWVkaWEgc2NyZWVuIGFuZCAobWF4LXdpZHRoOiA0NTBweCkge1xuICAgICAgICB3aWR0aDogMTAwJTtcbiAgICAgICAgQGluY2x1ZGUgdHJhbnNpdGlvbi1ibHVlcHJpbnQoMC4zcyk7XG4gICAgICAgIGJvcmRlci1yYWRpdXM6IDEwcHg7XG4gICAgICB9XG4gICAgfVxuICB9XG59XG5cbi5tb3ZlLWxvZy0taW4td3JhcHBlci1tb2JpbGUge1xuICBAbWVkaWEgc2NyZWVuIGFuZCAobWF4LXdpZHRoOiA0NTBweCkge1xuICAgIG1hcmdpbi1sZWZ0OiAzNTBweDtcbiAgfVxufVxuIl19 */"] });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](AuthenticationComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: 'app-authentication',
                templateUrl: './authentication.component.html',
                styleUrls: ['./authentication.component.scss'],
                providers: [_services_auth_service__WEBPACK_IMPORTED_MODULE_1__["AuthService"]]
            }]
    }], function () { return [{ type: _services_auth_service__WEBPACK_IMPORTED_MODULE_1__["AuthService"] }]; }, null); })();


/***/ }),

/***/ "./src/app/authentication/form-action-texts/form-action-texts.component.ts":
/*!*********************************************************************************!*\
  !*** ./src/app/authentication/form-action-texts/form-action-texts.component.ts ***!
  \*********************************************************************************/
/*! exports provided: FormActionTextsComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "FormActionTextsComponent", function() { return FormActionTextsComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _services_auth_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../services/auth.service */ "./src/app/services/auth.service.ts");
/* harmony import */ var _services_cross_component_communication_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../services/cross-component-communication.service */ "./src/app/services/cross-component-communication.service.ts");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/common.js");





const _c0 = function (a0) { return { "deactivate": a0 }; };
function FormActionTextsComponent_button_14_Template(rf, ctx) { if (rf & 1) {
    const _r2 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "button", 6);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function FormActionTextsComponent_button_14_Template_button_click_0_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r2); const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](); return ctx_r1.toggleFormMovements(); });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipe"](1, "async");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](2, "Sign up ");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r0 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngClass", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction1"](3, _c0, _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipeBind1"](1, 1, ctx_r0.isUserLoggedIn) === true));
} }
const _c1 = function (a0) { return { "move-main-color-layer": a0 }; };
const _c2 = function (a0) { return { "move-login-text": a0 }; };
class FormActionTextsComponent {
    constructor(authService, crossComponentService) {
        this.authService = authService;
        this.crossComponentService = crossComponentService;
        this.slideElements = false;
        this.isUserSignedUp = this.authService.signedUpSubj;
        this.isUserLoggedIn = this.authService.loggedInSubj;
        this.moveForms = new _angular_core__WEBPACK_IMPORTED_MODULE_0__["EventEmitter"]();
    }
    ngOnInit() {
    }
    toggleFormMovements() {
        // used to reset forms on sliding
        if (!this.slideElements) {
            this.crossComponentService.resetLoginForm$.next(true);
        }
        else {
            this.crossComponentService.resetSignUpForm$.next(true);
        }
        this.slideElements = !this.slideElements;
        this.moveForms.emit(this.slideElements);
    }
}
FormActionTextsComponent.ɵfac = function FormActionTextsComponent_Factory(t) { return new (t || FormActionTextsComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_services_auth_service__WEBPACK_IMPORTED_MODULE_1__["AuthService"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_services_cross_component_communication_service__WEBPACK_IMPORTED_MODULE_2__["CrossComponentCommunicationService"])); };
FormActionTextsComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: FormActionTextsComponent, selectors: [["app-form-action-texts"]], inputs: { triggerFormMovement: "triggerFormMovement" }, outputs: { moveForms: "moveForms" }, decls: 16, vars: 9, consts: [[1, "floating-layout-wrapper", 3, "ngClass"], [1, "floating-texts-wrapper"], [1, "floating-text-login", 3, "ngClass"], [3, "click"], [1, "floating-text-sign-up"], [3, "ngClass", "click", 4, "ngIf"], [3, "ngClass", "click"]], template: function FormActionTextsComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "div", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "h2");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](4, "Howdy!");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "p");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](6, "Please fill in the details so that we start getting to know you!");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](7, "button", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function FormActionTextsComponent_Template_button_click_7_listener() { return ctx.toggleFormMovements(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](8, "Log in");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](9, "div", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](10, "h2");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](11, "Good to have you back!");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](12, "p");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](13, "Please login using your credentials");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](14, FormActionTextsComponent_button_14_Template, 3, 5, "button", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipe"](15, "async");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngClass", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction1"](5, _c1, ctx.slideElements));
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngClass", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction1"](7, _c2, ctx.slideElements));
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](12);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipeBind1"](15, 3, ctx.isUserSignedUp) !== true);
    } }, directives: [_angular_common__WEBPACK_IMPORTED_MODULE_3__["NgClass"], _angular_common__WEBPACK_IMPORTED_MODULE_3__["NgIf"]], pipes: [_angular_common__WEBPACK_IMPORTED_MODULE_3__["AsyncPipe"]], styles: ["countdown[_ngcontent-%COMP%] {\n  padding: 10px 25px;\n  border-radius: 10px;\n}\n\n.hide-input-validation[_ngcontent-%COMP%] {\n  display: none;\n}\n.slide-in-password[_ngcontent-%COMP%] {\n  transform: translateX(0) !important;\n}\n\n.floating-layout-wrapper[_ngcontent-%COMP%] {\n  position: absolute;\n  transform: translateZ(0);\n  right: 0;\n  width: 50%;\n  display: flex;\n  justify-content: center;\n  align-items: center;\n  z-index: 2;\n  height: 100%;\n  overflow: hidden;\n  flex-wrap: wrap;\n  background: linear-gradient(-60deg, #41c7af 0%, #54e38e 100%);\n  transition: all 0.7s ease-in-out;\n}\n@media screen and (max-width: 450px) {\n  .floating-layout-wrapper[_ngcontent-%COMP%] {\n    height: 50px;\n    bottom: 0;\n    border-bottom-right-radius: 10px;\n    border-bottom-left-radius: 10px;\n  }\n}\n.floating-layout-wrapper[_ngcontent-%COMP%]   .floating-texts-wrapper[_ngcontent-%COMP%] {\n  display: flex;\n}\n.floating-layout-wrapper[_ngcontent-%COMP%]   .floating-texts-wrapper[_ngcontent-%COMP%]   div[_ngcontent-%COMP%] {\n  width: 350px;\n  text-align: center;\n  color: white;\n  transition: all 0.7s ease-in-out;\n}\n@media screen and (max-width: 450px) {\n  .floating-layout-wrapper[_ngcontent-%COMP%]   .floating-texts-wrapper[_ngcontent-%COMP%]   div[_ngcontent-%COMP%] {\n    transition: all 0.3s ease-in-out;\n  }\n}\n.floating-layout-wrapper[_ngcontent-%COMP%]   .floating-texts-wrapper[_ngcontent-%COMP%]   div[_ngcontent-%COMP%]   p[_ngcontent-%COMP%] {\n  padding: 0 20px;\n  line-height: 22px;\n}\n@media screen and (max-width: 450px) {\n  .floating-layout-wrapper[_ngcontent-%COMP%]   .floating-texts-wrapper[_ngcontent-%COMP%]   div[_ngcontent-%COMP%]   p[_ngcontent-%COMP%] {\n    display: none;\n  }\n}\n.floating-layout-wrapper[_ngcontent-%COMP%]   .floating-texts-wrapper[_ngcontent-%COMP%]   .floating-text-login[_ngcontent-%COMP%] {\n  margin-left: -400px;\n  transform: translateZ(0);\n}\n.floating-layout-wrapper[_ngcontent-%COMP%]   .floating-texts-wrapper[_ngcontent-%COMP%]   .floating-text-sign-up[_ngcontent-%COMP%] {\n  text-align: center;\n  color: white;\n  margin-left: 50px;\n  border-radius: 10px;\n  transform: translateZ(0);\n}\n.floating-layout-wrapper[_ngcontent-%COMP%]   .floating-texts-wrapper[_ngcontent-%COMP%]   .floating-text-sign-up[_ngcontent-%COMP%]   p[_ngcontent-%COMP%] {\n  padding: 0 20px;\n  line-height: 22px;\n}\n@media screen and (max-width: 450px) {\n  .floating-layout-wrapper[_ngcontent-%COMP%]   .floating-texts-wrapper[_ngcontent-%COMP%]   .floating-text-sign-up[_ngcontent-%COMP%]   p[_ngcontent-%COMP%] {\n    display: none;\n  }\n}\n.floating-layout-wrapper[_ngcontent-%COMP%]   .floating-texts-wrapper[_ngcontent-%COMP%]   button[_ngcontent-%COMP%] {\n  border: 1px solid white;\n  border-radius: 15px;\n  font-family: Roboto, \"Helvetica Neue\", sans-serif;\n  color: white;\n  margin-top: 10px;\n  padding: 8px 35px;\n  background-color: transparent;\n  font-weight: 500;\n  transition: all 0.2s ease-in-out;\n}\n.floating-layout-wrapper[_ngcontent-%COMP%]   .floating-texts-wrapper[_ngcontent-%COMP%]   button.deactivate[_ngcontent-%COMP%] {\n  pointer-events: none;\n  background-color: grey;\n  border: none;\n  cursor: not-allowed;\n}\n.floating-layout-wrapper[_ngcontent-%COMP%]   .floating-texts-wrapper[_ngcontent-%COMP%]   button[_ngcontent-%COMP%]:hover {\n  cursor: pointer;\n  background-color: white;\n  color: #362843;\n  border-color: transparent;\n  outline: none;\n}\n.floating-layout-wrapper[_ngcontent-%COMP%]   .floating-texts-wrapper[_ngcontent-%COMP%]   button[_ngcontent-%COMP%]:focus {\n  outline: none;\n}\n@media screen and (max-width: 450px) {\n  .floating-layout-wrapper[_ngcontent-%COMP%]   .floating-texts-wrapper[_ngcontent-%COMP%]   button[_ngcontent-%COMP%] {\n    border: none;\n    width: 100%;\n    font-size: 20px;\n    border-radius: 0;\n    padding: 14px;\n    margin: 0;\n  }\n}\n.floating-layout-wrapper[_ngcontent-%COMP%]   .floating-texts-wrapper[_ngcontent-%COMP%]   h2[_ngcontent-%COMP%] {\n  color: white;\n  font-size: 27px;\n  letter-spacing: 0.04rem;\n}\n@media screen and (max-width: 450px) {\n  .floating-layout-wrapper[_ngcontent-%COMP%]   .floating-texts-wrapper[_ngcontent-%COMP%]   h2[_ngcontent-%COMP%] {\n    display: none;\n  }\n}\n@media screen and (max-width: 450px) {\n  .floating-layout-wrapper[_ngcontent-%COMP%] {\n    width: 100%;\n  }\n}\n.move-main-color-layer[_ngcontent-%COMP%] {\n  margin-right: 350px;\n}\n@media screen and (max-width: 450px) {\n  .move-main-color-layer[_ngcontent-%COMP%] {\n    margin: 0;\n  }\n}\n.move-login-text[_ngcontent-%COMP%] {\n  margin-left: 400px !important;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvc2hhcmVkL2dlbmVyYWwtc3R5bGUvZ2VuZXJhbC1zdHlsZS5zY3NzIiwic3JjL2FwcC9hdXRoZW50aWNhdGlvbi9mb3JtLWFjdGlvbi10ZXh0cy9mb3JtLWFjdGlvbi10ZXh0cy5jb21wb25lbnQuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFDQSwyREFBQTtBQXlCQTtFQUNFLGtCQUFBO0VBQ0EsbUJBQUE7QUN4QkY7QUQyQkEsNEJBQUE7QUFFQTtFQUNFLGFBQUE7QUN6QkY7QUQ0QkE7RUFDRSxtQ0FBQTtBQ3pCRjtBRDRCQSxXQUFBO0FDdkNBO0VBQ0Usa0JBQUE7RUFDQSx3QkFBQTtFQUNBLFFBQUE7RUFDQSxVQUFBO0VBQ0EsYUFBQTtFQUNBLHVCQUFBO0VBQ0EsbUJBQUE7RUFDQSxVQUFBO0VBQ0EsWUFBQTtFQUNBLGdCQUFBO0VBQ0EsZUFBQTtFQUNBLDZERFJvQjtFQVlwQixnQ0FBQTtBQ1lGO0FBWkU7RUFoQkY7SUFpQkksWUFBQTtJQUNBLFNBQUE7SUFDQSxnQ0FBQTtJQUNBLCtCQUFBO0VBZUY7QUFDRjtBQWJFO0VBQ0UsYUFBQTtBQWVKO0FBYkk7RUFDRSxZQUFBO0VBQ0Esa0JBQUE7RUFDQSxZQUFBO0VEYkosZ0NBQUE7QUM2QkY7QUFaTTtFQVBGO0lEVkYsZ0NBQUE7RUNpQ0E7QUFDRjtBQVpNO0VBQ0UsZUFBQTtFQUNBLGlCQUFBO0FBY1I7QUFaUTtFQUpGO0lBS0ksYUFBQTtFQWVSO0FBQ0Y7QUFYSTtFQUNFLG1CQUFBO0VBQ0Esd0JBQUE7QUFhTjtBQVZJO0VBQ0Usa0JBQUE7RUFDQSxZQUFBO0VBQ0EsaUJBQUE7RUFDQSxtQkFBQTtFQUNBLHdCQUFBO0FBWU47QUFWTTtFQUNFLGVBQUE7RUFDQSxpQkFBQTtBQVlSO0FBVlE7RUFKRjtJQUtJLGFBQUE7RUFhUjtBQUNGO0FBVEk7RUFDRSx1QkFBQTtFQUNBLG1CQUFBO0VBQ0EsaUREN0RnQjtFQzhEaEIsWUFBQTtFQUNBLGdCQUFBO0VBQ0EsaUJBQUE7RUFDQSw2QkFBQTtFQUNBLGdCQUFBO0VEOURKLGdDQUFBO0FDMEVGO0FBUk07RUFDRSxvQkFBQTtFQUNBLHNCQUFBO0VBQ0EsWUFBQTtFQUNBLG1CRHpFVTtBQ21GbEI7QUFQTTtFQUNFLGVBQUE7RUFDQSx1QkFBQTtFQUNBLGNENUZVO0VDNkZWLHlCQUFBO0VBQ0EsYUFBQTtBQVNSO0FBTk07RUFDRSxhQUFBO0FBUVI7QUFMTTtFQS9CRjtJQWdDSSxZQUFBO0lBQ0EsV0FBQTtJQUNBLGVBQUE7SUFDQSxnQkFBQTtJQUNBLGFBQUE7SUFDQSxTQUFBO0VBUU47QUFDRjtBQUxJO0VBQ0UsWUFBQTtFQUNBLGVBQUE7RUFDQSx1QkFBQTtBQU9OO0FBTE07RUFMRjtJQU1HLGFBQUE7RUFRTDtBQUNGO0FBSkU7RUExSEY7SUEySEksV0FBQTtFQU9GO0FBQ0Y7QUFKQTtFQUNFLG1CQUFBO0FBT0Y7QUFMRTtFQUhGO0lBSUksU0FBQTtFQVFGO0FBQ0Y7QUFMQTtFQUNFLDZCQUFBO0FBUUYiLCJmaWxlIjoic3JjL2FwcC9hdXRoZW50aWNhdGlvbi9mb3JtLWFjdGlvbi10ZXh0cy9mb3JtLWFjdGlvbi10ZXh0cy5jb21wb25lbnQuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbIlxuLyogQmFzZSB0ZXh0IGNvbG9ycywgdHJhbnNpdGlvbnMgYW5kIGJhY2tncm91bmQgZ3JhZGllbnRzICovXG4kYmFzZS10ZXh0LWNvbG9yOiAjMzYyODQzO1xuJHJveWFsLXJlZC1ncmFkaWVudDogbGluZWFyLWdyYWRpZW50KC02MGRlZywgI2ZmNmU2ZSAwJSwgIzc5MDkwOSAxMDAlKTtcbiRlcnJvci1jb2xvcjogI2ZmNmU2ZTtcbiRiYXNlLWdyZWVuLWNvbG9yOiAjNDFjN2FmO1xuJGZsYXQtZ3JlZW4tZ3JhZGllbnQ6IGxpbmVhci1ncmFkaWVudCgtNjBkZWcsICM0MWM3YWYgMCUsICM1NGUzOGUgMTAwJSk7XG4kZmxhdC1ncmVlbi1ncmFkaWVudC1yZXZlcnNlOiBsaW5lYXItZ3JhZGllbnQoLTYwZGVnLCAjNTRlMzhlIDAlLCAjNDFjN2FmIDEwMCUpO1xuJGhvdmVyLWJ1dHRvbi1jb2xvcjogI2NkMjIyMjtcbiRwaW5rLWRlZmF1bHQ6ICNmZjZlNmU7XG4kY29udHJvbC1wYW5lbC13aWR0aDogNDAwcHg7XG4kZGVmYXVsdC10cmFuc2l0aW9uOiBhbGwgLjFzIGxpbmVhcjtcbiRiYXNlLWZvbnQtc2l6ZTogMjBweDtcbiRzbWFsbGVyLWJhc2UtZm9udC1zaXplOiAkYmFzZS1mb250LXNpemUgLSAycHg7XG4kZ2VuZXJhbC1mb250LWZhbWlseTogUm9ib3RvLCBcIkhlbHZldGljYSBOZXVlXCIsIHNhbnMtc2VyaWY7XG4kZGlzYWJsZWQtY3Vyc29yOiBub3QtYWxsb3dlZDtcblxuQG1peGluIHRyYW5zaXRpb24tYmx1ZXByaW50KCR0aW1lKSB7XG4gIHRyYW5zaXRpb246IGFsbCAkdGltZSBlYXNlLWluLW91dDtcbn1cblxuQG1peGluIHNxdWFyZS1zaXplKCR3aWR0aCwgJGhlaWdodDogJHdpZHRoKSB7XG4gIHdpZHRoOiAkd2lkdGg7XG4gIGhlaWdodDogJGhlaWdodDtcbn1cblxuY291bnRkb3duIHtcbiAgcGFkZGluZzogMTBweCAyNXB4O1xuICBib3JkZXItcmFkaXVzOiAxMHB4O1xufVxuXG4vKiBGb3JtIFZhbGlkYXRpb24gY2xhc3NlcyAqL1xuXG4uaGlkZS1pbnB1dC12YWxpZGF0aW9uIHtcbiAgZGlzcGxheTogbm9uZTtcbn1cblxuLnNsaWRlLWluLXBhc3N3b3JkIHtcbiAgdHJhbnNmb3JtOiB0cmFuc2xhdGVYKDApICFpbXBvcnRhbnQ7XG59XG5cbi8qIG1peGlucyAqL1xuXG5AbWl4aW4gYmFzZS1ib3gtc2hhZG93IHtcbiAgLXdlYmtpdC1ib3gtc2hhZG93OiAtMXB4IDZweCAxMnB4IC01cHggIzAwMDAwMDtcbiAgYm94LXNoYWRvdzogLTFweCA2cHggMTJweCAtNXB4ICMwMDAwMDA7XG59XG5cbkBtaXhpbiBmbGV4LWNlbnRlciB7XG4gIGRpc3BsYXk6IGZsZXg7XG4gIGZsZXgtd3JhcDogd3JhcDtcbiAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XG59XG4iLCJAaW1wb3J0ICcuLi8uLi9zaGFyZWQvZ2VuZXJhbC1zdHlsZS9nZW5lcmFsLXN0eWxlJztcblxuLmZsb2F0aW5nLWxheW91dC13cmFwcGVyIHtcbiAgcG9zaXRpb246IGFic29sdXRlO1xuICB0cmFuc2Zvcm06IHRyYW5zbGF0ZVooMCk7XG4gIHJpZ2h0OiAwO1xuICB3aWR0aDogNTAlO1xuICBkaXNwbGF5OiBmbGV4O1xuICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbiAgei1pbmRleDogMjtcbiAgaGVpZ2h0OiAxMDAlO1xuICBvdmVyZmxvdzpoaWRkZW47XG4gIGZsZXgtd3JhcDogd3JhcDtcbiAgYmFja2dyb3VuZDogJGZsYXQtZ3JlZW4tZ3JhZGllbnQ7XG5cbiAgQGluY2x1ZGUgdHJhbnNpdGlvbi1ibHVlcHJpbnQoMC43cyk7XG5cbiAgQG1lZGlhIHNjcmVlbiBhbmQgKG1heC13aWR0aDogNDUwcHgpIHtcbiAgICBoZWlnaHQ6IDUwcHg7XG4gICAgYm90dG9tOiAwO1xuICAgIGJvcmRlci1ib3R0b20tcmlnaHQtcmFkaXVzOiAxMHB4O1xuICAgIGJvcmRlci1ib3R0b20tbGVmdC1yYWRpdXM6IDEwcHg7XG4gIH1cblxuICAuZmxvYXRpbmctdGV4dHMtd3JhcHBlciB7XG4gICAgZGlzcGxheTogZmxleDtcblxuICAgIGRpdiB7XG4gICAgICB3aWR0aDogMzUwcHg7XG4gICAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XG4gICAgICBjb2xvcjogd2hpdGU7XG5cbiAgICAgIEBpbmNsdWRlIHRyYW5zaXRpb24tYmx1ZXByaW50KDAuN3MpO1xuXG4gICAgICBAbWVkaWEgc2NyZWVuIGFuZCAobWF4LXdpZHRoOiA0NTBweCkge1xuXG4gICAgICAgIEBpbmNsdWRlIHRyYW5zaXRpb24tYmx1ZXByaW50KDAuM3MpO1xuICAgICAgfVxuXG4gICAgICBwIHtcbiAgICAgICAgcGFkZGluZzogMCAyMHB4O1xuICAgICAgICBsaW5lLWhlaWdodDogMjJweDtcblxuICAgICAgICBAbWVkaWEgc2NyZWVuIGFuZCAobWF4LXdpZHRoOiA0NTBweCkge1xuICAgICAgICAgIGRpc3BsYXk6IG5vbmU7XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICB9XG5cbiAgICAuZmxvYXRpbmctdGV4dC1sb2dpbiB7XG4gICAgICBtYXJnaW4tbGVmdDogLTQwMHB4O1xuICAgICAgdHJhbnNmb3JtOiB0cmFuc2xhdGVaKDApO1xuICAgIH1cblxuICAgIC5mbG9hdGluZy10ZXh0LXNpZ24tdXAge1xuICAgICAgdGV4dC1hbGlnbjogY2VudGVyO1xuICAgICAgY29sb3I6IHdoaXRlO1xuICAgICAgbWFyZ2luLWxlZnQ6IDUwcHg7XG4gICAgICBib3JkZXItcmFkaXVzOiAxMHB4O1xuICAgICAgdHJhbnNmb3JtOiB0cmFuc2xhdGVaKDApO1xuXG4gICAgICBwIHtcbiAgICAgICAgcGFkZGluZzogMCAyMHB4O1xuICAgICAgICBsaW5lLWhlaWdodDogMjJweDtcblxuICAgICAgICBAbWVkaWEgc2NyZWVuIGFuZCAobWF4LXdpZHRoOiA0NTBweCkge1xuICAgICAgICAgIGRpc3BsYXk6IG5vbmU7XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICB9XG5cbiAgICBidXR0b24ge1xuICAgICAgYm9yZGVyOiAxcHggc29saWQgd2hpdGU7XG4gICAgICBib3JkZXItcmFkaXVzOiAxNXB4O1xuICAgICAgZm9udC1mYW1pbHk6ICRnZW5lcmFsLWZvbnQtZmFtaWx5O1xuICAgICAgY29sb3I6IHdoaXRlO1xuICAgICAgbWFyZ2luLXRvcDogMTBweDtcbiAgICAgIHBhZGRpbmc6IDhweCAzNXB4O1xuICAgICAgYmFja2dyb3VuZC1jb2xvcjogdHJhbnNwYXJlbnQ7XG4gICAgICBmb250LXdlaWdodDogNTAwO1xuXG4gICAgICBAaW5jbHVkZSB0cmFuc2l0aW9uLWJsdWVwcmludCguMnMpO1xuXG4gICAgICAmLmRlYWN0aXZhdGUge1xuICAgICAgICBwb2ludGVyLWV2ZW50czogbm9uZTtcbiAgICAgICAgYmFja2dyb3VuZC1jb2xvcjogZ3JleTtcbiAgICAgICAgYm9yZGVyOiBub25lO1xuICAgICAgICBjdXJzb3I6ICRkaXNhYmxlZC1jdXJzb3I7XG4gICAgICB9XG5cbiAgICAgICY6aG92ZXIge1xuICAgICAgICBjdXJzb3I6IHBvaW50ZXI7XG4gICAgICAgIGJhY2tncm91bmQtY29sb3I6IHdoaXRlO1xuICAgICAgICBjb2xvcjogJGJhc2UtdGV4dC1jb2xvcjtcbiAgICAgICAgYm9yZGVyLWNvbG9yOiB0cmFuc3BhcmVudDtcbiAgICAgICAgb3V0bGluZTogbm9uZTtcbiAgICAgIH1cblxuICAgICAgJjpmb2N1cyB7XG4gICAgICAgIG91dGxpbmU6IG5vbmU7XG4gICAgICB9XG5cbiAgICAgIEBtZWRpYSBzY3JlZW4gYW5kIChtYXgtd2lkdGg6IDQ1MHB4KSB7XG4gICAgICAgIGJvcmRlcjogbm9uZTtcbiAgICAgICAgd2lkdGg6IDEwMCU7XG4gICAgICAgIGZvbnQtc2l6ZTogMjBweDtcbiAgICAgICAgYm9yZGVyLXJhZGl1czogMDtcbiAgICAgICAgcGFkZGluZzogMTRweDtcbiAgICAgICAgbWFyZ2luOiAwO1xuICAgICAgfVxuICAgIH1cblxuICAgIGgyIHtcbiAgICAgIGNvbG9yOiB3aGl0ZTtcbiAgICAgIGZvbnQtc2l6ZTogMjdweDtcbiAgICAgIGxldHRlci1zcGFjaW5nOiAwLjA0cmVtO1xuXG4gICAgICBAbWVkaWEgc2NyZWVuIGFuZCAobWF4LXdpZHRoOiA0NTBweCkge1xuICAgICAgIGRpc3BsYXk6IG5vbmU7XG4gICAgICB9XG4gICAgfVxuICB9XG5cbiAgQG1lZGlhIHNjcmVlbiBhbmQgKG1heC13aWR0aDogNDUwcHgpIHtcbiAgICB3aWR0aDogMTAwJTtcbiAgfVxufVxuXG4ubW92ZS1tYWluLWNvbG9yLWxheWVyIHtcbiAgbWFyZ2luLXJpZ2h0OiAzNTBweDtcblxuICBAbWVkaWEgc2NyZWVuIGFuZCAobWF4LXdpZHRoOiA0NTBweCkge1xuICAgIG1hcmdpbjogMDtcbiAgfVxufVxuXG4ubW92ZS1sb2dpbi10ZXh0IHtcbiAgbWFyZ2luLWxlZnQ6IDQwMHB4ICFpbXBvcnRhbnQ7XG59XG4iXX0= */"] });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](FormActionTextsComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: 'app-form-action-texts',
                templateUrl: './form-action-texts.component.html',
                styleUrls: ['./form-action-texts.component.scss']
            }]
    }], function () { return [{ type: _services_auth_service__WEBPACK_IMPORTED_MODULE_1__["AuthService"] }, { type: _services_cross_component_communication_service__WEBPACK_IMPORTED_MODULE_2__["CrossComponentCommunicationService"] }]; }, { moveForms: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Output"]
        }], triggerFormMovement: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
        }] }); })();


/***/ }),

/***/ "./src/app/authentication/login-form/login-form.component.ts":
/*!*******************************************************************!*\
  !*** ./src/app/authentication/login-form/login-form.component.ts ***!
  \*******************************************************************/
/*! exports provided: LoginFormComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "LoginFormComponent", function() { return LoginFormComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! rxjs */ "./node_modules/rxjs/_esm2015/index.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/__ivy_ngcc__/fesm2015/forms.js");
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! rxjs/operators */ "./node_modules/rxjs/_esm2015/operators/index.js");
/* harmony import */ var _services_auth_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../services/auth.service */ "./src/app/services/auth.service.ts");
/* harmony import */ var _services_cross_component_communication_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../services/cross-component-communication.service */ "./src/app/services/cross-component-communication.service.ts");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/common.js");









const _c0 = ["forgottenPassRef"];
const _c1 = ["loginEmailRef"];
function LoginFormComponent_span_17_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](0, "span", 21);
} }
function LoginFormComponent_small_27_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "small");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, " A new password will be sent to the provided email address ");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} }
function LoginFormComponent_small_28_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "small", 22);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, " Email format not valid/Use only lowercase ");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} }
function LoginFormComponent_small_29_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "small", 23);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, "Password away!");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} }
function LoginFormComponent_div_30_p_1_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "p");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, "Welcome!");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} }
function LoginFormComponent_div_30_p_3_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "p", 26);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipe"](2, "async");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r8 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipeBind1"](2, 1, ctx_r8.isUserSignedIn));
} }
function LoginFormComponent_div_30_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 24);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](1, LoginFormComponent_div_30_p_1_Template, 2, 0, "p", 17);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipe"](2, "async");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](3, LoginFormComponent_div_30_p_3_Template, 3, 3, "p", 25);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipe"](4, "async");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r6 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipeBind1"](2, 2, ctx_r6.isUserSignedIn) === true);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", !ctx_r6.formMoveInitiated && ctx_r6.isUserSignedIn !== undefined && _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipeBind1"](4, 4, ctx_r6.isUserSignedIn) !== true);
} }
const _c2 = function (a0) { return { "transform": a0 }; };
const _c3 = function (a0) { return { "move-log-in-form": a0 }; };
const _c4 = function (a0) { return { "bring-in-forgotten": a0 }; };
class LoginFormComponent {
    constructor(formBuild, authService, crossComponentService) {
        this.formBuild = formBuild;
        this.authService = authService;
        this.crossComponentService = crossComponentService;
        this.forgottenSubmitted = false;
        this.isUserSignedIn = this.authService.loggedInSubj;
        this.loaderSub = this.authService.logInLoaderSubj;
        this.bringInForgottenPass = false;
        this.destroyed$ = new rxjs__WEBPACK_IMPORTED_MODULE_1__["ReplaySubject"](1);
    }
    ngOnInit() {
        this.signInSub = this.crossComponentService.resetLoginForm$
            .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["takeUntil"])(this.destroyed$))
            .subscribe(data => {
            if (data) {
                this.loginForm.reset();
            }
        });
        this.forgottenPassForm = this.formBuild.group({
            forgottenPassEmail: ['', [
                    _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].email,
                    _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].pattern('[a-z0-9._%+-]+@[a-z0-9.-]+\\.[a-z]{2,3}$')
                ]]
        });
        // Login Form validation
        this.loginForm = this.formBuild.group({
            email: ['', [
                    _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required,
                    _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].email,
                    _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].pattern('[a-z0-9._%+-]+@[a-z0-9.-]+\\.[a-z]{2,3}$')
                ]],
            password: ['', [
                    _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required,
                    _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].minLength(9)
                ]]
        });
        // this is where we get data from the login form
        this.loginForm.valueChanges
            .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["takeUntil"])(this.destroyed$))
            .subscribe(() => {
            if (this.bringInForgottenPass) {
                this.bringInForgottenPass = false;
                this.forgottenPassForm.reset();
            }
        });
    }
    get loginEmail() {
        return this.loginForm.get('email');
    }
    get loginPassword() {
        return this.loginForm.get('password');
    }
    get forgottenPassEmail() {
        return this.forgottenPassForm.get('forgottenPassEmail');
    }
    onSubmitLogin() {
        this.authService.logInUser(this.loginEmail.value, this.loginPassword.value);
        this.loginForm.reset();
    }
    bringInForgottenPassword() {
        this.forgottenPassForm.reset();
        this.bringInForgottenPass = !this.bringInForgottenPass;
        this.forgottenPassRef.nativeElement.focus();
    }
    onSubmitForgottenPass() {
        this.loginEmailRef.nativeElement.focus();
        // show confirmation message
        this.forgottenSubmitted = true;
        setTimeout(() => {
            this.forgottenSubmitted = false;
            this.bringInForgottenPass = false;
            this.forgottenPassForm.reset();
        }, 1200);
        // send the new password to the provided email address
    }
    ngAfterViewInit() {
        this.loginForm.reset();
        this.loginForm.markAsPristine();
    }
    ngOnDestroy() {
        this.destroyed$.next(true);
        this.destroyed$.complete();
    }
}
LoginFormComponent.ɵfac = function LoginFormComponent_Factory(t) { return new (t || LoginFormComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormBuilder"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_services_auth_service__WEBPACK_IMPORTED_MODULE_4__["AuthService"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_services_cross_component_communication_service__WEBPACK_IMPORTED_MODULE_5__["CrossComponentCommunicationService"])); };
LoginFormComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: LoginFormComponent, selectors: [["app-login-form"]], viewQuery: function LoginFormComponent_Query(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵviewQuery"](_c0, true);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵviewQuery"](_c1, true);
    } if (rf & 2) {
        var _t;
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵqueryRefresh"](_t = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵloadQuery"]()) && (ctx.forgottenPassRef = _t.first);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵqueryRefresh"](_t = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵloadQuery"]()) && (ctx.loginEmailRef = _t.first);
    } }, inputs: { formMoveInitiated: "formMoveInitiated" }, decls: 31, vars: 26, consts: [[1, "login-form-wrapper"], [1, "login-form-body", 3, "ngStyle", "ngClass"], [3, "formGroup", "ngSubmit"], ["for", "email"], ["autocomplete", "username", "required", "", "id", "email", "formControlName", "email", "placeholder", "Email", "type", "email"], ["loginEmailRef", ""], ["for", "password"], ["autocomplete", "current-password", "required", "", "id", "password", "formControlName", "password", "placeholder", "Password", "type", "password"], ["type", "submit", 3, "disabled"], ["class", "loader", 4, "ngIf"], [1, "forgotten-password", 3, "click"], [1, "forgotten-form", 3, "ngClass", "formGroup", "ngSubmit"], ["for", "forgottenPass"], ["id", "forgottenPass", "type", "email", "formControlName", "forgottenPassEmail", "placeholder", "Your Email Address"], ["forgottenPassRef", ""], [1, "forgot-submit", 3, "disabled"], [1, "fas", "fa-check-circle"], [4, "ngIf"], ["class", "invalid-forgotten", 4, "ngIf"], ["class", "forgotten-confirmation", 4, "ngIf"], ["class", "notification-messages login-messages", 4, "ngIf"], [1, "loader"], [1, "invalid-forgotten"], [1, "forgotten-confirmation"], [1, "notification-messages", "login-messages"], ["class", "submission-error", 4, "ngIf"], [1, "submission-error"]], template: function LoginFormComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "h2");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](3, "Log in");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "form", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("ngSubmit", function LoginFormComponent_Template_form_ngSubmit_4_listener() { return ctx.onSubmitLogin(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](5, "label", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](6, "input", 4, 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](8, "small");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](9, " Email format not valid/Use only lowercase ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](10, "label", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](11, "input", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](12, "small");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](13, " Password is too short (Min 9 chars) ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](14, "button", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipe"](15, "async");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](16, " Log in ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](17, LoginFormComponent_span_17_Template, 1, 0, "span", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipe"](18, "async");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](19, "p", 10);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function LoginFormComponent_Template_p_click_19_listener() { return ctx.bringInForgottenPassword(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](20, "Forgot password?");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](21, "form", 11);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("ngSubmit", function LoginFormComponent_Template_form_ngSubmit_21_listener() { return ctx.onSubmitForgottenPass(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](22, "label", 12);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](23, "input", 13, 14);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](25, "button", 15);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](26, "i", 16);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](27, LoginFormComponent_small_27_Template, 2, 0, "small", 17);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](28, LoginFormComponent_small_28_Template, 2, 0, "small", 18);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](29, LoginFormComponent_small_29_Template, 2, 0, "small", 19);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](30, LoginFormComponent_div_30_Template, 5, 6, "div", 20);
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngStyle", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction1"](20, _c2, ctx.bringInForgottenPass ? "translateY(-50px)" : "translateY(0)"))("ngClass", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction1"](22, _c3, ctx.formMoveInitiated));
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("formGroup", ctx.loginForm);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵclassProp"]("hide-input-validation", ctx.loginEmail.valid || ctx.loginEmail.untouched || ctx.loginEmail.value === "");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵclassProp"]("hide-input-validation", ctx.loginPassword.value === "" || ctx.loginPassword.valid || ctx.loginPassword.untouched);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("disabled", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipeBind1"](15, 16, ctx.isUserSignedIn) === true || ctx.loginEmail.invalid || ctx.loginPassword.invalid);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipeBind1"](18, 18, ctx.loaderSub) === false);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngClass", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction1"](24, _c4, !ctx.formMoveInitiated && ctx.bringInForgottenPass))("formGroup", ctx.forgottenPassForm);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("disabled", ctx.forgottenSubmitted || ctx.forgottenPassEmail.pristine || ctx.forgottenPassEmail.value === "" || ctx.forgottenPassEmail.invalid);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.forgottenPassEmail.pristine || ctx.forgottenPassEmail.value === "");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.forgottenPassEmail.value !== "" && ctx.forgottenPassEmail.invalid);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.forgottenSubmitted);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", !ctx.bringInForgottenPass);
    } }, directives: [_angular_common__WEBPACK_IMPORTED_MODULE_6__["NgStyle"], _angular_common__WEBPACK_IMPORTED_MODULE_6__["NgClass"], _angular_forms__WEBPACK_IMPORTED_MODULE_2__["ɵangular_packages_forms_forms_y"], _angular_forms__WEBPACK_IMPORTED_MODULE_2__["NgControlStatusGroup"], _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormGroupDirective"], _angular_forms__WEBPACK_IMPORTED_MODULE_2__["DefaultValueAccessor"], _angular_forms__WEBPACK_IMPORTED_MODULE_2__["RequiredValidator"], _angular_forms__WEBPACK_IMPORTED_MODULE_2__["NgControlStatus"], _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormControlName"], _angular_common__WEBPACK_IMPORTED_MODULE_6__["NgIf"]], pipes: [_angular_common__WEBPACK_IMPORTED_MODULE_6__["AsyncPipe"]], styles: ["countdown[_ngcontent-%COMP%] {\n  padding: 10px 25px;\n  border-radius: 10px;\n}\n\n.hide-input-validation[_ngcontent-%COMP%] {\n  display: none;\n}\n.slide-in-password[_ngcontent-%COMP%] {\n  transform: translateX(0) !important;\n}\n\nh2[_ngcontent-%COMP%] {\n  color: #362843;\n  text-align: center;\n}\nform[_ngcontent-%COMP%] {\n  display: flex;\n  flex-wrap: wrap;\n  justify-content: center;\n  position: relative;\n}\nform[_ngcontent-%COMP%]   input[_ngcontent-%COMP%] {\n  border: 1px solid green;\n  border-radius: 4px;\n  outline: none;\n  color: #362843;\n  width: 75%;\n  font-weight: bold;\n  letter-spacing: 0.08rem;\n  font-family: inherit;\n  padding: 12px 10px 12px 10px;\n  transition: all 0.2s linear;\n}\nform[_ngcontent-%COMP%]   input[_ngcontent-%COMP%]:not(:first-of-type) {\n  margin-top: 20px;\n}\nform[_ngcontent-%COMP%]   small[_ngcontent-%COMP%] {\n  width: 75%;\n  padding-top: 5px;\n  text-align: left;\n  position: absolute;\n  font-weight: bold;\n  color: #ff5858;\n}\nform[_ngcontent-%COMP%]   small[_ngcontent-%COMP%]:nth-of-type(1) {\n  margin-top: 39px;\n}\nform[_ngcontent-%COMP%]   small[_ngcontent-%COMP%]:nth-of-type(2) {\n  margin-top: 101px;\n}\n@media screen and (max-width: 450px) {\n  form[_ngcontent-%COMP%]   small[_ngcontent-%COMP%] {\n    width: 100%;\n    text-align: center;\n  }\n}\nform[_ngcontent-%COMP%]   button[_ngcontent-%COMP%]:not(.forgot-submit) {\n  background-color: #362843;\n  border-radius: 15px;\n  border: 1px solid transparent;\n  margin-top: 20px;\n  font-family: Roboto, \"Helvetica Neue\", sans-serif;\n  color: white;\n  font-weight: 500;\n  padding: 8px 35px;\n  outline: none;\n  transition: all 0.2s ease-in-out;\n}\nform[_ngcontent-%COMP%]   button[_ngcontent-%COMP%]:disabled {\n  background-color: white;\n  cursor: not-allowed;\n  color: #362843;\n  border: 1px solid #362843;\n}\nform[_ngcontent-%COMP%]   button[_ngcontent-%COMP%]:hover:not([disabled]):not(.forgot-submit) {\n  cursor: pointer;\n  color: white;\n  border-color: #41c7af;\n  background-color: #41c7af;\n}\nform[_ngcontent-%COMP%]   button[_ngcontent-%COMP%]:focus {\n  outline: none;\n}\n\n@media screen and (min-width: 450px) {\n  .move-log-in-form[_ngcontent-%COMP%] {\n    margin-left: 350px;\n  }\n}\n@media screen and (min-width: 450px) {\n  .move-sign-up-form[_ngcontent-%COMP%] {\n    margin-left: 0 !important;\n  }\n}\n.move-log--in-wrapper-mobile[_ngcontent-%COMP%] {\n  margin-left: 100px;\n}\n\n.loader[_ngcontent-%COMP%] {\n  position: absolute;\n  right: 76px;\n  bottom: 1px;\n  font-size: 10px;\n  text-indent: -9999em;\n  width: 30px;\n  height: 30px;\n  border-radius: 50%;\n  background: #ffffff;\n  background: linear-gradient(to right, #54e38e 10%, rgba(255, 255, 255, 0) 42%);\n  -webkit-animation: load3 1.4s infinite linear;\n  animation: load3 1.4s infinite linear;\n  transform: translateZ(0);\n  transition: all 0.2s ease-in-out;\n}\n.loader[_ngcontent-%COMP%]:before {\n  width: 50%;\n  height: 50%;\n  border-radius: 100% 0 0 0;\n  position: absolute;\n  top: 0;\n  left: 0;\n  content: \"\";\n}\n.loader[_ngcontent-%COMP%]:after {\n  width: 75%;\n  height: 75%;\n  border-radius: 50%;\n  content: \"\";\n  margin: auto;\n  position: absolute;\n  top: 0;\n  left: 0;\n  bottom: 0;\n  right: 0;\n}\n@-webkit-keyframes load3 {\n  0% {\n    transform: rotate(0deg);\n  }\n  100% {\n    transform: rotate(360deg);\n  }\n}\n@keyframes load3 {\n  0% {\n    transform: rotate(0deg);\n  }\n  100% {\n    transform: rotate(360deg);\n  }\n}\n.notification-messages[_ngcontent-%COMP%] {\n  position: absolute;\n  pointer-events: none;\n  width: 80%;\n}\n@media screen and (max-width: 450px) {\n  .notification-messages[_ngcontent-%COMP%] {\n    width: 90%;\n  }\n}\n.notification-messages[_ngcontent-%COMP%]   p[_ngcontent-%COMP%] {\n  font-weight: bold;\n  font-size: 13px;\n  text-align: center;\n}\n.notification-messages[_ngcontent-%COMP%]   p.submission-error[_ngcontent-%COMP%] {\n  color: #ff6e6e;\n}\n\ncountdown[_ngcontent-%COMP%] {\n  padding: 10px 25px;\n  border-radius: 10px;\n}\n\n.hide-input-validation[_ngcontent-%COMP%] {\n  display: none;\n}\n.slide-in-password[_ngcontent-%COMP%] {\n  transform: translateX(0) !important;\n}\n\n[_nghost-%COMP%] {\n  display: flex;\n  justify-content: center;\n  align-items: center;\n  overflow: hidden;\n  flex-direction: column;\n  background: white;\n  width: 350px;\n}\n@media screen and (max-width: 450px) {\n  [_nghost-%COMP%] {\n    position: absolute;\n    background-color: white;\n    height: 100%;\n    z-index: 1;\n  }\n}\n[_nghost-%COMP%]   .login-form-wrapper[_ngcontent-%COMP%] {\n  transition: all 0.6s ease-in-out;\n  transition-delay: 0.05s;\n  transform: translateZ(0);\n  width: 100%;\n}\n@media screen and (max-width: 450px) {\n  [_nghost-%COMP%]   .login-form-wrapper[_ngcontent-%COMP%] {\n    position: absolute;\n    background-color: white;\n    z-index: 1;\n  }\n}\n[_nghost-%COMP%]   .login-form-wrapper[_ngcontent-%COMP%]   .login-form-body[_ngcontent-%COMP%] {\n  transition-delay: 0.05s;\n  width: 100%;\n  transform: translateZ(0);\n  transition: all 0.6s ease-in-out;\n}\n[_nghost-%COMP%]   .forgotten-password[_ngcontent-%COMP%] {\n  font-size: 11px;\n  margin-left: auto;\n  margin-right: auto;\n  width: 93px;\n  cursor: pointer;\n  z-index: 1;\n}\n[_nghost-%COMP%]   form.bring-in-forgotten[_ngcontent-%COMP%] {\n  transform: translateX(0) !important;\n}\n[_nghost-%COMP%]   form.forgotten-form[_ngcontent-%COMP%] {\n  margin-top: 10px;\n  position: absolute;\n  align-items: center;\n  width: 100%;\n  transform: translateX(-724px);\n  transition: all 0.6s ease-in-out;\n}\n@media screen and (max-width: 450px) {\n  [_nghost-%COMP%]   form.forgotten-form[_ngcontent-%COMP%] {\n    margin-top: -5px;\n  }\n}\n[_nghost-%COMP%]   form.forgotten-form[_ngcontent-%COMP%]   small[_ngcontent-%COMP%] {\n  color: #362843;\n  font-size: 13px;\n  margin-top: 72px;\n}\n[_nghost-%COMP%]   form.forgotten-form[_ngcontent-%COMP%]   small.invalid-forgotten[_ngcontent-%COMP%] {\n  margin-top: 65px;\n  color: #ff5858;\n}\n@media screen and (max-width: 450px) {\n  [_nghost-%COMP%]   form.forgotten-form[_ngcontent-%COMP%]   small.invalid-forgotten[_ngcontent-%COMP%] {\n    margin-top: 70px;\n  }\n}\n[_nghost-%COMP%]   form.forgotten-form[_ngcontent-%COMP%]   small.forgotten-confirmation[_ngcontent-%COMP%] {\n  color: #362843;\n}\n[_nghost-%COMP%]   form.forgotten-form[_ngcontent-%COMP%]   button[_ngcontent-%COMP%] {\n  margin-top: 0;\n  position: absolute;\n  right: 40px;\n  border: none;\n  background: none;\n  z-index: 3;\n  cursor: pointer;\n  color: #41c7af;\n}\n[_nghost-%COMP%]   form.forgotten-form[_ngcontent-%COMP%]   button[_ngcontent-%COMP%]:disabled {\n  cursor: not-allowed;\n  color: lightgrey;\n}\n[_nghost-%COMP%]   form.forgotten-form[_ngcontent-%COMP%]   button[_ngcontent-%COMP%]   i[_ngcontent-%COMP%] {\n  font-size: 18px;\n  pointer-events: none;\n}\n[_nghost-%COMP%]   form[_ngcontent-%COMP%]:nth-last-of-type   label[_ngcontent-%COMP%] {\n  display: none;\n}\n.login-messages[_ngcontent-%COMP%] {\n  bottom: 30px;\n}\n@media screen and (max-width: 450px) {\n  .login-messages[_ngcontent-%COMP%] {\n    bottom: 39px;\n  }\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvc2hhcmVkL2dlbmVyYWwtc3R5bGUvZ2VuZXJhbC1zdHlsZS5zY3NzIiwic3JjL2FwcC9hdXRoZW50aWNhdGlvbi9sb2dpbi1mb3JtL2xvZ2luLWZvcm0uY29tcG9uZW50LnNjc3MiLCJzcmMvYXBwL2F1dGhlbnRpY2F0aW9uL2NvbW1vbi1mb3JtLXN0eWxlcy9jb21tb24tZm9ybS1zdHlsZXMuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFDQSwyREFBQTtBQXlCQTtFQUNFLGtCQUFBO0VBQ0EsbUJBQUE7QUN4QkY7QUQyQkEsNEJBQUE7QUFFQTtFQUNFLGFBQUE7QUN6QkY7QUQ0QkE7RUFDRSxtQ0FBQTtBQ3pCRjtBRDRCQSxXQUFBO0FFdENBO0VBQ0UsY0ZGZ0I7RUVHaEIsa0JBQUE7QURjRjtBQ1hBO0VBQ0UsYUFBQTtFQUNBLGVBQUE7RUFDQSx1QkFBQTtFQUNBLGtCQUFBO0FEY0Y7QUNaRTtFQUNFLHVCQUFBO0VBQ0Esa0JBQUE7RUFDQSxhQUFBO0VBQ0EsY0ZoQmM7RUVpQmQsVUFBQTtFQUNBLGlCQUFBO0VBQ0EsdUJBQUE7RUFDQSxvQkFBQTtFQUNBLDRCQUFBO0VBQ0EsMkJBQUE7QURjSjtBQ1pJO0VBQ0UsZ0JBQUE7QURjTjtBQ1RFO0VBQ0UsVUFBQTtFQUNBLGdCQUFBO0VBQ0EsZ0JBQUE7RUFDQSxrQkFBQTtFQUNBLGlCQUFBO0VBQ0EsY0FBQTtBRFdKO0FDVEk7RUFDRSxnQkFBQTtBRFdOO0FDUkk7RUFDRSxpQkFBQTtBRFVOO0FDUEk7RUFoQkY7SUFpQkksV0FBQTtJQUNBLGtCQUFBO0VEVUo7QUFDRjtBQ0xJO0VBQ0UseUJGdkRZO0VFd0RaLG1CQUFBO0VBQ0EsNkJBQUE7RUFDQSxnQkFBQTtFQUNBLGlERi9DZ0I7RUVnRGhCLFlBQUE7RUFDQSxnQkFBQTtFQUNBLGlCQUFBO0VBQ0EsYUFBQTtFRi9DSixnQ0FBQTtBQ3VERjtBQ0pJO0VBQ0UsdUJBQUE7RUFDQSxtQkZ4RFk7RUV5RFosY0Z0RVk7RUV1RVoseUJBQUE7QURNTjtBQ0NRO0VBQ0UsZUFBQTtFQUNBLFlBQUE7RUFDQSxxQkFBQTtFQUNBLHlCQUFBO0FEQ1Y7QUNJSTtFQUNFLGFBQUE7QURGTjtBQ09BLHFCQUFBO0FBSUU7RUFGRjtJQUdJLGtCQUFBO0VETkY7QUFDRjtBQ1dFO0VBRkY7SUFHSSx5QkFBQTtFRFBGO0FBQ0Y7QUNVQTtFQUNFLGtCQUFBO0FEUEY7QUNVQSxXQUFBO0FBQ0E7RUFDRSxrQkFBQTtFQUNBLFdBQUE7RUFDQSxXQUFBO0VBQ0EsZUFBQTtFQUNBLG9CQUFBO0VBQ0EsV0FBQTtFQUNBLFlBQUE7RUFDQSxrQkFBQTtFQUNBLG1CQUFBO0VBQ0EsOEVBQUE7RUFDQSw2Q0FBQTtFQUNBLHFDQUFBO0VBQ0Esd0JBQUE7RUYvR0EsZ0NBQUE7QUN5R0Y7QUNTRTtFQUNFLFVBQUE7RUFDQSxXQUFBO0VBQ0EseUJBQUE7RUFDQSxrQkFBQTtFQUNBLE1BQUE7RUFDQSxPQUFBO0VBQ0EsV0FBQTtBRFBKO0FDVUU7RUFDRSxVQUFBO0VBQ0EsV0FBQTtFQUNBLGtCQUFBO0VBQ0EsV0FBQTtFQUNBLFlBQUE7RUFDQSxrQkFBQTtFQUNBLE1BQUE7RUFDQSxPQUFBO0VBQ0EsU0FBQTtFQUNBLFFBQUE7QURSSjtBQ1dFO0VBQ0U7SUFFRSx1QkFBQTtFRFRKO0VDV0U7SUFFRSx5QkFBQTtFRFRKO0FBQ0Y7QUNXRTtFQUNFO0lBRUUsdUJBQUE7RURUSjtFQ1dFO0lBRUUseUJBQUE7RURUSjtBQUNGO0FDYUE7RUFDRSxrQkFBQTtFQUNBLG9CQUFBO0VBQ0EsVUFBQTtBRFZGO0FDWUU7RUFMRjtJQU1JLFVBQUE7RURURjtBQUNGO0FDV0U7RUFNRSxpQkFBQTtFQUNBLGVBQUE7RUFDQSxrQkFBQTtBRGRKO0FDUUk7RUFDRSxjQUFBO0FETk47QUR0TEEsMkRBQUE7QUF5QkE7RUFDRSxrQkFBQTtFQUNBLG1CQUFBO0FDaUtGO0FEOUpBLDRCQUFBO0FBRUE7RUFDRSxhQUFBO0FDZ0tGO0FEN0pBO0VBQ0UsbUNBQUE7QUNnS0Y7QUQ3SkEsV0FBQTtBQ3RDQTtFQUNFLGFBQUE7RUFDQSx1QkFBQTtFQUNBLG1CQUFBO0VBQ0EsZ0JBQUE7RUFDQSxzQkFBQTtFQUNBLGlCQUFBO0VBQ0EsWUFBQTtBQXVNRjtBQXJNRTtFQVRGO0lBVUksa0JBQUE7SUFDQSx1QkFBQTtJQUNBLFlBQUE7SUFDQSxVQUFBO0VBd01GO0FBQ0Y7QUF0TUU7RUREQSxnQ0FBQTtFQ0dFLHVCQUFBO0VBQ0Esd0JBQUE7RUFDQSxXQUFBO0FBd01KO0FBdE1JO0VBTkY7SUFPSSxrQkFBQTtJQUNBLHVCQUFBO0lBQ0EsVUFBQTtFQXlNSjtBQUNGO0FBdE1JO0VBQ0UsdUJBQUE7RUFDQSxXQUFBO0VBQ0Esd0JBQUE7RURqQkosZ0NBQUE7QUMwTkY7QUFuTUU7RUFDRSxlQUFBO0VBQ0EsaUJBQUE7RUFDQSxrQkFBQTtFQUNBLFdBQUE7RUFDQSxlQUFBO0VBQ0EsVUFBQTtBQXFNSjtBQWhNSTtFQUNFLG1DQUFBO0FBa01OO0FBL0xJO0VBQ0UsZ0JBQUE7RUFDQSxrQkFBQTtFQUNBLG1CQUFBO0VBQ0EsV0FBQTtFQUNBLDZCQUFBO0VEM0NKLGdDQUFBO0FDNk9GO0FBOUxNO0VBVEY7SUFVSSxnQkFBQTtFQWlNTjtBQUNGO0FBL0xNO0VBQ0UsY0RwRVU7RUNxRVYsZUFBQTtFQUNBLGdCQUFBO0FBaU1SO0FBL0xRO0VBQ0UsZ0JBQUE7RUFDQSxjQUFBO0FBaU1WO0FBL0xVO0VBSkY7SUFLSSxnQkFBQTtFQWtNVjtBQUNGO0FBL0xRO0VBQ0UsY0RsRlE7QUNtUmxCO0FBN0xNO0VBQ0UsYUFBQTtFQUNBLGtCQUFBO0VBQ0EsV0FBQTtFQUNBLFlBQUE7RUFDQSxnQkFBQTtFQUNBLFVBQUE7RUFDQSxlQUFBO0VBQ0EsY0QzRlc7QUMwUm5CO0FBN0xRO0VBQ0UsbUJEcEZRO0VDcUZSLGdCQUFBO0FBK0xWO0FBNUxRO0VBQ0UsZUFBQTtFQUNBLG9CQUFBO0FBOExWO0FBdkxNO0VBQ0UsYUFBQTtBQXlMUjtBQW5MQTtFQUNFLFlBQUE7QUFzTEY7QUFwTEU7RUFIRjtJQUlJLFlBQUE7RUF1TEY7QUFDRiIsImZpbGUiOiJzcmMvYXBwL2F1dGhlbnRpY2F0aW9uL2xvZ2luLWZvcm0vbG9naW4tZm9ybS5jb21wb25lbnQuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbIlxuLyogQmFzZSB0ZXh0IGNvbG9ycywgdHJhbnNpdGlvbnMgYW5kIGJhY2tncm91bmQgZ3JhZGllbnRzICovXG4kYmFzZS10ZXh0LWNvbG9yOiAjMzYyODQzO1xuJHJveWFsLXJlZC1ncmFkaWVudDogbGluZWFyLWdyYWRpZW50KC02MGRlZywgI2ZmNmU2ZSAwJSwgIzc5MDkwOSAxMDAlKTtcbiRlcnJvci1jb2xvcjogI2ZmNmU2ZTtcbiRiYXNlLWdyZWVuLWNvbG9yOiAjNDFjN2FmO1xuJGZsYXQtZ3JlZW4tZ3JhZGllbnQ6IGxpbmVhci1ncmFkaWVudCgtNjBkZWcsICM0MWM3YWYgMCUsICM1NGUzOGUgMTAwJSk7XG4kZmxhdC1ncmVlbi1ncmFkaWVudC1yZXZlcnNlOiBsaW5lYXItZ3JhZGllbnQoLTYwZGVnLCAjNTRlMzhlIDAlLCAjNDFjN2FmIDEwMCUpO1xuJGhvdmVyLWJ1dHRvbi1jb2xvcjogI2NkMjIyMjtcbiRwaW5rLWRlZmF1bHQ6ICNmZjZlNmU7XG4kY29udHJvbC1wYW5lbC13aWR0aDogNDAwcHg7XG4kZGVmYXVsdC10cmFuc2l0aW9uOiBhbGwgLjFzIGxpbmVhcjtcbiRiYXNlLWZvbnQtc2l6ZTogMjBweDtcbiRzbWFsbGVyLWJhc2UtZm9udC1zaXplOiAkYmFzZS1mb250LXNpemUgLSAycHg7XG4kZ2VuZXJhbC1mb250LWZhbWlseTogUm9ib3RvLCBcIkhlbHZldGljYSBOZXVlXCIsIHNhbnMtc2VyaWY7XG4kZGlzYWJsZWQtY3Vyc29yOiBub3QtYWxsb3dlZDtcblxuQG1peGluIHRyYW5zaXRpb24tYmx1ZXByaW50KCR0aW1lKSB7XG4gIHRyYW5zaXRpb246IGFsbCAkdGltZSBlYXNlLWluLW91dDtcbn1cblxuQG1peGluIHNxdWFyZS1zaXplKCR3aWR0aCwgJGhlaWdodDogJHdpZHRoKSB7XG4gIHdpZHRoOiAkd2lkdGg7XG4gIGhlaWdodDogJGhlaWdodDtcbn1cblxuY291bnRkb3duIHtcbiAgcGFkZGluZzogMTBweCAyNXB4O1xuICBib3JkZXItcmFkaXVzOiAxMHB4O1xufVxuXG4vKiBGb3JtIFZhbGlkYXRpb24gY2xhc3NlcyAqL1xuXG4uaGlkZS1pbnB1dC12YWxpZGF0aW9uIHtcbiAgZGlzcGxheTogbm9uZTtcbn1cblxuLnNsaWRlLWluLXBhc3N3b3JkIHtcbiAgdHJhbnNmb3JtOiB0cmFuc2xhdGVYKDApICFpbXBvcnRhbnQ7XG59XG5cbi8qIG1peGlucyAqL1xuXG5AbWl4aW4gYmFzZS1ib3gtc2hhZG93IHtcbiAgLXdlYmtpdC1ib3gtc2hhZG93OiAtMXB4IDZweCAxMnB4IC01cHggIzAwMDAwMDtcbiAgYm94LXNoYWRvdzogLTFweCA2cHggMTJweCAtNXB4ICMwMDAwMDA7XG59XG5cbkBtaXhpbiBmbGV4LWNlbnRlciB7XG4gIGRpc3BsYXk6IGZsZXg7XG4gIGZsZXgtd3JhcDogd3JhcDtcbiAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XG59XG4iLCJAaW1wb3J0ICcuLi9jb21tb24tZm9ybS1zdHlsZXMvY29tbW9uLWZvcm0tc3R5bGVzJztcbkBpbXBvcnQgJy4uLy4uL3NoYXJlZC9nZW5lcmFsLXN0eWxlL2dlbmVyYWwtc3R5bGUnO1xuXG46aG9zdCB7XG4gIGRpc3BsYXk6IGZsZXg7XG4gIGp1c3RpZnktY29udGVudDogY2VudGVyO1xuICBhbGlnbi1pdGVtczogY2VudGVyO1xuICBvdmVyZmxvdzogaGlkZGVuO1xuICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xuICBiYWNrZ3JvdW5kOiB3aGl0ZTtcbiAgd2lkdGg6IDM1MHB4O1xuXG4gIEBtZWRpYSBzY3JlZW4gYW5kIChtYXgtd2lkdGg6IDQ1MHB4KSB7XG4gICAgcG9zaXRpb246IGFic29sdXRlO1xuICAgIGJhY2tncm91bmQtY29sb3I6IHdoaXRlO1xuICAgIGhlaWdodDogMTAwJTtcbiAgICB6LWluZGV4OiAxO1xuICB9XG5cbiAgLmxvZ2luLWZvcm0td3JhcHBlciB7XG4gICAgQGluY2x1ZGUgdHJhbnNpdGlvbi1ibHVlcHJpbnQoMC42cyk7XG4gICAgdHJhbnNpdGlvbi1kZWxheTogLjA1cztcbiAgICB0cmFuc2Zvcm06IHRyYW5zbGF0ZVooMCk7XG4gICAgd2lkdGg6IDEwMCU7XG5cbiAgICBAbWVkaWEgc2NyZWVuIGFuZCAobWF4LXdpZHRoOiA0NTBweCkge1xuICAgICAgcG9zaXRpb246IGFic29sdXRlO1xuICAgICAgYmFja2dyb3VuZC1jb2xvcjogd2hpdGU7XG4gICAgICB6LWluZGV4OiAxO1xuICAgIH1cblxuXG4gICAgLmxvZ2luLWZvcm0tYm9keSB7XG4gICAgICB0cmFuc2l0aW9uLWRlbGF5OiAuMDVzO1xuICAgICAgd2lkdGg6IDEwMCU7XG4gICAgICB0cmFuc2Zvcm06IHRyYW5zbGF0ZVooMCk7XG5cbiAgICAgIEBpbmNsdWRlIHRyYW5zaXRpb24tYmx1ZXByaW50KDAuNnMpO1xuICAgIH1cbiAgfVxuXG4gIC5mb3Jnb3R0ZW4tcGFzc3dvcmQge1xuICAgIGZvbnQtc2l6ZTogMTFweDtcbiAgICBtYXJnaW4tbGVmdDogYXV0bztcbiAgICBtYXJnaW4tcmlnaHQ6IGF1dG87XG4gICAgd2lkdGg6IDkzcHg7XG4gICAgY3Vyc29yOiBwb2ludGVyO1xuICAgIHotaW5kZXg6IDE7XG4gIH1cblxuICBmb3JtIHtcblxuICAgICYuYnJpbmctaW4tZm9yZ290dGVuIHtcbiAgICAgIHRyYW5zZm9ybTogdHJhbnNsYXRlWCgwKSAhaW1wb3J0YW50O1xuICAgIH1cblxuICAgICYuZm9yZ290dGVuLWZvcm0ge1xuICAgICAgbWFyZ2luLXRvcDogMTBweDtcbiAgICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG4gICAgICB3aWR0aDogMTAwJTtcbiAgICAgIHRyYW5zZm9ybTogdHJhbnNsYXRlWCgtNzI0cHgpO1xuXG4gICAgICBAaW5jbHVkZSB0cmFuc2l0aW9uLWJsdWVwcmludCgwLjZzKTtcblxuICAgICAgQG1lZGlhIHNjcmVlbiBhbmQgKG1heC13aWR0aDogNDUwcHgpIHtcbiAgICAgICAgbWFyZ2luLXRvcDogLTVweDtcbiAgICAgIH1cblxuICAgICAgc21hbGwge1xuICAgICAgICBjb2xvcjogJGJhc2UtdGV4dC1jb2xvcjtcbiAgICAgICAgZm9udC1zaXplOiAxM3B4O1xuICAgICAgICBtYXJnaW4tdG9wOiA3MnB4O1xuXG4gICAgICAgICYuaW52YWxpZC1mb3Jnb3R0ZW4ge1xuICAgICAgICAgIG1hcmdpbi10b3A6IDY1cHg7XG4gICAgICAgICAgY29sb3I6ICNmZjU4NTg7XG5cbiAgICAgICAgICBAbWVkaWEgc2NyZWVuIGFuZCAobWF4LXdpZHRoOiA0NTBweCkge1xuICAgICAgICAgICAgbWFyZ2luLXRvcDogNzBweDtcbiAgICAgICAgICB9XG4gICAgICAgIH1cblxuICAgICAgICAmLmZvcmdvdHRlbi1jb25maXJtYXRpb24ge1xuICAgICAgICAgIGNvbG9yOiAkYmFzZS10ZXh0LWNvbG9yO1xuICAgICAgICB9XG4gICAgICB9XG5cbiAgICAgIGJ1dHRvbiB7XG4gICAgICAgIG1hcmdpbi10b3A6IDA7XG4gICAgICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgICAgICAgcmlnaHQ6IDQwcHg7XG4gICAgICAgIGJvcmRlcjogbm9uZTtcbiAgICAgICAgYmFja2dyb3VuZDogbm9uZTtcbiAgICAgICAgei1pbmRleDogMztcbiAgICAgICAgY3Vyc29yOiBwb2ludGVyO1xuICAgICAgICBjb2xvcjogJGJhc2UtZ3JlZW4tY29sb3I7XG5cbiAgICAgICAgJjpkaXNhYmxlZCB7XG4gICAgICAgICAgY3Vyc29yOiAkZGlzYWJsZWQtY3Vyc29yO1xuICAgICAgICAgIGNvbG9yOiBsaWdodGdyZXk7XG4gICAgICAgIH1cblxuICAgICAgICBpIHtcbiAgICAgICAgICBmb250LXNpemU6IDE4cHg7XG4gICAgICAgICAgcG9pbnRlci1ldmVudHM6IG5vbmU7XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICB9XG5cbiAgICAmOm50aC1sYXN0LW9mLXR5cGUge1xuXG4gICAgICBsYWJlbCB7XG4gICAgICAgIGRpc3BsYXk6IG5vbmU7XG4gICAgICB9XG4gICAgfVxuICB9XG59XG5cbi5sb2dpbi1tZXNzYWdlcyB7XG4gIGJvdHRvbTogMzBweDtcblxuICBAbWVkaWEgc2NyZWVuIGFuZCAobWF4LXdpZHRoOiA0NTBweCkge1xuICAgIGJvdHRvbTogMzlweDtcbiAgfVxufVxuIiwiQGltcG9ydCAnLi4vLi4vc2hhcmVkL2dlbmVyYWwtc3R5bGUvZ2VuZXJhbC1zdHlsZSc7XG5cblxuaDIge1xuICBjb2xvcjogJGJhc2UtdGV4dC1jb2xvcjtcbiAgdGV4dC1hbGlnbjogY2VudGVyO1xufVxuXG5mb3JtIHtcbiAgZGlzcGxheTogZmxleDtcbiAgZmxleC13cmFwOiB3cmFwO1xuICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcbiAgcG9zaXRpb246IHJlbGF0aXZlO1xuXG4gIGlucHV0IHtcbiAgICBib3JkZXI6IDFweCBzb2xpZCBncmVlbjtcbiAgICBib3JkZXItcmFkaXVzOiA0cHg7XG4gICAgb3V0bGluZTogbm9uZTtcbiAgICBjb2xvcjogJGJhc2UtdGV4dC1jb2xvcjtcbiAgICB3aWR0aDogNzUlO1xuICAgIGZvbnQtd2VpZ2h0OiBib2xkO1xuICAgIGxldHRlci1zcGFjaW5nOiAwLjA4cmVtO1xuICAgIGZvbnQtZmFtaWx5OiBpbmhlcml0O1xuICAgIHBhZGRpbmc6IDEycHggMTBweCAxMnB4IDEwcHg7XG4gICAgdHJhbnNpdGlvbjogYWxsIC4ycyBsaW5lYXI7XG5cbiAgICAmOm5vdCg6Zmlyc3Qtb2YtdHlwZSkge1xuICAgICAgbWFyZ2luLXRvcDogMjBweDtcbiAgICB9XG5cbiAgfVxuXG4gIHNtYWxsIHtcbiAgICB3aWR0aDogNzUlO1xuICAgIHBhZGRpbmctdG9wOiA1cHg7XG4gICAgdGV4dC1hbGlnbjogbGVmdDtcbiAgICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gICAgZm9udC13ZWlnaHQ6IGJvbGQ7XG4gICAgY29sb3I6ICNmZjU4NTg7XG5cbiAgICAmOm50aC1vZi10eXBlKDEpIHtcbiAgICAgIG1hcmdpbi10b3A6IDM5cHg7XG4gICAgfVxuXG4gICAgJjpudGgtb2YtdHlwZSgyKSB7XG4gICAgICBtYXJnaW4tdG9wOiAxMDFweDtcbiAgICB9XG5cbiAgICBAbWVkaWEgc2NyZWVuIGFuZCAobWF4LXdpZHRoOiA0NTBweCkge1xuICAgICAgd2lkdGg6IDEwMCU7XG4gICAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XG4gICAgfVxuICB9XG5cbiAgYnV0dG9uIHtcblxuICAgICY6bm90KC5mb3Jnb3Qtc3VibWl0KSB7XG4gICAgICBiYWNrZ3JvdW5kLWNvbG9yOiAkYmFzZS10ZXh0LWNvbG9yO1xuICAgICAgYm9yZGVyLXJhZGl1czogMTVweDtcbiAgICAgIGJvcmRlcjogMXB4IHNvbGlkIHRyYW5zcGFyZW50O1xuICAgICAgbWFyZ2luLXRvcDogMjBweDtcbiAgICAgIGZvbnQtZmFtaWx5OiAkZ2VuZXJhbC1mb250LWZhbWlseTtcbiAgICAgIGNvbG9yOiB3aGl0ZTtcbiAgICAgIGZvbnQtd2VpZ2h0OiA1MDA7XG4gICAgICBwYWRkaW5nOiA4cHggMzVweDtcbiAgICAgIG91dGxpbmU6IG5vbmU7XG4gICAgICBAaW5jbHVkZSB0cmFuc2l0aW9uLWJsdWVwcmludCguMnMpO1xuICAgIH1cblxuICAgICY6ZGlzYWJsZWQge1xuICAgICAgYmFja2dyb3VuZC1jb2xvcjogd2hpdGU7XG4gICAgICBjdXJzb3I6ICRkaXNhYmxlZC1jdXJzb3I7XG4gICAgICBjb2xvcjogJGJhc2UtdGV4dC1jb2xvcjtcbiAgICAgIGJvcmRlcjogMXB4IHNvbGlkICRiYXNlLXRleHQtY29sb3I7XG4gICAgfVxuXG4gICAgJjpob3ZlciB7XG5cbiAgICAgICY6bm90KFtkaXNhYmxlZF0pIHtcblxuICAgICAgICAmOm5vdCguZm9yZ290LXN1Ym1pdCkge1xuICAgICAgICAgIGN1cnNvcjogcG9pbnRlcjtcbiAgICAgICAgICBjb2xvcjogd2hpdGU7XG4gICAgICAgICAgYm9yZGVyLWNvbG9yOiAjNDFjN2FmO1xuICAgICAgICAgIGJhY2tncm91bmQtY29sb3I6ICM0MWM3YWY7XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICB9XG5cbiAgICAmOmZvY3VzIHtcbiAgICAgIG91dGxpbmU6IG5vbmU7XG4gICAgfVxuICB9XG59XG5cbi8qIE1vdmVtZW50IGNsYXNzZXMgKi9cblxuLm1vdmUtbG9nLWluLWZvcm0ge1xuXG4gIEBtZWRpYSBzY3JlZW4gYW5kIChtaW4td2lkdGg6IDQ1MHB4KSB7XG4gICAgbWFyZ2luLWxlZnQ6IDM1MHB4O1xuICB9XG59XG5cbi5tb3ZlLXNpZ24tdXAtZm9ybSB7XG5cbiAgQG1lZGlhIHNjcmVlbiBhbmQgKG1pbi13aWR0aDogNDUwcHgpIHtcbiAgICBtYXJnaW4tbGVmdDogMCAhaW1wb3J0YW50O1xuICB9XG59XG5cbi5tb3ZlLWxvZy0taW4td3JhcHBlci1tb2JpbGUge1xuICBtYXJnaW4tbGVmdDogMTAwcHg7XG59XG5cbi8qIExvYWRlciAqL1xuLmxvYWRlciB7XG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgcmlnaHQ6IDc2cHg7XG4gIGJvdHRvbTogMXB4O1xuICBmb250LXNpemU6IDEwcHg7XG4gIHRleHQtaW5kZW50OiAtOTk5OWVtO1xuICB3aWR0aDogMzBweDtcbiAgaGVpZ2h0OiAzMHB4O1xuICBib3JkZXItcmFkaXVzOiA1MCU7XG4gIGJhY2tncm91bmQ6ICNmZmZmZmY7XG4gIGJhY2tncm91bmQ6IGxpbmVhci1ncmFkaWVudCh0byByaWdodCwgIzU0ZTM4ZSAxMCUsIHJnYmEoMjU1LCAyNTUsIDI1NSwgMCkgNDIlKTtcbiAgLXdlYmtpdC1hbmltYXRpb246IGxvYWQzIDEuNHMgaW5maW5pdGUgbGluZWFyO1xuICBhbmltYXRpb246IGxvYWQzIDEuNHMgaW5maW5pdGUgbGluZWFyO1xuICB0cmFuc2Zvcm06IHRyYW5zbGF0ZVooMCk7XG4gIEBpbmNsdWRlIHRyYW5zaXRpb24tYmx1ZXByaW50KC4ycyk7XG5cbiAgJjpiZWZvcmUge1xuICAgIHdpZHRoOiA1MCU7XG4gICAgaGVpZ2h0OiA1MCU7XG4gICAgYm9yZGVyLXJhZGl1czogMTAwJSAwIDAgMDtcbiAgICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gICAgdG9wOiAwO1xuICAgIGxlZnQ6IDA7XG4gICAgY29udGVudDogJyc7XG4gIH1cblxuICAmOmFmdGVyIHtcbiAgICB3aWR0aDogNzUlO1xuICAgIGhlaWdodDogNzUlO1xuICAgIGJvcmRlci1yYWRpdXM6IDUwJTtcbiAgICBjb250ZW50OiAnJztcbiAgICBtYXJnaW46IGF1dG87XG4gICAgcG9zaXRpb246IGFic29sdXRlO1xuICAgIHRvcDogMDtcbiAgICBsZWZ0OiAwO1xuICAgIGJvdHRvbTogMDtcbiAgICByaWdodDogMDtcbiAgfVxuXG4gIEAtd2Via2l0LWtleWZyYW1lcyBsb2FkMyB7XG4gICAgMCUge1xuICAgICAgLXdlYmtpdC10cmFuc2Zvcm06IHJvdGF0ZSgwZGVnKTtcbiAgICAgIHRyYW5zZm9ybTogcm90YXRlKDBkZWcpO1xuICAgIH1cbiAgICAxMDAlIHtcbiAgICAgIC13ZWJraXQtdHJhbnNmb3JtOiByb3RhdGUoMzYwZGVnKTtcbiAgICAgIHRyYW5zZm9ybTogcm90YXRlKDM2MGRlZyk7XG4gICAgfVxuICB9XG4gIEBrZXlmcmFtZXMgbG9hZDMge1xuICAgIDAlIHtcbiAgICAgIC13ZWJraXQtdHJhbnNmb3JtOiByb3RhdGUoMGRlZyk7XG4gICAgICB0cmFuc2Zvcm06IHJvdGF0ZSgwZGVnKTtcbiAgICB9XG4gICAgMTAwJSB7XG4gICAgICAtd2Via2l0LXRyYW5zZm9ybTogcm90YXRlKDM2MGRlZyk7XG4gICAgICB0cmFuc2Zvcm06IHJvdGF0ZSgzNjBkZWcpO1xuICAgIH1cbiAgfVxufVxuXG4ubm90aWZpY2F0aW9uLW1lc3NhZ2VzIHtcbiAgcG9zaXRpb246IGFic29sdXRlO1xuICBwb2ludGVyLWV2ZW50czogbm9uZTtcbiAgd2lkdGg6IDgwJTtcblxuICBAbWVkaWEgc2NyZWVuIGFuZCAobWF4LXdpZHRoOiA0NTBweCkge1xuICAgIHdpZHRoOiA5MCU7XG4gIH1cblxuICBwIHtcblxuICAgICYuc3VibWlzc2lvbi1lcnJvciB7XG4gICAgICBjb2xvcjogI2ZmNmU2ZTtcbiAgICB9XG5cbiAgICBmb250LXdlaWdodDogYm9sZDtcbiAgICBmb250LXNpemU6IDEzcHg7XG4gICAgdGV4dC1hbGlnbjogY2VudGVyO1xuICB9XG59XG4iXX0= */"] });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](LoginFormComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: 'app-login-form',
                templateUrl: './login-form.component.html',
                styleUrls: ['./login-form.component.scss']
            }]
    }], function () { return [{ type: _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormBuilder"] }, { type: _services_auth_service__WEBPACK_IMPORTED_MODULE_4__["AuthService"] }, { type: _services_cross_component_communication_service__WEBPACK_IMPORTED_MODULE_5__["CrossComponentCommunicationService"] }]; }, { formMoveInitiated: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
        }], forgottenPassRef: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["ViewChild"],
            args: ['forgottenPassRef']
        }], loginEmailRef: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["ViewChild"],
            args: ['loginEmailRef']
        }] }); })();


/***/ }),

/***/ "./src/app/authentication/signup-form/signup-form.component.ts":
/*!*********************************************************************!*\
  !*** ./src/app/authentication/signup-form/signup-form.component.ts ***!
  \*********************************************************************/
/*! exports provided: SignupFormComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SignupFormComponent", function() { return SignupFormComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/__ivy_ngcc__/fesm2015/forms.js");
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! rxjs */ "./node_modules/rxjs/_esm2015/index.js");
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! rxjs/operators */ "./node_modules/rxjs/_esm2015/operators/index.js");
/* harmony import */ var _services_auth_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../services/auth.service */ "./src/app/services/auth.service.ts");
/* harmony import */ var _services_cross_component_communication_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../services/cross-component-communication.service */ "./src/app/services/cross-component-communication.service.ts");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/common.js");









const _c0 = ["signupEmailRef"];
function SignupFormComponent_span_18_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](0, "span", 13);
} }
function SignupFormComponent_p_21_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "p");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, " Thank you for joining us! ");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](2, "br");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](3, " All you have to do now is log in");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "span", 14);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](5, ".");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](6, "span", 15);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](7, "on the left side.");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} }
function SignupFormComponent_p_23_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "p", 16);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipe"](2, "async");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipe"](3, "async");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r3 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipeBind1"](2, 1, ctx_r3.isUserSignedUp) !== true ? _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipeBind1"](3, 3, ctx_r3.isUserSignedUp) : null);
} }
const _c1 = function (a0) { return { "move-sign-up-form": a0 }; };
const _c2 = function (a0) { return { "transform": a0 }; };
class SignupFormComponent {
    constructor(formBuild, authService, crossComponentService) {
        this.formBuild = formBuild;
        this.authService = authService;
        this.crossComponentService = crossComponentService;
        this.isUserSignedUp = this.authService.signedUpSubj;
        this.loaderSub = this.authService.signUpLoaderSubj;
        this.destroyed$ = new rxjs__WEBPACK_IMPORTED_MODULE_2__["Subject"]();
    }
    ngOnInit() {
        this.crossComponentService.resetSignUpForm$.pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["takeUntil"])(this.destroyed$)).subscribe(data => {
            if (data) {
                this.signUpForm.reset();
            }
        });
        this.signUpForm = this.formBuild.group({
            email: ['', [
                    _angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].required,
                    _angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].email,
                    _angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].pattern('[a-z0-9._%+-]+@[a-z0-9.-]+\\.[a-z]{2,3}$')
                ]],
            password: ['', [
                    _angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].required,
                    _angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].minLength(9)
                ]]
        });
    }
    get signUpEmail() {
        return this.signUpForm.get('email');
    }
    get signUpPassword() {
        return this.signUpForm.get('password');
    }
    onSubmitSignUp() {
        this.authService.signUpUser(this.signUpEmail.value, this.signUpPassword.value);
        this.signupEmailRef.nativeElement.focus();
        this.signupEmailRef.nativeElement.blur();
        this.signUpForm.reset();
    }
    ngOnDestroy() {
        this.destroyed$.next(true);
        this.destroyed$.complete();
    }
}
SignupFormComponent.ɵfac = function SignupFormComponent_Factory(t) { return new (t || SignupFormComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormBuilder"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_services_auth_service__WEBPACK_IMPORTED_MODULE_4__["AuthService"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_services_cross_component_communication_service__WEBPACK_IMPORTED_MODULE_5__["CrossComponentCommunicationService"])); };
SignupFormComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: SignupFormComponent, selectors: [["app-signup-form"]], viewQuery: function SignupFormComponent_Query(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵviewQuery"](_c0, true);
    } if (rf & 2) {
        var _t;
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵqueryRefresh"](_t = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵloadQuery"]()) && (ctx.signupEmailRef = _t.first);
    } }, inputs: { formMoveInitiated: "formMoveInitiated" }, decls: 24, vars: 23, consts: [[1, "signup-form-wrapper"], [1, "signup-form-body", 3, "ngClass", "ngStyle"], [3, "formGroup", "ngSubmit"], ["for", "email_sign_up"], ["autocomplete", "username", "required", "", "id", "email_sign_up", "formControlName", "email", "placeholder", "Email", "type", "email"], ["signupEmailRef", ""], ["for", "password_sign_up"], ["autocomplete", "current-password", "required", "", "id", "password_sign_up", "formControlName", "password", "placeholder", "Password", "type", "password"], ["type", "submit", 3, "disabled"], ["class", "loader", 4, "ngIf"], [1, "notification-messages", "signup-messages"], [4, "ngIf"], ["class", "submission-error", 4, "ngIf"], [1, "loader"], [1, "mobile-sign-up-message"], [1, "desktop-tablet-sign-up-message"], [1, "submission-error"]], template: function SignupFormComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipe"](2, "async");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "h2");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](4, "Sign up");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "form", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("ngSubmit", function SignupFormComponent_Template_form_ngSubmit_5_listener() { return ctx.onSubmitSignUp(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](6, "label", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](7, "input", 4, 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](9, "small");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](10, " Email format not valid/Use only lowercase ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](11, "label", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](12, "input", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](13, "small");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](14, " Password is too short (Min 9 chars) ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](15, "button", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipe"](16, "async");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](17, "Sign up");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](18, SignupFormComponent_span_18_Template, 1, 0, "span", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipe"](19, "async");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](20, "div", 10);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](21, SignupFormComponent_p_21_Template, 8, 0, "p", 11);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipe"](22, "async");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](23, SignupFormComponent_p_23_Template, 4, 5, "p", 12);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngClass", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction1"](19, _c1, ctx.formMoveInitiated))("ngStyle", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction1"](21, _c2, _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipeBind1"](2, 11, ctx.isUserSignedUp) ? "translateY(-20px)" : "translateY(0)"));
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("formGroup", ctx.signUpForm);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵclassProp"]("hide-input-validation", ctx.signUpEmail.value === "" || ctx.signUpEmail.valid || ctx.signUpEmail.untouched);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵclassProp"]("hide-input-validation", ctx.signUpPassword.value === "" || ctx.signUpPassword.valid || ctx.signUpPassword.untouched);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("disabled", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipeBind1"](16, 13, ctx.isUserSignedUp) === true || ctx.signUpEmail.invalid || ctx.signUpPassword.invalid);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipeBind1"](19, 15, ctx.loaderSub) === false);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipeBind1"](22, 17, ctx.isUserSignedUp) === true);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.formMoveInitiated);
    } }, directives: [_angular_common__WEBPACK_IMPORTED_MODULE_6__["NgClass"], _angular_common__WEBPACK_IMPORTED_MODULE_6__["NgStyle"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["ɵangular_packages_forms_forms_y"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["NgControlStatusGroup"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormGroupDirective"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["DefaultValueAccessor"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["RequiredValidator"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["NgControlStatus"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormControlName"], _angular_common__WEBPACK_IMPORTED_MODULE_6__["NgIf"]], pipes: [_angular_common__WEBPACK_IMPORTED_MODULE_6__["AsyncPipe"]], styles: ["countdown[_ngcontent-%COMP%] {\n  padding: 10px 25px;\n  border-radius: 10px;\n}\n\n.hide-input-validation[_ngcontent-%COMP%] {\n  display: none;\n}\n.slide-in-password[_ngcontent-%COMP%] {\n  transform: translateX(0) !important;\n}\n\nh2[_ngcontent-%COMP%] {\n  color: #362843;\n  text-align: center;\n}\nform[_ngcontent-%COMP%] {\n  display: flex;\n  flex-wrap: wrap;\n  justify-content: center;\n  position: relative;\n}\nform[_ngcontent-%COMP%]   input[_ngcontent-%COMP%] {\n  border: 1px solid green;\n  border-radius: 4px;\n  outline: none;\n  color: #362843;\n  width: 75%;\n  font-weight: bold;\n  letter-spacing: 0.08rem;\n  font-family: inherit;\n  padding: 12px 10px 12px 10px;\n  transition: all 0.2s linear;\n}\nform[_ngcontent-%COMP%]   input[_ngcontent-%COMP%]:not(:first-of-type) {\n  margin-top: 20px;\n}\nform[_ngcontent-%COMP%]   small[_ngcontent-%COMP%] {\n  width: 75%;\n  padding-top: 5px;\n  text-align: left;\n  position: absolute;\n  font-weight: bold;\n  color: #ff5858;\n}\nform[_ngcontent-%COMP%]   small[_ngcontent-%COMP%]:nth-of-type(1) {\n  margin-top: 39px;\n}\nform[_ngcontent-%COMP%]   small[_ngcontent-%COMP%]:nth-of-type(2) {\n  margin-top: 101px;\n}\n@media screen and (max-width: 450px) {\n  form[_ngcontent-%COMP%]   small[_ngcontent-%COMP%] {\n    width: 100%;\n    text-align: center;\n  }\n}\nform[_ngcontent-%COMP%]   button[_ngcontent-%COMP%]:not(.forgot-submit) {\n  background-color: #362843;\n  border-radius: 15px;\n  border: 1px solid transparent;\n  margin-top: 20px;\n  font-family: Roboto, \"Helvetica Neue\", sans-serif;\n  color: white;\n  font-weight: 500;\n  padding: 8px 35px;\n  outline: none;\n  transition: all 0.2s ease-in-out;\n}\nform[_ngcontent-%COMP%]   button[_ngcontent-%COMP%]:disabled {\n  background-color: white;\n  cursor: not-allowed;\n  color: #362843;\n  border: 1px solid #362843;\n}\nform[_ngcontent-%COMP%]   button[_ngcontent-%COMP%]:hover:not([disabled]):not(.forgot-submit) {\n  cursor: pointer;\n  color: white;\n  border-color: #41c7af;\n  background-color: #41c7af;\n}\nform[_ngcontent-%COMP%]   button[_ngcontent-%COMP%]:focus {\n  outline: none;\n}\n\n@media screen and (min-width: 450px) {\n  .move-log-in-form[_ngcontent-%COMP%] {\n    margin-left: 350px;\n  }\n}\n@media screen and (min-width: 450px) {\n  .move-sign-up-form[_ngcontent-%COMP%] {\n    margin-left: 0 !important;\n  }\n}\n.move-log--in-wrapper-mobile[_ngcontent-%COMP%] {\n  margin-left: 100px;\n}\n\n.loader[_ngcontent-%COMP%] {\n  position: absolute;\n  right: 76px;\n  bottom: 1px;\n  font-size: 10px;\n  text-indent: -9999em;\n  width: 30px;\n  height: 30px;\n  border-radius: 50%;\n  background: #ffffff;\n  background: linear-gradient(to right, #54e38e 10%, rgba(255, 255, 255, 0) 42%);\n  -webkit-animation: load3 1.4s infinite linear;\n  animation: load3 1.4s infinite linear;\n  transform: translateZ(0);\n  transition: all 0.2s ease-in-out;\n}\n.loader[_ngcontent-%COMP%]:before {\n  width: 50%;\n  height: 50%;\n  border-radius: 100% 0 0 0;\n  position: absolute;\n  top: 0;\n  left: 0;\n  content: \"\";\n}\n.loader[_ngcontent-%COMP%]:after {\n  width: 75%;\n  height: 75%;\n  border-radius: 50%;\n  content: \"\";\n  margin: auto;\n  position: absolute;\n  top: 0;\n  left: 0;\n  bottom: 0;\n  right: 0;\n}\n@-webkit-keyframes load3 {\n  0% {\n    transform: rotate(0deg);\n  }\n  100% {\n    transform: rotate(360deg);\n  }\n}\n@keyframes load3 {\n  0% {\n    transform: rotate(0deg);\n  }\n  100% {\n    transform: rotate(360deg);\n  }\n}\n.notification-messages[_ngcontent-%COMP%] {\n  position: absolute;\n  pointer-events: none;\n  width: 80%;\n}\n@media screen and (max-width: 450px) {\n  .notification-messages[_ngcontent-%COMP%] {\n    width: 90%;\n  }\n}\n.notification-messages[_ngcontent-%COMP%]   p[_ngcontent-%COMP%] {\n  font-weight: bold;\n  font-size: 13px;\n  text-align: center;\n}\n.notification-messages[_ngcontent-%COMP%]   p.submission-error[_ngcontent-%COMP%] {\n  color: #ff6e6e;\n}\n[_nghost-%COMP%] {\n  display: flex;\n  justify-content: center;\n  align-items: center;\n  overflow: hidden;\n  flex-direction: column;\n  background: white;\n}\n[_nghost-%COMP%]   .signup-form-body[_ngcontent-%COMP%] {\n  transition-delay: 0.05s;\n  width: 100%;\n  transform: translateZ(0);\n  overflow: hidden;\n  margin-left: -350px;\n  transition: all 0.6s ease-in-out;\n}\n@media screen and (max-width: 450px) {\n  [_nghost-%COMP%]   .signup-form-body[_ngcontent-%COMP%] {\n    margin-left: 0;\n  }\n}\n[_nghost-%COMP%]   .signup-form-body[_ngcontent-%COMP%]   small[_ngcontent-%COMP%]:nth-of-type(3) {\n  margin-top: 157px;\n}\n.signup-messages[_ngcontent-%COMP%] {\n  bottom: 30px;\n}\n@media screen and (max-width: 450px) {\n  .signup-messages[_ngcontent-%COMP%] {\n    bottom: 50px;\n  }\n}\n@media screen and (min-width: 450px) {\n  .signup-messages[_ngcontent-%COMP%]   .mobile-sign-up-message[_ngcontent-%COMP%] {\n    display: none;\n  }\n}\n@media screen and (max-width: 450px) {\n  .signup-messages[_ngcontent-%COMP%]   .desktop-tablet-sign-up-message[_ngcontent-%COMP%] {\n    display: none;\n  }\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvc2hhcmVkL2dlbmVyYWwtc3R5bGUvZ2VuZXJhbC1zdHlsZS5zY3NzIiwic3JjL2FwcC9hdXRoZW50aWNhdGlvbi9zaWdudXAtZm9ybS9zaWdudXAtZm9ybS5jb21wb25lbnQuc2NzcyIsInNyYy9hcHAvYXV0aGVudGljYXRpb24vY29tbW9uLWZvcm0tc3R5bGVzL2NvbW1vbi1mb3JtLXN0eWxlcy5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUNBLDJEQUFBO0FBeUJBO0VBQ0Usa0JBQUE7RUFDQSxtQkFBQTtBQ3hCRjtBRDJCQSw0QkFBQTtBQUVBO0VBQ0UsYUFBQTtBQ3pCRjtBRDRCQTtFQUNFLG1DQUFBO0FDekJGO0FENEJBLFdBQUE7QUV0Q0E7RUFDRSxjRkZnQjtFRUdoQixrQkFBQTtBRGNGO0FDWEE7RUFDRSxhQUFBO0VBQ0EsZUFBQTtFQUNBLHVCQUFBO0VBQ0Esa0JBQUE7QURjRjtBQ1pFO0VBQ0UsdUJBQUE7RUFDQSxrQkFBQTtFQUNBLGFBQUE7RUFDQSxjRmhCYztFRWlCZCxVQUFBO0VBQ0EsaUJBQUE7RUFDQSx1QkFBQTtFQUNBLG9CQUFBO0VBQ0EsNEJBQUE7RUFDQSwyQkFBQTtBRGNKO0FDWkk7RUFDRSxnQkFBQTtBRGNOO0FDVEU7RUFDRSxVQUFBO0VBQ0EsZ0JBQUE7RUFDQSxnQkFBQTtFQUNBLGtCQUFBO0VBQ0EsaUJBQUE7RUFDQSxjQUFBO0FEV0o7QUNUSTtFQUNFLGdCQUFBO0FEV047QUNSSTtFQUNFLGlCQUFBO0FEVU47QUNQSTtFQWhCRjtJQWlCSSxXQUFBO0lBQ0Esa0JBQUE7RURVSjtBQUNGO0FDTEk7RUFDRSx5QkZ2RFk7RUV3RFosbUJBQUE7RUFDQSw2QkFBQTtFQUNBLGdCQUFBO0VBQ0EsaURGL0NnQjtFRWdEaEIsWUFBQTtFQUNBLGdCQUFBO0VBQ0EsaUJBQUE7RUFDQSxhQUFBO0VGL0NKLGdDQUFBO0FDdURGO0FDSkk7RUFDRSx1QkFBQTtFQUNBLG1CRnhEWTtFRXlEWixjRnRFWTtFRXVFWix5QkFBQTtBRE1OO0FDQ1E7RUFDRSxlQUFBO0VBQ0EsWUFBQTtFQUNBLHFCQUFBO0VBQ0EseUJBQUE7QURDVjtBQ0lJO0VBQ0UsYUFBQTtBREZOO0FDT0EscUJBQUE7QUFJRTtFQUZGO0lBR0ksa0JBQUE7RURORjtBQUNGO0FDV0U7RUFGRjtJQUdJLHlCQUFBO0VEUEY7QUFDRjtBQ1VBO0VBQ0Usa0JBQUE7QURQRjtBQ1VBLFdBQUE7QUFDQTtFQUNFLGtCQUFBO0VBQ0EsV0FBQTtFQUNBLFdBQUE7RUFDQSxlQUFBO0VBQ0Esb0JBQUE7RUFDQSxXQUFBO0VBQ0EsWUFBQTtFQUNBLGtCQUFBO0VBQ0EsbUJBQUE7RUFDQSw4RUFBQTtFQUNBLDZDQUFBO0VBQ0EscUNBQUE7RUFDQSx3QkFBQTtFRi9HQSxnQ0FBQTtBQ3lHRjtBQ1NFO0VBQ0UsVUFBQTtFQUNBLFdBQUE7RUFDQSx5QkFBQTtFQUNBLGtCQUFBO0VBQ0EsTUFBQTtFQUNBLE9BQUE7RUFDQSxXQUFBO0FEUEo7QUNVRTtFQUNFLFVBQUE7RUFDQSxXQUFBO0VBQ0Esa0JBQUE7RUFDQSxXQUFBO0VBQ0EsWUFBQTtFQUNBLGtCQUFBO0VBQ0EsTUFBQTtFQUNBLE9BQUE7RUFDQSxTQUFBO0VBQ0EsUUFBQTtBRFJKO0FDV0U7RUFDRTtJQUVFLHVCQUFBO0VEVEo7RUNXRTtJQUVFLHlCQUFBO0VEVEo7QUFDRjtBQ1dFO0VBQ0U7SUFFRSx1QkFBQTtFRFRKO0VDV0U7SUFFRSx5QkFBQTtFRFRKO0FBQ0Y7QUNhQTtFQUNFLGtCQUFBO0VBQ0Esb0JBQUE7RUFDQSxVQUFBO0FEVkY7QUNZRTtFQUxGO0lBTUksVUFBQTtFRFRGO0FBQ0Y7QUNXRTtFQU1FLGlCQUFBO0VBQ0EsZUFBQTtFQUNBLGtCQUFBO0FEZEo7QUNRSTtFQUNFLGNBQUE7QUROTjtBQXRMQTtFQUNFLGFBQUE7RUFDQSx1QkFBQTtFQUNBLG1CQUFBO0VBQ0EsZ0JBQUE7RUFDQSxzQkFBQTtFQUNBLGlCQUFBO0FBeUxGO0FBdkxFO0VBQ0UsdUJBQUE7RUFDQSxXQUFBO0VBQ0Esd0JBQUE7RUFDQSxnQkFBQTtFQUNBLG1CQUFBO0VESUYsZ0NBQUE7QUNzTEY7QUF0TEk7RUFURjtJQVVJLGNBQUE7RUF5TEo7QUFDRjtBQXJMTTtFQUNFLGlCQUFBO0FBdUxSO0FBakxBO0VBQ0UsWUFBQTtBQW9MRjtBQWxMRTtFQUhGO0lBSUksWUFBQTtFQXFMRjtBQUNGO0FBakxJO0VBRkY7SUFHSSxhQUFBO0VBb0xKO0FBQ0Y7QUEvS0k7RUFGRjtJQUdJLGFBQUE7RUFrTEo7QUFDRiIsImZpbGUiOiJzcmMvYXBwL2F1dGhlbnRpY2F0aW9uL3NpZ251cC1mb3JtL3NpZ251cC1mb3JtLmNvbXBvbmVudC5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiXG4vKiBCYXNlIHRleHQgY29sb3JzLCB0cmFuc2l0aW9ucyBhbmQgYmFja2dyb3VuZCBncmFkaWVudHMgKi9cbiRiYXNlLXRleHQtY29sb3I6ICMzNjI4NDM7XG4kcm95YWwtcmVkLWdyYWRpZW50OiBsaW5lYXItZ3JhZGllbnQoLTYwZGVnLCAjZmY2ZTZlIDAlLCAjNzkwOTA5IDEwMCUpO1xuJGVycm9yLWNvbG9yOiAjZmY2ZTZlO1xuJGJhc2UtZ3JlZW4tY29sb3I6ICM0MWM3YWY7XG4kZmxhdC1ncmVlbi1ncmFkaWVudDogbGluZWFyLWdyYWRpZW50KC02MGRlZywgIzQxYzdhZiAwJSwgIzU0ZTM4ZSAxMDAlKTtcbiRmbGF0LWdyZWVuLWdyYWRpZW50LXJldmVyc2U6IGxpbmVhci1ncmFkaWVudCgtNjBkZWcsICM1NGUzOGUgMCUsICM0MWM3YWYgMTAwJSk7XG4kaG92ZXItYnV0dG9uLWNvbG9yOiAjY2QyMjIyO1xuJHBpbmstZGVmYXVsdDogI2ZmNmU2ZTtcbiRjb250cm9sLXBhbmVsLXdpZHRoOiA0MDBweDtcbiRkZWZhdWx0LXRyYW5zaXRpb246IGFsbCAuMXMgbGluZWFyO1xuJGJhc2UtZm9udC1zaXplOiAyMHB4O1xuJHNtYWxsZXItYmFzZS1mb250LXNpemU6ICRiYXNlLWZvbnQtc2l6ZSAtIDJweDtcbiRnZW5lcmFsLWZvbnQtZmFtaWx5OiBSb2JvdG8sIFwiSGVsdmV0aWNhIE5ldWVcIiwgc2Fucy1zZXJpZjtcbiRkaXNhYmxlZC1jdXJzb3I6IG5vdC1hbGxvd2VkO1xuXG5AbWl4aW4gdHJhbnNpdGlvbi1ibHVlcHJpbnQoJHRpbWUpIHtcbiAgdHJhbnNpdGlvbjogYWxsICR0aW1lIGVhc2UtaW4tb3V0O1xufVxuXG5AbWl4aW4gc3F1YXJlLXNpemUoJHdpZHRoLCAkaGVpZ2h0OiAkd2lkdGgpIHtcbiAgd2lkdGg6ICR3aWR0aDtcbiAgaGVpZ2h0OiAkaGVpZ2h0O1xufVxuXG5jb3VudGRvd24ge1xuICBwYWRkaW5nOiAxMHB4IDI1cHg7XG4gIGJvcmRlci1yYWRpdXM6IDEwcHg7XG59XG5cbi8qIEZvcm0gVmFsaWRhdGlvbiBjbGFzc2VzICovXG5cbi5oaWRlLWlucHV0LXZhbGlkYXRpb24ge1xuICBkaXNwbGF5OiBub25lO1xufVxuXG4uc2xpZGUtaW4tcGFzc3dvcmQge1xuICB0cmFuc2Zvcm06IHRyYW5zbGF0ZVgoMCkgIWltcG9ydGFudDtcbn1cblxuLyogbWl4aW5zICovXG5cbkBtaXhpbiBiYXNlLWJveC1zaGFkb3cge1xuICAtd2Via2l0LWJveC1zaGFkb3c6IC0xcHggNnB4IDEycHggLTVweCAjMDAwMDAwO1xuICBib3gtc2hhZG93OiAtMXB4IDZweCAxMnB4IC01cHggIzAwMDAwMDtcbn1cblxuQG1peGluIGZsZXgtY2VudGVyIHtcbiAgZGlzcGxheTogZmxleDtcbiAgZmxleC13cmFwOiB3cmFwO1xuICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcbn1cbiIsIkBpbXBvcnQgXCIuLi9jb21tb24tZm9ybS1zdHlsZXMvY29tbW9uLWZvcm0tc3R5bGVzXCI7XG46aG9zdCB7XG4gIGRpc3BsYXk6IGZsZXg7XG4gIGp1c3RpZnktY29udGVudDogY2VudGVyO1xuICBhbGlnbi1pdGVtczogY2VudGVyO1xuICBvdmVyZmxvdzogaGlkZGVuO1xuICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xuICBiYWNrZ3JvdW5kOiB3aGl0ZTtcblxuICAuc2lnbnVwLWZvcm0tYm9keSB7XG4gICAgdHJhbnNpdGlvbi1kZWxheTogLjA1cztcbiAgICB3aWR0aDogMTAwJTtcbiAgICB0cmFuc2Zvcm06IHRyYW5zbGF0ZVooMCk7XG4gICAgb3ZlcmZsb3c6IGhpZGRlbjtcbiAgICBtYXJnaW4tbGVmdDogLTM1MHB4O1xuXG4gICAgQGluY2x1ZGUgdHJhbnNpdGlvbi1ibHVlcHJpbnQoLjZzKTtcblxuICAgIEBtZWRpYSBzY3JlZW4gYW5kIChtYXgtd2lkdGg6IDQ1MHB4KSB7XG4gICAgICBtYXJnaW4tbGVmdDogMDtcbiAgICB9XG5cbiAgICBzbWFsbCB7XG5cbiAgICAgICY6bnRoLW9mLXR5cGUoMykge1xuICAgICAgICBtYXJnaW4tdG9wOiAxNTdweDtcbiAgICAgIH1cbiAgICB9XG4gIH1cbn1cblxuLnNpZ251cC1tZXNzYWdlcyB7XG4gIGJvdHRvbTogMzBweDtcblxuICBAbWVkaWEgc2NyZWVuIGFuZCAobWF4LXdpZHRoOiA0NTBweCkge1xuICAgIGJvdHRvbTogNTBweDtcbiAgfVxuXG4gIC5tb2JpbGUtc2lnbi11cC1tZXNzYWdlIHtcblxuICAgIEBtZWRpYSBzY3JlZW4gYW5kIChtaW4td2lkdGg6IDQ1MHB4KSB7XG4gICAgICBkaXNwbGF5OiBub25lO1xuICAgIH1cbiAgfVxuXG4gIC5kZXNrdG9wLXRhYmxldC1zaWduLXVwLW1lc3NhZ2Uge1xuXG4gICAgQG1lZGlhIHNjcmVlbiBhbmQgKG1heC13aWR0aDogNDUwcHgpIHtcbiAgICAgIGRpc3BsYXk6IG5vbmU7XG4gICAgfVxuICB9XG59XG5cbiIsIkBpbXBvcnQgJy4uLy4uL3NoYXJlZC9nZW5lcmFsLXN0eWxlL2dlbmVyYWwtc3R5bGUnO1xuXG5cbmgyIHtcbiAgY29sb3I6ICRiYXNlLXRleHQtY29sb3I7XG4gIHRleHQtYWxpZ246IGNlbnRlcjtcbn1cblxuZm9ybSB7XG4gIGRpc3BsYXk6IGZsZXg7XG4gIGZsZXgtd3JhcDogd3JhcDtcbiAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XG4gIHBvc2l0aW9uOiByZWxhdGl2ZTtcblxuICBpbnB1dCB7XG4gICAgYm9yZGVyOiAxcHggc29saWQgZ3JlZW47XG4gICAgYm9yZGVyLXJhZGl1czogNHB4O1xuICAgIG91dGxpbmU6IG5vbmU7XG4gICAgY29sb3I6ICRiYXNlLXRleHQtY29sb3I7XG4gICAgd2lkdGg6IDc1JTtcbiAgICBmb250LXdlaWdodDogYm9sZDtcbiAgICBsZXR0ZXItc3BhY2luZzogMC4wOHJlbTtcbiAgICBmb250LWZhbWlseTogaW5oZXJpdDtcbiAgICBwYWRkaW5nOiAxMnB4IDEwcHggMTJweCAxMHB4O1xuICAgIHRyYW5zaXRpb246IGFsbCAuMnMgbGluZWFyO1xuXG4gICAgJjpub3QoOmZpcnN0LW9mLXR5cGUpIHtcbiAgICAgIG1hcmdpbi10b3A6IDIwcHg7XG4gICAgfVxuXG4gIH1cblxuICBzbWFsbCB7XG4gICAgd2lkdGg6IDc1JTtcbiAgICBwYWRkaW5nLXRvcDogNXB4O1xuICAgIHRleHQtYWxpZ246IGxlZnQ7XG4gICAgcG9zaXRpb246IGFic29sdXRlO1xuICAgIGZvbnQtd2VpZ2h0OiBib2xkO1xuICAgIGNvbG9yOiAjZmY1ODU4O1xuXG4gICAgJjpudGgtb2YtdHlwZSgxKSB7XG4gICAgICBtYXJnaW4tdG9wOiAzOXB4O1xuICAgIH1cblxuICAgICY6bnRoLW9mLXR5cGUoMikge1xuICAgICAgbWFyZ2luLXRvcDogMTAxcHg7XG4gICAgfVxuXG4gICAgQG1lZGlhIHNjcmVlbiBhbmQgKG1heC13aWR0aDogNDUwcHgpIHtcbiAgICAgIHdpZHRoOiAxMDAlO1xuICAgICAgdGV4dC1hbGlnbjogY2VudGVyO1xuICAgIH1cbiAgfVxuXG4gIGJ1dHRvbiB7XG5cbiAgICAmOm5vdCguZm9yZ290LXN1Ym1pdCkge1xuICAgICAgYmFja2dyb3VuZC1jb2xvcjogJGJhc2UtdGV4dC1jb2xvcjtcbiAgICAgIGJvcmRlci1yYWRpdXM6IDE1cHg7XG4gICAgICBib3JkZXI6IDFweCBzb2xpZCB0cmFuc3BhcmVudDtcbiAgICAgIG1hcmdpbi10b3A6IDIwcHg7XG4gICAgICBmb250LWZhbWlseTogJGdlbmVyYWwtZm9udC1mYW1pbHk7XG4gICAgICBjb2xvcjogd2hpdGU7XG4gICAgICBmb250LXdlaWdodDogNTAwO1xuICAgICAgcGFkZGluZzogOHB4IDM1cHg7XG4gICAgICBvdXRsaW5lOiBub25lO1xuICAgICAgQGluY2x1ZGUgdHJhbnNpdGlvbi1ibHVlcHJpbnQoLjJzKTtcbiAgICB9XG5cbiAgICAmOmRpc2FibGVkIHtcbiAgICAgIGJhY2tncm91bmQtY29sb3I6IHdoaXRlO1xuICAgICAgY3Vyc29yOiAkZGlzYWJsZWQtY3Vyc29yO1xuICAgICAgY29sb3I6ICRiYXNlLXRleHQtY29sb3I7XG4gICAgICBib3JkZXI6IDFweCBzb2xpZCAkYmFzZS10ZXh0LWNvbG9yO1xuICAgIH1cblxuICAgICY6aG92ZXIge1xuXG4gICAgICAmOm5vdChbZGlzYWJsZWRdKSB7XG5cbiAgICAgICAgJjpub3QoLmZvcmdvdC1zdWJtaXQpIHtcbiAgICAgICAgICBjdXJzb3I6IHBvaW50ZXI7XG4gICAgICAgICAgY29sb3I6IHdoaXRlO1xuICAgICAgICAgIGJvcmRlci1jb2xvcjogIzQxYzdhZjtcbiAgICAgICAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjNDFjN2FmO1xuICAgICAgICB9XG4gICAgICB9XG4gICAgfVxuXG4gICAgJjpmb2N1cyB7XG4gICAgICBvdXRsaW5lOiBub25lO1xuICAgIH1cbiAgfVxufVxuXG4vKiBNb3ZlbWVudCBjbGFzc2VzICovXG5cbi5tb3ZlLWxvZy1pbi1mb3JtIHtcblxuICBAbWVkaWEgc2NyZWVuIGFuZCAobWluLXdpZHRoOiA0NTBweCkge1xuICAgIG1hcmdpbi1sZWZ0OiAzNTBweDtcbiAgfVxufVxuXG4ubW92ZS1zaWduLXVwLWZvcm0ge1xuXG4gIEBtZWRpYSBzY3JlZW4gYW5kIChtaW4td2lkdGg6IDQ1MHB4KSB7XG4gICAgbWFyZ2luLWxlZnQ6IDAgIWltcG9ydGFudDtcbiAgfVxufVxuXG4ubW92ZS1sb2ctLWluLXdyYXBwZXItbW9iaWxlIHtcbiAgbWFyZ2luLWxlZnQ6IDEwMHB4O1xufVxuXG4vKiBMb2FkZXIgKi9cbi5sb2FkZXIge1xuICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gIHJpZ2h0OiA3NnB4O1xuICBib3R0b206IDFweDtcbiAgZm9udC1zaXplOiAxMHB4O1xuICB0ZXh0LWluZGVudDogLTk5OTllbTtcbiAgd2lkdGg6IDMwcHg7XG4gIGhlaWdodDogMzBweDtcbiAgYm9yZGVyLXJhZGl1czogNTAlO1xuICBiYWNrZ3JvdW5kOiAjZmZmZmZmO1xuICBiYWNrZ3JvdW5kOiBsaW5lYXItZ3JhZGllbnQodG8gcmlnaHQsICM1NGUzOGUgMTAlLCByZ2JhKDI1NSwgMjU1LCAyNTUsIDApIDQyJSk7XG4gIC13ZWJraXQtYW5pbWF0aW9uOiBsb2FkMyAxLjRzIGluZmluaXRlIGxpbmVhcjtcbiAgYW5pbWF0aW9uOiBsb2FkMyAxLjRzIGluZmluaXRlIGxpbmVhcjtcbiAgdHJhbnNmb3JtOiB0cmFuc2xhdGVaKDApO1xuICBAaW5jbHVkZSB0cmFuc2l0aW9uLWJsdWVwcmludCguMnMpO1xuXG4gICY6YmVmb3JlIHtcbiAgICB3aWR0aDogNTAlO1xuICAgIGhlaWdodDogNTAlO1xuICAgIGJvcmRlci1yYWRpdXM6IDEwMCUgMCAwIDA7XG4gICAgcG9zaXRpb246IGFic29sdXRlO1xuICAgIHRvcDogMDtcbiAgICBsZWZ0OiAwO1xuICAgIGNvbnRlbnQ6ICcnO1xuICB9XG5cbiAgJjphZnRlciB7XG4gICAgd2lkdGg6IDc1JTtcbiAgICBoZWlnaHQ6IDc1JTtcbiAgICBib3JkZXItcmFkaXVzOiA1MCU7XG4gICAgY29udGVudDogJyc7XG4gICAgbWFyZ2luOiBhdXRvO1xuICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgICB0b3A6IDA7XG4gICAgbGVmdDogMDtcbiAgICBib3R0b206IDA7XG4gICAgcmlnaHQ6IDA7XG4gIH1cblxuICBALXdlYmtpdC1rZXlmcmFtZXMgbG9hZDMge1xuICAgIDAlIHtcbiAgICAgIC13ZWJraXQtdHJhbnNmb3JtOiByb3RhdGUoMGRlZyk7XG4gICAgICB0cmFuc2Zvcm06IHJvdGF0ZSgwZGVnKTtcbiAgICB9XG4gICAgMTAwJSB7XG4gICAgICAtd2Via2l0LXRyYW5zZm9ybTogcm90YXRlKDM2MGRlZyk7XG4gICAgICB0cmFuc2Zvcm06IHJvdGF0ZSgzNjBkZWcpO1xuICAgIH1cbiAgfVxuICBAa2V5ZnJhbWVzIGxvYWQzIHtcbiAgICAwJSB7XG4gICAgICAtd2Via2l0LXRyYW5zZm9ybTogcm90YXRlKDBkZWcpO1xuICAgICAgdHJhbnNmb3JtOiByb3RhdGUoMGRlZyk7XG4gICAgfVxuICAgIDEwMCUge1xuICAgICAgLXdlYmtpdC10cmFuc2Zvcm06IHJvdGF0ZSgzNjBkZWcpO1xuICAgICAgdHJhbnNmb3JtOiByb3RhdGUoMzYwZGVnKTtcbiAgICB9XG4gIH1cbn1cblxuLm5vdGlmaWNhdGlvbi1tZXNzYWdlcyB7XG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgcG9pbnRlci1ldmVudHM6IG5vbmU7XG4gIHdpZHRoOiA4MCU7XG5cbiAgQG1lZGlhIHNjcmVlbiBhbmQgKG1heC13aWR0aDogNDUwcHgpIHtcbiAgICB3aWR0aDogOTAlO1xuICB9XG5cbiAgcCB7XG5cbiAgICAmLnN1Ym1pc3Npb24tZXJyb3Ige1xuICAgICAgY29sb3I6ICNmZjZlNmU7XG4gICAgfVxuXG4gICAgZm9udC13ZWlnaHQ6IGJvbGQ7XG4gICAgZm9udC1zaXplOiAxM3B4O1xuICAgIHRleHQtYWxpZ246IGNlbnRlcjtcbiAgfVxufVxuIl19 */"] });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](SignupFormComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: 'app-signup-form',
                templateUrl: './signup-form.component.html',
                styleUrls: ['./signup-form.component.scss']
            }]
    }], function () { return [{ type: _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormBuilder"] }, { type: _services_auth_service__WEBPACK_IMPORTED_MODULE_4__["AuthService"] }, { type: _services_cross_component_communication_service__WEBPACK_IMPORTED_MODULE_5__["CrossComponentCommunicationService"] }]; }, { formMoveInitiated: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
        }], signupEmailRef: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["ViewChild"],
            args: ['signupEmailRef']
        }] }); })();


/***/ }),

/***/ "./src/app/guards/auth-guard.ts":
/*!**************************************!*\
  !*** ./src/app/guards/auth-guard.ts ***!
  \**************************************/
/*! exports provided: AuthGuard */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AuthGuard", function() { return AuthGuard; });
/* harmony import */ var _shared_models_localStorageKeys__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../shared/models/localStorageKeys */ "./src/app/shared/models/localStorageKeys.ts");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _shared_routes_routes__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../shared/routes/routes */ "./src/app/shared/routes/routes.ts");
/* harmony import */ var _services_local_storage_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../services/local-storage.service */ "./src/app/services/local-storage.service.ts");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");






class AuthGuard {
    constructor(localStorageService, router) {
        this.localStorageService = localStorageService;
        this.router = router;
    }
    canActivate(route, state) {
        if (this.localStorageService.getItem(_shared_models_localStorageKeys__WEBPACK_IMPORTED_MODULE_0__["LocalStorageKeys"].TOKEN_EXPIRY)) {
            return true;
        }
        else {
            this.router.navigate([_shared_routes_routes__WEBPACK_IMPORTED_MODULE_2__["default"].AUTHENTICATION]);
            return false;
        }
    }
}
AuthGuard.ɵfac = function AuthGuard_Factory(t) { return new (t || AuthGuard)(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵinject"](_services_local_storage_service__WEBPACK_IMPORTED_MODULE_3__["LocalStorageService"]), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵinject"](_angular_router__WEBPACK_IMPORTED_MODULE_4__["Router"])); };
AuthGuard.ɵprov = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineInjectable"]({ token: AuthGuard, factory: AuthGuard.ɵfac, providedIn: 'root' });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵsetClassMetadata"](AuthGuard, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"],
        args: [{ providedIn: 'root' }]
    }], function () { return [{ type: _services_local_storage_service__WEBPACK_IMPORTED_MODULE_3__["LocalStorageService"] }, { type: _angular_router__WEBPACK_IMPORTED_MODULE_4__["Router"] }]; }, null); })();


/***/ }),

/***/ "./src/app/guards/redirect-guard.ts":
/*!******************************************!*\
  !*** ./src/app/guards/redirect-guard.ts ***!
  \******************************************/
/*! exports provided: RedirectGuard */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "RedirectGuard", function() { return RedirectGuard; });
/* harmony import */ var _shared_models_localStorageKeys__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../shared/models/localStorageKeys */ "./src/app/shared/models/localStorageKeys.ts");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _shared_routes_routes__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../shared/routes/routes */ "./src/app/shared/routes/routes.ts");
/* harmony import */ var _services_local_storage_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../services/local-storage.service */ "./src/app/services/local-storage.service.ts");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");






class RedirectGuard {
    constructor(localStorageService, router) {
        this.localStorageService = localStorageService;
        this.router = router;
    }
    canActivate(route, state) {
        if (this.localStorageService.getItem(_shared_models_localStorageKeys__WEBPACK_IMPORTED_MODULE_0__["LocalStorageKeys"].TOKEN_EXPIRY)) {
            this.router.navigate([_shared_routes_routes__WEBPACK_IMPORTED_MODULE_2__["default"].HOME]);
        }
        else {
            return true;
        }
    }
}
RedirectGuard.ɵfac = function RedirectGuard_Factory(t) { return new (t || RedirectGuard)(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵinject"](_services_local_storage_service__WEBPACK_IMPORTED_MODULE_3__["LocalStorageService"]), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵinject"](_angular_router__WEBPACK_IMPORTED_MODULE_4__["Router"])); };
RedirectGuard.ɵprov = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineInjectable"]({ token: RedirectGuard, factory: RedirectGuard.ɵfac, providedIn: 'root' });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵsetClassMetadata"](RedirectGuard, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"],
        args: [{ providedIn: 'root' }]
    }], function () { return [{ type: _services_local_storage_service__WEBPACK_IMPORTED_MODULE_3__["LocalStorageService"] }, { type: _angular_router__WEBPACK_IMPORTED_MODULE_4__["Router"] }]; }, null); })();


/***/ }),

/***/ "./src/app/services/auth.service.ts":
/*!******************************************!*\
  !*** ./src/app/services/auth.service.ts ***!
  \******************************************/
/*! exports provided: AuthService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AuthService", function() { return AuthService; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! rxjs */ "./node_modules/rxjs/_esm2015/index.js");
/* harmony import */ var _shared_models_apiKeys__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../shared/models/apiKeys */ "./src/app/shared/models/apiKeys.ts");
/* harmony import */ var _shared_routes_routes__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../shared/routes/routes */ "./src/app/shared/routes/routes.ts");
/* harmony import */ var _shared_models_responses_model__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../shared/models/responses.model */ "./src/app/shared/models/responses.model.ts");
/* harmony import */ var _shared_models_localStorageKeys__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../shared/models/localStorageKeys */ "./src/app/shared/models/localStorageKeys.ts");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/http.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");
/* harmony import */ var _local_storage_service__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./local-storage.service */ "./src/app/services/local-storage.service.ts");










class AuthService {
    constructor(http, router, localStorageService) {
        this.http = http;
        this.router = router;
        this.localStorageService = localStorageService;
        this.signedUpSubj = new rxjs__WEBPACK_IMPORTED_MODULE_1__["Subject"]();
        this.loggedInSubj = new rxjs__WEBPACK_IMPORTED_MODULE_1__["Subject"]();
        this.signUpLoaderSubj = new rxjs__WEBPACK_IMPORTED_MODULE_1__["Subject"]();
        this.logInLoaderSubj = new rxjs__WEBPACK_IMPORTED_MODULE_1__["Subject"]();
    }
    signUpUser(email, password) {
        this.signUpLoaderSubj.next(false);
        this.http.post(AuthService.signUpEndpoint, {
            email,
            password,
            returnSecureToken: true
        }).subscribe(() => {
            this.signedUpSubj.next(true);
            this.signUpLoaderSubj.next(true);
        }, () => {
            this.signedUpSubj.next(AuthService.failedSignUpMessage);
            this.signUpLoaderSubj.next(true);
        });
    }
    logInUser(email, password) {
        this.logInLoaderSubj.next(false);
        this.http.post(AuthService.logInEndpoint, {
            email,
            password,
            returnSecureToken: true
        }).subscribe((data) => {
            this.localStorageService.clearLocalStorage();
            const requestMomentDate = Math.round(new Date().getTime() / 1000);
            this.localStorageService.setItem(_shared_models_localStorageKeys__WEBPACK_IMPORTED_MODULE_5__["LocalStorageKeys"].REQUEST_MOMENT_DATE, String(requestMomentDate));
            this.localStorageService.setItem(_shared_models_localStorageKeys__WEBPACK_IMPORTED_MODULE_5__["LocalStorageKeys"].TOKEN_EXPIRY, data.expiresIn);
            this.localStorageService.setItem(_shared_models_localStorageKeys__WEBPACK_IMPORTED_MODULE_5__["LocalStorageKeys"].FIREBASE_UID, data.localId);
            this.loggedInSubj.next(true);
            this.logInLoaderSubj.next(true);
            this.router.navigate([_shared_routes_routes__WEBPACK_IMPORTED_MODULE_3__["default"].HOME]);
        }, () => {
            this.loggedInSubj.next(AuthService.failedLogInMessage);
            this.logInLoaderSubj.next(true);
        });
    }
    // logic to keep the user logged in even when opening a separate tab based on the token expiry value
    calculateRemainingLoginTime() {
        const timeDif = Number(localStorage.getItem(_shared_models_localStorageKeys__WEBPACK_IMPORTED_MODULE_5__["LocalStorageKeys"].DEPARTURE_MOMENT_DATE)) - Number(localStorage.getItem(_shared_models_localStorageKeys__WEBPACK_IMPORTED_MODULE_5__["LocalStorageKeys"].REQUEST_MOMENT_DATE));
        if (timeDif < Number(localStorage.getItem(_shared_models_localStorageKeys__WEBPACK_IMPORTED_MODULE_5__["LocalStorageKeys"].TOKEN_EXPIRY)) && localStorage.getItem(_shared_models_localStorageKeys__WEBPACK_IMPORTED_MODULE_5__["LocalStorageKeys"].REQUEST_MOMENT_DATE)) {
            this.router.navigate([_shared_routes_routes__WEBPACK_IMPORTED_MODULE_3__["default"].HOME]);
        }
    }
}
AuthService.failedSignUpMessage = _shared_models_responses_model__WEBPACK_IMPORTED_MODULE_4__["ResponsesMessages"].FAILED_SIGNUP_MESSAGE;
AuthService.failedLogInMessage = _shared_models_responses_model__WEBPACK_IMPORTED_MODULE_4__["ResponsesMessages"].FAILED_LOGIN_MESSAGE;
AuthService.signUpEndpoint = `${_shared_models_apiKeys__WEBPACK_IMPORTED_MODULE_2__["FireBaseAPIDetails"].signUpEndpoint}${_shared_models_apiKeys__WEBPACK_IMPORTED_MODULE_2__["FireBaseAPIDetails"].firebaseAPIKey}`;
AuthService.logInEndpoint = `${_shared_models_apiKeys__WEBPACK_IMPORTED_MODULE_2__["FireBaseAPIDetails"].logInEndpoint}${_shared_models_apiKeys__WEBPACK_IMPORTED_MODULE_2__["FireBaseAPIDetails"].firebaseAPIKey}`;
AuthService.ɵfac = function AuthService_Factory(t) { return new (t || AuthService)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵinject"](_angular_common_http__WEBPACK_IMPORTED_MODULE_6__["HttpClient"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵinject"](_angular_router__WEBPACK_IMPORTED_MODULE_7__["Router"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵinject"](_local_storage_service__WEBPACK_IMPORTED_MODULE_8__["LocalStorageService"])); };
AuthService.ɵprov = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjectable"]({ token: AuthService, factory: AuthService.ɵfac, providedIn: 'root' });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](AuthService, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"],
        args: [{
                providedIn: 'root'
            }]
    }], function () { return [{ type: _angular_common_http__WEBPACK_IMPORTED_MODULE_6__["HttpClient"] }, { type: _angular_router__WEBPACK_IMPORTED_MODULE_7__["Router"] }, { type: _local_storage_service__WEBPACK_IMPORTED_MODULE_8__["LocalStorageService"] }]; }, null); })();


/***/ }),

/***/ "./src/app/services/cross-component-communication.service.ts":
/*!*******************************************************************!*\
  !*** ./src/app/services/cross-component-communication.service.ts ***!
  \*******************************************************************/
/*! exports provided: CrossComponentCommunicationService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CrossComponentCommunicationService", function() { return CrossComponentCommunicationService; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! rxjs */ "./node_modules/rxjs/_esm2015/index.js");



class CrossComponentCommunicationService {
    constructor() {
        this.totalCustomTimers$ = new rxjs__WEBPACK_IMPORTED_MODULE_1__["Subject"]();
        this.turnSoundOff$ = new rxjs__WEBPACK_IMPORTED_MODULE_1__["BehaviorSubject"](false);
        this.resetSignUpForm$ = new rxjs__WEBPACK_IMPORTED_MODULE_1__["Subject"]();
        this.resetLoginForm$ = new rxjs__WEBPACK_IMPORTED_MODULE_1__["Subject"]();
        this.timerData$ = new rxjs__WEBPACK_IMPORTED_MODULE_1__["Subject"]();
        this.customTimerData$ = new rxjs__WEBPACK_IMPORTED_MODULE_1__["Subject"]();
        this.alarmOn$ = new rxjs__WEBPACK_IMPORTED_MODULE_1__["BehaviorSubject"](false);
        this.alarmOnObs$ = this.alarmOn$.asObservable();
        this.customAlarmOn$ = new rxjs__WEBPACK_IMPORTED_MODULE_1__["BehaviorSubject"](false);
        this.customAlarmOnObs$ = this.customAlarmOn$.asObservable();
    }
    setAlarmState(alarmState) {
        this.alarmOn$.next(alarmState);
        return this.alarmOnObs$;
    }
    setCustomAlarmState(alarmState) {
        this.customAlarmOn$.next(alarmState);
        return this.customAlarmOnObs$;
    }
}
CrossComponentCommunicationService.ɵfac = function CrossComponentCommunicationService_Factory(t) { return new (t || CrossComponentCommunicationService)(); };
CrossComponentCommunicationService.ɵprov = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjectable"]({ token: CrossComponentCommunicationService, factory: CrossComponentCommunicationService.ɵfac, providedIn: 'root' });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](CrossComponentCommunicationService, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"],
        args: [{
                providedIn: 'root'
            }]
    }], null, null); })();


/***/ }),

/***/ "./src/app/services/local-storage.service.ts":
/*!***************************************************!*\
  !*** ./src/app/services/local-storage.service.ts ***!
  \***************************************************/
/*! exports provided: LocalStorageService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "LocalStorageService", function() { return LocalStorageService; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! rxjs */ "./node_modules/rxjs/_esm2015/index.js");
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! rxjs/operators */ "./node_modules/rxjs/_esm2015/operators/index.js");
/* harmony import */ var _shared_routes_routes__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../shared/routes/routes */ "./src/app/shared/routes/routes.ts");
/* harmony import */ var _shared_models_localStorageKeys__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../shared/models/localStorageKeys */ "./src/app/shared/models/localStorageKeys.ts");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");







class LocalStorageService {
    constructor(router) {
        this.router = router;
    }
    trackDepartureTime(destroyed$) {
        // add local storage timeStamp when navigating away
        window.addEventListener('beforeunload', (e) => {
            this.departureMomentDate = Math.round(new Date().getTime() / 1000);
            localStorage.setItem(_shared_models_localStorageKeys__WEBPACK_IMPORTED_MODULE_4__["LocalStorageKeys"].DEPARTURE_MOMENT_DATE, String(this.departureMomentDate));
        });
        // route user back to the authentication page once the token expires
        let tokenExpiryTime = Number(localStorage.getItem(_shared_models_localStorageKeys__WEBPACK_IMPORTED_MODULE_4__["LocalStorageKeys"].TOKEN_EXPIRY)) * 1000;
        const tokenExpiry$ = Object(rxjs__WEBPACK_IMPORTED_MODULE_1__["timer"])(tokenExpiryTime);
        tokenExpiry$
            .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_2__["takeUntil"])(destroyed$))
            .subscribe(() => {
            this.clearLocalStorage();
            this.router.navigate([_shared_routes_routes__WEBPACK_IMPORTED_MODULE_3__["default"].AUTHENTICATION]);
        });
    }
    clearLocalStorage() {
        localStorage.clear();
    }
    setItem(key, value) {
        localStorage.setItem(key, value);
    }
    getItem(key) {
        return localStorage.getItem(key);
    }
}
LocalStorageService.ɵfac = function LocalStorageService_Factory(t) { return new (t || LocalStorageService)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵinject"](_angular_router__WEBPACK_IMPORTED_MODULE_5__["Router"])); };
LocalStorageService.ɵprov = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjectable"]({ token: LocalStorageService, factory: LocalStorageService.ɵfac, providedIn: 'root' });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](LocalStorageService, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"],
        args: [{
                providedIn: 'root'
            }]
    }], function () { return [{ type: _angular_router__WEBPACK_IMPORTED_MODULE_5__["Router"] }]; }, null); })();


/***/ }),

/***/ "./src/app/shared/models/apiKeys.ts":
/*!******************************************!*\
  !*** ./src/app/shared/models/apiKeys.ts ***!
  \******************************************/
/*! exports provided: FireBaseAPIDetails */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "FireBaseAPIDetails", function() { return FireBaseAPIDetails; });
var FireBaseAPIDetails;
(function (FireBaseAPIDetails) {
    FireBaseAPIDetails["firebaseAPIKey"] = "AIzaSyD-sHjvR3PkMiatG0fmGre1fxnJidcGEvY";
    FireBaseAPIDetails["signUpEndpoint"] = "https://identitytoolkit.googleapis.com/v1/accounts:signUp?key=";
    FireBaseAPIDetails["logInEndpoint"] = "https://identitytoolkit.googleapis.com/v1/accounts:signInWithPassword?key=";
    FireBaseAPIDetails["serverKey"] = "AAAAMxiTKKY:APA91bFjFbB2p6rGFo_IC7hJHqdj3xwNcXCHhm0zZOKx6Bb6wxEFtQ7T10ZgOj--IQmDO56ZXM5ahA5gd15UBgMytVMAq1a7JZe2-fdVI8O905Z0bZURUmflceaPQQbhQfx5kyu5wI-y";
    FireBaseAPIDetails["notificationEndpoint"] = "https://fcm.googleapis.com/fcm/send";
})(FireBaseAPIDetails || (FireBaseAPIDetails = {}));


/***/ }),

/***/ "./src/app/shared/models/localStorageKeys.ts":
/*!***************************************************!*\
  !*** ./src/app/shared/models/localStorageKeys.ts ***!
  \***************************************************/
/*! exports provided: LocalStorageKeys */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "LocalStorageKeys", function() { return LocalStorageKeys; });
var LocalStorageKeys;
(function (LocalStorageKeys) {
    LocalStorageKeys["FIREBASE_UID"] = "firebaseUid";
    LocalStorageKeys["REQUEST_MOMENT_DATE"] = "requestMomentDate";
    LocalStorageKeys["TOKEN_EXPIRY"] = "tokenExpiry";
    LocalStorageKeys["DEPARTURE_MOMENT_DATE"] = "departureMomentDate";
})(LocalStorageKeys || (LocalStorageKeys = {}));


/***/ }),

/***/ "./src/app/shared/models/responses.model.ts":
/*!**************************************************!*\
  !*** ./src/app/shared/models/responses.model.ts ***!
  \**************************************************/
/*! exports provided: ResponsesMessages */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ResponsesMessages", function() { return ResponsesMessages; });
var ResponsesMessages;
(function (ResponsesMessages) {
    ResponsesMessages["FAILED_SIGNUP_MESSAGE"] = "There was a problem with the sign up or the email address is already registered!";
    ResponsesMessages["FAILED_LOGIN_MESSAGE"] = "The email/password is incorrect";
})(ResponsesMessages || (ResponsesMessages = {}));


/***/ }),

/***/ "./src/app/shared/routes/routes.ts":
/*!*****************************************!*\
  !*** ./src/app/shared/routes/routes.ts ***!
  \*****************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
var Routes;
(function (Routes) {
    Routes["HOME"] = "/home";
    Routes["AUTHENTICATION"] = "/";
})(Routes || (Routes = {}));
/* harmony default export */ __webpack_exports__["default"] = (Routes);


/***/ }),

/***/ "./src/environments/environment.ts":
/*!*****************************************!*\
  !*** ./src/environments/environment.ts ***!
  \*****************************************/
/*! exports provided: environment */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "environment", function() { return environment; });
/* harmony import */ var _firebase_config__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./firebase-config */ "./src/environments/firebase-config.ts");
// This file can be replaced during build by using the `fileReplacements` array.
// `ng build --prod` replaces `environment.ts` with `environment.prod.ts`.
// The list of file replacements can be found in `angular.json`.

const environment = {
    production: false,
    firebase: Object.assign({}, _firebase_config__WEBPACK_IMPORTED_MODULE_0__["firebaseConfig"])
};
/*
 * For easier debugging in development mode, you can import the following file
 * to ignore zone related error stack frames such as `zone.run`, `zoneDelegate.invokeTask`.
 *
 * This import should be commented out in production mode because it will have a negative impact
 * on performance if an error is thrown.
 */
// import 'zone.js/dist/zone-error';  // Included with Angular CLI.


/***/ }),

/***/ "./src/environments/firebase-config.ts":
/*!*********************************************!*\
  !*** ./src/environments/firebase-config.ts ***!
  \*********************************************/
/*! exports provided: firebaseConfig */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "firebaseConfig", function() { return firebaseConfig; });
const firebaseConfig = {
    apiKey: "AIzaSyD-sHjvR3PkMiatG0fmGre1fxnJidcGEvY",
    authDomain: "the-gents-chat.firebaseapp.com",
    databaseURL: "https://the-gents-chat.firebaseio.com",
    projectId: "the-gents-chat",
    storageBucket: "the-gents-chat.appspot.com",
    messagingSenderId: "219455629478",
    appId: "1:219455629478:web:0ef6c97934ffb509d4ec67"
};


/***/ }),

/***/ "./src/main.ts":
/*!*********************!*\
  !*** ./src/main.ts ***!
  \*********************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _environments_environment__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./environments/environment */ "./src/environments/environment.ts");
/* harmony import */ var _app_app_module__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./app/app.module */ "./src/app/app.module.ts");
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/platform-browser */ "./node_modules/@angular/platform-browser/__ivy_ngcc__/fesm2015/platform-browser.js");




if (_environments_environment__WEBPACK_IMPORTED_MODULE_1__["environment"].production) {
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["enableProdMode"])();
}
_angular_platform_browser__WEBPACK_IMPORTED_MODULE_3__["platformBrowser"]().bootstrapModule(_app_app_module__WEBPACK_IMPORTED_MODULE_2__["AppModule"])
    .catch(err => console.error(err));


/***/ }),

/***/ 0:
/*!***************************!*\
  !*** multi ./src/main.ts ***!
  \***************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! /Users/p3701235/Desktop/Personal/Health-timers/src/main.ts */"./src/main.ts");


/***/ })

},[[0,"runtime","vendor"]]]);
//# sourceMappingURL=main-es2015.js.map