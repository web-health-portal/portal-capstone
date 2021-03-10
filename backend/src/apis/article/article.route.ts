import { Router } from "express";
const {check} = require("express-validator");
import {asyncValidatorController} from "../../utils/controllers/asyncValidator.controller";
import {
    getAllArticleController,
    getArticleByArticleId,
    getArticleByProfileId,
    getRandomArticles
} from "./article.controller";
import {isLoggedIn} from "../../utils/controllers/isLoggedIn.controller";


export const ArticleRoute = Router();

ArticleRoute.route("/")
    .get
        (getAllArticleController)

ArticleRoute.route("/random")
    .get(getRandomArticles)

ArticleRoute.route("/profileId/:profileId")
    .get(
        isLoggedIn, asyncValidatorController([
            check("profileId").isUUID()
        ]),
        getArticleByProfileId
    )

ArticleRoute.route("/articleId/:articleId")
    .get(
        asyncValidatorController([
            check("articleId").isUUID()
        ]),
        getArticleByArticleId
    )


