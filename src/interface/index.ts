export class User {
    // ...other properties
    id: number;
    isAdmin: boolean;
    // roles: Role[];
}

export class Article {
    id: number;
    isPublished: boolean;
    authorId: number;
}

export enum Action {
    Manage = 'manage',
    Create = 'create',
    Read = 'read',
    Update = 'update',
    Delete = 'delete',
}

export enum Role {
    User = 'user',
    Admin = 'admin',
}