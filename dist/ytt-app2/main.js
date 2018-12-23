(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["main"],{

/***/ "./src/$$_lazy_route_resource lazy recursive":
/*!**********************************************************!*\
  !*** ./src/$$_lazy_route_resource lazy namespace object ***!
  \**********************************************************/
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
webpackEmptyAsyncContext.id = "./src/$$_lazy_route_resource lazy recursive";

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
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm5/common.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _shared_guards_auth_auth_guard__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./shared/guards/auth/auth.guard */ "./src/app/shared/guards/auth/auth.guard.ts");
/* harmony import */ var _core_auth_components_login_login_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./core/auth/components/login/login.component */ "./src/app/core/auth/components/login/login.component.ts");
/* harmony import */ var _core_auth_components_signup_signup_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./core/auth/components/signup/signup.component */ "./src/app/core/auth/components/signup/signup.component.ts");
/* harmony import */ var _content_videos_list_container_videos_list_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./content/videos-list/container/videos-list.component */ "./src/app/content/videos-list/container/videos-list.component.ts");
/* harmony import */ var _content_video_container_video_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./content/video/container/video.component */ "./src/app/content/video/container/video.component.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};








var routes = [
    { path: 'login', component: _core_auth_components_login_login_component__WEBPACK_IMPORTED_MODULE_4__["LoginComponent"], canActivate: [_shared_guards_auth_auth_guard__WEBPACK_IMPORTED_MODULE_3__["AuthGuard"]] },
    { path: 'signup', component: _core_auth_components_signup_signup_component__WEBPACK_IMPORTED_MODULE_5__["SignupComponent"] },
    { path: 'videos', component: _content_videos_list_container_videos_list_component__WEBPACK_IMPORTED_MODULE_6__["VideosListComponent"] },
    { path: 'video/:id', component: _content_video_container_video_component__WEBPACK_IMPORTED_MODULE_7__["VideoComponent"] }
];
var AppRoutingModule = /** @class */ (function () {
    function AppRoutingModule() {
    }
    AppRoutingModule = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"])({
            imports: [
                _angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"],
                _angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forRoot(routes)
            ],
            exports: [
                _angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]
            ],
            declarations: []
        })
    ], AppRoutingModule);
    return AppRoutingModule;
}());



/***/ }),

/***/ "./src/app/app.component.css":
/*!***********************************!*\
  !*** ./src/app/app.component.css ***!
  \***********************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "main {\r\n\tpadding: 0 50px;\r\n}\r\n\r\nmat-toolbar {\r\n\theight: auto;\r\n\tmargin-bottom: 40px;\r\n\tjustify-content: flex-end;\r\n}\r\n\r\nbutton {\r\n\tmargin: 5px 2px;\r\n\tfont-size: 14pt;\r\n\tborder: 1px solid #673ab7;\r\n}\r\n\r\nbutton:hover {\r\n\tborder: 1px solid white;\r\n}"

/***/ }),

/***/ "./src/app/app.component.html":
/*!************************************!*\
  !*** ./src/app/app.component.html ***!
  \************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<mat-toolbar color='primary'>\r\n  <button mat-button routerLink=\"login\">Login page</button>\r\n  <button mat-button>Home</button>\r\n  <button mat-button routerLink=\"videos\">Videos</button>\r\n  <button *ngIf=\"roles.isGuest()\" mat-button (click)=\"loginDialog()\">Log in</button>\r\n  <button *ngIf=\"roles.isGuest()\" mat-button (click)=\"signupDialog()\">Sign up</button>\r\n  <button *ngIf=\"!roles.isGuest()\" mat-button (click)=\"logoutDialog()\">Log out</button>\r\n</mat-toolbar>\r\n\r\n<main>\r\n  <router-outlet></router-outlet>\r\n</main>\r\n\r\n\r\n"

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
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_material__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/material */ "./node_modules/@angular/material/esm5/material.es5.js");
/* harmony import */ var _shared_services_roles_roles_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./shared/services/roles/roles.service */ "./src/app/shared/services/roles/roles.service.ts");
/* harmony import */ var _core_auth_components_login_login_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./core/auth/components/login/login.component */ "./src/app/core/auth/components/login/login.component.ts");
/* harmony import */ var _core_auth_components_signup_signup_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./core/auth/components/signup/signup.component */ "./src/app/core/auth/components/signup/signup.component.ts");
/* harmony import */ var _core_auth_components_log_out_log_out_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./core/auth/components/log-out/log-out.component */ "./src/app/core/auth/components/log-out/log-out.component.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};






