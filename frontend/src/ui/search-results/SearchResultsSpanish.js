import React from "react"
import {Button, Col, Container, Form, FormControl, FormGroup, Row} from "react-bootstrap";
import {ArticleSpanish} from "../shared/components/article/ArticleSpanish";
import "../styles.css"
import {SearchBarSpanish} from "../shared/components/search-bar/SearchBarSpanish";

export const SearchResultsSpanish = (props) => {
    const {keyword} = props
    const {spanishArticle} = props
    return (
        <>
            <Container className={"pt-4"}>
                <Col md={8} className={"pt-3"}>
                    <h3>Resultados de búsqueda</h3>
                    <Row>
                        <SearchBarSpanish/>
                    </Row>
                </Col>
            </Container>
            <Container>
                <Row>
                    <Col>
                        {
                            spanishArticle.map(article => <ArticleSpanish key={article.articleId} article={article}/>)
                        }
                    </Col>
                </Row>
            </Container>

        </>
    )
}