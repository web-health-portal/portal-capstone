import auth from "./auth";
import profile from "./profile"
import savedArticle from "./savedArticle/savedArticle";
import toggle from "./toggle"
import article from "./article/article";

import {configureStore, combineReducers} from '@reduxjs/toolkit'

const reducer = combineReducers({auth, profile, article, savedArticle, toggle})
export const store = configureStore({reducer});