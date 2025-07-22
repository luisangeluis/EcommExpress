import { Router } from "express";
import { validateDTOMiddleware } from "../middlewares/validateDTOMiddleware";
import { loginDTO } from "../DTOs/auth/loginDTO";
import { asyncHandler } from "../utils/asyncHandler";
import * as authControllers from "../controllers/auth.controllers";


const router = Router();

//ADD SWAGGER MIDDLEWARE IN ALL THE PROJECT
router.route("/login")
    .post(validateDTOMiddleware(loginDTO), asyncHandler(authControllers.login));

export default router;