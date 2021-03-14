import React from "react"
import {Col, Container, Image, Row} from "react-bootstrap";
import {Link} from "react-router-dom";



export const ArticleEnglish = (props) => {
    const {article} = props;

    const formattedDate = new Date(article.articleEnglishDate).toDateString();
    return (
        <>
            <Container className={"pt-4"}>
                <Row>
                    <Col lg={3}>
                        {/*Image for article*/}
                        <Image rounded fluid src={"http://www.fillmurray.com/200/300"}
                               alt={article.articleEnglishImageAlt}/>
                    </Col>
                    <Col lg={9}>
                        <Container>
                            <Row>
                                <Col>
                                    {/*Title for article */}
                                    <a href={article.articleEnglishUrl} target="_blank" rel={"noreferrer"}>
                                        <h5>{article.articleEnglishTitle}</h5>
                                    </a>
                                </Col>
                            </Row>
                            <Row className={"px-3"}>
                                <p>
                                    {/*Categories for article*/}
                                    {/*TODO: Figure out how to add categories*/}
                                    {/*<strong>Categories: </strong>*/}
                                    {/*TODO: Do a map over categories here*/}
                                </p>
                                <p>
                                    Date Published: {formattedDate}
                                </p>
                            </Row>
                            <Row>
                                <Link to={"#"} className={"px-3 text-sm-left"}>Save</Link>
                                <Link to={"#"} className={"px-3 text-sm-left"}>Remove</Link>
                            </Row>
                        </Container>
                    </Col>
                </Row>
            </Container>
        </>
    )
}

