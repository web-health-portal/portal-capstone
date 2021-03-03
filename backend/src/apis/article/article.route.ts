import { Router } from "express";
const {check, checkSchema} from "express-validator";
import {asyncValidatorController} from "../../utils/controllers/asyncValidator.controller";
import {isLoggedIn} from "../../utils/controllers/.controller";
import {getAllArticleController} from "./article.controller";
import {getArticlesbyProfileIdController} from "./article.controller";

export const articleRoute = Router();

articleRoute("/:articleId")
    .get(
        asyncValidatorController([
            check("articleId").isUUID()
        ])
    )