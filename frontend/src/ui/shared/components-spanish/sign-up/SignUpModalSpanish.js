import React, {useState} from "react";
import {Modal, Button} from "react-bootstrap";
import {Link} from "react-router-dom";
import {SignUpFormSpanish} from "./SignUpFormSpanish";

export const SignUpModalSpanish = () => {
    const [show, setShow] = useState(false);

    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);

    return (
        <>
            <Link className={"nav-link px-3"} onClick={handleShow}>
                Inscribirse
            </Link>
            <Modal show={show} onHide={handleClose}>
                <Modal.Header closeButton>
                    <Modal.Title>Welcome!</Modal.Title>
                </Modal.Header>
                <Modal.Body>
                    <SignUpFormSpanish/>
                </Modal.Body>
            </Modal>
        </>
    );
}