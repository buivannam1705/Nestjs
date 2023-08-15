import { IsEmpty, IsNumber, MinLength } from 'class-validator';


export class ProductDto {

    @IsNumber()
    age?: number;

    @MinLength(5, { message: "this field must be than 5 character" })
    name?: string;

    address?: string;
};