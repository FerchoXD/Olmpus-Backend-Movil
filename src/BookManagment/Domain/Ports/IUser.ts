import { User } from "../Entities/User";

export interface IUser {
    register(user:User):Promise<User|any>;
    getAll():Promise<User[]|any>;
}