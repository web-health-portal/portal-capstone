import React from "react"
import {Button, Container, Row, Col, FormControl, FormGroup, Jumbotron} from "react-bootstrap";
import {Article} from "../shared/components/Article.js";
import "../home/styles.css"
import {useDispatch, useSelector} from "react-redux";

import {fetchAllCategories} from "../../store/category";
import {fetchAllArticleCategory} from "../../store/articleCategory";
import {ArticleSpanish} from "../shared/components-spanish/ArticleSpanish";
import {fetchAllRandomArticles} from "../../store/article/article";


export const Home = () => {
    // subscribe using useSelector to the slice of store you care about
    const englishArticle = useSelector((state) => state.article.englishArticle ? state.article.englishArticle : [])
    const spanishArticle = useSelector((state) => state.article.spanishArticle ? state.article.spanishArticle : [])
    const toggle = useSelector((state) => state.toggle ? state.toggle : false);
    const categories = useSelector(state => state.categories ? state.categories : [])
    // get access to dispatch from useDispatch()
    console.log(categories)
    const dispatch = useDispatch()
    const initialEffects = () => {
        dispatch(fetchAllCategories())
        dispatch(fetchAllRandomArticles())
    }

    // console.log("in account", englishSavedArticle);

    // using React.useEffect dispatch the action

    React.useEffect(initialEffects, [dispatch])
    return (
        <>
            <Container>
                <Row>

                    <Col>
                        {
                            toggle === true && spanishArticle.map(article => <ArticleSpanish
                                key={article.articleId}
                                article={article}/>)
                            ||
                            toggle === false && englishArticle.map(article => <Article
                                key={article.articleId}
                                article={article}/>)
                        }
                    </Col>
                </Row>
            </Container>
        </>
    )

}