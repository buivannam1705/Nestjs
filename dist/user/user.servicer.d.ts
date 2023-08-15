import { Repository } from 'typeorm';
import { Account } from 'src/models/users.model';
import { AccountDto } from 'src/dto/account.dto';
export declare class UsersService {
    private usersRepository;
    constructor(usersRepository: Repository<Account>);
    findAll(): Promise<Account[]>;
    createUser(accountDto: AccountDto): Account;
}