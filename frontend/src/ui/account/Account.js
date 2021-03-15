import React from "react"
import {Form, Button, Col, Container, FormControl, FormGroup, Row} from "react-bootstrap";
import {library} from "@fortawesome/fontawesome-svg-core";
import {FontAwesomeIcon} from '@fortawesome/react-fontawesome'
import {faUser, faCamera} from "@fortawesome/free-solid-svg-icons";
import {Article} from "../shared/components/Article";
import {ArticleSpanish} from "../shared/components-spanish/ArticleSpanish"
import savedArticle, {fetchAllSavedArticles} from "../../store/savedArticle/savedArticle";
import {useDispatch, useSelector} from "react-redux";
import {AccountSpanish} from "./AccountSpanish";
import {AccountEnglish} from "./AccountEnglish";

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
    }

    // console.log("in account", englishSavedArticle);

    // using React.useEffect dispatch the action
    React.useEffect(initialEffects, [dispatch])

    return (
        <>

            {
                toggle === true && <AccountSpanish spanishSavedArticle={spanishSavedArticle}/>
                ||
                toggle === false && <AccountEnglish englishSavedArticle={englishSavedArticle}/>
            }

        </>
    )
}