var AppComponent = /** @class */ (function () {
    function AppComponent(matDialog, roles) {
        this.matDialog = matDialog;
        this.roles = roles;
        this.title = 'ytt-app2';
        roles.getAndSetRoleFromServer();
    }
    AppComponent.prototype.ngOnInit = function () {
        console.log(this.roles.getRole());
    };
    AppComponent.prototype.loginDialog = function () {
        this.matDialog.open(_core_auth_components_login_login_component__WEBPACK_IMPORTED_MODULE_3__["LoginComponent"], {
            width: '400px'
        });
    };
    AppComponent.prototype.signupDialog = function () {
        this.matDialog.open(_core_auth_components_signup_signup_component__WEBPACK_IMPORTED_MODULE_4__["SignupComponent"], {
            width: '400px'
        });
    };
    AppComponent.prototype.logoutDialog = function () {
        this.matDialog.open(_core_auth_components_log_out_log_out_component__WEBPACK_IMPORTED_MODULE_5__["LogOutComponent"], {
            width: '400px'
        });
    };
    AppComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-root',
            template: __webpack_require__(/*! ./app.component.html */ "./src/app/app.component.html"),
            styles: [__webpack_require__(/*! ./app.component.css */ "./src/app/app.component.css")]
        }),
        __metadata("design:paramtypes", [_angular_material__WEBPACK_IMPORTED_MODULE_1__["MatDialog"],
            _shared_services_roles_roles_service__WEBPACK_IMPORTED_MODULE_2__["RolesService"]])
    ], AppComponent);
    return AppComponent;
}());



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
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/platform-browser */ "./node_modules/@angular/platform-browser/fesm5/platform-browser.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm5/http.js");
/* harmony import */ var _shared_shared_module__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./shared/shared.module */ "./src/app/shared/shared.module.ts");
/* harmony import */ var _material_material_module__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./material/material.module */ "./src/app/material/material.module.ts");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var _app_routing_module__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./app-routing.module */ "./src/app/app-routing.module.ts");
/* harmony import */ var _content_videos_list_videos_list_module__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./content/videos-list/videos-list.module */ "./src/app/content/videos-list/videos-list.module.ts");
/* harmony import */ var _content_video_video_module__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./content/video/video.module */ "./src/app/content/video/video.module.ts");
/* harmony import */ var _app_component__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./app.component */ "./src/app/app.component.ts");
/* harmony import */ var _core_auth_components_login_login_component__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./core/auth/components/login/login.component */ "./src/app/core/auth/components/login/login.component.ts");
/* harmony import */ var _core_auth_components_signup_signup_component__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ./core/auth/components/signup/signup.component */ "./src/app/core/auth/components/signup/signup.component.ts");
/* harmony import */ var _core_auth_components_log_out_log_out_component__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ./core/auth/components/log-out/log-out.component */ "./src/app/core/auth/components/log-out/log-out.component.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};













var AppModule = /** @class */ (function () {
    function AppModule() {
    }
    AppModule = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
            declarations: [
                _app_component__WEBPACK_IMPORTED_MODULE_9__["AppComponent"],
                _core_auth_components_login_login_component__WEBPACK_IMPORTED_MODULE_10__["LoginComponent"],
                _core_auth_components_signup_signup_component__WEBPACK_IMPORTED_MODULE_11__["SignupComponent"],
                _core_auth_components_log_out_log_out_component__WEBPACK_IMPORTED_MODULE_12__["LogOutComponent"]
            ],
            imports: [
                _angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__["BrowserModule"],
                _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpClientModule"],
                _app_routing_module__WEBPACK_IMPORTED_MODULE_6__["AppRoutingModule"],
                _angular_forms__WEBPACK_IMPORTED_MODULE_5__["FormsModule"],
                _shared_shared_module__WEBPACK_IMPORTED_MODULE_3__["SharedModule"],
                _material_material_module__WEBPACK_IMPORTED_MODULE_4__["MaterialModule"],
                _content_videos_list_videos_list_module__WEBPACK_IMPORTED_MODULE_7__["VideosListModule"],
                _content_video_video_module__WEBPACK_IMPORTED_MODULE_8__["VideoModule"]
            ],
            providers: [],
            entryComponents: [
                _core_auth_components_login_login_component__WEBPACK_IMPORTED_MODULE_10__["LoginComponent"],
                _core_auth_components_signup_signup_component__WEBPACK_IMPORTED_MODULE_11__["SignupComponent"],
                _core_auth_components_log_out_log_out_component__WEBPACK_IMPORTED_MODULE_12__["LogOutComponent"]
            ],
            bootstrap: [_app_component__WEBPACK_IMPORTED_MODULE_9__["AppComponent"]]
        })
    ], AppModule);
    return AppModule;
}());



/***/ }),

/***/ "./src/app/content/video/components/subtitles/subtitles.component.css":
/*!****************************************************************************!*\
  !*** ./src/app/content/video/components/subtitles/subtitles.component.css ***!
  \****************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".subts-wrap {\r\n    height: 50px;\r\n    background-color: #625a86;\r\n    overflow: hidden;\r\n    position: relative;\r\n}\r\n\r\nul {\r\n    position: absolute;\r\n    margin: 0 20px;\r\n    padding: 0;\r\n    list-style: none;\r\n    font-family: 'Concert One',cursive;\r\n    transition: transform .5s ease-out;\r\n    transition: transform .5s ease-out, -webkit-transform .5s ease-out;\r\n    transition: -webkit-transform .5s ease-out;\r\n}\r\n\r\nli {\r\n    height: 30px;\r\n    padding: 10px 0;\r\n    line-height: 30px;\r\n    font-size: 24px;\r\n    color: #c0ffee;\r\n}\r\n\r\n.string span {\r\n    padding: 3px 7px;\r\n    cursor: pointer;\r\n}\r\n\r\n.clickedWord {\r\n    background-color: #3e9e3c;\r\n    border-radius: 4px;\r\n}"

/***/ }),

/***/ "./src/app/content/video/components/subtitles/subtitles.component.html":
/*!*****************************************************************************!*\
  !*** ./src/app/content/video/components/subtitles/subtitles.component.html ***!
  \*****************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"subts-wrap\">\n  <ul [ngStyle]=\"{'transform': 'translateY(-' + subtOffset + 'px)'}\" (click)=\"wordClick($event)\">\n    <li class=\"string\" *ngFor=\"let string of subtitles\">\n      <span *ngFor=\"let word of string\">{{word}}</span>\n    </li>\n  </ul>\n</div>\n\n<h2>{{subtOffset}}</h2>\n\n"

/***/ }),

/***/ "./src/app/content/video/components/subtitles/subtitles.component.ts":
/*!***************************************************************************!*\
  !*** ./src/app/content/video/components/subtitles/subtitles.component.ts ***!
  \***************************************************************************/
