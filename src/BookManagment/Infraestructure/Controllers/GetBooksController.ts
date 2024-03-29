import { Request, Response } from "express";
import { GetBooksUseCase } from "../../Application/UseCase/GetBooksUseCase";

export class GetBooksController {
    constructor(readonly getBooksUseCase:GetBooksUseCase){}

    async run(req:Request, res:Response) {
        const response = await this.getBooksUseCase.run();
        return res.status(response.status).json(response);
    }
}