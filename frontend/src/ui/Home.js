import React from "react"
import {Button, Container, Image, Row, Col, Form, FormLabel} from "react-bootstrap";
import {Article} from "./shared/components/Article";
import backgroundimage from "../images/backgroundimage.png";

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
            <div className="p-5 text-center bg-image" style="backgroundimage: url("../images/backgroundimage.png"); height: 400px;">
            <div className="d-flex justify-content-center align-items-center h-100">
                <div className="text-white">
                    <h1 className="mb-3">Heading</h1>
                    <h4 className="mb-3">Subheading</h4>
                    <a className="btn btn-outline-light btn-lg" href="#!" role="button">Call to action</a>
                </div>
            </div>
        </div>
        </div>
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