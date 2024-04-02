import { v4 as uuidv4 } from "uuid";

export class User {
    public uuid:string;
    public name:string;
    public password:string;

    constructor(name:string, password:string){
        this.uuid = this.generateUuid();
        this.name = name;
        this.password = password;
    }

    setUuid(uuid:string):void{
        this.uuid = uuid;
    }

    generateUuid():string {
        return uuidv4();
    }
}