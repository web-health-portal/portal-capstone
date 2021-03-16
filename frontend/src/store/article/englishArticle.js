const {createSlice} = require("@reduxjs/toolkit");


const englishArticleSlice = createSlice({
    name: "englishArticle",
    initialState: [],
    reducers: {
        setAllRandomEnglishArticles: (englishArticle, action) => {
            englishArticle.push(action.payload)
        },
        getAllRandomEnglishArticles: (englishArticle, action) => {
            return action.payload
        },
        getSearchResultsEnglish: (englishArticle, action) => {
            return action.payload
        }
    },
})

export const {setAllRandomEnglishArticles, getAllRandomEnglishArticles, getSearchResultsEnglish} = englishArticleSlice.actions

export default englishArticleSlice.reducer