import { Request, Response } from "express";
import * as productServices from "../services/product.services";

export const getAll = async (req: Request, res: Response) => {
    try{
        const products = await productServices.getAllProducts();
        res.status(200).json({ products });

    }catch(error:any){
        res.status(400).json({message:error.message}); 
    }

}