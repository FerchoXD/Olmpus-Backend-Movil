import { IUser } from "../../Domain/Ports/IUser";

export class GetUserUseCase {
    constructor(readonly userRepository:IUser){}

    async run(uuid:string) {
        return await this.userRepository.getUser(uuid);
    }
}