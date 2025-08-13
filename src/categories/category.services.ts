import Category from "../models/category";
import { buildDbClient } from "../common/plugins/db-client";

const CategoryDB = buildDbClient(Category);

export const getCategoryById = async (id: string) => await CategoryDB.findById(id)