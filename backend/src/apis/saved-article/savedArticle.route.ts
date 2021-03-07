import {Router} from 'express';
import {asyncValidatorController} from '../../utils/controllers/asyncValidator.controller';
import {isLoggedIn} from "../../utils/controllers/isLoggedIn.controller";
import {savedArticle} from "./savedArticle.controller";

export const SavedArticleRoute = Router();

SavedArticleRoute.route('/')
    .post(isLoggedIn, asyncValidatorController, savedArticle);