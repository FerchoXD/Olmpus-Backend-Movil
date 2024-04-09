import Sequelize from "sequelize";
import sequelize from "../../../../Database/Config/MySQL/Database";
import { Book } from "../../../Domain/Entities/Book";
import { History } from "../../../Domain/Entities/History";
import { HistoryModel } from "../../Database/Models/MySQL/HistoryModel";
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

    async readBook(uuid: string, userUUID: string): Promise<Book | any> {
        try {
            const query = `SELECT uuid, image, author, description, title, content, gender FROM books WHERE uuid = '${uuid}'`;
            const [bookData]: any[] = await sequelize.query(query, { type: Sequelize.QueryTypes.SELECT });

            if (!bookData) {
                return {
                    "status": 404,
                    "error": "Book not found"
                };
            }

            if (!('title' in bookData && 'description' in bookData && 'author' in bookData && 'image' in bookData)) {
                return {
                    "status": 500,
                    "error": "Invalid book data"
                };
            }

            const bookEntity = new Book(bookData.title, bookData.description, bookData.author, bookData.image, bookData.content, bookData.gender);
            bookEntity.uuid = bookData.uuid;

            const history = new History(userUUID, uuid, new Date());
            const savedHistory = await HistoryModel.create({
                uuid: history.uuid,
                bookUUID: bookEntity.uuid,
                readingDate: history.readingDate.toISOString(),
                userUUID: userUUID
            });

            return {
                "status": 200,
                "type": "book",
                "data": bookEntity
            };
        } catch (error) {
            return {
                "status": 500,
                "error": `Error fetching book: ${error}`
            }
        }
    }
    
    async getPreviewBook(uuid: string): Promise<Book|any> {
        throw new Error("Method not implemented.");
    }

    async serchBook(name: string): Promise<Book[]|any> {
        throw new Error("Method not implemented.");
    }
    

}