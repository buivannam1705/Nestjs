"use strict";
exports.id = 0;
exports.ids = null;
exports.modules = {

/***/ 11:
/***/ (function(__unused_webpack_module, exports, __webpack_require__) {


var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.ProductSevice = void 0;
const common_1 = __webpack_require__(6);
let ProductSevice = exports.ProductSevice = class ProductSevice {
    constructor() {
        this.products = [
            { id: 1, categoryId: 1, price: 1000, productName: "Nam" },
            { id: 2, categoryId: 2, price: 2000, productName: "Kien" },
            { id: 3, categoryId: 3, price: 3000, productName: "Hung" }
        ];
    }
    getProducts() {
        return this.products;
    }
    createProduct(productDto) {
        const product = {
            id: Math.random(),
            ...productDto
        };
        this.products.push(product);
        return product;
    }
    detailProduct(id) {
        return this.products.find(item => item.id === Number(id));
    }
    updateProduct(productDto, id) {
        const index = this.products.findIndex(item => item.id === Number(id));
        this.products[index].categoryId = productDto.categoryId;
        this.products[index].productName = productDto.productName;
        this.products[index].price = productDto.price;
        return this.products[index];
    }
    deleteProduct(id) {
        return this.products.find(item => item.id === Number(id));
    }
};
exports.ProductSevice = ProductSevice = __decorate([
    (0, common_1.Injectable)()
], ProductSevice);


/***/ })

};
exports.runtime =
/******/ function(__webpack_require__) { // webpackRuntimeModules
/******/ /* webpack/runtime/getFullHash */
/******/ (() => {
/******/ 	__webpack_require__.h = () => ("ad65a24eca12d345ec99")
/******/ })();
/******/ 
/******/ }
;