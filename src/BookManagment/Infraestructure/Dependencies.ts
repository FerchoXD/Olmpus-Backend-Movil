import { DatabaseConfig } from "../../Database/Config/IDatabaseConfig";
import { MySQLConfig } from "../../Database/Config/MySQL/MySQLConfig";
import { RecommendBookUseCase } from "../Application/UseCase/RecommendBooksUseCase";
import { RecommendBookController } from "./Controllers/RecommendBookController";
import { BookMySQLRepository } from "./Repositories/MySQL/BookMySQLRepository";

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

export const recommendBookController = new RecommendBookController(recommendBookUseCase);