import { Book } from "../../Domain/Entities/Book";
import { IBook } from "../../Domain/Ports/IBook";

export class RecommendBookUseCase {

    constructor(readonly bookRepository:IBook){}

    async run(userUUID:string) :Promise<Book[]|any> {
        try {
            const response = await this.bookRepository.recommendBook(userUUID);
            console.log('Vengo del Use Case');
            console.log(response);
            return response;
        } catch (error) {
            return error;
        }
    }

}