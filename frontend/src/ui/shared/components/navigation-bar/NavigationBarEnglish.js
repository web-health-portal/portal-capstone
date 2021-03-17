import React, {useEffect} from "react"
import {Nav, Navbar} from "react-bootstrap";
import {LanguageToggle} from "../LanguageToggle";
import {Link} from "react-router-dom";
import {LogInModal} from "../log-in/LogInModal";
import {SignUpModal} from "../sign-up/SignUpModal";
import {useDispatch, useSelector} from "react-redux";
import {fetchAuth, getAuth} from "../../../../store/auth";
import {httpConfig} from "../../../../utils/httpConfig";

export const NavigationBarEnglish = () => {
    const dispatch = useDispatch()
    const logOut = () => {
        httpConfig.get('/apis/log-out/').then(reply => {

            if (reply.status === 200) {
                window.localStorage.removeItem('authorization')
                dispatch(getAuth(null))

            }
        })
    }

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
                        <Link className={"nav-link px-3"} onClick={logOut}>Log Out</Link>
                        <SignUpModal/>
                    </Nav>
                </Navbar.Collapse>
            </Navbar>
        </>
    )
}