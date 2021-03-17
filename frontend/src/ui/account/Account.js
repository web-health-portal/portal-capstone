import React from "react"
import {library} from "@fortawesome/fontawesome-svg-core";
import {faUser, faCamera} from "@fortawesome/free-solid-svg-icons";
import {fetchAllSavedArticles} from "../../store/savedArticle/savedArticle";
import {useDispatch, useSelector} from "react-redux";
import {AccountSpanish} from "./AccountSpanish";
import {AccountEnglish} from "./AccountEnglish";
import {useJwtToken} from "../shared/useJwtToken";
import {fetchAllCategories} from "../../store/category";

library.add(faCamera, faUser);


export const Account = () => {
    // subscribe using useSelector to the slice of store you care about
    const englishSavedArticle = useSelector((state) => state.savedArticle.englishSavedArticle ? state.savedArticle.englishSavedArticle : [])
    const spanishSavedArticle = useSelector((state) => state.savedArticle.spanishSavedArticle ? state.savedArticle.spanishSavedArticle : [])
    const categories = useSelector(state => state.categories ? state.categories : [])
    const toggle = useSelector((state) => state.toggle ? state.toggle : false);
    const auth = useSelector(state => state.auth ? state.auth : null);

    // get access to dispatch from useDispatch()
    const dispatch = useDispatch()
    const initialEffects = () => {
        dispatch(fetchAllCategories())
        dispatch(fetchAllSavedArticles())
    }

    //grab username
    const username = auth.profileFirstName;

    // using React.useEffect dispatch the action
    React.useEffect(initialEffects, [dispatch])
    const {authenticatedUser} = useJwtToken();
    console.log(authenticatedUser);

    return (
        <>
            {
                toggle === true && <AccountSpanish username={username} spanishSavedArticle={spanishSavedArticle}/>
                ||
                toggle === false && <AccountEnglish username={username} englishSavedArticle={englishSavedArticle}/>
            }
        </>
    )
}