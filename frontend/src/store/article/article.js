import {httpConfig} from "../../utils/httpConfig";
import {combineReducers} from "@reduxjs/toolkit";
import englishArticle, {
    getAllRandomEnglishArticles,
    getSearchResultsEnglish,
    setAllRandomEnglishArticles
} from "./englishArticle";
import spanishArticle, {
    getAllRandomSpanishArticles,
    getSearchResultsSpanish,
    setAllRandomSpanishArticles
} from "./spanishArticle";
import articleId, {setArticleId} from "./articleId";
import {filterArticlesByLanguage} from "../filterArticlesByLanguage";
import {fetchArticleCategoryByArticleIds} from "../articleCategory";
import {useDispatch} from "react-redux";


export const fetchAllRandomArticles = () => async (dispatch) => {
    //fetch data from our API
    const {data} = await httpConfig("/apis/article/random/");
    // console.log(data);

    const articleIds = data.map(article => article.articleId)
    dispatch(setArticleId(articleIds))
    //filter articles by language with data from API
    const englishArticle = await filterArticlesByLanguage("English", data);
    const spanishArticle = await filterArticlesByLanguage("Spanish", data);

    //check filtered articles
    // console.log("englishArticle", englishArticle)
    // console.log("spanishArticle", spanishArticle)

    //dispatch actions to child slices
    dispatch(setAllRandomEnglishArticles(englishArticle))
    dispatch(setAllRandomSpanishArticles(spanishArticle))
    dispatch(getAllRandomEnglishArticles(englishArticle))
    dispatch(getAllRandomSpanishArticles(spanishArticle))
    dispatch(fetchArticleCategoryByArticleIds())
}

export const fetchArticleSearchResults = (data) => async (dispatch) => {
    const englishArticle = await filterArticlesByLanguage("English", data);
    const spanishArticle = await filterArticlesByLanguage("Spanish", data);
    const articleIds = data.map(article => article.articleId)
    dispatch(setArticleId(articleIds))
    dispatch(getSearchResultsEnglish(englishArticle))
    dispatch(getSearchResultsSpanish(spanishArticle))
    dispatch(fetchArticleCategoryByArticleIds())

}

//combine reducers for each language
export default combineReducers({
    englishArticle: englishArticle,
    spanishArticle: spanishArticle,
    articleId: articleId
})
