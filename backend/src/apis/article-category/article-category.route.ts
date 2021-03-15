import {Router} from "express";
import {asyncValidatorController} from "../../utils/controllers/asyncValidator.controller";
import {check} from "express-validator";
import {getArticleCategoryByArticleId, getArticleCategoryByCategoryId} from "./article-category.controller";



export const ArticleCategoryRoute = Router();

ArticleCategoryRoute.route("/:categoryId")
    .get(
        asyncValidatorController([
            check("categoryId").isUUID()
        ]),
        getArticleCategoryByCategoryId
    )

ArticleCategoryRoute.route("/:articleId")
    .get(
        asyncValidatorController([
            check("articleId").isUUID()
        ]),getArticleCategoryByArticleId
    )