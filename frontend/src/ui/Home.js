import React from "react"
import {Button, Container, Image, Row, Col, Form, FormLabel, Jumbotron} from "react-bootstrap";
import {Article} from "./shared/components/Article.js";
import backgroundimage from "./backgroundimage.png"
import "./styles.css"

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
        <Jumbotron style={{ backgroundImage: `url(${backgroundimage})`, backgroundSize: 'fluid' }}>
            <Container>
                <FormGroup controlId="formBasicPassword">
                    <FormLabel><h1>Search here for health articles and topics.</h1></FormLabel>
                    <FormControl type="search" placeholder="Search" />
                </FormGroup>
                <Button variant="primary" type="search">Search</Button>
                <h6 className="mb-3">SaluDuo is an English/Spanish bilingual health portal featuring articles to help keep you informed and healthy. Search for what you'd like, and create an account with us to build your own library of articles you wish to come back to.</h6>
        </Container>
        </Jumbotron>

        <Container>
            <Container className="text-center">
                <h4>Popular Articles</h4>
                <h6>Have a look at some of the most-read pages from our API:</h6>
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