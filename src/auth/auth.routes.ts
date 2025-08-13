import { Router } from "express";
import { validateDTOMiddleware } from "../common/middlewares/validateDTOMiddleware";
import { loginDTO } from "./DTOs/loginDTO";
import { asyncHandler } from "../common/utils/asyncHandler";
import * as authControllers from "./auth.controllers";


const router = Router();

//ADD SWAGGER MIDDLEWARE IN ALL THE PROJECT
router.route("/login")
    .post(validateDTOMiddleware(loginDTO), asyncHandler(authControllers.login));

export default router;