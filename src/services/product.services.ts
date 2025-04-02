import Product, { ProductCreationAttributes } from "../models/product"
import { buildDbClient } from "../plugins/db-client";
import { getUUID } from "../plugins/uuid";

const ProductDB = buildDbClient(Product);

export const getAllProducts = async () => {
    const products = await ProductDB.findAll();
    return products;
}

export const getProductById = async (id: string) => {
    return await ProductDB.findById(id);
}

export const createProduct = async (product: ProductCreationAttributes) => {
    return await ProductDB.create({ ...product, id: getUUID() });
}

export const updateProduct = async (id: string, product: Partial<ProductCreationAttributes>) => {
    return await ProductDB.update(id, product);
}

export const deleteProduct =async(id:string)=>{
    return await ProductDB.delete(id);
}