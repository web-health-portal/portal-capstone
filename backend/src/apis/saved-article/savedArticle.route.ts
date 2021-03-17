import {Router} from 'express';
import {isLoggedIn} from "../../utils/controllers/isLoggedIn.controller";
import {getSavedArticles, savedArticle} from "./savedArticle.controller";

export const SavedArticleRoute = Router();

SavedArticleRoute.route('/')
    .post(isLoggedIn, savedArticle);

SavedArticleRoute.route('/:profileId')
    .get(isLoggedIn, getSavedArticles);