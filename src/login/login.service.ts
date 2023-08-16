
import { Injectable, UnauthorizedException } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';

import { JwtService } from '@nestjs/jwt';
import { User } from 'src/entities/user.entity';


@Injectable()
export class LoginService {
    constructor(
        @InjectRepository(User)
        private readonly usersService: Repository<User>,
        private jwtService: JwtService,

    ) { }

    async signIn(username, pass, email) {

        const user = await this.usersService.findOneBy({ username: username })

        if (user?.password !== pass || user?.email !== email || user?.username !== username) {
            throw new UnauthorizedException();
        }

        // const payload = { id: user.id, username: user.username, email: user.email };
        const { password, ...result } = user;

        return {
            access_token: await this.jwtService.signAsync(result),
        };


    }
    async create(user: User): Promise<User> {

        return await this.usersService.save(user)
    }
}