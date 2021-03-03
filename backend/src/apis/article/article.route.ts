import { Router } from "express";
const {check, checkSchema} from "express-validator";
import {asyncValidatorController} from "../../utils/controllers/asyncValidator.controller";
import {getAllArticleController} from "./article.controller";
import {getArticlesbyProfileIdController} from "./article.controller";

export const articleRoute = Router();

articleRoute.route("/:articleId")
    .get(
        asyncValidatorController([
            check("articleId").isUUID()
        ])
    )
articleRoute.route("/")
    .get
        (getAllArticleController)
