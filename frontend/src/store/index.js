import article from "./article"
import {combineReducers, configureStore} from "@reduxjs/toolkit";

const reducer =  combineReducers({article})

export const store = configureStore({reducer})