import {createSlice} from "@reduxjs/toolkit"
import {httpConfig} from "../utils/httpConfig";


const misquoteSlice = createSlice({
    name: "article",
    initialState: [],
    reducers: {
        getAllArticles: (misquotes, action) => {
            return action.payload
        },
    },
})

export const {getAllMisquotes} = misquoteSlice.actions

export const fetchAllMisquotes = () => async (dispatch) => {
    const {data} = await httpConfig("/apis/misquote")
    dispatch(getAllMisquotes(data))
}

export default misquoteSlice.reducer