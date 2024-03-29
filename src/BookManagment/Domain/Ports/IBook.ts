import { Book } from "../Entities/Book";

export interface IBook {
    recommendBook(userUUID:string):Promise<Book[]|any>;
    getBooks():Promise<Book[]|any>;
    readBook(uuid:string, userUUID:string):Promise<Book|any>;
    getPreviewBook(uuid:string):Promise<Book|any>;
    serchBook(name:string):Promise<Book[]|any>;
}