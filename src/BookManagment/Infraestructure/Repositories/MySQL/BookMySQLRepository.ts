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
        throw new Error("Method not implemented.");
    }

    async serchBook(name: string): Promise<Book[]|any> {
        try {
            name = name.replace(/-/g, ' ');
            const books = await BookModel.findAll({ where: { title: name }, attributes: ['uuid', 'image', 'author', 'title', 'description', 'content', 'gender'] });
            if(books.length === 0){
                return {
                    "status": 404,
                    "errors": [
                        {
                            "title": "Book Not Found",
                            "detail": `The book with the title "${name}" was not found.`                        }
                    ]
                }
            }
            const booksEntity:Book[] = [];
            books.forEach((book:any) => {
                book = book.dataValues;
                const bookEntity = new Book(book.title, book.description, book.author, book.image, book.content, book.gender);
                booksEntity.push(bookEntity)
            });

            return {
                "status": 200,
                "type": "books",
                "data": booksEntity
            }

        } catch (error) {
            return {
                "status":500,
                "error": error
            }
        }
    }
    

}