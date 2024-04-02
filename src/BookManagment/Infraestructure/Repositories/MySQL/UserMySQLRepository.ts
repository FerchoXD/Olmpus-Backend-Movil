import { User } from "../../../Domain/Entities/User";
import { IUser } from "../../../Domain/Ports/IUser";

export class UserMySQLRepository implements IUser {
    async login(email: string, password: string): Promise<User|any> {
        throw new Error("Method not implemented.");
    }

    async register(email: string, password: string): Promise<User|any> {
        throw new Error("Method not implemented.");
    }

    async getUser(uuid: string): Promise<User|any> {
        throw new Error("Method not implemented.");
    }

    async updateUser(uuid: string, name: string | null, lastname: string | null, username: string | null, interests: string | null): Promise<User|any> {
        // Siempre llegaran los datos pero puede ser que sea un: '' para que se añada la validacion
        throw new Error("Method not implemented.");
    }

}