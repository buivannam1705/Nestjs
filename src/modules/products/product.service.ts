import { Injectable } from "@nestjs/common";
import { ProductDto } from "src/dto/product.dto";
import { Product } from "src/models/product.model";


@Injectable()

export class ProductSevice {

    private products: Product[] = [
        { id: 1, name: "nam", age: 20, address: "HN" },
        { id: 1, name: "kien", age: 20, address: "HY" },
        { id: 1, name: "hung", age: 20, address: "HP" },
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
        this.products[index].name = productDto.name;
        this.products[index].age = productDto.age;
        this.products[index].address = productDto.address;
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