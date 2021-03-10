import auth from "./auth";
import profile from "./profile"

import { configureStore,combineReducers} from '@reduxjs/toolkit'
const reducer = combineReducers({auth,profile})
export default configureStore({reducer});