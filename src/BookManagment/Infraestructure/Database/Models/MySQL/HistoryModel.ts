import { DataTypes, Model } from "sequelize";
import sequelize from "../../../../../Database/Config/MySQL/Database";
import { UUIDV4 } from "sequelize";

export class HistoryModel extends Model {
    public uuid!:string;
    public hour!:number;
    public evenType!:string;
    public date!: Date;
}

HistoryModel.init({
    uuid: { type: DataTypes.UUID, defaultValue:UUIDV4,  primaryKey: true, allowNull: false },
    hour: { type: DataTypes.INTEGER, allowNull: false },
    eventType: { type: DataTypes.STRING, allowNull: false },
    date: { type: DataTypes.DATE, allowNull: false }
}, { sequelize, modelName: 'history' });