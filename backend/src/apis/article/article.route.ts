import { Router } from "express";
const {check} = require("express-validator");
import {asyncValidatorController} from "../../utils/controllers/asyncValidator.controller";
import {getAllArticleController} from "./article.controller";

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