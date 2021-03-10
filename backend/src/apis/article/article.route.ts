import { Router } from "express";
const {check} = require("express-validator");
import {asyncValidatorController} from "../../utils/controllers/asyncValidator.controller";
import {
    getAllArticleController,
    getArticleByArticleId,
    getArticleByProfileId,
    getRandomArticles
} from "./article.controller";


export const ArticleRoute = Router();

ArticleRoute.route("/:articleId")
    .get(
        asyncValidatorController([
            check("articleId").isUUID()
        ])
    )
ArticleRoute.route("/")
    .get
        (getAllArticleController)

ArticleRoute.route("/random")
    .get(getRandomArticles)

ArticleRoute.route("/:profileId")
    .get(
        asyncValidatorController([
            check("profileId").isUUID()
        ]),
        getArticleByProfileId
    )

ArticleRoute.route("/:articleId")
    .get(
        asyncValidatorController([
            check("articleId").isUUID()
        ]),
        getArticleByArticleId
    )
