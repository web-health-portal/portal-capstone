import React from "react"
import {Col, Container, Image, Row} from "react-bootstrap";
import {Link} from "react-router-dom";


export const ArticleSpanish = (props) => {
    const {article} = props;

    const formattedDate = new Date(article.articleEnglishDate).toDateString();
    return (
        <>
            <Container className={"pt-4"}>
                <Row>
                    <Col lg={3}>
                        {/*Image for article*/}
                        {/*<Image rounded fluid src={article.articleSpanishImageUrl}*/}
                        <Image rounded fluid src={"http://www.fillmurray.com/200/300"}
                               alt={article.articleSpanishImageAlt}/>
                    </Col>
                    <Col lg={9}>
                        <Container>
                            <Row>
                                <Col>
                                    {/*Title for article */}
                                    <a href={article.articleSpanishUrl} target="_blank" rel={"noreferrer"}>
                                        <h4>{article.articleSpanishTitle}</h4>
                                    </a>
                                </Col>
                            </Row>
                            <Row className={"px-3"}>
                                <p>
                                    {/*Categories for article*/}
                                    {/*<strong>Categories: </strong>*/}
                                    {/*{props.articles.articleCategories[0].categoryEnglishName}*/}
                                </p>
                                <p>
                                    Fecha de publicación: {formattedDate}
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

