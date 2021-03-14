import React from "react"
import {Button, Container, Row, Col, FormControl, FormGroup, Jumbotron} from "react-bootstrap";
import {ArticleEnglish} from "../shared/components/article/ArticleEnglish";
import "../home/styles.css"
import {useDispatch, useSelector} from "react-redux";
import {fetchAllRandomArticles} from "../../store/article/article";
import {HomeSpanish} from "./HomeSpanish";
import {HomeEnglish} from "./HomeEnglish";
import {ArticleSpanish} from "../shared/components/article/ArticleSpanish";
export const Home = () => {
    // subscribe using useSelector to the slice of store you care about
    const englishArticle = useSelector((state) => state.article.englishArticle ? state.article.englishArticle : [])
    const spanishArticle = useSelector((state) => state.article.spanishArticle ? state.article.spanishArticle : [])
    const toggle = useSelector((state) => state.toggle ? state.toggle : false);
    // get access to dispatch from useDispatch()
    const dispatch = useDispatch()
    const initialEffects = () => {
        dispatch(fetchAllRandomArticles())
    }
    // console.log("in account", englishSavedArticle);
    // using React.useEffect dispatch the action
    React.useEffect(initialEffects, [dispatch])
    return (
        <>
            {
                toggle === true && <HomeSpanish spanishArticle={spanishArticle}/>
                ||
                toggle === false && <HomeEnglish englishArticle={englishArticle}/>
            }
        </>
    )
}