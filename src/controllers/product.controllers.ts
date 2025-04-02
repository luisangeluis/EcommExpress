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
        return;

    } catch (error: any) {
        res.status(400).json({ message: error.message });
        return;
    }

}

export const getById = async (req: Request, res: Response) => {
    const { id } = req.params;
    try {
        const product = await productServices.getProductById(id);

        if (!product) {
            res.status(401).json({ message: `Product with id: ${id} not found.` })
            return;
        }


        res.status(200).json(product);
        return;
    } catch (error: any) {
        res.status(400).json({ message: error.message });
        return;
    }

}

export const post = async (req: Request, res: Response) => {
    const { title, description, price, categoryId } = req.body;
    const productToCreate = { title, description, price, categoryId }

    try {
        const product = await productServices.createProduct(productToCreate);

        res.status(201).json(product);
    } catch (error: any) {
        res.status(400).json({ message: error.message });
    }
}

export const update = async (req: Request, res: Response) => {
    const { id } = req.params;
    const { title, description, price, categoryId } = req.body;

    const product = await productServices.getProductById(id);

    if (!product) {
        res.status(401).json({ message: `product with id: ${id} doesn't exist` })
        return;
    }

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


    await productServices.updateProduct(id, productToUpdate);

    res.status(201).json({ message: `Product with id ${id} updated` });
    return
}

export const remove = async (req: Request, res: Response) => {
    const { id } = req.params;

    const erased = await productServices.deleteProduct(id);

    if (!erased) {
        res.status(404).json({ message: `Product with id ${id}, doesn't exist` })
        return
    }
    res.status(200).json({ message: `Product with id ${id} deleted` });
    return
}