import { Book } from "../../../Domain/Entities/Book";
import { IBook } from "../../../Domain/Ports/IBook";
import { BookModel } from "../../Database/Models/MySQL/BookModel";

export class BookMySQLRepository implements IBook {
    async recommendBook(userUUID: string): Promise<Book[]|any> {
        try {
            console.log(userUUID);
            const gender = await BookModel.findOne({ where:{ userUUID:userUUID }, order:[['createdAt', 'DESC']] });
            console.log(gender);
            if(!gender) return { status:404 }
            throw new Error("Method not implemented.");
        } catch (error) {
            console.error(error);
            return {
                message:'Hubo algun error al obtener las recomendaciones',
                status:500,
                error:error
            }
        }
    }

}