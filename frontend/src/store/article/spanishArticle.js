const {createSlice} = require("@reduxjs/toolkit");


const spanishArticleSlice = createSlice({
    name: "spanishArticle",
    initialState: [],
    reducers: {
        setAllRandomSpanishArticles: (spanishArticle, action) => {
            spanishArticle.push(action.payload)
        },
        getAllRandomSpanishArticles: (spanishArticle, action) => {
            return action.payload
        },
        getSearchResultsSpanish: (spanishArticle, action) => {
            return action.payload
        }
    },
})

export const {setAllRandomSpanishArticles, getAllRandomSpanishArticles, getSearchResultsSpanish} = spanishArticleSlice.actions

export default spanishArticleSlice.reducer