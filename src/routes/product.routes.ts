import { Router } from "express";
import * as productControllers from "../controllers/product.controllers";



const router = Router();
const prefProducts = "/products"

router.route(`${prefProducts}`).get(productControllers.getAll);

export default router;