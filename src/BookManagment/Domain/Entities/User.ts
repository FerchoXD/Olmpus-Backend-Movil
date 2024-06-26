import { v4 as uuidv4 } from 'uuid';

export class User {
    public uuid:string;
    public name?:string;
    public lastname?:string;
    public username?:string;
    public email:string;
    public password:string;
    public interests?:string;

    constructor(email:string, password:string, name?:string, lastname?:string, username?:string, interests?:string) {
        this.uuid = this.generateUuid();
        this.name = name;
        this.lastname = lastname;
        this.username = username;
        this.email = email;
        this.password = password;
        this.interests = interests;
    }

    private generateUuid():string {
        return uuidv4();
    }
}