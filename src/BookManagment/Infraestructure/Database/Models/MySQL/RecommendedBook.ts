import { DataTypes, Model } from "sequelize";
import sequelize from "../../../../../Database/Config/MySQL/Database";

export class RecommendedBookModel extends Model {
    public uuid!:string;
    public url!:string;
    public name!:string;
    public email!:string;
    public bookUUID!:string;
}

RecommendedBookModel.init({
    uuid: { type: DataTypes.UUID, defaultValue: DataTypes.UUIDV4, primaryKey: true, allowNull: false },
    url: { type: DataTypes.STRING, allowNull: false },
    name: { type: DataTypes.STRING, allowNull: false },
    email: { type: DataTypes.STRING, allowNull: false },
    bookUUID: { type: DataTypes.STRING, allowNull: false },
}, { sequelize, modelName:'recommended_book' });