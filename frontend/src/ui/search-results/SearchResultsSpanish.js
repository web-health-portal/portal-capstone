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
            <Container className={"pt-4 border rounded drop-shadow"}>
                <Col md={8} className={"pt-3"}>
                    <h3>Resultados de búsqueda para {keyword}</h3>
                    <Row>
                        <SearchBarSpanish/>
                    </Row>
                </Col>
            </Container>
            <Container>
                <Row>
                    <Col className={"article-grid"}>
                        {
                            spanishArticle.map(article => <ArticleSpanish key={article.articleId} article={article}/>)
                        }
                    </Col>
                </Row>
            </Container>

        </>
    )
}