/*! exports provided: SubtitlesComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SubtitlesComponent", function() { return SubtitlesComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_material__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/material */ "./node_modules/@angular/material/esm5/material.es5.js");
/* harmony import */ var _shared_services_translation_transl_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../../shared/services/translation/transl.service */ "./src/app/shared/services/translation/transl.service.ts");
/* harmony import */ var _translation_translation_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./../translation/translation.component */ "./src/app/content/video/components/translation/translation.component.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




var SubtitlesComponent = /** @class */ (function () {
    function SubtitlesComponent(dialog, tr) {
        this.dialog = dialog;
        this.tr = tr;
        this.wordClicked = new _angular_core__WEBPACK_IMPORTED_MODULE_0__["EventEmitter"]();
    }
    SubtitlesComponent.prototype.ngOnInit = function () {
        console.log(this.subtOffset);
    };
    SubtitlesComponent.prototype.ngOnChanges = function () {
        console.log('changed:' + this.subtOffset);
    };
    SubtitlesComponent.prototype.wordClick = function (e) {
        var _this = this;
        if ("SPAN" === e.target.tagName) {
            this.wordClicked.emit();
            this.lastClickedWord && this.lastClickedWord.classList.remove("clickedWord");
            this.lastClickedWord = e.target;
            e.target.classList.add("clickedWord");
            this.tr.translate(e.target.textContent).subscribe(function (word) {
                _this.dialog.open(_translation_translation_component__WEBPACK_IMPORTED_MODULE_3__["TranslationComponent"], {
                    data: {
                        originWord: e.target.textContent,
                        translatedWord: word
                    }
                });
            });
        }
    };
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Output"])(),
        __metadata("design:type", Object)
    ], SubtitlesComponent.prototype, "wordClicked", void 0);
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"])(),
        __metadata("design:type", Array)
    ], SubtitlesComponent.prototype, "subtitles", void 0);
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"])(),
        __metadata("design:type", Object)
    ], SubtitlesComponent.prototype, "subtOffset", void 0);
    SubtitlesComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'subtitles',
            template: __webpack_require__(/*! ./subtitles.component.html */ "./src/app/content/video/components/subtitles/subtitles.component.html"),
            styles: [__webpack_require__(/*! ./subtitles.component.css */ "./src/app/content/video/components/subtitles/subtitles.component.css")]
        }),
        __metadata("design:paramtypes", [_angular_material__WEBPACK_IMPORTED_MODULE_1__["MatDialog"],
            _shared_services_translation_transl_service__WEBPACK_IMPORTED_MODULE_2__["TranslService"]])
    ], SubtitlesComponent);
    return SubtitlesComponent;
}());



/***/ }),

/***/ "./src/app/content/video/components/translation/translation.component.css":
/*!********************************************************************************!*\
  !*** ./src/app/content/video/components/translation/translation.component.css ***!
  \********************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "p {\r\n    margin: 0;\r\n    font-size: 21pt;\r\n    text-align: center;\r\n}\r\n\r\n.translated {\r\n    font-weight: bold;\r\n}"

/***/ }),

/***/ "./src/app/content/video/components/translation/translation.component.html":
/*!*********************************************************************************!*\
  !*** ./src/app/content/video/components/translation/translation.component.html ***!
  \*********************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<p>{{data.originWord}}</p>\n<hr>\n<p class='translated'>{{data.translatedWord}}</p>\n"

/***/ }),

/***/ "./src/app/content/video/components/translation/translation.component.ts":
/*!*******************************************************************************!*\
  !*** ./src/app/content/video/components/translation/translation.component.ts ***!
  \*******************************************************************************/
/*! exports provided: TranslationComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "TranslationComponent", function() { return TranslationComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_material__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/material */ "./node_modules/@angular/material/esm5/material.es5.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var __param = (undefined && undefined.__param) || function (paramIndex, decorator) {
    return function (target, key) { decorator(target, key, paramIndex); }
};


var TranslationComponent = /** @class */ (function () {
    function TranslationComponent(data) {
        this.data = data;
    }
    TranslationComponent.prototype.ngOnInit = function () {
    };
    TranslationComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-translation',
            template: __webpack_require__(/*! ./translation.component.html */ "./src/app/content/video/components/translation/translation.component.html"),
            styles: [__webpack_require__(/*! ./translation.component.css */ "./src/app/content/video/components/translation/translation.component.css")]
        }),
        __param(0, Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Inject"])(_angular_material__WEBPACK_IMPORTED_MODULE_1__["MAT_DIALOG_DATA"])),
        __metadata("design:paramtypes", [Object])
    ], TranslationComponent);
    return TranslationComponent;
}());



/***/ }),

/***/ "./src/app/content/video/components/yt-player/yt-player.component.css":
/*!****************************************************************************!*\
  !*** ./src/app/content/video/components/yt-player/yt-player.component.css ***!
  \****************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".responsive {\r\n    width: 100%;\r\n    height: 0;\r\n    padding-bottom: 56.25%;\r\n    position: relative;\r\n}\r\n\r\niframe {\r\n    width: 100%;\r\n    height: 100%;\r\n    position: absolute;\r\n}"

/***/ }),

/***/ "./src/app/content/video/components/yt-player/yt-player.component.html":
/*!*****************************************************************************!*\
  !*** ./src/app/content/video/components/yt-player/yt-player.component.html ***!
  \*****************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<p>\n  yt-player works!\n</p>\n\n<div class=\"responsive\">\n  <iframe id=\"player\" [src]=\"embedUrl | safe\" frameborder=\"0\"></iframe>\n</div>\n\n"

/***/ }),

