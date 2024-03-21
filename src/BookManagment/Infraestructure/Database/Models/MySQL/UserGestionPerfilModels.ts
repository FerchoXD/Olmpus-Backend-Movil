import { DataTypes, Model } from "sequelize";
import sequelize from "../../../../../Database/Config/MySQL/Database";

export class UserGestionPerfilModel extends Model{
    public uuid!: string;
    public name!: string;
    public email!: string;
}

UserGestionPerfilModel.init({
    uuid: { type:DataTypes.UUID, defaultValue: DataTypes.UUIDV4, primaryKey:true, allowNull:false },
    name: { type:DataTypes.STRING, allowNull:false },
    email: { type:DataTypes.STRING, allowNull:false } 
}, { sequelize, modelName:'gestion_user' });