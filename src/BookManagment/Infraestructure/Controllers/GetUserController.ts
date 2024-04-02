import { Request, Response } from "express";
import { GetUserUseCase } from "../../Application/UseCase/GetUserUseCase";

export class GetUserController {
    constructor(readonly getUserUseCase:GetUserUseCase){}

    async run(req:Request, res:Response) {
        const response = await this.getUserUseCase.run(req.params.userUUID);
        return res.status(response.status).json(response);
    }
}