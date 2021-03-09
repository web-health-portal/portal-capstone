import savedArticles from "./savedArticle";
import {combineReducers, configureStore} from "@reduxjs/toolkit";

const reducer = combineReducers({savedArticles});

export const store = configureStore({reducer});