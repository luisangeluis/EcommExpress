import { Router } from "express";
import * as productControllers from "../controllers/product.controllers";

const router = Router();

router.route(`/products`).get(productControllers.getAll);

export default router;