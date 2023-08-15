export class Product {
    id?: number;
    name?: string;
    age?: number;
    address?: string;

    constructor({ id, name, age, address }) {
        if (id !== null) this.id = id;
        if (name !== null) this.name = name;
        if (age !== null) this.age = age
        if (address !== null) this.address = address

    }
}