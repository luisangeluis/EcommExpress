import User from "../models/user";
import { buildDbClient } from "../plugins/db-client"    

const userDB = buildDbClient(User);

export const login=async(email:string,pass:string)=>{
    const user = await userDB.findOne({ where: { email} });
    
    if (!user || user.password!==pass) {
        throw new Error(`Invalid email or password`);
    }
    const {password, ...userWithoutPassword} = user ;
    
    return userWithoutPassword;
}