/***/ "./src/app/content/video/components/yt-player/yt-player.component.ts":
/*!***************************************************************************!*\
  !*** ./src/app/content/video/components/yt-player/yt-player.component.ts ***!
  \***************************************************************************/
/*! exports provided: YtPlayerComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "YtPlayerComponent", function() { return YtPlayerComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var YtPlayerComponent = /** @class */ (function () {
    function YtPlayerComponent() {
    }
    YtPlayerComponent.prototype.ngOnInit = function () {
        console.log(this.embedUrl);
    };
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"])(),
        __metadata("design:type", String)
    ], YtPlayerComponent.prototype, "embedUrl", void 0);
    YtPlayerComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'yt-player',
            template: __webpack_require__(/*! ./yt-player.component.html */ "./src/app/content/video/components/yt-player/yt-player.component.html"),
            styles: [__webpack_require__(/*! ./yt-player.component.css */ "./src/app/content/video/components/yt-player/yt-player.component.css")]
        }),
        __metadata("design:paramtypes", [])
    ], YtPlayerComponent);
    return YtPlayerComponent;
}());



/***/ }),

/***/ "./src/app/content/video/container/video.component.css":
/*!*************************************************************!*\
  !*** ./src/app/content/video/container/video.component.css ***!
  \*************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ""

/***/ }),

/***/ "./src/app/content/video/container/video.component.html":
/*!**************************************************************!*\
  !*** ./src/app/content/video/container/video.component.html ***!
  \**************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<yt-player [embedUrl]=\"embedUrl\"></yt-player>\n<subtitles [subtitles]=\"subtitles\" [subtOffset]=\"subtOffset\" (wordClicked)=\"stopPlayer()\"></subtitles>"

/***/ }),

/***/ "./src/app/content/video/container/video.component.ts":
/*!************************************************************!*\
  !*** ./src/app/content/video/container/video.component.ts ***!
  \************************************************************/
/*! exports provided: VideoComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "VideoComponent", function() { return VideoComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _shared_services_api_api_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./../../../shared/services/api/api.service */ "./src/app/shared/services/api/api.service.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var VideoComponent = /** @class */ (function () {
    function VideoComponent(changeDetector, route, db) {
        this.changeDetector = changeDetector;
        this.route = route;
        this.db = db;
    }
    VideoComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.route.params.subscribe(function (params) {
            _this.embedUrl = 'https://www.youtube.com/embed/' + params.id + '?enablejsapi=1';
            _this.db.getSubtitles(params.id).subscribe(function (subts) {
                console.log(subts);
                _this.subtitles = subts['subts'];
                _this.createTimeKeys(subts['timeKeys']);
                console.log(_this.timeKeys);
                _this.subtOffset = 0;
            });
        });
        this.initPlayer();
    };
    VideoComponent.prototype.ngOnDestroy = function () {
        this.interval && clearInterval(this.interval);
        this.interval = null;
    };
    VideoComponent.prototype.initPlayer = function () {
        if (!document.querySelector('script[src="https://www.youtube.com/iframe_api"]')) {
            var tag = document.createElement("script");
            tag.src = "https://www.youtube.com/iframe_api",
                tag.id = "iframe_api";
            var firstScriptTag = document.getElementsByTagName("script")[0];
            firstScriptTag.parentNode.insertBefore(tag, firstScriptTag);
        }
        "onYouTubeIframeAPIReady" in window ? this.createPlayer() : window['onYouTubeIframeAPIReady'] = function (e) {
            this.createPlayer();
        }.bind(this);
    };
    VideoComponent.prototype.createPlayer = function () {
        this.player = new window['YT'].Player("player", {
            events: {
                onStateChange: this.onStateChangeHandler.bind(this),
                onError: function (t) {
                    console.log("yt error: ");
                    console.dir(t);
                }
            }
        });
    };
    VideoComponent.prototype.onStateChangeHandler = function (e) {
        var _this = this;
        console.log(e.data);
        if (e.data == window['YT'].PlayerState.PLAYING) {
            this.interval = setInterval(function () {
                console.log(_this);
                var time = Math.round(10 * _this.player.getCurrentTime()) / 10;
                if (_this.timeKeys.hasOwnProperty(time)) {
                    _this.subtOffset = _this.timeKeys[time] * 50;
                    _this.changeDetector.detectChanges();
                    console.log('subtOffset: ' + _this.subtOffset);
                }
            }, 100);
        }
        else {
            this.interval && clearInterval(this.interval);
            this.interval = null;
        }
    };
    VideoComponent.prototype.createTimeKeys = function (timeKeys) {
        this.timeKeys = {};
        timeKeys.forEach(function (key, index, arr) {
            for (var i = key; i !== timeKeys.length - 1 && i < timeKeys[index + 1]; i += .1) {
                i = Math.round(10 * i) / 10;
                this.timeKeys[i] = index;
            }
        }, this);
    };
    VideoComponent.prototype.stopPlayer = function () {
        this.player.pauseVideo();
    };
    VideoComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-video',
            template: __webpack_require__(/*! ./video.component.html */ "./src/app/content/video/container/video.component.html"),
            styles: [__webpack_require__(/*! ./video.component.css */ "./src/app/content/video/container/video.component.css")]
        }),
        __metadata("design:paramtypes", [_angular_core__WEBPACK_IMPORTED_MODULE_0__["ChangeDetectorRef"],
            _angular_router__WEBPACK_IMPORTED_MODULE_1__["ActivatedRoute"],
            _shared_services_api_api_service__WEBPACK_IMPORTED_MODULE_2__["ApiService"]])
    ], VideoComponent);
    return VideoComponent;
}());



