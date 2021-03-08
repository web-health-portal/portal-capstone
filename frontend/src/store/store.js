import profile from "./profile"
import auth from "./auth";
import { configureStore,combineReducers} from '@reduxjs/toolkit'

const reducer = combineReducers({auth, profile})
export default configureStore({reducer});