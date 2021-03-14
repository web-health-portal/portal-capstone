import React from "react"
import {Button, Col, Container, Form, FormControl, FormGroup, Row} from "react-bootstrap";
import {ArticleSpanish} from "../shared/components/article/ArticleSpanish";
import "../styles.css"

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
                    <Col>
                        {/*TODO: map over articles here*/}
                    </Col>
                </Row>
            </Container>

        </>
    )
}