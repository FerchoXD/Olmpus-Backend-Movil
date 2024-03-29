import { DataTypes, Model } from "sequelize";
import sequelize from "../../../../../Database/Config/MySQL/Database";
import { UUIDV4 } from "sequelize";

export class FavoriteModel extends Model {
    public uuid!:string;
    public userUUID!:string;
    public bookUUID!:string;
}

FavoriteModel.init({
    uuid: { type: DataTypes.UUID, defaultValue: DataTypes.UUIDV4, primaryKey: true, allowNull: false },
    userUUID: { type: DataTypes.UUID, defaultValue:UUIDV4, allowNull: false },
    bookUUID: { type: DataTypes.UUID, defaultValue: UUIDV4, allowNull: false },
}, { sequelize, modelName:'favorite' });