import React from "react"
import {Form, Button, Col, Container, FormControl, FormGroup, Row} from "react-bootstrap";
import {library} from "@fortawesome/fontawesome-svg-core";
import {FontAwesomeIcon} from '@fortawesome/react-fontawesome'
import {faUser, faCamera} from "@fortawesome/free-solid-svg-icons";
import {Article} from "../shared/components/Article";
import {fetchAllSavedArticles} from "../../store/savedArticle";

library.add(faCamera, faUser);


export const Account = () => {
    return (
        <>
            <h1 className={"mx-3"}>Account</h1>
            <Container as={"section"} fluid className={"p-3"}>
                <Row>
                    <Col md={4} className={"border-right border-dark md-auto"}>
                        <Row className={"justify-content-center align-items-center"}>
                            <FontAwesomeIcon icon={faUser} size="10x" className={"p-4 border rounded-circle"}/>
                            <FontAwesomeIcon icon={faCamera} size="lg" className={"mx-2"}/>
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
                                        <option>Español</option>
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
                                <FormGroup className={"container d-flex justify-content-between"}>
                                    <FormControl type="text" placeholder="Search Your Articles" className="mr-md-2"/>
                                    <Button variant="primary" className={"py-sm-2 ml-2"}>Search</Button>
                                </FormGroup>
                            </Form>
                        </Row>
                        <Row>
                            <Container>
                                <Row>
                                    <Col>
                                        {/*TODO: Map over savedArticles to make <Article/> elements*/}
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