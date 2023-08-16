import { IsEmail, IsNotEmpty, MaxLength } from 'class-validator';
import { Column, Entity, PrimaryGeneratedColumn } from 'typeorm';

@Entity()
export class User {
    @PrimaryGeneratedColumn()
    id: number;

    @IsNotEmpty()
    @MaxLength(50)
    @Column()
    username: string;

    @IsNotEmpty()
    @IsEmail()
    @Column()
    email: string;

    @Column()
    password: string;
}
