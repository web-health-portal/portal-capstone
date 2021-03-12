import React from "react"
import {Col, Container, Image, Row} from "react-bootstrap";
import {Link} from "react-router-dom";
import {fetchAllRandomArticles} from "../../../store/article";
import {useDispatch, useSelector} from "react-redux";


export const ArticleSpanish = ({article}) => {
    console.log(article.articleImageUrl)
    return (
        <>
            <Container className={"pt-4"}>
                <Row>
                    <Col lg={3}>
                        {/*Image for article*/}
                        <Image rounded fluid src={article.articleSpanishImageUrl}
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
                                {/*Categories for article*/}
                                <p>
                                    <strong>Categories: </strong>
                                    {/*map over article categories to display in p tag*/}
                                    {/*{article.articleCategories[0].categoryEnglishName}*/}
                                </p>
                                <p>
                                    {/*Date Published: {convertTimestampToDate(props.articles.articleEnglishDate)}*/}
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
            {/*TODO: Need footer component with link to API per terms of use*/}
        </>
    )
}