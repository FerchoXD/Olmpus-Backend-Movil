import { IBook } from "../../Domain/Ports/IBook";

export class GetBookPreviewUseCase {
    constructor(readonly bookRepository:IBook){}

    async run(bookUUID:string) {
        return await this.bookRepository.getPreviewBook(bookUUID);
    }
}