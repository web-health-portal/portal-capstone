import React, {useEffect} from "react"
import {Nav, Navbar} from "react-bootstrap";
import {LanguageToggle} from "../LanguageToggle";
import {Link} from "react-router-dom";
import {LogInModal} from "../log-in/LogInModal";
import {SignUpModal} from "../sign-up/SignUpModal";
import {useDispatch, useSelector} from "react-redux";
import {fetchAuth} from "../../../../store/auth";

export const NavigationBarEnglish = () => {

    return (
        <>
            <Navbar bg="light" expand="lg">
                <Navbar.Brand href="#home">SaluDuo</Navbar.Brand>
                <Navbar.Toggle aria-controls="basic-navbar-nav"/>
                <Navbar.Collapse id="basic-navbar-nav">
                    <Nav className="ml-auto">
                        <Link to="/" className={"nav-link px-3"}>Home</Link>
                        <Link to="/account" className={"nav-link px-3"}>Account</Link>
                        <LogInModal/>
                        <Link to="/log-out" className={"nav-link px-3"}>Log Out</Link>
                        <SignUpModal/>
                    </Nav>
                </Navbar.Collapse>
            </Navbar>
        </>
    )
}