import { Request, Response } from "express";
import { GetBooksHistoryUseCase } from "../../Application/UseCase/GetBooksHistoryUseCase";

export class GetBooksInHistoryController {
    constructor(readonly getBooksHistoryController:GetBooksHistoryUseCase){}

    async run(req:Request, res:Response) {
        const response = await this.getBooksHistoryController.run(req.params.userUUID);
        return res.status(response.status).json(response)
    }
}