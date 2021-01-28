webpackJsonp([0],{

/***/ "../../../../../src/app/temp/temp.module.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_common__ = __webpack_require__("../../../common/@angular/common.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__core_core_module__ = __webpack_require__("../../../../../src/app/core/core.module.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__temp_service__ = __webpack_require__("../../../../../src/app/temp/temp.service.ts");
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "TempModule", function() { return TempModule; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




var TempModule = (function () {
    function TempModule(tempsvc) {
        console.log('temp module constructor');
        tempsvc.tempwrite('temp something');
    }
    TempModule = __decorate([
        __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["b" /* NgModule */])({
            imports: [
                __WEBPACK_IMPORTED_MODULE_1__angular_common__["a" /* CommonModule */],
                __WEBPACK_IMPORTED_MODULE_2__core_core_module__["a" /* CoreModule */]
            ],
            declarations: [],
            providers: [__WEBPACK_IMPORTED_MODULE_3__temp_service__["a" /* TempService */]]
        }),
        __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_3__temp_service__["a" /* TempService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_3__temp_service__["a" /* TempService */]) === "function" && _a || Object])
    ], TempModule);
    return TempModule;
    var _a;
}());

//# sourceMappingURL=temp.module.js.map

/***/ }),

/***/ "../../../../../src/app/temp/temp.service.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__core_logger_service__ = __webpack_require__("../../../../../src/app/core/logger.service.ts");
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return TempService; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var TempService = (function () {
    function TempService(logger) {
        this.logger = logger;
        logger.log('temp service constructor');
    }
    TempService.prototype.tempwrite = function (msg) {
        console.log(msg);
    };
    TempService = __decorate([
        __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["c" /* Injectable */])(),
        __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1__core_logger_service__["a" /* LoggerService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__core_logger_service__["a" /* LoggerService */]) === "function" && _a || Object])
    ], TempService);
    return TempService;
    var _a;
}());

//# sourceMappingURL=temp.service.js.map

/***/ })

});
//# sourceMappingURL=0.chunk.js.map