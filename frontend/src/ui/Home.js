import React from "react"
import {NavigationBar} from "./shared/components/NavigationBar";
import {Button, Container, Image, Row, Col, Form} from "react-bootstrap";
import {Article} from "./shared/components/Article";

const navLinks = [
    {name: "Sign Up", linkTo: "/sign-up"},
    {name: "Log In", linkTo: "/log-in"},
    ];

export const Home = () => {
    return (
        <>
            <NavigationBar links={navLinks}/>
            <Container
            <h2 className={"justify-content-center"}>Search Health Topics and Articles</h2>

// Popular
            <Container>
                <Row>
                    <Col lg={6}>
                        <Article={placeHolderArticle}/>
                        <Article={placeHolderArticle}/>
                        <Article={placeHolderArticle}/>
                        <Article={placeHolderArticle}/>
                    </Col>
                    <Col lg={6}>
                        <Article={placeHolderArticle}/>
                        <Article={placeHolderArticle}/>
                        <Article={placeHolderArticle}/>
                        <Article={placeHolderArticle}/>
                    </Col>
                </Row>
            </Container>
    )
}