"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.ProductSevice = void 0;
const common_1 = require("@nestjs/common");
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
    createProduct() {
        return this.products;
    }
    detailProduct(id) {
        return this.products.find(item => item.id === Number(id));
    }
    updateProduct() {
        return this.products;
    }
    deleteProduct(id) {
        return this.products.find(item => item.id === Number(id));
    }
};
exports.ProductSevice = ProductSevice = __decorate([
    (0, common_1.Injectable)()
], ProductSevice);
//# sourceMappingURL=product.service.js.map