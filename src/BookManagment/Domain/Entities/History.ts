import { v4 as uuidv4 } from 'uuid';

export class History {
    public uuid:string;
    public hour:number;
    public evenType:string;
    public date:Date;

    constructor(hour:number, evenType:string, date:Date = new Date()){
        this.uuid = this.generateUuid();
        this.hour = hour;
        this.evenType = evenType;
        this.date = date;
    }

    private generateUuid():string {
        return uuidv4();
    }
}