import { IBook } from "../../Domain/Ports/IBook";

export class ReadBookUseCase {
    constructor(readonly bookRepository:IBook){}

    async run(uuid:string, userUUID:string) {
        return await this.bookRepository.readBook(uuid, userUUID);
    }
}