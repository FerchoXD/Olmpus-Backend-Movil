import { Book } from "../../../Domain/Entities/Book";
import { IFavorite } from "../../../Domain/Ports/IFavorite";

export class FavoriteMySQLRepository implements IFavorite {
    async getFavoriteBooks(userUUID: string): Promise<Book[]|any> {
        throw new Error("Method not implemented.");
    }

    async markBookAsFavorite(userUUID: string, bookUUID: string): Promise<any> {
        throw new Error("Method not implemented.");
    }

}