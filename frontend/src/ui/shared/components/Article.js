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
                        <Image rounded fluid src={savedArticle.articles.articleImageUrl}
                               alt={savedArticle.articleEnglishImageAlt}/>
                    </Col>
                    <Col lg={9}>
                        <Container>
                            <Row>
                                <Col>
                                    {/*Title for article */}
                                    <a href={savedArticle.articleEnglishUrl} target="_blank" rel={"noreferrer"}>
                                        <h4>{savedArticle.articleEnglishTitle}</h4>
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
                                    Date Published: {savedArticle.articleEnglishDate}
                                    {/*{console.log(new Date(Number.parseInt(props.articles.articleEnglishDate)).toDateString())}*/}

                                </p>
                            </Row>
                            <Row>
                                <Link to={"#"} className={"px-3 text-sm-left"}>Remove</Link>
                            </Row>
                        </Container>
                    </Col>
                </Row>
            </Container>
        </>
    )
}

