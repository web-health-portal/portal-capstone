import {createSlice} from "@reduxjs/toolkit"
import {httpConfig} from "/frontend/src/ui/shared/utils/http-config";


const articleSlice = createSlice({
    name: "article",
    initialState: [],
    reducers: {
        getArticleByArticleId: (article, action) => {
            return action.payload
        },
    },
})

export const {getArticleByArticleId} = articleSlice.actions

export const fetchArticleByArticleId = () => async (dispatch) => {
    const {data} = await httpConfig("/apis/article")
    dispatch(getArticleByArticleId(data))
}

export default articleSlice.reducer


