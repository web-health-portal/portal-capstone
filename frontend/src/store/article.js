import {createSlice} from "@reduxjs/toolkit"
import {httpConfig} from "../ui/shared/utils/http-config";

const articleSlice = createSlice({
    name: "articles",
    initialState: [],
    reducers: {
        getRandomArticles: (articles, action) => {
            return action.payload
        },
    },
})

export const {getRandomArticles} = articleSlice.actions

export const fetchAllRandomArticles = () => async (dispatch) => {
    const {data} = await httpConfig.get("/apis/article/random")
    console.log("data", data)
    dispatch(getRandomArticles(data))
}

export default articleSlice.reducer


