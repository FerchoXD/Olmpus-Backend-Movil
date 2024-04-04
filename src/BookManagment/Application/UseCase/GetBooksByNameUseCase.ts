import { IBook } from "../../Domain/Ports/IBook";

export class GetBooksByNameUseCase {
    constructor(readonly bookRepository:IBook) {}

    async run(name:string) {
        return await this.bookRepository.serchBook(name);
    }
}