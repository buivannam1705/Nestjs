import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { Account } from 'src/models/users.model';
import { AccountDto } from 'src/dto/account.dto';

@Injectable()
export class UsersService {
    constructor(
        @InjectRepository(Account)
        private usersRepository: Repository<Account>,
    ) { }

    findAll(): Promise<Account[]> {
        return this.usersRepository.find();
    }

    createUser(accountDto: AccountDto): Account {
        const product: Account = {
            id: Math.random(),
            username: "nam dep trai qua",
            password: "nam123",


        };
        this.usersRepository.save(product)
        return product;
    }


}