import { DataTypes, Model } from "sequelize";
import sequelize from "../../../../../Database/Config/MySQL/Database";
import { UUIDV4 } from "sequelize";

export class UserModel extends Model{
    public uuid!: string;
    public name!: string;
    public password!: string;
}

UserModel.init({
    uuid: { type:DataTypes.UUID, defaultValue: UUIDV4, primaryKey:true, allowNull:false },
    name: { type:DataTypes.STRING, allowNull:false },
    password: { type:DataTypes.STRING, allowNull:false } 
}, { sequelize, modelName:'user' });