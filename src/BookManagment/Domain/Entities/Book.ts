import { v4 as uuidv4 } from 'uuid';

export class Book {
    public uuid:string;
    public title:string;
    public description:string;
    public author:string;
    public image:string;
    public content:string
    public gender:string;

    constructor(title:string, description:string, author:string, image:string, content:string, gender:string){
        this.uuid = this.generateUuid();
        this.title = title;
        this.description = description;
        this.author = author;
        this.image = image;
        this.content = content;
        this.gender = gender;
    }

    private generateUuid():string {
        return uuidv4();
    }
}