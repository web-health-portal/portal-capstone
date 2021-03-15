import React, {useState} from "react";
import {Modal, Form, Button} from "react-bootstrap";
import {Link} from "react-router-dom";
import {LogInForm} from "./LogInForm";

export const LogInModal = () => {
    const [show, setShow] = useState(false);

    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);

    return (
        <>
            <Link className={"nav-link px-3"} onClick={handleShow}>
                Log In
            </Link>
            <Modal show={show} onHide={handleClose}>
                <Modal.Header closeButton>
                    <Modal.Title>Welcome back!</Modal.Title>
                </Modal.Header>
                <Modal.Body>
                    {/*form for email and password*/}
                    <LogInForm/>
                </Modal.Body>
            </Modal>
        </>
    );
}
