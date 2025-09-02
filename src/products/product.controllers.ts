import { Request, RequestHandler, Response } from "express";
import * as productServices from "./product.services";
import { asyncHandler } from "../common/utils/asyncHandler";
import { AppError } from "../common/utils/appError";

export const getAll = async (req: Request, res: Response): Promise<Response> => {
    const products = await productServices.getAllProducts();
    return res.status(200).json(products);
}

export const getById = async (req: Request, res: Response) => {
    const { id } = req.params;

    const product = await productServices.getProductById(id);
    // console.log(product);
    
    if (!product) {
        console.log("no product")
        throw new AppError(`Product with id ${id} not found`,404);
    }

    return res.status(200).json(product);
}

export const post = async (req: Request, res: Response) => {
    const data = req.body;

    // try {
    const product = await productServices.createProduct(data);
    res.status(201).json(product);
    // } catch (error: any) {
    //     console.log(error.message);
    //     res.status(500).json({ message: "Internal server error" });
    // }
}

export const update = async (req: Request, res: Response) => {
    const { id } = req.params;

    try {
        await productServices.updateProduct(id, req.body);
        res.status(200).json({ message: `Product with id ${id} updated` });
    } catch (error: any) {
        console.log(error.message);
        res.status(500).json({ message: "Internal server error" });
    }
}

export const remove = async (req: Request, res: Response) => {
    const { id } = req.params;

    try {
        await productServices.deleteProduct(id);
        res.status(200).json({ message: `Product with id ${id} deleted` });
    } catch (error: any) {
        console.log(error.message);
        res.status(500).json({ message: "Internal server error" });
    }
}