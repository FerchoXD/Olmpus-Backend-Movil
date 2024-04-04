import { IHistory } from "../../Domain/Ports/IHistory";

export class GetBooksHistoryUseCase {
    constructor(readonly historyRepository:IHistory){}

    async run(userUUID:string) {
        return await this.historyRepository.getBooksRead(userUUID);
    }
}