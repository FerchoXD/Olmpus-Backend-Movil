import { Request, Response } from "express";
import { RecommendBookUseCase } from "../../Application/UseCase/RecommendBooksUseCase";
import { Book } from "../../Domain/Entities/Book";

export class RecommendBookController {

    constructor(readonly recommendBookUseCase:RecommendBookUseCase){}

    async run(req:Request, res:Response):Promise<Book[]|any> {
        const response = await this.recommendBookUseCase.run(req.params.userUUID);
        return res.status(response.status).json(response);
    }

}