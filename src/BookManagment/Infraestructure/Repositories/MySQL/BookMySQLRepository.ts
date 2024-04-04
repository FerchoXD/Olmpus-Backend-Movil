import sequelize from "../../../../Database/Config/MySQL/Database";
import Sequelize from "sequelize";
import { Book } from "../../../Domain/Entities/Book";
import { IBook } from "../../../Domain/Ports/IBook";

export class BookMySQLRepository implements IBook {
    async recommendBook(userUUID: string): Promise<Book[]|any> {
        try {
            const query = `SELECT books.gender FROM histories
            INNER JOIN books ON histories.bookUUID = books.uuid AND histories.userUUID = '${userUUID}'
            ORDER BY histories.createdAt DESC LIMIT 1;`;

            const data = await sequelize.query(query, { type: Sequelize.QueryTypes.SELECT } );
            console.log(data);
            let result;
            if(data.length < 1){
                result = await sequelize.query("SELECT uuid, title, description, author, image, content FROM books ORDER BY RAND() LIMIT 10;", { type:  Sequelize.QueryTypes.SELECT });
            }else{
                result = await sequelize.query(`SELECT uuid, title, description, author, image, content FROM books WHERE gender = '${(data[0] as any).gender}';`, { type: Sequelize.QueryTypes.SELECT });
                if(result.length === 0){
                    return {
                        "status": 404,
                        "error": "No hay libros en la base de datos"
                    }
                }
            }
            const books:Book[] = [];
            result.forEach((book:any) => {
                const bookEntity = new Book(book.title, book.description, book.author, book.image, book.content, book.gender);
                bookEntity.uuid = book.uuid
                books.push(bookEntity);
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