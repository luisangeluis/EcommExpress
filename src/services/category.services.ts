import Category from "../models/category";
import { buildDbClient } from "../plugins/db-client";

const CategoryDB = buildDbClient(Category);

export const getCategoryById = async (id: string) => await CategoryDB.findById(id)