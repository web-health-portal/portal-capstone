import auth from "./auth";
import profile from "./profile"
import savedArticle from "./savedArticle/savedArticle";

import {configureStore, combineReducers} from '@reduxjs/toolkit'

const reducer = combineReducers({auth, profile, savedArticle})
export const store = configureStore({reducer});