import { v4 as uuidv4 } from 'uuid';

export class Book {
    public uuid:string;
    public title:string;
    public name:string;
    public author:string;
    public edithorial:string;
    public language:string;
    public synopsis:string;    
    public userID:string|null;
    public categoryID:string|null;
    public historyID:string|null;

    constructor(title:string, name:string, author:string, edithorial:string, language:string, synopsis:string){
        this.uuid = this.generateUuid();
        this.title = title;
        this.name = name;
        this.author = author;
        this.edithorial = edithorial;
        this.language = language;
        this.synopsis = synopsis;
        this.userID = null;
        this.categoryID = null;
        this.historyID = null;
    }

    private generateUuid():string {
        return uuidv4();
    }
}