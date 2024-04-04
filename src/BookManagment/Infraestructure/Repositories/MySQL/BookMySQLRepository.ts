import sequelize from "../../../../Database/Config/MySQL/Database";
import Sequelize from "sequelize";
import { Book } from "../../../Domain/Entities/Book";
import { IBook } from "../../../Domain/Ports/IBook";

export class BookMySQLRepository implements IBook {
    async recommendBook(userUUID: string): Promise<Book[]|any> {
        try {
            const query = `SELECT books.author FROM histories
            INNER JOIN books ON histories.bookUUID = books.uuid AND histories.userUUID = '${userUUID}'
            ORDER BY histories.createdAt DESC LIMIT 1;`;

            const data = await sequelize.query(query, { type: Sequelize.QueryTypes.SELECT } );
            let result;
            if(data.length < 1){
                result = await sequelize.query("SELECT uuid, title, author, image FROM books ORDER BY RAND() LIMIT 10;", { type:  Sequelize.QueryTypes.SELECT });
            }else{
                result = await sequelize.query(`SELECT uuid, title, author, image FROM books WHERE author = '${(data[0] as any).author}';`, { type: Sequelize.QueryTypes.SELECT });
                if(result.length === 0){
                    return {
                        "status": 404,
                        "error": "No hay libros en la base de datos"
                    }
                }
            }
            const books:Book[] = [];
            result.forEach((book:any) => {
                const bookEntity = new Book(book.title, '', book.author, book.image, '', '');
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