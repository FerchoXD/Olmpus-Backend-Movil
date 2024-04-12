import { User } from "../Entities/User";

export interface IUser {
    login(email:string, password:string):Promise<User|any>;
    register(email:string, password:string):Promise<User|any>;
    getUser(uuid:string):Promise<User|any>;
    updateUser(uuid:string, name:string|null, lastname:string|null, username:string|null, interests:string|null):Promise<User|any>;
    deleteUserByUUID(uuid:string):Promise<any>;
}
