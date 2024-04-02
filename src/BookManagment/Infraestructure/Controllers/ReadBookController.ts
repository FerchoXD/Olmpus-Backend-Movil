import { Request, Response } from "express";
import { ReadBookUseCase } from "../../Application/UseCase/ReadBookUseCase";

export class ReadBookController {
    constructor(readonly readBookUseCase:ReadBookUseCase){}

    async run(req:Request, res:Response) {
        const response = await this.readBookUseCase.run(req.params.bookUUID, req.params.userUUID);
        return res.status(response.status).json(response);
    }
}