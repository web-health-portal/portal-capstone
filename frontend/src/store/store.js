import auth from "./auth";
import profile from "./profile"
import article from "./article";

import { configureStore,combineReducers} from '@reduxjs/toolkit'
const reducer = combineReducers({auth,profile,article})
export default configureStore({reducer});