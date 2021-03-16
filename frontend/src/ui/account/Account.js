import React from "react"
import {library} from "@fortawesome/fontawesome-svg-core";
import {faUser, faCamera} from "@fortawesome/free-solid-svg-icons";
import {fetchAllSavedArticles} from "../../store/savedArticle/savedArticle";
import {useDispatch, useSelector} from "react-redux";
import {AccountSpanish} from "./AccountSpanish";
import {AccountEnglish} from "./AccountEnglish";
import {useJwtToken} from "../shared/useJwtToken";
import {getAuth} from "../../store/auth";

library.add(faCamera, faUser);


export const Account = () => {

    // subscribe using useSelector to the slice of store you care about
    const englishSavedArticle = useSelector((state) => state.savedArticle.englishSavedArticle ? state.savedArticle.englishSavedArticle : [])
    const spanishSavedArticle = useSelector((state) => state.savedArticle.spanishSavedArticle ? state.savedArticle.spanishSavedArticle : [])
    const toggle = useSelector((state) => state.toggle ? state.toggle : false);
    // console.log("savedArticles from Redux slice", savedArticles)

    // get access to dispatch from useDispatch()
    const dispatch = useDispatch()
    const initialEffects = () => {
        dispatch(fetchAllSavedArticles())
        dispatch(getAuth())
    }

    const {authenticatedUser} = useJwtToken()

    // using React.useEffect dispatch the action
    React.useEffect(initialEffects, [dispatch])

    return (
        <>
            {
                //check if user is signed in
                authenticatedUser !== null
                    ?
                    //if not signed in show message to sign in before viewing account page
                    <h2>Please sign in to view account page.</h2>
                    :
                    //else if signed -> handle toggling between language pages for account
                    toggle === true && <AccountSpanish spanishSavedArticle={spanishSavedArticle}/>
                    ||
                    toggle === false && <AccountEnglish englishSavedArticle={englishSavedArticle}/>
            }

        </>
    )
}