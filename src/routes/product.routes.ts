import { Router } from "express";
import * as productControllers from "../controllers/product.controllers";
import { validateDTO } from "../middlewares/validateDTO";
import { CreateProductDTO } from "../DTOs/product/createProductDTO";

const router = Router();

router.route("/")
    .get(productControllers.getAll)
    .post(validateDTO(CreateProductDTO), productControllers.post)
    .put(productControllers.update)
    .delete(productControllers.remove);

router.route("/:id").get(productControllers.getById);

export default router;