/***/ }),

/***/ "./src/app/content/video/video.module.ts":
/*!***********************************************!*\
  !*** ./src/app/content/video/video.module.ts ***!
  \***********************************************/
/*! exports provided: VideoModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "VideoModule", function() { return VideoModule; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm5/common.js");
/* harmony import */ var _container_video_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./container/video.component */ "./src/app/content/video/container/video.component.ts");
/* harmony import */ var _components_yt_player_yt_player_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./components/yt-player/yt-player.component */ "./src/app/content/video/components/yt-player/yt-player.component.ts");
/* harmony import */ var _shared_pipes_safe_pipe__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./../../shared/pipes/safe.pipe */ "./src/app/shared/pipes/safe.pipe.ts");
/* harmony import */ var _components_subtitles_subtitles_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./components/subtitles/subtitles.component */ "./src/app/content/video/components/subtitles/subtitles.component.ts");
/* harmony import */ var _components_translation_translation_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./components/translation/translation.component */ "./src/app/content/video/components/translation/translation.component.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};







var VideoModule = /** @class */ (function () {
    function VideoModule() {
    }
    VideoModule = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"])({
            declarations: [
                _shared_pipes_safe_pipe__WEBPACK_IMPORTED_MODULE_4__["SafePipe"],
                _container_video_component__WEBPACK_IMPORTED_MODULE_2__["VideoComponent"],
                _components_yt_player_yt_player_component__WEBPACK_IMPORTED_MODULE_3__["YtPlayerComponent"],
                _components_subtitles_subtitles_component__WEBPACK_IMPORTED_MODULE_5__["SubtitlesComponent"],
                _components_translation_translation_component__WEBPACK_IMPORTED_MODULE_6__["TranslationComponent"]
            ],
            imports: [
                _angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"]
            ],
            entryComponents: [
                _components_translation_translation_component__WEBPACK_IMPORTED_MODULE_6__["TranslationComponent"]
            ]
        })
    ], VideoModule);
    return VideoModule;
}());



/***/ }),

/***/ "./src/app/content/videos-list/container/videos-list.component.css":
/*!*************************************************************************!*\
  !*** ./src/app/content/videos-list/container/videos-list.component.css ***!
  \*************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".videos-wrap {\r\n    display: flex;\r\n    flex-wrap: wrap;\r\n    justify-content: space-around;\r\n}\r\n\r\n.mat-card-wrap {\r\n    max-width: 320px;\r\n    width: 320px;\r\n    min-width: 200px;\r\n    margin: 0 20px 50px 20px;\r\n    cursor: pointer;\r\n}\r\n\r\nmat-card {\r\n    height: 100%;\r\n    box-sizing: border-box;\r\n}"

/***/ }),

/***/ "./src/app/content/videos-list/container/videos-list.component.html":
/*!**************************************************************************!*\
  !*** ./src/app/content/videos-list/container/videos-list.component.html ***!
  \**************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<h1>All the videos</h1>\r\n\r\n<div class=\"videos-wrap\">\r\n  <div class=\"mat-card-wrap\" *ngFor=\"let video of videos | async\" routerLink=\"/video/{{video.id}}\">\r\n    <mat-card>\r\n      <img mat-card-image [src]=\"video.thumbnail\" alt=\"thumbnail\">\r\n      <mat-card-title>{{video.title}}</mat-card-title>\r\n      <mat-card-actions>\r\n        <button mat-button>LIKE</button>\r\n        <button mat-button>SHARE</button>\r\n      </mat-card-actions>\r\n    </mat-card>\r\n  </div>\r\n</div>\r\n"

/***/ }),

/***/ "./src/app/content/videos-list/container/videos-list.component.ts":
/*!************************************************************************!*\
  !*** ./src/app/content/videos-list/container/videos-list.component.ts ***!
  \************************************************************************/
/*! exports provided: VideosListComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "VideosListComponent", function() { return VideosListComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _shared_services_api_api_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./../../../shared/services/api/api.service */ "./src/app/shared/services/api/api.service.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var VideosListComponent = /** @class */ (function () {
    function VideosListComponent(api) {
        this.api = api;
    }
    VideosListComponent.prototype.ngOnInit = function () {
        this.videos = this.api.getVideos();
    };
    VideosListComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-videos-list',
            template: __webpack_require__(/*! ./videos-list.component.html */ "./src/app/content/videos-list/container/videos-list.component.html"),
            styles: [__webpack_require__(/*! ./videos-list.component.css */ "./src/app/content/videos-list/container/videos-list.component.css")]
        }),
        __metadata("design:paramtypes", [_shared_services_api_api_service__WEBPACK_IMPORTED_MODULE_1__["ApiService"]])
    ], VideosListComponent);
    return VideosListComponent;
}());



/***/ }),

/***/ "./src/app/content/videos-list/videos-list.module.ts":
/*!***********************************************************!*\
  !*** ./src/app/content/videos-list/videos-list.module.ts ***!
  \***********************************************************/
/*! exports provided: VideosListModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "VideosListModule", function() { return VideosListModule; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm5/common.js");
/* harmony import */ var _container_videos_list_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./container/videos-list.component */ "./src/app/content/videos-list/container/videos-list.component.ts");
/* harmony import */ var _material_material_module__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./../../material/material.module */ "./src/app/material/material.module.ts");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};





