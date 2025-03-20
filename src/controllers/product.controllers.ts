import { Request, Response } from "express";
import * as productServices from "../services/product.services";

export const getAll = async (req: Request, res: Response) => {
    try {
        const products = await productServices.getAllProducts();
        res.status(200).json(products);

    } catch (error: any) {
        res.status(400).json({ message: error.message });
    }

}

export const getById = async (req: Request, res: Response) => {
    const { id } = req.params;
    try {
        const product = await productServices.getProductById(id);

        if (!product) res.status(401).json({ message: `Product with id: ${id} not found.` })

        res.status(200).json(product);

    } catch (error: any) {
        res.status(400).json({ message: error.message });
    }

}

export const post = async (req: Request, res: Response)=>{
    const data =  req.body;

    try{
        const product = await productServices.createProduct(data);

         res.status(201).json(product);
    }catch(error:any){
        res.status(400).json({ message: error.message });

    }
     
}