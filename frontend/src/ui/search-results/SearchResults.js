import React from "react"
import {SearchResultsSpanish} from "./SearchResultsSpanish";
import {SearchResultsEnglish} from "./SearchResultsEnglish";
import {useSelector} from "react-redux";
import englishArticle from "../../store/article/englishArticle";
import spanishArticle from "../../store/article/spanishArticle";

import {fetchArticleCategoryByArticleIds} from "../../store/articleCategory";

export const SearchResults = (props) => {
    const {keyword} = props
    const englishArticle = useSelector((state) => state.article.englishArticle ? state.article.englishArticle : [])
    const spanishArticle = useSelector((state) => state.article.spanishArticle ? state.article.spanishArticle : [])
    const categories = useSelector(state => state.categories ? state.categories : [])
    console.log(englishArticle, spanishArticle);

    const toggle = useSelector((state) => state.toggle ? state.toggle : false);
    return (
        <>
            {
                toggle === true && <SearchResultsSpanish keyword={keyword} spanishArticle={spanishArticle}/>
                ||
                toggle === false && <SearchResultsEnglish keyword={keyword} englishArticle={englishArticle}/>
            }
        </>
    )
}




