import React from "react"
import {library} from "@fortawesome/fontawesome-svg-core";
import {faUser, faCamera} from "@fortawesome/free-solid-svg-icons";
import {fetchAllSavedArticles} from "../../store/savedArticle/savedArticle";
import {useDispatch, useSelector} from "react-redux";
import {AccountSpanish} from "./AccountSpanish";
import {AccountEnglish} from "./AccountEnglish";
import {fetchAuth} from "../../store/auth";

library.add(faCamera, faUser);


export const Account = () => {

    // subscribe using useSelector to the slice of store you care about
    const englishSavedArticle = useSelector((state) => state.savedArticle.englishSavedArticle ? state.savedArticle.englishSavedArticle : [])
    const spanishSavedArticle = useSelector((state) => state.savedArticle.spanishSavedArticle ? state.savedArticle.spanishSavedArticle : [])
    const toggle = useSelector((state) => state.toggle ? state.toggle : false);

    // console.log("savedArticles from Redux slice", savedArticles)

    const auth = useSelector(state => state.auth ? state.auth : null);
    // get access to dispatch from useDispatch()
    const dispatch = useDispatch()
    const initialEffects = () => {
        dispatch(fetchAllSavedArticles())
    }

    //grab username
    const username = auth.profileEmailAddress.split("@")[0];

    // console.log("in account", englishSavedArticle);

    // using React.useEffect dispatch the action
    React.useEffect(initialEffects, [dispatch])

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