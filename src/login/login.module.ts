import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { LoginService } from './login.service';
import { LoginController } from './login.controller';


import { JwtModule } from '@nestjs/jwt';
import { User } from 'src/entities/user.entity';
import { jwtConstants } from 'src/jwt/constants';

// import { RolesGuard } from './roles.guard';


@Module({
    imports: [
        TypeOrmModule.forFeature([User]),
        JwtModule.register({
            global: true,
            secret: jwtConstants.secret,
            signOptions: { expiresIn: '60s' },
        }),

    ],

    providers: [LoginService],
    controllers: [LoginController],
    exports: [LoginService]



})
export class LoginModule { }