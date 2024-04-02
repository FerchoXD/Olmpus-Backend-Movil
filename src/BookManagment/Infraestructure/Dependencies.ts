import { DatabaseConfig } from "../../Database/Config/IDatabaseConfig";
import { MySQLConfig } from "../../Database/Config/MySQL/MySQLConfig";
import { RegisterUserUseCase } from "../Application/UseCase/RegisterUserUseCase";
import { RegisterUserController } from "./Controllers/RegisterUserController";
import { UserRespository } from "../Infraestructure/Repositories/MySQL/UserRepository"


type DatabaseType = 'MySQL' | 'MongoDB';
const dbType: DatabaseType = 'MySQL';

const userRepository = new UserRespository();

function getDatabaseConfig(): DatabaseConfig {
    if (dbType === 'MySQL') {
      return new MySQLConfig();
    } 
    throw new Error('Unsupported repository type');
}

const registerUserUseCase = new RegisterUserUseCase(userRepository);
const registerUserController = new RegisterUserController(registerUserUseCase);

const dbConfig = getDatabaseConfig();
dbConfig.initialize().then(() => {
  console.log('Database initialized.')
});

export {
  registerUserController
}
