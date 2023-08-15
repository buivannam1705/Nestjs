import { Injectable } from '@nestjs/common';
import { InjectRepository } from "@nestjs/typeorm";
import { User } from "./userEntity";
import { Repository } from "typeorm";

@Injectable()
export class AuthService {
    validateUser(username: string, password: string) {
        throw new Error('Method not implemented.');
    }
    constructor(
        @InjectRepository(User) private readonly userRepository: Repository<User>
    ) {
    }

    async create(data: any): Promise<User> {
        return this.userRepository.save(data);
    }

    async findOne(pram): Promise<User> {
        return this.userRepository.findOne(pram);
    }
}