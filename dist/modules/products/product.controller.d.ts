import { ReponseData } from "src/global/globalClass";
import { ProductSevice } from "./product.service";
import { Product } from "src/models/product.model";
import { ProductDto } from "src/dto/product.dto";
export declare class ProductController {
    private readonly productsService;
    constructor(productsService: ProductSevice);
    getProducts(): ReponseData<Product[]>;
    createProduct(productDto: ProductDto): ReponseData<ProductDto>;
    detailProduct(id: number): ReponseData<Product>;
    updateProduct(): ReponseData<Product[]>;
    deleteProduct(id: number): ReponseData<Product>;
}
