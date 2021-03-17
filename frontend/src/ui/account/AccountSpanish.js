import React from "react"
import {Form, Button, Col, Container, FormControl, FormGroup, Row} from "react-bootstrap";
import {library} from "@fortawesome/fontawesome-svg-core";
import {FontAwesomeIcon} from '@fortawesome/react-fontawesome'
import {faUser, faCamera} from "@fortawesome/free-solid-svg-icons";
import {ArticleSpanish} from "../shared/components/article/ArticleSpanish";
import "../styles.css"

library.add(faCamera, faUser);


export const AccountSpanish = (props) => {
    const {spanishSavedArticle} = props;
    const {username} = props;

    return (
        <>
            <h1 className={"mx-3"}>Perfil</h1>
            <h3 className={"mx-3"}>{`Bienvenido ${username}`}</h3>
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
                        <h3>Historial de Artículos Guardados</h3>
                        <Row>
                            <Container>
                                <Row>
                                    <Col className={"article-grid"}>
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