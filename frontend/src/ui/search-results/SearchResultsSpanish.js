import React from "react"
import {Button, Col, Container, Form, FormControl, FormGroup, Row} from "react-bootstrap";
import {Article} from "../shared/components/Article";

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

export const SearchResultsSpanish = ({keyword}) => {
    //set prop to dummy value for now
    keyword = "diabetes";
    return (
        <>
            <Container className={"pt-4"}>
                <Col md={8} className={"pt-3"}>
                    <h3>Resultados de búsqueda para {keyword}</h3>
                    <Row>
                        <Form inline className={"mx-3"}>
                            <FormGroup className={"container d-flex justify-content-between"}>
                                <FormControl type="text" placeholder="Another Search" className="mr-md-2"/>
                                <Button variant="primary" className={"py-sm-2 ml-2"}>Buscar</Button>
                            </FormGroup>
                        </Form>
                    </Row>
                </Col>
            </Container>
            <Container>
                <Row>
                    <Col lg={6}>
                        <Article articles={placeHolderArticle}/>
                        <Article articles={placeHolderArticle}/>
                        <Article articles={placeHolderArticle}/>
                        <Article articles={placeHolderArticle}/>
                        <Article articles={placeHolderArticle}/>
                        <Article articles={placeHolderArticle}/>
                        <Article articles={placeHolderArticle}/>
                        <Article articles={placeHolderArticle}/>
                    </Col>
                    <Col lg={6}>
                        <Article articles={placeHolderArticle}/>
                        <Article articles={placeHolderArticle}/>
                        <Article articles={placeHolderArticle}/>
                        <Article articles={placeHolderArticle}/>
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