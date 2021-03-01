import { Router } from 'express';
import {getAllCategoryController} from './category.controller';
import { asyncValidatorController } from '../../utils/controllers/asyncValidator.controller';
import { categoryValidator } from './category.validator';
import {isLoggedIn} from "../../utils/controllers/isLoggedIn.controller";
const { checkSchema } = require('express-validator');

const router = Router();

router.route("/categoryProfileId/:categoryProfileId").get(getAllCategoryController)

// Every new route is instantiated below. It will include the controller name and the type of action (get, post, delete, put, patch)
router.route('/')
    .get( getAllCategoryController)
    .post(isLoggedIn, asyncValidatorController(checkSchema(categoryValidator)), postCategory);

export default router;