import sequelize from "../../../../Database/Config/MySQL/Database";
import { Book } from "../../../Domain/Entities/Book";
import { IBook } from "../../../Domain/Ports/IBook";

export class BookMySQLRepository implements IBook {
    async recommendBook(userUUID: string): Promise<Book[]|any> {
        throw new Error("Method not implemented.");
    }
    
    async getBooks(): Promise<Book[]|any> {
        throw new Error("Method not implemented.");
    }

    async readBook(uuid: string, userUUID:string): Promise<Book|any> {
        throw new Error("Method not implemented.");
    }

    async getPreviewBook(uuid: string): Promise<Book|any> {
        throw new Error("Method not implemented.");
    }

    async serchBook(name: string): Promise<Book[]|any> {
        throw new Error("Method not implemented.");
    }
    

}