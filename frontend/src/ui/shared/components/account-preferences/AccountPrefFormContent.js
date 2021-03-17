import React from "react";
import {Button, Form, FormGroup} from "react-bootstrap";

export const AccountPrefFormContent = (props) => {
    const {
        values
    } = props;
    console.log(values)


    return ( //form here
        <Form className={"px-3"}>
            <FormGroup>
                <Form.Label>Name:</Form.Label>
                <Form.Control type={"text"} placeholder={"Name"}/>
            </FormGroup>
            <FormGroup>
                <Form.Label>Email:</Form.Label>
                <Form.Control type={"email"} placeholder={"name@your-email.com"}/>
            </FormGroup>
            <Form.Group controlId="language-selector">
                <Form.Label>Language:</Form.Label>
                <Form.Control as="select">
                    <option>English</option>
                    <option>Español</option>
                </Form.Control>
            </Form.Group>
            <Button variant={"primary"}>Save</Button>
        </Form>
    )
}