import { Request, Response } from "express";
import { GestionPerfilUseCase } from "../../Application/UseCase/GestionPerfilUserCase";
import { User } from "../../Domain/Entities/User";


export class GestionPerfilController{

    constructor(readonly gestionPerfilUseCase:GestionPerfilUseCase){}

    async run(req:Request, res:Response):Promise<User[]|any> {
        const response = await this.gestionPerfilUseCase.run(req.params.userUUID);
        return res.status(response.status).json(response);
    }

}



