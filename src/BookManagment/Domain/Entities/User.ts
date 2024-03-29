import { v4 as uuidv4 } from 'uuid';

export class User {
    public uuid:string;
    public name:string;
    public email:string;

    constructor(name:string, email:string) {
        this.uuid = this.generateUuid();
        this.name = name;
        this.email = email;
    }

    private generateUuid():string {
        return uuidv4();
    }
}