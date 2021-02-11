import React from "react"
import {Col, Container, Image, Row} from "react-bootstrap";
import {Link} from "react-router-dom";


export const Article = (props) => {
    return (
        <>
            <Container className={"pt-4"}>
                <Row>
                    <Col lg={3}>
                        {/*Image for article*/}
                        <Image rounded fluid src={props.articles.articleImageUrl}
                               alt={props.articles.articleEnglishImageAlt}/>
                    </Col>
                    <Col lg={9}>
                        <Container>
                            <Row>
                                <Col>
                                    {/*Title for article */}
                                    <a href={props.articles.articleEnglishUrl} target="_blank" rel={"noreferrer"}>
                                        <h4>{props.articles.articleEnglishTitle}</h4>
                                    </a>
                                </Col>
                            </Row>
                            <Row>
                                {/*Categories for article*/}
                                <p className={"px-3"}>
                                    {/*map over article categories to display in p tag*/}
                                    {props.articles.articleCategories.forEach(category => category.categoryEnglishName)}
                                    {props.articles.articleCategories[0].categoryEnglishName}
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

