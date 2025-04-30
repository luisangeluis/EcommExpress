import * as categoryServices from "../services/category.services";
import { Request, Response, NextFunction } from "express";

export const categoryExistsMiddleware = async (req: Request, res: Response, next: NextFunction) => {
    const categoryId = req.body.categoryId;

    if(categoryId){
        const category = await categoryServices.getCategoryById(categoryId);

        if(!category) {
            res.status(404).json({ message: `Category with id: ${categoryId} doesn't exist` });
            return;
        }
    }

    next();
}