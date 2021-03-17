import {httpConfig} from "../../utils/httpConfig";
import {combineReducers} from "@reduxjs/toolkit";
import englishSavedArticle, {getAllEnglishSavedArticles, setAllEnglishSavedArticles} from "./englishSavedArticle";
import spanishSavedArticle, {getAllSpanishSavedArticles, setAllSpanishSavedArticles} from "./spanishSavedArticle";
import {filterArticlesByLanguage} from "../filterArticlesByLanguage";


export const fetchAllSavedArticles = () => async (dispatch, getState) => {
    const profileId = getState().auth.profileId;
    //fetch data from our API
    const {data} = await httpConfig(`/apis/article/profileId/${profileId}`) //TODO: add in URL for getSavedArticlesByProfileId

    //filter articles by language with data from API
    const englishSavedArticle = await filterArticlesByLanguage("English", data);
    const spanishSavedArticle = await filterArticlesByLanguage("Spanish", data);

    //check filtered articles
    // console.log("englishSavedArticle", englishSavedArticle)
    // console.log("spanishSavedArticle", spanishSavedArticle)

    //dispatch actions to child slices
    dispatch(setAllEnglishSavedArticles(englishSavedArticle))
    dispatch(setAllSpanishSavedArticles(spanishSavedArticle))
    dispatch(getAllEnglishSavedArticles(englishSavedArticle))
    dispatch(getAllSpanishSavedArticles(spanishSavedArticle))
}

//combine reducers for each language
export default combineReducers({
    englishSavedArticle: englishSavedArticle,
    spanishSavedArticle: spanishSavedArticle
})

