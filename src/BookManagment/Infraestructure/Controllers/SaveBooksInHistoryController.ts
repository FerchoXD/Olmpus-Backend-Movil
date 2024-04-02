import { Request, Response } from "express";
import { SaveBookInHistoryUseCase } from "../../Application/UseCase/SaveBookInHistoryUseCase";

export class SaveBookInHistoryController {
    constructor(readonly saveBookInHistoryUseCase:SaveBookInHistoryUseCase){}

    async run(req:Request, res:Response) {
        const response = await this.saveBookInHistoryUseCase.run(req.params.userUUID, req.params.bookUUID);
        return res.status(response.status).json(response);
    }
}