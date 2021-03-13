const {createSlice} = require("@reduxjs/toolkit");


const spanishSavedArticles = createSlice({
    name: "spanishSavedArticle",
    initialState: [],
    reducers: {
        setAllSpanishSavedArticles: (spanishSavedArticle, action) => {
            spanishSavedArticle.push(action.payload)
        },
    },
})

export const {setAllSpanishSavedArticles} = spanishSavedArticles.actions


export default spanishSavedArticles.reducer