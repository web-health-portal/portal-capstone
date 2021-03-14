import React from "react"
import {Button, Container, Row, Col, FormControl, FormGroup, Jumbotron} from "react-bootstrap";
import {Article} from "../shared/components/Article.js";
import "../home/styles.css"
import "../styles.css"

// temporary placeholder to show an example article
const placeHolderArticle = {
    //Topic id to search by: 30615
    //Link to English version: https://health.gov/myhealthfinder/api/v3/topicsearch.json?lang=en&topicId=30615
    //Link to Spanish version: https://health.gov/myhealthfinder/api/v3/topicsearch.json?lang=es&topicId=30615
    articleImageUrl: "https://health.gov/sites/default/files/2020-01/losingweight-2.jpg",
    articleEnglishImageAlt: "Health care provider talking with woman",
    articleEnglishTitle: "Losing Weight: Questions for the doctor",
    articleEnglishDate: "1580741304",
    articleSpanishTitle: "Preguntas para el doctor: Bajar de peso",
    articleSpanishDate: "1580741304",
    articleEnglishUrl: "https://health.gov/myhealthfinder/topics/health-conditions/obesity/losing-weight-questions-doctor",
    articleSpanishImageAlt: "Preguntas para el doctor: Bajar de peso",
    articleSpanishUrl: "https://health.gov/espanol/myhealthfinder/temas/enfermedades-problemas-salud/obesidad/preguntas-doctor-bajar-peso",
    articleCategories: [
        {
            categoryEnglishName: "Doctor Visits, Obesity, Talking with the Doctor, Nutrition, Physical Activity",
            categorySpanishName: "Consultas con el doctor, Obesidad, Charlas con el doctor, Nutrición, Actividad física"
        },
    ],
}

export const Home = () => {
    return (
        <>
        <Container>
            <Jumbotron className="background-image img-fluid">
                <Container className="text-center p-1 mb-1 bg-light text-dark">
                    <h1>Search here for health-related articles and topics.</h1>
                    <h5>SaluDuo is an English-Spanish bilingual health portal, featuring articles to help keep you informed and healthy.</h5>
                    <h5>Create an account with us to build your own library of articles you wish to come back to.</h5>
                </Container>
                    <FormGroup className="container p-1 d-flex justify-content-md-between" controlId="searchArticles">
                    <FormControl type="search" placeholder="What can we help you with?"/>
                    <Button variant="primary mx-2" type="search">Search!</Button>
                    </FormGroup>
            </Jumbotron>
        </Container>

        <Container>
            <Container className="text-center">
                <h2>Browse Articles</h2>
                <h6>Have a look at some of the articles from our API:</h6>
            </Container>
                <Row>
                    <Col md="6">
                    <Article articles={placeHolderArticle}/>
                    <Article articles={placeHolderArticle}/>
                    <Article articles={placeHolderArticle}/>
                    <Article articles={placeHolderArticle}/>
                </Col>
                <Col md="6">
                    <Article articles={placeHolderArticle}/>
                    <Article articles={placeHolderArticle}/>
                    <Article articles={placeHolderArticle}/>
                    <Article articles={placeHolderArticle}/>
                </Col>
            </Row>
        </Container>
</>
)
}