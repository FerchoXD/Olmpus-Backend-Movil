import { User } from "../Entities/User";

export interface IUser {
    gestionPerfil(userUUID:string):Promise<User[]|any>;
}