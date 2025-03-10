import Product from "../models/product"
import { buildDbClient } from "../plugins/db-client";

const ProductDB = buildDbClient(Product);

export const getAllProducts = async () => {
    const options = {
        where:{
            title:""
        }
    }
    const products = await ProductDB.findAll();
    return products;
}