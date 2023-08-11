import { Body, Controller, Delete, Get, Param, Post, Put, ValidationPipe } from "@nestjs/common";
import { ReponseData } from "src/global/globalClass";
import { ProductSevice } from "./product.service";
import { HttpMessage, HttpStatus } from "src/global/globalEnum";
import { Product } from "src/models/product.model";
import { ProductDto } from "src/dto/product.dto";

@Controller('products')

export class ProductController {

    constructor(private readonly productsService: ProductSevice) { }

    @Get()
    getProducts(): ReponseData<Product[]> {
        try {
            return new ReponseData<Product[]>(this.productsService.getProducts(), HttpStatus.SUCCESS, HttpMessage.SUCCESS)
        } catch (error) {
            return new ReponseData<Product[]>(null, HttpStatus.ERROR, HttpMessage.ERROR)
        }

    }

    @Post()
    createProduct(@Body(new ValidationPipe()) productDto: ProductDto): ReponseData<Product> {
        try {
            return new ReponseData<Product>(this.productsService.createProduct(productDto), HttpStatus.SUCCESS, HttpMessage.SUCCESS)
        } catch (error) {
            return new ReponseData<Product>(null, HttpStatus.ERROR, HttpMessage.ERROR)
        }
    }

    @Get('/:id')
    detailProduct(@Param('id') id: number): ReponseData<Product> {
        try {
            return new ReponseData<Product>(this.productsService.detailProduct(id), HttpStatus.SUCCESS, HttpMessage.SUCCESS)
        } catch (error) {
            return new ReponseData<Product>(null, HttpStatus.ERROR, HttpMessage.ERROR)
        }
    }

    @Put('/:id')
    updateProduct(@Body() productDto: ProductDto, @Param('id') id: number): ReponseData<Product> {
        try {
            return new ReponseData<Product>(this.productsService.updateProduct(productDto, id), HttpStatus.SUCCESS, HttpMessage.SUCCESS)
        } catch (error) {
            return new ReponseData<Product>(null, HttpStatus.ERROR, HttpMessage.ERROR)
        }
    }
    @Delete('/:id')
    deleteProduct(@Param('id') id: number): ReponseData<boolean> {
        try {
            return new ReponseData<boolean>(this.productsService.deleteProduct(id), HttpStatus.SUCCESS, HttpMessage.SUCCESS)
        } catch (error) {
            return new ReponseData<boolean>(null, HttpStatus.ERROR, HttpMessage.ERROR)
        }
    }
}