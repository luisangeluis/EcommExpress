import { generateToken } from "../common/utils/generateToken";
import { getUserByEmail } from "../users/user.services";

export const login = async (email: string, pass: string) => {
    const user = await validateLogin(email, pass);
    const token = await generateToken(user.id, user.email, user.roleId);

    return { user, token };
}

const validateLogin = async (email: string, pass: string) => {
    const user = await getUserByEmail(email);

    if (!user || user.password !== pass) {
        throw new Error(`Invalid credentials`);
    }

    return user;
}