import { BookModel } from "../../../BookManagment/Infraestructure/Database/Models/MySQL/BookModel";
import { HistoryModel } from "../../../BookManagment/Infraestructure/Database/Models/MySQL/HistoryModel";
import { FavoriteModel } from "../../../BookManagment/Infraestructure/Database/Models/MySQL/FavoriteModel";
import { UserModel } from "../../../BookManagment/Infraestructure/Database/Models/MySQL/UserModel";

// Relación uno a muchos: UserModel a HistoryModel
UserModel.hasMany(HistoryModel, { foreignKey: 'userUUID' });

// Relación uno a muchos: UserModel a FavoriteModel
UserModel.hasMany(FavoriteModel, { foreignKey: 'userUUID' });

// Relación uno a muchos: BookModel a HistoryModel
BookModel.hasMany(HistoryModel, { foreignKey: 'bookUUID' });

// Relación uno a muchos: BookModel a FavoriteModel
BookModel.hasMany(FavoriteModel, { foreignKey: 'bookUUID' });

// Relación muchos a uno: HistoryModel a UserModel
HistoryModel.belongsTo(UserModel, { foreignKey: 'userUUID' });

// Relación muchos a uno: HistoryModel a BookModel
HistoryModel.belongsTo(BookModel, { foreignKey: 'bookUUID' });

// Relación muchos a uno: FavoriteModel a UserModel
FavoriteModel.belongsTo(UserModel, { foreignKey: 'userUUID' });

// Relación muchos a uno: FavoriteModel a BookModel
FavoriteModel.belongsTo(BookModel, { foreignKey: 'bookUUID' });
