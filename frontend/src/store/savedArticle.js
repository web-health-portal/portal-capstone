import {createSlice} from "@reduxjs/toolkit"
import {httpConfig} from "../utils/httpConfig";


const savedArticleSlice = createSlice({
    name: "savedArticle",
    initialState: [],
    reducers: {
        getAllSavedArticles: (savedArticles, action) => {
            return action.payload
        },
    },
})

export const {getAllSavedArticles} = savedArticleSlice.actions

export const fetchAllSavedArticles = () => async (dispatch) => {
    const {data} = await httpConfig("/apis/") //TODO: add in URL for getSavedArticlesByProfileId
    dispatch(getAllSavedArticles(data))
}

export default savedArticleSlice.reducer