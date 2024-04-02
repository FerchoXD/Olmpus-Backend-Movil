import { Book } from "../Entities/Book";

export interface IFavorite {
    getFavoriteBooks(userUUID:string):Promise<Book[]|any>;
    markBookAsFavorite(userUUID:string, bookUUID:string):Promise<any>;
}