import React from "react"
import {Nav, Navbar} from "react-bootstrap";
import {LanguageToggle} from "./LanguageToggle";
import {Link} from "react-router-dom";

export const NavigationBar = (props) => {
    return (
        <>
            <Navbar bg="light" expand="lg">
                <Navbar.Brand href="#home">SaluDuo</Navbar.Brand>
                <Navbar.Toggle aria-controls="basic-navbar-nav"/>
                <Navbar.Collapse id="basic-navbar-nav">
                    <Nav className="ml-auto">
                        {/*map props for link name and link location to Link component*/}
                        {props.links.map((link, idx) => (
                            <Link
                                key={idx}
                                to={link.linkTo}
                                className={"nav-link"}
                            >
                                {link.name}
                            </Link>
                        ))}
                    </Nav>
                </Navbar.Collapse>
            </Navbar>
            <LanguageToggle/>
        </>
    )
}