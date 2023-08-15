import { UsersService } from './user.servicer';
import { Account } from 'src/models/users.model';
import { AccountDto } from 'src/dto/account.dto';
export declare class UsersController {
    private readonly userService;
    constructor(userService: UsersService);
    findAll(): Promise<Account[]>;
    createUser(AccountDto: AccountDto): Account;
    getAccountById(id: number): Promise<Account>;
}
