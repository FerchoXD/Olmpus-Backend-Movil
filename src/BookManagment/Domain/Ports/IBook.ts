import { Book } from "../Entities/Book";

export interface IBook {
    recommendBook(userUUID:string):Promise<Book[]|any>;
}