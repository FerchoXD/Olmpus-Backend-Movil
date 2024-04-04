import { where } from "sequelize";
import sequelize from "../../../../Database/Config/MySQL/Database";
import { Book } from "../../../Domain/Entities/Book";
import { IBook } from "../../../Domain/Ports/IBook";
import { BookModel } from "../../Database/Models/MySQL/BookModel";

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
        try {
            const book = await BookModel.findOne({ where: { uuid: uuid }, attributes: { exclude: ['content', 'createdAt', 'updatedAt', 'gender'] } });
            if(!book){
                return {
                    "status": 404,
                    "errors": [
                        {
                            "title": "Book Not Found",
                            "detail": `The book with the requested uuid ${uuid} was not found in the database.`
                        }
                    ]
                }
            }

            return {
                "status": 200,
                "uuid": book.dataValues.uuid,
                "type": "books",
                "attributes": {
                    "title": book.dataValues.title,
                    "description": book.dataValues.description,
                    "image": book.dataValues.image,
                    "author": book.dataValues.author,
                }
            }

        } catch (error) {
            return {
                "status":500,
                "error": error
            }
        }
    }

    async serchBook(name: string): Promise<Book[]|any> {
        throw new Error("Method not implemented.");
    }
    

}