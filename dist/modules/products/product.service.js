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
            { id: 1, name: "nam", age: 20, address: "HN" },
            { id: 1, name: "kien", age: 20, address: "HY" },
            { id: 1, name: "hung", age: 20, address: "HP" },
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
        this.products[index].name = productDto.name;
        this.products[index].age = productDto.age;
        this.products[index].address = productDto.address;
        return this.products[index];
    }
    deleteProduct(id) {
        const index = this.products.findIndex(item => item.id === Number(id));
        if (index !== -1) {
            this.products.splice(index, 1);
            return true;
        }
        return false;
    }
};
exports.ProductSevice = ProductSevice = __decorate([
    (0, common_1.Injectable)()
], ProductSevice);
//# sourceMappingURL=product.service.js.map