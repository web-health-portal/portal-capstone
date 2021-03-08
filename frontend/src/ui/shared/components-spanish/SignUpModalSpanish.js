import React, {useState} from "react";
import {Modal, Form, Button} from "react-bootstrap";
import {Link} from "react-router-dom";

export const SignUpModalSpanish = () => {
    const [show, setShow] = useState(false);

    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);

    return (
        <>
            <Link className={"nav-link px-3"} onClick={handleShow}>
                Sign Up
            </Link>
            <Modal show={show} onHide={handleClose}>
                <Modal.Header closeButton>
                    <Modal.Title>Bienvenido!</Modal.Title>
                </Modal.Header>
                <Modal.Body>
                    {/*form*/}
                    <Form>
                        {/*-name*/}
                        <Form.Group controlId="formName">
                            <Form.Label>Nombre</Form.Label>
                            <Form.Control type="name" placeholder="Nombre" />
                        </Form.Group>
                        {/*-email*/}
                        <Form.Group controlId="formBasicEmail">
                            <Form.Label>Correo electrónico</Form.Label>
                            <Form.Control type="email" placeholder="Correo electrónico" />
                        </Form.Group>
                        {/*password*/}
                        <Form.Group controlId="formBasicPassword">
                            <Form.Label>Contraseña</Form.Label>
                            <Form.Control type="password" placeholder="Contraseña" />
                        </Form.Group>
                        {/*verify password*/}
                        <Form.Group controlId="formBasicPassword">
                            <Form.Label>Confirmar contraseña </Form.Label>
                            <Form.Control type="password" placeholder="Confirme su contraseña" />
                        </Form.Group> {/*some verification code here*/}
                        {/*-language preference*/}
                        <Form.Group controlId="languagePreference">
                            <Form.Label>Idioma de preferencia</Form.Label>
                            <Form.Control as="select" className="mr-sm-2" id="inlineFormCustomSelect" custom>
                                <option value="Elegir Idioma"></option>
                                <option value="English">English</option>
                                <option value="Español">Español</option>
                            </Form.Control>
                        </Form.Group>
                        {/*Photo?*/}
                        {/*Recaptcha??*/}
                    </Form>

                </Modal.Body>
                <Modal.Footer>
                    <Button variant="primary" onClick={handleClose}>Enviar</Button>
                </Modal.Footer>
            </Modal>
        </>
    );
}