import {Router} from "express"
import {indexController} from './index.controller'

const indexRoute = Router()

indexRoute.route("/")
    .get(indexController)

export default indexRoute;