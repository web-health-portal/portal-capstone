const {createSlice} = require("@reduxjs/toolkit");


const englishSavedArticleSlice = createSlice({
    name: "englishSavedArticle",
    initialState: [],
    reducers: {
        setAllEnglishSavedArticles: (englishSavedArticle, action) => {
            englishSavedArticle.push(action.payload)
        },
        getAllEnglishSavedArticles: (englishSavedArticle, action) => {
            return action.payload
        }
    },
})

export const {setAllEnglishSavedArticles, getAllEnglishSavedArticles} = englishSavedArticleSlice.actions

export default englishSavedArticleSlice.reducer