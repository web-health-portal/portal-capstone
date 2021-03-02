import {getAllCategoryController} from "./category.controller";
import {Router} from "express";
import {asyncValidatorController} from "../../utils/controllers/asyncValidator.controller";
import {check, checkSchema} from "express-validator";
import {isLoggedIn} from "../../utils/controllers/isLoggedIn.controller";
import {categoryValidator} from "./category.validator";

export const CategoryRoute = Router();

CategoryRoute.route("/:categoryId")
    .get(
        asyncValidatorController([
            check("categoryId").isUUID()
        ])
    )
    .put(isLoggedIn, asyncValidatorController(checkSchema(categoryValidator)), getAllCategoryController)