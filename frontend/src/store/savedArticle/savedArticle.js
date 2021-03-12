import {createSlice} from "@reduxjs/toolkit"
import {httpConfig} from "../../utils/httpConfig";
import {combineReducers} from "@reduxjs/toolkit";
import englishSavedArticle, {setAllEnglishSavedArticles} from "./englishSavedArticle";
import spanishSavedArticle, {setAllSpanishSavedArticles} from "./spanishSavedArticle";

//TODO: write callback function in src/store to get article by language -- use string as param

export const fetchAllSavedArticles = () => async (dispatch) => {
    const {data} = await httpConfig("/apis/article/random/") //TODO: add in URL for getSavedArticlesByProfileId
    // console.log(data);
    const {englishArticle, spanishArticle} = data.map((savedArticle) => {
                let englishArticle = {};
                let spanishArticle = {};
                for (const savedArticleKey in savedArticle) {
                    // console.log(`${savedArticleKey}: ${savedArticle[savedArticleKey]}`);
                    if (savedArticleKey.includes("English")) {
                        englishArticle[savedArticleKey] = savedArticle[savedArticleKey];
                    } else if (savedArticleKey.includes("Spanish")) {
                        spanishArticle[savedArticleKey] = savedArticle[savedArticleKey];
                    }
                }
                console.log(englishArticle);
                return {englishArticle, spanishArticle};
            })

    // console.log("englishArticle", englishArticle)
    // console.log("spanishArticle", spanishArticle)
    //this will dispatch actions to child slices
    dispatch(setAllEnglishSavedArticles(englishArticle))
    dispatch(setAllSpanishSavedArticles(spanishArticle))
}

export default combineReducers({
    englishSavedArticle: englishSavedArticle,
    spanishSavedArticle: spanishSavedArticle
})

