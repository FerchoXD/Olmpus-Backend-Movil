import { DatabaseConfig } from "../../Database/Config/IDatabaseConfig";
import { MySQLConfig } from "../../Database/Config/MySQL/MySQLConfig";
import { GestionPerfilUseCase } from "../Application/UseCase/GestionPerfilUserCase";
import { RecommendBookUseCase } from "../Application/UseCase/RecommendBooksUseCase";
import { GestionPerfilController } from "./Controllers/GestionPerfilController";
import { RecommendBookController } from "./Controllers/RecommendBookController";
import { BookMySQLRepository } from "./Repositories/MySQL/BookMySQLRepository";
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

const recommendBookUseCase = new RecommendBookUseCase(bookRepository);

const userRepository = new UserMySQLRepository();

const gestionPerfilUseCase = new GestionPerfilUseCase(userRepository);

export const recommendBookController = new RecommendBookController(recommendBookUseCase);
export const gestionPerfilController = new GestionPerfilController(gestionPerfilUseCase);