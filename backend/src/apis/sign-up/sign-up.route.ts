import {Router} from 'express';
import {signupProfileController} from './sign-up.controller';
import {signupValidator} from './sign-up.validator';
import {asyncValidatorController} from '../../utils/controllers/asyncValidator.controller';
import {activationController} from "./activation.controller";
import {param} from "express-validator";

const {checkSchema} = require('express-validator');

const SignUpRoute = Router();

SignUpRoute.route('/')
    .post(
        asyncValidatorController(checkSchema(signupValidator)),
        signupProfileController
    );

SignUpRoute.route('/activation/:activation')
    .get(
        asyncValidatorController([param("activation", "invalid activation link").isHexadecimal().notEmpty()]),
        activationController
    )

export default SignUpRoute;