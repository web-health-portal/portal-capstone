import {createSlice} from "@reduxjs/toolkit"

const articleId = createSlice({
    name: "articleId",
    initialState: [],
    reducers: {
        setArticleId: (articleIds, action) => {
            articleIds.push(...action.payload)
        }
    }
})

export const {setArticleId} = articleId.actions

export default articleId.reducer