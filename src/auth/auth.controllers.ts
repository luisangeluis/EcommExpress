import * as authServices from './auth.services';
import { Request, Response } from 'express';

export const login = async (req: Request, res: Response) => {
    const { email, password } = req.body;

    const { user, token } = await authServices.login(email, password);

    res.status(200).json({ message: `User with id: ${user.id} succesfullly logged`, token });
}