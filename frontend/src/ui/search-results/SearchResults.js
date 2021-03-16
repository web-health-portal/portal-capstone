import React from "react"
import {SearchResultsSpanish} from "./SearchResultsSpanish";
import {SearchResultsEnglish} from "./SearchResultsEnglish";
import {useDispatch, useSelector} from "react-redux";
import {fetchArticleCategoryByArticleIds} from "../../store/articleCategory";

export const SearchResult = ({keyword}) => {

    const toggle = useSelector((state) => state.toggle ? state.toggle : false);
    return (
        <>
            {
                toggle === true && <SearchResultsSpanish props={keyword}/>
                ||
                toggle === false && <SearchResultsEnglish props={keyword}/>
            }
        </>
    )
}




