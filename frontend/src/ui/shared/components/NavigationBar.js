import React from "react"
import {Nav, Navbar} from "react-bootstrap";
import {LanguageToggle} from "./LanguageToggle";
import {Link} from "react-router-dom";

export const NavigationBar = () => {
    return (
        <>
            <Navbar bg="light" expand="lg">
                <Navbar.Brand href="#home">SaluDuo</Navbar.Brand>
                <Navbar.Toggle aria-controls="basic-navbar-nav"/>
                <Navbar.Collapse id="basic-navbar-nav">
                    <Nav className="ml-auto">
                        <Link to="/home" className={"nav-link px-3"}>Home</Link>
                        <Link to="/account" className={"nav-link px-3"}>Account</Link>
                        <Link to="/log-in" className={"nav-link px-3"}>Log In</Link>
                        <Link to="/log-out" className={"nav-link px-3"}>Log Out</Link>
                        <Link to="/sign-up" className={"nav-link px-3"}>Sign Up</Link>
                    </Nav>
                </Navbar.Collapse>
            </Navbar>
            <LanguageToggle/>
        </>
    )
}