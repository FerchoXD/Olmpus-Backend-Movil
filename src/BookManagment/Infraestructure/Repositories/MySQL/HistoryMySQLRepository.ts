import { Book } from "../../../Domain/Entities/Book";
import { IHistory } from "../../../Domain/Ports/IHistory";

export class HistoryMySQLRepository implements IHistory {
    async getBooksRead(userUUID: string): Promise<Book[]|any> {
        throw new Error("Method not implemented.");
    }
}