var VideosListModule = /** @class */ (function () {
    function VideosListModule() {
    }
    VideosListModule = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"])({
            imports: [
                _angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"],
                _material_material_module__WEBPACK_IMPORTED_MODULE_3__["MaterialModule"],
                _angular_router__WEBPACK_IMPORTED_MODULE_4__["RouterModule"]
            ],
            declarations: [
                _container_videos_list_component__WEBPACK_IMPORTED_MODULE_2__["VideosListComponent"]
            ]
        })
    ], VideosListModule);
    return VideosListModule;
}());



/***/ }),

/***/ "./src/app/core/auth/components/log-out/log-out.component.css":
/*!********************************************************************!*\
  !*** ./src/app/core/auth/components/log-out/log-out.component.css ***!
  \********************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".mat-toolbar {\r\n\theight: 50px;\r\n    margin-bottom: 20px;\r\n}\r\n\r\n.full-width {\r\n\twidth: 100%;\r\n}"

/***/ }),

/***/ "./src/app/core/auth/components/log-out/log-out.component.html":
/*!*********************************************************************!*\
  !*** ./src/app/core/auth/components/log-out/log-out.component.html ***!
  \*********************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<mat-toolbar color=\"primary\">Are you sure, you want to log out?</mat-toolbar>\n\n<form ngNoForm method=\"POST\" action=\"http://localhost:2500/api/auth/log-out\">\n  <button type=\"submit\" mat-stroked-button class=\"full-width\" color=\"primary\">Log out</button>\n</form>\n"

/***/ }),

/***/ "./src/app/core/auth/components/log-out/log-out.component.ts":
/*!*******************************************************************!*\
  !*** ./src/app/core/auth/components/log-out/log-out.component.ts ***!
  \*******************************************************************/
/*! exports provided: LogOutComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "LogOutComponent", function() { return LogOutComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var LogOutComponent = /** @class */ (function () {
    function LogOutComponent() {
    }
    LogOutComponent.prototype.ngOnInit = function () {
    };
    LogOutComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-log-out',
            template: __webpack_require__(/*! ./log-out.component.html */ "./src/app/core/auth/components/log-out/log-out.component.html"),
            styles: [__webpack_require__(/*! ./log-out.component.css */ "./src/app/core/auth/components/log-out/log-out.component.css")]
        }),
        __metadata("design:paramtypes", [])
    ], LogOutComponent);
    return LogOutComponent;
}());



/***/ }),

/***/ "./src/app/core/auth/components/login/login.component.css":
/*!****************************************************************!*\
  !*** ./src/app/core/auth/components/login/login.component.css ***!
  \****************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".mat-toolbar {\r\n\theight: 50px;\r\n    margin-bottom: 20px;\r\n}\r\n\r\n.full-width {\r\n\twidth: 100%;\r\n}\r\n\r\nbutton {\r\n\tmargin-top: 10px;\r\n}"

/***/ }),

/***/ "./src/app/core/auth/components/login/login.component.html":
/*!*****************************************************************!*\
  !*** ./src/app/core/auth/components/login/login.component.html ***!
  \*****************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<mat-toolbar color=\"primary\">Login</mat-toolbar>\r\n\r\n<form ngNoForm method=\"POST\" action=\"http://localhost:2500/api/auth/login\">\r\n  <mat-form-field class=\"full-width\">\r\n    <input matInput required placeholder=\"Login\" name=\"login\" autocomplete=\"off\">\r\n  </mat-form-field>\r\n  <mat-form-field class=\"full-width\">\r\n    <input matInput required placeholder=\"Password\" name=\"password\" autocomplete=\"off\">\r\n  </mat-form-field>\r\n  <button type=\"submit\" mat-stroked-button class=\"full-width\" color=\"primary\">Login</button>\r\n</form>"

/***/ }),

/***/ "./src/app/core/auth/components/login/login.component.ts":
/*!***************************************************************!*\
  !*** ./src/app/core/auth/components/login/login.component.ts ***!
  \***************************************************************/
/*! exports provided: LoginComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "LoginComponent", function() { return LoginComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _services_auth_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./../../services/auth.service */ "./src/app/core/auth/services/auth.service.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var LoginComponent = /** @class */ (function () {
    function LoginComponent(auth) {
        this.auth = auth;
    }
    LoginComponent.prototype.ngOnInit = function () {
    };
    LoginComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-login',
            template: __webpack_require__(/*! ./login.component.html */ "./src/app/core/auth/components/login/login.component.html"),
            styles: [__webpack_require__(/*! ./login.component.css */ "./src/app/core/auth/components/login/login.component.css")]
        }),
        __metadata("design:paramtypes", [_services_auth_service__WEBPACK_IMPORTED_MODULE_1__["AuthService"]])
    ], LoginComponent);
    return LoginComponent;
}());



/***/ }),

/***/ "./src/app/core/auth/components/signup/signup.component.css":
/*!******************************************************************!*\
  !*** ./src/app/core/auth/components/signup/signup.component.css ***!
  \******************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".mat-toolbar {\r\n\theight: 50px;\r\n    margin-bottom: 20px;\r\n}\r\n\r\n.full-width {\r\n\twidth: 100%;\r\n}\r\n\r\nbutton {\r\n\tmargin-top: 10px;\r\n}"

/***/ }),

