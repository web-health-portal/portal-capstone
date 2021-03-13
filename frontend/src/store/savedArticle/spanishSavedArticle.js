const {createSlice} = require("@reduxjs/toolkit");


const spanishSavedArticleSlice = createSlice({
    name: "spanishSavedArticle",
    initialState: [],
    reducers: {
        setAllSpanishSavedArticles: (spanishSavedArticle, action) => {
            spanishSavedArticle.push(action.payload)
        },
        getAllSpanishSavedArticles: (spanishSavedArticle, action) => {
            return action.payload
        }
    },
})

export const {setAllSpanishSavedArticles, getAllSpanishSavedArticles} = spanishSavedArticleSlice.actions


export default spanishSavedArticleSlice.reducer