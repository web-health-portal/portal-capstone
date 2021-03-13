const {createSlice} = require("@reduxjs/toolkit");


const englishSavedArticleSlice = createSlice({
    name: "englishSavedArticle",
    initialState: [],
    reducers: {
        setAllEnglishSavedArticles: (englishSavedArticle, action) => {
            englishSavedArticle.push(action.payload)
        },
    },
})

export const {setAllEnglishSavedArticles} = englishSavedArticleSlice.actions

export default englishSavedArticleSlice.reducer