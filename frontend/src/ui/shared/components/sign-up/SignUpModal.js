import React, {useState} from "react";
import {Modal, Button} from "react-bootstrap";
import {Link} from "react-router-dom";
import {SignUpForm} from "./SignUpForm";

export const SignUpModal = () => {
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
                    <Modal.Title>Welcome!</Modal.Title>
                </Modal.Header>
                <Modal.Body>
                    <SignUpForm/>
                </Modal.Body>
            </Modal>
        </>
    );
}