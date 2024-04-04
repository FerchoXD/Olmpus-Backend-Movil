import { DataTypes, Model } from "sequelize";
import sequelize from "../../../../../Database/Config/MySQL/Database";
import { UUIDV4 } from "sequelize";

export class HistoryModel extends Model {
    public uuid!: string;
    public bookUUID!: string;
    public readingDate!: string;
    public userUUID!: string;
}

HistoryModel.init({
    uuid: { type: DataTypes.UUID, defaultValue: UUIDV4, primaryKey: true, allowNull: false },
    readingDate: { type: DataTypes.STRING, allowNull: false },
    bookUUID: { type: DataTypes.UUID, defaultValue: UUIDV4, allowNull: false },
    userUUID: { type: DataTypes.UUID,defaultValue: UUIDV4, allowNull: false }
}, { sequelize, modelName: 'history' });
