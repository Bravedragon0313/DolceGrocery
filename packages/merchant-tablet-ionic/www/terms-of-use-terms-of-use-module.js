(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["terms-of-use-terms-of-use-module"],{

/***/ "../../node_modules/raw-loader/dist/cjs.js!./src/pages/+info/+terms-of-use/terms-of-use.html":
/*!***************************************************************************************************************************!*\
  !*** /home/itexpert/Documents/ever/node_modules/raw-loader/dist/cjs.js!./src/pages/+info/+terms-of-use/terms-of-use.html ***!
  \***************************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<div id=\"header\" class=\"bar bar-header bar-brand\">\n\t<h1 class=\"title\">{{ 'TERMS_OF_USE_VIEW.TITLE' | translate }}</h1>\n\t<div class=\"buttons buttons-left header-item\">\n\t\t<span class=\"left-buttons\">\n\t\t\t<div class=\"waves-effect waves-classic\">\n\t\t\t\t<ion-menu-toggle class=\"button-icon\">\n\t\t\t\t\t<ion-icon ios=\"ios-menu\" md=\"md-menu\"></ion-icon>\n\t\t\t\t</ion-menu-toggle>\n\t\t\t</div>\n\t\t</span>\n\t</div>\n</div>\n<ion-content padding class=\"app-view\">\n\t<loading class=\"pt-4\" [hidden]=\"useTermsHtml !== null\"></loading>\n\t<div\n\t\tclass=\"pt-4\"\n\t\t*ngIf=\"useTermsHtml !== null\"\n\t\t[innerHTML]=\"useTermsHtml | safe: 'html'\"\n\t></div>\n</ion-content>\n");

/***/ }),

/***/ "../common-angular/src/pipes/capitalize.pipe.ts":
/*!******************************************************!*\
  !*** ../common-angular/src/pipes/capitalize.pipe.ts ***!
  \******************************************************/
/*! exports provided: CapitalizePipe */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CapitalizePipe", function() { return CapitalizePipe; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "../common-angular/node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");


var CapitalizePipe = (function () {
    function CapitalizePipe() {
    }
    CapitalizePipe.prototype.transform = function (input) {
        return input && input.length
            ? input.charAt(0).toUpperCase() + input.slice(1).toLowerCase()
            : input;
    };
    CapitalizePipe = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Pipe"])({ name: 'ngxCapitalize' })
    ], CapitalizePipe);
    return CapitalizePipe;
}());



/***/ }),

/***/ "../common-angular/src/pipes/number-with-commas.pipe.ts":
/*!**************************************************************!*\
  !*** ../common-angular/src/pipes/number-with-commas.pipe.ts ***!
  \**************************************************************/
/*! exports provided: NumberWithCommasPipe */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "NumberWithCommasPipe", function() { return NumberWithCommasPipe; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "../common-angular/node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");


var NumberWithCommasPipe = (function () {
    function NumberWithCommasPipe() {
    }
    NumberWithCommasPipe.prototype.transform = function (input) {
        return new Intl.NumberFormat().format(input);
    };
    NumberWithCommasPipe = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Pipe"])({ name: 'myNumberWithCommas' })
    ], NumberWithCommasPipe);
    return NumberWithCommasPipe;
}());



/***/ }),

/***/ "../common-angular/src/pipes/pipes.module.ts":
/*!***************************************************!*\
  !*** ../common-angular/src/pipes/pipes.module.ts ***!
  \***************************************************/
/*! exports provided: PipesModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "PipesModule", function() { return PipesModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "../common-angular/node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _safe_pipe__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./safe.pipe */ "../common-angular/src/pipes/safe.pipe.ts");
/* harmony import */ var _replace_pipe__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./replace.pipe */ "../common-angular/src/pipes/replace.pipe.ts");
/* harmony import */ var _capitalize_pipe__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./capitalize.pipe */ "../common-angular/src/pipes/capitalize.pipe.ts");
/* harmony import */ var _plural_pipe__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./plural.pipe */ "../common-angular/src/pipes/plural.pipe.ts");
/* harmony import */ var _round_pipe__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./round.pipe */ "../common-angular/src/pipes/round.pipe.ts");
/* harmony import */ var _timing_pipe__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./timing.pipe */ "../common-angular/src/pipes/timing.pipe.ts");
/* harmony import */ var _number_with_commas_pipe__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./number-with-commas.pipe */ "../common-angular/src/pipes/number-with-commas.pipe.ts");









