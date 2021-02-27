import {Router} from "express"
import {indexController} from './index.controller'

const IndexRouter = Router();

IndexRouter.route("/")
    .get(indexController);

export default IndexRouter;