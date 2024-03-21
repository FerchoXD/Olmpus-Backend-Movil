import sequelize from "../../../../Database/Config/MySQL/Database"; // Importa la instancia de Sequelize
import { QueryTypes } from 'sequelize';
import { IUser } from "../../../Domain/Ports/IUser";
import { User } from "../../../Domain/Entities/User";
import { UserModel } from "../../Database/Models/MySQL/UserModel";
import { UserGestionPerfilModel } from "../../Database/Models/MySQL/UserGestionPerfilModels";

export class UserMySQLRepository implements IUser {
    async gestionPerfil(userUUID: string): Promise<any> {
        try {
            // Busca usuarios basados en el uuid proporcionado
            const users = await UserModel.findAll({ 
                where: { uuid: userUUID },
                order: [['createdAt', 'DESC']]
            });
    
            // Si no se encontraron usuarios, devuelve un mensaje de error
            if (users.length === 0) {
                return { status: 404, message: 'Usuario no encontrado' };
            }
    
            // Devuelve los usuarios encontrados
            return { status: 200, users };
        } catch (error) {
            console.error(error);
            return {
                message: 'Hubo algún error al obtener la información',
                status: 500,
                error: error
            };
        }
    }    

}