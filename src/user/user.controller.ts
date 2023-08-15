import { Controller, Get, Post, Put, Delete, Body, Param, ValidationPipe, NotFoundException } from '@nestjs/common';
import { UsersService } from './user.servicer'
import { Account } from 'src/models/users.model';
import { ReponseData } from 'src/global/globalClass';
import { AccountDto } from 'src/dto/account.dto';
import { HttpMessage, HttpStatus } from 'src/global/globalEnum';


@Controller('accounts')
export class UsersController {
    constructor(private readonly userService: UsersService) {

    }

    @Get()
    findAll(): Promise<Account[]> {
        return this.userService.findAll()
    };


    @Post()
    createUser(@Body() AccountDto: AccountDto): Account {
        return this.userService.createUser(AccountDto)

    }

    @Get('/:id')
    async getAccountById(@Param('id') id: number) {
        const account = await this.userService.getAccountById(id);
        if (!account) {
            throw new NotFoundException('Account not found');
        }
        return account;

    }



}