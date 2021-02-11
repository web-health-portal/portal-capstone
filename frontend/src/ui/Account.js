import React from "react"
import {NavigationBar} from "./shared/components/NavigationBar";
import {Form, Button, Col, Container, FormControl, FormGroup, Row} from "react-bootstrap";
import {library} from "@fortawesome/fontawesome-svg-core";
import {FontAwesomeIcon} from '@fortawesome/react-fontawesome'
import {faUser} from "@fortawesome/free-solid-svg-icons";

library.add(faUser);

const navLinks = [
    {name: "Home", linkTo: "/"},
    {name: "Log Out", linkTo: "/log-out"},
];


export const Account = () => {
    return (
        <>
            <NavigationBar links={navLinks}/>
            <h1 className={"mx-3"}>Account</h1>
            <Container as={"section"} fluid className={"p-3"}>
                <Row>
                    <Col md={4} className={"border-right border-dark"}>
                        <FontAwesomeIcon icon={faUser} size="10x" className={"p-4 border rounded-circle"}/>
                        <Row className={"mt-1"}>
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
                                    <Form.Label>Example select</Form.Label>
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
                    <Col md={8}>
                        <h3>Search Saved Articles</h3>
                        <Row>
                            <Form inline className={"mx-3"}>
                                <FormGroup>
                                    <FormControl type="text" placeholder="Search" className="mr-sm-2"/>
                                    <Button variant="primary">Search</Button>
                                </FormGroup>
                            </Form>
                        </Row>

                    </Col>
                </Row>

            </Container>
        </>
    )
}