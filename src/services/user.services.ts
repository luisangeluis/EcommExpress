import exp from "constants";
import User, { UserCreationAttributes } from "../models/user";
import { buildDbClient } from "../plugins/db-client"

const userDB = buildDbClient(User);

export const getAllUsers = async () => await userDB.findAll();

export const getUserById = async (id: string) => {
    const user = await userDB.findById(id);

    if (!user) {
        throw new Error(`User with id ${id} not found`);
    }

    return user;
}

export const createUser = async (user: UserCreationAttributes) => await userDB.create(user);

export const updateUser = async (id: string, user: Partial<UserCreationAttributes>) => {
    const userExists = await getUserById(id);

    if (!userExists) {
        throw new Error(`User with id ${id} not found`);
    }

    return await userDB.update(id, user);
}

export const deleteUser = async (id: string) => {
    const userExists = await getUserById(id);

    if (!userExists) {
        throw new Error(`User with id ${id} not found`);
    }
    
    return await userDB.delete(id);
}
