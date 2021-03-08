import React, {useState} from "react";
import {Modal, Form, Button} from "react-bootstrap";
import {Link} from "react-router-dom";

export const LogInModalSpanish = () => {
    const [show, setShow] = useState(false);

    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);

    return (
        <>
            <Link className={"nav-link px-3"} onClick={handleShow}>
                Iniciar sesión
            </Link>
            <Modal show={show} onHide={handleClose}>
                <Modal.Header closeButton>
                    <Modal.Title>
                        ¡Bienvenido de nuevo!
                    </Modal.Title>
                </Modal.Header>
                <Modal.Body>
                    {/*form for email and password*/}
                    <Form>
                        <Form.Group controlId="formBasicEmail">
                            <Form.Label>Correo electrónico</Form.Label>
                            <Form.Control type="email" placeholder="Enter email"/>
                        </Form.Group>

                        <Form.Group controlId="formBasicPassword">
                            <Form.Label>Contraseña</Form.Label>
                            <Form.Control type="password" placeholder="Password"/>
                        </Form.Group>
                    </Form>
                </Modal.Body>
                <Modal.Footer>
                    <Button variant="primary" onClick={handleClose}>Iniciar sesión</Button>
                </Modal.Footer>
            </Modal>
        </>
    );
}