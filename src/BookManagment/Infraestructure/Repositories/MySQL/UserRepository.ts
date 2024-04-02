import { User } from "../../../Domain/Entities/User";
import { IUser } from "../../../Domain/Ports/IUser";
import { UserModel } from "../../Database/Models/MySQL/UserModel";

export class UserRespository implements IUser{
    async register(user: User): Promise<User|any> {
        try {
            const userResponse = await UserModel.create({
                uuid: user.uuid,
                name: user.name,
                password: user.password
            });
            return {
                status: 201,
                message: 'user registered successfully',
                data: userResponse
            }
        } catch (error) {
            return {
                status: 500,
                message: "Error registering user",
                error: error
            }
        }
    }

    async getAll(): Promise<User[]|any> {
        try {
            const usersEntity:User[] = [];
            const users = await UserModel.findAll();
            users.map((user) => {
                const name = user.dataValues.name;
                const password = user.dataValues.password;
                const userEntity = new User(name, password);
                userEntity.setUuid(user.dataValues.uuid);
                usersEntity.push(userEntity);
            })
            return usersEntity;
        } catch (error) {
            return {
                status: false,
                message: "Error getting users",
                error: error
            }
        }
    }
    
}