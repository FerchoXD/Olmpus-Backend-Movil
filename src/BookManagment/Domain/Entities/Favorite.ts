import { v4 as uuidv4 } from 'uuid';
import { Book } from './Book';

export class Favorite {
    public uuid:string;
    public bookUUID:string;
    public userUUID:string;
    public book:Book|null;

    constructor(url:string, bookUUID:string, userUUID:string){
        this.uuid = this.generateUuid();
        this.bookUUID = bookUUID;
        this.userUUID = userUUID;
        this.book = null;
    }

    private generateUuid():string {
        return uuidv4();
    }
}