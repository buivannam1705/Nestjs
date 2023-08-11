import { Product } from "src/models/product.model";
export declare class ProductSevice {
    private products;
    getProducts(): Product[];
    createProduct(): Product[];
    detailProduct(id: number): Product;
    updateProduct(): Product[];
    deleteProduct(id: number): Product;
}
