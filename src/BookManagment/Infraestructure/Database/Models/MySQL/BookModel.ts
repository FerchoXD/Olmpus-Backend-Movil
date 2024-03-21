import { DataTypes, Model } from "sequelize";
import sequelize from "../../../../../Database/Config/MySQL/Database";

export class BookModel extends Model {
    public uuid!:string;
    public title!:string;
    public name!:string;
    public author!:string;
    public edithorial!:string;
    public language!:string;
    public synopsis!:string;    
    public userUUID!:string;
    public categoryUUID!:string;
    public historyUUID!:string;
}

BookModel.init({
    uuid: { type: DataTypes.UUID, defaultValue: DataTypes.UUIDV4, primaryKey: true, allowNull: false },
    title: { type: DataTypes.STRING, allowNull: false },
    name: { type: DataTypes.STRING, allowNull: false },
    author: { type: DataTypes.STRING, allowNull: false },
    editorial: { type: DataTypes.STRING, allowNull: false },
    language: { type: DataTypes.STRING, allowNull: false },
    synopsis: { type: DataTypes.TEXT, allowNull: false },
    userUUID: { type: DataTypes.UUID, allowNull: false },
    categoryUUID: { type: DataTypes.UUID, allowNull: false },
    historyUUID: { type: DataTypes.UUID, allowNull: true }
},{ sequelize, modelName:'book' });