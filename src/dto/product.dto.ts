import { IsEmpty, IsNumber, MinLength } from 'class-validator';


export class ProductDto {

    @IsNumber()
    categoryId?: number;

    @MinLength(5, { message: "this field must be than 5 character" })
    productName?: string;

    @IsNumber()
    price?: number;
};