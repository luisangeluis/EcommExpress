import { Router } from "express";
import * as productControllers from "../controllers/product.controllers";

const router = Router();

router.route(`/`)
    .get(productControllers.getAll)
    .post(productControllers.post);

router.route("/:id").get(productControllers.getById);

export default router;