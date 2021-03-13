import {createSlice} from "@reduxjs/toolkit"
import {httpConfig} from "../ui/shared/utils/http-config";
import {fetchAllCategories} from "./category";

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

export const fetchAllRandomArticlesAndAllCategories = () => async (dispatch, getState, _) => {
    await dispatch(fetchAllRandomArticles())
    const articleIds = _.uniq(_.map(getState().articles(), "articleCategoryId"));
    articleIds.forEach(id => dispatch(fetchAllCategories(id)));
}

export default articleSlice.reducer


