import { Module } from "@nestjs/common";
import { ProductController } from "./product.controller";
import { ProductSevice } from "./product.service";

@Module({
    controllers: [ProductController],
    providers: [ProductSevice]
})

export class ProductModule { };