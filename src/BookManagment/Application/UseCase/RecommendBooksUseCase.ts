import { Book } from "../../Domain/Entities/Book";
import { IBook } from "../../Domain/Ports/IBook";

export class RecommendBookUseCase {

    constructor(readonly bookRepository:IBook){}

    async run(userUUID:string) :Promise<Book[]|any> {
        return await this.bookRepository.recommendBook(userUUID);
    }

}