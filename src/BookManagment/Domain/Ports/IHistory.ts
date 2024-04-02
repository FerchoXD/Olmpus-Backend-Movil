import { Book } from "../Entities/Book";

export interface IHistory {
    getBooksRead(userUUID:string):Promise<Book[]|any>;
}