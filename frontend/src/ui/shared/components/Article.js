import React from "react"
import {Col, Container, Image, Row} from "react-bootstrap";
import {Link} from "react-router-dom";


export const Article = (props) => {
    const convertTimestampToDate = (timestamp) => {
        //Takes in UNIX timestamp and converts to {Day of week} {Month} {Day of month} {Full year}
        let date = new Date(timestamp * 1000);
        return date.toDateString();
    }

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
                            <Row className={"px-3"}>
                                {/*Categories for article*/}
                                <p>
                                    {/*map over article categories to display in p tag*/}
                                    {props.articles.articleCategories[0].categoryEnglishName}
                                </p>
                                <p>
                                    Date Published: {convertTimestampToDate(props.articles.articleEnglishDate)}
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

