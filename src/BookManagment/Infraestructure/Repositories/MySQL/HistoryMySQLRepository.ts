import Sequelize from "sequelize";
import sequelize from "../../../../Database/Config/MySQL/Database";
import { Book } from "../../../Domain/Entities/Book";
import { IHistory } from "../../../Domain/Ports/IHistory";

export class HistoryMySQLRepository implements IHistory {
    async getBooksRead(userUUID: string): Promise<Book[] | any> {
        try {
            // Consulta SQL para obtener los libros leídos por el usuario
            const query = `
                SELECT b.uuid, b.title, b.description, b.author, b.image, b.content, b.gender
                FROM books AS b
                INNER JOIN histories AS h ON b.uuid = h.bookUUID
                WHERE h.userUUID = :userUUID;
            `;
            const data = await sequelize.query(query, {
                type: Sequelize.QueryTypes.SELECT,
                replacements: { userUUID }
            });

            if (data.length === 0) {
                return {
                    "status": 200,
                    "data": []
                };
            }

            // Mapear los datos obtenidos a objetos Book
            const booksRead: Book[] = data.map((book: any) => {
                const bookEntity = new Book(book.title, book.description, book.author, book.image, book.content, book.gender);
                bookEntity.uuid = book.uuid;
                return bookEntity;
            });

            return {
                "status": 200,
                "type": "books",
                "data": booksRead
            };
        } catch (error) {
            return {
                "status": 500,
                "error": error
            };
        }
    }
    }
