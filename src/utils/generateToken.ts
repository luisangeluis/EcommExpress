import { jwtKey } from "../config";
import jwt from "jsonwebtoken";

export const generateToken = async(userId: string, email: string, roleId: string) => {
    const token = await jwt.sign({id:userId,email,roleId},jwtKey);
}