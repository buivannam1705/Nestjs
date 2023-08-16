import { Controller, Get, Post, Put, Delete, Body, Param, UseGuards } from '@nestjs/common';
import { User } from 'src/entities/user.entity';

import { UserService } from './user.servicer';

// import { AuthGuard } from '../src/auth/login/auth.guard';


@Controller('test')
export class UserController {
    constructor(private readonly userService: UserService) {

    }

    @Get()
    findAll(): Promise<User[]> {
        return this.userService.findAll()
    }

    // @UseGuards(AuthGuard)
    @Get(':id')
    async getbyid(@Param() params) {
        console.log(params.id)
        return await this.userService.findOne(params.id);

    }

    // @UseGuards(AuthGuard)
    @Post()
    create(@Body() user: User) {
        return this.userService.create(user);
    }

    @Put()
    update(@Body() user: User) {
        return this.userService.update(user);
    }

    @Delete(':id')
    deleteUser(@Param() params) {
        return this.userService.delete(params.id);
    }
}

