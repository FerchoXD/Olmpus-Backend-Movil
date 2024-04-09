import Sequelize from "sequelize";
import sequelize from "../../../../Database/Config/MySQL/Database";
import { Book } from "../../../Domain/Entities/Book";
import { IFavorite } from "../../../Domain/Ports/IFavorite";
import { v4 as uuidv4 } from 'uuid';

export class FavoriteMySQLRepository implements IFavorite {
    async getFavoriteBooks(userUUID: string): Promise<Book[] | any> {
        try {
            // Consulta SQL para obtener los libros favoritos del usuario
            const query = `
                SELECT b.uuid, b.title, b.description, b.author, b.image, b.content, b.gender
                FROM books AS b
                INNER JOIN favorites AS f ON b.uuid = f.bookUUID
                WHERE f.userUUID = :userUUID;
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
            const favoriteBooks: Book[] = data.map((book: any) => {
                const bookEntity = new Book(book.title, book.description, book.author, book.image, book.content, book.gender);
                bookEntity.uuid = book.uuid;
                return bookEntity;
            });

            return {
                "status": 200,
                "type": "books",
                "data": favoriteBooks
            };
        } catch (error) {
            return {
                "status": 500,
                "error": error
            };
        }
    }

    async markBookAsFavorite(userUUID: string, bookUUID: string): Promise<any> {
        try {
            const favoriteUUID = uuidv4();
            const currentDateTime = new Date();
    
            const query = `
                INSERT INTO favorites (uuid, userUUID, bookUUID, createdAt, updatedAt)
                VALUES (:uuid, :userUUID, :bookUUID, :createdAt, :updatedAt);
            `;
            await sequelize.query(query, {
                replacements: {
                    uuid: favoriteUUID,
                    userUUID,
                    bookUUID,
                    createdAt: currentDateTime,
                    updatedAt: currentDateTime
                }
            });
    
            return {
                "status": 200,
                "message": "Book marked as favorite successfully"
            };
        } catch (error) {
            console.error("Error:", error);
            return {
                "status": 500,
                "error": error
            };
        }
    }
    
}