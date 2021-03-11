import auth from "./auth";
import profile from "./profile"
import articles from "./article";

import { configureStore,combineReducers} from '@reduxjs/toolkit'
const reducer = combineReducers({auth,profile,articles})
export default configureStore({reducer});