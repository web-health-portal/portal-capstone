import React from "react"
import {Col, Container, Image, Row} from "react-bootstrap";
import {Link} from "react-router-dom";


export const Article = (props) => {
    const {article} = props;
    console.log(article);

    //TODO: find out how to format date
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
                                        <h4>{article.articleEnglishTitle}</h4>
                                    </a>
                                </Col>
                            </Row>
                            <Row className={"px-3"}>
                                <p>
                                    {/*Categories for article*/}
                                    {/*<strong>Categories: </strong>*/}
                                    {/*TODO: Figure out how to add categories*/}
                                    {/*{savedArticle.articleCategory.categoryEnglishName}*/}
                                </p>
                                <p>
                                    {/*Date for articles - format with formatDate helper function*/}
                                    {/*Date Published: {article.articleEnglishDate}*/}
                                    Date Published: {formattedDate}
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