/***/ "./src/app/core/auth/components/signup/signup.component.html":
/*!*******************************************************************!*\
  !*** ./src/app/core/auth/components/signup/signup.component.html ***!
  \*******************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<mat-toolbar color=\"primary\">Sign up</mat-toolbar>\r\n\r\n<form ngNoForm method=\"POST\" action=\"http://localhost:2500/api/auth/sign-up\">\r\n  <mat-form-field class=\"full-width\">\r\n    <input matInput required placeholder=\"Name\" name=\"name\" autocomplete=\"off\">\r\n  </mat-form-field>\r\n  <mat-form-field class=\"full-width\">\r\n    <input matInput required placeholder=\"Surname\" name=\"surname\" autocomplete=\"off\">\r\n  </mat-form-field>\r\n  <mat-form-field class=\"full-width\">\r\n    <input matInput required placeholder=\"Email\" name=\"email\" autocomplete=\"off\">\r\n  </mat-form-field>\r\n  <mat-form-field class=\"full-width\">\r\n    <input matInput required placeholder=\"Login\" name=\"login\" autocomplete=\"off\">\r\n  </mat-form-field>\r\n  <mat-form-field class=\"full-width\">\r\n    <input matInput required placeholder=\"Password\" name=\"password\" autocomplete=\"off\">\r\n  </mat-form-field>\r\n  <button type=\"submit\" mat-stroked-button class=\"full-width\" color=\"primary\">Sign up</button>\r\n</form>"

/***/ }),

/***/ "./src/app/core/auth/components/signup/signup.component.ts":
/*!*****************************************************************!*\
  !*** ./src/app/core/auth/components/signup/signup.component.ts ***!
  \*****************************************************************/
/*! exports provided: SignupComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SignupComponent", function() { return SignupComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var SignupComponent = /** @class */ (function () {
    function SignupComponent() {
    }
    SignupComponent.prototype.ngOnInit = function () {
    };
    SignupComponent.prototype.h = function () {
        console.log('hello form');
    };
    SignupComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-signup',
            template: __webpack_require__(/*! ./signup.component.html */ "./src/app/core/auth/components/signup/signup.component.html"),
            styles: [__webpack_require__(/*! ./signup.component.css */ "./src/app/core/auth/components/signup/signup.component.css")]
        }),
        __metadata("design:paramtypes", [])
    ], SignupComponent);
    return SignupComponent;
}());



/***/ }),

/***/ "./src/app/core/auth/services/auth.service.ts":
/*!****************************************************!*\
  !*** ./src/app/core/auth/services/auth.service.ts ***!
  \****************************************************/
/*! exports provided: AuthService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AuthService", function() { return AuthService; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm5/http.js");
/* harmony import */ var _shared_services_roles_roles_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./../../../shared/services/roles/roles.service */ "./src/app/shared/services/roles/roles.service.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var AuthService = /** @class */ (function () {
    function AuthService(http, roles) {
        this.http = http;
        this.roles = roles;
        this.authUrl = 'http://localhost:2500/api/auth/';
    }
    AuthService = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"])({
            providedIn: 'root'
        }),
        __metadata("design:paramtypes", [_angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpClient"],
            _shared_services_roles_roles_service__WEBPACK_IMPORTED_MODULE_2__["RolesService"]])
    ], AuthService);
    return AuthService;
}());



/***/ }),

/***/ "./src/app/material/material.module.ts":
/*!*********************************************!*\
  !*** ./src/app/material/material.module.ts ***!
  \*********************************************/
/*! exports provided: MaterialModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MaterialModule", function() { return MaterialModule; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/platform-browser/animations */ "./node_modules/@angular/platform-browser/fesm5/animations.js");
/* harmony import */ var _angular_material__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/material */ "./node_modules/@angular/material/esm5/material.es5.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};



var MaterialModule = /** @class */ (function () {
    function MaterialModule() {
    }
    MaterialModule = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"])({
            imports: [
                // CommonModule,
                _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_1__["BrowserAnimationsModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_2__["MatToolbarModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_2__["MatButtonModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_2__["MatDialogModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_2__["MatInputModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_2__["MatCardModule"]
            ],
            exports: [
                _angular_material__WEBPACK_IMPORTED_MODULE_2__["MatToolbarModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_2__["MatButtonModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_2__["MatDialogModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_2__["MatInputModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_2__["MatCardModule"]
            ],
            declarations: []
        })
    ], MaterialModule);
    return MaterialModule;
}());



/***/ }),

/***/ "./src/app/shared/guards/auth/auth.guard.ts":
/*!**************************************************!*\
  !*** ./src/app/shared/guards/auth/auth.guard.ts ***!
  \**************************************************/
/*! exports provided: AuthGuard */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AuthGuard", function() { return AuthGuard; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _services_roles_roles_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./../../services/roles/roles.service */ "./src/app/shared/services/roles/roles.service.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var AuthGuard = /** @class */ (function () {
    function AuthGuard(roles) {
        this.roles = roles;
    }
    AuthGuard.prototype.canActivate = function (next, state) {
        console.log('guard');
        this.roles.getAndSetRoleFromServer();
        return !this.roles.isAuthorized();
    };
    AuthGuard = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"])({
            providedIn: 'root'
        }),
        __metadata("design:paramtypes", [_services_roles_roles_service__WEBPACK_IMPORTED_MODULE_1__["RolesService"]])
    ], AuthGuard);
    return AuthGuard;
}());



/***/ }),

/***/ "./src/app/shared/pipes/safe.pipe.ts":
/*!*******************************************!*\
  !*** ./src/app/shared/pipes/safe.pipe.ts ***!
  \*******************************************/
/*! exports provided: SafePipe */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SafePipe", function() { return SafePipe; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/platform-browser */ "./node_modules/@angular/platform-browser/fesm5/platform-browser.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var SafePipe = /** @class */ (function () {
    function SafePipe(sanitizer) {
        this.sanitizer = sanitizer;
    }
    SafePipe.prototype.transform = function (url) {
        return this.sanitizer.bypassSecurityTrustResourceUrl(url);
    };
    SafePipe = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Pipe"])({
            name: 'safe'
        }),
        __metadata("design:paramtypes", [_angular_platform_browser__WEBPACK_IMPORTED_MODULE_1__["DomSanitizer"]])
    ], SafePipe);
    return SafePipe;
}());



