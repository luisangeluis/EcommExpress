import * as productServices from "../product.services";
import {Request,Response, NextFunction} from "express";    

export const productExistsMiddleware = async (req:Request, res:Response, next:NextFunction) => {
    const { id } = req.params;
    const product = await productServices.getProductById(id);

    if (!product) {
        res.status(404).json({ message: `product with id: ${id} doesn't exist` })
        return;
    }

    next();
}