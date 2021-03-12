import React from "react"
import {Button, Container, Row, Col, FormControl, FormGroup, Jumbotron} from "react-bootstrap";
import {ArticleSpanish} from "../shared/components-spanish/ArticleSpanish.js";
import "../home/styles.css"
import {useDispatch, useSelector} from "react-redux";
import {fetchAllRandomArticles} from "../../store/article";

// temporary placeholder to show an example article
// const placeHolderArticle = {
//     //Topic id to search by: 30615
//     //Link to English version: https://health.gov/myhealthfinder/api/v3/topicsearch.json?lang=en&topicId=30615
//     //Link to Spanish version: https://health.gov/myhealthfinder/api/v3/topicsearch.json?lang=es&topicId=30615
//     articleImageUrl: "https://health.gov/sites/default/files/2020-01/losingweight-2.jpg",
//     articleEnglishImageAlt: "Health care provider talking with woman",
//     articleEnglishTitle: "Losing Weight: Questions for the doctor",
//     articleEnglishDate: "1580741304",
//     articleSpanishTitle: "Preguntas para el doctor: Bajar de peso",
//     articleSpanishDate: "1580741304",
//     articleEnglishUrl: "https://health.gov/myhealthfinder/topics/health-conditions/obesity/losing-weight-questions-doctor",
//     articleSpanishImageAlt: "Preguntas para el doctor: Bajar de peso",
//     articleSpanishUrl: "https://health.gov/espanol/myhealthfinder/temas/enfermedades-problemas-salud/obesidad/preguntas-doctor-bajar-peso",
//     articleCategories: [
//         {
//             categoryEnglishName: "Doctor Visits, Obesity, Talking with the Doctor, Nutrition, Physical Activity",
//             categorySpanishName: "Consultas con el doctor, Obesidad, Charlas con el doctor, Nutrición, Actividad física"
//         },
//     ],
// }

export const HomeSpanish = () => {
    const articles = useSelector((state) => state.articles ? state.articles : [])



    const dispatch = useDispatch()
    const initialEffects = () => {
        dispatch(fetchAllRandomArticles())
    }

    React.useEffect(initialEffects, [])
    console.log("Random articles from Redux slice", articles)
    return (
        <>
            <Container>
                <Jumbotron className="background-image img-fluid">
                    <Container className="text-center p-1 mb-1 bg-light text-dark">
                        <h1>Busque artículos y temas relacionados con su salud.</h1>
                        SaluDuo es un portal de salud bilingüe, con el objetivo de proporcionar artículos en ingles y español para mantenerlo informado de su salud con la ayuda de un solo botón.
                        <p>Cree una cuenta con nosotros para crear su propia biblioteca de artículos que desee volver a ver en un futuro.</p>
                    </Container>
                    <FormGroup className="container p-1 d-flex justify-content-md-between" controlId="searchArticles">
                        <FormControl type="search" placeholder="¿En qué podemos ayudarle?"/>
                        <Button variant="primary mx-2" type="search">¡Buscar!</Button>
                    </FormGroup>
                </Jumbotron>
            </Container>

            <Container>
                <Container className="text-center">
                    <h4>Artículos relevantes</h4>
                    <h6>Estos son algunos temas y artículos que podrían interesarle:</h6>
                </Container>
                <Row>
                    <Col md="6">
                        {articles.map(article=><ArticleSpanish article={article}/>)}
                    </Col>
                </Row>
            </Container>
        </>
    )
}