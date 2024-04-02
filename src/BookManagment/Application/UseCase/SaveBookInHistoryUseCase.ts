import { IFavorite } from "../../Domain/Ports/IFavorite";

export class SaveBookInHistoryUseCase {
    constructor(readonly favoriteRepository:IFavorite) {}

    async run(userUUID:string, bookUUID:string) {
        return await this.favoriteRepository.markBookAsFavorite(userUUID, bookUUID);
    }
}