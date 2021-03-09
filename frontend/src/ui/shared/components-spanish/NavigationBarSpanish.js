import React from "react"
import {Nav, Navbar} from "react-bootstrap";
import {LanguageToggle} from "./../components/LanguageToggle";
import {Link} from "react-router-dom";
import {LogInModalSpanish} from "./LogInModalSpanish";
import {SignUpModalSpanish} from "./SignUpModalSpanish";

export const NavigationBarSpanish = () => {
    return (
        <>
            <Navbar bg="light" expand="lg">
                <Navbar.Brand href="#home">SaluDuo</Navbar.Brand>
                <Navbar.Toggle aria-controls="basic-navbar-nav"/>
                <Navbar.Collapse id="basic-navbar-nav">
                    <Nav className="ml-auto">
                        <Link to="/" className={"nav-link px-3"}>Inicio</Link>
                        <Link to="/account/AccountSpanish" className={"nav-link px-3"}>Perfil</Link>
                        <LogInModalSpanish/>
                        <Link to="/log-out" className={"nav-link px-3"}>Cerrar Sesión</Link>
                        <SignUpModalSpanish/>
                    </Nav>
                </Navbar.Collapse>
            </Navbar>
            <LanguageToggle/>
        </>
    )
}