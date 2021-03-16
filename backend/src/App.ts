import express, {Application} from 'express'
import morgan from 'morgan'
const session = require("express-session");
const passport = require("passport");
const MemoryStore = require('memorystore')(session);
import csrf from "csurf";
// Routes
import IndexRoutes from './apis/index.route'
import {LogInRoute} from "./apis/log-in/log-in.route";
import {ProfileRoute} from './apis/profile/profile.route'
import {passportStrategy} from "./apis/log-in/log-in.controller";
import SignUpRoute from "./apis/sign-up/sign-up.route";
import {LogOutRoute} from "./apis/log-out/log-out.route";
import {categoryRoute} from "./apis/category/category.route";
import {SavedArticleRoute} from "./apis/saved-article/savedArticle.route";
import {ArticleRoute} from "./apis/article/article.route";
import {ArticleCategoryRoute} from "./apis/article-category/article-category.route";
import helmet from "helmet";

// The following class creates the app and instantiates the server
export class App {
    app: Application;

    constructor(
        private port?: number | string
    ) {
        this.app = express()
        this.settings()
        this.middlewares()
        this.routes()
    }

    // private method that sets the port for the sever, to one from index.route.ts, and external .env file or defaults to 3000
    public settings() {
        this.app.set('port', this.port || process.env.PORT || 4200)
    }

    // private method to setting up the middleware to handle json responses, one for dev and one for prod
    private middlewares() {
        const sessionConfig  =  {
            store: new MemoryStore({
                checkPeriod: 100800
            }),
            secret:"secret",
            saveUninitialized: true,
            resave: true,
            maxAge: "3h"
        };

        this.app.use(helmet());
        this.app.use(morgan('dev'));
        this.app.use(express.json());
        this.app.use(session(sessionConfig));
        this.app.use(passport.initialize());
        this.app.use(passport.session());
        passport.use(passportStrategy);
    }

    // private method for setting up routes in their basic sense (ie. any route that performs an action on profiles starts with /profiles)
    private routes() {
        // TODO add our defined "/apis"/routes here
        this.app.use('/apis', IndexRoutes)
        this.app.use('/apis/profile', ProfileRoute)
        this.app.use('/apis/log-in', LogInRoute)
        this.app.use('/apis/log-out', LogOutRoute)
        this.app.use('/apis/sign-up', SignUpRoute)
        this.app.use('/apis/log-out', LogOutRoute)
        this.app.use('/apis/category', categoryRoute)
        this.app.use('/apis/saved-article', SavedArticleRoute)
        this.app.use('/apis/article', ArticleRoute)
        this.app.use('/apis/article-category', ArticleCategoryRoute)

    }

    // starts the server and tells the terminal to post a message that the server is running and on what port
    public async listen(): Promise<void> {
        await this.app.listen(this.app.get('port'))
        console.log('Express application built successfully')
    }
}