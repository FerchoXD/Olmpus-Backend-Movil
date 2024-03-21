import { v4 as uuidv4 } from 'uuid';

export class RecommendBook {
    public uuid:string;
    public url:string;
    public name:string;
    public email:string;
    public bookUUID:string|null;

    constructor(url:string, name:string, email:string){
        this.uuid = this.generateUuid();
        this.url = url;
        this.name = name;
        this.email = email;
        this.bookUUID = null;
    }

    private generateUuid():string {
        return uuidv4();
    }
}