import { v4 as uuidv4 } from 'uuid';
import { Book } from './Book';

export class History {
    public uuid:string;
    public userUUID:string;
    public bookUUID:string
    public readingDate:Date;
    public book:Book|null;

    constructor(userUUID:string, bookUUID:string, date:Date = new Date()){
        this.uuid = this.generateUuid();
        this.userUUID = userUUID;
        this.bookUUID = bookUUID;
        this.readingDate = date;
        this.book = null;
    }

    private generateUuid():string {
        return uuidv4();
    }
}