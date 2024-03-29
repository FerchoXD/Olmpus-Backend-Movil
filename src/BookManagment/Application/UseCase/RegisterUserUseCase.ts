import { IUser } from "../../Domain/Ports/IUser";

export class RegisterUserUseCase {
    constructor(readonly userRepository:IUser){}

    async run(email:string, password:string) {
        return await this.userRepository.register(email, password);        
    }
}