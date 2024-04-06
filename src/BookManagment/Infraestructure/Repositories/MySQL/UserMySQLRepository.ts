import { User } from "../../../Domain/Entities/User";
import { IUser } from "../../../Domain/Ports/IUser";

export class UserMySQLRepository implements IUser {
    async login(email: string, password: string): Promise<User|any> {
        throw new Error("Method not implemented.");
    }

    async register(email: string, password: string): Promise<User | any> {
        try {
            // Insertar el nuevo usuario en la base de datos
            const query = 'INSERT INTO users (uuid, email, password) VALUES (?, ?, ?)';
            await this.query(query, [ email, password]);

            // Devolver el usuario registrado
            return new User(email, password);
        } catch (error) {
            console.error("Error al registrar usuario:", error);
            return {
                success: false,
                message: "Error al registrar usuario",
                error: error
            };
        }
    }


    async getUser(uuid: string): Promise<User | any> {
        try {
            // Consultar el usuario en la base de datos por su UUID
            const query = 'SELECT * FROM users WHERE uuid = ?';
            const [rows] = await this.query(query, [uuid]);

            // Verificar si se encontró un usuario
            if (rows.length === 0) {
                return {
                    success: false,
                    message: "Usuario no encontrado"
                };
            }

            // Obtener los datos del usuario de la fila de resultados y devolverlo
            const userData = rows[0];
            const user = new User(userData.email, userData.password);
            return user;
        } catch (error) {
            console.error("Error al obtener usuario:", error);
            return {
                success: false,
                message: "Error al obtener usuario",
                error: error
            };
        }
    }
    query(query: string, arg1: string[]): [any] | PromiseLike<[any]> {
        throw new Error("Method not implemented.");
    }

    async updateUser(uuid: string, name: string | null, lastname: string | null, username: string | null, interests: string | null): Promise<User | any> {
        try {
            // Construir la consulta SQL para actualizar los datos del usuario
            let query = 'UPDATE users SET ';
            const values = [];

            // Verificar y agregar cada campo que se va a actualizar
            if (name !== null) {
                query += 'name = ?, ';
                values.push(name);
            }
            if (lastname !== null) {
                query += 'lastname = ?, ';
                values.push(lastname);
            }
            if (username !== null) {
                query += 'username = ?, ';
                values.push(username);
            }
            if (interests !== null) {
                query += 'interests = ?, ';
                values.push(interests);
            }

            //conexion para el query
            await this.query(query, values);
            // Eliminar la última coma y espacio en la consulta
            query = query.slice(0, -2);

            // Agregar la condición WHERE para actualizar el usuario específico
            query += ' WHERE uuid = ?';
            values.push(uuid);

            // Devolver un mensaje de éxito
            return {
                success: true,
                message: "Usuario actualizado correctamente"
            };
        } catch (error) {
            console.error("Error al actualizar usuario:", error);
            return {
                success: false,
                message: "Error al actualizar usuario",
                error: error
            };
        }
    }

}