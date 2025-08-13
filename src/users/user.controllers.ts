import { Request, Response } from "express";
import * as userServices from "./user.services";

export const getAll = async (req: Request, res: Response) => {
    const users = await userServices.getAllUsers();

    res.status(200).json(users)
}

export const getById = async (req: Request, res: Response) => {
    const { id } = req.params;
    const user = await userServices.getUserById(id);

    res.status(200).json(user);
}

export const post = async (req: Request, res: Response) => {
    const data = req.body;
    const user = await userServices.createUser(data);

    res.status(201).json(user);
}

export const update = async (req: Request, res: Response) => {
    const { id } = req.params;
    const data = req.body;

    await userServices.updateUser(id, data);

    res.status(201).json({ message: `User with id ${id} updated` });
}

export const remove = async (req: Request, res: Response) => {
    const { id } = req.params;

    await userServices.deleteUser(id);

    res.status(200).json({ message: `User with id ${id} deleted` });
}

