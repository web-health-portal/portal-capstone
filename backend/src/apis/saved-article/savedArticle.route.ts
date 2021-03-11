import {Router} from 'express';
import {isLoggedIn} from "../../utils/controllers/isLoggedIn.controller";
import {savedArticle} from "./savedArticle.controller";

export const SavedArticleRoute = Router();

SavedArticleRoute.route('/')
    .post(isLoggedIn, savedArticle);