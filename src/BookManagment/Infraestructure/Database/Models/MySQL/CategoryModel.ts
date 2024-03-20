import { DataTypes, Model, UUIDV4 } from "sequelize";
import sequelize from "../../../../../Database/Config/MySQL/Database";

export class CategoryModel extends Model {
    public uuid!:string;
    public name!:string;
}

CategoryModel.init({
    uuid: { type:DataTypes.UUID, defaultValue: UUIDV4, primaryKey:true, allowNull:false },
    name: { type:DataTypes.STRING, allowNull:false },
}, { sequelize, modelName:'category' });