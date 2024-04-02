import { Request, Response } from "express";
import { RegisterUserUseCase } from "../../Application/UseCase/RegisterUserUseCase";
import { User } from "../../Domain/Entities/User";

export class RegisterUserController {

    constructor(readonly registerUserUseCase:RegisterUserUseCase) {}

    async run(req:Request, res:Response) {
        const user = new User(req.body.name, req.body.password);
        const userResponse = await this.registerUserUseCase.run(user);
        return res.status(userResponse.status).json(userResponse);
    }
}