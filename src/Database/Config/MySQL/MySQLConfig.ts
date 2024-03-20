import sequelize from './Database';
import { DatabaseConfig } from '../IDatabaseConfig';
import "./Relations";

export class MySQLConfig implements DatabaseConfig {
  async initialize(): Promise<void> {
    await sequelize.sync({ force: false });
    console.log('MySQL database synchronized.');
  }
}