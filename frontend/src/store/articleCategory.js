import {createSlice} from "@reduxjs/toolkit"
import {httpConfig} from "../ui/shared/utils/http-config";

const articleCategorySlice = createSlice({
    name: "articleCategory",
    initialState: [],
    reducers: {
        getAllArticleCategories: (articleCategory, action) => {
            return action.payload
        },
        setArticleCategory: (articleCategory, action) => {
            articleCategory.push(...action.payload)
        }
    },
})

export const {getAllArticleCategories, setArticleCategory} = articleCategorySlice.actions

export const fetchArticleCategoryByArticleIds = () => async (dispatch, getState) => {
    const articleIds = getState().article.articleId
    for (const articleId of articleIds) {
        const {data} = await httpConfig.get(`/apis/article-category/articleId/${articleId}`)
        dispatch(setArticleCategory(data))
    }

    // console.log("data", data)
    // dispatch(getAllArticleCategories(data))
}

export default articleCategorySlice.reducer