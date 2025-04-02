import { Router } from "express";
import * as productControllers from "../controllers/product.controllers";
import { productToCreateMiddleware } from "../middlewares/products/productToCreate.middleware";

const router = Router();

router.route(`/`)
    .get(productControllers.getAll)
    .post(productToCreateMiddleware, productControllers.post)
    .put(productControllers.update)
    .delete(productControllers.remove);

router.route("/:id").get(productControllers.getById);

export default router;