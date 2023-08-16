import { Body, Controller, Post, HttpCode, HttpStatus, UseGuards, Get, Request, } from '@nestjs/common';
import { User } from 'src/entities/user.entity';
import { AuthGuard } from 'src/guard/auth.guard';
import { Roles } from 'src/guard/roles.guard';
import { Role } from 'src/interface';
import { LoginService } from './login.service';


@Controller('auth')
export class LoginController {
    constructor(private authService: LoginService) { }

    @HttpCode(HttpStatus.OK)
    @Post('login')
    signIn(@Body() user: User) {
        // console.log(1, signInDto)
        return this.authService.signIn(user.username, user.password, user.email);
    }

    @UseGuards(AuthGuard)
    @Get('profile')
    getProfile(@Request() req) {
        return req.user;
    }

    // @UseGuards(RolesGuard)
    @Post()
    @Roles(Role.Admin)
    create(@Body() user: User) {
        this.authService.create(user);
    }

}