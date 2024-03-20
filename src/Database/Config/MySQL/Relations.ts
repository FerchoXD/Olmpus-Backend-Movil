import { BookModel } from "../../../BookManagment/Infraestructure/Database/Models/MySQL/BookModel";
import { CategoryModel } from "../../../BookManagment/Infraestructure/Database/Models/MySQL/CategoryModel";
import { HistoryModel } from "../../../BookManagment/Infraestructure/Database/Models/MySQL/HistoryModel";
import { RecommendedBookModel } from "../../../BookManagment/Infraestructure/Database/Models/MySQL/RecommendedBook";
import { UserModel } from "../../../BookManagment/Infraestructure/Database/Models/MySQL/UserModel";

// Relación uno a muchos: UserModel a BookModel
UserModel.hasMany(BookModel, { foreignKey: 'userUUID' });

// Relación muchos a uno: BookModel a UserModel
BookModel.belongsTo(UserModel, { foreignKey: 'userUUID' });

// Relación uno a muchos: CategoryModel a BookModel
CategoryModel.hasMany(BookModel, { foreignKey: 'categoryUUID' });

// Relación muchos a uno: BookModel a CategoryModel
BookModel.belongsTo(CategoryModel, { foreignKey: 'categoryUUID' });

// Relación uno a uno: HistoryModel a BookModel
HistoryModel.hasOne(BookModel, { foreignKey: 'historyUUID' });

// Relación uno a uno: RecommendedBookModel a BookModel
RecommendedBookModel.hasOne(BookModel, { foreignKey: 'recommendedBookId' });