import auth from "./auth";
import profile from "./profile"
import savedArticle from "./savedArticle/savedArticle";
import toggle from "./toggle"
import article from "./article/article";
import category from "./category"
import articleCategory from "./articleCategory";
import {configureStore, combineReducers} from '@reduxjs/toolkit'

const reducer = combineReducers({auth, profile, article, savedArticle, toggle, category,articleCategory})
export const store = configureStore({reducer});

