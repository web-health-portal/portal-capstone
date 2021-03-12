import {createSlice} from "@reduxjs/toolkit"
import {httpConfig} from "../utils/httpConfig";


const savedArticleSlice = createSlice({
    name: "savedArticle",
    initialState: [],
    reducers: {
        getAllSavedArticles: (savedArticles, action) => {
            action.payload.map((savedArticle) => {
                let englishArticle = {};
                for (const savedArticleKey in savedArticle) {
                    // console.log(`${savedArticleKey}: ${savedArticle[savedArticleKey]}`);
                    if(savedArticleKey.includes("English")) {
                        englishArticle[savedArticleKey] = savedArticle[savedArticleKey];
                    }
                }
                console.log(englishArticle);
                return " ";
            })

            return action.payload
        },
    },
})

export const {getAllSavedArticles} = savedArticleSlice.actions

export const fetchAllSavedArticles = () => async (dispatch) => {
    const {data} = await httpConfig("/apis/article/random/") //TODO: add in URL for getSavedArticlesByProfileId
    dispatch(getAllSavedArticles(data))
}

export default savedArticleSlice.reducer