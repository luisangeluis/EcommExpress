import { Router } from "express";
import * as productControllers from "../controllers/product.controllers";
import { CreateProductDTO } from "../DTOs/product/createProductDTO";
import { UpdateProductDTO } from "../DTOs/product/updateProductDTO";
import { validateDTOMiddleware } from "../middlewares/validateDTOMiddleware";
import { productExistsMiddleware } from "../middlewares/productExistsMiddleware";
import { bodyIsEmptyMiddleware } from "../middlewares/bodyIsEmptyMiddleware";
import { categoryExistsMiddleware } from "../middlewares/categoryExistsMiddleware";
import { asyncHandler } from "../utils/asyncHandler";

const router = Router();

router.route("/")
    .get(asyncHandler(productControllers.getAll))
    .post(validateDTOMiddleware(CreateProductDTO),
        categoryExistsMiddleware,
        asyncHandler(productControllers.post))

router.route("/:id")
    .get(asyncHandler(productControllers.getById))
    .put(validateDTOMiddleware(UpdateProductDTO),
        bodyIsEmptyMiddleware,
        productExistsMiddleware,
        productControllers.update)
    .delete(productExistsMiddleware, productControllers.remove);

export default router;