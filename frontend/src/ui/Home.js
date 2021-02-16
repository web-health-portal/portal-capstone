import React from "react"
import {Button, Container, Image, Row, Col, Form, FormLabel} from "react-bootstrap";
import {Article} from "./shared/components/Article";
import backgroundimage from "./background image.png";

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

                <Form.Group>
                    <FormLabel>Search for articles on a variety of health topics.</FormLabel>
                    <Form.Control type="text" placeholder="Search Health Topics and Articles"/>
                    <Button variant="primary" size="sm">Search</Button>
                <p>SaluDuo is a bilingual health portal with articles in both English and Spanish, covering a variety of topics to keep you informed and healthy. Search here to find articles from our API, and make an account with us to build your own library of articles you'd like to come back to.</p>
                </Form.Group>
            </Container>

            <Container>
                <h4>Popular Articles</h4>
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