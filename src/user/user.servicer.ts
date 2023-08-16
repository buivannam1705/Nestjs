import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { User } from 'src/entities/user.entity';
import { Repository } from 'typeorm';
import { UpdateResult, DeleteResult } from 'typeorm';

@Injectable()
export class UserService {
    constructor(
        @InjectRepository(User)
        private readonly userRepo: Repository<User>,
    ) { }

    async findAll(): Promise<User[]> {
        return await this.userRepo.find();
    }

    async findOne(id): Promise<User> {
        return await this.userRepo.findOneBy({ id: id })
    }


    async create(task: User): Promise<User> {
        return await this.userRepo.save(task)
    }

    async update(user: User): Promise<UpdateResult> {
        return await this.userRepo.update(user.id, user);
    }

    async delete(id): Promise<DeleteResult> {
        return await this.userRepo.delete(id);
    }
}

