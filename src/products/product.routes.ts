import { Router } from "express";
import * as productControllers from "./product.controllers";
import { CreateProductDTO } from "./DTOs/createProductDTO";
import { UpdateProductDTO } from "./DTOs/updateProductDTO";
import { validateDTOMiddleware } from "../common/middlewares/validateDTOMiddleware";
import { productExistsMiddleware } from "./middlewares/productExistsMiddleware";
import { bodyIsEmptyMiddleware } from "../common/middlewares/bodyIsEmptyMiddleware";
import { categoryExistsMiddleware } from "../categories/middlewares/categoryExistsMiddleware";
import { asyncHandler } from "../common/utils/asyncHandler";
import passport from "../common/middlewares/passportMiddleware";

const router = Router();

router.route("/")
    .get(asyncHandler(productControllers.getAll))
    .post( validateDTOMiddleware(CreateProductDTO),
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