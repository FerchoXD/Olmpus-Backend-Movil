import { Request, Response } from "express";
import { GetBookPreviewUseCase } from "../../Application/UseCase/GetBookPreviewUseCase";

export class GetBookPreviewController {
    constructor(readonly getBookPreviewUseCase:GetBookPreviewUseCase){}

    async run(req:Request, res:Response) {
        const response = await this.getBookPreviewUseCase.run(req.params.bookUUID);
        return res.status(response.status).json(response);
    }
}