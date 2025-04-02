import { Request, Response, NextFunction } from "express";
import { ProductCreationAttributes } from "../../models/product";

export const productToCreateMiddleware = (req: Request, res: Response, next: NextFunction) => {
    const { title, description, price, categoryId } = req.body as ProductCreationAttributes
    const errors = [];

    if (!title || typeof title != "string") {
        errors.push("field title is mandatory and must be a string")
    }

    if (!description || typeof description != "string") {
        errors.push("field description is mandatory and must be a string")
    }

    if (!price || typeof price != "number") {
        errors.push("field description is mandatory and must be a number")
    }

    if (!categoryId || typeof price != "string") {
        errors.push("field categoryId is mandatory and must be a string")
    }

    if (errors.length > 0) {
        res.status(400).json({ errors });
        return;
    }

    next();
}