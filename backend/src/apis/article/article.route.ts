import { Router } from "express";
const {check} = require("express-validator");
import {asyncValidatorController} from "../../utils/controllers/asyncValidator.controller";
import {getAllArticleController} from "./article.controller";

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