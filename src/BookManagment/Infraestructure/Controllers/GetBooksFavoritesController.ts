import { Request, Response } from "express";
import { GetBooksFavoriteUseCase } from "../../Application/UseCase/GetBooksFavoritesUseCase";

export class GetBooksFavoritesController {
    constructor(readonly getBooksFavoriteUseCase:GetBooksFavoriteUseCase){}

    async run(req:Request, res:Response) {
        const response = await this.getBooksFavoriteUseCase.run(req.params.userUUID);
        return res.status(response.status).json(response);
    }
}