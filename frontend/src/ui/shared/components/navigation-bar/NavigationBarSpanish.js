import React, {useEffect} from "react"
import {Nav, Navbar} from "react-bootstrap";
import {LanguageToggle} from "../LanguageToggle";
import {Link} from "react-router-dom";
import {LogInModalSpanish} from "../log-in/LogInModalSpanish";
import {SignUpModalSpanish} from "../sign-up/SignUpModalSpanish";
import {useDispatch, useSelector} from "react-redux";
import saluduoLogo from "../../../images/saluduo-logo.png";
import {getAuth} from "../../../../store/auth";
import {httpConfig} from "../../../../utils/httpConfig";

export const NavigationBarSpanish = () => {
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
                <Navbar.Brand href="#home"><img src={saluduoLogo} alt={"Saluduo Logo"} className={"logo-saluduo"} /></Navbar.Brand>
                <Navbar.Toggle aria-controls="basic-navbar-nav"/>
                <Navbar.Collapse id="basic-navbar-nav">
                    <Nav className="ml-auto">
                        <Link to="/" className={"nav-link px-3"}>Inicio</Link>
                        <Link to="/account" className={"nav-link px-3"}>Perfil</Link>
                        <LogInModalSpanish/>
                        <Link className={"nav-link px-3"} onClick={logOut}>Cerrar Sesión</Link>
                        <SignUpModalSpanish/>
                    </Nav>
                </Navbar.Collapse>
            </Navbar>
        </>
    )
}