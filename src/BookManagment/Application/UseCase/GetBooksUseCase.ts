import { IBook } from "../../Domain/Ports/IBook";

export class GetBooksUseCase {
    constructor(readonly bookRepository:IBook){}

    async run() {
        return await this.bookRepository.getBooks();
    }
}