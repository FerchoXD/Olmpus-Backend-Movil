import { User } from "../../Domain/Entities/User";
import { IUser } from "../../Domain/Ports/IUser";

export class GestionPerfilUseCase{

    constructor(readonly userRepository:IUser){}

    async run(userUUID:string) :Promise<User[]|any> {
        try {
            const response = await this.userRepository.gestionPerfil(userUUID);
            console.log('Viene de Use Case');
            console.log(response);
            return response;
        } catch (error) {
            return error;
        }
    }


}



