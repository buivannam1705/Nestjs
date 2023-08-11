"use strict";
exports.id = 0;
exports.ids = null;
exports.modules = {

/***/ 10:
/***/ (function(__unused_webpack_module, exports, __webpack_require__) {


var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var __param = (this && this.__param) || function (paramIndex, decorator) {
    return function (target, key) { decorator(target, key, paramIndex); }
};
var _a, _b, _c, _d, _e, _f, _g;
Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.ProductController = void 0;
const common_1 = __webpack_require__(6);
const globalClass_1 = __webpack_require__(12);
const product_service_1 = __webpack_require__(11);
const globalEnum_1 = __webpack_require__(13);
const product_dto_1 = __webpack_require__(14);
let ProductController = exports.ProductController = class ProductController {
    constructor(productsService) {
        this.productsService = productsService;
    }
    getProducts() {
        try {
            return new globalClass_1.ReponseData(this.productsService.getProducts(), globalEnum_1.HttpStatus.SUCCESS, globalEnum_1.HttpMessage.SUCCESS);
        }
        catch (error) {
            return new globalClass_1.ReponseData(null, globalEnum_1.HttpStatus.ERROR, globalEnum_1.HttpMessage.ERROR);
        }
    }
    createProduct(productDto) {
        try {
            return new globalClass_1.ReponseData(productDto, globalEnum_1.HttpStatus.SUCCESS, globalEnum_1.HttpMessage.SUCCESS);
        }
        catch (error) {
            return new globalClass_1.ReponseData(null, globalEnum_1.HttpStatus.ERROR, globalEnum_1.HttpMessage.ERROR);
        }
    }
    detailProduct(id) {
        try {
            return new globalClass_1.ReponseData(this.productsService.detailProduct(id), globalEnum_1.HttpStatus.SUCCESS, globalEnum_1.HttpMessage.SUCCESS);
        }
        catch (error) {
            return new globalClass_1.ReponseData(null, globalEnum_1.HttpStatus.ERROR, globalEnum_1.HttpMessage.ERROR);
        }
    }
    updateProduct() {
        try {
            return new globalClass_1.ReponseData(this.productsService.updateProduct(), globalEnum_1.HttpStatus.SUCCESS, globalEnum_1.HttpMessage.SUCCESS);
        }
        catch (error) {
            return new globalClass_1.ReponseData(null, globalEnum_1.HttpStatus.ERROR, globalEnum_1.HttpMessage.ERROR);
        }
    }
    deleteProduct(id) {
        try {
            return new globalClass_1.ReponseData(this.productsService.deleteProduct(id), globalEnum_1.HttpStatus.SUCCESS, globalEnum_1.HttpMessage.SUCCESS);
        }
        catch (error) {
            return new globalClass_1.ReponseData(null, globalEnum_1.HttpStatus.ERROR, globalEnum_1.HttpMessage.ERROR);
        }
    }
};
__decorate([
    (0, common_1.Get)(),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", []),
    __metadata("design:returntype", typeof (_b = typeof globalClass_1.ReponseData !== "undefined" && globalClass_1.ReponseData) === "function" ? _b : Object)
], ProductController.prototype, "getProducts", null);
__decorate([
    (0, common_1.Post)(),
    __param(0, (0, common_1.Body)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [typeof (_c = typeof product_dto_1.ProductDto !== "undefined" && product_dto_1.ProductDto) === "function" ? _c : Object]),
    __metadata("design:returntype", typeof (_d = typeof globalClass_1.ReponseData !== "undefined" && globalClass_1.ReponseData) === "function" ? _d : Object)
], ProductController.prototype, "createProduct", null);
__decorate([
    (0, common_1.Get)('/:id'),
    __param(0, (0, common_1.Param)('id')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Number]),
    __metadata("design:returntype", typeof (_e = typeof globalClass_1.ReponseData !== "undefined" && globalClass_1.ReponseData) === "function" ? _e : Object)
], ProductController.prototype, "detailProduct", null);
__decorate([
    (0, common_1.Put)('/:id'),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", []),
    __metadata("design:returntype", typeof (_f = typeof globalClass_1.ReponseData !== "undefined" && globalClass_1.ReponseData) === "function" ? _f : Object)
], ProductController.prototype, "updateProduct", null);
__decorate([
    (0, common_1.Delete)('/:id'),
    __param(0, (0, common_1.Param)('id')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Number]),
    __metadata("design:returntype", typeof (_g = typeof globalClass_1.ReponseData !== "undefined" && globalClass_1.ReponseData) === "function" ? _g : Object)
], ProductController.prototype, "deleteProduct", null);
exports.ProductController = ProductController = __decorate([
    (0, common_1.Controller)('products'),
    __metadata("design:paramtypes", [typeof (_a = typeof product_service_1.ProductSevice !== "undefined" && product_service_1.ProductSevice) === "function" ? _a : Object])
], ProductController);


/***/ })

};
exports.runtime =
/******/ function(__webpack_require__) { // webpackRuntimeModules
/******/ /* webpack/runtime/getFullHash */
/******/ (() => {
/******/ 	__webpack_require__.h = () => ("b60598531da40720cd27")
/******/ })();
/******/ 
/******/ }
;