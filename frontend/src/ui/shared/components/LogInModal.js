import React, {useState} from "react";
import {Modal, Form, Button} from "react-bootstrap";

export const LogInModal = ({showModal}) => {
    const [show, setShow] = useState({showModal});

    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);

    return (
        <>
            {/*<<<<< how to connect to log-in link>>>>>>>*/}

            <Modal show={show} onHide={handleClose}>
                <Modal.Header closeButton>
                    <Modal.Title>Welcome back!</Modal.Title>
                </Modal.Header>
                <Modal.Body>
                    {/*form for email and password*/}
                    <Form>
                        <Form.Group controlId="formBasicEmail">
                            <Form.Label>Email address</Form.Label>
                            <Form.Control type="email" placeholder="Enter email"/>
                        </Form.Group>

                        <Form.Group controlId="formBasicPassword">
                            <Form.Label>Password</Form.Label>
                            <Form.Control type="password" placeholder="Password"/>
                        </Form.Group>
                    </Form>
                </Modal.Body>
                <Modal.Footer>
                    <Button variant="primary" onClick={handleClose}>Log In</Button>
                </Modal.Footer>
            </Modal>
        </>
    );
}
