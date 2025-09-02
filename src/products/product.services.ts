import Product, { ProductCreationAttributes } from "../models/product"
import { buildDbClient } from "../common/plugins/db-client";
import { getUUID } from "../common/plugins/uuid";

const ProductDB = buildDbClient(Product);

export const getAllProducts = async () => await ProductDB.findAll();

export const getProductById = async (id: string) => await ProductDB.findById(id);

export const createProduct = async (product: ProductCreationAttributes) => await ProductDB.create({ ...product, id: getUUID() });

export const updateProduct = async (id: string, product: Partial<ProductCreationAttributes>) => {
    const productExists = await getProductById(id);

    if (!productExists) {
        throw new Error(`Product with id ${id} not found`);
    }

    return await ProductDB.update(id, product);
}

export const deleteProduct = async (id: string) => {
    const productExists = await getProductById(id);
    
    if (!productExists) {
        throw new Error(`Product with id ${id} not found`);
    }

    return await ProductDB.delete(id);
}
