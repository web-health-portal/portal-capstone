import {getAllCategoryController} from "./category.controller";
import {getCategory} from "./category.controller";
import {Router} from "express";
import {asyncValidatorController} from "../../utils/controllers/asyncValidator.controller";
import {check} from "express-validator";
import {isLoggedIn} from "../../utils/controllers/isLoggedIn.controller";


export const categoryRoute = Router();

categoryRoute.route("/:categoryId")
    .get(
        asyncValidatorController([
            check("categoryId").isUUID()
        ]),getCategory
    )
categoryRoute.route("/").get(getAllCategoryController)