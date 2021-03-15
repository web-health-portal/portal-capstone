import {createSlice} from "@reduxjs/toolkit"
import {httpConfig} from "../ui/shared/utils/http-config";

const articleCategorySlice = createSlice({
    name: "articleCategory",
    initialState: [],
    reducers: {

        getAllArticleCategories: (articleCategory, action) => {
            return action.payload
        },

    },
})

export const {getAllArticleCategories} = articleCategorySlice.actions

export const fetchAllArticleCategory = () => async (dispatch) => {
    const {data} = await httpConfig.get("/apis/article-category")
    console.log("data", data)
    dispatch(getAllArticleCategories(data))
}