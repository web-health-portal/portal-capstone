import React from "react"
import {Button, Container, Row, Col, FormControl, FormGroup, Jumbotron} from "react-bootstrap";
import {Article} from "../shared/components/Article.js";
import "../home/styles.css"
import {useDispatch, useSelector} from "react-redux";
import {fetchAllRandomArticles} from "../../store/article/article";
import {ArticleSpanish} from "../shared/components-spanish/ArticleSpanish";
import {SearchBar} from "../shared/components/search-bar/SearchBar";


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
            <Container>
                <Jumbotron className="background-image img-fluid">
                    <Container className="text-center p-1 mb-1 bg-light text-dark">
                        <h1>Search here for health-related articles and topics.</h1>
                        SaluDuo is an English-Spanish bilingual health portal, featuring articles to help keep you
                        informed and healthy.
                        <p>Create an account with us to build your own library of articles you wish to come back to.</p>
                    </Container>
                    <FormGroup className="container p-1 d-flex justify-content-md-between" controlId="searchArticles">
                        <FormControl type="search" placeholder="What can we help you with?"/>
                        <Button variant="primary mx-2" type="search">Search!</Button>
                    </FormGroup>
                    <SearchBar/>
                </Jumbotron>
            </Container>

            <Container>
                <Container className="text-center">
                    <h4>Browse Articles</h4>
                    <h6>Have a look at some of the articles from our API:</h6>
                </Container>
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