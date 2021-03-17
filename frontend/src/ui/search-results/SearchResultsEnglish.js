import React from "react"
import {Button, Col, Container, Form, FormControl, FormGroup, Row} from "react-bootstrap";
import {ArticleEnglish} from "../shared/components/article/ArticleEnglish";
import "../styles.css"
import {SearchBar} from "../shared/components/search-bar/SearchBar";

export const SearchResultsEnglish = (props) => {
    const {keyword} = props
    const {englishArticle} = props
    return (
        <>
        <Container className={"pt-4"}>
            <Col md={8} className={"pt-3"}>
                <h3>Search Results</h3>
                <Row>
                    <SearchBar/>
                </Row>
            </Col>
        </Container>
        <Container>
            <Col>
                {
                    englishArticle.map(article => <ArticleEnglish key={article.articleId} article={article}/>)
                }
            </Col>

        </Container>

    </>
)
}