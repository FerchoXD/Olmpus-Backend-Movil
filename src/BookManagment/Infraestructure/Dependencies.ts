import { DatabaseConfig } from "../../Database/Config/IDatabaseConfig";
import { MySQLConfig } from "../../Database/Config/MySQL/MySQLConfig";
import { DeleteUserByUUIDUseCase } from "../Application/UseCase/DeleteUserByUUIDUseCase";
import { GetBookPreviewUseCase } from "../Application/UseCase/GetBookPreviewUseCase";
import { GetBooksByNameUseCase } from "../Application/UseCase/GetBooksByNameUseCase";
import { GetBooksFavoriteUseCase } from "../Application/UseCase/GetBooksFavoritesUseCase";
import { GetBooksHistoryUseCase } from "../Application/UseCase/GetBooksHistoryUseCase";
import { GetBooksUseCase } from "../Application/UseCase/GetBooksUseCase";
import { GetUserUseCase } from "../Application/UseCase/GetUserUseCase";
import { LoginUseCase } from "../Application/UseCase/LoginUseCase";
import { ReadBookUseCase } from "../Application/UseCase/ReadBookUseCase";
import { RecommendBookUseCase } from "../Application/UseCase/RecommendBooksUseCase";
import { RegisterUserUseCase } from "../Application/UseCase/RegisterUserUseCase";
import { SaveBookInHistoryUseCase } from "../Application/UseCase/SaveBookInHistoryUseCase";
import { UpdateUserUseCase } from "../Application/UseCase/UpdateUserUseCase";
import { DeleteUserByUUIDController } from "./Controllers/DeleteUserByUUIDController";
import { GetBookPreviewController } from "./Controllers/GetBookPreviewController";
import { GetBooksByNameController } from "./Controllers/GetBooksByNameController";
import { GetBooksController } from "./Controllers/GetBooksController";
import { GetBooksFavoritesController } from "./Controllers/GetBooksFavoritesController";
import { GetBooksInHistoryController } from "./Controllers/GetBooksHistoryController";
import { GetUserController } from "./Controllers/GetUserController";
import { LoginController } from "./Controllers/LoginController";
import { ReadBookController } from "./Controllers/ReadBookController";
import { RecommendBookController } from "./Controllers/RecommendBookController";
import { RegisterUserController } from "./Controllers/RegisterUserController";
import { SaveBookInHistoryController } from "./Controllers/SaveBooksInHistoryController";
import { UpdateUserController } from "./Controllers/UpdateUserController";
import { BookMySQLRepository } from "./Repositories/MySQL/BookMySQLRepository";
import { FavoriteMySQLRepository } from "./Repositories/MySQL/FavoriteMySQLRepository";
import { HistoryMySQLRepository } from "./Repositories/MySQL/HistoryMySQLRepository";
import { UserMySQLRepository } from "./Repositories/MySQL/UserMySQLRepository";

type DatabaseType = 'MySQL' | 'MongoDB';
const dbType: DatabaseType = 'MySQL';

function getDatabaseConfig(): DatabaseConfig {
    if (dbType === 'MySQL') {
      return new MySQLConfig();
    } 
    throw new Error('Unsupported repository type');
}

const dbConfig = getDatabaseConfig();
dbConfig.initialize().then(() => {
  console.log('Database initialized.')
});

const bookRepository = new BookMySQLRepository();
const userRepository = new UserMySQLRepository();
const favoriteRepository = new FavoriteMySQLRepository();
const historyRepository = new HistoryMySQLRepository();

const recommendBookUseCase = new RecommendBookUseCase(bookRepository);
const getBookPreviewUseCase = new GetBookPreviewUseCase(bookRepository);
const getBooksByNameUseCase = new GetBooksByNameUseCase(bookRepository);
const getBooksUseCase = new GetBooksUseCase(bookRepository);
const readBookUseCase = new ReadBookUseCase(bookRepository);

const getBooksFavoriteUseCase = new GetBooksFavoriteUseCase(favoriteRepository);
const saveBookInHistoryUseCase = new SaveBookInHistoryUseCase(favoriteRepository);

const getBooksInHistoryUseCase = new GetBooksHistoryUseCase(historyRepository);

const loginUseCase = new LoginUseCase(userRepository);
const registerUserUseCase = new RegisterUserUseCase(userRepository);
const getUserUseCase = new GetUserUseCase(userRepository);
const updateUserUseCase = new UpdateUserUseCase(userRepository);
const deleteUserByUUIDUseCase = new DeleteUserByUUIDUseCase(userRepository);

export const getBookPreviewController = new GetBookPreviewController(getBookPreviewUseCase);
export const getBooksByNameController = new GetBooksByNameController(getBooksByNameUseCase);
export const getBooksController = new GetBooksController(getBooksUseCase);
export const recommendBookController = new RecommendBookController(recommendBookUseCase);
export const readBookController = new ReadBookController(readBookUseCase);

export const getBooksFavoritesController = new GetBooksFavoritesController(getBooksFavoriteUseCase);
export const saveBookInHistoryController = new SaveBookInHistoryController(saveBookInHistoryUseCase);

export const getBooksInHistoryController = new GetBooksInHistoryController(getBooksInHistoryUseCase);

export const loginController = new LoginController(loginUseCase);
export const registerUserController = new RegisterUserController(registerUserUseCase);
export const getUserController = new GetUserController(getUserUseCase);
export const updateUserController = new UpdateUserController(updateUserUseCase);
export const deleteUserByUUIDController = new DeleteUserByUUIDController(deleteUserByUUIDUseCase);
