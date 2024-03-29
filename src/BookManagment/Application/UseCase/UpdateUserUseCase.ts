import { IUser } from "../../Domain/Ports/IUser";

export class UpdateUserUseCase {
    constructor(readonly userRepository:IUser){}

    async run(uuid:string, name:string|null, lastname:string|null, username:string|null, interests:string|null) {
        return await this.userRepository.updateUser(uuid, name, lastname, username, interests);
    }
}