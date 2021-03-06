import {Router} from 'express';
import {asyncValidatorController} from '../../utils/controllers/asyncValidator.controller';
import {isLoggedIn} from "../../utils/controllers/isLoggedIn.controller";
const {checkSchema} = require('express-validator');


const router = Router();

router.route("/ArticleProfileId/:ArticleProfileId").get(getSavedArticleController)

// Every new route is instantiated below. It will include the controller name and the type of action (get, post, delete, put, patch)
router.route('/')
    .get( getSavedArticleController)
    .post(isLoggedIn, asyncValidatorController(checkSchema(tweetValidator)), postTweet);

export default router;