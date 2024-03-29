import { IFavorite } from "../../Domain/Ports/IFavorite";

export class GetBooksFavoriteUseCase {
    constructor(readonly favoriteRepository:IFavorite){}

    async run(userUUID:string) {
        return await this.favoriteRepository.getFavoriteBooks(userUUID);
    }
}