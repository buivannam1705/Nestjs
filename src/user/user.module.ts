import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { UsersService } from './user.servicer';
import { UsersController } from './user.controller';
import { Account } from 'src/models/users.model';

@Module({
    imports: [TypeOrmModule.forFeature([Account])],
    providers: [UsersService],
    controllers: [UsersController],
})
export class UsersModule { }