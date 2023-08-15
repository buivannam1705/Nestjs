import { ProductDto } from "src/dto/product.dto";
import { Product } from "src/models/product.model";
export declare class ProductSevice {
    private products;
    getProducts(): Product[];
    createProduct(productDto: ProductDto): Product;
    detailProduct(id: number): Product;
    updateProduct(productDto: ProductDto, id: number): Product;
    deleteProduct(id: number): boolean;
}
