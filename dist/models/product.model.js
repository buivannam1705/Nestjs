"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Product = void 0;
class Product {
    constructor({ id, name, age, address }) {
        if (id !== null)
            this.id = id;
        if (name !== null)
            this.name = name;
        if (age !== null)
            this.age = age;
        if (address !== null)
            this.address = address;
    }
}
exports.Product = Product;
//# sourceMappingURL=product.model.js.map