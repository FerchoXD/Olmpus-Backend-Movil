import Sequelize from "sequelize";
import sequelize from "../../../../Database/Config/MySQL/Database";
import { Book } from "../../../Domain/Entities/Book";
import { IBook } from "../../../Domain/Ports/IBook";

export class BookMySQLRepository implements IBook {
    async recommendBook(userUUID: string): Promise<Book[]|any> {
        throw new Error("Method not implemented.");
    }
    
    async getBooks(): Promise<Book[]|any> {
        try {
            const query = `SELECT uuid, image, author, description, title, gender FROM books ORDER BY RAND() LIMIT 50;`;
            const data = await sequelize.query(query, { type: Sequelize.QueryTypes.SELECT } );

            if(data.length === 0){
                return {
                    "status": 200,
                    "data": []
                }
            }

            const books:Book[] = [];
            data.forEach((book:any) => {
                const bookEntity = new Book(book.title, book.description, book.author, book.image, book.content, book.gender);
                bookEntity.uuid = book.uuid
                books.push(bookEntity)
            });
            return {
                "status": 200,
                "type": "books",
                "data": books
            }
        } catch (error) {
            return {
                "status":500,
                "error": error
            }
        }
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