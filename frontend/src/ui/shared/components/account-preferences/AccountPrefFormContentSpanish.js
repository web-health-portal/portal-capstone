import React from "react";
import {Button, Form, FormGroup} from "react-bootstrap";


export const AccountPrefFormContentSpanish = (props) => {
    const {
        values
    } = props;
    console.log(values)


        return (
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
    )
}