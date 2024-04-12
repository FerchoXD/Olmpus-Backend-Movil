import { IUser } from "../../Domain/Ports/IUser";

export class DeleteUserByUUIDUseCase {
    constructor(readonly userRepository:IUser){}

    async run(uuid:string) {
        return await this.userRepository.deleteUserByUUID(uuid);
    }
}
