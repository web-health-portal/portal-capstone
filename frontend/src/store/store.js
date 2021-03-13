import auth from "./auth";
import profile from "./profile"
import savedArticle from "./savedArticle/savedArticle";
import toggle from "./toggle"

import {configureStore, combineReducers} from '@reduxjs/toolkit'

const reducer = combineReducers({auth, profile, savedArticle, toggle})
export const store = configureStore({reducer});