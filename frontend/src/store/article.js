import {createSlice} from "@reduxjs/toolkit"
import {httpConfig} from "/frontend/src/ui/shared/utils/http-config";
import {getRandomArticles} from "../../../backend/src/apis/article/article.route";


const articleSlice = createSlice({
    name: "article",
    initialState: [],
    reducers: {
        getRandomArticles: (article, action) => {
            return action.payload
        },
    },
})

export const {getRandomArticles} = articleSlice.actions

export const fetchRandomArticles = () => async (dispatch) => {
    const {data} = await httpConfig("/apis/random")
    dispatch(getRandomArticles(data))
}

export default articleSlice.reducer


