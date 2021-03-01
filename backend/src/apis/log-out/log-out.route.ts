import { Router } from 'express';
import {logOutController} from "./log-out.controller";

export const LogOutRoute = Router();

LogOutRoute.route("/")
    .get(logOutController);