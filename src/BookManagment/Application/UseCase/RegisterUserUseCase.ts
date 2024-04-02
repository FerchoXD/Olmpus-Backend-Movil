import { User } from "../../Domain/Entities/User";
import { IUser } from "../../Domain/Ports/IUser";

export class RegisterUserUseCase {
    constructor(readonly UserRepository:IUser){}

    async run(user:User):Promise<User|any>{
        const response = await this.UserRepository.register(user);
        return response;
    }
}