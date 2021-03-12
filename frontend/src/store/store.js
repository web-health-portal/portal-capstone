import auth from "./auth";
import profile from "./profile"

import {configureStore, combineReducers} from '@reduxjs/toolkit'
import savedArticle from "./savedArticle";

const reducer = combineReducers({auth, profile, savedArticle})
export default configureStore({reducer});