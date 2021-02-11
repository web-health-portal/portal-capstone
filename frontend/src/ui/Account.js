import React from "react"
import {NavigationBar} from "./shared/components/NavigationBar";
import {Form, Button, Col, Container, FormControl, FormGroup, Row} from "react-bootstrap";
import {library} from "@fortawesome/fontawesome-svg-core";
import {FontAwesomeIcon} from '@fortawesome/react-fontawesome'
import {faUser, faHome, faSignOutAlt, faCamera} from "@fortawesome/free-solid-svg-icons";
import {Article} from "./shared/components/Article";

library.add(faUser, faHome, faSignOutAlt, faCamera);

const navLinks = [
    {name: "Home", linkTo: "/"},
    {name: "Log Out", linkTo: "/log-out"},
];

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

export const Account = () => {
    return (
        <>
            <NavigationBar links={navLinks}/>
            <h1 className={"mx-3"}>Account</h1>
            <Container as={"section"} fluid className={"p-3"}>
                <Row>
                    <Col md={4} className={"border-right border-dark md-auto"}>
                        <Row className={"justify-content-center align-items-center"}>
                            <FontAwesomeIcon icon={faUser} size="10x" className={"p-4 border rounded-circle"}/>
                            <FontAwesomeIcon icon={faCamera} size="lg"/>
                        </Row>
                        <Row className={"mt-1 justify-content-center"}>
                            <Form className={"px-3"}>
                                <FormGroup>
                                    <Form.Label>Name:</Form.Label>
                                    <Form.Control type={"text"} placeholder={"Name"}/>
                                </FormGroup>
                                <FormGroup>
                                    <Form.Label>Email:</Form.Label>
                                    <Form.Control type={"email"} placeholder={"name@your-email.com"}/>
                                </FormGroup>
                                <Form.Group controlId="language-selector">
                                    <Form.Label>Language:</Form.Label>
                                    <Form.Control as="select">
                                        <option>English</option>
                                        <option>Spanish</option>
                                    </Form.Control>
                                </Form.Group>
                                <Button variant={"primary"}>Save</Button>
                            </Form>
                        </Row>
                        <Row className={"mt-1"}>
                        </Row>
                    </Col>
                    <Col md={8} className={"pt-3"}>
                        <h3>Search Saved Articles</h3>
                        <Row>
                            <Form inline className={"mx-3"}>
                                <FormGroup>
                                    <FormControl type="text" placeholder="Search" className="py-3 mr-md-2"/>
                                    <Button variant="primary">Search</Button>
                                </FormGroup>
                            </Form>
                        </Row>
                        <Row>
                            <Container>
                                <Row>
                                    <Col lg={6}>
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
                                    </Col>
                                </Row>
                            </Container>
                        </Row>
                    </Col>
                </Row>

            </Container>
        </>
    )
}