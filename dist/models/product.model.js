"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Product = void 0;
class Product {
    constructor({ id, categoryId, productName, price }) {
        if (id !== null)
            this.id = id;
        if (categoryId !== null)
            this.categoryId = categoryId;
        if (productName !== null)
            this.productName = productName;
        if (price !== null)
            this.price = price;
    }
}
exports.Product = Product;
//# sourceMappingURL=product.model.js.map