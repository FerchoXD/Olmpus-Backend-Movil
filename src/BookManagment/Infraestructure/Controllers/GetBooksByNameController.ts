import { Request, Response } from "express";
import { GetBooksByNameUseCase } from "../../Application/UseCase/GetBooksByNameUseCase";

export class GetBooksByNameController {
    constructor(readonly getBooksByNameUseCase:GetBooksByNameUseCase){}

    async run(req:Request, res:Response) {
        const response = await this.getBooksByNameUseCase.run(req.params.name);
        return res.status(response.status).json(response);
    }
}