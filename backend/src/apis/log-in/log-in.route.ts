import { Router } from 'express';
import { asyncValidatorController } from '../../utils/controllers/asyncValidator.controller';
import { logInValidator } from './log-in.validator';
import {logInController} from "./log-in.controller";

const { checkSchema } = require('express-validator');

export const LogInRoute = Router();

LogInRoute.route('/')
    .post(asyncValidatorController(checkSchema(logInValidator)), logInController);