import { DataTypes, Model } from "sequelize";
import sequelize from "../../../../../Database/Config/MySQL/Database";
import { UUIDV4 } from "sequelize";

export class UserModel extends Model{
    public uuid!: string;
    public name!: string;
    public lastname!:string;
    public username!:string;
    public email!:string;
    public password!:string;
    public interests!:string;
}

UserModel.init({
    uuid: { type:DataTypes.UUID, defaultValue: UUIDV4, primaryKey:true, allowNull:false },
    name: { type:DataTypes.STRING, allowNull:true },
    lastname: { type:DataTypes.STRING, allowNull:true },
    username: { type:DataTypes.STRING, allowNull:true, unique:true },
    email: { type:DataTypes.STRING, allowNull:false, unique:true },
    password: { type:DataTypes.STRING, allowNull:false },
    interests: { type:DataTypes.STRING, allowNull:true },
}, { sequelize, modelName:'user' });