import sequelize from "../../../../Database/Config/MySQL/Database"; // Importa la instancia de Sequelize
import { QueryTypes } from 'sequelize';
import { Book } from "../../../Domain/Entities/Book";
import { IBook } from "../../../Domain/Ports/IBook";
import { BookModel } from "../../Database/Models/MySQL/BookModel";
import { RecommendedBookModel } from "../../Database/Models/MySQL/RecommendedBook";

export class BookMySQLRepository implements IBook {
    async recommendBook(userUUID: string): Promise<Book[] | any> {
        try {
            const books = await BookModel.findAll({ where: { userUUID: userUUID }, order: [['createdAt', 'DESC']], });
            if (!books) {
                const lastTenRecords = await RecommendedBookModel.findAll({
                    order: [['createdAt', 'DESC']],
                    limit: 10
                  });
                  
                  if(!lastTenRecords || lastTenRecords.length === 0){
                    return { status:500, message:'No tiene libros la tabla' }
                  }
                return { status:200, lastTenRecords }
            }
            return { status:200, books }

        } catch (error) {
            console.error(error);
            return {
                message: 'Hubo algun error al obtener las recomendaciones',
                status: 500,
                error: error
            }
        }
    }

}