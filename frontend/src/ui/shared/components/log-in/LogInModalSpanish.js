import React, {useState} from "react";
import {Modal, Form, Button} from "react-bootstrap";
import {Link} from "react-router-dom";
import {LogInFormSpanish} from "./LogInFormSpanish";

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
                    <LogInFormSpanish/>
                </Modal.Body>
            </Modal>
        </>
    );
}