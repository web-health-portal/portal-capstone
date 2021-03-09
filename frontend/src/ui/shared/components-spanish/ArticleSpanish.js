import React from "react"
import {Col, Container, Image, Row} from "react-bootstrap";
import {Link} from "react-router-dom";


export const Article = (props) => {
    const {savedArticle} = props;

    return (
        <>
            <Container className={"pt-4"}>
                <Row>
                    <Col lg={3}>
                        {/*Image for article*/}
                        <Image rounded fluid src={savedArticle.articleSpanishImageUrl}
                               alt={savedArticle.articleSpanishImageAlt}/>
                    </Col>
                    <Col lg={9}>
                        <Container>
                            <Row>
                                <Col>
                                    {/*Title for article */}
                                    <a href={savedArticle.articleSpanishUrl} target="_blank" rel={"noreferrer"}>
                                        <h4>{savedArticle.articleSpanishTitle}</h4>
                                    </a>
                                </Col>
                            </Row>
                            <Row className={"px-3"}>
                                {/*Categories for article*/}
                                <p>
                                    {/*<strong>Categories: </strong>*/}
                                    {/*{props.articles.articleCategories[0].categoryEnglishName}*/}
                                </p>
                                <p>
                                    Fecha de publicación: {savedArticle.articleSpanishDate}
                                    {/*{console.log(new Date(Number.parseInt(props.articles.articleEnglishDate)).toDateString())}*/}

                                </p>
                            </Row>
                            <Row>
                                <Link to={"#"} className={"px-3 text-sm-left"}>Borrar</Link>
                            </Row>
                        </Container>
                    </Col>
                </Row>
            </Container>
        </>
    )
}

