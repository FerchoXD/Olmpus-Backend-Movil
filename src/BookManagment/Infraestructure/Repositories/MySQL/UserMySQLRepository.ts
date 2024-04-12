import { User } from "../../../Domain/Entities/User";
import { IUser } from "../../../Domain/Ports/IUser";
import { UserModel } from "../../Database/Models/MySQL/UserModel";
import bcrypt from "bcrypt";
import { JWTService } from "../../../Application/JWT/JWTService";

export class UserMySQLRepository implements IUser {
    
    async login(email: string, password: string): Promise<User|any> {
        try {

            let user = await UserModel.findOne({ where: { email: email } });
    
            if (!user) {
                return {
                    status: 404,
                    message: 'Usuario no encontrado.'
                };
            }

            const passwordIsValid = bcrypt.compareSync(password, user.password);

            if (!passwordIsValid) {
                return {
                    status: 401,
                    message: 'Contraseña incorrecta.'
                };
            }

            const token = JWTService.generateToken(user.uuid, user.email);

            return {
                status: 200,
                message: 'Inicio de sesión exitoso.',
                token: token
            };

        } catch (error) {
            console.error("Error al iniciar sesión:", error);
            return {
                status: 500,
                message: "Error al iniciar sesión",
                error: error
            };
        }
    }

    async register(email: string, password: string): Promise<User | any> {
        try {
            const user = new User (email, password)

            user.password= await bcrypt.hash(password,10)

            const userResponse = await UserModel.create({ 
                uuid: user.uuid,
                email: user.email,
                password: user.password
            })

            return {
                "status": 201,
                "uuid": userResponse.dataValues.uuid,
                "type": "users",
                "attributes": {
                    "email": userResponse.dataValues.email,
                    "password": userResponse.dataValues.password
                }
            }

            
        } catch (error) {
            console.error("Error al registrar usuario:", error);
            return {
                status: 500,
                message: "Error al registrar usuario",
                error: error
            };
        }
    }


    async getUser(uuid: string): Promise<User | any> {
        try {
            
            const user = await UserModel.findByPk(uuid)

            if (!user) {
                return {
                    status: 404,
                    message: 'Usuario no encontrado.'
                };
            }

            return {
                "status": 201,
                "uuid": user.dataValues.uuid,
                "type": "users",
                "attributes": {
                    "name": user.dataValues.name,
                    "lastname": user.dataValues.lastname,
                    "username": user.dataValues.username,
                    "email": user.dataValues.email,
                    "interests": user.dataValues.interests
                }
            }

        } catch (error) {
            console.error("Error el usuario no existe:", error);
            return {
                status: 500,
                message: "Error el usuario no existe",
                error: error
            }; 
        }
    }
    
    async updateUser(uuid: string, name: string | null, lastname: string | null, username: string | null, interests: string | null): Promise<User | any> {
        try {
        
            const existingUser = await UserModel.findByPk(uuid);
            
            if (!existingUser) {
                return {
                    status: 404,
                    message: 'Usuario no encontrado.'
                };
            }
    
            const updatedFields: any = {};
            if (name !== null) updatedFields.name = name;
            if (lastname !== null) updatedFields.lastname = lastname;
            if (username !== null) updatedFields.username = username;
            if (interests !== null) updatedFields.interests = interests;
    
            await existingUser.update(updatedFields);
    
            return {
                status: 200,
                message: 'Usuario actualizado exitosamente.'
            };
        } catch (error) {
            console.error("Error al actualizar usuario:", error);
            return {
                status: 500,
                message: "Error al actualizar usuario",
                error: error
            };
        }
    }

    async deleteUserByUUID(uuid: string): Promise<any> {
        try {
            const user = await UserModel.destroy({ where: { uuid:uuid } });

            if(user == 0) return { status: 404, message: 'Usuario No Encontrado.' }

            return {
                status: 200,
                message: 'Usuario Eliminado Correctamente.'
            }
        } catch (error) {
            return {
                status: 500,
                message: "Error al eliminar usuario",
                error: error
            };
        }
    }

}
