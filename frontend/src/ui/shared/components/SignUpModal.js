import React, {useState} from "react";
import {Modal, Form, Button} from "react-bootstrap";

export const SignUpModal = ({showModal}) => {
    const [show, setShow] = useState({showModal});

    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);

    return (
        <>
            {/*<<<<< how to connect to sign-up link>>>>>>>*/}

            <Modal show={show} onHide={handleClose}>
                <Modal.Header closeButton>
                    <Modal.Title>Welcome!</Modal.Title>
                </Modal.Header>
                <Modal.Body>
                    {/*form*/}
                    <Form>
                        {/*-name*/}
                        <Form.Group controlId="formName">
                            <Form.Label>Name</Form.Label>
                            <Form.Control type="name" placeholder="Name" />
                        </Form.Group>
                        {/*-email*/}
                        <Form.Group controlId="formBasicEmail">
                            <Form.Label>Email address</Form.Label>
                            <Form.Control type="email" placeholder="Enter email" />
                        </Form.Group>
                        {/*password*/}
                        <Form.Group controlId="formBasicPassword">
                            <Form.Label>Password</Form.Label>
                            <Form.Control type="password" placeholder="Password" />
                        </Form.Group>
                        {/*verify password*/}
                        <Form.Group controlId="formBasicPassword">
                            <Form.Label>Retype Password</Form.Label>
                            <Form.Control type="password" placeholder="Verify Password" />
                        </Form.Group> {/*some verification code here*/}
                        {/*-language preference*/}
                        <Form.Group controlId="languagePreference">
                            <Form.Label>Language Preference</Form.Label>
                            <Form.Control as="select" className="mr-sm-2" id="inlineFormCustomSelect" custom>
                                <option value="0">Choose</option>
                                <option value="English">English</option>
                                <option value="Español">Español</option>
                            </Form.Control>
                        </Form.Group>
                        {/*Photo?*/}
                        {/*Recaptcha??*/}
                    </Form>

                </Modal.Body>
                <Modal.Footer>
                    <Button variant="primary" onClick={handleClose}>Submit</Button>
                </Modal.Footer>
            </Modal>
        </>
    );
}