var PipesModule = (function () {
    function PipesModule() {
    }
    PipesModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
            exports: [
                _safe_pipe__WEBPACK_IMPORTED_MODULE_2__["SafePipe"],
                _replace_pipe__WEBPACK_IMPORTED_MODULE_3__["ReplacePipe"],
                _capitalize_pipe__WEBPACK_IMPORTED_MODULE_4__["CapitalizePipe"],
                _plural_pipe__WEBPACK_IMPORTED_MODULE_5__["PluralPipe"],
                _round_pipe__WEBPACK_IMPORTED_MODULE_6__["RoundPipe"],
                _timing_pipe__WEBPACK_IMPORTED_MODULE_7__["TimingPipe"],
                _number_with_commas_pipe__WEBPACK_IMPORTED_MODULE_8__["NumberWithCommasPipe"],
            ],
            imports: [],
            declarations: [
                _safe_pipe__WEBPACK_IMPORTED_MODULE_2__["SafePipe"],
                _replace_pipe__WEBPACK_IMPORTED_MODULE_3__["ReplacePipe"],
                _capitalize_pipe__WEBPACK_IMPORTED_MODULE_4__["CapitalizePipe"],
                _plural_pipe__WEBPACK_IMPORTED_MODULE_5__["PluralPipe"],
                _round_pipe__WEBPACK_IMPORTED_MODULE_6__["RoundPipe"],
                _timing_pipe__WEBPACK_IMPORTED_MODULE_7__["TimingPipe"],
                _number_with_commas_pipe__WEBPACK_IMPORTED_MODULE_8__["NumberWithCommasPipe"],
            ],
        })
    ], PipesModule);
    return PipesModule;
}());



/***/ }),

/***/ "../common-angular/src/pipes/plural.pipe.ts":
/*!**************************************************!*\
  !*** ../common-angular/src/pipes/plural.pipe.ts ***!
  \**************************************************/
/*! exports provided: PluralPipe */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "PluralPipe", function() { return PluralPipe; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "../common-angular/node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");


var PluralPipe = (function () {
    function PluralPipe() {
    }
    PluralPipe.prototype.transform = function (input, label, pluralLabel) {
        if (pluralLabel === void 0) { pluralLabel = ''; }
        input = input || 0;
        return input === 1
            ? input + " " + label
            : pluralLabel
                ? input + " " + pluralLabel
                : input + " " + label + "s";
    };
    PluralPipe = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Pipe"])({ name: 'ngxPlural' })
    ], PluralPipe);
    return PluralPipe;
}());



/***/ }),

/***/ "../common-angular/src/pipes/replace.pipe.ts":
/*!***************************************************!*\
  !*** ../common-angular/src/pipes/replace.pipe.ts ***!
  \***************************************************/
/*! exports provided: ReplacePipe */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ReplacePipe", function() { return ReplacePipe; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "../common-angular/node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");


var ReplacePipe = (function () {
    function ReplacePipe() {
    }
    ReplacePipe.prototype.transform = function (value, searchValue, replaceValue) {
        if (typeof value !== typeof 'string' ||
            typeof searchValue !== typeof 'string' ||
            typeof replaceValue !== typeof 'string') {
            throw Error('All pipe parameters should be strings!');
        }
        return value.replace(new RegExp(searchValue, 'g'), replaceValue);
    };
    ReplacePipe = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Pipe"])({ name: 'myReplacePipe' })
    ], ReplacePipe);
    return ReplacePipe;
}());



