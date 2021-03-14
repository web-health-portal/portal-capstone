import React from "react"
import {Button, Container, Row, Col, FormControl, FormGroup, Jumbotron} from "react-bootstrap";
import "../home/styles.css"
import {ArticleSpanish} from "../shared/components/article/ArticleSpanish";
import {SearchBarSpanish} from "../shared/components/search-bar/SearchBarSpanish";

export const HomeSpanish = (props) => {
    const {spanishArticle} = props;

    return (
        <>
            <Container>
                <Jumbotron className="background-image img-fluid">
                    <Container className="text-center p-1 mb-1 bg-light text-dark">
                        <h1>Busque artículos y temas relacionados con su salud.</h1>
                        SaluDuo es un portal de salud bilingüe, con el objetivo de proporcionar artículos en ingles y español para mantenerlo informado de su salud con la ayuda de un solo botón.
                        <p>Cree una cuenta con nosotros para crear su propia biblioteca de artículos que desee volver a ver en un futuro.</p>
                    </Container>
                    <SearchBarSpanish/>
                </Jumbotron>
            </Container>

            <Container>
                <Container className="text-center">
                    <h4>Artículos relevantes</h4>
                    <h6>Estos son algunos temas y artículos que podrían interesarle:</h6>
                </Container>
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