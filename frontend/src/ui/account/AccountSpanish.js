import React from "react"
import {Form, Button, Col, Container, FormControl, FormGroup, Row} from "react-bootstrap";
import {library} from "@fortawesome/fontawesome-svg-core";
import {FontAwesomeIcon} from '@fortawesome/react-fontawesome'
import {faUser, faCamera} from "@fortawesome/free-solid-svg-icons";
import {ArticleSpanish} from "../shared/components/article/ArticleSpanish";
import {useDispatch, useSelector} from "react-redux";
import {fetchAllSavedArticles} from "../../store/savedArticle/savedArticle";

library.add(faCamera, faUser);


export const AccountSpanish = (props) => {

    // subscribe using useSelector to the slice of store you care about
    const {spanishSavedArticle} = props;

    return (
        <>
            <h1 className={"mx-3"}>Perfil</h1>
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
                                    <Form.Label>Nombre:</Form.Label>
                                    <Form.Control type={"text"} placeholder={"Nombre"}/>
                                </FormGroup>
                                <FormGroup>
                                    <Form.Label>Correo electrónico:</Form.Label>
                                    <Form.Control type={"email"} placeholder={"su-correo@dominio.com"}/>
                                </FormGroup>
                                <Form.Group controlId="language-selector">
                                    <Form.Label>Idioma:</Form.Label>
                                    <Form.Control as="select">
                                        <option>English</option>
                                        <option>Español</option>
                                    </Form.Control>
                                </Form.Group>
                                <Button variant={"primary"}>Guardar</Button>
                            </Form>
                        </Row>
                        <Row className={"mt-1"}>
                        </Row>
                    </Col>
                    <Col md={8} className={"pt-3"}>
                        <h3>Buscar Artículos Guardados</h3>
                        <Row>
                            <Form inline className={"mx-3"}>
                                <FormGroup className={"container d-flex justify-content-between"}>
                                    <FormControl type="text" placeholder="Busque sus articulos" className="mr-md-2"/>
                                    <Button variant="primary" className={"py-sm-2 ml-2"}>Buscar</Button>
                                </FormGroup>
                            </Form>
                        </Row>
                        <Row>
                            <Container>
                                <Row>
                                    <Col>
                                        {
                                            spanishSavedArticle.map(article => <ArticleSpanish key={article.articleId}
                                                                                               article={article}/>)
                                        }
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