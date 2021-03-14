import React from "react"
import {Button, Container, Row, Col, FormControl, FormGroup, Jumbotron} from "react-bootstrap";
import {ArticleEnglish} from "../shared/components/article/ArticleEnglish";
import {SearchBar} from "../shared/components/search-bar/SearchBar";
import "../home/styles.css"
import "../styles.css"

export const HomeEnglish = (props) => {
    const {englishArticle} = props;

    return (
        <>
            <Container>
                <Jumbotron className="background-image img-fluid">
                    <Container className="text-center p-1 mb-1 bg-light text-dark">
                        <h1>Search here for health-related articles and topics.</h1>
                        <h6>SaluDuo is an English-Spanish bilingual health portal, featuring articles to help keep you
                            informed and healthy.</h6>
                        <h6>Create an account with us to build your own library of articles you wish to come back to.</h6>
                    </Container>
                    <SearchBar/>
                </Jumbotron>
            </Container>

            <Container>
                <Container className="text-center">
                    <h2>Browse Articles</h2>
                    <h6>Have a look at some of the articles from our API:</h6>
                </Container>
                <Row>
                    <Col>
                        {
                            englishArticle.map(article => <ArticleEnglish key={article.articleId} article={article}/>)
                        }
                    </Col>
                </Row>
            </Container>
        </>
    )
}