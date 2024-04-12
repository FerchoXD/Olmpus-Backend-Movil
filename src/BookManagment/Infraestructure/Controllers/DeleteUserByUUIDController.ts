import { Request, Response } from "express";
import { DeleteUserByUUIDUseCase } from "../../Application/UseCase/DeleteUserByUUIDUseCase";

export class DeleteUserByUUIDController {
    constructor(readonly deleteUserByUUIDUseCase:DeleteUserByUUIDUseCase){}

    async run(req:Request, res:Response) {
        const response = await this.deleteUserByUUIDUseCase.run(req.params.userUUID);
        return res.status(response.status).json(response);
    }
}
