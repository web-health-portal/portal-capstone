import React from "react"
import {SearchResultsSpanish} from "./SearchResultsSpanish";
import {SearchResultsEnglish} from "./SearchResultsEnglish";
import {useSelector} from "react-redux";


export const SearchResults = ({keyword}) => {

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