/***/ }),

/***/ "../common-angular/src/pipes/round.pipe.ts":
/*!*************************************************!*\
  !*** ../common-angular/src/pipes/round.pipe.ts ***!
  \*************************************************/
/*! exports provided: RoundPipe */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "RoundPipe", function() { return RoundPipe; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "../common-angular/node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");


var RoundPipe = (function () {
    function RoundPipe() {
    }
    RoundPipe.prototype.transform = function (input) {
        return Math.round(input);
    };
    RoundPipe = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Pipe"])({ name: 'ngxRound' })
    ], RoundPipe);
    return RoundPipe;
}());



/***/ }),

/***/ "../common-angular/src/pipes/safe.pipe.ts":
/*!************************************************!*\
  !*** ../common-angular/src/pipes/safe.pipe.ts ***!
  \************************************************/
/*! exports provided: SafePipe */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SafePipe", function() { return SafePipe; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "../common-angular/node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/platform-browser */ "./node_modules/@angular/platform-browser/fesm5/platform-browser.js");



var SafePipe = (function () {
    function SafePipe(sanitizer) {
        this.sanitizer = sanitizer;
    }
    SafePipe.prototype.transform = function (value, type) {
        switch (type) {
            case 'html':
                return this.sanitizer.bypassSecurityTrustHtml(value);
            case 'style':
                return this.sanitizer.bypassSecurityTrustStyle(value);
            case 'script':
                return this.sanitizer.bypassSecurityTrustScript(value);
            case 'url':
                return this.sanitizer.bypassSecurityTrustUrl(value);
            case 'resourceUrl':
                return this.sanitizer.bypassSecurityTrustResourceUrl(value);
            default:
                throw new Error("Invalid safe type specified: " + type);
        }
    };
    SafePipe.ctorParameters = function () { return [
        { type: _angular_platform_browser__WEBPACK_IMPORTED_MODULE_2__["DomSanitizer"] }
    ]; };
    SafePipe = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Pipe"])({
            name: 'safe',
        }),
        Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:paramtypes", [_angular_platform_browser__WEBPACK_IMPORTED_MODULE_2__["DomSanitizer"]])
    ], SafePipe);
    return SafePipe;
}());



/***/ }),

/***/ "../common-angular/src/pipes/timing.pipe.ts":
/*!**************************************************!*\
  !*** ../common-angular/src/pipes/timing.pipe.ts ***!
  \**************************************************/
/*! exports provided: TimingPipe */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "TimingPipe", function() { return TimingPipe; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "../common-angular/node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");


var TimingPipe = (function () {
    function TimingPipe() {
    }
    TimingPipe.prototype.transform = function (time) {
        if (time) {
            var minutes = Math.floor(time / 60);
            var seconds = Math.floor(time % 60);
            return "" + this.initZero(minutes) + minutes + ":" + this.initZero(seconds) + seconds;
        }
        return '00:00';
    };
    TimingPipe.prototype.initZero = function (time) {
        return time < 10 ? '0' : '';
    };
    TimingPipe = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Pipe"])({ name: 'timing' })
    ], TimingPipe);
    return TimingPipe;
}());



/***/ }),

/***/ "./src/pages/+info/+terms-of-use/terms-of-use.module.ts":
/*!**************************************************************!*\
  !*** ./src/pages/+info/+terms-of-use/terms-of-use.module.ts ***!
  \**************************************************************/
/*! exports provided: TermsOfUsePageModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "TermsOfUsePageModule", function() { return TermsOfUsePageModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _modules_client_common_angular2_pipes_pipes_module__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @modules/client.common.angular2/pipes/pipes.module */ "../common-angular/src/pipes/pipes.module.ts");
/* harmony import */ var _ngx_translate_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @ngx-translate/core */ "../../node_modules/@ngx-translate/core/fesm5/ngx-translate-core.js");
/* harmony import */ var components_components_module__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! components/components.module */ "./src/components/components.module.ts");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm5/common.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/fesm5/ionic-angular.js");
/* harmony import */ var _terms_of_use__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./terms-of-use */ "./src/pages/+info/+terms-of-use/terms-of-use.ts");










