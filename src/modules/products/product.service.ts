import { Injectable } from "@nestjs/common";
import { ProductDto } from "src/dto/product.dto";
import { Product } from "src/models/product.model";


@Injectable()

export class ProductSevice {

    private products: Product[] = [
        { id: 1, categoryId: 2, price: 1000, productName: "Nam" },
        { id: 2, categoryId: 2, price: 2000, productName: "Kien" },
        { id: 3, categoryId: 2, price: 3000, productName: "Hung" }
    ]

    getProducts(): Product[] {
        return this.products;
    }


    createProduct(productDto: ProductDto): Product {
        const product: Product = {
            id: Math.random(),
            ...productDto
        };
        this.products.push(product)
        return product;
    }


    detailProduct(id: number): Product {
        return this.products.find(item => item.id === Number(id));
    }


    updateProduct(productDto: ProductDto, id: number): Product {
        const index = this.products.findIndex(item => item.id === Number(id));
        this.products[index].categoryId = productDto.categoryId;
        this.products[index].productName = productDto.productName;
        this.products[index].price = productDto.price;
        return this.products[index];
    }

    deleteProduct(id: number): boolean {
        const index = this.products.findIndex(item => item.id === Number(id));
        if (index !== -1) {
            this.products.splice(index, 1)
            return true;
        }
        return false
    }
}