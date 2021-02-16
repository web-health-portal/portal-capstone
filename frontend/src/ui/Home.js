import React from "react"
import {NavigationBar} from "./shared/components/NavigationBar";
import {Button, Container, Image, Row, Col, Form, FormLabel} from "react-bootstrap";
import {Article} from "./shared/components/Article";

const navLinks = [
    {name: "Sign Up", linkTo: "/sign-up"},
    {name: "Log In", linkTo: "/log-in"},
    ];

export const Home = () => {
    return (
        <>
            <NavigationBar links={navLinks}/>
            <Container>
                <FormGroup className={}>
                    <FormLabel>Search for articles on a variety of health topics.</FormLabel>
                    <FormControl type="text" placeholder="Search Health Topics and Articles"/>
                    <Button variant="primary" size="sm"}>Search</Button>
                <p>SaluDuo is a bilingual health portal with articles in both English and Spanish, covering a variety of topics to keep you informed and healthy. Search here to find articles from our API, and make an account with us to build your own library of articles you'd like to come back to.</p>
                </FormGroup>
            </Container>

            <Container>
                <h4>Popular Articles</h4>
                <Row>
                    <Col md={6}>
                        <Article articles={placeHolderArticle}/>
                        <Article articles={placeHolderArticle}/>
                        <Article articles={placeHolderArticle}/>
                        <Article articles={placeHolderArticle}/>
                    </Col>
                    <Col md={6}>
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