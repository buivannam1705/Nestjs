import { IsEmpty, IsNumber, MinLength } from 'class-validator';


export class AccountDto {

    id?: number;

    username?: string;

    password?: string;
};