var routes = [
    {
        path: '',
        component: _terms_of_use__WEBPACK_IMPORTED_MODULE_9__["TermsOfUsePage"],
    },
];
var TermsOfUsePageModule = (function () {
    function TermsOfUsePageModule() {
    }
    TermsOfUsePageModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
            declarations: [_terms_of_use__WEBPACK_IMPORTED_MODULE_9__["TermsOfUsePage"]],
            imports: [
                _ngx_translate_core__WEBPACK_IMPORTED_MODULE_3__["TranslateModule"].forChild(),
                _modules_client_common_angular2_pipes_pipes_module__WEBPACK_IMPORTED_MODULE_2__["PipesModule"],
                components_components_module__WEBPACK_IMPORTED_MODULE_4__["ComponentsModule"],
                _angular_common__WEBPACK_IMPORTED_MODULE_6__["CommonModule"],
                _angular_forms__WEBPACK_IMPORTED_MODULE_7__["FormsModule"],
                _ionic_angular__WEBPACK_IMPORTED_MODULE_8__["IonicModule"],
                _angular_router__WEBPACK_IMPORTED_MODULE_5__["RouterModule"].forChild(routes),
            ],
        })
    ], TermsOfUsePageModule);
    return TermsOfUsePageModule;
}());



/***/ }),

/***/ "./src/pages/+info/+terms-of-use/terms-of-use.ts":
/*!*******************************************************!*\
  !*** ./src/pages/+info/+terms-of-use/terms-of-use.ts ***!
  \*******************************************************/
/*! exports provided: TermsOfUsePage */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "TermsOfUsePage", function() { return TermsOfUsePage; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _modules_client_common_angular2_routers_user_router_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @modules/client.common.angular2/routers/user-router.service */ "../common-angular/src/routers/user-router.service.ts");
/* harmony import */ var services_store_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! services/store.service */ "./src/services/store.service.ts");




var TermsOfUsePage = (function () {
    function TermsOfUsePage(userRouter, store) {
        this.userRouter = userRouter;
        this.store = store;
        this.useTermsHtml = '<h1>Loading...</h1>';
    }
    TermsOfUsePage.prototype.ngOnInit = function () {
        var _this = this;
        this.userRouter
            .getTermsOfUse(this._warehouseId, this._deviceId)
            .subscribe(function (innerHtml) {
            _this.useTermsHtml = innerHtml;
        }, function (err) {
            console.log(err);
        });
    };
    Object.defineProperty(TermsOfUsePage.prototype, "_warehouseId", {
        get: function () {
            return localStorage.getItem('_warehouseId');
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(TermsOfUsePage.prototype, "_deviceId", {
        get: function () {
            return localStorage.getItem('_deviceId');
        },
        enumerable: true,
        configurable: true
    });
    TermsOfUsePage.ctorParameters = function () { return [
        { type: _modules_client_common_angular2_routers_user_router_service__WEBPACK_IMPORTED_MODULE_2__["UserRouter"] },
        { type: services_store_service__WEBPACK_IMPORTED_MODULE_3__["Store"] }
    ]; };
    TermsOfUsePage = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'page-terms-of-use',
            template: Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(/*! raw-loader!./terms-of-use.html */ "../../node_modules/raw-loader/dist/cjs.js!./src/pages/+info/+terms-of-use/terms-of-use.html")).default,
        }),
        Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:paramtypes", [_modules_client_common_angular2_routers_user_router_service__WEBPACK_IMPORTED_MODULE_2__["UserRouter"], services_store_service__WEBPACK_IMPORTED_MODULE_3__["Store"]])
    ], TermsOfUsePage);
    return TermsOfUsePage;
}());



/***/ })

}]);
//# sourceMappingURL=terms-of-use-terms-of-use-module.js.map