/***/ }),

/***/ "./src/app/shared/services/api/api.service.ts":
/*!****************************************************!*\
  !*** ./src/app/shared/services/api/api.service.ts ***!
  \****************************************************/
/*! exports provided: ApiService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ApiService", function() { return ApiService; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm5/http.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var ApiService = /** @class */ (function () {
    function ApiService(http) {
        this.http = http;
    }
    ApiService.prototype.getRole = function () {
        return this.http.get('http://localhost:2500/api/role');
    };
    ApiService.prototype.getVideos = function () {
        return this.http.get('http://localhost:2500/api/videos');
    };
    ApiService.prototype.getSubtitles = function (videoId) {
        return this.http.get('http://localhost:2500/api/video/' + videoId);
    };
    ApiService = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"])({
            providedIn: 'root'
        }),
        __metadata("design:paramtypes", [_angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpClient"]])
    ], ApiService);
    return ApiService;
}());



/***/ }),

/***/ "./src/app/shared/services/roles/roles.service.ts":
/*!********************************************************!*\
  !*** ./src/app/shared/services/roles/roles.service.ts ***!
  \********************************************************/
/*! exports provided: RolesService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "RolesService", function() { return RolesService; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _api_api_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./../api/api.service */ "./src/app/shared/services/api/api.service.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var RolesService = /** @class */ (function () {
    function RolesService(api) {
        this.api = api;
        this.roles = {
            guest: 'guest',
            user: 'user',
            admin: 'admin'
        };
        this.role = this.roles.guest;
        this.isRoleSetted = false;
    }
    RolesService.prototype.setRole = function (role) {
        if (role === this.roles.user || role === this.roles.admin) {
            this.role = role;
        }
        else {
            this.role = this.roles.guest;
        }
        console.log('setted role: ' + this.role);
    };
    RolesService.prototype.getAndSetRoleFromServer = function () {
        var _this = this;
        if (!this.isRoleSetted) {
            this.isRoleSetted = true;
            this.api.getRole().subscribe(function (roleObj) {
                _this.setRole(roleObj.role);
            });
        }
    };
    RolesService.prototype.getRole = function () {
        return this.role;
    };
    RolesService.prototype.isAuthorized = function () {
        return this.role !== this.roles.guest;
    };
    RolesService.prototype.isGuest = function () {
        return this.role === this.roles.guest;
    };
    RolesService.prototype.isUser = function () {
        return this.role === this.roles.user;
    };
    RolesService.prototype.isAdmin = function () {
        return this.role === this.roles.admin;
    };
    RolesService = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"])({
            providedIn: 'root'
        }),
        __metadata("design:paramtypes", [_api_api_service__WEBPACK_IMPORTED_MODULE_1__["ApiService"]])
    ], RolesService);
    return RolesService;
}());



/***/ }),

/***/ "./src/app/shared/services/translation/transl.service.ts":
/*!***************************************************************!*\
  !*** ./src/app/shared/services/translation/transl.service.ts ***!
  \***************************************************************/
/*! exports provided: TranslService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "TranslService", function() { return TranslService; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm5/http.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var TranslService = /** @class */ (function () {
    function TranslService(http) {
        this.http = http;
        this.url = 'http://localhost:2500/api/translate/';
    }
    TranslService.prototype.translate = function (word) {
        return this.http.get(this.url + word);
    };
    TranslService = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"])({
            providedIn: 'root'
        }),
        __metadata("design:paramtypes", [_angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpClient"]])
    ], TranslService);
    return TranslService;
}());



/***/ }),

/***/ "./src/app/shared/shared.module.ts":
/*!*****************************************!*\
  !*** ./src/app/shared/shared.module.ts ***!
  \*****************************************/
/*! exports provided: SharedModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SharedModule", function() { return SharedModule; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm5/common.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};


var SharedModule = /** @class */ (function () {
    function SharedModule() {
    }
    SharedModule = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"])({
            imports: [
                _angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"]
            ],
            providers: []
        })
    ], SharedModule);
    return SharedModule;
}());



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
// This file can be replaced during build by using the `fileReplacements` array.
// `ng build --prod` replaces `environment.ts` with `environment.prod.ts`.
// The list of file replacements can be found in `angular.json`.
var environment = {
    production: false
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

/***/ "./src/main.ts":
/*!*********************!*\
  !*** ./src/main.ts ***!
  \*********************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_platform_browser_dynamic__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/platform-browser-dynamic */ "./node_modules/@angular/platform-browser-dynamic/fesm5/platform-browser-dynamic.js");
/* harmony import */ var _app_app_module__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./app/app.module */ "./src/app/app.module.ts");
/* harmony import */ var _environments_environment__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./environments/environment */ "./src/environments/environment.ts");




if (_environments_environment__WEBPACK_IMPORTED_MODULE_3__["environment"].production) {
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["enableProdMode"])();
}
Object(_angular_platform_browser_dynamic__WEBPACK_IMPORTED_MODULE_1__["platformBrowserDynamic"])().bootstrapModule(_app_app_module__WEBPACK_IMPORTED_MODULE_2__["AppModule"])
    .catch(function (err) { return console.error(err); });


/***/ }),

/***/ 0:
/*!***************************!*\
  !*** multi ./src/main.ts ***!
  \***************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! C:\Users\Sergey\Desktop\ytt-app2\src\main.ts */"./src/main.ts");


/***/ })

},[[0,"runtime","vendor"]]]);
//# sourceMappingURL=main.js.map