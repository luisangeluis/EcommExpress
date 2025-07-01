import User from '../models/user';
import * as authServices from '../services/auth.services';
import { Request, Response } from 'express';

export const login = async (req: Request, res: Response) => {
    const data = req.body;

    const user = await authServices.login(data.email, data.password);

    if (!user) {
        return res.status(401).json({ message: 'Invalid email or password' });
    }

    //TODO CREATE JWT TOKEN
    res.status(200).json({ message: `User with id: ${user.id} succesfullly`, token: "abc123" });
}