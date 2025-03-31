import { Request, Response } from "express";
import * as productServices from "../services/product.services";
import { stringToBytes } from "uuid/dist/cjs/v35";
import { ProductCreationAttributes } from "../models/product";
import { Optional } from "sequelize";
import Category from "../models/category";
import { getCategoryById } from "../services/category.services";

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

export const post = async (req: Request, res: Response) => {
    const { title, description, price, categoryId } = req.body;
    //
    if (!title || !description || !price || !categoryId) {
        res.status(400).json({
            message: "missing data", fields: {
                title: "string",
                description: "string",
                price: "number",
                categoryId: "string"
            }
        });
        return;
    }

    if (isNaN(Number(price))) {
        res.status(400).json({ message: "price must be a number" })
        return;
    }

    const productToCreate = { title, description, price, categoryId }

    try {
        const product = await productServices.createProduct(productToCreate);

        res.status(201).json(product);
        // res.status(201).json({ message: "created" });
    } catch (error: any) {
        res.status(400).json({ message: error.message });

    }

}

const update = async (req: Request, res: Response) => {
    const { title, description, price, categoryId } = req.body;
    const productToUpdate: Partial<ProductCreationAttributes> = {}

    if (title) {
        productToUpdate.title = title
    }

    if (description) {
        productToUpdate.description = description
    }

    if (price) {
        productToUpdate.price = price
    }

    if (categoryId) {
        const category = await getCategoryById(categoryId);

        if (category?.id)
            productToUpdate.categoryId = categoryId
    }

    
}