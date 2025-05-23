import Product, { ProductCreationAttributes } from "../models/product"
import { buildDbClient } from "../plugins/db-client";
import { getUUID } from "../plugins/uuid";

const ProductDB = buildDbClient(Product);

export const getAllProducts = async () => await ProductDB.findAll();

export const getProductById = async (id: string) => await ProductDB.findById(id);

export const createProduct = async (product: ProductCreationAttributes) => await ProductDB.create({ ...product, id: getUUID() });

export const updateProduct = async (id: string, product: Partial<ProductCreationAttributes>) => await ProductDB.update(id, product);

export const deleteProduct = async (id: string) => await ProductDB.delete(id);
