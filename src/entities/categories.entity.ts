import { BaseEntity, Column, Entity, PrimaryGeneratedColumn } from "typeorm";


@Entity('categories')

export class Categories extends BaseEntity {

    @PrimaryGeneratedColumn()
    id: number;

    @Column()
    category: string;

    @Column()
    description: string
}