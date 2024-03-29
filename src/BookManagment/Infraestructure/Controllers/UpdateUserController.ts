import { Request, Response } from "express";
import { UpdateUserUseCase } from "../../Application/UseCase/UpdateUserUseCase";

export class UpdateUserController {
    constructor(readonly updateUserUseCase:UpdateUserUseCase){}

    async run(req: Request, res: Response) {
        const response = await this.updateUserUseCase.run(req.params.userUUID, req.body.name, req.body.lastname, req.body.username, req.body.interests);
        return res.status(response.status).json(response);
    }
    
}